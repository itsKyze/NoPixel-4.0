RegisterNUICallback('np-ui:getPlayerLocation', function(data, cb)
    local ped = PlayerPedId()
    local coords = GetEntityCoords(ped)

    cb({ data = { x = coords.x, y = coords.y, z = coords.z }, meta = { ok = true, message = 'done' } })
end)

RegisterNUICallback('np-ui:markLocation', function(data, cb)
    cb({ data = {}, meta = { ok = true, message = '' } })
    
    SetNewWaypoint(data.coords.x, data.coords.y);

    local blipMarker = AddBlipForCoord(data.coords.x, data.coords.y, data.coords.z)

    SetBlipSprite(blipMarker, 280)
    SetBlipAsShortRange(blipMarker, false)
    BeginTextCommandSetBlipName('STRING')
    SetBlipColour(blipMarker, 4)
    SetBlipScale(blipMarker, 1.2)
    AddTextComponentString('Location from Message')
    EndTextCommandSetBlipName(blipMarker)

    SetTimeout(10000, function()
        if DoesBlipExist(blipMarker) then
            RemoveBlip(blipMarker)
        end
    end)
end)
