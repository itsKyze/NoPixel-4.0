;
(function () {
  // mka-array - Server-side (MKA Array) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] MKA Array server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();