;
(function () {
  // recycler - Server-side Job (Recycler) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Recycler job loaded.`);
  });
})();