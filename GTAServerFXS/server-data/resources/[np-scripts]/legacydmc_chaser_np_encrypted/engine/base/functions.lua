function printDebug(...)
  if not (debug or showdebuglogs) then return end
  local args = {...}
  local logType = nil
  if type(args[#args]) == "string" then
    logType = table.remove(args)
  end

  if logType == "load" then
    if loaddebuglog then print("[" .. logType .. "] " .. table.unpack(args)) end
  elseif logType == "gearshift" then
    if gearshiftdebuglog then print("[" .. logType .. "] " .. table.unpack(args)) end
  elseif logType == "tools" then
    if toolsdebuglog then print("[" .. logType .. "] " .. table.unpack(args)) end
  elseif logType == "drift" then
    if driftdebuglog then print("[" .. logType .. "] " .. table.unpack(args)) end
  elseif logType == "assists" then
    if assistsdebuglog then print("[" .. logType .. "] " .. table.unpack(args)) end
  elseif logType == "audio" then
    if audiodebuglog then print("[" .. logType .. "] " .. table.unpack(args)) end
  elseif logType == "camera" then
    if cameradebuglog then print("[" .. logType .. "] " .. table.unpack(args)) end
  end
end

function prepareTorqueCurve(curve)
  table.sort(curve, function(a, b) return a.rpm < b.rpm end)
  local minRPM = curve[1].rpm
  local maxRPM = curve[1].rpm
  local maxTorqueVal = 0
  for _, entry in ipairs(curve) do
    if entry.torque == 0 then entry.torque = 1 end
    if maxTorqueVal < entry.torque then maxTorqueVal = entry.torque end
    if maxRPM < entry.rpm then maxRPM = entry.rpm end
    if minRPM > entry.rpm then minRPM = entry.rpm end
  end
  return curve, maxTorqueVal, maxRPM, minRPM
end

function calcTorque(curve, divisor, targetRpm)
  divisor = (divisor and divisor ~= 0) and divisor or 1.0
  if not targetRpm then targetRpm = 1000.0 end
  if not curve or type(curve) ~= "table" or #curve == 0 then
    return 1.0
  end
  local prev = curve[1] or { rpm = 0, torque = divisor }
  for _, entry in ipairs(curve) do
    if entry.rpm and targetRpm <= entry.rpm then
      if prev.rpm == entry.rpm then
        return (entry.torque or divisor) / divisor
      else
        local rpmDiff = entry.rpm - prev.rpm
        if rpmDiff == 0 then rpmDiff = 1 end
        local t = (targetRpm - prev.rpm) / rpmDiff
        local torqueVal = prev.torque + t * ((entry.torque or prev.torque) - prev.torque)
        return torqueVal / divisor
      end
    end
    prev = entry
  end
  return ((prev and prev.torque) or divisor) / divisor
end

function DrawTextOnScreen(text, x, y)
  SetTextFont(0)
  SetTextProportional(1)
  SetTextScale(0.5, 0.5)
  SetTextColour(255, 255, 255, 255)
  SetTextDropshadow(0, 0, 0, 0, 255)
  SetTextEdge(1, 0, 0, 0, 255)
  SetTextDropShadow()
  SetTextOutline()
  SetTextEntry("STRING")
  AddTextComponentString(text)
  DrawText(x, y)
end

function map(value, inMin, inMax, outMin, outMax)
  return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
end

function drawBoneMarker(veh, boneName, markerColor, lineColor)
  if not DoesEntityExist(veh) then
    print("Vehicle does not exist.")
    return
  end

  local boneIndex = GetEntityBoneIndexByName(veh, boneName)
  if boneIndex == -1 then
    if boneName == "windscreen_f" then
      boneIndex = GetEntityBoneIndexByName(veh, "windscreen")
      if boneIndex == -1 then
        print("Bone does not exist on the vehicle:", boneName)
        return
      end
    elseif boneName == "windscreen_r" then
      boneIndex = GetEntityBoneIndexByName(veh, "window_lr")
      if boneIndex == -1 then
        boneIndex = GetEntityBoneIndexByName(veh, "window")
        if boneIndex == -1 then
          print("Bone does not exist on the vehicle:", boneName)
          return
        end
      end
    else
      print("Bone does not exist on the vehicle:", boneName)
      return
    end
  end

  local bonePos = GetWorldPositionOfEntityBone(veh, boneIndex)
  DrawMarker(28, bonePos.x, bonePos.y, bonePos.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.25, 0.25, 0.25,
    markerColor.r, markerColor.g, markerColor.b, 100, false, true, 2, false, nil, nil, false)

  local upPoint = vector3(bonePos.x, bonePos.y, bonePos.z + 500.0)
  local downPoint = vector3(bonePos.x, bonePos.y, bonePos.z - 500.0)

  DrawLine(bonePos.x, bonePos.y, bonePos.z, upPoint.x, upPoint.y, upPoint.z, lineColor.r, lineColor.g, lineColor.b, 255)
  DrawLine(bonePos.x, bonePos.y, bonePos.z, downPoint.x, downPoint.y, downPoint.z, lineColor.r, lineColor.g, lineColor.b, 255)
end

function calculateAverageTorqueIncrease(compressorSize, peakDecayBoost, turboDecayPoint, maxTrBoostPMax, maxTrBoostPMin, maxTrBoostPMinPrct, maxTrBoostPMaxPrct, boostStartPoint)
  local steps = 500
  local stepSize = (1 - boostStartPoint) / steps
  local total = 0
  for i = 0, steps, 1 do
    local rpmPoint = boostStartPoint + stepSize * i
    local curveValue = calculateturbocurve(rpmPoint, compressorSize, peakDecayBoost, turboDecayPoint, maxTrBoostPMax, maxTrBoostPMin, maxTrBoostPMinPrct, maxTrBoostPMaxPrct, boostStartPoint)
    if i == 0 or i == steps then
      total = total + curveValue / 2
    else
      total = total + curveValue
    end
  end
  local average = total * stepSize
  average = average / (1 - boostStartPoint)
  return average
end

function drawnlenghtline(veh)
  local seatBoneIndex = GetEntityBoneIndexByName(veh, "seat_dside_f")
  local seatWorldPos = GetWorldPositionOfEntityBone(veh, seatBoneIndex)
  local seatOffset = GetOffsetFromEntityGivenWorldCoords(veh, seatWorldPos.x, seatWorldPos.y, seatWorldPos.z)

  local headlightBoneIndex = GetEntityBoneIndexByName(veh, "headlight_l")
  local headlightWorldPos = GetWorldPositionOfEntityBone(veh, headlightBoneIndex)
  local headlightOffset = GetOffsetFromEntityGivenWorldCoords(veh, headlightWorldPos.x, headlightWorldPos.y, headlightWorldPos.z)

  local taillightBoneIndex = GetEntityBoneIndexByName(veh, "taillight_l")
  local taillightWorldPos = GetWorldPositionOfEntityBone(veh, taillightBoneIndex)
  local taillightOffset = GetOffsetFromEntityGivenWorldCoords(veh, taillightWorldPos.x, taillightWorldPos.y, taillightWorldPos.z)

  local closestOffset = headlightOffset
  local adjustedSeatOffset = vector3(seatOffset.x, seatOffset.y - 0.55, seatOffset.z)
  local lineLength = 10.0

  if math.abs(taillightOffset.y - adjustedSeatOffset.y) < math.abs(headlightOffset.y - adjustedSeatOffset.y) then
    closestOffset = taillightOffset
  end

  local startWorld = GetOffsetFromEntityInWorldCoords(veh, adjustedSeatOffset.x, adjustedSeatOffset.y, adjustedSeatOffset.z)
  local endWorld = GetOffsetFromEntityInWorldCoords(veh, closestOffset.x, closestOffset.y, closestOffset.z)

  DrawLine(startWorld.x, startWorld.y, startWorld.z, startWorld.x, startWorld.y, startWorld.z + lineLength, 0, 255, 0, 255)
  DrawLine(startWorld.x, startWorld.y, startWorld.z, startWorld.x, startWorld.y, startWorld.z - lineLength, 0, 255, 0, 255)
  DrawLine(startWorld.x, startWorld.y, startWorld.z + 2.5, endWorld.x, endWorld.y, endWorld.z + 2.5, 255, 0, 0, 255)
end

function viewenginebay(veh)
  if vehclass ~= 8 then
    drawBoneMarker(veh, "engine", {r = 0, g = 255, b = 0}, {r = 0, g = 255, b = 0})
    drawBoneMarker(veh, "headlight_l", {r = 255, g = 0, b = 0}, {r = 255, g = 0, b = 0})
    drawBoneMarker(veh, "windscreen_f", {r = 255, g = 255, b = 0}, {r = 255, g = 255, b = 0})
    drawBoneMarker(veh, "taillight_l", {r = 0, g = 0, b = 255}, {r = 0, g = 0, b = 255})
    drawBoneMarker(veh, "seat_dside_f", {r = 0, g = 255, b = 255}, {r = 0, g = 255, b = 255})
    drawnlenghtline(veh)
  else
    drawBoneMarker(veh, "engine", {r = 0, g = 255, b = 0}, {r = 0, g = 255, b = 0})
    drawBoneMarker(veh, "handlebars", {r = 255, g = 0, b = 0}, {r = 255, g = 0, b = 0})
    drawBoneMarker(veh, "seat_f", {r = 0, g = 0, b = 255}, {r = 0, g = 0, b = 255})
  end
end

function lerp(a, b, t)
  return a + (b - a) * t
end

function tobool(value)
  if type(value) == "boolean" then
    return value
  elseif value == "true" then
    return true
  elseif value == "false" then
    return false
  else
    return nil
  end
end

function indexOf(tbl, value)
  for k, v in pairs(tbl) do
    if v == value then return k end
  end
  return nil
end

function calcgacc(value)
  return (27.77777777777778 / value) / 9.81
end

function GetDragCoeffGs(topSpeedArg, dragCoeffArg)
  if usenewphysics then
    return dragCoeffArg * 0.9 * 10
  else
    return (math.floor(math.exp(topSpeedArg * (dragCoeffArg * 5.0E-4)) * 1000 + 0.5) / 1000) ^ 2
  end
end

function setMaxSpeed(maxSpeedArg, force)
  if not force then force = false end
  local state = Entity(vehicle).state
  if not force and state then
    if state.cruiseControl then
      SetEntityMaxSpeed(vehicle, state.cruiseControl)
    end
  else
    SetEntityMaxSpeed(vehicle, maxSpeedArg)
  end
end

function inverse_rule_of_three(a, b, c)
  return a * b / c
end

function get_base_acceleration(baseVal, gearCount, gearRatios)
  local sum = 0
  for i = 2, gearCount + 1, 1 do
    sum = sum + gearRatios[i]
  end
  return (baseVal * 3.333 * gearCount) / sum
end

function percentage_difference(a, b)
  return (b - a) / a
end

function engineweightrelation(baseGAcc, engineEfficiency, avgAcc, currentWeightArg, ogWeight, gearCount, gearRatios)
  local avgAccCalc = chaser_getavgacc(baseGAcc, gearCount, gearRatios)
  local efficiency = chaser_getefficiency(avgAccCalc, currentWeightArg)
  local ratio = inverse_rule_of_three(ogWeight, engineEfficiency, currentWeightArg)
  local pctDiff = percentage_difference(engineEfficiency, efficiency)
  ratio = ratio + ratio * pctDiff
  local weightedRatio = ratio * currentWeightArg
  return get_base_acceleration(weightedRatio, gearCount, gearRatios)
end

function calculatetransmissiongearing()
  topspeedgeartable = {}
  calculatedtospeedkmhtable = {}
  printDebug("Topspeed: " .. cartopspeed, "load")

  finaldriveadjustable = cartopspeed * finaldriveadjustmentprct
  finaldriveforcalc = cartopspeed

  if carhastransmission >= 0 then
    if currentvehiclename == "" then
      gearammount = GetVehicleHandlingInt(vehicle, "CHandlingData", "nInitialDriveGears") + 1
    else
      gearammount = vehicledata[currentvehiclename].gearboxammount + 1
    end
  end

  if gearammount > 9 then gearammount = 9 end
  if desiredgear > gearammount then desiredgear = gearammount end
  if desiredgear < 0 then downshift() end

  for i = 1, gearammount + 1, 1 do
    local ratioTable = _G["gtagratiotable" .. gearammount]
    calculatedtospeedkmhtable[i] = (ratioTable[i] * finaldriveadjustable) / gearratiotable[i]
    topspeedgeartable[i] = math.floor((calculatedtospeedkmhtable[i] * 0.9) / ratioTable[i])
  end

  hastoapplymt = true
  desiredgear = 1
end

function loadvehicleinfo(foundInDB)
  printDebug("Loaded Vehicle Info", "load")

  local matchedName = nil
  for name, data in pairs(globalvehdata) do
    if GetHashKey(name) == GetEntityModel(vehicle) then
      matchedName = name
    end
  end
  local matchedData = globalvehdata[matchedName]

  if matchedName == nil or matchedData == nil then
    cartopspeed = 200
    hashilodiff = false
    shouldsimdct = false
    thiscarhasnitrous = false
    nitroustimer = 0
  else
    cartopspeed = matchedData.safetopspeed
    hashilodiff = matchedData.hashilorangemode
    shouldsimdct = matchedData.hasdct
    thiscarhasnitrous = matchedData.thiscarhasnitrous
    nitroustimer = matchedData.nitroustimer
  end

  handlingpower = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveForce")
  pastvehicle = vehicle
  clutchengaged = true
  handlingmaxspeed = cartopspeed

  local gears = GetVehicleHandlingInt(vehicle, "CHandlingData", "nInitialDriveGears")
  local defaultGears = gears
  if not (gears > 0) or not gears then
    defaultGears = 6
  end
  handlinggearammount = defaultGears

  handlingpeaktraction = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMax")
  handlingmintraction = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMin")
  handlinglatcurve = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveLateral")
  layouthash = GetVehicleLayoutHash(vehicle)
  wheellock = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fSteeringLock")
  ogfdinertia = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fDriveInertia")
  ogtractionloss = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fLowSpeedTractionLossMult")
  carhastransmission = GetVehicleMod(vehicle, 13)
  vehclass = GetVehicleClass(vehicle)
  vehplate = GetVehicleNumberPlateText(vehicle)
  vehmodel = GetEntityModel(GetVehiclePedIsIn(PlayerPedId()))
  vehiclelayout = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fDriveBiasFront")
  stocksteeringlock = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fSteeringLock")
  handlingsteeringlock = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fSteeringLock") / 6
  frontengbrakedist = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fBrakeBiasFront")
  engbrakeforce = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fBrakeForce")
  wheelbase = getvehiclewheelbase(vehicle)
  centerofmass = GetVehicleHandlingVector(vehicle, "CHandlingData", "vecCentreOfMassOffset")
  frontrollcenter = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fRollCentreHeightFront")
  rearrollcenter = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fRollCentreHeightRear")

  if foundInDB then
    printDebug("Vehicle Info located in DB", "load")
    gearammount = vehicledata[entryname].gearboxammount
    cartopspeed = vehicledata[entryname].topspeed
    brakecapacity = vehicledata[entryname].brakecapacity
    brakedistribution = vehicledata[entryname].brakedistribution
    lstractionlossmulti = vehicledata[entryname].lstractionlossmulti
    tracitionlossmulti = vehicledata[entryname].tracitionlossmulti
    arbstrenght = vehicledata[entryname].arbstrenght
    arbbiasfront = vehicledata[entryname].arbbiasfront
    suspensionraise = vehicledata[entryname].suspensionraise
    suspensionforce = vehicledata[entryname].suspensionforce
    suspensionrebounddamping = vehicledata[entryname].suspensionrebounddamping
    suspensioncompressiondamping = vehicledata[entryname].suspensioncompressiondamping

    if vehicledata[entryname].ismotorcycle then
      vehclass = 8
    end

    SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDragCoeff", GetDragCoeffGs(cartopspeed / 3.6, dragcoeff))
    calculatedragcoeff = GetDragCoeffGs(cartopspeed / 3.6, dragcoeff)
  else
    printDebug("Vehicle Info not located in DB", "load")
    gearammount = handlinggearammount
  end
end

function loadengine(ogWeight, currentWeightArg, baseGAcc, storeStock, debugFlag)
  if currentengine ~= "stock" then return end

  if not iselectric then
    local avgAcc = chaser_getavgacc(baseGAcc, gearammount, gearratiotable)
    local efficiency = chaser_getefficiency(avgAcc, currentWeightArg)
    local calcAcc = engineweightrelation(baseGAcc, efficiency, avgAcc, currentWeightArg, ogWeight, gearammount, gearratiotable)

    baseacc = calcAcc / 3.333
    currentacc = calcAcc
    if storeStock then stockacc = calcAcc end

    if debugFlag then
      printDebug("Vehicle Weights: " .. " OG: " .. ogWeight .. " Current: " .. currentWeightArg, "load")
      printDebug("Base G's: (Considering Weight)" .. currentacc, "load")
      printDebug("Base G's: (Not Considering Weight)" .. baseGAcc, "load")
    end
  else
    baseacc = baseGAcc / 3.333
    currentacc = baseGAcc
  end
end

function starthud(isElectric)
  SendNUIMessage({action = "startspeedo", maxrpm = maxRPM})
  SendNUIMessage({action = "show"})

  if tobool(tractioncontrol) == true then
    if isinacar then SendNUIMessage({action = "showassist", assist = "tcs"}) end
  else
    if isinacar then SendNUIMessage({action = "hideassist", assist = "tcs"}) end
  end

  if tobool(stabilitycontrol) == true then
    if isinacar then SendNUIMessage({action = "showassist", assist = "esc"}) end
  else
    if isinacar then SendNUIMessage({action = "hideassist", assist = "esc"}) end
  end

  if tobool(thiscarhasnitrous) == true then
    if isinacar then SendNUIMessage({action = "shownitrous"}) end
  else
    if isinacar then SendNUIMessage({action = "hidenitrous"}) end
  end

  if iselectric then
    speedtype = showhudinmph and "mph" or "kmh"
    SendNUIMessage({
      action = "shift",
      currentgear = 1,
      transmissiontype = 3,
      speedtype = speedtype,
      differential = false
    })
  end
end

-- extendGearRatios: dense gear-extension algorithm, faithfully translated
-- from the original register-based bytecode. Recommend testing thoroughly.
function extendGearRatios(gearRatios, startIndex, gearAmount, topSpeedArg)
  local newRatios = {}
  local startPlus1 = startIndex + 1
  local gearAmountPlus1 = gearAmount + 1
  local baseRatio = gearRatios[startPlus1]
  local adjustedTopSpeed = topSpeedArg
  local finalDrive = 0.0
  local currentSpeed = 0
  local isMotorcycleStyle = false

  if adjustedTopSpeed >= 275.33 then adjustedTopSpeed = 303 end

  if startPlus1 == gearAmountPlus1 then
    chaser_settransmission(transmissionmode, gearRatios, finaldriveadjustmentprct, 0.0135, gearAmountPlus1)
    return
  end

  for i = 1, 10, 1 do
    if startPlus1 >= i then
      newRatios[i] = gearRatios[i]
    else
      newRatios[i] = baseRatio
    end
  end

  local gearDiff = gearAmountPlus1 - startPlus1
  if gearDiff >= 0 then
    for i = 1, gearDiff, 1 do
      local idx = startPlus1 + i
      newRatios[idx] = baseRatio * 1 - 0.1 * i
    end
    while currentSpeed < adjustedTopSpeed do
      finaldriveadjustable = adjustedTopSpeed * finalDrive
      local ratioTable = _G["gtagratiotable" .. gearAmountPlus1]
      local calcTopSpeed = (ratioTable[startPlus1] * finaldriveadjustable) / newRatios[gearAmountPlus1]
      currentSpeed = (calcTopSpeed * 0.9) / ratioTable[startPlus1]
      finalDrive = finalDrive + 0.001
    end
  else
    local secondRatio = newRatios[2]
    local baseVal = baseRatio
    if startIndex <= 4 then
      baseVal = round(baseVal * 1.33, 3)
      isMotorcycleStyle = true
    end
    local lastMinus2 = gearAmountPlus1 - 2
    local exponentBase = secondRatio / baseVal
    local maxVal = math.max(2, lastMinus2)
    local exponent = 1 / maxVal
    exponentBase = exponentBase ^ exponent
    for i = 3, startPlus1 - 1, 1 do
      newRatios[i] = round(newRatios[i - 1] / exponentBase, 3)
    end
    newRatios[startPlus1] = baseVal
    while adjustedTopSpeed > currentSpeed do
      finaldriveadjustable = adjustedTopSpeed * finalDrive
      local ratioTable = _G["gtagratiotable" .. gearAmountPlus1]
      local calcTopSpeed = (ratioTable[startPlus1] * finaldriveadjustable) / newRatios[startPlus1]
      currentSpeed = (calcTopSpeed * 0.9) / ratioTable[startPlus1]
      finalDrive = finalDrive + 0.001
    end
  end

  for i, _ in ipairs(newRatios) do
    if startPlus1 >= i then
      local ratioTable = _G["gtagratiotable" .. gearAmountPlus1]
      local speedRaw = (ratioTable[i] * (adjustedTopSpeed * finalDrive)) / newRatios[i]
      local flooredSpeed = math.floor((speedRaw * 0.9) / ratioTable[i])
      if isMotorcycleStyle then
        if flooredSpeed > 200 then
          local excess = flooredSpeed - 200
          local factor = 1 - (excess / adjustedTopSpeed)
          newRatios[i] = round(newRatios[i] / factor, 3)
          if i ~= startPlus1 then
            newRatios[i] = round((newRatios[i - 1] + (newRatios[i + 1] / factor)) / 2.125, 3)
          end
        end
      else
        if flooredSpeed > 303 and i == startPlus1 then
          local factor = 303 / flooredSpeed
          for j = 2, startPlus1, 1 do
            newRatios[j] = math.max(0.1, round(newRatios[j] / factor, 3))
          end
        end
        if i > 2 then
          local prevRaw = (ratioTable[i - 1] * speedRaw) / newRatios[i - 1]
          local prevFloored = math.floor((prevRaw * 0.9) / ratioTable[i - 1])
          if prevFloored == flooredSpeed then
            newRatios[i - 1] = round((newRatios[i - 2] + newRatios[i]) / 2, 3)
          end
        end
      end
    end
  end

  for i, _ in ipairs(newRatios) do
    if startPlus1 >= i then
      local ratioTable = _G["gtagratiotable" .. gearAmountPlus1]
      local speedRaw = (ratioTable[i] * (adjustedTopSpeed * finalDrive)) / newRatios[i]
      local flooredSpeed = math.floor((speedRaw * 0.9) / ratioTable[i])
      local threshold = isMotorcycleStyle and 200 or 303
      if newRatios[i] > newRatios[i + 1] and startPlus1 > i and flooredSpeed > threshold then
        local nextRaw = (ratioTable[i + 1] * (adjustedTopSpeed * finalDrive)) / newRatios[i + 1]
        local nextFloored = math.floor((nextRaw * 0.9) / ratioTable[i + 1])
        local excess = nextFloored - 200
        local factor = 1 - (excess / adjustedTopSpeed)
        newRatios[i] = round((newRatios[i - 1] + (newRatios[i + 1] / factor)) / 2, 3)
      end
    end
  end

  print("Extended Gear Ratios:")
  for i, ratioValue in ipairs(newRatios) do
    if (i - 1) < (startIndex + 1) then
      print(string.format("Gear %d: %.3f", i - 1, ratioValue))
    end
  end
  print("Final Drive:")
  print(finalDrive)

  cartopspeed = adjustedTopSpeed
  chaser_settransmission(transmissionmode, newRatios, finalDrive, 0.2, startIndex)
end

function coilApplication(veh, stage)
  print("trac multi Package: " .. tracitionlossmulti)
  print("ls trac Package: " .. lstractionlossmulti)
  tracitionlossmulti = tracitionlossmulti - (stage * 0.01)
  lstractionlossmulti = lstractionlossmulti - (stage * 0.01)
  if tracitionlossmulti < 0 then tracitionlossmulti = 0.01 end
  if lstractionlossmulti < 0 then lstractionlossmulti = 0.01 end
  print("trac multi Package: " .. tracitionlossmulti)
  print("ls trac Package: " .. lstractionlossmulti)
end

function swayApplication(veh, stage)
  print("arb Package: " .. arbstrenght)
  arbstrenght = arbstrenght + (stage / 5)
  print("arb Package: " .. arbstrenght)
end

function brakingApplication(veh, stage)
  print("brake power: " .. brakecapacity)
  brakecapacity = brakecapacity + (stage / 5)
  print("brake power: " .. brakecapacity)
end

function dampenerApplication(veh, stage)
  local factor = stage * 0.02
  print("dampn Package: " .. suspensionrebounddamping, suspensioncompressiondamping)
  suspensionrebounddamping = suspensionrebounddamping - (suspensionrebounddamping * factor)
  suspensioncompressiondamping = suspensioncompressiondamping - (suspensioncompressiondamping * factor)
  print("dampn Package: " .. suspensionrebounddamping, suspensioncompressiondamping)
end

function weightApplication(veh, stage)
  print("Weight Package: " .. stage)
  local target = originalvehicleweight - (originalvehicleweight * (stage * 0.02))
  print("Weight Target: " .. target)
  return target
end

local CLUTCH_TIMER_SEQUENTIAL = 0.35
local CLUTCH_TIMER_AUTO = 0.5
local CLUTCH_TIMER_MANUAL = 0.25
local CLUTCH_TIMER_BASE = 0.125

function clutchApplication(veh, stage)
  print("clutch", clutchTimer)
  local timer = CLUTCH_TIMER_BASE
  if transmissionmode == 1 then
    timer = timer + (CLUTCH_TIMER_AUTO / stage)
  elseif transmissionmode == 2 then
    timer = timer + (CLUTCH_TIMER_MANUAL / stage)
  else
    timer = timer + (CLUTCH_TIMER_SEQUENTIAL / stage)
  end
  clutchTimer = timer
  print("clutch", clutchTimer)
end

function gearboxApplication()
  print("Gearbox Application", gearammount, transmissionmode)
  if transmissionmode == 3 then
    transmissionmode = 2
    extendGearRatios(gearratiotable, 4, gearammount, cartopspeed)
  elseif transmissionmode == 4 then
    transmissionmode = 2
    extendGearRatios(gearratiotable, 6, gearammount, cartopspeed)
  elseif transmissionmode == 5 then
    transmissionmode = 0
    extendGearRatios(gearratiotable, 8, gearammount, cartopspeed)
  end
  print("Gearbox Application", gearammount, transmissionmode)
end

function loadcartune(veh)
  local savedTransmissionMode = exports["np-vehicles"]:GetVehicleMetadata(veh, "transmissionmode")
  local savedFinalDrive = exports["np-vehicles"]:GetVehicleMetadata(veh, "finaldrive")
  local savedGearRatios = exports["np-vehicles"]:GetVehicleMetadata(veh, "gearratios")
  local savedWeight = exports["np-vehicles"]:GetVehicleMetadata(veh, "weight")
  local savedEngine = exports["np-vehicles"]:GetVehicleMetadata(veh, "engine")
  local savedTyreModel = exports["np-vehicles"]:GetVehicleMetadata(veh, "tyremodel")
  local savedNitrous = exports["np-vehicles"]:GetVehicleMetadata(veh, "nitrous")
  local savedShiftPoint = exports["np-vehicles"]:GetVehicleMetadata(veh, "customatshiftpoint")
  local savedTcsState = exports["np-vehicles"]:GetVehicleMetadata(veh, "tcsstate")
  local savedEscState = exports["np-vehicles"]:GetVehicleMetadata(veh, "escstate")
  local savedCtmState = exports["np-vehicles"]:GetVehicleMetadata(veh, "ctmstate")

  if savedShiftPoint ~= nil then normalizedatshiftpoint = savedShiftPoint end
  if savedTransmissionMode ~= nil then transmissionmode = savedTransmissionMode end
  if savedFinalDrive ~= nil then finaldriveadjustmentprct = savedFinalDrive end
  if savedGearRatios ~= nil then gearratiotable = savedGearRatios end

  gearboxApplication()

  if savedTcsState ~= nil then tractioncontrol = savedTcsState else tractioncontrol = false end

  if savedEscState ~= nil then
    if not iselectric then stabilitycontrol = savedEscState end
  else
    if not iselectric then stabilitycontrol = false end
  end

  if savedTyreModel ~= nil then
    tyremodel = savedTyreModel
    currenttire = savedTyreModel
  else
    if vehclass ~= 8 then
      tyremodel = "common"
      currenttire = "common"
    end
  end

  if savedNitrous ~= nil then
    chaser_setnitrous(true, savedNitrous.duration, savedNitrous.currentcapacity)
  end

  local turboSize = exports["np-vehicles"]:GetVehicleTurbo(veh)
  local dumpValveMeta = exports["np-vehicles"]:GetVehicleMetadata(veh, "dumpValve")
  dumpvalve = dumpValveMeta
  if dumpvalve == nil then dumpvalve = -1 end

  if turboSize ~= nil and turboSize > 0 then
    printDebug("Tuning stats have a custom turbo, requesting...", "load")
    boosttype = 0
    loadvehicleturboinfo(boosttype, turboSize, 35, 0.7, 0.58, 0.33, 10, 30, 0.2)
  end

  if savedWeight ~= nil then
    if not iselectric then currentweight = savedWeight end
  else
    currentweight = originalvehicleweight
  end

  local engineStage = exports["np-vehicles"]:GetVehicleMetadata(veh, "engineStage") or 0

  local brakeCapacityMeta = exports["np-vehicles"]:GetVehicleMetadata(veh, "brakecapacity") or 0
  if brakeCapacityMeta ~= 0 then brakingApplication(veh, brakeCapacityMeta) end

  local coilStage = exports["np-vehicles"]:GetVehicleMetadata(veh, "coilStage") or 0
  if coilStage ~= 0 then coilApplication(veh, coilStage) end

  local swayStage = exports["np-vehicles"]:GetVehicleMetadata(veh, "swayStage") or 0
  if swayStage ~= 0 then swayApplication(veh, swayStage) end

  local dampnerStage = exports["np-vehicles"]:GetVehicleMetadata(veh, "dampnerStage") or 0
  if dampnerStage ~= 0 then dampenerApplication(veh, dampnerStage) end

  local clutchStage = exports["np-vehicles"]:GetVehicleMetadata(veh, "clutchStage") or 0
  if clutchStage ~= 0 then clutchApplication(veh, clutchStage) end

  local weightStage = exports["np-vehicles"]:GetVehicleMetadata(veh, "weightStage")
  local finalWeight = originalvehicleweight
  if weightStage ~= nil then
    finalWeight = weightApplication(veh, weightStage)
  end

  local turboInfo = {
    compressorsize = compressorsize,
    peakturbodecayboost = peakturbodecayboost,
    turbodecaypoint = turbodecaypoint,
    maxtrboostpmax = maxtrboostpmax,
    maxtrboostpmin = maxtrboostpmin,
    maxtrboostpminprct = maxtrboostpminprct,
    maxtrboostpmaxprct = maxtrboostpmaxprct,
    booststartpoint = booststartpoint
  }

  if savedEngine ~= nil then
    if not iselectric and savedEngine ~= "stock" then
      chaser_setEngineAndWeight(savedEngine, finalWeight, true, true)
    end
  elseif weightStage ~= nil then
    chaser_setEngineAndWeight("stock", finalWeight, true, true)
  else
    local engineName = "stock"
    local model = GetEntityModel(vehicle)
    local netId = NetworkGetNetworkIdFromEntity(vehicle)
    TriggerServerEvent("chaser:sync", netId, {engineName, model, netId}, 2)
    currentengine = engineName
  end

  orignaltransmissionmode = transmissionmode
  if savedCtmState then chaser_ctm() end
end

basegears = 6

function loadcarkvpsave(foundInDB)
  printDebug("Loaded Vehicle Stats", "load")

  if foundInDB then
    printDebug("Vehicle Stats Found in DB", "load")
    fadeDuration = vehicledata[entryname].flywheelweight
    reardifflockprct = vehicledata[entryname].reardifflock
    frontdifflockprct = vehicledata[entryname].frontdifflock
    gearratiotable = vehicledata[entryname].gearratios
    basegears = vehicledata[entryname].gearboxammount
    finaldriveadjustmentprct = vehicledata[entryname].finaldrive
    ogfinaldrive = vehicledata[entryname].finaldrive
    enablemanualtransmission = true
    enableflywheel = vehicledata[entryname].hasstockflywheel
    enabledifferential = vehicledata[entryname].hasstockdifferential
    normalizedatshiftpoint = vehicledata[entryname].automaticshiftpoint

    local transmissionType = vehicledata[entryname].transmissiontype
    if transmissionType == "sequential" then
      transmissionmode = 0
    elseif transmissionType == "manual" then
      transmissionmode = 2
    elseif transmissionType == "automatic" then
      transmissionmode = 1
    else
      printDebug("[CHASER DEBUG]: A Invalid transmission type has been used, please check this vehicle data entry. Sequential has been selected by default.", "load")
      transmissionmode = 0
    end
    orignaltransmissionmode = transmissionmode

    local compressorSizeMeta = vehicledata[entryname].turbodata.compressorsize
    if compressorSizeMeta > 0 then
      printDebug("Vehicle Stats Include Turbo, loading data...", "load")
      boosttype = vehicledata[entryname].turbodata.boosttype
      local peakDecayBoost = vehicledata[entryname].turbodata.peakturbodecayboost
      local decayPoint = vehicledata[entryname].turbodata.turbodecaypoint
      local maxPMax = vehicledata[entryname].turbodata.maxtrboostpmax
      local maxPMin = vehicledata[entryname].turbodata.maxtrboostpmin
      local maxPMinPrct = vehicledata[entryname].turbodata.maxtrboostpminprct
      local maxPMaxPrct = vehicledata[entryname].turbodata.maxtrboostpmaxprct
      local boostStart = vehicledata[entryname].turbodata.booststartpoint
      loadvehicleturboinfo(boosttype, compressorSizeMeta, peakDecayBoost, decayPoint, maxPMax, maxPMin, maxPMinPrct, maxPMaxPrct, boostStart)
    end
    if compressorSizeMeta == 0 then boosttype = 3 end

    currentweight = vehicledata[entryname].weight

    if vehicledata[entryname].iselectric then
      printDebug("Loading Vehicle Stats on electric mode", "load")
      boosttype = 3
      enablemanualtransmission = false
      enableflywheel = false
      enabledifferential = true
      iselectric = true
      wheelspinassist = false
      tractioncontrol = false
      stabilitycontrol = false
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveForce", currentacc * 1.1)
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDragCoeff", GetDragCoeffGs(cartopspeed / 3.6, dragcoeff))
      calculatedragcoeff = GetDragCoeffGs(cartopspeed / 3.6, dragcoeff)
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveMaxFlatVel", cartopspeed * 0.75)

      local startTime = GetGameTimer()
      while GetGameTimer() - startTime < 125 do
        Citizen.Wait(0)
        SetVehicleEnginePowerMultiplier(vehicle, 0.51)
      end
    end
  else
    printDebug("Vehicle Stats Not Found in DB", "load")
    fadeDuration = 3.0
    reardifflockprct = 100
    frontdifflockprct = 100
    finaldriveadjustmentprct = 0.9
    gearratiotable = _G["gtagratiotable" .. gearammount]
    enablemanualtransmission = true
    enableflywheel = true
    if iselectric then
      enablemanualtransmission = false
      enableflywheel = false
    end
    enabledifferential = true
    transmissionmode = 1
    normalizedatshiftpoint = 0.09
    thiscarhasnitrous = false
    nitroustimer = 0
    boosttype = 3
    orignaltransmissionmode = transmissionmode
  end

  loadcartune(vehicle)

  if forceserversettingsdefault then
    printDebug("Vehicle Stats Forced by server", "load")
    fadeDuration = storeb1
    reardifflockprct = storeb2
    frontdifflockprct = storeb3
    finaldriveadjustmentprct = storeb4
    gearratiotable = _G["gtagratiotable" .. gearammount]
  end
end

function applymt(fromMenu)
  while not GetIsVehicleEngineRunning(vehicle) do
    Citizen.Wait(0)
  end

  if fromMenu then
    if GetIsVehicleEngineRunning(vehicle) then
      atcall = true
      downshift()
      Citizen.Wait(5)
      atcall = true
      upshift()
      if useintegratedhud then starthud(iselectric) end
      hastoapplymt = false
      menumtapplycheck = true
    end
  else
    if GetIsVehicleEngineRunning(vehicle) then
      aplyingconfig = true
      downshift()
      Citizen.Wait(5)
      upshift()
      if useintegratedhud then starthud(iselectric) end
      hastoapplymt = false
      aplyingconfig = false
      menumtapplycheck = true
    end
  end
end

function loadvehicleturboinfo(boostTypeArg, compressorSizeArg, peakDecayBoost, decayPoint, maxPMax, maxPMin, maxPMinPrct, maxPMaxPrct, boostStart)
  printDebug("Turbo Data loaded!", "load")
  if boostTypeArg == 0 then
    compressorsize = compressorSizeArg
    if compressorsize ~= nil then
      torqueincrease = map(compressorsize, 20, 100, 35, 85)
    end
    peakturbodecayboost = peakDecayBoost
    turbodecaypoint = decayPoint
    maxtrboostpmax = maxPMax
    maxtrboostpmin = maxPMin
    maxtrboostpminprct = maxPMinPrct
    maxtrboostpmaxprct = maxPMaxPrct
    booststartpoint = boostStart
  elseif boostTypeArg == 1 then
    compressorsize = compressorSizeArg
    if compressorsize ~= nil then
      torqueincrease = map(compressorsize, 20, 100, 27, 55)
    end
  end
end

function calculateAirResistance(mass, speedArg)
  local mphFactor = 0.621371
  local constFactor = 514.714
  local speedFactor = 1.024144
  local smallFactor = 1.0E-4
  local massMph = mass * mphFactor
  local speedRatio = (speedArg / speedFactor) ^ 2
  speedRatio = constFactor * speedRatio
  local massSpeedFactor = massMph * smallFactor
  massSpeedFactor = massSpeedFactor * speedArg
  massSpeedFactor = massSpeedFactor ^ 2
  massSpeedFactor = speedRatio * massSpeedFactor
  return massSpeedFactor
end

--  chaser_getenginebaysize: geometry reconstruction is best-effort;
-- verify against original if engine-bay sizing looks off for new vehicles.
function chaser_getenginebaysize(veh, vehClassArg)
  local enginePos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "engine"))
  local engineOffset = GetOffsetFromEntityGivenWorldCoords(veh, enginePos.x, enginePos.y, enginePos.z)

  local headlightPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "headlight_l"))
  local headlightOffset = GetOffsetFromEntityGivenWorldCoords(veh, headlightPos.x, headlightPos.y, headlightPos.z)

  local taillightPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "taillight_l"))
  local taillightOffset = GetOffsetFromEntityGivenWorldCoords(veh, taillightPos.x, taillightPos.y, taillightPos.z)

  local wheelLfPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "wheel_lf"))
  local wheelLfOffset = GetOffsetFromEntityGivenWorldCoords(veh, wheelLfPos.x, wheelLfPos.y, wheelLfPos.z)

  local wheelRfPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "wheel_rf"))
  local wheelRfOffset = GetOffsetFromEntityGivenWorldCoords(veh, wheelRfPos.x, wheelRfPos.y, wheelRfPos.z)

  local size = 0
  local isCar = true

  if vehClassArg == 8 then
    local handlebarsPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "handlebars"))
    engineOffset = GetOffsetFromEntityGivenWorldCoords(veh, handlebarsPos.x, handlebarsPos.y, handlebarsPos.z)
    local seatPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "seat_f"))
    headlightOffset = GetOffsetFromEntityGivenWorldCoords(veh, seatPos.x, seatPos.y, seatPos.z)
    isCar = false
  end

  local referencePoint = headlightOffset
  local useFront = true

  if math.abs(taillightOffset.y - engineOffset.y) < math.abs(headlightOffset.y - engineOffset.y) then
    referencePoint = taillightOffset
    useFront = false
  end

  if useFront and isCar then
    local windscreenIndex = GetEntityBoneIndexByName(veh, "windscreen_f")
    if windscreenIndex == -1 then
      windscreenIndex = GetEntityBoneIndexByName(veh, "windscreen")
      if windscreenIndex ~= -1 then
        local pos = GetWorldPositionOfEntityBone(veh, windscreenIndex)
        engineOffset = GetOffsetFromEntityGivenWorldCoords(veh, pos.x, pos.y, pos.z)
      end
      if windscreenIndex == -1 then
        local pos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "engine"))
        engineOffset = GetOffsetFromEntityGivenWorldCoords(veh, pos.x, pos.y, pos.z)
      end
    else
      local pos = GetWorldPositionOfEntityBone(veh, windscreenIndex)
      engineOffset = GetOffsetFromEntityGivenWorldCoords(veh, pos.x, pos.y, pos.z)
    end
    size = math.abs(referencePoint.y - engineOffset.y)
  end

  if not useFront and isCar then
    local seatIndex = GetEntityBoneIndexByName(veh, "seat_dside_f")
    if seatIndex == -1 then
      local engineIndex = GetEntityBoneIndexByName(veh, "engine")
      local pos = GetWorldPositionOfEntityBone(veh, engineIndex)
      engineOffset = GetOffsetFromEntityGivenWorldCoords(veh, pos.x, pos.y, pos.z)
    else
      local pos = GetWorldPositionOfEntityBone(veh, seatIndex)
      engineOffset = GetOffsetFromEntityGivenWorldCoords(veh, pos.x, pos.y, pos.z)
    end

    referencePoint = taillightOffset
    local adjustedEngineOffset = vector3(engineOffset.x, engineOffset.y - 0.55, engineOffset.z)
    if math.abs(headlightOffset.y - adjustedEngineOffset.y) < math.abs(taillightOffset.y - adjustedEngineOffset.y) then
      referencePoint = headlightOffset
    end
    size = math.abs(referencePoint.y - adjustedEngineOffset.y)
  end

  local wheelXDiff = math.abs(wheelRfOffset.x - wheelLfOffset.x)

  if vehClassArg == 8 then
    wheelXDiff = 0.33
    size = math.abs(referencePoint.y - engineOffset.y)
  end

  return math.ceil((size * wheelXDiff) * 1000) / 1000
