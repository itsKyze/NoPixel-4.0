;
(function () {
  // master_ghoul - Server-side (Master Ghoul) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Master Ghoul server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();