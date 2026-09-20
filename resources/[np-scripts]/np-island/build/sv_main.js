;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Island server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
