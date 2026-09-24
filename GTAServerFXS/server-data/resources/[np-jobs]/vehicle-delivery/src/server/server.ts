;
(function () {
  // vehicle-delivery - Server-side - NoPixel 4.0
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
    payout: 2000
  }, {
    id: 3,
    vehicle: "dominator",
    destination: "Fort Zancudo",
    payout: 3000
  }];
  onNet("vehicle-delivery:getJobs", () => {
    emitNet("vehicle-delivery:receiveJobs", source, deliveries);
  });
  onNet("vehicle-delivery:completeJob", jobId => {
    const src = source;
    const job = deliveries.find(d => d.id === jobId);
    if (!job) {
      return;
    }
    exports.financials?.AddCash(src, job.payout, "Vehicle delivery");
    emitNet("vehicle-delivery:jobCompleted", src, job.payout);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Vehicle Delivery loaded.`);
    }
  });
})();