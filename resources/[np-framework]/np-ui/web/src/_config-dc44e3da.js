import { R as _0xfae593, r as _0x544c35, j as _0x427eaf, ak as _0x4383de, k as _0x4403c9 } from "./vendor-69ed8822.js";
import { o as _0x56f775, i as _0x1914b7, h as _0x39c3a9, q as _0x566193, n as _0x7c62a5, I as _0x145e58, t as _0x1ee3fd, v as _0x328e52, w as _0x178fb6, x as _0x225410, y as _0x21bb39, z as _0x165830, A as _0x40cf88, p as _0xa3940a, B as _0x4363b2, D as _0x4ebf29, k as _0x1df2a1, d as _0x1acfc4, E as _0x417b4a, a as _0x1f9f0c, s as _0x26b24d, P as _0x1cce53, F as _0x15b9fb, C as _0x10ba12 } from "./index-dcb6474f.js";
import { _ as _0x4eda72 } from "./vite-a4975f27.js";
import { A as _0x574b5a } from "./ui-app-b5e34f38.js";
import _0x21907d, { appName } from "./store-8a444d41.js";
const initialState$2 = {
  search: "",
  view: "contacts",
  contacts: [],
  callHistory: []
};
const devState$2 = {
  ...initialState$2,
  callHistory: [{
    call_from: 5554315405,
    call_to: 5555555555,
    call_initiated: 1717545613678,
    call_established: null,
    call_ended: 1717545615522
  }, {
    call_from: 5554315405,
    call_to: 5550507317,
    call_initiated: 1718220340696,
    call_established: null,
    call_ended: 1718220370670
  }, {
    call_from: 5554315405,
    call_to: 5550507317,
    call_initiated: 1718220541044,
    call_established: null,
    call_ended: 1718220550741
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718220572564,
    call_established: 1718220586187,
    call_ended: 1718220608837
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718220620093,
    call_established: null,
    call_ended: 1718220626036
  }, {
    call_from: 5554315405,
    call_to: 5550507317,
    call_initiated: 1718220790955,
    call_established: 1718220795750,
    call_ended: 1718220948519
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718220964083,
    call_established: 1718220974957,
    call_ended: 1718220981868
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718221433978,
    call_established: null,
    call_ended: 1718221440906
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718221492587,
    call_established: null,
    call_ended: 1718221504094
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718221573015,
    call_established: null,
    call_ended: 1718221580458
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718221584608,
    call_established: null,
    call_ended: 1718221593154
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718221615708,
    call_established: 1718221620854,
    call_ended: 1718221624333
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718221673307,
    call_established: 1718221676542,
    call_ended: 1718221678382
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718221770133,
    call_established: 1718221773304,
    call_ended: 1718221776841
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718221820242,
    call_established: 1718221824489,
    call_ended: 1718221899708
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718224142781,
    call_established: 1718224151442,
    call_ended: 1718224164490
  }, {
    call_from: 5550507317,
    call_to: 5554315405,
    call_initiated: 1718224167736,
    call_established: 1718224178531,
    call_ended: 1718224215909
  }, {
    call_from: 5554315405,
    call_to: 5550507317,
    call_initiated: 1718227202756,
    call_established: null,
    call_ended: 1718227208336
  }, {
    call_from: 5554315405,
    call_to: 5550507317,
    call_initiated: 1718227546378,
    call_established: null,
    call_ended: 1718227551185
  }, {
    call_from: 5554315405,
    call_to: 5550507317,
    call_initiated: 1718227887350,
    call_established: null,
    call_ended: 1718227906314
  }, {
    call_from: 5554315405,
    call_to: 5550507317,
    call_initiated: 1718228065512,
    call_established: null,
    call_ended: 1718228085491
  }, {
    call_from: 5554315405,
    call_to: 5550507317,
    call_initiated: 1718228124056,
    call_established: null,
    call_ended: 1718228130236
  }, {
    call_from: 5554315405,
    call_to: 5550507317,
    call_initiated: 1718228374860,
    call_established: null,
    call_ended: 1718228383825
  }]
};
const [ContextProvider$2, useFallible$2] = _0x56f775(() => _0x1914b7() ? {
  ...devState$2
} : {
  ...initialState$2
}, ({
  state: _0x5b8959,
  setState: _0x50eaf4
}) => ({
  reset: () => {
    _0x50eaf4(() => ({
      ...initialState$2
    }));
  },
  fetchContacts: async () => {
    const varData_1 = await _0x39c3a9();
    _0x50eaf4("contacts", varData_1);
  },
  fetchCallHistory: async (_0xcfbb3 = 0, _0xa5ae4a = 20) => {
    if (_0x1914b7()) {
      return;
    }
    const varData_2 = _0x566193();
    if (!varData_2) {
      return [];
    }
    const varData_3 = await _0x7c62a5("phone/getRecentPhoneCalls", {
      phoneNumber: varData_2.areaCode + varData_2.number,
      offset: _0xcfbb3,
      limit: _0xa5ae4a
    }, {
      returnData: [],
      extApi: true
    });
    _0x50eaf4("callHistory", varData_3.data);
  }
}));
const useContactsState = () => useFallible$2();
const smsNotifSound = "" + new URL("sms_notification-73d1a315.ogg", import.meta.url).href;
const container = "_container_1h21t_1";
const default_avatar = "_default_avatar_1h21t_17";
const initials = "_initials_1h21t_27";
const styles = {
  container,
  default_avatar,
  initials
};
const ContactAvatar = ({
  contact: _0x3fcc0e
}) => {
  const [_0x220cfe, _0x4dea91] = _0xfae593.useState(false);
  const varData_4 = _0x544c35.useMemo(() => {
    if (!_0x3fcc0e?.name) {
      return "";
    }
    const [_0x1d1953 = "", _0x2a188d = ""] = _0x3fcc0e.name.split(" ");
    const varData_5 = _0x1d1953.charAt(0).toUpperCase();
    const varData_6 = _0x2a188d.charAt(0).toUpperCase();
    return varData_5 + varData_6;
  }, [_0x3fcc0e?.name]);
  _0xfae593.useEffect(() => {
    _0x4dea91(false);
  }, [_0x3fcc0e]);
  if (!_0x3fcc0e) {
    return <div className={styles.container}><div className={styles.default_avatar}><_0x145e58 icon={_0x4383de} /></div></div>;
  }
  if (!_0x3fcc0e.avatarURL || _0x220cfe) {
    return <div className={styles.container}><div className={styles.initials}>{varData_4}</div></div>;
  }
  return <div className={styles.container}><img src={_0x3fcc0e.avatarURL} alt={_0x3fcc0e.name + "'s avatar"} onError={() => _0x4dea91(true)} /></div>;
};
const initialState$1 = {
  view: "overview",
  previewedConversations: [],
  unreadConversations: [],
  activeConversationNumber: null,
  messages: []
};
const devState$1 = {
  ...initialState$1
};
const [ContextProvider$1, useFallible$1] = _0x56f775(() => _0x1914b7() ? {
  ...devState$1
} : {
  ...initialState$1
}, ({
  state: _0x278a55,
  setState: _0x5d209d
}) => ({
  reset: () => {
    _0x5d209d(param_1 => {
      param_1.view = "overview";
      param_1.previewedConversations = [];
      param_1.unreadConversations = [];
      param_1.activeConversationNumber = null;
      param_1.messages = [];
    });
  },
  fetchConversations: async (_0x4656f0 = true, _0x802d7e = 0, _0x4c2e97 = 20) => {
    const varData_7 = _0x1ee3fd();
    if (!varData_7) {
      return;
    }
    const varData_8 = await _0x7c62a5("phone/getConversations", {
      phoneNumber: varData_7,
      offset: _0x802d7e,
      limit: _0x4c2e97
    }, {
      returnData: _0x328e52.getConversations(),
      extApi: true
    });
    const varData_9 = _0x178fb6(varData_7, varData_8.data);
    _0x5d209d(param_1 => ({
      ...param_1,
      previewedConversations: _0x4656f0 ? [...varData_9] : [...param_1.previewedConversations, ...varData_9]
    }));
  }
}), ({
  setState: _0xb522e6
}) => {
  _0x225410("sms-receive", function (param_1) {
    const varData_10 = _0x566193();
    if (!varData_10) {
      return;
    }
    const varData_11 = _0x21bb39(param_1.number);
    const varData_12 = varData_10.areaCode + varData_10.number;
    _0xb522e6(param_1_1 => {
      const varData_13 = param_1_1.activeConversationNumber === param_1.number;
      if (!varData_13 && !param_1_1.unreadConversations.includes(param_1.number)) {
        param_1_1.unreadConversations = [...param_1_1.unreadConversations, param_1.number];
      }
    });
    _0xb522e6(param_1_1 => {
      const varData_14 = [...param_1_1.previewedConversations.filter(param_1_2 => param_1_2.number !== String(param_1.number))];
      varData_14.unshift({
        direction: "in",
        number: String(param_1.number),
        message: String(param_1.message),
        timestamp: Number(param_1.timestamp)
      });
      param_1_1.previewedConversations = [...varData_14];
      if (param_1_1.activeConversationNumber === param_1.number) {
        const varData_15 = {
          direction: "in",
          number: param_1.number,
          message: String(param_1.message),
          timestamp: Number(param_1.timestamp),
          number_from: param_1.number,
          number_to: Number(varData_12)
        };
        param_1_1.messages = [varData_15, ...param_1_1.messages];
      }
    });
    _0xb522e6(param_1_1 => {
      if (_0x165830("sms_notifications")) {
        if (param_1_1.activeConversationNumber !== param_1.number) {
          _0x40cf88({
            apps: ["messages"],
            appName: "messages",
            timeout: 5000,
            title: varData_11 ? varData_11.name : _0xa3940a(param_1.number),
            iconOverride: varData_11 ? <ContactAvatar contact={varData_11} /> : undefined,
            text: varData_11 ? _0x4363b2(param_1.message) : "Text Message"
          });
        }
        const varData_16 = Number(_0x165830("sms_notifications_volume") ?? 15);
        if (varData_16 > 0) {
          const varData_17 = new Audio(smsNotifSound);
          varData_17.volume = varData_16 / 100;
          varData_17.controls = false;
          varData_17.play();
          setTimeout(() => {
            varData_17.remove();
          }, varData_17.duration);
        }
      }
    });
  });
});
const useMessagesState = () => useFallible$1();
const initialState = {
  photos: []
};
const devState = {
  ...initialState
};
const [ContextProvider, useFallible] = _0x56f775(() => _0x1914b7() ? {
  ...devState
} : {
  ...initialState
}, ({
  state: _0x3bac16,
  setState: _0x45a41b
}) => ({
  reset: () => {
    _0x45a41b(() => ({
      ...initialState
    }));
  }
}));
const useGalleryApp = () => useFallible();
const config$1 = [];
const defaultStoreState = {};
const defaultConfigObject = {
  background: "#222831",
  events: null,
  hidden: () => false,
  init: null,
  position: 1000,
  stateConfig: null
};
const getDefaultStoreState = () => {
  return defaultStoreState;
};
async function getPhoneAppsConfig() {
  if (config$1.length > 0) {
    return config$1;
  }
  const varData_18 = Object.assign({
    "./apps/calculator/config.tsx": () => _0x4eda72(() => import("./config-781f0a8a.js"), true ? ["./config-781f0a8a.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./phone-input-92273ad1.js"] : undefined, import.meta.url),
    "./apps/calendar/config.tsx": () => _0x4eda72(() => import("./config-92a26ae9.js"), true ? ["./config-92a26ae9.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-52c39051.js", "./index-95666621.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./actions-1e127955.js", "./text-2b84715a.js", "./paper-438d2075.js", "./button-b138ef6e.js", "./datetime-adb6ea7b.js", "./date-31836fe8.js", "./input-67b043ed.js", "./styles-c7d7714e.js", "./index-6dbd65c5.js", "./simple-form-10871a3d.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/call-history/config.tsx": () => _0x4eda72(() => import("./config-9cc185a6.js"), true ? ["./config-9cc185a6.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./events-4cb64c8a.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./duration-timer-dc979963.js", "./lib-553efcee.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/contacts/config.tsx": () => _0x4eda72(() => import("./config-abaa15f6.js"), true ? ["./config-abaa15f6.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./events-4cb64c8a.js", "./duration-timer-dc979963.js", "./lib-553efcee.js", "./index-a5eeee26.js", "./misc-a4c951c6.js", "./date-31836fe8.js", "./phone-input-92273ad1.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/crypto/config.tsx": () => _0x4eda72(() => import("./config-256ec550.js"), true ? ["./config-256ec550.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./lib-553efcee.js", "./store-8da1623c.js"] : undefined, import.meta.url),
    "./apps/details/config.tsx": () => _0x4eda72(() => import("./config-ad2b13ae.js"), true ? ["./config-ad2b13ae.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./text-2b84715a.js"] : undefined, import.meta.url),
    "./apps/documents/config.tsx": () => _0x4eda72(() => import("./config-58a23bd8.js"), true ? ["./config-58a23bd8.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./store-52786cd5.js", "./input-67b043ed.js", "./text-2b84715a.js", "./styles-c7d7714e.js", "./index-6dbd65c5.js", "./simple-form-10871a3d.js", "./datetime-adb6ea7b.js", "./date-31836fe8.js", "./index-95666621.js", "./duration-timer-dc979963.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/doj/config.tsx": () => _0x4eda72(() => import("./config-9384bee8.js"), true ? ["./config-9384bee8.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./events-4cb64c8a.js", "./duration-timer-dc979963.js", "./lib-553efcee.js", "./app-container-77494df0.js", "./input-67b043ed.js", "./text-2b84715a.js", "./styles-c7d7714e.js", "./index-6dbd65c5.js", "./store-dc12fbaf.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/emails/config.tsx": () => _0x4eda72(() => import("./config-2aed374e.js"), true ? ["./config-2aed374e.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-2e12b715.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./date-31836fe8.js"] : undefined, import.meta.url),
    "./apps/employment/config.tsx": () => _0x4eda72(() => import("./config-a122a704.js"), true ? ["./config-a122a704.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./app-container-77494df0.js", "./input-67b043ed.js", "./text-2b84715a.js", "./styles-c7d7714e.js", "./index-6dbd65c5.js", "./paper-438d2075.js", "./simple-form-10871a3d.js", "./button-b138ef6e.js", "./date-31836fe8.js", "./store-e1b061eb.js", "./duration-timer-dc979963.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/erpinger/config.tsx": () => _0x4eda72(() => import("./config-1cf29326.js"), true ? ["./config-1cf29326.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./duration-timer-dc979963.js"] : undefined, import.meta.url),
    "./apps/gallery/config.tsx": () => _0x4eda72(() => import("./config-31ceb094.js"), true ? ["./config-31ceb094.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./index-2aafdbb2.js", "./misc-a4c951c6.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/guber/config.tsx": () => _0x4eda72(() => import("./config-a5a87ae3.js"), true ? ["./config-a5a87ae3.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-26508309.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./index-6dbd65c5.js"] : undefined, import.meta.url),
    "./apps/home-screen/config.tsx": () => _0x4eda72(() => import("./config-35f8de0e.js"), true ? ["./config-35f8de0e.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./app-container-77494df0.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./input-67b043ed.js", "./text-2b84715a.js", "./styles-c7d7714e.js", "./index-6dbd65c5.js", "./duration-timer-dc979963.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/jobs/config.tsx": () => _0x4eda72(() => import("./config-0b7128eb.js"), true ? ["./config-0b7128eb.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-3b8071d7.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./date-31836fe8.js", "./duration-timer-dc979963.js", "./text-2b84715a.js"] : undefined, import.meta.url),
    "./apps/messages/config.tsx": () => _0x4eda72(() => import("./config-f9490029.js"), true ? ["./config-f9490029.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./events-4cb64c8a.js", "./duration-timer-dc979963.js", "./lib-553efcee.js", "./index-fe57c2f2.js", "./misc-a4c951c6.js", "./date-31836fe8.js", "./ui-app-b5e34f38.js", "./index-a5eeee26.js", "./index-2aafdbb2.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/metro/config.tsx": () => _0x4eda72(() => import("./config-dfcf3295.js"), true ? ["./config-dfcf3295.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-7a63ff69.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./apps/nopify/config.tsx": () => _0x4eda72(() => import("./config-18114cfc.js"), true ? ["./config-18114cfc.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-1c4f9679.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./apps/selfieApp/config.tsx": () => _0x4eda72(() => import("./config-ffe203e5.js"), true ? ["./config-ffe203e5.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./apps/settings/config.tsx": () => _0x4eda72(() => import("./config-8ba9c24b.js"), true ? ["./config-8ba9c24b.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-2aafdbb2.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./index-20af7fa9.js"] : undefined, import.meta.url),
    "./apps/twatter/config.tsx": () => _0x4eda72(() => import("./config-83fb992b.js"), true ? ["./config-83fb992b.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./store-6a285994.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./index-2aafdbb2.js", "./index-a5eeee26.js", "./index-fe57c2f2.js", "./misc-a4c951c6.js", "./actions-1e127955.js", "./store-52c39051.js", "./index-20af7fa9.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./apps/vehicles/config.tsx": () => _0x4eda72(() => import("./config-b7f34005.js"), true ? ["./config-b7f34005.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./index-2aafdbb2.js", "./index-a5eeee26.js", "./duration-timer-dc979963.js"] : undefined, import.meta.url),
    "./apps/yellow-pages/config.tsx": () => _0x4eda72(() => import("./config-6975755d.js"), true ? ["./config-6975755d.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js", "./index-2aafdbb2.js", "./index-a5eeee26.js", "./events-4cb64c8a.js", "./duration-timer-dc979963.js", "./lib-553efcee.js", "./misc-a4c951c6.js", "./ui-app-b5e34f38.js", "./store-8a444d41.js"] : undefined, import.meta.url),
    "./components/content-top/config.tsx": () => _0x4eda72(() => import("./config-bef87991.js"), true ? ["./config-bef87991.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./index-dcb6474f.js", "./vite-a4975f27.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url)
  });
  const varData_19 = Object.values(varData_18).map(param_1 => {
    return param_1().then(param_1_1 => {
      config$1.push(param_1_1.default(defaultConfigObject));
    });
  });
  const varData_20 = Object.assign({
    "./apps/calendar/store.ts": () => _0x4eda72(() => import("./store-52c39051.js"), true ? [] : undefined, import.meta.url),
    "./apps/call-history/store.ts": () => _0x4eda72(() => import("./store-ba82a077.js"), true ? [] : undefined, import.meta.url),
    "./apps/crypto/store.ts": () => _0x4eda72(() => import("./store-8da1623c.js"), true ? [] : undefined, import.meta.url),
    "./apps/documents/store.ts": () => _0x4eda72(() => import("./store-52786cd5.js"), true ? [] : undefined, import.meta.url),
    "./apps/doj/store.ts": () => _0x4eda72(() => import("./store-dc12fbaf.js"), true ? [] : undefined, import.meta.url),
    "./apps/emails/store.ts": () => _0x4eda72(() => import("./store-2e12b715.js"), true ? [] : undefined, import.meta.url),
    "./apps/employment/store.ts": () => _0x4eda72(() => import("./store-e1b061eb.js"), true ? [] : undefined, import.meta.url),
    "./apps/erpinger/store.ts": () => _0x4eda72(() => import("./store-536c9c98.js"), true ? [] : undefined, import.meta.url),
    "./apps/guber/store.ts": () => _0x4eda72(() => import("./store-26508309.js"), true ? [] : undefined, import.meta.url),
    "./apps/home-screen/store.ts": () => _0x4eda72(() => import("./store-8ea8dcbb.js"), true ? [] : undefined, import.meta.url),
    "./apps/jobs/store.ts": () => _0x4eda72(() => import("./store-3b8071d7.js"), true ? [] : undefined, import.meta.url),
    "./apps/jobs_new/store.ts": () => _0x4eda72(() => import("./store-97f16f19.js"), true ? [] : undefined, import.meta.url),
    "./apps/metro/store.ts": () => _0x4eda72(() => import("./store-7a63ff69.js"), true ? [] : undefined, import.meta.url),
    "./apps/nopify/store.ts": () => _0x4eda72(() => import("./store-1c4f9679.js"), true ? [] : undefined, import.meta.url),
    "./apps/twatter/store.ts": () => _0x4eda72(() => import("./store-6a285994.js"), true ? [] : undefined, import.meta.url),
    "./components/content-bottom/store.ts": () => _0x4eda72(() => import("./store-cf7996ad.js"), true ? [] : undefined, import.meta.url),
    "./components/content-top/store.ts": () => _0x4eda72(() => import("./index-dcb6474f.js").then(param_1 => param_1.ag), true ? ["./index-dcb6474f.js", "./vite-a4975f27.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url),
    "./components/modal/store.ts": () => _0x4eda72(() => import("./index-dcb6474f.js").then(param_1 => param_1.ah), true ? ["./index-dcb6474f.js", "./vite-a4975f27.js", "./vendor-69ed8822.js", "./commonjsHelpers-c5dac66b.js", "./bundle-4fbe11f0.js"] : undefined, import.meta.url)
  });
  const varData_21 = Object.values(varData_20).map(param_1 => {
    return param_1().then(param_1_1 => {
      return param_1_1.default;
    });
  });
  const varData_22 = await Promise.all(varData_19).then(() => config$1);
  const varData_23 = await Promise.all(varData_21);
  for (let loopIdx = 0; loopIdx < varData_23.length; loopIdx++) {
    defaultStoreState[varData_23[loopIdx].key] = varData_23[loopIdx].initialState;
  }
  config$1.sort((param_1, param_2) => {
    if (param_1.position < param_2.position) {
      return -1;
    } else if (param_1.position > param_2.position) {
      return 1;
    }
    return 0;
  });
  return config$1.filter(param_1 => typeof param_1.enabled === "boolean" ? Boolean(param_1.enabled) : true);
}
async function getEvents(param_1) {
  const varData_24 = {};
  const varData_25 = (param_1_1, param_2) => {
    const varData_26 = [...(Array.isArray(varData_24[param_1_1]) ? varData_24[param_1_1] : [])];
    varData_26.push(param_2);
    varData_24[param_1_1] = varData_26;
  };
  param_1.forEach(({
    events: _0x116cb4
  }) => {
    if (!_0x116cb4) {
      return;
    }
    _0x116cb4()(varData_25, {
      config: param_1
    });
  });
  return varData_24;
}
const config$2 = {};
const modalKey = _0x4ebf29.key;
const modalOpen = param_1 => {
  _0x1df2a1(param_1_1 => ({
    ...param_1_1,
    [modalKey]: {
      ..._0x4ebf29.initialState,
      content: param_1,
      show: true
    }
  }))();
};
const modalClose = (_0x410fa9 = true) => {
  _0x1df2a1(param_1 => ({
    ...param_1,
    [modalKey]: {
      ..._0x4ebf29.initialState,
      slowHide: _0x410fa9
    }
  }))();
};
const modalLoading = (_0x15d1df = true) => {
  _0x1df2a1(param_1 => ({
    ...param_1,
    [modalKey]: {
      ..._0x4ebf29.initialState,
      loading: _0x15d1df,
      content: param_1[modalKey].content,
      show: true
    }
  }))();
};
const modalError = (param_1, _0x5b1fd5 = false) => {
  _0x1df2a1(param_1_1 => ({
    ...param_1_1,
    [modalKey]: {
      ...param_1_1[modalKey],
      closeOnErrorOkay: _0x5b1fd5,
      error: param_1,
      loading: false
    }
  }))();
};
const modalConfirm = (param_1, _0x420205 = "Are you sure?") => {
  _0x1df2a1(param_1_1 => ({
    ...param_1_1,
    [modalKey]: {
      ..._0x4ebf29.initialState,
      confirmText: _0x420205,
      onConfirm: param_1,
      isConfirm: true,
      show: true
    }
  }))();
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x1acfc4(_0x21907d, {
  mapDispatchToProps: {}
});
const Container = param_1 => {
  const {
    state: _0x1d84eb,
    setState: _0x363e8f
  } = _0x417b4a();
  const {
    state: _0x313fb2,
    setState: _0x14baff
  } = _0x1f9f0c();
  const varData_27 = _0xfae593.useRef(param_1.phoneEvents);
  const varData_28 = async (_0x1f9c76 = {}) => {
    const varData_29 = await getPhoneAppsConfig();
    const varData_30 = await getEvents(varData_29);
    const varData_31 = {};
    for (const varData_32 of varData_29) {
      if (varData_32.init) {
        if (typeof varData_32.init !== "function") {
          continue;
        }
        const varData_33 = await varData_32.init();
        varData_31[varData_33.key] = varData_33.data;
      }
    }
    const varData_34 = {
      ...getDefaultStoreState(),
      ...varData_31
    };
    _0x1df2a1(param_1_1 => {
      return {
        ...param_1_1,
        ...varData_34,
        phone: {
          ...param_1_1.phone,
          ..._0x1f9c76,
          phoneConfig: varData_29,
          phoneEvents: varData_30,
          initialized: true
        }
      };
    })();
  };
  const varData_35 = param_1_1 => {
    _0x363e8f(param_1_2 => {
      param_1_2.activeApp = "home-screen";
      param_1_2.show = true;
      if (typeof param_1_1.phoneModel === "string") {
        param_1_2.phoneModel = param_1_1.phoneModel;
      }
    });
    modalClose(false);
  };
  const varData_36 = () => {
    modalClose(false);
    _0x363e8f(param_1_1 => {
      param_1_1.activeApp = "home-screen";
      param_1_1.show = false;
    });
  };
  const varData_37 = () => {
    varData_28({
      show: false
    });
  };
  const varData_38 = param_1_1 => {
    const varData_39 = varData_27.current;
    if (!param_1_1.action) {
      return;
    }
    const varData_40 = varData_39[param_1_1.action] ?? [];
    const varData_41 = param_1_2 => {
      _0x26b24d.dispatch({
        cb: param_1_3 => param_1_2({
          data: param_1_1,
          state: param_1_3
        }),
        type: "np-ui-action"
      });
    };
    varData_40.forEach(param_1_2 => varData_41(param_1_2));
  };
  _0xfae593.useEffect(() => {
    if (_0x313fb2.character === null) {
      return;
    }
    varData_28();
  }, [_0x313fb2.character]);
  _0xfae593.useEffect(() => {
    varData_27.current = param_1.phoneEvents;
  }, [param_1.phoneEvents]);
  if (!param_1.initialized || _0x313fb2.character === null) {
    return null;
  }
  return <_0x574b5a closeOnError={true} center={_0x1914b7()} name={appName} onError={varData_37} onEscape={varData_36} onEvent={varData_38} onHide={varData_36} onShow={varData_35}><ContextProvider$2><ContextProvider$1><ContextProvider><_0x1cce53 {...param_1} /></ContextProvider></ContextProvider$1></ContextProvider$2></_0x574b5a>;
};
const Container$1 = _0x4403c9(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x21907d,
    name: "phone",
    render: () => <_0x15b9fb><Container$1 /></_0x15b9fb>,
    type: _0x10ba12.Application
  };
};
const _config = Object.freeze(Object.defineProperty({
  "__proto__": null,
  default: config
}, Symbol.toStringTag, {
  value: "Module"
}));
export { ContactAvatar as C, _config as _, modalClose as a, modalLoading as b, modalError as c, modalConfirm as d, useMessagesState as e, useGalleryApp as f, ContextProvider as g, modalOpen as m, useContactsState as u };