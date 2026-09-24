KyzePlayerState = {}

local currentBag, currentServerId, view, handlerCookie, removeHandler
local generation, failed = 0, false
local keys, watched

local function discard()
    generation = generation + 1
    currentBag, currentServerId, view = nil, nil, nil
    local cookie, remove = handlerCookie, removeHandler
    handlerCookie, removeHandler = nil, nil
    if cookie ~= nil and remove then pcall(remove, cookie) end
end

local function watchKeys()
    keys, watched = {}, {}
    local function add(key)
        if type(key) == 'string' and key ~= '' and not watched[key] then
            watched[key] = true
            keys[#keys + 1] = key
        end
    end
    for _, key in ipairs(Config.BlockedStates or {}) do add(key) end
    add('stance')
    add('isInEmote')
    add('isLimited')
end

local function fallback()
    return LocalPlayer.state
end

local function fail()
    discard()
    failed = true
    return fallback()
end

function KyzePlayerState.Reset()
    discard()
    failed, keys, watched = false, nil, nil
end

function KyzePlayerState.ForFrame(playerIndex)
    if view then return view end
    if failed then return fallback() end
    if type(AddStateBagChangeHandler) ~= 'function' or type(RemoveStateBagChangeHandler) ~= 'function'
        or type(GetPlayerServerId) ~= 'function' then return fail() end

    local ok, serverId = pcall(GetPlayerServerId, playerIndex)
    if not ok then return fail() end
    if type(serverId) ~= 'number' or serverId ~= serverId or serverId <= 0
        or serverId > 2147483647 or serverId % 1 ~= 0 then
        if currentBag or handlerCookie ~= nil then discard() end
        return fallback()
    end

    local bag = ('player:%d'):format(serverId)
    discard()
    if not keys then watchKeys() end
    local epoch, pending, changed = generation, {}, {}
    local priming = true
    currentBag, currentServerId = bag, serverId
    local registered, cookie = pcall(AddStateBagChangeHandler, nil, bag, function(bagName, key, value)
        if generation ~= epoch or currentBag ~= bag or bagName ~= bag or not watched[key] then return end
        pending[key] = value
        if priming then changed[key] = true end
    end)
    if not registered or type(cookie) ~= 'number' or cookie ~= cookie
        or cookie < 0 or cookie == math.huge or cookie % 1 ~= 0 then return fail() end
    if generation ~= epoch or currentBag ~= bag then
        pcall(RemoveStateBagChangeHandler, cookie)
        return fallback()
    end
    handlerCookie, removeHandler = cookie, RemoveStateBagChangeHandler

    local primed = pcall(function()
        local state = LocalPlayer.state
        for _, key in ipairs(keys) do
            local value = state[key]
            if not changed[key] then pending[key] = value end
        end
    end)
    priming, changed = false, nil
    if generation ~= epoch or currentBag ~= bag then return fallback() end
    if not primed then return fail() end
    view = pending
    return view
end
