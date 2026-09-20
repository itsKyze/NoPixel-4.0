;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Roof Running server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
