;
(function () {
  // financials - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  exports("AddCash", (src, amount, reason) => {
    const p = exports["np-base"]?.GetPlayer(src);
    if (!p?.character?.id) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `cash`=`cash`+? WHERE `id`=?", [amount, p.character.id]);
    if (p.character) {
      p.character.cash = (p.character.cash || 0) + amount;
    }
    emitNet("financials:cashUpdated", src, p.character?.cash || 0);
  });
  exports("RemoveCash", (src, amount, reason) => {
    const p = exports["np-base"]?.GetPlayer(src);
    if (!p?.character?.id) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `cash`=GREATEST(0,`cash`-?) WHERE `id`=?", [amount, p.character.id]);
    if (p.character) {
      p.character.cash = Math.max(0, (p.character.cash || 0) - amount);
    }
    emitNet("financials:cashUpdated", src, p.character?.cash || 0);
  });
  exports("AddBank", (src, amount) => {
    const p = exports["np-base"]?.GetPlayer(src);
    if (!p?.character?.id) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `bank`=`bank`+? WHERE `id`=?", [amount, p.character.id]);
    if (p.character) {
      p.character.bank = (p.character.bank || 0) + amount;
    }
  });
  exports("RemoveBank", (src, amount) => {
    const p = exports["np-base"]?.GetPlayer(src);
    if (!p?.character?.id) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `bank`=GREATEST(0,`bank`-?) WHERE `id`=?", [amount, p.character.id]);
    if (p.character) {
      p.character.bank = Math.max(0, (p.character.bank || 0) - amount);
    }
  });
  exports("GetCash", src => exports["np-base"]?.GetPlayer(src)?.character?.cash || 0);
  exports("GetBank", src => exports["np-base"]?.GetPlayer(src)?.character?.bank || 0);
  on("financials:addCash", (src, amount, reason) => exports[resourceName].AddCash(src, amount, reason));
  on("financials:removeCash", (src, amount, reason) => exports[resourceName].RemoveCash(src, amount, reason));
  on("financials:addBank", (src, amount) => exports[resourceName].AddBank(src, amount));
  on("financials:removeBank", (src, amount) => exports[resourceName].RemoveBank(src, amount));
  onNet("financials:getBalance", () => {
    const p = exports["np-base"]?.GetPlayer(source);
    if (!p?.character) {
      return;
    }
    emitNet("financials:receiveBalance", source, {
      cash: p.character.cash || 0,
      bank: p.character.bank || 0
    });
  });
  onNet("financials:deposit", amount => {
    const src = source;
    const p = exports["np-base"]?.GetPlayer(src);
    if (!p?.character || p.character.cash < amount) {
      emitNet("financials:depositFailed", src);
      return;
    }
    exports[resourceName].RemoveCash(src, amount);
    exports[resourceName].AddBank(src, amount);
    emitNet("financials:depositSuccess", src, amount);
  });
  onNet("financials:withdraw", amount => {
    const src = source;
    const p = exports["np-base"]?.GetPlayer(src);
    if (!p?.character || p.character.bank < amount) {
      emitNet("financials:withdrawFailed", src);
      return;
    }
    exports[resourceName].RemoveBank(src, amount);
    exports[resourceName].AddCash(src, amount);
    emitNet("financials:withdrawSuccess", src, amount);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Financials loaded.`);
    }
  });
})();