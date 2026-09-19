;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Radio server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
