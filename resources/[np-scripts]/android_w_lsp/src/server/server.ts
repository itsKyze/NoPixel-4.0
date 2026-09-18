;
(function () {
  // android_w_lsp - Server-side (Android LSP) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Android LSP server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();