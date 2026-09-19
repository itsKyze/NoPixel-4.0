;
(function() {
  const resourceName = GetCurrentResourceName();
  const evidenceItems = [];
  onNet("evidence:plant", (location, type, data) => {
    var _a, _b;
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
      const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(parseInt(pid));
      if (((_b = p == null ? void 0 : p.character) == null ? void 0 : _b.job) === "police") {
        emitNet("evidence:newEvidence", parseInt(pid), item);
      }
    }
  });
  onNet("evidence:collect", (evidenceId) => {
    var _a;
    const idx = evidenceItems.findIndex((e) => e.id === evidenceId);
    if (idx !== -1) {
      evidenceItems.splice(idx, 1);
    }
    (_a = exports.inventory) == null ? void 0 : _a.AddItem(source, "evidence_bag", 1, {
      evidenceId
    });
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Evidence loaded.`);
    }
  });
})();
