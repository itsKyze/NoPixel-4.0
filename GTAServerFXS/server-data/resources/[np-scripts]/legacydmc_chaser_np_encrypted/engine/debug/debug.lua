if debug then

    -- Telemetry overlay (RPM / power / torque / boost / drag / drivetrain)
    Citizen.CreateThread(function()
        while true do
            Citizen.Wait(0)

            if telemetry then
                DrawTextOnScreen("RPM: " .. string.format("%.0f", realrpm), 0.2, 0.925)

                local power = (enginepowerhp * throttle) + (enginepowerhp * (curbfactorxpressure / 100))
                DrawTextOnScreen("Power (HP): " .. string.format("%.0f", power), 0.3, 0.925)

                local torque = (enginetorque * throttle) + (enginetorque * (curbfactorxpressure / 100))
                DrawTextOnScreen("Torque (NM): " .. string.format("%.0f", torque), 0.45, 0.925)

                DrawTextOnScreen("Boost : " .. string.format("%.2f", turbopressure), 0.6, 0.925)

                DrawTextOnScreen("Boost Power Increase (%) : " .. string.format("%.0f", curbfactorxpressure), 0.725, 0.925)

                local airResistance
                if usenewphysics and currentairresistance then
                    airResistance = currentairresistance
                else
                    airResistance = calculateAirResistance(speedkmh, calculatedragcoeff)
                end
                DrawTextOnScreen("Air Drag (G's) : " .. string.format("%.5f", airResistance), 0.325, 0.96125)

                local drivetrainPower = 0
                if isinacar and gettotaldrivetrainpower(vehicle) then
                    drivetrainPower = gettotaldrivetrainpower(vehicle)
                end
                DrawTextOnScreen("Drivetrain (G's) : " .. string.format("%.5f", drivetrainPower), 0.525, 0.96125)
            end
        end
    end)

    -- 0-100 / 0-160 / 0-200 / 0-250 / 0-300 acceleration timers
    Citizen.CreateThread(function()
        while true do
            Citizen.Wait(0)

            if shouldcalc0100 and speedkmh < 100 and IsControlPressed(0, 71) then
                if speedkmh <= 0.5 then
                    while speedkmh < 100 do
                        Citizen.Wait(0)
                        if speedkmh >= 0.5 then
                            printDebug("Measuring 0 to 300 km/h Metrics...", "tools")
                            time = GetGameTimer()
                            break
                        end
                    end
                end

                if time ~= 0 then
                    while speedkmh < 100 do
                        Citizen.Wait(0)
                        if speedkmh >= 100 then
                            finaltime = GetGameTimer()
                            break
                        end
                        if not shouldcalc0100 then break end
                    end
                    printDebug("0-100 TIME: " .. ((finaltime - time) / 1000) .. " s", "tools")

                    while speedkmh < 160 do
                        Citizen.Wait(0)
                        if speedkmh >= 160 then
                            extratime = GetGameTimer()
                            break
                        end
                        if not shouldcalc0100 then break end
                    end
                    printDebug("0-160 TIME: " .. ((extratime - time) / 1000) .. " s", "tools")

                    while speedkmh < 200 do
                        Citizen.Wait(0)
                        if speedkmh >= 200 then
                            extratime = GetGameTimer()
                            break
                        end
                        if not shouldcalc0100 then break end
                    end
                    printDebug("0-200 TIME: " .. ((extratime - time) / 1000) .. " s", "tools")

                    while speedkmh < 250 do
                        Citizen.Wait(0)
                        if speedkmh >= 250 then
                            extratime = GetGameTimer()
                            break
                        end
                        if not shouldcalc0100 then break end
                    end
                    printDebug("0-250 TIME: " .. ((extratime - time) / 1000) .. " s", "tools")

                    while speedkmh < 300 do
                        Citizen.Wait(0)
                        if speedkmh >= 300 then
                            extratime = GetGameTimer()
                            break
                        end
                        if not shouldcalc0100 then break end
                    end
                    printDebug("0-300 TIME: " .. ((extratime - time) / 1000) .. " s", "tools")

                    extratime = 0
                    finaltime = 0
                    time = 0
                end
            end
        end
    end)

    -- Engine bay debug points
    Citizen.CreateThread(function()
        while true do
            Citizen.Wait(0)
            if showenginebaypoints then
                viewenginebay(vehicle)
            end
        end
    end)
end

-- ============================================================================
-- DEBUG MENU (configured by the server via "chaser:rc:fg")
-- ============================================================================

