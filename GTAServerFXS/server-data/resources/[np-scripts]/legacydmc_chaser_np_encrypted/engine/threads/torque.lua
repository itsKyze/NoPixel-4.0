while not chaser_getloadstatus() do
    Citizen.Wait(0)
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)

        if isinacar then
            isdriver = GetPedInVehicleSeat(vehicle, -1) == player

            if isdriver then
                globaldeltatime = GetFrameTime()
                speedkmh = GetEntitySpeed(vehicle) * 3.6

                if iselectric then
                    SetVehicleClutch(vehicle, 1.0)
                    if speedkmh > cartopspeed then
                        if isnotflying then
                            setMaxSpeed(cartopspeed / 3.6)
                        end
                    else
                        setMaxSpeed(363.0)
                    end
                end

                brakes = GetControlNormal(0, 72)
                handbrakes = GetControlNormal(0, 76)
                steeringAngle = GetVehicleSteeringAngle(vehicle)
                slipangle, globalvelocity = getSlipAngle(vehicle, positionvector)
                isnotflying = IsVehicleOnAllWheels(vehicle)
                wheeliestate = GetVehicleWheelieState(vehicle)
                throttle = GetVehicleThrottleOffset(vehicle)
                normalizedrpm = GetVehicleCurrentRpm(vehicle)
                clutch = GetVehicleClutch(vehicle)

                hardspeedcap = speedkmh > 303

                if lateralcurve < 13.5 then
                    normalizetractionvectors()
                end

                -- top speed of the current gear expressed in m/s
                local gearTopSpeedMs = (topspeedgeartable[desiredgear + 1] * 0.75 * 1000 / 3600) * 1.2
                local throttleMapped = math.max(0.2, (speedkmh / 3.6) * (0.9 / gearTopSpeedMs))

                isonburnout = IsControlPressed(0, 71) and IsControlPressed(0, 72)
                isvalidvehicle = vehclass <= 7
                isengineon = GetIsVehicleEngineRunning(vehicle)

                realrpm = map(normalizedrpm, 0.2, 1.0, minRPM, maxRPM)
                normalizedTorque = calcTorque(torqueCurve, maxTorque, realrpm)
                normalizedTorque = normalizedTorque * 0.7

                local clutchTorque = calcTorque(torqueCurve, maxTorque, map(clutch, 0.2, 1.0, minRPM, maxRPM))
                local effectiveTorque
                if clutchTorque < normalizedTorque then
                    effectiveTorque = normalizedTorque
                else
                    effectiveTorque = clutchTorque
                end

                if clutch < 1.0 then
                    if desiredgear == 1 then
                        if throttle > 0.5 then
                            if clutchengaged then
                                normalizedTorque = effectiveTorque + (1 - clutch)
                            end
                        end
                    end
                end

                local speedFactor = map(speedkmh, 0, cartopspeed, 5, 0.54)

                local accelVal
                if not iselectric then
                    accelVal = baseacc * normalizedTorque * throttle * 3.333
                else
                    accelVal = currentacc * 1.1 * speedFactor
                end

                if usenewphysics then
                    enginetorque = originalvehicleweight * accelVal * currentwheelradius
                else
                    enginetorque = maxTorque * normalizedTorque
                end

                enginepowerhp = enginetorque * realrpm / 9549 / 0.745699872

                currentairresistance = dragcoeff * 0.9 * 1.0E-4 * (speedkmh / 3.6) ^ 2 * 1.1

                pitchangle = GetEntityRotation(vehicle, 2)

                local turboBoost = calculateturbocurve(
                    normalizedrpm, torqueincrease, peakturbodecayboost, turbodecaypoint,
                    maxtrboostpmax, maxtrboostpmin, maxtrboostpminprct, maxtrboostpmaxprct, booststartpoint
                )

                if boosttype == 0 then
                    curbfactorxpressure = turboBoost * turbopressure
                elseif boosttype == 1 then
                    curbfactorxpressure = torqueincrease * normalizedrpm * turbopressure
                elseif boosttype == 3 then
                    curbfactorxpressure = 0
                end

                if curbfactorxpressure < 0 then
                    curbfactorxpressure = 0
                end

                -- same formula as gearTopSpeedMs above; reused instead of recomputing
                local gearRatioForHillAssist = math.max(0.0, (speedkmh / 3.6) * (0.9 / gearTopSpeedMs))

                if desiredgear > 0 then
                    if enginebrakingactive == false then
                        if iselectric == false then
                            if not tcsstate then
                                if throttle >= 0.5 then
                                    if speedkmh * 0.621371 < 25 then
                                        if isengineon then
                                            local hillAssistThreshold
                                            -- original decompiled code used `goto lbl_400` here: if vehclass == 8
                                            -- and the ratio check below already passed, it jumped straight into
                                            -- the layouthash branch below, skipping the pitch-based branch entirely.
                                            local useForwardBlockA = false
                                            if vehclass == 8 then
                                                hillAssistThreshold = 0.33
                                                if gearRatioForHillAssist < hillAssistThreshold then
                                                    useForwardBlockA = true
                                                end
                                            end

                                            if useForwardBlockA or layouthash == -1458075324 then
                                                hillAssistThreshold = 0.33
                                                if useForwardBlockA or gearRatioForHillAssist < hillAssistThreshold then
                                                    normalizedTorque = 3.333
                                                    local steerRad = steeringAngle * math.pi / 180
                                                    local forceBase = 7.5 * throttle
                                                    local forceX = forceBase * math.sin(steerRad) -- unused, matches original (only forceY applied)
                                                    local forceY = forceBase * math.cos(steerRad)
                                                    if pitchangle.x >= 20.0 then
                                                        ApplyForceToEntityCenterOfMass(vehicle, 0, 0, forceY, 0, false, true, true, false)
                                                    end
                                                    printDebug("Hill Climb Assist Active", "assists")
                                                end
                                            else
                                                if pitchangle.x >= 20.0 then
                                                    if gearRatioForHillAssist < 0.25 then
                                                        normalizedTorque = 3.333
                                                        local steerRad = steeringAngle * math.pi / 180
                                                        local torqueWithBoost = enginetorque * throttle + enginetorque * (curbfactorxpressure / 100)
                                                        local forceScale = torqueWithBoost / 100.0
                                                        local forceX = forceScale * math.sin(steerRad) -- unused, matches original
                                                        local forceY = forceScale * math.cos(steerRad)
                                                        ApplyForceToEntityCenterOfMass(vehicle, 0, 0, forceY, 0, false, true, true, false)
                                                        printDebug("Hill Climb Assist Active", "assists")
                                                    end
                                                end
                                            end
                                        end
                                    end
                                end
                            end

                            SetVehicleCheatPowerIncrease(
                                vehicle,
                                (normalizedTorque * throttle + normalizedTorque * (curbfactorxpressure / 100) + nitrousboostfactor)
                                    * tractioncontrolmultiplier * speedcapmultiplier
                            )
                        end
                    end
                else
                    -- original decompiled code: this inner check is always false here (we're already in
                    -- the desiredgear <= 0 branch), so this engine-braking block is dead/unreachable.
                    if desiredgear > 0 then
                        if enginebrakingactive == true then
                            if iselectric == false then
                                SetVehicleCheatPowerIncrease(vehicle, -normalizedTorque)
                            end
                        end
                    else
                        if not tcsstate then
                            if clutch < 1.0 then
                                if throttle <= -0.5 then
                                    if speedkmh * 0.621371 < 5 then
                                        if isengineon then
                                            if pitchangle.x <= -20.0 then
                                                if vehclass ~= 8 then
                                                    normalizedTorque = 3.333
                                                    local steerRad = steeringAngle * math.pi / 180
                                                    local torqueWithBoost = enginetorque * throttle + enginetorque * (curbfactorxpressure / 100)
                                                    local forceScale = -torqueWithBoost / 100.0
                                                    local forceX = forceScale * math.sin(steerRad) -- unused, matches original
                                                    local forceY = forceScale * math.cos(steerRad)
                                                    ApplyForceToEntityCenterOfMass(vehicle, 0, 0, forceY, 0, false, true, true, false)
                                                    printDebug("Hill Climb Assist Active (Reverse)", "assists")
                                                end
                                            end
                                        end
                                    end
                                end
                            end
                        end

                        if iselectric == false then
                            SetVehicleCheatPowerIncrease(vehicle, normalizedTorque * -throttle)
                        end
                    end
                end

                if iselectric then
                    if pitchangle.x >= 20.0 then
                        if throttle >= 0.75 then
                            if speedkmh * 0.621371 < 25 then
                                normalizedTorque = 3.333
                                local steerRad = steeringAngle * math.pi / 180
                                local forceBase = 7.5 * throttle
                                local forceX = forceBase * math.sin(steerRad) -- unused, matches original
                                local forceY = forceBase * math.cos(steerRad)
                                ApplyForceToEntityCenterOfMass(vehicle, 0, 0, forceY, 0, false, true, true, false)
                                printDebug("Hill Climb Assist Active", "assists")
                            end
                        end
                    end

                    if isnitrousactive then
                        if desiredgear >= 1 then
                            SetVehicleCheatPowerIncrease(
                                vehicle,
                                (1.0 + nitrousboostfactor) * tractioncontrolmultiplier * speedcapmultiplier
                            )
                        end
                    end
                end
            end
        end
    end
end)
