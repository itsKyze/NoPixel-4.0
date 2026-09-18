import './style.css';
import { N as _0x5a273a } from "./v-packages-6cb79519.js";
(function () {
  const _0x1106bc = document.createElement("link").relList;
  if (_0x1106bc && _0x1106bc.supports && _0x1106bc.supports("modulepreload")) {
    return;
  }
  for (const _0x3fe086 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x947ec6(_0x3fe086);
  }
  new MutationObserver(_0x444495 => {
    for (const _0x51fb17 of _0x444495) {
      if (_0x51fb17.type === "childList") {
        for (const _0x1e7967 of _0x51fb17.addedNodes) {
          if (_0x1e7967.tagName === "LINK" && _0x1e7967.rel === "modulepreload") {
            _0x947ec6(_0x1e7967);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x33d152(_0x30ed19) {
    const _0x2cf4ed = {};
    if (_0x30ed19.integrity) {
      _0x2cf4ed.integrity = _0x30ed19.integrity;
    }
    if (_0x30ed19.referrerPolicy) {
      _0x2cf4ed.referrerPolicy = _0x30ed19.referrerPolicy;
    }
    if (_0x30ed19.crossOrigin === "use-credentials") {
      _0x2cf4ed.credentials = "include";
    } else if (_0x30ed19.crossOrigin === "anonymous") {
      _0x2cf4ed.credentials = "omit";
    } else {
      _0x2cf4ed.credentials = "same-origin";
    }
    return _0x2cf4ed;
  }
  function _0x947ec6(_0x5e6004) {
    if (_0x5e6004.ep) {
      return;
    }
    _0x5e6004.ep = true;
    const _0x1dfe0f = _0x33d152(_0x5e6004);
    fetch(_0x5e6004.href, _0x1dfe0f);
  }
})();
const me = (_0x354b5a, _0x204489) => _0x354b5a === _0x204489;
const v = Symbol("solid-proxy");
const fe = Symbol("solid-track");
const L = {
  equals: me
};
let ce = ye;
const A = 1;
const j = 2;
const de = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var c = null;
let G = null;
let u = null;
let g = null;
let p = null;
let K = 0;
function $e(_0xf96da, _0x188993) {
  const _0x2a4d43 = u;
  const _0x3be764 = c;
  const _0x2cd122 = _0xf96da.length === 0;
  const _0x15a30e = _0x2cd122 ? de : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x188993 === undefined ? _0x3be764 : _0x188993
  };
  const _0x1a1900 = _0x2cd122 ? _0xf96da : () => _0xf96da(() => w(() => k(_0x15a30e)));
  c = _0x15a30e;
  u = null;
  try {
    return $(_0x1a1900, true);
  } finally {
    u = _0x2a4d43;
    c = _0x3be764;
  }
}
function Ce(_0x2ab962, _0x2ce56d) {
  _0x2ce56d = _0x2ce56d ? Object.assign({}, L, _0x2ce56d) : L;
  const _0x14fae9 = {
    value: _0x2ab962,
    observers: null,
    observerSlots: null,
    comparator: _0x2ce56d.equals || undefined
  };
  const _0x15d972 = _0x560a1f => {
    if (typeof _0x560a1f == "function") {
      _0x560a1f = _0x560a1f(_0x14fae9.value);
    }
    return ge(_0x14fae9, _0x560a1f);
  };
  return [he.bind(_0x14fae9), _0x15d972];
}
function E(_0x47e634, _0x66c5aa, _0x30b04c) {
  const _0xdb3ff8 = Y(_0x47e634, _0x66c5aa, false, A);
  T(_0xdb3ff8);
}
function Oe(_0x5f5064, _0x1c8913, _0xb62fa) {
  ce = Re;
  const _0x1ba7ee = Y(_0x5f5064, _0x1c8913, false, A);
  if (!_0xb62fa || !_0xb62fa.render) {
    _0x1ba7ee.user = true;
  }
  if (p) {
    p.push(_0x1ba7ee);
  } else {
    T(_0x1ba7ee);
  }
}
function P(_0x304750, _0x19da5a, _0x3e29c6) {
  _0x3e29c6 = _0x3e29c6 ? Object.assign({}, L, _0x3e29c6) : L;
  const _0x20f92e = Y(_0x304750, _0x19da5a, true, 0);
  _0x20f92e.observers = null;
  _0x20f92e.observerSlots = null;
  _0x20f92e.comparator = _0x3e29c6.equals || undefined;
  T(_0x20f92e);
  return he.bind(_0x20f92e);
}
function xe(_0x1579ef) {
  return $(_0x1579ef, false);
}
function w(_0x3b0bca) {
  if (u === null) {
    return _0x3b0bca();
  }
  const _0x36ea24 = u;
  u = null;
  try {
    return _0x3b0bca();
  } finally {
    u = _0x36ea24;
  }
}
function Ee(_0x1b981c) {
  Oe(() => w(_0x1b981c));
}
function Pe(_0x52a09e) {
  if (c !== null) {
    if (c.cleanups === null) {
      c.cleanups = [_0x52a09e];
    } else {
      c.cleanups.push(_0x52a09e);
    }
  }
  return _0x52a09e;
}
function ae() {
  return u;
}
function Ne(_0x3331fa, _0x1eda79) {
  const _0x5d285b = Symbol("context");
  return {
    id: _0x5d285b,
    Provider: Ue(_0x5d285b),
    defaultValue: _0x3331fa
  };
}
function De(_0x348976) {
  let _0x369257;
  if ((_0x369257 = be(c, _0x348976.id)) !== undefined) {
    return _0x369257;
  } else {
    return _0x348976.defaultValue;
  }
}
function Te(_0x5a71e6) {
  const _0xd20dd9 = P(_0x5a71e6);
  const _0x200c87 = P(() => H(_0xd20dd9()));
  _0x200c87.toArray = () => {
    const _0x5b1bc2 = _0x200c87();
    if (Array.isArray(_0x5b1bc2)) {
      return _0x5b1bc2;
    } else if (_0x5b1bc2 != null) {
      return [_0x5b1bc2];
    } else {
      return [];
    }
  };
  return _0x200c87;
}
function he() {
  if (this.sources && this.state) {
    if (this.state === A) {
      T(this);
    } else {
      const _0x4cd1c1 = g;
      g = null;
      $(() => U(this), false);
      g = _0x4cd1c1;
    }
  }
  if (u) {
    const _0x5dc1a5 = this.observers ? this.observers.length : 0;
    if (u.sources) {
      u.sources.push(this);
      u.sourceSlots.push(_0x5dc1a5);
    } else {
      u.sources = [this];
      u.sourceSlots = [_0x5dc1a5];
    }
    if (this.observers) {
      this.observers.push(u);
      this.observerSlots.push(u.sources.length - 1);
    } else {
      this.observers = [u];
      this.observerSlots = [u.sources.length - 1];
    }
  }
  return this.value;
}
function ge(_0x278383, _0x4786da, _0x477f40) {
  let _0x8dc389 = _0x278383.value;
  if (!_0x278383.comparator || !_0x278383.comparator(_0x8dc389, _0x4786da)) {
    _0x278383.value = _0x4786da;
    if (_0x278383.observers && _0x278383.observers.length) {
      $(() => {
        for (let _0x198922 = 0; _0x198922 < _0x278383.observers.length; _0x198922 += 1) {
          const _0xe35799 = _0x278383.observers[_0x198922];
          const _0x567f0a = G && G.running;
          if (_0x567f0a) {
            G.disposed.has(_0xe35799);
          }
          if (_0x567f0a ? !_0xe35799.tState : !_0xe35799.state) {
            if (_0xe35799.pure) {
              g.push(_0xe35799);
            } else {
              p.push(_0xe35799);
            }
            if (_0xe35799.observers) {
              pe(_0xe35799);
            }
          }
          if (!_0x567f0a) {
            _0xe35799.state = A;
          }
        }
        if (g.length > 1000000) {
          g = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x4786da;
}
function T(_0x4d87d7) {
  if (!_0x4d87d7.fn) {
    return;
  }
  k(_0x4d87d7);
  const _0x72cd99 = c;
  const _0x1eaa92 = u;
  const _0x150f79 = K;
  u = c = _0x4d87d7;
  Le(_0x4d87d7, _0x4d87d7.value, _0x150f79);
  u = _0x1eaa92;
  c = _0x72cd99;
}
function Le(_0x4de367, _0x2862fe, _0x207834) {
  let _0x4c7458;
  try {
    _0x4c7458 = _0x4de367.fn(_0x2862fe);
  } catch (_0x404d8e) {
    if (_0x4de367.pure) {
      _0x4de367.state = A;
      if (_0x4de367.owned) {
        _0x4de367.owned.forEach(k);
      }
      _0x4de367.owned = null;
    }
    _0x4de367.updatedAt = _0x207834 + 1;
    return _e(_0x404d8e);
  }
  if (!_0x4de367.updatedAt || _0x4de367.updatedAt <= _0x207834) {
    if (_0x4de367.updatedAt != null && "observers" in _0x4de367) {
      ge(_0x4de367, _0x4c7458);
    } else {
      _0x4de367.value = _0x4c7458;
    }
    _0x4de367.updatedAt = _0x207834;
  }
}
function Y(_0x7e24be, _0x29305c, _0x1fc2ab, _0x5177bc = A, _0x32316e) {
  const _0x36fffb = {
    fn: _0x7e24be,
    state: _0x5177bc,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x29305c,
    owner: c,
    context: null,
    pure: _0x1fc2ab
  };
  if (c !== null) {
    if (c !== de) {
      if (c.owned) {
        c.owned.push(_0x36fffb);
      } else {
        c.owned = [_0x36fffb];
      }
    }
  }
  return _0x36fffb;
}
function R(_0x58d78f) {
  if (_0x58d78f.state === 0) {
    return;
  }
  if (_0x58d78f.state === j) {
    return U(_0x58d78f);
  }
  if (_0x58d78f.suspense && w(_0x58d78f.suspense.inFallback)) {
    return _0x58d78f.suspense.effects.push(_0x58d78f);
  }
  const _0xec0d53 = [_0x58d78f];
  while ((_0x58d78f = _0x58d78f.owner) && (!_0x58d78f.updatedAt || _0x58d78f.updatedAt < K)) {
    if (_0x58d78f.state) {
      _0xec0d53.push(_0x58d78f);
    }
  }
  for (let _0x118556 = _0xec0d53.length - 1; _0x118556 >= 0; _0x118556--) {
    _0x58d78f = _0xec0d53[_0x118556];
    if (_0x58d78f.state === A) {
      T(_0x58d78f);
    } else if (_0x58d78f.state === j) {
      const _0x309eb2 = g;
      g = null;
      $(() => U(_0x58d78f, _0xec0d53[0]), false);
      g = _0x309eb2;
    }
  }
}
function $(_0x421c96, _0x85c68c) {
  if (g) {
    return _0x421c96();
  }
  let _0x21ac77 = false;
  if (!_0x85c68c) {
    g = [];
  }
  if (p) {
    _0x21ac77 = true;
  } else {
    p = [];
  }
  K++;
  try {
    const _0x59beef = _0x421c96();
    je(_0x21ac77);
    return _0x59beef;
  } catch (_0x5ee722) {
    if (!_0x21ac77) {
      p = null;
    }
    g = null;
    _e(_0x5ee722);
  }
}
function je(_0x3b2d8b) {
  if (g) {
    ye(g);
    g = null;
  }
  if (_0x3b2d8b) {
    return;
  }
  const _0x3d63ae = p;
  p = null;
  if (_0x3d63ae.length) {
    $(() => ce(_0x3d63ae), false);
  }
}
function ye(_0x41de48) {
  for (let _0x3c2e84 = 0; _0x3c2e84 < _0x41de48.length; _0x3c2e84++) {
    R(_0x41de48[_0x3c2e84]);
  }
}
function Re(_0x432c2e) {
  let _0x5464c3;
  let _0x280d66 = 0;
  for (_0x5464c3 = 0; _0x5464c3 < _0x432c2e.length; _0x5464c3++) {
    const _0x29e2dd = _0x432c2e[_0x5464c3];
    if (_0x29e2dd.user) {
      _0x432c2e[_0x280d66++] = _0x29e2dd;
    } else {
      R(_0x29e2dd);
    }
  }
  for (_0x5464c3 = 0; _0x5464c3 < _0x280d66; _0x5464c3++) {
    R(_0x432c2e[_0x5464c3]);
  }
}
function U(_0x1bd43d, _0xc1c4ca) {
  _0x1bd43d.state = 0;
  for (let _0x6240d7 = 0; _0x6240d7 < _0x1bd43d.sources.length; _0x6240d7 += 1) {
    const _0x4487c5 = _0x1bd43d.sources[_0x6240d7];
    if (_0x4487c5.sources) {
      const _0x34e3a0 = _0x4487c5.state;
      if (_0x34e3a0 === A) {
        if (_0x4487c5 !== _0xc1c4ca && (!_0x4487c5.updatedAt || _0x4487c5.updatedAt < K)) {
          R(_0x4487c5);
        }
      } else if (_0x34e3a0 === j) {
        U(_0x4487c5, _0xc1c4ca);
      }
    }
  }
}
function pe(_0x98e5df) {
  for (let _0x199a89 = 0; _0x199a89 < _0x98e5df.observers.length; _0x199a89 += 1) {
    const _0x5d690a = _0x98e5df.observers[_0x199a89];
    if (!_0x5d690a.state) {
      _0x5d690a.state = j;
      if (_0x5d690a.pure) {
        g.push(_0x5d690a);
      } else {
        p.push(_0x5d690a);
      }
      if (_0x5d690a.observers) {
        pe(_0x5d690a);
      }
    }
  }
}
function k(_0x253b0e) {
  let _0x4c05ae;
  if (_0x253b0e.sources) {
    while (_0x253b0e.sources.length) {
      const _0x325736 = _0x253b0e.sources.pop();
      const _0x1b198f = _0x253b0e.sourceSlots.pop();
      const _0x257f46 = _0x325736.observers;
      if (_0x257f46 && _0x257f46.length) {
        const _0x34054f = _0x257f46.pop();
        const _0x2eca8c = _0x325736.observerSlots.pop();
        if (_0x1b198f < _0x257f46.length) {
          _0x34054f.sourceSlots[_0x2eca8c] = _0x1b198f;
          _0x257f46[_0x1b198f] = _0x34054f;
          _0x325736.observerSlots[_0x1b198f] = _0x2eca8c;
        }
      }
    }
  }
  if (_0x253b0e.owned) {
    for (_0x4c05ae = _0x253b0e.owned.length - 1; _0x4c05ae >= 0; _0x4c05ae--) {
      k(_0x253b0e.owned[_0x4c05ae]);
    }
    _0x253b0e.owned = null;
  }
  if (_0x253b0e.cleanups) {
    for (_0x4c05ae = _0x253b0e.cleanups.length - 1; _0x4c05ae >= 0; _0x4c05ae--) {
      _0x253b0e.cleanups[_0x4c05ae]();
    }
    _0x253b0e.cleanups = null;
  }
  _0x253b0e.state = 0;
  _0x253b0e.context = null;
}
function _e(_0x48fe39) {
  throw _0x48fe39;
}
function be(_0x18b2b7, _0x5ee431) {
  if (_0x18b2b7) {
    if (_0x18b2b7.context && _0x18b2b7.context[_0x5ee431] !== undefined) {
      return _0x18b2b7.context[_0x5ee431];
    } else {
      return be(_0x18b2b7.owner, _0x5ee431);
    }
  } else {
    return undefined;
  }
}
function H(_0x3dced9) {
  if (typeof _0x3dced9 == "function" && !_0x3dced9.length) {
    return H(_0x3dced9());
  }
  if (Array.isArray(_0x3dced9)) {
    const _0x583759 = [];
    for (let _0x3c119d = 0; _0x3c119d < _0x3dced9.length; _0x3c119d++) {
      const _0xab8784 = H(_0x3dced9[_0x3c119d]);
      if (Array.isArray(_0xab8784)) {
        _0x583759.push.apply(_0x583759, _0xab8784);
      } else {
        _0x583759.push(_0xab8784);
      }
    }
    return _0x583759;
  }
  return _0x3dced9;
}
function Ue(_0x4ec2d1, _0x5281b8) {
  return function (_0xb8088) {
    let _0x883ada;
    E(() => _0x883ada = w(() => {
      c.context = {
        [_0x4ec2d1]: _0xb8088.value
      };
      return Te(() => _0xb8088.children);
    }), undefined);
    return _0x883ada;
  };
}
function I(_0x33ecea, _0x479478) {
  return w(() => _0x33ecea(_0x479478 || {}));
}
const Ie = _0x4b14bd => "Stale read from <" + _0x4b14bd + ">.";
function Be(_0x3ccab6) {
  const _0x38005d = _0x3ccab6.keyed;
  const _0x4ef919 = P(() => _0x3ccab6.when, undefined, {
    equals: (_0xbcdbd6, _0x524f35) => _0x38005d ? _0xbcdbd6 === _0x524f35 : !_0xbcdbd6 == !_0x524f35
  });
  return P(() => {
    const _0x4cef28 = _0x4ef919();
    if (_0x4cef28) {
      const _0x43e14a = _0x3ccab6.children;
      if (typeof _0x43e14a == "function" && _0x43e14a.length > 0) {
        return w(() => _0x43e14a(_0x38005d ? _0x4cef28 : () => {
          if (!w(_0x4ef919)) {
            throw Ie("Show");
          }
          return _0x3ccab6.when;
        }));
      } else {
        return _0x43e14a;
      }
    }
    return _0x3ccab6.fallback;
  }, undefined, undefined);
}
function Fe(_0x15fa11, _0xe675e3, _0x415248) {
  let _0x2156c4 = _0x415248.length;
  let _0x5c2da1 = _0xe675e3.length;
  let _0xc266e4 = _0x2156c4;
  let _0x12e9df = 0;
  let _0xf9a6f9 = 0;
  let _0x42fe25 = _0xe675e3[_0x5c2da1 - 1].nextSibling;
  let _0x577da5 = null;
  while (_0x12e9df < _0x5c2da1 || _0xf9a6f9 < _0xc266e4) {
    if (_0xe675e3[_0x12e9df] === _0x415248[_0xf9a6f9]) {
      _0x12e9df++;
      _0xf9a6f9++;
      continue;
    }
    while (_0xe675e3[_0x5c2da1 - 1] === _0x415248[_0xc266e4 - 1]) {
      _0x5c2da1--;
      _0xc266e4--;
    }
    if (_0x5c2da1 === _0x12e9df) {
      const _0x272f35 = _0xc266e4 < _0x2156c4 ? _0xf9a6f9 ? _0x415248[_0xf9a6f9 - 1].nextSibling : _0x415248[_0xc266e4 - _0xf9a6f9] : _0x42fe25;
      while (_0xf9a6f9 < _0xc266e4) {
        _0x15fa11.insertBefore(_0x415248[_0xf9a6f9++], _0x272f35);
      }
    } else if (_0xc266e4 === _0xf9a6f9) {
      while (_0x12e9df < _0x5c2da1) {
        if (!_0x577da5 || !_0x577da5.has(_0xe675e3[_0x12e9df])) {
          _0xe675e3[_0x12e9df].remove();
        }
        _0x12e9df++;
      }
    } else if (_0xe675e3[_0x12e9df] === _0x415248[_0xc266e4 - 1] && _0x415248[_0xf9a6f9] === _0xe675e3[_0x5c2da1 - 1]) {
      const _0x19ea57 = _0xe675e3[--_0x5c2da1].nextSibling;
      _0x15fa11.insertBefore(_0x415248[_0xf9a6f9++], _0xe675e3[_0x12e9df++].nextSibling);
      _0x15fa11.insertBefore(_0x415248[--_0xc266e4], _0x19ea57);
      _0xe675e3[_0x5c2da1] = _0x415248[_0xc266e4];
    } else {
      if (!_0x577da5) {
        _0x577da5 = new Map();
        let _0x41cb0a = _0xf9a6f9;
        while (_0x41cb0a < _0xc266e4) {
          _0x577da5.set(_0x415248[_0x41cb0a], _0x41cb0a++);
        }
      }
      const _0x4e8cfa = _0x577da5.get(_0xe675e3[_0x12e9df]);
      if (_0x4e8cfa != null) {
        if (_0xf9a6f9 < _0x4e8cfa && _0x4e8cfa < _0xc266e4) {
          let _0xae2738 = _0x12e9df;
          let _0x3c170a = 1;
          let _0x21d147;
          while (++_0xae2738 < _0x5c2da1 && _0xae2738 < _0xc266e4 && (_0x21d147 = _0x577da5.get(_0xe675e3[_0xae2738])) != null && _0x21d147 === _0x4e8cfa + _0x3c170a) {
            _0x3c170a++;
          }
          if (_0x3c170a > _0x4e8cfa - _0xf9a6f9) {
            const _0x3dc175 = _0xe675e3[_0x12e9df];
            while (_0xf9a6f9 < _0x4e8cfa) {
              _0x15fa11.insertBefore(_0x415248[_0xf9a6f9++], _0x3dc175);
            }
          } else {
            _0x15fa11.replaceChild(_0x415248[_0xf9a6f9++], _0xe675e3[_0x12e9df++]);
          }
        } else {
          _0x12e9df++;
        }
      } else {
        _0xe675e3[_0x12e9df++].remove();
      }
    }
  }
}
function Me(_0x5c9d91, _0x5845c6, _0x35856e, _0x33885c = {}) {
  let _0x132ddb;
  $e(_0x40c99c => {
    _0x132ddb = _0x40c99c;
    if (_0x5845c6 === document) {
      _0x5c9d91();
    } else {
      O(_0x5845c6, _0x5c9d91(), _0x5845c6.firstChild ? null : undefined, _0x35856e);
    }
  }, _0x33885c.owner);
  return () => {
    _0x132ddb();
    _0x5845c6.textContent = "";
  };
}
function Ke(_0x5b168a, _0x3cf464, _0x4c6f5e) {
  let _0x147892;
  const _0x45f5f6 = () => {
    const _0x3375f2 = document.createElement("template");
    _0x3375f2.innerHTML = _0x5b168a;
    if (_0x4c6f5e) {
      return _0x3375f2.content.firstChild.firstChild;
    } else {
      return _0x3375f2.content.firstChild;
    }
  };
  const _0x55876a = _0x3cf464 ? () => w(() => document.importNode(_0x147892 ||= _0x45f5f6(), true)) : () => (_0x147892 ||= _0x45f5f6()).cloneNode(true);
  _0x55876a.cloneNode = _0x55876a;
  return _0x55876a;
}
function ke(_0x4f4336, _0x1f0e3f, _0x30ea13) {
  if (_0x30ea13 == null) {
    _0x4f4336.removeAttribute(_0x1f0e3f);
  } else {
    _0x4f4336.setAttribute(_0x1f0e3f, _0x30ea13);
  }
}
function _(_0x1be4a4, _0x5a9621) {
  if (_0x5a9621 == null) {
    _0x1be4a4.removeAttribute("class");
  } else {
    _0x1be4a4.className = _0x5a9621;
  }
}
function O(_0x56a6f1, _0xa70ad, _0x5cc37e, _0x286669) {
  if (_0x5cc37e !== undefined && !_0x286669) {
    _0x286669 = [];
  }
  if (typeof _0xa70ad != "function") {
    return B(_0x56a6f1, _0xa70ad, _0x286669, _0x5cc37e);
  }
  E(_0x290e6b => B(_0x56a6f1, _0xa70ad(), _0x290e6b, _0x5cc37e), _0x286669);
}
function B(_0x269e6a, _0x573437, _0x326451, _0xaf09a8, _0x1276be) {
  while (typeof _0x326451 == "function") {
    _0x326451 = _0x326451();
  }
  if (_0x573437 === _0x326451) {
    return _0x326451;
  }
  const _0x4b3be9 = typeof _0x573437;
  const _0x57b3e9 = _0xaf09a8 !== undefined;
  _0x269e6a = _0x57b3e9 && _0x326451[0] && _0x326451[0].parentNode || _0x269e6a;
  if (_0x4b3be9 === "string" || _0x4b3be9 === "number") {
    if (_0x4b3be9 === "number") {
      _0x573437 = _0x573437.toString();
    }
    if (_0x57b3e9) {
      let _0x2b9e51 = _0x326451[0];
      if (_0x2b9e51 && _0x2b9e51.nodeType === 3) {
        _0x2b9e51.data = _0x573437;
      } else {
        _0x2b9e51 = document.createTextNode(_0x573437);
      }
      _0x326451 = m(_0x269e6a, _0x326451, _0xaf09a8, _0x2b9e51);
    } else if (_0x326451 !== "" && typeof _0x326451 == "string") {
      _0x326451 = _0x269e6a.firstChild.data = _0x573437;
    } else {
      _0x326451 = _0x269e6a.textContent = _0x573437;
    }
  } else if (_0x573437 == null || _0x4b3be9 === "boolean") {
    _0x326451 = m(_0x269e6a, _0x326451, _0xaf09a8);
  } else {
    if (_0x4b3be9 === "function") {
      E(() => {
        let _0x5a5338 = _0x573437();
        while (typeof _0x5a5338 == "function") {
          _0x5a5338 = _0x5a5338();
        }
        _0x326451 = B(_0x269e6a, _0x5a5338, _0x326451, _0xaf09a8);
      });
      return () => _0x326451;
    }
    if (Array.isArray(_0x573437)) {
      const _0x49aaec = [];
      const _0x1aa988 = _0x326451 && Array.isArray(_0x326451);
      if (J(_0x49aaec, _0x573437, _0x326451, _0x1276be)) {
        E(() => _0x326451 = B(_0x269e6a, _0x49aaec, _0x326451, _0xaf09a8, true));
        return () => _0x326451;
      }
      if (_0x49aaec.length === 0) {
        _0x326451 = m(_0x269e6a, _0x326451, _0xaf09a8);
        if (_0x57b3e9) {
          return _0x326451;
        }
      } else if (_0x1aa988) {
        if (_0x326451.length === 0) {
          ue(_0x269e6a, _0x49aaec, _0xaf09a8);
        } else {
          Fe(_0x269e6a, _0x326451, _0x49aaec);
        }
      } else {
        if (_0x326451) {
          m(_0x269e6a);
        }
        ue(_0x269e6a, _0x49aaec);
      }
      _0x326451 = _0x49aaec;
    } else if (_0x573437.nodeType) {
      if (Array.isArray(_0x326451)) {
        if (_0x57b3e9) {
          return _0x326451 = m(_0x269e6a, _0x326451, _0xaf09a8, _0x573437);
        }
        m(_0x269e6a, _0x326451, null, _0x573437);
      } else if (_0x326451 == null || _0x326451 === "" || !_0x269e6a.firstChild) {
        _0x269e6a.appendChild(_0x573437);
      } else {
        _0x269e6a.replaceChild(_0x573437, _0x269e6a.firstChild);
      }
      _0x326451 = _0x573437;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x573437);
    }
  }
  return _0x326451;
}
function J(_0x2138c2, _0x461593, _0x4fe2d7, _0x508e5e) {
  let _0x5db131 = false;
  for (let _0x4fffce = 0, _0x147254 = _0x461593.length; _0x4fffce < _0x147254; _0x4fffce++) {
    let _0x3472a7 = _0x461593[_0x4fffce];
    let _0x58c917 = _0x4fe2d7 && _0x4fe2d7[_0x4fffce];
    let _0x36dfd5;
    if (_0x3472a7 != null && _0x3472a7 !== true && _0x3472a7 !== false) {
      if ((_0x36dfd5 = typeof _0x3472a7) == "object" && _0x3472a7.nodeType) {
        _0x2138c2.push(_0x3472a7);
      } else if (Array.isArray(_0x3472a7)) {
        _0x5db131 = J(_0x2138c2, _0x3472a7, _0x58c917) || _0x5db131;
      } else if (_0x36dfd5 === "function") {
        if (_0x508e5e) {
          while (typeof _0x3472a7 == "function") {
            _0x3472a7 = _0x3472a7();
          }
          _0x5db131 = J(_0x2138c2, Array.isArray(_0x3472a7) ? _0x3472a7 : [_0x3472a7], Array.isArray(_0x58c917) ? _0x58c917 : [_0x58c917]) || _0x5db131;
        } else {
          _0x2138c2.push(_0x3472a7);
          _0x5db131 = true;
        }
      } else {
        const _0x21b081 = String(_0x3472a7);
        if (_0x58c917 && _0x58c917.nodeType === 3 && _0x58c917.data === _0x21b081) {
          _0x2138c2.push(_0x58c917);
        } else {
          _0x2138c2.push(document.createTextNode(_0x21b081));
        }
      }
    }
  }
  return _0x5db131;
}
function ue(_0x5551ea, _0x5aafc5, _0x5352e5 = null) {
  for (let _0x326da0 = 0, _0x4f35b2 = _0x5aafc5.length; _0x326da0 < _0x4f35b2; _0x326da0++) {
    _0x5551ea.insertBefore(_0x5aafc5[_0x326da0], _0x5352e5);
  }
}
function m(_0x48940e, _0x5c5b82, _0x1942f1, _0x1db7fc) {
  if (_0x1942f1 === undefined) {
    return _0x48940e.textContent = "";
  }
  const _0x1d42f4 = _0x1db7fc || document.createTextNode("");
  if (_0x5c5b82.length) {
    let _0x23a274 = false;
    for (let _0x499c5c = _0x5c5b82.length - 1; _0x499c5c >= 0; _0x499c5c--) {
      const _0x2e7bca = _0x5c5b82[_0x499c5c];
      if (_0x1d42f4 !== _0x2e7bca) {
        const _0xabf20b = _0x2e7bca.parentNode === _0x48940e;
        if (!_0x23a274 && !_0x499c5c) {
          if (_0xabf20b) {
            _0x48940e.replaceChild(_0x1d42f4, _0x2e7bca);
          } else {
            _0x48940e.insertBefore(_0x1d42f4, _0x1942f1);
          }
        } else if (_0xabf20b) {
          _0x2e7bca.remove();
        }
      } else {
        _0x23a274 = true;
      }
    }
  } else {
    _0x48940e.insertBefore(_0x1d42f4, _0x1942f1);
  }
  return [_0x1d42f4];
}
const Q = Symbol("store-raw");
const N = Symbol("store-node");
function we(_0x26cce) {
  let _0xb7ca9f = _0x26cce[v];
  if (!_0xb7ca9f && (Object.defineProperty(_0x26cce, v, {
    value: _0xb7ca9f = new Proxy(_0x26cce, Ve)
  }), !Array.isArray(_0x26cce))) {
    const _0x2eb2b6 = Object.keys(_0x26cce);
    const _0x208948 = Object.getOwnPropertyDescriptors(_0x26cce);
    for (let _0x4a1cb3 = 0, _0x3b91eb = _0x2eb2b6.length; _0x4a1cb3 < _0x3b91eb; _0x4a1cb3++) {
      const _0x2bbc43 = _0x2eb2b6[_0x4a1cb3];
      if (_0x208948[_0x2bbc43].get) {
        Object.defineProperty(_0x26cce, _0x2bbc43, {
          enumerable: _0x208948[_0x2bbc43].enumerable,
          get: _0x208948[_0x2bbc43].get.bind(_0xb7ca9f)
        });
      }
    }
  }
  return _0xb7ca9f;
}
function F(_0x44fe14) {
  let _0x3a5279;
  return _0x44fe14 != null && typeof _0x44fe14 == "object" && (_0x44fe14[v] || !(_0x3a5279 = Object.getPrototypeOf(_0x44fe14)) || _0x3a5279 === Object.prototype || Array.isArray(_0x44fe14));
}
function D(_0x57ba23, _0x1c2070 = new Set()) {
  let _0x488d46;
  let _0x378ef1;
  let _0x323afd;
  let _0x1cd665;
  if (_0x488d46 = _0x57ba23 != null && _0x57ba23[Q]) {
    return _0x488d46;
  }
  if (!F(_0x57ba23) || _0x1c2070.has(_0x57ba23)) {
    return _0x57ba23;
  }
  if (Array.isArray(_0x57ba23)) {
    if (Object.isFrozen(_0x57ba23)) {
      _0x57ba23 = _0x57ba23.slice(0);
    } else {
      _0x1c2070.add(_0x57ba23);
    }
    for (let _0x1e3b95 = 0, _0x177ad8 = _0x57ba23.length; _0x1e3b95 < _0x177ad8; _0x1e3b95++) {
      _0x323afd = _0x57ba23[_0x1e3b95];
      if ((_0x378ef1 = D(_0x323afd, _0x1c2070)) !== _0x323afd) {
        _0x57ba23[_0x1e3b95] = _0x378ef1;
      }
    }
  } else {
    if (Object.isFrozen(_0x57ba23)) {
      _0x57ba23 = Object.assign({}, _0x57ba23);
    } else {
      _0x1c2070.add(_0x57ba23);
    }
    const _0x258d1d = Object.keys(_0x57ba23);
    const _0x2afdbf = Object.getOwnPropertyDescriptors(_0x57ba23);
    for (let _0x21b084 = 0, _0x2d92fd = _0x258d1d.length; _0x21b084 < _0x2d92fd; _0x21b084++) {
      _0x1cd665 = _0x258d1d[_0x21b084];
      if (!_0x2afdbf[_0x1cd665].get) {
        _0x323afd = _0x57ba23[_0x1cd665];
        if ((_0x378ef1 = D(_0x323afd, _0x1c2070)) !== _0x323afd) {
          _0x57ba23[_0x1cd665] = _0x378ef1;
        }
      }
    }
  }
  return _0x57ba23;
}
function Z(_0x3c22f4) {
  let _0x4e3e24 = _0x3c22f4[N];
  if (!_0x4e3e24) {
    Object.defineProperty(_0x3c22f4, N, {
      value: _0x4e3e24 = Object.create(null)
    });
  }
  return _0x4e3e24;
}
function X(_0x394205, _0x37b4d5, _0x24ac9c) {
  return _0x394205[_0x37b4d5] ||= ve(_0x24ac9c);
}
function qe(_0x1256c0, _0x1b6e3f) {
  const _0x2fb386 = Reflect.getOwnPropertyDescriptor(_0x1256c0, _0x1b6e3f);
  if (!!_0x2fb386 && !_0x2fb386.get && !!_0x2fb386.configurable && _0x1b6e3f !== v && _0x1b6e3f !== N) {
    delete _0x2fb386.value;
    delete _0x2fb386.writable;
    _0x2fb386.get = () => _0x1256c0[v][_0x1b6e3f];
  }
  return _0x2fb386;
}
function Ae(_0x16227b) {
  if (ae()) {
    const _0x6ef99d = Z(_0x16227b);
    (_0x6ef99d._ ||= ve())();
  }
}
function We(_0x4e4772) {
  Ae(_0x4e4772);
  return Reflect.ownKeys(_0x4e4772);
}
function ve(_0x254bc1) {
  const [_0x500d5a, _0x1f992] = Ce(_0x254bc1, {
    equals: false,
    internal: true
  });
  _0x500d5a.$ = _0x1f992;
  return _0x500d5a;
}
const Ve = {
  get(_0x10f6ce, _0x4ec29b, _0x281142) {
    if (_0x4ec29b === Q) {
      return _0x10f6ce;
    }
    if (_0x4ec29b === v) {
      return _0x281142;
    }
    if (_0x4ec29b === fe) {
      Ae(_0x10f6ce);
      return _0x281142;
    }
    const _0x23a2ba = Z(_0x10f6ce);
    const _0x3dbbb1 = _0x23a2ba[_0x4ec29b];
    let _0x5ad364 = _0x3dbbb1 ? _0x3dbbb1() : _0x10f6ce[_0x4ec29b];
    if (_0x4ec29b === N || _0x4ec29b === "__proto__") {
      return _0x5ad364;
    }
    if (!_0x3dbbb1) {
      const _0x241d8b = Object.getOwnPropertyDescriptor(_0x10f6ce, _0x4ec29b);
      if (ae() && (typeof _0x5ad364 != "function" || _0x10f6ce.hasOwnProperty(_0x4ec29b)) && (!_0x241d8b || !_0x241d8b.get)) {
        _0x5ad364 = X(_0x23a2ba, _0x4ec29b, _0x5ad364)();
      }
    }
    if (F(_0x5ad364)) {
      return we(_0x5ad364);
    } else {
      return _0x5ad364;
    }
  },
  has(_0x46cf8e, _0x5ed982) {
    if (_0x5ed982 === Q || _0x5ed982 === v || _0x5ed982 === fe || _0x5ed982 === N || _0x5ed982 === "__proto__") {
      return true;
    } else {
      this.get(_0x46cf8e, _0x5ed982, _0x46cf8e);
      return _0x5ed982 in _0x46cf8e;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: We,
  getOwnPropertyDescriptor: qe
};
function M(_0x7bf988, _0x25fa16, _0x250511, _0x22e3af = false) {
  if (!_0x22e3af && _0x7bf988[_0x25fa16] === _0x250511) {
    return;
  }
  const _0x52755e = _0x7bf988[_0x25fa16];
  const _0x50936e = _0x7bf988.length;
  if (_0x250511 === undefined) {
    delete _0x7bf988[_0x25fa16];
  } else {
    _0x7bf988[_0x25fa16] = _0x250511;
  }
  let _0x18c179 = Z(_0x7bf988);
  let _0xa0bd13;
  if (_0xa0bd13 = X(_0x18c179, _0x25fa16, _0x52755e)) {
    _0xa0bd13.$(() => _0x250511);
  }
  if (Array.isArray(_0x7bf988) && _0x7bf988.length !== _0x50936e) {
    for (let _0x1a0494 = _0x7bf988.length; _0x1a0494 < _0x50936e; _0x1a0494++) {
      if (_0xa0bd13 = _0x18c179[_0x1a0494]) {
        _0xa0bd13.$();
      }
    }
    if (_0xa0bd13 = X(_0x18c179, "length", _0x50936e)) {
      _0xa0bd13.$(_0x7bf988.length);
    }
  }
  if (_0xa0bd13 = _0x18c179._) {
    _0xa0bd13.$();
  }
}
function Se(_0x4319c5, _0x43ded3) {
  const _0x46bbc4 = Object.keys(_0x43ded3);
  for (let _0x414872 = 0; _0x414872 < _0x46bbc4.length; _0x414872 += 1) {
    const _0x1536fe = _0x46bbc4[_0x414872];
    M(_0x4319c5, _0x1536fe, _0x43ded3[_0x1536fe]);
  }
}
function Ge(_0x21bd1e, _0x2f910b) {
  if (typeof _0x2f910b == "function") {
    _0x2f910b = _0x2f910b(_0x21bd1e);
  }
  _0x2f910b = D(_0x2f910b);
  if (Array.isArray(_0x2f910b)) {
    if (_0x21bd1e === _0x2f910b) {
      return;
    }
    let _0x43d877 = 0;
    let _0x27f84a = _0x2f910b.length;
    for (; _0x43d877 < _0x27f84a; _0x43d877++) {
      const _0x4f1580 = _0x2f910b[_0x43d877];
      if (_0x21bd1e[_0x43d877] !== _0x4f1580) {
        M(_0x21bd1e, _0x43d877, _0x4f1580);
      }
    }
    M(_0x21bd1e, "length", _0x27f84a);
  } else {
    Se(_0x21bd1e, _0x2f910b);
  }
}
function x(_0x3111cd, _0x594627, _0x26dc41 = []) {
  let _0x58f6ee;
  let _0x4632d7 = _0x3111cd;
  if (_0x594627.length > 1) {
    _0x58f6ee = _0x594627.shift();
    const _0x47e5ac = typeof _0x58f6ee;
    const _0x3eab5b = Array.isArray(_0x3111cd);
    if (Array.isArray(_0x58f6ee)) {
      for (let _0x2ce484 = 0; _0x2ce484 < _0x58f6ee.length; _0x2ce484++) {
        x(_0x3111cd, [_0x58f6ee[_0x2ce484]].concat(_0x594627), _0x26dc41);
      }
      return;
    } else if (_0x3eab5b && _0x47e5ac === "function") {
      for (let _0x40eeba = 0; _0x40eeba < _0x3111cd.length; _0x40eeba++) {
        if (_0x58f6ee(_0x3111cd[_0x40eeba], _0x40eeba)) {
          x(_0x3111cd, [_0x40eeba].concat(_0x594627), _0x26dc41);
        }
      }
      return;
    } else if (_0x3eab5b && _0x47e5ac === "object") {
      const {
        from: _0x181f8a = 0,
        to: _0x26e4dc = _0x3111cd.length - 1,
        by: _0x138df2 = 1
      } = _0x58f6ee;
      for (let _0xf25ba2 = _0x181f8a; _0xf25ba2 <= _0x26e4dc; _0xf25ba2 += _0x138df2) {
        x(_0x3111cd, [_0xf25ba2].concat(_0x594627), _0x26dc41);
      }
      return;
    } else if (_0x594627.length > 1) {
      x(_0x3111cd[_0x58f6ee], _0x594627, [_0x58f6ee].concat(_0x26dc41));
      return;
    }
    _0x4632d7 = _0x3111cd[_0x58f6ee];
    _0x26dc41 = [_0x58f6ee].concat(_0x26dc41);
  }
  let _0x404615 = _0x594627[0];
  if ((typeof _0x404615 != "function" || !(_0x404615 = _0x404615(_0x4632d7, _0x26dc41), _0x404615 === _0x4632d7)) && (_0x58f6ee !== undefined || _0x404615 != null)) {
    _0x404615 = D(_0x404615);
    if (_0x58f6ee === undefined || F(_0x4632d7) && F(_0x404615) && !Array.isArray(_0x404615)) {
      Se(_0x4632d7, _0x404615);
    } else {
      M(_0x3111cd, _0x58f6ee, _0x404615);
    }
  }
}
function He(...[_0x1cd105, _0x11f2dc]) {
  const _0x27575a = D(_0x1cd105 || {});
  const _0x1dd226 = Array.isArray(_0x27575a);
  const _0x3de114 = we(_0x27575a);
  function _0x3b966d(..._0xdd30af) {
    xe(() => {
      if (_0x1dd226 && _0xdd30af.length === 1) {
        Ge(_0x27575a, _0xdd30af[0]);
      } else {
        x(_0x27575a, _0xdd30af);
      }
    });
  }
  return [_0x3de114, _0x3b966d];
}
function Je(_0xdad9bc, _0x25abca) {
  const _0x44858f = Ne(_0x25abca);
  return [_0x5e8b1b => I(_0x44858f.Provider, {
    value: _0xdad9bc(_0x5e8b1b),
    get children() {
      return _0x5e8b1b.children;
    }
  }), () => De(_0x44858f)];
}
const [Qe, Xe] = Je(() => {
  const [_0x1dbd63, _0x149743] = He({
    show: false,
    title: "",
    date: 0,
    documentId: "",
    content: ""
  });
  return {
    state: _0x1dbd63,
    setState: _0x149743
  };
});
const Ye = () => Xe();
const Ze = "" + new URL("fib_logo-2d31a485.webp", import.meta.url).href;
const ze = "_container_1r2t1_4";
const et = "_document_1r2t1_12";
const tt = "_header_1r2t1_36";
const nt = "_logo_1r2t1_42";
const st = "_sub_header_1r2t1_55";
const it = "_title_1r2t1_81";
const ot = "_content_1r2t1_87";
const rt = "_document_id_1r2t1_93";
const lt = "_root_1r2t1_1";
const b = {
  container: ze,
  document: et,
  header: tt,
  logo: nt,
  sub_header: st,
  title: it,
  content: ot,
  document_id: rt,
  root: lt
};
const ft = Ke("<div><div><div><img><h1>U.S Department of Justice <p>Federal Investigation Bureau</div><div><h1>INTERNAL STATEMENT<p>For Immediate Review</h1><h1>Office of the Director<p><span>Date</span>: </div><h1></h1><p></p><span>#");
const ut = () => {
  const {
    state: _0x335899,
    setState: _0x46be63
  } = Ye();
  const _0x541992 = _0x128214 => {
    if (_0x128214.key === "Escape" && _0x335899.show) {
      _0x5a273a.execute("close");
    }
  };
  Ee(async () => {
    const _0x2e7371 = async _0x5d4fcd => {
      _0x46be63({
        ..._0x335899,
        ..._0x5d4fcd
      });
    };
    _0x5a273a.register("setState", _0x2e7371);
    document.addEventListener("keydown", _0x541992);
  });
  Pe(() => {
    document.removeEventListener("keydown", _0x541992);
  });
  const _0x2b5854 = P(() => {
    const _0x4e849d = new Date(_0x335899.date);
    const _0x5a6f06 = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return _0x4e849d.toLocaleDateString("en-US", _0x5a6f06);
  });
  return I(Be, {
    get when() {
      return _0x335899.show;
    },
    get children() {
      const _0x41f460 = ft();
      const _0x583b95 = _0x41f460.firstChild;
      const _0x11a529 = _0x583b95.firstChild;
      const _0x1eaa2e = _0x11a529.firstChild;
      const _0xd9832e = _0x11a529.nextSibling;
      const _0x1f1d39 = _0xd9832e.firstChild;
      const _0x5cb1ff = _0x1f1d39.nextSibling;
      const _0x3a5348 = _0x5cb1ff.firstChild;
      const _0x65526c = _0x3a5348.nextSibling;
      _0x65526c.firstChild.nextSibling;
      const _0xce09cf = _0xd9832e.nextSibling;
      const _0x6065b9 = _0xce09cf.nextSibling;
      const _0x2f63ad = _0x6065b9.nextSibling;
      _0x2f63ad.firstChild;
      ke(_0x1eaa2e, "src", Ze);
      O(_0x65526c, _0x2b5854, null);
      O(_0xce09cf, () => _0x335899.title);
      O(_0x6065b9, () => _0x335899.content);
      O(_0x2f63ad, () => _0x335899.documentId, null);
      E(_0x3c8010 => {
        const _0x5e1e73 = b.container;
        const _0x3238f5 = b.document;
        const _0x3faddb = b.header;
        const _0x4fda65 = b.logo;
        const _0x14cb7b = b.sub_header;
        const _0xc6f611 = b.title;
        const _0x544591 = b.content;
        const _0x3a2660 = b.document_id;
        if (_0x5e1e73 !== _0x3c8010._v$) {
          _(_0x41f460, _0x3c8010._v$ = _0x5e1e73);
        }
        if (_0x3238f5 !== _0x3c8010._v$2) {
          _(_0x583b95, _0x3c8010._v$2 = _0x3238f5);
        }
        if (_0x3faddb !== _0x3c8010._v$3) {
          _(_0x11a529, _0x3c8010._v$3 = _0x3faddb);
        }
        if (_0x4fda65 !== _0x3c8010._v$4) {
          _(_0x1eaa2e, _0x3c8010._v$4 = _0x4fda65);
        }
        if (_0x14cb7b !== _0x3c8010._v$5) {
          _(_0xd9832e, _0x3c8010._v$5 = _0x14cb7b);
        }
        if (_0xc6f611 !== _0x3c8010._v$6) {
          _(_0xce09cf, _0x3c8010._v$6 = _0xc6f611);
        }
        if (_0x544591 !== _0x3c8010._v$7) {
          _(_0x6065b9, _0x3c8010._v$7 = _0x544591);
        }
        if (_0x3a2660 !== _0x3c8010._v$8) {
          _(_0x2f63ad, _0x3c8010._v$8 = _0x3a2660);
        }
        return _0x3c8010;
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
      return _0x41f460;
    }
  });
};
Me(() => I(Qe, {
  get children() {
    return I(ut, {});
  }
}), document.getElementById("root"));