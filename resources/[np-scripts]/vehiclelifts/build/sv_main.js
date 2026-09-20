;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Vehicle Lifts server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
