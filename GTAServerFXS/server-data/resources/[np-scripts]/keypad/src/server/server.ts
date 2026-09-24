;
(function () {
  // keypad - Server-side (Keypad) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Keypad server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();