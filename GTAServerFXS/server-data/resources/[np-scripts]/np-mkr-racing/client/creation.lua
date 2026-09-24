local creatingTrack = false
local editingTrack = false
local radius = 4.0

local editCheckpoint = 0
local editedId = nil

local raceName = nil
local raceType = nil
local raceCategory = nil
local raceThumbnail = nil
local raceMinLaps = nil
local checkpoints = {}
local blips = {}
local object1, object2

function getRaceCreationOptions()
  local payload = {}
  payload["isCreatingTrack"] = creatingTrack
  payload["raceName"] = raceName or ''
  payload["raceType"] = raceType or 'Sprint'
  payload["raceCategory"] = raceCategory or 'underground'
  payload["raceThumbnail"] = raceThumbnail or ''
  payload["raceMinLaps"] = raceMinLaps or 1
  return payload
end

local function changeRadius(dir)
  if dir == "up" then
    radius = radius + 0.1
  elseif dir == "down" then
    radius = math.max(radius - 0.1, 1.0)
  end
end

local function changeRotation(dir)
  local veh = GetVehiclePedIsIn(PlayerPedId(), false)
  local head = GetEntityHeading(veh)
  if dir == "left" then
    SetEntityHeading(veh, head + 1.0)
  elseif dir == "right" then
    SetEntityHeading(veh, head - 1.0)
  end
end

local function updateObjects()
  if object1 == nil then
    return
  end

  local plyPed = PlayerPedId()

  local coords = GetEntityCoords(plyPed)
  local heading = GetEntityHeading(plyPed)

  local objPos1, objPos2 = getCheckpointObjectPositions(coords, radius, heading)

  SetEntityCoords(object1, objPos1, 0.0, 0.0, 0.0, false)
  SetEntityCoords(object2, objPos2, 0.0, 0.0, 0.0, false)

  SetEntityHeading(object1, heading)
  SetEntityHeading(object2, heading + 180.0)

  PlaceObjectOnGroundProperly(object1)
  PlaceObjectOnGroundProperly(object2)
end

local function spawnObjects(start)
  if object1 ~= nil then
    cleanupObjects()
  end

  local cpobject

  if start then
    cpobject = config.startObjectHash
  else
    cpobject = config.checkpointObjectHash
  end

  RequestModelAndLoad(cpobject)

  local plyPed = PlayerPedId()

  local coords = GetEntityCoords(plyPed)
  local heading = GetEntityHeading(plyPed)

  local objPos1, objPos2 = getCheckpointObjectPositions(coords, radius, heading)

  object1 = CreateObjectNoOffset(cpobject, objPos1, false, false, false)
  object2 = CreateObjectNoOffset(cpobject, objPos2, false, false, false)

  PlaceObjectOnGroundProperly(object1)
  PlaceObjectOnGroundProperly(object2)

  SetEntityCollision(object1, false, false)
  SetEntityCollision(object2, false, false)

  SetModelAsNoLongerNeeded(cpobject)
end

local function DrawText3Ds(x,y,z, text)
  local onScreen,_x,_y=World3dToScreen2d(x,y,z)
  local px,py,pz=table.unpack(GetGameplayCamCoords())
  SetTextScale(0.35, 0.35)
  SetTextFont(4)
  SetTextProportional(1)
  SetTextColour(255, 255, 255, 215)
  SetTextEntry("STRING")
  SetTextCentre(true)
  AddTextComponentString(text)
  DrawText(_x,_y)
  local factor = (string.len(text)) / 340
  DrawRect(_x,_y+0.0125, 0.015+ factor, 0.03, 41, 11, 41, 68)
end

