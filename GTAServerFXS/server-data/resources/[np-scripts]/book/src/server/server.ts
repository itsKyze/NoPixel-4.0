;
(function () {
  // book - Server-side (Book) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Book server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();