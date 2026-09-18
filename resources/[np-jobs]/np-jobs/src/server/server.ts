;
(function () {
  // np-jobs - Server-side Job (NP Jobs) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] NP Jobs job loaded.`);
  });
})();