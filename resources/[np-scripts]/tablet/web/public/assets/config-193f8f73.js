import { a as _0x2be1e2, J as _0x4e3afa, f as _0x39fab4, af as _0x2949fe, S as _0x44a133, b as _0x9a8256, t as _0xe1a7ee } from "./vendor-c69496a3.js";
import { A as _0x826cc7 } from "./index-3eb10154.js";
import "./commonjsHelpers-725317a4.js";
import "./vite-1e207deb.js";
import "./v-packages-3113361c.js";
const m = _0xe1a7ee("<div class=\"absolute flex h-full w-full items-center justify-center bg-black\"><i class=\"fa-duotone fa-spinner-third fa-spin text-[6rem] text-[#00f8b9]\">");
const p = _0xe1a7ee("<iframe src=\"https://lagarranetwork.com/\" class=\"h-full w-full overflow-hidden\">");
const h = () => {
  const [_0x394440, _0x3582a4] = _0x2be1e2(false);
  let _0x1b9cbd;
  _0x4e3afa(() => {
    if (_0x1b9cbd) {
      _0x1b9cbd.addEventListener("load", () => {
        try {
          const _0x481855 = window.innerWidth / 1920;
          const _0x72d950 = _0x1b9cbd.contentWindow.document.body;
          _0x72d950.style.zoom = "" + _0x481855;
          _0x3582a4(true);
        } catch (_0x245ae1) {
          console.error(_0x245ae1);
        }
      });
    }
  });
  return _0x39fab4(_0x826cc7, {
    get name() {
      return b.name;
    },
    get children() {
      return [_0x39fab4(_0x2949fe, {
        name: "fadeIn",
        get children() {
          return _0x39fab4(_0x44a133, {
            get when() {
              return !_0x394440();
            },
            get children() {
              const _0x1fa091 = m();
              _0x1fa091.firstChild.style.setProperty("filter", "drop-shadow(0px 0px 0.8rem rgba(0, 248, 185, 0.55))");
              return _0x1fa091;
            }
          });
        }
      }), (() => {
        const _0x577940 = p();
        _0x9a8256(_0x2b191f => _0x1b9cbd = _0x2b191f, _0x577940);
        return _0x577940;
      })()];
    }
  });
};
const w = "" + new URL("run_network-0f6a6aec.png", import.meta.url).href;
const b = {
  icon: w,
  enabled: true,
  onDock: false,
  name: "run_network",
  label: "Run Network",
  isEnabled: true,
  render: () => _0x39fab4(h, {})
};
export { b as default };
