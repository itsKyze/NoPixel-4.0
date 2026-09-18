local mathExp = math.exp

-- ------------------------------------------------------------
-- Camera lifecycle
-- ------------------------------------------------------------

function ChaserStartCamera()
    cam = CreateCam("DEFAULT_SCRIPTED_CAMERA", true)
    SetCamControlsMiniMapHeading(cam, true)
    SetCamMotionBlurStrength(cam, 99.0)
    RenderScriptCams(true, true, 1250, true, false)

    local vehicleModel = GetEntityModel(vehicle)
    modelDimMin, modelDimMax = GetModelDimensions(vehicleModel)
    cardimensions = modelDimMax - modelDimMin

    cameradata = camerasettings[0]
    currentcamera = 0

    SetCarHighSpeedBumpSeverityMultiplier(0)
    N_0x6a51f78772175a51(true) -- ⚠️ unnamed native hash, preserved as-is
    SetEntityMotionBlur(vehicle, false)

    enabledracingcam = true

    bonePos = GetEntityCoords(vehicle)
    ammountwheels = GetVehicleNumberOfWheels(vehicle) --  preserved existing misspelling (global, may be referenced elsewhere)
    wheellfbone = GetEntityBoneIndexByName(vehicle, "wheel_lf")
    wheellrbone = GetEntityBoneIndexByName(vehicle, "wheel_lr")

    -- Find this vehicle's model key inside the global per-vehicle config table
    local matchedModelKey = nil
    for modelKey in pairs(globalvehdata) do
        if GetHashKey(modelKey) == GetEntityModel(vehicle) then
            matchedModelKey = modelKey
        end
    end
    local vehConfig = globalvehdata[matchedModelKey]

    if matchedModelKey == nil or vehConfig == nil then
        camhoodzoffset = 0
        camhoodyoffset = 0
        camzoffset = 0
        camhoodz = (cardimensions / 2) - 0.1
        camhoody = cardimensions.y * 0.4
        interpolationoffset = 0
        disablehoodcamblur = false
    else
        camhoodzoffset = vehConfig.hoodzoffset
        camhoodyoffset = vehConfig.hoodyoffset
        camhoodz = vehConfig.hoodz
        camhoody = vehConfig.hoody
        camzoffset = vehConfig.maincamzoffset
        interpolationoffset = vehConfig.interpolationspeedoffset

        shiftedlerpfactor = shiftedlerpfactor - interpolationoffset
        currentlerpfactor = shiftedlerpfactor

        disablehoodcamblur = not vehConfig.usemotionbluronhoodcam
    end
end
chaser_startcamera = ChaserStartCamera

function ChaserStopCamera()
    if vehclass == 8 then
        SetFollowPedCamViewMode(0)
    end

    RenderScriptCams(false, true, 1250, true, true)
    DestroyCam(cam, false)

    enabledracingcam = false
    previousBonePosZ = nil
    previousBonePosX = nil
    previousBonePosY = nil
    targetx = nil
    targety = nil
    currentorbx = nil
    currentorby = nil
end
chaser_stopcamera = ChaserStopCamera

-- ------------------------------------------------------------
-- Physics / vector helpers
-- ------------------------------------------------------------

function IsOnAir(vehicleHandle)
    if ammountwheels >= 4 then
        local c0 = GetVehicleWheelSuspensionCompression(vehicleHandle, 0)
        local c1 = GetVehicleWheelSuspensionCompression(vehicleHandle, 1)
        local c2 = GetVehicleWheelSuspensionCompression(vehicleHandle, 2)
        local c3 = GetVehicleWheelSuspensionCompression(vehicleHandle, 3)
        return c0 <= 0 and c1 <= 0 and c2 <= 0 and c3 <= 0
    else
        if ammountwheels == 2 then
            local c0 = GetVehicleWheelSuspensionCompression(vehicleHandle, 0)
            local c1 = GetVehicleWheelSuspensionCompression(vehicleHandle, 1)
            return c0 <= 0 and c1 <= 0
        end
    end
end
isonair = IsOnAir

function VecDot(vecA, vecB)
    return vecA.x * vecB.x + vecA.y * vecB.y + vecA.z * vecB.z
end
Dot = VecDot

function VecCross(vecA, vecB)
    local result = {}
    result.x = vecA.y * vecB.z - vecA.z * vecB.y
    result.y = vecA.z * vecB.x - vecA.x * vecB.z
    result.z = vecA.x * vecB.y - vecA.y * vecB.x
    return result
end
Cross = VecCross

function GetAccelerationWithCentripetal(vehicleKey)
    local vehEntry = vehicleData[vehicleKey]
    if not vehEntry then
        vehEntry = { prevVelocity = { x = 0, y = 0, z = 0 } }
    end
    vehicleData[vehicleKey] = vehEntry

    local prevVelocity = vehicleData[vehicleKey].prevVelocity
    local deltaVelocity = {
        x = carvelocity.x - prevVelocity.x,
        y = carvelocity.y - prevVelocity.y,
        z = carvelocity.z - prevVelocity.z,
    }

    local upPoint = { x = bonePos.x, y = bonePos.y, z = bonePos.z + 1.0 }
    local upVec = { x = upPoint.x - bonePos.x, y = upPoint.y - bonePos.y, z = upPoint.z - bonePos.z }
    local rightVec = Cross(carfwdvec, upVec)

    local localAccel = {}
    localAccel.x = -Dot(deltaVelocity, rightVec)
    localAccel.y = Dot(deltaVelocity, carfwdvec)
    localAccel.z = Dot(deltaVelocity, upVec)

    local dt = globaldeltatime
    if dt == 0 then
        dt = 0.01
    end

    vehicleData[vehicleKey].prevVelocity = carvelocity

    local result = {
        x = localAccel.x / dt,
        y = localAccel.y / dt,
        z = localAccel.z / dt,
    }
    result.vec = vector3(localAccel.x, localAccel.y, localAccel.z)
    return result
end
getAccelerationWithCentripetal = GetAccelerationWithCentripetal

function GetGForces(vehicleKey)
    local accel = getAccelerationWithCentripetal(vehicleKey)
    local result = {
        x = accel.x / 9.8,
        y = accel.y / 9.8,
        z = accel.z / 9.8,
    }
    result.vel = accel.vec
    return result
end
getGForces = GetGForces

