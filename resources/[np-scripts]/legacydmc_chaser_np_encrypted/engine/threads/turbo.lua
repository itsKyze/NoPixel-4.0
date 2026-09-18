while true do
    if chaser_getloadstatus() then
        break
    end
    Citizen.Wait(0)
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)

        if isinacar and compressorsize ~= nil and compressorsize > 0 and isdriver then
            -- ---- Spool-up phase ----
            local spoolRate = (compressorsize * 110) / 1000
            if compressorsize > 100 then
                spoolRate = 11.0
            end

            local spoolPressureFactor = map(turbopressure, -0.9, 1.0, 1.0, 0.0)
            local spoolTarget = spoolRate * spoolPressureFactor * (2 - throttle)

            calcspooltime = math.floor(spoolTarget * 1000) / 1000

            local spoolDecayConstant = -math.log(0.01) / (spoolTarget * 1.5)
            local spoolStartTime = GetGameTimer()
            local throttleOffsetAtStart = GetVehicleThrottleOffset(vehicle) --  compared against the `throttle` global below (different unit/source) — preserved as-is from source

            if throttle > 0 and turbopressure < 1 then
                while spoolTarget > spoolingfadetime do
                    Citizen.Wait(0)

                    if isclutchpressed then break end
                    if throttle <= 0 then break end
                    if throttle ~= throttleOffsetAtStart then break end

                    spoolingfadetime = (GetGameTimer() - spoolStartTime) / 1000
                    calcspooltime = spoolTarget - spoolingfadetime

                    local newPressureRaw = turbopressure + (1.25 - turbopressure) * (1 - math.exp(-spoolDecayConstant * spoolingfadetime))

                    --  This min-clamp is always overwritten by the branch immediately below
                    -- in the original script (either by throttleOffsetAtStart or by
                    -- newPressureRaw itself), so it never actually takes effect on its own.
                    -- Preserved exactly as in the source rather than "fixed".
                    turbopressure = math.min(newPressureRaw, 1.0)

                    if throttleOffsetAtStart < newPressureRaw and throttle ~= 0 then
                        turbopressure = throttleOffsetAtStart
                    else
                        turbopressure = newPressureRaw
                    end
                end
            end
            spoolingfadetime = 0

            -- ---- Dump valve / blow-off ----
            if throttle == 0 and turbopressure >= 0.65 then
                if dumpvalve ~= nil and dumpvalve > 0 then
                    local moduleConfig = exports.config:GetModuleConfig("np-vehicles")
                    local dumpValveSoundsForValve = moduleConfig.dumpValveSounds[tostring(dumpvalve)]
                    local randomDumpSound = dumpValveSoundsForValve[math.random(1, #dumpValveSoundsForValve)]
                    NPX.Events.emitNet("np-fx:sound:vehicle:turbo", vehnetid, randomDumpSound)
                end
                turbopressure = 0.0
            end

            -- ---- Decay phase ----
            local decayRate = (compressorsize * 110) / 1000
            if compressorsize > 100 then
                decayRate = 11.0
            end

            local turbopressureSnapshot = turbopressure
            local decayPressureFactor = map(turbopressure, 1.0, -0.9, 1.0, 0.0)
            local decayDuration = decayRate * decayPressureFactor * 0.75

            local decayStartTime = GetGameTimer()
            local throttleOffsetAtDecayStart = GetVehicleThrottleOffset(vehicle) --  captured but never referenced again in the original decay loop; preserved for fidelity

            if throttle == 0 and turbopressure > -0.9 then
                while decayDuration > decaymentfadetime do
                    Citizen.Wait(0)

                    if throttle > 0 then break end

                    decaymentfadetime = (GetGameTimer() - decayStartTime) / 1000
                    turbopressure = turbopressureSnapshot + (decaymenttarget - turbopressureSnapshot) * (decaymentfadetime / decayDuration)
                end
            end
            decaymentfadetime = 0

            if turbopressure < -0.9 then
                turbopressure = -0.9
            end
        end
    end
end)
