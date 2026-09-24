vehicleMetadata = {}
plateMetadata = {}

-- Utility: trim string
local function trim(s)
    if not s then return "" end
    return string.match(s, "^%s*(.-)%s*$") or s
end

-- Get metadata by netId
function GetChaserVehicleMetadata(netId, key)
    if not netId then return nil end
    local meta = vehicleMetadata[netId]
    if not meta then
        -- Fallback check by entity plate
        local entity = NetworkGetEntityFromNetworkId(netId)
        if DoesEntityExist(entity) then
            local plate = trim(GetVehicleNumberPlateText(entity))
            if plate ~= "" and plateMetadata[plate] then
                meta = plateMetadata[plate]
                vehicleMetadata[netId] = meta
            end
        end
    end
    if not meta then return nil end
    if key then
        return meta[key]
    end
    return meta
end

-- Set metadata by netId
function SetChaserVehicleMetadata(netId, key, value)
    if not netId then return end
    if not vehicleMetadata[netId] then
        vehicleMetadata[netId] = {}
    end
    vehicleMetadata[netId][key] = value

    local entity = NetworkGetEntityFromNetworkId(netId)
    if DoesEntityExist(entity) then
        Entity(entity).state:set("chaser_" .. key, value, true)

        -- Cache by plate text as well
        local plate = trim(GetVehicleNumberPlateText(entity))
        if plate and plate ~= "" then
            if not plateMetadata[plate] then
                plateMetadata[plate] = {}
            end
            plateMetadata[plate][key] = value
        end
    end
end

-- Get metadata by plate
function GetChaserPlateMetadata(plate, key)
    plate = trim(plate)
    if plate == "" or not plateMetadata[plate] then return nil end
    if key then
        return plateMetadata[plate][key]
    end
    return plateMetadata[plate]
end

-- Set metadata by plate
function SetChaserPlateMetadata(plate, key, value)
    plate = trim(plate)
    if plate == "" then return end
    if not plateMetadata[plate] then
        plateMetadata[plate] = {}
    end
    plateMetadata[plate][key] = value
end

-- Load JSON tuning data from resource
function LoadChaserVehData()
    local content = LoadResourceFile(GetCurrentResourceName(), "chaser_vehdata.json")
    if content and content ~= "" then
        local status, data = pcall(json.decode, content)
        if status and type(data) == "table" then
            return data
        end
    end
    return {}
end

-- Save JSON tuning data to resource
function SaveChaserVehData(data)
    if not data or type(data) ~= "table" then return end
    local encoded = json.encode(data, { indent = true })
    SaveResourceFile(GetCurrentResourceName(), "chaser_vehdata.json", encoded, -1)
end