-- Moves `from` toward `to` at a constant rate (deltaAmount * speed), clamped so it never overshoots.
function LerpConstant(from, to, deltaAmount, speed)
    local diff = to - from
    local step = speed * deltaAmount
    if step >= math.abs(diff) then
        return to
    end
    local direction = (diff > 0) and 1 or -1
    return from + direction * step
end
lerpConstant = LerpConstant

-- Frame-rate independent exponential smoothing toward `target`.
function Damp(current, target, speed, deltaTime)
    local t = 1 - mathExp(-deltaTime * speed)
    return current * (1 - t) + target * t
end
damp = Damp

function CalculateSlipAngle(vehicleHandle)
    local heading = math.rad(GetEntityHeading(vehicleHandle))
    local velocityHeading = math.atan2(carvelocity.y, carvelocity.x)
    local diff = velocityHeading - heading

    if diff > math.pi then
        diff = diff - 2 * math.pi
    elseif diff < -math.pi then
        diff = diff + 2 * math.pi
    end

    return math.deg(diff)
end
calculateSlipAngle = CalculateSlipAngle

--  Preserved existing misspelling ("froom") since it's assigned to a global
-- and may be referenced by other resource files.
function RaycastFromCoords(startCoords, endCoords, traceFlags, traceOptions)
    local shapeTest = StartExpensiveSynchronousShapeTestLosProbe(
        startCoords.x, startCoords.y, startCoords.z,
        endCoords.x, endCoords.y, endCoords.z,
        traceFlags, 0, traceOptions
    )
    local result, hit, endPos, surfaceNormal, materialHash, entityHit = GetShapeTestResultIncludingMaterial(shapeTest)
    if result ~= 1 then
        return hit, entityHit, endPos, surfaceNormal, materialHash
    end
end
raycastfroomcoords = RaycastFromCoords

--  This function has no direct global assignment in the source — it's only
-- ever called indirectly (see GetRaycastDirectionFromCamera usage inside
-- RaycastFromCamera below, which relied on shared-upvalue reuse in the
-- original minified script). Kept as a standalone named function.
function GetRaycastDirectionFromCamera()
    local sinX, cosX = glm_sincos(glm_rad(GetFinalRenderedCamRot(2)))
    local absCosX = math_abs(cosX.x)
    local absCosZ = math_abs(cosX.x)
    return vec3(
        -sinX.z * absCosX,
        cosX.z * absCosZ,
        sinX.x
    )
end

function RaycastFromCamera(startCoords, traceFlags, traceOptions, distance)
    local dist = distance or 10
    local direction = GetRaycastDirectionFromCamera()
    local endCoords = startCoords + direction * dist
    return raycastfroomcoords(startCoords, endCoords, traceFlags, traceOptions)
end
raycastfromcamera = RaycastFromCamera

function IsInsideBarrier(x1, y1, z1, x2, y2, z2, radius)
    local dx, dy, dz = x2 - x1, y2 - y1, z2 - z1
    local dist = math.sqrt(dx * dx + dy * dy + dz * dz)
    return radius >= dist
end
isInsideBarrier = IsInsideBarrier

function IsInsideBarrierMulti(x1, y1, z1, x2, y2, z2, radius, factor)
    local dx, dy, dz = x2 - x1, y2 - y1, z2 - z1
    local dist = math.sqrt(dx * dx + dy * dy + dz * dz)
    return dist <= (radius * factor)
end
isInsideBarrierMulti = IsInsideBarrierMulti

function CalculateZCompensation(angleDegrees, magnitude)
    return math.sin(math.rad(angleDegrees)) * magnitude
end
calculate_z_compensation = CalculateZCompensation

-- ------------------------------------------------------------
-- Debug / math utility helpers
-- ------------------------------------------------------------

function DebugPoint(x, y, z, r, g, b)
    DrawMarker(
        28, x, y, z,
        0.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
        0.25, 0.25, 0.25,
        r, g, b, 100,
        false, true, 2, false, nil, nil, false
    )
end
debugpoint = DebugPoint

function Map(value, inMin, inMax, outMin, outMax)
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
end
map = Map

function HorizonLock(current, target)
    return (current - target) * 0.13333333333333333
end
horizonLock = HorizonLock

function QuatRotateVector(quatValue, vecValue)
    local qx, qy, qz, qw = quatValue.x, quatValue.y, quatValue.z, quatValue.w
    local vx, vy, vz = vecValue.x, vecValue.y, vecValue.z

    local uvx = qy * vz - qz * vy
    local uvy = qz * vx - qx * vz
    local uvz = qx * vy - qy * vx

    local uuvx = qy * uvz - qz * uvy
    local uuvy = qz * uvx - qx * uvz
    local uuvz = qx * uvy - qy * uvx

    return vector3(
        vx + (uvx * 2.0 * qw) + (uuvx * 2.0),
        vy + (uvy * 2.0 * qw) + (uuvy * 2.0),
        vz + (uvz * 2.0 * qw) + (uuvz * 2.0)
    )
end
quatRotateVector = QuatRotateVector

function Clamp(value, minValue, maxValue)
    if value < minValue then
        return minValue
    elseif value > maxValue then
        return maxValue
    else
        return value
    end
end
clamp = Clamp

function DegreesToXY(degrees)
    degrees = degrees % 360
    local rad = math.rad(degrees)
    return math.cos(rad), -math.sin(rad)
end
degreesToXY = DegreesToXY

function DegreesToZ(degrees)
    degrees = degrees % 360
    return math.cos(math.rad(degrees))
end
degreesToZ = DegreesToZ

