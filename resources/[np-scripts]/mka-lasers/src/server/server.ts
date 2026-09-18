;
(function () {
  // mka-lasers - Server-side (MKA Lasers) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] MKA Lasers server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();