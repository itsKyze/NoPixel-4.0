;
(function () {
  // showrooms - Server-side (Showrooms) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Showrooms server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();