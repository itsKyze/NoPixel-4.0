;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Oilers server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
