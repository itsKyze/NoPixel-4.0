;
(function () {
  // loadingscreen - Server-side (Loading Screen) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Loading Screen server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();