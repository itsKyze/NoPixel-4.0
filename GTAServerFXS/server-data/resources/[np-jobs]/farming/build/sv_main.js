;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("farming:harvest", (cropType) => {
    var _a;
    const src = source;
    const crops = {
      lettuce: 30,
      tomato: 25,
      corn: 40
    };
    if (!crops[cropType]) {
      return;
    }
    const amount = Math.floor(Math.random() * 5) + 1;
    (_a = exports.inventory) == null ? void 0 : _a.AddItem(src, cropType, amount);
    emitNet("farming:harvested", src, cropType, amount);
  });
  onNet("farming:sell", (items) => {
    var _a, _b, _c;
    const src = source;
    const crops = {
      lettuce: 30,
      tomato: 25,
      corn: 40
    };
    let total = 0;
    for (const {
      name,
      amount
    } of items) {
      if (!crops[name]) {
        continue;
      }
      const count = Math.min(amount, ((_a = exports.inventory) == null ? void 0 : _a.GetItemCount(src, name)) || 0);
      if (count > 0) {
        (_b = exports.inventory) == null ? void 0 : _b.RemoveItem(src, name, count);
        total += crops[name] * count;
      }
    }
    if (total > 0) {
      (_c = exports.financials) == null ? void 0 : _c.AddCash(src, total, "Farming sale");
    }
    emitNet("farming:sold", src, total);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Farming loaded.`);
    }
  });
})();
