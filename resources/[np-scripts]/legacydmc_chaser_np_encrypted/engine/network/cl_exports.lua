-- Registers a legacy export by hooking into the CFX export event pattern
function RegisterExport(exportName, exportFunc)
    AddEventHandler("__cfx_export_legacydmc_chaser_np_" .. exportName, function(callback)
        callback(exportFunc)
    end)
end

-- Registers all public CHASER exports so other resources can consume them
function RegisterAllChaserExports()
    -- Getters: vehicle data
    RegisterExport("chaser_getpp",                          chaser_getpp)
    RegisterExport("chaser_getpptuningnp",                  chaser_getpptuningnp)
    RegisterExport("chaser_getctm",                         chaser_getctm)
    RegisterExport("chaser_getvehname",                     chaser_getvehname)
    RegisterExport("chaser_getcurrentrpm",                  chaser_getcurrentrpm)
    RegisterExport("chaser_getminmaxrpm",                   chaser_getminmaxrpm)
    RegisterExport("chaser_gettelemetry",                   chaser_gettelemetry)
    RegisterExport("chaser_getturbopressure",               chaser_getturbopressure)
    RegisterExport("chaser_getloadstatus",                  chaser_getloadstatus)

    -- Getters: driver assists and transmission
    RegisterExport("chaser_getassists",                     chaser_getassists)
    RegisterExport("chaser_gettransmission",                chaser_gettransmission)
    RegisterExport("chaser_gethilo",                        chaser_gettransmission) -- alias for hi/lo diff state

    -- Getters: drivetrain components
    RegisterExport("chaser_getflywheel",                    chaser_getflywheel)
    RegisterExport("chaser_getdifferential",                chaser_getdifferential)
    RegisterExport("chaser_getenginebaysize",               chaser_getenginebaysize)
    RegisterExport("chaser_GetEngineBaySizeFromConfig",     chaser_GetEngineBaySizeFromConfig)
    RegisterExport("chaser_gettyre",                        chaser_gettyre)
    RegisterExport("chaser_getturbo",                       chaser_getturbo)
    RegisterExport("chaser_getefficiency",                  chaser_getefficiency)
    RegisterExport("chaser_getengineswapdata",              chaser_getengineswapdata)
    RegisterExport("chaser_getvehicledata",                 chaser_getvehicledata)
    RegisterExport("chaser_getweight",                      chaser_getweight)
    RegisterExport("chaser_getengine",                      chaser_getengine)
    RegisterExport("chaser_getengineptwratio",              chaser_getengineptwratio)
    RegisterExport("chaser_gethorsepowerandtorque",         chaser_gethorsepowerandtorque)
    RegisterExport("chaser_getnitrous",                     chaser_getnitrous)

    -- Getters: drift scoring
    RegisterExport("chaser_getscoreboardsfxmuted",          chaser_getscoreboardsfxmuted)
    RegisterExport("chaser_getcurrentdriftscore",           chaser_getcurrentdriftscore)
    RegisterExport("chaser_getcurrentdriftscoremultiplier", chaser_getcurrentdriftscoremultiplier)
    RegisterExport("chaser_getlastbankedscore",             chaser_getlastbankedscore)
    RegisterExport("chaser_getDriftPoints",                 chaser_getDriftPoints)
    RegisterExport("chaser_getstackeddriftcount",           chaser_getstackeddriftcount)
    RegisterExport("chaser_getwalltapdriftcount",           chaser_getwalltapdriftcount)
    RegisterExport("chaser_gethighspeeddriftcount",         chaser_gethighspeeddriftcount)
    RegisterExport("chaser_resetDriftScores",               chaser_resetDriftScores)

    -- Getters: engine configs and racing data
    RegisterExport("chaser_getEngineConfigs",               chaser_getEngineConfigs)
    RegisterExport("chaser_getRacingDetails",               chaser_getRacingDetails)

    -- Setters: driver assists and transmission
    RegisterExport("chaser_setassists",                     chaser_setassists)
    RegisterExport("chaser_settransmission",                chaser_settransmission)
    RegisterExport("chaser_settransmissionmode",            chaser_settransmissionmode)

    -- Setters: drivetrain components
    RegisterExport("chaser_setflywheel",                    chaser_setflywheel)
    RegisterExport("chaser_setdifferential",                chaser_setdifferential)
    RegisterExport("chaser_settyre",                        chaser_settyre)
    RegisterExport("chaser_setturbo",                       chaser_setturbo)
    RegisterExport("chaser_setweight",                      chaser_setweight)
    RegisterExport("chaser_setengine",                      chaser_setengine)
    RegisterExport("chaser_setnitrous",                     chaser_setnitrous)

    -- Setters: toggles
    RegisterExport("chaser_togglehilo",                     chaser_togglehilo)
    RegisterExport("chaser_togglescoreboardsfx",            chaser_togglescoreboardsfx)

    -- Setters: drift scoring
    RegisterExport("chaser_setcurrentdriftscore",           chaser_setcurrentdriftscore)
    RegisterExport("chaser_setcurrentdriftscoremultiplier", chaser_setcurrentdriftscoremultiplier)

    -- Utilities
    RegisterExport("chaser_ctm",                            chaser_ctm)
    RegisterExport("chaser_calculatetuningacc",             chaser_calculatetuningacc)
    RegisterExport("chaser_forcereload",                    chaser_forcereload)
    RegisterExport("chaser_refreshengine",                  chaser_refreshengine)
    RegisterExport("chaser_calcacc",                        chaser_calcacc)
    RegisterExport("chaser_isvehicledrifting",              chaser_isvehicledrifting)
    RegisterExport("chaser_disablechaser",                  chaser_disablechaser)
    RegisterExport("chaser_enablechaser",                   chaser_enablechaser)
    RegisterExport("chaser_startcamera",                    chaser_startcamera)
    RegisterExport("chaser_stopcamera",                     chaser_stopcamera)
    RegisterExport("GetEngineConfig",                       GetEngineConfig)
end

-- Register all exports when this resource starts
AddEventHandler("onClientResourceStart", function()
    RegisterAllChaserExports()
end)
