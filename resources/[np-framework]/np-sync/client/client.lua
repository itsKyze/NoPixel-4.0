TriggerServerEvent("np:sync:player:ready")

RegisterNetEvent("sync:execute")
AddEventHandler("sync:execute", function(native, netID, ...)
    local entity = NetworkGetEntityFromNetworkId(netID)

    if not DoesEntityExist(entity) then
        return TriggerServerEvent('sync:execute:aborted', native, netID)
    end

    if Sync[native] then
        Sync[native](entity, ...)
    end
end)

local lastNativeExecuted = {}
local function delay(native, func, wait)
    local last = lastNativeExecuted[native] or 0
    return function(...)
        local now = GetGameTimer()
        if now - last > wait then
            lastNativeExecuted[native] = now
            return func(...)
        end
    end
end

function SyncedExecution(native, entity, ...)
    if not NetworkGetEntityIsNetworked(entity) or NetworkHasControlOfEntity(entity) then
        Sync[native](entity, ...)
    else
        local invokingResource = GetInvokingResource()
        if invokingResource == "bennys" then
            delay(native, RequestSyncExecution, 100)(native, entity, ...)
        else
            RequestSyncExecution(native, entity, ...)
        end
    end
end

exports("SyncedExecution", SyncedExecution)

--
-- better sync method
-- prob wanna use this instead
-- onesync needs to be better
--
-- options table:
-- - entity = { 1, 2, 4 }
-- - - table key IDs for network conversion

function syncNative(name, netEntity, options, ...)
    TriggerServerEvent("np-sync:executeSyncNative", name, netEntity, options, table.pack(...))
end

exports("syncNative", syncNative)

RegisterNetEvent("np-sync:clientExecuteSyncNative")
AddEventHandler("np-sync:clientExecuteSyncNative", function(native, netEntity, options, args)
    if options and options.entity then
        for _, v in pairs(options.entity) do
            args[v] = NetworkGetEntityFromNetworkId(args[v])
        end
    end
    if native == "0xB736A491E64A32CF" then
        SetEntityAsNoLongerNeeded(args[1])
        return
    end
    local result = Citizen.InvokeNative(native, table.unpack(args))
end)
