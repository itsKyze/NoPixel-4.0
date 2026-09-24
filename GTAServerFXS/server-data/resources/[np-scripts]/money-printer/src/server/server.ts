;
(function () {
  // money-printer - Server-side (Money Printer) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Money Printer server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();