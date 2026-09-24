while true do
    if chaser_getloadstatus() then
        break
    end
    Citizen.Wait(0)
end

-- ------------------------------------------------------------
-- Shared helpers (identical blocks that repeated across the
-- transmission-mode branches in the original script)
-- ------------------------------------------------------------

function HandleBrakeInput()
    if desiredgear == 0 then
        -- Preserved from source: brake-light detection via control 71 only
        -- fires when reverse gear is engaged AND controls are inverted AND
        -- transmission is in manual mode (1). Any other reverse-gear
        -- combination does no brake-light detection this frame.
        if invertreversecontrols and transmissionmode == 1 then
            if IsControlPressed(0, 71) then
                SetVehicleBrakeLights(vehicle, true)
                isbraking = true
            end
            if IsControlJustReleased(0, 71) then
                isbraking = false
            end
        end
    else
        if IsControlPressed(0, 72) then
            SetVehicleBrakeLights(vehicle, true)
            isbraking = true
        end
        if IsControlJustReleased(0, 72) then
            isbraking = false
        end
    end
end

function SyncBrakeLights()
    if isbraking and not syncbrakelights then
        TriggerServerEvent("chaser:sync", vehnetid, true, 3)
        syncbrakelights = true
    elseif not isbraking and syncbrakelights then
        TriggerServerEvent("chaser:sync", vehnetid, false, 3)
        syncbrakelights = false
    end
end

function HandleClutchEngagement()
    if isclutchpressed then
        SetVehicleClutch(vehicle, -0.75)
        if GetVehicleCurrentRpm(vehicle) == 1 then
            SetControlNormal(0, 76, 0.99)
            Citizen.Wait(1)
            SetVehicleCurrentRpm(vehicle, 0.995)
        end
    else
        if not tractioncontrol then
            if desiredgear > 1 then
                SetVehicleClutch(vehicle, 1.0)
            end
        else
            if speedkmh > topspeedgeartable[2] * 0.75 then
                if desiredgear <= 1 and tractioncontrol then
                    SetVehicleClutch(vehicle, 1.0)
                end
            else
                if desiredgear > 1 and tractioncontrol then
                    SetVehicleClutch(vehicle, 1.0)
                end
            end
        end
    end
end

function DisableClutchGamepadControls()
    DisableControlAction(0, clutchkeygamepadid, true)
    DisableControlAction(0, 80, true)
    DisableControlAction(0, 99, true)
    DisableControlAction(0, 73, true)
end

function UpdateTransmissionModCache()
    local modIndex = GetVehicleMod(vehicle, 13)
    if modIndex >= 0 then
        if carhastransmission == -1 then
            carhastransmission = GetVehicleMod(vehicle, 13)
            calculatetransmissiongearing()
        end
    else
        if GetVehicleMod(vehicle, 13) == -1 then
            if carhastransmission >= 0 then
                carhastransmission = -1
                calculatetransmissiongearing()
            end
        end
    end
end

function ApplyReverseControlsInversionIfNeeded()
    if invertreversecontrols then
        if GetVehicleWheelSpeed(vehicle, 0) < 0.75 then
            if not invertedcontrols then
                SetVehicleControlsInverted(vehicle, true)
                invertedcontrols = true
                printDebug("Inveted Vehicle Controls", "gearshift") -- typo preserved from source string literal
            end
        end
    end
end

function ApplyReverseThrottleAssist()
    SetVehicleCheatPowerIncrease(vehicle, -1.0)
    SetVehicleCurrentRpm(vehicle, 0.2)
    SetControlNormal(0, 76, 0.99)
end

function FlashHandbrakeOverspeed()
    SetVehicleHandbrake(vehicle, true)
    SetControlNormal(0, 76, 0.99)
    Citizen.Wait(1)
end

-- Shared up/downshift RPM-window evaluation used by both car and bike
-- variants of transmission mode 1 (fully automatic-style clutchless shifting).
function ShouldEvaluateDownshift()
    if normalizedrpm <= 0.525 and normalizedrpm > 0.21 and throttle == 0 and not downhillenginebrakeassist and isnotflying then
        return true
    end

    local gearThreshold = math.floor(topspeedgeartable[desiredgear]) - math.floor(topspeedgeartable[desiredgear]) * normalizedatshiftpoint
    if speedkmh <= gearThreshold and throttle == 0 and not downhillenginebrakeassist and isnotflying then
        return true
    end

    if normalizedrpm <= 0.45 and normalizedrpm > 0.21 and not downhillenginebrakeassist and isnotflying then
        return true
    end

    return false
