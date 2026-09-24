;
(function () {
  // aussie-man - Server-side (Aussie Man) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Aussie Man server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();