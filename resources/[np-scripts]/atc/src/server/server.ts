;
(function () {
  // atc - Server-side (ATC) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] ATC server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();