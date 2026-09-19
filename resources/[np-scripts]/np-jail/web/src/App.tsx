import './style.css';
import { N as _0x91d80b } from "./v-packages.js";
(function () {
  const _0x2ca35e = document.createElement("link").relList;
  if (_0x2ca35e && _0x2ca35e.supports && _0x2ca35e.supports("modulepreload")) {
    return;
  }
  for (const _0x3691a7 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x56215e(_0x3691a7);
  }
  new MutationObserver(_0xb2dfbe => {
    for (const _0x5b5767 of _0xb2dfbe) {
      if (_0x5b5767.type === "childList") {
        for (const _0xfc726d of _0x5b5767.addedNodes) {
          if (_0xfc726d.tagName === "LINK" && _0xfc726d.rel === "modulepreload") {
            _0x56215e(_0xfc726d);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x5eceb9(_0x4745d3) {
    const _0x4f57ba = {};
    if (_0x4745d3.integrity) {
      _0x4f57ba.integrity = _0x4745d3.integrity;
    }
    if (_0x4745d3.referrerPolicy) {
      _0x4f57ba.referrerPolicy = _0x4745d3.referrerPolicy;
    }
    if (_0x4745d3.crossOrigin === "use-credentials") {
      _0x4f57ba.credentials = "include";
    } else if (_0x4745d3.crossOrigin === "anonymous") {
      _0x4f57ba.credentials = "omit";
    } else {
      _0x4f57ba.credentials = "same-origin";
    }
    return _0x4f57ba;
  }
  function _0x56215e(_0xd8f2e6) {
    if (_0xd8f2e6.ep) {
      return;
    }
    _0xd8f2e6.ep = true;
    const _0x2214de = _0x5eceb9(_0xd8f2e6);
    fetch(_0xd8f2e6.href, _0x2214de);
  }
})();
const st = (_0x580b8a, _0x11d027) => _0x580b8a === _0x11d027;
const U = Symbol("solid-proxy");
const Ce = Symbol("solid-track");
const se = {
  equals: st
};
let Re = He;
const F = 1;
const re = 2;
const Ke = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var x = null;
let he = null;
let w = null;
let I = null;
let D = null;
let de = 0;
const [rt, si] = V(false);
function ne(_0x156859, _0x49bf3b) {
  const _0x15d982 = w;
  const _0x5f31f3 = x;
  const _0x5a485c = _0x156859.length === 0;
  const _0x9e80c1 = _0x5a485c ? Ke : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x49bf3b === undefined ? _0x5f31f3 : _0x49bf3b
  };
  const _0x4608fb = _0x5a485c ? _0x156859 : () => _0x156859(() => T(() => ve(_0x9e80c1)));
  x = _0x9e80c1;
  w = null;
  try {
    return Z(_0x4608fb, true);
  } finally {
    w = _0x15d982;
    x = _0x5f31f3;
  }
}
function V(_0x4888c6, _0x195c9c) {
  _0x195c9c = _0x195c9c ? Object.assign({}, se, _0x195c9c) : se;
  const _0x4d4d3e = {
    value: _0x4888c6,
    observers: null,
    observerSlots: null,
    comparator: _0x195c9c.equals || undefined
  };
  const _0x5ed63c = _0x1e62fb => {
    if (typeof _0x1e62fb == "function") {
      _0x1e62fb = _0x1e62fb(_0x4d4d3e.value);
    }
    return Ze(_0x4d4d3e, _0x1e62fb);
  };
  return [Ve.bind(_0x4d4d3e), _0x5ed63c];
}
function ot(_0x4c2e07, _0x186931, _0x4c954d) {
  const _0x385f41 = ae(_0x4c2e07, _0x186931, true, F);
  Y(_0x385f41);
}
function S(_0x3541f1, _0x26b7a9, _0x250f96) {
  const _0x39320f = ae(_0x3541f1, _0x26b7a9, false, F);
  Y(_0x39320f);
}
function lt(_0x19f6f6, _0x4cb0d2, _0x33908d) {
  Re = _t;
  const _0x14865e = ae(_0x19f6f6, _0x4cb0d2, false, F);
  if (!_0x33908d || !_0x33908d.render) {
    _0x14865e.user = true;
  }
  if (D) {
    D.push(_0x14865e);
  } else {
    Y(_0x14865e);
  }
}
function N(_0x1b1334, _0x30824c, _0x2146ba) {
  _0x2146ba = _0x2146ba ? Object.assign({}, se, _0x2146ba) : se;
  const _0x1dab8c = ae(_0x1b1334, _0x30824c, true, 0);
  _0x1dab8c.observers = null;
  _0x1dab8c.observerSlots = null;
  _0x1dab8c.comparator = _0x2146ba.equals || undefined;
  Y(_0x1dab8c);
  return Ve.bind(_0x1dab8c);
}
function ye(_0xc69474) {
  return Z(_0xc69474, false);
}
function T(_0x503c11) {
  if (w === null) {
    return _0x503c11();
  }
  const _0x4457e3 = w;
  w = null;
  try {
    return _0x503c11();
  } finally {
    w = _0x4457e3;
  }
}
function Se(_0x319363) {
  lt(() => T(_0x319363));
}
function Qe(_0x43a1e2) {
  if (x !== null) {
    if (x.cleanups === null) {
      x.cleanups = [_0x43a1e2];
    } else {
      x.cleanups.push(_0x43a1e2);
    }
  }
  return _0x43a1e2;
}
function qe() {
  return w;
}
function ct(_0x1241b6) {
  const _0x37c39e = w;
  const _0x8f680a = x;
  return Promise.resolve().then(() => {
    w = _0x37c39e;
    x = _0x8f680a;
    let _0x17d5cc;
    Z(_0x1241b6, false);
    w = x = null;
    if (_0x17d5cc) {
      return _0x17d5cc.done;
    } else {
      return undefined;
    }
  });
}
function ft() {
  return [rt, ct];
}
function ut(_0x55caa5, _0x134231) {
  const _0x281aa2 = Symbol("context");
  return {
    id: _0x281aa2,
    Provider: ht(_0x281aa2),
    defaultValue: _0x55caa5
  };
}
function dt(_0x10123b) {
  let _0x583c0e;
  if ((_0x583c0e = Xe(x, _0x10123b.id)) !== undefined) {
    return _0x583c0e;
  } else {
    return _0x10123b.defaultValue;
  }
}
function Ue(_0x4f930a) {
  const _0x414c01 = N(_0x4f930a);
  const _0x47fa42 = N(() => be(_0x414c01()));
  _0x47fa42.toArray = () => {
    const _0x69da3e = _0x47fa42();
    if (Array.isArray(_0x69da3e)) {
      return _0x69da3e;
    } else if (_0x69da3e != null) {
      return [_0x69da3e];
    } else {
      return [];
    }
  };
  return _0x47fa42;
}
function Ve() {
  if (this.sources && this.state) {
    if (this.state === F) {
      Y(this);
    } else {
      const _0x6d006f = I;
      I = null;
      Z(() => le(this), false);
      I = _0x6d006f;
    }
  }
  if (w) {
    const _0x722148 = this.observers ? this.observers.length : 0;
    if (w.sources) {
      w.sources.push(this);
      w.sourceSlots.push(_0x722148);
    } else {
      w.sources = [this];
      w.sourceSlots = [_0x722148];
    }
    if (this.observers) {
      this.observers.push(w);
      this.observerSlots.push(w.sources.length - 1);
    } else {
      this.observers = [w];
      this.observerSlots = [w.sources.length - 1];
    }
  }
  return this.value;
}
function Ze(_0x2aeece, _0x49063c, _0x5d97e7) {
  let _0x40e019 = _0x2aeece.value;
  if (!_0x2aeece.comparator || !_0x2aeece.comparator(_0x40e019, _0x49063c)) {
    _0x2aeece.value = _0x49063c;
    if (_0x2aeece.observers && _0x2aeece.observers.length) {
      Z(() => {
        for (let _0x5ed176 = 0; _0x5ed176 < _0x2aeece.observers.length; _0x5ed176 += 1) {
          const _0x5d98b4 = _0x2aeece.observers[_0x5ed176];
          const _0x5c6ef2 = he && he.running;
          if (_0x5c6ef2) {
            he.disposed.has(_0x5d98b4);
          }
          if (_0x5c6ef2 ? !_0x5d98b4.tState : !_0x5d98b4.state) {
            if (_0x5d98b4.pure) {
              I.push(_0x5d98b4);
            } else {
              D.push(_0x5d98b4);
            }
            if (_0x5d98b4.observers) {
              We(_0x5d98b4);
            }
          }
          if (!_0x5c6ef2) {
            _0x5d98b4.state = F;
          }
        }
        if (I.length > 1000000) {
          I = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x49063c;
}
function Y(_0x3e4d32) {
  if (!_0x3e4d32.fn) {
    return;
  }
  ve(_0x3e4d32);
  const _0x249d47 = x;
  const _0x179711 = w;
  const _0x4f9b07 = de;
  w = x = _0x3e4d32;
  at(_0x3e4d32, _0x3e4d32.value, _0x4f9b07);
  w = _0x179711;
  x = _0x249d47;
}
function at(_0x274485, _0x3a86a6, _0x165439) {
  let _0x2a83d2;
  try {
    _0x2a83d2 = _0x274485.fn(_0x3a86a6);
  } catch (_0x102e6c) {
    if (_0x274485.pure) {
      _0x274485.state = F;
      if (_0x274485.owned) {
        _0x274485.owned.forEach(ve);
      }
      _0x274485.owned = null;
    }
    _0x274485.updatedAt = _0x165439 + 1;
    return Ge(_0x102e6c);
  }
  if (!_0x274485.updatedAt || _0x274485.updatedAt <= _0x165439) {
    if (_0x274485.updatedAt != null && "observers" in _0x274485) {
      Ze(_0x274485, _0x2a83d2);
    } else {
      _0x274485.value = _0x2a83d2;
    }
    _0x274485.updatedAt = _0x165439;
  }
}
function ae(_0x536dde, _0x52ede0, _0x2dae18, _0x4af634 = F, _0x8680a2) {
  const _0x2fe105 = {
    fn: _0x536dde,
    state: _0x4af634,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x52ede0,
    owner: x,
    context: null,
    pure: _0x2dae18
  };
  if (x !== null) {
    if (x !== Ke) {
      if (x.owned) {
        x.owned.push(_0x2fe105);
      } else {
        x.owned = [_0x2fe105];
      }
    }
  }
  return _0x2fe105;
}
function oe(_0x3927d9) {
  if (_0x3927d9.state === 0) {
    return;
  }
  if (_0x3927d9.state === re) {
    return le(_0x3927d9);
  }
  if (_0x3927d9.suspense && T(_0x3927d9.suspense.inFallback)) {
    return _0x3927d9.suspense.effects.push(_0x3927d9);
  }
  const _0x3adaab = [_0x3927d9];
  while ((_0x3927d9 = _0x3927d9.owner) && (!_0x3927d9.updatedAt || _0x3927d9.updatedAt < de)) {
    if (_0x3927d9.state) {
      _0x3adaab.push(_0x3927d9);
    }
  }
  for (let _0x597fe2 = _0x3adaab.length - 1; _0x597fe2 >= 0; _0x597fe2--) {
    _0x3927d9 = _0x3adaab[_0x597fe2];
    if (_0x3927d9.state === F) {
      Y(_0x3927d9);
    } else if (_0x3927d9.state === re) {
      const _0x4c2e79 = I;
      I = null;
      Z(() => le(_0x3927d9, _0x3adaab[0]), false);
      I = _0x4c2e79;
    }
  }
}
function Z(_0x476ba4, _0x1ff37b) {
  if (I) {
    return _0x476ba4();
  }
  let _0xa2d9cf = false;
  if (!_0x1ff37b) {
    I = [];
  }
  if (D) {
    _0xa2d9cf = true;
  } else {
    D = [];
  }
  de++;
  try {
    const _0x226bac = _0x476ba4();
    vt(_0xa2d9cf);
    return _0x226bac;
  } catch (_0x30e9e6) {
    if (!_0xa2d9cf) {
      D = null;
    }
    I = null;
    Ge(_0x30e9e6);
  }
}
function vt(_0x10d1a0) {
  if (I) {
    He(I);
    I = null;
  }
  if (_0x10d1a0) {
    return;
  }
  const _0x43c305 = D;
  D = null;
  if (_0x43c305.length) {
    Z(() => Re(_0x43c305), false);
  }
}
function He(_0x5636f2) {
  for (let _0x2c02c5 = 0; _0x2c02c5 < _0x5636f2.length; _0x2c02c5++) {
    oe(_0x5636f2[_0x2c02c5]);
  }
}
function _t(_0x2d19db) {
  let _0xc88d7b;
  let _0x4a4aa1 = 0;
  for (_0xc88d7b = 0; _0xc88d7b < _0x2d19db.length; _0xc88d7b++) {
    const _0x25ab1d = _0x2d19db[_0xc88d7b];
    if (_0x25ab1d.user) {
      _0x2d19db[_0x4a4aa1++] = _0x25ab1d;
    } else {
      oe(_0x25ab1d);
    }
  }
  for (_0xc88d7b = 0; _0xc88d7b < _0x4a4aa1; _0xc88d7b++) {
    oe(_0x2d19db[_0xc88d7b]);
  }
}
function le(_0x1f28b8, _0x197d79) {
  _0x1f28b8.state = 0;
  for (let _0x54b891 = 0; _0x54b891 < _0x1f28b8.sources.length; _0x54b891 += 1) {
    const _0x556ffb = _0x1f28b8.sources[_0x54b891];
    if (_0x556ffb.sources) {
      const _0x34e28a = _0x556ffb.state;
      if (_0x34e28a === F) {
        if (_0x556ffb !== _0x197d79 && (!_0x556ffb.updatedAt || _0x556ffb.updatedAt < de)) {
          oe(_0x556ffb);
        }
      } else if (_0x34e28a === re) {
        le(_0x556ffb, _0x197d79);
      }
    }
  }
}
function We(_0x16dbbf) {
  for (let _0x1fa3b3 = 0; _0x1fa3b3 < _0x16dbbf.observers.length; _0x1fa3b3 += 1) {
    const _0x49d08d = _0x16dbbf.observers[_0x1fa3b3];
    if (!_0x49d08d.state) {
      _0x49d08d.state = re;
      if (_0x49d08d.pure) {
        I.push(_0x49d08d);
      } else {
        D.push(_0x49d08d);
      }
      if (_0x49d08d.observers) {
        We(_0x49d08d);
      }
    }
  }
}
function ve(_0x4457bb) {
  let _0x2a7bb0;
  if (_0x4457bb.sources) {
    while (_0x4457bb.sources.length) {
      const _0x5a4ad3 = _0x4457bb.sources.pop();
      const _0x1ff1b1 = _0x4457bb.sourceSlots.pop();
      const _0xac9b0d = _0x5a4ad3.observers;
      if (_0xac9b0d && _0xac9b0d.length) {
        const _0x49f6eb = _0xac9b0d.pop();
        const _0x144d45 = _0x5a4ad3.observerSlots.pop();
        if (_0x1ff1b1 < _0xac9b0d.length) {
          _0x49f6eb.sourceSlots[_0x144d45] = _0x1ff1b1;
          _0xac9b0d[_0x1ff1b1] = _0x49f6eb;
          _0x5a4ad3.observerSlots[_0x1ff1b1] = _0x144d45;
        }
      }
    }
  }
  if (_0x4457bb.owned) {
    for (_0x2a7bb0 = _0x4457bb.owned.length - 1; _0x2a7bb0 >= 0; _0x2a7bb0--) {
      ve(_0x4457bb.owned[_0x2a7bb0]);
    }
    _0x4457bb.owned = null;
  }
  if (_0x4457bb.cleanups) {
    for (_0x2a7bb0 = _0x4457bb.cleanups.length - 1; _0x2a7bb0 >= 0; _0x2a7bb0--) {
      _0x4457bb.cleanups[_0x2a7bb0]();
    }
    _0x4457bb.cleanups = null;
  }
  _0x4457bb.state = 0;
  _0x4457bb.context = null;
}
function Ge(_0x1cc0d7) {
  throw _0x1cc0d7;
}
function Xe(_0x266239, _0x3a34cb) {
  if (_0x266239) {
    if (_0x266239.context && _0x266239.context[_0x3a34cb] !== undefined) {
      return _0x266239.context[_0x3a34cb];
    } else {
      return Xe(_0x266239.owner, _0x3a34cb);
    }
  } else {
    return undefined;
  }
}
function be(_0x16317f) {
  if (typeof _0x16317f == "function" && !_0x16317f.length) {
    return be(_0x16317f());
  }
  if (Array.isArray(_0x16317f)) {
    const _0x5f0f00 = [];
    for (let _0x4644f3 = 0; _0x4644f3 < _0x16317f.length; _0x4644f3++) {
      const _0x30bbdb = be(_0x16317f[_0x4644f3]);
      if (Array.isArray(_0x30bbdb)) {
        _0x5f0f00.push.apply(_0x5f0f00, _0x30bbdb);
      } else {
        _0x5f0f00.push(_0x30bbdb);
      }
    }
    return _0x5f0f00;
  }
  return _0x16317f;
}
function ht(_0x46b264, _0xb95716) {
  return function (_0x41d864) {
    let _0x4173e6;
    S(() => _0x4173e6 = T(() => {
      x.context = {
        [_0x46b264]: _0x41d864.value
      };
      return Ue(() => _0x41d864.children);
    }), undefined);
    return _0x4173e6;
  };
}
const $t = Symbol("fallback");
function pe(_0xbef38a) {
  for (let _0x2ec65f = 0; _0x2ec65f < _0xbef38a.length; _0x2ec65f++) {
    _0xbef38a[_0x2ec65f]();
  }
}
function gt(_0x19e827, _0x2779d5, _0x49ba34 = {}) {
  let _0x2d0643 = [];
  let _0x5e2b1b = [];
  let _0x1b30f7 = [];
  let _0x552ebc = 0;
  let _0x34921a = _0x2779d5.length > 1 ? [] : null;
  Qe(() => pe(_0x1b30f7));
  return () => {
    let _0x1bf316 = _0x19e827() || [];
    let _0x15aecd;
    let _0x357739;
    _0x1bf316[Ce];
    return T(() => {
      let _0x577aa4 = _0x1bf316.length;
      let _0x47f002;
      let _0x4eb706;
      let _0x26a5d5;
      let _0x3ed362;
      let _0x3beab9;
      let _0x2dabe0;
      let _0x51f881;
      let _0x2dbaae;
      let _0x5dcfb3;
      if (_0x577aa4 === 0) {
        if (_0x552ebc !== 0) {
          pe(_0x1b30f7);
          _0x1b30f7 = [];
          _0x2d0643 = [];
          _0x5e2b1b = [];
          _0x552ebc = 0;
          _0x34921a &&= [];
        }
        if (_0x49ba34.fallback) {
          _0x2d0643 = [$t];
          _0x5e2b1b[0] = ne(_0x4e9dde => {
            _0x1b30f7[0] = _0x4e9dde;
            return _0x49ba34.fallback();
          });
          _0x552ebc = 1;
        }
      } else if (_0x552ebc === 0) {
        _0x5e2b1b = new Array(_0x577aa4);
        _0x357739 = 0;
        for (; _0x357739 < _0x577aa4; _0x357739++) {
          _0x2d0643[_0x357739] = _0x1bf316[_0x357739];
          _0x5e2b1b[_0x357739] = ne(_0x32aa06);
        }
        _0x552ebc = _0x577aa4;
      } else {
        _0x26a5d5 = new Array(_0x577aa4);
        _0x3ed362 = new Array(_0x577aa4);
        if (_0x34921a) {
          _0x3beab9 = new Array(_0x577aa4);
        }
        _0x2dabe0 = 0;
        _0x51f881 = Math.min(_0x552ebc, _0x577aa4);
        for (; _0x2dabe0 < _0x51f881 && _0x2d0643[_0x2dabe0] === _0x1bf316[_0x2dabe0]; _0x2dabe0++);
        _0x51f881 = _0x552ebc - 1;
        _0x2dbaae = _0x577aa4 - 1;
        for (; _0x51f881 >= _0x2dabe0 && _0x2dbaae >= _0x2dabe0 && _0x2d0643[_0x51f881] === _0x1bf316[_0x2dbaae]; _0x51f881--, _0x2dbaae--) {
          _0x26a5d5[_0x2dbaae] = _0x5e2b1b[_0x51f881];
          _0x3ed362[_0x2dbaae] = _0x1b30f7[_0x51f881];
          if (_0x34921a) {
            _0x3beab9[_0x2dbaae] = _0x34921a[_0x51f881];
          }
        }
        _0x47f002 = new Map();
        _0x4eb706 = new Array(_0x2dbaae + 1);
        _0x357739 = _0x2dbaae;
        for (; _0x357739 >= _0x2dabe0; _0x357739--) {
          _0x5dcfb3 = _0x1bf316[_0x357739];
          _0x15aecd = _0x47f002.get(_0x5dcfb3);
          _0x4eb706[_0x357739] = _0x15aecd === undefined ? -1 : _0x15aecd;
          _0x47f002.set(_0x5dcfb3, _0x357739);
        }
        for (_0x15aecd = _0x2dabe0; _0x15aecd <= _0x51f881; _0x15aecd++) {
          _0x5dcfb3 = _0x2d0643[_0x15aecd];
          _0x357739 = _0x47f002.get(_0x5dcfb3);
          if (_0x357739 !== undefined && _0x357739 !== -1) {
            _0x26a5d5[_0x357739] = _0x5e2b1b[_0x15aecd];
            _0x3ed362[_0x357739] = _0x1b30f7[_0x15aecd];
            if (_0x34921a) {
              _0x3beab9[_0x357739] = _0x34921a[_0x15aecd];
            }
            _0x357739 = _0x4eb706[_0x357739];
            _0x47f002.set(_0x5dcfb3, _0x357739);
          } else {
            _0x1b30f7[_0x15aecd]();
          }
        }
        for (_0x357739 = _0x2dabe0; _0x357739 < _0x577aa4; _0x357739++) {
          if (_0x357739 in _0x26a5d5) {
            _0x5e2b1b[_0x357739] = _0x26a5d5[_0x357739];
            _0x1b30f7[_0x357739] = _0x3ed362[_0x357739];
            if (_0x34921a) {
              _0x34921a[_0x357739] = _0x3beab9[_0x357739];
              _0x34921a[_0x357739](_0x357739);
            }
          } else {
            _0x5e2b1b[_0x357739] = ne(_0x32aa06);
          }
        }
        _0x5e2b1b = _0x5e2b1b.slice(0, _0x552ebc = _0x577aa4);
        _0x2d0643 = _0x1bf316.slice(0);
      }
      return _0x5e2b1b;
    });
    function _0x32aa06(_0x3704f7) {
      _0x1b30f7[_0x357739] = _0x3704f7;
      if (_0x34921a) {
        const [_0x1fe1a3, _0xb14de3] = V(_0x357739);
        _0x34921a[_0x357739] = _0xb14de3;
        return _0x2779d5(_0x1bf316[_0x357739], _0x1fe1a3);
      }
      return _0x2779d5(_0x1bf316[_0x357739]);
    }
  };
}
function L(_0x4b17f0, _0x494776) {
  return T(() => _0x4b17f0(_0x494776 || {}));
}
const Ye = _0xbe8aab => "Stale read from <" + _0xbe8aab + ">.";
function ce(_0x4e5866) {
  const _0x205468 = "fallback" in _0x4e5866 && {
    fallback: () => _0x4e5866.fallback
  };
  return N(gt(() => _0x4e5866.each, _0x4e5866.children, _0x205468 || undefined));
}
function fe(_0x3fc65d) {
  const _0x475d11 = _0x3fc65d.keyed;
  const _0xdd3d3a = N(() => _0x3fc65d.when, undefined, {
    equals: (_0x4aab40, _0x1d6cb0) => _0x475d11 ? _0x4aab40 === _0x1d6cb0 : !_0x4aab40 == !_0x1d6cb0
  });
  return N(() => {
    const _0x4b34b0 = _0xdd3d3a();
    if (_0x4b34b0) {
      const _0x119e82 = _0x3fc65d.children;
      if (typeof _0x119e82 == "function" && _0x119e82.length > 0) {
        return T(() => _0x119e82(_0x475d11 ? _0x4b34b0 : () => {
          if (!T(_0xdd3d3a)) {
            throw Ye("Show");
          }
          return _0x3fc65d.when;
        }));
      } else {
        return _0x119e82;
      }
    }
    return _0x3fc65d.fallback;
  }, undefined, undefined);
}
function Ct(_0x4ac4e2) {
  let _0x521211 = false;
  const _0x3673dc = (_0x2d42b5, _0x452188) => _0x2d42b5[0] === _0x452188[0] && (_0x521211 ? _0x2d42b5[1] === _0x452188[1] : !_0x2d42b5[1] == !_0x452188[1]) && _0x2d42b5[2] === _0x452188[2];
  const _0x2edf2b = Ue(() => _0x4ac4e2.children);
  const _0x2568fb = N(() => {
    let _0x27ac0a = _0x2edf2b();
    if (!Array.isArray(_0x27ac0a)) {
      _0x27ac0a = [_0x27ac0a];
    }
    for (let _0xd08198 = 0; _0xd08198 < _0x27ac0a.length; _0xd08198++) {
      const _0x5573e0 = _0x27ac0a[_0xd08198].when;
      if (_0x5573e0) {
        _0x521211 = !!_0x27ac0a[_0xd08198].keyed;
        return [_0xd08198, _0x5573e0, _0x27ac0a[_0xd08198]];
      }
    }
    return [-1];
  }, undefined, {
    equals: _0x3673dc
  });
  return N(() => {
    const [_0x39e316, _0x4ae33f, _0x59062b] = _0x2568fb();
    if (_0x39e316 < 0) {
      return _0x4ac4e2.fallback;
    }
    const _0x5b0226 = _0x59062b.children;
    if (typeof _0x5b0226 == "function" && _0x5b0226.length > 0) {
      return T(() => _0x5b0226(_0x521211 ? _0x4ae33f : () => {
        if (T(_0x2568fb)[0] !== _0x39e316) {
          throw Ye("Match");
        }
        return _0x59062b.when;
      }));
    } else {
      return _0x5b0226;
    }
  }, undefined, undefined);
}
function Te(_0x131296) {
  return _0x131296;
}
function yt(_0x4469a0, _0x1e97b4, _0x4be88a) {
  let _0x48cea3 = _0x4be88a.length;
  let _0x425e3f = _0x1e97b4.length;
  let _0x4fb9e1 = _0x48cea3;
  let _0x28311e = 0;
  let _0x1775d1 = 0;
  let _0x50aba5 = _0x1e97b4[_0x425e3f - 1].nextSibling;
  let _0x3db561 = null;
  while (_0x28311e < _0x425e3f || _0x1775d1 < _0x4fb9e1) {
    if (_0x1e97b4[_0x28311e] === _0x4be88a[_0x1775d1]) {
      _0x28311e++;
      _0x1775d1++;
      continue;
    }
    while (_0x1e97b4[_0x425e3f - 1] === _0x4be88a[_0x4fb9e1 - 1]) {
      _0x425e3f--;
      _0x4fb9e1--;
    }
    if (_0x425e3f === _0x28311e) {
      const _0x40a8d8 = _0x4fb9e1 < _0x48cea3 ? _0x1775d1 ? _0x4be88a[_0x1775d1 - 1].nextSibling : _0x4be88a[_0x4fb9e1 - _0x1775d1] : _0x50aba5;
      while (_0x1775d1 < _0x4fb9e1) {
        _0x4469a0.insertBefore(_0x4be88a[_0x1775d1++], _0x40a8d8);
      }
    } else if (_0x4fb9e1 === _0x1775d1) {
      while (_0x28311e < _0x425e3f) {
        if (!_0x3db561 || !_0x3db561.has(_0x1e97b4[_0x28311e])) {
          _0x1e97b4[_0x28311e].remove();
        }
        _0x28311e++;
      }
    } else if (_0x1e97b4[_0x28311e] === _0x4be88a[_0x4fb9e1 - 1] && _0x4be88a[_0x1775d1] === _0x1e97b4[_0x425e3f - 1]) {
      const _0x565f7f = _0x1e97b4[--_0x425e3f].nextSibling;
      _0x4469a0.insertBefore(_0x4be88a[_0x1775d1++], _0x1e97b4[_0x28311e++].nextSibling);
      _0x4469a0.insertBefore(_0x4be88a[--_0x4fb9e1], _0x565f7f);
      _0x1e97b4[_0x425e3f] = _0x4be88a[_0x4fb9e1];
    } else {
      if (!_0x3db561) {
        _0x3db561 = new Map();
        let _0x1ec80f = _0x1775d1;
        while (_0x1ec80f < _0x4fb9e1) {
          _0x3db561.set(_0x4be88a[_0x1ec80f], _0x1ec80f++);
        }
      }
      const _0x3b2b94 = _0x3db561.get(_0x1e97b4[_0x28311e]);
      if (_0x3b2b94 != null) {
        if (_0x1775d1 < _0x3b2b94 && _0x3b2b94 < _0x4fb9e1) {
          let _0x4c16d6 = _0x28311e;
          let _0x3028b1 = 1;
          let _0x2947cc;
          while (++_0x4c16d6 < _0x425e3f && _0x4c16d6 < _0x4fb9e1 && (_0x2947cc = _0x3db561.get(_0x1e97b4[_0x4c16d6])) != null && _0x2947cc === _0x3b2b94 + _0x3028b1) {
            _0x3028b1++;
          }
          if (_0x3028b1 > _0x3b2b94 - _0x1775d1) {
            const _0xad2a91 = _0x1e97b4[_0x28311e];
            while (_0x1775d1 < _0x3b2b94) {
              _0x4469a0.insertBefore(_0x4be88a[_0x1775d1++], _0xad2a91);
            }
          } else {
            _0x4469a0.replaceChild(_0x4be88a[_0x1775d1++], _0x1e97b4[_0x28311e++]);
          }
        } else {
          _0x28311e++;
        }
      } else {
        _0x1e97b4[_0x28311e++].remove();
      }
    }
  }
}
const Ee = "_$DX_DELEGATE";
function bt(_0x462577, _0x2b8c78, _0x55f775, _0x4f5c28 = {}) {
  let _0x3a29e1;
  ne(_0x5b7c8a => {
    _0x3a29e1 = _0x5b7c8a;
    if (_0x2b8c78 === document) {
      _0x462577();
    } else {
      b(_0x2b8c78, _0x462577(), _0x2b8c78.firstChild ? null : undefined, _0x55f775);
    }
  }, _0x4f5c28.owner);
  return () => {
    _0x3a29e1();
    _0x2b8c78.textContent = "";
  };
}
function E(_0x110fa5, _0x2ee905, _0x227386) {
  let _0x861030;
  const _0x171eb6 = () => {
    const _0xd3b9d = document.createElement("template");
    _0xd3b9d.innerHTML = _0x110fa5;
    if (_0x227386) {
      return _0xd3b9d.content.firstChild.firstChild;
    } else {
      return _0xd3b9d.content.firstChild;
    }
  };
  const _0x330654 = _0x2ee905 ? () => T(() => document.importNode(_0x861030 ||= _0x171eb6(), true)) : () => (_0x861030 ||= _0x171eb6()).cloneNode(true);
  _0x330654.cloneNode = _0x330654;
  return _0x330654;
}
function ke(_0x30746a, _0x57a797 = window.document) {
  const _0x27be43 = _0x57a797[Ee] ||= new Set();
  for (let _0x4dae12 = 0, _0x463344 = _0x30746a.length; _0x4dae12 < _0x463344; _0x4dae12++) {
    const _0x3ac616 = _0x30746a[_0x4dae12];
    if (!_0x27be43.has(_0x3ac616)) {
      _0x27be43.add(_0x3ac616);
      _0x57a797.addEventListener(_0x3ac616, mt);
    }
  }
}
function Oe(_0xfb5896, _0x39d0c5, _0x4eaeeb) {
  if (_0x4eaeeb == null) {
    _0xfb5896.removeAttribute(_0x39d0c5);
  } else {
    _0xfb5896.setAttribute(_0x39d0c5, _0x4eaeeb);
  }
}
function $(_0x3a19bc, _0x1fc7db) {
  if (_0x1fc7db == null) {
    _0x3a19bc.removeAttribute("class");
  } else {
    _0x3a19bc.className = _0x1fc7db;
  }
}
function Pe(_0x4c643c, _0x6d3e86, _0x22ca75 = {}) {
  const _0x3d0d3b = Object.keys(_0x6d3e86 || {});
  const _0x5491a0 = Object.keys(_0x22ca75);
  let _0x4b39c2;
  let _0x20b69d;
  _0x4b39c2 = 0;
  _0x20b69d = _0x5491a0.length;
  for (; _0x4b39c2 < _0x20b69d; _0x4b39c2++) {
    const _0x512334 = _0x5491a0[_0x4b39c2];
    if (!!_0x512334 && _0x512334 !== "undefined" && !_0x6d3e86[_0x512334]) {
      je(_0x4c643c, _0x512334, false);
      delete _0x22ca75[_0x512334];
    }
  }
  _0x4b39c2 = 0;
  _0x20b69d = _0x3d0d3b.length;
  for (; _0x4b39c2 < _0x20b69d; _0x4b39c2++) {
    const _0x413945 = _0x3d0d3b[_0x4b39c2];
    const _0x109fae = !!_0x6d3e86[_0x413945];
    if (!!_0x413945 && _0x413945 !== "undefined" && _0x22ca75[_0x413945] !== _0x109fae && !!_0x109fae) {
      je(_0x4c643c, _0x413945, true);
      _0x22ca75[_0x413945] = _0x109fae;
    }
  }
  return _0x22ca75;
}
function b(_0x247fc0, _0xe7b2ed, _0x1a5b81, _0x1f1d3c) {
  if (_0x1a5b81 !== undefined && !_0x1f1d3c) {
    _0x1f1d3c = [];
  }
  if (typeof _0xe7b2ed != "function") {
    return ue(_0x247fc0, _0xe7b2ed, _0x1f1d3c, _0x1a5b81);
  }
  S(_0x5aa747 => ue(_0x247fc0, _0xe7b2ed(), _0x5aa747, _0x1a5b81), _0x1f1d3c);
}
function je(_0xdd94e4, _0x489185, _0x206192) {
  const _0x14422e = _0x489185.trim().split(/\s+/);
  for (let _0x590e43 = 0, _0x16a3c9 = _0x14422e.length; _0x590e43 < _0x16a3c9; _0x590e43++) {
    _0xdd94e4.classList.toggle(_0x14422e[_0x590e43], _0x206192);
  }
}
function mt(_0x5af215) {
  const _0x4b6f07 = "$$" + _0x5af215.type;
  let _0x5e3720 = _0x5af215.composedPath && _0x5af215.composedPath()[0] || _0x5af215.target;
  if (_0x5af215.target !== _0x5e3720) {
    Object.defineProperty(_0x5af215, "target", {
      configurable: true,
      value: _0x5e3720
    });
  }
  Object.defineProperty(_0x5af215, "currentTarget", {
    configurable: true,
    get() {
      return _0x5e3720 || document;
    }
  });
  while (_0x5e3720) {
    const _0x1036c5 = _0x5e3720[_0x4b6f07];
    if (_0x1036c5 && !_0x5e3720.disabled) {
      const _0x3ddfec = _0x5e3720[_0x4b6f07 + "Data"];
      if (_0x3ddfec !== undefined) {
        _0x1036c5.call(_0x5e3720, _0x3ddfec, _0x5af215);
      } else {
        _0x1036c5.call(_0x5e3720, _0x5af215);
      }
      if (_0x5af215.cancelBubble) {
        return;
      }
    }
    _0x5e3720 = _0x5e3720._$host || _0x5e3720.parentNode || _0x5e3720.host;
  }
}
function ue(_0x5ef8c7, _0x20b0f9, _0x2fefe1, _0x3eeae4, _0x415259) {
  while (typeof _0x2fefe1 == "function") {
    _0x2fefe1 = _0x2fefe1();
  }
  if (_0x20b0f9 === _0x2fefe1) {
    return _0x2fefe1;
  }
  const _0x33027a = typeof _0x20b0f9;
  const _0x5b423e = _0x3eeae4 !== undefined;
  _0x5ef8c7 = _0x5b423e && _0x2fefe1[0] && _0x2fefe1[0].parentNode || _0x5ef8c7;
  if (_0x33027a === "string" || _0x33027a === "number") {
    if (_0x33027a === "number") {
      _0x20b0f9 = _0x20b0f9.toString();
    }
    if (_0x5b423e) {
      let _0x31a6df = _0x2fefe1[0];
      if (_0x31a6df && _0x31a6df.nodeType === 3) {
        _0x31a6df.data = _0x20b0f9;
      } else {
        _0x31a6df = document.createTextNode(_0x20b0f9);
      }
      _0x2fefe1 = H(_0x5ef8c7, _0x2fefe1, _0x3eeae4, _0x31a6df);
    } else if (_0x2fefe1 !== "" && typeof _0x2fefe1 == "string") {
      _0x2fefe1 = _0x5ef8c7.firstChild.data = _0x20b0f9;
    } else {
      _0x2fefe1 = _0x5ef8c7.textContent = _0x20b0f9;
    }
  } else if (_0x20b0f9 == null || _0x33027a === "boolean") {
    _0x2fefe1 = H(_0x5ef8c7, _0x2fefe1, _0x3eeae4);
  } else {
    if (_0x33027a === "function") {
      S(() => {
        let _0x3e76c2 = _0x20b0f9();
        while (typeof _0x3e76c2 == "function") {
          _0x3e76c2 = _0x3e76c2();
        }
        _0x2fefe1 = ue(_0x5ef8c7, _0x3e76c2, _0x2fefe1, _0x3eeae4);
      });
      return () => _0x2fefe1;
    }
    if (Array.isArray(_0x20b0f9)) {
      const _0x2a72fd = [];
      const _0x400be0 = _0x2fefe1 && Array.isArray(_0x2fefe1);
      if (me(_0x2a72fd, _0x20b0f9, _0x2fefe1, _0x415259)) {
        S(() => _0x2fefe1 = ue(_0x5ef8c7, _0x2a72fd, _0x2fefe1, _0x3eeae4, true));
        return () => _0x2fefe1;
      }
      if (_0x2a72fd.length === 0) {
        _0x2fefe1 = H(_0x5ef8c7, _0x2fefe1, _0x3eeae4);
        if (_0x5b423e) {
          return _0x2fefe1;
        }
      } else if (_0x400be0) {
        if (_0x2fefe1.length === 0) {
          Ne(_0x5ef8c7, _0x2a72fd, _0x3eeae4);
        } else {
          yt(_0x5ef8c7, _0x2fefe1, _0x2a72fd);
        }
      } else {
        if (_0x2fefe1) {
          H(_0x5ef8c7);
        }
        Ne(_0x5ef8c7, _0x2a72fd);
      }
      _0x2fefe1 = _0x2a72fd;
    } else if (_0x20b0f9.nodeType) {
      if (Array.isArray(_0x2fefe1)) {
        if (_0x5b423e) {
          return _0x2fefe1 = H(_0x5ef8c7, _0x2fefe1, _0x3eeae4, _0x20b0f9);
        }
        H(_0x5ef8c7, _0x2fefe1, null, _0x20b0f9);
      } else if (_0x2fefe1 == null || _0x2fefe1 === "" || !_0x5ef8c7.firstChild) {
        _0x5ef8c7.appendChild(_0x20b0f9);
      } else {
        _0x5ef8c7.replaceChild(_0x20b0f9, _0x5ef8c7.firstChild);
      }
      _0x2fefe1 = _0x20b0f9;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x20b0f9);
    }
  }
  return _0x2fefe1;
}
function me(_0x28214f, _0x17c0d2, _0x65cac, _0x18b078) {
  let _0x21cc95 = false;
  for (let _0x25fbdd = 0, _0x640878 = _0x17c0d2.length; _0x25fbdd < _0x640878; _0x25fbdd++) {
    let _0x1de95a = _0x17c0d2[_0x25fbdd];
    let _0x42c9be = _0x65cac && _0x65cac[_0x25fbdd];
    let _0x376eaa;
    if (_0x1de95a != null && _0x1de95a !== true && _0x1de95a !== false) {
      if ((_0x376eaa = typeof _0x1de95a) == "object" && _0x1de95a.nodeType) {
        _0x28214f.push(_0x1de95a);
      } else if (Array.isArray(_0x1de95a)) {
        _0x21cc95 = me(_0x28214f, _0x1de95a, _0x42c9be) || _0x21cc95;
      } else if (_0x376eaa === "function") {
        if (_0x18b078) {
          while (typeof _0x1de95a == "function") {
            _0x1de95a = _0x1de95a();
          }
          _0x21cc95 = me(_0x28214f, Array.isArray(_0x1de95a) ? _0x1de95a : [_0x1de95a], Array.isArray(_0x42c9be) ? _0x42c9be : [_0x42c9be]) || _0x21cc95;
        } else {
          _0x28214f.push(_0x1de95a);
          _0x21cc95 = true;
        }
      } else {
        const _0x5aceb3 = String(_0x1de95a);
        if (_0x42c9be && _0x42c9be.nodeType === 3 && _0x42c9be.data === _0x5aceb3) {
          _0x28214f.push(_0x42c9be);
        } else {
          _0x28214f.push(document.createTextNode(_0x5aceb3));
        }
      }
    }
  }
  return _0x21cc95;
}
function Ne(_0x493d53, _0xafde4f, _0x45b3c8 = null) {
  for (let _0x5f3c5e = 0, _0x2bf07d = _0xafde4f.length; _0x5f3c5e < _0x2bf07d; _0x5f3c5e++) {
    _0x493d53.insertBefore(_0xafde4f[_0x5f3c5e], _0x45b3c8);
  }
}
function H(_0xf6e503, _0x5aeeec, _0x15f22f, _0xbb8355) {
  if (_0x15f22f === undefined) {
    return _0xf6e503.textContent = "";
  }
  const _0x4efdaa = _0xbb8355 || document.createTextNode("");
  if (_0x5aeeec.length) {
    let _0x414737 = false;
    for (let _0x46615a = _0x5aeeec.length - 1; _0x46615a >= 0; _0x46615a--) {
      const _0x103cea = _0x5aeeec[_0x46615a];
      if (_0x4efdaa !== _0x103cea) {
        const _0x4b72d3 = _0x103cea.parentNode === _0xf6e503;
        if (!_0x414737 && !_0x46615a) {
          if (_0x4b72d3) {
            _0xf6e503.replaceChild(_0x4efdaa, _0x103cea);
          } else {
            _0xf6e503.insertBefore(_0x4efdaa, _0x15f22f);
          }
        } else if (_0x4b72d3) {
          _0x103cea.remove();
        }
      } else {
        _0x414737 = true;
      }
    }
  } else {
    _0xf6e503.insertBefore(_0x4efdaa, _0x15f22f);
  }
  return [_0x4efdaa];
}
const we = Symbol("store-raw");
const ee = Symbol("store-node");
function Je(_0x101fba) {
  let _0x2165a8 = _0x101fba[U];
  if (!_0x2165a8 && (Object.defineProperty(_0x101fba, U, {
    value: _0x2165a8 = new Proxy(_0x101fba, Lt)
  }), !Array.isArray(_0x101fba))) {
    const _0x5150d4 = Object.keys(_0x101fba);
    const _0x423f87 = Object.getOwnPropertyDescriptors(_0x101fba);
    for (let _0x45a046 = 0, _0x4d0a79 = _0x5150d4.length; _0x45a046 < _0x4d0a79; _0x45a046++) {
      const _0xfdeb69 = _0x5150d4[_0x45a046];
      if (_0x423f87[_0xfdeb69].get) {
        Object.defineProperty(_0x101fba, _0xfdeb69, {
          enumerable: _0x423f87[_0xfdeb69].enumerable,
          get: _0x423f87[_0xfdeb69].get.bind(_0x2165a8)
        });
      }
    }
  }
  return _0x2165a8;
}
function Q(_0x24f985) {
  let _0x332f8b;
  return _0x24f985 != null && typeof _0x24f985 == "object" && (_0x24f985[U] || !(_0x332f8b = Object.getPrototypeOf(_0x24f985)) || _0x332f8b === Object.prototype || Array.isArray(_0x24f985));
}
function X(_0x37a128, _0x318d32 = new Set()) {
  let _0x3baad1;
  let _0x486819;
  let _0x539926;
  let _0x35dea1;
  if (_0x3baad1 = _0x37a128 != null && _0x37a128[we]) {
    return _0x3baad1;
  }
  if (!Q(_0x37a128) || _0x318d32.has(_0x37a128)) {
    return _0x37a128;
  }
  if (Array.isArray(_0x37a128)) {
    if (Object.isFrozen(_0x37a128)) {
      _0x37a128 = _0x37a128.slice(0);
    } else {
      _0x318d32.add(_0x37a128);
    }
    for (let _0x3ce34b = 0, _0x16fcc5 = _0x37a128.length; _0x3ce34b < _0x16fcc5; _0x3ce34b++) {
      _0x539926 = _0x37a128[_0x3ce34b];
      if ((_0x486819 = X(_0x539926, _0x318d32)) !== _0x539926) {
        _0x37a128[_0x3ce34b] = _0x486819;
      }
    }
  } else {
    if (Object.isFrozen(_0x37a128)) {
      _0x37a128 = Object.assign({}, _0x37a128);
    } else {
      _0x318d32.add(_0x37a128);
    }
    const _0x399711 = Object.keys(_0x37a128);
    const _0x44e1b8 = Object.getOwnPropertyDescriptors(_0x37a128);
    for (let _0x4781d9 = 0, _0xf97a69 = _0x399711.length; _0x4781d9 < _0xf97a69; _0x4781d9++) {
      _0x35dea1 = _0x399711[_0x4781d9];
      if (!_0x44e1b8[_0x35dea1].get) {
        _0x539926 = _0x37a128[_0x35dea1];
        if ((_0x486819 = X(_0x539926, _0x318d32)) !== _0x539926) {
          _0x37a128[_0x35dea1] = _0x486819;
        }
      }
    }
  }
  return _0x37a128;
}
function Ie(_0x332b2f) {
  let _0x759d48 = _0x332b2f[ee];
  if (!_0x759d48) {
    Object.defineProperty(_0x332b2f, ee, {
      value: _0x759d48 = Object.create(null)
    });
  }
  return _0x759d48;
}
function xe(_0x42cc48, _0x3361af, _0x347476) {
  return _0x42cc48[_0x3361af] ||= et(_0x347476);
}
function wt(_0x4fc3eb, _0x13b2c3) {
  const _0x2d21de = Reflect.getOwnPropertyDescriptor(_0x4fc3eb, _0x13b2c3);
  if (!!_0x2d21de && !_0x2d21de.get && !!_0x2d21de.configurable && _0x13b2c3 !== U && _0x13b2c3 !== ee) {
    delete _0x2d21de.value;
    delete _0x2d21de.writable;
    _0x2d21de.get = () => _0x4fc3eb[U][_0x13b2c3];
  }
  return _0x2d21de;
}
function ze(_0x1f5584) {
  if (qe()) {
    const _0x1957c5 = Ie(_0x1f5584);
    (_0x1957c5._ ||= et())();
  }
}
function xt(_0x21f017) {
  ze(_0x21f017);
  return Reflect.ownKeys(_0x21f017);
}
function et(_0x33bf9e) {
  const [_0x17218b, _0x304d38] = V(_0x33bf9e, {
    equals: false,
    internal: true
  });
  _0x17218b.$ = _0x304d38;
  return _0x17218b;
}
const Lt = {
  get(_0x31aab6, _0x3c5dd4, _0x159308) {
    if (_0x3c5dd4 === we) {
      return _0x31aab6;
    }
    if (_0x3c5dd4 === U) {
      return _0x159308;
    }
    if (_0x3c5dd4 === Ce) {
      ze(_0x31aab6);
      return _0x159308;
    }
    const _0x28f25d = Ie(_0x31aab6);
    const _0xbf1ae9 = _0x28f25d[_0x3c5dd4];
    let _0xe3df9c = _0xbf1ae9 ? _0xbf1ae9() : _0x31aab6[_0x3c5dd4];
    if (_0x3c5dd4 === ee || _0x3c5dd4 === "__proto__") {
      return _0xe3df9c;
    }
    if (!_0xbf1ae9) {
      const _0xac8fbd = Object.getOwnPropertyDescriptor(_0x31aab6, _0x3c5dd4);
      if (qe() && (typeof _0xe3df9c != "function" || _0x31aab6.hasOwnProperty(_0x3c5dd4)) && (!_0xac8fbd || !_0xac8fbd.get)) {
        _0xe3df9c = xe(_0x28f25d, _0x3c5dd4, _0xe3df9c)();
      }
    }
    if (Q(_0xe3df9c)) {
      return Je(_0xe3df9c);
    } else {
      return _0xe3df9c;
    }
  },
  has(_0x42ae41, _0x482a7d) {
    if (_0x482a7d === we || _0x482a7d === U || _0x482a7d === Ce || _0x482a7d === ee || _0x482a7d === "__proto__") {
      return true;
    } else {
      this.get(_0x42ae41, _0x482a7d, _0x42ae41);
      return _0x482a7d in _0x42ae41;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: xt,
  getOwnPropertyDescriptor: wt
};
function P(_0x408555, _0x53a8ed, _0x2d1658, _0x37c311 = false) {
  if (!_0x37c311 && _0x408555[_0x53a8ed] === _0x2d1658) {
    return;
  }
  const _0x255e85 = _0x408555[_0x53a8ed];
  const _0x6f6eb2 = _0x408555.length;
  if (_0x2d1658 === undefined) {
    delete _0x408555[_0x53a8ed];
  } else {
    _0x408555[_0x53a8ed] = _0x2d1658;
  }
  let _0xd46814 = Ie(_0x408555);
  let _0x2df17b;
  if (_0x2df17b = xe(_0xd46814, _0x53a8ed, _0x255e85)) {
    _0x2df17b.$(() => _0x2d1658);
  }
  if (Array.isArray(_0x408555) && _0x408555.length !== _0x6f6eb2) {
    for (let _0x3d3eec = _0x408555.length; _0x3d3eec < _0x6f6eb2; _0x3d3eec++) {
      if (_0x2df17b = _0xd46814[_0x3d3eec]) {
        _0x2df17b.$();
      }
    }
    if (_0x2df17b = xe(_0xd46814, "length", _0x6f6eb2)) {
      _0x2df17b.$(_0x408555.length);
    }
  }
  if (_0x2df17b = _0xd46814._) {
    _0x2df17b.$();
  }
}
function tt(_0x28c439, _0x2da346) {
  const _0x2eab7e = Object.keys(_0x2da346);
  for (let _0x440968 = 0; _0x440968 < _0x2eab7e.length; _0x440968 += 1) {
    const _0x45f227 = _0x2eab7e[_0x440968];
    P(_0x28c439, _0x45f227, _0x2da346[_0x45f227]);
  }
}
function At(_0x2dc64b, _0x3a287c) {
  if (typeof _0x3a287c == "function") {
    _0x3a287c = _0x3a287c(_0x2dc64b);
  }
  _0x3a287c = X(_0x3a287c);
  if (Array.isArray(_0x3a287c)) {
    if (_0x2dc64b === _0x3a287c) {
      return;
    }
    let _0x499621 = 0;
    let _0x38dc03 = _0x3a287c.length;
    for (; _0x499621 < _0x38dc03; _0x499621++) {
      const _0x453405 = _0x3a287c[_0x499621];
      if (_0x2dc64b[_0x499621] !== _0x453405) {
        P(_0x2dc64b, _0x499621, _0x453405);
      }
    }
    P(_0x2dc64b, "length", _0x38dc03);
  } else {
    tt(_0x2dc64b, _0x3a287c);
  }
}
function z(_0x41ff68, _0x1e69ab, _0x278d8f = []) {
  let _0x12fad0;
  let _0x4831df = _0x41ff68;
  if (_0x1e69ab.length > 1) {
    _0x12fad0 = _0x1e69ab.shift();
    const _0x2f0060 = typeof _0x12fad0;
    const _0x4239e8 = Array.isArray(_0x41ff68);
    if (Array.isArray(_0x12fad0)) {
      for (let _0x5c3707 = 0; _0x5c3707 < _0x12fad0.length; _0x5c3707++) {
        z(_0x41ff68, [_0x12fad0[_0x5c3707]].concat(_0x1e69ab), _0x278d8f);
      }
      return;
    } else if (_0x4239e8 && _0x2f0060 === "function") {
      for (let _0x48282c = 0; _0x48282c < _0x41ff68.length; _0x48282c++) {
        if (_0x12fad0(_0x41ff68[_0x48282c], _0x48282c)) {
          z(_0x41ff68, [_0x48282c].concat(_0x1e69ab), _0x278d8f);
        }
      }
      return;
    } else if (_0x4239e8 && _0x2f0060 === "object") {
      const {
        from: _0x3593ca = 0,
        to: _0x10bfd5 = _0x41ff68.length - 1,
        by: _0x5575d1 = 1
      } = _0x12fad0;
      for (let _0x9fb96 = _0x3593ca; _0x9fb96 <= _0x10bfd5; _0x9fb96 += _0x5575d1) {
        z(_0x41ff68, [_0x9fb96].concat(_0x1e69ab), _0x278d8f);
      }
      return;
    } else if (_0x1e69ab.length > 1) {
      z(_0x41ff68[_0x12fad0], _0x1e69ab, [_0x12fad0].concat(_0x278d8f));
      return;
    }
    _0x4831df = _0x41ff68[_0x12fad0];
    _0x278d8f = [_0x12fad0].concat(_0x278d8f);
  }
  let _0x51befd = _0x1e69ab[0];
  if ((typeof _0x51befd != "function" || !(_0x51befd = _0x51befd(_0x4831df, _0x278d8f), _0x51befd === _0x4831df)) && (_0x12fad0 !== undefined || _0x51befd != null)) {
    _0x51befd = X(_0x51befd);
    if (_0x12fad0 === undefined || Q(_0x4831df) && Q(_0x51befd) && !Array.isArray(_0x51befd)) {
      tt(_0x4831df, _0x51befd);
    } else {
      P(_0x41ff68, _0x12fad0, _0x51befd);
    }
  }
}
function $e(...[_0x4a96c2, _0x5db64e]) {
  const _0x47e148 = X(_0x4a96c2 || {});
  const _0x265a20 = Array.isArray(_0x47e148);
  const _0x45986f = Je(_0x47e148);
  function _0x1c2ca5(..._0x1fd315) {
    ye(() => {
      if (_0x265a20 && _0x1fd315.length === 1) {
        At(_0x47e148, _0x1fd315[0]);
      } else {
        z(_0x47e148, _0x1fd315);
      }
    });
  }
  return [_0x45986f, _0x1c2ca5];
}
const Le = Symbol("store-root");
function W(_0x343742, _0x15f513, _0x1ce0da, _0x445072, _0x4a45a1) {
  const _0x3bc0df = _0x15f513[_0x1ce0da];
  if (_0x343742 === _0x3bc0df) {
    return;
  }
  if (_0x1ce0da !== Le && (!Q(_0x343742) || !Q(_0x3bc0df) || _0x4a45a1 && _0x343742[_0x4a45a1] !== _0x3bc0df[_0x4a45a1])) {
    P(_0x15f513, _0x1ce0da, _0x343742);
    return;
  }
  if (Array.isArray(_0x343742)) {
    if (_0x343742.length && _0x3bc0df.length && (!_0x445072 || _0x4a45a1 && _0x343742[0] && _0x343742[0][_0x4a45a1] != null)) {
      let _0x352752;
      let _0x375181;
      let _0x260750;
      let _0x33f7f4;
      let _0x5ad165;
      let _0x3c6b68;
      let _0x99b46;
      let _0x28f0c2;
      _0x260750 = 0;
      _0x33f7f4 = Math.min(_0x3bc0df.length, _0x343742.length);
      for (; _0x260750 < _0x33f7f4 && (_0x3bc0df[_0x260750] === _0x343742[_0x260750] || _0x4a45a1 && _0x3bc0df[_0x260750] && _0x343742[_0x260750] && _0x3bc0df[_0x260750][_0x4a45a1] === _0x343742[_0x260750][_0x4a45a1]); _0x260750++) {
        W(_0x343742[_0x260750], _0x3bc0df, _0x260750, _0x445072, _0x4a45a1);
      }
      const _0x3213f0 = new Array(_0x343742.length);
      const _0x52c2b0 = new Map();
      _0x33f7f4 = _0x3bc0df.length - 1;
      _0x5ad165 = _0x343742.length - 1;
      for (; _0x33f7f4 >= _0x260750 && _0x5ad165 >= _0x260750 && (_0x3bc0df[_0x33f7f4] === _0x343742[_0x5ad165] || _0x4a45a1 && _0x3bc0df[_0x260750] && _0x343742[_0x260750] && _0x3bc0df[_0x33f7f4][_0x4a45a1] === _0x343742[_0x5ad165][_0x4a45a1]); _0x33f7f4--, _0x5ad165--) {
        _0x3213f0[_0x5ad165] = _0x3bc0df[_0x33f7f4];
      }
      if (_0x260750 > _0x5ad165 || _0x260750 > _0x33f7f4) {
        for (_0x375181 = _0x260750; _0x375181 <= _0x5ad165; _0x375181++) {
          P(_0x3bc0df, _0x375181, _0x343742[_0x375181]);
        }
        for (; _0x375181 < _0x343742.length; _0x375181++) {
          P(_0x3bc0df, _0x375181, _0x3213f0[_0x375181]);
          W(_0x343742[_0x375181], _0x3bc0df, _0x375181, _0x445072, _0x4a45a1);
        }
        if (_0x3bc0df.length > _0x343742.length) {
          P(_0x3bc0df, "length", _0x343742.length);
        }
        return;
      }
      _0x99b46 = new Array(_0x5ad165 + 1);
      _0x375181 = _0x5ad165;
      for (; _0x375181 >= _0x260750; _0x375181--) {
        _0x3c6b68 = _0x343742[_0x375181];
        _0x28f0c2 = _0x4a45a1 && _0x3c6b68 ? _0x3c6b68[_0x4a45a1] : _0x3c6b68;
        _0x352752 = _0x52c2b0.get(_0x28f0c2);
        _0x99b46[_0x375181] = _0x352752 === undefined ? -1 : _0x352752;
        _0x52c2b0.set(_0x28f0c2, _0x375181);
      }
      for (_0x352752 = _0x260750; _0x352752 <= _0x33f7f4; _0x352752++) {
        _0x3c6b68 = _0x3bc0df[_0x352752];
        _0x28f0c2 = _0x4a45a1 && _0x3c6b68 ? _0x3c6b68[_0x4a45a1] : _0x3c6b68;
        _0x375181 = _0x52c2b0.get(_0x28f0c2);
        if (_0x375181 !== undefined && _0x375181 !== -1) {
          _0x3213f0[_0x375181] = _0x3bc0df[_0x352752];
          _0x375181 = _0x99b46[_0x375181];
          _0x52c2b0.set(_0x28f0c2, _0x375181);
        }
      }
      for (_0x375181 = _0x260750; _0x375181 < _0x343742.length; _0x375181++) {
        if (_0x375181 in _0x3213f0) {
          P(_0x3bc0df, _0x375181, _0x3213f0[_0x375181]);
          W(_0x343742[_0x375181], _0x3bc0df, _0x375181, _0x445072, _0x4a45a1);
        } else {
          P(_0x3bc0df, _0x375181, _0x343742[_0x375181]);
        }
      }
    } else {
      for (let _0x5592e0 = 0, _0x43f117 = _0x343742.length; _0x5592e0 < _0x43f117; _0x5592e0++) {
        W(_0x343742[_0x5592e0], _0x3bc0df, _0x5592e0, _0x445072, _0x4a45a1);
      }
    }
    if (_0x3bc0df.length > _0x343742.length) {
      P(_0x3bc0df, "length", _0x343742.length);
    }
    return;
  }
  const _0x1007ba = Object.keys(_0x343742);
  for (let _0x5b2f40 = 0, _0x113ca4 = _0x1007ba.length; _0x5b2f40 < _0x113ca4; _0x5b2f40++) {
    W(_0x343742[_0x1007ba[_0x5b2f40]], _0x3bc0df, _0x1007ba[_0x5b2f40], _0x445072, _0x4a45a1);
  }
  const _0x27041e = Object.keys(_0x3bc0df);
  for (let _0x4a303c = 0, _0x437dfa = _0x27041e.length; _0x4a303c < _0x437dfa; _0x4a303c++) {
    if (_0x343742[_0x27041e[_0x4a303c]] === undefined) {
      P(_0x3bc0df, _0x27041e[_0x4a303c], undefined);
    }
  }
}
function ie(_0x36a22e, _0x182e55 = {}) {
  const {
    merge: _0x37010a,
    key: _0x582196 = "id"
  } = _0x182e55;
  const _0x5bad66 = X(_0x36a22e);
  return _0x4123eb => {
    if (!Q(_0x4123eb) || !Q(_0x5bad66)) {
      return _0x5bad66;
    }
    const _0x5d1e45 = W(_0x5bad66, {
      [Le]: _0x4123eb
    }, Le, _0x37010a, _0x582196);
    if (_0x5d1e45 === undefined) {
      return _0x4123eb;
    } else {
      return _0x5d1e45;
    }
  };
}
var St = () => {};
var Be = (_0x270e2d, _0x2680c7) => _0x2680c7();
function kt(_0x404e96, _0x2b5880) {
  const _0x40b511 = T(_0x404e96);
  const _0x44c22c = _0x40b511 ? [_0x40b511] : [];
  const {
    onEnter: _0x20ada9 = Be,
    onExit: _0xabcccb = Be
  } = _0x2b5880;
  const [_0x3b0aed, _0x50b7b9] = V(_0x2b5880.appear ? [] : _0x44c22c);
  const [_0x34f35f] = ft();
  let _0x5e2b17;
  let _0x54a17c = false;
  function _0x3be239(_0x3112b3, _0x5d36f6) {
    if (!_0x3112b3) {
      return _0x5d36f6 && _0x5d36f6();
    }
    _0x54a17c = true;
    _0xabcccb(_0x3112b3, () => {
      ye(() => {
        _0x54a17c = false;
        _0x50b7b9(_0x33aae6 => _0x33aae6.filter(_0x225452 => _0x225452 !== _0x3112b3));
        if (_0x5d36f6) {
          _0x5d36f6();
        }
      });
    });
  }
  function _0x5a5bd9(_0x3b135d) {
    const _0x524d29 = _0x5e2b17;
    if (!_0x524d29) {
      return _0x3b135d && _0x3b135d();
    }
    _0x5e2b17 = undefined;
    _0x50b7b9(_0x49fad0 => [_0x524d29, ..._0x49fad0]);
    _0x20ada9(_0x524d29, _0x3b135d ?? St);
  }
  const _0x20daee = _0x2b5880.mode === "out-in" ? _0x24355d => _0x54a17c || _0x3be239(_0x24355d, _0x5a5bd9) : _0x2b5880.mode === "in-out" ? _0x2aa999 => _0x5a5bd9(() => _0x3be239(_0x2aa999)) : _0x42baa2 => {
    _0x3be239(_0x42baa2);
    _0x5a5bd9();
  };
  ot(_0x5eecf5 => {
    const _0x360bff = _0x404e96();
    if (T(_0x34f35f)) {
      _0x34f35f();
      return _0x5eecf5;
    } else {
      if (_0x360bff !== _0x5eecf5) {
        _0x5e2b17 = _0x360bff;
        ye(() => T(() => _0x20daee(_0x5eecf5)));
      }
      return _0x360bff;
    }
  }, _0x2b5880.appear ? undefined : _0x40b511);
  return _0x3b0aed;
}
var Me = _0x450a2a => _0x450a2a instanceof Element;
function Ae(_0xfb8462, _0x4607df) {
  if (_0x4607df(_0xfb8462)) {
    return _0xfb8462;
  }
  if (typeof _0xfb8462 == "function" && !_0xfb8462.length) {
    return Ae(_0xfb8462(), _0x4607df);
  }
  if (Array.isArray(_0xfb8462)) {
    for (const _0x64e819 of _0xfb8462) {
      const _0x5a9605 = Ae(_0x64e819, _0x4607df);
      if (_0x5a9605) {
        return _0x5a9605;
      }
    }
  }
  return null;
}
function It(_0x2f9bfa, _0x496656 = Me, _0x3f49cb = Me) {
  const _0x49bbc0 = N(_0x2f9bfa);
  return N(() => Ae(_0x49bbc0(), _0x496656));
}
function pt(_0x53e34c) {
  return N(() => {
    const _0xbb8b1a = _0x53e34c.name || "s";
    return {
      enterActive: (_0x53e34c.enterActiveClass || _0xbb8b1a + "-enter-active").split(" "),
      enter: (_0x53e34c.enterClass || _0xbb8b1a + "-enter").split(" "),
      enterTo: (_0x53e34c.enterToClass || _0xbb8b1a + "-enter-to").split(" "),
      exitActive: (_0x53e34c.exitActiveClass || _0xbb8b1a + "-exit-active").split(" "),
      exit: (_0x53e34c.exitClass || _0xbb8b1a + "-exit").split(" "),
      exitTo: (_0x53e34c.exitToClass || _0xbb8b1a + "-exit-to").split(" "),
      move: (_0x53e34c.moveClass || _0xbb8b1a + "-move").split(" ")
    };
  });
}
function nt(_0x5ec1c4) {
  requestAnimationFrame(() => requestAnimationFrame(_0x5ec1c4));
}
function Tt(_0x536a37, _0x11b88d, _0x247dae, _0x40acf1) {
  const {
    onBeforeEnter: _0x48c19e,
    onEnter: _0x5845c9,
    onAfterEnter: _0x36af37
  } = _0x11b88d;
  _0x48c19e?.(_0x247dae);
  _0x247dae.classList.add(..._0x536a37.enter);
  _0x247dae.classList.add(..._0x536a37.enterActive);
  queueMicrotask(() => {
    if (!_0x247dae.parentNode) {
      return _0x40acf1?.();
    }
    _0x5845c9?.(_0x247dae, () => _0xd501fd());
  });
  nt(() => {
    _0x247dae.classList.remove(..._0x536a37.enter);
    _0x247dae.classList.add(..._0x536a37.enterTo);
    if (!_0x5845c9 || _0x5845c9.length < 2) {
      _0x247dae.addEventListener("transitionend", _0xd501fd);
      _0x247dae.addEventListener("animationend", _0xd501fd);
    }
  });
  function _0xd501fd(_0x299bf6) {
    if (!_0x299bf6 || _0x299bf6.target === _0x247dae) {
      _0x40acf1?.();
      _0x247dae.removeEventListener("transitionend", _0xd501fd);
      _0x247dae.removeEventListener("animationend", _0xd501fd);
      _0x247dae.classList.remove(..._0x536a37.enterActive);
      _0x247dae.classList.remove(..._0x536a37.enterTo);
      _0x36af37?.(_0x247dae);
    }
  }
}
function Et(_0x2ecb3d, _0x4685c0, _0x4f3665, _0x86e0ec) {
  const {
    onBeforeExit: _0x5c13ec,
    onExit: _0x5e4f65,
    onAfterExit: _0x1e5561
  } = _0x4685c0;
  if (!_0x4f3665.parentNode) {
    return _0x86e0ec?.();
  }
  _0x5c13ec?.(_0x4f3665);
  _0x4f3665.classList.add(..._0x2ecb3d.exit);
  _0x4f3665.classList.add(..._0x2ecb3d.exitActive);
  _0x5e4f65?.(_0x4f3665, () => _0x54bb5c());
  nt(() => {
    _0x4f3665.classList.remove(..._0x2ecb3d.exit);
    _0x4f3665.classList.add(..._0x2ecb3d.exitTo);
    if (!_0x5e4f65 || _0x5e4f65.length < 2) {
      _0x4f3665.addEventListener("transitionend", _0x54bb5c);
      _0x4f3665.addEventListener("animationend", _0x54bb5c);
    }
  });
  function _0x54bb5c(_0x2e7040) {
    if (!_0x2e7040 || _0x2e7040.target === _0x4f3665) {
      _0x86e0ec?.();
      _0x4f3665.removeEventListener("transitionend", _0x54bb5c);
      _0x4f3665.removeEventListener("animationend", _0x54bb5c);
      _0x4f3665.classList.remove(..._0x2ecb3d.exitActive);
      _0x4f3665.classList.remove(..._0x2ecb3d.exitTo);
      _0x1e5561?.(_0x4f3665);
    }
  }
}
var Ot = {
  inout: "in-out",
  outin: "out-in"
};
var Pt = _0x329072 => {
  const _0x1e37ee = pt(_0x329072);
  return kt(It(() => _0x329072.children), {
    mode: Ot[_0x329072.mode],
    appear: _0x329072.appear,
    onEnter(_0x2731ca, _0x1eae2a) {
      Tt(_0x1e37ee(), _0x329072, _0x2731ca, _0x1eae2a);
    },
    onExit(_0x17094f, _0x2730a1) {
      Et(_0x1e37ee(), _0x329072, _0x17094f, _0x2730a1);
    }
  });
};
const jt = "_App_1x7hf_1";
const Nt = "_content_1x7hf_14";
const De = {
  App: jt,
  content: Nt
};
function Bt(_0x342293, _0x44c92c) {
  const _0xbdd963 = ut(_0x44c92c);
  return [_0xb397e0 => L(_0xbdd963.Provider, {
    value: _0x342293(_0xb397e0),
    get children() {
      return _0xb397e0.children;
    }
  }), () => dt(_0xbdd963)];
}
const [Mt, Dt] = Bt(() => {
  const [_0x400635, _0x476147] = V(false);
  const [_0x4c8cbc, _0x4c0432] = V("crafting");
  const [_0x5788fc, _0x54b6d1] = $e({});
  const [_0x13df44, _0x35b3e5] = $e([]);
  const [_0x14dee4, _0x248bf4] = $e([]);
  return {
    visible: _0x400635,
    setVisible: _0x476147,
    navigation: _0x4c8cbc,
    setNavigation: _0x4c0432,
    currentItem: _0x5788fc,
    setCurrentItem: _0x54b6d1,
    itemsList: _0x13df44,
    setItemsList: _0x35b3e5,
    craftingQueue: _0x14dee4,
    setCraftingQueue: _0x248bf4
  };
});
const _e = () => Dt();
const Ft = "_craftingInfo_1blpy_1";
const Rt = "_header_1blpy_14";
const Kt = "_title_1blpy_30";
const Qt = "_craftingList_1blpy_39";
const qt = "_craftingItem_1blpy_51";
const Ut = "_itemBox_1blpy_65";
const Vt = "_icon_1blpy_75";
const Zt = "_infoBox_1blpy_82";
const Ht = "_time_1blpy_97";
const Wt = "_button_1blpy_111";
const Gt = "_needsList_1blpy_132";
const Xt = "_needItem_1blpy_141";
const Yt = "_texts_1blpy_167";
const Jt = "_name_1blpy_176";
const zt = "_info_1blpy_82";
const k = {
  craftingInfo: Ft,
  header: Rt,
  title: Kt,
  craftingList: Qt,
  craftingItem: qt,
  itemBox: Ut,
  icon: Vt,
  infoBox: Zt,
  time: Ht,
  button: Wt,
  needsList: Gt,
  needItem: Xt,
  texts: Yt,
  name: Jt,
  info: zt
};
const en = E("<div><div>Needs for Crafting</div>Requirements to craft this item");
const tn = E("<div>");
const nn = E("<div><div><div>Crafting Queue</div>Items that you are currently crafting</div><div>");
const sn = E("<div><div><div></div></div><div><div></div></div><div><svg width=\"0.9259vh\" height=\"0.9259vh\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 1L5 5M1 9L5 5M5 5L1 1L9 9\" stroke=\"white\" stroke-opacity=\"0.48\" stroke-width=\"1.5\">");
const rn = E("<div><div></div><div><div></div><div>/<!> needed");
function on() {
  const {
    currentItem: _0x2ba744,
    craftingQueue: _0x58634a,
    setCraftingQueue: _0x3e515a
  } = _e();
  const [_0x2090be, _0x2fc238] = V(undefined);
  _0x91d80b.register("np-jail:crafting:updateQueue", async _0x1259f7 => {
    _0x2fc238(_0x1259f7[0]);
    _0x4a9230(_0x1259f7);
  });
  let _0x319160 = null;
  const _0x4a9230 = _0x278040 => {
    if (!_0x2090be()) {
      return _0x3e515a([]);
    }
    _0x3e515a(_0x278040 ?? _0x58634a);
  };
  Se(() => {
    _0x319160 = setInterval(() => {
      _0x4a9230();
    }, 1000);
  });
  Qe(() => {
    clearInterval(_0x319160);
  });
  return (() => {
    const _0x9076dd = nn();
    const _0x31f0cc = _0x9076dd.firstChild;
    const _0x3b0bd5 = _0x31f0cc.firstChild;
    const _0x1a6a9c = _0x31f0cc.nextSibling;
    b(_0x1a6a9c, L(ce, {
      each: _0x58634a,
      children: _0x1588a3 => (() => {
        const _0x503bbe = sn();
        const _0x5a9821 = _0x503bbe.firstChild;
        const _0x33e9f9 = _0x5a9821.firstChild;
        const _0xa98d1b = _0x5a9821.nextSibling;
        const _0x24b9b8 = _0xa98d1b.firstChild;
        const _0x253b24 = _0xa98d1b.nextSibling;
        b(_0xa98d1b, () => _0x1588a3.item.name, _0x24b9b8);
        b(_0x24b9b8, L(Ct, {
          get children() {
            return [L(Te, {
              get when() {
                return _0x2090be()?.databaseID === _0x1588a3.databaseID;
              },
              get children() {
                return ["Progress: ", N(() => Math.floor(_0x1588a3.progress * 100) / 100), "%"];
              }
            }), L(Te, {
              get when() {
                return _0x2090be()?.databaseID !== _0x1588a3.databaseID;
              },
              children: "In queue..."
            })];
          }
        }));
        _0x253b24.$$click = async () => {
          await _0x91d80b.execute("np-jail:crafting:removeItem", _0x1588a3.databaseID);
        };
        S(_0x19a115 => {
          const _0xb51a4f = k.craftingItem;
          const _0xf325da = k.itemBox;
          const _0x10e95c = k.icon;
          const _0x1bf92f = "url(" + _0x1588a3.item.image + ")";
          const _0x1499ac = k.infoBox;
          const _0x2b179a = k.time;
          const _0xc406d9 = k.button;
          if (_0xb51a4f !== _0x19a115._v$7) {
            $(_0x503bbe, _0x19a115._v$7 = _0xb51a4f);
          }
          if (_0xf325da !== _0x19a115._v$8) {
            $(_0x5a9821, _0x19a115._v$8 = _0xf325da);
          }
          if (_0x10e95c !== _0x19a115._v$9) {
            $(_0x33e9f9, _0x19a115._v$9 = _0x10e95c);
          }
          if (_0x1bf92f !== _0x19a115._v$10) {
            if ((_0x19a115._v$10 = _0x1bf92f) != null) {
              _0x33e9f9.style.setProperty("background-image", _0x1bf92f);
            } else {
              _0x33e9f9.style.removeProperty("background-image");
            }
          }
          if (_0x1499ac !== _0x19a115._v$11) {
            $(_0xa98d1b, _0x19a115._v$11 = _0x1499ac);
          }
          if (_0x2b179a !== _0x19a115._v$12) {
            $(_0x24b9b8, _0x19a115._v$12 = _0x2b179a);
          }
          if (_0xc406d9 !== _0x19a115._v$13) {
            $(_0x253b24, _0x19a115._v$13 = _0xc406d9);
          }
          return _0x19a115;
        }, {
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined,
          _v$13: undefined
        });
        return _0x503bbe;
      })()
    }));
    b(_0x9076dd, L(fe, {
      get when() {
        return _0x2ba744?.needs;
      },
      get children() {
        return [(() => {
          const _0x58a433 = en();
          const _0x206874 = _0x58a433.firstChild;
          _0x58a433.style.setProperty("margin-top", "1.8vh");
          S(_0x226fe5 => {
            const _0x54d289 = k.header;
            const _0x7b0a0d = k.title;
            if (_0x54d289 !== _0x226fe5._v$) {
              $(_0x58a433, _0x226fe5._v$ = _0x54d289);
            }
            if (_0x7b0a0d !== _0x226fe5._v$2) {
              $(_0x206874, _0x226fe5._v$2 = _0x7b0a0d);
            }
            return _0x226fe5;
          }, {
            _v$: undefined,
            _v$2: undefined
          });
          return _0x58a433;
        })(), (() => {
          const _0xa06dce = tn();
          b(_0xa06dce, L(ce, {
            get each() {
              return _0x2ba744?.needs;
            },
            children: _0xc789ce => (() => {
              const _0x3e8ba3 = rn();
              const _0x32e15a = _0x3e8ba3.firstChild;
              const _0x231028 = _0x32e15a.nextSibling;
              const _0x241cc5 = _0x231028.firstChild;
              const _0x2b8efc = _0x241cc5.nextSibling;
              const _0x4feb01 = _0x2b8efc.firstChild;
              const _0x2dcc07 = _0x4feb01.nextSibling;
              _0x2dcc07.nextSibling;
              b(_0x241cc5, () => _0xc789ce.item.name);
              b(_0x2b8efc, () => _0xc789ce.quantity, _0x4feb01);
              b(_0x2b8efc, () => _0xc789ce.amount, _0x2dcc07);
              S(_0x5dd8dd => {
                const _0x1bd8ed = k.needItem;
                const _0x5e4bcb = k.icon;
                const _0x19515f = "url(" + _0xc789ce.item.image + ")";
                const _0x4499af = k.texts;
                const _0x143c11 = k.name;
                const _0x35af99 = k.info;
                if (_0x1bd8ed !== _0x5dd8dd._v$14) {
                  $(_0x3e8ba3, _0x5dd8dd._v$14 = _0x1bd8ed);
                }
                if (_0x5e4bcb !== _0x5dd8dd._v$15) {
                  $(_0x32e15a, _0x5dd8dd._v$15 = _0x5e4bcb);
                }
                if (_0x19515f !== _0x5dd8dd._v$16) {
                  if ((_0x5dd8dd._v$16 = _0x19515f) != null) {
                    _0x32e15a.style.setProperty("background-image", _0x19515f);
                  } else {
                    _0x32e15a.style.removeProperty("background-image");
                  }
                }
                if (_0x4499af !== _0x5dd8dd._v$17) {
                  $(_0x231028, _0x5dd8dd._v$17 = _0x4499af);
                }
                if (_0x143c11 !== _0x5dd8dd._v$18) {
                  $(_0x241cc5, _0x5dd8dd._v$18 = _0x143c11);
                }
                if (_0x35af99 !== _0x5dd8dd._v$19) {
                  $(_0x2b8efc, _0x5dd8dd._v$19 = _0x35af99);
                }
                return _0x5dd8dd;
              }, {
                _v$14: undefined,
                _v$15: undefined,
                _v$16: undefined,
                _v$17: undefined,
                _v$18: undefined,
                _v$19: undefined
              });
              return _0x3e8ba3;
            })()
          }));
          S(() => $(_0xa06dce, k.needsList));
          return _0xa06dce;
        })()];
      }
    }), null);
    S(_0x575bb6 => {
      const _0x1e26be = k.craftingInfo;
      const _0x4034ef = k.header;
      const _0x5eab86 = k.title;
      const _0x466a50 = k.craftingList;
      if (_0x1e26be !== _0x575bb6._v$3) {
        $(_0x9076dd, _0x575bb6._v$3 = _0x1e26be);
      }
      if (_0x4034ef !== _0x575bb6._v$4) {
        $(_0x31f0cc, _0x575bb6._v$4 = _0x4034ef);
      }
      if (_0x5eab86 !== _0x575bb6._v$5) {
        $(_0x3b0bd5, _0x575bb6._v$5 = _0x5eab86);
      }
      if (_0x466a50 !== _0x575bb6._v$6) {
        $(_0x1a6a9c, _0x575bb6._v$6 = _0x466a50);
      }
      return _0x575bb6;
    }, {
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return _0x9076dd;
  })();
}
ke(["click"]);
const ln = "_keybinds_n93t6_1";
const cn = "_keybind_n93t6_1";
const fn = "_text_n93t6_29";
const un = "_button_n93t6_32";
const te = {
  keybinds: ln,
  keybind: cn,
  text: fn,
  button: un
};
const dn = E("<div>");
const an = E("<div><div></div><div>");
const vn = [{
  keybind: "ESC",
  description: "Exit"
}];
function _n() {
  return (() => {
    const _0x5b4de8 = dn();
    b(_0x5b4de8, L(ce, {
      each: vn,
      children: _0x14bccb => (() => {
        const _0x4e993e = an();
        const _0x1f18f8 = _0x4e993e.firstChild;
        const _0x1b1d77 = _0x1f18f8.nextSibling;
        b(_0x1f18f8, () => _0x14bccb.description);
        b(_0x1b1d77, () => _0x14bccb.keybind);
        S(_0x11a220 => {
          const _0xeaaa54 = te.keybind;
          const _0x195417 = te.text;
          const _0x40a654 = te.button;
          if (_0xeaaa54 !== _0x11a220._v$) {
            $(_0x4e993e, _0x11a220._v$ = _0xeaaa54);
          }
          if (_0x195417 !== _0x11a220._v$2) {
            $(_0x1f18f8, _0x11a220._v$2 = _0x195417);
          }
          if (_0x40a654 !== _0x11a220._v$3) {
            $(_0x1b1d77, _0x11a220._v$3 = _0x40a654);
          }
          return _0x11a220;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return _0x4e993e;
      })()
    }));
    S(() => $(_0x5b4de8, te.keybinds));
    return _0x5b4de8;
  })();
}
const hn = "_header_ykkld_1";
const $n = "_row_ykkld_12";
const gn = "_title_ykkld_19";
const Cn = "_firstText_ykkld_28";
const yn = "_secondText_ykkld_37";
const bn = "_craftIcon_ykkld_45";
const mn = "_button_ykkld_49";
const wn = "_arrowBox_ykkld_72";
const xn = "_active_ykkld_82";
const Ln = "_divider_ykkld_91";
const An = "_rectangle_ykkld_99";
const M = {
  header: hn,
  row: $n,
  title: gn,
  firstText: Cn,
  secondText: yn,
  craftIcon: bn,
  button: mn,
  arrowBox: wn,
  active: xn,
  divider: Ln,
  rectangle: An
};
const Sn = E("<div><div><svg width=\"3.24vh\" height=\"3.24vh\" viewBox=\"0 0 35 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.753643 0.743555C0.155646 1.33363 0 1.52689 0 1.67954C0 1.79894 0.403665 2.5909 1.06313 3.76514L2.12626 5.65831L3.33774 6.06333L4.54922 6.46835L8.73235 10.6562L12.9154 14.8441L13.4205 14.8248C13.8091 14.8099 13.9842 14.836 14.1803 14.9378L14.4351 15.0701L15.0306 14.4712L15.6259 13.8723L11.0074 9.24847L6.38884 4.62462L6.00532 3.42535C5.71688 2.5233 5.5836 2.20104 5.46754 2.12538C5.01192 1.82815 1.69078 0 1.60647 0C1.55187 0 1.16807 0.334642 0.753643 0.743555ZM19.2005 0.584023C17.8409 0.843489 16.7174 1.33898 15.6966 2.1292C15.006 2.66371 14.7937 2.89619 14.7937 3.11741C14.7937 3.44058 14.9346 3.50122 15.7191 3.51575C16.2854 3.52618 16.5418 3.56763 17.0093 3.72424C18.3752 4.18198 19.6479 5.38132 20.2235 6.75313C20.5621 7.56003 20.6121 8.63733 20.3296 9.04116C20.1278 9.32963 20.1817 9.50689 20.6068 9.95315L21.0025 10.3686L17.7449 13.631L14.4872 16.8935L14.0486 16.4718C13.6687 16.1065 13.5847 16.0561 13.4205 16.0951C13.2914 16.1259 11.2347 18.1405 6.97059 22.4134L0.710234 28.6865L0.42971 29.2777C-0.310806 30.8381 -0.00583422 32.4486 1.251 33.6137C2.13619 34.4343 3.35809 34.7437 4.57749 34.4558C5.51893 34.2337 5.64701 34.1293 8.66318 31.1284C10.5691 29.2321 11.4781 28.2803 11.5221 28.1349C11.5577 28.0175 11.6066 27.754 11.6309 27.5491C11.7873 26.2283 12.9819 24.5584 14.3422 23.7591C14.9068 23.4273 15.8286 23.0887 16.169 23.0879C16.6411 23.0869 16.8413 22.958 17.6616 22.1263C18.6583 21.1159 18.6595 21.1107 18.0258 20.4534L17.577 19.9879L20.8356 16.7256L24.0943 13.4633L24.5428 13.8946C24.8355 14.1761 25.0486 14.3259 25.1562 14.3259C25.2621 14.3259 25.443 14.202 25.6615 13.9799C26.2136 13.4186 26.632 13.293 27.0662 13.5581C27.4442 13.7889 27.607 14.2726 27.4258 14.626C27.3829 14.7096 27.2696 14.8619 27.174 14.9646C26.8515 15.311 26.9137 15.4368 27.8942 16.4207C28.8694 17.3993 29.1274 17.5561 29.7578 17.5529C30.4711 17.5493 30.5137 17.5174 32.6624 15.3784C33.9548 14.0919 34.7073 13.2903 34.7922 13.1098C34.9992 12.6694 35.0311 12.2972 34.9007 11.8423C34.7943 11.4712 34.7106 11.3648 33.8261 10.4765C32.7666 9.41266 32.77 9.41419 32.3215 9.80572C31.8864 10.1856 31.2589 10.1144 30.9782 9.65328C30.7625 9.29903 30.7943 8.96877 31.0806 8.59331C31.2143 8.41792 31.3236 8.2038 31.3236 8.11742C31.3236 8.00323 30.5335 7.17129 28.424 5.06469C25.3042 1.94909 24.9667 1.6657 23.7434 1.13487C22.7509 0.704263 21.9841 0.54487 20.7667 0.51601C20.0526 0.499181 19.5253 0.52206 19.2005 0.584023ZM20.8122 18.6265L19.4339 20.0081L19.5947 20.3138C19.7183 20.549 19.7555 20.7319 19.7555 21.1063C19.7555 21.6781 19.6142 21.999 19.1751 22.4244C19.0191 22.5756 18.8914 22.721 18.8914 22.7475C18.8914 22.774 19.0552 22.9006 19.2554 23.0289C20.8145 24.0283 21.9189 25.6846 22.1519 27.3727L22.2276 27.9216L25.3624 31.0619C28.68 34.3853 28.883 34.5588 29.7957 34.8495C30.4254 35.0502 31.5274 35.0502 32.1571 34.8495C33.4723 34.4305 34.5519 33.3046 34.9023 31.9867C35.0346 31.4889 35.0321 30.4556 34.8975 29.938C34.625 28.8905 34.622 28.8868 31.1638 25.4077L27.9739 22.1983L27.5825 22.1516C25.3608 21.8863 23.2035 20.145 22.466 18.0217C22.3645 17.7293 22.2609 17.435 22.2359 17.3675C22.1997 17.2698 21.9106 17.5254 20.8122 18.6265Z\" fill=\"#00F8B9\"></svg><div><div>Crafting</div><div>Prison</div></div><svg width=\"3.24vh\" height=\"3.24vh\" viewBox=\"0 0 35 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.753643 0.743555C0.155646 1.33363 0 1.52689 0 1.67954C0 1.79894 0.403665 2.5909 1.06313 3.76514L2.12626 5.65831L3.33774 6.06333L4.54922 6.46835L8.73235 10.6562L12.9154 14.8441L13.4205 14.8248C13.8091 14.8099 13.9842 14.836 14.1803 14.9378L14.4351 15.0701L15.0306 14.4712L15.6259 13.8723L11.0074 9.24847L6.38884 4.62462L6.00532 3.42535C5.71688 2.5233 5.5836 2.20104 5.46754 2.12538C5.01192 1.82815 1.69078 0 1.60647 0C1.55187 0 1.16807 0.334642 0.753643 0.743555ZM19.2005 0.584023C17.8409 0.843489 16.7174 1.33898 15.6966 2.1292C15.006 2.66371 14.7937 2.89619 14.7937 3.11741C14.7937 3.44058 14.9346 3.50122 15.7191 3.51575C16.2854 3.52618 16.5418 3.56763 17.0093 3.72424C18.3752 4.18198 19.6479 5.38132 20.2235 6.75313C20.5621 7.56003 20.6121 8.63733 20.3296 9.04116C20.1278 9.32963 20.1817 9.50689 20.6068 9.95315L21.0025 10.3686L17.7449 13.631L14.4872 16.8935L14.0486 16.4718C13.6687 16.1065 13.5847 16.0561 13.4205 16.0951C13.2914 16.1259 11.2347 18.1405 6.97059 22.4134L0.710234 28.6865L0.42971 29.2777C-0.310806 30.8381 -0.00583422 32.4486 1.251 33.6137C2.13619 34.4343 3.35809 34.7437 4.57749 34.4558C5.51893 34.2337 5.64701 34.1293 8.66318 31.1284C10.5691 29.2321 11.4781 28.2803 11.5221 28.1349C11.5577 28.0175 11.6066 27.754 11.6309 27.5491C11.7873 26.2283 12.9819 24.5584 14.3422 23.7591C14.9068 23.4273 15.8286 23.0887 16.169 23.0879C16.6411 23.0869 16.8413 22.958 17.6616 22.1263C18.6583 21.1159 18.6595 21.1107 18.0258 20.4534L17.577 19.9879L20.8356 16.7256L24.0943 13.4633L24.5428 13.8946C24.8355 14.1761 25.0486 14.3259 25.1562 14.3259C25.2621 14.3259 25.443 14.202 25.6615 13.9799C26.2136 13.4186 26.632 13.293 27.0662 13.5581C27.4442 13.7889 27.607 14.2726 27.4258 14.626C27.3829 14.7096 27.2696 14.8619 27.174 14.9646C26.8515 15.311 26.9137 15.4368 27.8942 16.4207C28.8694 17.3993 29.1274 17.5561 29.7578 17.5529C30.4711 17.5493 30.5137 17.5174 32.6624 15.3784C33.9548 14.0919 34.7073 13.2903 34.7922 13.1098C34.9992 12.6694 35.0311 12.2972 34.9007 11.8423C34.7943 11.4712 34.7106 11.3648 33.8261 10.4765C32.7666 9.41266 32.77 9.41419 32.3215 9.80572C31.8864 10.1856 31.2589 10.1144 30.9782 9.65328C30.7625 9.29903 30.7943 8.96877 31.0806 8.59331C31.2143 8.41792 31.3236 8.2038 31.3236 8.11742C31.3236 8.00323 30.5335 7.17129 28.424 5.06469C25.3042 1.94909 24.9667 1.6657 23.7434 1.13487C22.7509 0.704263 21.9841 0.54487 20.7667 0.51601C20.0526 0.499181 19.5253 0.52206 19.2005 0.584023ZM20.8122 18.6265L19.4339 20.0081L19.5947 20.3138C19.7183 20.549 19.7555 20.7319 19.7555 21.1063C19.7555 21.6781 19.6142 21.999 19.1751 22.4244C19.0191 22.5756 18.8914 22.721 18.8914 22.7475C18.8914 22.774 19.0552 22.9006 19.2554 23.0289C20.8145 24.0283 21.9189 25.6846 22.1519 27.3727L22.2276 27.9216L25.3624 31.0619C28.68 34.3853 28.883 34.5588 29.7957 34.8495C30.4254 35.0502 31.5274 35.0502 32.1571 34.8495C33.4723 34.4305 34.5519 33.3046 34.9023 31.9867C35.0346 31.4889 35.0321 30.4556 34.8975 29.938C34.625 28.8905 34.622 28.8868 31.1638 25.4077L27.9739 22.1983L27.5825 22.1516C25.3608 21.8863 23.2035 20.145 22.466 18.0217C22.3645 17.7293 22.2609 17.435 22.2359 17.3675C22.1997 17.2698 21.9106 17.5254 20.8122 18.6265Z\" fill=\"#00F8B9\"></div><div><div>");
function kn() {
  return (() => {
    const _0x329ed3 = Sn();
    const _0xd76191 = _0x329ed3.firstChild;
    const _0x52b2df = _0xd76191.firstChild;
    const _0x465971 = _0x52b2df.nextSibling;
    const _0x25d471 = _0x465971.firstChild;
    const _0x196fd7 = _0x25d471.nextSibling;
    const _0x2847a2 = _0x465971.nextSibling;
    const _0x26bf0c = _0xd76191.nextSibling;
    const _0xf605e = _0x26bf0c.firstChild;
    b(_0xd76191, L(_n, {}), null);
    S(_0xcbccf7 => {
      const _0x572dac = M.header;
      const _0x38d341 = M.row;
      const _0x38a565 = M.craftIcon;
      const _0x2325a4 = M.title;
      const _0x52110d = M.firstText;
      const _0x22f14f = M.secondText;
      const _0x313ace = M.craftIcon;
      const _0x257658 = M.divider;
      const _0x37bf4f = M.rectangle;
      if (_0x572dac !== _0xcbccf7._v$) {
        $(_0x329ed3, _0xcbccf7._v$ = _0x572dac);
      }
      if (_0x38d341 !== _0xcbccf7._v$2) {
        $(_0xd76191, _0xcbccf7._v$2 = _0x38d341);
      }
      if (_0x38a565 !== _0xcbccf7._v$3) {
        Oe(_0x52b2df, "class", _0xcbccf7._v$3 = _0x38a565);
      }
      if (_0x2325a4 !== _0xcbccf7._v$4) {
        $(_0x465971, _0xcbccf7._v$4 = _0x2325a4);
      }
      if (_0x52110d !== _0xcbccf7._v$5) {
        $(_0x25d471, _0xcbccf7._v$5 = _0x52110d);
      }
      if (_0x22f14f !== _0xcbccf7._v$6) {
        $(_0x196fd7, _0xcbccf7._v$6 = _0x22f14f);
      }
      if (_0x313ace !== _0xcbccf7._v$7) {
        Oe(_0x2847a2, "class", _0xcbccf7._v$7 = _0x313ace);
      }
      if (_0x257658 !== _0xcbccf7._v$8) {
        $(_0x26bf0c, _0xcbccf7._v$8 = _0x257658);
      }
      if (_0x37bf4f !== _0xcbccf7._v$9) {
        $(_0xf605e, _0xcbccf7._v$9 = _0x37bf4f);
      }
      return _0xcbccf7;
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
    return _0x329ed3;
  })();
}
const ge = _0x3cc4e6 => {
  _0x3cc4e6 = _0x3cc4e6 ?? 0;
  return {
    hours: Math.floor(_0x3cc4e6 / 3600),
    minutes: Math.floor(_0x3cc4e6 % 3600 / 60),
    seconds: Math.floor(_0x3cc4e6 % 60)
  };
};
const In = "_itemInfo_1dn0k_1";
const pn = "_attachment_1dn0k_11";
const Tn = "_box_1dn0k_19";
const En = "_label_1dn0k_36";
const On = "_item_1dn0k_1";
const Pn = "_title_1dn0k_58";
const jn = "_description_1dn0k_66";
const Nn = "_button_1dn0k_76";
const Bn = "_time_1dn0k_102";
const Mn = "_glow_1dn0k_112";
const q = {
  itemInfo: In,
  attachment: pn,
  box: Tn,
  delete: "_delete_1dn0k_32",
  label: En,
  item: On,
  title: Pn,
  description: jn,
  button: Nn,
  time: Bn,
  glow: Mn
};
const Dn = E("<div><div></div><div>");
const Fn = E("<div>Start Crafting<div>h <!>m <!>s");
const Fe = E("<div>");
function Rn() {
  const {
    currentItem: _0x27f743
  } = _e();
  return (() => {
    const _0x1449fe = Fe();
    b(_0x1449fe, L(fe, {
      get when() {
        return Object.entries(_0x27f743).length > 0;
      },
      get children() {
        return [(() => {
          const _0x323aea = Dn();
          const _0x31ce13 = _0x323aea.firstChild;
          const _0x2def90 = _0x31ce13.nextSibling;
          b(_0x31ce13, () => _0x27f743.item.name);
          b(_0x2def90, () => _0x27f743.item.description);
          S(_0x2c61f4 => {
            const _0x40eafe = q.item;
            const _0x22b8ae = q.title;
            const _0x5a91b7 = q.description;
            if (_0x40eafe !== _0x2c61f4._v$) {
              $(_0x323aea, _0x2c61f4._v$ = _0x40eafe);
            }
            if (_0x22b8ae !== _0x2c61f4._v$2) {
              $(_0x31ce13, _0x2c61f4._v$2 = _0x22b8ae);
            }
            if (_0x5a91b7 !== _0x2c61f4._v$3) {
              $(_0x2def90, _0x2c61f4._v$3 = _0x5a91b7);
            }
            return _0x2c61f4;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined
          });
          return _0x323aea;
        })(), (() => {
          const _0x5ed132 = Fn();
          const _0x313005 = _0x5ed132.firstChild;
          const _0x468ba8 = _0x313005.nextSibling;
          const _0x107786 = _0x468ba8.firstChild;
          const _0x2e430d = _0x107786.nextSibling;
          const _0x5c5b13 = _0x2e430d.nextSibling;
          const _0x1a03c0 = _0x5c5b13.nextSibling;
          _0x1a03c0.nextSibling;
          _0x5ed132.$$click = () => {
            _0x91d80b.execute("np-jail:crafting:craftItem", _0x27f743.index);
          };
          b(_0x468ba8, () => ge((_0x27f743.time ?? 0) / 1000).hours, _0x107786);
          b(_0x468ba8, () => ge((_0x27f743.time ?? 0) / 1000).minutes, _0x2e430d);
          b(_0x468ba8, () => ge((_0x27f743.time ?? 0) / 1000).seconds, _0x1a03c0);
          S(_0x13bd66 => {
            const _0x3bdecf = q.button;
            const _0x52d7de = q.time;
            if (_0x3bdecf !== _0x13bd66._v$4) {
              $(_0x5ed132, _0x13bd66._v$4 = _0x3bdecf);
            }
            if (_0x52d7de !== _0x13bd66._v$5) {
              $(_0x468ba8, _0x13bd66._v$5 = _0x52d7de);
            }
            return _0x13bd66;
          }, {
            _v$4: undefined,
            _v$5: undefined
          });
          return _0x5ed132;
        })()];
      }
    }), null);
    b(_0x1449fe, L(fe, {
      get when() {
        return Object.entries(_0x27f743).length > 0;
      },
      get children() {
        const _0x3e8a61 = Fe();
        S(() => $(_0x3e8a61, q.glow));
        return _0x3e8a61;
      }
    }), null);
    S(() => $(_0x1449fe, q.itemInfo));
    return _0x1449fe;
  })();
}
ke(["click"]);
const Kn = "_itemsList_1i6b3_1";
const Qn = "_header_1i6b3_12";
const qn = "_title_1i6b3_26";
const Un = "_scroll_1i6b3_35";
const Vn = "_item_1i6b3_1";
const Zn = "_display_1i6b3_59";
const Hn = "_active_1i6b3_75";
const Wn = "_icon_1i6b3_81";
const Gn = "_textContainer_1i6b3_92";
const Xn = "_textTitle_1i6b3_106";
const Yn = "_button_1i6b3_110";
const O = {
  itemsList: Kn,
  header: Qn,
  title: qn,
  scroll: Un,
  item: Vn,
  display: Zn,
  active: Hn,
  icon: Wn,
  textContainer: Gn,
  textTitle: Xn,
  button: Yn
};
const Jn = E("<div><div><div>List of Items</div>List of items that you can craft</div><div>");
const zn = E("<div><div><div></div><div><div></div></div></div><div>Select");
function ei() {
  const {
    navigation: _0x32d336,
    currentItem: _0x13980c,
    setCurrentItem: _0x12234d,
    itemsList: _0x346828,
    setItemsList: _0xbb3d77
  } = _e();
  const _0x5ce69e = async () => {
    const _0x5bae8a = await _0x91d80b.execute("np-jail:crafting:getItemsList", _0x32d336());
    if (_0x5bae8a) {
      _0xbb3d77(_0x5bae8a);
    }
  };
  Se(async () => {
    await _0x5ce69e();
  });
  return (() => {
    const _0x5d4b2d = Jn();
    const _0x48218b = _0x5d4b2d.firstChild;
    const _0x5226a2 = _0x48218b.firstChild;
    const _0x476ab7 = _0x48218b.nextSibling;
    b(_0x476ab7, L(ce, {
      each: _0x346828,
      children: (_0x29449c, _0x38e056) => (() => {
        const _0x3766f7 = zn();
        const _0x1ed7fe = _0x3766f7.firstChild;
        const _0x144fe1 = _0x1ed7fe.firstChild;
        const _0x63451e = _0x144fe1.nextSibling;
        const _0x35af55 = _0x63451e.firstChild;
        const _0x3aa56a = _0x1ed7fe.nextSibling;
        _0x3766f7.$$click = () => {
          _0x12234d(ie({}));
          _0x12234d({
            index: _0x38e056(),
            ..._0x29449c
          });
        };
        b(_0x35af55, () => _0x29449c.item.name);
        b(_0x63451e, () => _0x29449c.item.description, null);
        S(_0x2c2ea3 => {
          const _0x5d34f4 = O.item;
          const _0x561468 = O.display;
          const _0x4242d4 = {
            [O.active]: _0x13980c?.index === _0x38e056()
          };
          const _0x4482b3 = O.icon;
          const _0xfb697f = "url(" + _0x29449c.item.image + ")";
          const _0x11445d = O.textContainer;
          const _0x38f41c = O.textTitle;
          const _0x3953a7 = O.button;
          const _0x44be7e = {
            [O.active]: _0x13980c?.index === _0x38e056()
          };
          if (_0x5d34f4 !== _0x2c2ea3._v$5) {
            $(_0x3766f7, _0x2c2ea3._v$5 = _0x5d34f4);
          }
          if (_0x561468 !== _0x2c2ea3._v$6) {
            $(_0x1ed7fe, _0x2c2ea3._v$6 = _0x561468);
          }
          _0x2c2ea3._v$7 = Pe(_0x1ed7fe, _0x4242d4, _0x2c2ea3._v$7);
          if (_0x4482b3 !== _0x2c2ea3._v$8) {
            $(_0x144fe1, _0x2c2ea3._v$8 = _0x4482b3);
          }
          if (_0xfb697f !== _0x2c2ea3._v$9) {
            if ((_0x2c2ea3._v$9 = _0xfb697f) != null) {
              _0x144fe1.style.setProperty("background-image", _0xfb697f);
            } else {
              _0x144fe1.style.removeProperty("background-image");
            }
          }
          if (_0x11445d !== _0x2c2ea3._v$10) {
            $(_0x63451e, _0x2c2ea3._v$10 = _0x11445d);
          }
          if (_0x38f41c !== _0x2c2ea3._v$11) {
            $(_0x35af55, _0x2c2ea3._v$11 = _0x38f41c);
          }
          if (_0x3953a7 !== _0x2c2ea3._v$12) {
            $(_0x3aa56a, _0x2c2ea3._v$12 = _0x3953a7);
          }
          _0x2c2ea3._v$13 = Pe(_0x3aa56a, _0x44be7e, _0x2c2ea3._v$13);
          return _0x2c2ea3;
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
        return _0x3766f7;
      })()
    }));
    S(_0x269464 => {
      const _0x45ef5d = O.itemsList;
      const _0x49dfa4 = O.header;
      const _0x408162 = O.title;
      const _0x2dd932 = O.scroll;
      if (_0x45ef5d !== _0x269464._v$) {
        $(_0x5d4b2d, _0x269464._v$ = _0x45ef5d);
      }
      if (_0x49dfa4 !== _0x269464._v$2) {
        $(_0x48218b, _0x269464._v$2 = _0x49dfa4);
      }
      if (_0x408162 !== _0x269464._v$3) {
        $(_0x5226a2, _0x269464._v$3 = _0x408162);
      }
      if (_0x2dd932 !== _0x269464._v$4) {
        $(_0x476ab7, _0x269464._v$4 = _0x2dd932);
      }
      return _0x269464;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x5d4b2d;
  })();
}
ke(["click"]);
const ti = E("<div><div>");
function ni() {
  const {
    visible: _0x160a3d,
    setVisible: _0x93fed7,
    setCurrentItem: _0x3855c9,
    setItemsList: _0x22ebe5,
    setCraftingQueue: _0xb4888f
  } = _e();
  _0x91d80b.register("np-jail:crafting:show", async _0x2450d9 => {
    _0x3855c9(ie({}));
    _0x22ebe5(ie([]));
    _0xb4888f(ie([]));
    _0x93fed7(_0x2450d9);
  });
  Se(() => {
    document.addEventListener("keyup", _0x37a1b8 => {
      if (_0x37a1b8.key.includes("Escape")) {
        _0x91d80b.execute("np-jail:crafting:close");
      }
    });
  });
  return L(Pt, {
    name: "fade",
    get children() {
      return L(fe, {
        get when() {
          return _0x160a3d();
        },
        get children() {
          const _0x467bc9 = ti();
          const _0x4178fa = _0x467bc9.firstChild;
          b(_0x467bc9, L(kn, {}), _0x4178fa);
          b(_0x4178fa, L(ei, {}), null);
          b(_0x4178fa, L(Rn, {}), null);
          b(_0x4178fa, L(on, {}), null);
          S(_0x4a524b => {
            const _0x5efc79 = De.App;
            const _0x19f8b9 = De.content;
            if (_0x5efc79 !== _0x4a524b._v$) {
              $(_0x467bc9, _0x4a524b._v$ = _0x5efc79);
            }
            if (_0x19f8b9 !== _0x4a524b._v$2) {
              $(_0x4178fa, _0x4a524b._v$2 = _0x19f8b9);
            }
            return _0x4a524b;
          }, {
            _v$: undefined,
            _v$2: undefined
          });
          return _0x467bc9;
        }
      });
    }
  });
}
bt(() => L(Mt, {
  get children() {
    return L(ni, {});
  }
}), document.getElementById("root"));