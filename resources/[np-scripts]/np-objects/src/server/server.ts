;
(function () {
  // np-objects - Server-side (NP Objects) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Objects server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();