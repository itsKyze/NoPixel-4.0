local playerPed = PlayerPedId()
local crouchState = false
local crouchSafe = true
local spamSafe = true
local isPuttingIntoVehicle = false
-- crouch handling..

function CrouchAllowed()
    return (not IsPedInMeleeCombat(playerPed) and not IsPedRagdoll(playerPed) and not IsPedJacking(playerPed) and not isFlying and not isHolding and not (IsPedSittingInAnyVehicle(GetPlayerPed(-1))) and not (handCuffed or handCuffedWalking or isDead))
end

function crouch()
    if crouchState and spamSafe then
        spamSafe = false
        ResetPedWeaponMovementClipset(playerPed)
        ResetPedStrafeClipset(playerPed)
        ResetPedMovementClipset(playerPed, 0.7)
        Wait(500)
        TriggerEvent("AnimSet:Set")
        spamSafe = true
        crouchState = false

        TriggerEvent("crouch:state", crouchState)
    else
        if not CrouchAllowed() or not spamSafe or crouchState then
            return
        end
        spamSafe = false
        RequestAnimSet("move_ped_crouched")
        while not HasAnimSetLoaded("move_ped_crouched") do
            Citizen.Wait(0)
        end 
        SetPedMovementClipset(playerPed, "move_ped_crouched", 0.7)
        SetPedWeaponMovementClipset(playerPed, "move_ped_crouched", 0.7)
        SetPedStrafeClipset(playerPed, "move_ped_crouched_strafing", 0.7)
        Wait(500)
        spamSafe = true
        loopCrouchCheck()
        crouchState = true
        TriggerEvent("crouch:state", crouchState)
    end
    if crouchState then
        SetPlayerMaxStamina(PlayerId(), 5.0)
    else
        SetPlayerMaxStamina(PlayerId(), 100.0)
    end
end



-- crouch disable / enable events
isDead = false
AddEventHandler('wounds:changeDeathState', function(deadState)
    isDead = deadState
end)

Citizen.CreateThread(function()
    exports["np-keybinds"]:registerKeyMapping("", "Player", "Crouch", "+moveCrouch", "-moveCrouch", "X")
    RegisterCommand('+moveCrouch', crouch, false)
    RegisterCommand('-moveCrouch', function() end, false)
end)

local isHolding = false
local isFlying = false


function loopCrouchCheck()
    while crouchState do
        playerPed = PlayerPedId()
        if not CrouchAllowed() then
            crouch(false)
        end
        Citizen.Wait(100)
    end
end

handCuffed = false
handCuffedWalking = false


RegisterNetEvent('np-police:cuffs:state')
AddEventHandler('np-police:cuffs:state', function(handCuffedSent, WalkingSent)
    handCuffed = handCuffedSent
    handCuffedWalking = WalkingSent
end)

RegisterNetEvent('news:HoldingState')
AddEventHandler('news:HoldingState', function(state)
    isHolding = state
end)

RegisterNetEvent("admin:isFlying")
AddEventHandler("admin:isFlying", function(state)
    isFlying = state
end)

AddEventHandler('baseevents:enteredVehicle', function(_, _, _, _, pModel)
    VehicleAiming(true)
end)

AddEventHandler('baseevents:leftVehicle', function(_, _, _, _, pModel)
    VehicleAiming(false)
end)

local isInVehicle = false
function VehicleAiming(pIsInVehicle)
    playerPed = PlayerPedId()
    isInVehicle = pIsInVehicle
    if not isInVehicle then
        return
    end
    Wait(10)
    Citizen.CreateThread(function()
        while isInVehicle do
            if IsPedArmed(playerPed, 7) then
                if IsPedDoingDriveby(playerPed) then
                    if GetFollowPedCamViewMode() ~= 4 or GetFollowVehicleCamViewMode() ~= 4 then
                        SetPlayerCanDoDriveBy(PlayerId(), false)
                        Wait(250)
                        SetFollowPedCamViewMode(4)
                        SetFollowVehicleCamViewMode(4)
                        if IsPedOnAnyBike(playerPed) then
                            SetCamViewModeForContext(2, 4)
                        end
                        Wait(250)
                        SetPlayerCanDoDriveBy(PlayerId(), true)
                    end
                end
            end
            Wait(1)
        end
    end)
end

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if IsPedArmed(PlayerPedId(), 6) then
            DisableControlAction(1, 140, true)
            DisableControlAction(1, 141, true)
            DisableControlAction(1, 142, true)
        end

        if crouchState then
            DisableControlAction(0, 21, true)
        end
    end
end)


exports('isCrouching', function()
    return crouchState
end)