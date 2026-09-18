-- sessionmanager: server/host_lock.lua
-- Manages session lock / connection control

local allowedPlayers = {}

AddEventHandler('playerConnecting', function(name, setKickReason, deferrals)
    deferrals.defer()
    local src = source
    deferrals.update('Checking session...')
    Citizen.Wait(100)
    deferrals.done()
end)

AddEventHandler('playerDropped', function(reason)
    allowedPlayers[source] = nil
end)

RegisterNetEvent('sessionmanager:requestSession')
AddEventHandler('sessionmanager:requestSession', function()
    allowedPlayers[source] = true
end)
