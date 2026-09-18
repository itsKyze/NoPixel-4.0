import { J as _0xbfbf39, o as _0x57aae6, f as _0x398574, t as _0x722732, b as _0x771f39 } from "./vendor-c69496a3.js";
import { A as _0x1c3f4e } from "./index-3eb10154.js";
import { N as _0x35e0ef } from "./v-packages-3113361c.js";
import "./commonjsHelpers-725317a4.js";
import "./vite-1e207deb.js";
const u = _0x722732("<iframe src=\"\" class=\"h-full w-full overflow-hidden\">");
const l = () => {
  let _0x1d093d;
  _0xbfbf39(async () => {
    const _0x384a6d = await _0x35e0ef.execute("mdt:request-user");
    if (_0x1d093d) {
      if (!!_0x384a6d && !!_0x384a6d.request) {
        _0x1d093d.setAttribute("src", _0x384a6d.url + "/internal-login?accessToken=" + _0x384a6d.request.accessToken);
        _0x1d093d.contentWindow?.postMessage({
          resource: "mdt",
          type: "mdt:open"
        }, "*");
      }
    }
  });
  _0x57aae6(() => {
    if (_0x1d093d) {
      _0x1d093d.contentWindow?.postMessage({
        resource: "mdt",
        type: "mdt:close"
      }, "*");
    }
  });
  return _0x398574(_0x1c3f4e, {
    get name() {
      return f.name;
    },
    get children() {
      const _0x509ee5 = u();
      const _0x2bad53 = _0x1d093d;
      if (typeof _0x2bad53 == "function") {
        _0x771f39(_0x2bad53, _0x509ee5);
      } else {
        _0x1d093d = _0x509ee5;
      }
      return _0x509ee5;
    }
  });
};
const p = "" + new URL("mdt-icon-49a81ee9.svg", import.meta.url).href;
const f = {
  icon: p,
  enabled: true,
  onDock: false,
  name: "mdt",
  label: "MDT",
  isEnabled: true,
  render: () => _0x398574(l, {})
};
export { f as default };
