if debug then

    -- Swap the engine on the current vehicle (requires engine name argument)
    RegisterCommand("engineswap", function(source, args, rawCommand)
        if #args < 1 then
            print("Please insert an engine..")
            return
        end
        local engineName = args[1]
        if GetIsVehicleEngineRunning(vehicle) then
            chaser_setengine(engineName, true, true)
        end
    end, false)

    -- Print stock vehicle performance ratings to console
    RegisterCommand("simulatecar", function(source, args, rawCommand)
        local vehName   = chaser_getvehname()
        local ratings   = chaser_getpp(vehName, false, 0, 0, nil, true, false, nil)
        print("Vehicle Ratings: "  .. math.floor(ratings.pp))
        print("Power: "            .. math.floor(ratings.power) .. " | Acc: " .. math.floor(ratings.acc))
        print("Top Speed: "        .. math.floor(ratings.speed) .. " | Handling: " .. math.floor(ratings.grip))
    end, false)

    -- Print tuned vehicle performance ratings (with current mods applied)
    RegisterCommand("simulatecartuned", function(source, args, rawCommand)
        local turboData = {
            compressorsize      = compressorsize,
            peakturbodecayboost = peakturbodecayboost,
            turbodecaypoint     = turbodecaypoint,
            maxtrboostpmax      = maxtrboostpmax,
            maxtrboostpmin      = maxtrboostpmin,
            maxtrboostpminprct  = maxtrboostpminprct,
            maxtrboostpmaxprct  = maxtrboostpmaxprct,
            booststartpoint     = booststartpoint,
        }

        local tunedAcc  = math.ceil(currentacc * 1000) / 1000
        local stockAcc  = math.ceil(stockacc   * 1000) / 1000

        local vehName   = chaser_getvehname()
        local ratings   = chaser_getpp(
            vehName, true, currentweight, currentengine,
            turboData, true, transmissionupgrade, currenttire
        )

        local hasWeightReduction    = tunedAcc > (stockAcc + stockAcc * 0.01)
        local hasEngineSwap         = currentengine ~= "stock"
        local hasTurbo              = turboData.compressorsize > 0
        local hasTransmission       = carhastransmission >= 0

        print("Weight Reduction: "       .. tostring(hasWeightReduction))
        print("Eng Swap: "               .. tostring(hasEngineSwap))
        print("Turbo: "                  .. tostring(hasTurbo))
        print("Transmission Upgrade: "   .. tostring(hasTransmission))
        print("Vehicle Ratings: "        .. math.floor(ratings.pp))
        print("Power: "                  .. math.floor(ratings.power) .. " | Acc: " .. math.floor(ratings.acc))
        print("Top Speed: "              .. math.floor(ratings.speed) .. " | Handling: " .. math.floor(ratings.grip))
    end, false)

    -- Set the transmission mode by id argument
    RegisterCommand("settransmissionid", function(source, args, rawCommand)
        if #args < 1 then
            print("Please insert an id..")
            return
        end
        local transmissionId = args[1]
        if GetIsVehicleEngineRunning(vehicle) then
            chaser_settransmissionmode(transmissionId)
        end
    end, false)

    -- Install nitrous with the specified duration argument
    RegisterCommand("setnitrous", function(source, args, rawCommand)
        if #args < 1 then
            print("Please insert a nitrous time")
            return
        end
        local nitrousTime = args[1]
        if GetIsVehicleEngineRunning(vehicle) then
            chaser_setnitrous(true, nitrousTime, 1.0)
        end
    end, false)

    -- Remove nitrous from the current vehicle
    RegisterCommand("removenitrous", function(source, args, rawCommand)
        if GetIsVehicleEngineRunning(vehicle) then
            chaser_setnitrous(false, 0, 0.0)
        end
    end, false)

    -- Disable the CHASER system entirely
    RegisterCommand("killchaser", function(source, args, rawCommand)
        chaser_disablechaser()
    end, false)

    -- Re-enable the CHASER system
    RegisterCommand("unkillchaser", function(source, args, rawCommand)
        chaser_enablechaser()
    end, false)

    -- Start the race camera
    RegisterCommand("startracecam", function(source, args, rawCommand)
        chaser_startcamera()
    end, false)

    -- Stop the race camera
    RegisterCommand("stopracecam", function(source, args, rawCommand)
        chaser_stopcamera()
    end, false)

    -- Toggle scoreboard SFX mute
    RegisterCommand("mutescoreboard", function(source, args, rawCommand)
        mutescoreboardsfx = not mutescoreboardsfx
    end, false)

    -- Stress-test chaser_getpp against every vehicle in vehicledata and report timing
    RegisterCommand("stresstest", function(source, args, rawCommand)
        local vehicleCount  = 0
        local startTime     = GetGameTimer()

        for vehicleName, _ in pairs(vehicledata) do
            chaser_getpp(vehicleName, false, 0, 0, nil, false, false, nil)
            vehicleCount = vehicleCount + 1
            Citizen.Wait(0)
        end

        local elapsed = GetGameTimer() - startTime
        print("Stress tested " .. vehicleCount .. " vehicles")
        print("In: " .. elapsed .. "ms | " .. elapsed / 1000 .. "s")
    end, false)

    -- Print current engine swap data for the active vehicle
    RegisterCommand("getenginedata", function(source, args, rawCommand)
        if GetIsVehicleEngineRunning(vehicle) then
            chaser_getengineswapdata()
        end
    end, false)

    -- Print the full torque curve for the current vehicle and compressor setup
    RegisterCommand("gettorquecurve", function(source, args, rawCommand)
        if GetIsVehicleEngineRunning(vehicle) then
            local vehName       = chaser_getvehname()
            local torqueCurve   = chaser_gethorsepowerandtorque(vehName, false, nil, compressorsize)
            printTable(torqueCurve)
        end
    end, false)

    -- Override vehicle weight
    RegisterCommand("setweight", function(source, args, rawCommand)
        if #args < 1 then
            print("Please insert an weight..")
            return
        end
        local newWeight = args[1]
        if GetIsVehicleEngineRunning(vehicle) then
            chaser_setweight(newWeight)
        end
        print()
    end, false)

    -- Toggle telemetry overlay
    RegisterCommand("telemetry", function(source, args, rawCommand)
        telemetry = not telemetry
    end, false)

    -- Toggle 0-100 km/h timer calculation
    RegisterCommand("0100time", function(source, args, rawCommand)
        if shouldcalc0100 then
            printDebug("Telemetry Already Enabled, Please Finish The Current Metrics!", "tools")
            printDebug("The Next Metric Has Been Disabled.", "tools")
        end
        shouldcalc0100 = not shouldcalc0100
    end, false)

