;
(function () {
  // np-mkr-racing - Server-side (NP MKR Racing) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP MKR Racing server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();