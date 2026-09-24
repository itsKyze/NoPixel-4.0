;
(function () {
  // wounds - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const playerWounds = new Map();
  onNet("wounds:update", wounds => {
    playerWounds.set(source, wounds);
  });
  onNet("wounds:death", () => {
    emit("wounds:playerDied", source);
    emitNet("wounds:sendToHospital", source);
  });
  onNet("wounds:revive", targetSrc => {
    const target = targetSrc || source;
    if (!target) return;
    emitNet("wounds:revived", target);
    emit("wounds:playerRevived", target, source);
  });
  on("playerDropped", () => {
    playerWounds.delete(source);
  });
  exports("GetWounds", src => playerWounds.get(src) || []);
  exports("IsPlayerDead", src => (playerWounds.get(src) || []).filter(w => w.severe).length >= 3);
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Wounds loaded.`);
    }
  });
})();