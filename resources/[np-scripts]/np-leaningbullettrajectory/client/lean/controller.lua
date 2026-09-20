local enabled = Config.Enabled
local side, animatedPed, clip, weapon = 0, nil, nil, nil
local requestStarted, retryAt, animationError = nil, 0, false
local animationStarted = nil
local animationFrozen = false
local animationFamily, animationPhase = nil, nil
local dictionary = Config.Lean.Dictionary
local lastEligibility = false
local lastGate = 'not_sampled'
local animationEvent, animationEventAt, animationEventClip = 'none', nil, nil
local animationEventSequence, animationRequests, animationInterruptions = 0, 0, 0
local suspended = false
local player = PlayerId()
local shoulderPressed = false
local frame = {}
local inactiveReason = nil
local performance = Config.Performance or {}
local inactiveWait = math.max(50, math.min(500, tonumber(performance.InactiveWaitMs) or 150))
local sceneInterval = math.max(1, math.min(120, math.floor(tonumber(performance.IdleProbeFrames) or 15)))
local weaponInterval = math.max(1, math.floor(sceneInterval / 3))
local sceneFrames, weaponFrames, gunInHand = 0, 0, false
local idlePed = PlayerPedId()
local humanPed, human
local familyWeapon, familyGroup
local flags = 289
local pistolGroup = joaat('GROUP_PISTOL')
local defaultClips = {
    pistol = { [-1] = 'lean_left_pistol', [1] = 'lean_right_pistol' },
    rifle = { [-1] = 'lean_left_rifle', [1] = 'lean_right_rifle' },
}

local function truth(value) return value == true or value == 1 end

local function selectClip(selected, requested)
    local lean = Config.Lean
    local defaultFamily = lean.DefaultFamily or 'rifle'
    local overrides, groups = lean.WeaponFamilies or {}, lean.GroupFamilies
    if familyWeapon ~= selected then familyWeapon, familyGroup = selected, GetWeapontypeGroup(selected) end
    local group = familyGroup
    local family = overrides[selected]
        or (groups and groups[group])
        or (not groups and group == pistolGroup and 'pistol')
        or defaultFamily
    local clips = (lean.Clips and lean.Clips[family]) or defaultClips[family]
    if type(clips) ~= 'table' then family, clips = 'rifle', defaultClips.rifle end
    local selectedClip = clips[requested]
    if type(selectedClip) ~= 'string' then
        local fallback = defaultClips[family] or defaultClips.rifle
        selectedClip = fallback[requested]
    end
    if type(lean.DebugClip) == 'string' and lean.DebugClip ~= '' then selectedClip = lean.DebugClip end
    return family, selectedClip
end

local function aimPhase(currentFrame)
    local minimum = tonumber(Config.Lean.PitchMin) or -75.0
    local maximum = tonumber(Config.Lean.PitchMax) or 75.0
    if maximum <= minimum then minimum, maximum = -75.0, 75.0 end
    currentFrame.rotation = currentFrame.rotation or GetGameplayCamRot(2)
    local pitch = currentFrame.rotation.x
    return math.max(0.0, math.min(0.999999, (pitch - minimum) / (maximum - minimum)))
end

if Config.Ballistics.Mode == 'muzzle' and next(Config.Ballistics.WeaponProfiles or {}) == nil then
    print('^3[np-leaningbullettrajectory] Muzzle mode with no WeaponProfiles: every weapon keeps the guard behaviour.^7')
end

local function stopAnimation()
    if animatedPed and clip and DoesEntityExist(animatedPed) then
        StopAnimTask(animatedPed, dictionary, clip, Config.Lean.BlendOut + 0.0)
    end
    animatedPed, clip, side, weapon = nil, nil, 0, nil
    animationStarted = nil
    animationFrozen = false
    animationFamily, animationPhase = nil, nil
end

KyzeCombat = KyzeCombat or {}

local function reset()
    stopAnimation()
    KyzeLeanInput.Reset()
    KyzeLeanCamera.Reset()
    KyzeBallistics.Reset()
    requestStarted, lastEligibility = nil, false
end

