KyzeLeanDebug = {}
local settings = Config.Debug or {}
local command = settings.Command or 'Kyze_combat_debug'
local active, sequence = nil, 0

local function finite(value)
    return type(value) == 'number' and value == value and math.abs(value) < math.huge
end
local function bounded(value, fallback, low, high)
    value = tonumber(value)
    fallback = tonumber(fallback)
    if not finite(fallback) then fallback = low end
    return math.max(low, math.min(high, finite(value) and value or fallback))
end
local function clean(value, limit)
    if value == nil then return 'unknown' end
    return tostring(value):gsub('[%c]', ' '):gsub('%^%d', ''):sub(1, limit or 80)
end
local function emit(message) print('[np-leaningbullettrajectory DEBUG] ' .. message) end
local function optional(fn, ...)
    if type(fn) ~= 'function' then return nil end
    local ok, value = pcall(fn, ...)
    if ok then return value end
end
local function readClock()
    local value = GetGameTimer()
    assert(finite(value), 'invalid game timer')
    return value
end
local function keyText(keys, id)
    local binding = keys and keys.bindings and keys.bindings[id]
    if not binding then return 'unavailable' end
    return ('%s physical=%s raw=%s accepted=%s stale=%s binding=%s reads=%s/%s'):format(
        clean(binding.key or binding.code, 16), clean(binding.physicalPressed, 16),
        clean(binding.rawPressed, 16), binding.status == 'keymapping' and 'command_mode' or clean(binding.down, 8),
        clean(binding.stale, 8), clean(binding.status, 24),
        clean(binding.rawStatus or binding.status, 24), clean(binding.physicalStatus, 24))
end
local function describe(state, keys)
    return ('reason=%s gate=%s mainGate=%s leanEnabled=%s requested=%s active=%s dict=%s exists=%s loaded=%s playing=%s '
        .. 'model=%s weapon=%s family=%s clip=%s event=%s#%s input=%s reader=%s '
        .. 'Q={%s} E={%s} pause=%s focus=%s'):format(
        clean(state.reason), clean(state.gate), clean(state.lastMainGate), clean(state.leanEnabled, 8), clean(state.requestedSide, 8),
        clean(state.activeSide, 8), clean(state.dictionary, 64), clean(state.dictionaryExists, 8),
        clean(state.dictionaryLoaded, 8), clean(state.playing, 8), clean(state.model, 16), clean(state.weapon, 16),
        clean(state.family, 24), clean(state.clip, 64), clean(state.animationEvent, 40), clean(state.animationEventSequence, 12),
        clean(keys and keys.effectiveMode, 24), clean(keys and keys.reader, 24),
        keyText(keys, 'lean_left'), keyText(keys, 'lean_right'),
        clean(keys and keys.paused, 8), clean(keys and keys.focused, 8))
end

