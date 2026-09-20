

local isGrabbing = false
local lastGrab = 0
local lastFailedGrab = 0

local INPUT_JUMP = 22
local INPUT_FORWARD = 31
local INPUT_MOVE_UP = 32
local INPUT_MOVE_DOWN = 33

local function ped()
    return PlayerPedId()
end

local function clamp(value, minValue, maxValue)
    if value < minValue then return minValue end
    if value > maxValue then return maxValue end
    return value
end

local function raycast(from, to, ignoreEntity)
    local handle = StartExpensiveSynchronousShapeTestLosProbe(
        from.x, from.y, from.z,
        to.x, to.y, to.z,
        -1,
        ignoreEntity or ped(),
        4
    )
    local _, hit, coords, normal, materialHash, entityHit = GetShapeTestResultIncludingMaterial(handle)
    return hit == 1, coords, normal, materialHash, entityHit
end

local function length2d(vec)
    return math.sqrt(vec.x * vec.x + vec.y * vec.y)
end

local function normalize2d(vec)
    local length = length2d(vec)
    if length <= 0.001 then return nil, 0.0 end
    return vector3(vec.x / length, vec.y / length, 0.0), length
end

local function distance2d(a, b)
    local dx = a.x - b.x
    local dy = a.y - b.y
    return math.sqrt(dx * dx + dy * dy)
end

local function inputDirection(p)
    local forward = GetEntityForwardVector(p)
    local moveX = GetDisabledControlNormal(0, 30)
    local moveY = GetDisabledControlNormal(0, INPUT_FORWARD)

    if math.abs(moveX) < 0.05 and math.abs(moveY) < 0.05 then
        return normalize2d(forward)
    end

    local heading = math.rad(GetEntityHeading(p))
    local right = vector3(math.cos(heading), -math.sin(heading), 0.0)
    return normalize2d(vector3(
        forward.x * moveY + right.x * moveX,
        forward.y * moveY + right.y * moveX,
        0.0
    ))
end

local function approachDirection(p)
    local inputDir = inputDirection(p)
    local forwardInput = GetDisabledControlNormal(0, INPUT_FORWARD)

    if inputDir and forwardInput > 0.12 then
        local velocity = GetEntityVelocity(p)
        return inputDir, length2d(velocity)
    end

    local velocityDir, speed = normalize2d(GetEntityVelocity(p))
    if velocityDir and speed > 0.2 then
        return velocityDir, speed
    end

    if inputDir then
        return inputDir, speed or 0.0
    end

    local fallbackDir = normalize2d(GetEntityForwardVector(p))
    return fallbackDir, 0.0
end

local function isAirborne(p)
    return IsPedJumping(p) or IsPedFalling(p)
end

local function canEvaluate(p)
    local grab = Config.Climb.LedgeGrab
    return Config.Climb.Enabled
        and grab.Enabled
        and not isGrabbing
        and isAirborne(p)
        and not IsPedInAnyVehicle(p, false)
        and not IsEntityDead(p)
        and not IsEntityInWater(p)
        and not IsPedRagdoll(p)
        and not IsPedGettingUp(p)
        and not IsPedClimbing(p)
        and GetGameTimer() - lastGrab >= (Config.Climb.ClimbCooldown or 900)
        and GetGameTimer() - lastFailedGrab >= (grab.FailedGrabCooldown or 450)
end

local function materialAllowed(materialHash)
    if not Config.Climb.AllowedMaterials then return true end

    for _, allowedHash in ipairs(Config.Climb.AllowedMaterials) do
        if allowedHash == materialHash then return true end
    end

    return false
end

local function showClimbUi(_, _)
end

local function hideClimbUi()
end

local function proximityProgress(distance)
    local grab = Config.Climb.LedgeGrab
    local detectDistance = grab.DetectDistance or Config.Climb.Prompt.DetectDistance
    local armReach = grab.ArmReachDistance or Config.Climb.Prompt.ReadyDistance

    if distance <= armReach then return 1.0 end
    if distance >= detectDistance then return 0.0 end
    return clamp(1.0 - ((distance - armReach) / (detectDistance - armReach)), 0.0, 1.0)
end

