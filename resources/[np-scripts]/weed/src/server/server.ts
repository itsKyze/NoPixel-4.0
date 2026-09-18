;
(function () {
  // weed - Server-side (Weed) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Weed server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();