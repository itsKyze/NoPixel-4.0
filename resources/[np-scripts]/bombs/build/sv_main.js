;
(function() {
  const resourceName = GetCurrentResourceName();
  const activeBombs = /* @__PURE__ */ new Map();
  onNet("bombs:plant", (location, type, timer) => {
    var _a;
    const src = source;
    const bombId = `bomb_${Date.now()}_${src}`;
    const bomb = {
      id: bombId,
      src,
      location,
      type,
      timer: timer || 60,
      planted: Date.now()
    };
    activeBombs.set(bombId, bomb);
    emitNet("bombs:planted", src, bombId);
    (_a = exports.dispatch) == null ? void 0 : _a.AddCall({
      type: "Bomb Threat",
      location,
      priority: 1,
      description: "Bomb planted - immediate response required"
    });
    setTimeout(() => {
      if (activeBombs.has(bombId)) {
        activeBombs.delete(bombId);
        emitNet("bombs:detonate", -1, bombId, location, type);
      }
    }, (timer || 60) * 1e3);
  });
  onNet("bombs:defuse", (bombId) => {
    const src = source;
    if (activeBombs.has(bombId)) {
      activeBombs.delete(bombId);
      emitNet("bombs:defused", -1, bombId, src);
    }
  });
  onNet("bombs:detonate", (bombId) => {
    const src = source;
    const bomb = activeBombs.get(bombId);
    if (bomb && bomb.src === src) {
      activeBombs.delete(bombId);
      emitNet("bombs:detonate", -1, bombId, bomb.location, bomb.type);
    }
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Bombs loaded.`);
    }
  });
})();
