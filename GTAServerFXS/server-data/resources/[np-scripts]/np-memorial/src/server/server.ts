;
(function () {
  // np-memorial - Server-side (NP Memorial) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Memorial server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();