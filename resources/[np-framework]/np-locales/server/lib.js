// np-locales server lib.js
;(function() {
  global._L = exports['np-locales'] ? exports['np-locales'].GetLocaleStringFunction() : ((k) => k);
  global.GetCurrentLanguage = () => exports['np-locales'] ? exports['np-locales'].GetCurrentLanguage() : 'en';
  global.SetCurrentLanguage = (lang) => { if (exports['np-locales']) exports['np-locales'].SetCurrentLanguage(lang); };
  global.IsLocalesReady = () => true;
})();