end

function chaser_getavgacc(baseGAcc, gearCount, gearRatios)
  local sum = 0
  for i = 1, gearCount, 1 do
    sum = sum + (baseGAcc / 3.333) * gearRatios[i + 1]
  end
  return sum / gearCount
end

function chaser_getefficiency(avgAcc, weightArg)
  return (math.floor(avgAcc * 1000) / 1000) / weightArg
end

function chaser_getengineswapdata()
  local avgAcc = chaser_getavgacc(baseacc * 3.333, gearammount, gearratiotable)
  local efficiency = chaser_getefficiency(avgAcc, currentweight)
  print("basegacc = " .. (baseacc * 3.333) .. ",")
  print("avgacc = " .. avgAcc .. ",")
  print("engineefficiency = " .. efficiency .. ",")
end

function chaser_getvehicledata(name)
  local data = vehicledata[name]
  if not data then return nil end
  return data
end

function chaser_setbaseacc(acc)
  stockacc = acc
  currentacc = acc
  baseacc = acc / 3.333
  calculatetransmissiongearing()
end

function chaser_getassists()
  local assists = {}
  assists.tractionControl = tractioncontrol
  assists.stabilityControl = stabilitycontrol
  assists.wsa = false
  assists.gearLock = downhillenginebrakeassist
  assists.launchControl = launchcontrolmode
  assists.hasLaunchControl = canuselaunchcontrol
  if isValidVehicle then assists.hasAssists = not iselectric end
  assists.isAuto = (transmissionmode == 1)
  return assists
