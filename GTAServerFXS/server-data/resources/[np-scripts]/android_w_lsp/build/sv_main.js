;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Android LSP server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
