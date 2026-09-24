;
(function() {
  const resourceName = GetCurrentResourceName();
  const available = [];
  function refresh() {
    exports.oxmysql.execute("SELECT `plate`,`model` FROM `owned_vehicles` ORDER BY RAND() LIMIT 5", [], (rows) => {
      available.length = 0;
      if (rows) {
        for (const r of rows) {
          available.push({
            plate: r.plate,
            model: r.model,
            reward: Math.floor(Math.random() * 3e3) + 1e3
          });
        }
      }
    });
  }
  setInterval(refresh, 3e5);
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      refresh();
      console.log(`[${resourceName}] Chopshop loaded.`);
    }
  });
  onNet("chopshop:getList", () => {
    emitNet("chopshop:receiveList", source, available);
  });
  onNet("chopshop:chop", (plate) => {
    var _a;
    const src = source;
    const v = available.find((x) => x.plate === plate);
    if (!v) {
      return;
    }
    (_a = exports.financials) == null ? void 0 : _a.AddCash(src, v.reward, "Chopshop");
    exports.oxmysql.execute("DELETE FROM `owned_vehicles` WHERE `plate`=?", [plate]);
    const idx = available.findIndex((x) => x.plate === plate);
    if (idx !== -1) {
      available.splice(idx, 1);
    }
    emitNet("chopshop:chopped", src, v.reward);
  });
})();
