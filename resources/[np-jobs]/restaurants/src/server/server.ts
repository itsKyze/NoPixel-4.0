;
(function () {
  // restaurants - Server-side Job (Restaurants) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Restaurants job loaded.`);
  });
})();