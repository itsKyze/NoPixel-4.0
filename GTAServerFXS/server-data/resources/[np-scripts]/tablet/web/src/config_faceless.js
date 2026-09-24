import { a as _0x3f9548, J as _0x379327, f as _0x1f95d7, af as _0x1c7610, S as _0x2496dd, b as _0xd53de5, t as _0x419b47 } from "./vendor.js";
import { A as _0x3ccfba } from "./index_shared.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./v-packages.js";
const u = _0x419b47("<div class=\"absolute flex h-full w-full items-center justify-center bg-black\"><i class=\"fa-duotone fa-spinner-third fa-spin text-[6rem] text-[#00f8b9]\">");
const p = _0x419b47("<iframe src=\"https://usbfaceless.com/\" class=\"h-full w-full overflow-hidden\">");
const h = () => {
  const [_0x588454, _0x21960d] = _0x3f9548(false);
  let _0x36736d;
  _0x379327(() => {
    if (_0x36736d) {
      _0x36736d.addEventListener("load", () => {
        try {
          const _0x1f43d5 = window.innerWidth / 1920;
          const _0x1faacb = _0x36736d.contentWindow.document.body;
          _0x1faacb.style.zoom = "" + _0x1f43d5;
          _0x21960d(true);
        } catch (_0x2508e4) {
          console.error(_0x2508e4);
        }
      });
    }
  });
  return _0x1f95d7(_0x3ccfba, {
    get name() {
      return g.name;
    },
    get children() {
      return [_0x1f95d7(_0x1c7610, {
        name: "fadeIn",
        get children() {
          return _0x1f95d7(_0x2496dd, {
            get when() {
              return !_0x588454();
            },
            get children() {
              const _0x2862aa = u();
              _0x2862aa.firstChild.style.setProperty("filter", "drop-shadow(0px 0px 0.8rem rgba(0, 248, 185, 0.55))");
              return _0x2862aa;
            }
          });
        }
      }), (() => {
        const _0x11127d = p();
        _0xd53de5(_0x31bec6 => _0x36736d = _0x31bec6, _0x11127d);
        return _0x11127d;
      })()];
    }
  });
};
const b = "" + new URL("faceless-391cc03e.png", import.meta.url).href;
const g = {
  icon: b,
  enabled: true,
  onDock: false,
  name: "faceless",
  label: "The Faceless",
  isEnabled: true,
  render: () => _0x1f95d7(h, {})
};
export { g as default };