-- ============================================================
-- Main per-frame camera update (primary path)
-- ============================================================
-- xOffset is passed in and mutated (becomes the lateral drift offset).
-- yOffsetBase is part of the original signature but is never referenced
-- inside this function body — kept for signature compatibility with
-- updatecamera_old below.
function UpdateCamera2(vehicle, camHandle, xOffset, yOffsetBase, zOffsetBase)
    DisableControlAction(0, 68, true)

    if not cameradata.isfpvcamera then
        DisableControlAction(0, 1, true)
        DisableControlAction(0, 2, true)
    end
    DisableControlAction(0, 0, true)

    -- Cycle camera mode on button press
    if IsDisabledControlJustReleased(0, 0) then
        if currentcamera < #camerasettings then
            currentcamera = currentcamera + 1
        else
            currentcamera = 0
        end
        cameradata = camerasettings[currentcamera]

        if cameradata.isbumpercamera then
            cam2 = CreateCam("DEFAULT_SCRIPTED_CAMERA", true)
            if disablehoodcamblur then
                SetCamMotionBlurStrength(cam2, 0.01)
            else
                SetCamMotionBlurStrength(cam2, 99.0)
            end
            SetCamControlsMiniMapHeading(cam2, true)
            RenderScriptCams(true, true, 0, true, false)
        elseif cameradata.isfpvcamera then
            SetFollowVehicleCamViewMode(4)
            if vehclass == 8 then
                SetFollowVehicleCamViewMode(4)
                SetFollowPedCamViewMode(4)
                SetCamViewModeForContext(2, 4)
            end
            if IsCamRendering(cam2) then
                DestroyCam(cam2, false)
                RenderScriptCams(false, false, 0, true, false)
            end
            if IsCamRendering(camHandle) then
                DestroyCam(camHandle, false)
                RenderScriptCams(false, false, 0, true, false)
            end
        else
            SetFollowVehicleCamViewMode(1)
            if vehclass == 8 then
                SetFollowVehicleCamViewMode(0)
                SetFollowPedCamViewMode(0)
                SetCamViewModeForContext(2, 0)
            end
            if IsCamRendering(cam2) then
                DestroyCam(cam2, false)
            end
            if not IsCamRendering(camHandle) then
                RenderScriptCams(true, false, 0, true, false)
            end
        end

        printDebug("Current Camera: " .. cameradata.name, "camera")
    end

    bonePos = GetEntityCoords(vehicle)
    carvelocity = GetEntityVelocity(vehicle)
    carfwdvec = GetEntityForwardVector(vehicle)

    local qx, qy, qz, qw = GetEntityQuaternion(vehicle)
    local carQuat = quat(qw, qx, qy, qz)
    local gForces = getGForces(vehicle)

    local rotX, rotY, rotZ = table.unpack(GetEntityRotation(vehicle, 2))

    local speedMs = speedkmh / 3.6
    local speedMsMin3 = math.max(3, speedMs)
    local speedMsMin6 = math.max(6, speedMs)
    local isSlow = speedMs < 1

    local angularVelocity = GetEntityRotationVelocity(vehicle)
    local dt = 1.0 - math.pow(1.0E-6, GetFrameTime())

    local fwdVec = carfwdvec
    local handbrakeHeld = IsDisabledControlPressed(0, 26)
    local handbrakeReleased = IsDisabledControlJustReleased(0, 26)
    local isLocked = lockcamposition
    local gForceYPositive = gForces.y > 0

    local slipCompX, slipCompY, slipCompZ, lerpSpeedForOffset
    local yawRateInput = 0

    local angularVelocitySign = cameradata.useinvertedangularvelocity and -1 or 1

    -- Apply yaw-rate input either always (if not drift-only) or only while drifting
    local applyAngularVelocity = false
    if cameradata.useangularvelocity and not cameradata.useangularvelocityondriftonly then
        applyAngularVelocity = true
    elseif cameradata.useangularvelocityondriftonly then
        applyAngularVelocity = isdrifting
    end
    if applyAngularVelocity then
        yawRateInput = angularVelocity.z
    end

    local interpolationFactor = cameradata.interpolationfactor - interpolationoffset
    local brakingForwardFactor = cameradata.brakingforwardfactor
    local brakingAnimSpeed = cameradata.brakinganimationspeed
    local brakingAnimReturnRate = cameradata.brakinganimationreturnrate
    local driftBackwardsFactor = cameradata.driftingbackwardsfactor
    local driftAnimSpeed = cameradata.driftinganimationspeed
    local driftAnimReturnRate = cameradata.driftinganimationreturnrate
    local nitrousBackwardsFactor = cameradata.nitrousbackwardsfactor
    local nitrousAnimSpeed = cameradata.nitrousanimationspeed
    local nitrousAnimReturnRate = cameradata.nitrousanimationreturnrate

    local accPitch = cameradata.accpitch + accpitchdebuginjection
    local brakingPitch = cameradata.brakingpitch + brakingpitchdebuginjection
    local coastPitch = cameradata.coastpitch + coastpitchdebuginjection
    local basePitch = cameradata.basepitch + basepitchdebuginjection

    accpitchdebug = cameradata.accpitch
    coastpitchdebug = cameradata.coastpitch
    brakingpitchdebug = cameradata.brakingpitch
    basepitchdebug = cameradata.basepitch

    local lerpSmoothing = 0.03675
    if throttle == 0 then
        if not isbraking then
            currentlerpfactor = lerp(shiftedlerpfactor, interpolationFactor * 1.6, dt * lerpSmoothing)
            shiftedlerpfactor = currentlerpfactor
        end
    else
        if not isbraking then
            currentlerpfactor = lerp(shiftedlerpfactor, interpolationFactor, dt * lerpSmoothing)
            shiftedlerpfactor = currentlerpfactor
        end
    end

    local minCameraDriftAngle = cameradata.mincameradriftangle
    local maxCameraDriftAngle = cameradata.maxcameradriftangle
    local minDriftAngle = cameradata.mindriftangle
    local maxDriftAngle = cameradata.maxdriftangle
    local enableDriftShake = cameradata.enabledriftcamerashake

    local driftShakeSpeed = 0
    if isdrifting and enableDriftShake then
        driftShakeSpeed = cameradata.driftcamerashakefakespeed * currentdriftfactor
    end

    local driftShakeFrequency = cameradata.driftcamerashakewavefrequency
    local enableHighSpeedShake = cameradata.enablehighspeedcamerashake
    local highSpeedShakeMagnitude = cameradata.highspeedcamerashakemagnitude
    local highSpeedShakeFrequency
    local useDriftFreqAsHighSpeed = driftShakeFrequency or isdrifting
    if not (useDriftFreqAsHighSpeed and enableDriftShake) or not driftShakeFrequency then
        highSpeedShakeFrequency = cameradata.highspeedcamerashakefrequency
    end

    local orbitCamSpeed = cameradata.orbitcamspeed
    local orbitCamSensitivity = cameradata.orbitcamsensitivity
    local orbitCamResetTime = cameradata.orbitcamresettime
    local useAutoDriftAngle = cameradata.useautodriftangle
    local autoDriftAngleTarget = cameradata.autodriftangletarget
    local autoDriftVisibilityFactor = cameradata.autodriftvisibilityfactor

    -- FOV falls off slightly above 300 km/h
    local speedFovFalloff = 1
    if speedkmh > 300 then
        speedFovFalloff = map(speedkmh, 300, 500, 1.0, 0.9)
    end

    local baseFov = cameradata.basefov + fovdebuginjection
    fovdebug = cameradata.basefov

    local dynamicFov = baseFov + cameradata.dynamicfovgainfactor * math.sin(math.atan(speedMsMin3 / 290))

    -- Jolt shake when landing after air time
    if not isflying then
        if not jumped then
            if (GetGameTimer() - airtime) > 1000 then
                ShakeScriptGlobal("JOLT_SHAKE", cameradata.joltintensity * clamp(speedkmh / 100, 0.0, 1.65))
            end
            airtime = GetGameTimer()
            jumped = true
        end
    else
        if jumped then
            airtime = GetGameTimer()
            jumped = false
        end
    end

    -- Bike wheelie compensation
    if vehclass == 8 then
        if GetVehicleWheelSuspensionCompression(vehicle, 1) == 0 and rotX > 0 then
            wheeliefactor = lerp(wheeliefactor, map(rotX, 0, 65, 0, 3.4), dt)
            bikerw = GetWorldPositionOfEntityBone(vehicle, wheellrbone)
            bikefw = GetWorldPositionOfEntityBone(vehicle, wheellfbone)
            frontwheelheightoffset = lerp(frontwheelheightoffset, bikefw.z - bikerw.z, dt)
            isonwheelie = true
        end
    else
        wheeliefactor = lerp(wheeliefactor, 0, dt)
        frontwheelheightoffset = lerp(frontwheelheightoffset, 0, dt)
        isonwheelie = false
    end

    -- Drift x-offset (manual angle-based vs auto-drift-angle mode)
    local driftXOffset = nil
    if not useAutoDriftAngle then
        if isdrifting then
            local slip = calculateSlipAngle(vehicle)
            local slipDelta = slip - 90

            if slipDelta > 0 then
                driftXOffset = map(slipDelta, minDriftAngle, maxDriftAngle, minCameraDriftAngle, maxCameraDriftAngle)
            end
            if driftXOffset == nil then
                driftXOffset = map(slipDelta, -minDriftAngle, -maxDriftAngle, minCameraDriftAngle, maxCameraDriftAngle)
            end

            if slipDelta < 0 then
                if -driftXOffset < -maxCameraDriftAngle then
                    driftXOffset = maxCameraDriftAngle
                end
            elseif slipDelta > 0 and maxCameraDriftAngle < driftXOffset then
                driftXOffset = maxCameraDriftAngle
            end

            if isdrifting and minDriftAngle < slipDelta and not isLocked then
                xOffset = lerp(previousXOffset, -driftXOffset, dt * 0.4)
                if not isbraking then
                    currentlerpfactor = lerp(shiftedlerpfactor, (interpolationFactor - interpolationFactor * driftBackwardsFactor) * speedFovFalloff, dt * driftAnimSpeed)
                    shiftedlerpfactor = currentlerpfactor
                end
            elseif isdrifting then
                if slipDelta < -minDriftAngle and not isLocked then
                    xOffset = lerp(previousXOffset, driftXOffset, dt * 0.4)
                    if not isbraking then
                        currentlerpfactor = lerp(shiftedlerpfactor, (interpolationFactor - interpolationFactor * driftBackwardsFactor) * speedFovFalloff, dt * driftAnimSpeed)
                        shiftedlerpfactor = currentlerpfactor
                    end
                end
            else
                currentlerpfactor = lerp(shiftedlerpfactor, interpolationFactor * speedFovFalloff, dt * driftAnimSpeed * driftAnimReturnRate)
                shiftedlerpfactor = currentlerpfactor
                xOffset = lerp(previousXOffset, 0, dt * 0.5)
            end
        end
    else
        -- Auto-drift-angle mode
        if isdrifting and useAutoDriftAngle then
            local slipDiff
            if autoDriftAngleTarget <= slipangle then
                slipDiff = autoDriftAngleTarget - (slipangle - autoDriftAngleTarget)
            elseif slipangle <= -autoDriftAngleTarget then
                slipDiff = -autoDriftAngleTarget - (slipangle + autoDriftAngleTarget)
            end

            local steerX, steerY = steer_force(1.0 * currentdriftfactor, 90 + slipDiff)

            if slipangle > 0.1 then
                if not isbraking then
                    currentlerpfactor = lerp(shiftedlerpfactor, (interpolationFactor - interpolationFactor * driftBackwardsFactor) * speedFovFalloff, dt * driftAnimSpeed)
                    shiftedlerpfactor = currentlerpfactor
                end
            elseif slipangle < 0.1 then
                if not isbraking then
                    currentlerpfactor = lerp(shiftedlerpfactor, (interpolationFactor - interpolationFactor * driftBackwardsFactor) * speedFovFalloff, dt * driftAnimSpeed)
                    shiftedlerpfactor = currentlerpfactor
                end
            end

            xOffset = steerX

            if speedkmh <= 30 then
                steerX, steerY = steer_force(1.0 * currentdriftfactor, 90 + slipangle)
                angularVelocitySign = 0
            end

            currentdriftzboost = lerp(
                currentdriftzboost,
                (zOffsetBase + camzoffset) + (zOffsetBase + camzoffset) * 0.1369,
                dt * driftAnimSpeed * driftAnimReturnRate
            )
        else
            currentlerpfactor = lerp(shiftedlerpfactor, interpolationFactor * speedFovFalloff, dt * driftAnimSpeed * driftAnimReturnRate)
            shiftedlerpfactor = currentlerpfactor
            currentdriftzboost = lerp(currentdriftzboost, 0, dt * driftAnimSpeed * driftAnimReturnRate)
        end
    end

    xOffset = lerp(previousXOffset, xOffset, dt * driftAnimSpeed)
    previousXOffset = xOffset

    -- Nitrous lean
    local nitrousLerpTarget = 0
    if isnitrousactive then
        if not isdrifting and not isbraking and nitrouscapacity > 0.01 then
            currentlerpfactor = lerp(shiftedlerpfactor, (interpolationFactor - interpolationFactor * nitrousBackwardsFactor) * speedFovFalloff, dt * nitrousAnimSpeed)
            shiftedlerpfactor = currentlerpfactor
            nitrousLerpTarget = 400
        end
    else
        if not isdrifting and not isbraking then
            currentlerpfactor = lerp(shiftedlerpfactor, interpolationFactor * speedFovFalloff, dt * nitrousAnimSpeed * nitrousAnimReturnRate)
            shiftedlerpfactor = currentlerpfactor
        end
    end

    if rotZ > 0 then
        rotZ = rotZ - 360
    end

    local headingCosZ = 0
    local zAngle = degreesToZ(-rotZ)
    if yawRateInput > 0 then
        headingCosZ = headingCosZ * 0.82
    end

    -- Reverse detection from wheel speed sign
    local reverseSign
    if GetVehicleWheelSpeed(vehicle, 0) < -0.1 then
        reverseSign = -1
    else
        reverseSign = 1
    end
    currentmomentum = lerp(currentmomentum, reverseSign, dt)

    local lateralOffset = -cardimensions.y * currentmomentum
    local orbitX, orbitY = 0, 0

    -- Mouse-driven orbit heading
    local mouseInput = GetDisabledControlNormal(0, 1)
    local mouseDelta = 0
    if mouseInput ~= 0 then
        mouseDelta = round(lerp(currentmouse, mouseInput, dt), 3)
    end
    currentmouse = mouseDelta

    if handbrakeHeld then
        orbitheading = 180
        orbitX, orbitY = degreesToXY(orbitheading)
    elseif handbrakeReleased then
        orbitheading = 0
    else
        if mouseDelta < -0.005 then
            currentmousespeed = round(lerp(currentmousespeed, orbitCamSpeed, dt * orbitCamSensitivity), 3)
            orbitheading = lerpConstant(orbitheading, 360, dt * orbitCamSensitivity, currentmousespeed)
            if orbitheading == 360 then
                orbitheading = 0
            end
            movedmousetime = GetGameTimer()
        elseif mouseDelta > 0.005 then
            currentmousespeed = round(lerp(currentmousespeed, orbitCamSpeed, dt * orbitCamSensitivity), 3)
            orbitheading = lerpConstant(orbitheading, 0, dt * orbitCamSensitivity, currentmousespeed)
            if orbitheading == 0 then
                orbitheading = 360
            end
            movedmousetime = GetGameTimer()
        end
    end

    -- Auto-return orbit heading to center after a period of no input
    if orbitCamResetTime < (GetGameTimer() - movedmousetime) and not handbrakeHeld and not isLocked and mouseInput == 0 then
        currentmousespeed = round(lerp(currentmousespeed, 0, dt * orbitCamSensitivity), 3)
        local target = 360 - orbitheading
        if target < orbitheading then
            target = -orbitheading
        end
        orbitheading = lerpConstant(orbitheading, target, dt * orbitCamSensitivity, orbitCamSpeed)
    end

    if mouseInput ~= 0 and orbitheading < 0 then
        orbitheading = 360 + orbitheading
    end

    orbitX, orbitY = degreesToXY(orbitheading)
    local sideOffsetY = -cardimensions.y * orbitY
    local sideOffsetX = -cardimensions.y * orbitX

    local camOffsetLocal = QuatRotateVector(carQuat, vector3(
        sideOffsetY, sideOffsetX,
        (zOffsetBase + headingCosZ + frontwheelheightoffset + camzoffset) * zAngle
    ))
    local targetOffsetLocal = QuatRotateVector(carQuat, vector3(
        xOffset, orbitCamResetTime and 0 or 0, -- ⚠️ unused local placeholder retained from original (reverseSign2 slot was 0 here in source)
        (zOffsetBase + headingCosZ + frontwheelheightoffset + camzoffset) * zAngle
    ))

    local targetWorldX = bonePos.x + targetOffsetLocal.x
    local targetWorldY = bonePos.y + targetOffsetLocal.y
    local targetWorldZ = bonePos.z + targetOffsetLocal.z

    if previousBonePosZ == nil then previousBonePosZ = targetWorldZ end
    if previousBonePosX == nil then previousBonePosX = targetWorldX end
    if previousBonePosY == nil then previousBonePosY = targetWorldY end
    if targetx == nil then targetx = targetWorldX end
    if targety == nil then targety = targetWorldY end
    if currentorbx == nil then currentorbx = targetWorldX end
    if currentorby == nil then currentorby = targetWorldY end

    -- Barrier check + lerp factor differ for bikes vs other vehicles
    local insideBarrier, brakingOffsetY, brakingOffsetX, lerpFactorForBone
    if vehclass == 8 then
        insideBarrier = isInsideBarrier(previousBonePosX, previousBonePosY, previousBonePosZ, bonePos.x, bonePos.y, bonePos.z, cardimensions.y * 1.3)
        brakingOffsetY = (lateralOffset * 0.9) * fwdVec.y
        brakingOffsetX = (lateralOffset * 0.9) * fwdVec.x
        lerpFactorForBone = currentlerpfactor
        if not isbraking then
            currentlerpfactor = lerp(shiftedlerpfactor, (interpolationFactor + interpolationFactor * 0.1) * speedFovFalloff, dt * brakingAnimSpeed * brakingAnimReturnRate)
            shiftedlerpfactor = currentlerpfactor
        end
    else
        insideBarrier = isInsideBarrier(previousBonePosX, previousBonePosY, previousBonePosZ, bonePos.x, bonePos.y, bonePos.z, cardimensions.y * 0.925)
        brakingOffsetY = (lateralOffset * 0.825) * fwdVec.y
        brakingOffsetX = (lateralOffset * 0.825) * fwdVec.x
        lerpFactorForBone = currentlerpfactor
        if not isbraking then
            currentlerpfactor = lerp(shiftedlerpfactor, interpolationFactor * speedFovFalloff, dt * brakingAnimSpeed * brakingAnimReturnRate)
            shiftedlerpfactor = currentlerpfactor
        end
    end

    local followX = targetWorldX + brakingOffsetX
    local followY = targetWorldY + brakingOffsetY
    local newTargetX, newTargetY

    if insideBarrier and (not isdrifting) and (not isflying) and (orbitheading == 0 and not handbrakeReleased) then
        newTargetY = damp(targety, followY, dt / 3, speedMsMin6)
        newTargetX = damp(targetx, followX, dt / 3, speedMsMin6)
    elseif not insideBarrier then
        newTargetY = damp(targety, targetWorldY, dt / 3, speedMsMin6)
        newTargetX = damp(targetx, targetWorldX, dt / 3, speedMsMin6)
    end

    targetx = newTargetX
    targety = newTargetY

    local dampedX = damp(previousBonePosX, newTargetX, dt * lerpFactorForBone, speedMsMin3)
    local dampedY = damp(previousBonePosY, newTargetY, dt * lerpFactorForBone, speedMsMin3)
    local dampedZ = damp(previousBonePosZ, targetWorldZ, dt * lerpFactorForBone, speedMsMin3)

    local finalX, finalY, finalZ
    if orbitheading ~= 0 and not handbrakeReleased then
        finalX = newTargetX + camOffsetLocal.x
        finalY = newTargetY + camOffsetLocal.y
        finalZ = targetWorldZ
    elseif orbitheading == 0 and handbrakeReleased then
        local hbX, hbY = degreesToXY(orbitheading)
        local hbOffsetY = lateralOffset * hbY
        local hbOffsetX = lateralOffset * hbX
        local hbLocal = QuatRotateVector(carQuat, vector3(
            hbOffsetY, hbOffsetX,
            (zOffsetBase + headingCosZ + frontwheelheightoffset + camzoffset) * zAngle
        ))
        finalX = newTargetX + hbLocal.x
        finalY = newTargetY + hbLocal.y
        finalZ = targetWorldZ
    end

    previousBonePosX = finalX
    previousBonePosY = finalY
    previousBonePosZ = finalZ

    -- Pitch (nosedive on brake, nose-up on wheelie, base pitch otherwise)
    if gForceYPositive then
        currentYOffsetpitch = lerp(currentYOffsetpitch, accPitch + (-wheeliefactor), dt)
    else
        if gForces.y == 0 then
            currentYOffsetpitch = lerp(currentYOffsetpitch, basePitch, dt)
        else
            if isbraking and speedMs > 1 then
                currentYOffsetpitch = lerp(currentYOffsetpitch, brakingPitch, dt)
                currentlerpfactor = lerp(shiftedlerpfactor, (interpolationFactor + interpolationFactor * brakingForwardFactor) * speedFovFalloff, dt * brakingAnimSpeed)
                shiftedlerpfactor = currentlerpfactor
            else
                currentYOffsetpitch = lerp(currentYOffsetpitch, coastPitch, dt)
            end
        end
    end

    -- Camera shake (drift or high-speed)
    local shakeAmp, shakeFreq, shakeValue, lerpedShake
    if vehclass == 8 or not enableHighSpeedShake then
        if vehclass ~= 8 and isdrifting and enableDriftShake then
            local speedForShake = speedkmh + driftShakeSpeed + nitrousLerpTarget
            shakeAmp = speedForShake * highSpeedShakeMagnitude
            shakeFreq = highSpeedShakeFrequency
            shakeValue = shakeAmp * math.sin((GetGameTimer() / 1000) * shakeFreq)
            lerpedShake = lerp(0, 0 + shakeValue, dt)
        end
    end
    if lerpedShake == nil then
        shakeAmp, shakeFreq, shakeValue, lerpedShake = 0, 0, 0, 0
    end

    local pitchMapped = map(currentYOffsetpitch + lerpedShake, -12, 12, -90, 90)
    local angularVelMapped = map(yawRateInput, -12, 12, -90, 90)

    lerpedangularvelocity = lerp(lerpedangularvelocity, angularVelMapped, dt)
    currentpitch = lerp(currentpitch, rotX, dt * 2)

    local desiredLock = horizonLock(currentpitch + pitchMapped, rotX)
    local desiredVLock = horizonLock(lerpedangularvelocity * autoDriftVisibilityFactor * angularVelocitySign + rotZ, rotZ)

    if currentlock == nil then currentlock = desiredLock end
    if currentvlock == nil then currentvlock = desiredVLock end

    currentlock = lerp(currentlock, desiredLock, dt)
    currentvlock = lerp(currentvlock, desiredVLock, dt)

    if cameradata.isbumpercamera then
        cameraOffset = vector3(
            0,
            camhoody + camhoodyoffset,
            camhoodz + camhoodzoffset + 0.05
        )
        local worldOffset = QuatRotateVector(carQuat, cameraOffset)
        local camX = bonePos.x + worldOffset.x
        local camY = bonePos.y + worldOffset.y
        local camZ = bonePos.z + worldOffset.z

        SetCamCoord(cam2, camX, camY, camZ)
        PointCamAtCoord(cam2, camX, camY, camZ)
        SetCamRot(cam2, rotX, rotZ, rotY)
    else
        if not cameradata.isfpvcamera then
            SetCamCoord(camHandle, dampedX, dampedY, dampedZ)
            PointCamAtEntity(camHandle, vehicle, -currentvlock, 0.0, currentlock, true)
            SetCamFov(camHandle, dynamicFov)
        end
    end
