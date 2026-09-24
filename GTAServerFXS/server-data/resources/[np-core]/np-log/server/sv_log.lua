-- np-log: server/sv_log.lua
local LogLevel = { DEBUG=1, INFO=2, WARN=3, ERROR=4 }
local minLevel = LogLevel.INFO
local logBuffer = {}

local function addLog(level, resource, message, data)
    local entry = {
        level = level,
        resource = resource or 'server',
        message = message,
        data = data,
        time = os.time(),
    }
    table.insert(logBuffer, entry)
    if #logBuffer > 500 then table.remove(logBuffer, 1) end
    if LogLevel[level] and LogLevel[level] >= minLevel then
        print(('[np-log] [%s] [%s] %s'):format(level, resource, tostring(message)))
    end
end

exports('AddLog', function(level, resource, message, data)
    addLog(level or 'INFO', resource, message, data)
end)
exports('GetLogs', function(filter)
    if not filter then return logBuffer end
    local result = {}
    for _, e in ipairs(logBuffer) do
        if e.resource == filter or e.level == filter then
            table.insert(result, e)
        end
    end
    return result
end)
exports('ClearLogs', function() logBuffer = {} end)

RegisterNetEvent('np-log:clientLog')
AddEventHandler('np-log:clientLog', function(level, resource, message)
    addLog(level or 'INFO', resource or 'client', message)
end)

AddEventHandler('onResourceStart', function(res)
    if res ~= GetCurrentResourceName() then return end
    print('[np-log] Log server loaded.')
end)