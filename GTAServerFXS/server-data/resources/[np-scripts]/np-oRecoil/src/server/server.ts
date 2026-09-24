;
(function () {
  // np-oRecoil - Server-side (Recoil) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Recoil server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();