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

      // Jailed → teleport directly to jail
      if (char.is_jailed) {
        const jailData = { x: 1649.95, y: 2594.5, z: 45.56, heading: 90 };
        emitNet("spawn:doSpawn", src, jailData, char);
        return;
      }

      // Dead → teleport directly to hospital
      if (char.is_dead) {
        const deadData = { x: 340, y: -1391, z: 35, heading: 100 };
        emitNet("spawn:doSpawn", src, deadData, char);
        return;
      }

      // Alive returning player → parse last position and send to client
      // so the spawn selector UI can be shown with "Last Location" option
      let lastPosition: { x: number; y: number; z: number; heading?: number } | null = null;
      if (char.position) {
        try {
          lastPosition = JSON.parse(char.position);
        } catch (e) {}
      }
      // Emit spawn:showSelector so client shows the spawn UI with Last Location
      emitNet("spawn:showSelector", src, lastPosition);
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