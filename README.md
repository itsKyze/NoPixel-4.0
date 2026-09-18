# ⚡ KYZE PACK — NoPixel 4.0 Next-Gen Ecosystem

<div align="center">

![NoPixel 4.0 Banner](https://img.shields.io/badge/KYZE%20PACK-NoPixel%204.0-blue?style=for-the-badge&logo=fivem&logoColor=white)
[![FiveM](https://img.shields.io/badge/Platform-FiveM%20b3095-orange?style=for-the-badge&logo=gtav)](https://fivem.net/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript%20%7C%20Lua-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/NUI-React%2018%20%7C%20SolidJS-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Bundler-Vite%20%7C%20esbuild-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![MySQL](https://img.shields.io/badge/Database-MySQL%20%2F%20oxmysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

**The ultimate, fully modular, deobfuscated and refined NoPixel 4.0 roleplay framework ecosystem.**  
Engineered with modern web technologies, strict TypeScript type safety, unified build pipelines, and production-grade security obfuscation.

[Overview](#-overview) • [Architecture](#-architecture) • [Features](#-features) • [Installation](#-installation--quick-start) • [Build Pipeline](#-build-pipeline) • [Admin System](#-admin--permission-system) • [العربية](#-دليل-الاستخدام-باللغة-العربية)

</div>

---

## 🌟 Overview

**KYZE PACK: NoPixel 4.0** is an enterprise-grade FiveM roleplay server architecture built upon the authentic NoPixel 4.0 experience. The codebase has undergone comprehensive architectural modernization:
- **Semantic AST Deobfuscation**: Clean, readable, and structured TypeScript client/server code with meaningful FiveM function naming.
- **Modern Web NUI (67 Interfaces)**: Built with **React 18**, **SolidJS**, **Tailwind CSS**, and **Vite** for zero-latency in-game interfaces.
- **Unified Turbo Monorepo Pipeline**: Instant compilation, hot-reloading in watch mode, and single-command production builds.
- **Autonomous Obfuscation Engine**: Identical production-level code protection mimicking NoPixel\x27s proprietary bytecode/AST obfuscation (`a0_` prefix, string array rotation, and control flow flattening).
- **Hardened Admin Suite**: Fully wired FiveM ACE permissions, native Discord identifier linking, and dedicated in-game UI.

---

## 🏗️ Architecture & Repository Structure

```
NoPixel 4.0/
├── 📄 server.cfg                # Server configuration, network convars & ACE permissions
├── 📄 resources.cfg             # Curated FiveM resource load ordering
├── 📄 nopixel4.sql              # Clean MariaDB/MySQL relational database schema
├── 📄 start_server.bat          # High-performance server runner
├── 📄 .gitignore                # Optimized git filters (excludes 38GB asset streams & node_modules)
├── 📄 README.md                 # Project documentation & reference manual
└── 📁 resources/                # Core framework & gameplay resources (160 Resources)
    ├── 📁 [np-core]             # Core authentication, character selector, and admin UI
    ├── 📁 [np-framework]        # NPX runtime, universal RPC engine, UI bridges, polyzones
    ├── 📁 [np-jobs]             # Businesses, civilian careers, police, and emergency services
    ├── 📁 [np-scripts]          # High-fidelity gameplay: Inventory, Phone, Housing, HUD, Vehicles
    ├── 📁 [standalone]          # Standalone dependencies (oxmysql, bob74_ipl, PolyZone)
    ├── ⚙️ build-all.js           # Full-server build pipeline (esbuild + Vite)
    ├── ⚙️ obfuscate.js           # Multi-stage AST JavaScript Obfuscator
    ├── ⚙️ clean-duplicates.js    # Automated resource and bundle cleaner
    ├── 📦 package.json          # Root monorepo workspace configuration
    ├── 📦 pnpm-workspace.yaml   # Workspace packages map
    └── ⚙️ turbo.json            # Turbo execution graph config
```

---

## 🚀 Key Framework Features

| Component | Technology | Description |
|---|---|---|
| **Core & Identity** | TypeScript + NPX RPC | Multi-character system with ICU support, license validation, and state caching. |
| **Inventory** | React 18 + Z85 Encoding | Dual-inventory grid, drag-and-drop, weapon attachment slots, item degradation. |
| **Admin Panel** | React + FiveM ACE | Full player monitoring, godmode, vehicle spawning, target deletion, and live logging. |
| **Housing & Real Estate** | SolidJS + PolyZone | Interior customization, dynamic furniture placement, shared keys, and alarms. |
| **Financials & Banking** | React 18 + Tailwind | Corporate banking accounts, wire transfers, transaction audits, and cash ledgers. |
| **Healthcare & Wounds** | TypeScript Engine | Anatomical bone-damage tracking, realistic bleeding, surgery, and revive systems. |
| **Vehicle Systems** | TypeScript + Native Audio | Custom driving dynamics, double-clutching, Benny\x27s customization, and garage networks. |

---

## 🛠️ Installation & Quick Start

### 1. Prerequisites
- **FiveM Server Artifacts**: Recommended build `b3095` or latest recommended Windows artifacts.
- **Node.js**: v18.x or v20.x+ (LTS).
- **pnpm**: `npm install -g pnpm`
- **Database**: MySQL 8.0+ or MariaDB 10.6+ running on port `3306`.

### 2. Database Setup
1. Create a database named `nopixel4`:
   ```sql
   CREATE DATABASE nopixel4 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```
2. Import the schema:
   ```bash
   mysql -u root nopixel4 < nopixel4.sql
   ```

### 3. Server Configuration
Verify your connection string in `server.cfg`:
```cfg
set mysql_connection_string "mysql://root:@127.0.0.1/nopixel4?charset=utf8mb4"
sv_licenseKey "YOUR_CFX_LICENSE_KEY"
```

### 4. Start the Server
Double-click `start_server.bat` or run:
```cmd
start_server.bat
```

---

## 📦 Build Pipeline

All 160 scripts and 67 NUI web apps compile through the central build pipeline located in `resources/`.

### Quick Development Build (Clean & Readable)
Used during development for rapid debugging with clean source maps:
```bash
cd resources
node build-all.js
```

### Production Build (Obfuscated — NoPixel Standard)
Used for live production deployments. Compiles all scripts with AST control flow flattening and hexadecimal string encryption:
```bash
cd resources
node build-all.js --obfuscate
```

### Continuous Watch Mode
Automatically recompiles TypeScript scripts and React NUIs on file save:
```bash
cd resources
node build-all.js --watch
```

### Single Resource Obfuscation
```bash
cd resources
node obfuscate.js "[np-scripts]/inventory"
```

---

## 👑 Admin & Permission System

The server includes pre-configured **Admin / Godmode / SuperAdmin** permissions for owner discord account **`455776700018458625`**:

### Opening the Admin Menu
- **In-Game Chat Command**: `/admin`, `/adminmenu`, or `/menu`
- **F8 Console Command**: `admin`
- **Keybinding**: Configure under `ESC > Settings > Key Bindings > FiveM > zzAdmin > Open Menu`

### Server ACE Configuration (`server.cfg`)
```cfg
add_principal identifier.discord:455776700018458625 group.admin
add_principal identifier.discord:455776700018458625 group.superadmin
add_principal identifier.discord:455776700018458625 group.god
add_ace group.admin command allow
add_ace group.admin command.quit deny
add_ace group.superadmin command allow
add_ace group.god command allow
add_ace identifier.discord:455776700018458625 command allow
```

---

## 🇸🇦 دليل الاستخدام باللغة العربية

### نبذة عن المشروع
**KYZE PACK: NoPixel 4.0** هو سيرفر رول بلاي متكامل مبني على محرك وحزمة NoPixel 4.0 الأصلية، تم فك تشفير سكريبتاته بالكامل وتنظيمها وتحديث بنيتها التحتية لتعمل بأعلى أداء واستقرار ممكن:
1. **أكواد مقروءة ونظيفة**: تم استبدال الشفرات العشوائية المعقدة بأسماء برمجية واضحة ومعيارية بالكامل مكتوبة بـ **TypeScript**.
2. **واجهات تفاعلية متطورة (NUI)**: 67 واجهة مستخدم مبنية بأحدث تقنيات الويب الحديثة (**React 18 + SolidJS + Tailwind CSS + Vite**).
3. **نظام تشفير إنتاجي خاص**: إمكانية إعادة تشفير السيرفر كاملاً بكبسة زر واحدة بنفس خوارزميات NoPixel (`a0_` وخوارزميات Control Flow) عند رفعه للاعبين.
4. **لوحة تحكم إدارية كاملة**: مربوطة بحساب ديسكورد المالك مع صلاحيات ACE و Godmode فورية.

### أوامر البناء والتطوير
* **بناء سريع للأكواد أثناء التطوير**:
  ```bash
  cd resources
  node build-all.js
  ```
* **بناء مشفر بالكامل للسيرفر الإنتاجي**:
  ```bash
  cd resources
  node build-all.js --obfuscate
  ```
* **وضع التطوير المباشر (تحديث تلقائي عند التعديل)**:
  ```bash
  cd resources
  node build-all.js --watch
  ```

### فتح لوحة الإدارة في اللعبة
* اكتب في الشات: `/admin` أو `/adminmenu` أو `/menu`
* أو عبر كونسول **F8**: اكتب `admin`
* أو عبر اختصارات الكيبورد: `ESC > Settings > Key Bindings > FiveM > zzAdmin > Open Menu`

---

## 🛡️ License & Attribution

- **Project Core**: KYZE PACK Framework.
- **Original Architecture**: NoPixel 4.0 Roleplay Environment.
- **Maintainer & Lead Developer**: Kyze.

<div align="center">

Made with ❤️ by **Kyze** — Built for high performance, immersion, and stability.

</div>
