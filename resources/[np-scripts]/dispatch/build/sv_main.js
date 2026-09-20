;
(function() {
  const resourceName = GetCurrentResourceName();
  const dispatchCalls = /* @__PURE__ */ new Map();
  let callIdCounter = 0;
  function broadcastToOfficers(event, data) {
    var _a, _b, _c, _d;
    for (const pid of getPlayers()) {
      const p = (_a = exports["np-base"]) == null ? void 0 : _a.GetPlayer(parseInt(pid));
      if (((_b = p == null ? void 0 : p.character) == null ? void 0 : _b.job) === "police" || ((_c = p == null ? void 0 : p.character) == null ? void 0 : _c.job) === "sheriff" || ((_d = p == null ? void 0 : p.character) == null ? void 0 : _d.job) === "bcso") {
        emitNet(event, parseInt(pid), data);
      }
    }
  }
  onNet("dispatch:newCall", (callData) => {
    const id = ++callIdCounter;
    const call = {
      id,
      src: source,
      ...callData,
      time: Date.now()
    };
    dispatchCalls.set(id, call);
    broadcastToOfficers("dispatch:receiveCall", call);
  });
  onNet("dispatch:closeCall", (callId) => {
    dispatchCalls.delete(callId);
    broadcastToOfficers("dispatch:callClosed", callId);
  });
  onNet("dispatch:requestCalls", () => {
    emitNet("dispatch:receiveCalls", source, Array.from(dispatchCalls.values()));
  });
  exports("AddCall", (callData) => {
    const id = ++callIdCounter;
    const call = {
      id,
      ...callData,
      time: Date.now()
    };
    dispatchCalls.set(id, call);
    broadcastToOfficers("dispatch:receiveCall", call);
    return id;
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Dispatch loaded.`);
    }
  });
})();
