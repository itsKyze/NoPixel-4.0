;
(function() {
  const resourceName = GetCurrentResourceName();
  const doorStates = /* @__PURE__ */ new Map();
  onNet("doors:toggle", (doorId, state) => {
    doorStates.set(doorId, state);
    emitNet("doors:stateChanged", -1, doorId, state);
  });
  onNet("doors:requestState", (doorId) => {
    emitNet("doors:receiveState", source, doorId, doorStates.get(doorId) ?? false);
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Doors loaded.`);
    }
  });
})();
