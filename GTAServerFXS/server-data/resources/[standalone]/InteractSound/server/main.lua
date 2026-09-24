-- InteractSound: server/main.lua
-- Handles server-side sound relay

RegisterNetEvent('InteractSound_SV:playWithinDistance')
AddEventHandler('InteractSound_SV:playWithinDistance', function(distance, soundName, soundRef)
    local src = source
    local srcCoords = GetEntityCoords(GetPlayerPed(src))
    for _, pid in ipairs(GetPlayers()) do
        local target = tonumber(pid)
        if target ~= src then
            local targetCoords = GetEntityCoords(GetPlayerPed(target))
            local dist = #(srcCoords - targetCoords)
            if dist <= distance then
                TriggerClientEvent('InteractSound_CL:playOnEntity', target, GetPlayerPed(src), soundName, soundRef)
            end
        end
    end
end)

RegisterNetEvent('InteractSound_SV:stop')
AddEventHandler('InteractSound_SV:stop', function(soundName)
    TriggerClientEvent('InteractSound_CL:stop', -1, soundName)
end)

print('[InteractSound] Server loaded.')
