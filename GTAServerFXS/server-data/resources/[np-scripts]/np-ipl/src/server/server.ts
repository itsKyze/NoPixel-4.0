;
(function () {
  // np-ipl - Server-side (NP IPL) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP IPL server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();