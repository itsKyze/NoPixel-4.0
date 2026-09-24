Sync = {}

function RequestSyncExecution(native, entity, ...)
    if DoesEntityExist(entity) and NetworkGetEntityIsNetworked(entity) then
        TriggerServerEvent('sync:request', GetInvokingResource(), native,
            GetPlayerServerId(NetworkGetEntityOwner(entity)), NetworkGetNetworkIdFromEntity(entity), ...)
    end
end

Sync.DeleteVehicle = function(vehicle)
    if NetworkHasControlOfEntity(vehicle) then
        DeleteVehicle(vehicle)
    else
        RequestSyncExecution("DeleteVehicle", vehicle)
    end
end

Sync.DeleteEntity = function(entity)
    if NetworkHasControlOfEntity(entity) then
        DeleteEntity(entity)
    else
        RequestSyncExecution("DeleteEntity", entity)
    end
end

Sync.DeletePed = function(ped)
    if NetworkHasControlOfEntity(ped) then
        DeletePed(ped)
    else
        RequestSyncExecution("DeletePed", ped)
    end
end

Sync.DeleteObject = function(object)
    if NetworkHasControlOfEntity(object) then
        DeleteObject(object)
    else
        RequestSyncExecution("DeleteObject", object)
    end
end

Sync.SetVehicleFuelLevel = function(vehicle, level)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleFuelLevel(vehicle, level)
    else
        RequestSyncExecution("SetVehicleFuelLevel", vehicle, level)
    end
end

Sync.SetVehicleTyreBurst = function(vehicle, index, onRim, p3)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleTyreBurst(vehicle, index, onRim, p3)
    else
        RequestSyncExecution("SetVehicleTyreBurst", vehicle, index, onRim, p3)
    end
end

Sync.SetVehicleDoorShut = function(vehicle, doorIndex, closeInstantly)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleDoorShut(vehicle, doorIndex, closeInstantly)
    else
        RequestSyncExecution("SetVehicleDoorShut", vehicle, doorIndex, closeInstantly)
    end
end

Sync.SetVehicleDoorOpen = function(vehicle, doorIndex, loose, openInstantly)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleDoorOpen(vehicle, doorIndex, loose, openInstantly)
    else
        RequestSyncExecution("SetVehicleDoorOpen", vehicle, doorIndex, loose, openInstantly)
    end
end

Sync.SetVehicleDoorBroken = function(vehicle, doorIndex, deleteDoor)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleDoorBroken(vehicle, doorIndex, deleteDoor)
    else
        RequestSyncExecution("SetVehicleDoorBroken", vehicle, doorIndex, deleteDoor)
    end
end

Sync.SetVehicleEngineOn = function(vehicle, value, instantly, noAutoTurnOn)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleEngineOn(vehicle, value, instantly, noAutoTurnOn)
    else
        RequestSyncExecution("SetVehicleEngineOn", vehicle, value, instantly, noAutoTurnOn)
    end
end

Sync.SetVehicleUndriveable = function(vehicle, toggle)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleUndriveable(vehicle, toggle)
    else
        RequestSyncExecution("SetVehicleUndriveable", vehicle, toggle)
    end
end

Sync.SetVehicleHandbrake = function(vehicle, toggle)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleHandbrake(vehicle, toggle)
    else
        RequestSyncExecution("SetVehicleHandbrake", vehicle, toggle)
    end
end

Sync.DecorSetFloat = function(entity, propertyName, value)
    if NetworkHasControlOfEntity(entity) then
        DecorSetFloat(entity, propertyName, value)
    else
        RequestSyncExecution("DecorSetFloat", entity, propertyName, value)
    end
end

Sync.DecorSetBool = function(entity, propertyName, value)
    if NetworkHasControlOfEntity(entity) then
        DecorSetBool(entity, propertyName, value)
    else
        RequestSyncExecution("DecorSetBool", entity, propertyName, value)
    end
end

Sync.DecorSetInt = function(entity, propertyName, value)
    if NetworkHasControlOfEntity(entity) then
        DecorSetInt(entity, propertyName, value)
    else
        RequestSyncExecution("DecorSetInt", entity, propertyName, value)
    end
end

Sync.DetachEntity = function(entity, p1, collision)
    if NetworkHasControlOfEntity(entity) then
        DetachEntity(entity, p1, collision)
    else
        RequestSyncExecution("DetachEntity", entity, p1, collision)
    end
end

