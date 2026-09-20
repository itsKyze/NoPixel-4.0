;
(function() {
  const resourceName = GetCurrentResourceName();
  const activeRides = /* @__PURE__ */ new Map();
  const availableDrivers = /* @__PURE__ */ new Set();
  onNet("guber:registerDriver", () => {
    availableDrivers.add(source);
    emitNet("guber:driverRegistered", source);
  });
  onNet("guber:unregisterDriver", () => {
    availableDrivers.delete(source);
  });
  onNet("guber:requestRide", (pickup, destination) => {
    const src = source;
    if (!availableDrivers.size) {
      emitNet("guber:noDrivers", src);
      return;
    }
    const driver = Array.from(availableDrivers)[0];
    const rideId = `ride_${Date.now()}`;
    activeRides.set(rideId, {
      rider: src,
      driver,
      pickup,
      destination
    });
    emitNet("guber:rideRequest", driver, {
      rideId,
      rider: src,
      pickup,
      destination
    });
  });
  onNet("guber:acceptRide", (rideId) => {
    const ride = activeRides.get(rideId);
    if (ride) {
      emitNet("guber:rideAccepted", ride.rider, source, rideId);
    }
  });
  onNet("guber:completeRide", (rideId) => {
    var _a;
    const ride = activeRides.get(rideId);
    if (!ride) {
      return;
    }
    const payout = Math.floor(Math.random() * 200) + 100;
    (_a = exports.financials) == null ? void 0 : _a.AddCash(source, payout, "Guber ride");
    emitNet("guber:rideCompleted", ride.rider, payout);
    emitNet("guber:driverPaid", source, payout);
    activeRides.delete(rideId);
  });
  on("playerDropped", () => {
    availableDrivers.delete(source);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Guber loaded.`);
    }
  });
})();
