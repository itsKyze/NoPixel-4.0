;
(function () {
  // spawn - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("spawn:requestSpawn", characterId => {
    const src = source;
    exports.oxmysql.execute("SELECT `position`,`is_dead`,`is_jailed` FROM `characters` WHERE `id`=?", [characterId], rows => {
      if (!rows || !rows.length) {
        return;
      }
      const char = rows[0];
      let spawnData = {
        x: -3972.28,
        y: 2017.22,
        z: 500.92,
        heading: 0
      };
      if (char.is_jailed) {
        spawnData = {
          x: 1649.95,
          y: 2594.5,
          z: 45.56,
          heading: 90
        };
      } else if (char.is_dead) {
        spawnData = {
          x: 340,
          y: -1391,
          z: 35,
          heading: 100
        };
      } else if (char.position) {
        try {
          spawnData = JSON.parse(char.position);
        } catch (e) {}
      }
      emitNet("spawn:doSpawn", src, spawnData, char);
    });
  });
  onNet("spawn:savePosition", pos => {
    const player = exports["np-base"]?.GetPlayer(source);
    if (player?.character?.id) {
      exports.oxmysql.execute("UPDATE `characters` SET `position`=? WHERE `id`=?", [JSON.stringify(pos), player.character.id]);
    }
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Spawn loaded.`);
    }
  });
})();