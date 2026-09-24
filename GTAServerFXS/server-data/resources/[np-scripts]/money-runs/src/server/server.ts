;
(function () {
  // money-runs - Server-side (Money Runs) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Money Runs server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();