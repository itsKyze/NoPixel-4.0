local isDoc = false
local isDIB = false
local isPolice = false
local isMedic = false
local isJudge = false
local isCityCouncil = false
local isSAMADirector = false
local myJob = 'unemployed'

Citizen.CreateThread(function()
  -- exports["np-polyzone"]:AddBoxZone("voting_zone", vector3(-560.24, -206.62, 38.22), 6.0, 1.2, { heading=120, minZ=37.17, maxZ=39.77 })

  exports["np-polyzone"]:AddBoxZone("townhall_court_detector", vector3(356.61, -1635.03, 38.5), 4.4, 2, {
    heading = 50,
    minZ = 37.35,
    maxZ = 42.35
  })

  exports["np-polyzone"]:AddBoxZone("townhall_court_detector", vector3(332.23, -1660.52, 38.49), 4, 2, {
    heading = 320,
    minZ = 37.09,
    maxZ = 41.09
  })

  exports["np-polyzone"]:AddBoxZone("townhall_court_detector", vector3(332.02, -1643.81, 47.24), 4, 2, {
    name = "mt1",
    heading = 320,
    minZ = 46.04,
    maxZ = 50.04
  })

  exports["np-polyzone"]:AddBoxZone("townhall_court_detector", vector3(-561.24, -201.36, 38.23), 4, 2, {
    name = "central_lower",
    heading = 30,
    minZ = 36.43,
    maxZ = 40.43
  })
  
  exports["np-polyzone"]:AddBoxZone("townhall_court_detector", vector3(-561.82, -201.77, 43.36), 4, 2, {
    name = "central_lower_2",
    heading = 30,
    minZ = 41.56,
    maxZ = 45.56
  })

  exports["np-polyzone"]:AddBoxZone("townhall:primeZone", vector3(336.36, -1639.68, 32.73), 48.8, 49.8, {
    heading = 319,
    minZ = 31.13,
    maxZ = 96.13
  })

  exports['interactions']:AddInteraction({
    id = 'court_return',
    coords = { 314.25, -1635.46, 31.54 },
    options = {
      {
        id = 'court_return',
        label = 'Return items',
        event = 'np-gov:townhall:returnItems',
        parameters = {},
      },
    },
    context = {
      flag = { "isNPC" },
      npcId = "court_security",
      distance = {
        draw = 2,
        use = 1.5,
      },
      isEnabled = function()
        return true
      end,
    },
  });

  exports['interactions']:AddInteraction({
    id = 'court_return_b',
    coords = { -554.14, -202.87, 38.23 },
    options = {
      {
        id = 'court_return',
        label = 'Return items',
        event = 'np-gov:townhall:returnItems',
        parameters = {},
      },
    },
    context = {
      flag = { "isNPC" },
      npcId = "court_security_b",
      distance = {
        draw = 2,
        use = 1.5,
      },
      isEnabled = function()
        return true
      end,
    },
  });

  exports["np-polyzone"]:AddBoxZone("court_room", vector3(342.26, -1640.91, 38.5), 15, 9.2, {
    name = "court_room_upper",
    heading = 320,
    minZ = 37.5,
    maxZ = 41.2
  })

  exports["np-polyzone"]:AddBoxZone("court_room", vector3(334.78, -1626.66, 47.24), 24, 18.4, {
    heading = 320,
    minZ = 46.14,
    maxZ = 50.14
  })

  exports["np-polyzone"]:AddBoxZone("court_room", vector3(116.07, 6350.33, 31.43), 40.2, 22.0, {
    heading = 26,
    name = "court_room_paleto",
    minZ = 30.43,
    maxZ = 38.83
  })

  exports["np-polyzone"]:AddBoxZone("court_room", vector3(-571.33, -207.22, 38.22), 18.0, 18.6, {
    name = "court_room_central",
    heading = 29,
    minZ = 38.22,
    maxZ = 47.02
  })
end)

local listening = 0

