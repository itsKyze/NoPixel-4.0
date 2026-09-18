;
(function () {
  // custom_animations - Server-side (Custom Animations) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Custom Animations server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();