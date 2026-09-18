import './style.css';
import { N as _0x39fd87 } from "./v-packages-6cb79519.js";
(function () {
  const _0x4a2e2d = document.createElement("link").relList;
  if (_0x4a2e2d && _0x4a2e2d.supports && _0x4a2e2d.supports("modulepreload")) {
    return;
  }
  for (const _0x4ef5a5 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x4ef9ac(_0x4ef5a5);
  }
  new MutationObserver(_0x4f2683 => {
    for (const _0x4e65a2 of _0x4f2683) {
      if (_0x4e65a2.type === "childList") {
        for (const _0x168f49 of _0x4e65a2.addedNodes) {
          if (_0x168f49.tagName === "LINK" && _0x168f49.rel === "modulepreload") {
            _0x4ef9ac(_0x168f49);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x5d8fb7(_0x5c800e) {
    const _0x90e07 = {};
    if (_0x5c800e.integrity) {
      _0x90e07.integrity = _0x5c800e.integrity;
    }
    if (_0x5c800e.referrerPolicy) {
      _0x90e07.referrerPolicy = _0x5c800e.referrerPolicy;
    }
    if (_0x5c800e.crossOrigin === "use-credentials") {
      _0x90e07.credentials = "include";
    } else if (_0x5c800e.crossOrigin === "anonymous") {
      _0x90e07.credentials = "omit";
    } else {
      _0x90e07.credentials = "same-origin";
    }
    return _0x90e07;
  }
  function _0x4ef9ac(_0xf9c116) {
    if (_0xf9c116.ep) {
      return;
    }
    _0xf9c116.ep = true;
    const _0x5dea5d = _0x5d8fb7(_0xf9c116);
    fetch(_0xf9c116.href, _0x5dea5d);
  }
})();
const Ft = (_0x4e0f2e, _0x5a3eee) => _0x4e0f2e === _0x5a3eee;
const U = Symbol("solid-proxy");
const Se = Symbol("solid-track");
const Mt = Symbol("solid-dev-component");
const pe = {
  equals: Ft
};
let mt = Ct;
const K = 1;
const Ae = 2;
const _t = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var M = null;
let Ve = null;
let O = null;
let R = null;
let G = null;
let Me = 0;
const [It, Vs] = j(false);
function oe(_0x2cf0c3, _0x595cd8) {
  const _0x3ada38 = O;
  const _0x1d1a66 = M;
  const _0x21fec9 = _0x2cf0c3.length === 0;
  const _0x4b541f = _0x21fec9 ? _t : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x595cd8 === undefined ? _0x1d1a66 : _0x595cd8
  };
  const _0x221bad = _0x21fec9 ? _0x2cf0c3 : () => _0x2cf0c3(() => N(() => Ne(_0x4b541f)));
  M = _0x4b541f;
  O = null;
  try {
    return ne(_0x221bad, true);
  } finally {
    O = _0x3ada38;
    M = _0x1d1a66;
  }
}
function j(_0x1bd03d, _0x14be23) {
  _0x14be23 = _0x14be23 ? Object.assign({}, pe, _0x14be23) : pe;
  const _0x455282 = {
    value: _0x1bd03d,
    observers: null,
    observerSlots: null,
    comparator: _0x14be23.equals || undefined
  };
  const _0x4fb930 = _0x5863d0 => {
    if (typeof _0x5863d0 == "function") {
      _0x5863d0 = _0x5863d0(_0x455282.value);
    }
    return bt(_0x455282, _0x5863d0);
  };
  return [wt.bind(_0x455282), _0x4fb930];
}
function te(_0x5d6057, _0x427473, _0x45f628) {
  const _0x3319ef = De(_0x5d6057, _0x427473, true, K);
  ue(_0x3319ef);
}
function L(_0x21ce90, _0x1c007b, _0x13dcd7) {
  const _0x2178ae = De(_0x21ce90, _0x1c007b, false, K);
  ue(_0x2178ae);
}
function Qe(_0x4d8165, _0x24b6fc, _0x37aaec) {
  mt = Bt;
  const _0xe0cbc9 = De(_0x4d8165, _0x24b6fc, false, K);
  if (!_0x37aaec || !_0x37aaec.render) {
    _0xe0cbc9.user = true;
  }
  if (G) {
    G.push(_0xe0cbc9);
  } else {
    ue(_0xe0cbc9);
  }
}
function F(_0x322e57, _0x4a1bd6, _0x501c4c) {
  _0x501c4c = _0x501c4c ? Object.assign({}, pe, _0x501c4c) : pe;
  const _0xb9fcc0 = De(_0x322e57, _0x4a1bd6, true, 0);
  _0xb9fcc0.observers = null;
  _0xb9fcc0.observerSlots = null;
  _0xb9fcc0.comparator = _0x501c4c.equals || undefined;
  ue(_0xb9fcc0);
  return wt.bind(_0xb9fcc0);
}
function Pe(_0x2ad89f) {
  return ne(_0x2ad89f, false);
}
function N(_0x1470b1) {
  if (O === null) {
    return _0x1470b1();
  }
  const _0x32ebee = O;
  O = null;
  try {
    return _0x1470b1();
  } finally {
    O = _0x32ebee;
  }
}
function Ie(_0x469507) {
  Qe(() => N(_0x469507));
}
function je(_0x1c947c) {
  if (M !== null) {
    if (M.cleanups === null) {
      M.cleanups = [_0x1c947c];
    } else {
      M.cleanups.push(_0x1c947c);
    }
  }
  return _0x1c947c;
}
function gt() {
  return O;
}
function jt(_0x40ae1e) {
  const _0x303a71 = O;
  const _0x57722b = M;
  return Promise.resolve().then(() => {
    O = _0x303a71;
    M = _0x57722b;
    let _0x1b122d;
    ne(_0x40ae1e, false);
    O = M = null;
    if (_0x1b122d) {
      return _0x1b122d.done;
    } else {
      return undefined;
    }
  });
}
function Dt() {
  return [It, jt];
}
function $t(_0x598d3e, _0x13d605) {
  const _0x135017 = Symbol("context");
  return {
    id: _0x135017,
    Provider: Rt(_0x135017),
    defaultValue: _0x598d3e
  };
}
function yt(_0x3343d0) {
  let _0x4e7d9b;
  if ((_0x4e7d9b = pt(M, _0x3343d0.id)) !== undefined) {
    return _0x4e7d9b;
  } else {
    return _0x3343d0.defaultValue;
  }
}
function Je(_0x69a9cf) {
  const _0x28d2a1 = F(_0x69a9cf);
  const _0x5867b7 = F(() => Ue(_0x28d2a1()));
  _0x5867b7.toArray = () => {
    const _0x507b80 = _0x5867b7();
    if (Array.isArray(_0x507b80)) {
      return _0x507b80;
    } else if (_0x507b80 != null) {
      return [_0x507b80];
    } else {
      return [];
    }
  };
  return _0x5867b7;
}
function wt() {
  if (this.sources && this.state) {
    if (this.state === K) {
      ue(this);
    } else {
      const _0x3bd3ba = R;
      R = null;
      ne(() => Le(this), false);
      R = _0x3bd3ba;
    }
  }
  if (O) {
    const _0x5cbde2 = this.observers ? this.observers.length : 0;
    if (O.sources) {
      O.sources.push(this);
      O.sourceSlots.push(_0x5cbde2);
    } else {
      O.sources = [this];
      O.sourceSlots = [_0x5cbde2];
    }
    if (this.observers) {
      this.observers.push(O);
      this.observerSlots.push(O.sources.length - 1);
    } else {
      this.observers = [O];
      this.observerSlots = [O.sources.length - 1];
    }
  }
  return this.value;
}
function bt(_0x143554, _0x57b341, _0x492513) {
  let _0x117bf2 = _0x143554.value;
  if (!_0x143554.comparator || !_0x143554.comparator(_0x117bf2, _0x57b341)) {
    _0x143554.value = _0x57b341;
    if (_0x143554.observers && _0x143554.observers.length) {
      ne(() => {
        for (let _0x2d63aa = 0; _0x2d63aa < _0x143554.observers.length; _0x2d63aa += 1) {
          const _0x5b638c = _0x143554.observers[_0x2d63aa];
          const _0x4edad6 = Ve && Ve.running;
          if (_0x4edad6) {
            Ve.disposed.has(_0x5b638c);
          }
          if (_0x4edad6 ? !_0x5b638c.tState : !_0x5b638c.state) {
            if (_0x5b638c.pure) {
              R.push(_0x5b638c);
            } else {
              G.push(_0x5b638c);
            }
            if (_0x5b638c.observers) {
              xt(_0x5b638c);
            }
          }
          if (!_0x4edad6) {
            _0x5b638c.state = K;
          }
        }
        if (R.length > 1000000) {
          R = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x57b341;
}
function ue(_0x4b301d) {
  if (!_0x4b301d.fn) {
    return;
  }
  Ne(_0x4b301d);
  const _0x2f1b03 = M;
  const _0x45db5e = O;
  const _0x14759c = Me;
  O = M = _0x4b301d;
  Nt(_0x4b301d, _0x4b301d.value, _0x14759c);
  O = _0x45db5e;
  M = _0x2f1b03;
}
function Nt(_0x5a695d, _0x28dee5, _0x36c3b9) {
  let _0x39a75b;
  try {
    _0x39a75b = _0x5a695d.fn(_0x28dee5);
  } catch (_0x19fd30) {
    if (_0x5a695d.pure) {
      _0x5a695d.state = K;
      if (_0x5a695d.owned) {
        _0x5a695d.owned.forEach(Ne);
      }
      _0x5a695d.owned = null;
    }
    _0x5a695d.updatedAt = _0x36c3b9 + 1;
    return St(_0x19fd30);
  }
  if (!_0x5a695d.updatedAt || _0x5a695d.updatedAt <= _0x36c3b9) {
    if (_0x5a695d.updatedAt != null && "observers" in _0x5a695d) {
      bt(_0x5a695d, _0x39a75b);
    } else {
      _0x5a695d.value = _0x39a75b;
    }
    _0x5a695d.updatedAt = _0x36c3b9;
  }
}
function De(_0x2bb9bb, _0x3bfea4, _0x113720, _0x3fd654 = K, _0x23913f) {
  const _0xb60c0c = {
    fn: _0x2bb9bb,
    state: _0x3fd654,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x3bfea4,
    owner: M,
    context: null,
    pure: _0x113720
  };
  if (M !== null) {
    if (M !== _t) {
      if (M.owned) {
        M.owned.push(_0xb60c0c);
      } else {
        M.owned = [_0xb60c0c];
      }
    }
  }
  return _0xb60c0c;
}
function Ee(_0x250fa9) {
  if (_0x250fa9.state === 0) {
    return;
  }
  if (_0x250fa9.state === Ae) {
    return Le(_0x250fa9);
  }
  if (_0x250fa9.suspense && N(_0x250fa9.suspense.inFallback)) {
    return _0x250fa9.suspense.effects.push(_0x250fa9);
  }
  const _0x359f4d = [_0x250fa9];
  while ((_0x250fa9 = _0x250fa9.owner) && (!_0x250fa9.updatedAt || _0x250fa9.updatedAt < Me)) {
    if (_0x250fa9.state) {
      _0x359f4d.push(_0x250fa9);
    }
  }
  for (let _0x8c382c = _0x359f4d.length - 1; _0x8c382c >= 0; _0x8c382c--) {
    _0x250fa9 = _0x359f4d[_0x8c382c];
    if (_0x250fa9.state === K) {
      ue(_0x250fa9);
    } else if (_0x250fa9.state === Ae) {
      const _0x2349fa = R;
      R = null;
      ne(() => Le(_0x250fa9, _0x359f4d[0]), false);
      R = _0x2349fa;
    }
  }
}
function ne(_0xff306c, _0x25f76b) {
  if (R) {
    return _0xff306c();
  }
  let _0x5639a8 = false;
  if (!_0x25f76b) {
    R = [];
  }
  if (G) {
    _0x5639a8 = true;
  } else {
    G = [];
  }
  Me++;
  try {
    const _0x4d6417 = _0xff306c();
    Vt(_0x5639a8);
    return _0x4d6417;
  } catch (_0x31b19e) {
    if (!_0x5639a8) {
      G = null;
    }
    R = null;
    St(_0x31b19e);
  }
}
function Vt(_0x5e89e7) {
  if (R) {
    Ct(R);
    R = null;
  }
  if (_0x5e89e7) {
    return;
  }
  const _0x7e4133 = G;
  G = null;
  if (_0x7e4133.length) {
    ne(() => mt(_0x7e4133), false);
  }
}
function Ct(_0x38c3cb) {
  for (let _0x1bf621 = 0; _0x1bf621 < _0x38c3cb.length; _0x1bf621++) {
    Ee(_0x38c3cb[_0x1bf621]);
  }
}
function Bt(_0x4fe070) {
  let _0x166027;
  let _0x16c5ca = 0;
  for (_0x166027 = 0; _0x166027 < _0x4fe070.length; _0x166027++) {
    const _0x1400fc = _0x4fe070[_0x166027];
    if (_0x1400fc.user) {
      _0x4fe070[_0x16c5ca++] = _0x1400fc;
    } else {
      Ee(_0x1400fc);
    }
  }
  for (_0x166027 = 0; _0x166027 < _0x16c5ca; _0x166027++) {
    Ee(_0x4fe070[_0x166027]);
  }
}
function Le(_0x1314fd, _0x18a962) {
  _0x1314fd.state = 0;
  for (let _0x52e23f = 0; _0x52e23f < _0x1314fd.sources.length; _0x52e23f += 1) {
    const _0x294a0f = _0x1314fd.sources[_0x52e23f];
    if (_0x294a0f.sources) {
      const _0x3cdf46 = _0x294a0f.state;
      if (_0x3cdf46 === K) {
        if (_0x294a0f !== _0x18a962 && (!_0x294a0f.updatedAt || _0x294a0f.updatedAt < Me)) {
          Ee(_0x294a0f);
        }
      } else if (_0x3cdf46 === Ae) {
        Le(_0x294a0f, _0x18a962);
      }
    }
  }
}
function xt(_0x1a8f65) {
  for (let _0x2eee46 = 0; _0x2eee46 < _0x1a8f65.observers.length; _0x2eee46 += 1) {
    const _0x210df8 = _0x1a8f65.observers[_0x2eee46];
    if (!_0x210df8.state) {
      _0x210df8.state = Ae;
      if (_0x210df8.pure) {
        R.push(_0x210df8);
      } else {
        G.push(_0x210df8);
      }
      if (_0x210df8.observers) {
        xt(_0x210df8);
      }
    }
  }
}
function Ne(_0x229dad) {
  let _0x48637e;
  if (_0x229dad.sources) {
    while (_0x229dad.sources.length) {
      const _0x16f8ab = _0x229dad.sources.pop();
      const _0x487428 = _0x229dad.sourceSlots.pop();
      const _0x179278 = _0x16f8ab.observers;
      if (_0x179278 && _0x179278.length) {
        const _0x3a9e5c = _0x179278.pop();
        const _0x124641 = _0x16f8ab.observerSlots.pop();
        if (_0x487428 < _0x179278.length) {
          _0x3a9e5c.sourceSlots[_0x124641] = _0x487428;
          _0x179278[_0x487428] = _0x3a9e5c;
          _0x16f8ab.observerSlots[_0x487428] = _0x124641;
        }
      }
    }
  }
  if (_0x229dad.owned) {
    for (_0x48637e = _0x229dad.owned.length - 1; _0x48637e >= 0; _0x48637e--) {
      Ne(_0x229dad.owned[_0x48637e]);
    }
    _0x229dad.owned = null;
  }
  if (_0x229dad.cleanups) {
    for (_0x48637e = _0x229dad.cleanups.length - 1; _0x48637e >= 0; _0x48637e--) {
      _0x229dad.cleanups[_0x48637e]();
    }
    _0x229dad.cleanups = null;
  }
  _0x229dad.state = 0;
  _0x229dad.context = null;
}
function St(_0x186de4) {
  throw _0x186de4;
}
function pt(_0x389984, _0x913eaa) {
  if (_0x389984) {
    if (_0x389984.context && _0x389984.context[_0x913eaa] !== undefined) {
      return _0x389984.context[_0x913eaa];
    } else {
      return pt(_0x389984.owner, _0x913eaa);
    }
  } else {
    return undefined;
  }
}
function Ue(_0x56367b) {
  if (typeof _0x56367b == "function" && !_0x56367b.length) {
    return Ue(_0x56367b());
  }
  if (Array.isArray(_0x56367b)) {
    const _0x27cd4f = [];
    for (let _0x49745f = 0; _0x49745f < _0x56367b.length; _0x49745f++) {
      const _0x2e3d1d = Ue(_0x56367b[_0x49745f]);
      if (Array.isArray(_0x2e3d1d)) {
        _0x27cd4f.push.apply(_0x27cd4f, _0x2e3d1d);
      } else {
        _0x27cd4f.push(_0x2e3d1d);
      }
    }
    return _0x27cd4f;
  }
  return _0x56367b;
}
function Rt(_0x55c707, _0x514f20) {
  return function (_0x327f7e) {
    let _0x1c00bc;
    L(() => _0x1c00bc = N(() => {
      M.context = {
        [_0x55c707]: _0x327f7e.value
      };
      return Je(() => _0x327f7e.children);
    }), undefined);
    return _0x1c00bc;
  };
}
const Ze = Symbol("fallback");
function ke(_0x4fd66c) {
  for (let _0x59a925 = 0; _0x59a925 < _0x4fd66c.length; _0x59a925++) {
    _0x4fd66c[_0x59a925]();
  }
}
function zt(_0x5ca35a, _0x29c6d7, _0x1d86e2 = {}) {
  let _0xb04487 = [];
  let _0x808dad = [];
  let _0x27a0cb = [];
  let _0x505f35 = 0;
  let _0x2d6193 = _0x29c6d7.length > 1 ? [] : null;
  je(() => ke(_0x27a0cb));
  return () => {
    let _0x5bed90 = _0x5ca35a() || [];
    let _0x2e4314;
    let _0x5c6ddf;
    _0x5bed90[Se];
    return N(() => {
      let _0x574cb2 = _0x5bed90.length;
      let _0x1bec42;
      let _0x1d2aca;
      let _0x4329b8;
      let _0x1c2472;
      let _0x134d58;
      let _0x421ad7;
      let _0x13fa7c;
      let _0x339963;
      let _0x2061e6;
      if (_0x574cb2 === 0) {
        if (_0x505f35 !== 0) {
          ke(_0x27a0cb);
          _0x27a0cb = [];
          _0xb04487 = [];
          _0x808dad = [];
          _0x505f35 = 0;
          _0x2d6193 &&= [];
        }
        if (_0x1d86e2.fallback) {
          _0xb04487 = [Ze];
          _0x808dad[0] = oe(_0x49c96c => {
            _0x27a0cb[0] = _0x49c96c;
            return _0x1d86e2.fallback();
          });
          _0x505f35 = 1;
        }
      } else if (_0x505f35 === 0) {
        _0x808dad = new Array(_0x574cb2);
        _0x5c6ddf = 0;
        for (; _0x5c6ddf < _0x574cb2; _0x5c6ddf++) {
          _0xb04487[_0x5c6ddf] = _0x5bed90[_0x5c6ddf];
          _0x808dad[_0x5c6ddf] = oe(_0x79b0fc);
        }
        _0x505f35 = _0x574cb2;
      } else {
        _0x4329b8 = new Array(_0x574cb2);
        _0x1c2472 = new Array(_0x574cb2);
        if (_0x2d6193) {
          _0x134d58 = new Array(_0x574cb2);
        }
        _0x421ad7 = 0;
        _0x13fa7c = Math.min(_0x505f35, _0x574cb2);
        for (; _0x421ad7 < _0x13fa7c && _0xb04487[_0x421ad7] === _0x5bed90[_0x421ad7]; _0x421ad7++);
        _0x13fa7c = _0x505f35 - 1;
        _0x339963 = _0x574cb2 - 1;
        for (; _0x13fa7c >= _0x421ad7 && _0x339963 >= _0x421ad7 && _0xb04487[_0x13fa7c] === _0x5bed90[_0x339963]; _0x13fa7c--, _0x339963--) {
          _0x4329b8[_0x339963] = _0x808dad[_0x13fa7c];
          _0x1c2472[_0x339963] = _0x27a0cb[_0x13fa7c];
          if (_0x2d6193) {
            _0x134d58[_0x339963] = _0x2d6193[_0x13fa7c];
          }
        }
        _0x1bec42 = new Map();
        _0x1d2aca = new Array(_0x339963 + 1);
        _0x5c6ddf = _0x339963;
        for (; _0x5c6ddf >= _0x421ad7; _0x5c6ddf--) {
          _0x2061e6 = _0x5bed90[_0x5c6ddf];
          _0x2e4314 = _0x1bec42.get(_0x2061e6);
          _0x1d2aca[_0x5c6ddf] = _0x2e4314 === undefined ? -1 : _0x2e4314;
          _0x1bec42.set(_0x2061e6, _0x5c6ddf);
        }
        for (_0x2e4314 = _0x421ad7; _0x2e4314 <= _0x13fa7c; _0x2e4314++) {
          _0x2061e6 = _0xb04487[_0x2e4314];
          _0x5c6ddf = _0x1bec42.get(_0x2061e6);
          if (_0x5c6ddf !== undefined && _0x5c6ddf !== -1) {
            _0x4329b8[_0x5c6ddf] = _0x808dad[_0x2e4314];
            _0x1c2472[_0x5c6ddf] = _0x27a0cb[_0x2e4314];
            if (_0x2d6193) {
              _0x134d58[_0x5c6ddf] = _0x2d6193[_0x2e4314];
            }
            _0x5c6ddf = _0x1d2aca[_0x5c6ddf];
            _0x1bec42.set(_0x2061e6, _0x5c6ddf);
          } else {
            _0x27a0cb[_0x2e4314]();
          }
        }
        for (_0x5c6ddf = _0x421ad7; _0x5c6ddf < _0x574cb2; _0x5c6ddf++) {
          if (_0x5c6ddf in _0x4329b8) {
            _0x808dad[_0x5c6ddf] = _0x4329b8[_0x5c6ddf];
            _0x27a0cb[_0x5c6ddf] = _0x1c2472[_0x5c6ddf];
            if (_0x2d6193) {
              _0x2d6193[_0x5c6ddf] = _0x134d58[_0x5c6ddf];
              _0x2d6193[_0x5c6ddf](_0x5c6ddf);
            }
          } else {
            _0x808dad[_0x5c6ddf] = oe(_0x79b0fc);
          }
        }
        _0x808dad = _0x808dad.slice(0, _0x505f35 = _0x574cb2);
        _0xb04487 = _0x5bed90.slice(0);
      }
      return _0x808dad;
    });
    function _0x79b0fc(_0x18adcb) {
      _0x27a0cb[_0x5c6ddf] = _0x18adcb;
      if (_0x2d6193) {
        const [_0x5c6efd, _0x542a5c] = j(_0x5c6ddf);
        _0x2d6193[_0x5c6ddf] = _0x542a5c;
        return _0x29c6d7(_0x5bed90[_0x5c6ddf], _0x5c6efd);
      }
      return _0x29c6d7(_0x5bed90[_0x5c6ddf]);
    }
  };
}
function qt(_0x1cdcc0, _0x3c6bac, _0x4c810a = {}) {
  let _0x31eea1 = [];
  let _0x36e03f = [];
  let _0x9c77f8 = [];
  let _0x2e5619 = [];
  let _0x4bb9e1 = 0;
  let _0x1ecae3;
  je(() => ke(_0x9c77f8));
  return () => {
    const _0x503a01 = _0x1cdcc0() || [];
    _0x503a01[Se];
    return N(() => {
      if (_0x503a01.length === 0) {
        if (_0x4bb9e1 !== 0) {
          ke(_0x9c77f8);
          _0x9c77f8 = [];
          _0x31eea1 = [];
          _0x36e03f = [];
          _0x4bb9e1 = 0;
          _0x2e5619 = [];
        }
        if (_0x4c810a.fallback) {
          _0x31eea1 = [Ze];
          _0x36e03f[0] = oe(_0x91753e => {
            _0x9c77f8[0] = _0x91753e;
            return _0x4c810a.fallback();
          });
          _0x4bb9e1 = 1;
        }
        return _0x36e03f;
      }
      if (_0x31eea1[0] === Ze) {
        _0x9c77f8[0]();
        _0x9c77f8 = [];
        _0x31eea1 = [];
        _0x36e03f = [];
        _0x4bb9e1 = 0;
      }
      _0x1ecae3 = 0;
      for (; _0x1ecae3 < _0x503a01.length; _0x1ecae3++) {
        if (_0x1ecae3 < _0x31eea1.length && _0x31eea1[_0x1ecae3] !== _0x503a01[_0x1ecae3]) {
          _0x2e5619[_0x1ecae3](() => _0x503a01[_0x1ecae3]);
        } else if (_0x1ecae3 >= _0x31eea1.length) {
          _0x36e03f[_0x1ecae3] = oe(_0x22c979);
        }
      }
      for (; _0x1ecae3 < _0x31eea1.length; _0x1ecae3++) {
        _0x9c77f8[_0x1ecae3]();
      }
      _0x4bb9e1 = _0x2e5619.length = _0x9c77f8.length = _0x503a01.length;
      _0x31eea1 = _0x503a01.slice(0);
      return _0x36e03f = _0x36e03f.slice(0, _0x4bb9e1);
    });
    function _0x22c979(_0x8ea56e) {
      _0x9c77f8[_0x1ecae3] = _0x8ea56e;
      const [_0x3e50e5, _0x1290d2] = j(_0x503a01[_0x1ecae3]);
      _0x2e5619[_0x1ecae3] = _0x1290d2;
      return _0x3c6bac(_0x3e50e5, _0x1ecae3);
    }
  };
}
function C(_0x961444, _0x1fbdf3) {
  return N(() => _0x961444(_0x1fbdf3 || {}));
}
function we() {
  return true;
}
const He = {
  get(_0x56559b, _0x27cc46, _0x1ce8d7) {
    if (_0x27cc46 === U) {
      return _0x1ce8d7;
    } else {
      return _0x56559b.get(_0x27cc46);
    }
  },
  has(_0x5f3c1b, _0x436b19) {
    if (_0x436b19 === U) {
      return true;
    } else {
      return _0x5f3c1b.has(_0x436b19);
    }
  },
  set: we,
  deleteProperty: we,
  getOwnPropertyDescriptor(_0x326a54, _0x710169) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _0x326a54.get(_0x710169);
      },
      set: we,
      deleteProperty: we
    };
  },
  ownKeys(_0x591898) {
    return _0x591898.keys();
  }
};
function Be(_0x4867fb) {
  if (_0x4867fb = typeof _0x4867fb == "function" ? _0x4867fb() : _0x4867fb) {
    return _0x4867fb;
  } else {
    return {};
  }
}
function Ut() {
  for (let _0xa53a0c = 0, _0x5900e3 = this.length; _0xa53a0c < _0x5900e3; ++_0xa53a0c) {
    const _0x268cf7 = this[_0xa53a0c]();
    if (_0x268cf7 !== undefined) {
      return _0x268cf7;
    }
  }
}
function Zt(..._0xda7ef1) {
  let _0x98c77c = false;
  for (let _0x59c13c = 0; _0x59c13c < _0xda7ef1.length; _0x59c13c++) {
    const _0x5c24ff = _0xda7ef1[_0x59c13c];
    _0x98c77c = _0x98c77c || !!_0x5c24ff && U in _0x5c24ff;
    _0xda7ef1[_0x59c13c] = typeof _0x5c24ff == "function" ? (_0x98c77c = true, F(_0x5c24ff)) : _0x5c24ff;
  }
  if (_0x98c77c) {
    return new Proxy({
      get(_0x410916) {
        for (let _0x4cbc15 = _0xda7ef1.length - 1; _0x4cbc15 >= 0; _0x4cbc15--) {
          const _0x420ce2 = Be(_0xda7ef1[_0x4cbc15])[_0x410916];
          if (_0x420ce2 !== undefined) {
            return _0x420ce2;
          }
        }
      },
      has(_0xb0ec4d) {
        for (let _0x1400f6 = _0xda7ef1.length - 1; _0x1400f6 >= 0; _0x1400f6--) {
          if (_0xb0ec4d in Be(_0xda7ef1[_0x1400f6])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const _0x5c676b = [];
        for (let _0x109ea6 = 0; _0x109ea6 < _0xda7ef1.length; _0x109ea6++) {
          _0x5c676b.push(...Object.keys(Be(_0xda7ef1[_0x109ea6])));
        }
        return [...new Set(_0x5c676b)];
      }
    }, He);
  }
  const _0x65a224 = {};
  const _0x46e2c2 = {};
  let _0x25a2f0 = false;
  for (let _0x4ce572 = _0xda7ef1.length - 1; _0x4ce572 >= 0; _0x4ce572--) {
    const _0x1ec70e = _0xda7ef1[_0x4ce572];
    if (!_0x1ec70e) {
      continue;
    }
    const _0x3e93a5 = Object.getOwnPropertyNames(_0x1ec70e);
    _0x25a2f0 = _0x25a2f0 || _0x4ce572 !== 0 && !!_0x3e93a5.length;
    for (let _0x17e8a7 = 0, _0x4fa574 = _0x3e93a5.length; _0x17e8a7 < _0x4fa574; _0x17e8a7++) {
      const _0x22902d = _0x3e93a5[_0x17e8a7];
      if (_0x22902d !== "__proto__" && _0x22902d !== "constructor") {
        if (_0x22902d in _0x65a224) {
          const _0x183c65 = _0x46e2c2[_0x22902d];
          const _0x48086f = Object.getOwnPropertyDescriptor(_0x1ec70e, _0x22902d);
          if (_0x183c65) {
            if (_0x48086f.get) {
              _0x183c65.push(_0x48086f.get.bind(_0x1ec70e));
            } else if (_0x48086f.value !== undefined) {
              _0x183c65.push(() => _0x48086f.value);
            }
          } else if (_0x65a224[_0x22902d] === undefined) {
            _0x65a224[_0x22902d] = _0x48086f.value;
          }
        } else {
          const _0x4a5d92 = Object.getOwnPropertyDescriptor(_0x1ec70e, _0x22902d);
          if (_0x4a5d92.get) {
            Object.defineProperty(_0x65a224, _0x22902d, {
              enumerable: true,
              configurable: true,
              get: Ut.bind(_0x46e2c2[_0x22902d] = [_0x4a5d92.get.bind(_0x1ec70e)])
            });
          } else {
            _0x65a224[_0x22902d] = _0x4a5d92.value;
          }
        }
      }
    }
  }
  return _0x65a224;
}
function Ht(_0x59ee1d, ..._0x23ee01) {
  if (U in _0x59ee1d) {
    const _0x30b600 = new Set(_0x23ee01.length > 1 ? _0x23ee01.flat() : _0x23ee01[0]);
    const _0x18f0b5 = _0x23ee01.map(_0x3ee266 => new Proxy({
      get(_0x576f89) {
        if (_0x3ee266.includes(_0x576f89)) {
          return _0x59ee1d[_0x576f89];
        } else {
          return undefined;
        }
      },
      has(_0x2648fd) {
        return _0x3ee266.includes(_0x2648fd) && _0x2648fd in _0x59ee1d;
      },
      keys() {
        return _0x3ee266.filter(_0x238976 => _0x238976 in _0x59ee1d);
      }
    }, He));
    _0x18f0b5.push(new Proxy({
      get(_0x424054) {
        if (_0x30b600.has(_0x424054)) {
          return undefined;
        } else {
          return _0x59ee1d[_0x424054];
        }
      },
      has(_0x564438) {
        if (_0x30b600.has(_0x564438)) {
          return false;
        } else {
          return _0x564438 in _0x59ee1d;
        }
      },
      keys() {
        return Object.keys(_0x59ee1d).filter(_0x41f44d => !_0x30b600.has(_0x41f44d));
      }
    }, He));
    return _0x18f0b5;
  }
  const _0x74661b = {};
  const _0x5597a5 = _0x23ee01.map(() => ({}));
  for (const _0x48553f of Object.getOwnPropertyNames(_0x59ee1d)) {
    const _0x38ffec = Object.getOwnPropertyDescriptor(_0x59ee1d, _0x48553f);
    const _0x538be1 = !_0x38ffec.get && !_0x38ffec.set && _0x38ffec.enumerable && _0x38ffec.writable && _0x38ffec.configurable;
    let _0x347d7c = false;
    let _0x3ad18f = 0;
    for (const _0x2eb890 of _0x23ee01) {
      if (_0x2eb890.includes(_0x48553f)) {
        _0x347d7c = true;
        if (_0x538be1) {
          _0x5597a5[_0x3ad18f][_0x48553f] = _0x38ffec.value;
        } else {
          Object.defineProperty(_0x5597a5[_0x3ad18f], _0x48553f, _0x38ffec);
        }
      }
      ++_0x3ad18f;
    }
    if (!_0x347d7c) {
      if (_0x538be1) {
        _0x74661b[_0x48553f] = _0x38ffec.value;
      } else {
        Object.defineProperty(_0x74661b, _0x48553f, _0x38ffec);
      }
    }
  }
  return [..._0x5597a5, _0x74661b];
}
const At = _0x31763e => "Stale read from <" + _0x31763e + ">.";
function re(_0x3c8386) {
  const _0x37873a = "fallback" in _0x3c8386 && {
    fallback: () => _0x3c8386.fallback
  };
  return F(zt(() => _0x3c8386.each, _0x3c8386.children, _0x37873a || undefined));
}
function ot(_0x2e40c9) {
  const _0x39d8ff = "fallback" in _0x2e40c9 && {
    fallback: () => _0x2e40c9.fallback
  };
  return F(qt(() => _0x2e40c9.each, _0x2e40c9.children, _0x39d8ff || undefined));
}
function le(_0x5a4d3a) {
  const _0x3e838b = _0x5a4d3a.keyed;
  const _0x17a96a = F(() => _0x5a4d3a.when, undefined, {
    equals: (_0x96f4e8, _0x49845e) => _0x3e838b ? _0x96f4e8 === _0x49845e : !_0x96f4e8 == !_0x49845e
  });
  return F(() => {
    const _0x5750da = _0x17a96a();
    if (_0x5750da) {
      const _0x3ef795 = _0x5a4d3a.children;
      if (typeof _0x3ef795 == "function" && _0x3ef795.length > 0) {
        return N(() => _0x3ef795(_0x3e838b ? _0x5750da : () => {
          if (!N(_0x17a96a)) {
            throw At("Show");
          }
          return _0x5a4d3a.when;
        }));
      } else {
        return _0x3ef795;
      }
    }
    return _0x5a4d3a.fallback;
  }, undefined, undefined);
}
function Gt(_0x3b5d42) {
  let _0x3c4d19 = false;
  const _0x3650b4 = (_0x862904, _0x3a4c74) => _0x862904[0] === _0x3a4c74[0] && (_0x3c4d19 ? _0x862904[1] === _0x3a4c74[1] : !_0x862904[1] == !_0x3a4c74[1]) && _0x862904[2] === _0x3a4c74[2];
  const _0x25430c = Je(() => _0x3b5d42.children);
  const _0x25a41c = F(() => {
    let _0x302fae = _0x25430c();
    if (!Array.isArray(_0x302fae)) {
      _0x302fae = [_0x302fae];
    }
    for (let _0x3dfc24 = 0; _0x3dfc24 < _0x302fae.length; _0x3dfc24++) {
      const _0x545107 = _0x302fae[_0x3dfc24].when;
      if (_0x545107) {
        _0x3c4d19 = !!_0x302fae[_0x3dfc24].keyed;
        return [_0x3dfc24, _0x545107, _0x302fae[_0x3dfc24]];
      }
    }
    return [-1];
  }, undefined, {
    equals: _0x3650b4
  });
  return F(() => {
    const [_0x3d5ac1, _0x461d8b, _0x3cec4e] = _0x25a41c();
    if (_0x3d5ac1 < 0) {
      return _0x3b5d42.fallback;
    }
    const _0x5b9ccc = _0x3cec4e.children;
    if (typeof _0x5b9ccc == "function" && _0x5b9ccc.length > 0) {
      return N(() => _0x5b9ccc(_0x3c4d19 ? _0x461d8b : () => {
        if (N(_0x25a41c)[0] !== _0x3d5ac1) {
          throw At("Match");
        }
        return _0x3cec4e.when;
      }));
    } else {
      return _0x5b9ccc;
    }
  }, undefined, undefined);
}
function rt(_0x44b434) {
  return _0x44b434;
}
const Kt = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Wt = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...Kt]);
const Yt = new Set(["innerHTML", "textContent", "innerText", "children"]);
const Xt = Object.assign(Object.create(null), {
  className: "class",
  htmlFor: "for"
});
const Qt = Object.assign(Object.create(null), {
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
function Jt(_0x18fa77, _0x209019) {
  const _0x2fb757 = Qt[_0x18fa77];
  if (typeof _0x2fb757 == "object") {
    if (_0x2fb757[_0x209019]) {
      return _0x2fb757.$;
    } else {
      return undefined;
    }
  } else {
    return _0x2fb757;
  }
}
const en = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const tn = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]);
const nn = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function sn(_0x56798e, _0x8fc66e, _0x5e6e5f) {
  let _0xba8f38 = _0x5e6e5f.length;
  let _0x3a5f10 = _0x8fc66e.length;
  let _0x3c9bea = _0xba8f38;
  let _0x5d96eb = 0;
  let _0x480e1b = 0;
  let _0x148ce8 = _0x8fc66e[_0x3a5f10 - 1].nextSibling;
  let _0x5e0d32 = null;
  while (_0x5d96eb < _0x3a5f10 || _0x480e1b < _0x3c9bea) {
    if (_0x8fc66e[_0x5d96eb] === _0x5e6e5f[_0x480e1b]) {
      _0x5d96eb++;
      _0x480e1b++;
      continue;
    }
    while (_0x8fc66e[_0x3a5f10 - 1] === _0x5e6e5f[_0x3c9bea - 1]) {
      _0x3a5f10--;
      _0x3c9bea--;
    }
    if (_0x3a5f10 === _0x5d96eb) {
      const _0x4f9bbc = _0x3c9bea < _0xba8f38 ? _0x480e1b ? _0x5e6e5f[_0x480e1b - 1].nextSibling : _0x5e6e5f[_0x3c9bea - _0x480e1b] : _0x148ce8;
      while (_0x480e1b < _0x3c9bea) {
        _0x56798e.insertBefore(_0x5e6e5f[_0x480e1b++], _0x4f9bbc);
      }
    } else if (_0x3c9bea === _0x480e1b) {
      while (_0x5d96eb < _0x3a5f10) {
        if (!_0x5e0d32 || !_0x5e0d32.has(_0x8fc66e[_0x5d96eb])) {
          _0x8fc66e[_0x5d96eb].remove();
        }
        _0x5d96eb++;
      }
    } else if (_0x8fc66e[_0x5d96eb] === _0x5e6e5f[_0x3c9bea - 1] && _0x5e6e5f[_0x480e1b] === _0x8fc66e[_0x3a5f10 - 1]) {
      const _0x4969fc = _0x8fc66e[--_0x3a5f10].nextSibling;
      _0x56798e.insertBefore(_0x5e6e5f[_0x480e1b++], _0x8fc66e[_0x5d96eb++].nextSibling);
      _0x56798e.insertBefore(_0x5e6e5f[--_0x3c9bea], _0x4969fc);
      _0x8fc66e[_0x3a5f10] = _0x5e6e5f[_0x3c9bea];
    } else {
      if (!_0x5e0d32) {
        _0x5e0d32 = new Map();
        let _0x4d7582 = _0x480e1b;
        while (_0x4d7582 < _0x3c9bea) {
          _0x5e0d32.set(_0x5e6e5f[_0x4d7582], _0x4d7582++);
        }
      }
      const _0x6759c = _0x5e0d32.get(_0x8fc66e[_0x5d96eb]);
      if (_0x6759c != null) {
        if (_0x480e1b < _0x6759c && _0x6759c < _0x3c9bea) {
          let _0x12cc54 = _0x5d96eb;
          let _0x4ceac1 = 1;
          let _0x45123c;
          while (++_0x12cc54 < _0x3a5f10 && _0x12cc54 < _0x3c9bea && (_0x45123c = _0x5e0d32.get(_0x8fc66e[_0x12cc54])) != null && _0x45123c === _0x6759c + _0x4ceac1) {
            _0x4ceac1++;
          }
          if (_0x4ceac1 > _0x6759c - _0x480e1b) {
            const _0x59c667 = _0x8fc66e[_0x5d96eb];
            while (_0x480e1b < _0x6759c) {
              _0x56798e.insertBefore(_0x5e6e5f[_0x480e1b++], _0x59c667);
            }
          } else {
            _0x56798e.replaceChild(_0x5e6e5f[_0x480e1b++], _0x8fc66e[_0x5d96eb++]);
          }
        } else {
          _0x5d96eb++;
        }
      } else {
        _0x8fc66e[_0x5d96eb++].remove();
      }
    }
  }
}
const lt = "_$DX_DELEGATE";
function on(_0x56efd6, _0x11e3d2, _0x292784, _0x58d3c2 = {}) {
  let _0x394d4d;
  oe(_0x2ac678 => {
    _0x394d4d = _0x2ac678;
    if (_0x11e3d2 === document) {
      _0x56efd6();
    } else {
      p(_0x11e3d2, _0x56efd6(), _0x11e3d2.firstChild ? null : undefined, _0x292784);
    }
  }, _0x58d3c2.owner);
  return () => {
    _0x394d4d();
    _0x11e3d2.textContent = "";
  };
}
function I(_0x25363b, _0x556b07, _0x183e4c) {
  let _0x413360;
  const _0x322b62 = () => {
    const _0x2801f2 = document.createElement("template");
    _0x2801f2.innerHTML = _0x25363b;
    if (_0x183e4c) {
      return _0x2801f2.content.firstChild.firstChild;
    } else {
      return _0x2801f2.content.firstChild;
    }
  };
  const _0xf7969b = _0x556b07 ? () => N(() => document.importNode(_0x413360 ||= _0x322b62(), true)) : () => (_0x413360 ||= _0x322b62()).cloneNode(true);
  _0xf7969b.cloneNode = _0xf7969b;
  return _0xf7969b;
}
function W(_0x231db5, _0x524511 = window.document) {
  const _0x76e649 = _0x524511[lt] ||= new Set();
  for (let _0x1f948c = 0, _0x486722 = _0x231db5.length; _0x1f948c < _0x486722; _0x1f948c++) {
    const _0x19ed8f = _0x231db5[_0x1f948c];
    if (!_0x76e649.has(_0x19ed8f)) {
      _0x76e649.add(_0x19ed8f);
      _0x524511.addEventListener(_0x19ed8f, fn);
    }
  }
}
function ce(_0x3898b6, _0xc4576d, _0x1fcd45) {
  if (_0x1fcd45 == null) {
    _0x3898b6.removeAttribute(_0xc4576d);
  } else {
    _0x3898b6.setAttribute(_0xc4576d, _0x1fcd45);
  }
}
function rn(_0x5f1a45, _0x3161c6, _0xaa08c2, _0x3a1152) {
  if (_0x3a1152 == null) {
    _0x5f1a45.removeAttributeNS(_0x3161c6, _0xaa08c2);
  } else {
    _0x5f1a45.setAttributeNS(_0x3161c6, _0xaa08c2, _0x3a1152);
  }
}
function g(_0x2f0fe6, _0x3ebed3) {
  if (_0x3ebed3 == null) {
    _0x2f0fe6.removeAttribute("class");
  } else {
    _0x2f0fe6.className = _0x3ebed3;
  }
}
function ln(_0x109aa5, _0x2652c0, _0x5c768c, _0x46dc83) {
  if (_0x46dc83) {
    if (Array.isArray(_0x5c768c)) {
      _0x109aa5["$$" + _0x2652c0] = _0x5c768c[0];
      _0x109aa5["$$" + _0x2652c0 + "Data"] = _0x5c768c[1];
    } else {
      _0x109aa5["$$" + _0x2652c0] = _0x5c768c;
    }
  } else if (Array.isArray(_0x5c768c)) {
    const _0x2cb354 = _0x5c768c[0];
    _0x109aa5.addEventListener(_0x2652c0, _0x5c768c[0] = _0x515366 => _0x2cb354.call(_0x109aa5, _0x5c768c[1], _0x515366));
  } else {
    _0x109aa5.addEventListener(_0x2652c0, _0x5c768c);
  }
}
function ye(_0x24f1c3, _0x2cbcf0, _0x534ab7 = {}) {
  const _0x2f0135 = Object.keys(_0x2cbcf0 || {});
  const _0x38aa19 = Object.keys(_0x534ab7);
  let _0x4a5bf2;
  let _0x2a15fc;
  _0x4a5bf2 = 0;
  _0x2a15fc = _0x38aa19.length;
  for (; _0x4a5bf2 < _0x2a15fc; _0x4a5bf2++) {
    const _0x282e76 = _0x38aa19[_0x4a5bf2];
    if (!!_0x282e76 && _0x282e76 !== "undefined" && !_0x2cbcf0[_0x282e76]) {
      ct(_0x24f1c3, _0x282e76, false);
      delete _0x534ab7[_0x282e76];
    }
  }
  _0x4a5bf2 = 0;
  _0x2a15fc = _0x2f0135.length;
  for (; _0x4a5bf2 < _0x2a15fc; _0x4a5bf2++) {
    const _0xeecfd2 = _0x2f0135[_0x4a5bf2];
    const _0x33b69e = !!_0x2cbcf0[_0xeecfd2];
    if (!!_0xeecfd2 && _0xeecfd2 !== "undefined" && _0x534ab7[_0xeecfd2] !== _0x33b69e && !!_0x33b69e) {
      ct(_0x24f1c3, _0xeecfd2, true);
      _0x534ab7[_0xeecfd2] = _0x33b69e;
    }
  }
  return _0x534ab7;
}
function et(_0x255b9b, _0x356025, _0x9c5b1b) {
  if (!_0x356025) {
    if (_0x9c5b1b) {
      return ce(_0x255b9b, "style");
    } else {
      return _0x356025;
    }
  }
  const _0xbb82b5 = _0x255b9b.style;
  if (typeof _0x356025 == "string") {
    return _0xbb82b5.cssText = _0x356025;
  }
  if (typeof _0x9c5b1b == "string") {
    _0xbb82b5.cssText = _0x9c5b1b = undefined;
  }
  _0x9c5b1b ||= {};
  _0x356025 ||= {};
  let _0x344e27;
  let _0xc75d9e;
  for (_0xc75d9e in _0x9c5b1b) {
    if (_0x356025[_0xc75d9e] == null) {
      _0xbb82b5.removeProperty(_0xc75d9e);
    }
    delete _0x9c5b1b[_0xc75d9e];
  }
  for (_0xc75d9e in _0x356025) {
    _0x344e27 = _0x356025[_0xc75d9e];
    if (_0x344e27 !== _0x9c5b1b[_0xc75d9e]) {
      _0xbb82b5.setProperty(_0xc75d9e, _0x344e27);
      _0x9c5b1b[_0xc75d9e] = _0x344e27;
    }
  }
  return _0x9c5b1b;
}
function cn(_0x2f4f3c, _0x2b1899 = {}, _0x4d26fe, _0x446140) {
  const _0x3e7395 = {};
  if (!_0x446140) {
    L(() => _0x3e7395.children = ae(_0x2f4f3c, _0x2b1899.children, _0x3e7395.children));
  }
  L(() => _0x2b1899.ref && _0x2b1899.ref(_0x2f4f3c));
  L(() => an(_0x2f4f3c, _0x2b1899, _0x4d26fe, true, _0x3e7395, true));
  return _0x3e7395;
}
function tt(_0x83b369, _0x52405e, _0x32858c) {
  return N(() => _0x83b369(_0x52405e, _0x32858c));
}
function p(_0x38f82f, _0x798e0d, _0x45b7cf, _0x2c7a5a) {
  if (_0x45b7cf !== undefined && !_0x2c7a5a) {
    _0x2c7a5a = [];
  }
  if (typeof _0x798e0d != "function") {
    return ae(_0x38f82f, _0x798e0d, _0x2c7a5a, _0x45b7cf);
  }
  L(_0x3f55a1 => ae(_0x38f82f, _0x798e0d(), _0x3f55a1, _0x45b7cf), _0x2c7a5a);
}
function an(_0x23ec07, _0x2d14c1, _0x37717a, _0x36a28a, _0x4c1b0c = {}, _0x28983f = false) {
  _0x2d14c1 ||= {};
  for (const _0x388847 in _0x4c1b0c) {
    if (!(_0x388847 in _0x2d14c1)) {
      if (_0x388847 === "children") {
        continue;
      }
      _0x4c1b0c[_0x388847] = at(_0x23ec07, _0x388847, null, _0x4c1b0c[_0x388847], _0x37717a, _0x28983f);
    }
  }
  for (const _0x3daf08 in _0x2d14c1) {
    if (_0x3daf08 === "children") {
      if (!_0x36a28a) {
        ae(_0x23ec07, _0x2d14c1.children);
      }
      continue;
    }
    const _0x43b30e = _0x2d14c1[_0x3daf08];
    _0x4c1b0c[_0x3daf08] = at(_0x23ec07, _0x3daf08, _0x43b30e, _0x4c1b0c[_0x3daf08], _0x37717a, _0x28983f);
  }
}
function un(_0x18abc7) {
  return _0x18abc7.toLowerCase().replace(/-([a-z])/g, (_0x5f1ba0, _0x8807f8) => _0x8807f8.toUpperCase());
}
function ct(_0x19583a, _0x3ef20f, _0x5cc809) {
  const _0xcb2549 = _0x3ef20f.trim().split(/\s+/);
  for (let _0xa66c00 = 0, _0x5f5246 = _0xcb2549.length; _0xa66c00 < _0x5f5246; _0xa66c00++) {
    _0x19583a.classList.toggle(_0xcb2549[_0xa66c00], _0x5cc809);
  }
}
function at(_0x508c42, _0x1c74f3, _0x388cef, _0xec7138, _0xd71a68, _0x1e5994) {
  let _0x2dbab4;
  let _0x3feae3;
  let _0x4c07bf;
  let _0x27085b;
  let _0x54838d;
  if (_0x1c74f3 === "style") {
    return et(_0x508c42, _0x388cef, _0xec7138);
  }
  if (_0x1c74f3 === "classList") {
    return ye(_0x508c42, _0x388cef, _0xec7138);
  }
  if (_0x388cef === _0xec7138) {
    return _0xec7138;
  }
  if (_0x1c74f3 === "ref") {
    if (!_0x1e5994) {
      _0x388cef(_0x508c42);
    }
  } else if (_0x1c74f3.slice(0, 3) === "on:") {
    const _0xa08a67 = _0x1c74f3.slice(3);
    if (_0xec7138) {
      _0x508c42.removeEventListener(_0xa08a67, _0xec7138);
    }
    if (_0x388cef) {
      _0x508c42.addEventListener(_0xa08a67, _0x388cef);
    }
  } else if (_0x1c74f3.slice(0, 10) === "oncapture:") {
    const _0x2d93a8 = _0x1c74f3.slice(10);
    if (_0xec7138) {
      _0x508c42.removeEventListener(_0x2d93a8, _0xec7138, true);
    }
    if (_0x388cef) {
      _0x508c42.addEventListener(_0x2d93a8, _0x388cef, true);
    }
  } else if (_0x1c74f3.slice(0, 2) === "on") {
    const _0x5e051b = _0x1c74f3.slice(2).toLowerCase();
    const _0x1e0944 = en.has(_0x5e051b);
    if (!_0x1e0944 && _0xec7138) {
      const _0x223c07 = Array.isArray(_0xec7138) ? _0xec7138[0] : _0xec7138;
      _0x508c42.removeEventListener(_0x5e051b, _0x223c07);
    }
    if (_0x1e0944 || _0x388cef) {
      ln(_0x508c42, _0x5e051b, _0x388cef, _0x1e0944);
      if (_0x1e0944) {
        W([_0x5e051b]);
      }
    }
  } else if (_0x1c74f3.slice(0, 5) === "attr:") {
    ce(_0x508c42, _0x1c74f3.slice(5), _0x388cef);
  } else if ((_0x54838d = _0x1c74f3.slice(0, 5) === "prop:") || (_0x4c07bf = Yt.has(_0x1c74f3)) || !_0xd71a68 && ((_0x27085b = Jt(_0x1c74f3, _0x508c42.tagName)) || (_0x3feae3 = Wt.has(_0x1c74f3))) || (_0x2dbab4 = _0x508c42.nodeName.includes("-"))) {
    if (_0x54838d) {
      _0x1c74f3 = _0x1c74f3.slice(5);
      _0x3feae3 = true;
    }
    if (_0x1c74f3 === "class" || _0x1c74f3 === "className") {
      g(_0x508c42, _0x388cef);
    } else if (_0x2dbab4 && !_0x3feae3 && !_0x4c07bf) {
      _0x508c42[un(_0x1c74f3)] = _0x388cef;
    } else {
      _0x508c42[_0x27085b || _0x1c74f3] = _0x388cef;
    }
  } else {
    const _0x23260f = _0xd71a68 && _0x1c74f3.indexOf(":") > -1 && nn[_0x1c74f3.split(":")[0]];
    if (_0x23260f) {
      rn(_0x508c42, _0x23260f, _0x1c74f3, _0x388cef);
    } else {
      ce(_0x508c42, Xt[_0x1c74f3] || _0x1c74f3, _0x388cef);
    }
  }
  return _0x388cef;
}
function fn(_0x13233f) {
  const _0x2970bf = "$$" + _0x13233f.type;
  let _0x5993f4 = _0x13233f.composedPath && _0x13233f.composedPath()[0] || _0x13233f.target;
  if (_0x13233f.target !== _0x5993f4) {
    Object.defineProperty(_0x13233f, "target", {
      configurable: true,
      value: _0x5993f4
    });
  }
  Object.defineProperty(_0x13233f, "currentTarget", {
    configurable: true,
    get() {
      return _0x5993f4 || document;
    }
  });
  while (_0x5993f4) {
    const _0x5c1dda = _0x5993f4[_0x2970bf];
    if (_0x5c1dda && !_0x5993f4.disabled) {
      const _0x19e568 = _0x5993f4[_0x2970bf + "Data"];
      if (_0x19e568 !== undefined) {
        _0x5c1dda.call(_0x5993f4, _0x19e568, _0x13233f);
      } else {
        _0x5c1dda.call(_0x5993f4, _0x13233f);
      }
      if (_0x13233f.cancelBubble) {
        return;
      }
    }
    _0x5993f4 = _0x5993f4._$host || _0x5993f4.parentNode || _0x5993f4.host;
  }
}
function ae(_0x48a9a5, _0x3731a4, _0xa22158, _0xc5ddc3, _0x457ef8) {
  while (typeof _0xa22158 == "function") {
    _0xa22158 = _0xa22158();
  }
  if (_0x3731a4 === _0xa22158) {
    return _0xa22158;
  }
  const _0x41d553 = typeof _0x3731a4;
  const _0x1da382 = _0xc5ddc3 !== undefined;
  _0x48a9a5 = _0x1da382 && _0xa22158[0] && _0xa22158[0].parentNode || _0x48a9a5;
  if (_0x41d553 === "string" || _0x41d553 === "number") {
    if (_0x41d553 === "number") {
      _0x3731a4 = _0x3731a4.toString();
    }
    if (_0x1da382) {
      let _0x2be55e = _0xa22158[0];
      if (_0x2be55e && _0x2be55e.nodeType === 3) {
        _0x2be55e.data = _0x3731a4;
      } else {
        _0x2be55e = document.createTextNode(_0x3731a4);
      }
      _0xa22158 = ie(_0x48a9a5, _0xa22158, _0xc5ddc3, _0x2be55e);
    } else if (_0xa22158 !== "" && typeof _0xa22158 == "string") {
      _0xa22158 = _0x48a9a5.firstChild.data = _0x3731a4;
    } else {
      _0xa22158 = _0x48a9a5.textContent = _0x3731a4;
    }
  } else if (_0x3731a4 == null || _0x41d553 === "boolean") {
    _0xa22158 = ie(_0x48a9a5, _0xa22158, _0xc5ddc3);
  } else {
    if (_0x41d553 === "function") {
      L(() => {
        let _0x15d205 = _0x3731a4();
        while (typeof _0x15d205 == "function") {
          _0x15d205 = _0x15d205();
        }
        _0xa22158 = ae(_0x48a9a5, _0x15d205, _0xa22158, _0xc5ddc3);
      });
      return () => _0xa22158;
    }
    if (Array.isArray(_0x3731a4)) {
      const _0x3f38ca = [];
      const _0x3cdb80 = _0xa22158 && Array.isArray(_0xa22158);
      if (Ge(_0x3f38ca, _0x3731a4, _0xa22158, _0x457ef8)) {
        L(() => _0xa22158 = ae(_0x48a9a5, _0x3f38ca, _0xa22158, _0xc5ddc3, true));
        return () => _0xa22158;
      }
      if (_0x3f38ca.length === 0) {
        _0xa22158 = ie(_0x48a9a5, _0xa22158, _0xc5ddc3);
        if (_0x1da382) {
          return _0xa22158;
        }
      } else if (_0x3cdb80) {
        if (_0xa22158.length === 0) {
          ut(_0x48a9a5, _0x3f38ca, _0xc5ddc3);
        } else {
          sn(_0x48a9a5, _0xa22158, _0x3f38ca);
        }
      } else {
        if (_0xa22158) {
          ie(_0x48a9a5);
        }
        ut(_0x48a9a5, _0x3f38ca);
      }
      _0xa22158 = _0x3f38ca;
    } else if (_0x3731a4.nodeType) {
      if (Array.isArray(_0xa22158)) {
        if (_0x1da382) {
          return _0xa22158 = ie(_0x48a9a5, _0xa22158, _0xc5ddc3, _0x3731a4);
        }
        ie(_0x48a9a5, _0xa22158, null, _0x3731a4);
      } else if (_0xa22158 == null || _0xa22158 === "" || !_0x48a9a5.firstChild) {
        _0x48a9a5.appendChild(_0x3731a4);
      } else {
        _0x48a9a5.replaceChild(_0x3731a4, _0x48a9a5.firstChild);
      }
      _0xa22158 = _0x3731a4;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x3731a4);
    }
  }
  return _0xa22158;
}
function Ge(_0x54b796, _0x326987, _0x45598c, _0x321768) {
  let _0x768776 = false;
  for (let _0xdfeda1 = 0, _0x3da806 = _0x326987.length; _0xdfeda1 < _0x3da806; _0xdfeda1++) {
    let _0x4e17ba = _0x326987[_0xdfeda1];
    let _0x554c06 = _0x45598c && _0x45598c[_0xdfeda1];
    let _0xc07ff4;
    if (_0x4e17ba != null && _0x4e17ba !== true && _0x4e17ba !== false) {
      if ((_0xc07ff4 = typeof _0x4e17ba) == "object" && _0x4e17ba.nodeType) {
        _0x54b796.push(_0x4e17ba);
      } else if (Array.isArray(_0x4e17ba)) {
        _0x768776 = Ge(_0x54b796, _0x4e17ba, _0x554c06) || _0x768776;
      } else if (_0xc07ff4 === "function") {
        if (_0x321768) {
          while (typeof _0x4e17ba == "function") {
            _0x4e17ba = _0x4e17ba();
          }
          _0x768776 = Ge(_0x54b796, Array.isArray(_0x4e17ba) ? _0x4e17ba : [_0x4e17ba], Array.isArray(_0x554c06) ? _0x554c06 : [_0x554c06]) || _0x768776;
        } else {
          _0x54b796.push(_0x4e17ba);
          _0x768776 = true;
        }
      } else {
        const _0x2af928 = String(_0x4e17ba);
        if (_0x554c06 && _0x554c06.nodeType === 3 && _0x554c06.data === _0x2af928) {
          _0x54b796.push(_0x554c06);
        } else {
          _0x54b796.push(document.createTextNode(_0x2af928));
        }
      }
    }
  }
  return _0x768776;
}
function ut(_0x2ee033, _0x2c52ea, _0x48cfb0 = null) {
  for (let _0x4eca44 = 0, _0x44468f = _0x2c52ea.length; _0x4eca44 < _0x44468f; _0x4eca44++) {
    _0x2ee033.insertBefore(_0x2c52ea[_0x4eca44], _0x48cfb0);
  }
}
function ie(_0x51b0fe, _0x1786bc, _0x562f6d, _0x359e08) {
  if (_0x562f6d === undefined) {
    return _0x51b0fe.textContent = "";
  }
  const _0x551779 = _0x359e08 || document.createTextNode("");
  if (_0x1786bc.length) {
    let _0x5efd3e = false;
    for (let _0x34e837 = _0x1786bc.length - 1; _0x34e837 >= 0; _0x34e837--) {
      const _0xc3f998 = _0x1786bc[_0x34e837];
      if (_0x551779 !== _0xc3f998) {
        const _0x235338 = _0xc3f998.parentNode === _0x51b0fe;
        if (!_0x5efd3e && !_0x34e837) {
          if (_0x235338) {
            _0x51b0fe.replaceChild(_0x551779, _0xc3f998);
          } else {
            _0x51b0fe.insertBefore(_0x551779, _0x562f6d);
          }
        } else if (_0x235338) {
          _0xc3f998.remove();
        }
      } else {
        _0x5efd3e = true;
      }
    }
  } else {
    _0x51b0fe.insertBefore(_0x551779, _0x562f6d);
  }
  return [_0x551779];
}
const dn = "http://www.w3.org/2000/svg";
function vn(_0x54c014, _0x2c3b21 = false) {
  if (_0x2c3b21) {
    return document.createElementNS(dn, _0x54c014);
  } else {
    return document.createElement(_0x54c014);
  }
}
function hn(_0x42a8d6) {
  const [_0x239335, _0x3485f8] = Ht(_0x42a8d6, ["component"]);
  const _0x5d2317 = F(() => _0x239335.component);
  return F(() => {
    const _0x23f15a = _0x5d2317();
    switch (typeof _0x23f15a) {
      case "function":
        Object.assign(_0x23f15a, {
          [Mt]: true
        });
        return N(() => _0x23f15a(_0x3485f8));
      case "string":
        const _0x2e0986 = tn.has(_0x23f15a);
        const _0x5df26c = vn(_0x23f15a, _0x2e0986);
        cn(_0x5df26c, _0x3485f8, _0x2e0986);
        return _0x5df26c;
    }
  });
}
const mn = "_catalog_gropt_1";
const _n = {
  catalog: mn
};
const gn = "_header_1sqe9_1";
const $n = "_title_1sqe9_11";
const yn = "_description_1sqe9_20";
const wn = "_divider_1sqe9_28";
const bn = "_line_1sqe9_37";
const fe = {
  header: gn,
  title: $n,
  description: yn,
  divider: wn,
  line: bn
};
const Cn = I("<div><div>AUTOMOBILE MARKET</div><div>HERE YOU CAN BUY YOUR OWN CAR FOR NICE PRICE</div><div><div>");
function xn() {
  return (() => {
    const _0x5ce227 = Cn();
    const _0x508a2a = _0x5ce227.firstChild;
    const _0x26a9b5 = _0x508a2a.nextSibling;
    const _0x5c204a = _0x26a9b5.nextSibling;
    const _0x338ea3 = _0x5c204a.firstChild;
    L(_0x2bda44 => {
      const _0x468ad0 = fe.header;
      const _0x4c9487 = fe.title;
      const _0x108ae2 = fe.description;
      const _0x19fcac = fe.divider;
      const _0x245ec0 = fe.line;
      if (_0x468ad0 !== _0x2bda44._v$) {
        g(_0x5ce227, _0x2bda44._v$ = _0x468ad0);
      }
      if (_0x4c9487 !== _0x2bda44._v$2) {
        g(_0x508a2a, _0x2bda44._v$2 = _0x4c9487);
      }
      if (_0x108ae2 !== _0x2bda44._v$3) {
        g(_0x26a9b5, _0x2bda44._v$3 = _0x108ae2);
      }
      if (_0x19fcac !== _0x2bda44._v$4) {
        g(_0x5c204a, _0x2bda44._v$4 = _0x19fcac);
      }
      if (_0x245ec0 !== _0x2bda44._v$5) {
        g(_0x338ea3, _0x2bda44._v$5 = _0x245ec0);
      }
      return _0x2bda44;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return _0x5ce227;
  })();
}
const Sn = "_vehicle_19j3g_1";
const pn = "_title_19j3g_20";
const An = "_price_19j3g_28";
const Pn = "_classInfo_19j3g_43";
const En = "_description_19j3g_57";
const Ln = "_image_19j3g_65";
const kn = "_active_19j3g_80";
const Z = {
  vehicle: Sn,
  title: pn,
  price: An,
  classInfo: Pn,
  description: En,
  image: Ln,
  active: kn
};
const Ke = Symbol("store-raw");
const _e = Symbol("store-node");
function Pt(_0x272962) {
  let _0x2ea208 = _0x272962[U];
  if (!_0x2ea208 && (Object.defineProperty(_0x272962, U, {
    value: _0x2ea208 = new Proxy(_0x272962, Fn)
  }), !Array.isArray(_0x272962))) {
    const _0xcb0e01 = Object.keys(_0x272962);
    const _0x2ffc8f = Object.getOwnPropertyDescriptors(_0x272962);
    for (let _0x28c55a = 0, _0x395229 = _0xcb0e01.length; _0x28c55a < _0x395229; _0x28c55a++) {
      const _0x1580c6 = _0xcb0e01[_0x28c55a];
      if (_0x2ffc8f[_0x1580c6].get) {
        Object.defineProperty(_0x272962, _0x1580c6, {
          enumerable: _0x2ffc8f[_0x1580c6].enumerable,
          get: _0x2ffc8f[_0x1580c6].get.bind(_0x2ea208)
        });
      }
    }
  }
  return _0x2ea208;
}
function Te(_0x55fa06) {
  let _0x239d29;
  return _0x55fa06 != null && typeof _0x55fa06 == "object" && (_0x55fa06[U] || !(_0x239d29 = Object.getPrototypeOf(_0x55fa06)) || _0x239d29 === Object.prototype || Array.isArray(_0x55fa06));
}
function ge(_0x58447a, _0x1c0d15 = new Set()) {
  let _0x77c7e4;
  let _0x143677;
  let _0x47e6e7;
  let _0x341a02;
  if (_0x77c7e4 = _0x58447a != null && _0x58447a[Ke]) {
    return _0x77c7e4;
  }
  if (!Te(_0x58447a) || _0x1c0d15.has(_0x58447a)) {
    return _0x58447a;
  }
  if (Array.isArray(_0x58447a)) {
    if (Object.isFrozen(_0x58447a)) {
      _0x58447a = _0x58447a.slice(0);
    } else {
      _0x1c0d15.add(_0x58447a);
    }
    for (let _0x38d5dd = 0, _0x4ab103 = _0x58447a.length; _0x38d5dd < _0x4ab103; _0x38d5dd++) {
      _0x47e6e7 = _0x58447a[_0x38d5dd];
      if ((_0x143677 = ge(_0x47e6e7, _0x1c0d15)) !== _0x47e6e7) {
        _0x58447a[_0x38d5dd] = _0x143677;
      }
    }
  } else {
    if (Object.isFrozen(_0x58447a)) {
      _0x58447a = Object.assign({}, _0x58447a);
    } else {
      _0x1c0d15.add(_0x58447a);
    }
    const _0x4e7270 = Object.keys(_0x58447a);
    const _0x5c6f29 = Object.getOwnPropertyDescriptors(_0x58447a);
    for (let _0x41ec5c = 0, _0xee6ff1 = _0x4e7270.length; _0x41ec5c < _0xee6ff1; _0x41ec5c++) {
      _0x341a02 = _0x4e7270[_0x41ec5c];
      if (!_0x5c6f29[_0x341a02].get) {
        _0x47e6e7 = _0x58447a[_0x341a02];
        if ((_0x143677 = ge(_0x47e6e7, _0x1c0d15)) !== _0x47e6e7) {
          _0x58447a[_0x341a02] = _0x143677;
        }
      }
    }
  }
  return _0x58447a;
}
function nt(_0x3a070d) {
  let _0x4898e5 = _0x3a070d[_e];
  if (!_0x4898e5) {
    Object.defineProperty(_0x3a070d, _e, {
      value: _0x4898e5 = Object.create(null)
    });
  }
  return _0x4898e5;
}
function We(_0x255725, _0x2be7cc, _0x2340d2) {
  return _0x255725[_0x2be7cc] ||= Lt(_0x2340d2);
}
function Tn(_0x4c816b, _0x4112fd) {
  const _0x5c2823 = Reflect.getOwnPropertyDescriptor(_0x4c816b, _0x4112fd);
  if (!!_0x5c2823 && !_0x5c2823.get && !!_0x5c2823.configurable && _0x4112fd !== U && _0x4112fd !== _e) {
    delete _0x5c2823.value;
    delete _0x5c2823.writable;
    _0x5c2823.get = () => _0x4c816b[U][_0x4112fd];
  }
  return _0x5c2823;
}
function Et(_0x481f16) {
  if (gt()) {
    const _0x2b96e1 = nt(_0x481f16);
    (_0x2b96e1._ ||= Lt())();
  }
}
function On(_0x5d4563) {
  Et(_0x5d4563);
  return Reflect.ownKeys(_0x5d4563);
}
function Lt(_0x56fdb3) {
  const [_0x19a83d, _0x27b001] = j(_0x56fdb3, {
    equals: false,
    internal: true
  });
  _0x19a83d.$ = _0x27b001;
  return _0x19a83d;
}
const Fn = {
  get(_0x44e43e, _0x1fbf9b, _0x25190f) {
    if (_0x1fbf9b === Ke) {
      return _0x44e43e;
    }
    if (_0x1fbf9b === U) {
      return _0x25190f;
    }
    if (_0x1fbf9b === Se) {
      Et(_0x44e43e);
      return _0x25190f;
    }
    const _0x5edc03 = nt(_0x44e43e);
    const _0x292c2e = _0x5edc03[_0x1fbf9b];
    let _0x5bcb26 = _0x292c2e ? _0x292c2e() : _0x44e43e[_0x1fbf9b];
    if (_0x1fbf9b === _e || _0x1fbf9b === "__proto__") {
      return _0x5bcb26;
    }
    if (!_0x292c2e) {
      const _0x67d77f = Object.getOwnPropertyDescriptor(_0x44e43e, _0x1fbf9b);
      if (gt() && (typeof _0x5bcb26 != "function" || _0x44e43e.hasOwnProperty(_0x1fbf9b)) && (!_0x67d77f || !_0x67d77f.get)) {
        _0x5bcb26 = We(_0x5edc03, _0x1fbf9b, _0x5bcb26)();
      }
    }
    if (Te(_0x5bcb26)) {
      return Pt(_0x5bcb26);
    } else {
      return _0x5bcb26;
    }
  },
  has(_0x3d84c9, _0x10cd53) {
    if (_0x10cd53 === Ke || _0x10cd53 === U || _0x10cd53 === Se || _0x10cd53 === _e || _0x10cd53 === "__proto__") {
      return true;
    } else {
      this.get(_0x3d84c9, _0x10cd53, _0x3d84c9);
      return _0x10cd53 in _0x3d84c9;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: On,
  getOwnPropertyDescriptor: Tn
};
function Oe(_0x366176, _0x187816, _0x2b79cf, _0x3e92b5 = false) {
  if (!_0x3e92b5 && _0x366176[_0x187816] === _0x2b79cf) {
    return;
  }
  const _0x3416d4 = _0x366176[_0x187816];
  const _0x12d8d0 = _0x366176.length;
  if (_0x2b79cf === undefined) {
    delete _0x366176[_0x187816];
  } else {
    _0x366176[_0x187816] = _0x2b79cf;
  }
  let _0x2631d0 = nt(_0x366176);
  let _0xf5b8e;
  if (_0xf5b8e = We(_0x2631d0, _0x187816, _0x3416d4)) {
    _0xf5b8e.$(() => _0x2b79cf);
  }
  if (Array.isArray(_0x366176) && _0x366176.length !== _0x12d8d0) {
    for (let _0x1f3bf5 = _0x366176.length; _0x1f3bf5 < _0x12d8d0; _0x1f3bf5++) {
      if (_0xf5b8e = _0x2631d0[_0x1f3bf5]) {
        _0xf5b8e.$();
      }
    }
    if (_0xf5b8e = We(_0x2631d0, "length", _0x12d8d0)) {
      _0xf5b8e.$(_0x366176.length);
    }
  }
  if (_0xf5b8e = _0x2631d0._) {
    _0xf5b8e.$();
  }
}
function kt(_0x558140, _0xff91c2) {
  const _0x24b258 = Object.keys(_0xff91c2);
  for (let _0x26a487 = 0; _0x26a487 < _0x24b258.length; _0x26a487 += 1) {
    const _0x3122f9 = _0x24b258[_0x26a487];
    Oe(_0x558140, _0x3122f9, _0xff91c2[_0x3122f9]);
  }
}
function Mn(_0x4186a4, _0x1baf0b) {
  if (typeof _0x1baf0b == "function") {
    _0x1baf0b = _0x1baf0b(_0x4186a4);
  }
  _0x1baf0b = ge(_0x1baf0b);
  if (Array.isArray(_0x1baf0b)) {
    if (_0x4186a4 === _0x1baf0b) {
      return;
    }
    let _0x56ac84 = 0;
    let _0x252f4d = _0x1baf0b.length;
    for (; _0x56ac84 < _0x252f4d; _0x56ac84++) {
      const _0xd7340b = _0x1baf0b[_0x56ac84];
      if (_0x4186a4[_0x56ac84] !== _0xd7340b) {
        Oe(_0x4186a4, _0x56ac84, _0xd7340b);
      }
    }
    Oe(_0x4186a4, "length", _0x252f4d);
  } else {
    kt(_0x4186a4, _0x1baf0b);
  }
}
function me(_0x56543d, _0x23415c, _0x3bd3d0 = []) {
  let _0x59b6bc;
  let _0x3f7da7 = _0x56543d;
  if (_0x23415c.length > 1) {
    _0x59b6bc = _0x23415c.shift();
    const _0x3ab80f = typeof _0x59b6bc;
    const _0x99823d = Array.isArray(_0x56543d);
    if (Array.isArray(_0x59b6bc)) {
      for (let _0x317ce6 = 0; _0x317ce6 < _0x59b6bc.length; _0x317ce6++) {
        me(_0x56543d, [_0x59b6bc[_0x317ce6]].concat(_0x23415c), _0x3bd3d0);
      }
      return;
    } else if (_0x99823d && _0x3ab80f === "function") {
      for (let _0x4f0a7b = 0; _0x4f0a7b < _0x56543d.length; _0x4f0a7b++) {
        if (_0x59b6bc(_0x56543d[_0x4f0a7b], _0x4f0a7b)) {
          me(_0x56543d, [_0x4f0a7b].concat(_0x23415c), _0x3bd3d0);
        }
      }
      return;
    } else if (_0x99823d && _0x3ab80f === "object") {
      const {
        from: _0x5175a8 = 0,
        to: _0x2483b8 = _0x56543d.length - 1,
        by: _0x20c8f8 = 1
      } = _0x59b6bc;
      for (let _0x2560ad = _0x5175a8; _0x2560ad <= _0x2483b8; _0x2560ad += _0x20c8f8) {
        me(_0x56543d, [_0x2560ad].concat(_0x23415c), _0x3bd3d0);
      }
      return;
    } else if (_0x23415c.length > 1) {
      me(_0x56543d[_0x59b6bc], _0x23415c, [_0x59b6bc].concat(_0x3bd3d0));
      return;
    }
    _0x3f7da7 = _0x56543d[_0x59b6bc];
    _0x3bd3d0 = [_0x59b6bc].concat(_0x3bd3d0);
  }
  let _0x1313f9 = _0x23415c[0];
  if ((typeof _0x1313f9 != "function" || !(_0x1313f9 = _0x1313f9(_0x3f7da7, _0x3bd3d0), _0x1313f9 === _0x3f7da7)) && (_0x59b6bc !== undefined || _0x1313f9 != null)) {
    _0x1313f9 = ge(_0x1313f9);
    if (_0x59b6bc === undefined || Te(_0x3f7da7) && Te(_0x1313f9) && !Array.isArray(_0x1313f9)) {
      kt(_0x3f7da7, _0x1313f9);
    } else {
      Oe(_0x56543d, _0x59b6bc, _0x1313f9);
    }
  }
}
function $e(...[_0x3cb880, _0x2b5404]) {
  const _0x515c2d = ge(_0x3cb880 || {});
  const _0x66f5ce = Array.isArray(_0x515c2d);
  const _0x2c1db9 = Pt(_0x515c2d);
  function _0x109618(..._0x1ac1e1) {
    Pe(() => {
      if (_0x66f5ce && _0x1ac1e1.length === 1) {
        Mn(_0x515c2d, _0x1ac1e1[0]);
      } else {
        me(_0x515c2d, _0x1ac1e1);
      }
    });
  }
  return [_0x2c1db9, _0x109618];
}
function In(_0x23ba8e, _0x55f1a9) {
  const _0x175551 = $t(_0x55f1a9);
  return [_0x43d500 => C(_0x175551.Provider, {
    value: _0x23ba8e(_0x43d500),
    get children() {
      return _0x43d500.children;
    }
  }), () => yt(_0x175551)];
}
const [jn, Dn] = In(() => {
  const [_0x1aee91, _0x226479] = j(undefined);
  const [_0x54582b, _0x990045] = j("");
  const [_0x21c8d5, _0x19ab90] = j(undefined);
  const [_0x272b63, _0xf97785] = $e([]);
  const [_0x4cdacf, _0x8cc80e] = $e([]);
  const [_0x303a36, _0x4acd8c] = j(0);
  const [_0x230a48, _0x3bcb19] = j(false);
  const [_0x2a9332, _0x3c8285] = j(0);
  const [_0x148881, _0x12d370] = j("");
  const [_0x5e36a8, _0x175ebb] = j(undefined);
  const [_0x41abd8, _0x39480b] = j(false);
  const [_0x2105ad, _0x2cb84a] = j(false);
  return {
    activeCategory: _0x1aee91,
    setActiveCategory: _0x226479,
    activeVehicle: _0x54582b,
    activeColor: _0x21c8d5,
    setActiveColor: _0x19ab90,
    setActiveVehicle: _0x990045,
    categories: _0x272b63,
    setCategories: _0xf97785,
    vehicles: _0x4cdacf,
    setVehicles: _0x8cc80e,
    tax: _0x303a36,
    setTax: _0x4acd8c,
    hudVisible: _0x230a48,
    setHudVisible: _0x3bcb19,
    hudTime: _0x2a9332,
    setHudTime: _0x3c8285,
    searchInput: _0x148881,
    setSearchInput: _0x12d370,
    activeSpot: _0x5e36a8,
    setActiveSpot: _0x175ebb,
    isSelling: _0x41abd8,
    setIsSelling: _0x39480b,
    selfPurchaseable: _0x2105ad,
    setSelfPurchaseable: _0x2cb84a
  };
});
const z = () => Dn();
const Nn = I("<div><div><div class=\"flex h-full w-full flex-col items-center justify-between\"><div class=\"flex w-full flex-col items-start justify-start\"><div class=\"flex w-full flex-row items-center justify-between\"><div></div><div>In Stock</div></div><div></div></div><div class=\"flex w-full flex-row items-center justify-between\"><div class=\"flex flex-col items-start justify-start gap-[0.2vh]\"><div>Rating</div><div class=\"flex flex-row items-center justify-center\"><div></div><div></div></div></div><div>");
function Vn(_0x5ee3a1) {
  const _0x6c204a = _0x436163 => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(_0x436163);
  const {
    activeCategory: _0x467eea,
    activeVehicle: _0x8a5393,
    setActiveVehicle: _0x3a3a4f,
    tax: _0x51de6a
  } = z();
  return (() => {
    const _0x2a564f = Nn();
    const _0x39c971 = _0x2a564f.firstChild;
    const _0x5152b8 = _0x39c971.firstChild;
    const _0x2d71c0 = _0x5152b8.firstChild;
    const _0x325a51 = _0x2d71c0.firstChild;
    const _0x76c310 = _0x325a51.firstChild;
    const _0x57a6a7 = _0x76c310.nextSibling;
    const _0x26f9d2 = _0x325a51.nextSibling;
    const _0x552660 = _0x2d71c0.nextSibling;
    const _0x4ce50a = _0x552660.firstChild;
    const _0x15f1b9 = _0x4ce50a.firstChild;
    const _0x1f5104 = _0x15f1b9.nextSibling;
    const _0x54f632 = _0x1f5104.firstChild;
    const _0x42fcbf = _0x54f632.nextSibling;
    const _0x35f45f = _0x4ce50a.nextSibling;
    _0x2a564f.$$click = () => {
      _0x3a3a4f(_0x5ee3a1.model);
    };
    p(_0x76c310, () => _0x5ee3a1.name);
    p(_0x26f9d2, () => _0x467eea()?.name);
    p(_0x54f632, () => _0x5ee3a1?.classInfo?.name);
    p(_0x42fcbf, () => _0x5ee3a1?.rating?.pp?.toFixed(0) ?? "None");
    p(_0x35f45f, () => _0x6c204a(_0x5ee3a1.price * _0x51de6a()));
    L(_0x27f570 => {
      const _0x357379 = Z.vehicle;
      const _0x3be9a1 = {
        [Z.active]: _0x5ee3a1.model === _0x8a5393()
      };
      const _0x483dbc = Z.image;
      const _0x188d54 = "url(" + Ot + "/showroom/" + _0x5ee3a1.model + ".webp)";
      const _0x33fb9b = Z.title;
      const _0xa67008 = Z.price;
      const _0x2b1152 = Z.description;
      const _0x3b40b6 = Z.title;
      const _0x9483db = Z.classInfo;
      const _0x1ddc1b = _0x5ee3a1?.classInfo?.color;
      const _0x5a7833 = Z.price;
      const _0x35733c = Z.price;
      if (_0x357379 !== _0x27f570._v$) {
        g(_0x2a564f, _0x27f570._v$ = _0x357379);
      }
      _0x27f570._v$2 = ye(_0x2a564f, _0x3be9a1, _0x27f570._v$2);
      if (_0x483dbc !== _0x27f570._v$3) {
        g(_0x39c971, _0x27f570._v$3 = _0x483dbc);
      }
      if (_0x188d54 !== _0x27f570._v$4) {
        if ((_0x27f570._v$4 = _0x188d54) != null) {
          _0x39c971.style.setProperty("background-image", _0x188d54);
        } else {
          _0x39c971.style.removeProperty("background-image");
        }
      }
      if (_0x33fb9b !== _0x27f570._v$5) {
        g(_0x76c310, _0x27f570._v$5 = _0x33fb9b);
      }
      if (_0xa67008 !== _0x27f570._v$6) {
        g(_0x57a6a7, _0x27f570._v$6 = _0xa67008);
      }
      if (_0x2b1152 !== _0x27f570._v$7) {
        g(_0x26f9d2, _0x27f570._v$7 = _0x2b1152);
      }
      if (_0x3b40b6 !== _0x27f570._v$8) {
        g(_0x15f1b9, _0x27f570._v$8 = _0x3b40b6);
      }
      if (_0x9483db !== _0x27f570._v$9) {
        g(_0x54f632, _0x27f570._v$9 = _0x9483db);
      }
      if (_0x1ddc1b !== _0x27f570._v$10) {
        if ((_0x27f570._v$10 = _0x1ddc1b) != null) {
          _0x54f632.style.setProperty("background-color", _0x1ddc1b);
        } else {
          _0x54f632.style.removeProperty("background-color");
        }
      }
      if (_0x5a7833 !== _0x27f570._v$11) {
        g(_0x42fcbf, _0x27f570._v$11 = _0x5a7833);
      }
      if (_0x35733c !== _0x27f570._v$12) {
        g(_0x35f45f, _0x27f570._v$12 = _0x35733c);
      }
      return _0x27f570;
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
      _v$12: undefined
    });
    return _0x2a564f;
  })();
}
W(["click"]);
const Bn = "_keybind_1qn2e_1";
const Rn = "_text_1qn2e_16";
const zn = "_button_1qn2e_19";
const qn = "_searchBar_1qn2e_30";
const Un = "_footer_1qn2e_57";
const Zn = "_arrow_1qn2e_64";
const J = {
  keybind: Bn,
  text: Rn,
  button: zn,
  searchBar: qn,
  footer: Un,
  arrow: Zn
};
const Hn = I("<div class=\"absolute bottom-0 left-0 w-full\"><div class=\"flex w-full flex-col items-end justify-end gap-[1vh] p-[2.5vh]\"><div class=\"flex w-full flex-row items-center justify-between\"><div><input type=\"text\" placeholder=\"Search\"><svg width=\"1.29vh\" height=\"1.29vh\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.08581 0.0096725C3.31982 0.220966 1.87567 1.09786 0.922297 2.5377C-0.177474 4.19864 -0.302994 6.35914 0.595733 8.15872C1.29743 9.56382 2.5573 10.6076 4.08811 11.0521C4.65082 11.2155 4.92755 11.2511 5.6325 11.2508C6.12788 11.2506 6.33428 11.2395 6.53454 11.2024C7.40016 11.042 8.1257 10.7497 8.8011 10.2895L9.0903 10.0924L10.99 11.9915C12.4502 13.4512 12.9182 13.9035 13.0128 13.946C13.1561 14.0106 13.3861 14.0182 13.539 13.9636C13.7998 13.8704 13.9671 13.6461 13.9901 13.3586C14.0178 13.0131 14.1222 13.1365 11.9994 11.0064L10.0906 9.09104L10.3028 8.77419C10.6841 8.20488 10.9386 7.63483 11.0964 6.99652C11.7774 4.24228 10.3272 1.42454 7.69053 0.37863C7.37928 0.25517 6.92009 0.126894 6.5482 0.0595272C6.31141 0.0166226 5.31233 -0.0174165 5.08581 0.0096725ZM6.56187 1.5066C7.38392 1.70284 8.02934 2.06124 8.61329 2.64581C9.49496 3.52837 9.92375 4.68 9.83896 5.93751C9.74258 7.3669 8.90801 8.65781 7.62791 9.35756C6.47473 9.98794 4.95518 10.0117 3.76983 9.41786C3.07338 9.06899 2.52177 8.5815 2.09953 7.94182C1.28986 6.7151 1.18326 5.14153 1.81963 3.81006C2.39958 2.59664 3.55886 1.71201 4.88515 1.47081C5.32269 1.39124 6.15278 1.40894 6.56187 1.5066Z\" fill=\"#00F8B9\"></div><div class=\"flex flex-row items-center justify-start gap-[1vh]\"></div></div><div><div><svg width=\"0.74vh\" height=\"1.11vh\" viewBox=\"0 0 8 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.11581 1L1.46875 5.94118L7.11581 10.8824\" stroke=\"#00F8B9\"></div><div class=\"flex w-full flex-row items-center justify-start gap-[3.1vh] overflow-hidden pl-[1vh] pr-[1vh]\"></div><div><svg width=\"0.74vh\" height=\"1.11vh\" viewBox=\"0 0 8 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.11581 1L1.46875 5.94118L7.11581 10.8824\" stroke=\"#00F8B9\">");
const Gn = I("<div><div></div><div>");
const Kn = [{
  keybind: "W",
  description: "Up"
}, {
  keybind: "S",
  description: "Down"
}, {
  keybind: "A",
  description: "Left"
}, {
  keybind: "D",
  description: "Right"
}, {
  keybind: "Q",
  description: "Zoom Out"
}, {
  keybind: "E",
  description: "Zoom In"
}, {
  keybind: "Mouse Wheel",
  description: "Free Camera"
}, {
  keybind: "ESC",
  description: "Exit"
}];
let Q;
function Wn() {
  let _0x522360 = 0;
  let _0x44f98d = null;
  const _0x19ac5f = _0x1a70e7 => {
    _0x1a70e7.preventDefault();
    const _0x33b308 = _0x1a70e7.currentTarget;
    let _0x2a0db8 = _0x33b308.scrollLeft + _0x1a70e7.deltaY * 4;
    const _0x4f3fb6 = () => {
      if (_0x33b308.scrollWidth - _0x33b308.clientWidth === _0x33b308.scrollLeft || _0x33b308.scrollLeft === 0) {
        cancelAnimationFrame(_0x44f98d);
      }
      const _0x5cb7c2 = (_0x2a0db8 - _0x522360) / 10;
      if (Math.abs(_0x5cb7c2) > 1) {
        _0x33b308.scrollBy({
          left: _0x5cb7c2,
          behavior: "auto"
        });
        _0x522360 += _0x5cb7c2;
        if (_0x33b308.scrollLeft === _0x33b308.scrollWidth - _0x33b308.clientWidth || _0x33b308.scrollLeft === 0) {
          cancelAnimationFrame(_0x44f98d);
        } else {
          _0x44f98d = requestAnimationFrame(_0x4f3fb6);
        }
      } else {
        cancelAnimationFrame(_0x44f98d);
      }
    };
    if (_0x44f98d) {
      cancelAnimationFrame(_0x44f98d);
    }
    _0x522360 = _0x33b308.scrollLeft;
    _0x44f98d = requestAnimationFrame(_0x4f3fb6);
  };
  const {
    activeVehicle: _0x30eda7,
    vehicles: _0x1558a3,
    activeCategory: _0x3fb015,
    setActiveColor: _0x4245fc,
    searchInput: _0x1508cf,
    setSearchInput: _0x4c2f7f
  } = z();
  Qe(async () => {
    await _0x39fd87.execute("showrooms:spawnVehicle", _0x30eda7());
    _0x4245fc(undefined);
  }, [_0x30eda7()]);
  return (() => {
    const _0x426947 = Hn();
    const _0x263899 = _0x426947.firstChild;
    const _0x23ab5b = _0x263899.firstChild;
    const _0x1d77fb = _0x23ab5b.firstChild;
    const _0x5ce79e = _0x1d77fb.firstChild;
    const _0x1e1068 = _0x1d77fb.nextSibling;
    const _0x147265 = _0x23ab5b.nextSibling;
    const _0x2d4614 = _0x147265.firstChild;
    const _0xcf5f47 = _0x2d4614.nextSibling;
    const _0x1f6afe = _0xcf5f47.nextSibling;
    _0x5ce79e.addEventListener("blur", _0x5aca90 => {
      _0x39fd87.execute("showrooms:searchFocus", false);
    });
    _0x5ce79e.addEventListener("focus", _0xdbe0a2 => {
      _0x39fd87.execute("showrooms:searchFocus", true);
    });
    _0x5ce79e.$$input = _0x353c9a => {
      _0x4c2f7f(_0x353c9a.currentTarget.value);
    };
    p(_0x1e1068, C(re, {
      each: Kn,
      children: _0x352826 => (() => {
        const _0x40d9aa = Gn();
        const _0x5dba0c = _0x40d9aa.firstChild;
        const _0x3d249a = _0x5dba0c.nextSibling;
        p(_0x5dba0c, () => _0x352826.description);
        p(_0x3d249a, () => _0x352826.keybind);
        L(_0x5073d3 => {
          const _0x42f6c4 = J.keybind;
          const _0x1ae9be = J.text;
          const _0x3a12b5 = J.button;
          if (_0x42f6c4 !== _0x5073d3._v$5) {
            g(_0x40d9aa, _0x5073d3._v$5 = _0x42f6c4);
          }
          if (_0x1ae9be !== _0x5073d3._v$6) {
            g(_0x5dba0c, _0x5073d3._v$6 = _0x1ae9be);
          }
          if (_0x3a12b5 !== _0x5073d3._v$7) {
            g(_0x3d249a, _0x5073d3._v$7 = _0x3a12b5);
          }
          return _0x5073d3;
        }, {
          _v$5: undefined,
          _v$6: undefined,
          _v$7: undefined
        });
        return _0x40d9aa;
      })()
    }));
    _0x2d4614.$$click = () => {
      Q?.scroll({
        left: Q.scrollLeft - 500,
        behavior: "smooth"
      });
    };
    _0xcf5f47.addEventListener("wheel", _0x19ac5f);
    const _0x90bb96 = Q;
    if (typeof _0x90bb96 == "function") {
      tt(_0x90bb96, _0xcf5f47);
    } else {
      Q = _0xcf5f47;
    }
    p(_0xcf5f47, C(re, {
      get each() {
        return _0x1558a3.filter(_0x32457f => _0x32457f.name.toLowerCase().includes(_0x1508cf().toLowerCase()) && _0x32457f.category === _0x3fb015()?.id);
      },
      children: _0x5fed0b => C(Vn, _0x5fed0b)
    }));
    _0x1f6afe.$$click = () => {
      Q?.scroll({
        left: Q.scrollLeft + 500,
        behavior: "smooth"
      });
    };
    L(_0x2d7fef => {
      const _0x22bd3d = J.searchBar;
      const _0x5aeb67 = J.footer;
      const _0x3d1b8e = J.arrow;
      const _0x18ae82 = J.arrow;
      if (_0x22bd3d !== _0x2d7fef._v$) {
        g(_0x1d77fb, _0x2d7fef._v$ = _0x22bd3d);
      }
      if (_0x5aeb67 !== _0x2d7fef._v$2) {
        g(_0x147265, _0x2d7fef._v$2 = _0x5aeb67);
      }
      if (_0x3d1b8e !== _0x2d7fef._v$3) {
        g(_0x2d4614, _0x2d7fef._v$3 = _0x3d1b8e);
      }
      if (_0x18ae82 !== _0x2d7fef._v$4) {
        g(_0x1f6afe, _0x2d7fef._v$4 = _0x18ae82);
      }
      return _0x2d7fef;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    L(() => _0x5ce79e.value = _0x1508cf());
    return _0x426947;
  })();
}
W(["input", "click"]);
const Yn = "_nav_1jd7y_1";
const Xn = "_category_1jd7y_16";
const Qn = "_active_1jd7y_38";
const Re = {
  nav: Yn,
  category: Xn,
  active: Qn
};
const Jn = I("<div>");
const ei = I("<div><div class=\"flex h-full w-full flex-col items-center justify-end gap-[1.5vh] pb-[1.5vh]\"><img>");
function ti() {
  const {
    categories: _0x1f4a5f,
    activeCategory: _0x415696,
    setActiveCategory: _0x4a212a
  } = z();
  return (() => {
    const _0xa21b5c = Jn();
    p(_0xa21b5c, C(re, {
      each: _0x1f4a5f,
      children: _0x568730 => (() => {
        const _0xc67f8c = ei();
        const _0x1ae7ed = _0xc67f8c.firstChild;
        const _0x5a768c = _0x1ae7ed.firstChild;
        _0xc67f8c.$$click = () => {
          _0x4a212a(_0x568730);
          if (Q) {
            Q.scroll({
              left: 0,
              behavior: "smooth"
            });
          }
        };
        ce(_0x5a768c, "draggable", false);
        p(_0x1ae7ed, () => _0x568730.name, null);
        L(_0x20da1c => {
          const _0x294de5 = Re.category;
          const _0x197dfd = {
            [Re.active]: _0x568730.id === _0x415696()?.id
          };
          const _0xd2d761 = "./" + _0x568730.id + ".svg";
          if (_0x294de5 !== _0x20da1c._v$) {
            g(_0xc67f8c, _0x20da1c._v$ = _0x294de5);
          }
          _0x20da1c._v$2 = ye(_0xc67f8c, _0x197dfd, _0x20da1c._v$2);
          if (_0xd2d761 !== _0x20da1c._v$3) {
            ce(_0x5a768c, "src", _0x20da1c._v$3 = _0xd2d761);
          }
          return _0x20da1c;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return _0xc67f8c;
      })()
    }));
    L(() => g(_0xa21b5c, Re.nav));
    return _0xa21b5c;
  })();
}
W(["click"]);
const ni = "_specs_1fasl_1";
const ii = "_title_1fasl_9";
const si = "_description_1fasl_18";
const oi = "_performanceContainer_1fasl_26";
const ri = "_performanceTitle_1fasl_40";
const li = "_performanceCount_1fasl_48";
const de = {
  specs: ni,
  title: ii,
  description: si,
  performanceContainer: oi,
  performanceTitle: ri,
  performanceCount: li
};
const ci = I("<div><div>CAR SPECIFICATIONS");
const ai = I("<div><div class=\"flex w-full flex-row items-center justify-between\"><div></div><div></div></div><input type=\"range\" disabled>");
function ui() {
  const {
    vehicles: _0x226c6c,
    activeVehicle: _0x15a9fd
  } = z();
  const _0x47cdae = F(() => {
    const _0x4c7c8b = _0x226c6c.find(_0x301ba3 => _0x301ba3.model === _0x15a9fd());
    if (!_0x4c7c8b) {
      return [];
    }
    const _0x162612 = _0x4c7c8b.rating;
    return [{
      name: "Power",
      value: _0x162612.power,
      max: 100
    }, {
      name: "Acceleration",
      value: _0x162612.acc,
      max: 100
    }, {
      name: "Top Speed",
      value: _0x162612.speed,
      max: 100
    }, {
      name: "Handling",
      value: _0x162612.grip,
      max: 100
    }, {
      name: "Performance Points",
      value: _0x162612.pp,
      divideBy: 10,
      max: 1000
    }];
  });
  return (() => {
    const _0x1e34bf = ci();
    const _0x39144c = _0x1e34bf.firstChild;
    p(_0x1e34bf, C(re, {
      get each() {
        return _0x47cdae();
      },
      children: _0x4f548e => (() => {
        const _0x579c9f = ai();
        const _0x2eb693 = _0x579c9f.firstChild;
        const _0x3cea46 = _0x2eb693.firstChild;
        const _0x187d1d = _0x3cea46.nextSibling;
        const _0x502da3 = _0x2eb693.nextSibling;
        p(_0x3cea46, () => _0x4f548e.name);
        p(_0x187d1d, () => Math.min((_0x4f548e.value ?? 0).toFixed(1), _0x4f548e.max));
        L(_0x491447 => {
          const _0x3ea436 = de.performanceContainer;
          const _0x340dde = de.performanceTitle;
          const _0x38fc77 = de.performanceCount;
          const _0x2c7eee = +_0x4f548e.value / (_0x4f548e.divideBy ?? 1) / _0x4f548e.max * _0x4f548e.max + "% 100%";
          if (_0x3ea436 !== _0x491447._v$3) {
            g(_0x579c9f, _0x491447._v$3 = _0x3ea436);
          }
          if (_0x340dde !== _0x491447._v$4) {
            g(_0x3cea46, _0x491447._v$4 = _0x340dde);
          }
          if (_0x38fc77 !== _0x491447._v$5) {
            g(_0x187d1d, _0x491447._v$5 = _0x38fc77);
          }
          if (_0x2c7eee !== _0x491447._v$6) {
            if ((_0x491447._v$6 = _0x2c7eee) != null) {
              _0x502da3.style.setProperty("background-size", _0x2c7eee);
            } else {
              _0x502da3.style.removeProperty("background-size");
            }
          }
          return _0x491447;
        }, {
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined
        });
        L(() => _0x502da3.value = +_0x4f548e.value / (_0x4f548e.divideBy ?? 1));
        return _0x579c9f;
      })()
    }), null);
    L(_0x40e316 => {
      const _0x3579c9 = de.specs;
      const _0x4dc683 = de.title;
      if (_0x3579c9 !== _0x40e316._v$) {
        g(_0x1e34bf, _0x40e316._v$ = _0x3579c9);
      }
      if (_0x4dc683 !== _0x40e316._v$2) {
        g(_0x39144c, _0x40e316._v$2 = _0x4dc683);
      }
      return _0x40e316;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x1e34bf;
  })();
}
const fi = "_options_anzcv_1";
const di = "_title_anzcv_11";
const vi = "_description_anzcv_20";
const hi = "_color_anzcv_33";
const mi = "_active_anzcv_43";
const _i = "_payment_anzcv_46";
const gi = "_payButton_anzcv_55";
const $i = "_testDriveContainer_anzcv_76";
const yi = "_testDrive_anzcv_76";
const q = {
  options: fi,
  title: di,
  description: vi,
  color: hi,
  active: mi,
  payment: _i,
  payButton: gi,
  testDriveContainer: $i,
  testDrive: yi
};
var wi = () => {};
var ft = (_0x11b28a, _0x574115) => _0x574115();
function bi(_0x2b1c3c, _0x17a682) {
  const _0x1c5a4c = N(_0x2b1c3c);
  const _0x43dc40 = _0x1c5a4c ? [_0x1c5a4c] : [];
  const {
    onEnter: _0x5caf0b = ft,
    onExit: _0x29441f = ft
  } = _0x17a682;
  const [_0x2eff8e, _0x4fa35a] = j(_0x17a682.appear ? [] : _0x43dc40);
  const [_0x1f22ce] = Dt();
  let _0x385c66;
  let _0x449246 = false;
  function _0x3c39cd(_0x1f1771, _0x4f25c4) {
    if (!_0x1f1771) {
      return _0x4f25c4 && _0x4f25c4();
    }
    _0x449246 = true;
    _0x29441f(_0x1f1771, () => {
      Pe(() => {
        _0x449246 = false;
        _0x4fa35a(_0x3d0787 => _0x3d0787.filter(_0x274a82 => _0x274a82 !== _0x1f1771));
        if (_0x4f25c4) {
          _0x4f25c4();
        }
      });
    });
  }
  function _0x37ea8b(_0x4f3f13) {
    const _0x5a8c5c = _0x385c66;
    if (!_0x5a8c5c) {
      return _0x4f3f13 && _0x4f3f13();
    }
    _0x385c66 = undefined;
    _0x4fa35a(_0x3d395f => [_0x5a8c5c, ..._0x3d395f]);
    _0x5caf0b(_0x5a8c5c, _0x4f3f13 ?? wi);
  }
  const _0x4dd970 = _0x17a682.mode === "out-in" ? _0x5ac1b3 => _0x449246 || _0x3c39cd(_0x5ac1b3, _0x37ea8b) : _0x17a682.mode === "in-out" ? _0x1a731b => _0x37ea8b(() => _0x3c39cd(_0x1a731b)) : _0x24fde3 => {
    _0x3c39cd(_0x24fde3);
    _0x37ea8b();
  };
  te(_0x172b90 => {
    const _0xafd795 = _0x2b1c3c();
    if (N(_0x1f22ce)) {
      _0x1f22ce();
      return _0x172b90;
    } else {
      if (_0xafd795 !== _0x172b90) {
        _0x385c66 = _0xafd795;
        Pe(() => N(() => _0x4dd970(_0x172b90)));
      }
      return _0xafd795;
    }
  }, _0x17a682.appear ? undefined : _0x1c5a4c);
  return _0x2eff8e;
}
var dt = _0x377a69 => _0x377a69 instanceof Element;
function Ye(_0x3e6d0e, _0x1c9455) {
  if (_0x1c9455(_0x3e6d0e)) {
    return _0x3e6d0e;
  }
  if (typeof _0x3e6d0e == "function" && !_0x3e6d0e.length) {
    return Ye(_0x3e6d0e(), _0x1c9455);
  }
  if (Array.isArray(_0x3e6d0e)) {
    for (const _0x138b09 of _0x3e6d0e) {
      const _0x19fd7f = Ye(_0x138b09, _0x1c9455);
      if (_0x19fd7f) {
        return _0x19fd7f;
      }
    }
  }
  return null;
}
function Ci(_0x20a708, _0x150a05 = dt, _0x36f634 = dt) {
  const _0x1fa3cb = F(_0x20a708);
  return F(() => Ye(_0x1fa3cb(), _0x150a05));
}
function xi(_0x3441c4) {
  return F(() => {
    const _0x3bf6d6 = _0x3441c4.name || "s";
    return {
      enterActive: (_0x3441c4.enterActiveClass || _0x3bf6d6 + "-enter-active").split(" "),
      enter: (_0x3441c4.enterClass || _0x3bf6d6 + "-enter").split(" "),
      enterTo: (_0x3441c4.enterToClass || _0x3bf6d6 + "-enter-to").split(" "),
      exitActive: (_0x3441c4.exitActiveClass || _0x3bf6d6 + "-exit-active").split(" "),
      exit: (_0x3441c4.exitClass || _0x3bf6d6 + "-exit").split(" "),
      exitTo: (_0x3441c4.exitToClass || _0x3bf6d6 + "-exit-to").split(" "),
      move: (_0x3441c4.moveClass || _0x3bf6d6 + "-move").split(" ")
    };
  });
}
function Tt(_0x1d673a) {
  requestAnimationFrame(() => requestAnimationFrame(_0x1d673a));
}
function Si(_0x213cd0, _0x22bdcd, _0x1d2c50, _0x1be13b) {
  const {
    onBeforeEnter: _0x4ea12a,
    onEnter: _0x40accc,
    onAfterEnter: _0x458d92
  } = _0x22bdcd;
  _0x4ea12a?.(_0x1d2c50);
  _0x1d2c50.classList.add(..._0x213cd0.enter);
  _0x1d2c50.classList.add(..._0x213cd0.enterActive);
  queueMicrotask(() => {
    if (!_0x1d2c50.parentNode) {
      return _0x1be13b?.();
    }
    _0x40accc?.(_0x1d2c50, () => _0x5ae457());
  });
  Tt(() => {
    _0x1d2c50.classList.remove(..._0x213cd0.enter);
    _0x1d2c50.classList.add(..._0x213cd0.enterTo);
    if (!_0x40accc || _0x40accc.length < 2) {
      _0x1d2c50.addEventListener("transitionend", _0x5ae457);
      _0x1d2c50.addEventListener("animationend", _0x5ae457);
    }
  });
  function _0x5ae457(_0x2a5550) {
    if (!_0x2a5550 || _0x2a5550.target === _0x1d2c50) {
      _0x1be13b?.();
      _0x1d2c50.removeEventListener("transitionend", _0x5ae457);
      _0x1d2c50.removeEventListener("animationend", _0x5ae457);
      _0x1d2c50.classList.remove(..._0x213cd0.enterActive);
      _0x1d2c50.classList.remove(..._0x213cd0.enterTo);
      _0x458d92?.(_0x1d2c50);
    }
  }
}
function pi(_0x4a5763, _0x5c8010, _0x3f0b48, _0x124c59) {
  const {
    onBeforeExit: _0x5adfac,
    onExit: _0xcc029,
    onAfterExit: _0x3f2080
  } = _0x5c8010;
  if (!_0x3f0b48.parentNode) {
    return _0x124c59?.();
  }
  _0x5adfac?.(_0x3f0b48);
  _0x3f0b48.classList.add(..._0x4a5763.exit);
  _0x3f0b48.classList.add(..._0x4a5763.exitActive);
  _0xcc029?.(_0x3f0b48, () => _0x5ac9a1());
  Tt(() => {
    _0x3f0b48.classList.remove(..._0x4a5763.exit);
    _0x3f0b48.classList.add(..._0x4a5763.exitTo);
    if (!_0xcc029 || _0xcc029.length < 2) {
      _0x3f0b48.addEventListener("transitionend", _0x5ac9a1);
      _0x3f0b48.addEventListener("animationend", _0x5ac9a1);
    }
  });
  function _0x5ac9a1(_0x38903d) {
    if (!_0x38903d || _0x38903d.target === _0x3f0b48) {
      _0x124c59?.();
      _0x3f0b48.removeEventListener("transitionend", _0x5ac9a1);
      _0x3f0b48.removeEventListener("animationend", _0x5ac9a1);
      _0x3f0b48.classList.remove(..._0x4a5763.exitActive);
      _0x3f0b48.classList.remove(..._0x4a5763.exitTo);
      _0x3f2080?.(_0x3f0b48);
    }
  }
}
var Ai = {
  inout: "in-out",
  outin: "out-in"
};
var it = _0x58aa77 => {
  const _0x225187 = xi(_0x58aa77);
  return bi(Ci(() => _0x58aa77.children), {
    mode: Ai[_0x58aa77.mode],
    appear: _0x58aa77.appear,
    onEnter(_0x5e98f0, _0x2df739) {
      Si(_0x225187(), _0x58aa77, _0x5e98f0, _0x2df739);
    },
    onExit(_0x8423c, _0x1ec2a2) {
      pi(_0x225187(), _0x58aa77, _0x8423c, _0x1ec2a2);
    }
  });
};
const Pi = I("<button>Purchase");
const Ei = I("<div class=\"mt-[2.5vh] flex w-full flex-col items-start justify-start\"><div class=\"flex w-full flex-row items-start justify-between\"><div>Payment</div><div></div></div><div>Total Price</div><div><button>Test Drive");
const Li = I("<div><div class=\"flex flex-col items-end justify-start\"><div></div><div></div></div><div class=\"flex flex-col items-end justify-start gap-[1vh]\"><div>SELECT DEALER COLOR</div><div class=\"grid w-full grid-cols-7 gap-[0.5vh]\">");
const ki = I("<div>");
const Ti = ["#FFFFFF", "#FF6565", "#FF9C40", "#FFC531", "#FBFF3E", "#60FF28", "#3EFFE8", "#FFFFFF", "#FF6565", "#FF9C40", "#FFC531", "#FBFF3E", "#60FF28", "#3EFFE8"];
function Oi() {
  const {
    activeVehicle: _0x14bcd3,
    vehicles: _0x5b60ec,
    activeColor: _0x20c61a,
    setActiveColor: _0x47f6c3,
    tax: _0x2eb7b4,
    selfPurchaseable: _0x1cc0e6
  } = z();
  const [_0x59f46e, _0xda0fbd] = j(false);
  const _0x583881 = F(() => _0x5b60ec.find(_0x33701e => _0x33701e.model === _0x14bcd3()));
  const _0x11a892 = _0x315db7 => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(_0x315db7);
  const _0x41b9e1 = async () => {
    _0xda0fbd(true);
    await _0x39fd87.execute("showrooms:testDrive", _0x14bcd3());
    _0xda0fbd(false);
  };
  const _0x5765f6 = async () => {
    _0xda0fbd(true);
    await _0x39fd87.execute("showrooms:selfPurchaseVehicle", _0x14bcd3());
    _0xda0fbd(false);
  };
  return (() => {
    const _0x4120f6 = Li();
    const _0xeeb50 = _0x4120f6.firstChild;
    const _0x4b7fd8 = _0xeeb50.firstChild;
    const _0x863dd = _0x4b7fd8.nextSibling;
    const _0x22e31b = _0xeeb50.nextSibling;
    const _0x4ef448 = _0x22e31b.firstChild;
    const _0x4471fa = _0x4ef448.nextSibling;
    p(_0x4b7fd8, () => _0x583881()?.name);
    p(_0x863dd, () => _0x583881()?.description);
    p(_0x4471fa, C(re, {
      each: Ti,
      children: (_0x25fc45, _0x4e5fe3) => (() => {
        const _0x624014 = ki();
        _0x624014.$$click = () => {
          _0x47f6c3(_0x4e5fe3());
          _0x39fd87.execute("showrooms:setColor", _0x25fc45);
        };
        if (_0x25fc45 != null) {
          _0x624014.style.setProperty("background-color", _0x25fc45);
        } else {
          _0x624014.style.removeProperty("background-color");
        }
        L(_0x4e9c6f => {
          const _0x4a09e8 = q.color;
          const _0x309c8c = {
            [q.active]: _0x20c61a() === _0x4e5fe3()
          };
          if (_0x4a09e8 !== _0x4e9c6f._v$13) {
            g(_0x624014, _0x4e9c6f._v$13 = _0x4a09e8);
          }
          _0x4e9c6f._v$14 = ye(_0x624014, _0x309c8c, _0x4e9c6f._v$14);
          return _0x4e9c6f;
        }, {
          _v$13: undefined,
          _v$14: undefined
        });
        return _0x624014;
      })()
    }));
    p(_0x4120f6, C(it, {
      name: "slide-right",
      get children() {
        const _0xfd4aaf = Ei();
        const _0x461c03 = _0xfd4aaf.firstChild;
        const _0x24866d = _0x461c03.firstChild;
        const _0xabc4e = _0x24866d.nextSibling;
        const _0x12be69 = _0x461c03.nextSibling;
        const _0x17f5d3 = _0x12be69.nextSibling;
        const _0x1179bd = _0x17f5d3.firstChild;
        p(_0xabc4e, () => _0x11a892(_0x583881()?.price * _0x2eb7b4() || 0));
        _0x12be69.style.setProperty("width", "auto");
        _0x12be69.style.setProperty("height", "auto");
        _0x1179bd.$$click = _0x41b9e1;
        p(_0x17f5d3, C(le, {
          get when() {
            return _0x1cc0e6();
          },
          get children() {
            const _0x4670a8 = Pi();
            _0x4670a8.$$click = _0x5765f6;
            L(_0x1b0725 => {
              const _0x55c546 = q.testDrive;
              const _0x50d3f2 = _0x59f46e();
              if (_0x55c546 !== _0x1b0725._v$) {
                g(_0x4670a8, _0x1b0725._v$ = _0x55c546);
              }
              if (_0x50d3f2 !== _0x1b0725._v$2) {
                _0x4670a8.disabled = _0x1b0725._v$2 = _0x50d3f2;
              }
              return _0x1b0725;
            }, {
              _v$: undefined,
              _v$2: undefined
            });
            return _0x4670a8;
          }
        }), null);
        L(_0x23e870 => {
          const _0x411a0f = q.payment;
          const _0x314491 = q.payment;
          const _0x52145d = q.description;
          const _0x4c3d35 = q.testDriveContainer;
          const _0x28d942 = q.testDrive;
          const _0x2ec8dd = _0x59f46e();
          if (_0x411a0f !== _0x23e870._v$3) {
            g(_0x24866d, _0x23e870._v$3 = _0x411a0f);
          }
          if (_0x314491 !== _0x23e870._v$4) {
            g(_0xabc4e, _0x23e870._v$4 = _0x314491);
          }
          if (_0x52145d !== _0x23e870._v$5) {
            g(_0x12be69, _0x23e870._v$5 = _0x52145d);
          }
          if (_0x4c3d35 !== _0x23e870._v$6) {
            g(_0x17f5d3, _0x23e870._v$6 = _0x4c3d35);
          }
          if (_0x28d942 !== _0x23e870._v$7) {
            g(_0x1179bd, _0x23e870._v$7 = _0x28d942);
          }
          if (_0x2ec8dd !== _0x23e870._v$8) {
            _0x1179bd.disabled = _0x23e870._v$8 = _0x2ec8dd;
          }
          return _0x23e870;
        }, {
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined,
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined
        });
        return _0xfd4aaf;
      }
    }), null);
    L(_0xbf9597 => {
      const _0x39e2ab = q.options;
      const _0x5e725c = q.title;
      const _0x553533 = q.description;
      const _0x4cc57e = q.title;
      if (_0x39e2ab !== _0xbf9597._v$9) {
        g(_0x4120f6, _0xbf9597._v$9 = _0x39e2ab);
      }
      if (_0x5e725c !== _0xbf9597._v$10) {
        g(_0x4b7fd8, _0xbf9597._v$10 = _0x5e725c);
      }
      if (_0x553533 !== _0xbf9597._v$11) {
        g(_0x863dd, _0xbf9597._v$11 = _0x553533);
      }
      if (_0x4cc57e !== _0xbf9597._v$12) {
        g(_0x4ef448, _0xbf9597._v$12 = _0x4cc57e);
      }
      return _0xbf9597;
    }, {
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined
    });
    return _0x4120f6;
  })();
}
W(["click"]);
const be = (_0x497484, _0x2deda5, _0x206f5b, _0x187877) => {
  const _0x437d2c = _0x187877 * Math.PI / 180;
  const _0x1eadac = _0x2deda5 / 2;
  const _0x3a7d20 = _0x206f5b / 2;
  const _0x4bc0aa = Math.cos(_0x437d2c);
  const _0x18c77c = Math.sin(_0x437d2c);
  const _0x4cac8d = [_0x497484[0] + _0x1eadac * _0x4bc0aa - _0x3a7d20 * _0x18c77c, _0x497484[1] + _0x1eadac * _0x18c77c + _0x3a7d20 * _0x4bc0aa, _0x497484[2]];
  const _0x4085fd = [_0x497484[0] - _0x1eadac * _0x4bc0aa - _0x3a7d20 * _0x18c77c, _0x497484[1] - _0x1eadac * _0x18c77c + _0x3a7d20 * _0x4bc0aa, _0x497484[2]];
  const _0x4445bb = [_0x497484[0] - _0x1eadac * _0x4bc0aa + _0x3a7d20 * _0x18c77c, _0x497484[1] - _0x1eadac * _0x18c77c - _0x3a7d20 * _0x4bc0aa, _0x497484[2]];
  const _0x1a947a = [_0x497484[0] + _0x1eadac * _0x4bc0aa + _0x3a7d20 * _0x18c77c, _0x497484[1] + _0x1eadac * _0x18c77c - _0x3a7d20 * _0x4bc0aa, _0x497484[2]];
  return [_0x4cac8d, _0x4085fd, _0x4445bb, _0x1a947a];
};
const Fi = 900000;
be([-1144, -2862.72, 13.95], 200, 140, 150);
be([-1272.05, -3383, 13.94], 100, 100, 330);
be([-782.12, -1379.5, 1.6], 50, 50, 310);
be([406.72, -1429.39, 29.43], 20, 20, 318);
const Mi = "_hud_1be7o_1";
const Ii = "_content_1be7o_12";
const ji = "_text_1be7o_24";
const Di = "_barContainer_1be7o_38";
const Ni = "_bar_1be7o_38";
const ve = {
  hud: Mi,
  content: Ii,
  text: ji,
  barContainer: Di,
  bar: Ni
};
const Vi = I("<div><div><div></div><div><div>");
function Bi() {
  const {
    hudTime: _0x41504e,
    setHudTime: _0x4ee41f
  } = z();
  _0x39fd87.register("showrooms:time", async _0x58f33d => {
    _0x4ee41f(_0x58f33d);
  });
  const _0x2cc120 = _0x1ef24c => {
    const _0x56151e = Math.floor(_0x1ef24c / 60);
    const _0xd21618 = Math.floor(_0x1ef24c - _0x56151e * 60);
    return _0x56151e + ":" + (_0xd21618 < 10 ? "0" : "") + _0xd21618;
  };
  return (() => {
    const _0x2798c1 = Vi();
    const _0x2bf250 = _0x2798c1.firstChild;
    const _0x482665 = _0x2bf250.firstChild;
    const _0x2c641a = _0x482665.nextSibling;
    const _0xf12234 = _0x2c641a.firstChild;
    p(_0x482665, (() => {
      const _0x43b375 = F(() => _0x41504e() > 0);
      return () => _0x43b375() ? "Time Remaining: " + _0x2cc120(_0x41504e() / 1000) : "Time's Up!";
    })());
    L(_0x4ff4bf => {
      const _0x345719 = ve.hud;
      const _0x3f671a = ve.content;
      const _0x4fad83 = ve.text;
      const _0x26a5d4 = ve.barContainer;
      const _0x25b475 = ve.bar;
      const _0x2930cb = _0x41504e() / 1000 / (Fi / 1000) * 100 + "%";
      if (_0x345719 !== _0x4ff4bf._v$) {
        g(_0x2798c1, _0x4ff4bf._v$ = _0x345719);
      }
      if (_0x3f671a !== _0x4ff4bf._v$2) {
        g(_0x2bf250, _0x4ff4bf._v$2 = _0x3f671a);
      }
      if (_0x4fad83 !== _0x4ff4bf._v$3) {
        g(_0x482665, _0x4ff4bf._v$3 = _0x4fad83);
      }
      if (_0x26a5d4 !== _0x4ff4bf._v$4) {
        g(_0x2c641a, _0x4ff4bf._v$4 = _0x26a5d4);
      }
      if (_0x25b475 !== _0x4ff4bf._v$5) {
        g(_0xf12234, _0x4ff4bf._v$5 = _0x25b475);
      }
      if (_0x2930cb !== _0x4ff4bf._v$6) {
        if ((_0x4ff4bf._v$6 = _0x2930cb) != null) {
          _0xf12234.style.setProperty("width", _0x2930cb);
        } else {
          _0xf12234.style.removeProperty("width");
        }
      }
      return _0x4ff4bf;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return _0x2798c1;
  })();
}
const Ri = I("<div><div class=\"flex h-full w-full flex-row items-start justify-between\"><div class=\"flex w-[30vh] flex-col items-center justify-start gap-[3vh] pl-[5.9vh] pt-[5.8vh]\">");
function zi() {
  const [_0x2bf293, _0x5b2cac] = j(false);
  const {
    setActiveCategory: _0x153382,
    setCategories: _0x4178ad,
    setVehicles: _0x161e65,
    setActiveVehicle: _0x419490,
    hudVisible: _0x3515a4,
    setHudVisible: _0x24d178,
    setSearchInput: _0x433e5b,
    setTax: _0x1fb481,
    setSelfPurchaseable: _0x2bb497
  } = z();
  Ie(() => {
    _0x39fd87.register("showrooms:closeCatalog", async () => {
      _0x153382(undefined);
      _0x4178ad([]);
      _0x161e65([]);
      _0x5b2cac(false);
    });
    _0x39fd87.register("showrooms:show", async _0x5b66a7 => {
      _0x161e65(_0x5b66a7.vehicles);
      _0x4178ad(_0x5b66a7.categories);
      _0x1fb481(_0x5b66a7.tax);
      _0x153382(_0x5b66a7.categories[0]);
      const _0x267e55 = _0x5b66a7.vehicles.find(_0x1fb9e6 => _0x1fb9e6.category === _0x5b66a7.categories[0].id);
      _0x419490(_0x267e55.model);
      _0x433e5b("");
      _0x5b2cac(true);
      _0x2bb497(_0x5b66a7.selfPurchaseable);
    });
    _0x39fd87.register("showrooms:hud", async _0x18b6e1 => {
      _0x24d178(_0x18b6e1);
    });
  });
  return C(it, {
    name: "fade",
    get children() {
      return [C(le, {
        get when() {
          return _0x2bf293();
        },
        get children() {
          const _0x1c5a6c = Ri();
          const _0x2be611 = _0x1c5a6c.firstChild;
          const _0x4765b8 = _0x2be611.firstChild;
          p(_0x1c5a6c, C(xn, {}), _0x2be611);
          p(_0x4765b8, C(ui, {}), null);
          p(_0x4765b8, C(ti, {}), null);
          p(_0x2be611, C(Oi, {}), null);
          p(_0x1c5a6c, C(Wn, {}), null);
          L(() => g(_0x1c5a6c, _n.catalog));
          return _0x1c5a6c;
        }
      }), C(le, {
        get when() {
          return _0x3515a4();
        },
        get children() {
          return C(Bi, {});
        }
      })];
    }
  });
}
const qi = "_title_1oaji_1";
const Ui = "_description_1oaji_11";
const Zi = "_searchBar_1oaji_20";
const Hi = "_keybind_1oaji_50";
const Gi = "_text_1oaji_66";
const Ki = "_button_1oaji_69";
const se = {
  title: qi,
  description: Ui,
  searchBar: Zi,
  keybind: Hi,
  text: Gi,
  button: Ki
};
const Wi = I("<div class=\"items-between flex w-full flex-row justify-start gap-[2vh]\"><div class=\"flex flex-col items-start justify-start\"><div>SHOWROOM</div><div>HERE YOU CAN SEE</div></div><div><input type=\"text\" placeholder=\"Search...\"><svg width=\"1.29vh\" height=\"1.29vh\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.08581 0.0096725C3.31982 0.220966 1.87567 1.09786 0.922297 2.5377C-0.177474 4.19864 -0.302994 6.35914 0.595733 8.15872C1.29743 9.56382 2.5573 10.6076 4.08811 11.0521C4.65082 11.2155 4.92755 11.2511 5.6325 11.2508C6.12788 11.2506 6.33428 11.2395 6.53454 11.2024C7.40016 11.042 8.1257 10.7497 8.8011 10.2895L9.0903 10.0924L10.99 11.9915C12.4502 13.4512 12.9182 13.9035 13.0128 13.946C13.1561 14.0106 13.3861 14.0182 13.539 13.9636C13.7998 13.8704 13.9671 13.6461 13.9901 13.3586C14.0178 13.0131 14.1222 13.1365 11.9994 11.0064L10.0906 9.09104L10.3028 8.77419C10.6841 8.20488 10.9386 7.63483 11.0964 6.99652C11.7774 4.24228 10.3272 1.42454 7.69053 0.37863C7.37928 0.25517 6.92009 0.126894 6.5482 0.0595272C6.31141 0.0166226 5.31233 -0.0174165 5.08581 0.0096725ZM6.56187 1.5066C7.38392 1.70284 8.02934 2.06124 8.61329 2.64581C9.49496 3.52837 9.92375 4.68 9.83896 5.93751C9.74258 7.3669 8.90801 8.65781 7.62791 9.35756C6.47473 9.98794 4.95518 10.0117 3.76983 9.41786C3.07338 9.06899 2.52177 8.5815 2.09953 7.94182C1.28986 6.7151 1.18326 5.14153 1.81963 3.81006C2.39958 2.59664 3.55886 1.71201 4.88515 1.47081C5.32269 1.39124 6.15278 1.40894 6.56187 1.5066Z\" fill=\"#00F8B9\"></div><div><div>Exit</div><div>ESC");
function Yi() {
  const {
    searchInput: _0x46e161,
    setSearchInput: _0x4f310a
  } = z();
  return (() => {
    const _0x5eec47 = Wi();
    const _0x41519d = _0x5eec47.firstChild;
    const _0x442cad = _0x41519d.firstChild;
    const _0xaed168 = _0x442cad.nextSibling;
    const _0x293979 = _0x41519d.nextSibling;
    const _0x112533 = _0x293979.firstChild;
    const _0x1cb0d8 = _0x112533.nextSibling;
    const _0x17ab68 = _0x293979.nextSibling;
    const _0x453631 = _0x17ab68.firstChild;
    const _0x2fea5b = _0x453631.nextSibling;
    _0x112533.$$input = _0x59e121 => {
      _0x4f310a(_0x59e121.currentTarget.value);
    };
    _0x1cb0d8.style.setProperty("filter", "drop-shadow(0px 0.09259vh 1vh rgba(0, 248, 185, 0.55))");
    L(_0x44dff7 => {
      const _0x21712e = se.title;
      const _0x5baa12 = se.description;
      const _0x270951 = se.searchBar;
      const _0x3b0f90 = se.keybind;
      const _0x5e4bb4 = se.text;
      const _0x228ec2 = se.button;
      if (_0x21712e !== _0x44dff7._v$) {
        g(_0x442cad, _0x44dff7._v$ = _0x21712e);
      }
      if (_0x5baa12 !== _0x44dff7._v$2) {
        g(_0xaed168, _0x44dff7._v$2 = _0x5baa12);
      }
      if (_0x270951 !== _0x44dff7._v$3) {
        g(_0x293979, _0x44dff7._v$3 = _0x270951);
      }
      if (_0x3b0f90 !== _0x44dff7._v$4) {
        g(_0x17ab68, _0x44dff7._v$4 = _0x3b0f90);
      }
      if (_0x5e4bb4 !== _0x44dff7._v$5) {
        g(_0x453631, _0x44dff7._v$5 = _0x5e4bb4);
      }
      if (_0x228ec2 !== _0x44dff7._v$6) {
        g(_0x2fea5b, _0x44dff7._v$6 = _0x228ec2);
      }
      return _0x44dff7;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    L(() => _0x112533.value = _0x46e161());
    return _0x5eec47;
  })();
}
W(["input"]);
const Xi = "_nav_1dhkq_1";
const Qi = "_category_1dhkq_11";
const Ji = "_active_1dhkq_29";
const es = "_title_1dhkq_37";
const ts = "_icon_1dhkq_50";
const ns = "_description_1dhkq_65";
const Ce = {
  nav: Xi,
  category: Qi,
  active: Ji,
  title: es,
  icon: ts,
  description: ns
};
const is = I("<div><svg width=\"1.75vh\" height=\"1.66vh\" viewBox=\"0 0 19 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.43771 0.075161C7.70907 0.204766 6.97204 0.509243 6.50211 0.874826C6.2188 1.09523 5.7595 1.58287 5.57119 1.86321C5.20321 2.41102 4.91644 3.12308 4.75778 3.88296C4.61573 4.56315 4.59083 5.659 4.70303 6.28935C4.98902 7.8954 5.7368 9.58661 6.97747 11.4333C7.67347 12.4692 8.54081 13.4651 9.05396 13.8175C9.37533 14.0382 9.53763 14.0433 9.84492 13.8423C10.4226 13.4645 11.3394 12.3966 12.1189 11.1937C13.2406 9.46282 13.9649 7.76741 14.222 6.27058C14.2919 5.86394 14.3001 5.70885 14.2833 5.10702C14.2633 4.38952 14.2142 4.03152 14.0551 3.44224C13.6221 1.83863 12.6127 0.712265 11.191 0.246204C10.4464 0.0021196 9.26205 -0.0714473 8.43771 0.075161ZM10.0554 2.61585C10.5673 2.76204 11.0547 3.11828 11.3431 3.55705C11.4205 3.67483 11.5335 3.91558 11.5942 4.09195C11.6851 4.35619 11.705 4.47544 11.7072 4.76922C11.7122 5.44269 11.5179 5.92148 11.0431 6.40582C10.6981 6.75789 10.3605 6.94785 9.90877 7.04427C8.79766 7.28138 7.64515 6.58403 7.29639 5.4636C7.18069 5.0919 7.18333 4.51706 7.30244 4.1499C7.68867 2.95917 8.8979 2.28532 10.0554 2.61585ZM4.12949 10.2676C3.40516 10.4767 2.94018 10.653 2.34553 10.9441C1.67692 11.2714 1.2203 11.586 0.821731 11.9939C0.319249 12.5082 0.0982988 12.9324 0.0190613 13.5348C-0.150935 14.8272 0.819613 15.9872 2.79152 16.8484C3.73783 17.2617 5.2028 17.6424 6.56385 17.8287C7.69867 17.984 7.97187 18 9.49995 18C11.028 18 11.3012 17.984 12.436 17.8287C15.6887 17.3834 18.113 16.2144 18.7761 14.7715C19.19 13.8709 19.0271 12.9403 18.3126 12.1232C17.6498 11.3652 16.3563 10.6783 14.7553 10.2341C14.4875 10.1598 14.2584 10.0991 14.2462 10.0991C14.2339 10.0991 14.1452 10.2469 14.049 10.4275C13.9529 10.6081 13.7931 10.8934 13.694 11.0614C13.5949 11.2294 13.5139 11.3814 13.514 11.3992C13.514 11.417 13.6855 11.4712 13.8949 11.5197C15.6268 11.9205 17.0993 12.7197 17.4486 13.4483C17.6543 13.8776 17.4403 14.3595 16.8449 14.8078C15.5926 15.7505 13.406 16.3544 10.6521 16.5179C7.64318 16.6965 4.44781 16.1588 2.73354 15.1853C1.69587 14.596 1.28824 13.9971 1.55126 13.4483C1.66829 13.2043 1.99836 12.8648 2.34583 12.6313C2.95683 12.2208 4.01899 11.7863 5.00288 11.5445C5.23796 11.4867 5.43542 11.4353 5.4417 11.4303C5.44794 11.4252 5.38276 11.3051 5.29675 11.1635C5.21079 11.0219 5.04945 10.7371 4.93821 10.5307C4.82698 10.3243 4.72496 10.1444 4.71147 10.131C4.69801 10.1177 4.4361 10.1791 4.12949 10.2676Z\" fill=\"white\" fill-opacity=\"0.63\"></svg><div>");
const ss = I("<div>");
function vt(_0x3fb1f1) {
  const {
    activeSpot: _0x1b6a00,
    setActiveSpot: _0x81edbb,
    isSelling: _0x554552
  } = z();
  return (() => {
    const _0x2b6c96 = is();
    const _0x2aafd4 = _0x2b6c96.firstChild;
    const _0x4a05e4 = _0x2aafd4.nextSibling;
    _0x2b6c96.$$click = () => {
      _0x81edbb(_0x3fb1f1.index);
      _0x39fd87.execute("showrooms:changeDisplayLocation", _0x3fb1f1.index);
    };
    p(_0x4a05e4, () => _0x3fb1f1.label);
    L(_0x173bcf => {
      const _0x20cb30 = Ce.category;
      const _0x40235a = {
        [Ce.active]: _0x1b6a00() === _0x3fb1f1.index
      };
      const _0x1d443b = Ce.title;
      if (_0x20cb30 !== _0x173bcf._v$) {
        g(_0x2b6c96, _0x173bcf._v$ = _0x20cb30);
      }
      _0x173bcf._v$2 = ye(_0x2b6c96, _0x40235a, _0x173bcf._v$2);
      if (_0x1d443b !== _0x173bcf._v$3) {
        g(_0x4a05e4, _0x173bcf._v$3 = _0x1d443b);
      }
      return _0x173bcf;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x2b6c96;
  })();
}
function os() {
  const {
    activeSpot: _0x59a686,
    setActiveSpot: _0x52679d,
    isSelling: _0x3e0284
  } = z();
  const [_0x323b89, _0x51453f] = j([]);
  Ie(async () => {
    const _0x183906 = await _0x39fd87.execute("showrooms:getSpots");
    if (_0x183906) {
      _0x51453f(_0x183906);
    }
  });
  return (() => {
    const _0x4d6326 = ss();
    p(_0x4d6326, C(Gt, {
      get children() {
        return [C(rt, {
          get when() {
            return !_0x3e0284();
          },
          get children() {
            return C(re, {
              get each() {
                return _0x323b89();
              },
              children: (_0x248870, _0x112e70) => C(vt, {
                get index() {
                  return _0x112e70();
                },
                get label() {
                  return "Spot #" + (_0x112e70() + 1);
                }
              })
            });
          }
        }), C(rt, {
          get when() {
            return _0x3e0284();
          },
          get children() {
            return C(vt, {
              index: 0,
              label: "Sell"
            });
          }
        })];
      }
    }));
    L(() => g(_0x4d6326, Ce.nav));
    return _0x4d6326;
  })();
}
W(["click"]);
const Fe = (_0x3cb547, _0x4d668a) => {
  const _0x332991 = [];
  for (let _0x44ca33 = 0; _0x44ca33 < _0x4d668a; _0x44ca33 += 1) {
    _0x332991.push(_0x3cb547 + _0x44ca33);
  }
  return _0x332991;
};
const xe = _0x57a0d6 => Number.isFinite(_0x57a0d6) ? _0x57a0d6 : 0;
const rs = _0x4aaa24 => _0x4aaa24.matches(":focus-within");
const ls = _0x147748 => _0x147748.querySelector(":focus");
const cs = _0x5c344d => {
  const _0x2a2bbc = ls(_0x5c344d);
  if (_0x2a2bbc) {
    _0x2a2bbc.click();
    return true;
  } else {
    return false;
  }
};
const as = (_0x2b6818, _0x415bdb) => {
  let _0x4408b9 = _0x415bdb;
  let _0x395707 = 0;
  let _0x2552cf = 0;
  while (_0x4408b9 && _0x2b6818 !== _0x4408b9) {
    const {
      offsetTop: _0x41ca2d,
      offsetLeft: _0xd5279,
      offsetParent: _0x4beb0c
    } = _0x4408b9;
    if (_0x2b6818.contains(_0x4beb0c)) {
      _0x395707 += _0x41ca2d;
      _0x2552cf += _0xd5279;
    } else {
      _0x395707 += _0x41ca2d - _0x2b6818.offsetTop;
      _0x2552cf += _0xd5279 - _0x2b6818.offsetLeft;
      break;
    }
    _0x4408b9 = _0x4beb0c;
  }
  return {
    offsetTop: _0x395707,
    offsetLeft: _0x2552cf
  };
};
const us = $t();
const fs = _0x5c8817 => {
  let _0x5c4e7a = 0;
  let _0x4c4f24 = 0;
  if (_0x5c8817.borderBoxSize) {
    const {
      borderBoxSize: _0x5d3fdb
    } = _0x5c8817;
    const _0x49f8db = Array.isArray(_0x5d3fdb) ? _0x5d3fdb[0] : _0x5d3fdb;
    _0x5c4e7a = _0x49f8db.inlineSize;
    _0x4c4f24 = _0x49f8db.blockSize;
  } else {
    const _0x1e1ae6 = _0x5c8817.target.getBoundingClientRect();
    _0x5c4e7a = _0x1e1ae6.width;
    _0x4c4f24 = _0x1e1ae6.height;
  }
  return {
    width: _0x5c4e7a,
    height: _0x4c4f24
  };
};
const ze = (_0x535e79, _0x38e3f0, _0x5b9dc7) => {
  const [_0x2d514e, _0x291825] = _0x5b9dc7 ? [_0x535e79, _0x38e3f0] : [_0x38e3f0, _0x535e79];
  return {
    main: _0x2d514e,
    cross: _0x291825
  };
};
const qe = {
  main: 0,
  cross: 0
};
const ds = (_0x3ba74a, _0x39a800) => _0x3ba74a.cross === _0x39a800.cross;
const vs = _0x339aad => {
  const _0x32dbd2 = yt(us);
  const [_0x4bb49e, _0x1580eb] = j(undefined);
  const _0x4c3b6c = () => _0x339aad.scrollTarget || _0x32dbd2?.scrollTarget;
  const _0x3b1e1f = F(() => (_0x339aad.direction || "vertical") === "horizontal");
  const [_0x5aa877, _0x17dd54] = $e({
    isMeasured: false,
    mainAxisScrollValue: 0,
    target: {
      ...qe
    },
    container: {
      ...qe,
      offsetMain: 0,
      offsetCross: 0
    },
    itemSize: {
      ...qe
    }
  });
  const _0x5373c8 = _0x41c005 => {
    const _0x22360f = _0x41c005.target;
    const _0x5beb8d = _0x4c3b6c();
    const _0x44d204 = _0x4bb49e();
    const _0x1a4200 = _0x3b1e1f();
    const _0x294c93 = fs(_0x41c005);
    const _0x480faa = ze(_0x294c93.width, _0x294c93.height, _0x1a4200);
    if (_0x22360f === _0x5beb8d) {
      _0x17dd54("target", _0x480faa);
    } else if (_0x22360f === _0x44d204 && (!ds(_0x5aa877.container, _0x480faa) || !_0x5aa877.isMeasured)) {
      const _0x47a052 = as(_0x5beb8d, _0x44d204);
      const _0x96c39a = ze(_0x47a052.offsetLeft, _0x47a052.offsetTop, _0x1a4200);
      _0x17dd54("container", {
        ..._0x480faa,
        offsetMain: _0x96c39a.main,
        offsetCross: _0x96c39a.cross
      });
    }
  };
  const _0x523131 = () => {
    const _0x261156 = _0x4c3b6c();
    if (_0x261156) {
      const _0x3277f2 = _0x3b1e1f() ? _0x261156.scrollLeft : _0x261156.scrollTop;
      return Math.floor(_0x3277f2);
    }
    return 0;
  };
  const _0x180432 = new ResizeObserver(_0x5506a8 => {
    Pe(() => {
      _0x5506a8.forEach(_0x37f58c => _0x5373c8(_0x37f58c));
      _0x17dd54({
        isMeasured: true,
        mainAxisScrollValue: _0x523131()
      });
    });
  });
  te(() => {
    if (!_0x5aa877.isMeasured) {
      return;
    }
    const _0x221709 = _0x3b1e1f();
    const _0x173a48 = _0x339aad.itemSize;
    let _0x45b7ba;
    if (typeof _0x173a48 == "function") {
      _0x45b7ba = _0x173a48(_0x5aa877.container.cross, _0x221709);
    } else {
      _0x45b7ba = _0x173a48;
    }
    const _0x5b7403 = ze(_0x45b7ba.width || 0, _0x45b7ba.height || 0, _0x221709);
    _0x17dd54("itemSize", _0x5b7403);
  });
  const _0x4d65f5 = () => {
    _0x17dd54("mainAxisScrollValue", _0x523131());
  };
  Qe(() => {
    const _0x440fcb = _0x4c3b6c();
    const _0x129e2c = _0x4bb49e();
    if (!!_0x440fcb && !!_0x129e2c) {
      _0x440fcb.addEventListener("scroll", _0x4d65f5);
      _0x180432.observe(_0x440fcb);
      _0x180432.observe(_0x129e2c);
      je(() => {
        _0x17dd54("isMeasured", false);
        _0x440fcb.removeEventListener("scroll", _0x4d65f5);
        _0x180432.unobserve(_0x440fcb);
        _0x180432.unobserve(_0x129e2c);
      });
    }
  });
  return {
    containerEl: _0x4bb49e,
    setContainerRefEl: _0x1580eb,
    isDirectionHorizontal: _0x3b1e1f,
    measurements: _0x5aa877
  };
};
const hs = 1;
const ms = _0x37e793 => {
  const {
    total: _0x6267a4,
    focusPosition: _0x436724,
    positionCount: _0x1a3b1f,
    startPosition: _0x2f4c69,
    prevPositions: _0xc9a760,
    prevStartPosition: _0x5b7be7
  } = _0x37e793;
  const _0x1ed59d = _0xc9a760.length;
  if (_0x6267a4 <= _0x1a3b1f) {
    if (_0x1ed59d === _0x1a3b1f && _0x5b7be7 === _0x2f4c69) {
      return _0xc9a760;
    } else {
      return Fe(0, _0x1a3b1f);
    }
  }
  const _0x192e3f = _0x2f4c69 + _0x1a3b1f;
  const _0x84e01f = _0x4882bc => _0x4882bc < _0x2f4c69 || _0x4882bc >= _0x192e3f;
  const _0x2287be = () => {
    if (_0x84e01f(_0x436724)) {
      return _0x436724;
    }
    let _0x48cfac;
    if (_0x192e3f < _0x6267a4) {
      _0x48cfac = _0x192e3f;
    } else {
      _0x48cfac = _0x2f4c69 - 1;
    }
    return _0x48cfac;
  };
  const _0x2ccc0b = _0x1a3b1f + hs;
  if (_0x1ed59d !== _0x2ccc0b) {
    const _0x3f973c = Fe(_0x2f4c69, _0x1a3b1f);
    _0x3f973c.push(_0x2287be());
    return _0x3f973c;
  }
  const _0x41321f = [];
  for (let _0x2939c8 = 0; _0x2939c8 < _0x1a3b1f; _0x2939c8 += 1) {
    const _0x321cda = _0x2f4c69 + _0x2939c8;
    if (!_0xc9a760.includes(_0x321cda)) {
      _0x41321f.push(_0x321cda);
    }
  }
  const _0x939eff = _0x2287be();
  if (!_0xc9a760.includes(_0x939eff)) {
    _0x41321f.push(_0x939eff);
  }
  return _0xc9a760.map(_0x131808 => _0x84e01f(_0x131808) && _0x131808 !== _0x939eff ? _0x41321f.pop() : _0x131808);
};
const _s = _0x39612e => Number.isInteger(_0x39612e) ? _0x39612e : 0;
const gs = (_0x38aaa9, _0x455c0d, _0x19ab5a) => {
  const [_0x1f3f47, _0x22591f] = $e({
    overscan: 0,
    positionCount: 0,
    maxScrollPosition: 0,
    currentPosition: 0
  });
  te(() => {
    if (!_0x38aaa9.isMeasured) {
      return;
    }
    const _0x4c25bb = _0x455c0d.totalItemCount;
    const _0x13a0ab = _0x38aaa9.itemSize.main;
    const _0x30564f = _0x38aaa9.target.main;
    N(() => {
      const _0x2202dd = _0x19ab5a() ?? Math.max(Math.ceil(180 / _0x13a0ab), 2);
      const _0x2328c9 = xe(_0x2202dd);
      _0x22591f("overscan", _0x2328c9);
      const _0x50c5ea = Math.ceil(_0x30564f / _0x13a0ab);
      const _0x5561c9 = _s(Math.min(_0x50c5ea + _0x2328c9 * 2, _0x4c25bb));
      _0x22591f("positionCount", _0x5561c9);
      _0x22591f("maxScrollPosition", _0x4c25bb - _0x5561c9);
    });
  });
  te(() => {
    if (!_0x38aaa9.isMeasured) {
      return;
    }
    const _0xa0eae3 = _0x38aaa9.mainAxisScrollValue - _0x38aaa9.container.offsetMain;
    const _0x5640b5 = Math.floor(_0xa0eae3 / _0x38aaa9.itemSize.main) - _0x1f3f47.overscan;
    const _0x4ba1f8 = Math.min(Math.max(0, _0x5640b5), _0x1f3f47.maxScrollPosition);
    _0x22591f("currentPosition", _0x4ba1f8);
  });
  let _0xb11cc0 = 0;
  return F((_0x53317d = []) => {
    if (!_0x38aaa9.isMeasured) {
      return _0x53317d;
    }
    const _0x28a470 = _0x1f3f47.currentPosition;
    const _0x485cf3 = ms({
      total: _0x455c0d.totalItemCount,
      focusPosition: _0x455c0d.focusPosition,
      positionCount: _0x1f3f47.positionCount,
      startPosition: _0x28a470,
      prevStartPosition: _0xb11cc0,
      prevPositions: _0x53317d
    });
    _0xb11cc0 = _0x28a470;
    return _0x485cf3;
  });
};
const $s = I("<div>");
const ys = Math.random().toString(36).slice(2, Infinity);
const Xe = "virtual-container-" + ys;
let he;
const ws = () => {
  if (!he) {
    he = document.createElement("style");
    he.type = "text/css";
    he.textContent = "\n      ." + Xe + " {\n        position: relative !important;\n        flex-shrink: 0 !important;\n      }\n      ." + Xe + " > * {\n        will-change: transform !important;\n        box-sizing: border-box !important;\n        contain: strict !important;\n        position: absolute !important;\n        top: 0 !important;\n        left: 0 !important;\n      }\n    ";
    document.head.appendChild(he);
  }
};
function bs(_0xcc1675) {
  ws();
  const [_0x382632, _0x41dafc] = $e({
    focusPosition: 0,
    mainAxis: {
      totalItemCount: 0,
      focusPosition: 0,
      scrollValue: 0
    },
    crossAxis: {
      totalItemCount: 0
    }
  });
  const {
    containerEl: _0x3055d4,
    setContainerRefEl: _0x21e5d6,
    isDirectionHorizontal: _0x2e5774,
    measurements: _0xea982b
  } = vs(_0xcc1675);
  const _0x24fcb5 = () => _0xcc1675.items && _0xcc1675.items.length || 0;
  te(() => {
    if (!_0xea982b.isMeasured) {
      return;
    }
    const _0x1f796a = xe(_0xcc1675.crossAxisCount?.(_0xea982b, _0x24fcb5()) || 0);
    _0x41dafc("crossAxis", {
      totalItemCount: Math.max(1, _0x1f796a)
    });
  });
  te(() => {
    if (!_0xea982b.isMeasured) {
      return;
    }
    const _0x4524bd = _0x24fcb5();
    const _0x19fdc8 = _0x382632.crossAxis.totalItemCount;
    const _0x1d29bb = Math.ceil(_0x4524bd / _0x19fdc8);
    _0x41dafc("mainAxis", {
      totalItemCount: xe(_0x1d29bb)
    });
    _0x41dafc("crossAxis", {
      totalItemCount: _0x19fdc8,
      positions: Fe(0, _0x382632.crossAxis.totalItemCount)
    });
  });
  te(() => {
    const _0x34d69b = Math.floor(_0x382632.focusPosition / _0x382632.crossAxis.totalItemCount);
    _0x41dafc("mainAxis", "focusPosition", xe(_0x34d69b));
  });
  const _0x5ab7f3 = gs(_0xea982b, _0x382632.mainAxis, () => _0xcc1675.overscan);
  const _0x27a6c2 = () => {
    const _0x57f560 = _0x382632.mainAxis.totalItemCount * _0xea982b.itemSize.main;
    const _0x118cb5 = _0x2e5774() ? "width" : "height";
    const _0x5139ac = _0x2e5774() ? "height" : "width";
    return {
      [_0x118cb5]: _0x57f560 + "px",
      [_0x5139ac]: "100%"
    };
  };
  const _0x7720f5 = (_0x2a2446, _0x5f3ac2 = 0) => {
    const _0x5c78d2 = _0xea982b.itemSize;
    const _0x56ecbe = _0x5c78d2.main * _0x2a2446;
    const _0x5c0425 = _0x5c78d2.cross * _0x5f3ac2;
    let _0x59a8eb = _0x5c0425;
    let _0x1c5e18 = _0x56ecbe;
    let _0x57e523 = _0x5c78d2.cross;
    let _0x40abf8 = _0x5c78d2.main;
    if (_0x2e5774()) {
      _0x59a8eb = _0x56ecbe;
      _0x1c5e18 = _0x5c0425;
      _0x57e523 = _0x5c78d2.main;
      _0x40abf8 = _0x5c78d2.cross;
    }
    return {
      transform: "translate(" + _0x59a8eb + "px, " + _0x1c5e18 + "px)",
      width: _0x57e523 ? _0x57e523 + "px" : "",
      height: _0x40abf8 ? _0x40abf8 + "px" : ""
    };
  };
  const _0x3161fe = F(() => Fe(0, _0x382632.crossAxis.totalItemCount));
  const _0x50fc9b = F(() => _0xcc1675.items || []);
  const _0x4e23be = (_0x4fd7fd, _0x37b416) => _0x4fd7fd * _0x382632.crossAxis.totalItemCount + _0x37b416;
  const _0x34016d = _0x41296d => C(ot, {
    get each() {
      return _0x5ab7f3();
    },
    children: _0x3e8069 => {
      const _0x2e02b9 = F(() => {
        const _0x27f9ae = _0x3e8069();
        const _0x9cb453 = _0x41296d.crossPos;
        if (_0x9cb453 === undefined) {
          return _0x27f9ae;
        } else {
          return _0x4e23be(_0x27f9ae, _0x9cb453);
        }
      });
      return C(le, {
        get when() {
          return _0x2e02b9() < _0x50fc9b().length;
        },
        get children() {
          return C(hn, {
            get component() {
              return _0xcc1675.children;
            },
            get items() {
              return _0x50fc9b();
            },
            get item() {
              return _0x50fc9b()[_0x2e02b9()];
            },
            get index() {
              return _0x2e02b9();
            },
            get tabIndex() {
              if (_0x2e02b9() === _0x382632.focusPosition) {
                return 0;
              } else {
                return -1;
              }
            },
            get style() {
              return _0x7720f5(_0x3e8069(), _0x41296d.crossPos);
            }
          });
        }
      });
    }
  });
  const _0x29cad0 = Je(() => C(le, {
    get when() {
      return _0x382632.crossAxis.totalItemCount > 1;
    },
    get fallback() {
      return C(_0x34016d, {});
    },
    get children() {
      return C(ot, {
        get each() {
          return _0x3161fe();
        },
        children: _0x21a2ad => C(_0x34016d, {
          get crossPos() {
            return _0x21a2ad();
          }
        })
      });
    }
  }));
  const _0x5b486c = () => {
    const _0x292d01 = _0x3161fe();
    const _0x545e15 = _0x5ab7f3();
    const _0x42939a = _0x29cad0().findIndex(_0x20c3bc => _0x20c3bc?.matches(":focus-within, :focus"));
    if (_0x42939a === -1) {
      return -1;
    }
    if (_0x382632.crossAxis.totalItemCount > 1) {
      const _0x23bee2 = Math.floor(_0x42939a / _0x545e15.length);
      const _0x589494 = _0x42939a % _0x545e15.length;
      const _0x373426 = _0x292d01[_0x23bee2];
      const _0x3877d3 = _0x545e15[_0x589494];
      return _0x4e23be(_0x3877d3, _0x373426);
    }
    return _0x545e15[_0x42939a];
  };
  const _0x3a4ff2 = (_0x4f564c, _0x4f4802) => {
    const _0x54283d = _0x382632.focusPosition;
    let _0x582163 = _0x54283d % _0x382632.crossAxis.totalItemCount;
    let _0x56c883 = Math.floor(_0x54283d / _0x382632.crossAxis.totalItemCount);
    if (_0x4f4802) {
      _0x56c883 += _0x4f564c;
    } else {
      _0x582163 += _0x4f564c;
    }
    const _0x2c3b82 = _0x4e23be(_0x56c883, _0x582163);
    if (_0x2c3b82 < 0 || _0x2c3b82 >= _0x24fcb5()) {
      return;
    }
    const _0x58d6f8 = _0x3161fe().indexOf(_0x582163);
    if (_0x58d6f8 === -1) {
      return;
    }
    _0x41dafc("focusPosition", _0x2c3b82);
    const _0x34e9a2 = _0x29cad0();
    const _0xcf6bc3 = _0x5ab7f3();
    const _0xf881a2 = _0xcf6bc3.indexOf(_0x56c883);
    if (_0xf881a2 === -1) {
      return;
    }
    const _0x49fe70 = _0x58d6f8 * _0xcf6bc3.length + _0xf881a2;
    const _0xa3e454 = _0x34e9a2[_0x49fe70];
    if (_0xa3e454) {
      queueMicrotask(() => {
        _0xa3e454.focus();
        _0xa3e454.scrollIntoView({
          block: "nearest"
        });
      });
    }
  };
  const _0x498745 = _0x1e6a53 => {
    const {
      code: _0x27cff4
    } = _0x1e6a53;
    const _0x245533 = _0x27cff4 === "ArrowUp";
    const _0x50234a = _0x27cff4 === "ArrowDown";
    const _0x3d81c2 = _0x27cff4 === "ArrowLeft";
    const _0x5535f0 = _0x27cff4 === "ArrowRight";
    const _0x4b876b = _0x245533 || _0x50234a;
    const _0x2f4c2f = _0x3d81c2 || _0x5535f0;
    if (_0x4b876b || _0x2f4c2f) {
      _0x3a4ff2(_0x50234a || _0x5535f0 ? 1 : -1, _0x2e5774() ? _0x2f4c2f : _0x4b876b);
    } else if (_0x27cff4 === "Enter") {
      if (!cs(_0x3055d4())) {
        return;
      }
    } else {
      return;
    }
    _0x1e6a53.preventDefault();
  };
  const _0x5cfc79 = () => {
    const _0x3acd62 = _0x5b486c();
    _0x41dafc("focusPosition", _0x3acd62 === -1 ? 0 : _0x3acd62);
  };
  const _0x31efa5 = async () => {
    queueMicrotask(() => {
      if (!rs(_0x3055d4())) {
        _0x41dafc("focusPosition", 0);
      }
    });
  };
  return (() => {
    const _0x2ca284 = $s();
    _0x2ca284.$$focusout = _0x31efa5;
    _0x2ca284.$$focusin = _0x5cfc79;
    _0x2ca284.$$keydown = _0x498745;
    tt(_0x21e5d6, _0x2ca284);
    p(_0x2ca284, _0x29cad0);
    L(_0x2293a5 => {
      const _0x5f1974 = Xe + " " + (_0xcc1675.className || "");
      const _0x3fb0a5 = _0x27a6c2();
      const _0x5c47a8 = _0xcc1675.role || "list";
      if (_0x5f1974 !== _0x2293a5._v$) {
        _0x2ca284.className = _0x2293a5._v$ = _0x5f1974;
      }
      _0x2293a5._v$2 = et(_0x2ca284, _0x3fb0a5, _0x2293a5._v$2);
      if (_0x5c47a8 !== _0x2293a5._v$3) {
        ce(_0x2ca284, "role", _0x2293a5._v$3 = _0x5c47a8);
      }
      return _0x2293a5;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x2ca284;
  })();
}
W(["keydown", "focusin", "focusout"]);
const Cs = "_vehicles_13qew_1";
const xs = "_vehicle_13qew_1";
const Ss = "_header_13qew_26";
const ps = "_center_13qew_40";
const As = "_icon_13qew_47";
const Ps = "_bar_13qew_57";
const Es = "_button_13qew_63";
const ee = {
  vehicles: Cs,
  vehicle: xs,
  header: Ss,
  center: ps,
  icon: As,
  bar: Ps,
  button: Es
};
const Ls = I("<div class=\"flex flex-col items-start justify-start\"><div><div></div><div><div></div></div><div></div></div><div><svg width=\"2.4vh\" height=\"2.5vh\" viewBox=\"0 0 26 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11 8.29163L15.7348 13.5L11 18.7083\" stroke=\"white\" stroke-width=\"1.5\"></path><path d=\"M12.5 0.999954L23.4375 13.5L12.5 26M1.56247 5.54541L8.12497 13.5L1.56247 21.4545\" stroke=\"url(#paint0_radial_5046_284)\" stroke-opacity=\"0.45\" stroke-width=\"3\"></path><defs><radialGradient id=\"paint0_radial_5046_284\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(12.5 13.5) rotate(2.20339) scale(11.8212 11.1641)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"></radialGradient><radialGradient id=\"paint0_radial_5046_259\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(12.5 13.5) rotate(2.20339) scale(11.8212 11.1641)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00F8B9\" stop-opacity=\"0\">");
const ks = I("<div>");
const Ts = _0x1535f5 => {
  const {
    activeSpot: _0x3c0387,
    isSelling: _0x3597ab
  } = z();
  return (() => {
    const _0xf8417d = Ls();
    const _0x671ee1 = _0xf8417d.firstChild;
    const _0x479cba = _0x671ee1.firstChild;
    const _0x18647b = _0x479cba.nextSibling;
    const _0x2facdf = _0x18647b.firstChild;
    const _0x22797e = _0x18647b.nextSibling;
    const _0x3bf568 = _0x671ee1.nextSibling;
    const _0x1fed2e = _0x3bf568.firstChild;
    p(_0x479cba, () => _0x1535f5.item.name);
    _0x3bf568.$$click = () => {
      if (_0x3597ab()) {
        _0x39fd87.execute("showrooms:sendRequest", _0x1535f5.item.model);
      } else {
        _0x39fd87.execute("showrooms:changeDisplayVehicle", _0x3c0387(), _0x1535f5.item.model);
      }
    };
    p(_0x3bf568, () => _0x3597ab() ? "Send Request" : "Display", _0x1fed2e);
    L(_0x4ee3fc => {
      const _0x29c606 = {
        ..._0x1535f5.style,
        width: "11.85vh",
        gap: "1vh"
      };
      const _0x223e67 = ee.vehicle;
      const _0x3c9746 = ee.header;
      const _0x5d3e5f = ee.center;
      const _0x4a3ce0 = ee.icon;
      const _0x440a11 = "url(" + Ot + "/showroom/" + _0x1535f5.item.model + ".webp)";
      const _0x4b1ebc = ee.bar;
      const _0x470eb7 = ee.button;
      _0x4ee3fc._v$ = et(_0xf8417d, _0x29c606, _0x4ee3fc._v$);
      if (_0x223e67 !== _0x4ee3fc._v$2) {
        g(_0x671ee1, _0x4ee3fc._v$2 = _0x223e67);
      }
      if (_0x3c9746 !== _0x4ee3fc._v$3) {
        g(_0x479cba, _0x4ee3fc._v$3 = _0x3c9746);
      }
      if (_0x5d3e5f !== _0x4ee3fc._v$4) {
        g(_0x18647b, _0x4ee3fc._v$4 = _0x5d3e5f);
      }
      if (_0x4a3ce0 !== _0x4ee3fc._v$5) {
        g(_0x2facdf, _0x4ee3fc._v$5 = _0x4a3ce0);
      }
      if (_0x440a11 !== _0x4ee3fc._v$6) {
        if ((_0x4ee3fc._v$6 = _0x440a11) != null) {
          _0x2facdf.style.setProperty("background-image", _0x440a11);
        } else {
          _0x2facdf.style.removeProperty("background-image");
        }
      }
      if (_0x4b1ebc !== _0x4ee3fc._v$7) {
        g(_0x22797e, _0x4ee3fc._v$7 = _0x4b1ebc);
      }
      if (_0x470eb7 !== _0x4ee3fc._v$8) {
        g(_0x3bf568, _0x4ee3fc._v$8 = _0x470eb7);
      }
      return _0x4ee3fc;
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
    return _0xf8417d;
  })();
};
function Os() {
  let _0x38734a;
  const _0xebab6c = _0x12530b => _0x12530b * 0.01 * window.innerHeight;
  const {
    vehicles: _0x3532e9,
    searchInput: _0x23d2a7
  } = z();
  return (() => {
    const _0x6f37d7 = ks();
    const _0x3a4322 = _0x38734a;
    if (typeof _0x3a4322 == "function") {
      tt(_0x3a4322, _0x6f37d7);
    } else {
      _0x38734a = _0x6f37d7;
    }
    p(_0x6f37d7, C(bs, {
      get items() {
        return _0x3532e9.filter(_0x5487e3 => _0x23d2a7() === "" ? true : _0x5487e3.name.toLowerCase().includes(_0x23d2a7().toLowerCase()));
      },
      scrollTarget: _0x38734a,
      get itemSize() {
        return {
          height: _0xebab6c(19),
          width: _0xebab6c(13.2)
        };
      },
      crossAxisCount: _0x536b5a => Math.floor(3),
      overscan: 1,
      children: _0x41231c => C(Ts, Zt(_0x41231c, {
        containerRef: _0x38734a
      }))
    }));
    L(() => g(_0x6f37d7, ee.vehicles));
    return _0x6f37d7;
  })();
}
W(["click"]);
const Fs = "_management_sgm3k_1";
const Ms = "_container_sgm3k_14";
const ht = {
  management: Fs,
  container: Ms
};
const Is = I("<div><div><div class=\"items-between flex h-full w-full flex-row justify-start gap-[2.5vh]\">");
function js() {
  const [_0x492e30, _0x67befd] = j(false);
  const {
    setVehicles: _0x22fe26,
    setActiveVehicle: _0x309692,
    setActiveSpot: _0x414060,
    setIsSelling: _0x11a771
  } = z();
  Ie(() => {
    _0x39fd87.register("showrooms:closeManagement", async () => {
      _0x22fe26([]);
      _0x67befd(false);
    });
    _0x39fd87.register("showrooms:show:management", async (_0xc4fd6e, _0x5deba7) => {
      _0x22fe26(_0xc4fd6e.vehicles);
      _0x414060(0);
      _0x309692(_0xc4fd6e.vehicles[0].model);
      _0x11a771(_0x5deba7 ?? false);
      _0x67befd(true);
    });
  });
  return C(it, {
    name: "slide-right",
    get children() {
      return C(le, {
        get when() {
          return _0x492e30();
        },
        get children() {
          const _0x4aa954 = Is();
          const _0x308de2 = _0x4aa954.firstChild;
          const _0x84e97c = _0x308de2.firstChild;
          p(_0x308de2, C(Yi, {}), _0x84e97c);
          p(_0x84e97c, C(os, {}), null);
          p(_0x84e97c, C(Os, {}), null);
          L(_0x5cb1e9 => {
            const _0x258c62 = ht.management;
            const _0x29d2da = ht.container;
            if (_0x258c62 !== _0x5cb1e9._v$) {
              g(_0x4aa954, _0x5cb1e9._v$ = _0x258c62);
            }
            if (_0x29d2da !== _0x5cb1e9._v$2) {
              g(_0x308de2, _0x5cb1e9._v$2 = _0x29d2da);
            }
            return _0x5cb1e9;
          }, {
            _v$: undefined,
            _v$2: undefined
          });
          return _0x4aa954;
        }
      });
    }
  });
}
const Ot = "https://assets.nopixel.net/dev/images";
function Ds() {
  const _0x2d4d67 = _0x32a9ca => {
    if (_0x32a9ca.key === "Escape") {
      _0x39fd87.execute("showrooms:close");
    }
  };
  Ie(async () => {
    document.addEventListener("keydown", _0x2d4d67);
  });
  je(() => {
    document.removeEventListener("keydown", _0x2d4d67);
  });
  return [C(zi, {}), C(js, {})];
}
on(() => C(jn, {
  get children() {
    return C(Ds, {});
  }
}), document.getElementById("root"));