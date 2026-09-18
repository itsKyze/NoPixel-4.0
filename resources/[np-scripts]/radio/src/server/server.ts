;
(function () {
  // radio - Server-side (Radio) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Radio server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();