;
(function () {
  // vehicles - Server-side (Vehicles) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Vehicles server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();