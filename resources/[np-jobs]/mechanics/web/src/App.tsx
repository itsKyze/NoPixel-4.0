import './style.css';
import { N as _0x405935 } from "./v-packages-6cb79519.js";
(function () {
  const _0x49539a = document.createElement("link").relList;
  if (_0x49539a && _0x49539a.supports && _0x49539a.supports("modulepreload")) {
    return;
  }
  for (const _0x4ca2f4 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0xc8a65d(_0x4ca2f4);
  }
  new MutationObserver(_0x5cdcff => {
    for (const _0x14d9e4 of _0x5cdcff) {
      if (_0x14d9e4.type === "childList") {
        for (const _0x2b3c69 of _0x14d9e4.addedNodes) {
          if (_0x2b3c69.tagName === "LINK" && _0x2b3c69.rel === "modulepreload") {
            _0xc8a65d(_0x2b3c69);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x4a13e8(_0x2d87db) {
    const _0x123eb0 = {};
    if (_0x2d87db.integrity) {
      _0x123eb0.integrity = _0x2d87db.integrity;
    }
    if (_0x2d87db.referrerPolicy) {
      _0x123eb0.referrerPolicy = _0x2d87db.referrerPolicy;
    }
    if (_0x2d87db.crossOrigin === "use-credentials") {
      _0x123eb0.credentials = "include";
    } else if (_0x2d87db.crossOrigin === "anonymous") {
      _0x123eb0.credentials = "omit";
    } else {
      _0x123eb0.credentials = "same-origin";
    }
    return _0x123eb0;
  }
  function _0xc8a65d(_0x5cb4aa) {
    if (_0x5cb4aa.ep) {
      return;
    }
    _0x5cb4aa.ep = true;
    const _0x498cee = _0x4a13e8(_0x5cb4aa);
    fetch(_0x5cb4aa.href, _0x498cee);
  }
})();
const cl = (_0x4084f0, _0x22a42e) => _0x4084f0 === _0x22a42e;
const wt = Symbol("solid-proxy");
const bs = Symbol("solid-track");
const Kn = {
  equals: cl
};
let qc = Zc;
const zt = 1;
const Zn = 2;
const Xc = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var G = null;
let si = null;
let U = null;
let et = null;
let Tt = null;
let Gr = 0;
function ul(_0x3ad01e, _0x355565) {
  const _0x444fc6 = U;
  const _0x5575db = G;
  const _0x254acb = _0x3ad01e.length === 0;
  const _0x29fd0e = _0x254acb ? Xc : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x355565 === undefined ? _0x5575db : _0x355565
  };
  const _0x327700 = _0x254acb ? _0x3ad01e : () => _0x3ad01e(() => xt(() => Kr(_0x29fd0e)));
  G = _0x29fd0e;
  U = null;
  try {
    return pe(_0x327700, true);
  } finally {
    U = _0x444fc6;
    G = _0x5575db;
  }
}
function vi(_0x1c8130, _0x38eb2e) {
  _0x38eb2e = _0x38eb2e ? Object.assign({}, Kn, _0x38eb2e) : Kn;
  const _0x5ef21a = {
    value: _0x1c8130,
    observers: null,
    observerSlots: null,
    comparator: _0x38eb2e.equals || undefined
  };
  const _0xf40c17 = _0x86cce4 => {
    if (typeof _0x86cce4 == "function") {
      _0x86cce4 = _0x86cce4(_0x5ef21a.value);
    }
    return Kc(_0x5ef21a, _0x86cce4);
  };
  return [Gc.bind(_0x5ef21a), _0xf40c17];
}
function Mt(_0x182245, _0x32b39b, _0x4f45e4) {
  const _0x40e64c = Yo(_0x182245, _0x32b39b, false, zt);
  ze(_0x40e64c);
}
function Oe(_0x33b7f3, _0x21b831, _0x44dc60) {
  qc = yl;
  const _0x148ce7 = Yo(_0x33b7f3, _0x21b831, false, zt);
  if (!_0x44dc60 || !_0x44dc60.render) {
    _0x148ce7.user = true;
  }
  if (Tt) {
    Tt.push(_0x148ce7);
  } else {
    ze(_0x148ce7);
  }
}
function ae(_0x3555a7, _0x19efd7, _0x2fad97) {
  _0x2fad97 = _0x2fad97 ? Object.assign({}, Kn, _0x2fad97) : Kn;
  const _0x368bc6 = Yo(_0x3555a7, _0x19efd7, true, 0);
  _0x368bc6.observers = null;
  _0x368bc6.observerSlots = null;
  _0x368bc6.comparator = _0x2fad97.equals || undefined;
  ze(_0x368bc6);
  return Gc.bind(_0x368bc6);
}
function ll(_0x30e0fc) {
  return pe(_0x30e0fc, false);
}
function xt(_0x2dd13c) {
  if (U === null) {
    return _0x2dd13c();
  }
  const _0x366854 = U;
  U = null;
  try {
    return _0x2dd13c();
  } finally {
    U = _0x366854;
  }
}
function qe(_0x3591be, _0x2e76f5, _0x20a906) {
  const _0x58242e = Array.isArray(_0x3591be);
  let _0x2f5e49;
  let _0x263894 = _0x20a906 && _0x20a906.defer;
  return _0x2f449e => {
    let _0x5bebf3;
    if (_0x58242e) {
      _0x5bebf3 = Array(_0x3591be.length);
      for (let _0x8a48c1 = 0; _0x8a48c1 < _0x3591be.length; _0x8a48c1++) {
        _0x5bebf3[_0x8a48c1] = _0x3591be[_0x8a48c1]();
      }
    } else {
      _0x5bebf3 = _0x3591be();
    }
    if (_0x263894) {
      _0x263894 = false;
      return;
    }
    const _0xc046e5 = xt(() => _0x2e76f5(_0x5bebf3, _0x2f5e49, _0x2f449e));
    _0x2f5e49 = _0x5bebf3;
    return _0xc046e5;
  };
}
function Uo(_0xdb293e) {
  Oe(() => xt(_0xdb293e));
}
function Ho(_0x142131) {
  if (G !== null) {
    if (G.cleanups === null) {
      G.cleanups = [_0x142131];
    } else {
      G.cleanups.push(_0x142131);
    }
  }
  return _0x142131;
}
function Qc() {
  return U;
}
function fl(_0x43e6c8, _0x277388) {
  const _0x5e69e4 = Symbol("context");
  return {
    id: _0x5e69e4,
    Provider: ml(_0x5e69e4),
    defaultValue: _0x43e6c8
  };
}
function hl(_0x232144) {
  let _0x492d6f;
  if ((_0x492d6f = eu(G, _0x232144.id)) !== undefined) {
    return _0x492d6f;
  } else {
    return _0x232144.defaultValue;
  }
}
function dl(_0x45c074) {
  const _0x728b99 = ae(_0x45c074);
  const _0x2e9f65 = ae(() => wi(_0x728b99()));
  _0x2e9f65.toArray = () => {
    const _0x3bc65c = _0x2e9f65();
    if (Array.isArray(_0x3bc65c)) {
      return _0x3bc65c;
    } else if (_0x3bc65c != null) {
      return [_0x3bc65c];
    } else {
      return [];
    }
  };
  return _0x2e9f65;
}
function Gc() {
  if (this.sources && this.state) {
    if (this.state === zt) {
      ze(this);
    } else {
      const _0x356a04 = et;
      et = null;
      pe(() => tr(this), false);
      et = _0x356a04;
    }
  }
  if (U) {
    const _0x309d5c = this.observers ? this.observers.length : 0;
    if (U.sources) {
      U.sources.push(this);
      U.sourceSlots.push(_0x309d5c);
    } else {
      U.sources = [this];
      U.sourceSlots = [_0x309d5c];
    }
    if (this.observers) {
      this.observers.push(U);
      this.observerSlots.push(U.sources.length - 1);
    } else {
      this.observers = [U];
      this.observerSlots = [U.sources.length - 1];
    }
  }
  return this.value;
}
function Kc(_0xb9e0d4, _0x4a0027, _0x128999) {
  let _0x2b19e0 = _0xb9e0d4.value;
  if (!_0xb9e0d4.comparator || !_0xb9e0d4.comparator(_0x2b19e0, _0x4a0027)) {
    _0xb9e0d4.value = _0x4a0027;
    if (_0xb9e0d4.observers && _0xb9e0d4.observers.length) {
      pe(() => {
        for (let _0x2b3cab = 0; _0x2b3cab < _0xb9e0d4.observers.length; _0x2b3cab += 1) {
          const _0x16da06 = _0xb9e0d4.observers[_0x2b3cab];
          const _0x3e8160 = si && si.running;
          if (_0x3e8160) {
            si.disposed.has(_0x16da06);
          }
          if (_0x3e8160 ? !_0x16da06.tState : !_0x16da06.state) {
            if (_0x16da06.pure) {
              et.push(_0x16da06);
            } else {
              Tt.push(_0x16da06);
            }
            if (_0x16da06.observers) {
              Jc(_0x16da06);
            }
          }
          if (!_0x3e8160) {
            _0x16da06.state = zt;
          }
        }
        if (et.length > 1000000) {
          et = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x4a0027;
}
function ze(_0x50a8ad) {
  if (!_0x50a8ad.fn) {
    return;
  }
  Kr(_0x50a8ad);
  const _0x1cb5eb = G;
  const _0x50ca61 = U;
  const _0x12449e = Gr;
  U = G = _0x50a8ad;
  pl(_0x50a8ad, _0x50a8ad.value, _0x12449e);
  U = _0x50ca61;
  G = _0x1cb5eb;
}
function pl(_0x16e185, _0x33be81, _0x2ee46d) {
  let _0xb156f0;
  try {
    _0xb156f0 = _0x16e185.fn(_0x33be81);
  } catch (_0x5e3cd) {
    if (_0x16e185.pure) {
      _0x16e185.state = zt;
      if (_0x16e185.owned) {
        _0x16e185.owned.forEach(Kr);
      }
      _0x16e185.owned = null;
    }
    _0x16e185.updatedAt = _0x2ee46d + 1;
    return tu(_0x5e3cd);
  }
  if (!_0x16e185.updatedAt || _0x16e185.updatedAt <= _0x2ee46d) {
    if (_0x16e185.updatedAt != null && "observers" in _0x16e185) {
      Kc(_0x16e185, _0xb156f0);
    } else {
      _0x16e185.value = _0xb156f0;
    }
    _0x16e185.updatedAt = _0x2ee46d;
  }
}
function Yo(_0x516634, _0x210820, _0x4c5c70, _0x163163 = zt, _0x48bd4b) {
  const _0xe2372e = {
    fn: _0x516634,
    state: _0x163163,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x210820,
    owner: G,
    context: null,
    pure: _0x4c5c70
  };
  if (G !== null) {
    if (G !== Xc) {
      if (G.owned) {
        G.owned.push(_0xe2372e);
      } else {
        G.owned = [_0xe2372e];
      }
    }
  }
  return _0xe2372e;
}
function Jn(_0x2f2df6) {
  if (_0x2f2df6.state === 0) {
    return;
  }
  if (_0x2f2df6.state === Zn) {
    return tr(_0x2f2df6);
  }
  if (_0x2f2df6.suspense && xt(_0x2f2df6.suspense.inFallback)) {
    return _0x2f2df6.suspense.effects.push(_0x2f2df6);
  }
  const _0x3f86f9 = [_0x2f2df6];
  while ((_0x2f2df6 = _0x2f2df6.owner) && (!_0x2f2df6.updatedAt || _0x2f2df6.updatedAt < Gr)) {
    if (_0x2f2df6.state) {
      _0x3f86f9.push(_0x2f2df6);
    }
  }
  for (let _0x343e3c = _0x3f86f9.length - 1; _0x343e3c >= 0; _0x343e3c--) {
    _0x2f2df6 = _0x3f86f9[_0x343e3c];
    if (_0x2f2df6.state === zt) {
      ze(_0x2f2df6);
    } else if (_0x2f2df6.state === Zn) {
      const _0x489236 = et;
      et = null;
      pe(() => tr(_0x2f2df6, _0x3f86f9[0]), false);
      et = _0x489236;
    }
  }
}
function pe(_0x2e3d1d, _0x127ff2) {
  if (et) {
    return _0x2e3d1d();
  }
  let _0x26d54f = false;
  if (!_0x127ff2) {
    et = [];
  }
  if (Tt) {
    _0x26d54f = true;
  } else {
    Tt = [];
  }
  Gr++;
  try {
    const _0x166550 = _0x2e3d1d();
    gl(_0x26d54f);
    return _0x166550;
  } catch (_0x44c1cf) {
    if (!_0x26d54f) {
      Tt = null;
    }
    et = null;
    tu(_0x44c1cf);
  }
}
function gl(_0x22165c) {
  if (et) {
    Zc(et);
    et = null;
  }
  if (_0x22165c) {
    return;
  }
  const _0xd1c85c = Tt;
  Tt = null;
  if (_0xd1c85c.length) {
    pe(() => qc(_0xd1c85c), false);
  }
}
function Zc(_0x35f183) {
  for (let _0x1a8289 = 0; _0x1a8289 < _0x35f183.length; _0x1a8289++) {
    Jn(_0x35f183[_0x1a8289]);
  }
}
function yl(_0x2e800c) {
  let _0x116682;
  let _0x4238c2 = 0;
  for (_0x116682 = 0; _0x116682 < _0x2e800c.length; _0x116682++) {
    const _0x51036a = _0x2e800c[_0x116682];
    if (_0x51036a.user) {
      _0x2e800c[_0x4238c2++] = _0x51036a;
    } else {
      Jn(_0x51036a);
    }
  }
  for (_0x116682 = 0; _0x116682 < _0x4238c2; _0x116682++) {
    Jn(_0x2e800c[_0x116682]);
  }
}
function tr(_0x43f2dc, _0x498efb) {
  _0x43f2dc.state = 0;
  for (let _0x45272c = 0; _0x45272c < _0x43f2dc.sources.length; _0x45272c += 1) {
    const _0x33d9d6 = _0x43f2dc.sources[_0x45272c];
    if (_0x33d9d6.sources) {
      const _0x186ff7 = _0x33d9d6.state;
      if (_0x186ff7 === zt) {
        if (_0x33d9d6 !== _0x498efb && (!_0x33d9d6.updatedAt || _0x33d9d6.updatedAt < Gr)) {
          Jn(_0x33d9d6);
        }
      } else if (_0x186ff7 === Zn) {
        tr(_0x33d9d6, _0x498efb);
      }
    }
  }
}
function Jc(_0x48b40e) {
  for (let _0xd96f29 = 0; _0xd96f29 < _0x48b40e.observers.length; _0xd96f29 += 1) {
    const _0x3dc5fe = _0x48b40e.observers[_0xd96f29];
    if (!_0x3dc5fe.state) {
      _0x3dc5fe.state = Zn;
      if (_0x3dc5fe.pure) {
        et.push(_0x3dc5fe);
      } else {
        Tt.push(_0x3dc5fe);
      }
      if (_0x3dc5fe.observers) {
        Jc(_0x3dc5fe);
      }
    }
  }
}
function Kr(_0x74d242) {
  let _0x52e47f;
  if (_0x74d242.sources) {
    while (_0x74d242.sources.length) {
      const _0x2fcba2 = _0x74d242.sources.pop();
      const _0x3d64c0 = _0x74d242.sourceSlots.pop();
      const _0x3043a4 = _0x2fcba2.observers;
      if (_0x3043a4 && _0x3043a4.length) {
        const _0x542c7f = _0x3043a4.pop();
        const _0x39f255 = _0x2fcba2.observerSlots.pop();
        if (_0x3d64c0 < _0x3043a4.length) {
          _0x542c7f.sourceSlots[_0x39f255] = _0x3d64c0;
          _0x3043a4[_0x3d64c0] = _0x542c7f;
          _0x2fcba2.observerSlots[_0x3d64c0] = _0x39f255;
        }
      }
    }
  }
  if (_0x74d242.owned) {
    for (_0x52e47f = _0x74d242.owned.length - 1; _0x52e47f >= 0; _0x52e47f--) {
      Kr(_0x74d242.owned[_0x52e47f]);
    }
    _0x74d242.owned = null;
  }
  if (_0x74d242.cleanups) {
    for (_0x52e47f = _0x74d242.cleanups.length - 1; _0x52e47f >= 0; _0x52e47f--) {
      _0x74d242.cleanups[_0x52e47f]();
    }
    _0x74d242.cleanups = null;
  }
  _0x74d242.state = 0;
  _0x74d242.context = null;
}
function tu(_0x26372f) {
  throw _0x26372f;
}
function eu(_0x3f5f74, _0x46d0a4) {
  if (_0x3f5f74) {
    if (_0x3f5f74.context && _0x3f5f74.context[_0x46d0a4] !== undefined) {
      return _0x3f5f74.context[_0x46d0a4];
    } else {
      return eu(_0x3f5f74.owner, _0x46d0a4);
    }
  } else {
    return undefined;
  }
}
function wi(_0x3b5b29) {
  if (typeof _0x3b5b29 == "function" && !_0x3b5b29.length) {
    return wi(_0x3b5b29());
  }
  if (Array.isArray(_0x3b5b29)) {
    const _0x4fc328 = [];
    for (let _0x287440 = 0; _0x287440 < _0x3b5b29.length; _0x287440++) {
      const _0xe7680e = wi(_0x3b5b29[_0x287440]);
      if (Array.isArray(_0xe7680e)) {
        _0x4fc328.push.apply(_0x4fc328, _0xe7680e);
      } else {
        _0x4fc328.push(_0xe7680e);
      }
    }
    return _0x4fc328;
  }
  return _0x3b5b29;
}
function ml(_0x5a6a9d, _0x160467) {
  return function (_0x38c564) {
    let _0x36c988;
    Mt(() => _0x36c988 = xt(() => {
      G.context = {
        [_0x5a6a9d]: _0x38c564.value
      };
      return dl(() => _0x38c564.children);
    }), undefined);
    return _0x36c988;
  };
}
function rt(_0x31547e, _0x4d32ea) {
  return xt(() => _0x31547e(_0x4d32ea || {}));
}
function Xe() {
  return true;
}
const bl = {
  get(_0x11a24f, _0x284de4, _0x43ebc2) {
    if (_0x284de4 === wt) {
      return _0x43ebc2;
    } else {
      return _0x11a24f.get(_0x284de4);
    }
  },
  has(_0x22285f, _0x3613ee) {
    if (_0x3613ee === wt) {
      return true;
    } else {
      return _0x22285f.has(_0x3613ee);
    }
  },
  set: Xe,
  deleteProperty: Xe,
  getOwnPropertyDescriptor(_0x361eb9, _0x13a19e) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _0x361eb9.get(_0x13a19e);
      },
      set: Xe,
      deleteProperty: Xe
    };
  },
  ownKeys(_0x50ed39) {
    return _0x50ed39.keys();
  }
};
function ai(_0x38addd) {
  if (_0x38addd = typeof _0x38addd == "function" ? _0x38addd() : _0x38addd) {
    return _0x38addd;
  } else {
    return {};
  }
}
function _l() {
  for (let _0x2da354 = 0, _0x4d3f45 = this.length; _0x2da354 < _0x4d3f45; ++_0x2da354) {
    const _0x572d72 = this[_0x2da354]();
    if (_0x572d72 !== undefined) {
      return _0x572d72;
    }
  }
}
function nu(..._0x3b3d24) {
  let _0x19b029 = false;
  for (let _0xd899dc = 0; _0xd899dc < _0x3b3d24.length; _0xd899dc++) {
    const _0x13431a = _0x3b3d24[_0xd899dc];
    _0x19b029 = _0x19b029 || !!_0x13431a && wt in _0x13431a;
    _0x3b3d24[_0xd899dc] = typeof _0x13431a == "function" ? (_0x19b029 = true, ae(_0x13431a)) : _0x13431a;
  }
  if (_0x19b029) {
    return new Proxy({
      get(_0xc7351b) {
        for (let _0x43e91b = _0x3b3d24.length - 1; _0x43e91b >= 0; _0x43e91b--) {
          const _0x5bf4ea = ai(_0x3b3d24[_0x43e91b])[_0xc7351b];
          if (_0x5bf4ea !== undefined) {
            return _0x5bf4ea;
          }
        }
      },
      has(_0x2489cd) {
        for (let _0x58698d = _0x3b3d24.length - 1; _0x58698d >= 0; _0x58698d--) {
          if (_0x2489cd in ai(_0x3b3d24[_0x58698d])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const _0x4a0e33 = [];
        for (let _0x484723 = 0; _0x484723 < _0x3b3d24.length; _0x484723++) {
          _0x4a0e33.push(...Object.keys(ai(_0x3b3d24[_0x484723])));
        }
        return [...new Set(_0x4a0e33)];
      }
    }, bl);
  }
  const _0x2286da = {};
  const _0x2e71b3 = {};
  let _0x27b919 = false;
  for (let _0x1d9f2b = _0x3b3d24.length - 1; _0x1d9f2b >= 0; _0x1d9f2b--) {
    const _0xf5d997 = _0x3b3d24[_0x1d9f2b];
    if (!_0xf5d997) {
      continue;
    }
    const _0x5c369e = Object.getOwnPropertyNames(_0xf5d997);
    _0x27b919 = _0x27b919 || _0x1d9f2b !== 0 && !!_0x5c369e.length;
    for (let _0x4e38f3 = 0, _0x5b7cd9 = _0x5c369e.length; _0x4e38f3 < _0x5b7cd9; _0x4e38f3++) {
      const _0x5e6566 = _0x5c369e[_0x4e38f3];
      if (_0x5e6566 !== "__proto__" && _0x5e6566 !== "constructor") {
        if (_0x5e6566 in _0x2286da) {
          const _0x42f108 = _0x2e71b3[_0x5e6566];
          const _0x46039c = Object.getOwnPropertyDescriptor(_0xf5d997, _0x5e6566);
          if (_0x42f108) {
            if (_0x46039c.get) {
              _0x42f108.push(_0x46039c.get.bind(_0xf5d997));
            } else if (_0x46039c.value !== undefined) {
              _0x42f108.push(() => _0x46039c.value);
            }
          } else if (_0x2286da[_0x5e6566] === undefined) {
            _0x2286da[_0x5e6566] = _0x46039c.value;
          }
        } else {
          const _0x272a8e = Object.getOwnPropertyDescriptor(_0xf5d997, _0x5e6566);
          if (_0x272a8e.get) {
            Object.defineProperty(_0x2286da, _0x5e6566, {
              enumerable: true,
              configurable: true,
              get: _l.bind(_0x2e71b3[_0x5e6566] = [_0x272a8e.get.bind(_0xf5d997)])
            });
          } else {
            _0x2286da[_0x5e6566] = _0x272a8e.value;
          }
        }
      }
    }
  }
  return _0x2286da;
}
const vl = _0x14ef86 => "Stale read from <" + _0x14ef86 + ">.";
function _s(_0x14ce86) {
  const _0x1c12ba = _0x14ce86.keyed;
  const _0x4d032f = ae(() => _0x14ce86.when, undefined, {
    equals: (_0x35f9d2, _0xe80b55) => _0x1c12ba ? _0x35f9d2 === _0xe80b55 : !_0x35f9d2 == !_0xe80b55
  });
  return ae(() => {
    const _0x17deab = _0x4d032f();
    if (_0x17deab) {
      const _0x19d0cc = _0x14ce86.children;
      if (typeof _0x19d0cc == "function" && _0x19d0cc.length > 0) {
        return xt(() => _0x19d0cc(_0x1c12ba ? _0x17deab : () => {
          if (!xt(_0x4d032f)) {
            throw vl("Show");
          }
          return _0x14ce86.when;
        }));
      } else {
        return _0x19d0cc;
      }
    }
    return _0x14ce86.fallback;
  }, undefined, undefined);
}
function wl(_0xe925e8, _0x475483, _0x42cf1e) {
  let _0x1d0991 = _0x42cf1e.length;
  let _0x331ded = _0x475483.length;
  let _0x4b9524 = _0x1d0991;
  let _0x38a045 = 0;
  let _0x1a323c = 0;
  let _0x3dae8a = _0x475483[_0x331ded - 1].nextSibling;
  let _0x5160fc = null;
  while (_0x38a045 < _0x331ded || _0x1a323c < _0x4b9524) {
    if (_0x475483[_0x38a045] === _0x42cf1e[_0x1a323c]) {
      _0x38a045++;
      _0x1a323c++;
      continue;
    }
    while (_0x475483[_0x331ded - 1] === _0x42cf1e[_0x4b9524 - 1]) {
      _0x331ded--;
      _0x4b9524--;
    }
    if (_0x331ded === _0x38a045) {
      const _0x784b92 = _0x4b9524 < _0x1d0991 ? _0x1a323c ? _0x42cf1e[_0x1a323c - 1].nextSibling : _0x42cf1e[_0x4b9524 - _0x1a323c] : _0x3dae8a;
      while (_0x1a323c < _0x4b9524) {
        _0xe925e8.insertBefore(_0x42cf1e[_0x1a323c++], _0x784b92);
      }
    } else if (_0x4b9524 === _0x1a323c) {
      while (_0x38a045 < _0x331ded) {
        if (!_0x5160fc || !_0x5160fc.has(_0x475483[_0x38a045])) {
          _0x475483[_0x38a045].remove();
        }
        _0x38a045++;
      }
    } else if (_0x475483[_0x38a045] === _0x42cf1e[_0x4b9524 - 1] && _0x42cf1e[_0x1a323c] === _0x475483[_0x331ded - 1]) {
      const _0x48ee17 = _0x475483[--_0x331ded].nextSibling;
      _0xe925e8.insertBefore(_0x42cf1e[_0x1a323c++], _0x475483[_0x38a045++].nextSibling);
      _0xe925e8.insertBefore(_0x42cf1e[--_0x4b9524], _0x48ee17);
      _0x475483[_0x331ded] = _0x42cf1e[_0x4b9524];
    } else {
      if (!_0x5160fc) {
        _0x5160fc = new Map();
        let _0x524a3b = _0x1a323c;
        while (_0x524a3b < _0x4b9524) {
          _0x5160fc.set(_0x42cf1e[_0x524a3b], _0x524a3b++);
        }
      }
      const _0x40b7c9 = _0x5160fc.get(_0x475483[_0x38a045]);
      if (_0x40b7c9 != null) {
        if (_0x1a323c < _0x40b7c9 && _0x40b7c9 < _0x4b9524) {
          let _0xf146c4 = _0x38a045;
          let _0x20b190 = 1;
          let _0x4e1d8a;
          while (++_0xf146c4 < _0x331ded && _0xf146c4 < _0x4b9524 && (_0x4e1d8a = _0x5160fc.get(_0x475483[_0xf146c4])) != null && _0x4e1d8a === _0x40b7c9 + _0x20b190) {
            _0x20b190++;
          }
          if (_0x20b190 > _0x40b7c9 - _0x1a323c) {
            const _0x485442 = _0x475483[_0x38a045];
            while (_0x1a323c < _0x40b7c9) {
              _0xe925e8.insertBefore(_0x42cf1e[_0x1a323c++], _0x485442);
            }
          } else {
            _0xe925e8.replaceChild(_0x42cf1e[_0x1a323c++], _0x475483[_0x38a045++]);
          }
        } else {
          _0x38a045++;
        }
      } else {
        _0x475483[_0x38a045++].remove();
      }
    }
  }
}
const vs = "_$DX_DELEGATE";
function xl(_0x2e0e2e, _0x16b201, _0x587b9a, _0x4cbeac = {}) {
  let _0x282664;
  ul(_0x4cac96 => {
    _0x282664 = _0x4cac96;
    if (_0x16b201 === document) {
      _0x2e0e2e();
    } else {
      at(_0x16b201, _0x2e0e2e(), _0x16b201.firstChild ? null : undefined, _0x587b9a);
    }
  }, _0x4cbeac.owner);
  return () => {
    _0x282664();
    _0x16b201.textContent = "";
  };
}
function Be(_0x59db3c, _0x55d3e0, _0x407258) {
  let _0x50c5d4;
  const _0x801c88 = () => {
    const _0x46c039 = document.createElement("template");
    _0x46c039.innerHTML = _0x59db3c;
    if (_0x407258) {
      return _0x46c039.content.firstChild.firstChild;
    } else {
      return _0x46c039.content.firstChild;
    }
  };
  const _0x354af5 = _0x55d3e0 ? () => xt(() => document.importNode(_0x50c5d4 ||= _0x801c88(), true)) : () => (_0x50c5d4 ||= _0x801c88()).cloneNode(true);
  _0x354af5.cloneNode = _0x354af5;
  return _0x354af5;
}
function Ol(_0x3db212, _0x1cc7a4 = window.document) {
  const _0x2c97e9 = _0x1cc7a4[vs] ||= new Set();
  for (let _0x5534f1 = 0, _0x418d33 = _0x3db212.length; _0x5534f1 < _0x418d33; _0x5534f1++) {
    const _0x4668c2 = _0x3db212[_0x5534f1];
    if (!_0x2c97e9.has(_0x4668c2)) {
      _0x2c97e9.add(_0x4668c2);
      _0x1cc7a4.addEventListener(_0x4668c2, Sl);
    }
  }
}
function er(_0x12ff09, _0x4502fd, _0x5107a2) {
  if (_0x5107a2 == null) {
    _0x12ff09.removeAttribute(_0x4502fd);
  } else {
    _0x12ff09.setAttribute(_0x4502fd, _0x5107a2);
  }
}
function nt(_0x6e5d2c, _0x4c4665) {
  if (_0x4c4665 == null) {
    _0x6e5d2c.removeAttribute("class");
  } else {
    _0x6e5d2c.className = _0x4c4665;
  }
}
function Pl(_0x547410, _0x177e51, _0x136805) {
  return xt(() => _0x547410(_0x177e51, _0x136805));
}
function at(_0x5cf327, _0x47d976, _0x217943, _0x1d83ee) {
  if (_0x217943 !== undefined && !_0x1d83ee) {
    _0x1d83ee = [];
  }
  if (typeof _0x47d976 != "function") {
    return nr(_0x5cf327, _0x47d976, _0x1d83ee, _0x217943);
  }
  Mt(_0xe58ec4 => nr(_0x5cf327, _0x47d976(), _0xe58ec4, _0x217943), _0x1d83ee);
}
function Sl(_0x145c11) {
  const _0x3ee060 = "$$" + _0x145c11.type;
  let _0x504ac7 = _0x145c11.composedPath && _0x145c11.composedPath()[0] || _0x145c11.target;
  if (_0x145c11.target !== _0x504ac7) {
    Object.defineProperty(_0x145c11, "target", {
      configurable: true,
      value: _0x504ac7
    });
  }
  Object.defineProperty(_0x145c11, "currentTarget", {
    configurable: true,
    get() {
      return _0x504ac7 || document;
    }
  });
  while (_0x504ac7) {
    const _0x524ac4 = _0x504ac7[_0x3ee060];
    if (_0x524ac4 && !_0x504ac7.disabled) {
      const _0x4ee498 = _0x504ac7[_0x3ee060 + "Data"];
      if (_0x4ee498 !== undefined) {
        _0x524ac4.call(_0x504ac7, _0x4ee498, _0x145c11);
      } else {
        _0x524ac4.call(_0x504ac7, _0x145c11);
      }
      if (_0x145c11.cancelBubble) {
        return;
      }
    }
    _0x504ac7 = _0x504ac7._$host || _0x504ac7.parentNode || _0x504ac7.host;
  }
}
function nr(_0x10b199, _0x4ecb23, _0x2de379, _0x59d4e1, _0x156707) {
  while (typeof _0x2de379 == "function") {
    _0x2de379 = _0x2de379();
  }
  if (_0x4ecb23 === _0x2de379) {
    return _0x2de379;
  }
  const _0x101877 = typeof _0x4ecb23;
  const _0x54f6cc = _0x59d4e1 !== undefined;
  _0x10b199 = _0x54f6cc && _0x2de379[0] && _0x2de379[0].parentNode || _0x10b199;
  if (_0x101877 === "string" || _0x101877 === "number") {
    if (_0x101877 === "number") {
      _0x4ecb23 = _0x4ecb23.toString();
    }
    if (_0x54f6cc) {
      let _0x1e2392 = _0x2de379[0];
      if (_0x1e2392 && _0x1e2392.nodeType === 3) {
        _0x1e2392.data = _0x4ecb23;
      } else {
        _0x1e2392 = document.createTextNode(_0x4ecb23);
      }
      _0x2de379 = ne(_0x10b199, _0x2de379, _0x59d4e1, _0x1e2392);
    } else if (_0x2de379 !== "" && typeof _0x2de379 == "string") {
      _0x2de379 = _0x10b199.firstChild.data = _0x4ecb23;
    } else {
      _0x2de379 = _0x10b199.textContent = _0x4ecb23;
    }
  } else if (_0x4ecb23 == null || _0x101877 === "boolean") {
    _0x2de379 = ne(_0x10b199, _0x2de379, _0x59d4e1);
  } else {
    if (_0x101877 === "function") {
      Mt(() => {
        let _0x1a0491 = _0x4ecb23();
        while (typeof _0x1a0491 == "function") {
          _0x1a0491 = _0x1a0491();
        }
        _0x2de379 = nr(_0x10b199, _0x1a0491, _0x2de379, _0x59d4e1);
      });
      return () => _0x2de379;
    }
    if (Array.isArray(_0x4ecb23)) {
      const _0x4eb1fc = [];
      const _0x4a25d1 = _0x2de379 && Array.isArray(_0x2de379);
      if (xi(_0x4eb1fc, _0x4ecb23, _0x2de379, _0x156707)) {
        Mt(() => _0x2de379 = nr(_0x10b199, _0x4eb1fc, _0x2de379, _0x59d4e1, true));
        return () => _0x2de379;
      }
      if (_0x4eb1fc.length === 0) {
        _0x2de379 = ne(_0x10b199, _0x2de379, _0x59d4e1);
        if (_0x54f6cc) {
          return _0x2de379;
        }
      } else if (_0x4a25d1) {
        if (_0x2de379.length === 0) {
          ws(_0x10b199, _0x4eb1fc, _0x59d4e1);
        } else {
          wl(_0x10b199, _0x2de379, _0x4eb1fc);
        }
      } else {
        if (_0x2de379) {
          ne(_0x10b199);
        }
        ws(_0x10b199, _0x4eb1fc);
      }
      _0x2de379 = _0x4eb1fc;
    } else if (_0x4ecb23.nodeType) {
      if (Array.isArray(_0x2de379)) {
        if (_0x54f6cc) {
          return _0x2de379 = ne(_0x10b199, _0x2de379, _0x59d4e1, _0x4ecb23);
        }
        ne(_0x10b199, _0x2de379, null, _0x4ecb23);
      } else if (_0x2de379 == null || _0x2de379 === "" || !_0x10b199.firstChild) {
        _0x10b199.appendChild(_0x4ecb23);
      } else {
        _0x10b199.replaceChild(_0x4ecb23, _0x10b199.firstChild);
      }
      _0x2de379 = _0x4ecb23;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x4ecb23);
    }
  }
  return _0x2de379;
}
function xi(_0x37b8db, _0x3683a4, _0x48b9ab, _0x3f7ccb) {
  let _0x526d82 = false;
  for (let _0x3026de = 0, _0x10049f = _0x3683a4.length; _0x3026de < _0x10049f; _0x3026de++) {
    let _0x33569c = _0x3683a4[_0x3026de];
    let _0x3b1f1d = _0x48b9ab && _0x48b9ab[_0x3026de];
    let _0x2adf3c;
    if (_0x33569c != null && _0x33569c !== true && _0x33569c !== false) {
      if ((_0x2adf3c = typeof _0x33569c) == "object" && _0x33569c.nodeType) {
        _0x37b8db.push(_0x33569c);
      } else if (Array.isArray(_0x33569c)) {
        _0x526d82 = xi(_0x37b8db, _0x33569c, _0x3b1f1d) || _0x526d82;
      } else if (_0x2adf3c === "function") {
        if (_0x3f7ccb) {
          while (typeof _0x33569c == "function") {
            _0x33569c = _0x33569c();
          }
          _0x526d82 = xi(_0x37b8db, Array.isArray(_0x33569c) ? _0x33569c : [_0x33569c], Array.isArray(_0x3b1f1d) ? _0x3b1f1d : [_0x3b1f1d]) || _0x526d82;
        } else {
          _0x37b8db.push(_0x33569c);
          _0x526d82 = true;
        }
      } else {
        const _0x458411 = String(_0x33569c);
        if (_0x3b1f1d && _0x3b1f1d.nodeType === 3 && _0x3b1f1d.data === _0x458411) {
          _0x37b8db.push(_0x3b1f1d);
        } else {
          _0x37b8db.push(document.createTextNode(_0x458411));
        }
      }
    }
  }
  return _0x526d82;
}
function ws(_0x3d49a7, _0x116861, _0x1d6c72 = null) {
  for (let _0x136edf = 0, _0x25ee31 = _0x116861.length; _0x136edf < _0x25ee31; _0x136edf++) {
    _0x3d49a7.insertBefore(_0x116861[_0x136edf], _0x1d6c72);
  }
}
function ne(_0x12a6d7, _0x506c0e, _0x473cea, _0x158ae3) {
  if (_0x473cea === undefined) {
    return _0x12a6d7.textContent = "";
  }
  const _0xbcca33 = _0x158ae3 || document.createTextNode("");
  if (_0x506c0e.length) {
    let _0x4caba7 = false;
    for (let _0x233bbe = _0x506c0e.length - 1; _0x233bbe >= 0; _0x233bbe--) {
      const _0x3c7ced = _0x506c0e[_0x233bbe];
      if (_0xbcca33 !== _0x3c7ced) {
        const _0x38c31f = _0x3c7ced.parentNode === _0x12a6d7;
        if (!_0x4caba7 && !_0x233bbe) {
          if (_0x38c31f) {
            _0x12a6d7.replaceChild(_0xbcca33, _0x3c7ced);
          } else {
            _0x12a6d7.insertBefore(_0xbcca33, _0x473cea);
          }
        } else if (_0x38c31f) {
          _0x3c7ced.remove();
        }
      } else {
        _0x4caba7 = true;
      }
    }
  } else {
    _0x12a6d7.insertBefore(_0xbcca33, _0x473cea);
  }
  return [_0xbcca33];
}
const Oi = Symbol("store-raw");
const Ce = Symbol("store-node");
function ru(_0x241530) {
  let _0x3c9714 = _0x241530[wt];
  if (!_0x3c9714 && (Object.defineProperty(_0x241530, wt, {
    value: _0x3c9714 = new Proxy(_0x241530, kl)
  }), !Array.isArray(_0x241530))) {
    const _0x575646 = Object.keys(_0x241530);
    const _0x74f0f7 = Object.getOwnPropertyDescriptors(_0x241530);
    for (let _0x3abae5 = 0, _0x26032e = _0x575646.length; _0x3abae5 < _0x26032e; _0x3abae5++) {
      const _0x390d5d = _0x575646[_0x3abae5];
      if (_0x74f0f7[_0x390d5d].get) {
        Object.defineProperty(_0x241530, _0x390d5d, {
          enumerable: _0x74f0f7[_0x390d5d].enumerable,
          get: _0x74f0f7[_0x390d5d].get.bind(_0x3c9714)
        });
      }
    }
  }
  return _0x3c9714;
}
function rr(_0x252819) {
  let _0x4f5ae1;
  return _0x252819 != null && typeof _0x252819 == "object" && (_0x252819[wt] || !(_0x4f5ae1 = Object.getPrototypeOf(_0x252819)) || _0x4f5ae1 === Object.prototype || Array.isArray(_0x252819));
}
function ce(_0x413052, _0xe00892 = new Set()) {
  let _0x40e72f;
  let _0x422938;
  let _0x10bbc2;
  let _0x354ddd;
  if (_0x40e72f = _0x413052 != null && _0x413052[Oi]) {
    return _0x40e72f;
  }
  if (!rr(_0x413052) || _0xe00892.has(_0x413052)) {
    return _0x413052;
  }
  if (Array.isArray(_0x413052)) {
    if (Object.isFrozen(_0x413052)) {
      _0x413052 = _0x413052.slice(0);
    } else {
      _0xe00892.add(_0x413052);
    }
    for (let _0x12c1fc = 0, _0x4b4d0b = _0x413052.length; _0x12c1fc < _0x4b4d0b; _0x12c1fc++) {
      _0x10bbc2 = _0x413052[_0x12c1fc];
      if ((_0x422938 = ce(_0x10bbc2, _0xe00892)) !== _0x10bbc2) {
        _0x413052[_0x12c1fc] = _0x422938;
      }
    }
  } else {
    if (Object.isFrozen(_0x413052)) {
      _0x413052 = Object.assign({}, _0x413052);
    } else {
      _0xe00892.add(_0x413052);
    }
    const _0x4cc0dc = Object.keys(_0x413052);
    const _0x5d0236 = Object.getOwnPropertyDescriptors(_0x413052);
    for (let _0x31a962 = 0, _0x5e56b0 = _0x4cc0dc.length; _0x31a962 < _0x5e56b0; _0x31a962++) {
      _0x354ddd = _0x4cc0dc[_0x31a962];
      if (!_0x5d0236[_0x354ddd].get) {
        _0x10bbc2 = _0x413052[_0x354ddd];
        if ((_0x422938 = ce(_0x10bbc2, _0xe00892)) !== _0x10bbc2) {
          _0x413052[_0x354ddd] = _0x422938;
        }
      }
    }
  }
  return _0x413052;
}
function Vo(_0x5da1a2) {
  let _0x2516e6 = _0x5da1a2[Ce];
  if (!_0x2516e6) {
    Object.defineProperty(_0x5da1a2, Ce, {
      value: _0x2516e6 = Object.create(null)
    });
  }
  return _0x2516e6;
}
function Pi(_0x656eab, _0x31dae1, _0x3640c8) {
  return _0x656eab[_0x31dae1] ||= ou(_0x3640c8);
}
function Tl(_0x29a256, _0x46db58) {
  const _0x3c8bca = Reflect.getOwnPropertyDescriptor(_0x29a256, _0x46db58);
  if (!!_0x3c8bca && !_0x3c8bca.get && !!_0x3c8bca.configurable && _0x46db58 !== wt && _0x46db58 !== Ce) {
    delete _0x3c8bca.value;
    delete _0x3c8bca.writable;
    _0x3c8bca.get = () => _0x29a256[wt][_0x46db58];
  }
  return _0x3c8bca;
}
function iu(_0x4615a2) {
  if (Qc()) {
    const _0x13db89 = Vo(_0x4615a2);
    (_0x13db89._ ||= ou())();
  }
}
function Ml(_0x5d9b57) {
  iu(_0x5d9b57);
  return Reflect.ownKeys(_0x5d9b57);
}
function ou(_0xf39a2c) {
  const [_0x21a129, _0xfb152b] = vi(_0xf39a2c, {
    equals: false,
    internal: true
  });
  _0x21a129.$ = _0xfb152b;
  return _0x21a129;
}
const kl = {
  get(_0x4c4753, _0x3927a1, _0x488c49) {
    if (_0x3927a1 === Oi) {
      return _0x4c4753;
    }
    if (_0x3927a1 === wt) {
      return _0x488c49;
    }
    if (_0x3927a1 === bs) {
      iu(_0x4c4753);
      return _0x488c49;
    }
    const _0x4abdf9 = Vo(_0x4c4753);
    const _0x3fd075 = _0x4abdf9[_0x3927a1];
    let _0x322bc2 = _0x3fd075 ? _0x3fd075() : _0x4c4753[_0x3927a1];
    if (_0x3927a1 === Ce || _0x3927a1 === "__proto__") {
      return _0x322bc2;
    }
    if (!_0x3fd075) {
      const _0x39eef5 = Object.getOwnPropertyDescriptor(_0x4c4753, _0x3927a1);
      if (Qc() && (typeof _0x322bc2 != "function" || _0x4c4753.hasOwnProperty(_0x3927a1)) && (!_0x39eef5 || !_0x39eef5.get)) {
        _0x322bc2 = Pi(_0x4abdf9, _0x3927a1, _0x322bc2)();
      }
    }
    if (rr(_0x322bc2)) {
      return ru(_0x322bc2);
    } else {
      return _0x322bc2;
    }
  },
  has(_0x9daba0, _0x2c29e7) {
    if (_0x2c29e7 === Oi || _0x2c29e7 === wt || _0x2c29e7 === bs || _0x2c29e7 === Ce || _0x2c29e7 === "__proto__") {
      return true;
    } else {
      this.get(_0x9daba0, _0x2c29e7, _0x9daba0);
      return _0x2c29e7 in _0x9daba0;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Ml,
  getOwnPropertyDescriptor: Tl
};
function ir(_0x3690d0, _0x9e95ca, _0x397b29, _0x29399b = false) {
  if (!_0x29399b && _0x3690d0[_0x9e95ca] === _0x397b29) {
    return;
  }
  const _0x4c99ca = _0x3690d0[_0x9e95ca];
  const _0x1d0c83 = _0x3690d0.length;
  if (_0x397b29 === undefined) {
    delete _0x3690d0[_0x9e95ca];
  } else {
    _0x3690d0[_0x9e95ca] = _0x397b29;
  }
  let _0x566746 = Vo(_0x3690d0);
  let _0x235bee;
  if (_0x235bee = Pi(_0x566746, _0x9e95ca, _0x4c99ca)) {
    _0x235bee.$(() => _0x397b29);
  }
  if (Array.isArray(_0x3690d0) && _0x3690d0.length !== _0x1d0c83) {
    for (let _0x1d88e4 = _0x3690d0.length; _0x1d88e4 < _0x1d0c83; _0x1d88e4++) {
      if (_0x235bee = _0x566746[_0x1d88e4]) {
        _0x235bee.$();
      }
    }
    if (_0x235bee = Pi(_0x566746, "length", _0x1d0c83)) {
      _0x235bee.$(_0x3690d0.length);
    }
  }
  if (_0x235bee = _0x566746._) {
    _0x235bee.$();
  }
}
function su(_0x362028, _0x290ad6) {
  const _0x23a445 = Object.keys(_0x290ad6);
  for (let _0x1bc7fc = 0; _0x1bc7fc < _0x23a445.length; _0x1bc7fc += 1) {
    const _0x17c36b = _0x23a445[_0x1bc7fc];
    ir(_0x362028, _0x17c36b, _0x290ad6[_0x17c36b]);
  }
}
function Dl(_0xb06636, _0x471a63) {
  if (typeof _0x471a63 == "function") {
    _0x471a63 = _0x471a63(_0xb06636);
  }
  _0x471a63 = ce(_0x471a63);
  if (Array.isArray(_0x471a63)) {
    if (_0xb06636 === _0x471a63) {
      return;
    }
    let _0x3f7ac0 = 0;
    let _0x3b1e03 = _0x471a63.length;
    for (; _0x3f7ac0 < _0x3b1e03; _0x3f7ac0++) {
      const _0x13647f = _0x471a63[_0x3f7ac0];
      if (_0xb06636[_0x3f7ac0] !== _0x13647f) {
        ir(_0xb06636, _0x3f7ac0, _0x13647f);
      }
    }
    ir(_0xb06636, "length", _0x3b1e03);
  } else {
    su(_0xb06636, _0x471a63);
  }
}
function Pe(_0x4f00e1, _0x41238e, _0xe4820b = []) {
  let _0x3e147e;
  let _0x193f85 = _0x4f00e1;
  if (_0x41238e.length > 1) {
    _0x3e147e = _0x41238e.shift();
    const _0x5213cd = typeof _0x3e147e;
    const _0x10ef81 = Array.isArray(_0x4f00e1);
    if (Array.isArray(_0x3e147e)) {
      for (let _0x184a1d = 0; _0x184a1d < _0x3e147e.length; _0x184a1d++) {
        Pe(_0x4f00e1, [_0x3e147e[_0x184a1d]].concat(_0x41238e), _0xe4820b);
      }
      return;
    } else if (_0x10ef81 && _0x5213cd === "function") {
      for (let _0x4c6164 = 0; _0x4c6164 < _0x4f00e1.length; _0x4c6164++) {
        if (_0x3e147e(_0x4f00e1[_0x4c6164], _0x4c6164)) {
          Pe(_0x4f00e1, [_0x4c6164].concat(_0x41238e), _0xe4820b);
        }
      }
      return;
    } else if (_0x10ef81 && _0x5213cd === "object") {
      const {
        from: _0x19817b = 0,
        to: _0x5ca311 = _0x4f00e1.length - 1,
        by: _0xc8abfa = 1
      } = _0x3e147e;
      for (let _0x410053 = _0x19817b; _0x410053 <= _0x5ca311; _0x410053 += _0xc8abfa) {
        Pe(_0x4f00e1, [_0x410053].concat(_0x41238e), _0xe4820b);
      }
      return;
    } else if (_0x41238e.length > 1) {
      Pe(_0x4f00e1[_0x3e147e], _0x41238e, [_0x3e147e].concat(_0xe4820b));
      return;
    }
    _0x193f85 = _0x4f00e1[_0x3e147e];
    _0xe4820b = [_0x3e147e].concat(_0xe4820b);
  }
  let _0x3fc4a8 = _0x41238e[0];
  if ((typeof _0x3fc4a8 != "function" || !(_0x3fc4a8 = _0x3fc4a8(_0x193f85, _0xe4820b), _0x3fc4a8 === _0x193f85)) && (_0x3e147e !== undefined || _0x3fc4a8 != null)) {
    _0x3fc4a8 = ce(_0x3fc4a8);
    if (_0x3e147e === undefined || rr(_0x193f85) && rr(_0x3fc4a8) && !Array.isArray(_0x3fc4a8)) {
      su(_0x193f85, _0x3fc4a8);
    } else {
      ir(_0x4f00e1, _0x3e147e, _0x3fc4a8);
    }
  }
}
function $l(...[_0x3207da, _0x19dc0d]) {
  const _0x2b8179 = ce(_0x3207da || {});
  const _0x4eb001 = Array.isArray(_0x2b8179);
  const _0x803932 = ru(_0x2b8179);
  function _0x57fc6e(..._0x4a70c5) {
    ll(() => {
      if (_0x4eb001 && _0x4a70c5.length === 1) {
        Dl(_0x2b8179, _0x4a70c5[0]);
      } else {
        Pe(_0x2b8179, _0x4a70c5);
      }
    });
  }
  return [_0x803932, _0x57fc6e];
}
function Rl(_0x8400e4, _0x153d1c) {
  const _0x2ec1b8 = fl(_0x153d1c);
  return [_0x9595cb => rt(_0x2ec1b8.Provider, {
    value: _0x8400e4(_0x9595cb),
    get children() {
      return _0x9595cb.children;
    }
  }), () => hl(_0x2ec1b8)];
}
const au = {
  view: "dyno",
  dynoInfo: {
    rpm: 0,
    hp: [],
    speed: [],
    torque: []
  },
  lastDynoRun: {
    maxHP: 0,
    maxTorque: 0,
    maxHpRPM: 0,
    maxTorqueRPM: 0
  },
  show: false
};
const [Cl, El] = Rl(() => {
  const [_0x5bb8e0, _0x48b783] = $l({
    ...au
  });
  _0x405935.register("mechanics:dyno:setState", async _0x40f527 => {
    _0x48b783({
      ..._0x5bb8e0,
      ..._0x40f527
    });
  });
  _0x405935.register("mechanics:dyno:setChartInfo", async _0x82cb50 => {
    _0x48b783(_0x3d99aa => {
      const _0x5d4fab = [..._0x3d99aa.dynoInfo.hp];
      _0x5d4fab.push({
        x: Date.now(),
        y: _0x82cb50.hp
      });
      const _0x49223b = [..._0x3d99aa.dynoInfo.speed];
      _0x49223b.push({
        x: Date.now(),
        y: _0x82cb50.speed
      });
      const _0x348f36 = [..._0x3d99aa.dynoInfo.torque];
      _0x348f36.push({
        x: Date.now(),
        y: _0x82cb50.torque
      });
      console.log({
        rpm: _0x82cb50.rpm,
        hp: [..._0x5d4fab],
        speed: [..._0x49223b],
        torque: [..._0x348f36]
      });
      return {
        dynoInfo: {
          rpm: _0x82cb50.rpm,
          hp: [..._0x5d4fab],
          speed: [..._0x49223b],
          torque: [..._0x348f36]
        }
      };
    });
  });
  return {
    state: _0x5bb8e0,
    setState: _0x48b783
  };
});
const qo = () => El();
function je(_0xeaa7f2) {
  return _0xeaa7f2 + 0.5 | 0;
}
const It = (_0x5b8ca1, _0x1c4d17, _0x5c769a) => Math.max(Math.min(_0x5b8ca1, _0x5c769a), _0x1c4d17);
function Se(_0x1beec8) {
  return It(je(_0x1beec8 * 2.55), 0, 255);
}
function Nt(_0x14cff6) {
  return It(je(_0x14cff6 * 255), 0, 255);
}
function Pt(_0x191be8) {
  return It(je(_0x191be8 / 2.55) / 100, 0, 1);
}
function xs(_0x2df554) {
  return It(je(_0x2df554 * 100), 0, 100);
}
const dt = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
const Si = [..."0123456789ABCDEF"];
const Il = _0x3579d2 => Si[_0x3579d2 & 15];
const Ll = _0x3f1e47 => Si[(_0x3f1e47 & 240) >> 4] + Si[_0x3f1e47 & 15];
const Qe = _0x5218bd => (_0x5218bd & 240) >> 4 === (_0x5218bd & 15);
const Al = _0xf26a2c => Qe(_0xf26a2c.r) && Qe(_0xf26a2c.g) && Qe(_0xf26a2c.b) && Qe(_0xf26a2c.a);
function Nl(_0x22c188) {
  var _0x3b22a7 = _0x22c188.length;
  var _0x41bac6;
  if (_0x22c188[0] === "#") {
    if (_0x3b22a7 === 4 || _0x3b22a7 === 5) {
      _0x41bac6 = {
        r: dt[_0x22c188[1]] * 17 & 255,
        g: dt[_0x22c188[2]] * 17 & 255,
        b: dt[_0x22c188[3]] * 17 & 255,
        a: _0x3b22a7 === 5 ? dt[_0x22c188[4]] * 17 : 255
      };
    } else if (_0x3b22a7 === 7 || _0x3b22a7 === 9) {
      _0x41bac6 = {
        r: dt[_0x22c188[1]] << 4 | dt[_0x22c188[2]],
        g: dt[_0x22c188[3]] << 4 | dt[_0x22c188[4]],
        b: dt[_0x22c188[5]] << 4 | dt[_0x22c188[6]],
        a: _0x3b22a7 === 9 ? dt[_0x22c188[7]] << 4 | dt[_0x22c188[8]] : 255
      };
    }
  }
  return _0x41bac6;
}
const Fl = (_0x520e69, _0x34b770) => _0x520e69 < 255 ? _0x34b770(_0x520e69) : "";
function zl(_0x52334a) {
  var _0x3e4a80 = Al(_0x52334a) ? Il : Ll;
  if (_0x52334a) {
    return "#" + _0x3e4a80(_0x52334a.r) + _0x3e4a80(_0x52334a.g) + _0x3e4a80(_0x52334a.b) + Fl(_0x52334a.a, _0x3e4a80);
  } else {
    return undefined;
  }
}
const Bl = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function cu(_0xfe57d4, _0x5d9327, _0x4ea7f2) {
  const _0x3cf5a3 = _0x5d9327 * Math.min(_0x4ea7f2, 1 - _0x4ea7f2);
  const _0x1d3573 = (_0x329cba, _0x252cae = (_0x329cba + _0xfe57d4 / 30) % 12) => _0x4ea7f2 - _0x3cf5a3 * Math.max(Math.min(_0x252cae - 3, 9 - _0x252cae, 1), -1);
  return [_0x1d3573(0), _0x1d3573(8), _0x1d3573(4)];
}
function jl(_0x44c06f, _0x140787, _0x4a60c8) {
  const _0xdab613 = (_0x290b16, _0x4f8cb5 = (_0x290b16 + _0x44c06f / 60) % 6) => _0x4a60c8 - _0x4a60c8 * _0x140787 * Math.max(Math.min(_0x4f8cb5, 4 - _0x4f8cb5, 1), 0);
  return [_0xdab613(5), _0xdab613(3), _0xdab613(1)];
}
function Wl(_0x55e6cc, _0x573e23, _0xaabc7d) {
  const _0xe60cfe = cu(_0x55e6cc, 1, 0.5);
  let _0x50e1b2;
  if (_0x573e23 + _0xaabc7d > 1) {
    _0x50e1b2 = 1 / (_0x573e23 + _0xaabc7d);
    _0x573e23 *= _0x50e1b2;
    _0xaabc7d *= _0x50e1b2;
  }
  _0x50e1b2 = 0;
  for (; _0x50e1b2 < 3; _0x50e1b2++) {
    _0xe60cfe[_0x50e1b2] *= 1 - _0x573e23 - _0xaabc7d;
    _0xe60cfe[_0x50e1b2] += _0x573e23;
  }
  return _0xe60cfe;
}
function Ul(_0x3a7ed1, _0x1068ac, _0x41b1b4, _0x535afe, _0x494dae) {
  if (_0x3a7ed1 === _0x494dae) {
    return (_0x1068ac - _0x41b1b4) / _0x535afe + (_0x1068ac < _0x41b1b4 ? 6 : 0);
  } else if (_0x1068ac === _0x494dae) {
    return (_0x41b1b4 - _0x3a7ed1) / _0x535afe + 2;
  } else {
    return (_0x3a7ed1 - _0x1068ac) / _0x535afe + 4;
  }
}
function Xo(_0x3c9067) {
  const _0x385fe3 = _0x3c9067.r / 255;
  const _0x359ba9 = _0x3c9067.g / 255;
  const _0x34d413 = _0x3c9067.b / 255;
  const _0x21eb22 = Math.max(_0x385fe3, _0x359ba9, _0x34d413);
  const _0x44ee37 = Math.min(_0x385fe3, _0x359ba9, _0x34d413);
  const _0x494c24 = (_0x21eb22 + _0x44ee37) / 2;
  let _0x3c370c;
  let _0x2c4f0c;
  let _0x5b9412;
  if (_0x21eb22 !== _0x44ee37) {
    _0x5b9412 = _0x21eb22 - _0x44ee37;
    _0x2c4f0c = _0x494c24 > 0.5 ? _0x5b9412 / (2 - _0x21eb22 - _0x44ee37) : _0x5b9412 / (_0x21eb22 + _0x44ee37);
    _0x3c370c = Ul(_0x385fe3, _0x359ba9, _0x34d413, _0x5b9412, _0x21eb22);
    _0x3c370c = _0x3c370c * 60 + 0.5;
  }
  return [_0x3c370c | 0, _0x2c4f0c || 0, _0x494c24];
}
function Qo(_0x5ded00, _0x347381, _0x32f757, _0xfa0dab) {
  return (Array.isArray(_0x347381) ? _0x5ded00(_0x347381[0], _0x347381[1], _0x347381[2]) : _0x5ded00(_0x347381, _0x32f757, _0xfa0dab)).map(Nt);
}
function Go(_0x98cd0d, _0xe17780, _0x4215de) {
  return Qo(cu, _0x98cd0d, _0xe17780, _0x4215de);
}
function Hl(_0x3dae04, _0xbe0d6, _0x5bda1a) {
  return Qo(Wl, _0x3dae04, _0xbe0d6, _0x5bda1a);
}
function Yl(_0x384d1e, _0x1d524e, _0xa9e7d5) {
  return Qo(jl, _0x384d1e, _0x1d524e, _0xa9e7d5);
}
function uu(_0x2f9e4d) {
  return (_0x2f9e4d % 360 + 360) % 360;
}
function Vl(_0xc3195b) {
  const _0x50e77d = Bl.exec(_0xc3195b);
  let _0x481129 = 255;
  let _0x514ad4;
  if (!_0x50e77d) {
    return;
  }
  if (_0x50e77d[5] !== _0x514ad4) {
    _0x481129 = _0x50e77d[6] ? Se(+_0x50e77d[5]) : Nt(+_0x50e77d[5]);
  }
  const _0x3ce1e1 = uu(+_0x50e77d[2]);
  const _0x2e6ded = +_0x50e77d[3] / 100;
  const _0x1082d9 = +_0x50e77d[4] / 100;
  if (_0x50e77d[1] === "hwb") {
    _0x514ad4 = Hl(_0x3ce1e1, _0x2e6ded, _0x1082d9);
  } else if (_0x50e77d[1] === "hsv") {
    _0x514ad4 = Yl(_0x3ce1e1, _0x2e6ded, _0x1082d9);
  } else {
    _0x514ad4 = Go(_0x3ce1e1, _0x2e6ded, _0x1082d9);
  }
  return {
    r: _0x514ad4[0],
    g: _0x514ad4[1],
    b: _0x514ad4[2],
    a: _0x481129
  };
}
function ql(_0x53557d, _0x2ccbef) {
  var _0x2257a6 = Xo(_0x53557d);
  _0x2257a6[0] = uu(_0x2257a6[0] + _0x2ccbef);
  _0x2257a6 = Go(_0x2257a6);
  _0x53557d.r = _0x2257a6[0];
  _0x53557d.g = _0x2257a6[1];
  _0x53557d.b = _0x2257a6[2];
}
function Xl(_0x5523b5) {
  if (!_0x5523b5) {
    return;
  }
  const _0x13fa0f = Xo(_0x5523b5);
  const _0x101602 = _0x13fa0f[0];
  const _0x4a41ef = xs(_0x13fa0f[1]);
  const _0x285370 = xs(_0x13fa0f[2]);
  if (_0x5523b5.a < 255) {
    return "hsla(" + _0x101602 + ", " + _0x4a41ef + "%, " + _0x285370 + "%, " + Pt(_0x5523b5.a) + ")";
  } else {
    return "hsl(" + _0x101602 + ", " + _0x4a41ef + "%, " + _0x285370 + "%)";
  }
}
const Os = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
};
const Ps = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Ql() {
  const _0x27129b = {};
  const _0xe9a92a = Object.keys(Ps);
  const _0x4b7eb8 = Object.keys(Os);
  let _0x167b61;
  let _0x25b9aa;
  let _0x51d571;
  let _0x25757a;
  let _0x2be43f;
  for (_0x167b61 = 0; _0x167b61 < _0xe9a92a.length; _0x167b61++) {
    _0x25757a = _0x2be43f = _0xe9a92a[_0x167b61];
    _0x25b9aa = 0;
    for (; _0x25b9aa < _0x4b7eb8.length; _0x25b9aa++) {
      _0x51d571 = _0x4b7eb8[_0x25b9aa];
      _0x2be43f = _0x2be43f.replace(_0x51d571, Os[_0x51d571]);
    }
    _0x51d571 = parseInt(Ps[_0x25757a], 16);
    _0x27129b[_0x2be43f] = [_0x51d571 >> 16 & 255, _0x51d571 >> 8 & 255, _0x51d571 & 255];
  }
  return _0x27129b;
}
let Ge;
function Gl(_0x1e0ae9) {
  if (!Ge) {
    Ge = Ql();
    Ge.transparent = [0, 0, 0, 0];
  }
  const _0x36a058 = Ge[_0x1e0ae9.toLowerCase()];
  return _0x36a058 && {
    r: _0x36a058[0],
    g: _0x36a058[1],
    b: _0x36a058[2],
    a: _0x36a058.length === 4 ? _0x36a058[3] : 255
  };
}
const Kl = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Zl(_0x37c1f0) {
  const _0x435cff = Kl.exec(_0x37c1f0);
  let _0xbebfb7 = 255;
  let _0x525394;
  let _0x105d55;
  let _0x4a7de9;
  if (_0x435cff) {
    if (_0x435cff[7] !== _0x525394) {
      const _0x236486 = +_0x435cff[7];
      _0xbebfb7 = _0x435cff[8] ? Se(_0x236486) : It(_0x236486 * 255, 0, 255);
    }
    _0x525394 = +_0x435cff[1];
    _0x105d55 = +_0x435cff[3];
    _0x4a7de9 = +_0x435cff[5];
    _0x525394 = (_0x435cff[2] ? Se(_0x525394) : It(_0x525394, 0, 255)) & 255;
    _0x105d55 = (_0x435cff[4] ? Se(_0x105d55) : It(_0x105d55, 0, 255)) & 255;
    _0x4a7de9 = (_0x435cff[6] ? Se(_0x4a7de9) : It(_0x4a7de9, 0, 255)) & 255;
    return {
      r: _0x525394,
      g: _0x105d55,
      b: _0x4a7de9,
      a: _0xbebfb7
    };
  }
}
function Jl(_0x465a65) {
  return _0x465a65 && (_0x465a65.a < 255 ? "rgba(" + _0x465a65.r + ", " + _0x465a65.g + ", " + _0x465a65.b + ", " + Pt(_0x465a65.a) + ")" : "rgb(" + _0x465a65.r + ", " + _0x465a65.g + ", " + _0x465a65.b + ")");
}
const ci = _0x5d1a4e => _0x5d1a4e <= 0.0031308 ? _0x5d1a4e * 12.92 : Math.pow(_0x5d1a4e, 1 / 2.4) * 1.055 - 0.055;
const re = _0x2b03d5 => _0x2b03d5 <= 0.04045 ? _0x2b03d5 / 12.92 : Math.pow((_0x2b03d5 + 0.055) / 1.055, 2.4);
function tf(_0x4217ad, _0x415a58, _0x5689ac) {
  const _0x583526 = re(Pt(_0x4217ad.r));
  const _0x52ecd0 = re(Pt(_0x4217ad.g));
  const _0x533c2c = re(Pt(_0x4217ad.b));
  return {
    r: Nt(ci(_0x583526 + _0x5689ac * (re(Pt(_0x415a58.r)) - _0x583526))),
    g: Nt(ci(_0x52ecd0 + _0x5689ac * (re(Pt(_0x415a58.g)) - _0x52ecd0))),
    b: Nt(ci(_0x533c2c + _0x5689ac * (re(Pt(_0x415a58.b)) - _0x533c2c))),
    a: _0x4217ad.a + _0x5689ac * (_0x415a58.a - _0x4217ad.a)
  };
}
function Ke(_0x48518d, _0x2824b2, _0x1e20b1) {
  if (_0x48518d) {
    let _0x149fe8 = Xo(_0x48518d);
    _0x149fe8[_0x2824b2] = Math.max(0, Math.min(_0x149fe8[_0x2824b2] + _0x149fe8[_0x2824b2] * _0x1e20b1, _0x2824b2 === 0 ? 360 : 1));
    _0x149fe8 = Go(_0x149fe8);
    _0x48518d.r = _0x149fe8[0];
    _0x48518d.g = _0x149fe8[1];
    _0x48518d.b = _0x149fe8[2];
  }
}
function lu(_0x4a5054, _0x3c99de) {
  return _0x4a5054 && Object.assign(_0x3c99de || {}, _0x4a5054);
}
function Ss(_0x3bd8c9) {
  var _0x1915dd = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  if (Array.isArray(_0x3bd8c9)) {
    if (_0x3bd8c9.length >= 3) {
      _0x1915dd = {
        r: _0x3bd8c9[0],
        g: _0x3bd8c9[1],
        b: _0x3bd8c9[2],
        a: 255
      };
      if (_0x3bd8c9.length > 3) {
        _0x1915dd.a = Nt(_0x3bd8c9[3]);
      }
    }
  } else {
    _0x1915dd = lu(_0x3bd8c9, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    });
    _0x1915dd.a = Nt(_0x1915dd.a);
  }
  return _0x1915dd;
}
function ef(_0x9b1b0b) {
  if (_0x9b1b0b.charAt(0) === "r") {
    return Zl(_0x9b1b0b);
  } else {
    return Vl(_0x9b1b0b);
  }
}
class Ee {
  constructor(_0x3ec300) {
    if (_0x3ec300 instanceof Ee) {
      return _0x3ec300;
    }
    const _0x1a9a6d = typeof _0x3ec300;
    let _0x22b150;
    if (_0x1a9a6d === "object") {
      _0x22b150 = Ss(_0x3ec300);
    } else if (_0x1a9a6d === "string") {
      _0x22b150 = Nl(_0x3ec300) || Gl(_0x3ec300) || ef(_0x3ec300);
    }
    this._rgb = _0x22b150;
    this._valid = !!_0x22b150;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var _0x42c642 = lu(this._rgb);
    if (_0x42c642) {
      _0x42c642.a = Pt(_0x42c642.a);
    }
    return _0x42c642;
  }
  set rgb(_0x114757) {
    this._rgb = Ss(_0x114757);
  }
  rgbString() {
    if (this._valid) {
      return Jl(this._rgb);
    } else {
      return undefined;
    }
  }
  hexString() {
    if (this._valid) {
      return zl(this._rgb);
    } else {
      return undefined;
    }
  }
  hslString() {
    if (this._valid) {
      return Xl(this._rgb);
    } else {
      return undefined;
    }
  }
  mix(_0x55f90a, _0x4bb0a1) {
    if (_0x55f90a) {
      const _0x227f3e = this.rgb;
      const _0x1643eb = _0x55f90a.rgb;
      let _0x1fb791;
      const _0x5c5222 = _0x4bb0a1 === _0x1fb791 ? 0.5 : _0x4bb0a1;
      const _0x3d4241 = _0x5c5222 * 2 - 1;
      const _0xeafbb0 = _0x227f3e.a - _0x1643eb.a;
      const _0x2c30fd = ((_0x3d4241 * _0xeafbb0 === -1 ? _0x3d4241 : (_0x3d4241 + _0xeafbb0) / (1 + _0x3d4241 * _0xeafbb0)) + 1) / 2;
      _0x1fb791 = 1 - _0x2c30fd;
      _0x227f3e.r = _0x2c30fd * _0x227f3e.r + _0x1fb791 * _0x1643eb.r + 0.5 & 255;
      _0x227f3e.g = _0x2c30fd * _0x227f3e.g + _0x1fb791 * _0x1643eb.g + 0.5 & 255;
      _0x227f3e.b = _0x2c30fd * _0x227f3e.b + _0x1fb791 * _0x1643eb.b + 0.5 & 255;
      _0x227f3e.a = _0x5c5222 * _0x227f3e.a + (1 - _0x5c5222) * _0x1643eb.a;
      this.rgb = _0x227f3e;
    }
    return this;
  }
  interpolate(_0x2d5b29, _0x15e692) {
    if (_0x2d5b29) {
      this._rgb = tf(this._rgb, _0x2d5b29._rgb, _0x15e692);
    }
    return this;
  }
  clone() {
    return new Ee(this.rgb);
  }
  alpha(_0x298220) {
    this._rgb.a = Nt(_0x298220);
    return this;
  }
  clearer(_0x26f95a) {
    const _0x4da819 = this._rgb;
    _0x4da819.a *= 1 - _0x26f95a;
    return this;
  }
  greyscale() {
    const _0x1e24ff = this._rgb;
    const _0x50c90a = je(_0x1e24ff.r * 0.3 + _0x1e24ff.g * 0.59 + _0x1e24ff.b * 0.11);
    _0x1e24ff.r = _0x1e24ff.g = _0x1e24ff.b = _0x50c90a;
    return this;
  }
  opaquer(_0x462997) {
    const _0x1f4372 = this._rgb;
    _0x1f4372.a *= 1 + _0x462997;
    return this;
  }
  negate() {
    const _0x5d7183 = this._rgb;
    _0x5d7183.r = 255 - _0x5d7183.r;
    _0x5d7183.g = 255 - _0x5d7183.g;
    _0x5d7183.b = 255 - _0x5d7183.b;
    return this;
  }
  lighten(_0x391ee2) {
    Ke(this._rgb, 2, _0x391ee2);
    return this;
  }
  darken(_0xd78a9d) {
    Ke(this._rgb, 2, -_0xd78a9d);
    return this;
  }
  saturate(_0x4d8836) {
    Ke(this._rgb, 1, _0x4d8836);
    return this;
  }
  desaturate(_0x410324) {
    Ke(this._rgb, 1, -_0x410324);
    return this;
  }
  rotate(_0x313b98) {
    ql(this._rgb, _0x313b98);
    return this;
  }
}
const nf = (() => {
  let _0x3bf777 = 0;
  return () => _0x3bf777++;
})();
function z(_0x4bb73e) {
  return _0x4bb73e === null || typeof _0x4bb73e === "undefined";
}
function H(_0x4b11ac) {
  if (Array.isArray && Array.isArray(_0x4b11ac)) {
    return true;
  }
  const _0x1df1c5 = Object.prototype.toString.call(_0x4b11ac);
  return _0x1df1c5.slice(0, 7) === "[object" && _0x1df1c5.slice(-6) === "Array]";
}
function C(_0x8c118) {
  return _0x8c118 !== null && Object.prototype.toString.call(_0x8c118) === "[object Object]";
}
function K(_0x50f06f) {
  return (typeof _0x50f06f == "number" || _0x50f06f instanceof Number) && isFinite(+_0x50f06f);
}
function st(_0x2ae7f1, _0x385529) {
  if (K(_0x2ae7f1)) {
    return _0x2ae7f1;
  } else {
    return _0x385529;
  }
}
function I(_0x27e9dc, _0x40edf1) {
  if (typeof _0x27e9dc === "undefined") {
    return _0x40edf1;
  } else {
    return _0x27e9dc;
  }
}
const rf = (_0x4eac40, _0x52b965) => typeof _0x4eac40 == "string" && _0x4eac40.endsWith("%") ? parseFloat(_0x4eac40) / 100 * _0x52b965 : +_0x4eac40;
function j(_0x40120a, _0x2a18ca, _0x50f30d) {
  if (_0x40120a && typeof _0x40120a.call == "function") {
    return _0x40120a.apply(_0x50f30d, _0x2a18ca);
  }
}
function tt(_0x338f8c, _0x12901c, _0x999cca, _0x537e97) {
  let _0x343137;
  let _0x3c2814;
  let _0x37cd3c;
  if (H(_0x338f8c)) {
    _0x3c2814 = _0x338f8c.length;
    if (_0x537e97) {
      for (_0x343137 = _0x3c2814 - 1; _0x343137 >= 0; _0x343137--) {
        _0x12901c.call(_0x999cca, _0x338f8c[_0x343137], _0x343137);
      }
    } else {
      for (_0x343137 = 0; _0x343137 < _0x3c2814; _0x343137++) {
        _0x12901c.call(_0x999cca, _0x338f8c[_0x343137], _0x343137);
      }
    }
  } else if (C(_0x338f8c)) {
    _0x37cd3c = Object.keys(_0x338f8c);
    _0x3c2814 = _0x37cd3c.length;
    _0x343137 = 0;
    for (; _0x343137 < _0x3c2814; _0x343137++) {
      _0x12901c.call(_0x999cca, _0x338f8c[_0x37cd3c[_0x343137]], _0x37cd3c[_0x343137]);
    }
  }
}
function Ts(_0x1bdf53, _0x30498c) {
  let _0x496b1f;
  let _0x1c9fcb;
  let _0x51c0ff;
  let _0x1b60c2;
  if (!_0x1bdf53 || !_0x30498c || _0x1bdf53.length !== _0x30498c.length) {
    return false;
  }
  _0x496b1f = 0;
  _0x1c9fcb = _0x1bdf53.length;
  for (; _0x496b1f < _0x1c9fcb; ++_0x496b1f) {
    _0x51c0ff = _0x1bdf53[_0x496b1f];
    _0x1b60c2 = _0x30498c[_0x496b1f];
    if (_0x51c0ff.datasetIndex !== _0x1b60c2.datasetIndex || _0x51c0ff.index !== _0x1b60c2.index) {
      return false;
    }
  }
  return true;
}
function or(_0x452044) {
  if (H(_0x452044)) {
    return _0x452044.map(or);
  }
  if (C(_0x452044)) {
    const _0xa0511c = Object.create(null);
    const _0x1d71c8 = Object.keys(_0x452044);
    const _0x3bb93f = _0x1d71c8.length;
    let _0x5243fd = 0;
    for (; _0x5243fd < _0x3bb93f; ++_0x5243fd) {
      _0xa0511c[_0x1d71c8[_0x5243fd]] = or(_0x452044[_0x1d71c8[_0x5243fd]]);
    }
    return _0xa0511c;
  }
  return _0x452044;
}
function fu(_0x532216) {
  return ["__proto__", "prototype", "constructor"].indexOf(_0x532216) === -1;
}
function of(_0x38fc4a, _0x4d51dc, _0x11c036, _0x13329a) {
  if (!fu(_0x38fc4a)) {
    return;
  }
  const _0x55406e = _0x4d51dc[_0x38fc4a];
  const _0x219790 = _0x11c036[_0x38fc4a];
  if (C(_0x55406e) && C(_0x219790)) {
    Ie(_0x55406e, _0x219790, _0x13329a);
  } else {
    _0x4d51dc[_0x38fc4a] = or(_0x219790);
  }
}
function Ie(_0x99caa8, _0x519e57, _0x3ad617) {
  const _0x190bcd = H(_0x519e57) ? _0x519e57 : [_0x519e57];
  const _0x42be1a = _0x190bcd.length;
  if (!C(_0x99caa8)) {
    return _0x99caa8;
  }
  _0x3ad617 = _0x3ad617 || {};
  const _0x50dc38 = _0x3ad617.merger || of;
  let _0x285e19;
  for (let _0x35baab = 0; _0x35baab < _0x42be1a; ++_0x35baab) {
    _0x285e19 = _0x190bcd[_0x35baab];
    if (!C(_0x285e19)) {
      continue;
    }
    const _0x80d9da = Object.keys(_0x285e19);
    for (let _0x49f8fe = 0, _0x18ada4 = _0x80d9da.length; _0x49f8fe < _0x18ada4; ++_0x49f8fe) {
      _0x50dc38(_0x80d9da[_0x49f8fe], _0x99caa8, _0x285e19, _0x3ad617);
    }
  }
  return _0x99caa8;
}
function Me(_0x5db5e3, _0x5c05c6) {
  return Ie(_0x5db5e3, _0x5c05c6, {
    merger: sf
  });
}
function sf(_0x1603c3, _0x50edfa, _0x41759f) {
  if (!fu(_0x1603c3)) {
    return;
  }
  const _0x58175d = _0x50edfa[_0x1603c3];
  const _0x25d7ce = _0x41759f[_0x1603c3];
  if (C(_0x58175d) && C(_0x25d7ce)) {
    Me(_0x58175d, _0x25d7ce);
  } else if (!Object.prototype.hasOwnProperty.call(_0x50edfa, _0x1603c3)) {
    _0x50edfa[_0x1603c3] = or(_0x25d7ce);
  }
}
const Ms = {
  "": _0x17ed2e => _0x17ed2e,
  x: _0x3f7dbd => _0x3f7dbd.x,
  y: _0x250b91 => _0x250b91.y
};
function af(_0x58fd76) {
  const _0x30ca8b = _0x58fd76.split(".");
  const _0xcab487 = [];
  let _0x2873ed = "";
  for (const _0x3dcc21 of _0x30ca8b) {
    _0x2873ed += _0x3dcc21;
    if (_0x2873ed.endsWith("\\")) {
      _0x2873ed = _0x2873ed.slice(0, -1) + ".";
    } else {
      _0xcab487.push(_0x2873ed);
      _0x2873ed = "";
    }
  }
  return _0xcab487;
}
function cf(_0x28cb0b) {
  const _0x247203 = af(_0x28cb0b);
  return _0x3ad692 => {
    for (const _0xbcda82 of _0x247203) {
      if (_0xbcda82 === "") {
        break;
      }
      _0x3ad692 = _0x3ad692 && _0x3ad692[_0xbcda82];
    }
    return _0x3ad692;
  };
}
function sr(_0x2ec0be, _0x3d66df) {
  return (Ms[_0x3d66df] ||= cf(_0x3d66df))(_0x2ec0be);
}
function Ko(_0x340d61) {
  return _0x340d61.charAt(0).toUpperCase() + _0x340d61.slice(1);
}
const ar = _0xd3263 => typeof _0xd3263 !== "undefined";
const Ft = _0x3d1ee8 => typeof _0x3d1ee8 == "function";
const ks = (_0x1f7ed2, _0x140900) => {
  if (_0x1f7ed2.size !== _0x140900.size) {
    return false;
  }
  for (const _0x4b8749 of _0x1f7ed2) {
    if (!_0x140900.has(_0x4b8749)) {
      return false;
    }
  }
  return true;
};
function uf(_0x5ec34a) {
  return _0x5ec34a.type === "mouseup" || _0x5ec34a.type === "click" || _0x5ec34a.type === "contextmenu";
}
const Z = Math.PI;
const pt = Z * 2;
const lf = pt + Z;
const cr = Number.POSITIVE_INFINITY;
const ff = Z / 180;
const ct = Z / 2;
const Wt = Z / 4;
const Ds = Z * 2 / 3;
const Lt = Math.log10;
const ue = Math.sign;
function ke(_0x3d8b62, _0x53793e, _0x3dcf36) {
  return Math.abs(_0x3d8b62 - _0x53793e) < _0x3dcf36;
}
function $s(_0x2c3f0e) {
  const _0x35a07f = Math.round(_0x2c3f0e);
  _0x2c3f0e = ke(_0x2c3f0e, _0x35a07f, _0x2c3f0e / 1000) ? _0x35a07f : _0x2c3f0e;
  const _0x300e1e = Math.pow(10, Math.floor(Lt(_0x2c3f0e)));
  const _0xb13d4f = _0x2c3f0e / _0x300e1e;
  return (_0xb13d4f <= 1 ? 1 : _0xb13d4f <= 2 ? 2 : _0xb13d4f <= 5 ? 5 : 10) * _0x300e1e;
}
function hf(_0x5e7085) {
  const _0x1b405f = [];
  const _0x5ab5c3 = Math.sqrt(_0x5e7085);
  let _0xef53a;
  for (_0xef53a = 1; _0xef53a < _0x5ab5c3; _0xef53a++) {
    if (_0x5e7085 % _0xef53a === 0) {
      _0x1b405f.push(_0xef53a);
      _0x1b405f.push(_0x5e7085 / _0xef53a);
    }
  }
  if (_0x5ab5c3 === (_0x5ab5c3 | 0)) {
    _0x1b405f.push(_0x5ab5c3);
  }
  _0x1b405f.sort((_0x1eb7b5, _0x4cf799) => _0x1eb7b5 - _0x4cf799).pop();
  return _0x1b405f;
}
function Le(_0x2be177) {
  return !isNaN(parseFloat(_0x2be177)) && isFinite(_0x2be177);
}
function df(_0x5a0add, _0x48512) {
  const _0x1e74cc = Math.round(_0x5a0add);
  return _0x1e74cc - _0x48512 <= _0x5a0add && _0x1e74cc + _0x48512 >= _0x5a0add;
}
function hu(_0x3ca7ba, _0x56754a, _0x3c6917) {
  let _0x56329f;
  let _0x3f5fce;
  let _0x452117;
  _0x56329f = 0;
  _0x3f5fce = _0x3ca7ba.length;
  for (; _0x56329f < _0x3f5fce; _0x56329f++) {
    _0x452117 = _0x3ca7ba[_0x56329f][_0x3c6917];
    if (!isNaN(_0x452117)) {
      _0x56754a.min = Math.min(_0x56754a.min, _0x452117);
      _0x56754a.max = Math.max(_0x56754a.max, _0x452117);
    }
  }
}
function At(_0x211452) {
  return _0x211452 * (Z / 180);
}
function Zo(_0x56b287) {
  return _0x56b287 * (180 / Z);
}
function Rs(_0x64ce3e) {
  if (!K(_0x64ce3e)) {
    return;
  }
  let _0x10c9eb = 1;
  let _0x1db55c = 0;
  while (Math.round(_0x64ce3e * _0x10c9eb) / _0x10c9eb !== _0x64ce3e) {
    _0x10c9eb *= 10;
    _0x1db55c++;
  }
  return _0x1db55c;
}
function pf(_0x1583a4, _0x593fe6) {
  const _0x3fea07 = _0x593fe6.x - _0x1583a4.x;
  const _0x18e0af = _0x593fe6.y - _0x1583a4.y;
  const _0x430d83 = Math.sqrt(_0x3fea07 * _0x3fea07 + _0x18e0af * _0x18e0af);
  let _0x22e04d = Math.atan2(_0x18e0af, _0x3fea07);
  if (_0x22e04d < Z * -0.5) {
    _0x22e04d += pt;
  }
  return {
    angle: _0x22e04d,
    distance: _0x430d83
  };
}
function Cs(_0x266b21, _0x136ac7) {
  return Math.sqrt(Math.pow(_0x136ac7.x - _0x266b21.x, 2) + Math.pow(_0x136ac7.y - _0x266b21.y, 2));
}
function gf(_0x46ac5f, _0x1a7c11) {
  return (_0x46ac5f - _0x1a7c11 + lf) % pt - Z;
}
function gt(_0x77f202) {
  return (_0x77f202 % pt + pt) % pt;
}
function du(_0x523ff3, _0x1a3b16, _0x52c225, _0x35b103) {
  const _0x1d2db7 = gt(_0x523ff3);
  const _0x3913e8 = gt(_0x1a3b16);
  const _0x2376a1 = gt(_0x52c225);
  const _0x1cc175 = gt(_0x3913e8 - _0x1d2db7);
  const _0x220af6 = gt(_0x2376a1 - _0x1d2db7);
  const _0x4bf3fd = gt(_0x1d2db7 - _0x3913e8);
  const _0x319faa = gt(_0x1d2db7 - _0x2376a1);
  return _0x1d2db7 === _0x3913e8 || _0x1d2db7 === _0x2376a1 || _0x35b103 && _0x3913e8 === _0x2376a1 || _0x1cc175 > _0x220af6 && _0x4bf3fd < _0x319faa;
}
function vt(_0x227d4b, _0x4ceb82, _0x1efc77) {
  return Math.max(_0x4ceb82, Math.min(_0x1efc77, _0x227d4b));
}
function yf(_0x1a0f45) {
  return vt(_0x1a0f45, -32768, 32767);
}
function mf(_0x6174b2, _0x49a423, _0x29797f, _0x2bb434 = 0.000001) {
  return _0x6174b2 >= Math.min(_0x49a423, _0x29797f) - _0x2bb434 && _0x6174b2 <= Math.max(_0x49a423, _0x29797f) + _0x2bb434;
}
function Jo(_0x15b811, _0x4b2642, _0x17558e) {
  _0x17558e = _0x17558e || (_0x350496 => _0x15b811[_0x350496] < _0x4b2642);
  let _0x4d71a7 = _0x15b811.length - 1;
  let _0x59be50 = 0;
  let _0x52c8c7;
  while (_0x4d71a7 - _0x59be50 > 1) {
    _0x52c8c7 = _0x59be50 + _0x4d71a7 >> 1;
    if (_0x17558e(_0x52c8c7)) {
      _0x59be50 = _0x52c8c7;
    } else {
      _0x4d71a7 = _0x52c8c7;
    }
  }
  return {
    lo: _0x59be50,
    hi: _0x4d71a7
  };
}
const Qt = (_0x58b865, _0xdf42de, _0x2d906d, _0x13e78f) => Jo(_0x58b865, _0x2d906d, _0x13e78f ? _0x155dc5 => {
  const _0x1058f6 = _0x58b865[_0x155dc5][_0xdf42de];
  return _0x1058f6 < _0x2d906d || _0x1058f6 === _0x2d906d && _0x58b865[_0x155dc5 + 1][_0xdf42de] === _0x2d906d;
} : _0x938811 => _0x58b865[_0x938811][_0xdf42de] < _0x2d906d);
const bf = (_0x59e790, _0x4e788c, _0x2b23dc) => Jo(_0x59e790, _0x2b23dc, _0x264d6f => _0x59e790[_0x264d6f][_0x4e788c] >= _0x2b23dc);
function _f(_0x325daf, _0xda461b, _0x44274c) {
  let _0x210d14 = 0;
  let _0x5c8293 = _0x325daf.length;
  while (_0x210d14 < _0x5c8293 && _0x325daf[_0x210d14] < _0xda461b) {
    _0x210d14++;
  }
  while (_0x5c8293 > _0x210d14 && _0x325daf[_0x5c8293 - 1] > _0x44274c) {
    _0x5c8293--;
  }
  if (_0x210d14 > 0 || _0x5c8293 < _0x325daf.length) {
    return _0x325daf.slice(_0x210d14, _0x5c8293);
  } else {
    return _0x325daf;
  }
}
const pu = ["push", "pop", "shift", "splice", "unshift"];
function vf(_0x4bdc24, _0x14d255) {
  if (_0x4bdc24._chartjs) {
    _0x4bdc24._chartjs.listeners.push(_0x14d255);
    return;
  }
  Object.defineProperty(_0x4bdc24, "_chartjs", {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [_0x14d255]
    }
  });
  pu.forEach(_0x24bb02 => {
    const _0x528d03 = "_onData" + Ko(_0x24bb02);
    const _0x241df7 = _0x4bdc24[_0x24bb02];
    Object.defineProperty(_0x4bdc24, _0x24bb02, {
      configurable: true,
      enumerable: false,
      value(..._0x2d0626) {
        const _0x36d691 = _0x241df7.apply(this, _0x2d0626);
        _0x4bdc24._chartjs.listeners.forEach(_0x5bc3b4 => {
          if (typeof _0x5bc3b4[_0x528d03] == "function") {
            _0x5bc3b4[_0x528d03](..._0x2d0626);
          }
        });
        return _0x36d691;
      }
    });
  });
}
function Es(_0x17f322, _0x39e144) {
  const _0x38fd0d = _0x17f322._chartjs;
  if (!_0x38fd0d) {
    return;
  }
  const _0x11e25f = _0x38fd0d.listeners;
  const _0x4ab8ea = _0x11e25f.indexOf(_0x39e144);
  if (_0x4ab8ea !== -1) {
    _0x11e25f.splice(_0x4ab8ea, 1);
  }
  if (!(_0x11e25f.length > 0)) {
    pu.forEach(_0x3f0bfb => {
      delete _0x17f322[_0x3f0bfb];
    });
    delete _0x17f322._chartjs;
  }
}
function wf(_0x496172) {
  const _0x471d0e = new Set(_0x496172);
  if (_0x471d0e.size === _0x496172.length) {
    return _0x496172;
  } else {
    return Array.from(_0x471d0e);
  }
}
const gu = function () {
  if (typeof window === "undefined") {
    return function (_0x2e8581) {
      return _0x2e8581();
    };
  } else {
    return window.requestAnimationFrame;
  }
}();
function yu(_0x1007e3, _0x3d43fe) {
  let _0x31826c = [];
  let _0x4e30e2 = false;
  return function (..._0x34deb4) {
    _0x31826c = _0x34deb4;
    if (!_0x4e30e2) {
      _0x4e30e2 = true;
      gu.call(window, () => {
        _0x4e30e2 = false;
        _0x1007e3.apply(_0x3d43fe, _0x31826c);
      });
    }
  };
}
function xf(_0x299583, _0x342750) {
  let _0x54b3a3;
  return function (..._0x49dfd7) {
    if (_0x342750) {
      clearTimeout(_0x54b3a3);
      _0x54b3a3 = setTimeout(_0x299583, _0x342750, _0x49dfd7);
    } else {
      _0x299583.apply(this, _0x49dfd7);
    }
    return _0x342750;
  };
}
const Of = _0x2784a0 => _0x2784a0 === "start" ? "left" : _0x2784a0 === "end" ? "right" : "center";
const Is = (_0x181132, _0x11de13, _0x180580) => _0x181132 === "start" ? _0x11de13 : _0x181132 === "end" ? _0x180580 : (_0x11de13 + _0x180580) / 2;
function Pf(_0x572c59, _0x3cb0fc, _0x1e212a) {
  const _0xdf0e6d = _0x3cb0fc.length;
  let _0x199c52 = 0;
  let _0xdd3983 = _0xdf0e6d;
  if (_0x572c59._sorted) {
    const {
      iScale: _0x339478,
      _parsed: _0x2e4370
    } = _0x572c59;
    const _0x50c4d8 = _0x339478.axis;
    const {
      min: _0x4ef1ca,
      max: _0x139fd9,
      minDefined: _0x4b2ba9,
      maxDefined: _0x49145b
    } = _0x339478.getUserBounds();
    if (_0x4b2ba9) {
      _0x199c52 = vt(Math.min(Qt(_0x2e4370, _0x50c4d8, _0x4ef1ca).lo, _0x1e212a ? _0xdf0e6d : Qt(_0x3cb0fc, _0x50c4d8, _0x339478.getPixelForValue(_0x4ef1ca)).lo), 0, _0xdf0e6d - 1);
    }
    if (_0x49145b) {
      _0xdd3983 = vt(Math.max(Qt(_0x2e4370, _0x339478.axis, _0x139fd9, true).hi + 1, _0x1e212a ? 0 : Qt(_0x3cb0fc, _0x50c4d8, _0x339478.getPixelForValue(_0x139fd9), true).hi + 1), _0x199c52, _0xdf0e6d) - _0x199c52;
    } else {
      _0xdd3983 = _0xdf0e6d - _0x199c52;
    }
  }
  return {
    start: _0x199c52,
    count: _0xdd3983
  };
}
function Sf(_0x341436) {
  const {
    xScale: _0x205f8d,
    yScale: _0x4a07fb,
    _scaleRanges: _0x1f1e2d
  } = _0x341436;
  const _0x12db73 = {
    xmin: _0x205f8d.min,
    xmax: _0x205f8d.max,
    ymin: _0x4a07fb.min,
    ymax: _0x4a07fb.max
  };
  if (!_0x1f1e2d) {
    _0x341436._scaleRanges = _0x12db73;
    return true;
  }
  const _0xf68618 = _0x1f1e2d.xmin !== _0x205f8d.min || _0x1f1e2d.xmax !== _0x205f8d.max || _0x1f1e2d.ymin !== _0x4a07fb.min || _0x1f1e2d.ymax !== _0x4a07fb.max;
  Object.assign(_0x1f1e2d, _0x12db73);
  return _0xf68618;
}
const Ze = _0x3a822c => _0x3a822c === 0 || _0x3a822c === 1;
const Ls = (_0x1b46cd, _0x28a249, _0x458b92) => -(Math.pow(2, (_0x1b46cd -= 1) * 10) * Math.sin((_0x1b46cd - _0x28a249) * pt / _0x458b92));
const As = (_0x536efc, _0x67b656, _0x4420fb) => Math.pow(2, _0x536efc * -10) * Math.sin((_0x536efc - _0x67b656) * pt / _0x4420fb) + 1;
const De = {
  linear: _0x1b91b4 => _0x1b91b4,
  easeInQuad: _0x40d381 => _0x40d381 * _0x40d381,
  easeOutQuad: _0x569ad4 => -_0x569ad4 * (_0x569ad4 - 2),
  easeInOutQuad: _0x231c9e => (_0x231c9e /= 0.5) < 1 ? _0x231c9e * 0.5 * _0x231c9e : (--_0x231c9e * (_0x231c9e - 2) - 1) * -0.5,
  easeInCubic: _0x5f42f2 => _0x5f42f2 * _0x5f42f2 * _0x5f42f2,
  easeOutCubic: _0x54a01b => (_0x54a01b -= 1) * _0x54a01b * _0x54a01b + 1,
  easeInOutCubic: _0x3fca43 => (_0x3fca43 /= 0.5) < 1 ? _0x3fca43 * 0.5 * _0x3fca43 * _0x3fca43 : ((_0x3fca43 -= 2) * _0x3fca43 * _0x3fca43 + 2) * 0.5,
  easeInQuart: _0x1c9c74 => _0x1c9c74 * _0x1c9c74 * _0x1c9c74 * _0x1c9c74,
  easeOutQuart: _0x2c77ba => -((_0x2c77ba -= 1) * _0x2c77ba * _0x2c77ba * _0x2c77ba - 1),
  easeInOutQuart: _0x3f7a83 => (_0x3f7a83 /= 0.5) < 1 ? _0x3f7a83 * 0.5 * _0x3f7a83 * _0x3f7a83 * _0x3f7a83 : ((_0x3f7a83 -= 2) * _0x3f7a83 * _0x3f7a83 * _0x3f7a83 - 2) * -0.5,
  easeInQuint: _0x15ad12 => _0x15ad12 * _0x15ad12 * _0x15ad12 * _0x15ad12 * _0x15ad12,
  easeOutQuint: _0x332322 => (_0x332322 -= 1) * _0x332322 * _0x332322 * _0x332322 * _0x332322 + 1,
  easeInOutQuint: _0xbbbf1c => (_0xbbbf1c /= 0.5) < 1 ? _0xbbbf1c * 0.5 * _0xbbbf1c * _0xbbbf1c * _0xbbbf1c * _0xbbbf1c : ((_0xbbbf1c -= 2) * _0xbbbf1c * _0xbbbf1c * _0xbbbf1c * _0xbbbf1c + 2) * 0.5,
  easeInSine: _0x3f5b09 => -Math.cos(_0x3f5b09 * ct) + 1,
  easeOutSine: _0x28ca8e => Math.sin(_0x28ca8e * ct),
  easeInOutSine: _0x17da75 => (Math.cos(Z * _0x17da75) - 1) * -0.5,
  easeInExpo: _0x32d381 => _0x32d381 === 0 ? 0 : Math.pow(2, (_0x32d381 - 1) * 10),
  easeOutExpo: _0x286840 => _0x286840 === 1 ? 1 : -Math.pow(2, _0x286840 * -10) + 1,
  easeInOutExpo: _0x22ffe6 => Ze(_0x22ffe6) ? _0x22ffe6 : _0x22ffe6 < 0.5 ? Math.pow(2, (_0x22ffe6 * 2 - 1) * 10) * 0.5 : (-Math.pow(2, (_0x22ffe6 * 2 - 1) * -10) + 2) * 0.5,
  easeInCirc: _0x54df76 => _0x54df76 >= 1 ? _0x54df76 : -(Math.sqrt(1 - _0x54df76 * _0x54df76) - 1),
  easeOutCirc: _0x361c45 => Math.sqrt(1 - (_0x361c45 -= 1) * _0x361c45),
  easeInOutCirc: _0x358d99 => (_0x358d99 /= 0.5) < 1 ? (Math.sqrt(1 - _0x358d99 * _0x358d99) - 1) * -0.5 : (Math.sqrt(1 - (_0x358d99 -= 2) * _0x358d99) + 1) * 0.5,
  easeInElastic: _0x18139e => Ze(_0x18139e) ? _0x18139e : Ls(_0x18139e, 0.075, 0.3),
  easeOutElastic: _0x57a7ce => Ze(_0x57a7ce) ? _0x57a7ce : As(_0x57a7ce, 0.075, 0.3),
  easeInOutElastic(_0x203b88) {
    if (Ze(_0x203b88)) {
      return _0x203b88;
    } else if (_0x203b88 < 0.5) {
      return Ls(_0x203b88 * 2, 0.1125, 0.45) * 0.5;
    } else {
      return 0.5 + As(_0x203b88 * 2 - 1, 0.1125, 0.45) * 0.5;
    }
  },
  easeInBack(_0x24a0d9) {
    return _0x24a0d9 * _0x24a0d9 * (_0x24a0d9 * 2.70158 - 1.70158);
  },
  easeOutBack(_0x2f710c) {
    return (_0x2f710c -= 1) * _0x2f710c * (_0x2f710c * 2.70158 + 1.70158) + 1;
  },
  easeInOutBack(_0x214176) {
    let _0x39bf77 = 1.70158;
    if ((_0x214176 /= 0.5) < 1) {
      return _0x214176 * _0x214176 * (((_0x39bf77 *= 1.525) + 1) * _0x214176 - _0x39bf77) * 0.5;
    } else {
      return ((_0x214176 -= 2) * _0x214176 * (((_0x39bf77 *= 1.525) + 1) * _0x214176 + _0x39bf77) + 2) * 0.5;
    }
  },
  easeInBounce: _0x47c91a => 1 - De.easeOutBounce(1 - _0x47c91a),
  easeOutBounce(_0x2e2d75) {
    if (_0x2e2d75 < 1 / 2.75) {
      return _0x2e2d75 * 7.5625 * _0x2e2d75;
    } else if (_0x2e2d75 < 2 / 2.75) {
      return (_0x2e2d75 -= 1.5 / 2.75) * 7.5625 * _0x2e2d75 + 0.75;
    } else if (_0x2e2d75 < 2.5 / 2.75) {
      return (_0x2e2d75 -= 2.25 / 2.75) * 7.5625 * _0x2e2d75 + 0.9375;
    } else {
      return (_0x2e2d75 -= 2.625 / 2.75) * 7.5625 * _0x2e2d75 + 0.984375;
    }
  },
  easeInOutBounce: _0x5bb10c => _0x5bb10c < 0.5 ? De.easeInBounce(_0x5bb10c * 2) * 0.5 : De.easeOutBounce(_0x5bb10c * 2 - 1) * 0.5 + 0.5
};
function ts(_0xfa4be5) {
  if (_0xfa4be5 && typeof _0xfa4be5 == "object") {
    const _0x4825e6 = _0xfa4be5.toString();
    return _0x4825e6 === "[object CanvasPattern]" || _0x4825e6 === "[object CanvasGradient]";
  }
  return false;
}
function Ns(_0x1897de) {
  if (ts(_0x1897de)) {
    return _0x1897de;
  } else {
    return new Ee(_0x1897de);
  }
}
function ui(_0x776f4c) {
  if (ts(_0x776f4c)) {
    return _0x776f4c;
  } else {
    return new Ee(_0x776f4c).saturate(0.5).darken(0.1).hexString();
  }
}
const Tf = ["x", "y", "borderWidth", "radius", "tension"];
const Mf = ["color", "borderColor", "backgroundColor"];
function kf(_0x55e6e4) {
  _0x55e6e4.set("animation", {
    delay: undefined,
    duration: 1000,
    easing: "easeOutQuart",
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
  });
  _0x55e6e4.describe("animation", {
    _fallback: false,
    _indexable: false,
    _scriptable: _0x58f622 => _0x58f622 !== "onProgress" && _0x58f622 !== "onComplete" && _0x58f622 !== "fn"
  });
  _0x55e6e4.set("animations", {
    colors: {
      type: "color",
      properties: Mf
    },
    numbers: {
      type: "number",
      properties: Tf
    }
  });
  _0x55e6e4.describe("animations", {
    _fallback: "animation"
  });
  _0x55e6e4.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: _0x4ffc16 => _0x4ffc16 | 0
        }
      }
    }
  });
}
function Df(_0x16ac07) {
  _0x16ac07.set("layout", {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Fs = new Map();
function $f(_0x1245e8, _0xfb5cf5) {
  _0xfb5cf5 = _0xfb5cf5 || {};
  const _0x3804b7 = _0x1245e8 + JSON.stringify(_0xfb5cf5);
  let _0xac33de = Fs.get(_0x3804b7);
  if (!_0xac33de) {
    _0xac33de = new Intl.NumberFormat(_0x1245e8, _0xfb5cf5);
    Fs.set(_0x3804b7, _0xac33de);
  }
  return _0xac33de;
}
function es(_0x5134ba, _0x42335f, _0x52b4dc) {
  return $f(_0x42335f, _0x52b4dc).format(_0x5134ba);
}
const mu = {
  values(_0x262ccc) {
    if (H(_0x262ccc)) {
      return _0x262ccc;
    } else {
      return "" + _0x262ccc;
    }
  },
  numeric(_0x5f59f7, _0xc10057, _0x271c8a) {
    if (_0x5f59f7 === 0) {
      return "0";
    }
    const _0x269e94 = this.chart.options.locale;
    let _0x4aa214;
    let _0x1f75b6 = _0x5f59f7;
    if (_0x271c8a.length > 1) {
      const _0x197515 = Math.max(Math.abs(_0x271c8a[0].value), Math.abs(_0x271c8a[_0x271c8a.length - 1].value));
      if (_0x197515 < 0.0001 || _0x197515 > 1000000000000000) {
        _0x4aa214 = "scientific";
      }
      _0x1f75b6 = Rf(_0x5f59f7, _0x271c8a);
    }
    const _0x133fcb = Lt(Math.abs(_0x1f75b6));
    const _0x34b44c = isNaN(_0x133fcb) ? 1 : Math.max(Math.min(Math.floor(_0x133fcb) * -1, 20), 0);
    const _0x192c3e = {
      notation: _0x4aa214,
      minimumFractionDigits: _0x34b44c,
      maximumFractionDigits: _0x34b44c
    };
    Object.assign(_0x192c3e, this.options.ticks.format);
    return es(_0x5f59f7, _0x269e94, _0x192c3e);
  },
  logarithmic(_0xf55562, _0x2b6e62, _0x77f800) {
    if (_0xf55562 === 0) {
      return "0";
    }
    const _0x207a52 = _0x77f800[_0x2b6e62].significand || _0xf55562 / Math.pow(10, Math.floor(Lt(_0xf55562)));
    if ([1, 2, 3, 5, 10, 15].includes(_0x207a52) || _0x2b6e62 > _0x77f800.length * 0.8) {
      return mu.numeric.call(this, _0xf55562, _0x2b6e62, _0x77f800);
    } else {
      return "";
    }
  }
};
function Rf(_0xaf5190, _0xbe62ed) {
  let _0x51e44b = _0xbe62ed.length > 3 ? _0xbe62ed[2].value - _0xbe62ed[1].value : _0xbe62ed[1].value - _0xbe62ed[0].value;
  if (Math.abs(_0x51e44b) >= 1 && _0xaf5190 !== Math.floor(_0xaf5190)) {
    _0x51e44b = _0xaf5190 - Math.floor(_0xaf5190);
  }
  return _0x51e44b;
}
var Zr = {
  formatters: mu
};
function Cf(_0x2db168) {
  _0x2db168.set("scale", {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: "ticks",
    clip: true,
    grace: 0,
    grid: {
      display: true,
      lineWidth: 1,
      drawOnChartArea: true,
      drawTicks: true,
      tickLength: 8,
      tickWidth: (_0x53863b, _0x4b975a) => _0x4b975a.lineWidth,
      tickColor: (_0x4523c9, _0x4c6331) => _0x4c6331.color,
      offset: false
    },
    border: {
      display: true,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: false,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: true,
      autoSkip: true,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Zr.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: false,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  });
  _0x2db168.route("scale.ticks", "color", "", "color");
  _0x2db168.route("scale.grid", "color", "", "borderColor");
  _0x2db168.route("scale.border", "color", "", "borderColor");
  _0x2db168.route("scale.title", "color", "", "color");
  _0x2db168.describe("scale", {
    _fallback: false,
    _scriptable: _0x63637a => !_0x63637a.startsWith("before") && !_0x63637a.startsWith("after") && _0x63637a !== "callback" && _0x63637a !== "parser",
    _indexable: _0x28bdfd => _0x28bdfd !== "borderDash" && _0x28bdfd !== "tickBorderDash" && _0x28bdfd !== "dash"
  });
  _0x2db168.describe("scales", {
    _fallback: "scale"
  });
  _0x2db168.describe("scale.ticks", {
    _scriptable: _0x4a64c2 => _0x4a64c2 !== "backdropPadding" && _0x4a64c2 !== "callback",
    _indexable: _0x5abe45 => _0x5abe45 !== "backdropPadding"
  });
}
const Kt = Object.create(null);
const Ti = Object.create(null);
function $e(_0x2a448f, _0xf85776) {
  if (!_0xf85776) {
    return _0x2a448f;
  }
  const _0x58123f = _0xf85776.split(".");
  for (let _0x4abe47 = 0, _0x12600c = _0x58123f.length; _0x4abe47 < _0x12600c; ++_0x4abe47) {
    const _0xfd9306 = _0x58123f[_0x4abe47];
    _0x2a448f = _0x2a448f[_0xfd9306] ||= Object.create(null);
  }
  return _0x2a448f;
}
function li(_0xe5b9b9, _0x35da8e, _0x2cd8b7) {
  if (typeof _0x35da8e == "string") {
    return Ie($e(_0xe5b9b9, _0x35da8e), _0x2cd8b7);
  } else {
    return Ie($e(_0xe5b9b9, ""), _0x35da8e);
  }
}
class Ef {
  constructor(_0xe3bf26, _0x13b923) {
    this.animation = undefined;
    this.backgroundColor = "rgba(0,0,0,0.1)";
    this.borderColor = "rgba(0,0,0,0.1)";
    this.color = "#666";
    this.datasets = {};
    this.devicePixelRatio = _0x5e9d57 => _0x5e9d57.chart.platform.getDevicePixelRatio();
    this.elements = {};
    this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};
    this.hoverBackgroundColor = (_0x3d13c2, _0x39a1b4) => ui(_0x39a1b4.backgroundColor);
    this.hoverBorderColor = (_0x30c750, _0x3ba724) => ui(_0x3ba724.borderColor);
    this.hoverColor = (_0x431cc6, _0x3ac461) => ui(_0x3ac461.color);
    this.indexAxis = "x";
    this.interaction = {
      mode: "nearest",
      intersect: true,
      includeInvisible: false
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.drawActiveElementsOnTop = true;
    this.describe(_0xe3bf26);
    this.apply(_0x13b923);
  }
  set(_0x30dda0, _0x5070e7) {
    return li(this, _0x30dda0, _0x5070e7);
  }
  get(_0x741f24) {
    return $e(this, _0x741f24);
  }
  describe(_0x468697, _0x31b315) {
    return li(Ti, _0x468697, _0x31b315);
  }
  override(_0x2ef0f8, _0x6c08b4) {
    return li(Kt, _0x2ef0f8, _0x6c08b4);
  }
  route(_0x3cb9e9, _0x14680b, _0x177fa4, _0x3f9878) {
    const _0x8c2546 = $e(this, _0x3cb9e9);
    const _0x2aaf99 = $e(this, _0x177fa4);
    const _0x15ed14 = "_" + _0x14680b;
    Object.defineProperties(_0x8c2546, {
      [_0x15ed14]: {
        value: _0x8c2546[_0x14680b],
        writable: true
      },
      [_0x14680b]: {
        enumerable: true,
        get() {
          const _0x5098ef = this[_0x15ed14];
          const _0x1fabe3 = _0x2aaf99[_0x3f9878];
          if (C(_0x5098ef)) {
            return Object.assign({}, _0x1fabe3, _0x5098ef);
          } else {
            return I(_0x5098ef, _0x1fabe3);
          }
        },
        set(_0x167004) {
          this[_0x15ed14] = _0x167004;
        }
      }
    });
  }
  apply(_0x1a92da) {
    _0x1a92da.forEach(_0x17de90 => _0x17de90(this));
  }
}
var Y = new Ef({
  _scriptable: _0x2e6407 => !_0x2e6407.startsWith("on"),
  _indexable: _0x3be7b9 => _0x3be7b9 !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
}, [kf, Df, Cf]);
function If(_0x3d905e) {
  if (!_0x3d905e || z(_0x3d905e.size) || z(_0x3d905e.family)) {
    return null;
  } else {
    return (_0x3d905e.style ? _0x3d905e.style + " " : "") + (_0x3d905e.weight ? _0x3d905e.weight + " " : "") + _0x3d905e.size + "px " + _0x3d905e.family;
  }
}
function ur(_0x281c99, _0x22ed97, _0x20a6c3, _0x520d98, _0x4ce50f) {
  let _0x59e976 = _0x22ed97[_0x4ce50f];
  if (!_0x59e976) {
    _0x59e976 = _0x22ed97[_0x4ce50f] = _0x281c99.measureText(_0x4ce50f).width;
    _0x20a6c3.push(_0x4ce50f);
  }
  if (_0x59e976 > _0x520d98) {
    _0x520d98 = _0x59e976;
  }
  return _0x520d98;
}
function Lf(_0xd3a4e1, _0x417dda, _0xed8a2, _0x2037a7) {
  _0x2037a7 = _0x2037a7 || {};
  let _0x39ff10 = _0x2037a7.data = _0x2037a7.data || {};
  let _0x3f9617 = _0x2037a7.garbageCollect = _0x2037a7.garbageCollect || [];
  if (_0x2037a7.font !== _0x417dda) {
    _0x39ff10 = _0x2037a7.data = {};
    _0x3f9617 = _0x2037a7.garbageCollect = [];
    _0x2037a7.font = _0x417dda;
  }
  _0xd3a4e1.save();
  _0xd3a4e1.font = _0x417dda;
  let _0x28a71e = 0;
  const _0x296874 = _0xed8a2.length;
  let _0x3e7ff8;
  let _0x875ff2;
  let _0x4251be;
  let _0x2921e4;
  let _0x3046cd;
  for (_0x3e7ff8 = 0; _0x3e7ff8 < _0x296874; _0x3e7ff8++) {
    _0x2921e4 = _0xed8a2[_0x3e7ff8];
    if (_0x2921e4 != null && !H(_0x2921e4)) {
      _0x28a71e = ur(_0xd3a4e1, _0x39ff10, _0x3f9617, _0x28a71e, _0x2921e4);
    } else if (H(_0x2921e4)) {
      _0x875ff2 = 0;
      _0x4251be = _0x2921e4.length;
      for (; _0x875ff2 < _0x4251be; _0x875ff2++) {
        _0x3046cd = _0x2921e4[_0x875ff2];
        if (_0x3046cd != null && !H(_0x3046cd)) {
          _0x28a71e = ur(_0xd3a4e1, _0x39ff10, _0x3f9617, _0x28a71e, _0x3046cd);
        }
      }
    }
  }
  _0xd3a4e1.restore();
  const _0x1721bb = _0x3f9617.length / 2;
  if (_0x1721bb > _0xed8a2.length) {
    for (_0x3e7ff8 = 0; _0x3e7ff8 < _0x1721bb; _0x3e7ff8++) {
      delete _0x39ff10[_0x3f9617[_0x3e7ff8]];
    }
    _0x3f9617.splice(0, _0x1721bb);
  }
  return _0x28a71e;
}
function Ut(_0xdd9b5, _0x2b534c, _0x2df012) {
  const _0x2a8421 = _0xdd9b5.currentDevicePixelRatio;
  const _0x4dbd67 = _0x2df012 !== 0 ? Math.max(_0x2df012 / 2, 0.5) : 0;
  return Math.round((_0x2b534c - _0x4dbd67) * _0x2a8421) / _0x2a8421 + _0x4dbd67;
}
function zs(_0x1ca195, _0x38cbd7) {
  _0x38cbd7 = _0x38cbd7 || _0x1ca195.getContext("2d");
  _0x38cbd7.save();
  _0x38cbd7.resetTransform();
  _0x38cbd7.clearRect(0, 0, _0x1ca195.width, _0x1ca195.height);
  _0x38cbd7.restore();
}
function Af(_0x4174d2, _0x5094d3, _0x50e814, _0x48d408) {
  Nf(_0x4174d2, _0x5094d3, _0x50e814, _0x48d408, null);
}
function Nf(_0x2eabc9, _0x5891ae, _0x320425, _0x35cb6e, _0xbb529f) {
  let _0x2a7156;
  let _0x2a8de2;
  let _0x529a4d;
  let _0x3d481e;
  let _0x574fa3;
  let _0x5bd6e5;
  let _0x49f9ae;
  let _0x2ba57c;
  const _0x2ad81e = _0x5891ae.pointStyle;
  const _0x3d11ea = _0x5891ae.rotation;
  const _0x561b1a = _0x5891ae.radius;
  let _0x1653d1 = (_0x3d11ea || 0) * ff;
  if (_0x2ad81e && typeof _0x2ad81e == "object" && (_0x2a7156 = _0x2ad81e.toString(), _0x2a7156 === "[object HTMLImageElement]" || _0x2a7156 === "[object HTMLCanvasElement]")) {
    _0x2eabc9.save();
    _0x2eabc9.translate(_0x320425, _0x35cb6e);
    _0x2eabc9.rotate(_0x1653d1);
    _0x2eabc9.drawImage(_0x2ad81e, -_0x2ad81e.width / 2, -_0x2ad81e.height / 2, _0x2ad81e.width, _0x2ad81e.height);
    _0x2eabc9.restore();
    return;
  }
  if (!isNaN(_0x561b1a) && !(_0x561b1a <= 0)) {
    _0x2eabc9.beginPath();
    switch (_0x2ad81e) {
      default:
        if (_0xbb529f) {
          _0x2eabc9.ellipse(_0x320425, _0x35cb6e, _0xbb529f / 2, _0x561b1a, 0, 0, pt);
        } else {
          _0x2eabc9.arc(_0x320425, _0x35cb6e, _0x561b1a, 0, pt);
        }
        _0x2eabc9.closePath();
        break;
      case "triangle":
        _0x5bd6e5 = _0xbb529f ? _0xbb529f / 2 : _0x561b1a;
        _0x2eabc9.moveTo(_0x320425 + Math.sin(_0x1653d1) * _0x5bd6e5, _0x35cb6e - Math.cos(_0x1653d1) * _0x561b1a);
        _0x1653d1 += Ds;
        _0x2eabc9.lineTo(_0x320425 + Math.sin(_0x1653d1) * _0x5bd6e5, _0x35cb6e - Math.cos(_0x1653d1) * _0x561b1a);
        _0x1653d1 += Ds;
        _0x2eabc9.lineTo(_0x320425 + Math.sin(_0x1653d1) * _0x5bd6e5, _0x35cb6e - Math.cos(_0x1653d1) * _0x561b1a);
        _0x2eabc9.closePath();
        break;
      case "rectRounded":
        _0x574fa3 = _0x561b1a * 0.516;
        _0x3d481e = _0x561b1a - _0x574fa3;
        _0x2a8de2 = Math.cos(_0x1653d1 + Wt) * _0x3d481e;
        _0x49f9ae = Math.cos(_0x1653d1 + Wt) * (_0xbb529f ? _0xbb529f / 2 - _0x574fa3 : _0x3d481e);
        _0x529a4d = Math.sin(_0x1653d1 + Wt) * _0x3d481e;
        _0x2ba57c = Math.sin(_0x1653d1 + Wt) * (_0xbb529f ? _0xbb529f / 2 - _0x574fa3 : _0x3d481e);
        _0x2eabc9.arc(_0x320425 - _0x49f9ae, _0x35cb6e - _0x529a4d, _0x574fa3, _0x1653d1 - Z, _0x1653d1 - ct);
        _0x2eabc9.arc(_0x320425 + _0x2ba57c, _0x35cb6e - _0x2a8de2, _0x574fa3, _0x1653d1 - ct, _0x1653d1);
        _0x2eabc9.arc(_0x320425 + _0x49f9ae, _0x35cb6e + _0x529a4d, _0x574fa3, _0x1653d1, _0x1653d1 + ct);
        _0x2eabc9.arc(_0x320425 - _0x2ba57c, _0x35cb6e + _0x2a8de2, _0x574fa3, _0x1653d1 + ct, _0x1653d1 + Z);
        _0x2eabc9.closePath();
        break;
      case "rect":
        if (!_0x3d11ea) {
          _0x3d481e = Math.SQRT1_2 * _0x561b1a;
          _0x5bd6e5 = _0xbb529f ? _0xbb529f / 2 : _0x3d481e;
          _0x2eabc9.rect(_0x320425 - _0x5bd6e5, _0x35cb6e - _0x3d481e, _0x5bd6e5 * 2, _0x3d481e * 2);
          break;
        }
        _0x1653d1 += Wt;
      case "rectRot":
        _0x49f9ae = Math.cos(_0x1653d1) * (_0xbb529f ? _0xbb529f / 2 : _0x561b1a);
        _0x2a8de2 = Math.cos(_0x1653d1) * _0x561b1a;
        _0x529a4d = Math.sin(_0x1653d1) * _0x561b1a;
        _0x2ba57c = Math.sin(_0x1653d1) * (_0xbb529f ? _0xbb529f / 2 : _0x561b1a);
        _0x2eabc9.moveTo(_0x320425 - _0x49f9ae, _0x35cb6e - _0x529a4d);
        _0x2eabc9.lineTo(_0x320425 + _0x2ba57c, _0x35cb6e - _0x2a8de2);
        _0x2eabc9.lineTo(_0x320425 + _0x49f9ae, _0x35cb6e + _0x529a4d);
        _0x2eabc9.lineTo(_0x320425 - _0x2ba57c, _0x35cb6e + _0x2a8de2);
        _0x2eabc9.closePath();
        break;
      case "crossRot":
        _0x1653d1 += Wt;
      case "cross":
        _0x49f9ae = Math.cos(_0x1653d1) * (_0xbb529f ? _0xbb529f / 2 : _0x561b1a);
        _0x2a8de2 = Math.cos(_0x1653d1) * _0x561b1a;
        _0x529a4d = Math.sin(_0x1653d1) * _0x561b1a;
        _0x2ba57c = Math.sin(_0x1653d1) * (_0xbb529f ? _0xbb529f / 2 : _0x561b1a);
        _0x2eabc9.moveTo(_0x320425 - _0x49f9ae, _0x35cb6e - _0x529a4d);
        _0x2eabc9.lineTo(_0x320425 + _0x49f9ae, _0x35cb6e + _0x529a4d);
        _0x2eabc9.moveTo(_0x320425 + _0x2ba57c, _0x35cb6e - _0x2a8de2);
        _0x2eabc9.lineTo(_0x320425 - _0x2ba57c, _0x35cb6e + _0x2a8de2);
        break;
      case "star":
        _0x49f9ae = Math.cos(_0x1653d1) * (_0xbb529f ? _0xbb529f / 2 : _0x561b1a);
        _0x2a8de2 = Math.cos(_0x1653d1) * _0x561b1a;
        _0x529a4d = Math.sin(_0x1653d1) * _0x561b1a;
        _0x2ba57c = Math.sin(_0x1653d1) * (_0xbb529f ? _0xbb529f / 2 : _0x561b1a);
        _0x2eabc9.moveTo(_0x320425 - _0x49f9ae, _0x35cb6e - _0x529a4d);
        _0x2eabc9.lineTo(_0x320425 + _0x49f9ae, _0x35cb6e + _0x529a4d);
        _0x2eabc9.moveTo(_0x320425 + _0x2ba57c, _0x35cb6e - _0x2a8de2);
        _0x2eabc9.lineTo(_0x320425 - _0x2ba57c, _0x35cb6e + _0x2a8de2);
        _0x1653d1 += Wt;
        _0x49f9ae = Math.cos(_0x1653d1) * (_0xbb529f ? _0xbb529f / 2 : _0x561b1a);
        _0x2a8de2 = Math.cos(_0x1653d1) * _0x561b1a;
        _0x529a4d = Math.sin(_0x1653d1) * _0x561b1a;
        _0x2ba57c = Math.sin(_0x1653d1) * (_0xbb529f ? _0xbb529f / 2 : _0x561b1a);
        _0x2eabc9.moveTo(_0x320425 - _0x49f9ae, _0x35cb6e - _0x529a4d);
        _0x2eabc9.lineTo(_0x320425 + _0x49f9ae, _0x35cb6e + _0x529a4d);
        _0x2eabc9.moveTo(_0x320425 + _0x2ba57c, _0x35cb6e - _0x2a8de2);
        _0x2eabc9.lineTo(_0x320425 - _0x2ba57c, _0x35cb6e + _0x2a8de2);
        break;
      case "line":
        _0x2a8de2 = _0xbb529f ? _0xbb529f / 2 : Math.cos(_0x1653d1) * _0x561b1a;
        _0x529a4d = Math.sin(_0x1653d1) * _0x561b1a;
        _0x2eabc9.moveTo(_0x320425 - _0x2a8de2, _0x35cb6e - _0x529a4d);
        _0x2eabc9.lineTo(_0x320425 + _0x2a8de2, _0x35cb6e + _0x529a4d);
        break;
      case "dash":
        _0x2eabc9.moveTo(_0x320425, _0x35cb6e);
        _0x2eabc9.lineTo(_0x320425 + Math.cos(_0x1653d1) * (_0xbb529f ? _0xbb529f / 2 : _0x561b1a), _0x35cb6e + Math.sin(_0x1653d1) * _0x561b1a);
        break;
      case false:
        _0x2eabc9.closePath();
        break;
    }
    _0x2eabc9.fill();
    if (_0x5891ae.borderWidth > 0) {
      _0x2eabc9.stroke();
    }
  }
}
function St(_0x4326bf, _0x575fb0, _0x1bf843) {
  _0x1bf843 = _0x1bf843 || 0.5;
  return !_0x575fb0 || _0x4326bf && _0x4326bf.x > _0x575fb0.left - _0x1bf843 && _0x4326bf.x < _0x575fb0.right + _0x1bf843 && _0x4326bf.y > _0x575fb0.top - _0x1bf843 && _0x4326bf.y < _0x575fb0.bottom + _0x1bf843;
}
function bu(_0x843025, _0x2f6906) {
  _0x843025.save();
  _0x843025.beginPath();
  _0x843025.rect(_0x2f6906.left, _0x2f6906.top, _0x2f6906.right - _0x2f6906.left, _0x2f6906.bottom - _0x2f6906.top);
  _0x843025.clip();
}
function _u(_0x496c19) {
  _0x496c19.restore();
}
function Ff(_0x43a386, _0x5c2e92, _0xa15f8a, _0x25060b, _0x453afb) {
  if (!_0x5c2e92) {
    return _0x43a386.lineTo(_0xa15f8a.x, _0xa15f8a.y);
  }
  if (_0x453afb === "middle") {
    const _0x226a30 = (_0x5c2e92.x + _0xa15f8a.x) / 2;
    _0x43a386.lineTo(_0x226a30, _0x5c2e92.y);
    _0x43a386.lineTo(_0x226a30, _0xa15f8a.y);
  } else if (_0x453afb === "after" != !!_0x25060b) {
    _0x43a386.lineTo(_0x5c2e92.x, _0xa15f8a.y);
  } else {
    _0x43a386.lineTo(_0xa15f8a.x, _0x5c2e92.y);
  }
  _0x43a386.lineTo(_0xa15f8a.x, _0xa15f8a.y);
}
function zf(_0x402282, _0x19c745, _0x33c645, _0x4fd464) {
  if (!_0x19c745) {
    return _0x402282.lineTo(_0x33c645.x, _0x33c645.y);
  }
  _0x402282.bezierCurveTo(_0x4fd464 ? _0x19c745.cp1x : _0x19c745.cp2x, _0x4fd464 ? _0x19c745.cp1y : _0x19c745.cp2y, _0x4fd464 ? _0x33c645.cp2x : _0x33c645.cp1x, _0x4fd464 ? _0x33c645.cp2y : _0x33c645.cp1y, _0x33c645.x, _0x33c645.y);
}
function Bf(_0x4425eb, _0x10bbf5) {
  if (_0x10bbf5.translation) {
    _0x4425eb.translate(_0x10bbf5.translation[0], _0x10bbf5.translation[1]);
  }
  if (!z(_0x10bbf5.rotation)) {
    _0x4425eb.rotate(_0x10bbf5.rotation);
  }
  if (_0x10bbf5.color) {
    _0x4425eb.fillStyle = _0x10bbf5.color;
  }
  if (_0x10bbf5.textAlign) {
    _0x4425eb.textAlign = _0x10bbf5.textAlign;
  }
  if (_0x10bbf5.textBaseline) {
    _0x4425eb.textBaseline = _0x10bbf5.textBaseline;
  }
}
function jf(_0x26a36b, _0x137cfc, _0x374db9, _0x12b644, _0x4dba3f) {
  if (_0x4dba3f.strikethrough || _0x4dba3f.underline) {
    const _0x3ce352 = _0x26a36b.measureText(_0x12b644);
    const _0x489713 = _0x137cfc - _0x3ce352.actualBoundingBoxLeft;
    const _0x5cad64 = _0x137cfc + _0x3ce352.actualBoundingBoxRight;
    const _0x4f0c32 = _0x374db9 - _0x3ce352.actualBoundingBoxAscent;
    const _0x1813fb = _0x374db9 + _0x3ce352.actualBoundingBoxDescent;
    const _0x376e0d = _0x4dba3f.strikethrough ? (_0x4f0c32 + _0x1813fb) / 2 : _0x1813fb;
    _0x26a36b.strokeStyle = _0x26a36b.fillStyle;
    _0x26a36b.beginPath();
    _0x26a36b.lineWidth = _0x4dba3f.decorationWidth || 2;
    _0x26a36b.moveTo(_0x489713, _0x376e0d);
    _0x26a36b.lineTo(_0x5cad64, _0x376e0d);
    _0x26a36b.stroke();
  }
}
function Wf(_0x145d4c, _0x3ad467) {
  const _0x5c435a = _0x145d4c.fillStyle;
  _0x145d4c.fillStyle = _0x3ad467.color;
  _0x145d4c.fillRect(_0x3ad467.left, _0x3ad467.top, _0x3ad467.width, _0x3ad467.height);
  _0x145d4c.fillStyle = _0x5c435a;
}
function lr(_0x59aabc, _0x53b26f, _0x263478, _0x2e1251, _0x514d6b, _0x2dc788 = {}) {
  const _0x5f4414 = H(_0x53b26f) ? _0x53b26f : [_0x53b26f];
  const _0x1c3af0 = _0x2dc788.strokeWidth > 0 && _0x2dc788.strokeColor !== "";
  let _0x1b1a9c;
  let _0x224924;
  _0x59aabc.save();
  _0x59aabc.font = _0x514d6b.string;
  Bf(_0x59aabc, _0x2dc788);
  _0x1b1a9c = 0;
  for (; _0x1b1a9c < _0x5f4414.length; ++_0x1b1a9c) {
    _0x224924 = _0x5f4414[_0x1b1a9c];
    if (_0x2dc788.backdrop) {
      Wf(_0x59aabc, _0x2dc788.backdrop);
    }
    if (_0x1c3af0) {
      if (_0x2dc788.strokeColor) {
        _0x59aabc.strokeStyle = _0x2dc788.strokeColor;
      }
      if (!z(_0x2dc788.strokeWidth)) {
        _0x59aabc.lineWidth = _0x2dc788.strokeWidth;
      }
      _0x59aabc.strokeText(_0x224924, _0x263478, _0x2e1251, _0x2dc788.maxWidth);
    }
    _0x59aabc.fillText(_0x224924, _0x263478, _0x2e1251, _0x2dc788.maxWidth);
    jf(_0x59aabc, _0x263478, _0x2e1251, _0x224924, _0x2dc788);
    _0x2e1251 += Number(_0x514d6b.lineHeight);
  }
  _0x59aabc.restore();
}
function Uf(_0x35c180, _0x373d32) {
  const {
    x: _0xce7eb3,
    y: _0x4bdb4c,
    w: _0x4a35a6,
    h: _0x2df16d,
    radius: _0x4482aa
  } = _0x373d32;
  _0x35c180.arc(_0xce7eb3 + _0x4482aa.topLeft, _0x4bdb4c + _0x4482aa.topLeft, _0x4482aa.topLeft, Z * 1.5, Z, true);
  _0x35c180.lineTo(_0xce7eb3, _0x4bdb4c + _0x2df16d - _0x4482aa.bottomLeft);
  _0x35c180.arc(_0xce7eb3 + _0x4482aa.bottomLeft, _0x4bdb4c + _0x2df16d - _0x4482aa.bottomLeft, _0x4482aa.bottomLeft, Z, ct, true);
  _0x35c180.lineTo(_0xce7eb3 + _0x4a35a6 - _0x4482aa.bottomRight, _0x4bdb4c + _0x2df16d);
  _0x35c180.arc(_0xce7eb3 + _0x4a35a6 - _0x4482aa.bottomRight, _0x4bdb4c + _0x2df16d - _0x4482aa.bottomRight, _0x4482aa.bottomRight, ct, 0, true);
  _0x35c180.lineTo(_0xce7eb3 + _0x4a35a6, _0x4bdb4c + _0x4482aa.topRight);
  _0x35c180.arc(_0xce7eb3 + _0x4a35a6 - _0x4482aa.topRight, _0x4bdb4c + _0x4482aa.topRight, _0x4482aa.topRight, 0, -ct, true);
  _0x35c180.lineTo(_0xce7eb3 + _0x4482aa.topLeft, _0x4bdb4c);
}
const Hf = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const Yf = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Vf(_0x17f7af, _0x2932a7) {
  const _0x15b02d = ("" + _0x17f7af).match(Hf);
  if (!_0x15b02d || _0x15b02d[1] === "normal") {
    return _0x2932a7 * 1.2;
  }
  _0x17f7af = +_0x15b02d[2];
  switch (_0x15b02d[3]) {
    case "px":
      return _0x17f7af;
    case "%":
      _0x17f7af /= 100;
      break;
  }
  return _0x2932a7 * _0x17f7af;
}
const qf = _0x256443 => +_0x256443 || 0;
function vu(_0x22fc0b, _0x4fac89) {
  const _0x385b7e = {};
  const _0x343cf6 = C(_0x4fac89);
  const _0x1e2c40 = _0x343cf6 ? Object.keys(_0x4fac89) : _0x4fac89;
  const _0x4babef = C(_0x22fc0b) ? _0x343cf6 ? _0x17f04b => I(_0x22fc0b[_0x17f04b], _0x22fc0b[_0x4fac89[_0x17f04b]]) : _0x522564 => _0x22fc0b[_0x522564] : () => _0x22fc0b;
  for (const _0x121a90 of _0x1e2c40) {
    _0x385b7e[_0x121a90] = qf(_0x4babef(_0x121a90));
  }
  return _0x385b7e;
}
function Xf(_0x29b361) {
  return vu(_0x29b361, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Qf(_0x1ee2de) {
  return vu(_0x1ee2de, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function kt(_0xa2e2ba) {
  const _0x288c5b = Xf(_0xa2e2ba);
  _0x288c5b.width = _0x288c5b.left + _0x288c5b.right;
  _0x288c5b.height = _0x288c5b.top + _0x288c5b.bottom;
  return _0x288c5b;
}
function le(_0x471fe2, _0xd3d104) {
  _0x471fe2 = _0x471fe2 || {};
  _0xd3d104 = _0xd3d104 || Y.font;
  let _0x532c3f = I(_0x471fe2.size, _0xd3d104.size);
  if (typeof _0x532c3f == "string") {
    _0x532c3f = parseInt(_0x532c3f, 10);
  }
  let _0x47613c = I(_0x471fe2.style, _0xd3d104.style);
  if (_0x47613c && !("" + _0x47613c).match(Yf)) {
    console.warn("Invalid font style specified: \"" + _0x47613c + "\"");
    _0x47613c = undefined;
  }
  const _0x5a9369 = {
    family: I(_0x471fe2.family, _0xd3d104.family),
    lineHeight: Vf(I(_0x471fe2.lineHeight, _0xd3d104.lineHeight), _0x532c3f),
    size: _0x532c3f,
    style: _0x47613c,
    weight: I(_0x471fe2.weight, _0xd3d104.weight),
    string: ""
  };
  _0x5a9369.string = If(_0x5a9369);
  return _0x5a9369;
}
function Je(_0x4496ca, _0x16e707, _0x2a42f7, _0x1ab5e1) {
  let _0x4e4003 = true;
  let _0x2af5c1;
  let _0x2fc80d;
  let _0x403862;
  _0x2af5c1 = 0;
  _0x2fc80d = _0x4496ca.length;
  for (; _0x2af5c1 < _0x2fc80d; ++_0x2af5c1) {
    _0x403862 = _0x4496ca[_0x2af5c1];
    if (_0x403862 !== undefined && (_0x16e707 !== undefined && typeof _0x403862 == "function" && (_0x403862 = _0x403862(_0x16e707), _0x4e4003 = false), _0x2a42f7 !== undefined && H(_0x403862) && (_0x403862 = _0x403862[_0x2a42f7 % _0x403862.length], _0x4e4003 = false), _0x403862 !== undefined)) {
      if (_0x1ab5e1 && !_0x4e4003) {
        _0x1ab5e1.cacheable = false;
      }
      return _0x403862;
    }
  }
}
function Gf(_0x579149, _0x2e8248, _0x913e99) {
  const {
    min: _0x43d790,
    max: _0xa1485a
  } = _0x579149;
  const _0xff26bd = rf(_0x2e8248, (_0xa1485a - _0x43d790) / 2);
  const _0x371fd6 = (_0x42e945, _0x1dd611) => _0x913e99 && _0x42e945 === 0 ? 0 : _0x42e945 + _0x1dd611;
  return {
    min: _0x371fd6(_0x43d790, -Math.abs(_0xff26bd)),
    max: _0x371fd6(_0xa1485a, _0xff26bd)
  };
}
function Jt(_0x1d23d3, _0x5fc1a) {
  return Object.assign(Object.create(_0x1d23d3), _0x5fc1a);
}
function ns(_0xb44f42, _0x93d0bd = [""], _0x3dbef5, _0x429256, _0x551fbc = () => _0xb44f42[0]) {
  const _0x25e0cd = _0x3dbef5 || _0xb44f42;
  if (typeof _0x429256 === "undefined") {
    _0x429256 = Pu("_fallback", _0xb44f42);
  }
  const _0x5869ef = {
    [Symbol.toStringTag]: "Object",
    _cacheable: true,
    _scopes: _0xb44f42,
    _rootScopes: _0x25e0cd,
    _fallback: _0x429256,
    _getTarget: _0x551fbc,
    override: _0x5e0ee8 => ns([_0x5e0ee8, ..._0xb44f42], _0x93d0bd, _0x25e0cd, _0x429256)
  };
  return new Proxy(_0x5869ef, {
    deleteProperty(_0x5eb832, _0x5855dd) {
      delete _0x5eb832[_0x5855dd];
      delete _0x5eb832._keys;
      delete _0xb44f42[0][_0x5855dd];
      return true;
    },
    get(_0x1610cb, _0x35320f) {
      return xu(_0x1610cb, _0x35320f, () => ih(_0x35320f, _0x93d0bd, _0xb44f42, _0x1610cb));
    },
    getOwnPropertyDescriptor(_0x1e54c9, _0x2cd622) {
      return Reflect.getOwnPropertyDescriptor(_0x1e54c9._scopes[0], _0x2cd622);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(_0xb44f42[0]);
    },
    has(_0x3e82e3, _0x5c3e4e) {
      return js(_0x3e82e3).includes(_0x5c3e4e);
    },
    ownKeys(_0x55d3ea) {
      return js(_0x55d3ea);
    },
    set(_0x4383fe, _0x426435, _0x1348eb) {
      const _0x39946a = _0x4383fe._storage ||= _0x551fbc();
      _0x4383fe[_0x426435] = _0x39946a[_0x426435] = _0x1348eb;
      delete _0x4383fe._keys;
      return true;
    }
  });
}
function fe(_0x5e0c07, _0x242559, _0xdae1f0, _0x262bbb) {
  const _0x554963 = {
    _cacheable: false,
    _proxy: _0x5e0c07,
    _context: _0x242559,
    _subProxy: _0xdae1f0,
    _stack: new Set(),
    _descriptors: wu(_0x5e0c07, _0x262bbb),
    setContext: _0x4908d5 => fe(_0x5e0c07, _0x4908d5, _0xdae1f0, _0x262bbb),
    override: _0x5e4c4c => fe(_0x5e0c07.override(_0x5e4c4c), _0x242559, _0xdae1f0, _0x262bbb)
  };
  return new Proxy(_0x554963, {
    deleteProperty(_0x38b644, _0x4ce798) {
      delete _0x38b644[_0x4ce798];
      delete _0x5e0c07[_0x4ce798];
      return true;
    },
    get(_0x3b7405, _0x321f49, _0x3fa18f) {
      return xu(_0x3b7405, _0x321f49, () => Zf(_0x3b7405, _0x321f49, _0x3fa18f));
    },
    getOwnPropertyDescriptor(_0x340ff8, _0x429f9b) {
      if (_0x340ff8._descriptors.allKeys) {
        if (Reflect.has(_0x5e0c07, _0x429f9b)) {
          return {
            enumerable: true,
            configurable: true
          };
        } else {
          return undefined;
        }
      } else {
        return Reflect.getOwnPropertyDescriptor(_0x5e0c07, _0x429f9b);
      }
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(_0x5e0c07);
    },
    has(_0x4a3080, _0x17152a) {
      return Reflect.has(_0x5e0c07, _0x17152a);
    },
    ownKeys() {
      return Reflect.ownKeys(_0x5e0c07);
    },
    set(_0x5e45bc, _0x4f38ad, _0x4b0c3a) {
      _0x5e0c07[_0x4f38ad] = _0x4b0c3a;
      delete _0x5e45bc[_0x4f38ad];
      return true;
    }
  });
}
function wu(_0xa088dd, _0x1a8adc = {
  scriptable: true,
  indexable: true
}) {
  const {
    _scriptable: _0x33ebc0 = _0x1a8adc.scriptable,
    _indexable: _0x35d6b0 = _0x1a8adc.indexable,
    _allKeys: _0x212c83 = _0x1a8adc.allKeys
  } = _0xa088dd;
  return {
    allKeys: _0x212c83,
    scriptable: _0x33ebc0,
    indexable: _0x35d6b0,
    isScriptable: Ft(_0x33ebc0) ? _0x33ebc0 : () => _0x33ebc0,
    isIndexable: Ft(_0x35d6b0) ? _0x35d6b0 : () => _0x35d6b0
  };
}
const Kf = (_0x36b76b, _0x2b904f) => _0x36b76b ? _0x36b76b + Ko(_0x2b904f) : _0x2b904f;
const rs = (_0x568fdb, _0x76aa9f) => C(_0x76aa9f) && _0x568fdb !== "adapters" && (Object.getPrototypeOf(_0x76aa9f) === null || _0x76aa9f.constructor === Object);
function xu(_0x86e904, _0x53bb15, _0x410c43) {
  if (Object.prototype.hasOwnProperty.call(_0x86e904, _0x53bb15)) {
    return _0x86e904[_0x53bb15];
  }
  const _0x29a615 = _0x410c43();
  _0x86e904[_0x53bb15] = _0x29a615;
  return _0x29a615;
}
function Zf(_0x1bcbee, _0x30a51d, _0xed09f4) {
  const {
    _proxy: _0x3bf36b,
    _context: _0x2b08be,
    _subProxy: _0x59c5ea,
    _descriptors: _0x156502
  } = _0x1bcbee;
  let _0x2d1e4a = _0x3bf36b[_0x30a51d];
  if (Ft(_0x2d1e4a) && _0x156502.isScriptable(_0x30a51d)) {
    _0x2d1e4a = Jf(_0x30a51d, _0x2d1e4a, _0x1bcbee, _0xed09f4);
  }
  if (H(_0x2d1e4a) && _0x2d1e4a.length) {
    _0x2d1e4a = th(_0x30a51d, _0x2d1e4a, _0x1bcbee, _0x156502.isIndexable);
  }
  if (rs(_0x30a51d, _0x2d1e4a)) {
    _0x2d1e4a = fe(_0x2d1e4a, _0x2b08be, _0x59c5ea && _0x59c5ea[_0x30a51d], _0x156502);
  }
  return _0x2d1e4a;
}
function Jf(_0x1ade7c, _0x35e859, _0x5bb483, _0x41f830) {
  const {
    _proxy: _0x10d155,
    _context: _0x26076c,
    _subProxy: _0x34e5f7,
    _stack: _0x290d5f
  } = _0x5bb483;
  if (_0x290d5f.has(_0x1ade7c)) {
    throw new Error("Recursion detected: " + Array.from(_0x290d5f).join("->") + "->" + _0x1ade7c);
  }
  _0x290d5f.add(_0x1ade7c);
  let _0x43f0fd = _0x35e859(_0x26076c, _0x34e5f7 || _0x41f830);
  _0x290d5f.delete(_0x1ade7c);
  if (rs(_0x1ade7c, _0x43f0fd)) {
    _0x43f0fd = is(_0x10d155._scopes, _0x10d155, _0x1ade7c, _0x43f0fd);
  }
  return _0x43f0fd;
}
function th(_0x3860a8, _0x1d3ff7, _0x244da3, _0x11e406) {
  const {
    _proxy: _0x473cb1,
    _context: _0x4afbf2,
    _subProxy: _0x1607ee,
    _descriptors: _0x2fc19d
  } = _0x244da3;
  if (typeof _0x4afbf2.index !== "undefined" && _0x11e406(_0x3860a8)) {
    return _0x1d3ff7[_0x4afbf2.index % _0x1d3ff7.length];
  }
  if (C(_0x1d3ff7[0])) {
    const _0x56dc9e = _0x1d3ff7;
    const _0x54a4e9 = _0x473cb1._scopes.filter(_0x55ce43 => _0x55ce43 !== _0x56dc9e);
    _0x1d3ff7 = [];
    for (const _0xb92e9f of _0x56dc9e) {
      const _0x26ddf6 = is(_0x54a4e9, _0x473cb1, _0x3860a8, _0xb92e9f);
      _0x1d3ff7.push(fe(_0x26ddf6, _0x4afbf2, _0x1607ee && _0x1607ee[_0x3860a8], _0x2fc19d));
    }
  }
  return _0x1d3ff7;
}
function Ou(_0x35d475, _0x4a426c, _0x3a0bf8) {
  if (Ft(_0x35d475)) {
    return _0x35d475(_0x4a426c, _0x3a0bf8);
  } else {
    return _0x35d475;
  }
}
const eh = (_0x1eea86, _0x1efcf0) => _0x1eea86 === true ? _0x1efcf0 : typeof _0x1eea86 == "string" ? sr(_0x1efcf0, _0x1eea86) : undefined;
function nh(_0xcac96b, _0x315b1a, _0x151fd2, _0x275dd2, _0x4764e7) {
  for (const _0x443a0e of _0x315b1a) {
    const _0x566544 = eh(_0x151fd2, _0x443a0e);
    if (_0x566544) {
      _0xcac96b.add(_0x566544);
      const _0x208fcd = Ou(_0x566544._fallback, _0x151fd2, _0x4764e7);
      if (typeof _0x208fcd !== "undefined" && _0x208fcd !== _0x151fd2 && _0x208fcd !== _0x275dd2) {
        return _0x208fcd;
      }
    } else if (_0x566544 === false && typeof _0x275dd2 !== "undefined" && _0x151fd2 !== _0x275dd2) {
      return null;
    }
  }
  return false;
}
function is(_0x4ced33, _0x4aba15, _0x3e5d0f, _0xe471c2) {
  const _0x5951d0 = _0x4aba15._rootScopes;
  const _0x414aa2 = Ou(_0x4aba15._fallback, _0x3e5d0f, _0xe471c2);
  const _0x535817 = [..._0x4ced33, ..._0x5951d0];
  const _0x4b4a75 = new Set();
  _0x4b4a75.add(_0xe471c2);
  let _0x239680 = Bs(_0x4b4a75, _0x535817, _0x3e5d0f, _0x414aa2 || _0x3e5d0f, _0xe471c2);
  if (_0x239680 === null || typeof _0x414aa2 !== "undefined" && _0x414aa2 !== _0x3e5d0f && (_0x239680 = Bs(_0x4b4a75, _0x535817, _0x414aa2, _0x239680, _0xe471c2), _0x239680 === null)) {
    return false;
  } else {
    return ns(Array.from(_0x4b4a75), [""], _0x5951d0, _0x414aa2, () => rh(_0x4aba15, _0x3e5d0f, _0xe471c2));
  }
}
function Bs(_0x11d271, _0x448973, _0x28ed33, _0x49df3a, _0x42371d) {
  while (_0x28ed33) {
    _0x28ed33 = nh(_0x11d271, _0x448973, _0x28ed33, _0x49df3a, _0x42371d);
  }
  return _0x28ed33;
}
function rh(_0x20bc20, _0x9e4fa3, _0x4a8c37) {
  const _0x395dff = _0x20bc20._getTarget();
  if (!(_0x9e4fa3 in _0x395dff)) {
    _0x395dff[_0x9e4fa3] = {};
  }
  const _0x150abc = _0x395dff[_0x9e4fa3];
  if (H(_0x150abc) && C(_0x4a8c37)) {
    return _0x4a8c37;
  } else {
    return _0x150abc || {};
  }
}
function ih(_0x259b11, _0x26a6bf, _0x170e9e, _0x505c98) {
  let _0x3cf8c7;
  for (const _0x48668c of _0x26a6bf) {
    _0x3cf8c7 = Pu(Kf(_0x48668c, _0x259b11), _0x170e9e);
    if (typeof _0x3cf8c7 !== "undefined") {
      if (rs(_0x259b11, _0x3cf8c7)) {
        return is(_0x170e9e, _0x505c98, _0x259b11, _0x3cf8c7);
      } else {
        return _0x3cf8c7;
      }
    }
  }
}
function Pu(_0x23becf, _0x1654c0) {
  for (const _0x58261d of _0x1654c0) {
    if (!_0x58261d) {
      continue;
    }
    const _0x522c96 = _0x58261d[_0x23becf];
    if (typeof _0x522c96 !== "undefined") {
      return _0x522c96;
    }
  }
}
function js(_0x322beb) {
  let _0x515c3f = _0x322beb._keys;
  _0x515c3f ||= _0x322beb._keys = oh(_0x322beb._scopes);
  return _0x515c3f;
}
function oh(_0x22d199) {
  const _0x347112 = new Set();
  for (const _0x3353ff of _0x22d199) {
    for (const _0x702e11 of Object.keys(_0x3353ff).filter(_0x14fda3 => !_0x14fda3.startsWith("_"))) {
      _0x347112.add(_0x702e11);
    }
  }
  return Array.from(_0x347112);
}
const sh = Number.EPSILON || 1e-14;
const he = (_0x15a34d, _0x327e97) => _0x327e97 < _0x15a34d.length && !_0x15a34d[_0x327e97].skip && _0x15a34d[_0x327e97];
const Su = _0x5722d1 => _0x5722d1 === "x" ? "y" : "x";
function ah(_0x2d212a, _0x51bed6, _0x322538, _0x47c7aa) {
  const _0x6908f4 = _0x2d212a.skip ? _0x51bed6 : _0x2d212a;
  const _0x9ff4a0 = _0x51bed6;
  const _0x2d2df5 = _0x322538.skip ? _0x51bed6 : _0x322538;
  const _0x52383d = Cs(_0x9ff4a0, _0x6908f4);
  const _0x4de3a3 = Cs(_0x2d2df5, _0x9ff4a0);
  let _0x4d831b = _0x52383d / (_0x52383d + _0x4de3a3);
  let _0x2980fe = _0x4de3a3 / (_0x52383d + _0x4de3a3);
  _0x4d831b = isNaN(_0x4d831b) ? 0 : _0x4d831b;
  _0x2980fe = isNaN(_0x2980fe) ? 0 : _0x2980fe;
  const _0x233135 = _0x47c7aa * _0x4d831b;
  const _0x456920 = _0x47c7aa * _0x2980fe;
  return {
    previous: {
      x: _0x9ff4a0.x - _0x233135 * (_0x2d2df5.x - _0x6908f4.x),
      y: _0x9ff4a0.y - _0x233135 * (_0x2d2df5.y - _0x6908f4.y)
    },
    next: {
      x: _0x9ff4a0.x + _0x456920 * (_0x2d2df5.x - _0x6908f4.x),
      y: _0x9ff4a0.y + _0x456920 * (_0x2d2df5.y - _0x6908f4.y)
    }
  };
}
function ch(_0x231a4d, _0x137857, _0x3b7a27) {
  const _0x2f7d1c = _0x231a4d.length;
  let _0x358b83;
  let _0x301626;
  let _0x19508f;
  let _0x3eae3c;
  let _0x3837e9;
  let _0x2ea3f2 = he(_0x231a4d, 0);
  for (let _0x38e642 = 0; _0x38e642 < _0x2f7d1c - 1; ++_0x38e642) {
    _0x3837e9 = _0x2ea3f2;
    _0x2ea3f2 = he(_0x231a4d, _0x38e642 + 1);
    if (!!_0x3837e9 && !!_0x2ea3f2) {
      if (ke(_0x137857[_0x38e642], 0, sh)) {
        _0x3b7a27[_0x38e642] = _0x3b7a27[_0x38e642 + 1] = 0;
        continue;
      }
      _0x358b83 = _0x3b7a27[_0x38e642] / _0x137857[_0x38e642];
      _0x301626 = _0x3b7a27[_0x38e642 + 1] / _0x137857[_0x38e642];
      _0x3eae3c = Math.pow(_0x358b83, 2) + Math.pow(_0x301626, 2);
      if (!(_0x3eae3c <= 9)) {
        _0x19508f = 3 / Math.sqrt(_0x3eae3c);
        _0x3b7a27[_0x38e642] = _0x358b83 * _0x19508f * _0x137857[_0x38e642];
        _0x3b7a27[_0x38e642 + 1] = _0x301626 * _0x19508f * _0x137857[_0x38e642];
      }
    }
  }
}
function uh(_0x21b6d0, _0x4b5cdc, _0x19b350 = "x") {
  const _0x19cc8d = Su(_0x19b350);
  const _0xae4a6e = _0x21b6d0.length;
  let _0x64baa8;
  let _0x2fdf92;
  let _0x34fa89;
  let _0x197974 = he(_0x21b6d0, 0);
  for (let _0x28e8f5 = 0; _0x28e8f5 < _0xae4a6e; ++_0x28e8f5) {
    _0x2fdf92 = _0x34fa89;
    _0x34fa89 = _0x197974;
    _0x197974 = he(_0x21b6d0, _0x28e8f5 + 1);
    if (!_0x34fa89) {
      continue;
    }
    const _0xcc1035 = _0x34fa89[_0x19b350];
    const _0x1df276 = _0x34fa89[_0x19cc8d];
    if (_0x2fdf92) {
      _0x64baa8 = (_0xcc1035 - _0x2fdf92[_0x19b350]) / 3;
      _0x34fa89["cp1" + _0x19b350] = _0xcc1035 - _0x64baa8;
      _0x34fa89["cp1" + _0x19cc8d] = _0x1df276 - _0x64baa8 * _0x4b5cdc[_0x28e8f5];
    }
    if (_0x197974) {
      _0x64baa8 = (_0x197974[_0x19b350] - _0xcc1035) / 3;
      _0x34fa89["cp2" + _0x19b350] = _0xcc1035 + _0x64baa8;
      _0x34fa89["cp2" + _0x19cc8d] = _0x1df276 + _0x64baa8 * _0x4b5cdc[_0x28e8f5];
    }
  }
}
function lh(_0x5753d6, _0x537f1d = "x") {
  const _0x35db3f = Su(_0x537f1d);
  const _0x3260f7 = _0x5753d6.length;
  const _0x3093ed = Array(_0x3260f7).fill(0);
  const _0x1dd857 = Array(_0x3260f7);
  let _0x304af1;
  let _0xb11b62;
  let _0x2aa321;
  let _0x5c2617 = he(_0x5753d6, 0);
  for (_0x304af1 = 0; _0x304af1 < _0x3260f7; ++_0x304af1) {
    _0xb11b62 = _0x2aa321;
    _0x2aa321 = _0x5c2617;
    _0x5c2617 = he(_0x5753d6, _0x304af1 + 1);
    if (_0x2aa321) {
      if (_0x5c2617) {
        const _0x295954 = _0x5c2617[_0x537f1d] - _0x2aa321[_0x537f1d];
        _0x3093ed[_0x304af1] = _0x295954 !== 0 ? (_0x5c2617[_0x35db3f] - _0x2aa321[_0x35db3f]) / _0x295954 : 0;
      }
      _0x1dd857[_0x304af1] = _0xb11b62 ? _0x5c2617 ? ue(_0x3093ed[_0x304af1 - 1]) !== ue(_0x3093ed[_0x304af1]) ? 0 : (_0x3093ed[_0x304af1 - 1] + _0x3093ed[_0x304af1]) / 2 : _0x3093ed[_0x304af1 - 1] : _0x3093ed[_0x304af1];
    }
  }
  ch(_0x5753d6, _0x3093ed, _0x1dd857);
  uh(_0x5753d6, _0x1dd857, _0x537f1d);
}
function tn(_0x471a26, _0x368621, _0x2beac5) {
  return Math.max(Math.min(_0x471a26, _0x2beac5), _0x368621);
}
function fh(_0x3ccb29, _0x36a04f) {
  let _0x4da2f2;
  let _0xb69b11;
  let _0x3cdb74;
  let _0x5b2aaf;
  let _0x111737;
  let _0x58d9e1 = St(_0x3ccb29[0], _0x36a04f);
  _0x4da2f2 = 0;
  _0xb69b11 = _0x3ccb29.length;
  for (; _0x4da2f2 < _0xb69b11; ++_0x4da2f2) {
    _0x111737 = _0x5b2aaf;
    _0x5b2aaf = _0x58d9e1;
    _0x58d9e1 = _0x4da2f2 < _0xb69b11 - 1 && St(_0x3ccb29[_0x4da2f2 + 1], _0x36a04f);
    if (_0x5b2aaf) {
      _0x3cdb74 = _0x3ccb29[_0x4da2f2];
      if (_0x111737) {
        _0x3cdb74.cp1x = tn(_0x3cdb74.cp1x, _0x36a04f.left, _0x36a04f.right);
        _0x3cdb74.cp1y = tn(_0x3cdb74.cp1y, _0x36a04f.top, _0x36a04f.bottom);
      }
      if (_0x58d9e1) {
        _0x3cdb74.cp2x = tn(_0x3cdb74.cp2x, _0x36a04f.left, _0x36a04f.right);
        _0x3cdb74.cp2y = tn(_0x3cdb74.cp2y, _0x36a04f.top, _0x36a04f.bottom);
      }
    }
  }
}
function hh(_0x133fe8, _0x543538, _0x456c3d, _0x9f7154, _0x5007c4) {
  let _0x27606f;
  let _0x3e488b;
  let _0x47c7a2;
  let _0x4a64f6;
  if (_0x543538.spanGaps) {
    _0x133fe8 = _0x133fe8.filter(_0x1ce368 => !_0x1ce368.skip);
  }
  if (_0x543538.cubicInterpolationMode === "monotone") {
    lh(_0x133fe8, _0x5007c4);
  } else {
    let _0x403858 = _0x9f7154 ? _0x133fe8[_0x133fe8.length - 1] : _0x133fe8[0];
    _0x27606f = 0;
    _0x3e488b = _0x133fe8.length;
    for (; _0x27606f < _0x3e488b; ++_0x27606f) {
      _0x47c7a2 = _0x133fe8[_0x27606f];
      _0x4a64f6 = ah(_0x403858, _0x47c7a2, _0x133fe8[Math.min(_0x27606f + 1, _0x3e488b - (_0x9f7154 ? 0 : 1)) % _0x3e488b], _0x543538.tension);
      _0x47c7a2.cp1x = _0x4a64f6.previous.x;
      _0x47c7a2.cp1y = _0x4a64f6.previous.y;
      _0x47c7a2.cp2x = _0x4a64f6.next.x;
      _0x47c7a2.cp2y = _0x4a64f6.next.y;
      _0x403858 = _0x47c7a2;
    }
  }
  if (_0x543538.capBezierPoints) {
    fh(_0x133fe8, _0x456c3d);
  }
}
function os() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function ss(_0x25a478) {
  let _0x25fae7 = _0x25a478.parentNode;
  if (_0x25fae7 && _0x25fae7.toString() === "[object ShadowRoot]") {
    _0x25fae7 = _0x25fae7.host;
  }
  return _0x25fae7;
}
function fr(_0x3b5813, _0x15f608, _0x2b1054) {
  let _0x2704fc;
  if (typeof _0x3b5813 == "string") {
    _0x2704fc = parseInt(_0x3b5813, 10);
    if (_0x3b5813.indexOf("%") !== -1) {
      _0x2704fc = _0x2704fc / 100 * _0x15f608.parentNode[_0x2b1054];
    }
  } else {
    _0x2704fc = _0x3b5813;
  }
  return _0x2704fc;
}
const Jr = _0x30ae7f => _0x30ae7f.ownerDocument.defaultView.getComputedStyle(_0x30ae7f, null);
function dh(_0x7b428d, _0x2e2767) {
  return Jr(_0x7b428d).getPropertyValue(_0x2e2767);
}
const ph = ["top", "right", "bottom", "left"];
function Gt(_0x414d69, _0xc9282, _0x396d71) {
  const _0x458885 = {};
  _0x396d71 = _0x396d71 ? "-" + _0x396d71 : "";
  for (let _0x4d88e0 = 0; _0x4d88e0 < 4; _0x4d88e0++) {
    const _0x49865a = ph[_0x4d88e0];
    _0x458885[_0x49865a] = parseFloat(_0x414d69[_0xc9282 + "-" + _0x49865a + _0x396d71]) || 0;
  }
  _0x458885.width = _0x458885.left + _0x458885.right;
  _0x458885.height = _0x458885.top + _0x458885.bottom;
  return _0x458885;
}
const gh = (_0x55f07e, _0xb4d8a0, _0x52104d) => (_0x55f07e > 0 || _0xb4d8a0 > 0) && (!_0x52104d || !_0x52104d.shadowRoot);
function yh(_0x83d64, _0x460244) {
  const _0x3dd88a = _0x83d64.touches;
  const _0xc13303 = _0x3dd88a && _0x3dd88a.length ? _0x3dd88a[0] : _0x83d64;
  const {
    offsetX: _0xee9460,
    offsetY: _0x1324e8
  } = _0xc13303;
  let _0x30ebed = false;
  let _0x2164d6;
  let _0x4f3145;
  if (gh(_0xee9460, _0x1324e8, _0x83d64.target)) {
    _0x2164d6 = _0xee9460;
    _0x4f3145 = _0x1324e8;
  } else {
    const _0x590982 = _0x460244.getBoundingClientRect();
    _0x2164d6 = _0xc13303.clientX - _0x590982.left;
    _0x4f3145 = _0xc13303.clientY - _0x590982.top;
    _0x30ebed = true;
  }
  return {
    x: _0x2164d6,
    y: _0x4f3145,
    box: _0x30ebed
  };
}
function Vt(_0x428ffc, _0x910256) {
  if ("native" in _0x428ffc) {
    return _0x428ffc;
  }
  const {
    canvas: _0x2ceb7e,
    currentDevicePixelRatio: _0x4081b3
  } = _0x910256;
  const _0x5aef42 = Jr(_0x2ceb7e);
  const _0x4a7188 = _0x5aef42.boxSizing === "border-box";
  const _0x74ca97 = Gt(_0x5aef42, "padding");
  const _0x5c4822 = Gt(_0x5aef42, "border", "width");
  const {
    x: _0x26c7f2,
    y: _0x27a31c,
    box: _0x4b7afd
  } = yh(_0x428ffc, _0x2ceb7e);
  const _0x3c8e86 = _0x74ca97.left + (_0x4b7afd && _0x5c4822.left);
  const _0x2f4315 = _0x74ca97.top + (_0x4b7afd && _0x5c4822.top);
  let {
    width: _0x2ea897,
    height: _0x4fe328
  } = _0x910256;
  if (_0x4a7188) {
    _0x2ea897 -= _0x74ca97.width + _0x5c4822.width;
    _0x4fe328 -= _0x74ca97.height + _0x5c4822.height;
  }
  return {
    x: Math.round((_0x26c7f2 - _0x3c8e86) / _0x2ea897 * _0x2ceb7e.width / _0x4081b3),
    y: Math.round((_0x27a31c - _0x2f4315) / _0x4fe328 * _0x2ceb7e.height / _0x4081b3)
  };
}
function mh(_0x5efd2c, _0x3cc427, _0x4452bd) {
  let _0x11ea14;
  let _0x3d476c;
  if (_0x3cc427 === undefined || _0x4452bd === undefined) {
    const _0x493b5b = ss(_0x5efd2c);
    if (!_0x493b5b) {
      _0x3cc427 = _0x5efd2c.clientWidth;
      _0x4452bd = _0x5efd2c.clientHeight;
    } else {
      const _0x385f43 = _0x493b5b.getBoundingClientRect();
      const _0x22b46c = Jr(_0x493b5b);
      const _0x1f24fe = Gt(_0x22b46c, "border", "width");
      const _0x34428b = Gt(_0x22b46c, "padding");
      _0x3cc427 = _0x385f43.width - _0x34428b.width - _0x1f24fe.width;
      _0x4452bd = _0x385f43.height - _0x34428b.height - _0x1f24fe.height;
      _0x11ea14 = fr(_0x22b46c.maxWidth, _0x493b5b, "clientWidth");
      _0x3d476c = fr(_0x22b46c.maxHeight, _0x493b5b, "clientHeight");
    }
  }
  return {
    width: _0x3cc427,
    height: _0x4452bd,
    maxWidth: _0x11ea14 || cr,
    maxHeight: _0x3d476c || cr
  };
}
const en = _0x44cb1e => Math.round(_0x44cb1e * 10) / 10;
function bh(_0x84fb9f, _0x3ec273, _0x12ee33, _0x4b55fe) {
  const _0x39d2f7 = Jr(_0x84fb9f);
  const _0x431c5a = Gt(_0x39d2f7, "margin");
  const _0x142b11 = fr(_0x39d2f7.maxWidth, _0x84fb9f, "clientWidth") || cr;
  const _0x94eaac = fr(_0x39d2f7.maxHeight, _0x84fb9f, "clientHeight") || cr;
  const _0xccc0ce = mh(_0x84fb9f, _0x3ec273, _0x12ee33);
  let {
    width: _0x2a0ad9,
    height: _0xa7216d
  } = _0xccc0ce;
  if (_0x39d2f7.boxSizing === "content-box") {
    const _0x3ce322 = Gt(_0x39d2f7, "border", "width");
    const _0xc24aca = Gt(_0x39d2f7, "padding");
    _0x2a0ad9 -= _0xc24aca.width + _0x3ce322.width;
    _0xa7216d -= _0xc24aca.height + _0x3ce322.height;
  }
  _0x2a0ad9 = Math.max(0, _0x2a0ad9 - _0x431c5a.width);
  _0xa7216d = Math.max(0, _0x4b55fe ? _0x2a0ad9 / _0x4b55fe : _0xa7216d - _0x431c5a.height);
  _0x2a0ad9 = en(Math.min(_0x2a0ad9, _0x142b11, _0xccc0ce.maxWidth));
  _0xa7216d = en(Math.min(_0xa7216d, _0x94eaac, _0xccc0ce.maxHeight));
  if (_0x2a0ad9 && !_0xa7216d) {
    _0xa7216d = en(_0x2a0ad9 / 2);
  }
  if ((_0x3ec273 !== undefined || _0x12ee33 !== undefined) && _0x4b55fe && _0xccc0ce.height && _0xa7216d > _0xccc0ce.height) {
    _0xa7216d = _0xccc0ce.height;
    _0x2a0ad9 = en(Math.floor(_0xa7216d * _0x4b55fe));
  }
  return {
    width: _0x2a0ad9,
    height: _0xa7216d
  };
}
function Ws(_0x5d90a0, _0x234e67, _0x226cb5) {
  const _0x5ae251 = _0x234e67 || 1;
  const _0x413b82 = Math.floor(_0x5d90a0.height * _0x5ae251);
  const _0x2ba9d1 = Math.floor(_0x5d90a0.width * _0x5ae251);
  _0x5d90a0.height = Math.floor(_0x5d90a0.height);
  _0x5d90a0.width = Math.floor(_0x5d90a0.width);
  const _0x490de8 = _0x5d90a0.canvas;
  if (_0x490de8.style && (_0x226cb5 || !_0x490de8.style.height && !_0x490de8.style.width)) {
    _0x490de8.style.height = _0x5d90a0.height + "px";
    _0x490de8.style.width = _0x5d90a0.width + "px";
  }
  if (_0x5d90a0.currentDevicePixelRatio !== _0x5ae251 || _0x490de8.height !== _0x413b82 || _0x490de8.width !== _0x2ba9d1) {
    _0x5d90a0.currentDevicePixelRatio = _0x5ae251;
    _0x490de8.height = _0x413b82;
    _0x490de8.width = _0x2ba9d1;
    _0x5d90a0.ctx.setTransform(_0x5ae251, 0, 0, _0x5ae251, 0, 0);
    return true;
  } else {
    return false;
  }
}
const _h = function () {
  let _0x11bdd7 = false;
  try {
    const _0x3d1262 = {
      get passive() {
        _0x11bdd7 = true;
        return false;
      }
    };
    if (os()) {
      window.addEventListener("test", null, _0x3d1262);
      window.removeEventListener("test", null, _0x3d1262);
    }
  } catch {}
  return _0x11bdd7;
}();
function Us(_0x4c8d6d, _0x28e61e) {
  const _0x41e2bf = dh(_0x4c8d6d, _0x28e61e);
  const _0x930e81 = _0x41e2bf && _0x41e2bf.match(/^(\d+)(\.\d+)?px$/);
  if (_0x930e81) {
    return +_0x930e81[1];
  } else {
    return undefined;
  }
}
function qt(_0x428e3d, _0x28cee5, _0x1c438d, _0x3abbfb) {
  return {
    x: _0x428e3d.x + _0x1c438d * (_0x28cee5.x - _0x428e3d.x),
    y: _0x428e3d.y + _0x1c438d * (_0x28cee5.y - _0x428e3d.y)
  };
}
function vh(_0x40111d, _0x431a1a, _0x468bb4, _0x57e19c) {
  return {
    x: _0x40111d.x + _0x468bb4 * (_0x431a1a.x - _0x40111d.x),
    y: _0x57e19c === "middle" ? _0x468bb4 < 0.5 ? _0x40111d.y : _0x431a1a.y : _0x57e19c === "after" ? _0x468bb4 < 1 ? _0x40111d.y : _0x431a1a.y : _0x468bb4 > 0 ? _0x431a1a.y : _0x40111d.y
  };
}
function wh(_0x2cf74c, _0x22223a, _0x201437, _0x380943) {
  const _0x2c7daf = {
    x: _0x2cf74c.cp2x,
    y: _0x2cf74c.cp2y
  };
  const _0x2bdb5d = {
    x: _0x22223a.cp1x,
    y: _0x22223a.cp1y
  };
  const _0x20ff32 = qt(_0x2cf74c, _0x2c7daf, _0x201437);
  const _0x86190f = qt(_0x2c7daf, _0x2bdb5d, _0x201437);
  const _0x4bf0f0 = qt(_0x2bdb5d, _0x22223a, _0x201437);
  const _0x1f2a52 = qt(_0x20ff32, _0x86190f, _0x201437);
  const _0x52b768 = qt(_0x86190f, _0x4bf0f0, _0x201437);
  return qt(_0x1f2a52, _0x52b768, _0x201437);
}
function Tu(_0x3ce685) {
  if (_0x3ce685 === "angle") {
    return {
      between: du,
      compare: gf,
      normalize: gt
    };
  } else {
    return {
      between: mf,
      compare: (_0x95a002, _0x21c981) => _0x95a002 - _0x21c981,
      normalize: _0x27877a => _0x27877a
    };
  }
}
function Hs({
  start: _0x3aabd9,
  end: _0x38fd16,
  count: _0x3149de,
  loop: _0x275c62,
  style: _0x56b98e
}) {
  return {
    start: _0x3aabd9 % _0x3149de,
    end: _0x38fd16 % _0x3149de,
    loop: _0x275c62 && (_0x38fd16 - _0x3aabd9 + 1) % _0x3149de === 0,
    style: _0x56b98e
  };
}
function xh(_0x480f75, _0x32af87, _0x12f7f4) {
  const {
    property: _0x123506,
    start: _0x1d1cd3,
    end: _0x4d4701
  } = _0x12f7f4;
  const {
    between: _0xafdd97,
    normalize: _0x350dac
  } = Tu(_0x123506);
  const _0x3c9bf6 = _0x32af87.length;
  let {
    start: _0xd252e3,
    end: _0xf5ffcf,
    loop: _0x816ea8
  } = _0x480f75;
  let _0x3599ea;
  let _0x242e82;
  if (_0x816ea8) {
    _0xd252e3 += _0x3c9bf6;
    _0xf5ffcf += _0x3c9bf6;
    _0x3599ea = 0;
    _0x242e82 = _0x3c9bf6;
    for (; _0x3599ea < _0x242e82 && _0xafdd97(_0x350dac(_0x32af87[_0xd252e3 % _0x3c9bf6][_0x123506]), _0x1d1cd3, _0x4d4701); ++_0x3599ea) {
      _0xd252e3--;
      _0xf5ffcf--;
    }
    _0xd252e3 %= _0x3c9bf6;
    _0xf5ffcf %= _0x3c9bf6;
  }
  if (_0xf5ffcf < _0xd252e3) {
    _0xf5ffcf += _0x3c9bf6;
  }
  return {
    start: _0xd252e3,
    end: _0xf5ffcf,
    loop: _0x816ea8,
    style: _0x480f75.style
  };
}
function Oh(_0x2c36bd, _0x39bec6, _0x58e0c0) {
  if (!_0x58e0c0) {
    return [_0x2c36bd];
  }
  const {
    property: _0x22369c,
    start: _0x23e90b,
    end: _0x433ced
  } = _0x58e0c0;
  const _0x48d635 = _0x39bec6.length;
  const {
    compare: _0x511432,
    between: _0x7c6231,
    normalize: _0x9c2ddd
  } = Tu(_0x22369c);
  const {
    start: _0x572869,
    end: _0x39b609,
    loop: _0x21cfbf,
    style: _0x40bd89
  } = xh(_0x2c36bd, _0x39bec6, _0x58e0c0);
  const _0x20f14f = [];
  let _0x4a0d5d = false;
  let _0x3d537c = null;
  let _0x80f9d9;
  let _0x52d4c7;
  let _0x4e1380;
  const _0x29d2bb = () => _0x7c6231(_0x23e90b, _0x4e1380, _0x80f9d9) && _0x511432(_0x23e90b, _0x4e1380) !== 0;
  const _0xa55e53 = () => _0x511432(_0x433ced, _0x80f9d9) === 0 || _0x7c6231(_0x433ced, _0x4e1380, _0x80f9d9);
  const _0x5602cd = () => _0x4a0d5d || _0x29d2bb();
  const _0x290c76 = () => !_0x4a0d5d || _0xa55e53();
  for (let _0x5a4311 = _0x572869, _0x1369a1 = _0x572869; _0x5a4311 <= _0x39b609; ++_0x5a4311) {
    _0x52d4c7 = _0x39bec6[_0x5a4311 % _0x48d635];
    if (!_0x52d4c7.skip) {
      _0x80f9d9 = _0x9c2ddd(_0x52d4c7[_0x22369c]);
      if (_0x80f9d9 !== _0x4e1380) {
        _0x4a0d5d = _0x7c6231(_0x80f9d9, _0x23e90b, _0x433ced);
        if (_0x3d537c === null && _0x5602cd()) {
          _0x3d537c = _0x511432(_0x80f9d9, _0x23e90b) === 0 ? _0x5a4311 : _0x1369a1;
        }
        if (_0x3d537c !== null && _0x290c76()) {
          _0x20f14f.push(Hs({
            start: _0x3d537c,
            end: _0x5a4311,
            loop: _0x21cfbf,
            count: _0x48d635,
            style: _0x40bd89
          }));
          _0x3d537c = null;
        }
        _0x1369a1 = _0x5a4311;
        _0x4e1380 = _0x80f9d9;
      }
    }
  }
  if (_0x3d537c !== null) {
    _0x20f14f.push(Hs({
      start: _0x3d537c,
      end: _0x39b609,
      loop: _0x21cfbf,
      count: _0x48d635,
      style: _0x40bd89
    }));
  }
  return _0x20f14f;
}
function Ph(_0xfd0e1c, _0x35b348) {
  const _0x30119b = [];
  const _0x47f3a9 = _0xfd0e1c.segments;
  for (let _0x2a5aae = 0; _0x2a5aae < _0x47f3a9.length; _0x2a5aae++) {
    const _0x1db8ae = Oh(_0x47f3a9[_0x2a5aae], _0xfd0e1c.points, _0x35b348);
    if (_0x1db8ae.length) {
      _0x30119b.push(..._0x1db8ae);
    }
  }
  return _0x30119b;
}
function Sh(_0x4a23e2, _0xa1cbb9, _0x548804, _0x597bbf) {
  let _0x5ef18e = 0;
  let _0x4742df = _0xa1cbb9 - 1;
  if (_0x548804 && !_0x597bbf) {
    while (_0x5ef18e < _0xa1cbb9 && !_0x4a23e2[_0x5ef18e].skip) {
      _0x5ef18e++;
    }
  }
  while (_0x5ef18e < _0xa1cbb9 && _0x4a23e2[_0x5ef18e].skip) {
    _0x5ef18e++;
  }
  _0x5ef18e %= _0xa1cbb9;
  if (_0x548804) {
    _0x4742df += _0x5ef18e;
  }
  while (_0x4742df > _0x5ef18e && _0x4a23e2[_0x4742df % _0xa1cbb9].skip) {
    _0x4742df--;
  }
  _0x4742df %= _0xa1cbb9;
  return {
    start: _0x5ef18e,
    end: _0x4742df
  };
}
function Th(_0x207c79, _0x377a92, _0x3fe7b8, _0x12da01) {
  const _0x1ecc43 = _0x207c79.length;
  const _0x4f75fc = [];
  let _0x4a2da6 = _0x377a92;
  let _0x3e707f = _0x207c79[_0x377a92];
  let _0x2758ca;
  for (_0x2758ca = _0x377a92 + 1; _0x2758ca <= _0x3fe7b8; ++_0x2758ca) {
    const _0x5d5ed9 = _0x207c79[_0x2758ca % _0x1ecc43];
    if (_0x5d5ed9.skip || _0x5d5ed9.stop) {
      if (!_0x3e707f.skip) {
        _0x12da01 = false;
        _0x4f75fc.push({
          start: _0x377a92 % _0x1ecc43,
          end: (_0x2758ca - 1) % _0x1ecc43,
          loop: _0x12da01
        });
        _0x377a92 = _0x4a2da6 = _0x5d5ed9.stop ? _0x2758ca : null;
      }
    } else {
      _0x4a2da6 = _0x2758ca;
      if (_0x3e707f.skip) {
        _0x377a92 = _0x2758ca;
      }
    }
    _0x3e707f = _0x5d5ed9;
  }
  if (_0x4a2da6 !== null) {
    _0x4f75fc.push({
      start: _0x377a92 % _0x1ecc43,
      end: _0x4a2da6 % _0x1ecc43,
      loop: _0x12da01
    });
  }
  return _0x4f75fc;
}
function Mh(_0x303a1b, _0x380fb2) {
  const _0xf45400 = _0x303a1b.points;
  const _0x4df421 = _0x303a1b.options.spanGaps;
  const _0x293775 = _0xf45400.length;
  if (!_0x293775) {
    return [];
  }
  const _0x25653c = !!_0x303a1b._loop;
  const {
    start: _0x38e864,
    end: _0x48c72d
  } = Sh(_0xf45400, _0x293775, _0x25653c, _0x4df421);
  if (_0x4df421 === true) {
    return Ys(_0x303a1b, [{
      start: _0x38e864,
      end: _0x48c72d,
      loop: _0x25653c
    }], _0xf45400, _0x380fb2);
  }
  const _0x507445 = _0x48c72d < _0x38e864 ? _0x48c72d + _0x293775 : _0x48c72d;
  const _0x1dabc7 = !!_0x303a1b._fullLoop && _0x38e864 === 0 && _0x48c72d === _0x293775 - 1;
  return Ys(_0x303a1b, Th(_0xf45400, _0x38e864, _0x507445, _0x1dabc7), _0xf45400, _0x380fb2);
}
function Ys(_0x159987, _0x3c4c83, _0x59ddd4, _0x51ef6b) {
  if (!_0x51ef6b || !_0x51ef6b.setContext || !_0x59ddd4) {
    return _0x3c4c83;
  } else {
    return kh(_0x159987, _0x3c4c83, _0x59ddd4, _0x51ef6b);
  }
}
function kh(_0x3c0d96, _0x59554f, _0x515166, _0x40282d) {
  const _0x2c52cf = _0x3c0d96._chart.getContext();
  const _0x23a924 = Vs(_0x3c0d96.options);
  const {
    _datasetIndex: _0x32165c,
    options: {
      spanGaps: _0x522aa5
    }
  } = _0x3c0d96;
  const _0x1afd94 = _0x515166.length;
  const _0x1b00a2 = [];
  let _0x381ff5 = _0x23a924;
  let _0x58a6b3 = _0x59554f[0].start;
  let _0x3b02b7 = _0x58a6b3;
  function _0x4d8ae0(_0x259a64, _0x3a6d30, _0x1cb5e2, _0xc76772) {
    const _0x5394da = _0x522aa5 ? -1 : 1;
    if (_0x259a64 !== _0x3a6d30) {
      for (_0x259a64 += _0x1afd94; _0x515166[_0x259a64 % _0x1afd94].skip;) {
        _0x259a64 -= _0x5394da;
      }
      while (_0x515166[_0x3a6d30 % _0x1afd94].skip) {
        _0x3a6d30 += _0x5394da;
      }
      if (_0x259a64 % _0x1afd94 !== _0x3a6d30 % _0x1afd94) {
        _0x1b00a2.push({
          start: _0x259a64 % _0x1afd94,
          end: _0x3a6d30 % _0x1afd94,
          loop: _0x1cb5e2,
          style: _0xc76772
        });
        _0x381ff5 = _0xc76772;
        _0x58a6b3 = _0x3a6d30 % _0x1afd94;
      }
    }
  }
  for (const _0x16bd85 of _0x59554f) {
    _0x58a6b3 = _0x522aa5 ? _0x58a6b3 : _0x16bd85.start;
    let _0x4e1d5f = _0x515166[_0x58a6b3 % _0x1afd94];
    let _0xd3456;
    for (_0x3b02b7 = _0x58a6b3 + 1; _0x3b02b7 <= _0x16bd85.end; _0x3b02b7++) {
      const _0x5a70a6 = _0x515166[_0x3b02b7 % _0x1afd94];
      _0xd3456 = Vs(_0x40282d.setContext(Jt(_0x2c52cf, {
        type: "segment",
        p0: _0x4e1d5f,
        p1: _0x5a70a6,
        p0DataIndex: (_0x3b02b7 - 1) % _0x1afd94,
        p1DataIndex: _0x3b02b7 % _0x1afd94,
        datasetIndex: _0x32165c
      })));
      if (Dh(_0xd3456, _0x381ff5)) {
        _0x4d8ae0(_0x58a6b3, _0x3b02b7 - 1, _0x16bd85.loop, _0x381ff5);
      }
      _0x4e1d5f = _0x5a70a6;
      _0x381ff5 = _0xd3456;
    }
    if (_0x58a6b3 < _0x3b02b7 - 1) {
      _0x4d8ae0(_0x58a6b3, _0x3b02b7 - 1, _0x16bd85.loop, _0x381ff5);
    }
  }
  return _0x1b00a2;
}
function Vs(_0x2fc7c5) {
  return {
    backgroundColor: _0x2fc7c5.backgroundColor,
    borderCapStyle: _0x2fc7c5.borderCapStyle,
    borderDash: _0x2fc7c5.borderDash,
    borderDashOffset: _0x2fc7c5.borderDashOffset,
    borderJoinStyle: _0x2fc7c5.borderJoinStyle,
    borderWidth: _0x2fc7c5.borderWidth,
    borderColor: _0x2fc7c5.borderColor
  };
}
function Dh(_0x1189b4, _0x500aa3) {
  if (!_0x500aa3) {
    return false;
  }
  const _0x80cad7 = [];
  const _0x1d6cff = function (_0x4eac0e, _0x3e5815) {
    if (ts(_0x3e5815)) {
      if (!_0x80cad7.includes(_0x3e5815)) {
        _0x80cad7.push(_0x3e5815);
      }
      return _0x80cad7.indexOf(_0x3e5815);
    } else {
      return _0x3e5815;
    }
  };
  return JSON.stringify(_0x1189b4, _0x1d6cff) !== JSON.stringify(_0x500aa3, _0x1d6cff);
}
class $h {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _notify(_0x2f3380, _0x326c27, _0x1a6c02, _0x52e3ed) {
    const _0xcdd44 = _0x326c27.listeners[_0x52e3ed];
    const _0x50cf70 = _0x326c27.duration;
    _0xcdd44.forEach(_0xbab5d => _0xbab5d({
      chart: _0x2f3380,
      initial: _0x326c27.initial,
      numSteps: _0x50cf70,
      currentStep: Math.min(_0x1a6c02 - _0x326c27.start, _0x50cf70)
    }));
  }
  _refresh() {
    if (!this._request) {
      this._running = true;
      this._request = gu.call(window, () => {
        this._update();
        this._request = null;
        if (this._running) {
          this._refresh();
        }
      });
    }
  }
  _update(_0x2588db = Date.now()) {
    let _0x39d788 = 0;
    this._charts.forEach((_0x15bbc8, _0x5509b7) => {
      if (!_0x15bbc8.running || !_0x15bbc8.items.length) {
        return;
      }
      const _0x57577b = _0x15bbc8.items;
      let _0x260035 = _0x57577b.length - 1;
      let _0x390cf8 = false;
      let _0x3ff511;
      for (; _0x260035 >= 0; --_0x260035) {
        _0x3ff511 = _0x57577b[_0x260035];
        if (_0x3ff511._active) {
          if (_0x3ff511._total > _0x15bbc8.duration) {
            _0x15bbc8.duration = _0x3ff511._total;
          }
          _0x3ff511.tick(_0x2588db);
          _0x390cf8 = true;
        } else {
          _0x57577b[_0x260035] = _0x57577b[_0x57577b.length - 1];
          _0x57577b.pop();
        }
      }
      if (_0x390cf8) {
        _0x5509b7.draw();
        this._notify(_0x5509b7, _0x15bbc8, _0x2588db, "progress");
      }
      if (!_0x57577b.length) {
        _0x15bbc8.running = false;
        this._notify(_0x5509b7, _0x15bbc8, _0x2588db, "complete");
        _0x15bbc8.initial = false;
      }
      _0x39d788 += _0x57577b.length;
    });
    this._lastDate = _0x2588db;
    if (_0x39d788 === 0) {
      this._running = false;
    }
  }
  _getAnims(_0x267e6d) {
    const _0x2a7dd2 = this._charts;
    let _0x2df420 = _0x2a7dd2.get(_0x267e6d);
    if (!_0x2df420) {
      _0x2df420 = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      _0x2a7dd2.set(_0x267e6d, _0x2df420);
    }
    return _0x2df420;
  }
  listen(_0x5eb13a, _0x50d434, _0x2feb3a) {
    this._getAnims(_0x5eb13a).listeners[_0x50d434].push(_0x2feb3a);
  }
  add(_0x5e2312, _0x15f26d) {
    if (!!_0x15f26d && !!_0x15f26d.length) {
      this._getAnims(_0x5e2312).items.push(..._0x15f26d);
    }
  }
  has(_0x30eb29) {
    return this._getAnims(_0x30eb29).items.length > 0;
  }
  start(_0x1a2add) {
    const _0x4e509f = this._charts.get(_0x1a2add);
    if (_0x4e509f) {
      _0x4e509f.running = true;
      _0x4e509f.start = Date.now();
      _0x4e509f.duration = _0x4e509f.items.reduce((_0x539fa1, _0x57b7ec) => Math.max(_0x539fa1, _0x57b7ec._duration), 0);
      this._refresh();
    }
  }
  running(_0x4dc527) {
    if (!this._running) {
      return false;
    }
    const _0x32e57c = this._charts.get(_0x4dc527);
    return !!_0x32e57c && !!_0x32e57c.running && !!_0x32e57c.items.length;
  }
  stop(_0x35a458) {
    const _0x1d7d9b = this._charts.get(_0x35a458);
    if (!_0x1d7d9b || !_0x1d7d9b.items.length) {
      return;
    }
    const _0x520017 = _0x1d7d9b.items;
    let _0x40ac3a = _0x520017.length - 1;
    for (; _0x40ac3a >= 0; --_0x40ac3a) {
      _0x520017[_0x40ac3a].cancel();
    }
    _0x1d7d9b.items = [];
    this._notify(_0x35a458, _0x1d7d9b, Date.now(), "complete");
  }
  remove(_0x420697) {
    return this._charts.delete(_0x420697);
  }
}
var Ot = new $h();
const qs = "transparent";
const Rh = {
  boolean(_0x615641, _0x757b9e, _0x5d8cd8) {
    if (_0x5d8cd8 > 0.5) {
      return _0x757b9e;
    } else {
      return _0x615641;
    }
  },
  color(_0x5754e9, _0x3b3708, _0x3f4526) {
    const _0x2f0964 = Ns(_0x5754e9 || qs);
    const _0x407287 = _0x2f0964.valid && Ns(_0x3b3708 || qs);
    if (_0x407287 && _0x407287.valid) {
      return _0x407287.mix(_0x2f0964, _0x3f4526).hexString();
    } else {
      return _0x3b3708;
    }
  },
  number(_0x41fc54, _0x4d3194, _0x702aa1) {
    return _0x41fc54 + (_0x4d3194 - _0x41fc54) * _0x702aa1;
  }
};
class Ch {
  constructor(_0x30ca1f, _0x49ad52, _0x3f25be, _0x2dfc81) {
    const _0x2a5065 = _0x49ad52[_0x3f25be];
    _0x2dfc81 = Je([_0x30ca1f.to, _0x2dfc81, _0x2a5065, _0x30ca1f.from]);
    const _0x52e418 = Je([_0x30ca1f.from, _0x2a5065, _0x2dfc81]);
    this._active = true;
    this._fn = _0x30ca1f.fn || Rh[_0x30ca1f.type || typeof _0x52e418];
    this._easing = De[_0x30ca1f.easing] || De.linear;
    this._start = Math.floor(Date.now() + (_0x30ca1f.delay || 0));
    this._duration = this._total = Math.floor(_0x30ca1f.duration);
    this._loop = !!_0x30ca1f.loop;
    this._target = _0x49ad52;
    this._prop = _0x3f25be;
    this._from = _0x52e418;
    this._to = _0x2dfc81;
    this._promises = undefined;
  }
  active() {
    return this._active;
  }
  update(_0x275f9f, _0x2deae4, _0x472642) {
    if (this._active) {
      this._notify(false);
      const _0x1cdc66 = this._target[this._prop];
      const _0x1f6fad = _0x472642 - this._start;
      const _0x419e6c = this._duration - _0x1f6fad;
      this._start = _0x472642;
      this._duration = Math.floor(Math.max(_0x419e6c, _0x275f9f.duration));
      this._total += _0x1f6fad;
      this._loop = !!_0x275f9f.loop;
      this._to = Je([_0x275f9f.to, _0x2deae4, _0x1cdc66, _0x275f9f.from]);
      this._from = Je([_0x275f9f.from, _0x1cdc66, _0x2deae4]);
    }
  }
  cancel() {
    if (this._active) {
      this.tick(Date.now());
      this._active = false;
      this._notify(false);
    }
  }
  tick(_0x54ec28) {
    const _0x5e6e5e = _0x54ec28 - this._start;
    const _0x1a4b75 = this._duration;
    const _0x3208bb = this._prop;
    const _0x5a8cc4 = this._from;
    const _0x3225b0 = this._loop;
    const _0x71ab3c = this._to;
    let _0x446378;
    this._active = _0x5a8cc4 !== _0x71ab3c && (_0x3225b0 || _0x5e6e5e < _0x1a4b75);
    if (!this._active) {
      this._target[_0x3208bb] = _0x71ab3c;
      this._notify(true);
      return;
    }
    if (_0x5e6e5e < 0) {
      this._target[_0x3208bb] = _0x5a8cc4;
      return;
    }
    _0x446378 = _0x5e6e5e / _0x1a4b75 % 2;
    _0x446378 = _0x3225b0 && _0x446378 > 1 ? 2 - _0x446378 : _0x446378;
    _0x446378 = this._easing(Math.min(1, Math.max(0, _0x446378)));
    this._target[_0x3208bb] = this._fn(_0x5a8cc4, _0x71ab3c, _0x446378);
  }
  wait() {
    const _0x53eea9 = this._promises ||= [];
    return new Promise((_0x425cc7, _0x2ec61e) => {
      _0x53eea9.push({
        res: _0x425cc7,
        rej: _0x2ec61e
      });
    });
  }
  _notify(_0x36916c) {
    const _0x2f9252 = _0x36916c ? "res" : "rej";
    const _0x256459 = this._promises || [];
    for (let _0x5c080b = 0; _0x5c080b < _0x256459.length; _0x5c080b++) {
      _0x256459[_0x5c080b][_0x2f9252]();
    }
  }
}
class Eh {
  constructor(_0x590260, _0x509aa6) {
    this._chart = _0x590260;
    this._properties = new Map();
    this.configure(_0x509aa6);
  }
  configure(_0x5de185) {
    if (!C(_0x5de185)) {
      return;
    }
    const _0x120fb0 = Object.keys(Y.animation);
    const _0x4fdd0a = this._properties;
    Object.getOwnPropertyNames(_0x5de185).forEach(_0x394775 => {
      const _0x565324 = _0x5de185[_0x394775];
      if (!C(_0x565324)) {
        return;
      }
      const _0x37943c = {};
      for (const _0x35cf97 of _0x120fb0) {
        _0x37943c[_0x35cf97] = _0x565324[_0x35cf97];
      }
      (H(_0x565324.properties) && _0x565324.properties || [_0x394775]).forEach(_0x43c374 => {
        if (_0x43c374 === _0x394775 || !_0x4fdd0a.has(_0x43c374)) {
          _0x4fdd0a.set(_0x43c374, _0x37943c);
        }
      });
    });
  }
  _animateOptions(_0x4c49b1, _0xd53acd) {
    const _0x308451 = _0xd53acd.options;
    const _0xad7802 = Lh(_0x4c49b1, _0x308451);
    if (!_0xad7802) {
      return [];
    }
    const _0x1b4772 = this._createAnimations(_0xad7802, _0x308451);
    if (_0x308451.$shared) {
      Ih(_0x4c49b1.options.$animations, _0x308451).then(() => {
        _0x4c49b1.options = _0x308451;
      }, () => {});
    }
    return _0x1b4772;
  }
  _createAnimations(_0x10d78a, _0x2ea0cd) {
    const _0x12c282 = this._properties;
    const _0x1ba729 = [];
    const _0x1d6dfe = _0x10d78a.$animations ||= {};
    const _0x472c58 = Object.keys(_0x2ea0cd);
    const _0x24d919 = Date.now();
    let _0x21aeb8;
    for (_0x21aeb8 = _0x472c58.length - 1; _0x21aeb8 >= 0; --_0x21aeb8) {
      const _0x2adf0f = _0x472c58[_0x21aeb8];
      if (_0x2adf0f.charAt(0) === "$") {
        continue;
      }
      if (_0x2adf0f === "options") {
        _0x1ba729.push(...this._animateOptions(_0x10d78a, _0x2ea0cd));
        continue;
      }
      const _0xbbbb11 = _0x2ea0cd[_0x2adf0f];
      let _0x316db4 = _0x1d6dfe[_0x2adf0f];
      const _0x5bbe15 = _0x12c282.get(_0x2adf0f);
      if (_0x316db4) {
        if (_0x5bbe15 && _0x316db4.active()) {
          _0x316db4.update(_0x5bbe15, _0xbbbb11, _0x24d919);
          continue;
        } else {
          _0x316db4.cancel();
        }
      }
      if (!_0x5bbe15 || !_0x5bbe15.duration) {
        _0x10d78a[_0x2adf0f] = _0xbbbb11;
        continue;
      }
      _0x1d6dfe[_0x2adf0f] = _0x316db4 = new Ch(_0x5bbe15, _0x10d78a, _0x2adf0f, _0xbbbb11);
      _0x1ba729.push(_0x316db4);
    }
    return _0x1ba729;
  }
  update(_0x29e95a, _0x1c5237) {
    if (this._properties.size === 0) {
      Object.assign(_0x29e95a, _0x1c5237);
      return;
    }
    const _0x2d057d = this._createAnimations(_0x29e95a, _0x1c5237);
    if (_0x2d057d.length) {
      Ot.add(this._chart, _0x2d057d);
      return true;
    }
  }
}
function Ih(_0xc6f7e5, _0xee7e75) {
  const _0x24ad6a = [];
  const _0xe9dcf9 = Object.keys(_0xee7e75);
  for (let _0x538359 = 0; _0x538359 < _0xe9dcf9.length; _0x538359++) {
    const _0x1db666 = _0xc6f7e5[_0xe9dcf9[_0x538359]];
    if (_0x1db666 && _0x1db666.active()) {
      _0x24ad6a.push(_0x1db666.wait());
    }
  }
  return Promise.all(_0x24ad6a);
}
function Lh(_0x33b4eb, _0x4b1cbd) {
  if (!_0x4b1cbd) {
    return;
  }
  let _0x536394 = _0x33b4eb.options;
  if (!_0x536394) {
    _0x33b4eb.options = _0x4b1cbd;
    return;
  }
  if (_0x536394.$shared) {
    _0x33b4eb.options = _0x536394 = Object.assign({}, _0x536394, {
      $shared: false,
      $animations: {}
    });
  }
  return _0x536394;
}
function Xs(_0x69a68d, _0x27a744) {
  const _0x1585b1 = _0x69a68d && _0x69a68d.options || {};
  const _0x51ac53 = _0x1585b1.reverse;
  const _0x46e332 = _0x1585b1.min === undefined ? _0x27a744 : 0;
  const _0x217370 = _0x1585b1.max === undefined ? _0x27a744 : 0;
  return {
    start: _0x51ac53 ? _0x217370 : _0x46e332,
    end: _0x51ac53 ? _0x46e332 : _0x217370
  };
}
function Ah(_0x184935, _0xad207e, _0x25558d) {
  if (_0x25558d === false) {
    return false;
  }
  const _0x2eb26e = Xs(_0x184935, _0x25558d);
  const _0x548747 = Xs(_0xad207e, _0x25558d);
  return {
    top: _0x548747.end,
    right: _0x2eb26e.end,
    bottom: _0x548747.start,
    left: _0x2eb26e.start
  };
}
function Nh(_0xd8981d) {
  let _0x1c43ed;
  let _0x14a444;
  let _0x403ca6;
  let _0x348be8;
  if (C(_0xd8981d)) {
    _0x1c43ed = _0xd8981d.top;
    _0x14a444 = _0xd8981d.right;
    _0x403ca6 = _0xd8981d.bottom;
    _0x348be8 = _0xd8981d.left;
  } else {
    _0x1c43ed = _0x14a444 = _0x403ca6 = _0x348be8 = _0xd8981d;
  }
  return {
    top: _0x1c43ed,
    right: _0x14a444,
    bottom: _0x403ca6,
    left: _0x348be8,
    disabled: _0xd8981d === false
  };
}
function Mu(_0x1cd7d9, _0x2dc485) {
  const _0x1b8e4c = [];
  const _0x1cb64e = _0x1cd7d9._getSortedDatasetMetas(_0x2dc485);
  let _0x6990d9;
  let _0xded1e1;
  _0x6990d9 = 0;
  _0xded1e1 = _0x1cb64e.length;
  for (; _0x6990d9 < _0xded1e1; ++_0x6990d9) {
    _0x1b8e4c.push(_0x1cb64e[_0x6990d9].index);
  }
  return _0x1b8e4c;
}
function Qs(_0x29eab1, _0x1634f0, _0x2f46e4, _0x20b2f1 = {}) {
  const _0x1d15c6 = _0x29eab1.keys;
  const _0x3d6c49 = _0x20b2f1.mode === "single";
  let _0x1bffdd;
  let _0x3549d0;
  let _0xfec797;
  let _0x4e1f90;
  if (_0x1634f0 !== null) {
    _0x1bffdd = 0;
    _0x3549d0 = _0x1d15c6.length;
    for (; _0x1bffdd < _0x3549d0; ++_0x1bffdd) {
      _0xfec797 = +_0x1d15c6[_0x1bffdd];
      if (_0xfec797 === _0x2f46e4) {
        if (_0x20b2f1.all) {
          continue;
        }
        break;
      }
      _0x4e1f90 = _0x29eab1.values[_0xfec797];
      if (K(_0x4e1f90) && (_0x3d6c49 || _0x1634f0 === 0 || ue(_0x1634f0) === ue(_0x4e1f90))) {
        _0x1634f0 += _0x4e1f90;
      }
    }
    return _0x1634f0;
  }
}
function Fh(_0x578dd9) {
  const _0x2bc5e3 = Object.keys(_0x578dd9);
  const _0x13416f = new Array(_0x2bc5e3.length);
  let _0x4d0bfb;
  let _0x31b9da;
  let _0x587de8;
  _0x4d0bfb = 0;
  _0x31b9da = _0x2bc5e3.length;
  for (; _0x4d0bfb < _0x31b9da; ++_0x4d0bfb) {
    _0x587de8 = _0x2bc5e3[_0x4d0bfb];
    _0x13416f[_0x4d0bfb] = {
      x: _0x587de8,
      y: _0x578dd9[_0x587de8]
    };
  }
  return _0x13416f;
}
function Gs(_0x476727, _0xc3581c) {
  const _0x3648f8 = _0x476727 && _0x476727.options.stacked;
  return _0x3648f8 || _0x3648f8 === undefined && _0xc3581c.stack !== undefined;
}
function zh(_0x33427e, _0x145f8a, _0x368685) {
  return _0x33427e.id + "." + _0x145f8a.id + "." + (_0x368685.stack || _0x368685.type);
}
function Bh(_0x3e40fc) {
  const {
    min: _0x1b3fa3,
    max: _0x264573,
    minDefined: _0x4e81e5,
    maxDefined: _0x5351ac
  } = _0x3e40fc.getUserBounds();
  return {
    min: _0x4e81e5 ? _0x1b3fa3 : Number.NEGATIVE_INFINITY,
    max: _0x5351ac ? _0x264573 : Number.POSITIVE_INFINITY
  };
}
function jh(_0x525cb3, _0x21c610, _0x4b00f5) {
  const _0x5741a4 = _0x525cb3[_0x21c610] ||= {};
  return _0x5741a4[_0x4b00f5] ||= {};
}
function Ks(_0x374ae8, _0x5c0e76, _0x143364, _0x144f47) {
  for (const _0x33db17 of _0x5c0e76.getMatchingVisibleMetas(_0x144f47).reverse()) {
    const _0xc8ab3a = _0x374ae8[_0x33db17.index];
    if (_0x143364 && _0xc8ab3a > 0 || !_0x143364 && _0xc8ab3a < 0) {
      return _0x33db17.index;
    }
  }
  return null;
}
function Zs(_0x3585ab, _0x2f6619) {
  const {
    chart: _0x3c1022,
    _cachedMeta: _0x19acb7
  } = _0x3585ab;
  const _0xa5f847 = _0x3c1022._stacks ||= {};
  const {
    iScale: _0xbc15b1,
    vScale: _0x4889f8,
    index: _0x1a2c99
  } = _0x19acb7;
  const _0x3fe77a = _0xbc15b1.axis;
  const _0x2c9ad1 = _0x4889f8.axis;
  const _0x3d1b89 = zh(_0xbc15b1, _0x4889f8, _0x19acb7);
  const _0x3e2348 = _0x2f6619.length;
  let _0x3d9b6a;
  for (let _0x9c1997 = 0; _0x9c1997 < _0x3e2348; ++_0x9c1997) {
    const _0x5866c6 = _0x2f6619[_0x9c1997];
    const {
      [_0x3fe77a]: _0xf56dc3,
      [_0x2c9ad1]: _0x28a83d
    } = _0x5866c6;
    const _0x3c4f5d = _0x5866c6._stacks ||= {};
    _0x3d9b6a = _0x3c4f5d[_0x2c9ad1] = jh(_0xa5f847, _0x3d1b89, _0xf56dc3);
    _0x3d9b6a[_0x1a2c99] = _0x28a83d;
    _0x3d9b6a._top = Ks(_0x3d9b6a, _0x4889f8, true, _0x19acb7.type);
    _0x3d9b6a._bottom = Ks(_0x3d9b6a, _0x4889f8, false, _0x19acb7.type);
    const _0x4c5a80 = _0x3d9b6a._visualValues ||= {};
    _0x4c5a80[_0x1a2c99] = _0x28a83d;
  }
}
function fi(_0x5853a5, _0x335c6f) {
  const _0x46b276 = _0x5853a5.scales;
  return Object.keys(_0x46b276).filter(_0x27e233 => _0x46b276[_0x27e233].axis === _0x335c6f).shift();
}
function Wh(_0x1942fa, _0x2778fc) {
  return Jt(_0x1942fa, {
    active: false,
    dataset: undefined,
    datasetIndex: _0x2778fc,
    index: _0x2778fc,
    mode: "default",
    type: "dataset"
  });
}
function Uh(_0x56a276, _0xbe555f, _0x13ad92) {
  return Jt(_0x56a276, {
    active: false,
    dataIndex: _0xbe555f,
    parsed: undefined,
    raw: undefined,
    element: _0x13ad92,
    index: _0xbe555f,
    mode: "default",
    type: "data"
  });
}
function ge(_0x25c07c, _0x29c3d2) {
  const _0x87689b = _0x25c07c.controller.index;
  const _0x1b8d67 = _0x25c07c.vScale && _0x25c07c.vScale.axis;
  if (_0x1b8d67) {
    _0x29c3d2 = _0x29c3d2 || _0x25c07c._parsed;
    for (const _0xea5d1b of _0x29c3d2) {
      const _0x25f194 = _0xea5d1b._stacks;
      if (!_0x25f194 || _0x25f194[_0x1b8d67] === undefined || _0x25f194[_0x1b8d67][_0x87689b] === undefined) {
        return;
      }
      delete _0x25f194[_0x1b8d67][_0x87689b];
      if (_0x25f194[_0x1b8d67]._visualValues !== undefined && _0x25f194[_0x1b8d67]._visualValues[_0x87689b] !== undefined) {
        delete _0x25f194[_0x1b8d67]._visualValues[_0x87689b];
      }
    }
  }
}
const hi = _0x43ea0d => _0x43ea0d === "reset" || _0x43ea0d === "none";
const Js = (_0xf0d427, _0xf99e43) => _0xf99e43 ? _0xf0d427 : Object.assign({}, _0xf0d427);
const Hh = (_0x2c7d2e, _0x8b5ea2, _0x2fc20) => _0x2c7d2e && !_0x8b5ea2.hidden && _0x8b5ea2._stacked && {
  keys: Mu(_0x2fc20, true),
  values: null
};
class ku {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(_0x346b6d, _0x158da9) {
    this.chart = _0x346b6d;
    this._ctx = _0x346b6d.ctx;
    this.index = _0x158da9;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.supportsDecimation = false;
    this.$context = undefined;
    this._syncList = [];
    this.datasetElementType = new.target.datasetElementType;
    this.dataElementType = new.target.dataElementType;
    this.initialize();
  }
  initialize() {
    const _0x3b16ab = this._cachedMeta;
    this.configure();
    this.linkScales();
    _0x3b16ab._stacked = Gs(_0x3b16ab.vScale, _0x3b16ab);
    this.addElements();
    if (this.options.fill && !this.chart.isPluginEnabled("filler")) {
      console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
  }
  updateIndex(_0x55843b) {
    if (this.index !== _0x55843b) {
      ge(this._cachedMeta);
    }
    this.index = _0x55843b;
  }
  linkScales() {
    const _0x36e3c9 = this.chart;
    const _0x4e874f = this._cachedMeta;
    const _0xdb147d = this.getDataset();
    const _0x2732d8 = (_0x419cae, _0x76d726, _0x43f10e, _0x445a59) => _0x419cae === "x" ? _0x76d726 : _0x419cae === "r" ? _0x445a59 : _0x43f10e;
    const _0x1723b7 = _0x4e874f.xAxisID = I(_0xdb147d.xAxisID, fi(_0x36e3c9, "x"));
    const _0x4fcb90 = _0x4e874f.yAxisID = I(_0xdb147d.yAxisID, fi(_0x36e3c9, "y"));
    const _0x52addb = _0x4e874f.rAxisID = I(_0xdb147d.rAxisID, fi(_0x36e3c9, "r"));
    const _0x5e9eb3 = _0x4e874f.indexAxis;
    const _0xc14947 = _0x4e874f.iAxisID = _0x2732d8(_0x5e9eb3, _0x1723b7, _0x4fcb90, _0x52addb);
    const _0x37709f = _0x4e874f.vAxisID = _0x2732d8(_0x5e9eb3, _0x4fcb90, _0x1723b7, _0x52addb);
    _0x4e874f.xScale = this.getScaleForId(_0x1723b7);
    _0x4e874f.yScale = this.getScaleForId(_0x4fcb90);
    _0x4e874f.rScale = this.getScaleForId(_0x52addb);
    _0x4e874f.iScale = this.getScaleForId(_0xc14947);
    _0x4e874f.vScale = this.getScaleForId(_0x37709f);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(_0x4addbb) {
    return this.chart.scales[_0x4addbb];
  }
  _getOtherScale(_0x1fbb36) {
    const _0x5000eb = this._cachedMeta;
    if (_0x1fbb36 === _0x5000eb.iScale) {
      return _0x5000eb.vScale;
    } else {
      return _0x5000eb.iScale;
    }
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const _0x228498 = this._cachedMeta;
    if (this._data) {
      Es(this._data, this);
    }
    if (_0x228498._stacked) {
      ge(_0x228498);
    }
  }
  _dataCheck() {
    const _0x2c0089 = this.getDataset();
    const _0x4f9d31 = _0x2c0089.data ||= [];
    const _0x289fab = this._data;
    if (C(_0x4f9d31)) {
      this._data = Fh(_0x4f9d31);
    } else if (_0x289fab !== _0x4f9d31) {
      if (_0x289fab) {
        Es(_0x289fab, this);
        const _0x55b7cb = this._cachedMeta;
        ge(_0x55b7cb);
        _0x55b7cb._parsed = [];
      }
      if (_0x4f9d31 && Object.isExtensible(_0x4f9d31)) {
        vf(_0x4f9d31, this);
      }
      this._syncList = [];
      this._data = _0x4f9d31;
    }
  }
  addElements() {
    const _0x261d7c = this._cachedMeta;
    this._dataCheck();
    if (this.datasetElementType) {
      _0x261d7c.dataset = new this.datasetElementType();
    }
  }
  buildOrUpdateElements(_0x5532b8) {
    const _0x3fa198 = this._cachedMeta;
    const _0x3a7ff0 = this.getDataset();
    let _0x549206 = false;
    this._dataCheck();
    const _0x136c2d = _0x3fa198._stacked;
    _0x3fa198._stacked = Gs(_0x3fa198.vScale, _0x3fa198);
    if (_0x3fa198.stack !== _0x3a7ff0.stack) {
      _0x549206 = true;
      ge(_0x3fa198);
      _0x3fa198.stack = _0x3a7ff0.stack;
    }
    this._resyncElements(_0x5532b8);
    if (_0x549206 || _0x136c2d !== _0x3fa198._stacked) {
      Zs(this, _0x3fa198._parsed);
    }
  }
  configure() {
    const _0x602fd0 = this.chart.config;
    const _0x29ec21 = _0x602fd0.datasetScopeKeys(this._type);
    const _0x46bcf2 = _0x602fd0.getOptionScopes(this.getDataset(), _0x29ec21, true);
    this.options = _0x602fd0.createResolver(_0x46bcf2, this.getContext());
    this._parsing = this.options.parsing;
    this._cachedDataOpts = {};
  }
  parse(_0x4a7130, _0x2d1752) {
    const {
      _cachedMeta: _0x4a5a71,
      _data: _0x1e0ea6
    } = this;
    const {
      iScale: _0x548d36,
      _stacked: _0x3abadf
    } = _0x4a5a71;
    const _0x4646f2 = _0x548d36.axis;
    let _0x2f44b7 = _0x4a7130 === 0 && _0x2d1752 === _0x1e0ea6.length ? true : _0x4a5a71._sorted;
    let _0xb02c53 = _0x4a7130 > 0 && _0x4a5a71._parsed[_0x4a7130 - 1];
    let _0x1f37f7;
    let _0x455300;
    let _0x37b3b1;
    if (this._parsing === false) {
      _0x4a5a71._parsed = _0x1e0ea6;
      _0x4a5a71._sorted = true;
      _0x37b3b1 = _0x1e0ea6;
    } else {
      if (H(_0x1e0ea6[_0x4a7130])) {
        _0x37b3b1 = this.parseArrayData(_0x4a5a71, _0x1e0ea6, _0x4a7130, _0x2d1752);
      } else if (C(_0x1e0ea6[_0x4a7130])) {
        _0x37b3b1 = this.parseObjectData(_0x4a5a71, _0x1e0ea6, _0x4a7130, _0x2d1752);
      } else {
        _0x37b3b1 = this.parsePrimitiveData(_0x4a5a71, _0x1e0ea6, _0x4a7130, _0x2d1752);
      }
      const _0x8a713a = () => _0x455300[_0x4646f2] === null || _0xb02c53 && _0x455300[_0x4646f2] < _0xb02c53[_0x4646f2];
      for (_0x1f37f7 = 0; _0x1f37f7 < _0x2d1752; ++_0x1f37f7) {
        _0x4a5a71._parsed[_0x1f37f7 + _0x4a7130] = _0x455300 = _0x37b3b1[_0x1f37f7];
        if (_0x2f44b7) {
          if (_0x8a713a()) {
            _0x2f44b7 = false;
          }
          _0xb02c53 = _0x455300;
        }
      }
      _0x4a5a71._sorted = _0x2f44b7;
    }
    if (_0x3abadf) {
      Zs(this, _0x37b3b1);
    }
  }
  parsePrimitiveData(_0x5eca27, _0x2eb1c2, _0x4f8242, _0x3d946b) {
    const {
      iScale: _0x43c2f1,
      vScale: _0x4317e1
    } = _0x5eca27;
    const _0x1e3f59 = _0x43c2f1.axis;
    const _0x454de3 = _0x4317e1.axis;
    const _0xee17c = _0x43c2f1.getLabels();
    const _0x5e5c59 = _0x43c2f1 === _0x4317e1;
    const _0x5bf975 = new Array(_0x3d946b);
    let _0xc8bdc;
    let _0x45bfae;
    let _0x277901;
    _0xc8bdc = 0;
    _0x45bfae = _0x3d946b;
    for (; _0xc8bdc < _0x45bfae; ++_0xc8bdc) {
      _0x277901 = _0xc8bdc + _0x4f8242;
      _0x5bf975[_0xc8bdc] = {
        [_0x1e3f59]: _0x5e5c59 || _0x43c2f1.parse(_0xee17c[_0x277901], _0x277901),
        [_0x454de3]: _0x4317e1.parse(_0x2eb1c2[_0x277901], _0x277901)
      };
    }
    return _0x5bf975;
  }
  parseArrayData(_0x25521e, _0x5f1f09, _0x2da6ae, _0x1800d7) {
    const {
      xScale: _0x52d06a,
      yScale: _0xb1afee
    } = _0x25521e;
    const _0x1f1208 = new Array(_0x1800d7);
    let _0x103273;
    let _0x4a001d;
    let _0x48aef3;
    let _0x2c7bf9;
    _0x103273 = 0;
    _0x4a001d = _0x1800d7;
    for (; _0x103273 < _0x4a001d; ++_0x103273) {
      _0x48aef3 = _0x103273 + _0x2da6ae;
      _0x2c7bf9 = _0x5f1f09[_0x48aef3];
      _0x1f1208[_0x103273] = {
        x: _0x52d06a.parse(_0x2c7bf9[0], _0x48aef3),
        y: _0xb1afee.parse(_0x2c7bf9[1], _0x48aef3)
      };
    }
    return _0x1f1208;
  }
  parseObjectData(_0x4c80d4, _0x2089b3, _0x12a02b, _0x515235) {
    const {
      xScale: _0x258139,
      yScale: _0x4bf305
    } = _0x4c80d4;
    const {
      xAxisKey: _0x321b4b = "x",
      yAxisKey: _0x4f897f = "y"
    } = this._parsing;
    const _0x2dff67 = new Array(_0x515235);
    let _0x5198bd;
    let _0x43b715;
    let _0x38120c;
    let _0x3760dc;
    _0x5198bd = 0;
    _0x43b715 = _0x515235;
    for (; _0x5198bd < _0x43b715; ++_0x5198bd) {
      _0x38120c = _0x5198bd + _0x12a02b;
      _0x3760dc = _0x2089b3[_0x38120c];
      _0x2dff67[_0x5198bd] = {
        x: _0x258139.parse(sr(_0x3760dc, _0x321b4b), _0x38120c),
        y: _0x4bf305.parse(sr(_0x3760dc, _0x4f897f), _0x38120c)
      };
    }
    return _0x2dff67;
  }
  getParsed(_0x3ecfda) {
    return this._cachedMeta._parsed[_0x3ecfda];
  }
  getDataElement(_0x5c788e) {
    return this._cachedMeta.data[_0x5c788e];
  }
  applyStack(_0xae77f8, _0x3f77e5, _0x35c214) {
    const _0x1fc496 = this.chart;
    const _0x396b35 = this._cachedMeta;
    const _0x511e56 = _0x3f77e5[_0xae77f8.axis];
    const _0x3138e = {
      keys: Mu(_0x1fc496, true),
      values: _0x3f77e5._stacks[_0xae77f8.axis]._visualValues
    };
    return Qs(_0x3138e, _0x511e56, _0x396b35.index, {
      mode: _0x35c214
    });
  }
  updateRangeFromParsed(_0x3516e6, _0x39f067, _0x59c52d, _0x15650e) {
    const _0x2bb042 = _0x59c52d[_0x39f067.axis];
    let _0x28b5f0 = _0x2bb042 === null ? NaN : _0x2bb042;
    const _0x116366 = _0x15650e && _0x59c52d._stacks[_0x39f067.axis];
    if (_0x15650e && _0x116366) {
      _0x15650e.values = _0x116366;
      _0x28b5f0 = Qs(_0x15650e, _0x2bb042, this._cachedMeta.index);
    }
    _0x3516e6.min = Math.min(_0x3516e6.min, _0x28b5f0);
    _0x3516e6.max = Math.max(_0x3516e6.max, _0x28b5f0);
  }
  getMinMax(_0xa3af0d, _0x1ea71b) {
    const _0x56587e = this._cachedMeta;
    const _0x565af2 = _0x56587e._parsed;
    const _0x5f3d84 = _0x56587e._sorted && _0xa3af0d === _0x56587e.iScale;
    const _0x2b3f97 = _0x565af2.length;
    const _0x23f4bf = this._getOtherScale(_0xa3af0d);
    const _0x4482fd = Hh(_0x1ea71b, _0x56587e, this.chart);
    const _0x5bb654 = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    const {
      min: _0x1461c9,
      max: _0x12b833
    } = Bh(_0x23f4bf);
    let _0x184cc9;
    let _0x475f42;
    function _0x760f91() {
      _0x475f42 = _0x565af2[_0x184cc9];
      const _0x2c94bb = _0x475f42[_0x23f4bf.axis];
      return !K(_0x475f42[_0xa3af0d.axis]) || _0x1461c9 > _0x2c94bb || _0x12b833 < _0x2c94bb;
    }
    for (_0x184cc9 = 0; _0x184cc9 < _0x2b3f97 && (!!_0x760f91() || !(this.updateRangeFromParsed(_0x5bb654, _0xa3af0d, _0x475f42, _0x4482fd), _0x5f3d84)); ++_0x184cc9);
    if (_0x5f3d84) {
      for (_0x184cc9 = _0x2b3f97 - 1; _0x184cc9 >= 0; --_0x184cc9) {
        if (!_0x760f91()) {
          this.updateRangeFromParsed(_0x5bb654, _0xa3af0d, _0x475f42, _0x4482fd);
          break;
        }
      }
    }
    return _0x5bb654;
  }
  getAllParsedValues(_0x199ea7) {
    const _0x2ea901 = this._cachedMeta._parsed;
    const _0x57f840 = [];
    let _0x341ae5;
    let _0x16c3d2;
    let _0x3eb34f;
    _0x341ae5 = 0;
    _0x16c3d2 = _0x2ea901.length;
    for (; _0x341ae5 < _0x16c3d2; ++_0x341ae5) {
      _0x3eb34f = _0x2ea901[_0x341ae5][_0x199ea7.axis];
      if (K(_0x3eb34f)) {
        _0x57f840.push(_0x3eb34f);
      }
    }
    return _0x57f840;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(_0x20f614) {
    const _0x3ab2a5 = this._cachedMeta;
    const _0x52d46f = _0x3ab2a5.iScale;
    const _0x2f9d9c = _0x3ab2a5.vScale;
    const _0x1b3e35 = this.getParsed(_0x20f614);
    return {
      label: _0x52d46f ? "" + _0x52d46f.getLabelForValue(_0x1b3e35[_0x52d46f.axis]) : "",
      value: _0x2f9d9c ? "" + _0x2f9d9c.getLabelForValue(_0x1b3e35[_0x2f9d9c.axis]) : ""
    };
  }
  _update(_0x42ee1f) {
    const _0x1288c7 = this._cachedMeta;
    this.update(_0x42ee1f || "default");
    _0x1288c7._clip = Nh(I(this.options.clip, Ah(_0x1288c7.xScale, _0x1288c7.yScale, this.getMaxOverflow())));
  }
  update(_0x464485) {}
  draw() {
    const _0x54c003 = this._ctx;
    const _0x59cf9b = this.chart;
    const _0x12cab5 = this._cachedMeta;
    const _0x4ef668 = _0x12cab5.data || [];
    const _0x358303 = _0x59cf9b.chartArea;
    const _0x4e5049 = [];
    const _0x5db0f0 = this._drawStart || 0;
    const _0x4f60a8 = this._drawCount || _0x4ef668.length - _0x5db0f0;
    const _0x248a01 = this.options.drawActiveElementsOnTop;
    let _0x594028;
    if (_0x12cab5.dataset) {
      _0x12cab5.dataset.draw(_0x54c003, _0x358303, _0x5db0f0, _0x4f60a8);
    }
    _0x594028 = _0x5db0f0;
    for (; _0x594028 < _0x5db0f0 + _0x4f60a8; ++_0x594028) {
      const _0x5d9149 = _0x4ef668[_0x594028];
      if (!_0x5d9149.hidden) {
        if (_0x5d9149.active && _0x248a01) {
          _0x4e5049.push(_0x5d9149);
        } else {
          _0x5d9149.draw(_0x54c003, _0x358303);
        }
      }
    }
    for (_0x594028 = 0; _0x594028 < _0x4e5049.length; ++_0x594028) {
      _0x4e5049[_0x594028].draw(_0x54c003, _0x358303);
    }
  }
  getStyle(_0x2945cc, _0x12a0b8) {
    const _0x5ce844 = _0x12a0b8 ? "active" : "default";
    if (_0x2945cc === undefined && this._cachedMeta.dataset) {
      return this.resolveDatasetElementOptions(_0x5ce844);
    } else {
      return this.resolveDataElementOptions(_0x2945cc || 0, _0x5ce844);
    }
  }
  getContext(_0x2b7ba7, _0x25e268, _0x20beac) {
    const _0x16c400 = this.getDataset();
    let _0xe851e7;
    if (_0x2b7ba7 >= 0 && _0x2b7ba7 < this._cachedMeta.data.length) {
      const _0x4a102 = this._cachedMeta.data[_0x2b7ba7];
      _0xe851e7 = _0x4a102.$context ||= Uh(this.getContext(), _0x2b7ba7, _0x4a102);
      _0xe851e7.parsed = this.getParsed(_0x2b7ba7);
      _0xe851e7.raw = _0x16c400.data[_0x2b7ba7];
      _0xe851e7.index = _0xe851e7.dataIndex = _0x2b7ba7;
    } else {
      _0xe851e7 = this.$context ||= Wh(this.chart.getContext(), this.index);
      _0xe851e7.dataset = _0x16c400;
      _0xe851e7.index = _0xe851e7.datasetIndex = this.index;
    }
    _0xe851e7.active = !!_0x25e268;
    _0xe851e7.mode = _0x20beac;
    return _0xe851e7;
  }
  resolveDatasetElementOptions(_0x8bc0eb) {
    return this._resolveElementOptions(this.datasetElementType.id, _0x8bc0eb);
  }
  resolveDataElementOptions(_0xec81b0, _0x48bf87) {
    return this._resolveElementOptions(this.dataElementType.id, _0x48bf87, _0xec81b0);
  }
  _resolveElementOptions(_0x213fed, _0x241767 = "default", _0x2cb317) {
    const _0x2d0f20 = _0x241767 === "active";
    const _0x9a319f = this._cachedDataOpts;
    const _0x4b5ad = _0x213fed + "-" + _0x241767;
    const _0x451163 = _0x9a319f[_0x4b5ad];
    const _0x215ada = this.enableOptionSharing && ar(_0x2cb317);
    if (_0x451163) {
      return Js(_0x451163, _0x215ada);
    }
    const _0x44ff66 = this.chart.config;
    const _0x2f3839 = _0x44ff66.datasetElementScopeKeys(this._type, _0x213fed);
    const _0x27298c = _0x2d0f20 ? [_0x213fed + "Hover", "hover", _0x213fed, ""] : [_0x213fed, ""];
    const _0xefb53a = _0x44ff66.getOptionScopes(this.getDataset(), _0x2f3839);
    const _0x5ad8fb = Object.keys(Y.elements[_0x213fed]);
    const _0x4e9be5 = () => this.getContext(_0x2cb317, _0x2d0f20, _0x241767);
    const _0x218f2a = _0x44ff66.resolveNamedOptions(_0xefb53a, _0x5ad8fb, _0x4e9be5, _0x27298c);
    if (_0x218f2a.$shared) {
      _0x218f2a.$shared = _0x215ada;
      _0x9a319f[_0x4b5ad] = Object.freeze(Js(_0x218f2a, _0x215ada));
    }
    return _0x218f2a;
  }
  _resolveAnimations(_0x5df1e1, _0x3882be, _0x3a8b62) {
    const _0x121879 = this.chart;
    const _0x4fb23d = this._cachedDataOpts;
    const _0x1e102c = "animation-" + _0x3882be;
    const _0x50841e = _0x4fb23d[_0x1e102c];
    if (_0x50841e) {
      return _0x50841e;
    }
    let _0x3e43fb;
    if (_0x121879.options.animation !== false) {
      const _0x33df10 = this.chart.config;
      const _0x5be811 = _0x33df10.datasetAnimationScopeKeys(this._type, _0x3882be);
      const _0x4e710f = _0x33df10.getOptionScopes(this.getDataset(), _0x5be811);
      _0x3e43fb = _0x33df10.createResolver(_0x4e710f, this.getContext(_0x5df1e1, _0x3a8b62, _0x3882be));
    }
    const _0x1d0a70 = new Eh(_0x121879, _0x3e43fb && _0x3e43fb.animations);
    if (_0x3e43fb && _0x3e43fb._cacheable) {
      _0x4fb23d[_0x1e102c] = Object.freeze(_0x1d0a70);
    }
    return _0x1d0a70;
  }
  getSharedOptions(_0x1f3248) {
    if (_0x1f3248.$shared) {
      return this._sharedOptions ||= Object.assign({}, _0x1f3248);
    }
  }
  includeOptions(_0x439fd5, _0x51337b) {
    return !_0x51337b || hi(_0x439fd5) || this.chart._animationsDisabled;
  }
  _getSharedOptions(_0x13cd55, _0xe2ac4) {
    const _0x470c40 = this.resolveDataElementOptions(_0x13cd55, _0xe2ac4);
    const _0x31d239 = this._sharedOptions;
    const _0x510057 = this.getSharedOptions(_0x470c40);
    const _0x5c91f2 = this.includeOptions(_0xe2ac4, _0x510057) || _0x510057 !== _0x31d239;
    this.updateSharedOptions(_0x510057, _0xe2ac4, _0x470c40);
    return {
      sharedOptions: _0x510057,
      includeOptions: _0x5c91f2
    };
  }
  updateElement(_0x2af1a4, _0x3f5d0d, _0x2179ce, _0x25ba5a) {
    if (hi(_0x25ba5a)) {
      Object.assign(_0x2af1a4, _0x2179ce);
    } else {
      this._resolveAnimations(_0x3f5d0d, _0x25ba5a).update(_0x2af1a4, _0x2179ce);
    }
  }
  updateSharedOptions(_0x4d1231, _0x4cc103, _0x1d7e3b) {
    if (_0x4d1231 && !hi(_0x4cc103)) {
      this._resolveAnimations(undefined, _0x4cc103).update(_0x4d1231, _0x1d7e3b);
    }
  }
  _setStyle(_0x527667, _0x317e86, _0x3b3bb7, _0x354275) {
    _0x527667.active = _0x354275;
    const _0x52e795 = this.getStyle(_0x317e86, _0x354275);
    this._resolveAnimations(_0x317e86, _0x3b3bb7, _0x354275).update(_0x527667, {
      options: !_0x354275 && this.getSharedOptions(_0x52e795) || _0x52e795
    });
  }
  removeHoverStyle(_0x48e86b, _0x4f883a, _0x1fbc30) {
    this._setStyle(_0x48e86b, _0x1fbc30, "active", false);
  }
  setHoverStyle(_0x53f831, _0x1a0ef1, _0xf595c5) {
    this._setStyle(_0x53f831, _0xf595c5, "active", true);
  }
  _removeDatasetHoverStyle() {
    const _0x347003 = this._cachedMeta.dataset;
    if (_0x347003) {
      this._setStyle(_0x347003, undefined, "active", false);
    }
  }
  _setDatasetHoverStyle() {
    const _0x3da066 = this._cachedMeta.dataset;
    if (_0x3da066) {
      this._setStyle(_0x3da066, undefined, "active", true);
    }
  }
  _resyncElements(_0x4ebedf) {
    const _0x4f3642 = this._data;
    const _0x570257 = this._cachedMeta.data;
    for (const [_0x531982, _0x22e92a, _0x4aa732] of this._syncList) {
      this[_0x531982](_0x22e92a, _0x4aa732);
    }
    this._syncList = [];
    const _0x3aab9c = _0x570257.length;
    const _0xe0d17c = _0x4f3642.length;
    const _0x5bbdb9 = Math.min(_0xe0d17c, _0x3aab9c);
    if (_0x5bbdb9) {
      this.parse(0, _0x5bbdb9);
    }
    if (_0xe0d17c > _0x3aab9c) {
      this._insertElements(_0x3aab9c, _0xe0d17c - _0x3aab9c, _0x4ebedf);
    } else if (_0xe0d17c < _0x3aab9c) {
      this._removeElements(_0xe0d17c, _0x3aab9c - _0xe0d17c);
    }
  }
  _insertElements(_0x213b88, _0x243e9d, _0x53f5af = true) {
    const _0x1a3c06 = this._cachedMeta;
    const _0x45b27d = _0x1a3c06.data;
    const _0x52b58f = _0x213b88 + _0x243e9d;
    let _0x46f4f3;
    const _0x4aac6c = _0x2646f3 => {
      _0x2646f3.length += _0x243e9d;
      _0x46f4f3 = _0x2646f3.length - 1;
      for (; _0x46f4f3 >= _0x52b58f; _0x46f4f3--) {
        _0x2646f3[_0x46f4f3] = _0x2646f3[_0x46f4f3 - _0x243e9d];
      }
    };
    _0x4aac6c(_0x45b27d);
    _0x46f4f3 = _0x213b88;
    for (; _0x46f4f3 < _0x52b58f; ++_0x46f4f3) {
      _0x45b27d[_0x46f4f3] = new this.dataElementType();
    }
    if (this._parsing) {
      _0x4aac6c(_0x1a3c06._parsed);
    }
    this.parse(_0x213b88, _0x243e9d);
    if (_0x53f5af) {
      this.updateElements(_0x45b27d, _0x213b88, _0x243e9d, "reset");
    }
  }
  updateElements(_0x12262c, _0x1283ad, _0x18602a, _0x4aa29f) {}
  _removeElements(_0x1c8e25, _0x244840) {
    const _0x1d7c02 = this._cachedMeta;
    if (this._parsing) {
      const _0x2ef7e8 = _0x1d7c02._parsed.splice(_0x1c8e25, _0x244840);
      if (_0x1d7c02._stacked) {
        ge(_0x1d7c02, _0x2ef7e8);
      }
    }
    _0x1d7c02.data.splice(_0x1c8e25, _0x244840);
  }
  _sync(_0x223ff6) {
    if (this._parsing) {
      this._syncList.push(_0x223ff6);
    } else {
      const [_0x1afa77, _0x518ccd, _0x32f7df] = _0x223ff6;
      this[_0x1afa77](_0x518ccd, _0x32f7df);
    }
    this.chart._dataChanges.push([this.index, ..._0x223ff6]);
  }
  _onDataPush() {
    const _0x2f1074 = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - _0x2f1074, _0x2f1074]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(_0x3abf2e, _0x134e45) {
    if (_0x134e45) {
      this._sync(["_removeElements", _0x3abf2e, _0x134e45]);
    }
    const _0x2904dc = arguments.length - 2;
    if (_0x2904dc) {
      this._sync(["_insertElements", _0x3abf2e, _0x2904dc]);
    }
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
class Yh extends ku {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: true,
    spanGaps: false
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category"
      },
      _value_: {
        type: "linear"
      }
    }
  };
  initialize() {
    this.enableOptionSharing = true;
    this.supportsDecimation = true;
    super.initialize();
  }
  update(_0x47c0d9) {
    const _0x1411be = this._cachedMeta;
    const {
      dataset: _0x216b4e,
      data: _0x4bc945 = [],
      _dataset: _0x547dfe
    } = _0x1411be;
    const _0x25c99b = this.chart._animationsDisabled;
    let {
      start: _0x574fd6,
      count: _0x2d21ce
    } = Pf(_0x1411be, _0x4bc945, _0x25c99b);
    this._drawStart = _0x574fd6;
    this._drawCount = _0x2d21ce;
    if (Sf(_0x1411be)) {
      _0x574fd6 = 0;
      _0x2d21ce = _0x4bc945.length;
    }
    _0x216b4e._chart = this.chart;
    _0x216b4e._datasetIndex = this.index;
    _0x216b4e._decimated = !!_0x547dfe._decimated;
    _0x216b4e.points = _0x4bc945;
    const _0x1764b2 = this.resolveDatasetElementOptions(_0x47c0d9);
    if (!this.options.showLine) {
      _0x1764b2.borderWidth = 0;
    }
    _0x1764b2.segment = this.options.segment;
    this.updateElement(_0x216b4e, undefined, {
      animated: !_0x25c99b,
      options: _0x1764b2
    }, _0x47c0d9);
    this.updateElements(_0x4bc945, _0x574fd6, _0x2d21ce, _0x47c0d9);
  }
  updateElements(_0x2504ba, _0x3f051d, _0x1cdbbe, _0x220a68) {
    const _0x51c90a = _0x220a68 === "reset";
    const {
      iScale: _0x2539dd,
      vScale: _0x2fe44f,
      _stacked: _0x4d1609,
      _dataset: _0x24d67d
    } = this._cachedMeta;
    const {
      sharedOptions: _0x59c3eb,
      includeOptions: _0x2f468f
    } = this._getSharedOptions(_0x3f051d, _0x220a68);
    const _0x3cf964 = _0x2539dd.axis;
    const _0x3ce692 = _0x2fe44f.axis;
    const {
      spanGaps: _0x3021b7,
      segment: _0x557b17
    } = this.options;
    const _0xb8727f = Le(_0x3021b7) ? _0x3021b7 : Number.POSITIVE_INFINITY;
    const _0x39b72c = this.chart._animationsDisabled || _0x51c90a || _0x220a68 === "none";
    const _0x542d1e = _0x3f051d + _0x1cdbbe;
    const _0x3e34cf = _0x2504ba.length;
    let _0x44308d = _0x3f051d > 0 && this.getParsed(_0x3f051d - 1);
    for (let _0x4d029c = 0; _0x4d029c < _0x3e34cf; ++_0x4d029c) {
      const _0x1c2cef = _0x2504ba[_0x4d029c];
      const _0x146f44 = _0x39b72c ? _0x1c2cef : {};
      if (_0x4d029c < _0x3f051d || _0x4d029c >= _0x542d1e) {
        _0x146f44.skip = true;
        continue;
      }
      const _0x484a29 = this.getParsed(_0x4d029c);
      const _0x27d67f = z(_0x484a29[_0x3ce692]);
      const _0x272b12 = _0x146f44[_0x3cf964] = _0x2539dd.getPixelForValue(_0x484a29[_0x3cf964], _0x4d029c);
      const _0x292efd = _0x146f44[_0x3ce692] = _0x51c90a || _0x27d67f ? _0x2fe44f.getBasePixel() : _0x2fe44f.getPixelForValue(_0x4d1609 ? this.applyStack(_0x2fe44f, _0x484a29, _0x4d1609) : _0x484a29[_0x3ce692], _0x4d029c);
      _0x146f44.skip = isNaN(_0x272b12) || isNaN(_0x292efd) || _0x27d67f;
      _0x146f44.stop = _0x4d029c > 0 && Math.abs(_0x484a29[_0x3cf964] - _0x44308d[_0x3cf964]) > _0xb8727f;
      if (_0x557b17) {
        _0x146f44.parsed = _0x484a29;
        _0x146f44.raw = _0x24d67d.data[_0x4d029c];
      }
      if (_0x2f468f) {
        _0x146f44.options = _0x59c3eb || this.resolveDataElementOptions(_0x4d029c, _0x1c2cef.active ? "active" : _0x220a68);
      }
      if (!_0x39b72c) {
        this.updateElement(_0x1c2cef, _0x4d029c, _0x146f44, _0x220a68);
      }
      _0x44308d = _0x484a29;
    }
  }
  getMaxOverflow() {
    const _0x31c467 = this._cachedMeta;
    const _0x480169 = _0x31c467.dataset;
    const _0x457c9b = _0x480169.options && _0x480169.options.borderWidth || 0;
    const _0x395ff3 = _0x31c467.data || [];
    if (!_0x395ff3.length) {
      return _0x457c9b;
    }
    const _0x19732d = _0x395ff3[0].size(this.resolveDataElementOptions(0));
    const _0x52a92e = _0x395ff3[_0x395ff3.length - 1].size(this.resolveDataElementOptions(_0x395ff3.length - 1));
    return Math.max(_0x457c9b, _0x19732d, _0x52a92e) / 2;
  }
  draw() {
    const _0x19bf12 = this._cachedMeta;
    _0x19bf12.dataset.updateControlPoints(this.chart.chartArea, _0x19bf12.iScale.axis);
    super.draw();
  }
}
function Ht() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class as {
  static override(_0x5d0ca9) {
    Object.assign(as.prototype, _0x5d0ca9);
  }
  options;
  constructor(_0x43bbb5) {
    this.options = _0x43bbb5 || {};
  }
  init() {}
  formats() {
    return Ht();
  }
  parse() {
    return Ht();
  }
  format() {
    return Ht();
  }
  add() {
    return Ht();
  }
  diff() {
    return Ht();
  }
  startOf() {
    return Ht();
  }
  endOf() {
    return Ht();
  }
}
var Du = {
  _date: as
};
function Vh(_0x465897, _0x318021, _0x5cf8c6, _0x3e6f95) {
  const {
    controller: _0x3b6303,
    data: _0x2c5393,
    _sorted: _0x55667c
  } = _0x465897;
  const _0x40c191 = _0x3b6303._cachedMeta.iScale;
  if (_0x40c191 && _0x318021 === _0x40c191.axis && _0x318021 !== "r" && _0x55667c && _0x2c5393.length) {
    const _0x4b9870 = _0x40c191._reversePixels ? bf : Qt;
    if (_0x3e6f95) {
      if (_0x3b6303._sharedOptions) {
        const _0x543ec3 = _0x2c5393[0];
        const _0x54cc28 = typeof _0x543ec3.getRange == "function" && _0x543ec3.getRange(_0x318021);
        if (_0x54cc28) {
          const _0x43ee51 = _0x4b9870(_0x2c5393, _0x318021, _0x5cf8c6 - _0x54cc28);
          const _0x5dad27 = _0x4b9870(_0x2c5393, _0x318021, _0x5cf8c6 + _0x54cc28);
          return {
            lo: _0x43ee51.lo,
            hi: _0x5dad27.hi
          };
        }
      }
    } else {
      return _0x4b9870(_0x2c5393, _0x318021, _0x5cf8c6);
    }
  }
  return {
    lo: 0,
    hi: _0x2c5393.length - 1
  };
}
function We(_0x18767b, _0x3982ce, _0x325286, _0x4af2b3, _0x4128a0) {
  const _0x2f1a68 = _0x18767b.getSortedVisibleDatasetMetas();
  const _0x42cd43 = _0x325286[_0x3982ce];
  for (let _0xd8342 = 0, _0x5afed0 = _0x2f1a68.length; _0xd8342 < _0x5afed0; ++_0xd8342) {
    const {
      index: _0x33c4eb,
      data: _0x341309
    } = _0x2f1a68[_0xd8342];
    const {
      lo: _0xe73cde,
      hi: _0x37ca05
    } = Vh(_0x2f1a68[_0xd8342], _0x3982ce, _0x42cd43, _0x4128a0);
    for (let _0x3dcad2 = _0xe73cde; _0x3dcad2 <= _0x37ca05; ++_0x3dcad2) {
      const _0x2dd872 = _0x341309[_0x3dcad2];
      if (!_0x2dd872.skip) {
        _0x4af2b3(_0x2dd872, _0x33c4eb, _0x3dcad2);
      }
    }
  }
}
function qh(_0x4bfece) {
  const _0x4c10fe = _0x4bfece.indexOf("x") !== -1;
  const _0x75fa6e = _0x4bfece.indexOf("y") !== -1;
  return function (_0x45e492, _0x35a35c) {
    const _0x427303 = _0x4c10fe ? Math.abs(_0x45e492.x - _0x35a35c.x) : 0;
    const _0x13e9e5 = _0x75fa6e ? Math.abs(_0x45e492.y - _0x35a35c.y) : 0;
    return Math.sqrt(Math.pow(_0x427303, 2) + Math.pow(_0x13e9e5, 2));
  };
}
function di(_0x520804, _0x55a551, _0x4b5a17, _0x37f92f, _0x263fd2) {
  const _0x4c9176 = [];
  if (!!_0x263fd2 || !!_0x520804.isPointInArea(_0x55a551)) {
    We(_0x520804, _0x4b5a17, _0x55a551, function (_0x4b1c16, _0x27632c, _0x1cb425) {
      if (!!_0x263fd2 || !!St(_0x4b1c16, _0x520804.chartArea, 0)) {
        if (_0x4b1c16.inRange(_0x55a551.x, _0x55a551.y, _0x37f92f)) {
          _0x4c9176.push({
            element: _0x4b1c16,
            datasetIndex: _0x27632c,
            index: _0x1cb425
          });
        }
      }
    }, true);
  }
  return _0x4c9176;
}
function Xh(_0x52357a, _0x3b2b13, _0x2e581b, _0x402dcb) {
  let _0x19c91d = [];
  function _0x189fec(_0x186e1d, _0x2371e6, _0x25d660) {
    const {
      startAngle: _0x9e5360,
      endAngle: _0x23e0a8
    } = _0x186e1d.getProps(["startAngle", "endAngle"], _0x402dcb);
    const {
      angle: _0x29307d
    } = pf(_0x186e1d, {
      x: _0x3b2b13.x,
      y: _0x3b2b13.y
    });
    if (du(_0x29307d, _0x9e5360, _0x23e0a8)) {
      _0x19c91d.push({
        element: _0x186e1d,
        datasetIndex: _0x2371e6,
        index: _0x25d660
      });
    }
  }
  We(_0x52357a, _0x2e581b, _0x3b2b13, _0x189fec);
  return _0x19c91d;
}
function Qh(_0x5c37f8, _0x492e14, _0x19e84a, _0x48b24c, _0x4777df, _0x5a6389) {
  let _0x104be9 = [];
  const _0x30da8e = qh(_0x19e84a);
  let _0x5c450e = Number.POSITIVE_INFINITY;
  function _0x56a756(_0x5b394a, _0x539969, _0x475f3b) {
    const _0x2005cb = _0x5b394a.inRange(_0x492e14.x, _0x492e14.y, _0x4777df);
    if (_0x48b24c && !_0x2005cb) {
      return;
    }
    const _0x200722 = _0x5b394a.getCenterPoint(_0x4777df);
    if (!_0x5a6389 && !_0x5c37f8.isPointInArea(_0x200722) && !_0x2005cb) {
      return;
    }
    const _0x19bd7a = _0x30da8e(_0x492e14, _0x200722);
    if (_0x19bd7a < _0x5c450e) {
      _0x104be9 = [{
        element: _0x5b394a,
        datasetIndex: _0x539969,
        index: _0x475f3b
      }];
      _0x5c450e = _0x19bd7a;
    } else if (_0x19bd7a === _0x5c450e) {
      _0x104be9.push({
        element: _0x5b394a,
        datasetIndex: _0x539969,
        index: _0x475f3b
      });
    }
  }
  We(_0x5c37f8, _0x19e84a, _0x492e14, _0x56a756);
  return _0x104be9;
}
function pi(_0x434796, _0x414b, _0x1a406d, _0x5106cd, _0x13a7cc, _0x425ff3) {
  if (!_0x425ff3 && !_0x434796.isPointInArea(_0x414b)) {
    return [];
  } else if (_0x1a406d === "r" && !_0x5106cd) {
    return Xh(_0x434796, _0x414b, _0x1a406d, _0x13a7cc);
  } else {
    return Qh(_0x434796, _0x414b, _0x1a406d, _0x5106cd, _0x13a7cc, _0x425ff3);
  }
}
function ta(_0x161d98, _0x40b6d1, _0x553b9d, _0xee35c8, _0x343c4b) {
  const _0x5639f3 = [];
  const _0x2a98a3 = _0x553b9d === "x" ? "inXRange" : "inYRange";
  let _0x11ae48 = false;
  We(_0x161d98, _0x553b9d, _0x40b6d1, (_0x5b8686, _0x100982, _0x3eeea3) => {
    if (_0x5b8686[_0x2a98a3](_0x40b6d1[_0x553b9d], _0x343c4b)) {
      _0x5639f3.push({
        element: _0x5b8686,
        datasetIndex: _0x100982,
        index: _0x3eeea3
      });
      _0x11ae48 = _0x11ae48 || _0x5b8686.inRange(_0x40b6d1.x, _0x40b6d1.y, _0x343c4b);
    }
  });
  if (_0xee35c8 && !_0x11ae48) {
    return [];
  } else {
    return _0x5639f3;
  }
}
var Gh = {
  evaluateInteractionItems: We,
  modes: {
    index(_0x381673, _0x5e273b, _0x2dc767, _0x536e8e) {
      const _0x21fbc8 = Vt(_0x5e273b, _0x381673);
      const _0x4ee096 = _0x2dc767.axis || "x";
      const _0xfe37e3 = _0x2dc767.includeInvisible || false;
      const _0x4677b1 = _0x2dc767.intersect ? di(_0x381673, _0x21fbc8, _0x4ee096, _0x536e8e, _0xfe37e3) : pi(_0x381673, _0x21fbc8, _0x4ee096, false, _0x536e8e, _0xfe37e3);
      const _0x55ab18 = [];
      if (_0x4677b1.length) {
        _0x381673.getSortedVisibleDatasetMetas().forEach(_0x513f5b => {
          const _0xe29d7e = _0x4677b1[0].index;
          const _0x29663a = _0x513f5b.data[_0xe29d7e];
          if (_0x29663a && !_0x29663a.skip) {
            _0x55ab18.push({
              element: _0x29663a,
              datasetIndex: _0x513f5b.index,
              index: _0xe29d7e
            });
          }
        });
        return _0x55ab18;
      } else {
        return [];
      }
    },
    dataset(_0x3b81b8, _0x3cecb3, _0x37c014, _0x32d698) {
      const _0x1befa7 = Vt(_0x3cecb3, _0x3b81b8);
      const _0x1c99ab = _0x37c014.axis || "xy";
      const _0x505fdb = _0x37c014.includeInvisible || false;
      let _0x3e0419 = _0x37c014.intersect ? di(_0x3b81b8, _0x1befa7, _0x1c99ab, _0x32d698, _0x505fdb) : pi(_0x3b81b8, _0x1befa7, _0x1c99ab, false, _0x32d698, _0x505fdb);
      if (_0x3e0419.length > 0) {
        const _0x1e53a2 = _0x3e0419[0].datasetIndex;
        const _0x1ff0bf = _0x3b81b8.getDatasetMeta(_0x1e53a2).data;
        _0x3e0419 = [];
        for (let _0x3461e3 = 0; _0x3461e3 < _0x1ff0bf.length; ++_0x3461e3) {
          _0x3e0419.push({
            element: _0x1ff0bf[_0x3461e3],
            datasetIndex: _0x1e53a2,
            index: _0x3461e3
          });
        }
      }
      return _0x3e0419;
    },
    point(_0x5e3148, _0x334830, _0x234833, _0x130ee9) {
      const _0xa0ed06 = Vt(_0x334830, _0x5e3148);
      const _0xfa8b51 = _0x234833.axis || "xy";
      const _0x18091a = _0x234833.includeInvisible || false;
      return di(_0x5e3148, _0xa0ed06, _0xfa8b51, _0x130ee9, _0x18091a);
    },
    nearest(_0x3767d9, _0x225292, _0x5bf0a8, _0x2c3730) {
      const _0x22e39e = Vt(_0x225292, _0x3767d9);
      const _0x5ca253 = _0x5bf0a8.axis || "xy";
      const _0x1b286c = _0x5bf0a8.includeInvisible || false;
      return pi(_0x3767d9, _0x22e39e, _0x5ca253, _0x5bf0a8.intersect, _0x2c3730, _0x1b286c);
    },
    x(_0xc07eec, _0x14cc8b, _0x15d217, _0x27838f) {
      const _0x3a69c5 = Vt(_0x14cc8b, _0xc07eec);
      return ta(_0xc07eec, _0x3a69c5, "x", _0x15d217.intersect, _0x27838f);
    },
    y(_0x4d66d6, _0xc0b8b1, _0x4b292d, _0x5c7b03) {
      const _0x319906 = Vt(_0xc0b8b1, _0x4d66d6);
      return ta(_0x4d66d6, _0x319906, "y", _0x4b292d.intersect, _0x5c7b03);
    }
  }
};
const $u = ["left", "top", "right", "bottom"];
function ye(_0x1626e1, _0x5de34b) {
  return _0x1626e1.filter(_0x22a5c => _0x22a5c.pos === _0x5de34b);
}
function ea(_0x416751, _0x3bb22a) {
  return _0x416751.filter(_0x388c2a => $u.indexOf(_0x388c2a.pos) === -1 && _0x388c2a.box.axis === _0x3bb22a);
}
function me(_0x563477, _0x14aad4) {
  return _0x563477.sort((_0x414687, _0x410aa9) => {
    const _0x56999e = _0x14aad4 ? _0x410aa9 : _0x414687;
    const _0x4c7031 = _0x14aad4 ? _0x414687 : _0x410aa9;
    if (_0x56999e.weight === _0x4c7031.weight) {
      return _0x56999e.index - _0x4c7031.index;
    } else {
      return _0x56999e.weight - _0x4c7031.weight;
    }
  });
}
function Kh(_0x45e510) {
  const _0x341173 = [];
  let _0x5a3f54;
  let _0x11acdb;
  let _0x3eff5d;
  let _0x58085a;
  let _0x1a8045;
  let _0x5ece35;
  _0x5a3f54 = 0;
  _0x11acdb = (_0x45e510 || []).length;
  for (; _0x5a3f54 < _0x11acdb; ++_0x5a3f54) {
    _0x3eff5d = _0x45e510[_0x5a3f54];
    ({
      position: _0x58085a,
      options: {
        stack: _0x1a8045,
        stackWeight: _0x5ece35 = 1
      }
    } = _0x3eff5d);
    _0x341173.push({
      index: _0x5a3f54,
      box: _0x3eff5d,
      pos: _0x58085a,
      horizontal: _0x3eff5d.isHorizontal(),
      weight: _0x3eff5d.weight,
      stack: _0x1a8045 && _0x58085a + _0x1a8045,
      stackWeight: _0x5ece35
    });
  }
  return _0x341173;
}
function Zh(_0x3b7204) {
  const _0x3f9887 = {};
  for (const _0x47c812 of _0x3b7204) {
    const {
      stack: _0x14a326,
      pos: _0xcf4710,
      stackWeight: _0x1885f6
    } = _0x47c812;
    if (!_0x14a326 || !$u.includes(_0xcf4710)) {
      continue;
    }
    const _0x54aa2e = _0x3f9887[_0x14a326] ||= {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    };
    _0x54aa2e.count++;
    _0x54aa2e.weight += _0x1885f6;
  }
  return _0x3f9887;
}
function Jh(_0x56b7e0, _0x2a42c6) {
  const _0xe63834 = Zh(_0x56b7e0);
  const {
    vBoxMaxWidth: _0x58cf5b,
    hBoxMaxHeight: _0x2911c8
  } = _0x2a42c6;
  let _0x1929e7;
  let _0x498654;
  let _0x2d6894;
  _0x1929e7 = 0;
  _0x498654 = _0x56b7e0.length;
  for (; _0x1929e7 < _0x498654; ++_0x1929e7) {
    _0x2d6894 = _0x56b7e0[_0x1929e7];
    const {
      fullSize: _0x58669f
    } = _0x2d6894.box;
    const _0x175abe = _0xe63834[_0x2d6894.stack];
    const _0x2631c2 = _0x175abe && _0x2d6894.stackWeight / _0x175abe.weight;
    if (_0x2d6894.horizontal) {
      _0x2d6894.width = _0x2631c2 ? _0x2631c2 * _0x58cf5b : _0x58669f && _0x2a42c6.availableWidth;
      _0x2d6894.height = _0x2911c8;
    } else {
      _0x2d6894.width = _0x58cf5b;
      _0x2d6894.height = _0x2631c2 ? _0x2631c2 * _0x2911c8 : _0x58669f && _0x2a42c6.availableHeight;
    }
  }
  return _0xe63834;
}
function td(_0x362251) {
  const _0x5c99b0 = Kh(_0x362251);
  const _0x29af15 = me(_0x5c99b0.filter(_0x56d5c9 => _0x56d5c9.box.fullSize), true);
  const _0x5bc1f1 = me(ye(_0x5c99b0, "left"), true);
  const _0x3368b7 = me(ye(_0x5c99b0, "right"));
  const _0x22aff9 = me(ye(_0x5c99b0, "top"), true);
  const _0x43b54c = me(ye(_0x5c99b0, "bottom"));
  const _0x16d6d3 = ea(_0x5c99b0, "x");
  const _0x5cd2a8 = ea(_0x5c99b0, "y");
  return {
    fullSize: _0x29af15,
    leftAndTop: _0x5bc1f1.concat(_0x22aff9),
    rightAndBottom: _0x3368b7.concat(_0x5cd2a8).concat(_0x43b54c).concat(_0x16d6d3),
    chartArea: ye(_0x5c99b0, "chartArea"),
    vertical: _0x5bc1f1.concat(_0x3368b7).concat(_0x5cd2a8),
    horizontal: _0x22aff9.concat(_0x43b54c).concat(_0x16d6d3)
  };
}
function na(_0x5e07ff, _0xb505cf, _0x51c467, _0x57fd54) {
  return Math.max(_0x5e07ff[_0x51c467], _0xb505cf[_0x51c467]) + Math.max(_0x5e07ff[_0x57fd54], _0xb505cf[_0x57fd54]);
}
function Ru(_0x1c4fe5, _0x1f1bc9) {
  _0x1c4fe5.top = Math.max(_0x1c4fe5.top, _0x1f1bc9.top);
  _0x1c4fe5.left = Math.max(_0x1c4fe5.left, _0x1f1bc9.left);
  _0x1c4fe5.bottom = Math.max(_0x1c4fe5.bottom, _0x1f1bc9.bottom);
  _0x1c4fe5.right = Math.max(_0x1c4fe5.right, _0x1f1bc9.right);
}
function ed(_0x19b1e5, _0x3dbb4e, _0x325fbb, _0x214eb8) {
  const {
    pos: _0xbf11d3,
    box: _0x731801
  } = _0x325fbb;
  const _0x34df2c = _0x19b1e5.maxPadding;
  if (!C(_0xbf11d3)) {
    if (_0x325fbb.size) {
      _0x19b1e5[_0xbf11d3] -= _0x325fbb.size;
    }
    const _0x5e228f = _0x214eb8[_0x325fbb.stack] || {
      size: 0,
      count: 1
    };
    _0x5e228f.size = Math.max(_0x5e228f.size, _0x325fbb.horizontal ? _0x731801.height : _0x731801.width);
    _0x325fbb.size = _0x5e228f.size / _0x5e228f.count;
    _0x19b1e5[_0xbf11d3] += _0x325fbb.size;
  }
  if (_0x731801.getPadding) {
    Ru(_0x34df2c, _0x731801.getPadding());
  }
  const _0x39cd92 = Math.max(0, _0x3dbb4e.outerWidth - na(_0x34df2c, _0x19b1e5, "left", "right"));
  const _0x13edc9 = Math.max(0, _0x3dbb4e.outerHeight - na(_0x34df2c, _0x19b1e5, "top", "bottom"));
  const _0x59e333 = _0x39cd92 !== _0x19b1e5.w;
  const _0x339c27 = _0x13edc9 !== _0x19b1e5.h;
  _0x19b1e5.w = _0x39cd92;
  _0x19b1e5.h = _0x13edc9;
  if (_0x325fbb.horizontal) {
    return {
      same: _0x59e333,
      other: _0x339c27
    };
  } else {
    return {
      same: _0x339c27,
      other: _0x59e333
    };
  }
}
function nd(_0x1e19a7) {
  const _0x310217 = _0x1e19a7.maxPadding;
  function _0x1932c9(_0xaad8a3) {
    const _0x3bab4e = Math.max(_0x310217[_0xaad8a3] - _0x1e19a7[_0xaad8a3], 0);
    _0x1e19a7[_0xaad8a3] += _0x3bab4e;
    return _0x3bab4e;
  }
  _0x1e19a7.y += _0x1932c9("top");
  _0x1e19a7.x += _0x1932c9("left");
  _0x1932c9("right");
  _0x1932c9("bottom");
}
function rd(_0x568a63, _0x79e23d) {
  const _0x83f67c = _0x79e23d.maxPadding;
  function _0x561e0a(_0x342c82) {
    const _0x5e4d31 = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    _0x342c82.forEach(_0x498ddb => {
      _0x5e4d31[_0x498ddb] = Math.max(_0x79e23d[_0x498ddb], _0x83f67c[_0x498ddb]);
    });
    return _0x5e4d31;
  }
  return _0x561e0a(_0x568a63 ? ["left", "right"] : ["top", "bottom"]);
}
function Te(_0x27a6c0, _0x10454b, _0xc54679, _0x55f0ed) {
  const _0x35ea1c = [];
  let _0x199025;
  let _0x4a987a;
  let _0x42cacb;
  let _0x26977c;
  let _0x39bde6;
  let _0xb06d37;
  _0x199025 = 0;
  _0x4a987a = _0x27a6c0.length;
  _0x39bde6 = 0;
  for (; _0x199025 < _0x4a987a; ++_0x199025) {
    _0x42cacb = _0x27a6c0[_0x199025];
    _0x26977c = _0x42cacb.box;
    _0x26977c.update(_0x42cacb.width || _0x10454b.w, _0x42cacb.height || _0x10454b.h, rd(_0x42cacb.horizontal, _0x10454b));
    const {
      same: _0xc2cd10,
      other: _0x319549
    } = ed(_0x10454b, _0xc54679, _0x42cacb, _0x55f0ed);
    _0x39bde6 |= _0xc2cd10 && _0x35ea1c.length;
    _0xb06d37 = _0xb06d37 || _0x319549;
    if (!_0x26977c.fullSize) {
      _0x35ea1c.push(_0x42cacb);
    }
  }
  return _0x39bde6 && Te(_0x35ea1c, _0x10454b, _0xc54679, _0x55f0ed) || _0xb06d37;
}
function nn(_0x58ce99, _0x1b3d60, _0x55df8a, _0x4495e9, _0x276761) {
  _0x58ce99.top = _0x55df8a;
  _0x58ce99.left = _0x1b3d60;
  _0x58ce99.right = _0x1b3d60 + _0x4495e9;
  _0x58ce99.bottom = _0x55df8a + _0x276761;
  _0x58ce99.width = _0x4495e9;
  _0x58ce99.height = _0x276761;
}
function ra(_0x4ed32e, _0x1436f0, _0x34471d, _0x4d0ed9) {
  const _0x22c972 = _0x34471d.padding;
  let {
    x: _0x3f1b64,
    y: _0xdf21f2
  } = _0x1436f0;
  for (const _0x5240bf of _0x4ed32e) {
    const _0x522571 = _0x5240bf.box;
    const _0x926a21 = _0x4d0ed9[_0x5240bf.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    };
    const _0x160c5e = _0x5240bf.stackWeight / _0x926a21.weight || 1;
    if (_0x5240bf.horizontal) {
      const _0x2d89ac = _0x1436f0.w * _0x160c5e;
      const _0x539183 = _0x926a21.size || _0x522571.height;
      if (ar(_0x926a21.start)) {
        _0xdf21f2 = _0x926a21.start;
      }
      if (_0x522571.fullSize) {
        nn(_0x522571, _0x22c972.left, _0xdf21f2, _0x34471d.outerWidth - _0x22c972.right - _0x22c972.left, _0x539183);
      } else {
        nn(_0x522571, _0x1436f0.left + _0x926a21.placed, _0xdf21f2, _0x2d89ac, _0x539183);
      }
      _0x926a21.start = _0xdf21f2;
      _0x926a21.placed += _0x2d89ac;
      _0xdf21f2 = _0x522571.bottom;
    } else {
      const _0x751061 = _0x1436f0.h * _0x160c5e;
      const _0x2b2f02 = _0x926a21.size || _0x522571.width;
      if (ar(_0x926a21.start)) {
        _0x3f1b64 = _0x926a21.start;
      }
      if (_0x522571.fullSize) {
        nn(_0x522571, _0x3f1b64, _0x22c972.top, _0x2b2f02, _0x34471d.outerHeight - _0x22c972.bottom - _0x22c972.top);
      } else {
        nn(_0x522571, _0x3f1b64, _0x1436f0.top + _0x926a21.placed, _0x2b2f02, _0x751061);
      }
      _0x926a21.start = _0x3f1b64;
      _0x926a21.placed += _0x751061;
      _0x3f1b64 = _0x522571.right;
    }
  }
  _0x1436f0.x = _0x3f1b64;
  _0x1436f0.y = _0xdf21f2;
}
var rn = {
  addBox(_0x2f5724, _0x92ad57) {
    _0x2f5724.boxes ||= [];
    _0x92ad57.fullSize = _0x92ad57.fullSize || false;
    _0x92ad57.position = _0x92ad57.position || "top";
    _0x92ad57.weight = _0x92ad57.weight || 0;
    _0x92ad57._layers = _0x92ad57._layers || function () {
      return [{
        z: 0,
        draw(_0x54803c) {
          _0x92ad57.draw(_0x54803c);
        }
      }];
    };
    _0x2f5724.boxes.push(_0x92ad57);
  },
  removeBox(_0x392fed, _0x1b7a98) {
    const _0x529782 = _0x392fed.boxes ? _0x392fed.boxes.indexOf(_0x1b7a98) : -1;
    if (_0x529782 !== -1) {
      _0x392fed.boxes.splice(_0x529782, 1);
    }
  },
  configure(_0xb5b505, _0x5a81ac, _0x287ff0) {
    _0x5a81ac.fullSize = _0x287ff0.fullSize;
    _0x5a81ac.position = _0x287ff0.position;
    _0x5a81ac.weight = _0x287ff0.weight;
  },
  update(_0x33d73b, _0x9caabe, _0x814a94, _0x41630e) {
    if (!_0x33d73b) {
      return;
    }
    const _0x31f790 = kt(_0x33d73b.options.layout.padding);
    const _0x51417c = Math.max(_0x9caabe - _0x31f790.width, 0);
    const _0x346704 = Math.max(_0x814a94 - _0x31f790.height, 0);
    const _0x300223 = td(_0x33d73b.boxes);
    const _0x427ebb = _0x300223.vertical;
    const _0x14ba66 = _0x300223.horizontal;
    tt(_0x33d73b.boxes, _0x5f3258 => {
      if (typeof _0x5f3258.beforeLayout == "function") {
        _0x5f3258.beforeLayout();
      }
    });
    const _0x2f7bd5 = _0x427ebb.reduce((_0x3a2c7e, _0x23e545) => _0x23e545.box.options && _0x23e545.box.options.display === false ? _0x3a2c7e : _0x3a2c7e + 1, 0) || 1;
    const _0x81dbd3 = Object.freeze({
      outerWidth: _0x9caabe,
      outerHeight: _0x814a94,
      padding: _0x31f790,
      availableWidth: _0x51417c,
      availableHeight: _0x346704,
      vBoxMaxWidth: _0x51417c / 2 / _0x2f7bd5,
      hBoxMaxHeight: _0x346704 / 2
    });
    const _0x4930d5 = Object.assign({}, _0x31f790);
    Ru(_0x4930d5, kt(_0x41630e));
    const _0x27b15b = Object.assign({
      maxPadding: _0x4930d5,
      w: _0x51417c,
      h: _0x346704,
      x: _0x31f790.left,
      y: _0x31f790.top
    }, _0x31f790);
    const _0x2fec22 = Jh(_0x427ebb.concat(_0x14ba66), _0x81dbd3);
    Te(_0x300223.fullSize, _0x27b15b, _0x81dbd3, _0x2fec22);
    Te(_0x427ebb, _0x27b15b, _0x81dbd3, _0x2fec22);
    if (Te(_0x14ba66, _0x27b15b, _0x81dbd3, _0x2fec22)) {
      Te(_0x427ebb, _0x27b15b, _0x81dbd3, _0x2fec22);
    }
    nd(_0x27b15b);
    ra(_0x300223.leftAndTop, _0x27b15b, _0x81dbd3, _0x2fec22);
    _0x27b15b.x += _0x27b15b.w;
    _0x27b15b.y += _0x27b15b.h;
    ra(_0x300223.rightAndBottom, _0x27b15b, _0x81dbd3, _0x2fec22);
    _0x33d73b.chartArea = {
      left: _0x27b15b.left,
      top: _0x27b15b.top,
      right: _0x27b15b.left + _0x27b15b.w,
      bottom: _0x27b15b.top + _0x27b15b.h,
      height: _0x27b15b.h,
      width: _0x27b15b.w
    };
    tt(_0x300223.chartArea, _0x2d8ad9 => {
      const _0x28e645 = _0x2d8ad9.box;
      Object.assign(_0x28e645, _0x33d73b.chartArea);
      _0x28e645.update(_0x27b15b.w, _0x27b15b.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Cu {
  acquireContext(_0x49db59, _0x19ab99) {}
  releaseContext(_0x252dfe) {
    return false;
  }
  addEventListener(_0x1c5b2b, _0x318381, _0x2de60c) {}
  removeEventListener(_0x39f2a7, _0x1d998b, _0x503471) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(_0x1d728e, _0x49df10, _0x47b119, _0x2a61b4) {
    _0x49df10 = Math.max(0, _0x49df10 || _0x1d728e.width);
    _0x47b119 = _0x47b119 || _0x1d728e.height;
    return {
      width: _0x49df10,
      height: Math.max(0, _0x2a61b4 ? Math.floor(_0x49df10 / _0x2a61b4) : _0x47b119)
    };
  }
  isAttached(_0x368f41) {
    return true;
  }
  updateConfig(_0x35ea16) {}
}
class id extends Cu {
  acquireContext(_0x6dee26) {
    return _0x6dee26 && _0x6dee26.getContext && _0x6dee26.getContext("2d") || null;
  }
  updateConfig(_0x1ebdb1) {
    _0x1ebdb1.options.animation = false;
  }
}
const fn = "$chartjs";
const od = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
};
const ia = _0x8e3113 => _0x8e3113 === null || _0x8e3113 === "";
function sd(_0x102ffa, _0x116f29) {
  const _0x3dfacd = _0x102ffa.style;
  const _0x43bb54 = _0x102ffa.getAttribute("height");
  const _0x3eccda = _0x102ffa.getAttribute("width");
  _0x102ffa[fn] = {
    initial: {
      height: _0x43bb54,
      width: _0x3eccda,
      style: {
        display: _0x3dfacd.display,
        height: _0x3dfacd.height,
        width: _0x3dfacd.width
      }
    }
  };
  _0x3dfacd.display = _0x3dfacd.display || "block";
  _0x3dfacd.boxSizing = _0x3dfacd.boxSizing || "border-box";
  if (ia(_0x3eccda)) {
    const _0x17d3d0 = Us(_0x102ffa, "width");
    if (_0x17d3d0 !== undefined) {
      _0x102ffa.width = _0x17d3d0;
    }
  }
  if (ia(_0x43bb54)) {
    if (_0x102ffa.style.height === "") {
      _0x102ffa.height = _0x102ffa.width / (_0x116f29 || 2);
    } else {
      const _0x5e3b7d = Us(_0x102ffa, "height");
      if (_0x5e3b7d !== undefined) {
        _0x102ffa.height = _0x5e3b7d;
      }
    }
  }
  return _0x102ffa;
}
const Eu = _h ? {
  passive: true
} : false;
function ad(_0x279946, _0x1ee48c, _0x32f5d6) {
  if (_0x279946) {
    _0x279946.addEventListener(_0x1ee48c, _0x32f5d6, Eu);
  }
}
function cd(_0x3fe410, _0x2edb19, _0x70cfc7) {
  if (_0x3fe410 && _0x3fe410.canvas) {
    _0x3fe410.canvas.removeEventListener(_0x2edb19, _0x70cfc7, Eu);
  }
}
function ud(_0x24c4cc, _0x168503) {
  const _0x2dc9f9 = od[_0x24c4cc.type] || _0x24c4cc.type;
  const {
    x: _0x33af32,
    y: _0x3c9cc5
  } = Vt(_0x24c4cc, _0x168503);
  return {
    type: _0x2dc9f9,
    chart: _0x168503,
    native: _0x24c4cc,
    x: _0x33af32 !== undefined ? _0x33af32 : null,
    y: _0x3c9cc5 !== undefined ? _0x3c9cc5 : null
  };
}
function hr(_0x3161da, _0x466945) {
  for (const _0x114db7 of _0x3161da) {
    if (_0x114db7 === _0x466945 || _0x114db7.contains(_0x466945)) {
      return true;
    }
  }
}
function ld(_0x56968d, _0x4bf05c, _0x40de72) {
  const _0x486c3b = _0x56968d.canvas;
  const _0x26858c = new MutationObserver(_0x2bc4de => {
    let _0x4dc03b = false;
    for (const _0x343e8e of _0x2bc4de) {
      _0x4dc03b = _0x4dc03b || hr(_0x343e8e.addedNodes, _0x486c3b);
      _0x4dc03b = _0x4dc03b && !hr(_0x343e8e.removedNodes, _0x486c3b);
    }
    if (_0x4dc03b) {
      _0x40de72();
    }
  });
  _0x26858c.observe(document, {
    childList: true,
    subtree: true
  });
  return _0x26858c;
}
function fd(_0x4dde9e, _0x2b29a3, _0x14ba7e) {
  const _0x25311a = _0x4dde9e.canvas;
  const _0x4f284d = new MutationObserver(_0x28ee5e => {
    let _0x3f4d15 = false;
    for (const _0x3c9966 of _0x28ee5e) {
      _0x3f4d15 = _0x3f4d15 || hr(_0x3c9966.removedNodes, _0x25311a);
      _0x3f4d15 = _0x3f4d15 && !hr(_0x3c9966.addedNodes, _0x25311a);
    }
    if (_0x3f4d15) {
      _0x14ba7e();
    }
  });
  _0x4f284d.observe(document, {
    childList: true,
    subtree: true
  });
  return _0x4f284d;
}
const Ae = new Map();
let oa = 0;
function Iu() {
  const _0x300e38 = window.devicePixelRatio;
  if (_0x300e38 !== oa) {
    oa = _0x300e38;
    Ae.forEach((_0x1cb048, _0x2e8a79) => {
      if (_0x2e8a79.currentDevicePixelRatio !== _0x300e38) {
        _0x1cb048();
      }
    });
  }
}
function hd(_0x9a4539, _0x58ee37) {
  if (!Ae.size) {
    window.addEventListener("resize", Iu);
  }
  Ae.set(_0x9a4539, _0x58ee37);
}
function dd(_0x4b48ef) {
  Ae.delete(_0x4b48ef);
  if (!Ae.size) {
    window.removeEventListener("resize", Iu);
  }
}
function pd(_0x197e60, _0x4ac2c2, _0x45d67e) {
  const _0x259bfc = _0x197e60.canvas;
  const _0x5d2fdc = _0x259bfc && ss(_0x259bfc);
  if (!_0x5d2fdc) {
    return;
  }
  const _0x31de3f = yu((_0x2265f7, _0x3800be) => {
    const _0x4065f2 = _0x5d2fdc.clientWidth;
    _0x45d67e(_0x2265f7, _0x3800be);
    if (_0x4065f2 < _0x5d2fdc.clientWidth) {
      _0x45d67e();
    }
  }, window);
  const _0x59bef8 = new ResizeObserver(_0x2d17b2 => {
    const _0x4f8b7e = _0x2d17b2[0];
    const _0x12ce02 = _0x4f8b7e.contentRect.width;
    const _0x6ef7b5 = _0x4f8b7e.contentRect.height;
    if (_0x12ce02 !== 0 || _0x6ef7b5 !== 0) {
      _0x31de3f(_0x12ce02, _0x6ef7b5);
    }
  });
  _0x59bef8.observe(_0x5d2fdc);
  hd(_0x197e60, _0x31de3f);
  return _0x59bef8;
}
function gi(_0x32e1a2, _0x22507b, _0x5dd4ef) {
  if (_0x5dd4ef) {
    _0x5dd4ef.disconnect();
  }
  if (_0x22507b === "resize") {
    dd(_0x32e1a2);
  }
}
function gd(_0x1a2271, _0x219095, _0x215023) {
  const _0x2632cd = _0x1a2271.canvas;
  const _0x5102f7 = yu(_0x5ebf2e => {
    if (_0x1a2271.ctx !== null) {
      _0x215023(ud(_0x5ebf2e, _0x1a2271));
    }
  }, _0x1a2271);
  ad(_0x2632cd, _0x219095, _0x5102f7);
  return _0x5102f7;
}
class yd extends Cu {
  acquireContext(_0x18c09b, _0x5db680) {
    const _0x5bd234 = _0x18c09b && _0x18c09b.getContext && _0x18c09b.getContext("2d");
    if (_0x5bd234 && _0x5bd234.canvas === _0x18c09b) {
      sd(_0x18c09b, _0x5db680);
      return _0x5bd234;
    } else {
      return null;
    }
  }
  releaseContext(_0x302ab2) {
    const _0x1b283f = _0x302ab2.canvas;
    if (!_0x1b283f[fn]) {
      return false;
    }
    const _0x3062e4 = _0x1b283f[fn].initial;
    ["height", "width"].forEach(_0x50f2ca => {
      const _0x4fee3c = _0x3062e4[_0x50f2ca];
      if (z(_0x4fee3c)) {
        _0x1b283f.removeAttribute(_0x50f2ca);
      } else {
        _0x1b283f.setAttribute(_0x50f2ca, _0x4fee3c);
      }
    });
    const _0x64a825 = _0x3062e4.style || {};
    Object.keys(_0x64a825).forEach(_0x251f62 => {
      _0x1b283f.style[_0x251f62] = _0x64a825[_0x251f62];
    });
    _0x1b283f.width = _0x1b283f.width;
    delete _0x1b283f[fn];
    return true;
  }
  addEventListener(_0x16bcf4, _0x259b18, _0x6fb90b) {
    this.removeEventListener(_0x16bcf4, _0x259b18);
    const _0x46b6bd = _0x16bcf4.$proxies ||= {};
    const _0x4fcfe7 = {
      attach: ld,
      detach: fd,
      resize: pd
    }[_0x259b18] || gd;
    _0x46b6bd[_0x259b18] = _0x4fcfe7(_0x16bcf4, _0x259b18, _0x6fb90b);
  }
  removeEventListener(_0x388708, _0x2471c0) {
    const _0x4c2bee = _0x388708.$proxies ||= {};
    const _0x118b9d = _0x4c2bee[_0x2471c0];
    if (!_0x118b9d) {
      return;
    }
    ({
      attach: gi,
      detach: gi,
      resize: gi
    }[_0x2471c0] || cd)(_0x388708, _0x2471c0, _0x118b9d);
    _0x4c2bee[_0x2471c0] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(_0x18e330, _0x4aaae5, _0x440e19, _0x5790ce) {
    return bh(_0x18e330, _0x4aaae5, _0x440e19, _0x5790ce);
  }
  isAttached(_0x376071) {
    const _0x233af4 = ss(_0x376071);
    return !!_0x233af4 && !!_0x233af4.isConnected;
  }
}
function md(_0x1a6d0c) {
  if (!os() || typeof OffscreenCanvas !== "undefined" && _0x1a6d0c instanceof OffscreenCanvas) {
    return id;
  } else {
    return yd;
  }
}
class ti {
  static defaults = {};
  static defaultRoutes = undefined;
  x;
  y;
  active = false;
  options;
  $animations;
  tooltipPosition(_0x63f76f) {
    const {
      x: _0x13d020,
      y: _0x1370c2
    } = this.getProps(["x", "y"], _0x63f76f);
    return {
      x: _0x13d020,
      y: _0x1370c2
    };
  }
  hasValue() {
    return Le(this.x) && Le(this.y);
  }
  getProps(_0x382066, _0x107b5a) {
    const _0x3c7191 = this.$animations;
    if (!_0x107b5a || !_0x3c7191) {
      return this;
    }
    const _0x2a3ef6 = {};
    _0x382066.forEach(_0x10c6d6 => {
      _0x2a3ef6[_0x10c6d6] = _0x3c7191[_0x10c6d6] && _0x3c7191[_0x10c6d6].active() ? _0x3c7191[_0x10c6d6]._to : this[_0x10c6d6];
    });
    return _0x2a3ef6;
  }
}
function bd(_0x2a3131, _0x4c1bb3) {
  const _0xf0213d = _0x2a3131.options.ticks;
  const _0x1d0260 = _d(_0x2a3131);
  const _0x55ed15 = Math.min(_0xf0213d.maxTicksLimit || _0x1d0260, _0x1d0260);
  const _0x38ba60 = _0xf0213d.major.enabled ? wd(_0x4c1bb3) : [];
  const _0x2b43bc = _0x38ba60.length;
  const _0x383c5c = _0x38ba60[0];
  const _0xb725a4 = _0x38ba60[_0x2b43bc - 1];
  const _0x2b34fa = [];
  if (_0x2b43bc > _0x55ed15) {
    xd(_0x4c1bb3, _0x2b34fa, _0x38ba60, _0x2b43bc / _0x55ed15);
    return _0x2b34fa;
  }
  const _0xe2e098 = vd(_0x38ba60, _0x4c1bb3, _0x55ed15);
  if (_0x2b43bc > 0) {
    let _0x1d736a;
    let _0x13e350;
    const _0x39b164 = _0x2b43bc > 1 ? Math.round((_0xb725a4 - _0x383c5c) / (_0x2b43bc - 1)) : null;
    on(_0x4c1bb3, _0x2b34fa, _0xe2e098, z(_0x39b164) ? 0 : _0x383c5c - _0x39b164, _0x383c5c);
    _0x1d736a = 0;
    _0x13e350 = _0x2b43bc - 1;
    for (; _0x1d736a < _0x13e350; _0x1d736a++) {
      on(_0x4c1bb3, _0x2b34fa, _0xe2e098, _0x38ba60[_0x1d736a], _0x38ba60[_0x1d736a + 1]);
    }
    on(_0x4c1bb3, _0x2b34fa, _0xe2e098, _0xb725a4, z(_0x39b164) ? _0x4c1bb3.length : _0xb725a4 + _0x39b164);
    return _0x2b34fa;
  }
  on(_0x4c1bb3, _0x2b34fa, _0xe2e098);
  return _0x2b34fa;
}
function _d(_0x4fdc28) {
  const _0x4a1a84 = _0x4fdc28.options.offset;
  const _0x10cb3e = _0x4fdc28._tickSize();
  const _0x41e773 = _0x4fdc28._length / _0x10cb3e + (_0x4a1a84 ? 0 : 1);
  const _0x20e898 = _0x4fdc28._maxLength / _0x10cb3e;
  return Math.floor(Math.min(_0x41e773, _0x20e898));
}
function vd(_0x5d1a47, _0x4d31eb, _0xbcc7eb) {
  const _0x5cd466 = Od(_0x5d1a47);
  const _0x1fb8da = _0x4d31eb.length / _0xbcc7eb;
  if (!_0x5cd466) {
    return Math.max(_0x1fb8da, 1);
  }
  const _0x32c4b6 = hf(_0x5cd466);
  for (let _0x5f5d2b = 0, _0x2ccf7f = _0x32c4b6.length - 1; _0x5f5d2b < _0x2ccf7f; _0x5f5d2b++) {
    const _0x2ab922 = _0x32c4b6[_0x5f5d2b];
    if (_0x2ab922 > _0x1fb8da) {
      return _0x2ab922;
    }
  }
  return Math.max(_0x1fb8da, 1);
}
function wd(_0x30356d) {
  const _0x505abc = [];
  let _0x1b1164;
  let _0x1714d3;
  _0x1b1164 = 0;
  _0x1714d3 = _0x30356d.length;
  for (; _0x1b1164 < _0x1714d3; _0x1b1164++) {
    if (_0x30356d[_0x1b1164].major) {
      _0x505abc.push(_0x1b1164);
    }
  }
  return _0x505abc;
}
function xd(_0x4bd5b4, _0x3e270d, _0x3113ec, _0x20a843) {
  let _0x465c57 = 0;
  let _0x10b77b = _0x3113ec[0];
  let _0x189878;
  _0x20a843 = Math.ceil(_0x20a843);
  _0x189878 = 0;
  for (; _0x189878 < _0x4bd5b4.length; _0x189878++) {
    if (_0x189878 === _0x10b77b) {
      _0x3e270d.push(_0x4bd5b4[_0x189878]);
      _0x465c57++;
      _0x10b77b = _0x3113ec[_0x465c57 * _0x20a843];
    }
  }
}
function on(_0x3635e9, _0xc79b63, _0x509fc9, _0x4e186f, _0x33b736) {
  const _0x49ab87 = I(_0x4e186f, 0);
  const _0x56e81e = Math.min(I(_0x33b736, _0x3635e9.length), _0x3635e9.length);
  let _0x487171 = 0;
  let _0x5c109b;
  let _0x11406f;
  let _0x4a530d;
  _0x509fc9 = Math.ceil(_0x509fc9);
  if (_0x33b736) {
    _0x5c109b = _0x33b736 - _0x4e186f;
    _0x509fc9 = _0x5c109b / Math.floor(_0x5c109b / _0x509fc9);
  }
  _0x4a530d = _0x49ab87;
  while (_0x4a530d < 0) {
    _0x487171++;
    _0x4a530d = Math.round(_0x49ab87 + _0x487171 * _0x509fc9);
  }
  for (_0x11406f = Math.max(_0x49ab87, 0); _0x11406f < _0x56e81e; _0x11406f++) {
    if (_0x11406f === _0x4a530d) {
      _0xc79b63.push(_0x3635e9[_0x11406f]);
      _0x487171++;
      _0x4a530d = Math.round(_0x49ab87 + _0x487171 * _0x509fc9);
    }
  }
}
function Od(_0x3fef18) {
  const _0x2995ec = _0x3fef18.length;
  let _0x5ca1f2;
  let _0x29df6d;
  if (_0x2995ec < 2) {
    return false;
  }
  _0x29df6d = _0x3fef18[0];
  _0x5ca1f2 = 1;
  for (; _0x5ca1f2 < _0x2995ec; ++_0x5ca1f2) {
    if (_0x3fef18[_0x5ca1f2] - _0x3fef18[_0x5ca1f2 - 1] !== _0x29df6d) {
      return false;
    }
  }
  return _0x29df6d;
}
const Pd = _0x4e2612 => _0x4e2612 === "left" ? "right" : _0x4e2612 === "right" ? "left" : _0x4e2612;
const sa = (_0x3d2b9d, _0x10f9c2, _0x244755) => _0x10f9c2 === "top" || _0x10f9c2 === "left" ? _0x3d2b9d[_0x10f9c2] + _0x244755 : _0x3d2b9d[_0x10f9c2] - _0x244755;
const aa = (_0x1fd360, _0xb15a53) => Math.min(_0xb15a53 || _0x1fd360, _0x1fd360);
function ca(_0x5197ed, _0x4a64f7) {
  const _0x1e89f4 = [];
  const _0x3cf6c7 = _0x5197ed.length / _0x4a64f7;
  const _0x238853 = _0x5197ed.length;
  let _0x62445c = 0;
  for (; _0x62445c < _0x238853; _0x62445c += _0x3cf6c7) {
    _0x1e89f4.push(_0x5197ed[Math.floor(_0x62445c)]);
  }
  return _0x1e89f4;
}
function Sd(_0x341938, _0x33936e, _0x20566a) {
  const _0x2938fb = _0x341938.ticks.length;
  const _0x1aa863 = Math.min(_0x33936e, _0x2938fb - 1);
  const _0x229930 = _0x341938._startPixel;
  const _0x134b4b = _0x341938._endPixel;
  const _0x4120bc = 0.000001;
  let _0x3a84e2 = _0x341938.getPixelForTick(_0x1aa863);
  let _0x6f72e0;
  if (!_0x20566a || !(_0x2938fb === 1 ? _0x6f72e0 = Math.max(_0x3a84e2 - _0x229930, _0x134b4b - _0x3a84e2) : _0x33936e === 0 ? _0x6f72e0 = (_0x341938.getPixelForTick(1) - _0x3a84e2) / 2 : _0x6f72e0 = (_0x3a84e2 - _0x341938.getPixelForTick(_0x1aa863 - 1)) / 2, _0x3a84e2 += _0x1aa863 < _0x33936e ? _0x6f72e0 : -_0x6f72e0, _0x3a84e2 < _0x229930 - _0x4120bc || _0x3a84e2 > _0x134b4b + _0x4120bc)) {
    return _0x3a84e2;
  }
}
function Td(_0x448188, _0x295db4) {
  tt(_0x448188, _0x1e6f5e => {
    const _0x17e412 = _0x1e6f5e.gc;
    const _0x179e22 = _0x17e412.length / 2;
    let _0xe25fb8;
    if (_0x179e22 > _0x295db4) {
      for (_0xe25fb8 = 0; _0xe25fb8 < _0x179e22; ++_0xe25fb8) {
        delete _0x1e6f5e.data[_0x17e412[_0xe25fb8]];
      }
      _0x17e412.splice(0, _0x179e22);
    }
  });
}
function be(_0x23cfe3) {
  if (_0x23cfe3.drawTicks) {
    return _0x23cfe3.tickLength;
  } else {
    return 0;
  }
}
function ua(_0x412314, _0x275669) {
  if (!_0x412314.display) {
    return 0;
  }
  const _0x5ec509 = le(_0x412314.font, _0x275669);
  const _0x4ef00b = kt(_0x412314.padding);
  return (H(_0x412314.text) ? _0x412314.text.length : 1) * _0x5ec509.lineHeight + _0x4ef00b.height;
}
function Md(_0x577a2f, _0x278362) {
  return Jt(_0x577a2f, {
    scale: _0x278362,
    type: "scale"
  });
}
function kd(_0x28ce35, _0x454ef7, _0x3865c1) {
  return Jt(_0x28ce35, {
    tick: _0x3865c1,
    index: _0x454ef7,
    type: "tick"
  });
}
function Dd(_0x59792f, _0x16e3e6, _0x21ae42) {
  let _0x11582b = Of(_0x59792f);
  if (_0x21ae42 && _0x16e3e6 !== "right" || !_0x21ae42 && _0x16e3e6 === "right") {
    _0x11582b = Pd(_0x11582b);
  }
  return _0x11582b;
}
function $d(_0x8bfff0, _0x595b6c, _0x403c2e, _0x2faaa2) {
  const {
    top: _0x24641a,
    left: _0x2fd3e4,
    bottom: _0x182532,
    right: _0x424ee4,
    chart: _0x2681b8
  } = _0x8bfff0;
  const {
    chartArea: _0x1a4424,
    scales: _0x29b344
  } = _0x2681b8;
  let _0xf1402 = 0;
  let _0x7064aa;
  let _0x417e80;
  let _0xe1dfb4;
  const _0x3de311 = _0x182532 - _0x24641a;
  const _0x3350dc = _0x424ee4 - _0x2fd3e4;
  if (_0x8bfff0.isHorizontal()) {
    _0x417e80 = Is(_0x2faaa2, _0x2fd3e4, _0x424ee4);
    if (C(_0x403c2e)) {
      const _0x3a95d1 = Object.keys(_0x403c2e)[0];
      const _0x461afe = _0x403c2e[_0x3a95d1];
      _0xe1dfb4 = _0x29b344[_0x3a95d1].getPixelForValue(_0x461afe) + _0x3de311 - _0x595b6c;
    } else if (_0x403c2e === "center") {
      _0xe1dfb4 = (_0x1a4424.bottom + _0x1a4424.top) / 2 + _0x3de311 - _0x595b6c;
    } else {
      _0xe1dfb4 = sa(_0x8bfff0, _0x403c2e, _0x595b6c);
    }
    _0x7064aa = _0x424ee4 - _0x2fd3e4;
  } else {
    if (C(_0x403c2e)) {
      const _0x4e50e5 = Object.keys(_0x403c2e)[0];
      const _0x40de0f = _0x403c2e[_0x4e50e5];
      _0x417e80 = _0x29b344[_0x4e50e5].getPixelForValue(_0x40de0f) - _0x3350dc + _0x595b6c;
    } else if (_0x403c2e === "center") {
      _0x417e80 = (_0x1a4424.left + _0x1a4424.right) / 2 - _0x3350dc + _0x595b6c;
    } else {
      _0x417e80 = sa(_0x8bfff0, _0x403c2e, _0x595b6c);
    }
    _0xe1dfb4 = Is(_0x2faaa2, _0x182532, _0x24641a);
    _0xf1402 = _0x403c2e === "left" ? -ct : ct;
  }
  return {
    titleX: _0x417e80,
    titleY: _0xe1dfb4,
    maxWidth: _0x7064aa,
    rotation: _0xf1402
  };
}
class te extends ti {
  constructor(_0x674f65) {
    super();
    this.id = _0x674f65.id;
    this.type = _0x674f65.type;
    this.options = undefined;
    this.ctx = _0x674f65.ctx;
    this.chart = _0x674f65.chart;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.axis = undefined;
    this.labelRotation = undefined;
    this.min = undefined;
    this.max = undefined;
    this._range = undefined;
    this.ticks = [];
    this._gridLineItems = null;
    this._labelItems = null;
    this._labelSizes = null;
    this._length = 0;
    this._maxLength = 0;
    this._longestTextCache = {};
    this._startPixel = undefined;
    this._endPixel = undefined;
    this._reversePixels = false;
    this._userMax = undefined;
    this._userMin = undefined;
    this._suggestedMax = undefined;
    this._suggestedMin = undefined;
    this._ticksLength = 0;
    this._borderValue = 0;
    this._cache = {};
    this._dataLimitsCached = false;
    this.$context = undefined;
  }
  init(_0x36825b) {
    this.options = _0x36825b.setContext(this.getContext());
    this.axis = _0x36825b.axis;
    this._userMin = this.parse(_0x36825b.min);
    this._userMax = this.parse(_0x36825b.max);
    this._suggestedMin = this.parse(_0x36825b.suggestedMin);
    this._suggestedMax = this.parse(_0x36825b.suggestedMax);
  }
  parse(_0x3cdaf8, _0x565295) {
    return _0x3cdaf8;
  }
  getUserBounds() {
    let {
      _userMin: _0xd5f2c,
      _userMax: _0x2c6fde,
      _suggestedMin: _0x61f0,
      _suggestedMax: _0x2c56a4
    } = this;
    _0xd5f2c = st(_0xd5f2c, Number.POSITIVE_INFINITY);
    _0x2c6fde = st(_0x2c6fde, Number.NEGATIVE_INFINITY);
    _0x61f0 = st(_0x61f0, Number.POSITIVE_INFINITY);
    _0x2c56a4 = st(_0x2c56a4, Number.NEGATIVE_INFINITY);
    return {
      min: st(_0xd5f2c, _0x61f0),
      max: st(_0x2c6fde, _0x2c56a4),
      minDefined: K(_0xd5f2c),
      maxDefined: K(_0x2c6fde)
    };
  }
  getMinMax(_0x1fd9d2) {
    let {
      min: _0x42ce00,
      max: _0x7bb141,
      minDefined: _0x53ac3d,
      maxDefined: _0x4ec58d
    } = this.getUserBounds();
    let _0x56d4a7;
    if (_0x53ac3d && _0x4ec58d) {
      return {
        min: _0x42ce00,
        max: _0x7bb141
      };
    }
    const _0xb0acb0 = this.getMatchingVisibleMetas();
    for (let _0x5e4ddf = 0, _0x21bc04 = _0xb0acb0.length; _0x5e4ddf < _0x21bc04; ++_0x5e4ddf) {
      _0x56d4a7 = _0xb0acb0[_0x5e4ddf].controller.getMinMax(this, _0x1fd9d2);
      if (!_0x53ac3d) {
        _0x42ce00 = Math.min(_0x42ce00, _0x56d4a7.min);
      }
      if (!_0x4ec58d) {
        _0x7bb141 = Math.max(_0x7bb141, _0x56d4a7.max);
      }
    }
    _0x42ce00 = _0x4ec58d && _0x42ce00 > _0x7bb141 ? _0x7bb141 : _0x42ce00;
    _0x7bb141 = _0x53ac3d && _0x42ce00 > _0x7bb141 ? _0x42ce00 : _0x7bb141;
    return {
      min: st(_0x42ce00, st(_0x7bb141, _0x42ce00)),
      max: st(_0x7bb141, st(_0x42ce00, _0x7bb141))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const _0x2a60f1 = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? _0x2a60f1.xLabels : _0x2a60f1.yLabels) || _0x2a60f1.labels || [];
  }
  getLabelItems(_0x4b7e07 = this.chart.chartArea) {
    return this._labelItems ||= this._computeLabelItems(_0x4b7e07);
  }
  beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  }
  beforeUpdate() {
    j(this.options.beforeUpdate, [this]);
  }
  update(_0x2f9e98, _0x3063b8, _0x5e1698) {
    const {
      beginAtZero: _0x59743c,
      grace: _0x2b8fc7,
      ticks: _0x4f88a5
    } = this.options;
    const _0xdaa38e = _0x4f88a5.sampleSize;
    this.beforeUpdate();
    this.maxWidth = _0x2f9e98;
    this.maxHeight = _0x3063b8;
    this._margins = _0x5e1698 = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, _0x5e1698);
    this.ticks = null;
    this._labelSizes = null;
    this._gridLineItems = null;
    this._labelItems = null;
    this.beforeSetDimensions();
    this.setDimensions();
    this.afterSetDimensions();
    this._maxLength = this.isHorizontal() ? this.width + _0x5e1698.left + _0x5e1698.right : this.height + _0x5e1698.top + _0x5e1698.bottom;
    if (!this._dataLimitsCached) {
      this.beforeDataLimits();
      this.determineDataLimits();
      this.afterDataLimits();
      this._range = Gf(this, _0x2b8fc7, _0x59743c);
      this._dataLimitsCached = true;
    }
    this.beforeBuildTicks();
    this.ticks = this.buildTicks() || [];
    this.afterBuildTicks();
    const _0x5d7ca3 = _0xdaa38e < this.ticks.length;
    this._convertTicksToLabels(_0x5d7ca3 ? ca(this.ticks, _0xdaa38e) : this.ticks);
    this.configure();
    this.beforeCalculateLabelRotation();
    this.calculateLabelRotation();
    this.afterCalculateLabelRotation();
    if (_0x4f88a5.display && (_0x4f88a5.autoSkip || _0x4f88a5.source === "auto")) {
      this.ticks = bd(this, this.ticks);
      this._labelSizes = null;
      this.afterAutoSkip();
    }
    if (_0x5d7ca3) {
      this._convertTicksToLabels(this.ticks);
    }
    this.beforeFit();
    this.fit();
    this.afterFit();
    this.afterUpdate();
  }
  configure() {
    let _0x1d7b44 = this.options.reverse;
    let _0x517f6b;
    let _0x10acc1;
    if (this.isHorizontal()) {
      _0x517f6b = this.left;
      _0x10acc1 = this.right;
    } else {
      _0x517f6b = this.top;
      _0x10acc1 = this.bottom;
      _0x1d7b44 = !_0x1d7b44;
    }
    this._startPixel = _0x517f6b;
    this._endPixel = _0x10acc1;
    this._reversePixels = _0x1d7b44;
    this._length = _0x10acc1 - _0x517f6b;
    this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    j(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    j(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = 0;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = 0;
      this.bottom = this.height;
    }
    this.paddingLeft = 0;
    this.paddingTop = 0;
    this.paddingRight = 0;
    this.paddingBottom = 0;
  }
  afterSetDimensions() {
    j(this.options.afterSetDimensions, [this]);
  }
  _callHooks(_0x38d2af) {
    this.chart.notifyPlugins(_0x38d2af, this.getContext());
    j(this.options[_0x38d2af], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    j(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(_0x146ac8) {
    const _0x1db063 = this.options.ticks;
    let _0x575580;
    let _0x5516ae;
    let _0x106629;
    _0x575580 = 0;
    _0x5516ae = _0x146ac8.length;
    for (; _0x575580 < _0x5516ae; _0x575580++) {
      _0x106629 = _0x146ac8[_0x575580];
      _0x106629.label = j(_0x1db063.callback, [_0x106629.value, _0x575580, _0x146ac8], this);
    }
  }
  afterTickToLabelConversion() {
    j(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    j(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const _0x446bbc = this.options;
    const _0x56bb90 = _0x446bbc.ticks;
    const _0x34978e = aa(this.ticks.length, _0x446bbc.ticks.maxTicksLimit);
    const _0x51b026 = _0x56bb90.minRotation || 0;
    const _0x27fba0 = _0x56bb90.maxRotation;
    let _0x41a45a = _0x51b026;
    let _0x2d39ba;
    let _0x3714ae;
    let _0x53d7af;
    if (!this._isVisible() || !_0x56bb90.display || _0x51b026 >= _0x27fba0 || _0x34978e <= 1 || !this.isHorizontal()) {
      this.labelRotation = _0x51b026;
      return;
    }
    const _0x2e5d93 = this._getLabelSizes();
    const _0x3d1438 = _0x2e5d93.widest.width;
    const _0x483fc1 = _0x2e5d93.highest.height;
    const _0x4162fb = vt(this.chart.width - _0x3d1438, 0, this.maxWidth);
    _0x2d39ba = _0x446bbc.offset ? this.maxWidth / _0x34978e : _0x4162fb / (_0x34978e - 1);
    if (_0x3d1438 + 6 > _0x2d39ba) {
      _0x2d39ba = _0x4162fb / (_0x34978e - (_0x446bbc.offset ? 0.5 : 1));
      _0x3714ae = this.maxHeight - be(_0x446bbc.grid) - _0x56bb90.padding - ua(_0x446bbc.title, this.chart.options.font);
      _0x53d7af = Math.sqrt(_0x3d1438 * _0x3d1438 + _0x483fc1 * _0x483fc1);
      _0x41a45a = Zo(Math.min(Math.asin(vt((_0x2e5d93.highest.height + 6) / _0x2d39ba, -1, 1)), Math.asin(vt(_0x3714ae / _0x53d7af, -1, 1)) - Math.asin(vt(_0x483fc1 / _0x53d7af, -1, 1))));
      _0x41a45a = Math.max(_0x51b026, Math.min(_0x27fba0, _0x41a45a));
    }
    this.labelRotation = _0x41a45a;
  }
  afterCalculateLabelRotation() {
    j(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    j(this.options.beforeFit, [this]);
  }
  fit() {
    const _0x144c9c = {
      width: 0,
      height: 0
    };
    const {
      chart: _0x24ff36,
      options: {
        ticks: _0x41f1ff,
        title: _0xc90634,
        grid: _0x17dada
      }
    } = this;
    const _0x555099 = this._isVisible();
    const _0x32c258 = this.isHorizontal();
    if (_0x555099) {
      const _0x1f78fc = ua(_0xc90634, _0x24ff36.options.font);
      if (_0x32c258) {
        _0x144c9c.width = this.maxWidth;
        _0x144c9c.height = be(_0x17dada) + _0x1f78fc;
      } else {
        _0x144c9c.height = this.maxHeight;
        _0x144c9c.width = be(_0x17dada) + _0x1f78fc;
      }
      if (_0x41f1ff.display && this.ticks.length) {
        const {
          first: _0x4893f6,
          last: _0x3d9ead,
          widest: _0x2399d8,
          highest: _0x4b6d5b
        } = this._getLabelSizes();
        const _0x150981 = _0x41f1ff.padding * 2;
        const _0x3fef54 = At(this.labelRotation);
        const _0xf97435 = Math.cos(_0x3fef54);
        const _0x41f352 = Math.sin(_0x3fef54);
        if (_0x32c258) {
          const _0x3f171c = _0x41f1ff.mirror ? 0 : _0x41f352 * _0x2399d8.width + _0xf97435 * _0x4b6d5b.height;
          _0x144c9c.height = Math.min(this.maxHeight, _0x144c9c.height + _0x3f171c + _0x150981);
        } else {
          const _0x11bb27 = _0x41f1ff.mirror ? 0 : _0xf97435 * _0x2399d8.width + _0x41f352 * _0x4b6d5b.height;
          _0x144c9c.width = Math.min(this.maxWidth, _0x144c9c.width + _0x11bb27 + _0x150981);
        }
        this._calculatePadding(_0x4893f6, _0x3d9ead, _0x41f352, _0xf97435);
      }
    }
    this._handleMargins();
    if (_0x32c258) {
      this.width = this._length = _0x24ff36.width - this._margins.left - this._margins.right;
      this.height = _0x144c9c.height;
    } else {
      this.width = _0x144c9c.width;
      this.height = this._length = _0x24ff36.height - this._margins.top - this._margins.bottom;
    }
  }
  _calculatePadding(_0x1c7a59, _0x296d1e, _0x4fc553, _0xae30b0) {
    const {
      ticks: {
        align: _0x587e79,
        padding: _0x283c5f
      },
      position: _0x5a945c
    } = this.options;
    const _0x12f407 = this.labelRotation !== 0;
    const _0x4f962e = _0x5a945c !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const _0x39e199 = this.getPixelForTick(0) - this.left;
      const _0x3710cc = this.right - this.getPixelForTick(this.ticks.length - 1);
      let _0x356426 = 0;
      let _0x13b53a = 0;
      if (_0x12f407) {
        if (_0x4f962e) {
          _0x356426 = _0xae30b0 * _0x1c7a59.width;
          _0x13b53a = _0x4fc553 * _0x296d1e.height;
        } else {
          _0x356426 = _0x4fc553 * _0x1c7a59.height;
          _0x13b53a = _0xae30b0 * _0x296d1e.width;
        }
      } else if (_0x587e79 === "start") {
        _0x13b53a = _0x296d1e.width;
      } else if (_0x587e79 === "end") {
        _0x356426 = _0x1c7a59.width;
      } else if (_0x587e79 !== "inner") {
        _0x356426 = _0x1c7a59.width / 2;
        _0x13b53a = _0x296d1e.width / 2;
      }
      this.paddingLeft = Math.max((_0x356426 - _0x39e199 + _0x283c5f) * this.width / (this.width - _0x39e199), 0);
      this.paddingRight = Math.max((_0x13b53a - _0x3710cc + _0x283c5f) * this.width / (this.width - _0x3710cc), 0);
    } else {
      let _0xdaee90 = _0x296d1e.height / 2;
      let _0x44384a = _0x1c7a59.height / 2;
      if (_0x587e79 === "start") {
        _0xdaee90 = 0;
        _0x44384a = _0x1c7a59.height;
      } else if (_0x587e79 === "end") {
        _0xdaee90 = _0x296d1e.height;
        _0x44384a = 0;
      }
      this.paddingTop = _0xdaee90 + _0x283c5f;
      this.paddingBottom = _0x44384a + _0x283c5f;
    }
  }
  _handleMargins() {
    if (this._margins) {
      this._margins.left = Math.max(this.paddingLeft, this._margins.left);
      this._margins.top = Math.max(this.paddingTop, this._margins.top);
      this._margins.right = Math.max(this.paddingRight, this._margins.right);
      this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
    }
  }
  afterFit() {
    j(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {
      axis: _0x111688,
      position: _0x1a39a0
    } = this.options;
    return _0x1a39a0 === "top" || _0x1a39a0 === "bottom" || _0x111688 === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(_0x1977a7) {
    this.beforeTickToLabelConversion();
    this.generateTickLabels(_0x1977a7);
    let _0x1f909e;
    let _0x4901ed;
    _0x1f909e = 0;
    _0x4901ed = _0x1977a7.length;
    for (; _0x1f909e < _0x4901ed; _0x1f909e++) {
      if (z(_0x1977a7[_0x1f909e].label)) {
        _0x1977a7.splice(_0x1f909e, 1);
        _0x4901ed--;
        _0x1f909e--;
      }
    }
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let _0x3d8e87 = this._labelSizes;
    if (!_0x3d8e87) {
      const _0x3c36d5 = this.options.ticks.sampleSize;
      let _0x207d96 = this.ticks;
      if (_0x3c36d5 < _0x207d96.length) {
        _0x207d96 = ca(_0x207d96, _0x3c36d5);
      }
      this._labelSizes = _0x3d8e87 = this._computeLabelSizes(_0x207d96, _0x207d96.length, this.options.ticks.maxTicksLimit);
    }
    return _0x3d8e87;
  }
  _computeLabelSizes(_0x3f1538, _0x40f91a, _0x365df8) {
    const {
      ctx: _0x2d7f87,
      _longestTextCache: _0x332ad9
    } = this;
    const _0x3cae8f = [];
    const _0x273cf8 = [];
    const _0x290f6d = Math.floor(_0x40f91a / aa(_0x40f91a, _0x365df8));
    let _0xe34497 = 0;
    let _0xe338bc = 0;
    let _0x4c690d;
    let _0x38f833;
    let _0x52502c;
    let _0x480204;
    let _0x382414;
    let _0x5ad762;
    let _0x9dcb39;
    let _0x2b01ef;
    let _0x1b0063;
    let _0x15a638;
    let _0x1d0381;
    for (_0x4c690d = 0; _0x4c690d < _0x40f91a; _0x4c690d += _0x290f6d) {
      _0x480204 = _0x3f1538[_0x4c690d].label;
      _0x382414 = this._resolveTickFontOptions(_0x4c690d);
      _0x2d7f87.font = _0x5ad762 = _0x382414.string;
      _0x9dcb39 = _0x332ad9[_0x5ad762] = _0x332ad9[_0x5ad762] || {
        data: {},
        gc: []
      };
      _0x2b01ef = _0x382414.lineHeight;
      _0x1b0063 = _0x15a638 = 0;
      if (!z(_0x480204) && !H(_0x480204)) {
        _0x1b0063 = ur(_0x2d7f87, _0x9dcb39.data, _0x9dcb39.gc, _0x1b0063, _0x480204);
        _0x15a638 = _0x2b01ef;
      } else if (H(_0x480204)) {
        _0x38f833 = 0;
        _0x52502c = _0x480204.length;
        for (; _0x38f833 < _0x52502c; ++_0x38f833) {
          _0x1d0381 = _0x480204[_0x38f833];
          if (!z(_0x1d0381) && !H(_0x1d0381)) {
            _0x1b0063 = ur(_0x2d7f87, _0x9dcb39.data, _0x9dcb39.gc, _0x1b0063, _0x1d0381);
            _0x15a638 += _0x2b01ef;
          }
        }
      }
      _0x3cae8f.push(_0x1b0063);
      _0x273cf8.push(_0x15a638);
      _0xe34497 = Math.max(_0x1b0063, _0xe34497);
      _0xe338bc = Math.max(_0x15a638, _0xe338bc);
    }
    Td(_0x332ad9, _0x40f91a);
    const _0x200f5d = _0x3cae8f.indexOf(_0xe34497);
    const _0x287df8 = _0x273cf8.indexOf(_0xe338bc);
    const _0x1fe11 = _0x2a5579 => ({
      width: _0x3cae8f[_0x2a5579] || 0,
      height: _0x273cf8[_0x2a5579] || 0
    });
    return {
      first: _0x1fe11(0),
      last: _0x1fe11(_0x40f91a - 1),
      widest: _0x1fe11(_0x200f5d),
      highest: _0x1fe11(_0x287df8),
      widths: _0x3cae8f,
      heights: _0x273cf8
    };
  }
  getLabelForValue(_0x3d87ca) {
    return _0x3d87ca;
  }
  getPixelForValue(_0x48e830, _0x94d69b) {
    return NaN;
  }
  getValueForPixel(_0x1e0564) {}
  getPixelForTick(_0x5d6c6c) {
    const _0x1c952f = this.ticks;
    if (_0x5d6c6c < 0 || _0x5d6c6c > _0x1c952f.length - 1) {
      return null;
    } else {
      return this.getPixelForValue(_0x1c952f[_0x5d6c6c].value);
    }
  }
  getPixelForDecimal(_0x4a5c2a) {
    if (this._reversePixels) {
      _0x4a5c2a = 1 - _0x4a5c2a;
    }
    const _0x47fc02 = this._startPixel + _0x4a5c2a * this._length;
    return yf(this._alignToPixels ? Ut(this.chart, _0x47fc02, 0) : _0x47fc02);
  }
  getDecimalForPixel(_0x1e8bed) {
    const _0x116fc3 = (_0x1e8bed - this._startPixel) / this._length;
    if (this._reversePixels) {
      return 1 - _0x116fc3;
    } else {
      return _0x116fc3;
    }
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {
      min: _0x41a7df,
      max: _0x3a8f44
    } = this;
    if (_0x41a7df < 0 && _0x3a8f44 < 0) {
      return _0x3a8f44;
    } else if (_0x41a7df > 0 && _0x3a8f44 > 0) {
      return _0x41a7df;
    } else {
      return 0;
    }
  }
  getContext(_0x26f9e1) {
    const _0x199d64 = this.ticks || [];
    if (_0x26f9e1 >= 0 && _0x26f9e1 < _0x199d64.length) {
      const _0x807ba7 = _0x199d64[_0x26f9e1];
      return _0x807ba7.$context ||= kd(this.getContext(), _0x26f9e1, _0x807ba7);
    }
    return this.$context ||= Md(this.chart.getContext(), this);
  }
  _tickSize() {
    const _0x28a030 = this.options.ticks;
    const _0x442798 = At(this.labelRotation);
    const _0x18a932 = Math.abs(Math.cos(_0x442798));
    const _0xbcfed9 = Math.abs(Math.sin(_0x442798));
    const _0xb55abe = this._getLabelSizes();
    const _0x4ec614 = _0x28a030.autoSkipPadding || 0;
    const _0x50ffdb = _0xb55abe ? _0xb55abe.widest.width + _0x4ec614 : 0;
    const _0x2d63cd = _0xb55abe ? _0xb55abe.highest.height + _0x4ec614 : 0;
    if (this.isHorizontal()) {
      if (_0x2d63cd * _0x18a932 > _0x50ffdb * _0xbcfed9) {
        return _0x50ffdb / _0x18a932;
      } else {
        return _0x2d63cd / _0xbcfed9;
      }
    } else if (_0x2d63cd * _0xbcfed9 < _0x50ffdb * _0x18a932) {
      return _0x2d63cd / _0x18a932;
    } else {
      return _0x50ffdb / _0xbcfed9;
    }
  }
  _isVisible() {
    const _0x180969 = this.options.display;
    if (_0x180969 !== "auto") {
      return !!_0x180969;
    } else {
      return this.getMatchingVisibleMetas().length > 0;
    }
  }
  _computeGridLineItems(_0x25d88d) {
    const _0x163164 = this.axis;
    const _0x442341 = this.chart;
    const _0x6241b8 = this.options;
    const {
      grid: _0x130f7b,
      position: _0xaca011,
      border: _0x336598
    } = _0x6241b8;
    const _0x30974c = _0x130f7b.offset;
    const _0x59cdb0 = this.isHorizontal();
    const _0x535272 = this.ticks.length + (_0x30974c ? 1 : 0);
    const _0x1411c3 = be(_0x130f7b);
    const _0x3a6a06 = [];
    const _0x1a5a34 = _0x336598.setContext(this.getContext());
    const _0x1519f9 = _0x1a5a34.display ? _0x1a5a34.width : 0;
    const _0x2d68fb = _0x1519f9 / 2;
    const _0x45e557 = function (_0x1133eb) {
      return Ut(_0x442341, _0x1133eb, _0x1519f9);
    };
    let _0xe2b3a5;
    let _0x25058e;
    let _0x42fc25;
    let _0x32bad3;
    let _0xff4ddf;
    let _0x409484;
    let _0x3739e9;
    let _0x5da46d;
    let _0x19241c;
    let _0xa54a3d;
    let _0x113ca8;
    let _0x3ee8ea;
    if (_0xaca011 === "top") {
      _0xe2b3a5 = _0x45e557(this.bottom);
      _0x409484 = this.bottom - _0x1411c3;
      _0x5da46d = _0xe2b3a5 - _0x2d68fb;
      _0xa54a3d = _0x45e557(_0x25d88d.top) + _0x2d68fb;
      _0x3ee8ea = _0x25d88d.bottom;
    } else if (_0xaca011 === "bottom") {
      _0xe2b3a5 = _0x45e557(this.top);
      _0xa54a3d = _0x25d88d.top;
      _0x3ee8ea = _0x45e557(_0x25d88d.bottom) - _0x2d68fb;
      _0x409484 = _0xe2b3a5 + _0x2d68fb;
      _0x5da46d = this.top + _0x1411c3;
    } else if (_0xaca011 === "left") {
      _0xe2b3a5 = _0x45e557(this.right);
      _0xff4ddf = this.right - _0x1411c3;
      _0x3739e9 = _0xe2b3a5 - _0x2d68fb;
      _0x19241c = _0x45e557(_0x25d88d.left) + _0x2d68fb;
      _0x113ca8 = _0x25d88d.right;
    } else if (_0xaca011 === "right") {
      _0xe2b3a5 = _0x45e557(this.left);
      _0x19241c = _0x25d88d.left;
      _0x113ca8 = _0x45e557(_0x25d88d.right) - _0x2d68fb;
      _0xff4ddf = _0xe2b3a5 + _0x2d68fb;
      _0x3739e9 = this.left + _0x1411c3;
    } else if (_0x163164 === "x") {
      if (_0xaca011 === "center") {
        _0xe2b3a5 = _0x45e557((_0x25d88d.top + _0x25d88d.bottom) / 2 + 0.5);
      } else if (C(_0xaca011)) {
        const _0x597efe = Object.keys(_0xaca011)[0];
        const _0x9bdde6 = _0xaca011[_0x597efe];
        _0xe2b3a5 = _0x45e557(this.chart.scales[_0x597efe].getPixelForValue(_0x9bdde6));
      }
      _0xa54a3d = _0x25d88d.top;
      _0x3ee8ea = _0x25d88d.bottom;
      _0x409484 = _0xe2b3a5 + _0x2d68fb;
      _0x5da46d = _0x409484 + _0x1411c3;
    } else if (_0x163164 === "y") {
      if (_0xaca011 === "center") {
        _0xe2b3a5 = _0x45e557((_0x25d88d.left + _0x25d88d.right) / 2);
      } else if (C(_0xaca011)) {
        const _0x464855 = Object.keys(_0xaca011)[0];
        const _0x3bfa7d = _0xaca011[_0x464855];
        _0xe2b3a5 = _0x45e557(this.chart.scales[_0x464855].getPixelForValue(_0x3bfa7d));
      }
      _0xff4ddf = _0xe2b3a5 - _0x2d68fb;
      _0x3739e9 = _0xff4ddf - _0x1411c3;
      _0x19241c = _0x25d88d.left;
      _0x113ca8 = _0x25d88d.right;
    }
    const _0x2dd345 = I(_0x6241b8.ticks.maxTicksLimit, _0x535272);
    const _0x13c13c = Math.max(1, Math.ceil(_0x535272 / _0x2dd345));
    for (_0x25058e = 0; _0x25058e < _0x535272; _0x25058e += _0x13c13c) {
      const _0x2068c5 = this.getContext(_0x25058e);
      const _0x9bd6ff = _0x130f7b.setContext(_0x2068c5);
      const _0x4bd3ad = _0x336598.setContext(_0x2068c5);
      const _0x32b068 = _0x9bd6ff.lineWidth;
      const _0x175ae0 = _0x9bd6ff.color;
      const _0x2bbfc7 = _0x4bd3ad.dash || [];
      const _0x2e9ef2 = _0x4bd3ad.dashOffset;
      const _0x39d062 = _0x9bd6ff.tickWidth;
      const _0x49aa06 = _0x9bd6ff.tickColor;
      const _0x55e9a5 = _0x9bd6ff.tickBorderDash || [];
      const _0x5f4856 = _0x9bd6ff.tickBorderDashOffset;
      _0x42fc25 = Sd(this, _0x25058e, _0x30974c);
      if (_0x42fc25 !== undefined) {
        _0x32bad3 = Ut(_0x442341, _0x42fc25, _0x32b068);
        if (_0x59cdb0) {
          _0xff4ddf = _0x3739e9 = _0x19241c = _0x113ca8 = _0x32bad3;
        } else {
          _0x409484 = _0x5da46d = _0xa54a3d = _0x3ee8ea = _0x32bad3;
        }
        _0x3a6a06.push({
          tx1: _0xff4ddf,
          ty1: _0x409484,
          tx2: _0x3739e9,
          ty2: _0x5da46d,
          x1: _0x19241c,
          y1: _0xa54a3d,
          x2: _0x113ca8,
          y2: _0x3ee8ea,
          width: _0x32b068,
          color: _0x175ae0,
          borderDash: _0x2bbfc7,
          borderDashOffset: _0x2e9ef2,
          tickWidth: _0x39d062,
          tickColor: _0x49aa06,
          tickBorderDash: _0x55e9a5,
          tickBorderDashOffset: _0x5f4856
        });
      }
    }
    this._ticksLength = _0x535272;
    this._borderValue = _0xe2b3a5;
    return _0x3a6a06;
  }
  _computeLabelItems(_0x48046f) {
    const _0x2bfbdf = this.axis;
    const _0x1a0096 = this.options;
    const {
      position: _0x46e25f,
      ticks: _0x51e5f4
    } = _0x1a0096;
    const _0xf93b85 = this.isHorizontal();
    const _0x1acaab = this.ticks;
    const {
      align: _0x4fb3d4,
      crossAlign: _0x3d5f1b,
      padding: _0x27f59a,
      mirror: _0x17f3e4
    } = _0x51e5f4;
    const _0x194c2c = be(_0x1a0096.grid);
    const _0x221446 = _0x194c2c + _0x27f59a;
    const _0x536115 = _0x17f3e4 ? -_0x27f59a : _0x221446;
    const _0x30eb2d = -At(this.labelRotation);
    const _0x1f2b48 = [];
    let _0x42f798;
    let _0x190995;
    let _0x3ffa77;
    let _0x55bf46;
    let _0x1b39b7;
    let _0x529904;
    let _0x460a17;
    let _0x47a883;
    let _0x29728d;
    let _0x44978c;
    let _0x1e4614;
    let _0x446e78;
    let _0x2ceca0 = "middle";
    if (_0x46e25f === "top") {
      _0x529904 = this.bottom - _0x536115;
      _0x460a17 = this._getXAxisLabelAlignment();
    } else if (_0x46e25f === "bottom") {
      _0x529904 = this.top + _0x536115;
      _0x460a17 = this._getXAxisLabelAlignment();
    } else if (_0x46e25f === "left") {
      const _0x32ea8 = this._getYAxisLabelAlignment(_0x194c2c);
      _0x460a17 = _0x32ea8.textAlign;
      _0x1b39b7 = _0x32ea8.x;
    } else if (_0x46e25f === "right") {
      const _0x1dd5e6 = this._getYAxisLabelAlignment(_0x194c2c);
      _0x460a17 = _0x1dd5e6.textAlign;
      _0x1b39b7 = _0x1dd5e6.x;
    } else if (_0x2bfbdf === "x") {
      if (_0x46e25f === "center") {
        _0x529904 = (_0x48046f.top + _0x48046f.bottom) / 2 + _0x221446;
      } else if (C(_0x46e25f)) {
        const _0x23916a = Object.keys(_0x46e25f)[0];
        const _0x43286d = _0x46e25f[_0x23916a];
        _0x529904 = this.chart.scales[_0x23916a].getPixelForValue(_0x43286d) + _0x221446;
      }
      _0x460a17 = this._getXAxisLabelAlignment();
    } else if (_0x2bfbdf === "y") {
      if (_0x46e25f === "center") {
        _0x1b39b7 = (_0x48046f.left + _0x48046f.right) / 2 - _0x221446;
      } else if (C(_0x46e25f)) {
        const _0x83edcf = Object.keys(_0x46e25f)[0];
        const _0x38749b = _0x46e25f[_0x83edcf];
        _0x1b39b7 = this.chart.scales[_0x83edcf].getPixelForValue(_0x38749b);
      }
      _0x460a17 = this._getYAxisLabelAlignment(_0x194c2c).textAlign;
    }
    if (_0x2bfbdf === "y") {
      if (_0x4fb3d4 === "start") {
        _0x2ceca0 = "top";
      } else if (_0x4fb3d4 === "end") {
        _0x2ceca0 = "bottom";
      }
    }
    const _0x3e15ba = this._getLabelSizes();
    _0x42f798 = 0;
    _0x190995 = _0x1acaab.length;
    for (; _0x42f798 < _0x190995; ++_0x42f798) {
      _0x3ffa77 = _0x1acaab[_0x42f798];
      _0x55bf46 = _0x3ffa77.label;
      const _0x466552 = _0x51e5f4.setContext(this.getContext(_0x42f798));
      _0x47a883 = this.getPixelForTick(_0x42f798) + _0x51e5f4.labelOffset;
      _0x29728d = this._resolveTickFontOptions(_0x42f798);
      _0x44978c = _0x29728d.lineHeight;
      _0x1e4614 = H(_0x55bf46) ? _0x55bf46.length : 1;
      const _0x4ea2d1 = _0x1e4614 / 2;
      const _0x3f9096 = _0x466552.color;
      const _0x4dca4f = _0x466552.textStrokeColor;
      const _0x1ccf71 = _0x466552.textStrokeWidth;
      let _0x1ca8ee = _0x460a17;
      if (_0xf93b85) {
        _0x1b39b7 = _0x47a883;
        if (_0x460a17 === "inner") {
          if (_0x42f798 === _0x190995 - 1) {
            _0x1ca8ee = this.options.reverse ? "left" : "right";
          } else if (_0x42f798 === 0) {
            _0x1ca8ee = this.options.reverse ? "right" : "left";
          } else {
            _0x1ca8ee = "center";
          }
        }
        if (_0x46e25f === "top") {
          if (_0x3d5f1b === "near" || _0x30eb2d !== 0) {
            _0x446e78 = -_0x1e4614 * _0x44978c + _0x44978c / 2;
          } else if (_0x3d5f1b === "center") {
            _0x446e78 = -_0x3e15ba.highest.height / 2 - _0x4ea2d1 * _0x44978c + _0x44978c;
          } else {
            _0x446e78 = -_0x3e15ba.highest.height + _0x44978c / 2;
          }
        } else if (_0x3d5f1b === "near" || _0x30eb2d !== 0) {
          _0x446e78 = _0x44978c / 2;
        } else if (_0x3d5f1b === "center") {
          _0x446e78 = _0x3e15ba.highest.height / 2 - _0x4ea2d1 * _0x44978c;
        } else {
          _0x446e78 = _0x3e15ba.highest.height - _0x1e4614 * _0x44978c;
        }
        if (_0x17f3e4) {
          _0x446e78 *= -1;
        }
        if (_0x30eb2d !== 0 && !_0x466552.showLabelBackdrop) {
          _0x1b39b7 += _0x44978c / 2 * Math.sin(_0x30eb2d);
        }
      } else {
        _0x529904 = _0x47a883;
        _0x446e78 = (1 - _0x1e4614) * _0x44978c / 2;
      }
      let _0x118382;
      if (_0x466552.showLabelBackdrop) {
        const _0x128f64 = kt(_0x466552.backdropPadding);
        const _0x40d771 = _0x3e15ba.heights[_0x42f798];
        const _0x16cc9d = _0x3e15ba.widths[_0x42f798];
        let _0x1bc44a = _0x446e78 - _0x128f64.top;
        let _0x3869b6 = 0 - _0x128f64.left;
        switch (_0x2ceca0) {
          case "middle":
            _0x1bc44a -= _0x40d771 / 2;
            break;
          case "bottom":
            _0x1bc44a -= _0x40d771;
            break;
        }
        switch (_0x460a17) {
          case "center":
            _0x3869b6 -= _0x16cc9d / 2;
            break;
          case "right":
            _0x3869b6 -= _0x16cc9d;
            break;
          case "inner":
            if (_0x42f798 === _0x190995 - 1) {
              _0x3869b6 -= _0x16cc9d;
            } else if (_0x42f798 > 0) {
              _0x3869b6 -= _0x16cc9d / 2;
            }
            break;
        }
        _0x118382 = {
          left: _0x3869b6,
          top: _0x1bc44a,
          width: _0x16cc9d + _0x128f64.width,
          height: _0x40d771 + _0x128f64.height,
          color: _0x466552.backdropColor
        };
      }
      _0x1f2b48.push({
        label: _0x55bf46,
        font: _0x29728d,
        textOffset: _0x446e78,
        options: {
          rotation: _0x30eb2d,
          color: _0x3f9096,
          strokeColor: _0x4dca4f,
          strokeWidth: _0x1ccf71,
          textAlign: _0x1ca8ee,
          textBaseline: _0x2ceca0,
          translation: [_0x1b39b7, _0x529904],
          backdrop: _0x118382
        }
      });
    }
    return _0x1f2b48;
  }
  _getXAxisLabelAlignment() {
    const {
      position: _0x1cb628,
      ticks: _0x1cc614
    } = this.options;
    if (-At(this.labelRotation)) {
      if (_0x1cb628 === "top") {
        return "left";
      } else {
        return "right";
      }
    }
    let _0x4937d9 = "center";
    if (_0x1cc614.align === "start") {
      _0x4937d9 = "left";
    } else if (_0x1cc614.align === "end") {
      _0x4937d9 = "right";
    } else if (_0x1cc614.align === "inner") {
      _0x4937d9 = "inner";
    }
    return _0x4937d9;
  }
  _getYAxisLabelAlignment(_0x4a47ee) {
    const {
      position: _0x139db7,
      ticks: {
        crossAlign: _0x2714b5,
        mirror: _0x170474,
        padding: _0xded1c7
      }
    } = this.options;
    const _0x3d0f37 = this._getLabelSizes();
    const _0x1db76e = _0x4a47ee + _0xded1c7;
    const _0x2d907f = _0x3d0f37.widest.width;
    let _0x44f67e;
    let _0x5f114a;
    if (_0x139db7 === "left") {
      if (_0x170474) {
        _0x5f114a = this.right + _0xded1c7;
        if (_0x2714b5 === "near") {
          _0x44f67e = "left";
        } else if (_0x2714b5 === "center") {
          _0x44f67e = "center";
          _0x5f114a += _0x2d907f / 2;
        } else {
          _0x44f67e = "right";
          _0x5f114a += _0x2d907f;
        }
      } else {
        _0x5f114a = this.right - _0x1db76e;
        if (_0x2714b5 === "near") {
          _0x44f67e = "right";
        } else if (_0x2714b5 === "center") {
          _0x44f67e = "center";
          _0x5f114a -= _0x2d907f / 2;
        } else {
          _0x44f67e = "left";
          _0x5f114a = this.left;
        }
      }
    } else if (_0x139db7 === "right") {
      if (_0x170474) {
        _0x5f114a = this.left + _0xded1c7;
        if (_0x2714b5 === "near") {
          _0x44f67e = "right";
        } else if (_0x2714b5 === "center") {
          _0x44f67e = "center";
          _0x5f114a -= _0x2d907f / 2;
        } else {
          _0x44f67e = "left";
          _0x5f114a -= _0x2d907f;
        }
      } else {
        _0x5f114a = this.left + _0x1db76e;
        if (_0x2714b5 === "near") {
          _0x44f67e = "left";
        } else if (_0x2714b5 === "center") {
          _0x44f67e = "center";
          _0x5f114a += _0x2d907f / 2;
        } else {
          _0x44f67e = "right";
          _0x5f114a = this.right;
        }
      }
    } else {
      _0x44f67e = "right";
    }
    return {
      textAlign: _0x44f67e,
      x: _0x5f114a
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) {
      return;
    }
    const _0x538441 = this.chart;
    const _0x3ea59c = this.options.position;
    if (_0x3ea59c === "left" || _0x3ea59c === "right") {
      return {
        top: 0,
        left: this.left,
        bottom: _0x538441.height,
        right: this.right
      };
    }
    if (_0x3ea59c === "top" || _0x3ea59c === "bottom") {
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: _0x538441.width
      };
    }
  }
  drawBackground() {
    const {
      ctx: _0x3b7ad6,
      options: {
        backgroundColor: _0x2a87f1
      },
      left: _0x46b786,
      top: _0x47c2be,
      width: _0x4996f9,
      height: _0x853103
    } = this;
    if (_0x2a87f1) {
      _0x3b7ad6.save();
      _0x3b7ad6.fillStyle = _0x2a87f1;
      _0x3b7ad6.fillRect(_0x46b786, _0x47c2be, _0x4996f9, _0x853103);
      _0x3b7ad6.restore();
    }
  }
  getLineWidthForValue(_0x179f2b) {
    const _0x3bf8e6 = this.options.grid;
    if (!this._isVisible() || !_0x3bf8e6.display) {
      return 0;
    }
    const _0xa904d8 = this.ticks.findIndex(_0x49a0ea => _0x49a0ea.value === _0x179f2b);
    if (_0xa904d8 >= 0) {
      return _0x3bf8e6.setContext(this.getContext(_0xa904d8)).lineWidth;
    } else {
      return 0;
    }
  }
  drawGrid(_0x1cdfaa) {
    const _0x57606b = this.options.grid;
    const _0x4b02ca = this.ctx;
    const _0x410039 = this._gridLineItems ||= this._computeGridLineItems(_0x1cdfaa);
    let _0x22747e;
    let _0x46379b;
    const _0x30e05e = (_0x21dd40, _0x3a81ed, _0x29fb52) => {
      if (!!_0x29fb52.width && !!_0x29fb52.color) {
        _0x4b02ca.save();
        _0x4b02ca.lineWidth = _0x29fb52.width;
        _0x4b02ca.strokeStyle = _0x29fb52.color;
        _0x4b02ca.setLineDash(_0x29fb52.borderDash || []);
        _0x4b02ca.lineDashOffset = _0x29fb52.borderDashOffset;
        _0x4b02ca.beginPath();
        _0x4b02ca.moveTo(_0x21dd40.x, _0x21dd40.y);
        _0x4b02ca.lineTo(_0x3a81ed.x, _0x3a81ed.y);
        _0x4b02ca.stroke();
        _0x4b02ca.restore();
      }
    };
    if (_0x57606b.display) {
      _0x22747e = 0;
      _0x46379b = _0x410039.length;
      for (; _0x22747e < _0x46379b; ++_0x22747e) {
        const _0x51aeca = _0x410039[_0x22747e];
        if (_0x57606b.drawOnChartArea) {
          _0x30e05e({
            x: _0x51aeca.x1,
            y: _0x51aeca.y1
          }, {
            x: _0x51aeca.x2,
            y: _0x51aeca.y2
          }, _0x51aeca);
        }
        if (_0x57606b.drawTicks) {
          _0x30e05e({
            x: _0x51aeca.tx1,
            y: _0x51aeca.ty1
          }, {
            x: _0x51aeca.tx2,
            y: _0x51aeca.ty2
          }, {
            color: _0x51aeca.tickColor,
            width: _0x51aeca.tickWidth,
            borderDash: _0x51aeca.tickBorderDash,
            borderDashOffset: _0x51aeca.tickBorderDashOffset
          });
        }
      }
    }
  }
  drawBorder() {
    const {
      chart: _0xe11b55,
      ctx: _0x7cee5e,
      options: {
        border: _0x534ec6,
        grid: _0xa47a76
      }
    } = this;
    const _0x7b1bc0 = _0x534ec6.setContext(this.getContext());
    const _0x316ff2 = _0x534ec6.display ? _0x7b1bc0.width : 0;
    if (!_0x316ff2) {
      return;
    }
    const _0x1baf68 = _0xa47a76.setContext(this.getContext(0)).lineWidth;
    const _0x1dc9f7 = this._borderValue;
    let _0x53dc2e;
    let _0xbf9a99;
    let _0x254c17;
    let _0x479535;
    if (this.isHorizontal()) {
      _0x53dc2e = Ut(_0xe11b55, this.left, _0x316ff2) - _0x316ff2 / 2;
      _0xbf9a99 = Ut(_0xe11b55, this.right, _0x1baf68) + _0x1baf68 / 2;
      _0x254c17 = _0x479535 = _0x1dc9f7;
    } else {
      _0x254c17 = Ut(_0xe11b55, this.top, _0x316ff2) - _0x316ff2 / 2;
      _0x479535 = Ut(_0xe11b55, this.bottom, _0x1baf68) + _0x1baf68 / 2;
      _0x53dc2e = _0xbf9a99 = _0x1dc9f7;
    }
    _0x7cee5e.save();
    _0x7cee5e.lineWidth = _0x7b1bc0.width;
    _0x7cee5e.strokeStyle = _0x7b1bc0.color;
    _0x7cee5e.beginPath();
    _0x7cee5e.moveTo(_0x53dc2e, _0x254c17);
    _0x7cee5e.lineTo(_0xbf9a99, _0x479535);
    _0x7cee5e.stroke();
    _0x7cee5e.restore();
  }
  drawLabels(_0x4dd34c) {
    if (!this.options.ticks.display) {
      return;
    }
    const _0x2ae891 = this.ctx;
    const _0x2a4eb7 = this._computeLabelArea();
    if (_0x2a4eb7) {
      bu(_0x2ae891, _0x2a4eb7);
    }
    const _0x4e95c7 = this.getLabelItems(_0x4dd34c);
    for (const _0x5ee995 of _0x4e95c7) {
      const _0x5583be = _0x5ee995.options;
      const _0x5f4a8d = _0x5ee995.font;
      const _0x395a42 = _0x5ee995.label;
      const _0x416f10 = _0x5ee995.textOffset;
      lr(_0x2ae891, _0x395a42, 0, _0x416f10, _0x5f4a8d, _0x5583be);
    }
    if (_0x2a4eb7) {
      _u(_0x2ae891);
    }
  }
  drawTitle() {
    const {
      ctx: _0x47a276,
      options: {
        position: _0x5cd5a1,
        title: _0x407b50,
        reverse: _0x50f30b
      }
    } = this;
    if (!_0x407b50.display) {
      return;
    }
    const _0x3781cc = le(_0x407b50.font);
    const _0x19e9dd = kt(_0x407b50.padding);
    const _0x3089ea = _0x407b50.align;
    let _0x2e631e = _0x3781cc.lineHeight / 2;
    if (_0x5cd5a1 === "bottom" || _0x5cd5a1 === "center" || C(_0x5cd5a1)) {
      _0x2e631e += _0x19e9dd.bottom;
      if (H(_0x407b50.text)) {
        _0x2e631e += _0x3781cc.lineHeight * (_0x407b50.text.length - 1);
      }
    } else {
      _0x2e631e += _0x19e9dd.top;
    }
    const {
      titleX: _0x200500,
      titleY: _0xadea60,
      maxWidth: _0x33cf75,
      rotation: _0x103263
    } = $d(this, _0x2e631e, _0x5cd5a1, _0x3089ea);
    lr(_0x47a276, _0x407b50.text, 0, 0, _0x3781cc, {
      color: _0x407b50.color,
      maxWidth: _0x33cf75,
      rotation: _0x103263,
      textAlign: Dd(_0x3089ea, _0x5cd5a1, _0x50f30b),
      textBaseline: "middle",
      translation: [_0x200500, _0xadea60]
    });
  }
  draw(_0x44379e) {
    if (this._isVisible()) {
      this.drawBackground();
      this.drawGrid(_0x44379e);
      this.drawBorder();
      this.drawTitle();
      this.drawLabels(_0x44379e);
    }
  }
  _layers() {
    const _0x86f748 = this.options;
    const _0x40d495 = _0x86f748.ticks && _0x86f748.ticks.z || 0;
    const _0x25781b = I(_0x86f748.grid && _0x86f748.grid.z, -1);
    const _0x53cbeb = I(_0x86f748.border && _0x86f748.border.z, 0);
    if (!this._isVisible() || this.draw !== te.prototype.draw) {
      return [{
        z: _0x40d495,
        draw: _0x1c484b => {
          this.draw(_0x1c484b);
        }
      }];
    } else {
      return [{
        z: _0x25781b,
        draw: _0xf87f26 => {
          this.drawBackground();
          this.drawGrid(_0xf87f26);
          this.drawTitle();
        }
      }, {
        z: _0x53cbeb,
        draw: () => {
          this.drawBorder();
        }
      }, {
        z: _0x40d495,
        draw: _0x3da9c7 => {
          this.drawLabels(_0x3da9c7);
        }
      }];
    }
  }
  getMatchingVisibleMetas(_0x1be759) {
    const _0x233538 = this.chart.getSortedVisibleDatasetMetas();
    const _0xfb0963 = this.axis + "AxisID";
    const _0x573019 = [];
    let _0x4a70d4;
    let _0x62c9f4;
    _0x4a70d4 = 0;
    _0x62c9f4 = _0x233538.length;
    for (; _0x4a70d4 < _0x62c9f4; ++_0x4a70d4) {
      const _0x51af9d = _0x233538[_0x4a70d4];
      if (_0x51af9d[_0xfb0963] === this.id && (!_0x1be759 || _0x51af9d.type === _0x1be759)) {
        _0x573019.push(_0x51af9d);
      }
    }
    return _0x573019;
  }
  _resolveTickFontOptions(_0x454ec1) {
    const _0x2d15a4 = this.options.ticks.setContext(this.getContext(_0x454ec1));
    return le(_0x2d15a4.font);
  }
  _maxDigits() {
    const _0x2c6e17 = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / _0x2c6e17;
  }
}
class sn {
  constructor(_0x33b141, _0x2de655, _0x1f9422) {
    this.type = _0x33b141;
    this.scope = _0x2de655;
    this.override = _0x1f9422;
    this.items = Object.create(null);
  }
  isForType(_0x4042d1) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, _0x4042d1.prototype);
  }
  register(_0x1967f1) {
    const _0x3ff252 = Object.getPrototypeOf(_0x1967f1);
    let _0x1510e3;
    if (Ed(_0x3ff252)) {
      _0x1510e3 = this.register(_0x3ff252);
    }
    const _0x50b89d = this.items;
    const _0x5c1189 = _0x1967f1.id;
    const _0x59e109 = this.scope + "." + _0x5c1189;
    if (!_0x5c1189) {
      throw new Error("class does not have id: " + _0x1967f1);
    }
    if (!(_0x5c1189 in _0x50b89d)) {
      _0x50b89d[_0x5c1189] = _0x1967f1;
      Rd(_0x1967f1, _0x59e109, _0x1510e3);
      if (this.override) {
        Y.override(_0x1967f1.id, _0x1967f1.overrides);
      }
    }
    return _0x59e109;
  }
  get(_0x26fad8) {
    return this.items[_0x26fad8];
  }
  unregister(_0x1e2806) {
    const _0xe4eeb3 = this.items;
    const _0x4acbfc = _0x1e2806.id;
    const _0x23cc5d = this.scope;
    if (_0x4acbfc in _0xe4eeb3) {
      delete _0xe4eeb3[_0x4acbfc];
    }
    if (_0x23cc5d && _0x4acbfc in Y[_0x23cc5d]) {
      delete Y[_0x23cc5d][_0x4acbfc];
      if (this.override) {
        delete Kt[_0x4acbfc];
      }
    }
  }
}
function Rd(_0x2c44d2, _0x3657e5, _0x114615) {
  const _0x2e47b6 = Ie(Object.create(null), [_0x114615 ? Y.get(_0x114615) : {}, Y.get(_0x3657e5), _0x2c44d2.defaults]);
  Y.set(_0x3657e5, _0x2e47b6);
  if (_0x2c44d2.defaultRoutes) {
    Cd(_0x3657e5, _0x2c44d2.defaultRoutes);
  }
  if (_0x2c44d2.descriptors) {
    Y.describe(_0x3657e5, _0x2c44d2.descriptors);
  }
}
function Cd(_0x26450a, _0x2f9a18) {
  Object.keys(_0x2f9a18).forEach(_0x12f920 => {
    const _0x3950a5 = _0x12f920.split(".");
    const _0x16f161 = _0x3950a5.pop();
    const _0x33d1c6 = [_0x26450a].concat(_0x3950a5).join(".");
    const _0x5c42d6 = _0x2f9a18[_0x12f920].split(".");
    const _0x3fc5b5 = _0x5c42d6.pop();
    const _0x4a2bb2 = _0x5c42d6.join(".");
    Y.route(_0x33d1c6, _0x16f161, _0x4a2bb2, _0x3fc5b5);
  });
}
function Ed(_0x2b82f4) {
  return "id" in _0x2b82f4 && "defaults" in _0x2b82f4;
}
class Id {
  constructor() {
    this.controllers = new sn(ku, "datasets", true);
    this.elements = new sn(ti, "elements");
    this.plugins = new sn(Object, "plugins");
    this.scales = new sn(te, "scales");
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(..._0x1d5b8c) {
    this._each("register", _0x1d5b8c);
  }
  remove(..._0x54b3d8) {
    this._each("unregister", _0x54b3d8);
  }
  addControllers(..._0x408172) {
    this._each("register", _0x408172, this.controllers);
  }
  addElements(..._0x1c8c76) {
    this._each("register", _0x1c8c76, this.elements);
  }
  addPlugins(..._0x4ff941) {
    this._each("register", _0x4ff941, this.plugins);
  }
  addScales(..._0x1bf036) {
    this._each("register", _0x1bf036, this.scales);
  }
  getController(_0xef63d3) {
    return this._get(_0xef63d3, this.controllers, "controller");
  }
  getElement(_0x2812af) {
    return this._get(_0x2812af, this.elements, "element");
  }
  getPlugin(_0x4294e6) {
    return this._get(_0x4294e6, this.plugins, "plugin");
  }
  getScale(_0x5c746c) {
    return this._get(_0x5c746c, this.scales, "scale");
  }
  removeControllers(..._0x35f536) {
    this._each("unregister", _0x35f536, this.controllers);
  }
  removeElements(..._0x48673c) {
    this._each("unregister", _0x48673c, this.elements);
  }
  removePlugins(..._0x263641) {
    this._each("unregister", _0x263641, this.plugins);
  }
  removeScales(..._0x1ec9fc) {
    this._each("unregister", _0x1ec9fc, this.scales);
  }
  _each(_0x2e1755, _0x5d250e, _0x277ebc) {
    [..._0x5d250e].forEach(_0x537ec8 => {
      const _0x794867 = _0x277ebc || this._getRegistryForType(_0x537ec8);
      if (_0x277ebc || _0x794867.isForType(_0x537ec8) || _0x794867 === this.plugins && _0x537ec8.id) {
        this._exec(_0x2e1755, _0x794867, _0x537ec8);
      } else {
        tt(_0x537ec8, _0x2463c3 => {
          const _0x19f332 = _0x277ebc || this._getRegistryForType(_0x2463c3);
          this._exec(_0x2e1755, _0x19f332, _0x2463c3);
        });
      }
    });
  }
  _exec(_0x50b3d1, _0x32bf04, _0x1ccd74) {
    const _0x2b7361 = Ko(_0x50b3d1);
    j(_0x1ccd74["before" + _0x2b7361], [], _0x1ccd74);
    _0x32bf04[_0x50b3d1](_0x1ccd74);
    j(_0x1ccd74["after" + _0x2b7361], [], _0x1ccd74);
  }
  _getRegistryForType(_0x52c4cf) {
    for (let _0x4e7098 = 0; _0x4e7098 < this._typedRegistries.length; _0x4e7098++) {
      const _0x544881 = this._typedRegistries[_0x4e7098];
      if (_0x544881.isForType(_0x52c4cf)) {
        return _0x544881;
      }
    }
    return this.plugins;
  }
  _get(_0x4b13bc, _0x4a4466, _0x244e74) {
    const _0x7d3a9f = _0x4a4466.get(_0x4b13bc);
    if (_0x7d3a9f === undefined) {
      throw new Error("\"" + _0x4b13bc + "\" is not a registered " + _0x244e74 + ".");
    }
    return _0x7d3a9f;
  }
}
var mt = new Id();
class Ld {
  constructor() {
    this._init = [];
  }
  notify(_0x577f87, _0x224a32, _0x3af788, _0x18bcc5) {
    if (_0x224a32 === "beforeInit") {
      this._init = this._createDescriptors(_0x577f87, true);
      this._notify(this._init, _0x577f87, "install");
    }
    const _0x590f2e = _0x18bcc5 ? this._descriptors(_0x577f87).filter(_0x18bcc5) : this._descriptors(_0x577f87);
    const _0x325f7d = this._notify(_0x590f2e, _0x577f87, _0x224a32, _0x3af788);
    if (_0x224a32 === "afterDestroy") {
      this._notify(_0x590f2e, _0x577f87, "stop");
      this._notify(this._init, _0x577f87, "uninstall");
    }
    return _0x325f7d;
  }
  _notify(_0x27b8ee, _0x5598e2, _0x221a5c, _0x556828) {
    _0x556828 = _0x556828 || {};
    for (const _0x1dbe8e of _0x27b8ee) {
      const _0x4c44ff = _0x1dbe8e.plugin;
      const _0x26739f = _0x4c44ff[_0x221a5c];
      const _0x210a71 = [_0x5598e2, _0x556828, _0x1dbe8e.options];
      if (j(_0x26739f, _0x210a71, _0x4c44ff) === false && _0x556828.cancelable) {
        return false;
      }
    }
    return true;
  }
  invalidate() {
    if (!z(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  }
  _descriptors(_0x5358b0) {
    if (this._cache) {
      return this._cache;
    }
    const _0xb6b7ef = this._cache = this._createDescriptors(_0x5358b0);
    this._notifyStateChanges(_0x5358b0);
    return _0xb6b7ef;
  }
  _createDescriptors(_0x56494a, _0x171d31) {
    const _0x33819b = _0x56494a && _0x56494a.config;
    const _0x1bbbf8 = I(_0x33819b.options && _0x33819b.options.plugins, {});
    const _0x5351aa = Ad(_0x33819b);
    if (_0x1bbbf8 === false && !_0x171d31) {
      return [];
    } else {
      return Fd(_0x56494a, _0x5351aa, _0x1bbbf8, _0x171d31);
    }
  }
  _notifyStateChanges(_0x4b533d) {
    const _0x569319 = this._oldCache || [];
    const _0x2b3f9d = this._cache;
    const _0xe7441f = (_0x2dce08, _0x11387a) => _0x2dce08.filter(_0x3c5a23 => !_0x11387a.some(_0x4e9092 => _0x3c5a23.plugin.id === _0x4e9092.plugin.id));
    this._notify(_0xe7441f(_0x569319, _0x2b3f9d), _0x4b533d, "stop");
    this._notify(_0xe7441f(_0x2b3f9d, _0x569319), _0x4b533d, "start");
  }
}
function Ad(_0x543ea1) {
  const _0x2711ad = {};
  const _0x342272 = [];
  const _0x1597c7 = Object.keys(mt.plugins.items);
  for (let _0x444fd1 = 0; _0x444fd1 < _0x1597c7.length; _0x444fd1++) {
    _0x342272.push(mt.getPlugin(_0x1597c7[_0x444fd1]));
  }
  const _0x167810 = _0x543ea1.plugins || [];
  for (let _0x466f98 = 0; _0x466f98 < _0x167810.length; _0x466f98++) {
    const _0x583331 = _0x167810[_0x466f98];
    if (_0x342272.indexOf(_0x583331) === -1) {
      _0x342272.push(_0x583331);
      _0x2711ad[_0x583331.id] = true;
    }
  }
  return {
    plugins: _0x342272,
    localIds: _0x2711ad
  };
}
function Nd(_0x517d1f, _0x20a38d) {
  if (!_0x20a38d && _0x517d1f === false) {
    return null;
  } else if (_0x517d1f === true) {
    return {};
  } else {
    return _0x517d1f;
  }
}
function Fd(_0x107a7b, {
  plugins: _0x36aaaa,
  localIds: _0x565f6f
}, _0x43ea78, _0x3eca18) {
  const _0x26a863 = [];
  const _0x34bcd7 = _0x107a7b.getContext();
  for (const _0x84218b of _0x36aaaa) {
    const _0x317110 = _0x84218b.id;
    const _0x4f0046 = Nd(_0x43ea78[_0x317110], _0x3eca18);
    if (_0x4f0046 !== null) {
      _0x26a863.push({
        plugin: _0x84218b,
        options: zd(_0x107a7b.config, {
          plugin: _0x84218b,
          local: _0x565f6f[_0x317110]
        }, _0x4f0046, _0x34bcd7)
      });
    }
  }
  return _0x26a863;
}
function zd(_0x4792c3, {
  plugin: _0x181e26,
  local: _0x5a92a3
}, _0x15d774, _0x2d8235) {
  const _0x1ba195 = _0x4792c3.pluginScopeKeys(_0x181e26);
  const _0x24688c = _0x4792c3.getOptionScopes(_0x15d774, _0x1ba195);
  if (_0x5a92a3 && _0x181e26.defaults) {
    _0x24688c.push(_0x181e26.defaults);
  }
  return _0x4792c3.createResolver(_0x24688c, _0x2d8235, [""], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}
function Mi(_0x444bae, _0xb047c) {
  const _0x3f5b5f = Y.datasets[_0x444bae] || {};
  return ((_0xb047c.datasets || {})[_0x444bae] || {}).indexAxis || _0xb047c.indexAxis || _0x3f5b5f.indexAxis || "x";
}
function Bd(_0xca21a, _0x5301b1) {
  let _0x2202ba = _0xca21a;
  if (_0xca21a === "_index_") {
    _0x2202ba = _0x5301b1;
  } else if (_0xca21a === "_value_") {
    _0x2202ba = _0x5301b1 === "x" ? "y" : "x";
  }
  return _0x2202ba;
}
function jd(_0x296bcf, _0x467c4e) {
  if (_0x296bcf === _0x467c4e) {
    return "_index_";
  } else {
    return "_value_";
  }
}
function la(_0xf450a1) {
  if (_0xf450a1 === "x" || _0xf450a1 === "y" || _0xf450a1 === "r") {
    return _0xf450a1;
  }
}
function Wd(_0x39cd28) {
  if (_0x39cd28 === "top" || _0x39cd28 === "bottom") {
    return "x";
  }
  if (_0x39cd28 === "left" || _0x39cd28 === "right") {
    return "y";
  }
}
function ki(_0x148041, ..._0x5b9eb6) {
  if (la(_0x148041)) {
    return _0x148041;
  }
  for (const _0x19150d of _0x5b9eb6) {
    const _0x52585b = _0x19150d.axis || Wd(_0x19150d.position) || _0x148041.length > 1 && la(_0x148041[0].toLowerCase());
    if (_0x52585b) {
      return _0x52585b;
    }
  }
  throw new Error("Cannot determine type of '" + _0x148041 + "' axis. Please provide 'axis' or 'position' option.");
}
function fa(_0x493499, _0x1c1b52, _0x1e733c) {
  if (_0x1e733c[_0x1c1b52 + "AxisID"] === _0x493499) {
    return {
      axis: _0x1c1b52
    };
  }
}
function Ud(_0x582024, _0x254378) {
  if (_0x254378.data && _0x254378.data.datasets) {
    const _0x138b3e = _0x254378.data.datasets.filter(_0x2444dd => _0x2444dd.xAxisID === _0x582024 || _0x2444dd.yAxisID === _0x582024);
    if (_0x138b3e.length) {
      return fa(_0x582024, "x", _0x138b3e[0]) || fa(_0x582024, "y", _0x138b3e[0]);
    }
  }
  return {};
}
function Hd(_0x3aea72, _0xd92028) {
  const _0x212662 = Kt[_0x3aea72.type] || {
    scales: {}
  };
  const _0x40ff7b = _0xd92028.scales || {};
  const _0x113cb9 = Mi(_0x3aea72.type, _0xd92028);
  const _0x45ac4c = Object.create(null);
  Object.keys(_0x40ff7b).forEach(_0x34805e => {
    const _0x3b08f4 = _0x40ff7b[_0x34805e];
    if (!C(_0x3b08f4)) {
      return console.error("Invalid scale configuration for scale: " + _0x34805e);
    }
    if (_0x3b08f4._proxy) {
      return console.warn("Ignoring resolver passed as options for scale: " + _0x34805e);
    }
    const _0x136899 = ki(_0x34805e, _0x3b08f4, Ud(_0x34805e, _0x3aea72), Y.scales[_0x3b08f4.type]);
    const _0x2d1ca6 = jd(_0x136899, _0x113cb9);
    const _0x5c4e8b = _0x212662.scales || {};
    _0x45ac4c[_0x34805e] = Me(Object.create(null), [{
      axis: _0x136899
    }, _0x3b08f4, _0x5c4e8b[_0x136899], _0x5c4e8b[_0x2d1ca6]]);
  });
  _0x3aea72.data.datasets.forEach(_0x1e3d4a => {
    const _0x228641 = _0x1e3d4a.type || _0x3aea72.type;
    const _0x11355e = _0x1e3d4a.indexAxis || Mi(_0x228641, _0xd92028);
    const _0x2b7dad = (Kt[_0x228641] || {}).scales || {};
    Object.keys(_0x2b7dad).forEach(_0x22de7c => {
      const _0x1b8ebd = Bd(_0x22de7c, _0x11355e);
      const _0x5e446f = _0x1e3d4a[_0x1b8ebd + "AxisID"] || _0x1b8ebd;
      _0x45ac4c[_0x5e446f] = _0x45ac4c[_0x5e446f] || Object.create(null);
      Me(_0x45ac4c[_0x5e446f], [{
        axis: _0x1b8ebd
      }, _0x40ff7b[_0x5e446f], _0x2b7dad[_0x22de7c]]);
    });
  });
  Object.keys(_0x45ac4c).forEach(_0x919d1e => {
    const _0x26dbc4 = _0x45ac4c[_0x919d1e];
    Me(_0x26dbc4, [Y.scales[_0x26dbc4.type], Y.scale]);
  });
  return _0x45ac4c;
}
function Lu(_0x15d27c) {
  const _0x5a3471 = _0x15d27c.options ||= {};
  _0x5a3471.plugins = I(_0x5a3471.plugins, {});
  _0x5a3471.scales = Hd(_0x15d27c, _0x5a3471);
}
function Au(_0x2c5cc9) {
  _0x2c5cc9 = _0x2c5cc9 || {};
  _0x2c5cc9.datasets = _0x2c5cc9.datasets || [];
  _0x2c5cc9.labels = _0x2c5cc9.labels || [];
  return _0x2c5cc9;
}
function Yd(_0x90febc) {
  _0x90febc = _0x90febc || {};
  _0x90febc.data = Au(_0x90febc.data);
  Lu(_0x90febc);
  return _0x90febc;
}
const ha = new Map();
const Nu = new Set();
function an(_0x2ab3a9, _0x498f35) {
  let _0x393870 = ha.get(_0x2ab3a9);
  if (!_0x393870) {
    _0x393870 = _0x498f35();
    ha.set(_0x2ab3a9, _0x393870);
    Nu.add(_0x393870);
  }
  return _0x393870;
}
const _e = (_0x10e612, _0x63a383, _0x3d159d) => {
  const _0x1c3d07 = sr(_0x63a383, _0x3d159d);
  if (_0x1c3d07 !== undefined) {
    _0x10e612.add(_0x1c3d07);
  }
};
class Vd {
  constructor(_0x5b1357) {
    this._config = Yd(_0x5b1357);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(_0x5dd30c) {
    this._config.type = _0x5dd30c;
  }
  get data() {
    return this._config.data;
  }
  set data(_0x58691f) {
    this._config.data = Au(_0x58691f);
  }
  get options() {
    return this._config.options;
  }
  set options(_0x4476de) {
    this._config.options = _0x4476de;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const _0xd9a2bf = this._config;
    this.clearCache();
    Lu(_0xd9a2bf);
  }
  clearCache() {
    this._scopeCache.clear();
    this._resolverCache.clear();
  }
  datasetScopeKeys(_0x140bb2) {
    return an(_0x140bb2, () => [["datasets." + _0x140bb2, ""]]);
  }
  datasetAnimationScopeKeys(_0x23c75b, _0x53b643) {
    return an(_0x23c75b + ".transition." + _0x53b643, () => [["datasets." + _0x23c75b + ".transitions." + _0x53b643, "transitions." + _0x53b643], ["datasets." + _0x23c75b, ""]]);
  }
  datasetElementScopeKeys(_0x1a1549, _0x30fe71) {
    return an(_0x1a1549 + "-" + _0x30fe71, () => [["datasets." + _0x1a1549 + ".elements." + _0x30fe71, "datasets." + _0x1a1549, "elements." + _0x30fe71, ""]]);
  }
  pluginScopeKeys(_0x18120a) {
    const _0x5f4357 = _0x18120a.id;
    const _0x3e0f86 = this.type;
    return an(_0x3e0f86 + "-plugin-" + _0x5f4357, () => [["plugins." + _0x5f4357, ...(_0x18120a.additionalOptionScopes || [])]]);
  }
  _cachedScopes(_0xbf78db, _0x327a4b) {
    const _0x1020ca = this._scopeCache;
    let _0x23952f = _0x1020ca.get(_0xbf78db);
    if (!_0x23952f || _0x327a4b) {
      _0x23952f = new Map();
      _0x1020ca.set(_0xbf78db, _0x23952f);
    }
    return _0x23952f;
  }
  getOptionScopes(_0x1bb09f, _0x320335, _0x2d72e) {
    const {
      options: _0x86d897,
      type: _0x1b675e
    } = this;
    const _0x43272a = this._cachedScopes(_0x1bb09f, _0x2d72e);
    const _0x2f992d = _0x43272a.get(_0x320335);
    if (_0x2f992d) {
      return _0x2f992d;
    }
    const _0x3ed3fb = new Set();
    _0x320335.forEach(_0x193b56 => {
      if (_0x1bb09f) {
        _0x3ed3fb.add(_0x1bb09f);
        _0x193b56.forEach(_0x2421e9 => _e(_0x3ed3fb, _0x1bb09f, _0x2421e9));
      }
      _0x193b56.forEach(_0x586c7e => _e(_0x3ed3fb, _0x86d897, _0x586c7e));
      _0x193b56.forEach(_0x7eec7d => _e(_0x3ed3fb, Kt[_0x1b675e] || {}, _0x7eec7d));
      _0x193b56.forEach(_0x5a3cef => _e(_0x3ed3fb, Y, _0x5a3cef));
      _0x193b56.forEach(_0x3de2a7 => _e(_0x3ed3fb, Ti, _0x3de2a7));
    });
    const _0x21825a = Array.from(_0x3ed3fb);
    if (_0x21825a.length === 0) {
      _0x21825a.push(Object.create(null));
    }
    if (Nu.has(_0x320335)) {
      _0x43272a.set(_0x320335, _0x21825a);
    }
    return _0x21825a;
  }
  chartOptionScopes() {
    const {
      options: _0x28e219,
      type: _0x38a8f6
    } = this;
    return [_0x28e219, Kt[_0x38a8f6] || {}, Y.datasets[_0x38a8f6] || {}, {
      type: _0x38a8f6
    }, Y, Ti];
  }
  resolveNamedOptions(_0x376705, _0xc4d4e9, _0x24a07b, _0x277e59 = [""]) {
    const _0x5eb1d2 = {
      $shared: true
    };
    const {
      resolver: _0x5d96be,
      subPrefixes: _0x3294ac
    } = da(this._resolverCache, _0x376705, _0x277e59);
    let _0x5c6e1d = _0x5d96be;
    if (Xd(_0x5d96be, _0xc4d4e9)) {
      _0x5eb1d2.$shared = false;
      _0x24a07b = Ft(_0x24a07b) ? _0x24a07b() : _0x24a07b;
      const _0x20655b = this.createResolver(_0x376705, _0x24a07b, _0x3294ac);
      _0x5c6e1d = fe(_0x5d96be, _0x24a07b, _0x20655b);
    }
    for (const _0x3afd00 of _0xc4d4e9) {
      _0x5eb1d2[_0x3afd00] = _0x5c6e1d[_0x3afd00];
    }
    return _0x5eb1d2;
  }
  createResolver(_0x118f28, _0x389959, _0x2ccef8 = [""], _0x3daa74) {
    const {
      resolver: _0xd1d933
    } = da(this._resolverCache, _0x118f28, _0x2ccef8);
    if (C(_0x389959)) {
      return fe(_0xd1d933, _0x389959, undefined, _0x3daa74);
    } else {
      return _0xd1d933;
    }
  }
}
function da(_0x240af5, _0x23dd72, _0x19b93a) {
  let _0x3d8684 = _0x240af5.get(_0x23dd72);
  if (!_0x3d8684) {
    _0x3d8684 = new Map();
    _0x240af5.set(_0x23dd72, _0x3d8684);
  }
  const _0x42897f = _0x19b93a.join();
  let _0x2ce313 = _0x3d8684.get(_0x42897f);
  if (!_0x2ce313) {
    _0x2ce313 = {
      resolver: ns(_0x23dd72, _0x19b93a),
      subPrefixes: _0x19b93a.filter(_0x235da5 => !_0x235da5.toLowerCase().includes("hover"))
    };
    _0x3d8684.set(_0x42897f, _0x2ce313);
  }
  return _0x2ce313;
}
const qd = _0x9c5bde => C(_0x9c5bde) && Object.getOwnPropertyNames(_0x9c5bde).some(_0x42c038 => Ft(_0x9c5bde[_0x42c038]));
function Xd(_0x3305fe, _0x2924d2) {
  const {
    isScriptable: _0x462fde,
    isIndexable: _0x25504a
  } = wu(_0x3305fe);
  for (const _0x5e6456 of _0x2924d2) {
    const _0x51ee05 = _0x462fde(_0x5e6456);
    const _0x2fc500 = _0x25504a(_0x5e6456);
    const _0xa54b2 = (_0x2fc500 || _0x51ee05) && _0x3305fe[_0x5e6456];
    if (_0x51ee05 && (Ft(_0xa54b2) || qd(_0xa54b2)) || _0x2fc500 && H(_0xa54b2)) {
      return true;
    }
  }
  return false;
}
var Qd = "4.4.2";
const Gd = ["top", "bottom", "left", "right", "chartArea"];
function pa(_0x32c7c0, _0x3dfc13) {
  return _0x32c7c0 === "top" || _0x32c7c0 === "bottom" || Gd.indexOf(_0x32c7c0) === -1 && _0x3dfc13 === "x";
}
function ga(_0x8d544e, _0x15e4ef) {
  return function (_0x268420, _0x435d4f) {
    if (_0x268420[_0x8d544e] === _0x435d4f[_0x8d544e]) {
      return _0x268420[_0x15e4ef] - _0x435d4f[_0x15e4ef];
    } else {
      return _0x268420[_0x8d544e] - _0x435d4f[_0x8d544e];
    }
  };
}
function ya(_0x10f43e) {
  const _0x344dc6 = _0x10f43e.chart;
  const _0x205b8f = _0x344dc6.options.animation;
  _0x344dc6.notifyPlugins("afterRender");
  j(_0x205b8f && _0x205b8f.onComplete, [_0x10f43e], _0x344dc6);
}
function Kd(_0x5d0372) {
  const _0x543073 = _0x5d0372.chart;
  const _0x3e0674 = _0x543073.options.animation;
  j(_0x3e0674 && _0x3e0674.onProgress, [_0x5d0372], _0x543073);
}
function Fu(_0xb38925) {
  if (os() && typeof _0xb38925 == "string") {
    _0xb38925 = document.getElementById(_0xb38925);
  } else if (_0xb38925 && _0xb38925.length) {
    _0xb38925 = _0xb38925[0];
  }
  if (_0xb38925 && _0xb38925.canvas) {
    _0xb38925 = _0xb38925.canvas;
  }
  return _0xb38925;
}
const hn = {};
const ma = _0x33ad75 => {
  const _0x4fb857 = Fu(_0x33ad75);
  return Object.values(hn).filter(_0x3750b7 => _0x3750b7.canvas === _0x4fb857).pop();
};
function Zd(_0x551a9c, _0x5f5d8f, _0x1fbb80) {
  const _0x55644f = Object.keys(_0x551a9c);
  for (const _0x31d2a0 of _0x55644f) {
    const _0x357551 = +_0x31d2a0;
    if (_0x357551 >= _0x5f5d8f) {
      const _0x59c219 = _0x551a9c[_0x31d2a0];
      delete _0x551a9c[_0x31d2a0];
      if (_0x1fbb80 > 0 || _0x357551 > _0x5f5d8f) {
        _0x551a9c[_0x357551 + _0x1fbb80] = _0x59c219;
      }
    }
  }
}
function Jd(_0x1c77da, _0x45e789, _0x3c4e7a, _0x50db47) {
  if (!_0x3c4e7a || _0x1c77da.type === "mouseout") {
    return null;
  } else if (_0x50db47) {
    return _0x45e789;
  } else {
    return _0x1c77da;
  }
}
function cn(_0x128ff2, _0x5e93f, _0x1323f4) {
  if (_0x128ff2.options.clip) {
    return _0x128ff2[_0x1323f4];
  } else {
    return _0x5e93f[_0x1323f4];
  }
}
function tp(_0x709ac8, _0x1ab129) {
  const {
    xScale: _0xb08797,
    yScale: _0x198ad9
  } = _0x709ac8;
  if (_0xb08797 && _0x198ad9) {
    return {
      left: cn(_0xb08797, _0x1ab129, "left"),
      right: cn(_0xb08797, _0x1ab129, "right"),
      top: cn(_0x198ad9, _0x1ab129, "top"),
      bottom: cn(_0x198ad9, _0x1ab129, "bottom")
    };
  } else {
    return _0x1ab129;
  }
}
class Ne {
  static defaults = Y;
  static instances = hn;
  static overrides = Kt;
  static registry = mt;
  static version = Qd;
  static getChart = ma;
  static register(..._0x5576a6) {
    mt.add(..._0x5576a6);
    ba();
  }
  static unregister(..._0x1a271d) {
    mt.remove(..._0x1a271d);
    ba();
  }
  constructor(_0x43fa2b, _0x1f20ff) {
    const _0x4f258d = this.config = new Vd(_0x1f20ff);
    const _0x1d73ff = Fu(_0x43fa2b);
    const _0x470c42 = ma(_0x1d73ff);
    if (_0x470c42) {
      throw new Error("Canvas is already in use. Chart with ID '" + _0x470c42.id + "' must be destroyed before the canvas with ID '" + _0x470c42.canvas.id + "' can be reused.");
    }
    const _0x5e3b76 = _0x4f258d.createResolver(_0x4f258d.chartOptionScopes(), this.getContext());
    this.platform = new (_0x4f258d.platform || md(_0x1d73ff))();
    this.platform.updateConfig(_0x4f258d);
    const _0x44106b = this.platform.acquireContext(_0x1d73ff, _0x5e3b76.aspectRatio);
    const _0x4b2472 = _0x44106b && _0x44106b.canvas;
    const _0x57d850 = _0x4b2472 && _0x4b2472.height;
    const _0x3e467b = _0x4b2472 && _0x4b2472.width;
    this.id = nf();
    this.ctx = _0x44106b;
    this.canvas = _0x4b2472;
    this.width = _0x3e467b;
    this.height = _0x57d850;
    this._options = _0x5e3b76;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this._plugins = new Ld();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = xf(_0x1b38da => this.update(_0x1b38da), _0x5e3b76.resizeDelay || 0);
    this._dataChanges = [];
    hn[this.id] = this;
    if (!_0x44106b || !_0x4b2472) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Ot.listen(this, "complete", ya);
    Ot.listen(this, "progress", Kd);
    this._initialize();
    if (this.attached) {
      this.update();
    }
  }
  get aspectRatio() {
    const {
      options: {
        aspectRatio: _0x4b3ccf,
        maintainAspectRatio: _0x4837d7
      },
      width: _0x31c014,
      height: _0x28b54e,
      _aspectRatio: _0x4bc836
    } = this;
    if (z(_0x4b3ccf)) {
      if (_0x4837d7 && _0x4bc836) {
        return _0x4bc836;
      } else if (_0x28b54e) {
        return _0x31c014 / _0x28b54e;
      } else {
        return null;
      }
    } else {
      return _0x4b3ccf;
    }
  }
  get data() {
    return this.config.data;
  }
  set data(_0x2171b6) {
    this.config.data = _0x2171b6;
  }
  get options() {
    return this._options;
  }
  set options(_0x1b3398) {
    this.config.options = _0x1b3398;
  }
  get registry() {
    return mt;
  }
  _initialize() {
    this.notifyPlugins("beforeInit");
    if (this.options.responsive) {
      this.resize();
    } else {
      Ws(this, this.options.devicePixelRatio);
    }
    this.bindEvents();
    this.notifyPlugins("afterInit");
    return this;
  }
  clear() {
    zs(this.canvas, this.ctx);
    return this;
  }
  stop() {
    Ot.stop(this);
    return this;
  }
  resize(_0x15125b, _0x1bc527) {
    if (Ot.running(this)) {
      this._resizeBeforeDraw = {
        width: _0x15125b,
        height: _0x1bc527
      };
    } else {
      this._resize(_0x15125b, _0x1bc527);
    }
  }
  _resize(_0x42ba0e, _0x1031f1) {
    const _0x5d428d = this.options;
    const _0x106ad6 = this.canvas;
    const _0x30fca7 = _0x5d428d.maintainAspectRatio && this.aspectRatio;
    const _0x4255cd = this.platform.getMaximumSize(_0x106ad6, _0x42ba0e, _0x1031f1, _0x30fca7);
    const _0x133e88 = _0x5d428d.devicePixelRatio || this.platform.getDevicePixelRatio();
    const _0x4bb208 = this.width ? "resize" : "attach";
    this.width = _0x4255cd.width;
    this.height = _0x4255cd.height;
    this._aspectRatio = this.aspectRatio;
    if (Ws(this, _0x133e88, true)) {
      this.notifyPlugins("resize", {
        size: _0x4255cd
      });
      j(_0x5d428d.onResize, [this, _0x4255cd], this);
      if (this.attached && this._doResize(_0x4bb208)) {
        this.render();
      }
    }
  }
  ensureScalesHaveIDs() {
    const _0x33c647 = this.options.scales || {};
    tt(_0x33c647, (_0xedb74e, _0x30fdb2) => {
      _0xedb74e.id = _0x30fdb2;
    });
  }
  buildOrUpdateScales() {
    const _0x49f1f1 = this.options;
    const _0x32e21e = _0x49f1f1.scales;
    const _0x5edd2c = this.scales;
    const _0x396de1 = Object.keys(_0x5edd2c).reduce((_0x2edf1e, _0x49d078) => {
      _0x2edf1e[_0x49d078] = false;
      return _0x2edf1e;
    }, {});
    let _0x144c49 = [];
    if (_0x32e21e) {
      _0x144c49 = _0x144c49.concat(Object.keys(_0x32e21e).map(_0x3f37d9 => {
        const _0x2f75e3 = _0x32e21e[_0x3f37d9];
        const _0x4a0b7c = ki(_0x3f37d9, _0x2f75e3);
        const _0xa06f9c = _0x4a0b7c === "r";
        const _0x3c997b = _0x4a0b7c === "x";
        return {
          options: _0x2f75e3,
          dposition: _0xa06f9c ? "chartArea" : _0x3c997b ? "bottom" : "left",
          dtype: _0xa06f9c ? "radialLinear" : _0x3c997b ? "category" : "linear"
        };
      }));
    }
    tt(_0x144c49, _0x388109 => {
      const _0x165cdb = _0x388109.options;
      const _0x3ba88a = _0x165cdb.id;
      const _0x116247 = ki(_0x3ba88a, _0x165cdb);
      const _0x4af1cf = I(_0x165cdb.type, _0x388109.dtype);
      if (_0x165cdb.position === undefined || pa(_0x165cdb.position, _0x116247) !== pa(_0x388109.dposition)) {
        _0x165cdb.position = _0x388109.dposition;
      }
      _0x396de1[_0x3ba88a] = true;
      let _0x20f59d = null;
      if (_0x3ba88a in _0x5edd2c && _0x5edd2c[_0x3ba88a].type === _0x4af1cf) {
        _0x20f59d = _0x5edd2c[_0x3ba88a];
      } else {
        const _0x2e7682 = mt.getScale(_0x4af1cf);
        _0x20f59d = new _0x2e7682({
          id: _0x3ba88a,
          type: _0x4af1cf,
          ctx: this.ctx,
          chart: this
        });
        _0x5edd2c[_0x20f59d.id] = _0x20f59d;
      }
      _0x20f59d.init(_0x165cdb, _0x49f1f1);
    });
    tt(_0x396de1, (_0x16f3f3, _0x377da9) => {
      if (!_0x16f3f3) {
        delete _0x5edd2c[_0x377da9];
      }
    });
    tt(_0x5edd2c, _0x268ca0 => {
      rn.configure(this, _0x268ca0, _0x268ca0.options);
      rn.addBox(this, _0x268ca0);
    });
  }
  _updateMetasets() {
    const _0x959c7d = this._metasets;
    const _0x23c185 = this.data.datasets.length;
    const _0x2a6830 = _0x959c7d.length;
    _0x959c7d.sort((_0x1ea79a, _0x32ddab) => _0x1ea79a.index - _0x32ddab.index);
    if (_0x2a6830 > _0x23c185) {
      for (let _0x1ef857 = _0x23c185; _0x1ef857 < _0x2a6830; ++_0x1ef857) {
        this._destroyDatasetMeta(_0x1ef857);
      }
      _0x959c7d.splice(_0x23c185, _0x2a6830 - _0x23c185);
    }
    this._sortedMetasets = _0x959c7d.slice(0).sort(ga("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: _0x50de1f,
      data: {
        datasets: _0xf9828b
      }
    } = this;
    if (_0x50de1f.length > _0xf9828b.length) {
      delete this._stacks;
    }
    _0x50de1f.forEach((_0x4e759c, _0x244c98) => {
      if (_0xf9828b.filter(_0x1e4782 => _0x1e4782 === _0x4e759c._dataset).length === 0) {
        this._destroyDatasetMeta(_0x244c98);
      }
    });
  }
  buildOrUpdateControllers() {
    const _0xefa387 = [];
    const _0x1c0670 = this.data.datasets;
    let _0x251c55;
    let _0x52cd52;
    this._removeUnreferencedMetasets();
    _0x251c55 = 0;
    _0x52cd52 = _0x1c0670.length;
    for (; _0x251c55 < _0x52cd52; _0x251c55++) {
      const _0xe5f923 = _0x1c0670[_0x251c55];
      let _0x58b6af = this.getDatasetMeta(_0x251c55);
      const _0x2255d4 = _0xe5f923.type || this.config.type;
      if (_0x58b6af.type && _0x58b6af.type !== _0x2255d4) {
        this._destroyDatasetMeta(_0x251c55);
        _0x58b6af = this.getDatasetMeta(_0x251c55);
      }
      _0x58b6af.type = _0x2255d4;
      _0x58b6af.indexAxis = _0xe5f923.indexAxis || Mi(_0x2255d4, this.options);
      _0x58b6af.order = _0xe5f923.order || 0;
      _0x58b6af.index = _0x251c55;
      _0x58b6af.label = "" + _0xe5f923.label;
      _0x58b6af.visible = this.isDatasetVisible(_0x251c55);
      if (_0x58b6af.controller) {
        _0x58b6af.controller.updateIndex(_0x251c55);
        _0x58b6af.controller.linkScales();
      } else {
        const _0x8e0eb1 = mt.getController(_0x2255d4);
        const {
          datasetElementType: _0x5a1b17,
          dataElementType: _0x5139e1
        } = Y.datasets[_0x2255d4];
        Object.assign(_0x8e0eb1, {
          dataElementType: mt.getElement(_0x5139e1),
          datasetElementType: _0x5a1b17 && mt.getElement(_0x5a1b17)
        });
        _0x58b6af.controller = new _0x8e0eb1(this, _0x251c55);
        _0xefa387.push(_0x58b6af.controller);
      }
    }
    this._updateMetasets();
    return _0xefa387;
  }
  _resetElements() {
    tt(this.data.datasets, (_0x2f6b53, _0x18f548) => {
      this.getDatasetMeta(_0x18f548).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements();
    this.notifyPlugins("reset");
  }
  update(_0x3722eb) {
    const _0x5e6718 = this.config;
    _0x5e6718.update();
    const _0x130a18 = this._options = _0x5e6718.createResolver(_0x5e6718.chartOptionScopes(), this.getContext());
    const _0x22d417 = this._animationsDisabled = !_0x130a18.animation;
    this._updateScales();
    this._checkEventBindings();
    this._updateHiddenIndices();
    this._plugins.invalidate();
    if (this.notifyPlugins("beforeUpdate", {
      mode: _0x3722eb,
      cancelable: true
    }) === false) {
      return;
    }
    const _0x2b8b05 = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let _0x13c673 = 0;
    for (let _0xad7580 = 0, _0x5c6abf = this.data.datasets.length; _0xad7580 < _0x5c6abf; _0xad7580++) {
      const {
        controller: _0x1c8e66
      } = this.getDatasetMeta(_0xad7580);
      const _0x2bf084 = !_0x22d417 && _0x2b8b05.indexOf(_0x1c8e66) === -1;
      _0x1c8e66.buildOrUpdateElements(_0x2bf084);
      _0x13c673 = Math.max(+_0x1c8e66.getMaxOverflow(), _0x13c673);
    }
    _0x13c673 = this._minPadding = _0x130a18.layout.autoPadding ? _0x13c673 : 0;
    this._updateLayout(_0x13c673);
    if (!_0x22d417) {
      tt(_0x2b8b05, _0x20a9e2 => {
        _0x20a9e2.reset();
      });
    }
    this._updateDatasets(_0x3722eb);
    this.notifyPlugins("afterUpdate", {
      mode: _0x3722eb
    });
    this._layers.sort(ga("z", "_idx"));
    const {
      _active: _0x411f0f,
      _lastEvent: _0x31901b
    } = this;
    if (_0x31901b) {
      this._eventHandler(_0x31901b, true);
    } else if (_0x411f0f.length) {
      this._updateHoverStyles(_0x411f0f, _0x411f0f, true);
    }
    this.render();
  }
  _updateScales() {
    tt(this.scales, _0x20516b => {
      rn.removeBox(this, _0x20516b);
    });
    this.ensureScalesHaveIDs();
    this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const _0x25d49f = this.options;
    const _0x54e9cd = new Set(Object.keys(this._listeners));
    const _0x4baa2e = new Set(_0x25d49f.events);
    if (!ks(_0x54e9cd, _0x4baa2e) || !!this._responsiveListeners !== _0x25d49f.responsive) {
      this.unbindEvents();
      this.bindEvents();
    }
  }
  _updateHiddenIndices() {
    const {
      _hiddenIndices: _0x20a31b
    } = this;
    const _0x160ff6 = this._getUniformDataChanges() || [];
    for (const {
      method: _0x20878d,
      start: _0x3a1a91,
      count: _0x1cdc07
    } of _0x160ff6) {
      const _0x444a3f = _0x20878d === "_removeElements" ? -_0x1cdc07 : _0x1cdc07;
      Zd(_0x20a31b, _0x3a1a91, _0x444a3f);
    }
  }
  _getUniformDataChanges() {
    const _0x16fd68 = this._dataChanges;
    if (!_0x16fd68 || !_0x16fd68.length) {
      return;
    }
    this._dataChanges = [];
    const _0x2179e7 = this.data.datasets.length;
    const _0x553c36 = _0x8980bc => new Set(_0x16fd68.filter(_0x5e8640 => _0x5e8640[0] === _0x8980bc).map((_0x5ab847, _0x391d8c) => _0x391d8c + "," + _0x5ab847.splice(1).join(",")));
    const _0x5eb92d = _0x553c36(0);
    for (let _0x563884 = 1; _0x563884 < _0x2179e7; _0x563884++) {
      if (!ks(_0x5eb92d, _0x553c36(_0x563884))) {
        return;
      }
    }
    return Array.from(_0x5eb92d).map(_0x4d3413 => _0x4d3413.split(",")).map(_0x1321eb => ({
      method: _0x1321eb[1],
      start: +_0x1321eb[2],
      count: +_0x1321eb[3]
    }));
  }
  _updateLayout(_0x1e9576) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: true
    }) === false) {
      return;
    }
    rn.update(this, this.width, this.height, _0x1e9576);
    const _0x5cb270 = this.chartArea;
    const _0xaab5ef = _0x5cb270.width <= 0 || _0x5cb270.height <= 0;
    this._layers = [];
    tt(this.boxes, _0xe4da50 => {
      if (!_0xaab5ef || _0xe4da50.position !== "chartArea") {
        if (_0xe4da50.configure) {
          _0xe4da50.configure();
        }
        this._layers.push(..._0xe4da50._layers());
      }
    }, this);
    this._layers.forEach((_0x384cd5, _0xfc8b58) => {
      _0x384cd5._idx = _0xfc8b58;
    });
    this.notifyPlugins("afterLayout");
  }
  _updateDatasets(_0x8b8ff6) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: _0x8b8ff6,
      cancelable: true
    }) !== false) {
      for (let _0x22ae01 = 0, _0x3cb695 = this.data.datasets.length; _0x22ae01 < _0x3cb695; ++_0x22ae01) {
        this.getDatasetMeta(_0x22ae01).controller.configure();
      }
      for (let _0xd58d8b = 0, _0x43e492 = this.data.datasets.length; _0xd58d8b < _0x43e492; ++_0xd58d8b) {
        this._updateDataset(_0xd58d8b, Ft(_0x8b8ff6) ? _0x8b8ff6({
          datasetIndex: _0xd58d8b
        }) : _0x8b8ff6);
      }
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: _0x8b8ff6
      });
    }
  }
  _updateDataset(_0xeee372, _0x2dff4d) {
    const _0xdc294 = this.getDatasetMeta(_0xeee372);
    const _0x211ac4 = {
      meta: _0xdc294,
      index: _0xeee372,
      mode: _0x2dff4d,
      cancelable: true
    };
    if (this.notifyPlugins("beforeDatasetUpdate", _0x211ac4) !== false) {
      _0xdc294.controller._update(_0x2dff4d);
      _0x211ac4.cancelable = false;
      this.notifyPlugins("afterDatasetUpdate", _0x211ac4);
    }
  }
  render() {
    if (this.notifyPlugins("beforeRender", {
      cancelable: true
    }) !== false) {
      if (Ot.has(this)) {
        if (this.attached && !Ot.running(this)) {
          Ot.start(this);
        }
      } else {
        this.draw();
        ya({
          chart: this
        });
      }
    }
  }
  draw() {
    let _0x508838;
    if (this._resizeBeforeDraw) {
      const {
        width: _0x47bbb2,
        height: _0x4b2503
      } = this._resizeBeforeDraw;
      this._resize(_0x47bbb2, _0x4b2503);
      this._resizeBeforeDraw = null;
    }
    this.clear();
    if (this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: true
    }) === false) {
      return;
    }
    const _0x6b638e = this._layers;
    for (_0x508838 = 0; _0x508838 < _0x6b638e.length && _0x6b638e[_0x508838].z <= 0; ++_0x508838) {
      _0x6b638e[_0x508838].draw(this.chartArea);
    }
    for (this._drawDatasets(); _0x508838 < _0x6b638e.length; ++_0x508838) {
      _0x6b638e[_0x508838].draw(this.chartArea);
    }
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(_0x423553) {
    const _0x3f45e8 = this._sortedMetasets;
    const _0x33ed99 = [];
    let _0x457f61;
    let _0x4676b7;
    _0x457f61 = 0;
    _0x4676b7 = _0x3f45e8.length;
    for (; _0x457f61 < _0x4676b7; ++_0x457f61) {
      const _0x2e8dd2 = _0x3f45e8[_0x457f61];
      if (!_0x423553 || _0x2e8dd2.visible) {
        _0x33ed99.push(_0x2e8dd2);
      }
    }
    return _0x33ed99;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: true
    }) === false) {
      return;
    }
    const _0x593cc5 = this.getSortedVisibleDatasetMetas();
    for (let _0x528c42 = _0x593cc5.length - 1; _0x528c42 >= 0; --_0x528c42) {
      this._drawDataset(_0x593cc5[_0x528c42]);
    }
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(_0x3cdad2) {
    const _0x1c9244 = this.ctx;
    const _0x1ec59b = _0x3cdad2._clip;
    const _0x957a63 = !_0x1ec59b.disabled;
    const _0xe7c210 = tp(_0x3cdad2, this.chartArea);
    const _0x5d76f8 = {
      meta: _0x3cdad2,
      index: _0x3cdad2.index,
      cancelable: true
    };
    if (this.notifyPlugins("beforeDatasetDraw", _0x5d76f8) !== false) {
      if (_0x957a63) {
        bu(_0x1c9244, {
          left: _0x1ec59b.left === false ? 0 : _0xe7c210.left - _0x1ec59b.left,
          right: _0x1ec59b.right === false ? this.width : _0xe7c210.right + _0x1ec59b.right,
          top: _0x1ec59b.top === false ? 0 : _0xe7c210.top - _0x1ec59b.top,
          bottom: _0x1ec59b.bottom === false ? this.height : _0xe7c210.bottom + _0x1ec59b.bottom
        });
      }
      _0x3cdad2.controller.draw();
      if (_0x957a63) {
        _u(_0x1c9244);
      }
      _0x5d76f8.cancelable = false;
      this.notifyPlugins("afterDatasetDraw", _0x5d76f8);
    }
  }
  isPointInArea(_0x419f80) {
    return St(_0x419f80, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(_0x282511, _0x36fa7b, _0x55c45c, _0x79d0c) {
    const _0x1e1d5b = Gh.modes[_0x36fa7b];
    if (typeof _0x1e1d5b == "function") {
      return _0x1e1d5b(this, _0x282511, _0x55c45c, _0x79d0c);
    } else {
      return [];
    }
  }
  getDatasetMeta(_0x5ed96a) {
    const _0x319d4f = this.data.datasets[_0x5ed96a];
    const _0x3733cd = this._metasets;
    let _0x275a4f = _0x3733cd.filter(_0x1e7571 => _0x1e7571 && _0x1e7571._dataset === _0x319d4f).pop();
    if (!_0x275a4f) {
      _0x275a4f = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: _0x319d4f && _0x319d4f.order || 0,
        index: _0x5ed96a,
        _dataset: _0x319d4f,
        _parsed: [],
        _sorted: false
      };
      _0x3733cd.push(_0x275a4f);
    }
    return _0x275a4f;
  }
  getContext() {
    return this.$context ||= Jt(null, {
      chart: this,
      type: "chart"
    });
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(_0x2a467e) {
    const _0x576119 = this.data.datasets[_0x2a467e];
    if (!_0x576119) {
      return false;
    }
    const _0x163b4f = this.getDatasetMeta(_0x2a467e);
    if (typeof _0x163b4f.hidden == "boolean") {
      return !_0x163b4f.hidden;
    } else {
      return !_0x576119.hidden;
    }
  }
  setDatasetVisibility(_0x14dc8e, _0x5996b8) {
    const _0x13ff6b = this.getDatasetMeta(_0x14dc8e);
    _0x13ff6b.hidden = !_0x5996b8;
  }
  toggleDataVisibility(_0x3b7a1e) {
    this._hiddenIndices[_0x3b7a1e] = !this._hiddenIndices[_0x3b7a1e];
  }
  getDataVisibility(_0x38986a) {
    return !this._hiddenIndices[_0x38986a];
  }
  _updateVisibility(_0x589745, _0x1a7c60, _0xed50b4) {
    const _0x323540 = _0xed50b4 ? "show" : "hide";
    const _0x54427e = this.getDatasetMeta(_0x589745);
    const _0x46e8d0 = _0x54427e.controller._resolveAnimations(undefined, _0x323540);
    if (ar(_0x1a7c60)) {
      _0x54427e.data[_0x1a7c60].hidden = !_0xed50b4;
      this.update();
    } else {
      this.setDatasetVisibility(_0x589745, _0xed50b4);
      _0x46e8d0.update(_0x54427e, {
        visible: _0xed50b4
      });
      this.update(_0x1d1991 => _0x1d1991.datasetIndex === _0x589745 ? _0x323540 : undefined);
    }
  }
  hide(_0x5fa3b, _0x1141f9) {
    this._updateVisibility(_0x5fa3b, _0x1141f9, false);
  }
  show(_0x411366, _0x467d35) {
    this._updateVisibility(_0x411366, _0x467d35, true);
  }
  _destroyDatasetMeta(_0x54d17c) {
    const _0x553220 = this._metasets[_0x54d17c];
    if (_0x553220 && _0x553220.controller) {
      _0x553220.controller._destroy();
    }
    delete this._metasets[_0x54d17c];
  }
  _stop() {
    let _0x3e71a4;
    let _0x28231f;
    this.stop();
    Ot.remove(this);
    _0x3e71a4 = 0;
    _0x28231f = this.data.datasets.length;
    for (; _0x3e71a4 < _0x28231f; ++_0x3e71a4) {
      this._destroyDatasetMeta(_0x3e71a4);
    }
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const {
      canvas: _0x444ae5,
      ctx: _0x3491db
    } = this;
    this._stop();
    this.config.clearCache();
    if (_0x444ae5) {
      this.unbindEvents();
      zs(_0x444ae5, _0x3491db);
      this.platform.releaseContext(_0x3491db);
      this.canvas = null;
      this.ctx = null;
    }
    delete hn[this.id];
    this.notifyPlugins("afterDestroy");
  }
  toBase64Image(..._0x3f9e01) {
    return this.canvas.toDataURL(..._0x3f9e01);
  }
  bindEvents() {
    this.bindUserEvents();
    if (this.options.responsive) {
      this.bindResponsiveEvents();
    } else {
      this.attached = true;
    }
  }
  bindUserEvents() {
    const _0x41a249 = this._listeners;
    const _0x21a187 = this.platform;
    const _0xce22c7 = (_0x24aa1d, _0x31cbf9) => {
      _0x21a187.addEventListener(this, _0x24aa1d, _0x31cbf9);
      _0x41a249[_0x24aa1d] = _0x31cbf9;
    };
    const _0x1e4369 = (_0x44836d, _0x2a52c7, _0x37961b) => {
      _0x44836d.offsetX = _0x2a52c7;
      _0x44836d.offsetY = _0x37961b;
      this._eventHandler(_0x44836d);
    };
    tt(this.options.events, _0x2fbebc => _0xce22c7(_0x2fbebc, _0x1e4369));
  }
  bindResponsiveEvents() {
    this._responsiveListeners ||= {};
    const _0x50fc4e = this._responsiveListeners;
    const _0x314d59 = this.platform;
    const _0x111436 = (_0x26dea0, _0x14be4a) => {
      _0x314d59.addEventListener(this, _0x26dea0, _0x14be4a);
      _0x50fc4e[_0x26dea0] = _0x14be4a;
    };
    const _0x2743d7 = (_0x13523b, _0x227599) => {
      if (_0x50fc4e[_0x13523b]) {
        _0x314d59.removeEventListener(this, _0x13523b, _0x227599);
        delete _0x50fc4e[_0x13523b];
      }
    };
    const _0x90bc2f = (_0x5463e6, _0x5e3e6d) => {
      if (this.canvas) {
        this.resize(_0x5463e6, _0x5e3e6d);
      }
    };
    let _0x2f6095;
    const _0x571331 = () => {
      _0x2743d7("attach", _0x571331);
      this.attached = true;
      this.resize();
      _0x111436("resize", _0x90bc2f);
      _0x111436("detach", _0x2f6095);
    };
    _0x2f6095 = () => {
      this.attached = false;
      _0x2743d7("resize", _0x90bc2f);
      this._stop();
      this._resize(0, 0);
      _0x111436("attach", _0x571331);
    };
    if (_0x314d59.isAttached(this.canvas)) {
      _0x571331();
    } else {
      _0x2f6095();
    }
  }
  unbindEvents() {
    tt(this._listeners, (_0x3b82bb, _0x28c03a) => {
      this.platform.removeEventListener(this, _0x28c03a, _0x3b82bb);
    });
    this._listeners = {};
    tt(this._responsiveListeners, (_0x333d92, _0x23804d) => {
      this.platform.removeEventListener(this, _0x23804d, _0x333d92);
    });
    this._responsiveListeners = undefined;
  }
  updateHoverStyle(_0x1561eb, _0x4ed5b6, _0x18884b) {
    const _0x32a125 = _0x18884b ? "set" : "remove";
    let _0xdc4bd8;
    let _0x3a5ed0;
    let _0xcf2954;
    let _0x21596b;
    if (_0x4ed5b6 === "dataset") {
      _0xdc4bd8 = this.getDatasetMeta(_0x1561eb[0].datasetIndex);
      _0xdc4bd8.controller["_" + _0x32a125 + "DatasetHoverStyle"]();
    }
    _0xcf2954 = 0;
    _0x21596b = _0x1561eb.length;
    for (; _0xcf2954 < _0x21596b; ++_0xcf2954) {
      _0x3a5ed0 = _0x1561eb[_0xcf2954];
      const _0x27dd7f = _0x3a5ed0 && this.getDatasetMeta(_0x3a5ed0.datasetIndex).controller;
      if (_0x27dd7f) {
        _0x27dd7f[_0x32a125 + "HoverStyle"](_0x3a5ed0.element, _0x3a5ed0.datasetIndex, _0x3a5ed0.index);
      }
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(_0x32fe1f) {
    const _0x163dfe = this._active || [];
    const _0x5097f1 = _0x32fe1f.map(({
      datasetIndex: _0x5a58f0,
      index: _0x1e93b6
    }) => {
      const _0x119b8c = this.getDatasetMeta(_0x5a58f0);
      if (!_0x119b8c) {
        throw new Error("No dataset found at index " + _0x5a58f0);
      }
      return {
        datasetIndex: _0x5a58f0,
        element: _0x119b8c.data[_0x1e93b6],
        index: _0x1e93b6
      };
    });
    if (!Ts(_0x5097f1, _0x163dfe)) {
      this._active = _0x5097f1;
      this._lastEvent = null;
      this._updateHoverStyles(_0x5097f1, _0x163dfe);
    }
  }
  notifyPlugins(_0x7b9690, _0x2b3e69, _0x55fbf5) {
    return this._plugins.notify(this, _0x7b9690, _0x2b3e69, _0x55fbf5);
  }
  isPluginEnabled(_0x6c7902) {
    return this._plugins._cache.filter(_0x3577b5 => _0x3577b5.plugin.id === _0x6c7902).length === 1;
  }
  _updateHoverStyles(_0x17801f, _0x4ad1f4, _0x48d2b8) {
    const _0x36aa07 = this.options.hover;
    const _0x2f0490 = (_0x315ba4, _0x6714d9) => _0x315ba4.filter(_0x3deba9 => !_0x6714d9.some(_0x49c0a5 => _0x3deba9.datasetIndex === _0x49c0a5.datasetIndex && _0x3deba9.index === _0x49c0a5.index));
    const _0x4dfeb3 = _0x2f0490(_0x4ad1f4, _0x17801f);
    const _0x3e40e6 = _0x48d2b8 ? _0x17801f : _0x2f0490(_0x17801f, _0x4ad1f4);
    if (_0x4dfeb3.length) {
      this.updateHoverStyle(_0x4dfeb3, _0x36aa07.mode, false);
    }
    if (_0x3e40e6.length && _0x36aa07.mode) {
      this.updateHoverStyle(_0x3e40e6, _0x36aa07.mode, true);
    }
  }
  _eventHandler(_0x43f5e8, _0x507a8a) {
    const _0x40cb46 = {
      event: _0x43f5e8,
      replay: _0x507a8a,
      cancelable: true,
      inChartArea: this.isPointInArea(_0x43f5e8)
    };
    const _0x122c6f = _0x2d5f72 => (_0x2d5f72.options.events || this.options.events).includes(_0x43f5e8.native.type);
    if (this.notifyPlugins("beforeEvent", _0x40cb46, _0x122c6f) === false) {
      return;
    }
    const _0x2cd0f8 = this._handleEvent(_0x43f5e8, _0x507a8a, _0x40cb46.inChartArea);
    _0x40cb46.cancelable = false;
    this.notifyPlugins("afterEvent", _0x40cb46, _0x122c6f);
    if (_0x2cd0f8 || _0x40cb46.changed) {
      this.render();
    }
    return this;
  }
  _handleEvent(_0x353ef6, _0xba19de, _0x246277) {
    const {
      _active: _0x16f57e = [],
      options: _0x38f475
    } = this;
    const _0x5d8627 = _0xba19de;
    const _0x27325f = this._getActiveElements(_0x353ef6, _0x16f57e, _0x246277, _0x5d8627);
    const _0x20374a = uf(_0x353ef6);
    const _0x3d4ced = Jd(_0x353ef6, this._lastEvent, _0x246277, _0x20374a);
    if (_0x246277) {
      this._lastEvent = null;
      j(_0x38f475.onHover, [_0x353ef6, _0x27325f, this], this);
      if (_0x20374a) {
        j(_0x38f475.onClick, [_0x353ef6, _0x27325f, this], this);
      }
    }
    const _0x3504f7 = !Ts(_0x27325f, _0x16f57e);
    if (_0x3504f7 || _0xba19de) {
      this._active = _0x27325f;
      this._updateHoverStyles(_0x27325f, _0x16f57e, _0xba19de);
    }
    this._lastEvent = _0x3d4ced;
    return _0x3504f7;
  }
  _getActiveElements(_0x340fcd, _0xe3d385, _0x3d230d, _0x239f03) {
    if (_0x340fcd.type === "mouseout") {
      return [];
    }
    if (!_0x3d230d) {
      return _0xe3d385;
    }
    const _0x29acbc = this.options.hover;
    return this.getElementsAtEventForMode(_0x340fcd, _0x29acbc.mode, _0x29acbc, _0x239f03);
  }
}
function ba() {
  return tt(Ne.instances, _0x33e813 => _0x33e813._plugins.invalidate());
}
function zu(_0x4cc8ad, _0x3912a6, _0x597676 = _0x3912a6) {
  _0x4cc8ad.lineCap = I(_0x597676.borderCapStyle, _0x3912a6.borderCapStyle);
  _0x4cc8ad.setLineDash(I(_0x597676.borderDash, _0x3912a6.borderDash));
  _0x4cc8ad.lineDashOffset = I(_0x597676.borderDashOffset, _0x3912a6.borderDashOffset);
  _0x4cc8ad.lineJoin = I(_0x597676.borderJoinStyle, _0x3912a6.borderJoinStyle);
  _0x4cc8ad.lineWidth = I(_0x597676.borderWidth, _0x3912a6.borderWidth);
  _0x4cc8ad.strokeStyle = I(_0x597676.borderColor, _0x3912a6.borderColor);
}
function ep(_0x1fc94a, _0x59e546, _0x5267cb) {
  _0x1fc94a.lineTo(_0x5267cb.x, _0x5267cb.y);
}
function np(_0x3f129d) {
  if (_0x3f129d.stepped) {
    return Ff;
  } else if (_0x3f129d.tension || _0x3f129d.cubicInterpolationMode === "monotone") {
    return zf;
  } else {
    return ep;
  }
}
function Bu(_0x542840, _0x2cc8dc, _0x3bd8dc = {}) {
  const _0x23db71 = _0x542840.length;
  const {
    start: _0x20643f = 0,
    end: _0x5b3830 = _0x23db71 - 1
  } = _0x3bd8dc;
  const {
    start: _0x5d6833,
    end: _0x190c39
  } = _0x2cc8dc;
  const _0x545e4a = Math.max(_0x20643f, _0x5d6833);
  const _0x1bdb35 = Math.min(_0x5b3830, _0x190c39);
  const _0x51efec = _0x20643f < _0x5d6833 && _0x5b3830 < _0x5d6833 || _0x20643f > _0x190c39 && _0x5b3830 > _0x190c39;
  return {
    count: _0x23db71,
    start: _0x545e4a,
    loop: _0x2cc8dc.loop,
    ilen: _0x1bdb35 < _0x545e4a && !_0x51efec ? _0x23db71 + _0x1bdb35 - _0x545e4a : _0x1bdb35 - _0x545e4a
  };
}
function rp(_0x212331, _0x34fa9f, _0x324b5b, _0x2583eb) {
  const {
    points: _0x5007ab,
    options: _0x21b937
  } = _0x34fa9f;
  const {
    count: _0x1b0ae3,
    start: _0x553159,
    loop: _0x4acb6a,
    ilen: _0x51ad91
  } = Bu(_0x5007ab, _0x324b5b, _0x2583eb);
  const _0x566e44 = np(_0x21b937);
  let {
    move: _0x22907c = true,
    reverse: _0x5ac6cd
  } = _0x2583eb || {};
  let _0x46cf12;
  let _0x2c8bb5;
  let _0x2737e8;
  for (_0x46cf12 = 0; _0x46cf12 <= _0x51ad91; ++_0x46cf12) {
    _0x2c8bb5 = _0x5007ab[(_0x553159 + (_0x5ac6cd ? _0x51ad91 - _0x46cf12 : _0x46cf12)) % _0x1b0ae3];
    if (!_0x2c8bb5.skip) {
      if (_0x22907c) {
        _0x212331.moveTo(_0x2c8bb5.x, _0x2c8bb5.y);
        _0x22907c = false;
      } else {
        _0x566e44(_0x212331, _0x2737e8, _0x2c8bb5, _0x5ac6cd, _0x21b937.stepped);
      }
      _0x2737e8 = _0x2c8bb5;
    }
  }
  if (_0x4acb6a) {
    _0x2c8bb5 = _0x5007ab[(_0x553159 + (_0x5ac6cd ? _0x51ad91 : 0)) % _0x1b0ae3];
    _0x566e44(_0x212331, _0x2737e8, _0x2c8bb5, _0x5ac6cd, _0x21b937.stepped);
  }
  return !!_0x4acb6a;
}
function ip(_0xaf6a3d, _0x502a11, _0x153294, _0x3f3b96) {
  const _0x40e6da = _0x502a11.points;
  const {
    count: _0x491473,
    start: _0x5e2045,
    ilen: _0x2e732b
  } = Bu(_0x40e6da, _0x153294, _0x3f3b96);
  const {
    move: _0x498d69 = true,
    reverse: _0x40e28d
  } = _0x3f3b96 || {};
  let _0x17f133 = 0;
  let _0x4e84e4 = 0;
  let _0x227b57;
  let _0x26f1fa;
  let _0x287a23;
  let _0x22b4e9;
  let _0x122481;
  let _0x24602f;
  const _0x24e405 = _0x127f74 => (_0x5e2045 + (_0x40e28d ? _0x2e732b - _0x127f74 : _0x127f74)) % _0x491473;
  const _0x1c3022 = () => {
    if (_0x22b4e9 !== _0x122481) {
      _0xaf6a3d.lineTo(_0x17f133, _0x122481);
      _0xaf6a3d.lineTo(_0x17f133, _0x22b4e9);
      _0xaf6a3d.lineTo(_0x17f133, _0x24602f);
    }
  };
  if (_0x498d69) {
    _0x26f1fa = _0x40e6da[_0x24e405(0)];
    _0xaf6a3d.moveTo(_0x26f1fa.x, _0x26f1fa.y);
  }
  _0x227b57 = 0;
  for (; _0x227b57 <= _0x2e732b; ++_0x227b57) {
    _0x26f1fa = _0x40e6da[_0x24e405(_0x227b57)];
    if (_0x26f1fa.skip) {
      continue;
    }
    const _0x42828b = _0x26f1fa.x;
    const _0x108005 = _0x26f1fa.y;
    const _0x57c1d8 = _0x42828b | 0;
    if (_0x57c1d8 === _0x287a23) {
      if (_0x108005 < _0x22b4e9) {
        _0x22b4e9 = _0x108005;
      } else if (_0x108005 > _0x122481) {
        _0x122481 = _0x108005;
      }
      _0x17f133 = (_0x4e84e4 * _0x17f133 + _0x42828b) / ++_0x4e84e4;
    } else {
      _0x1c3022();
      _0xaf6a3d.lineTo(_0x42828b, _0x108005);
      _0x287a23 = _0x57c1d8;
      _0x4e84e4 = 0;
      _0x22b4e9 = _0x122481 = _0x108005;
    }
    _0x24602f = _0x108005;
  }
  _0x1c3022();
}
function Di(_0x1b5c8f) {
  const _0x56e4b4 = _0x1b5c8f.options;
  const _0x36b5c6 = _0x56e4b4.borderDash && _0x56e4b4.borderDash.length;
  if (!_0x1b5c8f._decimated && !_0x1b5c8f._loop && !_0x56e4b4.tension && _0x56e4b4.cubicInterpolationMode !== "monotone" && !_0x56e4b4.stepped && !_0x36b5c6) {
    return ip;
  } else {
    return rp;
  }
}
function op(_0x34096c) {
  if (_0x34096c.stepped) {
    return vh;
  } else if (_0x34096c.tension || _0x34096c.cubicInterpolationMode === "monotone") {
    return wh;
  } else {
    return qt;
  }
}
function sp(_0x17c395, _0x3d3b26, _0x43c763, _0x2fcf71) {
  let _0x4d6c09 = _0x3d3b26._path;
  if (!_0x4d6c09) {
    _0x4d6c09 = _0x3d3b26._path = new Path2D();
    if (_0x3d3b26.path(_0x4d6c09, _0x43c763, _0x2fcf71)) {
      _0x4d6c09.closePath();
    }
  }
  zu(_0x17c395, _0x3d3b26.options);
  _0x17c395.stroke(_0x4d6c09);
}
function ap(_0x56778d, _0xc7d89e, _0x3d3ea0, _0x2c6087) {
  const {
    segments: _0x1e545e,
    options: _0x12fceb
  } = _0xc7d89e;
  const _0x16be34 = Di(_0xc7d89e);
  for (const _0x456e45 of _0x1e545e) {
    zu(_0x56778d, _0x12fceb, _0x456e45.style);
    _0x56778d.beginPath();
    if (_0x16be34(_0x56778d, _0xc7d89e, _0x456e45, {
      start: _0x3d3ea0,
      end: _0x3d3ea0 + _0x2c6087 - 1
    })) {
      _0x56778d.closePath();
    }
    _0x56778d.stroke();
  }
}
const cp = typeof Path2D == "function";
function up(_0x1a8f9c, _0x1fa5df, _0x4c99ac, _0x1eac8a) {
  if (cp && !_0x1fa5df.options.segment) {
    sp(_0x1a8f9c, _0x1fa5df, _0x4c99ac, _0x1eac8a);
  } else {
    ap(_0x1a8f9c, _0x1fa5df, _0x4c99ac, _0x1eac8a);
  }
}
class lp extends ti {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: true,
    cubicInterpolationMode: "default",
    fill: false,
    spanGaps: false,
    stepped: false,
    tension: 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  static descriptors = {
    _scriptable: true,
    _indexable: t => t !== "borderDash" && t !== "fill"
  };
  constructor(_0x192d8f) {
    super();
    this.animated = true;
    this.options = undefined;
    this._chart = undefined;
    this._loop = undefined;
    this._fullLoop = undefined;
    this._path = undefined;
    this._points = undefined;
    this._segments = undefined;
    this._decimated = false;
    this._pointsUpdated = false;
    this._datasetIndex = undefined;
    if (_0x192d8f) {
      Object.assign(this, _0x192d8f);
    }
  }
  updateControlPoints(_0x393616, _0x27a1d2) {
    const _0x18f3b8 = this.options;
    if ((_0x18f3b8.tension || _0x18f3b8.cubicInterpolationMode === "monotone") && !_0x18f3b8.stepped && !this._pointsUpdated) {
      const _0x9bf602 = _0x18f3b8.spanGaps ? this._loop : this._fullLoop;
      hh(this._points, _0x18f3b8, _0x393616, _0x9bf602, _0x27a1d2);
      this._pointsUpdated = true;
    }
  }
  set points(_0x2a27d6) {
    this._points = _0x2a27d6;
    delete this._segments;
    delete this._path;
    this._pointsUpdated = false;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments ||= Mh(this, this.options.segment);
  }
  first() {
    const _0x2439fd = this.segments;
    const _0x9bf3d1 = this.points;
    return _0x2439fd.length && _0x9bf3d1[_0x2439fd[0].start];
  }
  last() {
    const _0x142f2e = this.segments;
    const _0x4f81a6 = this.points;
    const _0x4b6936 = _0x142f2e.length;
    return _0x4b6936 && _0x4f81a6[_0x142f2e[_0x4b6936 - 1].end];
  }
  interpolate(_0x195a2c, _0x45fdec) {
    const _0x2af845 = this.options;
    const _0x2625f8 = _0x195a2c[_0x45fdec];
    const _0xc53569 = this.points;
    const _0x48d094 = Ph(this, {
      property: _0x45fdec,
      start: _0x2625f8,
      end: _0x2625f8
    });
    if (!_0x48d094.length) {
      return;
    }
    const _0x267be4 = [];
    const _0x23e509 = op(_0x2af845);
    let _0x4fc881;
    let _0x2d0113;
    _0x4fc881 = 0;
    _0x2d0113 = _0x48d094.length;
    for (; _0x4fc881 < _0x2d0113; ++_0x4fc881) {
      const {
        start: _0xde7f3e,
        end: _0x189431
      } = _0x48d094[_0x4fc881];
      const _0x18a71e = _0xc53569[_0xde7f3e];
      const _0x2f7d21 = _0xc53569[_0x189431];
      if (_0x18a71e === _0x2f7d21) {
        _0x267be4.push(_0x18a71e);
        continue;
      }
      const _0x4f9470 = Math.abs((_0x2625f8 - _0x18a71e[_0x45fdec]) / (_0x2f7d21[_0x45fdec] - _0x18a71e[_0x45fdec]));
      const _0x1d3222 = _0x23e509(_0x18a71e, _0x2f7d21, _0x4f9470, _0x2af845.stepped);
      _0x1d3222[_0x45fdec] = _0x195a2c[_0x45fdec];
      _0x267be4.push(_0x1d3222);
    }
    if (_0x267be4.length === 1) {
      return _0x267be4[0];
    } else {
      return _0x267be4;
    }
  }
  pathSegment(_0x104455, _0x39950f, _0x2ed12e) {
    return Di(this)(_0x104455, this, _0x39950f, _0x2ed12e);
  }
  path(_0x2fbec7, _0x404b9a, _0x458002) {
    const _0x549d68 = this.segments;
    const _0x5b20a3 = Di(this);
    let _0x2ccdca = this._loop;
    _0x404b9a = _0x404b9a || 0;
    _0x458002 = _0x458002 || this.points.length - _0x404b9a;
    for (const _0x5137f1 of _0x549d68) {
      _0x2ccdca &= _0x5b20a3(_0x2fbec7, this, _0x5137f1, {
        start: _0x404b9a,
        end: _0x404b9a + _0x458002 - 1
      });
    }
    return !!_0x2ccdca;
  }
  draw(_0x19bdaf, _0x20ce66, _0x2b8daf, _0x4cf178) {
    const _0x130fd3 = this.options || {};
    if ((this.points || []).length && _0x130fd3.borderWidth) {
      _0x19bdaf.save();
      up(_0x19bdaf, this, _0x2b8daf, _0x4cf178);
      _0x19bdaf.restore();
    }
    if (this.animated) {
      this._pointsUpdated = false;
      this._path = undefined;
    }
  }
}
function _a(_0x416389, _0x440c63, _0x364cae, _0x486d4c) {
  const _0x1582b0 = _0x416389.options;
  const {
    [_0x364cae]: _0x229f69
  } = _0x416389.getProps([_0x364cae], _0x486d4c);
  return Math.abs(_0x440c63 - _0x229f69) < _0x1582b0.radius + _0x1582b0.hitRadius;
}
class fp extends ti {
  static id = "point";
  parsed;
  skip;
  stop;
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(_0x14a599) {
    super();
    this.options = undefined;
    this.parsed = undefined;
    this.skip = undefined;
    this.stop = undefined;
    if (_0x14a599) {
      Object.assign(this, _0x14a599);
    }
  }
  inRange(_0x1135c2, _0x54661a, _0x44cba7) {
    const _0x793e1e = this.options;
    const {
      x: _0x14e960,
      y: _0x37cc23
    } = this.getProps(["x", "y"], _0x44cba7);
    return Math.pow(_0x1135c2 - _0x14e960, 2) + Math.pow(_0x54661a - _0x37cc23, 2) < Math.pow(_0x793e1e.hitRadius + _0x793e1e.radius, 2);
  }
  inXRange(_0x343b2b, _0x5cce05) {
    return _a(this, _0x343b2b, "x", _0x5cce05);
  }
  inYRange(_0x489c86, _0x37e22d) {
    return _a(this, _0x489c86, "y", _0x37e22d);
  }
  getCenterPoint(_0x3ccea5) {
    const {
      x: _0x40787b,
      y: _0x49b8d9
    } = this.getProps(["x", "y"], _0x3ccea5);
    return {
      x: _0x40787b,
      y: _0x49b8d9
    };
  }
  size(_0x495ae8) {
    _0x495ae8 = _0x495ae8 || this.options || {};
    let _0x962758 = _0x495ae8.radius || 0;
    _0x962758 = Math.max(_0x962758, _0x962758 && _0x495ae8.hoverRadius || 0);
    const _0xe39af = _0x962758 && _0x495ae8.borderWidth || 0;
    return (_0x962758 + _0xe39af) * 2;
  }
  draw(_0x2acdf5, _0x4e2341) {
    const _0x466e7e = this.options;
    if (!this.skip && !(_0x466e7e.radius < 0.1) && !!St(this, _0x4e2341, this.size(_0x466e7e) / 2)) {
      _0x2acdf5.strokeStyle = _0x466e7e.borderColor;
      _0x2acdf5.lineWidth = _0x466e7e.borderWidth;
      _0x2acdf5.fillStyle = _0x466e7e.backgroundColor;
      Af(_0x2acdf5, _0x466e7e, this.x, this.y);
    }
  }
  getRange() {
    const _0x41ddca = this.options || {};
    return _0x41ddca.radius + _0x41ddca.hitRadius;
  }
}
const hp = (_0x32c0db, _0x34ec7e, _0x5ebdaa, _0xacf3f6) => {
  if (typeof _0x34ec7e == "string") {
    _0x5ebdaa = _0x32c0db.push(_0x34ec7e) - 1;
    _0xacf3f6.unshift({
      index: _0x5ebdaa,
      label: _0x34ec7e
    });
  } else if (isNaN(_0x34ec7e)) {
    _0x5ebdaa = null;
  }
  return _0x5ebdaa;
};
function dp(_0x2c5e4b, _0x34e16f, _0x4744d0, _0x31ff76) {
  const _0x4e45a8 = _0x2c5e4b.indexOf(_0x34e16f);
  if (_0x4e45a8 === -1) {
    return hp(_0x2c5e4b, _0x34e16f, _0x4744d0, _0x31ff76);
  }
  const _0x2dce7b = _0x2c5e4b.lastIndexOf(_0x34e16f);
  if (_0x4e45a8 !== _0x2dce7b) {
    return _0x4744d0;
  } else {
    return _0x4e45a8;
  }
}
const pp = (_0x503c4e, _0x2e85e0) => _0x503c4e === null ? null : vt(Math.round(_0x503c4e), 0, _0x2e85e0);
function va(_0x2d1b80) {
  const _0x5736a4 = this.getLabels();
  if (_0x2d1b80 >= 0 && _0x2d1b80 < _0x5736a4.length) {
    return _0x5736a4[_0x2d1b80];
  } else {
    return _0x2d1b80;
  }
}
class gp extends te {
  static id = "category";
  static defaults = {
    ticks: {
      callback: va
    }
  };
  constructor(_0x339d1f) {
    super(_0x339d1f);
    this._startValue = undefined;
    this._valueRange = 0;
    this._addedLabels = [];
  }
  init(_0x2a1c6f) {
    const _0x504740 = this._addedLabels;
    if (_0x504740.length) {
      const _0x3b561a = this.getLabels();
      for (const {
        index: _0x301d66,
        label: _0x6df72
      } of _0x504740) {
        if (_0x3b561a[_0x301d66] === _0x6df72) {
          _0x3b561a.splice(_0x301d66, 1);
        }
      }
      this._addedLabels = [];
    }
    super.init(_0x2a1c6f);
  }
  parse(_0x2018b9, _0x3725c2) {
    if (z(_0x2018b9)) {
      return null;
    }
    const _0x57b92c = this.getLabels();
    _0x3725c2 = isFinite(_0x3725c2) && _0x57b92c[_0x3725c2] === _0x2018b9 ? _0x3725c2 : dp(_0x57b92c, _0x2018b9, I(_0x3725c2, _0x2018b9), this._addedLabels);
    return pp(_0x3725c2, _0x57b92c.length - 1);
  }
  determineDataLimits() {
    const {
      minDefined: _0x12e53d,
      maxDefined: _0x19a342
    } = this.getUserBounds();
    let {
      min: _0x13b5d3,
      max: _0x49b776
    } = this.getMinMax(true);
    if (this.options.bounds === "ticks") {
      if (!_0x12e53d) {
        _0x13b5d3 = 0;
      }
      if (!_0x19a342) {
        _0x49b776 = this.getLabels().length - 1;
      }
    }
    this.min = _0x13b5d3;
    this.max = _0x49b776;
  }
  buildTicks() {
    const _0x162815 = this.min;
    const _0x3a988d = this.max;
    const _0x2f28f4 = this.options.offset;
    const _0x34c981 = [];
    let _0x3e2133 = this.getLabels();
    _0x3e2133 = _0x162815 === 0 && _0x3a988d === _0x3e2133.length - 1 ? _0x3e2133 : _0x3e2133.slice(_0x162815, _0x3a988d + 1);
    this._valueRange = Math.max(_0x3e2133.length - (_0x2f28f4 ? 0 : 1), 1);
    this._startValue = this.min - (_0x2f28f4 ? 0.5 : 0);
    for (let _0xb553df = _0x162815; _0xb553df <= _0x3a988d; _0xb553df++) {
      _0x34c981.push({
        value: _0xb553df
      });
    }
    return _0x34c981;
  }
  getLabelForValue(_0x5c738f) {
    return va.call(this, _0x5c738f);
  }
  configure() {
    super.configure();
    if (!this.isHorizontal()) {
      this._reversePixels = !this._reversePixels;
    }
  }
  getPixelForValue(_0x45a38a) {
    if (typeof _0x45a38a != "number") {
      _0x45a38a = this.parse(_0x45a38a);
    }
    if (_0x45a38a === null) {
      return NaN;
    } else {
      return this.getPixelForDecimal((_0x45a38a - this._startValue) / this._valueRange);
    }
  }
  getPixelForTick(_0x7af987) {
    const _0x21835c = this.ticks;
    if (_0x7af987 < 0 || _0x7af987 > _0x21835c.length - 1) {
      return null;
    } else {
      return this.getPixelForValue(_0x21835c[_0x7af987].value);
    }
  }
  getValueForPixel(_0x28e860) {
    return Math.round(this._startValue + this.getDecimalForPixel(_0x28e860) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function yp(_0x3bd1b1, _0x5bcbbe) {
  const _0x1bd56b = [];
  const {
    bounds: _0x23fc48,
    step: _0x2d6426,
    min: _0x4172ff,
    max: _0x25ede6,
    precision: _0x2f360f,
    count: _0x2d2d4b,
    maxTicks: _0x235f29,
    maxDigits: _0x1d1e52,
    includeBounds: _0x3323ff
  } = _0x3bd1b1;
  const _0x3137b2 = _0x2d6426 || 1;
  const _0x383fb9 = _0x235f29 - 1;
  const {
    min: _0x1e3aa5,
    max: _0x1fd4c6
  } = _0x5bcbbe;
  const _0x54e8a3 = !z(_0x4172ff);
  const _0x287d48 = !z(_0x25ede6);
  const _0x592e0e = !z(_0x2d2d4b);
  const _0x528160 = (_0x1fd4c6 - _0x1e3aa5) / (_0x1d1e52 + 1);
  let _0x50f8b4 = $s((_0x1fd4c6 - _0x1e3aa5) / _0x383fb9 / _0x3137b2) * _0x3137b2;
  let _0x1a971d;
  let _0x2dbb93;
  let _0x5a280e;
  let _0x56abc9;
  if (_0x50f8b4 < 1e-14 && !_0x54e8a3 && !_0x287d48) {
    return [{
      value: _0x1e3aa5
    }, {
      value: _0x1fd4c6
    }];
  }
  _0x56abc9 = Math.ceil(_0x1fd4c6 / _0x50f8b4) - Math.floor(_0x1e3aa5 / _0x50f8b4);
  if (_0x56abc9 > _0x383fb9) {
    _0x50f8b4 = $s(_0x56abc9 * _0x50f8b4 / _0x383fb9 / _0x3137b2) * _0x3137b2;
  }
  if (!z(_0x2f360f)) {
    _0x1a971d = Math.pow(10, _0x2f360f);
    _0x50f8b4 = Math.ceil(_0x50f8b4 * _0x1a971d) / _0x1a971d;
  }
  if (_0x23fc48 === "ticks") {
    _0x2dbb93 = Math.floor(_0x1e3aa5 / _0x50f8b4) * _0x50f8b4;
    _0x5a280e = Math.ceil(_0x1fd4c6 / _0x50f8b4) * _0x50f8b4;
  } else {
    _0x2dbb93 = _0x1e3aa5;
    _0x5a280e = _0x1fd4c6;
  }
  if (_0x54e8a3 && _0x287d48 && _0x2d6426 && df((_0x25ede6 - _0x4172ff) / _0x2d6426, _0x50f8b4 / 1000)) {
    _0x56abc9 = Math.round(Math.min((_0x25ede6 - _0x4172ff) / _0x50f8b4, _0x235f29));
    _0x50f8b4 = (_0x25ede6 - _0x4172ff) / _0x56abc9;
    _0x2dbb93 = _0x4172ff;
    _0x5a280e = _0x25ede6;
  } else if (_0x592e0e) {
    _0x2dbb93 = _0x54e8a3 ? _0x4172ff : _0x2dbb93;
    _0x5a280e = _0x287d48 ? _0x25ede6 : _0x5a280e;
    _0x56abc9 = _0x2d2d4b - 1;
    _0x50f8b4 = (_0x5a280e - _0x2dbb93) / _0x56abc9;
  } else {
    _0x56abc9 = (_0x5a280e - _0x2dbb93) / _0x50f8b4;
    if (ke(_0x56abc9, Math.round(_0x56abc9), _0x50f8b4 / 1000)) {
      _0x56abc9 = Math.round(_0x56abc9);
    } else {
      _0x56abc9 = Math.ceil(_0x56abc9);
    }
  }
  const _0x146b26 = Math.max(Rs(_0x50f8b4), Rs(_0x2dbb93));
  _0x1a971d = Math.pow(10, z(_0x2f360f) ? _0x146b26 : _0x2f360f);
  _0x2dbb93 = Math.round(_0x2dbb93 * _0x1a971d) / _0x1a971d;
  _0x5a280e = Math.round(_0x5a280e * _0x1a971d) / _0x1a971d;
  let _0x2022d5 = 0;
  for (_0x54e8a3 && (_0x3323ff && _0x2dbb93 !== _0x4172ff ? (_0x1bd56b.push({
    value: _0x4172ff
  }), _0x2dbb93 < _0x4172ff && _0x2022d5++, ke(Math.round((_0x2dbb93 + _0x2022d5 * _0x50f8b4) * _0x1a971d) / _0x1a971d, _0x4172ff, wa(_0x4172ff, _0x528160, _0x3bd1b1)) && _0x2022d5++) : _0x2dbb93 < _0x4172ff && _0x2022d5++); _0x2022d5 < _0x56abc9; ++_0x2022d5) {
    const _0x94b1ff = Math.round((_0x2dbb93 + _0x2022d5 * _0x50f8b4) * _0x1a971d) / _0x1a971d;
    if (_0x287d48 && _0x94b1ff > _0x25ede6) {
      break;
    }
    _0x1bd56b.push({
      value: _0x94b1ff
    });
  }
  if (_0x287d48 && _0x3323ff && _0x5a280e !== _0x25ede6) {
    if (_0x1bd56b.length && ke(_0x1bd56b[_0x1bd56b.length - 1].value, _0x25ede6, wa(_0x25ede6, _0x528160, _0x3bd1b1))) {
      _0x1bd56b[_0x1bd56b.length - 1].value = _0x25ede6;
    } else {
      _0x1bd56b.push({
        value: _0x25ede6
      });
    }
  } else if (!_0x287d48 || _0x5a280e === _0x25ede6) {
    _0x1bd56b.push({
      value: _0x5a280e
    });
  }
  return _0x1bd56b;
}
function wa(_0x25e6b6, _0x544eae, {
  horizontal: _0x3c9690,
  minRotation: _0x3c5a7e
}) {
  const _0x4d83ef = At(_0x3c5a7e);
  const _0x4b23d9 = (_0x3c9690 ? Math.sin(_0x4d83ef) : Math.cos(_0x4d83ef)) || 0.001;
  const _0x3aa4cf = _0x544eae * 0.75 * ("" + _0x25e6b6).length;
  return Math.min(_0x544eae / _0x4b23d9, _0x3aa4cf);
}
class dr extends te {
  constructor(_0x9d65b9) {
    super(_0x9d65b9);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }
  parse(_0x3cca72, _0x5afff3) {
    if (z(_0x3cca72) || (typeof _0x3cca72 == "number" || _0x3cca72 instanceof Number) && !isFinite(+_0x3cca72)) {
      return null;
    } else {
      return +_0x3cca72;
    }
  }
  handleTickRangeOptions() {
    const {
      beginAtZero: _0x205e2d
    } = this.options;
    const {
      minDefined: _0x46764b,
      maxDefined: _0x3f0b0c
    } = this.getUserBounds();
    let {
      min: _0x1ff5f0,
      max: _0x555541
    } = this;
    const _0x5bce23 = _0x102586 => _0x1ff5f0 = _0x46764b ? _0x1ff5f0 : _0x102586;
    const _0x115fb1 = _0x3dabac => _0x555541 = _0x3f0b0c ? _0x555541 : _0x3dabac;
    if (_0x205e2d) {
      const _0x18b968 = ue(_0x1ff5f0);
      const _0x5a115d = ue(_0x555541);
      if (_0x18b968 < 0 && _0x5a115d < 0) {
        _0x115fb1(0);
      } else if (_0x18b968 > 0 && _0x5a115d > 0) {
        _0x5bce23(0);
      }
    }
    if (_0x1ff5f0 === _0x555541) {
      let _0x427809 = _0x555541 === 0 ? 1 : Math.abs(_0x555541 * 0.05);
      _0x115fb1(_0x555541 + _0x427809);
      if (!_0x205e2d) {
        _0x5bce23(_0x1ff5f0 - _0x427809);
      }
    }
    this.min = _0x1ff5f0;
    this.max = _0x555541;
  }
  getTickLimit() {
    const _0x5c2d07 = this.options.ticks;
    let {
      maxTicksLimit: _0x19d789,
      stepSize: _0x56e614
    } = _0x5c2d07;
    let _0x3d5d6e;
    if (_0x56e614) {
      _0x3d5d6e = Math.ceil(this.max / _0x56e614) - Math.floor(this.min / _0x56e614) + 1;
      if (_0x3d5d6e > 1000) {
        console.warn("scales." + this.id + ".ticks.stepSize: " + _0x56e614 + " would result generating up to " + _0x3d5d6e + " ticks. Limiting to 1000.");
        _0x3d5d6e = 1000;
      }
    } else {
      _0x3d5d6e = this.computeTickLimit();
      _0x19d789 = _0x19d789 || 11;
    }
    if (_0x19d789) {
      _0x3d5d6e = Math.min(_0x19d789, _0x3d5d6e);
    }
    return _0x3d5d6e;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const _0x4183c2 = this.options;
    const _0x5f3431 = _0x4183c2.ticks;
    let _0x5e85a8 = this.getTickLimit();
    _0x5e85a8 = Math.max(2, _0x5e85a8);
    const _0x3a5068 = {
      maxTicks: _0x5e85a8,
      bounds: _0x4183c2.bounds,
      min: _0x4183c2.min,
      max: _0x4183c2.max,
      precision: _0x5f3431.precision,
      step: _0x5f3431.stepSize,
      count: _0x5f3431.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: _0x5f3431.minRotation || 0,
      includeBounds: _0x5f3431.includeBounds !== false
    };
    const _0x3b1622 = this._range || this;
    const _0x3c6443 = yp(_0x3a5068, _0x3b1622);
    if (_0x4183c2.bounds === "ticks") {
      hu(_0x3c6443, this, "value");
    }
    if (_0x4183c2.reverse) {
      _0x3c6443.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return _0x3c6443;
  }
  configure() {
    const _0x45c0a5 = this.ticks;
    let _0x43d56f = this.min;
    let _0x267f4d = this.max;
    super.configure();
    if (this.options.offset && _0x45c0a5.length) {
      const _0x5a1667 = (_0x267f4d - _0x43d56f) / Math.max(_0x45c0a5.length - 1, 1) / 2;
      _0x43d56f -= _0x5a1667;
      _0x267f4d += _0x5a1667;
    }
    this._startValue = _0x43d56f;
    this._endValue = _0x267f4d;
    this._valueRange = _0x267f4d - _0x43d56f;
  }
  getLabelForValue(_0x45768c) {
    return es(_0x45768c, this.chart.options.locale, this.options.ticks.format);
  }
}
class mp extends dr {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Zr.formatters.numeric
    }
  };
  determineDataLimits() {
    const {
      min: _0x3f637c,
      max: _0x5ad530
    } = this.getMinMax(true);
    this.min = K(_0x3f637c) ? _0x3f637c : 0;
    this.max = K(_0x5ad530) ? _0x5ad530 : 1;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const _0x5cf4d3 = this.isHorizontal();
    const _0x1194fa = _0x5cf4d3 ? this.width : this.height;
    const _0x110711 = At(this.options.ticks.minRotation);
    const _0x5b2406 = (_0x5cf4d3 ? Math.sin(_0x110711) : Math.cos(_0x110711)) || 0.001;
    const _0x2cd16f = this._resolveTickFontOptions(0);
    return Math.ceil(_0x1194fa / Math.min(40, _0x2cd16f.lineHeight / _0x5b2406));
  }
  getPixelForValue(_0x3cae6a) {
    if (_0x3cae6a === null) {
      return NaN;
    } else {
      return this.getPixelForDecimal((_0x3cae6a - this._startValue) / this._valueRange);
    }
  }
  getValueForPixel(_0x4c073a) {
    return this._startValue + this.getDecimalForPixel(_0x4c073a) * this._valueRange;
  }
}
const Fe = _0x815367 => Math.floor(Lt(_0x815367));
const Yt = (_0x8e0039, _0x52a30d) => Math.pow(10, Fe(_0x8e0039) + _0x52a30d);
function xa(_0x5a727f) {
  return _0x5a727f / Math.pow(10, Fe(_0x5a727f)) === 1;
}
function Oa(_0x457e87, _0x41e806, _0x164813) {
  const _0x4a1992 = Math.pow(10, _0x164813);
  const _0x3db12c = Math.floor(_0x457e87 / _0x4a1992);
  return Math.ceil(_0x41e806 / _0x4a1992) - _0x3db12c;
}
function bp(_0x26bbed, _0x252864) {
  const _0x425d5e = _0x252864 - _0x26bbed;
  let _0x5b1302 = Fe(_0x425d5e);
  while (Oa(_0x26bbed, _0x252864, _0x5b1302) > 10) {
    _0x5b1302++;
  }
  while (Oa(_0x26bbed, _0x252864, _0x5b1302) < 10) {
    _0x5b1302--;
  }
  return Math.min(_0x5b1302, Fe(_0x26bbed));
}
function _p(_0x50ff25, {
  min: _0x5cec93,
  max: _0x593802
}) {
  _0x5cec93 = st(_0x50ff25.min, _0x5cec93);
  const _0x142d7a = [];
  const _0x1e6a07 = Fe(_0x5cec93);
  let _0xee5c7c = bp(_0x5cec93, _0x593802);
  let _0x2336e3 = _0xee5c7c < 0 ? Math.pow(10, Math.abs(_0xee5c7c)) : 1;
  const _0x13f6a4 = Math.pow(10, _0xee5c7c);
  const _0x122c47 = _0x1e6a07 > _0xee5c7c ? Math.pow(10, _0x1e6a07) : 0;
  const _0x54d2c0 = Math.round((_0x5cec93 - _0x122c47) * _0x2336e3) / _0x2336e3;
  const _0x37f43e = Math.floor((_0x5cec93 - _0x122c47) / _0x13f6a4 / 10) * _0x13f6a4 * 10;
  let _0x3adf4c = Math.floor((_0x54d2c0 - _0x37f43e) / Math.pow(10, _0xee5c7c));
  let _0x4e8ea6 = st(_0x50ff25.min, Math.round((_0x122c47 + _0x37f43e + _0x3adf4c * Math.pow(10, _0xee5c7c)) * _0x2336e3) / _0x2336e3);
  while (_0x4e8ea6 < _0x593802) {
    _0x142d7a.push({
      value: _0x4e8ea6,
      major: xa(_0x4e8ea6),
      significand: _0x3adf4c
    });
    if (_0x3adf4c >= 10) {
      _0x3adf4c = _0x3adf4c < 15 ? 15 : 20;
    } else {
      _0x3adf4c++;
    }
    if (_0x3adf4c >= 20) {
      _0xee5c7c++;
      _0x3adf4c = 2;
      _0x2336e3 = _0xee5c7c >= 0 ? 1 : _0x2336e3;
    }
    _0x4e8ea6 = Math.round((_0x122c47 + _0x37f43e + _0x3adf4c * Math.pow(10, _0xee5c7c)) * _0x2336e3) / _0x2336e3;
  }
  const _0x258fb5 = st(_0x50ff25.max, _0x4e8ea6);
  _0x142d7a.push({
    value: _0x258fb5,
    major: xa(_0x258fb5),
    significand: _0x3adf4c
  });
  return _0x142d7a;
}
class B0 extends te {
  static id = "logarithmic";
  static defaults = {
    ticks: {
      callback: Zr.formatters.logarithmic,
      major: {
        enabled: true
      }
    }
  };
  constructor(_0x2d3313) {
    super(_0x2d3313);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(_0x3fdf2c, _0x264c14) {
    const _0x59a12f = dr.prototype.parse.apply(this, [_0x3fdf2c, _0x264c14]);
    if (_0x59a12f === 0) {
      this._zero = true;
      return;
    }
    if (K(_0x59a12f) && _0x59a12f > 0) {
      return _0x59a12f;
    } else {
      return null;
    }
  }
  determineDataLimits() {
    const {
      min: _0x2b0f4a,
      max: _0x107c1b
    } = this.getMinMax(true);
    this.min = K(_0x2b0f4a) ? Math.max(0, _0x2b0f4a) : null;
    this.max = K(_0x107c1b) ? Math.max(0, _0x107c1b) : null;
    if (this.options.beginAtZero) {
      this._zero = true;
    }
    if (this._zero && this.min !== this._suggestedMin && !K(this._userMin)) {
      this.min = _0x2b0f4a === Yt(this.min, 0) ? Yt(this.min, -1) : Yt(this.min, 0);
    }
    this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const {
      minDefined: _0x849282,
      maxDefined: _0x1e7e83
    } = this.getUserBounds();
    let _0xdb5089 = this.min;
    let _0x2fc8a5 = this.max;
    const _0x547abf = _0x282545 => _0xdb5089 = _0x849282 ? _0xdb5089 : _0x282545;
    const _0x433ce5 = _0x2b086a => _0x2fc8a5 = _0x1e7e83 ? _0x2fc8a5 : _0x2b086a;
    if (_0xdb5089 === _0x2fc8a5) {
      if (_0xdb5089 <= 0) {
        _0x547abf(1);
        _0x433ce5(10);
      } else {
        _0x547abf(Yt(_0xdb5089, -1));
        _0x433ce5(Yt(_0x2fc8a5, 1));
      }
    }
    if (_0xdb5089 <= 0) {
      _0x547abf(Yt(_0x2fc8a5, -1));
    }
    if (_0x2fc8a5 <= 0) {
      _0x433ce5(Yt(_0xdb5089, 1));
    }
    this.min = _0xdb5089;
    this.max = _0x2fc8a5;
  }
  buildTicks() {
    const _0x133bd4 = this.options;
    const _0x5f48f2 = {
      min: this._userMin,
      max: this._userMax
    };
    const _0xa5b5d = _p(_0x5f48f2, this);
    if (_0x133bd4.bounds === "ticks") {
      hu(_0xa5b5d, this, "value");
    }
    if (_0x133bd4.reverse) {
      _0xa5b5d.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return _0xa5b5d;
  }
  getLabelForValue(_0xaf3a7d) {
    if (_0xaf3a7d === undefined) {
      return "0";
    } else {
      return es(_0xaf3a7d, this.chart.options.locale, this.options.ticks.format);
    }
  }
  configure() {
    const _0x38108a = this.min;
    super.configure();
    this._startValue = Lt(_0x38108a);
    this._valueRange = Lt(this.max) - Lt(_0x38108a);
  }
  getPixelForValue(_0x60ba8d) {
    if (_0x60ba8d === undefined || _0x60ba8d === 0) {
      _0x60ba8d = this.min;
    }
    if (_0x60ba8d === null || isNaN(_0x60ba8d)) {
      return NaN;
    } else {
      return this.getPixelForDecimal(_0x60ba8d === this.min ? 0 : (Lt(_0x60ba8d) - this._startValue) / this._valueRange);
    }
  }
  getValueForPixel(_0x5b52e3) {
    const _0x3cc562 = this.getDecimalForPixel(_0x5b52e3);
    return Math.pow(10, this._startValue + _0x3cc562 * this._valueRange);
  }
}
function $i(_0x2a5aa7) {
  const _0x38cc7c = _0x2a5aa7.ticks;
  if (_0x38cc7c.display && _0x2a5aa7.display) {
    const _0x4cfaa1 = kt(_0x38cc7c.backdropPadding);
    return I(_0x38cc7c.font && _0x38cc7c.font.size, Y.font.size) + _0x4cfaa1.height;
  }
  return 0;
}
function vp(_0x1827d3, _0x4c46af, _0x105a4c) {
  _0x105a4c = H(_0x105a4c) ? _0x105a4c : [_0x105a4c];
  return {
    w: Lf(_0x1827d3, _0x4c46af.string, _0x105a4c),
    h: _0x105a4c.length * _0x4c46af.lineHeight
  };
}
function Pa(_0x21c74a, _0x16b3cc, _0x2e79c5, _0x8a9477, _0x3e6ede) {
  if (_0x21c74a === _0x8a9477 || _0x21c74a === _0x3e6ede) {
    return {
      start: _0x16b3cc - _0x2e79c5 / 2,
      end: _0x16b3cc + _0x2e79c5 / 2
    };
  } else if (_0x21c74a < _0x8a9477 || _0x21c74a > _0x3e6ede) {
    return {
      start: _0x16b3cc - _0x2e79c5,
      end: _0x16b3cc
    };
  } else {
    return {
      start: _0x16b3cc,
      end: _0x16b3cc + _0x2e79c5
    };
  }
}
function wp(_0x1bfd25) {
  const _0x53ae1a = {
    l: _0x1bfd25.left + _0x1bfd25._padding.left,
    r: _0x1bfd25.right - _0x1bfd25._padding.right,
    t: _0x1bfd25.top + _0x1bfd25._padding.top,
    b: _0x1bfd25.bottom - _0x1bfd25._padding.bottom
  };
  const _0x514b20 = Object.assign({}, _0x53ae1a);
  const _0x3c200a = [];
  const _0x2f405c = [];
  const _0x108098 = _0x1bfd25._pointLabels.length;
  const _0x5d527e = _0x1bfd25.options.pointLabels;
  const _0x56cfe1 = _0x5d527e.centerPointLabels ? Z / _0x108098 : 0;
  for (let _0x4cb29d = 0; _0x4cb29d < _0x108098; _0x4cb29d++) {
    const _0x1f92e9 = _0x5d527e.setContext(_0x1bfd25.getPointLabelContext(_0x4cb29d));
    _0x2f405c[_0x4cb29d] = _0x1f92e9.padding;
    const _0x298f2c = _0x1bfd25.getPointPosition(_0x4cb29d, _0x1bfd25.drawingArea + _0x2f405c[_0x4cb29d], _0x56cfe1);
    const _0x2b0e96 = le(_0x1f92e9.font);
    const _0x549aab = vp(_0x1bfd25.ctx, _0x2b0e96, _0x1bfd25._pointLabels[_0x4cb29d]);
    _0x3c200a[_0x4cb29d] = _0x549aab;
    const _0x5f2e7c = gt(_0x1bfd25.getIndexAngle(_0x4cb29d) + _0x56cfe1);
    const _0x444cf7 = Math.round(Zo(_0x5f2e7c));
    const _0x3c0405 = Pa(_0x444cf7, _0x298f2c.x, _0x549aab.w, 0, 180);
    const _0x9c402d = Pa(_0x444cf7, _0x298f2c.y, _0x549aab.h, 90, 270);
    xp(_0x514b20, _0x53ae1a, _0x5f2e7c, _0x3c0405, _0x9c402d);
  }
  _0x1bfd25.setCenterPoint(_0x53ae1a.l - _0x514b20.l, _0x514b20.r - _0x53ae1a.r, _0x53ae1a.t - _0x514b20.t, _0x514b20.b - _0x53ae1a.b);
  _0x1bfd25._pointLabelItems = Sp(_0x1bfd25, _0x3c200a, _0x2f405c);
}
function xp(_0x585907, _0x24daa2, _0xaf0604, _0x2b1952, _0x3f7f60) {
  const _0x10e143 = Math.abs(Math.sin(_0xaf0604));
  const _0x2b03db = Math.abs(Math.cos(_0xaf0604));
  let _0xa3511c = 0;
  let _0x5a1715 = 0;
  if (_0x2b1952.start < _0x24daa2.l) {
    _0xa3511c = (_0x24daa2.l - _0x2b1952.start) / _0x10e143;
    _0x585907.l = Math.min(_0x585907.l, _0x24daa2.l - _0xa3511c);
  } else if (_0x2b1952.end > _0x24daa2.r) {
    _0xa3511c = (_0x2b1952.end - _0x24daa2.r) / _0x10e143;
    _0x585907.r = Math.max(_0x585907.r, _0x24daa2.r + _0xa3511c);
  }
  if (_0x3f7f60.start < _0x24daa2.t) {
    _0x5a1715 = (_0x24daa2.t - _0x3f7f60.start) / _0x2b03db;
    _0x585907.t = Math.min(_0x585907.t, _0x24daa2.t - _0x5a1715);
  } else if (_0x3f7f60.end > _0x24daa2.b) {
    _0x5a1715 = (_0x3f7f60.end - _0x24daa2.b) / _0x2b03db;
    _0x585907.b = Math.max(_0x585907.b, _0x24daa2.b + _0x5a1715);
  }
}
function Op(_0x3a40cb, _0x341faf, _0x1c31c5) {
  const _0x41d82a = _0x3a40cb.drawingArea;
  const {
    extra: _0x4181a4,
    additionalAngle: _0x43622d,
    padding: _0x249d75,
    size: _0x5c3655
  } = _0x1c31c5;
  const _0x16b01f = _0x3a40cb.getPointPosition(_0x341faf, _0x41d82a + _0x4181a4 + _0x249d75, _0x43622d);
  const _0x2cdc46 = Math.round(Zo(gt(_0x16b01f.angle + ct)));
  const _0x59fd3a = kp(_0x16b01f.y, _0x5c3655.h, _0x2cdc46);
  const _0x10aee1 = Tp(_0x2cdc46);
  const _0x3f70bf = Mp(_0x16b01f.x, _0x5c3655.w, _0x10aee1);
  return {
    visible: true,
    x: _0x16b01f.x,
    y: _0x59fd3a,
    textAlign: _0x10aee1,
    left: _0x3f70bf,
    top: _0x59fd3a,
    right: _0x3f70bf + _0x5c3655.w,
    bottom: _0x59fd3a + _0x5c3655.h
  };
}
function Pp(_0x585eed, _0x4d0c5f) {
  if (!_0x4d0c5f) {
    return true;
  }
  const {
    left: _0x152ec4,
    top: _0x49378e,
    right: _0x1c67ed,
    bottom: _0x313653
  } = _0x585eed;
  return !St({
    x: _0x152ec4,
    y: _0x49378e
  }, _0x4d0c5f) && !St({
    x: _0x152ec4,
    y: _0x313653
  }, _0x4d0c5f) && !St({
    x: _0x1c67ed,
    y: _0x49378e
  }, _0x4d0c5f) && !St({
    x: _0x1c67ed,
    y: _0x313653
  }, _0x4d0c5f);
}
function Sp(_0x3e027e, _0x2e2250, _0x1abb59) {
  const _0x947605 = [];
  const _0x43f9e3 = _0x3e027e._pointLabels.length;
  const _0x30c624 = _0x3e027e.options;
  const {
    centerPointLabels: _0x2d66d8,
    display: _0x1a3024
  } = _0x30c624.pointLabels;
  const _0x19d719 = {
    extra: $i(_0x30c624) / 2,
    additionalAngle: _0x2d66d8 ? Z / _0x43f9e3 : 0
  };
  let _0x37d990;
  for (let _0x3ed4a4 = 0; _0x3ed4a4 < _0x43f9e3; _0x3ed4a4++) {
    _0x19d719.padding = _0x1abb59[_0x3ed4a4];
    _0x19d719.size = _0x2e2250[_0x3ed4a4];
    const _0x253bbf = Op(_0x3e027e, _0x3ed4a4, _0x19d719);
    _0x947605.push(_0x253bbf);
    if (_0x1a3024 === "auto") {
      _0x253bbf.visible = Pp(_0x253bbf, _0x37d990);
      if (_0x253bbf.visible) {
        _0x37d990 = _0x253bbf;
      }
    }
  }
  return _0x947605;
}
function Tp(_0x4633e2) {
  if (_0x4633e2 === 0 || _0x4633e2 === 180) {
    return "center";
  } else if (_0x4633e2 < 180) {
    return "left";
  } else {
    return "right";
  }
}
function Mp(_0x36a861, _0x219a95, _0x21bb43) {
  if (_0x21bb43 === "right") {
    _0x36a861 -= _0x219a95;
  } else if (_0x21bb43 === "center") {
    _0x36a861 -= _0x219a95 / 2;
  }
  return _0x36a861;
}
function kp(_0x502cd4, _0x3dd9b9, _0xc311d2) {
  if (_0xc311d2 === 90 || _0xc311d2 === 270) {
    _0x502cd4 -= _0x3dd9b9 / 2;
  } else if (_0xc311d2 > 270 || _0xc311d2 < 90) {
    _0x502cd4 -= _0x3dd9b9;
  }
  return _0x502cd4;
}
function Dp(_0x342957, _0x2d2ab9, _0x4ad172) {
  const {
    left: _0xf468d,
    top: _0x45c66c,
    right: _0x2e3256,
    bottom: _0xdd6f8e
  } = _0x4ad172;
  const {
    backdropColor: _0x97bd1f
  } = _0x2d2ab9;
  if (!z(_0x97bd1f)) {
    const _0x528b93 = Qf(_0x2d2ab9.borderRadius);
    const _0x5b7c14 = kt(_0x2d2ab9.backdropPadding);
    _0x342957.fillStyle = _0x97bd1f;
    const _0x1c72a4 = _0xf468d - _0x5b7c14.left;
    const _0x32e5ba = _0x45c66c - _0x5b7c14.top;
    const _0x56112e = _0x2e3256 - _0xf468d + _0x5b7c14.width;
    const _0x18409c = _0xdd6f8e - _0x45c66c + _0x5b7c14.height;
    if (Object.values(_0x528b93).some(_0x3ed995 => _0x3ed995 !== 0)) {
      _0x342957.beginPath();
      Uf(_0x342957, {
        x: _0x1c72a4,
        y: _0x32e5ba,
        w: _0x56112e,
        h: _0x18409c,
        radius: _0x528b93
      });
      _0x342957.fill();
    } else {
      _0x342957.fillRect(_0x1c72a4, _0x32e5ba, _0x56112e, _0x18409c);
    }
  }
}
function $p(_0x1d4103, _0x52ffb6) {
  const {
    ctx: _0x58362e,
    options: {
      pointLabels: _0xa00f8b
    }
  } = _0x1d4103;
  for (let _0x905185 = _0x52ffb6 - 1; _0x905185 >= 0; _0x905185--) {
    const _0x3782cb = _0x1d4103._pointLabelItems[_0x905185];
    if (!_0x3782cb.visible) {
      continue;
    }
    const _0x2fc5db = _0xa00f8b.setContext(_0x1d4103.getPointLabelContext(_0x905185));
    Dp(_0x58362e, _0x2fc5db, _0x3782cb);
    const _0x3e39ec = le(_0x2fc5db.font);
    const {
      x: _0x497da2,
      y: _0x183644,
      textAlign: _0x53a32a
    } = _0x3782cb;
    lr(_0x58362e, _0x1d4103._pointLabels[_0x905185], _0x497da2, _0x183644 + _0x3e39ec.lineHeight / 2, _0x3e39ec, {
      color: _0x2fc5db.color,
      textAlign: _0x53a32a,
      textBaseline: "middle"
    });
  }
}
function ju(_0x202d62, _0x3dcaa0, _0x54d835, _0x3c2e71) {
  const {
    ctx: _0x25f597
  } = _0x202d62;
  if (_0x54d835) {
    _0x25f597.arc(_0x202d62.xCenter, _0x202d62.yCenter, _0x3dcaa0, 0, pt);
  } else {
    let _0x5a7f6b = _0x202d62.getPointPosition(0, _0x3dcaa0);
    _0x25f597.moveTo(_0x5a7f6b.x, _0x5a7f6b.y);
    for (let _0x4cb5a4 = 1; _0x4cb5a4 < _0x3c2e71; _0x4cb5a4++) {
      _0x5a7f6b = _0x202d62.getPointPosition(_0x4cb5a4, _0x3dcaa0);
      _0x25f597.lineTo(_0x5a7f6b.x, _0x5a7f6b.y);
    }
  }
}
function Rp(_0x1e8daf, _0x1a4cab, _0xe944a0, _0x351a8c, _0x71ffa4) {
  const _0xb9622f = _0x1e8daf.ctx;
  const _0x675cb8 = _0x1a4cab.circular;
  const {
    color: _0x48332f,
    lineWidth: _0x326823
  } = _0x1a4cab;
  if ((!!_0x675cb8 || !!_0x351a8c) && !!_0x48332f && !!_0x326823 && !(_0xe944a0 < 0)) {
    _0xb9622f.save();
    _0xb9622f.strokeStyle = _0x48332f;
    _0xb9622f.lineWidth = _0x326823;
    _0xb9622f.setLineDash(_0x71ffa4.dash);
    _0xb9622f.lineDashOffset = _0x71ffa4.dashOffset;
    _0xb9622f.beginPath();
    ju(_0x1e8daf, _0xe944a0, _0x675cb8, _0x351a8c);
    _0xb9622f.closePath();
    _0xb9622f.stroke();
    _0xb9622f.restore();
  }
}
function Cp(_0x209744, _0x18ce2e, _0x226029) {
  return Jt(_0x209744, {
    label: _0x226029,
    index: _0x18ce2e,
    type: "pointLabel"
  });
}
class j0 extends dr {
  static id = "radialLinear";
  static defaults = {
    display: true,
    animate: true,
    position: "chartArea",
    angleLines: {
      display: true,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: false
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: true,
      callback: Zr.formatters.numeric
    },
    pointLabels: {
      backdropColor: undefined,
      backdropPadding: 2,
      display: true,
      font: {
        size: 10
      },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: false
    }
  };
  static defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  };
  static descriptors = {
    angleLines: {
      _fallback: "grid"
    }
  };
  constructor(_0xf4e6ee) {
    super(_0xf4e6ee);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this._pointLabels = [];
    this._pointLabelItems = [];
  }
  setDimensions() {
    const _0x1494ef = this._padding = kt($i(this.options) / 2);
    const _0x22e727 = this.width = this.maxWidth - _0x1494ef.width;
    const _0x4e5784 = this.height = this.maxHeight - _0x1494ef.height;
    this.xCenter = Math.floor(this.left + _0x22e727 / 2 + _0x1494ef.left);
    this.yCenter = Math.floor(this.top + _0x4e5784 / 2 + _0x1494ef.top);
    this.drawingArea = Math.floor(Math.min(_0x22e727, _0x4e5784) / 2);
  }
  determineDataLimits() {
    const {
      min: _0x4bb71f,
      max: _0x1fcd1e
    } = this.getMinMax(false);
    this.min = K(_0x4bb71f) && !isNaN(_0x4bb71f) ? _0x4bb71f : 0;
    this.max = K(_0x1fcd1e) && !isNaN(_0x1fcd1e) ? _0x1fcd1e : 0;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / $i(this.options));
  }
  generateTickLabels(_0x242427) {
    dr.prototype.generateTickLabels.call(this, _0x242427);
    this._pointLabels = this.getLabels().map((_0x18aa0c, _0x139c55) => {
      const _0x476652 = j(this.options.pointLabels.callback, [_0x18aa0c, _0x139c55], this);
      if (_0x476652 || _0x476652 === 0) {
        return _0x476652;
      } else {
        return "";
      }
    }).filter((_0xecb73f, _0x471897) => this.chart.getDataVisibility(_0x471897));
  }
  fit() {
    const _0x5c7b77 = this.options;
    if (_0x5c7b77.display && _0x5c7b77.pointLabels.display) {
      wp(this);
    } else {
      this.setCenterPoint(0, 0, 0, 0);
    }
  }
  setCenterPoint(_0x56c012, _0x41a411, _0x1e72dd, _0x43f7a0) {
    this.xCenter += Math.floor((_0x56c012 - _0x41a411) / 2);
    this.yCenter += Math.floor((_0x1e72dd - _0x43f7a0) / 2);
    this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(_0x56c012, _0x41a411, _0x1e72dd, _0x43f7a0));
  }
  getIndexAngle(_0x5e86a1) {
    const _0x282294 = pt / (this._pointLabels.length || 1);
    const _0x3c8436 = this.options.startAngle || 0;
    return gt(_0x5e86a1 * _0x282294 + At(_0x3c8436));
  }
  getDistanceFromCenterForValue(_0x4d5203) {
    if (z(_0x4d5203)) {
      return NaN;
    }
    const _0x27b958 = this.drawingArea / (this.max - this.min);
    if (this.options.reverse) {
      return (this.max - _0x4d5203) * _0x27b958;
    } else {
      return (_0x4d5203 - this.min) * _0x27b958;
    }
  }
  getValueForDistanceFromCenter(_0x4ccfe8) {
    if (z(_0x4ccfe8)) {
      return NaN;
    }
    const _0x441214 = _0x4ccfe8 / (this.drawingArea / (this.max - this.min));
    if (this.options.reverse) {
      return this.max - _0x441214;
    } else {
      return this.min + _0x441214;
    }
  }
  getPointLabelContext(_0x1da265) {
    const _0x38a0e8 = this._pointLabels || [];
    if (_0x1da265 >= 0 && _0x1da265 < _0x38a0e8.length) {
      const _0x2a232d = _0x38a0e8[_0x1da265];
      return Cp(this.getContext(), _0x1da265, _0x2a232d);
    }
  }
  getPointPosition(_0x56c793, _0x2dc2cb, _0x81ad87 = 0) {
    const _0x4e8833 = this.getIndexAngle(_0x56c793) - ct + _0x81ad87;
    return {
      x: Math.cos(_0x4e8833) * _0x2dc2cb + this.xCenter,
      y: Math.sin(_0x4e8833) * _0x2dc2cb + this.yCenter,
      angle: _0x4e8833
    };
  }
  getPointPositionForValue(_0x4b62fb, _0x3fcfc4) {
    return this.getPointPosition(_0x4b62fb, this.getDistanceFromCenterForValue(_0x3fcfc4));
  }
  getBasePosition(_0x1d8f6b) {
    return this.getPointPositionForValue(_0x1d8f6b || 0, this.getBaseValue());
  }
  getPointLabelPosition(_0x1a34a1) {
    const {
      left: _0x40d600,
      top: _0x5af1a3,
      right: _0x241b21,
      bottom: _0xb80ee0
    } = this._pointLabelItems[_0x1a34a1];
    return {
      left: _0x40d600,
      top: _0x5af1a3,
      right: _0x241b21,
      bottom: _0xb80ee0
    };
  }
  drawBackground() {
    const {
      backgroundColor: _0x30eeb1,
      grid: {
        circular: _0x35091f
      }
    } = this.options;
    if (_0x30eeb1) {
      const _0x292a6d = this.ctx;
      _0x292a6d.save();
      _0x292a6d.beginPath();
      ju(this, this.getDistanceFromCenterForValue(this._endValue), _0x35091f, this._pointLabels.length);
      _0x292a6d.closePath();
      _0x292a6d.fillStyle = _0x30eeb1;
      _0x292a6d.fill();
      _0x292a6d.restore();
    }
  }
  drawGrid() {
    const _0x1f60ea = this.ctx;
    const _0x447b69 = this.options;
    const {
      angleLines: _0x44a8c2,
      grid: _0x10324c,
      border: _0x31d767
    } = _0x447b69;
    const _0x24807d = this._pointLabels.length;
    let _0x1b56a5;
    let _0x45b7b6;
    let _0x364d37;
    if (_0x447b69.pointLabels.display) {
      $p(this, _0x24807d);
    }
    if (_0x10324c.display) {
      this.ticks.forEach((_0xd9ab49, _0x2b1483) => {
        if (_0x2b1483 !== 0 || _0x2b1483 === 0 && this.min < 0) {
          _0x45b7b6 = this.getDistanceFromCenterForValue(_0xd9ab49.value);
          const _0x2d48b3 = this.getContext(_0x2b1483);
          const _0x4400d3 = _0x10324c.setContext(_0x2d48b3);
          const _0x46f9a6 = _0x31d767.setContext(_0x2d48b3);
          Rp(this, _0x4400d3, _0x45b7b6, _0x24807d, _0x46f9a6);
        }
      });
    }
    if (_0x44a8c2.display) {
      _0x1f60ea.save();
      _0x1b56a5 = _0x24807d - 1;
      for (; _0x1b56a5 >= 0; _0x1b56a5--) {
        const _0xe1b9fd = _0x44a8c2.setContext(this.getPointLabelContext(_0x1b56a5));
        const {
          color: _0x438121,
          lineWidth: _0xaf6515
        } = _0xe1b9fd;
        if (!!_0xaf6515 && !!_0x438121) {
          _0x1f60ea.lineWidth = _0xaf6515;
          _0x1f60ea.strokeStyle = _0x438121;
          _0x1f60ea.setLineDash(_0xe1b9fd.borderDash);
          _0x1f60ea.lineDashOffset = _0xe1b9fd.borderDashOffset;
          _0x45b7b6 = this.getDistanceFromCenterForValue(_0x447b69.ticks.reverse ? this.min : this.max);
          _0x364d37 = this.getPointPosition(_0x1b56a5, _0x45b7b6);
          _0x1f60ea.beginPath();
          _0x1f60ea.moveTo(this.xCenter, this.yCenter);
          _0x1f60ea.lineTo(_0x364d37.x, _0x364d37.y);
          _0x1f60ea.stroke();
        }
      }
      _0x1f60ea.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const _0x274666 = this.ctx;
    const _0x12e2c3 = this.options;
    const _0x4fc8fe = _0x12e2c3.ticks;
    if (!_0x4fc8fe.display) {
      return;
    }
    const _0x3b317c = this.getIndexAngle(0);
    let _0x1fbd17;
    let _0x2d0efa;
    _0x274666.save();
    _0x274666.translate(this.xCenter, this.yCenter);
    _0x274666.rotate(_0x3b317c);
    _0x274666.textAlign = "center";
    _0x274666.textBaseline = "middle";
    this.ticks.forEach((_0xe4aeb3, _0x512506) => {
      if (_0x512506 === 0 && this.min >= 0 && !_0x12e2c3.reverse) {
        return;
      }
      const _0x58c027 = _0x4fc8fe.setContext(this.getContext(_0x512506));
      const _0x5696cc = le(_0x58c027.font);
      _0x1fbd17 = this.getDistanceFromCenterForValue(this.ticks[_0x512506].value);
      if (_0x58c027.showLabelBackdrop) {
        _0x274666.font = _0x5696cc.string;
        _0x2d0efa = _0x274666.measureText(_0xe4aeb3.label).width;
        _0x274666.fillStyle = _0x58c027.backdropColor;
        const _0xae5751 = kt(_0x58c027.backdropPadding);
        _0x274666.fillRect(-_0x2d0efa / 2 - _0xae5751.left, -_0x1fbd17 - _0x5696cc.size / 2 - _0xae5751.top, _0x2d0efa + _0xae5751.width, _0x5696cc.size + _0xae5751.height);
      }
      lr(_0x274666, _0xe4aeb3.label, 0, -_0x1fbd17, _0x5696cc, {
        color: _0x58c027.color,
        strokeColor: _0x58c027.textStrokeColor,
        strokeWidth: _0x58c027.textStrokeWidth
      });
    });
    _0x274666.restore();
  }
  drawTitle() {}
}
const ei = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1000
  },
  second: {
    common: true,
    size: 1000,
    steps: 60
  },
  minute: {
    common: true,
    size: 60000,
    steps: 60
  },
  hour: {
    common: true,
    size: 3600000,
    steps: 24
  },
  day: {
    common: true,
    size: 86400000,
    steps: 30
  },
  week: {
    common: false,
    size: 604800000,
    steps: 4
  },
  month: {
    common: true,
    size: 2628000000,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7884000000,
    steps: 4
  },
  year: {
    common: true,
    size: 31540000000
  }
};
const it = Object.keys(ei);
function Sa(_0x755e98, _0x3eec1a) {
  return _0x755e98 - _0x3eec1a;
}
function Ta(_0x3aaa33, _0x2f1075) {
  if (z(_0x2f1075)) {
    return null;
  }
  const _0x261ff2 = _0x3aaa33._adapter;
  const {
    parser: _0x40fc0c,
    round: _0x3e5be6,
    isoWeekday: _0x264444
  } = _0x3aaa33._parseOpts;
  let _0x33dd38 = _0x2f1075;
  if (typeof _0x40fc0c == "function") {
    _0x33dd38 = _0x40fc0c(_0x33dd38);
  }
  if (!K(_0x33dd38)) {
    _0x33dd38 = typeof _0x40fc0c == "string" ? _0x261ff2.parse(_0x33dd38, _0x40fc0c) : _0x261ff2.parse(_0x33dd38);
  }
  if (_0x33dd38 === null) {
    return null;
  } else {
    if (_0x3e5be6) {
      _0x33dd38 = _0x3e5be6 === "week" && (Le(_0x264444) || _0x264444 === true) ? _0x261ff2.startOf(_0x33dd38, "isoWeek", _0x264444) : _0x261ff2.startOf(_0x33dd38, _0x3e5be6);
    }
    return +_0x33dd38;
  }
}
function Ma(_0x4257c9, _0x3253a3, _0x5037a3, _0x21d63e) {
  const _0x8aad88 = it.length;
  for (let _0x2efc63 = it.indexOf(_0x4257c9); _0x2efc63 < _0x8aad88 - 1; ++_0x2efc63) {
    const _0x8762c = ei[it[_0x2efc63]];
    const _0x344eef = _0x8762c.steps ? _0x8762c.steps : Number.MAX_SAFE_INTEGER;
    if (_0x8762c.common && Math.ceil((_0x5037a3 - _0x3253a3) / (_0x344eef * _0x8762c.size)) <= _0x21d63e) {
      return it[_0x2efc63];
    }
  }
  return it[_0x8aad88 - 1];
}
function Ep(_0x63eeda, _0xa4652e, _0x4307b8, _0x59c114, _0x500aac) {
  for (let _0x49dd1a = it.length - 1; _0x49dd1a >= it.indexOf(_0x4307b8); _0x49dd1a--) {
    const _0x238d06 = it[_0x49dd1a];
    if (ei[_0x238d06].common && _0x63eeda._adapter.diff(_0x500aac, _0x59c114, _0x238d06) >= _0xa4652e - 1) {
      return _0x238d06;
    }
  }
  return it[_0x4307b8 ? it.indexOf(_0x4307b8) : 0];
}
function Ip(_0x27bd90) {
  for (let _0x3dae8f = it.indexOf(_0x27bd90) + 1, _0x1c3091 = it.length; _0x3dae8f < _0x1c3091; ++_0x3dae8f) {
    if (ei[it[_0x3dae8f]].common) {
      return it[_0x3dae8f];
    }
  }
}
function ka(_0x36ef4e, _0x45d9ec, _0x548742) {
  if (!_0x548742) {
    _0x36ef4e[_0x45d9ec] = true;
  } else if (_0x548742.length) {
    const {
      lo: _0x424b54,
      hi: _0xc688b
    } = Jo(_0x548742, _0x45d9ec);
    const _0x402f88 = _0x548742[_0x424b54] >= _0x45d9ec ? _0x548742[_0x424b54] : _0x548742[_0xc688b];
    _0x36ef4e[_0x402f88] = true;
  }
}
function Lp(_0x36a9a0, _0xa68f02, _0x26a904, _0x46364e) {
  const _0x16186f = _0x36a9a0._adapter;
  const _0x5049be = +_0x16186f.startOf(_0xa68f02[0].value, _0x46364e);
  const _0x1e7650 = _0xa68f02[_0xa68f02.length - 1].value;
  let _0x2c9556;
  let _0x166cd2;
  for (_0x2c9556 = _0x5049be; _0x2c9556 <= _0x1e7650; _0x2c9556 = +_0x16186f.add(_0x2c9556, 1, _0x46364e)) {
    _0x166cd2 = _0x26a904[_0x2c9556];
    if (_0x166cd2 >= 0) {
      _0xa68f02[_0x166cd2].major = true;
    }
  }
  return _0xa68f02;
}
function Da(_0x2f7e89, _0x432c14, _0x6d993f) {
  const _0x4d62a1 = [];
  const _0x95eecc = {};
  const _0xc10241 = _0x432c14.length;
  let _0x11e5e6;
  let _0x55dd4c;
  for (_0x11e5e6 = 0; _0x11e5e6 < _0xc10241; ++_0x11e5e6) {
    _0x55dd4c = _0x432c14[_0x11e5e6];
    _0x95eecc[_0x55dd4c] = _0x11e5e6;
    _0x4d62a1.push({
      value: _0x55dd4c,
      major: false
    });
  }
  if (_0xc10241 === 0 || !_0x6d993f) {
    return _0x4d62a1;
  } else {
    return Lp(_0x2f7e89, _0x4d62a1, _0x95eecc, _0x6d993f);
  }
}
class pr extends te {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: false,
      unit: false,
      round: false,
      isoWeekday: false,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      callback: false,
      major: {
        enabled: false
      }
    }
  };
  constructor(_0x1447ff) {
    super(_0x1447ff);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
    this._unit = "day";
    this._majorUnit = undefined;
    this._offsets = {};
    this._normalized = false;
    this._parseOpts = undefined;
  }
  init(_0x3dc5dd, _0x222e13 = {}) {
    const _0x3be86b = _0x3dc5dd.time ||= {};
    const _0x21f185 = this._adapter = new Du._date(_0x3dc5dd.adapters.date);
    _0x21f185.init(_0x222e13);
    Me(_0x3be86b.displayFormats, _0x21f185.formats());
    this._parseOpts = {
      parser: _0x3be86b.parser,
      round: _0x3be86b.round,
      isoWeekday: _0x3be86b.isoWeekday
    };
    super.init(_0x3dc5dd);
    this._normalized = _0x222e13.normalized;
  }
  parse(_0xefe60b, _0x1b1b9b) {
    if (_0xefe60b === undefined) {
      return null;
    } else {
      return Ta(this, _0xefe60b);
    }
  }
  beforeLayout() {
    super.beforeLayout();
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const _0x420c3e = this.options;
    const _0x4c2a3c = this._adapter;
    const _0x38055f = _0x420c3e.time.unit || "day";
    let {
      min: _0x47fca1,
      max: _0x44d9ef,
      minDefined: _0x12869f,
      maxDefined: _0x248c4e
    } = this.getUserBounds();
    function _0xabd5c8(_0x52efb7) {
      if (!_0x12869f && !isNaN(_0x52efb7.min)) {
        _0x47fca1 = Math.min(_0x47fca1, _0x52efb7.min);
      }
      if (!_0x248c4e && !isNaN(_0x52efb7.max)) {
        _0x44d9ef = Math.max(_0x44d9ef, _0x52efb7.max);
      }
    }
    if (!_0x12869f || !_0x248c4e) {
      _0xabd5c8(this._getLabelBounds());
      if (_0x420c3e.bounds !== "ticks" || _0x420c3e.ticks.source !== "labels") {
        _0xabd5c8(this.getMinMax(false));
      }
    }
    _0x47fca1 = K(_0x47fca1) && !isNaN(_0x47fca1) ? _0x47fca1 : +_0x4c2a3c.startOf(Date.now(), _0x38055f);
    _0x44d9ef = K(_0x44d9ef) && !isNaN(_0x44d9ef) ? _0x44d9ef : +_0x4c2a3c.endOf(Date.now(), _0x38055f) + 1;
    this.min = Math.min(_0x47fca1, _0x44d9ef - 1);
    this.max = Math.max(_0x47fca1 + 1, _0x44d9ef);
  }
  _getLabelBounds() {
    const _0x1549a0 = this.getLabelTimestamps();
    let _0x5accde = Number.POSITIVE_INFINITY;
    let _0x5e64e6 = Number.NEGATIVE_INFINITY;
    if (_0x1549a0.length) {
      _0x5accde = _0x1549a0[0];
      _0x5e64e6 = _0x1549a0[_0x1549a0.length - 1];
    }
    return {
      min: _0x5accde,
      max: _0x5e64e6
    };
  }
  buildTicks() {
    const _0x331f90 = this.options;
    const _0x2fec5d = _0x331f90.time;
    const _0x3969cc = _0x331f90.ticks;
    const _0x4b3860 = _0x3969cc.source === "labels" ? this.getLabelTimestamps() : this._generate();
    if (_0x331f90.bounds === "ticks" && _0x4b3860.length) {
      this.min = this._userMin || _0x4b3860[0];
      this.max = this._userMax || _0x4b3860[_0x4b3860.length - 1];
    }
    const _0x2f8193 = this.min;
    const _0x42d90e = this.max;
    const _0x5b6308 = _f(_0x4b3860, _0x2f8193, _0x42d90e);
    this._unit = _0x2fec5d.unit || (_0x3969cc.autoSkip ? Ma(_0x2fec5d.minUnit, this.min, this.max, this._getLabelCapacity(_0x2f8193)) : Ep(this, _0x5b6308.length, _0x2fec5d.minUnit, this.min, this.max));
    this._majorUnit = !_0x3969cc.major.enabled || this._unit === "year" ? undefined : Ip(this._unit);
    this.initOffsets(_0x4b3860);
    if (_0x331f90.reverse) {
      _0x5b6308.reverse();
    }
    return Da(this, _0x5b6308, this._majorUnit);
  }
  afterAutoSkip() {
    if (this.options.offsetAfterAutoskip) {
      this.initOffsets(this.ticks.map(_0x118b80 => +_0x118b80.value));
    }
  }
  initOffsets(_0x845a9b = []) {
    let _0x5b6bba = 0;
    let _0x5f0511 = 0;
    let _0x472951;
    let _0x20a446;
    if (this.options.offset && _0x845a9b.length) {
      _0x472951 = this.getDecimalForValue(_0x845a9b[0]);
      if (_0x845a9b.length === 1) {
        _0x5b6bba = 1 - _0x472951;
      } else {
        _0x5b6bba = (this.getDecimalForValue(_0x845a9b[1]) - _0x472951) / 2;
      }
      _0x20a446 = this.getDecimalForValue(_0x845a9b[_0x845a9b.length - 1]);
      if (_0x845a9b.length === 1) {
        _0x5f0511 = _0x20a446;
      } else {
        _0x5f0511 = (_0x20a446 - this.getDecimalForValue(_0x845a9b[_0x845a9b.length - 2])) / 2;
      }
    }
    const _0x239bf3 = _0x845a9b.length < 3 ? 0.5 : 0.25;
    _0x5b6bba = vt(_0x5b6bba, 0, _0x239bf3);
    _0x5f0511 = vt(_0x5f0511, 0, _0x239bf3);
    this._offsets = {
      start: _0x5b6bba,
      end: _0x5f0511,
      factor: 1 / (_0x5b6bba + 1 + _0x5f0511)
    };
  }
  _generate() {
    const _0x260acc = this._adapter;
    const _0x506bef = this.min;
    const _0xc51bb7 = this.max;
    const _0x2783a5 = this.options;
    const _0xf47964 = _0x2783a5.time;
    const _0x1c1a0b = _0xf47964.unit || Ma(_0xf47964.minUnit, _0x506bef, _0xc51bb7, this._getLabelCapacity(_0x506bef));
    const _0x599cb4 = I(_0x2783a5.ticks.stepSize, 1);
    const _0x1d67b4 = _0x1c1a0b === "week" ? _0xf47964.isoWeekday : false;
    const _0x19464d = Le(_0x1d67b4) || _0x1d67b4 === true;
    const _0x51ec7b = {};
    let _0x4ff964 = _0x506bef;
    let _0x277dcd;
    let _0x3b2c66;
    if (_0x19464d) {
      _0x4ff964 = +_0x260acc.startOf(_0x4ff964, "isoWeek", _0x1d67b4);
    }
    _0x4ff964 = +_0x260acc.startOf(_0x4ff964, _0x19464d ? "day" : _0x1c1a0b);
    if (_0x260acc.diff(_0xc51bb7, _0x506bef, _0x1c1a0b) > _0x599cb4 * 100000) {
      throw new Error(_0x506bef + " and " + _0xc51bb7 + " are too far apart with stepSize of " + _0x599cb4 + " " + _0x1c1a0b);
    }
    const _0x4fac03 = _0x2783a5.ticks.source === "data" && this.getDataTimestamps();
    _0x277dcd = _0x4ff964;
    _0x3b2c66 = 0;
    for (; _0x277dcd < _0xc51bb7; _0x277dcd = +_0x260acc.add(_0x277dcd, _0x599cb4, _0x1c1a0b), _0x3b2c66++) {
      ka(_0x51ec7b, _0x277dcd, _0x4fac03);
    }
    if (_0x277dcd === _0xc51bb7 || _0x2783a5.bounds === "ticks" || _0x3b2c66 === 1) {
      ka(_0x51ec7b, _0x277dcd, _0x4fac03);
    }
    return Object.keys(_0x51ec7b).sort(Sa).map(_0xc9e1a0 => +_0xc9e1a0);
  }
  getLabelForValue(_0x1d7987) {
    const _0x560998 = this._adapter;
    const _0x16b666 = this.options.time;
    if (_0x16b666.tooltipFormat) {
      return _0x560998.format(_0x1d7987, _0x16b666.tooltipFormat);
    } else {
      return _0x560998.format(_0x1d7987, _0x16b666.displayFormats.datetime);
    }
  }
  format(_0x10075a, _0x5494cd) {
    const _0x10c833 = this.options.time.displayFormats;
    const _0x45b1ea = this._unit;
    const _0x57eddc = _0x5494cd || _0x10c833[_0x45b1ea];
    return this._adapter.format(_0x10075a, _0x57eddc);
  }
  _tickFormatFunction(_0x589db5, _0x2ac201, _0x210716, _0x27a216) {
    const _0x36d3a3 = this.options;
    const _0x44deca = _0x36d3a3.ticks.callback;
    if (_0x44deca) {
      return j(_0x44deca, [_0x589db5, _0x2ac201, _0x210716], this);
    }
    const _0x579675 = _0x36d3a3.time.displayFormats;
    const _0x536384 = this._unit;
    const _0x567c10 = this._majorUnit;
    const _0x21f1bd = _0x536384 && _0x579675[_0x536384];
    const _0x1a6c14 = _0x567c10 && _0x579675[_0x567c10];
    const _0x7b101c = _0x210716[_0x2ac201];
    const _0x527d16 = _0x567c10 && _0x1a6c14 && _0x7b101c && _0x7b101c.major;
    return this._adapter.format(_0x589db5, _0x27a216 || (_0x527d16 ? _0x1a6c14 : _0x21f1bd));
  }
  generateTickLabels(_0x52e737) {
    let _0x5f2fc0;
    let _0x466a59;
    let _0x15e4d2;
    _0x5f2fc0 = 0;
    _0x466a59 = _0x52e737.length;
    for (; _0x5f2fc0 < _0x466a59; ++_0x5f2fc0) {
      _0x15e4d2 = _0x52e737[_0x5f2fc0];
      _0x15e4d2.label = this._tickFormatFunction(_0x15e4d2.value, _0x5f2fc0, _0x52e737);
    }
  }
  getDecimalForValue(_0x185123) {
    if (_0x185123 === null) {
      return NaN;
    } else {
      return (_0x185123 - this.min) / (this.max - this.min);
    }
  }
  getPixelForValue(_0x203d04) {
    const _0x94bf90 = this._offsets;
    const _0x495922 = this.getDecimalForValue(_0x203d04);
    return this.getPixelForDecimal((_0x94bf90.start + _0x495922) * _0x94bf90.factor);
  }
  getValueForPixel(_0x128260) {
    const _0x110b40 = this._offsets;
    const _0x48e36a = this.getDecimalForPixel(_0x128260) / _0x110b40.factor - _0x110b40.end;
    return this.min + _0x48e36a * (this.max - this.min);
  }
  _getLabelSize(_0x456d2b) {
    const _0x519758 = this.options.ticks;
    const _0xc12d3e = this.ctx.measureText(_0x456d2b).width;
    const _0xda7e54 = At(this.isHorizontal() ? _0x519758.maxRotation : _0x519758.minRotation);
    const _0x13760a = Math.cos(_0xda7e54);
    const _0x53a4d9 = Math.sin(_0xda7e54);
    const _0x3bbabc = this._resolveTickFontOptions(0).size;
    return {
      w: _0xc12d3e * _0x13760a + _0x3bbabc * _0x53a4d9,
      h: _0xc12d3e * _0x53a4d9 + _0x3bbabc * _0x13760a
    };
  }
  _getLabelCapacity(_0x4d1148) {
    const _0x12292e = this.options.time;
    const _0x3ebae2 = _0x12292e.displayFormats;
    const _0x533083 = _0x3ebae2[_0x12292e.unit] || _0x3ebae2.millisecond;
    const _0xf585bf = this._tickFormatFunction(_0x4d1148, 0, Da(this, [_0x4d1148], this._majorUnit), _0x533083);
    const _0x5890e8 = this._getLabelSize(_0xf585bf);
    const _0x46a412 = Math.floor(this.isHorizontal() ? this.width / _0x5890e8.w : this.height / _0x5890e8.h) - 1;
    if (_0x46a412 > 0) {
      return _0x46a412;
    } else {
      return 1;
    }
  }
  getDataTimestamps() {
    let _0xdc4e58 = this._cache.data || [];
    let _0x45e403;
    let _0x2742c0;
    if (_0xdc4e58.length) {
      return _0xdc4e58;
    }
    const _0x21df6e = this.getMatchingVisibleMetas();
    if (this._normalized && _0x21df6e.length) {
      return this._cache.data = _0x21df6e[0].controller.getAllParsedValues(this);
    }
    _0x45e403 = 0;
    _0x2742c0 = _0x21df6e.length;
    for (; _0x45e403 < _0x2742c0; ++_0x45e403) {
      _0xdc4e58 = _0xdc4e58.concat(_0x21df6e[_0x45e403].controller.getAllParsedValues(this));
    }
    return this._cache.data = this.normalize(_0xdc4e58);
  }
  getLabelTimestamps() {
    const _0x6b02de = this._cache.labels || [];
    let _0xc46ac4;
    let _0x4cf070;
    if (_0x6b02de.length) {
      return _0x6b02de;
    }
    const _0x2acea0 = this.getLabels();
    _0xc46ac4 = 0;
    _0x4cf070 = _0x2acea0.length;
    for (; _0xc46ac4 < _0x4cf070; ++_0xc46ac4) {
      _0x6b02de.push(Ta(this, _0x2acea0[_0xc46ac4]));
    }
    return this._cache.labels = this._normalized ? _0x6b02de : this.normalize(_0x6b02de);
  }
  normalize(_0x2a652d) {
    return wf(_0x2a652d.sort(Sa));
  }
}
function un(_0x25fe08, _0x27211b, _0x10ac8d) {
  let _0x1c72e2 = 0;
  let _0x4f7a03 = _0x25fe08.length - 1;
  let _0x487ce0;
  let _0x2fdf83;
  let _0x595efe;
  let _0x35a7d2;
  if (_0x10ac8d) {
    if (_0x27211b >= _0x25fe08[_0x1c72e2].pos && _0x27211b <= _0x25fe08[_0x4f7a03].pos) {
      ({
        lo: _0x1c72e2,
        hi: _0x4f7a03
      } = Qt(_0x25fe08, "pos", _0x27211b));
    }
    ({
      pos: _0x487ce0,
      time: _0x595efe
    } = _0x25fe08[_0x1c72e2]);
    ({
      pos: _0x2fdf83,
      time: _0x35a7d2
    } = _0x25fe08[_0x4f7a03]);
  } else {
    if (_0x27211b >= _0x25fe08[_0x1c72e2].time && _0x27211b <= _0x25fe08[_0x4f7a03].time) {
      ({
        lo: _0x1c72e2,
        hi: _0x4f7a03
      } = Qt(_0x25fe08, "time", _0x27211b));
    }
    ({
      time: _0x487ce0,
      pos: _0x595efe
    } = _0x25fe08[_0x1c72e2]);
    ({
      time: _0x2fdf83,
      pos: _0x35a7d2
    } = _0x25fe08[_0x4f7a03]);
  }
  const _0x462e21 = _0x2fdf83 - _0x487ce0;
  if (_0x462e21) {
    return _0x595efe + (_0x35a7d2 - _0x595efe) * (_0x27211b - _0x487ce0) / _0x462e21;
  } else {
    return _0x595efe;
  }
}
class W0 extends pr {
  static id = "timeseries";
  static defaults = pr.defaults;
  constructor(_0xb42202) {
    super(_0xb42202);
    this._table = [];
    this._minPos = undefined;
    this._tableRange = undefined;
  }
  initOffsets() {
    const _0x50f206 = this._getTimestampsForTable();
    const _0x105dee = this._table = this.buildLookupTable(_0x50f206);
    this._minPos = un(_0x105dee, this.min);
    this._tableRange = un(_0x105dee, this.max) - this._minPos;
    super.initOffsets(_0x50f206);
  }
  buildLookupTable(_0x442912) {
    const {
      min: _0x3ed1e3,
      max: _0x14046
    } = this;
    const _0x4a60a5 = [];
    const _0x475266 = [];
    let _0x2a9c80;
    let _0x3d8089;
    let _0x1d2825;
    let _0x1dd771;
    let _0x7163df;
    _0x2a9c80 = 0;
    _0x3d8089 = _0x442912.length;
    for (; _0x2a9c80 < _0x3d8089; ++_0x2a9c80) {
      _0x1dd771 = _0x442912[_0x2a9c80];
      if (_0x1dd771 >= _0x3ed1e3 && _0x1dd771 <= _0x14046) {
        _0x4a60a5.push(_0x1dd771);
      }
    }
    if (_0x4a60a5.length < 2) {
      return [{
        time: _0x3ed1e3,
        pos: 0
      }, {
        time: _0x14046,
        pos: 1
      }];
    }
    _0x2a9c80 = 0;
    _0x3d8089 = _0x4a60a5.length;
    for (; _0x2a9c80 < _0x3d8089; ++_0x2a9c80) {
      _0x7163df = _0x4a60a5[_0x2a9c80 + 1];
      _0x1d2825 = _0x4a60a5[_0x2a9c80 - 1];
      _0x1dd771 = _0x4a60a5[_0x2a9c80];
      if (Math.round((_0x7163df + _0x1d2825) / 2) !== _0x1dd771) {
        _0x475266.push({
          time: _0x1dd771,
          pos: _0x2a9c80 / (_0x3d8089 - 1)
        });
      }
    }
    return _0x475266;
  }
  _generate() {
    const _0x2144c0 = this.min;
    const _0x242f8a = this.max;
    let _0xa22221 = super.getDataTimestamps();
    if (!_0xa22221.includes(_0x2144c0) || !_0xa22221.length) {
      _0xa22221.splice(0, 0, _0x2144c0);
    }
    if (!_0xa22221.includes(_0x242f8a) || _0xa22221.length === 1) {
      _0xa22221.push(_0x242f8a);
    }
    return _0xa22221.sort((_0x4f391a, _0x4cdc70) => _0x4f391a - _0x4cdc70);
  }
  _getTimestampsForTable() {
    let _0x397408 = this._cache.all || [];
    if (_0x397408.length) {
      return _0x397408;
    }
    const _0x25dfbd = this.getDataTimestamps();
    const _0x48468e = this.getLabelTimestamps();
    if (_0x25dfbd.length && _0x48468e.length) {
      _0x397408 = this.normalize(_0x25dfbd.concat(_0x48468e));
    } else {
      _0x397408 = _0x25dfbd.length ? _0x25dfbd : _0x48468e;
    }
    _0x397408 = this._cache.all = _0x397408;
    return _0x397408;
  }
  getDecimalForValue(_0x2121b7) {
    return (un(this._table, _0x2121b7) - this._minPos) / this._tableRange;
  }
  getValueForPixel(_0x428e01) {
    const _0x8ab4b7 = this._offsets;
    const _0x1d619e = this.getDecimalForPixel(_0x428e01) / _0x8ab4b7.factor - _0x8ab4b7.end;
    return un(this._table, _0x1d619e * this._tableRange + this._minPos, true);
  }
}
const Ap = Be("<canvas>");
function Np(_0x2281d0) {
  return (..._0x10d17e) => {
    for (const _0x24a564 of _0x2281d0) {
      if (_0x24a564) {
        _0x24a564(..._0x10d17e);
      }
    }
  };
}
function $a(..._0x519734) {
  return Np(_0x519734);
}
function Fp(_0x2b57b1) {
  const [_0x204497, _0x1c260f] = vi();
  const [_0x5c31e8, _0x1ace12] = vi();
  const _0x16539f = nu({
    width: 512,
    height: 512,
    type: "line",
    data: {},
    options: {
      responsive: true
    },
    plugins: []
  }, _0x2b57b1);
  const _0xf56fb0 = () => {
    const _0x295de4 = _0x204497()?.getContext("2d");
    const _0x3ba7d5 = ce(_0x16539f);
    if (_0x3ba7d5.type !== "radar" && _0x3ba7d5.options.scales?.r) {
      delete _0x3ba7d5.options.scales?.r;
    }
    const _0x3eb278 = new Ne(_0x295de4, {
      type: _0x3ba7d5.type,
      data: _0x3ba7d5.data,
      options: _0x3ba7d5.options,
      plugins: _0x3ba7d5.plugins
    });
    _0x1ace12(_0x3eb278);
  };
  Uo(() => {
    _0xf56fb0();
  });
  Oe(qe(() => _0x16539f.data, () => {
    _0x5c31e8().data = _0x16539f.data;
    _0x5c31e8().update();
  }, {
    defer: true
  }));
  Oe(qe(() => _0x16539f.options, () => {
    _0x5c31e8().options = _0x16539f.options;
    _0x5c31e8().update();
  }, {
    defer: true
  }));
  Oe(qe([() => _0x16539f.width, () => _0x16539f.height], () => {
    _0x5c31e8().resize(_0x16539f.width, _0x16539f.height);
  }, {
    defer: true
  }));
  Oe(qe(() => _0x16539f.type, () => {
    const _0x194d8e = [_0x5c31e8().width, _0x5c31e8().height];
    _0x5c31e8().destroy();
    _0xf56fb0();
    _0x5c31e8().resize(..._0x194d8e);
  }, {
    defer: true
  }));
  Ho(() => {
    _0x5c31e8()?.destroy();
    $a(_0x2b57b1.ref, null);
  });
  return (() => {
    const _0x2c50fa = Ap();
    const _0x123e54 = $a(_0x2b57b1.ref, _0x17d8a1 => _0x1c260f(_0x17d8a1));
    if (typeof _0x123e54 == "function") {
      Pl(_0x123e54, _0x2c50fa);
    }
    at(_0x2c50fa, () => _0x16539f.fallback);
    Mt(_0x47533a => {
      const _0x5e1ca0 = _0x16539f.height;
      const _0x2c1bdb = _0x16539f.width;
      if (_0x5e1ca0 !== _0x47533a._v$) {
        er(_0x2c50fa, "height", _0x47533a._v$ = _0x5e1ca0);
      }
      if (_0x2c1bdb !== _0x47533a._v$2) {
        er(_0x2c50fa, "width", _0x47533a._v$2 = _0x2c1bdb);
      }
      return _0x47533a;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x2c50fa;
  })();
}
function zp(_0x268cce, _0x48cc1d) {
  Ne.register(_0x48cc1d);
  return _0x1d508b => rt(Fp, nu({
    type: _0x268cce
  }, _0x1d508b));
}
var Bp = zp("line", [Yh, gp, mp, fp, lp]);
function yi(_0x226229) {
  return function (_0x3ca914 = {}) {
    var _0x3b5e5f = _0x3ca914.width ? String(_0x3ca914.width) : _0x226229.defaultWidth;
    var _0x5b66ca = _0x226229.formats[_0x3b5e5f] || _0x226229.formats[_0x226229.defaultWidth];
    return _0x5b66ca;
  };
}
function ve(_0x255322) {
  return function (_0x24fd36, _0x20c3a7) {
    var _0x51342d = _0x20c3a7 != null && _0x20c3a7.context ? String(_0x20c3a7.context) : "standalone";
    var _0xd666ef;
    if (_0x51342d === "formatting" && _0x255322.formattingValues) {
      var _0x115769 = _0x255322.defaultFormattingWidth || _0x255322.defaultWidth;
      var _0x3f570a = _0x20c3a7 != null && _0x20c3a7.width ? String(_0x20c3a7.width) : _0x115769;
      _0xd666ef = _0x255322.formattingValues[_0x3f570a] || _0x255322.formattingValues[_0x115769];
    } else {
      var _0x2983fe = _0x255322.defaultWidth;
      var _0x230d74 = _0x20c3a7 != null && _0x20c3a7.width ? String(_0x20c3a7.width) : _0x255322.defaultWidth;
      _0xd666ef = _0x255322.values[_0x230d74] || _0x255322.values[_0x2983fe];
    }
    var _0x5be115 = _0x255322.argumentCallback ? _0x255322.argumentCallback(_0x24fd36) : _0x24fd36;
    return _0xd666ef[_0x5be115];
  };
}
function we(_0x5d9f34) {
  return function (_0xcf88ec, _0x429e58 = {}) {
    var _0x1d2636 = _0x429e58.width;
    var _0x11b1d0 = _0x1d2636 && _0x5d9f34.matchPatterns[_0x1d2636] || _0x5d9f34.matchPatterns[_0x5d9f34.defaultMatchWidth];
    var _0x26ebe6 = _0xcf88ec.match(_0x11b1d0);
    if (!_0x26ebe6) {
      return null;
    }
    var _0x5c6a63 = _0x26ebe6[0];
    var _0x5423cc = _0x1d2636 && _0x5d9f34.parsePatterns[_0x1d2636] || _0x5d9f34.parsePatterns[_0x5d9f34.defaultParseWidth];
    var _0x48fbaf = Array.isArray(_0x5423cc) ? Wp(_0x5423cc, function (_0x583e85) {
      return _0x583e85.test(_0x5c6a63);
    }) : jp(_0x5423cc, function (_0x5e7ef4) {
      return _0x5e7ef4.test(_0x5c6a63);
    });
    var _0x542554;
    _0x542554 = _0x5d9f34.valueCallback ? _0x5d9f34.valueCallback(_0x48fbaf) : _0x48fbaf;
    _0x542554 = _0x429e58.valueCallback ? _0x429e58.valueCallback(_0x542554) : _0x542554;
    var _0x1076ae = _0xcf88ec.slice(_0x5c6a63.length);
    return {
      value: _0x542554,
      rest: _0x1076ae
    };
  };
}
function jp(_0xbc76e1, _0x38ca42) {
  for (var _0x1f2bc4 in _0xbc76e1) {
    if (_0xbc76e1.hasOwnProperty(_0x1f2bc4) && _0x38ca42(_0xbc76e1[_0x1f2bc4])) {
      return _0x1f2bc4;
    }
  }
}
function Wp(_0x36fc0a, _0x5b3356) {
  for (var _0x2e4378 = 0; _0x2e4378 < _0x36fc0a.length; _0x2e4378++) {
    if (_0x5b3356(_0x36fc0a[_0x2e4378])) {
      return _0x2e4378;
    }
  }
}
function Up(_0x2ca0de) {
  return function (_0x15b9d7, _0x4c4dae = {}) {
    var _0x202056 = _0x15b9d7.match(_0x2ca0de.matchPattern);
    if (!_0x202056) {
      return null;
    }
    var _0x30bd17 = _0x202056[0];
    var _0x42a1d0 = _0x15b9d7.match(_0x2ca0de.parsePattern);
    if (!_0x42a1d0) {
      return null;
    }
    var _0x293bed = _0x2ca0de.valueCallback ? _0x2ca0de.valueCallback(_0x42a1d0[0]) : _0x42a1d0[0];
    _0x293bed = _0x4c4dae.valueCallback ? _0x4c4dae.valueCallback(_0x293bed) : _0x293bed;
    var _0x5e6b1a = _0x15b9d7.slice(_0x30bd17.length);
    return {
      value: _0x293bed,
      rest: _0x5e6b1a
    };
  };
}
function F(_0x259c1a) {
  if (_0x259c1a === null || _0x259c1a === true || _0x259c1a === false) {
    return NaN;
  }
  var _0x2a5ea6 = Number(_0x259c1a);
  if (isNaN(_0x2a5ea6)) {
    return _0x2a5ea6;
  } else if (_0x2a5ea6 < 0) {
    return Math.ceil(_0x2a5ea6);
  } else {
    return Math.floor(_0x2a5ea6);
  }
}
function w(_0x9b8b72, _0x5e8320) {
  if (_0x5e8320.length < _0x9b8b72) {
    throw new TypeError(_0x9b8b72 + " argument" + (_0x9b8b72 > 1 ? "s" : "") + " required, but only " + _0x5e8320.length + " present");
  }
}
function dn(_0x13cebd) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    dn = function (_0x48cfad) {
      return typeof _0x48cfad;
    };
  } else {
    dn = function (_0x362c01) {
      if (_0x362c01 && typeof Symbol == "function" && _0x362c01.constructor === Symbol && _0x362c01 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x362c01;
      }
    };
  }
  return dn(_0x13cebd);
}
function P(_0x557f30) {
  w(1, arguments);
  var _0x5c41f2 = Object.prototype.toString.call(_0x557f30);
  if (_0x557f30 instanceof Date || dn(_0x557f30) === "object" && _0x5c41f2 === "[object Date]") {
    return new Date(_0x557f30.getTime());
  } else if (typeof _0x557f30 == "number" || _0x5c41f2 === "[object Number]") {
    return new Date(_0x557f30);
  } else {
    if ((typeof _0x557f30 == "string" || _0x5c41f2 === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
function Wu(_0x16be4a, _0x45c5f0) {
  w(2, arguments);
  var _0x5bea30 = P(_0x16be4a);
  var _0xf7510c = F(_0x45c5f0);
  if (isNaN(_0xf7510c)) {
    return new Date(NaN);
  } else {
    if (_0xf7510c) {
      _0x5bea30.setDate(_0x5bea30.getDate() + _0xf7510c);
    }
    return _0x5bea30;
  }
}
function cs(_0x240b57, _0x4ff1f1) {
  w(2, arguments);
  var _0x124495 = P(_0x240b57);
  var _0x218b15 = F(_0x4ff1f1);
  if (isNaN(_0x218b15)) {
    return new Date(NaN);
  }
  if (!_0x218b15) {
    return _0x124495;
  }
  var _0x1fbfe5 = _0x124495.getDate();
  var _0x53aa92 = new Date(_0x124495.getTime());
  _0x53aa92.setMonth(_0x124495.getMonth() + _0x218b15 + 1, 0);
  var _0x23fc1d = _0x53aa92.getDate();
  if (_0x1fbfe5 >= _0x23fc1d) {
    return _0x53aa92;
  } else {
    _0x124495.setFullYear(_0x53aa92.getFullYear(), _0x53aa92.getMonth(), _0x1fbfe5);
    return _0x124495;
  }
}
function Ue(_0x1fe1c4, _0xaeb30a) {
  w(2, arguments);
  var _0x1abd4e = P(_0x1fe1c4).getTime();
  var _0x1341da = F(_0xaeb30a);
  return new Date(_0x1abd4e + _0x1341da);
}
var Hp = 3600000;
function Yp(_0x2d8984, _0x3b2a79) {
  w(2, arguments);
  var _0x4d64e2 = F(_0x3b2a79);
  return Ue(_0x2d8984, _0x4d64e2 * Hp);
}
var Vp = {};
function Bt() {
  return Vp;
}
function Ra(_0x5caa0c, _0x5e1a61) {
  var _0x1b8737;
  var _0x112497;
  var _0x4ac65c;
  var _0x405eea;
  w(1, arguments);
  var _0x57575e = Bt();
  var _0x4e8876 = F(_0x5e1a61?.weekStartsOn ?? (_0x5e1a61 == null || (_0x1b8737 = _0x5e1a61.locale) === null || _0x1b8737 === undefined || (_0x112497 = _0x1b8737.options) === null || _0x112497 === undefined ? undefined : _0x112497.weekStartsOn) ?? _0x57575e.weekStartsOn ?? ((_0x4ac65c = _0x57575e.locale) === null || _0x4ac65c === undefined || (_0x405eea = _0x4ac65c.options) === null || _0x405eea === undefined ? undefined : _0x405eea.weekStartsOn) ?? 0);
  if (!(_0x4e8876 >= 0) || !(_0x4e8876 <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var _0x364cf6 = P(_0x5caa0c);
  var _0x10ced5 = _0x364cf6.getDay();
  var _0x2989d2 = (_0x10ced5 < _0x4e8876 ? 7 : 0) + _0x10ced5 - _0x4e8876;
  _0x364cf6.setDate(_0x364cf6.getDate() - _0x2989d2);
  _0x364cf6.setHours(0, 0, 0, 0);
  return _0x364cf6;
}
function gr(_0x5b6e7a) {
  var _0x134e55 = new Date(Date.UTC(_0x5b6e7a.getFullYear(), _0x5b6e7a.getMonth(), _0x5b6e7a.getDate(), _0x5b6e7a.getHours(), _0x5b6e7a.getMinutes(), _0x5b6e7a.getSeconds(), _0x5b6e7a.getMilliseconds()));
  _0x134e55.setUTCFullYear(_0x5b6e7a.getFullYear());
  return _0x5b6e7a.getTime() - _0x134e55.getTime();
}
function Ri(_0x4bf3ec) {
  w(1, arguments);
  var _0xdd11dd = P(_0x4bf3ec);
  _0xdd11dd.setHours(0, 0, 0, 0);
  return _0xdd11dd;
}
var qp = 86400000;
function Xp(_0x4f0b80, _0x1ce733) {
  w(2, arguments);
  var _0x51684c = Ri(_0x4f0b80);
  var _0x190073 = Ri(_0x1ce733);
  var _0x332bde = _0x51684c.getTime() - gr(_0x51684c);
  var _0x3c7fc9 = _0x190073.getTime() - gr(_0x190073);
  return Math.round((_0x332bde - _0x3c7fc9) / qp);
}
var Qp = 60000;
function Gp(_0x259a25, _0x5b6922) {
  w(2, arguments);
  var _0x269cae = F(_0x5b6922);
  return Ue(_0x259a25, _0x269cae * Qp);
}
function Kp(_0x400837, _0x47556e) {
  w(2, arguments);
  var _0xc3ea26 = F(_0x47556e);
  var _0x17dd97 = _0xc3ea26 * 3;
  return cs(_0x400837, _0x17dd97);
}
function Zp(_0x487427, _0x4db91c) {
  w(2, arguments);
  var _0x2ecefb = F(_0x4db91c);
  return Ue(_0x487427, _0x2ecefb * 1000);
}
function Jp(_0x161804, _0x10623b) {
  w(2, arguments);
  var _0xbc5834 = F(_0x10623b);
  var _0x5d56a6 = _0xbc5834 * 7;
  return Wu(_0x161804, _0x5d56a6);
}
function tg(_0xcd27ef, _0x502229) {
  w(2, arguments);
  var _0x211bee = F(_0x502229);
  return cs(_0xcd27ef, _0x211bee * 12);
}
function Re(_0x49abdc, _0x2aa81e) {
  w(2, arguments);
  var _0x24a216 = P(_0x49abdc);
  var _0x5740df = P(_0x2aa81e);
  var _0x1400bb = _0x24a216.getTime() - _0x5740df.getTime();
  if (_0x1400bb < 0) {
    return -1;
  } else if (_0x1400bb > 0) {
    return 1;
  } else {
    return _0x1400bb;
  }
}
var ni = 60000;
var ri = 3600000;
var eg = 1000;
function pn(_0x29b4b0) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    pn = function (_0x200913) {
      return typeof _0x200913;
    };
  } else {
    pn = function (_0x4964b0) {
      if (_0x4964b0 && typeof Symbol == "function" && _0x4964b0.constructor === Symbol && _0x4964b0 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x4964b0;
      }
    };
  }
  return pn(_0x29b4b0);
}
function ng(_0x566ca1) {
  w(1, arguments);
  return _0x566ca1 instanceof Date || pn(_0x566ca1) === "object" && Object.prototype.toString.call(_0x566ca1) === "[object Date]";
}
function Uu(_0x359d92) {
  w(1, arguments);
  if (!ng(_0x359d92) && typeof _0x359d92 != "number") {
    return false;
  }
  var _0x294953 = P(_0x359d92);
  return !isNaN(Number(_0x294953));
}
function rg(_0x2e13ea, _0x2a09e3) {
  w(2, arguments);
  var _0x47eb74 = P(_0x2e13ea);
  var _0x46f1c4 = P(_0x2a09e3);
  var _0x4857fa = _0x47eb74.getFullYear() - _0x46f1c4.getFullYear();
  var _0x3b7df1 = _0x47eb74.getMonth() - _0x46f1c4.getMonth();
  return _0x4857fa * 12 + _0x3b7df1;
}
function ig(_0x22f22, _0x138f15) {
  w(2, arguments);
  var _0x348a5e = P(_0x22f22);
  var _0xf5db4b = P(_0x138f15);
  return _0x348a5e.getFullYear() - _0xf5db4b.getFullYear();
}
function Ca(_0x5485e3, _0x106686) {
  var _0x4018db = _0x5485e3.getFullYear() - _0x106686.getFullYear() || _0x5485e3.getMonth() - _0x106686.getMonth() || _0x5485e3.getDate() - _0x106686.getDate() || _0x5485e3.getHours() - _0x106686.getHours() || _0x5485e3.getMinutes() - _0x106686.getMinutes() || _0x5485e3.getSeconds() - _0x106686.getSeconds() || _0x5485e3.getMilliseconds() - _0x106686.getMilliseconds();
  if (_0x4018db < 0) {
    return -1;
  } else if (_0x4018db > 0) {
    return 1;
  } else {
    return _0x4018db;
  }
}
function Hu(_0x3d7113, _0xeb653b) {
  w(2, arguments);
  var _0x4f5e4f = P(_0x3d7113);
  var _0x5a3140 = P(_0xeb653b);
  var _0x2f2198 = Ca(_0x4f5e4f, _0x5a3140);
  var _0x45adb2 = Math.abs(Xp(_0x4f5e4f, _0x5a3140));
  _0x4f5e4f.setDate(_0x4f5e4f.getDate() - _0x2f2198 * _0x45adb2);
  var _0x37bed7 = +(Ca(_0x4f5e4f, _0x5a3140) === -_0x2f2198);
  var _0x279d00 = _0x2f2198 * (_0x45adb2 - _0x37bed7);
  if (_0x279d00 === 0) {
    return 0;
  } else {
    return _0x279d00;
  }
}
function ii(_0xb0e012, _0x5d8f4a) {
  w(2, arguments);
  return P(_0xb0e012).getTime() - P(_0x5d8f4a).getTime();
}
var Ea = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function (_0xfe4e2d) {
    if (_0xfe4e2d < 0) {
      return Math.ceil(_0xfe4e2d);
    } else {
      return Math.floor(_0xfe4e2d);
    }
  }
};
var og = "trunc";
function He(_0x579e06) {
  if (_0x579e06) {
    return Ea[_0x579e06];
  } else {
    return Ea[og];
  }
}
function sg(_0x56d1f4, _0x4949c2, _0x394275) {
  w(2, arguments);
  var _0x5a728f = ii(_0x56d1f4, _0x4949c2) / ri;
  return He(_0x394275?.roundingMethod)(_0x5a728f);
}
function ag(_0x356f15, _0x2286c1, _0x34e652) {
  w(2, arguments);
  var _0x2d5369 = ii(_0x356f15, _0x2286c1) / ni;
  return He(_0x34e652?.roundingMethod)(_0x2d5369);
}
function Yu(_0x47b327) {
  w(1, arguments);
  var _0x1c930c = P(_0x47b327);
  _0x1c930c.setHours(23, 59, 59, 999);
  return _0x1c930c;
}
function Vu(_0x13907a) {
  w(1, arguments);
  var _0x590e12 = P(_0x13907a);
  var _0x27fba3 = _0x590e12.getMonth();
  _0x590e12.setFullYear(_0x590e12.getFullYear(), _0x27fba3 + 1, 0);
  _0x590e12.setHours(23, 59, 59, 999);
  return _0x590e12;
}
function cg(_0x92df9e) {
  w(1, arguments);
  var _0x3d69e8 = P(_0x92df9e);
  return Yu(_0x3d69e8).getTime() === Vu(_0x3d69e8).getTime();
}
function qu(_0x567bde, _0x4b71cd) {
  w(2, arguments);
  var _0x5a03a4 = P(_0x567bde);
  var _0x2f6a99 = P(_0x4b71cd);
  var _0x376746 = Re(_0x5a03a4, _0x2f6a99);
  var _0x3988f2 = Math.abs(rg(_0x5a03a4, _0x2f6a99));
  var _0x3629dc;
  if (_0x3988f2 < 1) {
    _0x3629dc = 0;
  } else {
    if (_0x5a03a4.getMonth() === 1 && _0x5a03a4.getDate() > 27) {
      _0x5a03a4.setDate(30);
    }
    _0x5a03a4.setMonth(_0x5a03a4.getMonth() - _0x376746 * _0x3988f2);
    var _0x591662 = Re(_0x5a03a4, _0x2f6a99) === -_0x376746;
    if (cg(P(_0x567bde)) && _0x3988f2 === 1 && Re(_0x567bde, _0x2f6a99) === 1) {
      _0x591662 = false;
    }
    _0x3629dc = _0x376746 * (_0x3988f2 - Number(_0x591662));
  }
  if (_0x3629dc === 0) {
    return 0;
  } else {
    return _0x3629dc;
  }
}
function ug(_0x1a9ce9, _0x2e987a, _0x5c654e) {
  w(2, arguments);
  var _0x27d416 = qu(_0x1a9ce9, _0x2e987a) / 3;
  return He(_0x5c654e?.roundingMethod)(_0x27d416);
}
function lg(_0x84853f, _0x120ba0, _0x1a0f02) {
  w(2, arguments);
  var _0x376cd3 = ii(_0x84853f, _0x120ba0) / 1000;
  return He(_0x1a0f02?.roundingMethod)(_0x376cd3);
}
function fg(_0x28f170, _0x83ce13, _0x51cb5c) {
  w(2, arguments);
  var _0x330ab6 = Hu(_0x28f170, _0x83ce13) / 7;
  return He(_0x51cb5c?.roundingMethod)(_0x330ab6);
}
function hg(_0x42029e, _0x29a3be) {
  w(2, arguments);
  var _0x27dd72 = P(_0x42029e);
  var _0x1c75c1 = P(_0x29a3be);
  var _0x1ec09c = Re(_0x27dd72, _0x1c75c1);
  var _0x57bb4b = Math.abs(ig(_0x27dd72, _0x1c75c1));
  _0x27dd72.setFullYear(1584);
  _0x1c75c1.setFullYear(1584);
  var _0x4bd21a = Re(_0x27dd72, _0x1c75c1) === -_0x1ec09c;
  var _0x33d02e = _0x1ec09c * (_0x57bb4b - Number(_0x4bd21a));
  if (_0x33d02e === 0) {
    return 0;
  } else {
    return _0x33d02e;
  }
}
function dg(_0x3acbe0) {
  w(1, arguments);
  var _0x54486c = P(_0x3acbe0);
  _0x54486c.setSeconds(0, 0);
  return _0x54486c;
}
function pg(_0x5ae9d7) {
  w(1, arguments);
  var _0x1b1278 = P(_0x5ae9d7);
  var _0x1ca79b = _0x1b1278.getMonth();
  var _0x373e0c = _0x1ca79b - _0x1ca79b % 3;
  _0x1b1278.setMonth(_0x373e0c, 1);
  _0x1b1278.setHours(0, 0, 0, 0);
  return _0x1b1278;
}
function gg(_0x24bf9d) {
  w(1, arguments);
  var _0x295fc5 = P(_0x24bf9d);
  _0x295fc5.setDate(1);
  _0x295fc5.setHours(0, 0, 0, 0);
  return _0x295fc5;
}
function yg(_0x148b56) {
  w(1, arguments);
  var _0x1c239a = P(_0x148b56);
  var _0xb920c = _0x1c239a.getFullYear();
  _0x1c239a.setFullYear(_0xb920c + 1, 0, 0);
  _0x1c239a.setHours(23, 59, 59, 999);
  return _0x1c239a;
}
function mg(_0x182af7) {
  w(1, arguments);
  var _0x54b21b = P(_0x182af7);
  var _0x1e8fa4 = new Date(0);
  _0x1e8fa4.setFullYear(_0x54b21b.getFullYear(), 0, 1);
  _0x1e8fa4.setHours(0, 0, 0, 0);
  return _0x1e8fa4;
}
function bg(_0xa90fe2) {
  w(1, arguments);
  var _0x20b8c4 = P(_0xa90fe2);
  _0x20b8c4.setMinutes(59, 59, 999);
  return _0x20b8c4;
}
function _g(_0x9d7282, _0x2c69ef) {
  var _0x61bcb3;
  var _0x24a28c;
  var _0x4b3ac7;
  var _0x178db2;
  w(1, arguments);
  var _0x2aec3c = Bt();
  var _0x7eabe6 = F(_0x2c69ef?.weekStartsOn ?? (_0x2c69ef == null || (_0x61bcb3 = _0x2c69ef.locale) === null || _0x61bcb3 === undefined || (_0x24a28c = _0x61bcb3.options) === null || _0x24a28c === undefined ? undefined : _0x24a28c.weekStartsOn) ?? _0x2aec3c.weekStartsOn ?? ((_0x4b3ac7 = _0x2aec3c.locale) === null || _0x4b3ac7 === undefined || (_0x178db2 = _0x4b3ac7.options) === null || _0x178db2 === undefined ? undefined : _0x178db2.weekStartsOn) ?? 0);
  if (!(_0x7eabe6 >= 0) || !(_0x7eabe6 <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var _0x3a9862 = P(_0x9d7282);
  var _0x20b974 = _0x3a9862.getDay();
  var _0x42f2bc = (_0x20b974 < _0x7eabe6 ? -7 : 0) + 6 - (_0x20b974 - _0x7eabe6);
  _0x3a9862.setDate(_0x3a9862.getDate() + _0x42f2bc);
  _0x3a9862.setHours(23, 59, 59, 999);
  return _0x3a9862;
}
function vg(_0x19e8ab) {
  w(1, arguments);
  var _0x3e4c4d = P(_0x19e8ab);
  _0x3e4c4d.setSeconds(59, 999);
  return _0x3e4c4d;
}
function wg(_0x3fcfcf) {
  w(1, arguments);
  var _0x186d77 = P(_0x3fcfcf);
  var _0x229abd = _0x186d77.getMonth();
  var _0x1098ab = _0x229abd - _0x229abd % 3 + 3;
  _0x186d77.setMonth(_0x1098ab, 0);
  _0x186d77.setHours(23, 59, 59, 999);
  return _0x186d77;
}
function xg(_0x3b5559) {
  w(1, arguments);
  var _0x4d608 = P(_0x3b5559);
  _0x4d608.setMilliseconds(999);
  return _0x4d608;
}
function Xu(_0x58f966, _0x35d046) {
  w(2, arguments);
  var _0x2a9b0c = F(_0x35d046);
  return Ue(_0x58f966, -_0x2a9b0c);
}
var Og = 86400000;
function Pg(_0x4dcd7a) {
  w(1, arguments);
  var _0x459208 = P(_0x4dcd7a);
  var _0x887e7b = _0x459208.getTime();
  _0x459208.setUTCMonth(0, 1);
  _0x459208.setUTCHours(0, 0, 0, 0);
  var _0x5226a8 = _0x459208.getTime();
  var _0x3cd08b = _0x887e7b - _0x5226a8;
  return Math.floor(_0x3cd08b / Og) + 1;
}
function de(_0x3f4147) {
  w(1, arguments);
  var _0x355154 = 1;
  var _0x4c560f = P(_0x3f4147);
  var _0x5345a6 = _0x4c560f.getUTCDay();
  var _0x9f4749 = (_0x5345a6 < _0x355154 ? 7 : 0) + _0x5345a6 - _0x355154;
  _0x4c560f.setUTCDate(_0x4c560f.getUTCDate() - _0x9f4749);
  _0x4c560f.setUTCHours(0, 0, 0, 0);
  return _0x4c560f;
}
function Qu(_0x4d08d0) {
  w(1, arguments);
  var _0x33c6ee = P(_0x4d08d0);
  var _0x374462 = _0x33c6ee.getUTCFullYear();
  var _0xd84613 = new Date(0);
  _0xd84613.setUTCFullYear(_0x374462 + 1, 0, 4);
  _0xd84613.setUTCHours(0, 0, 0, 0);
  var _0x494346 = de(_0xd84613);
  var _0x59e114 = new Date(0);
  _0x59e114.setUTCFullYear(_0x374462, 0, 4);
  _0x59e114.setUTCHours(0, 0, 0, 0);
  var _0x579c24 = de(_0x59e114);
  if (_0x33c6ee.getTime() >= _0x494346.getTime()) {
    return _0x374462 + 1;
  } else if (_0x33c6ee.getTime() >= _0x579c24.getTime()) {
    return _0x374462;
  } else {
    return _0x374462 - 1;
  }
}
function Sg(_0xe1b438) {
  w(1, arguments);
  var _0x1e12b4 = Qu(_0xe1b438);
  var _0x34b723 = new Date(0);
  _0x34b723.setUTCFullYear(_0x1e12b4, 0, 4);
  _0x34b723.setUTCHours(0, 0, 0, 0);
  var _0x2734e2 = de(_0x34b723);
  return _0x2734e2;
}
var Tg = 604800000;
function Gu(_0x2a45aa) {
  w(1, arguments);
  var _0x109464 = P(_0x2a45aa);
  var _0x2c6a9d = de(_0x109464).getTime() - Sg(_0x109464).getTime();
  return Math.round(_0x2c6a9d / Tg) + 1;
}
function Zt(_0x3dcca0, _0x3d24b5) {
  var _0xa92e9f;
  var _0x556920;
  var _0x12db34;
  var _0x71ce4a;
  w(1, arguments);
  var _0x354c9f = Bt();
  var _0x572a30 = F(_0x3d24b5?.weekStartsOn ?? (_0x3d24b5 == null || (_0xa92e9f = _0x3d24b5.locale) === null || _0xa92e9f === undefined || (_0x556920 = _0xa92e9f.options) === null || _0x556920 === undefined ? undefined : _0x556920.weekStartsOn) ?? _0x354c9f.weekStartsOn ?? ((_0x12db34 = _0x354c9f.locale) === null || _0x12db34 === undefined || (_0x71ce4a = _0x12db34.options) === null || _0x71ce4a === undefined ? undefined : _0x71ce4a.weekStartsOn) ?? 0);
  if (!(_0x572a30 >= 0) || !(_0x572a30 <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var _0x577a19 = P(_0x3dcca0);
  var _0x281e8c = _0x577a19.getUTCDay();
  var _0x28b20a = (_0x281e8c < _0x572a30 ? 7 : 0) + _0x281e8c - _0x572a30;
  _0x577a19.setUTCDate(_0x577a19.getUTCDate() - _0x28b20a);
  _0x577a19.setUTCHours(0, 0, 0, 0);
  return _0x577a19;
}
function us(_0x558ed4, _0xefb43a) {
  var _0x3242fc;
  var _0x47e5e1;
  var _0x276ef2;
  var _0x50a4a0;
  w(1, arguments);
  var _0x56f4c5 = P(_0x558ed4);
  var _0x2cfeeb = _0x56f4c5.getUTCFullYear();
  var _0x39e1fa = Bt();
  var _0x491fea = F(_0xefb43a?.firstWeekContainsDate ?? (_0xefb43a == null || (_0x3242fc = _0xefb43a.locale) === null || _0x3242fc === undefined || (_0x47e5e1 = _0x3242fc.options) === null || _0x47e5e1 === undefined ? undefined : _0x47e5e1.firstWeekContainsDate) ?? _0x39e1fa.firstWeekContainsDate ?? ((_0x276ef2 = _0x39e1fa.locale) === null || _0x276ef2 === undefined || (_0x50a4a0 = _0x276ef2.options) === null || _0x50a4a0 === undefined ? undefined : _0x50a4a0.firstWeekContainsDate) ?? 1);
  if (!(_0x491fea >= 1) || !(_0x491fea <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var _0x26a7bc = new Date(0);
  _0x26a7bc.setUTCFullYear(_0x2cfeeb + 1, 0, _0x491fea);
  _0x26a7bc.setUTCHours(0, 0, 0, 0);
  var _0x1780a5 = Zt(_0x26a7bc, _0xefb43a);
  var _0x49d9f0 = new Date(0);
  _0x49d9f0.setUTCFullYear(_0x2cfeeb, 0, _0x491fea);
  _0x49d9f0.setUTCHours(0, 0, 0, 0);
  var _0x1da421 = Zt(_0x49d9f0, _0xefb43a);
  if (_0x56f4c5.getTime() >= _0x1780a5.getTime()) {
    return _0x2cfeeb + 1;
  } else if (_0x56f4c5.getTime() >= _0x1da421.getTime()) {
    return _0x2cfeeb;
  } else {
    return _0x2cfeeb - 1;
  }
}
function Mg(_0x64f4c7, _0x6f6608) {
  var _0x5f552d;
  var _0x4120a3;
  var _0x503d1e;
  var _0x44606a;
  w(1, arguments);
  var _0x15f439 = Bt();
  var _0x35e63c = F(_0x6f6608?.firstWeekContainsDate ?? (_0x6f6608 == null || (_0x5f552d = _0x6f6608.locale) === null || _0x5f552d === undefined || (_0x4120a3 = _0x5f552d.options) === null || _0x4120a3 === undefined ? undefined : _0x4120a3.firstWeekContainsDate) ?? _0x15f439.firstWeekContainsDate ?? ((_0x503d1e = _0x15f439.locale) === null || _0x503d1e === undefined || (_0x44606a = _0x503d1e.options) === null || _0x44606a === undefined ? undefined : _0x44606a.firstWeekContainsDate) ?? 1);
  var _0x2627b0 = us(_0x64f4c7, _0x6f6608);
  var _0x4f32dd = new Date(0);
  _0x4f32dd.setUTCFullYear(_0x2627b0, 0, _0x35e63c);
  _0x4f32dd.setUTCHours(0, 0, 0, 0);
  var _0x8077d8 = Zt(_0x4f32dd, _0x6f6608);
  return _0x8077d8;
}
var kg = 604800000;
function Ku(_0x2611d2, _0x3ff333) {
  w(1, arguments);
  var _0x31ac37 = P(_0x2611d2);
  var _0x51fe83 = Zt(_0x31ac37, _0x3ff333).getTime() - Mg(_0x31ac37, _0x3ff333).getTime();
  return Math.round(_0x51fe83 / kg) + 1;
}
function E(_0x4a8a6f, _0x507b96) {
  var _0x176502 = _0x4a8a6f < 0 ? "-" : "";
  for (var _0x50b1eb = Math.abs(_0x4a8a6f).toString(); _0x50b1eb.length < _0x507b96;) {
    _0x50b1eb = "0" + _0x50b1eb;
  }
  return _0x176502 + _0x50b1eb;
}
var Dg = {
  y: function (_0x3b1dbf, _0x2a6d4d) {
    var _0x5b1c28 = _0x3b1dbf.getUTCFullYear();
    var _0x18b19b = _0x5b1c28 > 0 ? _0x5b1c28 : 1 - _0x5b1c28;
    return E(_0x2a6d4d === "yy" ? _0x18b19b % 100 : _0x18b19b, _0x2a6d4d.length);
  },
  M: function (_0x41e941, _0x52fd67) {
    var _0x55ebec = _0x41e941.getUTCMonth();
    if (_0x52fd67 === "M") {
      return String(_0x55ebec + 1);
    } else {
      return E(_0x55ebec + 1, 2);
    }
  },
  d: function (_0x49c2db, _0x264437) {
    return E(_0x49c2db.getUTCDate(), _0x264437.length);
  },
  a: function (_0x1dd76d, _0x141d72) {
    var _0x5acf90 = _0x1dd76d.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (_0x141d72) {
      case "a":
      case "aa":
        return _0x5acf90.toUpperCase();
      case "aaa":
        return _0x5acf90;
      case "aaaaa":
        return _0x5acf90[0];
      case "aaaa":
      default:
        if (_0x5acf90 === "am") {
          return "a.m.";
        } else {
          return "p.m.";
        }
    }
  },
  h: function (_0xa089e1, _0x2febd8) {
    return E(_0xa089e1.getUTCHours() % 12 || 12, _0x2febd8.length);
  },
  H: function (_0x33ad54, _0x19bd2f) {
    return E(_0x33ad54.getUTCHours(), _0x19bd2f.length);
  },
  m: function (_0x770823, _0x470ef2) {
    return E(_0x770823.getUTCMinutes(), _0x470ef2.length);
  },
  s: function (_0x20aebd, _0x5747f0) {
    return E(_0x20aebd.getUTCSeconds(), _0x5747f0.length);
  },
  S: function (_0x3eb8a7, _0x51d5cd) {
    var _0x3617c7 = _0x51d5cd.length;
    var _0x31eb86 = _0x3eb8a7.getUTCMilliseconds();
    var _0x57906c = Math.floor(_0x31eb86 * Math.pow(10, _0x3617c7 - 3));
    return E(_0x57906c, _0x51d5cd.length);
  }
};
const Et = Dg;
var ie = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var $g = {
  G: function (_0x2cd126, _0x14ea87, _0x1ee2ef) {
    var _0x1cb407 = _0x2cd126.getUTCFullYear() > 0 ? 1 : 0;
    switch (_0x14ea87) {
      case "G":
      case "GG":
      case "GGG":
        return _0x1ee2ef.era(_0x1cb407, {
          width: "abbreviated"
        });
      case "GGGGG":
        return _0x1ee2ef.era(_0x1cb407, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return _0x1ee2ef.era(_0x1cb407, {
          width: "wide"
        });
    }
  },
  y: function (_0x405557, _0x5497a5, _0x1fe560) {
    if (_0x5497a5 === "yo") {
      var _0x44c22d = _0x405557.getUTCFullYear();
      var _0xba87a4 = _0x44c22d > 0 ? _0x44c22d : 1 - _0x44c22d;
      return _0x1fe560.ordinalNumber(_0xba87a4, {
        unit: "year"
      });
    }
    return Et.y(_0x405557, _0x5497a5);
  },
  Y: function (_0x24438b, _0x350338, _0x596c2a, _0x563936) {
    var _0x3c3e8f = us(_0x24438b, _0x563936);
    var _0x56a4c4 = _0x3c3e8f > 0 ? _0x3c3e8f : 1 - _0x3c3e8f;
    if (_0x350338 === "YY") {
      var _0x48c08d = _0x56a4c4 % 100;
      return E(_0x48c08d, 2);
    }
    if (_0x350338 === "Yo") {
      return _0x596c2a.ordinalNumber(_0x56a4c4, {
        unit: "year"
      });
    } else {
      return E(_0x56a4c4, _0x350338.length);
    }
  },
  R: function (_0x48537f, _0x8d5eaf) {
    var _0xaff9f4 = Qu(_0x48537f);
    return E(_0xaff9f4, _0x8d5eaf.length);
  },
  u: function (_0x8a0e22, _0x2c530b) {
    var _0x40219a = _0x8a0e22.getUTCFullYear();
    return E(_0x40219a, _0x2c530b.length);
  },
  Q: function (_0x18fa04, _0x312bac, _0x43cbcf) {
    var _0x32e429 = Math.ceil((_0x18fa04.getUTCMonth() + 1) / 3);
    switch (_0x312bac) {
      case "Q":
        return String(_0x32e429);
      case "QQ":
        return E(_0x32e429, 2);
      case "Qo":
        return _0x43cbcf.ordinalNumber(_0x32e429, {
          unit: "quarter"
        });
      case "QQQ":
        return _0x43cbcf.quarter(_0x32e429, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return _0x43cbcf.quarter(_0x32e429, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return _0x43cbcf.quarter(_0x32e429, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function (_0x51c292, _0x3552b7, _0x2b2219) {
    var _0x5b73a8 = Math.ceil((_0x51c292.getUTCMonth() + 1) / 3);
    switch (_0x3552b7) {
      case "q":
        return String(_0x5b73a8);
      case "qq":
        return E(_0x5b73a8, 2);
      case "qo":
        return _0x2b2219.ordinalNumber(_0x5b73a8, {
          unit: "quarter"
        });
      case "qqq":
        return _0x2b2219.quarter(_0x5b73a8, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return _0x2b2219.quarter(_0x5b73a8, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return _0x2b2219.quarter(_0x5b73a8, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function (_0x34c223, _0x3241fe, _0x2c3afa) {
    var _0x337e91 = _0x34c223.getUTCMonth();
    switch (_0x3241fe) {
      case "M":
      case "MM":
        return Et.M(_0x34c223, _0x3241fe);
      case "Mo":
        return _0x2c3afa.ordinalNumber(_0x337e91 + 1, {
          unit: "month"
        });
      case "MMM":
        return _0x2c3afa.month(_0x337e91, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return _0x2c3afa.month(_0x337e91, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return _0x2c3afa.month(_0x337e91, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function (_0x4803a8, _0x19a349, _0x590d94) {
    var _0x377ae3 = _0x4803a8.getUTCMonth();
    switch (_0x19a349) {
      case "L":
        return String(_0x377ae3 + 1);
      case "LL":
        return E(_0x377ae3 + 1, 2);
      case "Lo":
        return _0x590d94.ordinalNumber(_0x377ae3 + 1, {
          unit: "month"
        });
      case "LLL":
        return _0x590d94.month(_0x377ae3, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return _0x590d94.month(_0x377ae3, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return _0x590d94.month(_0x377ae3, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function (_0x2639d9, _0x416647, _0xd554ff, _0x258251) {
    var _0x38aa0b = Ku(_0x2639d9, _0x258251);
    if (_0x416647 === "wo") {
      return _0xd554ff.ordinalNumber(_0x38aa0b, {
        unit: "week"
      });
    } else {
      return E(_0x38aa0b, _0x416647.length);
    }
  },
  I: function (_0x58ce51, _0xeb1713, _0x489fa0) {
    var _0x2d4458 = Gu(_0x58ce51);
    if (_0xeb1713 === "Io") {
      return _0x489fa0.ordinalNumber(_0x2d4458, {
        unit: "week"
      });
    } else {
      return E(_0x2d4458, _0xeb1713.length);
    }
  },
  d: function (_0x3b4c92, _0x1efdc4, _0x36bdf1) {
    if (_0x1efdc4 === "do") {
      return _0x36bdf1.ordinalNumber(_0x3b4c92.getUTCDate(), {
        unit: "date"
      });
    } else {
      return Et.d(_0x3b4c92, _0x1efdc4);
    }
  },
  D: function (_0x44df88, _0x7d012a, _0x447ed8) {
    var _0x955e1 = Pg(_0x44df88);
    if (_0x7d012a === "Do") {
      return _0x447ed8.ordinalNumber(_0x955e1, {
        unit: "dayOfYear"
      });
    } else {
      return E(_0x955e1, _0x7d012a.length);
    }
  },
  E: function (_0x16cb21, _0xd08efe, _0x5448ac) {
    var _0x298ae2 = _0x16cb21.getUTCDay();
    switch (_0xd08efe) {
      case "E":
      case "EE":
      case "EEE":
        return _0x5448ac.day(_0x298ae2, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return _0x5448ac.day(_0x298ae2, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return _0x5448ac.day(_0x298ae2, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return _0x5448ac.day(_0x298ae2, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function (_0x47a7ac, _0x511ea4, _0x33785f, _0xde7b25) {
    var _0x43e4ac = _0x47a7ac.getUTCDay();
    var _0x1d65c8 = (_0x43e4ac - _0xde7b25.weekStartsOn + 8) % 7 || 7;
    switch (_0x511ea4) {
      case "e":
        return String(_0x1d65c8);
      case "ee":
        return E(_0x1d65c8, 2);
      case "eo":
        return _0x33785f.ordinalNumber(_0x1d65c8, {
          unit: "day"
        });
      case "eee":
        return _0x33785f.day(_0x43e4ac, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return _0x33785f.day(_0x43e4ac, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return _0x33785f.day(_0x43e4ac, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return _0x33785f.day(_0x43e4ac, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function (_0x15a091, _0x3b1b1e, _0x16056a, _0x2a380f) {
    var _0x42ff94 = _0x15a091.getUTCDay();
    var _0x2f2ac9 = (_0x42ff94 - _0x2a380f.weekStartsOn + 8) % 7 || 7;
    switch (_0x3b1b1e) {
      case "c":
        return String(_0x2f2ac9);
      case "cc":
        return E(_0x2f2ac9, _0x3b1b1e.length);
      case "co":
        return _0x16056a.ordinalNumber(_0x2f2ac9, {
          unit: "day"
        });
      case "ccc":
        return _0x16056a.day(_0x42ff94, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return _0x16056a.day(_0x42ff94, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return _0x16056a.day(_0x42ff94, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return _0x16056a.day(_0x42ff94, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function (_0x5e3941, _0x592f94, _0x72cb9a) {
    var _0xba8f61 = _0x5e3941.getUTCDay();
    var _0x42e5f2 = _0xba8f61 === 0 ? 7 : _0xba8f61;
    switch (_0x592f94) {
      case "i":
        return String(_0x42e5f2);
      case "ii":
        return E(_0x42e5f2, _0x592f94.length);
      case "io":
        return _0x72cb9a.ordinalNumber(_0x42e5f2, {
          unit: "day"
        });
      case "iii":
        return _0x72cb9a.day(_0xba8f61, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return _0x72cb9a.day(_0xba8f61, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return _0x72cb9a.day(_0xba8f61, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return _0x72cb9a.day(_0xba8f61, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function (_0x2ee216, _0x3f1d74, _0x38c25f) {
    var _0x320fcd = _0x2ee216.getUTCHours();
    var _0xb8ae66 = _0x320fcd / 12 >= 1 ? "pm" : "am";
    switch (_0x3f1d74) {
      case "a":
      case "aa":
        return _0x38c25f.dayPeriod(_0xb8ae66, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return _0x38c25f.dayPeriod(_0xb8ae66, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return _0x38c25f.dayPeriod(_0xb8ae66, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return _0x38c25f.dayPeriod(_0xb8ae66, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function (_0x3b603f, _0x16d6ab, _0x38023d) {
    var _0x2f0eb9 = _0x3b603f.getUTCHours();
    var _0xf81056;
    if (_0x2f0eb9 === 12) {
      _0xf81056 = ie.noon;
    } else if (_0x2f0eb9 === 0) {
      _0xf81056 = ie.midnight;
    } else {
      _0xf81056 = _0x2f0eb9 / 12 >= 1 ? "pm" : "am";
    }
    switch (_0x16d6ab) {
      case "b":
      case "bb":
        return _0x38023d.dayPeriod(_0xf81056, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return _0x38023d.dayPeriod(_0xf81056, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return _0x38023d.dayPeriod(_0xf81056, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return _0x38023d.dayPeriod(_0xf81056, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function (_0x4f700d, _0x132be7, _0xbef76) {
    var _0xadb7c0 = _0x4f700d.getUTCHours();
    var _0x30415e;
    if (_0xadb7c0 >= 17) {
      _0x30415e = ie.evening;
    } else if (_0xadb7c0 >= 12) {
      _0x30415e = ie.afternoon;
    } else if (_0xadb7c0 >= 4) {
      _0x30415e = ie.morning;
    } else {
      _0x30415e = ie.night;
    }
    switch (_0x132be7) {
      case "B":
      case "BB":
      case "BBB":
        return _0xbef76.dayPeriod(_0x30415e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return _0xbef76.dayPeriod(_0x30415e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return _0xbef76.dayPeriod(_0x30415e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function (_0x55edc9, _0x8560e0, _0x573a7c) {
    if (_0x8560e0 === "ho") {
      var _0x13744a = _0x55edc9.getUTCHours() % 12;
      if (_0x13744a === 0) {
        _0x13744a = 12;
      }
      return _0x573a7c.ordinalNumber(_0x13744a, {
        unit: "hour"
      });
    }
    return Et.h(_0x55edc9, _0x8560e0);
  },
  H: function (_0x4379b3, _0x25be17, _0x194406) {
    if (_0x25be17 === "Ho") {
      return _0x194406.ordinalNumber(_0x4379b3.getUTCHours(), {
        unit: "hour"
      });
    } else {
      return Et.H(_0x4379b3, _0x25be17);
    }
  },
  K: function (_0x2b88b3, _0x4e6c34, _0x3f6389) {
    var _0xd77b65 = _0x2b88b3.getUTCHours() % 12;
    if (_0x4e6c34 === "Ko") {
      return _0x3f6389.ordinalNumber(_0xd77b65, {
        unit: "hour"
      });
    } else {
      return E(_0xd77b65, _0x4e6c34.length);
    }
  },
  k: function (_0x29f31f, _0x39bc18, _0x3dbc47) {
    var _0x27066f = _0x29f31f.getUTCHours();
    if (_0x27066f === 0) {
      _0x27066f = 24;
    }
    if (_0x39bc18 === "ko") {
      return _0x3dbc47.ordinalNumber(_0x27066f, {
        unit: "hour"
      });
    } else {
      return E(_0x27066f, _0x39bc18.length);
    }
  },
  m: function (_0x1137d4, _0x1eac3f, _0x52f3c7) {
    if (_0x1eac3f === "mo") {
      return _0x52f3c7.ordinalNumber(_0x1137d4.getUTCMinutes(), {
        unit: "minute"
      });
    } else {
      return Et.m(_0x1137d4, _0x1eac3f);
    }
  },
  s: function (_0x3f5443, _0xebb6a8, _0xf8d089) {
    if (_0xebb6a8 === "so") {
      return _0xf8d089.ordinalNumber(_0x3f5443.getUTCSeconds(), {
        unit: "second"
      });
    } else {
      return Et.s(_0x3f5443, _0xebb6a8);
    }
  },
  S: function (_0x586a04, _0x1c98fd) {
    return Et.S(_0x586a04, _0x1c98fd);
  },
  X: function (_0x5ad0a8, _0x1980b9, _0x1326cd, _0x1a72d4) {
    var _0x3af380 = _0x1a72d4._originalDate || _0x5ad0a8;
    var _0x57ea48 = _0x3af380.getTimezoneOffset();
    if (_0x57ea48 === 0) {
      return "Z";
    }
    switch (_0x1980b9) {
      case "X":
        return La(_0x57ea48);
      case "XXXX":
      case "XX":
        return Xt(_0x57ea48);
      case "XXXXX":
      case "XXX":
      default:
        return Xt(_0x57ea48, ":");
    }
  },
  x: function (_0x93083a, _0x40edbb, _0x219405, _0x215bcb) {
    var _0x54548a = _0x215bcb._originalDate || _0x93083a;
    var _0x143c5e = _0x54548a.getTimezoneOffset();
    switch (_0x40edbb) {
      case "x":
        return La(_0x143c5e);
      case "xxxx":
      case "xx":
        return Xt(_0x143c5e);
      case "xxxxx":
      case "xxx":
      default:
        return Xt(_0x143c5e, ":");
    }
  },
  O: function (_0xce3572, _0x120c07, _0x32cd9e, _0x28dca9) {
    var _0x55a6f2 = _0x28dca9._originalDate || _0xce3572;
    var _0x1ec233 = _0x55a6f2.getTimezoneOffset();
    switch (_0x120c07) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ia(_0x1ec233, ":");
      case "OOOO":
      default:
        return "GMT" + Xt(_0x1ec233, ":");
    }
  },
  z: function (_0x5c3077, _0x589579, _0x47e16d, _0xa0d951) {
    var _0x41e398 = _0xa0d951._originalDate || _0x5c3077;
    var _0x589b05 = _0x41e398.getTimezoneOffset();
    switch (_0x589579) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ia(_0x589b05, ":");
      case "zzzz":
      default:
        return "GMT" + Xt(_0x589b05, ":");
    }
  },
  t: function (_0x25da68, _0x571d6e, _0x540bfa, _0x5a7af0) {
    var _0x242374 = _0x5a7af0._originalDate || _0x25da68;
    var _0x46eacf = Math.floor(_0x242374.getTime() / 1000);
    return E(_0x46eacf, _0x571d6e.length);
  },
  T: function (_0x293d1c, _0x5e161c, _0x445239, _0x481101) {
    var _0x2cea5f = _0x481101._originalDate || _0x293d1c;
    var _0x4205f8 = _0x2cea5f.getTime();
    return E(_0x4205f8, _0x5e161c.length);
  }
};
function Ia(_0x1826ef, _0x526b75) {
  var _0x2d30eb = _0x1826ef > 0 ? "-" : "+";
  var _0x212437 = Math.abs(_0x1826ef);
  var _0x1d3768 = Math.floor(_0x212437 / 60);
  var _0x4f0587 = _0x212437 % 60;
  if (_0x4f0587 === 0) {
    return _0x2d30eb + String(_0x1d3768);
  }
  var _0x4692e0 = _0x526b75 || "";
  return _0x2d30eb + String(_0x1d3768) + _0x4692e0 + E(_0x4f0587, 2);
}
function La(_0x6be2ba, _0x209024) {
  if (_0x6be2ba % 60 === 0) {
    var _0x44f956 = _0x6be2ba > 0 ? "-" : "+";
    return _0x44f956 + E(Math.abs(_0x6be2ba) / 60, 2);
  }
  return Xt(_0x6be2ba, _0x209024);
}
function Xt(_0x2a209e, _0xe23be8) {
  var _0xaa45b7 = _0xe23be8 || "";
  var _0xd64be4 = _0x2a209e > 0 ? "-" : "+";
  var _0x3c4a92 = Math.abs(_0x2a209e);
  var _0x52eca7 = E(Math.floor(_0x3c4a92 / 60), 2);
  var _0x595f4b = E(_0x3c4a92 % 60, 2);
  return _0xd64be4 + _0x52eca7 + _0xaa45b7 + _0x595f4b;
}
const Rg = $g;
function Aa(_0x49a720, _0x33785a) {
  switch (_0x49a720) {
    case "P":
      return _0x33785a.date({
        width: "short"
      });
    case "PP":
      return _0x33785a.date({
        width: "medium"
      });
    case "PPP":
      return _0x33785a.date({
        width: "long"
      });
    case "PPPP":
    default:
      return _0x33785a.date({
        width: "full"
      });
  }
}
function Zu(_0x5985f0, _0xf70827) {
  switch (_0x5985f0) {
    case "p":
      return _0xf70827.time({
        width: "short"
      });
    case "pp":
      return _0xf70827.time({
        width: "medium"
      });
    case "ppp":
      return _0xf70827.time({
        width: "long"
      });
    case "pppp":
    default:
      return _0xf70827.time({
        width: "full"
      });
  }
}
function Cg(_0x5d8da2, _0x264ae0) {
  var _0x2edf83 = _0x5d8da2.match(/(P+)(p+)?/) || [];
  var _0x1531fc = _0x2edf83[1];
  var _0x1f7928 = _0x2edf83[2];
  if (!_0x1f7928) {
    return Aa(_0x5d8da2, _0x264ae0);
  }
  var _0x3a9e40;
  switch (_0x1531fc) {
    case "P":
      _0x3a9e40 = _0x264ae0.dateTime({
        width: "short"
      });
      break;
    case "PP":
      _0x3a9e40 = _0x264ae0.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      _0x3a9e40 = _0x264ae0.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      _0x3a9e40 = _0x264ae0.dateTime({
        width: "full"
      });
      break;
  }
  return _0x3a9e40.replace("{{date}}", Aa(_0x1531fc, _0x264ae0)).replace("{{time}}", Zu(_0x1f7928, _0x264ae0));
}
var Eg = {
  p: Zu,
  P: Cg
};
const Ci = Eg;
var Ig = ["D", "DD"];
var Lg = ["YY", "YYYY"];
function Ju(_0xdc6d32) {
  return Ig.indexOf(_0xdc6d32) !== -1;
}
function tl(_0x2ba398) {
  return Lg.indexOf(_0x2ba398) !== -1;
}
function yr(_0x24e54e, _0x38d5bf, _0x52d06c) {
  if (_0x24e54e === "YYYY") {
    throw new RangeError(`Use \`yyyy\` instead of \`YYYY\` (in \`${_0x38d5bf}\`) for formatting years to the input \`${_0x52d06c}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);
  }
  if (_0x24e54e === "YY") {
    throw new RangeError(`Use \`yy\` instead of \`YY\` (in \`${_0x38d5bf}\`) for formatting years to the input \`${_0x52d06c}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);
  }
  if (_0x24e54e === "D") {
    throw new RangeError(`Use \`d\` instead of \`D\` (in \`${_0x38d5bf}\`) for formatting days of the month to the input \`${_0x52d06c}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);
  }
  if (_0x24e54e === "DD") {
    throw new RangeError(`Use \`dd\` instead of \`DD\` (in \`${_0x38d5bf}\`) for formatting days of the month to the input \`${_0x52d06c}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);
  }
}
var Ag = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
function Ng(_0x5298dc, _0x38f508, _0x143237) {
  var _0x30e617;
  var _0x105985 = Ag[_0x5298dc];
  if (typeof _0x105985 == "string") {
    _0x30e617 = _0x105985;
  } else if (_0x38f508 === 1) {
    _0x30e617 = _0x105985.one;
  } else {
    _0x30e617 = _0x105985.other.replace("{{count}}", _0x38f508.toString());
  }
  if (_0x143237 != null && _0x143237.addSuffix) {
    if (_0x143237.comparison && _0x143237.comparison > 0) {
      return "in " + _0x30e617;
    } else {
      return _0x30e617 + " ago";
    }
  } else {
    return _0x30e617;
  }
}
const Fg = Ng;
var zg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var Bg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var jg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var Wg = {
  date: yi({
    formats: zg,
    defaultWidth: "full"
  }),
  time: yi({
    formats: Bg,
    defaultWidth: "full"
  }),
  dateTime: yi({
    formats: jg,
    defaultWidth: "full"
  })
};
const Ug = Wg;
var Hg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
function Yg(_0x5e4bcc, _0xea39c5, _0x5d8c13, _0x37dc23) {
  return Hg[_0x5e4bcc];
}
const Vg = Yg;
var qg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var Xg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var Qg = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var Gg = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var Kg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var Zg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
function Jg(_0x578a69, _0x44e36a) {
  var _0x52b520 = Number(_0x578a69);
  var _0x1ae91a = _0x52b520 % 100;
  if (_0x1ae91a > 20 || _0x1ae91a < 10) {
    switch (_0x1ae91a % 10) {
      case 1:
        return _0x52b520 + "st";
      case 2:
        return _0x52b520 + "nd";
      case 3:
        return _0x52b520 + "rd";
    }
  }
  return _0x52b520 + "th";
}
var ty = {
  ordinalNumber: Jg,
  era: ve({
    values: qg,
    defaultWidth: "wide"
  }),
  quarter: ve({
    values: Xg,
    defaultWidth: "wide",
    argumentCallback: function (_0x45caea) {
      return _0x45caea - 1;
    }
  }),
  month: ve({
    values: Qg,
    defaultWidth: "wide"
  }),
  day: ve({
    values: Gg,
    defaultWidth: "wide"
  }),
  dayPeriod: ve({
    values: Kg,
    defaultWidth: "wide",
    formattingValues: Zg,
    defaultFormattingWidth: "wide"
  })
};
const ey = ty;
var ny = /^(\d+)(th|st|nd|rd)?/i;
var ry = /\d+/i;
var iy = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var oy = {
  any: [/^b/i, /^(a|c)/i]
};
var sy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var ay = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var cy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var uy = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var ly = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var fy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var hy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var dy = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var py = {
  ordinalNumber: Up({
    matchPattern: ny,
    parsePattern: ry,
    valueCallback: function (_0x37b192) {
      return parseInt(_0x37b192, 10);
    }
  }),
  era: we({
    matchPatterns: iy,
    defaultMatchWidth: "wide",
    parsePatterns: oy,
    defaultParseWidth: "any"
  }),
  quarter: we({
    matchPatterns: sy,
    defaultMatchWidth: "wide",
    parsePatterns: ay,
    defaultParseWidth: "any",
    valueCallback: function (_0x536087) {
      return _0x536087 + 1;
    }
  }),
  month: we({
    matchPatterns: cy,
    defaultMatchWidth: "wide",
    parsePatterns: uy,
    defaultParseWidth: "any"
  }),
  day: we({
    matchPatterns: ly,
    defaultMatchWidth: "wide",
    parsePatterns: fy,
    defaultParseWidth: "any"
  }),
  dayPeriod: we({
    matchPatterns: hy,
    defaultMatchWidth: "any",
    parsePatterns: dy,
    defaultParseWidth: "any"
  })
};
const gy = py;
var yy = {
  code: "en-US",
  formatDistance: Fg,
  formatLong: Ug,
  formatRelative: Vg,
  localize: ey,
  match: gy,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const ls = yy;
var my = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var by = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var _y = /^'([^]*?)'?$/;
var vy = /''/g;
var wy = /[a-zA-Z]/;
function xy(_0x9bcd8a, _0x4432fa, _0x456eed) {
  var _0xcbc3bf;
  var _0x55df75;
  var _0x1518ff;
  var _0x2cb15a;
  var _0x4c2e5e;
  var _0x433b0a;
  var _0x4e0998;
  var _0x5c9d83;
  w(2, arguments);
  var _0x113837 = String(_0x4432fa);
  var _0x936249 = Bt();
  var _0xc6ed60 = _0x456eed?.locale ?? _0x936249.locale ?? ls;
  var _0x45192a = F(_0x456eed?.firstWeekContainsDate ?? (_0x456eed == null || (_0xcbc3bf = _0x456eed.locale) === null || _0xcbc3bf === undefined || (_0x55df75 = _0xcbc3bf.options) === null || _0x55df75 === undefined ? undefined : _0x55df75.firstWeekContainsDate) ?? _0x936249.firstWeekContainsDate ?? ((_0x1518ff = _0x936249.locale) === null || _0x1518ff === undefined || (_0x2cb15a = _0x1518ff.options) === null || _0x2cb15a === undefined ? undefined : _0x2cb15a.firstWeekContainsDate) ?? 1);
  if (!(_0x45192a >= 1) || !(_0x45192a <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var _0x55a116 = F(_0x456eed?.weekStartsOn ?? (_0x456eed == null || (_0x4c2e5e = _0x456eed.locale) === null || _0x4c2e5e === undefined || (_0x433b0a = _0x4c2e5e.options) === null || _0x433b0a === undefined ? undefined : _0x433b0a.weekStartsOn) ?? _0x936249.weekStartsOn ?? ((_0x4e0998 = _0x936249.locale) === null || _0x4e0998 === undefined || (_0x5c9d83 = _0x4e0998.options) === null || _0x5c9d83 === undefined ? undefined : _0x5c9d83.weekStartsOn) ?? 0);
  if (!(_0x55a116 >= 0) || !(_0x55a116 <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!_0xc6ed60.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!_0xc6ed60.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var _0x20f905 = P(_0x9bcd8a);
  if (!Uu(_0x20f905)) {
    throw new RangeError("Invalid time value");
  }
  var _0x5ca6ae = gr(_0x20f905);
  var _0x2cdf8d = Xu(_0x20f905, _0x5ca6ae);
  var _0x53b11b = {
    firstWeekContainsDate: _0x45192a,
    weekStartsOn: _0x55a116,
    locale: _0xc6ed60,
    _originalDate: _0x20f905
  };
  var _0x5d817b = _0x113837.match(by).map(function (_0x4a2081) {
    var _0x797199 = _0x4a2081[0];
    if (_0x797199 === "p" || _0x797199 === "P") {
      var _0x805b11 = Ci[_0x797199];
      return _0x805b11(_0x4a2081, _0xc6ed60.formatLong);
    }
    return _0x4a2081;
  }).join("").match(my).map(function (_0x76eb5d) {
    if (_0x76eb5d === "''") {
      return "'";
    }
    var _0x2a2001 = _0x76eb5d[0];
    if (_0x2a2001 === "'") {
      return Oy(_0x76eb5d);
    }
    var _0x2e9324 = Rg[_0x2a2001];
    if (_0x2e9324) {
      if ((_0x456eed == null || !_0x456eed.useAdditionalWeekYearTokens) && tl(_0x76eb5d)) {
        yr(_0x76eb5d, _0x4432fa, String(_0x9bcd8a));
      }
      if ((_0x456eed == null || !_0x456eed.useAdditionalDayOfYearTokens) && Ju(_0x76eb5d)) {
        yr(_0x76eb5d, _0x4432fa, String(_0x9bcd8a));
      }
      return _0x2e9324(_0x2cdf8d, _0x76eb5d, _0xc6ed60.localize, _0x53b11b);
    }
    if (_0x2a2001.match(wy)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + _0x2a2001 + "`");
    }
    return _0x76eb5d;
  }).join("");
  return _0x5d817b;
}
function Oy(_0x23c4be) {
  var _0xc4198c = _0x23c4be.match(_y);
  if (_0xc4198c) {
    return _0xc4198c[1].replace(vy, "'");
  } else {
    return _0x23c4be;
  }
}
function Py(_0x51384f, _0x113017) {
  if (_0x51384f == null) {
    throw new TypeError("assign requires that input parameter not be null or undefined");
  }
  for (var _0x3da59b in _0x113017) {
    if (Object.prototype.hasOwnProperty.call(_0x113017, _0x3da59b)) {
      _0x51384f[_0x3da59b] = _0x113017[_0x3da59b];
    }
  }
  return _0x51384f;
}
function gn(_0x15e566) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    gn = function (_0x1314c4) {
      return typeof _0x1314c4;
    };
  } else {
    gn = function (_0x47fdaa) {
      if (_0x47fdaa && typeof Symbol == "function" && _0x47fdaa.constructor === Symbol && _0x47fdaa !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x47fdaa;
      }
    };
  }
  return gn(_0x15e566);
}
function el(_0x343068, _0x26ef70) {
  if (typeof _0x26ef70 != "function" && _0x26ef70 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x343068.prototype = Object.create(_0x26ef70 && _0x26ef70.prototype, {
    constructor: {
      value: _0x343068,
      writable: true,
      configurable: true
    }
  });
  if (_0x26ef70) {
    Ei(_0x343068, _0x26ef70);
  }
}
function Ei(_0x3c1be9, _0x5a13fe) {
  Ei = Object.setPrototypeOf || function (_0x98493a, _0x43d05e) {
    _0x98493a.__proto__ = _0x43d05e;
    return _0x98493a;
  };
  return Ei(_0x3c1be9, _0x5a13fe);
}
function nl(_0x1c62f0) {
  var _0x37cb6d = Ty();
  return function () {
    var _0x233dbd = mr(_0x1c62f0);
    var _0x4dbc09;
    if (_0x37cb6d) {
      var _0x393cc9 = mr(this).constructor;
      _0x4dbc09 = Reflect.construct(_0x233dbd, arguments, _0x393cc9);
    } else {
      _0x4dbc09 = _0x233dbd.apply(this, arguments);
    }
    return Sy(this, _0x4dbc09);
  };
}
function Sy(_0x37ccd8, _0x158e5a) {
  if (_0x158e5a && (gn(_0x158e5a) === "object" || typeof _0x158e5a == "function")) {
    return _0x158e5a;
  } else {
    return Ii(_0x37ccd8);
  }
}
function Ii(_0x56e3fd) {
  if (_0x56e3fd === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x56e3fd;
}
function Ty() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function mr(_0x4ae37b) {
  mr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x5b1b62) {
    return _0x5b1b62.__proto__ || Object.getPrototypeOf(_0x5b1b62);
  };
  return mr(_0x4ae37b);
}
function fs(_0x47c453, _0x315875) {
  if (!(_0x47c453 instanceof _0x315875)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Na(_0x184772, _0x2d0d64) {
  for (var _0x3916ae = 0; _0x3916ae < _0x2d0d64.length; _0x3916ae++) {
    var _0x133ec5 = _0x2d0d64[_0x3916ae];
    _0x133ec5.enumerable = _0x133ec5.enumerable || false;
    _0x133ec5.configurable = true;
    if ("value" in _0x133ec5) {
      _0x133ec5.writable = true;
    }
    Object.defineProperty(_0x184772, _0x133ec5.key, _0x133ec5);
  }
}
function hs(_0x597359, _0x287ebb, _0x1d62de) {
  if (_0x287ebb) {
    Na(_0x597359.prototype, _0x287ebb);
  }
  if (_0x1d62de) {
    Na(_0x597359, _0x1d62de);
  }
  return _0x597359;
}
function Li(_0x3413a3, _0x1a5f25, _0x180fb7) {
  if (_0x1a5f25 in _0x3413a3) {
    Object.defineProperty(_0x3413a3, _0x1a5f25, {
      value: _0x180fb7,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x3413a3[_0x1a5f25] = _0x180fb7;
  }
  return _0x3413a3;
}
var My = 10;
var rl = function () {
  function _0x4951e8() {
    fs(this, _0x4951e8);
    Li(this, "subPriority", 0);
  }
  hs(_0x4951e8, [{
    key: "validate",
    value: function (_0x5b0604, _0x366bde) {
      return true;
    }
  }]);
  return _0x4951e8;
}();
var ky = function (_0x2bfad6) {
  el(_0x18bdc8, _0x2bfad6);
  var _0x174ba9 = nl(_0x18bdc8);
  function _0x18bdc8(_0x5c05c7, _0x3df1b7, _0x259d7a, _0xa6a36, _0x468c45) {
    var _0x5e3139;
    fs(this, _0x18bdc8);
    _0x5e3139 = _0x174ba9.call(this);
    _0x5e3139.value = _0x5c05c7;
    _0x5e3139.validateValue = _0x3df1b7;
    _0x5e3139.setValue = _0x259d7a;
    _0x5e3139.priority = _0xa6a36;
    if (_0x468c45) {
      _0x5e3139.subPriority = _0x468c45;
    }
    return _0x5e3139;
  }
  hs(_0x18bdc8, [{
    key: "validate",
    value: function (_0x128e1e, _0x12ef84) {
      return this.validateValue(_0x128e1e, this.value, _0x12ef84);
    }
  }, {
    key: "set",
    value: function (_0x3b687c, _0x23418d, _0x489bc9) {
      return this.setValue(_0x3b687c, _0x23418d, this.value, _0x489bc9);
    }
  }]);
  return _0x18bdc8;
}(rl);
var Dy = function (_0xe65ae0) {
  el(_0x4d7b7d, _0xe65ae0);
  var _0x1e6b24 = nl(_0x4d7b7d);
  function _0x4d7b7d() {
    var _0x36786a;
    fs(this, _0x4d7b7d);
    for (var _0x22a5fa = arguments.length, _0x4097be = new Array(_0x22a5fa), _0x299670 = 0; _0x299670 < _0x22a5fa; _0x299670++) {
      _0x4097be[_0x299670] = arguments[_0x299670];
    }
    _0x36786a = _0x1e6b24.call.apply(_0x1e6b24, [this].concat(_0x4097be));
    Li(Ii(_0x36786a), "priority", My);
    Li(Ii(_0x36786a), "subPriority", -1);
    return _0x36786a;
  }
  hs(_0x4d7b7d, [{
    key: "set",
    value: function (_0x1cbc40, _0x34883b) {
      if (_0x34883b.timestampIsSet) {
        return _0x1cbc40;
      }
      var _0x3b149e = new Date(0);
      _0x3b149e.setFullYear(_0x1cbc40.getUTCFullYear(), _0x1cbc40.getUTCMonth(), _0x1cbc40.getUTCDate());
      _0x3b149e.setHours(_0x1cbc40.getUTCHours(), _0x1cbc40.getUTCMinutes(), _0x1cbc40.getUTCSeconds(), _0x1cbc40.getUTCMilliseconds());
      return _0x3b149e;
    }
  }]);
  return _0x4d7b7d;
}(rl);
function $y(_0x2ec5da, _0x56cd4b) {
  if (!(_0x2ec5da instanceof _0x56cd4b)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Fa(_0x1733ce, _0x569ed0) {
  for (var _0x3dba1 = 0; _0x3dba1 < _0x569ed0.length; _0x3dba1++) {
    var _0x2b7451 = _0x569ed0[_0x3dba1];
    _0x2b7451.enumerable = _0x2b7451.enumerable || false;
    _0x2b7451.configurable = true;
    if ("value" in _0x2b7451) {
      _0x2b7451.writable = true;
    }
    Object.defineProperty(_0x1733ce, _0x2b7451.key, _0x2b7451);
  }
}
function Ry(_0x4a7dcc, _0x32709a, _0x4007a9) {
  if (_0x32709a) {
    Fa(_0x4a7dcc.prototype, _0x32709a);
  }
  if (_0x4007a9) {
    Fa(_0x4a7dcc, _0x4007a9);
  }
  return _0x4a7dcc;
}
var R = function () {
  function _0xfb9356() {
    $y(this, _0xfb9356);
  }
  Ry(_0xfb9356, [{
    key: "run",
    value: function (_0x33720f, _0x2a804f, _0x29c22e, _0x54dd03) {
      var _0x3eb02c = this.parse(_0x33720f, _0x2a804f, _0x29c22e, _0x54dd03);
      if (_0x3eb02c) {
        return {
          setter: new ky(_0x3eb02c.value, this.validate, this.set, this.priority, this.subPriority),
          rest: _0x3eb02c.rest
        };
      } else {
        return null;
      }
    }
  }, {
    key: "validate",
    value: function (_0x30ec17, _0x4bf9b1, _0x1c2996) {
      return true;
    }
  }]);
  return _0xfb9356;
}();
function yn(_0x20be84) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    yn = function (_0x5d9d82) {
      return typeof _0x5d9d82;
    };
  } else {
    yn = function (_0x3759ef) {
      if (_0x3759ef && typeof Symbol == "function" && _0x3759ef.constructor === Symbol && _0x3759ef !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x3759ef;
      }
    };
  }
  return yn(_0x20be84);
}
function Cy(_0x300477, _0x2a9d0c) {
  if (!(_0x300477 instanceof _0x2a9d0c)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function za(_0x13dc76, _0x4eb3dc) {
  for (var _0x4f1721 = 0; _0x4f1721 < _0x4eb3dc.length; _0x4f1721++) {
    var _0x314c3f = _0x4eb3dc[_0x4f1721];
    _0x314c3f.enumerable = _0x314c3f.enumerable || false;
    _0x314c3f.configurable = true;
    if ("value" in _0x314c3f) {
      _0x314c3f.writable = true;
    }
    Object.defineProperty(_0x13dc76, _0x314c3f.key, _0x314c3f);
  }
}
function Ey(_0x25a8cf, _0x283fb2, _0x28f5c1) {
  if (_0x283fb2) {
    za(_0x25a8cf.prototype, _0x283fb2);
  }
  if (_0x28f5c1) {
    za(_0x25a8cf, _0x28f5c1);
  }
  return _0x25a8cf;
}
function Iy(_0x8eae2e, _0x523012) {
  if (typeof _0x523012 != "function" && _0x523012 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x8eae2e.prototype = Object.create(_0x523012 && _0x523012.prototype, {
    constructor: {
      value: _0x8eae2e,
      writable: true,
      configurable: true
    }
  });
  if (_0x523012) {
    Ai(_0x8eae2e, _0x523012);
  }
}
function Ai(_0x2d9c00, _0x54bb70) {
  Ai = Object.setPrototypeOf || function (_0x501ec4, _0x2fef5f) {
    _0x501ec4.__proto__ = _0x2fef5f;
    return _0x501ec4;
  };
  return Ai(_0x2d9c00, _0x54bb70);
}
function Ly(_0x27d740) {
  var _0x28f608 = Ny();
  return function () {
    var _0x3992f7 = br(_0x27d740);
    var _0x33fcec;
    if (_0x28f608) {
      var _0x595251 = br(this).constructor;
      _0x33fcec = Reflect.construct(_0x3992f7, arguments, _0x595251);
    } else {
      _0x33fcec = _0x3992f7.apply(this, arguments);
    }
    return Ay(this, _0x33fcec);
  };
}
function Ay(_0x397ab5, _0x2d394e) {
  if (_0x2d394e && (yn(_0x2d394e) === "object" || typeof _0x2d394e == "function")) {
    return _0x2d394e;
  } else {
    return Ni(_0x397ab5);
  }
}
function Ni(_0x15d9d9) {
  if (_0x15d9d9 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x15d9d9;
}
function Ny() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function br(_0x451a3b) {
  br = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x5e2175) {
    return _0x5e2175.__proto__ || Object.getPrototypeOf(_0x5e2175);
  };
  return br(_0x451a3b);
}
function Ba(_0x104fb3, _0x9b4122, _0x23562d) {
  if (_0x9b4122 in _0x104fb3) {
    Object.defineProperty(_0x104fb3, _0x9b4122, {
      value: _0x23562d,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x104fb3[_0x9b4122] = _0x23562d;
  }
  return _0x104fb3;
}
var Fy = function (_0x3f9af3) {
  Iy(_0x2e2e6d, _0x3f9af3);
  var _0x2449b6 = Ly(_0x2e2e6d);
  function _0x2e2e6d() {
    var _0x3f1e94;
    Cy(this, _0x2e2e6d);
    for (var _0x3a8db2 = arguments.length, _0x3b7e2b = new Array(_0x3a8db2), _0x371f5d = 0; _0x371f5d < _0x3a8db2; _0x371f5d++) {
      _0x3b7e2b[_0x371f5d] = arguments[_0x371f5d];
    }
    _0x3f1e94 = _0x2449b6.call.apply(_0x2449b6, [this].concat(_0x3b7e2b));
    Ba(Ni(_0x3f1e94), "priority", 140);
    Ba(Ni(_0x3f1e94), "incompatibleTokens", ["R", "u", "t", "T"]);
    return _0x3f1e94;
  }
  Ey(_0x2e2e6d, [{
    key: "parse",
    value: function (_0x369699, _0x46514b, _0x54e41c) {
      switch (_0x46514b) {
        case "G":
        case "GG":
        case "GGG":
          return _0x54e41c.era(_0x369699, {
            width: "abbreviated"
          }) || _0x54e41c.era(_0x369699, {
            width: "narrow"
          });
        case "GGGGG":
          return _0x54e41c.era(_0x369699, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return _0x54e41c.era(_0x369699, {
            width: "wide"
          }) || _0x54e41c.era(_0x369699, {
            width: "abbreviated"
          }) || _0x54e41c.era(_0x369699, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function (_0x4977da, _0x3d655f, _0x106396) {
      _0x3d655f.era = _0x106396;
      _0x4977da.setUTCFullYear(_0x106396, 0, 1);
      _0x4977da.setUTCHours(0, 0, 0, 0);
      return _0x4977da;
    }
  }]);
  return _0x2e2e6d;
}(R);
var V = {
  month: /^(1[0-2]|0?\d)/,
  date: /^(3[0-1]|[0-2]?\d)/,
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  week: /^(5[0-3]|[0-4]?\d)/,
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  hour11h: /^(1[0-1]|0?\d)/,
  hour12h: /^(1[0-2]|0?\d)/,
  minute: /^[0-5]?\d/,
  second: /^[0-5]?\d/,
  singleDigit: /^\d/,
  twoDigits: /^\d{1,2}/,
  threeDigits: /^\d{1,3}/,
  fourDigits: /^\d{1,4}/,
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  twoDigitsSigned: /^-?\d{1,2}/,
  threeDigitsSigned: /^-?\d{1,3}/,
  fourDigitsSigned: /^-?\d{1,4}/
};
var bt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function q(_0x50506e, _0x4bbd6a) {
  return _0x50506e && {
    value: _0x4bbd6a(_0x50506e.value),
    rest: _0x50506e.rest
  };
}
function B(_0x5928b, _0x35a6ef) {
  var _0x9ddd97 = _0x35a6ef.match(_0x5928b);
  if (_0x9ddd97) {
    return {
      value: parseInt(_0x9ddd97[0], 10),
      rest: _0x35a6ef.slice(_0x9ddd97[0].length)
    };
  } else {
    return null;
  }
}
function _t(_0x566ae2, _0xd70caa) {
  var _0xb0d1d0 = _0xd70caa.match(_0x566ae2);
  if (!_0xb0d1d0) {
    return null;
  }
  if (_0xb0d1d0[0] === "Z") {
    return {
      value: 0,
      rest: _0xd70caa.slice(1)
    };
  }
  var _0x3a6b88 = _0xb0d1d0[1] === "+" ? 1 : -1;
  var _0x437893 = _0xb0d1d0[2] ? parseInt(_0xb0d1d0[2], 10) : 0;
  var _0x20bc19 = _0xb0d1d0[3] ? parseInt(_0xb0d1d0[3], 10) : 0;
  var _0x3c4f50 = _0xb0d1d0[5] ? parseInt(_0xb0d1d0[5], 10) : 0;
  return {
    value: _0x3a6b88 * (_0x437893 * ri + _0x20bc19 * ni + _0x3c4f50 * eg),
    rest: _0xd70caa.slice(_0xb0d1d0[0].length)
  };
}
function il(_0x691348) {
  return B(V.anyDigitsSigned, _0x691348);
}
function W(_0x668fe5, _0x3499cd) {
  switch (_0x668fe5) {
    case 1:
      return B(V.singleDigit, _0x3499cd);
    case 2:
      return B(V.twoDigits, _0x3499cd);
    case 3:
      return B(V.threeDigits, _0x3499cd);
    case 4:
      return B(V.fourDigits, _0x3499cd);
    default:
      return B(new RegExp("^\\d{1," + _0x668fe5 + "}"), _0x3499cd);
  }
}
function _r(_0x38010c, _0x492c29) {
  switch (_0x38010c) {
    case 1:
      return B(V.singleDigitSigned, _0x492c29);
    case 2:
      return B(V.twoDigitsSigned, _0x492c29);
    case 3:
      return B(V.threeDigitsSigned, _0x492c29);
    case 4:
      return B(V.fourDigitsSigned, _0x492c29);
    default:
      return B(new RegExp("^-?\\d{1," + _0x38010c + "}"), _0x492c29);
  }
}
function ds(_0xd642c) {
  switch (_0xd642c) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function ol(_0x40c72c, _0x43c362) {
  var _0x1e2044 = _0x43c362 > 0;
  var _0x122006 = _0x1e2044 ? _0x43c362 : 1 - _0x43c362;
  var _0x39ed33;
  if (_0x122006 <= 50) {
    _0x39ed33 = _0x40c72c || 100;
  } else {
    var _0x4b2ed5 = _0x122006 + 50;
    var _0x19f755 = Math.floor(_0x4b2ed5 / 100) * 100;
    var _0x1661a4 = _0x40c72c >= _0x4b2ed5 % 100;
    _0x39ed33 = _0x40c72c + _0x19f755 - (_0x1661a4 ? 100 : 0);
  }
  if (_0x1e2044) {
    return _0x39ed33;
  } else {
    return 1 - _0x39ed33;
  }
}
function sl(_0x54a8d5) {
  return _0x54a8d5 % 400 === 0 || _0x54a8d5 % 4 === 0 && _0x54a8d5 % 100 !== 0;
}
function mn(_0x83a6a1) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    mn = function (_0x55710a) {
      return typeof _0x55710a;
    };
  } else {
    mn = function (_0x30c782) {
      if (_0x30c782 && typeof Symbol == "function" && _0x30c782.constructor === Symbol && _0x30c782 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x30c782;
      }
    };
  }
  return mn(_0x83a6a1);
}
function zy(_0x281037, _0xc60fe6) {
  if (!(_0x281037 instanceof _0xc60fe6)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function ja(_0x27ab46, _0x3c24c0) {
  for (var _0x52719b = 0; _0x52719b < _0x3c24c0.length; _0x52719b++) {
    var _0x289a92 = _0x3c24c0[_0x52719b];
    _0x289a92.enumerable = _0x289a92.enumerable || false;
    _0x289a92.configurable = true;
    if ("value" in _0x289a92) {
      _0x289a92.writable = true;
    }
    Object.defineProperty(_0x27ab46, _0x289a92.key, _0x289a92);
  }
}
function By(_0x6907ab, _0x3b7b14, _0x305428) {
  if (_0x3b7b14) {
    ja(_0x6907ab.prototype, _0x3b7b14);
  }
  if (_0x305428) {
    ja(_0x6907ab, _0x305428);
  }
  return _0x6907ab;
}
function jy(_0x50346d, _0x191cf0) {
  if (typeof _0x191cf0 != "function" && _0x191cf0 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x50346d.prototype = Object.create(_0x191cf0 && _0x191cf0.prototype, {
    constructor: {
      value: _0x50346d,
      writable: true,
      configurable: true
    }
  });
  if (_0x191cf0) {
    Fi(_0x50346d, _0x191cf0);
  }
}
function Fi(_0x3e59a7, _0x29ffb5) {
  Fi = Object.setPrototypeOf || function (_0x4a84c7, _0x5255e0) {
    _0x4a84c7.__proto__ = _0x5255e0;
    return _0x4a84c7;
  };
  return Fi(_0x3e59a7, _0x29ffb5);
}
function Wy(_0x3adb4b) {
  var _0xb1d289 = Hy();
  return function () {
    var _0x38ab25 = vr(_0x3adb4b);
    var _0x2db3b3;
    if (_0xb1d289) {
      var _0x1ca7b9 = vr(this).constructor;
      _0x2db3b3 = Reflect.construct(_0x38ab25, arguments, _0x1ca7b9);
    } else {
      _0x2db3b3 = _0x38ab25.apply(this, arguments);
    }
    return Uy(this, _0x2db3b3);
  };
}
function Uy(_0x3df9a4, _0x32c123) {
  if (_0x32c123 && (mn(_0x32c123) === "object" || typeof _0x32c123 == "function")) {
    return _0x32c123;
  } else {
    return zi(_0x3df9a4);
  }
}
function zi(_0x6abbed) {
  if (_0x6abbed === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x6abbed;
}
function Hy() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function vr(_0x4376b9) {
  vr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x5e780b) {
    return _0x5e780b.__proto__ || Object.getPrototypeOf(_0x5e780b);
  };
  return vr(_0x4376b9);
}
function Wa(_0x46694b, _0xf334fa, _0x3847ca) {
  if (_0xf334fa in _0x46694b) {
    Object.defineProperty(_0x46694b, _0xf334fa, {
      value: _0x3847ca,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x46694b[_0xf334fa] = _0x3847ca;
  }
  return _0x46694b;
}
var Yy = function (_0x11fe13) {
  jy(_0x20222a, _0x11fe13);
  var _0x58f098 = Wy(_0x20222a);
  function _0x20222a() {
    var _0x55e47b;
    zy(this, _0x20222a);
    for (var _0x273029 = arguments.length, _0x552f0a = new Array(_0x273029), _0x2ad4d2 = 0; _0x2ad4d2 < _0x273029; _0x2ad4d2++) {
      _0x552f0a[_0x2ad4d2] = arguments[_0x2ad4d2];
    }
    _0x55e47b = _0x58f098.call.apply(_0x58f098, [this].concat(_0x552f0a));
    Wa(zi(_0x55e47b), "priority", 130);
    Wa(zi(_0x55e47b), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
    return _0x55e47b;
  }
  By(_0x20222a, [{
    key: "parse",
    value: function (_0xf7e765, _0x4fe0c2, _0x5c647f) {
      function _0x46d842(_0x275994) {
        return {
          year: _0x275994,
          isTwoDigitYear: _0x4fe0c2 === "yy"
        };
      }
      switch (_0x4fe0c2) {
        case "y":
          return q(W(4, _0xf7e765), _0x46d842);
        case "yo":
          return q(_0x5c647f.ordinalNumber(_0xf7e765, {
            unit: "year"
          }), _0x46d842);
        default:
          return q(W(_0x4fe0c2.length, _0xf7e765), _0x46d842);
      }
    }
  }, {
    key: "validate",
    value: function (_0x39354d, _0x4fcd02) {
      return _0x4fcd02.isTwoDigitYear || _0x4fcd02.year > 0;
    }
  }, {
    key: "set",
    value: function (_0x1e7328, _0x36e3b0, _0x20148f) {
      var _0x467a22 = _0x1e7328.getUTCFullYear();
      if (_0x20148f.isTwoDigitYear) {
        var _0x451a31 = ol(_0x20148f.year, _0x467a22);
        _0x1e7328.setUTCFullYear(_0x451a31, 0, 1);
        _0x1e7328.setUTCHours(0, 0, 0, 0);
        return _0x1e7328;
      }
      var _0x408871 = !("era" in _0x36e3b0) || _0x36e3b0.era === 1 ? _0x20148f.year : 1 - _0x20148f.year;
      _0x1e7328.setUTCFullYear(_0x408871, 0, 1);
      _0x1e7328.setUTCHours(0, 0, 0, 0);
      return _0x1e7328;
    }
  }]);
  return _0x20222a;
}(R);
function bn(_0x5d6adb) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    bn = function (_0x1dd99f) {
      return typeof _0x1dd99f;
    };
  } else {
    bn = function (_0x8558e3) {
      if (_0x8558e3 && typeof Symbol == "function" && _0x8558e3.constructor === Symbol && _0x8558e3 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x8558e3;
      }
    };
  }
  return bn(_0x5d6adb);
}
function Vy(_0x2c1b45, _0x32cc30) {
  if (!(_0x2c1b45 instanceof _0x32cc30)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Ua(_0x10a621, _0x50ba19) {
  for (var _0x2685a1 = 0; _0x2685a1 < _0x50ba19.length; _0x2685a1++) {
    var _0x471865 = _0x50ba19[_0x2685a1];
    _0x471865.enumerable = _0x471865.enumerable || false;
    _0x471865.configurable = true;
    if ("value" in _0x471865) {
      _0x471865.writable = true;
    }
    Object.defineProperty(_0x10a621, _0x471865.key, _0x471865);
  }
}
function qy(_0x1c40b0, _0x4d4bd3, _0x1e89bb) {
  if (_0x4d4bd3) {
    Ua(_0x1c40b0.prototype, _0x4d4bd3);
  }
  if (_0x1e89bb) {
    Ua(_0x1c40b0, _0x1e89bb);
  }
  return _0x1c40b0;
}
function Xy(_0x47306b, _0x45fb64) {
  if (typeof _0x45fb64 != "function" && _0x45fb64 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x47306b.prototype = Object.create(_0x45fb64 && _0x45fb64.prototype, {
    constructor: {
      value: _0x47306b,
      writable: true,
      configurable: true
    }
  });
  if (_0x45fb64) {
    Bi(_0x47306b, _0x45fb64);
  }
}
function Bi(_0x36e531, _0x5ba0d9) {
  Bi = Object.setPrototypeOf || function (_0x29330b, _0x58007c) {
    _0x29330b.__proto__ = _0x58007c;
    return _0x29330b;
  };
  return Bi(_0x36e531, _0x5ba0d9);
}
function Qy(_0x331674) {
  var _0x41fe4f = Ky();
  return function () {
    var _0x1c06c2 = wr(_0x331674);
    var _0x16acc0;
    if (_0x41fe4f) {
      var _0x325416 = wr(this).constructor;
      _0x16acc0 = Reflect.construct(_0x1c06c2, arguments, _0x325416);
    } else {
      _0x16acc0 = _0x1c06c2.apply(this, arguments);
    }
    return Gy(this, _0x16acc0);
  };
}
function Gy(_0x4f467a, _0x1220e1) {
  if (_0x1220e1 && (bn(_0x1220e1) === "object" || typeof _0x1220e1 == "function")) {
    return _0x1220e1;
  } else {
    return ji(_0x4f467a);
  }
}
function ji(_0x2e4b50) {
  if (_0x2e4b50 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x2e4b50;
}
function Ky() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function wr(_0x583c31) {
  wr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x4a7e67) {
    return _0x4a7e67.__proto__ || Object.getPrototypeOf(_0x4a7e67);
  };
  return wr(_0x583c31);
}
function Ha(_0x1a80b2, _0x10bc77, _0x498520) {
  if (_0x10bc77 in _0x1a80b2) {
    Object.defineProperty(_0x1a80b2, _0x10bc77, {
      value: _0x498520,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x1a80b2[_0x10bc77] = _0x498520;
  }
  return _0x1a80b2;
}
var Zy = function (_0x49ef5d) {
  Xy(_0x12ea78, _0x49ef5d);
  var _0x240949 = Qy(_0x12ea78);
  function _0x12ea78() {
    var _0x24fa75;
    Vy(this, _0x12ea78);
    for (var _0x1d0164 = arguments.length, _0x54034e = new Array(_0x1d0164), _0x1c13bc = 0; _0x1c13bc < _0x1d0164; _0x1c13bc++) {
      _0x54034e[_0x1c13bc] = arguments[_0x1c13bc];
    }
    _0x24fa75 = _0x240949.call.apply(_0x240949, [this].concat(_0x54034e));
    Ha(ji(_0x24fa75), "priority", 130);
    Ha(ji(_0x24fa75), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _0x24fa75;
  }
  qy(_0x12ea78, [{
    key: "parse",
    value: function (_0x506756, _0x2c9fd6, _0x53831a) {
      function _0x471324(_0x4b9795) {
        return {
          year: _0x4b9795,
          isTwoDigitYear: _0x2c9fd6 === "YY"
        };
      }
      switch (_0x2c9fd6) {
        case "Y":
          return q(W(4, _0x506756), _0x471324);
        case "Yo":
          return q(_0x53831a.ordinalNumber(_0x506756, {
            unit: "year"
          }), _0x471324);
        default:
          return q(W(_0x2c9fd6.length, _0x506756), _0x471324);
      }
    }
  }, {
    key: "validate",
    value: function (_0x192185, _0x2c42c5) {
      return _0x2c42c5.isTwoDigitYear || _0x2c42c5.year > 0;
    }
  }, {
    key: "set",
    value: function (_0x3561a6, _0xa69e8d, _0x3ba2df, _0x1d6dbf) {
      var _0x1146ec = us(_0x3561a6, _0x1d6dbf);
      if (_0x3ba2df.isTwoDigitYear) {
        var _0x87580b = ol(_0x3ba2df.year, _0x1146ec);
        _0x3561a6.setUTCFullYear(_0x87580b, 0, _0x1d6dbf.firstWeekContainsDate);
        _0x3561a6.setUTCHours(0, 0, 0, 0);
        return Zt(_0x3561a6, _0x1d6dbf);
      }
      var _0x18f800 = !("era" in _0xa69e8d) || _0xa69e8d.era === 1 ? _0x3ba2df.year : 1 - _0x3ba2df.year;
      _0x3561a6.setUTCFullYear(_0x18f800, 0, _0x1d6dbf.firstWeekContainsDate);
      _0x3561a6.setUTCHours(0, 0, 0, 0);
      return Zt(_0x3561a6, _0x1d6dbf);
    }
  }]);
  return _0x12ea78;
}(R);
function _n(_0x39a876) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    _n = function (_0x563169) {
      return typeof _0x563169;
    };
  } else {
    _n = function (_0x31d17a) {
      if (_0x31d17a && typeof Symbol == "function" && _0x31d17a.constructor === Symbol && _0x31d17a !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x31d17a;
      }
    };
  }
  return _n(_0x39a876);
}
function Jy(_0x1f4548, _0x5c4eb7) {
  if (!(_0x1f4548 instanceof _0x5c4eb7)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Ya(_0x1e9650, _0x3244b6) {
  for (var _0x66c27a = 0; _0x66c27a < _0x3244b6.length; _0x66c27a++) {
    var _0x6a77a4 = _0x3244b6[_0x66c27a];
    _0x6a77a4.enumerable = _0x6a77a4.enumerable || false;
    _0x6a77a4.configurable = true;
    if ("value" in _0x6a77a4) {
      _0x6a77a4.writable = true;
    }
    Object.defineProperty(_0x1e9650, _0x6a77a4.key, _0x6a77a4);
  }
}
function tm(_0x30a72a, _0x448829, _0xae8bb) {
  if (_0x448829) {
    Ya(_0x30a72a.prototype, _0x448829);
  }
  if (_0xae8bb) {
    Ya(_0x30a72a, _0xae8bb);
  }
  return _0x30a72a;
}
function em(_0x2eedb7, _0x9daa4e) {
  if (typeof _0x9daa4e != "function" && _0x9daa4e !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x2eedb7.prototype = Object.create(_0x9daa4e && _0x9daa4e.prototype, {
    constructor: {
      value: _0x2eedb7,
      writable: true,
      configurable: true
    }
  });
  if (_0x9daa4e) {
    Wi(_0x2eedb7, _0x9daa4e);
  }
}
function Wi(_0x26d61d, _0x11a712) {
  Wi = Object.setPrototypeOf || function (_0x2ccb23, _0x159880) {
    _0x2ccb23.__proto__ = _0x159880;
    return _0x2ccb23;
  };
  return Wi(_0x26d61d, _0x11a712);
}
function nm(_0x4ee16a) {
  var _0x9acdb1 = im();
  return function () {
    var _0x46f0a4 = xr(_0x4ee16a);
    var _0x3811c4;
    if (_0x9acdb1) {
      var _0x15772f = xr(this).constructor;
      _0x3811c4 = Reflect.construct(_0x46f0a4, arguments, _0x15772f);
    } else {
      _0x3811c4 = _0x46f0a4.apply(this, arguments);
    }
    return rm(this, _0x3811c4);
  };
}
function rm(_0x1e1ca3, _0x249d1a) {
  if (_0x249d1a && (_n(_0x249d1a) === "object" || typeof _0x249d1a == "function")) {
    return _0x249d1a;
  } else {
    return Ui(_0x1e1ca3);
  }
}
function Ui(_0x36a669) {
  if (_0x36a669 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x36a669;
}
function im() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function xr(_0x20aa21) {
  xr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x551368) {
    return _0x551368.__proto__ || Object.getPrototypeOf(_0x551368);
  };
  return xr(_0x20aa21);
}
function Va(_0x241d98, _0x163f22, _0x55a86f) {
  if (_0x163f22 in _0x241d98) {
    Object.defineProperty(_0x241d98, _0x163f22, {
      value: _0x55a86f,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x241d98[_0x163f22] = _0x55a86f;
  }
  return _0x241d98;
}
var om = function (_0x2f4102) {
  em(_0x49b489, _0x2f4102);
  var _0x32b8e4 = nm(_0x49b489);
  function _0x49b489() {
    var _0x21fd07;
    Jy(this, _0x49b489);
    for (var _0x1edb10 = arguments.length, _0x4dcf47 = new Array(_0x1edb10), _0x33b4b4 = 0; _0x33b4b4 < _0x1edb10; _0x33b4b4++) {
      _0x4dcf47[_0x33b4b4] = arguments[_0x33b4b4];
    }
    _0x21fd07 = _0x32b8e4.call.apply(_0x32b8e4, [this].concat(_0x4dcf47));
    Va(Ui(_0x21fd07), "priority", 130);
    Va(Ui(_0x21fd07), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _0x21fd07;
  }
  tm(_0x49b489, [{
    key: "parse",
    value: function (_0x42e0d6, _0x2f61af) {
      return _r(_0x2f61af === "R" ? 4 : _0x2f61af.length, _0x42e0d6);
    }
  }, {
    key: "set",
    value: function (_0x186064, _0x1807ac, _0x3111ba) {
      var _0x3e3890 = new Date(0);
      _0x3e3890.setUTCFullYear(_0x3111ba, 0, 4);
      _0x3e3890.setUTCHours(0, 0, 0, 0);
      return de(_0x3e3890);
    }
  }]);
  return _0x49b489;
}(R);
function vn(_0x595f1f) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    vn = function (_0x3a7712) {
      return typeof _0x3a7712;
    };
  } else {
    vn = function (_0x4ba7ed) {
      if (_0x4ba7ed && typeof Symbol == "function" && _0x4ba7ed.constructor === Symbol && _0x4ba7ed !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x4ba7ed;
      }
    };
  }
  return vn(_0x595f1f);
}
function sm(_0x1b19c6, _0x22fbf9) {
  if (!(_0x1b19c6 instanceof _0x22fbf9)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function qa(_0x4ed9e5, _0x253e88) {
  for (var _0x7b6374 = 0; _0x7b6374 < _0x253e88.length; _0x7b6374++) {
    var _0x3b291e = _0x253e88[_0x7b6374];
    _0x3b291e.enumerable = _0x3b291e.enumerable || false;
    _0x3b291e.configurable = true;
    if ("value" in _0x3b291e) {
      _0x3b291e.writable = true;
    }
    Object.defineProperty(_0x4ed9e5, _0x3b291e.key, _0x3b291e);
  }
}
function am(_0x2dd645, _0x76c355, _0x1842fa) {
  if (_0x76c355) {
    qa(_0x2dd645.prototype, _0x76c355);
  }
  if (_0x1842fa) {
    qa(_0x2dd645, _0x1842fa);
  }
  return _0x2dd645;
}
function cm(_0x590fac, _0xf5688c) {
  if (typeof _0xf5688c != "function" && _0xf5688c !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x590fac.prototype = Object.create(_0xf5688c && _0xf5688c.prototype, {
    constructor: {
      value: _0x590fac,
      writable: true,
      configurable: true
    }
  });
  if (_0xf5688c) {
    Hi(_0x590fac, _0xf5688c);
  }
}
function Hi(_0x3d9cdb, _0x2de71b) {
  Hi = Object.setPrototypeOf || function (_0xa5bdd1, _0x1992bf) {
    _0xa5bdd1.__proto__ = _0x1992bf;
    return _0xa5bdd1;
  };
  return Hi(_0x3d9cdb, _0x2de71b);
}
function um(_0x3e99c9) {
  var _0x119d7f = fm();
  return function () {
    var _0x381bda = Or(_0x3e99c9);
    var _0x1c4988;
    if (_0x119d7f) {
      var _0x3595d9 = Or(this).constructor;
      _0x1c4988 = Reflect.construct(_0x381bda, arguments, _0x3595d9);
    } else {
      _0x1c4988 = _0x381bda.apply(this, arguments);
    }
    return lm(this, _0x1c4988);
  };
}
function lm(_0x65043e, _0x533d23) {
  if (_0x533d23 && (vn(_0x533d23) === "object" || typeof _0x533d23 == "function")) {
    return _0x533d23;
  } else {
    return Yi(_0x65043e);
  }
}
function Yi(_0x28b594) {
  if (_0x28b594 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x28b594;
}
function fm() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Or(_0xd4ce06) {
  Or = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x43eb58) {
    return _0x43eb58.__proto__ || Object.getPrototypeOf(_0x43eb58);
  };
  return Or(_0xd4ce06);
}
function Xa(_0x536037, _0x3f819e, _0x55c66c) {
  if (_0x3f819e in _0x536037) {
    Object.defineProperty(_0x536037, _0x3f819e, {
      value: _0x55c66c,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x536037[_0x3f819e] = _0x55c66c;
  }
  return _0x536037;
}
var hm = function (_0x260813) {
  cm(_0xf28a78, _0x260813);
  var _0x4ca346 = um(_0xf28a78);
  function _0xf28a78() {
    var _0x5022e6;
    sm(this, _0xf28a78);
    for (var _0x3f66c0 = arguments.length, _0x1f7179 = new Array(_0x3f66c0), _0x47e2eb = 0; _0x47e2eb < _0x3f66c0; _0x47e2eb++) {
      _0x1f7179[_0x47e2eb] = arguments[_0x47e2eb];
    }
    _0x5022e6 = _0x4ca346.call.apply(_0x4ca346, [this].concat(_0x1f7179));
    Xa(Yi(_0x5022e6), "priority", 130);
    Xa(Yi(_0x5022e6), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
    return _0x5022e6;
  }
  am(_0xf28a78, [{
    key: "parse",
    value: function (_0x319d60, _0x43728e) {
      return _r(_0x43728e === "u" ? 4 : _0x43728e.length, _0x319d60);
    }
  }, {
    key: "set",
    value: function (_0x37fa3d, _0x1670eb, _0xe18fcc) {
      _0x37fa3d.setUTCFullYear(_0xe18fcc, 0, 1);
      _0x37fa3d.setUTCHours(0, 0, 0, 0);
      return _0x37fa3d;
    }
  }]);
  return _0xf28a78;
}(R);
function wn(_0x2a6cb6) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    wn = function (_0x22ede9) {
      return typeof _0x22ede9;
    };
  } else {
    wn = function (_0x585e68) {
      if (_0x585e68 && typeof Symbol == "function" && _0x585e68.constructor === Symbol && _0x585e68 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x585e68;
      }
    };
  }
  return wn(_0x2a6cb6);
}
function dm(_0x31de05, _0x592c51) {
  if (!(_0x31de05 instanceof _0x592c51)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Qa(_0x5e4dbf, _0xc6f00e) {
  for (var _0x231b0e = 0; _0x231b0e < _0xc6f00e.length; _0x231b0e++) {
    var _0x11c4ab = _0xc6f00e[_0x231b0e];
    _0x11c4ab.enumerable = _0x11c4ab.enumerable || false;
    _0x11c4ab.configurable = true;
    if ("value" in _0x11c4ab) {
      _0x11c4ab.writable = true;
    }
    Object.defineProperty(_0x5e4dbf, _0x11c4ab.key, _0x11c4ab);
  }
}
function pm(_0x4239a7, _0x29b560, _0x3f4853) {
  if (_0x29b560) {
    Qa(_0x4239a7.prototype, _0x29b560);
  }
  if (_0x3f4853) {
    Qa(_0x4239a7, _0x3f4853);
  }
  return _0x4239a7;
}
function gm(_0x478309, _0x40f9bf) {
  if (typeof _0x40f9bf != "function" && _0x40f9bf !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x478309.prototype = Object.create(_0x40f9bf && _0x40f9bf.prototype, {
    constructor: {
      value: _0x478309,
      writable: true,
      configurable: true
    }
  });
  if (_0x40f9bf) {
    Vi(_0x478309, _0x40f9bf);
  }
}
function Vi(_0x4a4181, _0x44a009) {
  Vi = Object.setPrototypeOf || function (_0x187bf1, _0x9ef9b6) {
    _0x187bf1.__proto__ = _0x9ef9b6;
    return _0x187bf1;
  };
  return Vi(_0x4a4181, _0x44a009);
}
function ym(_0x583901) {
  var _0x4cc314 = bm();
  return function () {
    var _0x3190d2 = Pr(_0x583901);
    var _0x17905d;
    if (_0x4cc314) {
      var _0x55ed3b = Pr(this).constructor;
      _0x17905d = Reflect.construct(_0x3190d2, arguments, _0x55ed3b);
    } else {
      _0x17905d = _0x3190d2.apply(this, arguments);
    }
    return mm(this, _0x17905d);
  };
}
function mm(_0x394a31, _0x2c9fa8) {
  if (_0x2c9fa8 && (wn(_0x2c9fa8) === "object" || typeof _0x2c9fa8 == "function")) {
    return _0x2c9fa8;
  } else {
    return qi(_0x394a31);
  }
}
function qi(_0x17c640) {
  if (_0x17c640 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x17c640;
}
function bm() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Pr(_0x3fdc9a) {
  Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x12e40d) {
    return _0x12e40d.__proto__ || Object.getPrototypeOf(_0x12e40d);
  };
  return Pr(_0x3fdc9a);
}
function Ga(_0x1d434e, _0x106680, _0x298f62) {
  if (_0x106680 in _0x1d434e) {
    Object.defineProperty(_0x1d434e, _0x106680, {
      value: _0x298f62,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x1d434e[_0x106680] = _0x298f62;
  }
  return _0x1d434e;
}
var _m = function (_0x1b938f) {
  gm(_0x2d38bf, _0x1b938f);
  var _0x221457 = ym(_0x2d38bf);
  function _0x2d38bf() {
    var _0x4ae209;
    dm(this, _0x2d38bf);
    for (var _0x18228d = arguments.length, _0x6b725c = new Array(_0x18228d), _0x5e9b55 = 0; _0x5e9b55 < _0x18228d; _0x5e9b55++) {
      _0x6b725c[_0x5e9b55] = arguments[_0x5e9b55];
    }
    _0x4ae209 = _0x221457.call.apply(_0x221457, [this].concat(_0x6b725c));
    Ga(qi(_0x4ae209), "priority", 120);
    Ga(qi(_0x4ae209), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _0x4ae209;
  }
  pm(_0x2d38bf, [{
    key: "parse",
    value: function (_0x23a559, _0x3386ce, _0xeb6fd7) {
      switch (_0x3386ce) {
        case "Q":
        case "QQ":
          return W(_0x3386ce.length, _0x23a559);
        case "Qo":
          return _0xeb6fd7.ordinalNumber(_0x23a559, {
            unit: "quarter"
          });
        case "QQQ":
          return _0xeb6fd7.quarter(_0x23a559, {
            width: "abbreviated",
            context: "formatting"
          }) || _0xeb6fd7.quarter(_0x23a559, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return _0xeb6fd7.quarter(_0x23a559, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return _0xeb6fd7.quarter(_0x23a559, {
            width: "wide",
            context: "formatting"
          }) || _0xeb6fd7.quarter(_0x23a559, {
            width: "abbreviated",
            context: "formatting"
          }) || _0xeb6fd7.quarter(_0x23a559, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function (_0x243508, _0x340a06) {
      return _0x340a06 >= 1 && _0x340a06 <= 4;
    }
  }, {
    key: "set",
    value: function (_0xac72a6, _0x394deb, _0xe824ef) {
      _0xac72a6.setUTCMonth((_0xe824ef - 1) * 3, 1);
      _0xac72a6.setUTCHours(0, 0, 0, 0);
      return _0xac72a6;
    }
  }]);
  return _0x2d38bf;
}(R);
function xn(_0x441f3e) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    xn = function (_0x133b6d) {
      return typeof _0x133b6d;
    };
  } else {
    xn = function (_0x43170e) {
      if (_0x43170e && typeof Symbol == "function" && _0x43170e.constructor === Symbol && _0x43170e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x43170e;
      }
    };
  }
  return xn(_0x441f3e);
}
function vm(_0x1d028e, _0x2d1343) {
  if (!(_0x1d028e instanceof _0x2d1343)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Ka(_0x1f61f1, _0xeda2d8) {
  for (var _0x3e5acc = 0; _0x3e5acc < _0xeda2d8.length; _0x3e5acc++) {
    var _0x54dfc0 = _0xeda2d8[_0x3e5acc];
    _0x54dfc0.enumerable = _0x54dfc0.enumerable || false;
    _0x54dfc0.configurable = true;
    if ("value" in _0x54dfc0) {
      _0x54dfc0.writable = true;
    }
    Object.defineProperty(_0x1f61f1, _0x54dfc0.key, _0x54dfc0);
  }
}
function wm(_0x103ef2, _0x3f28f3, _0x361157) {
  if (_0x3f28f3) {
    Ka(_0x103ef2.prototype, _0x3f28f3);
  }
  if (_0x361157) {
    Ka(_0x103ef2, _0x361157);
  }
  return _0x103ef2;
}
function xm(_0x454afb, _0x545c09) {
  if (typeof _0x545c09 != "function" && _0x545c09 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x454afb.prototype = Object.create(_0x545c09 && _0x545c09.prototype, {
    constructor: {
      value: _0x454afb,
      writable: true,
      configurable: true
    }
  });
  if (_0x545c09) {
    Xi(_0x454afb, _0x545c09);
  }
}
function Xi(_0x146bcf, _0x33c2dc) {
  Xi = Object.setPrototypeOf || function (_0x1414c4, _0x59ab7c) {
    _0x1414c4.__proto__ = _0x59ab7c;
    return _0x1414c4;
  };
  return Xi(_0x146bcf, _0x33c2dc);
}
function Om(_0x1daa80) {
  var _0x490244 = Sm();
  return function () {
    var _0xd0d3d8 = Sr(_0x1daa80);
    var _0x520d02;
    if (_0x490244) {
      var _0x191ed2 = Sr(this).constructor;
      _0x520d02 = Reflect.construct(_0xd0d3d8, arguments, _0x191ed2);
    } else {
      _0x520d02 = _0xd0d3d8.apply(this, arguments);
    }
    return Pm(this, _0x520d02);
  };
}
function Pm(_0x317e99, _0x284034) {
  if (_0x284034 && (xn(_0x284034) === "object" || typeof _0x284034 == "function")) {
    return _0x284034;
  } else {
    return Qi(_0x317e99);
  }
}
function Qi(_0x3e81fe) {
  if (_0x3e81fe === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x3e81fe;
}
function Sm() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Sr(_0x38946f) {
  Sr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x13f927) {
    return _0x13f927.__proto__ || Object.getPrototypeOf(_0x13f927);
  };
  return Sr(_0x38946f);
}
function Za(_0x41ecde, _0x531461, _0x26c15a) {
  if (_0x531461 in _0x41ecde) {
    Object.defineProperty(_0x41ecde, _0x531461, {
      value: _0x26c15a,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x41ecde[_0x531461] = _0x26c15a;
  }
  return _0x41ecde;
}
var Tm = function (_0x5cacda) {
  xm(_0x5b6aa0, _0x5cacda);
  var _0x300e01 = Om(_0x5b6aa0);
  function _0x5b6aa0() {
    var _0x2060eb;
    vm(this, _0x5b6aa0);
    for (var _0x35f037 = arguments.length, _0x143bde = new Array(_0x35f037), _0x213cb5 = 0; _0x213cb5 < _0x35f037; _0x213cb5++) {
      _0x143bde[_0x213cb5] = arguments[_0x213cb5];
    }
    _0x2060eb = _0x300e01.call.apply(_0x300e01, [this].concat(_0x143bde));
    Za(Qi(_0x2060eb), "priority", 120);
    Za(Qi(_0x2060eb), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _0x2060eb;
  }
  wm(_0x5b6aa0, [{
    key: "parse",
    value: function (_0x5e8089, _0x45c3b7, _0x2f85c0) {
      switch (_0x45c3b7) {
        case "q":
        case "qq":
          return W(_0x45c3b7.length, _0x5e8089);
        case "qo":
          return _0x2f85c0.ordinalNumber(_0x5e8089, {
            unit: "quarter"
          });
        case "qqq":
          return _0x2f85c0.quarter(_0x5e8089, {
            width: "abbreviated",
            context: "standalone"
          }) || _0x2f85c0.quarter(_0x5e8089, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return _0x2f85c0.quarter(_0x5e8089, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return _0x2f85c0.quarter(_0x5e8089, {
            width: "wide",
            context: "standalone"
          }) || _0x2f85c0.quarter(_0x5e8089, {
            width: "abbreviated",
            context: "standalone"
          }) || _0x2f85c0.quarter(_0x5e8089, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function (_0x3b90f5, _0x3fb9f4) {
      return _0x3fb9f4 >= 1 && _0x3fb9f4 <= 4;
    }
  }, {
    key: "set",
    value: function (_0x52806b, _0x13e65d, _0x1c47f4) {
      _0x52806b.setUTCMonth((_0x1c47f4 - 1) * 3, 1);
      _0x52806b.setUTCHours(0, 0, 0, 0);
      return _0x52806b;
    }
  }]);
  return _0x5b6aa0;
}(R);
function On(_0x1e4ebb) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    On = function (_0x1257fa) {
      return typeof _0x1257fa;
    };
  } else {
    On = function (_0xeb5635) {
      if (_0xeb5635 && typeof Symbol == "function" && _0xeb5635.constructor === Symbol && _0xeb5635 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0xeb5635;
      }
    };
  }
  return On(_0x1e4ebb);
}
function Mm(_0x1f31ef, _0x445fb9) {
  if (!(_0x1f31ef instanceof _0x445fb9)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Ja(_0x517411, _0x26527d) {
  for (var _0x2b3f6c = 0; _0x2b3f6c < _0x26527d.length; _0x2b3f6c++) {
    var _0x6fd537 = _0x26527d[_0x2b3f6c];
    _0x6fd537.enumerable = _0x6fd537.enumerable || false;
    _0x6fd537.configurable = true;
    if ("value" in _0x6fd537) {
      _0x6fd537.writable = true;
    }
    Object.defineProperty(_0x517411, _0x6fd537.key, _0x6fd537);
  }
}
function km(_0x4185dc, _0x20e27f, _0x321015) {
  if (_0x20e27f) {
    Ja(_0x4185dc.prototype, _0x20e27f);
  }
  if (_0x321015) {
    Ja(_0x4185dc, _0x321015);
  }
  return _0x4185dc;
}
function Dm(_0x58d771, _0x2a77e7) {
  if (typeof _0x2a77e7 != "function" && _0x2a77e7 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x58d771.prototype = Object.create(_0x2a77e7 && _0x2a77e7.prototype, {
    constructor: {
      value: _0x58d771,
      writable: true,
      configurable: true
    }
  });
  if (_0x2a77e7) {
    Gi(_0x58d771, _0x2a77e7);
  }
}
function Gi(_0x53d835, _0x2ad07b) {
  Gi = Object.setPrototypeOf || function (_0x304a5f, _0x36b8d3) {
    _0x304a5f.__proto__ = _0x36b8d3;
    return _0x304a5f;
  };
  return Gi(_0x53d835, _0x2ad07b);
}
function $m(_0x2e16c0) {
  var _0x1ddb50 = Cm();
  return function () {
    var _0x2e4e11 = Tr(_0x2e16c0);
    var _0x215b49;
    if (_0x1ddb50) {
      var _0x574830 = Tr(this).constructor;
      _0x215b49 = Reflect.construct(_0x2e4e11, arguments, _0x574830);
    } else {
      _0x215b49 = _0x2e4e11.apply(this, arguments);
    }
    return Rm(this, _0x215b49);
  };
}
function Rm(_0x505c0c, _0x5b09d2) {
  if (_0x5b09d2 && (On(_0x5b09d2) === "object" || typeof _0x5b09d2 == "function")) {
    return _0x5b09d2;
  } else {
    return Ki(_0x505c0c);
  }
}
function Ki(_0x465dbe) {
  if (_0x465dbe === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x465dbe;
}
function Cm() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Tr(_0x1d01b5) {
  Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x29cc30) {
    return _0x29cc30.__proto__ || Object.getPrototypeOf(_0x29cc30);
  };
  return Tr(_0x1d01b5);
}
function tc(_0x470c41, _0x10cb9, _0x2f7531) {
  if (_0x10cb9 in _0x470c41) {
    Object.defineProperty(_0x470c41, _0x10cb9, {
      value: _0x2f7531,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x470c41[_0x10cb9] = _0x2f7531;
  }
  return _0x470c41;
}
var Em = function (_0x502dc4) {
  Dm(_0x25dc4d, _0x502dc4);
  var _0x45606d = $m(_0x25dc4d);
  function _0x25dc4d() {
    var _0x343bd5;
    Mm(this, _0x25dc4d);
    for (var _0x4067a9 = arguments.length, _0xfe3a3f = new Array(_0x4067a9), _0x1e5b4e = 0; _0x1e5b4e < _0x4067a9; _0x1e5b4e++) {
      _0xfe3a3f[_0x1e5b4e] = arguments[_0x1e5b4e];
    }
    _0x343bd5 = _0x45606d.call.apply(_0x45606d, [this].concat(_0xfe3a3f));
    tc(Ki(_0x343bd5), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    tc(Ki(_0x343bd5), "priority", 110);
    return _0x343bd5;
  }
  km(_0x25dc4d, [{
    key: "parse",
    value: function (_0x43b991, _0x3ccdae, _0x2ced8d) {
      function _0x18374a(_0x52dfe4) {
        return _0x52dfe4 - 1;
      }
      switch (_0x3ccdae) {
        case "M":
          return q(B(V.month, _0x43b991), _0x18374a);
        case "MM":
          return q(W(2, _0x43b991), _0x18374a);
        case "Mo":
          return q(_0x2ced8d.ordinalNumber(_0x43b991, {
            unit: "month"
          }), _0x18374a);
        case "MMM":
          return _0x2ced8d.month(_0x43b991, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x2ced8d.month(_0x43b991, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return _0x2ced8d.month(_0x43b991, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return _0x2ced8d.month(_0x43b991, {
            width: "wide",
            context: "formatting"
          }) || _0x2ced8d.month(_0x43b991, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x2ced8d.month(_0x43b991, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function (_0x2e7042, _0x51f451) {
      return _0x51f451 >= 0 && _0x51f451 <= 11;
    }
  }, {
    key: "set",
    value: function (_0x281b33, _0x169f1d, _0x476147) {
      _0x281b33.setUTCMonth(_0x476147, 1);
      _0x281b33.setUTCHours(0, 0, 0, 0);
      return _0x281b33;
    }
  }]);
  return _0x25dc4d;
}(R);
function Pn(_0x426bcf) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Pn = function (_0x5b08f2) {
      return typeof _0x5b08f2;
    };
  } else {
    Pn = function (_0x50849c) {
      if (_0x50849c && typeof Symbol == "function" && _0x50849c.constructor === Symbol && _0x50849c !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x50849c;
      }
    };
  }
  return Pn(_0x426bcf);
}
function Im(_0x543339, _0x2109a1) {
  if (!(_0x543339 instanceof _0x2109a1)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function ec(_0x3af531, _0x44d9fa) {
  for (var _0x303a6f = 0; _0x303a6f < _0x44d9fa.length; _0x303a6f++) {
    var _0x2f50f8 = _0x44d9fa[_0x303a6f];
    _0x2f50f8.enumerable = _0x2f50f8.enumerable || false;
    _0x2f50f8.configurable = true;
    if ("value" in _0x2f50f8) {
      _0x2f50f8.writable = true;
    }
    Object.defineProperty(_0x3af531, _0x2f50f8.key, _0x2f50f8);
  }
}
function Lm(_0x34e835, _0x11ca38, _0x359d37) {
  if (_0x11ca38) {
    ec(_0x34e835.prototype, _0x11ca38);
  }
  if (_0x359d37) {
    ec(_0x34e835, _0x359d37);
  }
  return _0x34e835;
}
function Am(_0x35cb35, _0x1f8f0f) {
  if (typeof _0x1f8f0f != "function" && _0x1f8f0f !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x35cb35.prototype = Object.create(_0x1f8f0f && _0x1f8f0f.prototype, {
    constructor: {
      value: _0x35cb35,
      writable: true,
      configurable: true
    }
  });
  if (_0x1f8f0f) {
    Zi(_0x35cb35, _0x1f8f0f);
  }
}
function Zi(_0x1114f7, _0x42b08a) {
  Zi = Object.setPrototypeOf || function (_0x2f519e, _0x4e9b0f) {
    _0x2f519e.__proto__ = _0x4e9b0f;
    return _0x2f519e;
  };
  return Zi(_0x1114f7, _0x42b08a);
}
function Nm(_0x505a9e) {
  var _0x28068d = zm();
  return function () {
    var _0x59df56 = Mr(_0x505a9e);
    var _0x5e08f6;
    if (_0x28068d) {
      var _0x415605 = Mr(this).constructor;
      _0x5e08f6 = Reflect.construct(_0x59df56, arguments, _0x415605);
    } else {
      _0x5e08f6 = _0x59df56.apply(this, arguments);
    }
    return Fm(this, _0x5e08f6);
  };
}
function Fm(_0x98be84, _0x317387) {
  if (_0x317387 && (Pn(_0x317387) === "object" || typeof _0x317387 == "function")) {
    return _0x317387;
  } else {
    return Ji(_0x98be84);
  }
}
function Ji(_0x4a2ef3) {
  if (_0x4a2ef3 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x4a2ef3;
}
function zm() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Mr(_0x544aa2) {
  Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x1d3682) {
    return _0x1d3682.__proto__ || Object.getPrototypeOf(_0x1d3682);
  };
  return Mr(_0x544aa2);
}
function nc(_0x2e0ac1, _0x2ed449, _0x4afa1d) {
  if (_0x2ed449 in _0x2e0ac1) {
    Object.defineProperty(_0x2e0ac1, _0x2ed449, {
      value: _0x4afa1d,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x2e0ac1[_0x2ed449] = _0x4afa1d;
  }
  return _0x2e0ac1;
}
var Bm = function (_0x285dd5) {
  Am(_0x2a5bc2, _0x285dd5);
  var _0x2dcbce = Nm(_0x2a5bc2);
  function _0x2a5bc2() {
    var _0x461e4a;
    Im(this, _0x2a5bc2);
    for (var _0x56e081 = arguments.length, _0x3be284 = new Array(_0x56e081), _0x4583b1 = 0; _0x4583b1 < _0x56e081; _0x4583b1++) {
      _0x3be284[_0x4583b1] = arguments[_0x4583b1];
    }
    _0x461e4a = _0x2dcbce.call.apply(_0x2dcbce, [this].concat(_0x3be284));
    nc(Ji(_0x461e4a), "priority", 110);
    nc(Ji(_0x461e4a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _0x461e4a;
  }
  Lm(_0x2a5bc2, [{
    key: "parse",
    value: function (_0x47e2b2, _0x2888e7, _0x431bd6) {
      function _0x400798(_0x5e97f4) {
        return _0x5e97f4 - 1;
      }
      switch (_0x2888e7) {
        case "L":
          return q(B(V.month, _0x47e2b2), _0x400798);
        case "LL":
          return q(W(2, _0x47e2b2), _0x400798);
        case "Lo":
          return q(_0x431bd6.ordinalNumber(_0x47e2b2, {
            unit: "month"
          }), _0x400798);
        case "LLL":
          return _0x431bd6.month(_0x47e2b2, {
            width: "abbreviated",
            context: "standalone"
          }) || _0x431bd6.month(_0x47e2b2, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return _0x431bd6.month(_0x47e2b2, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return _0x431bd6.month(_0x47e2b2, {
            width: "wide",
            context: "standalone"
          }) || _0x431bd6.month(_0x47e2b2, {
            width: "abbreviated",
            context: "standalone"
          }) || _0x431bd6.month(_0x47e2b2, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function (_0x4254b0, _0x52411c) {
      return _0x52411c >= 0 && _0x52411c <= 11;
    }
  }, {
    key: "set",
    value: function (_0x58debc, _0x2dae26, _0x312cfc) {
      _0x58debc.setUTCMonth(_0x312cfc, 1);
      _0x58debc.setUTCHours(0, 0, 0, 0);
      return _0x58debc;
    }
  }]);
  return _0x2a5bc2;
}(R);
function jm(_0x1f649b, _0x58c47b, _0x1a2b44) {
  w(2, arguments);
  var _0x1a1618 = P(_0x1f649b);
  var _0x137853 = F(_0x58c47b);
  var _0x4dc223 = Ku(_0x1a1618, _0x1a2b44) - _0x137853;
  _0x1a1618.setUTCDate(_0x1a1618.getUTCDate() - _0x4dc223 * 7);
  return _0x1a1618;
}
function Sn(_0x2b605e) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Sn = function (_0x55b2f3) {
      return typeof _0x55b2f3;
    };
  } else {
    Sn = function (_0x3073fd) {
      if (_0x3073fd && typeof Symbol == "function" && _0x3073fd.constructor === Symbol && _0x3073fd !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x3073fd;
      }
    };
  }
  return Sn(_0x2b605e);
}
function Wm(_0x33e521, _0x3ccca5) {
  if (!(_0x33e521 instanceof _0x3ccca5)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function rc(_0x4c7fc4, _0xeab1d4) {
  for (var _0xcdf236 = 0; _0xcdf236 < _0xeab1d4.length; _0xcdf236++) {
    var _0x591f8e = _0xeab1d4[_0xcdf236];
    _0x591f8e.enumerable = _0x591f8e.enumerable || false;
    _0x591f8e.configurable = true;
    if ("value" in _0x591f8e) {
      _0x591f8e.writable = true;
    }
    Object.defineProperty(_0x4c7fc4, _0x591f8e.key, _0x591f8e);
  }
}
function Um(_0x1d9d8c, _0x13883b, _0x37c57b) {
  if (_0x13883b) {
    rc(_0x1d9d8c.prototype, _0x13883b);
  }
  if (_0x37c57b) {
    rc(_0x1d9d8c, _0x37c57b);
  }
  return _0x1d9d8c;
}
function Hm(_0x1869eb, _0x5c18bc) {
  if (typeof _0x5c18bc != "function" && _0x5c18bc !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x1869eb.prototype = Object.create(_0x5c18bc && _0x5c18bc.prototype, {
    constructor: {
      value: _0x1869eb,
      writable: true,
      configurable: true
    }
  });
  if (_0x5c18bc) {
    to(_0x1869eb, _0x5c18bc);
  }
}
function to(_0x261684, _0x92e165) {
  to = Object.setPrototypeOf || function (_0x226dc1, _0x535eaa) {
    _0x226dc1.__proto__ = _0x535eaa;
    return _0x226dc1;
  };
  return to(_0x261684, _0x92e165);
}
function Ym(_0x320e44) {
  var _0x3693f7 = qm();
  return function () {
    var _0x5b7166 = kr(_0x320e44);
    var _0x273c53;
    if (_0x3693f7) {
      var _0x17acce = kr(this).constructor;
      _0x273c53 = Reflect.construct(_0x5b7166, arguments, _0x17acce);
    } else {
      _0x273c53 = _0x5b7166.apply(this, arguments);
    }
    return Vm(this, _0x273c53);
  };
}
function Vm(_0x31eb97, _0x3066c2) {
  if (_0x3066c2 && (Sn(_0x3066c2) === "object" || typeof _0x3066c2 == "function")) {
    return _0x3066c2;
  } else {
    return eo(_0x31eb97);
  }
}
function eo(_0x5193ab) {
  if (_0x5193ab === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x5193ab;
}
function qm() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function kr(_0x170faf) {
  kr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x4ea32a) {
    return _0x4ea32a.__proto__ || Object.getPrototypeOf(_0x4ea32a);
  };
  return kr(_0x170faf);
}
function ic(_0x70b519, _0x2884c6, _0x453ae6) {
  if (_0x2884c6 in _0x70b519) {
    Object.defineProperty(_0x70b519, _0x2884c6, {
      value: _0x453ae6,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x70b519[_0x2884c6] = _0x453ae6;
  }
  return _0x70b519;
}
var Xm = function (_0x555276) {
  Hm(_0x45bec3, _0x555276);
  var _0xecb024 = Ym(_0x45bec3);
  function _0x45bec3() {
    var _0x10c13a;
    Wm(this, _0x45bec3);
    for (var _0x538dd1 = arguments.length, _0x499d5a = new Array(_0x538dd1), _0x2e7820 = 0; _0x2e7820 < _0x538dd1; _0x2e7820++) {
      _0x499d5a[_0x2e7820] = arguments[_0x2e7820];
    }
    _0x10c13a = _0xecb024.call.apply(_0xecb024, [this].concat(_0x499d5a));
    ic(eo(_0x10c13a), "priority", 100);
    ic(eo(_0x10c13a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _0x10c13a;
  }
  Um(_0x45bec3, [{
    key: "parse",
    value: function (_0x41fba4, _0x4b3d8c, _0x365c8b) {
      switch (_0x4b3d8c) {
        case "w":
          return B(V.week, _0x41fba4);
        case "wo":
          return _0x365c8b.ordinalNumber(_0x41fba4, {
            unit: "week"
          });
        default:
          return W(_0x4b3d8c.length, _0x41fba4);
      }
    }
  }, {
    key: "validate",
    value: function (_0x5a0fff, _0x5d6bd5) {
      return _0x5d6bd5 >= 1 && _0x5d6bd5 <= 53;
    }
  }, {
    key: "set",
    value: function (_0x19ebb3, _0x511d68, _0xe6409e, _0xa6382b) {
      return Zt(jm(_0x19ebb3, _0xe6409e, _0xa6382b), _0xa6382b);
    }
  }]);
  return _0x45bec3;
}(R);
function Qm(_0x581924, _0x157ad4) {
  w(2, arguments);
  var _0x225dae = P(_0x581924);
  var _0x1f67d1 = F(_0x157ad4);
  var _0x1fadc6 = Gu(_0x225dae) - _0x1f67d1;
  _0x225dae.setUTCDate(_0x225dae.getUTCDate() - _0x1fadc6 * 7);
  return _0x225dae;
}
function Tn(_0x5a0817) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Tn = function (_0xb63b7d) {
      return typeof _0xb63b7d;
    };
  } else {
    Tn = function (_0x5c6804) {
      if (_0x5c6804 && typeof Symbol == "function" && _0x5c6804.constructor === Symbol && _0x5c6804 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x5c6804;
      }
    };
  }
  return Tn(_0x5a0817);
}
function Gm(_0x47e9ce, _0xaf3530) {
  if (!(_0x47e9ce instanceof _0xaf3530)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function oc(_0x1828ec, _0x4c831e) {
  for (var _0x47580e = 0; _0x47580e < _0x4c831e.length; _0x47580e++) {
    var _0x24a7af = _0x4c831e[_0x47580e];
    _0x24a7af.enumerable = _0x24a7af.enumerable || false;
    _0x24a7af.configurable = true;
    if ("value" in _0x24a7af) {
      _0x24a7af.writable = true;
    }
    Object.defineProperty(_0x1828ec, _0x24a7af.key, _0x24a7af);
  }
}
function Km(_0x551b3e, _0x2c8c86, _0x468aba) {
  if (_0x2c8c86) {
    oc(_0x551b3e.prototype, _0x2c8c86);
  }
  if (_0x468aba) {
    oc(_0x551b3e, _0x468aba);
  }
  return _0x551b3e;
}
function Zm(_0x5ed5fd, _0x1c8f85) {
  if (typeof _0x1c8f85 != "function" && _0x1c8f85 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x5ed5fd.prototype = Object.create(_0x1c8f85 && _0x1c8f85.prototype, {
    constructor: {
      value: _0x5ed5fd,
      writable: true,
      configurable: true
    }
  });
  if (_0x1c8f85) {
    no(_0x5ed5fd, _0x1c8f85);
  }
}
function no(_0xeea5f0, _0x18cd40) {
  no = Object.setPrototypeOf || function (_0x2df11a, _0x375c45) {
    _0x2df11a.__proto__ = _0x375c45;
    return _0x2df11a;
  };
  return no(_0xeea5f0, _0x18cd40);
}
function Jm(_0x4b1f27) {
  var _0x43877 = eb();
  return function () {
    var _0x135c72 = Dr(_0x4b1f27);
    var _0x1b2f58;
    if (_0x43877) {
      var _0x17535d = Dr(this).constructor;
      _0x1b2f58 = Reflect.construct(_0x135c72, arguments, _0x17535d);
    } else {
      _0x1b2f58 = _0x135c72.apply(this, arguments);
    }
    return tb(this, _0x1b2f58);
  };
}
function tb(_0x16d39a, _0x11875a) {
  if (_0x11875a && (Tn(_0x11875a) === "object" || typeof _0x11875a == "function")) {
    return _0x11875a;
  } else {
    return ro(_0x16d39a);
  }
}
function ro(_0x205c20) {
  if (_0x205c20 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x205c20;
}
function eb() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Dr(_0x51b24d) {
  Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x8a3b1c) {
    return _0x8a3b1c.__proto__ || Object.getPrototypeOf(_0x8a3b1c);
  };
  return Dr(_0x51b24d);
}
function sc(_0x10504c, _0x9315be, _0x520fde) {
  if (_0x9315be in _0x10504c) {
    Object.defineProperty(_0x10504c, _0x9315be, {
      value: _0x520fde,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x10504c[_0x9315be] = _0x520fde;
  }
  return _0x10504c;
}
var nb = function (_0x12432d) {
  Zm(_0x42e6a8, _0x12432d);
  var _0x2a8ef6 = Jm(_0x42e6a8);
  function _0x42e6a8() {
    var _0x12fda3;
    Gm(this, _0x42e6a8);
    for (var _0x35de2b = arguments.length, _0x1d6b8c = new Array(_0x35de2b), _0x237761 = 0; _0x237761 < _0x35de2b; _0x237761++) {
      _0x1d6b8c[_0x237761] = arguments[_0x237761];
    }
    _0x12fda3 = _0x2a8ef6.call.apply(_0x2a8ef6, [this].concat(_0x1d6b8c));
    sc(ro(_0x12fda3), "priority", 100);
    sc(ro(_0x12fda3), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _0x12fda3;
  }
  Km(_0x42e6a8, [{
    key: "parse",
    value: function (_0xe6b36b, _0x1469a6, _0x215414) {
      switch (_0x1469a6) {
        case "I":
          return B(V.week, _0xe6b36b);
        case "Io":
          return _0x215414.ordinalNumber(_0xe6b36b, {
            unit: "week"
          });
        default:
          return W(_0x1469a6.length, _0xe6b36b);
      }
    }
  }, {
    key: "validate",
    value: function (_0x169ca3, _0xc81d03) {
      return _0xc81d03 >= 1 && _0xc81d03 <= 53;
    }
  }, {
    key: "set",
    value: function (_0x5be76c, _0xd72db5, _0x2398b7) {
      return de(Qm(_0x5be76c, _0x2398b7));
    }
  }]);
  return _0x42e6a8;
}(R);
function Mn(_0x1bb447) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Mn = function (_0x25ed7b) {
      return typeof _0x25ed7b;
    };
  } else {
    Mn = function (_0x180a28) {
      if (_0x180a28 && typeof Symbol == "function" && _0x180a28.constructor === Symbol && _0x180a28 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x180a28;
      }
    };
  }
  return Mn(_0x1bb447);
}
function rb(_0x8e48d0, _0x5b9851) {
  if (!(_0x8e48d0 instanceof _0x5b9851)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function ac(_0x3320d3, _0x3b2f53) {
  for (var _0x2c73f9 = 0; _0x2c73f9 < _0x3b2f53.length; _0x2c73f9++) {
    var _0x1e0756 = _0x3b2f53[_0x2c73f9];
    _0x1e0756.enumerable = _0x1e0756.enumerable || false;
    _0x1e0756.configurable = true;
    if ("value" in _0x1e0756) {
      _0x1e0756.writable = true;
    }
    Object.defineProperty(_0x3320d3, _0x1e0756.key, _0x1e0756);
  }
}
function ib(_0x2b10e9, _0x158597, _0x1d6400) {
  if (_0x158597) {
    ac(_0x2b10e9.prototype, _0x158597);
  }
  if (_0x1d6400) {
    ac(_0x2b10e9, _0x1d6400);
  }
  return _0x2b10e9;
}
function ob(_0x4719ef, _0x151782) {
  if (typeof _0x151782 != "function" && _0x151782 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x4719ef.prototype = Object.create(_0x151782 && _0x151782.prototype, {
    constructor: {
      value: _0x4719ef,
      writable: true,
      configurable: true
    }
  });
  if (_0x151782) {
    io(_0x4719ef, _0x151782);
  }
}
function io(_0x8a512e, _0x92cbf0) {
  io = Object.setPrototypeOf || function (_0x3a61a1, _0x49b74d) {
    _0x3a61a1.__proto__ = _0x49b74d;
    return _0x3a61a1;
  };
  return io(_0x8a512e, _0x92cbf0);
}
function sb(_0x48aa61) {
  var _0x543b11 = cb();
  return function () {
    var _0x3650d8 = $r(_0x48aa61);
    var _0x38977a;
    if (_0x543b11) {
      var _0x517d9e = $r(this).constructor;
      _0x38977a = Reflect.construct(_0x3650d8, arguments, _0x517d9e);
    } else {
      _0x38977a = _0x3650d8.apply(this, arguments);
    }
    return ab(this, _0x38977a);
  };
}
function ab(_0x4f4d23, _0x3485e1) {
  if (_0x3485e1 && (Mn(_0x3485e1) === "object" || typeof _0x3485e1 == "function")) {
    return _0x3485e1;
  } else {
    return kn(_0x4f4d23);
  }
}
function kn(_0x2bc1b1) {
  if (_0x2bc1b1 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x2bc1b1;
}
function cb() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function $r(_0x18c5de) {
  $r = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x133226) {
    return _0x133226.__proto__ || Object.getPrototypeOf(_0x133226);
  };
  return $r(_0x18c5de);
}
function mi(_0x56299c, _0x74f084, _0x41eb12) {
  if (_0x74f084 in _0x56299c) {
    Object.defineProperty(_0x56299c, _0x74f084, {
      value: _0x41eb12,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x56299c[_0x74f084] = _0x41eb12;
  }
  return _0x56299c;
}
var ub = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var lb = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var fb = function (_0x53340a) {
  ob(_0x5f2101, _0x53340a);
  var _0x2da5ef = sb(_0x5f2101);
  function _0x5f2101() {
    var _0x551840;
    rb(this, _0x5f2101);
    for (var _0x1e0f75 = arguments.length, _0x1eaf9b = new Array(_0x1e0f75), _0x3c7152 = 0; _0x3c7152 < _0x1e0f75; _0x3c7152++) {
      _0x1eaf9b[_0x3c7152] = arguments[_0x3c7152];
    }
    _0x551840 = _0x2da5ef.call.apply(_0x2da5ef, [this].concat(_0x1eaf9b));
    mi(kn(_0x551840), "priority", 90);
    mi(kn(_0x551840), "subPriority", 1);
    mi(kn(_0x551840), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _0x551840;
  }
  ib(_0x5f2101, [{
    key: "parse",
    value: function (_0x10e7e7, _0xe08003, _0x138f33) {
      switch (_0xe08003) {
        case "d":
          return B(V.date, _0x10e7e7);
        case "do":
          return _0x138f33.ordinalNumber(_0x10e7e7, {
            unit: "date"
          });
        default:
          return W(_0xe08003.length, _0x10e7e7);
      }
    }
  }, {
    key: "validate",
    value: function (_0xd7bafe, _0xe517a3) {
      var _0x549454 = _0xd7bafe.getUTCFullYear();
      var _0x47d855 = sl(_0x549454);
      var _0x3e28ef = _0xd7bafe.getUTCMonth();
      if (_0x47d855) {
        return _0xe517a3 >= 1 && _0xe517a3 <= lb[_0x3e28ef];
      } else {
        return _0xe517a3 >= 1 && _0xe517a3 <= ub[_0x3e28ef];
      }
    }
  }, {
    key: "set",
    value: function (_0x2971ef, _0x3bdfb7, _0x479073) {
      _0x2971ef.setUTCDate(_0x479073);
      _0x2971ef.setUTCHours(0, 0, 0, 0);
      return _0x2971ef;
    }
  }]);
  return _0x5f2101;
}(R);
function Dn(_0x42c723) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Dn = function (_0x52fe8f) {
      return typeof _0x52fe8f;
    };
  } else {
    Dn = function (_0xbb33c9) {
      if (_0xbb33c9 && typeof Symbol == "function" && _0xbb33c9.constructor === Symbol && _0xbb33c9 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0xbb33c9;
      }
    };
  }
  return Dn(_0x42c723);
}
function hb(_0x325a6d, _0x326b9d) {
  if (!(_0x325a6d instanceof _0x326b9d)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function cc(_0x79a3b3, _0x5471cf) {
  for (var _0x268061 = 0; _0x268061 < _0x5471cf.length; _0x268061++) {
    var _0x1ed468 = _0x5471cf[_0x268061];
    _0x1ed468.enumerable = _0x1ed468.enumerable || false;
    _0x1ed468.configurable = true;
    if ("value" in _0x1ed468) {
      _0x1ed468.writable = true;
    }
    Object.defineProperty(_0x79a3b3, _0x1ed468.key, _0x1ed468);
  }
}
function db(_0xb4ae19, _0x2b790c, _0x92d325) {
  if (_0x2b790c) {
    cc(_0xb4ae19.prototype, _0x2b790c);
  }
  if (_0x92d325) {
    cc(_0xb4ae19, _0x92d325);
  }
  return _0xb4ae19;
}
function pb(_0x8aa853, _0x3d7309) {
  if (typeof _0x3d7309 != "function" && _0x3d7309 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x8aa853.prototype = Object.create(_0x3d7309 && _0x3d7309.prototype, {
    constructor: {
      value: _0x8aa853,
      writable: true,
      configurable: true
    }
  });
  if (_0x3d7309) {
    oo(_0x8aa853, _0x3d7309);
  }
}
function oo(_0x242c4b, _0x367f34) {
  oo = Object.setPrototypeOf || function (_0x43fb21, _0x320309) {
    _0x43fb21.__proto__ = _0x320309;
    return _0x43fb21;
  };
  return oo(_0x242c4b, _0x367f34);
}
function gb(_0x2486bd) {
  var _0x559a39 = mb();
  return function () {
    var _0x4987cc = Rr(_0x2486bd);
    var _0xbe1d5;
    if (_0x559a39) {
      var _0x17fe78 = Rr(this).constructor;
      _0xbe1d5 = Reflect.construct(_0x4987cc, arguments, _0x17fe78);
    } else {
      _0xbe1d5 = _0x4987cc.apply(this, arguments);
    }
    return yb(this, _0xbe1d5);
  };
}
function yb(_0xfc3f62, _0x424982) {
  if (_0x424982 && (Dn(_0x424982) === "object" || typeof _0x424982 == "function")) {
    return _0x424982;
  } else {
    return $n(_0xfc3f62);
  }
}
function $n(_0x3a4bf1) {
  if (_0x3a4bf1 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x3a4bf1;
}
function mb() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Rr(_0x2ada02) {
  Rr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0xc03ae6) {
    return _0xc03ae6.__proto__ || Object.getPrototypeOf(_0xc03ae6);
  };
  return Rr(_0x2ada02);
}
function bi(_0x22ea1f, _0x12cc82, _0x30dbe2) {
  if (_0x12cc82 in _0x22ea1f) {
    Object.defineProperty(_0x22ea1f, _0x12cc82, {
      value: _0x30dbe2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x22ea1f[_0x12cc82] = _0x30dbe2;
  }
  return _0x22ea1f;
}
var bb = function (_0x14850a) {
  pb(_0x6819aa, _0x14850a);
  var _0x5b0603 = gb(_0x6819aa);
  function _0x6819aa() {
    var _0x4114d1;
    hb(this, _0x6819aa);
    for (var _0x39f6e2 = arguments.length, _0xa6c733 = new Array(_0x39f6e2), _0x3bdd90 = 0; _0x3bdd90 < _0x39f6e2; _0x3bdd90++) {
      _0xa6c733[_0x3bdd90] = arguments[_0x3bdd90];
    }
    _0x4114d1 = _0x5b0603.call.apply(_0x5b0603, [this].concat(_0xa6c733));
    bi($n(_0x4114d1), "priority", 90);
    bi($n(_0x4114d1), "subpriority", 1);
    bi($n(_0x4114d1), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
    return _0x4114d1;
  }
  db(_0x6819aa, [{
    key: "parse",
    value: function (_0x415e7e, _0x3c1132, _0x580911) {
      switch (_0x3c1132) {
        case "D":
        case "DD":
          return B(V.dayOfYear, _0x415e7e);
        case "Do":
          return _0x580911.ordinalNumber(_0x415e7e, {
            unit: "date"
          });
        default:
          return W(_0x3c1132.length, _0x415e7e);
      }
    }
  }, {
    key: "validate",
    value: function (_0x33f191, _0xe5f4c1) {
      var _0x9ba292 = _0x33f191.getUTCFullYear();
      var _0x58a01e = sl(_0x9ba292);
      if (_0x58a01e) {
        return _0xe5f4c1 >= 1 && _0xe5f4c1 <= 366;
      } else {
        return _0xe5f4c1 >= 1 && _0xe5f4c1 <= 365;
      }
    }
  }, {
    key: "set",
    value: function (_0x14b59f, _0x52924d, _0x5bd740) {
      _0x14b59f.setUTCMonth(0, _0x5bd740);
      _0x14b59f.setUTCHours(0, 0, 0, 0);
      return _0x14b59f;
    }
  }]);
  return _0x6819aa;
}(R);
function ps(_0x2117fc, _0x3d7fc0, _0x3274ee) {
  var _0x1f6cbe;
  var _0x3f48d3;
  var _0x222209;
  var _0x1beb71;
  w(2, arguments);
  var _0x559ad5 = Bt();
  var _0x9b1f5a = F(_0x3274ee?.weekStartsOn ?? (_0x3274ee == null || (_0x1f6cbe = _0x3274ee.locale) === null || _0x1f6cbe === undefined || (_0x3f48d3 = _0x1f6cbe.options) === null || _0x3f48d3 === undefined ? undefined : _0x3f48d3.weekStartsOn) ?? _0x559ad5.weekStartsOn ?? ((_0x222209 = _0x559ad5.locale) === null || _0x222209 === undefined || (_0x1beb71 = _0x222209.options) === null || _0x1beb71 === undefined ? undefined : _0x1beb71.weekStartsOn) ?? 0);
  if (!(_0x9b1f5a >= 0) || !(_0x9b1f5a <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var _0x24a3a6 = P(_0x2117fc);
  var _0x31a612 = F(_0x3d7fc0);
  var _0x31c453 = _0x24a3a6.getUTCDay();
  var _0x9d6a28 = _0x31a612 % 7;
  var _0x5bbd71 = (_0x9d6a28 + 7) % 7;
  var _0x2c436f = (_0x5bbd71 < _0x9b1f5a ? 7 : 0) + _0x31a612 - _0x31c453;
  _0x24a3a6.setUTCDate(_0x24a3a6.getUTCDate() + _0x2c436f);
  return _0x24a3a6;
}
function Rn(_0x2ffeb9) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Rn = function (_0x59f6aa) {
      return typeof _0x59f6aa;
    };
  } else {
    Rn = function (_0x195fe6) {
      if (_0x195fe6 && typeof Symbol == "function" && _0x195fe6.constructor === Symbol && _0x195fe6 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x195fe6;
      }
    };
  }
  return Rn(_0x2ffeb9);
}
function _b(_0x71f2ff, _0x4c87b1) {
  if (!(_0x71f2ff instanceof _0x4c87b1)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function uc(_0x3d0b26, _0x1eaf6d) {
  for (var _0x2ef940 = 0; _0x2ef940 < _0x1eaf6d.length; _0x2ef940++) {
    var _0x326b98 = _0x1eaf6d[_0x2ef940];
    _0x326b98.enumerable = _0x326b98.enumerable || false;
    _0x326b98.configurable = true;
    if ("value" in _0x326b98) {
      _0x326b98.writable = true;
    }
    Object.defineProperty(_0x3d0b26, _0x326b98.key, _0x326b98);
  }
}
function vb(_0x2e0d2a, _0x50208c, _0x56e8e7) {
  if (_0x50208c) {
    uc(_0x2e0d2a.prototype, _0x50208c);
  }
  if (_0x56e8e7) {
    uc(_0x2e0d2a, _0x56e8e7);
  }
  return _0x2e0d2a;
}
function wb(_0x147ad0, _0x571f13) {
  if (typeof _0x571f13 != "function" && _0x571f13 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x147ad0.prototype = Object.create(_0x571f13 && _0x571f13.prototype, {
    constructor: {
      value: _0x147ad0,
      writable: true,
      configurable: true
    }
  });
  if (_0x571f13) {
    so(_0x147ad0, _0x571f13);
  }
}
function so(_0x255f1c, _0x39aebb) {
  so = Object.setPrototypeOf || function (_0x2ad1d7, _0x74f248) {
    _0x2ad1d7.__proto__ = _0x74f248;
    return _0x2ad1d7;
  };
  return so(_0x255f1c, _0x39aebb);
}
function xb(_0x435919) {
  var _0x11f04e = Pb();
  return function () {
    var _0x1d9c16 = Cr(_0x435919);
    var _0x1044ae;
    if (_0x11f04e) {
      var _0x3e9708 = Cr(this).constructor;
      _0x1044ae = Reflect.construct(_0x1d9c16, arguments, _0x3e9708);
    } else {
      _0x1044ae = _0x1d9c16.apply(this, arguments);
    }
    return Ob(this, _0x1044ae);
  };
}
function Ob(_0x31b2b3, _0x251299) {
  if (_0x251299 && (Rn(_0x251299) === "object" || typeof _0x251299 == "function")) {
    return _0x251299;
  } else {
    return ao(_0x31b2b3);
  }
}
function ao(_0x4fd20d) {
  if (_0x4fd20d === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x4fd20d;
}
function Pb() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Cr(_0x58f714) {
  Cr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x21b3ea) {
    return _0x21b3ea.__proto__ || Object.getPrototypeOf(_0x21b3ea);
  };
  return Cr(_0x58f714);
}
function lc(_0x49e676, _0x1ee3da, _0xfcfb09) {
  if (_0x1ee3da in _0x49e676) {
    Object.defineProperty(_0x49e676, _0x1ee3da, {
      value: _0xfcfb09,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x49e676[_0x1ee3da] = _0xfcfb09;
  }
  return _0x49e676;
}
var Sb = function (_0x4e9065) {
  wb(_0x1f8bb5, _0x4e9065);
  var _0x1222de = xb(_0x1f8bb5);
  function _0x1f8bb5() {
    var _0x766728;
    _b(this, _0x1f8bb5);
    for (var _0x1e32b8 = arguments.length, _0x202132 = new Array(_0x1e32b8), _0x3ce085 = 0; _0x3ce085 < _0x1e32b8; _0x3ce085++) {
      _0x202132[_0x3ce085] = arguments[_0x3ce085];
    }
    _0x766728 = _0x1222de.call.apply(_0x1222de, [this].concat(_0x202132));
    lc(ao(_0x766728), "priority", 90);
    lc(ao(_0x766728), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
    return _0x766728;
  }
  vb(_0x1f8bb5, [{
    key: "parse",
    value: function (_0x411e96, _0xf74af0, _0x5e0889) {
      switch (_0xf74af0) {
        case "E":
        case "EE":
        case "EEE":
          return _0x5e0889.day(_0x411e96, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x5e0889.day(_0x411e96, {
            width: "short",
            context: "formatting"
          }) || _0x5e0889.day(_0x411e96, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return _0x5e0889.day(_0x411e96, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return _0x5e0889.day(_0x411e96, {
            width: "short",
            context: "formatting"
          }) || _0x5e0889.day(_0x411e96, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return _0x5e0889.day(_0x411e96, {
            width: "wide",
            context: "formatting"
          }) || _0x5e0889.day(_0x411e96, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x5e0889.day(_0x411e96, {
            width: "short",
            context: "formatting"
          }) || _0x5e0889.day(_0x411e96, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function (_0x4c8999, _0x57f4fc) {
      return _0x57f4fc >= 0 && _0x57f4fc <= 6;
    }
  }, {
    key: "set",
    value: function (_0x52b37f, _0x4d5ea3, _0x5bb646, _0x128789) {
      _0x52b37f = ps(_0x52b37f, _0x5bb646, _0x128789);
      _0x52b37f.setUTCHours(0, 0, 0, 0);
      return _0x52b37f;
    }
  }]);
  return _0x1f8bb5;
}(R);
function Cn(_0x12a998) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Cn = function (_0x135d23) {
      return typeof _0x135d23;
    };
  } else {
    Cn = function (_0x35d23b) {
      if (_0x35d23b && typeof Symbol == "function" && _0x35d23b.constructor === Symbol && _0x35d23b !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x35d23b;
      }
    };
  }
  return Cn(_0x12a998);
}
function Tb(_0x59feb2, _0x56aec0) {
  if (!(_0x59feb2 instanceof _0x56aec0)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function fc(_0x3e252f, _0x200f1f) {
  for (var _0x16431c = 0; _0x16431c < _0x200f1f.length; _0x16431c++) {
    var _0x555926 = _0x200f1f[_0x16431c];
    _0x555926.enumerable = _0x555926.enumerable || false;
    _0x555926.configurable = true;
    if ("value" in _0x555926) {
      _0x555926.writable = true;
    }
    Object.defineProperty(_0x3e252f, _0x555926.key, _0x555926);
  }
}
function Mb(_0x542ce4, _0x34bed6, _0x55a2b2) {
  if (_0x34bed6) {
    fc(_0x542ce4.prototype, _0x34bed6);
  }
  if (_0x55a2b2) {
    fc(_0x542ce4, _0x55a2b2);
  }
  return _0x542ce4;
}
function kb(_0x5ab88b, _0xb1920b) {
  if (typeof _0xb1920b != "function" && _0xb1920b !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x5ab88b.prototype = Object.create(_0xb1920b && _0xb1920b.prototype, {
    constructor: {
      value: _0x5ab88b,
      writable: true,
      configurable: true
    }
  });
  if (_0xb1920b) {
    co(_0x5ab88b, _0xb1920b);
  }
}
function co(_0x3ed7ae, _0x47535f) {
  co = Object.setPrototypeOf || function (_0x3f2a2e, _0x50f836) {
    _0x3f2a2e.__proto__ = _0x50f836;
    return _0x3f2a2e;
  };
  return co(_0x3ed7ae, _0x47535f);
}
function Db(_0x46a44b) {
  var _0xa94311 = Rb();
  return function () {
    var _0x113e0b = Er(_0x46a44b);
    var _0x31823b;
    if (_0xa94311) {
      var _0x1f0e34 = Er(this).constructor;
      _0x31823b = Reflect.construct(_0x113e0b, arguments, _0x1f0e34);
    } else {
      _0x31823b = _0x113e0b.apply(this, arguments);
    }
    return $b(this, _0x31823b);
  };
}
function $b(_0x527036, _0x3a8566) {
  if (_0x3a8566 && (Cn(_0x3a8566) === "object" || typeof _0x3a8566 == "function")) {
    return _0x3a8566;
  } else {
    return uo(_0x527036);
  }
}
function uo(_0x394780) {
  if (_0x394780 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x394780;
}
function Rb() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Er(_0x2370cc) {
  Er = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x543522) {
    return _0x543522.__proto__ || Object.getPrototypeOf(_0x543522);
  };
  return Er(_0x2370cc);
}
function hc(_0xf7752, _0x46613c, _0x28c3e4) {
  if (_0x46613c in _0xf7752) {
    Object.defineProperty(_0xf7752, _0x46613c, {
      value: _0x28c3e4,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0xf7752[_0x46613c] = _0x28c3e4;
  }
  return _0xf7752;
}
var Cb = function (_0x24d490) {
  kb(_0x8fa0fe, _0x24d490);
  var _0x39ae = Db(_0x8fa0fe);
  function _0x8fa0fe() {
    var _0x121cb4;
    Tb(this, _0x8fa0fe);
    for (var _0x57740e = arguments.length, _0x277dd7 = new Array(_0x57740e), _0x51c925 = 0; _0x51c925 < _0x57740e; _0x51c925++) {
      _0x277dd7[_0x51c925] = arguments[_0x51c925];
    }
    _0x121cb4 = _0x39ae.call.apply(_0x39ae, [this].concat(_0x277dd7));
    hc(uo(_0x121cb4), "priority", 90);
    hc(uo(_0x121cb4), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
    return _0x121cb4;
  }
  Mb(_0x8fa0fe, [{
    key: "parse",
    value: function (_0x36fd52, _0x5dab4c, _0x512df4, _0x5e3c12) {
      function _0x4298ee(_0x38eaaa) {
        var _0x365996 = Math.floor((_0x38eaaa - 1) / 7) * 7;
        return (_0x38eaaa + _0x5e3c12.weekStartsOn + 6) % 7 + _0x365996;
      }
      switch (_0x5dab4c) {
        case "e":
        case "ee":
          return q(W(_0x5dab4c.length, _0x36fd52), _0x4298ee);
        case "eo":
          return q(_0x512df4.ordinalNumber(_0x36fd52, {
            unit: "day"
          }), _0x4298ee);
        case "eee":
          return _0x512df4.day(_0x36fd52, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x512df4.day(_0x36fd52, {
            width: "short",
            context: "formatting"
          }) || _0x512df4.day(_0x36fd52, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return _0x512df4.day(_0x36fd52, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return _0x512df4.day(_0x36fd52, {
            width: "short",
            context: "formatting"
          }) || _0x512df4.day(_0x36fd52, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return _0x512df4.day(_0x36fd52, {
            width: "wide",
            context: "formatting"
          }) || _0x512df4.day(_0x36fd52, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x512df4.day(_0x36fd52, {
            width: "short",
            context: "formatting"
          }) || _0x512df4.day(_0x36fd52, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function (_0x4ef03f, _0x197e28) {
      return _0x197e28 >= 0 && _0x197e28 <= 6;
    }
  }, {
    key: "set",
    value: function (_0x4ad192, _0xc8b179, _0x571f97, _0xf2a423) {
      _0x4ad192 = ps(_0x4ad192, _0x571f97, _0xf2a423);
      _0x4ad192.setUTCHours(0, 0, 0, 0);
      return _0x4ad192;
    }
  }]);
  return _0x8fa0fe;
}(R);
function En(_0x1dd581) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    En = function (_0x1ceb4a) {
      return typeof _0x1ceb4a;
    };
  } else {
    En = function (_0x4add6b) {
      if (_0x4add6b && typeof Symbol == "function" && _0x4add6b.constructor === Symbol && _0x4add6b !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x4add6b;
      }
    };
  }
  return En(_0x1dd581);
}
function Eb(_0x31d46d, _0x4b8f22) {
  if (!(_0x31d46d instanceof _0x4b8f22)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function dc(_0x243d15, _0x48a137) {
  for (var _0x31da73 = 0; _0x31da73 < _0x48a137.length; _0x31da73++) {
    var _0x17c8a6 = _0x48a137[_0x31da73];
    _0x17c8a6.enumerable = _0x17c8a6.enumerable || false;
    _0x17c8a6.configurable = true;
    if ("value" in _0x17c8a6) {
      _0x17c8a6.writable = true;
    }
    Object.defineProperty(_0x243d15, _0x17c8a6.key, _0x17c8a6);
  }
}
function Ib(_0x12a153, _0x612d17, _0x133d2d) {
  if (_0x612d17) {
    dc(_0x12a153.prototype, _0x612d17);
  }
  if (_0x133d2d) {
    dc(_0x12a153, _0x133d2d);
  }
  return _0x12a153;
}
function Lb(_0x5b55eb, _0x229c73) {
  if (typeof _0x229c73 != "function" && _0x229c73 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x5b55eb.prototype = Object.create(_0x229c73 && _0x229c73.prototype, {
    constructor: {
      value: _0x5b55eb,
      writable: true,
      configurable: true
    }
  });
  if (_0x229c73) {
    lo(_0x5b55eb, _0x229c73);
  }
}
function lo(_0x1b2351, _0x15611a) {
  lo = Object.setPrototypeOf || function (_0x160481, _0x37bb95) {
    _0x160481.__proto__ = _0x37bb95;
    return _0x160481;
  };
  return lo(_0x1b2351, _0x15611a);
}
function Ab(_0x796af5) {
  var _0x37cacf = Fb();
  return function () {
    var _0x5b59dd = Ir(_0x796af5);
    var _0x5270d0;
    if (_0x37cacf) {
      var _0x6417be = Ir(this).constructor;
      _0x5270d0 = Reflect.construct(_0x5b59dd, arguments, _0x6417be);
    } else {
      _0x5270d0 = _0x5b59dd.apply(this, arguments);
    }
    return Nb(this, _0x5270d0);
  };
}
function Nb(_0x1dd3b2, _0x20f51e) {
  if (_0x20f51e && (En(_0x20f51e) === "object" || typeof _0x20f51e == "function")) {
    return _0x20f51e;
  } else {
    return fo(_0x1dd3b2);
  }
}
function fo(_0x507c96) {
  if (_0x507c96 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x507c96;
}
function Fb() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Ir(_0x435e79) {
  Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x1b43ac) {
    return _0x1b43ac.__proto__ || Object.getPrototypeOf(_0x1b43ac);
  };
  return Ir(_0x435e79);
}
function pc(_0x551429, _0x111faf, _0x4e5b33) {
  if (_0x111faf in _0x551429) {
    Object.defineProperty(_0x551429, _0x111faf, {
      value: _0x4e5b33,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x551429[_0x111faf] = _0x4e5b33;
  }
  return _0x551429;
}
var zb = function (_0xe09607) {
  Lb(_0x3f18ca, _0xe09607);
  var _0x14fbde = Ab(_0x3f18ca);
  function _0x3f18ca() {
    var _0x17ce89;
    Eb(this, _0x3f18ca);
    for (var _0x5cc593 = arguments.length, _0x5f4032 = new Array(_0x5cc593), _0x10b110 = 0; _0x10b110 < _0x5cc593; _0x10b110++) {
      _0x5f4032[_0x10b110] = arguments[_0x10b110];
    }
    _0x17ce89 = _0x14fbde.call.apply(_0x14fbde, [this].concat(_0x5f4032));
    pc(fo(_0x17ce89), "priority", 90);
    pc(fo(_0x17ce89), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
    return _0x17ce89;
  }
  Ib(_0x3f18ca, [{
    key: "parse",
    value: function (_0x5c6c57, _0x2e2251, _0x1b9d33, _0xd4879b) {
      function _0x3693ca(_0x4c2dcf) {
        var _0x4d77ec = Math.floor((_0x4c2dcf - 1) / 7) * 7;
        return (_0x4c2dcf + _0xd4879b.weekStartsOn + 6) % 7 + _0x4d77ec;
      }
      switch (_0x2e2251) {
        case "c":
        case "cc":
          return q(W(_0x2e2251.length, _0x5c6c57), _0x3693ca);
        case "co":
          return q(_0x1b9d33.ordinalNumber(_0x5c6c57, {
            unit: "day"
          }), _0x3693ca);
        case "ccc":
          return _0x1b9d33.day(_0x5c6c57, {
            width: "abbreviated",
            context: "standalone"
          }) || _0x1b9d33.day(_0x5c6c57, {
            width: "short",
            context: "standalone"
          }) || _0x1b9d33.day(_0x5c6c57, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return _0x1b9d33.day(_0x5c6c57, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return _0x1b9d33.day(_0x5c6c57, {
            width: "short",
            context: "standalone"
          }) || _0x1b9d33.day(_0x5c6c57, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return _0x1b9d33.day(_0x5c6c57, {
            width: "wide",
            context: "standalone"
          }) || _0x1b9d33.day(_0x5c6c57, {
            width: "abbreviated",
            context: "standalone"
          }) || _0x1b9d33.day(_0x5c6c57, {
            width: "short",
            context: "standalone"
          }) || _0x1b9d33.day(_0x5c6c57, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function (_0x3e3846, _0x580ca1) {
      return _0x580ca1 >= 0 && _0x580ca1 <= 6;
    }
  }, {
    key: "set",
    value: function (_0x5cc8e1, _0x3fa789, _0x324a7a, _0x49c199) {
      _0x5cc8e1 = ps(_0x5cc8e1, _0x324a7a, _0x49c199);
      _0x5cc8e1.setUTCHours(0, 0, 0, 0);
      return _0x5cc8e1;
    }
  }]);
  return _0x3f18ca;
}(R);
function Bb(_0xcd9ced, _0x5226cb) {
  w(2, arguments);
  var _0x4f5c03 = F(_0x5226cb);
  if (_0x4f5c03 % 7 === 0) {
    _0x4f5c03 = _0x4f5c03 - 7;
  }
  var _0x34a6c6 = 1;
  var _0x4acc93 = P(_0xcd9ced);
  var _0xb5fb55 = _0x4acc93.getUTCDay();
  var _0x721a97 = _0x4f5c03 % 7;
  var _0x3a1d00 = (_0x721a97 + 7) % 7;
  var _0xc12757 = (_0x3a1d00 < _0x34a6c6 ? 7 : 0) + _0x4f5c03 - _0xb5fb55;
  _0x4acc93.setUTCDate(_0x4acc93.getUTCDate() + _0xc12757);
  return _0x4acc93;
}
function In(_0x2aec05) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    In = function (_0x529540) {
      return typeof _0x529540;
    };
  } else {
    In = function (_0x1ba48d) {
      if (_0x1ba48d && typeof Symbol == "function" && _0x1ba48d.constructor === Symbol && _0x1ba48d !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x1ba48d;
      }
    };
  }
  return In(_0x2aec05);
}
function jb(_0x4813e4, _0x3cdb48) {
  if (!(_0x4813e4 instanceof _0x3cdb48)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function gc(_0x52850e, _0x1b1fd0) {
  for (var _0x536361 = 0; _0x536361 < _0x1b1fd0.length; _0x536361++) {
    var _0xc61c59 = _0x1b1fd0[_0x536361];
    _0xc61c59.enumerable = _0xc61c59.enumerable || false;
    _0xc61c59.configurable = true;
    if ("value" in _0xc61c59) {
      _0xc61c59.writable = true;
    }
    Object.defineProperty(_0x52850e, _0xc61c59.key, _0xc61c59);
  }
}
function Wb(_0x3f8248, _0x16f8e4, _0x3e6616) {
  if (_0x16f8e4) {
    gc(_0x3f8248.prototype, _0x16f8e4);
  }
  if (_0x3e6616) {
    gc(_0x3f8248, _0x3e6616);
  }
  return _0x3f8248;
}
function Ub(_0x3b1dcb, _0x15d254) {
  if (typeof _0x15d254 != "function" && _0x15d254 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x3b1dcb.prototype = Object.create(_0x15d254 && _0x15d254.prototype, {
    constructor: {
      value: _0x3b1dcb,
      writable: true,
      configurable: true
    }
  });
  if (_0x15d254) {
    ho(_0x3b1dcb, _0x15d254);
  }
}
function ho(_0x545ff6, _0x4d51ac) {
  ho = Object.setPrototypeOf || function (_0xfdc2e3, _0x16ba3c) {
    _0xfdc2e3.__proto__ = _0x16ba3c;
    return _0xfdc2e3;
  };
  return ho(_0x545ff6, _0x4d51ac);
}
function Hb(_0x17d9f8) {
  var _0x57a71c = Vb();
  return function () {
    var _0x4f260c = Lr(_0x17d9f8);
    var _0x5c8951;
    if (_0x57a71c) {
      var _0x4ecd75 = Lr(this).constructor;
      _0x5c8951 = Reflect.construct(_0x4f260c, arguments, _0x4ecd75);
    } else {
      _0x5c8951 = _0x4f260c.apply(this, arguments);
    }
    return Yb(this, _0x5c8951);
  };
}
function Yb(_0x5a6fc1, _0x4ec393) {
  if (_0x4ec393 && (In(_0x4ec393) === "object" || typeof _0x4ec393 == "function")) {
    return _0x4ec393;
  } else {
    return po(_0x5a6fc1);
  }
}
function po(_0x261015) {
  if (_0x261015 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x261015;
}
function Vb() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Lr(_0x4c1a6b) {
  Lr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x315379) {
    return _0x315379.__proto__ || Object.getPrototypeOf(_0x315379);
  };
  return Lr(_0x4c1a6b);
}
function yc(_0x197593, _0x379ff4, _0x3d29cc) {
  if (_0x379ff4 in _0x197593) {
    Object.defineProperty(_0x197593, _0x379ff4, {
      value: _0x3d29cc,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x197593[_0x379ff4] = _0x3d29cc;
  }
  return _0x197593;
}
var qb = function (_0x57e1e2) {
  Ub(_0x1ebf8e, _0x57e1e2);
  var _0x5b3d2a = Hb(_0x1ebf8e);
  function _0x1ebf8e() {
    var _0x289758;
    jb(this, _0x1ebf8e);
    for (var _0x711065 = arguments.length, _0x16fd32 = new Array(_0x711065), _0x1cbc0f = 0; _0x1cbc0f < _0x711065; _0x1cbc0f++) {
      _0x16fd32[_0x1cbc0f] = arguments[_0x1cbc0f];
    }
    _0x289758 = _0x5b3d2a.call.apply(_0x5b3d2a, [this].concat(_0x16fd32));
    yc(po(_0x289758), "priority", 90);
    yc(po(_0x289758), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
    return _0x289758;
  }
  Wb(_0x1ebf8e, [{
    key: "parse",
    value: function (_0x955089, _0x225aa4, _0x37a38b) {
      function _0x264bc3(_0x5e4cad) {
        if (_0x5e4cad === 0) {
          return 7;
        } else {
          return _0x5e4cad;
        }
      }
      switch (_0x225aa4) {
        case "i":
        case "ii":
          return W(_0x225aa4.length, _0x955089);
        case "io":
          return _0x37a38b.ordinalNumber(_0x955089, {
            unit: "day"
          });
        case "iii":
          return q(_0x37a38b.day(_0x955089, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x37a38b.day(_0x955089, {
            width: "short",
            context: "formatting"
          }) || _0x37a38b.day(_0x955089, {
            width: "narrow",
            context: "formatting"
          }), _0x264bc3);
        case "iiiii":
          return q(_0x37a38b.day(_0x955089, {
            width: "narrow",
            context: "formatting"
          }), _0x264bc3);
        case "iiiiii":
          return q(_0x37a38b.day(_0x955089, {
            width: "short",
            context: "formatting"
          }) || _0x37a38b.day(_0x955089, {
            width: "narrow",
            context: "formatting"
          }), _0x264bc3);
        case "iiii":
        default:
          return q(_0x37a38b.day(_0x955089, {
            width: "wide",
            context: "formatting"
          }) || _0x37a38b.day(_0x955089, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x37a38b.day(_0x955089, {
            width: "short",
            context: "formatting"
          }) || _0x37a38b.day(_0x955089, {
            width: "narrow",
            context: "formatting"
          }), _0x264bc3);
      }
    }
  }, {
    key: "validate",
    value: function (_0x453963, _0x1bdc23) {
      return _0x1bdc23 >= 1 && _0x1bdc23 <= 7;
    }
  }, {
    key: "set",
    value: function (_0xec82e6, _0x5bae2d, _0x25e471) {
      _0xec82e6 = Bb(_0xec82e6, _0x25e471);
      _0xec82e6.setUTCHours(0, 0, 0, 0);
      return _0xec82e6;
    }
  }]);
  return _0x1ebf8e;
}(R);
function Ln(_0x1ecb51) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Ln = function (_0x41d18b) {
      return typeof _0x41d18b;
    };
  } else {
    Ln = function (_0x673326) {
      if (_0x673326 && typeof Symbol == "function" && _0x673326.constructor === Symbol && _0x673326 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x673326;
      }
    };
  }
  return Ln(_0x1ecb51);
}
function Xb(_0x234ff0, _0x1da23c) {
  if (!(_0x234ff0 instanceof _0x1da23c)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function mc(_0x3be349, _0x17e5cd) {
  for (var _0x40087b = 0; _0x40087b < _0x17e5cd.length; _0x40087b++) {
    var _0x34109c = _0x17e5cd[_0x40087b];
    _0x34109c.enumerable = _0x34109c.enumerable || false;
    _0x34109c.configurable = true;
    if ("value" in _0x34109c) {
      _0x34109c.writable = true;
    }
    Object.defineProperty(_0x3be349, _0x34109c.key, _0x34109c);
  }
}
function Qb(_0x499c4b, _0x11fe08, _0x14f494) {
  if (_0x11fe08) {
    mc(_0x499c4b.prototype, _0x11fe08);
  }
  if (_0x14f494) {
    mc(_0x499c4b, _0x14f494);
  }
  return _0x499c4b;
}
function Gb(_0x330324, _0x4a6e04) {
  if (typeof _0x4a6e04 != "function" && _0x4a6e04 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x330324.prototype = Object.create(_0x4a6e04 && _0x4a6e04.prototype, {
    constructor: {
      value: _0x330324,
      writable: true,
      configurable: true
    }
  });
  if (_0x4a6e04) {
    go(_0x330324, _0x4a6e04);
  }
}
function go(_0xb8bd8f, _0x2ab821) {
  go = Object.setPrototypeOf || function (_0x53485c, _0x3dbdb8) {
    _0x53485c.__proto__ = _0x3dbdb8;
    return _0x53485c;
  };
  return go(_0xb8bd8f, _0x2ab821);
}
function Kb(_0x24f435) {
  var _0x25d72a = Jb();
  return function () {
    var _0x49f5ff = Ar(_0x24f435);
    var _0x17a599;
    if (_0x25d72a) {
      var _0xb6e167 = Ar(this).constructor;
      _0x17a599 = Reflect.construct(_0x49f5ff, arguments, _0xb6e167);
    } else {
      _0x17a599 = _0x49f5ff.apply(this, arguments);
    }
    return Zb(this, _0x17a599);
  };
}
function Zb(_0xdc925b, _0x269bb9) {
  if (_0x269bb9 && (Ln(_0x269bb9) === "object" || typeof _0x269bb9 == "function")) {
    return _0x269bb9;
  } else {
    return yo(_0xdc925b);
  }
}
function yo(_0xb62d6e) {
  if (_0xb62d6e === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0xb62d6e;
}
function Jb() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Ar(_0xa62a3c) {
  Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x35c32d) {
    return _0x35c32d.__proto__ || Object.getPrototypeOf(_0x35c32d);
  };
  return Ar(_0xa62a3c);
}
function bc(_0x28f3c9, _0xdb882c, _0x280b84) {
  if (_0xdb882c in _0x28f3c9) {
    Object.defineProperty(_0x28f3c9, _0xdb882c, {
      value: _0x280b84,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x28f3c9[_0xdb882c] = _0x280b84;
  }
  return _0x28f3c9;
}
var t_ = function (_0x4a4d1e) {
  Gb(_0x405822, _0x4a4d1e);
  var _0x21b1a8 = Kb(_0x405822);
  function _0x405822() {
    var _0x3a26d3;
    Xb(this, _0x405822);
    for (var _0x4292fa = arguments.length, _0x1cd8c2 = new Array(_0x4292fa), _0x4dd82a = 0; _0x4dd82a < _0x4292fa; _0x4dd82a++) {
      _0x1cd8c2[_0x4dd82a] = arguments[_0x4dd82a];
    }
    _0x3a26d3 = _0x21b1a8.call.apply(_0x21b1a8, [this].concat(_0x1cd8c2));
    bc(yo(_0x3a26d3), "priority", 80);
    bc(yo(_0x3a26d3), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
    return _0x3a26d3;
  }
  Qb(_0x405822, [{
    key: "parse",
    value: function (_0x57cccb, _0x4aed5e, _0x3fd90d) {
      switch (_0x4aed5e) {
        case "a":
        case "aa":
        case "aaa":
          return _0x3fd90d.dayPeriod(_0x57cccb, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x3fd90d.dayPeriod(_0x57cccb, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return _0x3fd90d.dayPeriod(_0x57cccb, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return _0x3fd90d.dayPeriod(_0x57cccb, {
            width: "wide",
            context: "formatting"
          }) || _0x3fd90d.dayPeriod(_0x57cccb, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x3fd90d.dayPeriod(_0x57cccb, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function (_0x54d871, _0x38e784, _0x2cd133) {
      _0x54d871.setUTCHours(ds(_0x2cd133), 0, 0, 0);
      return _0x54d871;
    }
  }]);
  return _0x405822;
}(R);
function An(_0x51fda1) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    An = function (_0x74c811) {
      return typeof _0x74c811;
    };
  } else {
    An = function (_0x530100) {
      if (_0x530100 && typeof Symbol == "function" && _0x530100.constructor === Symbol && _0x530100 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x530100;
      }
    };
  }
  return An(_0x51fda1);
}
function e_(_0x5a9534, _0x27de28) {
  if (!(_0x5a9534 instanceof _0x27de28)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _c(_0x379f5e, _0x5b190a) {
  for (var _0x3f25d9 = 0; _0x3f25d9 < _0x5b190a.length; _0x3f25d9++) {
    var _0x3cb3a2 = _0x5b190a[_0x3f25d9];
    _0x3cb3a2.enumerable = _0x3cb3a2.enumerable || false;
    _0x3cb3a2.configurable = true;
    if ("value" in _0x3cb3a2) {
      _0x3cb3a2.writable = true;
    }
    Object.defineProperty(_0x379f5e, _0x3cb3a2.key, _0x3cb3a2);
  }
}
function n_(_0x34b3bc, _0x44a97d, _0x513ccc) {
  if (_0x44a97d) {
    _c(_0x34b3bc.prototype, _0x44a97d);
  }
  if (_0x513ccc) {
    _c(_0x34b3bc, _0x513ccc);
  }
  return _0x34b3bc;
}
function r_(_0x66fd09, _0xc461f9) {
  if (typeof _0xc461f9 != "function" && _0xc461f9 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x66fd09.prototype = Object.create(_0xc461f9 && _0xc461f9.prototype, {
    constructor: {
      value: _0x66fd09,
      writable: true,
      configurable: true
    }
  });
  if (_0xc461f9) {
    mo(_0x66fd09, _0xc461f9);
  }
}
function mo(_0x2c52e1, _0x54c0b8) {
  mo = Object.setPrototypeOf || function (_0x13600c, _0x4aae09) {
    _0x13600c.__proto__ = _0x4aae09;
    return _0x13600c;
  };
  return mo(_0x2c52e1, _0x54c0b8);
}
function i_(_0x321e67) {
  var _0x4300d9 = s_();
  return function () {
    var _0xc4f2c1 = Nr(_0x321e67);
    var _0xe93d49;
    if (_0x4300d9) {
      var _0x4932a6 = Nr(this).constructor;
      _0xe93d49 = Reflect.construct(_0xc4f2c1, arguments, _0x4932a6);
    } else {
      _0xe93d49 = _0xc4f2c1.apply(this, arguments);
    }
    return o_(this, _0xe93d49);
  };
}
function o_(_0xb16884, _0x111e69) {
  if (_0x111e69 && (An(_0x111e69) === "object" || typeof _0x111e69 == "function")) {
    return _0x111e69;
  } else {
    return bo(_0xb16884);
  }
}
function bo(_0x3d4c42) {
  if (_0x3d4c42 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x3d4c42;
}
function s_() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Nr(_0x522a18) {
  Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0xcb806e) {
    return _0xcb806e.__proto__ || Object.getPrototypeOf(_0xcb806e);
  };
  return Nr(_0x522a18);
}
function vc(_0x1d7fcf, _0x4bf9e8, _0x405a53) {
  if (_0x4bf9e8 in _0x1d7fcf) {
    Object.defineProperty(_0x1d7fcf, _0x4bf9e8, {
      value: _0x405a53,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x1d7fcf[_0x4bf9e8] = _0x405a53;
  }
  return _0x1d7fcf;
}
var a_ = function (_0x40c329) {
  r_(_0x1fc258, _0x40c329);
  var _0x484bf5 = i_(_0x1fc258);
  function _0x1fc258() {
    var _0xe7d182;
    e_(this, _0x1fc258);
    for (var _0x45d566 = arguments.length, _0x3203b3 = new Array(_0x45d566), _0x3cb5b2 = 0; _0x3cb5b2 < _0x45d566; _0x3cb5b2++) {
      _0x3203b3[_0x3cb5b2] = arguments[_0x3cb5b2];
    }
    _0xe7d182 = _0x484bf5.call.apply(_0x484bf5, [this].concat(_0x3203b3));
    vc(bo(_0xe7d182), "priority", 80);
    vc(bo(_0xe7d182), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
    return _0xe7d182;
  }
  n_(_0x1fc258, [{
    key: "parse",
    value: function (_0x55e4d0, _0x509691, _0xa13564) {
      switch (_0x509691) {
        case "b":
        case "bb":
        case "bbb":
          return _0xa13564.dayPeriod(_0x55e4d0, {
            width: "abbreviated",
            context: "formatting"
          }) || _0xa13564.dayPeriod(_0x55e4d0, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return _0xa13564.dayPeriod(_0x55e4d0, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return _0xa13564.dayPeriod(_0x55e4d0, {
            width: "wide",
            context: "formatting"
          }) || _0xa13564.dayPeriod(_0x55e4d0, {
            width: "abbreviated",
            context: "formatting"
          }) || _0xa13564.dayPeriod(_0x55e4d0, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function (_0x32d8e6, _0x3c875b, _0xf46174) {
      _0x32d8e6.setUTCHours(ds(_0xf46174), 0, 0, 0);
      return _0x32d8e6;
    }
  }]);
  return _0x1fc258;
}(R);
function Nn(_0x395021) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Nn = function (_0x1573eb) {
      return typeof _0x1573eb;
    };
  } else {
    Nn = function (_0x27d47d) {
      if (_0x27d47d && typeof Symbol == "function" && _0x27d47d.constructor === Symbol && _0x27d47d !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x27d47d;
      }
    };
  }
  return Nn(_0x395021);
}
function c_(_0x2f8f71, _0x2e1096) {
  if (!(_0x2f8f71 instanceof _0x2e1096)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function wc(_0x211368, _0x1342d2) {
  for (var _0x508d2d = 0; _0x508d2d < _0x1342d2.length; _0x508d2d++) {
    var _0x583e08 = _0x1342d2[_0x508d2d];
    _0x583e08.enumerable = _0x583e08.enumerable || false;
    _0x583e08.configurable = true;
    if ("value" in _0x583e08) {
      _0x583e08.writable = true;
    }
    Object.defineProperty(_0x211368, _0x583e08.key, _0x583e08);
  }
}
function u_(_0x54d012, _0x2e57be, _0x1e8f29) {
  if (_0x2e57be) {
    wc(_0x54d012.prototype, _0x2e57be);
  }
  if (_0x1e8f29) {
    wc(_0x54d012, _0x1e8f29);
  }
  return _0x54d012;
}
function l_(_0x13e5af, _0x29cd92) {
  if (typeof _0x29cd92 != "function" && _0x29cd92 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x13e5af.prototype = Object.create(_0x29cd92 && _0x29cd92.prototype, {
    constructor: {
      value: _0x13e5af,
      writable: true,
      configurable: true
    }
  });
  if (_0x29cd92) {
    _o(_0x13e5af, _0x29cd92);
  }
}
function _o(_0x51f7b8, _0x2c337b) {
  _o = Object.setPrototypeOf || function (_0x5c75a8, _0x23207b) {
    _0x5c75a8.__proto__ = _0x23207b;
    return _0x5c75a8;
  };
  return _o(_0x51f7b8, _0x2c337b);
}
function f_(_0x50b1b3) {
  var _0x2c8718 = d_();
  return function () {
    var _0x588e41 = Fr(_0x50b1b3);
    var _0x296487;
    if (_0x2c8718) {
      var _0x1f1679 = Fr(this).constructor;
      _0x296487 = Reflect.construct(_0x588e41, arguments, _0x1f1679);
    } else {
      _0x296487 = _0x588e41.apply(this, arguments);
    }
    return h_(this, _0x296487);
  };
}
function h_(_0x47581d, _0x36fde2) {
  if (_0x36fde2 && (Nn(_0x36fde2) === "object" || typeof _0x36fde2 == "function")) {
    return _0x36fde2;
  } else {
    return vo(_0x47581d);
  }
}
function vo(_0x428bac) {
  if (_0x428bac === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x428bac;
}
function d_() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Fr(_0x1261a5) {
  Fr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x14e2f9) {
    return _0x14e2f9.__proto__ || Object.getPrototypeOf(_0x14e2f9);
  };
  return Fr(_0x1261a5);
}
function xc(_0x23e363, _0x20fa4f, _0x4baa4d) {
  if (_0x20fa4f in _0x23e363) {
    Object.defineProperty(_0x23e363, _0x20fa4f, {
      value: _0x4baa4d,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x23e363[_0x20fa4f] = _0x4baa4d;
  }
  return _0x23e363;
}
var p_ = function (_0x3f756b) {
  l_(_0x289fde, _0x3f756b);
  var _0x3d4e23 = f_(_0x289fde);
  function _0x289fde() {
    var _0x405910;
    c_(this, _0x289fde);
    for (var _0x4a05a8 = arguments.length, _0x35084b = new Array(_0x4a05a8), _0x27cb38 = 0; _0x27cb38 < _0x4a05a8; _0x27cb38++) {
      _0x35084b[_0x27cb38] = arguments[_0x27cb38];
    }
    _0x405910 = _0x3d4e23.call.apply(_0x3d4e23, [this].concat(_0x35084b));
    xc(vo(_0x405910), "priority", 80);
    xc(vo(_0x405910), "incompatibleTokens", ["a", "b", "t", "T"]);
    return _0x405910;
  }
  u_(_0x289fde, [{
    key: "parse",
    value: function (_0x115aab, _0x3e2f46, _0x1e381d) {
      switch (_0x3e2f46) {
        case "B":
        case "BB":
        case "BBB":
          return _0x1e381d.dayPeriod(_0x115aab, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x1e381d.dayPeriod(_0x115aab, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return _0x1e381d.dayPeriod(_0x115aab, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return _0x1e381d.dayPeriod(_0x115aab, {
            width: "wide",
            context: "formatting"
          }) || _0x1e381d.dayPeriod(_0x115aab, {
            width: "abbreviated",
            context: "formatting"
          }) || _0x1e381d.dayPeriod(_0x115aab, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function (_0x43b8f8, _0x176893, _0x1e9f38) {
      _0x43b8f8.setUTCHours(ds(_0x1e9f38), 0, 0, 0);
      return _0x43b8f8;
    }
  }]);
  return _0x289fde;
}(R);
function Fn(_0x1c2dd8) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Fn = function (_0x502d55) {
      return typeof _0x502d55;
    };
  } else {
    Fn = function (_0x400202) {
      if (_0x400202 && typeof Symbol == "function" && _0x400202.constructor === Symbol && _0x400202 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x400202;
      }
    };
  }
  return Fn(_0x1c2dd8);
}
function g_(_0x3bf9ee, _0x19225e) {
  if (!(_0x3bf9ee instanceof _0x19225e)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Oc(_0xae01a5, _0x1e0e74) {
  for (var _0x4666c8 = 0; _0x4666c8 < _0x1e0e74.length; _0x4666c8++) {
    var _0x1f81f4 = _0x1e0e74[_0x4666c8];
    _0x1f81f4.enumerable = _0x1f81f4.enumerable || false;
    _0x1f81f4.configurable = true;
    if ("value" in _0x1f81f4) {
      _0x1f81f4.writable = true;
    }
    Object.defineProperty(_0xae01a5, _0x1f81f4.key, _0x1f81f4);
  }
}
function y_(_0x440c19, _0x34630b, _0x131092) {
  if (_0x34630b) {
    Oc(_0x440c19.prototype, _0x34630b);
  }
  if (_0x131092) {
    Oc(_0x440c19, _0x131092);
  }
  return _0x440c19;
}
function m_(_0x33ebbb, _0x25e265) {
  if (typeof _0x25e265 != "function" && _0x25e265 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x33ebbb.prototype = Object.create(_0x25e265 && _0x25e265.prototype, {
    constructor: {
      value: _0x33ebbb,
      writable: true,
      configurable: true
    }
  });
  if (_0x25e265) {
    wo(_0x33ebbb, _0x25e265);
  }
}
function wo(_0x331c0d, _0x56c330) {
  wo = Object.setPrototypeOf || function (_0x29d14f, _0x7b2cfd) {
    _0x29d14f.__proto__ = _0x7b2cfd;
    return _0x29d14f;
  };
  return wo(_0x331c0d, _0x56c330);
}
function b_(_0x3c6645) {
  var _0x3c516d = v_();
  return function () {
    var _0x5b50ac = zr(_0x3c6645);
    var _0x4063d9;
    if (_0x3c516d) {
      var _0x1d6651 = zr(this).constructor;
      _0x4063d9 = Reflect.construct(_0x5b50ac, arguments, _0x1d6651);
    } else {
      _0x4063d9 = _0x5b50ac.apply(this, arguments);
    }
    return __(this, _0x4063d9);
  };
}
function __(_0x408cf5, _0x163b23) {
  if (_0x163b23 && (Fn(_0x163b23) === "object" || typeof _0x163b23 == "function")) {
    return _0x163b23;
  } else {
    return xo(_0x408cf5);
  }
}
function xo(_0x1ceea2) {
  if (_0x1ceea2 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x1ceea2;
}
function v_() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function zr(_0x20799f) {
  zr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x1ecb15) {
    return _0x1ecb15.__proto__ || Object.getPrototypeOf(_0x1ecb15);
  };
  return zr(_0x20799f);
}
function Pc(_0x57cf8a, _0x3efcae, _0xa5ae38) {
  if (_0x3efcae in _0x57cf8a) {
    Object.defineProperty(_0x57cf8a, _0x3efcae, {
      value: _0xa5ae38,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x57cf8a[_0x3efcae] = _0xa5ae38;
  }
  return _0x57cf8a;
}
var w_ = function (_0x24c9c6) {
  m_(_0xcff15e, _0x24c9c6);
  var _0xe2fde9 = b_(_0xcff15e);
  function _0xcff15e() {
    var _0x41f7a5;
    g_(this, _0xcff15e);
    for (var _0x35074f = arguments.length, _0x137474 = new Array(_0x35074f), _0x55ceb5 = 0; _0x55ceb5 < _0x35074f; _0x55ceb5++) {
      _0x137474[_0x55ceb5] = arguments[_0x55ceb5];
    }
    _0x41f7a5 = _0xe2fde9.call.apply(_0xe2fde9, [this].concat(_0x137474));
    Pc(xo(_0x41f7a5), "priority", 70);
    Pc(xo(_0x41f7a5), "incompatibleTokens", ["H", "K", "k", "t", "T"]);
    return _0x41f7a5;
  }
  y_(_0xcff15e, [{
    key: "parse",
    value: function (_0x2dce5f, _0x5c5fa7, _0x3c0e9a) {
      switch (_0x5c5fa7) {
        case "h":
          return B(V.hour12h, _0x2dce5f);
        case "ho":
          return _0x3c0e9a.ordinalNumber(_0x2dce5f, {
            unit: "hour"
          });
        default:
          return W(_0x5c5fa7.length, _0x2dce5f);
      }
    }
  }, {
    key: "validate",
    value: function (_0x3f0982, _0x5dabf6) {
      return _0x5dabf6 >= 1 && _0x5dabf6 <= 12;
    }
  }, {
    key: "set",
    value: function (_0x2094fa, _0x241edf, _0x418836) {
      var _0x316338 = _0x2094fa.getUTCHours() >= 12;
      if (_0x316338 && _0x418836 < 12) {
        _0x2094fa.setUTCHours(_0x418836 + 12, 0, 0, 0);
      } else if (!_0x316338 && _0x418836 === 12) {
        _0x2094fa.setUTCHours(0, 0, 0, 0);
      } else {
        _0x2094fa.setUTCHours(_0x418836, 0, 0, 0);
      }
      return _0x2094fa;
    }
  }]);
  return _0xcff15e;
}(R);
function zn(_0x1f200c) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    zn = function (_0x1de345) {
      return typeof _0x1de345;
    };
  } else {
    zn = function (_0x449d19) {
      if (_0x449d19 && typeof Symbol == "function" && _0x449d19.constructor === Symbol && _0x449d19 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x449d19;
      }
    };
  }
  return zn(_0x1f200c);
}
function x_(_0x3e5cc2, _0x49b521) {
  if (!(_0x3e5cc2 instanceof _0x49b521)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Sc(_0x57d34b, _0x1065e3) {
  for (var _0x58aa29 = 0; _0x58aa29 < _0x1065e3.length; _0x58aa29++) {
    var _0x3631e0 = _0x1065e3[_0x58aa29];
    _0x3631e0.enumerable = _0x3631e0.enumerable || false;
    _0x3631e0.configurable = true;
    if ("value" in _0x3631e0) {
      _0x3631e0.writable = true;
    }
    Object.defineProperty(_0x57d34b, _0x3631e0.key, _0x3631e0);
  }
}
function O_(_0xf8ce0f, _0xf6ab3f, _0x23a21b) {
  if (_0xf6ab3f) {
    Sc(_0xf8ce0f.prototype, _0xf6ab3f);
  }
  if (_0x23a21b) {
    Sc(_0xf8ce0f, _0x23a21b);
  }
  return _0xf8ce0f;
}
function P_(_0xee92d3, _0x563465) {
  if (typeof _0x563465 != "function" && _0x563465 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0xee92d3.prototype = Object.create(_0x563465 && _0x563465.prototype, {
    constructor: {
      value: _0xee92d3,
      writable: true,
      configurable: true
    }
  });
  if (_0x563465) {
    Oo(_0xee92d3, _0x563465);
  }
}
function Oo(_0xc8605f, _0x521bf8) {
  Oo = Object.setPrototypeOf || function (_0x3bbdda, _0x9bdf72) {
    _0x3bbdda.__proto__ = _0x9bdf72;
    return _0x3bbdda;
  };
  return Oo(_0xc8605f, _0x521bf8);
}
function S_(_0x2c68e9) {
  var _0x11b28d = M_();
  return function () {
    var _0x291b7f = Br(_0x2c68e9);
    var _0x1c21c6;
    if (_0x11b28d) {
      var _0x1c7577 = Br(this).constructor;
      _0x1c21c6 = Reflect.construct(_0x291b7f, arguments, _0x1c7577);
    } else {
      _0x1c21c6 = _0x291b7f.apply(this, arguments);
    }
    return T_(this, _0x1c21c6);
  };
}
function T_(_0x1e6605, _0x255826) {
  if (_0x255826 && (zn(_0x255826) === "object" || typeof _0x255826 == "function")) {
    return _0x255826;
  } else {
    return Po(_0x1e6605);
  }
}
function Po(_0x60e3a7) {
  if (_0x60e3a7 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x60e3a7;
}
function M_() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Br(_0x55af2a) {
  Br = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x30565f) {
    return _0x30565f.__proto__ || Object.getPrototypeOf(_0x30565f);
  };
  return Br(_0x55af2a);
}
function Tc(_0x4dd50f, _0x31b32c, _0x7ceb3d) {
  if (_0x31b32c in _0x4dd50f) {
    Object.defineProperty(_0x4dd50f, _0x31b32c, {
      value: _0x7ceb3d,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x4dd50f[_0x31b32c] = _0x7ceb3d;
  }
  return _0x4dd50f;
}
var k_ = function (_0x3d8304) {
  P_(_0x8d3f43, _0x3d8304);
  var _0x3b858d = S_(_0x8d3f43);
  function _0x8d3f43() {
    var _0x5f3655;
    x_(this, _0x8d3f43);
    for (var _0x899ae4 = arguments.length, _0x4ca158 = new Array(_0x899ae4), _0x39ac56 = 0; _0x39ac56 < _0x899ae4; _0x39ac56++) {
      _0x4ca158[_0x39ac56] = arguments[_0x39ac56];
    }
    _0x5f3655 = _0x3b858d.call.apply(_0x3b858d, [this].concat(_0x4ca158));
    Tc(Po(_0x5f3655), "priority", 70);
    Tc(Po(_0x5f3655), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
    return _0x5f3655;
  }
  O_(_0x8d3f43, [{
    key: "parse",
    value: function (_0x26f5e3, _0x25e798, _0x5cca44) {
      switch (_0x25e798) {
        case "H":
          return B(V.hour23h, _0x26f5e3);
        case "Ho":
          return _0x5cca44.ordinalNumber(_0x26f5e3, {
            unit: "hour"
          });
        default:
          return W(_0x25e798.length, _0x26f5e3);
      }
    }
  }, {
    key: "validate",
    value: function (_0x1efcba, _0x1076bc) {
      return _0x1076bc >= 0 && _0x1076bc <= 23;
    }
  }, {
    key: "set",
    value: function (_0x4b047d, _0x10eb46, _0x5b233b) {
      _0x4b047d.setUTCHours(_0x5b233b, 0, 0, 0);
      return _0x4b047d;
    }
  }]);
  return _0x8d3f43;
}(R);
function Bn(_0x5e820a) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Bn = function (_0x540daf) {
      return typeof _0x540daf;
    };
  } else {
    Bn = function (_0x4bbf1a) {
      if (_0x4bbf1a && typeof Symbol == "function" && _0x4bbf1a.constructor === Symbol && _0x4bbf1a !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x4bbf1a;
      }
    };
  }
  return Bn(_0x5e820a);
}
function D_(_0x414514, _0x3bdc85) {
  if (!(_0x414514 instanceof _0x3bdc85)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Mc(_0x52ce23, _0x479af4) {
  for (var _0x1754f1 = 0; _0x1754f1 < _0x479af4.length; _0x1754f1++) {
    var _0x1333a2 = _0x479af4[_0x1754f1];
    _0x1333a2.enumerable = _0x1333a2.enumerable || false;
    _0x1333a2.configurable = true;
    if ("value" in _0x1333a2) {
      _0x1333a2.writable = true;
    }
    Object.defineProperty(_0x52ce23, _0x1333a2.key, _0x1333a2);
  }
}
function $_(_0x1c43cf, _0x254d2b, _0x28e1e5) {
  if (_0x254d2b) {
    Mc(_0x1c43cf.prototype, _0x254d2b);
  }
  if (_0x28e1e5) {
    Mc(_0x1c43cf, _0x28e1e5);
  }
  return _0x1c43cf;
}
function R_(_0x10a12b, _0x49db73) {
  if (typeof _0x49db73 != "function" && _0x49db73 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x10a12b.prototype = Object.create(_0x49db73 && _0x49db73.prototype, {
    constructor: {
      value: _0x10a12b,
      writable: true,
      configurable: true
    }
  });
  if (_0x49db73) {
    So(_0x10a12b, _0x49db73);
  }
}
function So(_0x3a73fc, _0x55cc2e) {
  So = Object.setPrototypeOf || function (_0x50bb97, _0x2722b2) {
    _0x50bb97.__proto__ = _0x2722b2;
    return _0x50bb97;
  };
  return So(_0x3a73fc, _0x55cc2e);
}
function C_(_0x2a9f05) {
  var _0x4ac8a3 = I_();
  return function () {
    var _0x37d789 = jr(_0x2a9f05);
    var _0x3edc8a;
    if (_0x4ac8a3) {
      var _0x24b900 = jr(this).constructor;
      _0x3edc8a = Reflect.construct(_0x37d789, arguments, _0x24b900);
    } else {
      _0x3edc8a = _0x37d789.apply(this, arguments);
    }
    return E_(this, _0x3edc8a);
  };
}
function E_(_0x56ffb8, _0x323898) {
  if (_0x323898 && (Bn(_0x323898) === "object" || typeof _0x323898 == "function")) {
    return _0x323898;
  } else {
    return To(_0x56ffb8);
  }
}
function To(_0xea0ea7) {
  if (_0xea0ea7 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0xea0ea7;
}
function I_() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function jr(_0x5d2fb5) {
  jr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x2be126) {
    return _0x2be126.__proto__ || Object.getPrototypeOf(_0x2be126);
  };
  return jr(_0x5d2fb5);
}
function kc(_0x3227bd, _0x48819b, _0x1e1452) {
  if (_0x48819b in _0x3227bd) {
    Object.defineProperty(_0x3227bd, _0x48819b, {
      value: _0x1e1452,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x3227bd[_0x48819b] = _0x1e1452;
  }
  return _0x3227bd;
}
var L_ = function (_0xb8c779) {
  R_(_0x4e7c42, _0xb8c779);
  var _0x12d851 = C_(_0x4e7c42);
  function _0x4e7c42() {
    var _0x568747;
    D_(this, _0x4e7c42);
    for (var _0x5c881d = arguments.length, _0x5d4088 = new Array(_0x5c881d), _0x334826 = 0; _0x334826 < _0x5c881d; _0x334826++) {
      _0x5d4088[_0x334826] = arguments[_0x334826];
    }
    _0x568747 = _0x12d851.call.apply(_0x12d851, [this].concat(_0x5d4088));
    kc(To(_0x568747), "priority", 70);
    kc(To(_0x568747), "incompatibleTokens", ["h", "H", "k", "t", "T"]);
    return _0x568747;
  }
  $_(_0x4e7c42, [{
    key: "parse",
    value: function (_0x253770, _0x522f5d, _0x11e166) {
      switch (_0x522f5d) {
        case "K":
          return B(V.hour11h, _0x253770);
        case "Ko":
          return _0x11e166.ordinalNumber(_0x253770, {
            unit: "hour"
          });
        default:
          return W(_0x522f5d.length, _0x253770);
      }
    }
  }, {
    key: "validate",
    value: function (_0x57c11c, _0x4eb889) {
      return _0x4eb889 >= 0 && _0x4eb889 <= 11;
    }
  }, {
    key: "set",
    value: function (_0x370873, _0x2b336c, _0x2b372c) {
      var _0x1d1b80 = _0x370873.getUTCHours() >= 12;
      if (_0x1d1b80 && _0x2b372c < 12) {
        _0x370873.setUTCHours(_0x2b372c + 12, 0, 0, 0);
      } else {
        _0x370873.setUTCHours(_0x2b372c, 0, 0, 0);
      }
      return _0x370873;
    }
  }]);
  return _0x4e7c42;
}(R);
function jn(_0x172557) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    jn = function (_0x2866db) {
      return typeof _0x2866db;
    };
  } else {
    jn = function (_0x176e00) {
      if (_0x176e00 && typeof Symbol == "function" && _0x176e00.constructor === Symbol && _0x176e00 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x176e00;
      }
    };
  }
  return jn(_0x172557);
}
function A_(_0x267b1f, _0x413727) {
  if (!(_0x267b1f instanceof _0x413727)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Dc(_0x22e5d2, _0x35d618) {
  for (var _0x35806d = 0; _0x35806d < _0x35d618.length; _0x35806d++) {
    var _0x491cd0 = _0x35d618[_0x35806d];
    _0x491cd0.enumerable = _0x491cd0.enumerable || false;
    _0x491cd0.configurable = true;
    if ("value" in _0x491cd0) {
      _0x491cd0.writable = true;
    }
    Object.defineProperty(_0x22e5d2, _0x491cd0.key, _0x491cd0);
  }
}
function N_(_0xe10bd4, _0x598f06, _0x34836f) {
  if (_0x598f06) {
    Dc(_0xe10bd4.prototype, _0x598f06);
  }
  if (_0x34836f) {
    Dc(_0xe10bd4, _0x34836f);
  }
  return _0xe10bd4;
}
function F_(_0x5dd9ec, _0x295c87) {
  if (typeof _0x295c87 != "function" && _0x295c87 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x5dd9ec.prototype = Object.create(_0x295c87 && _0x295c87.prototype, {
    constructor: {
      value: _0x5dd9ec,
      writable: true,
      configurable: true
    }
  });
  if (_0x295c87) {
    Mo(_0x5dd9ec, _0x295c87);
  }
}
function Mo(_0x2ed191, _0x20cac2) {
  Mo = Object.setPrototypeOf || function (_0x395072, _0x438490) {
    _0x395072.__proto__ = _0x438490;
    return _0x395072;
  };
  return Mo(_0x2ed191, _0x20cac2);
}
function z_(_0x3f39cd) {
  var _0x3fdbc3 = j_();
  return function () {
    var _0x38c2c1 = Wr(_0x3f39cd);
    var _0x4fdf81;
    if (_0x3fdbc3) {
      var _0x50fd7c = Wr(this).constructor;
      _0x4fdf81 = Reflect.construct(_0x38c2c1, arguments, _0x50fd7c);
    } else {
      _0x4fdf81 = _0x38c2c1.apply(this, arguments);
    }
    return B_(this, _0x4fdf81);
  };
}
function B_(_0xe01d25, _0x131b2d) {
  if (_0x131b2d && (jn(_0x131b2d) === "object" || typeof _0x131b2d == "function")) {
    return _0x131b2d;
  } else {
    return ko(_0xe01d25);
  }
}
function ko(_0x4cf9a9) {
  if (_0x4cf9a9 === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x4cf9a9;
}
function j_() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Wr(_0x2cff56) {
  Wr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x416073) {
    return _0x416073.__proto__ || Object.getPrototypeOf(_0x416073);
  };
  return Wr(_0x2cff56);
}
function $c(_0x10c9cd, _0x11f3f6, _0x3e70ac) {
  if (_0x11f3f6 in _0x10c9cd) {
    Object.defineProperty(_0x10c9cd, _0x11f3f6, {
      value: _0x3e70ac,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x10c9cd[_0x11f3f6] = _0x3e70ac;
  }
  return _0x10c9cd;
}
var W_ = function (_0x4b36e0) {
  F_(_0x535ccc, _0x4b36e0);
  var _0x44be63 = z_(_0x535ccc);
  function _0x535ccc() {
    var _0xaa3283;
    A_(this, _0x535ccc);
    for (var _0x410bfd = arguments.length, _0x2c15ea = new Array(_0x410bfd), _0x3fda28 = 0; _0x3fda28 < _0x410bfd; _0x3fda28++) {
      _0x2c15ea[_0x3fda28] = arguments[_0x3fda28];
    }
    _0xaa3283 = _0x44be63.call.apply(_0x44be63, [this].concat(_0x2c15ea));
    $c(ko(_0xaa3283), "priority", 70);
    $c(ko(_0xaa3283), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
    return _0xaa3283;
  }
  N_(_0x535ccc, [{
    key: "parse",
    value: function (_0x2301e0, _0x4816f6, _0x448d5e) {
      switch (_0x4816f6) {
        case "k":
          return B(V.hour24h, _0x2301e0);
        case "ko":
          return _0x448d5e.ordinalNumber(_0x2301e0, {
            unit: "hour"
          });
        default:
          return W(_0x4816f6.length, _0x2301e0);
      }
    }
  }, {
    key: "validate",
    value: function (_0x3e0760, _0x865c26) {
      return _0x865c26 >= 1 && _0x865c26 <= 24;
    }
  }, {
    key: "set",
    value: function (_0x51e51c, _0x1ac23a, _0x3f9fd6) {
      var _0x52104f = _0x3f9fd6 <= 24 ? _0x3f9fd6 % 24 : _0x3f9fd6;
      _0x51e51c.setUTCHours(_0x52104f, 0, 0, 0);
      return _0x51e51c;
    }
  }]);
  return _0x535ccc;
}(R);
function Wn(_0x111f77) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Wn = function (_0x3c07b1) {
      return typeof _0x3c07b1;
    };
  } else {
    Wn = function (_0x1c4480) {
      if (_0x1c4480 && typeof Symbol == "function" && _0x1c4480.constructor === Symbol && _0x1c4480 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x1c4480;
      }
    };
  }
  return Wn(_0x111f77);
}
function U_(_0x1fc38f, _0x790383) {
  if (!(_0x1fc38f instanceof _0x790383)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Rc(_0x504aca, _0x52a988) {
  for (var _0x2df410 = 0; _0x2df410 < _0x52a988.length; _0x2df410++) {
    var _0x34d64a = _0x52a988[_0x2df410];
    _0x34d64a.enumerable = _0x34d64a.enumerable || false;
    _0x34d64a.configurable = true;
    if ("value" in _0x34d64a) {
      _0x34d64a.writable = true;
    }
    Object.defineProperty(_0x504aca, _0x34d64a.key, _0x34d64a);
  }
}
function H_(_0x8b8693, _0x4e026b, _0x31ed48) {
  if (_0x4e026b) {
    Rc(_0x8b8693.prototype, _0x4e026b);
  }
  if (_0x31ed48) {
    Rc(_0x8b8693, _0x31ed48);
  }
  return _0x8b8693;
}
function Y_(_0xe49a50, _0x2cd104) {
  if (typeof _0x2cd104 != "function" && _0x2cd104 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0xe49a50.prototype = Object.create(_0x2cd104 && _0x2cd104.prototype, {
    constructor: {
      value: _0xe49a50,
      writable: true,
      configurable: true
    }
  });
  if (_0x2cd104) {
    Do(_0xe49a50, _0x2cd104);
  }
}
function Do(_0x5c6f0a, _0x250d3c) {
  Do = Object.setPrototypeOf || function (_0x561917, _0x4fee3f) {
    _0x561917.__proto__ = _0x4fee3f;
    return _0x561917;
  };
  return Do(_0x5c6f0a, _0x250d3c);
}
function V_(_0x41e3c2) {
  var _0x52e0e4 = X_();
  return function () {
    var _0x5a961b = Ur(_0x41e3c2);
    var _0x204fea;
    if (_0x52e0e4) {
      var _0x2c3ba3 = Ur(this).constructor;
      _0x204fea = Reflect.construct(_0x5a961b, arguments, _0x2c3ba3);
    } else {
      _0x204fea = _0x5a961b.apply(this, arguments);
    }
    return q_(this, _0x204fea);
  };
}
function q_(_0x9bb77c, _0xfddc08) {
  if (_0xfddc08 && (Wn(_0xfddc08) === "object" || typeof _0xfddc08 == "function")) {
    return _0xfddc08;
  } else {
    return $o(_0x9bb77c);
  }
}
function $o(_0x50776b) {
  if (_0x50776b === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x50776b;
}
function X_() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Ur(_0x120437) {
  Ur = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x1b9b6a) {
    return _0x1b9b6a.__proto__ || Object.getPrototypeOf(_0x1b9b6a);
  };
  return Ur(_0x120437);
}
function Cc(_0x5ab3b7, _0x5b6555, _0x1446f0) {
  if (_0x5b6555 in _0x5ab3b7) {
    Object.defineProperty(_0x5ab3b7, _0x5b6555, {
      value: _0x1446f0,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x5ab3b7[_0x5b6555] = _0x1446f0;
  }
  return _0x5ab3b7;
}
var Q_ = function (_0x336cfc) {
  Y_(_0x5f0de8, _0x336cfc);
  var _0x1ab124 = V_(_0x5f0de8);
  function _0x5f0de8() {
    var _0x479be9;
    U_(this, _0x5f0de8);
    for (var _0x89c8b0 = arguments.length, _0x49f5d9 = new Array(_0x89c8b0), _0x60efb1 = 0; _0x60efb1 < _0x89c8b0; _0x60efb1++) {
      _0x49f5d9[_0x60efb1] = arguments[_0x60efb1];
    }
    _0x479be9 = _0x1ab124.call.apply(_0x1ab124, [this].concat(_0x49f5d9));
    Cc($o(_0x479be9), "priority", 60);
    Cc($o(_0x479be9), "incompatibleTokens", ["t", "T"]);
    return _0x479be9;
  }
  H_(_0x5f0de8, [{
    key: "parse",
    value: function (_0xc7a28a, _0x3d9240, _0x773582) {
      switch (_0x3d9240) {
        case "m":
          return B(V.minute, _0xc7a28a);
        case "mo":
          return _0x773582.ordinalNumber(_0xc7a28a, {
            unit: "minute"
          });
        default:
          return W(_0x3d9240.length, _0xc7a28a);
      }
    }
  }, {
    key: "validate",
    value: function (_0x52f8d2, _0x68dfca) {
      return _0x68dfca >= 0 && _0x68dfca <= 59;
    }
  }, {
    key: "set",
    value: function (_0x4861d7, _0x1a6ce2, _0x881996) {
      _0x4861d7.setUTCMinutes(_0x881996, 0, 0);
      return _0x4861d7;
    }
  }]);
  return _0x5f0de8;
}(R);
function Un(_0x1fd6fe) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Un = function (_0x131b1c) {
      return typeof _0x131b1c;
    };
  } else {
    Un = function (_0x5e39ff) {
      if (_0x5e39ff && typeof Symbol == "function" && _0x5e39ff.constructor === Symbol && _0x5e39ff !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x5e39ff;
      }
    };
  }
  return Un(_0x1fd6fe);
}
function G_(_0x4aa541, _0x4c36ff) {
  if (!(_0x4aa541 instanceof _0x4c36ff)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Ec(_0x2ae1ae, _0x5cab0a) {
  for (var _0x4411cd = 0; _0x4411cd < _0x5cab0a.length; _0x4411cd++) {
    var _0xfb662f = _0x5cab0a[_0x4411cd];
    _0xfb662f.enumerable = _0xfb662f.enumerable || false;
    _0xfb662f.configurable = true;
    if ("value" in _0xfb662f) {
      _0xfb662f.writable = true;
    }
    Object.defineProperty(_0x2ae1ae, _0xfb662f.key, _0xfb662f);
  }
}
function K_(_0x5505f4, _0x39521a, _0x56dc0c) {
  if (_0x39521a) {
    Ec(_0x5505f4.prototype, _0x39521a);
  }
  if (_0x56dc0c) {
    Ec(_0x5505f4, _0x56dc0c);
  }
  return _0x5505f4;
}
function Z_(_0x28728b, _0x1d5146) {
  if (typeof _0x1d5146 != "function" && _0x1d5146 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x28728b.prototype = Object.create(_0x1d5146 && _0x1d5146.prototype, {
    constructor: {
      value: _0x28728b,
      writable: true,
      configurable: true
    }
  });
  if (_0x1d5146) {
    Ro(_0x28728b, _0x1d5146);
  }
}
function Ro(_0x5a0034, _0x3a7a63) {
  Ro = Object.setPrototypeOf || function (_0x5222e1, _0x4a55fe) {
    _0x5222e1.__proto__ = _0x4a55fe;
    return _0x5222e1;
  };
  return Ro(_0x5a0034, _0x3a7a63);
}
function J_(_0x1d1028) {
  var _0x34410c = ev();
  return function () {
    var _0x209c56 = Hr(_0x1d1028);
    var _0xbff32a;
    if (_0x34410c) {
      var _0x2cadb4 = Hr(this).constructor;
      _0xbff32a = Reflect.construct(_0x209c56, arguments, _0x2cadb4);
    } else {
      _0xbff32a = _0x209c56.apply(this, arguments);
    }
    return tv(this, _0xbff32a);
  };
}
function tv(_0x493d17, _0x14c70a) {
  if (_0x14c70a && (Un(_0x14c70a) === "object" || typeof _0x14c70a == "function")) {
    return _0x14c70a;
  } else {
    return Co(_0x493d17);
  }
}
function Co(_0x7c635b) {
  if (_0x7c635b === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x7c635b;
}
function ev() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Hr(_0x173d4e) {
  Hr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x54b02d) {
    return _0x54b02d.__proto__ || Object.getPrototypeOf(_0x54b02d);
  };
  return Hr(_0x173d4e);
}
function Ic(_0x58c986, _0x3d6ac0, _0x230dda) {
  if (_0x3d6ac0 in _0x58c986) {
    Object.defineProperty(_0x58c986, _0x3d6ac0, {
      value: _0x230dda,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x58c986[_0x3d6ac0] = _0x230dda;
  }
  return _0x58c986;
}
var nv = function (_0x37da29) {
  Z_(_0x3725ed, _0x37da29);
  var _0x1de433 = J_(_0x3725ed);
  function _0x3725ed() {
    var _0x19ce26;
    G_(this, _0x3725ed);
    for (var _0x265dd1 = arguments.length, _0x2c85ea = new Array(_0x265dd1), _0x59c24a = 0; _0x59c24a < _0x265dd1; _0x59c24a++) {
      _0x2c85ea[_0x59c24a] = arguments[_0x59c24a];
    }
    _0x19ce26 = _0x1de433.call.apply(_0x1de433, [this].concat(_0x2c85ea));
    Ic(Co(_0x19ce26), "priority", 50);
    Ic(Co(_0x19ce26), "incompatibleTokens", ["t", "T"]);
    return _0x19ce26;
  }
  K_(_0x3725ed, [{
    key: "parse",
    value: function (_0x10acec, _0x4e751a, _0x40b26d) {
      switch (_0x4e751a) {
        case "s":
          return B(V.second, _0x10acec);
        case "so":
          return _0x40b26d.ordinalNumber(_0x10acec, {
            unit: "second"
          });
        default:
          return W(_0x4e751a.length, _0x10acec);
      }
    }
  }, {
    key: "validate",
    value: function (_0x16ad3e, _0x1c5c6c) {
      return _0x1c5c6c >= 0 && _0x1c5c6c <= 59;
    }
  }, {
    key: "set",
    value: function (_0x49ded2, _0x53d0a3, _0xaece84) {
      _0x49ded2.setUTCSeconds(_0xaece84, 0);
      return _0x49ded2;
    }
  }]);
  return _0x3725ed;
}(R);
function Hn(_0x16735c) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Hn = function (_0x10e8ad) {
      return typeof _0x10e8ad;
    };
  } else {
    Hn = function (_0x37c877) {
      if (_0x37c877 && typeof Symbol == "function" && _0x37c877.constructor === Symbol && _0x37c877 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x37c877;
      }
    };
  }
  return Hn(_0x16735c);
}
function rv(_0x5345f0, _0x50230c) {
  if (!(_0x5345f0 instanceof _0x50230c)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Lc(_0xe7736d, _0x3e17d4) {
  for (var _0x3fc7bd = 0; _0x3fc7bd < _0x3e17d4.length; _0x3fc7bd++) {
    var _0x536424 = _0x3e17d4[_0x3fc7bd];
    _0x536424.enumerable = _0x536424.enumerable || false;
    _0x536424.configurable = true;
    if ("value" in _0x536424) {
      _0x536424.writable = true;
    }
    Object.defineProperty(_0xe7736d, _0x536424.key, _0x536424);
  }
}
function iv(_0x23d26f, _0xccbbd4, _0x434e04) {
  if (_0xccbbd4) {
    Lc(_0x23d26f.prototype, _0xccbbd4);
  }
  if (_0x434e04) {
    Lc(_0x23d26f, _0x434e04);
  }
  return _0x23d26f;
}
function ov(_0x677776, _0x407208) {
  if (typeof _0x407208 != "function" && _0x407208 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x677776.prototype = Object.create(_0x407208 && _0x407208.prototype, {
    constructor: {
      value: _0x677776,
      writable: true,
      configurable: true
    }
  });
  if (_0x407208) {
    Eo(_0x677776, _0x407208);
  }
}
function Eo(_0x367dd6, _0x5a65c7) {
  Eo = Object.setPrototypeOf || function (_0x458e55, _0x593397) {
    _0x458e55.__proto__ = _0x593397;
    return _0x458e55;
  };
  return Eo(_0x367dd6, _0x5a65c7);
}
function sv(_0x1f7a9a) {
  var _0x4f0610 = cv();
  return function () {
    var _0x3edcc7 = Yr(_0x1f7a9a);
    var _0x23ba8a;
    if (_0x4f0610) {
      var _0x285d04 = Yr(this).constructor;
      _0x23ba8a = Reflect.construct(_0x3edcc7, arguments, _0x285d04);
    } else {
      _0x23ba8a = _0x3edcc7.apply(this, arguments);
    }
    return av(this, _0x23ba8a);
  };
}
function av(_0x177a47, _0x3c98df) {
  if (_0x3c98df && (Hn(_0x3c98df) === "object" || typeof _0x3c98df == "function")) {
    return _0x3c98df;
  } else {
    return Io(_0x177a47);
  }
}
function Io(_0x2e4c7e) {
  if (_0x2e4c7e === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x2e4c7e;
}
function cv() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Yr(_0x174170) {
  Yr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0xc2ebc4) {
    return _0xc2ebc4.__proto__ || Object.getPrototypeOf(_0xc2ebc4);
  };
  return Yr(_0x174170);
}
function Ac(_0x39941c, _0x55fe9e, _0x20ab1d) {
  if (_0x55fe9e in _0x39941c) {
    Object.defineProperty(_0x39941c, _0x55fe9e, {
      value: _0x20ab1d,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x39941c[_0x55fe9e] = _0x20ab1d;
  }
  return _0x39941c;
}
var uv = function (_0xbcfd9b) {
  ov(_0x1ab371, _0xbcfd9b);
  var _0x4e2591 = sv(_0x1ab371);
  function _0x1ab371() {
    var _0x211517;
    rv(this, _0x1ab371);
    for (var _0x2c9e39 = arguments.length, _0x4bd26c = new Array(_0x2c9e39), _0x4d73ad = 0; _0x4d73ad < _0x2c9e39; _0x4d73ad++) {
      _0x4bd26c[_0x4d73ad] = arguments[_0x4d73ad];
    }
    _0x211517 = _0x4e2591.call.apply(_0x4e2591, [this].concat(_0x4bd26c));
    Ac(Io(_0x211517), "priority", 30);
    Ac(Io(_0x211517), "incompatibleTokens", ["t", "T"]);
    return _0x211517;
  }
  iv(_0x1ab371, [{
    key: "parse",
    value: function (_0x36ebe0, _0x2c78eb) {
      function _0x6ba68d(_0x415bb5) {
        return Math.floor(_0x415bb5 * Math.pow(10, -_0x2c78eb.length + 3));
      }
      return q(W(_0x2c78eb.length, _0x36ebe0), _0x6ba68d);
    }
  }, {
    key: "set",
    value: function (_0x43f2c5, _0x430bf7, _0x5a76c3) {
      _0x43f2c5.setUTCMilliseconds(_0x5a76c3);
      return _0x43f2c5;
    }
  }]);
  return _0x1ab371;
}(R);
function Yn(_0xd2c13e) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Yn = function (_0x2be246) {
      return typeof _0x2be246;
    };
  } else {
    Yn = function (_0x5447e6) {
      if (_0x5447e6 && typeof Symbol == "function" && _0x5447e6.constructor === Symbol && _0x5447e6 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x5447e6;
      }
    };
  }
  return Yn(_0xd2c13e);
}
function lv(_0x2cb8a9, _0x249f2e) {
  if (!(_0x2cb8a9 instanceof _0x249f2e)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Nc(_0x44f053, _0x370424) {
  for (var _0x38de44 = 0; _0x38de44 < _0x370424.length; _0x38de44++) {
    var _0x404ee1 = _0x370424[_0x38de44];
    _0x404ee1.enumerable = _0x404ee1.enumerable || false;
    _0x404ee1.configurable = true;
    if ("value" in _0x404ee1) {
      _0x404ee1.writable = true;
    }
    Object.defineProperty(_0x44f053, _0x404ee1.key, _0x404ee1);
  }
}
function fv(_0x56226a, _0x38d74c, _0x36c9da) {
  if (_0x38d74c) {
    Nc(_0x56226a.prototype, _0x38d74c);
  }
  if (_0x36c9da) {
    Nc(_0x56226a, _0x36c9da);
  }
  return _0x56226a;
}
function hv(_0x5b0a2e, _0x2ec261) {
  if (typeof _0x2ec261 != "function" && _0x2ec261 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x5b0a2e.prototype = Object.create(_0x2ec261 && _0x2ec261.prototype, {
    constructor: {
      value: _0x5b0a2e,
      writable: true,
      configurable: true
    }
  });
  if (_0x2ec261) {
    Lo(_0x5b0a2e, _0x2ec261);
  }
}
function Lo(_0x66034a, _0x1736da) {
  Lo = Object.setPrototypeOf || function (_0x1a120a, _0x34b713) {
    _0x1a120a.__proto__ = _0x34b713;
    return _0x1a120a;
  };
  return Lo(_0x66034a, _0x1736da);
}
function dv(_0x281926) {
  var _0x744ed2 = gv();
  return function () {
    var _0x31eb02 = Vr(_0x281926);
    var _0x5ccc3a;
    if (_0x744ed2) {
      var _0x5624f2 = Vr(this).constructor;
      _0x5ccc3a = Reflect.construct(_0x31eb02, arguments, _0x5624f2);
    } else {
      _0x5ccc3a = _0x31eb02.apply(this, arguments);
    }
    return pv(this, _0x5ccc3a);
  };
}
function pv(_0x9ad2c5, _0xa5907c) {
  if (_0xa5907c && (Yn(_0xa5907c) === "object" || typeof _0xa5907c == "function")) {
    return _0xa5907c;
  } else {
    return Ao(_0x9ad2c5);
  }
}
function Ao(_0x35b02c) {
  if (_0x35b02c === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x35b02c;
}
function gv() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Vr(_0x56a41a) {
  Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x31cd6e) {
    return _0x31cd6e.__proto__ || Object.getPrototypeOf(_0x31cd6e);
  };
  return Vr(_0x56a41a);
}
function Fc(_0x47bf78, _0x54ad9f, _0x19557f) {
  if (_0x54ad9f in _0x47bf78) {
    Object.defineProperty(_0x47bf78, _0x54ad9f, {
      value: _0x19557f,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x47bf78[_0x54ad9f] = _0x19557f;
  }
  return _0x47bf78;
}
var yv = function (_0x5578a4) {
  hv(_0x416430, _0x5578a4);
  var _0x936306 = dv(_0x416430);
  function _0x416430() {
    var _0x5e2651;
    lv(this, _0x416430);
    for (var _0x56a10a = arguments.length, _0x3f4e28 = new Array(_0x56a10a), _0x1db78b = 0; _0x1db78b < _0x56a10a; _0x1db78b++) {
      _0x3f4e28[_0x1db78b] = arguments[_0x1db78b];
    }
    _0x5e2651 = _0x936306.call.apply(_0x936306, [this].concat(_0x3f4e28));
    Fc(Ao(_0x5e2651), "priority", 10);
    Fc(Ao(_0x5e2651), "incompatibleTokens", ["t", "T", "x"]);
    return _0x5e2651;
  }
  fv(_0x416430, [{
    key: "parse",
    value: function (_0x43a479, _0x3c56c6) {
      switch (_0x3c56c6) {
        case "X":
          return _t(bt.basicOptionalMinutes, _0x43a479);
        case "XX":
          return _t(bt.basic, _0x43a479);
        case "XXXX":
          return _t(bt.basicOptionalSeconds, _0x43a479);
        case "XXXXX":
          return _t(bt.extendedOptionalSeconds, _0x43a479);
        case "XXX":
        default:
          return _t(bt.extended, _0x43a479);
      }
    }
  }, {
    key: "set",
    value: function (_0x2af173, _0x5748f9, _0x2ae577) {
      if (_0x5748f9.timestampIsSet) {
        return _0x2af173;
      } else {
        return new Date(_0x2af173.getTime() - _0x2ae577);
      }
    }
  }]);
  return _0x416430;
}(R);
function Vn(_0x5e217d) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Vn = function (_0x291106) {
      return typeof _0x291106;
    };
  } else {
    Vn = function (_0x5d0edc) {
      if (_0x5d0edc && typeof Symbol == "function" && _0x5d0edc.constructor === Symbol && _0x5d0edc !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x5d0edc;
      }
    };
  }
  return Vn(_0x5e217d);
}
function mv(_0x110997, _0x2e9e37) {
  if (!(_0x110997 instanceof _0x2e9e37)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function zc(_0x3d37ff, _0x3d874e) {
  for (var _0x2527e8 = 0; _0x2527e8 < _0x3d874e.length; _0x2527e8++) {
    var _0x354e75 = _0x3d874e[_0x2527e8];
    _0x354e75.enumerable = _0x354e75.enumerable || false;
    _0x354e75.configurable = true;
    if ("value" in _0x354e75) {
      _0x354e75.writable = true;
    }
    Object.defineProperty(_0x3d37ff, _0x354e75.key, _0x354e75);
  }
}
function bv(_0x9b9cb, _0x15bfac, _0x557778) {
  if (_0x15bfac) {
    zc(_0x9b9cb.prototype, _0x15bfac);
  }
  if (_0x557778) {
    zc(_0x9b9cb, _0x557778);
  }
  return _0x9b9cb;
}
function _v(_0x40572b, _0x3c6081) {
  if (typeof _0x3c6081 != "function" && _0x3c6081 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x40572b.prototype = Object.create(_0x3c6081 && _0x3c6081.prototype, {
    constructor: {
      value: _0x40572b,
      writable: true,
      configurable: true
    }
  });
  if (_0x3c6081) {
    No(_0x40572b, _0x3c6081);
  }
}
function No(_0x345140, _0x122f8e) {
  No = Object.setPrototypeOf || function (_0x3cbd54, _0x44acde) {
    _0x3cbd54.__proto__ = _0x44acde;
    return _0x3cbd54;
  };
  return No(_0x345140, _0x122f8e);
}
function vv(_0x4b9d4b) {
  var _0xd43215 = xv();
  return function () {
    var _0x3aa880 = qr(_0x4b9d4b);
    var _0x322034;
    if (_0xd43215) {
      var _0x5cb557 = qr(this).constructor;
      _0x322034 = Reflect.construct(_0x3aa880, arguments, _0x5cb557);
    } else {
      _0x322034 = _0x3aa880.apply(this, arguments);
    }
    return wv(this, _0x322034);
  };
}
function wv(_0x506be8, _0x5bf4f9) {
  if (_0x5bf4f9 && (Vn(_0x5bf4f9) === "object" || typeof _0x5bf4f9 == "function")) {
    return _0x5bf4f9;
  } else {
    return Fo(_0x506be8);
  }
}
function Fo(_0x1e79bd) {
  if (_0x1e79bd === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x1e79bd;
}
function xv() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function qr(_0x2a14b6) {
  qr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x39151c) {
    return _0x39151c.__proto__ || Object.getPrototypeOf(_0x39151c);
  };
  return qr(_0x2a14b6);
}
function Bc(_0x2bf6b2, _0x4337a0, _0x46edbe) {
  if (_0x4337a0 in _0x2bf6b2) {
    Object.defineProperty(_0x2bf6b2, _0x4337a0, {
      value: _0x46edbe,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x2bf6b2[_0x4337a0] = _0x46edbe;
  }
  return _0x2bf6b2;
}
var Ov = function (_0x43fdf9) {
  _v(_0x374399, _0x43fdf9);
  var _0x1775eb = vv(_0x374399);
  function _0x374399() {
    var _0x369dc4;
    mv(this, _0x374399);
    for (var _0x1c1a9e = arguments.length, _0x2d8dc6 = new Array(_0x1c1a9e), _0x5f3989 = 0; _0x5f3989 < _0x1c1a9e; _0x5f3989++) {
      _0x2d8dc6[_0x5f3989] = arguments[_0x5f3989];
    }
    _0x369dc4 = _0x1775eb.call.apply(_0x1775eb, [this].concat(_0x2d8dc6));
    Bc(Fo(_0x369dc4), "priority", 10);
    Bc(Fo(_0x369dc4), "incompatibleTokens", ["t", "T", "X"]);
    return _0x369dc4;
  }
  bv(_0x374399, [{
    key: "parse",
    value: function (_0x319e20, _0x41cc05) {
      switch (_0x41cc05) {
        case "x":
          return _t(bt.basicOptionalMinutes, _0x319e20);
        case "xx":
          return _t(bt.basic, _0x319e20);
        case "xxxx":
          return _t(bt.basicOptionalSeconds, _0x319e20);
        case "xxxxx":
          return _t(bt.extendedOptionalSeconds, _0x319e20);
        case "xxx":
        default:
          return _t(bt.extended, _0x319e20);
      }
    }
  }, {
    key: "set",
    value: function (_0x329e50, _0x3c50a4, _0x75de40) {
      if (_0x3c50a4.timestampIsSet) {
        return _0x329e50;
      } else {
        return new Date(_0x329e50.getTime() - _0x75de40);
      }
    }
  }]);
  return _0x374399;
}(R);
function qn(_0x30cf99) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    qn = function (_0x425787) {
      return typeof _0x425787;
    };
  } else {
    qn = function (_0x37a9cc) {
      if (_0x37a9cc && typeof Symbol == "function" && _0x37a9cc.constructor === Symbol && _0x37a9cc !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x37a9cc;
      }
    };
  }
  return qn(_0x30cf99);
}
function Pv(_0x2faee8, _0x493426) {
  if (!(_0x2faee8 instanceof _0x493426)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function jc(_0x40d91a, _0x3a8d0d) {
  for (var _0xf19a9 = 0; _0xf19a9 < _0x3a8d0d.length; _0xf19a9++) {
    var _0x2ee332 = _0x3a8d0d[_0xf19a9];
    _0x2ee332.enumerable = _0x2ee332.enumerable || false;
    _0x2ee332.configurable = true;
    if ("value" in _0x2ee332) {
      _0x2ee332.writable = true;
    }
    Object.defineProperty(_0x40d91a, _0x2ee332.key, _0x2ee332);
  }
}
function Sv(_0xd26c48, _0x4e662d, _0x1574b0) {
  if (_0x4e662d) {
    jc(_0xd26c48.prototype, _0x4e662d);
  }
  if (_0x1574b0) {
    jc(_0xd26c48, _0x1574b0);
  }
  return _0xd26c48;
}
function Tv(_0x3af016, _0x3eee78) {
  if (typeof _0x3eee78 != "function" && _0x3eee78 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x3af016.prototype = Object.create(_0x3eee78 && _0x3eee78.prototype, {
    constructor: {
      value: _0x3af016,
      writable: true,
      configurable: true
    }
  });
  if (_0x3eee78) {
    zo(_0x3af016, _0x3eee78);
  }
}
function zo(_0x5a2c03, _0x395f51) {
  zo = Object.setPrototypeOf || function (_0x3533b5, _0x408781) {
    _0x3533b5.__proto__ = _0x408781;
    return _0x3533b5;
  };
  return zo(_0x5a2c03, _0x395f51);
}
function Mv(_0x2970aa) {
  var _0x3aebc1 = Dv();
  return function () {
    var _0x3b59f1 = Xr(_0x2970aa);
    var _0x24d008;
    if (_0x3aebc1) {
      var _0x3851fc = Xr(this).constructor;
      _0x24d008 = Reflect.construct(_0x3b59f1, arguments, _0x3851fc);
    } else {
      _0x24d008 = _0x3b59f1.apply(this, arguments);
    }
    return kv(this, _0x24d008);
  };
}
function kv(_0x59b892, _0x317ae0) {
  if (_0x317ae0 && (qn(_0x317ae0) === "object" || typeof _0x317ae0 == "function")) {
    return _0x317ae0;
  } else {
    return Bo(_0x59b892);
  }
}
function Bo(_0x29f3ac) {
  if (_0x29f3ac === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0x29f3ac;
}
function Dv() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Xr(_0x1ca69e) {
  Xr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x24f838) {
    return _0x24f838.__proto__ || Object.getPrototypeOf(_0x24f838);
  };
  return Xr(_0x1ca69e);
}
function Wc(_0x59e4b4, _0x10c0f2, _0x318ee1) {
  if (_0x10c0f2 in _0x59e4b4) {
    Object.defineProperty(_0x59e4b4, _0x10c0f2, {
      value: _0x318ee1,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x59e4b4[_0x10c0f2] = _0x318ee1;
  }
  return _0x59e4b4;
}
var $v = function (_0x430c56) {
  Tv(_0x2294f7, _0x430c56);
  var _0x318baf = Mv(_0x2294f7);
  function _0x2294f7() {
    var _0x3e64d7;
    Pv(this, _0x2294f7);
    for (var _0x467a07 = arguments.length, _0x437e36 = new Array(_0x467a07), _0x5a8a91 = 0; _0x5a8a91 < _0x467a07; _0x5a8a91++) {
      _0x437e36[_0x5a8a91] = arguments[_0x5a8a91];
    }
    _0x3e64d7 = _0x318baf.call.apply(_0x318baf, [this].concat(_0x437e36));
    Wc(Bo(_0x3e64d7), "priority", 40);
    Wc(Bo(_0x3e64d7), "incompatibleTokens", "*");
    return _0x3e64d7;
  }
  Sv(_0x2294f7, [{
    key: "parse",
    value: function (_0x56d433) {
      return il(_0x56d433);
    }
  }, {
    key: "set",
    value: function (_0x301737, _0x31707b, _0x1e11f0) {
      return [new Date(_0x1e11f0 * 1000), {
        timestampIsSet: true
      }];
    }
  }]);
  return _0x2294f7;
}(R);
function Xn(_0x37a436) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Xn = function (_0x36244c) {
      return typeof _0x36244c;
    };
  } else {
    Xn = function (_0x4794f1) {
      if (_0x4794f1 && typeof Symbol == "function" && _0x4794f1.constructor === Symbol && _0x4794f1 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x4794f1;
      }
    };
  }
  return Xn(_0x37a436);
}
function Rv(_0x1feb4e, _0x56fda4) {
  if (!(_0x1feb4e instanceof _0x56fda4)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function Uc(_0x1247c0, _0x111b11) {
  for (var _0x518d81 = 0; _0x518d81 < _0x111b11.length; _0x518d81++) {
    var _0x19dd66 = _0x111b11[_0x518d81];
    _0x19dd66.enumerable = _0x19dd66.enumerable || false;
    _0x19dd66.configurable = true;
    if ("value" in _0x19dd66) {
      _0x19dd66.writable = true;
    }
    Object.defineProperty(_0x1247c0, _0x19dd66.key, _0x19dd66);
  }
}
function Cv(_0x4af5f2, _0x4118b4, _0x20e759) {
  if (_0x4118b4) {
    Uc(_0x4af5f2.prototype, _0x4118b4);
  }
  if (_0x20e759) {
    Uc(_0x4af5f2, _0x20e759);
  }
  return _0x4af5f2;
}
function Ev(_0x3d56e9, _0x5aa519) {
  if (typeof _0x5aa519 != "function" && _0x5aa519 !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  _0x3d56e9.prototype = Object.create(_0x5aa519 && _0x5aa519.prototype, {
    constructor: {
      value: _0x3d56e9,
      writable: true,
      configurable: true
    }
  });
  if (_0x5aa519) {
    jo(_0x3d56e9, _0x5aa519);
  }
}
function jo(_0x42ab6b, _0xeb20d0) {
  jo = Object.setPrototypeOf || function (_0x20eda6, _0x228288) {
    _0x20eda6.__proto__ = _0x228288;
    return _0x20eda6;
  };
  return jo(_0x42ab6b, _0xeb20d0);
}
function Iv(_0x46dba2) {
  var _0x29fa13 = Av();
  return function () {
    var _0x25c8e4 = Qr(_0x46dba2);
    var _0xdd40ee;
    if (_0x29fa13) {
      var _0x126755 = Qr(this).constructor;
      _0xdd40ee = Reflect.construct(_0x25c8e4, arguments, _0x126755);
    } else {
      _0xdd40ee = _0x25c8e4.apply(this, arguments);
    }
    return Lv(this, _0xdd40ee);
  };
}
function Lv(_0x4ef857, _0x1e2ee7) {
  if (_0x1e2ee7 && (Xn(_0x1e2ee7) === "object" || typeof _0x1e2ee7 == "function")) {
    return _0x1e2ee7;
  } else {
    return Wo(_0x4ef857);
  }
}
function Wo(_0xa68e9b) {
  if (_0xa68e9b === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return _0xa68e9b;
}
function Av() {
  if (typeof Reflect === "undefined" || !Reflect.construct || Reflect.construct.sham) {
    return false;
  }
  if (typeof Proxy == "function") {
    return true;
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch {
    return false;
  }
}
function Qr(_0x166bf6) {
  Qr = Object.setPrototypeOf ? Object.getPrototypeOf : function (_0x51a92d) {
    return _0x51a92d.__proto__ || Object.getPrototypeOf(_0x51a92d);
  };
  return Qr(_0x166bf6);
}
function Hc(_0x3cefe7, _0xcbcbd0, _0x3ac7e7) {
  if (_0xcbcbd0 in _0x3cefe7) {
    Object.defineProperty(_0x3cefe7, _0xcbcbd0, {
      value: _0x3ac7e7,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    _0x3cefe7[_0xcbcbd0] = _0x3ac7e7;
  }
  return _0x3cefe7;
}
var Nv = function (_0x30dcca) {
  Ev(_0x1a2a7b, _0x30dcca);
  var _0x2bd664 = Iv(_0x1a2a7b);
  function _0x1a2a7b() {
    var _0xfbc40d;
    Rv(this, _0x1a2a7b);
    for (var _0x53e9dd = arguments.length, _0x524004 = new Array(_0x53e9dd), _0x53618b = 0; _0x53618b < _0x53e9dd; _0x53618b++) {
      _0x524004[_0x53618b] = arguments[_0x53618b];
    }
    _0xfbc40d = _0x2bd664.call.apply(_0x2bd664, [this].concat(_0x524004));
    Hc(Wo(_0xfbc40d), "priority", 20);
    Hc(Wo(_0xfbc40d), "incompatibleTokens", "*");
    return _0xfbc40d;
  }
  Cv(_0x1a2a7b, [{
    key: "parse",
    value: function (_0x169f4d) {
      return il(_0x169f4d);
    }
  }, {
    key: "set",
    value: function (_0x39d15d, _0x329dae, _0x57e23e) {
      return [new Date(_0x57e23e), {
        timestampIsSet: true
      }];
    }
  }]);
  return _0x1a2a7b;
}(R);
var Fv = {
  G: new Fy(),
  y: new Yy(),
  Y: new Zy(),
  R: new om(),
  u: new hm(),
  Q: new _m(),
  q: new Tm(),
  M: new Em(),
  L: new Bm(),
  w: new Xm(),
  I: new nb(),
  d: new fb(),
  D: new bb(),
  E: new Sb(),
  e: new Cb(),
  c: new zb(),
  i: new qb(),
  a: new t_(),
  b: new a_(),
  B: new p_(),
  h: new w_(),
  H: new k_(),
  K: new L_(),
  k: new W_(),
  m: new Q_(),
  s: new nv(),
  S: new uv(),
  X: new yv(),
  x: new Ov(),
  t: new $v(),
  T: new Nv()
};
function Qn(_0x128dc4) {
  '@babel/helpers - typeof';

  if (typeof Symbol == "function" && typeof Symbol.iterator == "symbol") {
    Qn = function (_0x2eb188) {
      return typeof _0x2eb188;
    };
  } else {
    Qn = function (_0x2b1e5f) {
      if (_0x2b1e5f && typeof Symbol == "function" && _0x2b1e5f.constructor === Symbol && _0x2b1e5f !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x2b1e5f;
      }
    };
  }
  return Qn(_0x128dc4);
}
function Yc(_0x57891c, _0x1496c5) {
  var _0x1fa3d9;
  if (typeof Symbol === "undefined" || _0x57891c[Symbol.iterator] == null) {
    if (Array.isArray(_0x57891c) || (_0x1fa3d9 = zv(_0x57891c)) || _0x1496c5 && _0x57891c && typeof _0x57891c.length == "number") {
      if (_0x1fa3d9) {
        _0x57891c = _0x1fa3d9;
      }
      var _0x546f79 = 0;
      function _0x4278d4() {}
      return {
        s: _0x4278d4,
        n: function () {
          if (_0x546f79 >= _0x57891c.length) {
            return {
              done: true
            };
          } else {
            return {
              done: false,
              value: _0x57891c[_0x546f79++]
            };
          }
        },
        e: function (_0x7c0378) {
          throw _0x7c0378;
        },
        f: _0x4278d4
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var _0x1eef51 = true;
  var _0x194bc4 = false;
  var _0xf03cbf;
  return {
    s: function () {
      _0x1fa3d9 = _0x57891c[Symbol.iterator]();
    },
    n: function () {
      var _0x2c7fa6 = _0x1fa3d9.next();
      _0x1eef51 = _0x2c7fa6.done;
      return _0x2c7fa6;
    },
    e: function (_0x30936e) {
      _0x194bc4 = true;
      _0xf03cbf = _0x30936e;
    },
    f: function () {
      try {
        if (!_0x1eef51 && _0x1fa3d9.return != null) {
          _0x1fa3d9.return();
        }
      } finally {
        if (_0x194bc4) {
          throw _0xf03cbf;
        }
      }
    }
  };
}
function zv(_0x347e5f, _0x471f7a) {
  if (_0x347e5f) {
    if (typeof _0x347e5f == "string") {
      return Vc(_0x347e5f, _0x471f7a);
    }
    var _0x55c3ee = Object.prototype.toString.call(_0x347e5f).slice(8, -1);
    if (_0x55c3ee === "Object" && _0x347e5f.constructor) {
      _0x55c3ee = _0x347e5f.constructor.name;
    }
    if (_0x55c3ee === "Map" || _0x55c3ee === "Set") {
      return Array.from(_0x347e5f);
    }
    if (_0x55c3ee === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x55c3ee)) {
      return Vc(_0x347e5f, _0x471f7a);
    }
  }
}
function Vc(_0x3c6464, _0x5e31e6) {
  if (_0x5e31e6 == null || _0x5e31e6 > _0x3c6464.length) {
    _0x5e31e6 = _0x3c6464.length;
  }
  for (var _0x1463fd = 0, _0x1b96f9 = new Array(_0x5e31e6); _0x1463fd < _0x5e31e6; _0x1463fd++) {
    _0x1b96f9[_0x1463fd] = _0x3c6464[_0x1463fd];
  }
  return _0x1b96f9;
}
var Bv = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var jv = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var Wv = /^'([^]*?)'?$/;
var Uv = /''/g;
var Hv = /\S/;
var Yv = /[a-zA-Z]/;
function Vv(_0x17a200, _0x30fec0, _0x1c3cb9, _0xfa85c1) {
  var _0x361305;
  var _0x12069d;
  var _0x2ece7e;
  var _0x5de23c;
  var _0x46a16e;
  var _0x1dede3;
  var _0x3495fe;
  var _0x130986;
  w(3, arguments);
  var _0xc91e17 = String(_0x17a200);
  var _0x131a04 = String(_0x30fec0);
  var _0x4d6485 = Bt();
  var _0x1e9b9f = _0xfa85c1?.locale ?? _0x4d6485.locale ?? ls;
  if (!_0x1e9b9f.match) {
    throw new RangeError("locale must contain match property");
  }
  var _0x37fa57 = F(_0xfa85c1?.firstWeekContainsDate ?? (_0xfa85c1 == null || (_0x361305 = _0xfa85c1.locale) === null || _0x361305 === undefined || (_0x12069d = _0x361305.options) === null || _0x12069d === undefined ? undefined : _0x12069d.firstWeekContainsDate) ?? _0x4d6485.firstWeekContainsDate ?? ((_0x2ece7e = _0x4d6485.locale) === null || _0x2ece7e === undefined || (_0x5de23c = _0x2ece7e.options) === null || _0x5de23c === undefined ? undefined : _0x5de23c.firstWeekContainsDate) ?? 1);
  if (!(_0x37fa57 >= 1) || !(_0x37fa57 <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var _0x52e413 = F(_0xfa85c1?.weekStartsOn ?? (_0xfa85c1 == null || (_0x46a16e = _0xfa85c1.locale) === null || _0x46a16e === undefined || (_0x1dede3 = _0x46a16e.options) === null || _0x1dede3 === undefined ? undefined : _0x1dede3.weekStartsOn) ?? _0x4d6485.weekStartsOn ?? ((_0x3495fe = _0x4d6485.locale) === null || _0x3495fe === undefined || (_0x130986 = _0x3495fe.options) === null || _0x130986 === undefined ? undefined : _0x130986.weekStartsOn) ?? 0);
  if (!(_0x52e413 >= 0) || !(_0x52e413 <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (_0x131a04 === "") {
    if (_0xc91e17 === "") {
      return P(_0x1c3cb9);
    } else {
      return new Date(NaN);
    }
  }
  var _0x3645d7 = {
    firstWeekContainsDate: _0x37fa57,
    weekStartsOn: _0x52e413,
    locale: _0x1e9b9f
  };
  var _0x406b7c = [new Dy()];
  var _0x2973c9 = _0x131a04.match(jv).map(function (_0x491296) {
    var _0x966e6e = _0x491296[0];
    if (_0x966e6e in Ci) {
      var _0x2a1664 = Ci[_0x966e6e];
      return _0x2a1664(_0x491296, _0x1e9b9f.formatLong);
    }
    return _0x491296;
  }).join("").match(Bv);
  var _0x57907c = [];
  var _0x3aa09d = Yc(_0x2973c9);
  var _0x43d2fb;
  try {
    function _0x25de8f() {
      var _0x2786ca = _0x43d2fb.value;
      if ((_0xfa85c1 == null || !_0xfa85c1.useAdditionalWeekYearTokens) && tl(_0x2786ca)) {
        yr(_0x2786ca, _0x131a04, _0x17a200);
      }
      if ((_0xfa85c1 == null || !_0xfa85c1.useAdditionalDayOfYearTokens) && Ju(_0x2786ca)) {
        yr(_0x2786ca, _0x131a04, _0x17a200);
      }
      var _0x16d5e4 = _0x2786ca[0];
      var _0x3b40f9 = Fv[_0x16d5e4];
      if (_0x3b40f9) {
        var _0x5c7901 = _0x3b40f9.incompatibleTokens;
        if (Array.isArray(_0x5c7901)) {
          var _0xe1bfcb = _0x57907c.find(function (_0x585a88) {
            return _0x5c7901.includes(_0x585a88.token) || _0x585a88.token === _0x16d5e4;
          });
          if (_0xe1bfcb) {
            throw new RangeError(`The format string mustn't contain \`${_0xe1bfcb.fullToken}\` and \`${_0x2786ca}\` at the same time`);
          }
        } else if (_0x3b40f9.incompatibleTokens === "*" && _0x57907c.length > 0) {
          throw new RangeError(`The format string mustn't contain \`${_0x2786ca}\` and any other token at the same time`);
        }
        _0x57907c.push({
          token: _0x16d5e4,
          fullToken: _0x2786ca
        });
        var _0x2c9aea = _0x3b40f9.run(_0xc91e17, _0x2786ca, _0x1e9b9f.match, _0x3645d7);
        if (!_0x2c9aea) {
          return {
            v: new Date(NaN)
          };
        }
        _0x406b7c.push(_0x2c9aea.setter);
        _0xc91e17 = _0x2c9aea.rest;
      } else {
        if (_0x16d5e4.match(Yv)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + _0x16d5e4 + "`");
        }
        if (_0x2786ca === "''") {
          _0x2786ca = "'";
        } else if (_0x16d5e4 === "'") {
          _0x2786ca = qv(_0x2786ca);
        }
        if (_0xc91e17.indexOf(_0x2786ca) === 0) {
          _0xc91e17 = _0xc91e17.slice(_0x2786ca.length);
        } else {
          return {
            v: new Date(NaN)
          };
        }
      }
    }
    for (_0x3aa09d.s(); !(_0x43d2fb = _0x3aa09d.n()).done;) {
      var _0x27ed2b = _0x25de8f();
      if (Qn(_0x27ed2b) === "object") {
        return _0x27ed2b.v;
      }
    }
  } catch (_0x21ade8) {
    _0x3aa09d.e(_0x21ade8);
  } finally {
    _0x3aa09d.f();
  }
  if (_0xc91e17.length > 0 && Hv.test(_0xc91e17)) {
    return new Date(NaN);
  }
  var _0x5c4f4f = _0x406b7c.map(function (_0x3fdbda) {
    return _0x3fdbda.priority;
  }).sort(function (_0x2fd85a, _0x468623) {
    return _0x468623 - _0x2fd85a;
  }).filter(function (_0x2864de, _0x23274b, _0x2c8168) {
    return _0x2c8168.indexOf(_0x2864de) === _0x23274b;
  }).map(function (_0x546f2f) {
    return _0x406b7c.filter(function (_0x225f7f) {
      return _0x225f7f.priority === _0x546f2f;
    }).sort(function (_0x5b4bdd, _0x564104) {
      return _0x564104.subPriority - _0x5b4bdd.subPriority;
    });
  }).map(function (_0xf71fe4) {
    return _0xf71fe4[0];
  });
  var _0x2cbd1c = P(_0x1c3cb9);
  if (isNaN(_0x2cbd1c.getTime())) {
    return new Date(NaN);
  }
  var _0x1f9ccc = Xu(_0x2cbd1c, gr(_0x2cbd1c));
  var _0x1d7e87 = {};
  var _0x6fa858 = Yc(_0x5c4f4f);
  var _0x17321b;
  try {
    for (_0x6fa858.s(); !(_0x17321b = _0x6fa858.n()).done;) {
      var _0x57fc0c = _0x17321b.value;
      if (!_0x57fc0c.validate(_0x1f9ccc, _0x3645d7)) {
        return new Date(NaN);
      }
      var _0x59a95a = _0x57fc0c.set(_0x1f9ccc, _0x1d7e87, _0x3645d7);
      if (Array.isArray(_0x59a95a)) {
        _0x1f9ccc = _0x59a95a[0];
        Py(_0x1d7e87, _0x59a95a[1]);
      } else {
        _0x1f9ccc = _0x59a95a;
      }
    }
  } catch (_0x2279ac) {
    _0x6fa858.e(_0x2279ac);
  } finally {
    _0x6fa858.f();
  }
  return _0x1f9ccc;
}
function qv(_0x51656c) {
  return _0x51656c.match(Wv)[1].replace(Uv, "'");
}
function Xv(_0x12f1f5) {
  w(1, arguments);
  var _0x1241ff = P(_0x12f1f5);
  _0x1241ff.setMinutes(0, 0, 0);
  return _0x1241ff;
}
function Qv(_0x24bb03) {
  w(1, arguments);
  var _0x2b3c6c = P(_0x24bb03);
  _0x2b3c6c.setMilliseconds(0);
  return _0x2b3c6c;
}
function Gv(_0x502e6b, _0x47596e) {
  w(1, arguments);
  var _0x5e5d86 = F(_0x47596e?.additionalDigits ?? 2);
  if (_0x5e5d86 !== 2 && _0x5e5d86 !== 1 && _0x5e5d86 !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (typeof _0x502e6b != "string" && Object.prototype.toString.call(_0x502e6b) !== "[object String]") {
    return new Date(NaN);
  }
  var _0x338d0d = t0(_0x502e6b);
  var _0x367d32;
  if (_0x338d0d.date) {
    var _0x30fd78 = e0(_0x338d0d.date, _0x5e5d86);
    _0x367d32 = n0(_0x30fd78.restDateString, _0x30fd78.year);
  }
  if (!_0x367d32 || isNaN(_0x367d32.getTime())) {
    return new Date(NaN);
  }
  var _0x77c478 = _0x367d32.getTime();
  var _0x2be7d3 = 0;
  var _0x40f2ef;
  if (_0x338d0d.time && (_0x2be7d3 = r0(_0x338d0d.time), isNaN(_0x2be7d3))) {
    return new Date(NaN);
  }
  if (_0x338d0d.timezone) {
    _0x40f2ef = i0(_0x338d0d.timezone);
    if (isNaN(_0x40f2ef)) {
      return new Date(NaN);
    }
  } else {
    var _0x586a51 = new Date(_0x77c478 + _0x2be7d3);
    var _0x319fc8 = new Date(0);
    _0x319fc8.setFullYear(_0x586a51.getUTCFullYear(), _0x586a51.getUTCMonth(), _0x586a51.getUTCDate());
    _0x319fc8.setHours(_0x586a51.getUTCHours(), _0x586a51.getUTCMinutes(), _0x586a51.getUTCSeconds(), _0x586a51.getUTCMilliseconds());
    return _0x319fc8;
  }
  return new Date(_0x77c478 + _0x2be7d3 + _0x40f2ef);
}
var ln = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var Kv = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var Zv = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var Jv = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function t0(_0x39d552) {
  var _0x16ceb5 = {};
  var _0x194271 = _0x39d552.split(ln.dateTimeDelimiter);
  var _0x25bece;
  if (_0x194271.length > 2) {
    return _0x16ceb5;
  }
  if (/:/.test(_0x194271[0])) {
    _0x25bece = _0x194271[0];
  } else {
    _0x16ceb5.date = _0x194271[0];
    _0x25bece = _0x194271[1];
    if (ln.timeZoneDelimiter.test(_0x16ceb5.date)) {
      _0x16ceb5.date = _0x39d552.split(ln.timeZoneDelimiter)[0];
      _0x25bece = _0x39d552.substr(_0x16ceb5.date.length, _0x39d552.length);
    }
  }
  if (_0x25bece) {
    var _0x152d8e = ln.timezone.exec(_0x25bece);
    if (_0x152d8e) {
      _0x16ceb5.time = _0x25bece.replace(_0x152d8e[1], "");
      _0x16ceb5.timezone = _0x152d8e[1];
    } else {
      _0x16ceb5.time = _0x25bece;
    }
  }
  return _0x16ceb5;
}
function e0(_0xfd4689, _0x71a521) {
  var _0x5e26d3 = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + _0x71a521) + "})|(\\d{2}|[+-]\\d{" + (2 + _0x71a521) + "})$)");
  var _0x278d54 = _0xfd4689.match(_0x5e26d3);
  if (!_0x278d54) {
    return {
      year: NaN,
      restDateString: ""
    };
  }
  var _0x4e727a = _0x278d54[1] ? parseInt(_0x278d54[1]) : null;
  var _0x5bba78 = _0x278d54[2] ? parseInt(_0x278d54[2]) : null;
  return {
    year: _0x5bba78 === null ? _0x4e727a : _0x5bba78 * 100,
    restDateString: _0xfd4689.slice((_0x278d54[1] || _0x278d54[2]).length)
  };
}
function n0(_0x17f795, _0x305df2) {
  if (_0x305df2 === null) {
    return new Date(NaN);
  }
  var _0x5a51a9 = _0x17f795.match(Kv);
  if (!_0x5a51a9) {
    return new Date(NaN);
  }
  var _0x258ee4 = !!_0x5a51a9[4];
  var _0x5e3232 = xe(_0x5a51a9[1]);
  var _0xffb97f = xe(_0x5a51a9[2]) - 1;
  var _0x50634c = xe(_0x5a51a9[3]);
  var _0x4ca790 = xe(_0x5a51a9[4]);
  var _0x2666ad = xe(_0x5a51a9[5]) - 1;
  if (_0x258ee4) {
    if (u0(_0x305df2, _0x4ca790, _0x2666ad)) {
      return o0(_0x305df2, _0x4ca790, _0x2666ad);
    } else {
      return new Date(NaN);
    }
  }
  var _0x553dbd = new Date(0);
  if (!a0(_0x305df2, _0xffb97f, _0x50634c) || !c0(_0x305df2, _0x5e3232)) {
    return new Date(NaN);
  } else {
    _0x553dbd.setUTCFullYear(_0x305df2, _0xffb97f, Math.max(_0x5e3232, _0x50634c));
    return _0x553dbd;
  }
}
function xe(_0x5a4e4a) {
  if (_0x5a4e4a) {
    return parseInt(_0x5a4e4a);
  } else {
    return 1;
  }
}
function r0(_0x5bd461) {
  var _0x1119e3 = _0x5bd461.match(Zv);
  if (!_0x1119e3) {
    return NaN;
  }
  var _0x17b441 = _i(_0x1119e3[1]);
  var _0x3fce0e = _i(_0x1119e3[2]);
  var _0x86a9d1 = _i(_0x1119e3[3]);
  if (l0(_0x17b441, _0x3fce0e, _0x86a9d1)) {
    return _0x17b441 * ri + _0x3fce0e * ni + _0x86a9d1 * 1000;
  } else {
    return NaN;
  }
}
function _i(_0xd36d43) {
  return _0xd36d43 && parseFloat(_0xd36d43.replace(",", ".")) || 0;
}
function i0(_0x3772b7) {
  if (_0x3772b7 === "Z") {
    return 0;
  }
  var _0x14d9d6 = _0x3772b7.match(Jv);
  if (!_0x14d9d6) {
    return 0;
  }
  var _0xab58b1 = _0x14d9d6[1] === "+" ? -1 : 1;
  var _0x46b8dc = parseInt(_0x14d9d6[2]);
  var _0x14ff2c = _0x14d9d6[3] && parseInt(_0x14d9d6[3]) || 0;
  if (f0(_0x46b8dc, _0x14ff2c)) {
    return _0xab58b1 * (_0x46b8dc * ri + _0x14ff2c * ni);
  } else {
    return NaN;
  }
}
function o0(_0x39d039, _0x682ecd, _0x594bc0) {
  var _0x1b3a4b = new Date(0);
  _0x1b3a4b.setUTCFullYear(_0x39d039, 0, 4);
  var _0x518306 = _0x1b3a4b.getUTCDay() || 7;
  var _0x1399e5 = (_0x682ecd - 1) * 7 + _0x594bc0 + 1 - _0x518306;
  _0x1b3a4b.setUTCDate(_0x1b3a4b.getUTCDate() + _0x1399e5);
  return _0x1b3a4b;
}
var s0 = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function al(_0x2d8f91) {
  return _0x2d8f91 % 400 === 0 || _0x2d8f91 % 4 === 0 && _0x2d8f91 % 100 !== 0;
}
function a0(_0x4157d5, _0x367fe5, _0x1d1c17) {
  return _0x367fe5 >= 0 && _0x367fe5 <= 11 && _0x1d1c17 >= 1 && _0x1d1c17 <= (s0[_0x367fe5] || (al(_0x4157d5) ? 29 : 28));
}
function c0(_0x12695d, _0x95df99) {
  return _0x95df99 >= 1 && _0x95df99 <= (al(_0x12695d) ? 366 : 365);
}
function u0(_0x20ec60, _0x4d1005, _0x16ceb2) {
  return _0x4d1005 >= 1 && _0x4d1005 <= 53 && _0x16ceb2 >= 0 && _0x16ceb2 <= 6;
}
function l0(_0x2e40ed, _0x26bafd, _0x5ba241) {
  if (_0x2e40ed === 24) {
    return _0x26bafd === 0 && _0x5ba241 === 0;
  } else {
    return _0x5ba241 >= 0 && _0x5ba241 < 60 && _0x26bafd >= 0 && _0x26bafd < 60 && _0x2e40ed >= 0 && _0x2e40ed < 25;
  }
}
function f0(_0x5706ef, _0x3eed77) {
  return _0x3eed77 >= 0 && _0x3eed77 <= 59;
}
const h0 = {
  datetime: "MMM d, yyyy, h:mm:ss aaaa",
  millisecond: "h:mm:ss.SSS aaaa",
  second: "h:mm:ss aaaa",
  minute: "h:mm aaaa",
  hour: "ha",
  day: "MMM d",
  week: "PP",
  month: "MMM yyyy",
  quarter: "qqq - yyyy",
  year: "yyyy"
};
Du._date.override({
  _id: "date-fns",
  formats: function () {
    return h0;
  },
  parse: function (_0x25c9ab, _0x596659) {
    if (_0x25c9ab === null || typeof _0x25c9ab === "undefined") {
      return null;
    }
    const _0x1778e3 = typeof _0x25c9ab;
    if (_0x1778e3 === "number" || _0x25c9ab instanceof Date) {
      _0x25c9ab = P(_0x25c9ab);
    } else if (_0x1778e3 === "string") {
      if (typeof _0x596659 == "string") {
        _0x25c9ab = Vv(_0x25c9ab, _0x596659, new Date(), this.options);
      } else {
        _0x25c9ab = Gv(_0x25c9ab, this.options);
      }
    }
    if (Uu(_0x25c9ab)) {
      return _0x25c9ab.getTime();
    } else {
      return null;
    }
  },
  format: function (_0x23cd70, _0x313ffe) {
    return xy(_0x23cd70, _0x313ffe, this.options);
  },
  add: function (_0x38e875, _0x1c5b5e, _0x492db9) {
    switch (_0x492db9) {
      case "millisecond":
        return Ue(_0x38e875, _0x1c5b5e);
      case "second":
        return Zp(_0x38e875, _0x1c5b5e);
      case "minute":
        return Gp(_0x38e875, _0x1c5b5e);
      case "hour":
        return Yp(_0x38e875, _0x1c5b5e);
      case "day":
        return Wu(_0x38e875, _0x1c5b5e);
      case "week":
        return Jp(_0x38e875, _0x1c5b5e);
      case "month":
        return cs(_0x38e875, _0x1c5b5e);
      case "quarter":
        return Kp(_0x38e875, _0x1c5b5e);
      case "year":
        return tg(_0x38e875, _0x1c5b5e);
      default:
        return _0x38e875;
    }
  },
  diff: function (_0x521b4d, _0x46b05f, _0x52f42f) {
    switch (_0x52f42f) {
      case "millisecond":
        return ii(_0x521b4d, _0x46b05f);
      case "second":
        return lg(_0x521b4d, _0x46b05f);
      case "minute":
        return ag(_0x521b4d, _0x46b05f);
      case "hour":
        return sg(_0x521b4d, _0x46b05f);
      case "day":
        return Hu(_0x521b4d, _0x46b05f);
      case "week":
        return fg(_0x521b4d, _0x46b05f);
      case "month":
        return qu(_0x521b4d, _0x46b05f);
      case "quarter":
        return ug(_0x521b4d, _0x46b05f);
      case "year":
        return hg(_0x521b4d, _0x46b05f);
      default:
        return 0;
    }
  },
  startOf: function (_0x407e33, _0x1fffa3, _0x55ec17) {
    switch (_0x1fffa3) {
      case "second":
        return Qv(_0x407e33);
      case "minute":
        return dg(_0x407e33);
      case "hour":
        return Xv(_0x407e33);
      case "day":
        return Ri(_0x407e33);
      case "week":
        return Ra(_0x407e33);
      case "isoWeek":
        return Ra(_0x407e33, {
          weekStartsOn: +_0x55ec17
        });
      case "month":
        return gg(_0x407e33);
      case "quarter":
        return pg(_0x407e33);
      case "year":
        return mg(_0x407e33);
      default:
        return _0x407e33;
    }
  },
  endOf: function (_0x254880, _0x5daf2d) {
    switch (_0x5daf2d) {
      case "second":
        return xg(_0x254880);
      case "minute":
        return vg(_0x254880);
      case "hour":
        return bg(_0x254880);
      case "day":
        return Yu(_0x254880);
      case "week":
        return _g(_0x254880);
      case "month":
        return Vu(_0x254880);
      case "quarter":
        return wg(_0x254880);
      case "year":
        return yg(_0x254880);
      default:
        return _0x254880;
    }
  }
});
const d0 = "_container_1hh6c_1";
const p0 = {
  container: d0
};
const g0 = Be("<div>");
const y0 = {
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: window.devicePixelRatio,
  font: {
    family: "Gilroy",
    size: 12
  },
  animation: false,
  scales: {
    x: {
      type: "time",
      adapters: {
        date: {
          locale: ls
        }
      }
    },
    y: {
      type: "linear",
      ticks: {
        color: "rgba(0, 0, 255, 0.05)"
      }
    },
    y1: {
      type: "linear",
      ticks: {
        color: "rgba(0, 255, 0, 0.05)"
      }
    },
    y2: {
      type: "linear",
      ticks: {
        color: "rgba(255, 0, 0, 0.05)"
      }
    }
  }
};
const m0 = () => {
  const {
    state: _0x5cc86a
  } = qo();
  const _0x26f722 = ae(() => ({
    datasets: [{
      data: [..._0x5cc86a.dynoInfo.hp],
      label: "Horsepower",
      borderColor: "#52BE80",
      backgroundColor: "#52BE80",
      pointRadius: 0,
      cubicInterpolationMode: "default",
      fill: false,
      yAxisID: "y"
    }, {
      data: [..._0x5cc86a.dynoInfo.torque],
      label: "Torque",
      borderColor: "red",
      backgroundColor: "red",
      pointRadius: 0,
      cubicInterpolationMode: "default",
      fill: false,
      yAxisID: "y1"
    }, {
      data: [..._0x5cc86a.dynoInfo.speed],
      label: "Speed",
      borderColor: "#459bca",
      backgroundColor: "#459bca",
      pointRadius: 0,
      cubicInterpolationMode: "default",
      fill: false,
      yAxisID: "y2"
    }]
  }));
  Uo(() => {
    Ne.register(pr);
  });
  Ho(() => {
    Ne.unregister(pr);
  });
  return (() => {
    const _0x45b73a = g0();
    at(_0x45b73a, rt(Bp, {
      get data() {
        return _0x26f722();
      },
      options: y0
    }));
    Mt(() => nt(_0x45b73a, p0.container));
    return _0x45b73a;
  })();
};
const b0 = "" + new URL("escape-btn-655a7283.svg", import.meta.url).href;
const _0 = "" + new URL("stat-bg-eeb1bac4.svg", import.meta.url).href;
const v0 = "_container_1bc7y_1";
const w0 = "_inner_1bc7y_11";
const x0 = "_header_1bc7y_20";
const O0 = "_title_1bc7y_25";
const P0 = "_splitter_1bc7y_33";
const S0 = "_main_content_1bc7y_48";
const T0 = "_sidebar_1bc7y_53";
const M0 = "_stat_item_1bc7y_59";
const k0 = "_icon_1bc7y_69";
const D0 = "_live_stats_1bc7y_89";
const $0 = "_footer_1bc7y_92";
const R0 = "_warning_1bc7y_109";
const ot = {
  container: v0,
  inner: w0,
  header: x0,
  title: O0,
  splitter: P0,
  main_content: S0,
  sidebar: T0,
  stat_item: M0,
  icon: k0,
  live_stats: D0,
  footer: $0,
  warning: R0
};
const C0 = Be("<div><div><section><h1>CAR PERFOMANCE DASHBOARD</h1><img></section><div></div><section><div></div><div></section><section><button>Begin Test</button><div><h1>ATTENTION</h1><p>Torque and HP delivery simulation.");
const E0 = Be("<div><img><h1> <span>");
const I0 = () => {
  const {
    state: _0x3f653a,
    setState: _0x14622d
  } = qo();
  const _0x25e82c = async () => {
    _0x14622d("lastDynoRun", au.lastDynoRun);
    await _0x405935.execute("mechanics:startDyno");
  };
  return (() => {
    const _0x515883 = C0();
    const _0x4790a1 = _0x515883.firstChild;
    const _0x1f0103 = _0x4790a1.firstChild;
    const _0x5e08f4 = _0x1f0103.firstChild;
    const _0x1cd4de = _0x5e08f4.nextSibling;
    const _0x1e9897 = _0x1f0103.nextSibling;
    const _0x32baba = _0x1e9897.nextSibling;
    const _0x336579 = _0x32baba.firstChild;
    const _0x2e0dcb = _0x336579.nextSibling;
    const _0x25793e = _0x32baba.nextSibling;
    const _0x58cd2e = _0x25793e.firstChild;
    const _0x44eba8 = _0x58cd2e.nextSibling;
    er(_0x1cd4de, "src", b0);
    at(_0x336579, rt(se, {
      label: "Peak HP",
      get value() {
        return _0x3f653a.lastDynoRun.maxHP.toFixed(2) + " Hp";
      }
    }), null);
    at(_0x336579, rt(se, {
      label: "Peak Torque",
      get value() {
        return _0x3f653a.lastDynoRun.maxTorque.toFixed(2) + " Nm";
      }
    }), null);
    at(_0x336579, rt(se, {
      label: "Peak HP RPM",
      get value() {
        return _0x3f653a.lastDynoRun.maxHpRPM.toFixed(2) + " RPM";
      }
    }), null);
    at(_0x336579, rt(se, {
      label: "Peak Torque RPM",
      get value() {
        return _0x3f653a.lastDynoRun.maxTorqueRPM.toFixed(2) + " RPM";
      }
    }), null);
    at(_0x336579, rt(se, {
      label: "N/A",
      value: "N/A"
    }), null);
    at(_0x336579, rt(se, {
      label: "N/A",
      value: "N/A"
    }), null);
    at(_0x2e0dcb, rt(m0, {}));
    _0x58cd2e.$$click = _0x25e82c;
    Mt(_0x52b464 => {
      const _0x5e38c0 = ot.container;
      const _0x32aa21 = ot.inner;
      const _0x1c630a = ot.header;
      const _0x29d2f2 = ot.title;
      const _0x46a065 = ot.escapeBtn;
      const _0x2fe4f5 = ot.splitter;
      const _0x415e87 = ot.main_content;
      const _0x349e30 = ot.sidebar;
      const _0x2452b3 = ot.live_stats;
      const _0x6dc931 = ot.footer;
      const _0x201fb3 = ot.warning;
      if (_0x5e38c0 !== _0x52b464._v$) {
        nt(_0x515883, _0x52b464._v$ = _0x5e38c0);
      }
      if (_0x32aa21 !== _0x52b464._v$2) {
        nt(_0x4790a1, _0x52b464._v$2 = _0x32aa21);
      }
      if (_0x1c630a !== _0x52b464._v$3) {
        nt(_0x1f0103, _0x52b464._v$3 = _0x1c630a);
      }
      if (_0x29d2f2 !== _0x52b464._v$4) {
        nt(_0x5e08f4, _0x52b464._v$4 = _0x29d2f2);
      }
      if (_0x46a065 !== _0x52b464._v$5) {
        nt(_0x1cd4de, _0x52b464._v$5 = _0x46a065);
      }
      if (_0x2fe4f5 !== _0x52b464._v$6) {
        nt(_0x1e9897, _0x52b464._v$6 = _0x2fe4f5);
      }
      if (_0x415e87 !== _0x52b464._v$7) {
        nt(_0x32baba, _0x52b464._v$7 = _0x415e87);
      }
      if (_0x349e30 !== _0x52b464._v$8) {
        nt(_0x336579, _0x52b464._v$8 = _0x349e30);
      }
      if (_0x2452b3 !== _0x52b464._v$9) {
        nt(_0x2e0dcb, _0x52b464._v$9 = _0x2452b3);
      }
      if (_0x6dc931 !== _0x52b464._v$10) {
        nt(_0x25793e, _0x52b464._v$10 = _0x6dc931);
      }
      if (_0x201fb3 !== _0x52b464._v$11) {
        nt(_0x44eba8, _0x52b464._v$11 = _0x201fb3);
      }
      return _0x52b464;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined
    });
    return _0x515883;
  })();
};
const se = _0x440846 => (() => {
  const _0x2277f3 = E0();
  const _0x4b39d7 = _0x2277f3.firstChild;
  const _0x3eabe4 = _0x4b39d7.nextSibling;
  const _0x244afa = _0x3eabe4.firstChild;
  const _0x1a3000 = _0x244afa.nextSibling;
  er(_0x4b39d7, "src", _0);
  at(_0x3eabe4, () => _0x440846.label, _0x244afa);
  at(_0x1a3000, () => _0x440846.value);
  Mt(_0x587443 => {
    const _0x24e735 = ot.stat_item;
    const _0x4cb7b9 = ot.icon;
    if (_0x24e735 !== _0x587443._v$12) {
      nt(_0x2277f3, _0x587443._v$12 = _0x24e735);
    }
    if (_0x4cb7b9 !== _0x587443._v$13) {
      nt(_0x4b39d7, _0x587443._v$13 = _0x4cb7b9);
    }
    return _0x587443;
  }, {
    _v$12: undefined,
    _v$13: undefined
  });
  return _0x2277f3;
})();
Ol(["click"]);
const L0 = "_container_w80a6_1";
const A0 = {
  container: L0
};
const N0 = Be("<div>");
const F0 = () => {
  const {
    state: _0x1a1c64,
    setState: _0x510d9b
  } = qo();
  const _0x444d7c = _0x1bc2c4 => {
    if (_0x1bc2c4.key === "Escape" && _0x1a1c64.show) {
      _0x510d9b("show", false);
      _0x405935.execute("close");
    }
  };
  Uo(async () => {
    document.addEventListener("keydown", _0x444d7c);
  });
  Ho(() => {
    document.removeEventListener("keydown", _0x444d7c);
  });
  return rt(_s, {
    get when() {
      return _0x1a1c64.show;
    },
    get children() {
      const _0x34ce9b = N0();
      at(_0x34ce9b, rt(_s, {
        get when() {
          return _0x1a1c64.view === "dyno";
        },
        get children() {
          return rt(I0, {});
        }
      }));
      Mt(() => nt(_0x34ce9b, A0.container));
      return _0x34ce9b;
    }
  });
};
xl(() => rt(Cl, {
  get children() {
    return rt(F0, {});
  }
}), document.getElementById("root"));