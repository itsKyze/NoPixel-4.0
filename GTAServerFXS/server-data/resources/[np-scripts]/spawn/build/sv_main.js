;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("spawn:requestSpawn", (characterId) => {
    const src = source;
    exports.oxmysql.execute("SELECT `position`,`is_dead`,`is_jailed` FROM `characters` WHERE `id`=?", [characterId], (rows) => {
      if (!rows || !rows.length) {
        return;
      }
      const char = rows[0];
      if (char.is_jailed) {
        const jailData = { x: 1649.95, y: 2594.5, z: 45.56, heading: 90 };
        emitNet("spawn:doSpawn", src, jailData, char);
        return;
      }
      if (char.is_dead) {
        const deadData = { x: 340, y: -1391, z: 35, heading: 100 };
        emitNet("spawn:doSpawn", src, deadData, char);
        return;
      }
      let lastPosition = null;
      if (char.position) {
        try {
          lastPosition = JSON.parse(char.position);
        } catch (e) {
        }
      }
      emitNet("spawn:showSelector", src, lastPosition);
    });
  });
  onNet("spawn:savePosition", (pos) => {
    var _a, _b;
    const player = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(source);
    if ((_b = player == null ? void 0 : player.character) == null ? void 0 : _b.id) {
      exports.oxmysql.execute("UPDATE `characters` SET `position`=? WHERE `id`=?", [JSON.stringify(pos), player.character.id]);
    }
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Spawn loaded.`);
    }
  });
})();
