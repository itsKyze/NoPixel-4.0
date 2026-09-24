;
(function () {
  // heli - Server-side (Heli) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Heli server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();