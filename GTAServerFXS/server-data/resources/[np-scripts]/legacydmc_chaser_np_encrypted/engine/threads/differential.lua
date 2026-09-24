
while true do
    if chaser_getloadstatus() then
        break
    end
    Citizen.Wait(0)
end

-- Performs a bounding box shape test on a vehicle entity and returns the hit entity
function raycast_vehicle_box(entityHandle)
    local rayHandle = StartShapeTestBoundingBox(entityHandle, 16, 1)
    local status, hit, endCoords, surfaceNormal, hitEntity = GetShapeTestResult(rayHandle)
    if status == 2 and hit then
        return hitEntity
    end
end

-- Draws a wireframe bounding box around a vehicle using 12 red lines
function DrawBoundingBox(entityHandle, dimensions, zOffset)
    local half = dimensions / 2
    local color = { r = 255, g = 0, b = 0, a = 255 }

    -- Bottom face corners (z negative = bottom)
    local bfl = GetOffsetFromEntityInWorldCoords(entityHandle, -half.x, -half.y, -half.z + zOffset) -- bottom front left
    local bfr = GetOffsetFromEntityInWorldCoords(entityHandle,  half.x, -half.y, -half.z + zOffset) -- bottom front right
    local bbr = GetOffsetFromEntityInWorldCoords(entityHandle,  half.x,  half.y, -half.z + zOffset) -- bottom back right
    local bbl = GetOffsetFromEntityInWorldCoords(entityHandle, -half.x,  half.y, -half.z + zOffset) -- bottom back left

    -- Top face corners
    local tfl = GetOffsetFromEntityInWorldCoords(entityHandle, -half.x, -half.y,  half.z + zOffset) -- top front left
    local tfr = GetOffsetFromEntityInWorldCoords(entityHandle,  half.x, -half.y,  half.z + zOffset) -- top front right
    local tbr = GetOffsetFromEntityInWorldCoords(entityHandle,  half.x,  half.y,  half.z + zOffset) -- top back right
    local tbl = GetOffsetFromEntityInWorldCoords(entityHandle, -half.x,  half.y,  half.z + zOffset) -- top back left

    local r, g, b, a = color.r, color.g, color.b, color.a

    -- Bottom face edges
    DrawLine(bfl.x, bfl.y, bfl.z, bfr.x, bfr.y, bfr.z, r, g, b, a)
    DrawLine(bfr.x, bfr.y, bfr.z, bbr.x, bbr.y, bbr.z, r, g, b, a)
    DrawLine(bbr.x, bbr.y, bbr.z, bbl.x, bbl.y, bbl.z, r, g, b, a)
    DrawLine(bbl.x, bbl.y, bbl.z, bfl.x, bfl.y, bfl.z, r, g, b, a)

    -- Top face edges
    DrawLine(tfl.x, tfl.y, tfl.z, tfr.x, tfr.y, tfr.z, r, g, b, a)
    DrawLine(tfr.x, tfr.y, tfr.z, tbr.x, tbr.y, tbr.z, r, g, b, a)
    DrawLine(tbr.x, tbr.y, tbr.z, tbl.x, tbl.y, tbl.z, r, g, b, a)
    DrawLine(tbl.x, tbl.y, tbl.z, tfl.x, tfl.y, tfl.z, r, g, b, a)

    -- Vertical connecting edges
    DrawLine(bfl.x, bfl.y, bfl.z, tfl.x, tfl.y, tfl.z, r, g, b, a)
    DrawLine(bfr.x, bfr.y, bfr.z, tfr.x, tfr.y, tfr.z, r, g, b, a)
    DrawLine(bbr.x, bbr.y, bbr.z, tbr.x, tbr.y, tbr.z, r, g, b, a)
    DrawLine(bbl.x, bbl.y, bbl.z, tbl.x, tbl.y, tbl.z, r, g, b, a)
end