end

function chaser_getctm()
  local ctm = {}
  ctm.isSequential = (orignaltransmissionmode == 0)
  ctm.isTransmissionSwapped = (transmissionmode ~= orignaltransmissionmode)
  return ctm
end

function chaser_ctm()
  if IsPedInAnyVehicle(player, false) then
    if GetPedInVehicleSeat(vehicle, -1) == player then
      if allowautoseqmode then
        local speedVal = GetEntitySpeed(vehicle) * 3.6
        if speedVal > 5 then
          printDebug("CTM blocked while moving", "tools")
          return TriggerEvent("DoLongHudText", "You cannot do this while driving", 2)
        end
        if orignaltransmissionmode == 0 then
          currentdrivemode = currentdrivemode + 1
          if currentdrivemode > 2 then currentdrivemode = 0 end

          if currentdrivemode == 1 then
            transmissionmode = 1
            if vehicledata[entryname] then
              if vehicledata[entryname].automodeshiftpoint then
                normalizedatshiftpoint = vehicledata[entryname].automodeshiftpoint
              end
            else
              normalizedatshiftpoint = 0.135
            end
            if desiredgear == 0 then
              SetVehicleControlsInverted(vehicle, false)
            end
            printDebug("Selected Automatic", "tools")
          else
            if currentdrivemode == 2 then
              transmissionmode = 0
              printDebug("Selected Sequential", "tools")
            end
          end

          TriggerServerEvent("chaser:set:assists:meta", {
            vehicleId = vehiclenetid,
            wsastate = wheelspinassist,
            tcsstate = tractioncontrol,
            escstate = stabilitycontrol,
            ctmstate = (currentdrivemode == 1)
          })

          if useintegratedhud then
            SendNUIMessage({
              action = "shift",
              currentgear = desiredgear,
              transmissiontype = transmissionmode,
              speedtype = sendspeedtype,
              differential = hilodiffactivated
            })
          end
        end
      end
    end
  end
end

function chaser_alterdriftmode()
  if IsPedInAnyVehicle(player, false) then
    if GetPedInVehicleSeat(vehicle, -1) == player then
      isusingsimdrift = not isusingsimdrift
      return isusingsimdrift
    end
  end
end

function chaser_setassists(assists)
  if IsPedInAnyVehicle(player, false) then
    if GetPedInVehicleSeat(vehicle, -1) == player then
      tractioncontrol = assists.tractionControl
      stabilitycontrol = assists.stabilityControl
      if transmissionmode == 1 then
        downhillenginebrakeassist = assists.gearLock
      end
      if canuselaunchcontrol then
        launchcontrolmode = assists.launchControl
      end
    end
  end

  TriggerServerEvent("chaser:set:assists:meta", {
    vehicleId = vehiclenetid,
    wsastate = false,
    tcsstate = tractioncontrol,
    escstate = stabilitycontrol,
    ctmstate = (currentdrivemode == 1)
  })

  if useintegratedhud then
    if tobool(assists.stabilityControl) == true then
      if isinacar then SendNUIMessage({action = "showassist", assist = "esc"}) end
    else
      if isinacar then SendNUIMessage({action = "hideassist", assist = "esc"}) end
    end

    if tobool(assists.tractionControl) == true then
      if isinacar then SendNUIMessage({action = "showassist", assist = "tcs"}) end
    else
      if isinacar then SendNUIMessage({action = "hideassist", assist = "tcs"}) end
    end
  end
end

function chaser_setnitrous(hasNitrous, timerVal, capacity)
  thiscarhasnitrous = hasNitrous
  nitroustimer = timerVal
  nitrouscapacity = capacity

  if tobool(thiscarhasnitrous) == true then
    if isinacar then SendNUIMessage({action = "shownitrous"}) end
  else
    if isinacar then SendNUIMessage({action = "hidenitrous"}) end
  end
end

function chaser_getnitrous()
  return {hasnitrous = thiscarhasnitrous, timer = nitroustimer, capacity = nitrouscapacity}
end

function chaser_getRacingDetails()
  local nitrous = {hasnitrous = thiscarhasnitrous, timer = nitroustimer, capacity = nitrouscapacity}

  local assists = {}
  assists.tractionControl = tractioncontrol
  assists.stabilityControl = stabilitycontrol
  assists.wsa = false
  assists.gearLock = downhillenginebrakeassist
  assists.launchControl = launchcontrolmode
  assists.hasLaunchControl = canuselaunchcontrol
  if isValidVehicle then assists.hasAssists = not iselectric end
  assists.isAuto = (transmissionmode == 1)

  local turboVal = -0.9
  if compressorsize > 0 and turbopressure then
    turboVal = turbopressure
  end

  return {assists = assists, turbo = turboVal, nos = nitrous}
end

function chaser_gettelemetry()
  return {
    power = enginepowerhp * throttle + enginepowerhp * (curbfactorxpressure / 100),
    torque = enginetorque * throttle + enginetorque * (curbfactorxpressure / 100),
    boost = turbopressure,
    boostpowerincrease = curbfactorxpressure,
    airresistance = currentairresistance,
    tcsisactive = tcsstate,
    escisactive = ecsstate,
    lcisactive = lcstate,
    atlockactive = downhillenginebrakeassist,
    remainingnitrous = nitrouscapacity
  }
end

function chaser_getminmaxrpm()
  return {max = maxRPM, min = minRPM}
end

function chaser_getturbopressure()
  if compressorsize > 0 then return turbopressure end
  return -0.9
end

function chaser_forcereload()
  if usecustombasevents then
    TriggerEvent("chaser:leftVeh", NetworkGetNetworkIdFromEntity(vehicle))
    Citizen.Wait(10)
    if GetPedInVehicleSeat(pastvehicle, -1) == player then
      TriggerEvent("chaser:enteredVehicle", NetworkGetNetworkIdFromEntity(pastvehicle))
    end
    return true
  else
    TriggerEvent("baseevents:leftVehicle", vehicle)
    Citizen.Wait(10)
    if GetPedInVehicleSeat(pastvehicle, -1) == player then
      TriggerEvent("baseevents:enteredVehicle", pastvehicle)
    end
    return true
  end
end

function chaser_refreshengine()
  calculatetransmissiongearing()
  loadengine(originalvehicleweight, currentweight, stockacc, false, true)
end

function chaser_forceturbo(compressorSizeArg)
  compsize = compressorSizeArg
  if compsize ~= nil and compsize > 0 then
    boosttype = 0
    loadvehicleturboinfo(boosttype, compsize, 35, 0.75, 0.58, 0.33, 10, 30, 0.25)
  end
end

function chaser_setturbo(data)
  compsize = data.compressorsize
  if compsize ~= nil and compsize > 0 then
    boosttype = data.boosttype
    local peakDecayBoost = data.peakturbodecayboost
    local decayPoint = data.turbodecaypoint
    local maxPMax = data.maxtrboostpmax + 0.0
    local maxPMin = data.maxtrboostpmin + 0.0
    local maxPMinPrct = data.maxtrboostpminprct
    local maxPMaxPrct = data.maxtrboostpmaxprct
    local boostStart = data.booststartpoint + 0.0
    loadvehicleturboinfo(boosttype, compsize, peakDecayBoost, decayPoint, maxPMax, maxPMin, maxPMinPrct, maxPMaxPrct, boostStart)
  end
end

function chaser_getturbo()
  return {
    size = compressorsize,
    ptdboost = peakturbodecayboost,
    tdp = turbodecaypoint,
    mtbpmax = maxtrboostpmax,
    mtbpmin = maxtrboostpmin,
    mtbpminprct = maxtrboostpminprct,
    mtbpmaxprct = maxtrboostpmaxprct,
    bsp = booststartpoint,
    typeid = boosttype
  }
end

function chaser_gettransmission()
  return {
    transmissionid = transmissionmode,
    originaltransmissionid = orignaltransmissionmode,
    finaldrive = finaldriveadjustmentprct,
    gearratiostable = gearratiotable,
    atshiftpoint = normalizedatshiftpoint,
    gears = gearammount,
    topspeed = cartopspeed
  }
end

function chaser_settransmission(mode, ratios, finalDriveArg, shiftPointArg, gearCountArg)
  gearammount = gearCountArg
  transmissionmode = mode
  if transmissionmode > 5 or transmissionmode < 0 then
    transmissionmode = 0
    orignaltransmissionmode = 0
  end
  if transmissionmode == 0 then
    orignaltransmissionmode = 0
  else
    orignaltransmissionmode = transmissionmode
  end
  finaldriveadjustmentprct = finalDriveArg
  gearratiotable = ratios
  normalizedatshiftpoint = shiftPointArg
  calculatetransmissiongearing()
end

function chaser_setflywheel(enabled, weightArg)
  enableflywheel = tobool(enabled)
  fadeDuration = weightArg
end

function chaser_getflywheel()
  return {flywheel = enableflywheel, flywheelweight = fadeDuration}
end

function chaser_getvehname()
  return entryname
end

function chaser_setdifferential(enabled, frontLock, rearLock)
  enabledifferential = tobool(enabled)
  frontdifflockprct = frontLock
  reardifflockprct = rearLock
end

function chaser_getdifferential()
  return {differential = enabledifferential, frontlock = frontdifflockprct, rearlock = reardifflockprct}
end

function chaser_togglescoreboardsfx()
  mutescoreboardsfx = not mutescoreboardsfx
end

function chaser_getscoreboardsfxmuted()
  return mutescoreboardsfx
end

function chaser_togglehilo()
  hilodiffactivated = not hilodiffactivated
  local statusText = hilodiffactivated and "active" or "disabled"
  printDebug("HI-LO Differential: " .. statusText, "gearshift")

  if hilodiffactivated then
    if hashilodiff then finaldriveadjustmentprct = ogfinaldrive / 2 end
  else
    if hashilodiff then finaldriveadjustmentprct = ogfinaldrive end
  end

  calculatetransmissiongearing()
end

function chaser_gethilo()
  return hilodiffactivated
end

function chaser_settyre(tyreName)
  local found = false
  for _, name in ipairs(tyremodellist) do
    if name == tyreName then found = true; break end
  end
  if found then
    loadtiremodel(true, tyreName)
  else
    print("[C.H.A.S.E.R] [WARNING] The loaded tyre model does not exist! Loading default tyre model...")
    loadtiremodel(false, tyremodel)
  end
end

function chaser_gettyre()
  return {
    tyre = tyremodel,
    maxg = maxtraction,
    ming = maxtraction - (maxtraction * 0.1),
    latcurve = lateralcurve
  }
end

