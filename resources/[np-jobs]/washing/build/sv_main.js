;
(function() {
  const resourceName = GetCurrentResourceName();
  const WASH_FEE = 0.2;
  onNet("washing:washMoney", (amount) => {
    var _a, _b;
    const src = source;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (!((_b = p == null ? void 0 : p.character) == null ? void 0 : _b.id)) {
      return;
    }
    const dirty = p.character.dirty_money || 0;
    if (dirty < amount) {
      emitNet("washing:failed", src, "Not enough dirty money");
      return;
    }
    const clean = Math.floor(amount * (1 - WASH_FEE));
    exports.oxmysql.execute("UPDATE `characters` SET `dirty_money`=`dirty_money`-?,`cash`=`cash`+? WHERE `id`=?", [amount, clean, p.character.id]);
    if (p.character) {
      p.character.dirty_money -= amount;
      p.character.cash += clean;
    }
    emitNet("washing:success", src, clean, amount);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Washing loaded.`);
    }
  });
})();
