;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("industrial:deliverCargo", (cargoId, destination) => {
    var _a;
    const src = source;
    const payout = Math.floor(Math.random() * 2e3) + 1e3;
    (_a = exports.financials) == null ? void 0 : _a.AddCash(src, payout, "Industrial delivery");
    emitNet("industrial:deliveryComplete", src, payout);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Industrial loaded.`);
    }
  });
})();
