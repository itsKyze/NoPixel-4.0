;
(function () {
  // racing - Server-side (Racing) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Racing server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();