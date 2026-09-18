-- np-infinity: server/sv_infinity.lua
-- Server-side infinity handler registration

NPInfinityHandlers = NPInfinityHandlers or {}

function RegisterInfinityHandler(name, handler)
    NPInfinityHandlers[name] = handler
    print(('[np-infinity] Registered handler: %s'):format(name))
end

RegisterNetEvent('np-infinity:serverCall')
AddEventHandler('np-infinity:serverCall', function(name, callId, args)
    local src = source
    local handler = NPInfinityHandlers[name]
    if not handler then
        TriggerClientEvent('np-infinity:serverResponse', src, callId, nil, 'No handler: ' .. tostring(name))
        return
    end
    local ok, result = pcall(handler, src, args)
    if ok then
        TriggerClientEvent('np-infinity:serverResponse', src, callId, result, nil)
    else
        TriggerClientEvent('np-infinity:serverResponse', src, callId, nil, tostring(result))
    end
end)

exports('RegisterHandler', function(name, handler)
    RegisterInfinityHandler(name, handler)
end)

print('[np-infinity] Server loaded.')