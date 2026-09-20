;
(function() {
  const resourceName = GetCurrentResourceName();
  const activeCrimes = /* @__PURE__ */ new Map();
  onNet("crime:startHeist", (heistType, data) => {
    const src = source;
    if (activeCrimes.has(heistType)) {
      emitNet("crime:heistActive", src, heistType);
      return;
    }
    activeCrimes.set(heistType, {
      src,
      data,
      startTime: Date.now(),
      players: [src]
    });
    emitNet("crime:heistStarted", src, heistType);
    emit("crime:heistStarted", src, heistType, data);
  });
  onNet("crime:endHeist", (heistType, success) => {
    if (activeCrimes.has(heistType)) {
      activeCrimes.delete(heistType);
      emit("crime:heistEnded", heistType, success);
    }
  });
  onNet("crime:alertPolice", (location, type, priority) => {
    var _a;
    (_a = exports.dispatch) == null ? void 0 : _a.AddCall({
      type,
      location,
      priority: priority || 2,
      description: type + " in progress"
    });
  });
  exports("IsHeistActive", (type) => activeCrimes.has(type));
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Crime loaded.`);
    }
  });
})();
