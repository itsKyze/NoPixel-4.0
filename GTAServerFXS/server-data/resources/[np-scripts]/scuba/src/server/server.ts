;
(function () {
  // scuba - Server-side (Scuba) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Scuba server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();