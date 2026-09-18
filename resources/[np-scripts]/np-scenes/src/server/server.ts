;
(function () {
  // np-scenes - Server-side (NP Scenes) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Scenes server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();