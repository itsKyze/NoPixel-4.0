;
(function () {
  // vehiclelifts - Server-side (Vehicle Lifts) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Vehicle Lifts server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();