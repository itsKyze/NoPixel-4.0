;
(function () {
  // np-oilers - Server-side (NP Oilers) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Oilers server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();