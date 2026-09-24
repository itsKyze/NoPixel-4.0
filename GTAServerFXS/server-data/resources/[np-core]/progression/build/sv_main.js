;
(function() {
  const resourceName = GetCurrentResourceName();
  exports("GetXP", (charId, cb) => {
    exports.oxmysql.scalar("SELECT `xp` FROM `character_progression` WHERE `character_id`=?", [charId], cb);
  });
  exports("AddXP", (charId, amount) => {
    exports.oxmysql.execute("INSERT INTO `character_progression` (`character_id`,`xp`) VALUES (?,?) ON DUPLICATE KEY UPDATE `xp`=`xp`+?", [charId, amount, amount]);
  });
  onNet("progression:addXP", (amount) => {
    var _a;
    const player = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(source);
    if (player == null ? void 0 : player.character) {
      exports[resourceName].AddXP(player.character.id, amount);
    }
  });
  console.log(`[${resourceName}] Progression loaded`);
})();
