local currentJob = nil

RegisterNetEvent("jobmanager:playerBecameJob")
AddEventHandler("jobmanager:playerBecameJob", function(job, notify)
  currentJob = job
end)

function getHasRaceUsbAndAlias()
  local characterId = exports["isPed"]:isPed("cid")
  local racingCreateUsbItem = RPC.execute("mkr_racing:getCreateChip")
  local racingUsbItem = RPC.execute('mkr_racing:getAlias')
  local pdRacingUsbItem = --[[ exports["np-inventory"]:GetInfoForFirstItemOfName("racingusb3") ]] nil
  local has_usb_racing = racingUsbItem[1]
  local has_usb_racing_create = racingCreateUsbItem[1]
  local has_usb_pd_racing = pdRacingUsbItem ~= nil and currentJob == "police"

  -- has_usb_racing_create = has_usb_racing_create and characterId == usbCreateMetadata.characterId
  local racingAlias = has_usb_racing and racingUsbItem[2] or nil
  local track_create_id = has_usb_racing_create and racingCreateUsbItem[2] or ''
  local createTrackPayload = exports["np-mkr-racing"]:createTrackPayload()
  createTrackPayload["createTrackId"] = track_create_id

  -- return { has_usb_racing = true, has_usb_racing_create = true, has_usb_pd_racing = false, racingAlias = "Test" }
  return { has_usb_racing = has_usb_racing, has_usb_racing_create = has_usb_racing_create, has_usb_pd_racing = has_usb_pd_racing, racingAlias = racingAlias, createTrackPayload = createTrackPayload }
end
exports("getHasRaceUsbAndAlias", getHasRaceUsbAndAlias)

function canJoinOrStartRace(expectedVehicleClass, eventId)
  local payload = RPC.execute('mkr_racing:checkVehicleClass', eventId)
  if payload[0] then
    return true
  end
  return payload[1] and payload[1] or 'Error'
end
exports("canJoinOrStartRace", canJoinOrStartRace)
