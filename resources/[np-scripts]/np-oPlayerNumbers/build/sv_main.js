;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Player Numbers server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
