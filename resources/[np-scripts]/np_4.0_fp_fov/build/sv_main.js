;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] First Person FOV server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
