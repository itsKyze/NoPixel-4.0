;
(function () {
  // zombie_animations - Server-side (Zombie Animations) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Zombie Animations server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();