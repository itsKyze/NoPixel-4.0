;
(function () {
  // newspaper - Server-side Job (Newspaper) - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== resourceName) {
      return;
    }
    console.log(`[${resourceName}] Newspaper job loaded.`);
  });
})();