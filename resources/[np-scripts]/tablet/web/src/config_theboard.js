import { a as _0x57a64d, J as _0xc5e80e, f as _0x3ce03e, af as _0x2b04f0, S as _0x11ea92, b as _0x3dd2ea, t as _0x4ab04d } from "./vendor.js";
import { A as _0x37f14b } from "./index_shared.js";
import { i as _0x4b48c3 } from "./underground_icon.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./v-packages.js";
const u = _0x4ab04d("<div class=\"absolute flex h-full w-full items-center justify-center bg-black\"><i class=\"fa-duotone fa-spinner-third fa-spin text-[6rem] text-[#00f8b9]\">");
const h = _0x4ab04d("<iframe src=\"https://10yeareventlockdown.com/\" class=\"h-full w-full overflow-hidden\">");
const b = () => {
  const [_0x466ffc, _0x4481e4] = _0x57a64d(false);
  let _0x4b4ab3;
  _0xc5e80e(() => {
    if (_0x4b4ab3) {
      _0x4b4ab3.addEventListener("load", () => {
        try {
          const _0x4f48e6 = window.innerWidth / 1920;
          const _0x13c029 = _0x4b4ab3.contentWindow.document.body;
          _0x13c029.style.zoom = "" + _0x4f48e6;
          _0x4481e4(true);
        } catch (_0x503b7d) {
          console.error(_0x503b7d);
        }
      });
    }
  });
  return _0x3ce03e(_0x37f14b, {
    get name() {
      return w.name;
    },
    get children() {
      return [_0x3ce03e(_0x2b04f0, {
        name: "fadeIn",
        get children() {
          return _0x3ce03e(_0x11ea92, {
            get when() {
              return !_0x466ffc();
            },
            get children() {
              const _0x374622 = u();
              _0x374622.firstChild.style.setProperty("filter", "drop-shadow(0px 0px 0.8rem rgba(0, 248, 185, 0.55))");
              return _0x374622;
            }
          });
        }
      }), (() => {
        const _0x43d8f8 = h();
        _0x3dd2ea(_0x2b7cac => _0x4b4ab3 = _0x2b7cac, _0x43d8f8);
        return _0x43d8f8;
      })()];
    }
  });
};
const w = {
  icon: _0x4b48c3,
  enabled: true,
  onDock: false,
  name: "the_board",
  label: "The Board",
  isEnabled: true,
  render: () => _0x3ce03e(b, {})
};
export { w as default };
