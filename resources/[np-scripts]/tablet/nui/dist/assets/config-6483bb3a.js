import { a as _0xfa356f, J as _0x17c55e, f as _0x3852bc, af as _0x53730d, S as _0x2ea8fd, b as _0x3dc4f9, t as _0x3fa3fd } from "./vendor-c69496a3.js";
import { A as _0x4d17bf } from "./index-3eb10154.js";
import "./commonjsHelpers-725317a4.js";
import "./vite-1e207deb.js";
import "./v-packages-3113361c.js";
const m = _0x3fa3fd("<div class=\"absolute flex h-full w-full items-center justify-center bg-black\"><i class=\"fa-duotone fa-spinner-third fa-spin text-[6rem] text-[#00f8b9]\">");
const u = _0x3fa3fd("<iframe src=\"https://www.nexusandco.org/facelessapp\" class=\"h-full w-full overflow-hidden\">");
const h = () => {
  const [_0x458eaf, _0x141dd7] = _0xfa356f(false);
  let _0x148659;
  _0x17c55e(() => {
    _0x148659?.addEventListener("load", () => _0x141dd7(true));
  });
  return _0x3852bc(_0x4d17bf, {
    get name() {
      return b.name;
    },
    get children() {
      return [_0x3852bc(_0x53730d, {
        name: "fadeIn",
        get children() {
          return _0x3852bc(_0x2ea8fd, {
            get when() {
              return !_0x458eaf();
            },
            get children() {
              const _0x1dca7e = m();
              _0x1dca7e.firstChild.style.setProperty("filter", "drop-shadow(0px 0px 0.8rem rgba(0, 248, 185, 0.55))");
              return _0x1dca7e;
            }
          });
        }
      }), (() => {
        const _0x3395b7 = u();
        _0x3dc4f9(_0x102f36 => _0x148659 = _0x102f36, _0x3395b7);
        return _0x3395b7;
      })()];
    }
  });
};
const w = "" + new URL("owl-glitch-6cfa8b68.webp", import.meta.url).href;
const b = {
  icon: w,
  enabled: true,
  onDock: false,
  name: "facelessapp",
  label: "Faceless",
  isEnabled: true,
  render: () => _0x3852bc(h, {})
};
export { b as default };
