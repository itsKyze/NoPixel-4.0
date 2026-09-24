;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Custom Animations server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
