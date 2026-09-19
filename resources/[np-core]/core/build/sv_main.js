;
(function() {
  const resourceName = GetCurrentResourceName();
  const CoreState = {
    initialized: false,
    startTime: Date.now(),
    modules: /* @__PURE__ */ new Map()
  };
  exports("RegisterModule", (name, module) => {
    CoreState.modules.set(name, module);
    console.log(`[${resourceName}] Module registered: ${name}`);
  });
  exports("GetModule", (name) => {
    return CoreState.modules.get(name) || null;
  });
  exports("IsReady", () => CoreState.initialized);
  exports("GetUptime", () => Math.floor((Date.now() - CoreState.startTime) / 1e3));
  RegisterCommand("restart", (src, args) => {
    if (src !== 0) {
      return;
    }
    const resource = args[0];
    if (resource) {
      StopResource(resource);
      setTimeout(() => StartResource(resource), 500);
      console.log(`[${resourceName}] Restarted resource: ${resource}`);
    }
  }, false);
  RegisterCommand("status", (src, args) => {
    if (src !== 0) {
      return;
    }
    const players = getPlayers();
    console.log(`[STATUS] Players online: ${players.length}`);
    console.log(`[STATUS] Uptime: ${Math.floor((Date.now() - CoreState.startTime) / 1e3)}s`);
    console.log(`[STATUS] Modules registered: ${CoreState.modules.size}`);
  }, false);
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    CoreState.initialized = true;
    console.log(`[${resourceName}] Core initialized.`);
  });
  on("onResourceStop", (res) => {
    if (res !== resourceName) {
      return;
    }
    CoreState.initialized = false;
  });
})();
