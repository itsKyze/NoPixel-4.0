Citizen.CreateThread(function()
    SetThreadPriority(0)

    while true do
        if enabledracingcam then
            isflying = isonair(vehicle)

            if vehclass == 8 or forcebikemode then
                updatecamera2(vehicle, cam, 0.0, 0.0, modelDimMax.z + cameradata.zheightbike)
            else
                updatecamera2(vehicle, cam, 0.0, 0.0, modelDimMax.z + cameradata.zheight)
            end
        end

        Citizen.Wait(0)
    end
end)
