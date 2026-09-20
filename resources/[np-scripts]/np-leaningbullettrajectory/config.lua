Config = {}

Config.Enabled = true

Config.Performance = {
    InactiveWaitMs = 150,
    IdleProbeFrames = 15,
}

Config.Input = {
    Mode = 'config',
    ReadDisabledKeys = false,
    Keys = {},
}

Config.Debug = {
    Enabled = true,
    Command = 'kyze_combat_debug',
    DurationSeconds = 15,
    SampleMs = 50,
    LeadInMs = 2000,
}

Config.Lean = {
    Enabled = true,
    Mode = 'hold',
    LeftKey = 'Q',
    RightKey = 'E',

    Dictionary = 'karma_lean_movement',
    Clips = {
        pistol = { [-1] = 'lean_left_pistol', [1] = 'lean_right_pistol' },
        rifle = { [-1] = 'lean_left_rifle', [1] = 'lean_right_rifle' },
    },
    DefaultFamily = 'rifle',
    GroupFamilies = {
        [joaat('GROUP_PISTOL')] = 'pistol',
        [joaat('GROUP_STUNGUN')] = 'pistol',
        [joaat('GROUP_SMG')] = 'rifle',
        [joaat('GROUP_RIFLE')] = 'rifle',
        [joaat('GROUP_MG')] = 'rifle',
        [joaat('GROUP_SHOTGUN')] = 'rifle',
        [joaat('GROUP_SNIPER')] = 'rifle',
    },
    WeaponFamilies = {},

    PitchMin = -75.0,
    PitchMax = 75.0,

    DebugClip = nil,
    BlendIn = 4.0,
    BlendOut = 4.0,
    IkFlags = 512,
    LoadTimeoutMs = 5000,
    StartGraceMs = 350,
    DisableControls = { 44, 38, 51 },
}

Config.Camera = {
    Enabled = true,

    ShoulderSwap = {
        Enabled = true,
        Key = 'MOUSE_MIDDLE',
        LeftOffset = -1.00,
        LeftBackwardOffset = 0.12,
        RightOffset = 0.0,
        RightBackwardOffset = 0.0,
        DisableControls = { 27 },
    },

    LeftOffset = -1.15,
    RightOffset = 0.18,
    LeftBackwardOffset = 0.16,
    RightBackwardOffset = 0.0,
    HeightOffset = 0.02,

    BlendSpeed = 10.0,
    NearClip = 0.08,
    CollisionMargin = 0.08,
    ShowNativeReticle = true,
}

Config.Ballistics = {
    Enabled = true,
    Mode = 'guard',

    MaxDistance = 500.0,
    ObstructionDistance = 3.0,
    HitTolerance = 0.08,
    PreviewIntervalMs = 40,
    QuietPreviewIntervalMs = 80,

    MuzzleBones = { 'gun_muzzle' },
    MissingMuzzlePolicy = 'block',
    ShowBlockedText = true,
    BlockedText = 'BARREL OBSTRUCTED',

    MuzzleOffsets = {},

    WeaponProfiles = {},
}

Config.BlockedStates = {
    'dead', 'isDead', 'isdead', 'inlaststand', 'isCuffed', 'ishandcuffed',
    'invOpen', 'invBusy', 'inventoryBusy',
}
