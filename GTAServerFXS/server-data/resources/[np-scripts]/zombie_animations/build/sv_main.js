;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Zombie Animations server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
