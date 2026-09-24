-- koil-debug: server.lua
-- Server-side debug utilities

RegisterNetEvent('koil-debug:log')
AddEventHandler('koil-debug:log', function(level, msg)
    local src = source
    print(('[koil-debug] [%s] [P:%d] %s'):format(level or 'INFO', src, tostring(msg)))
end)

RegisterCommand('debugplayer', function(src, args)
    if src ~= 0 and not IsPlayerAceAllowed(tostring(src), 'command') then return end
    local target = tonumber(args[1])
    if target then
        print(('[koil-debug] Player %d: %s | Ped: %d'):format(target, GetPlayerName(target), GetPlayerPed(target)))
    end
end, false)

print('[koil-debug] Server loaded.')