local function addCheckpoint(editCheckpointNumber)
  editCheckpointNumber = editCheckpointNumber or #checkpoints
  local pos = GetEntityCoords(PlayerPedId())
  local heading = GetEntityHeading(PlayerPedId())

  checkpoints[editCheckpointNumber+1] = {
    pos = {
      x = tonumber(string.format("%.3f", pos.x)),
      y = tonumber(string.format("%.3f", pos.y)),
      z = tonumber(string.format("%.3f", pos.z)),
    },
    hdg = tonumber(string.format("%.3f", heading)),
    rad = tonumber(string.format("%.3f", radius))
  }

  PlaySound(-1, "3_2_1", "HUD_MINI_GAME_SOUNDSET", 0, 0, 1)

  if editCheckpointNumber ~= 1 then
    spawnObjects(false)
  end

  if (editCheckpointNumber ~= #checkpoints) then
    RemoveBlip(blips[editCheckpointNumber + 1])
  end
  local blip = AddBlipForCoord(pos)

  ShowNumberOnBlip(blip, editCheckpointNumber)
  SetBlipDisplay(blip, 8)
  SetBlipScale(blip, 1.0)
  SetBlipAsShortRange(blip, true)

  blips[editCheckpointNumber + 1] = blip

  print("Checkpoint Added")
end

local function removeCheckpoint()
  if #checkpoints == 0 then
    print("No checkpoints remain")
    return
  end

  checkpoints[#checkpoints] = nil

  PlaySound(-1, "CHECKPOINT_NORMAL", "HUD_MINI_GAME_SOUNDSET", 0, 0, 1)

  if #checkpoints < 1 then
    spawnObjects(true)
  end

  RemoveBlip(blips[#blips])
  blips[#blips] = nil

  print("Checkpoint Removed")
end

function clearCreationBlips()
  for i=1, #blips do
    RemoveBlip(blips[i])
  end
  blips = {}
end

function getClosestCheckpoint()
  local pos = GetEntityCoords(PlayerPedId())
  local closest = 1
  local closestDist = #(vector3(pos.x, pos.y, pos.z) - vector3(checkpoints[1].pos.x, checkpoints[1].pos.y, checkpoints[1].pos.z))
  for i=2, #checkpoints do
    local dist = #(vector3(pos.x, pos.y, pos.z) - vector3(checkpoints[i].pos.x, checkpoints[i].pos.y, checkpoints[i].pos.z))
    if dist < closestDist then
      closest = i
      closestDist = dist
    end
  end
  return closest
end

function loadRaceData(createTrackId)
  local _race = races[createTrackId]
  checkpoints = RPC.execute("mkr_racing:getRaceCheckpoints", createTrackId)
  table.insert(checkpoints, 1, _race.start)

  raceName = _race.name
  raceType = _race.type
  raceCategory = _race.category
  raceThumbnail = _race.thumbnail
  raceMinLaps = _race.minLaps

  for i=1, #checkpoints do
    local pos = vector3(checkpoints[i].pos.x, checkpoints[i].pos.y, checkpoints[i].pos.z)
    local blip = AddBlipForCoord(pos)

    ShowNumberOnBlip(blip, i - 1)
    SetBlipDisplay(blip, 8)
    SetBlipScale(blip, 1.0)
    SetBlipAsShortRange(blip, true)

    blips[i] = blip
  end
end

function startRaceCreation(options)
  options = options or {}
  if not options.createTrackId then
    raceName = options.raceName
    if raceName == nil then raceName = KBInput("Race Name", "", 30) end
    while raceName ~= nil and options.raceName == nil and RPC.execute("mkr_racing:isRaceNameTaken", raceName) == true do
      raceName = KBInput("Name already taken, try again", "", 30)
    end
    if raceName == nil then return end

    raceType = options.raceType
    if raceType == nil or (raceType ~= "Sprint" and raceType ~= "Lap" and raceType ~= "PointToPoint") then
      ::typecheck::
      racetype = KBInput("Is this a Sprint race? (y/n)", "", 1)

      if racetype ~= "y" and racetype ~= "n" and racetype ~= nil then
        goto typecheck
      end
      if racetype == nil then return end

      if racetype == "y" then
        raceType = "Sprint"
      else
        raceType = "Lap"
      end
    end

    raceCategory = options.raceCategory
    if raceCategory == nil then raceCategory = KBInput("Race Category", "", 30) end
    if raceCategory == nil then return end

    raceThumbnail = options.raceThumbnail
    if raceThumbnail == nil then raceThumbnail = KBInput("Thumbnail URL", "", 30) end
    if raceThumbnail == nil then return end

    raceMinLaps = options.raceMinLaps
    if raceMinLaps == nil then raceMinLaps = KBInput("Min Laps", "", 30) end
    if raceMinLaps == nil then return end
  else
    editedId = options.createTrackId
    loadRaceData(options.createTrackId)
  end

  creatingTrack = true
  if not options.createTrackId then
    spawnObjects(true)
  else
    spawnObjects(false)
  end
  CreateThread(function()
    while creatingTrack do
      if IsControlPressed(0, 172) then
        changeRadius("up")
      end
      if IsControlPressed(0, 173) then
        changeRadius("down")
      end
      if IsControlPressed(0, 174) then
        if GetEntitySpeed(GetVehiclePedIsIn(PlayerPedId(), false)) <= 0 then
          changeRotation("left")
        end
      end
      if IsControlPressed(0, 175) then
        if GetEntitySpeed(GetVehiclePedIsIn(PlayerPedId(), false)) <= 0 then
          changeRotation("right")
        end
      end

      local ctrl = IsControlPressed(0, 36)
      local shift = IsControlPressed(0, 21)
      local e = IsControlJustPressed(0, 51)
      local backspace = IsControlJustPressed(0, 177)

      if not editingTrack then
        if not shift and not ctrl and e then
          addCheckpoint()
        end
        if shift and e then
          removeCheckpoint()
        end
      end
      if ctrl and e then
        if editingTrack then
          addCheckpoint(editCheckpointNumber)
          editingTrack = false
          editCheckpointNumber = 0
        else
          editingTrack = true
          editCheckpointNumber = getClosestCheckpoint() - 1
        end
      end
      if backspace and editingTrack then
        editingTrack = false
        editCheckpointNumber = 0
      end
      Wait(0)
    end
  end)

  CreateThread(function()
    local ped = PlayerPedId()
    while creatingTrack do
      local pos = GetEntityCoords(ped)
      local rot = GetEntityHeading(PlayerPedId())

      DrawMarker(26, pos.x, pos.y, pos.z + 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, rot, radius * 2, radius * 2, 5.0, 255, 128, 0, 25, false, false, 2, nil, nil, false)
      updateObjects()
      Wait(0)
    end
  end)

  CreateThread(function()
    local ped = PlayerPedId()
    while creatingTrack do
      local pos = GetEntityCoords(ped)
      local instructions = ""
      if editingTrack then
        instructions = "Editing #" .. tostring(editCheckpointNumber) .. " | ⬆ Radius ⬇ | ⬅ Rotation ➡ | [Ctrl+E] Confirm Edit | [Backspace] Cancel Edit"
      else
        instructions = "#" .. tostring(#checkpoints) .. " | [E] Add | [Shift+E] Remove | ⬆ Radius ⬇ | ⬅ Rotation ➡ | [Ctrl+E] Edit Checkpoint"
      end
      DrawText3Ds(pos.x, pos.y, pos.z + 1.5, instructions)
      Wait(0)
    end
  end)
end

function finishRaceCreation()
  if not creatingTrack then
    print("You are not creating a race")
    return false, "You are not creating a race"
  end

  TriggerServerEvent("mkr_racing:recieveCreateData", raceName, raceType, raceCategory, raceThumbnail, raceMinLaps, checkpoints, editedId)

  cleanupCreation()
  return true, "Created Race Track"
end

function cancelRaceCreation()
  if not creatingTrack then
    print("You are not creating a race")
    return false, "You are not creating a race"
  end

  cleanupCreation()
  return true, "Cancelled creating a race"
end

function cleanupObjects()
  DeleteObject(object1)
  DeleteObject(object2)
  object1, object2 = nil, nil
end

function cleanupCreation()
  creatingTrack = false
  editingTrack = false
  radius = 4.0
  raceName = nil
  raceType = nil
  raceThumbnail = nil
  editedId = nil
  editCheckpointNumber = 0
  checkpoints = {}
  cleanupObjects()
  clearCreationBlips()
end

RegisterNetEvent("mkr_racing:cmd:racecreate")
AddEventHandler("mkr_racing:cmd:racecreate", function(options)
  if GetVehiclePedIsIn(PlayerPedId(), false) ~= 0 then
    startRaceCreation(options)
  end
end)

RegisterNetEvent("mkr_racing:cmd:racecreatedone")
AddEventHandler("mkr_racing:cmd:racecreatedone", function()
  finishRaceCreation()
end)

RegisterNetEvent("mkr_racing:cmd:racecreatecancel")
AddEventHandler("mkr_racing:cmd:racecreatecancel", function()
  cancelRaceCreation()
end)

AddEventHandler("onResourceStop", function(resource)
  if resource ~= GetCurrentResourceName() then
    return
  end

  cleanupCreation()
end)
