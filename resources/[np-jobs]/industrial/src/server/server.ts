;
(function () {
  // industrial - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("industrial:deliverCargo", (cargoId, destination) => {
    const src = source;
    const payout = Math.floor(Math.random() * 2000) + 1000;
    exports.financials?.AddCash(src, payout, "Industrial delivery");
    emitNet("industrial:deliveryComplete", src, payout);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Industrial loaded.`);
    }
  });
})();