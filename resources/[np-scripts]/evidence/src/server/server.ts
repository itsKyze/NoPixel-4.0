;
(function () {
  // evidence - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const evidenceItems = [];
  onNet("evidence:plant", (location, type, data) => {
    const item = {
      id: evidenceItems.length + 1,
      src: source,
      location,
      type,
      data,
      time: Date.now()
    };
    evidenceItems.push(item);
    for (const pid of getPlayers()) {
      const p = exports["np-base"]?.GetPlayer(parseInt(pid));
      if (p?.character?.job === "police") {
        emitNet("evidence:newEvidence", parseInt(pid), item);
      }
    }
  });
  onNet("evidence:collect", evidenceId => {
    const idx = evidenceItems.findIndex(e => e.id === evidenceId);
    if (idx !== -1) {
      evidenceItems.splice(idx, 1);
    }
    exports.inventory?.AddItem(source, "evidence_bag", 1, {
      evidenceId
    });
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Evidence loaded.`);
    }
  });
})();