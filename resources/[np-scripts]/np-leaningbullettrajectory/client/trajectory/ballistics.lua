KyzeBallistics = {}

local config = Config.Ballistics or {}
local state = { active = false, blocked = false, clipped = false, reason = 'inactive' }
local pending, previousPed, previousWeapon
local lastPreviewStartedAt
local triggerWasDown = false
local nextShotByWeapon = {}
local requestedAsset
local assetRequestedThisTick, selectedDamageType
local weaponEntity, muzzleBone = 0, -1
local muzzleRead, frameMuzzle, frameOrigin, frameDirection
local WORLD_FLAGS, AIM_FLAGS, OPTIONS = 83, 511, 4

local function distanceSquared(a, b)
    local x, y, z = a.x - b.x, a.y - b.y, a.z - b.z
    return x * x + y * y + z * z
end

local function add(a, b, scale)
    return vector3(a.x + b.x * scale, a.y + b.y * scale, a.z + b.z * scale)
end

local function unit(a, b)
    local length = math.sqrt(distanceSquared(a, b))
    if length < 0.0001 then return nil, length end
    return vector3((b.x - a.x) / length, (b.y - a.y) / length, (b.z - a.z) / length), length
end

local function cameraDirection(rotation)
    local pitch, yaw = math.rad(rotation.x), math.rad(rotation.z)
    local horizontal = math.cos(pitch)
    return vector3(-math.sin(yaw) * horizontal, math.cos(yaw) * horizontal, math.sin(pitch))
end

local function trace(from, to, ped, flags, synchronous)
    local native = synchronous and StartExpensiveSynchronousShapeTestLosProbe or StartShapeTestLosProbe
    return native(from.x, from.y, from.z, to.x, to.y, to.z, flags, ped, OPTIONS)
end

local function poll(handle)
    local status, hit, position, normal, entity = GetShapeTestResult(handle)
    if status == 1 then return nil end
    return { valid = status == 2, hit = hit == 1 or hit == true, position = position, normal = normal, entity = entity }
end

local function getMuzzle(ped, weapon)
    if muzzleRead then return frameMuzzle end
    muzzleRead = true
    local entity = GetCurrentPedWeaponEntityIndex(ped)
    if entity == 0 or not DoesEntityExist(entity) then return nil end
    if entity ~= weaponEntity or weapon ~= previousWeapon then
        weaponEntity, muzzleBone = entity, -1
        for _, name in ipairs(config.MuzzleBones or { 'gun_muzzle' }) do
            local index = GetEntityBoneIndexByName(entity, name)
            if index ~= -1 then muzzleBone = index break end
        end
    end
    local offsets = config.MuzzleOffsets or {}
    local offset = offsets[weapon]
    if offset then
        frameMuzzle = GetOffsetFromEntityInWorldCoords(entity, offset.x, offset.y, offset.z)
        return frameMuzzle
    end
    if muzzleBone == -1 then return nil end
    frameMuzzle = GetWorldPositionOfEntityBone(entity, muzzleBone)
    return frameMuzzle
end

local function cameraOrigin()
    if not frameOrigin then
        frameOrigin = GetFinalRenderedCamCoord()
    end
    return frameOrigin
end

local function cameraAimDirection()
    if not frameDirection then frameDirection = cameraDirection(GetFinalRenderedCamRot(2)) end
    return frameDirection
end

local function snapshot(ped, weapon, synchronous)
    local muzzle = getMuzzle(ped, weapon)
    if not muzzle then return nil end
    local origin, direction = cameraOrigin(), cameraAimDirection()
    local target = add(origin, direction, config.MaxDistance or 500.0)
    return {
        ped = ped, weapon = weapon, muzzle = muzzle,
        chest = GetPedBoneCoords(ped, 24818, 0.0, 0.0, 0.0),
        cameraOrigin = origin, direction = direction, farTarget = target,
        cameraRay = trace(origin, target, ped, AIM_FLAGS, synchronous),
        synchronous = synchronous,
    }
end

local function previewIsCurrent(sample, ped, weapon)
    if sample.ped ~= ped or sample.weapon ~= weapon then return false end
    if distanceSquared(sample.cameraOrigin, cameraOrigin()) > 0.10 * 0.10 then return false end
    local direction = cameraAimDirection()
    local dot = direction.x * sample.direction.x + direction.y * sample.direction.y + direction.z * sample.direction.z
    if dot < 0.9995 then return false end
    local muzzle = getMuzzle(ped, weapon)
    return muzzle ~= nil and distanceSquared(sample.muzzle, muzzle) <= 0.12 * 0.12
end

