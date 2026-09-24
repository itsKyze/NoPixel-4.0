;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("ems:callAlert", (location, type) => {
    var _a, _b;
    for (const pid of getPlayers()) {
      const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(parseInt(pid));
      if (((_b = p == null ? void 0 : p.character) == null ? void 0 : _b.job) === "ems") {
        emitNet("ems:receiveAlert", parseInt(pid), {
          src: source,
          location,
          type,
          time: Date.now()
        });
      }
    }
  });
  onNet("ems:revivePlayer", (targetSrc) => {
    var _a, _b;
    emitNet("wounds:revived", targetSrc);
    const player = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(targetSrc);
    if ((_b = player == null ? void 0 : player.character) == null ? void 0 : _b.id) {
      exports.oxmysql.execute("UPDATE `characters` SET `is_dead`=0 WHERE `id`=?", [player.character.id]);
    }
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] EMS loaded.`);
    }
  });
})();
