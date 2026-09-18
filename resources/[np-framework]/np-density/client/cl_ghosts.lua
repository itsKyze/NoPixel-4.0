
local Checking, Ack, Ghosted, Zone, IsSpeeding = {}, {}, {}, nil, false

AddEventHandler('np-config:configLoaded', function (pId)
    if (pId ~= 'np-density') then return end

    if Zone == nil then return end

    local playerVehicle = Zone.entity

    Citizen.Wait(1000)

    Zone:destroy()

    Zone = EntityZone:Create(playerVehicle, { scale = { Config.antiGhostScaleX, Config.antiGhostScaleY, 5.0 }, debugPoly = Config.antiGhostDebug })
end)

AddEventHandler('baseevents:vehicleSpeeding', function (isSpeeding)
    IsSpeeding = isSpeeding

    if not isSpeeding then return end

    Ghosted = {}

    Citizen.CreateThread(function ()
        while IsSpeeding and Zone do
            for vehicle, enabled in pairs(Checking) do

                if not enabled then goto continue end

                local coord = GetEntityCoords(vehicle)

                local inside = Zone:isPointInside(coord)

                if inside and not Ghosted[vehicle] then
                    local driver = GetPedInVehicleSeat(vehicle, -1)
                    local isPlayer = driver ~= 0 and IsPedAPlayer(driver)
                    if not isPlayer then
                        NetworkConcealEntity(vehicle, true)
                        Ghosted[vehicle] = true
                        if Config.antiGhostYeetVehicles then
                            TriggerEvent('np-density:yeet', vehicle)
                        end
                    end
                elseif not inside and Ghosted[vehicle] then
                    NetworkConcealEntity(vehicle, false)
                    Ghosted[vehicle] = false
                end

                ::continue::
            end

            Citizen.Wait(IsSpeeding and 0 or 50)
        end

        for vehicle, _ in pairs(Ghosted) do
            NetworkConcealEntity(vehicle, false)
        end
    end)
end)

AddEventHandler('baseevents:enteredVehicle', function (playerVehicle)
    Zone = EntityZone:Create(playerVehicle, { scale = { Config.antiGhostScaleX, Config.antiGhostScaleY, 5.0 }, debugPoly = Config.antiGhostDebug })

    Ack, Checking, Ghosted = {}, {}, {}

    Citizen.CreateThread(function ()
        local playerVehicle = GetVehiclePedIsIn(PlayerPedId(), false)

        while Zone do
            local vehicles = GetGamePool('CVehicle')

            for _, vehicle in ipairs(vehicles) do
                if vehicle ~= playerVehicle and not Ack[vehicle] and not Checking[vehicle] then
                    local driver = GetPedInVehicleSeat(vehicle, -1)

                    local isPlayer = driver ~= 0 and IsPedAPlayer(driver)

                    if not isPlayer then
                        Checking[vehicle] = true
                    end
                end
            end

            Citizen.Wait(IsSpeeding and 0 or 50)
        end
    end)

    Citizen.CreateThread(function ()
        local prevCoords = {}

        while Zone do
            local idle = 500

            for vehicle, v in pairs(Checking) do
                Ack[vehicle] = (Ack[vehicle] or 0) + 1

                if Ack[vehicle] > 5 then
                    Checking[vehicle] = nil
                end
            end

            for vehicle, checks in pairs(Ack) do
                if not DoesEntityExist(vehicle) then
                    Ack[vehicle] = nil

                    Ghosted[vehicle] = nil

                    Checking[vehicle] = nil

                    goto continue
                end

                if checks > 5 then
                    local coords = GetEntityCoords(vehicle)

                    if not prevCoords[vehicle] then prevCoords[vehicle] = coords end

                    local change = #(prevCoords[vehicle] - coords)

                    if change > 100.0 then
                        Ack[vehicle] = 0
                        Checking[vehicle] = true
                    end

                    if Ghosted[vehicle] and not Checking[vehicle] and not Zone:isPointInside(coords) then
                        NetworkConcealEntity(vehicle, false)
                        Ghosted[vehicle] = false
                    end

                    prevCoords[vehicle] = coords
                end

                ::continue::
            end

            Citizen.Wait(idle)
        end
    end)
end)

AddEventHandler('baseevents:leftVehicle', function ()
    if Zone == nil then return end

    Zone:destroy()

    Zone = nil
end)

AddEventHandler('np-density:yeet', function (vehicle)
    local vin = exports['np-vehicles']:GetVehicleIdentifier(vehicle)

    if vin then return end

    exports['np-sync']:SyncedExecution('DeleteEntity', vehicle)
end)