AddEventHandler("np-gov:townhall:returnItems", function()
  RPC.execute("MetalDetectorItems", false)

  TriggerEvent("DoLongHudText", "Your items have been returned to you.", 1)
end)

local function isExempt()
  return isJudge or isMedic or isDoc or isPolice or isDIB or isCityCouncil or isSAMADirector
end

AddEventHandler("np-polyzone:enter", function(zone)
  if zone == 'townhall:primeZone' then
    TriggerEvent('np:voice:proximity:override', 'townhall', 3, 15.0, 3)
  elseif zone == "townhall_court_detector" and not isExempt() then
    if zone == "townhall_court_detector" then
      TriggerEvent("chatMessage", "SYSTEM ", 2, "Your items have been stored, you can pick them up at the front desk.",
        "feed", false, { i18n = { "Your items have been stored, you can pick them up at the front desk" } })
      TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 3.0, 'metaldetector', 0.05)
    end
    local allowPhone = false
    if myJob == "defender" or myJob == "district attorney" then allowPhone = true end
    local success = RPC.execute("MetalDetectorItems", true, allowPhone)
    exports["inventory"]:SetInventoryDisabled(true)
    TriggerEvent("animation:carry", "none")
    if IsPedArmed(PlayerPedId(), 7) then
      SetCurrentPedWeapon(PlayerPedId(), 0xA2719263, true)
      SetCurrentPedVehicleWeapon(PlayerPedId(), 0xA2719263)
    end
  end
end)

AddEventHandler("np-polyzone:exit", function(zone)
  if zone == 'townhall:primeZone' then
    TriggerEvent('np:voice:proximity:override', 'townhall', 3, -1, -1)
  elseif zone == "voting_zone" or zone == "townhall_court_item_return" then
    exports["np-ui"]:hideInteraction()
    listening = listening + 1
  elseif zone == "townhall_court_detector" and not isExempt() then
    exports["inventory"]:SetInventoryDisabled(false)
    listening = listening + 1
  end
end)

RegisterNetEvent("jobmanager:playerBecameJob")
AddEventHandler("jobmanager:playerBecameJob", function(job, notify)
  if isMedic and job ~= "ems" then isMedic = false end
  if isPolice and job ~= "police" then isPolice = false end
  if isDoc and job ~= "doc" then isDoc = false end
  if isDIB and job ~= "dib" then isDIB = false end
  if isJudge and job ~= "judge" then isJudge = false end
  if isCityCouncil and job ~= "city_council" then isCityCouncil = false end
  if isSAMADirector and job ~= "sama_director" then isSAMADirector = false end

  if job == "police" then isPolice = true end
  if job == "ems" then isMedic = true end
  if job == "doc" then isDoc = true end
  if job == "dib" then isDIB = true end
  if job == "city_council" then isCityCouncil = true end
  if job == "sama_director" then isSAMADirector = true end

  myJob = job
end)

RegisterNetEvent("isJudge")
AddEventHandler("isJudge", function()
  isJudge = true
end)

RegisterNetEvent("isJudgeOff")
AddEventHandler("isJudgeOff", function()
  isJudge = false
end)

AddEventHandler("np-gov:purchaseLicenses", function()
  local context = {
    {
      i18nTitle = true,
      title = "Purchase Weapons License",
      description = "$5,000 + Tax",
      action = "np-gov:purchaseLicenseHandler",
      key = { type = 2, cost = 5000 }
    },
    {
      i18nTitle = true,
      title = "Purchase Hunting License",
      description = "$5,000 + Tax",
      action = "np-gov:purchaseLicenseHandler",
      key = { type = 7, cost = 5000 }
    },
    {
      i18nTitle = true,
      title = "Purchase Fishing License",
      description = "$5,000 + Tax",
      action = "np-gov:purchaseLicenseHandler",
      key = { type = 8, cost = 5000 }
    }
  }
  exports["np-ui"]:showContextMenu(context)
end)

