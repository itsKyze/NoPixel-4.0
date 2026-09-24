;
(function () {
  // isPed - Server-side (IsPed) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] IsPed server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();