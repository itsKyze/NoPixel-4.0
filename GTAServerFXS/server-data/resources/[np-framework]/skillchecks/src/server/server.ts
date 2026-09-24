// skillchecks - Server-side - NoPixel 4.0
;
(function () {
  const activeChecks = new Map();
  let checkIdCounter = 0;

  // Client notifies server of skillcheck result
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
    // Auto-timeout
    setTimeout(() => {
      const key = `${src}:${id}`;
      if (activeChecks.has(key)) {
        const c = activeChecks.get(key);
        activeChecks.delete(key);
        if (c.callback) {
          c.callback(false, src);
        }
      }
    }, (checkConfig.timeout || 10) * 1000);
    return id;
  });
  on("onResourceStart", res => {
    if (res === GetCurrentResourceName()) {
      console.log("[skillchecks] Server loaded.");
    }
  });
})();