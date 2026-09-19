;
(function() {
  const resourceName = GetCurrentResourceName();
  const weatherTypes = ["EXTRASUNNY", "CLEAR", "CLOUDS", "OVERCAST", "RAIN", "CLEARING", "THUNDER", "SNOW"];
  let currentWeather = "CLEAR";
  let weatherIndex = 1;
  function setWeather(type) {
    currentWeather = type;
    emitNet("weather:update", -1, type);
  }
  setInterval(() => {
    weatherIndex = (weatherIndex + 1) % weatherTypes.length;
    setWeather(weatherTypes[weatherIndex]);
  }, 18e5);
  onNet("weather:requestCurrent", () => {
    emitNet("weather:update", source, currentWeather);
  });
  RegisterCommand("setweather", (src, args) => {
    var _a;
    if (src !== 0 && !IsPlayerAceAllowed(src.toString(), "command.setweather")) {
      return;
    }
    const type = (_a = args[0]) == null ? void 0 : _a.toUpperCase();
    if (weatherTypes.includes(type)) {
      setWeather(type);
    }
  }, false);
  exports("GetWeather", () => currentWeather);
  exports("SetWeather", setWeather);
  console.log(`[${resourceName}] Weather loaded`);
})();
