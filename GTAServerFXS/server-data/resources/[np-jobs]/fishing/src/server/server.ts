;
(function () {
  // fishing - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const fishTypes = [{
    name: "small_fish",
    value: 50,
    chance: 60
  }, {
    name: "medium_fish",
    value: 150,
    chance: 30
  }, {
    name: "large_fish",
    value: 400,
    chance: 9
  }, {
    name: "rare_fish",
    value: 1000,
    chance: 1
  }];
  onNet("fishing:caught", () => {
    const src = source;
    const roll = Math.random() * 100;
    let cumulative = 0;
    let fish = fishTypes[0];
    for (const f of fishTypes) {
      cumulative += f.chance;
      if (roll <= cumulative) {
        fish = f;
        break;
      }
    }
    exports.inventory?.AddItem(src, fish.name, 1);
    emitNet("fishing:caughtFish", src, fish);
  });
  onNet("fishing:sell", () => {
    const src = source;
    let total = 0;
    for (const fish of fishTypes) {
      const count = exports.inventory?.GetItemCount(src, fish.name) || 0;
      if (count > 0) {
        exports.inventory?.RemoveItem(src, fish.name, count);
        total += fish.value * count;
      }
    }
    if (total > 0) {
      exports.financials?.AddCash(src, total, "Fish sale");
    }
    emitNet("fishing:soldFish", src, total);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Fishing loaded.`);
    }
  });
})();