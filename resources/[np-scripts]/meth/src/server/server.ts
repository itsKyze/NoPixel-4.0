;
(function () {
  // meth - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("meth:craftMeth", amount => {
    const src = source;
    if (!exports.inventory?.HasItem(src, "meth_materials")) {
      emitNet("meth:craftFailed", src, "No materials");
      return;
    }
    exports.inventory?.RemoveItem(src, "meth_materials", amount);
    exports.inventory?.AddItem(src, "meth", amount);
    emitNet("meth:craftSuccess", src, amount);
  });
  onNet("meth:sellMeth", amount => {
    const src = source;
    if ((exports.inventory?.GetItemCount(src, "meth") || 0) < amount) {
      emitNet("meth:sellFailed", src, "Not enough");
      return;
    }
    exports.inventory?.RemoveItem(src, "meth", amount);
    const payout = amount * 1500;
    exports.financials?.AddCash(src, payout, "Meth sale");
    emitNet("meth:sellSuccess", src, payout);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Meth loaded.`);
    }
  });
})();