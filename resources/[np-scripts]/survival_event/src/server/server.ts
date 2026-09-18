;
(function () {
  // survival_event - Server-side (Survival Event) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Survival Event server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();