import { a as _0x591cf8, x as _0x5532fd, Q as _0x3c4c69, f as _0x496641, S as _0x5750f6, af as _0x4f7604, b as _0x1f02c8, j as _0x179881, n as _0x36f630, t as _0x428db8 } from "./vendor.js";
import { A as _0xe73c58 } from "./index_shared.js";
import { R as _0x291599 } from "./vite.js";
import "./commonjsHelpers.js";
import "./v-packages.js";
const A = {
  "mobile-casino-backalley": {
    id: "back-alley-bets",
    name: "Back Alley Bets",
    url: "https://backalleybets.com"
  },
  "mobile-casino-dragons-lair": {
    id: "dragons-lair",
    name: "The Dragons Lair",
    url: "https://tdl-production-f4bc.up.railway.app/app.html"
  }
};
const x = "mobile-casino";
const [r, $] = _0x591cf8(null);
_0x291599(x, "setActive", _0x25b644 => {
  console.log("[Mobile Casino] Setting active casino - " + _0x25b644.id);
  $(_0x25b644?.id ?? null);
});
const k = _0x428db8("<div class=\"flex h-full w-full items-center justify-center bg-black text-white/60\">No casino available at this location.");
const C = _0x428db8("<div class=\"absolute flex h-full w-full items-center justify-center bg-black\"><i class=\"fa-duotone fa-spinner-third fa-spin text-[6rem] text-[#00f8b9]\">");
const _ = _0x428db8("<iframe class=\"h-full w-full overflow-hidden\">");
const E = () => {
  const [_0x1e2f06, _0x1bba1c] = _0x591cf8(false);
  let _0x55e706;
  const _0x277d1a = _0x5532fd(() => {
    const _0x37a864 = r();
    if (_0x37a864) {
      return A[_0x37a864];
    } else {
      return null;
    }
  });
  _0x3c4c69(() => {
    r();
    _0x1bba1c(false);
  });
  const _0xf8632a = () => {
    if (_0x55e706) {
      try {
        const _0x5910ac = window.innerWidth / 1920;
        const _0x5da87f = _0x55e706.contentWindow.document.body;
        _0x5da87f.style.zoom = "" + _0x5910ac;
        _0x1bba1c(true);
      } catch (_0x588326) {
        console.error(_0x588326);
      }
    }
  };
  return _0x496641(_0xe73c58, {
    get name() {
      return L.name;
    },
    get children() {
      return _0x496641(_0x5750f6, {
        get when() {
          return _0x277d1a();
        },
        get fallback() {
          return k();
        },
        children: _0x365ac3 => [_0x496641(_0x4f7604, {
          name: "fadeIn",
          get children() {
            return _0x496641(_0x5750f6, {
              get when() {
                return !_0x1e2f06();
              },
              get children() {
                const _0x5afddd = C();
                _0x5afddd.firstChild.style.setProperty("filter", "drop-shadow(0px 0px 0.8rem rgba(0, 248, 185, 0.55))");
                return _0x5afddd;
              }
            });
          }
        }), (() => {
          const _0x454434 = _();
          _0x454434.addEventListener("load", _0xf8632a);
          _0x1f02c8(_0x48aff2 => _0x55e706 = _0x48aff2, _0x454434);
          _0x179881(() => _0x36f630(_0x454434, "src", _0x365ac3().url));
          return _0x454434;
        })()]
      });
    }
  });
};
const I = "" + new URL("casino-f99b9404.avif", import.meta.url).href;
const L = {
  icon: I,
  enabled: true,
  onDock: false,
  name: "mobile-casino",
  label: "Casino",
  isEnabled: true,
  isVisible: () => r() !== null,
  render: () => _0x496641(E, {})
};
export { L as default };
