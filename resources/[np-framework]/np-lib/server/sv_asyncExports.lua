-- np-lib: sv_asyncExports.lua - Async export bridge (Lua version)
-- This is the Lua equivalent of sv_asyncExports.js

if NPAsyncExports then return end  -- guard against double-load
NPAsyncExports = {}

local pendingCalls = {}
local callIdCounter = 0

---Invoke an export on a target resource asynchronously
---@param target string  resource name
---@param exportName string
---@param args table
---@param cb function(result, err)
function NPAsyncExports.Call(target, exportName, args, cb)
    callIdCounter = callIdCounter + 1
    local callId = callIdCounter
    pendingCalls[callId] = cb
    TriggerEvent('np-lib:asyncExport:call', target, exportName, callId, args)
    Citizen.SetTimeout(5000, function()
        if pendingCalls[callId] then
            local timedout = pendingCalls[callId]
            pendingCalls[callId] = nil
            if timedout then timedout(nil, 'Timeout') end
        end
    end)
end

AddEventHandler('np-lib:asyncExport:response', function(callId, result)
    if pendingCalls[callId] then
        local cb = pendingCalls[callId]
        pendingCalls[callId] = nil
        if cb then cb(result) end
    end
end)

exports('asyncExportLua', function(target, exportName, args, cb)
    NPAsyncExports.Call(target, exportName, args, cb)
end)