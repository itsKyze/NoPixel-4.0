;
(function () {
  // hideout - Server-side (Hideout) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Hideout server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();