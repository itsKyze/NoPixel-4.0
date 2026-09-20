;
(function() {
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", (res) => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP MKR Racing server loaded.`);
  });
  on("playerDropped", () => {
  });
})();
