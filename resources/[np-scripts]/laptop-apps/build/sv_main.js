;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Laptop Apps server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
