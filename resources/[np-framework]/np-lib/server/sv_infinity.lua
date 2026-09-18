-- np-lib: sv_infinity.lua
NPInfinity = NPInfinity or {}
NPInfinity.Registry = {}
function NPInfinity.Register(self, name, handler)
    self.Registry[name] = handler
end
function NPInfinity.Trigger(self, name, src, args, cb)
    if self.Registry[name] then self.Registry[name](src, args, cb)
    elseif cb then cb(nil, "Infinity handler not found: " .. name) end
end
RegisterNetEvent("np-infinity:call")
AddEventHandler("np-infinity:call", function(name, callId, args)
    local src = source
    NPInfinity:Trigger(name, src, args, function(result, err)
        TriggerClientEvent("np-infinity:response", src, callId, result, err)
    end)
end)
exports("Register", function(name, handler) NPInfinity:Register(name, handler) end)
exports("Trigger",  function(name, src, args, cb) NPInfinity:Trigger(name, src, args, cb) end)