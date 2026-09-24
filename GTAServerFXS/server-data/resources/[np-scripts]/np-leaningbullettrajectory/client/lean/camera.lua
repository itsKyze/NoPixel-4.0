KyzeLeanCamera = {}
local settings = Config.Camera
local camera, amount, backward = nil, 0.0, 0.0
local lastFov, lastPosition, lastRotation
local checkedFrame, checkedCamera
local stolen = false
local shoulder = 1
local probedPosition, probedAt, probedBase, probedDesired, probedHead, camActive

local function near(a, b)
    local x, y, z = a.x - b.x, a.y - b.y, a.z - b.z
    return x * x + y * y + z * z < 0.000001
end

local function rendererIsOurs()
    return camera and DoesCamExist(camera) and GetRenderingCam() == camera
end

function KyzeLeanCamera.IsAvailable(frame)
    checkedFrame, checkedCamera = nil, nil
    local available
    if not settings.Enabled then available = IsGameplayCamRendering()
    else available = rendererIsOurs() or (not camera and IsGameplayCamRendering()) end
    if available and frame then checkedFrame, checkedCamera = frame, camera end
    return available
end

function KyzeLeanCamera.IsShoulderSwapEnabled()
    return settings.Enabled and (not settings.ShoulderSwap or settings.ShoulderSwap.Enabled ~= false)
end

function KyzeLeanCamera.GetShoulder()
    return shoulder
end

function KyzeLeanCamera.ToggleShoulder()
    if not KyzeLeanCamera.IsShoulderSwapEnabled() or not KyzeLeanCamera.IsAvailable() then return false end
    shoulder = -shoulder
    return true
end

local function targetOffset(side)
    if side == -1 then return settings.LeftOffset, settings.LeftBackwardOffset or 0.0 end
    if side == 1 then return settings.RightOffset, settings.RightBackwardOffset or 0.0 end
    if not KyzeLeanCamera.IsShoulderSwapEnabled() then return 0.0, 0.0 end
    local swap = settings.ShoulderSwap or {}
    if shoulder == -1 then return swap.LeftOffset or settings.LeftOffset, swap.LeftBackwardOffset or 0.0 end
    return swap.RightOffset or 0.0, swap.RightBackwardOffset or 0.0
end

function KyzeLeanCamera.Reset()
    if camera and DoesCamExist(camera) then
        if rendererIsOurs() then RenderScriptCams(false, false, 0, true, false) end
        DestroyCam(camera, false)
    end
    camera, amount, backward, stolen = nil, 0.0, 0.0, false
    lastFov, lastPosition, lastRotation = nil, nil, nil
    checkedFrame, checkedCamera = nil, nil
    probedPosition, probedBase, probedDesired, probedHead, camActive = nil, nil, nil, nil, false
end

local function clampSegment(from, target, ped)
    local delta = target - from
    local length = #delta
    if length < 0.001 then return target end
    local handle = StartExpensiveSynchronousShapeTestLosProbe(
        from.x, from.y, from.z, target.x, target.y, target.z, 83, ped, 4
    )
    local status, hit, point = GetShapeTestResult(handle)
    if status ~= 2 then return from end
    if hit == 1 or hit == true then
        local distance = math.max(0.0, #(point - from) - settings.CollisionMargin)
        return from + delta * (distance / length)
    end
    return target
end

function KyzeLeanCamera.Tick(ped, side, eligible, frame)
    local alreadyChecked = frame ~= nil and frame == checkedFrame and camera == checkedCamera
    checkedFrame, checkedCamera = nil, nil
    if not settings.Enabled or not eligible then
        KyzeLeanCamera.Reset()
        return
    end
    if camera and not alreadyChecked and not rendererIsOurs() then
        KyzeLeanCamera.Reset()
        stolen = true
        return
    end
    local target, targetBackward = targetOffset(side)
    local nativeTarget = math.abs(target) < 0.003 and math.abs(targetBackward) < 0.003
    if side == 0 and nativeTarget and not camera then return end
    if not camera then
        if stolen or (not alreadyChecked and not IsGameplayCamRendering()) then return end
        camera = CreateCam('DEFAULT_SCRIPTED_CAMERA', false)
        if not DoesCamExist(camera) then camera = nil return end
        SetCamAffectsAiming(camera, true)
        SetCamNearClip(camera, settings.NearClip)
    end

    local dt = frame and frame.dt or GetFrameTime()
    if frame then frame.dt = dt end
    local blend = 1.0 - math.exp(-settings.BlendSpeed * math.min(dt, 0.1))
    amount = amount + (target - amount) * blend
    backward = backward + (targetBackward - backward) * blend
    if side == 0 and nativeTarget and math.abs(amount) < 0.003 and math.abs(backward) < 0.003 then
        KyzeLeanCamera.Reset()
        return
    end

    local base, rotation = GetGameplayCamCoord(), frame and frame.rotation or GetGameplayCamRot(2)
    local yaw = math.rad(rotation.z)
    local cosine, sine = math.cos(yaw), math.sin(yaw)
    local verticalWeight = math.min(1.0, math.max(math.abs(amount), math.abs(backward)) / 0.18)
    local desired = base + vector3(
        cosine * amount + sine * backward,
        sine * amount - cosine * backward,
        settings.HeightOffset * verticalWeight
    )
    local head = GetPedBoneCoords(ped, 31086, 0.0, 0.0, 0.0)
    local now = frame and frame.now or GetGameTimer()
    local position
    if probedPosition and now - probedAt < 100 and near(base, probedBase) and near(desired, probedDesired)
        and near(head, probedHead) then
        position = probedPosition
    else
        position = clampSegment(base, desired, ped)
        position = clampSegment(head, position, ped)
        probedPosition, probedAt, probedBase, probedDesired, probedHead = position, now, base, desired, head
    end
    if not lastPosition or position.x ~= lastPosition.x or position.y ~= lastPosition.y or position.z ~= lastPosition.z then
        SetCamCoord(camera, position.x, position.y, position.z)
        lastPosition = position
    end
    if not lastRotation or rotation.x ~= lastRotation.x or rotation.y ~= lastRotation.y or rotation.z ~= lastRotation.z then
        SetCamRot(camera, rotation.x, rotation.y, rotation.z, 2)
        lastRotation = rotation
    end
    local fov = GetGameplayCamFov()
    if fov ~= lastFov then SetCamFov(camera, fov) lastFov = fov end
    if not camActive then
        SetCamActive(camera, true)
        RenderScriptCams(true, false, 0, true, false)
        camActive = true
    end
    if settings.ShowNativeReticle then
        ShowHudComponentThisFrame(14)
    end
end
