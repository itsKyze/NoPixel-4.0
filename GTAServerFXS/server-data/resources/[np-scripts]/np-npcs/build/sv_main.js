;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP NPCs server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
