;
(function () {
  // np-npcs - Server-side (NP NPCs) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP NPCs server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();