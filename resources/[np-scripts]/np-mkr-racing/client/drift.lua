-- chaser_getcurrentdriftscore
-- chaser_getcurrentdriftscoremultiplier
-- chaser_getlastbankedscore
-- chaser_getstackeddriftcount
-- chaser_getwalltapdriftcount
-- chaser_gethighspeeddriftcount

-- chaser_isvehicledrifting

local chaser = exports["legacydmc_chaser_np"]
local currentVehicle = nil
local currentPed = nil
local totalScore = 0
local oldBankedScore = 0
local stopDrifting = false
local goingForwards = true


function startDriftRace()
    chaser:chaser_resetDriftScores()
    totalScore = 0
    oldBankedScore = 0
    if chaser:chaser_getscoreboardsfxmuted() then
        chaser:chaser_togglescoreboardsfx()
    end
    
    local checkpoints = curRace.checkpoints
    Citizen.CreateThread(function() 
        currentVehicle = GetVehiclePedIsIn(PlayerPedId(), false)
        currentPed = PlayerPedId()
        while curRace do
            if currentVehicle == -1 or currentPed ~= GetPedInVehicleSeat(currentVehicle, -1) or stopDrifting then
                Citizen.Wait(100)
            else
                local currentdriftfactor = 0.0
                local deltaTime =  (1.0 - math.pow(0.000001,GetFrameTime()))
                local slipangle, velocityVector = getSlipAngle(currentVehicle)
                local absSlipAngle = math.abs(slipangle)
                local driftmultiplier
                local drifttimemulti = 0.432 -- original 0.5
                if absSlipAngle < 13 then
                    driftmultiplier = lerp(currentdriftfactor,0.0,deltaTime*drifttimemulti)
                elseif absSlipAngle > 25 then
                    driftmultiplier = lerp(currentdriftfactor,1.0,deltaTime*drifttimemulti)
                else
                    driftmultiplier = lerp(currentdriftfactor,map(absSlipAngle, 13, 25, 0.0, 1.0),deltaTime*drifttimemulti)
                end
                currentdriftfactor = driftmultiplier

                if currentdriftfactor > 0.01 then
                    drifting = true
                else
                    drifting = false
                end
            end
            Citizen.Wait(0)
        end
        if not chaser:chaser_getscoreboardsfxmuted() then
            chaser:chaser_togglescoreboardsfx()
        end
    end)
    Citizen.CreateThread(function()
        local oldLastDist = 0
        local lastDist = 0
        local oldNextDist = 0
        local nextDist = 0
        local nextCheckpointPos = nil
        local lastCheckpointPos = nil
        Citizen.Wait(1000)
        while curRace do
            local pos = GetEntityCoords(currentVehicle)
            local skipCheck = false
            if (oldCheckpointIndex ~= currentCheckpointIndex) then
                oldCheckpointIndex = currentCheckpointIndex
                if (currentCheckpointIndex == 1) then
                    nextCheckpointPos = checkpoints[currentCheckpointIndex].pos
                    lastCheckpointPos = curRace.start.pos
                    skipCheck = true
                else
                    lastCheckpointPos = checkpoints[currentCheckpointIndex - 1].pos
                    nextCheckpointPos = checkpoints[currentCheckpointIndex].pos
                    skipCheck = true
                end
            end

            if (skipCheck) then
                lastDist = #(pos - lastCheckpointPos)
                nextDist = #(pos - nextCheckpointPos)
                oldLastDist = lastDist
                oldNextDist = nextDist
                skipCheck = false
            else
                goingForwards = true
                local distToNextCheckpoint = #(pos - nextCheckpointPos)
                local distToLastCheckpoint = #(pos - lastCheckpointPos)
                
                if (distToNextCheckpoint < oldNextDist and distToLastCheckpoint > oldLastDist) then
                    -- Going forward
                    -- print("Going forward")
                elseif (distToLastCheckpoint > oldLastDist and distToNextCheckpoint > oldNextDist) then
                    -- Going forward but not direct
                    -- print("Going forward but not direct")
                elseif (distToNextCheckpoint < oldNextDist) then
                    -- Last effort to check if we are going forward
                    -- print("Last effort to check if we are going forward")
                else
                    -- print("Going backwards")
                    goingForwards = false
                end
                
                if (goingForwards) then
                    oldLastDist = distToLastCheckpoint
                    oldNextDist = distToNextCheckpoint
                    stopDrifting = false
                else
                    stopDrifting = true
                    drifting = false
                    chaser:chaser_setcurrentdriftscore(0)
                    chaser:chaser_setcurrentdriftscoremultiplier(0)
                end
            end
            Citizen.Wait(100)
        end
    end)
    Citizen.CreateThread(function()
        -- Score thread
        while curRace do
            updateHud()
            Citizen.Wait(100)
        end
    end)
end



function updateHud()
    local driftScore, driftScoreMultiplier, lastBankedScore = chaser:chaser_getDriftPoints()
    if (not goingForwards) then
        driftScore = 0
        driftScoreMultiplier = 0
    end
    exports["racing"]:updateRacingUI({
        drift = {
            driftPoints = driftScore,
            driftMultiplier = driftScoreMultiplier,
        }
    })
    if lastBankedScore > 0 and oldBankedScore ~= lastBankedScore then       
        oldBankedScore = lastBankedScore
        totalScore = totalScore + lastBankedScore
        TriggerServerEvent("mkr_racing:updateDriftPositionInfo", curRace.eventId, totalScore)
    end
end

local positionvector = {}
function getSlipAngle(vehicle) -- it returns the slipangle, AND velocity vector!!
    if positionvector[vehicle] == nil then
        positionvector[vehicle] = GetEntityCoords(vehicle)
    end
    
    local entitypos = GetEntityCoords(vehicle)
    local fwvec = GetEntityForwardVector(vehicle)
    local time = GetFrameTime()
    
    -- Calculate the right vector manually
    local upvec = vector3(0.0, 0.0, 1.0)
    local rightvec = vector3(
        fwvec.y * upvec.z - fwvec.z * upvec.y,
        fwvec.z * upvec.x - fwvec.x * upvec.z,
        fwvec.x * upvec.y - fwvec.y * upvec.x
    )
    
    local deltaposx = positionvector[vehicle].x - entitypos.x
    local deltaposy = positionvector[vehicle].y - entitypos.y
    local deltaposz = positionvector[vehicle].z - entitypos.z
    
    local velocityx = deltaposx / time
    local velocityy = deltaposy / time
    local velocityz = deltaposz / time
    
    -- Transform the velocity vector to the vehicle's local space
    local local_velocityx = velocityx * fwvec.x + velocityy * rightvec.x
    local local_velocityy = velocityx * fwvec.y + velocityy * rightvec.y
    local local_velocityz = velocityz -- Assuming no need for transformation in Z direction
    
    local slipAngleRad = math.atan(local_velocityy / local_velocityx)
    local slipAngleDeg = math.deg(slipAngleRad)
    
    positionvector[vehicle] = entitypos

    local velocityVector = vector3(velocityx, velocityy, velocityz)

    if slipAngleDeg > 0.5 or slipAngleDeg < -0.5 then
        return round(slipAngleDeg, 2), velocityVector
    else
        return 0, velocityVector
    end
end

function lerp(a, b, t)
    return a + (b - a) * t
end

function round(num, numDecimalPlaces)
    local mult = 10^(numDecimalPlaces or 0)
    return math.floor(num * mult + 0.5) / mult
end

function map(value, inMin, inMax, outMin, outMax)
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
end