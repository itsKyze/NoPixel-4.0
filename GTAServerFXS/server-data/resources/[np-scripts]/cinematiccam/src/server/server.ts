;
(function () {
  // cinematiccam - Server-side (Cinematic Camera) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Cinematic Camera server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();