RegisterUICallback("np-gov:purchaseLicenseHandler", function(data, cb)
  local result, message = RPC.execute("np-gov:purchaseLicense", data.key.type, data.key.cost)
  if result then TriggerEvent("DoLongHudText", "Purchased") end
  cb({ data = {}, meta = { ok = true, message = "done" } })
end)

RegisterUICallback("np-ui:getDOJData", function(data, cb)
  local results = RPC.execute("np-gov:getDOJData")
  cb({ data = results, meta = { ok = true, message = "done" } })
end)

RegisterUICallback("np-ui:setDOJStatus", function(data, cb)
  RPC.execute("np-gov:dojApp:setStatus", exports["isPed"]:isPed("myjob"), data.status)
  cb({ data = {}, meta = { ok = true, message = "done" } })
end)

AddEventHandler('np-gov:townhall:openPdActions', function()
  local context = {
    {
      title = 'Raid Actions',
    },
    {
      title = 'Housing/Warehouses',
      description = 'Raid actions for housing',
      icon = 'laptop-house',
      children = {
        {
          title = 'Toggle Lockdown by owner State ID',
          description = 'Will lockdown all properties for State ID',
          action = 'np-gov:townhall:pdActionHandler',
          key = 'ld_housing_cid'
        }
      }
    },
    {
      title = 'Apartments',
      description = 'Raid actions for apartments',
      icon = 'building',
      children = {
        {
          title = 'Lockdown by State ID',
          action = 'np-gov:townhall:pdActionHandler',
          key = 'ld_apartments_cid'
        },
        {
          title = 'Lockdown by Room ID',
          action = 'np-gov:townhall:pdActionHandler',
          key = 'ld_apartments_rid'
        },
        {
          title = 'Remove lockdown by State ID',
          action = 'np-gov:townhall:pdActionHandler',
          key = 'rm_apartments_cid'
        },
        {
          title = 'Remove lockdown by Room ID',
          action = 'np-gov:townhall:pdActionHandler',
          key = 'rm_apartments_rid'
        }
      }
    },
    {
      title = 'Garages',
      description = 'View citizens\' active garages',
      icon = 'parking',
      action = 'np-gov:townhall:pdActionHandler',
      key = 'garages'
    },
    {
      title = 'Vehicles',
      description = 'Raid actions for vehicles',
      icon = 'car',
      children = {
        {
          title = 'Lockdown Vehicles',
          action = 'np-gov:townhall:pdActionHandler',
          key = 'ld_vehicles_cid'
        },
        {
          title = 'Unlock Vehicles',
          action = 'np-gov:townhall:pdActionHandler',
          key = 'rm_vehicles_cid'
        }
      }
    },
    {
      title = 'Business',
      description = 'Raid actions for businesses',
      icon = 'business-time',
      children = {}
    }
  }
  exports['np-ui']:showContextMenu(context)
end)