end

-- ------------------------------------------------------------
-- Transmission mode 0 — clutchless manual (no clutch pedal, just gears)
-- ------------------------------------------------------------

function HandleTransmissionMode0Car()
    UpdateTransmissionModCache()

    if desiredgear > 1 and not isclutchpressed then
        SetVehicleClutch(vehicle, 1.0)
    end

    if desiredgear > 0 then
        SetVehicleHighGear(vehicle, 1)
        if throttle < 0 then
            ApplyReverseThrottleAssist()
        end
    else
        if desiredgear <= 0 then
            SetVehicleHighGear(vehicle, 0)
            ApplyReverseControlsInversionIfNeeded()
            if throttle > 0 then
                ApplyReverseThrottleAssist()
            end
        end
    end

    if indownshift then
        DisableControlAction(0, 71, true)
    end

    if speedkmh > math.floor(topspeedgeartable[desiredgear + 1]) then
        if isnotflying then
            if throttle > 0 then
                FlashHandbrakeOverspeed()
            end
        end
    end

    if hastoapplymt then
        Citizen.Wait(150)
        applymt()
    end

    SetVehicleHandbrake(vehicle, false)
end

function HandleTransmissionMode0Bike()
    UpdateTransmissionModCache()

    if desiredgear > 1 and not isclutchpressed then
        SetVehicleClutch(vehicle, 1.0)
    end

    if desiredgear > 0 then
        SetVehicleHighGear(vehicle, 1)
        -- Bike variant guards the reverse-assist with `desiredgear ~= 1`;
        -- the car variant (above) does not. Preserved as-is.
        if throttle < 0 and desiredgear ~= 1 then
            ApplyReverseThrottleAssist()
        end
    else
        if desiredgear <= 0 then
            SetVehicleHighGear(vehicle, 0)
            if throttle > 0 then
                ApplyReverseThrottleAssist()
            end
        end
    end

    -- Bike variant's overspeed handbrake flash omits the `isnotflying`
    -- guard that the car variant has. Preserved as-is.
    if speedkmh > math.floor(topspeedgeartable[desiredgear + 1]) then
        if throttle > 0 then
            FlashHandbrakeOverspeed()
        end
    end

    if hastoapplymt then
        Citizen.Wait(150)
        applymt()
    end

    SetVehicleHandbrake(vehicle, false)
end

function HandleTransmissionMode0()
    if isvalidvehicle then
        if downhillenginebrakeassist then
            downhillenginebrakeassist = false
        end
        if isusinggamepad then
            DisableClutchGamepadControls()
        end

        HandleClutchEngagement()

        if isdriver then
            HandleTransmissionMode0Car()
        end
    else
        if vehclass == 8 then
            HandleClutchEngagement()
            HandleTransmissionMode0Bike()
        end
    end
end

-- ------------------------------------------------------------
-- Transmission mode 1 — fully automatic-style clutchless shifting
-- with RPM-window based up/downshift assist
-- ------------------------------------------------------------

function HandleTransmissionMode1Car()
    UpdateTransmissionModCache()

    if desiredgear > 0 then
        SetVehicleHighGear(vehicle, 1)

        if normalizedrpm >= (1 - normalizedatshiftpoint) and throttle > 0 then
            local upshiftThreshold = math.floor(topspeedgeartable[desiredgear]) - math.floor(topspeedgeartable[desiredgear]) * normalizedatshiftpoint
            if speedkmh >= upshiftThreshold then
                if not downhillenginebrakeassist and isnotflying and desiredgear ~= gearammount then
                    if desiredgear == 1 then
                        local secondGearThreshold = math.floor(topspeedgeartable[2]) - math.floor(topspeedgeartable[2]) * 0.1
                        if speedkmh >= secondGearThreshold then
                            atcall = true
                            upshift()
                        end
                    else
                        atcall = true
                        upshift()
                    end
                end
            end
        end

        if ShouldEvaluateDownshift() then
            if (desiredgear - 1) ~= 0 then
                atcall = true
                downshift()
            end
        end

        if throttle < 0 then
            if desiredgear == 1 then
                SetVehicleHighGear(vehicle, 0)
                atcall = true
                downshift()
            end
            ApplyReverseThrottleAssist()
        end
    else
        if desiredgear <= 0 then
            SetVehicleHighGear(vehicle, 0)
            if throttle > 0 then
                SetVehicleHighGear(vehicle, 1)
                atcall = true
                upshift()
            end
        end
    end

    if desiredgear == gearammount and normalizedrpm > 0.99 then
        if speedkmh > math.floor(topspeedgeartable[desiredgear + 1]) then
            FlashHandbrakeOverspeed()
        end
    end

    if speedkmh > math.floor(topspeedgeartable[desiredgear + 1]) then
        if isnotflying then
            if throttle > 0 then
                FlashHandbrakeOverspeed()
            end
        end
    end

    if indownshift then
        DisableControlAction(0, 71, true)
    end

    if hastoapplymt then
        Citizen.Wait(150)
        applymt()
    end

    SetVehicleHandbrake(vehicle, false)
