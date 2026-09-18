# NoPixel 4.0 Server & Resources

Complete FiveM server environment and resources for NoPixel 4.0, including server configurations, database schema, framework libraries, gameplay scripts, and NUI interfaces.

## Repository Structure

```
NoPixel 4.0/
├── .gitignore              # Git ignore rules (filters node_modules, stream assets)
├── README.md               # Project documentation
├── nopixel4.sql            # Core database schema
├── resources.cfg           # Resource startup order configuration
├── server.cfg              # FiveM server configuration & ACE permissions
├── start_server.bat        # Server launch script
└── resources/              # Server resources
    ├── [np-core]/          # Core libraries, identity, authentication, admin
    ├── [np-framework]/     # Framework libs, RPC dispatcher, UI manager, polyzones
    ├── [np-jobs]/          # Jobs, businesses, emergency services
    ├── [np-scripts]/       # Gameplay mechanics, inventory, phone, housing, HUD
    ├── [standalone]/       # Standalone dependencies and utility resources
    ├── build-all.js        # Universal build pipeline (Scripts + NUI)
    ├── obfuscate.js        # Production JavaScript obfuscator
    ├── clean-duplicates.js # Cleanup utility
    ├── package.json        # Workspace configuration
    ├── pnpm-workspace.yaml # Monorepo workspaces definition
    └── turbo.json          # Turbo build configuration
```

## Build Pipeline

All scripts and NUI web interfaces are managed via the unified build pipeline located in `resources/`:

### Development Build (Clean & Fast)
```bash
cd resources
node build-all.js
```

### Production Build (Obfuscated)
```bash
cd resources
node build-all.js --obfuscate
```

### Watch Mode
```bash
cd resources
node build-all.js --watch
```

## Starting the Server
Run `start_server.bat` or launch via FXServer.
