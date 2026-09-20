;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Ratkin server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
