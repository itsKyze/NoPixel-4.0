local scriptLoaded

while true do
    scriptLoaded = chaser_getloadstatus()
    if scriptLoaded then
        break
    end
    Citizen.Wait(0)
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)

        if isinacar then
            if isdriver then
                if isengineon then

                    if caristurnedoff then
                        caristurnedoff = false
                        upshift()
                        Citizen.Wait(10)
                        downshift()
                    end

                    if desiredgear > 0 then
                        if invertedcontrols then
                            SetVehicleControlsInverted(vehicle, false)
                            invertedcontrols = false
                            printDebug("Vehicle Controls Back to normal.", "gearshift")
                        end
                    end

                    if hardspeedcap then
                        while speedkmh > 303 do
                            printDebug("Hard Speed Cap Active", "assists")
                            Citizen.Wait(0)
                            for step = speedcapmultiplier, 0.01, -0.01 do
                                speedcapmultiplier = step
                                Citizen.Wait(0)
                            end
                            printDebug("Hard Speed Cap Ended", "assists")
                        end
                        speedcapmultiplier = 1
                    end

                    if tractioncontrol then
                        if not hardspeedcap then
                            while averagetraction > 2.75 and throttle >= 0.0 and speedkmh > 10 and not atcall and handbrakes < 0.992 do
                                printDebug("TCS Active", "assists")
                                tcsstate = true
                                Citizen.Wait(0)
                                for step = tractioncontrolmultiplier, 0.2, -0.01 do
                                    tractioncontrolmultiplier = step
                                    Citizen.Wait(0)
                                end
                                printDebug("TCS Ended", "assists")
                                tcsstate = false
                            end
                            tractioncontrolmultiplier = 1
                        end
                    end

                    -- drift/anti-lag rev-limiter assist
                    if callrevlimiter then
                        if averagetraction > 2.75 then
                            if speedkmh > topspeedgeartable[desiredgear + 1] * 0.15 then
                                if throttle > 0 then
                                    local lateralFactor = map(getLateralAcceleration(vehicle) / averagetraction, 0, 2, 0.25, 0.85)
                                    local waitDuration = (2 - 1 * currentdriftfactor) * 75 * lateralFactor

                                    interpolate_rpm(GetVehicleCurrentRpm(vehicle), 1.0, waitDuration / 1000, vehicle)

                                    local startTimer = GetGameTimer()
                                    while waitDuration > (GetGameTimer() - startTimer) do
                                        Citizen.Wait(0)
                                        SetVehicleCurrentRpm(vehicle, 1.0)
                                        if throttle <= 0 then
                                            break
                                        end
                                        Citizen.Wait(0)
                                    end

                                    if stabilitycontrol then
                                        ecsstate = true
                                        DisableControlAction(0, 71)
                                    end

                                    Citizen.Wait(waitDuration)
                                    ecsstate = false
                                end
                            end
                        end
                    end

                    -- simulate clutch slip / bounce off the rev limiter when flat-shifting at redline
                    if not isnotflying then
                        if normalizedrpm >= 0.99 then
                            if throttle >= 0.9 then
                                if not iselectric then
                                    local driveInertia = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fDriveInertia")
                                    local targetRpm = map(driveInertia, 1, 6, 0.95, 0.15)

                                    for rpm = 0.98, targetRpm, -0.01 do
                                        SetVehicleCurrentRpm(vehicle, rpm)
                                        Citizen.Wait(1)
                                    end

                                    DisableControlAction(0, 71, true)
                                    Citizen.Wait(100)
                                end
                            end
                        end
                    end

                    -- launch control
                    if canuselaunchcontrol then
                        if IsControlPressed(0, 71) then
                            if IsControlPressed(0, 76) then
                                if launchcontrolmode then
                                    if speedkmh < 1 then
                                        if desiredgear == 1 then
                                            if useintegratedhud then
                                                lcstate = "active"
                                            end

                                            local targetRpm = map(launchcontrolrpm, minRPM, maxRPM, 0.2, 1.0)
                                            if targetRpm < normalizedrpm then
                                                SetVehicleClutch(vehicle, 1.0)
                                                SetVehicleCurrentRpm(vehicle, targetRpm)
                                                DisableControlAction(0, 71, true)
                                                Citizen.Wait(5)
                                                SetVehicleClutch(vehicle, 1.0)
                                            end
                                        end
                                    end
                                end
                            else
                                if launchcontrolmode then
                                    if useintegratedhud then
                                        lcstate = "on"
                                    end
                                end
                            end
                        end

                        if not tractioncontrol then
                            SetVehicleHandlingFloat(vehicle, "CHandlingData", "fLowSpeedTractionLossMult", 0.0)
                        end

                        if launchcontrolmode then
                            if desiredgear == 1 then
                                if speedkmh > 1 then
                                    Citizen.Wait(3000)
                                end
                            end
                        end

                        if not tractioncontrol then
                            SetVehicleHandlingFloat(vehicle, "CHandlingData", "fLowSpeedTractionLossMult", 0.15)
                        end

                        if speedkmh > 1 then
                            if launchcontrolmode then
                                lcstate = "off"
                                launchcontrolmode = false
                            end
                        end
                    end

                    -- wheelie state control
                    -- original decompiled code: the "wheeliestate > 65" branch nested inside the else
                    -- below can never be true (wheeliestate hasn't changed since the outer check just
                    -- failed), so that block is dead code. Only the desiredgear > 1 forced-down branch
                    -- ever actually executes on that path. Preserved as-is rather than restructured.
                    if wheeliestate > 65 then
                        if desiredgear == 1 then
                            if launchcontrolmode == false then
                                Citizen.Wait(3000)

                                local rampDuration = 0.25
                                local targetValue = 1.0
                                local elapsedSeconds = 0
                                local startWheelieState = wheeliestate
                                local startTimer = GetGameTimer()

                                while rampDuration > elapsedSeconds do
                                    Citizen.Wait(0)
                                    elapsedSeconds = (GetGameTimer() - startTimer) / 1000
                                    local interpolated = startWheelieState + (targetValue - startWheelieState) * (elapsedSeconds / rampDuration)
                                    SetVehicleWheelieState(vehicle, math.floor(interpolated))
                                end
                            end
                        end
                    else
                        if wheeliestate > 65 then -- dead: unreachable, see note above
                            if desiredgear == 1 then
                                if launchcontrolmode then
                                    SetVehicleWheelieState(vehicle, 1)
                                end
                            end
                        else
                            if wheeliestate > 65 then
                                if desiredgear > 1 then
                                    SetVehicleWheelieState(vehicle, 1)
                                end
                            end
                        end
                    end

                    -- invert-reverse-controls steering bias ramp
                    if invertreversecontrols then
                        if desiredgear == 0 then
                            DisableControlAction(0, 34, false)
                            DisableControlAction(0, 35, false)
                            SetInputExclusive(0, 34)

                            startValue = steerbias
                            endTime = GetGameTimer() + duration

                            while IsDisabledControlPressed(0, 34) do
                                Citizen.Wait(0)
                                steertargetvalue = 1.0

                                if IsDisabledControlPressed(0, 35) then
                                    break
                                end

                                if GetGameTimer() < endTime then
                                    steerbias = startValue + (steertargetvalue - startValue) * ((GetGameTimer() - (endTime - duration)) / duration)
                                else
                                    steerbias = steertargetvalue
                                end

                                SetVehicleSteerBias(vehicle, 1.0 * steerbias)
                            end

                            while IsDisabledControlPressed(0, 35) do
                                Citizen.Wait(0)

                                if IsDisabledControlPressed(0, 34) then
                                    break
                                end

                                steertargetvalue = 1.0

                                if GetGameTimer() < endTime then
                                    steerbias = startValue + (steertargetvalue - startValue) * ((GetGameTimer() - (endTime - duration)) / duration)
                                else
                                    steerbias = steertargetvalue
                                end

                                SetVehicleSteerBias(vehicle, -1.0 * steerbias)
                            end

                            local controlCheck = IsDisabledControlPressed(0, 35)
                            if controlCheck ~= false then
                                controlCheck = IsDisabledControlPressed(0, 34)
                            end
                            if controlCheck == false then
                                steerbias = 0.0
                            end
                        end
                    end

                end
            end
        else
            -- engine-off handling while still seated in the vehicle
            if not isengineon then
                if isinacar then
                    if isdriver then
                        if speedkmh > 10 then
                            DisableControlAction(0, 59, true)
                            caristurnedoff = true
                        end
                    end
                end
            end
        end
    end
end)
