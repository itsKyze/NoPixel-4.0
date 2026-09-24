(() => {
  'use strict';

  var varData_1 = {};
  (() => {
    varData_1.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (err) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  var varData_2 = {};
  ;
  async function handleAction_1(param_1) {
    return new Promise(param_1_1 => setTimeout(() => param_1_1(), param_1));
  }
  function handleAction_2(param_1, ..._0x3f793c) {
    let varData_3 = param_1;
    const varData_4 = typeof _0x3f793c[0] === "string" || typeof _0x3f793c[0] === "number" ? _0x3f793c : _0x3f793c[0];
    for (const varData_5 in varData_4) {
      const varData_6 = varData_4[varData_5];
      const varData_7 = new RegExp("\\{" + varData_5 + "\\}", "gi");
      varData_3 = varData_3.replace(varData_7, varData_6);
    }
    return varData_3;
  }
  ;
  let isDisabled = false;
  const dataMap = new Map();
  let varData_8 = GetConvar("sv_defaultLang", "english");
  async function handleAction_3() {
    try {
      const varData_9 = await RPC.execute("np-locales:getLocales");
      if (varData_9 && Array.isArray(varData_9)) {
        for (const varData_10 of varData_9) {
          if (varData_10 && varData_10.language && varData_10.locales) {
            handleAction_4(varData_10.language, varData_10.locales);
          }
        }
      }
    } catch (_e) {}
    isDisabled = true;
    emit("np-locales:localesReady");
  }
  function handleAction_4(param_1, param_2) {
    if (!dataMap.has(param_1)) {
      dataMap.set(param_1, new Map());
    }
    const varData_11 = dataMap.get(param_1);
    for (const [_0x25a375, _0x21ef62] of param_2) {
      varData_11.set(_0x25a375, _0x21ef62);
    }
  }
  function handleAction_5(param_1) {
    return dataMap.get(param_1);
  }
  function handleAction_6(param_1, param_2, ..._0x395035) {
    const varData_12 = param_2;
    if (varData_12 === undefined) {
      return "Translation for \"" + param_1 + "\" not found for lang \"" + varData_8 + "\"";
    } else if (_0x395035.length === 0) {
      return varData_12;
    }
    return handleAction_2(varData_12, ..._0x395035);
  }
  function handleAction_7() {
    return varData_8;
  }
  function handleAction_8(param_1) {
    if (!dataMap.has(param_1)) {
      return console.log("[LOCALE] Language not supported: ", param_1);
    }
    varData_8 = param_1;
    emit("np-locales:languageChanged", param_1);
    emitNet("np-locales:languageChanged", param_1);
  }
  function handleAction_9() {
    return isDisabled;
  }
  varData_1.g.exports("GetLocaleStringFunction", () => handleAction_6);
  varData_1.g.exports("SetCurrentLanguage", () => handleAction_8);
  varData_1.g.exports("GetCurrentLanguage", () => handleAction_7);
  varData_1.g.exports("GetIsLocalesReady", () => handleAction_9);
  ;
  async function handleAction_10() {}
  onNet("np-locales:setLocale", param_1 => {
    if (param_1 === undefined || !(param_1 instanceof Array)) {
      return;
    }
    for (const varData_13 of param_1) {
      handleAction_4(varData_13.language, varData_13.locales);
    }
  });
  on("np-hud:settings", (param_1, param_2) => {
    if (param_1 !== "np-preferences") {
      return;
    }
    const varData_14 = param_2["hud.language"];
    if (varData_14 === undefined) {
      return;
    }
    handleAction_8(varData_14);
  });
  ;
  async function handleAction_11() {
    await handleAction_3();
    await handleAction_10();
  }
  ;
  const resourceName = GetCurrentResourceName();
  on("onClientResourceStart", async param_1 => {
    if (param_1 !== resourceName) {
      return;
    }
    await handleAction_11();
  });
})();