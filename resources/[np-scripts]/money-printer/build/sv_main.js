;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Money Printer server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
