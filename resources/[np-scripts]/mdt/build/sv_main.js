;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("mdt:search", (type, query) => {
    const src = source;
    if (type === "citizen") {
      exports.oxmysql.execute("SELECT c.*,u.role FROM `characters` c JOIN `users` u ON c.user_id=u.id WHERE c.firstname LIKE ? OR c.lastname LIKE ? LIMIT 10", [`%${query}%`, `%${query}%`], (rows) => emitNet("mdt:searchResults", src, rows || []));
    } else if (type === "vehicle") {
      exports.oxmysql.execute("SELECT * FROM `owned_vehicles` WHERE `plate` LIKE ? LIMIT 10", [`%${query}%`], (rows) => emitNet("mdt:searchResults", src, rows || []));
    }
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] MDT loaded.`);
    }
  });
})();
