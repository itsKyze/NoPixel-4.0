;
(function () {
  // stores - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const menus = {
    convenience: [{
      name: "sandwich",
      label: "Sandwich",
      price: 10,
      restores: 30
    }, {
      name: "water",
      label: "Water",
      price: 5,
      restores: 15
    }, {
      name: "beer",
      label: "Beer",
      price: 8,
      restores: 10
    }, {
      name: "bandage",
      label: "Bandage",
      price: 25,
      restores: 0
    }]
  };
  onNet("stores:getInventory", storeType => {
    emitNet("stores:receiveInventory", source, menus[storeType] || menus.convenience);
  });
  onNet("stores:purchase", (storeType, itemName, amount) => {
    const src = source;
    const menu = menus[storeType] || menus.convenience;
    const item = menu.find(m => m.name === itemName);
    if (!item) {
      return;
    }
    const cost = item.price * (amount || 1);
    if ((exports.financials?.GetCash(src) || 0) < cost) {
      emitNet("stores:purchaseFailed", src, "Not enough cash");
      return;
    }
    exports.financials?.RemoveCash(src, cost, `Store: ${itemName}`);
    exports.inventory?.AddItem(src, itemName, amount || 1, {
      restores: item.restores
    });
    emitNet("stores:purchased", src, itemName, amount || 1, cost);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Stores loaded.`);
    }
  });
})();