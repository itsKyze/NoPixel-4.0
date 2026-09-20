;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] FIB Offices server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
