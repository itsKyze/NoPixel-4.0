-- coordsaver: server.lua
-- Saves coordinates to a file for development use

RegisterNetEvent('coordsaver:saveCoords')
AddEventHandler('coordsaver:saveCoords', function(label, coords)
    local src = source
    if not IsPlayerAceAllowed(tostring(src), 'command') then return end
    local line = string.format('%s: vector3(%.4f, %.4f, %.4f)\n', label, coords.x, coords.y, coords.z)
    SaveResourceFile(GetCurrentResourceName(), 'saved_coords.txt', line, #line)
    TriggerClientEvent('chatMessage', src, '^2[CoordSaver] Saved: ' .. label)
end)

print('[coordsaver] Server loaded.')
