local function Info()
    local PlayerPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(PlayerPed, false)
    local IsDriver = GetPedInVehicleSeat(plyVeh, -1) == PlayerPed
    local Car = IsThisModelACar(GetEntityModel(plyVeh))
    local returnValue = plyVeh ~= 0 and plyVeh ~= nil and IsDriver and Car
    return returnValue, plyVeh
end

local Driver, plyVeh = Info()
local isEnabled = true

function toggleDoubleClutchBlock(toggle)
    isEnabled = toggle
end
exports('toggleDoubleClutchBlock', toggleDoubleClutchBlock)

--- if current gear is less than 3 and the speed is over 50, double clutch will be slightly interupted somewhat like you failed timing a double clutch previously.

local active = 0
local maxspeed = 0.0
local carSpeed =  GetEntitySpeed(plyVeh)
Citizen.CreateThread(function()
    while true do
        if Driver then
            local rearair = (GetVehicleWheelSuspensionCompression(plyVeh,0) < 0.07 or GetVehicleWheelSuspensionCompression(plyVeh,1) < 0.07) or (GetVehicleWheelSuspensionCompression(plyVeh,2) < 0.07 or GetVehicleWheelSuspensionCompression(plyVeh,3) < 0.07)
            if rearair and active == 0 then
                carSpeed =  GetEntitySpeed(plyVeh)
                if carSpeed > 30.0 then
                    active = 25
                    SetVehicleMaxSpeed(plyVeh,carSpeed)
                  --  TriggerEvent("DoShortHudText","max speed set to" .. GetEntitySpeed(plyVeh),1) 
                end
            end
            Citizen.Wait(20)
            if active > 1 then
                SetVehicleMaxSpeed(plyVeh,carSpeed)
                active = active - 1
              --  print(active)
              --  print(GetVehicleWheelSuspensionCompression(plyVeh,0))
              --  print(GetVehicleWheelSuspensionCompression(plyVeh,1))
              --  print(GetVehicleWheelSuspensionCompression(plyVeh,2))
              --  print(GetVehicleWheelSuspensionCompression(plyVeh,3))
            else
                if active == 1 then
                    active = active - 1
                    SetVehicleMaxSpeed(plyVeh,0.0)
                   -- TriggerEvent("DoShortHudText",'reset',3) 
                end
                Citizen.Wait(150)
            end
        else
            Citizen.Wait(1000)
        end
    end
end)