end
updatecamera2 = UpdateCamera2

-- ============================================================
-- Main per-frame camera update (secondary/full-featured path
-- with braking trail FX, g-force based Y/Z offset and pitch
-- vibration). Despite the name, this is the more feature-complete
-- of the two update functions.
-- ============================================================
-- extraParam (6th param) is present in the original signature but never
-- referenced in the function body.
function UpdateCameraOld(vehicle, camHandle, xOffsetBase, yOffsetBase, zOffsetBase, extraParam)
    local dt = 1.0 - math.pow(1.0E-6, truedeltatime)

    DisableControlAction(0, 68, true)
    DisableControlAction(0, 1, true)
    DisableControlAction(0, 2, true)
    DisableControlAction(0, 0, true)

    local smoothingBlend = 0.1 * dt
    previousSmoothedDeltaTime = (smoothingBlend) + (1 - smoothingBlend) * previousSmoothedDeltaTime

    bonePos = GetEntityCoords(vehicle)
    local qx, qy, qz, qw = GetEntityQuaternion(vehicle)
    local carQuat = quat(qw, qx, qy, qz)

    local gForces = getGForces(vehicle)
    local gVel = gForces.vel

    local rotX, rotY, rotZ = table.unpack(GetEntityRotation(vehicle, 2))

    local speedMsMin8 = math.max(8, GetEntitySpeed(vehicle))
    local heading = GetEntityHeading(vehicle)
    local handbrakeHeld = IsDisabledControlPressed(0, 26)
    local isLocked = lockcamposition

    local smoothedSpeed = smoothSpeed(speedMsMin8, previousSmoothedSpeed, dt)
    previousSmoothedSpeed = smoothedSpeed

    if previousHeading == nil then
        previousHeading = heading
    end

    local frameTime = GetFrameTime()
    local headingDelta = heading - previousHeading
    if headingDelta > 180 then
        headingDelta = headingDelta - 360
    elseif headingDelta < -180 then
        headingDelta = headingDelta + 360
    end
    local headingRate = headingDelta / frameTime

    -- Base x-offset combines caller-provided base offset with a small
    -- correction and a heading-rate based steering compensation
    local xOffsetCalc = xOffsetBase - 0.00525 - (headingRate * 0.05)

    local minXOffset, maxXOffset, xOffsetLerpSpeed
    if isdrifting then
        minXOffset = cameradata.driftminxoffset
        maxXOffset = cameradata.driftmaxxoffset
        xOffsetLerpSpeed = dt * 0.1
        driftvibrationfactor = cameradata.driftvibrationfactor
    else
        minXOffset = cameradata.minxoffset
        maxXOffset = cameradata.maxxoffset
        xOffsetLerpSpeed = dt * 0.04
        driftvibrationfactor = 0
    end

    xOffsetCalc = clamp(xOffsetCalc, minXOffset, maxXOffset)

    if math.abs(xOffsetCalc) < 0.1 then
        xOffsetLerpSpeed = dt * 0.175
    end

    local newXOffset
    if vehclass == 8 then
        newXOffset = lerp(previousXOffset, -xOffsetCalc, xOffsetLerpSpeed)
    else
        newXOffset = lerp(previousXOffset, xOffsetCalc, xOffsetLerpSpeed)
    end
    previousXOffset = newXOffset

    -- FOV
    local baseFov = cameradata.basefov
    local dynamicFovGain = cameradata.dynamicfovgainfactor
    local dynamicFov = baseFov + dynamicFovGain * math.sin(math.atan(speedkmh / 290))

    -- Y offset from lateral g-force, clamped around the caller-provided base
    local yOffsetGForceScale = cameradata.yoffsetgforcescale
    local yOffsetFromG = gForces.y * yOffsetGForceScale
    local minYOffset = cameradata.minyoffset
    local maxYOffset = cameradata.maxyoffset
    local yOffsetTarget = clamp(
        yOffsetBase - yOffsetFromG,
        yOffsetBase + minYOffset,
        yOffsetBase + maxYOffset
    )

    local yOffsetLerpFactor = cameradata.yoffsetlerpfactor
    currentYOffset = lerp(currentYOffset, yOffsetTarget, yOffsetLerpFactor)

    -- Bike wheelie compensation
    local isBikeWheelieCase = false
    if vehclass == 8 then
        if GetVehicleWheelSuspensionCompression(vehicle, 1) == 0 and gVel > 0 then
            isBikeWheelieCase = true
        end
    elseif forcebikemode then
        if GetVehicleWheelSuspensionCompression(vehicle, 1) == 0 and gVel > 0 then
            isBikeWheelieCase = true
        end
    end

    if isBikeWheelieCase then
        wheeliefactor = lerp(wheeliefactor, map(gVel, 0, 65, 0, 3.4), cameradata.bikewheelielerpfactor)
        bikerw = GetWorldPositionOfEntityBone(vehicle, GetEntityBoneIndexByName(vehicle, "wheel_lr"))
        bikefw = GetWorldPositionOfEntityBone(vehicle, GetEntityBoneIndexByName(vehicle, "wheel_lf"))
        frontwheelheightoffset = lerp(frontwheelheightoffset, (bikefw.z - bikerw.z) * 2.75, cameradata.bikewheelielerpfactor)
    else
        wheeliefactor = lerp(wheeliefactor, 0, cameradata.bikewheelielerpfactor)
        frontwheelheightoffset = lerp(frontwheelheightoffset, 0, cameradata.bikewheelielerpfactor)
    end

    -- Pitch
    local pitchBase = cameradata.ypitchbaseoffset
    local minOffsetPitch = cameradata.minoffsetypitch
    local maxOffsetPitch = cameradata.maxoffsetypitch + wheeliefactor

    local pitchFromG = -(gForces.y * 100.0)
    local pitchClamped = clamp(pitchFromG, pitchBase + minOffsetPitch, pitchBase + maxOffsetPitch)
    currentYOffsetpitch = lerp(currentYOffsetpitch, -pitchClamped, 0.0075)

    -- Pitch vibration at speed
    local vibAmp, vibFreq, vibValue, lerpedVib = 0, 0, 0, 0
    local vibrationEnabled = enablespeedvibration
    if vehclass == 8 then
        vibrationEnabled = enablebikespeedvibration
    end

    if vibrationEnabled == true then
        vibAmp = (speedkmh + driftvibrationfactor) * cameradata.pitchvibrationmagnitude
        vibFreq = cameradata.pitchvibrationfrequency
        vibValue = vibAmp * math.sin((GetGameTimer() / 1000) * vibFreq)
        lerpedVib = lerp(0, 0 + vibValue, cameradata.pitchandvibrationlerpfactor)
    end

    -- Jolt shake on landing / on-air Z offset adjustment
    if math.abs(gForces.z - lastGForceZ) > -0.035 then
        local zOffsetGScale, zLerpFactor, minZOffsetRange, maxZOffsetRange

        if not isflying then
            zOffsetGScale = cameradata.zoffsetgforcescale
            zLerpFactor = cameradata.lerpfactorz
            minZOffsetRange = zOffsetBase - cameradata.minzoffset
            maxZOffsetRange = zOffsetBase + cameradata.maxzoffset

            if not jumped then
                if (GetGameTimer() - airtime) > 1000 then
                    ShakeScriptGlobal("JOLT_SHAKE", cameradata.joltintensity * clamp(speedkmh / 100, 0.0, 1.65))
                end
                airtime = GetGameTimer()
                jumped = true
            end
        else
            zOffsetGScale = -cameradata.zoffsetgforcescale
            zLerpFactor = cameradata.lerpfactorz
            minZOffsetRange = zOffsetBase - cameradata.onairminzoffset
            maxZOffsetRange = zOffsetBase + cameradata.onairmaxzoffset

            if gVel < 0 then
                if (GetGameTimer() - airtime) > 135 then
                    currentYOffsetpitch = lerp(currentYOffsetpitch, currentYOffsetpitch + (gVel / 100), cameradata.airtimezoffsetlerpfactor)
                end
            end

            if jumped then
                airtime = GetGameTimer()
                jumped = false
            end
        end

        local zOffsetTarget = clamp(zOffsetBase + (gForces.z * zOffsetGScale), zOffsetBase + minZOffsetRange, zOffsetBase + maxZOffsetRange)
        currentZOffset = lerp(currentZOffset, zOffsetTarget, zLerpFactor)
        lastGForceZ = gForces.z
    end

    if rotZ > 0 then
        rotZ = rotZ - 360
    end
    local zAngle = degreesToZ(-rotZ)

    -- Camera position: locked-behind (handbrake), free orbit, or return-to-center
    local camLocalOffset
    if handbrakeHeld then
        local hbX, hbY = degreesToXY(180)
        camLocalOffset = vector3(
            -currentYOffset * hbY,
            currentYOffset * hbX,
            currentZOffset * zAngle + frontwheelheightoffset
        )
    else
        local mouseInput = GetDisabledControlNormal(0, 1)
        if mouseInput > 0 then
            orbitheading = lerpConstant(orbitheading, 360, frameTime / cameradata.orbitcamdeltatimedivisonfactor, cameradata.orbitcamconstantlerpspeed)
            if orbitheading == 360 then
                orbitheading = 0
            end
            movedmousetime = GetGameTimer()
        elseif mouseInput < 0 then
            orbitheading = lerpConstant(orbitheading, 0, frameTime / cameradata.orbitcamdeltatimedivisonfactor, cameradata.orbitcamconstantlerpspeed)
            if orbitheading == 0 then
                orbitheading = 360
            end
            movedmousetime = GetGameTimer()
        end

        local orbitX, orbitY = degreesToXY(orbitheading)
        camLocalOffset = vector3(
            -currentYOffset * orbitY,
            currentYOffset * orbitX,
            currentZOffset * zAngle + frontwheelheightoffset
        )

        -- Auto-return to center after idle period
        if (GetGameTimer() - movedmousetime) > 350 and not handbrakeHeld and not handbrakeReleased then
            local target = 360 - orbitheading
            if target < orbitheading then
                target = -orbitheading
            end
            orbitheading = lerpConstant(orbitheading, 0, frameTime / cameradata.orbitcamdeltatimedivisonfactorreturn, cameradata.orbitcamconstantlerpspeedreturn)

            local retX, retY = degreesToXY(orbitheading)
            camLocalOffset = vector3(
                -currentYOffset * retY,
                currentYOffset * retX,
                currentZOffset * zAngle + frontwheelheightoffset
            )

            if orbitheading == 0 then
                camLocalOffset = vector3(
                    xOffsetBase,
                    currentYOffset,
                    currentZOffset * zAngle + frontwheelheightoffset
                )
            end
        end
    end

    local worldCamOffset = QuatRotateVector(carQuat, camLocalOffset)
    local upOffsetLocal = QuatRotateVector(carQuat, vector3(0.0, modelDimMax.y, 0.0))

    local targetX = bonePos.x + worldCamOffset.x
    local targetY = bonePos.y + worldCamOffset.y
    local targetZ = bonePos.z + worldCamOffset.z

    if previousBonePosZ == nil then previousBonePosZ = targetZ end
    if previousBonePosX == nil then previousBonePosX = targetX end
    if previousBonePosY == nil then previousBonePosY = targetY end

    local dampedZ = damp(previousBonePosZ, targetZ, frameTime, speedMsMin8 * 0.925)
    previousBonePosZ = dampedZ

    local dampedX = damp(previousBonePosX, targetX, dt * cameradata.xytimemultiplier, dt * cameradata.xyspeedmultiplier)
    local dampedY = damp(previousBonePosY, targetY, dt * cameradata.xytimemultiplier, dt * cameradata.xyspeedmultiplier)
    previousBonePosX = dampedX
    previousBonePosY = dampedY

    -- Slip angle used for steering/pitch lean while accelerating
    if throttle > 0 then
        if GetControlNormal(0, 59) ~= 0 then
            if not isdrifting then
                currentslipangle = lerp(currentslipangle, calculateSlipAngle(vehicle) - 90, frameTime / 2)
            end
        end
    else
        currentslipangle = lerp(currentslipangle, 0, frameTime * 5)
    end

    if currentslipangle > 0 then
        if vehclass == 8 then
            currentslipangle = 0
        else
            currentslipangle = math.min(-cardimensions.x, currentslipangle)
        end
    elseif currentslipangle < 0 then
        if vehclass == 8 then
            currentslipangle = 0
        else
            currentslipangle = math.max(cardimensions.x, currentslipangle)
        end
    end

    currentpitch = lerp(currentpitch, gVel, frameTime * 2)

    local pitchMapped = map(currentYOffsetpitch + lerpedVib, -12, 12, -90, 90)
    local desiredLock = horizonLock(pitchMapped + currentpitch, gVel)
    local desiredVLock = horizonLock(rotY + currentslipangle, rotY)

    currentpitch = currentpitch -- (kept for clarity; value already set above)

    if currentlock == nil then currentlock = desiredLock end
    if currentvlock == nil then currentvlock = desiredVLock end

    currentlock = lerp(currentlock, desiredLock, frameTime)
    currentvlock = lerp(currentvlock, desiredVLock, frameTime)

    local finalX, finalY
    if cameradata.useinterpolatedposition then
        finalX, finalY = dampedX, dampedY
    else
        finalX, finalY = targetX, targetY
    end

    if not cameradata.isbumpercamera then
        SetCamCoord(camHandle, finalX, finalY, dampedZ)
        PointCamAtEntity(camHandle, vehicle, currentvlock, 0.0, currentlock, false)
        SetCamFov(camHandle, dynamicFov)

        -- Braking trail effect
        if IsControlPressed(0, 72) then
            if cameradata.enablebrakingtrail then
                if trailFx[vehicle].status ~= "Full" then
                    StartTrailFx(vehicle)
                    trailFx[vehicle].status = "Full"
                end
            end
        else
            if trailFx[vehicle].status == "Full" then
                trailFx[vehicle].status = "FadingOut"
            end
        end

        if trailFx[vehicle].status == "FadingOut" then
            if trailFx[vehicle].alpha <= 0 then
                StopTrailFx(vehicle)
                trailFx[vehicle].status = "Empty"
            end
        end

        LoopBrakeMode(vehicle)
    else
        cameraOffset = vector3(xOffsetBase, yOffsetBase, frontwheelheightoffset + zOffsetBase)
        local worldOffset = QuatRotateVector(carQuat, cameraOffset)
        local camX = bonePos.x + worldOffset.x
        local camY = bonePos.y + worldOffset.y
        local camZ = bonePos.z + worldOffset.z

        SetCamCoord(cam2, camX, camY, camZ)
        PointCamAtCoord(cam2, camX, camY, camZ)
        SetCamRot(cam2, gVel, rotZ, rotY)
    end
end
updatecamera_old = UpdateCameraOld
