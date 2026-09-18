local Resource, Promises, CallIdentifier = GetCurrentResourceName(), {}, 0

RPC = {}

function ClearPromise(callID)
    Citizen.SetTimeout(5000, function()
        Promises[callID] = nil
    end)
end

function ParamPacker(...)
    local params, pack = {...} , {}

    for i = 1, 15, 1 do
        pack[i] = {param = params[i]}
    end

    return pack
end

function ParamUnpacker(params, index)
    local idx = index or 1

    if idx <= #params then
        return params[idx]["param"], ParamUnpacker(params, idx + 1)
    end
end

function UnPacker(params, index)
    local idx = index or 1

    if idx <= 15 then
        return params[idx], UnPacker(params, idx + 1)
    end
end

function TriggerNetEvent(pEvent, ...)
    local payload = msgpack.pack({...})

    if payload:len() < 5000 then
        TriggerServerEventInternal(pEvent, payload, payload:len())
    else
        TriggerLatentServerEventInternal(pEvent, payload, payload:len(), 128000)
    end
end

------------------------------------------------------------------
--                  (Trigger Server Calls)
------------------------------------------------------------------

function RPC.execute(name, ...)
    local callID, solved = CallIdentifier, false
    CallIdentifier = CallIdentifier + 1

    Promises[callID] = promise:new()

    TriggerNetEvent("rpc:request:" .. name, Resource, callID, ParamPacker(...), true)

    Citizen.SetTimeout(20000, function()
        if not solved then
            Promises[callID]:resolve({nil})
            TriggerServerEvent("rpc:server:timeout", Resource, name)
        end
    end)

    local response = Citizen.Await(Promises[callID])

    solved = true

    ClearPromise(callID)

    return ParamUnpacker(response)
end

RPC.executeLatent = RPC.execute

RegisterNetEvent("rpc:response")
AddEventHandler("rpc:response", function(origin, callID, response)
    if Resource == origin and Promises[callID] then
        Promises[callID]:resolve(response)
    end
end)

------------------------------------------------------------------
--                  (Receive Remote Calls)
------------------------------------------------------------------

function RPC.register(name, func)
    RegisterNetEvent("rpc:request:" .. name, function(origin, callID, params)
        local response

        local success, error = pcall(function()
            if packaged then
                response = ParamPacker(func(ParamUnpacker(params)))
            else
                response = ParamPacker(func(UnPacker(params)))
            end
        end)

        if not success then
            TriggerServerEvent("rpc:client:error", Resource, origin, name, error)
        end

        if response == nil then
            response = {}
        end

        TriggerNetEvent("rpc:response", origin, callID, response, true)
    end)
end

function RPC.remove(name)
end

