;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("meth:craftMeth", (amount) => {
    var _a, _b, _c;
    const src = source;
    if (!((_a = exports.inventory) == null ? void 0 : _a.HasItem(src, "meth_materials"))) {
      emitNet("meth:craftFailed", src, "No materials");
      return;
    }
    (_b = exports.inventory) == null ? void 0 : _b.RemoveItem(src, "meth_materials", amount);
    (_c = exports.inventory) == null ? void 0 : _c.AddItem(src, "meth", amount);
    emitNet("meth:craftSuccess", src, amount);
  });
  onNet("meth:sellMeth", (amount) => {
    var _a, _b, _c;
    const src = source;
    if ((((_a = exports.inventory) == null ? void 0 : _a.GetItemCount(src, "meth")) || 0) < amount) {
      emitNet("meth:sellFailed", src, "Not enough");
      return;
    }
    (_b = exports.inventory) == null ? void 0 : _b.RemoveItem(src, "meth", amount);
    const payout = amount * 1500;
    (_c = exports.financials) == null ? void 0 : _c.AddCash(src, payout, "Meth sale");
    emitNet("meth:sellSuccess", src, payout);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Meth loaded.`);
    }
  });
})();
