-- np-pingcheck: server/sv_pingcheck.lua
-- Monitors player ping and kicks high-ping players

local pingConfig = {
    maxPing = 500,
    checkInterval = 10000,
    kickMessage = 'You were kicked due to high latency.',
    warnings = 3,
}

local warnings = {}

CreateThread(function()
    while true do
        Wait(pingConfig.checkInterval)
        for _, pid in ipairs(GetPlayers()) do
            local src = tonumber(pid)
            local ping = GetPlayerPing(src)
            if ping > pingConfig.maxPing then
                warnings[src] = (warnings[src] or 0) + 1
                TriggerClientEvent('chatMessage', src, '^1[PingCheck] High ping detected: ' .. ping .. 'ms')
                if warnings[src] >= pingConfig.warnings then
                    DropPlayer(src, pingConfig.kickMessage)
                    warnings[src] = nil
                end
            else
                warnings[src] = 0
            end
        end
    end
end)

AddEventHandler('playerDropped', function()
    warnings[source] = nil
end)

print('[np-pingcheck] Server loaded.')
