Citizen.CreateThread(function()
    while not NetworkIsSessionStarted() do
        Citizen.Wait(50)
    end
    Citizen.Wait(500)
    for i = 1, 20 do
        ShutdownLoadingScreen()
        ShutdownLoadingScreenNui()
        Citizen.Wait(200)
    end
end)

RegisterNetEvent("loadingscreen:shutdown", function()
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)

AddEventHandler("loadingscreen:shutdown", function()
    ShutdownLoadingScreen()
    ShutdownLoadingScreenNui()
end)