end

function HandleTransmissionMode1Bike()
    UpdateTransmissionModCache()

    if desiredgear > 0 then
        SetVehicleHighGear(vehicle, 1)

        if normalizedrpm >= (1 - normalizedatshiftpoint) and throttle > 0 then
            local upshiftThreshold = math.floor(topspeedgeartable[desiredgear]) - math.floor(topspeedgeartable[desiredgear]) * normalizedatshiftpoint
            if speedkmh >= upshiftThreshold then
                if not downhillenginebrakeassist and isnotflying and desiredgear ~= gearammount then
                    if desiredgear == 1 then
                        local secondGearThreshold = math.floor(topspeedgeartable[2]) - math.floor(topspeedgeartable[2]) * 0.1
                        if speedkmh >= secondGearThreshold then
                            atcall = true
                            upshift()
                        end
                    else
                        atcall = true
                        upshift()
                    end
                end
            end
        end

        if ShouldEvaluateDownshift() then
            if (desiredgear - 1) ~= 0 then
                atcall = true
                downshift()
            end
            -- Unlike the car variant, the bike variant nests this reverse-engage
            -- check inside the downshift-eligible block. Preserved from source.
            if throttle < 0 then
                if desiredgear == 1 then
                    SetVehicleHighGear(vehicle, 0)
                    atcall = true
                    downshift()
                end
                ApplyReverseThrottleAssist()
            end
        end

        -- Separate, unconditional throttle<0 check outside the downshift
        -- block (also preserved from source; can run in addition to the one
        -- above when desiredgear ~= 1).
        if throttle < 0 then
            if desiredgear ~= 1 then
                ApplyReverseThrottleAssist()
            end
        end
    else
        if desiredgear <= 0 then
            SetVehicleHighGear(vehicle, 0)
            if throttle > 0 then
                SetVehicleHighGear(vehicle, 1)
                atcall = true
                upshift()
            end
        end
    end

    if desiredgear == gearammount and normalizedrpm > 0.99 then
        if speedkmh > math.floor(topspeedgeartable[desiredgear + 1]) then
            FlashHandbrakeOverspeed()
        end
    end

    -- Bike variant's overspeed handbrake flash omits the `isnotflying`
    -- guard, matching the mode-0 bike variant. Preserved as-is.
    if speedkmh > math.floor(topspeedgeartable[desiredgear + 1]) then
        if throttle > 0 then
            FlashHandbrakeOverspeed()
        end
    end

    if indownshift then
        DisableControlAction(0, 71, true)
    end

    if hastoapplymt then
        Citizen.Wait(150)
        applymt(true)
    end

    SetVehicleHandbrake(vehicle, false)
end

function HandleTransmissionMode1()
    if isvalidvehicle then
        if not isdriver then
            return
        end
        HandleTransmissionMode1Car()
    else
        if vehclass ~= 8 then
            return
        end
        if not isdriver then
            return
        end
        HandleTransmissionMode1Bike()
    end
end

-- ------------------------------------------------------------
-- Transmission mode 2 — clutch pedal mode (manual clutch input,
-- keyboard/mouse and gamepad supported)
-- ------------------------------------------------------------

