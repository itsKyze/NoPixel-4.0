;
(function () {
  // ammunation - Server-side Job (Ammunation) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Ammunation job loaded.`);
  });
})();