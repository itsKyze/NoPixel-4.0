;
(function () {
  // dispatch - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const dispatchCalls = new Map();
  let callIdCounter = 0;
  function broadcastToOfficers(event, data) {
    for (const pid of getPlayers()) {
      const p = exports["np-base"]?.GetPlayer(parseInt(pid));
      if (p?.character?.job === "police" || p?.character?.job === "sheriff" || p?.character?.job === "bcso") {
        emitNet(event, parseInt(pid), data);
      }
    }
  }
  onNet("dispatch:newCall", callData => {
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
  onNet("dispatch:closeCall", callId => {
    dispatchCalls.delete(callId);
    broadcastToOfficers("dispatch:callClosed", callId);
  });
  onNet("dispatch:requestCalls", () => {
    emitNet("dispatch:receiveCalls", source, Array.from(dispatchCalls.values()));
  });
  exports("AddCall", callData => {
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
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Dispatch loaded.`);
    }
  });
})();