;
(function() {
  const activeChecks = /* @__PURE__ */ new Map();
  let checkIdCounter = 0;
  onNet("skillchecks:result", (checkId, passed) => {
    const src = source;
    const check = activeChecks.get(`${src}:${checkId}`);
    if (check && check.callback) {
      check.callback(passed, src);
      activeChecks.delete(`${src}:${checkId}`);
    }
  });
  exports("StartCheck", (src, checkConfig, callback) => {
    const id = ++checkIdCounter;
    activeChecks.set(`${src}:${id}`, {
      config: checkConfig,
      callback
    });
    emitNet("skillchecks:start", src, id, checkConfig);
    setTimeout(() => {
      const key = `${src}:${id}`;
      if (activeChecks.has(key)) {
        const c = activeChecks.get(key);
        activeChecks.delete(key);
        if (c.callback) {
          c.callback(false, src);
        }
      }
    }, (checkConfig.timeout || 10) * 1e3);
    return id;
  });
  on("onResourceStart", (res) => {
    if (res === GetCurrentResourceName()) {
      console.log("[skillchecks] Server loaded.");
    }
  });
})();
