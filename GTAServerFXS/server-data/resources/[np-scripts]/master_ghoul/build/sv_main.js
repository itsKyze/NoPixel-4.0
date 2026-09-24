;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Master Ghoul server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
