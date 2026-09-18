;
(function () {
  // pawnshop - Server-side (Pawnshop) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Pawnshop server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();