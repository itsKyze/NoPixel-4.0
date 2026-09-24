;
(function () {
  // mka-anchor - Server-side (MKA Anchor) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] MKA Anchor server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();