RegisterNetEvent("np-gov:resetLicensesCache")
AddEventHandler("np-gov:resetLicensesCache", function(pCharacterId)
  resetLicensesCache(pCharacterId)
end)

NPX.Events.on("np-gov:npc:purchaseDriversLicense", function (pData)
  NPX.Procedures.execute("np-gov:purchaseDriversLicense", pData.type)
end)

RegisterNetEvent("np-gov:newStateAnnouncement", function()
  local context = {}
  for _, aType in pairs(AnnouncementTypes) do
    context[#context + 1] = { title = aType.label, description = "[" .. aType.label .. "]" .. " <text>", icon = aType.icon, action = "np-gov:ui:stateAnnouncement", key = aType.name }
  end

  exports["np-ui"]:showContextMenu(context)
end)

RegisterUICallback("np-gov:ui:stateAnnouncement", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = "done" } })
  Wait(0)

  local prompt = exports["np-ui"]:OpenInputMenu({ { name = "text", _type = "textarea", label = "Text", icon = "pencil-alt", maxLength = 500, } }, function(values)
    return values and values.text and #values.text > 0
  end)

  if not prompt then return end

  NPX.Procedures.execute("np-gov:stateAnnouncement", prompt.text, data.key)
end)

RegisterNetEvent("gov:stateEmergency", function(pMessage)
  local cid = exports["isPed"]:isPed('cid')
  if not cid then return end

  local hasPhoneEquipped = exports["inventory"]:HasItem('mobilephone', { inventoryId = "body-" .. cid })
  if not hasPhoneEquipped then return end

  exports['np-ui']:SendUIMessage({
    source = 'np-nui', 
    app = 'phone',
    data = {
        action = 'notification',
        target_app = 'home-screen',
        title = 'STATE OF EMERGENCY',
        body = pMessage,
        show_even_if_app_active = true,
        icon = {
            background = '#b82f25',
            color = '#fff',
            name = 'exclamation-triangle',
        },
        timeout = 30000,
    },
  })

  TriggerEvent('InteractSound_CL:PlayOnOne', 'phone_vibrate', 0.3);
end)
