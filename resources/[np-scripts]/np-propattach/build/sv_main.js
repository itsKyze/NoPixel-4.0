;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Prop Attach server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
