;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] RC Vehicles server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
