;
(function () {
  // clowns - Server-side (Clowns) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Clowns server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();