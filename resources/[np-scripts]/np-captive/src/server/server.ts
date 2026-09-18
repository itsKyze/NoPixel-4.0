;
(function () {
  // np-captive - Server-side (NP Captive) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Captive server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();