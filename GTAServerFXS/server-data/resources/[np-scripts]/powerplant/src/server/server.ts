;
(function () {
  // powerplant - Server-side (Power Plant) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Power Plant server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();