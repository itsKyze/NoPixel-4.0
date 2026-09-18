;
(function () {
  // mechanics - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("mechanics:repairVehicle", (plate, price) => {
    const src = source;
    exports.oxmysql.execute("UPDATE `owned_vehicles` SET `engine`=1000,`body`=1000 WHERE `plate`=?", [plate]);
    const payout = price || 500;
    exports.financials?.AddCash(src, payout, "Repair job");
    emitNet("mechanics:repairComplete", src, plate, payout);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Mechanics loaded.`);
    }
  });
})();