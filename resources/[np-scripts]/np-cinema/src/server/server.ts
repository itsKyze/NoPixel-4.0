;
(function () {
  // np-cinema - Server-side (NP Cinema) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Cinema server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();