function HandleTransmissionMode2Car()
    if not isdriver then
        return
    end

    -- Clutch press/release sound effect (once per state change)
    if isclutchpressed then
        if not hasclutchplayedonce then
            hasclutchplayedonce = true
            camerapov = GetFollowPedCamViewMode(player)
            if vehclass ~= 8 and camerapov == 4 then
                PlayEntitySound(vehicle, "pedal_clutch_in_01", "CHASER_SFX", 0, "CAR_SOUNDS")
            end
        end
    else
        if hasclutchplayedonce then
            hasclutchplayedonce = false
            camerapov = GetFollowPedCamViewMode(player)
            if vehclass ~= 8 and camerapov == 4 then
                PlayEntitySound(vehicle, "pedal_clutch_out_01", "CHASER_SFX", 0, "CAR_SOUNDS")
            end
        end
    end

    if isusinggamepad then
        DisableClutchGamepadControls()
        if clutchkeygamepadid == 37 then
            disablegamepadaim = true
        end

        if IsDisabledControlPressed(0, clutchkeygamepadid) then
            SetVehicleClutch(vehicle, -0.75)
            if GetVehicleCurrentRpm(vehicle) == 1 then
                SetControlNormal(0, 76, 0.99)
                Citizen.Wait(1)
                SetVehicleCurrentRpm(vehicle, 0.995)
            end
        end
        if IsDisabledControlJustReleased(0, clutchkeygamepadid) then
            SetVehicleClutch(vehicle, 1.0)
        end
    else
        disablegamepadaim = false
        HandleClutchEngagement()
    end

    UpdateTransmissionModCache()

    if desiredgear > 0 then
        SetVehicleHighGear(vehicle, 1)
        if throttle < 0 then
            ApplyReverseThrottleAssist()
        end
    else
        if desiredgear <= 0 then
            SetVehicleHighGear(vehicle, 0)
            ApplyReverseControlsInversionIfNeeded()
            if throttle > 0 then
                ApplyReverseThrottleAssist()
            end
        end
    end

    if speedkmh > math.floor(topspeedgeartable[desiredgear + 1]) then
        if isnotflying then
            if throttle > 0 then
                FlashHandbrakeOverspeed()
            end
        end
    end

    --  Unlike modes 0/1, mode 2 does NOT Citizen.Wait(150) before applymt()
    --  here — preserved from source.
    if hastoapplymt then
        applymt()
    end

    SetVehicleHandbrake(vehicle, false)
end

function HandleTransmissionMode2Bike()
    if not isdriver then
        return
    end

    if isusinggamepad then
        DisableClutchGamepadControls()
        if clutchkeygamepadid == 37 then
            disablegamepadaim = true
        end

        if IsDisabledControlPressed(0, clutchkeygamepadid) then
            SetVehicleClutch(vehicle, -0.75)
            if GetVehicleCurrentRpm(vehicle) == 1 then
                SetControlNormal(0, 76, 0.99)
                Citizen.Wait(1)
                SetVehicleCurrentRpm(vehicle, 0.995)
            end
        end
        if IsDisabledControlJustReleased(0, clutchkeygamepadid) then
            SetVehicleClutch(vehicle, 1.0)
        end
    else
        disablegamepadaim = false
        HandleClutchEngagement()
    end

    UpdateTransmissionModCache()

    if desiredgear > 0 then
        SetVehicleHighGear(vehicle, 1)
        if throttle < 0 then
            if desiredgear ~= 1 then
                ApplyReverseThrottleAssist()
            end
        end
    else
        if desiredgear <= 0 then
            SetVehicleHighGear(vehicle, 0)
            if throttle > 0 then
                ApplyReverseThrottleAssist()
            end
        end
    end

    if speedkmh > math.floor(topspeedgeartable[desiredgear + 1]) then
        if throttle > 0 then
            FlashHandbrakeOverspeed()
        end
    end

    if hastoapplymt then
        applymt()
    end

    SetVehicleHandbrake(vehicle, false)
end

function HandleTransmissionMode2()
    if isvalidvehicle then
        if downhillenginebrakeassist then
            downhillenginebrakeassist = false
        end
        HandleTransmissionMode2Car()
    else
        if vehclass == 8 then
            HandleTransmissionMode2Bike()
        end
    end
end

-- ------------------------------------------------------------
-- Main thread
-- ------------------------------------------------------------

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)

        if enablemanualtransmission and isinacar then
            SetVehicleBrakeLights(vehicle, false)

            HandleBrakeInput()
            SyncBrakeLights()

            playpedalsfx(71, "pedal_gas_in_01", "pedal_gas_out_01", "gas_pedal")
            playpedalsfx(72, "pedal_brakes_in_01", "pedal_brakes_out_01", "brake_pedal")

            if transmissionmode == 0 then
                HandleTransmissionMode0()
            elseif transmissionmode == 1 then
                HandleTransmissionMode1()
            elseif transmissionmode == 2 then
                HandleTransmissionMode2()
            end
        end
    end
end)
