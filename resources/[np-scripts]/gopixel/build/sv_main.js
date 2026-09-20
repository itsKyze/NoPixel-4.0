;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] GoPixel server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
