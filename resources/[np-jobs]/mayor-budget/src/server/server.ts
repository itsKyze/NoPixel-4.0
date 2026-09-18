;
(function () {
  // mayor-budget - Server-side Job (Mayor Budget) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Mayor Budget job loaded.`);
  });
})();