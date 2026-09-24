import './style.css';
import { N as _0x3ae9cc } from "./v-packages.js";
(function () {
  const _0x59ec61 = document.createElement("link").relList;
  if (_0x59ec61 && _0x59ec61.supports && _0x59ec61.supports("modulepreload")) {
    return;
  }
  for (const _0x99c8fc of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x389c05(_0x99c8fc);
  }
  new MutationObserver(_0x128ee5 => {
    for (const _0x618a0c of _0x128ee5) {
      if (_0x618a0c.type === "childList") {
        for (const _0x3ce746 of _0x618a0c.addedNodes) {
          if (_0x3ce746.tagName === "LINK" && _0x3ce746.rel === "modulepreload") {
            _0x389c05(_0x3ce746);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x4f744a(_0x5ea709) {
    const _0x429af2 = {};
    if (_0x5ea709.integrity) {
      _0x429af2.integrity = _0x5ea709.integrity;
    }
    if (_0x5ea709.referrerPolicy) {
      _0x429af2.referrerPolicy = _0x5ea709.referrerPolicy;
    }
    if (_0x5ea709.crossOrigin === "use-credentials") {
      _0x429af2.credentials = "include";
    } else if (_0x5ea709.crossOrigin === "anonymous") {
      _0x429af2.credentials = "omit";
    } else {
      _0x429af2.credentials = "same-origin";
    }
    return _0x429af2;
  }
  function _0x389c05(_0x38ab28) {
    if (_0x38ab28.ep) {
      return;
    }
    _0x38ab28.ep = true;
    const _0x1d44a2 = _0x4f744a(_0x38ab28);
    fetch(_0x38ab28.href, _0x1d44a2);
  }
})();
const ht = (_0xa4e505, _0x5d08a8) => _0xa4e505 === _0x5d08a8;
const Z = Symbol("solid-proxy");
const Oe = Symbol("solid-track");
const ve = {
  equals: ht
};
let Xe = tt;
const Q = 1;
const he = 2;
const Ge = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var S = null;
let Ae = null;
let m = null;
let E = null;
let H = null;
let we = 0;
function de(_0x3d82a7, _0x56d7ef) {
  const _0x303273 = m;
  const _0x31c2ea = S;
  const _0x35152e = _0x3d82a7.length === 0;
  const _0x19506c = _0x35152e ? Ge : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x56d7ef === undefined ? _0x31c2ea : _0x56d7ef
  };
  const _0x5aeefc = _0x35152e ? _0x3d82a7 : () => _0x3d82a7(() => Y(() => xe(_0x19506c)));
  S = _0x19506c;
  m = null;
  try {
    return ne(_0x5aeefc, true);
  } finally {
    m = _0x303273;
    S = _0x31c2ea;
  }
}
function J(_0x11f737, _0x3ac66a) {
  _0x3ac66a = _0x3ac66a ? Object.assign({}, ve, _0x3ac66a) : ve;
  const _0x5d75ac = {
    value: _0x11f737,
    observers: null,
    observerSlots: null,
    comparator: _0x3ac66a.equals || undefined
  };
  const _0x227279 = _0x9105bf => {
    if (typeof _0x9105bf == "function") {
      _0x9105bf = _0x9105bf(_0x5d75ac.value);
    }
    return et(_0x5d75ac, _0x9105bf);
  };
  return [Ze.bind(_0x5d75ac), _0x227279];
}
function O(_0x4475ad, _0x6d82ab, _0x4ca2d3) {
  const _0x54378e = Ne(_0x4475ad, _0x6d82ab, false, Q);
  fe(_0x54378e);
}
function gt(_0x2d915c, _0x334fb3, _0x1f176a) {
  Xe = wt;
  const _0x70cf27 = Ne(_0x2d915c, _0x334fb3, false, Q);
  if (!_0x1f176a || !_0x1f176a.render) {
    _0x70cf27.user = true;
  }
  if (H) {
    H.push(_0x70cf27);
  } else {
    fe(_0x70cf27);
  }
}
function ee(_0x31c580, _0x427c2f, _0x388463) {
  _0x388463 = _0x388463 ? Object.assign({}, ve, _0x388463) : ve;
  const _0x4a399c = Ne(_0x31c580, _0x427c2f, true, 0);
  _0x4a399c.observers = null;
  _0x4a399c.observerSlots = null;
  _0x4a399c.comparator = _0x388463.equals || undefined;
  fe(_0x4a399c);
  return Ze.bind(_0x4a399c);
}
function ze(_0x1328d3) {
  return ne(_0x1328d3, false);
}
function Y(_0x2609d2) {
  if (m === null) {
    return _0x2609d2();
  }
  const _0x165e9f = m;
  m = null;
  try {
    return _0x2609d2();
  } finally {
    m = _0x165e9f;
  }
}
function Ie(_0x3982b8) {
  gt(() => Y(_0x3982b8));
}
function Qe(_0x88a3be) {
  if (S !== null) {
    if (S.cleanups === null) {
      S.cleanups = [_0x88a3be];
    } else {
      S.cleanups.push(_0x88a3be);
    }
  }
  return _0x88a3be;
}
function Je() {
  return m;
}
function yt(_0x484278, _0x57c398) {
  const _0x39096c = Symbol("context");
  return {
    id: _0x39096c,
    Provider: xt(_0x39096c),
    defaultValue: _0x484278
  };
}
function _t(_0x436f6d) {
  let _0x97f381;
  if ((_0x97f381 = it(S, _0x436f6d.id)) !== undefined) {
    return _0x97f381;
  } else {
    return _0x436f6d.defaultValue;
  }
}
function $t(_0x5f2b2a) {
  const _0x223bd6 = ee(_0x5f2b2a);
  const _0x50bad7 = ee(() => Ee(_0x223bd6()));
  _0x50bad7.toArray = () => {
    const _0x2c91b4 = _0x50bad7();
    if (Array.isArray(_0x2c91b4)) {
      return _0x2c91b4;
    } else if (_0x2c91b4 != null) {
      return [_0x2c91b4];
    } else {
      return [];
    }
  };
  return _0x50bad7;
}
function Ze() {
  if (this.sources && this.state) {
    if (this.state === Q) {
      fe(this);
    } else {
      const _0x1568d9 = E;
      E = null;
      ne(() => ye(this), false);
      E = _0x1568d9;
    }
  }
  if (m) {
    const _0x4e0741 = this.observers ? this.observers.length : 0;
    if (m.sources) {
      m.sources.push(this);
      m.sourceSlots.push(_0x4e0741);
    } else {
      m.sources = [this];
      m.sourceSlots = [_0x4e0741];
    }
    if (this.observers) {
      this.observers.push(m);
      this.observerSlots.push(m.sources.length - 1);
    } else {
      this.observers = [m];
      this.observerSlots = [m.sources.length - 1];
    }
  }
  return this.value;
}
function et(_0x585f79, _0x5c9917, _0x1bb737) {
  let _0x42ace1 = _0x585f79.value;
  if (!_0x585f79.comparator || !_0x585f79.comparator(_0x42ace1, _0x5c9917)) {
    _0x585f79.value = _0x5c9917;
    if (_0x585f79.observers && _0x585f79.observers.length) {
      ne(() => {
        for (let _0x243755 = 0; _0x243755 < _0x585f79.observers.length; _0x243755 += 1) {
          const _0x2d41a0 = _0x585f79.observers[_0x243755];
          const _0x348dd6 = Ae && Ae.running;
          if (_0x348dd6) {
            Ae.disposed.has(_0x2d41a0);
          }
          if (_0x348dd6 ? !_0x2d41a0.tState : !_0x2d41a0.state) {
            if (_0x2d41a0.pure) {
              E.push(_0x2d41a0);
            } else {
              H.push(_0x2d41a0);
            }
            if (_0x2d41a0.observers) {
              nt(_0x2d41a0);
            }
          }
          if (!_0x348dd6) {
            _0x2d41a0.state = Q;
          }
        }
        if (E.length > 1000000) {
          E = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x5c9917;
}
function fe(_0x24ca0c) {
  if (!_0x24ca0c.fn) {
    return;
  }
  xe(_0x24ca0c);
  const _0xf5ab6e = S;
  const _0x43bd71 = m;
  const _0x39bba0 = we;
  m = S = _0x24ca0c;
  pt(_0x24ca0c, _0x24ca0c.value, _0x39bba0);
  m = _0x43bd71;
  S = _0xf5ab6e;
}
function pt(_0x5ce4c9, _0x1e36d6, _0x4f7b77) {
  let _0x323cf1;
  try {
    _0x323cf1 = _0x5ce4c9.fn(_0x1e36d6);
  } catch (_0x16e23d) {
    if (_0x5ce4c9.pure) {
      _0x5ce4c9.state = Q;
      if (_0x5ce4c9.owned) {
        _0x5ce4c9.owned.forEach(xe);
      }
      _0x5ce4c9.owned = null;
    }
    _0x5ce4c9.updatedAt = _0x4f7b77 + 1;
    return rt(_0x16e23d);
  }
  if (!_0x5ce4c9.updatedAt || _0x5ce4c9.updatedAt <= _0x4f7b77) {
    if (_0x5ce4c9.updatedAt != null && "observers" in _0x5ce4c9) {
      et(_0x5ce4c9, _0x323cf1);
    } else {
      _0x5ce4c9.value = _0x323cf1;
    }
    _0x5ce4c9.updatedAt = _0x4f7b77;
  }
}
function Ne(_0x462bd9, _0x25bead, _0x29c708, _0x2139aa = Q, _0x517daf) {
  const _0x400942 = {
    fn: _0x462bd9,
    state: _0x2139aa,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x25bead,
    owner: S,
    context: null,
    pure: _0x29c708
  };
  if (S !== null) {
    if (S !== Ge) {
      if (S.owned) {
        S.owned.push(_0x400942);
      } else {
        S.owned = [_0x400942];
      }
    }
  }
  return _0x400942;
}
function ge(_0xc02ed0) {
  if (_0xc02ed0.state === 0) {
    return;
  }
  if (_0xc02ed0.state === he) {
    return ye(_0xc02ed0);
  }
  if (_0xc02ed0.suspense && Y(_0xc02ed0.suspense.inFallback)) {
    return _0xc02ed0.suspense.effects.push(_0xc02ed0);
  }
  const _0x407cc6 = [_0xc02ed0];
  while ((_0xc02ed0 = _0xc02ed0.owner) && (!_0xc02ed0.updatedAt || _0xc02ed0.updatedAt < we)) {
    if (_0xc02ed0.state) {
      _0x407cc6.push(_0xc02ed0);
    }
  }
  for (let _0x33e493 = _0x407cc6.length - 1; _0x33e493 >= 0; _0x33e493--) {
    _0xc02ed0 = _0x407cc6[_0x33e493];
    if (_0xc02ed0.state === Q) {
      fe(_0xc02ed0);
    } else if (_0xc02ed0.state === he) {
      const _0x57a2c0 = E;
      E = null;
      ne(() => ye(_0xc02ed0, _0x407cc6[0]), false);
      E = _0x57a2c0;
    }
  }
}
function ne(_0x416fbc, _0x4c672e) {
  if (E) {
    return _0x416fbc();
  }
  let _0xbb7974 = false;
  if (!_0x4c672e) {
    E = [];
  }
  if (H) {
    _0xbb7974 = true;
  } else {
    H = [];
  }
  we++;
  try {
    const _0x469e3b = _0x416fbc();
    bt(_0xbb7974);
    return _0x469e3b;
  } catch (_0x1bc7a2) {
    if (!_0xbb7974) {
      H = null;
    }
    E = null;
    rt(_0x1bc7a2);
  }
}
function bt(_0x33b904) {
  if (E) {
    tt(E);
    E = null;
  }
  if (_0x33b904) {
    return;
  }
  const _0xc6fb0e = H;
  H = null;
  if (_0xc6fb0e.length) {
    ne(() => Xe(_0xc6fb0e), false);
  }
}
function tt(_0xb53237) {
  for (let _0xa7649b = 0; _0xa7649b < _0xb53237.length; _0xa7649b++) {
    ge(_0xb53237[_0xa7649b]);
  }
}
function wt(_0x2c7a0c) {
  let _0x1f8017;
  let _0x1ff299 = 0;
  for (_0x1f8017 = 0; _0x1f8017 < _0x2c7a0c.length; _0x1f8017++) {
    const _0x35660e = _0x2c7a0c[_0x1f8017];
    if (_0x35660e.user) {
      _0x2c7a0c[_0x1ff299++] = _0x35660e;
    } else {
      ge(_0x35660e);
    }
  }
  for (_0x1f8017 = 0; _0x1f8017 < _0x1ff299; _0x1f8017++) {
    ge(_0x2c7a0c[_0x1f8017]);
  }
}
function ye(_0x1b9262, _0x375a57) {
  _0x1b9262.state = 0;
  for (let _0x2828c0 = 0; _0x2828c0 < _0x1b9262.sources.length; _0x2828c0 += 1) {
    const _0x438185 = _0x1b9262.sources[_0x2828c0];
    if (_0x438185.sources) {
      const _0x5b1787 = _0x438185.state;
      if (_0x5b1787 === Q) {
        if (_0x438185 !== _0x375a57 && (!_0x438185.updatedAt || _0x438185.updatedAt < we)) {
          ge(_0x438185);
        }
      } else if (_0x5b1787 === he) {
        ye(_0x438185, _0x375a57);
      }
    }
  }
}
function nt(_0xb98521) {
  for (let _0x3f6b03 = 0; _0x3f6b03 < _0xb98521.observers.length; _0x3f6b03 += 1) {
    const _0x4852f0 = _0xb98521.observers[_0x3f6b03];
    if (!_0x4852f0.state) {
      _0x4852f0.state = he;
      if (_0x4852f0.pure) {
        E.push(_0x4852f0);
      } else {
        H.push(_0x4852f0);
      }
      if (_0x4852f0.observers) {
        nt(_0x4852f0);
      }
    }
  }
}
function xe(_0xdfae76) {
  let _0x35d869;
  if (_0xdfae76.sources) {
    while (_0xdfae76.sources.length) {
      const _0x28a7f9 = _0xdfae76.sources.pop();
      const _0x360662 = _0xdfae76.sourceSlots.pop();
      const _0x2a9029 = _0x28a7f9.observers;
      if (_0x2a9029 && _0x2a9029.length) {
        const _0x3dc62d = _0x2a9029.pop();
        const _0xb4ece6 = _0x28a7f9.observerSlots.pop();
        if (_0x360662 < _0x2a9029.length) {
          _0x3dc62d.sourceSlots[_0xb4ece6] = _0x360662;
          _0x2a9029[_0x360662] = _0x3dc62d;
          _0x28a7f9.observerSlots[_0x360662] = _0xb4ece6;
        }
      }
    }
  }
  if (_0xdfae76.owned) {
    for (_0x35d869 = _0xdfae76.owned.length - 1; _0x35d869 >= 0; _0x35d869--) {
      xe(_0xdfae76.owned[_0x35d869]);
    }
    _0xdfae76.owned = null;
  }
  if (_0xdfae76.cleanups) {
    for (_0x35d869 = _0xdfae76.cleanups.length - 1; _0x35d869 >= 0; _0x35d869--) {
      _0xdfae76.cleanups[_0x35d869]();
    }
    _0xdfae76.cleanups = null;
  }
  _0xdfae76.state = 0;
  _0xdfae76.context = null;
}
function rt(_0x52500f) {
  throw _0x52500f;
}
function it(_0xb4620a, _0x328a09) {
  if (_0xb4620a) {
    if (_0xb4620a.context && _0xb4620a.context[_0x328a09] !== undefined) {
      return _0xb4620a.context[_0x328a09];
    } else {
      return it(_0xb4620a.owner, _0x328a09);
    }
  } else {
    return undefined;
  }
}
function Ee(_0x512f7c) {
  if (typeof _0x512f7c == "function" && !_0x512f7c.length) {
    return Ee(_0x512f7c());
  }
  if (Array.isArray(_0x512f7c)) {
    const _0x1c67a6 = [];
    for (let _0x36ea2b = 0; _0x36ea2b < _0x512f7c.length; _0x36ea2b++) {
      const _0x127a66 = Ee(_0x512f7c[_0x36ea2b]);
      if (Array.isArray(_0x127a66)) {
        _0x1c67a6.push.apply(_0x1c67a6, _0x127a66);
      } else {
        _0x1c67a6.push(_0x127a66);
      }
    }
    return _0x1c67a6;
  }
  return _0x512f7c;
}
function xt(_0x564201, _0xf69e1f) {
  return function (_0x11f5a4) {
    let _0x1ea4ba;
    O(() => _0x1ea4ba = Y(() => {
      S.context = {
        [_0x564201]: _0x11f5a4.value
      };
      return $t(() => _0x11f5a4.children);
    }), undefined);
    return _0x1ea4ba;
  };
}
const mt = Symbol("fallback");
function Ue(_0x789be9) {
  for (let _0x3676bb = 0; _0x3676bb < _0x789be9.length; _0x3676bb++) {
    _0x789be9[_0x3676bb]();
  }
}
function Ct(_0x2069e0, _0x1468ab, _0x114156 = {}) {
  let _0x56cb9c = [];
  let _0x2fb531 = [];
  let _0x4a298a = [];
  let _0x98a2d6 = 0;
  let _0x2a41ca = _0x1468ab.length > 1 ? [] : null;
  Qe(() => Ue(_0x4a298a));
  return () => {
    let _0x3bf397 = _0x2069e0() || [];
    let _0xebe4cf;
    let _0x49cef2;
    _0x3bf397[Oe];
    return Y(() => {
      let _0x280843 = _0x3bf397.length;
      let _0x2728e3;
      let _0x56bfb9;
      let _0x5e4a45;
      let _0x308611;
      let _0x4824cf;
      let _0x50975d;
      let _0xbfac99;
      let _0x3611ff;
      let _0x4cfb1e;
      if (_0x280843 === 0) {
        if (_0x98a2d6 !== 0) {
          Ue(_0x4a298a);
          _0x4a298a = [];
          _0x56cb9c = [];
          _0x2fb531 = [];
          _0x98a2d6 = 0;
          _0x2a41ca &&= [];
        }
        if (_0x114156.fallback) {
          _0x56cb9c = [mt];
          _0x2fb531[0] = de(_0x5516ca => {
            _0x4a298a[0] = _0x5516ca;
            return _0x114156.fallback();
          });
          _0x98a2d6 = 1;
        }
      } else if (_0x98a2d6 === 0) {
        _0x2fb531 = new Array(_0x280843);
        _0x49cef2 = 0;
        for (; _0x49cef2 < _0x280843; _0x49cef2++) {
          _0x56cb9c[_0x49cef2] = _0x3bf397[_0x49cef2];
          _0x2fb531[_0x49cef2] = de(_0x3dc1ce);
        }
        _0x98a2d6 = _0x280843;
      } else {
        _0x5e4a45 = new Array(_0x280843);
        _0x308611 = new Array(_0x280843);
        if (_0x2a41ca) {
          _0x4824cf = new Array(_0x280843);
        }
        _0x50975d = 0;
        _0xbfac99 = Math.min(_0x98a2d6, _0x280843);
        for (; _0x50975d < _0xbfac99 && _0x56cb9c[_0x50975d] === _0x3bf397[_0x50975d]; _0x50975d++);
        _0xbfac99 = _0x98a2d6 - 1;
        _0x3611ff = _0x280843 - 1;
        for (; _0xbfac99 >= _0x50975d && _0x3611ff >= _0x50975d && _0x56cb9c[_0xbfac99] === _0x3bf397[_0x3611ff]; _0xbfac99--, _0x3611ff--) {
          _0x5e4a45[_0x3611ff] = _0x2fb531[_0xbfac99];
          _0x308611[_0x3611ff] = _0x4a298a[_0xbfac99];
          if (_0x2a41ca) {
            _0x4824cf[_0x3611ff] = _0x2a41ca[_0xbfac99];
          }
        }
        _0x2728e3 = new Map();
        _0x56bfb9 = new Array(_0x3611ff + 1);
        _0x49cef2 = _0x3611ff;
        for (; _0x49cef2 >= _0x50975d; _0x49cef2--) {
          _0x4cfb1e = _0x3bf397[_0x49cef2];
          _0xebe4cf = _0x2728e3.get(_0x4cfb1e);
          _0x56bfb9[_0x49cef2] = _0xebe4cf === undefined ? -1 : _0xebe4cf;
          _0x2728e3.set(_0x4cfb1e, _0x49cef2);
        }
        for (_0xebe4cf = _0x50975d; _0xebe4cf <= _0xbfac99; _0xebe4cf++) {
          _0x4cfb1e = _0x56cb9c[_0xebe4cf];
          _0x49cef2 = _0x2728e3.get(_0x4cfb1e);
          if (_0x49cef2 !== undefined && _0x49cef2 !== -1) {
            _0x5e4a45[_0x49cef2] = _0x2fb531[_0xebe4cf];
            _0x308611[_0x49cef2] = _0x4a298a[_0xebe4cf];
            if (_0x2a41ca) {
              _0x4824cf[_0x49cef2] = _0x2a41ca[_0xebe4cf];
            }
            _0x49cef2 = _0x56bfb9[_0x49cef2];
            _0x2728e3.set(_0x4cfb1e, _0x49cef2);
          } else {
            _0x4a298a[_0xebe4cf]();
          }
        }
        for (_0x49cef2 = _0x50975d; _0x49cef2 < _0x280843; _0x49cef2++) {
          if (_0x49cef2 in _0x5e4a45) {
            _0x2fb531[_0x49cef2] = _0x5e4a45[_0x49cef2];
            _0x4a298a[_0x49cef2] = _0x308611[_0x49cef2];
            if (_0x2a41ca) {
              _0x2a41ca[_0x49cef2] = _0x4824cf[_0x49cef2];
              _0x2a41ca[_0x49cef2](_0x49cef2);
            }
          } else {
            _0x2fb531[_0x49cef2] = de(_0x3dc1ce);
          }
        }
        _0x2fb531 = _0x2fb531.slice(0, _0x98a2d6 = _0x280843);
        _0x56cb9c = _0x3bf397.slice(0);
      }
      return _0x2fb531;
    });
    function _0x3dc1ce(_0x48d2e4) {
      _0x4a298a[_0x49cef2] = _0x48d2e4;
      if (_0x2a41ca) {
        const [_0x34c3a0, _0x3598b3] = J(_0x49cef2);
        _0x2a41ca[_0x49cef2] = _0x3598b3;
        return _0x1468ab(_0x3bf397[_0x49cef2], _0x34c3a0);
      }
      return _0x1468ab(_0x3bf397[_0x49cef2]);
    }
  };
}
function I(_0x2a7e3a, _0x1b3e4a) {
  return Y(() => _0x2a7e3a(_0x1b3e4a || {}));
}
const St = _0x1e6371 => "Stale read from <" + _0x1e6371 + ">.";
function oe(_0x32ffa9) {
  const _0x3a8b7d = "fallback" in _0x32ffa9 && {
    fallback: () => _0x32ffa9.fallback
  };
  return ee(Ct(() => _0x32ffa9.each, _0x32ffa9.children, _0x3a8b7d || undefined));
}
function _e(_0x116b48) {
  const _0x203c67 = _0x116b48.keyed;
  const _0x278ef9 = ee(() => _0x116b48.when, undefined, {
    equals: (_0x4c38c5, _0x3c393e) => _0x203c67 ? _0x4c38c5 === _0x3c393e : !_0x4c38c5 == !_0x3c393e
  });
  return ee(() => {
    const _0x28ea39 = _0x278ef9();
    if (_0x28ea39) {
      const _0x15c9ef = _0x116b48.children;
      if (typeof _0x15c9ef == "function" && _0x15c9ef.length > 0) {
        return Y(() => _0x15c9ef(_0x203c67 ? _0x28ea39 : () => {
          if (!Y(_0x278ef9)) {
            throw St("Show");
          }
          return _0x116b48.when;
        }));
      } else {
        return _0x15c9ef;
      }
    }
    return _0x116b48.fallback;
  }, undefined, undefined);
}
function At(_0x5dc443, _0x33a735, _0x625404) {
  let _0x4124df = _0x625404.length;
  let _0x573786 = _0x33a735.length;
  let _0x28deed = _0x4124df;
  let _0x13318f = 0;
  let _0x3fb157 = 0;
  let _0x1c36c0 = _0x33a735[_0x573786 - 1].nextSibling;
  let _0x4ce23c = null;
  while (_0x13318f < _0x573786 || _0x3fb157 < _0x28deed) {
    if (_0x33a735[_0x13318f] === _0x625404[_0x3fb157]) {
      _0x13318f++;
      _0x3fb157++;
      continue;
    }
    while (_0x33a735[_0x573786 - 1] === _0x625404[_0x28deed - 1]) {
      _0x573786--;
      _0x28deed--;
    }
    if (_0x573786 === _0x13318f) {
      const _0x4ff4a7 = _0x28deed < _0x4124df ? _0x3fb157 ? _0x625404[_0x3fb157 - 1].nextSibling : _0x625404[_0x28deed - _0x3fb157] : _0x1c36c0;
      while (_0x3fb157 < _0x28deed) {
        _0x5dc443.insertBefore(_0x625404[_0x3fb157++], _0x4ff4a7);
      }
    } else if (_0x28deed === _0x3fb157) {
      while (_0x13318f < _0x573786) {
        if (!_0x4ce23c || !_0x4ce23c.has(_0x33a735[_0x13318f])) {
          _0x33a735[_0x13318f].remove();
        }
        _0x13318f++;
      }
    } else if (_0x33a735[_0x13318f] === _0x625404[_0x28deed - 1] && _0x625404[_0x3fb157] === _0x33a735[_0x573786 - 1]) {
      const _0x33b714 = _0x33a735[--_0x573786].nextSibling;
      _0x5dc443.insertBefore(_0x625404[_0x3fb157++], _0x33a735[_0x13318f++].nextSibling);
      _0x5dc443.insertBefore(_0x625404[--_0x28deed], _0x33b714);
      _0x33a735[_0x573786] = _0x625404[_0x28deed];
    } else {
      if (!_0x4ce23c) {
        _0x4ce23c = new Map();
        let _0x5f0fc3 = _0x3fb157;
        while (_0x5f0fc3 < _0x28deed) {
          _0x4ce23c.set(_0x625404[_0x5f0fc3], _0x5f0fc3++);
        }
      }
      const _0x231ebc = _0x4ce23c.get(_0x33a735[_0x13318f]);
      if (_0x231ebc != null) {
        if (_0x3fb157 < _0x231ebc && _0x231ebc < _0x28deed) {
          let _0x40d25 = _0x13318f;
          let _0x569da8 = 1;
          let _0xf93a38;
          while (++_0x40d25 < _0x573786 && _0x40d25 < _0x28deed && (_0xf93a38 = _0x4ce23c.get(_0x33a735[_0x40d25])) != null && _0xf93a38 === _0x231ebc + _0x569da8) {
            _0x569da8++;
          }
          if (_0x569da8 > _0x231ebc - _0x3fb157) {
            const _0x1638c6 = _0x33a735[_0x13318f];
            while (_0x3fb157 < _0x231ebc) {
              _0x5dc443.insertBefore(_0x625404[_0x3fb157++], _0x1638c6);
            }
          } else {
            _0x5dc443.replaceChild(_0x625404[_0x3fb157++], _0x33a735[_0x13318f++]);
          }
        } else {
          _0x13318f++;
        }
      } else {
        _0x33a735[_0x13318f++].remove();
      }
    }
  }
}
const He = "_$DX_DELEGATE";
function Pt(_0x115e62, _0x13d13b, _0x37ed58, _0x430b91 = {}) {
  let _0x453f4d;
  de(_0x43ff75 => {
    _0x453f4d = _0x43ff75;
    if (_0x13d13b === document) {
      _0x115e62();
    } else {
      L(_0x13d13b, _0x115e62(), _0x13d13b.firstChild ? null : undefined, _0x37ed58);
    }
  }, _0x430b91.owner);
  return () => {
    _0x453f4d();
    _0x13d13b.textContent = "";
  };
}
function F(_0x35995f, _0x2fc5f6, _0x2df6b7) {
  let _0x369fef;
  const _0x2e89d0 = () => {
    const _0x4e29d8 = document.createElement("template");
    _0x4e29d8.innerHTML = _0x35995f;
    if (_0x2df6b7) {
      return _0x4e29d8.content.firstChild.firstChild;
    } else {
      return _0x4e29d8.content.firstChild;
    }
  };
  const _0x430efc = _0x2fc5f6 ? () => Y(() => document.importNode(_0x369fef ||= _0x2e89d0(), true)) : () => (_0x369fef ||= _0x2e89d0()).cloneNode(true);
  _0x430efc.cloneNode = _0x430efc;
  return _0x430efc;
}
function Ot(_0x30e343, _0x1d7293 = window.document) {
  const _0x4a1179 = _0x1d7293[He] ||= new Set();
  for (let _0x5c1693 = 0, _0x141037 = _0x30e343.length; _0x5c1693 < _0x141037; _0x5c1693++) {
    const _0x54383c = _0x30e343[_0x5c1693];
    if (!_0x4a1179.has(_0x54383c)) {
      _0x4a1179.add(_0x54383c);
      _0x1d7293.addEventListener(_0x54383c, Tt);
    }
  }
}
function Et(_0x2f08ad, _0x566d88, _0x20a26a) {
  if (_0x20a26a == null) {
    _0x2f08ad.removeAttribute(_0x566d88);
  } else {
    _0x2f08ad.setAttribute(_0x566d88, _0x20a26a);
  }
}
function g(_0x53caaa, _0x4e94a2) {
  if (_0x4e94a2 == null) {
    _0x53caaa.removeAttribute("class");
  } else {
    _0x53caaa.className = _0x4e94a2;
  }
}
function L(_0x1ab6cd, _0x5c91f6, _0x43f8e3, _0x270697) {
  if (_0x43f8e3 !== undefined && !_0x270697) {
    _0x270697 = [];
  }
  if (typeof _0x5c91f6 != "function") {
    return $e(_0x1ab6cd, _0x5c91f6, _0x270697, _0x43f8e3);
  }
  O(_0x2ddf39 => $e(_0x1ab6cd, _0x5c91f6(), _0x2ddf39, _0x43f8e3), _0x270697);
}
function Tt(_0xccb32a) {
  const _0x46738e = "$$" + _0xccb32a.type;
  let _0x18d546 = _0xccb32a.composedPath && _0xccb32a.composedPath()[0] || _0xccb32a.target;
  if (_0xccb32a.target !== _0x18d546) {
    Object.defineProperty(_0xccb32a, "target", {
      configurable: true,
      value: _0x18d546
    });
  }
  Object.defineProperty(_0xccb32a, "currentTarget", {
    configurable: true,
    get() {
      return _0x18d546 || document;
    }
  });
  while (_0x18d546) {
    const _0x4d73b0 = _0x18d546[_0x46738e];
    if (_0x4d73b0 && !_0x18d546.disabled) {
      const _0x53be56 = _0x18d546[_0x46738e + "Data"];
      if (_0x53be56 !== undefined) {
        _0x4d73b0.call(_0x18d546, _0x53be56, _0xccb32a);
      } else {
        _0x4d73b0.call(_0x18d546, _0xccb32a);
      }
      if (_0xccb32a.cancelBubble) {
        return;
      }
    }
    _0x18d546 = _0x18d546._$host || _0x18d546.parentNode || _0x18d546.host;
  }
}
function $e(_0x31dd1e, _0x4bab73, _0x7a9ebb, _0x18d8a8, _0x1a5eb7) {
  while (typeof _0x7a9ebb == "function") {
    _0x7a9ebb = _0x7a9ebb();
  }
  if (_0x4bab73 === _0x7a9ebb) {
    return _0x7a9ebb;
  }
  const _0x2d365b = typeof _0x4bab73;
  const _0x3cf788 = _0x18d8a8 !== undefined;
  _0x31dd1e = _0x3cf788 && _0x7a9ebb[0] && _0x7a9ebb[0].parentNode || _0x31dd1e;
  if (_0x2d365b === "string" || _0x2d365b === "number") {
    if (_0x2d365b === "number") {
      _0x4bab73 = _0x4bab73.toString();
    }
    if (_0x3cf788) {
      let _0x29502c = _0x7a9ebb[0];
      if (_0x29502c && _0x29502c.nodeType === 3) {
        _0x29502c.data = _0x4bab73;
      } else {
        _0x29502c = document.createTextNode(_0x4bab73);
      }
      _0x7a9ebb = te(_0x31dd1e, _0x7a9ebb, _0x18d8a8, _0x29502c);
    } else if (_0x7a9ebb !== "" && typeof _0x7a9ebb == "string") {
      _0x7a9ebb = _0x31dd1e.firstChild.data = _0x4bab73;
    } else {
      _0x7a9ebb = _0x31dd1e.textContent = _0x4bab73;
    }
  } else if (_0x4bab73 == null || _0x2d365b === "boolean") {
    _0x7a9ebb = te(_0x31dd1e, _0x7a9ebb, _0x18d8a8);
  } else {
    if (_0x2d365b === "function") {
      O(() => {
        let _0x3189c8 = _0x4bab73();
        while (typeof _0x3189c8 == "function") {
          _0x3189c8 = _0x3189c8();
        }
        _0x7a9ebb = $e(_0x31dd1e, _0x3189c8, _0x7a9ebb, _0x18d8a8);
      });
      return () => _0x7a9ebb;
    }
    if (Array.isArray(_0x4bab73)) {
      const _0x356a66 = [];
      const _0x5cabaf = _0x7a9ebb && Array.isArray(_0x7a9ebb);
      if (Te(_0x356a66, _0x4bab73, _0x7a9ebb, _0x1a5eb7)) {
        O(() => _0x7a9ebb = $e(_0x31dd1e, _0x356a66, _0x7a9ebb, _0x18d8a8, true));
        return () => _0x7a9ebb;
      }
      if (_0x356a66.length === 0) {
        _0x7a9ebb = te(_0x31dd1e, _0x7a9ebb, _0x18d8a8);
        if (_0x3cf788) {
          return _0x7a9ebb;
        }
      } else if (_0x5cabaf) {
        if (_0x7a9ebb.length === 0) {
          Ye(_0x31dd1e, _0x356a66, _0x18d8a8);
        } else {
          At(_0x31dd1e, _0x7a9ebb, _0x356a66);
        }
      } else {
        if (_0x7a9ebb) {
          te(_0x31dd1e);
        }
        Ye(_0x31dd1e, _0x356a66);
      }
      _0x7a9ebb = _0x356a66;
    } else if (_0x4bab73.nodeType) {
      if (Array.isArray(_0x7a9ebb)) {
        if (_0x3cf788) {
          return _0x7a9ebb = te(_0x31dd1e, _0x7a9ebb, _0x18d8a8, _0x4bab73);
        }
        te(_0x31dd1e, _0x7a9ebb, null, _0x4bab73);
      } else if (_0x7a9ebb == null || _0x7a9ebb === "" || !_0x31dd1e.firstChild) {
        _0x31dd1e.appendChild(_0x4bab73);
      } else {
        _0x31dd1e.replaceChild(_0x4bab73, _0x31dd1e.firstChild);
      }
      _0x7a9ebb = _0x4bab73;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x4bab73);
    }
  }
  return _0x7a9ebb;
}
function Te(_0x481653, _0x24ceb3, _0x71f535, _0xfc3691) {
  let _0x54020e = false;
  for (let _0x4c25e3 = 0, _0x508972 = _0x24ceb3.length; _0x4c25e3 < _0x508972; _0x4c25e3++) {
    let _0x367463 = _0x24ceb3[_0x4c25e3];
    let _0x58f9f8 = _0x71f535 && _0x71f535[_0x4c25e3];
    let _0x4ac60d;
    if (_0x367463 != null && _0x367463 !== true && _0x367463 !== false) {
      if ((_0x4ac60d = typeof _0x367463) == "object" && _0x367463.nodeType) {
        _0x481653.push(_0x367463);
      } else if (Array.isArray(_0x367463)) {
        _0x54020e = Te(_0x481653, _0x367463, _0x58f9f8) || _0x54020e;
      } else if (_0x4ac60d === "function") {
        if (_0xfc3691) {
          while (typeof _0x367463 == "function") {
            _0x367463 = _0x367463();
          }
          _0x54020e = Te(_0x481653, Array.isArray(_0x367463) ? _0x367463 : [_0x367463], Array.isArray(_0x58f9f8) ? _0x58f9f8 : [_0x58f9f8]) || _0x54020e;
        } else {
          _0x481653.push(_0x367463);
          _0x54020e = true;
        }
      } else {
        const _0x216cc8 = String(_0x367463);
        if (_0x58f9f8 && _0x58f9f8.nodeType === 3 && _0x58f9f8.data === _0x216cc8) {
          _0x481653.push(_0x58f9f8);
        } else {
          _0x481653.push(document.createTextNode(_0x216cc8));
        }
      }
    }
  }
  return _0x54020e;
}
function Ye(_0x2a25a6, _0x12199c, _0x44ad4c = null) {
  for (let _0x114c54 = 0, _0x4cc507 = _0x12199c.length; _0x114c54 < _0x4cc507; _0x114c54++) {
    _0x2a25a6.insertBefore(_0x12199c[_0x114c54], _0x44ad4c);
  }
}
function te(_0x269e6b, _0xd91836, _0xb58a6e, _0x25c0e5) {
  if (_0xb58a6e === undefined) {
    return _0x269e6b.textContent = "";
  }
  const _0xaa9f18 = _0x25c0e5 || document.createTextNode("");
  if (_0xd91836.length) {
    let _0x2653c3 = false;
    for (let _0x119188 = _0xd91836.length - 1; _0x119188 >= 0; _0x119188--) {
      const _0x16a875 = _0xd91836[_0x119188];
      if (_0xaa9f18 !== _0x16a875) {
        const _0x106884 = _0x16a875.parentNode === _0x269e6b;
        if (!_0x2653c3 && !_0x119188) {
          if (_0x106884) {
            _0x269e6b.replaceChild(_0xaa9f18, _0x16a875);
          } else {
            _0x269e6b.insertBefore(_0xaa9f18, _0xb58a6e);
          }
        } else if (_0x106884) {
          _0x16a875.remove();
        }
      } else {
        _0x2653c3 = true;
      }
    }
  } else {
    _0x269e6b.insertBefore(_0xaa9f18, _0xb58a6e);
  }
  return [_0xaa9f18];
}
const kt = "_App_1agrw_1";
const Lt = "_standardFont_1agrw_12";
const It = "_evidencePanel_1agrw_24";
const Nt = "_evidenceHeader_1agrw_38";
const Bt = "_headerControls_1agrw_48";
const Rt = "_closeButton_1agrw_53";
const jt = "_evidenceTitle_1agrw_71";
const Ft = "_tabNavigation_1agrw_78";
const Dt = "_tabButton_1agrw_83";
const Mt = "_active_1agrw_89";
const Vt = "_contentArea_1agrw_101";
const Kt = "_sectionTitle_1agrw_105";
const Ut = "_filterItem_1agrw_112";
const Ht = "_rangeContainer_1agrw_124";
const Yt = "_rangeLabels_1agrw_128";
const qt = "_rangeInputContainer_1agrw_135";
const Wt = "_rangeInput_1agrw_135";
const Xt = "_currentRadiusValue_1agrw_147";
const Gt = "_inputField_1agrw_155";
const zt = "_arrow_1agrw_174";
const Qt = "_customLabelRow_1agrw_178";
const Jt = "_helpText_1agrw_185";
const Zt = "_footer_1agrw_191";
const en = "_footerContent_1agrw_196";
const tn = "_keyControl_1agrw_205";
const nn = "_keyButton_1agrw_211";
const rn = "_markerLabel_1agrw_225";
const v = {
  App: kt,
  standardFont: Lt,
  evidencePanel: It,
  evidenceHeader: Nt,
  headerControls: Bt,
  closeButton: Rt,
  evidenceTitle: jt,
  tabNavigation: Ft,
  tabButton: Dt,
  active: Mt,
  contentArea: Vt,
  sectionTitle: Kt,
  filterItem: Ut,
  rangeContainer: Ht,
  rangeLabels: Yt,
  rangeInputContainer: qt,
  rangeInput: Wt,
  currentRadiusValue: Xt,
  inputField: Gt,
  arrow: zt,
  customLabelRow: Qt,
  helpText: Jt,
  footer: Zt,
  footerContent: en,
  keyControl: tn,
  keyButton: nn,
  markerLabel: rn
};
function sn(_0x3fed1b, _0xe0fe63) {
  const _0x378f80 = yt(_0xe0fe63);
  return [_0x37411d => I(_0x378f80.Provider, {
    value: _0x3fed1b(_0x37411d),
    get children() {
      return _0x37411d.children;
    }
  }), () => _t(_0x378f80)];
}
const ke = Symbol("store-raw");
const ce = Symbol("store-node");
function st(_0x13d567) {
  let _0x109088 = _0x13d567[Z];
  if (!_0x109088 && (Object.defineProperty(_0x13d567, Z, {
    value: _0x109088 = new Proxy(_0x13d567, cn)
  }), !Array.isArray(_0x13d567))) {
    const _0x3ee6a7 = Object.keys(_0x13d567);
    const _0xb26c3e = Object.getOwnPropertyDescriptors(_0x13d567);
    for (let _0x5e14f5 = 0, _0x1592b6 = _0x3ee6a7.length; _0x5e14f5 < _0x1592b6; _0x5e14f5++) {
      const _0x5508f6 = _0x3ee6a7[_0x5e14f5];
      if (_0xb26c3e[_0x5508f6].get) {
        Object.defineProperty(_0x13d567, _0x5508f6, {
          enumerable: _0xb26c3e[_0x5508f6].enumerable,
          get: _0xb26c3e[_0x5508f6].get.bind(_0x109088)
        });
      }
    }
  }
  return _0x109088;
}
function pe(_0x477125) {
  let _0x2a6016;
  return _0x477125 != null && typeof _0x477125 == "object" && (_0x477125[Z] || !(_0x2a6016 = Object.getPrototypeOf(_0x477125)) || _0x2a6016 === Object.prototype || Array.isArray(_0x477125));
}
function ue(_0x181a05, _0x1ed3ce = new Set()) {
  let _0x5b91a9;
  let _0x55dba8;
  let _0x140adf;
  let _0x40d77;
  if (_0x5b91a9 = _0x181a05 != null && _0x181a05[ke]) {
    return _0x5b91a9;
  }
  if (!pe(_0x181a05) || _0x1ed3ce.has(_0x181a05)) {
    return _0x181a05;
  }
  if (Array.isArray(_0x181a05)) {
    if (Object.isFrozen(_0x181a05)) {
      _0x181a05 = _0x181a05.slice(0);
    } else {
      _0x1ed3ce.add(_0x181a05);
    }
    for (let _0xa0360f = 0, _0x42372b = _0x181a05.length; _0xa0360f < _0x42372b; _0xa0360f++) {
      _0x140adf = _0x181a05[_0xa0360f];
      if ((_0x55dba8 = ue(_0x140adf, _0x1ed3ce)) !== _0x140adf) {
        _0x181a05[_0xa0360f] = _0x55dba8;
      }
    }
  } else {
    if (Object.isFrozen(_0x181a05)) {
      _0x181a05 = Object.assign({}, _0x181a05);
    } else {
      _0x1ed3ce.add(_0x181a05);
    }
    const _0x19faa3 = Object.keys(_0x181a05);
    const _0x518007 = Object.getOwnPropertyDescriptors(_0x181a05);
    for (let _0x4890d4 = 0, _0x4adf59 = _0x19faa3.length; _0x4890d4 < _0x4adf59; _0x4890d4++) {
      _0x40d77 = _0x19faa3[_0x4890d4];
      if (!_0x518007[_0x40d77].get) {
        _0x140adf = _0x181a05[_0x40d77];
        if ((_0x55dba8 = ue(_0x140adf, _0x1ed3ce)) !== _0x140adf) {
          _0x181a05[_0x40d77] = _0x55dba8;
        }
      }
    }
  }
  return _0x181a05;
}
function Be(_0x4ca755) {
  let _0x2b8bd3 = _0x4ca755[ce];
  if (!_0x2b8bd3) {
    Object.defineProperty(_0x4ca755, ce, {
      value: _0x2b8bd3 = Object.create(null)
    });
  }
  return _0x2b8bd3;
}
function Le(_0x550909, _0x275aa5, _0xb57f0c) {
  return _0x550909[_0x275aa5] ||= ot(_0xb57f0c);
}
function ln(_0x43d412, _0x25c17b) {
  const _0x4758f8 = Reflect.getOwnPropertyDescriptor(_0x43d412, _0x25c17b);
  if (!!_0x4758f8 && !_0x4758f8.get && !!_0x4758f8.configurable && _0x25c17b !== Z && _0x25c17b !== ce) {
    delete _0x4758f8.value;
    delete _0x4758f8.writable;
    _0x4758f8.get = () => _0x43d412[Z][_0x25c17b];
  }
  return _0x4758f8;
}
function lt(_0x4dd295) {
  if (Je()) {
    const _0x3269ee = Be(_0x4dd295);
    (_0x3269ee._ ||= ot())();
  }
}
function on(_0x4df292) {
  lt(_0x4df292);
  return Reflect.ownKeys(_0x4df292);
}
function ot(_0x42a179) {
  const [_0x41e01e, _0x4886e2] = J(_0x42a179, {
    equals: false,
    internal: true
  });
  _0x41e01e.$ = _0x4886e2;
  return _0x41e01e;
}
const cn = {
  get(_0x11d5ce, _0x1f1cce, _0x522b4b) {
    if (_0x1f1cce === ke) {
      return _0x11d5ce;
    }
    if (_0x1f1cce === Z) {
      return _0x522b4b;
    }
    if (_0x1f1cce === Oe) {
      lt(_0x11d5ce);
      return _0x522b4b;
    }
    const _0x1aac90 = Be(_0x11d5ce);
    const _0x201347 = _0x1aac90[_0x1f1cce];
    let _0x4f9a85 = _0x201347 ? _0x201347() : _0x11d5ce[_0x1f1cce];
    if (_0x1f1cce === ce || _0x1f1cce === "__proto__") {
      return _0x4f9a85;
    }
    if (!_0x201347) {
      const _0x29f5a9 = Object.getOwnPropertyDescriptor(_0x11d5ce, _0x1f1cce);
      if (Je() && (typeof _0x4f9a85 != "function" || _0x11d5ce.hasOwnProperty(_0x1f1cce)) && (!_0x29f5a9 || !_0x29f5a9.get)) {
        _0x4f9a85 = Le(_0x1aac90, _0x1f1cce, _0x4f9a85)();
      }
    }
    if (pe(_0x4f9a85)) {
      return st(_0x4f9a85);
    } else {
      return _0x4f9a85;
    }
  },
  has(_0x3ff05e, _0x5d7bca) {
    if (_0x5d7bca === ke || _0x5d7bca === Z || _0x5d7bca === Oe || _0x5d7bca === ce || _0x5d7bca === "__proto__") {
      return true;
    } else {
      this.get(_0x3ff05e, _0x5d7bca, _0x3ff05e);
      return _0x5d7bca in _0x3ff05e;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: on,
  getOwnPropertyDescriptor: ln
};
function be(_0x2828a8, _0x44ea95, _0x18ff7c, _0x1c9131 = false) {
  if (!_0x1c9131 && _0x2828a8[_0x44ea95] === _0x18ff7c) {
    return;
  }
  const _0x2a05b8 = _0x2828a8[_0x44ea95];
  const _0x11fe88 = _0x2828a8.length;
  if (_0x18ff7c === undefined) {
    delete _0x2828a8[_0x44ea95];
  } else {
    _0x2828a8[_0x44ea95] = _0x18ff7c;
  }
  let _0xab39ed = Be(_0x2828a8);
  let _0x5cb57c;
  if (_0x5cb57c = Le(_0xab39ed, _0x44ea95, _0x2a05b8)) {
    _0x5cb57c.$(() => _0x18ff7c);
  }
  if (Array.isArray(_0x2828a8) && _0x2828a8.length !== _0x11fe88) {
    for (let _0x5dc0be = _0x2828a8.length; _0x5dc0be < _0x11fe88; _0x5dc0be++) {
      if (_0x5cb57c = _0xab39ed[_0x5dc0be]) {
        _0x5cb57c.$();
      }
    }
    if (_0x5cb57c = Le(_0xab39ed, "length", _0x11fe88)) {
      _0x5cb57c.$(_0x2828a8.length);
    }
  }
  if (_0x5cb57c = _0xab39ed._) {
    _0x5cb57c.$();
  }
}
function ct(_0x2b2e74, _0x562bd0) {
  const _0x2ae6ae = Object.keys(_0x562bd0);
  for (let _0x4a6d09 = 0; _0x4a6d09 < _0x2ae6ae.length; _0x4a6d09 += 1) {
    const _0x2ab81e = _0x2ae6ae[_0x4a6d09];
    be(_0x2b2e74, _0x2ab81e, _0x562bd0[_0x2ab81e]);
  }
}
function un(_0x44658c, _0x2a81be) {
  if (typeof _0x2a81be == "function") {
    _0x2a81be = _0x2a81be(_0x44658c);
  }
  _0x2a81be = ue(_0x2a81be);
  if (Array.isArray(_0x2a81be)) {
    if (_0x44658c === _0x2a81be) {
      return;
    }
    let _0x35557d = 0;
    let _0x5a71fc = _0x2a81be.length;
    for (; _0x35557d < _0x5a71fc; _0x35557d++) {
      const _0x568987 = _0x2a81be[_0x35557d];
      if (_0x44658c[_0x35557d] !== _0x568987) {
        be(_0x44658c, _0x35557d, _0x568987);
      }
    }
    be(_0x44658c, "length", _0x5a71fc);
  } else {
    ct(_0x44658c, _0x2a81be);
  }
}
function le(_0x561c6a, _0x43da3e, _0x4e7996 = []) {
  let _0x245dce;
  let _0x4170f6 = _0x561c6a;
  if (_0x43da3e.length > 1) {
    _0x245dce = _0x43da3e.shift();
    const _0x983002 = typeof _0x245dce;
    const _0x4f273e = Array.isArray(_0x561c6a);
    if (Array.isArray(_0x245dce)) {
      for (let _0x1b5c4b = 0; _0x1b5c4b < _0x245dce.length; _0x1b5c4b++) {
        le(_0x561c6a, [_0x245dce[_0x1b5c4b]].concat(_0x43da3e), _0x4e7996);
      }
      return;
    } else if (_0x4f273e && _0x983002 === "function") {
      for (let _0x80e2c5 = 0; _0x80e2c5 < _0x561c6a.length; _0x80e2c5++) {
        if (_0x245dce(_0x561c6a[_0x80e2c5], _0x80e2c5)) {
          le(_0x561c6a, [_0x80e2c5].concat(_0x43da3e), _0x4e7996);
        }
      }
      return;
    } else if (_0x4f273e && _0x983002 === "object") {
      const {
        from: _0x115e04 = 0,
        to: _0x244d2d = _0x561c6a.length - 1,
        by: _0x3e4cd3 = 1
      } = _0x245dce;
      for (let _0x2bf7e7 = _0x115e04; _0x2bf7e7 <= _0x244d2d; _0x2bf7e7 += _0x3e4cd3) {
        le(_0x561c6a, [_0x2bf7e7].concat(_0x43da3e), _0x4e7996);
      }
      return;
    } else if (_0x43da3e.length > 1) {
      le(_0x561c6a[_0x245dce], _0x43da3e, [_0x245dce].concat(_0x4e7996));
      return;
    }
    _0x4170f6 = _0x561c6a[_0x245dce];
    _0x4e7996 = [_0x245dce].concat(_0x4e7996);
  }
  let _0x62b7ef = _0x43da3e[0];
  if ((typeof _0x62b7ef != "function" || !(_0x62b7ef = _0x62b7ef(_0x4170f6, _0x4e7996), _0x62b7ef === _0x4170f6)) && (_0x245dce !== undefined || _0x62b7ef != null)) {
    _0x62b7ef = ue(_0x62b7ef);
    if (_0x245dce === undefined || pe(_0x4170f6) && pe(_0x62b7ef) && !Array.isArray(_0x62b7ef)) {
      ct(_0x4170f6, _0x62b7ef);
    } else {
      be(_0x561c6a, _0x245dce, _0x62b7ef);
    }
  }
}
function ut(...[_0x263ed3, _0x25d4fe]) {
  const _0x46e624 = ue(_0x263ed3 || {});
  const _0x4feef9 = Array.isArray(_0x46e624);
  const _0x427880 = st(_0x46e624);
  function _0x3ab2b2(..._0x1ca9c4) {
    ze(() => {
      if (_0x4feef9 && _0x1ca9c4.length === 1) {
        un(_0x46e624, _0x1ca9c4[0]);
      } else {
        le(_0x46e624, _0x1ca9c4);
      }
    });
  }
  return [_0x427880, _0x3ab2b2];
}
const qe = {
  show: false,
  labelOverrides: {},
  filters: {
    Blood: true,
    Projectile: true,
    Casing: true,
    "Vehicle Fragment": true
  },
  radius: 10,
  keyboardMode: false
};
const [fn, ft] = sn(() => {
  const _0x4709d4 = qe;
  const [_0x528260, _0x1f63a4] = ut(_0x4709d4);
  return {
    state: _0x528260,
    setState: _0x1f63a4
  };
}, {
  state: qe,
  setState: () => {}
});
const an = F("<div class=\"pointer-events-none fixed left-0 top-0 z-50 h-full w-full\">");
const dn = F("<div> ");
const vn = F("<div class=\"absolute bg-white opacity-70\">");
const hn = F("<div>");
const We = {
  Projectile: {
    color: "bg-orange-500",
    icon: "🔸"
  },
  Blood: {
    color: "bg-red-600",
    icon: "🩸"
  },
  Casing: {
    color: "bg-yellow-600",
    icon: "🔫"
  },
  "Vehicle Fragment": {
    color: "bg-purple-500",
    icon: "🚗"
  },
  default: {
    color: "bg-gray-500",
    icon: "❓"
  }
};
function gn() {
  const [_0xca292c, _0xb47b4d] = J([]);
  const [_0x3373be, _0x28ec27] = J({});
  J(false);
  const _0x13457f = ee(() => ({
    width: window.innerWidth,
    height: window.innerHeight
  }));
  Ie(() => {
    _0x3ae9cc.register("evidence:setClusters", async _0x150a70 => {
      _0xb47b4d(_0x150a70);
    });
    _0x3ae9cc.register("evidence:updatePositions", async _0x3f9328 => {
      _0x28ec27(_0x3f9328);
    });
  });
  const _0x59f7ea = ee(() => Object.entries(_0x3373be()).filter(([_0xf7fb3e, _0x52bfb4]) => _0x52bfb4.visible).map(([_0x29fded, _0x4309b8]) => ({
    ..._0x4309b8
  })));
  return (() => {
    const _0x58d194 = an();
    L(_0x58d194, I(oe, {
      get each() {
        return _0x59f7ea();
      },
      children: _0x571e73 => {
        const _0x24870f = We[_0x571e73.objectType || "default"] || We.default;
        const {
          width: _0x23ef2c,
          height: _0x6dada3
        } = _0x13457f();
        const _0x546d67 = _0x571e73.x * _0x23ef2c;
        const _0x74cc95 = _0x571e73.y * _0x6dada3;
        return [(() => {
          const _0x4e40f4 = dn();
          const _0xf4ab54 = _0x4e40f4.firstChild;
          if (_0x546d67 + "px" != null) {
            _0x4e40f4.style.setProperty("left", _0x546d67 + "px");
          } else {
            _0x4e40f4.style.removeProperty("left");
          }
          if (_0x74cc95 + "px" != null) {
            _0x4e40f4.style.setProperty("top", _0x74cc95 + "px");
          } else {
            _0x4e40f4.style.removeProperty("top");
          }
          _0x4e40f4.style.setProperty("opacity", "1");
          _0x4e40f4.style.setProperty("transform", "translate(-50%, -50%)");
          _0x4e40f4.style.setProperty("white-space", "nowrap");
          _0x4e40f4.style.setProperty("z-index", "60");
          _0x4e40f4.style.setProperty("color", "white");
          _0x4e40f4.style.setProperty("pointer-events", "auto");
          _0x4e40f4.style.setProperty("user-select", "text");
          _0x4e40f4.style.setProperty("cursor", "text");
          L(_0x4e40f4, () => _0x24870f.icon, _0xf4ab54);
          L(_0x4e40f4, () => _0x571e73.label, null);
          O(() => g(_0x4e40f4, "absolute " + _0x24870f.color + " rounded px-2 py-1 text-xs tracking-wide " + v.standardFont + " " + v.markerLabel));
          return _0x4e40f4;
        })(), I(oe, {
          get each() {
            return _0x571e73.markers?.filter(_0x53461c => _0x53461c.visible) || [];
          },
          children: _0x4f11cc => {
            const _0x5ec52c = _0x4f11cc.x * _0x23ef2c;
            const _0x2c5c42 = _0x4f11cc.y * _0x6dada3;
            const _0x2ab71f = _0x5ec52c - _0x546d67;
            const _0x2e3d7e = _0x2c5c42 - _0x74cc95;
            const _0x2fa41b = Math.sqrt(_0x2ab71f * _0x2ab71f + _0x2e3d7e * _0x2e3d7e);
            const _0x1169b3 = Math.atan2(_0x2e3d7e, _0x2ab71f) * (180 / Math.PI);
            return [(() => {
              const _0x52ff12 = vn();
              if (_0x546d67 + "px" != null) {
                _0x52ff12.style.setProperty("left", _0x546d67 + "px");
              } else {
                _0x52ff12.style.removeProperty("left");
              }
              if (_0x74cc95 + "px" != null) {
                _0x52ff12.style.setProperty("top", _0x74cc95 + "px");
              } else {
                _0x52ff12.style.removeProperty("top");
              }
              if (_0x2fa41b + "px" != null) {
                _0x52ff12.style.setProperty("width", _0x2fa41b + "px");
              } else {
                _0x52ff12.style.removeProperty("width");
              }
              _0x52ff12.style.setProperty("height", "2px");
              if ("rotate(" + _0x1169b3 + "deg)" != null) {
                _0x52ff12.style.setProperty("transform", "rotate(" + _0x1169b3 + "deg)");
              } else {
                _0x52ff12.style.removeProperty("transform");
              }
              _0x52ff12.style.setProperty("transform-origin", "0 0");
              _0x52ff12.style.setProperty("box-shadow", "0 0 4px rgba(0, 0, 0, 0.4)");
              return _0x52ff12;
            })(), (() => {
              const _0x4c4b64 = hn();
              if (_0x5ec52c + "px" != null) {
                _0x4c4b64.style.setProperty("left", _0x5ec52c + "px");
              } else {
                _0x4c4b64.style.removeProperty("left");
              }
              if (_0x2c5c42 + "px" != null) {
                _0x4c4b64.style.setProperty("top", _0x2c5c42 + "px");
              } else {
                _0x4c4b64.style.removeProperty("top");
              }
              _0x4c4b64.style.setProperty("opacity", "0.8");
              _0x4c4b64.style.setProperty("transform", "translate(-50%, -50%)");
              _0x4c4b64.style.setProperty("box-shadow", "0 0 6px rgba(0, 0, 0, 0.6)");
              O(() => g(_0x4c4b64, "absolute h-2.5 w-2.5 rounded-full " + _0x24870f.color + " border border-white"));
              return _0x4c4b64;
            })()];
          }
        })];
      }
    }));
    return _0x58d194;
  })();
}
const yn = F("<div><h2>Evidence Types</h2><div></div><div><h2>Display Range</h2><div><div></div><div><input type=\"range\" min=\"0\" step=\"1\"></div><div>Current: <!> meters");
const _n = F("<div><h2>Custom Labels</h2><div><div>Custom labels will replace evidence identifiers with your specified text.");
const $n = F("<div><div><div><h1>EVIDENCE SETTINGS</div><div><button><span>×</button></div></div><div><button>FILTERS</button><button>LABELS</button></div><div></div><div><div><div><span>Y</span><span>Show Settings</div><div><span>E</span><span>Exit Replay</div><div><span>ESC</span><span>Close Settings");
const pn = F("<label><span></span><input type=\"checkbox\">");
const bn = F("<span>m");
const wn = F("<div><input type=\"text\" placeholder=\"Identifier\"><span>→</span><input type=\"text\" placeholder=\"Custom Label\">");
const xn = ["Blood", "Projectile", "Casing", "Vehicle Fragment"];
const K = [1, 2, 3, 5, 10, 20, 30];
function Pe(_0x1a81d9, _0x3196d7) {
  let _0xcb2628 = null;
  return (..._0x58db78) => {
    if (_0xcb2628 !== null) {
      clearTimeout(_0xcb2628);
    }
    _0xcb2628 = setTimeout(() => _0x1a81d9(..._0x58db78), _0x3196d7);
  };
}
function mn() {
  const {
    state: _0x415bbb,
    setState: _0x2dcba2
  } = ft();
  const [_0x947e21, _0x695af0] = J("filters");
  const [_0x376caa, _0x561db4] = ut(Array.from({
    length: 3
  }, () => ({
    key: "",
    value: ""
  })));
  const _0x4cb5e9 = Pe(_0x4572ea => {
    _0x3ae9cc.execute("evidence:setLabelOverrides", _0x4572ea);
  }, 300);
  const _0x58a2fb = Pe(_0x274208 => {
    _0x3ae9cc.execute("evidence:setFilters", _0x274208);
  }, 300);
  const _0x3dc6ba = Pe(_0xef5b1a => {
    _0x3ae9cc.execute("evidence:setRadius", _0xef5b1a);
  }, 300);
  Ie(() => {
    _0x3ae9cc.register("evidence:setRadius", async _0x2c4e65 => {
      if (typeof _0x2c4e65 == "number" && !isNaN(_0x2c4e65) && _0x2c4e65 > 0) {
        let _0x3158eb = K[0];
        let _0x3270f7 = Math.abs(_0x2c4e65 - K[0]);
        for (let _0x25a1c1 = 1; _0x25a1c1 < K.length; _0x25a1c1++) {
          const _0x2d7305 = Math.abs(_0x2c4e65 - K[_0x25a1c1]);
          if (_0x2d7305 < _0x3270f7) {
            _0x3270f7 = _0x2d7305;
            _0x3158eb = K[_0x25a1c1];
          }
        }
        _0x2dcba2({
          radius: _0x3158eb
        });
      }
    });
    _0x3ae9cc.register("evidence:setKeyboardMode", async _0x7eecf9 => {
      _0x2dcba2({
        keyboardMode: _0x7eecf9
      });
    });
    document.addEventListener("keydown", _0x9b5bf => {
      if (_0x9b5bf.key === "Escape" && _0x415bbb.keyboardMode) {
        _0x1b998d();
      }
    });
  });
  const _0x32b27c = _0x415bbb.labelOverrides || {};
  Object.entries(_0x32b27c).slice(0, 3).forEach(([_0x166773, _0x2396f5], _0x17edaa) => {
    _0x561db4(_0x17edaa, {
      key: _0x166773,
      value: _0x2396f5
    });
  });
  _0x3ae9cc.execute("evidence:setRadius", _0x415bbb.radius);
  _0x3ae9cc.execute("evidence:setFilters", _0x415bbb.filters);
  _0x3ae9cc.execute("evidence:setLabelOverrides", _0x415bbb.labelOverrides);
  const _0x2e67bd = _0x3d1cbb => {
    _0x2dcba2({
      radius: _0x3d1cbb
    });
    _0x3dc6ba(_0x3d1cbb);
  };
  const _0x17f1ca = _0xabd256 => {
    const _0x3d9b5c = {
      ..._0x415bbb.filters,
      [_0xabd256]: !_0x415bbb.filters[_0xabd256]
    };
    _0x2dcba2({
      filters: _0x3d9b5c
    });
    _0x58a2fb(_0x3d9b5c);
  };
  const _0x5cfbb9 = (_0x3794d8, _0x23d0ad, _0x4f6691) => {
    ze(() => {
      _0x561db4(_0x3794d8, _0x23d0ad, _0x4f6691);
    });
    const _0x2f501f = {};
    _0x376caa.forEach(_0x13f75b => {
      if (_0x13f75b.key) {
        _0x2f501f[_0x13f75b.key] = _0x13f75b.value;
      }
    });
    _0x2dcba2({
      labelOverrides: _0x2f501f
    });
    _0x4cb5e9(_0x2f501f);
  };
  const _0x1b998d = () => {
    _0x3ae9cc.execute("evidence:stopInteractive");
    _0x2dcba2({
      keyboardMode: false
    });
  };
  const _0x3e869a = () => {
    _0x3ae9cc.execute("evidence:stopInteractive");
  };
  return (() => {
    const _0x1fc5b4 = $n();
    const _0xd0c961 = _0x1fc5b4.firstChild;
    const _0x21afbc = _0xd0c961.firstChild;
    const _0x5be044 = _0x21afbc.firstChild;
    const _0x3bfdb3 = _0x21afbc.nextSibling;
    const _0x479442 = _0x3bfdb3.firstChild;
    const _0x5f9b6 = _0xd0c961.nextSibling;
    const _0x40b07d = _0x5f9b6.firstChild;
    const _0x404ce9 = _0x40b07d.nextSibling;
    const _0x31930e = _0x5f9b6.nextSibling;
    const _0x23c075 = _0x31930e.nextSibling;
    const _0x34f927 = _0x23c075.firstChild;
    const _0x2c442f = _0x34f927.firstChild;
    const _0xe0362c = _0x2c442f.firstChild;
    const _0x264893 = _0x2c442f.nextSibling;
    const _0x28530a = _0x264893.firstChild;
    const _0x3a5a1d = _0x264893.nextSibling;
    const _0x319b8a = _0x3a5a1d.firstChild;
    _0x479442.$$click = _0x3e869a;
    _0x40b07d.$$click = () => _0x695af0("filters");
    _0x404ce9.$$click = () => _0x695af0("overrides");
    L(_0x31930e, I(_e, {
      get when() {
        return _0x947e21() === "filters";
      },
      get children() {
        const _0x4988ac = yn();
        const _0x289e2b = _0x4988ac.firstChild;
        const _0x4ffd31 = _0x289e2b.nextSibling;
        const _0x14bcdb = _0x4ffd31.nextSibling;
        const _0x427487 = _0x14bcdb.firstChild;
        const _0x39bd01 = _0x427487.nextSibling;
        const _0x4f3441 = _0x39bd01.firstChild;
        const _0x4ca85b = _0x4f3441.nextSibling;
        const _0x28c5e3 = _0x4ca85b.firstChild;
        const _0x41df01 = _0x4ca85b.nextSibling;
        const _0x2ea3ce = _0x41df01.firstChild;
        const _0x59e894 = _0x2ea3ce.nextSibling;
        _0x59e894.nextSibling;
        L(_0x4ffd31, I(oe, {
          each: xn,
          children: _0x2d2ebc => (() => {
            const _0x411ed6 = pn();
            const _0x59b56c = _0x411ed6.firstChild;
            const _0x417634 = _0x59b56c.nextSibling;
            L(_0x59b56c, _0x2d2ebc);
            _0x417634.$$input = () => _0x17f1ca(_0x2d2ebc);
            O(() => g(_0x411ed6, v.filterItem));
            O(() => _0x417634.checked = _0x415bbb.filters[_0x2d2ebc]);
            return _0x411ed6;
          })()
        }));
        L(_0x4f3441, I(oe, {
          each: K,
          children: _0x303dab => (() => {
            const _0x591874 = bn();
            const _0x234339 = _0x591874.firstChild;
            L(_0x591874, _0x303dab, _0x234339);
            return _0x591874;
          })()
        }));
        _0x28c5e3.$$input = _0x285316 => _0x2e67bd(K[parseInt(_0x285316.currentTarget.value)]);
        L(_0x41df01, () => _0x415bbb.radius, _0x59e894);
        O(_0x34d866 => {
          const _0x37948a = v.sectionTitle;
          const _0x14023d = v.rangeContainer;
          const _0x134dcd = v.sectionTitle;
          const _0x4f6ebe = v.rangeLabels;
          const _0x14c979 = v.rangeInputContainer;
          const _0x51e1b8 = K.length - 1;
          const _0x1ae7b4 = v.rangeInput;
          const _0x5b5966 = v.currentRadiusValue;
          if (_0x37948a !== _0x34d866._v$) {
            g(_0x289e2b, _0x34d866._v$ = _0x37948a);
          }
          if (_0x14023d !== _0x34d866._v$2) {
            g(_0x14bcdb, _0x34d866._v$2 = _0x14023d);
          }
          if (_0x134dcd !== _0x34d866._v$3) {
            g(_0x427487, _0x34d866._v$3 = _0x134dcd);
          }
          if (_0x4f6ebe !== _0x34d866._v$4) {
            g(_0x4f3441, _0x34d866._v$4 = _0x4f6ebe);
          }
          if (_0x14c979 !== _0x34d866._v$5) {
            g(_0x4ca85b, _0x34d866._v$5 = _0x14c979);
          }
          if (_0x51e1b8 !== _0x34d866._v$6) {
            Et(_0x28c5e3, "max", _0x34d866._v$6 = _0x51e1b8);
          }
          if (_0x1ae7b4 !== _0x34d866._v$7) {
            g(_0x28c5e3, _0x34d866._v$7 = _0x1ae7b4);
          }
          if (_0x5b5966 !== _0x34d866._v$8) {
            g(_0x41df01, _0x34d866._v$8 = _0x5b5966);
          }
          return _0x34d866;
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
        O(() => _0x28c5e3.value = K.indexOf(_0x415bbb.radius) >= 0 ? K.indexOf(_0x415bbb.radius) : 4);
        return _0x4988ac;
      }
    }), null);
    L(_0x31930e, I(_e, {
      get when() {
        return _0x947e21() === "overrides";
      },
      get children() {
        const _0x287b05 = _n();
        const _0x3acf54 = _0x287b05.firstChild;
        const _0x481550 = _0x3acf54.nextSibling;
        const _0x4d5b0f = _0x481550.firstChild;
        L(_0x481550, I(oe, {
          each: _0x376caa,
          children: (_0x398978, _0x5ed77b) => (() => {
            const _0x577de0 = wn();
            const _0x936eee = _0x577de0.firstChild;
            const _0x269507 = _0x936eee.nextSibling;
            const _0x248019 = _0x269507.nextSibling;
            _0x936eee.$$input = _0x3421a5 => _0x5cfbb9(_0x5ed77b(), "key", _0x3421a5.currentTarget.value);
            _0x248019.$$input = _0x599266 => _0x5cfbb9(_0x5ed77b(), "value", _0x599266.currentTarget.value);
            O(_0x48f717 => {
              const _0xff0a81 = v.customLabelRow;
              const _0x5a16cf = v.inputField;
              const _0x53c808 = v.arrow;
              const _0x189509 = v.inputField + " " + v.inputFieldWide;
              if (_0xff0a81 !== _0x48f717._v$28) {
                g(_0x577de0, _0x48f717._v$28 = _0xff0a81);
              }
              if (_0x5a16cf !== _0x48f717._v$29) {
                g(_0x936eee, _0x48f717._v$29 = _0x5a16cf);
              }
              if (_0x53c808 !== _0x48f717._v$30) {
                g(_0x269507, _0x48f717._v$30 = _0x53c808);
              }
              if (_0x189509 !== _0x48f717._v$31) {
                g(_0x248019, _0x48f717._v$31 = _0x189509);
              }
              return _0x48f717;
            }, {
              _v$28: undefined,
              _v$29: undefined,
              _v$30: undefined,
              _v$31: undefined
            });
            O(() => _0x936eee.value = _0x398978.key);
            O(() => _0x248019.value = _0x398978.value);
            return _0x577de0;
          })()
        }), _0x4d5b0f);
        O(_0x295a70 => {
          const _0x53bfd6 = v.sectionTitle;
          const _0x436139 = v.helpText;
          if (_0x53bfd6 !== _0x295a70._v$9) {
            g(_0x3acf54, _0x295a70._v$9 = _0x53bfd6);
          }
          if (_0x436139 !== _0x295a70._v$10) {
            g(_0x4d5b0f, _0x295a70._v$10 = _0x436139);
          }
          return _0x295a70;
        }, {
          _v$9: undefined,
          _v$10: undefined
        });
        return _0x287b05;
      }
    }), null);
    O(_0x3810b4 => {
      const _0x3ff756 = v.evidencePanel;
      const _0x4e3d1b = v.evidenceHeader;
      const _0x45b288 = v.evidenceTitle;
      const _0x5509ae = v.headerControls;
      const _0x9768a0 = v.closeButton;
      const _0x36560c = v.tabNavigation;
      const _0x456e21 = v.tabButton + " " + (_0x947e21() === "filters" ? v.active : "");
      const _0x3a9352 = v.tabButton + " " + (_0x947e21() === "overrides" ? v.active : "");
      const _0x1e6a94 = v.contentArea;
      const _0x218480 = v.footer;
      const _0xc943fb = v.footerContent;
      const _0x3460af = v.keyControl;
      const _0xc7bb02 = v.keyButton;
      const _0x4bcd5b = v.keyControl;
      const _0x58f122 = v.keyButton;
      const _0x2043bc = v.keyControl;
      const _0x4a9285 = v.keyButton;
      if (_0x3ff756 !== _0x3810b4._v$11) {
        g(_0x1fc5b4, _0x3810b4._v$11 = _0x3ff756);
      }
      if (_0x4e3d1b !== _0x3810b4._v$12) {
        g(_0xd0c961, _0x3810b4._v$12 = _0x4e3d1b);
      }
      if (_0x45b288 !== _0x3810b4._v$13) {
        g(_0x5be044, _0x3810b4._v$13 = _0x45b288);
      }
      if (_0x5509ae !== _0x3810b4._v$14) {
        g(_0x3bfdb3, _0x3810b4._v$14 = _0x5509ae);
      }
      if (_0x9768a0 !== _0x3810b4._v$15) {
        g(_0x479442, _0x3810b4._v$15 = _0x9768a0);
      }
      if (_0x36560c !== _0x3810b4._v$16) {
        g(_0x5f9b6, _0x3810b4._v$16 = _0x36560c);
      }
      if (_0x456e21 !== _0x3810b4._v$17) {
        g(_0x40b07d, _0x3810b4._v$17 = _0x456e21);
      }
      if (_0x3a9352 !== _0x3810b4._v$18) {
        g(_0x404ce9, _0x3810b4._v$18 = _0x3a9352);
      }
      if (_0x1e6a94 !== _0x3810b4._v$19) {
        g(_0x31930e, _0x3810b4._v$19 = _0x1e6a94);
      }
      if (_0x218480 !== _0x3810b4._v$20) {
        g(_0x23c075, _0x3810b4._v$20 = _0x218480);
      }
      if (_0xc943fb !== _0x3810b4._v$21) {
        g(_0x34f927, _0x3810b4._v$21 = _0xc943fb);
      }
      if (_0x3460af !== _0x3810b4._v$22) {
        g(_0x2c442f, _0x3810b4._v$22 = _0x3460af);
      }
      if (_0xc7bb02 !== _0x3810b4._v$23) {
        g(_0xe0362c, _0x3810b4._v$23 = _0xc7bb02);
      }
      if (_0x4bcd5b !== _0x3810b4._v$24) {
        g(_0x264893, _0x3810b4._v$24 = _0x4bcd5b);
      }
      if (_0x58f122 !== _0x3810b4._v$25) {
        g(_0x28530a, _0x3810b4._v$25 = _0x58f122);
      }
      if (_0x2043bc !== _0x3810b4._v$26) {
        g(_0x3a5a1d, _0x3810b4._v$26 = _0x2043bc);
      }
      if (_0x4a9285 !== _0x3810b4._v$27) {
        g(_0x319b8a, _0x3810b4._v$27 = _0x4a9285);
      }
      return _0x3810b4;
    }, {
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined,
      _v$20: undefined,
      _v$21: undefined,
      _v$22: undefined,
      _v$23: undefined,
      _v$24: undefined,
      _v$25: undefined,
      _v$26: undefined,
      _v$27: undefined
    });
    return _0x1fc5b4;
  })();
}
Ot(["click", "input"]);
const Cn = F("<div>");
function Sn() {
  const {
    state: _0x25dffe,
    setState: _0x3de7ff
  } = ft();
  const [_0x56d512, _0x5c4370] = J(false);
  const _0x5936a0 = _0x26639b => {
    if (_0x26639b.key === "Escape" && _0x25dffe.show) {
      _0x3ae9cc.execute("evidence:stopInteractive");
    }
  };
  Ie(async () => {
    const _0x428779 = async _0x1e887c => {
      _0x3de7ff(_0x1e887c);
    };
    _0x3ae9cc.register("setState", _0x428779);
    _0x3ae9cc.register("evidence:enterReplay", async () => {
      _0x5c4370(true);
    });
    _0x3ae9cc.register("evidence:exitReplay", async () => {
      _0x5c4370(false);
      _0x3de7ff({
        show: false
      });
    });
    document.addEventListener("keydown", _0x5936a0);
  });
  Qe(() => {
    document.removeEventListener("keydown", _0x5936a0);
  });
  return (() => {
    const _0x4f3197 = Cn();
    L(_0x4f3197, I(_e, {
      get when() {
        return _0x56d512();
      },
      get children() {
        return I(gn, {});
      }
    }), null);
    L(_0x4f3197, I(_e, {
      get when() {
        return _0x25dffe.show;
      },
      get children() {
        return I(mn, {});
      }
    }), null);
    O(() => g(_0x4f3197, v.App + " select-none"));
    return _0x4f3197;
  })();
}
Pt(() => I(fn, {
  get children() {
    return I(Sn, {});
  }
}), document.getElementById("root"));