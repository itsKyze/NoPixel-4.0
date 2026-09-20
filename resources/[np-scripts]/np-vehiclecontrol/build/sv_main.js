;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Vehicle Control server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
