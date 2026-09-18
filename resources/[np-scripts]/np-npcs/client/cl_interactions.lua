function GeneratePeds()
    GenerateShopKeepers()
    GenerateWeaponShopKeepers()
    GenerateToolShopKeepers()
    GenerateLicenseKeepers()
    GenerateLaundromatKeepers()
    GenerateClickLoversKeepers()
    GenerateLocksmithKeepers()
    GenerateSportsGuyKeepers()
    GenerateSewersKeepers()
    GenerateLibraryKeepers()
end

function GenerateShopKeepers()
    local disableStores = exports['config']:GetMiscConfig('factory.stores.disabled')
    if disableStores then return end

    for _, keeperLocations in ipairs(Generic.ShopKeeperLocations) do
        exports['interactions']:AddInteraction({
            id = ("shopkeeper_%s"):format(_),
            coords = { keeperLocations.x, keeperLocations.y, keeperLocations.z },
            options = {
                {
                    id = 'shopkeeper',
                    label = 'Purchase goods',
                    event = 'np-npcs:ped:keeper',
                    parameters = { "247" },
                },
            },
            context = {
                flag = { "isNPC" },
                npcId = ("shopkeeper_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

function GenerateLicenseKeepers()
    for _, keeperLocations in ipairs(Generic.LicenseBuyLocations) do
        exports['interactions']:AddInteraction({
            id = ("npc_license_keeper_%s"):format(_),
            coords = { keeperLocations.x, keeperLocations.y, keeperLocations.z },
            options = {
                {
                    id = "licensekeeper_bank",
                    label = "Purchase License ($50.00 + Tax)  (Bank)",
                    eventSDK = "np-gov:npc:purchaseDriversLicense",
                    parameters = { type = "bank" },
                },
                {
                    id = "licensekeeper_cash",
                    label = "Purchase License ($100.00 + Tax) (Cash)",
                    eventSDK = "np-gov:npc:purchaseDriversLicense",
                    parameters = { type = "cash" },
                }
            },
            context = {
                flag = { "isNPC" },
                npcId = ("npc_license_keeper_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

function GenerateWeaponShopKeepers()
    local models = {
        "S_M_Y_AmmuCity_01",
        "S_M_M_AmmuCountry",
    }
    for _, weaponLocations in ipairs(Generic.WeaponShopLocations) do
        local model = models[math.random(#models)];
        exports['interactions']:AddInteraction({
            id = ("weaponshop_%s"):format(_),
            coords = { weaponLocations.x, weaponLocations.y, weaponLocations.z },
            options = {
                {
                    id = 'shopkeeper',
                    label = 'Purchase goods',
                    event = 'np-npcs:ped:keeper',
                    parameters = { "weapons" },
                },
            },
            context = {
                flag = { "isNPC" },
                npcId = ("weaponshop_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

function GenerateToolShopKeepers()
    local disableStores = exports['config']:GetMiscConfig('factory.stores.disabled')
    if disableStores then return end

    for _, toolShopLocation in ipairs(Generic.ToolShopLocations) do
        exports['interactions']:AddInteraction({
            id = ("toolshop_%s"):format(_),
            coords = { toolShopLocation.x, toolShopLocation.y, toolShopLocation.z },
            options = {
                {
                    id = 'shopkeeper',
                    label = 'Purchase goods',
                    event = 'np-npcs:ped:keeper',
                    parameters = { "tools" },
                },
            },
            context = {
                flag = { "isNPC" },
                npcId = ("toolshop_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

function GenerateLaundromatKeepers()
    local disableStores = exports['config']:GetMiscConfig('factory.stores.disabled')
    if disableStores then return end

    for _, keeperLocations in ipairs(Generic.LaundromatLocations) do
        exports['interactions']:AddInteraction({
            id = ("laundromat_%s"):format(_),
            coords = { keeperLocations.x, keeperLocations.y, keeperLocations.z },
            options = {
                {
                    id = 'shopkeeper',
                    label = 'Purchase goods',
                    event = 'np-npcs:ped:keeper',
                    parameters = { "laundromat" },
                },
            },
            context = {
                flag = { "isNPC" },
                npcId = ("laundromat_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

function GenerateClickLoversKeepers()
    local disableStores = exports['config']:GetMiscConfig('factory.stores.disabled')
    if disableStores then return end

    for _, keeperLocations in ipairs(Generic.ClickLoversLocations) do
        exports['interactions']:AddInteraction({
            id = ("clicklovers_%s"):format(_),
            coords = { keeperLocations.x, keeperLocations.y, keeperLocations.z },
            options = {
                {
                    id = 'shopkeeper',
                    label = 'Purchase goods',
                    event = 'np-npcs:ped:keeper',
                    parameters = { "electronics" },
                },
            },
            context = {
                flag = { "isNPC" },
                npcId = ("clicklovers_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

function GenerateLocksmithKeepers()
    local disableStores = exports['config']:GetMiscConfig('factory.stores.disabled')
    if disableStores then return end

    for _, keeperLocations in ipairs(Generic.LocksmithLocations) do
        exports['interactions']:AddInteraction({
            id = ("locksmith_%s"):format(_),
            coords = { keeperLocations.x, keeperLocations.y, keeperLocations.z },
            options = {
                {
                    id = 'shopkeeper',
                    label = 'Purchase goods',
                    event = 'np-npcs:ped:keeper',
                    parameters = { "locksmith" },
                },
            },
            context = {
                flag = { "isNPC" },
                npcId = ("locksmith_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

function GenerateSportsGuyKeepers()
    local disableStores = exports['config']:GetMiscConfig('factory.stores.disabled')
    if disableStores then return end

    for _, keeperLocations in ipairs(Generic.SportsGuyLocations) do
        exports['interactions']:AddInteraction({
            id = ("sportsguy_%s"):format(_),
            coords = { keeperLocations.x, keeperLocations.y, keeperLocations.z },
            options = {
                {
                    id = 'shopkeeper',
                    label = 'Purchase goods',
                    event = 'np-npcs:ped:keeper',
                    parameters = { "sportsguy" },
                },
            },
            context = {
                flag = { "isNPC" },
                npcId = ("sportsguy_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

function GenerateSewersKeepers()
    local disableStores = exports['config']:GetMiscConfig('factory.stores.disabled')
    if disableStores then return end

    for _, keeperLocations in ipairs(Generic.SewersLocations) do
        exports['interactions']:AddInteraction({
            id = ("sewers_%s"):format(_),
            coords = { keeperLocations.x, keeperLocations.y, keeperLocations.z },
            options = {
                {
                    id = 'shopkeeper',
                    label = 'Purchase goods',
                    event = 'np-npcs:ped:keeper',
                    parameters = { "hobo" },
                },
            },
            context = {
                flag = { "isNPC" },
                npcId = ("sewers_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

function GenerateLibraryKeepers()
    local disableStores = exports['config']:GetMiscConfig('factory.stores.disabled')
    if disableStores then return end

    for _, keeperLocations in ipairs(Generic.LibraryLocations) do
        exports['interactions']:AddInteraction({
            id = ("library_%s"):format(_),
            coords = { keeperLocations.x, keeperLocations.y, keeperLocations.z },
            options = {
                {
                    id = 'shopkeeper',
                    label = 'Purchase goods',
                    event = 'np-npcs:ped:keeper',
                    parameters = { "library" },
                },
            },
            context = {
                flag = { "isNPC" },
                npcId = ("library_%s"):format(_),
                distance = {
                    draw = 3,
                    use = 2.5,
                },
                isEnabled = function()
                    return true
                end,
            },
        });
    end
end

Citizen.CreateThread(GeneratePeds)
