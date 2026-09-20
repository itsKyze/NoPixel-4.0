;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Misc Scripts server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
