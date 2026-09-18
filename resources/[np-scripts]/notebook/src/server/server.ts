;
(function () {
  // notebook - Server-side (Notebook) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Notebook server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();