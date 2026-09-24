;
(function () {
  // crime-hq - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const hqState = {
    isRaided: false,
    lastRaid: null,
    raidCooldown: 3600000 // 1 hour
  };
  onNet("crime-hq:startRaid", () => {
    const src = source;
    const now = Date.now();
    if (hqState.isRaided) {
      emitNet("crime-hq:alreadyRaided", src);
      return;
    }
    if (hqState.lastRaid && now - hqState.lastRaid < hqState.raidCooldown) {
      emitNet("crime-hq:onCooldown", src, Math.floor((hqState.raidCooldown - (now - hqState.lastRaid)) / 1000));
      return;
    }
    hqState.isRaided = true;
    hqState.lastRaid = now;
    emitNet("crime-hq:raidStarted", -1);
    exports.dispatch?.AddCall({
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
    }, 1200000); // 20 minutes
  });
  onNet("crime-hq:getState", () => {
    emitNet("crime-hq:receiveState", source, hqState);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Crime HQ loaded.`);
    }
  });
})();