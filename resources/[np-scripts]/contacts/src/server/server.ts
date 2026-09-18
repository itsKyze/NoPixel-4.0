;
(function () {
  // contacts - Server-side (Contacts) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Contacts server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();