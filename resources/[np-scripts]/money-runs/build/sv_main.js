;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Money Runs server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
