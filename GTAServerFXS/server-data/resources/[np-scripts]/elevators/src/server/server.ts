;
(function () {
  // elevators - Server-side (Elevators) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Elevators server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();