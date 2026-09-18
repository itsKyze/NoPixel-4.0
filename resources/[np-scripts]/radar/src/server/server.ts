;
(function () {
  // radar - Server-side (Radar) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Radar server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();