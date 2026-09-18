NPX.Commands = NPX.Commands or {}

local UseNUIRender = false

AddEventHandler("np-config:configLoaded", function(configId, config)
    if configId ~= "misc" then return end

    UseNUIRender = config["3dtext.nui.render"]
end)

AddEventHandler("onClientResourceStart", function(resourceName)
    if resourceName ~= GetCurrentResourceName() then return end

    local config = exports["config"]:GetModuleConfig("misc")

    if not config then return end

    UseNUIRender = config["3dtext.nui.render"]
end)

RegisterNetEvent("np-commands:meCommand")
AddEventHandler("np-commands:meCommand", function(user, msg, duration)
    if UseNUIRender then
        local uid = exports["np-scenes"]:AddPlayerDrawEntry(msg, user)

        Citizen.SetTimeout(duration or 5000, function()
            exports["np-scenes"]:RemoveDrawEntry(uid)
        end)
    elseif DoesPlayerExist(user) then
        local monid = PlayerId()
        local sonid = GetPlayerFromServerId(user)

        if #(GetEntityCoords(GetPlayerPed(monid)) - GetEntityCoords(GetPlayerPed(sonid))) < 8.0 and HasEntityClearLosToEntity(GetPlayerPed(monid), GetPlayerPed(sonid), 17) then
            TriggerEvent('DoHudTextCoords', msg, GetPlayerPed(sonid), duration)
        end
    end
end)
