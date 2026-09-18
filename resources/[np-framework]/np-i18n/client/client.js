let currentLangCode = "en";
const translationCache = {};
setTimeout(async () => {
  try {
    if (exports.config && exports.config.IsConfigReady && exports.config.IsConfigReady()) {
      currentLangCode = exports.config.GetMiscConfig("language.code") || "en";
    }
  } catch (e) {
    currentLangCode = "en";
  }
}, 1e3);
exports("IsReady", () => true);
exports("GetStringSwap", (key, swap = false) => {
  if (!key || currentLangCode === "en") {
    return key;
  }
  return key;
});
exports("GetStringReverse", (key) => {
  return key;
});
exports("GetString", (key) => {
  return key;
});
RegisterUICallback("np-ui:i18n:getTranslations", (data, cb) => {
  const nativeLang = typeof GetCurrentLanguage === "function" ? GetCurrentLanguage() : 0;
  cb({
    data: {
      langCode: currentLangCode,
      nativeLangCode: nativeLang,
      translationsObject: {},
      translationHashes: {}
    },
    meta: {
      ok: true
    }
  });
});
RegisterUICallback("np-ui:i18n:getCurrentLangCode", (data, cb) => {
  cb({
    data: {
      langCode: currentLangCode
    },
    meta: {
      ok: true
    }
  });
});
onNet("np-i18n:switchLanguage", (lang) => {
  currentLangCode = lang || "en";
  if (exports["np-ui"] && exports["np-ui"].SendUIMessage) {
    exports["np-ui"].SendUIMessage({
      source: "np-nui-i18n",
      type: "updateLangCode",
      langCode: currentLangCode
    });
  }
  emit("np-i18n:languageChanged", currentLangCode);
  emitNet("np-i18n:languageChanged", currentLangCode);
});
onNet("i18n:translate", (text, i18nSource) => {
  if (exports["np-ui"] && exports["np-ui"].SendUIMessage) {
    exports["np-ui"].SendUIMessage({
      source: "np-nui-i18n",
      text,
      i18nSource
    });
  }
});
