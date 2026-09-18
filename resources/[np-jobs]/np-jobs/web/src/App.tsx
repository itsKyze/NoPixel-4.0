import './style.css';
import { N as _0x916fe1 } from "./v-packages-6cb79519.js";
(function () {
  const _0x596917 = document.createElement("link").relList;
  if (_0x596917 && _0x596917.supports && _0x596917.supports("modulepreload")) {
    return;
  }
  for (const _0x271385 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x5363d8(_0x271385);
  }
  new MutationObserver(_0x3c7a7c => {
    for (const _0x512a49 of _0x3c7a7c) {
      if (_0x512a49.type === "childList") {
        for (const _0x104cc4 of _0x512a49.addedNodes) {
          if (_0x104cc4.tagName === "LINK" && _0x104cc4.rel === "modulepreload") {
            _0x5363d8(_0x104cc4);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x49a8dd(_0x3f4733) {
    const _0x276154 = {};
    if (_0x3f4733.integrity) {
      _0x276154.integrity = _0x3f4733.integrity;
    }
    if (_0x3f4733.referrerPolicy) {
      _0x276154.referrerPolicy = _0x3f4733.referrerPolicy;
    }
    if (_0x3f4733.crossOrigin === "use-credentials") {
      _0x276154.credentials = "include";
    } else if (_0x3f4733.crossOrigin === "anonymous") {
      _0x276154.credentials = "omit";
    } else {
      _0x276154.credentials = "same-origin";
    }
    return _0x276154;
  }
  function _0x5363d8(_0x3c046b) {
    if (_0x3c046b.ep) {
      return;
    }
    _0x3c046b.ep = true;
    const _0x6f17b = _0x49a8dd(_0x3c046b);
    fetch(_0x3c046b.href, _0x6f17b);
  }
})();
const P2 = (_0x52a2e2, _0x249bea) => _0x52a2e2 === _0x249bea;
const q = Symbol("solid-proxy");
const j1 = Symbol("solid-track");
const h1 = {
  equals: P2
};
let a2 = g2;
const W = 1;
const b1 = 2;
const c2 = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var D = null;
let P1 = null;
let L = null;
let k = null;
let X = null;
let w1 = 0;
const [T2, P9] = R(false);
function v1(_0x4537c8, _0x9666e5) {
  const _0x1a8664 = L;
  const _0x489406 = D;
  const _0x7c8b6e = _0x4537c8.length === 0;
  const _0x367fea = _0x7c8b6e ? c2 : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x9666e5 === undefined ? _0x489406 : _0x9666e5
  };
  const _0x463b1e = _0x7c8b6e ? _0x4537c8 : () => _0x4537c8(() => $(() => x1(_0x367fea)));
  D = _0x367fea;
  L = null;
  try {
    return J(_0x463b1e, true);
  } finally {
    L = _0x1a8664;
    D = _0x489406;
  }
}
function R(_0x142f14, _0x4bf893) {
  _0x4bf893 = _0x4bf893 ? Object.assign({}, h1, _0x4bf893) : h1;
  const _0x249cd7 = {
    value: _0x142f14,
    observers: null,
    observerSlots: null,
    comparator: _0x4bf893.equals || undefined
  };
  const _0x1e29de = _0x57a1e7 => {
    if (typeof _0x57a1e7 == "function") {
      _0x57a1e7 = _0x57a1e7(_0x249cd7.value);
    }
    return d2(_0x249cd7, _0x57a1e7);
  };
  return [f2.bind(_0x249cd7), _0x1e29de];
}
function D2(_0x119ced, _0x1c58cb, _0x1fdf8a) {
  const _0x533a46 = $1(_0x119ced, _0x1c58cb, true, W);
  s1(_0x533a46);
}
function T(_0xdb559e, _0x107059, _0x5d1396) {
  const _0x1f7e81 = $1(_0xdb559e, _0x107059, false, W);
  s1(_0x1f7e81);
}
function V(_0x207fdd, _0x11b500, _0x61f5f7) {
  a2 = B2;
  const _0x4dc567 = $1(_0x207fdd, _0x11b500, false, W);
  if (!_0x61f5f7 || !_0x61f5f7.render) {
    _0x4dc567.user = true;
  }
  if (X) {
    X.push(_0x4dc567);
  } else {
    s1(_0x4dc567);
  }
}
function B(_0x385ad6, _0x23e724, _0x176980) {
  _0x176980 = _0x176980 ? Object.assign({}, h1, _0x176980) : h1;
  const _0x30fba8 = $1(_0x385ad6, _0x23e724, true, 0);
  _0x30fba8.observers = null;
  _0x30fba8.observerSlots = null;
  _0x30fba8.comparator = _0x176980.equals || undefined;
  s1(_0x30fba8);
  return f2.bind(_0x30fba8);
}
function K(_0x198298) {
  return J(_0x198298, false);
}
function $(_0x565e8e) {
  if (L === null) {
    return _0x565e8e();
  }
  const _0x31ea3b = L;
  L = null;
  try {
    return _0x565e8e();
  } finally {
    L = _0x31ea3b;
  }
}
function r1(_0xdd3586) {
  V(() => $(_0xdd3586));
}
function t1(_0x407ed0) {
  if (D !== null) {
    if (D.cleanups === null) {
      D.cleanups = [_0x407ed0];
    } else {
      D.cleanups.push(_0x407ed0);
    }
  }
  return _0x407ed0;
}
function C2() {
  return L;
}
function I2(_0x158eb2) {
  const _0x3ac3a9 = L;
  const _0x35ec7d = D;
  return Promise.resolve().then(() => {
    L = _0x3ac3a9;
    D = _0x35ec7d;
    let _0x2a2ff0;
    J(_0x158eb2, false);
    L = D = null;
    if (_0x2a2ff0) {
      return _0x2a2ff0.done;
    } else {
      return undefined;
    }
  });
}
function N2() {
  return [T2, I2];
}
function k2(_0x9a0391, _0x5d681e) {
  const _0x5ec944 = Symbol("context");
  return {
    id: _0x5ec944,
    Provider: U2(_0x5ec944),
    defaultValue: _0x9a0391
  };
}
function j2(_0x5d1d2d) {
  let _0x5250cc;
  if ((_0x5250cc = b2(D, _0x5d1d2d.id)) !== undefined) {
    return _0x5250cc;
  } else {
    return _0x5d1d2d.defaultValue;
  }
}
function u2(_0x2e6070) {
  const _0x17aa37 = B(_0x2e6070);
  const _0x2de028 = B(() => Z1(_0x17aa37()));
  _0x2de028.toArray = () => {
    const _0x45c24b = _0x2de028();
    if (Array.isArray(_0x45c24b)) {
      return _0x45c24b;
    } else if (_0x45c24b != null) {
      return [_0x45c24b];
    } else {
      return [];
    }
  };
  return _0x2de028;
}
function f2() {
  if (this.sources && this.state) {
    if (this.state === W) {
      s1(this);
    } else {
      const _0x2a3553 = k;
      k = null;
      J(() => p1(this), false);
      k = _0x2a3553;
    }
  }
  if (L) {
    const _0x22143e = this.observers ? this.observers.length : 0;
    if (L.sources) {
      L.sources.push(this);
      L.sourceSlots.push(_0x22143e);
    } else {
      L.sources = [this];
      L.sourceSlots = [_0x22143e];
    }
    if (this.observers) {
      this.observers.push(L);
      this.observerSlots.push(L.sources.length - 1);
    } else {
      this.observers = [L];
      this.observerSlots = [L.sources.length - 1];
    }
  }
  return this.value;
}
function d2(_0x326b60, _0x467f88, _0x1c73f2) {
  let _0x285da2 = _0x326b60.value;
  if (!_0x326b60.comparator || !_0x326b60.comparator(_0x285da2, _0x467f88)) {
    _0x326b60.value = _0x467f88;
    if (_0x326b60.observers && _0x326b60.observers.length) {
      J(() => {
        for (let _0x211f36 = 0; _0x211f36 < _0x326b60.observers.length; _0x211f36 += 1) {
          const _0x41875c = _0x326b60.observers[_0x211f36];
          const _0x361b5c = P1 && P1.running;
          if (_0x361b5c) {
            P1.disposed.has(_0x41875c);
          }
          if (_0x361b5c ? !_0x41875c.tState : !_0x41875c.state) {
            if (_0x41875c.pure) {
              k.push(_0x41875c);
            } else {
              X.push(_0x41875c);
            }
            if (_0x41875c.observers) {
              v2(_0x41875c);
            }
          }
          if (!_0x361b5c) {
            _0x41875c.state = W;
          }
        }
        if (k.length > 1000000) {
          k = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x467f88;
}
function s1(_0x1de506) {
  if (!_0x1de506.fn) {
    return;
  }
  x1(_0x1de506);
  const _0x1b1a38 = D;
  const _0x1af09d = L;
  const _0x593e51 = w1;
  L = D = _0x1de506;
  Z2(_0x1de506, _0x1de506.value, _0x593e51);
  L = _0x1af09d;
  D = _0x1b1a38;
}
function Z2(_0x5618a9, _0x229a8, _0x17be40) {
  let _0x216ca4;
  try {
    _0x216ca4 = _0x5618a9.fn(_0x229a8);
  } catch (_0x336b85) {
    if (_0x5618a9.pure) {
      _0x5618a9.state = W;
      if (_0x5618a9.owned) {
        _0x5618a9.owned.forEach(x1);
      }
      _0x5618a9.owned = null;
    }
    _0x5618a9.updatedAt = _0x17be40 + 1;
    return h2(_0x336b85);
  }
  if (!_0x5618a9.updatedAt || _0x5618a9.updatedAt <= _0x17be40) {
    if (_0x5618a9.updatedAt != null && "observers" in _0x5618a9) {
      d2(_0x5618a9, _0x216ca4);
    } else {
      _0x5618a9.value = _0x216ca4;
    }
    _0x5618a9.updatedAt = _0x17be40;
  }
}
function $1(_0x55a6be, _0x1bfd61, _0x33f654, _0x2ff1eb = W, _0x1df7b4) {
  const _0x15714d = {
    fn: _0x55a6be,
    state: _0x2ff1eb,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x1bfd61,
    owner: D,
    context: null,
    pure: _0x33f654
  };
  if (D !== null) {
    if (D !== c2) {
      if (D.owned) {
        D.owned.push(_0x15714d);
      } else {
        D.owned = [_0x15714d];
      }
    }
  }
  return _0x15714d;
}
function y1(_0x8b52d5) {
  if (_0x8b52d5.state === 0) {
    return;
  }
  if (_0x8b52d5.state === b1) {
    return p1(_0x8b52d5);
  }
  if (_0x8b52d5.suspense && $(_0x8b52d5.suspense.inFallback)) {
    return _0x8b52d5.suspense.effects.push(_0x8b52d5);
  }
  const _0x472c31 = [_0x8b52d5];
  while ((_0x8b52d5 = _0x8b52d5.owner) && (!_0x8b52d5.updatedAt || _0x8b52d5.updatedAt < w1)) {
    if (_0x8b52d5.state) {
      _0x472c31.push(_0x8b52d5);
    }
  }
  for (let _0x410572 = _0x472c31.length - 1; _0x410572 >= 0; _0x410572--) {
    _0x8b52d5 = _0x472c31[_0x410572];
    if (_0x8b52d5.state === W) {
      s1(_0x8b52d5);
    } else if (_0x8b52d5.state === b1) {
      const _0x4cbd99 = k;
      k = null;
      J(() => p1(_0x8b52d5, _0x472c31[0]), false);
      k = _0x4cbd99;
    }
  }
}
function J(_0x1d29f9, _0x11d539) {
  if (k) {
    return _0x1d29f9();
  }
  let _0x431249 = false;
  if (!_0x11d539) {
    k = [];
  }
  if (X) {
    _0x431249 = true;
  } else {
    X = [];
  }
  w1++;
  try {
    const _0x2ebb82 = _0x1d29f9();
    R2(_0x431249);
    return _0x2ebb82;
  } catch (_0x2a0720) {
    if (!_0x431249) {
      X = null;
    }
    k = null;
    h2(_0x2a0720);
  }
}
function R2(_0x19fb2e) {
  if (k) {
    g2(k);
    k = null;
  }
  if (_0x19fb2e) {
    return;
  }
  const _0x5e39cb = X;
  X = null;
  if (_0x5e39cb.length) {
    J(() => a2(_0x5e39cb), false);
  }
}
function g2(_0x193f60) {
  for (let _0x1419e1 = 0; _0x1419e1 < _0x193f60.length; _0x1419e1++) {
    y1(_0x193f60[_0x1419e1]);
  }
}
function B2(_0x553e75) {
  let _0x1319d9;
  let _0x36807f = 0;
  for (_0x1319d9 = 0; _0x1319d9 < _0x553e75.length; _0x1319d9++) {
    const _0x75d979 = _0x553e75[_0x1319d9];
    if (_0x75d979.user) {
      _0x553e75[_0x36807f++] = _0x75d979;
    } else {
      y1(_0x75d979);
    }
  }
  for (_0x1319d9 = 0; _0x1319d9 < _0x36807f; _0x1319d9++) {
    y1(_0x553e75[_0x1319d9]);
  }
}
function p1(_0x1b590c, _0x5f02f8) {
  _0x1b590c.state = 0;
  for (let _0x4d66eb = 0; _0x4d66eb < _0x1b590c.sources.length; _0x4d66eb += 1) {
    const _0x231e83 = _0x1b590c.sources[_0x4d66eb];
    if (_0x231e83.sources) {
      const _0x1762e0 = _0x231e83.state;
      if (_0x1762e0 === W) {
        if (_0x231e83 !== _0x5f02f8 && (!_0x231e83.updatedAt || _0x231e83.updatedAt < w1)) {
          y1(_0x231e83);
        }
      } else if (_0x1762e0 === b1) {
        p1(_0x231e83, _0x5f02f8);
      }
    }
  }
}
function v2(_0x3a4b4f) {
  for (let _0xb4b781 = 0; _0xb4b781 < _0x3a4b4f.observers.length; _0xb4b781 += 1) {
    const _0x57b959 = _0x3a4b4f.observers[_0xb4b781];
    if (!_0x57b959.state) {
      _0x57b959.state = b1;
      if (_0x57b959.pure) {
        k.push(_0x57b959);
      } else {
        X.push(_0x57b959);
      }
      if (_0x57b959.observers) {
        v2(_0x57b959);
      }
    }
  }
}
function x1(_0x2ca1fd) {
  let _0x47eb40;
  if (_0x2ca1fd.sources) {
    while (_0x2ca1fd.sources.length) {
      const _0xd4a13f = _0x2ca1fd.sources.pop();
      const _0x2dc0d8 = _0x2ca1fd.sourceSlots.pop();
      const _0x19fefa = _0xd4a13f.observers;
      if (_0x19fefa && _0x19fefa.length) {
        const _0xaa0dcb = _0x19fefa.pop();
        const _0x500826 = _0xd4a13f.observerSlots.pop();
        if (_0x2dc0d8 < _0x19fefa.length) {
          _0xaa0dcb.sourceSlots[_0x500826] = _0x2dc0d8;
          _0x19fefa[_0x2dc0d8] = _0xaa0dcb;
          _0xd4a13f.observerSlots[_0x2dc0d8] = _0x500826;
        }
      }
    }
  }
  if (_0x2ca1fd.owned) {
    for (_0x47eb40 = _0x2ca1fd.owned.length - 1; _0x47eb40 >= 0; _0x47eb40--) {
      x1(_0x2ca1fd.owned[_0x47eb40]);
    }
    _0x2ca1fd.owned = null;
  }
  if (_0x2ca1fd.cleanups) {
    for (_0x47eb40 = _0x2ca1fd.cleanups.length - 1; _0x47eb40 >= 0; _0x47eb40--) {
      _0x2ca1fd.cleanups[_0x47eb40]();
    }
    _0x2ca1fd.cleanups = null;
  }
  _0x2ca1fd.state = 0;
  _0x2ca1fd.context = null;
}
function h2(_0xe0a048) {
  throw _0xe0a048;
}
function b2(_0x25704c, _0x142fcf) {
  if (_0x25704c) {
    if (_0x25704c.context && _0x25704c.context[_0x142fcf] !== undefined) {
      return _0x25704c.context[_0x142fcf];
    } else {
      return b2(_0x25704c.owner, _0x142fcf);
    }
  } else {
    return undefined;
  }
}
function Z1(_0x1470da) {
  if (typeof _0x1470da == "function" && !_0x1470da.length) {
    return Z1(_0x1470da());
  }
  if (Array.isArray(_0x1470da)) {
    const _0x2e301c = [];
    for (let _0x220de0 = 0; _0x220de0 < _0x1470da.length; _0x220de0++) {
      const _0x1bd273 = Z1(_0x1470da[_0x220de0]);
      if (Array.isArray(_0x1bd273)) {
        _0x2e301c.push.apply(_0x2e301c, _0x1bd273);
      } else {
        _0x2e301c.push(_0x1bd273);
      }
    }
    return _0x2e301c;
  }
  return _0x1470da;
}
function U2(_0x19bd7a, _0x413ef6) {
  return function (_0x447308) {
    let _0x22bcfb;
    T(() => _0x22bcfb = $(() => {
      D.context = {
        [_0x19bd7a]: _0x447308.value
      };
      return u2(() => _0x447308.children);
    }), undefined);
    return _0x22bcfb;
  };
}
const F2 = Symbol("fallback");
function Q1(_0x21ece2) {
  for (let _0x4c58dd = 0; _0x4c58dd < _0x21ece2.length; _0x4c58dd++) {
    _0x21ece2[_0x4c58dd]();
  }
}
function K2(_0x521ff7, _0xeb139, _0x4cd1d6 = {}) {
  let _0x347ef5 = [];
  let _0x577b6d = [];
  let _0x5a96ab = [];
  let _0x1cdf18 = 0;
  let _0x3c7b72 = _0xeb139.length > 1 ? [] : null;
  t1(() => Q1(_0x5a96ab));
  return () => {
    let _0x409994 = _0x521ff7() || [];
    let _0x61bd58;
    let _0x4fdacf;
    _0x409994[j1];
    return $(() => {
      let _0x5d9f84 = _0x409994.length;
      let _0x1d97b2;
      let _0x39525a;
      let _0x48779a;
      let _0xf83f36;
      let _0x4b2b22;
      let _0x325f83;
      let _0x4d1238;
      let _0x6b0c9f;
      let _0x20e0d1;
      if (_0x5d9f84 === 0) {
        if (_0x1cdf18 !== 0) {
          Q1(_0x5a96ab);
          _0x5a96ab = [];
          _0x347ef5 = [];
          _0x577b6d = [];
          _0x1cdf18 = 0;
          _0x3c7b72 &&= [];
        }
        if (_0x4cd1d6.fallback) {
          _0x347ef5 = [F2];
          _0x577b6d[0] = v1(_0x290272 => {
            _0x5a96ab[0] = _0x290272;
            return _0x4cd1d6.fallback();
          });
          _0x1cdf18 = 1;
        }
      } else if (_0x1cdf18 === 0) {
        _0x577b6d = new Array(_0x5d9f84);
        _0x4fdacf = 0;
        for (; _0x4fdacf < _0x5d9f84; _0x4fdacf++) {
          _0x347ef5[_0x4fdacf] = _0x409994[_0x4fdacf];
          _0x577b6d[_0x4fdacf] = v1(_0x371970);
        }
        _0x1cdf18 = _0x5d9f84;
      } else {
        _0x48779a = new Array(_0x5d9f84);
        _0xf83f36 = new Array(_0x5d9f84);
        if (_0x3c7b72) {
          _0x4b2b22 = new Array(_0x5d9f84);
        }
        _0x325f83 = 0;
        _0x4d1238 = Math.min(_0x1cdf18, _0x5d9f84);
        for (; _0x325f83 < _0x4d1238 && _0x347ef5[_0x325f83] === _0x409994[_0x325f83]; _0x325f83++);
        _0x4d1238 = _0x1cdf18 - 1;
        _0x6b0c9f = _0x5d9f84 - 1;
        for (; _0x4d1238 >= _0x325f83 && _0x6b0c9f >= _0x325f83 && _0x347ef5[_0x4d1238] === _0x409994[_0x6b0c9f]; _0x4d1238--, _0x6b0c9f--) {
          _0x48779a[_0x6b0c9f] = _0x577b6d[_0x4d1238];
          _0xf83f36[_0x6b0c9f] = _0x5a96ab[_0x4d1238];
          if (_0x3c7b72) {
            _0x4b2b22[_0x6b0c9f] = _0x3c7b72[_0x4d1238];
          }
        }
        _0x1d97b2 = new Map();
        _0x39525a = new Array(_0x6b0c9f + 1);
        _0x4fdacf = _0x6b0c9f;
        for (; _0x4fdacf >= _0x325f83; _0x4fdacf--) {
          _0x20e0d1 = _0x409994[_0x4fdacf];
          _0x61bd58 = _0x1d97b2.get(_0x20e0d1);
          _0x39525a[_0x4fdacf] = _0x61bd58 === undefined ? -1 : _0x61bd58;
          _0x1d97b2.set(_0x20e0d1, _0x4fdacf);
        }
        for (_0x61bd58 = _0x325f83; _0x61bd58 <= _0x4d1238; _0x61bd58++) {
          _0x20e0d1 = _0x347ef5[_0x61bd58];
          _0x4fdacf = _0x1d97b2.get(_0x20e0d1);
          if (_0x4fdacf !== undefined && _0x4fdacf !== -1) {
            _0x48779a[_0x4fdacf] = _0x577b6d[_0x61bd58];
            _0xf83f36[_0x4fdacf] = _0x5a96ab[_0x61bd58];
            if (_0x3c7b72) {
              _0x4b2b22[_0x4fdacf] = _0x3c7b72[_0x61bd58];
            }
            _0x4fdacf = _0x39525a[_0x4fdacf];
            _0x1d97b2.set(_0x20e0d1, _0x4fdacf);
          } else {
            _0x5a96ab[_0x61bd58]();
          }
        }
        for (_0x4fdacf = _0x325f83; _0x4fdacf < _0x5d9f84; _0x4fdacf++) {
          if (_0x4fdacf in _0x48779a) {
            _0x577b6d[_0x4fdacf] = _0x48779a[_0x4fdacf];
            _0x5a96ab[_0x4fdacf] = _0xf83f36[_0x4fdacf];
            if (_0x3c7b72) {
              _0x3c7b72[_0x4fdacf] = _0x4b2b22[_0x4fdacf];
              _0x3c7b72[_0x4fdacf](_0x4fdacf);
            }
          } else {
            _0x577b6d[_0x4fdacf] = v1(_0x371970);
          }
        }
        _0x577b6d = _0x577b6d.slice(0, _0x1cdf18 = _0x5d9f84);
        _0x347ef5 = _0x409994.slice(0);
      }
      return _0x577b6d;
    });
    function _0x371970(_0x5b5681) {
      _0x5a96ab[_0x4fdacf] = _0x5b5681;
      if (_0x3c7b72) {
        const [_0x309639, _0x1fa7c8] = R(_0x4fdacf);
        _0x3c7b72[_0x4fdacf] = _0x1fa7c8;
        return _0xeb139(_0x409994[_0x4fdacf], _0x309639);
      }
      return _0xeb139(_0x409994[_0x4fdacf]);
    }
  };
}
function A(_0x39f907, _0x437416) {
  return $(() => _0x39f907(_0x437416 || {}));
}
function d1() {
  return true;
}
const H2 = {
  get(_0x372439, _0x3773db, _0x5968a3) {
    if (_0x3773db === q) {
      return _0x5968a3;
    } else {
      return _0x372439.get(_0x3773db);
    }
  },
  has(_0x230799, _0xea095d) {
    if (_0xea095d === q) {
      return true;
    } else {
      return _0x230799.has(_0xea095d);
    }
  },
  set: d1,
  deleteProperty: d1,
  getOwnPropertyDescriptor(_0x3a0d06, _0x2fa228) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _0x3a0d06.get(_0x2fa228);
      },
      set: d1,
      deleteProperty: d1
    };
  },
  ownKeys(_0x458b6c) {
    return _0x458b6c.keys();
  }
};
function T1(_0x5b1a0c) {
  if (_0x5b1a0c = typeof _0x5b1a0c == "function" ? _0x5b1a0c() : _0x5b1a0c) {
    return _0x5b1a0c;
  } else {
    return {};
  }
}
function q2() {
  for (let _0x3ae358 = 0, _0x3865f9 = this.length; _0x3ae358 < _0x3865f9; ++_0x3ae358) {
    const _0x37ae8d = this[_0x3ae358]();
    if (_0x37ae8d !== undefined) {
      return _0x37ae8d;
    }
  }
}
function y2(..._0x300a6f) {
  let _0x46ac8f = false;
  for (let _0x2561e4 = 0; _0x2561e4 < _0x300a6f.length; _0x2561e4++) {
    const _0x49e468 = _0x300a6f[_0x2561e4];
    _0x46ac8f = _0x46ac8f || !!_0x49e468 && q in _0x49e468;
    _0x300a6f[_0x2561e4] = typeof _0x49e468 == "function" ? (_0x46ac8f = true, B(_0x49e468)) : _0x49e468;
  }
  if (_0x46ac8f) {
    return new Proxy({
      get(_0x45e1ea) {
        for (let _0x44cb54 = _0x300a6f.length - 1; _0x44cb54 >= 0; _0x44cb54--) {
          const _0x46f423 = T1(_0x300a6f[_0x44cb54])[_0x45e1ea];
          if (_0x46f423 !== undefined) {
            return _0x46f423;
          }
        }
      },
      has(_0x2c0c25) {
        for (let _0x3166d5 = _0x300a6f.length - 1; _0x3166d5 >= 0; _0x3166d5--) {
          if (_0x2c0c25 in T1(_0x300a6f[_0x3166d5])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const _0x161971 = [];
        for (let _0x1d865b = 0; _0x1d865b < _0x300a6f.length; _0x1d865b++) {
          _0x161971.push(...Object.keys(T1(_0x300a6f[_0x1d865b])));
        }
        return [...new Set(_0x161971)];
      }
    }, H2);
  }
  const _0x4af0b3 = {};
  const _0x14aed6 = {};
  let _0x10d0d8 = false;
  for (let _0x15c2b4 = _0x300a6f.length - 1; _0x15c2b4 >= 0; _0x15c2b4--) {
    const _0x326c59 = _0x300a6f[_0x15c2b4];
    if (!_0x326c59) {
      continue;
    }
    const _0x2461da = Object.getOwnPropertyNames(_0x326c59);
    _0x10d0d8 = _0x10d0d8 || _0x15c2b4 !== 0 && !!_0x2461da.length;
    for (let _0x1a83ed = 0, _0x46c9cb = _0x2461da.length; _0x1a83ed < _0x46c9cb; _0x1a83ed++) {
      const _0x322da5 = _0x2461da[_0x1a83ed];
      if (_0x322da5 !== "__proto__" && _0x322da5 !== "constructor") {
        if (_0x322da5 in _0x4af0b3) {
          const _0x13098a = _0x14aed6[_0x322da5];
          const _0x58bf6e = Object.getOwnPropertyDescriptor(_0x326c59, _0x322da5);
          if (_0x13098a) {
            if (_0x58bf6e.get) {
              _0x13098a.push(_0x58bf6e.get.bind(_0x326c59));
            } else if (_0x58bf6e.value !== undefined) {
              _0x13098a.push(() => _0x58bf6e.value);
            }
          } else if (_0x4af0b3[_0x322da5] === undefined) {
            _0x4af0b3[_0x322da5] = _0x58bf6e.value;
          }
        } else {
          const _0x493c0d = Object.getOwnPropertyDescriptor(_0x326c59, _0x322da5);
          if (_0x493c0d.get) {
            Object.defineProperty(_0x4af0b3, _0x322da5, {
              enumerable: true,
              configurable: true,
              get: q2.bind(_0x14aed6[_0x322da5] = [_0x493c0d.get.bind(_0x326c59)])
            });
          } else {
            _0x4af0b3[_0x322da5] = _0x493c0d.value;
          }
        }
      }
    }
  }
  return _0x4af0b3;
}
const p2 = _0x3e19e0 => "Stale read from <" + _0x3e19e0 + ">.";
function H1(_0xef2667) {
  const _0x41aad3 = "fallback" in _0xef2667 && {
    fallback: () => _0xef2667.fallback
  };
  return B(K2(() => _0xef2667.each, _0xef2667.children, _0x41aad3 || undefined));
}
function l1(_0x48eb67) {
  const _0x4de685 = _0x48eb67.keyed;
  const _0x27ca22 = B(() => _0x48eb67.when, undefined, {
    equals: (_0x44c9b2, _0xf7064d) => _0x4de685 ? _0x44c9b2 === _0xf7064d : !_0x44c9b2 == !_0xf7064d
  });
  return B(() => {
    const _0x1d1e9d = _0x27ca22();
    if (_0x1d1e9d) {
      const _0x575e87 = _0x48eb67.children;
      if (typeof _0x575e87 == "function" && _0x575e87.length > 0) {
        return $(() => _0x575e87(_0x4de685 ? _0x1d1e9d : () => {
          if (!$(_0x27ca22)) {
            throw p2("Show");
          }
          return _0x48eb67.when;
        }));
      } else {
        return _0x575e87;
      }
    }
    return _0x48eb67.fallback;
  }, undefined, undefined);
}
function V2(_0x5a3d4d) {
  let _0x37cb38 = false;
  const _0x1e01ce = (_0x43ba81, _0x58150e) => _0x43ba81[0] === _0x58150e[0] && (_0x37cb38 ? _0x43ba81[1] === _0x58150e[1] : !_0x43ba81[1] == !_0x58150e[1]) && _0x43ba81[2] === _0x58150e[2];
  const _0x52ee58 = u2(() => _0x5a3d4d.children);
  const _0x582a50 = B(() => {
    let _0x5a11d4 = _0x52ee58();
    if (!Array.isArray(_0x5a11d4)) {
      _0x5a11d4 = [_0x5a11d4];
    }
    for (let _0x1b84be = 0; _0x1b84be < _0x5a11d4.length; _0x1b84be++) {
      const _0x306621 = _0x5a11d4[_0x1b84be].when;
      if (_0x306621) {
        _0x37cb38 = !!_0x5a11d4[_0x1b84be].keyed;
        return [_0x1b84be, _0x306621, _0x5a11d4[_0x1b84be]];
      }
    }
    return [-1];
  }, undefined, {
    equals: _0x1e01ce
  });
  return B(() => {
    const [_0x333743, _0x1b6464, _0x337769] = _0x582a50();
    if (_0x333743 < 0) {
      return _0x5a3d4d.fallback;
    }
    const _0x33c38a = _0x337769.children;
    if (typeof _0x33c38a == "function" && _0x33c38a.length > 0) {
      return $(() => _0x33c38a(_0x37cb38 ? _0x1b6464 : () => {
        if ($(_0x582a50)[0] !== _0x333743) {
          throw p2("Match");
        }
        return _0x337769.when;
      }));
    } else {
      return _0x33c38a;
    }
  }, undefined, undefined);
}
function J1(_0x139828) {
  return _0x139828;
}
const X2 = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const W2 = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...X2]);
const G2 = new Set(["innerHTML", "textContent", "innerText", "children"]);
const Y2 = Object.assign(Object.create(null), {
  className: "class",
  htmlFor: "for"
});
const Q2 = Object.assign(Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function J2(_0x306e61, _0x1b897b) {
  const _0x5a671f = Q2[_0x306e61];
  if (typeof _0x5a671f == "object") {
    if (_0x5a671f[_0x1b897b]) {
      return _0x5a671f.$;
    } else {
      return undefined;
    }
  } else {
    return _0x5a671f;
  }
}
const z2 = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const e5 = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function t5(_0x394360, _0x1c67ff, _0x4a3bd2) {
  let _0x3f5543 = _0x4a3bd2.length;
  let _0x37d7a1 = _0x1c67ff.length;
  let _0x5c41bb = _0x3f5543;
  let _0x9b8034 = 0;
  let _0xc2c0b7 = 0;
  let _0x30bfbd = _0x1c67ff[_0x37d7a1 - 1].nextSibling;
  let _0xc3776e = null;
  while (_0x9b8034 < _0x37d7a1 || _0xc2c0b7 < _0x5c41bb) {
    if (_0x1c67ff[_0x9b8034] === _0x4a3bd2[_0xc2c0b7]) {
      _0x9b8034++;
      _0xc2c0b7++;
      continue;
    }
    while (_0x1c67ff[_0x37d7a1 - 1] === _0x4a3bd2[_0x5c41bb - 1]) {
      _0x37d7a1--;
      _0x5c41bb--;
    }
    if (_0x37d7a1 === _0x9b8034) {
      const _0x9511d6 = _0x5c41bb < _0x3f5543 ? _0xc2c0b7 ? _0x4a3bd2[_0xc2c0b7 - 1].nextSibling : _0x4a3bd2[_0x5c41bb - _0xc2c0b7] : _0x30bfbd;
      while (_0xc2c0b7 < _0x5c41bb) {
        _0x394360.insertBefore(_0x4a3bd2[_0xc2c0b7++], _0x9511d6);
      }
    } else if (_0x5c41bb === _0xc2c0b7) {
      while (_0x9b8034 < _0x37d7a1) {
        if (!_0xc3776e || !_0xc3776e.has(_0x1c67ff[_0x9b8034])) {
          _0x1c67ff[_0x9b8034].remove();
        }
        _0x9b8034++;
      }
    } else if (_0x1c67ff[_0x9b8034] === _0x4a3bd2[_0x5c41bb - 1] && _0x4a3bd2[_0xc2c0b7] === _0x1c67ff[_0x37d7a1 - 1]) {
      const _0x366eb5 = _0x1c67ff[--_0x37d7a1].nextSibling;
      _0x394360.insertBefore(_0x4a3bd2[_0xc2c0b7++], _0x1c67ff[_0x9b8034++].nextSibling);
      _0x394360.insertBefore(_0x4a3bd2[--_0x5c41bb], _0x366eb5);
      _0x1c67ff[_0x37d7a1] = _0x4a3bd2[_0x5c41bb];
    } else {
      if (!_0xc3776e) {
        _0xc3776e = new Map();
        let _0xf1d3f8 = _0xc2c0b7;
        while (_0xf1d3f8 < _0x5c41bb) {
          _0xc3776e.set(_0x4a3bd2[_0xf1d3f8], _0xf1d3f8++);
        }
      }
      const _0x1e52d8 = _0xc3776e.get(_0x1c67ff[_0x9b8034]);
      if (_0x1e52d8 != null) {
        if (_0xc2c0b7 < _0x1e52d8 && _0x1e52d8 < _0x5c41bb) {
          let _0x5000ea = _0x9b8034;
          let _0x1cb4a3 = 1;
          let _0x1c106b;
          while (++_0x5000ea < _0x37d7a1 && _0x5000ea < _0x5c41bb && (_0x1c106b = _0xc3776e.get(_0x1c67ff[_0x5000ea])) != null && _0x1c106b === _0x1e52d8 + _0x1cb4a3) {
            _0x1cb4a3++;
          }
          if (_0x1cb4a3 > _0x1e52d8 - _0xc2c0b7) {
            const _0x54a790 = _0x1c67ff[_0x9b8034];
            while (_0xc2c0b7 < _0x1e52d8) {
              _0x394360.insertBefore(_0x4a3bd2[_0xc2c0b7++], _0x54a790);
            }
          } else {
            _0x394360.replaceChild(_0x4a3bd2[_0xc2c0b7++], _0x1c67ff[_0x9b8034++]);
          }
        } else {
          _0x9b8034++;
        }
      } else {
        _0x1c67ff[_0x9b8034++].remove();
      }
    }
  }
}
const z1 = "_$DX_DELEGATE";
function n5(_0x26ef99, _0x55da09, _0xaf96f0, _0x136f3f = {}) {
  let _0x5a2061;
  v1(_0x863360 => {
    _0x5a2061 = _0x863360;
    if (_0x55da09 === document) {
      _0x26ef99();
    } else {
      E(_0x55da09, _0x26ef99(), _0x55da09.firstChild ? null : undefined, _0xaf96f0);
    }
  }, _0x136f3f.owner);
  return () => {
    _0x5a2061();
    _0x55da09.textContent = "";
  };
}
function Z(_0x3c1658, _0x22123d, _0x384ed8) {
  let _0x54e581;
  const _0x49f36e = () => {
    const _0x31e3a0 = document.createElement("template");
    _0x31e3a0.innerHTML = _0x3c1658;
    if (_0x384ed8) {
      return _0x31e3a0.content.firstChild.firstChild;
    } else {
      return _0x31e3a0.content.firstChild;
    }
  };
  const _0x15b7f5 = _0x22123d ? () => $(() => document.importNode(_0x54e581 ||= _0x49f36e(), true)) : () => (_0x54e581 ||= _0x49f36e()).cloneNode(true);
  _0x15b7f5.cloneNode = _0x15b7f5;
  return _0x15b7f5;
}
function m2(_0x5ced98, _0x15f810 = window.document) {
  const _0x4282d2 = _0x15f810[z1] ||= new Set();
  for (let _0x30c72b = 0, _0x71de47 = _0x5ced98.length; _0x30c72b < _0x71de47; _0x30c72b++) {
    const _0x7e5904 = _0x5ced98[_0x30c72b];
    if (!_0x4282d2.has(_0x7e5904)) {
      _0x4282d2.add(_0x7e5904);
      _0x15f810.addEventListener(_0x7e5904, a5);
    }
  }
}
function c1(_0x3de30a, _0x3b1f7a, _0x2bc861) {
  if (_0x2bc861 == null) {
    _0x3de30a.removeAttribute(_0x3b1f7a);
  } else {
    _0x3de30a.setAttribute(_0x3b1f7a, _0x2bc861);
  }
}
function r5(_0x425186, _0x299c16, _0x123578, _0x4c1710) {
  if (_0x4c1710 == null) {
    _0x425186.removeAttributeNS(_0x299c16, _0x123578);
  } else {
    _0x425186.setAttributeNS(_0x299c16, _0x123578, _0x4c1710);
  }
}
function w(_0x1dd1d6, _0x492d08) {
  if (_0x492d08 == null) {
    _0x1dd1d6.removeAttribute("class");
  } else {
    _0x1dd1d6.className = _0x492d08;
  }
}
function s5(_0x44fee1, _0x16cbea, _0x56912e, _0x39cd0a) {
  if (_0x39cd0a) {
    if (Array.isArray(_0x56912e)) {
      _0x44fee1["$$" + _0x16cbea] = _0x56912e[0];
      _0x44fee1["$$" + _0x16cbea + "Data"] = _0x56912e[1];
    } else {
      _0x44fee1["$$" + _0x16cbea] = _0x56912e;
    }
  } else if (Array.isArray(_0x56912e)) {
    const _0x34c123 = _0x56912e[0];
    _0x44fee1.addEventListener(_0x16cbea, _0x56912e[0] = _0x50a595 => _0x34c123.call(_0x44fee1, _0x56912e[1], _0x50a595));
  } else {
    _0x44fee1.addEventListener(_0x16cbea, _0x56912e);
  }
}
function q1(_0x3ff71c, _0x321784, _0x17c429 = {}) {
  const _0x522bff = Object.keys(_0x321784 || {});
  const _0x326f28 = Object.keys(_0x17c429);
  let _0x4e0bae;
  let _0x4b45e4;
  _0x4e0bae = 0;
  _0x4b45e4 = _0x326f28.length;
  for (; _0x4e0bae < _0x4b45e4; _0x4e0bae++) {
    const _0x101e31 = _0x326f28[_0x4e0bae];
    if (!!_0x101e31 && _0x101e31 !== "undefined" && !_0x321784[_0x101e31]) {
      e2(_0x3ff71c, _0x101e31, false);
      delete _0x17c429[_0x101e31];
    }
  }
  _0x4e0bae = 0;
  _0x4b45e4 = _0x522bff.length;
  for (; _0x4e0bae < _0x4b45e4; _0x4e0bae++) {
    const _0x983a10 = _0x522bff[_0x4e0bae];
    const _0x2f9640 = !!_0x321784[_0x983a10];
    if (!!_0x983a10 && _0x983a10 !== "undefined" && _0x17c429[_0x983a10] !== _0x2f9640 && !!_0x2f9640) {
      e2(_0x3ff71c, _0x983a10, true);
      _0x17c429[_0x983a10] = _0x2f9640;
    }
  }
  return _0x17c429;
}
function _2(_0x2d77ec, _0x46d102, _0x160b8f) {
  if (!_0x46d102) {
    if (_0x160b8f) {
      return c1(_0x2d77ec, "style");
    } else {
      return _0x46d102;
    }
  }
  const _0x1fc9b8 = _0x2d77ec.style;
  if (typeof _0x46d102 == "string") {
    return _0x1fc9b8.cssText = _0x46d102;
  }
  if (typeof _0x160b8f == "string") {
    _0x1fc9b8.cssText = _0x160b8f = undefined;
  }
  _0x160b8f ||= {};
  _0x46d102 ||= {};
  let _0x3f2309;
  let _0x1061fd;
  for (_0x1061fd in _0x160b8f) {
    if (_0x46d102[_0x1061fd] == null) {
      _0x1fc9b8.removeProperty(_0x1061fd);
    }
    delete _0x160b8f[_0x1061fd];
  }
  for (_0x1061fd in _0x46d102) {
    _0x3f2309 = _0x46d102[_0x1061fd];
    if (_0x3f2309 !== _0x160b8f[_0x1061fd]) {
      _0x1fc9b8.setProperty(_0x1061fd, _0x3f2309);
      _0x160b8f[_0x1061fd] = _0x3f2309;
    }
  }
  return _0x160b8f;
}
function i5(_0x3bdbc7, _0xa72dc = {}, _0x234d9d, _0x232508) {
  const _0x24dc5f = {};
  if (!_0x232508) {
    T(() => _0x24dc5f.children = n1(_0x3bdbc7, _0xa72dc.children, _0x24dc5f.children));
  }
  T(() => _0xa72dc.ref && _0xa72dc.ref(_0x3bdbc7));
  T(() => o5(_0x3bdbc7, _0xa72dc, _0x234d9d, true, _0x24dc5f, true));
  return _0x24dc5f;
}
function R1(_0x191ca2, _0x138ed1, _0x40f152) {
  return $(() => _0x191ca2(_0x138ed1, _0x40f152));
}
function E(_0x2d6811, _0xf61078, _0x59bc3e, _0x583221) {
  if (_0x59bc3e !== undefined && !_0x583221) {
    _0x583221 = [];
  }
  if (typeof _0xf61078 != "function") {
    return n1(_0x2d6811, _0xf61078, _0x583221, _0x59bc3e);
  }
  T(_0x28f6ac => n1(_0x2d6811, _0xf61078(), _0x28f6ac, _0x59bc3e), _0x583221);
}
function o5(_0x3c511d, _0x541b01, _0x4554bd, _0x5a5dab, _0x178511 = {}, _0x2d2d79 = false) {
  _0x541b01 ||= {};
  for (const _0x3aae6b in _0x178511) {
    if (!(_0x3aae6b in _0x541b01)) {
      if (_0x3aae6b === "children") {
        continue;
      }
      _0x178511[_0x3aae6b] = t2(_0x3c511d, _0x3aae6b, null, _0x178511[_0x3aae6b], _0x4554bd, _0x2d2d79);
    }
  }
  for (const _0x3a3a7e in _0x541b01) {
    if (_0x3a3a7e === "children") {
      if (!_0x5a5dab) {
        n1(_0x3c511d, _0x541b01.children);
      }
      continue;
    }
    const _0x1fe80a = _0x541b01[_0x3a3a7e];
    _0x178511[_0x3a3a7e] = t2(_0x3c511d, _0x3a3a7e, _0x1fe80a, _0x178511[_0x3a3a7e], _0x4554bd, _0x2d2d79);
  }
}
function l5(_0x5edee6) {
  return _0x5edee6.toLowerCase().replace(/-([a-z])/g, (_0x14daed, _0x26c410) => _0x26c410.toUpperCase());
}
function e2(_0x184b4b, _0x3a95da, _0x3698dd) {
  const _0x32183c = _0x3a95da.trim().split(/\s+/);
  for (let _0x5a3562 = 0, _0xcca9a2 = _0x32183c.length; _0x5a3562 < _0xcca9a2; _0x5a3562++) {
    _0x184b4b.classList.toggle(_0x32183c[_0x5a3562], _0x3698dd);
  }
}
function t2(_0x411b89, _0xe19f7b, _0x372762, _0x3f87ae, _0x34e47a, _0xd4a5a0) {
  let _0x2d3115;
  let _0x37f237;
  let _0x197138;
  let _0x224d63;
  let _0x1f1d1f;
  if (_0xe19f7b === "style") {
    return _2(_0x411b89, _0x372762, _0x3f87ae);
  }
  if (_0xe19f7b === "classList") {
    return q1(_0x411b89, _0x372762, _0x3f87ae);
  }
  if (_0x372762 === _0x3f87ae) {
    return _0x3f87ae;
  }
  if (_0xe19f7b === "ref") {
    if (!_0xd4a5a0) {
      _0x372762(_0x411b89);
    }
  } else if (_0xe19f7b.slice(0, 3) === "on:") {
    const _0x3d0ba5 = _0xe19f7b.slice(3);
    if (_0x3f87ae) {
      _0x411b89.removeEventListener(_0x3d0ba5, _0x3f87ae);
    }
    if (_0x372762) {
      _0x411b89.addEventListener(_0x3d0ba5, _0x372762);
    }
  } else if (_0xe19f7b.slice(0, 10) === "oncapture:") {
    const _0x548509 = _0xe19f7b.slice(10);
    if (_0x3f87ae) {
      _0x411b89.removeEventListener(_0x548509, _0x3f87ae, true);
    }
    if (_0x372762) {
      _0x411b89.addEventListener(_0x548509, _0x372762, true);
    }
  } else if (_0xe19f7b.slice(0, 2) === "on") {
    const _0x27359a = _0xe19f7b.slice(2).toLowerCase();
    const _0x32c8bb = z2.has(_0x27359a);
    if (!_0x32c8bb && _0x3f87ae) {
      const _0x284a5d = Array.isArray(_0x3f87ae) ? _0x3f87ae[0] : _0x3f87ae;
      _0x411b89.removeEventListener(_0x27359a, _0x284a5d);
    }
    if (_0x32c8bb || _0x372762) {
      s5(_0x411b89, _0x27359a, _0x372762, _0x32c8bb);
      if (_0x32c8bb) {
        m2([_0x27359a]);
      }
    }
  } else if (_0xe19f7b.slice(0, 5) === "attr:") {
    c1(_0x411b89, _0xe19f7b.slice(5), _0x372762);
  } else if ((_0x1f1d1f = _0xe19f7b.slice(0, 5) === "prop:") || (_0x197138 = G2.has(_0xe19f7b)) || !_0x34e47a && ((_0x224d63 = J2(_0xe19f7b, _0x411b89.tagName)) || (_0x37f237 = W2.has(_0xe19f7b))) || (_0x2d3115 = _0x411b89.nodeName.includes("-"))) {
    if (_0x1f1d1f) {
      _0xe19f7b = _0xe19f7b.slice(5);
      _0x37f237 = true;
    }
    if (_0xe19f7b === "class" || _0xe19f7b === "className") {
      w(_0x411b89, _0x372762);
    } else if (_0x2d3115 && !_0x37f237 && !_0x197138) {
      _0x411b89[l5(_0xe19f7b)] = _0x372762;
    } else {
      _0x411b89[_0x224d63 || _0xe19f7b] = _0x372762;
    }
  } else {
    const _0x119b95 = _0x34e47a && _0xe19f7b.indexOf(":") > -1 && e5[_0xe19f7b.split(":")[0]];
    if (_0x119b95) {
      r5(_0x411b89, _0x119b95, _0xe19f7b, _0x372762);
    } else {
      c1(_0x411b89, Y2[_0xe19f7b] || _0xe19f7b, _0x372762);
    }
  }
  return _0x372762;
}
function a5(_0x27dccc) {
  const _0x46c32f = "$$" + _0x27dccc.type;
  let _0x52cdf7 = _0x27dccc.composedPath && _0x27dccc.composedPath()[0] || _0x27dccc.target;
  if (_0x27dccc.target !== _0x52cdf7) {
    Object.defineProperty(_0x27dccc, "target", {
      configurable: true,
      value: _0x52cdf7
    });
  }
  Object.defineProperty(_0x27dccc, "currentTarget", {
    configurable: true,
    get() {
      return _0x52cdf7 || document;
    }
  });
  while (_0x52cdf7) {
    const _0x4260b3 = _0x52cdf7[_0x46c32f];
    if (_0x4260b3 && !_0x52cdf7.disabled) {
      const _0x2bb24e = _0x52cdf7[_0x46c32f + "Data"];
      if (_0x2bb24e !== undefined) {
        _0x4260b3.call(_0x52cdf7, _0x2bb24e, _0x27dccc);
      } else {
        _0x4260b3.call(_0x52cdf7, _0x27dccc);
      }
      if (_0x27dccc.cancelBubble) {
        return;
      }
    }
    _0x52cdf7 = _0x52cdf7._$host || _0x52cdf7.parentNode || _0x52cdf7.host;
  }
}
function n1(_0x18916f, _0x54e554, _0x314b5b, _0x216091, _0x2a20ac) {
  while (typeof _0x314b5b == "function") {
    _0x314b5b = _0x314b5b();
  }
  if (_0x54e554 === _0x314b5b) {
    return _0x314b5b;
  }
  const _0x8df217 = typeof _0x54e554;
  const _0x1edf9e = _0x216091 !== undefined;
  _0x18916f = _0x1edf9e && _0x314b5b[0] && _0x314b5b[0].parentNode || _0x18916f;
  if (_0x8df217 === "string" || _0x8df217 === "number") {
    if (_0x8df217 === "number") {
      _0x54e554 = _0x54e554.toString();
    }
    if (_0x1edf9e) {
      let _0x408860 = _0x314b5b[0];
      if (_0x408860 && _0x408860.nodeType === 3) {
        _0x408860.data = _0x54e554;
      } else {
        _0x408860 = document.createTextNode(_0x54e554);
      }
      _0x314b5b = e1(_0x18916f, _0x314b5b, _0x216091, _0x408860);
    } else if (_0x314b5b !== "" && typeof _0x314b5b == "string") {
      _0x314b5b = _0x18916f.firstChild.data = _0x54e554;
    } else {
      _0x314b5b = _0x18916f.textContent = _0x54e554;
    }
  } else if (_0x54e554 == null || _0x8df217 === "boolean") {
    _0x314b5b = e1(_0x18916f, _0x314b5b, _0x216091);
  } else {
    if (_0x8df217 === "function") {
      T(() => {
        let _0x2bdf05 = _0x54e554();
        while (typeof _0x2bdf05 == "function") {
          _0x2bdf05 = _0x2bdf05();
        }
        _0x314b5b = n1(_0x18916f, _0x2bdf05, _0x314b5b, _0x216091);
      });
      return () => _0x314b5b;
    }
    if (Array.isArray(_0x54e554)) {
      const _0x385c90 = [];
      const _0x4d1fe0 = _0x314b5b && Array.isArray(_0x314b5b);
      if (B1(_0x385c90, _0x54e554, _0x314b5b, _0x2a20ac)) {
        T(() => _0x314b5b = n1(_0x18916f, _0x385c90, _0x314b5b, _0x216091, true));
        return () => _0x314b5b;
      }
      if (_0x385c90.length === 0) {
        _0x314b5b = e1(_0x18916f, _0x314b5b, _0x216091);
        if (_0x1edf9e) {
          return _0x314b5b;
        }
      } else if (_0x4d1fe0) {
        if (_0x314b5b.length === 0) {
          n2(_0x18916f, _0x385c90, _0x216091);
        } else {
          t5(_0x18916f, _0x314b5b, _0x385c90);
        }
      } else {
        if (_0x314b5b) {
          e1(_0x18916f);
        }
        n2(_0x18916f, _0x385c90);
      }
      _0x314b5b = _0x385c90;
    } else if (_0x54e554.nodeType) {
      if (Array.isArray(_0x314b5b)) {
        if (_0x1edf9e) {
          return _0x314b5b = e1(_0x18916f, _0x314b5b, _0x216091, _0x54e554);
        }
        e1(_0x18916f, _0x314b5b, null, _0x54e554);
      } else if (_0x314b5b == null || _0x314b5b === "" || !_0x18916f.firstChild) {
        _0x18916f.appendChild(_0x54e554);
      } else {
        _0x18916f.replaceChild(_0x54e554, _0x18916f.firstChild);
      }
      _0x314b5b = _0x54e554;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x54e554);
    }
  }
  return _0x314b5b;
}
function B1(_0xd6303b, _0x318e3e, _0x239cb6, _0x1a087e) {
  let _0x1f6b65 = false;
  for (let _0x56b90b = 0, _0x284a20 = _0x318e3e.length; _0x56b90b < _0x284a20; _0x56b90b++) {
    let _0x1e1c01 = _0x318e3e[_0x56b90b];
    let _0x24dbe0 = _0x239cb6 && _0x239cb6[_0x56b90b];
    let _0x306871;
    if (_0x1e1c01 != null && _0x1e1c01 !== true && _0x1e1c01 !== false) {
      if ((_0x306871 = typeof _0x1e1c01) == "object" && _0x1e1c01.nodeType) {
        _0xd6303b.push(_0x1e1c01);
      } else if (Array.isArray(_0x1e1c01)) {
        _0x1f6b65 = B1(_0xd6303b, _0x1e1c01, _0x24dbe0) || _0x1f6b65;
      } else if (_0x306871 === "function") {
        if (_0x1a087e) {
          while (typeof _0x1e1c01 == "function") {
            _0x1e1c01 = _0x1e1c01();
          }
          _0x1f6b65 = B1(_0xd6303b, Array.isArray(_0x1e1c01) ? _0x1e1c01 : [_0x1e1c01], Array.isArray(_0x24dbe0) ? _0x24dbe0 : [_0x24dbe0]) || _0x1f6b65;
        } else {
          _0xd6303b.push(_0x1e1c01);
          _0x1f6b65 = true;
        }
      } else {
        const _0x46fa97 = String(_0x1e1c01);
        if (_0x24dbe0 && _0x24dbe0.nodeType === 3 && _0x24dbe0.data === _0x46fa97) {
          _0xd6303b.push(_0x24dbe0);
        } else {
          _0xd6303b.push(document.createTextNode(_0x46fa97));
        }
      }
    }
  }
  return _0x1f6b65;
}
function n2(_0x189424, _0x2fafff, _0x4b8752 = null) {
  for (let _0x27bb05 = 0, _0x3ea971 = _0x2fafff.length; _0x27bb05 < _0x3ea971; _0x27bb05++) {
    _0x189424.insertBefore(_0x2fafff[_0x27bb05], _0x4b8752);
  }
}
function e1(_0xc2c7a1, _0x19b5ad, _0x1ade1a, _0x366a98) {
  if (_0x1ade1a === undefined) {
    return _0xc2c7a1.textContent = "";
  }
  const _0x560893 = _0x366a98 || document.createTextNode("");
  if (_0x19b5ad.length) {
    let _0x3739c5 = false;
    for (let _0x4b83ac = _0x19b5ad.length - 1; _0x4b83ac >= 0; _0x4b83ac--) {
      const _0x515662 = _0x19b5ad[_0x4b83ac];
      if (_0x560893 !== _0x515662) {
        const _0x3babef = _0x515662.parentNode === _0xc2c7a1;
        if (!_0x3739c5 && !_0x4b83ac) {
          if (_0x3babef) {
            _0xc2c7a1.replaceChild(_0x560893, _0x515662);
          } else {
            _0xc2c7a1.insertBefore(_0x560893, _0x1ade1a);
          }
        } else if (_0x3babef) {
          _0x515662.remove();
        }
      } else {
        _0x3739c5 = true;
      }
    }
  } else {
    _0xc2c7a1.insertBefore(_0x560893, _0x1ade1a);
  }
  return [_0x560893];
}
const c5 = "_hunting_59n7v_1";
const C5 = "_inspection_59n7v_11";
const D1 = {
  hunting: c5,
  inspection: C5
};
const U1 = Symbol("store-raw");
const C1 = Symbol("store-node");
function w2(_0x519238) {
  let _0x536352 = _0x519238[q];
  if (!_0x536352 && (Object.defineProperty(_0x519238, q, {
    value: _0x536352 = new Proxy(_0x519238, d5)
  }), !Array.isArray(_0x519238))) {
    const _0x459b02 = Object.keys(_0x519238);
    const _0x3fea34 = Object.getOwnPropertyDescriptors(_0x519238);
    for (let _0x26ae89 = 0, _0xc50768 = _0x459b02.length; _0x26ae89 < _0xc50768; _0x26ae89++) {
      const _0x3fa647 = _0x459b02[_0x26ae89];
      if (_0x3fea34[_0x3fa647].get) {
        Object.defineProperty(_0x519238, _0x3fa647, {
          enumerable: _0x3fea34[_0x3fa647].enumerable,
          get: _0x3fea34[_0x3fa647].get.bind(_0x536352)
        });
      }
    }
  }
  return _0x536352;
}
function m1(_0xaafa5b) {
  let _0x303d9e;
  return _0xaafa5b != null && typeof _0xaafa5b == "object" && (_0xaafa5b[q] || !(_0x303d9e = Object.getPrototypeOf(_0xaafa5b)) || _0x303d9e === Object.prototype || Array.isArray(_0xaafa5b));
}
function u1(_0x3e9c4e, _0x5d2a7c = new Set()) {
  let _0x496707;
  let _0x27a202;
  let _0x5a3c1e;
  let _0x4c88d2;
  if (_0x496707 = _0x3e9c4e != null && _0x3e9c4e[U1]) {
    return _0x496707;
  }
  if (!m1(_0x3e9c4e) || _0x5d2a7c.has(_0x3e9c4e)) {
    return _0x3e9c4e;
  }
  if (Array.isArray(_0x3e9c4e)) {
    if (Object.isFrozen(_0x3e9c4e)) {
      _0x3e9c4e = _0x3e9c4e.slice(0);
    } else {
      _0x5d2a7c.add(_0x3e9c4e);
    }
    for (let _0x59b770 = 0, _0x1de565 = _0x3e9c4e.length; _0x59b770 < _0x1de565; _0x59b770++) {
      _0x5a3c1e = _0x3e9c4e[_0x59b770];
      if ((_0x27a202 = u1(_0x5a3c1e, _0x5d2a7c)) !== _0x5a3c1e) {
        _0x3e9c4e[_0x59b770] = _0x27a202;
      }
    }
  } else {
    if (Object.isFrozen(_0x3e9c4e)) {
      _0x3e9c4e = Object.assign({}, _0x3e9c4e);
    } else {
      _0x5d2a7c.add(_0x3e9c4e);
    }
    const _0x40184d = Object.keys(_0x3e9c4e);
    const _0x11efae = Object.getOwnPropertyDescriptors(_0x3e9c4e);
    for (let _0x598461 = 0, _0x5a5f6d = _0x40184d.length; _0x598461 < _0x5a5f6d; _0x598461++) {
      _0x4c88d2 = _0x40184d[_0x598461];
      if (!_0x11efae[_0x4c88d2].get) {
        _0x5a3c1e = _0x3e9c4e[_0x4c88d2];
        if ((_0x27a202 = u1(_0x5a3c1e, _0x5d2a7c)) !== _0x5a3c1e) {
          _0x3e9c4e[_0x4c88d2] = _0x27a202;
        }
      }
    }
  }
  return _0x3e9c4e;
}
function V1(_0x2a5d7f) {
  let _0x3a0fd7 = _0x2a5d7f[C1];
  if (!_0x3a0fd7) {
    Object.defineProperty(_0x2a5d7f, C1, {
      value: _0x3a0fd7 = Object.create(null)
    });
  }
  return _0x3a0fd7;
}
function F1(_0x343382, _0x1eac13, _0x45b363) {
  return _0x343382[_0x1eac13] ||= x2(_0x45b363);
}
function u5(_0x4f8d3d, _0x27ff3c) {
  const _0x288a2f = Reflect.getOwnPropertyDescriptor(_0x4f8d3d, _0x27ff3c);
  if (!!_0x288a2f && !_0x288a2f.get && !!_0x288a2f.configurable && _0x27ff3c !== q && _0x27ff3c !== C1) {
    delete _0x288a2f.value;
    delete _0x288a2f.writable;
    _0x288a2f.get = () => _0x4f8d3d[q][_0x27ff3c];
  }
  return _0x288a2f;
}
function $2(_0x911c60) {
  if (C2()) {
    const _0x534f37 = V1(_0x911c60);
    (_0x534f37._ ||= x2())();
  }
}
function f5(_0x586885) {
  $2(_0x586885);
  return Reflect.ownKeys(_0x586885);
}
function x2(_0x438dc5) {
  const [_0x408b34, _0x53f016] = R(_0x438dc5, {
    equals: false,
    internal: true
  });
  _0x408b34.$ = _0x53f016;
  return _0x408b34;
}
const d5 = {
  get(_0x4e4f92, _0x2c080f, _0x39ef87) {
    if (_0x2c080f === U1) {
      return _0x4e4f92;
    }
    if (_0x2c080f === q) {
      return _0x39ef87;
    }
    if (_0x2c080f === j1) {
      $2(_0x4e4f92);
      return _0x39ef87;
    }
    const _0x5181c4 = V1(_0x4e4f92);
    const _0x7b0f45 = _0x5181c4[_0x2c080f];
    let _0xfbe3ba = _0x7b0f45 ? _0x7b0f45() : _0x4e4f92[_0x2c080f];
    if (_0x2c080f === C1 || _0x2c080f === "__proto__") {
      return _0xfbe3ba;
    }
    if (!_0x7b0f45) {
      const _0xeabfcb = Object.getOwnPropertyDescriptor(_0x4e4f92, _0x2c080f);
      if (C2() && (typeof _0xfbe3ba != "function" || _0x4e4f92.hasOwnProperty(_0x2c080f)) && (!_0xeabfcb || !_0xeabfcb.get)) {
        _0xfbe3ba = F1(_0x5181c4, _0x2c080f, _0xfbe3ba)();
      }
    }
    if (m1(_0xfbe3ba)) {
      return w2(_0xfbe3ba);
    } else {
      return _0xfbe3ba;
    }
  },
  has(_0x173dfd, _0x48b766) {
    if (_0x48b766 === U1 || _0x48b766 === q || _0x48b766 === j1 || _0x48b766 === C1 || _0x48b766 === "__proto__") {
      return true;
    } else {
      this.get(_0x173dfd, _0x48b766, _0x173dfd);
      return _0x48b766 in _0x173dfd;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: f5,
  getOwnPropertyDescriptor: u5
};
function _1(_0x5a8c24, _0x11e35b, _0x47cd57, _0x562b88 = false) {
  if (!_0x562b88 && _0x5a8c24[_0x11e35b] === _0x47cd57) {
    return;
  }
  const _0x2b34fe = _0x5a8c24[_0x11e35b];
  const _0x2cb753 = _0x5a8c24.length;
  if (_0x47cd57 === undefined) {
    delete _0x5a8c24[_0x11e35b];
  } else {
    _0x5a8c24[_0x11e35b] = _0x47cd57;
  }
  let _0x356bcf = V1(_0x5a8c24);
  let _0x7e6768;
  if (_0x7e6768 = F1(_0x356bcf, _0x11e35b, _0x2b34fe)) {
    _0x7e6768.$(() => _0x47cd57);
  }
  if (Array.isArray(_0x5a8c24) && _0x5a8c24.length !== _0x2cb753) {
    for (let _0x43e256 = _0x5a8c24.length; _0x43e256 < _0x2cb753; _0x43e256++) {
      if (_0x7e6768 = _0x356bcf[_0x43e256]) {
        _0x7e6768.$();
      }
    }
    if (_0x7e6768 = F1(_0x356bcf, "length", _0x2cb753)) {
      _0x7e6768.$(_0x5a8c24.length);
    }
  }
  if (_0x7e6768 = _0x356bcf._) {
    _0x7e6768.$();
  }
}
function L2(_0x41bd9, _0x3f48f5) {
  const _0x2cbfb8 = Object.keys(_0x3f48f5);
  for (let _0x1452e4 = 0; _0x1452e4 < _0x2cbfb8.length; _0x1452e4 += 1) {
    const _0x1d759e = _0x2cbfb8[_0x1452e4];
    _1(_0x41bd9, _0x1d759e, _0x3f48f5[_0x1d759e]);
  }
}
function g5(_0x2ef729, _0x1716fb) {
  if (typeof _0x1716fb == "function") {
    _0x1716fb = _0x1716fb(_0x2ef729);
  }
  _0x1716fb = u1(_0x1716fb);
  if (Array.isArray(_0x1716fb)) {
    if (_0x2ef729 === _0x1716fb) {
      return;
    }
    let _0x963efb = 0;
    let _0x5e2f82 = _0x1716fb.length;
    for (; _0x963efb < _0x5e2f82; _0x963efb++) {
      const _0x5f410e = _0x1716fb[_0x963efb];
      if (_0x2ef729[_0x963efb] !== _0x5f410e) {
        _1(_0x2ef729, _0x963efb, _0x5f410e);
      }
    }
    _1(_0x2ef729, "length", _0x5e2f82);
  } else {
    L2(_0x2ef729, _0x1716fb);
  }
}
function o1(_0x4747fc, _0x23edbc, _0x50583e = []) {
  let _0x255084;
  let _0x22e268 = _0x4747fc;
  if (_0x23edbc.length > 1) {
    _0x255084 = _0x23edbc.shift();
    const _0x2f8417 = typeof _0x255084;
    const _0x5d4bbc = Array.isArray(_0x4747fc);
    if (Array.isArray(_0x255084)) {
      for (let _0x5dff57 = 0; _0x5dff57 < _0x255084.length; _0x5dff57++) {
        o1(_0x4747fc, [_0x255084[_0x5dff57]].concat(_0x23edbc), _0x50583e);
      }
      return;
    } else if (_0x5d4bbc && _0x2f8417 === "function") {
      for (let _0x3d6f34 = 0; _0x3d6f34 < _0x4747fc.length; _0x3d6f34++) {
        if (_0x255084(_0x4747fc[_0x3d6f34], _0x3d6f34)) {
          o1(_0x4747fc, [_0x3d6f34].concat(_0x23edbc), _0x50583e);
        }
      }
      return;
    } else if (_0x5d4bbc && _0x2f8417 === "object") {
      const {
        from: _0x29db03 = 0,
        to: _0x40ca90 = _0x4747fc.length - 1,
        by: _0x5c1cbe = 1
      } = _0x255084;
      for (let _0x5aab06 = _0x29db03; _0x5aab06 <= _0x40ca90; _0x5aab06 += _0x5c1cbe) {
        o1(_0x4747fc, [_0x5aab06].concat(_0x23edbc), _0x50583e);
      }
      return;
    } else if (_0x23edbc.length > 1) {
      o1(_0x4747fc[_0x255084], _0x23edbc, [_0x255084].concat(_0x50583e));
      return;
    }
    _0x22e268 = _0x4747fc[_0x255084];
    _0x50583e = [_0x255084].concat(_0x50583e);
  }
  let _0x3b368e = _0x23edbc[0];
  if ((typeof _0x3b368e != "function" || !(_0x3b368e = _0x3b368e(_0x22e268, _0x50583e), _0x3b368e === _0x22e268)) && (_0x255084 !== undefined || _0x3b368e != null)) {
    _0x3b368e = u1(_0x3b368e);
    if (_0x255084 === undefined || m1(_0x22e268) && m1(_0x3b368e) && !Array.isArray(_0x3b368e)) {
      L2(_0x22e268, _0x3b368e);
    } else {
      _1(_0x4747fc, _0x255084, _0x3b368e);
    }
  }
}
function L1(...[_0x5822dc, _0x3f9e5c]) {
  const _0x9a4c90 = u1(_0x5822dc || {});
  const _0x3c4c61 = Array.isArray(_0x9a4c90);
  const _0x5ead11 = w2(_0x9a4c90);
  function _0x45b14a(..._0x5c98bd) {
    K(() => {
      if (_0x3c4c61 && _0x5c98bd.length === 1) {
        g5(_0x9a4c90, _0x5c98bd[0]);
      } else {
        o1(_0x9a4c90, _0x5c98bd);
      }
    });
  }
  return [_0x5ead11, _0x45b14a];
}
const v5 = "_header_1c6b4_1";
const h5 = "_title_1c6b4_10";
const b5 = "_description_1c6b4_20";
const y5 = "_divider_1c6b4_29";
const p5 = "_line_1c6b4_38";
const i1 = {
  header: v5,
  title: h5,
  description: b5,
  divider: y5,
  line: p5
};
const m5 = Z("<div><div></div><div></div><div><div>");
function A2(_0x2cf15e) {
  return (() => {
    const _0x125d26 = m5();
    const _0x2c3f26 = _0x125d26.firstChild;
    const _0x2c0d07 = _0x2c3f26.nextSibling;
    const _0x10ecfa = _0x2c0d07.nextSibling;
    const _0x3638c9 = _0x10ecfa.firstChild;
    E(_0x2c3f26, () => _0x2cf15e.title);
    E(_0x2c0d07, () => _0x2cf15e.description);
    T(_0x3a52e0 => {
      const _0x2b0753 = i1.header;
      const _0xfafa90 = i1.title;
      const _0x43994a = i1.description;
      const _0x2d2d0c = i1.divider;
      const _0x2c28a3 = i1.line;
      if (_0x2b0753 !== _0x3a52e0._v$) {
        w(_0x125d26, _0x3a52e0._v$ = _0x2b0753);
      }
      if (_0xfafa90 !== _0x3a52e0._v$2) {
        w(_0x2c3f26, _0x3a52e0._v$2 = _0xfafa90);
      }
      if (_0x43994a !== _0x3a52e0._v$3) {
        w(_0x2c0d07, _0x3a52e0._v$3 = _0x43994a);
      }
      if (_0x2d2d0c !== _0x3a52e0._v$4) {
        w(_0x10ecfa, _0x3a52e0._v$4 = _0x2d2d0c);
      }
      if (_0x2c28a3 !== _0x3a52e0._v$5) {
        w(_0x3638c9, _0x3a52e0._v$5 = _0x2c28a3);
      }
      return _0x3a52e0;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return _0x125d26;
  })();
}
const _5 = "_contracts_1psoc_1";
const w5 = "_list_1psoc_9";
const $5 = "_item_1psoc_18";
const x5 = "_title_1psoc_35";
const L5 = "_type_1psoc_45";
const A5 = "_amount_1psoc_55";
const E5 = "_button_1psoc_71";
const S5 = "_disabled_1psoc_92";
const G = {
  contracts: _5,
  list: w5,
  item: $5,
  title: x5,
  type: L5,
  amount: A5,
  button: E5,
  disabled: S5
};
const O5 = Z("<svg width=\"18.42vh\" height=\"2.68vh\" viewBox=\"0 0 199 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M99.3038 28.8475C99.1747 28.7644 98.9843 28.5475 98.8805 28.3655C98.7075 28.0619 98.6927 27.9579 98.7001 27.1065C98.7102 25.9512 98.9641 24.9756 99.7199 23.1869L99.8556 22.8659L100.215 23.9035C100.764 25.4908 100.892 26.0253 100.938 26.9132C100.991 27.9266 100.897 28.3112 100.502 28.7085C100.253 28.9587 100.162 29.0011 99.8746 29C99.6744 28.9992 99.4436 28.9376 99.3038 28.8475ZM103.174 27.0612C102.693 26.9472 102.149 26.628 101.862 26.2912C101.545 25.9186 101.091 24.8997 100.889 24.1058C100.749 23.5565 100.703 22.9908 100.724 22.0797L100.735 21.6156L100.917 22.0619C101.018 22.3073 101.196 22.6379 101.313 22.7966C101.7 23.3222 103.09 24.648 103.715 25.0883C104.408 25.5764 104.858 26.0382 104.933 26.338C105.077 26.9142 104.155 27.2935 103.174 27.0612ZM95.2373 26.9699C94.8588 26.849 94.6133 26.5371 94.6815 26.264C94.7575 25.96 95.1445 25.5631 95.9527 24.9606C96.7875 24.3383 98.0306 23.1146 98.4044 22.5472C98.5425 22.3376 98.6983 22.0249 98.7507 21.8522C98.842 21.551 98.8469 21.5712 98.8697 22.3503C98.8951 23.2174 98.8115 23.8091 98.5585 24.5544C98.3027 25.3079 97.8347 26.18 97.5614 26.4122C96.9541 26.9284 95.8995 27.1815 95.2373 26.9699ZM93.8824 24.1049C92.9572 23.8944 92.0356 23.2169 92.0356 22.7473C92.0356 22.6072 92.0867 22.4983 92.1702 22.4601C92.2443 22.4264 93.0841 22.3753 94.0363 22.3467C95.6217 22.2991 95.8207 22.2773 96.3955 22.0894C97.067 21.8698 97.8309 21.4066 98.1499 21.0255C98.3395 20.7991 98.3457 20.7974 98.3456 20.9716C98.3455 21.3968 97.883 22.1445 97.2021 22.8203C96.0863 23.928 94.9822 24.3552 93.8824 24.1049ZM104.245 24.0509C102.911 23.5749 101.473 22.1004 101.231 20.9609L101.173 20.6928L101.618 21.1007C101.862 21.3252 102.258 21.6083 102.498 21.73C103.308 22.1408 103.705 22.2088 105.605 22.2622C107.338 22.311 107.365 22.3143 107.512 22.4964C107.704 22.7352 107.647 22.9208 107.255 23.329C106.545 24.0694 105.2 24.3919 104.245 24.0509ZM87.0144 22.6085C87.0673 22.587 87.1539 22.587 87.2068 22.6085C87.2597 22.6299 87.2164 22.6475 87.1106 22.6475C87.0048 22.6475 86.9615 22.6299 87.0144 22.6085ZM85.7565 22.4277C84.2084 22.0762 82.5957 21.3726 81.1468 20.4171C80.5137 19.9995 80.0476 19.6026 79.2981 18.8424C78.1217 17.6495 77.5921 16.9636 75.7962 14.3073C73.4876 10.8927 72.791 10.0574 71.5704 9.24082C70.3467 8.42213 69.1754 8.00072 68.2823 8.05787C67.765 8.09097 67.5136 8.22299 67.2231 8.61416C67.095 8.78646 67.0644 8.94245 67.0644 9.4214C67.0644 10.276 67.1142 10.3926 67.6235 10.7309C68.1093 11.0535 68.1985 11.2578 67.9517 11.4823C67.6162 11.7875 67.1267 11.6137 66.7158 11.0437C66.2294 10.3689 66.1026 9.19024 66.4385 8.46544C66.7931 7.70012 67.7627 7.11498 68.6762 7.11498C69.1423 7.11498 70.0785 7.37205 70.7533 7.68542C73.0201 8.73797 74.8388 10.6515 76.6425 13.882C77.7816 15.9219 78.4315 16.7922 79.9925 18.3675C82.3323 20.7287 84.0676 21.8643 86.1893 22.4226C86.9137 22.6131 86.5897 22.6171 85.7565 22.4277ZM112.409 22.5311C112.462 22.5096 112.548 22.5096 112.601 22.5311C112.654 22.5526 112.611 22.5701 112.505 22.5701C112.399 22.5701 112.356 22.5526 112.409 22.5311ZM113.467 22.3219C115.653 21.7305 117.392 20.5569 119.865 18.0032C121.042 16.7891 121.811 15.7818 122.547 14.4932C124.021 11.912 124.638 11.0182 125.73 9.87916C126.886 8.67324 128.307 7.73662 129.704 7.26038C130.475 6.99743 131.389 7.00486 131.974 7.27886C132.542 7.5449 132.824 7.79779 133.082 8.27419C133.567 9.17036 133.366 10.5054 132.636 11.2399C132.237 11.6407 131.67 11.6698 131.552 11.2956C131.471 11.0391 131.568 10.8807 131.955 10.6338C132.413 10.342 132.528 10.1003 132.538 9.40431C132.548 8.78561 132.411 8.455 132.026 8.16715C131.844 8.03065 131.701 8.00459 131.141 8.00575C130.146 8.00792 129.258 8.33729 128.007 9.16773C126.817 9.95827 126.07 10.8536 123.822 14.185C121.082 18.2461 119.777 19.6411 117.536 20.9024C116.178 21.6664 114.326 22.3273 113.159 22.4641C112.864 22.4987 112.936 22.4654 113.467 22.3219ZM89.7655 21.8336C85.5267 21.5605 82.6349 20.2262 80.282 17.4579C79.4922 16.5288 79.0235 15.8977 77.4546 13.6499C74.4776 9.38521 73.3013 8.0786 71.1814 6.68236C68.9271 5.19765 66.4594 4.56821 63.2559 4.66086C60.3119 4.74608 58.6241 5.37444 56.9762 6.99898C55.8612 8.09801 55.211 9.13541 54.6848 10.6548C54.1816 12.1076 53.9842 13.7741 54.204 14.7126C54.7533 17.0577 56.5721 18.8961 58.9366 19.496C59.4534 19.6271 59.7512 19.6539 60.4371 19.6309C61.2055 19.6052 61.3458 19.5772 61.8103 19.3572C62.5247 19.0189 63.0487 18.5055 63.3677 17.8312C63.976 16.5454 63.8614 15.5922 63.0177 14.9207C62.1021 14.1919 60.7102 14.2048 60.1467 14.9472C59.9538 15.2013 59.7155 16.1119 59.8155 16.2124C59.8381 16.2351 59.9316 16.1781 60.0235 16.0857C60.2039 15.9045 60.6345 15.6994 60.8347 15.6994C60.9028 15.6994 61.0597 15.8011 61.1834 15.9254C61.7674 16.5124 61.1001 17.2051 60.0827 17.0679C59.4345 16.9806 58.9321 16.3611 58.8831 15.5889C58.8025 14.3156 59.5905 13.439 60.9162 13.3275C62.3964 13.2029 63.8888 14.1065 64.5979 15.5567C65.1503 16.6865 65.1353 17.8245 64.5522 19.0192C64.0682 20.0106 62.7733 20.9652 61.4853 21.2801C60.8845 21.4271 59.2708 21.4062 58.6135 21.2429C55.3435 20.4311 52.9418 17.0128 52.9442 13.1738C52.9449 11.9884 53.024 11.4322 53.3384 10.4018C54.437 6.80216 57.1876 4.35924 61.1513 3.46299C61.8407 3.30708 62.1153 3.29169 64.2171 3.29084C66.8241 3.28991 67.4934 3.36949 68.7921 3.83521C69.9582 4.25345 70.9428 4.87152 72.7077 6.29313C73.6486 7.05103 73.6709 7.07647 75.2407 9.1938C76.1117 10.3686 77.0209 11.5735 77.2612 11.8712C77.5014 12.1689 78.0862 12.9729 78.5607 13.6579C79.7639 15.395 80.2173 15.9439 81.6575 17.4079C83.041 18.8141 83.6621 19.317 84.6481 19.8295C85.8652 20.4619 87.9122 21.0692 89.2593 21.1972C90.0596 21.2733 91.7649 21.1899 93.5162 20.9889C94.0978 20.9222 94.6135 20.8809 94.6621 20.8972C94.7911 20.9404 93.6107 21.4661 93.0727 21.605C92.1422 21.8454 91.0834 21.9186 89.7655 21.8336ZM107.522 21.7265C107.258 21.692 106.773 21.5898 106.446 21.4995C105.79 21.3187 104.796 20.8727 104.941 20.8242C104.991 20.8073 105.494 20.8473 106.059 20.913C107.855 21.1223 109.587 21.2034 110.409 21.117C111.76 20.9747 113.91 20.325 115.019 19.7239C115.949 19.2196 116.615 18.6619 118.085 17.1572C119.447 15.7629 119.965 15.1281 121.148 13.4035C121.475 12.9277 122.079 12.1087 122.491 11.5836C122.903 11.0585 123.697 10.0035 124.255 9.23927C125.729 7.22032 125.924 6.99627 126.898 6.20226C129.093 4.41253 130.443 3.69801 132.282 3.35356C133.368 3.15024 137.254 3.14838 138.246 3.35077C140.522 3.81526 142.306 4.73958 143.792 6.22445C145.628 8.06081 146.676 10.5473 146.671 13.0562C146.661 17.173 143.908 20.7724 140.392 21.2638C138.853 21.4791 137.508 21.1999 136.381 20.4312C134.573 19.1968 134.053 16.8727 135.193 15.1138C135.997 13.8734 137.313 13.1505 138.598 13.243C139.929 13.3387 140.828 14.2902 140.722 15.4939C140.623 16.631 139.658 17.2866 138.668 16.8888C138.323 16.7501 138.207 16.5925 138.207 16.263C138.207 15.589 138.954 15.4388 139.544 15.9943L139.764 16.2021L139.731 15.7257C139.69 15.1114 139.433 14.7027 138.938 14.4617C138.635 14.3145 138.491 14.2935 137.99 14.3235C136.757 14.3976 135.822 15.2755 135.824 16.3567C135.825 16.8555 136.126 17.7071 136.487 18.2336C137.517 19.7369 139.796 20.0148 142.02 18.9081C143.532 18.156 144.645 16.8709 145.218 15.2157C145.409 14.6628 145.439 14.4636 145.44 13.7181C145.443 10.8199 144.052 7.90243 141.883 6.25972C140.856 5.48202 139.851 5.05496 138.313 4.74175C137.336 4.54292 134.346 4.54647 133.244 4.74778C130.262 5.29223 128.383 6.27518 126.136 8.46614C124.973 9.59927 124.493 10.2241 121.204 14.8873C118.83 18.2533 117.22 19.7308 114.891 20.6821C112.822 21.5268 109.547 21.991 107.522 21.7265ZM94.9847 21.4077C96.3456 20.5811 97.0491 20.0011 97.7211 19.152C99.4211 17.0035 99.471 14.2041 97.8387 12.5588C97.1866 11.9016 96.5319 11.5858 95.724 11.5388C94.9408 11.4933 94.5152 11.6137 94.0708 12.0069C93.5995 12.4238 93.3907 12.8449 93.3904 13.3793C93.3899 14.1403 93.8599 14.6848 94.577 14.7541C95.0419 14.7989 95.2775 14.6653 95.4975 14.2319C95.7835 13.6684 95.6377 12.9926 95.2303 12.9926C95.002 12.9926 94.8431 13.1488 94.7181 13.496C94.551 13.9607 94.208 13.7596 94.3026 13.2524C94.3792 12.842 94.7198 12.5285 95.0885 12.529C96.0739 12.5304 96.5715 13.1338 96.3898 14.1068C96.2758 14.7179 95.6133 15.1811 94.8444 15.1876C94.0828 15.1938 93.471 14.7845 93.0785 14.006C92.5975 13.0521 92.8162 12.0454 93.636 11.4394C94.2004 11.0223 94.7339 10.8807 95.7693 10.8728C96.6624 10.8661 96.7115 10.8744 97.1987 11.1154C98.5226 11.7702 99.4383 13.5066 99.4528 15.39C99.4591 16.1994 99.3627 16.6829 99.0213 17.5554C98.3166 19.3563 97.082 20.678 95.5471 21.2747C94.7072 21.6011 94.6403 21.6169 94.9847 21.4077ZM104.307 21.3125C102.35 20.5548 101.157 19.2352 100.37 16.9586C100.188 16.432 100.162 16.2359 100.159 15.39C100.156 14.6065 100.189 14.3067 100.332 13.8081C100.86 11.9679 101.966 10.8852 103.432 10.7737C104.914 10.6611 106.235 11.2474 106.628 12.1918C106.769 12.532 106.762 13.2686 106.612 13.7092C106.465 14.1447 105.971 14.7249 105.577 14.9272C104.654 15.4006 103.475 14.9885 103.21 14.0994C103.087 13.6871 103.092 13.5212 103.24 13.1503C103.391 12.7712 103.741 12.5386 104.252 12.4777C104.911 12.3993 105.317 12.767 105.258 13.3894C105.225 13.7363 104.971 13.7547 104.864 13.4179C104.66 12.7799 104.115 12.7439 103.93 13.3561C103.847 13.6298 104.033 14.1608 104.309 14.438C104.632 14.7629 105.061 14.7875 105.535 14.5082C106.639 13.8577 106.316 12.1801 104.971 11.5794C104.442 11.3433 103.474 11.4131 102.785 11.7368C102.052 12.0816 101.421 12.7087 101.043 13.467C100.648 14.2602 100.551 14.7664 100.594 15.8133C100.635 16.8085 100.833 17.4684 101.352 18.3473C101.91 19.2897 103.303 20.6198 104.233 21.0975C104.53 21.2502 104.888 21.4961 104.81 21.4934C104.789 21.4927 104.562 21.4112 104.307 21.3125ZM99.3165 20.5648C98.6771 20.0594 98.7595 18.9977 99.4641 18.66C99.7096 18.5423 99.7693 18.5405 100.054 18.6416C100.228 18.7035 100.439 18.8459 100.521 18.958C100.713 19.2186 100.78 19.8015 100.654 20.1079C100.419 20.6784 99.7495 20.9071 99.3165 20.5648ZM88.0305 20.1951C86.4419 19.593 85.292 18.845 84.3007 17.7691C82.946 16.2985 81.716 13.8088 81.3758 11.8487C80.8992 9.10177 82.1282 5.5111 84.0392 4.06745C84.6393 3.6141 84.9231 3.46616 85.5875 3.26036C86.3104 3.03647 87.1037 2.98102 88.0318 3.08945C90.2336 3.34667 91.6091 4.27703 91.9963 5.77087C92.4494 7.51938 91.3594 9.52952 89.6743 10.0525C89.0874 10.2348 88.6862 10.2473 88.1379 10.1006C86.9332 9.77823 86.2767 9.03742 86.204 7.91828C86.1601 7.24375 86.2671 6.8887 86.6389 6.47379C86.9869 6.08556 87.4252 5.88556 88.0583 5.82617C88.672 5.76855 89.0316 5.88185 89.3341 6.22824C89.7275 6.67842 89.86 7.51149 89.5788 7.76717C89.341 7.98348 89.1884 7.88603 88.9878 7.38968C88.7549 6.81345 88.5369 6.57363 88.2464 6.57363C87.7655 6.57363 87.4954 6.92899 87.4954 7.56137C87.4954 8.33582 87.9284 9.09195 88.5288 9.36603C88.9318 9.55001 89.1643 9.54823 89.6725 9.35713C90.2109 9.15466 90.6826 8.74192 90.941 8.24704C91.1186 7.90684 91.1486 7.75518 91.1495 7.19232C91.1505 6.59892 91.1254 6.48438 90.8911 6.0151C90.4649 5.16169 89.6897 4.52954 88.7651 4.28129C88.1855 4.12576 87.1664 4.14904 86.5058 4.33303C84.4583 4.90331 82.849 6.61516 82.2548 8.85506C82.007 9.78937 81.9674 11.478 82.1705 12.4512C82.7885 15.4135 84.8658 18.047 88.0075 19.8515C88.7633 20.2856 89.193 20.5763 89.064 20.5663C89.0266 20.5634 88.5615 20.3963 88.0305 20.1951ZM110.658 20.3433C110.764 20.2586 111.055 20.0788 111.306 19.9436C113.667 18.6698 115.752 16.5556 116.743 14.4304C117.971 11.7968 117.811 8.74872 116.331 6.58105C115.707 5.6684 114.578 4.80022 113.48 4.3901C112.583 4.05492 111.44 4.00079 110.651 4.256C109.321 4.68576 108.426 5.84519 108.427 7.13586C108.429 8.06553 108.895 8.81663 109.711 9.20215C110.539 9.59324 111.243 9.42333 111.711 8.7191C112 8.28432 112.163 7.63786 112.086 7.22836C112.016 6.84957 111.668 6.49629 111.365 6.49629C111.043 6.49629 110.841 6.69644 110.628 7.23006C110.396 7.80939 110.26 7.90962 110.027 7.67498C109.684 7.33052 109.935 6.30766 110.453 5.93614C110.802 5.68642 111.761 5.68905 112.312 5.94124C113.087 6.29661 113.387 6.77501 113.386 7.65634C113.384 9.10555 112.328 10.0742 110.735 10.086C110.156 10.0902 110.024 10.0632 109.581 9.84985C108.235 9.20169 107.454 7.88209 107.515 6.36049C107.55 5.50383 107.829 4.85954 108.418 4.27696C109.111 3.59114 110.111 3.19076 111.582 3.01088C114.125 2.69967 116.096 3.81379 117.313 6.25005C118.237 8.10056 118.55 10.5115 118.099 12.2965C117.627 14.1605 116.786 15.8557 115.604 17.3234C115.065 17.9925 114.485 18.5125 113.655 19.0707C112.903 19.577 112.44 19.8007 111.351 20.185C110.68 20.4214 110.512 20.4598 110.658 20.3433ZM48.3922 20.1188C47.6251 19.8643 47.0905 19.3619 46.8579 18.6768C46.6957 18.1991 46.7236 17.0386 46.9054 16.7047L47.0527 16.4341L47.1057 17.1064C47.2101 18.4316 47.5451 19.0883 48.3083 19.4636C48.6627 19.6379 48.8453 19.6772 49.2855 19.6742C49.9054 19.67 50.2462 19.5461 50.6719 19.1706C51.0502 18.8368 51.2467 18.3976 51.2489 17.8817C51.2509 17.3945 51.1249 17.0626 50.7946 16.6845C50.4862 16.3314 50.1084 16.1944 49.7702 16.3129C48.9642 16.5952 48.9835 17.4008 49.7962 17.4008C50.1282 17.4008 50.286 17.5564 50.2203 17.8191C50.1482 18.1083 49.7411 18.2158 49.3355 18.0526C48.2984 17.6356 48.2703 16.2719 49.2887 15.7765C49.8893 15.4843 50.5718 15.6516 51.1706 16.2377C51.4696 16.5304 51.5776 16.7098 51.7057 17.1267C52.1014 18.4145 51.7283 19.4367 50.6716 19.9595C50.2287 20.1787 50.0587 20.2189 49.4904 20.2392C48.9989 20.2567 48.7138 20.2254 48.3922 20.1188ZM149.232 20.0381C148.522 19.7735 148.097 19.3768 147.863 18.7591C147.666 18.2413 147.733 17.2624 148.001 16.7365C148.461 15.8337 149.407 15.3624 150.171 15.6557C151.051 15.9935 151.334 17.0142 150.726 17.6616C150.265 18.153 149.445 18.1913 149.379 17.7245C149.342 17.4651 149.478 17.3483 149.867 17.3042C150.057 17.2827 150.264 17.2217 150.327 17.1688C150.617 16.9276 150.327 16.382 149.83 16.2324C149.384 16.0981 148.897 16.355 148.597 16.8827C148.299 17.4065 148.248 17.7626 148.395 18.2735C148.632 19.0914 149.372 19.5971 150.327 19.5946C150.942 19.593 151.284 19.4699 151.703 19.0999C152.204 18.6583 152.434 17.9977 152.465 16.9177C152.474 16.5883 152.492 16.3185 152.505 16.3184C152.518 16.3182 152.595 16.4659 152.676 16.6467C152.861 17.0563 152.88 18.0485 152.713 18.6128C152.552 19.1598 152.102 19.6451 151.505 19.9166C150.857 20.2117 149.843 20.2659 149.232 20.0381ZM43.3244 15.8458C41.9822 15.6934 41.173 15.4005 40.3664 14.7748C40.1522 14.6087 39.4379 13.9222 38.7791 13.2493C37.6973 12.1444 37.4816 11.876 36.5546 10.4791C35.7347 9.24391 35.3716 8.77471 34.7514 8.14936C32.9459 6.32901 31.3613 5.81132 30.3246 6.70309C29.8745 7.09024 29.5542 7.56887 28.8649 8.88399C28.2802 9.99965 28.2418 10.1023 28.2432 10.5467C28.2469 11.7017 28.5326 12.7248 28.9948 13.239C29.9607 14.3133 31.7634 14.3199 32.6983 13.2525C33.4164 12.4326 33.4178 11.3114 32.7018 10.4939C32.3308 10.0703 32.0434 9.94412 31.5713 9.99756C31.2822 10.0303 31.159 10.0942 30.9569 10.3157C30.5003 10.8164 30.6809 11.1821 31.4357 11.285C31.8848 11.3462 32.0091 11.441 32.0112 11.7239C32.0144 12.1599 31.3216 12.3207 30.7427 12.0182C29.8211 11.5368 29.6912 10.3477 30.4819 9.6299C30.8703 9.27717 31.0686 9.20269 31.6134 9.20478C33.2807 9.21128 34.477 11.4344 33.7518 13.1787C33.445 13.9165 32.5276 14.5418 31.5006 14.7128C30.1262 14.9417 28.5943 14.2516 28.0917 13.1771C27.8552 12.6713 27.7352 11.7477 27.8295 11.159L27.9056 10.6844L27.4159 11.2158C26.7526 11.9359 26.2572 12.1812 25.4714 12.1788C25.0281 12.1774 24.8204 12.1376 24.5754 12.0074C24.1129 11.7614 23.714 11.2554 23.5686 10.7305L23.4454 10.2858H22.8905C22.0437 10.2858 21.8551 10.3432 21.7325 10.6381C21.6748 10.7767 21.5366 10.9621 21.4255 11.05C21.0661 11.3341 20.7748 11.3319 19.2848 11.034C17.7987 10.737 15.5025 10.4045 14.3308 10.3168C13.9384 10.2874 13.6316 10.249 13.649 10.2315C13.6665 10.2139 14.23 10.1491 14.9011 10.0873C16.7279 9.91929 18.1946 9.6944 19.2121 9.4265C20.7079 9.03263 20.8516 9.0126 21.183 9.15188C21.3443 9.21971 21.5324 9.3777 21.6063 9.50717C21.773 9.79981 22.0017 9.85016 23.069 9.82958C23.384 9.82355 23.4852 9.7913 23.5187 9.68643C23.8024 8.7993 24.2291 8.41664 24.947 8.40581C25.548 8.39669 26.0101 8.8778 26.0097 9.51242C26.0093 10.0984 25.452 10.5468 24.9584 10.3583C24.6958 10.2579 24.7636 10.1238 25.1781 9.92417C25.3703 9.83159 25.5486 9.70066 25.5743 9.63323C25.6394 9.46293 25.4872 9.15837 25.2898 9.06395C24.9715 8.91159 24.8769 8.90897 24.5759 9.04446C23.8 9.39356 23.7661 10.3156 24.5052 10.9677C24.8719 11.2912 25.1021 11.3795 25.5926 11.3846C26.4085 11.393 26.7994 11.0129 27.8224 9.2163C28.1536 8.63481 28.5978 7.89802 28.8097 7.579C30.0845 5.6592 31.4651 5.24119 33.3584 6.20172C34.6332 6.84841 35.7559 8.01325 37.4647 10.4623C38.677 12.1996 39.2466 12.9072 40.0418 13.6638C40.7822 14.3682 41.6847 14.8875 42.6349 15.156C43.5359 15.4106 45.1269 15.5179 46.2869 15.4022C47.3505 15.2961 47.656 15.3479 47.3104 15.5754C46.8326 15.89 44.8807 16.0225 43.3244 15.8458ZM153.014 15.7458C152.447 15.637 152.136 15.5116 152.136 15.3925C152.136 15.257 152.439 15.23 153.07 15.3095C154.235 15.4562 155.729 15.3796 156.803 15.118C157.576 14.9297 158.636 14.3887 159.251 13.8687C160.013 13.224 160.691 12.4081 161.971 10.5951C163.669 8.19074 164.309 7.45898 165.449 6.61732C166.02 6.19514 166.327 6.02771 166.872 5.84117C168.669 5.22596 169.843 5.88015 171.251 8.28223C172.911 11.1157 173.084 11.3066 173.992 11.3066C174.871 11.3066 175.606 10.6308 175.606 9.82371C175.606 9.57708 175.553 9.45226 175.356 9.23912C175.026 8.88144 174.699 8.78917 174.362 8.95877C174.056 9.1129 173.913 9.44127 174.069 9.63044C174.127 9.70043 174.306 9.81064 174.467 9.87544C174.8 10.0092 174.844 10.1732 174.58 10.2939C174.445 10.3559 174.333 10.3475 174.125 10.26C173.717 10.0887 173.579 9.83105 173.622 9.31645C173.682 8.58392 174.209 8.20876 174.954 8.3683C175.421 8.46845 175.879 8.91252 176.005 9.38838C176.095 9.7268 176.096 9.72765 176.493 9.76075C177.138 9.8145 177.765 9.71776 177.886 9.54591C178.287 8.97664 178.604 8.89141 179.454 9.12404C181.116 9.5787 182.402 9.79672 184.679 10.0099C185.373 10.0748 185.952 10.1392 185.965 10.1529C185.979 10.1666 185.515 10.221 184.934 10.2736C183.539 10.4002 181.484 10.7032 180.339 10.9515C179.025 11.2363 178.689 11.2599 178.337 11.092C178.133 10.995 178.008 10.8641 177.922 10.6596C177.767 10.2894 177.55 10.2085 176.711 10.2085H176.068L176.066 10.4211C176.062 10.9218 175.567 11.6499 175.039 11.9308C174.563 12.1837 173.712 12.1704 173.139 11.9011C172.71 11.6994 172.261 11.3148 171.906 10.8465L171.716 10.5951L171.746 11.4035C171.786 12.4818 171.607 13.1109 171.099 13.6788C170.013 14.892 167.745 15.014 166.443 13.9292C166.054 13.6048 165.673 12.85 165.625 12.3095C165.573 11.7209 165.707 11.0452 165.991 10.4618C166.375 9.67406 167.181 9.13077 167.971 9.12744C168.828 9.12388 169.421 9.59788 169.613 10.4405C169.75 11.0418 169.295 11.7795 168.628 12.0352C168.315 12.1555 168.245 12.158 167.968 12.0591C167.612 11.9326 167.494 11.7142 167.631 11.4377C167.707 11.2854 167.801 11.2441 168.162 11.2048C168.819 11.1336 169.025 10.8852 168.796 10.4409C168.529 9.92131 167.77 9.73523 167.246 10.0607C166.729 10.382 166.372 11.0868 166.372 11.7881C166.372 12.3981 166.515 12.7505 166.956 13.2243C167.763 14.0913 169.182 14.2249 170.189 13.5288C170.911 13.0295 171.225 12.272 171.278 10.9031L171.316 9.93507L170.676 8.71779C169.892 7.22705 169.459 6.66481 168.872 6.3765C168.501 6.19398 168.379 6.17148 167.951 6.20597C167.141 6.27132 166.284 6.73425 165.179 7.70298C164.465 8.32817 164.075 8.82498 162.907 10.5951C162.022 11.9369 161.879 12.11 160.609 13.3793C158.892 15.0941 158.331 15.4368 156.805 15.7035C156.025 15.84 153.642 15.8666 153.014 15.7458ZM48.8083 15.1231C48.9488 14.8833 49.4778 14.2476 49.984 13.7104C51.052 12.577 51.3518 12.1918 51.8664 11.2912C52.073 10.9296 52.4016 10.4772 52.5965 10.2858L52.9509 9.93778L52.7241 10.4411C52.5993 10.7179 52.3864 11.3269 52.2509 11.7945C51.9665 12.7762 51.9475 12.8185 51.5467 13.3595C51.1084 13.9511 50.221 14.6773 49.3962 15.1193C48.9995 15.332 48.6473 15.5179 48.6138 15.5326C48.5803 15.5471 48.6678 15.3629 48.8083 15.1231ZM150.102 14.9889C149.19 14.4764 148.245 13.6498 147.836 13.0053C147.71 12.8069 147.481 12.2138 147.328 11.6874C147.175 11.1609 146.962 10.5572 146.856 10.3457C146.749 10.1341 146.676 9.94644 146.694 9.9285C146.77 9.8524 147.367 10.6137 147.767 11.2969C148.311 12.2264 148.644 12.649 149.676 13.7206C150.376 14.4474 151.051 15.3456 150.964 15.4337C150.95 15.4474 150.562 15.2473 150.102 14.9889ZM43.6409 14.8839C41.3272 14.3794 39.2253 12.7343 38.323 10.7217C37.7296 9.39797 37.8268 8.13227 38.6422 6.56527L39.0416 5.79786L38.8447 5.58635C38.1618 4.85265 38.2158 3.77519 38.9688 3.11072C39.5808 2.57067 40.628 2.72388 40.9784 3.40475C41.1057 3.65223 41.0651 3.8349 40.8579 3.94634C40.6038 4.083 40.4007 4.02507 40.0715 3.72222C39.8925 3.55765 39.6736 3.40042 39.5851 3.37289C39.2021 3.25371 38.7856 3.94046 38.8928 4.51454C38.9529 4.83657 39.3879 5.33624 39.6082 5.33624C39.6932 5.33624 39.7965 5.2555 39.8431 5.15279C40.0326 4.73463 40.9534 4.51492 41.5196 4.75273C41.8576 4.89464 41.9115 5.03826 41.7944 5.48349C41.6789 5.92245 41.4377 6.17735 41.0559 6.26389C40.7814 6.32615 40.1415 6.26413 39.8426 6.14626C39.7329 6.10303 39.6521 6.21153 39.4006 6.73951C38.9528 7.67993 38.7581 8.5294 38.8021 9.35157C38.8834 10.8736 39.5968 11.9326 41.4322 13.2558C42.6237 14.1149 43.794 14.5403 44.9799 14.5453C45.8226 14.5488 46.2015 14.4682 47.2176 14.069C48.8697 13.4198 49.6723 12.6054 50.7082 10.5267C51.5121 8.91361 52.5049 7.491 53.5669 6.43024C54.1435 5.85424 54.9369 5.15566 54.8531 5.29757C54.29 6.25221 52.2565 9.5108 51.8851 10.0538C51.0199 11.3188 50.1644 12.3799 49.3268 13.227C48.6489 13.9126 48.4134 14.0966 47.8647 14.3701C46.915 14.8434 46.1945 15.0047 45.0628 14.9972C44.5511 14.9938 43.9113 14.9428 43.6409 14.8839ZM153.827 14.9228C152.348 14.7879 151.025 14.0932 149.981 12.9031C148.585 11.3111 147.732 10.1215 146.249 7.69501C145.833 7.01445 145.325 6.18787 145.12 5.85826C144.915 5.52865 144.78 5.2589 144.82 5.2589C144.967 5.2589 146.826 7.17585 147.273 7.79006C147.857 8.59057 148.428 9.53934 148.882 10.46C149.753 12.2301 150.554 13.1333 151.769 13.7177C153.137 14.3751 154.042 14.578 155.074 14.4579C156.193 14.3275 157.28 13.8459 158.45 12.9615C160.885 11.1205 161.407 9.17145 160.156 6.59443C159.955 6.17929 159.85 6.04023 159.76 6.06854C158.79 6.3751 158.107 6.22229 157.878 5.64698C157.694 5.18419 157.716 4.9006 157.947 4.7484C158.431 4.42977 159.325 4.57501 159.71 5.0347C159.864 5.21807 159.941 5.25349 160.101 5.2132C160.602 5.08675 160.857 4.12484 160.531 3.58789C160.279 3.17158 159.934 3.20971 159.437 3.70907C159.164 3.98424 158.844 4.0178 158.641 3.7926C158.35 3.46941 158.775 2.8463 159.354 2.74809C160.106 2.62033 160.674 2.89704 161.005 3.55208C161.359 4.25492 161.275 4.93416 160.767 5.47885L160.525 5.73746L160.829 6.25221C161.513 7.4108 161.783 8.65406 161.571 9.65983C161.431 10.3218 161.128 11.0118 160.694 11.653C160.318 12.2086 159.259 13.2384 158.606 13.6841C157.635 14.3468 156.375 14.8113 155.329 14.8919C155.033 14.9147 154.704 14.9429 154.598 14.9545C154.492 14.9661 154.146 14.9518 153.827 14.9228ZM45.8034 13.3151C44.6274 12.8931 43.7095 11.7994 43.4844 10.5517C43.2668 9.34507 43.8458 8.31409 45.0712 7.72633C46.6426 6.97261 48.4848 7.78805 48.4786 9.23456C48.4747 10.1443 47.9064 10.7498 47.0567 10.7498C46.4551 10.7498 46.0217 10.4848 45.8114 9.98843C45.7149 9.7606 45.7163 9.70762 45.8231 9.54375C46.0108 9.25598 46.3357 9.29364 46.5934 9.63323C46.8643 9.99037 47.1328 10.0975 47.368 9.94257C47.7837 9.6688 47.7692 8.89512 47.3407 8.48253C46.5945 7.76407 45.0005 8.17867 44.4639 9.23069C44.2171 9.71458 44.1886 10.5164 44.3983 11.0748C44.7221 11.9369 45.5796 12.6292 46.4521 12.733C47.1225 12.8129 48.1444 12.4129 49.055 11.7144L49.4061 11.445L49.2893 11.7355C49.2251 11.8952 48.9668 12.2232 48.7153 12.4645C47.8262 13.3175 46.7151 13.6421 45.8034 13.3151ZM152.25 13.2449C151.402 12.9399 150.537 12.2586 150.323 11.7288C150.19 11.3977 150.186 11.3969 150.756 11.8063C150.949 11.9451 151.382 12.1897 151.717 12.3498C152.253 12.6054 152.397 12.6408 152.904 12.6415C153.618 12.6425 154.054 12.4606 154.562 11.9505C155.091 11.4191 155.33 10.8504 155.327 10.1293C155.326 9.62634 155.294 9.49023 155.09 9.12396C154.309 7.71914 152.11 7.66817 151.926 9.05057C151.875 9.4323 152.012 9.77537 152.261 9.88944C152.5 9.99918 152.703 9.90452 153.007 9.5405C153.364 9.11267 153.829 9.20896 153.829 9.71079C153.829 10.2186 153.211 10.6725 152.52 10.6725C151.847 10.6725 151.342 10.2675 151.166 9.58675C150.786 8.11278 152.464 6.93162 154.132 7.49935C155.521 7.97188 156.197 8.89195 156.122 10.2046C156.076 10.9962 155.782 11.6301 155.14 12.32C154.286 13.2373 153.197 13.5857 152.25 13.2449ZM59.2905 12.5961C58.5846 11.9421 58.2153 10.8243 58.2209 9.35775C58.2249 8.30729 58.3565 7.79377 58.7462 7.30833L58.9325 7.07631L58.8237 7.49919C58.6191 8.29491 58.7337 9.4098 59.1281 10.4606C59.3701 11.1054 59.6422 11.5041 60.2475 12.1008C60.5051 12.3546 60.7158 12.5886 60.7158 12.6208C60.7158 12.738 60.2537 12.9152 59.9483 12.9152C59.6881 12.9152 59.5766 12.8611 59.2905 12.5961ZM139.021 12.6877L138.796 12.5385L139.274 12.0949C140.185 11.2482 140.645 10.2848 140.83 8.8365C140.901 8.28076 140.896 8.06182 140.801 7.61767C140.738 7.31993 140.693 7.06881 140.701 7.05961C140.752 7.00161 141.159 7.76755 141.264 8.12036C141.445 8.72738 141.424 9.99524 141.221 10.7617C140.963 11.7376 140.519 12.4801 140.049 12.7247C139.747 12.8818 139.289 12.8653 139.021 12.6877ZM61.4304 11.9523C60.3257 11.6054 59.5331 10.6207 59.3339 9.34801C59.1022 7.86639 59.982 6.0383 61.2731 5.31907C62.2491 4.77532 63.3342 4.62714 64.2912 4.90671C64.8083 5.05775 64.7817 5.18133 64.2318 5.18218C62.7431 5.18435 61.9838 5.46786 61.1544 6.33117C60.426 7.08954 60.2377 7.51056 60.1934 8.48021C60.1286 9.89996 60.5296 10.7217 61.5112 11.181C61.9982 11.409 62.4398 11.4197 62.7789 11.2118C63.1538 10.9821 63.2826 10.6064 63.2337 9.88511C63.19 9.23772 63.2437 9.14345 63.5638 9.3064C64.0789 9.56865 64.2349 10.4418 63.8866 11.1127C63.4842 11.8881 62.4027 12.2577 61.4304 11.9523ZM99.4384 11.4298C99.2668 11.0735 98.9723 10.5716 98.784 10.3146C98.2844 9.6326 98.2628 9.57901 98.3542 9.24662C98.4146 9.02683 98.4951 8.93271 98.6948 8.84888C98.8387 8.78848 99.0397 8.73906 99.1416 8.73906C99.2867 8.73906 99.3371 8.6877 99.374 8.50256C99.4186 8.27821 99.4378 8.2673 99.7485 8.28988C100.019 8.30953 100.094 8.35106 100.177 8.52638C100.258 8.6966 100.33 8.73906 100.539 8.73906C100.883 8.73906 101.186 9.00734 101.238 9.35775C101.273 9.59402 101.225 9.70221 100.857 10.2085C100.625 10.5275 100.281 11.0786 100.093 11.4331L99.7503 12.0776L99.4384 11.4298ZM136.822 11.9195C135.981 11.6424 135.514 11.0252 135.514 10.1916C135.515 9.69896 135.71 9.33478 136.034 9.2211C136.374 9.10223 136.431 9.17995 136.355 9.65805C136.264 10.2344 136.385 10.7477 136.678 11.0293C136.883 11.2266 136.965 11.2523 137.386 11.2513C137.763 11.2503 137.937 11.2066 138.215 11.0429C138.705 10.7543 139.086 10.3033 139.255 9.81296C139.446 9.25729 139.449 8.01441 139.26 7.45689C138.984 6.64253 137.839 5.53376 137.031 5.30028C136.81 5.23647 136.257 5.15751 135.801 5.12488C135.344 5.09224 134.97 5.03084 134.968 4.98822C134.955 4.74979 136.613 4.61438 137.298 4.79782C138.295 5.0644 139.287 5.8646 139.773 6.79257C140.775 8.70889 140.218 10.9194 138.532 11.7243C138.065 11.9471 137.204 12.0454 136.822 11.9195ZM0 0.348017V1.90735e-06H99.5H199V0.348017V0.696032H99.5H0V0.348017Z\" fill=\"black\" fill-opacity=\"0.47\">");
const M5 = Z("<svg width=\"12.22vh\" height=\"3.33vh\" viewBox=\"0 0 132 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.4864 0.0938198C56.1802 0.225717 56.1253 0.352827 56.0682 1.06211C55.9587 2.42002 55.6336 3.58795 55.0498 4.72158C54.4883 5.81184 53.6532 6.45639 52.4294 6.74383L51.9 6.86816L51.4385 6.66574C50.834 6.40059 50.2605 6.03841 49.9957 5.75461C49.7666 5.50889 49.4367 4.90463 49.2966 4.47372C49.0531 3.72492 48.177 3.75743 48.0334 4.52066C47.9463 4.98287 48.0388 6.06706 48.204 6.52191C48.5555 7.48913 49.3291 8.40827 50.1575 8.84283C50.4111 8.9758 50.6279 9.09183 50.6393 9.10062C50.6508 9.10948 50.7235 9.53068 50.8008 10.0367C50.9674 11.1261 51.2139 12.1444 51.5616 13.1794C51.7008 13.5938 51.7993 13.9482 51.7804 13.9669C51.7184 14.0288 50.8866 13.655 50.463 13.375C50.2344 13.2239 49.8047 12.855 49.5083 12.5553C48.9025 11.943 48.7477 11.8655 48.4437 12.0221C48.0492 12.2254 48.0437 12.5819 48.4232 13.334C49.2776 15.0269 50.8905 16.2703 52.7192 16.6457L53.1705 16.7383L53.6506 17.42C53.9145 17.795 54.5223 18.4928 55.0011 18.9707L55.8718 19.8397L55.5398 19.9353C55.3088 20.0018 54.7425 20.0309 53.6779 20.0309C52.1565 20.0309 52.1471 20.0318 52.0107 20.1996C51.8394 20.41 51.8343 20.7186 51.9989 20.9149C52.0679 20.9973 52.3664 21.1632 52.6622 21.2836C54.371 21.9794 56.2279 22.0931 57.9173 21.6052L58.5192 21.4314L58.9431 21.6018C59.9098 21.9903 61.5284 22.353 62.2954 22.353C62.7857 22.353 63.212 22.0992 63.4116 21.6884C63.6645 21.1678 63.5917 20.719 63.1862 20.3002C62.9296 20.035 62.7089 19.9547 62.056 19.8886C59.6 19.6402 57.0524 18.0711 55.6054 15.9155C54.5979 14.4149 53.9304 12.7019 53.3836 10.2145C53.2629 9.66558 53.1642 9.20237 53.1642 9.18515C53.1642 9.16793 53.3659 9.08119 53.6124 8.99244C55.7539 8.22114 57.1294 6.26026 57.4723 3.49013C57.5652 2.73934 57.5177 0.982375 57.3925 0.54217C57.2742 0.126044 56.8727 -0.0726593 56.4864 0.0938198ZM74.9636 0.114255C74.6206 0.284949 74.5372 0.580467 74.4858 1.80705C74.3363 5.37542 75.7941 8.0583 78.3909 8.99366C78.8342 9.15328 78.8416 9.16028 78.7975 9.3777C78.7728 9.49946 78.671 9.96888 78.5715 10.4208C77.5849 14.8982 75.7998 17.5566 72.7764 19.0512C71.759 19.5541 71.2035 19.7044 69.3867 19.9681C69.0993 20.0099 68.6658 20.3765 68.535 20.6883C68.306 21.2344 68.5314 21.8767 69.0604 22.1856C69.3583 22.3595 69.4253 22.3704 69.9677 22.332C70.7965 22.2734 71.5603 22.1063 72.6158 21.7526L73.5307 21.4459L74.1216 21.6173C75.8215 22.1102 77.8386 21.9612 79.4937 21.2205C79.7569 21.1027 80.007 20.9416 80.0494 20.8627C80.1659 20.6459 80.1424 20.3877 79.9893 20.1996C79.8529 20.0318 79.8435 20.0309 78.3221 20.0309C77.2575 20.0309 76.6912 20.0018 76.4602 19.9353L76.1282 19.8397L76.9989 18.9707C77.4777 18.4928 78.0861 17.794 78.3509 17.418L78.8324 16.7343L79.247 16.6575C80.6279 16.4015 82.2146 15.391 83.0267 14.2501C83.6553 13.3672 83.9513 12.6106 83.8109 12.246C83.7453 12.0758 83.373 11.9058 83.1885 11.9618C83.1018 11.9881 82.7887 12.2556 82.4929 12.5562C82.1972 12.8568 81.7618 13.2296 81.5255 13.3846C81.0839 13.6744 80.285 14.032 80.2211 13.9685C80.2014 13.9489 80.2992 13.5938 80.4384 13.1794C80.7861 12.1444 81.0326 11.1261 81.1992 10.0367C81.2765 9.53068 81.3492 9.10948 81.3607 9.10062C81.3721 9.09183 81.5889 8.9758 81.8425 8.84283C82.6709 8.40827 83.4445 7.48913 83.796 6.52191C83.9612 6.06706 84.0537 4.98287 83.9666 4.52066C83.823 3.75743 82.9469 3.72492 82.7034 4.47372C82.5633 4.90463 82.2334 5.50889 82.0043 5.75461C81.7395 6.03841 81.166 6.40059 80.5615 6.66574L80.1 6.86816L79.5706 6.74383C78.8274 6.56921 78.1307 6.2016 77.6665 5.7391C76.8181 4.89377 76.1317 3.10159 75.9625 1.28997C75.9199 0.83333 75.8525 0.399341 75.8129 0.325533C75.7732 0.251725 75.6315 0.145836 75.4979 0.0901758C75.2032 -0.0325042 75.2637 -0.0352193 74.9636 0.114255ZM65.3696 14.1541C64.049 15.6241 62.2562 17.0672 60.7762 17.852C60.3803 18.0619 60.3365 18.1047 60.4402 18.1803C60.625 18.3149 61.6292 18.5648 62.2872 18.6399C63.016 18.723 63.2713 18.7943 63.6657 19.0246C64.0444 19.2457 64.3617 19.5993 64.6194 20.0871C64.7937 20.4172 64.8162 20.5368 64.8165 21.1383C64.8167 21.7424 64.7946 21.8604 64.6149 22.2101C64.339 22.747 63.9142 23.1605 63.391 23.4014C62.9885 23.5867 62.8875 23.6027 62.1636 23.5951C61.254 23.5856 60.2586 23.3994 59.1647 23.0343L58.4414 22.7929L57.7927 22.9345C57.4359 23.0123 57.0604 23.0981 56.9582 23.1253L56.7724 23.1747L57.4009 25.7826C57.7465 27.217 58.1112 28.5942 58.2112 28.8432C58.6812 30.0131 59.3888 31.0564 60.2927 31.9118C60.8965 32.4833 65.8019 36 65.9953 36C66.1527 36 66.1206 36.0216 68.9171 34.0232C70.1721 33.1265 71.4352 32.169 71.7241 31.8957C72.6692 31.0017 73.4775 29.758 73.8861 28.5692C73.974 28.3137 74.3115 26.9955 74.6362 25.6397L75.2266 23.1747L75.0413 23.1253C74.9394 23.0981 74.5633 23.0121 74.2055 22.934L73.5551 22.7921L72.8431 23.0334C71.7598 23.4006 70.7549 23.5862 69.8005 23.5954C69.0673 23.6025 68.938 23.5846 68.6331 23.4338C68.1203 23.18 67.6122 22.6878 67.3846 22.2245C67.2107 21.8707 67.1843 21.7324 67.1838 21.1726C67.1833 20.5875 67.2049 20.484 67.4193 20.0502C67.6636 19.5556 68.0447 19.1638 68.5178 18.9207C68.7601 18.7963 68.9739 18.7502 70.1591 18.5675C70.7413 18.4777 71.665 18.2082 71.665 18.1281C71.665 18.0951 71.4707 17.9703 71.2333 17.8509C69.8658 17.1631 68.041 15.7003 66.6662 14.1898C66.0731 13.5383 65.9265 13.5343 65.3696 14.1541ZM60.6675 26.6795C60.7665 26.7416 60.8769 26.9595 60.979 27.2948C61.2809 28.285 61.875 29.2161 62.5812 29.806C62.7854 29.9765 63.6382 30.6062 64.4765 31.2054L66.0006 32.2947L67.5241 31.206C69.3892 29.8733 69.6987 29.617 70.1252 29.0515C70.5479 28.4913 70.7776 28.0429 71.0131 27.3188C71.1804 26.8041 71.2251 26.7344 71.4622 26.6189C71.698 26.504 71.7512 26.5013 71.9698 26.5922C72.3169 26.7368 72.4298 27.0343 72.307 27.4804C72.0054 28.5759 71.3848 29.6415 70.5911 30.4269C70.2651 30.7493 69.2936 31.5028 68.1519 32.3187C66.5386 33.4715 66.2166 33.6744 66.0017 33.6729C65.7897 33.6714 65.4428 33.4531 63.8487 32.3191C61.2918 30.5 60.5639 29.7434 59.9803 28.2994C59.6491 27.4798 59.5858 27.1756 59.6929 26.9181C59.8511 26.5373 60.2752 26.4335 60.6675 26.6795Z\" fill=\"black\" fill-opacity=\"0.47\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.71465 8.05212C4.54458 8.1254 4.51406 8.19601 4.48231 8.59006C4.42148 9.34446 4.24089 9.99331 3.91657 10.6231C3.6046 11.2288 3.14065 11.5869 2.46077 11.7466L2.16665 11.8156L1.91029 11.7032C1.57445 11.5559 1.25583 11.3547 1.10875 11.197C0.981424 11.0605 0.798169 10.7248 0.720326 10.4854C0.585076 10.0694 0.0983344 10.0875 0.0185388 10.5115C-0.0298246 10.7683 0.0215665 11.3706 0.113353 11.6233C0.3086 12.1606 0.738372 12.6713 1.19862 12.9127C1.33949 12.9866 1.45996 13.051 1.46629 13.0559C1.47267 13.0608 1.51306 13.2948 1.55601 13.5759C1.64855 14.1812 1.78552 14.7469 1.97865 15.3219C2.05598 15.5521 2.11071 15.749 2.10024 15.7594C2.06578 15.7938 1.60369 15.5861 1.36833 15.4305C1.24133 15.3466 1.00262 15.1417 0.837928 14.9752C0.501416 14.635 0.415405 14.5919 0.246492 14.6789C0.027343 14.7919 0.0242754 14.9899 0.235138 15.4078C0.709769 16.3483 1.60585 17.0391 2.62176 17.2476L2.8725 17.2991L3.13921 17.6778C3.28586 17.8861 3.62352 18.2738 3.88952 18.5393L4.3732 19.022L4.18879 19.0751C4.06047 19.1121 3.74583 19.1283 3.15439 19.1283C2.30919 19.1283 2.30397 19.1288 2.22816 19.222C2.13302 19.3389 2.13019 19.5104 2.22162 19.6194C2.25995 19.6652 2.42579 19.7573 2.59012 19.8242C3.53943 20.2108 4.57107 20.2739 5.50962 20.0029L5.84398 19.9063L6.0795 20.001C6.61656 20.2168 7.51578 20.4183 7.94189 20.4183C8.2143 20.4183 8.45114 20.2773 8.56201 20.0491C8.70252 19.7599 8.66204 19.5106 8.4368 19.2779C8.29422 19.1306 8.17163 19.0859 7.80891 19.0492C6.44446 18.9112 5.02909 18.0395 4.2252 16.842C3.66551 16.0083 3.29466 15.0566 2.9909 13.6747C2.92385 13.3698 2.86899 13.1124 2.86899 13.1029C2.86899 13.0933 2.98106 13.0451 3.11798 12.9958C4.3077 12.5673 5.07192 11.4779 5.26238 9.93896C5.31401 9.52185 5.2876 8.54576 5.21808 8.30121C5.15235 8.07002 4.92926 7.95963 4.71465 8.05212ZM14.9798 8.06347C14.7892 8.15831 14.7429 8.32248 14.7144 9.00392C14.6313 10.9863 15.4412 12.4768 16.8839 12.9965C17.1301 13.0852 17.1342 13.089 17.1097 13.2098C17.096 13.2775 17.0395 13.5383 16.9842 13.7893C16.4361 16.2768 15.4443 17.7537 13.7647 18.584C13.1994 18.8634 12.8908 18.9469 11.8815 19.0934C11.7218 19.1166 11.481 19.3203 11.4083 19.4935C11.2811 19.7969 11.4063 20.1537 11.7002 20.3253C11.8657 20.4219 11.9029 20.428 12.2043 20.4067C12.6647 20.3741 13.089 20.2813 13.6754 20.0848L14.1837 19.9144L14.512 20.0096C15.4564 20.2834 16.577 20.2007 17.4965 19.7892C17.6427 19.7237 17.7817 19.6342 17.8052 19.5904C17.8699 19.4699 17.8569 19.3265 17.7718 19.222C17.696 19.1288 17.6908 19.1283 16.8456 19.1283C16.2542 19.1283 15.9395 19.1121 15.8112 19.0751L15.6268 19.022L16.1105 18.5393C16.3765 18.2738 16.7145 17.8856 16.8616 17.6767L17.1291 17.2968L17.3594 17.2542C18.1266 17.112 19.0081 16.5505 19.4593 15.9167C19.8085 15.4262 19.9729 15.0059 19.8949 14.8033C19.8585 14.7088 19.6517 14.6143 19.5492 14.6454C19.501 14.66 19.3271 14.8087 19.1628 14.9756C18.9984 15.1426 18.7566 15.3498 18.6253 15.4359C18.38 15.5969 17.9361 15.7956 17.9006 15.7603C17.8897 15.7494 17.944 15.5521 18.0214 15.3219C18.2145 14.7469 18.3514 14.1812 18.444 13.5759C18.4869 13.2948 18.5273 13.0608 18.5337 13.0559C18.54 13.051 18.6605 12.9866 18.8014 12.9127C19.2616 12.6713 19.6914 12.1606 19.8866 11.6233C19.9784 11.3706 20.0298 10.7683 19.9815 10.5115C19.9017 10.0875 19.4149 10.0694 19.2797 10.4854C19.2018 10.7248 19.0186 11.0605 18.8913 11.197C18.7442 11.3547 18.4255 11.5559 18.0897 11.7032L17.8334 11.8156L17.5392 11.7466C17.1263 11.6496 16.7393 11.4453 16.4814 11.1884C16.01 10.7188 15.6287 9.7231 15.5347 8.71665C15.511 8.46296 15.4736 8.22186 15.4516 8.18085C15.4296 8.13985 15.3508 8.08102 15.2766 8.0501C15.1129 7.98194 15.1465 7.98043 14.9798 8.06347ZM9.64978 15.8634C8.91609 16.6801 7.92014 17.4818 7.09788 17.9178C6.87793 18.0344 6.85359 18.0582 6.91124 18.1002C7.0139 18.175 7.57175 18.3138 7.93731 18.3555C8.34222 18.4017 8.48408 18.4413 8.70315 18.5692C8.91354 18.6921 9.08986 18.8885 9.233 19.1595C9.32984 19.3429 9.34231 19.4093 9.34247 19.7435C9.34263 20.0791 9.33032 20.1447 9.23049 20.3389C9.07723 20.6372 8.84123 20.8669 8.55057 21.0008C8.32692 21.1037 8.27083 21.1126 7.86866 21.1084C7.36336 21.1031 6.81033 20.9997 6.20264 20.7969L5.80075 20.6627L5.44038 20.7414C5.24218 20.7846 5.03355 20.8323 4.97678 20.8474L4.87356 20.8748L5.2227 22.3237C5.41472 23.1205 5.61734 23.8857 5.67287 24.024C5.93401 24.6739 6.32713 25.2536 6.82925 25.7288C7.16473 26.0463 9.88997 28 9.99741 28C10.0848 28 10.067 28.012 11.6206 26.9018C12.3178 26.4036 13.0196 25.8717 13.1801 25.7199C13.7051 25.2232 14.1542 24.5322 14.3812 23.8718C14.43 23.7298 14.6175 22.9975 14.7979 22.2443L15.1259 20.8748L15.0229 20.8474C14.9663 20.8323 14.7574 20.7845 14.5586 20.7411L14.1973 20.6623L13.8017 20.7963C13.1999 21.0003 12.6416 21.1035 12.1114 21.1086C11.704 21.1125 11.6322 21.1025 11.4629 21.0188C11.178 20.8778 10.8957 20.6043 10.7692 20.347C10.6726 20.1504 10.658 20.0735 10.6577 19.7625C10.6574 19.4375 10.6694 19.38 10.7885 19.139C10.9242 18.8642 11.1359 18.6466 11.3988 18.5115C11.5334 18.4424 11.6522 18.4168 12.3106 18.3153C12.6341 18.2654 13.1472 18.1156 13.1472 18.0711C13.1472 18.0528 13.0393 17.9835 12.9074 17.9172C12.1477 17.535 11.1339 16.7224 10.3701 15.8832C10.0406 15.5213 9.95917 15.519 9.64978 15.8634ZM7.03752 22.822C7.0925 22.8565 7.15381 22.9775 7.21058 23.1638C7.3783 23.7139 7.70832 24.2312 8.10068 24.5589C8.2141 24.6536 8.68789 25.0035 9.1536 25.3363L10.0003 25.9415L10.8467 25.3367C11.8829 24.5963 12.0548 24.4539 12.2918 24.1397C12.5266 23.8285 12.6542 23.5794 12.785 23.1771C12.878 22.8912 12.9028 22.8524 13.0346 22.7883C13.1656 22.7245 13.1951 22.7229 13.3166 22.7734C13.5094 22.8538 13.5721 23.019 13.5039 23.2669C13.3364 23.8755 12.9916 24.4675 12.5506 24.9038C12.3695 25.083 11.8298 25.5016 11.1955 25.9548C10.2992 26.5953 10.1203 26.708 10.001 26.7071C9.88319 26.7063 9.69042 26.5851 8.80486 25.955C7.38435 24.9444 6.97992 24.5241 6.65572 23.7219C6.47174 23.2665 6.43657 23.0976 6.49605 22.9545C6.58397 22.7429 6.81953 22.6853 7.03752 22.822Z\" fill=\"black\" fill-opacity=\"0.47\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M116.715 8.05212C116.545 8.1254 116.514 8.19601 116.482 8.59006C116.421 9.34446 116.241 9.99331 115.917 10.6231C115.605 11.2288 115.141 11.5869 114.461 11.7466L114.167 11.8156L113.91 11.7032C113.574 11.5559 113.256 11.3547 113.109 11.197C112.981 11.0605 112.798 10.7248 112.72 10.4854C112.585 10.0694 112.098 10.0875 112.019 10.5115C111.97 10.7683 112.022 11.3706 112.113 11.6233C112.309 12.1606 112.738 12.6713 113.199 12.9127C113.339 12.9866 113.46 13.051 113.466 13.0559C113.473 13.0608 113.513 13.2948 113.556 13.5759C113.649 14.1812 113.786 14.7469 113.979 15.3219C114.056 15.5521 114.111 15.749 114.1 15.7594C114.066 15.7938 113.604 15.5861 113.368 15.4305C113.241 15.3466 113.003 15.1417 112.838 14.9752C112.501 14.635 112.415 14.5919 112.246 14.6789C112.027 14.7919 112.024 14.9899 112.235 15.4078C112.71 16.3483 113.606 17.0391 114.622 17.2476L114.872 17.2991L115.139 17.6778C115.286 17.8861 115.624 18.2738 115.89 18.5393L116.373 19.022L116.189 19.0751C116.06 19.1121 115.746 19.1283 115.154 19.1283C114.309 19.1283 114.304 19.1288 114.228 19.222C114.133 19.3389 114.13 19.5104 114.222 19.6194C114.26 19.6652 114.426 19.7573 114.59 19.8242C115.539 20.2108 116.571 20.2739 117.51 20.0029L117.844 19.9063L118.079 20.001C118.617 20.2168 119.516 20.4183 119.942 20.4183C120.214 20.4183 120.451 20.2773 120.562 20.0491C120.703 19.7599 120.662 19.5106 120.437 19.2779C120.294 19.1306 120.172 19.0859 119.809 19.0492C118.444 18.9112 117.029 18.0395 116.225 16.842C115.666 16.0083 115.295 15.0566 114.991 13.6747C114.924 13.3698 114.869 13.1124 114.869 13.1029C114.869 13.0933 114.981 13.0451 115.118 12.9958C116.308 12.5673 117.072 11.4779 117.262 9.93896C117.314 9.52185 117.288 8.54576 117.218 8.30121C117.152 8.07002 116.929 7.95963 116.715 8.05212ZM126.98 8.06347C126.789 8.15831 126.743 8.32248 126.714 9.00392C126.631 10.9863 127.441 12.4768 128.884 12.9965C129.13 13.0852 129.134 13.089 129.11 13.2098C129.096 13.2775 129.039 13.5383 128.984 13.7893C128.436 16.2768 127.444 17.7537 125.765 18.584C125.199 18.8634 124.891 18.9469 123.882 19.0934C123.722 19.1166 123.481 19.3203 123.408 19.4935C123.281 19.7969 123.406 20.1537 123.7 20.3253C123.866 20.4219 123.903 20.428 124.204 20.4067C124.665 20.3741 125.089 20.2813 125.675 20.0848L126.184 19.9144L126.512 20.0096C127.456 20.2834 128.577 20.2007 129.496 19.7892C129.643 19.7237 129.782 19.6342 129.805 19.5904C129.87 19.4699 129.857 19.3265 129.772 19.222C129.696 19.1288 129.691 19.1283 128.846 19.1283C128.254 19.1283 127.94 19.1121 127.811 19.0751L127.627 19.022L128.11 18.5393C128.376 18.2738 128.715 17.8856 128.862 17.6767L129.129 17.2968L129.359 17.2542C130.127 17.112 131.008 16.5505 131.459 15.9167C131.808 15.4262 131.973 15.0059 131.895 14.8033C131.859 14.7088 131.652 14.6143 131.549 14.6454C131.501 14.66 131.327 14.8087 131.163 14.9756C130.998 15.1426 130.757 15.3498 130.625 15.4359C130.38 15.5969 129.936 15.7956 129.901 15.7603C129.89 15.7494 129.944 15.5521 130.021 15.3219C130.214 14.7469 130.351 14.1812 130.444 13.5759C130.487 13.2948 130.527 13.0608 130.534 13.0559C130.54 13.051 130.661 12.9866 130.801 12.9127C131.262 12.6713 131.691 12.1606 131.887 11.6233C131.978 11.3706 132.03 10.7683 131.981 10.5115C131.902 10.0875 131.415 10.0694 131.28 10.4854C131.202 10.7248 131.019 11.0605 130.891 11.197C130.744 11.3547 130.426 11.5559 130.09 11.7032L129.833 11.8156L129.539 11.7466C129.126 11.6496 128.739 11.4453 128.481 11.1884C128.01 10.7188 127.629 9.7231 127.535 8.71665C127.511 8.46296 127.474 8.22186 127.452 8.18085C127.43 8.13985 127.351 8.08102 127.277 8.0501C127.113 7.98194 127.147 7.98043 126.98 8.06347ZM121.65 15.8634C120.916 16.6801 119.92 17.4818 119.098 17.9178C118.878 18.0344 118.854 18.0582 118.911 18.1002C119.014 18.175 119.572 18.3138 119.937 18.3555C120.342 18.4017 120.484 18.4413 120.703 18.5692C120.914 18.6921 121.09 18.8885 121.233 19.1595C121.33 19.3429 121.342 19.4093 121.342 19.7435C121.343 20.0791 121.33 20.1447 121.23 20.3389C121.077 20.6372 120.841 20.8669 120.551 21.0008C120.327 21.1037 120.271 21.1126 119.869 21.1084C119.363 21.1031 118.81 20.9997 118.203 20.7969L117.801 20.6627L117.44 20.7414C117.242 20.7846 117.034 20.8323 116.977 20.8474L116.874 20.8748L117.223 22.3237C117.415 23.1205 117.617 23.8857 117.673 24.024C117.934 24.6739 118.327 25.2536 118.829 25.7288C119.165 26.0463 121.89 28 121.997 28C122.085 28 122.067 28.012 123.621 26.9018C124.318 26.4036 125.02 25.8717 125.18 25.7199C125.705 25.2232 126.154 24.5322 126.381 23.8718C126.43 23.7298 126.618 22.9975 126.798 22.2443L127.126 20.8748L127.023 20.8474C126.966 20.8323 126.757 20.7845 126.559 20.7411L126.197 20.6623L125.802 20.7963C125.2 21.0003 124.642 21.1035 124.111 21.1086C123.704 21.1125 123.632 21.1025 123.463 21.0188C123.178 20.8778 122.896 20.6043 122.769 20.347C122.673 20.1504 122.658 20.0735 122.658 19.7625C122.657 19.4375 122.669 19.38 122.788 19.139C122.924 18.8642 123.136 18.6466 123.399 18.5115C123.533 18.4424 123.652 18.4168 124.311 18.3153C124.634 18.2654 125.147 18.1156 125.147 18.0711C125.147 18.0528 125.039 17.9835 124.907 17.9172C124.148 17.535 123.134 16.7224 122.37 15.8832C122.041 15.5213 121.959 15.519 121.65 15.8634ZM119.038 22.822C119.093 22.8565 119.154 22.9775 119.211 23.1638C119.378 23.7139 119.708 24.2312 120.101 24.5589C120.214 24.6536 120.688 25.0035 121.154 25.3363L122 25.9415L122.847 25.3367C123.883 24.5963 124.055 24.4539 124.292 24.1397C124.527 23.8285 124.654 23.5794 124.785 23.1771C124.878 22.8912 124.903 22.8524 125.035 22.7883C125.166 22.7245 125.195 22.7229 125.317 22.7734C125.509 22.8538 125.572 23.019 125.504 23.2669C125.336 23.8755 124.992 24.4675 124.551 24.9038C124.37 25.083 123.83 25.5016 123.196 25.9548C122.299 26.5953 122.12 26.708 122.001 26.7071C121.883 26.7063 121.69 26.5851 120.805 25.955C119.384 24.9444 118.98 24.5241 118.656 23.7219C118.472 23.2665 118.437 23.0976 118.496 22.9545C118.584 22.7429 118.82 22.6853 119.038 22.822Z\" fill=\"black\" fill-opacity=\"0.47\">");
const r2 = _0x345be8 => {
  if (_0x345be8 === "line") {
    return O5();
  }
  if (_0x345be8 === "hunting") {
    return M5();
  }
};
const P5 = Z("<div><div>");
const T5 = Z("<div class=\"flex flex-col items-center justify-start gap-[1vh]\"><div><div>HUNTING CONTRACT</div><div></div><div>REQUIRED <!> PEOPLE</div></div><div>");
function D5(_0x1eb39a) {
  const [_0x395173, _0x28668d] = L1([]);
  const [_0x184834, _0x390b6e] = R(null);
  r1(async () => {
    const _0x4bf700 = await _0x916fe1.execute("hunting:getContracts");
    _0x28668d(_0x4bf700);
    const _0x5667c0 = await _0x916fe1.execute("hunting:getCurrentContract");
    _0x390b6e(_0x5667c0);
  });
  return (() => {
    const _0x2b9e5c = P5();
    const _0x314416 = _0x2b9e5c.firstChild;
    E(_0x2b9e5c, A(A2, {
      title: "ANIMAL HUNTING",
      description: "HERE YOU CAN GET CONTRACTS AND TAKE THEM WHATEVER YOU LIKE"
    }), _0x314416);
    E(_0x314416, A(H1, {
      each: _0x395173,
      children: _0x434e30 => (() => {
        const _0x2e8bac = T5();
        const _0x5bfa5b = _0x2e8bac.firstChild;
        const _0x4e9496 = _0x5bfa5b.firstChild;
        const _0x5a468a = _0x4e9496.nextSibling;
        const _0x3f7ae7 = _0x5a468a.nextSibling;
        const _0x590c62 = _0x3f7ae7.firstChild;
        const _0xd2c49c = _0x590c62.nextSibling;
        _0xd2c49c.nextSibling;
        const _0x1cd80c = _0x5bfa5b.nextSibling;
        E(_0x5bfa5b, () => r2("line"), _0x5a468a);
        E(_0x5bfa5b, () => r2("hunting"), _0x5a468a);
        E(_0x5a468a, () => _0x434e30.type.charAt(0).toUpperCase() + _0x434e30.type.slice(1));
        E(_0x3f7ae7, () => _0x434e30.players, _0xd2c49c);
        _0x1cd80c.$$click = async () => {
          if (_0x184834()) {
            return;
          }
          if (await _0x916fe1.execute("hunting:takeContract", _0x434e30.uuid)) {
            _0x1eb39a.closeFunction();
          }
        };
        E(_0x1cd80c, () => _0x184834()?.uuid === _0x434e30.uuid ? "In Progress..." : "Take Contract");
        T(_0x8b41a0 => {
          const _0x302a16 = G.item;
          const _0x4507b0 = G.title;
          const _0x1d1a1a = G.type;
          const _0x30f762 = G.amount;
          const _0xfa58aa = G.button;
          const _0x1fc6d9 = {
            [G.disabled]: _0x184834() ? _0x184834()?.uuid !== _0x434e30.uuid : false
          };
          if (_0x302a16 !== _0x8b41a0._v$3) {
            w(_0x5bfa5b, _0x8b41a0._v$3 = _0x302a16);
          }
          if (_0x4507b0 !== _0x8b41a0._v$4) {
            w(_0x4e9496, _0x8b41a0._v$4 = _0x4507b0);
          }
          if (_0x1d1a1a !== _0x8b41a0._v$5) {
            w(_0x5a468a, _0x8b41a0._v$5 = _0x1d1a1a);
          }
          if (_0x30f762 !== _0x8b41a0._v$6) {
            w(_0x3f7ae7, _0x8b41a0._v$6 = _0x30f762);
          }
          if (_0xfa58aa !== _0x8b41a0._v$7) {
            w(_0x1cd80c, _0x8b41a0._v$7 = _0xfa58aa);
          }
          _0x8b41a0._v$8 = q1(_0x1cd80c, _0x1fc6d9, _0x8b41a0._v$8);
          return _0x8b41a0;
        }, {
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined
        });
        return _0x2e8bac;
      })()
    }));
    T(_0x4abc95 => {
      const _0x485fd0 = G.contracts;
      const _0x5dffc0 = G.list;
      if (_0x485fd0 !== _0x4abc95._v$) {
        w(_0x2b9e5c, _0x4abc95._v$ = _0x485fd0);
      }
      if (_0x5dffc0 !== _0x4abc95._v$2) {
        w(_0x314416, _0x4abc95._v$2 = _0x5dffc0);
      }
      return _0x4abc95;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x2b9e5c;
  })();
}
m2(["click"]);
var I5 = () => {};
var s2 = (_0x5decf3, _0x1dba61) => _0x1dba61();
function N5(_0x490b91, _0x42bde1) {
  const _0x5bfce0 = $(_0x490b91);
  const _0x5559d0 = _0x5bfce0 ? [_0x5bfce0] : [];
  const {
    onEnter: _0x45c146 = s2,
    onExit: _0x523bdd = s2
  } = _0x42bde1;
  const [_0x2ffe33, _0x5a3044] = R(_0x42bde1.appear ? [] : _0x5559d0);
  const [_0x5c48ee] = N2();
  let _0x438cb0;
  let _0x2496c9 = false;
  function _0x3617fe(_0x5d9a67, _0x4f2077) {
    if (!_0x5d9a67) {
      return _0x4f2077 && _0x4f2077();
    }
    _0x2496c9 = true;
    _0x523bdd(_0x5d9a67, () => {
      K(() => {
        _0x2496c9 = false;
        _0x5a3044(_0x41b302 => _0x41b302.filter(_0x3f493b => _0x3f493b !== _0x5d9a67));
        if (_0x4f2077) {
          _0x4f2077();
        }
      });
    });
  }
  function _0x37f7c5(_0x307653) {
    const _0xb90099 = _0x438cb0;
    if (!_0xb90099) {
      return _0x307653 && _0x307653();
    }
    _0x438cb0 = undefined;
    _0x5a3044(_0x3dcff6 => [_0xb90099, ..._0x3dcff6]);
    _0x45c146(_0xb90099, _0x307653 ?? I5);
  }
  const _0x2d47b9 = _0x42bde1.mode === "out-in" ? _0x1803a3 => _0x2496c9 || _0x3617fe(_0x1803a3, _0x37f7c5) : _0x42bde1.mode === "in-out" ? _0x3ebc8a => _0x37f7c5(() => _0x3617fe(_0x3ebc8a)) : _0x1dd302 => {
    _0x3617fe(_0x1dd302);
    _0x37f7c5();
  };
  D2(_0xa70b05 => {
    const _0x33050d = _0x490b91();
    if ($(_0x5c48ee)) {
      _0x5c48ee();
      return _0xa70b05;
    } else {
      if (_0x33050d !== _0xa70b05) {
        _0x438cb0 = _0x33050d;
        K(() => $(() => _0x2d47b9(_0xa70b05)));
      }
      return _0x33050d;
    }
  }, _0x42bde1.appear ? undefined : _0x5bfce0);
  return _0x2ffe33;
}
var i2 = _0x2d9de8 => _0x2d9de8 instanceof Element;
function K1(_0x488909, _0x3ca3bc) {
  if (_0x3ca3bc(_0x488909)) {
    return _0x488909;
  }
  if (typeof _0x488909 == "function" && !_0x488909.length) {
    return K1(_0x488909(), _0x3ca3bc);
  }
  if (Array.isArray(_0x488909)) {
    for (const _0x5da5e4 of _0x488909) {
      const _0x72e276 = K1(_0x5da5e4, _0x3ca3bc);
      if (_0x72e276) {
        return _0x72e276;
      }
    }
  }
  return null;
}
function k5(_0x2f5e18, _0x4aa33c = i2, _0x3fb1cf = i2) {
  const _0x27a6d0 = B(_0x2f5e18);
  return B(() => K1(_0x27a6d0(), _0x4aa33c));
}
function j5(_0x38c510) {
  return B(() => {
    const _0x450836 = _0x38c510.name || "s";
    return {
      enterActive: (_0x38c510.enterActiveClass || _0x450836 + "-enter-active").split(" "),
      enter: (_0x38c510.enterClass || _0x450836 + "-enter").split(" "),
      enterTo: (_0x38c510.enterToClass || _0x450836 + "-enter-to").split(" "),
      exitActive: (_0x38c510.exitActiveClass || _0x450836 + "-exit-active").split(" "),
      exit: (_0x38c510.exitClass || _0x450836 + "-exit").split(" "),
      exitTo: (_0x38c510.exitToClass || _0x450836 + "-exit-to").split(" "),
      move: (_0x38c510.moveClass || _0x450836 + "-move").split(" ")
    };
  });
}
function E2(_0x4ee978) {
  requestAnimationFrame(() => requestAnimationFrame(_0x4ee978));
}
function Z5(_0x4394a2, _0x359335, _0x5360aa, _0x527151) {
  const {
    onBeforeEnter: _0x1a7f9b,
    onEnter: _0x55b8ab,
    onAfterEnter: _0x38b9a5
  } = _0x359335;
  _0x1a7f9b?.(_0x5360aa);
  _0x5360aa.classList.add(..._0x4394a2.enter);
  _0x5360aa.classList.add(..._0x4394a2.enterActive);
  queueMicrotask(() => {
    if (!_0x5360aa.parentNode) {
      return _0x527151?.();
    }
    _0x55b8ab?.(_0x5360aa, () => _0x43615c());
  });
  E2(() => {
    _0x5360aa.classList.remove(..._0x4394a2.enter);
    _0x5360aa.classList.add(..._0x4394a2.enterTo);
    if (!_0x55b8ab || _0x55b8ab.length < 2) {
      _0x5360aa.addEventListener("transitionend", _0x43615c);
      _0x5360aa.addEventListener("animationend", _0x43615c);
    }
  });
  function _0x43615c(_0x4323d4) {
    if (!_0x4323d4 || _0x4323d4.target === _0x5360aa) {
      _0x527151?.();
      _0x5360aa.removeEventListener("transitionend", _0x43615c);
      _0x5360aa.removeEventListener("animationend", _0x43615c);
      _0x5360aa.classList.remove(..._0x4394a2.enterActive);
      _0x5360aa.classList.remove(..._0x4394a2.enterTo);
      _0x38b9a5?.(_0x5360aa);
    }
  }
}
function R5(_0x80e915, _0x4a35ce, _0x58f8d3, _0x354bee) {
  const {
    onBeforeExit: _0x51bc6a,
    onExit: _0x3f3796,
    onAfterExit: _0x94bed7
  } = _0x4a35ce;
  if (!_0x58f8d3.parentNode) {
    return _0x354bee?.();
  }
  _0x51bc6a?.(_0x58f8d3);
  _0x58f8d3.classList.add(..._0x80e915.exit);
  _0x58f8d3.classList.add(..._0x80e915.exitActive);
  _0x3f3796?.(_0x58f8d3, () => _0x3a80f2());
  E2(() => {
    _0x58f8d3.classList.remove(..._0x80e915.exit);
    _0x58f8d3.classList.add(..._0x80e915.exitTo);
    if (!_0x3f3796 || _0x3f3796.length < 2) {
      _0x58f8d3.addEventListener("transitionend", _0x3a80f2);
      _0x58f8d3.addEventListener("animationend", _0x3a80f2);
    }
  });
  function _0x3a80f2(_0x4d800d) {
    if (!_0x4d800d || _0x4d800d.target === _0x58f8d3) {
      _0x354bee?.();
      _0x58f8d3.removeEventListener("transitionend", _0x3a80f2);
      _0x58f8d3.removeEventListener("animationend", _0x3a80f2);
      _0x58f8d3.classList.remove(..._0x80e915.exitActive);
      _0x58f8d3.classList.remove(..._0x80e915.exitTo);
      _0x94bed7?.(_0x58f8d3);
    }
  }
}
var B5 = {
  inout: "in-out",
  outin: "out-in"
};
var U5 = _0x431b8c => {
  const _0x2d82b7 = j5(_0x431b8c);
  return N5(k5(() => _0x431b8c.children), {
    mode: B5[_0x431b8c.mode],
    appear: _0x431b8c.appear,
    onEnter(_0x5d6050, _0x550587) {
      Z5(_0x2d82b7(), _0x431b8c, _0x5d6050, _0x550587);
    },
    onExit(_0x31ef9b, _0x188568) {
      R5(_0x2d82b7(), _0x431b8c, _0x31ef9b, _0x188568);
    }
  });
};
var A1 = class {
  x;
  y;
  width;
  height;
  constructor(_0x1d217f) {
    this.x = Math.floor(_0x1d217f.x);
    this.y = Math.floor(_0x1d217f.y);
    this.width = Math.floor(_0x1d217f.width);
    this.height = Math.floor(_0x1d217f.height);
  }
  get rect() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }
  get left() {
    return this.x;
  }
  get top() {
    return this.y;
  }
  get right() {
    return this.x + this.width;
  }
  get bottom() {
    return this.y + this.height;
  }
  get center() {
    return {
      x: this.x + this.width * 0.5,
      y: this.y + this.height * 0.5
    };
  }
  get corners() {
    return {
      topLeft: {
        x: this.left,
        y: this.top
      },
      topRight: {
        x: this.right,
        y: this.top
      },
      bottomRight: {
        x: this.left,
        y: this.bottom
      },
      bottomLeft: {
        x: this.right,
        y: this.bottom
      }
    };
  }
};
var a1 = _0x4f5bbd => {
  let _0x183251 = new A1(_0x4f5bbd.getBoundingClientRect());
  const {
    transform: _0x1d39ad
  } = getComputedStyle(_0x4f5bbd);
  if (_0x1d39ad) {
    _0x183251 = F5(_0x183251, _0x1d39ad);
  }
  return _0x183251;
};
var F5 = (_0x2cfe85, _0x4cd4cf) => {
  let _0x2fbfc1;
  let _0x2a0aa7;
  if (_0x4cd4cf.startsWith("matrix3d(")) {
    const _0x550463 = _0x4cd4cf.slice(9, -1).split(/, /);
    _0x2fbfc1 = +_0x550463[12];
    _0x2a0aa7 = +_0x550463[13];
  } else if (_0x4cd4cf.startsWith("matrix(")) {
    const _0xce30cc = _0x4cd4cf.slice(7, -1).split(/, /);
    _0x2fbfc1 = +_0xce30cc[4];
    _0x2a0aa7 = +_0xce30cc[5];
  } else {
    _0x2fbfc1 = 0;
    _0x2a0aa7 = 0;
  }
  return new A1({
    ..._0x2cfe85,
    x: _0x2cfe85.x - _0x2fbfc1,
    y: _0x2cfe85.y - _0x2a0aa7
  });
};
var Y = () => ({
  x: 0,
  y: 0
});
var S2 = (_0x5a8795, _0x3f3adc) => _0x5a8795.x === _0x3f3adc.x && _0x5a8795.y === _0x3f3adc.y;
var I1 = (_0x49ab8c, _0x367764) => new A1({
  ..._0x49ab8c,
  x: _0x49ab8c.x + _0x367764.x,
  y: _0x49ab8c.y + _0x367764.y
});
var K5 = (_0x1a5aef, _0x22a3f1) => {
  const _0x3730be = Math.max(_0x1a5aef.top, _0x22a3f1.top);
  const _0x2fcfac = Math.max(_0x1a5aef.left, _0x22a3f1.left);
  const _0x1cae31 = Math.min(_0x1a5aef.right, _0x22a3f1.right);
  const _0x34ca76 = Math.min(_0x1a5aef.bottom, _0x22a3f1.bottom);
  const _0x563ad3 = _0x1cae31 - _0x2fcfac;
  const _0x25e1b0 = _0x34ca76 - _0x3730be;
  if (_0x2fcfac < _0x1cae31 && _0x3730be < _0x34ca76) {
    const _0x4bdfd5 = _0x1a5aef.width * _0x1a5aef.height;
    const _0x46b5e8 = _0x22a3f1.width * _0x22a3f1.height;
    const _0x336553 = _0x563ad3 * _0x25e1b0;
    return _0x336553 / (_0x4bdfd5 + _0x46b5e8 - _0x336553);
  }
  return 0;
};
var N1 = (_0x209bd4, _0x4f66cf) => _0x209bd4.x === _0x4f66cf.x && _0x209bd4.y === _0x4f66cf.y && _0x209bd4.width === _0x4f66cf.width && _0x209bd4.height === _0x4f66cf.height;
var H5 = (_0x3e264e, _0x701bf8, _0x4e4776) => {
  const _0x363a7b = _0x3e264e.transformed;
  const _0x19d69f = {
    ratio: 0,
    droppable: null
  };
  for (const _0x27c03b of _0x701bf8) {
    const _0x13432b = K5(_0x363a7b, _0x27c03b.layout);
    if (_0x13432b > _0x19d69f.ratio) {
      _0x19d69f.ratio = _0x13432b;
      _0x19d69f.droppable = _0x27c03b;
    } else if (_0x13432b > 0 && _0x13432b === _0x19d69f.ratio && _0x27c03b.id === _0x4e4776.activeDroppableId) {
      _0x19d69f.droppable = _0x27c03b;
    }
  }
  return _0x19d69f.droppable;
};
var O2 = k2();
var q5 = _0x2b5f19 => {
  const _0x5c108d = y2({
    collisionDetector: H5
  }, _0x2b5f19);
  const [_0x30f130, _0x38d87d] = L1({
    draggables: {},
    droppables: {},
    sensors: {},
    active: {
      draggableId: null,
      get draggable() {
        if (_0x30f130.active.draggableId !== null) {
          return _0x30f130.draggables[_0x30f130.active.draggableId];
        } else {
          return null;
        }
      },
      droppableId: null,
      get droppable() {
        if (_0x30f130.active.droppableId !== null) {
          return _0x30f130.droppables[_0x30f130.active.droppableId];
        } else {
          return null;
        }
      },
      sensorId: null,
      get sensor() {
        if (_0x30f130.active.sensorId !== null) {
          return _0x30f130.sensors[_0x30f130.active.sensorId];
        } else {
          return null;
        }
      },
      overlay: null
    }
  });
  const _0x3df24e = (_0x15b092, _0x496ee0, _0x239b37) => {
    _0x15b092.substring(0, _0x15b092.length - 1);
    if ($(() => _0x30f130[_0x15b092][_0x496ee0])) {
      _0x38d87d(_0x15b092, _0x496ee0, "transformers", _0x239b37.id, _0x239b37);
    }
  };
  const _0x1d37e3 = (_0x5df828, _0x486c25, _0xcfe0d5) => {
    _0x5df828.substring(0, _0x5df828.length - 1);
    if ($(() => _0x30f130[_0x5df828][_0x486c25]) && $(() => _0x30f130[_0x5df828][_0x486c25].transformers[_0xcfe0d5])) {
      _0x38d87d(_0x5df828, _0x486c25, "transformers", _0xcfe0d5, undefined);
    }
  };
  const _0x34c2cc = ({
    id: _0x28391b,
    node: _0x83655,
    layout: _0x2932a1,
    data: _0x30ff63
  }) => {
    const _0x40af91 = _0x30f130.draggables[_0x28391b];
    const _0x1014a9 = {
      id: _0x28391b,
      node: _0x83655,
      layout: _0x2932a1,
      data: _0x30ff63,
      _pendingCleanup: false
    };
    let _0x64c292;
    if (!_0x40af91) {
      Object.defineProperties(_0x1014a9, {
        transformers: {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            if (_0x30f130.active.overlay) {
              return Y();
            }
            const _0x54b729 = Object.values(_0x30f130.draggables[_0x28391b].transformers);
            _0x54b729.sort((_0x225d85, _0x2d0b30) => _0x225d85.order - _0x2d0b30.order);
            return _0x54b729.reduce((_0x29c291, _0x424301) => _0x424301.callback(_0x29c291), Y());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => I1(_0x30f130.draggables[_0x28391b].layout, _0x30f130.draggables[_0x28391b].transform)
        }
      });
    } else if (_0x30f130.active.draggableId === _0x28391b && !_0x30f130.active.overlay) {
      const _0x482f00 = {
        x: _0x40af91.layout.x - _0x2932a1.x,
        y: _0x40af91.layout.y - _0x2932a1.y
      };
      const _0x328df2 = "addDraggable-existing-offset";
      const _0x12be75 = _0x40af91.transformers[_0x328df2];
      const _0x2fc99d = _0x12be75 ? _0x12be75.callback(_0x482f00) : _0x482f00;
      _0x64c292 = {
        id: _0x328df2,
        order: 100,
        callback: _0x2f30f8 => ({
          x: _0x2f30f8.x + _0x2fc99d.x,
          y: _0x2f30f8.y + _0x2fc99d.y
        })
      };
      _0x505ab9(() => _0x1d37e3("draggables", _0x28391b, _0x328df2));
    }
    K(() => {
      _0x38d87d("draggables", _0x28391b, _0x1014a9);
      if (_0x64c292) {
        _0x3df24e("draggables", _0x28391b, _0x64c292);
      }
    });
    if (_0x30f130.active.draggable) {
      _0x2f4053();
    }
  };
  const _0x4ea934 = _0x139d5c => {
    if ($(() => _0x30f130.draggables[_0x139d5c])) {
      _0x38d87d("draggables", _0x139d5c, "_pendingCleanup", true);
      queueMicrotask(() => _0x4ec0ed(_0x139d5c));
    }
  };
  const _0x4ec0ed = _0x1b06bc => {
    if (_0x30f130.draggables[_0x1b06bc]?._pendingCleanup) {
      const _0x306c3c = _0x30f130.active.draggableId === _0x1b06bc;
      K(() => {
        if (_0x306c3c) {
          _0x38d87d("active", "draggableId", null);
        }
        _0x38d87d("draggables", _0x1b06bc, undefined);
      });
    }
  };
  const _0x243561 = ({
    id: _0x21745b,
    node: _0x21a0e3,
    layout: _0x54244d,
    data: _0x100e77
  }) => {
    const _0x24b71a = _0x30f130.droppables[_0x21745b];
    const _0x1bd4e2 = {
      id: _0x21745b,
      node: _0x21a0e3,
      layout: _0x54244d,
      data: _0x100e77,
      _pendingCleanup: false
    };
    if (!_0x24b71a) {
      Object.defineProperties(_0x1bd4e2, {
        transformers: {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            const _0x16e66f = Object.values(_0x30f130.droppables[_0x21745b].transformers);
            _0x16e66f.sort((_0x41361a, _0x13a3b4) => _0x41361a.order - _0x13a3b4.order);
            return _0x16e66f.reduce((_0x30bfd5, _0x3feeb8) => _0x3feeb8.callback(_0x30bfd5), Y());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => I1(_0x30f130.droppables[_0x21745b].layout, _0x30f130.droppables[_0x21745b].transform)
        }
      });
    }
    _0x38d87d("droppables", _0x21745b, _0x1bd4e2);
    if (_0x30f130.active.draggable) {
      _0x2f4053();
    }
  };
  const _0x2be55d = _0x294e68 => {
    if ($(() => _0x30f130.droppables[_0x294e68])) {
      _0x38d87d("droppables", _0x294e68, "_pendingCleanup", true);
      queueMicrotask(() => _0x247315(_0x294e68));
    }
  };
  const _0x247315 = _0x30d375 => {
    if (_0x30f130.droppables[_0x30d375]?._pendingCleanup) {
      const _0x33f451 = _0x30f130.active.droppableId === _0x30d375;
      K(() => {
        if (_0x33f451) {
          _0x38d87d("active", "droppableId", null);
        }
        _0x38d87d("droppables", _0x30d375, undefined);
      });
    }
  };
  const _0x57be7b = ({
    id: _0x5ac8ba,
    activators: _0x345fce
  }) => {
    _0x38d87d("sensors", _0x5ac8ba, {
      id: _0x5ac8ba,
      activators: _0x345fce,
      coordinates: {
        origin: {
          x: 0,
          y: 0
        },
        current: {
          x: 0,
          y: 0
        },
        get delta() {
          return {
            x: _0x30f130.sensors[_0x5ac8ba].coordinates.current.x - _0x30f130.sensors[_0x5ac8ba].coordinates.origin.x,
            y: _0x30f130.sensors[_0x5ac8ba].coordinates.current.y - _0x30f130.sensors[_0x5ac8ba].coordinates.origin.y
          };
        }
      }
    });
  };
  const _0x50761b = _0x38ffef => {
    if (!$(() => _0x30f130.sensors[_0x38ffef])) {
      return;
    }
    const _0x3e66fa = _0x30f130.active.sensorId === _0x38ffef;
    K(() => {
      if (_0x3e66fa) {
        _0x38d87d("active", "sensorId", null);
      }
      _0x38d87d("sensors", _0x38ffef, undefined);
    });
  };
  const _0x56a01a = ({
    node: _0x300d32,
    layout: _0x32972d
  }) => {
    const _0x56e406 = _0x30f130.active.overlay;
    const _0x423772 = {
      node: _0x300d32,
      layout: _0x32972d
    };
    if (!_0x56e406) {
      Object.defineProperties(_0x423772, {
        id: {
          enumerable: true,
          configurable: true,
          get: () => _0x30f130.active.draggable?.id
        },
        data: {
          enumerable: true,
          configurable: true,
          get: () => _0x30f130.active.draggable?.data
        },
        transformers: {
          enumerable: true,
          configurable: true,
          get: () => Object.fromEntries(Object.entries(_0x30f130.active.draggable ? _0x30f130.active.draggable.transformers : {}).filter(([_0x421695]) => _0x421695 !== "addDraggable-existing-offset"))
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            const _0x2dddd1 = Object.values(_0x30f130.active.overlay ? _0x30f130.active.overlay.transformers : []);
            _0x2dddd1.sort((_0x1b47f0, _0x2857c4) => _0x1b47f0.order - _0x2857c4.order);
            return _0x2dddd1.reduce((_0x41632a, _0x14cd6b) => _0x14cd6b.callback(_0x41632a), Y());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => _0x30f130.active.overlay ? I1(_0x30f130.active.overlay.layout, _0x30f130.active.overlay.transform) : new A1({
            x: 0,
            y: 0,
            width: 0,
            height: 0
          })
        }
      });
    }
    _0x38d87d("active", "overlay", _0x423772);
  };
  const _0x1fb82f = () => _0x38d87d("active", "overlay", null);
  const _0x25c5f4 = (_0x3bd5ed, _0x3dce6d) => {
    K(() => {
      _0x38d87d("sensors", _0x3bd5ed, "coordinates", {
        origin: {
          ..._0x3dce6d
        },
        current: {
          ..._0x3dce6d
        }
      });
      _0x38d87d("active", "sensorId", _0x3bd5ed);
    });
  };
  const _0x465c46 = _0x331795 => {
    const _0x48de1f = _0x30f130.active.sensorId;
    if (_0x48de1f) {
      _0x38d87d("sensors", _0x48de1f, "coordinates", "current", {
        ..._0x331795
      });
    }
  };
  const _0x29fba8 = () => _0x38d87d("active", "sensorId", null);
  const _0x1e291b = (_0x9e5d1d, _0x489762) => {
    const _0x3d6d98 = {};
    for (const _0x15a580 of Object.values(_0x30f130.sensors)) {
      if (_0x15a580) {
        for (const [_0x22239e, _0xe7d638] of Object.entries(_0x15a580.activators)) {
          _0x3d6d98[_0x22239e] ??= [];
          _0x3d6d98[_0x22239e].push({
            sensor: _0x15a580,
            activator: _0xe7d638
          });
        }
      }
    }
    const _0x5108fe = {};
    for (const _0x47bac0 in _0x3d6d98) {
      let _0x1c0955 = _0x47bac0;
      if (_0x489762) {
        _0x1c0955 = "on" + _0x47bac0;
      }
      _0x5108fe[_0x1c0955] = _0x237c63 => {
        for (const {
          activator: _0x20d0e5
        } of _0x3d6d98[_0x47bac0]) {
          if (_0x30f130.active.sensor) {
            break;
          }
          _0x20d0e5(_0x237c63, _0x9e5d1d);
        }
      };
    }
    return _0x5108fe;
  };
  const _0x2f4053 = () => {
    let _0x39d168 = false;
    const _0x289c39 = Object.values(_0x30f130.draggables);
    const _0x41d822 = Object.values(_0x30f130.droppables);
    const _0x5e8892 = _0x30f130.active.overlay;
    K(() => {
      const _0x39935a = new WeakMap();
      for (const _0x3357ff of _0x289c39) {
        if (_0x3357ff) {
          const _0x1cdf74 = _0x3357ff.layout;
          if (!_0x39935a.has(_0x3357ff.node)) {
            _0x39935a.set(_0x3357ff.node, a1(_0x3357ff.node));
          }
          const _0x368724 = _0x39935a.get(_0x3357ff.node);
          if (!N1(_0x1cdf74, _0x368724)) {
            _0x38d87d("draggables", _0x3357ff.id, "layout", _0x368724);
            _0x39d168 = true;
          }
        }
      }
      for (const _0x25f0a1 of _0x41d822) {
        if (_0x25f0a1) {
          const _0x12cc44 = _0x25f0a1.layout;
          if (!_0x39935a.has(_0x25f0a1.node)) {
            _0x39935a.set(_0x25f0a1.node, a1(_0x25f0a1.node));
          }
          const _0x2103f8 = _0x39935a.get(_0x25f0a1.node);
          if (!N1(_0x12cc44, _0x2103f8)) {
            _0x38d87d("droppables", _0x25f0a1.id, "layout", _0x2103f8);
            _0x39d168 = true;
          }
        }
      }
      if (_0x5e8892) {
        const _0x5f4712 = _0x5e8892.layout;
        const _0x546fae = a1(_0x5e8892.node);
        if (!N1(_0x5f4712, _0x546fae)) {
          _0x38d87d("active", "overlay", "layout", _0x546fae);
          _0x39d168 = true;
        }
      }
    });
    return _0x39d168;
  };
  const _0xa0e4ae = () => {
    const _0x213e0d = _0x30f130.active.overlay ?? _0x30f130.active.draggable;
    if (_0x213e0d) {
      const _0x23b69b = _0x5c108d.collisionDetector(_0x213e0d, Object.values(_0x30f130.droppables), {
        activeDroppableId: _0x30f130.active.droppableId
      });
      const _0x2130e1 = _0x23b69b ? _0x23b69b.id : null;
      if (_0x30f130.active.droppableId !== _0x2130e1) {
        _0x38d87d("active", "droppableId", _0x2130e1);
      }
    }
  };
  const _0x275b11 = _0x55909a => {
    const _0xa485ed = {
      id: "sensorMove",
      order: 0,
      callback: _0x167953 => _0x30f130.active.sensor ? {
        x: _0x167953.x + _0x30f130.active.sensor.coordinates.delta.x,
        y: _0x167953.y + _0x30f130.active.sensor.coordinates.delta.y
      } : _0x167953
    };
    _0x2f4053();
    K(() => {
      _0x38d87d("active", "draggableId", _0x55909a);
      _0x3df24e("draggables", _0x55909a, _0xa485ed);
    });
    _0xa0e4ae();
  };
  const _0x83a496 = () => {
    const _0x506ab3 = $(() => _0x30f130.active.draggableId);
    K(() => {
      if (_0x506ab3 !== null) {
        _0x1d37e3("draggables", _0x506ab3, "sensorMove");
      }
      _0x38d87d("active", ["draggableId", "droppableId"], null);
    });
    _0x2f4053();
  };
  const _0x3a7cb1 = _0x6cfb1b => {
    V(() => {
      const _0x34c299 = _0x30f130.active.draggable;
      if (_0x34c299) {
        $(() => _0x6cfb1b({
          draggable: _0x34c299
        }));
      }
    });
  };
  const _0x4d3914 = _0x52c985 => {
    V(() => {
      const _0x173970 = _0x30f130.active.draggable;
      if (_0x173970) {
        const _0x5d5e91 = $(() => _0x30f130.active.overlay);
        Object.values(_0x5d5e91 ? _0x5d5e91.transform : _0x173970.transform);
        $(() => _0x52c985({
          draggable: _0x173970,
          overlay: _0x5d5e91
        }));
      }
    });
  };
  const _0x5d1742 = _0x277119 => {
    V(() => {
      const _0x516401 = _0x30f130.active.draggable;
      const _0x1da154 = _0x30f130.active.droppable;
      if (_0x516401) {
        $(() => _0x277119({
          draggable: _0x516401,
          droppable: _0x1da154,
          overlay: _0x30f130.active.overlay
        }));
      }
    });
  };
  const _0x505ab9 = _0x2d0b96 => {
    V(({
      previousDraggable: _0x437466,
      previousDroppable: _0x3dd07a,
      previousOverlay: _0x496f8a
    }) => {
      const _0x23a9dd = _0x30f130.active.draggable;
      const _0x324b64 = _0x23a9dd ? _0x30f130.active.droppable : null;
      const _0x460eea = _0x23a9dd ? _0x30f130.active.overlay : null;
      if (!_0x23a9dd && _0x437466) {
        $(() => _0x2d0b96({
          draggable: _0x437466,
          droppable: _0x3dd07a,
          overlay: _0x496f8a
        }));
      }
      return {
        previousDraggable: _0x23a9dd,
        previousDroppable: _0x324b64,
        previousOverlay: _0x460eea
      };
    }, {
      previousDraggable: null,
      previousDroppable: null,
      previousOverlay: null
    });
  };
  _0x4d3914(() => _0xa0e4ae());
  if (_0x5c108d.onDragStart) {
    _0x3a7cb1(_0x5c108d.onDragStart);
  }
  if (_0x5c108d.onDragMove) {
    _0x4d3914(_0x5c108d.onDragMove);
  }
  if (_0x5c108d.onDragOver) {
    _0x5d1742(_0x5c108d.onDragOver);
  }
  if (_0x5c108d.onDragEnd) {
    _0x505ab9(_0x5c108d.onDragEnd);
  }
  const _0x292f8f = [_0x30f130, {
    addTransformer: _0x3df24e,
    removeTransformer: _0x1d37e3,
    addDraggable: _0x34c2cc,
    removeDraggable: _0x4ea934,
    addDroppable: _0x243561,
    removeDroppable: _0x2be55d,
    addSensor: _0x57be7b,
    removeSensor: _0x50761b,
    setOverlay: _0x56a01a,
    clearOverlay: _0x1fb82f,
    recomputeLayouts: _0x2f4053,
    detectCollisions: _0xa0e4ae,
    draggableActivators: _0x1e291b,
    sensorStart: _0x25c5f4,
    sensorMove: _0x465c46,
    sensorEnd: _0x29fba8,
    dragStart: _0x275b11,
    dragEnd: _0x83a496,
    onDragStart: _0x3a7cb1,
    onDragMove: _0x4d3914,
    onDragOver: _0x5d1742,
    onDragEnd: _0x505ab9
  }];
  return A(O2.Provider, {
    value: _0x292f8f,
    get children() {
      return _0x5c108d.children;
    }
  });
};
var E1 = () => j2(O2) || null;
var V5 = (_0x523bde = "pointer-sensor") => {
  const [_0x1d7262, {
    addSensor: _0xd1d095,
    removeSensor: _0x3935f9,
    sensorStart: _0x5d35d3,
    sensorMove: _0x3f1d91,
    sensorEnd: _0x5ad15a,
    dragStart: _0x527699,
    dragEnd: _0x3c35f8
  }] = E1();
  const _0x2d1971 = 250;
  const _0x43aba2 = 10;
  r1(() => {
    _0xd1d095({
      id: _0x523bde,
      activators: {
        pointerdown: _0x19f6d3
      }
    });
  });
  t1(() => {
    _0x3935f9(_0x523bde);
  });
  const _0x348c58 = () => _0x1d7262.active.sensorId === _0x523bde;
  const _0x24b99f = {
    x: 0,
    y: 0
  };
  let _0x4699da = null;
  let _0x40ab8f = null;
  const _0x19f6d3 = (_0x20e44b, _0x5304ff) => {
    if (_0x20e44b.button === 0) {
      document.addEventListener("pointermove", _0x34a77e);
      document.addEventListener("pointerup", _0x40dca3);
      _0x40ab8f = _0x5304ff;
      _0x24b99f.x = _0x20e44b.clientX;
      _0x24b99f.y = _0x20e44b.clientY;
      _0x4699da = window.setTimeout(_0x171512, _0x2d1971);
    }
  };
  const _0x753a4 = () => {
    if (_0x4699da) {
      clearTimeout(_0x4699da);
      _0x4699da = null;
    }
    document.removeEventListener("pointermove", _0x34a77e);
    document.removeEventListener("pointerup", _0x40dca3);
    document.removeEventListener("selectionchange", _0x41afa4);
  };
  const _0x171512 = () => {
    if (_0x1d7262.active.sensor) {
      if (!_0x348c58()) {
        _0x753a4();
      }
    } else {
      _0x5d35d3(_0x523bde, _0x24b99f);
      _0x527699(_0x40ab8f);
      _0x41afa4();
      document.addEventListener("selectionchange", _0x41afa4);
    }
  };
  const _0x34a77e = _0xb9eaf2 => {
    const _0x1a7d90 = {
      x: _0xb9eaf2.clientX,
      y: _0xb9eaf2.clientY
    };
    if (!_0x1d7262.active.sensor) {
      const _0x509f8f = {
        x: _0x1a7d90.x - _0x24b99f.x,
        y: _0x1a7d90.y - _0x24b99f.y
      };
      if (Math.sqrt(_0x509f8f.x ** 2 + _0x509f8f.y ** 2) > _0x43aba2) {
        _0x171512();
      }
    }
    if (_0x348c58()) {
      _0xb9eaf2.preventDefault();
      _0x3f1d91(_0x1a7d90);
    }
  };
  const _0x40dca3 = _0x4caf0e => {
    _0x753a4();
    if (_0x348c58()) {
      _0x4caf0e.preventDefault();
      _0x3c35f8();
      _0x5ad15a();
    }
  };
  const _0x41afa4 = () => {
    window.getSelection()?.removeAllRanges();
  };
};
var X5 = _0x4c4d62 => {
  V5();
  return B(() => _0x4c4d62.children);
};
var S1 = _0x5d661f => ({
  transform: "translate3d(" + _0x5d661f.x + "px, " + _0x5d661f.y + "px, 0)"
});
var W5 = (_0x3d536d, _0x11a612 = {}) => {
  const [_0x113b54, {
    addDraggable: _0x1fc42f,
    removeDraggable: _0x315f99,
    draggableActivators: _0x290453
  }] = E1();
  const [_0x397e73, _0x41d80a] = R(null);
  r1(() => {
    const _0x5e637b = _0x397e73();
    if (_0x5e637b) {
      _0x1fc42f({
        id: _0x3d536d,
        node: _0x5e637b,
        layout: a1(_0x5e637b),
        data: _0x11a612
      });
    }
  });
  t1(() => _0x315f99(_0x3d536d));
  const _0x387a04 = () => _0x113b54.active.draggableId === _0x3d536d;
  const _0x598453 = () => _0x113b54.draggables[_0x3d536d]?.transform || Y();
  return Object.defineProperties((_0x33bb77, _0x4181e1) => {
    const _0x40e33d = _0x4181e1 ? _0x4181e1() : {};
    V(() => {
      const _0x488251 = _0x397e73();
      const _0x342564 = _0x290453(_0x3d536d);
      if (_0x488251) {
        for (const _0x15ee39 in _0x342564) {
          _0x488251.addEventListener(_0x15ee39, _0x342564[_0x15ee39]);
        }
      }
      t1(() => {
        if (_0x488251) {
          for (const _0x478379 in _0x342564) {
            _0x488251.removeEventListener(_0x478379, _0x342564[_0x478379]);
          }
        }
      });
    });
    _0x41d80a(_0x33bb77);
    if (!_0x40e33d.skipTransform) {
      V(() => {
        const _0x177ba2 = _0x598453();
        if (S2(_0x177ba2, Y())) {
          _0x33bb77.style.removeProperty("transform");
        } else {
          const _0x4a0f6c = S1(_0x598453());
          _0x33bb77.style.setProperty("transform", _0x4a0f6c.transform ?? null);
        }
      });
    }
  }, {
    ref: {
      enumerable: true,
      value: _0x41d80a
    },
    isActiveDraggable: {
      enumerable: true,
      get: _0x387a04
    },
    dragActivators: {
      enumerable: true,
      get: () => _0x290453(_0x3d536d, true)
    },
    transform: {
      enumerable: true,
      get: _0x598453
    }
  });
};
var G5 = (_0xac8634, _0x217497 = {}) => {
  const [_0x1cf27, {
    addDroppable: _0x3b56bb,
    removeDroppable: _0x1cc9df
  }] = E1();
  const [_0x3bbcd0, _0x4b98fb] = R(null);
  r1(() => {
    const _0x3955fc = _0x3bbcd0();
    if (_0x3955fc) {
      _0x3b56bb({
        id: _0xac8634,
        node: _0x3955fc,
        layout: a1(_0x3955fc),
        data: _0x217497
      });
    }
  });
  t1(() => _0x1cc9df(_0xac8634));
  const _0x1b252a = () => _0x1cf27.active.droppableId === _0xac8634;
  const _0x372509 = () => _0x1cf27.droppables[_0xac8634]?.transform || Y();
  return Object.defineProperties((_0x120f62, _0x304d43) => {
    const _0x11223a = _0x304d43 ? _0x304d43() : {};
    _0x4b98fb(_0x120f62);
    if (!_0x11223a.skipTransform) {
      V(() => {
        const _0x4023c9 = _0x372509();
        if (S2(_0x4023c9, Y())) {
          _0x120f62.style.removeProperty("transform");
        } else {
          const _0x1b02fa = S1(_0x372509());
          _0x120f62.style.setProperty("transform", _0x1b02fa.transform ?? null);
        }
      });
    }
  }, {
    ref: {
      enumerable: true,
      value: _0x4b98fb
    },
    isActiveDroppable: {
      enumerable: true,
      get: _0x1b252a
    },
    transform: {
      enumerable: true,
      get: _0x372509
    }
  });
};
const Y5 = "_knife_7x6fj_1";
const Q5 = "_item_7x6fj_10";
const J5 = "_disabled_7x6fj_32";
const k1 = {
  knife: Y5,
  item: Q5,
  disabled: J5
};
const z5 = Z("<div><div><img class=\"h-[5vh] w-[5vh]\" src=\"https://assets.nopixel.net/dev/images/inventory/icons/knife.png\">Knife");
function e9() {
  const _0x5765d3 = W5("knife");
  const [_0x39135b, _0xeb9973] = R(false);
  r1(async () => {
    const _0x150875 = await _0x916fe1.execute("hunting:hasKnife");
    _0xeb9973(_0x150875);
  });
  return (() => {
    const _0x3238d1 = z5();
    const _0x1e2317 = _0x3238d1.firstChild;
    const _0x3eb2ce = _0x1e2317.firstChild;
    const _0x3dfaf9 = _0x5765d3.ref;
    if (typeof _0x3dfaf9 == "function") {
      R1(_0x3dfaf9, _0x1e2317);
    } else {
      _0x5765d3.ref = _0x1e2317;
    }
    i5(_0x1e2317, y2({
      get class() {
        return k1.item;
      },
      get classList() {
        return {
          [k1.disabled]: !_0x39135b()
        };
      }
    }, () => _0x5765d3.dragActivators, {
      get style() {
        return S1(_0x5765d3.transform);
      }
    }), false, true);
    c1(_0x3eb2ce, "draggable", false);
    T(() => w(_0x3238d1, k1.knife));
    return _0x3238d1;
  })();
}
const t9 = "_inspection_1vg37_1";
const n9 = {
  inspection: t9
};
const r9 = Z("<div>");
function s9() {
  return (() => {
    const _0x1541fd = r9();
    E(_0x1541fd, A(A2, {
      title: "ANIMAL INSPECTION",
      description: "HERE YOU CAN INSPECT ANIMALS AND GET REWARDS"
    }), null);
    E(_0x1541fd, A(e9, {}), null);
    T(() => w(_0x1541fd, n9.inspection));
    return _0x1541fd;
  })();
}
const i9 = "_body_g67cp_1";
const o9 = "_status_g67cp_7";
const l9 = "_fade_g67cp_1";
const a9 = "_title_g67cp_11";
const g1 = {
  body: i9,
  status: o9,
  fade: l9,
  title: a9
};
const o2 = Z("<div>");
const c9 = Z("<div class=\"flex flex-row items-start justify-end gap-2\"><div class=\"flex flex-col items-start justify-end gap-2\"><div class=\"flex flex-col items-start justify-start\"><div></div></div><svg width=\"11.75vh\" height=\"6.11vh\" viewBox=\"0 0 127 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 2H62L125 65\" stroke=\"white\" stroke-opacity=\"0.35\"></path><rect width=\"5\" height=\"5\" fill=\"#00F8B9\"></rect><rect x=\"122\" y=\"61\" width=\"5\" height=\"5\" fill=\"#00F8B9\">");
const C9 = Z("<div class=\"flex flex-row items-start justify-end gap-2\"><div class=\"flex flex-col items-end justify-end gap-2\"><div class=\"flex flex-col items-end justify-start\"><div></div></div><svg width=\"11.75vh\" height=\"6.11vh\" viewBox=\"0 0 127 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M124 2H65L2 65\" stroke=\"white\" stroke-opacity=\"0.35\"></path><rect width=\"5\" height=\"5\" transform=\"matrix(-1 0 0 1 127 0)\" fill=\"#00F8B9\"></rect><rect width=\"5\" height=\"5\" transform=\"matrix(-1 0 0 1 5 61)\" fill=\"#00F8B9\">");
function u9() {
  const [_0x10f48d, _0x34aad1] = L1([]);
  _0x916fe1.register("hunting:inspection:offsets", async _0x2dba5c => {
    setTimeout(() => {
      _0x34aad1(_0x2dba5c);
    }, 100);
  });
  const _0x17636d = E1();
  if (!_0x17636d) {
    return null;
  }
  const [, {
    onDragEnd: _0x32cf9f
  }] = _0x17636d;
  _0x32cf9f(async _0x33bddd => {
    const _0xb3a457 = _0x33bddd.droppable;
    console.log(JSON.stringify(_0xb3a457));
    if (_0xb3a457) {
      await _0x916fe1.execute("hunting:dragEnd", _0xb3a457.id);
    }
  });
  return (() => {
    const _0x10b617 = o2();
    E(_0x10b617, A(H1, {
      each: _0x10f48d,
      children: _0x4330a7 => {
        const _0x262d98 = G5(_0x4330a7.id);
        return (() => {
          const _0x35ce50 = o2();
          _0x35ce50.style.setProperty("position", "fixed");
          _0x35ce50.style.setProperty("margin-top", "-10.5vh");
          E(_0x35ce50, A(V2, {
            get children() {
              return [A(J1, {
                get when() {
                  return !_0x4330a7.isLeft;
                },
                get children() {
                  const _0x197478 = c9();
                  const _0x43f932 = _0x197478.firstChild;
                  const _0x216cc3 = _0x43f932.firstChild;
                  const _0x44a8b2 = _0x216cc3.firstChild;
                  const _0x4514c4 = _0x262d98.ref;
                  if (typeof _0x4514c4 == "function") {
                    R1(_0x4514c4, _0x197478);
                  } else {
                    _0x262d98.ref = _0x197478;
                  }
                  E(_0x44a8b2, () => _0x4330a7.label);
                  T(_0x532062 => {
                    const _0x483309 = S1(_0x262d98.transform);
                    const _0x465716 = g1.title;
                    _0x532062._v$ = _2(_0x197478, _0x483309, _0x532062._v$);
                    if (_0x465716 !== _0x532062._v$2) {
                      w(_0x44a8b2, _0x532062._v$2 = _0x465716);
                    }
                    return _0x532062;
                  }, {
                    _v$: undefined,
                    _v$2: undefined
                  });
                  return _0x197478;
                }
              }), A(J1, {
                get when() {
                  return _0x4330a7.isLeft;
                },
                get children() {
                  const _0x499a0b = C9();
                  const _0x24e009 = _0x499a0b.firstChild;
                  const _0x1ccb43 = _0x24e009.firstChild;
                  const _0x11a367 = _0x1ccb43.firstChild;
                  const _0x522bb8 = _0x262d98.ref;
                  if (typeof _0x522bb8 == "function") {
                    R1(_0x522bb8, _0x499a0b);
                  } else {
                    _0x262d98.ref = _0x499a0b;
                  }
                  E(_0x11a367, () => _0x4330a7.label);
                  T(() => w(_0x11a367, g1.title));
                  return _0x499a0b;
                }
              })];
            }
          }));
          T(_0x31e72c => {
            const _0x54cbb5 = g1.status + " rounded-md hover:bg-gray-200/20";
            const _0xe717cc = _0x4330a7.x + "%";
            const _0x37d8b3 = _0x4330a7.y + "%";
            const _0x3bf9ec = _0x4330a7.isLeft ? "translateX(0)" : "translateX(-14.75vh)";
            if (_0x54cbb5 !== _0x31e72c._v$3) {
              w(_0x35ce50, _0x31e72c._v$3 = _0x54cbb5);
            }
            if (_0xe717cc !== _0x31e72c._v$4) {
              if ((_0x31e72c._v$4 = _0xe717cc) != null) {
                _0x35ce50.style.setProperty("left", _0xe717cc);
              } else {
                _0x35ce50.style.removeProperty("left");
              }
            }
            if (_0x37d8b3 !== _0x31e72c._v$5) {
              if ((_0x31e72c._v$5 = _0x37d8b3) != null) {
                _0x35ce50.style.setProperty("top", _0x37d8b3);
              } else {
                _0x35ce50.style.removeProperty("top");
              }
            }
            if (_0x3bf9ec !== _0x31e72c._v$6) {
              if ((_0x31e72c._v$6 = _0x3bf9ec) != null) {
                _0x35ce50.style.setProperty("transform", _0x3bf9ec);
              } else {
                _0x35ce50.style.removeProperty("transform");
              }
            }
            return _0x31e72c;
          }, {
            _v$3: undefined,
            _v$4: undefined,
            _v$5: undefined,
            _v$6: undefined
          });
          return _0x35ce50;
        })();
      }
    }));
    T(() => w(_0x10b617, g1.body));
    return _0x10b617;
  })();
}
const l2 = Z("<div>");
function f9() {
  const [_0x2e5d36, _0x168652] = R(false);
  const [_0xc0088c, _0x404fbe] = R(false);
  _0x916fe1.register("hunting:showContracts", async _0x57fecc => {
    _0x168652(_0x57fecc);
  });
  _0x916fe1.register("hunting:showInspection", async _0x58a371 => {
    _0x404fbe(_0x58a371);
  });
  const _0x2fb790 = () => {
    _0x916fe1.execute("hunting:close");
    _0x168652(false);
    _0x404fbe(false);
  };
  const _0x4df317 = _0x2be3f2 => {
    if (_0x2be3f2.key === "Escape" && (_0x2e5d36() || _0xc0088c())) {
      _0x2fb790();
    }
  };
  r1(async () => {
    document.addEventListener("keydown", _0x4df317);
  });
  t1(() => {
    document.removeEventListener("keydown", _0x4df317);
  });
  return A(U5, {
    name: "fade",
    get children() {
      return [A(l1, {
        get when() {
          return _0x2e5d36();
        },
        get children() {
          const _0xf83428 = l2();
          E(_0xf83428, A(D5, {
            closeFunction: _0x2fb790
          }));
          T(() => w(_0xf83428, D1.hunting));
          return _0xf83428;
        }
      }), A(l1, {
        get when() {
          return _0xc0088c();
        },
        get children() {
          return A(q5, {
            get children() {
              return A(X5, {
                get children() {
                  const _0x1d48fe = l2();
                  E(_0x1d48fe, A(s9, {}), null);
                  E(_0x1d48fe, A(u9, {}), null);
                  T(_0x17b990 => {
                    const _0xfa310f = D1.hunting;
                    const _0x3515af = {
                      [D1.inspection]: true
                    };
                    if (_0xfa310f !== _0x17b990._v$) {
                      w(_0x1d48fe, _0x17b990._v$ = _0xfa310f);
                    }
                    _0x17b990._v$2 = q1(_0x1d48fe, _0x3515af, _0x17b990._v$2);
                    return _0x17b990;
                  }, {
                    _v$: undefined,
                    _v$2: undefined
                  });
                  return _0x1d48fe;
                }
              });
            }
          });
        }
      })];
    }
  });
}
const d9 = "_App_196t3_1";
const g9 = "_box_196t3_15";
const v9 = "_content_196t3_31";
const h9 = "_text_196t3_43";
const b9 = "_barContainer_196t3_57";
const y9 = "_bar_196t3_57";
const Q = {
  App: d9,
  box: g9,
  content: v9,
  text: h9,
  barContainer: b9,
  bar: y9
};
const p9 = "" + new URL("tree-2a6aca5a.svg", import.meta.url).href;
const m9 = "" + new URL("growth-c5d2e3ee.svg", import.meta.url).href;
const _9 = "" + new URL("quality-5221c604.svg", import.meta.url).href;
const w9 = Z("<div>");
const $9 = Z("<div><div>");
const x9 = Z("<div> years");
const L9 = Z("<div class=\"flex flex-row items-center justify-center gap-2.5\"><div><img></div><div><div>");
const A9 = [{
  label: "Age",
  id: "age",
  icon: p9,
  type: "text"
}, {
  label: "Growth",
  id: "growth",
  icon: m9
}, {
  label: "Quality",
  id: "quality",
  icon: _9
}];
function E9() {
  const [_0x861188, _0x21e428] = L1({
    show: false,
    data: {}
  });
  const [_0x309e88, _0x4a282b] = R("");
  _0x916fe1.register("lumberjack:data", async _0x29d6a9 => {
    _0x21e428({
      ..._0x29d6a9
    });
  });
  const [_0x4c8c15, _0x86693] = R(false);
  let _0xad46d;
  V(() => {
    if (_0xad46d) {
      clearTimeout(_0xad46d);
    }
    if (_0x861188.show) {
      _0x86693(true);
      setTimeout(() => {
        _0x4a282b("translateX(0%)");
      }, 100);
    } else {
      _0x4a282b("translateX(-25%)");
      _0xad46d = setTimeout(() => {
        _0x86693(false);
      }, 250);
    }
  }, [_0x861188]);
  return A(l1, {
    get when() {
      return _0x4c8c15();
    },
    get children() {
      const _0x2dadbe = w9();
      E(_0x2dadbe, A(H1, {
        each: A9,
        children: _0x2f89fa => (() => {
          const _0x5d2ba9 = L9();
          const _0xff211d = _0x5d2ba9.firstChild;
          const _0x3ed3da = _0xff211d.firstChild;
          const _0x108635 = _0xff211d.nextSibling;
          const _0x2f6540 = _0x108635.firstChild;
          E(_0x2f6540, () => _0x2f89fa.label);
          E(_0x108635, A(l1, {
            get when() {
              return _0x2f89fa.type !== "text";
            },
            get children() {
              const _0x3f327c = $9();
              const _0xfb2650 = _0x3f327c.firstChild;
              T(_0x9792bc => {
                const _0x161e50 = Q.barContainer;
                const _0xdfef0 = Q.bar;
                const _0xd25cd4 = _0x861188.data[_0x2f89fa.id] + "%";
                if (_0x161e50 !== _0x9792bc._v$3) {
                  w(_0x3f327c, _0x9792bc._v$3 = _0x161e50);
                }
                if (_0xdfef0 !== _0x9792bc._v$4) {
                  w(_0xfb2650, _0x9792bc._v$4 = _0xdfef0);
                }
                if (_0xd25cd4 !== _0x9792bc._v$5) {
                  if ((_0x9792bc._v$5 = _0xd25cd4) != null) {
                    _0xfb2650.style.setProperty("width", _0xd25cd4);
                  } else {
                    _0xfb2650.style.removeProperty("width");
                  }
                }
                return _0x9792bc;
              }, {
                _v$3: undefined,
                _v$4: undefined,
                _v$5: undefined
              });
              return _0x3f327c;
            }
          }), null);
          E(_0x108635, A(l1, {
            get when() {
              return _0x2f89fa.type === "text";
            },
            get children() {
              const _0x106972 = x9();
              const _0x520c5f = _0x106972.firstChild;
              E(_0x106972, () => _0x861188.data[_0x2f89fa.id], _0x520c5f);
              T(() => w(_0x106972, Q.text));
              return _0x106972;
            }
          }), null);
          T(_0x21e2f3 => {
            const _0x58970c = Q.box;
            const _0x3041ca = _0x2f89fa.icon;
            const _0x1e875e = Q.content;
            const _0x4e0613 = Q.text;
            if (_0x58970c !== _0x21e2f3._v$6) {
              w(_0xff211d, _0x21e2f3._v$6 = _0x58970c);
            }
            if (_0x3041ca !== _0x21e2f3._v$7) {
              c1(_0x3ed3da, "src", _0x21e2f3._v$7 = _0x3041ca);
            }
            if (_0x1e875e !== _0x21e2f3._v$8) {
              w(_0x108635, _0x21e2f3._v$8 = _0x1e875e);
            }
            if (_0x4e0613 !== _0x21e2f3._v$9) {
              w(_0x2f6540, _0x21e2f3._v$9 = _0x4e0613);
            }
            return _0x21e2f3;
          }, {
            _v$6: undefined,
            _v$7: undefined,
            _v$8: undefined,
            _v$9: undefined
          });
          return _0x5d2ba9;
        })()
      }));
      T(_0x57242d => {
        const _0x42cc5f = Q.App;
        const _0x1f232c = _0x309e88();
        if (_0x42cc5f !== _0x57242d._v$) {
          w(_0x2dadbe, _0x57242d._v$ = _0x42cc5f);
        }
        if (_0x1f232c !== _0x57242d._v$2) {
          if ((_0x57242d._v$2 = _0x1f232c) != null) {
            _0x2dadbe.style.setProperty("transform", _0x1f232c);
          } else {
            _0x2dadbe.style.removeProperty("transform");
          }
        }
        return _0x57242d;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x2dadbe;
    }
  });
}
function S9() {
  return [A(E9, {}), A(f9, {})];
}
n5(() => A(S9, {}), document.getElementById("root"));