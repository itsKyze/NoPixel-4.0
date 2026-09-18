vehicleMetadata = {}

function GetChaserVehicleMetadata(netId, key)
    if not vehicleMetadata[netId] then return nil end
    if key then
        return vehicleMetadata[netId][key]
    end
    return vehicleMetadata[netId]
end

function SetChaserVehicleMetadata(netId, key, value)
    if not vehicleMetadata[netId] then
        vehicleMetadata[netId] = {}
    end
    vehicleMetadata[netId][key] = value

    local entity = NetworkGetEntityFromNetworkId(netId)
    if DoesEntityExist(entity) then
        Entity(entity).state:set("chaser_" .. key, value, true)
    end
end

function LoadChaserVehData()
    local content = LoadResourceFile(GetCurrentResourceName(), "chaser_vehdata.json")
    if content and content ~= "" then
        local status, data = pcall(json.decode, content)
        if status and data then
            return data
        end
    end
    return {}
end

function SaveChaserVehData(data)
    if not data then return end
    local encoded = json.encode(data, { indent = true })
    SaveResourceFile(GetCurrentResourceName(), "chaser_vehdata.json", encoded, -1)
end
