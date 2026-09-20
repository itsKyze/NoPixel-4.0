;
(function() {
  const resourceName = GetCurrentResourceName();
  const moduleConfigs = {
    misc: {
      meCommandDistance: 10,
      doCommandDistance: 15,
      oocCommandDistance: 50,
      chatRange: 25,
      deathScreen: true,
      respawnTimer: 5e3,
      useNativeHelpers: true
    },
    whitelist: {
      enabled: false,
      kickMessage: "You are not whitelisted on this server.",
      bypassRole: "admin"
    },
    characters: {
      maxCharacters: 2,
      nameChangeAllowed: false,
      defaultModel: "mp_m_freemode_01",
      minAge: 18,
      maxAge: 80,
      nationalities: ["American", "Mexican", "Canadian", "British", "German", "French", "Italian", "Japanese", "Korean"]
    },
    hud: {
      minimap: true,
      minimapExpanded: false,
      showPlayerCount: true,
      healthBarColor: {
        r: 220,
        g: 60,
        b: 60
      },
      armorBarColor: {
        r: 60,
        g: 120,
        b: 220
      },
      hungerBarColor: {
        r: 220,
        g: 180,
        b: 60
      },
      thirstBarColor: {
        r: 60,
        g: 180,
        b: 220
      }
    },
    inventory: {
      maxWeight: 30,
      maxSlots: 40,
      hotbarSlots: 5,
      dropOnDeath: false,
      weightEnabled: true
    },
    vehicles: {
      fuelEnabled: true,
      fuelConsumption: 1,
      maxFuel: 100,
      keysRequired: true,
      spawnWithFuel: 80
    },
    economy: {
      startCash: 500,
      startBank: 5e3,
      payDayInterval: 30,
      // minutes
      payDayMultiplier: 1,
      maxCashCarry: 5e4,
      taxRate: 0.1
    },
    jobs: {
      salaryInterval: 30,
      // minutes
      onDutyRequired: true,
      showJobBlips: true,
      allowUnemployed: true
    },
    crimes: {
      cooldowns: {
        bank: {
          hours: 2
        },
        jewelry: {
          hours: 1
        },
        fleeca: {
          minutes: 30
        },
        store: {
          minutes: 15
        }
      },
      alertPolice: true,
      requireCops: 2
    },
    housing: {
      maxFurniture: 50,
      furnitureEnabled: true,
      garageEnabled: true,
      maxGarageVehicles: 5
    },
    police: {
      requiredCopsOnline: 0,
      strikeSystem: true,
      maxStrikes: 3,
      impoundFee: 1500,
      jailLocation: {
        x: 1649.95,
        y: 2594.5,
        z: 45.56,
        heading: 90
      },
      hospitalLocation: {
        x: 340,
        y: -1391,
        z: 35,
        heading: 100
      }
    },
    phones: {
      enabled: true,
      callRange: -1,
      // -1 = global
      textEnabled: true,
      bankingApp: true,
      tweeterApp: true,
      contactsApp: true
    },
    weapons: {
      reloadEnabled: true,
      ammoEnabled: true,
      durabilityEnabled: false,
      carryLimit: 4
    },
    map: {
      showPlayerBlips: false,
      showPoliceBlips: true,
      showEmsBlips: true,
      blipRange: 200
    },
    time: {
      syncEnabled: true,
      timeMultiplier: 2,
      startHour: 8,
      startMinute: 0
    },
    weather: {
      syncEnabled: true,
      changeInterval: 30,
      // minutes
      blackoutEnabled: false
    },
    server: {
      name: "NoPixel 4.0",
      logo: "",
      discord: "discord.gg/nopixel",
      website: "nopixel.net",
      rules: "Follow the rules."
    },
    chopshop: {
      properties: []
    },
    news: {
      deliveryCoords: [-1083.1, -245.8, 37.7]
    },
    sewers: {
      interactionModels: []
    }
  };
  exports("GetModuleConfig", (moduleName) => {
    if (!moduleName) {
      return moduleConfigs;
    }
    const cfg = moduleConfigs[moduleName];
    if (!cfg) {
      console.warn(`[${resourceName}] GetModuleConfig: Unknown module "${moduleName}"`);
      return {};
    }
    return cfg;
  });
  exports("SetModuleConfig", (moduleName, key, value) => {
    if (!moduleConfigs[moduleName]) {
      moduleConfigs[moduleName] = {};
    }
    moduleConfigs[moduleName][key] = value;
  });
  exports("GetFullConfig", () => moduleConfigs);
  onNet("config:requestModule", (moduleName) => {
    const src = source;
    const cfg = moduleConfigs[moduleName] || {};
    const safeModules = ["misc", "hud", "map", "time", "weather", "server", "phones"];
    if (safeModules.includes(moduleName)) {
      emitNet("config:receiveModule", src, moduleName, cfg);
    }
  });
  if (globalThis.NPX && globalThis.NPX.Procedures) {
    globalThis.NPX.Procedures.register("config:getClientConfig", (src) => {
      const list = [];
      for (const [k, v] of Object.entries(moduleConfigs)) {
        list.push({
          configId: k,
          data: v
        });
      }
      if (moduleConfigs.misc) {
        list.push({
          configId: "main",
          data: moduleConfigs.misc
        });
      }
      return list;
    });
  }
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Config loaded with ${Object.keys(moduleConfigs).length} modules.`);
  });
})();
