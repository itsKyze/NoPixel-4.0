-- PRE SPAWN
local StunDuration = 8000

local pedId, plyId = PlayerPedId(), PlayerId()

local gameDirty = false
local gameValues = {}

function GetPed()
    return pedId
end
function GetPlayer()
    return plyId
end

function setGameValue(k, v)
    if gameValues[k] == nil or gameValues[k] ~= v then
        gameDirty = true
    end

    gameValues[k] = v
end

exports('setGameValue', setGameValue)

Citizen.CreateThread(function()
    Citizen.Wait(500)
    
    while true do
        if gameDirty then
            gameDirty = false

            SendUIMessage({ source = 'np-nui',  app = 'main', event = 'sync-game-state', data = gameValues });
        end

        Citizen.Wait(1000)
    end
end)

AddEventHandler("np-config:configLoaded", function (configId, config)
    if configId == 'np-police' then
        StunDuration = config["stunDuration"] or 5000
    end
end)


-- CHAR SPAWN
function getCharacterInfo()
    local characterId = exports["isPed"]:isPed("cid")
    local firstName = exports["isPed"]:isPed("firstname")
    local lastName = exports["isPed"]:isPed("lastname")
    local phoneNumber = exports["isPed"]:isPed("phone_number")

    return characterId, firstName, lastName, phoneNumber
end

function sendCharacterData()
    Citizen.CreateThread(function()
        local characterId, firstName, lastName, phoneNumber = getCharacterInfo()
        if not characterId then return end
        local hasBankAccount, bankAccountId = RPC.execute("GetDefaultBankAccount", characterId, true)
        local hasEmailAddress, emailAddress = false, nil
        local character = {
            id = characterId,
            first_name = firstName,
            job = "",
            last_name = lastName,
            number = tostring(phoneNumber),
            bank_account_id = hasBankAccount and bankAccountId or -1,
            server_id = GetPlayerServerId(PlayerId()), -- in game session id
            email = hasEmailAddress and emailAddress or false
        }

        
        local simData = exports['phone']:GetSimCardData()
        local endpointData = exports["np-fiber"]:GetGameDetails()

        SendUIMessage({ source = 'np-nui',  app = 'main', event = 'sync-character', data = { ['character'] = character } });
        SendUIMessage({ source = 'np-nui',  app = 'main', event = 'sync-simcard', data = { ['simcard'] = simData } });
        SendUIMessage({ source = 'np-nui',  app = 'main', event = 'sync-game-state', data = endpointData });
 

        exports["tablet"]:SetTabletState({
            game = endpointData,
        })

        Citizen.Wait(5000)

        TriggerEvent('np-ui:phoneReady')

        TriggerServerEvent('np-ui:phoneReady')
    end)
end

AddEventHandler('np-ui:updateCharacterData', function()
    sendCharacterData()
end)

RegisterNetEvent("np-spawn:characterSpawned")
AddEventHandler("np-spawn:characterSpawned", function()
    Citizen.CreateThread(function()
        sendCharacterData()
        local systemSettings = RPC.execute("GetSystemSettings")
        sendAppEvent("system", systemSettings) -- SYSTEM DATA HERE
    end)
end)

RegisterNetEvent("timeheader")
AddEventHandler("timeheader", function(pHour, pMinutes)
    setGameValue("time", ("%s:%s"):format(pHour > 9 and pHour or "0" .. pHour, pMinutes > 9 and pMinutes or "0" .. pMinutes))
end)


-- Please lua, get yourself a GOD DAMN FUCKING SWITCH CASE FUCKING IDIOT PIECE OF SHIT
function getWeatherIcon(pWeather)
    if pWeather == "EXTRASUNNY" or pWeather == "CLEAR" then
        return "sun"
    elseif pWeather == "THUNDER" then
        return "poo-storm"
    elseif pWeather == "CLEARING" or pWeather == "OVERCAST" then
        return "cloud-sun-rain"
    elseif pWeather == "CLOUD" then
        return "cloud"
    elseif pWeather == "RAIN" then
        return "cloud-rain"
    elseif pWeather == "SMOG" or pWeather == "FOGGY" then
        return "smog"
    end
end

CreateThread(function()
    SetPedMinGroundTimeForStungun(pedId, StunDuration)
    SetEntityProofs(pedId, false, false, false, false, false, true, false, false)
    SetPlayerHealthRechargeMultiplier(plyId, 0.0)
    SetPlayerHealthRechargeLimit(plyId, 0.0)
    SetPedConfigFlag(pedId, 184, true) -- CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat
    SetPedConfigFlag(pedId, 438, true) -- CPED_CONFIG_FLAG_DisableHelmetArmor
    while true do
        SetPedMinGroundTimeForStungun(pedId, StunDuration)
        if GetPed() ~= PlayerPedId() then
            pedId = PlayerPedId()
            SetPedMinGroundTimeForStungun(pedId, StunDuration)
            SetEntityProofs(pedId, false, false, false, false, false, true, false, false)
            SetPedConfigFlag(pedId, 184, true)
            SetPedConfigFlag(pedId, 438, true)
            SetPlayerHealthRechargeMultiplier(plyId, 0.0)
            SetPlayerHealthRechargeLimit(plyId, 0.0)
        end
        if GetPlayer() ~= PlayerId() then
            plyId = PlayerId()
            SetPlayerHealthRechargeMultiplier(plyId, 0.0)
            SetPlayerHealthRechargeLimit(plyId, 0.0)
        end
        SetRadarBigmapEnabled(false, false)
        Wait(2000)
    end
end)

-- DISABLE BLIND FIRING
Citizen.CreateThread(function()
    while true do
        if IsPedInCover(GetPed(), 0) and not IsPedAimingFromCover(GetPed()) then
            DisablePlayerFiring(GetPed(), true)
        end
        Citizen.Wait(0)
    end
end)

AddEventHandler("np-ui:openUrl", function(pUrl)
    SendUIMessage({ source = "np-nui", app = "main", action = "openUrl", url = pUrl })
end)