end -- end debug block

-- ===================== ALWAYS-REGISTERED COMMANDS =====================

-- Handle first startup: sets commandType ("overwrite" / "update" / "none") and requests server data
RegisterCommand("chaserfirststartup", function(source, args, rawCommand)
    local mode = args[1]
    if mode == "overwrite" then
        commandType = "overwrite"
    elseif mode == "update" then
        commandType = "update"
    else
        commandType = "none"
    end
    TriggerServerEvent("chaser:requestExistingData")
end, false)

-- Toggle debug log output; also enables/disables sub-category logs
RegisterCommand("chasershowdebuglogs", function(source, args, rawCommand)
    showdebuglogs = not showdebuglogs
    if showdebuglogs then
        print("[C.H.A.S.E.R] [DEBUG] C.H.A.S.E.R Build " .. buildversion)
        loaddebuglog    = true
        driftdebuglog   = true
        assistsdebuglog = true
    else
        print("[C.H.A.S.E.R] [DEBUG] Debug Disabled. ")
        loaddebuglog    = false
        driftdebuglog   = false
        assistsdebuglog = false
    end
end, false)


RegisterCommand("\240\159\143\142\239\184\143\226\154\153\239\184\143", function(source, args, rawCommand)
    if not IsPedInAnyVehicle(player, false) then return end
    if GetPedInVehicleSeat(vehicle, -1) ~= player then return end
    if not GetIsVehicleEngineRunning(vehicle) then return end

    if canuselaunchcontrol then
        launchcontrolmode = not launchcontrolmode
        if useintegratedhud then
            lcstate = launchcontrolmode and "on" or "off"
        end
    end
    printDebug("Launch Control is: " .. tostring(launchcontrolmode), "tools")
end, false)


RegisterCommand("\240\159\164\150\226\154\153\239\184\143", function(source, args, rawCommand)
    if not IsPedInAnyVehicle(player, false) then return end
    if GetPedInVehicleSeat(vehicle, -1) ~= player then return end
    if not GetIsVehicleEngineRunning(vehicle) then return end

    -- AT gear lock only applies in automatic mode (transmissionmode == 1) and non-electric vehicles
    if transmissionmode == 1 and not iselectric then
        downhillenginebrakeassist = not downhillenginebrakeassist
    end
    printDebug("AT Gearlock is: " .. tostring(downhillenginebrakeassist), "tools")
end, false)


