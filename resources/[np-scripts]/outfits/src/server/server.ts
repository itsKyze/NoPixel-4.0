;
(function () {
  // outfits - Server-side (Outfits) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Outfits server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();