(() => {
  "use strict";
  var varData_1 = {};
  ;
  const varData_2 = globalThis.NPX;
  const varData_3 = varData_2.Hud;
  const varData_4 = varData_2.Utils;
  const varData_5 = varData_2.Zones;
  const varData_6 = varData_2.Events;
  const varData_7 = varData_2.Streaming;
  const varData_8 = varData_2.Procedures;
  const varData_9 = varData_2.Interface;
  const varData_10 = null;
  ;
  const varData_11 = globalThis;
  async function handleAction_1(param_1) {
    return new Promise((param_1_1) => setTimeout(() => param_1_1(), param_1));
  }
  function handleAction_2(param_1, param_2) {
    return Math.floor(param_2 ? Math.random() * (param_2 - param_1) + param_1 : Math.random() * param_1);
  }
  ;
  let isDisabled = false;
  async function handleAction_3() {
  }
  varData_11.on("np-admin:currentDevmode", async (param_1) => {
    const varData_12 = await varData_8.execute("np-fiber:verify:userRank", "dev");
    if (varData_12 !== true) {
      return;
    }
    isDisabled = param_1;
  });
  ;
  function handleAction_4(param_1, param_2) {
    varData_11.RegisterNuiCallbackType(param_1);
    varData_11.on("__cfx_nui:" + param_1, param_2);
  }
  function handleAction_5(param_1) {
    varData_11.SendNuiMessage(JSON.stringify(param_1));
  }
  function handleAction_6() {
    return {
      serverId: CFX.GetPlayerServerId(CFX.PlayerId()),
      characterId: exports.isPed.isPed("cid"),
      firstName: exports.isPed.isPed("firstname"),
      lastName: exports.isPed.isPed("lastname"),
      phoneNumber: exports.isPed.isPed("phone_number")
    };
  }
  async function handleAction_7(param_1) {
    const varData_13 = typeof param_1 === "number" ? param_1 : CFX.GetHashKey(param_1);
    if (CFX.HasModelLoaded(varData_13)) {
      return true;
    } else if (!CFX.IsModelInCdimage(varData_13)) {
      return false;
    }
    CFX.RequestModel(varData_13);
    let isDisabled_12 = false;
    const varData_14 = CFX.setTimeout(() => isDisabled_12 = true, 6e4);
    while (!CFX.HasModelLoaded(varData_13) && !isDisabled_12) {
      await Wait(10);
    }
    CFX.clearTimeout(varData_14);
    return isDisabled_12 === false;
  }
  async function handleAction_8() {
    return new Promise(async (param_1) => {
      while (!varData_11.NetworkIsSessionStarted()) {
        await handleAction_1(100);
      }
      param_1();
    });
  }
  ;
  let isDisabled_1 = false;
  async function handleAction_9() {
  }
  handleAction_4("np:fiber:api:setState", (param_1, param_2) => {
    isDisabled_1 = param_1.active;
    const varData_15 = {
      voipStatus: isDisabled_1
    };
    exports.hud.sendAppEvent(varData_15);
    param_2({
      body: {},
      meta: {
        success: true,
        message: ""
      }
    });
  });
  varData_11.RegisterCommand("fiberToggleDebug", () => {
    if (!isDisabled) {
      return;
    }
    handleAction_5({
      type: "debug",
      payload: {}
    });
  }, false);
  ;
  const varData_16 = {
    token: void 0,
    rest_api: void 0,
    socket_api: void 0,
    server_hash: void 0
  };
  const varData_17 = varData_16;
  async function handleAction_10() {
    try {
      const varData_18 = await varData_8.execute("np:fiber:player:init");
      if (!varData_18) {
        throw new Error("Received no details from fiber for player.");
      }
      handleAction_11(varData_18.token, varData_18.rest_api, varData_18.socket_api, varData_18.server_hash);
      const varData_19 = {
        token: varData_18.token,
        endpoint: varData_18.rest_api
      };
      const varData_20 = {
        source: "np-nui",
        app: "main",
        event: "sync-game-state",
        data: varData_19
      };
      exports["np-ui"].SendUIMessage(varData_20);
      handleAction_5({
        type: "init",
        payload: {
          token: varData_18.token,
          endpoint: varData_18.socket_api,
          serverHash: varData_18.server_hash,
          serverId: GetPlayerServerId(PlayerId())
        }
      });
    } catch (err) {
      console.error("Unable to retrieve API details from server. Trying again...");
      setTimeout(() => handleAction_10(), 1e4);
    }
  }
  function handleAction_11(param_1, param_2, param_3, param_4) {
    varData_17.token = param_1;
    varData_17.rest_api = param_2;
    varData_17.socket_api = param_3;
    varData_17.server_hash = param_4;
  }
  function handleAction_12() {
    const varData_21 = {
      token: varData_17.token,
      endpoint: varData_17.rest_api,
      wsEndpoint: varData_17.socket_api
    };
    return varData_21;
  }
  exports("GetGameDetails", handleAction_12);
  function handleAction_13() {
    const varData_22 = {
      token: varData_17.token,
      endpoint: varData_17.socket_api
    };
    return varData_22;
  }
  ;
  async function handleAction_14() {
    await handleAction_9();
    await handleAction_10();
  }
  ;
  async function handleAction_15() {
  }
  handleAction_4("np:fiber:datagrid:message", (param_1, param_2) => {
    if (!param_1.event) {
      return;
    }
    varData_6.emit(param_1.event, param_1.data);
    param_2({
      body: {},
      meta: {
        success: true,
        message: ""
      }
    });
  });
  ;
  async function handleAction_16() {
    await handleAction_15();
  }
  ;
  class _0x427cf9 {
    constructor(param_1, param_2, _0x2b3138 = "interval") {
      this.callback = param_1;
      this.delay = param_2;
      this.mode = _0x2b3138;
      this.scheduled = {};
      this.tick = 0;
      this.data = {};
      this.hooks = /* @__PURE__ */ new Map([["active", []], ["preStop", []], ["preStart", []], ["afterStop", []], ["afterStart", []], ["stopAborted", []], ["startAborted", []]]);
    }
    get isActive() {
      return this.active;
    }
    async start() {
      if (this.active) {
        return;
      }
      this.aborted = false;
      this.scheduled = {};
      const varData_23 = this.hooks.get("preStart");
      try {
        for (const varData_24 of varData_23) {
          if (!this.aborted) {
            await varData_24.call(this);
          }
        }
      } catch (err) {
        this.aborted = true;
        console.log("Error while calling pre-start hook", err.message);
      }
      if (this.aborted) {
        try {
          const varData_25 = this.hooks.get("startAborted");
          for (const varData_26 of varData_25) {
            await varData_26.call(this);
          }
        } catch (err) {
          console.log("Error while calling start-aborted hook", err.message);
        }
        return;
      }
      this.active = true;
      const varData_27 = this.hooks.get("active");
      switch (this.mode) {
        case "tick": {
          this.threadId = varData_11.setTick(async () => {
            this.tick += 1;
            try {
              await this.callback.call(this);
              for (const varData_28 of varData_27) {
                await varData_28.call(this);
              }
            } catch (err) {
              console.log("Error while calling active hook", err.message);
            }
            if (this.delay > 0) {
              await new Promise((param_1) => varData_11.setTimeout(param_1, this.delay));
            }
          });
          break;
        }
        case "interval": {
          this.threadId = varData_11.setInterval(async () => {
            this.tick += 1;
            try {
              await this.callback.call(this);
              for (const varData_29 of varData_27) {
                await varData_29.call(this);
              }
            } catch (err) {
              console.log("Error while calling active hook", err.message);
            }
          }, this.delay);
          break;
        }
        case "timeout": {
          const varData_30 = () => {
            if (this.active) {
              this.threadId = varData_11.setTimeout(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const varData_31 of varData_27) {
                    await varData_31.call(this);
                  }
                } catch (err) {
                  console.log("Error while calling active hook", err.message);
                }
                return varData_30();
              }, this.delay);
            }
          };
          varData_30();
          break;
        }
      }
      const varData_32 = this.hooks.get("afterStart");
      try {
        for (const varData_33 of varData_32) {
          await varData_33.call(this);
        }
      } catch (err) {
        console.log("Error while calling after-start hook", err.message);
      }
    }
    async stop() {
      if (!this.active) {
        return;
      }
      const varData_34 = this.hooks.get("preStop");
      try {
        for (const varData_35 of varData_34) {
          if (!this.aborted) {
            await varData_35.call(this);
          }
        }
      } catch (err) {
        this.aborted = true;
        console.log("Error while calling pre-stop hook", err.message);
      }
      this.active = false;
      switch (this.mode) {
        case "tick": {
          varData_11.clearTick(this.threadId);
          break;
        }
        case "interval": {
          varData_11.clearInterval(this.threadId);
          break;
        }
        case "timeout": {
          varData_11.clearTimeout(this.threadId);
          break;
        }
      }
      if (this.aborted) {
        try {
          const varData_36 = this.hooks.get("stopAborted");
          for (const varData_37 of varData_36) {
            await varData_37.call(this);
          }
        } catch (err) {
          console.log("Error while calling stop-aborted hook", err.message);
        }
        return;
      }
      const varData_38 = this.hooks.get("afterStop");
      try {
        for (const varData_39 of varData_38) {
          await varData_39.call(this);
        }
      } catch (err) {
        console.log("Error while calling after-stop hook", err.message);
      }
    }
    abort() {
      this.aborted = true;
    }
    addHook(param_1, param_2) {
      var varData_40;
      if ((varData_40 = this.hooks.get(param_1)) === null || varData_40 === void 0) {
      } else {
        varData_40.push(param_2);
      }
    }
    setNextTick(param_1, param_2) {
      this.scheduled[param_1] = this.tick + param_2;
    }
    canTick(param_1) {
      return this.scheduled[param_1] === void 0 || this.tick >= this.scheduled[param_1];
    }
  }
  ;
  const varData_41 = new _0x427cf9(function() {
  }, 1e3, "tick");
  varData_41.addHook("preStart", function() {
    this.data.checks = {};
  });
  varData_41.addHook("active", function() {
    if (this.canTick("mainThread")) {
      this.setNextTick("mainThread", 5);
      this.data.playerId = varData_11.PlayerId();
      this.data.playerPed = varData_11.PlayerPedId();
      this.data.playerModel = varData_11.GetEntityModel(this.data.playerPed);
      this.data.playerCoords = varData_11.GetEntityCoords(this.data.playerPed, false);
    }
    this.delay = handleAction_2(700, 1400);
  });
  async function handleAction_17() {
    await handleAction_8();
    await varData_41.start();
  }
  ;
  async function handleAction_18() {
  }
  ;
  const varData_42 = {};
  async function handleAction_19() {
    varData_11.emitNet("np-fiber:phoneAPIReady");
  }
  varData_11.on("np-base:spawnInitialized", () => {
    const varData_43 = varData_11.GetEntityCoords(varData_11.PlayerPedId(), false);
    const varData_44 = varData_11.GetDistanceBetweenCoords(-682, -1092, 200, varData_43[0], varData_43[1], varData_43[2], true);
    if (varData_44 > 100) {
      return;
    }
    varData_42.hasSpawned = false;
  });
  varData_11.on("np-spawn:characterSpawned", () => {
    varData_11.setTimeout(() => {
      varData_42.hasSpawned = true;
    }, 5e3);
  });
  varData_11.on("wounds:changeDeathState", (param_1) => {
    varData_42.isDead = param_1;
  });
  varData_11.onNet("np-editor:loadEditor", () => {
    varData_42.onEditor = true;
  });
  varData_11.onNet("np-editor:closeEditor", () => {
    varData_42.onEditor = false;
  });
  varData_11.on("np-fiber:hotreload", (param_1) => {
    if (param_1 === void 0 || param_1 === 0) {
      return;
    }
    varData_42.hasSpawned = true;
    varData_42.isDead = varData_11.exports.isPed.isPed("dead");
  });
  ;
  async function handleAction_20() {
  }
  varData_41.addHook("active", async function() {
    if (varData_42.hasSpawned && this.canTick("playerChecks")) {
      this.setNextTick("playerChecks", handleAction_2(4, 8));
      this.data.checks.invisible = await handleAction_21(this.data.playerPed);
      this.data.checks.invincible = await handleAction_22(this.data.playerId);
      this.data.checks.spectating = await handleAction_23(this.data.playerId);
      this.data.checks.noclip = this.data.checks.invisible && this.data.checks.invincible;
      this.data.checks.infiniteHealth = await handleAction_24(this.data.playerPed, this.data.playerModel);
      handleAction_26(this.data.checks);
    }
  });
  async function handleAction_21(param_1) {
    if (varData_11.IsEntityVisible(param_1)) {
      return false;
    }
    if (varData_42.onEditor) {
      return false;
    }
    return true;
  }
  async function handleAction_22(param_1) {
    if (!varData_11.GetPlayerInvincible_2(param_1)) {
      return false;
    }
    if (varData_42.isDead) {
      return false;
    }
    return true;
  }
  async function handleAction_23(param_1) {
    return !!varData_11.NetworkIsInSpectatorMode();
  }
  async function handleAction_24(param_1, param_2) {
    const varData_45 = varData_11.GetEntityHealth(param_1);
    if (varData_45 > 200) {
      return true;
    }
    varData_11.SetEntityHealth(param_1, varData_45 - 2);
    await handleAction_1(25);
    const varData_46 = varData_11.GetEntityHealth(param_1);
    varData_11.SetEntityHealth(param_1, varData_46 + 2);
    return varData_45 === varData_46 && varData_45 !== 0 && varData_46 !== 0;
  }
  async function handleAction_25(param_1) {
    const varData_47 = CFX.GetPedArmour(param_1);
    if (varData_47 > 100) {
      return true;
    }
    CFX.SetPedArmour(param_1, varData_47 - 2);
    await Delay(25);
    const varData_48 = CFX.GetPedArmour(param_1);
    CFX.SetPedArmour(param_1, varData_48 + 2);
    return varData_47 === varData_48 && varData_47 !== 0 && varData_48 !== 0;
  }
  function handleAction_26(param_1) {
    let isDisabled_2 = false;
    const varData_49 = ["invisible", "invincible", "noclip", "infiniteArmor", "infiniteHealth"];
    for (const [_0xc37f55, _0x4327ad] of Object.entries(param_1)) {
      if (_0x4327ad && !varData_49.includes(_0xc37f55)) {
        isDisabled_2 = true;
        break;
      }
    }
    if (isDisabled_2 !== true) {
      return;
    }
    varData_11.emitNet("np-fiber:updatePhoneStatus", "playerChecks", param_1);
  }
  ;
  async function handleAction_27() {
    await handleAction_18();
    await handleAction_20();
  }
  ;
  async function handleAction_28() {
    await handleAction_19();
    await handleAction_27();
    await handleAction_17();
  }
  ;
  async function handleAction_29() {
    await handleAction_28();
    await handleAction_3();
    await handleAction_14();
    await handleAction_16();
  }
  varData_11.on("onClientResourceStop", (param_1) => {
    varData_11.emitNet("baseevents:hotreload", param_1);
  });
  ;
  const varData_50 = varData_11.GetCurrentResourceName();
  varData_11.on("onClientResourceStart", async (param_1) => {
    if (param_1 !== varData_50) {
      return;
    }
    await handleAction_29();
  });
})();
