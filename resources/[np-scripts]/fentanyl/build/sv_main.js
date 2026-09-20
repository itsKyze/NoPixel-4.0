;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Fentanyl server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
