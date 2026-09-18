;
(function () {
  // farming - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("farming:harvest", cropType => {
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
    exports.inventory?.AddItem(src, cropType, amount);
    emitNet("farming:harvested", src, cropType, amount);
  });
  onNet("farming:sell", items => {
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
      const count = Math.min(amount, exports.inventory?.GetItemCount(src, name) || 0);
      if (count > 0) {
        exports.inventory?.RemoveItem(src, name, count);
        total += crops[name] * count;
      }
    }
    if (total > 0) {
      exports.financials?.AddCash(src, total, "Farming sale");
    }
    emitNet("farming:sold", src, total);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Farming loaded.`);
    }
  });
})();