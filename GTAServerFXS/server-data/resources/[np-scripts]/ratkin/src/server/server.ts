;
(function () {
  // ratkin - Server-side (Ratkin) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Ratkin server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();