--  chaser_setEngineAndWeight: the "forceUseAudio true" and "false" branches
-- were near-duplicates in the original (only the engine-bay-fit gate differs),
-- preserved as-is for fidelity.
function chaser_setEngineAndWeight(engineName, newWeight, forceUseAudio, warnIfMissing)
  local found = false
  local audioHash = ""
  local engBaySize = 0
  local basegacc, engineefficiency, avgacc, turboData = nil, nil, nil, nil

  local isBike = GetVehicleClass(vehicle) == 18
  currentweight = newWeight

  if engineName == "stock" then
    if not isBike then
      ForceUseAudioGameObject(vehicle, GetEntityModel(vehicle))
    end
    local model = GetEntityModel(vehicle)
    local netId = NetworkGetNetworkIdFromEntity(vehicle)
    TriggerServerEvent("chaser:sync", netId, {"stock", model, netId}, 2)
    currentengine = "stock"
    loadengine(originalvehicleweight, newWeight, stockacc, false, true)
    return
  end

  for name, info in pairs(enginedata) do
    if name == engineName then
      currentacc = info.basegacc
      torqueCurve = info.torqueCurve
      audioHash = info.audiohash
      fadeDuration = info.flywheelweight
      engBaySize = info.size
      engineefficiency = info.engineefficiency
      avgacc = info.avgacc
      turboData = info.turbodata
      found = true
      break
    end
  end

  if not found then
    if warnIfMissing then print("[C.H.A.S.E.R] [WARNING] Engine Not found...") end
    return
  end

  if turboData.compressorsize > 0 and turboData.compressorsize ~= nil then
    chaser_setturbo(turboData)
  end

  local turboInfo = {
    compressorsize = compressorsize,
    peakturbodecayboost = peakturbodecayboost,
    turbodecaypoint = turbodecaypoint,
    maxtrboostpmax = maxtrboostpmax,
    maxtrboostpmin = maxtrboostpmin,
    maxtrboostpminprct = maxtrboostpminprct,
    maxtrboostpmaxprct = maxtrboostpmaxprct,
    booststartpoint = booststartpoint
  }

  local function applySwap(engBayFits)
    local curve, calculatedMaxTorque, maxRpm, minRpm = prepareTorqueCurve(torqueCurve)
    minRPM = minRpm
    maxRPM = maxRpm
    maxTorque = calculatedMaxTorque or 250.0
    _G.maxTorque = maxTorque
    torqueCurve = curve

    local ratio = avgacc / engineefficiency
    local calculatedAcc = engineweightrelation(currentacc, engineefficiency, avgacc, newWeight, ratio, gearammount, gearratiotable)
    currentacc = calculatedAcc

    if statebag.currentengine == nil then
      stockacc = currentacc
    else
      if currentengine ~= "stock" and currentengine == engineName then
        stockacc = currentacc
      else
        stockacc = currentacc
      end
    end

    baseacc = calculatedAcc / 3.333
    printDebug("Engine swapped to: " .. engineName, "load")

    TriggerServerEvent("chaser:sync", vehnetid, {engineName, audioHash, vehiclenetid}, 2)
    currentengine = engineName
    if not isBike then
      ForceUseAudioGameObject(vehicle, audioHash)
    end
    calculatetransmissiongearing()

    printDebug("Base G's: (Considering Weight)" .. currentacc, "load")
    printDebug("Base G's: (Not Considering Weight)" .. stockacc, "load")

    local rating = chaser_getpp(chaser_getvehname(), true, newWeight, currentengine, turboInfo, false, transmissionupgrade, currenttire)

    local weightReduced = newWeight < originalvehicleweight
    local engineSwapped = currentengine ~= "stock"
    local hasTransmissionUpgrade = carhastransmission >= 0
    local hasTurbo = turboInfo.compressorsize > 0

    printDebug("Weight Reduction: " .. tostring(weightReduced), "load")
    printDebug("Eng Swap: " .. tostring(engineSwapped), "load")
    printDebug("Turbo: " .. tostring(hasTurbo), "load")
    printDebug("Transmission Upgrade: " .. tostring(hasTransmissionUpgrade), "load")
    printDebug("Vehicle Ratings: " .. math.floor(rating.pp), "load")
    printDebug("Power: " .. math.floor(rating.power) .. " | Acc: " .. math.floor(rating.acc), "load")
    printDebug("Top Speed: " .. math.floor(rating.speed) .. " | Handling: " .. math.floor(rating.grip), "load")
  end

  if forceUseAudio then
    local cachedEngBaySize = nil
    for modelName, dataVal in pairs(globalvehdata) do
      if GetHashKey(modelName) == GetEntityModel(vehicle) then
        cachedEngBaySize = dataVal.engbaysize
        break
      end
    end
    local tolerance = cachedEngBaySize + (cachedEngBaySize * 0.05)
    if engBaySize <= tolerance then
      applySwap(true)
    elseif cachedEngBaySize ~= nil then
      if warnIfMissing then print("[C.H.A.S.E.R] [WARNING] This engine does not fit this vehicle...") end
    elseif warnIfMissing then
      print("[C.H.A.S.E.R] [WARNING] Engine Bay Size Not located...")
    end
  else
    applySwap(false)
  end
end

function chaser_getengine()
  return currentengine
end

function chaser_setweight(newWeight)
  print("This function is disabled, please use the new one instead.")
end

function chaser_getweight()
  return currentweight
end

function chaser_calculatetuningacc(vehName, newWeight, engineName, turboData, addExtraGear)
  local data = vehicledata[vehName]
  local baseGAcc = data.basegacc
  local ogWeight = data.weight
  local gearCount = data.gearboxammount
  local gearRatios = data.gearratios

  if addExtraGear and gearCount < 9 then gearCount = gearCount + 1 end

  if engineName == "stock" or engineName == nil then
    local avgAcc = chaser_getavgacc(baseGAcc, gearCount, gearRatios)
    local efficiency = chaser_getefficiency(avgAcc, newWeight)
    local result = engineweightrelation(baseGAcc, efficiency, avgAcc, newWeight, ogWeight, gearCount, gearRatios)
    if turboData ~= nil and turboData.compressorsize > 0 then
      local increase = calculateAverageTorqueIncrease(turboData.compressorsize, turboData.peakturbodecayboost, turboData.turbodecaypoint, turboData.maxtrboostpmax, turboData.maxtrboostpmin, turboData.maxtrboostpminprct, turboData.maxtrboostpmaxprct, turboData.booststartpoint)
      result = result + result * (increase / 100)
    end
    return result
  end

  local swapBaseGAcc, swapEfficiency, swapAvgAcc = nil, nil, nil
  local found = false
  for name, info in pairs(enginedata) do
    if name == engineName then
      swapBaseGAcc = info.basegacc
      swapEfficiency = info.engineefficiency
      swapAvgAcc = info.avgacc
      found = true
      break
    end
  end

  if found then
    local ratio = swapAvgAcc / swapEfficiency
    local relation = engineweightrelation(swapBaseGAcc, swapEfficiency, swapAvgAcc, ogWeight, ratio, gearCount, gearRatios)
    local avgAcc = chaser_getavgacc(relation, gearCount, gearRatios)
    local efficiency = chaser_getefficiency(avgAcc, newWeight)
    local result = engineweightrelation(relation, efficiency, avgAcc, newWeight, ogWeight, gearCount, gearRatios)
    if turboData ~= nil and turboData.compressorsize > 0 then
      local increase = calculateAverageTorqueIncrease(turboData.compressorsize, turboData.peakturbodecayboost, turboData.turbodecaypoint, turboData.maxtrboostpmax, turboData.maxtrboostpmin, turboData.maxtrboostpminprct, turboData.maxtrboostpmaxprct, turboData.booststartpoint)
      result = result + result * (increase / 100)
    end
    return result
  else
    return "failed on finding engine swap option " .. tostring(engineName)
  end
end

function chaser_refreshswapstockacc(unusedName, newWeight, gearCount, gearRatios)
  local baseGAcc, efficiency, avgAcc = nil, nil, nil
  local found = false
  for name, info in pairs(enginedata) do
    if name == currentengine then
      baseGAcc = info.basegacc
      efficiency = info.engineefficiency
      avgAcc = info.avgacc
      found = true
      break
    end
  end
  if found then
    local ratio = avgAcc / efficiency
    return engineweightrelation(baseGAcc, efficiency, avgAcc, newWeight, ratio, gearCount, gearRatios)
  else
    return "failed on finding engine swap option " .. tostring(currentengine)
  end
end

function chaser_getcurrentdriftscore() return totaldriftscore end
function chaser_getcurrentdriftscoremultiplier() return currentdriftscoremultiplier end
function chaser_setcurrentdriftscoremultiplier(value) currentdriftscoremultiplier = value end
function chaser_setcurrentdriftscore(value) totaldriftscore = value end
function chaser_getlastbankedscore() return globallastdriftscore end
function chaser_getstackeddriftcount() return currentdriftstack end
function chaser_getwalltapdriftcount() return currentwalltapstack end
function chaser_gethighspeeddriftcount() return driftedinhighspeed end

function chaser_getDriftPoints()
  local score = chaser_getcurrentdriftscore()
  local multiplier = chaser_getcurrentdriftscoremultiplier()
  local lastBanked = chaser_getlastbankedscore()
  return score, multiplier, lastBanked
end

function chaser_resetDriftScores()
  currentdriftscoremultiplier = 0
  totaldriftscore = 0
  globallastdriftscore = 0
  currentdriftstack = 0
  currentwalltapstack = 0
  driftedinhighspeed = 0
end

function gettotaldrivetrainpower(veh)
  local power = GetVehicleWheelPower(veh, 0) + GetVehicleWheelPower(veh, 1)
  local wheel3, wheel4 = 0, 0
  if ammountwheels > 2 then wheel3 = GetVehicleWheelPower(veh, 2) end
  if ammountwheels > 2 then wheel4 = GetVehicleWheelPower(veh, 3) end
  return power + wheel3 + wheel4
end

--  chaser_calcacc: dense 0-100/quarter-mile physics simulation.
-- Translated line-for-line from the original register bytecode.
function chaser_calcacc(vehName, forceAcc, forcedAccVal, debugFlag, addExtraGear)
  local data = vehicledata[vehName]
  local torqueCurveData = data.torqueCurve
  local topSpeedArg = data.topspeed
  local baseGAcc = data.basegacc
  local turboData = data.turbodata

  if turboData.compressorsize > 0 then
    local increase = calculateAverageTorqueIncrease(turboData.compressorsize, turboData.peakturbodecayboost, turboData.turbodecaypoint, turboData.maxtrboostpmax, turboData.maxtrboostpmin, turboData.maxtrboostpminprct, turboData.maxtrboostpmaxprct, turboData.booststartpoint)
    baseGAcc = baseGAcc + baseGAcc * (increase / 100)
  end

  if forceAcc then baseGAcc = forcedAccVal end

  local gearRatios = data.gearratios
  local finalDriveArg = data.finaldrive
  local gearCount = data.gearboxammount
  if addExtraGear and gearCount < 9 then gearCount = gearCount + 1 end

  local isMotorcycle = data.ismotorcycle
  local flatVelTopSpeed = data.topspeed * 0.75
  local currentGear = 1
  local speedKmh = 0
  local dragCoeff = data.dragcoeff
  local isElectric = data.iselectric

  local elapsedTime = 0
  local timeStep = 0.02
  local time100, time160 = nil, nil
  local distance = 0
  local segmentsCompleted = 0
  local quarterMileDist, halfMileDist, fullMileDist, mile1_25Dist = 0.402, 0.805, 1.609, 2.012
  local quarterMileTime, halfMileTime, fullMileTime, mile1_25Time = nil, nil, nil, nil
  local shiftPauseDuration = 0.132
  local inShiftPause = false
  local shiftPauseStartTime = 0

  if not isElectric then
    local extendedGearRatios = {}
    local extendedTopSpeeds = {}
    finaldriveadjustable = topSpeedArg * finalDriveArg
    finaldriveforcalc = topSpeedArg

    for i = 1, gearCount + 1, 1 do
      local ratioTable = _G["gtagratiotable" .. gearCount]
      extendedTopSpeeds[i] = (ratioTable[i] * finaldriveadjustable) / gearRatios[i]
      extendedGearRatios[i] = math.floor((extendedTopSpeeds[i] * 0.9) / ratioTable[i])
    end

    local curve, maxTorque, maxRpm, minRpm = prepareTorqueCurve(torqueCurveData)

    local vMax = extendedGearRatios[currentGear + 1] * 0.75 * 1000 / 3600 * 1.2
    local throttlePos = math.max(0.2, (speedKmh / 3.6) * (0.9 / vMax))
    local rpmMapped = map(throttlePos, 0.2, 1.0, minRpm, maxRpm)
    local torqueVal = calcTorque(curve, maxTorque, rpmMapped)

    if isMotorcycle then
      if throttlePos < 0.25 and speedKmh * 0.621371 < 25 then
        torqueVal = 3.333
      end
    end

    local optimalRpmNorm, bestForce = 0, 0
    for i = 0, 1, 0.001 do
      local rpmMap = map(i, 0.2, 1.0, minRpm, maxRpm)
      local torqueAtRpm = calcTorque(curve, maxTorque, rpmMap)
      local force = (baseGAcc / 3.333) * torqueAtRpm * i
      if bestForce < force then
        bestForce = force
        optimalRpmNorm = i
      end
    end

    local tractiveForceBase = (baseGAcc / 3.333) * 1.1 * (gearRatios[currentGear + 1] / finalDriveArg)
    local dragForce = dragCoeff * 0.9 * 1.0E-4 * ((speedKmh / 3.6) ^ 2) * 1.1
    local netForceGs = (tractiveForceBase * 0.9 * torqueVal - dragForce) * 9.81
    local clutchEngageThreshold = math.min(1.0, optimalRpmNorm * 1.05)
    local isLowSpeedRamp = false

    while netForceGs > 0.05 or segmentsCompleted < 4 do
      if inShiftPause then
        local timeSincePauseStart = elapsedTime - shiftPauseStartTime
        elapsedTime = elapsedTime + timeStep
        distance = distance + (speedKmh / 3600) * timeStep
        if shiftPauseDuration <= timeSincePauseStart then inShiftPause = false end
      else
        local speedIncrease = netForceGs * timeStep * 3.6
        speedKmh = speedKmh + speedIncrease
        elapsedTime = elapsedTime + timeStep
        distance = distance + (speedKmh / 3600) * timeStep

        if throttlePos >= clutchEngageThreshold and gearCount > currentGear then
          currentGear = currentGear + 1
          inShiftPause = true
          shiftPauseStartTime = elapsedTime
        end

        local topSpeedAtTopGear = extendedGearRatios[gearCount + 1]
        if speedKmh > topSpeedAtTopGear then
          speedKmh = extendedGearRatios[gearCount + 1]
          if segmentsCompleted >= 4 then break end
        end

        tractiveForceBase = (baseGAcc / 3.333) * 1.1 * (gearRatios[currentGear + 1] / finalDriveArg)
        vMax = extendedGearRatios[currentGear + 1] * 0.75 * 1000 / 3600 * 1.2
        throttlePos = math.max(0.2, (speedKmh / 3.6) * (0.9 / vMax))
        local throttlePosCheck = math.max(0.2, (speedKmh / 3.6) * (0.9 / vMax))

        if speedKmh <= 5 then
          if throttlePos <= 0.35 then
            throttlePos = map(speedKmh, 0, 5, 0.2, 0.35)
            isLowSpeedRamp = true
          end
        end
        if isLowSpeedRamp then
          if throttlePosCheck < 0.35 and speedKmh < 100 and speedKmh >= 5 then
            throttlePos = 0.35
          end
        end
        if throttlePosCheck >= 0.35 then isLowSpeedRamp = false end

        rpmMapped = map(throttlePos, 0.2, 1.0, minRpm, maxRpm)
        torqueVal = calcTorque(curve, maxTorque, rpmMapped)

        if isMotorcycle then
          if throttlePosCheck < 0.25 and speedKmh * 0.621371 < 25 then
            torqueVal = 3.333
          end
        end

        if time100 == nil and speedKmh >= 100 then time100 = elapsedTime end
        if time160 == nil and speedKmh >= 160 then time160 = elapsedTime end
        if quarterMileTime == nil and quarterMileDist <= distance then quarterMileTime = elapsedTime; segmentsCompleted = segmentsCompleted + 1 end
        if halfMileTime == nil and halfMileDist <= distance then halfMileTime = elapsedTime; segmentsCompleted = segmentsCompleted + 1 end
        if fullMileTime == nil and fullMileDist <= distance then fullMileTime = elapsedTime; segmentsCompleted = segmentsCompleted + 1 end
        if mile1_25Time == nil and mile1_25Dist <= distance then mile1_25Time = elapsedTime; segmentsCompleted = segmentsCompleted + 1 end

        dragForce = dragCoeff * 0.9 * 1.0E-4 * ((speedKmh / 3.6) ^ 2) * 1.1
        local roundedForce = round(tractiveForceBase * torqueVal, 4)
        local roundedDrag = round(dragForce, 4)
        netForceGs = (roundedForce - roundedDrag) * 9.81
      end
    end

    if time100 == nil then time100 = "Failed !" end
    if time160 == nil then time160 = "Failed !" end
    local finalSpeed = speedKmh
    local avgTime = (quarterMileTime + halfMileTime + fullMileTime + mile1_25Time) / segmentsCompleted

    if debugFlag then
      print("0-100Km/h: " .. time100, "0-160Km/h: " .. time160)
      print("1/4 Mile Time:" .. quarterMileTime, "1/2 Mile Time:" .. halfMileTime)
      print("1 Mile Time:" .. fullMileTime, "1.1/4 Mile Time:" .. mile1_25Time)
      print("Topspeed: " .. finalSpeed .. " Average Acceleration Time: " .. avgTime)
    end

    return finalSpeed, avgTime
  else
    local electricTopSpeed = flatVelTopSpeed * 1.3333333333333333 * 0.9
    local vMax = electricTopSpeed * 0.75 * 1000 / 3600 * 1.2
    local throttlePos = math.max(0.2, (speedKmh / 3.6) * (0.9 / vMax))
    local torqueRamp = map(speedKmh, 0, electricTopSpeed, 5, 1.0)
    if throttlePos <= 0.2 then torqueRamp = 5.0 end

    local tractiveForce = baseGAcc * 1.1 * torqueRamp
    local dragForce = dragCoeff * 0.9 * 1.0E-4 * ((speedKmh / 3.6) ^ 2) * 1.1
    local netForceGs = (tractiveForce - dragForce) * 9.81

    while netForceGs > 0.05 or segmentsCompleted < 4 do
      local speedIncrease = netForceGs * timeStep * 3.6
      speedKmh = speedKmh + speedIncrease
      if electricTopSpeed < speedKmh then
        speedKmh = electricTopSpeed
        if segmentsCompleted >= 4 then break end
      end
      elapsedTime = elapsedTime + timeStep
      distance = distance + (speedKmh / 3600) * timeStep

      throttlePos = math.max(0.2, (speedKmh / 3.6) * (0.9 / vMax))
      torqueRamp = map(throttlePos, 0.2, 1.0, 5, 1.0)
      tractiveForce = baseGAcc * 1.1 * torqueRamp
      dragForce = dragCoeff * 0.9 * 1.0E-4 * ((speedKmh / 3.6) ^ 2) * 1.1
      netForceGs = (tractiveForce - dragForce) * 9.81

      if time100 == nil and speedKmh >= 100 then time100 = elapsedTime end
      if time160 == nil and speedKmh >= 160 then time160 = elapsedTime end
      if quarterMileTime == nil and quarterMileDist <= distance then quarterMileTime = elapsedTime; segmentsCompleted = segmentsCompleted + 1 end
      if halfMileTime == nil and halfMileDist <= distance then halfMileTime = elapsedTime; segmentsCompleted = segmentsCompleted + 1 end
      if fullMileTime == nil and fullMileDist <= distance then fullMileTime = elapsedTime; segmentsCompleted = segmentsCompleted + 1 end
      if mile1_25Time == nil and mile1_25Dist <= distance then mile1_25Time = elapsedTime; segmentsCompleted = segmentsCompleted + 1 end
    end

    if time100 == nil then time100 = "Failed !" end
    if time160 == nil then time160 = "Failed !" end
    local finalSpeed = speedKmh
    local avgTime = (quarterMileTime + halfMileTime + fullMileTime + mile1_25Time) / segmentsCompleted

    if debugFlag then
      print("0-100Km/h: " .. time100, "0-160Km/h: " .. time160)
      print("1/4 Mile Time:" .. quarterMileTime, "1/2 Mile Time:" .. halfMileTime)
      print("1 Mile Time:" .. fullMileTime, "1.1/4 Mile Time:" .. mile1_25Time)
      print("Topspeed: " .. finalSpeed .. " Average Acceleration Time: " .. avgTime)
    end

    return finalSpeed, avgTime
  end
end

