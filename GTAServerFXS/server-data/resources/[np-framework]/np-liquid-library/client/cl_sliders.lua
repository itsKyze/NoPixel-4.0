local count, data

CreateThread(function()
    exports['interactions']:AddInteraction({
        id = 'll_sliders',
        coords = { 1151.47, -409.69, 72.25 },
        options = {
            {
                id = 'll_sliders',
                label = 'Control Panel',
                eventSDK = 'np-liquidlibrary:ll:sliders',
                parameters = {},
            },
            {
                id = 'll_togglebar',
                label = 'Change bar layout',
                event = 'np-liquidlibrary:ll:sets:toggleBar',
                parameters = {},
            },
        },
        context = {
            distance = {
                draw = 2,
                use = 1.5,
            },
            isEnabled = function()
                return true
            end,
            skipLos = true
        },
    });

    exports['interactions']:AddInteraction({
        id = 'll_sliders_nw',
        coords = { 1166.86, -377.3, 65.03 },
        options = {
            {
                id = 'll_togglenw',
                label = 'Change North Wing Layout',
                event = 'np-liquidlibrary:ll:sets:toggleNorth',
                parameters = {},
            },
        },
        context = {
            distance = {
                draw = 2,
                use = 1.5,
            },
            isEnabled = function()
                return true
            end,
            skipLos = true
        },
    });
end)

NPX.Events.on("np-liquidlibrary:ll:sliders", function()
    if not count or not data then
        local sliderSettings = NPX.Procedures.execute("np-liquidlibrary:ll:getSliders")
        count = sliderSettings.count
        data = sliderSettings.data
    end

    exports['np-ui']:openApplication('range-picker', {
        ["sliders"] = count,
        ["submitUrl"] = "np-liquidlibrary:ll:submitSliders"
    })
end)

RegisterUICallback("np-liquidlibrary:ll:submitSliders", function(result, cb)
    cb({ data = {}, meta = { ok = true, message = 'done' } })
    exports['np-ui']:closeApplication('range-picker')
    local diff = 0
    for i = 1, count do
        diff = diff + math.abs(data[i] - tonumber(result.ranges[i]))
    end
    if diff > 50 * count then
        local ped = PlayerPedId()
        exports["wounds"]:setEntityHealth(ped, 0)
        TriggerEvent("DoLongHudText", "Well this was fucking shit wasnt it", 2)
    elseif diff > 10 * count then
        local ped = PlayerPedId()
        exports["wounds"]:setEntityHealth(ped, GetEntityHealth(ped) - math.random(5, 20))
        TriggerEvent("DoLongHudText", "Ouch", 2)
    elseif diff == 0 then
        TriggerEvent("DoLongHudText",
            "Congrats you somehow found the absolute correct numbers. Go do something with your life now", 1)
    else
        TriggerEvent("DoLongHudText", "Close enough, this will work for now", 1)
    end
end)
