-- np-cleanup: server.lua
-- Cleans up world objects/entities periodically

CreateThread(function()
    while true do
        Wait(300000)  -- every 5 minutes
        TriggerClientEvent('np-cleanup:cleanupWorld', -1)
    end
end)

RegisterNetEvent('np-cleanup:requestCleanup')
AddEventHandler('np-cleanup:requestCleanup', function()
    TriggerClientEvent('np-cleanup:cleanupWorld', source)
end)

print('[np-cleanup] Server loaded.')
