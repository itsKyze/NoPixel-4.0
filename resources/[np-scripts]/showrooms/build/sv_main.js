;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Showrooms server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
