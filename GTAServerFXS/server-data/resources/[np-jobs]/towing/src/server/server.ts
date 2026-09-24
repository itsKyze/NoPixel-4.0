;
(function () {
  // towing - Server-side Job (Towing) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Towing job loaded.`);
  });
})();