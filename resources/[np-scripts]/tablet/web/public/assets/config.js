import { a as _0x36ed2e, J as _0x25728a, e as _0x37f788, j as _0x53f9eb, k as _0x4345af, t as _0x2496f3, m as _0x207a78, f as _0xaff48b, l as _0x500a48, S as _0x47b78e, ag as _0x4009ef, c as _0x3f7291 } from "./vendor.js";
import { b as _0x87ba10, a as _0x3289f6 } from "./vite.js";
import { N as _0x5d730f } from "./v-packages.js";
import "./commonjsHelpers.js";
const j = "" + new URL("miner-icon.png", import.meta.url).href;
const q = "_container_1iugw_1";
const A = {
  container: q
};
const E = "_container_bgpq2_1";
const L = "_content_bgpq2_12";
const F = "_line_bgpq2_25";
const v = {
  container: E,
  content: L,
  line: F
};
const H = _0x2496f3("<div><div><div>///</div><div class=\"flex flex-col items-center justify-center\"><h1> BUTCOIN</h1><p> BUTc / 24 Hours</div><div>///");
const z = () => {
  const [_0x11c7d2, _0x279d26] = _0x36ed2e();
  _0x25728a(async () => {
    const _0x386ac1 = await _0x5d730f.execute("miner:getInfo");
    _0x279d26(_0x386ac1);
  });
  const {
    data: _0x2a855b
  } = B();
  return (() => {
    const _0x434479 = H();
    const _0x575dd4 = _0x434479.firstChild;
    const _0x4cebe9 = _0x575dd4.firstChild;
    const _0x45ffd3 = _0x4cebe9.nextSibling;
    const _0x2887e8 = _0x45ffd3.firstChild;
    const _0x1bb11a = _0x2887e8.firstChild;
    const _0x37a7b0 = _0x2887e8.nextSibling;
    const _0x456481 = _0x37a7b0.firstChild;
    const _0xb98f11 = _0x45ffd3.nextSibling;
    _0x37f788(_0x2887e8, () => _0x2a855b?.pending?.toFixed(5), _0x1bb11a);
    _0x37f788(_0x37a7b0, () => _0x11c7d2()?.cryptoPerDay, _0x456481);
    _0x53f9eb(_0x552cb5 => {
      const _0x1a00aa = v.container;
      const _0x3b71ca = v.content;
      const _0x33c419 = v.line;
      const _0x4cb5c2 = v.line;
      if (_0x1a00aa !== _0x552cb5._v$) {
        _0x4345af(_0x434479, _0x552cb5._v$ = _0x1a00aa);
      }
      if (_0x3b71ca !== _0x552cb5._v$2) {
        _0x4345af(_0x575dd4, _0x552cb5._v$2 = _0x3b71ca);
      }
      if (_0x33c419 !== _0x552cb5._v$3) {
        _0x4345af(_0x4cebe9, _0x552cb5._v$3 = _0x33c419);
      }
      if (_0x4cb5c2 !== _0x552cb5._v$4) {
        _0x4345af(_0xb98f11, _0x552cb5._v$4 = _0x4cb5c2);
      }
      return _0x552cb5;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x434479;
  })();
};
const R = "_container_oug0l_1";
const Y = "_textBox_oug0l_30";
const J = "_stash_oug0l_47";
const $ = {
  container: R,
  textBox: Y,
  stash: J
};
const O = _0x2496f3("<div>Wallet BUTc");
const V = _0x2496f3("<div><h1></h1><p></p><div class=\"mt-auto flex w-full flex-row items-center justify-between\"><div>");
const x = _0x517c04 => (() => {
  const _0x5d4496 = V();
  const _0x1fb6c9 = _0x5d4496.firstChild;
  const _0x3deb44 = _0x1fb6c9.nextSibling;
  const _0x1ee6f7 = _0x3deb44.nextSibling;
  const _0x3d692e = _0x1ee6f7.firstChild;
  _0x37f788(_0x1fb6c9, () => _0x517c04.title);
  _0x37f788(_0x3deb44, () => _0x517c04.description);
  _0x37f788(_0x3d692e, () => _0x517c04.text);
  _0x37f788(_0x1ee6f7, _0xaff48b(_0x47b78e, {
    get when() {
      return _0x517c04.wallet;
    },
    get children() {
      const _0x4ed05b = O();
      _0x4ed05b.$$click = async () => {
        const _0x395c6b = (await _0x5d730f.execute("miner:stash")) ? "Stashed successfully!" : "You have no BUTc to stash!";
        _0x87ba10("miner", _0x395c6b);
        if (_0x517c04.fetchData) {
          _0x517c04.fetchData();
        }
      };
      _0x53f9eb(_0xf938d9 => {
        const _0x478f75 = $.textBox;
        const _0x2b0f71 = {
          [$.stash]: true
        };
        if (_0x478f75 !== _0xf938d9._v$) {
          _0x4345af(_0x4ed05b, _0xf938d9._v$ = _0x478f75);
        }
        _0xf938d9._v$2 = _0x500a48(_0x4ed05b, _0x2b0f71, _0xf938d9._v$2);
        return _0xf938d9;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x4ed05b;
    }
  }), null);
  _0x53f9eb(_0x1794e6 => {
    const _0xb94634 = $.container;
    const _0x470e81 = $.textBox;
    if (_0xb94634 !== _0x1794e6._v$3) {
      _0x4345af(_0x5d4496, _0x1794e6._v$3 = _0xb94634);
    }
    if (_0x470e81 !== _0x1794e6._v$4) {
      _0x4345af(_0x3d692e, _0x1794e6._v$4 = _0x470e81);
    }
    return _0x1794e6;
  }, {
    _v$3: undefined,
    _v$4: undefined
  });
  return _0x5d4496;
})();
_0x207a78(["click"]);
const W = _0x2496f3("<div><div class=\"flex w-full flex-row items-center justify-between\">");
const K = () => {
  const {
    data: _0x35428a,
    setData: _0x4f1dc8
  } = B();
  const _0x4c2ed3 = async () => {
    const _0x2722f5 = await _0x5d730f.execute("miner:getData");
    _0x4f1dc8(_0x2722f5);
  };
  _0x25728a(async () => {
    await _0x4c2ed3();
  });
  return (() => {
    const _0x7f7979 = W();
    const _0x4ad10c = _0x7f7979.firstChild;
    _0x37f788(_0x7f7979, _0xaff48b(_0x3289f6, {
      get name() {
        return ee.name;
      }
    }), _0x4ad10c);
    _0x37f788(_0x7f7979, _0xaff48b(z, {}), _0x4ad10c);
    _0x37f788(_0x4ad10c, _0xaff48b(x, {
      title: "Current GPU",
      description: "Your current GPU is 2.4 Ghz",
      text: "2.4 Ghz"
    }), null);
    _0x37f788(_0x4ad10c, _0xaff48b(x, {
      title: "Estimated time",
      description: "In order to mine 1 BUTC, it will take approximately 24 hours.",
      text: "1 BUTC / 24 Hours"
    }), null);
    _0x37f788(_0x4ad10c, _0xaff48b(x, {
      title: "Total Balance",
      description: "This is your total balance, remember to put mined BUTc into your wallet!",
      get text() {
        return _0x35428a?.balance?.toFixed(5) + " BUTc";
      },
      wallet: true,
      fetchData: _0x4c2ed3
    }), null);
    _0x53f9eb(() => _0x4345af(_0x7f7979, A.container));
    return _0x7f7979;
  })();
};
const [Q, X] = _0x4009ef(() => {
  const [_0x249011, _0x458a2b] = _0x3f7291({});
  return {
    data: _0x249011,
    setData: _0x458a2b
  };
});
const B = () => X();
const Z = () => _0xaff48b(Q, {
  get children() {
    return _0xaff48b(K, {});
  }
});
const ee = {
  icon: j,
  enabled: true,
  onDock: false,
  name: "miner",
  label: "Miner",
  description: "Mines 1 crypto daily; upgrade with GPU rack for faster mining.",
  isEnabled: true,
  isLaptop: true,
  requiresVPN: true,
  render: () => _0xaff48b(Z, {})
};
export { ee as default };
