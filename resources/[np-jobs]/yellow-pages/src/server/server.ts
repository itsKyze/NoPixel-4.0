;
(function () {
  // yellow-pages - Server-side Job (Yellow Pages) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Yellow Pages job loaded.`);
  });
})();