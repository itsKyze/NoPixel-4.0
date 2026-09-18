;
(function () {
  // fence - Server-side Job (Fence) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Fence job loaded.`);
  });
})();