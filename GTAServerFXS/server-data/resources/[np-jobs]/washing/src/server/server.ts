;
(function () {
  // washing (money laundering) - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const WASH_FEE = 0.2;
  onNet("washing:washMoney", amount => {
    const src = source;
    const p = exports["np-base"]?.GetPlayer(src);
    if (!p?.character?.id) {
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
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Washing loaded.`);
    }
  });
})();