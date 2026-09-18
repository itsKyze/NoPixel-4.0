import { m as _0xc4e6b8, e as _0x1cc83b, j as _0xae1784, k as _0x22c3fc, l as _0xd6d5b5, n as _0x2a625b, t as _0x5b28ab, J, f as _0x36017b, a as _0x522035, o as _0x48c332, c as _0x52314b, w as _0x46c596, M as _0x4b9d33, x as _0xc13761, S as _0x128bc3, y as _0x30d722, b as _0x5c6799, ag as _0x341019 } from "./vendor-c69496a3.js";
import { b as _0x327012, a as _0x277417 } from "./vite-1e207deb.js";
import { N as _0x1605b7, U as _0x16c7c4 } from "./v-packages-3113361c.js";
import "./commonjsHelpers-725317a4.js";
const de = "_container_4v1vu_1";
const ue = {
  container: de
};
const _e = "_button_1xgin_1";
const ve = {
  button: _e
};
const fe = "_container_4dcal_1";
const he = "_small_4dcal_29";
const $e = "_input_container_4dcal_33";
const N = {
  container: fe,
  small: he,
  input_container: $e
};
const ge = _0x5b28ab("<div class=\"flex w-full flex-row items-center justify-center gap-[1vh]\"><div><h1></h1><p>Insert the <!> of the WiFi you want to hack.</div><div><input type=\"text\">");
const T = _0x18ae14 => (() => {
  const _0x1af35e = ge();
  const _0x6a80ca = _0x1af35e.firstChild;
  const _0x4569fe = _0x6a80ca.firstChild;
  const _0x179fac = _0x4569fe.nextSibling;
  const _0x43ea64 = _0x179fac.firstChild;
  const _0x578085 = _0x43ea64.nextSibling;
  _0x578085.nextSibling;
  const _0x2291f7 = _0x6a80ca.nextSibling;
  const _0x3d64dd = _0x2291f7.firstChild;
  _0x1cc83b(_0x4569fe, () => _0x18ae14.title);
  _0x1cc83b(_0x179fac, () => _0x18ae14.title, _0x578085);
  _0x3d64dd.$$input = _0x14f32c => {
    _0x18ae14.setValue(_0x14f32c.currentTarget.value);
  };
  _0xae1784(_0x1ac2ac => {
    const _0x1c22fc = N.container;
    const _0x388c6e = {
      [N.small]: _0x18ae14.small
    };
    const _0x5d55de = N.input_container;
    const _0x31c453 = {
      [N.small]: _0x18ae14.small
    };
    const _0x4f1537 = _0x18ae14.title;
    const _0x319548 = _0x18ae14.small;
    if (_0x1c22fc !== _0x1ac2ac._v$) {
      _0x22c3fc(_0x6a80ca, _0x1ac2ac._v$ = _0x1c22fc);
    }
    _0x1ac2ac._v$2 = _0xd6d5b5(_0x179fac, _0x388c6e, _0x1ac2ac._v$2);
    if (_0x5d55de !== _0x1ac2ac._v$3) {
      _0x22c3fc(_0x2291f7, _0x1ac2ac._v$3 = _0x5d55de);
    }
    _0x1ac2ac._v$4 = _0xd6d5b5(_0x2291f7, _0x31c453, _0x1ac2ac._v$4);
    if (_0x4f1537 !== _0x1ac2ac._v$5) {
      _0x2a625b(_0x3d64dd, "placeholder", _0x1ac2ac._v$5 = _0x4f1537);
    }
    if (_0x319548 !== _0x1ac2ac._v$6) {
      _0x3d64dd.disabled = _0x1ac2ac._v$6 = _0x319548;
    }
    return _0x1ac2ac;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined
  });
  _0xae1784(() => _0x3d64dd.value = _0x18ae14.value());
  return _0x1af35e;
})();
_0xc4e6b8(["input"]);
const me = _0x5b28ab("<div><h1>Crack</h1><p>Crack the WiFi to connect");
const ye = () => {
  const {
    setHack: _0x3a3466,
    macAddress: _0x7e0536,
    setMacAddress: _0x3cb998,
    ipAddress: _0x447014,
    setIpAddress: _0x2e714a
  } = V();
  J(() => {
    _0x3a3466(false);
  });
  return [_0x36017b(T, {
    title: "MAC Address",
    value: _0x7e0536,
    setValue: _0x3cb998
  }), _0x36017b(T, {
    title: "IP Address",
    value: _0x447014,
    setValue: _0x2e714a
  }), (() => {
    const _0x10d5ce = me();
    _0x10d5ce.$$click = async () => {
      if (await _0x1605b7.execute("salty:checkWifi", _0x7e0536(), _0x447014())) {
        _0x3a3466(true);
      } else {
        _0x327012("cracker", "Invalid MAC/IP address or network has expired");
      }
    };
    _0xae1784(() => _0x22c3fc(_0x10d5ce, ve.button));
    return _0x10d5ce;
  })()];
};
_0xc4e6b8(["click"]);
const be = "_header_15ts7_1";
const ke = "_button_15ts7_28";
const Ce = "_fail_15ts7_40";
const D = {
  header: be,
  button: ke,
  fail: Ce
};
const pe = "_keybinds_container_ji56a_1";
const we = "_keybind_container_ji56a_14";
const Ae = "_success_ji56a_25";
const xe = "_keybind_ji56a_1";
const Me = "_error_ji56a_31";
const Fe = "_progress_container_ji56a_55";
const Ie = "_bar_ji56a_65";
const Se = "_progress_ji56a_55";
const je = "_seconds_ji56a_78";
const k = {
  keybinds_container: pe,
  keybind_container: we,
  success: Ae,
  keybind: xe,
  error: Me,
  progress_container: Fe,
  bar: Ie,
  progress: Se,
  seconds: je
};
const Le = _0x5b28ab("<div class=\"mt-[3vh] flex flex-row items-center justify-center gap-[0.5vh]\"><div><div><div></div></div></div><div> sec left");
const He = _0x5b28ab("<div class=\"flex w-full flex-col items-center justify-start\"><div>");
const Pe = _0x5b28ab("<svg><path d=\"M36 8.5C36 13.1944 32.1944 17 27.5 17C22.8056 17 19 13.1944 19 8.5C19 3.80558 22.8056 0 27.5 0C32.1944 0 36 3.80558 36 8.5ZM20.0863 8.5C20.0863 12.5945 23.4055 15.9137 27.5 15.9137C31.5945 15.9137 34.9137 12.5945 34.9137 8.5C34.9137 4.40553 31.5945 1.0863 27.5 1.0863C23.4055 1.0863 20.0863 4.40553 20.0863 8.5Z\" fill=\"white\" fill-opacity=\"0.28\"></svg>", false, true);
const Ke = _0x5b28ab("<svg><rect y=\"8\" width=\"15\" height=\"1\" fill=\"white\" fill-opacity=\"0.28\"></svg>", false, true);
const We = _0x5b28ab("<svg><circle cx=\"27.5\" cy=\"8.5\" r=\"5.5\" fill=\"#00F8B9\" fill-opacity=\"0.25\"></svg>", false, true);
const Re = _0x5b28ab("<svg><path d=\"M24 9.125L25.9091 11L31 6\" stroke=\"#00F8B9\"></svg>", false, true);
const Ee = _0x5b28ab("<svg><path d=\"M36 8.5C36 13.1944 32.1944 17 27.5 17C22.8056 17 19 13.1944 19 8.5C19 3.80558 22.8056 0 27.5 0C32.1944 0 36 3.80558 36 8.5ZM20.0863 8.5C20.0863 12.5945 23.4055 15.9137 27.5 15.9137C31.5945 15.9137 34.9137 12.5945 34.9137 8.5C34.9137 4.40553 31.5945 1.0863 27.5 1.0863C23.4055 1.0863 20.0863 4.40553 20.0863 8.5Z\" fill=\"#00F8B9\"></svg>", false, true);
const Ne = _0x5b28ab("<svg><rect y=\"8\" width=\"15\" height=\"1\" fill=\"#00F8B9\"></svg>", false, true);
const Ue = _0x5b28ab("<svg><circle cx=\"27.5\" cy=\"8.5\" r=\"5.5\" fill=\"#F86969\" fill-opacity=\"0.25\"></svg>", false, true);
const Te = _0x5b28ab("<svg><path d=\"M36 8.5C36 13.1944 32.1944 17 27.5 17C22.8056 17 19 13.1944 19 8.5C19 3.80558 22.8056 0 27.5 0C32.1944 0 36 3.80558 36 8.5ZM20.0863 8.5C20.0863 12.5945 23.4055 15.9137 27.5 15.9137C31.5945 15.9137 34.9137 12.5945 34.9137 8.5C34.9137 4.40553 31.5945 1.0863 27.5 1.0863C23.4055 1.0863 20.0863 4.40553 20.0863 8.5Z\" fill=\"#F86969\"></svg>", false, true);
const Ve = _0x5b28ab("<svg><path d=\"M30 6L27.5 8.5M25 11L27.5 8.5M27.5 8.5L25 6L30 11\" stroke=\"#F86969\"></svg>", false, true);
const Ze = _0x5b28ab("<svg><rect y=\"8\" width=\"15\" height=\"1\" fill=\"#F86969\" fill-opacity=\"0.55\"></svg>", false, true);
const Be = _0x5b28ab("<div class=\"flex flex-col items-center justify-start\"><div><div></div></div><svg class=\"absolute mr-[2vh] mt-[5vh]\" width=\"3.33vh\" height=\"1.57vh\" viewBox=\"0 0 36 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">");
const Ye = () => {
  const {
    setHackResult: _0x1c7f7f,
    setHack: _0x56e691,
    macAddress: _0x1e7e8e,
    ipAddress: _0x42fc90
  } = V();
  const _0x1befb2 = 8;
  const [_0x3c7b0d, _0x1ab9c9] = _0x522035(_0x1befb2);
  let _0xb1aa6a = null;
  let _0x4adc2e = null;
  J(() => {
    _0x1c7f7f(null);
    _0xb1aa6a = setInterval(() => {
      _0x1ab9c9(_0x3c7b0d() - 1);
    }, 1000);
    _0x4adc2e = setTimeout(() => {
      if (_0xb1aa6a) {
        _0x13a691();
        clearInterval(_0xb1aa6a);
        _0xb1aa6a = null;
      }
    }, _0x1befb2 * 1000);
  });
  _0x48c332(() => {
    clearInterval(_0xb1aa6a);
    _0xb1aa6a = null;
    clearTimeout(_0x4adc2e);
    _0x4adc2e = null;
  });
  const _0x5e500f = async () => {
    clearInterval(_0xb1aa6a);
    _0xb1aa6a = null;
    if (!(await _0x1605b7.execute("salty:connectWifi", _0x1e7e8e(), _0x42fc90()))) {
      _0x13a691();
      return;
    }
    _0x1c7f7f(true);
    _0x327012("cracker", "Successfully connected to the WiFi.");
    setTimeout(() => {
      _0x56e691(false);
    }, 3000);
  };
  const _0x13a691 = () => {
    clearInterval(_0xb1aa6a);
    _0xb1aa6a = null;
    _0x1c7f7f(false);
    _0x327012("cracker", "Failed to connect to the WiFi.");
    setTimeout(() => {
      _0x56e691(false);
    }, 3000);
  };
  const _0x34c6fc = () => {
    const _0xc49930 = [..."QWERTYUIOPASDFGHJKLZXCVBNM1234567890"];
    const _0x505471 = [];
    const _0x59164c = _0x16c7c4.MathUtils.getRandomNumber(10, 15);
    for (let _0x330aff = 0; _0x330aff < _0x59164c; _0x330aff++) {
      const _0x49b611 = _0x16c7c4.MathUtils.getRandomNumber(0, _0xc49930.length - 1);
      _0x505471.push(_0xc49930[_0x49b611]);
      _0xc49930.splice(_0x49b611, 1);
    }
    return _0x505471;
  };
  const [_0x53a2c8, _0x419615] = _0x52314b([]);
  const [_0x440ee0, _0x1f8683] = _0x52314b([]);
  const [_0x3f6598, _0x55597e] = _0x52314b(_0x34c6fc());
  const _0x2e656f = _0x488b84 => {
    const _0x2aab35 = _0x488b84.key.toUpperCase();
    if (!_0xb1aa6a) {
      return;
    }
    if (_0x3f6598[_0x53a2c8.length] === _0x2aab35) {
      _0x419615([..._0x53a2c8, _0x3f6598.indexOf(_0x2aab35)]);
      if (_0x3f6598.length === _0x53a2c8.length) {
        _0x5e500f();
      }
    } else {
      _0x1f8683([..._0x440ee0, _0x53a2c8.length]);
      _0x13a691();
    }
  };
  J(() => {
    _0x1ab9c9(_0x1befb2);
    _0x419615([]);
    _0x1f8683([]);
    _0x55597e(_0x34c6fc());
    document.addEventListener("keydown", _0x2e656f);
  });
  _0x48c332(() => {
    document.removeEventListener("keydown", _0x2e656f);
  });
  let _0x6766ab;
  return (() => {
    const _0x22b605 = He();
    const _0x1889af = _0x22b605.firstChild;
    const _0x3b8b72 = _0x6766ab;
    if (typeof _0x3b8b72 == "function") {
      _0x5c6799(_0x3b8b72, _0x1889af);
    } else {
      _0x6766ab = _0x1889af;
    }
    _0x1cc83b(_0x1889af, _0x36017b(_0x30d722, {
      each: _0x3f6598,
      children: (_0x40293e, _0x1e083c) => (() => {
        const _0x721deb = Be();
        const _0x5b6488 = _0x721deb.firstChild;
        const _0x1cc846 = _0x5b6488.firstChild;
        const _0x5aca30 = _0x5b6488.nextSibling;
        _0x1cc83b(_0x1cc846, _0x40293e);
        _0x1cc83b(_0x5aca30, _0x36017b(_0x46c596, {
          get children() {
            return [_0x36017b(_0x4b9d33, {
              get when() {
                return _0xc13761(() => !_0x53a2c8.includes(_0x1e083c()))() && !_0x440ee0.includes(_0x1e083c());
              },
              get children() {
                return [Pe(), _0x36017b(_0x128bc3, {
                  get when() {
                    return _0x1e083c() !== 0;
                  },
                  get children() {
                    return Ke();
                  }
                })];
              }
            }), _0x36017b(_0x4b9d33, {
              get when() {
                return _0x53a2c8.includes(_0x1e083c());
              },
              get children() {
                return [We(), Re(), Ee(), _0x36017b(_0x128bc3, {
                  get when() {
                    return _0x1e083c() !== 0;
                  },
                  get children() {
                    return Ne();
                  }
                })];
              }
            }), _0x36017b(_0x4b9d33, {
              get when() {
                return _0x440ee0.includes(_0x1e083c());
              },
              get children() {
                return [Ue(), Te(), Ve(), _0x36017b(_0x128bc3, {
                  get when() {
                    return _0x1e083c() !== 0;
                  },
                  get children() {
                    return Ze();
                  }
                })];
              }
            })];
          }
        }));
        _0xae1784(_0x4853d3 => {
          const _0x2543c7 = k.keybind_container;
          const _0xaba2c0 = {
            [k.success]: _0x53a2c8.includes(_0x1e083c()),
            [k.error]: _0x440ee0.includes(_0x1e083c())
          };
          const _0x488599 = k.keybind;
          if (_0x2543c7 !== _0x4853d3._v$7) {
            _0x22c3fc(_0x5b6488, _0x4853d3._v$7 = _0x2543c7);
          }
          _0x4853d3._v$8 = _0xd6d5b5(_0x5b6488, _0xaba2c0, _0x4853d3._v$8);
          if (_0x488599 !== _0x4853d3._v$9) {
            _0x22c3fc(_0x1cc846, _0x4853d3._v$9 = _0x488599);
          }
          return _0x4853d3;
        }, {
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined
        });
        return _0x721deb;
      })()
    }));
    _0x1cc83b(_0x22b605, _0x36017b(_0x128bc3, {
      get when() {
        return _0x6766ab && _0x3c7b0d() < _0x1befb2;
      },
      get children() {
        const _0x277ba9 = Le();
        const _0x266954 = _0x277ba9.firstChild;
        const _0x1bdb9c = _0x266954.firstChild;
        const _0x4ef959 = _0x1bdb9c.firstChild;
        const _0x2a8f45 = _0x266954.nextSibling;
        const _0x351844 = _0x2a8f45.firstChild;
        _0x1cc83b(_0x2a8f45, _0x3c7b0d, _0x351844);
        _0xae1784(_0x385559 => {
          const _0x3d111e = _0x6766ab.clientWidth + "px";
          const _0x1768d4 = k.progress_container;
          const _0x4426f3 = k.bar;
          const _0x548c84 = k.progress;
          const _0x1e2b24 = _0x3c7b0d() / _0x1befb2 * 100 + "%";
          const _0x4a9dbe = k.seconds;
          if (_0x3d111e !== _0x385559._v$) {
            if ((_0x385559._v$ = _0x3d111e) != null) {
              _0x277ba9.style.setProperty("width", _0x3d111e);
            } else {
              _0x277ba9.style.removeProperty("width");
            }
          }
          if (_0x1768d4 !== _0x385559._v$2) {
            _0x22c3fc(_0x266954, _0x385559._v$2 = _0x1768d4);
          }
          if (_0x4426f3 !== _0x385559._v$3) {
            _0x22c3fc(_0x1bdb9c, _0x385559._v$3 = _0x4426f3);
          }
          if (_0x548c84 !== _0x385559._v$4) {
            _0x22c3fc(_0x4ef959, _0x385559._v$4 = _0x548c84);
          }
          if (_0x1e2b24 !== _0x385559._v$5) {
            if ((_0x385559._v$5 = _0x1e2b24) != null) {
              _0x4ef959.style.setProperty("width", _0x1e2b24);
            } else {
              _0x4ef959.style.removeProperty("width");
            }
          }
          if (_0x4a9dbe !== _0x385559._v$6) {
            _0x22c3fc(_0x2a8f45, _0x385559._v$6 = _0x4a9dbe);
          }
          return _0x385559;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined
        });
        return _0x277ba9;
      }
    }), null);
    _0xae1784(() => _0x22c3fc(_0x1889af, k.keybinds_container));
    return _0x22b605;
  })();
};
const De = _0x5b28ab("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\">");
const Je = _0x5b28ab("<div><h1>Press those buttons as fast as you can</h1><p>Hacking...");
const Oe = _0x5b28ab("<div><h1></h1><p>");
const Xe = _0x5b28ab("<div class=\"flex w-full translate-y-[-3vh] flex-col items-start justify-start gap-[1vh]\">");
const qe = () => {
  const {
    hackResult: _0x16e1c9,
    ipAddress: _0xa791e4,
    setIpAddress: _0x3f98f4,
    macAddress: _0x4960f2,
    setMacAddress: _0x4710ff
  } = V();
  return [(() => {
    const _0x11c929 = De();
    _0x1cc83b(_0x11c929, _0x36017b(T, {
      small: true,
      title: "MAC Address",
      value: _0x4960f2,
      setValue: _0x4710ff
    }), null);
    _0x1cc83b(_0x11c929, _0x36017b(T, {
      small: true,
      title: "IP Address",
      value: _0xa791e4,
      setValue: _0x3f98f4
    }), null);
    return _0x11c929;
  })(), (() => {
    const _0x1b5813 = Je();
    _0xae1784(() => _0x22c3fc(_0x1b5813, D.header));
    return _0x1b5813;
  })(), (() => {
    const _0x7c3123 = Xe();
    _0x1cc83b(_0x7c3123, _0x36017b(Ye, {}), null);
    _0x1cc83b(_0x7c3123, _0x36017b(_0x128bc3, {
      get when() {
        return _0x16e1c9() !== null;
      },
      get children() {
        const _0x354152 = Oe();
        const _0xc5bc1a = _0x354152.firstChild;
        const _0x2ed82e = _0xc5bc1a.nextSibling;
        _0x1cc83b(_0xc5bc1a, () => _0x16e1c9() ? "Hacking done!" : "Hacking failed!");
        _0x1cc83b(_0x2ed82e, () => _0x16e1c9() ? "You successfully hacked the WiFi." : "You failed to hack the WiFi.");
        _0xae1784(_0x2abdff => {
          const _0x1a4065 = D.button;
          const _0x52af05 = {
            [D.fail]: !_0x16e1c9()
          };
          if (_0x1a4065 !== _0x2abdff._v$) {
            _0x22c3fc(_0x354152, _0x2abdff._v$ = _0x1a4065);
          }
          _0x2abdff._v$2 = _0xd6d5b5(_0x354152, _0x52af05, _0x2abdff._v$2);
          return _0x2abdff;
        }, {
          _v$: undefined,
          _v$2: undefined
        });
        return _0x354152;
      }
    }), null);
    return _0x7c3123;
  })()];
};
const Ge = _0x5b28ab("<div>");
const Qe = () => {
  const {
    hack: _0x4be337
  } = V();
  return (() => {
    const _0x3ba781 = Ge();
    _0x1cc83b(_0x3ba781, _0x36017b(_0x277417, {
      get name() {
        return st.name;
      }
    }), null);
    _0x1cc83b(_0x3ba781, _0x36017b(_0x46c596, {
      get children() {
        return [_0x36017b(_0x4b9d33, {
          get when() {
            return !_0x4be337();
          },
          get children() {
            return _0x36017b(ye, {});
          }
        }), _0x36017b(_0x4b9d33, {
          get when() {
            return _0x4be337();
          },
          get children() {
            return _0x36017b(qe, {});
          }
        })];
      }
    }), null);
    _0xae1784(() => _0x22c3fc(_0x3ba781, ue.container));
    return _0x3ba781;
  })();
};
const [ze, et] = _0x341019(() => {
  const [_0x3cf640, _0x545deb] = _0x522035(false);
  const [_0x41bdff, _0x408e16] = _0x522035(null);
  const [_0x296ea8, _0x35d532] = _0x522035("");
  const [_0x27365e, _0x13c443] = _0x522035("");
  return {
    hack: _0x3cf640,
    setHack: _0x545deb,
    hackResult: _0x41bdff,
    setHackResult: _0x408e16,
    macAddress: _0x296ea8,
    setMacAddress: _0x35d532,
    ipAddress: _0x27365e,
    setIpAddress: _0x13c443
  };
});
const V = () => et();
const tt = () => _0x36017b(ze, {
  get children() {
    return _0x36017b(Qe, {});
  }
});
const nt = "" + new URL("cracker-icon-4eb4bcce.png", import.meta.url).href;
const st = {
  icon: nt,
  enabled: true,
  onDock: false,
  name: "cracker",
  label: "SmokeCrack",
  description: "Enter details and hack specific Wi-Fi networks",
  isEnabled: true,
  isLaptop: true,
  requiresVPN: true,
  render: () => _0x36017b(tt, {})
};
export { st as default };
