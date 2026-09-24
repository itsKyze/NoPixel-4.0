-- np-voice: server/modules/sv_proximity.lua
-- Proximity voice chat module
local PROXIMITY_RADIUS = 8.0

CreateThread(function()
    while true do
        Wait(1000)
        local players = GetPlayers()
        for i = 1, #players do
            local src = tonumber(players[i])
            local srcCoords = GetEntityCoords(GetPlayerPed(src))
            local nearby = {}
            for j = 1, #players do
                local target = tonumber(players[j])
                if target ~= src then
                    local targetCoords = GetEntityCoords(GetPlayerPed(target))
                    if #(srcCoords - targetCoords) <= PROXIMITY_RADIUS then
                        table.insert(nearby, target)
                    end
                end
            end
            TriggerClientEvent('np-voice:proximityUpdate', src, nearby)
        end
    end
end)
