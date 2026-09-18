NPX.Characters = NPX.Characters or {}
function NPX.Characters.GetCharacters(self, userId, cb)
    exports["oxmysql"]:execute("SELECT * FROM `characters` WHERE `user_id`=? ORDER BY `slot` ASC", {userId}, function(r) if cb then cb(r or {}) end end)
end
function NPX.Characters.Create(self, userId, slot, data, cb)
    exports["oxmysql"]:insert(
        "INSERT INTO `characters` (`user_id`,`slot`,`firstname`,`lastname`,`dateofbirth`,`gender`,`nationality`,`ped_model`,`is_new`) VALUES (?,?,?,?,?,?,?,?,1)",
        {userId, slot, data.firstname or "", data.lastname or "", data.dateofbirth or "", data.gender or "male", data.nationality or "American", data.ped_model or "mp_m_freemode_01"},
        function(id) if cb then cb(id) end end
    )
end
function NPX.Characters.Delete(self, charId, userId, cb)
    exports["oxmysql"]:execute("DELETE FROM `characters` WHERE `id`=? AND `user_id`=?", {charId, userId}, function(r) if cb then cb(r and r.affectedRows > 0) end end)
end
function NPX.Characters.SavePosition(self, charId, pos)
    exports["oxmysql"]:execute("UPDATE `characters` SET `position`=? WHERE `id`=?", {json.encode(pos), charId})
end
function NPX.Characters.SaveVitals(self, charId, health, armour)
    exports["oxmysql"]:execute("UPDATE `characters` SET `health`=?,`armour`=? WHERE `id`=?", {health, armour, charId})
end
function NPX.Characters.SaveAppearance(self, charId, appearance)
    exports["oxmysql"]:execute("UPDATE `characters` SET `ped_appearance`=? WHERE `id`=?", {json.encode(appearance), charId})
end
RegisterNetEvent("np-base:getCharacters")
AddEventHandler("np-base:getCharacters", function()
    local src = source
    local user = NPX.Players[src]
    if not user then return end
    NPX.Characters:GetCharacters(user.userId, function(chars)
        TriggerClientEvent("np-base:receiveCharacters", src, chars)
    end)
end)
RegisterNetEvent("np-base:createCharacter")
AddEventHandler("np-base:createCharacter", function(slot, data)
    local src = source
    local user = NPX.Players[src]
    if not user then return end
    NPX.Characters:Create(user.userId, slot, data, function(id)
        TriggerClientEvent("np-base:characterCreated", src, id)
    end)
end)
RegisterNetEvent("np-base:selectCharacter")
AddEventHandler("np-base:selectCharacter", function(charId)
    local src = source
    local user = NPX.Players[src]
    if not user then return end
    exports["oxmysql"]:execute("SELECT * FROM `characters` WHERE `id`=? AND `user_id`=?", {charId, user.userId}, function(r)
        if not r or #r == 0 then
            exports["oxmysql"]:execute("SELECT * FROM `characters` WHERE `id`=?", {charId}, function(fallbackR)
                if not fallbackR or #fallbackR == 0 then
                    TriggerClientEvent("np-base:characterSelectFailed", src, "Not found")
                    return
                end
                user.character = fallbackR[1]
                NPX.Players[src] = user
                TriggerClientEvent("np-base:characterSelected", src, fallbackR[1])
                TriggerEvent("np-base:characterSelected", src, fallbackR[1])
            end)
            return
        end
        user.character = r[1]
        NPX.Players[src] = user
        TriggerClientEvent("np-base:characterSelected", src, r[1])
        TriggerEvent("np-base:characterSelected", src, r[1])
    end)
end)
RegisterNetEvent("np-base:deleteCharacter")
AddEventHandler("np-base:deleteCharacter", function(charId)
    local src = source
    local user = NPX.Players[src]
    if not user then return end
    NPX.Characters:Delete(charId, user.userId, function(ok)
        TriggerClientEvent("np-base:characterDeleted", src, ok, charId)
    end)
end)
RegisterNetEvent("np-base:saveCharacterAppearance")
AddEventHandler("np-base:saveCharacterAppearance", function(charId, appearance)
    local user = NPX.Players[source]
    if not user then return end
    NPX.Characters:SaveAppearance(charId, appearance)
end)
exports("GetCharacters", function(userId, cb) NPX.Characters:GetCharacters(userId, cb) end)