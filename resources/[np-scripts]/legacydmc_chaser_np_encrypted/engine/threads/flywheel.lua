while true do
    if chaser_getloadstatus() then
        break
    end
    Citizen.Wait(0)
end

function TriggerFlywheelSync(rpmValue, faded)
    TriggerServerEvent("chaser:sync", vehnetid, { rpmValue, fadeDuration, faded }, 0)
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(75)

        if enableflywheel and isinacar and isdriver and not iselectric and lcstate ~= "active" then
            local currentRpm = GetVehicleCurrentRpm(vehicle)
            -- unclear intent: fadeDuration multiplied by currentRpm (not just fadeDuration) is used as the
            -- interpolation time base below in every branch
            local scaledFadeDuration = fadeDuration * currentRpm

            if throttle == 0 then
                if speedkmh < 1 then
                    -- Standing-start launch: clutch mostly disengaged, RPM held up
                    if clutch < 0.15 then
                        if normalizedrpm > 0.21 then
                            local startTime = GetGameTimer()
                            if currentRpm < 0.2 then
                                currentRpm = 0.2
                            end

                            TriggerFlywheelSync(currentRpm, false)

                            while true do
                                if not (scaledFadeDuration > currentTime) then
                                    break
                                end
                                Citizen.Wait(0)

                                if throttle > 0 or throttle < 0 then
                                    TriggerFlywheelSync(currentRpm, true)
                                    break
                                end

                                if enableflywheel == false then
                                    TriggerFlywheelSync(currentRpm, true)
                                    break
                                end

                                currentTime = (GetGameTimer() - startTime) / 1000
                                local newRpm = currentRpm + (targetValue - currentRpm) * (currentTime / scaledFadeDuration)
                                SetVehicleCurrentRpm(vehicle, newRpm)
                            end

                            currentTime = 0
                        end
                    end
                else
                    if speedkmh > 1 then
                        -- Rolling launch: clutch fully engaged (negative clutch reading)
                        if clutch < 0.0 then
                            if normalizedrpm > 0.21 then
                                local startTime = GetGameTimer()
                                if currentRpm < 0.2 then
                                    currentRpm = 0.2
                                end

                                TriggerFlywheelSync(currentRpm, true)

                                while true do
                                    if not (scaledFadeDuration > currentTime) then
                                        break
                                    end
                                    Citizen.Wait(0)

                                    if throttle > 0 or throttle < 0 then
                                        TriggerFlywheelSync(currentRpm, true)
                                        break
                                    end

                                    if clutch > 0 then
                                        TriggerFlywheelSync(currentRpm, true)
                                        break
                                    end

                                    currentTime = (GetGameTimer() - startTime) / 1000
                                    local newRpm = currentRpm + (targetValue - currentRpm) * (currentTime / scaledFadeDuration)
                                    SetVehicleCurrentRpm(vehicle, newRpm)
                                end

                                currentTime = 0
                            end
                        else
                            -- this branch re-checks speedkmh > 1 while already inside the "speedkmh > 1 is false"
                            -- path above, so it appears unreachable in practice; kept as-is from the original logic
                            if speedkmh > 1 then
                                if throttle <= 0.0 then
                                    if normalizedrpm > 0.21 then
                                        if isdrifting then
                                            local gearTopSpeed = topspeedgeartable[desiredgear + 1]
                                            local scaledGearSpeed = gearTopSpeed * 0.75 * 1000 / 3600 * 1.2
                                            -- computed but never used: the interpolation below still reads the
                                            -- global targetValue instead of this value; kept for functional parity
                                            local computedTarget = math.max(0.2, (speedkmh / 3.6) * (0.9 / scaledGearSpeed))

                                            local startTime = GetGameTimer()
                                            if currentRpm < 0.2 then
                                                currentRpm = 0.2
                                            end

                                            while true do
                                                if not (scaledFadeDuration > currentTime) then
                                                    break
                                                end
                                                Citizen.Wait(0)

                                                if throttle > 0 then
                                                    break
                                                end
                                                if throttle < 0 then
                                                    break
                                                end

                                                currentTime = (GetGameTimer() - startTime) / 1000
                                                local newRpm = currentRpm + (targetValue - currentRpm) * (currentTime / scaledFadeDuration)
                                                SetVehicleCurrentRpm(vehicle, newRpm)
                                            end

                                            currentTime = 0
                                        end
                                    end
                                end
                            end
                        end
                    end
                end
            end
        end
    end
end)
