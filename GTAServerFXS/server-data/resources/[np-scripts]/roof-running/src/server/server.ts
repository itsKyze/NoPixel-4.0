;
(function () {
  // roof-running - Server-side (Roof Running) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Roof Running server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();