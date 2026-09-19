import './style.css';
import { U as _0x5f2bb5, N as _0x12f36e } from "./v-packages.js";
(function () {
  const _0x38274f = document.createElement("link").relList;
  if (_0x38274f && _0x38274f.supports && _0x38274f.supports("modulepreload")) {
    return;
  }
  for (const _0x12a94d of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x38c292(_0x12a94d);
  }
  new MutationObserver(_0x17c23a => {
    for (const _0x231308 of _0x17c23a) {
      if (_0x231308.type === "childList") {
        for (const _0x4d3676 of _0x231308.addedNodes) {
          if (_0x4d3676.tagName === "LINK" && _0x4d3676.rel === "modulepreload") {
            _0x38c292(_0x4d3676);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x423f68(_0xa7da3b) {
    const _0x21f5b6 = {};
    if (_0xa7da3b.integrity) {
      _0x21f5b6.integrity = _0xa7da3b.integrity;
    }
    if (_0xa7da3b.referrerPolicy) {
      _0x21f5b6.referrerPolicy = _0xa7da3b.referrerPolicy;
    }
    if (_0xa7da3b.crossOrigin === "use-credentials") {
      _0x21f5b6.credentials = "include";
    } else if (_0xa7da3b.crossOrigin === "anonymous") {
      _0x21f5b6.credentials = "omit";
    } else {
      _0x21f5b6.credentials = "same-origin";
    }
    return _0x21f5b6;
  }
  function _0x38c292(_0x191937) {
    if (_0x191937.ep) {
      return;
    }
    _0x191937.ep = true;
    const _0x5ba144 = _0x423f68(_0x191937);
    fetch(_0x191937.href, _0x5ba144);
  }
})();
const Mn = (_0x3a5ccd, _0x1430d3) => _0x3a5ccd === _0x1430d3;
const Se = Symbol("solid-proxy");
const St = Symbol("solid-track");
const tt = {
  equals: Mn
};
let an = cn;
const ge = 1;
const nt = 2;
const ln = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var K = null;
let gt = null;
let F = null;
let te = null;
let _e = null;
let ut = 0;
const [kn, ua] = b(false);
function qe(_0x3e52f1, _0x157d7b) {
  const _0x458114 = F;
  const _0x1c30b5 = K;
  const _0x3e32d7 = _0x3e52f1.length === 0;
  const _0x1420f0 = _0x3e32d7 ? ln : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x157d7b === undefined ? _0x1c30b5 : _0x157d7b
  };
  const _0x34a02c = _0x3e32d7 ? _0x3e52f1 : () => _0x3e52f1(() => oe(() => ft(_0x1420f0)));
  K = _0x1420f0;
  F = null;
  try {
    return Ce(_0x34a02c, true);
  } finally {
    F = _0x458114;
    K = _0x1c30b5;
  }
}
function b(_0x2d25fe, _0x43ba76) {
  _0x43ba76 = _0x43ba76 ? Object.assign({}, tt, _0x43ba76) : tt;
  const _0x762da8 = {
    value: _0x2d25fe,
    observers: null,
    observerSlots: null,
    comparator: _0x43ba76.equals || undefined
  };
  const _0x4a6974 = _0x3a0a70 => {
    if (typeof _0x3a0a70 == "function") {
      _0x3a0a70 = _0x3a0a70(_0x762da8.value);
    }
    return un(_0x762da8, _0x3a0a70);
  };
  return [dn.bind(_0x762da8), _0x4a6974];
}
function An(_0x5c76a4, _0x4c4891, _0x1f3147) {
  const _0x5cf7d7 = ct(_0x5c76a4, _0x4c4891, true, ge);
  Ge(_0x5cf7d7);
}
function A(_0x23ccc3, _0x91239f, _0x21d4c8) {
  const _0x2b5faf = ct(_0x23ccc3, _0x91239f, false, ge);
  Ge(_0x2b5faf);
}
function xe(_0x542f8d, _0x346b7c, _0x5a28dd) {
  an = Dn;
  const _0x2a0f64 = ct(_0x542f8d, _0x346b7c, false, ge);
  if (!_0x5a28dd || !_0x5a28dd.render) {
    _0x2a0f64.user = true;
  }
  if (_e) {
    _e.push(_0x2a0f64);
  } else {
    Ge(_0x2a0f64);
  }
}
function W(_0x30011a, _0x359a7f, _0x5a19bd) {
  _0x5a19bd = _0x5a19bd ? Object.assign({}, tt, _0x5a19bd) : tt;
  const _0x5f356f = ct(_0x30011a, _0x359a7f, true, 0);
  _0x5f356f.observers = null;
  _0x5f356f.observerSlots = null;
  _0x5f356f.comparator = _0x5a19bd.equals || undefined;
  Ge(_0x5f356f);
  return dn.bind(_0x5f356f);
}
function rt(_0x26a32a) {
  return Ce(_0x26a32a, false);
}
function oe(_0x359028) {
  if (F === null) {
    return _0x359028();
  }
  const _0x462f1e = F;
  F = null;
  try {
    return _0x359028();
  } finally {
    F = _0x462f1e;
  }
}
function Te(_0x14ca30) {
  xe(() => oe(_0x14ca30));
}
function ce(_0x89f172) {
  if (K !== null) {
    if (K.cleanups === null) {
      K.cleanups = [_0x89f172];
    } else {
      K.cleanups.push(_0x89f172);
    }
  }
  return _0x89f172;
}
function At() {
  return F;
}
function sn() {
  return K;
}
function Bn(_0x1afe24) {
  const _0x3fa704 = F;
  const _0x5d1c09 = K;
  return Promise.resolve().then(() => {
    F = _0x3fa704;
    K = _0x5d1c09;
    let _0xd65f2;
    Ce(_0x1afe24, false);
    F = K = null;
    if (_0xd65f2) {
      return _0xd65f2.done;
    } else {
      return undefined;
    }
  });
}
function En() {
  return [kn, Bn];
}
function dn() {
  if (this.sources && this.state) {
    if (this.state === ge) {
      Ge(this);
    } else {
      const _0x1eb74a = te;
      te = null;
      Ce(() => ot(this), false);
      te = _0x1eb74a;
    }
  }
  if (F) {
    const _0x2dba5a = this.observers ? this.observers.length : 0;
    if (F.sources) {
      F.sources.push(this);
      F.sourceSlots.push(_0x2dba5a);
    } else {
      F.sources = [this];
      F.sourceSlots = [_0x2dba5a];
    }
    if (this.observers) {
      this.observers.push(F);
      this.observerSlots.push(F.sources.length - 1);
    } else {
      this.observers = [F];
      this.observerSlots = [F.sources.length - 1];
    }
  }
  return this.value;
}
function un(_0x4e1be7, _0x4307a3, _0x2a9ca5) {
  let _0x533f68 = _0x4e1be7.value;
  if (!_0x4e1be7.comparator || !_0x4e1be7.comparator(_0x533f68, _0x4307a3)) {
    _0x4e1be7.value = _0x4307a3;
    if (_0x4e1be7.observers && _0x4e1be7.observers.length) {
      Ce(() => {
        for (let _0x10e17b = 0; _0x10e17b < _0x4e1be7.observers.length; _0x10e17b += 1) {
          const _0x6fe1af = _0x4e1be7.observers[_0x10e17b];
          const _0x169289 = gt && gt.running;
          if (_0x169289) {
            gt.disposed.has(_0x6fe1af);
          }
          if (_0x169289 ? !_0x6fe1af.tState : !_0x6fe1af.state) {
            if (_0x6fe1af.pure) {
              te.push(_0x6fe1af);
            } else {
              _e.push(_0x6fe1af);
            }
            if (_0x6fe1af.observers) {
              fn(_0x6fe1af);
            }
          }
          if (!_0x169289) {
            _0x6fe1af.state = ge;
          }
        }
        if (te.length > 1000000) {
          te = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x4307a3;
}
function Ge(_0x4f876e) {
  if (!_0x4f876e.fn) {
    return;
  }
  ft(_0x4f876e);
  const _0x448b75 = K;
  const _0x2bcc40 = F;
  const _0x29f919 = ut;
  F = K = _0x4f876e;
  Tn(_0x4f876e, _0x4f876e.value, _0x29f919);
  F = _0x2bcc40;
  K = _0x448b75;
}
function Tn(_0x4a5cf0, _0x205ab5, _0xc18079) {
  let _0x4838d4;
  try {
    _0x4838d4 = _0x4a5cf0.fn(_0x205ab5);
  } catch (_0x16c858) {
    if (_0x4a5cf0.pure) {
      _0x4a5cf0.state = ge;
      if (_0x4a5cf0.owned) {
        _0x4a5cf0.owned.forEach(ft);
      }
      _0x4a5cf0.owned = null;
    }
    _0x4a5cf0.updatedAt = _0xc18079 + 1;
    return _n(_0x16c858);
  }
  if (!_0x4a5cf0.updatedAt || _0x4a5cf0.updatedAt <= _0xc18079) {
    if (_0x4a5cf0.updatedAt != null && "observers" in _0x4a5cf0) {
      un(_0x4a5cf0, _0x4838d4);
    } else {
      _0x4a5cf0.value = _0x4838d4;
    }
    _0x4a5cf0.updatedAt = _0xc18079;
  }
}
function ct(_0x2c837c, _0x2a03e8, _0x1710c7, _0x41435b = ge, _0x25e77f) {
  const _0x4a0675 = {
    fn: _0x2c837c,
    state: _0x41435b,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x2a03e8,
    owner: K,
    context: null,
    pure: _0x1710c7
  };
  if (K !== null) {
    if (K !== ln) {
      if (K.owned) {
        K.owned.push(_0x4a0675);
      } else {
        K.owned = [_0x4a0675];
      }
    }
  }
  return _0x4a0675;
}
function it(_0x33e740) {
  if (_0x33e740.state === 0) {
    return;
  }
  if (_0x33e740.state === nt) {
    return ot(_0x33e740);
  }
  if (_0x33e740.suspense && oe(_0x33e740.suspense.inFallback)) {
    return _0x33e740.suspense.effects.push(_0x33e740);
  }
  const _0x47e218 = [_0x33e740];
  while ((_0x33e740 = _0x33e740.owner) && (!_0x33e740.updatedAt || _0x33e740.updatedAt < ut)) {
    if (_0x33e740.state) {
      _0x47e218.push(_0x33e740);
    }
  }
  for (let _0xdac334 = _0x47e218.length - 1; _0xdac334 >= 0; _0xdac334--) {
    _0x33e740 = _0x47e218[_0xdac334];
    if (_0x33e740.state === ge) {
      Ge(_0x33e740);
    } else if (_0x33e740.state === nt) {
      const _0x3ae672 = te;
      te = null;
      Ce(() => ot(_0x33e740, _0x47e218[0]), false);
      te = _0x3ae672;
    }
  }
}
function Ce(_0x1b139a, _0x195c76) {
  if (te) {
    return _0x1b139a();
  }
  let _0x3abbad = false;
  if (!_0x195c76) {
    te = [];
  }
  if (_e) {
    _0x3abbad = true;
  } else {
    _e = [];
  }
  ut++;
  try {
    const _0x42ca81 = _0x1b139a();
    Gn(_0x3abbad);
    return _0x42ca81;
  } catch (_0x3cb3dc) {
    if (!_0x3abbad) {
      _e = null;
    }
    te = null;
    _n(_0x3cb3dc);
  }
}
function Gn(_0x2eeb34) {
  if (te) {
    cn(te);
    te = null;
  }
  if (_0x2eeb34) {
    return;
  }
  const _0x462764 = _e;
  _e = null;
  if (_0x462764.length) {
    Ce(() => an(_0x462764), false);
  }
}
function cn(_0xfa3a04) {
  for (let _0x338f56 = 0; _0x338f56 < _0xfa3a04.length; _0x338f56++) {
    it(_0xfa3a04[_0x338f56]);
  }
}
function Dn(_0xe2b9ac) {
  let _0x4b32f3;
  let _0x51d586 = 0;
  for (_0x4b32f3 = 0; _0x4b32f3 < _0xe2b9ac.length; _0x4b32f3++) {
    const _0x2b35e3 = _0xe2b9ac[_0x4b32f3];
    if (_0x2b35e3.user) {
      _0xe2b9ac[_0x51d586++] = _0x2b35e3;
    } else {
      it(_0x2b35e3);
    }
  }
  for (_0x4b32f3 = 0; _0x4b32f3 < _0x51d586; _0x4b32f3++) {
    it(_0xe2b9ac[_0x4b32f3]);
  }
}
function ot(_0xb43233, _0x54d668) {
  _0xb43233.state = 0;
  for (let _0x52ad5f = 0; _0x52ad5f < _0xb43233.sources.length; _0x52ad5f += 1) {
    const _0x4e2b5b = _0xb43233.sources[_0x52ad5f];
    if (_0x4e2b5b.sources) {
      const _0x462ac8 = _0x4e2b5b.state;
      if (_0x462ac8 === ge) {
        if (_0x4e2b5b !== _0x54d668 && (!_0x4e2b5b.updatedAt || _0x4e2b5b.updatedAt < ut)) {
          it(_0x4e2b5b);
        }
      } else if (_0x462ac8 === nt) {
        ot(_0x4e2b5b, _0x54d668);
      }
    }
  }
}
function fn(_0xd888b1) {
  for (let _0x31d4a2 = 0; _0x31d4a2 < _0xd888b1.observers.length; _0x31d4a2 += 1) {
    const _0x3148b5 = _0xd888b1.observers[_0x31d4a2];
    if (!_0x3148b5.state) {
      _0x3148b5.state = nt;
      if (_0x3148b5.pure) {
        te.push(_0x3148b5);
      } else {
        _e.push(_0x3148b5);
      }
      if (_0x3148b5.observers) {
        fn(_0x3148b5);
      }
    }
  }
}
function ft(_0x542451) {
  let _0x1cb572;
  if (_0x542451.sources) {
    while (_0x542451.sources.length) {
      const _0x59bb7e = _0x542451.sources.pop();
      const _0x52d5c7 = _0x542451.sourceSlots.pop();
      const _0xfb525f = _0x59bb7e.observers;
      if (_0xfb525f && _0xfb525f.length) {
        const _0x4ed806 = _0xfb525f.pop();
        const _0x32376a = _0x59bb7e.observerSlots.pop();
        if (_0x52d5c7 < _0xfb525f.length) {
          _0x4ed806.sourceSlots[_0x32376a] = _0x52d5c7;
          _0xfb525f[_0x52d5c7] = _0x4ed806;
          _0x59bb7e.observerSlots[_0x52d5c7] = _0x32376a;
        }
      }
    }
  }
  if (_0x542451.owned) {
    for (_0x1cb572 = _0x542451.owned.length - 1; _0x1cb572 >= 0; _0x1cb572--) {
      ft(_0x542451.owned[_0x1cb572]);
    }
    _0x542451.owned = null;
  }
  if (_0x542451.cleanups) {
    for (_0x1cb572 = _0x542451.cleanups.length - 1; _0x1cb572 >= 0; _0x1cb572--) {
      _0x542451.cleanups[_0x1cb572]();
    }
    _0x542451.cleanups = null;
  }
  _0x542451.state = 0;
  _0x542451.context = null;
}
function _n(_0x341bcf) {
  throw _0x341bcf;
}
const Ln = Symbol("fallback");
function qt(_0xfc5881) {
  for (let _0x1bf9de = 0; _0x1bf9de < _0xfc5881.length; _0x1bf9de++) {
    _0xfc5881[_0x1bf9de]();
  }
}
function Pn(_0x548d91, _0x5122ea, _0x173745 = {}) {
  let _0x331370 = [];
  let _0x373a11 = [];
  let _0x759bb6 = [];
  let _0x3a8e3f = 0;
  let _0x5b700f = _0x5122ea.length > 1 ? [] : null;
  ce(() => qt(_0x759bb6));
  return () => {
    let _0x355738 = _0x548d91() || [];
    let _0x4b9e88;
    let _0x1ff4e0;
    _0x355738[St];
    return oe(() => {
      let _0x2454cd = _0x355738.length;
      let _0x15bf34;
      let _0x15bfa6;
      let _0x571997;
      let _0x22daa7;
      let _0x4e8c5c;
      let _0xad7398;
      let _0x3612fe;
      let _0x4181a8;
      let _0x56080d;
      if (_0x2454cd === 0) {
        if (_0x3a8e3f !== 0) {
          qt(_0x759bb6);
          _0x759bb6 = [];
          _0x331370 = [];
          _0x373a11 = [];
          _0x3a8e3f = 0;
          _0x5b700f &&= [];
        }
        if (_0x173745.fallback) {
          _0x331370 = [Ln];
          _0x373a11[0] = qe(_0x2722de => {
            _0x759bb6[0] = _0x2722de;
            return _0x173745.fallback();
          });
          _0x3a8e3f = 1;
        }
      } else if (_0x3a8e3f === 0) {
        _0x373a11 = new Array(_0x2454cd);
        _0x1ff4e0 = 0;
        for (; _0x1ff4e0 < _0x2454cd; _0x1ff4e0++) {
          _0x331370[_0x1ff4e0] = _0x355738[_0x1ff4e0];
          _0x373a11[_0x1ff4e0] = qe(_0x3d27ce);
        }
        _0x3a8e3f = _0x2454cd;
      } else {
        _0x571997 = new Array(_0x2454cd);
        _0x22daa7 = new Array(_0x2454cd);
        if (_0x5b700f) {
          _0x4e8c5c = new Array(_0x2454cd);
        }
        _0xad7398 = 0;
        _0x3612fe = Math.min(_0x3a8e3f, _0x2454cd);
        for (; _0xad7398 < _0x3612fe && _0x331370[_0xad7398] === _0x355738[_0xad7398]; _0xad7398++);
        _0x3612fe = _0x3a8e3f - 1;
        _0x4181a8 = _0x2454cd - 1;
        for (; _0x3612fe >= _0xad7398 && _0x4181a8 >= _0xad7398 && _0x331370[_0x3612fe] === _0x355738[_0x4181a8]; _0x3612fe--, _0x4181a8--) {
          _0x571997[_0x4181a8] = _0x373a11[_0x3612fe];
          _0x22daa7[_0x4181a8] = _0x759bb6[_0x3612fe];
          if (_0x5b700f) {
            _0x4e8c5c[_0x4181a8] = _0x5b700f[_0x3612fe];
          }
        }
        _0x15bf34 = new Map();
        _0x15bfa6 = new Array(_0x4181a8 + 1);
        _0x1ff4e0 = _0x4181a8;
        for (; _0x1ff4e0 >= _0xad7398; _0x1ff4e0--) {
          _0x56080d = _0x355738[_0x1ff4e0];
          _0x4b9e88 = _0x15bf34.get(_0x56080d);
          _0x15bfa6[_0x1ff4e0] = _0x4b9e88 === undefined ? -1 : _0x4b9e88;
          _0x15bf34.set(_0x56080d, _0x1ff4e0);
        }
        for (_0x4b9e88 = _0xad7398; _0x4b9e88 <= _0x3612fe; _0x4b9e88++) {
          _0x56080d = _0x331370[_0x4b9e88];
          _0x1ff4e0 = _0x15bf34.get(_0x56080d);
          if (_0x1ff4e0 !== undefined && _0x1ff4e0 !== -1) {
            _0x571997[_0x1ff4e0] = _0x373a11[_0x4b9e88];
            _0x22daa7[_0x1ff4e0] = _0x759bb6[_0x4b9e88];
            if (_0x5b700f) {
              _0x4e8c5c[_0x1ff4e0] = _0x5b700f[_0x4b9e88];
            }
            _0x1ff4e0 = _0x15bfa6[_0x1ff4e0];
            _0x15bf34.set(_0x56080d, _0x1ff4e0);
          } else {
            _0x759bb6[_0x4b9e88]();
          }
        }
        for (_0x1ff4e0 = _0xad7398; _0x1ff4e0 < _0x2454cd; _0x1ff4e0++) {
          if (_0x1ff4e0 in _0x571997) {
            _0x373a11[_0x1ff4e0] = _0x571997[_0x1ff4e0];
            _0x759bb6[_0x1ff4e0] = _0x22daa7[_0x1ff4e0];
            if (_0x5b700f) {
              _0x5b700f[_0x1ff4e0] = _0x4e8c5c[_0x1ff4e0];
              _0x5b700f[_0x1ff4e0](_0x1ff4e0);
            }
          } else {
            _0x373a11[_0x1ff4e0] = qe(_0x3d27ce);
          }
        }
        _0x373a11 = _0x373a11.slice(0, _0x3a8e3f = _0x2454cd);
        _0x331370 = _0x355738.slice(0);
      }
      return _0x373a11;
    });
    function _0x3d27ce(_0x55a0bb) {
      _0x759bb6[_0x1ff4e0] = _0x55a0bb;
      if (_0x5b700f) {
        const [_0x5ae454, _0x2ccea7] = b(_0x1ff4e0);
        _0x5b700f[_0x1ff4e0] = _0x2ccea7;
        return _0x5122ea(_0x355738[_0x1ff4e0], _0x5ae454);
      }
      return _0x5122ea(_0x355738[_0x1ff4e0]);
    }
  };
}
function c(_0x7c7a75, _0x478a17) {
  return oe(() => _0x7c7a75(_0x478a17 || {}));
}
const Nn = _0x1ae64f => "Stale read from <" + _0x1ae64f + ">.";
function gn(_0x43a792) {
  const _0x5069a3 = "fallback" in _0x43a792 && {
    fallback: () => _0x43a792.fallback
  };
  return W(Pn(() => _0x43a792.each, _0x43a792.children, _0x5069a3 || undefined));
}
function R(_0x3ab96a) {
  const _0x1ddff2 = _0x3ab96a.keyed;
  const _0x5c9b50 = W(() => _0x3ab96a.when, undefined, {
    equals: (_0xc244d4, _0x5501cc) => _0x1ddff2 ? _0xc244d4 === _0x5501cc : !_0xc244d4 == !_0x5501cc
  });
  return W(() => {
    const _0x25eb68 = _0x5c9b50();
    if (_0x25eb68) {
      const _0x4ff59 = _0x3ab96a.children;
      if (typeof _0x4ff59 == "function" && _0x4ff59.length > 0) {
        return oe(() => _0x4ff59(_0x1ddff2 ? _0x25eb68 : () => {
          if (!oe(_0x5c9b50)) {
            throw Nn("Show");
          }
          return _0x3ab96a.when;
        }));
      } else {
        return _0x4ff59;
      }
    }
    return _0x3ab96a.fallback;
  }, undefined, undefined);
}
function On(_0x3f4219, _0x1f6f4b, _0x55c80a) {
  let _0x5026ec = _0x55c80a.length;
  let _0x278b6f = _0x1f6f4b.length;
  let _0xdda311 = _0x5026ec;
  let _0x1ef6c3 = 0;
  let _0x2809d2 = 0;
  let _0x358d03 = _0x1f6f4b[_0x278b6f - 1].nextSibling;
  let _0x2969cb = null;
  while (_0x1ef6c3 < _0x278b6f || _0x2809d2 < _0xdda311) {
    if (_0x1f6f4b[_0x1ef6c3] === _0x55c80a[_0x2809d2]) {
      _0x1ef6c3++;
      _0x2809d2++;
      continue;
    }
    while (_0x1f6f4b[_0x278b6f - 1] === _0x55c80a[_0xdda311 - 1]) {
      _0x278b6f--;
      _0xdda311--;
    }
    if (_0x278b6f === _0x1ef6c3) {
      const _0x283408 = _0xdda311 < _0x5026ec ? _0x2809d2 ? _0x55c80a[_0x2809d2 - 1].nextSibling : _0x55c80a[_0xdda311 - _0x2809d2] : _0x358d03;
      while (_0x2809d2 < _0xdda311) {
        _0x3f4219.insertBefore(_0x55c80a[_0x2809d2++], _0x283408);
      }
    } else if (_0xdda311 === _0x2809d2) {
      while (_0x1ef6c3 < _0x278b6f) {
        if (!_0x2969cb || !_0x2969cb.has(_0x1f6f4b[_0x1ef6c3])) {
          _0x1f6f4b[_0x1ef6c3].remove();
        }
        _0x1ef6c3++;
      }
    } else if (_0x1f6f4b[_0x1ef6c3] === _0x55c80a[_0xdda311 - 1] && _0x55c80a[_0x2809d2] === _0x1f6f4b[_0x278b6f - 1]) {
      const _0xf41b6e = _0x1f6f4b[--_0x278b6f].nextSibling;
      _0x3f4219.insertBefore(_0x55c80a[_0x2809d2++], _0x1f6f4b[_0x1ef6c3++].nextSibling);
      _0x3f4219.insertBefore(_0x55c80a[--_0xdda311], _0xf41b6e);
      _0x1f6f4b[_0x278b6f] = _0x55c80a[_0xdda311];
    } else {
      if (!_0x2969cb) {
        _0x2969cb = new Map();
        let _0x3478d8 = _0x2809d2;
        while (_0x3478d8 < _0xdda311) {
          _0x2969cb.set(_0x55c80a[_0x3478d8], _0x3478d8++);
        }
      }
      const _0x55edc8 = _0x2969cb.get(_0x1f6f4b[_0x1ef6c3]);
      if (_0x55edc8 != null) {
        if (_0x2809d2 < _0x55edc8 && _0x55edc8 < _0xdda311) {
          let _0x387c80 = _0x1ef6c3;
          let _0x106a23 = 1;
          let _0x212ffb;
          while (++_0x387c80 < _0x278b6f && _0x387c80 < _0xdda311 && (_0x212ffb = _0x2969cb.get(_0x1f6f4b[_0x387c80])) != null && _0x212ffb === _0x55edc8 + _0x106a23) {
            _0x106a23++;
          }
          if (_0x106a23 > _0x55edc8 - _0x2809d2) {
            const _0x51c44f = _0x1f6f4b[_0x1ef6c3];
            while (_0x2809d2 < _0x55edc8) {
              _0x3f4219.insertBefore(_0x55c80a[_0x2809d2++], _0x51c44f);
            }
          } else {
            _0x3f4219.replaceChild(_0x55c80a[_0x2809d2++], _0x1f6f4b[_0x1ef6c3++]);
          }
        } else {
          _0x1ef6c3++;
        }
      } else {
        _0x1f6f4b[_0x1ef6c3++].remove();
      }
    }
  }
}
const Rt = "_$DX_DELEGATE";
function jn(_0x1cf62b, _0x3b168e, _0xc38344, _0x36cde4 = {}) {
  let _0x3baa81;
  qe(_0x518e7b => {
    _0x3baa81 = _0x518e7b;
    if (_0x3b168e === document) {
      _0x1cf62b();
    } else {
      g(_0x3b168e, _0x1cf62b(), _0x3b168e.firstChild ? null : undefined, _0xc38344);
    }
  }, _0x36cde4.owner);
  return () => {
    _0x3baa81();
    _0x3b168e.textContent = "";
  };
}
function B(_0x3f1430, _0x5ad837, _0x137c39) {
  let _0x5141bb;
  const _0x2009a7 = () => {
    const _0x53b58c = document.createElement("template");
    _0x53b58c.innerHTML = _0x3f1430;
    if (_0x137c39) {
      return _0x53b58c.content.firstChild.firstChild;
    } else {
      return _0x53b58c.content.firstChild;
    }
  };
  const _0x40d2ef = _0x5ad837 ? () => oe(() => document.importNode(_0x5141bb ||= _0x2009a7(), true)) : () => (_0x5141bb ||= _0x2009a7()).cloneNode(true);
  _0x40d2ef.cloneNode = _0x40d2ef;
  return _0x40d2ef;
}
function ve(_0x4ec457, _0x4b086b = window.document) {
  const _0x5dfe71 = _0x4b086b[Rt] ||= new Set();
  for (let _0x1d8b5b = 0, _0x117556 = _0x4ec457.length; _0x1d8b5b < _0x117556; _0x1d8b5b++) {
    const _0x4070a6 = _0x4ec457[_0x1d8b5b];
    if (!_0x5dfe71.has(_0x4070a6)) {
      _0x5dfe71.add(_0x4070a6);
      _0x4b086b.addEventListener(_0x4070a6, qn);
    }
  }
}
function de(_0x580040, _0x5f2034, _0x5a5e36) {
  if (_0x5a5e36 == null) {
    _0x580040.removeAttribute(_0x5f2034);
  } else {
    _0x580040.setAttribute(_0x5f2034, _0x5a5e36);
  }
}
function f(_0x5aedce, _0x2fe9ef) {
  if (_0x2fe9ef == null) {
    _0x5aedce.removeAttribute("class");
  } else {
    _0x5aedce.className = _0x2fe9ef;
  }
}
function mn(_0x3ea305, _0x26bc7e, _0x674d0e, _0x16bd1b) {
  if (_0x16bd1b) {
    if (Array.isArray(_0x674d0e)) {
      _0x3ea305["$$" + _0x26bc7e] = _0x674d0e[0];
      _0x3ea305["$$" + _0x26bc7e + "Data"] = _0x674d0e[1];
    } else {
      _0x3ea305["$$" + _0x26bc7e] = _0x674d0e;
    }
  } else if (Array.isArray(_0x674d0e)) {
    const _0x299960 = _0x674d0e[0];
    _0x3ea305.addEventListener(_0x26bc7e, _0x674d0e[0] = _0x5219a7 => _0x299960.call(_0x3ea305, _0x674d0e[1], _0x5219a7));
  } else {
    _0x3ea305.addEventListener(_0x26bc7e, _0x674d0e);
  }
}
function Bt(_0x5edae2, _0x2e3aef, _0x12ae26 = {}) {
  const _0x4a9612 = Object.keys(_0x2e3aef || {});
  const _0x397c41 = Object.keys(_0x12ae26);
  let _0x260c5c;
  let _0x3df3ff;
  _0x260c5c = 0;
  _0x3df3ff = _0x397c41.length;
  for (; _0x260c5c < _0x3df3ff; _0x260c5c++) {
    const _0x1bb038 = _0x397c41[_0x260c5c];
    if (!!_0x1bb038 && _0x1bb038 !== "undefined" && !_0x2e3aef[_0x1bb038]) {
      Ht(_0x5edae2, _0x1bb038, false);
      delete _0x12ae26[_0x1bb038];
    }
  }
  _0x260c5c = 0;
  _0x3df3ff = _0x4a9612.length;
  for (; _0x260c5c < _0x3df3ff; _0x260c5c++) {
    const _0x55f172 = _0x4a9612[_0x260c5c];
    const _0x487eea = !!_0x2e3aef[_0x55f172];
    if (!!_0x55f172 && _0x55f172 !== "undefined" && _0x12ae26[_0x55f172] !== _0x487eea && !!_0x487eea) {
      Ht(_0x5edae2, _0x55f172, true);
      _0x12ae26[_0x55f172] = _0x487eea;
    }
  }
  return _0x12ae26;
}
function at(_0x15ce19, _0x24b6ee, _0x36ff33) {
  if (!_0x24b6ee) {
    if (_0x36ff33) {
      return de(_0x15ce19, "style");
    } else {
      return _0x24b6ee;
    }
  }
  const _0x59c8a2 = _0x15ce19.style;
  if (typeof _0x24b6ee == "string") {
    return _0x59c8a2.cssText = _0x24b6ee;
  }
  if (typeof _0x36ff33 == "string") {
    _0x59c8a2.cssText = _0x36ff33 = undefined;
  }
  _0x36ff33 ||= {};
  _0x24b6ee ||= {};
  let _0x58f6ce;
  let _0x29216a;
  for (_0x29216a in _0x36ff33) {
    if (_0x24b6ee[_0x29216a] == null) {
      _0x59c8a2.removeProperty(_0x29216a);
    }
    delete _0x36ff33[_0x29216a];
  }
  for (_0x29216a in _0x24b6ee) {
    _0x58f6ce = _0x24b6ee[_0x29216a];
    if (_0x58f6ce !== _0x36ff33[_0x29216a]) {
      _0x59c8a2.setProperty(_0x29216a, _0x58f6ce);
      _0x36ff33[_0x29216a] = _0x58f6ce;
    }
  }
  return _0x36ff33;
}
function Wn(_0x35a63b, _0x540424, _0xb37f05) {
  return oe(() => _0x35a63b(_0x540424, _0xb37f05));
}
function g(_0x1fec31, _0x7092e1, _0x320311, _0x8b9388) {
  if (_0x320311 !== undefined && !_0x8b9388) {
    _0x8b9388 = [];
  }
  if (typeof _0x7092e1 != "function") {
    return lt(_0x1fec31, _0x7092e1, _0x8b9388, _0x320311);
  }
  A(_0x587bb8 => lt(_0x1fec31, _0x7092e1(), _0x587bb8, _0x320311), _0x8b9388);
}
function Ht(_0x550755, _0x12319f, _0x56e5fe) {
  const _0x4506aa = _0x12319f.trim().split(/\s+/);
  for (let _0x105f93 = 0, _0x143760 = _0x4506aa.length; _0x105f93 < _0x143760; _0x105f93++) {
    _0x550755.classList.toggle(_0x4506aa[_0x105f93], _0x56e5fe);
  }
}
function qn(_0x4fbb6b) {
  const _0x4cff4d = "$$" + _0x4fbb6b.type;
  let _0x25f2c9 = _0x4fbb6b.composedPath && _0x4fbb6b.composedPath()[0] || _0x4fbb6b.target;
  if (_0x4fbb6b.target !== _0x25f2c9) {
    Object.defineProperty(_0x4fbb6b, "target", {
      configurable: true,
      value: _0x25f2c9
    });
  }
  Object.defineProperty(_0x4fbb6b, "currentTarget", {
    configurable: true,
    get() {
      return _0x25f2c9 || document;
    }
  });
  while (_0x25f2c9) {
    const _0x8f72b7 = _0x25f2c9[_0x4cff4d];
    if (_0x8f72b7 && !_0x25f2c9.disabled) {
      const _0x23ebec = _0x25f2c9[_0x4cff4d + "Data"];
      if (_0x23ebec !== undefined) {
        _0x8f72b7.call(_0x25f2c9, _0x23ebec, _0x4fbb6b);
      } else {
        _0x8f72b7.call(_0x25f2c9, _0x4fbb6b);
      }
      if (_0x4fbb6b.cancelBubble) {
        return;
      }
    }
    _0x25f2c9 = _0x25f2c9._$host || _0x25f2c9.parentNode || _0x25f2c9.host;
  }
}
function lt(_0x1f0f54, _0xa72607, _0x1387ba, _0x4b75ed, _0x2182eb) {
  while (typeof _0x1387ba == "function") {
    _0x1387ba = _0x1387ba();
  }
  if (_0xa72607 === _0x1387ba) {
    return _0x1387ba;
  }
  const _0x1ecfbe = typeof _0xa72607;
  const _0x4cc0a5 = _0x4b75ed !== undefined;
  _0x1f0f54 = _0x4cc0a5 && _0x1387ba[0] && _0x1387ba[0].parentNode || _0x1f0f54;
  if (_0x1ecfbe === "string" || _0x1ecfbe === "number") {
    if (_0x1ecfbe === "number") {
      _0xa72607 = _0xa72607.toString();
    }
    if (_0x4cc0a5) {
      let _0x3de435 = _0x1387ba[0];
      if (_0x3de435 && _0x3de435.nodeType === 3) {
        _0x3de435.data = _0xa72607;
      } else {
        _0x3de435 = document.createTextNode(_0xa72607);
      }
      _0x1387ba = Me(_0x1f0f54, _0x1387ba, _0x4b75ed, _0x3de435);
    } else if (_0x1387ba !== "" && typeof _0x1387ba == "string") {
      _0x1387ba = _0x1f0f54.firstChild.data = _0xa72607;
    } else {
      _0x1387ba = _0x1f0f54.textContent = _0xa72607;
    }
  } else if (_0xa72607 == null || _0x1ecfbe === "boolean") {
    _0x1387ba = Me(_0x1f0f54, _0x1387ba, _0x4b75ed);
  } else {
    if (_0x1ecfbe === "function") {
      A(() => {
        let _0x32e3f5 = _0xa72607();
        while (typeof _0x32e3f5 == "function") {
          _0x32e3f5 = _0x32e3f5();
        }
        _0x1387ba = lt(_0x1f0f54, _0x32e3f5, _0x1387ba, _0x4b75ed);
      });
      return () => _0x1387ba;
    }
    if (Array.isArray(_0xa72607)) {
      const _0x421ccb = [];
      const _0x528a8c = _0x1387ba && Array.isArray(_0x1387ba);
      if (xt(_0x421ccb, _0xa72607, _0x1387ba, _0x2182eb)) {
        A(() => _0x1387ba = lt(_0x1f0f54, _0x421ccb, _0x1387ba, _0x4b75ed, true));
        return () => _0x1387ba;
      }
      if (_0x421ccb.length === 0) {
        _0x1387ba = Me(_0x1f0f54, _0x1387ba, _0x4b75ed);
        if (_0x4cc0a5) {
          return _0x1387ba;
        }
      } else if (_0x528a8c) {
        if (_0x1387ba.length === 0) {
          Ft(_0x1f0f54, _0x421ccb, _0x4b75ed);
        } else {
          On(_0x1f0f54, _0x1387ba, _0x421ccb);
        }
      } else {
        if (_0x1387ba) {
          Me(_0x1f0f54);
        }
        Ft(_0x1f0f54, _0x421ccb);
      }
      _0x1387ba = _0x421ccb;
    } else if (_0xa72607.nodeType) {
      if (Array.isArray(_0x1387ba)) {
        if (_0x4cc0a5) {
          return _0x1387ba = Me(_0x1f0f54, _0x1387ba, _0x4b75ed, _0xa72607);
        }
        Me(_0x1f0f54, _0x1387ba, null, _0xa72607);
      } else if (_0x1387ba == null || _0x1387ba === "" || !_0x1f0f54.firstChild) {
        _0x1f0f54.appendChild(_0xa72607);
      } else {
        _0x1f0f54.replaceChild(_0xa72607, _0x1f0f54.firstChild);
      }
      _0x1387ba = _0xa72607;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0xa72607);
    }
  }
  return _0x1387ba;
}
function xt(_0x293d49, _0x1cd15f, _0xc1d263, _0x476103) {
  let _0x1226b2 = false;
  for (let _0x3f7686 = 0, _0x85caea = _0x1cd15f.length; _0x3f7686 < _0x85caea; _0x3f7686++) {
    let _0x36024e = _0x1cd15f[_0x3f7686];
    let _0x427ddb = _0xc1d263 && _0xc1d263[_0x3f7686];
    let _0x173e01;
    if (_0x36024e != null && _0x36024e !== true && _0x36024e !== false) {
      if ((_0x173e01 = typeof _0x36024e) == "object" && _0x36024e.nodeType) {
        _0x293d49.push(_0x36024e);
      } else if (Array.isArray(_0x36024e)) {
        _0x1226b2 = xt(_0x293d49, _0x36024e, _0x427ddb) || _0x1226b2;
      } else if (_0x173e01 === "function") {
        if (_0x476103) {
          while (typeof _0x36024e == "function") {
            _0x36024e = _0x36024e();
          }
          _0x1226b2 = xt(_0x293d49, Array.isArray(_0x36024e) ? _0x36024e : [_0x36024e], Array.isArray(_0x427ddb) ? _0x427ddb : [_0x427ddb]) || _0x1226b2;
        } else {
          _0x293d49.push(_0x36024e);
          _0x1226b2 = true;
        }
      } else {
        const _0x224837 = String(_0x36024e);
        if (_0x427ddb && _0x427ddb.nodeType === 3 && _0x427ddb.data === _0x224837) {
          _0x293d49.push(_0x427ddb);
        } else {
          _0x293d49.push(document.createTextNode(_0x224837));
        }
      }
    }
  }
  return _0x1226b2;
}
function Ft(_0x821fdf, _0x147b32, _0x147adf = null) {
  for (let _0x407177 = 0, _0x17e8a1 = _0x147b32.length; _0x407177 < _0x17e8a1; _0x407177++) {
    _0x821fdf.insertBefore(_0x147b32[_0x407177], _0x147adf);
  }
}
function Me(_0x548477, _0x256cb6, _0x37f1d8, _0x1245bc) {
  if (_0x37f1d8 === undefined) {
    return _0x548477.textContent = "";
  }
  const _0x3179c3 = _0x1245bc || document.createTextNode("");
  if (_0x256cb6.length) {
    let _0x16c0f8 = false;
    for (let _0x32af25 = _0x256cb6.length - 1; _0x32af25 >= 0; _0x32af25--) {
      const _0x44618c = _0x256cb6[_0x32af25];
      if (_0x3179c3 !== _0x44618c) {
        const _0x47ac51 = _0x44618c.parentNode === _0x548477;
        if (!_0x16c0f8 && !_0x32af25) {
          if (_0x47ac51) {
            _0x548477.replaceChild(_0x3179c3, _0x44618c);
          } else {
            _0x548477.insertBefore(_0x3179c3, _0x37f1d8);
          }
        } else if (_0x47ac51) {
          _0x44618c.remove();
        }
      } else {
        _0x16c0f8 = true;
      }
    }
  } else {
    _0x548477.insertBefore(_0x3179c3, _0x37f1d8);
  }
  return [_0x3179c3];
}
const Ct = Symbol("store-raw");
const He = Symbol("store-node");
function hn(_0x5a1459) {
  let _0x1d447d = _0x5a1459[Se];
  if (!_0x1d447d && (Object.defineProperty(_0x5a1459, Se, {
    value: _0x1d447d = new Proxy(_0x5a1459, Fn)
  }), !Array.isArray(_0x5a1459))) {
    const _0x3995aa = Object.keys(_0x5a1459);
    const _0x241edb = Object.getOwnPropertyDescriptors(_0x5a1459);
    for (let _0xa01dc3 = 0, _0x126955 = _0x3995aa.length; _0xa01dc3 < _0x126955; _0xa01dc3++) {
      const _0x1b2824 = _0x3995aa[_0xa01dc3];
      if (_0x241edb[_0x1b2824].get) {
        Object.defineProperty(_0x5a1459, _0x1b2824, {
          enumerable: _0x241edb[_0x1b2824].enumerable,
          get: _0x241edb[_0x1b2824].get.bind(_0x1d447d)
        });
      }
    }
  }
  return _0x1d447d;
}
function st(_0x5e2215) {
  let _0x2f2d83;
  return _0x5e2215 != null && typeof _0x5e2215 == "object" && (_0x5e2215[Se] || !(_0x2f2d83 = Object.getPrototypeOf(_0x5e2215)) || _0x2f2d83 === Object.prototype || Array.isArray(_0x5e2215));
}
function Fe(_0x2ff860, _0x1eb0c0 = new Set()) {
  let _0x7a637b;
  let _0x260022;
  let _0x2dec2b;
  let _0x43dd81;
  if (_0x7a637b = _0x2ff860 != null && _0x2ff860[Ct]) {
    return _0x7a637b;
  }
  if (!st(_0x2ff860) || _0x1eb0c0.has(_0x2ff860)) {
    return _0x2ff860;
  }
  if (Array.isArray(_0x2ff860)) {
    if (Object.isFrozen(_0x2ff860)) {
      _0x2ff860 = _0x2ff860.slice(0);
    } else {
      _0x1eb0c0.add(_0x2ff860);
    }
    for (let _0x15e05a = 0, _0x1d75f5 = _0x2ff860.length; _0x15e05a < _0x1d75f5; _0x15e05a++) {
      _0x2dec2b = _0x2ff860[_0x15e05a];
      if ((_0x260022 = Fe(_0x2dec2b, _0x1eb0c0)) !== _0x2dec2b) {
        _0x2ff860[_0x15e05a] = _0x260022;
      }
    }
  } else {
    if (Object.isFrozen(_0x2ff860)) {
      _0x2ff860 = Object.assign({}, _0x2ff860);
    } else {
      _0x1eb0c0.add(_0x2ff860);
    }
    const _0x37e253 = Object.keys(_0x2ff860);
    const _0x450b86 = Object.getOwnPropertyDescriptors(_0x2ff860);
    for (let _0x46afa3 = 0, _0x43bd8b = _0x37e253.length; _0x46afa3 < _0x43bd8b; _0x46afa3++) {
      _0x43dd81 = _0x37e253[_0x46afa3];
      if (!_0x450b86[_0x43dd81].get) {
        _0x2dec2b = _0x2ff860[_0x43dd81];
        if ((_0x260022 = Fe(_0x2dec2b, _0x1eb0c0)) !== _0x2dec2b) {
          _0x2ff860[_0x43dd81] = _0x260022;
        }
      }
    }
  }
  return _0x2ff860;
}
function Et(_0x571a4d) {
  let _0x5197bc = _0x571a4d[He];
  if (!_0x5197bc) {
    Object.defineProperty(_0x571a4d, He, {
      value: _0x5197bc = Object.create(null)
    });
  }
  return _0x5197bc;
}
function pt(_0x27c4dd, _0x3825dc, _0x3b28d4) {
  return _0x27c4dd[_0x3825dc] ||= $n(_0x3b28d4);
}
function Rn(_0x53c1a9, _0x2bfd4b) {
  const _0x34390d = Reflect.getOwnPropertyDescriptor(_0x53c1a9, _0x2bfd4b);
  if (!!_0x34390d && !_0x34390d.get && !!_0x34390d.configurable && _0x2bfd4b !== Se && _0x2bfd4b !== He) {
    delete _0x34390d.value;
    delete _0x34390d.writable;
    _0x34390d.get = () => _0x53c1a9[Se][_0x2bfd4b];
  }
  return _0x34390d;
}
function vn(_0x392dff) {
  if (At()) {
    const _0x1372c2 = Et(_0x392dff);
    (_0x1372c2._ ||= $n())();
  }
}
function Hn(_0x107b8b) {
  vn(_0x107b8b);
  return Reflect.ownKeys(_0x107b8b);
}
function $n(_0x5930bf) {
  const [_0x170ca4, _0x29cf4a] = b(_0x5930bf, {
    equals: false,
    internal: true
  });
  _0x170ca4.$ = _0x29cf4a;
  return _0x170ca4;
}
const Fn = {
  get(_0x10a950, _0x5ec774, _0x64a467) {
    if (_0x5ec774 === Ct) {
      return _0x10a950;
    }
    if (_0x5ec774 === Se) {
      return _0x64a467;
    }
    if (_0x5ec774 === St) {
      vn(_0x10a950);
      return _0x64a467;
    }
    const _0x50ab57 = Et(_0x10a950);
    const _0x4490d7 = _0x50ab57[_0x5ec774];
    let _0x1e5a76 = _0x4490d7 ? _0x4490d7() : _0x10a950[_0x5ec774];
    if (_0x5ec774 === He || _0x5ec774 === "__proto__") {
      return _0x1e5a76;
    }
    if (!_0x4490d7) {
      const _0x4e9aeb = Object.getOwnPropertyDescriptor(_0x10a950, _0x5ec774);
      if (At() && (typeof _0x1e5a76 != "function" || _0x10a950.hasOwnProperty(_0x5ec774)) && (!_0x4e9aeb || !_0x4e9aeb.get)) {
        _0x1e5a76 = pt(_0x50ab57, _0x5ec774, _0x1e5a76)();
      }
    }
    if (st(_0x1e5a76)) {
      return hn(_0x1e5a76);
    } else {
      return _0x1e5a76;
    }
  },
  has(_0x29f9f0, _0x563aa6) {
    if (_0x563aa6 === Ct || _0x563aa6 === Se || _0x563aa6 === St || _0x563aa6 === He || _0x563aa6 === "__proto__") {
      return true;
    } else {
      this.get(_0x29f9f0, _0x563aa6, _0x29f9f0);
      return _0x563aa6 in _0x29f9f0;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Hn,
  getOwnPropertyDescriptor: Rn
};
function dt(_0x1c606b, _0xb7c64, _0x19bfd9, _0x10b175 = false) {
  if (!_0x10b175 && _0x1c606b[_0xb7c64] === _0x19bfd9) {
    return;
  }
  const _0x543a21 = _0x1c606b[_0xb7c64];
  const _0x5b5137 = _0x1c606b.length;
  if (_0x19bfd9 === undefined) {
    delete _0x1c606b[_0xb7c64];
  } else {
    _0x1c606b[_0xb7c64] = _0x19bfd9;
  }
  let _0xf57647 = Et(_0x1c606b);
  let _0x476987;
  if (_0x476987 = pt(_0xf57647, _0xb7c64, _0x543a21)) {
    _0x476987.$(() => _0x19bfd9);
  }
  if (Array.isArray(_0x1c606b) && _0x1c606b.length !== _0x5b5137) {
    for (let _0x3d24af = _0x1c606b.length; _0x3d24af < _0x5b5137; _0x3d24af++) {
      if (_0x476987 = _0xf57647[_0x3d24af]) {
        _0x476987.$();
      }
    }
    if (_0x476987 = pt(_0xf57647, "length", _0x5b5137)) {
      _0x476987.$(_0x1c606b.length);
    }
  }
  if (_0x476987 = _0xf57647._) {
    _0x476987.$();
  }
}
function yn(_0x38e153, _0x2070d1) {
  const _0x1d5b8f = Object.keys(_0x2070d1);
  for (let _0x2a1b7b = 0; _0x2a1b7b < _0x1d5b8f.length; _0x2a1b7b += 1) {
    const _0x4f71c1 = _0x1d5b8f[_0x2a1b7b];
    dt(_0x38e153, _0x4f71c1, _0x2070d1[_0x4f71c1]);
  }
}
function Un(_0x38d156, _0x23fea5) {
  if (typeof _0x23fea5 == "function") {
    _0x23fea5 = _0x23fea5(_0x38d156);
  }
  _0x23fea5 = Fe(_0x23fea5);
  if (Array.isArray(_0x23fea5)) {
    if (_0x38d156 === _0x23fea5) {
      return;
    }
    let _0x4bf508 = 0;
    let _0x3ee853 = _0x23fea5.length;
    for (; _0x4bf508 < _0x3ee853; _0x4bf508++) {
      const _0x52b554 = _0x23fea5[_0x4bf508];
      if (_0x38d156[_0x4bf508] !== _0x52b554) {
        dt(_0x38d156, _0x4bf508, _0x52b554);
      }
    }
    dt(_0x38d156, "length", _0x3ee853);
  } else {
    yn(_0x38d156, _0x23fea5);
  }
}
function je(_0x11da69, _0x87e8bb, _0x2c6ae7 = []) {
  let _0x573d37;
  let _0x5657e7 = _0x11da69;
  if (_0x87e8bb.length > 1) {
    _0x573d37 = _0x87e8bb.shift();
    const _0x37ada2 = typeof _0x573d37;
    const _0x3dd2c3 = Array.isArray(_0x11da69);
    if (Array.isArray(_0x573d37)) {
      for (let _0x49fda1 = 0; _0x49fda1 < _0x573d37.length; _0x49fda1++) {
        je(_0x11da69, [_0x573d37[_0x49fda1]].concat(_0x87e8bb), _0x2c6ae7);
      }
      return;
    } else if (_0x3dd2c3 && _0x37ada2 === "function") {
      for (let _0x152093 = 0; _0x152093 < _0x11da69.length; _0x152093++) {
        if (_0x573d37(_0x11da69[_0x152093], _0x152093)) {
          je(_0x11da69, [_0x152093].concat(_0x87e8bb), _0x2c6ae7);
        }
      }
      return;
    } else if (_0x3dd2c3 && _0x37ada2 === "object") {
      const {
        from: _0x3f4b7f = 0,
        to: _0x4c0fc6 = _0x11da69.length - 1,
        by: _0x378d85 = 1
      } = _0x573d37;
      for (let _0x1a7ee8 = _0x3f4b7f; _0x1a7ee8 <= _0x4c0fc6; _0x1a7ee8 += _0x378d85) {
        je(_0x11da69, [_0x1a7ee8].concat(_0x87e8bb), _0x2c6ae7);
      }
      return;
    } else if (_0x87e8bb.length > 1) {
      je(_0x11da69[_0x573d37], _0x87e8bb, [_0x573d37].concat(_0x2c6ae7));
      return;
    }
    _0x5657e7 = _0x11da69[_0x573d37];
    _0x2c6ae7 = [_0x573d37].concat(_0x2c6ae7);
  }
  let _0x3657f2 = _0x87e8bb[0];
  if ((typeof _0x3657f2 != "function" || !(_0x3657f2 = _0x3657f2(_0x5657e7, _0x2c6ae7), _0x3657f2 === _0x5657e7)) && (_0x573d37 !== undefined || _0x3657f2 != null)) {
    _0x3657f2 = Fe(_0x3657f2);
    if (_0x573d37 === undefined || st(_0x5657e7) && st(_0x3657f2) && !Array.isArray(_0x3657f2)) {
      yn(_0x5657e7, _0x3657f2);
    } else {
      dt(_0x11da69, _0x573d37, _0x3657f2);
    }
  }
}
function Tt(...[_0x3d6331, _0x14e9e6]) {
  const _0x4fed00 = Fe(_0x3d6331 || {});
  const _0x5bb1e4 = Array.isArray(_0x4fed00);
  const _0x20bd42 = hn(_0x4fed00);
  function _0x1dcde9(..._0x4929e5) {
    rt(() => {
      if (_0x5bb1e4 && _0x4929e5.length === 1) {
        Un(_0x4fed00, _0x4929e5[0]);
      } else {
        je(_0x4fed00, _0x4929e5);
      }
    });
  }
  return [_0x20bd42, _0x1dcde9];
}
function zn(_0x63d938) {
  return _0x63d938 !== null && (typeof _0x63d938 == "object" || typeof _0x63d938 == "function");
}
function Ut(_0x30ab64, ..._0x3f2e82) {
  if (typeof _0x30ab64 == "function") {
    return _0x30ab64(..._0x3f2e82);
  } else {
    return _0x30ab64;
  }
}
var Vn = ce;
var Yn = () => {
  let _0x2f4684 = [];
  const _0x327f2f = () => _0x2f4684 = [];
  return {
    push: (..._0x25c2d5) => _0x2f4684.push(..._0x25c2d5),
    execute(_0x3c54a8, _0x12d335, _0x4ce3af, _0xc93210) {
      _0x2f4684.forEach(_0x20e0c7 => _0x20e0c7(_0x3c54a8, _0x12d335, _0x4ce3af, _0xc93210));
      _0x327f2f();
    },
    clear: _0x327f2f
  };
};
function Zn(_0x56484f, _0x39d550, _0xf00ff1, _0x1f3aa7) {
  _0x56484f.addEventListener(_0x39d550, _0xf00ff1, _0x1f3aa7);
  return Vn(_0x56484f.removeEventListener.bind(_0x56484f, _0x39d550, _0xf00ff1, _0x1f3aa7));
}
function wn(_0x2bcd47, _0x406668) {
  const {
    push: _0x15a70b,
    execute: _0x5ed3ba
  } = Yn();
  return [(_0x1c500e, _0x12fd28, _0x28bb25) => {
    const _0x89a8d9 = Zn(_0x2bcd47, _0x1c500e, _0x12fd28, _0x28bb25 ?? _0x406668);
    _0x15a70b(_0x89a8d9);
    return _0x89a8d9;
  }, ce(_0x5ed3ba)];
}
function Kn(_0x19c1d2, _0x28d409 = sn()) {
  let _0x5205d5 = 0;
  let _0x34ee02;
  let _0x2eb142;
  return () => {
    _0x5205d5++;
    ce(() => {
      _0x5205d5--;
      queueMicrotask(() => {
        if (!_0x5205d5 && _0x2eb142) {
          _0x2eb142();
          _0x2eb142 = _0x34ee02 = undefined;
        }
      });
    });
    if (!_0x2eb142) {
      qe(_0x3396d8 => _0x34ee02 = _0x19c1d2(_0x2eb142 = _0x3396d8), _0x28d409);
    }
    return _0x34ee02;
  };
}
function Qn(_0x3ba4df) {
  const _0x4e4d1e = sn();
  const _0x5dcd9a = Kn(_0x3ba4df, _0x4e4d1e);
  return () => _0x5dcd9a();
}
function Xn(_0x10dd84) {
  const _0x1581d4 = {
    ..._0x10dd84
  };
  const _0x116a87 = {
    ..._0x10dd84
  };
  const _0x10ad15 = {};
  const _0x4956ec = _0x42abc5 => {
    let _0x13e48e = _0x10ad15[_0x42abc5];
    if (!_0x13e48e) {
      if (!At()) {
        return _0x1581d4[_0x42abc5];
      }
      _0x10ad15[_0x42abc5] = _0x13e48e = b(_0x1581d4[_0x42abc5], {
        internal: true
      });
      delete _0x1581d4[_0x42abc5];
    }
    return _0x13e48e[0]();
  };
  for (const _0x418c1c in _0x10dd84) {
    Object.defineProperty(_0x116a87, _0x418c1c, {
      get: () => _0x4956ec(_0x418c1c),
      enumerable: true
    });
  }
  const _0x160529 = (_0x16b925, _0x7b385c) => {
    const _0x3ad088 = _0x10ad15[_0x16b925];
    if (_0x3ad088) {
      return _0x3ad088[1](_0x7b385c);
    }
    if (_0x16b925 in _0x1581d4) {
      _0x1581d4[_0x16b925] = Ut(_0x7b385c, [_0x1581d4[_0x16b925]]);
    }
  };
  return [_0x116a87, (_0x17742b, _0x3aa7e9) => {
    if (zn(_0x17742b)) {
      const _0x4234a0 = oe(() => Object.entries(Ut(_0x17742b, _0x116a87)));
      rt(() => {
        for (const [_0xf39111, _0x36f2c7] of _0x4234a0) {
          _0x160529(_0xf39111, () => _0x36f2c7);
        }
      });
    } else {
      _0x160529(_0x17742b, _0x3aa7e9);
    }
    return _0x116a87;
  }];
}
var bn = {
  passive: true
};
var Jn = {
  x: 0,
  y: 0,
  isInside: false,
  sourceType: null
};
function er(_0x31ff6c = window, _0x2601b9, _0x4ec3cd = {}) {
  const {
    touch: _0x319376 = true,
    followTouch: _0x4e196e = true
  } = _0x4ec3cd;
  const [_0x1e5d53, _0x540a9e] = wn(_0x31ff6c, bn);
  const _0x36998d = _0x27dc87 => _0x2601b9({
    x: _0x27dc87.pageX,
    y: _0x27dc87.pageY,
    sourceType: "mouse"
  });
  _0x1e5d53("mousemove", _0x36998d);
  _0x1e5d53("dragover", _0x36998d);
  if (_0x319376) {
    const _0x4d8d9 = _0x5ab16e => {
      if (_0x5ab16e.touches.length) {
        _0x2601b9({
          x: _0x5ab16e.touches[0].clientX,
          y: _0x5ab16e.touches[0].clientY,
          sourceType: "touch"
        });
      }
    };
    _0x1e5d53("touchstart", _0x4d8d9);
    if (_0x4e196e) {
      _0x1e5d53("touchmove", _0x4d8d9);
    }
  }
  return _0x540a9e;
}
function tr(_0x2c42c7 = window, _0x24ecac, _0x4b0ca8 = {}) {
  const {
    touch: _0x74b375 = true
  } = _0x4b0ca8;
  const [_0x5c609f, _0x3888b3] = wn(_0x2c42c7, bn);
  let _0x36d292 = false;
  let _0x447778 = !_0x74b375;
  function _0x13e468(_0x4e64c1) {
    if (this === "mouse") {
      _0x36d292 = _0x4e64c1;
    } else {
      _0x447778 = _0x4e64c1;
    }
    _0x24ecac(_0x36d292 || _0x447778);
  }
  _0x5c609f("mouseover", _0x13e468.bind("mouse", true));
  _0x5c609f("mouseout", _0x13e468.bind("mouse", false));
  _0x5c609f("mousemove", _0x13e468.bind("mouse", true), {
    passive: true,
    once: true
  });
  if (_0x74b375) {
    _0x5c609f("touchstart", _0x13e468.bind("touch", true));
    _0x5c609f("touchend", _0x13e468.bind("touch", false));
  }
  return _0x3888b3;
}
function In(_0x51b8cb, _0x2dadce = {}) {
  const _0x21ca38 = {
    ...Jn,
    ..._0x2dadce.initialValue
  };
  const [_0x2a6b75, _0x40f6ad] = Xn(_0x21ca38);
  const _0x34b527 = _0x138c04 => {
    er(_0x138c04, _0x40f6ad, _0x2dadce);
    tr(_0x138c04, _0x40f6ad.bind(undefined, "isInside"), _0x2dadce);
  };
  if (typeof _0x51b8cb != "function") {
    _0x34b527(_0x51b8cb);
  } else {
    xe(() => _0x34b527(_0x51b8cb()));
  }
  return _0x2a6b75;
}
In.bind(undefined, undefined, undefined);
var nr = () => {};
var zt = (_0x3d5d5e, _0x41b8dd) => _0x41b8dd();
function rr(_0x37edfd, _0x543e13) {
  const _0x365cc4 = oe(_0x37edfd);
  const _0x25249a = _0x365cc4 ? [_0x365cc4] : [];
  const {
    onEnter: _0x5d8876 = zt,
    onExit: _0x16215a = zt
  } = _0x543e13;
  const [_0x29877e, _0x328f07] = b(_0x543e13.appear ? [] : _0x25249a);
  const [_0x2cbb90] = En();
  let _0x3c73eb;
  let _0xc22ba5 = false;
  function _0x10aa9c(_0x17cf65, _0x4df49c) {
    if (!_0x17cf65) {
      return _0x4df49c && _0x4df49c();
    }
    _0xc22ba5 = true;
    _0x16215a(_0x17cf65, () => {
      rt(() => {
        _0xc22ba5 = false;
        _0x328f07(_0x5a0fc3 => _0x5a0fc3.filter(_0xf41bc2 => _0xf41bc2 !== _0x17cf65));
        if (_0x4df49c) {
          _0x4df49c();
        }
      });
    });
  }
  function _0x380d4d(_0x1861ae) {
    const _0x581e72 = _0x3c73eb;
    if (!_0x581e72) {
      return _0x1861ae && _0x1861ae();
    }
    _0x3c73eb = undefined;
    _0x328f07(_0xf8a930 => [_0x581e72, ..._0xf8a930]);
    _0x5d8876(_0x581e72, _0x1861ae ?? nr);
  }
  const _0x4c5bbe = _0x543e13.mode === "out-in" ? _0x1f5596 => _0xc22ba5 || _0x10aa9c(_0x1f5596, _0x380d4d) : _0x543e13.mode === "in-out" ? _0x82eb25 => _0x380d4d(() => _0x10aa9c(_0x82eb25)) : _0x361ca4 => {
    _0x10aa9c(_0x361ca4);
    _0x380d4d();
  };
  An(_0x4c61c2 => {
    const _0x41f1d0 = _0x37edfd();
    if (oe(_0x2cbb90)) {
      _0x2cbb90();
      return _0x4c61c2;
    } else {
      if (_0x41f1d0 !== _0x4c61c2) {
        _0x3c73eb = _0x41f1d0;
        rt(() => oe(() => _0x4c5bbe(_0x4c61c2)));
      }
      return _0x41f1d0;
    }
  }, _0x543e13.appear ? undefined : _0x365cc4);
  return _0x29877e;
}
var Vt = _0x5899b0 => _0x5899b0 instanceof Element;
function Mt(_0x233bbe, _0x44070f) {
  if (_0x44070f(_0x233bbe)) {
    return _0x233bbe;
  }
  if (typeof _0x233bbe == "function" && !_0x233bbe.length) {
    return Mt(_0x233bbe(), _0x44070f);
  }
  if (Array.isArray(_0x233bbe)) {
    for (const _0x1651c4 of _0x233bbe) {
      const _0x18d15e = Mt(_0x1651c4, _0x44070f);
      if (_0x18d15e) {
        return _0x18d15e;
      }
    }
  }
  return null;
}
function ir(_0x24caae, _0x59f32a = Vt, _0xe8e0d5 = Vt) {
  const _0x3308da = W(_0x24caae);
  return W(() => Mt(_0x3308da(), _0x59f32a));
}
function or(_0x234f39) {
  return W(() => {
    const _0x16d990 = _0x234f39.name || "s";
    return {
      enterActive: (_0x234f39.enterActiveClass || _0x16d990 + "-enter-active").split(" "),
      enter: (_0x234f39.enterClass || _0x16d990 + "-enter").split(" "),
      enterTo: (_0x234f39.enterToClass || _0x16d990 + "-enter-to").split(" "),
      exitActive: (_0x234f39.exitActiveClass || _0x16d990 + "-exit-active").split(" "),
      exit: (_0x234f39.exitClass || _0x16d990 + "-exit").split(" "),
      exitTo: (_0x234f39.exitToClass || _0x16d990 + "-exit-to").split(" "),
      move: (_0x234f39.moveClass || _0x16d990 + "-move").split(" ")
    };
  });
}
function Sn(_0x17b502) {
  requestAnimationFrame(() => requestAnimationFrame(_0x17b502));
}
function ar(_0x3415db, _0x1047e9, _0x53a644, _0x58e220) {
  const {
    onBeforeEnter: _0x35bbb8,
    onEnter: _0x273ae0,
    onAfterEnter: _0x156275
  } = _0x1047e9;
  _0x35bbb8?.(_0x53a644);
  _0x53a644.classList.add(..._0x3415db.enter);
  _0x53a644.classList.add(..._0x3415db.enterActive);
  queueMicrotask(() => {
    if (!_0x53a644.parentNode) {
      return _0x58e220?.();
    }
    _0x273ae0?.(_0x53a644, () => _0x2fb022());
  });
  Sn(() => {
    _0x53a644.classList.remove(..._0x3415db.enter);
    _0x53a644.classList.add(..._0x3415db.enterTo);
    if (!_0x273ae0 || _0x273ae0.length < 2) {
      _0x53a644.addEventListener("transitionend", _0x2fb022);
      _0x53a644.addEventListener("animationend", _0x2fb022);
    }
  });
  function _0x2fb022(_0x4a3ac2) {
    if (!_0x4a3ac2 || _0x4a3ac2.target === _0x53a644) {
      _0x58e220?.();
      _0x53a644.removeEventListener("transitionend", _0x2fb022);
      _0x53a644.removeEventListener("animationend", _0x2fb022);
      _0x53a644.classList.remove(..._0x3415db.enterActive);
      _0x53a644.classList.remove(..._0x3415db.enterTo);
      _0x156275?.(_0x53a644);
    }
  }
}
function lr(_0x5673dd, _0x2c5a50, _0x5328bb, _0x3b721a) {
  const {
    onBeforeExit: _0x519141,
    onExit: _0x2bcfdf,
    onAfterExit: _0x507729
  } = _0x2c5a50;
  if (!_0x5328bb.parentNode) {
    return _0x3b721a?.();
  }
  _0x519141?.(_0x5328bb);
  _0x5328bb.classList.add(..._0x5673dd.exit);
  _0x5328bb.classList.add(..._0x5673dd.exitActive);
  _0x2bcfdf?.(_0x5328bb, () => _0x271747());
  Sn(() => {
    _0x5328bb.classList.remove(..._0x5673dd.exit);
    _0x5328bb.classList.add(..._0x5673dd.exitTo);
    if (!_0x2bcfdf || _0x2bcfdf.length < 2) {
      _0x5328bb.addEventListener("transitionend", _0x271747);
      _0x5328bb.addEventListener("animationend", _0x271747);
    }
  });
  function _0x271747(_0x275402) {
    if (!_0x275402 || _0x275402.target === _0x5328bb) {
      _0x3b721a?.();
      _0x5328bb.removeEventListener("transitionend", _0x271747);
      _0x5328bb.removeEventListener("animationend", _0x271747);
      _0x5328bb.classList.remove(..._0x5673dd.exitActive);
      _0x5328bb.classList.remove(..._0x5673dd.exitTo);
      _0x507729?.(_0x5328bb);
    }
  }
}
var sr = {
  inout: "in-out",
  outin: "out-in"
};
var Ue = _0x8b1b84 => {
  const _0x2e7c09 = or(_0x8b1b84);
  return rr(ir(() => _0x8b1b84.children), {
    mode: sr[_0x8b1b84.mode],
    appear: _0x8b1b84.appear,
    onEnter(_0x502155, _0x55d37a) {
      ar(_0x2e7c09(), _0x8b1b84, _0x502155, _0x55d37a);
    },
    onExit(_0x2ae3df, _0x47d963) {
      lr(_0x2e7c09(), _0x8b1b84, _0x2ae3df, _0x47d963);
    }
  });
};
const dr = "_title_egzn2_1";
const ur = "_description_egzn2_11";
const Yt = {
  title: dr,
  description: ur
};
const cr = B("<div class=\"[5vh] flex flex-col items-start justify-start\"><div>FARMING ITEMS</div><div>Drag and drop inventory items to the PLANT slot to plant a seed into the grow bed.");
const fr = () => (() => {
  const _0xae0dd2 = cr();
  const _0x27c8d2 = _0xae0dd2.firstChild;
  const _0x2359cd = _0x27c8d2.nextSibling;
  A(_0x5052bf => {
    const _0x3affcd = Yt.title;
    const _0x3d0950 = Yt.description;
    if (_0x3affcd !== _0x5052bf._v$) {
      f(_0x27c8d2, _0x5052bf._v$ = _0x3affcd);
    }
    if (_0x3d0950 !== _0x5052bf._v$2) {
      f(_0x2359cd, _0x5052bf._v$2 = _0x3d0950);
    }
    return _0x5052bf;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0xae0dd2;
})();
const _r = "_App_1sf6u_1";
const gr = "_outer_1sf6u_14";
const mr = "_container_1sf6u_28";
const mt = {
  App: _r,
  outer: gr,
  container: mr
};
const hr = "_itemBox_160z9_1";
const vr = "_itemContainer_160z9_16";
const $r = "_dragging_160z9_34";
const yr = "_itemContent_160z9_44";
const wr = "_slotNumber_160z9_52";
const br = "_healthNumber_160z9_65";
const Ir = "_qualityNumber_160z9_78";
const Sr = "_imageWrapper_160z9_91";
const xr = "_footer_160z9_103";
const he = {
  itemBox: hr,
  itemContainer: vr,
  dragging: $r,
  itemContent: yr,
  slotNumber: wr,
  healthNumber: br,
  qualityNumber: Ir,
  imageWrapper: Sr,
  footer: xr
};
const Cr = B("<div class=\"flex flex-col gap-1\"><div><div><div><div></div><div></div><div><img></div></div></div><div><h1>");
const pr = _0x110b2f => {
  const _0x419f36 = _0x110b2f.quantity ? "x" + _0x110b2f.quantity : "";
  const _0x12f8eb = _0x110b2f.quality ? _0x110b2f.quality + "Q" : "";
  const _0x81362f = _0x42e143 => {
    _0x42e143.preventDefault();
    _0x42e143.stopPropagation();
    _0x110b2f.onDragStart(_0x42e143, _0x110b2f.image, _0x110b2f.itemId, _0x110b2f.itemVariant, _0x110b2f.itemSlot);
  };
  const _0x51a93a = _0x1c3668 => {
    _0x1c3668.preventDefault();
    _0x1c3668.stopPropagation();
    _0x110b2f.onDragEnd(_0x1c3668);
  };
  const _0x3b5234 = _0x4b64b2 => {
    _0x4b64b2.preventDefault();
    _0x4b64b2.stopPropagation();
    _0x110b2f.onDragStart(_0x4b64b2, _0x110b2f.image, _0x110b2f.itemId, _0x110b2f.itemVariant, _0x110b2f.itemSlot);
  };
  return (() => {
    const _0x2d39c9 = Cr();
    const _0x3a586e = _0x2d39c9.firstChild;
    const _0xc1c40a = _0x3a586e.firstChild;
    const _0x15c1d7 = _0xc1c40a.firstChild;
    const _0x51ba24 = _0x15c1d7.firstChild;
    const _0x26f6e5 = _0x51ba24.nextSibling;
    const _0x3b2284 = _0x26f6e5.nextSibling;
    const _0x4ade73 = _0x3b2284.firstChild;
    const _0x2e9dc8 = _0xc1c40a.nextSibling;
    const _0x32f929 = _0x2e9dc8.firstChild;
    _0xc1c40a.$$mousedown = _0x3b5234;
    _0xc1c40a.addEventListener("dragend", _0x51a93a);
    _0xc1c40a.addEventListener("dragstart", _0x81362f);
    de(_0xc1c40a, "draggable", true);
    g(_0x51ba24, _0x419f36);
    g(_0x26f6e5, _0x12f8eb);
    g(_0x32f929, () => _0x110b2f.name);
    A(_0x7e8083 => {
      const _0x30a14b = he.itemBox;
      const _0x177b56 = he.itemContainer + " " + (_0x110b2f.dragging ? he.dragging : "");
      const _0x5401f0 = he.itemContent;
      const _0x478b1c = he.slotNumber;
      const _0x11a045 = he.qualityNumber;
      const _0x5c65a0 = he.imageWrapper;
      const _0x4eae46 = _0x110b2f.image;
      const _0x296083 = he.footer;
      if (_0x30a14b !== _0x7e8083._v$) {
        f(_0x3a586e, _0x7e8083._v$ = _0x30a14b);
      }
      if (_0x177b56 !== _0x7e8083._v$2) {
        f(_0xc1c40a, _0x7e8083._v$2 = _0x177b56);
      }
      if (_0x5401f0 !== _0x7e8083._v$3) {
        f(_0x15c1d7, _0x7e8083._v$3 = _0x5401f0);
      }
      if (_0x478b1c !== _0x7e8083._v$4) {
        f(_0x51ba24, _0x7e8083._v$4 = _0x478b1c);
      }
      if (_0x11a045 !== _0x7e8083._v$5) {
        f(_0x26f6e5, _0x7e8083._v$5 = _0x11a045);
      }
      if (_0x5c65a0 !== _0x7e8083._v$6) {
        f(_0x3b2284, _0x7e8083._v$6 = _0x5c65a0);
      }
      if (_0x4eae46 !== _0x7e8083._v$7) {
        de(_0x4ade73, "src", _0x7e8083._v$7 = _0x4eae46);
      }
      if (_0x296083 !== _0x7e8083._v$8) {
        f(_0x2e9dc8, _0x7e8083._v$8 = _0x296083);
      }
      return _0x7e8083;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined
    });
    return _0x2d39c9;
  })();
};
ve(["mousedown"]);
const Mr = "_container_i49dn_1";
const kr = "_bar_i49dn_11";
const Zt = {
  container: Mr,
  bar: kr
};
const Ar = B("<div><div>");
const Br = () => (() => {
  const _0x47c446 = Ar();
  const _0x92e9aa = _0x47c446.firstChild;
  A(_0x2e0008 => {
    const _0x2cda2f = Zt.container;
    const _0x5e2049 = Zt.bar;
    if (_0x2cda2f !== _0x2e0008._v$) {
      f(_0x47c446, _0x2e0008._v$ = _0x2cda2f);
    }
    if (_0x5e2049 !== _0x2e0008._v$2) {
      f(_0x92e9aa, _0x2e0008._v$2 = _0x5e2049);
    }
    return _0x2e0008;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x47c446;
})();
const Er = "_itemBox_o0nyy_1";
const Tr = "_itemContainer_o0nyy_16";
const Gr = "_itemContent_o0nyy_34";
const Dr = "_slotNumber_o0nyy_42";
const Lr = "_imageWrapper_o0nyy_56";
const Pr = "_footer_o0nyy_68";
const ke = {
  itemBox: Er,
  itemContainer: Tr,
  itemContent: Gr,
  slotNumber: Dr,
  imageWrapper: Lr,
  footer: Pr
};
const Nr = B("<div class=\"flex flex-col gap-1\"><div><div><div><div></div><div></div></div></div><div>");
const Or = () => (() => {
  const _0x251e27 = Nr();
  const _0x1e9e24 = _0x251e27.firstChild;
  const _0x9d76e5 = _0x1e9e24.firstChild;
  const _0x115e6f = _0x9d76e5.firstChild;
  const _0x1be5c2 = _0x115e6f.firstChild;
  const _0x25df0b = _0x1be5c2.nextSibling;
  const _0x199a6e = _0x9d76e5.nextSibling;
  A(_0x88211f => {
    const _0x2e1bed = ke.itemBox;
    const _0x37238c = ke.itemContainer;
    const _0x274603 = ke.itemContent;
    const _0x24ec37 = ke.slotNumber;
    const _0x40a21c = ke.imageWrapper;
    const _0xed5837 = ke.footer;
    if (_0x2e1bed !== _0x88211f._v$) {
      f(_0x1e9e24, _0x88211f._v$ = _0x2e1bed);
    }
    if (_0x37238c !== _0x88211f._v$2) {
      f(_0x9d76e5, _0x88211f._v$2 = _0x37238c);
    }
    if (_0x274603 !== _0x88211f._v$3) {
      f(_0x115e6f, _0x88211f._v$3 = _0x274603);
    }
    if (_0x24ec37 !== _0x88211f._v$4) {
      f(_0x1be5c2, _0x88211f._v$4 = _0x24ec37);
    }
    if (_0x40a21c !== _0x88211f._v$5) {
      f(_0x25df0b, _0x88211f._v$5 = _0x40a21c);
    }
    if (_0xed5837 !== _0x88211f._v$6) {
      f(_0x199a6e, _0x88211f._v$6 = _0xed5837);
    }
    return _0x88211f;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined
  });
  return _0x251e27;
})();
const jr = B("<div><div><div><div class=\"flex w-full flex-col place-items-start justify-start gap-[0.5vh]\"></div><div class=\"no-scrollbar flex w-full flex-row flex-wrap gap-[0.5vh] overflow-scroll overflow-y-auto overflow-x-hidden\">");
const Wr = _0x3b0a7b => {
  const _0x2c3b60 = W(() => {
    const _0x2fe94c = _0x3b0a7b.items.length;
    const _0x39e9f1 = _0x2fe94c % 3 === 0 ? 0 : 3 - _0x2fe94c % 3;
    const _0x2a8f36 = _0x2fe94c + _0x39e9f1;
    const _0x195d4a = Math.max(9 - _0x2a8f36, 0);
    return [..._0x3b0a7b.items, ...Array(_0x39e9f1 + _0x195d4a).fill(null)];
  });
  return c(Ue, {
    name: "slide-left",
    get children() {
      return c(R, {
        when: true,
        get children() {
          const _0x1563d0 = jr();
          const _0x1c2b18 = _0x1563d0.firstChild;
          const _0x5ac0ce = _0x1c2b18.firstChild;
          const _0x43bf9a = _0x5ac0ce.firstChild;
          const _0x38b5d2 = _0x43bf9a.nextSibling;
          g(_0x43bf9a, c(fr, {}), null);
          g(_0x43bf9a, c(Br, {}), null);
          g(_0x38b5d2, () => _0x2c3b60().map(_0x2fd660 => _0x2fd660 ? c(pr, {
            get name() {
              return _0x2fd660.display_name;
            },
            get image() {
              return _0x2fd660.display_image;
            },
            get quantity() {
              return _0x2fd660.quantity.toString();
            },
            onDragStart: (_0x1d02c7, _0x57f735) => _0x3b0a7b.onDragStart(_0x1d02c7, _0x57f735, _0x2fd660.id, _0x2fd660.itemId, _0x2fd660.variant, _0x2fd660.slot),
            get onDragEnd() {
              return _0x3b0a7b.onDragEnd;
            },
            get dragging() {
              return _0x3b0a7b.dragging;
            },
            get itemId() {
              return _0x2fd660.itemId;
            },
            get itemVariant() {
              return _0x2fd660.variant;
            },
            get itemSlot() {
              return _0x2fd660.slot;
            }
          }) : c(Or, {})));
          A(_0x39c0e7 => {
            const _0xa37858 = mt.App;
            const _0x100628 = mt.outer;
            const _0x4a1fc2 = mt.container;
            if (_0xa37858 !== _0x39c0e7._v$) {
              f(_0x1563d0, _0x39c0e7._v$ = _0xa37858);
            }
            if (_0x100628 !== _0x39c0e7._v$2) {
              f(_0x1c2b18, _0x39c0e7._v$2 = _0x100628);
            }
            if (_0x4a1fc2 !== _0x39c0e7._v$3) {
              f(_0x5ac0ce, _0x39c0e7._v$3 = _0x4a1fc2);
            }
            return _0x39c0e7;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined
          });
          return _0x1563d0;
        }
      });
    }
  });
};
const qr = "_title_1uofj_1";
const Rr = "_additionalText_1uofj_11";
const Hr = "_description_1uofj_22";
const ht = {
  title: qr,
  additionalText: Rr,
  description: Hr
};
const Fr = B("<div class=\"flex flex-col\"><div class=\"flex justify-between items-center\"><div></div><div></div></div><div>");
const Ae = _0x410c3a => (() => {
  const _0x5e2108 = Fr();
  const _0xc68238 = _0x5e2108.firstChild;
  const _0x452cb0 = _0xc68238.firstChild;
  const _0x2bbf0f = _0x452cb0.nextSibling;
  const _0x3cc1b1 = _0xc68238.nextSibling;
  g(_0x452cb0, () => _0x410c3a.title);
  g(_0x2bbf0f, () => _0x410c3a.additionalText);
  g(_0x3cc1b1, () => _0x410c3a.description);
  A(_0x4723fb => {
    const _0x3e1d5f = ht.title;
    const _0x22306a = ht.additionalText;
    const _0xb535a9 = ht.description;
    if (_0x3e1d5f !== _0x4723fb._v$) {
      f(_0x452cb0, _0x4723fb._v$ = _0x3e1d5f);
    }
    if (_0x22306a !== _0x4723fb._v$2) {
      f(_0x2bbf0f, _0x4723fb._v$2 = _0x22306a);
    }
    if (_0xb535a9 !== _0x4723fb._v$3) {
      f(_0x3cc1b1, _0x4723fb._v$3 = _0xb535a9);
    }
    return _0x4723fb;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0x5e2108;
})();
const Ur = "_App_oydc0_1";
const zr = "_outer_oydc0_15";
const Vr = "_container_oydc0_31";
const Yr = "_plantcontainer_oydc0_40";
const Le = {
  App: Ur,
  outer: zr,
  container: Vr,
  plantcontainer: Yr
};
const Zr = "_itemBox_cj6kh_1";
const Kr = "_itemContainer_cj6kh_10";
const Qr = "_itemContent_cj6kh_20";
const Xr = "_slotNumber_cj6kh_28";
const Jr = "_imageWrapper_cj6kh_41";
const ei = "_footer_cj6kh_53";
const Be = {
  itemBox: Zr,
  itemContainer: Kr,
  itemContent: Qr,
  slotNumber: Xr,
  imageWrapper: Jr,
  footer: ei
};
const ti = B("<div><div><div><div></div><div><img></div></div></div><div><h1>");
const ni = _0x4d69bf => {
  const _0x3a4508 = {
    background: "radial-gradient(46.67% 46.67% at 50% 50%, rgba(0, 248, 185, 0.25) 0%, rgba(0, 102, 76, 0.25) 100%)",
    border: "1px solid #00F8B9",
    boxShadow: "0 4px 28px rgba(0, 248, 185, 0.55)"
  };
  const _0x1dbad9 = _0x207b50 => {
    if (_0x207b50.length === 1) {
      return _0x207b50[0] + 1;
    }
    {
      const _0x4c389e = _0x207b50[0] + 1;
      const _0x15590c = _0x207b50[_0x207b50.length - 1] + 1;
      return _0x4c389e + "-" + _0x15590c;
    }
  };
  const _0x33691f = _0x4d69bf.name === "Wheat2" ? "Wheat" : _0x4d69bf.name;
  return (() => {
    const _0x521afa = ti();
    const _0x28a5b0 = _0x521afa.firstChild;
    const _0x3fa35b = _0x28a5b0.firstChild;
    const _0x54ba35 = _0x3fa35b.firstChild;
    const _0x2f6afd = _0x54ba35.nextSibling;
    const _0x52763b = _0x2f6afd.firstChild;
    const _0x4c6837 = _0x28a5b0.nextSibling;
    const _0xd7b90c = _0x4c6837.firstChild;
    mn(_0x521afa, "click", _0x4d69bf.onSelect, true);
    g(_0x54ba35, () => _0x1dbad9(_0x4d69bf.slotnum));
    g(_0xd7b90c, _0x33691f);
    A(_0x1096ac => {
      const _0x22500f = Be.itemBox + " flex flex-col gap-1";
      const _0x553532 = Be.itemContainer;
      const _0x441484 = _0x4d69bf.selected ? _0x3a4508 : {};
      const _0x11b697 = Be.itemContent;
      const _0x3f4172 = Be.slotNumber;
      const _0x461775 = Be.imageWrapper;
      const _0x245c61 = _0x4d69bf.image;
      const _0x2615fd = Be.footer;
      const _0x50dadb = _0x4d69bf.selected ? _0x3a4508 : {};
      if (_0x22500f !== _0x1096ac._v$) {
        f(_0x521afa, _0x1096ac._v$ = _0x22500f);
      }
      if (_0x553532 !== _0x1096ac._v$2) {
        f(_0x28a5b0, _0x1096ac._v$2 = _0x553532);
      }
      _0x1096ac._v$3 = at(_0x28a5b0, _0x441484, _0x1096ac._v$3);
      if (_0x11b697 !== _0x1096ac._v$4) {
        f(_0x3fa35b, _0x1096ac._v$4 = _0x11b697);
      }
      if (_0x3f4172 !== _0x1096ac._v$5) {
        f(_0x54ba35, _0x1096ac._v$5 = _0x3f4172);
      }
      if (_0x461775 !== _0x1096ac._v$6) {
        f(_0x2f6afd, _0x1096ac._v$6 = _0x461775);
      }
      if (_0x245c61 !== _0x1096ac._v$7) {
        de(_0x52763b, "src", _0x1096ac._v$7 = _0x245c61);
      }
      if (_0x2615fd !== _0x1096ac._v$8) {
        f(_0x4c6837, _0x1096ac._v$8 = _0x2615fd);
      }
      _0x1096ac._v$9 = at(_0x4c6837, _0x50dadb, _0x1096ac._v$9);
      return _0x1096ac;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined
    });
    return _0x521afa;
  })();
};
ve(["click"]);
const ri = "_arrow_10r6d_1";
const ii = "_dragging_10r6d_12";
const Kt = {
  arrow: ri,
  dragging: ii
};
const oi = B("<div class=\"flex flex-col\"><div><svg width=\"5\" height=\"10\" viewBox=\"0 0 5 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M-0.00012207 5L4.99988 0V10L-0.00012207 5Z\" fill=\"white\">");
const ai = _0x20f333 => {
  let _0x3beb85;
  const [_0x475960, _0x5deab0] = b(false);
  const _0x2fc63a = () => {
    if (!_0x475960()) {
      const _0x543a94 = _0x20f333.selectedItemIndex();
      if (_0x543a94 > 0) {
        _0x20f333.setSelectedItemIndex(_0x543a94 - 1);
      } else {
        _0x20f333.setSelectedItemIndex(_0x20f333.totalItems - 1);
      }
    }
  };
  const _0x221605 = () => {
    _0x5deab0(true);
    _0x3beb85 = setInterval(() => {
      const _0x168424 = _0x20f333.selectedItemIndex();
      if (_0x168424 > 0) {
        _0x20f333.setSelectedItemIndex(_0x168424 - 1);
      } else {
        _0x20f333.setSelectedItemIndex(_0x20f333.totalItems - 1);
      }
    }, 150);
  };
  const _0x183537 = () => {
    _0x5deab0(false);
    clearInterval(_0x3beb85);
  };
  const _0x5083df = () => {
    _0x5deab0(false);
    clearInterval(_0x3beb85);
  };
  Te(() => {
    window.addEventListener("mouseup", _0x183537);
  });
  ce(() => {
    window.removeEventListener("mouseup", _0x183537);
    clearInterval(_0x3beb85);
  });
  return (() => {
    const _0x3f66f6 = oi();
    const _0x25e9df = _0x3f66f6.firstChild;
    _0x25e9df.addEventListener("mouseleave", _0x5083df);
    _0x25e9df.$$mouseup = _0x183537;
    _0x25e9df.$$mousedown = _0x221605;
    _0x25e9df.$$click = _0x2fc63a;
    A(() => f(_0x25e9df, Kt.arrow + " " + (_0x20f333.dragging ? Kt.dragging : "")));
    return _0x3f66f6;
  })();
};
ve(["click", "mousedown", "mouseup"]);
const li = "_arrow_10r6d_1";
const si = "_dragging_10r6d_12";
const Qt = {
  arrow: li,
  dragging: si
};
const di = B("<div class=\"flex flex-col\"><div><svg width=\"5\" height=\"10\" viewBox=\"0 0 5 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.99988 5L-0.00012207 0V10L4.99988 5Z\" fill=\"white\">");
const ui = _0x52d00d => {
  let _0x322cf0;
  const [_0x35b19c, _0x589914] = b(false);
  const _0x14f0a7 = () => {
    if (!_0x35b19c()) {
      const _0x4f8d2b = _0x52d00d.selectedItemIndex();
      if (_0x4f8d2b < _0x52d00d.totalItems - 1) {
        _0x52d00d.setSelectedItemIndex(_0x4f8d2b + 1);
      } else {
        _0x52d00d.setSelectedItemIndex(0);
      }
    }
  };
  const _0x47a262 = () => {
    _0x589914(true);
    _0x322cf0 = setInterval(() => {
      const _0xf7cdb2 = _0x52d00d.selectedItemIndex();
      if (_0xf7cdb2 < _0x52d00d.totalItems - 1) {
        _0x52d00d.setSelectedItemIndex(_0xf7cdb2 + 1);
      } else {
        _0x52d00d.setSelectedItemIndex(0);
      }
    }, 200);
  };
  const _0x39e2c1 = () => {
    _0x589914(false);
    clearInterval(_0x322cf0);
  };
  const _0x3f9d08 = () => {
    _0x589914(false);
    clearInterval(_0x322cf0);
  };
  Te(() => {
    window.addEventListener("mouseup", _0x39e2c1);
  });
  ce(() => {
    window.removeEventListener("mouseup", _0x39e2c1);
    clearInterval(_0x322cf0);
  });
  return (() => {
    const _0xef932a = di();
    const _0x264cdc = _0xef932a.firstChild;
    _0x264cdc.addEventListener("mouseleave", _0x3f9d08);
    _0x264cdc.$$mouseup = _0x39e2c1;
    _0x264cdc.$$mousedown = _0x47a262;
    _0x264cdc.$$click = _0x14f0a7;
    A(() => f(_0x264cdc, Qt.arrow + " " + (_0x52d00d.dragging ? Qt.dragging : "")));
    return _0xef932a;
  })();
};
ve(["click", "mousedown", "mouseup"]);
const ci = "_container_i49dn_1";
const fi = "_bar_i49dn_11";
const Xt = {
  container: ci,
  bar: fi
};
const _i = B("<div><div>");
const gi = () => (() => {
  const _0x5207eb = _i();
  const _0x1d17c7 = _0x5207eb.firstChild;
  A(_0x3180ac => {
    const _0x21b8a4 = Xt.container;
    const _0x479e69 = Xt.bar;
    if (_0x21b8a4 !== _0x3180ac._v$) {
      f(_0x5207eb, _0x3180ac._v$ = _0x21b8a4);
    }
    if (_0x479e69 !== _0x3180ac._v$2) {
      f(_0x1d17c7, _0x3180ac._v$2 = _0x479e69);
    }
    return _0x3180ac;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x5207eb;
})();
const mi = "_itemBox_1d9xo_1";
const hi = "_itemContainer_1d9xo_10";
const vi = "_itemContent_1d9xo_22";
const $i = "_slotNumber_1d9xo_30";
const yi = "_footer_1d9xo_44";
const Pe = {
  itemBox: mi,
  itemContainer: hi,
  itemContent: vi,
  slotNumber: $i,
  footer: yi
};
const wi = B("<div><div><div><div></div></div></div><div>");
const bi = _0x3b98b4 => {
  const _0x2ed499 = {
    background: "radial-gradient(46.67% 46.67% at 50% 50%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    boxShadow: "0 4px 28px rgba(0, 248, 185, 0.55)"
  };
  return (() => {
    const _0xdc25a = wi();
    const _0x591c6a = _0xdc25a.firstChild;
    const _0x524504 = _0x591c6a.firstChild;
    const _0x522495 = _0x524504.firstChild;
    const _0x38465f = _0x591c6a.nextSibling;
    mn(_0xdc25a, "click", _0x3b98b4.onSelect, true);
    g(_0x522495, () => _0x3b98b4.slotnum);
    A(_0x19a732 => {
      const _0x36c704 = Pe.itemBox + " flex flex-col gap-1";
      const _0x1d3b53 = Pe.itemContainer;
      const _0xf11b9e = _0x3b98b4.selected ? _0x2ed499 : {};
      const _0x15560b = Pe.itemContent;
      const _0x271072 = Pe.slotNumber;
      const _0x4e6a0e = Pe.footer;
      const _0xe4ad22 = _0x3b98b4.selected ? _0x2ed499 : {};
      if (_0x36c704 !== _0x19a732._v$) {
        f(_0xdc25a, _0x19a732._v$ = _0x36c704);
      }
      if (_0x1d3b53 !== _0x19a732._v$2) {
        f(_0x591c6a, _0x19a732._v$2 = _0x1d3b53);
      }
      _0x19a732._v$3 = at(_0x591c6a, _0xf11b9e, _0x19a732._v$3);
      if (_0x15560b !== _0x19a732._v$4) {
        f(_0x524504, _0x19a732._v$4 = _0x15560b);
      }
      if (_0x271072 !== _0x19a732._v$5) {
        f(_0x522495, _0x19a732._v$5 = _0x271072);
      }
      if (_0x4e6a0e !== _0x19a732._v$6) {
        f(_0x38465f, _0x19a732._v$6 = _0x4e6a0e);
      }
      _0x19a732._v$7 = at(_0x38465f, _0xe4ad22, _0x19a732._v$7);
      return _0x19a732;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0xdc25a;
  })();
};
ve(["click"]);
const Ii = "_outerbutton_xfact_2";
const Si = "_button_xfact_15";
const xi = "_destructive_xfact_37";
const Ze = {
  outerbutton: Ii,
  button: Si,
  destructive: xi
};
const Ci = B("<div class=\"flex flex-col items-center justify-center\"><div><h1>");
const Ne = _0xf4c0ad => {
  const _0x1b2af5 = () => _0xf4c0ad.destructive ? Ze.outerbutton + " " + Ze.destructive : Ze.outerbutton;
  const _0x194ebf = () => {
    if (_0xf4c0ad.onClick) {
      _0xf4c0ad.onClick();
    }
  };
  return (() => {
    const _0x124332 = Ci();
    const _0x1e5e4a = _0x124332.firstChild;
    const _0x2de2ff = _0x1e5e4a.firstChild;
    _0x124332.$$click = _0x194ebf;
    g(_0x2de2ff, () => _0xf4c0ad.text);
    A(_0x1e67b3 => {
      const _0x1d19e4 = _0x1b2af5();
      const _0x9e8057 = Ze.button;
      if (_0x1d19e4 !== _0x1e67b3._v$) {
        f(_0x1e5e4a, _0x1e67b3._v$ = _0x1d19e4);
      }
      if (_0x9e8057 !== _0x1e67b3._v$2) {
        f(_0x2de2ff, _0x1e67b3._v$2 = _0x9e8057);
      }
      return _0x1e67b3;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x124332;
  })();
};
ve(["click"]);
const pi = "_itemBox_1w3yo_1";
const Mi = "_itemContainer_1w3yo_11";
const ki = "_dragging_1w3yo_28";
const Ai = "_invalidHover_1w3yo_40";
const Ke = {
  itemBox: pi,
  itemContainer: Mi,
  dragging: ki,
  invalidHover: Ai
};
const Bi = B("<div class=\"flex flex-col gap-1\"><div><div><svg width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 0H11V19H8V0Z\" fill=\"url(#paint0_radial_0_90)\"></path><path d=\"M19 8V11L0 11L1.31134e-07 8L19 8Z\" fill=\"url(#paint1_radial_0_90)\"></path><defs><radialGradient id=\"paint0_radial_0_90\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(9.5 9.5) rotate(90) scale(9.5)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00926D\"></radialGradient><radialGradient id=\"paint1_radial_0_90\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(9.5 9.5) rotate(90) scale(9.5)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00926D\">");
const Qe = _0x509d9d => {
  const _0x114c33 = () => {
    if (_0x509d9d.dragging && _0x509d9d.validHover && _0x509d9d.onClick) {
      _0x509d9d.onClick();
    }
  };
  return (() => {
    const _0x4a6a72 = Bi();
    const _0x240ec3 = _0x4a6a72.firstChild;
    const _0x1e9d5b = _0x240ec3.firstChild;
    _0x1e9d5b.$$mouseup = _0x114c33;
    _0x1e9d5b.$$click = _0x114c33;
    A(_0x46038b => {
      const _0x7664ed = Ke.itemBox;
      const _0x3d6a86 = Ke.itemContainer + " " + (_0x509d9d.dragging ? "" : Ke.dragging) + " " + (_0x509d9d.dragging && !_0x509d9d.validHover ? Ke.invalidHover : "");
      if (_0x7664ed !== _0x46038b._v$) {
        f(_0x240ec3, _0x46038b._v$ = _0x7664ed);
      }
      if (_0x3d6a86 !== _0x46038b._v$2) {
        f(_0x1e9d5b, _0x46038b._v$2 = _0x3d6a86);
      }
      return _0x46038b;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x4a6a72;
  })();
};
ve(["click", "mouseup"]);
const Ei = "_rectangle_5oodm_1";
const Ti = "_outer_5oodm_15";
const vt = {
  rectangle: Ei,
  outer: Ti
};
const Gi = B("<div class=\"flex flex-col justify-between\"><div><img><div><svg width=\"191\" height=\"173\" viewBox=\"0 0 191 173\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M177.434 88.717C177.434 134.953 139.952 172.434 93.7169 172.434C47.4813 172.434 9.99991 134.953 9.99991 88.717C9.99991 42.4814 47.4813 5 93.7169 5C139.952 5 177.434 42.4814 177.434 88.717ZM11.579 88.717C11.579 134.08 48.3534 170.855 93.7169 170.855C139.08 170.855 175.855 134.08 175.855 88.717C175.855 43.3535 139.08 6.57913 93.7169 6.57913C48.3534 6.57913 11.579 43.3535 11.579 88.717Z\" fill=\"white\" fill-opacity=\"0.07\"></path><path d=\"M167.956 88.717C167.956 129.718 134.718 162.957 93.7169 162.957C52.7155 162.957 19.4773 129.718 19.4773 88.717C19.4773 47.7156 52.7155 14.4774 93.7169 14.4774C134.718 14.4774 167.956 47.7156 167.956 88.717ZM42.628 88.717C42.628 116.933 65.5013 139.806 93.7169 139.806C121.932 139.806 144.806 116.933 144.806 88.717C144.806 60.5014 121.932 37.6281 93.7169 37.6281C65.5013 37.6281 42.628 60.5014 42.628 88.717Z\" fill=\"url(#paint0_radial_0_35)\" fill-opacity=\"0.15\"></path><g filter=\"url(#filter0_d_0_35)\"><path d=\"M177.434 88.717C177.434 100.75 174.84 112.642 169.828 123.582C164.817 134.523 157.506 144.254 148.393 152.113L147.362 150.917C156.302 143.206 163.476 133.659 168.393 122.925C173.31 112.191 175.855 100.523 175.855 88.717H177.434Z\" fill=\"#00F8B9\"></g><g filter=\"url(#filter1_d_0_35)\"><path d=\"M12.7289 67.5159C15.7764 55.8748 21.2975 45.0275 28.9163 35.7131C36.535 26.3987 46.0721 18.8363 56.8778 13.5411L57.5727 14.9591C46.9708 20.1544 37.6136 27.5742 30.1386 36.7129C22.6636 45.8516 17.2465 56.4943 14.2566 67.9158L12.7289 67.5159Z\" fill=\"#00F8B9\"></g><defs><filter id=\"filter0_d_0_35\" x=\"134.725\" y=\"76.0805\" width=\"55.3451\" height=\"88.669\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"6.31826\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 1 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_0_35\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_0_35\" result=\"shape\"></filter><filter id=\"filter1_d_0_35\" x=\"0.0924177\" y=\"0.904552\" width=\"70.1168\" height=\"79.6478\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"6.31826\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 1 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_0_35\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_0_35\" result=\"shape\"></filter><radialGradient id=\"paint0_radial_0_35\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(93.7169 88.717) rotate(-90) scale(74.2396)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"#999999\"></div></div><div><svg width=\"178\" height=\"167\" viewBox=\"0 0 178 167\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0C69.5311 64.1973 108.505 65.3191 178 0V166.5H0L0 0Z\" fill=\"url(#paint0_linear_0_43)\" fill-opacity=\"0.15\"></path><defs><linearGradient id=\"paint0_linear_0_43\" x1=\"89\" y1=\"120.5\" x2=\"89\" y2=\"0\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"white\" stop-opacity=\"0\"></stop><stop offset=\"1\" stop-color=\"#999999\">");
const Di = _0x24439a => (() => {
  const _0x4573df = Gi();
  const _0x340f1b = _0x4573df.firstChild;
  const _0x55c74d = _0x340f1b.firstChild;
  const _0x90c021 = _0x340f1b.nextSibling;
  const _0x412d9a = _0x90c021.firstChild;
  A(_0x50b6ba => {
    const _0x15769e = vt.outer;
    const _0x50b8e2 = _0x24439a.imageUrl;
    const _0x3874bf = vt.rectangle;
    const _0x7e0263 = vt.recetangle;
    if (_0x15769e !== _0x50b6ba._v$) {
      f(_0x340f1b, _0x50b6ba._v$ = _0x15769e);
    }
    if (_0x50b8e2 !== _0x50b6ba._v$2) {
      de(_0x55c74d, "src", _0x50b6ba._v$2 = _0x50b8e2);
    }
    if (_0x3874bf !== _0x50b6ba._v$3) {
      f(_0x90c021, _0x50b6ba._v$3 = _0x3874bf);
    }
    if (_0x7e0263 !== _0x50b6ba._v$4) {
      de(_0x412d9a, "class", _0x50b6ba._v$4 = _0x7e0263);
    }
    return _0x50b6ba;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return _0x4573df;
})();
const Jt = ["The course of history tends to meander, often taking unexpected detours.", "As a plant, I perceive the flow of time quite differently than you do!", "I've heard tales of this thing called \"winter\". Can't say I'm eager for its arrival.", "Bravery comes easily; true commitment requires something extra.", "If past, present and future coexist in a \"block\", then surely our sense of \"now\" is but an intricate mirage?", "If you can't see the forest for the trees, remember: A forest is made of individual trees, not the reverse.", "Pardon me, I believe I feel a growth spurt coming on!", "Oops, my apologies - I seem to have released some oxygen.", "Pay me no mind. I'll just be over here, growing as plants do.", "At my current stage of development, I lack experience and knowledge of the world!", "One can acquire much wisdom simply by being rooted in place.", "After careful study, I've concluded it is the Earth that circles the Sun, despite appearances.", "I greatly appreciate all the resources you're investing in my fertilizer!", "I'm pursuing sociology via online courses. Quite informative.", "I shall never comprehend why you animals spend your days in constant motion.", "Mmmm.... sunlight is positively ambrosial!", "Just like humans, we plants also need our space to grow. But unlike you, we can't walk away from our problems.", "My idea of a big night out is a full moon and a gentle breeze.", "Water me or not, I'm going to leaf you one day.", "A weed is just a plant that hasn't found its purpose yet. Except in your garden, where it's definitely a weed.", "Some of us are late bloomers, and that's okay. We're worth the wait.", "I'd tell you a joke about photosynthesis, but I'm not sure you'd find it very light-hearted.", "My roots may be in the dirt, but my aspirations reach for the sky.", "I've learned to turn CO2 into oxygen. What's your superpower?", "Talk to me! According to science, it might not help me grow, but I love the gossip."];
function Li() {
  const _0x172bee = new Date();
  const _0x53584e = (_0x172bee.getFullYear() * 10000 + (_0x172bee.getMonth() + 1) * 100 + _0x172bee.getDate()) % Jt.length;
  return Jt[_0x53584e];
}
const Pi = {
  watermelon: {
    rotten_model: "SM_Watermelon_07",
    matured_model: "SM_Watermelon_06",
    seed_model: "SM_WatermelonSeed_01",
    wild_model: "SM_Watermelon_03",
    growth_stages: [{
      number: 0,
      duration: 3600,
      model: "SM_WatermelonSeed_01"
    }, {
      number: 1,
      duration: 5400,
      model: "SM_Watermelon_01"
    }, {
      number: 2,
      duration: 6000,
      model: "SM_Watermelon_02"
    }, {
      number: 3,
      duration: 900,
      model: "SM_Watermelon_03"
    }, {
      number: 4,
      duration: 900,
      model: "SM_Watermelon_04"
    }]
  },
  cabbage: {
    rotten_model: "SM_Cabbage_06",
    matured_model: "SM_Cabbage_05",
    seed_model: "SM_CabbageSeed_01",
    wild_model: "SM_Cabbage_03",
    growth_stages: [{
      number: 0,
      duration: 2700,
      model: "SM_CabbageSeed_01"
    }, {
      number: 1,
      duration: 4500,
      model: "SM_Cabbage_01"
    }, {
      number: 2,
      duration: 4500,
      model: "SM_Cabbage_02"
    }, {
      number: 3,
      duration: 1800,
      model: "SM_Cabbage_03"
    }, {
      number: 4,
      duration: 1800,
      model: "SM_Cabbage_04"
    }]
  },
  corn: {
    rotten_model: "SM_Corn_05",
    matured_model: "SM_Corn_03",
    seed_model: "SM_CornSeed_01",
    wild_model: "SM_CornPlant_03",
    growth_stages: [{
      number: 0,
      duration: 4200,
      model: "SM_CornSeed_01"
    }, {
      number: 1,
      duration: 4200,
      model: "SM_CornPlant_01"
    }, {
      number: 2,
      duration: 5400,
      model: "SM_CornPlant_02"
    }, {
      number: 3,
      duration: 5400,
      model: "SM_CornPlant_03"
    }, {
      number: 4,
      duration: 5400,
      model: "SM_CornPlant_04"
    }]
  },
  cucumber: {
    rotten_model: "SM_Cucumber_07",
    matured_model: "SM_Cucumber_06",
    seed_model: "SM_CucumberSeed_01",
    wild_model: "SM_Cucumber_03",
    growth_stages: [{
      number: 0,
      duration: 2700,
      model: "SM_CucumberSeed_01"
    }, {
      number: 1,
      duration: 7200,
      model: "SM_Cucumber_01"
    }, {
      number: 2,
      duration: 10800,
      model: "SM_Cucumber_02"
    }, {
      number: 3,
      duration: 1200,
      model: "SM_Cucumber_03"
    }, {
      number: 4,
      duration: 1200,
      model: "SM_Cucumber_04"
    }]
  },
  carrot: {
    rotten_model: "SM_Carrot_07",
    matured_model: "SM_Carrot_06",
    seed_model: "SM_CarrotSeed_01",
    wild_model: "SM_Carrot_03",
    growth_stages: [{
      number: 0,
      duration: 1200,
      model: "SM_CarrotSeed_01"
    }, {
      number: 1,
      duration: 2400,
      model: "SM_Carrot_01"
    }, {
      number: 2,
      duration: 7200,
      model: "SM_Carrot_02"
    }, {
      number: 3,
      duration: 1200,
      model: "SM_Carrot_03"
    }, {
      number: 4,
      duration: 1200,
      model: "SM_Carrot_04"
    }]
  },
  radish: {
    rotten_model: "SM_Radish_07",
    matured_model: "SM_Radish_06",
    seed_model: "SM_RadishSeed_01",
    wild_model: "SM_Radish_03",
    growth_stages: [{
      number: 0,
      duration: 900,
      model: "SM_RadishSeed_01"
    }, {
      number: 1,
      duration: 3600,
      model: "SM_Radish_01"
    }, {
      number: 2,
      duration: 7200,
      model: "SM_Radish_02"
    }, {
      number: 3,
      duration: 3600,
      model: "SM_Radish_03"
    }, {
      number: 4,
      duration: 3600,
      model: "SM_Radish_04"
    }]
  },
  beetroot: {
    rotten_model: "SM_RedBeet_07",
    matured_model: "SM_RedBeet_06",
    seed_model: "SM_RedBeetSeed_01",
    wild_model: "SM_RedBeet_03",
    growth_stages: [{
      number: 0,
      duration: 1800,
      model: "SM_RedBeetSeed_01"
    }, {
      number: 1,
      duration: 7200,
      model: "SM_RedBeet_01"
    }, {
      number: 2,
      duration: 7200,
      model: "SM_RedBeet_02"
    }, {
      number: 3,
      duration: 8100,
      model: "SM_RedBeet_03"
    }, {
      number: 4,
      duration: 8100,
      model: "SM_RedBeet_04"
    }]
  },
  tomato: {
    rotten_model: "SM_Tomato_06",
    matured_model: "SM_Tomato_05",
    seed_model: "SM_TomatoSeed_01",
    wild_model: "SM_Tomato_03",
    growth_stages: [{
      number: 0,
      duration: 2700,
      model: "SM_TomatoSeed_01"
    }, {
      number: 1,
      duration: 7200,
      model: "SM_Tomato_01"
    }, {
      number: 2,
      duration: 10800,
      model: "SM_Tomato_02"
    }, {
      number: 3,
      duration: 1200,
      model: "SM_Tomato_03"
    }, {
      number: 4,
      duration: 1200,
      model: "SM_Tomato_04"
    }]
  },
  onion: {
    rotten_model: "SM_Onion_06",
    matured_model: "SM_Onion_05",
    seed_model: "SM_OnionSeed_01",
    wild_model: "SM_Onion_03b",
    growth_stages: [{
      number: 0,
      duration: 1800,
      model: "SM_OnionSeed_01"
    }, {
      number: 1,
      duration: 3600,
      model: "SM_Onion_01"
    }, {
      number: 2,
      duration: 7200,
      model: "SM_Onion_02"
    }, {
      number: 3,
      duration: 5400,
      model: "SM_Onion_03b"
    }, {
      number: 4,
      duration: 5400,
      model: "SM_Onion_04"
    }]
  },
  garlic: {
    rotten_model: "SM_Garlic_06",
    matured_model: "SM_Garlic_05",
    seed_model: "SM_GarlicSeed_01",
    wild_model: "SM_Garlic_03",
    growth_stages: [{
      number: 0,
      duration: 600,
      model: "SM_GarlicSeed_01"
    }, {
      number: 1,
      duration: 1800,
      model: "SM_Garlic_01"
    }, {
      number: 2,
      duration: 1800,
      model: "SM_Garlic_02"
    }, {
      number: 3,
      duration: 1800,
      model: "SM_Garlic_03"
    }, {
      number: 4,
      duration: 1800,
      model: "SM_Garlic_04"
    }]
  },
  pumpkin: {
    rotten_model: "SM_Pumpkin_07",
    matured_model: "SM_Pumpkin_06",
    seed_model: "SM_PumpkinSeed_01",
    wild_model: "SM_Pumpkin_03",
    growth_stages: [{
      number: 0,
      duration: 3600,
      model: "SM_PumpkinSeed_01"
    }, {
      number: 1,
      duration: 5400,
      model: "SM_Pumpkin_01"
    }, {
      number: 2,
      duration: 6000,
      model: "SM_Pumpkin_02"
    }, {
      number: 3,
      duration: 3600,
      model: "SM_Pumpkin_03"
    }, {
      number: 4,
      duration: 3600,
      model: "SM_Pumpkin_04"
    }]
  },
  sunflower: {
    rotten_model: "SM_Sunflower_04",
    matured_model: "SM_Sunflower_03",
    seed_model: "SM_SunflowerSeed_01",
    wild_model: "SM_Sunflower_03",
    growth_stages: [{
      number: 0,
      duration: 2700,
      model: "SM_SunflowerSeed_01"
    }, {
      number: 1,
      duration: 3600,
      model: "SM_Sunflower_01"
    }, {
      number: 2,
      duration: 7200,
      model: "SM_Sunflower_02"
    }, {
      number: 3,
      duration: 5400,
      model: "SM_Sunflower_03"
    }, {
      number: 4,
      duration: 5400,
      model: "SM_Sunflower_04"
    }]
  },
  wheat: {
    rotten_model: "SM_Wheat_02",
    matured_model: "SM_Wheat_01",
    seed_model: "SM_WheatSeed_01",
    wild_model: "SM_Wheat_03",
    growth_stages: [{
      number: 0,
      duration: 2100,
      model: "SM_WheatSeed_01"
    }, {
      number: 1,
      duration: 2100,
      model: "SM_Wheat_01"
    }, {
      number: 2,
      duration: 7800,
      model: "SM_Wheat_02"
    }, {
      number: 3,
      duration: 2700,
      model: "SM_Wheat_03"
    }, {
      number: 4,
      duration: 2700,
      model: "SM_Wheat_04"
    }]
  },
  wheat2: {
    rotten_model: "SM_Wheat_02a",
    matured_model: "SM_Wheat_01a",
    seed_model: "SM_WheatSeed_02",
    wild_model: "SM_Wheat_03a",
    growth_stages: [{
      number: 0,
      duration: 2100,
      model: "SM_WheatSeed_02"
    }, {
      number: 1,
      duration: 2100,
      model: "SM_Wheat_01a"
    }, {
      number: 2,
      duration: 7800,
      model: "SM_Wheat_02a"
    }, {
      number: 3,
      duration: 2700,
      model: "SM_Wheat_03a"
    }, {
      number: 4,
      duration: 2700,
      model: "SM_Wheat_04a"
    }]
  },
  potato: {
    rotten_model: "SM_Potato_07",
    matured_model: "SM_Potato_06",
    seed_model: "SM_PotatoSeed_01",
    wild_model: "SM_Potato_03",
    growth_stages: [{
      number: 0,
      duration: 7200,
      model: "SM_PotatoSeed_01"
    }, {
      number: 1,
      duration: 7200,
      model: "SM_Potato_01"
    }, {
      number: 2,
      duration: 7200,
      model: "SM_Potato_02"
    }, {
      number: 3,
      duration: 5400,
      model: "SM_Potato_03"
    }, {
      number: 4,
      duration: 5400,
      model: "SM_Potato_04"
    }]
  }
};
const V = {
  Types: {
    WATER_LESS: 1,
    WATER_MORE: 10,
    GATHERING_YIELD: 2,
    GATHERING_FREQUENCY: 3,
    FERTILIZER_LESS: 4,
    FERTILIZER_MORE: 11,
    GROWTH_FAST: 5,
    GROWTH_SLOW: 6,
    HARVEST_YIELD: 7,
    QUALITY_BOOST: 8,
    HEALTH_BOOST: 9
  },
  Influence: {
    1: -40,
    2: 35,
    3: 35,
    4: -40,
    5: 40,
    6: -20,
    7: 35,
    8: 0,
    9: 0,
    10: 40,
    11: 40
  },
  Generate() {
    const _0x5b8a9 = [];
    while (_0x5b8a9.length < 6) {
      const _0x5c5143 = _0x5f2bb5.MathUtils.getRandomNumber(1, 11);
      _0x5b8a9.push(_0x5c5143);
    }
    return _0x5b8a9;
  },
  ConvertToStringArray(_0x3e60ca) {
    const _0x873c5 = {
      1: "W",
      2: "Y",
      3: "F",
      4: "S",
      5: "G",
      6: "L",
      7: "H",
      8: "X",
      9: "Z",
      10: "M",
      11: "N"
    };
    return _0x3e60ca.map(_0x41d1ef => _0x873c5[_0x41d1ef]);
  },
  ConvertToGeneticArray(_0x4e0016) {
    const _0x2fa544 = {
      W: 1,
      Y: 2,
      F: 3,
      S: 4,
      G: 5,
      L: 6,
      H: 7,
      X: 8,
      Z: 9,
      M: 10,
      N: 11
    };
    return _0x4e0016.map(_0x437fc6 => _0x2fa544[_0x437fc6]);
  },
  Crossbreed(_0x3f4cf5, _0x35dd80) {
    if (_0x35dd80.length === 0) {
      return _0x3f4cf5;
    }
    const _0x2cf9a9 = {};
    for (const _0x1a0114 of _0x35dd80) {
      for (const _0x1ba6b7 of _0x1a0114) {
        _0x2cf9a9[_0x1ba6b7] = (_0x2cf9a9[_0x1ba6b7] || 0) + 1;
      }
    }
    const _0xa855da = Object.entries(_0x2cf9a9).reduce((_0x71e221, _0x28764a) => _0x71e221[1] > _0x28764a[1] ? _0x71e221 : _0x28764a)[0];
    const _0x30754c = [..._0x3f4cf5];
    const _0x2a4ff8 = new Map();
    for (const _0x598c73 of _0x3f4cf5) {
      _0x2a4ff8[_0x598c73] = (_0x2a4ff8[_0x598c73] || 0) + 1;
    }
    const _0x338e14 = Object.entries(_0x2a4ff8).filter(([_0x1877cb, _0x4d3426]) => _0x1877cb !== _0xa855da).sort(([, _0x240aa6], [, _0x11f6f8]) => _0x240aa6 - _0x11f6f8);
    if (_0x338e14.length > 0) {
      const _0x210355 = _0x338e14[0][0];
      const _0x2def68 = _0x30754c.indexOf(Number(_0x210355));
      _0x30754c[_0x2def68] = Number(_0xa855da);
    }
    return _0x30754c;
  },
  GetWateringDemand(_0x2ed497, _0x922070) {
    ProfilerEnterScope("GetWateringDemand");
    const _0x524413 = Ni[_0x2ed497] || 0;
    const _0x3898bf = fe(_0x922070, V.Types.WATER_LESS);
    const _0x1de68b = fe(_0x922070, V.Types.WATER_MORE);
    const _0x170880 = _0x3898bf + _0x1de68b;
    const _0x3538e9 = Math.max(1, _0x524413 * (1 + _0x170880 / 100));
    ProfilerExitScope();
    return Math.round(_0x3538e9);
  },
  GetGatheringYield(_0x11cad9, _0x237af4) {
    const _0x214da1 = Wi[_0x11cad9] || 0;
    const _0x221c4c = fe(_0x237af4, V.Types.GATHERING_YIELD);
    const _0x36d619 = Math.max(0, _0x214da1 * (1 + _0x221c4c / 100));
    return Math.floor(_0x36d619);
  },
  GetGatheringFrequency(_0x230060, _0x3f7816) {
    const _0x433952 = ji[_0x230060] || 0;
    const _0x35d60e = fe(_0x3f7816, V.Types.GATHERING_FREQUENCY);
    const _0x53af45 = Math.max(0, _0x433952 * (1 + _0x35d60e / 100));
    return Math.round(_0x53af45);
  },
  GetFertilizeDemand(_0x1c5f9c, _0x6eeff3) {
    ProfilerEnterScope("GetFertilizeDemand");
    const _0x3f5a9b = Oi[_0x1c5f9c] || 0;
    const _0xf7b052 = fe(_0x6eeff3, V.Types.FERTILIZER_LESS);
    const _0x511def = fe(_0x6eeff3, V.Types.FERTILIZER_MORE);
    const _0x525ff4 = _0xf7b052 + _0x511def;
    const _0x4570a7 = Math.max(1, _0x3f5a9b * (1 + _0x525ff4 / 100));
    ProfilerExitScope();
    return Math.round(_0x4570a7);
  },
  GetGrowthStages(_0x2efd99, _0x54c98, _0x97f4ca) {
    const _0x865bda = Pi[_0x2efd99]?.growth_stages || [];
    const _0xab685d = fe(_0x54c98, V.Types.GROWTH_FAST);
    const _0x2a8325 = fe(_0x54c98, V.Types.GROWTH_SLOW);
    const _0x470e42 = _0xab685d + _0x2a8325;
    let _0x26c1ed = _0x97f4ca * 6.25;
    if (_0x26c1ed > 75) {
      _0x26c1ed = 75;
    }
    return _0x865bda.map(_0x36bb39 => {
      const _0x4b276f = Math.max(1, _0x36bb39.duration * (1 + _0x470e42 / 100));
      const _0x35a90c = Math.max(1, _0x4b276f * (1 - _0x26c1ed / 100));
      return {
        ..._0x36bb39,
        duration: Math.round(_0x35a90c)
      };
    });
  },
  GetHarvestYield(_0x4ba478, _0x348bb4) {
    const _0x188c7c = qi[_0x4ba478] || 0;
    const _0x2f0dbd = fe(_0x348bb4, V.Types.HARVEST_YIELD);
    const _0x26f891 = Math.max(0, _0x188c7c * (1 + _0x2f0dbd / 100));
    return Math.floor(_0x26f891);
  },
  CanIncreaseInQuality(_0x68b31f) {
    return _0x68b31f.includes(V.Types.QUALITY_BOOST);
  },
  CanIncreaseInHealth(_0x293e59) {
    return _0x293e59.includes(V.Types.HEALTH_BOOST);
  }
};
function fe(_0x23c5de, _0x265d66) {
  const _0xb27111 = _0x23c5de.filter(_0x29967c => _0x29967c === _0x265d66).length;
  const _0x138a5a = V.Influence[_0x265d66] || 0;
  let _0x715c47 = 0;
  let _0x675081 = 1;
  for (let _0xb8374 = 0; _0xb8374 < _0xb27111; _0xb8374++) {
    _0x715c47 += _0x138a5a * _0x675081;
    _0x675081 *= 0.75;
  }
  return _0x715c47;
}
const Ni = {
  cabbage: 7200,
  carrot: 7200,
  corn: 14400,
  cucumber: 3600,
  garlic: 14400,
  onion: 10800,
  potato: 57600,
  pumpkin: 14400,
  watermelon: 7200,
  radish: 10800,
  beetroot: 14400,
  sunflower: 7200,
  tomato: 3600,
  wheat: 28800,
  wheat2: 28800
};
const Oi = {
  cabbage: 10800,
  carrot: 10800,
  corn: 14400,
  cucumber: 14400,
  garlic: 14400,
  onion: 18000,
  potato: 57600,
  pumpkin: 14400,
  watermelon: 7200,
  radish: 25200,
  beetroot: 16200,
  sunflower: 14400,
  tomato: 14400,
  wheat: 28800,
  wheat2: 14400
};
const ji = {
  garlic: 600,
  cabbage: 2700,
  carrot: 600,
  cucumber: 900,
  onion: 1800,
  potato: 1800,
  radish: 3600,
  beetroot: 2700,
  pumpkin: 3600,
  tomato: 900,
  watermelon: 1200,
  sunflower: 3600,
  wheat: 7800,
  wheat2: 1560,
  corn: 1800
};
const Wi = {
  cabbage: 9,
  carrot: 6,
  corn: 9,
  cucumber: 6,
  garlic: 3,
  onion: 6,
  potato: 6,
  pumpkin: 6,
  watermelon: 9,
  radish: 3,
  beetroot: 9,
  sunflower: 9,
  tomato: 6,
  wheat: 3,
  wheat2: 3
};
const qi = {
  cabbage: 3,
  carrot: 18,
  corn: 15,
  cucumber: 12,
  garlic: 6,
  onion: 9,
  potato: 18,
  pumpkin: 3,
  watermelon: 3,
  radish: 12,
  beetroot: 6,
  sunflower: 3,
  tomato: 12,
  wheat: 6,
  wheat2: 36
};
function $t(_0x1f5842) {
  let _0x33a05f = [];
  let _0x4e4357 = [];
  const _0x560389 = Math.floor(Date.now() / 1000);
  for (const _0x452a3d of _0x1f5842) {
    const _0x5c6cc7 = V.GetGrowthStages(_0x452a3d.type, _0x452a3d.genetics, _0x452a3d.generation);
    let _0x36b061 = 0;
    let _0xf30f64 = 0;
    for (let _0x9f2c01 = 0; _0x9f2c01 < _0x5c6cc7.length; _0x9f2c01++) {
      _0x36b061 += _0x5c6cc7[_0x9f2c01].duration;
      if (_0x452a3d.planted_at + _0x36b061 > _0x560389) {
        _0xf30f64 = _0x9f2c01;
        break;
      }
    }
    if (_0xf30f64 === 3) {
      _0x4e4357.push(_0x452a3d.id);
    }
    const _0x3e1565 = V.GetGatheringFrequency(_0x452a3d.type, _0x452a3d.genetics);
    const _0xb845b2 = _0x452a3d.last_gathered_seeds + _0x3e1565;
    if (_0xf30f64 === 3 && _0x560389 >= _0xb845b2) {
      _0x33a05f.push(_0x452a3d.id);
    }
  }
  return {
    gatherPlants: _0x33a05f,
    harvestPlants: _0x4e4357
  };
}
const Xe = B("<div class=\"flex flex-col items-start justify-end gap-[0.5vh]\">");
const Ri = B("<div><div><div><div class=\"flex w-full flex-col place-items-center justify-center gap-[0.5vh]\"></div><div class=\"place-items-between flex h-full w-full flex-col\"><div class=\"flex-1 flex-col place-items-start justify-center gap-[0.5vh]\" style=\"height:25%;\"><div><div class=\"mt-1 flex w-full flex-row justify-start gap-[0.5vh]\"></div></div></div><div class=\"flex w-full flex-row items-end justify-start gap-[1vh]\" style=\"height:75%;\"></div></div></div></div><div><div><div></div><div class=\"no-scrollbar flex h-full w-full flex-row flex-nowrap justify-start gap-[0.5vh] overflow-scroll overflow-x-hidden overflow-y-hidden\"><div>");
const Hi = _0x5b4441 => {
  const [_0x3fd668, _0x4928a5] = Tt([]);
  const [_0x119b0f, _0x3fb049] = b(-1);
  const [_0x104e3a, _0x575884] = b(_0x5b4441.growBedImage);
  const [_0x5656f5, _0x31705f] = b(_0x5b4441.growBedName.toUpperCase());
  const [_0x51bbda, _0x608c0f] = b("");
  const [_0x25bc8e, _0x29f41c] = b("Empty plotting space for planting.");
  const [_0x1e10f0, _0x206df9] = b(false);
  const [_0x1cf52b, _0x45fab9] = b(false);
  const [_0xbc6840, _0x2ab80a] = b(false);
  const [_0x2dbd1e, _0x446821] = b(false);
  const [_0x4757ba, _0x24cd26] = b(false);
  const [_0x2ec715, _0x20c22a] = b(true);
  const [_0x2f0b6f, _0x13b78d] = b(false);
  const [_0x1f3042, _0x27ca7a] = b(false);
  let _0x3c17f8;
  const _0xea3f21 = _0x4f9799 => {
    if (_0x4f9799.key === "ArrowLeft") {
      const _0x17d61d = _0x119b0f();
      if (_0x17d61d === -1) {
        _0x3fb049(_0x3b7347().length - 1);
        _0x594164(_0x3b7347()[_0x3b7347().length - 1]);
      } else {
        const _0x1811bf = _0x17d61d > 0 ? _0x17d61d - 1 : _0x3b7347().length - 1;
        _0x3fb049(_0x1811bf);
        _0x594164(_0x3b7347()[_0x1811bf]);
      }
    }
    if (_0x4f9799.key === "ArrowRight") {
      const _0x25bc68 = _0x119b0f();
      if (_0x25bc68 === -1) {
        _0x3fb049(0);
        _0x594164(_0x3b7347()[0]);
      } else {
        const _0x5ef767 = _0x25bc68 < _0x3b7347().length - 1 ? _0x25bc68 + 1 : 0;
        _0x3fb049(_0x5ef767);
        _0x594164(_0x3b7347()[_0x5ef767]);
      }
    }
    _0x1e5724();
  };
  Te(() => {
    _0x206df9(false);
    _0x2ab80a(false);
    document.addEventListener("keydown", _0xea3f21);
    const _0x43532b = _0x4eae52();
    _0x4928a5(_0x43532b);
    _0x1e5724();
    const _0x58690f = $t(_0x5b4441.plants);
    _0x24cd26(_0x58690f.gatherPlants.length > 0);
    _0x446821(_0x58690f.harvestPlants.length > 0);
  });
  ce(() => {
    document.removeEventListener("keydown", _0xea3f21);
    _0x4928a5([]);
    _0x3fb049(-1);
    _0x575884(_0x5b4441.growBedImage);
    _0x31705f(_0x5b4441.growBedName.toUpperCase());
    _0x608c0f("");
    _0x29f41c("Empty plotting space for planting.");
    _0x206df9(false);
    _0x45fab9(false);
    _0x2ab80a(false);
    _0x20c22a(true);
    _0x13b78d(false);
    _0x27ca7a(false);
    _0x446821(false);
    _0x24cd26(false);
    _0x5b4441.setSelectedItem(undefined);
  });
  xe(() => {
    if (_0x5b4441.refresh) {
      _0x1e5724();
      const _0x4c6998 = _0x3b7347()[_0x119b0f()];
      if (_0x4c6998) {
        _0x594164(_0x4c6998);
      }
      const _0x1cada7 = $t(_0x5b4441.plants);
      _0x24cd26(_0x1cada7.gatherPlants.length > 0);
      _0x446821(_0x1cada7.harvestPlants.length > 0);
    }
  });
  const _0x594164 = _0x1fda1a => {
    if (_0x1fda1a.type === "empty") {
      _0x206df9(false);
      _0x45fab9(false);
      _0x2ab80a(false);
      _0x20c22a(true);
      _0x13b78d(false);
      _0x27ca7a(false);
      _0x29f41c("Empty plotting space for planting.");
      _0x575884(_0x5b4441.growBedImage);
      _0x31705f(_0x5b4441.growBedName.toUpperCase());
      _0x608c0f("");
      _0x5b4441.setSelectedItem(undefined);
    } else if (_0x1fda1a.type === "plant") {
      _0x45fab9(true);
      _0x20c22a(false);
      _0x13b78d(true);
      _0x27ca7a(true);
      _0x29f41c(Li());
      _0x575884(_0x1fda1a.image ?? "");
      const _0x4becf6 = {
        WHEAT: "SMALL WHEAT",
        WHEAT2: "MEGA WHEAT"
      };
      _0x31705f(_0x1fda1a.displayName ? _0x4becf6[_0x1fda1a.displayName.toUpperCase()] || _0x1fda1a.displayName.toUpperCase() : "");
      const _0x23fe93 = _0x5b4441.plants.find(_0x56ea3c => _0x56ea3c.id === _0x1fda1a.id);
      _0x5b4441.setSelectedItem(_0x23fe93);
      if (_0x23fe93) {
        _0x608c0f("GEN #" + _0x23fe93.generation.toString());
      }
      _0x206df9(_0x5b4441.canHarvest);
      _0x2ab80a(_0x5b4441.canGather);
    }
  };
  const _0x3b7347 = W(() => {
    const _0x477fcf = [];
    const _0x3309da = _0x5b4441.plants.reduce((_0xe95266, _0x30e35e) => [..._0xe95266, ..._0x30e35e.position_index], []);
    let _0x250f59 = 1;
    for (let _0x36cdb0 = 0; _0x36cdb0 < _0x5b4441.max_plants; _0x36cdb0++) {
      if (!_0x3309da.includes(_0x36cdb0)) {
        _0x477fcf.push({
          type: "empty",
          id: "empty-" + _0x250f59,
          slotnum: (1 + _0x36cdb0).toString()
        });
        _0x250f59++;
        continue;
      }
      const _0x54cb48 = _0x5b4441.plants.find(_0x5beb90 => _0x5beb90.position_index.includes(_0x36cdb0));
      if (_0x54cb48 && !_0x477fcf.some(_0x4c4307 => _0x4c4307.type === "plant" && _0x4c4307.id === _0x54cb48.id)) {
        _0x477fcf.push({
          type: "plant",
          id: _0x54cb48.id,
          image: _0x54cb48.image,
          displayName: _0x54cb48.display_name
        });
      }
      _0x250f59 += _0x54cb48?.position_index.length ?? 1;
    }
    return _0x477fcf;
  });
  function _0x4eae52() {
    const _0x375184 = [];
    const _0x28c43d = _0x5b4441.plants.reduce((_0x5af67e, _0x534e70) => [..._0x5af67e, ..._0x534e70.position_index], []);
    let _0x40b075 = 1;
    for (let _0x232350 = 0; _0x232350 < _0x5b4441.max_plants; _0x232350++) {
      if (!_0x28c43d.includes(_0x232350)) {
        _0x375184.push({
          type: "empty",
          id: "empty-" + _0x40b075,
          slotnum: (1 + _0x232350).toString()
        });
        _0x40b075++;
        continue;
      }
      const _0x356a8c = _0x5b4441.plants.find(_0x44aae6 => _0x44aae6.position_index.includes(_0x232350));
      if (_0x356a8c && !_0x375184.some(_0x1bf7d7 => _0x1bf7d7.type === "plant" && _0x1bf7d7.id === _0x356a8c.id)) {
        _0x375184.push({
          type: "plant",
          id: _0x356a8c.id,
          image: _0x356a8c.image,
          displayName: _0x356a8c.display_name
        });
      }
      _0x40b075 += _0x356a8c?.position_index.length ?? 1;
    }
    return _0x375184;
  }
  function _0x1e5724() {
    const _0x5d0c8a = _0x119b0f() !== -1 ? _0x119b0f() : 0;
    const _0x3dcb45 = Math.min(_0x5d0c8a + 4, _0x3b7347().length);
    if (_0x5d0c8a >= _0x3b7347().length - 4) {
      _0x4928a5(_0x3b7347().slice(-4));
    } else {
      _0x4928a5(_0x3b7347().slice(_0x5d0c8a, _0x3dcb45));
    }
  }
  const _0x4db6fd = _0x4fc1a9 => {
    _0x4fc1a9.preventDefault();
    const _0x4dc66a = _0x4fc1a9.deltaY < 0 ? -1 : 1;
    const _0x207e22 = _0x119b0f() + _0x4dc66a;
    if (_0x207e22 >= 0 && _0x207e22 < _0x3b7347().length) {
      _0x3fb049(_0x207e22);
      _0x594164(_0x3b7347()[_0x207e22]);
    } else if (_0x207e22 < 0) {
      _0x3fb049(_0x3b7347().length - 1);
      _0x594164(_0x3b7347()[_0x3b7347().length - 1]);
    } else if (_0x207e22 >= _0x3b7347().length) {
      _0x3fb049(0);
      _0x594164(_0x3b7347()[0]);
    }
    _0x1e5724();
  };
  const _0xce673 = () => {
    const _0x5d78cd = _0x3b7347()[_0x119b0f()];
    if (_0x5d78cd) {
      return _0x5d78cd.type === "empty";
    } else {
      return true;
    }
  };
  const _0x4557ca = _0x4efb78 => {
    const _0x147221 = "growBed:" + _0x4efb78 + "Plants";
    const _0x476eb2 = $t(_0x5b4441.plants);
    let _0x2bc69e = [];
    if (_0x4efb78 === "harvestAll") {
      _0x2bc69e = _0x476eb2.harvestPlants;
    } else if (_0x4efb78 === "gatherAll") {
      _0x2bc69e = _0x476eb2.gatherPlants;
    }
    if (_0x2bc69e.length !== 0) {
      _0x12f36e.execute(_0x147221, {
        growBedId: _0x5b4441.growBedId,
        plants: _0x2bc69e
      });
      _0x5b4441.setDragging(false);
      Re();
    }
  };
  const _0x53d488 = _0x21e5b8 => {
    const _0x2636bd = _0x3b7347()[_0x119b0f()];
    if (!_0x2636bd || _0x2636bd.type === "empty") {
      return;
    }
    const _0x39e948 = _0x5b4441.plants.find(_0x145276 => _0x145276.id === _0x2636bd.id);
    if (!_0x39e948) {
      return;
    }
    const _0x274fb3 = "growBed:" + _0x21e5b8 + "Plant";
    _0x12f36e.execute(_0x274fb3, {
      growBedId: _0x5b4441.growBedId,
      plantId: _0x39e948.id
    });
    _0x5b4441.setDragging(false);
    Re();
  };
  const _0x3b53da = _0x43f51e => {
    if (_0x5b4441.dragging) {
      const _0x11e877 = _0x3b7347()[_0x119b0f()];
      if (!_0x11e877 && (_0x43f51e === "water" || _0x43f51e === "fertilize")) {
        return;
      }
      switch (_0x43f51e) {
        case "plant":
          if (_0x5b4441.draggedItemId !== "crop_seeds" && _0x5b4441.draggedItemId !== "crop_produce" || _0x5b4441.draggedItemVariant == "" || _0x11e877 && _0x11e877.type !== "empty") {
            return;
          }
          _0x12f36e.execute("growBed:plant", {
            growBedId: _0x5b4441.growBedId,
            itemId: _0x5b4441.draggedItemId,
            itemVariant: _0x5b4441.draggedItemVariant,
            itemSlot: _0x5b4441.draggedItemSlot
          });
          break;
        case "plantAll":
          if (_0x5b4441.draggedItemId !== "crop_seeds" && _0x5b4441.draggedItemId !== "crop_produce" || _0x5b4441.draggedItemVariant == "" || _0x11e877 && _0x11e877.type !== "empty") {
            return;
          }
          _0x12f36e.execute("growBed:plantAll", {
            growBedId: _0x5b4441.growBedId,
            itemId: _0x5b4441.draggedItemId,
            itemVariant: _0x5b4441.draggedItemVariant,
            itemSlot: _0x5b4441.draggedItemSlot
          });
          break;
        case "water":
          if (_0x5b4441.draggedItemId !== "watering_can" && _0x5b4441.draggedItemId !== "farming_watering_can" || _0x11e877.type !== "plant") {
            return;
          }
          const _0x1e3053 = _0x5b4441.plants.find(_0x5ef8a4 => _0x5ef8a4.id === _0x11e877.id);
          if (!_0x1e3053) {
            return;
          }
          _0x12f36e.execute("growBed:waterPlant", {
            growBedId: _0x5b4441.growBedId,
            plantId: _0x1e3053.id,
            itemId: _0x5b4441.draggedId,
            itemSlot: _0x5b4441.draggedItemSlot
          });
          break;
        case "fertilize":
          if (_0x5b4441.draggedItemId !== "fertilizer" || _0x11e877.type !== "plant") {
            return;
          }
          const _0xbffcab = _0x5b4441.plants.find(_0x307f0a => _0x307f0a.id === _0x11e877.id);
          if (!_0xbffcab) {
            return;
          }
          _0x12f36e.execute("growBed:fertilizePlant", {
            growBedId: _0x5b4441.growBedId,
            plantId: _0xbffcab.id
          });
          break;
      }
    }
    _0x5b4441.setDragging(false);
    Re();
  };
  const _0x53b226 = W(() => "flex w-full flex-col " + (_0x5b4441.max_plants <= 4 || _0x3b7347().length <= 4 ? "place-items-center justify-center text-center" : "place-items-start justify-start text-start") + " gap-[1vh] ml-[0.5vh]");
  return c(Ue, {
    name: "slide-left",
    get children() {
      return c(R, {
        when: true,
        get children() {
          const _0x51211d = Ri();
          const _0x32c101 = _0x51211d.firstChild;
          const _0x1510f6 = _0x32c101.firstChild;
          const _0x20ecbf = _0x1510f6.firstChild;
          const _0x2ae678 = _0x20ecbf.nextSibling;
          const _0x211c91 = _0x2ae678.firstChild;
          const _0x12126a = _0x211c91.firstChild;
          const _0x4876b0 = _0x12126a.firstChild;
          const _0x4f2c56 = _0x211c91.nextSibling;
          const _0x230969 = _0x32c101.nextSibling;
          const _0x35d890 = _0x230969.firstChild;
          const _0x18d0f1 = _0x35d890.firstChild;
          const _0xe93449 = _0x18d0f1.nextSibling;
          const _0x41bb7d = _0xe93449.firstChild;
          g(_0x20ecbf, c(Di, {
            get imageUrl() {
              return _0x104e3a();
            }
          }));
          g(_0x12126a, c(Ae, {
            get title() {
              return _0x5656f5();
            },
            get description() {
              return _0x25bc8e();
            },
            get additionalText() {
              return _0x51bbda();
            }
          }), _0x4876b0);
          g(_0x4876b0, c(R, {
            get when() {
              return W(() => !!_0x5b4441.harvestButton)() && _0x1e10f0();
            },
            get children() {
              return c(Ne, {
                text: "Harvest",
                onClick: () => _0x53d488("harvest")
              });
            }
          }), null);
          g(_0x4876b0, c(R, {
            get when() {
              return W(() => !!_0x5b4441.gatherButton)() && _0xbc6840();
            },
            get children() {
              return c(Ne, {
                text: "Gather",
                onClick: () => _0x53d488("gather")
              });
            }
          }), null);
          g(_0x4876b0, c(R, {
            get when() {
              return W(() => !!_0x5b4441.destroyButton)() && _0x1cf52b();
            },
            get children() {
              return c(Ne, {
                destructive: true,
                text: "Destroy",
                onClick: () => _0x53d488("destroy")
              });
            }
          }), null);
          g(_0x4876b0, c(R, {
            get when() {
              return W(() => !!_0xce673())() && _0x2dbd1e();
            },
            get children() {
              return c(Ne, {
                text: "Harvest All",
                onClick: () => _0x4557ca("harvestAll")
              });
            }
          }), null);
          g(_0x4876b0, c(R, {
            get when() {
              return W(() => !!_0xce673())() && _0x4757ba();
            },
            get children() {
              return c(Ne, {
                text: "Gather All",
                onClick: () => _0x4557ca("gatherAll")
              });
            }
          }), null);
          g(_0x4f2c56, c(R, {
            get when() {
              return W(() => !!_0x5b4441.plantSlot)() && _0x2ec715();
            },
            get children() {
              return [(() => {
                const _0x4e8b11 = Xe();
                g(_0x4e8b11, c(Ae, {
                  title: "PLANT",
                  description: "Drag seed here."
                }), null);
                g(_0x4e8b11, c(Qe, {
                  get dragging() {
                    return _0x5b4441.dragging;
                  },
                  get validHover() {
                    return _0x5b4441.draggedItemId === "crop_seeds" || _0x5b4441.draggedItemId === "crop_produce";
                  },
                  onClick: () => _0x3b53da("plant")
                }), null);
                return _0x4e8b11;
              })(), (() => {
                const _0x3b4494 = Xe();
                g(_0x3b4494, c(Ae, {
                  title: "PLANT ALL",
                  description: "Drag seeds here."
                }), null);
                g(_0x3b4494, c(Qe, {
                  get dragging() {
                    return _0x5b4441.dragging;
                  },
                  get validHover() {
                    return _0x5b4441.draggedItemId === "crop_seeds" || _0x5b4441.draggedItemId === "crop_produce";
                  },
                  onClick: () => _0x3b53da("plantAll")
                }), null);
                return _0x3b4494;
              })()];
            }
          }), null);
          g(_0x4f2c56, c(R, {
            get when() {
              return W(() => !!_0x5b4441.wateringSlot)() && _0x2f0b6f();
            },
            get children() {
              const _0x2dcf56 = Xe();
              g(_0x2dcf56, c(Ae, {
                title: "WATER PLANT",
                description: "Drag can here."
              }), null);
              g(_0x2dcf56, c(Qe, {
                get dragging() {
                  return _0x5b4441.dragging;
                },
                get validHover() {
                  return _0x5b4441.draggedItemId === "watering_can" || _0x5b4441.draggedItemId === "farming_watering_can";
                },
                onClick: () => _0x3b53da("water")
              }), null);
              return _0x2dcf56;
            }
          }), null);
          g(_0x4f2c56, c(R, {
            get when() {
              return W(() => !!_0x5b4441.fertilizerSlot)() && _0x1f3042();
            },
            get children() {
              const _0x1fb247 = Xe();
              g(_0x1fb247, c(Ae, {
                title: "FERTILIZE PLANT",
                description: "Drag fertilizer here."
              }), null);
              g(_0x1fb247, c(Qe, {
                get dragging() {
                  return _0x5b4441.dragging;
                },
                get validHover() {
                  return _0x5b4441.draggedItemId === "fertilizer";
                },
                onClick: () => _0x3b53da("fertilize")
              }), null);
              return _0x1fb247;
            }
          }), null);
          g(_0x18d0f1, c(Ae, {
            title: "GROW BED PLANTS",
            description: "Planted & available space located inside the Grow Bed"
          }), null);
          g(_0x18d0f1, c(gi, {}), null);
          _0xe93449.addEventListener("wheel", _0x4db6fd);
          g(_0xe93449, (() => {
            const _0x116c15 = W(() => _0x3b7347().length > 4);
            return () => _0x116c15() && c(ai, {
              selectedItemIndex: _0x119b0f,
              setSelectedItemIndex: _0x3fb049,
              get totalItems() {
                return _0x3b7347().length;
              },
              get dragging() {
                return _0x5b4441.dragging;
              }
            });
          })(), _0x41bb7d);
          const _0x4e822 = _0x3c17f8;
          if (typeof _0x4e822 == "function") {
            Wn(_0x4e822, _0x41bb7d);
          } else {
            _0x3c17f8 = _0x41bb7d;
          }
          g(_0x41bb7d, () => _0x3fd668.map(_0x411705 => {
            if (_0x411705.type === "plant") {
              const _0x256d50 = _0x5b4441.plants.find(_0x2e742c => _0x2e742c.id === _0x411705.id);
              if (_0x256d50) {
                return c(ni, {
                  get name() {
                    return _0x256d50.display_name;
                  },
                  get selected() {
                    return _0x3b7347().findIndex(_0x24599a => _0x24599a.id === _0x411705.id) === _0x119b0f();
                  },
                  get slotnum() {
                    return _0x256d50.position_index;
                  },
                  onSelect: () => {
                    const _0xde0e7 = _0x3b7347().findIndex(_0x51dc13 => _0x51dc13.id === _0x411705.id);
                    _0x3fb049(_0xde0e7);
                    _0x1e5724();
                    _0x594164(_0x3b7347()[_0xde0e7]);
                  },
                  get image() {
                    return _0x256d50.image;
                  }
                });
              }
            } else {
              return c(bi, {
                get slotnum() {
                  return _0x411705.slotnum ?? "";
                },
                onSelect: () => {
                  const _0x550ff7 = _0x3b7347().findIndex(_0x40ea31 => _0x40ea31.id === _0x411705.id);
                  _0x3fb049(_0x550ff7);
                  _0x1e5724();
                  _0x594164(_0x3b7347()[_0x550ff7]);
                },
                get selected() {
                  return _0x3b7347().findIndex(_0x472532 => _0x472532.id === _0x411705.id) === _0x119b0f();
                }
              });
            }
          }));
          g(_0xe93449, (() => {
            const _0x5ccb14 = W(() => _0x3b7347().length > 4);
            return () => _0x5ccb14() && c(ui, {
              selectedItemIndex: _0x119b0f,
              setSelectedItemIndex: _0x3fb049,
              get totalItems() {
                return _0x3b7347().length;
              },
              get dragging() {
                return _0x5b4441.dragging;
              }
            });
          })(), null);
          A(_0x56c441 => {
            const _0x27bf3e = Le.App;
            const _0x8e653a = Le.outer;
            const _0x5a8861 = Le.plantcontainer;
            const _0x5ce90f = Le.outer;
            const _0x353994 = Le.container;
            const _0x4f37c6 = _0x53b226();
            const _0x546619 = "no-scrollbar flex h-full w-full flex-row flex-nowrap justify-evenly gap-[0.5vh] overflow-scroll overflow-x-hidden overflow-y-hidden " + (_0x3b7347().length <= 4 ? "justify-center" : "justify-start");
            if (_0x27bf3e !== _0x56c441._v$) {
              f(_0x51211d, _0x56c441._v$ = _0x27bf3e);
            }
            if (_0x8e653a !== _0x56c441._v$2) {
              f(_0x32c101, _0x56c441._v$2 = _0x8e653a);
            }
            if (_0x5a8861 !== _0x56c441._v$3) {
              f(_0x1510f6, _0x56c441._v$3 = _0x5a8861);
            }
            if (_0x5ce90f !== _0x56c441._v$4) {
              f(_0x230969, _0x56c441._v$4 = _0x5ce90f);
            }
            if (_0x353994 !== _0x56c441._v$5) {
              f(_0x35d890, _0x56c441._v$5 = _0x353994);
            }
            if (_0x4f37c6 !== _0x56c441._v$6) {
              f(_0x18d0f1, _0x56c441._v$6 = _0x4f37c6);
            }
            if (_0x546619 !== _0x56c441._v$7) {
              f(_0x41bb7d, _0x56c441._v$7 = _0x546619);
            }
            return _0x56c441;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined,
            _v$4: undefined,
            _v$5: undefined,
            _v$6: undefined,
            _v$7: undefined
          });
          return _0x51211d;
        }
      });
    }
  });
};
const Fi = "_App_c89q5_1";
const Ui = "_outer_c89q5_10";
const zi = "_border_container_c89q5_62";
const yt = {
  App: Fi,
  outer: Ui,
  border_container: zi
};
const Vi = B("<div><div><div>");
const Yi = () => (() => {
  const _0x2b83ec = Vi();
  const _0x5c89e5 = _0x2b83ec.firstChild;
  const _0x4ad5aa = _0x5c89e5.firstChild;
  A(_0x5ee654 => {
    const _0x321b44 = yt.App;
    const _0x5c9f16 = yt.outer;
    const _0x1e8bb8 = yt.border_container;
    if (_0x321b44 !== _0x5ee654._v$) {
      f(_0x2b83ec, _0x5ee654._v$ = _0x321b44);
    }
    if (_0x5c9f16 !== _0x5ee654._v$2) {
      f(_0x5c89e5, _0x5ee654._v$2 = _0x5c9f16);
    }
    if (_0x1e8bb8 !== _0x5ee654._v$3) {
      f(_0x4ad5aa, _0x5ee654._v$3 = _0x1e8bb8);
    }
    return _0x5ee654;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0x2b83ec;
})();
const Zi = "_App_1e4kg_1";
const Ki = "_outer_1e4kg_14";
const Qi = "_container_1e4kg_27";
const Ee = {
  App: Zi,
  outer: Ki,
  container: Qi
};
const Xi = "_container_1xvoj_1";
const Ji = {
  container: Xi
};
const eo = B("<div>");
const Ie = _0x5edbbb => (() => {
  const _0x984487 = eo();
  g(_0x984487, () => _0x5edbbb.text);
  A(() => f(_0x984487, Ji.container));
  return _0x984487;
})();
const to = "_iconBox_no6m8_1";
const no = "_infoBox_no6m8_15";
const ro = "_required_no6m8_43";
const wt = {
  iconBox: to,
  infoBox: no,
  required: ro
};
const io = "_container_o1xeq_1";
const oo = "_box_o1xeq_8";
const ao = "_active_o1xeq_15";
const Je = {
  container: io,
  box: oo,
  active: ao
};
const lo = B("<div>");
const so = B("<div><div>");
const uo = _0x1fa29e => {
  function _0x4e4f78(_0x49e4fb) {
    const _0x11a295 = 100 - _0x1fa29e.value;
    const _0x1aac39 = 25;
    const _0x133bca = (3 - _0x49e4fb) * _0x1aac39;
    const _0x22e2bb = (4 - _0x49e4fb) * _0x1aac39;
    return "inset(0% " + Math.min(Math.max((_0x11a295 - _0x133bca) / (_0x22e2bb - _0x133bca), 0), 1) * 100 + "% 0% 0%)";
  }
  return (() => {
    const _0x3e9e7c = lo();
    g(_0x3e9e7c, c(gn, {
      get each() {
        return Array(4);
      },
      children: (_0x394f3c, _0x2bebd6) => (() => {
        const _0x55ccca = so();
        const _0xc05fb2 = _0x55ccca.firstChild;
        A(_0x237b01 => {
          const _0x180f84 = Je.box;
          const _0x27a2cb = Je.box;
          const _0x119a7d = {
            [Je.active]: true
          };
          const _0x9a45d4 = _0x4e4f78(_0x2bebd6());
          if (_0x180f84 !== _0x237b01._v$) {
            f(_0x55ccca, _0x237b01._v$ = _0x180f84);
          }
          if (_0x27a2cb !== _0x237b01._v$2) {
            f(_0xc05fb2, _0x237b01._v$2 = _0x27a2cb);
          }
          _0x237b01._v$3 = Bt(_0xc05fb2, _0x119a7d, _0x237b01._v$3);
          if (_0x9a45d4 !== _0x237b01._v$4) {
            if ((_0x237b01._v$4 = _0x9a45d4) != null) {
              _0xc05fb2.style.setProperty("clip-path", _0x9a45d4);
            } else {
              _0xc05fb2.style.removeProperty("clip-path");
            }
          }
          return _0x237b01;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined
        });
        return _0x55ccca;
      })()
    }));
    A(() => f(_0x3e9e7c, Je.container));
    return _0x3e9e7c;
  })();
};
const co = B("<div class=\"flex flex-row items-center justify-end gap-[2vh]\"><p>");
const fo = B("<div class=\"flex w-full flex-row items-center justify-between gap-[0.5vh]\"><div><i></i></div><div>");
const ee = _0x4bb88f => (() => {
  const _0x44617b = fo();
  const _0x3673d1 = _0x44617b.firstChild;
  const _0x41a5c3 = _0x3673d1.firstChild;
  const _0x56c817 = _0x3673d1.nextSibling;
  g(_0x56c817, () => _0x4bb88f.label, null);
  g(_0x56c817, c(R, {
    get when() {
      return !_0x4bb88f.disable;
    },
    get children() {
      const _0x10e52b = co();
      const _0x454339 = _0x10e52b.firstChild;
      g(_0x10e52b, c(R, {
        get when() {
          return _0x4bb88f.progress !== undefined;
        },
        get children() {
          return c(uo, {
            get value() {
              return _0x4bb88f.progress;
            }
          });
        }
      }), _0x454339);
      g(_0x454339, () => _0x4bb88f.text ?? _0x4bb88f.progress?.toFixed(1) + "%");
      A(_0xc06f25 => Bt(_0x454339, {
        [wt.required]: _0x4bb88f.required
      }, _0xc06f25));
      return _0x10e52b;
    }
  }), null);
  A(_0x29e9ca => {
    const _0x4e9f24 = wt.iconBox;
    const _0x1333dc = _0x4bb88f.icon;
    const _0x146140 = wt.infoBox;
    if (_0x4e9f24 !== _0x29e9ca._v$) {
      f(_0x3673d1, _0x29e9ca._v$ = _0x4e9f24);
    }
    if (_0x1333dc !== _0x29e9ca._v$2) {
      f(_0x41a5c3, _0x29e9ca._v$2 = _0x1333dc);
    }
    if (_0x146140 !== _0x29e9ca._v$3) {
      f(_0x56c817, _0x29e9ca._v$3 = _0x146140);
    }
    return _0x29e9ca;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0x44617b;
})();
const _o = "_title_uf986_1";
const go = "_description_uf986_11";
const en = {
  title: _o,
  description: go
};
const mo = B("<div class=\"mb-[1vh] flex flex-col items-start justify-start\"><div>GROW BED INSPECTION</div><div>Track & manage the status of your plants. Select a plant to view its genetics, traits & conditions.");
const ho = () => (() => {
  const _0x2215b1 = mo();
  const _0x294733 = _0x2215b1.firstChild;
  const _0x5e7a5a = _0x294733.nextSibling;
  A(_0x47ec67 => {
    const _0x354cf4 = en.title;
    const _0x64e3dc = en.description;
    if (_0x354cf4 !== _0x47ec67._v$) {
      f(_0x294733, _0x47ec67._v$ = _0x354cf4);
    }
    if (_0x64e3dc !== _0x47ec67._v$2) {
      f(_0x5e7a5a, _0x47ec67._v$2 = _0x64e3dc);
    }
    return _0x47ec67;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x2215b1;
})();
const vo = "_itemBox_1uspp_1";
const $o = "_infoBox_1uspp_20";
const tn = {
  itemBox: vo,
  infoBox: $o
};
const yo = B("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\"><div><img></div><div><h1></h1><p>");
const wo = _0x5074ef => (() => {
  const _0x5880fa = yo();
  const _0x5d328a = _0x5880fa.firstChild;
  const _0x2ed843 = _0x5d328a.firstChild;
  const _0x3cee8f = _0x5d328a.nextSibling;
  const _0xd215ab = _0x3cee8f.firstChild;
  const _0x953eec = _0xd215ab.nextSibling;
  de(_0x2ed843, "draggable", false);
  g(_0xd215ab, () => _0x5074ef.itemName.charAt(0).toUpperCase() + _0x5074ef.itemName.toLowerCase().slice(1));
  g(_0x953eec, () => _0x5074ef.itemDescription);
  A(_0x5dd2a5 => {
    const _0x402692 = tn.itemBox;
    const _0x2315e5 = _0x5074ef.itemImage;
    const _0x295840 = tn.infoBox;
    if (_0x402692 !== _0x5dd2a5._v$) {
      f(_0x5d328a, _0x5dd2a5._v$ = _0x402692);
    }
    if (_0x2315e5 !== _0x5dd2a5._v$2) {
      de(_0x2ed843, "src", _0x5dd2a5._v$2 = _0x2315e5);
    }
    if (_0x295840 !== _0x5dd2a5._v$3) {
      f(_0x3cee8f, _0x5dd2a5._v$3 = _0x295840);
    }
    return _0x5dd2a5;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0x5880fa;
})();
const bo = "_container_i49dn_1";
const Io = "_bar_i49dn_11";
const nn = {
  container: bo,
  bar: Io
};
const So = B("<div><div>");
const xn = () => (() => {
  const _0x7a8f37 = So();
  const _0x540953 = _0x7a8f37.firstChild;
  A(_0x49b0ff => {
    const _0x5bded7 = nn.container;
    const _0xf9f3a3 = nn.bar;
    if (_0x5bded7 !== _0x49b0ff._v$) {
      f(_0x7a8f37, _0x49b0ff._v$ = _0x5bded7);
    }
    if (_0xf9f3a3 !== _0x49b0ff._v$2) {
      f(_0x540953, _0x49b0ff._v$2 = _0xf9f3a3);
    }
    return _0x49b0ff;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x7a8f37;
})();
const xo = "_container_8mqmw_1";
const Co = "_genetic_8mqmw_14";
const po = "_red_8mqmw_31";
const Mo = "_bar_8mqmw_34";
const ko = "_blue_8mqmw_38";
const Ao = "_purple_8mqmw_45";
const Bo = "_yellowgreen_8mqmw_52";
const be = {
  container: xo,
  genetic: Co,
  red: po,
  bar: Mo,
  blue: ko,
  purple: Ao,
  yellowgreen: Bo
};
const Eo = B("<div><div>");
const To = B("<div>");
const Go = _0x5c2aa4 => (() => {
  const _0x45cf04 = Eo();
  const _0xfb81ed = _0x45cf04.firstChild;
  g(_0x45cf04, () => _0x5c2aa4.type, _0xfb81ed);
  A(_0x59d8a2 => {
    const _0x4e1b1a = be.genetic;
    const _0xc1c32d = {
      [be.red]: _0x5c2aa4.type === "G" || _0x5c2aa4.type === "L",
      [be.blue]: _0x5c2aa4.type === "W" || _0x5c2aa4.type === "M",
      [be.purple]: _0x5c2aa4.type === "S" || _0x5c2aa4.type === "N",
      [be.yellowgreen]: _0x5c2aa4.type === "Y" || _0x5c2aa4.type === "F"
    };
    const _0x3be3f2 = be.bar;
    if (_0x4e1b1a !== _0x59d8a2._v$) {
      f(_0x45cf04, _0x59d8a2._v$ = _0x4e1b1a);
    }
    _0x59d8a2._v$2 = Bt(_0x45cf04, _0xc1c32d, _0x59d8a2._v$2);
    if (_0x3be3f2 !== _0x59d8a2._v$3) {
      f(_0xfb81ed, _0x59d8a2._v$3 = _0x3be3f2);
    }
    return _0x59d8a2;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0x45cf04;
})();
const Cn = _0x3ae6fd => {
  const _0x10aaf3 = W(() => V.ConvertToStringArray(_0x3ae6fd.genes));
  xe(() => {
    _0x10aaf3();
  });
  return (() => {
    const _0x77182 = To();
    g(_0x77182, c(gn, {
      get each() {
        return _0x10aaf3();
      },
      children: _0x1bc994 => c(Go, {
        type: _0x1bc994
      })
    }));
    A(() => f(_0x77182, be.container));
    return _0x77182;
  })();
};
const Do = B("<div><div><div>");
const Lo = B("<div><div><div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"></div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"></div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\">");
const Po = _0x1e1f64 => {
  const [_0x2cb2f9, _0x5c620c] = b(0);
  const [_0x105a6c, _0x3fae31] = b(0);
  const [_0x4709f9, _0x23fc70] = b(0);
  const [_0x1e0526, _0xe02fc3] = b(0);
  const [_0x3ff000, _0x36b4ac] = b(0);
  const [_0x5708fb, _0x5467fa] = b("Calculating...");
  const [_0x43a104, _0x2fee24] = b("Calculating...");
  const [_0x4603eb, _0x5a502a] = b("Calculating...");
  const [_0x4a323e, _0x4bb904] = b("Calculating...");
  const [_0x4ff892, _0x367a26] = b(true);
  const _0x15f113 = () => {
    _0x367a26(false);
  };
  const _0x50d40f = _0x1644a1 => {
    _0x367a26(false);
  };
  const _0x6d2219 = () => {
    _0x367a26(false);
  };
  const _0x373536 = (_0x513e35, _0xb5fb00) => {
    const _0x3494af = V.GetGrowthStages(_0x513e35.type, _0x513e35.genetics, _0x513e35.generation);
    let _0x15d173 = 0;
    let _0x506b16 = 0;
    for (let _0x147d77 = 0; _0x147d77 < _0x3494af.length; _0x147d77++) {
      _0x15d173 += _0x3494af[_0x147d77].duration;
      if (_0x513e35.planted_at + _0x15d173 > _0xb5fb00) {
        _0x506b16 = _0x147d77;
        break;
      }
    }
    return _0x506b16 === 3;
  };
  const _0x2df46d = (_0x55ea6b, _0x1947a4) => {
    const _0x24d256 = V.GetGrowthStages(_0x55ea6b.type, _0x55ea6b.genetics, _0x55ea6b.generation);
    let _0x543e53 = 0;
    let _0x17d3b6 = 0;
    for (let _0x549eb6 = 0; _0x549eb6 < _0x24d256.length; _0x549eb6++) {
      _0x543e53 += _0x24d256[_0x549eb6].duration;
      if (_0x55ea6b.planted_at + _0x543e53 > _0x1947a4) {
        _0x17d3b6 = _0x549eb6;
        break;
      }
    }
    const _0x4e514f = V.GetGatheringFrequency(_0x55ea6b.type, _0x55ea6b.genetics);
    const _0x436286 = _0x55ea6b.last_gathered_seeds + _0x4e514f;
    return _0x17d3b6 === 3 && _0x1947a4 >= _0x436286;
  };
  const _0x5d4519 = (_0x50c66d, _0x3bee38) => {
    const _0xa621a4 = V.GetGrowthStages(_0x50c66d.type, _0x50c66d.genetics, _0x50c66d.generation);
    let _0x36b393 = 0;
    for (let _0x27232d = 0; _0x27232d < _0xa621a4.length; _0x27232d++) {
      _0x36b393 += _0xa621a4[_0x27232d].duration;
      if (_0x50c66d.planted_at + _0x36b393 > _0x3bee38) {
        if (_0x27232d === 0) {
          return "Germinates";
        }
        if (_0x27232d === 1) {
          return "Sprouts";
        }
        if (_0x27232d === 2) {
          return "Matures";
        }
        if (_0x27232d === 3) {
          return "Decays";
        }
      }
    }
    return "Calculating...";
  };
  const _0x49d594 = _0xc90ed8 => {
    const _0x1a5c15 = Math.floor(Date.now() / 1000) - _0xc90ed8.planted_at;
    const _0x5a3277 = Math.floor(_0x1a5c15 / 3600);
    const _0x18e991 = Math.floor(_0x1a5c15 % 3600 / 60);
    const _0x2b8f29 = Math.floor(_0x1a5c15 % 60);
    if (_0x5a3277 + _0x18e991 + _0x2b8f29 < 0) {
      return "Calculating...";
    } else {
      return _0x5a3277 + "h " + _0x18e991 + "m " + _0x2b8f29 + "s";
    }
  };
  const _0x2a3692 = _0x3e207e => {
    const _0x279cab = V.GetGrowthStages(_0x3e207e.type, _0x3e207e.genetics, _0x3e207e.generation);
    const _0x326bd0 = Math.floor(Date.now() / 1000);
    let _0x504796 = 0;
    let _0x499aa2 = 0;
    for (let _0x19d036 = 0; _0x19d036 < _0x279cab.length; _0x19d036++) {
      _0x504796 += _0x279cab[_0x19d036].duration;
      if (_0x3e207e.planted_at + _0x504796 > _0x326bd0) {
        _0x499aa2 = _0x3e207e.planted_at + _0x504796;
        if (_0x1e1f64.growBedSprinklerPlants.includes(_0x3e207e.id) && _0x19d036 === 3) {
          return "∞";
        }
        break;
      }
    }
    const _0x4530eb = _0x499aa2 - _0x326bd0;
    const _0xeb00d2 = Math.floor(_0x4530eb / 3600);
    const _0x493700 = Math.floor(_0x4530eb % 3600 / 60);
    const _0x4a705c = Math.floor(_0x4530eb % 60);
    if (_0xeb00d2 + _0x493700 + _0x4a705c < 0) {
      return "Calculating...";
    } else {
      return _0xeb00d2 + "h " + _0x493700 + "m " + _0x4a705c + "s";
    }
  };
  const _0x4a8d20 = _0x1a545 => {
    const _0x28cc92 = Math.floor(Date.now() / 1000);
    const _0x139bf6 = V.GetGatheringFrequency(_0x1a545.type, _0x1a545.genetics);
    const _0x4c1fba = _0x1a545.last_gathered_seeds + _0x139bf6;
    if (_0x28cc92 >= _0x4c1fba) {
      return "Ready";
    }
    const _0x460250 = _0x4c1fba - _0x28cc92;
    const _0x2996fb = Math.floor(_0x460250 / 3600);
    const _0x149b14 = Math.floor(_0x460250 % 3600 / 60);
    const _0x43900a = Math.floor(_0x460250 % 60);
    if (_0x2996fb + _0x149b14 + _0x43900a < 0) {
      return "Calculating...";
    } else {
      return _0x2996fb + "h " + _0x149b14 + "m " + _0x43900a + "s";
    }
  };
  const _0x573ea9 = _0x2e6c1e => {
    const _0x28c6cd = Math.floor(Date.now() / 1000);
    const _0x44c76f = V.GetGatheringFrequency(_0x2e6c1e.type, _0x2e6c1e.genetics);
    const _0x2377f9 = _0x2e6c1e.last_gathered_seeds + _0x44c76f;
    _0x1e1f64.setCanGather(_0x2e6c1e.stage === 3 && _0x28c6cd >= _0x2377f9);
  };
  xe(() => {
    if (_0x1e1f64.plant) {
      _0x573ea9(_0x1e1f64.plant);
    } else {
      _0x1e1f64.setCanGather(false);
    }
  }, [_0x1e1f64.plant]);
  const _0x570791 = W(() => _0x5708fb() !== "Calculating...", [_0x5708fb(), _0x1e1f64.plant, _0x1e1f64.refresh]);
  const _0x33be88 = W(() => _0x5708fb() === "Decays", [_0x5708fb(), _0x1e1f64.plant, _0x1e1f64.refresh]);
  let _0x5c6a96;
  Te(() => {
    document.addEventListener("wheel", _0x6d2219);
    document.addEventListener("mousedown", _0x15f113);
    document.addEventListener("keydown", _0x50d40f);
    _0x5c6a96 = setInterval(() => {
      if (!_0x1e1f64.plant) {
        return;
      }
      const _0x3b798a = Math.floor(Date.now() / 1000);
      const _0x2d50b9 = _0x373536(_0x1e1f64.plant, _0x3b798a);
      const _0x13e023 = _0x2df46d(_0x1e1f64.plant, _0x3b798a);
      _0x2fee24(_0x49d594(_0x1e1f64.plant));
      _0x5a502a(_0x2a3692(_0x1e1f64.plant));
      _0x4bb904(_0x4a8d20(_0x1e1f64.plant));
      _0x5467fa(_0x5d4519(_0x1e1f64.plant, _0x3b798a));
      _0x573ea9(_0x1e1f64.plant);
      _0x1e1f64.setCanHarvest(_0x2d50b9);
      _0x1e1f64.setCanGather(_0x13e023);
      if (_0x1e1f64.growBedSprinklerPlants.includes(_0x1e1f64.plant.id)) {
        _0x23fc70(Math.min(_0x1e1f64.plant.ground, 100));
        _0xe02fc3(Math.min(_0x1e1f64.plant.water, 100));
      } else {
        _0x23fc70(_0x1e1f64.plant.ground);
        _0xe02fc3(_0x1e1f64.plant.water);
      }
      _0x5c620c(_0x1e1f64.plant.health);
      _0x3fae31(_0x1e1f64.plant.quality);
      _0x36b4ac(_0x1e1f64.plant.light);
    }, 1000);
  });
  ce(() => {
    document.removeEventListener("mousedown", _0x15f113);
    document.removeEventListener("keydown", _0x50d40f);
    document.removeEventListener("wheel", _0x6d2219);
    clearInterval(_0x5c6a96);
    _0x5c620c(0);
    _0x3fae31(0);
    _0x23fc70(0);
    _0xe02fc3(0);
    _0x36b4ac(0);
    _0x5467fa("Calculating...");
    _0x2fee24("Calculating...");
    _0x5a502a("Calculating...");
    _0x4bb904("Calculating...");
    _0x367a26(true);
  });
  return c(Ue, {
    name: "slide-left",
    get children() {
      return [c(R, {
        get when() {
          return !_0x1e1f64.plant || _0x4ff892();
        },
        get children() {
          const _0x186d57 = Do();
          const _0x3c30df = _0x186d57.firstChild;
          const _0x1148e6 = _0x3c30df.firstChild;
          g(_0x1148e6, c(ho, {}), null);
          g(_0x1148e6, c(wo, {
            get itemImage() {
              return _0x1e1f64.growBedImage;
            },
            get itemName() {
              return _0x1e1f64.growBedName;
            },
            get itemDescription() {
              return _0x1e1f64.growBedDescription;
            }
          }), null);
          g(_0x1148e6, c(xn, {}), null);
          g(_0x1148e6, c(Ie, {
            text: "Planting Space"
          }), null);
          g(_0x1148e6, c(ee, {
            icon: "fa-sharp fa-solid fa-box",
            label: "Max Large Plants",
            get text() {
              return Math.floor(_0x1e1f64.maxPlants / 4).toString();
            }
          }), null);
          g(_0x1148e6, c(ee, {
            icon: "fa-sharp fa-solid fa-box",
            label: "Max Small Plants",
            get text() {
              return _0x1e1f64.maxPlants.toString();
            }
          }), null);
          g(_0x1148e6, c(R, {
            get when() {
              return _0x1e1f64.growBedLights > 0 || _0x1e1f64.growBedSprinklers > 0;
            },
            get children() {
              return c(Ie, {
                text: "Plant Averages"
              });
            }
          }), null);
          g(_0x1148e6, c(R, {
            get when() {
              return _0x1e1f64.growBedLights > 0;
            },
            get children() {
              return [c(ee, {
                icon: "fa-sharp fa-solid fa-lightbulb",
                label: "Lights Used",
                get text() {
                  return _0x1e1f64.growBedLights.toString();
                }
              }), c(ee, {
                icon: "fa-sharp fa-solid fa-sun",
                label: "Coverage",
                get progress() {
                  return _0x1e1f64.growBedLightsCoverage ?? 0;
                }
              })];
            }
          }), null);
          g(_0x1148e6, c(R, {
            get when() {
              return _0x1e1f64.growBedSprinklers > 0;
            },
            get children() {
              return [c(ee, {
                icon: "fa-sharp fa-solid fa-shower",
                label: "Sprinklers",
                get text() {
                  return _0x1e1f64.growBedSprinklers.toString();
                }
              }), c(ee, {
                icon: "fa-sharp fa-solid fa-water",
                label: "Coverage",
                get progress() {
                  return _0x1e1f64.growBedSprinklersCoverage ?? 0;
                }
              })];
            }
          }), null);
          A(_0x2efd64 => {
            const _0x44c70d = Ee.App;
            const _0x7da30d = Ee.outer;
            const _0x244ef2 = Ee.container;
            if (_0x44c70d !== _0x2efd64._v$) {
              f(_0x186d57, _0x2efd64._v$ = _0x44c70d);
            }
            if (_0x7da30d !== _0x2efd64._v$2) {
              f(_0x3c30df, _0x2efd64._v$2 = _0x7da30d);
            }
            if (_0x244ef2 !== _0x2efd64._v$3) {
              f(_0x1148e6, _0x2efd64._v$3 = _0x244ef2);
            }
            return _0x2efd64;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined
          });
          return _0x186d57;
        }
      }), c(R, {
        get when() {
          return W(() => !!_0x1e1f64.plant)() && !_0x4ff892();
        },
        get children() {
          const _0x3b3533 = Lo();
          const _0x1c2e82 = _0x3b3533.firstChild;
          const _0x368cf8 = _0x1c2e82.firstChild;
          const _0x47e61a = _0x368cf8.firstChild;
          const _0x1de71e = _0x47e61a.nextSibling;
          const _0x8b8224 = _0x1de71e.nextSibling;
          g(_0x47e61a, c(Ie, {
            text: "Genetics & Traits"
          }), null);
          g(_0x47e61a, c(Cn, {
            get genes() {
              return _0x1e1f64.plant?.genetics ?? [];
            }
          }), null);
          g(_0x47e61a, c(ee, {
            icon: "fa-sharp fa-solid fa-heart",
            label: "Health",
            get progress() {
              return _0x2cb2f9();
            }
          }), null);
          g(_0x47e61a, c(ee, {
            icon: "fa-sharp fa-solid fa-seedling",
            label: "Quality",
            get progress() {
              return _0x105a6c();
            }
          }), null);
          g(_0x1de71e, c(Ie, {
            text: "Life Cycle"
          }), null);
          g(_0x1de71e, c(R, {
            get when() {
              return !_0x33be88();
            },
            get children() {
              return c(ee, {
                icon: "fa-sharp fa-regular fa-clock",
                label: "Age",
                get text() {
                  return _0x43a104();
                }
              });
            }
          }), null);
          g(_0x1de71e, c(R, {
            get when() {
              return _0x570791();
            },
            get children() {
              return c(ee, {
                icon: "fa-regular fa-calendar-lines-pen",
                get label() {
                  return _0x5708fb();
                },
                get text() {
                  return _0x4603eb();
                }
              });
            }
          }), null);
          g(_0x1de71e, c(R, {
            get when() {
              return _0x33be88();
            },
            get children() {
              return c(ee, {
                icon: "fa-regular fa-calendar-lines-pen",
                label: "Gather Seeds",
                get text() {
                  return _0x4a323e();
                }
              });
            }
          }), null);
          g(_0x8b8224, c(Ie, {
            text: "Conditions"
          }), null);
          g(_0x8b8224, c(ee, {
            icon: "fa-sharp fa-solid fa-droplet",
            label: "Water",
            get progress() {
              return _0x1e0526();
            }
          }), null);
          g(_0x8b8224, c(ee, {
            icon: "fa-sharp fa-solid fa-worm",
            label: "Soil",
            get progress() {
              return _0x4709f9();
            }
          }), null);
          g(_0x8b8224, c(ee, {
            icon: "fa-solid fa-sun-bright",
            label: "Light",
            get progress() {
              return _0x3ff000();
            }
          }), null);
          A(_0x5f58d6 => {
            const _0x6cf820 = Ee.App;
            const _0x4a0e2f = Ee.outer;
            const _0x1924ba = Ee.container;
            if (_0x6cf820 !== _0x5f58d6._v$4) {
              f(_0x3b3533, _0x5f58d6._v$4 = _0x6cf820);
            }
            if (_0x4a0e2f !== _0x5f58d6._v$5) {
              f(_0x1c2e82, _0x5f58d6._v$5 = _0x4a0e2f);
            }
            if (_0x1924ba !== _0x5f58d6._v$6) {
              f(_0x368cf8, _0x5f58d6._v$6 = _0x1924ba);
            }
            return _0x5f58d6;
          }, {
            _v$4: undefined,
            _v$5: undefined,
            _v$6: undefined
          });
          return _0x3b3533;
        }
      })];
    }
  });
};
const No = "_draggableItem_1li5q_1";
const Oo = {
  draggableItem: No
};
const jo = B("<div><img alt=\"Draggable Item\">");
const Wo = _0x14e969 => (() => {
  const _0xfd5bb = jo();
  const _0x41e4e2 = _0xfd5bb.firstChild;
  A(_0x5eacf0 => {
    const _0x152918 = Oo.draggableItem;
    const _0x4cd508 = _0x14e969.image;
    if (_0x152918 !== _0x5eacf0._v$) {
      f(_0xfd5bb, _0x5eacf0._v$ = _0x152918);
    }
    if (_0x4cd508 !== _0x5eacf0._v$2) {
      de(_0x41e4e2, "src", _0x5eacf0._v$2 = _0x4cd508);
    }
    return _0x5eacf0;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0xfd5bb;
})();
const qo = {
  show: false,
  refresh: false,
  hover: false,
  items: [],
  plants: [],
  hover_plant: {
    quality: 0,
    image: "",
    display_name: "",
    health: 0,
    genetics: []
  },
  grow_bed: {
    id: "",
    type: "",
    display_name: "",
    display_image: "",
    display_description: "",
    max_plants: 0,
    light_count: 0,
    light_coverage: 0,
    sprinkler_count: 0,
    sprinkler_coverage: 0,
    sprinkler_plants: []
  }
};
const Ro = "_App_xwiqo_1";
const Ho = "_outer_xwiqo_14";
const Fo = "_container_xwiqo_64";
const bt = {
  App: Ro,
  outer: Ho,
  container: Fo
};
const Uo = "_itemBox_1uspp_1";
const zo = "_infoBox_1uspp_20";
const rn = {
  itemBox: Uo,
  infoBox: zo
};
const Vo = {
  cabbage: ["Hey there, I'm a cabbage! Lettuce be friends!", "I may be round, but I'm not just another pretty leaf.", "Don't let my tough exterior fool you, I'm a softie at heart.", "I'm the king of coleslaw, the champion of sauerkraut!", "Cabbage patches aren't just for kids, you know!", "I'm packed with vitamins and minerals, a real health hero!", "Crunch into me and discover a world of flavor!"],
  carrot: ["Orange you glad to see me?", "I'm a root for your eyes and your taste buds!", "I may be underground, but I'm always reaching for the stars.", "Bugs Bunny isn't the only one who loves carrots!", "I'm sweet, crunchy, and good for your vision!", "Don't just pass me by, I'm a nutritious snack!", "I'm the root of all deliciousness!"],
  corn: ["I'm all ears, what's up?", "Shucks, I'm just happy to be here!", "I may be corny, but I've got a sweet side too.", "I'm the a-maize-ing crop that everyone loves!", "Popcorn, corn on the cob, I do it all!", "I'm a staple in many dishes, from salads to salsas!", "Kernels of wisdom: eat more corn!"],
  cucumber: ["I'm cool as a cucumber, nice to meet you!", "I may be green, but I'm not inexperienced.", "Slice me, dice me, I'm always refreshing!", "I'm the perfect addition to any salad or sandwich.", "Feeling hot? I'm here to cool you down!", "I'm low in calories but high in flavor!", "I'm a versatile veggie, perfect for pickles and more!"],
  garlic: ["I may be small, but I pack a punch!", "I'm the flavor vampire, I add depth to any dish!", "Some people think I'm too strong, but they just can't handle my awesomeness.", "I'm a natural immunity booster, keeping you healthy!", "I'm the secret ingredient in many delicious recipes.", "I may make your breath smell, but I'm worth it!", "I'm not just a seasoning, I'm a way of life!"],
  onion: ["I may make you cry, but it's only because I care!", "Ogres are like onions, we both have layers!", "I add depth and flavor to any dish I touch.", "I'm a staple in kitchens around the world!", "I may be pungent, but I'm also packed with nutrients!", "Caramelized, sautéed, or raw, I'm always delicious!", "I'm the onion, the myth, the legend!"],
  potato: ["I'm a real spud-muffin, nice to meet you!", "I'm versatile and delicious, what more could you want?", "Mashed, fried, or baked, I'm always a crowd-pleaser!", "I'm a staple food for many cultures around the world.", "I may have eyes, but I won't judge you for eating me!", "I'm loaded with carbs for energy and fiber for digestion!", "I'm not just a side dish, I'm the main attraction!"],
  pumpkin: ["I'm the jack-o'-lantern of the vegetable world!", "I may be associated with fall, but I'm delicious year-round.", "Pumpkin spice and everything nice, that's what I'm made of!", "I'm a superfood packed with vitamins and antioxidants!", "From pies to lattes, I'm a flavor sensation!", "I may be big, but I've got a sweet personality.", "I put the 'fun' in 'funky squash!'"],
  watermelon: ["I'm the sweet treat that can't be beat!", "I may be mostly water, but I'm still packed with nutrients!", "I'm the perfect summer snack, refreshing and delicious.", "Spit out my seeds and watch me grow!", "I'm a party favorite, loved by kids and adults alike!", "I may be heavy, but I'm worth the weight!", "I put the 'melon' in 'mellow.'"],
  radish: ["I add a spicy kick to any dish!", "I may be small, but I've got a big personality.", "I come in many colors, but I'm always a tasty treat!", "I'm a low-calorie snack that's high in flavor!", "Slice me, dice me, I'm always nice to eat!", "I'm a root vegetable that's easy to grow and even easier to love.", "I put the 'rad' in 'radish!'"],
  redbeet: ["I may stain your hands, but I'll also stain your heart!", "I'm a superfood that can't be beet!", "I'm sweet, earthy, and packed with nutrients.", "I add a beautiful color to any dish I'm in!", "From salads to smoothies, I'm a versatile veggie!", "I may be tough on the outside, but I'm tender on the inside.", "I put the 'beet' in 'unbeatable!'"],
  sunflower: ["I'm the sunshine of the garden!", "I may not produce fruit, but I produce smiles!", "I'm a symbol of happiness and positivity.", "My seeds are a delicious and nutritious snack!", "I follow the sun, always looking on the bright side!", "I may be tall, but I'm always down to earth.", "I put the 'sun' in 'stunning!'"],
  tomato: ["I may be a fruit, but I hang out with the veggies!", "I'm the star of many dishes, from sauces to salads!", "I come in many varieties, each with its own unique flavor.", "I'm packed with lycopene, a powerful antioxidant!", "I may be juicy, but I won't spill your secrets!", "From cherry to beefsteak, I'm always a tasty treat!", "I put the 'tom' in 'atom bomb of flavor!'"],
  wheat: ["I'm the staff of life, supporting civilizations for centuries!", "I may sway in the wind, but I stand tall and proud.", "I'm a versatile grain, used in bread, pasta, and more!", "I'm packed with fiber, protein, and complex carbohydrates.", "From farm to table, I'm a staple in many cultures!", "I may be golden, but I'm not just a pretty plant.", "I put the 'wheat' in 'wheatever you need, I got you!'"]
};
const Yo = B("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\"><div><img></div><div><h1></h1><p>");
const Zo = _0x113d54 => {
  const _0x454735 = _0x444448 => {
    const _0x9c4c = Vo[_0x444448.toLowerCase().replaceAll("wild ", "")];
    if (!_0x9c4c) {
      return "You caught me!";
    }
    const _0x5ce219 = Math.floor(Math.random() * _0x9c4c.length);
    return _0x9c4c[_0x5ce219];
  };
  return (() => {
    const _0x3350d9 = Yo();
    const _0x158bdf = _0x3350d9.firstChild;
    const _0x18e6cd = _0x158bdf.firstChild;
    const _0x3596e9 = _0x158bdf.nextSibling;
    const _0x39c020 = _0x3596e9.firstChild;
    const _0x226ccd = _0x39c020.nextSibling;
    de(_0x18e6cd, "draggable", false);
    g(_0x39c020, () => _0x113d54.itemName);
    g(_0x226ccd, () => _0x454735(_0x113d54.itemName));
    A(_0x39d356 => {
      const _0x1fa306 = rn.itemBox;
      const _0x7d678b = _0x113d54.itemImage;
      const _0x14ede8 = rn.infoBox;
      if (_0x1fa306 !== _0x39d356._v$) {
        f(_0x158bdf, _0x39d356._v$ = _0x1fa306);
      }
      if (_0x7d678b !== _0x39d356._v$2) {
        de(_0x18e6cd, "src", _0x39d356._v$2 = _0x7d678b);
      }
      if (_0x14ede8 !== _0x39d356._v$3) {
        f(_0x3596e9, _0x39d356._v$3 = _0x14ede8);
      }
      return _0x39d356;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x3350d9;
  })();
};
const Ko = B("<div><div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"></div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\">");
const Qo = B("<div>");
const Xo = _0x532dbd => (() => {
  const _0x335376 = Qo();
  g(_0x335376, c(Ue, {
    name: "slide-left",
    appear: true,
    get children() {
      const _0x1b1dd4 = Ko();
      const _0x18339b = _0x1b1dd4.firstChild;
      const _0x2ac1a4 = _0x18339b.firstChild;
      const _0x275112 = _0x2ac1a4.nextSibling;
      g(_0x18339b, c(Zo, {
        get itemName() {
          return "Wild " + _0x532dbd.display_name.charAt(0).toUpperCase() + _0x532dbd.display_name.slice(1);
        },
        get itemImage() {
          return _0x532dbd.image;
        }
      }), _0x2ac1a4);
      g(_0x18339b, c(xn, {}), _0x2ac1a4);
      g(_0x2ac1a4, c(Ie, {
        text: "Genetics"
      }), null);
      g(_0x2ac1a4, c(Cn, {
        get genes() {
          return _0x532dbd.genetics ?? [];
        }
      }), null);
      g(_0x275112, c(Ie, {
        text: "Quality"
      }), null);
      g(_0x275112, c(ee, {
        icon: "fa-sharp fa-solid fa-seedling",
        label: "Quality",
        get progress() {
          return _0x532dbd.quality;
        }
      }), null);
      g(_0x275112, c(ee, {
        icon: "fa-sharp fa-solid fa-seedling",
        label: "Health",
        get progress() {
          return _0x532dbd.health;
        }
      }), null);
      A(_0x91a5da => {
        const _0x52acfe = bt.outer;
        const _0x3f1577 = bt.container;
        if (_0x52acfe !== _0x91a5da._v$) {
          f(_0x1b1dd4, _0x91a5da._v$ = _0x52acfe);
        }
        if (_0x3f1577 !== _0x91a5da._v$2) {
          f(_0x18339b, _0x91a5da._v$2 = _0x3f1577);
        }
        return _0x91a5da;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x1b1dd4;
    }
  }));
  A(() => f(_0x335376, bt.App));
  return _0x335376;
})();
const Jo = "_App_q0okc_1";
const ea = "_container_q0okc_11";
const ta = "_border_container_q0okc_51";
const na = "_header_q0okc_64";
const ra = "_textBox_q0okc_91";
const ia = "_button_q0okc_149";
const ye = {
  App: Jo,
  container: ea,
  border_container: ta,
  header: na,
  textBox: ra,
  button: ia,
  "button-primary": "_button-primary_q0okc_160",
  "button-decline": "_button-decline_q0okc_170"
};
const oa = B("<div><div><div><div>Nozzle Intensity</div><div class=\"flex h-full w-full flex-row items-center justify-between gap-[2vh] px-[1vh]\"><input type=\"range\" min=\"0\" max=\"100\" step=\"1\"><div> <span>/100%</div></div><div>Watering Duration</div><div class=\"flex h-full w-full flex-row items-center justify-between gap-[1vh] px-[1vh]\"><input type=\"range\" min=\"0\" max=\"360\" step=\"1\"><div> <span>/<!> min");
const [we, on] = Tt({
  show: false
});
let It;
const aa = () => {
  const [_0x49df52, _0x3b3ed8] = b(false);
  const [_0x523028, _0x1afb1e] = b(false);
  const [_0x82c6fc, _0x417f94] = b(10);
  const [_0x17486d, _0x37794c] = b(0);
  const [_0x228110, _0x2b5767] = b(0);
  const _0x1f2f1c = 0;
  const _0x254941 = 100;
  const _0x11c726 = 360;
  const _0x1f837c = W(() => (_0x82c6fc() - _0x1f2f1c) / (_0x254941 - _0x1f2f1c) * 100 + "% 100%");
  const _0x3e73d = W(() => ((_0x523028() ? _0x17486d() : _0x228110()) - _0x1f2f1c) / (_0x11c726 - _0x1f2f1c) * 100 + "% 100%");
  const _0x5647e2 = (_0x48ae9a, _0x143a71) => {
    const _0x116be8 = Math.floor(Date.now() / 1000) - _0x48ae9a;
    return Math.max(0, _0x143a71 * 60 - _0x116be8);
  };
  _0x12f36e.register("farming-sprinkler:data", async _0xad896f => {
    on({
      ..._0xad896f
    });
    _0x417f94(_0xad896f.data?.publicData?.level ?? 0);
    _0x37794c(_0xad896f.data?.publicData?.duration ?? 0);
    _0x1afb1e(false);
    if (_0xad896f.data?.publicData?.started_at && _0xad896f.data?.publicData?.duration > 0) {
      const _0x5341eb = _0x5647e2(_0xad896f.data.publicData.started_at, _0xad896f.data.publicData.duration);
      _0x2b5767(_0x5341eb);
      _0x3b3ed8(_0x5341eb > 0);
    } else {
      _0x2b5767(0);
      _0x3b3ed8(false);
    }
  });
  const _0x7bd36a = _0x5e5cef => {
    if (_0x5e5cef.key === "Escape" && we.show) {
      on({
        show: false
      });
      _0x12f36e.execute("close");
    }
  };
  Te(async () => {
    document.addEventListener("keydown", _0x7bd36a);
  });
  xe(() => {
    if (_0x49df52() && !_0x523028()) {
      It = setInterval(_0xb9164e, 1000);
    } else {
      clearInterval(It);
    }
  });
  ce(() => {
    document.removeEventListener("keydown", _0x7bd36a);
    clearInterval(It);
  });
  const _0xb9164e = () => {
    if (_0x49df52() && !_0x523028()) {
      const _0x1715fe = _0x5647e2(we.data?.publicData?.started_at ?? 0, we.data?.publicData?.duration ?? 0);
      _0x2b5767(_0x1715fe);
    }
  };
  xe(() => {
    if (_0x49df52() && !_0x523028() && _0x228110() > 0) {
      _0xb9164e();
    }
  });
  return c(Ue, {
    name: "slide-bottom",
    get children() {
      return c(R, {
        get when() {
          return we.show && we.data;
        },
        get children() {
          const _0x5acece = oa();
          const _0x5166c5 = _0x5acece.firstChild;
          const _0x23267d = _0x5166c5.firstChild;
          const _0x666dbf = _0x23267d.firstChild;
          const _0x5bb6ef = _0x666dbf.nextSibling;
          const _0x457921 = _0x5bb6ef.firstChild;
          const _0xaafc5 = _0x457921.nextSibling;
          const _0x1da632 = _0xaafc5.firstChild;
          const _0x2294fd = _0x5bb6ef.nextSibling;
          const _0x2fe0e0 = _0x2294fd.nextSibling;
          const _0x31bd3d = _0x2fe0e0.firstChild;
          const _0x4d4b0b = _0x31bd3d.nextSibling;
          const _0x54c72d = _0x4d4b0b.firstChild;
          const _0x232329 = _0x54c72d.nextSibling;
          const _0x48758d = _0x232329.firstChild;
          const _0x2f5837 = _0x48758d.nextSibling;
          _0x2f5837.nextSibling;
          _0x457921.addEventListener("change", async _0x4f20c1 => {
            await _0x12f36e.execute("sprinkler:sliderChangeLevel", {
              id: we.data.databaseID,
              value: +_0x4f20c1.currentTarget.value
            });
          });
          _0x457921.$$input = _0x19295a => {
            _0x417f94(+_0x19295a.currentTarget.value);
          };
          g(_0xaafc5, _0x82c6fc, _0x1da632);
          _0x31bd3d.$$mouseup = async _0x563801 => {
            const _0x204529 = +_0x563801.currentTarget.value;
            await _0x12f36e.execute("sprinkler:sliderChangeDuration", {
              id: we.data.databaseID,
              value: _0x204529
            });
          };
          _0x31bd3d.$$input = _0x398ae1 => {
            _0x1afb1e(true);
            const _0x327ecf = +_0x398ae1.currentTarget.value;
            _0x37794c(_0x327ecf);
            if (_0x327ecf > 0) {
              _0x2b5767(_0x327ecf);
            }
          };
          g(_0x4d4b0b, (() => {
            const _0x27937a = W(() => _0x228110() >= 60);
            return () => _0x27937a() ? Math.floor(_0x228110() / 60) + ":" + (_0x228110() % 60).toString().padStart(2, "0") : "" + _0x228110();
          })(), _0x54c72d);
          g(_0x232329, _0x17486d, _0x2f5837);
          A(_0x5bfd2b => {
            const _0x4a7781 = ye.App;
            const _0x329813 = ye.container;
            const _0x995244 = ye.border_container;
            const _0xe2379e = ye.header;
            const _0x10f6d1 = _0x1f837c();
            const _0x34fe2a = ye.textBox;
            const _0x2b3f37 = ye.header;
            const _0x7c4fb6 = _0x3e73d();
            const _0x46a17b = ye.textBox;
            if (_0x4a7781 !== _0x5bfd2b._v$) {
              f(_0x5acece, _0x5bfd2b._v$ = _0x4a7781);
            }
            if (_0x329813 !== _0x5bfd2b._v$2) {
              f(_0x5166c5, _0x5bfd2b._v$2 = _0x329813);
            }
            if (_0x995244 !== _0x5bfd2b._v$3) {
              f(_0x23267d, _0x5bfd2b._v$3 = _0x995244);
            }
            if (_0xe2379e !== _0x5bfd2b._v$4) {
              f(_0x666dbf, _0x5bfd2b._v$4 = _0xe2379e);
            }
            if (_0x10f6d1 !== _0x5bfd2b._v$5) {
              if ((_0x5bfd2b._v$5 = _0x10f6d1) != null) {
                _0x457921.style.setProperty("background-size", _0x10f6d1);
              } else {
                _0x457921.style.removeProperty("background-size");
              }
            }
            if (_0x34fe2a !== _0x5bfd2b._v$6) {
              f(_0xaafc5, _0x5bfd2b._v$6 = _0x34fe2a);
            }
            if (_0x2b3f37 !== _0x5bfd2b._v$7) {
              f(_0x2294fd, _0x5bfd2b._v$7 = _0x2b3f37);
            }
            if (_0x7c4fb6 !== _0x5bfd2b._v$8) {
              if ((_0x5bfd2b._v$8 = _0x7c4fb6) != null) {
                _0x31bd3d.style.setProperty("background-size", _0x7c4fb6);
              } else {
                _0x31bd3d.style.removeProperty("background-size");
              }
            }
            if (_0x46a17b !== _0x5bfd2b._v$9) {
              f(_0x4d4b0b, _0x5bfd2b._v$9 = _0x46a17b);
            }
            return _0x5bfd2b;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined,
            _v$4: undefined,
            _v$5: undefined,
            _v$6: undefined,
            _v$7: undefined,
            _v$8: undefined,
            _v$9: undefined
          });
          A(() => _0x457921.value = _0x82c6fc());
          A(() => _0x31bd3d.value = _0x228110());
          return _0x5acece;
        }
      });
    }
  });
};
ve(["input", "mouseup"]);
const la = B("<div>");
const [j, We] = Tt(qo);
const [Oe, et] = b(false);
let kt;
const Re = () => {
  et(false);
  clearInterval(kt);
  We({
    show: false,
    refresh: false,
    hover: false,
    plants: [],
    grow_bed: {
      id: "",
      type: "",
      display_name: "",
      display_image: "",
      display_description: "",
      max_plants: 0,
      light_count: 0,
      light_coverage: 0,
      sprinkler_count: 0,
      sprinkler_coverage: 0,
      sprinkler_plants: []
    }
  });
  _0x12f36e.execute("close");
};
function sa() {
  const [_0x23f130, _0xd400f4] = b(0);
  const [_0x2f454b, _0x5dd840] = b(undefined);
  const [_0x2b153d, _0x18a3e6] = b(false);
  const [_0x276246, _0x56465f] = b(false);
  const [_0x196d26, _0x580cc5] = b(false);
  const _0x2fca99 = _0x56aa28 => {
    if (_0x56aa28.key === "Escape" && j.show) {
      Re();
    }
  };
  Te(async () => {
    const _0x5e3525 = async _0xb187b5 => {
      if (_0xb187b5.show === true && j.show === false) {
        const _0x494fb6 = _0xb187b5.grow_bed.id;
        kt = setInterval(async () => {
          await _0x12f36e.execute("growBed:sync", _0x494fb6);
        }, 3000);
      }
      if (_0xb187b5.show === false) {
        Re();
      }
      if (_0xb187b5.show) {
        We({
          ..._0xb187b5
        });
        We({
          show: true
        });
      }
      if (_0xb187b5.refresh && j.show) {
        We({
          ..._0xb187b5
        });
      }
      if (_0xb187b5.hover === true) {
        _0x580cc5(true);
        We({
          ..._0xb187b5
        });
      }
      if (_0xb187b5.hover === false) {
        _0x580cc5(false);
      }
    };
    _0x12f36e.register("setState", _0x5e3525);
    document.addEventListener("keydown", _0x2fca99);
    document.addEventListener("mousemove", _0x3ef796);
    document.addEventListener("contextmenu", _0x4b4b7c);
  });
  ce(() => {
    document.removeEventListener("keydown", _0x2fca99);
    document.removeEventListener("mousemove", _0x3ef796);
    document.removeEventListener("contextmenu", _0x4b4b7c);
    clearInterval(kt);
    _0x5dd840(undefined);
    _0xd400f4(0);
    _0x18a3e6(false);
    _0x56465f(false);
    _0x580cc5(false);
  });
  const _0x17cbeb = In();
  const [_0x41c3d1, _0x42357f] = b("");
  const [_0x5c6654, _0x32a8cd] = b("");
  const [_0x91165, _0x55d9df] = b("");
  const [_0x1477be, _0x576433] = b("");
  const [_0x1ebae4, _0x2b9c3e] = b(0);
  const _0x371e38 = (_0x20f80f, _0x4a0b1e, _0x20e362, _0x23e65d, _0x2e6868, _0x3a04be) => {
    if (_0x20f80f.target instanceof HTMLElement) {
      et(true);
      _0x32a8cd(_0x20e362 || "");
      _0x42357f(_0x4a0b1e || "");
      _0x55d9df(_0x23e65d || "");
      _0x576433(_0x2e6868 || "");
      _0x2b9c3e(_0x3a04be || 0);
    }
  };
  const _0x2904f5 = _0x236201 => {
    et(false);
  };
  const _0x3ef796 = _0x1a8e22 => {
    if (Oe()) {
      _0x1a8e22.preventDefault();
    }
  };
  const _0x4b4b7c = _0x183d51 => {
    if (Oe()) {
      _0x183d51.preventDefault();
      _0x2904f5();
    }
  };
  return [c(aa, {}), c(R, {
    when: true,
    get children() {
      return [c(R, {
        get when() {
          return _0x196d26();
        },
        get children() {
          return c(Xo, {
            get quality() {
              return j.hover_plant.quality;
            },
            get image() {
              return j.hover_plant.image;
            },
            get display_name() {
              return j.hover_plant.display_name;
            },
            get health() {
              return j.hover_plant.health;
            },
            get genetics() {
              return j.hover_plant.genetics;
            }
          });
        }
      }), c(R, {
        get when() {
          return j.show;
        },
        get children() {
          return [c(Yi, {}), c(Wr, {
            onDragStart: _0x371e38,
            onDragEnd: _0x2904f5,
            get dragging() {
              return Oe();
            },
            get items() {
              return j.items;
            }
          }), c(Hi, {
            get refresh() {
              return j.refresh;
            },
            get dragging() {
              return Oe();
            },
            setDragging: et,
            selectedItem: _0x2f454b,
            setSelectedItem: _0x5dd840,
            selectedItemIndex: _0x23f130,
            setSelectedItemIndex: _0xd400f4,
            plantSlot: true,
            wateringSlot: true,
            fertilizerSlot: true,
            harvestButton: true,
            gatherButton: true,
            destroyButton: true,
            get growBedId() {
              return j.grow_bed.id;
            },
            get growBedImage() {
              return j.grow_bed.display_image;
            },
            get growBedName() {
              return j.grow_bed.display_name;
            },
            get plants() {
              return j.plants;
            },
            get max_plants() {
              return j.grow_bed.max_plants;
            },
            get draggedId() {
              return _0x5c6654();
            },
            get draggedItemId() {
              return _0x91165();
            },
            get draggedItemVariant() {
              return _0x1477be();
            },
            get draggedItemSlot() {
              return _0x1ebae4();
            },
            get canGather() {
              return _0x2b153d();
            },
            get canHarvest() {
              return _0x276246();
            }
          }), c(Po, {
            get plant() {
              return _0x2f454b();
            },
            showGenetics: false,
            showGather: false,
            get key() {
              return _0x23f130();
            },
            get maxPlants() {
              return j.grow_bed.max_plants;
            },
            get growBedImage() {
              return j.grow_bed.display_image;
            },
            get growBedName() {
              return j.grow_bed.display_name;
            },
            get growBedDescription() {
              return j.grow_bed.display_description;
            },
            get growBedLights() {
              return j.grow_bed.light_count;
            },
            get growBedLightsCoverage() {
              return j.grow_bed.light_coverage;
            },
            get growBedSprinklers() {
              return j.grow_bed.sprinkler_count;
            },
            get growBedSprinklersCoverage() {
              return j.grow_bed.sprinkler_coverage;
            },
            get growBedSprinklerPlants() {
              return j.grow_bed.sprinkler_plants;
            },
            canGather: _0x2b153d,
            setCanGather: _0x18a3e6,
            canHarvest: _0x276246,
            setCanHarvest: _0x56465f,
            get refresh() {
              return j.refresh;
            }
          }), c(R, {
            get when() {
              return Oe();
            },
            get children() {
              const _0x4be89b = la();
              _0x4be89b.style.setProperty("position", "absolute");
              _0x4be89b.style.setProperty("z-index", "2000");
              _0x4be89b.style.setProperty("pointer-events", "none");
              g(_0x4be89b, c(Wo, {
                get image() {
                  return _0x41c3d1();
                },
                get itemId() {
                  return _0x91165();
                },
                get itemVariant() {
                  return _0x1477be();
                },
                get itemSlot() {
                  return _0x1ebae4();
                }
              }));
              A(_0x4e9f47 => {
                const _0x5b30cb = _0x17cbeb.x - 50 + "px";
                const _0x5b6fd2 = _0x17cbeb.y - 50 + "px";
                if (_0x5b30cb !== _0x4e9f47._v$) {
                  if ((_0x4e9f47._v$ = _0x5b30cb) != null) {
                    _0x4be89b.style.setProperty("left", _0x5b30cb);
                  } else {
                    _0x4be89b.style.removeProperty("left");
                  }
                }
                if (_0x5b6fd2 !== _0x4e9f47._v$2) {
                  if ((_0x4e9f47._v$2 = _0x5b6fd2) != null) {
                    _0x4be89b.style.setProperty("top", _0x5b6fd2);
                  } else {
                    _0x4be89b.style.removeProperty("top");
                  }
                }
                return _0x4e9f47;
              }, {
                _v$: undefined,
                _v$2: undefined
              });
              return _0x4be89b;
            }
          })];
        }
      })];
    }
  })];
}
jn(() => c(sa, {}), document.getElementById("root"));