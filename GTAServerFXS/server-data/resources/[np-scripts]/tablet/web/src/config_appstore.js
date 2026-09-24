import { m as _0x15579c, c as _0x1e430d, J as _0x1cd978, f as _0x2e9fda, e as _0x11c3b6, y as _0x2ab75c, j as _0x38ac0b, k as _0x1ae01b, S as _0x58d183, t as _0x35997c, n as _0xb70b49, M as _0x15d8a4, w as _0x5984ea, x as _0x52d213 } from "./vendor.js";
import { g as _0x207ab0, a as _0x3b523f, b as _0x108266 } from "./vite.js";
import { N as _0x8e5a3c } from "./v-packages.js";
import "./commonjsHelpers.js";
const L = "_container_xacd3_1";
const M = "_banner_xacd3_11";
const P = "_apps_xacd3_16";
const U = "_app_xacd3_16";
const F = "_box_xacd3_36";
const R = "_install_xacd3_71";
const B = "_price_xacd3_93";
const H = "_installed_xacd3_116";
const J = "_notAvailable_xacd3_134";
const c = {
  container: L,
  banner: M,
  apps: P,
  app: U,
  box: F,
  install: R,
  price: B,
  installed: H,
  notAvailable: J
};
const T = _0x35997c("<span>BUTC");
const Y = _0x35997c("<div class=\"flex flex-row items-center justify-between gap-[0.2vh]\"><div>Install</div><div>");
const q = _0x35997c("<div>Installed");
const z = _0x35997c("<div>Not Available");
const G = _0x35997c("<div><div class=\"flex h-full w-full flex-row items-start justify-between\"><div><img></div><div class=\"items-between flex h-full flex-col justify-between\"><h1></h1><p>");
const K = _0x35997c("<div><div>Apps</div><div class=\"grid w-full grid-cols-4 grid-rows-4 gap-[1vh]\">");
const O = _0x33e6c5 => (() => {
  const _0x5ace6d = G();
  const _0x31132f = _0x5ace6d.firstChild;
  const _0x26af9c = _0x31132f.firstChild;
  const _0x2eaaa6 = _0x26af9c.firstChild;
  const _0x48b4c6 = _0x26af9c.nextSibling;
  const _0x16a683 = _0x48b4c6.firstChild;
  const _0x331b2d = _0x16a683.nextSibling;
  _0xb70b49(_0x2eaaa6, "draggable", false);
  _0x11c3b6(_0x16a683, () => _0x33e6c5.app.label);
  _0x11c3b6(_0x331b2d, () => _0x33e6c5.app.description);
  _0x11c3b6(_0x48b4c6, _0x2e9fda(_0x5984ea, {
    get children() {
      return [_0x2e9fda(_0x15d8a4, {
        get when() {
          return _0x33e6c5.app.isEnabled;
        },
        get children() {
          return [_0x2e9fda(_0x58d183, {
            get when() {
              return !_0x33e6c5.installed && !_0x33e6c5.app.isPreInstalled;
            },
            get children() {
              const _0x324563 = Y();
              const _0x3298e3 = _0x324563.firstChild;
              const _0x11f65c = _0x3298e3.nextSibling;
              _0x3298e3.$$click = async () => {
                if (await _0x8e5a3c.execute("appstore:buyApp", _0x33e6c5.app.name)) {
                  _0x108266("appstore", "App Installed successfully");
                  _0x33e6c5.fetchData();
                } else {
                  _0x108266("appstore", "You do not have enough crypto to buy this app");
                }
              };
              _0x11c3b6(_0x11f65c, _0x2e9fda(_0x5984ea, {
                get children() {
                  return [_0x2e9fda(_0x15d8a4, {
                    get when() {
                      return _0x33e6c5.price;
                    },
                    get children() {
                      return [_0x52d213(() => _0x33e6c5.price), " ", T()];
                    }
                  }), _0x2e9fda(_0x15d8a4, {
                    get when() {
                      return !_0x33e6c5.price;
                    },
                    children: "Free"
                  })];
                }
              }));
              _0x38ac0b(_0x3b035b => {
                const _0x53c0c6 = c.install;
                const _0x5c11dd = c.price;
                if (_0x53c0c6 !== _0x3b035b._v$) {
                  _0x1ae01b(_0x3298e3, _0x3b035b._v$ = _0x53c0c6);
                }
                if (_0x5c11dd !== _0x3b035b._v$2) {
                  _0x1ae01b(_0x11f65c, _0x3b035b._v$2 = _0x5c11dd);
                }
                return _0x3b035b;
              }, {
                _v$: undefined,
                _v$2: undefined
              });
              return _0x324563;
            }
          }), _0x2e9fda(_0x58d183, {
            get when() {
              return _0x33e6c5.installed || _0x33e6c5.app.isPreInstalled;
            },
            get children() {
              const _0x262c76 = q();
              _0x38ac0b(() => _0x1ae01b(_0x262c76, c.installed));
              return _0x262c76;
            }
          })];
        }
      }), _0x2e9fda(_0x15d8a4, {
        get when() {
          return !_0x33e6c5.app.isEnabled;
        },
        get children() {
          const _0x367bd8 = z();
          _0x38ac0b(() => _0x1ae01b(_0x367bd8, c.notAvailable));
          return _0x367bd8;
        }
      })];
    }
  }), null);
  _0x38ac0b(_0x2000b9 => {
    const _0x327950 = c.app;
    const _0xfc506a = c.box;
    const _0x26fd7d = _0x33e6c5.app.icon;
    const _0x5cc254 = _0x33e6c5.app.name;
    if (_0x327950 !== _0x2000b9._v$3) {
      _0x1ae01b(_0x5ace6d, _0x2000b9._v$3 = _0x327950);
    }
    if (_0xfc506a !== _0x2000b9._v$4) {
      _0x1ae01b(_0x26af9c, _0x2000b9._v$4 = _0xfc506a);
    }
    if (_0x26fd7d !== _0x2000b9._v$5) {
      _0xb70b49(_0x2eaaa6, "src", _0x2000b9._v$5 = _0x26fd7d);
    }
    if (_0x5cc254 !== _0x2000b9._v$6) {
      _0xb70b49(_0x2eaaa6, "alt", _0x2000b9._v$6 = _0x5cc254);
    }
    return _0x2000b9;
  }, {
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined
  });
  return _0x5ace6d;
})();
const Q = () => {
  const _0x2647c6 = _0x207ab0();
  const [_0x45898d, _0x370f55] = _0x1e430d({});
  const [_0x4d4918, _0x5ac44c] = _0x1e430d({});
  const _0x315d62 = async () => {
    const _0x46359a = await _0x8e5a3c.execute("appstore:getData");
    _0x370f55(_0x46359a);
    const _0x59ecef = await _0x8e5a3c.execute("appstore:getPrices");
    _0x5ac44c(_0x59ecef);
  };
  _0x1cd978(async () => {
    await _0x315d62();
  });
  return _0x2e9fda(_0x58d183, {
    get when() {
      return _0x45898d.apps !== undefined;
    },
    get children() {
      const _0xc6d4be = K();
      const _0x314a69 = _0xc6d4be.firstChild;
      const _0x53e9bb = _0x314a69.nextSibling;
      _0x11c3b6(_0xc6d4be, _0x2e9fda(_0x3b523f, {
        get name() {
          return W.name;
        }
      }), _0x314a69);
      _0x11c3b6(_0x53e9bb, _0x2e9fda(_0x2ab75c, {
        get each() {
          return _0x2647c6.filter(_0x4d5361 => _0x4d5361.name !== "appstore").sort(_0x26c512 => _0x26c512.isEnabled ? -1 : 1);
        },
        children: _0x58512f => _0x2e9fda(O, {
          app: _0x58512f,
          get price() {
            return _0x4d4918[_0x58512f.name];
          },
          get installed() {
            return _0x45898d.apps.includes(_0x58512f.name);
          },
          fetchData: _0x315d62
        })
      }));
      _0x38ac0b(_0x1962b4 => {
        const _0x3250ff = c.container;
        const _0x57faec = c.apps;
        if (_0x3250ff !== _0x1962b4._v$7) {
          _0x1ae01b(_0xc6d4be, _0x1962b4._v$7 = _0x3250ff);
        }
        if (_0x57faec !== _0x1962b4._v$8) {
          _0x1ae01b(_0x314a69, _0x1962b4._v$8 = _0x57faec);
        }
        return _0x1962b4;
      }, {
        _v$7: undefined,
        _v$8: undefined
      });
      return _0xc6d4be;
    }
  });
};
_0x15579c(["click"]);
const V = "" + new URL("appstore-icon-6e46b5b6.png", import.meta.url).href;
const W = {
  icon: V,
  enabled: true,
  onDock: false,
  name: "appstore",
  label: "App Store",
  description: "Download and install applications",
  isEnabled: true,
  isLaptop: true,
  render: () => _0x2e9fda(Q, {})
};
export { W as default };
