;
(function () {
  // np-gasstation - Server-side (NP Gas Station) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Gas Station server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();