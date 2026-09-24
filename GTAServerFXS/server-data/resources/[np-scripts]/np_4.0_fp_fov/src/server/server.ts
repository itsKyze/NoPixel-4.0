;
(function () {
  // np_4.0_fp_fov - Server-side (First Person FOV) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] First Person FOV server loaded.`);
  });
  on("playerDropped", () => {
    // Cleanup player data if needed
  });
})();