local isDialing, isRinging = false, false
local incomingCallId = nil
local activeCallId = nil
local isDead = false
local isCuffed = false
local currentEmployment, currentDepartment, currentTitle = nil, nil, nil

Citizen.CreateThread(function()
  while true do
    isCuffed = exports["isPed"]:isPed("handcuffed")
    Wait(500)
  end
end)

function IsInActiveCall()
  return isDialing or isRinging or activeCallId
end

RegisterNetEvent("jobmanager:playerBecameJob")
AddEventHandler("jobmanager:playerBecameJob", function(job, notify)
  if job == "police" then
    currentDepartment = exports['dispatch']:GetCurrentDepartment()
  else
    currentDepartment = nil
  end
  currentEmployment = job
end)

RegisterNetEvent("police:setCallSign")
AddEventHandler("police:setCallSign", function(pCallSign, pDepartment, pTitle)
  currentDepartment = pDepartment
  currentTitle = pTitle
end)

-- This is what you should call on the receiving end ;)
RegisterNetEvent("phone:call:receive")
AddEventHandler("phone:call:receive", function(pNumber, pCallId)
  SendUIMessage({
    source = "np-nui",
    app = "phone",
    data = {
      action = "call-receiving",
      number = pNumber,
      callId = pCallId
    }
  })
  isRinging = true
  incomingCallId = pCallId
end)

-- call this event when call begins
RegisterNetEvent("phone:call:in-progress")
AddEventHandler("phone:call:in-progress", function(pNumber, pCallId, pType)
  SendUIMessage({
    source = "np-nui",
    app = "phone",
    data = {
      action = "call-in-progress",
      number = pNumber,
      callId = pCallId
    }
  })
  isDialing, isRinging = false, false
  activeCallId = pCallId

  if pType ~= 'PAYPHONE' then
    playPhoneCallAnim()
  end
end)

-- call this event when call is outgoing
RegisterNetEvent("phone:call:dialing")
AddEventHandler("phone:call:dialing", function(pNumber, pCallId, pType)
  SendUIMessage({
    source = "np-nui",
    app = "phone",
    data = {
      action = "call-dialing",
      number = pNumber,
      callId = pCallId
    }
  })
  isDialing = true
  incomingCallId = pCallId

  if pType ~= 'PAYPHONE' then
    TriggerEvent("attachItemPhone", "np_phone_black")

    playPhoneCallAnim()
  end
end)

-- call this when there is no active calling state (not dialing, receiving, in call - after hang up)
RegisterNetEvent("phone:call:inactive")
AddEventHandler("phone:call:inactive", function(pNumber, pCallId, pMessage)
  TriggerEvent("destroyPropPhone")
  SendUIMessage({
    source = "np-nui",
    app = "phone",
    data = {
      action = "call-inactive",
      number = pNumber,
      message = pMessage,
    }
  })
  isDialing, isRinging = false, false
  activeCallId = nil
  incomingCallId = nil
end)

RegisterUICallback("np-ui:togglePhoneNotificationSounds", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = 'done' }})
  local toggled = data.status == "on"
  TriggerServerEvent("phone:setNotificationState", toggled)
end)

function endPhoneCall()
  TriggerEvent("destroyPropPhone")
  if not activeCallId or not incomingCallId then return end
  if activeCallId then
    RPC.execute('phone:callEnd', activeCallId)
  elseif incomingCallId then
    RPC.execute('phone:callEnd', incomingCallId)
  end

  local timeout = false

  Citizen.SetTimeout(1500, function() timeout = true end)

  while not timeout and (isRinging or isDialing or activeCallId) do
    Citizen.Wait(100)
  end
end

function LoadAnimDict(dict)
  if not HasAnimDictLoaded(dict) then
    RequestAnimDict(dict)
    while not HasAnimDictLoaded(dict) do
      Citizen.Wait(0)
    end
  end
end

AddEventHandler("wounds:changeDeathState", function(state)
  isDead = state
  if isDead then
    endPhoneCall()
  end
end)

local DepartmentPhoneAnims = {
  ['troopers'] = { dict = 'yoinks@musclephone', anim = 'musclephone_clip' }
}

function playPhoneCallAnim()
  local dict, anim = "cellphone@", "cellphone_text_to_call"
  if currentEmployment == "police" then
    if currentDepartment and DepartmentPhoneAnims[currentDepartment] then
      dict = DepartmentPhoneAnims[currentDepartment].dict
      anim = DepartmentPhoneAnims[currentDepartment].anim
    end
  end

  Citizen.CreateThread(function()
    LoadAnimDict(dict)

    local playerPed = PlayerPedId()

    while (isDialing or activeCallId) and not isDead and not isCuffed do
      if not IsEntityPlayingAnim(playerPed, dict, anim, 3) then
        TaskPlayAnim(playerPed, dict, anim, 3.0, -1, -1, 50, 0, false, false, false)
      end

      Citizen.Wait(2000)
    end

    -- TODO: add transitions between browse and call mode rather than clearing task
    TriggerEvent("destroyPropPhone")
    -- ClearPedTasks(playerPed)
    StopAnimTask(PlayerPedId(), dict, anim, 1.0)
  end)
end

function HasValidPhoneItem()
  local phoneItems = { "mobilephone", "burnerphone" }

  for _, item in ipairs(phoneItems) do
    if exports["inventory"]:HasItem(item, { quantity = 1, quality = 1 }) then
      return true
    end
  end

  return false
end

RPC.register("phone:HasValidPhoneItem", function()
  return HasValidPhoneItem()
end)

AddEventHandler("np-ui:application-closed", function(name, data)
  if name ~= "burner" then return end
  StopAnimTask(PlayerPedId(), "cellphone@", "cellphone_text_read_base", 1.0)
  if not IsInActiveCall() then
    TriggerEvent("destroyPropPhone")
  end
end)
