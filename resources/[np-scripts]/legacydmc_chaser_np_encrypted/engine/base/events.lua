if debug then
    TriggerServerEvent("chaser:ac:fg")
    RegisterNetEvent("chaser:rc:fg")
end

RegisterNetEvent("onClientResourceStart")
AddEventHandler("onClientResourceStart", function(resourceName)
    if resourceName == GetCurrentResourceName() then
        Citizen.Wait(2000)
        player = PlayerPedId()
        playerid = PlayerId()
    end
end)

RegisterNetEvent("legacydmc_chaser_np:chaser_forcereload")
AddEventHandler("legacydmc_chaser_np:chaser_forcereload", function()
    chaser_forcereload()
end)


function ApplyEnginePowerFix(targetVehicle)
    Citizen.CreateThread(function()
        if not DoesEntityExist(targetVehicle) then
            return
        end

        if GetPedInVehicleSeat(targetVehicle, -1) == player then
            return
        end

        if GetVehicleClass(targetVehicle) == 18 then
            return
        end

        local startTime = GetGameTimer()

        while (GetGameTimer() - startTime) < 3000 do
            if not DoesEntityExist(targetVehicle) then
                return
            end

            local vehicleState = Entity(targetVehicle).state

            if vehicleState.currentengine and vehicleState.currentengine[2] then
                SetVehicleHandlingFloat(targetVehicle, "CHandlingData", "fInitialDriveMaxFlatVel", 227.25)

                local fixStartTime = GetGameTimer()
                while (GetGameTimer() - fixStartTime) < 215 do
                    if not DoesEntityExist(targetVehicle) then
                        return
                    end
                    Citizen.Wait(0)
                    SetVehicleEnginePowerMultiplier(targetVehicle, 0.51)
                end

                if DoesEntityExist(targetVehicle) then
                    SetVehicleEnginePowerMultiplier(targetVehicle, 1.0)
                end

                return
            end

            Citizen.Wait(100)
        end
    end)
end



if usecustombasevents then
    RegisterNetEvent("chaser:leftVeh")
    AddEventHandler("chaser:leftVeh", function(vehicleNetId)
        vehicle = -1
        menuspawnhack = false
        isinacar = false
        isValidVehicle = false
        pastvehicle = NetworkGetEntityFromNetworkId(vehicleNetId)
        chaser_stop()
    end)

    RegisterNetEvent("chaser:enteredVehicle")
    AddEventHandler("chaser:enteredVehicle", function(vehicleNetId, seatIndex)
        player = PlayerPedId()
        playerid = PlayerId()
        vehicle = NetworkGetEntityFromNetworkId(vehicleNetId)
        vehnetid = NetworkGetNetworkIdFromEntity(vehicle)
        chaser_start()
        ApplyEnginePowerFix(vehicle)
    end)
else
    RegisterNetEvent("baseevents:leftVehicle")
    AddEventHandler("baseevents:leftVehicle", function(previousVehicle)
        vehicle = -1
        menuspawnhack = false
        isinacar = false
        isValidVehicle = false
        pastvehicle = previousVehicle
        chaser_stop()
    end)

    RegisterNetEvent("baseevents:enteredVehicle")
    AddEventHandler("baseevents:enteredVehicle", function(enteredVehicle)
        player = PlayerPedId()
        playerid = PlayerId()
        vehicle = enteredVehicle
        vehnetid = NetworkGetNetworkIdFromEntity(enteredVehicle)
        EnsureEntityStateBag(enteredVehicle)
        chaser_start()
        ApplyEnginePowerFix(enteredVehicle)
    end)

    AddEventHandler("baseevents:vehicleChangedSeat", function(seatVehicle, oldSeat, newSeat)
        if newSeat == -1 then
            chaser_stop(seatVehicle)
        end

        Citizen.Wait(100)

        if GetPedInVehicleSeat(seatVehicle, -1) == player then
            player = PlayerPedId()
            playerid = PlayerId()
            vehicle = seatVehicle
            vehnetid = NetworkGetNetworkIdFromEntity(seatVehicle)
            chaser_start()
        else
            ApplyEnginePowerFix(seatVehicle)
        end
    end)
end
