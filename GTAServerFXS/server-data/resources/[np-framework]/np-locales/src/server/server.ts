// np-locales server.js
;
(function () {
  const locales = {};
  let currentLanguage = "en";
  exports("GetLocaleStringFunction", () => {
    return (key, ...args) => {
      return locales[currentLanguage]?.[key] || key;
    };
  });
  exports("GetCurrentLanguage", () => currentLanguage);
  exports("SetCurrentLanguage", lang => {
    currentLanguage = lang;
  });
  exports("GetIsLocalesReady", () => true);
  exports("GetLocale", (key, lang = currentLanguage) => locales[lang]?.[key] || key);
})();