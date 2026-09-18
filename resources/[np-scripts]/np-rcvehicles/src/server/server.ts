;
(function () {
  // np-rcvehicles - Server-side (RC Vehicles) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] RC Vehicles server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();