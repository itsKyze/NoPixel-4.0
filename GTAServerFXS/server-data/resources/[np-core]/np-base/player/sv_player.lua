NPX.Player  = NPX.Player or {}
NPX.Players = NPX.Players or {}
function NPX.Player.New(self, src, data)
    local p = {
        source=src, userId=data.userId, license=data.license,
        license2=data.license2, steam=data.steam, discord=data.discord,
        fivem=data.fivem, role=data.role or "user",
        whitelist=data.whitelist or 0, character=nil, vars={},
    }
    function p:setVar(var, val) self.vars[var]=val; TriggerClientEvent("np-base:networkVar",src,var,val) end
    function p:getVar(var) return self.vars[var] end
    function p:getName() return GetPlayerName(self.source) end
    return p
end
local function GetOrCreateUser(src, cb)
    local license  = NPX.Util:GetLicense(src)
    local license2 = NPX.Util:GetLicense2(src)
    local steam    = NPX.Util:GetHexId(src)
    local discord  = NPX.Util:GetDiscord(src)
    local fivem    = NPX.Util:GetFivemId(src)
    local ip       = GetPlayerEndpoint(src)
    if not license then DropPlayer(src, "No license identifier. Restart FiveM."); return end
    exports["oxmysql"]:execute("SELECT * FROM `users` WHERE `license`=? LIMIT 1", {license}, function(results)
        if results and #results > 0 then
            local u = results[1]
            exports["oxmysql"]:execute("UPDATE `users` SET `license2`=?,`steam`=?,`discord`=?,`fivem`=?,`ip`=?,`last_seen`=NOW() WHERE `id`=?",
                {license2,steam,discord,fivem,ip,u.id})
            if u.is_banned == 1 then DropPlayer(src, "You are banned: "..(u.ban_reason or "Banned")); return end
            cb({userId=u.id,license=u.license,license2=u.license2,steam=u.steam,discord=u.discord,fivem=u.fivem,role=u.role,whitelist=u.whitelist,is_banned=u.is_banned})
        else
            exports["oxmysql"]:insert("INSERT INTO `users` (`license`,`license2`,`steam`,`discord`,`fivem`,`ip`) VALUES (?,?,?,?,?,?)",
                {license,license2,steam,discord,fivem,ip}, function(id)
                cb({userId=id,license=license,license2=license2,steam=steam,discord=discord,fivem=fivem,role="user",whitelist=0,is_banned=0})
            end)
        end
    end)
end
AddEventHandler("playerConnecting", function(name, setKickReason, deferrals)
    local src = source
    deferrals.defer()
    Citizen.Wait(0)
    deferrals.update("[NoPixel] Loading your profile...")
    GetOrCreateUser(src, function(data)
        if not data then deferrals.done("Failed to load profile."); return end
        NPX.Players[src] = NPX.Player:New(src, data)
        deferrals.done()
    end)
end)
AddEventHandler("playerDropped", function(reason)
    local src = source
    if NPX.Players[src] then
        TriggerEvent("np-base:playerDropped", src, reason)
        NPX.Players[src] = nil
    end
end)
RegisterNetEvent("np-base:requestPlayerData")
AddEventHandler("np-base:requestPlayerData", function()
    local src = source
    local u = NPX.Players[src]
    if not u then return end
    TriggerClientEvent("np-base:receivePlayerData", src, {userId=u.userId,role=u.role,whitelist=u.whitelist})
end)
exports("GetPlayer",      function(src) return NPX.Players[src] end)
exports("GetPlayers",     function() return NPX.Players end)
exports("GetPlayerCount", function()
    local n=0; for _ in pairs(NPX.Players) do n=n+1 end; return n
end)