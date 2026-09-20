;
(function() {
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
  onNet("stores:getInventory", (storeType) => {
    emitNet("stores:receiveInventory", source, menus[storeType] || menus.convenience);
  });
  onNet("stores:purchase", (storeType, itemName, amount) => {
    var _a, _b, _c;
    const src = source;
    const menu = menus[storeType] || menus.convenience;
    const item = menu.find((m) => m.name === itemName);
    if (!item) {
      return;
    }
    const cost = item.price * (amount || 1);
    if ((((_a = exports.financials) == null ? void 0 : _a.GetCash(src)) || 0) < cost) {
      emitNet("stores:purchaseFailed", src, "Not enough cash");
      return;
    }
    (_b = exports.financials) == null ? void 0 : _b.RemoveCash(src, cost, `Store: ${itemName}`);
    (_c = exports.inventory) == null ? void 0 : _c.AddItem(src, itemName, amount || 1, {
      restores: item.restores
    });
    emitNet("stores:purchased", src, itemName, amount || 1, cost);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Stores loaded.`);
    }
  });
})();
