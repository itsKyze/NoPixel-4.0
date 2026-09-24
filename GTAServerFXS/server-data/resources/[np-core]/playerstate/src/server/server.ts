;
(function () {
  // playerstate server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const playerStates = new Map();
  exports("SetState", (src, key, value) => {
    if (!playerStates.has(src)) {
      playerStates.set(src, {});
    }
    playerStates.get(src)[key] = value;
    emitNet("playerstate:stateUpdated", src, key, value);
  });
  exports("GetState", (src, key) => playerStates.has(src) ? playerStates.get(src)[key] : null);
  exports("GetAllStates", src => playerStates.get(src) || {});
  on("playerDropped", () => {
    playerStates.delete(source);
  });
  onNet("playerstate:setState", (key, value) => {
    exports[resourceName].SetState(source, key, value);
  });
  console.log(`[${resourceName}] PlayerState loaded`);
})();