local function resetAll()
    reset()
    KyzeKeybinds.Reset()
    KyzePlayerState.Reset()
    humanPed, human, weaponFrames, sceneFrames = nil, nil, 0, 0
end

local function aimRequested(currentPlayer)
    if truth(IsPlayerFreeAiming(currentPlayer)) then return true end
    if not truth(IsControlPressed(0, 25)) then return false end
    return truth(IsControlEnabled(0, 25))
end

local function canAim(ped, requested, currentPlayer, context)
    if not enabled then return false, 'resource_disabled' end
    if suspended then return false, 'framework_suspended' end
    currentPlayer = currentPlayer or PlayerId()
    if requested == nil then requested = aimRequested(currentPlayer) end
    if not requested then return false, 'not_aiming' end
    if not (context and context.focusValidated) then
        if IsPauseMenuActive() then return false, 'pause_menu' end
        if IsNuiFocused() then return false, 'nui_focus' end
    end
    if not DoesEntityExist(ped) then return false, 'ped_missing' end
    if ped ~= humanPed then humanPed, human = ped, IsPedHuman(ped) end
    if not human then return false, 'ped_not_human' end
    if IsEntityDead(ped) then return false, 'dead' end
    if not IsPlayerControlOn(currentPlayer) then return false, 'player_control_disabled' end
    if not IsPedOnFoot(ped) then return false, 'not_on_foot' end
    if GetFollowPedCamViewMode() == 4 or IsFirstPersonAimCamActive() then return false, 'first_person' end
    if IsPedRagdoll(ped) then return false, 'ragdoll' end
    if IsPedFalling(ped) then return false, 'falling' end
    if IsPedJumping(ped) then return false, 'jumping' end
    if IsPedClimbing(ped) then return false, 'climbing' end
    if IsPedSwimming(ped) then return false, 'swimming' end
    if IsPedSwimmingUnderWater(ped) then return false, 'underwater' end
    if IsPedBeingStunned(ped, 0) then return false, 'stunned' end
    if IsPedCuffed(ped) then return false, 'cuffed' end
    if IsPedInCover(ped, false) then return false, 'in_cover' end
    if IsPedGoingIntoCover(ped) then return false, 'going_into_cover' end
    if IsPedInMeleeCombat(ped) then return false, 'melee' end
    local state = context and context.state or LocalPlayer.state
    local blockedStates = Config.BlockedStates
    for index = 1, #blockedStates do
        local key = blockedStates[index]
        if state[key] then return false, 'state:' .. key end
    end
    if IsPedSprinting(ped) then return false, 'sprinting' end
    if not KyzeLeanCamera.IsAvailable(context) then return false, 'foreign_camera' end
    if IsPedReloading(ped) then return false, 'reloading' end
    if not IsPedArmed(ped, 4) then return false, 'not_armed' end
    return true, 'eligible'
end

local function inactiveScene()
    if not truth(IsPlayerControlOn(player)) then return 'player_control_disabled' end
    if not truth(IsGameplayCamRendering()) then return 'foreign_camera' end
end

local function quiesce(reason)
    if not inactiveReason then resetAll() end
    inactiveReason, lastGate = reason, reason
    KyzeLeanInput.Reset()
end

local function dictionaryReady(now)
    if HasAnimDictLoaded(dictionary) then requestStarted = nil return true end
    if now < retryAt then return false end
    if not requestStarted then
        requestStarted = now
        RequestAnimDict(dictionary)
    elseif now - requestStarted > Config.Lean.LoadTimeoutMs then
        animationEvent, animationEventAt, animationEventClip = 'dictionary_timeout', now, nil
        animationEventSequence = animationEventSequence + 1
        if not animationError then
            print(('^1[np-leaningbullettrajectory] Could not load %s; check stream/Kyze_lean_movement.ycd.^7'):format(dictionary))
            animationError = true
        end
        requestStarted, retryAt = nil, now + 5000
    end
    return false
end

