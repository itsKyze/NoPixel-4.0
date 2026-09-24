local isRacing = false
local usedItemId, usedItemSlot, usedItemMetadata

AddEventHandler("mkr_racing:api:raceStarted", function(race)
  if race.shouldSendRecklessDrivingCall then
    local cid = exports["isPed"]:isPed("cid")
    if cid == race.owner then
      local ped = PlayerPedId()
      local plyPos = GetEntityCoords(ped)
      exports['dispatch']:AlertStreetRace({plyPos.x, plyPos.y, plyPos.z})
    end
  end
end)

RegisterNetEvent("np-racing:kickedFromRace")
AddEventHandler("np-racing:kickedFromRace", function(errorMessage)
  TriggerEvent("DoLongHudText", errorMessage, 2)
end)

RegisterNetEvent("np-racing:bannedFromRace")
AddEventHandler("np-racing:bannedFromRace", function(errorMessage)
  TriggerEvent("DoLongHudText", errorMessage, 2)
end)

AddEventHandler("mkr_racing:api:currentRace", function(currentRace)
  isRacing = currentRace ~= nil
  if isRacing then
    exports["np-mkr-racing"]:resetHudPosition()
  end
end)

AddEventHandler("phone:hasNotificationChanged", function(lastHasNotification, hasNotification, topOfPhone)
  if not isRacing then return end

  if hasNotification then
    exports["np-mkr-racing"]:setHudPosition({
      top = nil,
      bottom = tostring(topOfPhone + 25) .. "px",
      left = nil,
      right = '25px'
    })
  else
    exports["np-mkr-racing"]:resetHudPosition()
  end
end)

RegisterNetEvent('np-inventory:itemCheck')
AddEventHandler('np-inventory:itemCheck', function(itemId, hasItem)
  if itemId ~= "racingusb0" and itemId ~= "racingusb2" and itemId ~= "racingusb3" then return end
  local hasRaceUsbAndAlias = exports["np-racing"]:getHasRaceUsbAndAlias()

  exports['tablet']:SendAppEvent('underground', 'racing-update-phone-state', {
    hasUsbRacingCreate = hasRaceUsbAndAlias.has_usb_racing_create,
    hasUsbRacing = hasRaceUsbAndAlias.has_usb_racing,
    hasUsbPDRacing = hasRaceUsbAndAlias.has_usb_pd_racing,
    racingAlias = hasRaceUsbAndAlias.racingAlias,
  })
end)

RegisterNetEvent("np-racing:newMessage")
AddEventHandler("np-racing:newMessage", function(eventId, message, eventType)
  exports['tablet']:SendAppEvent('Underground', 'racing-new-message', {
    eventId = eventId,
    message = message,
    eventType = eventType,
    timeout = 5000,
  })
end)

RegisterNetEvent("nns_weather:client:nightTime")
AddEventHandler("nns_weather:client:nightTime", function(nightTime)
  exports['tablet']:SendAppEvent('Underground', 'racing-night-time', {
    isNightTime = nightTime
  })
end)


RegisterUICallback("np-ui:racing:getAlias", function(data, cb)
  local hasRaceUsbAndAlias = exports["np-racing"]:getHasRaceUsbAndAlias()
  cb({ data = { alias = hasRaceUsbAndAlias.racingAlias or nil }, meta = {ok = true, message = ''}})
end)
RegisterUICallback("np-ui:racing:getRacingChipInfo", function(data, cb)
  local hasRaceUsbAndAlias = exports["np-racing"]:getHasRaceUsbAndAlias()
  cb({ data = { alias = hasRaceUsbAndAlias.racingAlias or nil, hasCreateChip = hasRaceUsbAndAlias.has_usb_racing_create or false, createTrackPayload = hasRaceUsbAndAlias.createTrackPayload }, meta = {ok = true, message = ''}})
end)

RegisterUICallback('mkr_racing:createProfile', function(data, cb)
  local characterId = exports['isPed']:isPed('cid')
  local result = RPC.execute('mkr_racing:createProfile', characterId, data.alias, data.avatar)

  cb({ data = { success = result[1], message = result[2] }, meta = { ok = true, message = 'ok' } })
end)
