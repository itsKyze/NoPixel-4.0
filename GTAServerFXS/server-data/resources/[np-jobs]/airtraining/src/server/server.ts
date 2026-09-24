;
(function () {
  // airtraining - Server-side Job (Air Training) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Air Training job loaded.`);
  });
})();