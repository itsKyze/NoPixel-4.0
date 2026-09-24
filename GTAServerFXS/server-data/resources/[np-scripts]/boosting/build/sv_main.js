;
(function() {
  const resourceName = GetCurrentResourceName();
  const contracts = [{
    id: 1,
    model: "sultan",
    payout: 5e3
  }, {
    id: 2,
    model: "felon",
    payout: 7e3
  }, {
    id: 3,
    model: "elegy2",
    payout: 1e4
  }];
  onNet("boosting:getContracts", () => {
    emitNet("boosting:receiveContracts", source, contracts);
  });
  onNet("boosting:completeContract", (contractId) => {
    var _a;
    const src = source;
    const contract = contracts.find((c) => c.id === contractId);
    if (!contract) {
      return;
    }
    (_a = exports.financials) == null ? void 0 : _a.AddCash(src, contract.payout, "Vehicle boost");
    emitNet("boosting:contractCompleted", src, contract.payout);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Boosting loaded.`);
    }
  });
})();