--  chaser_getengineptwratio: electric-branch variable roles inferred.
function chaser_getengineptwratio(vehName, forceAcc, forcedAccVal, debugFlag, addExtraGear)
  local data = vehicledata[vehName]
  local cache = globalvehdata[vehName]
  if cache == nil then
    cache = {cachedwheelradius = 0.36}
    print("[C.H.A.S.E.R][WARNING] Failed to access cached data for " .. vehName .. " assuming values for PTW Ratio, calculation will be imprecise.")
  end

  local weightArg = data.weight
  local wheelRadius = cache.cachedwheelradius
  if wheelRadius == nil then
    wheelRadius = 0.36
    print("[C.H.A.S.E.R][WARNING] Failed to access cached data for " .. vehName .. " assuming values for PTW Ratio, calculation will be imprecise.")
  end

  local baseGAcc = data.basegacc
  local turboData = data.turbodata
  if turboData.compressorsize > 0 then
    local increase = calculateAverageTorqueIncrease(turboData.compressorsize, turboData.peakturbodecayboost, turboData.turbodecaypoint, turboData.maxtrboostpmax, turboData.maxtrboostpmin, turboData.maxtrboostpminprct, turboData.maxtrboostpmaxprct, turboData.booststartpoint)
    baseGAcc = baseGAcc + baseGAcc * (increase / 100)
  end

  if forceAcc then baseGAcc = forcedAccVal end

  local torqueCurveData = data.torqueCurve
  local gearRatios = data.gearratios
  local finalDriveArg = data.finaldrive
  local gearCount = data.gearboxammount
  if addExtraGear and gearCount < 9 then gearCount = gearCount + 1 end

  local topSpeedArg = data.topspeed * 0.75
  local peakTorqueIndex, peakTorque = 0, 0
  for i, entry in ipairs(torqueCurveData) do
    if peakTorque < entry.torque then
      peakTorque = entry.torque
      peakTorqueIndex = i
    end
  end

  local isElectric = data.iselectric
  local curve, maxTorque, maxRpm, minRpm = prepareTorqueCurve(torqueCurveData)

  if not isElectric then
    local lowWeight, highWeight = 0.2, 0.8
    local weightedTorqueSum = 0
    for i, entry in ipairs(torqueCurveData) do
      local torqueRatio = entry.torque / peakTorque
      local weighted = lowWeight + torqueRatio * highWeight
      weightedTorqueSum = weightedTorqueSum + baseGAcc * weighted
    end

    local count, torqueSum2 = 0, 0
    for i = 0, 1, 0.001 do
      local rpmMap = map(i, 0.2, 1.0, minRpm, maxRpm)
      local torqueAtRpm = calcTorque(curve, maxTorque, rpmMap)
      torqueSum2 = torqueSum2 + (baseGAcc / 3.333) * torqueAtRpm * i
      count = count + 1
    end

    local avgWeighted = weightedTorqueSum / #torqueCurveData
    local avgTorque2 = torqueSum2 / count
    local score = avgWeighted + avgTorque2

    if debugFlag then
      print("Reference Weight (KG):  " .. math.round(weightArg) .. " Engine Score:  " .. score)
    end

    return score
  else
    local timeVal, torqueTotal, weightTotal = 0, 0, 0
    while timeVal < topSpeedArg * 1.3333333333333333 do
      local vMax = topSpeedArg * 1000 / 3600 * 1.2
      local throttlePos = math.max(0.2, (timeVal / 3.6) * (0.9 / vMax))
      local speedRamp = map(timeVal, 0, topSpeedArg * 1.3333333333333333, 5, 1.0)
      local weighted = baseGAcc * speedRamp
      local weightedTorque = weighted * throttlePos
      torqueTotal = torqueTotal + weightedTorque
      weightTotal = weightTotal + weighted
      timeVal = timeVal + 1
    end
    local avgWeighted2 = torqueTotal / timeVal
    local avgWeightVal = weightTotal / timeVal
    return avgWeightVal + avgWeighted2
  end
end

--  chaser_gethorsepowerandtorque: dyno-curve generator with turbo spool
-- exponential approach curve; field names (rpm/torqueNm/powerHP/speed) are
-- preserved exactly since they're consumed by UI code elsewhere.
function chaser_gethorsepowerandtorque(vehName, forceAcc, forcedAccVal, forcedCompressorSize)
  local data = vehicledata[vehName]
  local baseGAcc = data.basegacc
  local turboData = data.turbodata
  local weightArg = data.weight
  local compressorSize = turboData.compressorsize

  if forceAcc then baseGAcc = forcedAccVal end
  if forcedCompressorSize ~= nil and forcedCompressorSize > 0 then
    compressorSize = forcedCompressorSize
  end

  local torqueCurveData = data.torqueCurve
  local topSpeedArg = data.topspeed * 0.75
  local isElectric = data.iselectric
  local curve, maxTorque, maxRpm, minRpm = prepareTorqueCurve(torqueCurveData)

  if not isElectric then
    local results = {}
    local time, timeStep = 0, 0.05
    local rampDuration = 10
    local boostMax = 1.0
    local turboRampMs = (compressorSize * 110) / 1000
    local prevBoost = -0.9
    local lastTime = 0
    local boostTau, boostFraction, decayFactor = nil, nil, nil

    if compressorSize > 0 then
      decayFactor = map(prevBoost, -0.9, 1.0, 1.0, 0.0)
      boostFraction = turboRampMs * decayFactor
      if boostFraction < 0.001 then boostFraction = 0.001 end
      boostTau = (-math.log(0.01)) / (boostFraction * 1.5)
    end

    while time <= rampDuration do
      time = time + timeStep
      local dt = time - lastTime
      local currentBoost = 0
      if compressorSize > 0 then
        local target = 1.25 - prevBoost
        local growth = 1 - math.exp(-boostTau * dt)
        target = target * growth
        currentBoost = math.min(prevBoost + target, boostMax)
      end

      local rpmProgress = math.min(minRpm + (maxRpm - minRpm) * (time / rampDuration), maxRpm)
      local torqueVal = calcTorque(curve, maxTorque, rpmProgress)
      local rpmNorm = map(rpmProgress, minRpm, maxRpm, 0.2, 1.0)

      local turboCurveVal = 0
      if compressorSize > 0 then
        local mappedCompressor = map(compressorSize, 20, 100, 35, 85)
        turboCurveVal = calculateturbocurve(rpmNorm, mappedCompressor, 35, 0.75, 0.58, 0.33, 10, 30, 0.25)
      end

      local combinedTorque
      if compressorSize > 0 then
        local boostAdd = torqueVal * ((turboCurveVal / 100) * currentBoost)
        combinedTorque = baseGAcc * (torqueVal + boostAdd)
      else
        combinedTorque = baseGAcc * torqueVal
      end

      local force = (combinedTorque ^ 2) * rpmNorm * weightArg
      local hp = force * 0.00134102 / 0.01 * 5.55

      table.insert(results, {rpm = rpmProgress, torqueNm = (hp * 7127) / rpmProgress, powerHP = hp})
    end

    return results
  else
    local time = 0
    local results = {}
    while time < topSpeedArg * 1.3333333333333333 do
      local vMax = topSpeedArg * 1000 / 3600 * 1.2
      local throttlePos = math.max(0.2, (time / 3.6) * (0.9 / vMax))
      local rpmMap = map(throttlePos, 0.2, 1.0, minRpm, maxRpm)
      local speedRamp = map(time, 0, topSpeedArg * 1.3333333333333333, 5, 1.0)
      local torqueVal = baseGAcc * 1.1 * speedRamp
      local force = (torqueVal ^ 2) * throttlePos * weightArg
      local hp = force * 0.00134102 / 0.01 * 5.55
      table.insert(results, {speed = time, torqueNm = (hp * 7127) / rpmMap, powerHP = hp})
      time = time + 1
    end
    return results
  end
end

function chaser_gettraction(vehName, overrideTyre, tyreOverrideValue)
  local data = vehicledata[vehName]
  local tyreModel = data.tyremodel
  if overrideTyre then
    if tyreOverrideValue == nil then return 0 end
    tyreModel = tyreOverrideValue
  end
  return tiredata[tyreModel].peaktraction
end

function chaser_getpp(vehName, useTuning, weightArg, engineName, turboData, unusedFlag, tyreOverride, tyreOverrideVal)
  local data = vehicledata[vehName]
  if data == nil then
    print("[Chaser] " .. vehName .. " Is missing from vehicledata returning default ratings..")
    return {power = 0, acc = 0, speed = 0, grip = 0, pp = 0}
  end

  local isMotorcycle = data.ismotorcycle
  local ptw, avgAccTime, speed, traction

  if useTuning then
    local tunedAcc = chaser_calculatetuningacc(vehName, weightArg, engineName, turboData, tyreOverride)
    ptw = chaser_getengineptwratio(vehName, true, tunedAcc, unusedFlag, tyreOverride)
    speed, avgAccTime = chaser_calcacc(vehName, true, tunedAcc, unusedFlag, tyreOverride)
    traction = chaser_gettraction(vehName, true, tyreOverrideVal)
  else
    ptw = chaser_getengineptwratio(vehName, false, 0, unusedFlag, false)
    speed, avgAccTime = chaser_calcacc(vehName, false, 0, unusedFlag, false)
    traction = chaser_gettraction(vehName)
  end

  local powerScore = map(ptw, minptwratio, maxptwratio, 0, 100)
  local accScore = map(avgAccTime, maxacctime, minacctime, 100, 0)
  local speedScore = map(speed, 0, ppmaxspeedrate, 0, 100)
  local gripScore
  if isMotorcycle then
    gripScore = map(traction, ppminpeakbikegriprate, ppmaxpeakbikegriprate, 0, 100)
  else
    gripScore = map(traction, ppminpeakgriprate, ppmaxpeakgriprate, 0, 100)
  end

  local ppTotal = math.round((powerScore + accScore + speedScore + gripScore) / 4 * 10)

  local rating = {power = powerScore, acc = accScore, speed = speedScore, grip = gripScore, pp = ppTotal}
  vehiclerating = rating
  return rating
end

function chaser_getpptuningnp(vehName, engineName, compressorSize, tyreOverride)
  local baseWeight = vehicledata[vehName].weight
  if compressorSize == nil then compressorSize = 0 end

  local tyreModel = tyreOverride
  if currenttyre == nil then
    tyreModel = vehicledata[vehName].tyremodel
  end

  local turboInfo = {
    compressorsize = compressorSize,
    boosttype = 0,
    peakturbodecayboost = 35,
    turbodecaypoint = 0.75,
    maxtrboostpmax = 0.58,
    maxtrboostpmin = 0.33,
    maxtrboostpminprct = 10,
    maxtrboostpmaxprct = 30,
    booststartpoint = 0.25
  }

  local rating = chaser_getpp(vehName, true, baseWeight, engineName, turboInfo, false, false, tyreModel)

  if currenttyre == nil and compressorSize == nil and engineName == nil then
    rating = chaser_getpp(vehName, false, 0.0, "stock", nil, false, false, nil)
  end

  return rating
end

function chaser_getEngineConfigs()
  return enginedata
end

function GetEngineConfig(engineName)
  return enginedata[engineName]
end

function chaser_getloadstatus()
  return haschaserloaded
end

function chaser_getcurrentrpm()
  return realrpm
end

function chaser_disablechaser()
  if usecustombasevents then
    TriggerEvent("chaser:leftVeh", NetworkGetNetworkIdFromEntity(vehicle))
  else
    TriggerEvent("baseevents:leftVehicle", vehicle)
  end

  haschaserloaded = false
  enableflywheel = false
  enabledifferential = false
  enablemanualtransmission = false

  SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveMaxFlatVel", handlingmaxspeed * 0.75)
  SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveForce", handlingpower)
  SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMax", handlingpeaktraction)
  SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMin", handlingmintraction)
  SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveLateral", handlinglatcurve)
  SetVehicleHighGear(vehicle, handlinggearammount)

  local startTime = GetGameTimer()
  while GetGameTimer() - startTime < 125 do
    Citizen.Wait(0)
    SetVehicleEnginePowerMultiplier(vehicle, 0.0)
  end
end

function chaser_enablechaser()
  chaser_forcereload()
end

function chaser_settransmissionmode(mode)
  local numericMode = tonumber(mode)
  if numericMode > 5 or numericMode < 0 then
    print("[C.H.A.S.E.R] [WARNING] A Invalid transmission id has been used, please check your owners manual for valid ID's. Sequential has been selected by default.", "load")
    transmissionmode = 0
  else
    transmissionmode = numericMode
  end
end

function chaser_isvehicledrifting()
  return currentdriftfactor
end

function chaser_GetEngineBaySizeFromConfig(modelHash)
  local result = nil
  for name, data in pairs(globalvehdata) do
    if GetHashKey(name) == modelHash then
      result = data.engbaysize
      break
    end
  end
  return result
end

function printTable(tbl, indentLevel)
  if not indentLevel then indentLevel = 0 end
  for key, value in pairs(tbl) do
    local prefix = string.rep("  ", indentLevel) .. key .. ": "
    formatting = prefix
    if type(value) == "table" then
      print(prefix)
      printTable(value, indentLevel + 1)
    else
      print(prefix .. tostring(value))
    end
  end
end

RegisterNetEvent("chaser:receiveExistingData")
AddEventHandler("chaser:receiveExistingData", function(existingData)
  if not existingData then
    print("[CLIENT] No existing data received from server")
    existingData = {}
  else
    print("[CLIENT] Received existing data from server")
  end
  local collected = CycleVehiclesAndCollectData(commandType, existingData)
  TriggerServerEvent("chaser:savejson", collected)
end)

--  CycleVehiclesAndCollectData: the "update" merge/prune logic at the end
-- is a literal translation of a dense nested-pairs routine; verify against
-- original before relying on the sync path.
function CycleVehiclesAndCollectData(mode, existingData)
  if not existingData then existingData = {} end

  local allModels = GetAllVehicleModels()
  local newData = {}
  local ped = PlayerPedId()
  local px, py, pz = table.unpack(GetEntityCoords(ped))
  local total = #allModels
  local processed = 0

  for _, modelName in ipairs(allModels) do
    if IsModelInCdimage(modelName) then
      if existingData[modelName] and mode == "none" then
        processed = processed + 1
      else
        RequestModel(modelName)
        local startTime = GetGameTimer()
        local timedOut = false
        while not HasModelLoaded(modelName) do
          if GetGameTimer() - startTime > 5000 then
            timedOut = true
            break
          end
          Citizen.Wait(0)
        end

        if timedOut then
          print("[C.H.A.S.E.R] [WARNING] Vehicle " .. modelName .. " took over 5 seconds to load into memory, this vehicle might be corrupted, or broken.")
          processed = processed + 1
        else
          processed = processed + 1
          local heading = GetEntityHeading(ped)
          local veh = CreateVehicle(modelName, px, py, pz, heading, true, false)
          local vehClass = GetVehicleClass(veh)

          if vehClass <= 7 or (vehClass >= 9 and vehClass < 13) or (vehClass >= 17 and vehClass <= 22) or vehClass == 8 then
            local engBaySize = chaser_getenginebaysize(veh, vehClass)
            local maxFlatVel = GetVehicleHandlingFloat(veh, "CHandlingData", "fInitialDriveMaxFlatVel") * 1.3333333333333333

            local frontBone = vehClass == 8 and "headlight_l" or "bonnet"
            local wheelBone = vehClass == 8 and "headlight_l" or "wheel_lf"
            local seatBone = vehClass == 8 and "headlight_l" or "steeringwheel"

            local hoodDist = getvehiclebonedistance(veh, "chassis_dummy", frontBone, wheelBone, false)
            local hoodOffset = getvehiclebonedistance(veh, "chassis_dummy", frontBone, seatBone, true)
            local driveBiasFront = GetVehicleHandlingFloat(veh, "CHandlingData", "fDriveBiasFront")

            print(modelName)
            local vehInfo = vehicledata[modelName]
            local vehWeight = 0
            local engBaySizeAdjusted = 0

            if vehInfo ~= nil then
              vehWeight = vehInfo.weight
              print(vehWeight)
              if vehWeight >= 1800 then
                engBaySizeAdjusted = 3.1
              elseif vehWeight >= 1400 then
                if vehWeight < 1800 then engBaySizeAdjusted = 2.1 end
              else
                if engBaySize > 2.0 then
                  if vehWeight < 1400 then engBaySizeAdjusted = 1.99 end
                else
                  engBaySizeAdjusted = engBaySize
                end
              end
            end
            print(engBaySizeAdjusted)

            local configData = existingData[modelName]
            local interpSpeedOffset, hoodYOffset, hoodZOffset, camZOffset, hiloMode, motionBlurHoodCam = nil, nil
                        if configData ~= nil then
              interpSpeedOffset = configData.interpolationspeedoffset
              hoodYOffset = configData.hoodyoffset
              hoodZOffset = configData.hoodzoffset
              camZOffset = configData.maincamzoffset
              hiloMode = configData.hashilorangemode
              motionBlurHoodCam = configData.usemotionbluronhoodcam
            end

            local wheelSizes = calculateWheelSizes(veh, vehClass)
            local cachedRadius = 0

            if driveBiasFront == 0 then
              cachedRadius = calculateEffectiveWheelRadius(wheelSizes[6][1], wheelSizes[6][2], wheelSizes[6][3])
            elseif driveBiasFront == 1 then
              cachedRadius = calculateEffectiveWheelRadius(wheelSizes[5][1], wheelSizes[5][2], wheelSizes[5][3])
            else
              cachedRadius = calculateEffectiveWheelRadius(wheelSizes[4][1], wheelSizes[4][2], wheelSizes[4][3])
            end

            if engBaySize > 0 and engBaySize < 100.0 then
              local entry = {
                engbaysize = engBaySizeAdjusted,
                safetopspeed = maxFlatVel,
                model = modelName,
                hoody = hoodDist,
                hoodz = hoodOffset.z,
                hoodyoffset = hoodYOffset,
                hoodzoffset = hoodZOffset,
                interpolationspeedoffset = interpSpeedOffset,
                maincamzoffset = camZOffset,
                usemotionbluronhoodcam = motionBlurHoodCam,
                hashilorangemode = hiloMode,
                hasdct = false,
                cachedwheelradius = cachedRadius,
                thiscarhasnitrous = false,
                nitroustimer = 0
              }
              newData[modelName] = entry
            end
          end

          Citizen.Wait(10)
          DeleteVehicle(veh)
          SetModelAsNoLongerNeeded(modelName)
        end

        print("Processed " .. processed .. "/" .. total .. " vehicles")

        if mode == "update" then
          if existingData[modelName] then
            local newEntry = newData[modelName] or {}
            for key, value in pairs(newEntry) do
              if existingData[modelName][key] == nil then
                existingData[modelName][key] = value
              end
            end
            local currentEntry = existingData[modelName] or {}
            for key, value in pairs(currentEntry) do
              local hasNewValue = newData[modelName] and newData[modelName][key] ~= nil
              if not hasNewValue then
                existingData[modelName][key] = nil
              end
            end
          end
        else
          existingData[modelName] = newData[modelName]
        end
      end
    end
  end

  return existingData
