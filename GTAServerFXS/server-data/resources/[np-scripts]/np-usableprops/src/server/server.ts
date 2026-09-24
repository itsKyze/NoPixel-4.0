;
(function () {
  // np-usableprops - Server-side (NP Usable Props) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Usable Props server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();