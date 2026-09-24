;
(function () {
  // snr-buns - Server-side Job (SNR Buns) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] SNR Buns job loaded.`);
  });
})();