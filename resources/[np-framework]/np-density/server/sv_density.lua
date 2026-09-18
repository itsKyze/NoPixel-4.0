-- np-density: server/sv_density.lua
local densityZones = {}

exports('SetZoneDensity', function(zoneName, density)
    densityZones[zoneName] = density
    TriggerClientEvent('np-density:update', -1, zoneName, density)
end)

exports('GetZoneDensity', function(zoneName)
    return densityZones[zoneName] or 1.0
end)

print('[np-density] Server loaded.')