function KyzeCombat.GetDebugState()
    local currentPlayer, ped, now = PlayerId(), PlayerPedId(), GetGameTimer()
    local context = {}
    local eligible, gate = canAim(ped, nil, currentPlayer, context)
    local requested = KyzeLeanInput.Side()
    local present = DoesEntityExist(ped)
    present = present == true or present == 1
    local selected = present and GetSelectedPedWeapon(ped) or nil
    local family, selectedClip
    if selected then family, selectedClip = selectClip(selected, requested ~= 0 and requested or 1) end
    local loaded = HasAnimDictLoaded(dictionary)
    local dictionaryExists
    if type(DoesAnimDictExist) == 'function' then dictionaryExists = DoesAnimDictExist(dictionary) end
    local playing = animatedPed == ped and clip ~= nil and IsEntityPlayingAnim(ped, dictionary, clip, 3) or false
    local leanEnabled = Config.Lean.Enabled ~= false
    local reason = gate
    local aimHeld, aimControl = IsControlPressed(0, 25), IsControlEnabled(0, 25)
    if gate == 'not_aiming' and (aimHeld == true or aimHeld == 1) and aimControl ~= true and aimControl ~= 1 then
        reason = 'aim_control_disabled'
    end
    if eligible then
        if not leanEnabled then reason = 'lean_disabled'
        elseif requested == 0 then reason = 'input_not_requested'
        elseif dictionaryExists == false or dictionaryExists == 0 then reason = 'dictionary_missing'
        elseif loaded ~= true and loaded ~= 1 then
            reason = requestStarted and 'dictionary_loading' or (animationError and 'dictionary_timeout' or 'dictionary_loading')
        elseif side == 0 then reason = 'awaiting_animation'
        elseif playing == true or playing == 1 then reason = 'lean_playing'
        elseif animationStarted and now - animationStarted < (Config.Lean.StartGraceMs or 350) then reason = 'animation_starting'
        else reason = 'animation_not_playing' end
    end
    return {
        reason = reason, gate = gate, lastMainGate = lastGate, eligible = eligible == true,
        enabled = enabled, suspended = suspended, leanEnabled = leanEnabled,
        aimHeld = aimHeld, aimControlEnabled = aimControl,
        requestedSide = requested, activeSide = side, ped = ped,
        model = present and GetEntityModel(ped) or nil, weapon = selected,
        family = animationFamily or family, clip = clip or selectedClip, phase = animationPhase,
        dictionary = dictionary, dictionaryExists = dictionaryExists, dictionaryLoaded = loaded,
        playing = playing, animationEvent = animationEvent, animationEventAt = animationEventAt,
        animationEventClip = animationEventClip, animationEventSequence = animationEventSequence,
        animationRequests = animationRequests, animationInterruptions = animationInterruptions,
    }
end

local rawKeys = KyzeKeybinds.Active()
local function mapKey(command, description, mapper, key)
    if rawKeys then return end
    RegisterKeyMapping(command, description, mapper, key)
end

local function swapShoulder()
    if shoulderPressed then return end
    shoulderPressed = true
    if canAim(PlayerPedId()) then KyzeLeanCamera.ToggleShoulder() end
end
local function releaseShoulder() shoulderPressed = false end

RegisterCommand('+Kyze_lean_left', function() KyzeLeanInput.Press(-1) end, false)
RegisterCommand('-Kyze_lean_left', function() KyzeLeanInput.Release(-1) end, false)
RegisterCommand('+Kyze_lean_right', function() KyzeLeanInput.Press(1) end, false)
RegisterCommand('-Kyze_lean_right', function() KyzeLeanInput.Release(1) end, false)
mapKey('+Kyze_lean_left', 'Kyze: lean left while aiming', 'keyboard', Config.Lean.LeftKey)
mapKey('+Kyze_lean_right', 'Kyze: lean right while aiming', 'keyboard', Config.Lean.RightKey)
KyzeKeybinds.Bind('lean_left', Config.Lean.LeftKey,
    function() KyzeLeanInput.Press(-1) end, function() KyzeLeanInput.Release(-1) end, true)
KyzeKeybinds.Bind('lean_right', Config.Lean.RightKey,
    function() KyzeLeanInput.Press(1) end, function() KyzeLeanInput.Release(1) end, true)