end

function mergeTables(target, source)
  for key, value in pairs(source) do
    if not target[key] then
      target[key] = value
    end
  end
  return target
end

function getvehiclewheelbase(veh)
  local frontPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "wheel_lf"))
  local rearPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, "wheel_lr"))

  local frontVec = {x = frontPos.x, y = frontPos.y, z = frontPos.z}
  local rearVec = {x = rearPos.x, y = rearPos.y, z = rearPos.z}

  local distance = math.sqrt(
    (rearVec.x - frontVec.x) ^ 2 +
    (rearVec.y - frontVec.y) ^ 2 +
    (rearVec.z - frontVec.z) ^ 2
  )

  return math.floor(distance * 10 + 0.5) / 10
end

function getvehiclebonedistance(veh, primaryBoneName, boneNameA, boneNameB, returnVector)
  local boneIndex = GetEntityBoneIndexByName(veh, boneNameA)
  if boneIndex == -1 then
    boneIndex = GetEntityBoneIndexByName(veh, boneNameB)
  end

  if returnVector then
    local primaryPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, primaryBoneName))
    local targetPos = GetWorldPositionOfEntityBone(veh, boneIndex)
    local p1 = {x = primaryPos.x, y = primaryPos.y, z = primaryPos.z}
    local p2 = {x = targetPos.x, y = targetPos.y, z = targetPos.z}
    local diff = {x = p2.x - p1.x, y = p2.y - p1.y, z = p2.z - p1.z}
    return vector3(diff.x, diff.y, diff.z)
  else
    local primaryPos = GetWorldPositionOfEntityBone(veh, GetEntityBoneIndexByName(veh, primaryBoneName))
    local targetPos = GetWorldPositionOfEntityBone(veh, boneIndex)
    local p1 = {x = primaryPos.x, y = primaryPos.y, z = primaryPos.z}
    local p2 = {x = targetPos.x, y = targetPos.y, z = targetPos.z}
    local distance = math.sqrt((p2.x - p1.x) ^ 2 + (p2.y - p1.y) ^ 2 + (p2.z - p1.z) ^ 2)
    return math.floor(distance * 10 + 0.5) / 10
  end
end

function calculateSlipAngle(veh)
  local velocity = GetEntityVelocity(veh)
  local heading = GetEntityHeading(veh)
  local headingRad = math.rad(heading)
  local velocityAngle = math.atan2(velocity.y, velocity.x)
  local slipAngle = velocityAngle - headingRad

  if slipAngle > math.pi then
    slipAngle = slipAngle - (2 * math.pi)
  elseif slipAngle < -math.pi then
    slipAngle = slipAngle + (2 * math.pi)
  end

  return math.deg(slipAngle)
end

--  calculateturbocurve: piecewise linear/quadratic ramp function,
-- preserved with original math structure (variable roles inferred from usage).
function calculateturbocurve(normalizedThrottle, compressorSizeArg, peakDecayBoost, turboDecayPoint, maxTrBoostPMax, maxTrBoostPMin, maxTrBoostPMinPrct, maxTrBoostPMaxPrct, boostStartPoint)
  local x = normalizedThrottle
  local x4 = maxTrBoostPMax
  local x3 = maxTrBoostPMin
  local x2 = compressorSizeArg
  local x8 = boostStartPoint
  local x5 = peakDecayBoost
  local x6 = turboDecayPoint
  local x7 = maxTrBoostPMaxPrct

  local slope = (x7 - x6) / ((x5 - x4) ^ 2)
  local intercept = x6 - slope * ((x4 - x8) ^ 2)

  local slope2 = (compressorSizeArg - x7) / (x3 - x5)
  local intercept2 = compressorSizeArg - slope2 * x3

  local result = 0
  if x < x8 then
    result = 0
  elseif x >= x8 and x4 >= x then
    result = slope * ((x - x8) ^ 2) + intercept
  else
    result = slope2 * x + intercept2
    if compressorSizeArg < result then result = compressorSizeArg end
  end

  local maxRange = slope * ((x4 - x8) ^ 2) + intercept
  local ratio = peakDecayBoost / maxRange
  return result * ratio
end

function loadtiremodel(useCustom, tyreName)
  if useCustom and tyreName ~= "default" then
    if tyreName ~= nil then
      printDebug("Loaded " .. tyreName .. " Tire Model", "load")
      currenttire = tyreName
      lateralcurve = tiredata[tyreName].lateralcurve
      maxtraction = tiredata[tyreName].peaktraction
      mintraction = maxtraction - (maxtraction * 0.1)
      tyrelstractionlossmulti = tiredata[tyreName].lstractionlossmulti
      tyretracitionlossmulti = tiredata[tyreName].tracitionlossmulti
      isusingarcadegripvalues = tiredata[tyreName].usesarcadegripvalues
      tryemodelid = indexOf(tyremodellist, tyremodel)

      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveLateral", lateralcurve)
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMax", maxtraction)
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMin", mintraction)
    else
      printDebug("Loaded Tyre Model from handling", "load")
      currenttire = nil
      lateralcurve = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveLateral")
      maxtraction = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMax")
      mintraction = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMin")
      tyrelstractionlossmulti = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fLowSpeedTractionLossMult")
      tyretracitionlossmulti = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionLossMult")
      isusingarcadegripvalues = false

      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveLateral", lateralcurve)
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMax", maxtraction)
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMin", mintraction)
    end
  else
    printDebug("Loaded Default Tire Model", "load")
    currenttire = nil
    lateralcurve = 22.5
    maxtraction = 2.0
    isusingarcadegripvalues = false
    tyrelstractionlossmulti = 0.15
    tyretracitionlossmulti = 1.0
    mintraction = maxtraction - (maxtraction * 0.1)

    SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveLateral", lateralcurve)
    SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMax", maxtraction)
    SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionCurveMin", mintraction)
  end
end

function setchaserparameters(useDBTuning)
  printDebug("Loading Chaser Global Parameters...", "load")

  if not iselectric then
    printDebug("Base I.C.E Parameters Loaded!", "load")
    SetVehicleHandlingInt(vehicle, "CHandlingData", "strHandlingFlags", 131329)

    if vehiclelayout < 1.0 then
      if vehiclelayout > 0.0 then
        printDebug("AWD LSD'S Activated!", "load")
        SetVehicleHandlingInt(vehicle, "CCarHandlingData", "strAdvancedFlags", 48)
      end
    else
      if vehiclelayout == 0.0 then
        printDebug("RWD LSD'S Activated!", "load")
        SetVehicleHandlingInt(vehicle, "CCarHandlingData", "strAdvancedFlags", 16)
      end
    end
  else
    printDebug("Special Electric Parameters Loaded!", "load")
    if useintegratedhud then starthud(iselectric) end
    SetVehicleHandlingInt(vehicle, "CHandlingData", "strHandlingFlags", 135168)

    if vehiclelayout < 1.0 then
      if vehiclelayout > 0.0 then
        printDebug("Electric Fake AWD LSD'S Activated!", "load")
        SetVehicleHandlingInt(vehicle, "CCarHandlingData", "strAdvancedFlags", 48)
      end
    else
      if vehiclelayout == 0.0 then
        printDebug("Electric Fake RWD LSD'S Activated!", "load")
        SetVehicleHandlingInt(vehicle, "CCarHandlingData", "strAdvancedFlags", 16)
      end
    end
  end

  SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionSpringDeltaMax", 0.1)
  SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionBiasFront", 0.46)
  SetVehicleHandlingVector(vehicle, "CHandlingData", "vecInertiaMultiplier", vector3(1.6, 1.0, 2.5))

  if useDBTuning then
    printDebug("Applying DB Suspension Tuning...", "load")

    if brakecapacity ~= nil then
      if vehclass ~= 8 then
        SetVehicleHandlingFloat(vehicle, "CHandlingData", "fBrakeForce", (maxtraction / 4) * brakecapacity)
        engbrakeforce = (maxtraction / 4) * (brakecapacity * 2)
      else
        SetVehicleHandlingFloat(vehicle, "CHandlingData", "fBrakeForce", (maxtraction / 2) * brakecapacity)
        engbrakeforce = (maxtraction / 2) * (brakecapacity * 2)
      end
    end

    if brakedistribution ~= nil then
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fBrakeBiasFront", brakedistribution)
      frontengbrakedist = brakedistribution
    else
      frontengbrakedist = GetVehicleHandlingFloat(vehicle, "CHandlingData", "fBrakeBiasFront")
    end

    if lstractionlossmulti ~= nil then
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fLowSpeedTractionLossMult", lstractionlossmulti)
    end

    if tracitionlossmulti ~= nil then
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionLossMult", tracitionlossmulti)
    end

    if arbstrenght ~= nil then
      print(arbstrenght)
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fAntiRollBarForce", arbstrenght)
    end

    if arbbiasfront ~= nil then
      print(arbbiasfront)
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fAntiRollBarBiasFront", arbbiasfront)
    end

    if suspensionforce ~= nil then
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fSuspensionForce", suspensionforce)
    end

    if suspensionrebounddamping ~= nil then
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fSuspensionReboundDamp", suspensionrebounddamping)
    end

    if suspensioncompressiondamping ~= nil then
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fSuspensionCompDamp", suspensioncompressiondamping)
    end

    if tyrelstractionlossmulti ~= nil then
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fLowSpeedTractionLossMult", tyrelstractionlossmulti)
    end

    if tyretracitionlossmulti ~= nil then
      SetVehicleHandlingFloat(vehicle, "CHandlingData", "fTractionLossMult", tyretracitionlossmulti)
    end
  end

  ammountwheels = GetVehicleNumberOfWheels(vehicle)

  local wheelLf = GetEntityBoneIndexByName(vehicle, "wheel_lf")
  local wheelRf = GetEntityBoneIndexByName(vehicle, "wheel_rf")
  local wheelLr = 0
  if GetVehicleNumberOfWheels(vehicle) > 2 then
    wheelLr = GetEntityBoneIndexByName(vehicle, "wheel_lr")
  end
  local wheelRr = 0
  if GetVehicleNumberOfWheels(vehicle) > 2 then
    wheelRr = GetEntityBoneIndexByName(vehicle, "wheel_rr")
  end

  wheelboneindexes = {[0] = wheelLf, [1] = wheelRf, [2] = wheelLr, [3] = wheelRr}

  globalwheeldata = calculateWheelSizes(vehicle, vehclass)

  if vehiclelayout == 0 then
    currentwheelradius = calculateEffectiveWheelRadius(globalwheeldata[6][1], globalwheeldata[6][2], globalwheeldata[6][3])
  elseif vehiclelayout == 1 then
    currentwheelradius = calculateEffectiveWheelRadius(globalwheeldata[5][1], globalwheeldata[5][2], globalwheeldata[5][3])
  else
    currentwheelradius = calculateEffectiveWheelRadius(globalwheeldata[4][1], globalwheeldata[4][2], globalwheeldata[4][3])
  end

  if vehclass ~= 8 then
    wheelsizes = {
      [0] = calculateEffectiveWheelRadius(globalwheeldata[0][1], globalwheeldata[0][2], globalwheeldata[0][3]),
      [1] = calculateEffectiveWheelRadius(globalwheeldata[1][1], globalwheeldata[1][2], globalwheeldata[1][3]),
      [2] = calculateEffectiveWheelRadius(globalwheeldata[2][1], globalwheeldata[2][2], globalwheeldata[2][3]),
      [3] = calculateEffectiveWheelRadius(globalwheeldata[3][1], globalwheeldata[3][2], globalwheeldata[3][3])
    }
  else
    wheelsizes = {
      [0] = calculateEffectiveWheelRadius(globalwheeldata[0][1], globalwheeldata[0][2], globalwheeldata[0][3]),
      [1] = calculateEffectiveWheelRadius(globalwheeldata[1][1], globalwheeldata[1][2], globalwheeldata[1][3])
    }
  end

  local minDim, maxDim = GetModelDimensions(GetEntityModel(vehicle))
  minDim = minDim
  maxDim = maxDim
  CarDim = maxDim - minDim
end

function calculateWheelSizes(veh, vehClassArg)
  local wheelCount = GetVehicleNumberOfWheels(veh)
  local results = {}

  local totalWidth, totalProfile, totalDiameter = 0, 0, 0
  local frontCount, rearCount = 0, 0
  local frontWidth, frontProfile, frontDiameter = 0, 0, 0
  local rearWidth, rearProfile, rearDiameter = 0, 0, 0

  for i = 0, wheelCount - 1, 1 do
    local tireWidth = GetVehicleWheelTireColliderWidth(veh, i)
    local tireSize = GetVehicleWheelTireColliderSize(veh, i)
    local rimSize = GetVehicleWheelRimColliderSize(veh, i)

    local widthMm = math.floor(tireWidth * 1000 + 0.5)
    local profilePercent = math.floor(((tireSize - rimSize) * 1000 * 2) + 0.5)
    local aspectRatio = math.floor((profilePercent / widthMm) * 100 + 0.5)
    local rimDiameterInch = math.floor((rimSize * 2 * 39.3701) + 0.5)

    results[i] = {widthMm, aspectRatio, rimDiameterInch}
    totalWidth = totalWidth + widthMm
    totalProfile = totalProfile + aspectRatio
    totalDiameter = totalDiameter + rimDiameterInch

    if vehClassArg ~= 8 and wheelCount > 2 then
      if i < 2 then
        frontWidth = frontWidth + widthMm
        frontProfile = frontProfile + aspectRatio
        frontDiameter = frontDiameter + rimDiameterInch
        frontCount = frontCount + 1
      else
        rearWidth = rearWidth + widthMm
        rearProfile = rearProfile + aspectRatio
        rearDiameter = rearDiameter + rimDiameterInch
        rearCount = rearCount + 1
      end
    elseif i < 1 then
      frontWidth = frontWidth + widthMm
      frontProfile = frontProfile + aspectRatio
      frontDiameter = frontDiameter + rimDiameterInch
      frontCount = frontCount + 1
    else
      rearWidth = rearWidth + widthMm
      rearProfile = rearProfile + aspectRatio
      rearDiameter = rearDiameter + rimDiameterInch
      rearCount = rearCount + 1
    end
  end

  if wheelCount > 0 then
    results[4] = {
      math.floor(totalWidth / wheelCount + 0.5),
      math.floor(totalProfile / wheelCount + 0.5),
      math.floor(totalDiameter / wheelCount + 0.5)
    }
  end

  if frontCount > 0 then
    results[5] = {
      math.floor(frontWidth / frontCount + 0.5),
      math.floor(frontProfile / frontCount + 0.5),
      math.floor(frontDiameter / frontCount + 0.5)
    }
  end

  if rearCount > 0 then
    results[6] = {
      math.floor(rearWidth / rearCount + 0.5),
      math.floor(rearProfile / rearCount + 0.5),
      math.floor(rearDiameter / rearCount + 0.5)
    }
  end

  if wheelCount == 0 then
    for i = 0, 6, 1 do
      results[i] = {0, 0, 0}
    end
  end

  return results
end

function calculateEffectiveWheelRadius(widthMm, aspectRatioPct, rimDiameterInch)
  local widthM = widthMm / 1000
  local sidewallHeight = (aspectRatioPct / 100) * widthM
  local rimRadiusM = rimDiameterInch * 0.0254
  local totalDiameter = rimRadiusM + (2 * sidewallHeight)
  return totalDiameter / 2
end

function RequestScriptAudioBankAsync(bankName)
  local timedOut = false
  SetTimeout(10000, function()
    timedOut = true
  end)

  Citizen.CreateThread(function()
    while true do
      local loaded = RequestScriptAudioBank(bankName, false)
      if loaded then break end
      if timedOut then break end
      Citizen.Wait(0)
    end

    if not timedOut then
      printDebug("Bank " .. bankName .. " Loaded!", "audio")
      table.insert(currentloadedbanks, bankName)
    else
      printDebug("Bank " .. bankName .. " Failed to load!", "audio")
      for key, value in pairs(currentloadedbanks) do
        if value == bankName then
          if type(key) == "number" then
            table.remove(currentloadedbanks, key)
          else
            currentloadedbanks[key] = nil
          end
        end
      end
    end
  end)
end

function CacheSoundBank(refArg, bankNameArg)
  pRef = refArg or 0
  if not refArg then pRef = 0 end

  local fullPath = ""
  if pRef ~= 0 then
    fullPath = fullPath .. pRef .. "/"
  end
  if bankNameArg ~= nil then
    fullPath = fullPath .. bankNameArg
  end
  fullPath = fullPath:lower()

  local alreadyLoaded = false
  for key, value in pairs(currentloadedbanks) do
    if value == fullPath then
      if type(key) == "number" then
        alreadyLoaded = true
      else
        alreadyLoaded = false
      end
    end
  end

  if bankNameArg ~= nil then
    if fullPath ~= lastLoadedBank and not alreadyLoaded then
      RequestScriptAudioBankAsync(fullPath)
      lastLoadedBank = fullPath
    end
  end
end

function PlayEntitySound(entity, soundName, soundSet, refArg, bankNameArg)
  if not refArg then refArg = 0 end
  if not bankNameArg then bankNameArg = 0 end

  local fullPath = ""
  if refArg ~= 0 then
    fullPath = fullPath .. refArg .. "/"
  end
  if bankNameArg ~= nil then
    fullPath = fullPath .. bankNameArg
  end
  fullPath = fullPath:lower()

  local alreadyLoaded = false
  for key, value in pairs(currentloadedbanks) do
    if value == fullPath then
      if type(key) == "number" then
        alreadyLoaded = true
      else
        alreadyLoaded = false
      end
    end
  end

  if bankNameArg ~= nil then
    if fullPath ~= lastLoadedBank and not alreadyLoaded then
      RequestScriptAudioBankAsync(fullPath)
      lastLoadedBank = fullPath
    end
  end

  local soundId = GetSoundId()
  PlaySoundFromEntity(soundId, soundName, entity, refArg, false, bankNameArg)
  ReleaseSoundId(soundId)
  return soundId
end

