;
(function () {
  // business - Server-side Job (Business) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Business job loaded.`);
  });
})();