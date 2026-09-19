import { N as A, U as tt } from "./v-packages.js";
import { c as ze, a as F, o as ke, b as _e, e as $, f as v, g as wt, F as Ae, h as an, j as S, k as m, l as Z, t as w, m as H, S as U, s as cn, n as D, p as Ke, M as te, q as kt, r as St, w as we, x as j, y as J, z as Ln, A as wn, D as un, B as dn, C as kn, T as Sn, E as Mn, G as ct, H as Ot, I as En, J as le, K as Nt, L as Te, N as X, O as Pn, P as On, Q as Ge, R as Nn, V as In, W as An, X as Tn, Y as Rn, Z as Ie, _ as Dn, $ as Bn, a0 as Fe, a1 as ut, a2 as It, a3 as jn, a4 as zn, a5 as dt, a6 as xe, a7 as At, a8 as Tt, a9 as Rt, aa as Dt, ab as Bt, ac as jt, ad as zt, ae as Gn, af as Fn, ag as Un } from "./vendor.js";
(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) {
    return;
  }
  for (const t of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    e(t);
  }
  new MutationObserver(t => {
    for (const n of t) {
      if (n.type === "childList") {
        for (const o of n.addedNodes) {
          if (o.tagName === "LINK" && o.rel === "modulepreload") {
            e(o);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function d(t) {
    const n = {};
    if (t.integrity) {
      n.integrity = t.integrity;
    }
    if (t.referrerPolicy) {
      n.referrerPolicy = t.referrerPolicy;
    }
    if (t.crossOrigin === "use-credentials") {
      n.credentials = "include";
    } else if (t.crossOrigin === "anonymous") {
      n.credentials = "omit";
    } else {
      n.credentials = "same-origin";
    }
    return n;
  }
  function e(t) {
    if (t.ep) {
      return;
    }
    t.ep = true;
    const n = d(t);
    fetch(t.href, n);
  }
})();
const Zn = {
  show: false,
  notifications: [],
  openApplications: [],
  openPanel: "",
  time: "15:20",
  allowedApps: [],
  enabledFeatures: [],
  isLaptop: false,
  isLogin: false,
  overwriteWallpaper: "",
  game: {
    isAlive: true,
    location: "world",
    modeDev: false,
    modeDebug: false,
    modeGod: false,
    time: "00:01",
    token: null,
    endpoint: null,
    vehicle: null,
    taxLevels: [15, 15, 15, 15, 15, 15, 15, 15, 15],
    weather: "CLEAR",
    weatherIcon: "sun",
    showWatermark: false,
    watermarkPosition: {
      right: "1vh",
      top: "2vh"
    },
    serverCode: "wl",
    showroomPurchaseBtn: false,
    skipMdwProfileCheck: false,
    isHardcore: false,
    radioChannel: ""
  }
};
const Hn = "modulepreload";
const qn = function (i, u) {
  return new URL(i, u).href;
};
const Gt = {};
const R = function (u, d, e) {
  if (!d || d.length === 0) {
    return u();
  }
  const t = document.getElementsByTagName("link");
  return Promise.all(d.map(n => {
    n = qn(n, e);
    if (n in Gt) {
      return;
    }
    Gt[n] = true;
    const o = n.endsWith(".css");
    const r = o ? "[rel=\"stylesheet\"]" : "";
    if (e) {
      for (let s = t.length - 1; s >= 0; s--) {
        const c = t[s];
        if (c.href === n && (!o || c.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${n}"]${r}`)) {
      return;
    }
    const l = document.createElement("link");
    l.rel = o ? "stylesheet" : Hn;
    if (!o) {
      l.as = "script";
      l.crossOrigin = "";
    }
    l.href = n;
    document.head.appendChild(l);
    if (o) {
      return new Promise((s, c) => {
        l.addEventListener("load", s);
        l.addEventListener("error", () => c(new Error(`Unable to preload CSS for ${n}`)));
      });
    }
  })).then(() => u()).catch(n => {
    const o = new Event("vite:preloadError", {
      cancelable: true
    });
    o.payload = n;
    window.dispatchEvent(o);
    if (!o.defaultPrevented) {
      throw n;
    }
  });
};
const K = (i, u) => {
  const d = [...N.notifications];
  const e = Date.now();
  const t = Qe(i);
  if (t) {
    d.push({
      message: u,
      appInfo: t,
      expired: false,
      id: e
    });
    re({
      notifications: d
    });
    setTimeout(() => {
      re(n => ({
        ...n,
        notifications: n.notifications.map(o => o.id !== e ? o : {
          ...o,
          expired: true
        })
      }));
    }, 5000);
  }
};
const Vn = i => {
  const u = [...N.notifications];
  const d = u.findIndex(e => e.id === i);
  if (d !== -1) {
    u.splice(d, 1);
    re({
      notifications: u
    });
  }
};
const Wn = () => {
  re({
    notifications: []
  });
};
const [Je, Qn] = ze([]);
const Yn = async () => {
  if (Je.length > 0) {
    return;
  }
  const u = Object.values(Object.assign({
    "../applications/antivirus/config.tsx": () => R(() => import("./config_antivirus.js"), ["./config_antivirus.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/appstore/config.tsx": () => R(() => import("./config_appstore.js"), ["./config_appstore.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/binunce/config.tsx": () => R(() => import("./config_binunce.js"), ["./config_binunce.js", "./vendor.js", "./commonjsHelpers.js", "./index_common.js", "./v-packages.js"], import.meta.url),
    "../applications/booster/config.tsx": () => R(() => import("./config_booster.js"), ["./config_booster.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/boosting/config.tsx": () => R(() => import("./config_boosting.js"), ["./config_boosting.js", "./vendor.js", "./commonjsHelpers.js", "./underground_icon.js", "./v-packages.js", "./nui.js", "./toast.js", "./index_table.js", "./index_shared.js"], import.meta.url),
    "../applications/browser/config.tsx": () => R(() => import("./config_common.js"), ["./config_common.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/business/config.tsx": () => R(() => import("./config_browser.js"), ["./config_browser.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js", "./toast.js"], import.meta.url),
    "../applications/cam-scan/config.tsx": () => R(() => import("./config_base.js"), ["./config_base.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/contacts/config.tsx": () => R(() => import("./config_contacts.js"), ["./config_contacts.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./index_table.js", "./v-packages.js"], import.meta.url),
    "../applications/cracker/config.tsx": () => R(() => import("./config_cracker.js"), ["./config_cracker.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/crime-hq-tablet/config.tsx": () => R(() => import("./config_crimehqtablet.js"), ["./config_crimehqtablet.js", "./context.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js", "./contract.js", "./index_shared.js"], import.meta.url),
    "../applications/crime-hq/config.tsx": () => R(() => import("./context.js").then(d => d.c), ["./context.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js", "./contract.js", "./index_shared.js"], import.meta.url),
    "../applications/documents/config.tsx": () => R(() => import("./config_camscan.js"), ["./config_camscan.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./nui.js", "./v-packages.js"], import.meta.url),
    "../applications/drone/config.tsx": () => R(() => import("./config_drone.js"), ["./config_drone.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/explorer-laptop/config.tsx": () => R(() => import("./config_explorerlaptop.js"), ["./config_explorerlaptop.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/explorer/config.tsx": () => R(() => import("./config_explorer.js"), ["./config_explorer.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/faceless-oc/config.tsx": () => R(() => import("./config_facelessoc.js"), ["./config_facelessoc.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/faceless/config.tsx": () => R(() => import("./config_faceless.js"), ["./config_faceless.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/facelessapp/config.tsx": () => R(() => import("./config_facelessapp.js"), ["./config_facelessapp.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/gruppe6/config.tsx": () => R(() => import("./config_gruppe6.js"), ["./config_gruppe6.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js", "./index_shared.js"], import.meta.url),
    "../applications/heist-tracker/config.tsx": () => R(() => import("./config_heisttracker.js"), ["./config_heisttracker.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js", "./contract.js"], import.meta.url),
    "../applications/hideout/config.tsx": () => R(() => Promise.resolve().then(() => Tu), undefined, import.meta.url),
    "../applications/mdt/config.tsx": () => R(() => import("./config_mdt.js"), ["./config_mdt.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/miner-ext/config.tsx": () => R(() => import("./config_minerext.js"), ["./config_minerext.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/miner/config.tsx": () => R(() => import("./config_miner.js"), ["./config_miner.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/mobile-casino/config.tsx": () => R(() => import("./config_mobilecasino.js"), ["./config_mobilecasino.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/nexus/config.tsx": () => R(() => import("./config_nexus.js"), ["./config_nexus.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/noid/config.tsx": () => R(() => import("./config_noid.js"), ["./config_noid.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/notepad/config.tsx": () => R(() => import("./config_notepad.js"), ["./config_notepad.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/pd-scan/config.tsx": () => R(() => import("./config_pdscan.js"), ["./config_pdscan.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/realestate/config.tsx": () => R(() => import("./config_realestate.js"), ["./config_realestate.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/recycle/config.tsx": () => R(() => import("./config_recycle.js"), ["./config_recycle.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/ron-terminal/config.tsx": () => R(() => import("./config_ronterminal.js"), ["./config_ronterminal.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/run-network/config.tsx": () => R(() => import("./config_runnetwork.js"), ["./config_runnetwork.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/salty/config.tsx": () => R(() => import("./config_salty.js"), ["./config_salty.js", "./vendor.js", "./commonjsHelpers.js", "./index_common.js", "./v-packages.js"], import.meta.url),
    "../applications/sniff/config.tsx": () => R(() => import("./config_business.js"), ["./config_business.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js", "./index_common.js"], import.meta.url),
    "../applications/the-board/config.tsx": () => R(() => import("./config_theboard.js"), ["./config_theboard.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./underground_icon.js", "./v-packages.js"], import.meta.url),
    "../applications/tower-defense/config.tsx": () => R(() => import("./config_towerdefense.js"), ["./config_towerdefense.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/trucking/config.tsx": () => R(() => import("./config_trucking.js"), ["./config_trucking.js", "./vendor.js", "./commonjsHelpers.js", "./index_shared.js", "./v-packages.js"], import.meta.url),
    "../applications/wally/config.tsx": () => R(() => import("./config_wally.js"), ["./config_wally.js", "./vendor.js", "./commonjsHelpers.js", "./v-packages.js"], import.meta.url),
    "../applications/yellow-pages/config.tsx": () => R(() => import("./config_yellowpages.js"), ["./config_yellowpages.js", "./vendor.js", "./commonjsHelpers.js", "./nui.js", "./index_shared.js", "./toast.js", "./v-packages.js"], import.meta.url)
  })).map(d => d().then(e => e.default));
  try {
    const e = (await Promise.all(u)).filter(t => t.enabled);
    console.log(`Laptop applications loaded [Count: ${e.length}]`);
    Qn(e);
  } catch (d) {
    console.log("Error when loading apps: ", d);
  }
};
const _n = async i => i.name !== "appstore" && !(await A.execute("appstore:getApp", i.name)) ? (K(i.name, "You must download this application from the app store."), false) : i.requiresVPN && !(await A.execute("salty:hasVPN")) ? (K(i.name, "You must have a VPN to use this application."), false) : i.requiresWifi && !(await A.execute("salty:isConnectedToWifi")) ? (K(i.name, "You must be connected to a WiFi network to use this application."), false) : true;
const Kn = async i => {
  if ([...N.openApplications].includes(i)) {
    return;
  }
  const d = Qe(i);
  if (d && d?.isEnabled !== false) {
    if (!d.isLaptop || !!d.isPreInstalled || !!(await _n(d))) {
      re(e => ({
        openApplications: [...e.openApplications, i]
      }));
    }
  }
};
const Ft = i => {
  const u = [...N.openApplications];
  const d = u.indexOf(i);
  if (d !== -1) {
    u.splice(d, 1);
    re({
      openApplications: u
    });
  }
};
const Jn = () => {
  re({
    openApplications: []
  });
};
const fn = i => N.allowedApps.includes(i);
const Qe = i => Je.find(d => d.name.toLowerCase() === i.toLowerCase());
const Bu = () => Je.filter(u => u.isLaptop);
const [Xn, ei] = F(undefined);
const hn = async () => {
  const i = await A.execute("tablet:fetchCharacterInfo", {
    mockupData: {
      cid: 69,
      firstName: "John",
      lastName: "Doe",
      phoneNumber: 1231231133
    }
  });
  ei(i);
};
function Pt(i, u) {
  const d = e => !i.contains(e.target) && u()?.();
  document.body.addEventListener("click", d);
  ke(() => document.body.removeEventListener("click", d));
}
const ti = "_content_mz7l3_1";
const ni = "_isLaptop_mz7l3_16";
const ii = "_header_mz7l3_23";
const oi = "_icon_mz7l3_27";
const ri = "_title_mz7l3_30";
const si = "_description_mz7l3_37";
const li = "_splitter_mz7l3_44";
const ai = "_empty_mz7l3_51";
const pe = {
  content: ti,
  isLaptop: ni,
  header: ii,
  icon: oi,
  title: ri,
  description: si,
  splitter: li,
  empty: ai
};
const ci = w("<div><div><div><div><h1>Wifi</h1><p>Network & Internet settings</div></div><div></div><div><h1>No Wi-Fi networks founds");
const ui = i => (() => {
  const u = ci();
  const d = u.firstChild;
  const e = d.firstChild;
  const t = e.firstChild;
  const n = t.firstChild;
  const o = n.nextSibling;
  const r = e.nextSibling;
  const a = r.nextSibling;
  const l = a.firstChild;
  _e(Pt, u, () => () => i.onClose());
  $(e, v(Ae, {
    get class() {
      return pe.icon;
    },
    icon: wt,
    color: "#FFFFFF"
  }), t);
  $(a, v(Ae, {
    get class() {
      return pe.icon;
    },
    icon: an
  }), l);
  S(s => {
    const c = pe.container;
    const _ = pe.content;
    const f = {
      [pe.isLaptop]: N.isLaptop
    };
    const h = pe.header;
    const g = pe.info;
    const y = pe.title;
    const p = pe.description;
    const x = pe.splitter;
    const C = pe.empty;
    if (c !== s._v$) {
      m(u, s._v$ = c);
    }
    if (_ !== s._v$2) {
      m(d, s._v$2 = _);
    }
    s._v$3 = Z(d, f, s._v$3);
    if (h !== s._v$4) {
      m(e, s._v$4 = h);
    }
    if (g !== s._v$5) {
      m(t, s._v$5 = g);
    }
    if (y !== s._v$6) {
      m(n, s._v$6 = y);
    }
    if (p !== s._v$7) {
      m(o, s._v$7 = p);
    }
    if (x !== s._v$8) {
      m(r, s._v$8 = x);
    }
    if (C !== s._v$9) {
      m(a, s._v$9 = C);
    }
    return s;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined,
    _v$7: undefined,
    _v$8: undefined,
    _v$9: undefined
  });
  return u;
})();
const di = "_container_704u9_1";
const _i = "_icon_704u9_11";
const fi = "_label_704u9_17";
const _t = {
  container: di,
  icon: _i,
  label: fi
};
const hi = w("<h1>");
const vi = w("<div class=\"flex flex-col items-center justify-center gap-[0.6vh]\"><div><img>");
const vn = i => (() => {
  const u = vi();
  const d = u.firstChild;
  const e = d.firstChild;
  d.$$click = async () => {
    await Kn(i.appInfo.name);
  };
  $(u, v(U, {
    get when() {
      return !i.hideLabel;
    },
    get children() {
      const t = hi();
      $(t, () => i.appInfo.label);
      S(() => m(t, _t.label));
      return t;
    }
  }), null);
  S(t => {
    const n = _t.container;
    const o = i.style;
    const r = _t.icon;
    const a = i.appInfo.icon;
    if (n !== t._v$) {
      m(d, t._v$ = n);
    }
    t._v$2 = cn(d, o, t._v$2);
    if (r !== t._v$3) {
      m(e, t._v$3 = r);
    }
    if (a !== t._v$4) {
      D(e, "src", t._v$4 = a);
    }
    return t;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return u;
})();
H(["click"]);
const gi = "_action_btn_f0dmc_1";
const mi = "_isLaptop_f0dmc_13";
const $i = "_icon_f0dmc_22";
const pi = "_active_f0dmc_28";
const Ci = "_notifications_f0dmc_36";
const et = {
  action_btn: gi,
  isLaptop: mi,
  icon: $i,
  active: pi,
  notifications: Ci
};
const yi = w("<div>");
const xi = w("<button>");
const Ue = i => {
  const [u, d] = F(false);
  const e = () => {
    d(true);
  };
  const t = () => {
    d(false);
  };
  return (() => {
    const n = xi();
    n.addEventListener("mouseleave", t);
    n.addEventListener("mouseenter", e);
    Ke(n, "click", i.onClick, true);
    $(n, v(U, {
      get when() {
        return i.notifications;
      },
      get children() {
        const o = yi();
        $(o, () => i.notifications);
        S(() => m(o, et.notifications));
        return o;
      }
    }), null);
    $(n, v(Ae, {
      get class() {
        return et.icon;
      },
      get icon() {
        return i.icon;
      }
    }), null);
    S(o => Z(n, {
      [et.action_btn]: true,
      [et.active]: i.active || u(),
      [et.isLaptop]: N.isLaptop
    }, o));
    return n;
  })();
};
H(["click"]);
const bi = "_container_glr04_1";
const Li = "_isLaptop_glr04_8";
const wi = "_clock_container_glr04_20";
const ki = "_date_glr04_23";
const Si = "_time_glr04_30";
const Mi = "_btn_container_glr04_73";
const be = {
  container: bi,
  isLaptop: Li,
  clock_container: wi,
  date: ki,
  time: Si,
  btn_container: Mi
};
const ft = w("<div>");
const Ei = w("<div><div> - <span>");
const Pi = w("<div><p></p><h1>");
const Ut = () => {
  const u = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  const d = e => {
    const t = N.openPanel;
    let n = "";
    if (t === e) {
      n = "";
    } else if (t !== e) {
      n = e;
    }
    re({
      openPanel: n
    });
  };
  return (() => {
    const e = ft();
    $(e, v(we, {
      get children() {
        return [v(te, {
          get when() {
            return N.isLaptop;
          },
          get children() {
            return [(() => {
              const t = ft();
              $(t, v(Ue, {
                icon: wt,
                get active() {
                  return N.openPanel === "wifi";
                },
                onClick: () => d("wifi")
              }), null);
              $(t, v(Ue, {
                icon: kt,
                get active() {
                  return N.openPanel === "settings";
                },
                onClick: () => d("settings")
              }), null);
              $(t, v(Ue, {
                icon: St,
                get active() {
                  return N.openPanel === "notifications";
                },
                get notifications() {
                  return N.notifications.length;
                },
                onClick: () => d("notifications")
              }), null);
              S(() => m(t, be.btn_container));
              return t;
            })(), (() => {
              const t = Ei();
              const n = t.firstChild;
              const o = n.firstChild;
              const r = o.nextSibling;
              $(n, u, o);
              $(r, () => N.time);
              S(a => {
                const l = be.clock_container;
                const s = be.date;
                const c = be.time;
                if (l !== a._v$) {
                  m(t, a._v$ = l);
                }
                if (s !== a._v$2) {
                  m(n, a._v$2 = s);
                }
                if (c !== a._v$3) {
                  m(r, a._v$3 = c);
                }
                return a;
              }, {
                _v$: undefined,
                _v$2: undefined,
                _v$3: undefined
              });
              return t;
            })()];
          }
        }), v(te, {
          get when() {
            return !N.isLaptop;
          },
          get children() {
            return [(() => {
              const t = Pi();
              const n = t.firstChild;
              const o = n.nextSibling;
              $(n, () => N.time);
              $(o, u);
              S(r => {
                const a = be.clock_container;
                const l = be.time;
                const s = be.date;
                if (a !== r._v$4) {
                  m(t, r._v$4 = a);
                }
                if (l !== r._v$5) {
                  m(n, r._v$5 = l);
                }
                if (s !== r._v$6) {
                  m(o, r._v$6 = s);
                }
                return r;
              }, {
                _v$4: undefined,
                _v$5: undefined,
                _v$6: undefined
              });
              return t;
            })(), (() => {
              const t = ft();
              $(t, v(Ue, {
                icon: wt,
                get active() {
                  return N.openPanel === "wifi";
                },
                onClick: () => d("wifi")
              }), null);
              $(t, v(Ue, {
                icon: kt,
                get active() {
                  return N.openPanel === "settings";
                },
                onClick: () => d("settings")
              }), null);
              $(t, v(Ue, {
                icon: St,
                get active() {
                  return N.openPanel === "notifications";
                },
                get notifications() {
                  return N.notifications.length;
                },
                onClick: () => d("notifications")
              }), null);
              S(() => m(t, be.btn_container));
              return t;
            })()];
          }
        })];
      }
    }));
    S(t => {
      const n = be.container;
      const o = {
        [be.isLaptop]: N.isLaptop
      };
      if (n !== t._v$7) {
        m(e, t._v$7 = n);
      }
      t._v$8 = Z(e, o, t._v$8);
      return t;
    }, {
      _v$7: undefined,
      _v$8: undefined
    });
    return e;
  })();
};
const gn = "" + new URL("logo-small-eebc87eb.svg", import.meta.url).href;
const Oi = "_container_f6h5y_1";
const Ni = "_isLaptop_f6h5y_7";
const Ii = "_logo_container_f6h5y_11";
const Ai = "_logo_f6h5y_11";
const Ti = "_box_f6h5y_49";
const Ri = "_dock_container_f6h5y_63";
const Se = {
  container: Oi,
  isLaptop: Ni,
  logo_container: Ii,
  logo: Ai,
  box: Ti,
  dock_container: Ri,
  "tablet-icon": "_tablet-icon_f6h5y_75"
};
const Zt = w("<div>");
const Di = w("<img>");
const Bi = w("<div><div><div></div></div><div>");
const ji = () => (() => {
  const i = Bi();
  const u = i.firstChild;
  const d = u.firstChild;
  const e = u.nextSibling;
  $(d, v(we, {
    get children() {
      return [v(te, {
        get when() {
          return N.isLaptop;
        },
        get children() {
          return [(() => {
            const t = Zt();
            S(() => m(t, Se.box));
            return t;
          })(), (() => {
            const t = Zt();
            S(() => m(t, Se.box));
            return t;
          })()];
        }
      }), v(te, {
        get when() {
          return !N.isLaptop;
        },
        get children() {
          const t = Di();
          D(t, "src", gn);
          return t;
        }
      })];
    }
  }));
  $(e, v(J, {
    get each() {
      return Je.filter(t => N.isLaptop ? t.isLaptop : !t.isLaptop);
    },
    children: t => v(U, {
      get when() {
        return j(() => !!t.onDock)() && fn(t.name);
      },
      get children() {
        return v(vn, {
          appInfo: t,
          get hideLabel() {
            return N.isLaptop;
          },
          get style() {
            return {
              transform: N.isLaptop ? "scale(0.8)" : ""
            };
          }
        });
      }
    })
  }), null);
  $(e, v(U, {
    get when() {
      return N.isLaptop;
    },
    get children() {
      return v(Ut, {});
    }
  }), null);
  $(i, v(U, {
    get when() {
      return !N.isLaptop;
    },
    get children() {
      return v(Ut, {});
    }
  }), null);
  S(t => {
    const n = Se.container;
    const o = {
      [Se.isLaptop]: N.isLaptop
    };
    const r = Se.logo_container;
    const a = Se.logo;
    const l = Se.dock_container;
    const s = {
      [Se.isLaptop]: N.isLaptop
    };
    if (n !== t._v$) {
      m(i, t._v$ = n);
    }
    t._v$2 = Z(i, o, t._v$2);
    if (r !== t._v$3) {
      m(u, t._v$3 = r);
    }
    if (a !== t._v$4) {
      m(d, t._v$4 = a);
    }
    if (l !== t._v$5) {
      m(e, t._v$5 = l);
    }
    t._v$6 = Z(e, s, t._v$6);
    return t;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined
  });
  return i;
})();
const zi = "_container_1mkum_1";
const Gi = {
  container: zi
};
const Fi = w("<div>");
const Ui = i => (() => {
  const u = Fi();
  Ke(u, "click", i.onClick, true);
  $(u, v(U, {
    get when() {
      return i.checked;
    },
    get children() {
      return v(Ae, {
        icon: Ln
      });
    }
  }));
  S(() => m(u, Gi.container));
  return u;
})();
H(["click"]);
const mn = "tablet-wallpaper";
const [Ye, $n] = ze({
  wallpaper: Zi(),
  popupNotifications: pn()
});
function Zi() {
  return localStorage.getItem(mn) ?? "";
}
function pn() {
  const i = localStorage.getItem("tablet_popup_notifications");
  if (i === null) {
    return true;
  } else {
    return i === "enabled";
  }
}
function Hi(i) {
  localStorage.setItem(mn, i);
  $n({
    wallpaper: i
  });
}
function qi(i) {
  localStorage.setItem("tablet_popup_notifications", i);
  $n({
    popupNotifications: pn()
  });
}
const Vi = "_content_u25vn_1";
const Wi = "_isLaptop_u25vn_16";
const Qi = "_header_u25vn_23";
const Yi = "_icon_u25vn_27";
const Ki = "_title_u25vn_30";
const Ji = "_description_u25vn_37";
const Xi = "_splitter_u25vn_44";
const eo = "_list_u25vn_51";
const to = "_form_field_u25vn_87";
const no = "_form_field_inline_u25vn_92";
const io = "_save_btn_u25vn_98";
const ce = {
  content: Vi,
  isLaptop: Wi,
  header: Qi,
  icon: Yi,
  title: Ki,
  description: Ji,
  splitter: Xi,
  list: eo,
  form_field: to,
  form_field_inline: no,
  save_btn: io
};
const oo = w("<div><div><div><div><h1>Settings</h1><p>Personalize your tablet.</div></div><div></div><ul><li><label>Tablet Wallpaper</label><input type=\"text\" placeholder=\"Enter image url...\"></li><li><label>Notifications Popup</ul><button>Save Changes");
const ro = i => {
  const [u, d] = F(Ye.wallpaper);
  const e = () => {
    Hi(u());
  };
  return (() => {
    const t = oo();
    const n = t.firstChild;
    const o = n.firstChild;
    const r = o.firstChild;
    const a = r.firstChild;
    const l = a.nextSibling;
    const s = o.nextSibling;
    const c = s.nextSibling;
    const _ = c.firstChild;
    const f = _.firstChild;
    const h = f.nextSibling;
    const g = _.nextSibling;
    g.firstChild;
    const y = c.nextSibling;
    _e(Pt, t, () => () => i.onClose());
    $(o, v(Ae, {
      get class() {
        return ce.icon;
      },
      icon: kt,
      color: "#FFFFFF"
    }), r);
    h.addEventListener("change", p => d(p.target.value));
    $(g, v(Ui, {
      get checked() {
        return Ye.popupNotifications;
      },
      onClick: () => qi(Ye.popupNotifications ? "disabled" : "enabled")
    }), null);
    y.$$click = e;
    S(p => {
      const x = ce.container;
      const C = ce.content;
      const k = {
        [ce.isLaptop]: N.isLaptop
      };
      const b = ce.header;
      const M = ce.info;
      const I = ce.title;
      const B = ce.description;
      const z = ce.splitter;
      const T = ce.list;
      const Q = ce.form_field;
      const q = ce.form_field_inline;
      const ee = ce.save_btn;
      if (x !== p._v$) {
        m(t, p._v$ = x);
      }
      if (C !== p._v$2) {
        m(n, p._v$2 = C);
      }
      p._v$3 = Z(n, k, p._v$3);
      if (b !== p._v$4) {
        m(o, p._v$4 = b);
      }
      if (M !== p._v$5) {
        m(r, p._v$5 = M);
      }
      if (I !== p._v$6) {
        m(a, p._v$6 = I);
      }
      if (B !== p._v$7) {
        m(l, p._v$7 = B);
      }
      if (z !== p._v$8) {
        m(s, p._v$8 = z);
      }
      if (T !== p._v$9) {
        m(c, p._v$9 = T);
      }
      if (Q !== p._v$10) {
        m(_, p._v$10 = Q);
      }
      if (q !== p._v$11) {
        m(g, p._v$11 = q);
      }
      if (ee !== p._v$12) {
        m(y, p._v$12 = ee);
      }
      return p;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined
    });
    S(() => h.value = u());
    return t;
  })();
};
H(["click"]);
const so = "_container_14myv_1";
const lo = "_icon_container_14myv_10";
const ao = "_exit_icon_14myv_20";
const co = "_title_14myv_32";
const uo = "_description_14myv_40";
const Ze = {
  container: so,
  icon_container: lo,
  exit_icon: ao,
  title: co,
  description: uo
};
const _o = w("<div>");
const fo = w("<li><div><img alt=\"\"></div><div><h1></h1><p>");
const Ht = i => (() => {
  const u = fo();
  const d = u.firstChild;
  const e = d.firstChild;
  const t = d.nextSibling;
  const n = t.firstChild;
  const o = n.nextSibling;
  e.style.setProperty("width", "5rem");
  e.style.setProperty("height", "5rem");
  $(n, () => i.info.appInfo?.label ?? i.info.appInfo.name);
  $(o, () => i.info.message);
  $(u, v(U, {
    get when() {
      return i.laptopOpen;
    },
    get children() {
      const r = _o();
      r.$$click = () => Vn(i.info.id);
      $(r, v(Ae, {
        get class() {
          return Ze.exit_icon;
        },
        icon: wn
      }));
      return r;
    }
  }), null);
  S(r => {
    const a = Ze.container;
    const l = Ze.icon_container;
    const s = i.info.appInfo.icon;
    const c = Ze.info;
    const _ = Ze.title;
    const f = Ze.description;
    if (a !== r._v$) {
      m(u, r._v$ = a);
    }
    if (l !== r._v$2) {
      m(d, r._v$2 = l);
    }
    if (s !== r._v$3) {
      D(e, "src", r._v$3 = s);
    }
    if (c !== r._v$4) {
      m(t, r._v$4 = c);
    }
    if (_ !== r._v$5) {
      m(n, r._v$5 = _);
    }
    if (f !== r._v$6) {
      m(o, r._v$6 = f);
    }
    return r;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined
  });
  return u;
})();
H(["click"]);
const ho = "_panel_vj37d_1";
const vo = "_isLaptop_vj37d_16";
const go = "_header_vj37d_23";
const mo = "_icon_vj37d_27";
const $o = "_title_vj37d_30";
const po = "_description_vj37d_37";
const Co = "_splitter_vj37d_44";
const yo = "_notifications_list_vj37d_51";
const xo = "_empty_vj37d_62";
const bo = "_notifications_overlay_vj37d_83";
const Lo = "_closed_overlay_vj37d_92";
const ue = {
  panel: ho,
  isLaptop: vo,
  header: go,
  icon: mo,
  title: $o,
  description: po,
  splitter: Co,
  notifications_list: yo,
  empty: xo,
  notifications_overlay: bo,
  closed_overlay: Lo
};
const wo = "_container_tzvun_1";
const ko = "_info_tzvun_10";
const So = "_description_tzvun_22";
const ht = {
  container: wo,
  info: ko,
  description: So
};
const Mo = w("<li><div><p>Clear all notifications");
const Eo = () => (() => {
  const i = Mo();
  const u = i.firstChild;
  const d = u.firstChild;
  d.$$click = () => Wn();
  S(e => {
    const t = ht.container;
    const n = ht.info;
    const o = ht.description;
    if (t !== e._v$) {
      m(i, e._v$ = t);
    }
    if (n !== e._v$2) {
      m(u, e._v$2 = n);
    }
    if (o !== e._v$3) {
      m(d, e._v$3 = o);
    }
    return e;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return i;
})();
H(["click"]);
const Po = w("<ul>");
const Oo = w("<div><div><div><h1>Notifications</h1><p>Keep up to date with everything</div></div><div>");
const No = w("<div>");
const Io = w("<div><h1>Notifications are empty");
const Cn = () => [v(U, {
  get when() {
    return N.openPanel === "notifications";
  },
  get children() {
    const i = Oo();
    const u = i.firstChild;
    const d = u.firstChild;
    const e = d.firstChild;
    const t = e.nextSibling;
    const n = u.nextSibling;
    _e(Pt, i, () => () => re({
      openPanel: undefined
    }));
    $(u, v(Ae, {
      get class() {
        return ue.icon;
      },
      icon: St,
      color: "#FFFFFF"
    }), d);
    $(i, v(U, {
      get when() {
        return N.notifications.length > 0;
      },
      get fallback() {
        return (() => {
          const o = Io();
          const r = o.firstChild;
          $(o, v(Ae, {
            get class() {
              return ue.icon;
            },
            icon: an
          }), r);
          S(() => m(o, ue.empty));
          return o;
        })();
      },
      get children() {
        const o = Po();
        $(o, v(Eo, {}), null);
        $(o, v(J, {
          get each() {
            return N.notifications;
          },
          children: r => v(Ht, {
            info: r,
            get laptopOpen() {
              return N.show;
            }
          })
        }), null);
        S(() => m(o, ue.notifications_list));
        return o;
      }
    }), null);
    S(o => {
      const r = ue.panel;
      const a = {
        [ue.isLaptop]: N.isLaptop
      };
      const l = ue.header;
      const s = ue.info;
      const c = ue.title;
      const _ = ue.description;
      const f = ue.splitter;
      if (r !== o._v$) {
        m(i, o._v$ = r);
      }
      o._v$2 = Z(i, a, o._v$2);
      if (l !== o._v$3) {
        m(u, o._v$3 = l);
      }
      if (s !== o._v$4) {
        m(d, o._v$4 = s);
      }
      if (c !== o._v$5) {
        m(e, o._v$5 = c);
      }
      if (_ !== o._v$6) {
        m(t, o._v$6 = _);
      }
      if (f !== o._v$7) {
        m(n, o._v$7 = f);
      }
      return o;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return i;
  }
}), v(U, {
  get when() {
    return N.openPanel !== "notifications";
  },
  get children() {
    const i = No();
    $(i, v(J, {
      get each() {
        return N.notifications;
      },
      children: u => v(U, {
        get when() {
          return !u.expired;
        },
        get children() {
          return v(Ht, {
            info: u,
            get laptopOpen() {
              return N.show;
            }
          });
        }
      })
    }));
    S(u => {
      const d = ue.notifications_overlay;
      const e = {
        [ue.closed_overlay]: !N.show
      };
      if (d !== u._v$8) {
        m(i, u._v$8 = d);
      }
      u._v$9 = Z(i, e, u._v$9);
      return u;
    }, {
      _v$8: undefined,
      _v$9: undefined
    });
    return i;
  }
})];
const Ao = "_container_15747_1";
const To = "_icons_container_15747_6";
const Ro = "_item_15747_19";
const Do = "_hidden_15747_27";
const Bo = "_bottom_bar_15747_30";
const nt = {
  container: Ao,
  icons_container: To,
  item: Ro,
  hidden: Do,
  bottom_bar: Bo
};
const jo = "_container_5wwqe_1";
const zo = "_center_container_5wwqe_13";
const Go = "_header_5wwqe_21";
const Fo = "_description_5wwqe_53";
const Uo = "_content_5wwqe_61";
const Zo = "_input_container_5wwqe_80";
const Ho = "_confirm_5wwqe_103";
const Me = {
  container: jo,
  center_container: zo,
  header: Go,
  description: Fo,
  content: Uo,
  input_container: Zo,
  confirm: Ho
};
const qo = "" + new URL("security-0e092e66.png", import.meta.url).href;
const Vo = w("<div><div><div><img alt=\"\"><div class=\"flex flex-col items-start justify-center\"><p>Computer</p><h1>Security</div><div>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</div></div><div><div class=\"flex w-full flex-col items-start justify-start gap-[0.5vh]\"><h1>Your Login</h1><div><input type=\"text\" placeholder=\"Username\"></div></div><div class=\"flex w-full flex-col items-start justify-start gap-[0.5vh]\"><h1>Your Password</h1><div><input type=\"password\" placeholder=\"Password\"></div></div><div>Login");
const Wo = () => (() => {
  const i = Vo();
  const u = i.firstChild;
  const d = u.firstChild;
  const e = d.firstChild;
  const t = e.nextSibling;
  const n = t.nextSibling;
  const o = d.nextSibling;
  const r = o.firstChild;
  const a = r.firstChild;
  const l = a.nextSibling;
  const s = r.nextSibling;
  const c = s.firstChild;
  const _ = c.nextSibling;
  const f = s.nextSibling;
  D(e, "src", qo);
  D(e, "draggable", false);
  S(h => {
    const g = Me.container;
    const y = Me.center_container;
    const p = Me.header;
    const x = Me.description;
    const C = Me.content;
    const k = Me.input_container;
    const b = Me.input_container;
    const M = Me.confirm;
    if (g !== h._v$) {
      m(i, h._v$ = g);
    }
    if (y !== h._v$2) {
      m(u, h._v$2 = y);
    }
    if (p !== h._v$3) {
      m(d, h._v$3 = p);
    }
    if (x !== h._v$4) {
      m(n, h._v$4 = x);
    }
    if (C !== h._v$5) {
      m(o, h._v$5 = C);
    }
    if (k !== h._v$6) {
      m(l, h._v$6 = k);
    }
    if (b !== h._v$7) {
      m(_, h._v$7 = b);
    }
    if (M !== h._v$8) {
      m(f, h._v$8 = M);
    }
    return h;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined,
    _v$7: undefined,
    _v$8: undefined
  });
  return i;
})();
const Qo = "_container_h9loz_1";
const Yo = "_header_h9loz_10";
const Ko = "_tab_h9loz_22";
const Jo = "_remove_h9loz_34";
const Xo = "_active_h9loz_45";
const er = "_logo_h9loz_48";
const tr = "_name_h9loz_53";
const nr = "_button_h9loz_61";
const ir = "_inner_h9loz_80";
const Ce = {
  container: Qo,
  header: Yo,
  tab: Ko,
  remove: Jo,
  active: Xo,
  logo: er,
  name: tr,
  button: nr,
  inner: ir
};
const or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfMSURBVHgB7VdNiGVHFT5Vdd9vdzozPcaAmaCiC0GMEQISEkNw507FhaC4VRdxpQshIL3UlboUEUEXYmQcQ5jISJzRCZgZE8GQzEwck3RnMt3z03/vdd//qjqec6rq9nvTjboN5D6Ke29V3aqvzvnOd84DeP86+lJHvOO5HzyZjT47Gi+V+wuLenW8uHhsnDf98cAWA9VDZWueV46884PW4gI61TNgoGkq0A1m4NXQoe87hAy99qryZz/xvduv/k8wr/320eX7T4x/Xe+89QjU9bJrrXGWEDkHCunim0dwqMDTi3dhjDYE6feeOhCU53Ee0zTGXSgNlALrfVXkC49//qebr/w3MNnSoPlus3PnC20+gXbqwTa0Fm/EC6Oiy4DWfdBmAGAyQKMJB22oenSnvozGsiENDWm8TwDJMEBjQPPIWkj3rC6HS8N7n7r2z28//fGHHlqnRf2Rltk4/elzzd76k6iXAR7+GahsiTahTQkA7UIH02CtJYCenoNX+c6n5r7UUl+6c3NkQWepkTl5DlOABnZc2/7wsSee+NEhyyBmGeM0iw9APTzJ08GSn3zrod9n64SNtNbdJmJ+gO4+C44vBs9AZsHGMeWdo1PDJ490kyJ7kzvELWG+707IANKiafO7waSxtKFYI36TLJrmybdsRe//fSQYJALw6ZFJ52hBCIv1er1ugbuBHNVmgXSNLRQP6CUgODJaUG7/nbd///AxLO1AO6c3i93JI9/cKDLayrBv+IAcGfQEWZbJqdg66cSzmx4FjjdP7rEMpM1h2b8Ei9vPg9tZJwwtHZYtQ1az7pd7LjgBLIKh5wvfOf5UptAoiRyJINqYmjGmAzLr+//HKgxIt3fgo/gstFfPw3RzIlIgEcrWp+ZFCoQWStblZ2u+RG4CrRDiidnH4ZQMiBdOfp8FkzhyNxie2/Nb8BH/O5i8eg6aaSG6xEuLPsn88MyiFAwQQOaN2s3oXXEEceNbIi1/2JJpU3h6WciFj2HGSo6FjwE7uMdfhQ+Vz8HulZehyRvwSfyibonAY9wIOi2TO408R6GNKjCFO+g3E0Ft24jvx80bZLQN0K4guzIJS9C+pdM1BIburoS+uwFqsg7bm/vgahR1DpvOXGIWchEmcF2XL9vFi5kKqk694cRaBb40DW1U34aTzS/AXr8IrqhlIkZze4ci+x4D+Qt+pzFnMVrkcGMQEN2QrMJX69WVL/9q40qW7JW4wH7nZ9s6WC5PQ/Puy2DzUjYKRMeYg2Zc4A/ApY2haykXY3SxPEUgwQDK4fmoM5SAaEHeTKmwAZMXXQ69vavQlLnojyTGaAWI+7CIiLW8jpGCMXyVzOdxCQiIqQLnXYfxnWj/rIBJRYSQl/KQotCq6xp6xZug6i0BSSMQq4soYERufRL06Dj4bAHM4B4ywJCm9sGMTsBgTIpP+c1RIu1Tcp28+GNQxbvCRwHcuYgyOtHz4p8nfw1gYD7ds3X4o2H9OrTF9JACC7SPfQMeePxpqJuaBrScmOguEeV8CnWWCAZObr/vBdBrNyIQ7EKcrUkf/mVlFSoBoxA6B/PHPKltLBxzb4KtyhDywnDV8cGXm7B76xoU+zlNLmjeHthyG7Ahl1L0ubqg530KNnovtiG7+Xdmb1irawFU1eo/HOSmCEXm+qCU/YbCuHwnFlC+WyT5E6+fgWL1DAFB4QQPGgy8YxJrDKnFxEN0x8XkchDN4kiclv5vHRjohEdJ7ZJlhsL4DWrb0SIHyhkIzJxCaFyPDtCXAsvrMTXizGBMxdcIVH+RKDOWb8zaWdKnfK7O8T4psVn92jP5pQ6MirBDSkDJ2gvEF1fWc1oQTEKn+vAX4finvgWVJXFkynGpIURTM1ECkgPY7btn98mSf+r6g/wHUWzRX4KZKxP2RTJpbaAlf5viiqQCSL4NCSBMypYpik5QMiFekEJbqs5tnYOvJtSmwhXLcsB8KbfA3HplLgCkXEkWatQz82BQH+QHOp3hkG52ZHufJFs0I4Bxl38OW/86TSSl3EPkNZQOFEZ+xMLcYFDmxLUgTapzkTQ0OCnvJWaXME9gQeulGBo3l8EW+5FseKCoEKp/pancbm9Lqe3Yt1qFxVU4jKiRD9KPnQwn9aa5Um1pztwvff3UxtqcZUICD6jBkP+nr5OZy672SOQVpezdD/CBz0BNxEU1IsEbyj8As0okzVchqYTUJ4fID3Oa1djsAtx1ZcLZ6Aas6MTFNSq+QsEjeUWEKeSe0edWYOHBx6Ak/eF3LsRY4IoeRdM/fhKsIlZWM4TVMbGmGluJhVqnTh0Co7TyKQsPqjWKommXdSFUY51a7r92CvLNO1AVu+AqciURF4hfZv0C8SQQHWe+6YTSp3AO743DW1/5zfTSITA03nBct9UujHZfJEHdCx+mxBfvDMzc+CO4t8/IR72YxVMB5Tv3qPl+F/rSnccsqufhiCuztbq88METj2aTHfBrL0CxZYML3EzNKnkm/h2hfq6vZHFxFXY1jAsEFRLyfCf/OABtdBGrMvH9fKOPrZA24CEwN65vfv++JeOqiVq++dZOxdLBG1nOzL5tNGZVi6qgfLenvCno31BBqbFpqd6hifTHo2/RmbytfdXLXFUR0NZlWOJC1bRA86sCSptvuVH+4Fc385UVpvhNhPev9+r1H00VZXG9piz8AAAAAElFTkSuQmCC";
const rr = w("<div class=\"pointer-events-none absolute flex h-full w-full flex-col items-center justify-center\"><div><div><div><div class=\"flex h-[1.4vh] w-[1.4vh] flex-col items-center justify-center\"><svg width=\"1.01vh\" height=\"1.01vh\" viewBox=\"0 0 11 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4.39999\" width=\"2.2\" height=\"11\" fill=\"white\"></rect><rect x=\"11\" y=\"4.40039\" width=\"2.2\" height=\"11\" transform=\"rotate(90 11 4.40039)\" fill=\"white\"></div></div><div class=\"flex flex-1 flex-col items-center justify-end\"><div><svg width=\"1.2vh\" height=\"1.2vh\" viewBox=\"0 0 13 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1L6.5 6.5M1 12L6.5 6.5M6.5 6.5L1 1L12 12\" stroke=\"white\" stroke-width=\"1.5\"></div></div></div><div>");
const sr = w("<div><img><h1></h1><svg width=\"0.9259vh\" height=\"0.9259vh\" viewBox=\"0 0 13 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1L6.5 6.5M1 12L6.5 6.5M6.5 6.5L1 1L12 12\" stroke=\"white\" stroke-width=\"1.5\">");
const lr = i => {
  let u = {
    x: 0,
    y: 0
  };
  return v(dn, {
    onDragMove: ({
      draggable: t
    }) => {
      u = {
        ...t.transform
      };
    },
    onDragEnd: ({
      draggable: t
    }) => {
      const n = t.node;
      n.style.setProperty("top", n.offsetTop + u.y + "px");
      n.style.setProperty("left", n.offsetLeft + u.x + "px");
    },
    get children() {
      return [v(un, {}), v(ar, i)];
    }
  });
};
const ar = i => {
  const u = kn(i.name);
  const d = j(() => Qe(i.name));
  const [e, t] = ze([{
    name: d()?.label ?? d()?.name,
    icon: d()?.icon ?? gn,
    component: i.children
  }]);
  const [n, o] = F(0);
  const [r, a] = F(false);
  return (() => {
    const l = rr();
    const s = l.firstChild;
    const c = s.firstChild;
    const _ = c.firstChild;
    const f = _.nextSibling;
    const h = f.firstChild;
    const g = c.nextSibling;
    const y = u.ref;
    if (typeof y == "function") {
      _e(y, s);
    } else {
      u.ref = s;
    }
    $(s, v(Sn, {
      position: "top-center"
    }), c);
    Mn(c, ct({
      get class() {
        return Ce.header;
      }
    }, () => u.dragActivators, {
      get style() {
        return {
          "background-color": i.headerColor
        };
      }
    }), false, true);
    $(c, v(J, {
      each: e,
      children: (p, x) => (() => {
        const C = sr();
        const k = C.firstChild;
        const b = k.nextSibling;
        const M = b.nextSibling;
        C.$$click = () => {
          if (!r()) {
            o(x());
          }
        };
        $(b, () => p.name);
        M.addEventListener("mouseleave", () => a(false));
        M.addEventListener("mouseenter", () => a(true));
        M.$$click = () => {
          o(e.length - 2);
          t(e.filter((I, B) => B !== x()));
          if (e.length === 0) {
            Ft(i.name);
          }
        };
        S(I => {
          const B = Ce.tab;
          const z = {
            [Ce.active]: x() === n()
          };
          const T = Ce.logo;
          const Q = p.icon;
          const q = Ce.name;
          const ee = Ce.remove;
          if (B !== I._v$8) {
            m(C, I._v$8 = B);
          }
          I._v$9 = Z(C, z, I._v$9);
          if (T !== I._v$10) {
            m(k, I._v$10 = T);
          }
          if (Q !== I._v$11) {
            D(k, "src", I._v$11 = Q);
          }
          if (q !== I._v$12) {
            m(b, I._v$12 = q);
          }
          if (ee !== I._v$13) {
            D(M, "class", I._v$13 = ee);
          }
          return I;
        }, {
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined,
          _v$13: undefined
        });
        return C;
      })()
    }), _);
    _.$$click = () => {
      const p = Qe("explorer-laptop");
      if (p) {
        o(e.length);
        t([...e, {
          name: "New Tab",
          icon: or,
          component: Ot(() => p.render({
            onClick: async x => {
              const C = Qe(x);
              if (!!C && !!(await _n(C))) {
                t(b => {
                  const M = [...b];
                  M[n()] = {
                    name: C.label,
                    icon: C.icon,
                    component: Ot(() => C.render())
                  };
                  return M;
                });
              }
            }
          }))
        }]);
      }
    };
    h.$$click = () => {
      Ft(i.name);
    };
    $(g, () => e[n()]?.component);
    S(p => {
      const x = Ce.container;
      const C = !!u.isActiveDraggable;
      const k = En(u.transform);
      const b = Ce.tab;
      const M = {
        [Ce.plus]: true
      };
      const I = Ce.button;
      const B = `${Ce.inner} ${i.classes}`;
      if (x !== p._v$) {
        m(s, p._v$ = x);
      }
      if (C !== p._v$2) {
        s.classList.toggle("opacity-98", p._v$2 = C);
      }
      p._v$3 = cn(s, k, p._v$3);
      if (b !== p._v$4) {
        m(_, p._v$4 = b);
      }
      p._v$5 = Z(_, M, p._v$5);
      if (I !== p._v$6) {
        m(h, p._v$6 = I);
      }
      if (B !== p._v$7) {
        m(g, p._v$7 = B);
      }
      return p;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return l;
  })();
};
H(["click"]);
const cr = w("<section>");
const qt = w("<div>");
const ur = () => {
  const i = j(() => Je.filter(u => !u.onDock && fn(u.name) && (N.isLaptop ? u.isLaptop : !u.isLaptop) && (u.isVisible ? u.isVisible() : true)));
  return (() => {
    const u = qt();
    $(u, v(J, {
      each: Je,
      children: d => v(we, {
        get children() {
          return [v(te, {
            get when() {
              return N.openApplications.includes(d.name) && !N.isLaptop;
            },
            get children() {
              return v(d.render, {});
            }
          }), v(te, {
            get when() {
              return N.openApplications.includes(d.name) && N.isLaptop;
            },
            get children() {
              return v(lr, {
                get name() {
                  return d.name;
                },
                get children() {
                  return v(d.render, {});
                }
              });
            }
          })];
        }
      })
    }), null);
    $(u, v(U, {
      get when() {
        return N.isLogin;
      },
      get children() {
        return v(Wo, {});
      }
    }), null);
    $(u, v(U, {
      get when() {
        return !N.isLogin;
      },
      get children() {
        return [(() => {
          const d = cr();
          $(d, v(J, {
            get each() {
              return i();
            },
            children: e => (() => {
              const t = qt();
              $(t, v(U, {
                when: e,
                get children() {
                  return v(vn, {
                    appInfo: e
                  });
                }
              }));
              S(n => {
                const o = nt.item;
                const r = {
                  [nt.hidden]: !N.show
                };
                if (o !== n._v$) {
                  m(t, n._v$ = o);
                }
                n._v$2 = Z(t, r, n._v$2);
                return n;
              }, {
                _v$: undefined,
                _v$2: undefined
              });
              return t;
            })()
          }));
          S(() => m(d, nt.icons_container));
          return d;
        })(), v(ji, {})];
      }
    }), null);
    $(u, v(Cn, {}), null);
    $(u, v(U, {
      get when() {
        return N.openPanel === "settings";
      },
      get children() {
        return v(ro, {
          onClose: () => re({
            openPanel: undefined
          })
        });
      }
    }), null);
    $(u, v(U, {
      get when() {
        return N.openPanel === "wifi";
      },
      get children() {
        return v(ui, {
          onClose: () => re({
            openPanel: undefined
          })
        });
      }
    }), null);
    S(() => m(u, nt.container));
    return u;
  })();
};
const dr = "" + new URL("logo-4dd0c720.svg", import.meta.url).href;
const _r = "_wrapper_op8pk_1";
const fr = "_isLaptop_op8pk_12";
const hr = "_container_op8pk_27";
const vr = "_wallpaper_op8pk_34";
const gr = "_wallpaper_logo_op8pk_35";
const mr = "_wallpaper_custom_op8pk_55";
const Ee = {
  wrapper: _r,
  isLaptop: fr,
  container: hr,
  wallpaper: vr,
  wallpaper_logo: gr,
  wallpaper_custom: mr
};
const $r = "" + new URL("wallpaper-ceaac172.png", import.meta.url).href;
const vt = w("<img alt=\"\">");
const pr = w("<div><div><img alt=\"\">");
const Cr = i => {
  le(async () => {
    if (!Xn()) {
      await hn();
    }
  });
  return (() => {
    const u = pr();
    const d = u.firstChild;
    const e = d.firstChild;
    $(d, v(ur, {}), e);
    $(d, v(U, {
      get when() {
        return Ye.wallpaper && N.overwriteWallpaper.length <= 0;
      },
      get children() {
        const t = vt();
        S(n => {
          const o = `${Ee.wallpaper} ${Ee.wallpaper_custom}`;
          const r = Ye.wallpaper;
          if (o !== n._v$) {
            m(t, n._v$ = o);
          }
          if (r !== n._v$2) {
            D(t, "src", n._v$2 = r);
          }
          return n;
        }, {
          _v$: undefined,
          _v$2: undefined
        });
        return t;
      }
    }), e);
    $(d, v(U, {
      get when() {
        return N.overwriteWallpaper.length > 0;
      },
      get children() {
        const t = vt();
        S(n => {
          const o = Ee.wallpaper;
          const r = N.overwriteWallpaper;
          if (o !== n._v$3) {
            m(t, n._v$3 = o);
          }
          if (r !== n._v$4) {
            D(t, "src", n._v$4 = r);
          }
          return n;
        }, {
          _v$3: undefined,
          _v$4: undefined
        });
        return t;
      }
    }), e);
    $(d, v(U, {
      get when() {
        return N.isLaptop;
      },
      get children() {
        const t = vt();
        D(t, "src", $r);
        S(() => m(t, Ee.wallpaper));
        return t;
      }
    }), e);
    D(e, "src", dr);
    S(t => {
      const n = Ee.wrapper;
      const o = {
        [Ee.isLaptop]: N.isLaptop
      };
      const r = Ee.container;
      const a = Ee.wallpaper_logo;
      if (n !== t._v$5) {
        m(u, t._v$5 = n);
      }
      t._v$6 = Z(u, o, t._v$6);
      if (r !== t._v$7) {
        m(d, t._v$7 = r);
      }
      if (a !== t._v$8) {
        m(e, t._v$8 = a);
      }
      return t;
    }, {
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined
    });
    return u;
  })();
};
const Mt = new Map();
function ju(i, u, d) {
  const e = Mt.get(i) ?? new Map();
  e.set(u, d);
  Mt.set(i, e);
}
function yr(i, u, d) {
  const e = Mt.get(i);
  if (!e) {
    return;
  }
  const t = e.get(u);
  if (t) {
    t(d);
  }
}
const xr = w("<div class=\"laptop-container flex flex-col items-center justify-center\">");
const br = w("<div class=\"laptop-container flex h-full flex-col items-center justify-center\">");
const [N, re] = ze(Zn);
const Lr = () => {
  re({
    ...N,
    show: false,
    openPanel: undefined,
    openApplications: []
  });
  A.execute("close");
};
const zu = () => {
  const [i, u] = F(false);
  const d = n => {
    if (n.key === "Escape" && N.show) {
      Lr();
    }
  };
  const e = n => {
    if (N.show) {
      if (n.clientY < 20 && !i()) {
        document.body.style.opacity = "0.4";
        u(true);
      } else if (n.clientY > 20 && i()) {
        document.body.style.opacity = "1";
        u(false);
      }
    }
  };
  le(async () => {
    await Yn();
    const n = async o => {
      const r = o;
      if (o.type === "refreshCharacterInfo") {
        await hn();
      } else {
        re({
          ...N,
          ...r
        });
        if (r.show) {
          if (N.isLaptop !== r.isLaptop) {
            re("openApplications", []);
          }
          re("isLaptop", r.isLaptop ?? false);
          Jn();
        }
      }
    };
    A.register("setState", n);
    document.addEventListener("keydown", d);
    document.addEventListener("mousemove", e);
    A.register("add-application-notification", async (o, r) => K(o, r));
    A.register("application-event", async (o, r, a) => yr(o, r, a));
  });
  ke(() => {
    document.removeEventListener("keydown", d);
    document.removeEventListener("mousemove", e);
  });
  const t = j(() => Ye.popupNotifications ? N.notifications.filter(n => !n.expired).length > 0 && !N.isLaptop : false);
  return [v(Nt.div, {
    class: "laptop-container",
    initial: {
      transform: "translateY(120%)"
    },
    get animate() {
      return {
        transform: N.show ? "translateY(0%)" : "translateY(120%)"
      };
    },
    transition: {
      duration: 0.7
    },
    get children() {
      const n = xr();
      $(n, v(Cr, {}));
      return n;
    }
  }), v(Nt.div, {
    class: "laptop-container !absolute top-0",
    initial: {
      transform: "translateY(120%)"
    },
    get animate() {
      return {
        transform: t() && !N.show ? "translateY(83%)" : "translateY(120%)"
      };
    },
    transition: {
      duration: 0.7
    },
    get children() {
      const n = br();
      $(n, v(Cn, {}));
      return n;
    }
  })];
};
const wr = "_header_ljtau_1";
const kr = "_description_ljtau_33";
const Sr = "_button_ljtau_42";
const Vt = {
  header: wr,
  description: kr,
  button: Sr
};
const Mr = w("<div><img alt=\"\"><div class=\"flex flex-col items-start justify-center\"><p>Application</p><h1></div><div>");
const Er = i => {
  const u = Qe(i.name);
  return (() => {
    const d = Mr();
    const e = d.firstChild;
    const t = e.nextSibling;
    const n = t.firstChild;
    const o = n.nextSibling;
    const r = t.nextSibling;
    D(e, "draggable", false);
    $(o, () => u?.label);
    $(r, () => u?.description);
    $(d, () => i.children, null);
    S(a => {
      const l = Vt.header;
      const s = u?.icon;
      const c = Vt.description;
      if (l !== a._v$) {
        m(d, a._v$ = l);
      }
      if (s !== a._v$2) {
        D(e, "src", a._v$2 = s);
      }
      if (c !== a._v$3) {
        m(r, a._v$3 = c);
      }
      return a;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return d;
  })();
};
const Pr = "" + new URL("hideout-6796054f.png", import.meta.url).href;
const Or = "_container_so7e5_1";
const Nr = "_spin_so7e5_1";
const Ir = "_divider_so7e5_40";
const gt = {
  container: Or,
  spin: Nr,
  divider: Ir
};
const Ar = w("<div><div class=\"flex w-full flex-row items-center justify-between\"><div>//////</div><div class=\"flex flex-col items-center justify-center\"><h1>HIDEOUT IS LOADING</h1><i class=\"fa-duotone fa-loader\"></i></div><div>//////</div></div><svg width=\"81.66vh\" height=\"29.72vh\" viewBox=\"0 0 882 321\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M882 441C882 383.087 870.593 325.741 848.431 272.237C826.269 218.732 793.785 170.117 752.834 129.166C711.883 88.2153 663.268 55.7314 609.763 33.5691C556.259 11.4068 498.913 -2.53146e-06 441 0C383.087 2.53146e-06 325.741 11.4068 272.237 33.5691C218.732 55.7315 170.117 88.2153 129.166 129.166C88.2153 170.117 55.7314 218.732 33.5691 272.237C11.4068 325.741 -5.06291e-06 383.087 0 441H2.14703C2.14703 383.369 13.4983 326.302 35.5527 273.058C57.6071 219.814 89.9328 171.435 130.684 130.684C171.435 89.9328 219.814 57.6072 273.058 35.5527C326.302 13.4983 383.369 2.14704 441 2.14703C498.631 2.14703 555.698 13.4983 608.942 35.5527C662.186 57.6071 710.565 89.9328 751.316 130.684C792.067 171.435 824.393 219.814 846.447 273.058C868.502 326.302 879.853 383.369 879.853 441H882Z\" fill=\"white\" fill-opacity=\"0.06\"></path><path d=\"M795 441C795 393.987 785.74 347.434 767.749 303.999C749.758 260.565 723.388 221.099 690.144 187.856C656.901 154.612 617.435 128.242 574.001 110.251C530.566 92.2599 484.013 83 437 83C389.987 83 343.434 92.2599 299.999 110.251C256.565 128.242 217.099 154.612 183.856 187.856C150.612 221.099 124.242 260.565 106.251 303.999C88.2599 347.434 79 393.987 79 441H80.743C80.7429 394.216 89.9578 347.889 107.861 304.666C125.765 261.443 152.007 222.17 185.088 189.088C218.17 156.007 257.443 129.765 300.666 111.861C343.889 93.9578 390.216 84.743 437 84.743C483.784 84.7429 530.111 93.9578 573.334 111.861C616.557 129.765 655.83 156.007 688.912 189.088C721.993 222.17 748.235 261.443 766.139 304.666C784.042 347.889 793.257 394.216 793.257 441H795Z\" fill=\"white\" fill-opacity=\"0.03\"></path><g filter=\"url(#filter0_d_8331_2)\"><path d=\"M342.683 95.6476C316.662 102.754 291.527 112.779 267.757 125.531L268.581 127.067C292.235 114.377 317.248 104.401 343.142 97.329L342.683 95.6476Z\" fill=\"white\"></g><path d=\"M709 441.5C709 405.715 701.952 370.28 688.257 337.219C674.563 304.158 654.491 274.117 629.187 248.813C603.883 223.509 573.842 203.437 540.781 189.743C507.72 176.048 472.285 169 436.5 169C400.715 169 365.28 176.048 332.219 189.743C299.158 203.437 269.117 223.509 243.813 248.813C218.509 274.117 198.437 304.158 184.743 337.219C171.048 370.28 164 405.715 164 441.5H165.327C165.327 405.889 172.341 370.627 185.969 337.726C199.596 304.826 219.571 274.932 244.752 249.752C269.932 224.571 299.826 204.596 332.726 190.969C365.627 177.341 400.889 170.327 436.5 170.327C472.111 170.327 507.373 177.341 540.274 190.969C573.174 204.596 603.068 224.571 628.248 249.752C653.429 274.932 673.404 304.826 687.031 337.726C700.659 370.627 707.673 405.889 707.673 441.5H709Z\" fill=\"white\" fill-opacity=\"0.06\"></path><g filter=\"url(#filter1_d_8331_2)\"><path d=\"M261.907 232.279C254.674 238.315 247.759 244.722 241.189 251.474L242.14 252.399C248.678 245.68 255.559 239.304 262.757 233.298L261.907 232.279Z\" fill=\"white\"></g><g filter=\"url(#filter2_d_8331_2)\"><circle cx=\"44.5\" cy=\"251.5\" r=\"5.5\" fill=\"#00F8B9\"></g><g filter=\"url(#filter3_d_8331_2)\"><circle cx=\"256.5\" cy=\"40.5\" r=\"5.5\" fill=\"#00F8B9\"></g><g filter=\"url(#filter4_d_8331_2)\"><circle cx=\"579.5\" cy=\"209.5\" r=\"5.5\" fill=\"#00F8B9\"></g><defs><filter id=\"filter0_d_8331_2\" x=\"222.158\" y=\"50.0477\" width=\"166.585\" height=\"122.619\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"22.8\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_8331_2\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_8331_2\" result=\"shape\"></filter><filter id=\"filter1_d_8331_2\" x=\"195.589\" y=\"186.679\" width=\"112.767\" height=\"111.32\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"22.8\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_8331_2\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_8331_2\" result=\"shape\"></filter><filter id=\"filter2_d_8331_2\" x=\"27.9\" y=\"234.9\" width=\"33.2\" height=\"33.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"5.55\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 0.55 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_8331_2\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_8331_2\" result=\"shape\"></filter><filter id=\"filter3_d_8331_2\" x=\"239.9\" y=\"23.9\" width=\"33.2\" height=\"33.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"5.55\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 0.55 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_8331_2\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_8331_2\" result=\"shape\"></filter><filter id=\"filter4_d_8331_2\" x=\"562.9\" y=\"192.9\" width=\"33.2\" height=\"33.2\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"5.55\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 0.55 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_8331_2\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_8331_2\" result=\"shape\">");
const Re = () => (() => {
  const i = Ar();
  const u = i.firstChild;
  const d = u.firstChild;
  const e = d.nextSibling;
  const t = e.nextSibling;
  S(n => {
    const o = gt.container;
    const r = gt.divider;
    const a = gt.divider;
    if (o !== n._v$) {
      m(i, n._v$ = o);
    }
    if (r !== n._v$2) {
      m(d, n._v$2 = r);
    }
    if (a !== n._v$3) {
      m(t, n._v$3 = a);
    }
    return n;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return i;
})();
function Tr() {
  const {
    config: i,
    group: u
  } = W();
  if (!u() || !i()) {
    return null;
  }
  const d = i().influenceLevels;
  const e = u()?.level ?? 0;
  const t = d[e + 1];
  return t || null;
}
function Rr() {
  const {
    group: i,
    config: u
  } = W();
  if (!i() || !u()) {
    return null;
  }
  const d = i().influence;
  const e = Tr();
  if (!e) {
    return 100;
  }
  const o = u().influenceLevels[i().level].required;
  const r = e.required;
  return Math.round((d - o) / (r - o) * 100);
}
const Dr = "_main_bg_1r3wx_1";
const Br = "_container_1r3wx_38";
const jr = "_headerContainer_1r3wx_76";
const zr = "_progressContainer_1r3wx_105";
const Gr = "_progress_1r3wx_105";
const Fr = "_dailyLimit_1r3wx_119";
const He = {
  main_bg: Dr,
  container: Br,
  headerContainer: jr,
  progressContainer: zr,
  progress: Gr,
  dailyLimit: Fr
};
const Ur = "_container_vfd6o_1";
const Zr = {
  container: Ur
};
const Hr = w("<i class=\"fa-solid fa-square-chevron-left\">");
const qr = w("<div><div class=\"flex flex-row items-center justify-start gap-[1vh]\"><h1>HIDEOUT</h1><p>");
const $e = i => {
  const {
    page: u,
    setPage: d
  } = W();
  return (() => {
    const e = qr();
    const t = e.firstChild;
    const n = t.firstChild;
    const o = n.nextSibling;
    $(t, v(U, {
      get when() {
        return u() !== "home";
      },
      get children() {
        const r = Hr();
        r.$$click = () => {
          d("home");
        };
        return r;
      }
    }), n);
    $(o, () => xn[u()].label);
    $(e, v(U, {
      get when() {
        return i.children;
      },
      get children() {
        return i.children;
      }
    }), null);
    S(() => m(e, Zr.container));
    return e;
  })();
};
H(["click"]);
const Vr = "_cart_i3s3a_1";
const Wr = "_item_i3s3a_32";
const Qr = "_box_i3s3a_43";
const Yr = "_text_i3s3a_57";
const Kr = "_price_i3s3a_66";
const Jr = "_button_i3s3a_74";
const Xr = "_plus_i3s3a_92";
const es = "_indicator_i3s3a_110";
const ts = "_paymentContainer_i3s3a_130";
const ns = "_active_i3s3a_179";
const de = {
  cart: Vr,
  item: Wr,
  box: Qr,
  text: Yr,
  price: Kr,
  button: Jr,
  plus: Xr,
  delete: "_delete_i3s3a_101",
  indicator: es,
  paymentContainer: ts,
  active: ns
};
const is = w("<div><h1>Cart</h1><p> Items in Cart</p><div class=\"flex h-full w-full max-w-full flex-col items-start justify-start gap-[0.9vh] overflow-y-auto overflow-x-hidden pr-[1vh] pt-[1vh]\"></div><div><div class=\"justify-starty flex flex-col items-start gap-[0.5vh]\"><h2>Total</h2><p> NUTC</div><div>Purchase");
const os = w("<div><div class=\"flex w-2/3 flex-shrink-0 flex-row items-center justify-start gap-[0.5vh]\"><div><img></div><div class=\"flex w-3/5 flex-shrink-0 flex-col items-start justify-center gap-1\"><div></div><div> NUTC</div></div></div><div class=\"ml-auto flex flex-shrink-0 flex-row items-start justify-end gap-1\"><div><i class=\"fa-sharp fa-minus\"></i></div><div><i class=\"fa-sharp fa-plus\"></i></div><div><i class=\"fa-sharp fa-trash\"></i></div><div>x");
const rs = () => {
  const {
    blackMarketCartResource: i,
    blackMarketItemsResource: u
  } = W();
  const [d] = u;
  const [e, {
    refetch: t
  }] = i;
  le(() => {
    t();
  });
  const n = j(() => {
    const a = [];
    if (!d() || !e()) {
      return a;
    }
    for (const l of e()) {
      const s = d().find(c => c.id === l.itemId && l.variant ? c.variant === l.variant : !l.variant);
      if (s) {
        a.push({
          ...s,
          quantity: l.quantity
        });
      }
    }
    return a;
  });
  const o = j(() => {
    let a = 0;
    for (const l of n()) {
      a += l.price * l.quantity;
    }
    return a;
  });
  const r = j(() => {
    let a = 0;
    for (const l of e()) {
      a += l.quantity;
    }
    return a;
  });
  return (() => {
    const a = is();
    const l = a.firstChild;
    const s = l.nextSibling;
    const c = s.firstChild;
    const _ = s.nextSibling;
    const f = _.nextSibling;
    const h = f.firstChild;
    const g = h.firstChild;
    const y = g.nextSibling;
    const p = y.firstChild;
    const x = h.nextSibling;
    $(s, r, c);
    $(_, v(J, {
      get each() {
        return n();
      },
      children: C => (() => {
        const k = os();
        const b = k.firstChild;
        const M = b.firstChild;
        const I = M.firstChild;
        const B = M.nextSibling;
        const z = B.firstChild;
        const T = z.nextSibling;
        const Q = T.firstChild;
        const q = b.nextSibling;
        const ee = q.firstChild;
        const fe = ee.nextSibling;
        const he = fe.nextSibling;
        const E = he.nextSibling;
        E.firstChild;
        D(I, "draggable", false);
        $(z, () => C.name);
        $(T, () => C.price, Q);
        ee.$$click = async () => {
          await A.execute("hideout:black-market:addToCart", C.id, C.variant, -1);
          t();
        };
        fe.$$click = async () => {
          await A.execute("hideout:black-market:addToCart", C.id, C.variant, 1);
          t();
        };
        he.$$click = async () => {
          await A.execute("hideout:black-market:removeFromCart", C.id, C.variant);
          t();
        };
        $(E, () => C.quantity, null);
        S(P => {
          const G = de.item;
          const O = de.box;
          const V = C.image;
          const Y = C.name;
          const ne = de.text;
          const ie = de.price;
          const oe = de.button;
          const Xe = de.button;
          const ve = {
            [de.plus]: true
          };
          const Le = de.button;
          const se = {
            [de.delete]: true
          };
          const ae = de.indicator;
          if (G !== P._v$4) {
            m(k, P._v$4 = G);
          }
          if (O !== P._v$5) {
            m(M, P._v$5 = O);
          }
          if (V !== P._v$6) {
            D(I, "src", P._v$6 = V);
          }
          if (Y !== P._v$7) {
            D(I, "alt", P._v$7 = Y);
          }
          if (ne !== P._v$8) {
            m(z, P._v$8 = ne);
          }
          if (ie !== P._v$9) {
            m(T, P._v$9 = ie);
          }
          if (oe !== P._v$10) {
            m(ee, P._v$10 = oe);
          }
          if (Xe !== P._v$11) {
            m(fe, P._v$11 = Xe);
          }
          P._v$12 = Z(fe, ve, P._v$12);
          if (Le !== P._v$13) {
            m(he, P._v$13 = Le);
          }
          P._v$14 = Z(he, se, P._v$14);
          if (ae !== P._v$15) {
            m(E, P._v$15 = ae);
          }
          return P;
        }, {
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined,
          _v$13: undefined,
          _v$14: undefined,
          _v$15: undefined
        });
        return k;
      })()
    }));
    $(y, () => o().toLocaleString(), p);
    S(C => {
      const k = de.cart;
      const b = de.paymentContainer;
      const M = de.button;
      if (k !== C._v$) {
        m(a, C._v$ = k);
      }
      if (b !== C._v$2) {
        m(f, C._v$2 = b);
      }
      if (M !== C._v$3) {
        m(x, C._v$3 = M);
      }
      return C;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return a;
  })();
};
H(["click"]);
const ss = "_container_1jh5o_1";
const ls = "_button_1jh5o_37";
const as = "_active_1jh5o_56";
const Wt = {
  container: ss,
  button: ls,
  active: as
};
const cs = w("<div><div class=\"flex w-full flex-col items-start justify-start\"><h1></h1><p> NUTC</div><img class=\"mt-[-2.5vh]\"><div class=\"flex w-full flex-col items-start justify-start\"><div>Add To Cart");
const us = i => {
  const {
    blackMarketCartResource: u
  } = W();
  const [d, {
    refetch: e
  }] = u;
  return (() => {
    const t = cs();
    const n = t.firstChild;
    const o = n.firstChild;
    const r = o.nextSibling;
    const a = r.firstChild;
    const l = n.nextSibling;
    const s = l.nextSibling;
    const c = s.firstChild;
    $(o, () => i.label ?? i.name);
    $(r, () => i.price, a);
    D(l, "draggable", false);
    c.$$click = async () => {
      await A.execute("hideout:black-market:addToCart", i.id, i.variant, 1);
      e();
    };
    S(_ => {
      const f = Wt.container;
      const h = i.image;
      const g = i.label ?? i.name;
      const y = Wt.button;
      if (f !== _._v$) {
        m(t, _._v$ = f);
      }
      if (h !== _._v$2) {
        D(l, "src", _._v$2 = h);
      }
      if (g !== _._v$3) {
        D(l, "alt", _._v$3 = g);
      }
      if (y !== _._v$4) {
        m(c, _._v$4 = y);
      }
      return _;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return t;
  })();
};
H(["click"]);
const ds = "_container_cg5fx_1";
const _s = {
  container: ds
};
const fs = w("<div class=\"grid-rows-auto grid h-[80%] w-full auto-rows-max grid-cols-3 gap-y-[0.5vh] overflow-auto\">");
const hs = w("<div><div class=\"flex h-full w-full flex-col items-start justify-start\">");
const vs = () => {
  const {
    blackMarketItemsResource: i
  } = W();
  const [u, {
    refetch: d
  }] = i;
  le(() => {
    d();
  });
  return (() => {
    const e = hs();
    const t = e.firstChild;
    $(t, v($e, {}), null);
    $(t, v(Te, {
      get fallback() {
        return v(Re, {});
      },
      get children() {
        const n = fs();
        $(n, v(J, {
          get each() {
            return u();
          },
          children: o => v(us, o)
        }));
        return n;
      }
    }), null);
    $(e, v(rs, {}), null);
    S(() => m(e, _s.container));
    return e;
  })();
};
const gs = "_container_15x45_1";
const ms = "_contact_15x45_10";
const $s = "_button_15x45_50";
const ps = "_active_15x45_70";
const mt = {
  container: gs,
  contact: ms,
  button: $s,
  active: ps
};
const Cs = w("<div><div class=\"flex h-full w-full flex-col items-center justify-start gap-[0.5vh] overflow-auto pr-[1vh]\">");
const ys = w("<div><div class=\"flex flex-row items-center justify-start gap-[10vh]\"><i class=\"fa-solid fa-user\"></i>Contact #1</div><div>Manage");
const xs = () => (() => {
  const i = Cs();
  const u = i.firstChild;
  $(i, v($e, {}), u);
  $(u, v(J, {
    get each() {
      return Array(25);
    },
    children: () => (() => {
      const d = ys();
      const e = d.firstChild;
      const t = e.nextSibling;
      S(n => {
        const o = mt.contact;
        const r = mt.button;
        if (o !== n._v$) {
          m(d, n._v$ = o);
        }
        if (r !== n._v$2) {
          m(t, n._v$2 = r);
        }
        return n;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return d;
    })()
  }));
  S(() => m(i, mt.container));
  return i;
})();
const bs = "_container_o8ki6_1";
const Ls = "_detailsList_o8ki6_9";
const ws = "_item_o8ki6_24";
const ks = "_required_o8ki6_44";
const Ss = "_detail_o8ki6_9";
const Ms = "_requirements_o8ki6_109";
const We = {
  container: bs,
  detailsList: Ls,
  item: ws,
  required: ks,
  detail: Ss,
  requirements: Ms
};
const Es = w("<div><div>/</div><i></i><div class=\"flex w-full flex-col items-start justify-start\"><h1></h1><p>");
const Ps = w("<div class=\"flex w-full flex-row items-center justify-between\"><div><div class=\"flex h-full w-full flex-col items-start justify-start gap-[0.5vh] overflow-auto\"></div><div class=\"flex w-full flex-col items-start justify-start\"><h1>MATERIALS PER WEEK</h1><p>Control your territories");
const Os = w("<div>");
const Ns = w("<div><div>/");
const Qt = i => (() => {
  const u = Es();
  const d = u.firstChild;
  const e = d.firstChild;
  const t = d.nextSibling;
  const n = t.nextSibling;
  const o = n.firstChild;
  const r = o.nextSibling;
  $(d, () => i.quantity, e);
  $(d, () => i.required, null);
  $(o, () => i.title);
  $(r, () => i.description);
  S(a => {
    const l = We.detail;
    const s = We.requirements;
    const c = i.icon;
    if (l !== a._v$) {
      m(u, a._v$ = l);
    }
    if (s !== a._v$2) {
      m(d, a._v$2 = s);
    }
    if (c !== a._v$3) {
      m(t, a._v$3 = c);
    }
    return a;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return u;
})();
const Is = () => {
  const {
    config: i
  } = W();
  const [u, {
    mutate: d,
    refetch: e
  }] = X(() => A.execute("hideout:storages:getRequirements"));
  return v(Te, {
    get fallback() {
      return v(Re, {});
    },
    get children() {
      const t = Os();
      $(t, v($e, {}), null);
      $(t, v(U, {
        get when() {
          return u();
        },
        get children() {
          const n = Ps();
          const o = n.firstChild;
          const r = o.firstChild;
          $(n, v(Qt, {
            icon: "fa-solid fa-coin-vertical",
            title: "BUTC PER WEEK",
            description: "Control your territories",
            get quantity() {
              return u().butc;
            },
            get required() {
              return i()?.requirements.butc ?? 0;
            }
          }), o);
          $(n, v(Qt, {
            icon: "fa-solid fa-cannabis",
            title: "DRUG PER WEEK",
            description: "Control your territories",
            quantity: 0,
            required: 100
          }), o);
          $(r, v(J, {
            get each() {
              return u().items;
            },
            children: a => (() => {
              const l = Ns();
              const s = l.firstChild;
              const c = s.firstChild;
              $(l, () => a.name, s);
              $(s, () => a.quantity, c);
              $(s, () => i()?.requirements.items[a.id], null);
              S(_ => {
                const f = We.item;
                const h = We.required;
                if (f !== _._v$4) {
                  m(l, _._v$4 = f);
                }
                if (h !== _._v$5) {
                  m(s, _._v$5 = h);
                }
                return _;
              }, {
                _v$4: undefined,
                _v$5: undefined
              });
              return l;
            })()
          }));
          S(() => m(o, We.detailsList));
          return n;
        }
      }), null);
      S(() => m(t, We.container));
      return t;
    }
  });
};
const As = "_container_1umnj_1";
const Ts = {
  container: As
};
const Rs = w("<div><div class=\"flex flex-col items-start justify-start\"><div class=\"flex flex-row items-center justify-start gap-[2vh]\"><i class=\"fa-thin fa-circle-exclamation\"></i><i class=\"fa-thin fa-circle-exclamation\"></i><i class=\"fa-thin fa-circle-exclamation\"></i></div><h1>ATTENTION</div><p>Upon removal of the receiver, your group will lose its claim to the turf, which may subsequently become unavailable. Please note that holding a turf is not guaranteed.");
const Ds = () => (() => {
  const i = Rs();
  S(() => m(i, Ts.container));
  return i;
})();
const Bs = "_container_13gl5_1";
const js = "_turf_13gl5_19";
const zs = "_storage_13gl5_32";
const Gs = "_members_13gl5_39";
const Fs = "_contracts_13gl5_46";
const Us = "_roadmap_13gl5_60";
const Zs = "_hotruns_13gl5_75";
const Hs = "_contacts_13gl5_83";
const Yt = {
  container: Bs,
  turf: js,
  "black-market": "_black-market_13gl5_25",
  storage: zs,
  members: Gs,
  contracts: Fs,
  "control-panel": "_control-panel_13gl5_53",
  roadmap: Us,
  "weed-stats": "_weed-stats_13gl5_68",
  hotruns: Zs,
  contacts: Hs
};
const qs = w("<div><div class=\"flex-start flex w-full flex-col items-start\"><h1></h1><p></div><i class=\"fa-thin fa-arrow-down-right\">");
const De = i => {
  const {
    setPage: u,
    config: d,
    group: e
  } = W();
  const t = j(() => d()?.pages[i.type]);
  const n = j(() => e()?.level ?? 0);
  return (() => {
    const o = qs();
    const r = o.firstChild;
    const a = r.firstChild;
    const l = a.nextSibling;
    o.$$click = () => {
      const s = n();
      if (t()?.minLevel && (s ?? 0) < t()?.minLevel) {
        K("hideout", `You need to be at least level ${t()?.minLevel} to access this page`);
        return;
      }
      u(i.type);
    };
    $(a, () => i.title);
    $(l, () => i.description);
    S(s => {
      const c = Yt.container;
      const _ = {
        [Yt[i.type]]: true
      };
      if (c !== s._v$) {
        m(o, s._v$ = c);
      }
      s._v$2 = Z(o, _, s._v$2);
      return s;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return o;
  })();
};
H(["click"]);
const Vs = "_container_1ll64_1";
const Ws = "_details_1ll64_29";
const Kt = {
  container: Vs,
  details: Ws
};
const Qs = w("<div><div class=\"flex h-full flex-col items-start justify-between\"><div class=\"flex flex-col items-start justify-start\"><h1></h1><p></div><div>");
const it = i => (() => {
  const u = Qs();
  const d = u.firstChild;
  const e = d.firstChild;
  const t = e.firstChild;
  const n = t.nextSibling;
  const o = e.nextSibling;
  $(t, () => i.title);
  $(n, () => i.description);
  $(o, () => i.value);
  S(r => {
    const a = Kt.container;
    const l = Kt.details;
    if (a !== r._v$) {
      m(u, r._v$ = a);
    }
    if (l !== r._v$2) {
      m(o, r._v$2 = l);
    }
    return r;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return u;
})();
const Ys = "_overview_1j23f_1";
const Ks = {
  overview: Ys
};
const Js = w("<div class=\"flex h-full w-full flex-row items-center justify-between gap-[1vh]\"><div></div><div class=\"flex h-full w-full flex-row items-center justify-between p-[1vh]\"><div class=\"flex h-full flex-col items-center justify-between\"></div><div class=\"flex h-full flex-col items-center justify-between\"></div><div class=\"flex h-full flex-col items-center justify-between\">");
const Xs = () => {
  const {
    group: i,
    hasTurf: u,
    members: d,
    ranks: e,
    config: t
  } = W();
  const n = j(() => {
    const o = u()?.[1];
    if (!o) {
      return;
    }
    const r = t()?.turfZones[o]?.label;
    return r || o;
  });
  return (() => {
    const o = Js();
    const r = o.firstChild;
    const a = r.nextSibling;
    const l = a.firstChild;
    const s = l.nextSibling;
    const c = s.nextSibling;
    $(r, v($e, {}), null);
    $(r, v(it, {
      title: "Members",
      description: "Manage your crew",
      get value() {
        return d()?.length ?? 0;
      }
    }), null);
    $(r, v(it, {
      title: "Ranks",
      description: "Manage your crew",
      get value() {
        return e()?.length ?? 0;
      }
    }), null);
    $(r, v(it, {
      title: "Strain Name",
      description: "Current strain",
      get value() {
        return i()?.strain ?? "None";
      }
    }), null);
    $(r, v(it, {
      title: "Turf",
      description: "Current turf",
      get value() {
        return n() ?? "None";
      }
    }), null);
    $(r, v(Ds, {}), null);
    $(l, v(De, {
      type: "turf",
      title: "TURF",
      description: "Control your territories"
    }), null);
    $(l, v(De, {
      type: "members",
      title: "MEMBERS",
      description: "Manage your crew"
    }), null);
    $(l, v(De, {
      type: "black-market",
      title: "BLACK MARKET",
      description: "Buy and sell items"
    }), null);
    $(s, v(De, {
      type: "weed-stats",
      title: "Weed Stats",
      description: "Keep track of your weed"
    }), null);
    $(s, v(De, {
      type: "storage",
      title: "STORAGES",
      description: "Link your storages"
    }), null);
    $(c, v(De, {
      type: "hotruns",
      title: "Hot Runs",
      description: "Mission control"
    }), null);
    $(c, v(De, {
      type: "roadmap",
      title: "ROADMAP",
      description: "Verify your progression"
    }), null);
    S(() => m(r, Ks.overview));
    return o;
  })();
};
const Jt = "" + new URL("contract-ec4a909c.png", import.meta.url).href;
const el = "_contract_n404i_1";
const tl = "_tag_n404i_21";
const nl = "_option_n404i_37";
const il = "_price_n404i_56";
const ol = "_button_n404i_66";
const rl = "_disabled_n404i_85";
const sl = "_error_n404i_106";
const ll = "_cooldown_container_n404i_115";
const al = "_info_n404i_124";
const cl = "_meter_n404i_138";
const ul = "_bars_n404i_148";
const dl = "_bar_n404i_148";
const _l = "_active_n404i_165";
const fl = "_text_n404i_169";
const Pe = {
  contract: el,
  tag: tl,
  option: nl,
  price: il,
  button: ol,
  disabled: rl,
  error: sl,
  cooldown_container: ll,
  info: al,
  meter: cl,
  bars: ul,
  bar: dl,
  active: _l,
  text: fl
};
const hl = w("<div>Manage Group");
const vl = w("<div>Purchase <!> BUTC");
const gl = w("<div><div class=\"flex w-full flex-row items-center justify-between\"><div></div><h1></div><img><div class=\"flex flex-col items-center justify-end gap-[0.5vh]\">");
const ml = w("<div><div class=\"flex flex-row items-center justify-start gap-[1vh]\"><svg class=\"flex-shrink-0\" width=\"1.48vh\" height=\"1.38vh\" viewBox=\"0 0 16 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.60966 0.0321272C6.18831 0.211799 4.88297 0.762489 3.77396 1.65026C3.45396 1.90645 2.90425 2.45568 2.64783 2.7754C1.95975 3.63346 1.45023 4.66339 1.19313 5.71591C1.03294 6.37177 1.00015 6.67451 1.00015 7.49744C1.00015 8.32036 1.03294 8.6231 1.19313 9.27896C1.45023 10.3315 1.95975 11.3614 2.64783 12.2195C2.90463 12.5397 3.45443 13.0889 3.77396 13.3443C4.90971 14.2524 6.21875 14.7969 7.67219 14.9658C8.16086 15.0225 9.14344 15.0065 9.61565 14.934C10.9174 14.7342 12.1906 14.1737 13.2263 13.3446C13.5463 13.0884 14.0961 12.5392 14.3525 12.2195C15.037 11.3659 15.551 10.3276 15.8061 9.28322C15.9674 8.62289 16.0002 8.32159 16.0002 7.49744C16.0002 6.67328 15.9674 6.37198 15.8061 5.71165C15.551 4.66723 15.037 3.62897 14.3525 2.7754C14.0961 2.45568 13.5463 1.90645 13.2263 1.65026C12.5904 1.14119 11.7038 0.646725 10.99 0.403086C10.5693 0.25946 10.0255 0.123928 9.61565 0.0604887C9.19129 -0.00517988 8.0342 -0.0215457 7.60966 0.0321272ZM9.63823 1.87806C11.1524 2.20086 12.4335 3.06306 13.2747 4.32531C13.7495 5.03793 14.0604 5.85499 14.1785 6.7012C14.2365 7.11697 14.2372 7.88312 14.1799 8.28933C13.8221 10.8244 11.8279 12.8181 9.29709 13.1708C8.87094 13.2302 8.11639 13.2303 7.71132 13.171C6.17052 12.9456 4.84178 12.1644 3.92282 10.9436C3.39848 10.2471 3.06136 9.50137 2.87217 8.61946C2.79661 8.26727 2.79191 8.20152 2.79191 7.49744C2.79191 6.79335 2.79661 6.7276 2.87217 6.37541C3.38876 3.96743 5.23388 2.21435 7.66353 1.8231C7.85625 1.79207 8.11037 1.78336 8.6029 1.79093C9.19511 1.79999 9.32233 1.81069 9.63823 1.87806ZM7.85434 2.67307C6.44945 2.86582 5.18169 3.67047 4.41223 4.85779C3.12371 6.846 3.45921 9.47881 5.20429 11.0737C7.02238 12.7353 9.75036 12.7971 11.6312 11.2194C12.438 10.5426 13.0105 9.60176 13.2535 8.55329C13.5045 7.47025 13.3493 6.27663 12.8263 5.2684C11.8805 3.44519 9.87119 2.39634 7.85434 2.67307ZM9.60103 6.4123L10.6869 7.49752L9.59355 8.58996L8.50015 9.68239L7.40676 8.58996L6.31339 7.49752L7.39927 6.4123C7.99653 5.81542 8.4919 5.32706 8.50015 5.32706C8.5084 5.32706 9.00377 5.81542 9.60103 6.4123Z\" fill=\"url(#paint0_radial_6912_6441)\"></path><defs><radialGradient id=\"paint0_radial_6912_6441\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(8.50015 7.5) rotate(90) scale(14.0625)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"></svg><p></div><div>");
const $l = i => {
  const {
    setPage: u
  } = W();
  const [d, {
    refetch: e
  }] = X(() => A.execute("hideout:hotruns:getCurrent"));
  return (() => {
    const t = gl();
    const n = t.firstChild;
    const o = n.firstChild;
    const r = o.nextSibling;
    const a = n.nextSibling;
    const l = a.nextSibling;
    $(o, () => i.type);
    $(r, () => i.name);
    a.addEventListener("error", s => {
      s.currentTarget.src = Jt;
    });
    D(a, "draggable", false);
    $(l, v(J, {
      get each() {
        return i.data;
      },
      children: s => (() => {
        const c = ml();
        const _ = c.firstChild;
        const f = _.firstChild;
        const h = f.nextSibling;
        const g = _.nextSibling;
        $(h, () => s.label);
        $(g, () => s.value);
        S(y => {
          const p = Pe.option;
          const x = Pe.price;
          if (p !== y._v$8) {
            m(c, y._v$8 = p);
          }
          if (x !== y._v$9) {
            m(g, y._v$9 = x);
          }
          return y;
        }, {
          _v$8: undefined,
          _v$9: undefined
        });
        return c;
      })()
    }), null);
    $(l, v(we, {
      get children() {
        return [v(te, {
          get when() {
            return d() === i.id;
          },
          get children() {
            const s = hl();
            s.$$click = async () => {
              u("hotrun-lobby");
            };
            S(c => {
              const _ = Pe.button;
              const f = {
                [Pe.disabled]: i.disabled
              };
              if (_ !== c._v$) {
                m(s, c._v$ = _);
              }
              c._v$2 = Z(s, f, c._v$2);
              return c;
            }, {
              _v$: undefined,
              _v$2: undefined
            });
            return s;
          }
        }), v(te, {
          get when() {
            return d() !== i.id;
          },
          get children() {
            const s = vl();
            const c = s.firstChild;
            const _ = c.nextSibling;
            _.nextSibling;
            s.$$click = async () => {
              if (i.disabled) {
                K("hideout", "You don't meet the requirements to purchase this Hot Run");
                return;
              }
              const [f, h] = await A.execute("hideout:hotruns:purchase", i.id);
              K("hideout", h);
              if (f) {
                i.refetch();
                e();
              }
            };
            $(s, () => i.price, _);
            S(f => {
              const h = Pe.button;
              const g = {
                [Pe.disabled]: i.disabled
              };
              if (h !== f._v$3) {
                m(s, f._v$3 = h);
              }
              f._v$4 = Z(s, g, f._v$4);
              return f;
            }, {
              _v$3: undefined,
              _v$4: undefined
            });
            return s;
          }
        })];
      }
    }), null);
    S(s => {
      const c = Pe.contract;
      const _ = Pe.tag;
      const f = i.image ?? Jt;
      if (c !== s._v$5) {
        m(t, s._v$5 = c);
      }
      if (_ !== s._v$6) {
        m(o, s._v$6 = _);
      }
      if (f !== s._v$7) {
        D(a, "src", s._v$7 = f);
      }
      return s;
    }, {
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return t;
  })();
};
H(["click"]);
const pl = "_container_4mfsf_1";
const Cl = {
  container: pl
};
const yl = w("<div><div class=\"grid-rows-auto grid h-[80%] w-full auto-rows-max grid-cols-4 gap-y-[0.5vh] overflow-auto\">");
const xl = () => {
  const [i, {
    refetch: u
  }] = X(() => A.execute("hideout:hotruns:getHotRuns"));
  return (() => {
    const d = yl();
    const e = d.firstChild;
    $(d, v($e, {}), e);
    $(e, v(J, {
      get each() {
        return i();
      },
      children: t => v($l, ct(() => ({
        ...t,
        refetch: u
      })))
    }));
    S(() => m(d, Cl.container));
    return d;
  })();
};
const bl = "_container_fgso7_1";
const Ll = "_button_fgso7_23";
const Xt = {
  container: bl,
  button: Ll
};
const wl = w("<div><h1>Create Rank</h1><div>Create");
const kl = i => {
  const {
    input: u,
    setInput: d
  } = W();
  return (() => {
    const e = wl();
    const t = e.firstChild;
    const n = t.nextSibling;
    e.$$click = () => {
      d({
        title: "Create Rank",
        description: "Create a new rank",
        inputs: {
          name: {
            value: "",
            placeholder: "Name"
          }
        },
        onConfirm: async () => {
          const o = u()?.inputs.name.value;
          const r = await A.execute("hideout:ranks:addRank", o);
          K("hideout", r ? "Rank created" : "Failed to create rank");
          i.refetch();
        }
      });
    };
    S(o => {
      const r = Xt.container;
      const a = Xt.button;
      if (r !== o._v$) {
        m(e, o._v$ = r);
      }
      if (a !== o._v$2) {
        m(n, o._v$2 = a);
      }
      return o;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return e;
  })();
};
H(["click"]);
const Sl = "_invite_78soe_1";
const Ml = "_inputContainer_78soe_23";
const El = "_button_78soe_50";
const Pl = "_membersCount_78soe_72";
const ot = {
  invite: Sl,
  inputContainer: Ml,
  button: El,
  membersCount: Pl
};
const Ol = w("<div><h1>INVITE NEW MEMBER</h1><div><input type=\"number\" placeholder=\"CID\"></div><div>Invite");
const Nl = w("<div><i class=\"fa-solid fa-user\"></i><h1></h1><span>/");
const Il = i => {
  const {
    config: u
  } = W();
  const [d, e] = F("");
  return [(() => {
    const t = Ol();
    const n = t.firstChild;
    const o = n.nextSibling;
    const r = o.firstChild;
    const a = o.nextSibling;
    r.$$input = l => {
      if (!isNaN(parseInt(l.currentTarget.value))) {
        e(l.currentTarget.value);
      }
    };
    a.$$click = async () => {
      K("hideout", "Inviting member... (15 seconds)");
      const [l, s] = await A.execute("hideout:members:addMember", +d());
      K("hideout", s);
      i.refetch();
    };
    S(l => {
      const s = ot.invite;
      const c = ot.inputContainer;
      const _ = ot.button;
      if (s !== l._v$) {
        m(t, l._v$ = s);
      }
      if (c !== l._v$2) {
        m(o, l._v$2 = c);
      }
      if (_ !== l._v$3) {
        m(a, l._v$3 = _);
      }
      return l;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    S(() => r.value = d());
    return t;
  })(), (() => {
    const t = Nl();
    const n = t.firstChild;
    const o = n.nextSibling;
    const r = o.nextSibling;
    r.firstChild;
    $(o, () => i.members()?.length);
    $(r, () => u()?.groupLimit, null);
    S(() => m(t, ot.membersCount));
    return t;
  })()];
};
H(["input", "click"]);
const Al = "_member_1hel2_1";
const Tl = "_button_1hel2_47";
const en = {
  member: Al,
  button: Tl
};
const Rl = w("<div class=\"mb-[8vh] flex h-full w-full flex-col items-center justify-start gap-[0.5vh] overflow-auto\">");
const Dl = w("<div><div class=\"flex flex-row items-center justify-start gap-[1vh]\"><i class=\"fa-solid fa-user\"></i><h1> </div><div class=\"flex flex-row items-center justify-start gap-[1vh]\"><div class=\"flex flex-row items-center justify-center gap-[1vh]\"><p><span>Joined At</p><p></div><div>Kick Member");
const Bl = i => {
  const {
    config: u,
    setInput: d
  } = W();
  const e = j(() => i.members()?.sort((t, n) => {
    const o = i.ranks()?.find(a => a.id === t.rank_id);
    const r = i.ranks()?.find(a => a.id === n.rank_id);
    if (!o || !r) {
      return 0;
    } else if (o.order < r.order) {
      return -1;
    } else if (o.order > r.order) {
      return 1;
    } else {
      return 0;
    }
  }) ?? []);
  return (() => {
    const t = Rl();
    $(t, v(J, {
      get each() {
        return e();
      },
      children: (n, o) => (() => {
        const r = Dl();
        const a = r.firstChild;
        const l = a.firstChild;
        const s = l.nextSibling;
        const c = s.firstChild;
        const _ = a.nextSibling;
        const f = _.firstChild;
        const h = f.firstChild;
        const g = h.nextSibling;
        const y = f.nextSibling;
        $(s, () => n.first_name, c);
        $(s, () => n.last_name, null);
        $(g, () => new Date(n.joined_at * 1000).toLocaleString());
        $(_, v(Pn, ct({
          class: "custom"
        }, () => On(i.ranks()?.map(p => ({
          value: p.id,
          label: p.name
        })) ?? [], {
          key: "value"
        }), {
          placeholder: "No Rank",
          get initialValue() {
            return {
              value: n.rank_id,
              label: i.ranks()?.find(p => p.id === n.rank_id)?.name ?? "No Rank"
            };
          },
          format: (p, x) => x === "option" ? p.value.label : p.label,
          onChange: async p => {
            if (!p || typeof p.value != "number" || p.value === n.rank_id) {
              return;
            }
            const [x, C] = await A.execute("hideout:members:setRank", n.character_id, +p.value);
            K("hideout", C);
            if (x) {
              i.refetch();
            }
          }
        })), y);
        y.$$click = async () => {
          d({
            title: "Confirm",
            description: `Are you sure? If you confirm, this member will get a cooldown of ${u()?.memberCooldownInDays} days.`,
            inputs: {},
            onConfirm: async () => {
              const [p, x] = await A.execute("hideout:members:removeMember", n.character_id);
              K("hideout", x);
              i.refetch();
            }
          });
        };
        S(p => {
          const x = en.member;
          const C = 100 - o();
          const k = en.button;
          if (x !== p._v$) {
            m(r, p._v$ = x);
          }
          if (C !== p._v$2) {
            if ((p._v$2 = C) != null) {
              r.style.setProperty("z-index", C);
            } else {
              r.style.removeProperty("z-index");
            }
          }
          if (k !== p._v$3) {
            m(y, p._v$3 = k);
          }
          return p;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return r;
      })()
    }));
    return t;
  })();
};
H(["click"]);
const jl = "_nav_7jrsb_1";
const zl = "_active_7jrsb_21";
const rt = {
  nav: jl,
  active: zl
};
const Gl = w("<div class=\"mr-auto flex w-full flex-row items-start justify-start gap-[0.5vh]\"><div>Members</div><div>Ranks");
const Fl = i => (() => {
  const u = Gl();
  const d = u.firstChild;
  const e = d.nextSibling;
  d.$$click = () => {
    i.setLocalPage("members");
  };
  e.$$click = () => {
    i.setLocalPage("ranks");
  };
  S(t => {
    const n = rt.nav;
    const o = {
      [rt.active]: i.localPage() === "members"
    };
    const r = rt.nav;
    const a = {
      [rt.active]: i.localPage() === "ranks"
    };
    if (n !== t._v$) {
      m(d, t._v$ = n);
    }
    t._v$2 = Z(d, o, t._v$2);
    if (r !== t._v$3) {
      m(e, t._v$3 = r);
    }
    t._v$4 = Z(e, a, t._v$4);
    return t;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return u;
})();
H(["click"]);
const Ul = "_rank_1p3x4_1";
const Zl = "_hierarchy_1p3x4_15";
const Hl = "_button_1p3x4_68";
const ql = "_edit_1p3x4_92";
const $t = {
  rank: Ul,
  hierarchy: Zl,
  button: Hl,
  edit: ql
};
const Vl = w("<div><div class=\"flex flex-row items-center justify-start gap-[1vh]\"><div>#</div><h1></div><div class=\"flex flex-row items-center justify-start gap-[1vh]\"><div><i class=\"fas fa-solid fa-trash\"></i><div class=\"flex h-full w-full items-center justify-center\">Delete");
const Wl = w("<div class=\"mb-[8vh] flex h-full w-full flex-col items-center justify-start gap-[0.5vh] overflow-auto\">");
const Ql = w("<div class=\"sortable\">");
const Yl = i => {
  const u = Tn(i.id);
  const d = Rn();
  const [e] = d;
  return (() => {
    const t = Vl();
    const n = t.firstChild;
    const o = n.firstChild;
    o.firstChild;
    const r = o.nextSibling;
    const a = n.nextSibling;
    const l = a.firstChild;
    _e(u, t, () => true);
    $(o, () => i.index + 1, null);
    $(r, () => i.name);
    l.$$click = async () => {
      if (!(await A.execute("hideout:ranks:removeRank", i.id))) {
        K("hideout", "Failed to remove rank");
        return;
      }
      K("hideout", "Rank removed");
      i.refetch();
    };
    S(s => {
      const c = $t.rank;
      const _ = !!u.isActiveDraggable;
      const f = !!e.active.draggable;
      const h = $t.hierarchy;
      const g = $t.button;
      if (c !== s._v$) {
        m(t, s._v$ = c);
      }
      if (_ !== s._v$2) {
        t.classList.toggle("opacity-25", s._v$2 = _);
      }
      if (f !== s._v$3) {
        t.classList.toggle("transition-transform", s._v$3 = f);
      }
      if (h !== s._v$4) {
        m(o, s._v$4 = h);
      }
      if (g !== s._v$5) {
        m(l, s._v$5 = g);
      }
      return s;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return t;
  })();
};
const Kl = ({
  ranks: i,
  refetch: u
}) => {
  const [d, e] = F([]);
  le(async () => {
    await tt.waitForCondition(() => !i.loading, 10000);
    e(i());
  });
  Ge(() => {
    e(i());
  }, [i()]);
  const [t, n] = F(null);
  const o = j(() => d()?.map(s => s.id) ?? []);
  const r = ({
    draggable: s
  }) => n(s.id);
  const a = async ({
    draggable: s,
    droppable: c
  }) => {
    if (s && c) {
      const _ = o();
      const f = _.indexOf(s.id);
      const h = _.indexOf(c.id);
      if (f !== h) {
        const g = _.slice();
        g.splice(h, 0, ...g.splice(f, 1));
        const y = g.map((p, x) => ({
          ...d()?.find(k => k.id === p),
          order: x
        }));
        e(y);
        await A.execute("hideout:ranks:changeOrders", g.map((p, x) => ({
          id: p,
          order: x
        })));
      }
    }
  };
  const l = j(() => d()?.sort((s, c) => s.order - c.order));
  return v(Te, {
    get fallback() {
      return v(Re, {});
    },
    get children() {
      return v(dn, {
        onDragStart: r,
        onDragEnd: a,
        collisionDetector: Nn,
        get children() {
          return [(() => {
            const s = Wl();
            $(s, v(un, {}), null);
            $(s, v(In, {
              get ids() {
                return o();
              },
              get children() {
                return v(J, {
                  get each() {
                    return l();
                  },
                  children: (c, _) => v(Yl, ct(c, {
                    get index() {
                      return _();
                    },
                    refetch: u
                  }))
                });
              }
            }), null);
            return s;
          })(), v(An, {
            get children() {
              const s = Ql();
              $(s, t);
              return s;
            }
          })];
        }
      });
    }
  });
};
H(["click"]);
const Jl = "_container_1fm74_1";
const Xl = {
  container: Jl
};
const ea = w("<div class=\"flex h-full w-full flex-row items-center justify-end gap-[1vh]\">");
const ta = w("<div>");
const na = () => {
  const {
    refetchMembers: i,
    refetchRanks: u,
    members: d,
    ranks: e
  } = W();
  const [t, n] = F("members");
  Ge(() => {
    if (t() === "members" || t() === "hotrun-lobby") {
      i();
    } else if (t() === "ranks") {
      u();
    }
  }, [t()]);
  return v(Te, {
    get fallback() {
      return v(Re, {});
    },
    get children() {
      const o = ta();
      $(o, v($e, {
        get children() {
          const r = ea();
          $(r, v(Fl, {
            localPage: t,
            setLocalPage: n
          }), null);
          $(r, v(we, {
            get children() {
              return [v(te, {
                get when() {
                  return t() === "members";
                },
                get children() {
                  return v(Il, {
                    refetch: i,
                    members: d
                  });
                }
              }), v(te, {
                get when() {
                  return t() === "ranks";
                },
                get children() {
                  return v(kl, {
                    refetch: u
                  });
                }
              })];
            }
          }), null);
          return r;
        }
      }), null);
      $(o, v(we, {
        get children() {
          return [v(te, {
            get when() {
              return t() === "members";
            },
            get children() {
              return v(Bl, {
                refetch: i,
                members: d,
                ranks: e
              });
            }
          }), v(te, {
            get when() {
              return t() === "ranks";
            },
            get children() {
              return v(Kl, {
                ranks: e,
                refetch: u
              });
            }
          })];
        }
      }), null);
      S(() => m(o, Xl.container));
      return o;
    }
  });
};
const ia = "_container_t0mel_1";
const oa = "_divider_t0mel_9";
const pt = {
  container: ia,
  divider: oa
};
const ra = w("<div><div>///////////</div><div class=\"flex h-full w-full flex-col items-center justify-center\"><svg width=\"43.42vh\" height=\"43.33vh\" viewBox=\"0 0 469 468\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g filter=\"url(#filter0_d_8373_2525)\"><mask id=\"path-1-inside-1_8373_2525\" fill=\"white\"><path d=\"M439 234C439 199.867 430.414 166.28 414.03 136.314C397.645 106.349 373.985 80.964 345.217 62.4843L344.059 64.2774C372.527 82.5639 395.939 107.684 412.153 137.336C428.366 166.988 436.862 200.224 436.862 234H439Z\"></mask><path d=\"M439 234C439 199.867 430.414 166.28 414.03 136.314C397.645 106.349 373.985 80.964 345.217 62.4843L344.059 64.2774C372.527 82.5639 395.939 107.684 412.153 137.336C428.366 166.988 436.862 200.224 436.862 234H439Z\" stroke=\"#00F8B9\" stroke-width=\"2\" mask=\"url(#path-1-inside-1_8373_2525)\"></g><mask id=\"path-2-inside-2_8373_2525\" fill=\"white\"><path d=\"M321.643 49.4487C292.66 35.83 260.875 29.1948 228.849 30.0779C196.824 30.961 165.455 39.3377 137.27 54.5327C109.085 69.7278 84.8737 91.3161 66.5868 117.557C48.2999 143.799 36.4494 173.959 31.9904 205.607L34.1075 205.904C38.5199 174.587 50.2465 144.742 68.3422 118.775C86.4379 92.8078 110.396 71.4452 138.286 56.409C166.177 41.3728 197.218 33.0836 228.908 32.2098C260.599 31.3359 292.052 37.9018 320.732 51.378L321.643 49.4487Z\"></mask><path d=\"M321.643 49.4487C292.66 35.83 260.875 29.1948 228.849 30.0779C196.824 30.961 165.455 39.3377 137.27 54.5327C109.085 69.7278 84.8737 91.3161 66.5868 117.557C48.2999 143.799 36.4494 173.959 31.9904 205.607L34.1075 205.904C38.5199 174.587 50.2465 144.742 68.3422 118.775C86.4379 92.8078 110.396 71.4452 138.286 56.409C166.177 41.3728 197.218 33.0836 228.908 32.2098C260.599 31.3359 292.052 37.9018 320.732 51.378L321.643 49.4487Z\" stroke=\"white\" stroke-opacity=\"0.05\" stroke-width=\"2\" mask=\"url(#path-2-inside-2_8373_2525)\"></path><mask id=\"path-3-inside-3_8373_2525\" fill=\"white\"><path d=\"M437.219 260.866C433 292.546 421.378 322.795 403.29 349.174C385.203 375.552 361.155 397.322 333.087 412.729C305.018 428.136 273.713 436.749 241.695 437.874C209.678 438.998 177.843 432.603 148.757 419.203L149.654 417.267C178.435 430.526 209.937 436.855 241.62 435.742C273.303 434.63 304.281 426.107 332.056 410.861C359.831 395.615 383.627 374.072 401.526 347.97C419.424 321.867 430.925 291.934 435.1 260.585L437.219 260.866Z\"></mask><path d=\"M437.219 260.866C433 292.546 421.378 322.795 403.29 349.174C385.203 375.552 361.155 397.322 333.087 412.729C305.018 428.136 273.713 436.749 241.695 437.874C209.678 438.998 177.843 432.603 148.757 419.203L149.654 417.267C178.435 430.526 209.937 436.855 241.62 435.742C273.303 434.63 304.281 426.107 332.056 410.861C359.831 395.615 383.627 374.072 401.526 347.97C419.424 321.867 430.925 291.934 435.1 260.585L437.219 260.866Z\" stroke=\"white\" stroke-opacity=\"0.05\" stroke-width=\"2\" mask=\"url(#path-3-inside-3_8373_2525)\"></path><mask id=\"path-4-inside-4_8373_2525\" fill=\"white\"><path d=\"M469 234C469 104.765 364.011 0 234.5 0C104.989 0 0 104.765 0 234C0 363.235 104.989 468 234.5 468C364.011 468 469 363.235 469 234ZM2.45155 234C2.45155 106.116 106.343 2.44635 234.5 2.44635C362.657 2.44635 466.548 106.116 466.548 234C466.548 361.884 362.657 465.554 234.5 465.554C106.343 465.554 2.45155 361.884 2.45155 234Z\"></mask><path d=\"M469 234C469 104.765 364.011 0 234.5 0C104.989 0 0 104.765 0 234C0 363.235 104.989 468 234.5 468C364.011 468 469 363.235 469 234ZM2.45155 234C2.45155 106.116 106.343 2.44635 234.5 2.44635C362.657 2.44635 466.548 106.116 466.548 234C466.548 361.884 362.657 465.554 234.5 465.554C106.343 465.554 2.45155 361.884 2.45155 234Z\" stroke=\"white\" stroke-opacity=\"0.05\" stroke-width=\"2\" mask=\"url(#path-4-inside-4_8373_2525)\"></path><g filter=\"url(#filter1_d_8373_2525)\"><mask id=\"path-5-inside-5_8373_2525\" fill=\"white\"><path d=\"M30 234C30 268.133 38.5856 301.72 54.9703 331.686C71.355 361.651 95.015 387.036 123.783 405.516L124.941 403.723C96.4732 385.436 73.0605 360.316 56.8471 330.664C40.6337 301.012 32.1379 267.776 32.1379 234H30Z\"></mask><path d=\"M30 234C30 268.133 38.5856 301.72 54.9703 331.686C71.355 361.651 95.015 387.036 123.783 405.516L124.941 403.723C96.4732 385.436 73.0605 360.316 56.8471 330.664C40.6337 301.012 32.1379 267.776 32.1379 234H30Z\" stroke=\"#00F8B9\" stroke-width=\"2\" mask=\"url(#path-5-inside-5_8373_2525)\"></g><defs><filter id=\"filter0_d_8373_2525\" x=\"315.559\" y=\"32.9844\" width=\"151.941\" height=\"228.516\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset dy=\"-1\"></feOffset><feGaussianBlur stdDeviation=\"14.25\"></feGaussianBlur><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 0.55 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_8373_2525\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_8373_2525\" result=\"shape\"></filter><filter id=\"filter1_d_8373_2525\" x=\"1.5\" y=\"204.5\" width=\"151.941\" height=\"228.516\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset dy=\"-1\"></feOffset><feGaussianBlur stdDeviation=\"14.25\"></feGaussianBlur><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 0.55 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_8373_2525\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_8373_2525\" result=\"shape\"></svg><div class=\"absolute flex flex-col items-center justify-center\"><i class=\"fa-solid fa-nfc-lock\"></i><h1>NO ACCESS</h1><p></div></div><div>///////////");
const tn = () => {
  const {
    hasAccess: i,
    hasTurf: u
  } = W();
  return (() => {
    const d = ra();
    const e = d.firstChild;
    const t = e.nextSibling;
    const n = t.firstChild;
    const o = n.nextSibling;
    const r = o.firstChild;
    const a = r.nextSibling;
    const l = a.nextSibling;
    const s = t.nextSibling;
    $(l, (() => {
      const c = j(() => !i()?.[0]);
      return () => c() ? i()?.[1] : u()?.[1];
    })());
    S(c => {
      const _ = pt.container;
      const f = pt.divider;
      const h = pt.divider;
      if (_ !== c._v$) {
        m(d, c._v$ = _);
      }
      if (f !== c._v$2) {
        m(e, c._v$2 = f);
      }
      if (h !== c._v$3) {
        m(s, c._v$3 = h);
      }
      return c;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return d;
  })();
};
const sa = "_container_1izh8_1";
const la = "_blurred_1izh8_14";
const aa = "_imageContainer_1izh8_17";
const ca = "_title_1izh8_54";
const ua = "_block_1izh8_71";
const da = "_value_1izh8_89";
const _a = "_blockBig_1izh8_104";
const fa = "_button_1izh8_131";
const ha = "_unlocked_1izh8_150";
const va = "_disabled_1izh8_156";
const ye = {
  container: sa,
  blurred: la,
  imageContainer: aa,
  title: ca,
  block: ua,
  value: da,
  blockBig: _a,
  button: fa,
  unlocked: ha,
  disabled: va
};
const ga = w("<div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"><div>Rewards");
const ma = w("<div>Unlocked");
const $a = w("<div>Unlock - <!> Points");
const pa = w("<div><div class=\"flex w-full flex-col items-center justify-start\"><h1></h1><p></div><div class=\"flex w-full flex-col items-start justify-start gap-[0.5vh]\"><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"><div>Progress</div><div>Progress <div>%");
const Ca = w("<div> <div>x");
const ya = () => {
  const {
    selectedRoadmap: i,
    config: u,
    group: d,
    unlockCodesResource: e,
    refetchGroup: t
  } = W();
  const [n, {
    refetch: o
  }] = e;
  const r = j(() => {
    const s = u()?.progression;
    if (!s) {
      return;
    }
    const c = i();
    function _(f, h) {
      for (const g of f) {
        if (g.id === h) {
          return g;
        }
        if (g.children) {
          const y = _(g.children, h);
          if (y) {
            return y;
          }
        }
      }
      return null;
    }
    return _(s, c);
  });
  const a = j(() => {
    const s = i();
    if (s) {
      return n()?.includes(s);
    } else {
      return false;
    }
  });
  const l = j(() => {
    if (a()) {
      return 100;
    }
    const s = d()?.points;
    const c = r()?.points;
    if (!s || !c) {
      return 0;
    } else {
      return Math.round(Math.min(s / c * 100, 100));
    }
  });
  return (() => {
    const s = pa();
    const c = s.firstChild;
    const _ = c.firstChild;
    const f = _.nextSibling;
    const h = c.nextSibling;
    const g = h.firstChild;
    const y = g.firstChild;
    const p = y.nextSibling;
    const x = p.firstChild;
    const C = x.nextSibling;
    const k = C.firstChild;
    $(_, () => r()?.name);
    $(f, () => r()?.description);
    $(C, l, k);
    $(h, v(U, {
      get when() {
        return r()?.rewards;
      },
      get children() {
        const b = ga();
        const M = b.firstChild;
        $(b, v(J, {
          get each() {
            return r()?.rewards;
          },
          children: I => (() => {
            const B = Ca();
            const z = B.firstChild;
            const T = z.nextSibling;
            T.firstChild;
            $(B, () => I.name, z);
            $(T, () => I.quantity, null);
            S(Q => {
              const q = ye.blockBig;
              const ee = ye.value;
              if (q !== Q._v$9) {
                m(B, Q._v$9 = q);
              }
              if (ee !== Q._v$10) {
                m(T, Q._v$10 = ee);
              }
              return Q;
            }, {
              _v$9: undefined,
              _v$10: undefined
            });
            return B;
          })()
        }), null);
        S(() => m(M, ye.title));
        return b;
      }
    }), null);
    $(h, v(we, {
      get children() {
        return [v(te, {
          get when() {
            return a();
          },
          get children() {
            const b = ma();
            S(M => {
              const I = ye.button;
              const B = {
                [ye.unlocked]: true
              };
              if (I !== M._v$) {
                m(b, M._v$ = I);
              }
              M._v$2 = Z(b, B, M._v$2);
              return M;
            }, {
              _v$: undefined,
              _v$2: undefined
            });
            return b;
          }
        }), v(te, {
          get when() {
            return !a();
          },
          get children() {
            const b = $a();
            const M = b.firstChild;
            const I = M.nextSibling;
            I.nextSibling;
            b.$$click = async () => {
              const [B, z] = await A.execute("hideout:progression:unlockCode", i());
              K("hideout", z);
              if (B) {
                o();
                t();
              }
            };
            $(b, () => r()?.points, I);
            S(B => {
              const z = ye.button;
              const T = {
                [ye.disabled]: l() < 100
              };
              if (z !== B._v$3) {
                m(b, B._v$3 = z);
              }
              B._v$4 = Z(b, T, B._v$4);
              return B;
            }, {
              _v$3: undefined,
              _v$4: undefined
            });
            return b;
          }
        })];
      }
    }), null);
    S(b => {
      const M = ye.container;
      const I = ye.title;
      const B = ye.block;
      const z = ye.value;
      if (M !== b._v$5) {
        m(s, b._v$5 = M);
      }
      if (I !== b._v$6) {
        m(y, b._v$6 = I);
      }
      if (B !== b._v$7) {
        m(p, b._v$7 = B);
      }
      if (z !== b._v$8) {
        m(C, b._v$8 = z);
      }
      return b;
    }, {
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined
    });
    return s;
  })();
};
H(["click"]);
const xa = w("<svg><foreignObject width=\"150\" height=\"150\" x=\"-75\" y=\"-75\"><div class=\"rd3t-container\"><div class=\"container\"><div class=\"insideBox\"><i></svg>", false, true);
const ba = ({
  nodeDatum: i,
  toggleNode: u,
  onNodeClick: d,
  onNodeMouseOver: e,
  onNodeMouseOut: t
}) => {
  const {
    selectedRoadmap: n,
    setSelectedRoadmap: o,
    unlockCodesResource: r
  } = W();
  const [a, {
    refetch: l
  }] = r;
  return (() => {
    const s = xa();
    const c = s.firstChild;
    const _ = c.firstChild;
    const f = _.firstChild;
    const h = f.firstChild;
    s.style.setProperty("transform", "rotate(45deg)");
    Ke(c, "mouseout", t, true);
    Ke(c, "mouseover", e, true);
    c.$$click = g => {
      u();
      d(g);
      o(i.id);
    };
    S(g => {
      const y = {
        active: n() === i.id,
        completed: a()?.includes(i.id)
      };
      const p = i.icon ?? "fa-solid fa-triangle";
      g._v$ = Z(_, y, g._v$);
      if (p !== g._v$2) {
        m(h, g._v$2 = p);
      }
      return g;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return s;
  })();
};
H(["click", "mouseover", "mouseout"]);
const La = w("<svg><g></svg>", false, true);
function wa(i) {
  let u;
  const [d, e] = F(0);
  const [t, n] = F("");
  le(() => {
    const f = o(i.position, i.parent, i.orientation, false);
    n(f);
    r(f, i.transitionDuration, 1);
  });
  ke(() => {
    const f = o(i.position, i.parent, i.orientation, false);
    r(f, i.transitionDuration, 0);
  });
  function o(f, h, g, y = false) {
    if (y) {
      const p = h != null;
      const x = p ? h.x : 0;
      const C = p ? h.y : 0;
      if (g === "horizontal") {
        return `translate(${C},${x})`;
      } else {
        return `translate(${x},${C})`;
      }
    }
    if (g === "horizontal") {
      return `translate(${f.y},${f.x})`;
    } else {
      return `translate(${f.x},${f.y})`;
    }
  }
  function r(f, h, g) {
    if (i.enableLegacyTransitions) {
      Ie(u).transition().duration(h).attr("transform", f).style("opacity", g).end().then(() => e(g));
    } else {
      Ie(u).attr("transform", f).style("opacity", g);
      e(g);
    }
  }
  function a() {
    i.onNodeToggle(i.data.__rd3t.id);
  }
  function l(f) {
    i.onNodeClick(i.hierarchyPointNode, f);
  }
  function s(f) {
    i.onNodeMouseOver(i.hierarchyPointNode, f);
  }
  function c(f) {
    i.onNodeMouseOut(i.hierarchyPointNode, f);
  }
  function _() {
    return (i.renderCustomNodeElement || ba)({
      hierarchyPointNode: i.hierarchyPointNode,
      nodeDatum: i.data,
      toggleNode: a,
      onNodeClick: l,
      onNodeMouseOver: s,
      onNodeMouseOut: c,
      addChildren: i.handleAddChildrenToNode
    });
  }
  return (() => {
    const f = La();
    const h = u;
    if (typeof h == "function") {
      _e(h, f);
    } else {
      u = f;
    }
    $(f, v(U, {
      get when() {
        return i.data;
      },
      get children() {
        return _();
      }
    }));
    S(g => {
      const y = i.data.__rd3t.id;
      const p = d();
      const x = `${i.data.children && i.data.children.length > 0 ? "rd3t-node" : "rd3t-leaf-node"} ${i.nodeClassName}`;
      const C = {
        active: i.data.active
      };
      const k = t();
      if (y !== g._v$) {
        D(f, "id", g._v$ = y);
      }
      if (p !== g._v$2) {
        if ((g._v$2 = p) != null) {
          f.style.setProperty("opacity", p);
        } else {
          f.style.removeProperty("opacity");
        }
      }
      if (x !== g._v$3) {
        D(f, "class", g._v$3 = x);
      }
      g._v$4 = Z(f, C, g._v$4);
      if (k !== g._v$5) {
        D(f, "transform", g._v$5 = k);
      }
      return g;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return f;
  })();
}
const ka = w("<svg><path></svg>", false, true);
function Sa(i) {
  let u;
  const [d, e] = F(0);
  le(() => {
    t(1, i.transitionDuration);
  });
  function t(h, g, y = () => {}) {
    if (i.enableLegacyTransitions) {
      Ie(u).transition().duration(g).style("opacity", h).on("end", y);
    } else {
      Ie(u).style("opacity", h);
      y();
    }
  }
  const n = () => {
    const {
      linkData: h,
      orientation: g,
      pathFunc: y
    } = i;
    if (typeof y == "function") {
      return y(h, g);
    }
    switch (y) {
      case "elbow":
        return o(h, g);
      case "straight":
        return r(h, g);
      case "step":
        return l(h, g);
      default:
        return a(h, g);
    }
  };
  const o = (h, g) => g === "horizontal" ? `M${h.source.y},${h.source.x}V${h.target.x}H${h.target.y}` : `M${h.source.x},${h.source.y}V${h.target.y}H${h.target.x}`;
  const r = (h, g) => g === "horizontal" ? `M${h.source.y},${h.source.x}L${h.target.y},${h.target.x}` : `M${h.source.x},${h.source.y}L${h.target.x},${h.target.y}`;
  const a = (h, g) => g === "horizontal" ? Dn()({
    source: [h.source.y, h.source.x],
    target: [h.target.y, h.target.x]
  }) : Bn()({
    source: [h.source.x, h.source.y],
    target: [h.target.x, h.target.y]
  });
  const l = (h, g) => {
    const {
      source: y,
      target: p
    } = h;
    const x = p.y - y.y;
    if (g === "horizontal") {
      return `M${y.y},${y.x} H${y.y + x / 2} V${p.x} H${p.y}`;
    } else {
      return `M${y.x},${y.y} V${y.y + x / 2} H${p.x} V${p.y}`;
    }
  };
  const s = () => {
    const {
      linkData: h,
      orientation: g,
      pathClassFunc: y
    } = i;
    const p = ["rd3t-link"];
    if (typeof y == "function") {
      p.push(y(h, g));
    }
    return p.join(" ").trim();
  };
  const c = h => {
    i.onClick(i.linkData.source, i.linkData.target, h);
  };
  const _ = h => {
    i.onMouseOver(i.linkData.source, i.linkData.target, h);
  };
  const f = h => {
    i.onMouseOut(i.linkData.source, i.linkData.target, h);
  };
  return (() => {
    const h = ka();
    h.$$mouseout = f;
    h.$$mouseover = _;
    h.$$click = c;
    const g = u;
    if (typeof g == "function") {
      _e(g, h);
    } else {
      u = h;
    }
    S(y => {
      const p = d();
      const x = s();
      const C = n();
      const k = i.linkData.source.data.__rd3t.id;
      const b = i.linkData.target.data.__rd3t.id;
      if (p !== y._v$) {
        if ((y._v$ = p) != null) {
          h.style.setProperty("opacity", p);
        } else {
          h.style.removeProperty("opacity");
        }
      }
      if (x !== y._v$2) {
        D(h, "class", y._v$2 = x);
      }
      if (C !== y._v$3) {
        D(h, "d", y._v$3 = C);
      }
      if (k !== y._v$4) {
        D(h, "data-source-id", y._v$4 = k);
      }
      if (b !== y._v$5) {
        D(h, "data-target-id", y._v$5 = b);
      }
      return y;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return h;
  })();
}
H(["click", "mouseover", "mouseout"]);
const Ma = w("<div class=\"rd3t-tree-container rd3t-grabbable\"><svg width=\"100%\" height=\"100%\"><g>");
const Ea = i => {
  const [u, d] = ze({
    data: a(Fe.cloneDeep(i.data)),
    d3: l(i),
    isTransitioning: false,
    isInitialRenderForDataset: true,
    dataKey: i.dataKey || ""
  });
  const e = `rd3t-svg-${tt.getUUID()}`;
  const t = `rd3t-g-${tt.getUUID()}`;
  le(() => {
    n();
    d("isInitialRenderForDataset", false);
  });
  ke(() => {});
  function n() {
    const x = Ie(`.${e}`);
    const C = Ie(`.${t}`);
    x.call(ut().transform, It.translate(i.translate.x, i.translate.y).scale(i.zoom));
    x.call(ut().scaleExtent(i.zoomable ? [i.scaleExtent.min, i.scaleExtent.max] : [i.zoom, i.zoom]).on("zoom", k => {
      if (!!i.draggable || !["mousemove", "touchmove", "dblclick"].includes(k.sourceEvent.type)) {
        C.attr("transform", k.transform);
        if (i.onUpdate) {
          i.onUpdate({
            node: null,
            zoom: k.transform.k,
            translate: {
              x: k.transform.x,
              y: k.transform.y
            }
          });
          d("d3", {
            scale: k.transform.k,
            translate: {
              x: k.transform.x,
              y: k.transform.y
            }
          });
        }
      }
    }));
  }
  function o() {
    const C = jn().nodeSize(i.orientation === "horizontal" ? [i.nodeSize.y, i.nodeSize.x] : [i.nodeSize.x, i.nodeSize.y]).separation((M, I) => M.parent.data.__rd3t.id === I.parent.data.__rd3t.id ? i.separation.siblings : i.separation.nonSiblings)(zn(Fe.cloneDeep(u.data)[0], M => M.__rd3t.collapsed ? null : M.children));
    let k = C.descendants();
    const b = C.links();
    if (i.initialDepth !== undefined && u.isInitialRenderForDataset) {
      r(k, i.initialDepth);
    }
    if (i.depthFactor) {
      k.forEach(M => {
        M.y = M.depth * (i.depthFactor ?? 0);
      });
    }
    return {
      nodes: k,
      links: b
    };
  }
  function r(x, C) {
    x.forEach(k => {
      k.data.__rd3t.collapsed = k.depth >= C;
    });
  }
  function a(x, C = 0) {
    return (Array.isArray(x) ? x : [x]).map(b => {
      const M = b;
      M.__rd3t = {
        id: tt.getUUID(),
        depth: C,
        collapsed: false
      };
      if (M.children && M.children.length > 0) {
        M.children = a(M.children, C + 1);
      }
      return M;
    });
  }
  function l(x) {
    const C = Math.max(x.scaleExtent?.min ?? 0, Math.min(x.scaleExtent?.max ?? 0, x.zoom ?? 0));
    return {
      translate: x.translate,
      scale: C
    };
  }
  function s(x) {
    const C = Fe.cloneDeep(u.data);
    const k = c(x, C);
    if (k) {
      k.__rd3t.collapsed = !k.__rd3t.collapsed;
      d("data", a(Fe.cloneDeep(C)));
    }
  }
  function c(x, C) {
    for (const k of C) {
      if (k.__rd3t.id === x) {
        return k;
      }
      if (k.children) {
        const b = c(x, k.children);
        if (b) {
          return b;
        }
      }
    }
  }
  const _ = (x, C) => {
    const {
      rootNodeClassName: k,
      branchNodeClassName: b,
      leafNodeClassName: M
    } = i;
    if (x != null) {
      if (C.children) {
        return b;
      } else {
        return M;
      }
    } else {
      return k;
    }
  };
  const f = (x, C, k) => {
    if (!(k.length > 0)) {
      k = k.concat(C.filter(b => b.__rd3t.id === x));
      C.forEach(b => {
        if (b.children && b.children.length > 0) {
          k = f(x, b.children, k);
        }
      });
    }
    return k;
  };
  const h = (x, C) => {
    const k = Fe.cloneDeep(u.data);
    const b = f(x, k, []);
    if (b.length > 0) {
      const M = b[0];
      const I = M.__rd3t.depth;
      const B = Fe.cloneDeep(C).map(z => a([z], I + 1));
      M.children?.push(...B.flat());
      d("data", k);
    }
  };
  const g = x => {
    const {
      dimensions: C,
      orientation: k,
      zoom: b,
      centeringTransitionDuration: M
    } = i;
    if (C) {
      const I = Ie(`.${t}`);
      const B = Ie(`.${e}`);
      const z = u.d3.scale;
      let T;
      let Q;
      if (k === "horizontal") {
        Q = -x.x * z + C.height / 2;
        T = -x.y * z + C.width / 2;
      } else {
        T = -x.x * z + C.width / 2;
        Q = -x.y * z + C.height / 2;
      }
      I.transition().duration(M).attr("transform", "translate(" + T + "," + Q + ")scale(" + z + ")");
      B.call(ut().transform, It.translate(T, Q).scale(b));
    }
  };
  const {
    nodes: y,
    links: p
  } = o();
  return (() => {
    const x = Ma();
    const C = x.firstChild;
    const k = C.firstChild;
    D(k, "class", `rd3t-g ${t}`);
    $(k, v(J, {
      each: p,
      children: b => v(Sa, {
        get orientation() {
          return i.orientation ?? "horizontal";
        },
        get pathFunc() {
          return i.pathFunc ?? "diagonal";
        },
        get pathClassFunc() {
          return i.pathClassFunc;
        },
        linkData: b,
        get onClick() {
          return i.onLinkClick ?? (() => {});
        },
        get onMouseOver() {
          return i.onLinkMouseOver ?? (() => {});
        },
        get onMouseOut() {
          return i.onLinkMouseOut ?? (() => {});
        },
        get enableLegacyTransitions() {
          return i.enableLegacyTransitions ?? false;
        },
        get transitionDuration() {
          return i.transitionDuration ?? 0;
        }
      })
    }), null);
    $(k, v(J, {
      each: y,
      children: b => v(wa, {
        get data() {
          return b.data;
        },
        get position() {
          return {
            x: b.x,
            y: b.y
          };
        },
        hierarchyPointNode: b,
        get parent() {
          return b.parent;
        },
        get nodeClassName() {
          return _(b.parent, b.data);
        },
        get renderCustomNodeElement() {
          return i.renderCustomNodeElement;
        },
        get nodeSize() {
          return i.nodeSize;
        },
        get orientation() {
          return i.orientation ?? "horizontal";
        },
        get enableLegacyTransitions() {
          return i.enableLegacyTransitions ?? false;
        },
        get transitionDuration() {
          return i.transitionDuration ?? 0;
        },
        onNodeToggle: s,
        get onNodeClick() {
          return i.onNodeClick ?? (() => {});
        },
        get onNodeMouseOver() {
          return i.onNodeMouseOver ?? (() => {});
        },
        get onNodeMouseOut() {
          return i.onNodeMouseOut ?? (() => {});
        },
        handleAddChildrenToNode: h,
        get subscriptions() {
          return {
            ...i.nodeSize,
            ...i.separation,
            depthFactor: i.depthFactor,
            initialDepth: i.initialDepth
          };
        },
        centerNode: g
      })
    }), null);
    S(b => {
      const M = `rd3t-svg ${e} ${i.svgClassName}`;
      const I = `translate(${u.d3.translate?.x},${u.d3.translate?.y}) scale(${u.d3.scale})`;
      if (M !== b._v$) {
        D(C, "class", b._v$ = M);
      }
      if (I !== b._v$2) {
        D(k, "transform", b._v$2 = I);
      }
      return b;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return x;
  })();
};
const Pa = "_points_1tbay_1";
const Oa = "_treeContainer_1tbay_46";
const Na = "_headerText_1tbay_57";
const Ct = {
  points: Pa,
  treeContainer: Oa,
  headerText: Na
};
const Ia = w("<div>As the group levels up, points are accumulated to unlock new features and benefits");
const Aa = w("<div class=\"flex h-full w-full flex-row items-center justify-end\"><div><i class=\"fas fa-solid fa-coins\"></i><div class=\"flex flex-col items-start justify-center\"><h1>Points</h1><span>");
const Ta = w("<div class=\"flex h-full w-full flex-col items-center justify-start\"><div class=\"flex h-full w-full flex-row items-center justify-between gap-[1vh]\"><div>");
const Ra = () => {
  const {
    setSelectedRoadmap: i,
    group: u,
    config: d
  } = W();
  const e = {
    dimensions: undefined,
    centeringTransitionDuration: 800,
    translateX: 200,
    translateY: 300,
    collapsible: false,
    shouldCollapseNeighborNodes: false,
    initialDepth: 1,
    depthFactor: undefined,
    zoomable: true,
    draggable: true,
    zoom: 1,
    scaleExtent: {
      min: 0.1,
      max: 2
    },
    separation: {
      siblings: 2,
      nonSiblings: 2
    },
    nodeSize: {
      x: 200,
      y: 200
    },
    enableLegacyTransitions: true,
    transitionDuration: 500,
    renderCustomNodeElement: undefined
  };
  le(() => {
    i("unlock_tree");
  });
  return v(Te, {
    get fallback() {
      return v(Re, {});
    },
    get children() {
      const t = Ta();
      const n = t.firstChild;
      const o = n.firstChild;
      $(t, v($e, {
        get children() {
          return [(() => {
            const r = Ia();
            S(() => m(r, Ct.headerText));
            return r;
          })(), (() => {
            const r = Aa();
            const a = r.firstChild;
            const l = a.firstChild;
            const s = l.nextSibling;
            const c = s.firstChild;
            const _ = c.nextSibling;
            $(_, () => u()?.points);
            S(() => m(a, Ct.points));
            return r;
          })()];
        }
      }), n);
      $(n, v(ya, {}), o);
      $(o, v(Ea, {
        hasInteractiveNodes: true,
        get data() {
          return d()?.progression ?? [];
        },
        renderCustomNodeElement: undefined,
        rootNodeClassName: "demo-node",
        branchNodeClassName: "demo-node",
        orientation: "vertical",
        get dimensions() {
          return e.dimensions;
        },
        get centeringTransitionDuration() {
          return e.centeringTransitionDuration;
        },
        get translate() {
          return {
            x: e.translateX,
            y: e.translateY
          };
        },
        pathFunc: "elbow",
        get collapsible() {
          return e.collapsible;
        },
        get initialDepth() {
          return e.initialDepth;
        },
        get zoomable() {
          return e.zoomable;
        },
        get draggable() {
          return e.draggable;
        },
        get zoom() {
          return e.zoom;
        },
        get scaleExtent() {
          return e.scaleExtent;
        },
        get nodeSize() {
          return e.nodeSize;
        },
        get separation() {
          return e.separation;
        },
        get enableLegacyTransitions() {
          return e.enableLegacyTransitions;
        },
        get transitionDuration() {
          return e.transitionDuration;
        },
        get depthFactor() {
          return e.depthFactor;
        },
        dataRef: [],
        d3: {
          translate: {
            x: 0,
            y: 0
          },
          scale: 1
        },
        isTransitioning: false,
        isInitialRenderForDataset: false,
        dataKey: "test",
        get shouldCollapseNeighborNodes() {
          return e.shouldCollapseNeighborNodes;
        },
        onNodeClick: (r, a) => {},
        onNodeMouseOver: (...r) => {},
        onNodeMouseOut: (...r) => {},
        onLinkClick: (...r) => {},
        onLinkMouseOver: (...r) => {},
        onLinkMouseOut: (...r) => {}
      }));
      S(() => m(o, Ct.treeContainer));
      return t;
    }
  });
};
const Da = "_icon_17uhn_5";
const Ba = "_circle_17uhn_12";
const ja = "_edge_17uhn_19";
const za = "_edgeSelected_17uhn_27";
const Ga = "_edgeNew_17uhn_34";
const qe = {
  delete: "_delete_17uhn_1",
  icon: Da,
  circle: Ba,
  edge: ja,
  edgeSelected: za,
  edgeNew: Ga
};
const Fa = w("<svg><path></svg>", false, true);
const Ua = w("<svg><g cursor=\"pointer\"><circle></circle><svg fill=\"currentColor\" stroke-width=\"0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" color=\"white\" x=\"-10\" y=\"-10\"><path d=\"M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z\"></svg>", false, true);
const nn = i => {
  const [u, d] = F({
    x: i.position.x0 + (i.position.x1 - i.position.x0) / 2,
    y: i.position.y0 + (i.position.y1 - i.position.y0) / 2
  });
  Ge(() => {
    const n = i.position.x0 + (i.position.x1 - i.position.x0) / 2;
    const o = i.position.y0 + (i.position.y1 - i.position.y0) / 2;
    d({
      x: n,
      y: o
    });
  });
  function e(n, o) {
    const r = a => {
      if (!n.contains(a.target)) {
        o()?.();
      }
    };
    document.body.addEventListener("click", r);
    ke(() => document.body.removeEventListener("click", r));
  }
  function t(n) {
    return n * 100 / 200;
  }
  return [(() => {
    const n = Fa();
    _e(e, n, () => () => i.onClickOutside());
    n.$$click = () => i.onClickEdge();
    S(o => {
      const r = i.isNew ? qe.edgeNew : i.selected ? qe.edgeSelected : qe.edge;
      const a = `M ${i.position.x0} ${i.position.y0} C ${i.position.x0 + t(Math.abs(i.position.x1 - i.position.x0))} ${i.position.y0}, ${i.position.x1 - t(Math.abs(i.position.x1 - i.position.x0))} ${i.position.y1}, ${i.position.x1} ${i.position.y1}`;
      if (r !== o._v$) {
        D(n, "class", o._v$ = r);
      }
      if (a !== o._v$2) {
        D(n, "d", o._v$2 = a);
      }
      return o;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return n;
  })(), j((() => {
    const n = j(() => !!i.selected);
    return () => n() && (() => {
      const o = Ua();
      const r = o.firstChild;
      const a = r.nextSibling;
      Ke(o, "click", i.onClickDelete, true);
      S(l => {
        const s = qe.delete;
        const c = `translate(${u().x}, ${u().y})`;
        const _ = qe.circle;
        const f = qe.icon;
        if (s !== l._v$3) {
          D(o, "class", l._v$3 = s);
        }
        if (c !== l._v$4) {
          D(o, "transform", l._v$4 = c);
        }
        if (_ !== l._v$5) {
          D(r, "class", l._v$5 = _);
        }
        if (f !== l._v$6) {
          D(a, "class", l._v$6 = f);
        }
        return l;
      }, {
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined,
        _v$6: undefined
      });
      return o;
    })();
  })())];
};
H(["click"]);
const Za = "_main_1744p_1";
const Ha = {
  main: Za
};
const qa = w("<svg>");
const Va = i => {
  const [u, d] = F([]);
  const [e, t] = F("null");
  Ge(() => {
    const n = Object.keys(i.edgesActives).filter(o => i.edgesActives[o]);
    d(n);
  });
  Ge(() => {
    if (e() !== "null" && i.newEdge !== null) {
      t("null");
    }
  });
  return (() => {
    const n = qa();
    $(n, (() => {
      const o = j(() => i.newEdge !== null);
      return () => o() && v(nn, {
        selected: false,
        isNew: true,
        get position() {
          return {
            x0: i.newEdge.position.x0,
            y0: i.newEdge.position.y0,
            x1: i.newEdge.position.x1,
            y1: i.newEdge.position.y1
          };
        },
        onClickDelete: () => {},
        onClickEdge: () => {},
        onClickOutside: () => {}
      });
    })(), null);
    $(n, v(J, {
      get each() {
        return u();
      },
      children: o => {
        if (i.edgesActives[o]) {
          return v(nn, {
            get selected() {
              return o === e();
            },
            isNew: false,
            get position() {
              return {
                x0: i.edgesPositions[o]?.x0 || 0,
                y0: i.edgesPositions[o]?.y0 || 0,
                x1: i.edgesPositions[o]?.x1 || 0,
                y1: i.edgesPositions[o]?.y1 || 0
              };
            },
            onClickDelete: () => {
              i.onDeleteEdge(o);
            },
            onClickEdge: () => {
              t(o);
            },
            onClickOutside: () => {
              if (e() === o) {
                t("null");
              }
            }
          });
        }
      }
    }), null);
    S(() => D(n, "class", Ha.main));
    return n;
  })();
};
const Wa = "_node_r881m_1";
const Qa = "_nodeSelected_r881m_25";
const Ya = "_nodeLabel_r881m_49";
const Ka = "_nodeContent_r881m_54";
const Ja = "_nodeInputs_r881m_58";
const Xa = "_nodeInput_r881m_58";
const ec = "_nodeOutputs_r881m_82";
const tc = "_nodeOutput_r881m_82";
const nc = "_disabled_r881m_103";
const ic = "_actions_r881m_109";
const oc = "_actionsHidden_r881m_122";
const ge = {
  node: Wa,
  nodeSelected: Qa,
  nodeLabel: Ya,
  nodeContent: Ka,
  nodeInputs: Ja,
  nodeInput: Xa,
  nodeOutputs: ec,
  nodeOutput: tc,
  disabled: nc,
  actions: ic,
  actionsHidden: oc,
  delete: "_delete_r881m_136"
};
const rc = w("<div><div></div><div>");
const sc = w("<svg fill=\"currentColor\" stroke-width=\"0\" baseProfile=\"tiny\" version=\"1.2\" viewBox=\"4 4 16 16\" style=\"overflow:visible;\"><path d=\"M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293a.999.999 0 11-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12 8.293 9.707a.999.999 0 111.414-1.414L12 10.586l2.293-2.293a.999.999 0 111.414 1.414L13.414 12l2.293 2.293z\">");
const lc = w("<span>");
const yt = w("<div>");
const ac = w("<div id=\"outputs\">");
const cc = i => {
  let u = [...Array(i.inputs)];
  let d = [...Array(i.outputs)];
  le(() => {
    let t = [];
    let n = [];
    for (let o = 0; o < u.length; o++) {
      t.push({
        offset: {
          x: u[o].getBoundingClientRect().x,
          y: u[o].getBoundingClientRect().y
        }
      });
    }
    for (let o = 0; o < d.length; o++) {
      n.push({
        offset: {
          x: d[o].getBoundingClientRect().x,
          y: d[o].getBoundingClientRect().y
        }
      });
    }
    i.onNodeMount(t, n);
  });
  function e(t, n) {
    const o = r => {
      if (!t.contains(r.target)) {
        n()?.();
      }
    };
    document.body.addEventListener("click", o);
    ke(() => document.body.removeEventListener("click", o));
  }
  return (() => {
    const t = rc();
    const n = t.firstChild;
    const o = n.nextSibling;
    _e(e, t, () => () => i.onClickOutside());
    Ke(t, "mousedown", i.onMouseDown, true);
    const r = i.ref;
    if (typeof r == "function") {
      _e(r, t);
    } else {
      i.ref = t;
    }
    $(n, (() => {
      const a = j(() => !!i.actions && !!i.actions.delete);
      return () => a() && (() => {
        const l = sc();
        l.$$click = () => {
          if (i.onClickDelete) {
            i.onClickDelete();
          }
        };
        S(() => D(l, "class", ge.delete));
        return l;
      })();
    })());
    $(t, (() => {
      const a = j(() => !!i.label);
      return () => a() && (() => {
        const l = lc();
        $(l, () => i.label);
        S(() => m(l, ge.nodeLabel));
        return l;
      })();
    })(), o);
    $(o, () => i.content);
    $(t, (() => {
      const a = j(() => i.inputs > 0);
      return () => a() && (() => {
        const l = yt();
        $(l, v(J, {
          get each() {
            return [...Array(i.inputs).keys()];
          },
          children: (s, c) => (() => {
            const _ = yt();
            _.$$mouseup = f => {
              f.stopPropagation();
              if (i.onMouseUpInput) {
                i.onMouseUpInput(c());
              }
            };
            _.$$mousedown = f => {
              f.stopPropagation();
            };
            _e(f => {
              u[c()] = f;
            }, _);
            S(() => m(_, ge.nodeInput));
            return _;
          })()
        }));
        S(() => m(l, ge.nodeInputs));
        return l;
      })();
    })(), null);
    $(t, (() => {
      const a = j(() => i.outputs > 0);
      return () => a() && (() => {
        const l = ac();
        $(l, v(J, {
          get each() {
            return [...Array(i.outputs).keys()];
          },
          children: (s, c) => (() => {
            const _ = yt();
            _.$$mousedown = f => {
              f.stopPropagation();
              if (!i.disabled && i.onMouseDownOutput) {
                i.onMouseDownOutput(c());
              }
            };
            _e(f => {
              d[c()] = f;
            }, _);
            S(f => {
              const h = ge.nodeOutput;
              const g = {
                [ge.disabled]: i.disabled
              };
              if (h !== f._v$5) {
                m(_, f._v$5 = h);
              }
              f._v$6 = Z(_, g, f._v$6);
              return f;
            }, {
              _v$5: undefined,
              _v$6: undefined
            });
            return _;
          })()
        }));
        S(() => m(l, ge.nodeOutputs));
        return l;
      })();
    })(), null);
    S(a => {
      const l = i.selected ? ge.nodeSelected : ge.node;
      const s = `translate(${i.x}px, ${i.y}px)`;
      const c = i.selected ? ge.actions : ge.actionsHidden;
      const _ = ge.nodeContent;
      if (l !== a._v$) {
        m(t, a._v$ = l);
      }
      if (s !== a._v$2) {
        if ((a._v$2 = s) != null) {
          t.style.setProperty("transform", s);
        } else {
          t.style.removeProperty("transform");
        }
      }
      if (c !== a._v$3) {
        m(n, a._v$3 = c);
      }
      if (_ !== a._v$4) {
        m(o, a._v$4 = _);
      }
      return a;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return t;
  })();
};
H(["mousedown", "click", "mouseup"]);
const uc = "_main_yo48n_1";
const dc = {
  main: uc
};
const _c = w("<div>");
const fc = i => {
  const [u, d] = F(null);
  const [e, t] = F(null);
  let n;
  function o(l) {
    const s = l.x - n.getBoundingClientRect().x;
    const c = l.y - n.getBoundingClientRect().y;
    if (u() !== null) {
      i.onNodeMove(u() || 0, s, c);
    }
    i.onMouseMove(s, c);
  }
  function r(l) {
    d(null);
    i.onMouseUp();
  }
  function a(l, s, c) {
    d(l);
    t(l);
    i.onNodePress(s - n.getBoundingClientRect().x - i.nodesPositions[l].x, c - n.getBoundingClientRect().y - i.nodesPositions[l].y);
  }
  return (() => {
    const l = _c();
    l.$$mouseup = r;
    l.$$mousemove = o;
    const s = n;
    if (typeof s == "function") {
      _e(s, l);
    } else {
      n = l;
    }
    $(l, v(J, {
      get each() {
        return i.nodes;
      },
      children: (c, _) => v(cc, {
        get x() {
          return i.nodesPositions[_()].x;
        },
        get y() {
          return i.nodesPositions[_()].y;
        },
        get selected() {
          return e() === _();
        },
        get actions() {
          return c.actions;
        },
        get label() {
          return c.data.label;
        },
        get fixed() {
          return c.data.fixed;
        },
        get disabled() {
          return c.data.disabled;
        },
        get content() {
          return c.data.content;
        },
        get inputs() {
          return c.inputs;
        },
        get outputs() {
          return c.outputs;
        },
        onMouseDown: f => a(_(), f.x, f.y),
        onNodeMount: (f, h) => i.onNodeMount({
          nodeIndex: _(),
          inputs: f.map(g => ({
            offset: {
              x: g.offset.x - n.getBoundingClientRect().x - i.nodesPositions[_()].x + 6,
              y: g.offset.y - n.getBoundingClientRect().y - i.nodesPositions[_()].y + 6
            }
          })),
          outputs: h.map(g => ({
            offset: {
              x: g.offset.x - n.getBoundingClientRect().x - i.nodesPositions[_()].x + 6,
              y: g.offset.y - n.getBoundingClientRect().y - i.nodesPositions[_()].y + 6
            }
          }))
        }),
        onMouseDownOutput: f => i.onOutputMouseDown(_(), f),
        onMouseUpInput: f => i.onInputMouseUp(_(), f),
        onClickOutside: () => {
          if (_() === e()) {
            t(null);
          }
        },
        onClickDelete: () => {
          t(null);
          i.onNodeDelete(c.id);
        }
      })
    }));
    S(() => m(l, dc.main));
    return l;
  })();
};
H(["mousemove", "mouseup"]);
const hc = "_main_1cm5o_33";
const vc = "_wrapper_1cm5o_40";
const gc = "_content_1cm5o_46";
const xt = {
  main: hc,
  wrapper: vc,
  content: gc
};
const mc = w("<div><div><div>");
function at(i, u, d, e) {
  return `edge_${i}:${u}_${d}:${e}`;
}
function on(i) {
  const u = {};
  const d = {};
  const e = {};
  for (let t = 0; t < i.length; t++) {
    for (let n = 0; n < i.length; n++) {
      if (t !== n) {
        const o = i[t];
        const r = i[n];
        for (let a = 0; a < o.outputs; a++) {
          for (let l = 0; l < r.inputs; l++) {
            const s = at(o.id, a, r.id, l);
            d[s] = {
              x0: 0,
              y0: 0,
              x1: 0,
              y1: 0
            };
            e[s] = false;
            u[s] = {
              outNodeId: o.id,
              outputIndex: a,
              inNodeId: r.id,
              inputIndex: l
            };
          }
        }
      }
    }
  }
  return {
    initEdgesNodes: u,
    initEdgesPositions: d,
    initEdgesActives: e
  };
}
function rn(i, u) {
  const d = i.map(n => n.position);
  const e = i.map(n => ({
    edgesIn: u.map(o => o.targetNode === n.id ? at(o.sourceNode, o.sourceOutput, o.targetNode, o.targetInput) : "null").filter(o => o !== "null"),
    edgesOut: u.map(o => o.sourceNode === n.id ? at(o.sourceNode, o.sourceOutput, o.targetNode, o.targetInput) : "null").filter(o => o !== "null"),
    ...n
  }));
  const t = i.map(n => ({
    inputs: [...Array(n.inputs)].map(() => ({
      offset: {
        x: 0,
        y: 0
      }
    })),
    outputs: [...Array(n.outputs)].map(() => ({
      offset: {
        x: 0,
        y: 0
      }
    }))
  }));
  return {
    initNodesPositions: d,
    initNodesData: e,
    initNodesOffsets: t
  };
}
const $c = i => {
  const {
    initEdgesNodes: u,
    initEdgesPositions: d,
    initEdgesActives: e
  } = on(i.nodes);
  const [t, n] = F(u);
  const [o, r] = F(d);
  const [a, l] = F(e);
  const {
    initNodesPositions: s,
    initNodesData: c,
    initNodesOffsets: _
  } = rn(i.nodes, i.edges);
  const [f, h] = F(s);
  const [g, y] = ze(c);
  const [p, x] = ze(_);
  const [C, k] = F({
    x: 0,
    y: 0
  });
  const [b, M] = F(null);
  Ge(() => {
    const E = i.nodes.length;
    const P = g.length;
    if (E !== P) {
      const {
        initEdgesNodes: G,
        initEdgesPositions: O,
        initEdgesActives: V
      } = on(i.nodes);
      n(G);
      r(O);
      l(V);
      const {
        initNodesPositions: Y,
        initNodesData: ne,
        initNodesOffsets: ie
      } = rn(i.nodes, i.edges);
      h(Y);
      y(ne);
      x(ie);
    }
  });
  function I(E) {
    x(dt(P => {
      P[E.nodeIndex].inputs = E.inputs;
      P[E.nodeIndex].outputs = E.outputs;
    }));
    l(P => {
      const G = {
        ...P
      };
      g[E.nodeIndex].edgesIn.map(O => {
        G[O] = true;
      });
      g[E.nodeIndex].edgesOut.map(O => {
        G[O] = true;
      });
      return G;
    });
    r(P => {
      const G = {
        ...P
      };
      g[E.nodeIndex].edgesIn.map(O => {
        G[O] = {
          x0: P[O]?.x0 || 0,
          y0: P[O]?.y0 || 0,
          x1: f()[E.nodeIndex].x + E.inputs[t()[O].inputIndex].offset.x,
          y1: f()[E.nodeIndex].y + E.inputs[t()[O].inputIndex].offset.y
        };
      });
      g[E.nodeIndex].edgesOut.map(O => {
        G[O] = {
          x0: f()[E.nodeIndex].x + E.outputs[t()[O].outputIndex].offset.x,
          y0: f()[E.nodeIndex].y + E.outputs[t()[O].outputIndex].offset.y,
          x1: P[O]?.x1 || 0,
          y1: P[O]?.y1 || 0
        };
      });
      return G;
    });
  }
  function B(E, P) {
    k({
      x: E,
      y: P
    });
  }
  function z(E, P, G) {
    h(O => {
      const V = [...O];
      V[E].x = P - C().x;
      V[E].y = G - C().y;
      return V;
    });
    r(O => {
      const V = {
        ...O
      };
      g[E].edgesIn.map(Y => {
        if (a()[Y]) {
          V[Y] = {
            x0: O[Y]?.x0 || 0,
            y0: O[Y]?.y0 || 0,
            x1: P + p[E].inputs[t()[Y].inputIndex].offset.x - C().x,
            y1: G + p[E].inputs[t()[Y].inputIndex].offset.y - C().y
          };
        }
      });
      g[E].edgesOut.map(Y => {
        if (a()[Y]) {
          V[Y] = {
            x0: P + p[E].outputs[t()[Y].outputIndex].offset.x - C().x,
            y0: G + p[E].outputs[t()[Y].outputIndex].offset.y - C().y,
            x1: O[Y]?.x1 || 0,
            y1: O[Y]?.y1 || 0
          };
        }
      });
      return V;
    });
  }
  function T(E) {
    const P = i.nodes.filter(O => O.id !== E);
    const G = i.edges.filter(O => O.sourceNode !== E && O.targetNode !== E);
    i.onEdgesChange(G);
    i.onNodesChange(P);
  }
  function Q(E, P) {
    const G = f()[E];
    const O = p[E].outputs[P].offset;
    M({
      position: {
        x0: G.x + O.x,
        y0: G.y + O.y,
        x1: G.x + O.x,
        y1: G.y + O.y
      },
      sourceNode: E,
      sourceOutput: P
    });
  }
  function q(E, P) {
    if (b()?.sourceNode === E) {
      M(null);
      return;
    }
    const G = JSON.parse(JSON.stringify(g[b()?.sourceNode || 0].edgesOut));
    const O = JSON.parse(JSON.stringify(g[E].edgesIn));
    if (!b()) {
      return;
    }
    const V = g[b()?.sourceNode || 0].id;
    const Y = g[E].id;
    const ne = at(V, b()?.sourceOutput || 0, Y, P);
    let ie = false;
    if (O.includes(ne)) {
      ie = true;
    }
    if (G.length > 0) {
      ie = true;
    }
    if (!ie) {
      r(se => {
        const ae = {
          ...se
        };
        ae[ne] = {
          x0: f()[b()?.sourceNode || 0].x + p[b()?.sourceNode || 0].outputs[b()?.sourceOutput || 0].offset.x,
          y0: f()[b()?.sourceNode || 0].y + p[b()?.sourceNode || 0].outputs[b()?.sourceOutput || 0].offset.y,
          x1: f()[E].x + p[E].inputs[P].offset.x,
          y1: f()[E].y + p[E].inputs[P].offset.y
        };
        return ae;
      });
      l(se => {
        const ae = {
          ...se
        };
        ae[ne] = true;
        return ae;
      });
      y(dt(se => {
        se[b()?.sourceNode || 0].edgesOut.push(ne);
        se[E].edgesIn.push(ne);
      }));
      const ve = Object.keys(a());
      const Le = [];
      for (let se = 0; se < ve.length; se++) {
        if (a()[ve[se]]) {
          const ae = t()[ve[se]];
          Le.push({
            id: ve[se],
            sourceNode: ae.outNodeId,
            sourceOutput: ae.outputIndex,
            targetNode: ae.inNodeId,
            targetInput: ae.inputIndex
          });
        }
      }
    }
    const oe = Object.keys(a());
    const Xe = [];
    for (let ve = 0; ve < oe.length; ve++) {
      if (a()[oe[ve]]) {
        const Le = t()[oe[ve]];
        Xe.push({
          id: oe[ve],
          sourceNode: Le.outNodeId,
          sourceOutput: Le.outputIndex,
          targetNode: Le.inNodeId,
          targetInput: Le.inputIndex
        });
      }
    }
    i.onEdgesChange(Xe);
    M(null);
  }
  function ee() {
    M(null);
  }
  function fe(E, P) {
    if (b() !== null) {
      M({
        position: {
          x0: b()?.position?.x0 || 0,
          y0: b()?.position?.y0 || 0,
          x1: E,
          y1: P
        },
        sourceNode: b()?.sourceNode || 0,
        sourceOutput: b()?.sourceOutput || 0
      });
    }
  }
  function he(E) {
    y(dt(O => {
      const V = t()[E].outNodeId;
      const Y = t()[E].inNodeId;
      const ne = O.findIndex(oe => oe.id === V);
      const ie = O.findIndex(oe => oe.id === Y);
      O[ie].edgesIn = O[ie].edgesIn.filter(oe => oe !== E);
      O[ne].edgesOut = O[ne].edgesOut.filter(oe => oe !== E);
    }));
    l(O => {
      const V = {
        ...O
      };
      V[E] = false;
      return V;
    });
    const P = Object.keys(a());
    const G = [];
    for (let O = 0; O < P.length; O++) {
      if (a()[P[O]]) {
        const V = t()[P[O]];
        G.push({
          id: P[O],
          sourceNode: V.outNodeId,
          sourceOutput: V.outputIndex,
          targetNode: V.inNodeId,
          targetInput: V.inputIndex
        });
      }
    }
    i.onEdgesChange(G);
  }
  return (() => {
    const E = mc();
    const P = E.firstChild;
    const G = P.firstChild;
    $(G, v(fc, {
      get nodesPositions() {
        return f();
      },
      nodes: g,
      onNodeMount: I,
      onNodePress: B,
      onNodeMove: z,
      onNodeDelete: T,
      onOutputMouseDown: Q,
      onInputMouseUp: q,
      onMouseUp: ee,
      onMouseMove: fe
    }), null);
    $(G, v(Va, {
      get newEdge() {
        return b();
      },
      get edgesActives() {
        return a();
      },
      get edgesPositions() {
        return o();
      },
      onDeleteEdge: he
    }), null);
    S(O => {
      const V = xt.main;
      const Y = xt.wrapper;
      const ne = xt.content;
      const ie = b() !== null ? "crosshair" : "inherit";
      if (V !== O._v$) {
        m(E, O._v$ = V);
      }
      if (Y !== O._v$2) {
        m(P, O._v$2 = Y);
      }
      if (ne !== O._v$3) {
        m(G, O._v$3 = ne);
      }
      if (ie !== O._v$4) {
        if ((O._v$4 = ie) != null) {
          G.style.setProperty("cursor", ie);
        } else {
          G.style.removeProperty("cursor");
        }
      }
      return O;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return E;
  })();
};
const pc = "_container_10khg_1";
const Cc = "_active_10khg_14";
const yc = "_flowContainer_10khg_18";
const xc = "_button_10khg_28";
const Ve = {
  container: pc,
  active: Cc,
  flowContainer: yc,
  button: xc
};
const bc = w("<p>Storage <span>");
const Lc = w("<p>Desk <span>");
const wc = w("<div><div></div><div class=\"flex w-full flex-row items-center justify-end gap-[1vh]\"><div>Unlink All</div><div>Link All</div><div>Save");
const kc = () => {
  function i(c) {
    const _ = window.innerHeight;
    return c * 0.01 * _;
  }
  const [u, d] = F([]);
  const [e, t] = F([]);
  const [n, o] = F(null);
  const [r, {
    refetch: a
  }] = X(async () => A.execute("hideout:storage:getDeskData"));
  le(async () => {
    const c = [];
    const _ = [];
    await tt.waitForCondition(() => !r.loading, 10000);
    const f = r();
    if (f) {
      for (let h = 0; h < f.totalStorages.length; h++) {
        const g = f.totalStorages[h];
        const y = 5;
        const p = h % y;
        let x = Math.floor(h / y);
        x = p % 2 === 0 ? x * 2 : x * 2 + 1;
        c.push({
          id: g.id,
          position: {
            x: i(2) + i(15) * p,
            y: i(5) * x + i(2)
          },
          data: {
            content: (() => {
              const k = bc();
              const b = k.firstChild;
              const M = b.nextSibling;
              $(M, `#${h + 1}`);
              return k;
            })()
          },
          inputs: 0,
          outputs: 1
        });
        const C = g.public.linkedId;
        if (C) {
          if (!f.totalDesks.find(b => b.id === C)) {
            continue;
          }
          _.push({
            id: `edge-${h}`,
            sourceNode: g.id,
            sourceOutput: 0,
            targetNode: C,
            targetInput: 0
          });
        }
      }
      for (let h = 0; h < f.totalDesks.length; h++) {
        const g = f.totalDesks[h];
        const y = 1;
        const p = h % y;
        const x = Math.floor(h / y);
        c.push({
          id: g.id,
          position: {
            x: i(85) + i(23) * p,
            y: i(10) * x + i(5)
          },
          data: {
            fixed: true,
            content: (() => {
              const C = Lc();
              const k = C.firstChild;
              const b = k.nextSibling;
              $(b, `#${h + 1}`);
              S(M => Z(b, {
                [Ve.active]: g.id === f.currentDeskId
              }, M));
              return C;
            })()
          },
          inputs: 1,
          outputs: 0
        });
      }
      d(c);
      t(_);
      o(f);
      s(!l());
      s(!l());
    }
  });
  const [l, s] = F(false);
  return v(Te, {
    get fallback() {
      return v(Re, {});
    },
    get children() {
      return v(U, {
        get when() {
          return r();
        },
        get children() {
          const c = wc();
          const _ = c.firstChild;
          const f = _.nextSibling;
          const h = f.firstChild;
          const g = h.nextSibling;
          const y = g.nextSibling;
          $(c, v($e, {}), _);
          $(_, v(U, {
            get when() {
              return !l();
            },
            get children() {
              return v($c, {
                get nodes() {
                  return u();
                },
                get edges() {
                  return e();
                },
                onNodesChange: p => {
                  d(p);
                },
                onEdgesChange: p => {
                  t(p);
                }
              });
            }
          }));
          h.$$click = () => {
            t([]);
            s(!l());
            K("hideout", "Successfully unlinked storages");
            s(!l());
          };
          g.$$click = () => {
            const p = [];
            for (let x = 0; x < n().totalStorages.length; x++) {
              const C = n().totalStorages[x];
              const k = n().totalDesks[x].id;
              p.push({
                id: `edge-${x}`,
                sourceNode: C.id,
                sourceOutput: 0,
                targetNode: k,
                targetInput: 0
              });
            }
            t(p);
            s(!l());
            K("hideout", "Successfully linked storages");
            s(!l());
          };
          y.$$click = async () => {
            const p = {};
            for (const C of u()) {
              if (!C.data.fixed) {
                const k = e().find(b => b.sourceNode === C.id);
                p[C.id] = k?.targetNode ?? null;
              }
            }
            for (const C of e()) {
              p[C.sourceNode] = C.targetNode;
            }
            if (await A.execute("hideout:storages:save", p)) {
              K("hideout", "Successfully linked storages");
            } else {
              K("hideout", "Failed to link storages");
            }
          };
          S(p => {
            const x = Ve.container;
            const C = Ve.flowContainer;
            const k = Ve.button;
            const b = Ve.button;
            const M = Ve.button;
            if (x !== p._v$) {
              m(c, p._v$ = x);
            }
            if (C !== p._v$2) {
              m(_, p._v$2 = C);
            }
            if (k !== p._v$3) {
              m(h, p._v$3 = k);
            }
            if (b !== p._v$4) {
              m(g, p._v$4 = b);
            }
            if (M !== p._v$5) {
              m(y, p._v$5 = M);
            }
            return p;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined,
            _v$4: undefined,
            _v$5: undefined
          });
          return c;
        }
      });
    }
  });
};
H(["click"]);
const Sc = "_container_7jqzw_1";
const Mc = "_infoList_7jqzw_26";
const Ec = "_hidden_7jqzw_38";
const Pc = "_info_7jqzw_26";
const Oc = "_greyText_7jqzw_51";
const Nc = "_filterButton_7jqzw_88";
const Ic = "_active_7jqzw_108";
const Ac = "_blocked_7jqzw_114";
const Be = {
  container: Sc,
  infoList: Mc,
  hidden: Ec,
  info: Pc,
  greyText: Oc,
  filterButton: Nc,
  active: Ic,
  blocked: Ac
};
const Tc = w("<div><div class=\"flex w-full flex-col items-start justify-start\"><h1>MANAGEMENT</h1><p></div><div><div><h1>TURF CONTROL</h1><p>Total influence of the turf</p><div class=\"mt-[0.5vh] flex flex-row items-center justify-start gap-[0.5vh]\"><i class=\"fa-sharp fa-bolt\"></i><div></div></div></div><div><h1>TURF GROUPS</h1><p>Total groups in the turf</p><div class=\"mt-[0.5vh] flex flex-row items-center justify-start gap-[0.5vh]\"><i class=\"fa-sharp fa-users\"></i><div>");
const Rc = () => {
  const {
    selectedTurf: i,
    setSelectedTurf: u,
    turfZonesResource: d,
    config: e
  } = W();
  const [t] = d;
  const n = j(() => i() ? t()?.[i()] : null);
  ke(() => {
    u(null);
  });
  const [o, {
    refetch: r
  }] = X(() => A.execute("hideout:turfs:getTotalInfluenceInTurf", n()?.id));
  const [a] = X(() => A.execute("hideout:turfs:getTotalGroups"));
  Ge(() => {
    if (n()) {
      r();
    }
  });
  return (() => {
    const l = Tc();
    const s = l.firstChild;
    const c = s.firstChild;
    const _ = c.nextSibling;
    const f = s.nextSibling;
    const h = f.firstChild;
    const g = h.firstChild;
    const y = g.nextSibling;
    const p = y.nextSibling;
    const x = p.firstChild;
    const C = x.nextSibling;
    const k = h.nextSibling;
    const b = k.firstChild;
    const M = b.nextSibling;
    const I = M.nextSibling;
    const B = I.firstChild;
    const z = B.nextSibling;
    $(_, (() => {
      const T = j(() => !!n());
      return () => T() ? `Selected Turf: ${n().label}` : "No Turf selected";
    })());
    $(C, () => o()?.toFixed(1) ?? 0);
    $(z, v(U, {
      get when() {
        return n();
      },
      fallback: 0,
      get children() {
        return [j(() => a()?.[n().id] ?? 0), "/", j(() => e()?.turfZones?.[n().id].limit)];
      }
    }));
    S(T => {
      const Q = Be.container;
      const q = Be.infoList;
      const ee = {
        [Be.hidden]: !n()
      };
      const fe = Be.info;
      const he = Be.greyText;
      const E = Be.info;
      const P = Be.greyText;
      if (Q !== T._v$) {
        m(l, T._v$ = Q);
      }
      if (q !== T._v$2) {
        m(f, T._v$2 = q);
      }
      T._v$3 = Z(f, ee, T._v$3);
      if (fe !== T._v$4) {
        m(h, T._v$4 = fe);
      }
      if (he !== T._v$5) {
        m(C, T._v$5 = he);
      }
      if (E !== T._v$6) {
        m(k, T._v$6 = E);
      }
      if (P !== T._v$7) {
        m(z, T._v$7 = P);
      }
      return T;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return l;
  })();
};
(function (i, u) {
  if (typeof exports == "object" && typeof module !== "undefined") {
    u(exports);
  } else if (typeof define == "function" && define.amd) {
    define(["exports"], u);
  } else {
    i = i || self;
    u((i.Leaflet = i.Leaflet || {}, i.Leaflet.markercluster = {}));
  }
})(globalThis, function (i) {
  var u = L.MarkerClusterGroup = L.FeatureGroup.extend({
    options: {
      maxClusterRadius: 80,
      iconCreateFunction: null,
      clusterPane: L.Marker.prototype.options.pane,
      spiderfyOnEveryZoom: false,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true,
      singleMarkerMode: false,
      disableClusteringAtZoom: null,
      removeOutsideVisibleBounds: true,
      animate: true,
      animateAddingMarkers: false,
      spiderfyShapePositions: null,
      spiderfyDistanceMultiplier: 1,
      spiderLegPolylineOptions: {
        weight: 1.5,
        color: "#222",
        opacity: 0.5
      },
      chunkedLoading: false,
      chunkInterval: 200,
      chunkDelay: 50,
      chunkProgress: null,
      polygonOptions: {}
    },
    initialize: function (e) {
      L.Util.setOptions(this, e);
      this.options.iconCreateFunction ||= this._defaultIconCreateFunction;
      this._featureGroup = L.featureGroup();
      this._featureGroup.addEventParent(this);
      this._nonPointGroup = L.featureGroup();
      this._nonPointGroup.addEventParent(this);
      this._inZoomAnimation = 0;
      this._needsClustering = [];
      this._needsRemoving = [];
      this._currentShownBounds = null;
      this._queue = [];
      this._childMarkerEventHandlers = {
        dragstart: this._childMarkerDragStart,
        move: this._childMarkerMoved,
        dragend: this._childMarkerDragEnd
      };
      var t = L.DomUtil.TRANSITION && this.options.animate;
      L.extend(this, t ? this._withAnimation : this._noAnimation);
      this._markerCluster = t ? L.MarkerCluster : L.MarkerClusterNonAnimated;
    },
    addLayer: function (e) {
      if (e instanceof L.LayerGroup) {
        return this.addLayers([e]);
      }
      if (!e.getLatLng) {
        this._nonPointGroup.addLayer(e);
        this.fire("layeradd", {
          layer: e
        });
        return this;
      }
      if (!this._map) {
        this._needsClustering.push(e);
        this.fire("layeradd", {
          layer: e
        });
        return this;
      }
      if (this.hasLayer(e)) {
        return this;
      }
      if (this._unspiderfy) {
        this._unspiderfy();
      }
      this._addLayer(e, this._maxZoom);
      this.fire("layeradd", {
        layer: e
      });
      this._topClusterLevel._recalculateBounds();
      this._refreshClustersIcons();
      var t = e;
      var n = this._zoom;
      if (e.__parent) {
        while (t.__parent._zoom >= n) {
          t = t.__parent;
        }
      }
      if (this._currentShownBounds.contains(t.getLatLng())) {
        if (this.options.animateAddingMarkers) {
          this._animationAddLayer(e, t);
        } else {
          this._animationAddLayerNonAnimated(e, t);
        }
      }
      return this;
    },
    removeLayer: function (e) {
      if (e instanceof L.LayerGroup) {
        return this.removeLayers([e]);
      } else if (e.getLatLng) {
        if (this._map) {
          if (e.__parent) {
            if (this._unspiderfy) {
              this._unspiderfy();
              this._unspiderfyLayer(e);
            }
            this._removeLayer(e, true);
            this.fire("layerremove", {
              layer: e
            });
            this._topClusterLevel._recalculateBounds();
            this._refreshClustersIcons();
            e.off(this._childMarkerEventHandlers, this);
            if (this._featureGroup.hasLayer(e)) {
              this._featureGroup.removeLayer(e);
              if (e.clusterShow) {
                e.clusterShow();
              }
            }
            return this;
          } else {
            return this;
          }
        } else {
          if (!this._arraySplice(this._needsClustering, e) && this.hasLayer(e)) {
            this._needsRemoving.push({
              layer: e,
              latlng: e._latlng
            });
          }
          this.fire("layerremove", {
            layer: e
          });
          return this;
        }
      } else {
        this._nonPointGroup.removeLayer(e);
        this.fire("layerremove", {
          layer: e
        });
        return this;
      }
    },
    addLayers: function (e, t) {
      if (!L.Util.isArray(e)) {
        return this.addLayer(e);
      }
      var n = this._featureGroup;
      var o = this._nonPointGroup;
      var r = this.options.chunkedLoading;
      var a = this.options.chunkInterval;
      var l = this.options.chunkProgress;
      var s = e.length;
      var c = 0;
      var _ = true;
      var f;
      if (this._map) {
        var h = new Date().getTime();
        var g = L.bind(function () {
          var p = new Date().getTime();
          for (this._map && this._unspiderfy && this._unspiderfy(); c < s; c++) {
            if (r && c % 200 === 0) {
              var x = new Date().getTime() - p;
              if (x > a) {
                break;
              }
            }
            f = e[c];
            if (f instanceof L.LayerGroup) {
              if (_) {
                e = e.slice();
                _ = false;
              }
              this._extractNonGroupLayers(f, e);
              s = e.length;
              continue;
            }
            if (!f.getLatLng) {
              o.addLayer(f);
              if (!t) {
                this.fire("layeradd", {
                  layer: f
                });
              }
              continue;
            }
            if (!this.hasLayer(f) && (this._addLayer(f, this._maxZoom), t || this.fire("layeradd", {
              layer: f
            }), f.__parent && f.__parent.getChildCount() === 2)) {
              var C = f.__parent.getAllChildMarkers();
              var k = C[0] === f ? C[1] : C[0];
              n.removeLayer(k);
            }
          }
          if (l) {
            l(c, s, new Date().getTime() - h);
          }
          if (c === s) {
            this._topClusterLevel._recalculateBounds();
            this._refreshClustersIcons();
            this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds);
          } else {
            setTimeout(g, this.options.chunkDelay);
          }
        }, this);
        g();
      } else {
        var y = this._needsClustering;
        for (; c < s; c++) {
          f = e[c];
          if (f instanceof L.LayerGroup) {
            if (_) {
              e = e.slice();
              _ = false;
            }
            this._extractNonGroupLayers(f, e);
            s = e.length;
            continue;
          }
          if (!f.getLatLng) {
            o.addLayer(f);
            continue;
          }
          if (!this.hasLayer(f)) {
            y.push(f);
          }
        }
      }
      return this;
    },
    removeLayers: function (e) {
      var t;
      var n;
      var o = e.length;
      var r = this._featureGroup;
      var a = this._nonPointGroup;
      var l = true;
      if (!this._map) {
        for (t = 0; t < o; t++) {
          n = e[t];
          if (n instanceof L.LayerGroup) {
            if (l) {
              e = e.slice();
              l = false;
            }
            this._extractNonGroupLayers(n, e);
            o = e.length;
            continue;
          }
          this._arraySplice(this._needsClustering, n);
          a.removeLayer(n);
          if (this.hasLayer(n)) {
            this._needsRemoving.push({
              layer: n,
              latlng: n._latlng
            });
          }
          this.fire("layerremove", {
            layer: n
          });
        }
        return this;
      }
      if (this._unspiderfy) {
        this._unspiderfy();
        var s = e.slice();
        var c = o;
        for (t = 0; t < c; t++) {
          n = s[t];
          if (n instanceof L.LayerGroup) {
            this._extractNonGroupLayers(n, s);
            c = s.length;
            continue;
          }
          this._unspiderfyLayer(n);
        }
      }
      for (t = 0; t < o; t++) {
        n = e[t];
        if (n instanceof L.LayerGroup) {
          if (l) {
            e = e.slice();
            l = false;
          }
          this._extractNonGroupLayers(n, e);
          o = e.length;
          continue;
        }
        if (!n.__parent) {
          a.removeLayer(n);
          this.fire("layerremove", {
            layer: n
          });
          continue;
        }
        this._removeLayer(n, true, true);
        this.fire("layerremove", {
          layer: n
        });
        if (r.hasLayer(n)) {
          r.removeLayer(n);
          if (n.clusterShow) {
            n.clusterShow();
          }
        }
      }
      this._topClusterLevel._recalculateBounds();
      this._refreshClustersIcons();
      this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds);
      return this;
    },
    clearLayers: function () {
      if (!this._map) {
        this._needsClustering = [];
        this._needsRemoving = [];
        delete this._gridClusters;
        delete this._gridUnclustered;
      }
      if (this._noanimationUnspiderfy) {
        this._noanimationUnspiderfy();
      }
      this._featureGroup.clearLayers();
      this._nonPointGroup.clearLayers();
      this.eachLayer(function (e) {
        e.off(this._childMarkerEventHandlers, this);
        delete e.__parent;
      }, this);
      if (this._map) {
        this._generateInitialClusters();
      }
      return this;
    },
    getBounds: function () {
      var e = new L.LatLngBounds();
      if (this._topClusterLevel) {
        e.extend(this._topClusterLevel._bounds);
      }
      for (var t = this._needsClustering.length - 1; t >= 0; t--) {
        e.extend(this._needsClustering[t].getLatLng());
      }
      e.extend(this._nonPointGroup.getBounds());
      return e;
    },
    eachLayer: function (e, t) {
      var n = this._needsClustering.slice();
      var o = this._needsRemoving;
      var r;
      var a;
      var l;
      if (this._topClusterLevel) {
        this._topClusterLevel.getAllChildMarkers(n);
      }
      a = n.length - 1;
      for (; a >= 0; a--) {
        r = true;
        l = o.length - 1;
        for (; l >= 0; l--) {
          if (o[l].layer === n[a]) {
            r = false;
            break;
          }
        }
        if (r) {
          e.call(t, n[a]);
        }
      }
      this._nonPointGroup.eachLayer(e, t);
    },
    getLayers: function () {
      var e = [];
      this.eachLayer(function (t) {
        e.push(t);
      });
      return e;
    },
    getLayer: function (e) {
      var t = null;
      e = parseInt(e, 10);
      this.eachLayer(function (n) {
        if (L.stamp(n) === e) {
          t = n;
        }
      });
      return t;
    },
    hasLayer: function (e) {
      if (!e) {
        return false;
      }
      var t;
      var n = this._needsClustering;
      for (t = n.length - 1; t >= 0; t--) {
        if (n[t] === e) {
          return true;
        }
      }
      n = this._needsRemoving;
      t = n.length - 1;
      for (; t >= 0; t--) {
        if (n[t].layer === e) {
          return false;
        }
      }
      return !!e.__parent && e.__parent._group === this || this._nonPointGroup.hasLayer(e);
    },
    zoomToShowLayer: function (e, t) {
      var n = this._map;
      if (typeof t != "function") {
        t = function () {};
      }
      function o() {
        if ((n.hasLayer(e) || n.hasLayer(e.__parent)) && !this._inZoomAnimation) {
          this._map.off("moveend", o, this);
          this.off("animationend", o, this);
          if (n.hasLayer(e)) {
            t();
          } else if (e.__parent._icon) {
            this.once("spiderfied", t, this);
            e.__parent.spiderfy();
          }
        }
      }
      if (e._icon && this._map.getBounds().contains(e.getLatLng())) {
        t();
      } else if (e.__parent._zoom < Math.round(this._map._zoom)) {
        this._map.on("moveend", o, this);
        this._map.panTo(e.getLatLng());
      } else {
        this._map.on("moveend", o, this);
        this.on("animationend", o, this);
        e.__parent.zoomToBounds();
      }
    },
    onAdd: function (e) {
      this._map = e;
      var t;
      var n;
      var o;
      if (!isFinite(this._map.getMaxZoom())) {
        throw "Map has no maxZoom specified";
      }
      this._featureGroup.addTo(e);
      this._nonPointGroup.addTo(e);
      if (!this._gridClusters) {
        this._generateInitialClusters();
      }
      this._maxLat = e.options.crs.projection.MAX_LATITUDE;
      t = 0;
      n = this._needsRemoving.length;
      for (; t < n; t++) {
        o = this._needsRemoving[t];
        o.newlatlng = o.layer._latlng;
        o.layer._latlng = o.latlng;
      }
      t = 0;
      n = this._needsRemoving.length;
      for (; t < n; t++) {
        o = this._needsRemoving[t];
        this._removeLayer(o.layer, true);
        o.layer._latlng = o.newlatlng;
      }
      this._needsRemoving = [];
      this._zoom = Math.round(this._map._zoom);
      this._currentShownBounds = this._getExpandedVisibleBounds();
      this._map.on("zoomend", this._zoomEnd, this);
      this._map.on("moveend", this._moveEnd, this);
      if (this._spiderfierOnAdd) {
        this._spiderfierOnAdd();
      }
      this._bindEvents();
      n = this._needsClustering;
      this._needsClustering = [];
      this.addLayers(n, true);
    },
    onRemove: function (e) {
      e.off("zoomend", this._zoomEnd, this);
      e.off("moveend", this._moveEnd, this);
      this._unbindEvents();
      this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "");
      if (this._spiderfierOnRemove) {
        this._spiderfierOnRemove();
      }
      delete this._maxLat;
      this._hideCoverage();
      this._featureGroup.remove();
      this._nonPointGroup.remove();
      this._featureGroup.clearLayers();
      this._map = null;
    },
    getVisibleParent: function (e) {
      for (var t = e; t && !t._icon;) {
        t = t.__parent;
      }
      return t || null;
    },
    _arraySplice: function (e, t) {
      for (var n = e.length - 1; n >= 0; n--) {
        if (e[n] === t) {
          e.splice(n, 1);
          return true;
        }
      }
    },
    _removeFromGridUnclustered: function (e, t) {
      for (var n = this._map, o = this._gridUnclustered, r = Math.floor(this._map.getMinZoom()); t >= r && o[t].removeObject(e, n.project(e.getLatLng(), t)); t--);
    },
    _childMarkerDragStart: function (e) {
      e.target.__dragStart = e.target._latlng;
    },
    _childMarkerMoved: function (e) {
      if (!this._ignoreMove && !e.target.__dragStart) {
        var t = e.target._popup && e.target._popup.isOpen();
        this._moveChild(e.target, e.oldLatLng, e.latlng);
        if (t) {
          e.target.openPopup();
        }
      }
    },
    _moveChild: function (e, t, n) {
      e._latlng = t;
      this.removeLayer(e);
      e._latlng = n;
      this.addLayer(e);
    },
    _childMarkerDragEnd: function (e) {
      var t = e.target.__dragStart;
      delete e.target.__dragStart;
      if (t) {
        this._moveChild(e.target, t, e.target._latlng);
      }
    },
    _removeLayer: function (e, t, n) {
      var o = this._gridClusters;
      var r = this._gridUnclustered;
      var a = this._featureGroup;
      var l = this._map;
      var s = Math.floor(this._map.getMinZoom());
      if (t) {
        this._removeFromGridUnclustered(e, this._maxZoom);
      }
      var c = e.__parent;
      var _ = c._markers;
      var f;
      for (this._arraySplice(_, e); c && (c._childCount--, c._boundsNeedUpdate = true, !(c._zoom < s));) {
        if (t && c._childCount <= 1) {
          f = c._markers[0] === e ? c._markers[1] : c._markers[0];
          o[c._zoom].removeObject(c, l.project(c._cLatLng, c._zoom));
          r[c._zoom].addObject(f, l.project(f.getLatLng(), c._zoom));
          this._arraySplice(c.__parent._childClusters, c);
          c.__parent._markers.push(f);
          f.__parent = c.__parent;
          if (c._icon) {
            a.removeLayer(c);
            if (!n) {
              a.addLayer(f);
            }
          }
        } else {
          c._iconNeedsUpdate = true;
        }
        c = c.__parent;
      }
      delete e.__parent;
    },
    _isOrIsParent: function (e, t) {
      while (t) {
        if (e === t) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    },
    fire: function (e, t, n) {
      if (t && t.layer instanceof L.MarkerCluster) {
        if (t.originalEvent && this._isOrIsParent(t.layer._icon, t.originalEvent.relatedTarget)) {
          return;
        }
        e = "cluster" + e;
      }
      L.FeatureGroup.prototype.fire.call(this, e, t, n);
    },
    listens: function (e, t) {
      return L.FeatureGroup.prototype.listens.call(this, e, t) || L.FeatureGroup.prototype.listens.call(this, "cluster" + e, t);
    },
    _defaultIconCreateFunction: function (e) {
      var t = e.getChildCount();
      var n = " marker-cluster-";
      if (t < 10) {
        n += "small";
      } else if (t < 100) {
        n += "medium";
      } else {
        n += "large";
      }
      return new L.DivIcon({
        html: "<div><span>" + t + "</span></div>",
        className: "marker-cluster" + n,
        iconSize: new L.Point(40, 40)
      });
    },
    _bindEvents: function () {
      var e = this._map;
      var t = this.options.spiderfyOnMaxZoom;
      var n = this.options.showCoverageOnHover;
      var o = this.options.zoomToBoundsOnClick;
      var r = this.options.spiderfyOnEveryZoom;
      if (t || o || r) {
        this.on("clusterclick clusterkeypress", this._zoomOrSpiderfy, this);
      }
      if (n) {
        this.on("clustermouseover", this._showCoverage, this);
        this.on("clustermouseout", this._hideCoverage, this);
        e.on("zoomend", this._hideCoverage, this);
      }
    },
    _zoomOrSpiderfy: function (e) {
      var t = e.layer;
      var n = t;
      if (e.type !== "clusterkeypress" || !e.originalEvent || e.originalEvent.keyCode === 13) {
        while (n._childClusters.length === 1) {
          n = n._childClusters[0];
        }
        if (n._zoom === this._maxZoom && n._childCount === t._childCount && this.options.spiderfyOnMaxZoom) {
          t.spiderfy();
        } else if (this.options.zoomToBoundsOnClick) {
          t.zoomToBounds();
        }
        if (this.options.spiderfyOnEveryZoom) {
          t.spiderfy();
        }
        if (e.originalEvent && e.originalEvent.keyCode === 13) {
          this._map._container.focus();
        }
      }
    },
    _showCoverage: function (e) {
      var t = this._map;
      if (!this._inZoomAnimation) {
        if (this._shownPolygon) {
          t.removeLayer(this._shownPolygon);
        }
        if (e.layer.getChildCount() > 2 && e.layer !== this._spiderfied) {
          this._shownPolygon = new L.Polygon(e.layer.getConvexHull(), this.options.polygonOptions);
          t.addLayer(this._shownPolygon);
        }
      }
    },
    _hideCoverage: function () {
      if (this._shownPolygon) {
        this._map.removeLayer(this._shownPolygon);
        this._shownPolygon = null;
      }
    },
    _unbindEvents: function () {
      var e = this.options.spiderfyOnMaxZoom;
      var t = this.options.showCoverageOnHover;
      var n = this.options.zoomToBoundsOnClick;
      var o = this.options.spiderfyOnEveryZoom;
      var r = this._map;
      if (e || n || o) {
        this.off("clusterclick clusterkeypress", this._zoomOrSpiderfy, this);
      }
      if (t) {
        this.off("clustermouseover", this._showCoverage, this);
        this.off("clustermouseout", this._hideCoverage, this);
        r.off("zoomend", this._hideCoverage, this);
      }
    },
    _zoomEnd: function () {
      if (this._map) {
        this._mergeSplitClusters();
        this._zoom = Math.round(this._map._zoom);
        this._currentShownBounds = this._getExpandedVisibleBounds();
      }
    },
    _moveEnd: function () {
      if (!this._inZoomAnimation) {
        var e = this._getExpandedVisibleBounds();
        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, e);
        this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), e);
        this._currentShownBounds = e;
      }
    },
    _generateInitialClusters: function () {
      var e = Math.ceil(this._map.getMaxZoom());
      var t = Math.floor(this._map.getMinZoom());
      var n = this.options.maxClusterRadius;
      var o = n;
      if (typeof n != "function") {
        o = function () {
          return n;
        };
      }
      if (this.options.disableClusteringAtZoom !== null) {
        e = this.options.disableClusteringAtZoom - 1;
      }
      this._maxZoom = e;
      this._gridClusters = {};
      this._gridUnclustered = {};
      for (var r = e; r >= t; r--) {
        this._gridClusters[r] = new L.DistanceGrid(o(r));
        this._gridUnclustered[r] = new L.DistanceGrid(o(r));
      }
      this._topClusterLevel = new this._markerCluster(this, t - 1);
    },
    _addLayer: function (e, t) {
      var n = this._gridClusters;
      var o = this._gridUnclustered;
      var r = Math.floor(this._map.getMinZoom());
      var a;
      var l;
      if (this.options.singleMarkerMode) {
        this._overrideMarkerIcon(e);
      }
      e.on(this._childMarkerEventHandlers, this);
      for (; t >= r; t--) {
        a = this._map.project(e.getLatLng(), t);
        var s = n[t].getNearObject(a);
        if (s) {
          s._addChild(e);
          e.__parent = s;
          return;
        }
        s = o[t].getNearObject(a);
        if (s) {
          var c = s.__parent;
          if (c) {
            this._removeLayer(s, false);
          }
          var _ = new this._markerCluster(this, t, s, e);
          n[t].addObject(_, this._map.project(_._cLatLng, t));
          s.__parent = _;
          e.__parent = _;
          var f = _;
          for (l = t - 1; l > c._zoom; l--) {
            f = new this._markerCluster(this, l, f);
            n[l].addObject(f, this._map.project(s.getLatLng(), l));
          }
          c._addChild(f);
          this._removeFromGridUnclustered(s, t);
          return;
        }
        o[t].addObject(e, a);
      }
      this._topClusterLevel._addChild(e);
      e.__parent = this._topClusterLevel;
    },
    _refreshClustersIcons: function () {
      this._featureGroup.eachLayer(function (e) {
        if (e instanceof L.MarkerCluster && e._iconNeedsUpdate) {
          e._updateIcon();
        }
      });
    },
    _enqueue: function (e) {
      this._queue.push(e);
      this._queueTimeout ||= setTimeout(L.bind(this._processQueue, this), 300);
    },
    _processQueue: function () {
      for (var e = 0; e < this._queue.length; e++) {
        this._queue[e].call(this);
      }
      this._queue.length = 0;
      clearTimeout(this._queueTimeout);
      this._queueTimeout = null;
    },
    _mergeSplitClusters: function () {
      var e = Math.round(this._map._zoom);
      this._processQueue();
      if (this._zoom < e && this._currentShownBounds.intersects(this._getExpandedVisibleBounds())) {
        this._animationStart();
        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds());
        this._animationZoomIn(this._zoom, e);
      } else if (this._zoom > e) {
        this._animationStart();
        this._animationZoomOut(this._zoom, e);
      } else {
        this._moveEnd();
      }
    },
    _getExpandedVisibleBounds: function () {
      if (this.options.removeOutsideVisibleBounds) {
        if (L.Browser.mobile) {
          return this._checkBoundsMaxLat(this._map.getBounds());
        }
      } else {
        return this._mapBoundsInfinite;
      }
      return this._checkBoundsMaxLat(this._map.getBounds().pad(1));
    },
    _checkBoundsMaxLat: function (e) {
      var t = this._maxLat;
      if (t !== undefined) {
        if (e.getNorth() >= t) {
          e._northEast.lat = Infinity;
        }
        if (e.getSouth() <= -t) {
          e._southWest.lat = -Infinity;
        }
      }
      return e;
    },
    _animationAddLayerNonAnimated: function (e, t) {
      if (t === e) {
        this._featureGroup.addLayer(e);
      } else if (t._childCount === 2) {
        t._addToMap();
        var n = t.getAllChildMarkers();
        this._featureGroup.removeLayer(n[0]);
        this._featureGroup.removeLayer(n[1]);
      } else {
        t._updateIcon();
      }
    },
    _extractNonGroupLayers: function (e, t) {
      var n = e.getLayers();
      var o = 0;
      var r;
      for (t = t || []; o < n.length; o++) {
        r = n[o];
        if (r instanceof L.LayerGroup) {
          this._extractNonGroupLayers(r, t);
          continue;
        }
        t.push(r);
      }
      return t;
    },
    _overrideMarkerIcon: function (e) {
      var t = e.options.icon = this.options.iconCreateFunction({
        getChildCount: function () {
          return 1;
        },
        getAllChildMarkers: function () {
          return [e];
        }
      });
      return t;
    }
  });
  L.MarkerClusterGroup.include({
    _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-Infinity, -Infinity), new L.LatLng(Infinity, Infinity))
  });
  L.MarkerClusterGroup.include({
    _noAnimation: {
      _animationStart: function () {},
      _animationZoomIn: function (e, t) {
        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), e);
        this._topClusterLevel._recursivelyAddChildrenToMap(null, t, this._getExpandedVisibleBounds());
        this.fire("animationend");
      },
      _animationZoomOut: function (e, t) {
        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), e);
        this._topClusterLevel._recursivelyAddChildrenToMap(null, t, this._getExpandedVisibleBounds());
        this.fire("animationend");
      },
      _animationAddLayer: function (e, t) {
        this._animationAddLayerNonAnimated(e, t);
      }
    },
    _withAnimation: {
      _animationStart: function () {
        this._map._mapPane.className += " leaflet-cluster-anim";
        this._inZoomAnimation++;
      },
      _animationZoomIn: function (e, t) {
        var n = this._getExpandedVisibleBounds();
        var o = this._featureGroup;
        var r = Math.floor(this._map.getMinZoom());
        var a;
        this._ignoreMove = true;
        this._topClusterLevel._recursively(n, e, r, function (l) {
          var s = l._latlng;
          var c = l._markers;
          var _;
          if (!n.contains(s)) {
            s = null;
          }
          if (l._isSingleParent() && e + 1 === t) {
            o.removeLayer(l);
            l._recursivelyAddChildrenToMap(null, t, n);
          } else {
            l.clusterHide();
            l._recursivelyAddChildrenToMap(s, t, n);
          }
          a = c.length - 1;
          for (; a >= 0; a--) {
            _ = c[a];
            if (!n.contains(_._latlng)) {
              o.removeLayer(_);
            }
          }
        });
        this._forceLayout();
        this._topClusterLevel._recursivelyBecomeVisible(n, t);
        o.eachLayer(function (l) {
          if (!(l instanceof L.MarkerCluster) && l._icon) {
            l.clusterShow();
          }
        });
        this._topClusterLevel._recursively(n, e, t, function (l) {
          l._recursivelyRestoreChildPositions(t);
        });
        this._ignoreMove = false;
        this._enqueue(function () {
          this._topClusterLevel._recursively(n, e, r, function (l) {
            o.removeLayer(l);
            l.clusterShow();
          });
          this._animationEnd();
        });
      },
      _animationZoomOut: function (e, t) {
        this._animationZoomOutSingle(this._topClusterLevel, e - 1, t);
        this._topClusterLevel._recursivelyAddChildrenToMap(null, t, this._getExpandedVisibleBounds());
        this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), e, this._getExpandedVisibleBounds());
      },
      _animationAddLayer: function (e, t) {
        var n = this;
        var o = this._featureGroup;
        o.addLayer(e);
        if (t !== e) {
          if (t._childCount > 2) {
            t._updateIcon();
            this._forceLayout();
            this._animationStart();
            e._setPos(this._map.latLngToLayerPoint(t.getLatLng()));
            e.clusterHide();
            this._enqueue(function () {
              o.removeLayer(e);
              e.clusterShow();
              n._animationEnd();
            });
          } else {
            this._forceLayout();
            n._animationStart();
            n._animationZoomOutSingle(t, this._map.getMaxZoom(), this._zoom);
          }
        }
      }
    },
    _animationZoomOutSingle: function (e, t, n) {
      var o = this._getExpandedVisibleBounds();
      var r = Math.floor(this._map.getMinZoom());
      e._recursivelyAnimateChildrenInAndAddSelfToMap(o, r, t + 1, n);
      var a = this;
      this._forceLayout();
      e._recursivelyBecomeVisible(o, n);
      this._enqueue(function () {
        if (e._childCount === 1) {
          var l = e._markers[0];
          this._ignoreMove = true;
          l.setLatLng(l.getLatLng());
          this._ignoreMove = false;
          if (l.clusterShow) {
            l.clusterShow();
          }
        } else {
          e._recursively(o, n, r, function (s) {
            s._recursivelyRemoveChildrenFromMap(o, r, t + 1);
          });
        }
        a._animationEnd();
      });
    },
    _animationEnd: function () {
      if (this._map) {
        this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "");
      }
      this._inZoomAnimation--;
      this.fire("animationend");
    },
    _forceLayout: function () {
      L.Util.falseFn(document.body.offsetWidth);
    }
  });
  L.markerClusterGroup = function (e) {
    return new L.MarkerClusterGroup(e);
  };
  var d = L.MarkerCluster = L.Marker.extend({
    options: L.Icon.prototype.options,
    initialize: function (e, t, n, o) {
      L.Marker.prototype.initialize.call(this, n ? n._cLatLng || n.getLatLng() : new L.LatLng(0, 0), {
        icon: this,
        pane: e.options.clusterPane
      });
      this._group = e;
      this._zoom = t;
      this._markers = [];
      this._childClusters = [];
      this._childCount = 0;
      this._iconNeedsUpdate = true;
      this._boundsNeedUpdate = true;
      this._bounds = new L.LatLngBounds();
      if (n) {
        this._addChild(n);
      }
      if (o) {
        this._addChild(o);
      }
    },
    getAllChildMarkers: function (e, t) {
      e = e || [];
      for (var n = this._childClusters.length - 1; n >= 0; n--) {
        this._childClusters[n].getAllChildMarkers(e, t);
      }
      for (var o = this._markers.length - 1; o >= 0; o--) {
        if (!t || !this._markers[o].__dragStart) {
          e.push(this._markers[o]);
        }
      }
      return e;
    },
    getChildCount: function () {
      return this._childCount;
    },
    zoomToBounds: function (e) {
      for (var t = this._childClusters.slice(), n = this._group._map, o = n.getBoundsZoom(this._bounds), r = this._zoom + 1, a = n.getZoom(), l; t.length > 0 && o > r;) {
        r++;
        var s = [];
        for (l = 0; l < t.length; l++) {
          s = s.concat(t[l]._childClusters);
        }
        t = s;
      }
      if (o > r) {
        this._group._map.setView(this._latlng, r);
      } else if (o <= a) {
        this._group._map.setView(this._latlng, a + 1);
      } else {
        this._group._map.fitBounds(this._bounds, e);
      }
    },
    getBounds: function () {
      var e = new L.LatLngBounds();
      e.extend(this._bounds);
      return e;
    },
    _updateIcon: function () {
      this._iconNeedsUpdate = true;
      if (this._icon) {
        this.setIcon(this);
      }
    },
    createIcon: function () {
      if (this._iconNeedsUpdate) {
        this._iconObj = this._group.options.iconCreateFunction(this);
        this._iconNeedsUpdate = false;
      }
      return this._iconObj.createIcon();
    },
    createShadow: function () {
      return this._iconObj.createShadow();
    },
    _addChild: function (e, t) {
      this._iconNeedsUpdate = true;
      this._boundsNeedUpdate = true;
      this._setClusterCenter(e);
      if (e instanceof L.MarkerCluster) {
        if (!t) {
          this._childClusters.push(e);
          e.__parent = this;
        }
        this._childCount += e._childCount;
      } else {
        if (!t) {
          this._markers.push(e);
        }
        this._childCount++;
      }
      if (this.__parent) {
        this.__parent._addChild(e, true);
      }
    },
    _setClusterCenter: function (e) {
      this._cLatLng ||= e._cLatLng || e._latlng;
    },
    _resetBounds: function () {
      var e = this._bounds;
      if (e._southWest) {
        e._southWest.lat = Infinity;
        e._southWest.lng = Infinity;
      }
      if (e._northEast) {
        e._northEast.lat = -Infinity;
        e._northEast.lng = -Infinity;
      }
    },
    _recalculateBounds: function () {
      var e = this._markers;
      var t = this._childClusters;
      var n = 0;
      var o = 0;
      var r = this._childCount;
      var a;
      var l;
      var s;
      var c;
      if (r !== 0) {
        this._resetBounds();
        a = 0;
        for (; a < e.length; a++) {
          s = e[a]._latlng;
          this._bounds.extend(s);
          n += s.lat;
          o += s.lng;
        }
        for (a = 0; a < t.length; a++) {
          l = t[a];
          if (l._boundsNeedUpdate) {
            l._recalculateBounds();
          }
          this._bounds.extend(l._bounds);
          s = l._wLatLng;
          c = l._childCount;
          n += s.lat * c;
          o += s.lng * c;
        }
        this._latlng = this._wLatLng = new L.LatLng(n / r, o / r);
        this._boundsNeedUpdate = false;
      }
    },
    _addToMap: function (e) {
      if (e) {
        this._backupLatlng = this._latlng;
        this.setLatLng(e);
      }
      this._group._featureGroup.addLayer(this);
    },
    _recursivelyAnimateChildrenIn: function (e, t, n) {
      this._recursively(e, this._group._map.getMinZoom(), n - 1, function (o) {
        var r = o._markers;
        var a;
        var l;
        for (a = r.length - 1; a >= 0; a--) {
          l = r[a];
          if (l._icon) {
            l._setPos(t);
            l.clusterHide();
          }
        }
      }, function (o) {
        var r = o._childClusters;
        var a;
        var l;
        for (a = r.length - 1; a >= 0; a--) {
          l = r[a];
          if (l._icon) {
            l._setPos(t);
            l.clusterHide();
          }
        }
      });
    },
    _recursivelyAnimateChildrenInAndAddSelfToMap: function (e, t, n, o) {
      this._recursively(e, o, t, function (r) {
        r._recursivelyAnimateChildrenIn(e, r._group._map.latLngToLayerPoint(r.getLatLng()).round(), n);
        if (r._isSingleParent() && n - 1 === o) {
          r.clusterShow();
          r._recursivelyRemoveChildrenFromMap(e, t, n);
        } else {
          r.clusterHide();
        }
        r._addToMap();
      });
    },
    _recursivelyBecomeVisible: function (e, t) {
      this._recursively(e, this._group._map.getMinZoom(), t, null, function (n) {
        n.clusterShow();
      });
    },
    _recursivelyAddChildrenToMap: function (e, t, n) {
      this._recursively(n, this._group._map.getMinZoom() - 1, t, function (o) {
        if (t !== o._zoom) {
          for (var r = o._markers.length - 1; r >= 0; r--) {
            var a = o._markers[r];
            if (n.contains(a._latlng)) {
              if (e) {
                a._backupLatlng = a.getLatLng();
                a.setLatLng(e);
                if (a.clusterHide) {
                  a.clusterHide();
                }
              }
              o._group._featureGroup.addLayer(a);
            }
          }
        }
      }, function (o) {
        o._addToMap(e);
      });
    },
    _recursivelyRestoreChildPositions: function (e) {
      for (var t = this._markers.length - 1; t >= 0; t--) {
        var n = this._markers[t];
        if (n._backupLatlng) {
          n.setLatLng(n._backupLatlng);
          delete n._backupLatlng;
        }
      }
      if (e - 1 === this._zoom) {
        for (var o = this._childClusters.length - 1; o >= 0; o--) {
          this._childClusters[o]._restorePosition();
        }
      } else {
        for (var r = this._childClusters.length - 1; r >= 0; r--) {
          this._childClusters[r]._recursivelyRestoreChildPositions(e);
        }
      }
    },
    _restorePosition: function () {
      if (this._backupLatlng) {
        this.setLatLng(this._backupLatlng);
        delete this._backupLatlng;
      }
    },
    _recursivelyRemoveChildrenFromMap: function (e, t, n, o) {
      var r;
      var a;
      this._recursively(e, t - 1, n - 1, function (l) {
        for (a = l._markers.length - 1; a >= 0; a--) {
          r = l._markers[a];
          if (!o || !o.contains(r._latlng)) {
            l._group._featureGroup.removeLayer(r);
            if (r.clusterShow) {
              r.clusterShow();
            }
          }
        }
      }, function (l) {
        for (a = l._childClusters.length - 1; a >= 0; a--) {
          r = l._childClusters[a];
          if (!o || !o.contains(r._latlng)) {
            l._group._featureGroup.removeLayer(r);
            if (r.clusterShow) {
              r.clusterShow();
            }
          }
        }
      });
    },
    _recursively: function (e, t, n, o, r) {
      var a = this._childClusters;
      var l = this._zoom;
      var s;
      var c;
      if (t <= l) {
        if (o) {
          o(this);
        }
        if (r && l === n) {
          r(this);
        }
      }
      if (l < t || l < n) {
        for (s = a.length - 1; s >= 0; s--) {
          c = a[s];
          if (c._boundsNeedUpdate) {
            c._recalculateBounds();
          }
          if (e.intersects(c._bounds)) {
            c._recursively(e, t, n, o, r);
          }
        }
      }
    },
    _isSingleParent: function () {
      return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
    }
  });
  L.Marker.include({
    clusterHide: function () {
      var e = this.options.opacity;
      this.setOpacity(0);
      this.options.opacity = e;
      return this;
    },
    clusterShow: function () {
      return this.setOpacity(this.options.opacity);
    }
  });
  L.DistanceGrid = function (e) {
    this._cellSize = e;
    this._sqCellSize = e * e;
    this._grid = {};
    this._objectPoint = {};
  };
  L.DistanceGrid.prototype = {
    addObject: function (e, t) {
      var n = this._getCoord(t.x);
      var o = this._getCoord(t.y);
      var r = this._grid;
      var a = r[o] = r[o] || {};
      var l = a[n] = a[n] || [];
      var s = L.Util.stamp(e);
      this._objectPoint[s] = t;
      l.push(e);
    },
    updateObject: function (e, t) {
      this.removeObject(e);
      this.addObject(e, t);
    },
    removeObject: function (e, t) {
      var n = this._getCoord(t.x);
      var o = this._getCoord(t.y);
      var r = this._grid;
      var a = r[o] = r[o] || {};
      var l = a[n] = a[n] || [];
      var s;
      var c;
      delete this._objectPoint[L.Util.stamp(e)];
      s = 0;
      c = l.length;
      for (; s < c; s++) {
        if (l[s] === e) {
          l.splice(s, 1);
          if (c === 1) {
            delete a[n];
          }
          return true;
        }
      }
    },
    eachObject: function (e, t) {
      var n;
      var o;
      var r;
      var a;
      var l;
      var s;
      var c;
      var _ = this._grid;
      for (n in _) {
        l = _[n];
        for (o in l) {
          s = l[o];
          r = 0;
          a = s.length;
          for (; r < a; r++) {
            c = e.call(t, s[r]);
            if (c) {
              r--;
              a--;
            }
          }
        }
      }
    },
    getNearObject: function (e) {
      var t = this._getCoord(e.x);
      var n = this._getCoord(e.y);
      var o;
      var r;
      var a;
      var l;
      var s;
      var c;
      var _;
      var f;
      var h = this._objectPoint;
      var g = this._sqCellSize;
      var y = null;
      for (o = n - 1; o <= n + 1; o++) {
        l = this._grid[o];
        if (l) {
          for (r = t - 1; r <= t + 1; r++) {
            s = l[r];
            if (s) {
              a = 0;
              c = s.length;
              for (; a < c; a++) {
                _ = s[a];
                f = this._sqDist(h[L.Util.stamp(_)], e);
                if (f < g || f <= g && y === null) {
                  g = f;
                  y = _;
                }
              }
            }
          }
        }
      }
      return y;
    },
    _getCoord: function (e) {
      var t = Math.floor(e / this._cellSize);
      if (isFinite(t)) {
        return t;
      } else {
        return e;
      }
    },
    _sqDist: function (e, t) {
      var n = t.x - e.x;
      var o = t.y - e.y;
      return n * n + o * o;
    }
  };
  (function () {
    L.QuickHull = {
      getDistant: function (e, t) {
        var n = t[1].lat - t[0].lat;
        var o = t[0].lng - t[1].lng;
        return o * (e.lat - t[0].lat) + n * (e.lng - t[0].lng);
      },
      findMostDistantPointFromBaseLine: function (e, t) {
        var n = 0;
        var o = null;
        var r = [];
        var a;
        var l;
        var s;
        for (a = t.length - 1; a >= 0; a--) {
          l = t[a];
          s = this.getDistant(l, e);
          if (s > 0) {
            r.push(l);
          } else {
            continue;
          }
          if (s > n) {
            n = s;
            o = l;
          }
        }
        return {
          maxPoint: o,
          newPoints: r
        };
      },
      buildConvexHull: function (e, t) {
        var n = [];
        var o = this.findMostDistantPointFromBaseLine(e, t);
        if (o.maxPoint) {
          n = n.concat(this.buildConvexHull([e[0], o.maxPoint], o.newPoints));
          n = n.concat(this.buildConvexHull([o.maxPoint, e[1]], o.newPoints));
          return n;
        } else {
          return [e[0]];
        }
      },
      getConvexHull: function (e) {
        var t = false;
        var n = false;
        var o = false;
        var r = false;
        var a = null;
        var l = null;
        var s = null;
        var c = null;
        var _ = null;
        var f = null;
        var h;
        for (h = e.length - 1; h >= 0; h--) {
          var g = e[h];
          if (t === false || g.lat > t) {
            a = g;
            t = g.lat;
          }
          if (n === false || g.lat < n) {
            l = g;
            n = g.lat;
          }
          if (o === false || g.lng > o) {
            s = g;
            o = g.lng;
          }
          if (r === false || g.lng < r) {
            c = g;
            r = g.lng;
          }
        }
        if (n !== t) {
          f = l;
          _ = a;
        } else {
          f = c;
          _ = s;
        }
        var y = [].concat(this.buildConvexHull([f, _], e), this.buildConvexHull([_, f], e));
        return y;
      }
    };
  })();
  L.MarkerCluster.include({
    getConvexHull: function () {
      var e = this.getAllChildMarkers();
      var t = [];
      var n;
      var o;
      for (o = e.length - 1; o >= 0; o--) {
        n = e[o].getLatLng();
        t.push(n);
      }
      return L.QuickHull.getConvexHull(t);
    }
  });
  L.MarkerCluster.include({
    _2PI: Math.PI * 2,
    _circleFootSeparation: 25,
    _circleStartAngle: 0,
    _spiralFootSeparation: 28,
    _spiralLengthStart: 11,
    _spiralLengthFactor: 5,
    _circleSpiralSwitchover: 9,
    spiderfy: function () {
      if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
        var e = this.getAllChildMarkers(null, true);
        var t = this._group;
        var n = t._map;
        var o = n.latLngToLayerPoint(this._latlng);
        var r;
        this._group._unspiderfy();
        this._group._spiderfied = this;
        if (this._group.options.spiderfyShapePositions) {
          r = this._group.options.spiderfyShapePositions(e.length, o);
        } else if (e.length >= this._circleSpiralSwitchover) {
          r = this._generatePointsSpiral(e.length, o);
        } else {
          o.y += 10;
          r = this._generatePointsCircle(e.length, o);
        }
        this._animationSpiderfy(e, r);
      }
    },
    unspiderfy: function (e) {
      if (!this._group._inZoomAnimation) {
        this._animationUnspiderfy(e);
        this._group._spiderfied = null;
      }
    },
    _generatePointsCircle: function (e, t) {
      var n = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + e);
      var o = n / this._2PI;
      var r = this._2PI / e;
      var a = [];
      var l;
      var s;
      o = Math.max(o, 35);
      a.length = e;
      l = 0;
      for (; l < e; l++) {
        s = this._circleStartAngle + l * r;
        a[l] = new L.Point(t.x + o * Math.cos(s), t.y + o * Math.sin(s))._round();
      }
      return a;
    },
    _generatePointsSpiral: function (e, t) {
      var n = this._group.options.spiderfyDistanceMultiplier;
      var o = n * this._spiralLengthStart;
      var r = n * this._spiralFootSeparation;
      var a = n * this._spiralLengthFactor * this._2PI;
      var l = 0;
      var s = [];
      var c;
      s.length = e;
      c = e;
      for (; c >= 0; c--) {
        if (c < e) {
          s[c] = new L.Point(t.x + o * Math.cos(l), t.y + o * Math.sin(l))._round();
        }
        l += r / o + c * 0.0005;
        o += a / l;
      }
      return s;
    },
    _noanimationUnspiderfy: function () {
      var e = this._group;
      var t = e._map;
      var n = e._featureGroup;
      var o = this.getAllChildMarkers(null, true);
      var r;
      var a;
      e._ignoreMove = true;
      this.setOpacity(1);
      a = o.length - 1;
      for (; a >= 0; a--) {
        r = o[a];
        n.removeLayer(r);
        if (r._preSpiderfyLatlng) {
          r.setLatLng(r._preSpiderfyLatlng);
          delete r._preSpiderfyLatlng;
        }
        if (r.setZIndexOffset) {
          r.setZIndexOffset(0);
        }
        if (r._spiderLeg) {
          t.removeLayer(r._spiderLeg);
          delete r._spiderLeg;
        }
      }
      e.fire("unspiderfied", {
        cluster: this,
        markers: o
      });
      e._ignoreMove = false;
      e._spiderfied = null;
    }
  });
  L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
    _animationSpiderfy: function (e, t) {
      var n = this._group;
      var o = n._map;
      var r = n._featureGroup;
      var a = this._group.options.spiderLegPolylineOptions;
      var l;
      var s;
      var c;
      var _;
      n._ignoreMove = true;
      l = 0;
      for (; l < e.length; l++) {
        _ = o.layerPointToLatLng(t[l]);
        s = e[l];
        c = new L.Polyline([this._latlng, _], a);
        o.addLayer(c);
        s._spiderLeg = c;
        s._preSpiderfyLatlng = s._latlng;
        s.setLatLng(_);
        if (s.setZIndexOffset) {
          s.setZIndexOffset(1000000);
        }
        r.addLayer(s);
      }
      this.setOpacity(0.3);
      n._ignoreMove = false;
      n.fire("spiderfied", {
        cluster: this,
        markers: e
      });
    },
    _animationUnspiderfy: function () {
      this._noanimationUnspiderfy();
    }
  });
  L.MarkerCluster.include({
    _animationSpiderfy: function (e, t) {
      var n = this;
      var o = this._group;
      var r = o._map;
      var a = o._featureGroup;
      var l = this._latlng;
      var s = r.latLngToLayerPoint(l);
      var c = L.Path.SVG;
      var _ = L.extend({}, this._group.options.spiderLegPolylineOptions);
      var f = _.opacity;
      var h;
      var g;
      var y;
      var p;
      var x;
      var C;
      if (f === undefined) {
        f = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity;
      }
      if (c) {
        _.opacity = 0;
        _.className = (_.className || "") + " leaflet-cluster-spider-leg";
      } else {
        _.opacity = f;
      }
      o._ignoreMove = true;
      h = 0;
      for (; h < e.length; h++) {
        g = e[h];
        C = r.layerPointToLatLng(t[h]);
        y = new L.Polyline([l, C], _);
        r.addLayer(y);
        g._spiderLeg = y;
        if (c) {
          p = y._path;
          x = p.getTotalLength() + 0.1;
          p.style.strokeDasharray = x;
          p.style.strokeDashoffset = x;
        }
        if (g.setZIndexOffset) {
          g.setZIndexOffset(1000000);
        }
        if (g.clusterHide) {
          g.clusterHide();
        }
        a.addLayer(g);
        if (g._setPos) {
          g._setPos(s);
        }
      }
      o._forceLayout();
      o._animationStart();
      h = e.length - 1;
      for (; h >= 0; h--) {
        C = r.layerPointToLatLng(t[h]);
        g = e[h];
        g._preSpiderfyLatlng = g._latlng;
        g.setLatLng(C);
        if (g.clusterShow) {
          g.clusterShow();
        }
        if (c) {
          y = g._spiderLeg;
          p = y._path;
          p.style.strokeDashoffset = 0;
          y.setStyle({
            opacity: f
          });
        }
      }
      this.setOpacity(0.3);
      o._ignoreMove = false;
      setTimeout(function () {
        o._animationEnd();
        o.fire("spiderfied", {
          cluster: n,
          markers: e
        });
      }, 200);
    },
    _animationUnspiderfy: function (e) {
      var t = this;
      var n = this._group;
      var o = n._map;
      var r = n._featureGroup;
      var a = e ? o._latLngToNewLayerPoint(this._latlng, e.zoom, e.center) : o.latLngToLayerPoint(this._latlng);
      var l = this.getAllChildMarkers(null, true);
      var s = L.Path.SVG;
      var c;
      var _;
      var f;
      var h;
      var g;
      var y;
      n._ignoreMove = true;
      n._animationStart();
      this.setOpacity(1);
      _ = l.length - 1;
      for (; _ >= 0; _--) {
        c = l[_];
        if (c._preSpiderfyLatlng) {
          c.closePopup();
          c.setLatLng(c._preSpiderfyLatlng);
          delete c._preSpiderfyLatlng;
          y = true;
          if (c._setPos) {
            c._setPos(a);
            y = false;
          }
          if (c.clusterHide) {
            c.clusterHide();
            y = false;
          }
          if (y) {
            r.removeLayer(c);
          }
          if (s) {
            f = c._spiderLeg;
            h = f._path;
            g = h.getTotalLength() + 0.1;
            h.style.strokeDashoffset = g;
            f.setStyle({
              opacity: 0
            });
          }
        }
      }
      n._ignoreMove = false;
      setTimeout(function () {
        var p = 0;
        for (_ = l.length - 1; _ >= 0; _--) {
          c = l[_];
          if (c._spiderLeg) {
            p++;
          }
        }
        for (_ = l.length - 1; _ >= 0; _--) {
          c = l[_];
          if (c._spiderLeg) {
            if (c.clusterShow) {
              c.clusterShow();
            }
            if (c.setZIndexOffset) {
              c.setZIndexOffset(0);
            }
            if (p > 1) {
              r.removeLayer(c);
            }
            o.removeLayer(c._spiderLeg);
            delete c._spiderLeg;
          }
        }
        n._animationEnd();
        n.fire("unspiderfied", {
          cluster: t,
          markers: l
        });
      }, 200);
    }
  });
  L.MarkerClusterGroup.include({
    _spiderfied: null,
    unspiderfy: function () {
      this._unspiderfy.apply(this, arguments);
    },
    _spiderfierOnAdd: function () {
      this._map.on("click", this._unspiderfyWrapper, this);
      if (this._map.options.zoomAnimation) {
        this._map.on("zoomstart", this._unspiderfyZoomStart, this);
      }
      this._map.on("zoomend", this._noanimationUnspiderfy, this);
      if (!L.Browser.touch) {
        this._map.getRenderer(this);
      }
    },
    _spiderfierOnRemove: function () {
      this._map.off("click", this._unspiderfyWrapper, this);
      this._map.off("zoomstart", this._unspiderfyZoomStart, this);
      this._map.off("zoomanim", this._unspiderfyZoomAnim, this);
      this._map.off("zoomend", this._noanimationUnspiderfy, this);
      this._noanimationUnspiderfy();
    },
    _unspiderfyZoomStart: function () {
      if (this._map) {
        this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
      }
    },
    _unspiderfyZoomAnim: function (e) {
      if (!L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching")) {
        this._map.off("zoomanim", this._unspiderfyZoomAnim, this);
        this._unspiderfy(e);
      }
    },
    _unspiderfyWrapper: function () {
      this._unspiderfy();
    },
    _unspiderfy: function (e) {
      if (this._spiderfied) {
        this._spiderfied.unspiderfy(e);
      }
    },
    _noanimationUnspiderfy: function () {
      if (this._spiderfied) {
        this._spiderfied._noanimationUnspiderfy();
      }
    },
    _unspiderfyLayer: function (e) {
      if (e._spiderLeg) {
        this._featureGroup.removeLayer(e);
        if (e.clusterShow) {
          e.clusterShow();
        }
        if (e.setZIndexOffset) {
          e.setZIndexOffset(0);
        }
        this._map.removeLayer(e._spiderLeg);
        delete e._spiderLeg;
      }
    }
  });
  L.MarkerClusterGroup.include({
    refreshClusters: function (e) {
      if (e) {
        if (e instanceof L.MarkerClusterGroup) {
          e = e._topClusterLevel.getAllChildMarkers();
        } else if (e instanceof L.LayerGroup) {
          e = e._layers;
        } else if (e instanceof L.MarkerCluster) {
          e = e.getAllChildMarkers();
        } else if (e instanceof L.Marker) {
          e = [e];
        }
      } else {
        e = this._topClusterLevel.getAllChildMarkers();
      }
      this._flagParentsIconsNeedUpdate(e);
      this._refreshClustersIcons();
      if (this.options.singleMarkerMode) {
        this._refreshSingleMarkerModeMarkers(e);
      }
      return this;
    },
    _flagParentsIconsNeedUpdate: function (e) {
      var t;
      var n;
      for (t in e) {
        for (n = e[t].__parent; n;) {
          n._iconNeedsUpdate = true;
          n = n.__parent;
        }
      }
    },
    _refreshSingleMarkerModeMarkers: function (e) {
      var t;
      var n;
      for (t in e) {
        n = e[t];
        if (this.hasLayer(n)) {
          n.setIcon(this._overrideMarkerIcon(n));
        }
      }
    }
  });
  L.Marker.include({
    refreshIconOptions: function (e, t) {
      var n = this.options.icon;
      L.setOptions(n, e);
      this.setIcon(n);
      if (t && this.__parent) {
        this.__parent._group.refreshClusters(this);
      }
      return this;
    }
  });
  i.MarkerClusterGroup = u;
  i.MarkerCluster = d;
  Object.defineProperty(i, "__esModule", {
    value: true
  });
});
const Dc = w("<div id=\"main-map\">");
let me;
let Bc = 0.62;
let jc = 0.62;
let zc = 3975;
let Gc = -3165;
function sn(i, u) {
  const d = i * Bc + Gc;
  const e = u * jc + zc;
  return [d, e];
}
var Oe = [0, -6600, 10000, 0];
var bt = 1.5;
var Et = 5;
var Fc = 1;
var yn = Math.pow(2, Et) * Fc;
var je = xe.CRS.Simple;
je.scale = function (i) {
  return Math.pow(2, i) / yn;
};
je.zoom = function (i) {
  return Math.log(i * yn) / Math.LN2;
};
function Uc(i) {
  const {
    turfZonesResource: u,
    setSelectedTurf: d,
    currentCoords: e,
    hasTurf: t
  } = W();
  const [n] = u;
  if (n()) {
    me = new xe.Map(i, {
      maxZoom: Et,
      minZoom: bt,
      crs: je,
      attributionControl: false
    });
    xe.tileLayer("https://assets.nopixel.net/dev/images/spawn-selector/map/{z}/{x}/{y}.png", {
      minNativeZoom: 0,
      maxNativeZoom: 5,
      minZoom: bt,
      maxZoom: Et,
      tileSize: xe.point(512, 512),
      noWrap: true,
      tms: false
    }).addTo(me);
    me.fitBounds([je.unproject(xe.point(Oe[2], Oe[3])), je.unproject(xe.point(Oe[0], Oe[1]))]);
    me.setMaxBounds([je.unproject(xe.point(Oe[2], Oe[3])), je.unproject(xe.point(Oe[0], Oe[1]))]);
    me.removeControl(me.zoomControl);
    me.setZoom(bt);
    for (const [o, r] of Object.entries(n())) {
      const a = r.points.map(s => sn(-s.x, s.y));
      const l = xe.polygon(a, {
        color: r.color,
        fillColor: r.color,
        className: o,
        weight: 1,
        opacity: 0.5,
        bubblingMouseEvents: false
      }).addTo(me);
      l.on("mouseout", function (s) {
        s.target.setStyle({
          weight: 1,
          opacity: 0.5
        });
      });
      l.on("mouseover", function (s) {
        s.target.setStyle({
          weight: 2,
          opacity: 1
        });
      });
      l.on("click", function (s) {
        if (!t()?.[1]) {
          K("hideout", "You don't have a turf.");
          return;
        }
        d(o);
      });
    }
    me.on("click", function (o) {
      d(null);
    });
    if (e()) {
      const o = sn(-e().x, e().y);
      const r = xe.divIcon({
        className: "turf-satellite",
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        html: "<i class=\"fa-light fa-satellite-dish\"></i>"
      });
      xe.marker(o, {
        icon: r
      }).addTo(me);
    }
  }
}
function Zc() {
  W();
  le(() => {
    Uc("main-map");
    ke(() => {
      if (me) {
        me.remove();
      }
    });
  });
  return Dc();
}
const Hc = "_container_13n26_1";
const qc = "_mapContainer_13n26_10";
const ln = {
  container: Hc,
  mapContainer: qc
};
const Vc = w("<div><div class=\"flex h-full w-full flex-col items-start justify-start\"><div>");
const Wc = () => {
  const {
    turfZonesResource: i,
    currentCoords: u
  } = W();
  const [d, {
    refetch: e
  }] = i;
  le(() => {
    e();
  });
  return v(Te, {
    get fallback() {
      return v(Re, {});
    },
    get children() {
      const t = Vc();
      const n = t.firstChild;
      const o = n.firstChild;
      $(n, v($e, {}), o);
      $(o, v(U, {
        get when() {
          return j(() => !!d())() && u();
        },
        get children() {
          return v(Zc, {});
        }
      }));
      $(t, v(Rc, {}), null);
      S(r => {
        const a = ln.container;
        const l = ln.mapContainer;
        if (a !== r._v$) {
          m(t, r._v$ = a);
        }
        if (l !== r._v$2) {
          m(o, r._v$2 = l);
        }
        return r;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return t;
    }
  });
};
const Qc = "_container_2613n_1";
const Yc = "_chartContainer_2613n_9";
const Kc = "_header_2613n_17";
const Jc = "_filterButton_2613n_40";
const Xc = "_active_2613n_54";
const eu = "_detail_2613n_60";
const tu = "_requirements_2613n_104";
const st = {
  container: Qc,
  chartContainer: Yc,
  header: Kc,
  filterButton: Jc,
  active: Xc,
  detail: eu,
  requirements: tu
};
const nu = w("<div>");
const iu = w("<div><div><div><i class=\"fa-solid fa-cannabis\"></i><div>Strain Name");
const ou = () => {
  const {
    weedConfig: i,
    group: u,
    input: d,
    setInput: e,
    refetchGroup: t
  } = W();
  le(() => {
    At.register(Tt, Rt, Dt, Bt, jt, zt);
  });
  ke(() => {
    At.unregister(Tt, Rt, Dt, Bt, jt, zt);
  });
  const n = s => {
    s += 1;
    return `hsla(${s * 37.508 % 360}, 100%, 50%, 1)`;
  };
  const o = j(() => {
    const s = i();
    if (!s) {
      return;
    }
    const c = [];
    let _ = 0;
    for (const [f, h] of Object.entries(s.pricesPerGram)) {
      c.push({
        label: f.replace("_", " ").toUpperCase(),
        data: [h],
        backgroundColor: n(_),
        borderColor: n(_)
      });
      _ += 1;
    }
    return {
      labels: ["Strain Prices"],
      datasets: c
    };
  });
  const r = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: window.devicePixelRatio,
    font: {
      family: "Gilroy",
      size: 12
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)"
        }
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)"
        }
      }
    }
  };
  const a = s => s * 0.01 * window.innerHeight;
  const l = () => {
    e({
      title: "Strain Name",
      description: "Set the name of the strain",
      inputs: {
        name: {
          value: "",
          placeholder: "Name"
        }
      },
      onConfirm: async () => {
        const s = d()?.inputs.name.value;
        const c = await A.execute("hideout:turfs:setStrain", s);
        K("hideout", c ? "Strain Set" : "Failed to set strain");
        t();
      }
    });
  };
  return (() => {
    const s = iu();
    const c = s.firstChild;
    const _ = c.firstChild;
    const f = _.firstChild;
    const h = f.nextSibling;
    $(s, v($e, {}), c);
    $(_, () => u()?.strain ?? "Not Set", h);
    h.$$click = () => {
      l();
    };
    $(c, v(U, {
      get when() {
        return o();
      },
      get children() {
        const g = nu();
        $(g, v(Gn, {
          get data() {
            return o();
          },
          options: r,
          get width() {
            return a(76.29);
          },
          get height() {
            return a(45.5);
          }
        }));
        return g;
      }
    }), null);
    S(g => {
      const y = st.container;
      const p = st.chartContainer;
      const x = st.header;
      const C = st.filterButton;
      if (y !== g._v$4) {
        m(s, g._v$4 = y);
      }
      if (p !== g._v$5) {
        m(c, g._v$5 = p);
      }
      if (x !== g._v$6) {
        m(_, g._v$6 = x);
      }
      if (C !== g._v$7) {
        m(h, g._v$7 = C);
      }
      return g;
    }, {
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return s;
  })();
};
H(["click"]);
const ru = "_input_obmvj_1";
const su = "_container_obmvj_12";
const lu = "_title_obmvj_40";
const au = "_description_obmvj_50";
const cu = "_inputContainer_obmvj_60";
const uu = "_button_obmvj_82";
const du = "_cancel_obmvj_109";
const Ne = {
  input: ru,
  container: su,
  title: lu,
  description: au,
  inputContainer: cu,
  button: uu,
  cancel: du
};
const _u = w("<div><div><div></div><div></div><div class=\"flex w-full flex-row items-center justify-center gap-[0.5vh]\"><div><p></div><div><p>Cancel");
const fu = w("<div><input type=\"text\">");
function hu() {
  const {
    input: i,
    setInput: u
  } = W();
  return (() => {
    const d = _u();
    const e = d.firstChild;
    const t = e.firstChild;
    const n = t.nextSibling;
    const o = n.nextSibling;
    const r = o.firstChild;
    const a = r.firstChild;
    const l = r.nextSibling;
    $(t, () => i()?.title);
    $(n, () => i()?.description);
    $(e, v(J, {
      get each() {
        if (j(() => !!i())()) {
          return Object.entries(i().inputs);
        } else {
          return [];
        }
      },
      children: ([s, c]) => (() => {
        const _ = fu();
        const f = _.firstChild;
        D(f, "id", s);
        S(h => {
          const g = Ne.inputContainer;
          const y = c.placeholder;
          if (g !== h._v$8) {
            m(_, h._v$8 = g);
          }
          if (y !== h._v$9) {
            D(f, "placeholder", h._v$9 = y);
          }
          return h;
        }, {
          _v$8: undefined,
          _v$9: undefined
        });
        return _;
      })()
    }), o);
    r.$$click = async () => {
      const s = {};
      document.querySelectorAll("input").forEach(_ => {
        s[_.id] = {
          ..._,
          value: _.value
        };
      });
      u(_ => ({
        ..._,
        inputs: s
      }));
      await i()?.onConfirm?.();
      u(null);
    };
    $(a, () => i()?.title);
    l.$$click = async () => {
      if (i()?.onCancel) {
        await i()?.onCancel?.();
      }
      u(null);
    };
    S(s => {
      const c = Ne.input;
      const _ = Ne.container;
      const f = Ne.title;
      const h = Ne.description;
      const g = Ne.button;
      const y = Ne.button;
      const p = {
        [Ne.cancel]: true
      };
      if (c !== s._v$) {
        m(d, s._v$ = c);
      }
      if (_ !== s._v$2) {
        m(e, s._v$2 = _);
      }
      if (f !== s._v$3) {
        m(t, s._v$3 = f);
      }
      if (h !== s._v$4) {
        m(n, s._v$4 = h);
      }
      if (g !== s._v$5) {
        m(r, s._v$5 = g);
      }
      if (y !== s._v$6) {
        m(l, s._v$6 = y);
      }
      s._v$7 = Z(l, p, s._v$7);
      return s;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return d;
  })();
}
H(["click"]);
const vu = "_container_1epns_1";
const gu = "_contract_1epns_9";
const mu = "_button_1epns_43";
const $u = "_disabled_1epns_62";
const Lt = {
  container: vu,
  contract: gu,
  button: mu,
  disabled: $u
};
const pu = "_container_1qf4x_1";
const Cu = "_active_1qf4x_18";
const yu = "_select_1qf4x_44";
const lt = {
  container: pu,
  active: Cu,
  select: yu
};
const xu = w("<div>Invite Member");
const bu = w("<div>Kick Member");
const Lu = w("<div><h1></h1><p>");
const wu = i => {
  const {
    members: u,
    input: d,
    setInput: e
  } = W();
  const t = j(() => u()?.find(n => n.character_id === i.characterId));
  return (() => {
    const n = Lu();
    const o = n.firstChild;
    const r = o.nextSibling;
    $(o, (() => {
      const a = j(() => !!t());
      return () => a() ? `${t()?.first_name} ${t()?.last_name}` : "FREE SLOT";
    })());
    $(r, () => t() ? "Member" : "Select a member");
    $(n, v(we, {
      get children() {
        return [v(te, {
          get when() {
            return !t();
          },
          get children() {
            const a = xu();
            a.$$click = () => {
              e({
                title: "Invite Member",
                description: "Invite a member to the Hot Run",
                inputs: {
                  cid: {
                    value: "",
                    placeholder: "Character ID"
                  }
                },
                onConfirm: async () => {
                  (async () => {
                    const s = d()?.inputs.cid.value;
                    if (!s) {
                      return;
                    }
                    K("hideout", "Sending invite request...");
                    const [c, _] = await A.execute("hideout:hotruns:invite", +s);
                    K("hideout", _);
                    if (c) {
                      i.refetch();
                    }
                  })();
                }
              });
            };
            S(() => m(a, lt.select));
            return a;
          }
        }), v(te, {
          get when() {
            return t();
          },
          get children() {
            const a = bu();
            a.$$click = async () => {
              const [l, s] = await A.execute("hideout:hotruns:kick", i.characterId);
              K("hideout", s);
              if (l) {
                i.refetch();
              }
            };
            S(() => m(a, lt.select));
            return a;
          }
        })];
      }
    }), null);
    S(a => {
      const l = lt.container;
      const s = {
        [lt.active]: !!t()
      };
      if (l !== a._v$) {
        m(n, a._v$ = l);
      }
      a._v$2 = Z(n, s, a._v$2);
      return a;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return n;
  })();
};
H(["click"]);
const ku = w("<div><div class=\"flex h-full w-full flex-row items-center justify-between gap-[2vh]\"><div><div class=\"flex flex-col items-center justify-center\"><h1></h1><p>Current Hot Run</div><div>Start</div></div><div class=\"grid-rows-auto grid h-full w-full auto-rows-max grid-cols-3 gap-y-[0.5vh] overflow-auto\">");
const Su = () => {
  const {
    setPage: i
  } = W();
  const [u, {
    refetch: d
  }] = X(() => A.execute("hideout:hotruns:getHotRuns"));
  const [e, {
    refetch: t
  }] = X(() => A.execute("hideout:hotruns:getCurrent"));
  const n = j(() => u()?.find(a => a.id === e()));
  const [o, {
    refetch: r
  }] = X(() => A.execute("hideout:hotruns:getGroup"));
  return (() => {
    const a = ku();
    const l = a.firstChild;
    const s = l.firstChild;
    const c = s.firstChild;
    const _ = c.firstChild;
    const f = c.nextSibling;
    const h = s.nextSibling;
    $(a, v($e, {}), l);
    $(_, () => n()?.name);
    f.$$click = async () => {
      const [g, y] = await A.execute("hideout:hotruns:start");
      K("hideout", y);
      if (g) {
        i("hotruns");
      }
    };
    $(h, v(J, {
      get each() {
        return Array(6).fill(0);
      },
      children: (g, y) => v(wu, {
        get characterId() {
          return o()?.[y()];
        },
        refetch: r
      })
    }));
    S(g => {
      const y = Lt.container;
      const p = Lt.contract;
      const x = Lt.button;
      if (y !== g._v$) {
        m(a, g._v$ = y);
      }
      if (p !== g._v$2) {
        m(s, g._v$2 = p);
      }
      if (x !== g._v$3) {
        m(f, g._v$3 = x);
      }
      return g;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return a;
  })();
};
H(["click"]);
const Mu = w("<div><div class=\"flex h-full w-full flex-col items-end justify-center\"><div class=\"flex w-full flex-row items-center justify-between\"><h1>Influence</h1><div class=\"flex flex-row items-center justify-end gap-[0.5vh]\"><h1>Level </h1><p><span></span> influence</div></div><div><div></div></div></div><div class=\"flex h-full w-[40%] flex-row items-center justify-end\"><div><i class=\"fas fa-solid fa-calendar-days\"></i><div class=\"flex flex-col items-start justify-center\"><h1>Daily Limit</h1><div class=\"flex flex-row items-center justify-start\"><h2></h2><span>/");
const Eu = w("<div><div>");
const xn = {
  home: {
    label: "Home",
    render: () => v(Xs, {})
  },
  turf: {
    label: "Turfs",
    render: () => v(Wc, {})
  },
  storage: {
    label: "Storage",
    render: () => v(kc, {})
  },
  "control-panel": {
    label: "Control Panel",
    render: () => v(Is, {})
  },
  "weed-stats": {
    label: "Weed Stats",
    render: () => v(ou, {})
  },
  contacts: {
    label: "Contacts",
    render: () => v(xs, {})
  },
  hotruns: {
    label: "Hot Runs",
    render: () => v(xl, {})
  },
  "black-market": {
    label: "Black Market",
    render: () => v(vs, {})
  },
  roadmap: {
    label: "Roadmap",
    render: () => v(Ra, {})
  },
  members: {
    label: "Members",
    render: () => v(na, {})
  },
  "hotrun-lobby": {
    label: "Hot Run's Group",
    render: () => v(Su, {})
  }
};
const Pu = () => {
  const {
    page: i,
    group: u,
    hasAccess: d,
    input: e,
    hasTurf: t,
    config: n
  } = W();
  const o = j(() => xn[i()]);
  const r = j(() => n()?.pages?.[i()]);
  return (() => {
    const a = Eu();
    const l = a.firstChild;
    $(l, v(Te, {
      get fallback() {
        return v(Re, {});
      },
      get children() {
        return v(we, {
          get children() {
            return [v(te, {
              get when() {
                if (j(() => !!d()?.[0] && !!r()?.turf)()) {
                  return t()?.[0];
                } else {
                  return true;
                }
              },
              get children() {
                return [v(Er, {
                  get name() {
                    return bn.name;
                  },
                  get children() {
                    const s = Mu();
                    const c = s.firstChild;
                    const _ = c.firstChild;
                    const f = _.firstChild;
                    const h = f.nextSibling;
                    const g = h.firstChild;
                    g.firstChild;
                    const y = g.nextSibling;
                    const p = y.firstChild;
                    const x = _.nextSibling;
                    const C = x.firstChild;
                    const k = c.nextSibling;
                    const b = k.firstChild;
                    const M = b.firstChild;
                    const I = M.nextSibling;
                    const B = I.firstChild;
                    const z = B.nextSibling;
                    const T = z.firstChild;
                    const Q = T.nextSibling;
                    Q.firstChild;
                    $(g, () => u()?.level ?? 0, null);
                    $(p, () => u()?.influence?.toFixed(1) ?? 0);
                    $(T, () => u()?.daily_limit?.toFixed(1) ?? 0);
                    $(Q, () => n()?.dailyLimit, null);
                    S(q => {
                      const ee = He.headerContainer;
                      const fe = He.progressContainer;
                      const he = He.progress;
                      const E = `${Rr() ?? 0}%`;
                      const P = He.dailyLimit;
                      if (ee !== q._v$) {
                        m(s, q._v$ = ee);
                      }
                      if (fe !== q._v$2) {
                        m(x, q._v$2 = fe);
                      }
                      if (he !== q._v$3) {
                        m(C, q._v$3 = he);
                      }
                      if (E !== q._v$4) {
                        if ((q._v$4 = E) != null) {
                          C.style.setProperty("width", E);
                        } else {
                          C.style.removeProperty("width");
                        }
                      }
                      if (P !== q._v$5) {
                        m(b, q._v$5 = P);
                      }
                      return q;
                    }, {
                      _v$: undefined,
                      _v$2: undefined,
                      _v$3: undefined,
                      _v$4: undefined,
                      _v$5: undefined
                    });
                    return s;
                  }
                }), j(() => o()?.render())];
              }
            }), v(te, {
              get when() {
                return !d()?.[0];
              },
              get children() {
                return v(tn, {});
              }
            }), v(te, {
              get when() {
                return j(() => !t()?.[0])() && r()?.turf;
              },
              get children() {
                return [v($e, {}), v(tn, {})];
              }
            })];
          }
        });
      }
    }), null);
    $(l, v(Fn, {
      name: "scaleIn",
      get children() {
        return v(U, {
          get when() {
            return e();
          },
          get children() {
            return v(hu, {});
          }
        });
      }
    }), null);
    S(s => {
      const c = He.main_bg;
      const _ = He.container;
      if (c !== s._v$6) {
        m(a, s._v$6 = c);
      }
      if (_ !== s._v$7) {
        m(l, s._v$7 = _);
      }
      return s;
    }, {
      _v$6: undefined,
      _v$7: undefined
    });
    return a;
  })();
};
const Ou = i => v(Pu, {});
const [Nu, Iu] = Un(() => {
  const [i] = X(() => A.execute("hideout:hasAccess"));
  const [u] = X(() => A.execute("hideout:turfs:getTurf"));
  const [d] = X(() => A.execute("hideout:getConfig"));
  const [e] = X(() => A.execute("hideout:getWeedConfig"));
  const [t, n] = X(() => A.execute("hideout:getGroupData"));
  const [o, r] = F("home");
  const a = X(() => o() === "turf" ? A.execute("hideout:getTurfZones") : null);
  const l = X(() => A.execute("hideout:progression:getUnlockedCodes"));
  const [s] = X(() => A.execute("hideout:getCurrentCoords"));
  const [c, _] = F(null);
  const [f, h] = F(null);
  const g = X(() => o() === "black-market" ? A.execute("hideout:black-market:getItems") : []);
  const y = X(() => o() === "black-market" ? A.execute("hideout:black-market:getCart") : []);
  const [p, x] = F(null);
  const [C, k] = X(() => A.execute("hideout:members:getMembers"));
  const [b, M] = X(() => A.execute("hideout:ranks:getRanks"));
  return {
    hasAccess: i,
    hasTurf: u,
    config: d,
    weedConfig: e,
    group: t,
    refetchGroup: n.refetch,
    page: o,
    setPage: r,
    turfZonesResource: a,
    currentCoords: s,
    selectedTurf: c,
    setSelectedTurf: _,
    unlockCodesResource: l,
    selectedRoadmap: f,
    setSelectedRoadmap: h,
    blackMarketItemsResource: g,
    blackMarketCartResource: y,
    input: p,
    setInput: x,
    members: C,
    refetchMembers: k.refetch,
    ranks: b,
    refetchRanks: M.refetch
  };
});
const W = () => Iu();
const Au = i => v(Nu, {
  get children() {
    return v(Ou, i);
  }
});
const bn = {
  icon: Pr,
  enabled: true,
  onDock: false,
  name: "hideout",
  label: "Hideout",
  description: "Manage the Hideout and unlock new features",
  isEnabled: true,
  isLaptop: true,
  requiresWifi: true,
  requiresVPN: true,
  render: () => v(Au, {})
};
const Tu = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: bn
}, Symbol.toStringTag, {
  value: "Module"
}));
export { or as A, Lr as C, zu as L, gn as N, ju as R, Er as a, K as b, lr as c, Xn as d, Pt as e, Qe as f, Bu as g, Ft as h, N as s };