function playGearshiftSoundAndAnim(gearIndex, isUpshift, transmissionType)
  if transmissionType == 2 then
    local sequentialSounds = {
      "shift_first_01",
      {"shift_second_01", "shift_fourth_01"},
      {"shift_fifth_01", "shift_third_01"},
      {"shift_second_01", "shift_fourth_01"},
      {"shift_fifth_01", "shift_third_01"},
      "shift_reverse_01"
    }

    local index = gearIndex
    if not isUpshift then
      index = (gearIndex + 2) - 1
      if index == 1 then index = 0 end
    end

    if index > 5 then
      local modIndex = index % 2
      if modIndex == 0 then modIndex = 2
      elseif modIndex == 1 then modIndex = 5 end
      local randomPick = math.random(1, 2)
      local sound = sequentialSounds[modIndex][randomPick]
      PlayEntitySound(vehicle, sound, "CHASER_SFX", 0, "TRANSMISSION_SOUNDS")
    elseif index == 0 then
      PlayEntitySound(vehicle, sequentialSounds[6], "CHASER_SFX", 0, "TRANSMISSION_SOUNDS")
    else
      local sound = sequentialSounds[index]
      if type(sound) == "table" then
        sound = sound[math.random(1, 2)]
      end
      PlayEntitySound(vehicle, sound, "CHASER_SFX", 0, "TRANSMISSION_SOUNDS")
    end

    RequestAnimDict("new@anim@cargreabox")
    while not HasAnimDictLoaded("new@anim@cargreabox") do
      Citizen.Wait(0)
    end

    if isUpshift then
      TaskPlayAnim(PlayerPedId(), "new@anim@cargreabox", "gearbox_up", 8.0, -8.0, -1, 48, 0.475, false, false, false)
    else
      TaskPlayAnim(PlayerPedId(), "new@anim@cargreabox", "gearbox_down", 8.0, -8.0, -1, 48, 0.475, false, false, false)
    end
  elseif transmissionType == 0 then
    RequestAnimDict("new@anim@cargreabox")
    while not HasAnimDictLoaded("new@anim@cargreabox") do
      Citizen.Wait(0)
    end

    if isUpshift then
      PlayEntitySound(vehicle, "paddle_up", "CHASER_SFX", 0, "TRANSMISSION_SOUNDS")
      TaskPlayAnim(PlayerPedId(), "new@anim@cargreabox", "paddle_up", 16.0, -16.0, -1, 48, 0.35, false, false, false)
    else
      PlayEntitySound(vehicle, "paddle_down", "CHASER_SFX", 0, "TRANSMISSION_SOUNDS")
      TaskPlayAnim(PlayerPedId(), "new@anim@cargreabox", "paddle_down", 16.0, -16.0, -1, 48, 0.35, false, false, false)
    end
  end
end

function playpedalsfx(controlAction, upSound, downSound, timeoutKey)
  local pedalTimeout = function(soundName, keyArg)
    local camMode = GetFollowPedCamViewMode(player)
    camerapov = camMode
    if vehclass ~= 8 then
      if camerapov == 4 then
        if timeouttable[keyArg] == nil then
          timeouttable[keyArg] = true
          Citizen.SetTimeout(timeouttable[upSound], function()
            timeouttable[keyArg] = nil
          end)
          PlayEntitySound(vehicle, soundName, "CHASER_SFX", 0, "CAR_SOUNDS")
        end
      end
    end
  end

  if IsControlJustPressed(0, controlAction) then
    pedalTimeout(upSound, timeoutKey)
  elseif IsControlJustReleased(0, controlAction) then
    pedalTimeout(downSound, timeoutKey)
  end
end

function lockdifferential(veh)
  SetVehicleHandbrake(veh, true)
  SetVehicleHandbrake(veh, false)
end

function CallDriftScoreboardSkill(message)
  if useintegratedhud then
    SendNUIMessage({action = "driftscore", message = message})
  end
end

function CallDriftScoreboardBank(totalValue)
  if useintegratedhud then
    SendNUIMessage({action = "driftbank", totalvalue = totalValue})
  end
end

--  getSlipAngle: cross-product-based lateral velocity/heading calc,
-- preserved exactly; multi-return usage (angle, positionDelta) kept intact.
function getSlipAngle(veh)
  if positionvector[veh] == nil then
    positionvector[veh] = GetEntityCoords(veh)
  end

  local currentPos = GetEntityCoords(veh)
  local forward = GetEntityForwardVector(veh)
  local frameTime = GetFrameTime()

  local up = vector3(0.0, 0.0, 1.0)
  local right = vector3(
    forward.y * up.z - forward.z * up.y,
    forward.z * up.x - forward.x * up.z,
    forward.x * up.y - forward.y * up.x
  )

  local deltaX = positionvector[veh].x - currentPos.x
  local deltaY = positionvector[veh].y - currentPos.y
  local deltaZ = positionvector[veh].z - currentPos.z

  local velX = deltaX / frameTime
  local velY = deltaY / frameTime
  local velZ = deltaZ / frameTime

  local forwardComponent = velX * forward.x + velY * forward.y
  local rightComponent = velZ

  local angleRad = math.atan(rightComponent / forwardComponent)
  local angleDeg = math.deg(angleRad)

  positionvector[veh] = currentPos
  local velocityVec = vector3(velX, velY, velZ)

  if angleDeg > 0.5 or angleDeg < -0.5 then
    return round(angleDeg, 2), velocityVec
  else
    return 0, velocityVec
  end
end

function convertcentripetalnewtownstoms(lateralAccel, forwardAccel, distArg, wheelbaseArg)
  local lateralNorm = -lateralAccel / wheelbaseArg
  local forwardNorm = forwardAccel / wheelbaseArg
  local zeroComponent = 0

  if lateralNorm ~= lateralNorm then lateralNorm = 0 end
  if forwardNorm ~= forwardNorm then forwardNorm = 0 end

  local x = distArg * lateralNorm
  local y = distArg * forwardNorm
  local z = distArg * zeroComponent

  return vector3(x / wheelbaseArg, y / wheelbaseArg, z / wheelbaseArg)
end

function round(value, decimals)
  decimals = decimals or 0
  local multiplier = 10 ^ decimals
  return math.floor(value * multiplier + 0.5) / multiplier
end

function applyForceToWheel(veh, wheelSide, forceVec)
  ApplyForceToEntity(veh, 0, forceVec.x, forceVec.y, 0.0, 0.0, 0.0, wheelboneindexes[wheelSide], true, true, true, false, true)
end

function interpolate_rpm(startRpm, endRpm, duration, veh)
  local startTime = GetGameTimer()
  currentTime = 0
  while currentTime <= duration do
    Citizen.Wait(0)
    if throttle <= 0 then break end
    currentTime = (GetGameTimer() - startTime) / 1000
    local rpmVal = startRpm + (endRpm - startRpm) * (currentTime / duration)
    SetVehicleCurrentRpm(veh, rpmVal)
  end
  currentTime = 0
end

function getfakefinaldrive(speedKmhArg, finalDriveArg, gearRatioArg)
  local speedMs = speedKmhArg / 3.6
  local avgWheelRadius = (speedMs / wheelsizes[3] + speedMs / wheelsizes[2]) / 2
  local angularVelocity = avgWheelRadius * (60 / (2 * math.pi))
  return finalDriveArg / (angularVelocity * gearRatioArg)
end

function getwheelrotationalspeed(speedKmhArg, wheelIndex)
  local speedMs = speedKmhArg / 3.6
  return speedMs / (wheelsizes[wheelIndex] / 2)
end

function getaveragetraction(veh)
  local t1 = (GetVehicleWheelTractionVectorLength(veh, 0) + GetVehicleWheelTractionVectorLength(veh, 1)) / 2
  local t2 = (GetVehicleWheelTractionVectorLength(veh, 2) + GetVehicleWheelTractionVectorLength(veh, 3)) / 2
  return (t1 + t2) / 2
end

function normalize_x(value, curveVal)
  local scaledCurve = curveVal * 1.625
  return value * (curveVal / scaledCurve)
end

function normalizetractionvectors()
  local x1 = normalize_x(GetVehicleWheelTractionVectorLength(vehicle, 0), lateralcurve)
  local x2 = normalize_x(GetVehicleWheelTractionVectorLength(vehicle, 1), lateralcurve)
  local x3 = normalize_x(GetVehicleWheelTractionVectorLength(vehicle, 2), lateralcurve)
  local x4 = normalize_x(GetVehicleWheelTractionVectorLength(vehicle, 3), lateralcurve)

  SetVehicleWheelTractionVectorLength(vehicle, 0, x1)
  SetVehicleWheelTractionVectorLength(vehicle, 1, x2)
  SetVehicleWheelTractionVectorLength(vehicle, 2, x3)
  SetVehicleWheelTractionVectorLength(vehicle, 3, x4)
end

function getLateralAcceleration(veh)
  local velocity = GetEntityVelocity(veh)
  local speed = math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z)

  local fx, fy, fz = table.unpack(GetEntityForwardVector(veh))
  local dot = velocity.x * fx + velocity.y * fy + velocity.z * fz
  local forwardVelocity = vector3(fx, fy, fz) * dot
  local lateralVelocity = vector3(velocity.x, velocity.y, velocity.z) - forwardVelocity

  local lateralSpeed = math.sqrt(lateralVelocity.x * lateralVelocity.x + lateralVelocity.y * lateralVelocity.y + lateralVelocity.z * lateralVelocity.z)
  return round(lateralSpeed, 3)
end

function deg_to_rad(degrees)
  return degrees * math.pi / 180
end

function localvmag2(vec)
  return vec.x * vec.x + vec.y * vec.y + vec.z * vec.z
end

function steer_force(magnitude, angleDeg)
  local rad = deg_to_rad(angleDeg)
  local x = math.cos(rad) * magnitude
  local y = math.sin(rad) * magnitude
  return x, y
end

--  drawnCOM: debug visualization only, translated as-is (visual/debug tool,
-- no functional impact on vehicle physics).
function drawnCOM()
  local model = GetEntityModel(vehicle)
  local minDim, maxDim = GetModelDimensions(model)

  local p1 = GetOffsetFromEntityInWorldCoords(vehicle, minDim.x, maxDim.y, minDim.z)
  local p2 = GetOffsetFromEntityInWorldCoords(vehicle, minDim.x, maxDim.y, maxDim.z)
  local p3 = GetOffsetFromEntityInWorldCoords(vehicle, maxDim.x, maxDim.y, minDim.z)
  local p4 = GetOffsetFromEntityInWorldCoords(vehicle, maxDim.x, maxDim.y, maxDim.z)
  local p5 = GetOffsetFromEntityInWorldCoords(vehicle, minDim.x, -maxDim.y, minDim.z)
  local p6 = GetOffsetFromEntityInWorldCoords(vehicle, minDim.x, -maxDim.y, maxDim.z)
  local p7 = GetOffsetFromEntityInWorldCoords(vehicle, maxDim.x, -maxDim.y, minDim.z)
  local p8 = GetOffsetFromEntityInWorldCoords(vehicle, maxDim.x, -maxDim.y, maxDim.z)

  DrawLine(p1, p3, 255, 255, 255, 255)
  DrawLine(p2, p4, 255, 255, 255, 255)
  DrawLine(p1, p2, 255, 255, 255, 255)
  DrawLine(p3, p4, 255, 255, 255, 255)
  DrawLine(p5, p7, 255, 255, 255, 255)
  DrawLine(p6, p8, 255, 255, 255, 255)
  DrawLine(p5, p6, 255, 255, 255, 255)
  DrawLine(p7, p8, 255, 255, 255, 255)
  DrawLine(p2, p6, 255, 255, 255, 255)
  DrawLine(p4, p8, 255, 255, 255, 255)
  DrawLine(p1, p5, 255, 255, 255, 255)
  DrawLine(p3, p7, 255, 255, 255, 255)

  local com = centerofmass
  local comA = GetOffsetFromEntityInWorldCoords(vehicle, com.x + offsetx, maxDim.y + 0.5, com.z + offsetz)
  local comB = GetOffsetFromEntityInWorldCoords(vehicle, com.x + offsetx, minDim.y - 0.5, com.z + offsetz)
  DrawLine(comA, comB, 255, 0, 0, 255)

  local comC = GetOffsetFromEntityInWorldCoords(vehicle, minDim.x - 0.5, com.y + offsety, com.z + offsetz)
  local comD = GetOffsetFromEntityInWorldCoords(vehicle, maxDim.x + 0.5, com.y + offsety, com.z + offsetz)
  DrawLine(comC, comD, 255, 0, 0, 255)

  local wheelLfPos = GetWorldPositionOfEntityBone(vehicle, GetEntityBoneIndexByName(vehicle, "wheel_lf"))
  local wheelRfPos = GetWorldPositionOfEntityBone(vehicle, GetEntityBoneIndexByName(vehicle, "wheel_rf"))
  local wheelLrPos = GetWorldPositionOfEntityBone(vehicle, GetEntityBoneIndexByName(vehicle, "wheel_lr"))
  local wheelRrPos = GetWorldPositionOfEntityBone(vehicle, GetEntityBoneIndexByName(vehicle, "wheel_rr"))

  local wheelLfOffset = GetOffsetFromEntityGivenWorldCoords(vehicle, wheelLfPos)
  local wheelRfOffset = GetOffsetFromEntityGivenWorldCoords(vehicle, wheelRfPos)
  local wheelLrOffset = GetOffsetFromEntityGivenWorldCoords(vehicle, wheelLrPos)
  local wheelRrOffset = GetOffsetFromEntityGivenWorldCoords(vehicle, wheelRrPos)

  local frontLeftRc = GetOffsetFromEntityInWorldCoords(vehicle, wheelLfOffset.x - 0.15, wheelLfOffset.y, minDim.z + frontrollcenter + frcoffset)
  local frontRightRc = GetOffsetFromEntityInWorldCoords(vehicle, wheelRfOffset.x + 0.15, wheelRfOffset.y, minDim.z + frontrollcenter + frcoffset)
  local rearLeftRc = GetOffsetFromEntityInWorldCoords(vehicle, wheelLrOffset.x - 0.15, wheelLrOffset.y, minDim.z + rearrollcenter + rrcoffset)
  local rearRightRc = GetOffsetFromEntityInWorldCoords(vehicle, wheelRrOffset.x + 0.15, wheelRrOffset.y, minDim.z + rearrollcenter + rrcoffset)

  DrawLine(frontLeftRc, frontRightRc, 0, 0, 255, 255)
  DrawLine(rearLeftRc, rearRightRc, 0, 0, 255, 255)
end

function upshift()
  if transmissionmode == 1 then
    if atcall == false then goto skip_upshift end
  end
  if inmenu == true then
    if not aplyingconfig then goto skip_upshift end
  end

  if desiredgear == gearammount then
    -- already at max gear
  else
    atcall = false
    if isinacar then
      local modResult = GetVehicleMod(vehicle, 11)
      if modResult >= 0 then modindex = GetVehicleMod(vehicle, 11) end

      if GetPedInVehicleSeat(vehicle, -1) == player then
        if desiredgear < gearammount then
          if transmissionmode < 2 then
            SetVehicleClutch(vehicle, 0.55)
            if transmissionmode == 1 then
              if desiredgear > 1 then Citizen.Wait(175) end
            end
            desiredgear = desiredgear + 1

            if transmissionmode == 0 then
              if normalizedrpm > 0.8 then
                if throttle > 0.85 then
                  if shouldsimdct then
                    isclutchpressed = true
                    clutchengaged = false
                    Citizen.Wait(35)
                    isclutchpressed = false
                    clutchengaged = true
                  end
                end
              end
            end

            if not hastoapplymt then
              playGearshiftSoundAndAnim(desiredgear, true, transmissionmode)
            end
          else
            if transmissionmode == 2 then
              if hastoapplymt then
                desiredgear = desiredgear + 1
                if not hastoapplymt then
                  playGearshiftSoundAndAnim(desiredgear, true, transmissionmode)
                end
              else
                if clutchengaged == false then
                  desiredgear = desiredgear + 1
                  if not hastoapplymt then
                    playGearshiftSoundAndAnim(desiredgear, true, transmissionmode)
                  end
                else
                  local grindSounds = {"grind_01", "grind_02", "grind_03"}
                  PlayEntitySound(vehicle, grindSounds[math.random(1, 3)], "CHASER_SFX", 0, "TRANSMISSION_SOUNDS")

                  local grindStart = GetGameTimer()
                  while GetGameTimer() - grindStart < 500 do
                    SetVehicleClutch(vehicle, 0.1)
                    Citizen.Wait(0)
                    SetVehicleCheatPowerIncrease(vehicle, 0.0)
                    if throttle > 0 then
                      SetVehicleCurrentRpm(vehicle, 1.5)
                    end
                    SetVehicleHandbrake(vehicle, true)
                    Citizen.Wait(1)
                    SetVehicleHandbrake(vehicle, false)
                  end

                  desiredgear = desiredgear + 1
                  if not hastoapplymt then
                    playGearshiftSoundAndAnim(desiredgear, true, transmissionmode)
                  end
                end
              end
            end
          end
        end

        local newAcc = baseacc * 1.1
        newAcc = newAcc * (gearratiotable[desiredgear + 1] / finaldriveadjustmentprct)
        local newMaxSpeed = 0

        if desiredgear == 0 then
          SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveMaxFlatVel", math.floor(topspeedgeartable[1]) * 0.75)
          newMaxSpeed = math.floor(topspeedgeartable[1]) * 0.75
        else
          if desiredgear > gearammount then desiredgear = gearammount end
          SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveMaxFlatVel", math.floor(topspeedgeartable[desiredgear + 1]) * 0.75)
          newMaxSpeed = math.floor(topspeedgeartable[desiredgear + 1]) * 0.75
        end

        if iselectric then
          if desiredgear == 1 then
            SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveForce", newAcc)
          end
        else
          SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveForce", newAcc)
        end

        setMaxSpeed(363.0)
        TriggerServerEvent("chaser:sync", vehnetid, {desiredgear, newMaxSpeed}, 1)

        local powerStart = GetGameTimer()
        while GetGameTimer() - powerStart < 125 do
          Citizen.Wait(0)
          SetVehicleEnginePowerMultiplier(vehicle, 0.51)
        end

        if not hastoapplymt then
          local clutchDuration = math.max(0, math.round(clutchTimer - 125))
          local clutchStart = GetGameTimer()
          while clutchDuration > GetGameTimer() - clutchStart do
            Citizen.Wait(0)
            local elapsed = GetGameTimer() - clutchStart
            if elapsed < clutchDuration / 2 then
              local clutchVal = map(elapsed, 0, clutchDuration / 2, 1.0, 0.0)
              if transmissionmode < 2 then
                DisableControlAction(0, 71, true)
              end
              SetVehicleClutch(vehicle, clutchVal)
            else
              if elapsed >= clutchDuration / 2 then
                local clutchVal = map(elapsed, clutchDuration / 2, clutchDuration, 0.0, 1.0)
                SetVehicleClutch(vehicle, clutchVal)
              end
            end
          end
        end

        if useintegratedhud then
          sendspeedtype = showhudinmph and "mph" or "kmh"
          SendNUIMessage({
            action = "shift",
            currentgear = desiredgear,
            transmissiontype = transmissionmode,
            speedtype = sendspeedtype,
            differential = hilodiffactivated
          })
        end

        printDebug("Current G's: " .. newAcc, "gearshift")

        local modCheck = GetVehicleMod(vehicle, 11)
        if modCheck >= 0 then
          SetVehicleMod(vehicle, 11, modindex)
        end
      end
    end
  end
  ::skip_upshift::
end

