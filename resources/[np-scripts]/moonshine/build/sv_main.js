;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Moonshine server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
