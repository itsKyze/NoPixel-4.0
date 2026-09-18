local scriptLoaded

while true do
    scriptLoaded = chaser_getloadstatus()
    if scriptLoaded then
        break
    end
    Citizen.Wait(0)
end

function NitrousShotFade(fromValue, toValue, durationMultiplier)
    globalnitroussoundid = PlayEntitySound(vehicle, "nitrous_active", "CHASER_SFX", 0, "GENERAL_SFX")

    local startTimer = GetGameTimer()
    local maxTime = durationMultiplier * nitrouscapacity
    timesincelastnitroususe = GetGameTimer()

    while true do
        if not (maxTime > currentTime) then
            break
        end
        Citizen.Wait(0)

        if not isnitrousactive then
            if GetGameTimer() - timesincefirstnitroushot >= 375 then
                PlayEntitySound(vehicle, "nitrous_end", "CHASER_SFX", 0, "GENERAL_SFX")
            end
            timesincelastnitroususe = GetGameTimer()
            StopSound(globalnitroussoundid)
            TriggerServerEvent("chaser:savemetadata", NetworkGetNetworkIdFromEntity(vehicle), "nitrous", {
                duration = nitroustimer,
                currentcapacity = nitrouscapacity
            })
            break
        end

        if nitrouscapacity <= 0.01 then
            if GetGameTimer() - timesincefirstnitroushot >= 375 then
                PlayEntitySound(vehicle, "nitrous_end", "CHASER_SFX", 0, "GENERAL_SFX")
            end
            isnitrousactive = false
            timesincelastnitroususe = GetGameTimer()
            nitrouscapacity = 0
            StopSound(globalnitroussoundid)
            TriggerServerEvent("chaser:savemetadata", NetworkGetNetworkIdFromEntity(vehicle), "nitrous", {
                duration = nitroustimer,
                currentcapacity = nitrouscapacity
            })
            break
        end

        currentTime = (GetGameTimer() - startTimer) / 1000
        local lerpedValue = fromValue + (toValue - fromValue) * (currentTime / maxTime)
        if lerpedValue ~= nil then
            nitrouscapacity = lerpedValue
        end
    end

    currentTime = 0
end
nitrous_shot_fade = NitrousShotFade

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)

        if isinacar then
            if desiredgear >= 1 then
                if thiscarhasnitrous then

                    if isnitrousactive then
                        if nitrouscapacity > 0.01 then
                            -- original decompiled code re-checked nitrouscapacity > 0 here (always true
                            -- given the outer guard) with a goto to skip a "boostValue = 0" fallback;
                            -- the fallback is unreachable, preserved here as the default.
                            local boostValue = 0
                            if nitrouscapacity > 0 then
                                boostValue = map(nitroustimer, 1, 10, 2, 0.5)
                            end
                            nitrousboostfactor = boostValue

                            if trailFx[vehicle].status ~= "Full" then
                                StartTrailFx(vehicle)
                                trailFx[vehicle].status = "Full"
                            end
                        end
                    else
                        -- original decompiled code: this nested `if isnitrousactive then` block can
                        -- never execute, since we're already inside the `else` of that same condition.
                        -- Preserved as dead code rather than removed.
                        if isnitrousactive then
                            if nitrouscapacity <= 0 then
                                nitrousboostfactor = 0
                                if trailFx[vehicle].status == "Full" then
                                    trailFx[vehicle].status = "FadingOut"
                                end
                            end
                        else
                            -- original decompiled code: `if not isnitrousactive then` here is always
                            -- true (same reason as above), so this regen block always runs.
                            if not isnitrousactive then
                                nitrousboostfactor = 0.0

                                local regenAmount = 0
                                local timeSinceLastUse = GetGameTimer() - timesincelastnitroususe
                                if speedkmh > 180 then
                                    if timeSinceLastUse >= 500 then
                                        regenAmount = regenAmount + (nitrousspeedregenfactor * nitroustimer)
                                    end
                                end

                                if GetGameTimer() - timesincelastdrift >= globaldriftcooldown then
                                    if globaljustgotoutofdrift then
                                        local driftBonus = nitrouscapacity + (globallastdriftscore / 100000) * driftscorerewardmultiplier
                                        if driftBonus > 1.0 then
                                            nitrouscapacity = 1.0
                                        else
                                            nitrouscapacity = driftBonus
                                        end
                                        globaljustgotoutofdrift = false
                                    end
                                end

                                nitrouscapacity = lerpConstant(nitrouscapacity, 1.0, globaldeltatime, (speedkmh / 3.6) * regenAmount)

                                if trailFx[vehicle].status == "Full" then
                                    trailFx[vehicle].status = "FadingOut"
                                end
                            end
                        end
                    end

                    if trailFx[vehicle].status == "FadingOut" then
                        if trailFx[vehicle].alpha <= 0 then
                            StopTrailFx(vehicle)
                            trailFx[vehicle].status = "Empty"
                        end
                    end

                    LoopBrakeMode(vehicle)
                end
            end
        end
    end
end)
