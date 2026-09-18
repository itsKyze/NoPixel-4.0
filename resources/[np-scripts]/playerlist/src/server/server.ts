;
(function () {
  // playerlist - Server-side (Player List) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Player List server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();