;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Interactions server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
