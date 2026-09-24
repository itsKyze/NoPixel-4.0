;
(function () {
  // dances - Server-side (Dances) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Dances server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();