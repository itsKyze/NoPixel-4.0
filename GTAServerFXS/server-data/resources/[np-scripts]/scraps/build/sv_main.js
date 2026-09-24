;
(function() {
  const resourceName = GetCurrentResourceName();
  const scrapLocations = [{
    id: 1,
    coords: {
      x: 2877.06,
      y: 2835.61,
      z: 41.17
    },
    type: "metal_scrap",
    respawn: 3e5
  }, {
    id: 2,
    coords: {
      x: 2950,
      y: 2850,
      z: 40
    },
    type: "plastic_scrap",
    respawn: 3e5
  }, {
    id: 3,
    coords: {
      x: 2900,
      y: 2900,
      z: 40
    },
    type: "glass_scrap",
    respawn: 48e4
  }];
  const collectedScraps = /* @__PURE__ */ new Set();
  onNet("scraps:getLocations", () => {
    const available = scrapLocations.filter((s) => !collectedScraps.has(s.id));
    emitNet("scraps:receiveLocations", source, available);
  });
  onNet("scraps:collect", (scrapId) => {
    var _a;
    const src = source;
    const scrap = scrapLocations.find((s) => s.id === scrapId);
    if (!scrap || collectedScraps.has(scrapId)) {
      emitNet("scraps:alreadyCollected", src);
      return;
    }
    collectedScraps.add(scrapId);
    const amount = Math.floor(Math.random() * 3) + 1;
    (_a = exports.inventory) == null ? void 0 : _a.AddItem(src, scrap.type, amount);
    emitNet("scraps:collected", src, scrap.type, amount);
    emitNet("scraps:locationUsed", -1, scrapId);
    setTimeout(() => {
      collectedScraps.delete(scrapId);
      emitNet("scraps:locationRespawned", -1, scrapId);
    }, scrap.respawn);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Scraps loaded.`);
    }
  });
})();
