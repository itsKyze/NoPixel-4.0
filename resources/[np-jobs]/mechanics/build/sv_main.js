;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("mechanics:repairVehicle", (plate, price) => {
    var _a;
    const src = source;
    exports.oxmysql.execute("UPDATE `owned_vehicles` SET `engine`=1000,`body`=1000 WHERE `plate`=?", [plate]);
    const payout = price || 500;
    (_a = exports.financials) == null ? void 0 : _a.AddCash(src, payout, "Repair job");
    emitNet("mechanics:repairComplete", src, plate, payout);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Mechanics loaded.`);
    }
  });
})();