RegisterCommand('+Kyze_swap_shoulder', swapShoulder, false)
RegisterCommand('-Kyze_swap_shoulder', releaseShoulder, false)
local shoulderKey = (Config.Camera.ShoulderSwap and Config.Camera.ShoulderSwap.Key) or 'MOUSE_MIDDLE'
mapKey('+Kyze_swap_shoulder', 'Kyze: swap camera shoulder while aiming', 'mouse_button', shoulderKey)
KyzeKeybinds.Bind('swap_shoulder', shoulderKey, swapShoulder, releaseShoulder, true, true)

exports('SetEnabled', function(value)
    enabled = value == true
    if not enabled then resetAll() end
end)
exports('IsLeaning', function() return side ~= 0 end)
exports('GetLeanSide', function() return side end)
exports('GetShoulder', function() return KyzeLeanCamera.GetShoulder() end)
exports('GetMuzzleState', function() return KyzeBallistics.GetState() end)

AddEventHandler('QBCore:Client:OnPlayerUnload', function() suspended = true resetAll() end)
AddEventHandler('QBCore:Client:OnPlayerLoaded', function() player = PlayerId() KyzePlayerState.Reset() suspended = false end)
AddEventHandler('esx:onPlayerLogout', function() suspended = true resetAll() end)
RegisterNetEvent('esx:playerLoaded', function() player = PlayerId() KyzePlayerState.Reset() suspended = false end)
AddEventHandler('playerSpawned', function() player = PlayerId() suspended = false resetAll() end)

RegisterCommand('Kyze_combat_status', function()
    local version = 'unknown'
    if type(GetResourceMetadata) == 'function' then
        version = GetResourceMetadata(GetCurrentResourceName(), 'version', 0) or version
    end
    local info = KyzeBallistics.GetState()
    print(('[np-leaningbullettrajectory] version=%s enabled=%s eligible=%s lean=%d shoulder=%s animation=%s family=%s clip=%s phase=%.3f ballistics=%s obstruction=%s'):format(
        version, tostring(enabled), tostring(lastEligibility), side, KyzeLeanCamera.GetShoulder() == -1 and 'left' or 'right',
        tostring(HasAnimDictLoaded(dictionary)),
        animationFamily or 'none', clip or 'none', animationPhase or 0.0,
        Config.Ballistics.Mode, info.reason or 'inactive'
    ))
end, false)

