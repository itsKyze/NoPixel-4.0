-- np-polyzone: server/sv_polyzone.lua
-- Server-side polyzone stubs
local zones = {}

exports('RegisterZone', function(name, data)
    zones[name] = data
end)

exports('GetZone', function(name)
    return zones[name]
end)

exports('GetAllZones', function()
    return zones
end)

print('[np-polyzone] Server loaded.')