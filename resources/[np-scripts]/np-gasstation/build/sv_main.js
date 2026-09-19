;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Gas Station server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
