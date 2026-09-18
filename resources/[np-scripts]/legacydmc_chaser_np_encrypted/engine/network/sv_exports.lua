exports("GetVehicleMetadata", function(netId, key)
    return GetChaserVehicleMetadata(netId, key)
end)

exports("SetVehicleMetadata", function(netId, key, value)
    return SetChaserVehicleMetadata(netId, key, value)
end)

exports("GetVehicleEngine", function(netId)
    local meta = GetChaserVehicleMetadata(netId, "currentengine")
    if meta then return meta[1] end
    return nil
end)

exports("SetVehicleEngine", function(netId, engineName, audioHash)
    local entity = NetworkGetEntityFromNetworkId(netId)
    if DoesEntityExist(entity) then
        local data = { engineName, audioHash or engineName, netId }
        Entity(entity).state:set("currentengine", data, true)
        SetChaserVehicleMetadata(netId, "currentengine", data)
    end
end)
