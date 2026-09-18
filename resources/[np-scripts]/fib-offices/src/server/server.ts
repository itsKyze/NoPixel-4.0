;
(function () {
  // fib-offices - Server-side (FIB Offices) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] FIB Offices server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();