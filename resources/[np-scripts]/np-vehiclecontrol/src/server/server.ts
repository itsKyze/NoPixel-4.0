;
(function () {
  // np-vehiclecontrol - Server-side (Vehicle Control) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Vehicle Control server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();