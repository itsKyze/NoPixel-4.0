;
(function () {
  // np-jail - Server-side (NP Jail) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Jail server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();