-- ============================================================================
-- CHASER Server Engine & State Synchronization
-- ============================================================================

local function trim(s)
    if not s then return "" end
    return string.match(s, "^%s*(.-)%s*$") or s
end

-- Synchronizes state bags across network clients for NPC / remote vehicles
RegisterNetEvent("chaser:sync", function(netId, data, syncType)
    local src = source
    if not netId then return end

    local entity = NetworkGetEntityFromNetworkId(netId)
    if not DoesEntityExist(entity) then return end

    local state = Entity(entity).state
    if syncType == 0 then
        -- Flywheel RPM sync: { startValue, fadeDuration, faded }
        state:set("flywheelrpm", data, true)
    elseif syncType == 1 then
        -- Gear shift sync: { desiredgear, newMaxSpeed }
        state:set("currentgear", data, true)
    elseif syncType == 2 then
        -- Engine audio swap sync: { engineName, model/audioHash, netId }
        state:set("currentengine", data, true)
        SetChaserVehicleMetadata(netId, "currentengine", data)
    elseif syncType == 3 then
        -- Braking state sync: boolean
        state:set("isbraking", data, true)
    end
end)

-- Saves vehicle metadata like nitrous state
RegisterNetEvent("chaser:savemetadata", function(netId, metaType, data)
    local src = source
    if not netId or not metaType then return end

    SetChaserVehicleMetadata(netId, metaType, data)
end)

-- Sets driver assist state metadata
RegisterNetEvent("chaser:set:assists:meta", function(data)
    local src = source
    if not data or not data.vehicleId then return end

    local entity = NetworkGetEntityFromNetworkId(data.vehicleId)
    if DoesEntityExist(entity) then
        Entity(entity).state:set("chaser_assists", data, true)
        SetChaserVehicleMetadata(data.vehicleId, "assists", data)
    end
end)

-- Client requests existing vehicle tuning JSON data
RegisterNetEvent("chaser:requestExistingData", function()
    local src = source
    local data = LoadChaserVehData()
    TriggerClientEvent("chaser:receiveExistingData", src, data)
end)

-- Saves collected vehicle tuning JSON data
RegisterNetEvent("chaser:savejson", function(data)
    local src = source
    if not data then return end
    SaveChaserVehData(data)
end)

-- Request debug menu
RegisterNetEvent("chaser:rq:menu", function()
    local src = source
    local cfg = DebugConfig or {}
    if cfg.allowClientMenu ~= false then
        TriggerClientEvent("chaser:menu", src)
    end
end)

-- Send debug config to client
RegisterNetEvent("chaser:ac:fg", function()
    local src = source
    local cfg = DebugConfig or {}
    TriggerClientEvent("chaser:rc:fg", src,
        cfg.forceServerSettingsDefault or false,
        cfg.allowClientMenu ~= false,
        cfg.clutchKeyId or 26,
        cfg.clutchKeyGamepadId or 205,
        cfg.storeB4 ~= false,
        cfg.defaultGearRatio or 1.0,
        cfg.finalDrivePosLimit or 0.5,
        cfg.finalDriveNegLimit or -0.5,
        cfg.gearRatioMaxLimit or 3.0,
        cfg.storeB1 ~= false,
        cfg.minFlywheelWeight or 0.1,
        cfg.maxFlywheelWeight or 10.0,
        cfg.storeB2 ~= false,
        cfg.storeB3 ~= false,
        cfg.isUsingGamepad or false,
        cfg.rightAlignMenu or false,
        cfg.menuInImperialUnits or false,
        cfg.invertReverseControls or false
    )
end)

-- Automatically apply cached plate metadata when vehicle spawns/is created
AddEventHandler("entityCreated", function(entity)
    if DoesEntityExist(entity) and GetEntityType(entity) == 2 then
        Citizen.SetTimeout(500, function()
            if DoesEntityExist(entity) then
                local plate = trim(GetVehicleNumberPlateText(entity))
                if plate ~= "" and plateMetadata[plate] then
                    local netId = NetworkGetNetworkIdFromEntity(entity)
                    if netId and netId > 0 then
                        vehicleMetadata[netId] = plateMetadata[plate]
                        for k, v in pairs(plateMetadata[plate]) do
                            Entity(entity).state:set("chaser_" .. k, v, true)
                            if k == "currentengine" then
                                Entity(entity).state:set("currentengine", v, true)
                            end
                        end
                    end
                end
            end
        end)
    end
end)

-- Cleanup netId metadata when entity is removed
AddEventHandler("entityRemoved", function(entity)
    if GetEntityType(entity) == 2 then
        local netId = NetworkGetNetworkIdFromEntity(entity)
        if netId and vehicleMetadata[netId] then
            local plate = trim(GetVehicleNumberPlateText(entity))
            if plate ~= "" then
                plateMetadata[plate] = vehicleMetadata[netId]
            end
            vehicleMetadata[netId] = nil
        end
    end
end)

-- Optional admin command to open chaser menu
RegisterCommand("chasermenu", function(source, args)
    if source > 0 then
        TriggerClientEvent("chaser:menu", source)
    end
end, false)

-- Register RPC callbacks if RPC library is available
Citizen.CreateThread(function()
    if RPC and RPC.register then
        pcall(function()
            RPC.register("chaser:getMetadata", function(src, netId, key)
                return GetChaserVehicleMetadata(netId, key)
            end)
            RPC.register("chaser:getEngine", function(src, netId)
                local meta = GetChaserVehicleMetadata(netId, "currentengine")
                if meta then return meta[1] end
                return nil
            end)
        end)
    end
end)