-- Main physics, drift scoring, and engine braking loop
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)

        -- ===================== DRIFT PHYSICS =====================
        if enabledifferential and isinacar and isvalidvehicle and isdriver then
            if not hilodiffactivated then

                -- Gear ratio and base acceleration
                local gearRatio     = gearratiotable[desiredgear + 1]
                local accelForce    = baseacc * gearRatio

                if iselectric then
                    accelForce = (currentacc * 1.1) * 5.0
                end

                -- Frame-time decay factor for smooth interpolation
                local frameTime     = GetFrameTime()
                local decayFactor   = 1.0 - math.pow(1.0E-6, frameTime)

                -- Update average traction
                averagetraction = getaveragetraction(vehicle)

                local gameTimer     = GetGameTimer()

                -- Rear wheel speeds (indices 2 and 3 = rear)
                local rearRightSpeed = getwheelrotationalspeed(speedkmh, 3, vehicle)
                local rearLeftSpeed  = getwheelrotationalspeed(speedkmh, 2, vehicle)
                local rearAvgSpeed   = (rearRightSpeed + rearLeftSpeed) / 2

                -- Front wheel speeds (indices 0 and 1 = front)
                local frontLeftSpeed  = getwheelrotationalspeed(speedkmh, 0, vehicle)
                local frontRightSpeed = getwheelrotationalspeed(speedkmh, 1, vehicle)
                local frontAvgSpeed   = (frontLeftSpeed + frontRightSpeed) / 2

                if slipangle == nil then
                    slipangle = 0
                end

                -- Lateral velocity magnitude
                local lateralSpeed = math.sqrt(globalvelocity.x ^ 2 + globalvelocity.y ^ 2)

                -- Centripetal force calculation
                local steeringRad    = deg_to_rad(steeringAngle)
                local turnRadius     = wheelbase / math.tan(steeringRad)
                local centripetalForce = (currentweight * lateralSpeed ^ 2) / turnRadius
                centripetalForce = centripetalForce * currentdriftfactor * driftspeedfactor

                local centripetalVector = convertcentripetalnewtownstoms(
                    centripetalForce,
                    globalvelocity.y,
                    globalvelocity.x,
                    lateralSpeed,
                    currentweight
                )

                -- Drift factor interpolation based on slip angle
                local absSlip = math.abs(slipangle)
                local newDriftFactor = nil
                local lerpSpeed = decayFactor * 0.432

                if absSlip < 13 then
                    newDriftFactor = lerp(currentdriftfactor, 0.0, lerpSpeed)
                elseif absSlip > 25 then
                    newDriftFactor = lerp(currentdriftfactor, 1.0, lerpSpeed)
                else
                    newDriftFactor = lerp(currentdriftfactor, map(absSlip, 13, 25, 0.0, 1.0), lerpSpeed)
                end
                currentdriftfactor = newDriftFactor

                -- Drift scoreboard SFX: check if we should play the scoreboard loop
                local shouldPlayScoreboard = (
                    isnotflying and
                    not isonburnout and
                    slipangle > 13 and
                    averagetraction > 2.15 and
                    not tcsstate and
                    (gameTimer - crashedcooldown) >= 3500 and
                    not iscurrentlybankingdriftscore and
                    not mutescoreboardsfx and
                    totaldriftscore > 250
                )

                if not scoreboardsfxplaying and shouldPlayScoreboard then
                    globalscoreboardsfxid = PlayEntitySound(vehicle, "drift_score", "CHASER_SFX", 0, "GENERAL_SFX")
                    scoreboardsfxplaying = true
                elseif scoreboardsfxplaying and not shouldPlayScoreboard then
                    StopSound(globalscoreboardsfxid)
                    scoreboardsfxplaying = false
                end

                -- Pitch guard (prevent drift logic when too steep)
                local pitchOk = pitchangle.x <= 25

                -- Determine if currently drifting (positive or negative slip)
                local slipActive = false
                if slipangle > 13 and averagetraction > 2.15 and not tcsstate and pitchOk then
                    slipActive = true
                end
                if slipangle < -13 and averagetraction > 2.15 and not tcsstate and pitchOk then
                    slipActive = true
                end

                if slipActive then
                    isdrifting = true

                    -- High speed drift skill bonus
                    local isHighSpeed = speedkmh > 120
                    if isHighSpeed and not registeredhighspeeddrift then
                        if totaldriftscore > 250 then
                            driftedinhighspeed = 1
                            registeredhighspeeddrift = true
                            if not iscurrentlybankingdriftscore and not mutescoreboardsfx and totaldriftscore > 250 then
                                PlayEntitySound(vehicle, "drift_score_skill", "CHASER_SFX", 0, "GENERAL_SFX")
                            end
                            CallDriftScoreboardSkill("Highspeed Drift +1.0x")
                        end
                    end

                    -- Determine which rear wheel is spinning faster (inside vs outside)
                    local rearRWheelSpeed = GetVehicleWheelSpeed(vehicle, 2)
                    local rearLWheelSpeed = GetVehicleWheelSpeed(vehicle, 3)
                    local outerWheel, innerWheel = nil, nil

                    local wheelDiff = rearRWheelSpeed - rearLWheelSpeed
                    if wheelDiff > 0.1 then
                        outerWheel = 2
                        innerWheel = 3
                    elseif wheelDiff < -0.1 then
                        outerWheel = 3
                        innerWheel = 2
                    end

                    timesincelastdrift   = GetGameTimer()
                    justgotoutofdrift    = false

                    -- RWD drift physics (vehiclelayout == 0)
                    if vehiclelayout == 0 then
                        if desiredgear > 0 then
                            SetVehicleWheelTractionVectorLength(vehicle, innerWheel, GetVehicleWheelTractionVectorLength(vehicle, outerWheel))

                            local driftThrust = accelForce * newDriftFactor * throttle * driftspeedfactor
                            local forceX, forceY = steer_force(driftThrust, 90 + (-slipangle))
                            local driftVector = vector3(forceX, forceY, 0.0)

                            if driftThrust > 0 and not tcsstate then
                                lockdifferential(vehicle)
                            end

                            applyForceToWheel(vehicle, 2, driftVector / 2)
                            applyForceToWheel(vehicle, 3, driftVector / 2)

                            local rearWheelRPM = isonburnout and 0 or (rearAvgSpeed * newDriftFactor + 0.01)
                            SetVehicleWheelRotationSpeed(vehicle, 3, rearWheelRPM)

                            ApplyForceToEntityCenterOfMass(vehicle, 0, centripetalVector.x, centripetalVector.y, 0.0, 0.0, 0.0, 0.0, 0, true, true, false)
                        end

                    -- AWD drift physics (0 < vehiclelayout < 1)
                    elseif vehiclelayout > 0.0 and vehiclelayout < 1.0 then
                        if desiredgear > 0 then
                            SetVehicleWheelTractionVectorLength(vehicle, innerWheel, GetVehicleWheelTractionVectorLength(vehicle, outerWheel))

                            local driftThrust = accelForce * newDriftFactor * throttle * driftspeedfactor

                            if driftThrust > 0 then
                                lockdifferential(vehicle)
                            end

                            -- Front and rear force split based on layout ratio
                            local frontX, frontY = steer_force(driftThrust, 90 + steeringAngle)
                            local frontVector   = vector3(frontX, frontY, 0.0)
                            local rearX, rearY  = steer_force(driftThrust, 90 + (-slipangle))
                            local rearVector    = vector3(rearX, rearY, 0.0)

                            local frontContrib = frontVector * vehiclelayout
                            local rearContrib  = rearVector  * (1.0 - vehiclelayout)

                            applyForceToWheel(vehicle, 0, frontContrib / 2)
                            applyForceToWheel(vehicle, 1, frontContrib / 2)
                            applyForceToWheel(vehicle, 2, rearContrib  / 2)
                            applyForceToWheel(vehicle, 3, rearContrib  / 2)

                            local frontWheelRPM = isonburnout and 0 or (frontAvgSpeed * newDriftFactor + 0.01)
                            local rearWheelRPM  = isonburnout and 0 or (rearAvgSpeed  * newDriftFactor + 0.01)

                            SetVehicleWheelRotationSpeed(vehicle, 0, frontWheelRPM)
                            SetVehicleWheelRotationSpeed(vehicle, 3, rearWheelRPM)

                            ApplyForceToEntityCenterOfMass(vehicle, 0, centripetalVector.x, centripetalVector.y, 0.0, 0.0, 0.0, 0.0, 0, true, true, false)
                        end
                    end

                    -- Rev limiter / RPM management while drifting
                    if iselectric then
                        SetVehicleCurrentRpm(vehicle, 1.0)
                    else
                        callrevlimiter = true
                    end

                    -- Drift score accumulation
                    if (gameTimer - crashedcooldown) >= 3500 then
                        if isnotflying and not isonburnout then
                            local scoreDelta = (1 + absSlip + frameTime + speedkmh) / 100 * driftscorepointsmultiplier
                            totaldriftscore = (totaldriftscore + scoreDelta) or totaldriftscore
                        end

                        if isnotflying and not isonburnout then
                            local stackBonus      = round(currentdriftstack / 3.333, 2)
                            local multiplier      = 1 + stackBonus + driftedinhighspeed + (currentwalltapstack / 3.333)
                            currentdriftscoremultiplier = multiplier or currentdriftscoremultiplier
                        end
                    end

                else
                    -- ========= OUT OF DRIFT =========
                    if isdrifting then
                        if not justgotoutofdrift then
                            timesincelastdrift  = GetGameTimer()
                            justgotoutofdrift   = true

                            -- Chain drift stack bonus
                            if absSlip > 3.4 then
                                local stackCooldownOk  = (gameTimer - driftstackcooldown)  >= 3500
                                local crashCooldownOk  = (gameTimer - crashedcooldown)      >= 3500

                                if stackCooldownOk and crashCooldownOk and isdrifting and isnotflying and not isonburnout then
                                    if totaldriftscore > 250 then
                                        if currentdriftstack <= 4 then
                                            currentdriftstack = currentdriftstack + 1
                                            if not iscurrentlybankingdriftscore and not mutescoreboardsfx and totaldriftscore > 250 then
                                                PlayEntitySound(vehicle, "drift_score_skill", "CHASER_SFX", 0, "GENERAL_SFX")
                                            end
                                            CallDriftScoreboardSkill("Chain Drift +0.3x")
                                        end
                                        driftstackcooldown = GetGameTimer()
                                    end
                                end
                            end
                        end
                    end

                    -- Bank drift score after cooldown
                    local timeSinceDrift = gameTimer - timesincelastdrift
                    if timeSinceDrift >= globaldriftcooldown and justgotoutofdrift then
                        if totaldriftscore == 0 then
                            local finalScore = totaldriftscore * currentdriftscoremultiplier
                            globallastdriftscore = finalScore

                            if globallastdriftscore > 0 then
                                if not mutescoreboardsfx then
                                    PlayEntitySound(vehicle, "drift_score_bank", "CHASER_SFX", 0, "GENERAL_SFX")
                                end
                                CallDriftScoreboardBank(round(globallastdriftscore))
                            end

                            totaldriftscore             = 0
                            currentdriftstack           = 0
                            currentwalltapstack         = 0
                            driftedinhighspeed          = 0
                            currentdriftscoremultiplier = 0
                            justgotoutofdrift           = false
                            globaljustgotoutofdrift     = true
                            registeredhighspeeddrift    = false
                        end
                    end

                    callrevlimiter  = false
                    isdrifting      = false
                end

                -- ========= COLLISION / WALL TAP / CRASH DETECTION =========
                if not rechecking then
                    if HasEntityCollidedWithAnything(vehicle) and isdrifting then
                        firstRead               = raycast_vehicle_box(vehicle)
                        firstrayentitytype      = GetEntityType(firstRead)
                        firstrayentityhealth    = GetEntityHealth(firstRead)
                        firstReadTime           = GetGameTimer()
                        firstrayvelocity        = localvmag2(GetEntityVelocity(vehicle))
                        firstraylatacc          = getLateralAcceleration(vehicle)
                        rechecking              = true
                    end
                else
                    local timeSinceFirstRead = GetGameTimer() - firstReadTime
                    if timeSinceFirstRead >= checkInterval then
                        local secondRead            = raycast_vehicle_box(vehicle)
                        secondrayvelocity           = localvmag2(GetEntityVelocity(vehicle))
                        secondrayentitytype         = GetEntityType(secondRead)
                        secondrayentityhealth       = GetEntityHealth(secondRead)
                        local secondLateralAcc      = getLateralAcceleration(vehicle)
                        local currentFirstHealth    = GetEntityHealth(firstRead)

                        -- Helper: reset drift score on crash
                        local function resetDriftScoreOnCrash()
                            totaldriftscore             = 0
                            currentdriftscoremultiplier = 0
                            currentwalltapstack         = 0
                            currentdriftstack           = 0
                            driftedinhighspeed          = 0
                            crashedcooldown             = GetGameTimer()
                        end

                        -- Helper: award wall tap bonus
                        local function tryAwardWallTap()
                            if currentwalltapstack <= 4 then
                                local walltapCooldownOk = (gameTimer - walltapstackcooldown) >= 3500
                                local crashCooldownOk   = (gameTimer - crashedcooldown)      >= 3500
                                if walltapCooldownOk and crashCooldownOk and isdrifting and isnotflying and not isonburnout then
                                    if totaldriftscore > 250 then
                                        currentwalltapstack = currentwalltapstack + 1
                                        if not iscurrentlybankingdriftscore and not mutescoreboardsfx and totaldriftscore > 250 then
                                            PlayEntitySound(vehicle, "drift_score_skill", "CHASER_SFX", 0, "GENERAL_SFX")
                                        end
                                        CallDriftScoreboardSkill("Wall Tap +0.3x")
                                        walltapstackcooldown = GetGameTimer()
                                    end
                                end
                            end
                        end

                        -- No entity hit on either read (wall tap against static geometry)
                        if firstRead == 0 and secondRead == 0 then
                            local speedRetained = secondrayvelocity >= (firstrayvelocity * 0.95)
                            if speedRetained and secondrayvelocity > 5 and firstraylatacc > 3 then
                                tryAwardWallTap()
                            elseif secondrayvelocity < 5 and firstraylatacc > 3 then
                                resetDriftScoreOnCrash()
                            end

                        -- Hit a non-entity on second read (firstRead was something, secondRead is 0)
                        elseif firstRead ~= 0 and secondRead == 0 then
                            local hardHit       = secondrayvelocity < (firstrayvelocity * 0.95)
                            local lowSpeed      = secondrayvelocity < 5

                            if (hardHit or lowSpeed) and firstraylatacc > 3 then
                                resetDriftScoreOnCrash()
                            end

                        -- Hit a vehicle on first read (entity type 3) but nothing on second
                        elseif firstrayentitytype == 3 and secondRead == 0 then
                            local hardHit  = secondrayvelocity < (firstrayvelocity * 0.875)
                            local lowSpeed = secondrayvelocity < 5

                            if (hardHit or lowSpeed) and firstraylatacc > 3 then
                                resetDriftScoreOnCrash()
                            end

                        -- Both reads hit a vehicle
                        elseif firstrayentitytype == 3 then
                            local heavyImpact = secondrayvelocity < (firstrayvelocity * 0.425)
                            local lowSpeed    = secondrayvelocity < 5

                            if (heavyImpact or lowSpeed) and firstraylatacc > 3 then
                                resetDriftScoreOnCrash()
                            else
                                -- Gentle vehicle graze — may count as wall tap if health is intact
                                local speedRetained = secondrayvelocity >= (firstrayvelocity * 0.875)
                                if speedRetained and secondrayvelocity > 5 and firstraylatacc > 3 then
                                    if firstrayentityhealth == 1000 and currentFirstHealth == 1000 and secondrayentityhealth == 1000 then
                                        tryAwardWallTap()
                                    end
                                end
                            end
                        end

                        rechecking = false
                    end
                end
            end
        end

        -- ===================== ENGINE BRAKING (MANUAL TRANSMISSION) =====================
        if enablemanualtransmission and isinacar and isvalidvehicle then
            if isdriver then
                local topSpeedForGear = topspeedgeartable[desiredgear + 1]

                -- Engine braking when speed exceeds top speed for current gear (forward gears)
                if speedkmh > topSpeedForGear and desiredgear > 0 and clutch >= 0.95 then
                    local overSpeedPct = ((speedkmh - topSpeedForGear) / topSpeedForGear) * 100

                    if overSpeedPct > 2.5 then
                        if isnotflying then
                            SetVehicleCurrentRpm(vehicle, 1.0 + (overSpeedPct / 100))
                        end

                        while true do
                            local rpm = GetVehicleCurrentRpm(vehicle)
                            if not (rpm > 1) then break end

                            Citizen.Wait(0)
                            if isnotflying == false then break end

                            local currentTopSpeed = topspeedgeartable[desiredgear + 1]
                            overSpeedPct = ((speedkmh - currentTopSpeed) / currentTopSpeed) * 100

                            SetVehicleCurrentRpm(vehicle, 1.0 + (overSpeedPct / 100))
                            enginebrakingactive = true
                            SetControlNormal(0, 71, 1.0)

                            if speedkmh < currentTopSpeed then
                                setMaxSpeed(currentTopSpeed / 3.6 + 0.5)
                            else
                                setMaxSpeed(speedkmh / 3.6 + 0.5, true)
                            end
                        end
                        enginebrakingactive = false
                    end
                end

                -- Engine braking in reverse / neutral (gear 0) while wheel is still spinning
                if GetVehicleWheelSpeed(vehicle, 0) > 1.0 and desiredgear <= 0 and clutch >= 0.09 then
                    local gear1TopSpeed  = topspeedgeartable[2]
                    local overSpeedPct   = ((speedkmh - gear1TopSpeed) / gear1TopSpeed) * 100
                    local wheelStillSpin = GetVehicleWheelSpeed(vehicle, 0) > 0.1

                    if overSpeedPct > 2.5 or wheelStillSpin then
                        if isnotflying then
                            SetVehicleCurrentRpm(vehicle, 1.0 + (overSpeedPct / 100))
                        end

                        while true do
                            local rpm       = GetVehicleCurrentRpm(vehicle)
                            local wheelSpd  = GetVehicleWheelSpeed(vehicle, 0)
                            if not (rpm > 1) and not (wheelSpd > 0.1) then break end

                            Citizen.Wait(0)
                            DisableControlAction(0, 71)

                            if isnotflying == false then break end
                            if desiredgear > 0 then break end

                            local currentRpm = GetVehicleCurrentRpm(vehicle)
                            if currentRpm <= 0.2 then
                                enginebrakingactive = true
                                SetControlNormal(0, 76, 1.0)

                                if speedkmh < gear1TopSpeed then
                                    setMaxSpeed(gear1TopSpeed / 3.6 + 0.5)
                                    break
                                else
                                    setMaxSpeed(speedkmh / 3.6 + 0.5, true)
                                    break
                                end
                            end

                            overSpeedPct         = ((speedkmh - gear1TopSpeed) / gear1TopSpeed) * 100
                            local targetRpm      = 1.0 + (overSpeedPct / 100)
                            enginebrakingactive  = true

                            if targetRpm <= 0.21 then
                                SetVehicleCurrentRpm(vehicle, 0.2)
                            else
                                SetVehicleCurrentRpm(vehicle, targetRpm)
                            end

                            SetControlNormal(0, 76, 1.0)

                            if speedkmh < gear1TopSpeed then
                                setMaxSpeed(gear1TopSpeed / 3.6 + 0.5)
                            else
                                setMaxSpeed(speedkmh / 3.6 + 0.5, true)
                            end
                        end
                        enginebrakingactive = false
                    end
                end

                -- Engine drag simulation when coasting (throttle == 0, clutch engaged)
                if throttle == 0 and speedkmh > 1 and normalizedrpm > 0.21 and clutch > 0.39 then
                    -- Per-gear coast drag values mapped to control 72 (brake axis)
                    local coastDragByGear = {
                        [-1] = 0.32, -- reverse
                        [0]  = 0.32,
                        [1]  = 0.32,
                        [2]  = 0.31,
                        [3]  = 0.315,
                        [4]  = 0.31,
                        [5]  = 0.3,
                    }
                    local dragValue = coastDragByGear[desiredgear] or 0.315 -- default for gear >= 6

                    if desiredgear <= 0 then
                        if invertreversecontrols == false then
                            SetControlNormal(0, 71, 0.32)
                        elseif invertreversecontrols == true then
                            SetControlNormal(0, 72, 0.32)
                        end
                    else
                        SetControlNormal(0, 72, dragValue)
                    end
                end

            -- Engine braking for motorcycles (vehclass == 8)
            elseif vehclass == 8 and isdriver then
                local topSpeedForGear = topspeedgeartable[desiredgear + 1]

                if speedkmh > topSpeedForGear and desiredgear > 0 and clutch >= 0.95 then
                    local overSpeedPct = ((speedkmh - topSpeedForGear) / topSpeedForGear) * 100

                    if overSpeedPct > 2.5 then
                        if isnotflying == true then
                            SetVehicleCurrentRpm(vehicle, 1.0 + (overSpeedPct / 100))
                        end

                        while true do
                            local rpm = GetVehicleCurrentRpm(vehicle)
                            if not (rpm > 1) then break end

                            Citizen.Wait(0)
                            if isnotflying == false then break end

                            local currentTopSpeed = topspeedgeartable[desiredgear + 1]
                            overSpeedPct          = ((speedkmh - currentTopSpeed) / currentTopSpeed) * 100

                            SetVehicleCurrentRpm(vehicle, 1.0 + (overSpeedPct / 100))
                            enginebrakingactive = true
                            SetControlNormal(0, 71, 1.0)

                            if speedkmh < currentTopSpeed then
                                setMaxSpeed(currentTopSpeed / 3.6 + 0.5)
                            else
                                setMaxSpeed(speedkmh / 3.6 + 0.5, true)
                            end
                        end
                        enginebrakingactive = false
                    end
                end

                -- Motorcycle coast drag (only when not holding clutch key 111)
                if throttle == 0 and not IsControlPressed(0, 111) and speedkmh > 1 and normalizedrpm > 0.21 and clutch > 0.39 then
                    local coastDragByGear = {
                        [0]  = 0.32,
                        [1]  = 0.32,
                        [2]  = 0.31,
                        [3]  = 0.315,
                        [4]  = 0.31,
                        [5]  = 0.3,
                    }
                    local dragValue = coastDragByGear[desiredgear] or 0.315

                    if desiredgear <= 0 then
                        SetControlNormal(0, 72, 0.32)
                    else
                        SetControlNormal(0, 72, dragValue)
                    end
                end
            end
        end
    end
end)
