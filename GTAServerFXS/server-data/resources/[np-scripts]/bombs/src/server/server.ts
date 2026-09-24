;
(function () {
  // bombs - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const activeBombs = new Map();
  onNet("bombs:plant", (location, type, timer) => {
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
    // Alert police via dispatch
    exports.dispatch?.AddCall({
      type: "Bomb Threat",
      location,
      priority: 1,
      description: "Bomb planted - immediate response required"
    });
    // Auto detonate after timer
    setTimeout(() => {
      if (activeBombs.has(bombId)) {
        activeBombs.delete(bombId);
        emitNet("bombs:detonate", -1, bombId, location, type);
      }
    }, (timer || 60) * 1000);
  });
  onNet("bombs:defuse", bombId => {
    const src = source;
    if (activeBombs.has(bombId)) {
      activeBombs.delete(bombId);
      emitNet("bombs:defused", -1, bombId, src);
    }
  });
  onNet("bombs:detonate", bombId => {
    const src = source;
    const bomb = activeBombs.get(bombId);
    if (bomb && bomb.src === src) {
      activeBombs.delete(bombId);
      emitNet("bombs:detonate", -1, bombId, bomb.location, bomb.type);
    }
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Bombs loaded.`);
    }
  });
})();