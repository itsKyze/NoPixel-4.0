NPX.Settings = NPX.Settings or {}
function NPX.Settings.Load(self, userId, cb)
    exports["oxmysql"]:scalar("SELECT `settings` FROM `user_settings` WHERE `user_id`=?", {userId}, function(r)
        if r then local ok,d=pcall(json.decode,r); if ok and d then cb(d); return end end
        cb(nil)
    end)
end
function NPX.Settings.Save(self, userId, settings)
    local enc = json.encode(settings)
    exports["oxmysql"]:execute(
        "INSERT INTO `user_settings` (`user_id`,`settings`) VALUES (?,?) ON DUPLICATE KEY UPDATE `settings`=?",
        {userId, enc, enc}
    )
end
RegisterNetEvent("np-base:sv:player_settings_set")
AddEventHandler("np-base:sv:player_settings_set", function(settings)
    local src = source
    local u = NPX.Players[src]
    if not u then return end
    NPX.Settings:Save(u.userId, settings)
end)
RegisterNetEvent("np-base:sv:player_settings_get")
AddEventHandler("np-base:sv:player_settings_get", function()
    local src = source
    local u = NPX.Players[src]
    if not u then return end
    NPX.Settings:Load(u.userId, function(s)
        TriggerClientEvent("np-base:cl:player_settings", src, s)
    end)
end)
AddEventHandler("np-base:characterSelected", function(src, char)
    local u = NPX.Players[src]
    if not u then return end
    NPX.Settings:Load(u.userId, function(s)
        TriggerClientEvent("np-base:cl:player_settings", src, s)
    end)
end)