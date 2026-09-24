Config = {}

-- LEDGE GRAB PARKOUR
Config.Climb = {
    Enabled = true,

    -- Broad fallback values used by exports and legacy integrations.
    ClimbMaxHeight = 3.4,
    ClimbMinHeight = 0.45,
    WallCheckDistance = 1.15,
    -- Extra forward offset used only by optional fallback placement.
    LedgeForwardOffset = 0.35,
    -- Fallback duration if TaskClimb fails and UseFallbackPlacement is enabled.
    ClimbDuration = 0.45,
    ClimbCooldown = 900,

    LedgeGrab = {
        Enabled = true,
        -- UI starts before grab range so players see how close they are.
        DetectDistance = 3.0,
        -- At this distance the player grabs the edge instead of falling past it.
        ArmReachDistance = 1.15,
        -- Valid top-edge range relative to ped coords while airborne.
        TopMinOffset = -0.35,
        TopMaxOffset = 2.15,
        -- Require some horizontal movement toward the next roof.
        MinHorizontalSpeed = 0.45,
        -- Keep normal gameplay native-feeling: no coordinate snap before climb.
        HangTimeBeforePullUp = 0,
        SettleTime = 0,
        HangBackOffset = 0.34,
        HangDownOffset = 1.12,
        ForwardAssist = 0.0,
        VelocityAssist = 1.05,
        UpwardAssist = 0.18,
        -- If TaskClimb does not start quickly, release the player naturally.
        NativeStartTimeout = 420,
        NativeClimbTimeout = 1150,
        FailedGrabCooldown = 450,
        UseNativeClimbTask = true,
        -- Disabled by default because forced placement can feel like teleporting.
        UseFallbackPlacement = false,
    },

    -- Compatibility values for the NUI proximity bar. LedgeGrab controls the
    -- actual roof-to-roof grab behavior.
    Prompt = {
        DetectDistance = 3.0,
        ReadyDistance = 1.15,
        -- Visual style is controlled by html/style.css.
    },

    -- Set to nil to allow every material. Otherwise provide material hashes.
    AllowedMaterials = nil,
}

