-- np-sync: server/sv_sync.lua
-- Synced native execution server side

RegisterNetEvent('np-sync:broadcast')
AddEventHandler('np-sync:broadcast', function(eventName, data)
    TriggerClientEvent('np-sync:' .. eventName, -1, data)
end)

RegisterNetEvent('np-sync:broadcastExcept')
AddEventHandler('np-sync:broadcastExcept', function(eventName, data)
    local src = source
    for _, pid in ipairs(GetPlayers()) do
        local target = tonumber(pid)
        if target ~= src then
            TriggerClientEvent('np-sync:' .. eventName, target, data)
        end
    end
end)

print('[np-sync] Server loaded.')