Sync.SetEntityCoords = function(entity, xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea)
    if NetworkHasControlOfEntity(entity) then
        SetEntityCoords(entity, xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea)
    else
        RequestSyncExecution("SetEntityCoords", entity, xPos, yPos, zPos, xAxis, yAxis, zAxis, clearArea)
    end
end

Sync.SetEntityHeading = function(entity, heading)
    if NetworkHasControlOfEntity(entity) then
        SetEntityHeading(entity, heading)
    else
        RequestSyncExecution("SetEntityHeading", entity, heading)
    end
end

Sync.FreezeEntityPosition = function(entity, freeze)
    if NetworkHasControlOfEntity(entity) then
        FreezeEntityPosition(entity, freeze)
    else
        RequestSyncExecution("FreezeEntityPosition", entity, freeze)
    end
end

Sync.SetVehicleDoorsLocked = function(entity, status)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleDoorsLocked(entity, status)
    else
        RequestSyncExecution("SetVehicleDoorsLocked", entity, status)
    end
end

Sync.NetworkExplodeVehicle = function(vehicle, isAudible, isInvisible, p3)
    if NetworkHasControlOfEntity(vehicle) then
        NetworkExplodeVehicle(vehicle, isAudible, isInvisible, p3)
    else
        RequestSyncExecution("NetworkExplodeVehicle", vehicle, isAudible, isInvisible, p3)
    end
end

Sync.SetBoatAnchor = function(vehicle, state)
    if NetworkHasControlOfEntity(vehicle) then
        SetBoatAnchor(vehicle, state)
    else
        RequestSyncExecution("SetBoatAnchor", vehicle, state)
    end
end

Sync.SetBoatFrozenWhenAnchored = function(vehicle, state)
    if NetworkHasControlOfEntity(vehicle) then
        SetBoatFrozenWhenAnchored(vehicle, state)
    else
        RequestSyncExecution("SetBoatFrozenWhenAnchored", vehicle, state)
    end
end

Sync.SetForcedBoatLocationWhenAnchored = function(vehicle, state)
    if NetworkHasControlOfEntity(vehicle) then
        SetForcedBoatLocationWhenAnchored(vehicle, state)
    else
        RequestSyncExecution("SetForcedBoatLocationWhenAnchored", vehicle, state)
    end
end

Sync.SetVehicleOnGroundProperly = function(vehicle)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleOnGroundProperly(vehicle)
    else
        RequestSyncExecution("SetVehicleOnGroundProperly", vehicle)
    end
end

Sync.SetVehicleTyreFixed = function(vehicle, index)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleTyreFixed(vehicle, index)
    else
        RequestSyncExecution("SetVehicleTyreFixed", vehicle, index)
    end
end

Sync.SetVehicleEngineHealth = function(vehicle, health)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleEngineHealth(vehicle, health + 0.0)
    else
        RequestSyncExecution("SetVehicleEngineHealth", vehicle, health + 0.0)
    end
end

Sync.SetVehicleBodyHealth = function(vehicle, health)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleBodyHealth(vehicle, health + 0.0)
    else
        RequestSyncExecution("SetVehicleBodyHealth", vehicle, health + 0.0)
    end
end

Sync.SetVehicleDeformationFixed = function(vehicle)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleDeformationFixed(vehicle)
    else
        RequestSyncExecution("SetVehicleDeformationFixed", vehicle)
    end
end

Sync.SetVehicleFixed = function(vehicle)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleFixed(vehicle)
    else
        RequestSyncExecution("SetVehicleFixed", vehicle)
    end
end

Sync.SetVehicleDeformationFixed = function(vehicle)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleDeformationFixed(vehicle)
    else
        RequestSyncExecution("SetVehicleDeformationFixed", vehicle)
    end
end

Sync.SetEntityAsNoLongerNeeded = function(entity)
    if NetworkHasControlOfEntity(entity) then
        SetEntityAsNoLongerNeeded(entity)
    else
        RequestSyncExecution("SetEntityAsNoLongerNeeded", entity)
    end
end

Sync.SetPedKeepTask = function(ped, keepTask)
    if NetworkHasControlOfEntity(ped) then
        SetPedKeepTask(ped, keepTask)
    else
        RequestSyncExecution("SetPedKeepTask", ped, keepTask)
    end
end

Sync.SetVehicleMods = function(vehicle, mods)
    if NetworkHasControlOfEntity(vehicle) then
        exports['np-vehicles']:SetVehicleMods(vehicle, mods)
    else
        RequestSyncExecution("SetVehicleMods", vehicle, mods)
    end
end

