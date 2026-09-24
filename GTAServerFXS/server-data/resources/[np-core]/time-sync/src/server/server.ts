;
(function () {
  // time-sync server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  let currentHour = 8;
  let currentMinute = 0;
  let timeScale = 2;
  setInterval(() => {
    currentMinute += timeScale;
    if (currentMinute >= 60) {
      currentMinute = 0;
      currentHour = (currentHour + 1) % 24;
    }
    emitNet("time-sync:update", -1, currentHour, currentMinute);
  }, 30000);
  onNet("time-sync:requestTime", () => {
    emitNet("time-sync:update", source, currentHour, currentMinute);
  });
  exports("GetTime", () => ({
    hour: currentHour,
    minute: currentMinute
  }));
  exports("SetTime", (h, m) => {
    currentHour = h;
    currentMinute = m;
  });
  console.log(`[${resourceName}] Time sync loaded`);
})();