;
(function () {
  // guber - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const activeRides = new Map();
  const availableDrivers = new Set();
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
  onNet("guber:acceptRide", rideId => {
    const ride = activeRides.get(rideId);
    if (ride) {
      emitNet("guber:rideAccepted", ride.rider, source, rideId);
    }
  });
  onNet("guber:completeRide", rideId => {
    const ride = activeRides.get(rideId);
    if (!ride) {
      return;
    }
    const payout = Math.floor(Math.random() * 200) + 100;
    exports.financials?.AddCash(source, payout, "Guber ride");
    emitNet("guber:rideCompleted", ride.rider, payout);
    emitNet("guber:driverPaid", source, payout);
    activeRides.delete(rideId);
  });
  on("playerDropped", () => {
    availableDrivers.delete(source);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Guber loaded.`);
    }
  });
})();