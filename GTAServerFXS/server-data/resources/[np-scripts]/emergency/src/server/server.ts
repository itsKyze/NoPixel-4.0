;
(function () {
  // emergency - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("emergency:callAlert", (location, type) => {
    exports.dispatch?.AddCall({
      type,
      location,
      priority: 2,
      description: type + " in progress"
    });
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Emergency loaded.`);
    }
  });
})();