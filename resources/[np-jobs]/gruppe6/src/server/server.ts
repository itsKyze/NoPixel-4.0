;
(function () {
  // gruppe6 - Server-side Job (Gruppe 6) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Gruppe 6 job loaded.`);
  });
})();