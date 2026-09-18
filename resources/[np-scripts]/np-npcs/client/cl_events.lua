RegisterNetEvent("np-npcs:set:ped")
AddEventHandler("np-npcs:set:ped", function(pNPCs)
  if type(pNPCs) == "table" then
    for _, ped in ipairs(pNPCs) do
      RegisterNPC(ped, 'np-npcs')
      EnableNPC(ped.id)
    end
  else
    RegisterNPC(ped, 'np-npcs')
    EnableNPC(ped.id)
  end
end)

RegisterNetEvent("np-npcs:set:position")
AddEventHandler("np-npcs:set:position", function(pId, pVectors, pHeading)
  if (type(pVectors) == "table") then
    pVectors = vector3(pVectors.x, pVectors.y, pVectors.z)
  end

  local position = { coords = pVectors, heading = pHeading }
  UpdateNPCData(pId, 'position', position)
end)

RegisterNetEvent("np-npcs:ped:keeper")
AddEventHandler("np-npcs:ped:keeper", function(pArgs, pEntity, pEntityFlags, pEntityCoords)
  exports["stores"]:open(pArgs[1])
end)
RegisterNetEvent("np-npcs:ped:keeperLiqour")
AddEventHandler("np-npcs:ped:keeperLiqour", function(pArgs, pEntity, pEntityFlags, pEntityCoords)
  exports["stores"]:open(pArgs[1])
end)

TriggerServerEvent("np-npcs:location:fetch")

AddEventHandler('np-island:hideBlips', function(pState)
  for _, data in pairs(Handler.npcs) do
    if data["npc"].blipHandler then
      data["npc"].blipHandler:hide(pState)
    end
  end
end)
