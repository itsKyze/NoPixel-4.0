;
(function () {
  // np-ropes - Server-side (NP Ropes) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Ropes server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();