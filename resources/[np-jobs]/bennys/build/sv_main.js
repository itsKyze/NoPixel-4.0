;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("bennys:repair", (plate) => {
    exports.oxmysql.execute("UPDATE `owned_vehicles` SET `engine`=1000,`body`=1000 WHERE `plate`=?", [plate]);
    emitNet("bennys:repaired", source, plate);
  });
  onNet("bennys:applyMod", (plate, mod, value) => {
    exports.oxmysql.execute("SELECT `mods` FROM `owned_vehicles` WHERE `plate`=?", [plate], (rows) => {
      if (!rows || !rows.length) {
        return;
      }
      const mods = rows[0].mods ? JSON.parse(rows[0].mods) : {};
      mods[mod] = value;
      exports.oxmysql.execute("UPDATE `owned_vehicles` SET `mods`=? WHERE `plate`=?", [JSON.stringify(mods), plate]);
      emitNet("bennys:modApplied", source, mod, value);
    });
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Bennys loaded.`);
    }
  });
})();
