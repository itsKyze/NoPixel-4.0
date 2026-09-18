-- np-ui: server/sv_ui.lua
-- Server-side UI controls

exports('ShowNotification', function(src, message, notifType, duration)
    TriggerClientEvent('np-ui:notification', src, message, notifType or 'info', duration or 5000)
end)

exports('ShowHelpText', function(src, message)
    TriggerClientEvent('np-ui:helpText', src, message)
end)

exports('HideHelpText', function(src)
    TriggerClientEvent('np-ui:hideHelpText', src)
end)

exports('SendAlert', function(src, alertData)
    TriggerClientEvent('np-ui:alert', src, alertData)
end)

AddEventHandler('onResourceStart', function(res)
    if res ~= GetCurrentResourceName() then return end
    print('[np-ui] Server loaded.')
end)
