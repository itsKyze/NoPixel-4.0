;
(function () {
  // tunershop - Server-side Job (Tuner Shop) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Tuner Shop job loaded.`);
  });
})();