;
(function () {
  // sewers - Server-side (Sewers) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Sewers server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();