;
(function () {
  // chopshop - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const available = [];
  function refresh() {
    exports.oxmysql.execute("SELECT `plate`,`model` FROM `owned_vehicles` ORDER BY RAND() LIMIT 5", [], rows => {
      available.length = 0;
      if (rows) {
        for (const r of rows) {
          available.push({
            plate: r.plate,
            model: r.model,
            reward: Math.floor(Math.random() * 3000) + 1000
          });
        }
      }
    });
  }
  setInterval(refresh, 300000);
  on("onResourceStart", res => {
    if (res === resourceName) {
      refresh();
      console.log(`[${resourceName}] Chopshop loaded.`);
    }
  });
  onNet("chopshop:getList", () => {
    emitNet("chopshop:receiveList", source, available);
  });
  onNet("chopshop:chop", plate => {
    const src = source;
    const v = available.find(x => x.plate === plate);
    if (!v) {
      return;
    }
    exports.financials?.AddCash(src, v.reward, "Chopshop");
    exports.oxmysql.execute("DELETE FROM `owned_vehicles` WHERE `plate`=?", [plate]);
    const idx = available.findIndex(x => x.plate === plate);
    if (idx !== -1) {
      available.splice(idx, 1);
    }
    emitNet("chopshop:chopped", src, v.reward);
  });
})();