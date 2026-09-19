;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Vehicle Sync State server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