local function finish(capture, outcome, errorText)
    if active ~= capture then return end
    active = nil
    local rows = {}
    for reason, count in pairs(capture.reasons) do rows[#rows + 1] = { reason, count } end
    table.sort(rows, function(a, b) if a[2] == b[2] then return a[1] < b[1] end return a[2] > b[2] end)
    local reasons = {}
    for index = 1, math.min(12, #rows) do reasons[index] = rows[index][1] .. '=' .. rows[index][2] end
    emit(('END #%d status=%s samples=%d eligible=%d inputRequested=%d activeLean=%d playing=%d changes=%d printed=%d suppressed=%d'):format(
        capture.id, outcome, capture.samples, capture.eligible, capture.requested, capture.leaning, capture.playing,
        capture.changes, capture.printed, capture.changes - capture.printed))
    emit('SUMMARY reasons(samples): ' .. (#reasons > 0 and table.concat(reasons, ', ') or 'none; capture ended before sampling'))
    if capture.lastLine then emit('LAST ' .. capture.lastLine) end
    if errorText then emit('ERROR ' .. clean(errorText, 240)) end
    emit('Read-only samples; no animation/keys were changed. Copy START, SUMMARY and LAST lines for support.')
end

local function sample(capture)
    assert(KyzeCombat and type(KyzeCombat.GetDebugState) == 'function', 'combat diagnostic API unavailable')
    local state = KyzeCombat.GetDebugState()
    assert(type(state) == 'table', 'invalid combat diagnostic snapshot')
    local keys = KyzeKeybinds and type(KyzeKeybinds.GetDebugState) == 'function' and KyzeKeybinds.GetDebugState() or nil
    if capture.samples == 0 and keys then
        emit(('INPUT configured=%s effective=%s reader=%s fallback=%s rawAvailable=%s physicalAvailable=%s readDisabledKeys=%s'):format(
            clean(keys.configuredMode, 24), clean(keys.effectiveMode, 24), clean(keys.reader, 40),
            clean(keys.fallback, 160), clean(keys.rawAvailable, 8), clean(keys.physicalAvailable, 8), clean(keys.readDisabledKeys, 8)))
    end
    local reason = clean(state.reason, 80)
    capture.samples = capture.samples + 1
    capture.reasons[reason] = (capture.reasons[reason] or 0) + 1
    if state.eligible == true then capture.eligible = capture.eligible + 1 end
    if state.requestedSide == -1 or state.requestedSide == 1 then capture.requested = capture.requested + 1 end
    if state.activeSide == -1 or state.activeSide == 1 then capture.leaning = capture.leaning + 1 end
    if state.playing == true or state.playing == 1 then capture.playing = capture.playing + 1 end
    local line = describe(state, keys)
    capture.lastLine = line
    if line ~= capture.previousLine then
        capture.previousLine = line
        capture.changes = capture.changes + 1
        if capture.printed < 20 then
            capture.printed = capture.printed + 1
            emit(('CHANGE #%d.%d %s'):format(capture.id, capture.printed, line))
        end
    end
end

local function run(capture)
    Wait(capture.leadIn)
    if active ~= capture then return end
    capture.started = readClock()
    local previous = capture.started
    emit(('CAPTURE #%d started. Close F8, aim in third person, hold/release each configured lean key.'):format(capture.id))
    local maximum = math.ceil(capture.duration / capture.interval) + 1
    for _ = 1, maximum do
        if active ~= capture then return end
        local now = readClock()
        if now < previous then finish(capture, 'clock_regressed') return end
        previous = now
        if now - capture.started >= capture.duration then finish(capture, 'complete') return end
        sample(capture)
        Wait(capture.interval)
    end
    if active == capture then finish(capture, 'sample_limit') end
end

function KyzeLeanDebug.Stop()
    if active then finish(active, 'cancelled') end
end
function KyzeLeanDebug.IsActive() return active ~= nil end
function KyzeLeanDebug.Start(seconds)
    if settings.Enabled == false then emit('Disabled in Config.Debug.Enabled.') return false end
    if active then finish(active, 'restarted') end
    sequence = sequence + 1
    local capture = {
        id = sequence, duration = bounded(seconds, settings.DurationSeconds or 15, 5, 30) * 1000,
        interval = math.floor(bounded(settings.SampleMs, 50, 25, 250)),
        leadIn = math.floor(bounded(settings.LeadInMs, 2000, 1000, 5000)),
        samples = 0, eligible = 0, requested = 0, leaning = 0, playing = 0,
        changes = 0, printed = 0, reasons = {},
    }
    active = capture
    local resource = optional(GetCurrentResourceName) or 'unknown'
    local version = optional(GetResourceMetadata, resource, 'version', 0)
    local build = optional(GetGameBuildNumber)
    emit(('START #%d resource=%s version=%s gameBuild=%s seconds=%.1f sampleMs=%d leadInMs=%d configuredInput=%s'):format(
        capture.id, clean(resource, 128), clean(version, 32), clean(build, 16), capture.duration / 1000,
        capture.interval, capture.leadIn, clean((Config.Input or {}).Mode, 24)))
    emit(('Close F8 now; sampling starts after %.1fs. /%s off cancels.'):format(capture.leadIn / 1000, command))
    local ok, err = pcall(CreateThread, function()
        local success, failure = pcall(run, capture)
        if not success and active == capture then finish(capture, 'error', failure) end
    end)
    if not ok then finish(capture, 'error', err) return false end
    return true
end

RegisterCommand(command, function(_, args)
    local value = args and args[1]
    if value == 'off' then KyzeLeanDebug.Stop() return end
    if value ~= nil and not finite(tonumber(value)) then
        emit(('Usage: /%s [seconds 5..30 | off]'):format(command)) return
    end
    KyzeLeanDebug.Start(value)
end, false)
AddEventHandler('onResourceStop', function(resource)
    if resource == GetCurrentResourceName() then KyzeLeanDebug.Stop() end
end)
