;
(function () {
  // np-miscscripts - Server-side (NP Misc Scripts) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Misc Scripts server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();