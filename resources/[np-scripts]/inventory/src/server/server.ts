;
(function () {
  // inventory - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const playerInventories = new Map();
  async function loadInventory(charId) {
    const invId = `player_${charId}`;
    const rows = await new Promise(r => exports.oxmysql.execute("SELECT * FROM `inventory_items` WHERE `inventory_id`=?", [invId], res => r(res || [])));
    return {
      id: invId,
      items: rows
    };
  }
  on("np-base:characterSelected", (src, char) => {
    loadInventory(char.id).then(inv => {
      playerInventories.set(src, inv);
      emitNet("inventory:loadInventory", src, inv);
    });
  });
  on("playerDropped", () => {
    playerInventories.delete(source);
  });
  onNet("inventory:requestOpen", () => {
    const inv = playerInventories.get(source);
    if (inv) {
      emitNet("inventory:openInventory", source, inv);
    }
  });
  onNet("inventory:addItem", (itemName, amount, metadata) => {
    const src = source;
    const inv = playerInventories.get(src);
    if (!inv) {
      return;
    }
    const existing = inv.items.find(i => i.item_name === itemName);
    if (existing) {
      existing.amount += amount || 1;
      exports.oxmysql.execute("UPDATE `inventory_items` SET `amount`=? WHERE `inventory_id`=? AND `item_name`=?", [existing.amount, inv.id, itemName]);
    } else {
      const slot = inv.items.length + 1;
      inv.items.push({
        inventory_id: inv.id,
        item_name: itemName,
        amount: amount || 1,
        slot
      });
      exports.oxmysql.execute("INSERT INTO `inventory_items` (`inventory_id`,`item_name`,`amount`,`slot`) VALUES (?,?,?,?)", [inv.id, itemName, amount || 1, slot]);
    }
    emitNet("inventory:updateInventory", src, inv);
  });
  onNet("inventory:removeItem", (itemName, amount) => {
    const src = source;
    const inv = playerInventories.get(src);
    if (!inv) {
      return;
    }
    const item = inv.items.find(i => i.item_name === itemName);
    if (!item) {
      return;
    }
    item.amount -= amount || 1;
    if (item.amount <= 0) {
      inv.items = inv.items.filter(i => i.item_name !== itemName);
      exports.oxmysql.execute("DELETE FROM `inventory_items` WHERE `inventory_id`=? AND `item_name`=?", [inv.id, itemName]);
    } else {
      exports.oxmysql.execute("UPDATE `inventory_items` SET `amount`=? WHERE `inventory_id`=? AND `item_name`=?", [item.amount, inv.id, itemName]);
    }
    emitNet("inventory:updateInventory", src, inv);
  });
  exports("AddItem", (src, name, amount, meta) => {
    emitNet("inventory:addItem", src, name, amount, meta);
  });
  exports("RemoveItem", (src, name, amount) => {
    emitNet("inventory:removeItem", src, name, amount);
  });
  exports("HasItem", (src, name) => {
    const inv = playerInventories.get(src);
    if (inv) {
      return inv.items.some(i => i.item_name === name && i.amount > 0);
    } else {
      return false;
    }
  });
  exports("GetItemCount", (src, name) => {
    const inv = playerInventories.get(src);
    if (!inv) {
      return 0;
    }
    const i = inv.items.find(i => i.item_name === name);
    if (i) {
      return i.amount;
    } else {
      return 0;
    }
  });
  exports("GetInventory", src => playerInventories.get(src) || null);
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Inventory loaded.`);
    }
  });
})();