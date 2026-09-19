;
(function() {
  const resourceName = GetCurrentResourceName();
  const deliveries = [{
    id: 1,
    vehicle: "sultan",
    destination: "Sandy Shores",
    payout: 1500
  }, {
    id: 2,
    vehicle: "bison",
    destination: "Paleto Bay",
    payout: 2e3
  }, {
    id: 3,
    vehicle: "dominator",
    destination: "Fort Zancudo",
    payout: 3e3
  }];
  onNet("vehicle-delivery:getJobs", () => {
    emitNet("vehicle-delivery:receiveJobs", source, deliveries);
  });
  onNet("vehicle-delivery:completeJob", (jobId) => {
    var _a;
    const src = source;
    const job = deliveries.find((d) => d.id === jobId);
    if (!job) {
      return;
    }
    (_a = exports.financials) == null ? void 0 : _a.AddCash(src, job.payout, "Vehicle delivery");
    emitNet("vehicle-delivery:jobCompleted", src, job.payout);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Vehicle Delivery loaded.`);
    }
  });
})();
