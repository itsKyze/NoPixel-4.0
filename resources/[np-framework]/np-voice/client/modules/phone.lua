PhoneVolume, IsOnPhoneCall, CurrentCall = 1.0, false

local PhoneListeners = {}

function StartPhoneCall(serverId, callId)
    if IsOnPhoneCall then return end
    PhoneListeners = {}

    IsOnPhoneCall = true

    CurrentCall = { callId = callId, targetId = serverId }

    AddPlayerToTargetList(serverId, "phone", true)

    Citizen.CreateThread(function()
        local existingTarget = not Targets:targetHasAnyActiveContext(serverId)
        local existingChannel = not IsPlayerInTargetChannel(serverId)
        while IsOnPhoneCall do
            local currentTarget = not Targets:targetHasAnyActiveContext(serverId)
            local currentChannel = not IsPlayerInTargetChannel(serverId)
            if existingTarget ~= currentTarget or existingChannel ~= currentChannel then
                existingTarget = currentTarget
                existingChannel = currentChannel
                RefreshTargets()
            end

            Citizen.Wait(1000)
        end
    end)

    Debug('[Phone] Call Started | Call ID %s | Player %s', callId, serverId)
end

function StopPhoneCall(serverId, callId)
    if not IsOnPhoneCall or CurrentCall.callId ~= callId then return end

    IsOnPhoneCall = false

    CurrentCall = nil

    RemovePlayerFromTargetList(serverId, "phone", true, true)

    for i=1, #PhoneListeners do
        local listener = PhoneListeners[i]
        RemovePlayerFromTargetList(listener, "phone", true, true)
        TriggerServerEvent("np:voice:phone:call:listeners:removed", listener)
    end
    PhoneListeners = {}

    Debug('[Phone] Call Ended | Call ID %s | Player %s', callId, serverId)
end

function AddPhoneCallListener(serverId)
    if not IsOnPhoneCall then return end

    PhoneListeners[#PhoneListeners + 1] = serverId
    AddPlayerToTargetList(serverId, "phone", true)

    Debug('[Phone] Call Listener Added | Player %s', serverId)
end

function RemovePhoneCallListener(serverId)
    RemovePlayerFromTargetList(serverId, "phone", true, true)
    Debug('[Phone] Call Listener Removed | Player %s', serverId)

    for i=1, #PhoneListeners do
        local listener = PhoneListeners[i]
        if listener == serverId then
            table.remove(PhoneListeners, i)
            return
        end
    end
end

function IncreasePhoneVolume()
  local currentVolume = PhoneVolume
  SetPhoneVolume(currentVolume + 0.1)
end

function DecreasePhoneVolume()
  local currentVolume = PhoneVolume
  SetPhoneVolume(currentVolume - 0.1)
end

function SetPhoneVolume(volume)
    if volume < 0.0 then return end
  PhoneVolume = handleVolume(volume)

  -- If the radio is turned on then we update the volume of the current transmissions
  UpdateContextVolume("phone", PhoneVolume)

  Debug("[Phone] Volume Changed | Current: %s", PhoneVolume)
end

function LoadPhoneModule()
    RegisterModuleContext("phone", 1)
    UpdateContextVolume("phone", Config.settings.phoneVolume)

    RegisterNetEvent("np:voice:phone:call:start")
    AddEventHandler("np:voice:phone:call:start", StartPhoneCall)

    RegisterNetEvent("np:voice:phone:call:end")
    AddEventHandler("np:voice:phone:call:end", StopPhoneCall)

    RegisterNetEvent('np-voice:addPhoneCallListener', AddPhoneCallListener)
    RegisterNetEvent('np-voice:removePhoneCallListener', RemovePhoneCallListener)

    exports("SetPhoneVolume", SetPhoneVolume)
    exports("IncreasePhoneVolume", IncreasePhoneVolume)
    exports("DecreasePhoneVolume", DecreasePhoneVolume)

    if Config.enableSubmixes and Config.enableFilters.phone then
        RegisterContextSubmix("phone")

        local filters = {
            { name = "freq_low", value = 100.0 },
            { name = "freq_hi", value = 10000.0 },
            { name = "rm_mod_freq", value = 0.0 },
            { name = "rm_mix", value = 0.10 },
            { name = "fudge", value = 1.0 },
            { name = "o_freq_lo", value = 100.0 },
            { name = "o_freq_hi", value = 10000.0 },
        }

        SetFilterParameters("phone", filters)
    end

    TriggerEvent("np:voice:phone:ready")

    Debug("[Phone] Module Loaded")
end

RegisterNetEvent('np-voice:setTransmissionDisabled', function ()
    WasEventCanceled()

    if not IsOnPhoneCall then return end

    local serverId = CurrentCall.targetId

    local isPhoneDisabled = IsTransmissionDisabled("phone")

    if isPhoneDisabled then
        RemovePlayerFromTargetList(serverId, "phone", true, true)
    elseif not isPhoneDisabled and not IsPlayerInContextTargetList(serverId, "phone") then
        AddPlayerToTargetList(serverId, "phone", true)
    end
end)