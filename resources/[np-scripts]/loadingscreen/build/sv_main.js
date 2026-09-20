;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Loading Screen server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
