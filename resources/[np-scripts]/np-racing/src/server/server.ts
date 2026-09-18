;
(function () {
  // np-racing - Server-side (NP Racing) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Racing server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();