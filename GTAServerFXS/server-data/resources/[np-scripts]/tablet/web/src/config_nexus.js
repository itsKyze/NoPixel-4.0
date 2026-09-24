import { a as _0x1dbc68, J as _0x15c3c7, f as _0x2f85b9, af as _0x2ab434, S as _0x429d73, b as _0x2ae83f, t as _0xce1f2e } from "./vendor.js";
import { A as _0x8a47f4 } from "./index_shared.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./v-packages.js";
const m = _0xce1f2e("<div class=\"absolute flex h-full w-full items-center justify-center bg-black\"><i class=\"fa-duotone fa-spinner-third fa-spin text-[6rem] text-[#00f8b9]\">");
const p = _0xce1f2e("<iframe src=\"https://www.nexusandco.org/\" class=\"h-full w-full overflow-hidden\">");
const h = () => {
  const [_0x3a3eb1, _0x254669] = _0x1dbc68(false);
  let _0x56425a;
  _0x15c3c7(() => {
    if (_0x56425a) {
      _0x56425a.addEventListener("load", () => {
        try {
          const _0x203733 = window.innerWidth / 1920;
          const _0x5b617b = _0x56425a.contentWindow.document.body;
          _0x5b617b.style.zoom = "" + _0x203733;
          _0x254669(true);
        } catch (_0x245065) {
          console.error(_0x245065);
        }
      });
    }
  });
  return _0x2f85b9(_0x8a47f4, {
    get name() {
      return b.name;
    },
    get children() {
      return [_0x2f85b9(_0x2ab434, {
        name: "fadeIn",
        get children() {
          return _0x2f85b9(_0x429d73, {
            get when() {
              return !_0x3a3eb1();
            },
            get children() {
              const _0x978d6b = m();
              _0x978d6b.firstChild.style.setProperty("filter", "drop-shadow(0px 0px 0.8rem rgba(0, 248, 185, 0.55))");
              return _0x978d6b;
            }
          });
        }
      }), (() => {
        const _0x453983 = p();
        _0x2ae83f(_0x4852c5 => _0x56425a = _0x4852c5, _0x453983);
        return _0x453983;
      })()];
    }
  });
};
const w = "" + new URL("nexus-145ed891.png", import.meta.url).href;
const b = {
  icon: w,
  enabled: true,
  onDock: false,
  name: "nexus",
  label: "neXus & Co.",
  isEnabled: true,
  render: () => _0x2f85b9(h, {})
};
export { b as default };