RegisterUICallback('np-gov:townhall:pdActionHandler', function(data, cb)
  Wait(1) -- prevent ui cursor getting stuck
  local elements = {
    ['hid'] = { name = 'hid', label = 'House ID', icon = 'house-user' },
    ['cid'] = { name = 'cid', label = 'State ID', icon = 'id-card' },
    ['rid'] = { name = 'rid', label = 'Room ID', icon = 'building' },
    ['bname'] = { name = 'name', label = 'Business Name', icon = 'business-time' },
    ['bowner'] = { name = 'owner', label = 'Business Owner', icon = 'id-badge' },
    ['apartments'] = {
      _type = 'select',
      label = 'Building Type',
      name = 'apartments',
      options = {
        {
          id = 1,
          name = 'Alta Street'
        },
        {
          id = 2,
          name = 'Prosperity'
        },
        {
          id = 3,
          name = 'Pillbox Swiss St'
        }
      }
    }
  }

  local actionHandlers = {
    ['ld_vehicles_cid'] = function()
      local elements = {
        elements['cid'],
      }
      local prompt = exports['np-ui']:OpenInputMenu(elements, function(values)
        return values.cid and values.cid:len() > 0
      end)
      if not prompt then return end
      TriggerServerEvent("np:vehicles:togglePlayerLockdown", tonumber(prompt.cid), true)
    end,
    ['rm_vehicles_cid'] = function()
      local elements = {
        elements['cid'],
      }
      local prompt = exports['np-ui']:OpenInputMenu(elements, function(values)
        return values.cid and values.cid:len() > 0
      end)
      if not prompt then return end
      TriggerServerEvent("np:vehicles:togglePlayerLockdown", tonumber(prompt.cid), false)
    end,
    ['ld_housing_cid'] = function()
      local elements = {
        elements['cid'],
      }
      local prompt = exports['np-ui']:OpenInputMenu(elements, function(values)
        return values.cid and values.cid:len() > 0
      end)
      if not prompt then return end
      print('ld_housing_cid', prompt.cid)
      TriggerServerEvent("np-housing:CIDLockdownProperty", tonumber(prompt.cid), true)
    end,
    ['ld_apartments_cid'] = function()
      local elements = {
        elements['cid'],
        elements['apartments'],
      }
      local prompt = exports['np-ui']:OpenInputMenu(elements, function(values)
        return values.cid and values.cid:len() > 0 and values.apartments
      end)
      if not prompt then return end
      TriggerServerEvent("apartment:serverLockdownCID", tonumber(prompt.cid), prompt.apartments)
    end,
    ['ld_apartments_rid'] = function()
      local elements = {
        elements['rid'],
        elements['apartments'],
      }
      local prompt = exports['np-ui']:OpenInputMenu(elements, function(values)
        return values.rid and values.rid:len() > 0 and values.apartments
      end)
      if not prompt then return end
      TriggerServerEvent("apartment:serverLockdown", tonumber(prompt.rid), prompt.apartments, true)
    end,
    ['rm_apartments_cid'] = function()
      local elements = {
        elements['cid'],
        elements['apartments'],
      }
      local prompt = exports['np-ui']:OpenInputMenu(elements, function(values)
        return values.cid and values.cid:len() > 0 and values.apartments
      end)
      if not prompt then return end
      TriggerServerEvent("apartment:serverLockdownCID", tonumber(prompt.cid), prompt.apartments, false)
    end,
    ['rm_apartments_rid'] = function()
      local elements = {
        elements['rid'],
        elements['apartments'],
      }
      local prompt = exports['np-ui']:OpenInputMenu(elements, function(values)
        return values.rid and values.rid:len() > 0 and values.apartments
      end)
      if not prompt then return end
      TriggerServerEvent("apartment:serverLockdown", tonumber(prompt.rid), prompt.apartments, false)
    end,
    ['garages'] = function()
      local elements = {
        elements['cid'],
      }
      local prompt = exports['np-ui']:OpenInputMenu(elements, function(values)
        return values.cid and values.cid:len() > 0
      end)
      if not prompt then return end
      local garages = RPC.execute('np-vehicles:getGaragesForStateId', prompt.cid)
      if not garages then return end
      local context = {
        {
          title = 'Citizen ' .. prompt.cid .. '\'s Garages',
        }
      }
      for _, garage in ipairs(garages) do
        context[#context + 1] = {
          icon = garage.name == 'Housing Garage' and 'map-marked-alt' or 'parking',
          title = garage.name .. ' (' .. garage.id .. ')',
          action = 'np-gov:townhall:setGPSLocation',
          key = { x = garage.x, y = garage.y }
        }
      end
      exports['np-ui']:showContextMenu(context)
    end
  }

  local action = data.key

  if not actionHandlers[action] then
    TriggerEvent('DoLongHudText', 'Invalid action', 2)
    return
  end
  actionHandlers[action]()
  cb({ data = {}, meta = { ok = true, message = 'done' } })
end)

RegisterUICallback('np-gov:townhall:setGPSLocation', function(data, cb)
  cb({ data = {}, meta = { ok = true, message = 'done' } })
  SetNewWaypoint(data.key.x, data.key.y)
  TriggerEvent('DoLongHudText', 'GPS Updated')
end)