CreateThread(function()
    while true do
        if not enabled or suspended then
            Wait(inactiveWait)
            goto continue
        end
        if inactiveReason then
            local reason
            if inactiveReason == 'pause_menu' or inactiveReason == 'nui_focus' then
                reason = truth(IsPauseMenuActive()) and 'pause_menu' or (truth(IsNuiFocused()) and 'nui_focus' or nil)
            else
                reason = inactiveScene()
            end
            if reason then
                lastGate = reason
                Wait(inactiveWait)
                goto continue
            end
            inactiveReason, sceneFrames, weaponFrames, idlePed = nil, sceneInterval, 0, PlayerPedId()
        end
        local aiming
        if not (lastEligibility or animatedPed) then
            sceneFrames = sceneFrames - 1
            if sceneFrames <= 0 then
                sceneFrames = sceneInterval
                local reason = inactiveScene()
                if reason then
                    quiesce(reason)
                    Wait(inactiveWait)
                    goto continue
                end
                idlePed = PlayerPedId()
            end
            local freeAim = false
            weaponFrames = weaponFrames - 1
            if weaponFrames <= 0 then
                weaponFrames = weaponInterval
                gunInHand = truth(IsPedArmed(idlePed, 4))
                freeAim = gunInHand and truth(IsPlayerFreeAiming(player))
            end
            local wake = freeAim or (gunInHand and truth(IsControlPressed(0, 25)))
            if not wake then
                if Config.Lean.Mode == 'toggle' then KyzeLeanInput.Reset() end
                Wait(0)
                goto continue
            end
        end
        do
            local paused, focused = truth(IsPauseMenuActive()), truth(IsNuiFocused())
            if paused or focused then
                quiesce(paused and 'pause_menu' or 'nui_focus')
                Wait(inactiveWait)
                goto continue
            end
        end
        aiming = aimRequested(player)
        if rawKeys then KyzeKeybinds.Tick(aiming) end
        frame.focusValidated = true
        if not (aiming or lastEligibility or animatedPed) then
            if Config.Lean.Mode == 'toggle' then KyzeLeanInput.Reset() end
            Wait(0)
            goto continue
        end
        do
            local ped = PlayerPedId()
            idlePed = ped
            frame.state = KyzePlayerState.ForFrame(player)
            local eligible, gate = canAim(ped, aiming, player, frame)
            lastGate = gate
            if eligible then
                frame.weapon, frame.now = GetSelectedPedWeapon(ped), GetGameTimer()
                frame.rotation, frame.dt = nil, nil
            end
            if not eligible and (lastEligibility or side ~= 0) then reset() end
            if not eligible then
                if Config.Lean.Mode == 'toggle' then KyzeLeanInput.Reset() end
            else
                local leanEnabled = Config.Lean.Enabled ~= false
                if leanEnabled then
                    local controls = Config.Lean.DisableControls
                    for index = 1, #controls do DisableControlAction(0, controls[index], true) end
                end
                if KyzeLeanCamera.IsShoulderSwapEnabled() then
                    local controls = (Config.Camera.ShoulderSwap or {}).DisableControls or { 27 }
                    for index = 1, #controls do DisableControlAction(0, controls[index], true) end
                end
                local requested = leanEnabled and KyzeLeanInput.Side() or 0
                if requested ~= 0 or animatedPed then
                    local selected = frame.weapon
                    local family, selectedClip = selectClip(selected, requested)
                    if animatedPed and (ped ~= animatedPed or selected ~= weapon
                        or animationFamily ~= family or clip ~= selectedClip) then stopAnimation() end
                    if requested ~= side then
                        if requested == 0 then
                            stopAnimation()
                        elseif dictionaryReady(frame.now) then
                            stopAnimation()
                            clip, animationFamily, animationPhase = selectedClip, family, aimPhase(frame)
                            Citizen.InvokeNative(0xEA47FE3719165B94, ped, dictionary, clip,
                                Config.Lean.BlendIn + 0.0, -math.abs(Config.Lean.BlendOut + 0.0),
                                -1, flags, animationPhase, true, Config.Lean.IkFlags or 512, 0)
                            animatedPed, side, weapon = ped, requested, selected
                            animationStarted = frame.now
                            animationEvent, animationEventAt, animationEventClip = 'requested', frame.now, clip
                            animationEventSequence, animationRequests = animationEventSequence + 1, animationRequests + 1
                        end
                    elseif side ~= 0 and frame.now - animationStarted >= (Config.Lean.StartGraceMs or 350)
                        and not IsEntityPlayingAnim(ped, dictionary, clip, 3) then
                        animationEvent, animationEventAt, animationEventClip = 'interrupted_or_not_started', frame.now, clip
                        animationEventSequence, animationInterruptions = animationEventSequence + 1, animationInterruptions + 1
                        stopAnimation()
                        KyzeLeanInput.Reset()
                    end
                    if side ~= 0 then
                        local currentPhase = aimPhase(frame)
                        local updatePhase = not animationFrozen or currentPhase ~= animationPhase
                        animationPhase = currentPhase
                        if not animationFrozen then
                            SetEntityAnimSpeed(ped, dictionary, clip, 0.0)
                            animationFrozen = frame.now - animationStarted >= (Config.Lean.StartGraceMs or 350)
                        end
                        if updatePhase then SetEntityAnimCurrentTime(ped, dictionary, clip, animationPhase) end
                    end
                end
                KyzeLeanCamera.Tick(ped, side, true, frame)
                KyzeBallistics.Tick(ped, true, frame)
            end
            lastEligibility = eligible
            weaponFrames = 0
        end
        Wait(0)
        ::continue::
    end
end)

AddEventHandler('onResourceStop', function(resource)
    if resource ~= GetCurrentResourceName() then return end
    reset()
    KyzeKeybinds.Reset()
    KyzePlayerState.Reset()
    RemoveAnimDict(dictionary)
end)
