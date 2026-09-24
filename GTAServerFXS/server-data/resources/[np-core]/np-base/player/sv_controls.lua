RegisterNetEvent("np-base:sv:freezePlayer")
AddEventHandler("np-base:sv:freezePlayer", function(state)
    TriggerClientEvent("np-base:cl:freezePlayer", source, state)
end)
RegisterNetEvent("np-base:sv:setInvisible")
AddEventHandler("np-base:sv:setInvisible", function(state)
    TriggerClientEvent("np-base:cl:setInvisible", source, state)
end)
RegisterNetEvent("np-base:sv:teleportToCoords")
AddEventHandler("np-base:sv:teleportToCoords", function(coords)
    local src = source
    if NPX.Rank:IsAdmin(src) then
        TriggerClientEvent("np-base:cl:teleportToCoords", src, coords)
    end
end)