;
(function () {
  // np-gov - Server-side (NP Government) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Government server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();