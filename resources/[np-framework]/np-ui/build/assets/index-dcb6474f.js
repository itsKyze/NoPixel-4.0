import { _ as _0x3a62b2 } from "./vite-a4975f27.js";
import { c as _0x3c0fb4, j as _0x5b5e29, R as _0x14f011, w as _0xfe93ef, T as _0x58c132, u as _0x51a80d, l as _0x8ed13e, b as _0x4225eb, e as _0x169030, f as _0x57e95d, F as _0x35fbe9, r as _0xd6034a, m as _0x44c66e, g as _0x5288d6, A as _0x45c16d, h as _0x4035d1, k as _0x4dcc56, n as _0x3a388a, o as _0x3c1013, X as _0x291434, G, p as _0x184b9d, S as _0x5f3a59, M as _0xa5d638, q as _0x5ee88d, P as _0x5665ed } from "./vendor-69ed8822.js";
import { V as _0xa53920, U as _0x20d433, a as _0x4908f0, L as _0x5ea854, R as _0x51dc9a } from "./bundle-4fbe11f0.js";
import "./commonjsHelpers-c5dac66b.js";
const type = "np-ui-action";
const compose = (param_1, {
  mapStateToProps: _0x15b6cc = param_1_1 => ({}),
  mapDispatchToProps: _0x1a6009 = {}
} = {}) => {
  const varData_1 = (param_1_1, param_2) => {
    return {
      character: param_1_1.character,
      ...param_2,
      ...param_1_1[param_1.key],
      ..._0x15b6cc(param_1_1)
    };
  };
  const varData_2 = param_1_1 => {
    if (typeof param_1_1 === "function") {
      return {
        cb: param_1_1,
        type
      };
    }
    const varData_3 = param_1_2 => ({
      ...param_1_2,
      [param_1.key]: {
        ...param_1_2[param_1.key],
        ...param_1_1
      }
    });
    return {
      cb: varData_3,
      type
    };
  };
  const varData_4 = () => {
    const varData_5 = param_1_1 => ({
      ...param_1_1,
      [param_1.key]: {
        ...param_1.initialState
      }
    });
    return {
      cb: varData_5,
      type
    };
  };
  const varData_6 = {
    ..._0x1a6009,
    resetState: varData_4,
    updateState: varData_2
  };
  return {
    mapDispatchToProps: varData_6,
    mapStateToProps: varData_1
  };
};
let store$6 = null;
let initialState$2 = {};
const getInitialState = () => initialState$2;
const reducer = (_0x2b41c3 = initialState$2, param_2) => {
  if (param_2.type !== "np-ui-action") {
    return _0x2b41c3;
  }
  return param_2.cb(_0x2b41c3);
};
const fetchInitialState = async () => {
  const varData_7 = Object.assign({
    "../main/badge/store.ts": () => _0x3a62b2(() => import("./store-f085383a.js"), true ? [] : undefined, import.meta.url),
    "../main/blackbars/store.ts": () => _0x3a62b2(() => import("./store-133bfa2e.js"), true ? [] : undefined, import.meta.url),
    "../main/character/store.ts": () => _0x3a62b2(() => import("./store-37db9883.js"), true ? [] : undefined, import.meta.url),
    "../main/contextmenu/store.ts": () => _0x3a62b2(() => import("./store-ff8c219b.js"), true ? [] : undefined, import.meta.url),
    "../main/coord-input/store.ts": () => _0x3a62b2(() => import("./store-c0a0ef47.js"), true ? [] : undefined, import.meta.url),
    "../main/debug-logs/store.ts": () => _0x3a62b2(() => import("./store-9eaaa44b.js"), true ? ["./store-9eaaa44b.js", "./vite-a4975f27.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "../main/image-viewer/store.ts": () => _0x3a62b2(() => import("./store-0d8f0ebf.js"), true ? [] : undefined, import.meta.url),
    "../main/interactions/store.ts": () => _0x3a62b2(() => import("./store-6e4dd9d5.js"), true ? [] : undefined, import.meta.url),
    "../main/newsarchive/store.ts": () => _0x3a62b2(() => import("./store-15ac9707.js"), true ? [] : undefined, import.meta.url),
    "../main/newscam/store.ts": () => _0x3a62b2(() => import("./store-b854a9b8.js"), true ? [] : undefined, import.meta.url),
    "../main/npolaroid-photo/store.ts": () => _0x3a62b2(() => import("./store-0bcf49be.js"), true ? [] : undefined, import.meta.url),
    "../main/npolaroid-photobook/store.ts": () => _0x3a62b2(() => import("./store-82bb5a08.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/calendar/store.ts": () => _0x3a62b2(() => import("./store-52c39051.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/call-history/store.ts": () => _0x3a62b2(() => import("./store-ba82a077.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/crypto/store.ts": () => _0x3a62b2(() => import("./store-8da1623c.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/documents/store.ts": () => _0x3a62b2(() => import("./store-52786cd5.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/doj/store.ts": () => _0x3a62b2(() => import("./store-dc12fbaf.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/emails/store.ts": () => _0x3a62b2(() => import("./store-2e12b715.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/employment/store.ts": () => _0x3a62b2(() => import("./store-e1b061eb.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/erpinger/store.ts": () => _0x3a62b2(() => import("./store-536c9c98.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/guber/store.ts": () => _0x3a62b2(() => import("./store-26508309.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/home-screen/store.ts": () => _0x3a62b2(() => import("./store-8ea8dcbb.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/jobs/store.ts": () => _0x3a62b2(() => import("./store-3b8071d7.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/jobs_new/store.ts": () => _0x3a62b2(() => import("./store-97f16f19.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/metro/store.ts": () => _0x3a62b2(() => import("./store-7a63ff69.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/nopify/store.ts": () => _0x3a62b2(() => import("./store-1c4f9679.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/apps/twatter/store.ts": () => _0x3a62b2(() => import("./store-6a285994.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/components/content-bottom/store.ts": () => _0x3a62b2(() => import("./store-cf7996ad.js"), true ? [] : undefined, import.meta.url),
    "../main/phone/components/content-top/store.ts": () => _0x3a62b2(() => Promise.resolve().then(() => store$5), true ? undefined : undefined, import.meta.url),
    "../main/phone/components/modal/store.ts": () => _0x3a62b2(() => Promise.resolve().then(() => store$3), true ? undefined : undefined, import.meta.url),
    "../main/phone/store.ts": () => _0x3a62b2(() => import("./store-8a444d41.js"), true ? [] : undefined, import.meta.url),
    "../main/preferences/store.ts": () => _0x3a62b2(() => Promise.resolve().then(() => store$1), true ? undefined : undefined, import.meta.url),
    "../main/range-picker/store.ts": () => _0x3a62b2(() => import("./store-2cc7018c.js"), true ? [] : undefined, import.meta.url),
    "../main/snackbar/store.ts": () => _0x3a62b2(() => import("./store-77e28808.js"), true ? [] : undefined, import.meta.url),
    "../main/sniper-scope/store.ts": () => _0x3a62b2(() => import("./store-90d66427.js"), true ? [] : undefined, import.meta.url),
    "../main/status-hud/store.ts": () => _0x3a62b2(() => import("./store-c60d25a9.js"), true ? [] : undefined, import.meta.url),
    "../main/store.ts": () => _0x3a62b2(() => import("./store-d0372f5a.js"), true ? [] : undefined, import.meta.url),
    "../main/system/store.ts": () => _0x3a62b2(() => import("./store-933fe49f.js"), true ? [] : undefined, import.meta.url),
    "../main/textbox/store.ts": () => _0x3a62b2(() => import("./store-1dfb7a2a.js"), true ? [] : undefined, import.meta.url),
    "../main/textpopup/store.ts": () => _0x3a62b2(() => import("./store-00dec3e1.js"), true ? [] : undefined, import.meta.url),
    "../main/vehiclemenu/store.ts": () => _0x3a62b2(() => import("./store-af39ddad.js"), true ? [] : undefined, import.meta.url)
  });
  const varData_8 = [];
  try {
    const varData_9 = await Promise.all(Object.keys(varData_7).map(param_1 => varData_7[param_1]).map(param_1 => param_1()));
    for (const varData_10 of varData_9) {
      const varData_11 = varData_10.default;
      if (varData_8.includes(varData_11.key)) {
        throw new Error("duplicate store key found: " + varData_11.key);
      }
      varData_8.push(varData_11.key);
      initialState$2[varData_11.key] = varData_11.initialState;
      if (varData_11.auxiliaryInitialState) {
        initialState$2 = {
          ...initialState$2,
          ...varData_11.auxiliaryInitialState
        };
      }
    }
  } catch (err) {
    console.error("One or more store modules failed to load...", err);
  }
  return;
};
const createStore = async () => {
  await fetchInitialState();
  store$6 = _0x3c0fb4(reducer);
  return store$6;
};
const reset = () => {
  store$6.dispatch({
    cb: () => initialState$2,
    type
  });
};
const action = param_1 => () => {
  store$6.dispatch({
    cb: param_1_1 => param_1(param_1_1),
    type
  });
};
const Events = /* @__PURE__ */new Map();
function registerPhoneEvent(param_1, param_2) {
  if (Events.has(param_1)) {
    console.warn("[PHONE] - Duplicate eventId registered for [" + param_1 + "] overwriting existing event handler.");
  }
  Events.set(param_1, param_2);
}
function executePhoneEvent(param_1, param_2) {
  const varData_12 = Events.get(param_1);
  if (typeof varData_12 !== "function") {
    return;
  }
  varData_12(param_2);
}
var ConfigTypes = (param_1 => {
  param_1[param_1.Application = 0] = "Application";
  param_1[param_1.Passive = 1] = "Passive";
  return param_1;
})(ConfigTypes || {});
const defaultConfigObject = {
  closeOnEscape: true,
  closeOnEscapeTimeout: 0
};
const config = [];
async function getAppsConfig() {
  if (config.length > 0) {
    return config;
  }
  const varData_13 = Object.assign({
    "./main/badge/_config.tsx": () => _0x3a62b2(() => import("./_config-172c267b.js"), true ? ["./_config-172c267b.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./text-2b84715a.js", "./store-f085383a.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/blackbars/_config.tsx": () => _0x3a62b2(() => import("./_config-450743ad.js"), true ? ["./_config-450743ad.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./store-133bfa2e.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/character/_config.tsx": () => _0x3a62b2(() => import("./_config-1298d145.js"), true ? ["./_config-1298d145.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./store-37db9883.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/contextmenu/_config.tsx": () => _0x3a62b2(() => import("./_config-5e89218c.js"), true ? ["./_config-5e89218c.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./text-2b84715a.js", "./store-ff8c219b.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/coord-input/_config.tsx": () => _0x3a62b2(() => import("./_config-ed171e03.js"), true ? ["./_config-ed171e03.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./button-b138ef6e.js", "./store-c0a0ef47.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/debug-logs/_config.tsx": () => _0x3a62b2(() => import("./_config-aeb47590.js"), true ? ["./_config-aeb47590.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./text-2b84715a.js", "./store-9eaaa44b.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/image-viewer/_config.tsx": () => _0x3a62b2(() => import("./_config-7171d357.js"), true ? ["./_config-7171d357.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./store-0d8f0ebf.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/interactions/_config.tsx": () => _0x3a62b2(() => import("./_config-e27c20d5.js"), true ? ["./_config-e27c20d5.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./store-6e4dd9d5.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/newsarchive/_config.tsx": () => _0x3a62b2(() => import("./_config-2a19ad22.js"), true ? ["./_config-2a19ad22.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./button-b138ef6e.js", "./input-67b043ed.js", "./text-2b84715a.js", "./styles-c7d7714e.js", "./index-6dbd65c5.js", "./paper-438d2075.js", "./store-15ac9707.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/newscam/_config.tsx": () => _0x3a62b2(() => import("./_config-0f09bb4a.js"), true ? ["./_config-0f09bb4a.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./store-b854a9b8.js", "./text-2b84715a.js", "./styles-c7d7714e.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/newspaper/_config.tsx": () => _0x3a62b2(() => import("./_config-dcabf85f.js"), true ? ["./_config-dcabf85f.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./datetime-adb6ea7b.js", "./date-31836fe8.js", "./text-2b84715a.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/npolaroid-photo/_config.tsx": () => _0x3a62b2(() => import("./_config-1c7aa7ae.js"), true ? ["./_config-1c7aa7ae.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./index-56e38050.js", "./text-2b84715a.js", "./styles-c7d7714e.js", "./input-67b043ed.js", "./index-6dbd65c5.js", "./button-b138ef6e.js", "./store-0bcf49be.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/npolaroid-photobook/_config.tsx": () => _0x3a62b2(() => import("./_config-e6614000.js"), true ? ["./_config-e6614000.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-82bb5a08.js", "./ui-app-b5e34f38.js", "./styles-c7d7714e.js", "./index-56e38050.js", "./text-2b84715a.js", "./input-67b043ed.js", "./index-6dbd65c5.js", "./button-b138ef6e.js", "./store-0bcf49be.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/phone/_config.tsx": () => _0x3a62b2(() => import("./_config-dc44e3da.js").then(param_1 => param_1._), true ? ["./_config-dc44e3da.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./vite-a4975f27.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./main/preferences/_config.tsx": () => _0x3a62b2(() => import("./_config-82a98087.js"), true ? ["./_config-82a98087.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./index-6dbd65c5.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/range-picker/_config.tsx": () => _0x3a62b2(() => import("./_config-a2cc401b.js"), true ? ["./_config-a2cc401b.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./button-b138ef6e.js", "./styles-c7d7714e.js", "./store-2cc7018c.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/snackbar/_config.tsx": () => _0x3a62b2(() => import("./_config-f5118266.js"), true ? ["./_config-f5118266.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-77e28808.js", "./ui-app-b5e34f38.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/sniper-scope/_config.tsx": () => _0x3a62b2(() => import("./_config-cbae4100.js"), true ? ["./_config-cbae4100.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./styles-c7d7714e.js", "./store-90d66427.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/sounds/_config.tsx": () => _0x3a62b2(() => import("./_config-5d15a06d.js"), true ? ["./_config-5d15a06d.js", "./vite-a4975f27.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/status-hud/_config.tsx": () => _0x3a62b2(() => import("./_config-0de357b9.js"), true ? ["./_config-0de357b9.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./text-2b84715a.js", "./store-c60d25a9.js", "./ui-app-b5e34f38.js", "./duration-timer-dc979963.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/system/_config.tsx": () => _0x3a62b2(() => import("./_config-1ade959c.js"), true ? ["./_config-1ade959c.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./store-933fe49f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/textbox/_config.tsx": () => _0x3a62b2(() => import("./_config-ced7f845.js"), true ? ["./_config-ced7f845.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./input-67b043ed.js", "./text-2b84715a.js", "./styles-c7d7714e.js", "./index-6dbd65c5.js", "./store-1dfb7a2a.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/textpopup/_config.tsx": () => _0x3a62b2(() => import("./_config-993c5c80.js"), true ? ["./_config-993c5c80.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./ui-app-b5e34f38.js", "./styles-c7d7714e.js", "./button-b138ef6e.js", "./store-00dec3e1.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./main/vehiclemenu/_config.tsx": () => _0x3a62b2(() => import("./_config-3db06822.js"), true ? ["./_config-3db06822.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-af39ddad.js", "./ui-app-b5e34f38.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url)
  });
  for (const varKey of Object.keys(varData_13)) {
    try {
      const varData_15 = await varData_13[varKey]();
      if (varData_15 && varData_15.default) {
        const varData_16 = typeof varData_15.default === "function" ? varData_15.default(varData_15) : varData_15.default;
        if (varData_16) {
          const varData_17 = varData_16.render;
          config.push({
            ...defaultConfigObject,
            ...varData_16,
            render: varData_17
          });
        }
      }
    } catch (err) {}
  }
  return config;
}
function For({
  each: _0x4ee69c,
  fallback = null,
  children: _0x2e6cdd
}) {
  if (!_0x4ee69c || _0x4ee69c.length === 0) {
    return /* @__PURE__ */_0x14f011.createElement(_0x5b5e29.Fragment, null, fallback);
  }
  return /* @__PURE__ */_0x14f011.createElement(_0x14f011.Fragment, null, _0x4ee69c.map((param_1, param_2) => /* @__PURE__ */_0x14f011.createElement(_0x14f011.Fragment, {
    key: param_2
  }, _0x2e6cdd(param_1, param_2))));
}
const Match = ({
  when: _0x14e065,
  children: _0x31111a
}) => {
  if (!_0x14e065) {
    return null;
  }
  if (typeof _0x31111a === "function") {
    return /* @__PURE__ */_0x14f011.createElement(_0x5b5e29.Fragment, null, _0x31111a(_0x14e065));
  }
  return /* @__PURE__ */_0x14f011.createElement(_0x5b5e29.Fragment, null, _0x31111a);
};
const Switch = ({
  children: _0x5ad7a2,
  fallback: _0x43bcca
}) => {
  const varData_18 = Array.isArray(_0x5ad7a2) ? _0x5ad7a2 : [_0x5ad7a2];
  for (const varData_19 of varData_18) {
    if (!isMatchElement(varData_19) || !varData_19.props.when) {
      continue;
    }
    return /* @__PURE__ */_0x14f011.createElement(_0x5b5e29.Fragment, null, varData_19.props.children);
  }
  return /* @__PURE__ */_0x14f011.createElement(_0x5b5e29.Fragment, null, _0x43bcca);
};
function isMatchElement(param_1) {
  return param_1 !== null && param_1 !== undefined && typeof param_1 === "object" && "type" in param_1 && param_1.type === Match;
}
const Show = ({
  when: _0x5df6a8,
  children: _0x3da1b6,
  fallback: _0x9e211e
}) => {
  if (!_0x5df6a8) {
    return /* @__PURE__ */_0x14f011.createElement(_0x5b5e29.Fragment, null, _0x9e211e ?? null);
  }
  if (typeof _0x3da1b6 === "function") {
    return /* @__PURE__ */_0x14f011.createElement(_0x5b5e29.Fragment, null, _0x3da1b6(_0x5df6a8));
  }
  return /* @__PURE__ */_0x14f011.createElement(_0x5b5e29.Fragment, null, _0x3da1b6);
};
const LightTooltip = _0xfe93ef(() => ({
  tooltip: {
    fontSize: "1em",
    maxWidth: 1000
  }
}))(_0x58c132);
function CustomTooltip({
  children: _0x139597,
  title: _0x1b949,
  ..._0x4ac01a
}) {
  const [_0x2dad08, _0x3febc2] = _0x14f011.useState(false);
  _0x14f011.useEffect(() => {
    let varData_20 = 0;
    const varData_21 = param_1 => {
      const varData_22 = param_1 || window.event;
      if (varData_22.keyCode === 27) {
        _0x3febc2(false);
        varData_20 = setTimeout(() => {
          _0x3febc2(false);
        }, 1000);
      }
    };
    const varData_23 = param_1 => {
      if (!param_1 || !param_1.data || param_1.data.source !== "np-nui") {
        return;
      }
      if (param_1.data.app === "phone" && param_1.data.show === false) {
        _0x3febc2(false);
        varData_20 = setTimeout(() => {
          _0x3febc2(false);
        }, 1000);
      }
    };
    document.addEventListener("keyup", varData_21);
    window.addEventListener("message", varData_23);
    return () => {
      clearTimeout(varData_20);
      document.removeEventListener("keyup", varData_21);
      window.removeEventListener("message", varData_23);
    };
  }, []);
  return /* @__PURE__ */_0x14f011.createElement(LightTooltip, {
    arrow: true,
    placement: "top",
    ..._0x4ac01a,
    title: _0x1b949,
    open: _0x2dad08,
    onClose: () => _0x3febc2(false),
    onOpen: () => _0x3febc2(true)
  }, _0x139597);
}
const useUIState = param_1 => {
  const varData_24 = _0x51a80d(param_1_1 => param_1_1[param_1]);
  const varData_25 = param_1_1 => {
    return action(param_1_2 => ({
      ...param_1_2,
      [param_1]: {
        ...param_1_2[param_1],
        ...param_1_1
      }
    }))();
  };
  return [varData_24, varData_25];
};
_0x8ed13e.add(_0x4225eb, _0x169030, _0x57e95d);
const Icon = param_1 => {
  return /* @__PURE__ */_0x14f011.createElement(_0x35fbe9, {
    ...param_1,
    fixedWidth: true
  });
};
const index$4 = "";
const PhoneNotification = ({
  notification: _0x2ce74c,
  process: _0x397f51
}) => {
  const [_0x32328d] = useUIState("phone");
  const [_0x59ff70, _0x15d03a] = _0xd6034a.useState("notification-container");
  const varData_26 = (_0x5b759b = null, _0x12710b = null) => param_1 => {
    param_1.preventDefault();
    param_1.stopPropagation();
    if (_0x59ff70.includes("notification-minimize", 0)) {
      _0x15d03a("notification-container");
    }
    if (_0x2ce74c.timeout === -1 && !_0x12710b) {}
    if (!_0x5b759b && (_0x2ce74c.onAccept || _0x2ce74c.onReject)) {
      return;
    }
    if (_0x2ce74c.blockDismissOnClick) {
      if (_0x59ff70.includes("notification-minimize", 0)) {
        _0x15d03a("notification-container");
      } else {
        _0x15d03a("notification-container notification-minimize");
      }
      return;
    }
    _0x397f51(_0x2ce74c.id, _0x5b759b, _0x12710b);
  };
  const varData_27 = () => param_1 => {
    param_1.preventDefault();
    param_1.stopPropagation();
    if (_0x59ff70.includes("notification-minimize", 0)) {
      _0x15d03a("notification-container");
    } else {
      _0x15d03a("notification-container notification-minimize");
    }
    return;
  };
  const varData_28 = _0xd6034a.useMemo(() => {
    if (!_0x2ce74c.appName) {
      return null;
    }
    return _0x32328d.phoneConfig.find(param_1 => param_1.name === _0x2ce74c.appName);
  }, [_0x2ce74c]);
  return /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
    animate: {
      transform: ["translateY(-100%)", "translateY(0)"]
    },
    transition: {
      duration: 0.25
    },
    exit: {
      transform: ["translateY(0)", "translateY(-100%)"]
    },
    className: _0x59ff70,
    onClick: varData_26()
  }, /* @__PURE__ */_0x14f011.createElement("div", {
    className: "icon-container"
  }, /* @__PURE__ */_0x14f011.createElement(Show, {
    when: _0x2ce74c.iconOverride
  }, param_1 => param_1), /* @__PURE__ */_0x14f011.createElement(Show, {
    when: !_0x2ce74c.iconOverride && varData_28
  }, param_1 => /* @__PURE__ */_0x14f011.createElement("div", {
    className: "img-icon",
    style: {
      backgroundImage: "url(" + param_1.iconPng + ")"
    }
  }))), /* @__PURE__ */_0x14f011.createElement("div", {
    className: "notification-info"
  }, /* @__PURE__ */_0x14f011.createElement("div", {
    className: "subject"
  }, _0x2ce74c.title), /* @__PURE__ */_0x14f011.createElement("div", {
    className: "description"
  }, _0x2ce74c.text)), /* @__PURE__ */_0x14f011.createElement("div", {
    className: "actions"
  }, _0x2ce74c.minimize && /* @__PURE__ */_0x14f011.createElement("div", {
    className: "action action-minimize",
    onClick: varData_27()
  }, /* @__PURE__ */_0x14f011.createElement(Icon, {
    icon: "chevron-up"
  })), _0x2ce74c.onReject && /* @__PURE__ */_0x14f011.createElement(CustomTooltip, {
    title: _0x2ce74c.onRejectText ?? "Dismiss"
  }, /* @__PURE__ */_0x14f011.createElement("div", {
    className: "action action-reject",
    onClick: varData_26(_0x2ce74c.onReject, _0x2ce74c.onRejectOptions)
  }, /* @__PURE__ */_0x14f011.createElement(Icon, {
    icon: "times"
  }))), _0x2ce74c.onAccept && /* @__PURE__ */_0x14f011.createElement(CustomTooltip, {
    title: _0x2ce74c.onAcceptText ?? "Accept"
  }, /* @__PURE__ */_0x14f011.createElement("div", {
    className: "action action-accept",
    onClick: varData_26(_0x2ce74c.onAccept, _0x2ce74c.onAcceptOptions)
  }, /* @__PURE__ */_0x14f011.createElement(Icon, {
    icon: "check"
  })))));
};
function isDebug() {
  return false;
}
function createContextProvider(param_1, param_2, param_3) {
  const varData_29 = _0xd6034a.createContext(null);
  const varData_30 = {
    current: typeof param_1 === "function" ? param_1() : param_1
  };
  const varData_31 = ({
    children: _0x536b84
  }) => {
    const [_0xb1adf0, _0x4f4c87] = _0x5288d6(varData_30.current);
    _0x14f011.useEffect(() => {
      varData_30.current = _0xb1adf0;
    }, [_0xb1adf0]);
    const varData_32 = _0xd6034a.useCallback((param_1_1, param_2_1) => {
      if (typeof param_1_1 === "function") {
        _0x4f4c87(param_1_2 => {
          param_1_1(param_1_2);
        });
      } else {
        _0x4f4c87(param_1_2 => {
          param_1_2[param_1_1] = param_2_1;
        });
      }
    }, [_0x4f4c87]);
    const varData_33 = _0xd6034a.useCallback(() => varData_30.current, []);
    const varData_34 = param_2({
      state: _0xb1adf0,
      setState: varData_32,
      getStateRef: varData_33
    });
    _0x14f011.useEffect(() => {
      if (param_3) {
        param_3({
          state: _0xb1adf0,
          setState: varData_32,
          getStateRef: varData_33,
          actions: varData_34
        });
      }
    }, []);
    return /* @__PURE__ */_0x14f011.createElement(varData_29.Provider, {
      value: {
        state: _0xb1adf0,
        setState: varData_32,
        getStateRef: varData_33,
        ...varData_34
      }
    }, _0x536b84);
  };
  const varData_35 = () => _0xd6034a.useContext(varData_29);
  const varData_36 = () => varData_30.current;
  return [varData_31, varData_35, varData_36];
}
const initialState$1 = {
  activeApp: "home-screen",
  notifications: {},
  appsWithNotifications: [],
  show: isDebug() ? true : false,
  phoneModel: "np_phone_black"
};
const devState$1 = {
  ...initialState$1
};
const [ContextProvider$1, useFallible$1] = createContextProvider(() => isDebug() ? {
  ...devState$1
} : {
  ...initialState$1
}, ({
  setState: _0x5cb9fc
}) => ({
  reset: () => {
    _0x5cb9fc(() => {
      const varData_37 = {
        ...initialState$1
      };
      return varData_37;
    });
  },
  selectApp: param_1 => {
    _0x5cb9fc(param_1_1 => {
      param_1_1.activeApp = param_1;
      const varData_38 = [...param_1_1.appsWithNotifications];
      if (param_1 === "contacts" || param_1 === "call-history") {
        const varData_39 = ["contacts", "call-history"];
        varData_39.forEach(param_1_2 => {
          if (varData_38.includes(param_1_2)) {
            varData_38.splice(varData_38.indexOf(param_1_2), 1);
          }
        });
      } else if (varData_38.includes(param_1)) {
        varData_38.splice(varData_38.indexOf(param_1), 1);
      }
      param_1_1.appsWithNotifications = varData_38;
    });
  },
  updateNotifications: (param_1, param_2) => {
    _0x5cb9fc(param_1_1 => {
      const varData_40 = [...param_1_1.appsWithNotifications];
      if (param_1 && !param_1.includes(param_1_1.activeApp)) {
        param_1.forEach(param_1_2 => varData_40.push(param_1_2));
      }
      if (param_2 && param_2 !== param_1_1.activeApp) {
        varData_40.push(param_2);
      }
      function handleAction_1(param_1_2, param_2_1, param_3) {
        return param_3.indexOf(param_1_2) === param_2_1;
      }
      const varData_41 = varData_40.filter(handleAction_1);
      param_1_1.appsWithNotifications = varData_41;
    });
  }
}), ({
  setState: _0x350527
}) => {});
const usePhoneState = () => useFallible$1();
const notifications = "";
const triggerNotification = param_1 => {
  setTimeout(() => {
    const varData_42 = store$6.getState();
    if (!varData_42.phone.hasPhone) {
      return;
    }
    window.dispatchEvent(new CustomEvent("notification-listener", {
      detail: {
        ...param_1,
        id: param_1.id ?? Math.random()
      }
    }));
  }, 32);
};
const Notifications = () => {
  const {
    state: _0x5a6561,
    setState: _0x2940db,
    updateNotifications: _0xd95ce6
  } = usePhoneState();
  const varData_43 = param_1 => {
    const varData_44 = param_1.detail;
    _0x2940db(param_1_1 => {
      param_1_1.notifications = {
        ...param_1_1.notifications,
        [varData_44.id]: varData_44
      };
    });
    if (varData_44.timeout > 0) {
      setTimeout(() => {
        varData_45(varData_44.id);
      }, varData_44.timeout);
    }
    _0xd95ce6(varData_44.apps, varData_44.appName);
  };
  const varData_45 = (param_1, _0x561ac4 = null, _0x41f834 = null) => {
    if (_0x561ac4) {
      _0x561ac4();
    }
    if (_0x41f834 && !_0x41f834.dismiss) {
      _0x2940db(param_1_1 => {
        param_1_1.notifications[param_1] &&= {
          ...param_1_1.notifications[param_1],
          ..._0x41f834
        };
      });
      if (_0x41f834.timeout > 0) {
        setTimeout(() => {
          varData_45(param_1);
        }, _0x41f834.timeout);
      }
    }
    if (!_0x41f834 || _0x41f834.dismiss) {
      _0x2940db(param_1_1 => {
        const varData_46 = {
          ...param_1_1.notifications
        };
        if (varData_46[param_1]) {
          delete varData_46[param_1];
        }
        param_1_1.notifications = varData_46;
      });
    }
  };
  _0x14f011.useEffect(() => {
    window.addEventListener("notification-listener", varData_43);
    return () => {
      window.removeEventListener("notification-listener", varData_43);
    };
  }, []);
  const varData_47 = _0x14f011.useMemo(() => {
    return Object.keys(_0x5a6561.notifications);
  }, [_0x5a6561.notifications]);
  const varData_48 = varData_47.length > 0 ? "mounted" : "not-mounted";
  return /* @__PURE__ */_0x14f011.createElement("div", {
    className: "top-notifications-wrapper top-notifications-wrapper-" + varData_48
  }, /* @__PURE__ */_0x14f011.createElement(_0x45c16d, {
    mode: "popLayout"
  }, varData_47.map(param_1 => /* @__PURE__ */_0x14f011.createElement(PhoneNotification, {
    notification: _0x5a6561.notifications[param_1],
    process: varData_45,
    key: param_1
  }))));
};
const initialState = {
  phoneSimCard: null,
  character: null,
  game: {
    time: "00:01",
    token: null,
    endpoint: null,
    wsEndpoint: null
  }
};
const devState = {
  ...initialState
};
const [ContextProvider, useFallible, getGlobalState] = createContextProvider(() => isDebug() ? {
  ...devState
} : {
  ...initialState
}, ({
  setState: _0xbfb814,
  getStateRef: _0x3c3b2e
}) => ({}), ({
  setState: _0x36507d,
  getStateRef: _0x8d55b8
}) => {});
const useGlobalState = () => useFallible();
function GetSimCard() {
  if (isDebug()) {
    return {
      id: "dev_sim_id",
      numberId: "1",
      areaCode: "420",
      number: "5554315405"
    };
  }
  const varData_49 = getGlobalState();
  return varData_49.phoneSimCard;
}
function GetCurrentSimNumber() {
  const varData_50 = GetSimCard();
  if (!varData_50) {
    return null;
  }
  return varData_50.areaCode + varData_50.number;
}
function GetCharacter() {
  const varData_51 = getGlobalState();
  return varData_51.character;
}
function GetGameDetails() {
  const varData_52 = getGlobalState();
  return varData_52.game;
}
const data$1 = {
  getDetails: function () {
    return {
      bank: 1333337,
      cash: 1337,
      jobs: {
        primary: "unemployed",
        secondary: "none"
      },
      licenses: [{
        name: "Drivers License",
        status: true
      }, {
        name: "Hunting License",
        status: false
      }, {
        name: "Fishing License",
        status: false
      }]
    };
  },
  showroomGetCarConfig: function () {
    return [{
      model: "primoard",
      active: true,
      group: "Sports",
      brand: "",
      name: "Primo ARD",
      import_price: -1,
      retail_price: -1,
      pdm: true,
      fastlane: false,
      tuner: true,
      showroom_image_url: "",
      hd_image_url: "",
      current_stock: 1
    }];
  },
  getContacts: function () {
    return [{
      id: 1,
      name: "Juan Carnandez aka Flippy",
      number: "1234567444"
    }, {
      id: 2,
      name: "Justice Dredd",
      number: "1234567890"
    }, {
      id: 3,
      name: "aWitteh Mate",
      number: "1234567890"
    }, {
      id: 4,
      name: "bWitteh Mate",
      number: "1234567890"
    }, {
      id: 5,
      name: "cWitteh Mate",
      number: "1234567890"
    }, {
      id: 6,
      name: "dWitteh Mate",
      number: "1234567890"
    }, {
      id: 8,
      name: "eWitteh Mate",
      number: "1234567890"
    }, {
      id: 9,
      name: "eWitteh Mate",
      number: "1234567890"
    }, {
      id: 10,
      name: "eWitteh Mate",
      number: "1234567890"
    }, {
      id: 11,
      name: "eWitteh Mate",
      number: "1234567890"
    }, {
      id: 12,
      name: "eWitteh Mate",
      number: "1234567890"
    }];
  },
  getTwats: function () {
    return [{
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "hello this is my message with images https://i.imgur.com/yQjXUjG.mp4 image https://i.imgur.com/D5TdiNt.png another one https://i.imgur.com/D5TdiNt.png",
      timestamp: "2020-09-14T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "hello this is my message with https://i.imgur.com/D5TdiNt.png",
      timestamp: "2020-09-14T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "Hi! Join My event! {{c:a2c1a3}} {{c:a2c1a3}} {{c:a2c1a3}} {{c:a2c1a3}} {{c:a2c1a3}}",
      timestamp: "2021-09-15T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Blue"
      },
      isBlue: true,
      text: "Hi! I win a prize :)",
      timestamp: "2020-09-15T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "67",
      timestamp: "2020-09-15T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "Hi! I win a prize :)",
      timestamp: "2020-09-15T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "Hi! I win a prize :)",
      timestamp: "2020-09-15T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "Hi! I win a prize :)",
      timestamp: "2020-09-15T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "Hi! I win a prize :)",
      timestamp: "2020-09-15T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "Hi! I win a prize :)",
      timestamp: "2020-09-15T12:55:37Z"
    }, {
      character: {
        id: 1,
        first_name: "Justice",
        last_name: "Dredd"
      },
      text: "Hi! I win a prize :)",
      timestamp: "2020-09-15T12:55:37Z"
    }, {
      character: {
        id: 2,
        first_name: "Mike",
        last_name: "Block"
      },
      text: "RT @Justice_Dredd Hi! I win a prize :)",
      timestamp: "2024-09-15T12:55:37Z"
    }, {
      character: {
        id: 2,
        first_name: "Mike",
        last_name: "Block"
      },
      text: "no you didnt lmaooo QT @Justice_Dredd Hi! I win a prize :)",
      timestamp: "2024-09-15T13:10:00Z"
    }];
  },
  getYellowPages: function () {
    return [{
      character: {
        first_name: "Brian",
        last_name: "Knight",
        number: "1231231243"
      },
      text: "Got some shit to sell"
    }, {
      character: {
        first_name: "monka",
        last_name: "S",
        number: "1231134321"
      },
      text: "Got some shit to sell"
    }, {
      character: {
        first_name: "Brian",
        last_name: "Knight",
        number: "1231231243"
      },
      text: "Got some shit to sell"
    }, {
      character: {
        first_name: "monka",
        last_name: "S",
        number: "1231134321"
      },
      text: "Got some shit to sell"
    }, {
      character: {
        first_name: "Brian",
        last_name: "Knight",
        number: "1231231243"
      },
      text: "Got some shit to sell"
    }, {
      character: {
        first_name: "monka",
        last_name: "S",
        number: "1231134321"
      },
      text: "Got some shit to sell"
    }, {
      character: {
        first_name: "Brian",
        last_name: "Knight",
        number: "1231231243"
      },
      text: "Got some shit to sell"
    }, {
      character: {
        first_name: "monka",
        last_name: "S",
        number: "1231134321"
      },
      text: "Got some shit to sell"
    }, {
      character: {
        first_name: "Brian",
        last_name: "Knight",
        number: "1231231243"
      },
      text: "Got some shit to sell"
    }, {
      character: {
        first_name: "monka",
        last_name: "S",
        number: "1231134321"
      },
      text: "Got some shit to sell"
    }];
  },
  getDOJData: function () {
    return [{
      role: "mayor",
      name: "Mayor Name",
      phone: "1231231231",
      status: "Available"
    }, {
      role: "deputy_mayor",
      name: "Dep Mayor 1",
      phone: "1231231231",
      status: "Available"
    }, {
      role: "deputy_mayor",
      name: "Dep Mayor 2",
      phone: "1231231231",
      status: "Available"
    }, {
      role: "judge",
      name: "Judge Name 1",
      phone: "1231231231",
      status: "Available"
    }, {
      role: "judge",
      name: "Judge Name 2",
      phone: "1231231231",
      status: "Available"
    }, {
      role: "judge",
      name: "Judge Name 3",
      phone: "1231231231",
      status: "Available"
    }, {
      role: "county_clerk",
      name: "Clerk Name 1",
      phone: "1231231231",
      status: "Available"
    }, {
      role: "county_clerk",
      name: "Clerk Name 2",
      phone: "1231231231",
      status: "Available"
    }, {
      role: "defender",
      name: "Defender Name 1",
      phone: "1231231231",
      status: "Available"
    }, {
      role: "defender",
      name: "Defender Name 2",
      phone: "1231231231",
      status: "Available"
    }];
  },
  getDebt: function () {
    return [{
      id: 1,
      amount_paid_total: 25000,
      amount_owed_total: 100000,
      amount_owed_now: 25000,
      comment: "Car",
      debtor: "Sahara International",
      payments_remaining: 4,
      payments_schedule: 7,
      payments_last_date: "2020-06-20T12:55:37Z"
    }, {
      id: 3,
      amount_paid_total: 25000,
      amount_owed_total: 100000,
      amount_owed_now: 0,
      comment: "Car",
      debtor: "Sahara International",
      payments_remaining: 4,
      payments_schedule: 7,
      payments_last_date: "2020-06-20T12:55:37Z"
    }, {
      id: 2,
      amount_paid_total: 100000,
      amount_owed_total: 100000,
      amount_owed_now: 0,
      comment: "Car",
      debtor: "Sazara International",
      payments_remaining: 0,
      payments_schedule: 7,
      payments_last_date: "2020-06-03T12:55:37Z"
    }];
  },
  getCrypto: function () {
    return [{
      icon: "caret-square-up",
      ticker: "BTC",
      name: "Bitcoin",
      price: 1500.555555555,
      daily_percentage: 0.555555555,
      fee: 0.05,
      categories: [],
      quantity: 0
    }, {
      icon: "caret-square-up",
      ticker: "ETH",
      name: "Etherium",
      price: 1500,
      daily_percentage: 0.5,
      fee: 0.05,
      categories: [],
      quantity: 0
    }, {
      icon: "caret-square-up",
      ticker: "Doge",
      name: "Dogecoin",
      price: 1500,
      daily_percentage: 0.5,
      fee: 0.05,
      categories: [],
      quantity: 10
    }, {
      icon: "caret-square-up",
      ticker: "BTC",
      name: "Bitcoin",
      price: 1500,
      daily_percentage: 0.5,
      fee: 0.05,
      categories: [],
      quantity: 0
    }, {
      icon: "caret-square-up",
      ticker: "ETH",
      name: "Etherium",
      price: 1500,
      daily_percentage: 0.5,
      fee: 0.05,
      categories: [],
      quantity: 0
    }, {
      icon: "caret-square-up",
      ticker: "Doge",
      name: "Dogecoin",
      price: 1500,
      daily_percentage: 0.5,
      fee: 0.05,
      categories: [],
      quantity: 0
    }, {
      icon: "caret-square-up",
      ticker: "BTC",
      name: "Bitcoin",
      price: 1500,
      daily_percentage: 0.5,
      fee: 0.05,
      categories: [],
      quantity: 0
    }, {
      icon: "caret-square-up",
      ticker: "ETH",
      name: "Etherium",
      price: 1500,
      daily_percentage: 0.5,
      fee: 0.05,
      categories: [],
      quantity: 0
    }, {
      icon: "caret-square-up",
      ticker: "Doge",
      name: "Dogecoin",
      price: 1500,
      daily_percentage: 0.5,
      fee: 0.05,
      categories: [],
      quantity: 0
    }];
  },
  getCars: function () {
    return [{
      name: "blista",
      model: "blista",
      location: new _0xa53920(0, 0, 0),
      parking_state: "stored",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: true,
      sellable: true,
      stats_body: 100,
      stats_engine: 100,
      type: "bicycle",
      vin: "VIN1234567891"
    }, {
      name: "ferrarienzo",
      model: "ferrarienzo",
      location: new _0xa53920(0, 0, 0),
      parking_state: "out",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "boat",
      sellable: false,
      vin: "VIN1234567892"
    }, {
      name: "panto",
      model: "panto",
      location: new _0xa53920(0, 0, 0),
      parking_state: "stored",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "motorcycle",
      sellable: false,
      vin: "VIN1234567893"
    }, {
      name: "panto",
      model: "panto",
      location: new _0xa53920(0, 0, 0),
      parking_state: "impounded",
      parking_garage: "business_some_garage",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "car",
      sellable: false,
      vin: "VIN1234567894"
    }, {
      name: "blista",
      model: "blista",
      location: new _0xa53920(0, 0, 0),
      parking_state: "stored",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: true,
      sellable: true,
      stats_body: 100,
      stats_engine: 100,
      type: "bicycle",
      vin: "VIN1234567895"
    }, {
      name: "ferrarienzo",
      model: "ferrarienzo",
      location: new _0xa53920(0, 0, 0),
      parking_state: "out",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "boat",
      sellable: false,
      vin: "VIN1234567896"
    }, {
      name: "panto",
      model: "panto",
      location: new _0xa53920(0, 0, 0),
      parking_state: "stored",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "motorcycle",
      sellable: false,
      vin: "VIN1234567897"
    }, {
      name: "panto",
      model: "panto",
      location: new _0xa53920(0, 0, 0),
      parking_state: "impounded",
      parking_garage: "business_some_garage",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "car",
      sellable: false,
      vin: "VIN1234567898"
    }, {
      name: "blista",
      model: "blista",
      location: new _0xa53920(0, 0, 0),
      parking_state: "stored",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: true,
      sellable: true,
      stats_body: 100,
      stats_engine: 100,
      type: "bicycle",
      vin: "VIN1234567899"
    }, {
      name: "ferrarienzo",
      model: "ferrarienzo",
      location: new _0xa53920(0, 0, 0),
      parking_state: "out",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "boat",
      sellable: false,
      vin: "VIN12345678910"
    }, {
      name: "panto",
      model: "panto",
      location: new _0xa53920(0, 0, 0),
      parking_state: "stored",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "motorcycle",
      sellable: false,
      vin: "VIN12345678911"
    }, {
      name: "panto",
      model: "panto",
      location: new _0xa53920(0, 0, 0),
      parking_state: "impounded",
      parking_garage: "business_some_garage",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "car",
      sellable: false,
      vin: "VIN12345678933"
    }, {
      name: "blista",
      model: "blista",
      location: new _0xa53920(0, 0, 0),
      parking_state: "stored",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: true,
      sellable: true,
      stats_body: 100,
      stats_engine: 100,
      type: "bicycle",
      vin: "VIN123456789111"
    }, {
      name: "ferrarienzo",
      model: "ferrarienzo",
      location: new _0xa53920(0, 0, 0),
      parking_state: "out",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "boat",
      sellable: false,
      vin: "VIN12345678123132"
    }, {
      name: "panto",
      model: "panto",
      location: new _0xa53920(0, 0, 0),
      parking_state: "stored",
      parking_garage: "Q",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "motorcycle",
      sellable: false,
      vin: "VIN1234567811111192"
    }, {
      name: "panto",
      model: "panto",
      location: new _0xa53920(0, 0, 0),
      parking_state: "impounded",
      parking_garage: "business_some_garage",
      plate: "ABCD1337",
      spawnable: false,
      stats_body: 100,
      stats_engine: 100,
      type: "car",
      sellable: false,
      vin: "VIN123456789zzss2"
    }];
  },
  getBusinesses: function () {
    return [{
      id: 1,
      code: "pdm",
      name: "Premium Deluxe Motorsports",
      business_type_id: 1,
      business_type_name: "showroom"
    }];
  },
  getBusinessTypes: function () {
    return [{
      id: 1,
      name: "Showroom"
    }, {
      id: 2,
      name: "Generic"
    }];
  },
  getEmploymentInformation: function () {
    return [{
      id: 1,
      access_level: -1,
      code: "pdm",
      name: "Premium Deluxe Motorsports",
      role: "Owner",
      permissions: ["hire", "change_role", "pay_employee", "pay_external", "charge_external", "fire"],
      business_type: "Showroom",
      bank_account_id: 1
    }, {
      id: 4,
      access_level: -1,
      code: "lsbn",
      name: "",
      role: "Owner",
      permissions: ["hire", "change_role", "pay_employee", "pay_external", "charge_external", "fire"],
      business_type: "News Center",
      bank_account_id: 1
    }];
  },
  getBusinessEmployees: function () {
    return [{
      id: 1,
      first_name: "YourMom",
      last_name: "IsALoser",
      role: "Owner",
      permissions: ["hire"]
    }, {
      id: 2,
      first_name: "Alex",
      last_name: "Ronin",
      role: "Weeb",
      permissions: 1
    }];
  },
  getBusinessRoles: function () {
    return [{
      id: 1,
      name: "Whatever",
      permissions: ["hire", "change_role", "pay_employee", "pay_external", "charge_external", "fire", "property_keys", "stash_access"]
    }, {
      id: 2,
      name: "Everwhat",
      permissions: ["hire", "change_role", "pay_employee", "pay_external", "charge_external", "fire", "property_keys", "stash_access"]
    }];
  }
};
data$1.getConversations = function () {
  const varData_53 = "1231234321";
  return [{
    number_from: 5558538471,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 420000)
  }, {
    number_from: 1234567441,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 42000000)
  }, {
    number_from: 1234567442,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 4200000000)
  }, {
    number_from: 1234567443,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 42000000000)
  }, {
    number_from: 5558538471,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 420000)
  }, {
    number_from: 1234567441,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 42000000)
  }, {
    number_from: 1234567442,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 4200000000)
  }, {
    number_from: 1234567443,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 42000000000)
  }, {
    number_from: 5558538471,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 420000)
  }, {
    number_from: 1234567441,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 42000000)
  }, {
    number_from: 1234567442,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 4200000000)
  }, {
    number_from: 1234567443,
    number_to: varData_53,
    message: "Hello 1",
    timestamp: new Date(Date.now() - 42000000000)
  }];
};
data$1.getMessages = function (param_1) {
  const varData_54 = "1231234321";
  return [{
    number_from: 1234567444,
    number_to: varData_54,
    message: "Hello 2",
    timestamp: "2020-06-28T00:00:00Z"
  }, {
    number_from: varData_54,
    number_to: 1234567444,
    message: "Hello 4",
    timestamp: "2020-06-26T00:00:00Z"
  }, {
    number_from: 1234567444,
    number_to: varData_54,
    message: "Hello 3",
    timestamp: "2020-06-27T00:00:00Z"
  }, {
    number_from: 1234567444,
    number_to: varData_54,
    message: "hello  https://i.imgur.com/D5TdiNt.png  https://i.imgur.com/D5TdiNt.png  https://i.imgur.com/D5TdiNt.png this is my message with images https://i.imgur.com/D5TdiNt.gif?12323 image https://i.imgur.com/D5TdiNt.png another one https://i.imgur.com/D5TdiNt.png",
    timestamp: "2020-06-29T17:00:00Z"
  }, {
    number_from: 1234567441,
    number_to: varData_54,
    message: "Hello 2",
    timestamp: "2020-06-28T00:00:00Z"
  }].filter(param_1_1 => param_1_1.number_from === param_1 || param_1_1.number_to === param_1);
};
data$1.getDocumentTypes = function () {
  return [{
    id: 1,
    name: "Notes",
    require_signature: 0,
    min_signature: 0,
    max_signature: 0,
    editable: 1,
    shareable: 0
  }, {
    id: 2,
    name: "Licenses",
    require_signature: 1,
    min_signature: 1,
    max_signature: 1,
    editable: 0,
    shareable: 0
  }, {
    id: 3,
    name: "Documents",
    require_signature: 0,
    min_signature: 0,
    max_signature: 0,
    editable: 1,
    shareable: 1
  }, {
    id: 4,
    name: "Vehicle Registration",
    require_signature: 1,
    min_signature: 1,
    max_signature: 1,
    editable: 0,
    shareable: 0
  }, {
    id: 5,
    name: "Housing Documents",
    require_signature: 1,
    min_signature: 1,
    max_signature: 1,
    editable: 0,
    shareable: 0
  }, {
    id: 6,
    name: "Contracts",
    require_signature: 1,
    min_signature: 2,
    max_signature: 4,
    editable: 1,
    shareable: 1
  }];
};
data$1.getDocuments = function (param_1) {
  return [{
    id: 1,
    editable: false,
    can_sign: true,
    signed: null,
    title: "My first note",
    type: "Notes",
    type_id: 1
  }, {
    id: 2,
    editable: false,
    can_sign: false,
    signed: null,
    title: "My second note",
    type_id: 1
  }, {
    id: 3,
    editable: true,
    can_sign: false,
    signed: null,
    title: "My first Doc",
    type_id: 2
  }, {
    id: 4,
    editable: false,
    can_sign: false,
    signed: null,
    title: "My first Doc",
    type_id: 2
  }, {
    id: 5,
    editable: false,
    can_sign: false,
    signed: null,
    title: "My Unsigned Doc",
    type_id: 2
  }].filter(param_1_1 => param_1_1.type_id === param_1);
};
data$1.getDocumentSignatures = function () {
  return [{
    id: 10,
    first_name: "Alex",
    last_name: "IsAWeeb",
    timestamp: 1598621872
  }, {
    id: 20,
    first_name: "Weebs",
    last_name: "areAlex",
    timestamp: null
  }];
};
data$1.getDocumentContent = function () {
  return {
    id: 1,
    title: "This some title",
    content: "\n## San Andreas DMV\n\n| __Registered__ | 2020-01-01 |\n|---|---:|\n| __State ID__ | 1 |\n| __Name__ | Mr ChangMr ChangMr ChangMr ChangMr Chang |\n| __Model__ | cvpi |\n| __Plate__ | ABC12341 |\n",
    type_id: 1,
    editable: true
  };
};
data$1.getArticles = function (param_1) {
  return [{
    id: 1,
    editable: false,
    header_image: "",
    type_id: 2,
    title: "My first article"
  }, {
    id: 2,
    editable: true,
    header_image: "https://i.imgur.com/7n1lpVo.jpg",
    type_id: 1,
    title: "My second article",
    author: "Dean Watson",
    modified_at: 1631231231
  }].filter(param_1_1 => param_1_1.type_id === param_1);
};
data$1.getMusicCharts = function (param_1) {
  return [{
    song: "Test me baby",
    artist: "OTT",
    plays: "51615"
  }, {
    song: "Test me baby",
    artist: "OTT",
    plays: "1110"
  }, {
    song: "Test me baby",
    artist: "OTT",
    plays: "555"
  }];
};
data$1.getArticleContent = function () {
  return {
    id: 1,
    title: "This some title",
    images: ["https://i.imgur.com/7n1lpVo.jpg", "https://i.imgur.com/7n1lpVo.jpg", "https://i.imgur.com/q1WVOME.jpg", "https://i.imgur.com/hDxOQn0.jpg", "https://i.imgur.com/OdZzmMf.jpg"],
    type_id: 1,
    content: "\n## San Andreas DMV\n\n| __Registered__ | 2020-01-01 |\n|---|---:|\n| __State ID__ | 1 |\n| __Name__ | Mr ChangMr ChangMr ChangMr ChangMr Chang |\n| __Model__ | cvpi |\n| __Plate__ | ABC12341 |\n"
  };
};
data$1.getJobCenterJobs = function () {
  return [{
    id: 1,
    icon: "truck-pickup",
    name: "Towtruck",
    employees: 3,
    groups: 2,
    vpn: false,
    headquarters: [123.32, 753.14, 56.78]
  }, {
    id: 2,
    icon: "taxi",
    name: "Taxi",
    employees: 3,
    groups: 2,
    vpn: false,
    headquarters: [123.32, 753.14, 56.78]
  }, {
    id: 3,
    icon: "ambulance",
    name: "Ambulance",
    employees: 3,
    groups: 2,
    vpn: false,
    headquarters: [123.32, 753.14, 56.78]
  }, {
    id: 4,
    icon: "ambulance",
    name: "Robbery",
    employees: 3,
    groups: 2,
    vpn: true,
    headquarters: [123.32, 753.14, 56.78]
  }];
};
data$1.getJobCenterGroups = function () {
  return [{
    id: 1,
    leader: {
      id: 1,
      first_name: "Weeb",
      last_name: "Alex"
    },
    status: "idle",
    public: true,
    capacity: 2,
    size: 1
  }, {
    id: 2,
    leader: {
      id: 2,
      first_name: "Alex",
      last_name: "Weeb"
    },
    status: "in-activity",
    public: true,
    capacity: 2,
    size: 1
  }];
};
data$1.getJobCenterGroupMembers = function () {
  return [];
};
data$1.getCurrentApartment = function () {
  return {
    roomType: 1,
    roomNumber: 1,
    streetName: "Whatever"
  };
};
data$1.getApartmentTypes = function () {
  return [{
    apartmentType: 1,
    apartmentPrice: 90,
    apartmentStreet: "Small PP"
  }, {
    apartmentType: 2,
    apartmentPrice: 180,
    apartmentStreet: "Mid PP"
  }, {
    apartmentType: 3,
    apartmentPrice: 360,
    apartmentStreet: "Big PP"
  }];
};
data$1.getProperties = function () {
  return [{
    id: 1,
    is_owner: true,
    is_locked: false,
    cat: "housing",
    name: "11 Grove Street",
    keys: []
  }, {
    id: 3,
    is_owner: false,
    is_locked: true,
    cat: "housing",
    name: "12 Grove Street",
    keys: []
  }, {
    id: 2,
    is_owner: false,
    is_locked: true,
    cat: "office",
    name: "13 Grove Street",
    keys: []
  }, {
    id: 4,
    is_owner: true,
    is_locked: true,
    cat: "warehouse",
    name: "14 Grove Street",
    keys: []
  }];
};
data$1.getSportsBookData = function () {
  return {
    events: {
      "VLC 2": {
        title: "VLC 2 Main Event",
        key: "VLC 2",
        bettors: {
          "1041": {
            cid: 1041,
            amount: 10000,
            bank: 61674804,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1044": {
            cid: 1044,
            amount: 5000,
            bank: 61413247,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1045": {
            cid: 1045,
            amount: 10000,
            bank: 61197119,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1048": {
            cid: 1048,
            amount: 1000,
            bank: 61396685,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1071": {
            cid: 1071,
            amount: 5000,
            bank: 61572137,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1088": {
            cid: 1088,
            amount: 1000,
            bank: 61589825,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1094": {
            cid: 1094,
            amount: 10000,
            bank: 61202832,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1095": {
            cid: 1095,
            amount: 20000,
            bank: 61639593,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1102": {
            cid: 1102,
            amount: 5000,
            bank: 61899832,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1106": {
            cid: 1106,
            amount: 2000,
            bank: 61164984,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1109": {
            cid: 1109,
            amount: 1000,
            bank: 61889999,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1115": {
            cid: 1115,
            amount: 1000,
            bank: 61490948,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1125": {
            cid: 1125,
            amount: 1000,
            bank: 61912136,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1129": {
            cid: 1129,
            amount: 1000,
            bank: 61958279,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1134": {
            cid: 1134,
            amount: 2000,
            bank: 61464910,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "1160": {
            cid: 1160,
            amount: 1000,
            bank: 61443597,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1167": {
            cid: 1167,
            amount: 1000,
            bank: 61934548,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1189": {
            cid: 1189,
            amount: 10000,
            bank: 61707928,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1200": {
            cid: 1200,
            amount: 500,
            bank: 61478918,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1257": {
            cid: 1257,
            amount: 10000,
            bank: 61143341,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1269": {
            cid: 1269,
            amount: 4000,
            bank: 61450463,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1270": {
            cid: 1270,
            amount: 500,
            bank: 61569363,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "1278": {
            cid: 1278,
            amount: 100,
            bank: 61997418,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1351": {
            cid: 1351,
            amount: 1000,
            bank: 61792413,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "1391": {
            cid: 1391,
            amount: 40000,
            bank: 61389324,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1440": {
            cid: 1440,
            amount: 2000,
            bank: 61909609,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1471": {
            cid: 1471,
            amount: 3000,
            bank: 61707406,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1478": {
            cid: 1478,
            amount: 2000,
            bank: 61642175,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1501": {
            cid: 1501,
            amount: 500,
            bank: 61585540,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1527": {
            cid: 1527,
            amount: 10000,
            bank: 61521215,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1573": {
            cid: 1573,
            amount: 100,
            bank: 61237603,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "1579": {
            cid: 1579,
            amount: 500,
            bank: 61598229,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "1629": {
            cid: 1629,
            amount: 500,
            bank: 61946112,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1646": {
            cid: 1646,
            amount: 1000,
            bank: 61436676,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1652": {
            cid: 1652,
            amount: 5000,
            bank: 61777856,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1670": {
            cid: 1670,
            amount: 500,
            bank: 61164050,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1673": {
            cid: 1673,
            amount: 3000,
            bank: 61920980,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1674": {
            cid: 1674,
            amount: 2000,
            bank: 61510394,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1729": {
            cid: 1729,
            amount: 2000,
            bank: 61923754,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1817": {
            cid: 1817,
            amount: 500,
            bank: 61214147,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1856": {
            cid: 1856,
            amount: 500,
            bank: 61272375,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "1894": {
            cid: 1894,
            amount: 500,
            bank: 61702462,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1908": {
            cid: 1908,
            amount: 500,
            bank: 61167593,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1924": {
            cid: 1924,
            amount: 5000,
            bank: 61478424,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1928": {
            cid: 1928,
            amount: 100,
            bank: 61772830,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1929": {
            cid: 1929,
            amount: 20000,
            bank: 61730285,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1938": {
            cid: 1938,
            amount: 3000,
            bank: 61721743,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1939": {
            cid: 1939,
            amount: 5000,
            bank: 61807162,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1976": {
            cid: 1976,
            amount: 5000,
            bank: 61813809,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "1986": {
            cid: 1986,
            amount: 100000,
            bank: 61745281,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "2002": {
            cid: 2002,
            amount: 1000,
            bank: 61671343,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "2024": {
            cid: 2024,
            amount: 2000,
            bank: 61911257,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "2230": {
            cid: 2230,
            amount: 100,
            bank: 61151306,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "2285": {
            cid: 2285,
            amount: 2500,
            bank: 61147158,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "2333": {
            cid: 2333,
            amount: 500,
            bank: 61542749,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "2359": {
            cid: 2359,
            amount: 5000,
            bank: 61968661,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "2763": {
            cid: 2763,
            amount: 500,
            bank: 61809359,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "2869": {
            cid: 2869,
            amount: 25000,
            bank: 61447085,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "2956": {
            cid: 2956,
            amount: 10000,
            bank: 61922903,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "3034": {
            cid: 3034,
            amount: 2500,
            bank: 61705813,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "3130": {
            cid: 3130,
            amount: 1000,
            bank: 61329229,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "3153": {
            cid: 3153,
            amount: 200,
            bank: 61984756,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "3211": {
            cid: 3211,
            amount: 790,
            bank: 61279846,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "3291": {
            cid: 3291,
            amount: 1000,
            bank: 61567221,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "3307": {
            cid: 3307,
            amount: 1000,
            bank: 61644894,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "3450": {
            cid: 3450,
            amount: 500,
            bank: 61600592,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "3477": {
            cid: 3477,
            amount: 5000,
            bank: 61120187,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "3512": {
            cid: 3512,
            amount: 250,
            bank: 61236944,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "3519": {
            cid: 3519,
            amount: 500,
            bank: 61671975,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "3652": {
            cid: 3652,
            amount: 10000,
            bank: 61384930,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "3803": {
            cid: 3803,
            amount: 600,
            bank: 61192340,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "3827": {
            cid: 3827,
            amount: 100,
            bank: 61779064,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "3835": {
            cid: 3835,
            amount: 5000,
            bank: 61860556,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "3905": {
            cid: 3905,
            amount: 10000,
            bank: 61359606,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4109": {
            cid: 4109,
            amount: 5000,
            bank: 61344610,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4216": {
            cid: 4216,
            amount: 500,
            bank: 61997967,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4320": {
            cid: 4320,
            amount: 2500,
            bank: 61924963,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4407": {
            cid: 4407,
            amount: 10000,
            bank: 61328405,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4428": {
            cid: 4428,
            amount: 2000,
            bank: 61644152,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4444": {
            cid: 4444,
            amount: 2500,
            bank: 61819494,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4480": {
            cid: 4480,
            amount: 1000,
            bank: 61106372,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4567": {
            cid: 4567,
            amount: 1000,
            bank: 61453100,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4697": {
            cid: 4697,
            amount: 500,
            bank: 61734405,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4732": {
            cid: 4732,
            amount: 2000,
            bank: 61282400,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4779": {
            cid: 4779,
            amount: 1000,
            bank: 61252160,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4906": {
            cid: 4906,
            amount: 1000,
            bank: 61871185,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "4956": {
            cid: 4956,
            amount: 1000,
            bank: 61658654,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "5205": {
            cid: 5205,
            amount: 1500,
            bank: 61533520,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "5270": {
            cid: 5270,
            amount: 1000,
            bank: 61754318,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "5535": {
            cid: 5535,
            amount: 2500,
            bank: 61817874,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "5639": {
            cid: 5639,
            amount: 1000,
            bank: 61394406,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "5693": {
            cid: 5693,
            amount: 350,
            bank: 61466421,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "5730": {
            cid: 5730,
            amount: 20000,
            bank: 61556069,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "5781": {
            cid: 5781,
            amount: 5000,
            bank: 61392813,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "5974": {
            cid: 5974,
            amount: 500,
            bank: 61288964,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "6008": {
            cid: 6008,
            amount: 100,
            bank: 61572219,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "6293": {
            cid: 6293,
            amount: 100,
            bank: 61707653,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "6382": {
            cid: 6382,
            amount: 2000,
            bank: 61917080,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "6470": {
            cid: 6470,
            amount: 800,
            bank: 61690652,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "6841": {
            cid: 6841,
            amount: 5000,
            bank: 61442086,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "6848": {
            cid: 6848,
            amount: 1000,
            bank: 61845724,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "6868": {
            cid: 6868,
            amount: 400,
            bank: 61948858,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "7104": {
            cid: 7104,
            amount: 500,
            bank: 61339913,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "7249": {
            cid: 7249,
            amount: 100,
            bank: 61542556,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "7363": {
            cid: 7363,
            amount: 500,
            bank: 61895300,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "7459": {
            cid: 7459,
            amount: 2000,
            bank: 61512179,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "7463": {
            cid: 7463,
            amount: 1000,
            bank: 61693206,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "7497": {
            cid: 7497,
            amount: 1000,
            bank: 61932406,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "7703": {
            cid: 7703,
            amount: 500,
            bank: 61549560,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "7778": {
            cid: 7778,
            amount: 500,
            bank: 61704385,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "7835": {
            cid: 7835,
            amount: 500,
            bank: 61406463,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "7856": {
            cid: 7856,
            amount: 1000,
            bank: 61529922,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "8018": {
            cid: 8018,
            amount: 200,
            bank: 61476034,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "8384": {
            cid: 8384,
            amount: 5000,
            bank: 61623992,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "8562": {
            cid: 8562,
            amount: 1000,
            bank: 61957565,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "8643": {
            cid: 8643,
            amount: 1000,
            bank: 61826525,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "8897": {
            cid: 8897,
            amount: 5000,
            bank: 61515914,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "8987": {
            cid: 8987,
            amount: 2000,
            bank: 61457604,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "9567": {
            cid: 9567,
            amount: 1000,
            bank: 61909939,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "9731": {
            cid: 9731,
            amount: 200,
            bank: 61230792,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "9737": {
            cid: 9737,
            amount: 15000,
            bank: 61396136,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "9753": {
            cid: 9753,
            amount: 500,
            bank: 61570379,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "9810": {
            cid: 9810,
            amount: 500,
            bank: 61932626,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "9811": {
            cid: 9811,
            amount: 5000,
            bank: 61244635,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "9830": {
            cid: 9830,
            amount: 1000,
            bank: 61234060,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "10222": {
            cid: 10222,
            amount: 200,
            bank: 61837374,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "10251": {
            cid: 10251,
            amount: 250,
            bank: 61461807,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "10313": {
            cid: 10313,
            amount: 1000,
            bank: 61411407,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "10429": {
            cid: 10429,
            amount: 2000,
            bank: 61777224,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "10556": {
            cid: 10556,
            amount: 500,
            bank: 61571697,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "10657": {
            cid: 10657,
            amount: 500,
            bank: 61157376,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "10724": {
            cid: 10724,
            amount: 250,
            bank: 61671865,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "10732": {
            cid: 10732,
            amount: 2000,
            bank: 61698342,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "10804": {
            cid: 10804,
            amount: 1000,
            bank: 61889532,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "11602": {
            cid: 11602,
            amount: 1000,
            bank: 61559942,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "11755": {
            cid: 11755,
            amount: 1000,
            bank: 61140567,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "11769": {
            cid: 11769,
            amount: 500,
            bank: 61955203,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "11828": {
            cid: 11828,
            amount: 5000,
            bank: 61129003,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "11844": {
            cid: 11844,
            amount: 15000,
            bank: 61422421,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "11914": {
            cid: 11914,
            amount: 500,
            bank: 61599575,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "12053": {
            cid: 12053,
            amount: 500,
            bank: 61482214,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "12174": {
            cid: 12174,
            amount: 250,
            bank: 61785079,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "12180": {
            cid: 12180,
            amount: 100,
            bank: 61883270,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "12183": {
            cid: 12183,
            amount: 500,
            bank: 61400393,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "13223": {
            cid: 13223,
            amount: 200,
            bank: 61928451,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "13356": {
            cid: 13356,
            amount: 200,
            bank: 61225271,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "13440": {
            cid: 13440,
            amount: 25000,
            bank: 61954598,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "13530": {
            cid: 13530,
            amount: 1500,
            bank: 61209451,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "13650": {
            cid: 13650,
            amount: 500,
            bank: 61121313,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "13699": {
            cid: 13699,
            amount: 150,
            bank: 61632150,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "13873": {
            cid: 13873,
            amount: 5000,
            bank: 61509927,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "14022": {
            cid: 14022,
            amount: 500,
            bank: 61573648,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "14119": {
            cid: 14119,
            amount: 500,
            bank: 61431814,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "14127": {
            cid: 14127,
            amount: 2500,
            bank: 61271633,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "14183": {
            cid: 14183,
            amount: 500,
            bank: 61590100,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "14215": {
            cid: 14215,
            amount: 10000,
            bank: 61567440,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "14242": {
            cid: 14242,
            amount: 500,
            bank: 61321237,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "14309": {
            cid: 14309,
            amount: 1000,
            bank: 61716168,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "14313": {
            cid: 14313,
            amount: 100,
            bank: 61196212,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "14746": {
            cid: 14746,
            amount: 2500,
            bank: 61471090,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "14817": {
            cid: 14817,
            amount: 3000,
            bank: 61632342,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "14967": {
            cid: 14967,
            amount: 100,
            bank: 61164132,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "15057": {
            cid: 15057,
            amount: 1000,
            bank: 61756433,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "15095": {
            cid: 15095,
            amount: 1000,
            bank: 61256527,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "15265": {
            cid: 15265,
            amount: 8000,
            bank: 61604217,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "15336": {
            cid: 15336,
            amount: 300,
            bank: 61882748,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "15397": {
            cid: 15397,
            amount: 10,
            bank: 61698150,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "15444": {
            cid: 15444,
            amount: 200,
            bank: 61749621,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "15522": {
            cid: 15522,
            amount: 100,
            bank: 61764892,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "15529": {
            cid: 15529,
            amount: 1000,
            bank: 61363836,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "15596": {
            cid: 15596,
            amount: 1000,
            bank: 61966546,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "15605": {
            cid: 15605,
            amount: 100,
            bank: 61596252,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "15650": {
            cid: 15650,
            amount: 500,
            bank: 61891345,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "15793": {
            cid: 15793,
            amount: 50,
            bank: 61231259,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "15861": {
            cid: 15861,
            amount: 4000,
            bank: 61550274,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "15987": {
            cid: 15987,
            amount: 250,
            bank: 61514898,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16036": {
            cid: 16036,
            amount: 500,
            bank: 61693014,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16064": {
            cid: 16064,
            amount: 1500,
            bank: 61351971,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16132": {
            cid: 16132,
            amount: 1000,
            bank: 61590979,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16256": {
            cid: 16256,
            amount: 500,
            bank: 61625668,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16266": {
            cid: 16266,
            amount: 100,
            bank: 61605618,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16386": {
            cid: 16386,
            amount: 500,
            bank: 61401162,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16394": {
            cid: 16394,
            amount: 300,
            bank: 61933422,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16569": {
            cid: 16569,
            amount: 500,
            bank: 61625064,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "16658": {
            cid: 16658,
            amount: 500,
            bank: 61198107,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "16666": {
            cid: 16666,
            amount: 1000,
            bank: 61591665,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16694": {
            cid: 16694,
            amount: 500,
            bank: 61889010,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "16744": {
            cid: 16744,
            amount: 10000,
            bank: 61775466,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16759": {
            cid: 16759,
            amount: 500,
            bank: 61899365,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16774": {
            cid: 16774,
            amount: 5000,
            bank: 61727127,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16902": {
            cid: 16902,
            amount: 2000,
            bank: 61223815,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "16908": {
            cid: 16908,
            amount: 500,
            bank: 61987640,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "17175": {
            cid: 17175,
            amount: 2000,
            bank: 61735009,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "17324": {
            cid: 17324,
            amount: 200,
            bank: 61786453,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "17370": {
            cid: 17370,
            amount: 10,
            bank: 61325466,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "17895": {
            cid: 17895,
            amount: 400,
            bank: 61931253,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "17979": {
            cid: 17979,
            amount: 400,
            bank: 61260482,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "17998": {
            cid: 17998,
            amount: 2000,
            bank: 61777416,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "18039": {
            cid: 18039,
            amount: 500,
            bank: 61337661,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "18088": {
            cid: 18088,
            amount: 500,
            bank: 61452578,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "18364": {
            cid: 18364,
            amount: 600,
            bank: 61151992,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "18372": {
            cid: 18372,
            amount: 10,
            bank: 61801779,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "18678": {
            cid: 18678,
            amount: 200,
            bank: 61743112,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "18740": {
            cid: 18740,
            amount: 500,
            bank: 61525555,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "18824": {
            cid: 18824,
            amount: 3000,
            bank: 61974154,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "18921": {
            cid: 18921,
            amount: 1000,
            bank: 61911010,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "18939": {
            cid: 18939,
            amount: 5000,
            bank: 61189373,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "19029": {
            cid: 19029,
            amount: 100,
            bank: 61563348,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "19096": {
            cid: 19096,
            amount: 1000,
            bank: 61731604,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "19190": {
            cid: 19190,
            amount: 2000,
            bank: 61930895,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "19197": {
            cid: 19197,
            amount: 50,
            bank: 61698617,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "19214": {
            cid: 19214,
            amount: 5000,
            bank: 61869866,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "19276": {
            cid: 19276,
            amount: 100,
            bank: 61669503,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "19285": {
            cid: 19285,
            amount: 5000,
            bank: 61797494,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          },
          "19286": {
            cid: 19286,
            amount: 2000,
            bank: 61326126,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "19290": {
            cid: 19290,
            amount: 2000,
            bank: 61858880,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "19291": {
            cid: 19291,
            amount: 2500,
            bank: 61162072,
            eventName: "VLC 2 / Eddie",
            option: "Eddie"
          },
          "19372": {
            cid: 19372,
            amount: 5000,
            bank: 61379244,
            eventName: "VLC 2 / Leslie",
            option: "Leslie"
          }
        },
        description: "Eddie Marshall VS Leslie Lingberg",
        options: {
          Leslie: {
            name: "Leslie",
            id: "Leslie"
          },
          Eddie: {
            name: "Eddie",
            id: "Eddie"
          }
        },
        locked: true
      },
      "Basketball Finals Game 6": {
        title: "Basketball Finals Game 6",
        key: "Basketball Finals Game 6",
        description: "MIL vs PHX",
        options: {
          MIL: {
            id: "MIL",
            name: "MIL"
          },
          PHX: {
            id: "PHX",
            name: "PHX"
          }
        },
        bettors: {
          "3803": {
            cid: 3803,
            amount: 2000,
            bank: 61192340,
            eventName: "Basketball Finals Game 6 / PHX",
            option: "PHX"
          },
          "14119": {
            cid: 14119,
            amount: 1000,
            bank: 61431814,
            eventName: "Basketball Finals Game 6 / PHX",
            option: "PHX"
          }
        }
      },
      "VLC 2 Fight 2": {
        title: "VLC 2 Undercard",
        key: "VLC 2 Fight 2",
        bettors: {
          "1048": {
            cid: 1048,
            amount: 1000,
            bank: 61396685,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1079": {
            cid: 1079,
            amount: 5000,
            bank: 61901837,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1083": {
            cid: 1083,
            amount: 5000,
            bank: 61911862,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1088": {
            cid: 1088,
            amount: 1000,
            bank: 61589825,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1095": {
            cid: 1095,
            amount: 5000,
            bank: 61639593,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1101": {
            cid: 1101,
            amount: 5000,
            bank: 61736410,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1102": {
            cid: 1102,
            amount: 5000,
            bank: 61899832,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1106": {
            cid: 1106,
            amount: 10000,
            bank: 61164984,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1109": {
            cid: 1109,
            amount: 1000,
            bank: 61889999,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1115": {
            cid: 1115,
            amount: 1000,
            bank: 61490948,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1125": {
            cid: 1125,
            amount: 1000,
            bank: 61912136,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1129": {
            cid: 1129,
            amount: 1000,
            bank: 61958279,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1134": {
            cid: 1134,
            amount: 1000,
            bank: 61464910,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1158": {
            cid: 1158,
            amount: 1000,
            bank: 61898211,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1167": {
            cid: 1167,
            amount: 1000,
            bank: 61934548,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1200": {
            cid: 1200,
            amount: 5000,
            bank: 61478918,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1220": {
            cid: 1220,
            amount: 20000,
            bank: 61104119,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1234": {
            cid: 1234,
            amount: 5000,
            bank: 61490646,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1257": {
            cid: 1257,
            amount: 100000,
            bank: 61143341,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1270": {
            cid: 1270,
            amount: 500,
            bank: 61569363,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1278": {
            cid: 1278,
            amount: 100,
            bank: 61997418,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1308": {
            cid: 1308,
            amount: 5000,
            bank: 61598257,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1323": {
            cid: 1323,
            amount: 14000,
            bank: 61901644,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1351": {
            cid: 1351,
            amount: 5,
            bank: 61792413,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1377": {
            cid: 1377,
            amount: 400,
            bank: 61128591,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1440": {
            cid: 1440,
            amount: 5000,
            bank: 61909609,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1460": {
            cid: 1460,
            amount: 1000,
            bank: 61178524,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1468": {
            cid: 1468,
            amount: 1000,
            bank: 61347961,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1471": {
            cid: 1471,
            amount: 1000,
            bank: 61707406,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1478": {
            cid: 1478,
            amount: 1000,
            bank: 61642175,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1501": {
            cid: 1501,
            amount: 1000,
            bank: 61585540,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1527": {
            cid: 1527,
            amount: 10000,
            bank: 61521215,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1567": {
            cid: 1567,
            amount: 1000,
            bank: 61821582,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1573": {
            cid: 1573,
            amount: 100,
            bank: 61237603,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1579": {
            cid: 1579,
            amount: 500,
            bank: 61598229,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1629": {
            cid: 1629,
            amount: 500,
            bank: 61946112,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1646": {
            cid: 1646,
            amount: 1000,
            bank: 61436676,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1670": {
            cid: 1670,
            amount: 500,
            bank: 61164050,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1673": {
            cid: 1673,
            amount: 2000,
            bank: 61920980,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1674": {
            cid: 1674,
            amount: 100,
            bank: 61510394,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1704": {
            cid: 1704,
            amount: 500,
            bank: 61343209,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1708": {
            cid: 1708,
            amount: 1000,
            bank: 61397729,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1723": {
            cid: 1723,
            amount: 1000,
            bank: 61743661,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1729": {
            cid: 1729,
            amount: 2000,
            bank: 61923754,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1817": {
            cid: 1817,
            amount: 1000,
            bank: 61214147,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1831": {
            cid: 1831,
            amount: 1000,
            bank: 61222772,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1856": {
            cid: 1856,
            amount: 500,
            bank: 61272375,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1894": {
            cid: 1894,
            amount: 500,
            bank: 61702462,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1908": {
            cid: 1908,
            amount: 500,
            bank: 61167593,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1917": {
            cid: 1917,
            amount: 300,
            bank: 61936581,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1928": {
            cid: 1928,
            amount: 200,
            bank: 61772830,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1929": {
            cid: 1929,
            amount: 10000,
            bank: 61730285,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1938": {
            cid: 1938,
            amount: 2000,
            bank: 61721743,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "1976": {
            cid: 1976,
            amount: 1000,
            bank: 61813809,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "1995": {
            cid: 1995,
            amount: 10000,
            bank: 61439010,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2002": {
            cid: 2002,
            amount: 500,
            bank: 61671343,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "2024": {
            cid: 2024,
            amount: 5000,
            bank: 61911257,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2060": {
            cid: 2060,
            amount: 30000,
            bank: 61841796,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2179": {
            cid: 2179,
            amount: 10000,
            bank: 61124554,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2230": {
            cid: 2230,
            amount: 250,
            bank: 61151306,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "2278": {
            cid: 2278,
            amount: 50,
            bank: 61623168,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2285": {
            cid: 2285,
            amount: 2500,
            bank: 61147158,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2303": {
            cid: 2303,
            amount: 100,
            bank: 61321978,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2359": {
            cid: 2359,
            amount: 10000,
            bank: 61968661,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2458": {
            cid: 2458,
            amount: 5000,
            bank: 61570709,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2466": {
            cid: 2466,
            amount: 500,
            bank: 61780932,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2496": {
            cid: 2496,
            amount: 200,
            bank: 61519815,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2524": {
            cid: 2524,
            amount: 1500,
            bank: 61902468,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2547": {
            cid: 2547,
            amount: 500,
            bank: 61576037,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "2596": {
            cid: 2596,
            amount: 2000,
            bank: 61326565,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2663": {
            cid: 2663,
            amount: 500,
            bank: 61271524,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2763": {
            cid: 2763,
            amount: 500,
            bank: 61809359,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2869": {
            cid: 2869,
            amount: 10000,
            bank: 61447085,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2884": {
            cid: 2884,
            amount: 5000,
            bank: 61870910,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "2977": {
            cid: 2977,
            amount: 500,
            bank: 61412533,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "3130": {
            cid: 3130,
            amount: 1000,
            bank: 61329229,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "3153": {
            cid: 3153,
            amount: 250,
            bank: 61984756,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "3512": {
            cid: 3512,
            amount: 250,
            bank: 61236944,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "3519": {
            cid: 3519,
            amount: 500,
            bank: 61671975,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "3803": {
            cid: 3803,
            amount: 2300,
            bank: 61192340,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "3827": {
            cid: 3827,
            amount: 100,
            bank: 61779064,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "3835": {
            cid: 3835,
            amount: 5000,
            bank: 61860556,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "3852": {
            cid: 3852,
            amount: 1000,
            bank: 61385974,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "3905": {
            cid: 3905,
            amount: 5000,
            bank: 61359606,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4015": {
            cid: 4015,
            amount: 2,
            bank: 61980197,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4109": {
            cid: 4109,
            amount: 2000,
            bank: 61344610,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4163": {
            cid: 4163,
            amount: 3000,
            bank: 61272924,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4216": {
            cid: 4216,
            amount: 10000,
            bank: 61997967,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4320": {
            cid: 4320,
            amount: 2500,
            bank: 61924963,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4355": {
            cid: 4355,
            amount: 500,
            bank: 61186242,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "4407": {
            cid: 4407,
            amount: 10000,
            bank: 61328405,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "4480": {
            cid: 4480,
            amount: 200,
            bank: 61106372,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4521": {
            cid: 4521,
            amount: 500,
            bank: 61194125,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4567": {
            cid: 4567,
            amount: 500,
            bank: 61453100,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4693": {
            cid: 4693,
            amount: 2000,
            bank: 61255044,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "4697": {
            cid: 4697,
            amount: 500,
            bank: 61734405,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4779": {
            cid: 4779,
            amount: 1000,
            bank: 61252160,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4928": {
            cid: 4928,
            amount: 1000,
            bank: 61926721,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "4956": {
            cid: 4956,
            amount: 5000,
            bank: 61658654,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "5066": {
            cid: 5066,
            amount: 2000,
            bank: 61923233,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "5270": {
            cid: 5270,
            amount: 500,
            bank: 61754318,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "5535": {
            cid: 5535,
            amount: 2500,
            bank: 61817874,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "5639": {
            cid: 5639,
            amount: 1000,
            bank: 61394406,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "5920": {
            cid: 5920,
            amount: 1000,
            bank: 61458731,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "6059": {
            cid: 6059,
            amount: 2000,
            bank: 61152487,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "6208": {
            cid: 6208,
            amount: 1000,
            bank: 61280340,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "6293": {
            cid: 6293,
            amount: 500,
            bank: 61707653,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "6470": {
            cid: 6470,
            amount: 800,
            bank: 61690652,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "6681": {
            cid: 6681,
            amount: 10000,
            bank: 61695788,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "6848": {
            cid: 6848,
            amount: 1000,
            bank: 61845724,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "6876": {
            cid: 6876,
            amount: 4000,
            bank: 61841741,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7104": {
            cid: 7104,
            amount: 4000,
            bank: 61339913,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7175": {
            cid: 7175,
            amount: 1000,
            bank: 61219613,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7249": {
            cid: 7249,
            amount: 300,
            bank: 61542556,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7253": {
            cid: 7253,
            amount: 1000,
            bank: 61381167,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7322": {
            cid: 7322,
            amount: 500,
            bank: 61778103,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7363": {
            cid: 7363,
            amount: 500,
            bank: 61895300,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7451": {
            cid: 7451,
            amount: 1000,
            bank: 61414044,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "7459": {
            cid: 7459,
            amount: 5000,
            bank: 61512179,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7463": {
            cid: 7463,
            amount: 1000,
            bank: 61693206,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7497": {
            cid: 7497,
            amount: 500,
            bank: 61932406,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7535": {
            cid: 7535,
            amount: 1000,
            bank: 61642147,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7567": {
            cid: 7567,
            amount: 2000,
            bank: 61422201,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7603": {
            cid: 7603,
            amount: 500,
            bank: 61357135,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7703": {
            cid: 7703,
            amount: 500,
            bank: 61549560,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7778": {
            cid: 7778,
            amount: 500,
            bank: 61704385,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7835": {
            cid: 7835,
            amount: 1000,
            bank: 61406463,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "7856": {
            cid: 7856,
            amount: 1000,
            bank: 61529922,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "8018": {
            cid: 8018,
            amount: 200,
            bank: 61476034,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "8320": {
            cid: 8320,
            amount: 5000,
            bank: 61225189,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "8384": {
            cid: 8384,
            amount: 3000,
            bank: 61623992,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "8643": {
            cid: 8643,
            amount: 1000,
            bank: 61826525,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "8668": {
            cid: 8668,
            amount: 2000,
            bank: 61931198,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "8803": {
            cid: 8803,
            amount: 1000,
            bank: 61785684,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "8987": {
            cid: 8987,
            amount: 2000,
            bank: 61457604,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "9297": {
            cid: 9297,
            amount: 10000,
            bank: 61604629,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "9431": {
            cid: 9431,
            amount: 100,
            bank: 61286630,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "9785": {
            cid: 9785,
            amount: 2000,
            bank: 61829849,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "9990": {
            cid: 9990,
            amount: 1000,
            bank: 61206759,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "10144": {
            cid: 10144,
            amount: 10000,
            bank: 61198986,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "10222": {
            cid: 10222,
            amount: 200,
            bank: 61837374,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "10223": {
            cid: 10223,
            amount: 25000,
            bank: 61509570,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "10251": {
            cid: 10251,
            amount: 500,
            bank: 61461807,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "10313": {
            cid: 10313,
            amount: 1000,
            bank: 61411407,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "10657": {
            cid: 10657,
            amount: 1000,
            bank: 61157376,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "10696": {
            cid: 10696,
            amount: 500,
            bank: 61357244,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "10724": {
            cid: 10724,
            amount: 150,
            bank: 61671865,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "10732": {
            cid: 10732,
            amount: 5000,
            bank: 61698342,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "10804": {
            cid: 10804,
            amount: 500,
            bank: 61889532,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "11145": {
            cid: 11145,
            amount: 2000,
            bank: 61319726,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "11602": {
            cid: 11602,
            amount: 5000,
            bank: 61559942,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "11635": {
            cid: 11635,
            amount: 50,
            bank: 61783734,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "11691": {
            cid: 11691,
            amount: 5000,
            bank: 61247711,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "11755": {
            cid: 11755,
            amount: 1500,
            bank: 61140567,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "11769": {
            cid: 11769,
            amount: 1000,
            bank: 61955203,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "11914": {
            cid: 11914,
            amount: 500,
            bank: 61599575,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "12053": {
            cid: 12053,
            amount: 100,
            bank: 61482214,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "12116": {
            cid: 12116,
            amount: 5000,
            bank: 61157128,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "12174": {
            cid: 12174,
            amount: 300,
            bank: 61785079,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "12180": {
            cid: 12180,
            amount: 100,
            bank: 61883270,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "12183": {
            cid: 12183,
            amount: 500,
            bank: 61400393,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "12225": {
            cid: 12225,
            amount: 500,
            bank: 61973165,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "12509": {
            cid: 12509,
            amount: 1000,
            bank: 61299154,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "12885": {
            cid: 12885,
            amount: 500,
            bank: 61966656,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "13036": {
            cid: 13036,
            amount: 200,
            bank: 61590237,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "13079": {
            cid: 13079,
            amount: 500,
            bank: 61585321,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "13356": {
            cid: 13356,
            amount: 200,
            bank: 61225271,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "13440": {
            cid: 13440,
            amount: 20000,
            bank: 61954598,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "13530": {
            cid: 13530,
            amount: 4000,
            bank: 61209451,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "13699": {
            cid: 13699,
            amount: 250,
            bank: 61632150,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "13733": {
            cid: 13733,
            amount: 100,
            bank: 61476885,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "13777": {
            cid: 13777,
            amount: 1000,
            bank: 61134277,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "13833": {
            cid: 13833,
            amount: 100,
            bank: 61903100,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "13886": {
            cid: 13886,
            amount: 7000,
            bank: 61649096,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14000": {
            cid: 14000,
            amount: 1000,
            bank: 61931719,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "14022": {
            cid: 14022,
            amount: 500,
            bank: 61573648,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14124": {
            cid: 14124,
            amount: 1000,
            bank: 61865060,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "14127": {
            cid: 14127,
            amount: 1500,
            bank: 61271633,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14183": {
            cid: 14183,
            amount: 1000,
            bank: 61590100,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14215": {
            cid: 14215,
            amount: 1000,
            bank: 61567440,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14242": {
            cid: 14242,
            amount: 500,
            bank: 61321237,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14309": {
            cid: 14309,
            amount: 1000,
            bank: 61716168,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14313": {
            cid: 14313,
            amount: 100,
            bank: 61196212,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14341": {
            cid: 14341,
            amount: 500,
            bank: 61827239,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14855": {
            cid: 14855,
            amount: 5000,
            bank: 61237136,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "14967": {
            cid: 14967,
            amount: 100,
            bank: 61164132,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "15057": {
            cid: 15057,
            amount: 1000,
            bank: 61756433,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "15095": {
            cid: 15095,
            amount: 1000,
            bank: 61256527,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "15336": {
            cid: 15336,
            amount: 200,
            bank: 61882748,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "15397": {
            cid: 15397,
            amount: 100,
            bank: 61698150,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "15444": {
            cid: 15444,
            amount: 200,
            bank: 61749621,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "15529": {
            cid: 15529,
            amount: 1000,
            bank: 61363836,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "15596": {
            cid: 15596,
            amount: 500,
            bank: 61966546,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "15605": {
            cid: 15605,
            amount: 100,
            bank: 61596252,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "15768": {
            cid: 15768,
            amount: 150,
            bank: 61836193,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "15793": {
            cid: 15793,
            amount: 1000,
            bank: 61231259,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "15987": {
            cid: 15987,
            amount: 150,
            bank: 61514898,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16064": {
            cid: 16064,
            amount: 1000,
            bank: 61351971,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16068": {
            cid: 16068,
            amount: 250,
            bank: 61308685,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16132": {
            cid: 16132,
            amount: 4000,
            bank: 61590979,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16256": {
            cid: 16256,
            amount: 1000,
            bank: 61625668,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "16266": {
            cid: 16266,
            amount: 200,
            bank: 61605618,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "16386": {
            cid: 16386,
            amount: 500,
            bank: 61401162,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16394": {
            cid: 16394,
            amount: 300,
            bank: 61933422,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16487": {
            cid: 16487,
            amount: 2500,
            bank: 61995495,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16496": {
            cid: 16496,
            amount: 1500,
            bank: 61445300,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16502": {
            cid: 16502,
            amount: 500,
            bank: 61482736,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16512": {
            cid: 16512,
            amount: 2000,
            bank: 61838034,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16569": {
            cid: 16569,
            amount: 1000,
            bank: 61625064,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16587": {
            cid: 16587,
            amount: 500,
            bank: 61415554,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16658": {
            cid: 16658,
            amount: 500,
            bank: 61198107,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16666": {
            cid: 16666,
            amount: 2000,
            bank: 61591665,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16694": {
            cid: 16694,
            amount: 500,
            bank: 61889010,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16744": {
            cid: 16744,
            amount: 10000,
            bank: 61775466,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16759": {
            cid: 16759,
            amount: 100,
            bank: 61899365,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16774": {
            cid: 16774,
            amount: 5000,
            bank: 61727127,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "16902": {
            cid: 16902,
            amount: 2000,
            bank: 61223815,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "17140": {
            cid: 17140,
            amount: 100,
            bank: 61605178,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "17159": {
            cid: 17159,
            amount: 500,
            bank: 61226644,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "17175": {
            cid: 17175,
            amount: 2000,
            bank: 61735009,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "17324": {
            cid: 17324,
            amount: 200,
            bank: 61786453,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "17370": {
            cid: 17370,
            amount: 10,
            bank: 61325466,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "17526": {
            cid: 17526,
            amount: 1000,
            bank: 61786343,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "17628": {
            cid: 17628,
            amount: 10000,
            bank: 61425854,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "17895": {
            cid: 17895,
            amount: 800,
            bank: 61931253,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "17979": {
            cid: 17979,
            amount: 200,
            bank: 61260482,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "18039": {
            cid: 18039,
            amount: 500,
            bank: 61337661,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "18357": {
            cid: 18357,
            amount: 1000,
            bank: 61594055,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "18364": {
            cid: 18364,
            amount: 500,
            bank: 61151992,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "18372": {
            cid: 18372,
            amount: 100,
            bank: 61801779,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "18539": {
            cid: 18539,
            amount: 500,
            bank: 61725424,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "18540": {
            cid: 18540,
            amount: 1000,
            bank: 61383337,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "18636": {
            cid: 18636,
            amount: 1000,
            bank: 61328900,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "18642": {
            cid: 18642,
            amount: 500,
            bank: 61560299,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "18678": {
            cid: 18678,
            amount: 200,
            bank: 61743112,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "18740": {
            cid: 18740,
            amount: 150,
            bank: 61525555,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          },
          "18824": {
            cid: 18824,
            amount: 3000,
            bank: 61974154,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "18939": {
            cid: 18939,
            amount: 2000,
            bank: 61189373,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19014": {
            cid: 19014,
            amount: 100,
            bank: 61969403,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19029": {
            cid: 19029,
            amount: 200,
            bank: 61563348,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19096": {
            cid: 19096,
            amount: 1000,
            bank: 61731604,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19190": {
            cid: 19190,
            amount: 2000,
            bank: 61930895,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19197": {
            cid: 19197,
            amount: 50,
            bank: 61698617,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19257": {
            cid: 19257,
            amount: 600,
            bank: 61325796,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19286": {
            cid: 19286,
            amount: 400,
            bank: 61326126,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19290": {
            cid: 19290,
            amount: 500,
            bank: 61858880,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19291": {
            cid: 19291,
            amount: 500,
            bank: 61162072,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19324": {
            cid: 19324,
            amount: 100,
            bank: 61769149,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19331": {
            cid: 19331,
            amount: 5000,
            bank: 61246200,
            eventName: "VLC 2 Fight 2 / Kyle Pred",
            option: "Kyle Pred"
          },
          "19376": {
            cid: 19376,
            amount: 5000,
            bank: 61796368,
            eventName: "VLC 2 Fight 2 / Toretti",
            option: "Toretti"
          }
        },
        description: "Kyle Pred VS Toretti",
        options: {
          Toretti: {
            name: "Toretti",
            id: "Toretti"
          },
          "Kyle Pred": {
            name: "Kyle Pred",
            id: "Kyle Pred"
          }
        },
        locked: true
      }
    }
  };
};
data$1.getSecurityCams = () => {
  return [{
    key: 1,
    name: "Legion Square"
  }, {
    key: 2,
    name: "Alta St"
  }];
};
data$1.getCalendarEvents = () => {
  return [{
    id: "random-uuid-goes-here",
    name: "Fun Event Name",
    host: "Penny or something",
    timestamp: 1654932193000,
    code: "ABCDEF",
    location: "Legion Square",
    attendees: 250,
    description: "This is a fun event description"
  }, {
    id: "i-am-event-2",
    name: "Cool Event Name",
    host: "monka S",
    timestamp: 1655043793000,
    location: "ron oil",
    attendees: 250,
    code: "ABCDEF",
    description: "Sell sell sell",
    shareable: true
  }, {
    id: "i-am-event-3",
    name: "Bad Event Name",
    host: "sinncere",
    timestamp: 1655043793000,
    location: "ron oil",
    attendees: 250,
    code: "ABCDEF",
    description: "Sell sell sell"
  }, {
    id: "i-am-event-4",
    name: "Bad Event Name",
    host: "monka S",
    timestamp: 1655043793000,
    location: "ron oil",
    attendees: 250,
    code: "ABCDEF",
    description: "Sell sell sell"
  }, {
    id: "i-am-event-5",
    name: "Bad Event Name",
    host: "sinncere",
    timestamp: 1655648593000,
    location: "ron oil",
    attendees: 250,
    code: "ABCDEF",
    description: "Sell sell sell"
  }];
};
data$1.getMetroSchedule = () => {
  return [{
    trainId: "pillbox-south-south",
    trainName: "Wayfarer",
    trainStatus: "transit",
    trainPassengers: 12,
    trainArrivalTime: 3,
    destinationId: "pillbox-south",
    destinationName: "Pillbox South",
    nextDestinationId: "little-seoul",
    nextDestinationName: "Little Seoul"
  }, {
    trainId: "pillbox-south-north",
    trainName: "Rover",
    trainStatus: "arriving",
    trainPassengers: 9,
    trainArrivalTime: 0,
    destinationId: "pillbox-south",
    destinationName: "Pillbox South",
    nextDestinationId: "davis",
    nextDestinationName: "Davis"
  }, {
    trainId: "portola-drive-south",
    trainName: "Nomad",
    trainStatus: "boarding",
    trainPassengers: 12,
    trainArrivalTime: 0,
    destinationId: "portola-drive",
    destinationName: "Portola Drive",
    nextDestinationId: "burton",
    nextDestinationName: "Burton"
  }, {
    trainId: "portola-drive-north",
    trainName: "Maverick",
    trainStatus: "departing",
    trainPassengers: 12,
    trainArrivalTime: 0,
    destinationId: "portola-drive",
    destinationName: "Portola Drive",
    nextDestinationId: "del-perro",
    nextDestinationName: "Del Perro"
  }, {
    trainId: "puerto-del-sol-south",
    trainName: "Trekker",
    trainStatus: "transit",
    trainPassengers: 12,
    trainArrivalTime: 4,
    destinationId: "puerto-del-sol",
    destinationName: "Puerto del Sol",
    nextDestinationId: "lsia-parking",
    nextDestinationName: "LSIA Parking"
  }, {
    trainId: "puerto-del-sol-north",
    trainName: "Trekker",
    trainStatus: "transit",
    trainPassengers: 12,
    trainArrivalTime: 1,
    destinationId: "puerto-del-sol",
    destinationName: "Puerto del Sol",
    nextDestinationId: "strawberry",
    nextDestinationName: "Strawberry"
  }];
};
data$1.getNopifyData = function () {
  return {
    stations: [{
      radioStationIdentifier: "radio_nikez_electronic",
      stationPlaylist: "radio_nikez_electronic_music",
      radioNameHash: 1103044034,
      name: "Radio Nikez Electronic",
      totalDuration: 8909000
    }, {
      radioStationIdentifier: "radio_nikez_rap",
      stationPlaylist: "radio_nikez_rap_music",
      radioNameHash: 3462838348,
      name: "Radio Nikez Rap",
      totalDuration: 7423000
    }, {
      radioStationIdentifier: "radio_nikez_rap_fresh",
      stationPlaylist: "radio_nikez_rap_fresh_music",
      radioNameHash: 3633204670,
      name: "Radio Nikez Rap Fresh",
      totalDuration: 426000
    }, {
      radioStationIdentifier: "radio_nikez_pop",
      stationPlaylist: "radio_nikez_pop_music",
      radioNameHash: 2637933505,
      name: "Radio Nikez Pop",
      totalDuration: 8014000
    }, {
      radioStationIdentifier: "radio_nikez_pop_fresh",
      stationPlaylist: "radio_nikez_pop_fresh_music",
      radioNameHash: 1985192374,
      name: "Radio Nikez Pop Fresh",
      totalDuration: 1144000
    }, {
      radioStationIdentifier: "radio_nikez_mix",
      stationPlaylist: "radio_nikez_mix_music",
      radioNameHash: 3989832571,
      name: "Radio Nikez Mix",
      totalDuration: 73132000
    }, {
      radioStationIdentifier: "radio_nikez_mix_fresh",
      stationPlaylist: "radio_nikez_mix_fresh_music",
      radioNameHash: 1061144582,
      name: "Radio Nikez Mix Fresh",
      totalDuration: 0
    }, {
      radioStationIdentifier: "radio_nikez_alternative",
      stationPlaylist: "radio_nikez_alternative_music",
      radioNameHash: 1622581582,
      name: "Radio Nikez Alternative",
      totalDuration: 9333000
    }, {
      radioStationIdentifier: "radio_nikez_rock",
      stationPlaylist: "radio_nikez_rock_music",
      radioNameHash: 2507628288,
      name: "Radio Nikez Rock",
      totalDuration: 16102000
    }, {
      radioStationIdentifier: "radio_nikez_lofi",
      stationPlaylist: "radio_nikez_lofi_music",
      radioNameHash: 2699812064,
      name: "Radio Nikez LoFi",
      totalDuration: 8122000
    }, {
      radioStationIdentifier: "radio_nikez_hardbass",
      stationPlaylist: "radio_nikez_hardbass_music",
      radioNameHash: 1352845571,
      name: "Radio Nikez Hardbass",
      totalDuration: 2225000
    }, {
      radioStationIdentifier: "radio_nikez_classical",
      stationPlaylist: "radio_nikez_classical_music",
      radioNameHash: 3755255416,
      name: "Radio Nikez Classical",
      totalDuration: 11434000
    }],
    tracks: [{
      artistNameHash: 4136850254,
      artistName: "Yellowbear Beats Ft. Ekko",
      trackNameHash: 1942441376,
      trackName: "Little Things (Ekkwinox Remix)",
      streamName: "yellowbear_beats_ft_ekko-little_things_ekkwinox_remix_radio_stream",
      duration: 166000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 2812294749,
      artistName: "Lee James",
      trackNameHash: 3445522889,
      trackName: "So Gooood",
      streamName: "lee_james-so_gooood_radio_stream",
      duration: 194000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 2028985169,
      artistName: "Ekko Prod. Ekkwinox",
      trackNameHash: 2900083396,
      trackName: "First Place (For All The Racers)",
      streamName: "ekko_prod_ekkwinox-first_place_for_all_the_racers_radio_stream",
      duration: 241000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 3588359391,
      artistName: "Ekko Prod. Ekkwinox",
      trackNameHash: 1982481749,
      trackName: "Repair Kit (For All The Racers)",
      streamName: "ekko_prod_ekkwinox-repair_kit_for_all_the_racers_radio_stream",
      duration: 64000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 403391336,
      artistName: "Ekko Prod. Ekkwinox",
      trackNameHash: 3584016014,
      trackName: "I'm a G (For All The Racers)",
      streamName: "ekko_prod_ekkwinox-im_a_g_for_all_the_racers_radio_stream",
      duration: 265000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 1882816057,
      artistName: "Paty WP feat. Dmon prod. DJ Doyle",
      trackNameHash: 3265209203,
      trackName: "Cobra",
      streamName: "paty_wp_feat_dmon_prod_dj_doyle-cobra_radio_stream",
      duration: 141000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 4171609906,
      artistName: "Sloane Kelly feat. Molly Rollin",
      trackNameHash: 516129565,
      trackName: "Make it Savage",
      streamName: "sloane_kelly_feat_molly_rollin-make_it_savage_radio_stream",
      duration: 161000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 3010408998,
      artistName: "Echo Skies",
      trackNameHash: 2868322666,
      trackName: "Purpose",
      streamName: "echo_skies-purpose_radio_stream",
      duration: 215000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 2905319095,
      artistName: "Echo Skies",
      trackNameHash: 3131195932,
      trackName: "In The Water",
      streamName: "echo_skies-in_the_water_radio_stream",
      duration: 134000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 2261800613,
      artistName: "Echo Skies",
      trackNameHash: 1800052686,
      trackName: "Chasing Stars",
      streamName: "echo_skies-chasing_stars_radio_stream",
      duration: 195000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 2092942236,
      artistName: "Echo Skies",
      trackNameHash: 3555914241,
      trackName: "Make It Right",
      streamName: "echo_skies-make_it_right_radio_stream",
      duration: 163000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 568444662,
      artistName: "Ava Thompson",
      trackNameHash: 3795994564,
      trackName: "Looking At You",
      streamName: "ava_thompson-looking_at_you_radio_stream",
      duration: 155000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 1603322675,
      artistName: "Sloane Kelly feat. birbus",
      trackNameHash: 1606140813,
      trackName: "Shadows Talk (RIP Jeffy)",
      streamName: "sloane_kelly_feat_birbus-shadows_talk_rip_jeffy_radio_stream",
      duration: 171000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 3496353220,
      artistName: "DubMC feat. CHLOE",
      trackNameHash: 2438406059,
      trackName: "Foolish",
      streamName: "dubmc_feat_chloe-foolish_radio_stream",
      duration: 195000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 74286794,
      artistName: "Q",
      trackNameHash: 2199225352,
      trackName: "The Long Way Home",
      streamName: "q-the_long_way_home_radio_stream",
      duration: 241000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 3590367917,
      artistName: "Q",
      trackNameHash: 2501322943,
      trackName: "Tragic",
      streamName: "q-tragic_radio_stream",
      duration: 202000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 2558079207,
      artistName: "CHLOE feat. K1",
      trackNameHash: 2598909377,
      trackName: "Dancin' All Night Long | K1 REMIX",
      streamName: "chloe_feat_k1-dancin_all_night_long__k1_remix_radio_stream",
      duration: 176000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 3541618904,
      artistName: "Cryosphere",
      trackNameHash: 1603332550,
      trackName: "Don't Wake Me Up feat. ivi",
      streamName: "cryosphere-dont_wake_me_up_feat_ivi_radio_stream",
      duration: 156000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 1634365205,
      artistName: "YASS",
      trackNameHash: 2183770147,
      trackName: "Ecstasy",
      streamName: "yass-ecstasy_radio_stream",
      duration: 236000,
      playlists: ["radio_nikez_electronic", "radio_nikez_mix"]
    }, {
      artistNameHash: 2927756641,
      artistName: "C-Rock feat. P Money",
      trackNameHash: 1640360942,
      trackName: "Flexin",
      streamName: "c-rock_feat_p_money-flexin_radio_stream",
      duration: 185000,
      playlists: ["radio_nikez_rap", "radio_nikez_mix"]
    }, {
      artistNameHash: 1672999094,
      artistName: "Qobi",
      trackNameHash: 1655205523,
      trackName: "MILEAGE",
      streamName: "qobi-mileage_radio_stream",
      duration: 98000,
      playlists: ["radio_nikez_rap", "radio_nikez_mix"]
    }]
  };
};
data$1.getUserPlaylists = function () {
  return [{
    id: 1,
    name: "Test playlist",
    favorited: false,
    created_at: 0,
    trackCount: 7,
    trackIds: ["dft-momentum_radio_stream", "dft-timeless_radio_stream", "dft-say_it_now_radio_stream", "dick_chiclets_feat_ava_thompson-relapse_radio_stream", "valentine_dalla_feat_naomi_scott-confronted_-_niko_rain_remix_radio_stream", "alec_ryder-love_in_flames_radio_stream", "alec_ryder-move_me_radio_stream"]
  }];
};
const data = {
  showroomGetCarConfig: function () {
    return [{
      model: "primoard",
      active: true,
      group: "Sports",
      brand: "Ford",
      name: "Primo ARD",
      import_price: -1,
      retail_price: -1,
      pdm: true,
      fastlane: false,
      tuner: true,
      showroom_image_url: "",
      hd_image_url: ""
    }, {
      model: "primoard",
      active: true,
      group: "Sports",
      brand: "Ford",
      name: "Sports 1",
      import_price: -1,
      retail_price: -1,
      pdm: true,
      fastlane: true,
      tuner: false,
      showroom_image_url: "https://i.imgur.com/hgUhGkq.png",
      hd_image_url: ""
    }, {
      model: "wot",
      active: true,
      group: "Sports",
      brand: "Ford",
      name: "Sports 2",
      import_price: -1,
      retail_price: -1,
      pdm: false,
      fastlane: true,
      tuner: false,
      showroom_image_url: "https://i.imgur.com/hgUhGkq.png",
      hd_image_url: ""
    }, {
      model: "wot",
      active: true,
      group: "Cycle",
      brand: "Ford",
      name: "Cycle",
      import_price: -1,
      retail_price: -1,
      pdm: false,
      fastlane: true,
      tuner: false,
      showroom_image_url: "https://i.imgur.com/hgUhGkq.png",
      hd_image_url: ""
    }, {
      model: "gtr",
      active: true,
      group: "Coupe",
      brand: "Ford",
      name: "Coupe",
      import_price: -1,
      retail_price: -1,
      pdm: true,
      fastlane: true,
      tuner: false,
      showroom_image_url: "https://i.imgur.com/hgUhGkq.png",
      hd_image_url: ""
    }];
  },
  showroomChangeCar: function () {
    return {
      info: [{
        name: "Acceleration",
        value: 9.8
      }, {
        name: "Speed",
        value: 9.8
      }, {
        name: "Handling",
        value: 9.8
      }, {
        name: "Braking",
        value: 9.8
      }],
      vehClass: "S"
    };
  }
};
data.getCharacterPreferences = () => {
  return {
    value: JSON.stringify({
      phone: "ios"
    })
  };
};
data.getAccountTypes = () => {
  return [{
    id: 1,
    name: "Default"
  }, {
    id: 2,
    name: "Personal",
    public: true
  }, {
    id: 3,
    name: "Business"
  }, {
    id: 4,
    name: "Savings",
    public: true
  }];
};
data.getCharacterDetails = function () {
  return {
    bank: 1333337,
    cash: 1337,
    jobs: {
      primary: "unemployed",
      secondary: "none"
    },
    licenses: [{
      name: "drivers",
      status: true
    }, {
      name: "nusiness",
      status: false
    }, {
      name: "nusiness",
      status: false
    }, {
      name: "nusiness",
      status: false
    }, {
      name: "nusiness",
      status: false
    }]
  };
};
data.getAccountCharacters = () => {
  return [{
    id: 1111,
    name: "Siz Fulker",
    is_owner: true,
    access: ["deposit", "withdraw", "transfer", "transactions"]
  }, {
    id: 3333,
    name: "Siz Fulker",
    is_owner: false,
    access: ["deposit", "withdraw", "transfer", "transactions"]
  }, {
    id: 2222,
    name: "Uchiha Jones",
    is_owner: false,
    access: ["transfer", "transactions"]
  }];
};
data.getAccounts = () => {
  return {
    is_atm: false,
    accounts: [{
      owner_first_name: "D",
      owner_last_name: "W",
      name: "Personal",
      type: "Default",
      type_id: 1,
      id: 1,
      balance: 15000,
      is_frozen: false,
      is_monitored: false,
      cid: 1111,
      access: ["deposit", "withdraw", "transfer", "transactions", "balance"]
    }, {
      owner_first_name: "D",
      owner_last_name: "W",
      name: "The Tavern",
      type: "Business",
      type_id: 3,
      id: 22222,
      balance: 150000,
      is_frozen: true,
      is_monitored: false,
      cid: 1111,
      access: []
    }, {
      owner_first_name: "D",
      owner_last_name: "W",
      name: "Not Drugs",
      type: "Personal",
      type_id: 2,
      id: 33333,
      balance: 150000000,
      is_frozen: false,
      is_monitored: true,
      cid: 1111,
      access: ["deposit"]
    }, {
      owner_first_name: "D",
      owner_last_name: "W",
      name: "A Test",
      type: "Business",
      type_id: 3,
      id: 22222,
      balance: 150000,
      is_frozen: true,
      is_monitored: false,
      cid: 1111,
      access: []
    }]
  };
};
data.getTransactions = () => {
  return [{
    id: "bfad16b2-b1a3-491b-820d-06a08192e426",
    direction: "in",
    amount: 1500,
    type: "income",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "Personal Income",
    tax_id: 6,
    tax_percentage: 20
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08192e426",
    direction: "out",
    amount: 1500,
    type: "purchase",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "Services",
    tax_id: 2,
    tax_percentage: 15
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08092e426",
    direction: "in",
    amount: 1500,
    type: "deposit",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "No Tax",
    tax_id: 1,
    tax_percentage: 15
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08092e427",
    direction: "out",
    amount: 1500,
    type: "withdraw",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "No Tax",
    tax_id: 1,
    tax_percentage: 15
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08092e447",
    direction: "in",
    amount: 1500,
    type: "transfer",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "No Tax",
    tax_id: 1,
    tax_percentage: 15
  }, {
    id: "bfad16b2-b1a3-491b-820f-06a08092e437",
    direction: "out",
    amount: 1500,
    type: "transfer",
    date: 1598450656,
    comment: "comment",
    from_account_id: 33333,
    from_account_name: "Not Drugs",
    from_civ_name: "Siz Fulker",
    to_account_id: 11111,
    to_account_name: "Personal",
    to_civ_name: "Siz Fulker",
    tax_type: "No Tax",
    tax_id: 1,
    tax_percentage: 15
  }];
};
data.getTaxOptions = () => {
  return [{
    id: 1,
    name: "Vehicle",
    level: 10,
    new_level: 15,
    date: ""
  }, {
    id: 2,
    name: "Groceries",
    level: 15,
    new_level: 10,
    date: "2020-06-03T12:55:37Z"
  }];
};
data.getBusinesses = function () {
  return [{
    id: 1,
    code: "pdm",
    name: "Premium Deluxe Motorsports",
    business_type_id: 1,
    business_type_name: "showroom"
  }];
};
data.getBusinessTypes = function () {
  return [{
    id: 1,
    name: "Showroom"
  }, {
    id: 2,
    name: "Generic"
  }];
};
data.getTaxHistory = () => {
  return [{
    id: 1,
    name: "Vehicle",
    civ_name: "Coop Holligay",
    date: "2020-06-03T12:55:37Z",
    level: 10
  }, {
    id: 2,
    name: "Groceries",
    civ_name: "Mehdi",
    date: "2020-06-03T12:55:37Z",
    level: 15
  }];
};
data.getLicenses = () => {
  return [{
    id: 1,
    name: "Drivers License"
  }];
};
data.getBallots = () => {
  return [{
    id: 1,
    end_date: 1699555815,
    start_date: 1599305815,
    multi: false,
    name: "Mayor of Los Santos",
    description: "Vote for the Mayor!",
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }]
  }, {
    id: 2,
    end_date: 1595005815,
    start_date: 1595005815,
    name: "Mayor of Los Santoss",
    description: "Vote for the Mayor!",
    multi: true,
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop, HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }]
  }];
};
data.getCurrentBallotOptions = () => {
  return [{
    id: 1,
    name: "Mayor of Los Santos",
    multi: false,
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "CHAVEZ, Nino",
      description: "Some fluff about Nino",
      icon: "birthday-cake",
      party: "Sahara International"
    }]
  }, {
    id: 2,
    name: "Governor of San Andreas",
    selected: [],
    multi: true,
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "CHAVEZ, Nino",
      description: "Some fluff about Nino",
      icon: "birthday-cake",
      party: "Sahara International"
    }, {
      id: 3,
      name: "PAYNE, Matthew",
      description: "Some fluff about Payne",
      icon: "birthday-cake",
      party: "Payne Enterprises"
    }]
  }, {
    id: 3,
    name: "Governor of Your Mom",
    selected: [],
    multi: true,
    options: [{
      id: 1,
      name: "HOLLIDAY, Coop",
      description: "Some fluff about Coop",
      icon: "birthday-cake",
      party: "Affiliated Party"
    }, {
      id: 2,
      name: "CHAVEZ, Nino",
      description: "Some fluff about Nino",
      icon: "birthday-cake",
      party: "Sahara International"
    }, {
      id: 3,
      name: "PAYNE, Matthew",
      description: "Some fluff about Payne",
      icon: "birthday-cake",
      party: "Payne Enterprises"
    }]
  }];
};
data.getNewspaperContent = () => {
  return {
    drugs: "Meth! MEth! METH!!!!",
    lockups: [{
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }, {
      name: "Mel Rickenbacker",
      duration: 123
    }],
    taxes: [{
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }, {
      type: "Vehicle",
      level: 15
    }, {
      type: "Groceries",
      level: 10
    }],
    recentElections: [{
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Coop Chavez won!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Coop Chavez won!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }],
    stonks: "The market has been in turmoil since the global catastrophe that was...",
    upcomingElections: [{
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }, {
      date: "2020-06-03T12:55:37Z",
      title: "Mayor of Los Santos",
      description: "Vote for the Mayor! Candidates include Coop Holliday and Nino Chavez!"
    }]
  };
};
data.getNewsArchives = function () {
  return [{
    id: 1,
    information: {
      location: "Little Seoul - Palomino Ave ",
      coords: {
        x: -580.950439453125,
        y: -916.6008911132812,
        z: 29.73028564453125
      },
      clips: [{
        title: "Test Clip",
        type: "clip",
        url: "TangibleAmorphousTigerTebowing-W4G08Seoy_weNnvH"
      }],
      camera_id: "750210",
      timestamp: 1622428757,
      ingested: 0,
      id: "750210-0",
      duration: 4993,
      dateString: "5/31/2021 02:39:28 UTC"
    },
    createdAt: 1631231231,
    character_id: 1026,
    author: "Test Milli",
    approved: 0
  }, {
    id: 2,
    information: {
      location: "Little Seoul - Palomino Ave ",
      coords: {
        x: -580.950439453125,
        y: -916.6008911132812,
        z: 29.73028564453125
      },
      clips: [{
        title: "Test Clip 2",
        type: "clip",
        url: "SleepyPlausibleMetalSSSsss-7rRfuHv_SbHEHET6"
      }, {
        title: "Test Clip",
        type: "clip",
        url: "TangibleAmorphousTigerTebowing-W4G08Seoy_weNnvH"
      }],
      camera_id: "750210",
      timestamp: 1622428757,
      ingested: 0,
      id: "750210-1",
      duration: 11,
      dateString: "5/31/2021 02:39:23 UTC"
    },
    createdAt: 1631131231,
    character_id: 1026,
    author: "Test Billington",
    approved: 0
  }, {
    id: 3,
    information: {
      location: "Little Seoul - Palomino Ave ",
      coords: {
        x: -580.950439453125,
        y: -916.6008911132812,
        z: 29.73028564453125
      },
      clips: [{
        title: "Test Clip 3",
        type: "youtube",
        url: "dQw4w9WgXcQ"
      }],
      camera_id: "750210",
      timestamp: 1622418757,
      ingested: 1,
      id: "750210-2",
      duration: 50,
      dateString: "5/31/2021 02:39:23 UTC"
    },
    createdAt: 1631231131,
    character_id: 1026,
    author: "Test Dillington",
    approved: 1
  }, {
    id: 4,
    information: {
      location: "Little Seoul - Palomino Ave ",
      coords: {
        x: -580.950439453125,
        y: -916.6008911132812,
        z: 29.73028564453125
      },
      clips: [{
        title: "Test Clip 4",
        type: "streamable",
        url: "yuho7v"
      }],
      camera_id: "750210",
      timestamp: 1622418757,
      ingested: 1,
      id: "750210-3",
      duration: 50,
      dateString: "5/31/2021 02:39:23 UTC"
    },
    createdAt: 1631231131,
    character_id: 1026,
    author: "Test Sillington",
    approved: 1
  }];
};
const lastTenNuiCallsArray = [];
let isCommsDisabled = false;
const recoilSync = () => {
  isCommsDisabled = true;
};
const doRequest = async (param_1, _0x56d34b = {}) => {
  const varData_55 = GetCharacter() ?? {};
  const varData_56 = await fetch("https://np-ui/" + param_1, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      character: varData_55,
      ..._0x56d34b
    })
  });
  try {
    const varData_57 = await varData_56.json();
    lastTenNuiCallsArray.unshift(JSON.stringify({
      action: param_1,
      body: {
        character: varData_55,
        ..._0x56d34b
      },
      result: varData_57
    }));
    while (lastTenNuiCallsArray.length > 10) {
      lastTenNuiCallsArray.pop();
    }
    if (isCommsDisabled) {
      if (Array.isArray(varData_57.body)) {
        return [];
      } else {
        return {};
      }
    }
    return varData_57;
  } catch (err) {
    return {
      body: {},
      meta: {
        ok: false,
        message: "failed to do request for: " + param_1 + " - " + (err instanceof Error && err.message)
      }
    };
  }
};
const doExternalRequest = async (param_1, _0x3a4592 = {}) => {
  const varData_58 = GetCharacter() ?? {};
  const varData_59 = GetGameDetails();
  const varData_60 = {
    Authorization: "Bearer " + varData_59.token,
    "Content-Type": "application/json; charset=UTF-8"
  };
  const varData_61 = isDebug() ? "http://localhost:30422/fivem/" : varData_59.endpoint;
  const varData_62 = "" + varData_61 + param_1;
  if (isDebug()) {
    console.log("request to: ", varData_62);
  }
  const varData_63 = await fetch(varData_62, {
    method: "POST",
    headers: varData_60,
    body: JSON.stringify({
      character: varData_58,
      ..._0x3a4592
    })
  });
  try {
    const varData_64 = await varData_63.json();
    lastTenNuiCallsArray.unshift(JSON.stringify({
      action: param_1,
      body: {
        character: varData_58,
        ..._0x3a4592
      },
      result: varData_64
    }));
    while (lastTenNuiCallsArray.length > 10) {
      lastTenNuiCallsArray.pop();
    }
    if (isCommsDisabled) {
      if (Array.isArray(varData_64.body)) {
        return [];
      } else {
        return {};
      }
    }
    return varData_64;
  } catch (err) {
    return {
      body: {},
      meta: {
        ok: false,
        message: "failed to do request for: " + param_1 + " - " + (err instanceof Error && err.message)
      }
    };
  }
};
const defaultOptions = {
  ok: true,
  message: "",
  returnData: {},
  timeout: 250,
  extApi: false
};
const getResult = async (param_1, param_2, param_3) => {
  if (!isDebug() || param_3.useRealServer) {
    if (!param_3.extApi) {
      return doRequest(param_1, param_2);
    } else {
      return doExternalRequest(param_1, param_2);
    }
  }
  const varData_65 = {
    ...defaultOptions,
    ...param_3
  };
  let varData_66 = varData_65.returnData;
  if (typeof varData_66 === "string") {
    varData_66 = data[varData_66]();
  }
  return new Promise(param_1_1 => {
    setTimeout(() => param_1_1({
      data: varData_66,
      meta: {
        ok: varData_65.ok,
        message: varData_65.message
      }
    }), varData_65.timeout);
  });
};
async function nuiAction(param_1, _0x19cf18 = {}, _0xd6fefc = defaultOptions) {
  const varData_67 = GetCharacter() ?? {};
  const varData_68 = {
    character: varData_67,
    ..._0x19cf18
  };
  if (!isDebug()) {
    return getResult(param_1, varData_68, _0xd6fefc);
  }
  try {
    const varData_69 = Math.random();
    const timestamp = Date.now();
    const varData_70 = param_1_1 => {
      const varData_71 = [{
        action: param_1,
        id: varData_69,
        arrow: true,
        data: "waiting for response...",
        options: _0xd6fefc,
        result: "",
        type: "Action"
      }, ...param_1_1["debug-log"].log.slice(0, 20)];
      return {
        ...param_1_1,
        "debug-log": {
          ...param_1_1["debug-log"],
          log: varData_71
        }
      };
    };
    store$6.dispatch({
      cb: varData_70,
      type: "np-ui-action"
    });
    const varData_72 = await getResult(param_1, varData_68, _0xd6fefc);
    const varData_73 = param_1_1 => {
      const varData_74 = [...param_1_1["debug-log"].log];
      const varData_75 = varData_74.findIndex(param_1_2 => param_1_2.id === varData_69);
      const varData_76 = {
        action: param_1,
        arrow: !varData_72.meta.ok,
        data: varData_68,
        ms: Date.now() - timestamp,
        options: _0xd6fefc,
        result: varData_72,
        type: "Action"
      };
      if (varData_75 !== -1) {
        varData_74[varData_75] = varData_76;
      } else {
        varData_74.unshift(varData_76);
      }
      return {
        ...param_1_1,
        "debug-log": {
          ...param_1_1["debug-log"],
          log: varData_74
        }
      };
    };
    store$6.dispatch({
      cb: varData_73,
      type: "np-ui-action"
    });
    return varData_72;
  } catch (err) {
    console.error("nui error", err);
    const varData_77 = param_1_1 => {
      const varData_78 = [{
        action: param_1,
        arrow: true,
        data: varData_68,
        options: _0xd6fefc,
        result: {
          requestFailed: err.message
        },
        type: "Action"
      }, ...param_1_1["debug-log"].log.slice(0, 20)];
      return {
        ...param_1_1,
        "debug-log": {
          ...param_1_1["debug-log"],
          log: varData_78
        }
      };
    };
    store$6.dispatch({
      cb: varData_77,
      type: "np-ui-action"
    });
    const varData_79 = {
      data: {},
      meta: {
        ok: false,
        message: err.message
      }
    };
    return varData_79;
  }
}
const nuiEvent = param_1 => {
  if (!isDebug()) {
    return;
  }
  try {
    const varData_80 = param_1_1 => {
      const varData_81 = [{
        action: "" + param_1.app,
        arrow: false,
        data: {
          ...param_1
        },
        options: {},
        result: "",
        type: "Event"
      }, ...param_1_1["debug-log"].log.slice(0, 20)];
      return {
        ...param_1_1,
        "debug-log": {
          ...param_1_1["debug-log"],
          log: varData_81
        }
      };
    };
    store$6.dispatch({
      cb: varData_80,
      type: "np-ui-action"
    });
  } catch (err) {
    console.error("error logging incoming event: ", err instanceof Error && err.message);
  }
};
const lastTenNuiCalls = () => {
  return lastTenNuiCallsArray.map(param_1 => JSON.stringify(param_1, null, 4)).join("\n");
};
let totalFetched = 0;
const getMessages = async param_1 => {
  if (isDebug()) {
    return new Array(21).fill(null).map(param_1_1 => {
      const varData_82 = totalFetched++;
      const varData_83 = varData_82 % 2 === 0;
      return {
        message: "__MSG_STRUCTURED__::v1::{\"type\":\"payment\", \"data\": { \"type\": \"send\", \"paymentId\": \"12321323\", \"amount\": 250, \"senderNumber\": \"4205554315405\" }}",
        number_from: varData_83 ? 9876543210 : 5558538471,
        number_to: varData_83 ? 5558538471 : 9876543210,
        timestamp: Date.now() - varData_82 * 60000
      };
    });
  }
  const varData_84 = GetSimCard();
  if (!varData_84) {
    return [];
  }
  const varData_85 = await nuiAction("phone/getMessages", {
    ...param_1,
    phoneNumber: varData_84.areaCode + varData_84.number
  }, {
    returnData: data$1.getMessages(),
    extApi: true
  });
  return varData_85.data;
};
const sendMessage = async (param_1, param_2, param_3) => {
  const varData_86 = GetCurrentSimNumber();
  if (!varData_86) {
    return [false, "SIM Card not found"];
  }
  if (param_2 === varData_86) {
    return [false, "Cannot send message to yourself"];
  }
  const varData_87 = encodePhoneMessage(param_1, param_3);
  const varData_88 = {
    message: varData_87,
    number: param_2,
    sender_number: varData_86
  };
  const varData_89 = await nuiAction("np-ui:smsSend", varData_88);
  if (!varData_89.meta.ok) {
    return [false, "Failed to send message"];
  }
  return [true, null];
};
const normalizeMessages = (param_1, param_2) => {
  const varData_90 = [...param_2].sort((param_1_1, param_2_1) => param_2_1.timestamp - param_1_1.timestamp);
  const dataSet = /* @__PURE__ */new Set();
  const varData_91 = [];
  for (const varData_92 of varData_90) {
    const varData_93 = varData_92.number_from.toString() === param_1;
    const varData_94 = varData_93 ? varData_92.number_to.toString() : varData_92.number_from.toString();
    if (dataSet.has(varData_94)) {
      continue;
    }
    dataSet.add(varData_94);
    varData_91.push({
      direction: varData_93 ? "out" : "in",
      message: varData_92.message,
      timestamp: varData_92.timestamp,
      number: varData_94
    });
  }
  return varData_91;
};
function encodePhoneMessage(param_1, param_2) {
  if (param_1 === "text") {
    return param_2;
  }
  const varData_95 = "__MSG_STRUCTURED__::v1::";
  return varData_95 + JSON.stringify({
    type: param_1,
    data: param_2
  });
}
function decodePhoneMessage(param_1) {
  const varData_96 = "__MSG_STRUCTURED__::v1::";
  if (param_1.startsWith(varData_96)) {
    try {
      const varData_97 = JSON.parse(param_1.slice(varData_96.length));
      return varData_97;
    } catch {
      return {
        type: "text",
        data: param_1
      };
    }
  }
  return {
    type: "text",
    data: param_1
  };
}
function getFormattedExportedMessage(param_1) {
  const varData_98 = decodePhoneMessage(param_1);
  if (varData_98.type === "text") {
    return varData_98.data;
  }
  if (varData_98.type === "location") {
    return "📍 Shared their location";
  }
  if (varData_98.type === "payment") {
    const varData_99 = varData_98.data;
    if (varData_99.type === "send") {
      return "💸 Sent a payment of $" + varData_99.amount;
    }
    if (varData_99.type === "request") {
      return "💰 Requested a payment of $" + varData_99.amount;
    }
  }
  return "Sent an unsupported message type.";
}
const preferences = () => store$6.getState().preferences;
const preference = (param_1, _0x5d2091 = null) => {
  const varData_100 = _0x5d2091 || store$6.getState();
  return varData_100.preferences[param_1];
};
const BottomBar = () => {
  const {
    setState: _0xd5390c
  } = usePhoneState();
  return /* @__PURE__ */_0x14f011.createElement("div", {
    className: "footer-wrap"
  }, /* @__PURE__ */_0x14f011.createElement(CustomTooltip, {
    title: "Home"
  }, /* @__PURE__ */_0x14f011.createElement("div", {
    onClick: () => _0xd5390c("activeApp", "home-screen")
  })));
};
const PhoneBattery = () => {
  return /* @__PURE__ */_0x14f011.createElement("svg", {
    width: "2.81vh",
    height: "1.61vh",
    viewBox: "0 0 25 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */_0x14f011.createElement("path", {
    opacity: "0.35",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.98438 0.500122H20.2031C21.4544 0.500122 22.4688 1.61941 22.4688 3.00012V9.50012C22.4688 10.8808 21.4544 12.0001 20.2031 12.0001H2.98438C1.73311 12.0001 0.71875 10.8808 0.71875 9.50012V3.00012C0.71875 1.61941 1.73311 0.500122 2.98438 0.500122ZM2.9845 1.50001C2.23374 1.50001 1.62512 2.17159 1.62512 3.00001V9.50001C1.62512 10.3284 2.23374 11 2.9845 11H20.2032C20.954 11 21.5626 10.3284 21.5626 9.50001V3.00001C21.5626 2.17159 20.954 1.50001 20.2032 1.50001H2.9845Z",
    fill: "white"
  }), /* @__PURE__ */_0x14f011.createElement("path", {
    opacity: "0.4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.375 3.79993C24.1819 4.2551 24.7344 5.1814 24.7344 6.25007C24.7344 7.31874 24.1819 8.24504 23.375 8.70022V3.79993Z",
    fill: "white"
  }), /* @__PURE__ */_0x14f011.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.4375 2.50006H19.75C20.2505 2.50006 20.6563 2.94778 20.6563 3.50006V9.00006C20.6563 9.55235 20.2505 10.0001 19.75 10.0001H3.4375C2.93699 10.0001 2.53125 9.55235 2.53125 9.00006V3.50006C2.53125 2.94778 2.93699 2.50006 3.4375 2.50006Z",
    fill: "white"
  }));
};
const store$4 = {
  key: "phone.top-bar",
  initialState: {}
};
const store$5 = Object.freeze(Object.defineProperty({
  "__proto__": null,
  default: store$4
}, Symbol.toStringTag, {
  value: "Module"
}));
const index$3 = "";
const mapStateToProps$1 = param_1 => ({
  character: param_1.character,
  game: param_1.game,
  top: param_1[store$4.key]
});
const ContentTop = param_1 => {
  const {
    state: _0x8c5d5c
  } = usePhoneState();
  const {
    state: _0xbc32ad
  } = useGlobalState();
  const [_0x21f944, _0x477df0] = _0x14f011.useState(true);
  const varData_101 = () => {
    _0x477df0(!_0x21f944);
    nuiAction("np-ui:togglePhoneNotificationSounds", {
      status: _0x21f944 ? "off" : "on"
    });
  };
  return /* @__PURE__ */_0x14f011.createElement("div", {
    className: "header-wrap"
  }, /* @__PURE__ */_0x14f011.createElement("div", {
    className: "header-left"
  }, /* @__PURE__ */_0x14f011.createElement("h1", null, _0xbc32ad.game.time), /* @__PURE__ */_0x14f011.createElement("h1", null, "#", _0xbc32ad.character?.server_id), /* @__PURE__ */_0x14f011.createElement(Show, {
    when: _0x8c5d5c.appsWithNotifications.includes("messages")
  }, /* @__PURE__ */_0x14f011.createElement(Icon, {
    className: "icon",
    icon: _0x4035d1,
    size: "sm"
  }))), /* @__PURE__ */_0x14f011.createElement("div", {
    className: "header-notch"
  }), /* @__PURE__ */_0x14f011.createElement("div", {
    className: "header-right"
  }, /* @__PURE__ */_0x14f011.createElement(Icon, {
    onClick: varData_101,
    icon: _0x21f944 ? "bell" : "bell-slash",
    size: "sm"
  }), /* @__PURE__ */_0x14f011.createElement(Icon, {
    icon: "wifi",
    size: "sm",
    style: {
      color: "#607D8B"
    }
  }), /* @__PURE__ */_0x14f011.createElement(PhoneBattery, null)));
};
const Container$1 = _0x4dcc56(mapStateToProps$1)(ContentTop);
const spinner = "";
function Spinner() {
  return /* @__PURE__ */_0x14f011.createElement("div", {
    className: "spinner-wrapper"
  }, /* @__PURE__ */_0x14f011.createElement("div", {
    className: "lds-spinner"
  }, /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null), /* @__PURE__ */_0x14f011.createElement("div", null)));
}
const checkmark = "";
const Checkmark = () => {
  return /* @__PURE__ */_0x14f011.createElement("div", {
    className: "component-checkmark"
  }, /* @__PURE__ */_0x14f011.createElement("svg", {
    className: "checkmark",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 52 52"
  }, /* @__PURE__ */_0x14f011.createElement("circle", {
    className: "checkmark__circle",
    cx: "26",
    cy: "26",
    r: "25",
    fill: "none"
  }), /* @__PURE__ */_0x14f011.createElement("path", {
    className: "checkmark__check",
    fill: "none",
    d: "M14.1 27.2l7.1 7.2 16.7-16.8"
  })));
};
const wrapper = "_wrapper_29v0h_1";
const container$5 = "_container_29v0h_13";
const confirm_container = "_confirm_container_29v0h_27";
const header = "_header_29v0h_34";
const actions$2 = "_actions_29v0h_41";
const error_container = "_error_container_29v0h_46";
const text = "_text_29v0h_53";
const btn = "_btn_29v0h_61";
const red = "_red_29v0h_73";
const green = "_green_29v0h_80";
const styles$6 = {
  wrapper,
  container: container$5,
  confirm_container,
  header,
  actions: actions$2,
  error_container,
  text,
  btn,
  red,
  green
};
const Modal$1 = param_1 => {
  return /* @__PURE__ */_0x14f011.createElement("div", {
    className: styles$6.wrapper
  }, /* @__PURE__ */_0x14f011.createElement("div", {
    className: styles$6.container
  }, param_1.loading && /* @__PURE__ */_0x14f011.createElement(Spinner, null), !param_1.loading && param_1.slowHide && /* @__PURE__ */_0x14f011.createElement(Checkmark, null), !param_1.loading && /* @__PURE__ */_0x14f011.createElement(_0x14f011.Fragment, null, param_1.isConfirm && /* @__PURE__ */_0x14f011.createElement("div", {
    className: styles$6.confirm_container
  }, /* @__PURE__ */_0x14f011.createElement("h1", {
    className: styles$6.header
  }, "Confirmation"), /* @__PURE__ */_0x14f011.createElement("p", {
    className: styles$6.text
  }, param_1.confirmText), /* @__PURE__ */_0x14f011.createElement("div", {
    className: styles$6.actions
  }, /* @__PURE__ */_0x14f011.createElement("button", {
    className: _0x3a388a(styles$6.btn, styles$6.red),
    onClick: () => param_1.updateState({
      show: false,
      slowHide: false
    })
  }, "Cancel"), /* @__PURE__ */_0x14f011.createElement("button", {
    className: _0x3a388a(styles$6.btn, styles$6.green),
    onClick: () => param_1.onConfirm()
  }, "Confirm"))), param_1.error && /* @__PURE__ */_0x14f011.createElement("div", {
    className: styles$6.error_container
  }, /* @__PURE__ */_0x14f011.createElement(Icon, {
    icon: "exclamation",
    size: "2x",
    style: {
      color: "#853c3c"
    }
  }), /* @__PURE__ */_0x14f011.createElement("p", {
    className: styles$6.text
  }, param_1.error), /* @__PURE__ */_0x14f011.createElement("button", {
    className: _0x3a388a(styles$6.btn, styles$6.red),
    onClick: () => {
      if (param_1.closeOnErrorOkay) {
        param_1.updateState({
          show: false,
          loading: false
        });
      } else if (param_1.hideOnOkay) {
        param_1.updateState({
          error: null,
          loading: false
        });
      }
    }
  }, "Okay")), !param_1.isConfirm && /* @__PURE__ */_0x14f011.createElement("div", {
    className: styles$6.content_container
  }, param_1.content))));
};
const store$2 = {
  key: "phone.modal",
  initialState: {
    closeOnErrorOkay: false,
    confirmText: "",
    content: "",
    error: null,
    hideOnOkay: true,
    isConfirm: false,
    loading: false,
    onConfirm: () => {},
    show: false,
    slowHide: false
  }
};
const store$3 = Object.freeze(Object.defineProperty({
  "__proto__": null,
  default: store$2
}, Symbol.toStringTag, {
  value: "Module"
}));
const {
  mapStateToProps,
  mapDispatchToProps
} = compose(store$2);
class Container extends _0x14f011.Component {
  componentDidUpdate(param_1) {
    if (!param_1.slowHide && this.props.slowHide) {
      setTimeout(() => {
        this.props.updateState({
          show: false,
          slowHide: false
        });
      }, 1500);
    }
  }
  render() {
    if (!this.props.show && !this.props.slowHide) {
      return null;
    }
    return /* @__PURE__ */_0x14f011.createElement(Modal$1, {
      ...this.props
    });
  }
}
const Modal = _0x4dcc56(mapStateToProps, mapDispatchToProps)(Container);
const appName = "preferences";
const getDefaultHudPresets = () => ({
  "interactions.disablePrompts": false,
  "scenes.disableLargeText": false,
  "scenes.showOnPeek": false,
  "hud.status.health.enabled": true,
  "hud.status.health.hide": 95,
  "hud.status.armor.enabled": true,
  "hud.status.armor.hide": 95,
  "hud.status.food.enabled": true,
  "hud.status.food.hide": 95,
  "hud.status.water.enabled": true,
  "hud.status.water.hide": 95,
  "hud.status.hardcore.enabled": true,
  "hud.status.hardcore.hide": 95,
  "hud.status.oxygen.enabled": true,
  "hud.status.radio.channel": 2,
  "hud.vehicle.minimap.enabled": true,
  "hud.vehicle.minimap.default": false,
  "hud.vehicle.minimap.outline": true,
  "hud.vehicle.speedometer.fps": 64,
  "hud.compass.enabled": true,
  "hud.compass.fps": 16,
  "hud.compass.time.enabled": false,
  "hud.widescreensupport.enabled": false,
  "hud.compass.roadnames.enabled": true,
  "hud.blackbars.enabled": false,
  "hud.blackbars.size": "10",
  "hud.crosshair.enabled": false,
  "hud.golfballcam.enabled": false,
  "hud.bennys.legacymode": false,
  "hud.weather.allowlocal": true,
  "hud.minimap.style": "atlas",
  "hud.icons.large": true,
  "boosting.auction.soundsEnabled": false
});
const store = {
  key: appName,
  initialState: {
    "date.format": "YYYY-MM-DD hh:mm:ss A",
    "date.timezone": "America/New_York",
    "hud.presets": [getDefaultHudPresets()],
    "hud.presetSelected": 1,
    ...getDefaultHudPresets(),
    "phone.scale": 5,
    "phone.volume": 1,
    "radio.stereo.enabled": true,
    "radio.volume": 0.8,
    "radio.balance": 1,
    "radio.clicks.outgoing.enabled": true,
    "radio.clicks.incoming.enabled": true,
    "radio.clicks.volume": 0.8,
    "rtc.settings.device": "",
    "rtc.settings.phone.filter.enabled": true,
    "rtc.settings.phone.filter.gainNode": 1,
    "rtc.settings.phone.filter.pannerNode": 0.4,
    "rtc.settings.phone.filter.highpassBiquad": 500,
    "rtc.settings.phone.filter.lowpassBiquad": 8000,
    "rtc.settings.phone.filter.waveShaper": 5,
    "rtc.settings.radio.filter.enabled": true,
    "rtc.settings.radio.filter.gainNode": 1.5,
    "rtc.settings.radio.filter.pannerNode": -0.4,
    "rtc.settings.radio.filter.highpassBiquad": 1000,
    "rtc.settings.radio.filter.lowpassBiquad": 2000,
    "rtc.settings.radio.filter.waveShaper": 9,
    "rtc.system": {},
    "hud.weather.allowlocal": true,
    "wounds.character.enabled": false,
    "game.colorblind.enabled": false,
    "game.phone.characterControl": false,
    "game.evidencecase.autofill": true
  }
};
const store$1 = Object.freeze(Object.defineProperty({
  "__proto__": null,
  appName,
  default: store,
  getDefaultHudPresets
}, Symbol.toStringTag, {
  value: "Module"
}));
const changeHud = (param_1, _0x31e726 = false) => {
  const varData_102 = store$6.getState()[store.key];
  if (_0x31e726 && varData_102["hud.presets"].length < Number(param_1)) {
    return;
  }
  if (varData_102["hud.presets"].length < Number(param_1)) {
    const varData_103 = param_1_1 => {
      return {
        ...param_1_1,
        [store.key]: {
          ...param_1_1[store.key],
          ...getDefaultHudPresets(),
          "hud.presetSelected": param_1
        }
      };
    };
    store$6.dispatch({
      cb: varData_103,
      type: "np-ui-action"
    });
    nuiAction("np-ui:hudSetPreferences", getDefaultHudPresets());
    return;
  }
  const varData_104 = Number(param_1) - 1;
  const varData_105 = param_1_1 => {
    return {
      ...param_1_1,
      [store.key]: {
        ...param_1_1[store.key],
        ...varData_102["hud.presets"][varData_104],
        "hud.presetSelected": param_1
      }
    };
  };
  store$6.dispatch({
    cb: varData_105,
    type: "np-ui-action"
  });
  const varData_106 = varData_102["hud.presets"][varData_104];
  nuiAction("np-ui:hudSetPreferences", varData_106);
  nuiAction("np-ui:hudUpdateRadioSettings", {
    settings: {
      stereoAudio: varData_106["radio.stereo.enabled"],
      localClickOn: varData_106["radio.clicks.outgoing.enabled"],
      localClickOff: varData_106["radio.clicks.outgoing.enabled"],
      remoteClickOn: varData_106["radio.clicks.incoming.enabled"],
      remoteClickOff: varData_106["radio.clicks.incoming.enabled"],
      clickVolume: varData_106["radio.clicks.volume"],
      radioVolume: varData_106["radio.volume"],
      phoneVolume: varData_106["phone.volume"],
      radioBalance: varData_106["radio.balance"],
      phoneBalance: varData_106["phone.balance"],
      releaseDelay: 200
    }
  });
};
const savePreset = () => {
  const varData_107 = store$6.getState()[store.key];
  const varData_108 = varData_107["hud.presets"].map(param_1 => ({
    ...param_1
  }));
  const varData_109 = varData_107["hud.presetSelected"] - 1;
  if (!varData_108[varData_109]) {
    varData_108[varData_109] = getDefaultHudPresets();
  }
  Object.keys(getDefaultHudPresets()).forEach(param_1 => {
    varData_108[varData_109][param_1] = varData_107[param_1];
  });
  let varData_110 = {};
  const varData_111 = param_1 => {
    varData_110 = {
      ...param_1[store.key],
      "hud.presets": varData_108
    };
    return {
      ...param_1,
      [store.key]: varData_110
    };
  };
  store$6.dispatch({
    cb: varData_111,
    type: "np-ui-action"
  });
};
const balancedValue = param_1 => {
  const varData_112 = param_1 > 1 ? 2 - param_1 : 1;
  const varData_113 = param_1 > 1 ? 1 : param_1;
  return "Left " + Math.round(varData_112 * 100) + "% | Right " + Math.round(varData_113 * 100) + "%";
};
const savePreferences = param_1 => {
  let varData_114 = {};
  const varData_115 = param_1_1 => {
    varData_114 = {
      ...param_1_1[store.key],
      ...param_1
    };
    return {
      ...param_1_1,
      [store.key]: varData_114
    };
  };
  store$6.dispatch({
    cb: varData_115,
    type: "np-ui-action"
  });
  nuiAction("np-ui:setKVPValue", {
    key: "np-preferences",
    value: varData_114
  });
  nuiAction("np-ui:hudSetPreferences", varData_114);
  nuiAction("np-ui:hudUpdateRadioSettings", {
    settings: {
      stereoAudio: varData_114["radio.stereo.enabled"],
      localClickOn: varData_114["radio.clicks.outgoing.enabled"],
      localClickOff: varData_114["radio.clicks.outgoing.enabled"],
      remoteClickOn: varData_114["radio.clicks.incoming.enabled"],
      remoteClickOff: varData_114["radio.clicks.incoming.enabled"],
      clickVolume: varData_114["radio.clicks.volume"],
      radioVolume: varData_114["radio.volume"],
      phoneVolume: varData_114["phone.volume"],
      radioBalance: varData_114["radio.balance"],
      phoneBalance: varData_114["phone.balance"],
      releaseDelay: 200
    }
  });
  savePreset();
};
const PHONE_SETTINGS = {
  Appearance: {
    icon: "cog",
    items: [{
      label: "Phone Wallpaper (1:2.33 Ratio)",
      type: "text",
      key: "phone_wallpaper",
      default: null
    }]
  },
  Notifications: {
    icon: "bell",
    items: [{
      label: "SMS Notifications",
      type: "switch",
      key: "sms_notifications",
      default: true
    }, {
      label: "Email Notifications",
      type: "switch",
      key: "email_notifications",
      default: true
    }]
  },
  Sounds: {
    icon: "bell",
    items: [{
      label: "Volume",
      type: "slider",
      key: "phone_volume",
      default: 0.5,
      min: 0,
      max: 1
    }, {
      label: param_1 => "Balance (" + balancedValue(param_1) + ")",
      type: "slider",
      key: "phone_balance",
      default: 1,
      min: 0,
      max: 2
    }, {
      label: "SMS Notification Volume",
      type: "slider",
      key: "sms_notifications_volume",
      default: 15,
      step: 1,
      min: 0,
      max: 100
    }]
  }
};
function getPhoneSettings() {
  return JSON.parse(localStorage.getItem("phone-settings") ?? "{}");
}
function getSettingByKey(param_1) {
  for (const varData_116 of Object.values(PHONE_SETTINGS)) {
    const varData_117 = varData_116.items.find(param_1_1 => param_1_1.key === param_1);
    if (varData_117) {
      return varData_117;
    }
  }
  return null;
}
function getPhoneSetting(param_1) {
  const varData_118 = getPhoneSettings();
  const varData_119 = getSettingByKey(param_1);
  return varData_118[param_1] ?? varData_119?.default;
}
function setPhoneSetting(param_1, param_2) {
  const varData_120 = getPhoneSettings();
  varData_120[param_1] = param_2;
  localStorage.setItem("phone-settings", JSON.stringify(varData_120));
}
const BlackFrame = "" + new URL("black-7519ae8e.png", import.meta.url).href;
const GreenFrame = "" + new URL("green-7fcd8711.png", import.meta.url).href;
const BlueFrame = "" + new URL("blue-7e07a6e8.png", import.meta.url).href;
const OrangeFrame = "" + new URL("orange-7b75c2a1.png", import.meta.url).href;
const PinkFrame = "" + new URL("pink-dd66d58b.png", import.meta.url).href;
const PurpleFrame = "" + new URL("purple-2dc712db.png", import.meta.url).href;
const RedFrame = "" + new URL("red-2f2831e0.png", import.meta.url).href;
const YellowFrame = "" + new URL("yellow-bbf32c36.png", import.meta.url).href;
const WhiteFrame = "" + new URL("white-56d92ceb.png", import.meta.url).href;
const index$2 = "";
const PHONE_MODEL_TO_SHELL = {
  np_phone_black: BlackFrame,
  np_phone_green: GreenFrame,
  np_phone_blue: BlueFrame,
  np_phone_orange: OrangeFrame,
  np_phone_pink: PinkFrame,
  np_phone_purple: PurpleFrame,
  np_phone_red: RedFrame,
  np_phone_yellow: YellowFrame,
  np_phone_white: WhiteFrame
};
const PhoneShell = ({
  activeApp: _0x2a8873,
  showNotifications: _0x32ee95,
  children: _0xe44648
}) => {
  const {
    state: _0x40c3d4
  } = usePhoneState();
  const varData_121 = getPhoneSetting("phone_wallpaper");
  const varData_122 = "https://assets.nopixel.net/dev/images/phone/default_wallpaper.png";
  const varData_123 = varData_121?.length > 0 ? varData_121 : varData_122;
  const varData_124 = _0x3a388a("phone-wrap", {
    "phone-show": _0x40c3d4.show,
    "notification-show": _0x32ee95
  });
  return /* @__PURE__ */_0x14f011.createElement("div", {
    className: varData_124
  }, /* @__PURE__ */_0x14f011.createElement("img", {
    className: "phone-frame",
    src: PHONE_MODEL_TO_SHELL[_0x40c3d4.phoneModel]
  }), /* @__PURE__ */_0x14f011.createElement("div", {
    className: _0x3a388a(["phone-container", "app-" + _0x2a8873]),
    style: {
      background: "url(" + varData_123 + ")"
    }
  }, _0xe44648));
};
const index$1 = "";
const useOutsideClick = param_1 => {
  const varData_125 = _0x14f011.useRef(null);
  _0x14f011.useEffect(() => {
    const varData_126 = param_1_1 => {
      if (varData_125.current && !varData_125.current.contains(param_1_1.target)) {
        param_1(param_1_1);
      }
    };
    document.addEventListener("click", varData_126, true);
    return () => {
      document.removeEventListener("click", varData_126, true);
    };
  }, [varData_125, param_1]);
  return varData_125;
};
const container$4 = "_container_1b8t3_1";
const title$3 = "_title_1b8t3_18";
const inputs = "_inputs_1b8t3_25";
const input_container = "_input_container_1b8t3_30";
const error_message = "_error_message_1b8t3_74";
const actions$1 = "_actions_1b8t3_82";
const ctaSubmit$1 = "_ctaSubmit_1b8t3_97";
const ctaClose$1 = "_ctaClose_1b8t3_104";
const styles$5 = {
  container: container$4,
  title: title$3,
  inputs,
  input_container,
  error_message,
  actions: actions$1,
  ctaSubmit: ctaSubmit$1,
  ctaClose: ctaClose$1
};
const createInputModal = () => {
  let varData_127 = null;
  let varData_128 = null;
  function handleAction_2() {
    const [_0x5c560b, _0x2db98b] = _0xd6034a.useState({
      inputs: [],
      submitCb: async () => ({
        success: true
      })
    });
    const [_0x432028, _0x5808db] = _0xd6034a.useState({});
    const [_0x386c1a, _0x37d09f] = _0xd6034a.useState(false);
    const [_0x3367f7, _0x5a36ab] = _0xd6034a.useState(false);
    const [_0x228b52, _0x805ec8] = _0xd6034a.useState(false);
    const [_0x3a7c7b, _0x589639] = _0xd6034a.useState(null);
    const varData_129 = useOutsideClick(() => {
      varData_127?.();
    });
    varData_128 = param_1 => {
      if (_0x386c1a) {
        return;
      }
      _0x5a36ab(false);
      _0x37d09f(true);
      const varData_130 = param_1.inputs.reduce((param_1_1, param_2) => {
        param_1_1[param_2.key] = param_2.defaultValue ?? "";
        return param_1_1;
      }, {});
      _0x5808db(varData_130);
      _0x2db98b(param_1);
    };
    varData_127 = () => {
      _0x37d09f(false);
      _0x805ec8(false);
      _0x589639(null);
      _0x5808db({});
    };
    const varData_131 = async () => {
      _0x589639(null);
      _0x805ec8(true);
      const varData_132 = await _0x5c560b.submitCb(_0x432028);
      _0x805ec8(false);
      if (!varData_132.success) {
        _0x589639(varData_132.errorMsg ?? "An error occurred");
        return;
      }
      _0x5a36ab(true);
      setTimeout(() => {
        varData_127?.();
      }, 1500);
    };
    const varData_133 = (param_1, param_2) => {
      _0x5808db(param_1_1 => ({
        ...param_1_1,
        [param_1]: param_2
      }));
    };
    const varData_134 = _0xd6034a.useCallback(() => {
      if (_0x228b52) {
        return _0x5c560b.submitBtnInfo?.labelSubmitting ?? "Submitting...";
      } else {
        return _0x5c560b.submitBtnInfo?.label ?? "Submit";
      }
    }, [_0x228b52, _0x5c560b]);
    return /* @__PURE__ */_0x14f011.createElement(_0x3c1013, {
      in: _0x386c1a,
      timeout: 140,
      mountOnEnter: true,
      unmountOnExit: true,
      onEnter: (param_1, param_2) => {
        const varData_135 = param_1.animate([{
          transform: "translateY(100%)"
        }, {
          transform: "translateY(0%)"
        }], {
          duration: 150
        });
        varData_135.finished.then(param_2);
      },
      onExit: (param_1, param_2) => {
        const varData_136 = param_1.animate([{
          transform: "translateY(0%)"
        }, {
          transform: "translateY(100%)"
        }], {
          duration: 150
        });
        varData_136.finished.then(param_2);
      }
    }, /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$5.container,
      ref: varData_129
    }, /* @__PURE__ */_0x14f011.createElement("h1", {
      className: styles$5.title
    }, _0x5c560b.title ?? "What Happened?"), /* @__PURE__ */_0x14f011.createElement(Show, {
      when: !_0x228b52 && _0x3367f7
    }, /* @__PURE__ */_0x14f011.createElement(Checkmark, null)), /* @__PURE__ */_0x14f011.createElement(Show, {
      when: !_0x3367f7
    }, /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$5.inputs
    }, /* @__PURE__ */_0x14f011.createElement(For, {
      each: _0x5c560b.inputs
    }, param_1 => /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$5.input_container
    }, /* @__PURE__ */_0x14f011.createElement("label", null, param_1.label), /* @__PURE__ */_0x14f011.createElement(Show, {
      when: param_1.type === "text_area"
    }, /* @__PURE__ */_0x14f011.createElement("textarea", {
      placeholder: param_1.placeholder,
      value: _0x432028[param_1.key],
      onInput: param_1_1 => varData_133(param_1.key, param_1_1.currentTarget.value)
    })), /* @__PURE__ */_0x14f011.createElement(Show, {
      when: param_1.type === "select"
    }, /* @__PURE__ */_0x14f011.createElement("select", {
      value: _0x432028[param_1.key],
      onInput: param_1_1 => varData_133(param_1.key, param_1_1.currentTarget.value)
    }, /* @__PURE__ */_0x14f011.createElement(For, {
      each: param_1.options
    }, param_1_1 => /* @__PURE__ */_0x14f011.createElement("option", {
      value: param_1_1.id
    }, param_1_1.label)))), /* @__PURE__ */_0x14f011.createElement(Show, {
      when: param_1.type !== "text_area" && param_1.type !== "select"
    }, /* @__PURE__ */_0x14f011.createElement("input", {
      placeholder: param_1.placeholder,
      value: _0x432028[param_1.key],
      onInput: param_1_1 => varData_133(param_1.key, param_1_1.currentTarget.value)
    }))))), /* @__PURE__ */_0x14f011.createElement(Show, {
      when: _0x3a7c7b
    }, /* @__PURE__ */_0x14f011.createElement("p", {
      className: styles$5.error_message
    }, _0x3a7c7b)), /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$5.actions
    }, /* @__PURE__ */_0x14f011.createElement("button", {
      className: styles$5.ctaClose,
      onClick: () => varData_127?.(),
      disabled: _0x228b52
    }, "Close"), /* @__PURE__ */_0x14f011.createElement("button", {
      className: styles$5.ctaSubmit,
      onClick: varData_131,
      disabled: _0x228b52
    }, varData_134())))));
  }
  const varData_137 = param_1 => {
    if (!varData_128) {
      console.warn("InputModal is not mounted yet.");
      return;
    }
    varData_128(param_1);
  };
  const varData_138 = () => {
    if (!varData_127) {
      return;
    }
    varData_127();
  };
  return {
    InputModal: handleAction_2,
    openInputModal: varData_137,
    closeInputModal: varData_138
  };
};
const container$3 = "_container_8a7vx_1";
const title$2 = "_title_8a7vx_18";
const description = "_description_8a7vx_25";
const actions = "_actions_8a7vx_32";
const ctaSubmit = "_ctaSubmit_8a7vx_48";
const ctaClose = "_ctaClose_8a7vx_55";
const styles$4 = {
  container: container$3,
  title: title$2,
  description,
  actions,
  ctaSubmit,
  ctaClose
};
const createConfirmModal = () => {
  let varData_139 = null;
  let varData_140 = null;
  const varData_141 = () => {
    const [_0x3f5a7a, _0xd6bea0] = _0xd6034a.useState(false);
    const [_0x747e07, _0x5bed1f] = _0xd6034a.useState({});
    const varData_142 = _0xd6034a.useCallback(() => {
      _0xd6bea0(false);
    }, []);
    const varData_143 = _0xd6034a.useCallback(async () => {
      await _0x747e07.onConfirm();
      varData_142();
    }, [_0x747e07, varData_142]);
    varData_139 = param_1 => {
      _0x5bed1f(param_1);
      _0xd6bea0(true);
    };
    varData_140 = () => {
      _0xd6bea0(false);
    };
    const varData_144 = useOutsideClick(varData_142);
    return /* @__PURE__ */_0x14f011.createElement(_0x3c1013, {
      in: _0x3f5a7a,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 240,
      addEndListener: param_1 => {
        const varData_145 = varData_144.current;
        if (!varData_145) {
          return param_1();
        }
        const varData_146 = varData_145.animate(_0x3f5a7a ? [{
          transform: "translateY(100%)"
        }, {
          transform: "translateY(0%)"
        }] : [{
          transform: "translateY(0%)"
        }, {
          transform: "translateY(100%)"
        }], {
          duration: 250
        });
        varData_146.finished.then(param_1);
      }
    }, () => /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$4.container,
      ref: varData_144
    }, /* @__PURE__ */_0x14f011.createElement("h1", {
      className: styles$4.title
    }, "Confirmation"), /* @__PURE__ */_0x14f011.createElement("p", {
      className: styles$4.description
    }, _0x747e07.description), /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$4.actions
    }, /* @__PURE__ */_0x14f011.createElement("button", {
      className: styles$4.ctaClose,
      onClick: varData_142
    }, "Cancel"), /* @__PURE__ */_0x14f011.createElement("button", {
      className: styles$4.ctaSubmit,
      onClick: varData_143
    }, "Confirm"))));
  };
  const varData_147 = param_1 => {
    if (!varData_139) {
      console.warn("ConfirmModal is not mounted yet.");
      return;
    }
    varData_139(param_1);
  };
  const varData_148 = () => {
    varData_140?.();
  };
  return {
    openConfirmModal: varData_147,
    closeConfirmModal: varData_148,
    ConfirmModal: varData_141
  };
};
const container$2 = "_container_112rd_1";
const title$1 = "_title_112rd_18";
const option_list = "_option_list_112rd_25";
const option = "_option_112rd_25";
const styles$3 = {
  container: container$2,
  title: title$1,
  option_list,
  option
};
const createActionsModal = () => {
  let varData_149 = null;
  let varData_150 = null;
  const varData_151 = () => {
    const [_0x43b0c2, _0x548b9d] = _0xd6034a.useState(false);
    const [_0x1db275, _0x590d42] = _0xd6034a.useState("More options");
    const [_0x512625, _0x6536aa] = _0xd6034a.useState([]);
    const varData_152 = _0xd6034a.useCallback(() => {
      _0x548b9d(false);
    }, []);
    const varData_153 = _0xd6034a.useCallback(async param_1 => {
      await param_1.onSelect();
      varData_152();
    }, [varData_152]);
    varData_149 = param_1 => {
      _0x548b9d(true);
      _0x590d42(param_1.title ?? "More options");
      _0x6536aa(param_1.actions);
    };
    varData_150 = () => {
      _0x548b9d(false);
    };
    const varData_154 = useOutsideClick(varData_152);
    return /* @__PURE__ */_0x14f011.createElement(_0x3c1013, {
      in: _0x43b0c2,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 240,
      addEndListener: param_1 => {
        if (!varData_154) {
          return param_1();
        }
        const varData_155 = varData_154.current;
        if (!varData_155) {
          return param_1();
        }
        const varData_156 = varData_155.animate(_0x43b0c2 ? [{
          transform: "translateY(100%)"
        }, {
          transform: "translateY(0%)"
        }] : [{
          transform: "translateY(0%)"
        }, {
          transform: "translateY(100%)"
        }], {
          duration: 250
        });
        varData_156.finished.then(param_1);
      }
    }, () => /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$3.container,
      ref: varData_154
    }, /* @__PURE__ */_0x14f011.createElement("h1", {
      className: styles$3.title
    }, _0x1db275), _0x512625.map(param_1 => /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$3.option_list,
      key: param_1.label
    }, /* @__PURE__ */_0x14f011.createElement("button", {
      className: styles$3.option,
      onClick: () => varData_153(param_1)
    }, /* @__PURE__ */_0x14f011.createElement(Icon, {
      icon: param_1.icon,
      className: styles$3.icon
    }), param_1.label)))));
  };
  const varData_157 = param_1 => {
    if (!varData_149) {
      console.warn("ActionModal is not mounted yet.");
      return;
    }
    varData_149(param_1);
  };
  const varData_158 = () => {
    varData_150?.();
  };
  return {
    openActionsModal: varData_157,
    closeActionModal: varData_158,
    ActionModal: varData_151
  };
};
const DB_VERSION = 1;
const DB_NAME = "PhoneImagesDB";
const STORE_NAME = "phone_images";
class PhoneImageDB {
  db = null;
  async init() {
    return new Promise((param_1, param_2) => {
      const varData_159 = indexedDB.open(DB_NAME, DB_VERSION);
      varData_159.onerror = () => param_2(varData_159.error);
      varData_159.onsuccess = () => {
        this.db = varData_159.result;
        param_1();
      };
      varData_159.onupgradeneeded = param_1_1 => {
        const varData_160 = param_1_1.target.result;
        if (!varData_160.objectStoreNames.contains(STORE_NAME)) {
          const varData_161 = varData_160.createObjectStore(STORE_NAME, {
            keyPath: "id"
          });
          varData_161.createIndex("characterId", "characterId", {
            unique: false
          });
          varData_161.createIndex("source", "source", {
            unique: false
          });
          varData_161.createIndex("timestamp", "timestamp", {
            unique: false
          });
          varData_161.createIndex("characterSource", ["characterId", "source"], {
            unique: false
          });
        }
      };
    });
  }
  async ensureDB() {
    if (!this.db) {
      await this.init();
    }
    return this.db;
  }
  async add(param_1) {
    try {
      const varData_162 = await this.ensureDB();
      return new Promise((param_1_1, param_2) => {
        const varData_163 = varData_162.transaction(STORE_NAME, "readwrite");
        const varData_164 = varData_163.objectStore(STORE_NAME);
        const varData_165 = varData_164.add(param_1);
        varData_165.onsuccess = () => param_1_1(true);
        varData_165.onerror = () => param_2(varData_165.error);
      });
    } catch (err) {
      console.error("Failed to add image:", err);
      return false;
    }
  }
  async delete(param_1) {
    try {
      const varData_166 = await this.ensureDB();
      return new Promise((param_1_1, param_2) => {
        const varData_167 = varData_166.transaction(STORE_NAME, "readwrite");
        const varData_168 = varData_167.objectStore(STORE_NAME);
        const varData_169 = varData_168.delete(param_1);
        varData_169.onsuccess = () => param_1_1(true);
        varData_169.onerror = () => param_2(varData_169.error);
      });
    } catch (err) {
      console.error("Failed to delete image:", err);
      return false;
    }
  }
  async getByCharacter(param_1, param_2) {
    try {
      const varData_170 = await this.ensureDB();
      return new Promise((param_1_1, param_2_1) => {
        const varData_171 = varData_170.transaction(STORE_NAME, "readonly");
        const varData_172 = varData_171.objectStore(STORE_NAME);
        let varData_173;
        if (param_2) {
          const varData_174 = varData_172.index("characterSource");
          varData_173 = varData_174.getAll([param_1, param_2]);
        } else {
          const varData_175 = varData_172.index("characterId");
          varData_173 = varData_175.getAll(param_1);
        }
        varData_173.onsuccess = () => param_1_1(varData_173.result || []);
        varData_173.onerror = () => param_2_1(varData_173.error);
      });
    } catch (err) {
      console.error("Failed to get images:", err);
      return [];
    }
  }
  async deleteOldest(param_1, param_2, param_3) {
    try {
      const varData_176 = await this.getByCharacter(param_1, param_2);
      const varData_177 = varData_176.sort((param_1_1, param_2_1) => param_1_1.timestamp - param_2_1.timestamp);
      const varData_178 = varData_177.slice(0, Math.max(0, varData_176.length - param_3));
      const varData_179 = await this.ensureDB();
      const varData_180 = varData_179.transaction(STORE_NAME, "readwrite");
      const varData_181 = varData_180.objectStore(STORE_NAME);
      for (const varData_182 of varData_178) {
        varData_181.delete(varData_182.id);
      }
      return new Promise((param_1_1, param_2_1) => {
        varData_180.oncomplete = () => param_1_1();
        varData_180.onerror = () => param_2_1(varData_180.error);
      });
    } catch (err) {
      console.error("Failed to delete oldest images:", err);
    }
  }
  async exists(param_1, param_2, param_3) {
    try {
      const varData_183 = await this.getByCharacter(param_1, param_2);
      return varData_183.some(param_1_1 => param_1_1.image === param_3);
    } catch (err) {
      console.error("Failed to check image existence:", err);
      return false;
    }
  }
}
const phoneImageDB = new PhoneImageDB();
async function StorePhoneImage(param_1, param_2) {
  const varData_184 = GetCharacter();
  if (!varData_184) {
    return false;
  }
  try {
    if (param_2 === "recent") {
      const varData_185 = await phoneImageDB.exists(varData_184.id, "recent", param_1);
      if (varData_185) {
        return false;
      }
    }
    const varData_186 = _0x20d433.getUUID();
    const timestamp = Date.now();
    const varData_187 = await phoneImageDB.add({
      id: varData_186,
      characterId: varData_184.id,
      image: param_1,
      source: param_2,
      timestamp: timestamp
    });
    if (varData_187 && param_2 === "recent") {
      await phoneImageDB.deleteOldest(varData_184.id, "recent", 10);
    }
    return varData_187;
  } catch (err) {
    console.error("Failed to store phone image:", err);
    return false;
  }
}
async function DeletePhoneImage(param_1) {
  const varData_188 = GetCharacter();
  if (!varData_188) {
    return false;
  }
  try {
    return await phoneImageDB.delete(param_1);
  } catch (err) {
    console.error("Failed to delete phone image:", err);
    return false;
  }
}
async function GetPhoneImages(param_1) {
  const varData_189 = GetCharacter();
  if (!varData_189) {
    return [];
  }
  try {
    return await phoneImageDB.getByCharacter(varData_189.id, param_1);
  } catch (err) {
    console.error("Failed to get phone images:", err);
    return [];
  }
}
const image_selector_bg = "_image_selector_bg_1hmcy_1";
const image_selector_modal = "_image_selector_modal_1hmcy_10";
const image_selector_header = "_image_selector_header_1hmcy_29";
const title = "_title_1hmcy_35";
const image_categories = "_image_categories_1hmcy_42";
const category_button = "_category_button_1hmcy_49";
const image_selector_grid = "_image_selector_grid_1hmcy_58";
const image_thumbnail = "_image_thumbnail_1hmcy_66";
const checkmark_container = "_checkmark_container_1hmcy_77";
const select_cta = "_select_cta_1hmcy_92";
const empty_container = "_empty_container_1hmcy_114";
const empty_icon = "_empty_icon_1hmcy_129";
const styles$2 = {
  image_selector_bg,
  image_selector_modal,
  image_selector_header,
  title,
  image_categories,
  category_button,
  image_selector_grid,
  image_thumbnail,
  checkmark_container,
  select_cta,
  empty_container,
  empty_icon
};
const createImageSelectorModal = () => {
  let varData_190 = null;
  let varData_191 = null;
  const varData_192 = () => {
    const [_0x318316, _0x2b853e] = _0x14f011.useState(false);
    const [_0x5669a6, _0x1da51c] = _0x14f011.useState({});
    const [_0x63d5a8, _0x24f8f0] = _0x14f011.useState([]);
    const [_0x1050f3, _0x3c3c6a] = _0x14f011.useState([]);
    const [_0x5db6f9, _0x225d45] = _0x14f011.useState("recent");
    const varData_193 = param_1 => {
      const varData_194 = _0x1050f3.findIndex(param_1_1 => param_1_1.id === param_1.id);
      if (varData_194 !== -1) {
        _0x3c3c6a(_0x1050f3.filter(param_1_1 => param_1_1.id !== param_1.id));
      } else {
        _0x3c3c6a([..._0x1050f3, param_1]);
      }
    };
    const varData_195 = async () => {
      const varData_196 = _0x1050f3.map(param_1 => param_1.image);
      await _0x5669a6.onSelect(varData_196);
      varData_200();
    };
    _0x14f011.useEffect(() => {
      (async () => {
        if (_0x318316) {
          const varData_197 = await GetPhoneImages();
          _0x24f8f0(varData_197.filter(param_1 => param_1.source === _0x5db6f9));
        }
      })();
    }, [_0x318316, _0x5db6f9]);
    varData_190 = param_1 => {
      _0x1da51c(param_1);
      _0x2b853e(true);
    };
    varData_191 = () => {
      _0x2b853e(false);
      _0x3c3c6a([]);
      _0x24f8f0([]);
      _0x225d45("recent");
    };
    const varData_198 = useOutsideClick(varData_200);
    return /* @__PURE__ */_0x14f011.createElement(Show, {
      when: _0x318316
    }, /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
      className: styles$2.image_selector_bg,
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.25
      }
    }, /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.25
      },
      className: styles$2.image_selector_modal,
      ref: varData_198
    }, /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$2.image_selector_header
    }, /* @__PURE__ */_0x14f011.createElement("p", {
      className: styles$2.title
    }, "Select Image"), /* @__PURE__ */_0x14f011.createElement("select", {
      className: styles$2.image_categories,
      onChange: param_1 => _0x225d45(param_1.target.value)
    }, /* @__PURE__ */_0x14f011.createElement("option", {
      className: styles$2.category_button,
      value: "recent"
    }, "Recent"), /* @__PURE__ */_0x14f011.createElement("option", {
      className: styles$2.category_button,
      value: "gallery"
    }, "Gallery"))), /* @__PURE__ */_0x14f011.createElement(Show, {
      when: _0x63d5a8.length > 0
    }, /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
      className: styles$2.image_selector_grid,
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.3
      }
    }, /* @__PURE__ */_0x14f011.createElement(_0x45c16d, {
      mode: "popLayout"
    }, /* @__PURE__ */_0x14f011.createElement(For, {
      each: _0x63d5a8
    }, (param_1, param_2) => /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
      className: styles$2.image_thumbnail,
      initial: {
        opacity: 0,
        scale: 0.8
      },
      animate: {
        opacity: 1,
        scale: 1
      },
      exit: {
        opacity: 0,
        scale: 0.8
      },
      transition: {
        duration: 0.2,
        delay: param_2 * 0.03
      },
      whileHover: {
        scale: 1.05
      },
      whileTap: {
        scale: 0.95
      },
      key: param_1.id
    }, /* @__PURE__ */_0x14f011.createElement(_0x45c16d, null, /* @__PURE__ */_0x14f011.createElement(Show, {
      when: _0x1050f3.findIndex(param_1_1 => param_1_1.id === param_1.id) !== -1
    }, /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
      className: styles$2.checkmark_container,
      initial: {
        scale: 0,
        rotate: -180
      },
      animate: {
        scale: 1,
        rotate: 0
      },
      exit: {
        scale: 0,
        rotate: 180
      },
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }, /* @__PURE__ */_0x14f011.createElement(_0x44c66e.span, {
      className: styles$2.checkmark,
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        delay: 0.1
      }
    }, "✓")))), /* @__PURE__ */_0x14f011.createElement(_0x44c66e.img, {
      src: param_1.image,
      onClick: () => varData_193(param_1),
      layoutId: "image-" + param_1.id
    })))))), /* @__PURE__ */_0x14f011.createElement(Show, {
      when: _0x63d5a8.length === 0
    }, /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$2.empty_container
    }, /* @__PURE__ */_0x14f011.createElement("div", {
      className: styles$2.empty_text
    }, "No images available."))), /* @__PURE__ */_0x14f011.createElement("button", {
      className: styles$2.select_cta,
      disabled: _0x1050f3.length === 0,
      onClick: varData_195
    }, "Select Images"))));
  };
  const varData_199 = param_1 => {
    if (!varData_190) {
      console.warn("ImageSelectorModal is not mounted yet.");
      return;
    }
    varData_190(param_1);
  };
  const varData_200 = () => {
    varData_191?.();
  };
  return {
    openImageSelectorModal: varData_199,
    closeImageSelectorModal: varData_200,
    ImageSelectorModal: varData_192
  };
};
const modal_container_bg$1 = "_modal_container_bg_f61ws_1";
const container$1 = "_container_f61ws_13";
const styles$1 = {
  modal_container_bg: modal_container_bg$1,
  container: container$1
};
const createGifSelectorModal = () => {
  let varData_201 = null;
  let varData_202 = null;
  const varData_203 = () => {
    const [_0x770e57, _0x1d1680] = _0x14f011.useState(false);
    const [_0x51da17, _0x39f96f] = _0x14f011.useState({});
    const varData_204 = _0x14f011.useCallback(() => {
      _0x1d1680(false);
    }, []);
    varData_201 = param_1 => {
      _0x39f96f(param_1);
      _0x1d1680(true);
    };
    varData_202 = () => {
      _0x1d1680(false);
    };
    const varData_205 = useOutsideClick(varData_204);
    return /* @__PURE__ */_0x14f011.createElement(Show, {
      when: _0x770e57
    }, /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
      className: styles$1.modal_container_bg,
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.25
      }
    }, /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.25
      },
      className: styles$1.container,
      ref: varData_205
    }, /* @__PURE__ */_0x14f011.createElement(_0x291434, {
      height: "100%",
      width: "100%",
      tenorApiKey: "AIzaSyBwcUtpuR-WIDFlSpUfuSVE8tLO1stkXxE",
      theme: G.DARK,
      onGifClick: param_1 => {
        _0x51da17.onSelect(param_1.url);
        varData_204();
      }
    }))));
  };
  const varData_206 = param_1 => {
    if (!varData_201) {
      console.warn("GifSelectorModal is not mounted yet.");
      return;
    }
    varData_201(param_1);
  };
  const varData_207 = () => {
    varData_202?.();
  };
  return {
    openGifSelectorModal: varData_206,
    closeGifSelectorModal: varData_207,
    GifSelectorModal: varData_203
  };
};
const modal_container_bg = "_modal_container_bg_1is8t_1";
const container = "_container_1is8t_13";
const styles = {
  modal_container_bg,
  container
};
const createEmojiSelectorModal = () => {
  let varData_208 = null;
  let varData_209 = null;
  const varData_210 = () => {
    const [_0x18672, _0x571e25] = _0x14f011.useState(false);
    const [_0x2dd78c, _0x4fe7f9] = _0x14f011.useState({});
    const varData_211 = _0x14f011.useCallback(() => {
      _0x571e25(false);
    }, []);
    varData_208 = param_1 => {
      _0x4fe7f9(param_1);
      _0x571e25(true);
    };
    varData_209 = () => {
      _0x571e25(false);
    };
    const varData_212 = useOutsideClick(varData_211);
    return /* @__PURE__ */_0x14f011.createElement(Show, {
      when: _0x18672
    }, /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
      className: styles.modal_container_bg,
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.25
      }
    }, /* @__PURE__ */_0x14f011.createElement(_0x44c66e.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.25
      },
      className: styles.container,
      ref: varData_212
    }, /* @__PURE__ */_0x14f011.createElement(_0x184b9d.Root, {
      onEmojiSelect: ({
        emoji: _0x32e3d0
      }) => {
        _0x2dd78c.onSelect(_0x32e3d0);
      }
    }, /* @__PURE__ */_0x14f011.createElement(_0x184b9d.Search, null), /* @__PURE__ */_0x14f011.createElement(_0x184b9d.Viewport, null, /* @__PURE__ */_0x14f011.createElement(_0x184b9d.Loading, null, "Loading…"), /* @__PURE__ */_0x14f011.createElement(_0x184b9d.Empty, null, "No emoji found."), /* @__PURE__ */_0x14f011.createElement(_0x184b9d.List, null))))));
  };
  const varData_213 = param_1 => {
    if (!varData_208) {
      console.warn("EmojiSelectorModal is not mounted yet.");
      return;
    }
    varData_208(param_1);
  };
  const varData_214 = () => {
    varData_209?.();
  };
  return {
    openEmojiSelectorModal: varData_213,
    closeEmojiSelectorModal: varData_214,
    EmojiSelectorModal: varData_210
  };
};
const {
  InputModal,
  openInputModal
} = createInputModal();
const {
  ConfirmModal,
  openConfirmModal
} = createConfirmModal();
const {
  ActionModal,
  openActionsModal
} = createActionsModal();
const {
  ImageSelectorModal,
  openImageSelectorModal
} = createImageSelectorModal();
const {
  GifSelectorModal,
  openGifSelectorModal
} = createGifSelectorModal();
const {
  EmojiSelectorModal,
  openEmojiSelectorModal
} = createEmojiSelectorModal();
const PhoneContainer = param_1 => {
  const {
    state: _0x14b465
  } = usePhoneState();
  _0xd6034a.useEffect(() => {
    const varData_215 = document.documentElement;
    varData_215?.style.setProperty("--phone-scale", "" + preference("phone.scale"));
  }, []);
  const varData_216 = _0x14f011.useMemo(() => {
    return param_1.phoneConfig.find(param_1_1 => param_1_1.name === _0x14b465.activeApp);
  }, [param_1.phoneConfig, _0x14b465.activeApp]);
  return /* @__PURE__ */_0x14f011.createElement(PhoneShell, {
    activeApp: varData_216?.name,
    showNotifications: Object.keys(_0x14b465.notifications).length > 0
  }, /* @__PURE__ */_0x14f011.createElement(InputModal, null), /* @__PURE__ */_0x14f011.createElement(ConfirmModal, null), /* @__PURE__ */_0x14f011.createElement(ActionModal, null), /* @__PURE__ */_0x14f011.createElement(ImageSelectorModal, null), /* @__PURE__ */_0x14f011.createElement(GifSelectorModal, null), /* @__PURE__ */_0x14f011.createElement(EmojiSelectorModal, null), /* @__PURE__ */_0x14f011.createElement(Modal, null), /* @__PURE__ */_0x14f011.createElement(Notifications, null), /* @__PURE__ */_0x14f011.createElement(Container$1, null), varData_216 && varData_216.render(), /* @__PURE__ */_0x14f011.createElement(BottomBar, null));
};
function phoneNumber(_0x3b510d = "") {
  let varData_217 = "n/a";
  try {
    const varData_218 = _0x3b510d.toString().replace("+1", "");
    const varData_219 = [];
    if (varData_218.length > 0) {
      varData_219.push("(" + varData_218.substring(0, 3) + ")");
    }
    if (varData_218.length >= 4) {
      varData_219.push(" " + varData_218.substring(3, 6));
    }
    if (varData_218.length >= 7) {
      varData_219.push("-" + varData_218.substring(6, 10));
    }
    varData_217 = varData_219.join("");
  } catch (err) {}
  return varData_217;
}
function money(param_1) {
  const varData_220 = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format;
  let varData_221 = "n/a";
  try {
    varData_221 = varData_220(param_1);
  } catch (err) {}
  return varData_221;
}
const CONTACTS_MOCKUP_DATA = [{
  id: "",
  name: "Billy Mayne",
  number: "1234567442",
  avatarURL: null
}, {
  id: "",
  name: "Sky Ross",
  number: "5558538472",
  avatarURL: null
}, {
  id: "",
  name: "Alexander",
  number: "5558538473",
  avatarURL: null
}, {
  id: "",
  name: "MkaIsTheG0at",
  number: "5558538474",
  avatarURL: null
}, {
  id: "",
  name: "Nns Is Dumb",
  number: "5558538475",
  avatarURL: null
}, {
  id: "",
  name: "Nikiea",
  number: "5558538476",
  avatarURL: null
}, {
  id: "",
  name: "Mitchel",
  number: "5558538477",
  avatarURL: null
}, {
  id: "",
  name: "Shane Kerr",
  number: "5558538478",
  avatarURL: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao02.png"
}];
let contactsCache = [];
const Contacts = _0x20d433.cacheableMap(async (param_1, param_2) => {
  if (isDebug()) {
    return [true, CONTACTS_MOCKUP_DATA];
  }
  const [_0x42e96a, _0x224948] = await _0x4908f0.Game.get("/phone/" + param_2 + "/contacts", undefined, {
    mockupData: []
  });
  if (!_0x42e96a) {
    _0x5ea854.error("Failed to get contacts", _0x224948.message);
    return [false, []];
  }
  const varData_222 = _0x224948.data.map(param_1_1 => ({
    id: param_1_1.id,
    name: param_1_1.name,
    avatarURL: param_1_1.avatarURL,
    number: "" + param_1_1.areaCode + param_1_1.number
  }));
  return [true, varData_222];
}, {
  timeToLive: 720000
});
function GetContactByNumber(param_1) {
  const varData_223 = GetSimCard();
  if (!varData_223) {
    return null;
  }
  const varData_224 = contactsCache.find(param_1_1 => param_1_1.number === param_1);
  return varData_224 ?? null;
}
async function GetContacts(param_1) {
  const varData_225 = GetSimCard();
  if (!param_1 && !varData_225) {
    return [];
  }
  const varData_226 = (await Contacts.get(param_1 ?? varData_225?.numberId)) ?? [];
  contactsCache = varData_226;
  return varData_226;
}
async function RemoveContact(param_1) {
  const varData_227 = GetSimCard();
  if (!varData_227) {
    return [false, "SIM Card not found"];
  }
  const [_0x3cde07, _0x57da90] = await _0x4908f0.Game.delete("/phone/" + varData_227.numberId + "/contacts/" + param_1);
  if (!_0x3cde07) {
    _0x5ea854.error("Failed to delete contact", _0x57da90.message);
    return [false, "Failed to delete contact"];
  }
  Contacts.reset(varData_227.numberId);
  contactsCache = [...contactsCache.filter(param_1_1 => param_1_1.id !== param_1)];
  return [true, "Contact removed"];
}
async function AddContact(param_1) {
  const varData_228 = GetSimCard();
  const varData_229 = param_1_1 => {
    const varData_230 = param_1_1.match(/\d/g)?.join("");
    if (varData_230?.length === 10 && !isNaN(Number(varData_230))) {
      return varData_230;
    }
    return "";
  };
  const varData_231 = varData_229(param_1.number);
  if (!varData_228) {
    return [false, "SIM Card not found"];
  }
  if (varData_231 === "") {
    return [false, "Invalid phone number"];
  }
  const varData_232 = {
    name: param_1.name,
    areaCode: varData_231.slice(0, 3),
    number: varData_231.slice(3),
    blocked: param_1.blocked
  };
  const [_0x2ac7f7, _0x3c5b74] = await _0x4908f0.Game.post("/phone/" + varData_228.numberId + "/contacts", varData_232);
  if (!_0x2ac7f7 || _0x3c5b74.status !== 201) {
    _0x5ea854.error("Failed to add contact", _0x3c5b74);
    return [false, "Failed to add contact"];
  }
  const varData_233 = {
    id: _0x3c5b74.data.id,
    avatarURL: null,
    name: _0x3c5b74.data.name,
    number: "" + _0x3c5b74.data.areaCode + _0x3c5b74.data.number
  };
  Contacts.reset(varData_228.numberId);
  console.log("contactsCache", contactsCache);
  contactsCache.push(varData_233);
  return [true, varData_233];
}
async function UpdateContact(param_1, param_2, param_3) {
  const varData_234 = GetSimCard();
  if (!varData_234) {
    return [false, "SIM Card not found"];
  }
  const varData_235 = {
    name: param_2,
    avatarURL: param_3
  };
  const [_0x197ad8] = await _0x4908f0.Game.patch("/phone/" + varData_234.numberId + "/contacts/" + param_1, varData_235);
  if (!_0x197ad8) {
    return [false, "Failed to update contact, try again"];
  }
  Contacts.reset(varData_234.numberId);
  const varData_236 = contactsCache.find(param_1_1 => param_1_1.id === param_1);
  if (varData_236) {
    const varData_237 = [...contactsCache.filter(param_1_1 => param_1_1.id !== param_1), {
      ...varData_236,
      ...varData_235
    }];
    contactsCache = varData_237;
  }
  return [true, "Contact updated!"];
}
function OpenAddContactModal(param_1) {
  return new Promise(param_1_1 => {
    const varData_238 = async param_1_2 => {
      let varData_239 = "";
      let isDisabled = false;
      if (!param_1_2.name || param_1_2.name.length <= 2) {
        varData_239 = "Invalid contact name";
      }
      if (!param_1_2.number || param_1_2.number.length < 10) {
        varData_239 = "Invalid contact number";
      }
      const [_0x403f55, _0x1a4fe8] = await AddContact({
        name: param_1_2.name,
        number: param_1_2.number
      });
      isDisabled = _0x403f55;
      if (!isDisabled && typeof _0x1a4fe8 === "string") {
        varData_239 = _0x1a4fe8;
      }
      if (typeof _0x1a4fe8 !== "string") {
        param_1_1(_0x1a4fe8);
      }
      param_1_1(null);
      return {
        success: isDisabled,
        message: varData_239
      };
    };
    openInputModal({
      inputs: [{
        key: "name",
        label: "Name",
        type: "text",
        placeholder: "Enter name"
      }, {
        key: "number",
        label: "Number",
        type: "text",
        placeholder: "Enter phone number",
        defaultValue: param_1
      }],
      submitCb: async param_1_2 => {
        const {
          success: _0x12a1b7,
          message: _0x4b641f
        } = await varData_238(param_1_2);
        if (!_0x12a1b7) {
          return {
            success: _0x12a1b7,
            errorMsg: _0x4b641f
          };
        }
        return {
          success: true
        };
      },
      title: "Add Contact"
    });
  });
}
async function OpenMessageModal(param_1) {
  const varData_240 = GetContactByNumber(param_1);
  openInputModal({
    title: "Message " + (varData_240?.name ?? phoneNumber(param_1)),
    inputs: [{
      key: "message",
      label: "Message",
      type: "text_area",
      placeholder: "Enter message"
    }],
    submitCb: async param_1_1 => {
      if (param_1_1.message.length <= 0) {
        return {
          success: false,
          errorMsg: "Message cannot be empty"
        };
      }
      const [_0x2f60db, _0x5b15f7] = await sendMessage("text", param_1, param_1_1.message);
      if (!_0x2f60db) {
        return {
          success: false,
          errorMsg: _0x5b15f7
        };
      }
      return {
        success: true
      };
    }
  });
}
function OpenEditContactModal(param_1) {
  return new Promise(param_1_1 => {
    const varData_241 = async param_1_2 => {
      let varData_242 = "";
      let isDisabled = false;
      if (!param_1_2.name) {
        varData_242 = "Invalid contact name";
      }
      const [_0x257b55, _0x14d4c5] = await UpdateContact(param_1.id, param_1_2.name, param_1_2.avatar);
      isDisabled = _0x257b55;
      varData_242 = _0x14d4c5;
      if (isDisabled) {
        triggerNotification({
          appName: "contacts",
          text: varData_242,
          title: "Contacts",
          timeout: 5000
        });
      }
      if (isDisabled) {
        const varData_243 = {
          ...param_1,
          name: param_1_2.name,
          avatarURL: param_1_2.avatar
        };
        param_1_1(varData_243);
      }
      return [isDisabled, varData_242];
    };
    openInputModal({
      title: "Edit Contact",
      submitBtnInfo: {
        label: "Save",
        labelSubmitting: "Saving.."
      },
      inputs: [{
        key: "name",
        label: "Name",
        type: "text",
        placeholder: "Enter name",
        defaultValue: param_1.name
      }, {
        key: "avatar",
        label: "Avatar",
        type: "text",
        placeholder: "Enter avatar",
        defaultValue: param_1.avatarURL ?? ""
      }],
      submitCb: async param_1_2 => {
        const [_0x5b70a9, _0x5b98a4] = await varData_241(param_1_2);
        if (!_0x5b70a9) {
          return {
            success: false,
            errorMsg: _0x5b98a4
          };
        }
        return {
          success: true
        };
      }
    });
  });
}
function OpenNewMessageModal() {
  openInputModal({
    title: "New Message",
    inputs: [{
      key: "number",
      label: "Number",
      type: "text",
      placeholder: "Enter phone number",
      defaultValue: ""
    }, {
      key: "message",
      label: "Message",
      type: "text_area",
      placeholder: "Enter message"
    }],
    submitCb: async param_1 => {
      if (param_1.message.length <= 0) {
        return {
          success: false,
          errorMsg: "Message cannot be empty"
        };
      }
      if (param_1.number.length < 10) {
        return {
          success: false,
          errorMsg: "Invalid phone number"
        };
      }
      const [_0x2f24aa, _0x476a93] = await sendMessage("text", param_1.number, param_1.message);
      if (!_0x2f24aa) {
        return {
          success: false,
          errorMsg: _0x476a93
        };
      }
      return {
        success: true
      };
    }
  });
}
function IsNumberFavorited(param_1) {
  const varData_244 = GetCharacter();
  if (!varData_244) {
    return false;
  }
  const varData_245 = JSON.parse(localStorage.getItem("contacts_favorites") ?? "{}");
  const varData_246 = varData_245[varData_244.id] ?? [];
  if (varData_246.includes(param_1)) {
    return true;
  }
  return false;
}
function AddNumberToFavorites(param_1) {
  const varData_247 = GetCharacter();
  if (!varData_247) {
    return;
  }
  const varData_248 = JSON.parse(localStorage.getItem("contacts_favorites") ?? "{}");
  const varData_249 = varData_248[varData_247.id] ?? [];
  if (!varData_249.includes(param_1)) {
    varData_249.push(param_1);
    varData_248[varData_247.id] = varData_249;
  }
  const varData_250 = GetContactByNumber(param_1);
  if (varData_250) {
    triggerNotification({
      appName: "contacts",
      text: "Added " + (varData_250.name ?? phoneNumber(varData_250.number)) + " to favorites",
      title: "Contacts",
      timeout: 5000
    });
  }
  localStorage.setItem("contacts_favorites", JSON.stringify(varData_248));
}
function RemoveNumberFromFavorites(param_1) {
  const varData_251 = GetCharacter();
  if (!varData_251) {
    return;
  }
  const varData_252 = JSON.parse(localStorage.getItem("contacts_favorites") ?? "{}");
  const varData_253 = varData_252[varData_251.id] ?? [];
  const varData_254 = varData_253.indexOf(phoneNumber);
  if (varData_254 > -1) {
    varData_253.splice(varData_254, 1);
    varData_252[varData_251.id] = varData_253;
  }
  const varData_255 = GetContactByNumber(param_1);
  if (varData_255) {
    triggerNotification({
      appName: "contacts",
      text: "Removed " + (varData_255.name ?? phoneNumber(varData_255.number)) + " from favorites",
      title: "Contacts",
      timeout: 5000
    });
  }
  localStorage.setItem("contacts_favorites", JSON.stringify(varData_252));
}
const baseApp = "";
const SDK = new _0x51dc9a({
  codename: "np-ui",
  version: "4.0.0"
});
const lastTenEvents = [];
let printEvents = false;
const BaseApp = () => {
  const {
    state: _0x39e01f,
    setState: _0x34f9dc
  } = useGlobalState();
  const [_0x28bdf4, _0xa431ed] = useUIState("main");
  const [_0x4c089e, _0x4f3518] = _0xd6034a.useState([]);
  const varData_256 = _0xd6034a.useCallback(async () => {
    const varData_257 = await getAppsConfig();
    _0x4f3518(varData_257);
  }, []);
  const varData_258 = param_1 => {
    if (!param_1 || !param_1.data || param_1.data.source !== "np-nui") {
      return;
    }
    lastTenEvents.unshift(JSON.stringify(param_1.data));
    while (lastTenEvents.length > 10) {
      lastTenEvents.pop();
    }
    if (param_1.data.app === "phone" && typeof param_1.data.event === "string") {
      const varData_259 = param_1.data.data ?? {};
      const varData_260 = param_1.data.event;
      executePhoneEvent(varData_260, varData_259);
    }
    if (printEvents) {
      console.log(Math.floor(Date.now() / 1000), JSON.stringify(param_1.data));
    }
    if (param_1.data.app === "main" && param_1.data.event === "sync-character") {
      _0x34f9dc(param_1_1 => {
        if (param_1.data.data.character !== undefined) {
          param_1_1.character = {
            ...param_1.data.data.character
          };
        }
      });
    }
    if (param_1.data.app === "main" && param_1.data.event === "sync-simcard") {
      _0x34f9dc("phoneSimCard", param_1.data.data.simcard ?? null);
      if (param_1.data.data.simcard) {
        GetContacts(param_1.data.data.simcard.numberId);
      }
    }
    if (param_1.data.app === "main" && param_1.data.event === "sync-game-state") {
      _0x34f9dc(param_1_1 => {
        for (const varData_261 of Object.keys(param_1.data.data)) {
          if (param_1_1.game[varData_261] !== undefined) {
            param_1_1.game[varData_261] = param_1.data.data[varData_261];
          }
        }
      });
    }
    if (param_1.data.app !== "main") {
      return;
    }
    if (param_1.data.action === "enable-prints") {
      printEvents = true;
    }
    if (param_1.data.action === "restart") {
      varData_268();
    }
    if (param_1.data.action === "openUrl") {
      window.invokeNative("openUrl", param_1.data.url);
    }
  };
  const varData_262 = param_1 => {
    const varData_263 = param_1 || window.event;
    if (varData_263.keyCode === 27) {
      nuiAction("np-ui:closeApp");
    }
  };
  const varData_264 = param_1 => {
    if (param_1.target.nodeName !== "INPUT" && param_1.target.nodeName !== "TEXTAREA") {
      return;
    }
    nuiAction("np-ui:inputFocusState", {
      state: true
    });
  };
  const varData_265 = param_1 => {
    if (param_1.target.nodeName !== "INPUT" && param_1.target.nodeName !== "TEXTAREA") {
      return;
    }
    nuiAction("np-ui:inputFocusState", {
      state: false
    });
  };
  const varData_266 = () => {
    document.removeEventListener("keyup", varData_262);
    window.removeEventListener("message", varData_258);
    document.removeEventListener("focus", varData_264, true);
    document.removeEventListener("blur", varData_265, true);
  };
  const varData_267 = () => {
    document.addEventListener("keyup", varData_262);
    window.addEventListener("message", varData_258);
    document.addEventListener("focus", varData_264, true);
    document.addEventListener("blur", varData_265, true);
    if (isDebug()) {
      _0x34f9dc("character", {
        bank_account_id: 0,
        email: false,
        first_name: "Koil",
        id: 0,
        job: "unemployed",
        last_name: "Stinks",
        number: "5555555555",
        server_id: 0
      });
    }
  };
  const varData_268 = async () => {
    _0xa431ed({
      restarting: true
    });
    nuiAction("np-ui:closeApp");
    setTimeout(() => window.location.reload(), 2500);
  };
  const varData_269 = async () => {
    await varData_256();
    await varData_267();
    nuiAction("np-ui:resetApp");
  };
  _0xd6034a.useEffect(() => {
    varData_269();
    return () => varData_266();
  }, []);
  if (_0x28bdf4.restarting) {
    return /* @__PURE__ */_0x14f011.createElement(_0x5f3a59, {
      open: true
    }, /* @__PURE__ */_0x14f011.createElement(_0xa5d638, {
      elevation: 6,
      variant: "filled",
      severity: "info"
    }, "Full restart in progress..."));
  }
  return /* @__PURE__ */_0x14f011.createElement("div", {
    id: "main-app-container",
    style: isDebug() ? {
      backgroundColor: "#aaa"
    } : {}
  }, _0x4c089e.map(param_1 => /* @__PURE__ */_0x14f011.createElement(param_1.render, {
    key: param_1.name
  })));
};
const index = "";
if (typeof window.global === "undefined") {
  window.global = window;
}
(async () => {
  const varData_270 = await createStore();
  const varData_271 = _0x5ee88d.createRoot(document.getElementById("root"));
  varData_271.render(/* @__PURE__ */_0x14f011.createElement(_0x5665ed, {
    store: varData_270
  }, /* @__PURE__ */_0x14f011.createElement(ContextProvider, null, /* @__PURE__ */_0x14f011.createElement(BaseApp, null))));
})();
export { OpenMessageModal as $, triggerNotification as A, getFormattedExportedMessage as B, ConfigTypes as C, store$2 as D, usePhoneState as E, ContextProvider$1 as F, GetCharacter as G, balancedValue as H, Icon as I, changeHud as J, useOutsideClick as K, appName as L, store as M, savePreferences as N, Show as O, PhoneContainer as P, contactsCache as Q, IsNumberFavorited as R, Spinner as S, RemoveContact as T, OpenAddContactModal as U, openConfirmModal as V, openActionsModal as W, OpenEditContactModal as X, RemoveNumberFromFavorites as Y, AddNumberToFavorites as Z, For as _, useGlobalState as a, setPhoneSetting as a0, DeletePhoneImage as a1, GetPhoneImages as a2, decodePhoneMessage as a3, Switch as a4, Match as a5, sendMessage as a6, StorePhoneImage as a7, getMessages as a8, openImageSelectorModal as a9, openGifSelectorModal as aa, openEmojiSelectorModal as ab, OpenNewMessageModal as ac, PHONE_SETTINGS as ad, openInputModal as ae, Container$1 as af, store$5 as ag, store$3 as ah, recoilSync as b, nuiEvent as c, compose as d, CustomTooltip as e, Checkmark as f, data as g, GetContacts as h, isDebug as i, preference as j, action as k, lastTenNuiCalls as l, money as m, nuiAction as n, createContextProvider as o, phoneNumber as p, GetSimCard as q, reset as r, store$6 as s, GetCurrentSimNumber as t, useUIState as u, data$1 as v, normalizeMessages as w, registerPhoneEvent as x, GetContactByNumber as y, getPhoneSetting as z };