;
(function() {
  const locales = {};
  let currentLanguage = "en";
  exports("GetLocaleStringFunction", () => {
    return (key, ...args) => {
      var _a;
      return ((_a = locales[currentLanguage]) == null ? void 0 : _a[key]) || key;
    };
  });
  exports("GetCurrentLanguage", () => currentLanguage);
  exports("SetCurrentLanguage", (lang) => {
    currentLanguage = lang;
  });
  exports("GetIsLocalesReady", () => true);
  exports("GetLocale", (key, lang = currentLanguage) => {
    var _a;
    return ((_a = locales[lang]) == null ? void 0 : _a[key]) || key;
  });
})();