RegisterCommand("HL\226\154\153\239\184\143", function(source, args, rawCommand)
    if not IsPedInAnyVehicle(player, false) then return end
    if GetPedInVehicleSeat(vehicle, -1) ~= player then return end
    if not GetIsVehicleEngineRunning(vehicle) then return end

    if hashilodiff then
        chaser_togglehilo()
    end
end, false)


RegisterCommand("CTM\226\154\153\239\184\143", function(source, args, rawCommand)
    if IsPauseMenuActive() then return end
    if GetIsVehicleEngineRunning(vehicle) then
        chaser_ctm()
    end
end, false)


RegisterCommand("TC\226\154\153\239\184\143", function(source, args, rawCommand)
    if not IsPedInAnyVehicle(player, false) then return end
    if GetPedInVehicleSeat(vehicle, -1) ~= player then return end
    if not GetIsVehicleEngineRunning(vehicle) then return end

    tractioncontrol = not tractioncontrol

    TriggerServerEvent("chaser:set:assists:meta", {
        vehicleId   = vehiclenetid,
        wsastate    = wheelspinassist,
        tcsstate    = tractioncontrol,
        escstate    = stabilitycontrol,
        ctmstate    = (currentdrivemode == 1),
    })

    if useintegratedhud and isinacar then
        if tractioncontrol then
            SendNUIMessage({ action = "showassist", assist = "tcs" })
        else
            SendNUIMessage({ action = "hideassist", assist = "tcs" })
        end
    end

    printDebug("TC is: " .. tostring(tractioncontrol), "tools")
end, false)


RegisterCommand("ESC\226\154\153\239\184\143", function(source, args, rawCommand)
    if not IsPedInAnyVehicle(player, false) then return end
    if GetPedInVehicleSeat(vehicle, -1) ~= player then return end
    if not GetIsVehicleEngineRunning(vehicle) then return end

    stabilitycontrol = not stabilitycontrol

    TriggerServerEvent("chaser:set:assists:meta", {
        vehicleId   = vehiclenetid,
        wsastate    = wheelspinassist,
        tcsstate    = tractioncontrol,
        escstate    = stabilitycontrol,
        ctmstate    = (currentdrivemode == 1),
    })

    if useintegratedhud and isinacar then
        if stabilitycontrol then
            SendNUIMessage({ action = "showassist", assist = "esc" })
        else
            SendNUIMessage({ action = "hideassist", assist = "esc" })
        end
    end

    printDebug("ESC is: " .. tostring(stabilitycontrol), "tools")
end, false)


RegisterCommand("\240\159\149\185\239\184\143\240\159\147\141", function(source, args, rawCommand)
    if IsPauseMenuActive() then return end
    if GetIsVehicleEngineRunning(vehicle) then
        upshift()
    end
end, false)

RegisterCommand("\240\159\149\185\239\184\143\240\159\147\141-", function(source, args, rawCommand)
    if IsPauseMenuActive() then return end
    if GetIsVehicleEngineRunning(vehicle) then
        downshift()
    end
end, false)


RegisterCommand("\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", function(source, args, rawCommand)
    -- intentionally empty; reserved keybind
end, false)

-- Open the CHASER debug menu (only available to the driver)
RegisterCommand("chaserdebug", function(source, args, rawCommand)
    if not IsPedInAnyVehicle(player, false) then return end
    if GetPedInVehicleSeat(vehicle, -1) == player then
        TriggerServerEvent("chaser:rq:menu")
    end
end, false)


RegisterCommand("+\240\159\149\185\239\184\143\226\154\153\239\184\143", function(source, args, rawCommand)
    if IsPauseMenuActive() then return end
    if not GetIsVehicleEngineRunning(vehicle) then return end

    -- Only engage clutch in manual transmission mode (transmissionmode == 2)
    if transmissionmode == 2 then
        isclutchpressed = true
        clutchengaged   = false
        setMaxSpeed(363.0)
    end
end, false)


RegisterCommand("-\240\159\149\185\239\184\143\226\154\153\239\184\143", function(source, args, rawCommand)
    if IsPauseMenuActive() then return end
    if not IsPedInAnyVehicle(player, false) then return end
    if GetPedInVehicleSeat(vehicle, -1) ~= player then return end
    if not GetIsVehicleEngineRunning(vehicle) then return end
    if desiredgear < 0 then return end

    if transmissionmode == 2 then
        isclutchpressed = false
        local slipAngle = calculateSlipAngle(vehicle)

        -- Auto-blip throttle on clutch release when RPM is high enough and slip angle is within range
        local inSlipRange = (normalizedrpm >= 0.95 and slipAngle < 80)
                         or (normalizedrpm >= 0.95 and slipAngle > -80)

        if inSlipRange then
            SetControlNormal(0, 76, 1.0)
        end

        SetVehicleClutch(vehicle, 1.0)
        clutchengaged = true
    end
end, false)


