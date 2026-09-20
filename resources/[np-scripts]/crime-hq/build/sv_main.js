;
(function() {
  const resourceName = GetCurrentResourceName();
  const hqState = {
    isRaided: false,
    lastRaid: null,
    raidCooldown: 36e5
    // 1 hour
  };
  onNet("crime-hq:startRaid", () => {
    var _a;
    const src = source;
    const now = Date.now();
    if (hqState.isRaided) {
      emitNet("crime-hq:alreadyRaided", src);
      return;
    }
    if (hqState.lastRaid && now - hqState.lastRaid < hqState.raidCooldown) {
      emitNet("crime-hq:onCooldown", src, Math.floor((hqState.raidCooldown - (now - hqState.lastRaid)) / 1e3));
      return;
    }
    hqState.isRaided = true;
    hqState.lastRaid = now;
    emitNet("crime-hq:raidStarted", -1);
    (_a = exports.dispatch) == null ? void 0 : _a.AddCall({
      type: "Crime HQ Raid",
      location: {
        x: 0,
        y: 0,
        z: 0
      },
      priority: 1,
      description: "Crime HQ being raided"
    });
    setTimeout(() => {
      hqState.isRaided = false;
      emitNet("crime-hq:raidEnded", -1);
    }, 12e5);
  });
  onNet("crime-hq:getState", () => {
    emitNet("crime-hq:receiveState", source, hqState);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Crime HQ loaded.`);
    }
  });
})();
