;
(function() {
  const resourceName = GetCurrentResourceName();
  const logs = [];
  exports("Log", (category, msg, src) => {
    logs.push({
      time: (/* @__PURE__ */ new Date()).toISOString(),
      category,
      msg,
      player: src || "server"
    });
    console.log(`[LOG:${category}] ${msg}`);
  });
  exports("GetLogs", () => logs);
  console.log(`[${resourceName}] Log system loaded`);
})();
