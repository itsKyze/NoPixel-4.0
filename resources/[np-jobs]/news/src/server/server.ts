;
(function () {
  // news - Server-side Job (News) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] News job loaded.`);
  });
})();