;
(function () {
  // stabcity - Server-side (Stab City) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Stab City server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();