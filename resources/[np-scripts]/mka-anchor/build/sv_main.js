;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] MKA Anchor server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
