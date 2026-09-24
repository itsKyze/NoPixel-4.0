-- np-eblips: sv_eblips.lua
local eblips = {}
local blipIdCounter = 0

exports('AddBlip', function(data)
    blipIdCounter = blipIdCounter + 1
    local id = blipIdCounter
    eblips[id] = data
    TriggerClientEvent('np-eblips:addBlip', -1, id, data)
    return id
end)

exports('RemoveBlip', function(id)
    eblips[id] = nil
    TriggerClientEvent('np-eblips:removeBlip', -1, id)
end)

exports('GetAllBlips', function()
    return eblips
end)

RegisterNetEvent('np-eblips:requestAll')
AddEventHandler('np-eblips:requestAll', function()
    for id, data in pairs(eblips) do
        TriggerClientEvent('np-eblips:addBlip', source, id, data)
    end
end)

print('[np-eblips] Server loaded.')
