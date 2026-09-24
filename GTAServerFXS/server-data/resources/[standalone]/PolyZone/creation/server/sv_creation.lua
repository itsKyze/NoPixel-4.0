-- PolyZone: creation/server/sv_creation.lua
-- Handles zone creation/saving from client creator tools

local savedZones = {}

RegisterNetEvent('polyzone:saveZone')
AddEventHandler('polyzone:saveZone', function(zoneName, zoneData)
    local src = source
    if not IsPlayerAceAllowed(tostring(src), 'command') then return end
    savedZones[zoneName] = zoneData
    print(('[PolyZone] Zone saved: %s by %s'):format(zoneName, GetPlayerName(src)))
end)

RegisterNetEvent('polyzone:requestZones')
AddEventHandler('polyzone:requestZones', function()
    TriggerClientEvent('polyzone:receiveZones', source, savedZones)
end)
