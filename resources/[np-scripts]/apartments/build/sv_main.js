;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("apartments:getList", () => {
    exports.oxmysql.execute("SELECT * FROM `houses` WHERE `identifier` LIKE 'apt_%'", [], (rows) => {
      emitNet("apartments:receiveList", source, rows || []);
    });
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Apartments loaded.`);
    }
  });
})();
