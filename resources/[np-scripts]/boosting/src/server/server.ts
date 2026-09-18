;
(function () {
  // boosting - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const contracts = [{
    id: 1,
    model: "sultan",
    payout: 5000
  }, {
    id: 2,
    model: "felon",
    payout: 7000
  }, {
    id: 3,
    model: "elegy2",
    payout: 10000
  }];
  onNet("boosting:getContracts", () => {
    emitNet("boosting:receiveContracts", source, contracts);
  });
  onNet("boosting:completeContract", contractId => {
    const src = source;
    const contract = contracts.find(c => c.id === contractId);
    if (!contract) {
      return;
    }
    exports.financials?.AddCash(src, contract.payout, "Vehicle boost");
    emitNet("boosting:contractCompleted", src, contract.payout);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Boosting loaded.`);
    }
  });
})();