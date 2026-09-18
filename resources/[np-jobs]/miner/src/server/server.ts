;
(function () {
  // miner - Server-side Job (Miner) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Miner job loaded.`);
  });
})();