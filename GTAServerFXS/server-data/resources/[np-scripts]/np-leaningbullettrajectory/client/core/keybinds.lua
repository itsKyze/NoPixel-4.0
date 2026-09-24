KyzeKeybinds = {}

local CODES = {
    MOUSE_LEFT = 0x01, MOUSE_RIGHT = 0x02, MOUSE_MIDDLE = 0x04, MOUSE4 = 0x05, MOUSE5 = 0x06,
    BACKSPACE = 0x08, TAB = 0x09, ENTER = 0x0D, RETURN = 0x0D,
    SHIFT = 0x10, CTRL = 0x11, CONTROL = 0x11, ALT = 0x12,
    CAPS = 0x14, CAPSLOCK = 0x14, ESC = 0x1B, ESCAPE = 0x1B, SPACE = 0x20,
    PAGEUP = 0x21, PAGEDOWN = 0x22, END = 0x23, HOME = 0x24,
    LEFT = 0x25, UP = 0x26, RIGHT = 0x27, DOWN = 0x28,
    INSERT = 0x2D, DELETE = 0x2E,
    NUMPAD0 = 0x60, NUMPAD1 = 0x61, NUMPAD2 = 0x62, NUMPAD3 = 0x63, NUMPAD4 = 0x64,
    NUMPAD5 = 0x65, NUMPAD6 = 0x66, NUMPAD7 = 0x67, NUMPAD8 = 0x68, NUMPAD9 = 0x69,
    ['NUMPAD*'] = 0x6A, ['NUMPAD+'] = 0x6B, ['NUMPAD-'] = 0x6D, ['NUMPAD.'] = 0x6E, ['NUMPAD/'] = 0x6F,
    F1 = 0x70, F2 = 0x71, F3 = 0x72, F4 = 0x73, F5 = 0x74, F6 = 0x75,
    F7 = 0x76, F8 = 0x77, F9 = 0x78, F10 = 0x79, F11 = 0x7A, F12 = 0x7B,
    LSHIFT = 0xA0, RSHIFT = 0xA1, LCTRL = 0xA2, RCTRL = 0xA3, LALT = 0xA4, RALT = 0xA5,
    [';'] = 0xBA, ['='] = 0xBB, [','] = 0xBC, ['-'] = 0xBD, ['.'] = 0xBE, ['/'] = 0xBF,
    ['`'] = 0xC0, ['['] = 0xDB, [']'] = 0xDD, ["'"] = 0xDE,
}
CODES['\\'] = 0xDC

local all, combat, combatCount, requested = {}, {}, 0, {}
local resolved, configuredMode, effectiveMode, readerName, fallback, readDisabledKeys
local reader, edgeReader
local pending = false

local function truth(value) return value == true or value == 1 end
local function blocked() return truth(IsPauseMenuActive()) or truth(IsNuiFocused()) end

function KyzeKeybinds.Resolve(name)
    if type(name) ~= 'string' then return nil end
    local key = name:upper():gsub('%s', '')
    if key == '' then return nil end
    local overrides = (Config.Input or {}).Keys
    if type(overrides) == 'table' then
        local code = overrides[key] or overrides[name]
        if type(code) == 'number' and code > 0 and code < 256 and code % 1 == 0 then return code end
    end
    if CODES[key] then return CODES[key] end
    if #key == 1 then
        local byte = key:byte()
        if (byte >= 65 and byte <= 90) or (byte >= 48 and byte <= 57) then return byte end
    end
    return nil
end

function KyzeKeybinds.Active()
    if resolved ~= nil then return resolved end
    local input = Config.Input or {}
    configuredMode = input.Mode == nil and 'config' or tostring(input.Mode)
    readDisabledKeys = input.ReadDisabledKeys == true
    if configuredMode ~= 'keymapping' then
        if type(RegisterRawKeymap) ~= 'function' then
            fallback = 'RegisterRawKeymap unavailable'
        elseif readDisabledKeys and type(IsDisabledRawKeyDown) == 'function' and type(IsDisabledRawKeyPressed) == 'function' then
            reader, edgeReader, readerName = IsDisabledRawKeyDown, IsDisabledRawKeyPressed, 'IsDisabledRawKeyDown'
        elseif type(IsRawKeyDown) == 'function' and type(IsRawKeyPressed) == 'function' then
            reader, edgeReader, readerName = IsRawKeyDown, IsRawKeyPressed, 'IsRawKeyDown'
            if readDisabledKeys then fallback = 'IsDisabledRawKeyDown unavailable; using IsRawKeyDown' end
        else
            fallback = 'IsRawKeyDown unavailable'
        end
        if configuredMode ~= 'config' then
            fallback = ('unknown Mode "%s"; config requested%s'):format(configuredMode, fallback and '; ' .. fallback or '')
        end
    end
    resolved = reader ~= nil
    effectiveMode = resolved and 'config' or 'keymapping'
    readerName = readerName or 'keymapping'
    print(('[np-leaningbullettrajectory] Input configured=%s effective=%s reader=%s ReadDisabledKeys=%s.%s%s')
        :format(configuredMode, effectiveMode, readerName, tostring(readDisabledKeys),
            fallback and ' Fallback: ' .. fallback .. '.' or '',
            not resolved and ' FiveM bindings saved on this client may override config defaults.' or ''))
    return resolved
