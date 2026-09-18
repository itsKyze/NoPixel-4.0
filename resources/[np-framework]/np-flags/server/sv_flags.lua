-- np-flags: server/sv_flags.lua
local PlayerFlags = {}

exports('SetFlag', function(src, flag, value)
    if not PlayerFlags[src] then PlayerFlags[src] = {} end
    PlayerFlags[src][flag] = value
    TriggerClientEvent('np-flags:flagUpdated', src, flag, value)
end)

exports('GetFlag', function(src, flag)
    if not PlayerFlags[src] then return nil end
    return PlayerFlags[src][flag]
end)

exports('GetAllFlags', function(src)
    return PlayerFlags[src] or {}
end)

exports('ClearFlags', function(src)
    PlayerFlags[src] = {}
end)

RegisterNetEvent('np-flags:setFlag')
AddEventHandler('np-flags:setFlag', function(flag, value)
    local src = source
    exports(GetCurrentResourceName()).SetFlag(src, flag, value)
end)

AddEventHandler('playerDropped', function()
    PlayerFlags[source] = nil
end)

print('[np-flags] Server loaded.')