-- Binds that are used globaly and do not fit in a single resouce
-- All Binds should use the event name and bool

Citizen.CreateThread(function()
    RegisterCommand('+showPlayerList', function() end, false)
    RegisterCommand('-showPlayerList', function() end, false)
    exports["np-keybinds"]:registerKeyMapping("PlayerList", "Player", "View Online Players", "+showPlayerList", "-showPlayerList", "U", true)

    RegisterCommand('+generalUse', function() end, false)
    RegisterCommand('-generalUse', function() end, false)
    exports["np-keybinds"]:registerKeyMapping("general", "Player", "General Use", "+generalUse", "-generalUse", "E", true)
end)
