;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Cinematic Camera server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
