;
(function () {
  // hud - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("hud:requestData", () => {
    const src = source;
    const player = exports["np-base"]?.GetPlayer(src);
    if (!player) {
      return;
    }
    emitNet("hud:receiveData", src, {
      role: player.role,
      character: player.character
    });
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] HUD loaded.`);
    }
  });
})();