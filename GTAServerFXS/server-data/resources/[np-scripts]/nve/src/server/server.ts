;
(function () {
  // nve - Server-side (NVE) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NVE server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();