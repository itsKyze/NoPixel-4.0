;
(function () {
  // np-vehiclesync-state - Server-side (Vehicle Sync State) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Vehicle Sync State server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();