if debug then

    AddEventHandler("chaser:rc:fg", function(
        forceServerSettingsDefaultArg, allowClientMenuArg, clutchKeyIdArg, clutchKeyGamepadIdArg,
        storeB4Arg, defaultGearRatioArg, finalDrivePosLimitArg, finalDriveNegLimitArg, gearRatioMaxLimitArg,
        storeB1Arg, minFlywheelWeightArg, maxFlywheelWeightArg, storeB2Arg, storeB3Arg,
        isUsingGamepadArg, rightAlignMenuArg, menuInImperialUnitsArg, invertReverseControlsArg
    )
        -- Apply server-sent config to the shared globals used across the resource
        forceserversettingsdefault = forceServerSettingsDefaultArg
        defaultgearratio = defaultGearRatioArg
        clutchkeyid = clutchKeyIdArg
        clutchkeygamepadid = clutchKeyGamepadIdArg
        allowclientmenu = allowClientMenuArg
        minflywheelweight = minFlywheelWeightArg
        maxflywheelweight = maxFlywheelWeightArg
        finaldriveposlimit = finalDrivePosLimitArg
        finaldriveneglimit = finalDriveNegLimitArg
        gearratiomaxlimit = gearRatioMaxLimitArg
        storeb1 = storeB1Arg
        storeb2 = storeB2Arg
        storeb3 = storeB3Arg
        storeb4 = storeB4Arg
        invertreversecontrols = invertReverseControlsArg

        -- Load persisted menu preferences (if any) unless the server forces defaults
        local savedMenuSettings = GetResourceKvpString("menusettings")
        if savedMenuSettings and forceserversettingsdefault == false then
            for key, value in savedMenuSettings:gmatch("([^:]+):([^;]+);") do
                if key == "{tm" then
                    menuconfigvaluetable[key] = tonumber(value)
                else
                    menuconfigvaluetable[key] = tobool(value)
                end
            end
            isusinggamepad = menuconfigvaluetable.igp
            menuinimperialunits = menuconfigvaluetable.miu
            rightalignmenu = menuconfigvaluetable.ral
        else
            isusinggamepad = isUsingGamepadArg
            menuinimperialunits = menuInImperialUnitsArg
            rightalignmenu = rightAlignMenuArg
        end

        if not allowclientmenu then
            return
        end

        -- ------------------------------------------------------------------
        -- Persistent "display" state for the menu (kept as upvalues so they
        -- survive between "chaser:menu" event firings, matching the original)
        -- ------------------------------------------------------------------
        local finalDriveDisplay = tostring(finaldriveadjustmentprct)
        local gearRatioDisplay = {}
        for i = 1, 10 do
            gearRatioDisplay[i] = tostring(gearratiotable[i])
        end
        local cachedFlywheelFade = fadeDuration      -- see header note: purpose unclear, preserved as-is
        local flywheelWeightDisplay = fadeDuration
        local weightDisplay = currentweight
        local engineNameDisplay = currentengine
        local compressorSizeDisplay = (compressorsize > 0 and compressorsize) or 0
        local tireModelIndexDisplay = tryemodelid

        local gearOrdinalNames = {
            "First Gear: ", "Second Gear: ", "Third Gear: ", "Fourth Gear: ",
            "Fifth Gear: ", "Sixth Gear: ", "Seventh Gear: ", "Eighth Gear: ", "Ninth Gear: "
        }

        -- ------------------------------------------------------------------
        -- Gear ratio helpers (replaces the 10x duplicated gear-count blocks)
        -- ------------------------------------------------------------------

        function ClampGearRatio(index, isReverse)
            if isReverse then
                local limit = -gearratiotable[2]
                if gearratiotable[1] > limit then
                    gearratiotable[1] = limit
                end
            else
                if gearratiotable[index] < 0.1 then
                    gearratiotable[index] = 0.1
                end
                if gearratiotable[index] > gearratiomaxlimit then
                    gearratiotable[index] = gearratiomaxlimit
                end
            end
        end

        function RecalculateGearRow(index, gtaRatioTable)
            calculatedtospeedkmhtable[index] = (gtaRatioTable[index] * finaldriveadjustable) / gearratiotable[index]
            topspeedgeartable[index] = math.floor((calculatedtospeedkmhtable[index] * 0.9) / gtaRatioTable[index])
        end

        function RestoreDefaultGears(gearCount)
            gearratiotable = { -3.333, 3.333, 1.849, 1.253, 0.935, 0.767, 0.692, 0.686, 0.749, 0.9 }
            calculatetransmissiongearing()
            hastoapplymt = true
            for i = 1, gearCount + 1 do
                gearRatioDisplay[i] = tostring(gearratiotable[i])
            end
        end

        function DrawGearRatioRow(index, label, gtaRatioTable, isReverse)
            local speedValue = topspeedgeartable[index]
            local buttonLabel
            if menuinimperialunits then
                buttonLabel = label .. math.floor(speedValue / 1.609344) .. " MP/H"
            else
                buttonLabel = label .. speedValue .. " KM/H"
            end

            local hint = "← " .. tostring(gearRatioDisplay[index]) .. " →"
            local pressed, newValue = WarMenu.InputButton(buttonLabel, "Gear Ratio Value:", nil, 6, hint)

            if pressed and newValue then
                local parsed = tonumber(newValue)
                if parsed == nil then
                    parsed = defaultgearratio[index]
                end
                gearratiotable[index] = parsed
                ClampGearRatio(index, isReverse)
                RecalculateGearRow(index, gtaRatioTable)
                gearRatioDisplay[index] = tostring(gearratiotable[index])
                if isReverse then
                    _reversegearvis = { gearRatioDisplay[index], "b" }
                end
                hastoapplymt = true
            end

            if WarMenu.IsItemHovered() then
                if IsControlJustReleased(2, 189) then
                    gearratiotable[index] = gearratiotable[index] - 0.1
                    ClampGearRatio(index, isReverse)
                    RecalculateGearRow(index, gtaRatioTable)
                    gearRatioDisplay[index] = tostring(gearratiotable[index])
                    hastoapplymt = true
                end
                if IsControlJustReleased(2, 190) then
                    gearratiotable[index] = gearratiotable[index] + 0.1
                    ClampGearRatio(index, isReverse)
                    RecalculateGearRow(index, gtaRatioTable)
                    gearRatioDisplay[index] = tostring(gearratiotable[index])
                    hastoapplymt = true
                end
            end
        end

        function DrawFinalDriveRow()
            local hint = "← " .. tostring(finalDriveDisplay) .. " →"
            local pressed, newValue = WarMenu.InputButton("Final Drive: ", "Gear Ratio Value:", nil, 6, hint)

            if pressed and newValue then
                local parsed = tonumber(newValue)
                if parsed == nil then
                    parsed = 0.9
                end
                finaldriveadjustmentprct = parsed
                if finaldriveadjustmentprct < finaldriveneglimit then
                    finaldriveadjustmentprct = finaldriveneglimit
                end
                if finaldriveadjustmentprct > finaldriveposlimit then
                    finaldriveadjustmentprct = finaldriveposlimit
                end
                calculatetransmissiongearing()
                finalDriveDisplay = tonumber(string.format("%.2f", finaldriveadjustmentprct))
            end

            if WarMenu.IsItemHovered() then
                if IsControlPressed(2, 189) then
                    finaldriveadjustmentprct = finaldriveadjustmentprct - 0.002
                    if finaldriveadjustmentprct < finaldriveneglimit then
                        finaldriveadjustmentprct = finaldriveneglimit
                    end
                    calculatetransmissiongearing()
                    finalDriveDisplay = tonumber(string.format("%.2f", finaldriveadjustmentprct))
                end
                if IsControlPressed(2, 190) then
                    finaldriveadjustmentprct = finaldriveadjustmentprct + 0.002
                    if finaldriveadjustmentprct > finaldriveposlimit then
                        finaldriveadjustmentprct = finaldriveposlimit
                    end
                    calculatetransmissiongearing()
                    finalDriveDisplay = tonumber(string.format("%.2f", finaldriveadjustmentprct))
                end
            end
        end

        function DrawAdjGearingMenu(gearCount)
            WarMenu.MenuButton("How to use", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltipText = "Use the ↑ and ↓ keys to decrease/Increase the gear ratio value or press enter to type a value."
                if rightalignmenu then
                    WarMenu.ToolTip(tooltipText, nil, true)
                else
                    WarMenu.ToolTip(tooltipText)
                end
            end

            DrawFinalDriveRow()

            -- Each gear-count uses its own base ratio table: gtagratiotable0 .. gtagratiotable9
            local gtaRatioTable = _G["gtagratiotable" .. tostring(gearCount)]

            DrawGearRatioRow(1, "Reverse: ", gtaRatioTable, true)
            for gearIndex = 1, gearCount do
                DrawGearRatioRow(gearIndex + 1, gearOrdinalNames[gearIndex], gtaRatioTable, false)
            end

            -- Matches original: no "Restore Default" button for 0 or 1 gear setups
            if gearCount >= 2 then
                if WarMenu.Button("Restore Default Gears Ratios") then
                    RestoreDefaultGears(gearCount)
                end
            end
        end

        -- ------------------------------------------------------------------
        -- Transmission / gearing submenu
        -- ------------------------------------------------------------------

        function DrawGearingMenu()
            local toggled = WarMenu.CheckBox("Enable Manual Transmission", enablemanualtransmission)
            if toggled then
                enablemanualtransmission = not enablemanualtransmission
                Citizen.Wait(100)
                SetVehicleHandlingFloat(pastvehicle, "CHandlingData", "fInitialDriveMaxFlatVel", cartopspeed * 0.75)
                SetVehicleHandlingFloat(pastvehicle, "CHandlingData", "fInitialDriveForce", baseacc)
                if enablemanualtransmission then
                    hastoapplymt = true
                else
                    SetVehicleHighGear(pastvehicle, gearammount)
                    SetVehicleEnginePowerMultiplier(pastvehicle, 0.0)
                end
            end

            WarMenu.ComboBox("Transmission Mode", transmissiontxt, transmissionmode + 1)
            if WarMenu.IsItemHovered() then
                if transmissionmode + 1 == 3 then
                    if rightalignmenu then
                        WarMenu.ToolTip("Default Clutch Key: Left ALT", nil, true)
                    else
                        WarMenu.ToolTip("Default Clutch Key: Left ALT")
                    end
                end

                if IsControlJustReleased(2, 189) and enablemanualtransmission then
                    if transmissionmode > 0 then
                        transmissionmode = transmissionmode - 1
                    else
                        transmissionmode = 2
                    end
                    orignaltransmissionmode = (transmissionmode == 0) and 0 or transmissionmode
                end

                if IsControlJustReleased(2, 190) and enablemanualtransmission then
                    if transmissionmode < 2 then
                        transmissionmode = transmissionmode + 1
                    else
                        transmissionmode = 0
                    end
                    orignaltransmissionmode = (transmissionmode == 0) and 0 or transmissionmode
                end
            end

            if enablemanualtransmission then
                WarMenu.MenuButton("Adjust Gears Ratios →", "adjgearing_menu")
            else
                WarMenu.MenuButton("Adjust Gears Ratios", "adjgearing_menu")
                if WarMenu.IsItemHovered() then
                    DisableControlAction(2, 191)
                end
            end
        end

        -- ------------------------------------------------------------------
        -- Flywheel submenu
        -- ------------------------------------------------------------------

        function DrawFlywheelMenu()
            WarMenu.MenuButton("How to use", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "A Lower value will mean a faster rev decayment, a Higher value, a slower rev decayment."
                if rightalignmenu then
                    WarMenu.ToolTip(tooltip, nil, true)
                else
                    WarMenu.ToolTip(tooltip)
                end
            end

            WarMenu.MenuButton("What it affects?", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "A Lower value will mean a faster rev decayment, a Higher value, a slower rev decayment."
                if rightalignmenu then
                    WarMenu.ToolTip(tooltip, nil, true)
                else
                    WarMenu.ToolTip(tooltip)
                end
            end

            if WarMenu.CheckBox("Enable Flywheel Simulation", enableflywheel) then
                enableflywheel = not enableflywheel
            end

            local hint = "← " .. tostring(flywheelWeightDisplay) .. " →"
            local pressed, newValue = WarMenu.InputButton("Flywheel Weight: ", "Flywheel Weight Value:", nil, 4, hint)
            if pressed and newValue then
                local parsed = tonumber(newValue)
                if parsed == nil then parsed = 2.65 end
                cachedFlywheelFade = parsed
                if cachedFlywheelFade < minflywheelweight then cachedFlywheelFade = minflywheelweight end
                if cachedFlywheelFade > maxflywheelweight then cachedFlywheelFade = maxflywheelweight end
                fadeDuration = tonumber(string.format("%.2f", cachedFlywheelFade))
            end

            if WarMenu.IsItemHovered() then
                if IsControlPressed(2, 189) then
                    cachedFlywheelFade = cachedFlywheelFade - 0.0035
                    if cachedFlywheelFade < minflywheelweight then cachedFlywheelFade = minflywheelweight end
                    fadeDuration = tonumber(string.format("%.2f", cachedFlywheelFade))
                end
                if IsControlPressed(2, 190) then
                    cachedFlywheelFade = cachedFlywheelFade + 0.0035
                    if cachedFlywheelFade > maxflywheelweight then cachedFlywheelFade = maxflywheelweight end
                    fadeDuration = tonumber(string.format("%.2f", cachedFlywheelFade))
                end
            end
        end

        -- ------------------------------------------------------------------
        -- Differential submenu
        -- ------------------------------------------------------------------

        function DrawDifferentialLockRow(label, currentValue, defaultValue, setter)
            local hint = "← " .. tostring(currentValue) .. "% →"
            local pressed, newValue = WarMenu.InputButton(label, label:gsub(": $", " %%:"), nil, 4, hint)
            if pressed and newValue then
                local parsed = tonumber(newValue)
                if parsed == nil then parsed = defaultValue end
                parsed = math.max(0, math.min(100, parsed))
                setter(parsed)
            end
            if WarMenu.IsItemHovered() then
                if IsControlJustReleased(2, 189) then
                    setter(math.max(0, currentValue - 1))
                end
                if IsControlJustReleased(2, 190) then
                    setter(math.min(100, currentValue + 1))
                end
            end
        end

        function DrawDiffMenu()
            WarMenu.MenuButton("How to use", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "This just serves to disable or enable the diff now, diff lock doesn't do anything."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end

            WarMenu.MenuButton("What it affects?", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "The main script responsible for drifting, if disabled, your car won't drift."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end

            if WarMenu.CheckBox("Enable Differential Simulation", enabledifferential) then
                enabledifferential = not enabledifferential
            end

            if vehiclelayout == 0 then
                DrawDifferentialLockRow("Rear Differential Lock: ", reardifflockprct, 83, function(v) reardifflockprct = v end)
            elseif vehiclelayout == 1 then
                DrawDifferentialLockRow("Front Differential Lock: ", frontdifflockprct, 10, function(v) frontdifflockprct = v end)
            elseif vehiclelayout > 0 and vehiclelayout < 1 then
                DrawDifferentialLockRow("Front Differential Lock: ", frontdifflockprct, 10, function(v) frontdifflockprct = v end)
                DrawDifferentialLockRow("Rear Differential Lock: ", reardifflockprct, 83, function(v) reardifflockprct = v end)
            end
        end

        -- ------------------------------------------------------------------
        -- Tyre model submenu
        -- ------------------------------------------------------------------

        function DrawTyreMenu()
            WarMenu.MenuButton("How to use", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "Use the ↑ and ↓ keys to change your tyre model."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end

            WarMenu.MenuButton("What it affects?", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "Change your tire model to experience different handling characteristics on your vehicle."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end

            WarMenu.MenuButton("Current Tire Model: ← " .. tostring(tyremodellist[tireModelIndexDisplay]) .. " →", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                if IsControlJustReleased(2, 189) then
                    tireModelIndexDisplay = tireModelIndexDisplay - 1
                    if tireModelIndexDisplay < 1 then
                        tireModelIndexDisplay = #tyremodellist
                    end
                    loadtiremodel(true, tostring(tyremodellist[tireModelIndexDisplay]))
                end
                if IsControlJustReleased(2, 190) then
                    tireModelIndexDisplay = tireModelIndexDisplay + 1
                    if tireModelIndexDisplay > #tyremodellist then
                        tireModelIndexDisplay = 1
                    end
                    loadtiremodel(true, tostring(tyremodellist[tireModelIndexDisplay]))
                end
            end
        end

        -- ------------------------------------------------------------------
        -- Turbo / tune submenu
        -- ------------------------------------------------------------------

        function DrawTurboMenu()
            WarMenu.MenuButton("How to use", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "Use the ↑ and ↓ keys to lower/raise the values or press enter to type a value."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end

            WarMenu.MenuButton("What it affects?", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "Tune to apply a Turbo, Weight Reduction, and swap the engine."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end

            local weightPressed, weightInput = WarMenu.InputButton(
                "Weight: ", "Weight:", nil, 4, "← " .. tostring(weightDisplay) .. "kg →"
            )
            if weightPressed and weightInput then
                local parsed = tonumber(weightInput)
                if parsed ~= nil then weightDisplay = parsed end
            end
            if WarMenu.IsItemHovered() then
                if IsControlJustReleased(2, 189) then weightDisplay = weightDisplay - 1 end
                if IsControlJustReleased(2, 190) then weightDisplay = weightDisplay + 1 end
            end

            local enginePressed, engineInput = WarMenu.InputButton(
                "Current Engine: ", "Desire Engine Name:", nil, 32, tostring(engineNameDisplay)
            )
            if enginePressed and engineInput then
                engineNameDisplay = engineInput
            end

            local turboPressed, turboInput = WarMenu.InputButton(
                "Turbo Compressor Size: ", "Turbo Compressor Size:", nil, 4, "← " .. tostring(compressorSizeDisplay) .. "mm →"
            )
            if turboPressed and turboInput then
                local parsed = tonumber(turboInput)
                if parsed == nil then parsed = 40 end
                compressorSizeDisplay = math.max(0, math.min(100, parsed))
            end
            if WarMenu.IsItemHovered() then
                if IsControlJustReleased(2, 189) then compressorSizeDisplay = math.max(0, compressorSizeDisplay - 1) end
                if IsControlJustReleased(2, 190) then compressorSizeDisplay = math.min(100, compressorSizeDisplay + 1) end
            end

            if WarMenu.Button("Apply Tune") then
                chaser_forceturbo(compressorSizeDisplay, dumpvalve)

                -- (kept for parity with original: this table isn't used further here,
                --  but the original built it right before applying the tune)
                local _unusedTuneSnapshot = {
                    compressorsize = compressorSizeDisplay,
                    peakturbodecayboost = peakturbodecayboost,
                    turbodecaypoint = turbodecaypoint,
                    maxtrboostpmax = maxtrboostpmax,
                    maxtrboostpmin = maxtrboostpmin,
                    maxtrboostpminprct = maxtrboostpminprct,
                    maxtrboostpmaxprct = maxtrboostpmaxprct,
                    booststartpoint = booststartpoint,
                }

                if engineNameDisplay ~= "stock" then
                    chaser_setengine(engineNameDisplay, true, true)
                end
                chaser_setweight(weightDisplay)
            end
        end

        -- ------------------------------------------------------------------
        -- Camera submenu
        -- ------------------------------------------------------------------

        function DrawCameraOffsetRow(label, valueGetter, valueSetter, step, tooltipText)
            local hint = "← " .. tostring(valueGetter()) .. " →"
            local pressed, newValue = WarMenu.InputButton(label, label, nil, 16, hint)
            if pressed and newValue then
                local parsed = tonumber(newValue)
                if parsed == nil then parsed = 0 end
                valueSetter(parsed)
            end
            if WarMenu.IsItemHovered() then
                if rightalignmenu then
                    WarMenu.ToolTip(tooltipText, nil, true)
                else
                    WarMenu.ToolTip(tooltipText)
                end
                if IsControlJustReleased(2, 189) then valueSetter(valueGetter() - step) end
                if IsControlJustReleased(2, 190) then valueSetter(valueGetter() + step) end
            end
        end

        function DrawCamMenu()
            WarMenu.MenuButton("How to use", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "Use the ↑ and ↓ keys to lower/raise the values or press enter to type a value."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end

            WarMenu.MenuButton("What it affects?", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "The C.H.A.S.E.R chase camera, use this to live calibrate camera offsets."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end

            DrawCameraOffsetRow("Interpolation Offset: ",
                function() return interpolationoffset end,
                function(v) interpolationoffset = v end,
                0.001, "Controls the camera distance, this refers to the offset at globalvehdata.lua")

            DrawCameraOffsetRow("Hood Cam Z Offset: ",
                function() return camhoodzoffset end,
                function(v) camhoodzoffset = v end,
                0.01, "Controls the Hood Cam Z Offset, this refers to the offset at globalvehdata.lua")

            DrawCameraOffsetRow("Hood Cam Y Offset: ",
                function() return camhoodyoffset end,
                function(v) camhoodyoffset = v end,
                0.01, "Controls the Hood Cam Y Offset, this refers to the offset at globalvehdata.lua")

            DrawCameraOffsetRow("Main Cam Z Offset: ",
                function() return camzoffset end,
                function(v) camzoffset = v end,
                0.01, "Controls the Main Cam Z Offset, this refers to the offset at globalvehdata.lua")

            DrawCameraOffsetRow("Main Cam FOV: ",
                function() return fovdebug + fovdebuginjection end,
                function(v) fovdebuginjection = v end,
                1, "Controls the Main Cam FOV, this refers to the setting at camera_tunables.lua")

            DrawCameraOffsetRow("Acc Pitch: ",
                function() return accpitchdebug + accpitchdebuginjection end,
                function(v) accpitchdebuginjection = v end,
                0.05, "Controls the How much the camera looks upwards/downward when accelerating, at camera_tunables.lua")

            DrawCameraOffsetRow("Coast Pitch: ",
                function() return coastpitchdebug + coastpitchdebuginjection end,
                function(v) coastpitchdebuginjection = v end,
                0.05, "Controls the How much the camera looks upwards/downward when decelerating, at camera_tunables.lua")

            DrawCameraOffsetRow("Braking Pitch: ",
                function() return brakingpitchdebug + brakingpitchdebuginjection end,
                function(v) brakingpitchdebuginjection = v end,
                0.05, "Controls the How much the camera looks upwards/downward when braking, at camera_tunables.lua")

            -- NOTE: preserved from original - this row's input/key-adjust actually
            -- writes to `brakingpitchdebuginjection`, not a "base pitch" value. This
            -- looks like a copy/paste bug in the original script, kept as-is.
            DrawCameraOffsetRow("Base Pitch: ",
                function() return basepitchdebug + basepitchdebuginjection end,
                function(v) brakingpitchdebuginjection = v end,
                0.05, "Controls the How much the camera looks upwards/downward when stopped, at camera_tunables.lua")
        end

        -- ------------------------------------------------------------------
        -- Live adjustments submenu (Center of Mass / Roll Centers)
        -- ------------------------------------------------------------------

        function DrawLiveOffsetRow(label, currentGetter, offsetGetter, offsetSetter, fineStep)
            local displayValue = math.floor(((currentGetter() + offsetGetter()) * 1000) + 0.5) / 1000
            local hint = "← " .. tostring(displayValue) .. " →"
            local pressed, newValue = WarMenu.InputButton(label, label, nil, 6, hint)
            if pressed and newValue then
                local parsed = tonumber(newValue)
                if parsed == nil then parsed = 0.0 end
                offsetSetter(parsed)
            end
            if WarMenu.IsItemHovered() then
                drawnCOM()
                local fineHeld = IsControlPressed(2, 204)
                if IsControlPressed(2, 189) and not fineHeld then offsetSetter(offsetGetter() - fineStep) end
                if IsControlPressed(2, 190) and not fineHeld then offsetSetter(offsetGetter() + fineStep) end
                if IsControlJustReleased(2, 189) and fineHeld then offsetSetter(offsetGetter() - fineStep) end
                if IsControlJustReleased(2, 190) and fineHeld then offsetSetter(offsetGetter() + fineStep) end
            end
        end

        function DrawLiveMenu()
            WarMenu.MenuButton("How to use", "discord_menu")
            if WarMenu.IsItemHovered() then
                DisableControlAction(2, 191)
                local tooltip = "Use the ↑ and ↓ keys to change the CoM offset, hold tab for fine adjustment."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end

            if WarMenu.CheckBox("Render Enginebay Size Points", showenginebaypoints) then
                showenginebaypoints = not showenginebaypoints
            end

            DrawLiveOffsetRow("Center Of Mass X: ", function() return centerofmass.x end, function() return offsetx end, function(v) offsetx = v end, 0.01)
            DrawLiveOffsetRow("Center Of Mass Y: ", function() return centerofmass.y end, function() return offsety end, function(v) offsety = v end, 0.01)
            DrawLiveOffsetRow("Center Of Mass Z: ", function() return centerofmass.z end, function() return offsetz end, function(v) offsetz = v end, 0.01)
            DrawLiveOffsetRow("Front Roll Center: ", function() return frontrollcenter end, function() return frcoffset end, function(v) frcoffset = v end, 0.01)
            DrawLiveOffsetRow("Rear Roll Center: ", function() return rearrollcenter end, function() return rrcoffset end, function(v) rrcoffset = v end, 0.01)

            if WarMenu.Button("Apply C.O.M Changes") then
                local newCom = vector3(centerofmass.x + offsetx, centerofmass.y + offsety, centerofmass.z + offsetz)
                SetVehicleHandlingVector(vehicle, "CHandlingData", "vecCentreOfMassOffset", newCom)
                centerofmass = GetVehicleHandlingVector(vehicle, "CHandlingData", "vecCentreOfMassOffset")
                printDebug(centerofmass, "tools")
                offsetx = 0
                offsety = 0
                offsetz = 0
            end
            if WarMenu.IsItemHovered() then
                drawnCOM()
            end

            if WarMenu.Button("Apply Roll Center Changes") then
                local frontValue = math.floor(((frontrollcenter + frcoffset) * 1000) + 0.5) / 1000
                SetVehicleHandlingFloat(vehicle, "CHandlingData", "fRollCentreHeightFront", frontValue)
                frontrollcenter = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fRollCentreHeightFront")
                printDebug(frontrollcenter, "tools")
                frcoffset = 0

                local rearValue = math.floor(((rearrollcenter + rrcoffset) * 1000) + 0.5) / 1000
                SetVehicleHandlingFloat(vehicle, "CHandlingData", "fRollCentreHeightRear", rearValue)
                rearrollcenter = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fRollCentreHeightRear")
                printDebug(rearrollcenter, "tools")
                rrcoffset = 0
            end
            if WarMenu.IsItemHovered() then
                drawnCOM()
            end
        end

        -- ------------------------------------------------------------------
        -- Gameplay / Logs / Settings submenus
        -- ------------------------------------------------------------------

        function DrawGameplayMenu()
            if WarMenu.CheckBox("Enable Controller Compatibility", isusinggamepad) then
                isusinggamepad = not isusinggamepad
            end
            if WarMenu.IsItemHovered() then
                local tooltip = "Use this to enhance support for controllers Default Clutch Key: A/X, Bind Shift Keys at Pause Menu."
                if rightalignmenu then WarMenu.ToolTip(tooltip, nil, true) else WarMenu.ToolTip(tooltip) end
            end
        end

        function DrawLogsMenu()
            local logToggles = {
                { "Enable [Load] Logs",     "loaddebuglog" },
                { "Enable [Gear Shift] Logs", "gearshiftdebuglog" },
                { "Enable [Tools] Logs",    "toolsdebuglog" },
                { "Enable [Drift] Logs",    "driftdebuglog" },
                { "Enable [Assists] Logs",  "assistsdebuglog" },
                { "Enable [Audio] Logs",    "audiodebuglog" },
                { "Enable [Camera] Logs",   "cameradebuglog" },
            }
            for _, entry in pairs(logToggles) do
                local label, globalName = entry[1], entry[2]
                if WarMenu.CheckBox(label, _G[globalName]) then
                    _G[globalName] = not _G[globalName]
                end
            end
        end

        function DrawSettingsMenu()
            if WarMenu.CheckBox("Right Align", rightalignmenu) then
                rightalignmenu = not rightalignmenu
            end
            if WarMenu.CheckBox("Show Gears Ratios Top Speed in MPH", menuinimperialunits) then
                menuinimperialunits = not menuinimperialunits
            end
        end

        -- ------------------------------------------------------------------
        -- Persist settings/gearing to KVP storage on menu close
        -- ------------------------------------------------------------------

        function SaveMenuStateToKvp()
            local vehicleKey = "plate:" .. vehplate .. "model:" .. vehmodel

            if GetResourceKvpString(vehicleKey) then
                DeleteResourceKvp(vehicleKey)
            end

            local gearingKvp = "{"
                .. "flywheel:" .. fadeDuration .. ";"
                .. "rdiff:" .. reardifflockprct .. ";"
                .. "fdiff:" .. frontdifflockprct .. ";"
                .. "gr0:" .. gearRatioDisplay[1] .. ";"
                .. "gr1:" .. gearRatioDisplay[2] .. ";"
                .. "gr2:" .. gearRatioDisplay[3] .. ";"
                .. "gr3:" .. gearRatioDisplay[4] .. ";"
                .. "gr4:" .. gearRatioDisplay[5] .. ";"
                .. "gr5:" .. gearRatioDisplay[6] .. ";"
                .. "gr6:" .. gearRatioDisplay[7] .. ";"
                .. "gr7:" .. gearRatioDisplay[8] .. ";"
                .. "gr8:" .. gearRatioDisplay[9] .. ";"
                .. "gr9:" .. gearRatioDisplay[10] .. ";"
                .. "fdr:" .. finaldriveadjustmentprct .. ";"
                .. "fdr:" .. finaldriveadjustmentprct .. ";"
                .. "}"
            SetResourceKvp(vehicleKey, gearingKvp)

            local settingsKvp = "{"
                .. "tm:" .. transmissionmode .. ";"
                .. "igp:" .. tostring(isusinggamepad) .. ";"
                .. "emt:" .. tostring(enablemanualtransmission) .. ";"
                .. "miu:" .. tostring(menuinimperialunits) .. ";"
                .. "efw:" .. tostring(enableflywheel) .. ";"
                .. "edf:" .. tostring(enabledifferential) .. ";"
                .. "ral:" .. tostring(rightalignmenu) .. ";"
                .. "}"
            SetResourceKvp("menusettings", settingsKvp)
        end

        -- ------------------------------------------------------------------
        -- Menu construction (WarMenu)
        -- ------------------------------------------------------------------

        WarMenu.CreateMenu("menu2", "C.H.A.S.E.R Debug", "Settings")
        WarMenu.CreateSubMenu("gearing_menu", "menu2", "Manual Transmission Settings")
        WarMenu.CreateSubMenu("adjgearing_menu", "gearing_menu", "Gear Settings")
        WarMenu.CreateSubMenu("flywheel_menu", "menu2", "Flywheel Settings")
        WarMenu.CreateSubMenu("diff_menu", "menu2", "Differential Settings")
        WarMenu.CreateSubMenu("tyre_menu", "menu2", "Tyre Model Settings")
        WarMenu.CreateSubMenu("turbo_menu", "menu2", "Tune Settings")
        WarMenu.CreateSubMenu("cam_menu", "menu2", "Camera Settings")
        WarMenu.CreateSubMenu("live_menu", "menu2", "Live Adjustments")
        WarMenu.CreateSubMenu("gameplay_menu", "menu2", "Gameplay Settings")
        WarMenu.CreateSubMenu("logs_menu", "menu2", "Logging Settings")
        WarMenu.CreateSubMenu("settings_menu", "menu2", "Menu Settings")
        WarMenu.CreateSubMenu("discord_menu", "menu2", "Discord")
        WarMenu.CreateSubMenu("demo_exit", "menu2", "Are you sure?")

        RegisterNetEvent("chaser:menu")
        AddEventHandler("chaser:menu", function()
            if WarMenu.IsAnyMenuOpened() then
                return
            end

            -- Refresh persistent display state from the live values
            weightDisplay = currentweight
            engineNameDisplay = currentengine

            WarMenu.OpenMenu("menu2")

            while true do
                -- Every frame: mirror authoritative values into display caches
                finalDriveDisplay = tonumber(string.format("%.2f", finaldriveadjustmentprct))
                for i = 1, 10 do
                    gearRatioDisplay[i] = tostring(gearratiotable[i])
                end
                flywheelWeightDisplay = fadeDuration
                tireModelIndexDisplay = tryemodelid
                compressorSizeDisplay = (compressorsize > 0 and compressorsize) or 0
                if cachedFlywheelFade == 0 then
                    cachedFlywheelFade = fadeDuration
                end

                inmenu = true

                DisableControlAction(0, 74, true)
                DisableControlAction(0, 85, true)
                DisableControlAction(0, 101, true)
                DisableControlAction(0, 103, true)
                DisableControlAction(0, 104, true)
                DisableControlAction(0, 80, true)
                DisableControlAction(0, 48, true)

                if rightalignmenu then
                    WarMenu.SetMenuX(WarMenu.CurrentMenu(), 0.75)
                else
                    WarMenu.SetMenuX(WarMenu.CurrentMenu(), 0.02)
                end

                if WarMenu.Begin("menu2") then
                    WarMenu.MenuButton("Transmission / Gearing Settings", "gearing_menu")
                    WarMenu.MenuButton("Flywheel Settings", "flywheel_menu")
                    WarMenu.MenuButton("Differential Settings", "diff_menu")
                    WarMenu.MenuButton("Tyre Model Settings", "tyre_menu")
                    WarMenu.MenuButton("Tune Settings", "turbo_menu")
                    WarMenu.MenuButton("Camera Settings", "cam_menu")
                    WarMenu.MenuButton("Live Adjustment Settings", "live_menu")
                    WarMenu.MenuButton("Gameplay Settings", "gameplay_menu")
                    WarMenu.MenuButton("Logs Settings", "logs_menu")
                    WarMenu.MenuButton("Menu Settings", "settings_menu")
                    WarMenu.MenuButton("Discord", "discord_menu")

                    if WarMenu.IsItemHovered() then
                        DisableControlAction(2, 191)
                        local tooltip = "  discord.gg/KsvJWyvpZU | " .. buildversion .. " "
                        if rightalignmenu then
                            WarMenu.ToolTip(tooltip, nil, true)
                        else
                            WarMenu.ToolTip(tooltip)
                        end
                    end

                    WarMenu.MenuButton("Exit", "demo_exit")
                    WarMenu.End()

                elseif WarMenu.Begin("gearing_menu") then
                    DrawGearingMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("adjgearing_menu") then
                    DrawAdjGearingMenu(gearammount)
                    WarMenu.End()

                elseif WarMenu.Begin("flywheel_menu") then
                    DrawFlywheelMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("diff_menu") then
                    DrawDiffMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("tyre_menu") then
                    DrawTyreMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("turbo_menu") then
                    DrawTurboMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("cam_menu") then
                    DrawCamMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("live_menu") then
                    DrawLiveMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("gameplay_menu") then
                    DrawGameplayMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("logs_menu") then
                    DrawLogsMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("settings_menu") then
                    DrawSettingsMenu()
                    WarMenu.End()

                elseif WarMenu.Begin("demo_exit") then
                    WarMenu.MenuButton("No", "menu2")
                    if WarMenu.Button("~r~Yes") then
                        WarMenu.CloseMenu()
                    end
                    WarMenu.End()

                else
                    -- Menu was closed: persist state and stop the render loop
                    inmenu = false
                    SaveMenuStateToKvp()
                    return
                end

                Citizen.Wait(0)
            end
        end)
    end)
end
