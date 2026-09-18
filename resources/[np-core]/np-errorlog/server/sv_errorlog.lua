-- np-errorlog: server/sv_errorlog.lua
local errorLog = {}

RegisterNetEvent('np-errorlog:report')
AddEventHandler('np-errorlog:report', function(errData)
    local src = source
    local entry = {
        source = src,
        player = GetPlayerName(src),
        resource = errData.resource or 'unknown',
        message = errData.message or '',
        timestamp = os.time(),
    }
    table.insert(errorLog, entry)
    print(('[np-errorlog] ERROR from %s [%d]: %s'):format(entry.player, src, entry.message))
end)

exports('GetErrors', function() return errorLog end)
exports('ClearErrors', function() errorLog = {} end)

AddEventHandler('onResourceStart', function(res)
    if res ~= GetCurrentResourceName() then return end
    print('[np-errorlog] Error log server loaded.')
end)