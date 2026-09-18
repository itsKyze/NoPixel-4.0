-- Handles NPC vehicle flywheel RPM fade animation via state bag
AddStateBagChangeHandler("flywheelrpm", nil, function(bagName, key, data)
    npcglobalbreakcall = data[3]

    if npcglobalbreakcall == false then
        local npcVehicle    = GetEntityFromStateBagName(bagName)
        local driverSeat    = GetPedInVehicleSeat(vehicle, -1)

        -- Only process if this vehicle is not the local player's vehicle
        if driverSeat ~= player and npcVehicle ~= 0 then
            local npcDriver = GetPedInVehicleSeat(npcVehicle, -1)

            if DoesEntityExist(npcDriver) then
                local startTime     = GetGameTimer()
                npcfadeDuration     = data[2]
                npcstartValue       = data[1]

                -- Clamp start RPM to minimum 0.2 to avoid stalling sound
                if npcstartValue < 0.2 then
                    npcstartValue = 0.2
                end

                -- Interpolate RPM from startValue toward targetValue over fadeDuration seconds
                while true do
                    if not (currentTimennpc < npcfadeDuration) then break end
                    if DoesEntityExist(npcVehicle) ~= 1 then break end

                    Citizen.Wait(0)

                    if npcglobalbreakcall then break end

                    local elapsed       = (GetGameTimer() - startTime) / 1000
                    currentTimennpc     = elapsed

                    local interpolated  = npcstartValue + (targetValue - npcstartValue) * (currentTimennpc / npcfadeDuration)
                    SetVehicleCurrentRpm(npcVehicle, interpolated)
                end

                currentTimennpc = 0
            end
        end
    end
end)

-- Handles NPC gear shifts by adjusting top speed and briefly cutting engine power
AddStateBagChangeHandler("currentgear", nil, function(bagName, key, data)
    local npcVehicle    = GetEntityFromStateBagName(bagName)
    local newGear       = data

    if npcVehicle ~= 0 then
        local npcDriver = GetPedInVehicleSeat(npcVehicle, -1)

        -- Only process for other players' vehicles, not the local player's
        if npcDriver ~= player then
            local baseMaxSpeed = GetVehicleHandlingFloat(npcVehicle, "CHandlingData", "fInitialDriveMaxFlatVel") * 1.3333333333333333
            printDebug("Gear shift request recieved, Current Max Speed: " .. baseMaxSpeed, "gearshift")

            if DoesEntityExist(npcVehicle) == 1 then
                -- Apply new gear's top speed (+0.01 to avoid float equality issues)
                SetVehicleHandlingFloat(npcVehicle, "CHandlingData", "fInitialDriveMaxFlatVel", data[2] + 0.01)

                local appliedSpeed = data[2] * 1.3333333333333333
                printDebug("Entity Exists Applying, Gear: " .. data[1] .. " Max Speed: " .. appliedSpeed, "gearshift")

                -- Simulate gear change power cut for 215ms
                local shiftStart = GetGameTimer()
                while true do
                    if not ((GetGameTimer() - shiftStart) < 215) then break end
                    Citizen.Wait(0)
                    SetVehicleEnginePowerMultiplier(npcVehicle, 0.51)
                end

                -- Restore full engine power after gear change
                if DoesEntityExist(npcVehicle) == 1 then
                    SetVehicleEnginePowerMultiplier(npcVehicle, 1.0)
                end
            end
        end
    end
end)

-- Handles NPC engine audio profile changes (e.g. swapping engine sound bank)
AddStateBagChangeHandler("currentengine", nil, function(bagName, key, data)
    local npcVehicle    = nil
    local netId         = nil
    local isNewEntity   = nil  -- true if entity wasn't available immediately and had to be waited for

    local resolvedEntity = GetEntityFromStateBagName(bagName)

    if resolvedEntity == 0 then
        -- Entity not yet available; wait up to 3 seconds for it to appear
        local timedOut      = false
        local waitStart     = GetGameTimer()

        while true do
            local found = GetEntityFromStateBagName(bagName)
            if found ~= 0 then break end

            Citizen.Wait(0)

            if (GetGameTimer() - waitStart) > 3000 then
                timedOut = true
                break
            end
        end

        if timedOut then
            print("[C.H.A.S.E.R] [SYNC] Timeout on F3 ")
        else
            npcVehicle  = GetEntityFromStateBagName(bagName)
            netId       = NetworkGetNetworkIdFromEntity(npcVehicle)
            isNewEntity = true
        end
    else
        npcVehicle  = resolvedEntity
        netId       = NetworkGetNetworkIdFromEntity(npcVehicle)
    end

    local npcDriver     = GetPedInVehicleSeat(npcVehicle, -1)
    local driverExists  = DoesEntityExist(npcDriver)

    if driverExists then
        local newEngineData     = data
        local entityState       = Entity(npcVehicle).state
        local isBike            = GetVehicleClass(npcVehicle) == 18  -- class 18 = motorcycles; skip audio swap for bikes

        if npcVehicle ~= 0 then
            local localDriver = GetPedInVehicleSeat(vehicle, -1)

            -- Only process for other players' vehicles
            if localDriver ~= player then
                local npcDriverExists = DoesEntityExist(GetPedInVehicleSeat(npcVehicle, -1))

                if npcDriverExists then
                    if DoesEntityExist(npcVehicle) == 1 then
                        local previousEngine = entityState.currentengine

                        if previousEngine == nil then
                            -- First engine assignment: apply audio object directly
                            local resolvedNetEntity = NetworkGetEntityFromNetworkId(netId)
                            if not isBike then
                                ForceUseAudioGameObject(resolvedNetEntity, newEngineData[2])
                            end
                        else
                            -- Only update audio if the engine profile actually changed
                            if newEngineData[2] ~= previousEngine[2] and not isBike then
                                ForceUseAudioGameObject(npcVehicle, newEngineData[2])
                            end
                        end

                        -- If this entity was newly resolved after a wait, apply audio immediately
                        if isNewEntity and not isBike then
                            ForceUseAudioGameObject(npcVehicle, newEngineData[2])
                        end
                    end
                end
            end
        end
    end
end)

-- Syncs brake lights for NPC vehicles based on state bag changes
AddStateBagChangeHandler("isbraking", nil, function(bagName, key, data)
    local npcVehicle    = GetEntityFromStateBagName(bagName)
    local driverExists  = DoesEntityExist(GetPedInVehicleSeat(npcVehicle, -1))

    if driverExists then
        local isBraking     = data
        local entityState   = Entity(npcVehicle).state

        if npcVehicle ~= 0 then
            local npcDriver = GetPedInVehicleSeat(npcVehicle, -1)

            -- Only process for other players' vehicles
            if npcDriver ~= player then
                -- Don't process the local player's own vehicle
                if npcVehicle ~= vehicle then
                    while isBraking do
                        if DoesEntityExist(npcVehicle) ~= 1 then break end

                        Citizen.Wait(0)
                        SetVehicleBrakeLights(npcVehicle, true)

                        -- Stop the loop if the state bag reports braking ended
                        if entityState.isbraking == false then
                            SetVehicleBrakeLights(npcVehicle, false)
                            break
                        end
                    end
                end
            end
        end
    end
end)
