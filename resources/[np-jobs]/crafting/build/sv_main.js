;
(function() {
  const resourceName = GetCurrentResourceName();
  const recipes = {
    lockpick: {
      materials: {
        metal_scrap: 3
      },
      result: "lockpick",
      amount: 1
    },
    medkit: {
      materials: {
        bandage: 5,
        water: 2
      },
      result: "medkit",
      amount: 1
    }
  };
  onNet("crafting:getRecipes", () => {
    emitNet("crafting:receiveRecipes", source, recipes);
  });
  onNet("crafting:craft", (recipeName) => {
    const src = source;
    const recipe = recipes[recipeName];
    if (!recipe) {
      return;
    }
    const inv = exports.inventory;
    if (!inv) {
      return;
    }
    for (const [mat, count] of Object.entries(recipe.materials)) {
      if ((inv.GetItemCount(src, mat) || 0) < count) {
        emitNet("crafting:failed", src, "Missing materials");
        return;
      }
    }
    for (const [mat, count] of Object.entries(recipe.materials)) {
      inv.RemoveItem(src, mat, count);
    }
    inv.AddItem(src, recipe.result, recipe.amount);
    emitNet("crafting:crafted", src, recipe.result, recipe.amount);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Crafting loaded.`);
    }
  });
})();
