;
(function() {
  const resourceName = GetCurrentResourceName();
  onNet("emergency:callAlert", (location, type) => {
    var _a;
    (_a = exports.dispatch) == null ? void 0 : _a.AddCall({
      type,
      location,
      priority: 2,
      description: type + " in progress"
    });
  });
  on("onResourceStart", (res) => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Emergency loaded.`);
    }
  });
})();
