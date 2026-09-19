;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("hud:requestData", () => {
    var _a;
    const src = source;
    const player = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (!player) {
      return;
    }
    emitNet("hud:receiveData", src, {
      role: player.role,
      character: player.character
    });
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] HUD loaded.`);
    }
  });
})();