local function findWallFace(p, dir, distance)
    local pos = GetEntityCoords(p)
    local best = nil

    for _, zOffset in ipairs({ 1.45, 1.25, 1.05, 0.85, 0.65, 0.45, 0.25 }) do
        local from = pos + vector3(0.0, 0.0, zOffset)
        local hit, coords, normal, materialHash = raycast(from, from + dir * distance, p)

        if hit and materialAllowed(materialHash) then
            local hitDistance = distance2d(pos, coords)
            if not best or hitDistance < best.distance then
                best = {
                    coords = coords,
                    normal = normal,
                    materialHash = materialHash,
                    distance = hitDistance,
                }
            end
        end
    end

    return best
end

local function findLedgeTop(p, dir, wall)
    local grab = Config.Climb.LedgeGrab
    local maxScan = math.max(Config.Climb.ClimbMaxHeight or 3.4, (grab.TopMaxOffset or 2.15) + 1.4)

    for up = 0.05, maxScan, 0.08 do
        local probe = wall.coords + vector3(-dir.x * 0.14, -dir.y * 0.14, up)
        local hit = raycast(probe, probe + dir * 0.58, p)

        if not hit then
            return probe.z
        end
    end

    return nil
end

local function findLanding(p, dir, wall, topZ)
    local above = vector3(
        wall.coords.x + dir.x * 0.62,
        wall.coords.y + dir.y * 0.62,
        topZ + 0.85
    )
    local floorHit, floorPos = raycast(above, vector3(above.x, above.y, topZ - 1.35), p)
    if not floorHit then return nil end

    local landing = vector3(
        floorPos.x + dir.x * (Config.Climb.LedgeForwardOffset or 0.35),
        floorPos.y + dir.y * (Config.Climb.LedgeForwardOffset or 0.35),
        floorPos.z
    )
    local headBlocked = raycast(
        landing + vector3(0.0, 0.0, 0.35),
        landing + vector3(0.0, 0.0, 1.85),
        p
    )

    if headBlocked then return nil end
    return landing
end

local function findParkourLedge(p, maxDistance)
    local grab = Config.Climb.LedgeGrab
    local pos = GetEntityCoords(p)
    local dir, speed = approachDirection(p)
    if not dir then return false end

    if speed < (grab.MinHorizontalSpeed or 0.45) and GetDisabledControlNormal(0, INPUT_FORWARD) < 0.12 then
        return false
    end

    local detectDistance = maxDistance or grab.DetectDistance or Config.Climb.Prompt.DetectDistance
    local wall = findWallFace(p, dir, detectDistance)
    if not wall then return false end
    local candidate = {
        distance = wall.distance,
    }

    local topZ = findLedgeTop(p, dir, wall)
    if not topZ then return false, candidate end

    local topOffset = topZ - pos.z
    if topOffset < (grab.TopMinOffset or -0.35) or topOffset > (grab.TopMaxOffset or 2.15) then
        return false, candidate
    end

    local landing = findLanding(p, dir, wall, topZ)
    if not landing then return false, candidate end

    local hangBack = grab.HangBackOffset or 0.34
    local hangDown = grab.HangDownOffset or 1.12

    return true, {
        dir = dir,
        distance = wall.distance,
        heading = GetHeadingFromVector_2d(dir.x, dir.y),
        landing = landing,
        hang = vector3(wall.coords.x - dir.x * hangBack, wall.coords.y - dir.y * hangBack, topZ - hangDown),
    }
end

local function easeMovePed(p, target, duration, heading)
    local start = GetEntityCoords(p)
    local startedAt = GetGameTimer()

    while GetGameTimer() - startedAt < duration do
        local progress = (GetGameTimer() - startedAt) / duration
        local eased = 1.0 - (1.0 - progress) * (1.0 - progress)
        local x = start.x + (target.x - start.x) * eased
        local y = start.y + (target.y - start.y) * eased
        local z = start.z + (target.z - start.z) * eased

        SetEntityVelocity(p, 0.0, 0.0, 0.0)
        SetEntityCoordsNoOffset(p, x, y, z, false, false, false)
        SetEntityHeading(p, heading)
        Wait(0)
    end

    SetEntityCoordsNoOffset(p, target.x, target.y, target.z, false, false, false)
    SetEntityHeading(p, heading)
end

local function fallbackClimb(p, ledge)
    local duration = math.floor((Config.Climb.ClimbDuration or 0.65) * 1000)
    easeMovePed(p, ledge.landing, duration, ledge.heading)
