local LaserList = {}
local VaultLaserList = {}

Citizen.CreateThread(function()
  local ladderLasers = {
    { vector3(-1288.884, -827.176, 7.35), vector3(-1287.935, -828.376, 7.35), 1.5 },
    { vector3(-1288.73, -827.06, 7.35), vector3(-1287.79, -828.261, 7.35), 1.5 },
    { vector3(-1288.576, -826.947, 7.35), vector3(-1287.645, -828.137, 7.35), 1.5 },
    { vector3(-1288.426, -826.828, 7.35), vector3(-1287.504, -828.015, 7.35), 1.5 },
    { vector3(-1288.275, -826.728, 7.35), vector3(-1287.381, -827.893, 7.35), 1.5 },
    { vector3(-1288.121, -826.645, 7.35), vector3(-1287.285, -827.783, 7.35), 1.5 },

    { vector3(-1288.884, -827.176, 8.35), vector3(-1287.935, -828.376, 8.35), 1.5 },
    { vector3(-1288.73, -827.06, 8.35), vector3(-1287.79, -828.261, 8.35), 1.5 },
    { vector3(-1288.576, -826.947, 8.35), vector3(-1287.645, -828.137, 8.35), 1.5 },
    { vector3(-1288.426, -826.828, 8.35), vector3(-1287.504, -828.015, 8.35), 1.5 },
    { vector3(-1288.275, -826.728, 8.35), vector3(-1287.381, -827.893, 8.35), 1.5 },
    { vector3(-1288.121, -826.645, 8.35), vector3(-1287.285, -827.783, 8.35), 1.5 },

    { vector3(-1288.884, -827.176, 9.35), vector3(-1287.935, -828.376, 9.35), 1.5 },
    { vector3(-1288.73, -827.06, 9.35), vector3(-1287.79, -828.261, 9.35), 1.5 },
    { vector3(-1288.576, -826.947, 9.35), vector3(-1287.645, -828.137, 9.35), 1.5 },
    { vector3(-1288.426, -826.828, 9.35), vector3(-1287.504, -828.015, 9.35), 1.5 },
    { vector3(-1288.275, -826.728, 9.35), vector3(-1287.381, -827.893, 9.35), 1.5 },
    { vector3(-1288.121, -826.645, 9.35), vector3(-1287.285, -827.783, 9.35), 1.5 },

    { vector3(-1288.884, -827.176, 10.35), vector3(-1287.935, -828.376, 10.35), 1.5 },
    { vector3(-1288.73, -827.06, 10.35), vector3(-1287.79, -828.261, 10.35), 1.5 },
    { vector3(-1288.576, -826.947, 10.35), vector3(-1287.645, -828.137, 10.35), 1.5 },
    { vector3(-1288.426, -826.828, 10.35), vector3(-1287.504, -828.015, 10.35), 1.5 },
    { vector3(-1288.275, -826.728, 10.35), vector3(-1287.381, -827.893, 10.35), 1.5 },
    { vector3(-1288.121, -826.645, 10.35), vector3(-1287.285, -827.783, 10.35), 1.5 },
  }

    -- vault lasers
    local startPoints = {
        vector3(-1309.162, -828.126, 15.351), 
        vector3(-1310.884, -829.402, 15.351), 
        vector3(-1313.466, -826.101, 15.351), 
        vector3(-1311.812, -824.707, 15.351), 
    }
    local endPoints = {
        vector3(-1309.007, -827.955, 11.052),
        vector3(-1310.891, -829.523, 11.052), 
        vector3(-1313.569, -826.124, 11.052), 
        vector3(-1311.609, -824.565, 11.052), 
        vector3(-1311.333, -827.153, 11.052), 
    }

    for i = 1, #startPoints do
        VaultLaserList[#VaultLaserList + 1] = Laser.new(startPoints[i], endPoints, {
            travelTimeBetweenTargets = { 4.0, 6.0 },
            waitTimeAtTargets = { 2.5, 3.0 },
            maxDistance = 6.5,
            extensionEnabled = false,
            color = { 255, 0, 0, 50 },
            name = "moving",
        })
    end

    for _, coords in ipairs(ladderLasers) do
        LaserList[#LaserList + 1] = Laser.new(coords[1], { coords[2] }, {
        travelTimeBetweenTargets = { 0.0, 0.0 },
        waitTimeAtTargets = { 2.5, 2.5 },
        maxDistance = coords[3],
        extensionEnabled = false,
        color = { 255, 0, 0, 50 },
        name = "static",
        })
    end

    for _, laser in ipairs(LaserList) do
        laser.onPlayerHit(function(playerBeingHit, hitPos)
            if playerBeingHit then
                TriggerEvent("crime:mazebank:ladderLaserHit")
            end
        end)
    end

    for _, laser in ipairs(VaultLaserList) do
        laser.onPlayerHit(function(playerBeingHit, hitPos)
            if playerBeingHit then
                TriggerEvent("crime:mazebank:vaultLaserHit")
            end
        end)
    end

    exports['np-polyzone']:AddCircleZone('mazebank_lasers', vector3(-1301.89, -823.48, 0.0), 150.0, {
        data = {
            id = "1"
        }
    })
end)

local insideZones = 0
function SetLaserState(state)
    if state and insideZones == 0 then return end

    for _, laser in ipairs(LaserList) do
        laser.setActive(state)
    end

    for _, laser in ipairs(VaultLaserList) do
        laser.setActive(state)
    end
end

AddEventHandler('np-polyzone:enter', function(zone, data)
    if zone == 'mazebank_lasers' then
        insideZones = insideZones + 1
        SetLaserState(true)
    end
end)

AddEventHandler('np-polyzone:exit', function(zone, data)
    if zone == 'mazebank_lasers' then
        insideZones = insideZones - 1
        SetLaserState(false)
    end
end)

RegisterNetEvent("crime:mazebank:laserState", function(pState)
    SetLaserState(pState)
end)
