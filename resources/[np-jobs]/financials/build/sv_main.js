;
(function() {
  const resourceName = GetCurrentResourceName();
  exports("AddCash", (src, amount, reason) => {
    var _a, _b, _c;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (!((_b = p == null ? void 0 : p.character) == null ? void 0 : _b.id)) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `cash`=`cash`+? WHERE `id`=?", [amount, p.character.id]);
    if (p.character) {
      p.character.cash = (p.character.cash || 0) + amount;
    }
    emitNet("financials:cashUpdated", src, ((_c = p.character) == null ? void 0 : _c.cash) || 0);
  });
  exports("RemoveCash", (src, amount, reason) => {
    var _a, _b, _c;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (!((_b = p == null ? void 0 : p.character) == null ? void 0 : _b.id)) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `cash`=GREATEST(0,`cash`-?) WHERE `id`=?", [amount, p.character.id]);
    if (p.character) {
      p.character.cash = Math.max(0, (p.character.cash || 0) - amount);
    }
    emitNet("financials:cashUpdated", src, ((_c = p.character) == null ? void 0 : _c.cash) || 0);
  });
  exports("AddBank", (src, amount) => {
    var _a, _b;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (!((_b = p == null ? void 0 : p.character) == null ? void 0 : _b.id)) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `bank`=`bank`+? WHERE `id`=?", [amount, p.character.id]);
    if (p.character) {
      p.character.bank = (p.character.bank || 0) + amount;
    }
  });
  exports("RemoveBank", (src, amount) => {
    var _a, _b;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (!((_b = p == null ? void 0 : p.character) == null ? void 0 : _b.id)) {
      return;
    }
    exports.oxmysql.execute("UPDATE `characters` SET `bank`=GREATEST(0,`bank`-?) WHERE `id`=?", [amount, p.character.id]);
    if (p.character) {
      p.character.bank = Math.max(0, (p.character.bank || 0) - amount);
    }
  });
  exports("GetCash", (src) => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src)) == null ? void 0 : _b.character) == null ? void 0 : _c.cash) || 0;
  });
  exports("GetBank", (src) => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src)) == null ? void 0 : _b.character) == null ? void 0 : _c.bank) || 0;
  });
  on("financials:addCash", (src, amount, reason) => exports[resourceName].AddCash(src, amount, reason));
  on("financials:removeCash", (src, amount, reason) => exports[resourceName].RemoveCash(src, amount, reason));
  on("financials:addBank", (src, amount) => exports[resourceName].AddBank(src, amount));
  on("financials:removeBank", (src, amount) => exports[resourceName].RemoveBank(src, amount));
  onNet("financials:getBalance", () => {
    var _a;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(source);
    if (!(p == null ? void 0 : p.character)) {
      return;
    }
    emitNet("financials:receiveBalance", source, {
      cash: p.character.cash || 0,
      bank: p.character.bank || 0
    });
  });
  onNet("financials:deposit", (amount) => {
    var _a;
    const src = source;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (!(p == null ? void 0 : p.character) || p.character.cash < amount) {
      emitNet("financials:depositFailed", src);
      return;
    }
    exports[resourceName].RemoveCash(src, amount);
    exports[resourceName].AddBank(src, amount);
    emitNet("financials:depositSuccess", src, amount);
  });
  onNet("financials:withdraw", (amount) => {
    var _a;
    const src = source;
    const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(src);
    if (!(p == null ? void 0 : p.character) || p.character.bank < amount) {
      emitNet("financials:withdrawFailed", src);
      return;
    }
    exports[resourceName].RemoveBank(src, amount);
    exports[resourceName].AddCash(src, amount);
    emitNet("financials:withdrawSuccess", src, amount);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Financials loaded.`);
    }
  });
})();
