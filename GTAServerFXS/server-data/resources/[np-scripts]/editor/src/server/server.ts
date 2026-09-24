;
(function () {
  // editor - Server-side (Editor) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Editor server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();