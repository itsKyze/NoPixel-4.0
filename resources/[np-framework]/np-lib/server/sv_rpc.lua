-- np-lib: sv_rpc.lua - Server-side RPC / callback system for Lua resources

NPRPC = NPRPC or {}
NPRPC.Callbacks = {}

RPC = RPC or {}

local function ParamPacker(...)
    local params, pack = {...} , {}
    for i = 1, 15, 1 do
        pack[i] = {param = params[i]}
    end
    return pack
end

local function ParamUnpacker(params, index)
    local idx = index or 1
    if params and idx <= #params then
        local val = params[idx]
        if type(val) == "table" and val["param"] ~= nil then
            return val["param"], ParamUnpacker(params, idx + 1)
        else
            return val, ParamUnpacker(params, idx + 1)
        end
    end
end

function RPC.register(name, func)
    RegisterNetEvent("rpc:request:" .. name, function(origin, callID, params, isLua)
        local src = source
        local response
        local success, err = pcall(function()
            if isLua then
                response = ParamPacker(func(src, ParamUnpacker(params)))
            else
                local unpacked = {}
                if type(params) == "table" then
                    for _, v in ipairs(params) do
                        table.insert(unpacked, v)
                    end
                end
                local res = func(src, table.unpack(unpacked))
                response = res
            end
        end)

        if not success then
            print(string.format("[RPC-SERVER-LUA] Error in RPC %s: %s", tostring(name), tostring(err)))
            response = isLua and ParamPacker(nil) or nil
        end

        TriggerClientEvent("rpc:response", src, origin, callID, response, isLua)
    end)
end

--- Register a server-side callback that clients can trigger
---@param name string
---@param handler function(source, args, cb)
function NPRPC.RegisterCallback(name, handler)
    NPRPC.Callbacks[name] = handler
    RPC.register(name, function(src, ...)
        local p = promise.new()
        handler(src, {...}, function(result)
            p:resolve(result)
        end)
        return Citizen.Await(p)
    end)
end

--- Trigger a client-side callback from the server
---@param src number  player source
---@param name string callback name
---@param cb function  callback(result)
---@param ... any      arguments to send
function NPRPC.TriggerClientCallback(src, name, cb, ...)
    local callId = math.random(100000, 999999)
    local args = {...}
    -- Store pending
    if not NPRPC._Pending then NPRPC._Pending = {} end
    NPRPC._Pending[callId] = cb
    TriggerClientEvent('np-lib:rpc:callClient', src, name, callId, args)
    -- Timeout cleanup
    Citizen.SetTimeout(10000, function()
        if NPRPC._Pending and NPRPC._Pending[callId] then
            local timedoutCb = NPRPC._Pending[callId]
            NPRPC._Pending[callId] = nil
            if timedoutCb then timedoutCb(nil, 'Timeout') end
        end
    end)
end

-- Handle client calling server callback
RegisterNetEvent('np-lib:rpc:callServer')
AddEventHandler('np-lib:rpc:callServer', function(name, callId, args)
    local src = source
    local handler = NPRPC.Callbacks[name]
    if not handler then
        TriggerClientEvent('np-lib:rpc:serverResponse', src, callId, nil, 'No handler for: ' .. tostring(name))
        return
    end
    handler(src, args, function(result)
        TriggerClientEvent('np-lib:rpc:serverResponse', src, callId, result, nil)
    end)
end)

-- Handle client responding to server's callback request
RegisterNetEvent('np-lib:rpc:clientResponse')
AddEventHandler('np-lib:rpc:clientResponse', function(callId, result)
    if NPRPC._Pending and NPRPC._Pending[callId] then
        local cb = NPRPC._Pending[callId]
        NPRPC._Pending[callId] = nil
        if cb then cb(result) end
    end
end)

exports('RegisterCallback',      function(name, handler) NPRPC.RegisterCallback(name, handler) end)
exports('TriggerClientCallback', function(src, name, cb, ...) NPRPC.TriggerClientCallback(src, name, cb, ...) end)
exports('RPC', function() return RPC end)