local function advance(sample)
    if not sample.camera then
        sample.camera = poll(sample.cameraRay)
        if not sample.camera then return nil end
        if not sample.camera.valid then return { active = true, blocked = true, reason = 'probe_unavailable' } end
        sample.target = sample.camera.hit and sample.camera.position or sample.farTarget
        local direction, targetDistance = unit(sample.muzzle, sample.target)
        if not direction then return { active = true, blocked = true, reason = 'invalid_target' } end
        local dot = direction.x * sample.direction.x + direction.y * sample.direction.y + direction.z * sample.direction.z
        if dot < 0.1 then
            return { active = true, blocked = true, reason = 'target_behind_muzzle', muzzle = sample.muzzle }
        end
        sample.barrelEnd = add(sample.muzzle, direction, math.min(targetDistance, config.ObstructionDistance or 3.0))
        sample.bodyRay = trace(sample.chest, sample.muzzle, sample.ped, WORLD_FLAGS, sample.synchronous)
        sample.barrelRay = trace(sample.muzzle, sample.barrelEnd, sample.ped, AIM_FLAGS, sample.synchronous)
    end
    sample.body = sample.body or poll(sample.bodyRay)
    sample.barrel = sample.barrel or poll(sample.barrelRay)
    if not sample.body or not sample.barrel then return nil end
    if not sample.body.valid or not sample.barrel.valid then
        return { active = true, blocked = true, reason = 'probe_unavailable' }
    end
    local tolerance = config.HitTolerance or 0.08
    local clipped = sample.body.hit and distanceSquared(sample.body.position, sample.muzzle) > 0.015 * 0.015
    local obstruction = sample.barrel.hit and (tolerance < 0
        or distanceSquared(sample.barrel.position, sample.target) > tolerance * tolerance)
    if obstruction and sample.barrel.entity ~= 0 and IsEntityAPed(sample.barrel.entity) then obstruction = false end
    local blocked = clipped or obstruction
    return {
        active = true, blocked = blocked, clipped = clipped,
        reason = clipped and 'muzzle_inside_cover' or (obstruction and 'path_blocked' or 'clear'),
        muzzle = sample.muzzle, target = sample.target,
        impact = clipped and sample.body.position or sample.barrel.position,
        normal = clipped and sample.body.normal or sample.barrel.normal,
        weapon = sample.weapon,
    }
end

local function showWarning()
    if config.ShowBlockedText == false or not state.blocked then return end
    if state.reason == 'probe_unavailable' or state.reason == 'missing_muzzle' then return end
    SetTextFont(4)
    SetTextScale(0.0, 0.30)
    SetTextColour(245, 180, 95, 220)
    SetTextCentre(true)
    SetTextOutline()
    BeginTextCommandDisplayText('STRING')
    AddTextComponentSubstringPlayerName(config.BlockedText or 'BARREL OBSTRUCTED')
    EndTextCommandDisplayText(0.5, 0.79)
end

local function releaseAsset()
    if requestedAsset then RemoveWeaponAsset(requestedAsset) end
    requestedAsset = nil
end

local function requestAsset(weapon)
    if requestedAsset ~= weapon then releaseAsset() requestedAsset = weapon end
    if not assetRequestedThisTick then
        RequestWeaponAsset(weapon, 31, 0)
        assetRequestedThisTick = true
    end
end

function KyzeBallistics.Reset()
    state = { active = false, blocked = false, clipped = false, reason = 'inactive' }
    pending, previousPed, previousWeapon = nil, nil, nil
    weaponEntity, muzzleBone = 0, -1
    muzzleRead, frameMuzzle, frameOrigin, frameDirection = false, nil, nil, nil
    lastPreviewStartedAt, triggerWasDown = nil, false
    assetRequestedThisTick, selectedDamageType = false, nil
    releaseAsset()
end

function KyzeBallistics.GetState()
    local copy = {}
    for key, value in pairs(state) do copy[key] = value end
    return copy
end

