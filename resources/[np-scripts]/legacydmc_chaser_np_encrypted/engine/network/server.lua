-- Handles synchronizing state bags across network clients for NPC / remote vehicles
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
    TriggerClientEvent("chaser:menu", src)
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

-- Cleanup when entity is deleted
AddEventHandler("entityRemoved", function(entity)
    if GetEntityType(entity) == 2 then
        local netId = NetworkGetNetworkIdFromEntity(entity)
        if netId and vehicleMetadata[netId] then
            vehicleMetadata[netId] = nil
        end
    end
end)
