## ⚙️ Main Configuration (`config.lua`)

| Setting | Description |
|---|---|
| `ClimbMaxHeight` / `ClimbMinHeight` | Reachable ledge height range |
| `Climb.LedgeGrab.DetectDistance` | When the NUI guide bar starts showing |
| `Climb.LedgeGrab.ArmReachDistance` | Distance at which the grab triggers |
| `Climb.LedgeGrab.VelocityAssist` / `UpwardAssist` | Small natural push into the native climb |
| `Climb.LedgeGrab.UseFallbackPlacement` | Optional forced placement if native climb fails |
| `Climb.AllowedMaterials` | Restrict climbing to specific material hashes (default: all) |

## 📦 Exports

```lua
exports['np-climbing']:TriggerLedgeClimb() -- Force a ledge climb
exports['np-climbing']:IsMantling()        -- Returns true while climbing
```

## 🔧 Installation

1. Drop the `np-climbing` folder into your `resources` directory
2. Add `ensure np-climbing` to your `server.cfg`
3. Restart the server — that's it
