import { a as _0x339206, J as _0x505fe4, f as _0x2a0a61, af as _0x1e4033, S as _0x22a626, b as _0x405c35, t as _0x8b9372 } from "./vendor.js";
import { A as _0x5ab053 } from "./index_shared.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./v-packages.js";
const u = _0x8b9372("<div class=\"absolute flex h-full w-full items-center justify-center bg-black\"><i class=\"fa-duotone fa-spinner-third fa-spin text-[6rem] text-[#00f8b9]\">");
const p = _0x8b9372("<iframe src=\"https://facelessusb.com/\" class=\"h-full w-full overflow-hidden\">");
const h = () => {
  const [_0x13252b, _0x259d74] = _0x339206(false);
  let _0x39c08d;
  _0x505fe4(() => {
    if (_0x39c08d) {
      _0x39c08d.addEventListener("load", () => {
        try {
          const _0x132e1b = window.innerWidth / 1920;
          const _0x26081a = _0x39c08d.contentWindow.document.body;
          _0x26081a.style.zoom = "" + _0x132e1b;
          _0x259d74(true);
        } catch (_0x212fa1) {
          console.error(_0x212fa1);
        }
      });
    }
  });
  return _0x2a0a61(_0x5ab053, {
    get name() {
      return g.name;
    },
    get children() {
      return [_0x2a0a61(_0x1e4033, {
        name: "fadeIn",
        get children() {
          return _0x2a0a61(_0x22a626, {
            get when() {
              return !_0x13252b();
            },
            get children() {
              const _0x538e48 = u();
              _0x538e48.firstChild.style.setProperty("filter", "drop-shadow(0px 0px 0.8rem rgba(0, 248, 185, 0.55))");
              return _0x538e48;
            }
          });
        }
      }), (() => {
        const _0x4c6697 = p();
        _0x405c35(_0x58b9c5 => _0x39c08d = _0x58b9c5, _0x4c6697);
        return _0x4c6697;
      })()];
    }
  });
};
const b = "" + new URL("faceless-391cc03e.png", import.meta.url).href;
const g = {
  icon: b,
  enabled: true,
  onDock: false,
  name: "faceless_oc",
  label: "OC #65",
  isEnabled: true,
  render: () => _0x2a0a61(h, {})
};
export { g as default };
