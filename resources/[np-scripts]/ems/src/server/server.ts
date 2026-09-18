;
(function () {
  // ems - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("ems:callAlert", (location, type) => {
    for (const pid of getPlayers()) {
      const p = exports["np-base"]?.GetPlayer(parseInt(pid));
      if (p?.character?.job === "ems") {
        emitNet("ems:receiveAlert", parseInt(pid), {
          src: source,
          location,
          type,
          time: Date.now()
        });
      }
    }
  });
  onNet("ems:revivePlayer", targetSrc => {
    emitNet("wounds:revived", targetSrc);
    const player = exports["np-base"]?.GetPlayer(targetSrc);
    if (player?.character?.id) {
      exports.oxmysql.execute("UPDATE `characters` SET `is_dead`=0 WHERE `id`=?", [player.character.id]);
    }
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] EMS loaded.`);
    }
  });
})();