RegisterCommand("+\240\159\147\183", function(source, args, rawCommand)
    if IsPauseMenuActive() then return end
    if IsPedInAnyVehicle(player, false) then
        lockcamposition = true
    end
end, false)


RegisterCommand("-\240\159\147\183", function(source, args, rawCommand)
    if IsPauseMenuActive() then return end
    if IsPedInAnyVehicle(player, false) then
        lockcamposition = false
    end
end, false)


RegisterCommand("+\240\159\167\175", function(source, args, rawCommand)
    if IsPauseMenuActive() then return end
    if not IsPedInAnyVehicle(player, false) then return end

    if thiscarhasnitrous then
        isnitrousactive = true
        if nitrouscapacity > 0.01 then
            timesincefirstnitroushot = GetGameTimer()
            nitrous_shot_fade(nitrouscapacity, 0, nitroustimer)
        end
    end
end, false)


RegisterCommand("-\240\159\167\175", function(source, args, rawCommand)
    if IsPauseMenuActive() then return end
    if not IsPedInAnyVehicle(player, false) then return end

    if thiscarhasnitrous then
        isnitrousactive         = false
        timesincelastnitroususe = GetGameTimer()
    end
end, false)

-- ===================== KEYBIND REGISTRATIONS (np-keybinds) =====================

local keybinds = exports["np-keybinds"]

-- Debug keybinds (only registered in debug mode)
if debug then
    keybinds:registerKeyMapping("[DEBUG] Show Telemetry",           "Vehicle", "[DEBUG] Show Telemetry",           "telemetry",    "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", "NUMPAD3", true)
    keybinds:registerKeyMapping("[DEBUG] Calculate 0-100",          "Vehicle", "[DEBUG] Calculate 0-100",          "0100time",     "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", "NUMPAD2", true)
    keybinds:registerKeyMapping("[DEBUG] C.H.A.S.E.R Debug Menu",   "Vehicle", "Open C.H.A.S.E.R Debug Menu",      "chaserdebug",  "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", "COMMA",   true)
end

-- Transmission keybinds
keybinds:registerKeyMapping("Upshift",                          "Vehicle", "Transmission Upshift",                 "\240\159\149\185\239\184\143\240\159\147\141",      "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143",  upkey,          true)
keybinds:registerKeyMapping("Downshift",                        "Vehicle", "Transmission Downshift",               "\240\159\149\185\239\184\143\240\159\147\141-",     "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143",  downkey,        true)
keybinds:registerKeyMapping("Clutch",                           "Vehicle", "Transmission Clutch",                  "+\240\159\149\185\239\184\143\226\154\153\239\184\143", "-\240\159\149\185\239\184\143\226\154\153\239\184\143",                 clutchkey,      true)

-- Driver assist keybinds
keybinds:registerKeyMapping("Launch Control",                   "Vehicle", "Toggle Launch Control",                "\240\159\143\142\239\184\143\226\154\153\239\184\143",  "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", lckey,         true)
keybinds:registerKeyMapping("AT Gear Lock",                     "Vehicle", "Toggle AT Gear Lock",                  "\240\159\164\150\226\154\153\239\184\143",              "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", atlockkey,     true)
keybinds:registerKeyMapping("Traction Control",                 "Vehicle", "Toggle Traction Control",              "TC\226\154\153\239\184\143",                            "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", tckey,         true)
keybinds:registerKeyMapping("Stability Control",                "Vehicle", "Toggle Stability Control",             "ESC\226\154\153\239\184\143",                           "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", sckey,         true)
keybinds:registerKeyMapping("Conduction Mode",                  "Vehicle", "Switch Conduction Mode",               "CTM\226\154\153\239\184\143",                           "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", cmkey,         true)
keybinds:registerKeyMapping("High-Low Range Differential",      "Vehicle", "Toggle High-Low Differential Range",   "HL\226\154\153\239\184\143",                            "\240\159\149\185\239\184\143\240\159\147\141\240\159\149\185\239\184\143", hilokey,       true)

-- Camera keybind
keybinds:registerKeyMapping("Orbit Cam Lock",                   "Vehicle", "Lock Orbit Cam Position",              "+\240\159\147\183",    "-\240\159\147\183",    lockorbitkey,   true)

-- Nitrous keybind
keybinds:registerKeyMapping("Nitrous",                          "Vehicle", "Activate Nitrous",                     "+\240\159\167\175",    "-\240\159\167\175",    noskey,         true)
