;
(function () {
  // damage-events - Server-side (Damage Events) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Damage Events server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();