;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Damage Events server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
