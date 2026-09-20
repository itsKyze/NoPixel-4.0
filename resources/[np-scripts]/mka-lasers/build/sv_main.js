;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] MKA Lasers server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