Sync.SetVehicleAppearance = function(vehicle, appearance)
    if NetworkHasControlOfEntity(vehicle) then
        exports['np-vehicles']:SetVehicleAppearance(vehicle, appearance)
    else
        RequestSyncExecution("SetVehicleAppearance", vehicle, appearance)
    end
end

Sync.SetVehicleTyresCanBurst = function(vehicle, enabled)
    if NetworkHasControlOfEntity(vehicle) then
        SetVehicleTyresCanBurst(vehicle, enabled)
    else
        RequestSyncExecution("SetVehicleTyresCanBurst", vehicle, enabled)
    end
end

Sync.BreakOffVehicleWheel = function(vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire)
    if NetworkHasControlOfEntity(vehicle) then
        BreakOffVehicleWheel(vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag, putOnFire)
    else
        RequestSyncExecution("BreakOffVehicleWheel", vehicle, wheelIndex, leaveDebrisTrail, deleteWheel, unknownFlag,
            putOnFire)
    end
end

Sync.SetVehicleLivery = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleLivery(entity, ...)
    else
        RequestSyncExecution("SetVehicleLivery", entity, ...)
    end
end

Sync.SetVehicleMod = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleMod(entity, ...)
    else
        RequestSyncExecution("SetVehicleMod", entity, ...)
    end
end

Sync.SetVehicleWindowTint = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleWindowTint(entity, ...)
    else
        RequestSyncExecution("SetVehicleWindowTint", entity, ...)
    end
end

Sync.SetVehicleNumberPlateTextIndex = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleNumberPlateTextIndex(entity, ...)
    else
        RequestSyncExecution("SetVehicleNumberPlateTextIndex", entity, ...)
    end
end

Sync.SetVehicleExtra = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleExtra(entity, ...)
    else
        RequestSyncExecution("SetVehicleExtra", entity, ...)
    end
end

Sync.SetVehicleWheelType = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleWheelType(entity, ...)
    else
        RequestSyncExecution("SetVehicleWheelType", entity, ...)
    end
end

Sync.SetVehicleNeonLightEnabled = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleNeonLightEnabled(entity, ...)
    else
        RequestSyncExecution("SetVehicleNeonLightEnabled", entity, ...)
    end
end

Sync.ToggleVehicleMod = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        ToggleVehicleMod(entity, ...)
    else
        RequestSyncExecution("ToggleVehicleMod", entity, ...)
    end
end

Sync.SetVehicleDashboardColor = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleDashboardColor(entity, ...)
    else
        RequestSyncExecution("SetVehicleDashboardColor", entity, ...)
    end
end

Sync.SetVehicleInteriorColor = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleInteriorColor(entity, ...)
    else
        RequestSyncExecution("SetVehicleInteriorColor", entity, ...)
    end
end


Sync.SetVehicleExtraColours = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleExtraColours(entity, ...)
    else
        RequestSyncExecution("SetVehicleExtraColours", entity, ...)
    end
end

Sync.SetVehicleModColor_1 = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleModColor_1(entity, ...)
    else
        RequestSyncExecution("SetVehicleModColor_1", entity, ...)
    end
end

Sync.SetVehicleModColor_2 = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleModColor_2(entity, ...)
    else
        RequestSyncExecution("SetVehicleModColor_2", entity, ...)
    end
end

Sync.SetVehicleNeonLightsColour = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleNeonLightsColour(entity, ...)
    else
        RequestSyncExecution("SetVehicleNeonLightsColour", entity, ...)
    end
end

Sync.SetVehicleCustomPrimaryColour = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleCustomPrimaryColour(entity, ...)
    else
        RequestSyncExecution("SetVehicleCustomPrimaryColour", entity, ...)
    end
end

Sync.SetVehicleCustomSecondaryColour = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleCustomSecondaryColour(entity, ...)
    else
        RequestSyncExecution("SetVehicleCustomSecondaryColour", entity, ...)
    end
end

Sync.SetVehicleTyreSmokeColor = function(entity, ...)
    if NetworkHasControlOfEntity(entity) then
        SetVehicleTyreSmokeColor(entity, ...)
    else
        RequestSyncExecution("SetVehicleTyreSmokeColor", entity, ...)
    end
end

Sync.TaskVehicleDriveWander = function(ped, vehicle, speed, drivingStyle)
    speed = speed + 0.0
    if NetworkHasControlOfEntity(vehicle) then
        TaskVehicleDriveWander(ped, vehicle, speed, drivingStyle)
    else
        RequestSyncExecution('TaskVehicleDriveWander', ped, vehicle, speed, drivingStyle)
    end
end