function downshift()
  if transmissionmode == 1 then
    if atcall == false then goto skip_downshift end
  end
  if inmenu == true then
    if not aplyingconfig then goto skip_downshift end
  end

  if desiredgear == 0 then
    -- already at lowest gear
  else
    if usedownshiftprotection then
      if transmissionmode == 0 then
        if desiredgear > 1 then
          local targetTopSpeed = topspeedgeartable[desiredgear]
          if speedkmh > targetTopSpeed then
            RequestScriptAudioBank("DLC_HEIST_HACKING_SNAKE_SOUNDS", false)
            PlaySoundFrontend(-1, "Beep_Red", "DLC_HEIST_HACKING_SNAKE_SOUNDS", 1)
            Citizen.Wait(125)
            RequestScriptAudioBank("DLC_HEIST_HACKING_SNAKE_SOUNDS", false)
            PlaySoundFrontend(-1, "Beep_Red", "DLC_HEIST_HACKING_SNAKE_SOUNDS", 1)
          end
        end
      end
    else
      atcall = false
      if isinacar then
        local modResult = GetVehicleMod(vehicle, 11)
        if modResult >= 0 then modindex = GetVehicleMod(vehicle, 11) end

        if GetPedInVehicleSeat(vehicle, -1) == player then
          if transmissionmode < 2 then
            SetVehicleClutch(vehicle, 0.55)
            if desiredgear >= 1 then
              desiredgear = desiredgear - 1
              if not hastoapplymt then
                playGearshiftSoundAndAnim(desiredgear, false, transmissionmode)
              end
            end

            if speedkmh > 25 then
              local brakeStart = GetGameTimer()
              while GetGameTimer() - brakeStart < 115 do
                SetVehicleBrakeLights(vehicle, false)
                if desiredgear == 0 then
                  if IsControlPressed(0, 71) then
                    SetVehicleBrakeLights(vehicle, true)
                  end
                else
                  if IsControlPressed(0, 72) then
                    SetVehicleBrakeLights(vehicle, true)
                  end
                end
                Citizen.Wait(0)
                SetControlNormal(0, 71, 1.0)
              end
            end
            indownshift = true
          else
            if transmissionmode == 2 then
              if hastoapplymt then
                if desiredgear >= 1 then
                  desiredgear = desiredgear - 1
                  if not hastoapplymt then
                    playGearshiftSoundAndAnim(desiredgear, false, transmissionmode)
                  end
                end
              else
                if clutchengaged == false then
                  if desiredgear >= 1 then
                    desiredgear = desiredgear - 1
                    if not hastoapplymt then
                      playGearshiftSoundAndAnim(desiredgear, false, transmissionmode)
                    end
                  end
                else
                  local grindSounds = {"grind_01", "grind_02", "grind_03"}
                  PlayEntitySound(vehicle, grindSounds[math.random(1, 3)], "CHASER_SFX", 0, "TRANSMISSION_SOUNDS")

                  local grindStart = GetGameTimer()
                  while GetGameTimer() - grindStart < 500 do
                    Citizen.Wait(0)
                    SetVehicleClutch(vehicle, 0.1)
                    SetVehicleCheatPowerIncrease(vehicle, 0.0)
                    if throttle > 0 then
                      SetVehicleCurrentRpm(vehicle, 1.5)
                    end
                    SetVehicleHandbrake(vehicle, true)
                    Citizen.Wait(1)
                    SetVehicleHandbrake(vehicle, false)
                  end

                  if desiredgear >= 1 then
                    desiredgear = desiredgear - 1
                    if not hastoapplymt then
                      playGearshiftSoundAndAnim(desiredgear, false, transmissionmode)
                    end
                  end
                end
              end
            end
          end

          local newAcc = baseacc * 1.1
          newAcc = newAcc * (gearratiotable[desiredgear + 1] / finaldriveadjustmentprct)
          local newMaxSpeed = 0

          if desiredgear == 0 then
            SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveMaxFlatVel", math.floor(topspeedgeartable[1]) * 0.75)
            newMaxSpeed = math.floor(topspeedgeartable[1]) * 0.75
          else
            if desiredgear > gearammount then desiredgear = gearammount end
            SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveMaxFlatVel", math.floor(topspeedgeartable[desiredgear + 1]) * 0.75)
            newMaxSpeed = math.floor(topspeedgeartable[desiredgear + 1]) * 0.75
          end

          if iselectric then
            if desiredgear == 1 then
              SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveForce", newAcc)
            end
          else
            SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveForce", newAcc)
          end

          setMaxSpeed(363.0)
          TriggerServerEvent("chaser:sync", vehnetid, {desiredgear, newMaxSpeed}, 1)

          local powerStart = GetGameTimer()
          while GetGameTimer() - powerStart < 125 do
            Citizen.Wait(0)
            SetVehicleEnginePowerMultiplier(vehicle, 0.51)
          end

          local modCheck = GetVehicleMod(vehicle, 11)
          if modCheck >= 0 then
            SetVehicleMod(vehicle, 11, modindex)
          end

          if not hastoapplymt then
            local clutchDuration = math.max(0, math.round(clutchTimer - 125))
            local clutchStart = GetGameTimer()
            while clutchDuration > GetGameTimer() - clutchStart do
              Citizen.Wait(0)
              local elapsed = GetGameTimer() - clutchStart
              if elapsed < clutchDuration / 2 then
                local clutchVal = map(elapsed, 0, clutchDuration / 2, 1.0, 0.0)
                if transmissionmode < 2 then
                  DisableControlAction(0, 71, true)
                end
                SetVehicleClutch(vehicle, clutchVal)
              else
                if elapsed >= clutchDuration / 2 then
                  local clutchVal = map(elapsed, clutchDuration / 2, clutchDuration, 0.0, 1.0)
                  SetVehicleClutch(vehicle, clutchVal)
                end
              end
            end
          end

          if useintegratedhud then
            speedtype = showhudinmph and "mph" or "kmh"
            SendNUIMessage({
              action = "shift",
              currentgear = desiredgear,
              transmissiontype = transmissionmode,
              speedtype = sendspeedtype,
              differential = hilodiffactivated
            })
          end

          printDebug("Current G's: " .. newAcc, "gearshift")
        end
      end
      indownshift = false
    end
  end
  ::skip_downshift::
end

function InitializeTrailFxForVehicle(veh)
  trailFx[veh] = {
    handles = {},
    boneNames = {"taillight_l", "taillight_r"},
    status = "Empty",
    enabled = true,
    offset = {x = 0.0, y = 0.0, z = 0.0},
    rotation = {x = 0.0, y = 0.0, z = 0.0},
    color = {r = 1.0, g = 0.0, b = 0.0},
    scale = 1.0,
    alpha = 1.0,
    evolution = 1.0
  }
end

function StartTrailFx(veh)
  if not (trailFx[veh] and trailFx[veh].enabled) then return end
  if #trailFx[veh].handles >= maxTrailsPerVehicle then return end

  for _, boneName in ipairs(trailFx[veh].boneNames) do
    local boneIndex = GetEntityBoneIndexByName(veh, boneName)
    if boneIndex == -1 then return end

    UseParticleFxAssetNextCall("core")
    local fxHandle = StartParticleFxLoopedOnEntityBone(
      "veh_light_red_trail", veh,
      trailFx[veh].offset.x, trailFx[veh].offset.y, trailFx[veh].offset.z,
      trailFx[veh].rotation.x, trailFx[veh].rotation.y, trailFx[veh].rotation.z,
      boneIndex, trailFx[veh].scale, false, false, false
    )

    SetParticleFxLoopedEvolution(fxHandle, "speed", trailFx[veh].evolution, false)
    SetParticleFxLoopedColour(fxHandle, trailFx[veh].color.r, trailFx[veh].color.g, trailFx[veh].color.b, false)
    SetParticleFxLoopedAlpha(fxHandle, trailFx[veh].alpha)

    table.insert(trailFx[veh].handles, fxHandle)
  end
end

function StopTrailFx(veh)
  if trailFx[veh] then
    for _, handle in ipairs(trailFx[veh].handles) do
      if DoesParticleFxLoopedExist(handle) then
        RemoveParticleFx(handle, false)
      end
    end
    trailFx[veh].handles = {}
  end
end

function UpdateTrailFx(veh)
  if trailFx[veh] then
    for _, handle in ipairs(trailFx[veh].handles) do
      if DoesParticleFxLoopedExist(handle) then
        SetParticleFxLoopedAlpha(handle, trailFx[veh].alpha)
        SetParticleFxLoopedScale(handle, trailFx[veh].scale)
        SetParticleFxLoopedEvolution(handle, "speed", trailFx[veh].evolution, false)
      end
    end
  end
end

function FadeInTrailFx(veh)
  if trailFx[veh] then
    trailFx[veh].alpha = trailFx[veh].alpha + (2.5 * globaldeltatime)
    trailFx[veh].scale = trailFx[veh].alpha
    trailFx[veh].evolution = trailFx[veh].alpha
  end
end

function FadeOutTrailFx(veh)
  if trailFx[veh] then
    trailFx[veh].alpha = trailFx[veh].alpha - (2.5 * globaldeltatime)
    trailFx[veh].scale = trailFx[veh].alpha
    trailFx[veh].evolution = trailFx[veh].alpha
  end
end

function LoopBrakeMode(veh)
  if not (trailFx[veh] and trailFx[veh].enabled and #trailFx[veh].handles ~= 0) then return end

  local status = trailFx[veh].status
  if status == "Empty" then
    trailFx[veh].alpha = 0.0
    trailFx[veh].scale = 0.0
    trailFx[veh].evolution = 0.0
    UpdateTrailFx(veh)
  elseif status == "Full" then
    trailFx[veh].alpha = 1.0
    trailFx[veh].scale = 1.0
    trailFx[veh].evolution = 1.0
    UpdateTrailFx(veh)
  elseif status == "FadingIn" then
    FadeInTrailFx(veh)
    UpdateTrailFx(veh)
  elseif status == "FadingOut" then
    FadeOutTrailFx(veh)
    UpdateTrailFx(veh)
  end
end

function chaser_cachetires()
  for tireName, _ in pairs(tiredata) do
    table.insert(tyremodellist, tireName)
  end
  table.sort(tyremodellist)
end

-- chaser_start: main vehicle-entry initialization routine. Very large;
-- translated section-by-section from the bytecode. The electric-fallback
-- "voltic/raiden/neon/dilettante/khamelion/airtug" hardcoded torque curve
-- block is preserved verbatim as it's used when no DB entry exists.
function chaser_start(vehEntity)
  if vehEntity ~= nil then
    vehicle = vehEntity
    vehnetid = NetworkGetNetworkIdFromEntity(vehicle)
  end

  local isDriverSeat = GetPedInVehicleSeat(vehicle, -1) == player
  local isDisabled = false

  for _, disabledModel in ipairs(disabledvehicles) do
    if GetHashKey(disabledModel) == GetEntityModel(vehicle) then
      isDisabled = true
      break
    end
  end

  local vehClass = GetVehicleClass(vehicle)
  if isDisabled then vehClass = 23 else vehClass = GetVehicleClass(vehicle) end

  if (vehClass <= 7 and isDriverSeat) or (vehClass >= 9 and vehClass < 13 and isDriverSeat)
    or (vehClass >= 17 and vehClass <= 22 and isDriverSeat) or (vehClass == 8 and isDriverSeat) then

    isValidVehicle = true
    vehiclenetid = NetworkGetNetworkIdFromEntity(vehicle)
    statebag = Entity(vehicle).state

    TriggerServerEvent("chaser:sync", vehnetid, {1, 227.25}, 1)

    local foundInDB = false
    for name, data in pairs(vehicledata) do
      if GetHashKey(name) == GetEntityModel(vehicle) then
        dragcoeff = data.dragcoeff
        currentacc = data.basegacc
        stockacc = data.basegacc
        torqueCurve = data.torqueCurve
        canuselaunchcontrol = data.canuselaunchcontrol
        launchcontrolrpm = data.launchcontrolrpm
        originalvehicleweight = data.weight
        tyremodel = data.tyremodel

        if debug then
          printDebug("Vehicle Data: ", "load")
          printDebug("Drag Coefficient: " .. dragcoeff, "load")
        end

        foundInDB = true
        entryname = name
        currentvehiclename = name
        break
      end
    end

    if not foundInDB then
      local electricModels = {"voltic", "raiden", "neon", "dilettante", "khamelion", "airtug"}

      for _, modelName in ipairs(electricModels) do
        if GetHashKey(entryname) == GetHashKey(modelName) or GetEntityModel(vehicle) == GetHashKey(modelName) then
          enablemanualtransmission = false
          enableflywheel = false
          enabledifferential = false
          iselectric = true

          if iselectric then
            dragcoeff = 0.33
            currentacc = 0.368
            stockacc = 0.368
            originalvehicleweight = 2000.0
            currentweight = 2000.0
            cartopspeed = 175
            tyremodel = "default"

            torqueCurve = {
              {rpm = 1000, torque = 360.0}, {rpm = 1500, torque = 360.0},
              {rpm = 2000, torque = 360.0}, {rpm = 2500, torque = 360.0},
              {rpm = 3000, torque = 360.0}, {rpm = 3500, torque = 360.0},
              {rpm = 4000, torque = 358.1}, {rpm = 4500, torque = 318.3},
              {rpm = 5000, torque = 286.5}, {rpm = 5500, torque = 260.4},
              {rpm = 6000, torque = 238.7}, {rpm = 6500, torque = 220.4},
              {rpm = 7000, torque = 204.6}, {rpm = 7500, torque = 191.0},
              {rpm = 8000, torque = 179.0}, {rpm = 8500, torque = 168.5},
              {rpm = 9000, torque = 159.2}
            }

            canuselaunchcontrol = false
            launchcontrolrpm = false

            if debug then
              printDebug("No Entry found, loading default eletric vehicle data: ", "load")
              printDebug("Drag Coefficient: " .. dragcoeff, "load")
            end

            SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDragCoeff", GetDragCoeffGs(cartopspeed, dragcoeff))
            SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDriveMaxFlatVel", 140.0)

            local curve, calculatedMaxTorque, maxRpm, minRpm = prepareTorqueCurve(torqueCurve)
            minRPM = minRpm
            maxRPM = maxRpm
            maxTorque = calculatedMaxTorque or 250.0
            _G.maxTorque = maxTorque
            torqueCurve = curve

            local startTime = GetGameTimer()
            while GetGameTimer() - startTime < 250 do
              Citizen.Wait(0)
              SetVehicleEnginePowerMultiplier(vehicle, 0.51)
            end

            wheelspinassist = false
          end
        end
      end

      if not iselectric then
        dragcoeff = 0.24
        currentacc = 0.5
        stockacc = 0.5
        cartopspeed = 200
        originalvehicleweight = 1590.0
        currentweight = 1590.0

        torqueCurve = {
          {rpm = 1000, torque = 185.7}, {rpm = 1500, torque = 250.0},
          {rpm = 2000, torque = 250.0}, {rpm = 2500, torque = 250.0},
          {rpm = 3000, torque = 250.0}, {rpm = 3500, torque = 250.0},
          {rpm = 4000, torque = 250.0}, {rpm = 4500, torque = 244.0},
          {rpm = 5000, torque = 219.6}, {rpm = 5500, torque = 199.7},
          {rpm = 6000, torque = 183.0}, {rpm = 6500, torque = 168.9},
          {rpm = 6800, torque = 155.7}
        }

        canuselaunchcontrol = false
        launchcontrolrpm = false
        tyremodel = "default"

        if debug then
          printDebug("No Entry found, loading default vehicle data: ", "load")
          printDebug("Drag Coefficient: " .. dragcoeff, "load")
        end

        SetVehicleHandlingFloat(vehicle, "CHandlingData", "fInitialDragCoeff", GetDragCoeffGs(cartopspeed, dragcoeff))
      end
    end

    local curve, calculatedMaxTorque, maxRpm, minRpm = prepareTorqueCurve(torqueCurve)
    minRPM = minRpm
    maxRPM = maxRpm
    maxTorque = calculatedMaxTorque or 250.0
    _G.maxTorque = maxTorque
    torqueCurve = curve

    if iselectric then showevhud = true end

    chaser_cachetires()
    loadvehicleinfo(foundInDB)
    loadcarkvpsave(foundInDB)
    loadtiremodel(true, tyremodel)
    isinacar = true
    setchaserparameters(foundInDB)
    calculatetransmissiongearing()
    loadengine(originalvehicleweight, currentweight, stockacc, false, true)
    CacheSoundBank("CHASER_SFX", "GENERAL_SFX")
    InitializeTrailFxForVehicle(vehicle)

    menuspawnhack = true
    haschaserloaded = true
  else
    isValidVehicle = false
    haschaserloaded = false
    vehicle = -1

    if isDriverSeat then
      printDebug("Unsupported Vehicle Type", "load")
    else
      printDebug("You're not the driver!", "load")
    end

    vehiclenetid = -1
    menuspawnhack = true
  end
end

function chaser_stop(prevVehicle)
  if prevVehicle ~= nil then
    vehicle = -1
    menuspawnhack = false
    isinacar = false
    isValidVehicle = false
    isdriver = false
    pastvehicle = prevVehicle
  end

  if enabledracingcam then chaser_stopcamera() end

  StopSound(globalnitroussoundid)

  local vehClass = GetVehicleClass(pastvehicle)
  if vehClass <= 7 or (vehClass >= 9 and vehClass < 13) or (vehClass >= 17 and vehClass <= 22) or vehClass == 8 then
    local netId = NetworkGetNetworkIdFromEntity(pastvehicle)
    TriggerServerEvent("chaser:sync", netId, {1, 227.25}, 1)
    TriggerServerEvent("chaser:sync", netId, {startValue, fadeDuration, true}, 0)

    SetVehicleHandlingFloat(pastvehicle, "CHandlingData", "fInitialDriveMaxFlatVel", cartopspeed * 0.75)
    SetVehicleHandlingFloat(pastvehicle, "CHandlingData", "fInitialDriveForce", baseacc)

    if handlinggearammount > 0 then
      SetVehicleHighGear(pastvehicle, handlinggearammount)
    end

    StopTrailFx(pastvehicle)
    if trailFx[pastvehicle] ~= nil then
      trailFx[pastvehicle].alpha = 0.0
      trailFx[pastvehicle].status = "Empty"
    end
    trailFx = {}

    currentdrivemode = 0
    desiredgear = 1
    compressorsize = 0
    torqueincrease = 1.0
    tyremodel = nil
    iselectric = false
    haschaserloaded = false
    showevhud = false
    compressorsize = 0
    peakturbodecayboost = 0
    turbodecaypoint = 0.0
    maxtrboostpmax = 0.0
    maxtrboostpmin = 0.0
    maxtrboostpminprct = 0
    maxtrboostpmaxprct = 0
    booststartpoint = 0.0
    boosttype = 3
    stabilitycontrol = false
    tractioncontrol = false
    currentacc = 0
    stockacc = 0
    currentweight = 0
    npcstartValue = 0
    npcfadeDuration = 0
    currentTimennpc = 0
    currentvehiclename = ""
    thiscarhasnitrous = false
  end
end
