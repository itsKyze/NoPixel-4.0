;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Pawnshop server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
