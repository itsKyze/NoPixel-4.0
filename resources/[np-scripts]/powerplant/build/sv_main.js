;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Power Plant server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
