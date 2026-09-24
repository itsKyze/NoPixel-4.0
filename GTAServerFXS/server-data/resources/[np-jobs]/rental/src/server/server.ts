;
(function () {
  // rental - Server-side Job (Rental) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Rental job loaded.`);
  });
})();