local function manualShot(ped, weapon, profile, now, justPressed)
    local interval = math.max(50, math.min(5000, tonumber(profile.IntervalMs) or 250))
    if now < (nextShotByWeapon[weapon] or 0) then return end
    if profile.Automatic ~= true and not justPressed then return end
    if IsPedReloading(ped) or not IsPedWeaponReadyToShoot(ped) then return end
    if not state.muzzle or not state.target or state.clipped or state.reason == 'probe_unavailable' then return end
    if not HasWeaponAssetLoaded(weapon) then requestAsset(weapon) return end
    local hasClip, clip = GetAmmoInClip(ped, weapon)
    local total = GetAmmoInPedWeapon(ped, weapon)
    if not hasClip or clip <= 0 or total <= 0 then
        if total > 0 and not IsPedReloading(ped) then MakePedReload(ped) end
        return
    end
    local direction = unit(state.muzzle, state.target)
    if not direction then return end
    local pellets = math.max(1, math.min(32, math.floor(tonumber(profile.Pellets) or 1)))
    local damage = math.max(0, math.floor(tonumber(profile.Damage) or GetWeaponDamage(weapon, 0)))
    local spread = math.tan(math.rad(math.max(0, math.min(20, tonumber(profile.SpreadDegrees) or 0))))
    local right = vector3(direction.y, -direction.x, 0.0)
    local rightLength = math.sqrt(right.x * right.x + right.y * right.y)
    if rightLength < 0.001 then right = vector3(1.0, 0.0, 0.0) else right = right / rightLength end
    local up = vector3(
        right.y * direction.z - right.z * direction.y,
        right.z * direction.x - right.x * direction.z,
        right.x * direction.y - right.y * direction.x
    )
    nextShotByWeapon[weapon] = now + interval
    SetPedAmmo(ped, weapon, total - 1)
    SetAmmoInClip(ped, weapon, clip - 1)
    for pellet = 1, pellets do
        local radius, angle = math.sqrt(math.random()) * spread, math.random() * math.pi * 2.0
        local shotDirection = direction + right * (radius * math.cos(angle)) + up * (radius * math.sin(angle))
        shotDirection = shotDirection / math.sqrt(shotDirection.x^2 + shotDirection.y^2 + shotDirection.z^2)
        local target = add(state.muzzle, shotDirection, tonumber(profile.Range) or config.MaxDistance or 500.0)
        ShootSingleBulletBetweenCoords(
            state.muzzle.x, state.muzzle.y, state.muzzle.z, target.x, target.y, target.z,
            damage, true, weapon, ped, pellet == 1 and not IsPedCurrentWeaponSilenced(ped), false,
            tonumber(profile.Speed) or -1.0
        )
    end
    TriggerEvent('np-leaningbullettrajectory:client:scriptedShot', weapon, clip - 1, total - 1)
end

function KyzeBallistics.Tick(ped, active, frame)
    if config.Enabled == false or not active then
        if state.active or previousPed then KyzeBallistics.Reset() end
        return
    end
    muzzleRead, frameMuzzle, frameOrigin, frameDirection = false, nil, nil, nil
    assetRequestedThisTick = false
    local weapon = frame and frame.weapon or GetSelectedPedWeapon(ped)
    if ped ~= previousPed or weapon ~= previousWeapon then
        KyzeBallistics.Reset()
        previousPed, previousWeapon = ped, weapon
    end
    local now = frame and frame.now or GetGameTimer()
    local attackEnabled
    local triggerDown = IsControlPressed(0, 24) or IsDisabledControlPressed(0, 24)
    local justPressed = triggerDown and not triggerWasDown
    triggerWasDown = triggerDown
    local profiles = config.WeaponProfiles or {}
    local profile = config.Mode == 'muzzle' and profiles[weapon] or nil
    if profile then
        if selectedDamageType == nil then selectedDamageType = GetWeaponDamageType(weapon) end
        if selectedDamageType ~= 3 then profile = nil end
    end
    if profile then
        attackEnabled = IsControlEnabled(0, 24)
        if requestedAsset ~= weapon then requestAsset(weapon) end
    end

    if triggerDown then
        local sample = snapshot(ped, weapon, true)
        pending = nil
        if sample then
            state = advance(sample) or { active = true, blocked = true, reason = 'probe_unavailable' }
        else
            state = { active = true, blocked = true, reason = 'missing_muzzle' }
        end
    else
        if pending then
            local result = advance(pending)
            local current
            if result or state.blocked then current = previewIsCurrent(pending, ped, weapon) end
            if result then
                pending = nil
                if current then state = result end
            end
            if current == false then
                state = { active = true, blocked = false, reason = 'preview_pending' }
                lastPreviewStartedAt = nil
            end
        end
        if not pending then
            local interval = config.PreviewIntervalMs or 40
            if not state.blocked then
                interval = math.max(interval, config.QuietPreviewIntervalMs or interval)
            end
            if not lastPreviewStartedAt or now >= lastPreviewStartedAt + interval then
                pending = snapshot(ped, weapon, false)
                lastPreviewStartedAt = now
                if not pending then state = { active = true, blocked = true, reason = 'missing_muzzle' } end
            end
        end
    end

    if profile then
        DisablePlayerFiring(PlayerId(), true)
        DisableControlAction(0, 24, true)
        DisableControlAction(0, 257, true)
        if attackEnabled and triggerDown then manualShot(ped, weapon, profile, now, justPressed) end
    elseif state.blocked and not (state.reason == 'missing_muzzle' and config.MissingMuzzlePolicy == 'native') then
        DisablePlayerFiring(PlayerId(), true)
        DisableControlAction(0, 24, true)
        DisableControlAction(0, 257, true)
    end
    showWarning()
end
