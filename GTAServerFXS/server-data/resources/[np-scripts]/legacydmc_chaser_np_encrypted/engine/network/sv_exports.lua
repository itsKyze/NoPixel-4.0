-- ============================================================================
-- CHASER Server Exports
-- ============================================================================

local function RegisterServerExport(exportName, exportFunc)
    if exportFunc == nil then return end
    pcall(function() exports(exportName, exportFunc) end)
    local curRes = GetCurrentResourceName()
    AddEventHandler("__cfx_export_" .. curRes .. "_" .. exportName, function(callback)
        callback(exportFunc)
    end)
    AddEventHandler("__cfx_export_legacydmc_chaser_np_" .. exportName, function(callback)
        callback(exportFunc)
    end)
    AddEventHandler("__cfx_export_legacydmc_chaser_np_encrypted_" .. exportName, function(callback)
        callback(exportFunc)
    end)
end

-- Metadata Getters & Setters
RegisterServerExport("GetVehicleMetadata", function(netId, key)
    return GetChaserVehicleMetadata(netId, key)
end)

RegisterServerExport("SetVehicleMetadata", function(netId, key, value)
    return SetChaserVehicleMetadata(netId, key, value)
end)

RegisterServerExport("GetPlateMetadata", function(plate, key)
    return GetChaserPlateMetadata(plate, key)
end)

RegisterServerExport("SetPlateMetadata", function(plate, key, value)
    return SetChaserPlateMetadata(plate, key, value)
end)

-- Engine Swap Getters & Setters
RegisterServerExport("GetVehicleEngine", function(netId)
    local meta = GetChaserVehicleMetadata(netId, "currentengine")
    if meta then return meta[1] end
    return nil
end)

RegisterServerExport("SetVehicleEngine", function(netId, engineName, audioHash)
    local entity = NetworkGetEntityFromNetworkId(netId)
    if DoesEntityExist(entity) then
        local data = { engineName, audioHash or engineName, netId }
        Entity(entity).state:set("currentengine", data, true)
        SetChaserVehicleMetadata(netId, "currentengine", data)
    end
end)

-- Assists Getters & Setters
RegisterServerExport("GetVehicleAssists", function(netId)
    return GetChaserVehicleMetadata(netId, "assists")
end)

RegisterServerExport("SetVehicleAssists", function(netId, assistsData)
    local entity = NetworkGetEntityFromNetworkId(netId)
    if DoesEntityExist(entity) then
        Entity(entity).state:set("chaser_assists", assistsData, true)
        SetChaserVehicleMetadata(netId, "assists", assistsData)
    end
end)

-- Nitrous Getters & Setters
RegisterServerExport("GetVehicleNitrous", function(netId)
    return GetChaserVehicleMetadata(netId, "nitrous")
end)

RegisterServerExport("SetVehicleNitrous", function(netId, nitrousData)
    local entity = NetworkGetEntityFromNetworkId(netId)
    if DoesEntityExist(entity) then
        Entity(entity).state:set("chaser_nitrous", nitrousData, true)
        SetChaserVehicleMetadata(netId, "nitrous", nitrousData)
    end
end)

-- Reloading & Config
RegisterServerExport("ReloadVehicleData", function()
    return LoadChaserVehData()
end)
