;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Aussie Man server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
