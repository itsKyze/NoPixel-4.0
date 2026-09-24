;
(function () {
  // np-vehicles - Server-side (NP Vehicles) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Vehicles server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();