end

local function tryNativeClimb(p, ledge)
    local grab = Config.Climb.LedgeGrab
    if not grab.UseNativeClimbTask then return false end

    local assist = grab.ForwardAssist or 0.0
    if assist > 0.0 then
        local current = GetEntityCoords(p)
        SetEntityCoordsNoOffset(
            p,
            current.x + ledge.dir.x * assist,
            current.y + ledge.dir.y * assist,
            current.z,
            false,
            false,
            false
        )
    end

    SetEntityHeading(p, ledge.heading)
    SetEntityVelocity(
        p,
        ledge.dir.x * (grab.VelocityAssist or 1.05),
        ledge.dir.y * (grab.VelocityAssist or 1.05),
        grab.UpwardAssist or 0.18
    )
    TaskClimb(p, true)

    local startTimeout = GetGameTimer() + (grab.NativeStartTimeout or 360)
    local started = false

    while GetGameTimer() < startTimeout do
        if IsPedClimbing(p) then
            started = true
            break
        end
        Wait(0)
    end

    if not started then return false end

    local finishTimeout = GetGameTimer() + (grab.NativeClimbTimeout or 1150)
    while GetGameTimer() < finishTimeout do
        if not IsPedClimbing(p) and not isAirborne(p) then
            return true
        end
        Wait(0)
    end

    return not isAirborne(p)
end

local function startParkourGrab(p, ledge)
    isGrabbing = true
    lastGrab = GetGameTimer()
    hideClimbUi()

    SetPedCanRagdoll(p, false)

    local settleTime = Config.Climb.LedgeGrab.SettleTime or 0
    if settleTime > 0 then
        easeMovePed(p, ledge.hang, settleTime, ledge.heading)
    end

    local holdTime = Config.Climb.LedgeGrab.HangTimeBeforePullUp or 0
    if holdTime > 0 then
        local holdUntil = GetGameTimer() + holdTime
        while GetGameTimer() < holdUntil do
            SetEntityVelocity(p, 0.0, 0.0, 0.0)
            SetEntityHeading(p, ledge.heading)
            DisableControlAction(0, INPUT_JUMP, true)
            DisableControlAction(0, INPUT_MOVE_UP, true)
            DisableControlAction(0, INPUT_MOVE_DOWN, true)
            Wait(0)
        end
    end

    local nativeOk = tryNativeClimb(p, ledge)
    local current = GetEntityCoords(p)
    local nearLanding = #(current - ledge.landing) <= 1.8

    if not nativeOk and Config.Climb.LedgeGrab.UseFallbackPlacement and (isAirborne(p) or not nearLanding) then
        ClearPedTasksImmediately(p)
        fallbackClimb(p, ledge)
    elseif not nativeOk then
        lastFailedGrab = GetGameTimer()
    end

    SetPedCanRagdoll(p, true)
    SetPedMoveRateOverride(p, 1.0)
    isGrabbing = false
end

CreateThread(function()
    if not Config.Climb.Enabled then return end

    while true do
        local sleep = 120
        local p = ped()

        if canEvaluate(p) then
            local ok, ledge = findParkourLedge(p)

            if ledge then
                local progress = proximityProgress(ledge.distance)
                local ready = ok and progress >= 1.0
                showClimbUi(progress, ready)
                sleep = 0

                if ready then
                    startParkourGrab(p, ledge)
                end
            else
                hideClimbUi()
            end
        else
            hideClimbUi()
        end

        Wait(sleep)
    end
end)

AddEventHandler('onResourceStop', function(resourceName)
    if resourceName ~= GetCurrentResourceName() then return end

    hideClimbUi()
    if isGrabbing then
        local p = ped()
        ClearPedTasksImmediately(p)
        SetPedCanRagdoll(p, true)
        SetPedMoveRateOverride(p, 1.0)
    end
end)

exports('TriggerLedgeClimb', function()
    local p = ped()
    if isGrabbing or GetGameTimer() - lastGrab < (Config.Climb.ClimbCooldown or 900) then return false end

    local ok, ledge = findParkourLedge(p, Config.Climb.WallCheckDistance)
    if ok and ledge then
        startParkourGrab(p, ledge)
        return true
    end

    lastFailedGrab = GetGameTimer()
    return false
end)

exports('IsMantling', function()
    return isGrabbing
end)
