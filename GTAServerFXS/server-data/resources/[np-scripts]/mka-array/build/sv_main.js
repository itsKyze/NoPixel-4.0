;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] MKA Array server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
