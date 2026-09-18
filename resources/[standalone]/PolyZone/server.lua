-- PolyZone: server.lua
-- Server-side stub for PolyZone resource
-- PolyZone is primarily a client-side resource; server side is minimal

local PolyZoneServer = {}

-- Allow other resources to check if PolyZone is running
exports('IsRunning', function()
    return true
end)

AddEventHandler('onResourceStart', function(resourceName)
    if GetCurrentResourceName() ~= resourceName then return end
    print('[PolyZone] Server side ready.')
end)
