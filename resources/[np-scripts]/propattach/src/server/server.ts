;
(function () {
  // propattach - Server-side (Prop Attach) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Prop Attach server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();