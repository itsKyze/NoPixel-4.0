;
(function () {
  // storage - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("storage:open", (storageId, type) => {
    const src = source;
    exports.oxmysql.execute("SELECT * FROM `inventories` WHERE `id`=?", [storageId], rows => {
      if (!rows || !rows.length) {
        exports.oxmysql.insert("INSERT INTO `inventories` (`id`,`type`) VALUES (?,?)", [storageId, type || "storage"]);
        emitNet("storage:receiveInventory", src, {
          id: storageId,
          items: []
        });
        return;
      }
      exports.oxmysql.execute("SELECT * FROM `inventory_items` WHERE `inventory_id`=?", [storageId], items => {
        emitNet("storage:receiveInventory", src, {
          id: storageId,
          items: items || []
        });
      });
    });
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Storage loaded.`);
    }
  });
})();