end

local function keyDown(binding)
    if binding.down then return end
    if binding.stale then
        if not truth(edgeReader(binding.code)) then return end
        binding.stale = false
    end
    if blocked() then binding.stale = true return end
    binding.down = true
    binding.press()
end

local function keyUp(binding)
    binding.stale = false
    if not binding.down then return end
    binding.down = false
    if binding.release then binding.release() end
end

function KyzeKeybinds.Bind(id, name, onPress, onRelease, combatOnly, edgeOnly)
    local active = KyzeKeybinds.Active()
    local code = KyzeKeybinds.Resolve(name)
    local request = { key = name, code = code, usable = code ~= nil, combatOnly = combatOnly == true,
        edgeOnly = edgeOnly == true,
        status = not active and 'keymapping' or (code and 'bound' or (name == '' and 'unbound' or 'unknown_key')) }
    requested[id] = request
    if not active then return false end
    if not code then
        if type(name) == 'string' and name ~= '' then
            print(('^3[np-leaningbullettrajectory] Unknown key name "%s" for %s; that action is left without a key.^7'):format(name, id))
        end
        return false
    end
    local binding = { id = id, code = code, press = onPress, release = onRelease,
        edgeOnly = edgeOnly == true, down = false, stale = false }
    if combatOnly then
        combatCount = combatCount + 1
        combat[combatCount] = binding
    else
        local ok, err = pcall(RegisterRawKeymap, 'Kyze_cm_' .. id, function() keyDown(binding) end,
            function() keyUp(binding) end, code, not readDisabledKeys)
        if not ok then
            request.status = 'register_failed'
            print(('^3[np-leaningbullettrajectory] Could not register the %s key: %s^7'):format(id, tostring(err)))
            return false
        end
    end
    request.binding = binding
    all[#all + 1] = binding
    return true
end

function KyzeKeybinds.Tick(aiming)
    if not pending and not aiming then return end
    pending = false
    for index = 1, combatCount do
        local binding = combat[index]
        if not aiming then
            if binding.down then
                binding.down = false
                if binding.release then binding.release() end
            end
            if binding.stale then
                if truth(reader(binding.code)) then pending = true else binding.stale = false end
            end
        else
            local down = truth(reader(binding.code))
            if binding.stale then
                if down then pending = true else binding.stale = false end
            elseif down ~= binding.down then
                binding.down = down
                if down then
                    if not binding.edgeOnly or truth(edgeReader(binding.code)) then binding.press() end
                elseif binding.release then binding.release() end
            end
            if binding.down then pending = true end
        end
    end
end

function KyzeKeybinds.Reset()
    for index = 1, #all do
        local binding = all[index]
        if binding.down then
            binding.down, binding.stale = false, true
            if binding.release then binding.release() end
        end
    end
    pending = combatCount > 0
end

function KyzeKeybinds.GetDebugState()
    KyzeKeybinds.Active()
    local function read(fn, ...)
        if type(fn) ~= 'function' then return 'unavailable', 'missing' end
        local ok, value = pcall(fn, ...)
        if not ok then return 'unavailable', 'error' end
        if value == true or value == 1 then return true, 'ok' end
        if value == false or value == 0 then return false, 'ok' end
        return 'unavailable', 'invalid_return'
    end
    local paused, pauseStatus = read(IsPauseMenuActive)
    local focused, focusStatus = read(IsNuiFocused)
    local state = {
        configuredMode = configuredMode, effectiveMode = effectiveMode, reader = readerName,
        readDisabledKeys = readDisabledKeys, fallback = fallback,
        rawAvailable = type(IsRawKeyDown) == 'function', physicalAvailable = type(IsDisabledRawKeyDown) == 'function',
        paused = paused, focused = focused, pauseStatus = pauseStatus, focusStatus = focusStatus, bindings = {},
    }
    for id, request in pairs(requested) do
        local raw, rawStatus, physical, physicalStatus
        if request.code then
            raw, rawStatus = read(IsRawKeyDown, request.code)
            physical, physicalStatus = read(IsDisabledRawKeyDown, request.code)
        else raw, physical, rawStatus, physicalStatus = 'unavailable', 'unavailable', 'unknown_key', 'unknown_key' end
        local binding = request.binding
        state.bindings[id] = {
            key = request.key, code = request.code, usable = request.usable, status = request.status,
            combatOnly = request.combatOnly, edgeOnly = request.edgeOnly,
            down = binding and binding.down or false, stale = binding and binding.stale or false,
            rawPressed = raw, rawStatus = rawStatus, physicalPressed = physical, physicalStatus = physicalStatus,
        }
    end
    return state
end

function KyzeKeybinds.GetState()
    local state = {}
    for index = 1, #all do
        local binding = all[index]
        state[binding.id] = { code = binding.code, down = binding.down }
    end
    return state
end
