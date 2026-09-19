import './style.css';
import { N as _0x29c78f } from "./v-packages.js";
(function () {
  const _0x5843f7 = document.createElement("link").relList;
  if (_0x5843f7 && _0x5843f7.supports && _0x5843f7.supports("modulepreload")) {
    return;
  }
  for (const _0x46a1d5 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x4e417e(_0x46a1d5);
  }
  new MutationObserver(_0x4bb024 => {
    for (const _0x387064 of _0x4bb024) {
      if (_0x387064.type === "childList") {
        for (const _0x503444 of _0x387064.addedNodes) {
          if (_0x503444.tagName === "LINK" && _0x503444.rel === "modulepreload") {
            _0x4e417e(_0x503444);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x3139c3(_0x10d378) {
    const _0xfc9766 = {};
    if (_0x10d378.integrity) {
      _0xfc9766.integrity = _0x10d378.integrity;
    }
    if (_0x10d378.referrerPolicy) {
      _0xfc9766.referrerPolicy = _0x10d378.referrerPolicy;
    }
    if (_0x10d378.crossOrigin === "use-credentials") {
      _0xfc9766.credentials = "include";
    } else if (_0x10d378.crossOrigin === "anonymous") {
      _0xfc9766.credentials = "omit";
    } else {
      _0xfc9766.credentials = "same-origin";
    }
    return _0xfc9766;
  }
  function _0x4e417e(_0x8c764f) {
    if (_0x8c764f.ep) {
      return;
    }
    _0x8c764f.ep = true;
    const _0x407ef3 = _0x3139c3(_0x8c764f);
    fetch(_0x8c764f.href, _0x407ef3);
  }
})();
const vt = (_0x1e4cc4, _0x309fee) => _0x1e4cc4 === _0x309fee;
const X = Symbol("solid-proxy");
const we = Symbol("solid-track");
const ve = {
  equals: vt
};
let Ve = nt;
const V = 1;
const _e = 2;
const He = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var S = null;
let be = null;
let p = null;
let T = null;
let W = null;
let ye = 0;
const [_t, Ai] = H(false);
function ae(_0x138f28, _0xf0e9b4) {
  const _0xfe7bd8 = p;
  const _0x11970c = S;
  const _0x3e7a70 = _0x138f28.length === 0;
  const _0x5d33d1 = _0x3e7a70 ? He : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0xf0e9b4 === undefined ? _0x11970c : _0xf0e9b4
  };
  const _0x18a99d = _0x3e7a70 ? _0x138f28 : () => _0x138f28(() => q(() => xe(_0x5d33d1)));
  S = _0x5d33d1;
  p = null;
  try {
    return Y(_0x18a99d, true);
  } finally {
    p = _0xfe7bd8;
    S = _0x11970c;
  }
}
function H(_0x266815, _0x11633a) {
  _0x11633a = _0x11633a ? Object.assign({}, ve, _0x11633a) : ve;
  const _0x379598 = {
    value: _0x266815,
    observers: null,
    observerSlots: null,
    comparator: _0x11633a.equals || undefined
  };
  const _0x3a8364 = _0x797e6f => {
    if (typeof _0x797e6f == "function") {
      _0x797e6f = _0x797e6f(_0x379598.value);
    }
    return tt(_0x379598, _0x797e6f);
  };
  return [et.bind(_0x379598), _0x3a8364];
}
function ht(_0x212839, _0xe827ba, _0x30b7cc) {
  const _0xf4ad7d = Ce(_0x212839, _0xe827ba, true, V);
  ie(_0xf4ad7d);
}
function A(_0x15199f, _0x4517f5, _0x564a76) {
  const _0x2448e8 = Ce(_0x15199f, _0x4517f5, false, V);
  ie(_0x2448e8);
}
function Ze(_0x3249ab, _0x365972, _0x211abb) {
  Ve = bt;
  const _0x45ede1 = Ce(_0x3249ab, _0x365972, false, V);
  if (!_0x211abb || !_0x211abb.render) {
    _0x45ede1.user = true;
  }
  if (W) {
    W.push(_0x45ede1);
  } else {
    ie(_0x45ede1);
  }
}
function F(_0x27db0c, _0x522a0a, _0x1c1991) {
  _0x1c1991 = _0x1c1991 ? Object.assign({}, ve, _0x1c1991) : ve;
  const _0x5d0a85 = Ce(_0x27db0c, _0x522a0a, true, 0);
  _0x5d0a85.observers = null;
  _0x5d0a85.observerSlots = null;
  _0x5d0a85.comparator = _0x1c1991.equals || undefined;
  ie(_0x5d0a85);
  return et.bind(_0x5d0a85);
}
function Le(_0x57682b) {
  return Y(_0x57682b, false);
}
function q(_0x525401) {
  if (p === null) {
    return _0x525401();
  }
  const _0x4245f0 = p;
  p = null;
  try {
    return _0x525401();
  } finally {
    p = _0x4245f0;
  }
}
function Xe(_0x3a505d) {
  Ze(() => q(_0x3a505d));
}
function Ye(_0x3491b1) {
  if (S !== null) {
    if (S.cleanups === null) {
      S.cleanups = [_0x3491b1];
    } else {
      S.cleanups.push(_0x3491b1);
    }
  }
  return _0x3491b1;
}
function ze() {
  return p;
}
function gt(_0x142f5c) {
  const _0xe59c75 = p;
  const _0xabea3c = S;
  return Promise.resolve().then(() => {
    p = _0xe59c75;
    S = _0xabea3c;
    let _0x5054bd;
    Y(_0x142f5c, false);
    p = S = null;
    if (_0x5054bd) {
      return _0x5054bd.done;
    } else {
      return undefined;
    }
  });
}
function $t() {
  return [_t, gt];
}
function mt(_0x33de28, _0x3cdbd3) {
  const _0xaf1204 = Symbol("context");
  return {
    id: _0xaf1204,
    Provider: wt(_0xaf1204),
    defaultValue: _0x33de28
  };
}
function yt(_0x43fae8) {
  let _0x35949b;
  if ((_0x35949b = st(S, _0x43fae8.id)) !== undefined) {
    return _0x35949b;
  } else {
    return _0x43fae8.defaultValue;
  }
}
function Je(_0x32ef47) {
  const _0x445bb3 = F(_0x32ef47);
  const _0x319d30 = F(() => pe(_0x445bb3()));
  _0x319d30.toArray = () => {
    const _0x176cb6 = _0x319d30();
    if (Array.isArray(_0x176cb6)) {
      return _0x176cb6;
    } else if (_0x176cb6 != null) {
      return [_0x176cb6];
    } else {
      return [];
    }
  };
  return _0x319d30;
}
function et() {
  if (this.sources && this.state) {
    if (this.state === V) {
      ie(this);
    } else {
      const _0x3e5797 = T;
      T = null;
      Y(() => ge(this), false);
      T = _0x3e5797;
    }
  }
  if (p) {
    const _0x25686f = this.observers ? this.observers.length : 0;
    if (p.sources) {
      p.sources.push(this);
      p.sourceSlots.push(_0x25686f);
    } else {
      p.sources = [this];
      p.sourceSlots = [_0x25686f];
    }
    if (this.observers) {
      this.observers.push(p);
      this.observerSlots.push(p.sources.length - 1);
    } else {
      this.observers = [p];
      this.observerSlots = [p.sources.length - 1];
    }
  }
  return this.value;
}
function tt(_0x29d687, _0x200bc7, _0x39e02d) {
  let _0x140d9b = _0x29d687.value;
  if (!_0x29d687.comparator || !_0x29d687.comparator(_0x140d9b, _0x200bc7)) {
    _0x29d687.value = _0x200bc7;
    if (_0x29d687.observers && _0x29d687.observers.length) {
      Y(() => {
        for (let _0xa7f591 = 0; _0xa7f591 < _0x29d687.observers.length; _0xa7f591 += 1) {
          const _0x4ea164 = _0x29d687.observers[_0xa7f591];
          const _0x52d7d2 = be && be.running;
          if (_0x52d7d2) {
            be.disposed.has(_0x4ea164);
          }
          if (_0x52d7d2 ? !_0x4ea164.tState : !_0x4ea164.state) {
            if (_0x4ea164.pure) {
              T.push(_0x4ea164);
            } else {
              W.push(_0x4ea164);
            }
            if (_0x4ea164.observers) {
              it(_0x4ea164);
            }
          }
          if (!_0x52d7d2) {
            _0x4ea164.state = V;
          }
        }
        if (T.length > 1000000) {
          T = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x200bc7;
}
function ie(_0x433510) {
  if (!_0x433510.fn) {
    return;
  }
  xe(_0x433510);
  const _0x369286 = S;
  const _0x3ff450 = p;
  const _0x5e3a3e = ye;
  p = S = _0x433510;
  Ct(_0x433510, _0x433510.value, _0x5e3a3e);
  p = _0x3ff450;
  S = _0x369286;
}
function Ct(_0xbbd226, _0x394ac8, _0x85fd68) {
  let _0x37e5f1;
  try {
    _0x37e5f1 = _0xbbd226.fn(_0x394ac8);
  } catch (_0x1f4fdb) {
    if (_0xbbd226.pure) {
      _0xbbd226.state = V;
      if (_0xbbd226.owned) {
        _0xbbd226.owned.forEach(xe);
      }
      _0xbbd226.owned = null;
    }
    _0xbbd226.updatedAt = _0x85fd68 + 1;
    return rt(_0x1f4fdb);
  }
  if (!_0xbbd226.updatedAt || _0xbbd226.updatedAt <= _0x85fd68) {
    if (_0xbbd226.updatedAt != null && "observers" in _0xbbd226) {
      tt(_0xbbd226, _0x37e5f1);
    } else {
      _0xbbd226.value = _0x37e5f1;
    }
    _0xbbd226.updatedAt = _0x85fd68;
  }
}
function Ce(_0x4d10d0, _0x55d079, _0x1edb1d, _0x28a385 = V, _0x14a7cb) {
  const _0x2db39f = {
    fn: _0x4d10d0,
    state: _0x28a385,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x55d079,
    owner: S,
    context: null,
    pure: _0x1edb1d
  };
  if (S !== null) {
    if (S !== He) {
      if (S.owned) {
        S.owned.push(_0x2db39f);
      } else {
        S.owned = [_0x2db39f];
      }
    }
  }
  return _0x2db39f;
}
function he(_0x45c971) {
  if (_0x45c971.state === 0) {
    return;
  }
  if (_0x45c971.state === _e) {
    return ge(_0x45c971);
  }
  if (_0x45c971.suspense && q(_0x45c971.suspense.inFallback)) {
    return _0x45c971.suspense.effects.push(_0x45c971);
  }
  const _0x2526b0 = [_0x45c971];
  while ((_0x45c971 = _0x45c971.owner) && (!_0x45c971.updatedAt || _0x45c971.updatedAt < ye)) {
    if (_0x45c971.state) {
      _0x2526b0.push(_0x45c971);
    }
  }
  for (let _0xf6aef6 = _0x2526b0.length - 1; _0xf6aef6 >= 0; _0xf6aef6--) {
    _0x45c971 = _0x2526b0[_0xf6aef6];
    if (_0x45c971.state === V) {
      ie(_0x45c971);
    } else if (_0x45c971.state === _e) {
      const _0x226e93 = T;
      T = null;
      Y(() => ge(_0x45c971, _0x2526b0[0]), false);
      T = _0x226e93;
    }
  }
}
function Y(_0x14169, _0x211a99) {
  if (T) {
    return _0x14169();
  }
  let _0x1a4754 = false;
  if (!_0x211a99) {
    T = [];
  }
  if (W) {
    _0x1a4754 = true;
  } else {
    W = [];
  }
  ye++;
  try {
    const _0x2b4759 = _0x14169();
    xt(_0x1a4754);
    return _0x2b4759;
  } catch (_0x10e94c) {
    if (!_0x1a4754) {
      W = null;
    }
    T = null;
    rt(_0x10e94c);
  }
}
function xt(_0x4f6f9a) {
  if (T) {
    nt(T);
    T = null;
  }
  if (_0x4f6f9a) {
    return;
  }
  const _0x5637b4 = W;
  W = null;
  if (_0x5637b4.length) {
    Y(() => Ve(_0x5637b4), false);
  }
}
function nt(_0x31f5a2) {
  for (let _0x41a3fa = 0; _0x41a3fa < _0x31f5a2.length; _0x41a3fa++) {
    he(_0x31f5a2[_0x41a3fa]);
  }
}
function bt(_0x2dcb01) {
  let _0x49686e;
  let _0x17bd98 = 0;
  for (_0x49686e = 0; _0x49686e < _0x2dcb01.length; _0x49686e++) {
    const _0x4434d0 = _0x2dcb01[_0x49686e];
    if (_0x4434d0.user) {
      _0x2dcb01[_0x17bd98++] = _0x4434d0;
    } else {
      he(_0x4434d0);
    }
  }
  for (_0x49686e = 0; _0x49686e < _0x17bd98; _0x49686e++) {
    he(_0x2dcb01[_0x49686e]);
  }
}
function ge(_0x4995d5, _0x478a9e) {
  _0x4995d5.state = 0;
  for (let _0x93dd95 = 0; _0x93dd95 < _0x4995d5.sources.length; _0x93dd95 += 1) {
    const _0x55dc99 = _0x4995d5.sources[_0x93dd95];
    if (_0x55dc99.sources) {
      const _0xa2fe4 = _0x55dc99.state;
      if (_0xa2fe4 === V) {
        if (_0x55dc99 !== _0x478a9e && (!_0x55dc99.updatedAt || _0x55dc99.updatedAt < ye)) {
          he(_0x55dc99);
        }
      } else if (_0xa2fe4 === _e) {
        ge(_0x55dc99, _0x478a9e);
      }
    }
  }
}
function it(_0x5fe4a2) {
  for (let _0x16111a = 0; _0x16111a < _0x5fe4a2.observers.length; _0x16111a += 1) {
    const _0x5a581c = _0x5fe4a2.observers[_0x16111a];
    if (!_0x5a581c.state) {
      _0x5a581c.state = _e;
      if (_0x5a581c.pure) {
        T.push(_0x5a581c);
      } else {
        W.push(_0x5a581c);
      }
      if (_0x5a581c.observers) {
        it(_0x5a581c);
      }
    }
  }
}
function xe(_0x329cec) {
  let _0x8f3b9;
  if (_0x329cec.sources) {
    while (_0x329cec.sources.length) {
      const _0x144144 = _0x329cec.sources.pop();
      const _0x20b7cc = _0x329cec.sourceSlots.pop();
      const _0x54e497 = _0x144144.observers;
      if (_0x54e497 && _0x54e497.length) {
        const _0x580b8b = _0x54e497.pop();
        const _0x15479a = _0x144144.observerSlots.pop();
        if (_0x20b7cc < _0x54e497.length) {
          _0x580b8b.sourceSlots[_0x15479a] = _0x20b7cc;
          _0x54e497[_0x20b7cc] = _0x580b8b;
          _0x144144.observerSlots[_0x20b7cc] = _0x15479a;
        }
      }
    }
  }
  if (_0x329cec.owned) {
    for (_0x8f3b9 = _0x329cec.owned.length - 1; _0x8f3b9 >= 0; _0x8f3b9--) {
      xe(_0x329cec.owned[_0x8f3b9]);
    }
    _0x329cec.owned = null;
  }
  if (_0x329cec.cleanups) {
    for (_0x8f3b9 = _0x329cec.cleanups.length - 1; _0x8f3b9 >= 0; _0x8f3b9--) {
      _0x329cec.cleanups[_0x8f3b9]();
    }
    _0x329cec.cleanups = null;
  }
  _0x329cec.state = 0;
  _0x329cec.context = null;
}
function rt(_0x5c6aff) {
  throw _0x5c6aff;
}
function st(_0x3a700d, _0x580f61) {
  if (_0x3a700d) {
    if (_0x3a700d.context && _0x3a700d.context[_0x580f61] !== undefined) {
      return _0x3a700d.context[_0x580f61];
    } else {
      return st(_0x3a700d.owner, _0x580f61);
    }
  } else {
    return undefined;
  }
}
function pe(_0x44e372) {
  if (typeof _0x44e372 == "function" && !_0x44e372.length) {
    return pe(_0x44e372());
  }
  if (Array.isArray(_0x44e372)) {
    const _0x4457a3 = [];
    for (let _0x2cf8cd = 0; _0x2cf8cd < _0x44e372.length; _0x2cf8cd++) {
      const _0x2d7abb = pe(_0x44e372[_0x2cf8cd]);
      if (Array.isArray(_0x2d7abb)) {
        _0x4457a3.push.apply(_0x4457a3, _0x2d7abb);
      } else {
        _0x4457a3.push(_0x2d7abb);
      }
    }
    return _0x4457a3;
  }
  return _0x44e372;
}
function wt(_0x493d87, _0x35d09c) {
  return function (_0x1e4356) {
    let _0x2f4c18;
    A(() => _0x2f4c18 = q(() => {
      S.context = {
        [_0x493d87]: _0x1e4356.value
      };
      return Je(() => _0x1e4356.children);
    }), undefined);
    return _0x2f4c18;
  };
}
const Lt = Symbol("fallback");
function qe(_0x272324) {
  for (let _0x4317f3 = 0; _0x4317f3 < _0x272324.length; _0x4317f3++) {
    _0x272324[_0x4317f3]();
  }
}
function pt(_0x29c2dd, _0x2580b4, _0x457e03 = {}) {
  let _0x362da8 = [];
  let _0x23cd8a = [];
  let _0x13b796 = [];
  let _0x4bc268 = 0;
  let _0x5f509b = _0x2580b4.length > 1 ? [] : null;
  Ye(() => qe(_0x13b796));
  return () => {
    let _0xaa205c = _0x29c2dd() || [];
    let _0x4a392c;
    let _0x2ca9bf;
    _0xaa205c[we];
    return q(() => {
      let _0x528e7d = _0xaa205c.length;
      let _0x357a56;
      let _0x4fa4cc;
      let _0x13f98a;
      let _0x365782;
      let _0x1293a3;
      let _0x540b9a;
      let _0x31dc21;
      let _0x4539ae;
      let _0x51b11a;
      if (_0x528e7d === 0) {
        if (_0x4bc268 !== 0) {
          qe(_0x13b796);
          _0x13b796 = [];
          _0x362da8 = [];
          _0x23cd8a = [];
          _0x4bc268 = 0;
          _0x5f509b &&= [];
        }
        if (_0x457e03.fallback) {
          _0x362da8 = [Lt];
          _0x23cd8a[0] = ae(_0x5a4b11 => {
            _0x13b796[0] = _0x5a4b11;
            return _0x457e03.fallback();
          });
          _0x4bc268 = 1;
        }
      } else if (_0x4bc268 === 0) {
        _0x23cd8a = new Array(_0x528e7d);
        _0x2ca9bf = 0;
        for (; _0x2ca9bf < _0x528e7d; _0x2ca9bf++) {
          _0x362da8[_0x2ca9bf] = _0xaa205c[_0x2ca9bf];
          _0x23cd8a[_0x2ca9bf] = ae(_0x24f2fb);
        }
        _0x4bc268 = _0x528e7d;
      } else {
        _0x13f98a = new Array(_0x528e7d);
        _0x365782 = new Array(_0x528e7d);
        if (_0x5f509b) {
          _0x1293a3 = new Array(_0x528e7d);
        }
        _0x540b9a = 0;
        _0x31dc21 = Math.min(_0x4bc268, _0x528e7d);
        for (; _0x540b9a < _0x31dc21 && _0x362da8[_0x540b9a] === _0xaa205c[_0x540b9a]; _0x540b9a++);
        _0x31dc21 = _0x4bc268 - 1;
        _0x4539ae = _0x528e7d - 1;
        for (; _0x31dc21 >= _0x540b9a && _0x4539ae >= _0x540b9a && _0x362da8[_0x31dc21] === _0xaa205c[_0x4539ae]; _0x31dc21--, _0x4539ae--) {
          _0x13f98a[_0x4539ae] = _0x23cd8a[_0x31dc21];
          _0x365782[_0x4539ae] = _0x13b796[_0x31dc21];
          if (_0x5f509b) {
            _0x1293a3[_0x4539ae] = _0x5f509b[_0x31dc21];
          }
        }
        _0x357a56 = new Map();
        _0x4fa4cc = new Array(_0x4539ae + 1);
        _0x2ca9bf = _0x4539ae;
        for (; _0x2ca9bf >= _0x540b9a; _0x2ca9bf--) {
          _0x51b11a = _0xaa205c[_0x2ca9bf];
          _0x4a392c = _0x357a56.get(_0x51b11a);
          _0x4fa4cc[_0x2ca9bf] = _0x4a392c === undefined ? -1 : _0x4a392c;
          _0x357a56.set(_0x51b11a, _0x2ca9bf);
        }
        for (_0x4a392c = _0x540b9a; _0x4a392c <= _0x31dc21; _0x4a392c++) {
          _0x51b11a = _0x362da8[_0x4a392c];
          _0x2ca9bf = _0x357a56.get(_0x51b11a);
          if (_0x2ca9bf !== undefined && _0x2ca9bf !== -1) {
            _0x13f98a[_0x2ca9bf] = _0x23cd8a[_0x4a392c];
            _0x365782[_0x2ca9bf] = _0x13b796[_0x4a392c];
            if (_0x5f509b) {
              _0x1293a3[_0x2ca9bf] = _0x5f509b[_0x4a392c];
            }
            _0x2ca9bf = _0x4fa4cc[_0x2ca9bf];
            _0x357a56.set(_0x51b11a, _0x2ca9bf);
          } else {
            _0x13b796[_0x4a392c]();
          }
        }
        for (_0x2ca9bf = _0x540b9a; _0x2ca9bf < _0x528e7d; _0x2ca9bf++) {
          if (_0x2ca9bf in _0x13f98a) {
            _0x23cd8a[_0x2ca9bf] = _0x13f98a[_0x2ca9bf];
            _0x13b796[_0x2ca9bf] = _0x365782[_0x2ca9bf];
            if (_0x5f509b) {
              _0x5f509b[_0x2ca9bf] = _0x1293a3[_0x2ca9bf];
              _0x5f509b[_0x2ca9bf](_0x2ca9bf);
            }
          } else {
            _0x23cd8a[_0x2ca9bf] = ae(_0x24f2fb);
          }
        }
        _0x23cd8a = _0x23cd8a.slice(0, _0x4bc268 = _0x528e7d);
        _0x362da8 = _0xaa205c.slice(0);
      }
      return _0x23cd8a;
    });
    function _0x24f2fb(_0x5f7c7) {
      _0x13b796[_0x2ca9bf] = _0x5f7c7;
      if (_0x5f509b) {
        const [_0x500db3, _0x41001d] = H(_0x2ca9bf);
        _0x5f509b[_0x2ca9bf] = _0x41001d;
        return _0x2580b4(_0xaa205c[_0x2ca9bf], _0x500db3);
      }
      return _0x2580b4(_0xaa205c[_0x2ca9bf]);
    }
  };
}
function w(_0x392281, _0x2843d9) {
  return q(() => _0x392281(_0x2843d9 || {}));
}
const ot = _0x4c4d6f => "Stale read from <" + _0x4c4d6f + ">.";
function te(_0x332522) {
  const _0x3c7d5c = "fallback" in _0x332522 && {
    fallback: () => _0x332522.fallback
  };
  return F(pt(() => _0x332522.each, _0x332522.children, _0x3c7d5c || undefined));
}
function K(_0x49b35f) {
  const _0x21a4d5 = _0x49b35f.keyed;
  const _0x13964d = F(() => _0x49b35f.when, undefined, {
    equals: (_0x23f52c, _0x2cb999) => _0x21a4d5 ? _0x23f52c === _0x2cb999 : !_0x23f52c == !_0x2cb999
  });
  return F(() => {
    const _0x584e6d = _0x13964d();
    if (_0x584e6d) {
      const _0x43f2ae = _0x49b35f.children;
      if (typeof _0x43f2ae == "function" && _0x43f2ae.length > 0) {
        return q(() => _0x43f2ae(_0x21a4d5 ? _0x584e6d : () => {
          if (!q(_0x13964d)) {
            throw ot("Show");
          }
          return _0x49b35f.when;
        }));
      } else {
        return _0x43f2ae;
      }
    }
    return _0x49b35f.fallback;
  }, undefined, undefined);
}
function At(_0x1952fa) {
  let _0x2a5b4e = false;
  const _0x317680 = (_0x312461, _0x3c6fec) => _0x312461[0] === _0x3c6fec[0] && (_0x2a5b4e ? _0x312461[1] === _0x3c6fec[1] : !_0x312461[1] == !_0x3c6fec[1]) && _0x312461[2] === _0x3c6fec[2];
  const _0xcbaa22 = Je(() => _0x1952fa.children);
  const _0x27a8aa = F(() => {
    let _0x8af67e = _0xcbaa22();
    if (!Array.isArray(_0x8af67e)) {
      _0x8af67e = [_0x8af67e];
    }
    for (let _0x1546ea = 0; _0x1546ea < _0x8af67e.length; _0x1546ea++) {
      const _0x412cdc = _0x8af67e[_0x1546ea].when;
      if (_0x412cdc) {
        _0x2a5b4e = !!_0x8af67e[_0x1546ea].keyed;
        return [_0x1546ea, _0x412cdc, _0x8af67e[_0x1546ea]];
      }
    }
    return [-1];
  }, undefined, {
    equals: _0x317680
  });
  return F(() => {
    const [_0xf7fc25, _0x3677cf, _0x11ed1f] = _0x27a8aa();
    if (_0xf7fc25 < 0) {
      return _0x1952fa.fallback;
    }
    const _0x4d8336 = _0x11ed1f.children;
    if (typeof _0x4d8336 == "function" && _0x4d8336.length > 0) {
      return q(() => _0x4d8336(_0x2a5b4e ? _0x3677cf : () => {
        if (q(_0x27a8aa)[0] !== _0xf7fc25) {
          throw ot("Match");
        }
        return _0x11ed1f.when;
      }));
    } else {
      return _0x4d8336;
    }
  }, undefined, undefined);
}
function De(_0x3b0710) {
  return _0x3b0710;
}
function St(_0x13a5a1, _0x3dbfaa, _0xee8ff9) {
  let _0x3c3d03 = _0xee8ff9.length;
  let _0x15c017 = _0x3dbfaa.length;
  let _0x530408 = _0x3c3d03;
  let _0x41a00a = 0;
  let _0x2053f7 = 0;
  let _0x4589c2 = _0x3dbfaa[_0x15c017 - 1].nextSibling;
  let _0x99625a = null;
  while (_0x41a00a < _0x15c017 || _0x2053f7 < _0x530408) {
    if (_0x3dbfaa[_0x41a00a] === _0xee8ff9[_0x2053f7]) {
      _0x41a00a++;
      _0x2053f7++;
      continue;
    }
    while (_0x3dbfaa[_0x15c017 - 1] === _0xee8ff9[_0x530408 - 1]) {
      _0x15c017--;
      _0x530408--;
    }
    if (_0x15c017 === _0x41a00a) {
      const _0x2b2660 = _0x530408 < _0x3c3d03 ? _0x2053f7 ? _0xee8ff9[_0x2053f7 - 1].nextSibling : _0xee8ff9[_0x530408 - _0x2053f7] : _0x4589c2;
      while (_0x2053f7 < _0x530408) {
        _0x13a5a1.insertBefore(_0xee8ff9[_0x2053f7++], _0x2b2660);
      }
    } else if (_0x530408 === _0x2053f7) {
      while (_0x41a00a < _0x15c017) {
        if (!_0x99625a || !_0x99625a.has(_0x3dbfaa[_0x41a00a])) {
          _0x3dbfaa[_0x41a00a].remove();
        }
        _0x41a00a++;
      }
    } else if (_0x3dbfaa[_0x41a00a] === _0xee8ff9[_0x530408 - 1] && _0xee8ff9[_0x2053f7] === _0x3dbfaa[_0x15c017 - 1]) {
      const _0x1a5f30 = _0x3dbfaa[--_0x15c017].nextSibling;
      _0x13a5a1.insertBefore(_0xee8ff9[_0x2053f7++], _0x3dbfaa[_0x41a00a++].nextSibling);
      _0x13a5a1.insertBefore(_0xee8ff9[--_0x530408], _0x1a5f30);
      _0x3dbfaa[_0x15c017] = _0xee8ff9[_0x530408];
    } else {
      if (!_0x99625a) {
        _0x99625a = new Map();
        let _0x5c483b = _0x2053f7;
        while (_0x5c483b < _0x530408) {
          _0x99625a.set(_0xee8ff9[_0x5c483b], _0x5c483b++);
        }
      }
      const _0x44c084 = _0x99625a.get(_0x3dbfaa[_0x41a00a]);
      if (_0x44c084 != null) {
        if (_0x2053f7 < _0x44c084 && _0x44c084 < _0x530408) {
          let _0x41432e = _0x41a00a;
          let _0x1f40fc = 1;
          let _0x978627;
          while (++_0x41432e < _0x15c017 && _0x41432e < _0x530408 && (_0x978627 = _0x99625a.get(_0x3dbfaa[_0x41432e])) != null && _0x978627 === _0x44c084 + _0x1f40fc) {
            _0x1f40fc++;
          }
          if (_0x1f40fc > _0x44c084 - _0x2053f7) {
            const _0x3fa851 = _0x3dbfaa[_0x41a00a];
            while (_0x2053f7 < _0x44c084) {
              _0x13a5a1.insertBefore(_0xee8ff9[_0x2053f7++], _0x3fa851);
            }
          } else {
            _0x13a5a1.replaceChild(_0xee8ff9[_0x2053f7++], _0x3dbfaa[_0x41a00a++]);
          }
        } else {
          _0x41a00a++;
        }
      } else {
        _0x3dbfaa[_0x41a00a++].remove();
      }
    }
  }
}
const je = "_$DX_DELEGATE";
function It(_0x11e45d, _0x189ba8, _0xf45142, _0x35abed = {}) {
  let _0x2bb0e0;
  ae(_0x2e87ef => {
    _0x2bb0e0 = _0x2e87ef;
    if (_0x189ba8 === document) {
      _0x11e45d();
    } else {
      b(_0x189ba8, _0x11e45d(), _0x189ba8.firstChild ? null : undefined, _0xf45142);
    }
  }, _0x35abed.owner);
  return () => {
    _0x2bb0e0();
    _0x189ba8.textContent = "";
  };
}
function E(_0xdc94a9, _0x3811ee, _0x4098c9) {
  let _0x4ed59e;
  const _0x3a4b3f = () => {
    const _0x13d776 = document.createElement("template");
    _0x13d776.innerHTML = _0xdc94a9;
    if (_0x4098c9) {
      return _0x13d776.content.firstChild.firstChild;
    } else {
      return _0x13d776.content.firstChild;
    }
  };
  const _0x19af38 = _0x3811ee ? () => q(() => document.importNode(_0x4ed59e ||= _0x3a4b3f(), true)) : () => (_0x4ed59e ||= _0x3a4b3f()).cloneNode(true);
  _0x19af38.cloneNode = _0x19af38;
  return _0x19af38;
}
function fe(_0x188260, _0x25a67c = window.document) {
  const _0x74dc41 = _0x25a67c[je] ||= new Set();
  for (let _0x36ee51 = 0, _0x24dd1d = _0x188260.length; _0x36ee51 < _0x24dd1d; _0x36ee51++) {
    const _0x5b0ff4 = _0x188260[_0x36ee51];
    if (!_0x74dc41.has(_0x5b0ff4)) {
      _0x74dc41.add(_0x5b0ff4);
      _0x25a67c.addEventListener(_0x5b0ff4, kt);
    }
  }
}
function Ae(_0x5b6717, _0x56dcfe, _0x46d294) {
  if (_0x46d294 == null) {
    _0x5b6717.removeAttribute(_0x56dcfe);
  } else {
    _0x5b6717.setAttribute(_0x56dcfe, _0x46d294);
  }
}
function g(_0x23c76c, _0x11ed2d) {
  if (_0x11ed2d == null) {
    _0x23c76c.removeAttribute("class");
  } else {
    _0x23c76c.className = _0x11ed2d;
  }
}
function $e(_0x3a953d, _0x543b6c, _0x6438e0 = {}) {
  const _0x25b940 = Object.keys(_0x543b6c || {});
  const _0x4b4dd2 = Object.keys(_0x6438e0);
  let _0x48d209;
  let _0x35d6b1;
  _0x48d209 = 0;
  _0x35d6b1 = _0x4b4dd2.length;
  for (; _0x48d209 < _0x35d6b1; _0x48d209++) {
    const _0x274e17 = _0x4b4dd2[_0x48d209];
    if (!!_0x274e17 && _0x274e17 !== "undefined" && !_0x543b6c[_0x274e17]) {
      Ue(_0x3a953d, _0x274e17, false);
      delete _0x6438e0[_0x274e17];
    }
  }
  _0x48d209 = 0;
  _0x35d6b1 = _0x25b940.length;
  for (; _0x48d209 < _0x35d6b1; _0x48d209++) {
    const _0x520cae = _0x25b940[_0x48d209];
    const _0x1820f4 = !!_0x543b6c[_0x520cae];
    if (!!_0x520cae && _0x520cae !== "undefined" && _0x6438e0[_0x520cae] !== _0x1820f4 && !!_0x1820f4) {
      Ue(_0x3a953d, _0x520cae, true);
      _0x6438e0[_0x520cae] = _0x1820f4;
    }
  }
  return _0x6438e0;
}
function b(_0x52a3c7, _0x5a3e62, _0x3562f4, _0x15f75c) {
  if (_0x3562f4 !== undefined && !_0x15f75c) {
    _0x15f75c = [];
  }
  if (typeof _0x5a3e62 != "function") {
    return me(_0x52a3c7, _0x5a3e62, _0x15f75c, _0x3562f4);
  }
  A(_0x57fa15 => me(_0x52a3c7, _0x5a3e62(), _0x57fa15, _0x3562f4), _0x15f75c);
}
function Ue(_0x18a2b5, _0x22c11b, _0x4f2af5) {
  const _0x43c55d = _0x22c11b.trim().split(/\s+/);
  for (let _0x2bb449 = 0, _0x232951 = _0x43c55d.length; _0x2bb449 < _0x232951; _0x2bb449++) {
    _0x18a2b5.classList.toggle(_0x43c55d[_0x2bb449], _0x4f2af5);
  }
}
function kt(_0x83bacd) {
  const _0x337106 = "$$" + _0x83bacd.type;
  let _0x604e30 = _0x83bacd.composedPath && _0x83bacd.composedPath()[0] || _0x83bacd.target;
  if (_0x83bacd.target !== _0x604e30) {
    Object.defineProperty(_0x83bacd, "target", {
      configurable: true,
      value: _0x604e30
    });
  }
  Object.defineProperty(_0x83bacd, "currentTarget", {
    configurable: true,
    get() {
      return _0x604e30 || document;
    }
  });
  while (_0x604e30) {
    const _0x493a67 = _0x604e30[_0x337106];
    if (_0x493a67 && !_0x604e30.disabled) {
      const _0x3df36b = _0x604e30[_0x337106 + "Data"];
      if (_0x3df36b !== undefined) {
        _0x493a67.call(_0x604e30, _0x3df36b, _0x83bacd);
      } else {
        _0x493a67.call(_0x604e30, _0x83bacd);
      }
      if (_0x83bacd.cancelBubble) {
        return;
      }
    }
    _0x604e30 = _0x604e30._$host || _0x604e30.parentNode || _0x604e30.host;
  }
}
function me(_0x844da8, _0x28cdf5, _0x3aa771, _0x18b8be, _0x3b9ee1) {
  while (typeof _0x3aa771 == "function") {
    _0x3aa771 = _0x3aa771();
  }
  if (_0x28cdf5 === _0x3aa771) {
    return _0x3aa771;
  }
  const _0x335031 = typeof _0x28cdf5;
  const _0xc03640 = _0x18b8be !== undefined;
  _0x844da8 = _0xc03640 && _0x3aa771[0] && _0x3aa771[0].parentNode || _0x844da8;
  if (_0x335031 === "string" || _0x335031 === "number") {
    if (_0x335031 === "number") {
      _0x28cdf5 = _0x28cdf5.toString();
    }
    if (_0xc03640) {
      let _0x40745b = _0x3aa771[0];
      if (_0x40745b && _0x40745b.nodeType === 3) {
        _0x40745b.data = _0x28cdf5;
      } else {
        _0x40745b = document.createTextNode(_0x28cdf5);
      }
      _0x3aa771 = z(_0x844da8, _0x3aa771, _0x18b8be, _0x40745b);
    } else if (_0x3aa771 !== "" && typeof _0x3aa771 == "string") {
      _0x3aa771 = _0x844da8.firstChild.data = _0x28cdf5;
    } else {
      _0x3aa771 = _0x844da8.textContent = _0x28cdf5;
    }
  } else if (_0x28cdf5 == null || _0x335031 === "boolean") {
    _0x3aa771 = z(_0x844da8, _0x3aa771, _0x18b8be);
  } else {
    if (_0x335031 === "function") {
      A(() => {
        let _0x2fe8e5 = _0x28cdf5();
        while (typeof _0x2fe8e5 == "function") {
          _0x2fe8e5 = _0x2fe8e5();
        }
        _0x3aa771 = me(_0x844da8, _0x2fe8e5, _0x3aa771, _0x18b8be);
      });
      return () => _0x3aa771;
    }
    if (Array.isArray(_0x28cdf5)) {
      const _0x5ebba3 = [];
      const _0x26cb7b = _0x3aa771 && Array.isArray(_0x3aa771);
      if (Se(_0x5ebba3, _0x28cdf5, _0x3aa771, _0x3b9ee1)) {
        A(() => _0x3aa771 = me(_0x844da8, _0x5ebba3, _0x3aa771, _0x18b8be, true));
        return () => _0x3aa771;
      }
      if (_0x5ebba3.length === 0) {
        _0x3aa771 = z(_0x844da8, _0x3aa771, _0x18b8be);
        if (_0xc03640) {
          return _0x3aa771;
        }
      } else if (_0x26cb7b) {
        if (_0x3aa771.length === 0) {
          Re(_0x844da8, _0x5ebba3, _0x18b8be);
        } else {
          St(_0x844da8, _0x3aa771, _0x5ebba3);
        }
      } else {
        if (_0x3aa771) {
          z(_0x844da8);
        }
        Re(_0x844da8, _0x5ebba3);
      }
      _0x3aa771 = _0x5ebba3;
    } else if (_0x28cdf5.nodeType) {
      if (Array.isArray(_0x3aa771)) {
        if (_0xc03640) {
          return _0x3aa771 = z(_0x844da8, _0x3aa771, _0x18b8be, _0x28cdf5);
        }
        z(_0x844da8, _0x3aa771, null, _0x28cdf5);
      } else if (_0x3aa771 == null || _0x3aa771 === "" || !_0x844da8.firstChild) {
        _0x844da8.appendChild(_0x28cdf5);
      } else {
        _0x844da8.replaceChild(_0x28cdf5, _0x844da8.firstChild);
      }
      _0x3aa771 = _0x28cdf5;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x28cdf5);
    }
  }
  return _0x3aa771;
}
function Se(_0x3b7496, _0x73a2e8, _0x41e6f1, _0x214ebf) {
  let _0x4bcbb9 = false;
  for (let _0x531104 = 0, _0x226511 = _0x73a2e8.length; _0x531104 < _0x226511; _0x531104++) {
    let _0x267be4 = _0x73a2e8[_0x531104];
    let _0x3ac588 = _0x41e6f1 && _0x41e6f1[_0x531104];
    let _0x57ba15;
    if (_0x267be4 != null && _0x267be4 !== true && _0x267be4 !== false) {
      if ((_0x57ba15 = typeof _0x267be4) == "object" && _0x267be4.nodeType) {
        _0x3b7496.push(_0x267be4);
      } else if (Array.isArray(_0x267be4)) {
        _0x4bcbb9 = Se(_0x3b7496, _0x267be4, _0x3ac588) || _0x4bcbb9;
      } else if (_0x57ba15 === "function") {
        if (_0x214ebf) {
          while (typeof _0x267be4 == "function") {
            _0x267be4 = _0x267be4();
          }
          _0x4bcbb9 = Se(_0x3b7496, Array.isArray(_0x267be4) ? _0x267be4 : [_0x267be4], Array.isArray(_0x3ac588) ? _0x3ac588 : [_0x3ac588]) || _0x4bcbb9;
        } else {
          _0x3b7496.push(_0x267be4);
          _0x4bcbb9 = true;
        }
      } else {
        const _0xaddfa7 = String(_0x267be4);
        if (_0x3ac588 && _0x3ac588.nodeType === 3 && _0x3ac588.data === _0xaddfa7) {
          _0x3b7496.push(_0x3ac588);
        } else {
          _0x3b7496.push(document.createTextNode(_0xaddfa7));
        }
      }
    }
  }
  return _0x4bcbb9;
}
function Re(_0x1e5452, _0x1bda92, _0x483e91 = null) {
  for (let _0x1add63 = 0, _0x5201ea = _0x1bda92.length; _0x1add63 < _0x5201ea; _0x1add63++) {
    _0x1e5452.insertBefore(_0x1bda92[_0x1add63], _0x483e91);
  }
}
function z(_0x5549ad, _0x19df8b, _0x1f9b90, _0x12a405) {
  if (_0x1f9b90 === undefined) {
    return _0x5549ad.textContent = "";
  }
  const _0x2c5acf = _0x12a405 || document.createTextNode("");
  if (_0x19df8b.length) {
    let _0x5caa98 = false;
    for (let _0x11356a = _0x19df8b.length - 1; _0x11356a >= 0; _0x11356a--) {
      const _0x47bfb2 = _0x19df8b[_0x11356a];
      if (_0x2c5acf !== _0x47bfb2) {
        const _0x306cb8 = _0x47bfb2.parentNode === _0x5549ad;
        if (!_0x5caa98 && !_0x11356a) {
          if (_0x306cb8) {
            _0x5549ad.replaceChild(_0x2c5acf, _0x47bfb2);
          } else {
            _0x5549ad.insertBefore(_0x2c5acf, _0x1f9b90);
          }
        } else if (_0x306cb8) {
          _0x47bfb2.remove();
        }
      } else {
        _0x5caa98 = true;
      }
    }
  } else {
    _0x5549ad.insertBefore(_0x2c5acf, _0x1f9b90);
  }
  return [_0x2c5acf];
}
const Bt = "_App_1x7hf_1";
const Pt = "_content_1x7hf_14";
const Ge = {
  App: Bt,
  content: Pt
};
const Et = "_craftingInfo_1blpy_1";
const Tt = "_header_1blpy_14";
const Ot = "_title_1blpy_30";
const Mt = "_craftingList_1blpy_39";
const Nt = "_craftingItem_1blpy_51";
const Ft = "_itemBox_1blpy_65";
const qt = "_icon_1blpy_75";
const Dt = "_infoBox_1blpy_82";
const jt = "_time_1blpy_97";
const Ut = "_button_1blpy_111";
const Rt = "_needsList_1blpy_132";
const Gt = "_needItem_1blpy_141";
const Kt = "_texts_1blpy_167";
const Qt = "_name_1blpy_176";
const Wt = "_info_1blpy_82";
const P = {
  craftingInfo: Et,
  header: Tt,
  title: Ot,
  craftingList: Mt,
  craftingItem: Nt,
  itemBox: Ft,
  icon: qt,
  infoBox: Dt,
  time: jt,
  button: Ut,
  needsList: Rt,
  needItem: Gt,
  texts: Kt,
  name: Qt,
  info: Wt
};
const Ie = Symbol("store-raw");
const ce = Symbol("store-node");
function lt(_0x4e553e) {
  let _0x11608c = _0x4e553e[X];
  if (!_0x11608c && (Object.defineProperty(_0x4e553e, X, {
    value: _0x11608c = new Proxy(_0x4e553e, Zt)
  }), !Array.isArray(_0x4e553e))) {
    const _0x1069ce = Object.keys(_0x4e553e);
    const _0x207bfd = Object.getOwnPropertyDescriptors(_0x4e553e);
    for (let _0x4cbd31 = 0, _0x3032a8 = _0x1069ce.length; _0x4cbd31 < _0x3032a8; _0x4cbd31++) {
      const _0x29caf4 = _0x1069ce[_0x4cbd31];
      if (_0x207bfd[_0x29caf4].get) {
        Object.defineProperty(_0x4e553e, _0x29caf4, {
          enumerable: _0x207bfd[_0x29caf4].enumerable,
          get: _0x207bfd[_0x29caf4].get.bind(_0x11608c)
        });
      }
    }
  }
  return _0x11608c;
}
function Z(_0x28ec55) {
  let _0x3ea7a1;
  return _0x28ec55 != null && typeof _0x28ec55 == "object" && (_0x28ec55[X] || !(_0x3ea7a1 = Object.getPrototypeOf(_0x28ec55)) || _0x3ea7a1 === Object.prototype || Array.isArray(_0x28ec55));
}
function ne(_0x456d25, _0x29c7e5 = new Set()) {
  let _0x506cec;
  let _0x525fed;
  let _0x581fb5;
  let _0x49b67f;
  if (_0x506cec = _0x456d25 != null && _0x456d25[Ie]) {
    return _0x506cec;
  }
  if (!Z(_0x456d25) || _0x29c7e5.has(_0x456d25)) {
    return _0x456d25;
  }
  if (Array.isArray(_0x456d25)) {
    if (Object.isFrozen(_0x456d25)) {
      _0x456d25 = _0x456d25.slice(0);
    } else {
      _0x29c7e5.add(_0x456d25);
    }
    for (let _0x28381c = 0, _0x227858 = _0x456d25.length; _0x28381c < _0x227858; _0x28381c++) {
      _0x581fb5 = _0x456d25[_0x28381c];
      if ((_0x525fed = ne(_0x581fb5, _0x29c7e5)) !== _0x581fb5) {
        _0x456d25[_0x28381c] = _0x525fed;
      }
    }
  } else {
    if (Object.isFrozen(_0x456d25)) {
      _0x456d25 = Object.assign({}, _0x456d25);
    } else {
      _0x29c7e5.add(_0x456d25);
    }
    const _0x4ae390 = Object.keys(_0x456d25);
    const _0x1ff476 = Object.getOwnPropertyDescriptors(_0x456d25);
    for (let _0x1ec834 = 0, _0x4f1b8b = _0x4ae390.length; _0x1ec834 < _0x4f1b8b; _0x1ec834++) {
      _0x49b67f = _0x4ae390[_0x1ec834];
      if (!_0x1ff476[_0x49b67f].get) {
        _0x581fb5 = _0x456d25[_0x49b67f];
        if ((_0x525fed = ne(_0x581fb5, _0x29c7e5)) !== _0x581fb5) {
          _0x456d25[_0x49b67f] = _0x525fed;
        }
      }
    }
  }
  return _0x456d25;
}
function Ee(_0x43eca5) {
  let _0x1175d1 = _0x43eca5[ce];
  if (!_0x1175d1) {
    Object.defineProperty(_0x43eca5, ce, {
      value: _0x1175d1 = Object.create(null)
    });
  }
  return _0x1175d1;
}
function ke(_0x594928, _0x2a13a9, _0x480e05) {
  return _0x594928[_0x2a13a9] ||= ft(_0x480e05);
}
function Vt(_0x5e1431, _0x264d13) {
  const _0x3a1a8d = Reflect.getOwnPropertyDescriptor(_0x5e1431, _0x264d13);
  if (!!_0x3a1a8d && !_0x3a1a8d.get && !!_0x3a1a8d.configurable && _0x264d13 !== X && _0x264d13 !== ce) {
    delete _0x3a1a8d.value;
    delete _0x3a1a8d.writable;
    _0x3a1a8d.get = () => _0x5e1431[X][_0x264d13];
  }
  return _0x3a1a8d;
}
function ct(_0x5e39a9) {
  if (ze()) {
    const _0x5e142d = Ee(_0x5e39a9);
    (_0x5e142d._ ||= ft())();
  }
}
function Ht(_0x51aefb) {
  ct(_0x51aefb);
  return Reflect.ownKeys(_0x51aefb);
}
function ft(_0x5522a5) {
  const [_0x32b2eb, _0x47b747] = H(_0x5522a5, {
    equals: false,
    internal: true
  });
  _0x32b2eb.$ = _0x47b747;
  return _0x32b2eb;
}
const Zt = {
  get(_0x7ada4b, _0x589652, _0x3d16bf) {
    if (_0x589652 === Ie) {
      return _0x7ada4b;
    }
    if (_0x589652 === X) {
      return _0x3d16bf;
    }
    if (_0x589652 === we) {
      ct(_0x7ada4b);
      return _0x3d16bf;
    }
    const _0x62b2e = Ee(_0x7ada4b);
    const _0x2c7741 = _0x62b2e[_0x589652];
    let _0x473d03 = _0x2c7741 ? _0x2c7741() : _0x7ada4b[_0x589652];
    if (_0x589652 === ce || _0x589652 === "__proto__") {
      return _0x473d03;
    }
    if (!_0x2c7741) {
      const _0x5b6429 = Object.getOwnPropertyDescriptor(_0x7ada4b, _0x589652);
      if (ze() && (typeof _0x473d03 != "function" || _0x7ada4b.hasOwnProperty(_0x589652)) && (!_0x5b6429 || !_0x5b6429.get)) {
        _0x473d03 = ke(_0x62b2e, _0x589652, _0x473d03)();
      }
    }
    if (Z(_0x473d03)) {
      return lt(_0x473d03);
    } else {
      return _0x473d03;
    }
  },
  has(_0x2f865d, _0x4c218b) {
    if (_0x4c218b === Ie || _0x4c218b === X || _0x4c218b === we || _0x4c218b === ce || _0x4c218b === "__proto__") {
      return true;
    } else {
      this.get(_0x2f865d, _0x4c218b, _0x2f865d);
      return _0x4c218b in _0x2f865d;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Ht,
  getOwnPropertyDescriptor: Vt
};
function j(_0x5b5e63, _0x5b5785, _0x303e84, _0x224616 = false) {
  if (!_0x224616 && _0x5b5e63[_0x5b5785] === _0x303e84) {
    return;
  }
  const _0x423855 = _0x5b5e63[_0x5b5785];
  const _0x2cef78 = _0x5b5e63.length;
  if (_0x303e84 === undefined) {
    delete _0x5b5e63[_0x5b5785];
  } else {
    _0x5b5e63[_0x5b5785] = _0x303e84;
  }
  let _0x343e76 = Ee(_0x5b5e63);
  let _0x17493f;
  if (_0x17493f = ke(_0x343e76, _0x5b5785, _0x423855)) {
    _0x17493f.$(() => _0x303e84);
  }
  if (Array.isArray(_0x5b5e63) && _0x5b5e63.length !== _0x2cef78) {
    for (let _0x27dec4 = _0x5b5e63.length; _0x27dec4 < _0x2cef78; _0x27dec4++) {
      if (_0x17493f = _0x343e76[_0x27dec4]) {
        _0x17493f.$();
      }
    }
    if (_0x17493f = ke(_0x343e76, "length", _0x2cef78)) {
      _0x17493f.$(_0x5b5e63.length);
    }
  }
  if (_0x17493f = _0x343e76._) {
    _0x17493f.$();
  }
}
function ut(_0x111361, _0x2b52eb) {
  const _0x267af5 = Object.keys(_0x2b52eb);
  for (let _0x338927 = 0; _0x338927 < _0x267af5.length; _0x338927 += 1) {
    const _0x24d442 = _0x267af5[_0x338927];
    j(_0x111361, _0x24d442, _0x2b52eb[_0x24d442]);
  }
}
function Xt(_0x47fe1e, _0x4f272c) {
  if (typeof _0x4f272c == "function") {
    _0x4f272c = _0x4f272c(_0x47fe1e);
  }
  _0x4f272c = ne(_0x4f272c);
  if (Array.isArray(_0x4f272c)) {
    if (_0x47fe1e === _0x4f272c) {
      return;
    }
    let _0xfd3e16 = 0;
    let _0x52d595 = _0x4f272c.length;
    for (; _0xfd3e16 < _0x52d595; _0xfd3e16++) {
      const _0x393800 = _0x4f272c[_0xfd3e16];
      if (_0x47fe1e[_0xfd3e16] !== _0x393800) {
        j(_0x47fe1e, _0xfd3e16, _0x393800);
      }
    }
    j(_0x47fe1e, "length", _0x52d595);
  } else {
    ut(_0x47fe1e, _0x4f272c);
  }
}
function le(_0x5795eb, _0x56b6f5, _0x46f424 = []) {
  let _0x482df8;
  let _0x10e035 = _0x5795eb;
  if (_0x56b6f5.length > 1) {
    _0x482df8 = _0x56b6f5.shift();
    const _0x849c69 = typeof _0x482df8;
    const _0x1d3d7d = Array.isArray(_0x5795eb);
    if (Array.isArray(_0x482df8)) {
      for (let _0x2470a9 = 0; _0x2470a9 < _0x482df8.length; _0x2470a9++) {
        le(_0x5795eb, [_0x482df8[_0x2470a9]].concat(_0x56b6f5), _0x46f424);
      }
      return;
    } else if (_0x1d3d7d && _0x849c69 === "function") {
      for (let _0xcf06c7 = 0; _0xcf06c7 < _0x5795eb.length; _0xcf06c7++) {
        if (_0x482df8(_0x5795eb[_0xcf06c7], _0xcf06c7)) {
          le(_0x5795eb, [_0xcf06c7].concat(_0x56b6f5), _0x46f424);
        }
      }
      return;
    } else if (_0x1d3d7d && _0x849c69 === "object") {
      const {
        from: _0x850eeb = 0,
        to: _0x493ccf = _0x5795eb.length - 1,
        by: _0xcb0f3 = 1
      } = _0x482df8;
      for (let _0x5cf97a = _0x850eeb; _0x5cf97a <= _0x493ccf; _0x5cf97a += _0xcb0f3) {
        le(_0x5795eb, [_0x5cf97a].concat(_0x56b6f5), _0x46f424);
      }
      return;
    } else if (_0x56b6f5.length > 1) {
      le(_0x5795eb[_0x482df8], _0x56b6f5, [_0x482df8].concat(_0x46f424));
      return;
    }
    _0x10e035 = _0x5795eb[_0x482df8];
    _0x46f424 = [_0x482df8].concat(_0x46f424);
  }
  let _0x1e7eaa = _0x56b6f5[0];
  if ((typeof _0x1e7eaa != "function" || !(_0x1e7eaa = _0x1e7eaa(_0x10e035, _0x46f424), _0x1e7eaa === _0x10e035)) && (_0x482df8 !== undefined || _0x1e7eaa != null)) {
    _0x1e7eaa = ne(_0x1e7eaa);
    if (_0x482df8 === undefined || Z(_0x10e035) && Z(_0x1e7eaa) && !Array.isArray(_0x1e7eaa)) {
      ut(_0x10e035, _0x1e7eaa);
    } else {
      j(_0x5795eb, _0x482df8, _0x1e7eaa);
    }
  }
}
function oe(...[_0x275ca3, _0x5dd827]) {
  const _0x549500 = ne(_0x275ca3 || {});
  const _0x58c037 = Array.isArray(_0x549500);
  const _0x3e4e6c = lt(_0x549500);
  function _0x25bcf1(..._0xb806cb) {
    Le(() => {
      if (_0x58c037 && _0xb806cb.length === 1) {
        Xt(_0x549500, _0xb806cb[0]);
      } else {
        le(_0x549500, _0xb806cb);
      }
    });
  }
  return [_0x3e4e6c, _0x25bcf1];
}
const Be = Symbol("store-root");
function J(_0x3cebeb, _0x3c21f7, _0x3f84c3, _0x234ba7, _0x1e0e2c) {
  const _0x38580b = _0x3c21f7[_0x3f84c3];
  if (_0x3cebeb === _0x38580b) {
    return;
  }
  if (_0x3f84c3 !== Be && (!Z(_0x3cebeb) || !Z(_0x38580b) || _0x1e0e2c && _0x3cebeb[_0x1e0e2c] !== _0x38580b[_0x1e0e2c])) {
    j(_0x3c21f7, _0x3f84c3, _0x3cebeb);
    return;
  }
  if (Array.isArray(_0x3cebeb)) {
    if (_0x3cebeb.length && _0x38580b.length && (!_0x234ba7 || _0x1e0e2c && _0x3cebeb[0] && _0x3cebeb[0][_0x1e0e2c] != null)) {
      let _0x3c5050;
      let _0x51c724;
      let _0xc71b75;
      let _0xf5cedd;
      let _0x4be402;
      let _0xc44f95;
      let _0x264d27;
      let _0xf4d033;
      _0xc71b75 = 0;
      _0xf5cedd = Math.min(_0x38580b.length, _0x3cebeb.length);
      for (; _0xc71b75 < _0xf5cedd && (_0x38580b[_0xc71b75] === _0x3cebeb[_0xc71b75] || _0x1e0e2c && _0x38580b[_0xc71b75] && _0x3cebeb[_0xc71b75] && _0x38580b[_0xc71b75][_0x1e0e2c] === _0x3cebeb[_0xc71b75][_0x1e0e2c]); _0xc71b75++) {
        J(_0x3cebeb[_0xc71b75], _0x38580b, _0xc71b75, _0x234ba7, _0x1e0e2c);
      }
      const _0x3bc055 = new Array(_0x3cebeb.length);
      const _0x3135fb = new Map();
      _0xf5cedd = _0x38580b.length - 1;
      _0x4be402 = _0x3cebeb.length - 1;
      for (; _0xf5cedd >= _0xc71b75 && _0x4be402 >= _0xc71b75 && (_0x38580b[_0xf5cedd] === _0x3cebeb[_0x4be402] || _0x1e0e2c && _0x38580b[_0xc71b75] && _0x3cebeb[_0xc71b75] && _0x38580b[_0xf5cedd][_0x1e0e2c] === _0x3cebeb[_0x4be402][_0x1e0e2c]); _0xf5cedd--, _0x4be402--) {
        _0x3bc055[_0x4be402] = _0x38580b[_0xf5cedd];
      }
      if (_0xc71b75 > _0x4be402 || _0xc71b75 > _0xf5cedd) {
        for (_0x51c724 = _0xc71b75; _0x51c724 <= _0x4be402; _0x51c724++) {
          j(_0x38580b, _0x51c724, _0x3cebeb[_0x51c724]);
        }
        for (; _0x51c724 < _0x3cebeb.length; _0x51c724++) {
          j(_0x38580b, _0x51c724, _0x3bc055[_0x51c724]);
          J(_0x3cebeb[_0x51c724], _0x38580b, _0x51c724, _0x234ba7, _0x1e0e2c);
        }
        if (_0x38580b.length > _0x3cebeb.length) {
          j(_0x38580b, "length", _0x3cebeb.length);
        }
        return;
      }
      _0x264d27 = new Array(_0x4be402 + 1);
      _0x51c724 = _0x4be402;
      for (; _0x51c724 >= _0xc71b75; _0x51c724--) {
        _0xc44f95 = _0x3cebeb[_0x51c724];
        _0xf4d033 = _0x1e0e2c && _0xc44f95 ? _0xc44f95[_0x1e0e2c] : _0xc44f95;
        _0x3c5050 = _0x3135fb.get(_0xf4d033);
        _0x264d27[_0x51c724] = _0x3c5050 === undefined ? -1 : _0x3c5050;
        _0x3135fb.set(_0xf4d033, _0x51c724);
      }
      for (_0x3c5050 = _0xc71b75; _0x3c5050 <= _0xf5cedd; _0x3c5050++) {
        _0xc44f95 = _0x38580b[_0x3c5050];
        _0xf4d033 = _0x1e0e2c && _0xc44f95 ? _0xc44f95[_0x1e0e2c] : _0xc44f95;
        _0x51c724 = _0x3135fb.get(_0xf4d033);
        if (_0x51c724 !== undefined && _0x51c724 !== -1) {
          _0x3bc055[_0x51c724] = _0x38580b[_0x3c5050];
          _0x51c724 = _0x264d27[_0x51c724];
          _0x3135fb.set(_0xf4d033, _0x51c724);
        }
      }
      for (_0x51c724 = _0xc71b75; _0x51c724 < _0x3cebeb.length; _0x51c724++) {
        if (_0x51c724 in _0x3bc055) {
          j(_0x38580b, _0x51c724, _0x3bc055[_0x51c724]);
          J(_0x3cebeb[_0x51c724], _0x38580b, _0x51c724, _0x234ba7, _0x1e0e2c);
        } else {
          j(_0x38580b, _0x51c724, _0x3cebeb[_0x51c724]);
        }
      }
    } else {
      for (let _0x578aae = 0, _0x1d50c8 = _0x3cebeb.length; _0x578aae < _0x1d50c8; _0x578aae++) {
        J(_0x3cebeb[_0x578aae], _0x38580b, _0x578aae, _0x234ba7, _0x1e0e2c);
      }
    }
    if (_0x38580b.length > _0x3cebeb.length) {
      j(_0x38580b, "length", _0x3cebeb.length);
    }
    return;
  }
  const _0xc72a9b = Object.keys(_0x3cebeb);
  for (let _0x2b191c = 0, _0x23ad4d = _0xc72a9b.length; _0x2b191c < _0x23ad4d; _0x2b191c++) {
    J(_0x3cebeb[_0xc72a9b[_0x2b191c]], _0x38580b, _0xc72a9b[_0x2b191c], _0x234ba7, _0x1e0e2c);
  }
  const _0x162293 = Object.keys(_0x38580b);
  for (let _0x4f8495 = 0, _0x1d78d9 = _0x162293.length; _0x4f8495 < _0x1d78d9; _0x4f8495++) {
    if (_0x3cebeb[_0x162293[_0x4f8495]] === undefined) {
      j(_0x38580b, _0x162293[_0x4f8495], undefined);
    }
  }
}
function Q(_0x10ec36, _0x16f185 = {}) {
  const {
    merge: _0x5b9346,
    key: _0x4b9a58 = "id"
  } = _0x16f185;
  const _0x2b61cb = ne(_0x10ec36);
  return _0x4e4c36 => {
    if (!Z(_0x4e4c36) || !Z(_0x2b61cb)) {
      return _0x2b61cb;
    }
    const _0x11a067 = J(_0x2b61cb, {
      [Be]: _0x4e4c36
    }, Be, _0x5b9346, _0x4b9a58);
    if (_0x11a067 === undefined) {
      return _0x4e4c36;
    } else {
      return _0x11a067;
    }
  };
}
function Yt(_0x5b760f, _0xcc8b79) {
  const _0x340e38 = mt(_0xcc8b79);
  return [_0x594443 => w(_0x340e38.Provider, {
    value: _0x5b760f(_0x594443),
    get children() {
      return _0x594443.children;
    }
  }), () => yt(_0x340e38)];
}
const [zt, Jt] = Yt(() => {
  const [_0x44e249, _0x22bf0c] = H(false);
  const [_0x1bff7c, _0x353f26] = H("crafting");
  const [_0x5987c9, _0x1a4324] = oe({});
  const [_0x24eaeb, _0x85401d] = oe([]);
  const [_0x549543, _0x49e242] = oe([]);
  const [_0xc80ac9, _0x3bec44] = oe([]);
  const [_0x2dfc31, _0x148979] = oe({});
  return {
    visible: _0x44e249,
    setVisible: _0x22bf0c,
    navigation: _0x1bff7c,
    setNavigation: _0x353f26,
    currentItem: _0x5987c9,
    setCurrentItem: _0x1a4324,
    itemsList: _0x24eaeb,
    setItemsList: _0x85401d,
    attachments: _0x549543,
    setAttachments: _0x49e242,
    craftingQueue: _0xc80ac9,
    setCraftingQueue: _0x3bec44,
    weapons: _0x2dfc31,
    setWeapons: _0x148979
  };
});
const re = () => Jt();
const ee = _0x44e754 => {
  _0x44e754 = _0x44e754 ?? 0;
  return {
    hours: Math.floor(_0x44e754 / 3600),
    minutes: Math.floor(_0x44e754 % 3600 / 60),
    seconds: Math.floor(_0x44e754 % 60)
  };
};
const en = E("<div><div>Needs for Crafting</div>Requirements to craft this item");
const tn = E("<div>");
const nn = E("<div><div><div>Crafting Queue</div>Items that you are currently crafting</div><div>");
const rn = E("<div><div><div></div></div><div><div></div></div><div><svg width=\"0.9259vh\" height=\"0.9259vh\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 1L5 5M1 9L5 5M5 5L1 1L9 9\" stroke=\"white\" stroke-opacity=\"0.48\" stroke-width=\"1.5\">");
const sn = E("<div><div></div><div><div></div><div>/<!> needed");
function on() {
  const {
    currentItem: _0xb17bfb,
    craftingQueue: _0xac6270,
    setCraftingQueue: _0x4a8aba
  } = re();
  const [_0xc2046e, _0x2b748a] = H(undefined);
  _0x29c78f.register("crafting:updateQueue", async _0x4cf5dd => {
    _0x2b748a(_0x4cf5dd[0]);
    _0x378e83(_0x4cf5dd);
  });
  let _0x480d05 = null;
  const _0x378e83 = _0xe89574 => {
    if (!_0xc2046e()) {
      return _0x4a8aba([]);
    }
    _0x4a8aba((_0xe89574 ?? _0xac6270).map(_0x422f78 => {
      const _0x21c180 = _0x422f78.expiresAt;
      if (_0x422f78.databaseID === _0xc2046e()?.databaseID) {
        const _0x238496 = _0x21c180 - Date.now() / 1000;
        return {
          ..._0x422f78,
          timeUI: _0x238496
        };
      } else {
        return {
          ..._0x422f78,
          timeUI: undefined
        };
      }
    }).filter(_0x15d371 => _0x15d371.timeUI === undefined || _0x15d371.timeUI > 0));
  };
  Xe(() => {
    _0x480d05 = setInterval(() => {
      _0x378e83();
    }, 1000);
  });
  Ye(() => {
    clearInterval(_0x480d05);
  });
  return (() => {
    const _0x491761 = nn();
    const _0x208fc8 = _0x491761.firstChild;
    const _0x5849f9 = _0x208fc8.firstChild;
    const _0x1e4b7c = _0x208fc8.nextSibling;
    b(_0x1e4b7c, w(te, {
      each: _0xac6270,
      children: _0x1d8952 => (() => {
        const _0x9b3b50 = rn();
        const _0x3cae5c = _0x9b3b50.firstChild;
        const _0x5b947a = _0x3cae5c.firstChild;
        const _0x456cc0 = _0x3cae5c.nextSibling;
        const _0x24d601 = _0x456cc0.firstChild;
        const _0x545402 = _0x456cc0.nextSibling;
        b(_0x456cc0, () => _0x1d8952.item.name, _0x24d601);
        b(_0x24d601, w(At, {
          get children() {
            return [w(De, {
              get when() {
                return _0x1d8952.timeUI && _0x1d8952.timeUI > 0;
              },
              get children() {
                return [F(() => ee(_0x1d8952.timeUI).hours), "h ", F(() => ee(_0x1d8952.timeUI).minutes), "m", " ", F(() => ee(_0x1d8952.timeUI).seconds), "s"];
              }
            }), w(De, {
              get when() {
                return !_0x1d8952.timeUI;
              },
              children: "In queue..."
            })];
          }
        }));
        _0x545402.$$click = async () => {
          await _0x29c78f.execute("crafting:removeItem", _0x1d8952.databaseID);
        };
        A(_0x3bb9cf => {
          const _0x279436 = P.craftingItem;
          const _0x63fff6 = P.itemBox;
          const _0x3f1f95 = P.icon;
          const _0x9af36b = "url(" + _0x1d8952.item.image + ")";
          const _0x3a85e1 = P.infoBox;
          const _0x53b395 = P.time;
          const _0x2ff29c = P.button;
          if (_0x279436 !== _0x3bb9cf._v$7) {
            g(_0x9b3b50, _0x3bb9cf._v$7 = _0x279436);
          }
          if (_0x63fff6 !== _0x3bb9cf._v$8) {
            g(_0x3cae5c, _0x3bb9cf._v$8 = _0x63fff6);
          }
          if (_0x3f1f95 !== _0x3bb9cf._v$9) {
            g(_0x5b947a, _0x3bb9cf._v$9 = _0x3f1f95);
          }
          if (_0x9af36b !== _0x3bb9cf._v$10) {
            if ((_0x3bb9cf._v$10 = _0x9af36b) != null) {
              _0x5b947a.style.setProperty("background-image", _0x9af36b);
            } else {
              _0x5b947a.style.removeProperty("background-image");
            }
          }
          if (_0x3a85e1 !== _0x3bb9cf._v$11) {
            g(_0x456cc0, _0x3bb9cf._v$11 = _0x3a85e1);
          }
          if (_0x53b395 !== _0x3bb9cf._v$12) {
            g(_0x24d601, _0x3bb9cf._v$12 = _0x53b395);
          }
          if (_0x2ff29c !== _0x3bb9cf._v$13) {
            g(_0x545402, _0x3bb9cf._v$13 = _0x2ff29c);
          }
          return _0x3bb9cf;
        }, {
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined,
          _v$13: undefined
        });
        return _0x9b3b50;
      })()
    }));
    b(_0x491761, w(K, {
      get when() {
        return _0xb17bfb?.needs;
      },
      get children() {
        return [(() => {
          const _0x480da5 = en();
          const _0x50337d = _0x480da5.firstChild;
          _0x480da5.style.setProperty("margin-top", "1.8vh");
          A(_0xda0c16 => {
            const _0x30f977 = P.header;
            const _0x23d538 = P.title;
            if (_0x30f977 !== _0xda0c16._v$) {
              g(_0x480da5, _0xda0c16._v$ = _0x30f977);
            }
            if (_0x23d538 !== _0xda0c16._v$2) {
              g(_0x50337d, _0xda0c16._v$2 = _0x23d538);
            }
            return _0xda0c16;
          }, {
            _v$: undefined,
            _v$2: undefined
          });
          return _0x480da5;
        })(), (() => {
          const _0x1e9373 = tn();
          b(_0x1e9373, w(te, {
            get each() {
              return _0xb17bfb?.needs;
            },
            children: _0xbb2a50 => (() => {
              const _0x4fa843 = sn();
              const _0x8fa0e = _0x4fa843.firstChild;
              const _0x550200 = _0x8fa0e.nextSibling;
              const _0x1d9bfc = _0x550200.firstChild;
              const _0x927a6c = _0x1d9bfc.nextSibling;
              const _0x1608e2 = _0x927a6c.firstChild;
              const _0x2072d8 = _0x1608e2.nextSibling;
              _0x2072d8.nextSibling;
              b(_0x1d9bfc, () => _0xbb2a50.item.name);
              b(_0x927a6c, () => _0xbb2a50.quantity, _0x1608e2);
              b(_0x927a6c, () => _0xbb2a50.amount, _0x2072d8);
              A(_0x21cb07 => {
                const _0x4a2fc0 = P.needItem;
                const _0x1c9ced = P.icon;
                const _0x5382ae = "url(" + _0xbb2a50.item.image + ")";
                const _0x69d494 = P.texts;
                const _0x568db6 = P.name;
                const _0x17971e = P.info;
                if (_0x4a2fc0 !== _0x21cb07._v$14) {
                  g(_0x4fa843, _0x21cb07._v$14 = _0x4a2fc0);
                }
                if (_0x1c9ced !== _0x21cb07._v$15) {
                  g(_0x8fa0e, _0x21cb07._v$15 = _0x1c9ced);
                }
                if (_0x5382ae !== _0x21cb07._v$16) {
                  if ((_0x21cb07._v$16 = _0x5382ae) != null) {
                    _0x8fa0e.style.setProperty("background-image", _0x5382ae);
                  } else {
                    _0x8fa0e.style.removeProperty("background-image");
                  }
                }
                if (_0x69d494 !== _0x21cb07._v$17) {
                  g(_0x550200, _0x21cb07._v$17 = _0x69d494);
                }
                if (_0x568db6 !== _0x21cb07._v$18) {
                  g(_0x1d9bfc, _0x21cb07._v$18 = _0x568db6);
                }
                if (_0x17971e !== _0x21cb07._v$19) {
                  g(_0x927a6c, _0x21cb07._v$19 = _0x17971e);
                }
                return _0x21cb07;
              }, {
                _v$14: undefined,
                _v$15: undefined,
                _v$16: undefined,
                _v$17: undefined,
                _v$18: undefined,
                _v$19: undefined
              });
              return _0x4fa843;
            })()
          }));
          A(() => g(_0x1e9373, P.needsList));
          return _0x1e9373;
        })()];
      }
    }), null);
    A(_0x2070f1 => {
      const _0x41498d = P.craftingInfo;
      const _0x17d457 = P.header;
      const _0x4dc41b = P.title;
      const _0x4db4d9 = P.craftingList;
      if (_0x41498d !== _0x2070f1._v$3) {
        g(_0x491761, _0x2070f1._v$3 = _0x41498d);
      }
      if (_0x17d457 !== _0x2070f1._v$4) {
        g(_0x208fc8, _0x2070f1._v$4 = _0x17d457);
      }
      if (_0x4dc41b !== _0x2070f1._v$5) {
        g(_0x5849f9, _0x2070f1._v$5 = _0x4dc41b);
      }
      if (_0x4db4d9 !== _0x2070f1._v$6) {
        g(_0x1e4b7c, _0x2070f1._v$6 = _0x4db4d9);
      }
      return _0x2070f1;
    }, {
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return _0x491761;
  })();
}
fe(["click"]);
const ln = "_header_ykkld_1";
const cn = "_row_ykkld_12";
const fn = "_title_ykkld_19";
const un = "_firstText_ykkld_28";
const dn = "_secondText_ykkld_37";
const an = "_craftIcon_ykkld_45";
const vn = "_button_ykkld_49";
const _n = "_arrowBox_ykkld_72";
const hn = "_active_ykkld_82";
const gn = "_divider_ykkld_91";
const $n = "_rectangle_ykkld_99";
const M = {
  header: ln,
  row: cn,
  title: fn,
  firstText: un,
  secondText: dn,
  craftIcon: an,
  button: vn,
  arrowBox: _n,
  active: hn,
  divider: gn,
  rectangle: $n
};
const mn = "_keybinds_n93t6_1";
const yn = "_keybind_n93t6_1";
const Cn = "_text_n93t6_29";
const xn = "_button_n93t6_32";
const de = {
  keybinds: mn,
  keybind: yn,
  text: Cn,
  button: xn
};
const bn = E("<div>");
const wn = E("<div><div></div><div>");
const Ln = [{
  keybind: "ESC",
  description: "Exit"
}];
function pn() {
  return (() => {
    const _0x1d241d = bn();
    b(_0x1d241d, w(te, {
      each: Ln,
      children: _0x5ec1dc => (() => {
        const _0x5c92b5 = wn();
        const _0x17cfd8 = _0x5c92b5.firstChild;
        const _0x3defe9 = _0x17cfd8.nextSibling;
        b(_0x17cfd8, () => _0x5ec1dc.description);
        b(_0x3defe9, () => _0x5ec1dc.keybind);
        A(_0x5effd1 => {
          const _0x57cf11 = de.keybind;
          const _0x5c08a6 = de.text;
          const _0x3506ba = de.button;
          if (_0x57cf11 !== _0x5effd1._v$) {
            g(_0x5c92b5, _0x5effd1._v$ = _0x57cf11);
          }
          if (_0x5c08a6 !== _0x5effd1._v$2) {
            g(_0x17cfd8, _0x5effd1._v$2 = _0x5c08a6);
          }
          if (_0x3506ba !== _0x5effd1._v$3) {
            g(_0x3defe9, _0x5effd1._v$3 = _0x3506ba);
          }
          return _0x5effd1;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return _0x5c92b5;
      })()
    }));
    A(() => g(_0x1d241d, de.keybinds));
    return _0x1d241d;
  })();
}
const An = E("<div><div><div>Personal<div><svg width=\"0.46vh\" height=\"0.648vh\" viewBox=\"0 0 5 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0.5 6.5L3.5 3.5L0.5 0.5\" stroke=\"#00F8B9\"></div></div><svg width=\"3.24vh\" height=\"3.24vh\" viewBox=\"0 0 35 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.753643 0.743555C0.155646 1.33363 0 1.52689 0 1.67954C0 1.79894 0.403665 2.5909 1.06313 3.76514L2.12626 5.65831L3.33774 6.06333L4.54922 6.46835L8.73235 10.6562L12.9154 14.8441L13.4205 14.8248C13.8091 14.8099 13.9842 14.836 14.1803 14.9378L14.4351 15.0701L15.0306 14.4712L15.6259 13.8723L11.0074 9.24847L6.38884 4.62462L6.00532 3.42535C5.71688 2.5233 5.5836 2.20104 5.46754 2.12538C5.01192 1.82815 1.69078 0 1.60647 0C1.55187 0 1.16807 0.334642 0.753643 0.743555ZM19.2005 0.584023C17.8409 0.843489 16.7174 1.33898 15.6966 2.1292C15.006 2.66371 14.7937 2.89619 14.7937 3.11741C14.7937 3.44058 14.9346 3.50122 15.7191 3.51575C16.2854 3.52618 16.5418 3.56763 17.0093 3.72424C18.3752 4.18198 19.6479 5.38132 20.2235 6.75313C20.5621 7.56003 20.6121 8.63733 20.3296 9.04116C20.1278 9.32963 20.1817 9.50689 20.6068 9.95315L21.0025 10.3686L17.7449 13.631L14.4872 16.8935L14.0486 16.4718C13.6687 16.1065 13.5847 16.0561 13.4205 16.0951C13.2914 16.1259 11.2347 18.1405 6.97059 22.4134L0.710234 28.6865L0.42971 29.2777C-0.310806 30.8381 -0.00583422 32.4486 1.251 33.6137C2.13619 34.4343 3.35809 34.7437 4.57749 34.4558C5.51893 34.2337 5.64701 34.1293 8.66318 31.1284C10.5691 29.2321 11.4781 28.2803 11.5221 28.1349C11.5577 28.0175 11.6066 27.754 11.6309 27.5491C11.7873 26.2283 12.9819 24.5584 14.3422 23.7591C14.9068 23.4273 15.8286 23.0887 16.169 23.0879C16.6411 23.0869 16.8413 22.958 17.6616 22.1263C18.6583 21.1159 18.6595 21.1107 18.0258 20.4534L17.577 19.9879L20.8356 16.7256L24.0943 13.4633L24.5428 13.8946C24.8355 14.1761 25.0486 14.3259 25.1562 14.3259C25.2621 14.3259 25.443 14.202 25.6615 13.9799C26.2136 13.4186 26.632 13.293 27.0662 13.5581C27.4442 13.7889 27.607 14.2726 27.4258 14.626C27.3829 14.7096 27.2696 14.8619 27.174 14.9646C26.8515 15.311 26.9137 15.4368 27.8942 16.4207C28.8694 17.3993 29.1274 17.5561 29.7578 17.5529C30.4711 17.5493 30.5137 17.5174 32.6624 15.3784C33.9548 14.0919 34.7073 13.2903 34.7922 13.1098C34.9992 12.6694 35.0311 12.2972 34.9007 11.8423C34.7943 11.4712 34.7106 11.3648 33.8261 10.4765C32.7666 9.41266 32.77 9.41419 32.3215 9.80572C31.8864 10.1856 31.2589 10.1144 30.9782 9.65328C30.7625 9.29903 30.7943 8.96877 31.0806 8.59331C31.2143 8.41792 31.3236 8.2038 31.3236 8.11742C31.3236 8.00323 30.5335 7.17129 28.424 5.06469C25.3042 1.94909 24.9667 1.6657 23.7434 1.13487C22.7509 0.704263 21.9841 0.54487 20.7667 0.51601C20.0526 0.499181 19.5253 0.52206 19.2005 0.584023ZM20.8122 18.6265L19.4339 20.0081L19.5947 20.3138C19.7183 20.549 19.7555 20.7319 19.7555 21.1063C19.7555 21.6781 19.6142 21.999 19.1751 22.4244C19.0191 22.5756 18.8914 22.721 18.8914 22.7475C18.8914 22.774 19.0552 22.9006 19.2554 23.0289C20.8145 24.0283 21.9189 25.6846 22.1519 27.3727L22.2276 27.9216L25.3624 31.0619C28.68 34.3853 28.883 34.5588 29.7957 34.8495C30.4254 35.0502 31.5274 35.0502 32.1571 34.8495C33.4723 34.4305 34.5519 33.3046 34.9023 31.9867C35.0346 31.4889 35.0321 30.4556 34.8975 29.938C34.625 28.8905 34.622 28.8868 31.1638 25.4077L27.9739 22.1983L27.5825 22.1516C25.3608 21.8863 23.2035 20.145 22.466 18.0217C22.3645 17.7293 22.2609 17.435 22.2359 17.3675C22.1997 17.2698 21.9106 17.5254 20.8122 18.6265Z\" fill=\"#00F8B9\"></svg><div><div>Crafting</div><div>Bench</div></div><svg width=\"3.24vh\" height=\"3.24vh\" viewBox=\"0 0 35 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.753643 0.743555C0.155646 1.33363 0 1.52689 0 1.67954C0 1.79894 0.403665 2.5909 1.06313 3.76514L2.12626 5.65831L3.33774 6.06333L4.54922 6.46835L8.73235 10.6562L12.9154 14.8441L13.4205 14.8248C13.8091 14.8099 13.9842 14.836 14.1803 14.9378L14.4351 15.0701L15.0306 14.4712L15.6259 13.8723L11.0074 9.24847L6.38884 4.62462L6.00532 3.42535C5.71688 2.5233 5.5836 2.20104 5.46754 2.12538C5.01192 1.82815 1.69078 0 1.60647 0C1.55187 0 1.16807 0.334642 0.753643 0.743555ZM19.2005 0.584023C17.8409 0.843489 16.7174 1.33898 15.6966 2.1292C15.006 2.66371 14.7937 2.89619 14.7937 3.11741C14.7937 3.44058 14.9346 3.50122 15.7191 3.51575C16.2854 3.52618 16.5418 3.56763 17.0093 3.72424C18.3752 4.18198 19.6479 5.38132 20.2235 6.75313C20.5621 7.56003 20.6121 8.63733 20.3296 9.04116C20.1278 9.32963 20.1817 9.50689 20.6068 9.95315L21.0025 10.3686L17.7449 13.631L14.4872 16.8935L14.0486 16.4718C13.6687 16.1065 13.5847 16.0561 13.4205 16.0951C13.2914 16.1259 11.2347 18.1405 6.97059 22.4134L0.710234 28.6865L0.42971 29.2777C-0.310806 30.8381 -0.00583422 32.4486 1.251 33.6137C2.13619 34.4343 3.35809 34.7437 4.57749 34.4558C5.51893 34.2337 5.64701 34.1293 8.66318 31.1284C10.5691 29.2321 11.4781 28.2803 11.5221 28.1349C11.5577 28.0175 11.6066 27.754 11.6309 27.5491C11.7873 26.2283 12.9819 24.5584 14.3422 23.7591C14.9068 23.4273 15.8286 23.0887 16.169 23.0879C16.6411 23.0869 16.8413 22.958 17.6616 22.1263C18.6583 21.1159 18.6595 21.1107 18.0258 20.4534L17.577 19.9879L20.8356 16.7256L24.0943 13.4633L24.5428 13.8946C24.8355 14.1761 25.0486 14.3259 25.1562 14.3259C25.2621 14.3259 25.443 14.202 25.6615 13.9799C26.2136 13.4186 26.632 13.293 27.0662 13.5581C27.4442 13.7889 27.607 14.2726 27.4258 14.626C27.3829 14.7096 27.2696 14.8619 27.174 14.9646C26.8515 15.311 26.9137 15.4368 27.8942 16.4207C28.8694 17.3993 29.1274 17.5561 29.7578 17.5529C30.4711 17.5493 30.5137 17.5174 32.6624 15.3784C33.9548 14.0919 34.7073 13.2903 34.7922 13.1098C34.9992 12.6694 35.0311 12.2972 34.9007 11.8423C34.7943 11.4712 34.7106 11.3648 33.8261 10.4765C32.7666 9.41266 32.77 9.41419 32.3215 9.80572C31.8864 10.1856 31.2589 10.1144 30.9782 9.65328C30.7625 9.29903 30.7943 8.96877 31.0806 8.59331C31.2143 8.41792 31.3236 8.2038 31.3236 8.11742C31.3236 8.00323 30.5335 7.17129 28.424 5.06469C25.3042 1.94909 24.9667 1.6657 23.7434 1.13487C22.7509 0.704263 21.9841 0.54487 20.7667 0.51601C20.0526 0.499181 19.5253 0.52206 19.2005 0.584023ZM20.8122 18.6265L19.4339 20.0081L19.5947 20.3138C19.7183 20.549 19.7555 20.7319 19.7555 21.1063C19.7555 21.6781 19.6142 21.999 19.1751 22.4244C19.0191 22.5756 18.8914 22.721 18.8914 22.7475C18.8914 22.774 19.0552 22.9006 19.2554 23.0289C20.8145 24.0283 21.9189 25.6846 22.1519 27.3727L22.2276 27.9216L25.3624 31.0619C28.68 34.3853 28.883 34.5588 29.7957 34.8495C30.4254 35.0502 31.5274 35.0502 32.1571 34.8495C33.4723 34.4305 34.5519 33.3046 34.9023 31.9867C35.0346 31.4889 35.0321 30.4556 34.8975 29.938C34.625 28.8905 34.622 28.8868 31.1638 25.4077L27.9739 22.1983L27.5825 22.1516C25.3608 21.8863 23.2035 20.145 22.466 18.0217C22.3645 17.7293 22.2609 17.435 22.2359 17.3675C22.1997 17.2698 21.9106 17.5254 20.8122 18.6265Z\" fill=\"#00F8B9\"></svg><div>Crafting<div><svg width=\"0.46vh\" height=\"0.648vh\" viewBox=\"0 0 5 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0.5 6.5L3.5 3.5L0.5 0.5\" stroke=\"#00F8B9\"></div></div></div><div><div>");
function Sn() {
  const {
    navigation: _0x189156,
    setNavigation: _0x1e3724,
    setCurrentItem: _0xcfc092,
    setAttachments: _0x199306
  } = re();
  return (() => {
    const _0x1f8c30 = An();
    const _0x2253a6 = _0x1f8c30.firstChild;
    const _0x57c917 = _0x2253a6.firstChild;
    const _0x46346d = _0x57c917.firstChild;
    const _0x438e79 = _0x46346d.nextSibling;
    const _0x1038bf = _0x57c917.nextSibling;
    const _0x57b4c0 = _0x1038bf.nextSibling;
    const _0x329c9a = _0x57b4c0.firstChild;
    const _0x23a1ea = _0x329c9a.nextSibling;
    const _0xe11dad = _0x57b4c0.nextSibling;
    const _0x2183c9 = _0xe11dad.nextSibling;
    const _0x446ea5 = _0x2183c9.firstChild;
    const _0x5443f8 = _0x446ea5.nextSibling;
    const _0x4e3ac4 = _0x2253a6.nextSibling;
    const _0x20e255 = _0x4e3ac4.firstChild;
    _0x57c917.$$click = () => {
      _0x1e3724("personal");
      _0xcfc092(Q({}));
      _0x199306(Q([]));
      _0x29c78f.execute("crafting:cleanupWeapon");
    };
    _0x2183c9.$$click = () => {
      _0x1e3724("crafting");
      _0xcfc092(Q({}));
      _0x199306(Q([]));
      _0x29c78f.execute("crafting:cleanupWeapon");
    };
    b(_0x2253a6, w(pn, {}), null);
    A(_0x40154a => {
      const _0x2c4f9f = M.header;
      const _0x5c0edc = M.row;
      const _0x3913b8 = M.button;
      const _0xe1eaff = {
        [M.active]: _0x189156() === "personal"
      };
      const _0x1b0071 = M.arrowBox;
      const _0x2b9d93 = M.craftIcon;
      const _0x349a32 = M.title;
      const _0x4c2227 = M.firstText;
      const _0x107db7 = M.secondText;
      const _0x594a39 = M.craftIcon;
      const _0x2324f4 = M.button;
      const _0x114f58 = {
        [M.active]: _0x189156() === "crafting"
      };
      const _0x15650d = M.arrowBox;
      const _0x8abfd1 = M.divider;
      const _0x43fddb = M.rectangle;
      if (_0x2c4f9f !== _0x40154a._v$) {
        g(_0x1f8c30, _0x40154a._v$ = _0x2c4f9f);
      }
      if (_0x5c0edc !== _0x40154a._v$2) {
        g(_0x2253a6, _0x40154a._v$2 = _0x5c0edc);
      }
      if (_0x3913b8 !== _0x40154a._v$3) {
        g(_0x57c917, _0x40154a._v$3 = _0x3913b8);
      }
      _0x40154a._v$4 = $e(_0x57c917, _0xe1eaff, _0x40154a._v$4);
      if (_0x1b0071 !== _0x40154a._v$5) {
        g(_0x438e79, _0x40154a._v$5 = _0x1b0071);
      }
      if (_0x2b9d93 !== _0x40154a._v$6) {
        Ae(_0x1038bf, "class", _0x40154a._v$6 = _0x2b9d93);
      }
      if (_0x349a32 !== _0x40154a._v$7) {
        g(_0x57b4c0, _0x40154a._v$7 = _0x349a32);
      }
      if (_0x4c2227 !== _0x40154a._v$8) {
        g(_0x329c9a, _0x40154a._v$8 = _0x4c2227);
      }
      if (_0x107db7 !== _0x40154a._v$9) {
        g(_0x23a1ea, _0x40154a._v$9 = _0x107db7);
      }
      if (_0x594a39 !== _0x40154a._v$10) {
        Ae(_0xe11dad, "class", _0x40154a._v$10 = _0x594a39);
      }
      if (_0x2324f4 !== _0x40154a._v$11) {
        g(_0x2183c9, _0x40154a._v$11 = _0x2324f4);
      }
      _0x40154a._v$12 = $e(_0x2183c9, _0x114f58, _0x40154a._v$12);
      if (_0x15650d !== _0x40154a._v$13) {
        g(_0x5443f8, _0x40154a._v$13 = _0x15650d);
      }
      if (_0x8abfd1 !== _0x40154a._v$14) {
        g(_0x4e3ac4, _0x40154a._v$14 = _0x8abfd1);
      }
      if (_0x43fddb !== _0x40154a._v$15) {
        g(_0x20e255, _0x40154a._v$15 = _0x43fddb);
      }
      return _0x40154a;
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
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined
    });
    return _0x1f8c30;
  })();
}
fe(["click"]);
const In = "_itemInfo_16q03_1";
const kn = "_attachment_16q03_11";
const Bn = "_box_16q03_19";
const Pn = "_label_16q03_36";
const En = "_item_16q03_1";
const Tn = "_title_16q03_58";
const On = "_button_16q03_66";
const Mn = "_time_16q03_92";
const Nn = "_glow_16q03_102";
const R = {
  itemInfo: In,
  attachment: kn,
  box: Bn,
  delete: "_delete_16q03_32",
  label: Pn,
  item: En,
  title: Tn,
  button: On,
  time: Mn,
  glow: Nn
};
const Fn = E("<div><div>");
const qn = E("<div>Start Crafting<div>h <!>m <!>s");
const Ke = E("<div>");
const Dn = E("<svg width=\"2vh\" height=\"2vh\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g filter=\"url(#filter0_d_1013_1622)\"><path d=\"M11.5 3L8.25 6.25M5 9.5L8.25 6.25M8.25 6.25L5 3L11.5 9.5\" stroke=\"#F86969\"></g><defs><filter id=\"filter0_d_1013_1622\" x=\"0.646484\" y=\"0.646454\" width=\"15.207\" height=\"15.2071\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset dy=\"2\"></feOffset><feGaussianBlur stdDeviation=\"2\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.972549 0 0 0 0 0.411765 0 0 0 0 0.411765 0 0 0 1 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1013_1622\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1013_1622\" result=\"shape\">");
const jn = E("<div><div></div><svg width=\"11.29vh\" height=\"22.87vh\" viewBox=\"0 0 122 247\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g filter=\"url(#filter0_d_938_1549)\"><rect x=\"19\" y=\"219\" width=\"9\" height=\"9\" fill=\"white\"></g><g filter=\"url(#filter1_d_938_1549)\"><rect x=\"94\" y=\"19\" width=\"9\" height=\"9\" fill=\"white\"></g><path d=\"M23 227.5V99L98 24\" stroke=\"white\" stroke-opacity=\"0.25\"></path><defs><filter id=\"filter0_d_938_1549\" x=\"0\" y=\"200\" width=\"47\" height=\"47\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"9.5\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_938_1549\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_938_1549\" result=\"shape\"></filter><filter id=\"filter1_d_938_1549\" x=\"75\" y=\"0\" width=\"47\" height=\"47\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation=\"9.5\"></feGaussianBlur><feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0\"></feColorMatrix><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_938_1549\"></feBlend><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_938_1549\" result=\"shape\"></svg><div>");
function Un() {
  const {
    currentItem: _0x3bad5e,
    navigation: _0x3dd3cf,
    attachments: _0x574dca,
    setAttachments: _0x89249e,
    setItemsList: _0x3326ce
  } = re();
  const _0x117f44 = async () => {
    const _0x2e7a6f = await _0x29c78f.execute("crafting:getItemsList", _0x3dd3cf());
    if (_0x2e7a6f) {
      _0x3326ce(_0x2e7a6f);
    }
  };
  _0x29c78f.register("crafting:attachmentOffset", async _0x5b41c3 => {
    _0x89249e(_0x5b41c3);
  });
  const [_0x26c6c2, _0xe81966] = H(false);
  return (() => {
    const _0x55c7d4 = Ke();
    _0x55c7d4.$$mouseup = () => {
      if (!_0x26c6c2()) {
        _0x29c78f.execute("crafting:drag", false);
      }
    };
    _0x55c7d4.$$mousedown = () => {
      if (!_0x26c6c2()) {
        _0x29c78f.execute("crafting:drag", true);
      }
    };
    b(_0x55c7d4, w(K, {
      get when() {
        return Object.entries(_0x3bad5e).length > 0;
      },
      get children() {
        return [w(K, {
          get when() {
            return _0x3dd3cf() !== "crafting";
          },
          get children() {
            return w(te, {
              each: _0x574dca,
              children: _0x3b5b31 => {
                const _0x1d7c39 = _0x574dca.filter(_0x5230e6 => _0x5230e6.bone === _0x3b5b31.bone);
                const _0x44083d = _0x1d7c39.findIndex(_0x5eeabf => _0x5eeabf.attachmentId === _0x3b5b31.attachmentId);
                let _0x3e7c4e = 0;
                if (_0x1d7c39.length > 1 && _0x44083d === _0x1d7c39.length - 1) {
                  _0x3e7c4e = 180;
                }
                return (() => {
                  const _0x2ff049 = jn();
                  const _0x1b561c = _0x2ff049.firstChild;
                  const _0x6364cd = _0x1b561c.nextSibling;
                  const _0x4700a7 = _0x6364cd.nextSibling;
                  _0x2ff049.style.setProperty("position", "fixed");
                  if ((_0x3e7c4e ? "-9.5vh" : "-2.5vh") != null) {
                    _0x2ff049.style.setProperty("margin-left", _0x3e7c4e ? "-9.5vh" : "-2.5vh");
                  } else {
                    _0x2ff049.style.removeProperty("margin-left");
                  }
                  if ((_0x3e7c4e ? "-4vh" : "-25vh") != null) {
                    _0x2ff049.style.setProperty("margin-top", _0x3e7c4e ? "-4vh" : "-25vh");
                  } else {
                    _0x2ff049.style.removeProperty("margin-top");
                  }
                  if ("translateX(" + (_0x3e7c4e ? "-4vh" : 0) + ") rotate(" + _0x3e7c4e + "deg)" != null) {
                    _0x2ff049.style.setProperty("transform", "translateX(" + (_0x3e7c4e ? "-4vh" : 0) + ") rotate(" + _0x3e7c4e + "deg)");
                  } else {
                    _0x2ff049.style.removeProperty("transform");
                  }
                  if ("rotate(" + _0x3e7c4e + "deg)" != null) {
                    _0x1b561c.style.setProperty("transform", "rotate(" + _0x3e7c4e + "deg)");
                  } else {
                    _0x1b561c.style.removeProperty("transform");
                  }
                  b(_0x1b561c, w(K, {
                    get when() {
                      return _0x3b5b31.installed;
                    },
                    get children() {
                      const _0x134b0d = Dn();
                      _0x134b0d.$$click = async () => {
                        await _0x29c78f.execute("crafting:unequipAccessory", {
                          ..._0x3bad5e,
                          attachmentId: _0x3b5b31.attachmentId
                        });
                        _0x117f44();
                      };
                      _0x134b0d.addEventListener("mouseleave", () => _0xe81966(false));
                      _0x134b0d.addEventListener("mouseenter", () => _0xe81966(true));
                      A(() => Ae(_0x134b0d, "class", R.delete));
                      return _0x134b0d;
                    }
                  }));
                  if ("rotate(" + _0x3e7c4e + "deg)" != null) {
                    _0x4700a7.style.setProperty("transform", "rotate(" + _0x3e7c4e + "deg)");
                  } else {
                    _0x4700a7.style.removeProperty("transform");
                  }
                  b(_0x4700a7, () => _0x3b5b31.label);
                  A(_0x5a761f => {
                    const _0x224bda = R.attachment;
                    const _0x4f8e31 = _0x3b5b31.x + "%";
                    const _0x47fb12 = _0x3b5b31.y + "%";
                    const _0x3eb406 = R.box;
                    const _0x181a2a = "url(" + (_0x3b5b31.installed ? _0x3b5b31.image : "") + "), radial-gradient(1043.26% 83.87% at 50.00% 50.00%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)";
                    const _0x17cb2b = R.label;
                    if (_0x224bda !== _0x5a761f._v$5) {
                      g(_0x2ff049, _0x5a761f._v$5 = _0x224bda);
                    }
                    if (_0x4f8e31 !== _0x5a761f._v$6) {
                      if ((_0x5a761f._v$6 = _0x4f8e31) != null) {
                        _0x2ff049.style.setProperty("left", _0x4f8e31);
                      } else {
                        _0x2ff049.style.removeProperty("left");
                      }
                    }
                    if (_0x47fb12 !== _0x5a761f._v$7) {
                      if ((_0x5a761f._v$7 = _0x47fb12) != null) {
                        _0x2ff049.style.setProperty("top", _0x47fb12);
                      } else {
                        _0x2ff049.style.removeProperty("top");
                      }
                    }
                    if (_0x3eb406 !== _0x5a761f._v$8) {
                      g(_0x1b561c, _0x5a761f._v$8 = _0x3eb406);
                    }
                    if (_0x181a2a !== _0x5a761f._v$9) {
                      if ((_0x5a761f._v$9 = _0x181a2a) != null) {
                        _0x1b561c.style.setProperty("background-image", _0x181a2a);
                      } else {
                        _0x1b561c.style.removeProperty("background-image");
                      }
                    }
                    if (_0x17cb2b !== _0x5a761f._v$10) {
                      g(_0x4700a7, _0x5a761f._v$10 = _0x17cb2b);
                    }
                    return _0x5a761f;
                  }, {
                    _v$5: undefined,
                    _v$6: undefined,
                    _v$7: undefined,
                    _v$8: undefined,
                    _v$9: undefined,
                    _v$10: undefined
                  });
                  return _0x2ff049;
                })();
              }
            });
          }
        }), (() => {
          const _0x634d1c = Fn();
          const _0x3b8bd5 = _0x634d1c.firstChild;
          b(_0x3b8bd5, () => _0x3bad5e.item.name);
          A(_0x51a600 => {
            const _0x4032b8 = R.item;
            const _0x7eff8c = R.title;
            if (_0x4032b8 !== _0x51a600._v$) {
              g(_0x634d1c, _0x51a600._v$ = _0x4032b8);
            }
            if (_0x7eff8c !== _0x51a600._v$2) {
              g(_0x3b8bd5, _0x51a600._v$2 = _0x7eff8c);
            }
            return _0x51a600;
          }, {
            _v$: undefined,
            _v$2: undefined
          });
          return _0x634d1c;
        })(), w(K, {
          get when() {
            return _0x3dd3cf() === "crafting";
          },
          get children() {
            const _0x53770f = qn();
            const _0x144f45 = _0x53770f.firstChild;
            const _0x58fe05 = _0x144f45.nextSibling;
            const _0x58afe1 = _0x58fe05.firstChild;
            const _0x3507ce = _0x58afe1.nextSibling;
            const _0x5d07b0 = _0x3507ce.nextSibling;
            const _0x547233 = _0x5d07b0.nextSibling;
            _0x547233.nextSibling;
            _0x53770f.$$click = async _0x4cf83e => {
              if (_0x4cf83e.shiftKey) {
                for (let _0x1c9820 = 0; _0x1c9820 < 10; _0x1c9820++) {
                  _0x29c78f.execute("crafting:craftItem", _0x3bad5e.index);
                  await new Promise(_0x414a00 => setTimeout(_0x414a00, 100));
                }
                return;
              }
              _0x29c78f.execute("crafting:craftItem", _0x3bad5e.index);
            };
            b(_0x58fe05, () => ee((_0x3bad5e.time ?? 0) / 1000).hours, _0x58afe1);
            b(_0x58fe05, () => ee((_0x3bad5e.time ?? 0) / 1000).minutes, _0x3507ce);
            b(_0x58fe05, () => ee((_0x3bad5e.time ?? 0) / 1000).seconds, _0x547233);
            A(_0x5370c1 => {
              const _0x5d3f89 = R.button;
              const _0x3a2605 = R.time;
              if (_0x5d3f89 !== _0x5370c1._v$3) {
                g(_0x53770f, _0x5370c1._v$3 = _0x5d3f89);
              }
              if (_0x3a2605 !== _0x5370c1._v$4) {
                g(_0x58fe05, _0x5370c1._v$4 = _0x3a2605);
              }
              return _0x5370c1;
            }, {
              _v$3: undefined,
              _v$4: undefined
            });
            return _0x53770f;
          }
        })];
      }
    }), null);
    b(_0x55c7d4, w(K, {
      get when() {
        return Object.entries(_0x3bad5e).length > 0;
      },
      get children() {
        const _0x2f4eb0 = Ke();
        A(() => g(_0x2f4eb0, R.glow));
        return _0x2f4eb0;
      }
    }), null);
    A(() => g(_0x55c7d4, R.itemInfo));
    return _0x55c7d4;
  })();
}
fe(["mousedown", "mouseup", "click"]);
const Rn = "_itemsList_1i6b3_1";
const Gn = "_header_1i6b3_12";
const Kn = "_title_1i6b3_26";
const Qn = "_scroll_1i6b3_35";
const Wn = "_item_1i6b3_1";
const Vn = "_display_1i6b3_59";
const Hn = "_active_1i6b3_75";
const Zn = "_icon_1i6b3_81";
const Xn = "_textContainer_1i6b3_92";
const Yn = "_textTitle_1i6b3_106";
const zn = "_button_1i6b3_110";
const D = {
  itemsList: Rn,
  header: Gn,
  title: Kn,
  scroll: Qn,
  item: Wn,
  display: Vn,
  active: Hn,
  icon: Zn,
  textContainer: Xn,
  textTitle: Yn,
  button: zn
};
const Jn = E("<div><div><div></div></div><div>");
const ei = E("<div><div><div></div><div><div></div></div></div><div>Select");
function ti() {
  const {
    navigation: _0x55af41,
    currentItem: _0xa0c8eb,
    setCurrentItem: _0x5d0dcd,
    itemsList: _0x44c558,
    setItemsList: _0x3bbad2,
    weapons: _0x4637c8
  } = re();
  const _0x18ab95 = async () => {
    _0x3bbad2([]);
    const _0x45e79d = await _0x29c78f.execute("crafting:getItemsList", _0x55af41());
    if (_0x45e79d) {
      _0x3bbad2(_0x45e79d);
    }
  };
  Ze(async () => {
    await _0x18ab95();
  }, [_0x55af41()]);
  return (() => {
    const _0x2a1239 = Jn();
    const _0x4a1072 = _0x2a1239.firstChild;
    const _0x3bf93a = _0x4a1072.firstChild;
    const _0x445773 = _0x4a1072.nextSibling;
    b(_0x3bf93a, () => _0x55af41() === "crafting" ? "List of Items" : "Your Items");
    b(_0x4a1072, () => _0x55af41() === "crafting" ? "List of items that you can craft" : "List of items that you can customize", null);
    b(_0x445773, w(te, {
      get each() {
        return _0x44c558.filter(_0x3f67b9 => _0x55af41() === "personal" ? _0x4637c8[_0x3f67b9.item.id] : true);
      },
      children: (_0x3d2449, _0x54f6c3) => (() => {
        const _0x44a19f = ei();
        const _0x1bd25e = _0x44a19f.firstChild;
        const _0x46ee75 = _0x1bd25e.firstChild;
        const _0x157bd4 = _0x46ee75.nextSibling;
        const _0x4c852b = _0x157bd4.firstChild;
        const _0x4d697f = _0x1bd25e.nextSibling;
        _0x44a19f.$$click = () => {
          _0x29c78f.execute("crafting:cleanupWeapon");
          _0x5d0dcd(Q({}));
          _0x5d0dcd({
            index: _0x54f6c3(),
            ..._0x3d2449
          });
          _0x29c78f.execute("crafting:spawnWeapon", {
            name: _0x3d2449.item.id,
            slot: _0x3d2449.slot,
            variant: _0x3d2449.variant
          });
        };
        b(_0x4c852b, () => _0x3d2449.item.name);
        A(_0x50a160 => {
          const _0x4705b2 = D.item;
          const _0x5c84f5 = D.display;
          const _0x1eced7 = {
            [D.active]: _0xa0c8eb?.index === _0x54f6c3()
          };
          const _0x39e2bd = D.icon;
          const _0x1124e5 = "url(" + _0x3d2449.item.image + ")";
          const _0x200916 = D.textContainer;
          const _0x44e2bb = D.textTitle;
          const _0x10ba54 = D.button;
          const _0x5e7a1a = {
            [D.active]: _0xa0c8eb?.index === _0x54f6c3()
          };
          if (_0x4705b2 !== _0x50a160._v$5) {
            g(_0x44a19f, _0x50a160._v$5 = _0x4705b2);
          }
          if (_0x5c84f5 !== _0x50a160._v$6) {
            g(_0x1bd25e, _0x50a160._v$6 = _0x5c84f5);
          }
          _0x50a160._v$7 = $e(_0x1bd25e, _0x1eced7, _0x50a160._v$7);
          if (_0x39e2bd !== _0x50a160._v$8) {
            g(_0x46ee75, _0x50a160._v$8 = _0x39e2bd);
          }
          if (_0x1124e5 !== _0x50a160._v$9) {
            if ((_0x50a160._v$9 = _0x1124e5) != null) {
              _0x46ee75.style.setProperty("background-image", _0x1124e5);
            } else {
              _0x46ee75.style.removeProperty("background-image");
            }
          }
          if (_0x200916 !== _0x50a160._v$10) {
            g(_0x157bd4, _0x50a160._v$10 = _0x200916);
          }
          if (_0x44e2bb !== _0x50a160._v$11) {
            g(_0x4c852b, _0x50a160._v$11 = _0x44e2bb);
          }
          if (_0x10ba54 !== _0x50a160._v$12) {
            g(_0x4d697f, _0x50a160._v$12 = _0x10ba54);
          }
          _0x50a160._v$13 = $e(_0x4d697f, _0x5e7a1a, _0x50a160._v$13);
          return _0x50a160;
        }, {
          _v$5: undefined,
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined,
          _v$13: undefined
        });
        return _0x44a19f;
      })()
    }));
    A(_0x1006ff => {
      const _0x1ef099 = D.itemsList;
      const _0x4594b4 = D.header;
      const _0x3677b3 = D.title;
      const _0x184c07 = D.scroll;
      if (_0x1ef099 !== _0x1006ff._v$) {
        g(_0x2a1239, _0x1006ff._v$ = _0x1ef099);
      }
      if (_0x4594b4 !== _0x1006ff._v$2) {
        g(_0x4a1072, _0x1006ff._v$2 = _0x4594b4);
      }
      if (_0x3677b3 !== _0x1006ff._v$3) {
        g(_0x3bf93a, _0x1006ff._v$3 = _0x3677b3);
      }
      if (_0x184c07 !== _0x1006ff._v$4) {
        g(_0x445773, _0x1006ff._v$4 = _0x184c07);
      }
      return _0x1006ff;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x2a1239;
  })();
}
fe(["click"]);
const ni = "_accessoriesList_1lr0o_1";
const ii = "_header_1lr0o_14";
const ri = "_title_1lr0o_29";
const si = "_craftingList_1lr0o_38";
const oi = "_craftingItem_1lr0o_50";
const li = "_itemBox_1lr0o_64";
const ci = "_icon_1lr0o_74";
const fi = "_infoBox_1lr0o_81";
const ui = "_equipStatus_1lr0o_96";
const di = "_button_1lr0o_110";
const G = {
  accessoriesList: ni,
  header: ii,
  title: ri,
  craftingList: si,
  craftingItem: oi,
  itemBox: li,
  icon: ci,
  infoBox: fi,
  equipStatus: ui,
  button: di
};
const ai = E("<div><div><div>Your Accessories</div>List of accessories that you can equip</div><div>");
const vi = E("<div><div><div></div></div><div><div>Not equipped</div></div><div><svg width=\"0.83vh\" height=\"1.29vh\" viewBox=\"0 0 9 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L7 7L1 13\" stroke=\"white\" stroke-opacity=\"0.48\" stroke-width=\"1.5\">");
function _i() {
  const {
    currentItem: _0x12b2a8,
    itemsList: _0x1aaec9,
    attachments: _0xaae19d,
    weapons: _0x5d2349,
    navigation: _0x1f706d,
    setItemsList: _0x2064ec
  } = re();
  const _0x8563da = async () => {
    const _0xd36daa = await _0x29c78f.execute("crafting:getItemsList", _0x1f706d());
    if (_0xd36daa) {
      _0x2064ec(_0xd36daa);
    }
  };
  const _0x185a51 = F(() => _0x1aaec9.filter(_0x1f7a28 => {
    const _0x3e46c5 = _0x5d2349[_0x12b2a8?.item?.id];
    return _0x1f7a28.item.id === "weapon_attachment" && _0x1f7a28.variant && _0x3e46c5?.attachments[_0x1f7a28.variant];
  }));
  return (() => {
    const _0x42c208 = ai();
    const _0x65e47f = _0x42c208.firstChild;
    const _0xf5ebf4 = _0x65e47f.firstChild;
    const _0x16ef46 = _0x65e47f.nextSibling;
    b(_0x16ef46, w(te, {
      get each() {
        return _0x185a51();
      },
      children: _0x57b028 => (() => {
        const _0x1aa0e1 = vi();
        const _0x21aa8a = _0x1aa0e1.firstChild;
        const _0x46f210 = _0x21aa8a.firstChild;
        const _0x5c721a = _0x21aa8a.nextSibling;
        const _0x51c15d = _0x5c721a.firstChild;
        const _0x3546e1 = _0x5c721a.nextSibling;
        b(_0x5c721a, () => _0x57b028.item.name, _0x51c15d);
        _0x3546e1.$$click = async () => {
          await _0x29c78f.execute("crafting:equipAccessory", {
            ..._0x12b2a8,
            attachmentId: _0x57b028.variant
          });
          _0x8563da();
        };
        A(_0x41190b => {
          const _0x2f326a = G.craftingItem;
          const _0x530925 = G.itemBox;
          const _0x190648 = G.icon;
          const _0x92bbbc = "url(" + _0x57b028.item.image + ")";
          const _0x11586b = G.infoBox;
          const _0x13f051 = G.equipStatus;
          const _0x342b85 = G.button;
          if (_0x2f326a !== _0x41190b._v$5) {
            g(_0x1aa0e1, _0x41190b._v$5 = _0x2f326a);
          }
          if (_0x530925 !== _0x41190b._v$6) {
            g(_0x21aa8a, _0x41190b._v$6 = _0x530925);
          }
          if (_0x190648 !== _0x41190b._v$7) {
            g(_0x46f210, _0x41190b._v$7 = _0x190648);
          }
          if (_0x92bbbc !== _0x41190b._v$8) {
            if ((_0x41190b._v$8 = _0x92bbbc) != null) {
              _0x46f210.style.setProperty("background-image", _0x92bbbc);
            } else {
              _0x46f210.style.removeProperty("background-image");
            }
          }
          if (_0x11586b !== _0x41190b._v$9) {
            g(_0x5c721a, _0x41190b._v$9 = _0x11586b);
          }
          if (_0x13f051 !== _0x41190b._v$10) {
            g(_0x51c15d, _0x41190b._v$10 = _0x13f051);
          }
          if (_0x342b85 !== _0x41190b._v$11) {
            g(_0x3546e1, _0x41190b._v$11 = _0x342b85);
          }
          return _0x41190b;
        }, {
          _v$5: undefined,
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined
        });
        return _0x1aa0e1;
      })()
    }));
    A(_0x34492c => {
      const _0x478cec = G.accessoriesList;
      const _0x27a81e = G.header;
      const _0x57de5b = G.title;
      const _0x36ac5d = G.craftingList;
      if (_0x478cec !== _0x34492c._v$) {
        g(_0x42c208, _0x34492c._v$ = _0x478cec);
      }
      if (_0x27a81e !== _0x34492c._v$2) {
        g(_0x65e47f, _0x34492c._v$2 = _0x27a81e);
      }
      if (_0x57de5b !== _0x34492c._v$3) {
        g(_0xf5ebf4, _0x34492c._v$3 = _0x57de5b);
      }
      if (_0x36ac5d !== _0x34492c._v$4) {
        g(_0x16ef46, _0x34492c._v$4 = _0x36ac5d);
      }
      return _0x34492c;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x42c208;
  })();
}
fe(["click"]);
var hi = () => {};
var Qe = (_0x3e6b0e, _0x329b5c) => _0x329b5c();
function gi(_0x4b304c, _0x344304) {
  const _0x37ed49 = q(_0x4b304c);
  const _0x580003 = _0x37ed49 ? [_0x37ed49] : [];
  const {
    onEnter: _0x55248f = Qe,
    onExit: _0x28babf = Qe
  } = _0x344304;
  const [_0x5b0e4e, _0x44e4e5] = H(_0x344304.appear ? [] : _0x580003);
  const [_0x3510e4] = $t();
  let _0x45bbd3;
  let _0x5e71c2 = false;
  function _0x18b37c(_0x5b3a07, _0x4c55f5) {
    if (!_0x5b3a07) {
      return _0x4c55f5 && _0x4c55f5();
    }
    _0x5e71c2 = true;
    _0x28babf(_0x5b3a07, () => {
      Le(() => {
        _0x5e71c2 = false;
        _0x44e4e5(_0x484661 => _0x484661.filter(_0x436aae => _0x436aae !== _0x5b3a07));
        if (_0x4c55f5) {
          _0x4c55f5();
        }
      });
    });
  }
  function _0x31ec54(_0x5b3841) {
    const _0x3198c4 = _0x45bbd3;
    if (!_0x3198c4) {
      return _0x5b3841 && _0x5b3841();
    }
    _0x45bbd3 = undefined;
    _0x44e4e5(_0x50c32c => [_0x3198c4, ..._0x50c32c]);
    _0x55248f(_0x3198c4, _0x5b3841 ?? hi);
  }
  const _0x441bbf = _0x344304.mode === "out-in" ? _0x12c1dc => _0x5e71c2 || _0x18b37c(_0x12c1dc, _0x31ec54) : _0x344304.mode === "in-out" ? _0x2b7e8c => _0x31ec54(() => _0x18b37c(_0x2b7e8c)) : _0x581bb0 => {
    _0x18b37c(_0x581bb0);
    _0x31ec54();
  };
  ht(_0x5549c6 => {
    const _0x30a187 = _0x4b304c();
    if (q(_0x3510e4)) {
      _0x3510e4();
      return _0x5549c6;
    } else {
      if (_0x30a187 !== _0x5549c6) {
        _0x45bbd3 = _0x30a187;
        Le(() => q(() => _0x441bbf(_0x5549c6)));
      }
      return _0x30a187;
    }
  }, _0x344304.appear ? undefined : _0x37ed49);
  return _0x5b0e4e;
}
var We = _0x3d7d15 => _0x3d7d15 instanceof Element;
function Pe(_0x59ca67, _0x3bdd9f) {
  if (_0x3bdd9f(_0x59ca67)) {
    return _0x59ca67;
  }
  if (typeof _0x59ca67 == "function" && !_0x59ca67.length) {
    return Pe(_0x59ca67(), _0x3bdd9f);
  }
  if (Array.isArray(_0x59ca67)) {
    for (const _0x2ece44 of _0x59ca67) {
      const _0x29b5ad = Pe(_0x2ece44, _0x3bdd9f);
      if (_0x29b5ad) {
        return _0x29b5ad;
      }
    }
  }
  return null;
}
function $i(_0x194500, _0x626f1d = We, _0x44327e = We) {
  const _0x2df3dc = F(_0x194500);
  return F(() => Pe(_0x2df3dc(), _0x626f1d));
}
function mi(_0x70288b) {
  return F(() => {
    const _0xb05338 = _0x70288b.name || "s";
    return {
      enterActive: (_0x70288b.enterActiveClass || _0xb05338 + "-enter-active").split(" "),
      enter: (_0x70288b.enterClass || _0xb05338 + "-enter").split(" "),
      enterTo: (_0x70288b.enterToClass || _0xb05338 + "-enter-to").split(" "),
      exitActive: (_0x70288b.exitActiveClass || _0xb05338 + "-exit-active").split(" "),
      exit: (_0x70288b.exitClass || _0xb05338 + "-exit").split(" "),
      exitTo: (_0x70288b.exitToClass || _0xb05338 + "-exit-to").split(" "),
      move: (_0x70288b.moveClass || _0xb05338 + "-move").split(" ")
    };
  });
}
function dt(_0x3519c3) {
  requestAnimationFrame(() => requestAnimationFrame(_0x3519c3));
}
function yi(_0x48cabb, _0x21e328, _0x2c23c2, _0x4ce200) {
  const {
    onBeforeEnter: _0x4f1e3f,
    onEnter: _0x5cd969,
    onAfterEnter: _0x5646e7
  } = _0x21e328;
  _0x4f1e3f?.(_0x2c23c2);
  _0x2c23c2.classList.add(..._0x48cabb.enter);
  _0x2c23c2.classList.add(..._0x48cabb.enterActive);
  queueMicrotask(() => {
    if (!_0x2c23c2.parentNode) {
      return _0x4ce200?.();
    }
    _0x5cd969?.(_0x2c23c2, () => _0x2573bf());
  });
  dt(() => {
    _0x2c23c2.classList.remove(..._0x48cabb.enter);
    _0x2c23c2.classList.add(..._0x48cabb.enterTo);
    if (!_0x5cd969 || _0x5cd969.length < 2) {
      _0x2c23c2.addEventListener("transitionend", _0x2573bf);
      _0x2c23c2.addEventListener("animationend", _0x2573bf);
    }
  });
  function _0x2573bf(_0xd5b8f2) {
    if (!_0xd5b8f2 || _0xd5b8f2.target === _0x2c23c2) {
      _0x4ce200?.();
      _0x2c23c2.removeEventListener("transitionend", _0x2573bf);
      _0x2c23c2.removeEventListener("animationend", _0x2573bf);
      _0x2c23c2.classList.remove(..._0x48cabb.enterActive);
      _0x2c23c2.classList.remove(..._0x48cabb.enterTo);
      _0x5646e7?.(_0x2c23c2);
    }
  }
}
function Ci(_0x756525, _0x32fdbe, _0x434d4f, _0x44a935) {
  const {
    onBeforeExit: _0x24f154,
    onExit: _0x5c298e,
    onAfterExit: _0x2871c1
  } = _0x32fdbe;
  if (!_0x434d4f.parentNode) {
    return _0x44a935?.();
  }
  _0x24f154?.(_0x434d4f);
  _0x434d4f.classList.add(..._0x756525.exit);
  _0x434d4f.classList.add(..._0x756525.exitActive);
  _0x5c298e?.(_0x434d4f, () => _0x2fbaad());
  dt(() => {
    _0x434d4f.classList.remove(..._0x756525.exit);
    _0x434d4f.classList.add(..._0x756525.exitTo);
    if (!_0x5c298e || _0x5c298e.length < 2) {
      _0x434d4f.addEventListener("transitionend", _0x2fbaad);
      _0x434d4f.addEventListener("animationend", _0x2fbaad);
    }
  });
  function _0x2fbaad(_0x4847eb) {
    if (!_0x4847eb || _0x4847eb.target === _0x434d4f) {
      _0x44a935?.();
      _0x434d4f.removeEventListener("transitionend", _0x2fbaad);
      _0x434d4f.removeEventListener("animationend", _0x2fbaad);
      _0x434d4f.classList.remove(..._0x756525.exitActive);
      _0x434d4f.classList.remove(..._0x756525.exitTo);
      _0x2871c1?.(_0x434d4f);
    }
  }
}
var xi = {
  inout: "in-out",
  outin: "out-in"
};
var bi = _0x30db58 => {
  const _0x2d4c96 = mi(_0x30db58);
  return gi($i(() => _0x30db58.children), {
    mode: xi[_0x30db58.mode],
    appear: _0x30db58.appear,
    onEnter(_0x5cc29a, _0x5e3efa) {
      yi(_0x2d4c96(), _0x30db58, _0x5cc29a, _0x5e3efa);
    },
    onExit(_0x21edf2, _0xed6076) {
      Ci(_0x2d4c96(), _0x30db58, _0x21edf2, _0xed6076);
    }
  });
};
const wi = E("<div><div>");
function Li() {
  const {
    visible: _0x3afd7d,
    setVisible: _0x47ff4b,
    navigation: _0x70d2cc,
    setCurrentItem: _0x1fe2f2,
    setItemsList: _0x2fc7b2,
    setAttachments: _0x566377,
    setCraftingQueue: _0x52e50f,
    setWeapons: _0x405e13
  } = re();
  _0x29c78f.register("crafting:show", async _0x42c647 => {
    _0x1fe2f2(Q({}));
    _0x2fc7b2(Q([]));
    _0x566377(Q([]));
    _0x52e50f(Q([]));
    _0x47ff4b(_0x42c647);
    const _0x121538 = await _0x29c78f.execute("crafting:getWeaponsList");
    if (_0x121538) {
      _0x405e13(_0x121538);
    }
  });
  Xe(() => {
    document.addEventListener("keyup", _0x370e10 => {
      if (_0x370e10.key.includes("Escape")) {
        _0x29c78f.execute("crafting:close");
      }
    });
  });
  return w(bi, {
    name: "fade",
    get children() {
      return w(K, {
        get when() {
          return _0x3afd7d();
        },
        get children() {
          const _0x371440 = wi();
          const _0x4bfdfa = _0x371440.firstChild;
          b(_0x371440, w(Sn, {}), _0x4bfdfa);
          b(_0x4bfdfa, w(ti, {}), null);
          b(_0x4bfdfa, w(Un, {}), null);
          b(_0x4bfdfa, w(K, {
            get when() {
              return _0x70d2cc() === "crafting";
            },
            get children() {
              return w(on, {});
            }
          }), null);
          b(_0x4bfdfa, w(K, {
            get when() {
              return _0x70d2cc() === "personal";
            },
            get children() {
              return w(_i, {});
            }
          }), null);
          A(_0x476df6 => {
            const _0x38928b = Ge.App;
            const _0x548188 = Ge.content;
            if (_0x38928b !== _0x476df6._v$) {
              g(_0x371440, _0x476df6._v$ = _0x38928b);
            }
            if (_0x548188 !== _0x476df6._v$2) {
              g(_0x4bfdfa, _0x476df6._v$2 = _0x548188);
            }
            return _0x476df6;
          }, {
            _v$: undefined,
            _v$2: undefined
          });
          return _0x371440;
        }
      });
    }
  });
}
It(() => w(zt, {
  get children() {
    return w(Li, {});
  }
}), document.getElementById("root"));