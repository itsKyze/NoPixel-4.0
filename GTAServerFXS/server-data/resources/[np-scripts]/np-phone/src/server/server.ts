;
(function () {
  // np-phone - Server-side (NP Phone) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Phone server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();