CreateThread(function()
  SetScenarioTypeEnabled("WORLD_VEHICLE_STREETRACE", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_SALTON_DIRT_BIKE", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_SALTON", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_POLICE_NEXT_TO_CAR", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_POLICE_CAR", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_POLICE_BIKE", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_MILITARY_PLANES_SMALL", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_MILITARY_PLANES_BIG", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_MECHANIC", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_EMPTY", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_BUSINESSMEN", false)
  SetScenarioTypeEnabled("WORLD_VEHICLE_BIKE_OFF_ROAD_RACE", false)

  local officerSignIn = {
    { 1840.39, 2578.45, 46.01 },
  }

  for k, coords in pairs(officerSignIn) do
    exports['interactions']:AddInteraction({
      id = 'officer_sign_in:' .. k,
      coords = coords,
      options = {
        {
          id = 'officer_sign_in',
          label = 'Duty Action',
          event = 'np-signin:peekAction',
          parameters = { name = "officer" }
        },
      },
      context = {
        distance = {
          draw = 2,
          use = 1.5,
        },
        isEnabled = function()
          return true
        end,
        skipLos = true
      },
    });
  end

  local emsSignIn = {
    { 348.14,  -1404.13, 32.5 },
    { 1833.45, 3672.68,  34.16 }
  }

  for k, coords in pairs(emsSignIn) do
    exports['interactions']:AddInteraction({
      id = 'ems_sign_in:' .. k,
      coords = coords,
      options = {
        {
          id = 'ems_sign_in',
          label = 'Duty Action',
          event = 'np-signin:peekAction',
          parameters = { name = "ems" }
        },
      },
      context = {
        distance = {
          draw = 2,
          use = 1.5,
        },
        isEnabled = function()
          return true
        end,
        skipLos = true
      },
    });
  end

  while not exports['config']:IsConfigReady() do
    Wait(100)
  end
  local emsEnabled = exports["config"]:GetMiscConfig("jobs.ems.enabled")
  if emsEnabled then
    local volunteerEnabled = exports["config"]:GetMiscConfig("jobs.ems.volunteer.enabled")
    -- EMS Volunteer Central

    if volunteerEnabled then
      exports['interactions']:AddInteraction({
        id = 'ems_volunteer_sign_in',
        coords = { 311.93, -1425.62, 29.89 },
        options = {
          {
            id = 'ems_volunteer_sign_in',
            label = 'Duty Action',
            event = 'np-signin:peekAction',
            parameters = { name = "ems_volunteer" }
          },
        },
        context = {
          distance = {
            draw = 2,
            use = 1.5,
          },
          isEnabled = function()
            return true
          end,
          skipLos = true
        },
      });
    end
  end

  local officerAndPublicServiceSignIn = {
    { 1860.96, 3688.42, 34.24 },
    { -543.38, -196.64, 38.33 },
    { -447.46, 6012.4, 31.78 },
  }

  for k, coords in pairs(officerAndPublicServiceSignIn) do
    exports['interactions']:AddInteraction({
      id = 'officer_and_public_services_sign_in:' .. k,
      coords = coords,
      options = {
        {
          id = 'officer_sign_in',
          label = 'Police Duty Action',
          event = 'np-signin:peekAction',
          parameters = { name = "officer" }
        },
        {
          id = 'public_services_sign_in',
          label = 'Public Services Duty Action',
          event = 'np-signin:peekAction',
          parameters = { name = "public_services" }
        },
      },
      context = {
        distance = {
          draw = 2,
          use = 1.5,
        },
        isEnabled = function()
          return true
        end,
        skipLos = true
      },
    });
  end

  local publicServicesSignIn = {
    { 318.75, -1639.65, 32.53 },
  }

  for k, coords in pairs(publicServicesSignIn) do
    exports['interactions']:AddInteraction({
      id = 'public_services_sign_in_' .. k,
      coords = coords,
      options = {
        {
          id = 'public_services_sign_in',
          label = 'Duty Action',
          event = 'np-signin:peekAction',
          parameters = { name = "public_services" }
        },
        {
          id = 'public_services_legal_aid',
          label = 'Become Legal Aid',
          event = 'np-signin:legalAid',
          parameters = {}
        },
      },
      context = {
        distance = {
          draw = 2,
          use = 1.5,
        },
        isEnabled = function()
          return true
        end,
        skipLos = true
      },
    });
  end
end)

function CreateBlipsFromConfig(blips)
  for _, item in pairs(blips) do
    if not item.enabled then goto continue end

    item.blip = AddBlipForCoord(vector3(item.coords.x, item.coords.y, item.coords.z))
    SetBlipSprite(item.blip, item.sprite)
    SetBlipScale(item.blip, 0.8)
    SetBlipColour(item.blip, 3)
    SetBlipAsShortRange(item.blip, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(item.label)
    EndTextCommandSetBlipName(item.blip)

    :: continue ::
  end
end

function findClosestSpawnPoint(pCurrentPosition)
  local closestDistance = -1
  local closestCoord = pCurrentPosition
  for _, location in ipairs(VEHICLE_SPAWN_LOCATIONS) do
    local distance = #(location - pCurrentPosition)
    if closestDistance == -1 or closestDistance > distance then
      closestDistance = distance
      closestCoord = location
    end
  end
  return closestCoord
end
