

```lua
exports['np-leaningbullettrajectory']:SetEnabled(true) -- Enable or disable the system
exports['np-leaningbullettrajectory']:IsLeaning()      -- Returns true while leaning
exports['np-leaningbullettrajectory']:GetLeanSide()    -- Returns -1, 0, or 1
exports['np-leaningbullettrajectory']:GetShoulder()    -- Returns the active camera shoulder
exports['np-leaningbullettrajectory']:GetMuzzleState() -- Returns bullet trajectory state
