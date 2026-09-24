import './style.css';
import { N as _0x46529e } from "./v-packages.js";
(function () {
  const _0x332bae = document.createElement("link").relList;
  if (_0x332bae && _0x332bae.supports && _0x332bae.supports("modulepreload")) {
    return;
  }
  for (const _0x2094a9 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x2de314(_0x2094a9);
  }
  new MutationObserver(_0x4f807c => {
    for (const _0x42ad5e of _0x4f807c) {
      if (_0x42ad5e.type === "childList") {
        for (const _0x9a010b of _0x42ad5e.addedNodes) {
          if (_0x9a010b.tagName === "LINK" && _0x9a010b.rel === "modulepreload") {
            _0x2de314(_0x9a010b);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x317dba(_0x425925) {
    const _0x139436 = {};
    if (_0x425925.integrity) {
      _0x139436.integrity = _0x425925.integrity;
    }
    if (_0x425925.referrerPolicy) {
      _0x139436.referrerPolicy = _0x425925.referrerPolicy;
    }
    if (_0x425925.crossOrigin === "use-credentials") {
      _0x139436.credentials = "include";
    } else if (_0x425925.crossOrigin === "anonymous") {
      _0x139436.credentials = "omit";
    } else {
      _0x139436.credentials = "same-origin";
    }
    return _0x139436;
  }
  function _0x2de314(_0x3972c6) {
    if (_0x3972c6.ep) {
      return;
    }
    _0x3972c6.ep = true;
    const _0x1bfca7 = _0x317dba(_0x3972c6);
    fetch(_0x3972c6.href, _0x1bfca7);
  }
})();
const qt = (_0x553849, _0x3116b7) => _0x553849 === _0x3116b7;
const R = Symbol("solid-proxy");
const yt = Symbol("solid-track");
const ie = {
  equals: qt
};
let pt = jt;
const L = 1;
const le = 2;
const Tt = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var b = null;
let we = null;
let y = null;
let A = null;
let P = null;
let ve = 0;
function Zt(_0x505aed, _0x17aeba) {
  const _0x121816 = y;
  const _0x3eaf1e = b;
  const _0x4c0984 = _0x505aed.length === 0;
  const _0x3c7733 = _0x4c0984 ? Tt : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x17aeba === undefined ? _0x3eaf1e : _0x17aeba
  };
  const _0x47f444 = _0x4c0984 ? _0x505aed : () => _0x505aed(() => E(() => ue(_0x3c7733)));
  b = _0x3c7733;
  y = null;
  try {
    return U(_0x47f444, true);
  } finally {
    y = _0x121816;
    b = _0x3eaf1e;
  }
}
function X(_0x1c8e36, _0x23f8a4) {
  _0x23f8a4 = _0x23f8a4 ? Object.assign({}, ie, _0x23f8a4) : ie;
  const _0x41b97e = {
    value: _0x1c8e36,
    observers: null,
    observerSlots: null,
    comparator: _0x23f8a4.equals || undefined
  };
  const _0x4c3ecf = _0x23d9ed => {
    if (typeof _0x23d9ed == "function") {
      _0x23d9ed = _0x23d9ed(_0x41b97e.value);
    }
    return Ot(_0x41b97e, _0x23d9ed);
  };
  return [Pt.bind(_0x41b97e), _0x4c3ecf];
}
function m(_0x5275a1, _0x184406, _0x26e5f3) {
  const _0x3bce7a = je(_0x5275a1, _0x184406, false, L);
  G(_0x3bce7a);
}
function Oe(_0x555e59, _0x523637, _0x57dc5a) {
  pt = nn;
  const _0x322813 = je(_0x555e59, _0x523637, false, L);
  if (!_0x57dc5a || !_0x57dc5a.render) {
    _0x322813.user = true;
  }
  if (P) {
    P.push(_0x322813);
  } else {
    G(_0x322813);
  }
}
function se(_0x31e9a7, _0x2b23eb, _0x5dcdbf) {
  _0x5dcdbf = _0x5dcdbf ? Object.assign({}, ie, _0x5dcdbf) : ie;
  const _0x3a5f87 = je(_0x31e9a7, _0x2b23eb, true, 0);
  _0x3a5f87.observers = null;
  _0x3a5f87.observerSlots = null;
  _0x3a5f87.comparator = _0x5dcdbf.equals || undefined;
  G(_0x3a5f87);
  return Pt.bind(_0x3a5f87);
}
function Wt(_0x4d7b98) {
  return U(_0x4d7b98, false);
}
function E(_0x79f1ac) {
  if (y === null) {
    return _0x79f1ac();
  }
  const _0x1849da = y;
  y = null;
  try {
    return _0x79f1ac();
  } finally {
    y = _0x1849da;
  }
}
function Yt(_0x5be766) {
  Oe(() => E(_0x5be766));
}
function Gt(_0x53a533) {
  if (b !== null) {
    if (b.cleanups === null) {
      b.cleanups = [_0x53a533];
    } else {
      b.cleanups.push(_0x53a533);
    }
  }
  return _0x53a533;
}
function kt() {
  return y;
}
function Qt(_0x3b94e5, _0x18c1fc) {
  const _0x57629c = Symbol("context");
  return {
    id: _0x57629c,
    Provider: ln(_0x57629c),
    defaultValue: _0x3b94e5
  };
}
function Jt(_0x2dce62) {
  let _0x278238;
  if ((_0x278238 = Mt(b, _0x2dce62.id)) !== undefined) {
    return _0x278238;
  } else {
    return _0x2dce62.defaultValue;
  }
}
function zt(_0x18713d) {
  const _0x3cd818 = se(_0x18713d);
  const _0x58f8f8 = se(() => Ae(_0x3cd818()));
  _0x58f8f8.toArray = () => {
    const _0x3186aa = _0x58f8f8();
    if (Array.isArray(_0x3186aa)) {
      return _0x3186aa;
    } else if (_0x3186aa != null) {
      return [_0x3186aa];
    } else {
      return [];
    }
  };
  return _0x58f8f8;
}
function Pt() {
  if (this.sources && this.state) {
    if (this.state === L) {
      G(this);
    } else {
      const _0x2163f4 = A;
      A = null;
      U(() => oe(this), false);
      A = _0x2163f4;
    }
  }
  if (y) {
    const _0xc6146f = this.observers ? this.observers.length : 0;
    if (y.sources) {
      y.sources.push(this);
      y.sourceSlots.push(_0xc6146f);
    } else {
      y.sources = [this];
      y.sourceSlots = [_0xc6146f];
    }
    if (this.observers) {
      this.observers.push(y);
      this.observerSlots.push(y.sources.length - 1);
    } else {
      this.observers = [y];
      this.observerSlots = [y.sources.length - 1];
    }
  }
  return this.value;
}
function Ot(_0x1fcb1a, _0x436fe7, _0x48303f) {
  let _0xaa5f67 = _0x1fcb1a.value;
  if (!_0x1fcb1a.comparator || !_0x1fcb1a.comparator(_0xaa5f67, _0x436fe7)) {
    _0x1fcb1a.value = _0x436fe7;
    if (_0x1fcb1a.observers && _0x1fcb1a.observers.length) {
      U(() => {
        for (let _0x563813 = 0; _0x563813 < _0x1fcb1a.observers.length; _0x563813 += 1) {
          const _0x3665a3 = _0x1fcb1a.observers[_0x563813];
          const _0x1f7050 = we && we.running;
          if (_0x1f7050) {
            we.disposed.has(_0x3665a3);
          }
          if (_0x1f7050 ? !_0x3665a3.tState : !_0x3665a3.state) {
            if (_0x3665a3.pure) {
              A.push(_0x3665a3);
            } else {
              P.push(_0x3665a3);
            }
            if (_0x3665a3.observers) {
              Et(_0x3665a3);
            }
          }
          if (!_0x1f7050) {
            _0x3665a3.state = L;
          }
        }
        if (A.length > 1000000) {
          A = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x436fe7;
}
function G(_0x574092) {
  if (!_0x574092.fn) {
    return;
  }
  ue(_0x574092);
  const _0x18a177 = b;
  const _0x2396f6 = y;
  const _0x1f85b9 = ve;
  y = b = _0x574092;
  en(_0x574092, _0x574092.value, _0x1f85b9);
  y = _0x2396f6;
  b = _0x18a177;
}
function en(_0x2361d1, _0x5051bf, _0x32ad54) {
  let _0x6f59bf;
  try {
    _0x6f59bf = _0x2361d1.fn(_0x5051bf);
  } catch (_0xcaffff) {
    if (_0x2361d1.pure) {
      _0x2361d1.state = L;
      if (_0x2361d1.owned) {
        _0x2361d1.owned.forEach(ue);
      }
      _0x2361d1.owned = null;
    }
    _0x2361d1.updatedAt = _0x32ad54 + 1;
    return Lt(_0xcaffff);
  }
  if (!_0x2361d1.updatedAt || _0x2361d1.updatedAt <= _0x32ad54) {
    if (_0x2361d1.updatedAt != null && "observers" in _0x2361d1) {
      Ot(_0x2361d1, _0x6f59bf);
    } else {
      _0x2361d1.value = _0x6f59bf;
    }
    _0x2361d1.updatedAt = _0x32ad54;
  }
}
function je(_0x411fd8, _0x318db3, _0x1e80b2, _0x33fa02 = L, _0x2f8e2e) {
  const _0x4d1530 = {
    fn: _0x411fd8,
    state: _0x33fa02,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x318db3,
    owner: b,
    context: null,
    pure: _0x1e80b2
  };
  if (b !== null) {
    if (b !== Tt) {
      if (b.owned) {
        b.owned.push(_0x4d1530);
      } else {
        b.owned = [_0x4d1530];
      }
    }
  }
  return _0x4d1530;
}
function re(_0x5ea093) {
  if (_0x5ea093.state === 0) {
    return;
  }
  if (_0x5ea093.state === le) {
    return oe(_0x5ea093);
  }
  if (_0x5ea093.suspense && E(_0x5ea093.suspense.inFallback)) {
    return _0x5ea093.suspense.effects.push(_0x5ea093);
  }
  const _0x2fe8da = [_0x5ea093];
  while ((_0x5ea093 = _0x5ea093.owner) && (!_0x5ea093.updatedAt || _0x5ea093.updatedAt < ve)) {
    if (_0x5ea093.state) {
      _0x2fe8da.push(_0x5ea093);
    }
  }
  for (let _0x2b8412 = _0x2fe8da.length - 1; _0x2b8412 >= 0; _0x2b8412--) {
    _0x5ea093 = _0x2fe8da[_0x2b8412];
    if (_0x5ea093.state === L) {
      G(_0x5ea093);
    } else if (_0x5ea093.state === le) {
      const _0x3d1107 = A;
      A = null;
      U(() => oe(_0x5ea093, _0x2fe8da[0]), false);
      A = _0x3d1107;
    }
  }
}
function U(_0x39dadf, _0x52ee50) {
  if (A) {
    return _0x39dadf();
  }
  let _0x5a7c38 = false;
  if (!_0x52ee50) {
    A = [];
  }
  if (P) {
    _0x5a7c38 = true;
  } else {
    P = [];
  }
  ve++;
  try {
    const _0x4c4f35 = _0x39dadf();
    tn(_0x5a7c38);
    return _0x4c4f35;
  } catch (_0x298e87) {
    if (!_0x5a7c38) {
      P = null;
    }
    A = null;
    Lt(_0x298e87);
  }
}
function tn(_0x31a8db) {
  if (A) {
    jt(A);
    A = null;
  }
  if (_0x31a8db) {
    return;
  }
  const _0x16b9c9 = P;
  P = null;
  if (_0x16b9c9.length) {
    U(() => pt(_0x16b9c9), false);
  }
}
function jt(_0x3573fa) {
  for (let _0x416e95 = 0; _0x416e95 < _0x3573fa.length; _0x416e95++) {
    re(_0x3573fa[_0x416e95]);
  }
}
function nn(_0x12e494) {
  let _0x361936;
  let _0x421207 = 0;
  for (_0x361936 = 0; _0x361936 < _0x12e494.length; _0x361936++) {
    const _0x4eeffa = _0x12e494[_0x361936];
    if (_0x4eeffa.user) {
      _0x12e494[_0x421207++] = _0x4eeffa;
    } else {
      re(_0x4eeffa);
    }
  }
  for (_0x361936 = 0; _0x361936 < _0x421207; _0x361936++) {
    re(_0x12e494[_0x361936]);
  }
}
function oe(_0x50f810, _0x5b7f7b) {
  _0x50f810.state = 0;
  for (let _0x439854 = 0; _0x439854 < _0x50f810.sources.length; _0x439854 += 1) {
    const _0x418cc0 = _0x50f810.sources[_0x439854];
    if (_0x418cc0.sources) {
      const _0x5916b1 = _0x418cc0.state;
      if (_0x5916b1 === L) {
        if (_0x418cc0 !== _0x5b7f7b && (!_0x418cc0.updatedAt || _0x418cc0.updatedAt < ve)) {
          re(_0x418cc0);
        }
      } else if (_0x5916b1 === le) {
        oe(_0x418cc0, _0x5b7f7b);
      }
    }
  }
}
function Et(_0x40656e) {
  for (let _0x242b0f = 0; _0x242b0f < _0x40656e.observers.length; _0x242b0f += 1) {
    const _0x5edcb8 = _0x40656e.observers[_0x242b0f];
    if (!_0x5edcb8.state) {
      _0x5edcb8.state = le;
      if (_0x5edcb8.pure) {
        A.push(_0x5edcb8);
      } else {
        P.push(_0x5edcb8);
      }
      if (_0x5edcb8.observers) {
        Et(_0x5edcb8);
      }
    }
  }
}
function ue(_0x45ad43) {
  let _0x5ddff9;
  if (_0x45ad43.sources) {
    while (_0x45ad43.sources.length) {
      const _0x5ce3e3 = _0x45ad43.sources.pop();
      const _0x2aa95e = _0x45ad43.sourceSlots.pop();
      const _0x28042b = _0x5ce3e3.observers;
      if (_0x28042b && _0x28042b.length) {
        const _0x46e5e1 = _0x28042b.pop();
        const _0x14b000 = _0x5ce3e3.observerSlots.pop();
        if (_0x2aa95e < _0x28042b.length) {
          _0x46e5e1.sourceSlots[_0x14b000] = _0x2aa95e;
          _0x28042b[_0x2aa95e] = _0x46e5e1;
          _0x5ce3e3.observerSlots[_0x2aa95e] = _0x14b000;
        }
      }
    }
  }
  if (_0x45ad43.owned) {
    for (_0x5ddff9 = _0x45ad43.owned.length - 1; _0x5ddff9 >= 0; _0x5ddff9--) {
      ue(_0x45ad43.owned[_0x5ddff9]);
    }
    _0x45ad43.owned = null;
  }
  if (_0x45ad43.cleanups) {
    for (_0x5ddff9 = _0x45ad43.cleanups.length - 1; _0x5ddff9 >= 0; _0x5ddff9--) {
      _0x45ad43.cleanups[_0x5ddff9]();
    }
    _0x45ad43.cleanups = null;
  }
  _0x45ad43.state = 0;
  _0x45ad43.context = null;
}
function Lt(_0x23a06d) {
  throw _0x23a06d;
}
function Mt(_0x47253c, _0x219f8a) {
  if (_0x47253c) {
    if (_0x47253c.context && _0x47253c.context[_0x219f8a] !== undefined) {
      return _0x47253c.context[_0x219f8a];
    } else {
      return Mt(_0x47253c.owner, _0x219f8a);
    }
  } else {
    return undefined;
  }
}
function Ae(_0x154493) {
  if (typeof _0x154493 == "function" && !_0x154493.length) {
    return Ae(_0x154493());
  }
  if (Array.isArray(_0x154493)) {
    const _0x29e193 = [];
    for (let _0x4df349 = 0; _0x4df349 < _0x154493.length; _0x4df349++) {
      const _0xd21085 = Ae(_0x154493[_0x4df349]);
      if (Array.isArray(_0xd21085)) {
        _0x29e193.push.apply(_0x29e193, _0xd21085);
      } else {
        _0x29e193.push(_0xd21085);
      }
    }
    return _0x29e193;
  }
  return _0x154493;
}
function ln(_0x10079b, _0x2bf54e) {
  return function (_0x19c161) {
    let _0x10df48;
    m(() => _0x10df48 = E(() => {
      b.context = {
        [_0x10079b]: _0x19c161.value
      };
      return zt(() => _0x19c161.children);
    }), undefined);
    return _0x10df48;
  };
}
function w(_0x5bf347, _0x297c6d) {
  return E(() => _0x5bf347(_0x297c6d || {}));
}
const sn = _0x2bf8d7 => "Stale read from <" + _0x2bf8d7 + ">.";
function Nt(_0x597473) {
  const _0x2fa209 = _0x597473.keyed;
  const _0x2f3ee2 = se(() => _0x597473.when, undefined, {
    equals: (_0x557d90, _0x888173) => _0x2fa209 ? _0x557d90 === _0x888173 : !_0x557d90 == !_0x888173
  });
  return se(() => {
    const _0x271e6a = _0x2f3ee2();
    if (_0x271e6a) {
      const _0x117b77 = _0x597473.children;
      if (typeof _0x117b77 == "function" && _0x117b77.length > 0) {
        return E(() => _0x117b77(_0x2fa209 ? _0x271e6a : () => {
          if (!E(_0x2f3ee2)) {
            throw sn("Show");
          }
          return _0x597473.when;
        }));
      } else {
        return _0x117b77;
      }
    }
    return _0x597473.fallback;
  }, undefined, undefined);
}
function rn(_0x4bfe81, _0xfd2b7a, _0x1de82d) {
  let _0x5731e0 = _0x1de82d.length;
  let _0xce6bb2 = _0xfd2b7a.length;
  let _0x138489 = _0x5731e0;
  let _0x5c7989 = 0;
  let _0x30b44c = 0;
  let _0x16dd62 = _0xfd2b7a[_0xce6bb2 - 1].nextSibling;
  let _0x3082e8 = null;
  while (_0x5c7989 < _0xce6bb2 || _0x30b44c < _0x138489) {
    if (_0xfd2b7a[_0x5c7989] === _0x1de82d[_0x30b44c]) {
      _0x5c7989++;
      _0x30b44c++;
      continue;
    }
    while (_0xfd2b7a[_0xce6bb2 - 1] === _0x1de82d[_0x138489 - 1]) {
      _0xce6bb2--;
      _0x138489--;
    }
    if (_0xce6bb2 === _0x5c7989) {
      const _0x463f27 = _0x138489 < _0x5731e0 ? _0x30b44c ? _0x1de82d[_0x30b44c - 1].nextSibling : _0x1de82d[_0x138489 - _0x30b44c] : _0x16dd62;
      while (_0x30b44c < _0x138489) {
        _0x4bfe81.insertBefore(_0x1de82d[_0x30b44c++], _0x463f27);
      }
    } else if (_0x138489 === _0x30b44c) {
      while (_0x5c7989 < _0xce6bb2) {
        if (!_0x3082e8 || !_0x3082e8.has(_0xfd2b7a[_0x5c7989])) {
          _0xfd2b7a[_0x5c7989].remove();
        }
        _0x5c7989++;
      }
    } else if (_0xfd2b7a[_0x5c7989] === _0x1de82d[_0x138489 - 1] && _0x1de82d[_0x30b44c] === _0xfd2b7a[_0xce6bb2 - 1]) {
      const _0x505eb0 = _0xfd2b7a[--_0xce6bb2].nextSibling;
      _0x4bfe81.insertBefore(_0x1de82d[_0x30b44c++], _0xfd2b7a[_0x5c7989++].nextSibling);
      _0x4bfe81.insertBefore(_0x1de82d[--_0x138489], _0x505eb0);
      _0xfd2b7a[_0xce6bb2] = _0x1de82d[_0x138489];
    } else {
      if (!_0x3082e8) {
        _0x3082e8 = new Map();
        let _0x345aaa = _0x30b44c;
        while (_0x345aaa < _0x138489) {
          _0x3082e8.set(_0x1de82d[_0x345aaa], _0x345aaa++);
        }
      }
      const _0x5d7245 = _0x3082e8.get(_0xfd2b7a[_0x5c7989]);
      if (_0x5d7245 != null) {
        if (_0x30b44c < _0x5d7245 && _0x5d7245 < _0x138489) {
          let _0x5ef56e = _0x5c7989;
          let _0x4f7145 = 1;
          let _0x3c59ea;
          while (++_0x5ef56e < _0xce6bb2 && _0x5ef56e < _0x138489 && (_0x3c59ea = _0x3082e8.get(_0xfd2b7a[_0x5ef56e])) != null && _0x3c59ea === _0x5d7245 + _0x4f7145) {
            _0x4f7145++;
          }
          if (_0x4f7145 > _0x5d7245 - _0x30b44c) {
            const _0x2d48c9 = _0xfd2b7a[_0x5c7989];
            while (_0x30b44c < _0x5d7245) {
              _0x4bfe81.insertBefore(_0x1de82d[_0x30b44c++], _0x2d48c9);
            }
          } else {
            _0x4bfe81.replaceChild(_0x1de82d[_0x30b44c++], _0xfd2b7a[_0x5c7989++]);
          }
        } else {
          _0x5c7989++;
        }
      } else {
        _0xfd2b7a[_0x5c7989++].remove();
      }
    }
  }
}
const xt = "_$DX_DELEGATE";
function on(_0x2ff491, _0x28b740, _0x1ad9a6, _0x3522fc = {}) {
  let _0x2b2f60;
  Zt(_0x4d4613 => {
    _0x2b2f60 = _0x4d4613;
    if (_0x28b740 === document) {
      _0x2ff491();
    } else {
      C(_0x28b740, _0x2ff491(), _0x28b740.firstChild ? null : undefined, _0x1ad9a6);
    }
  }, _0x3522fc.owner);
  return () => {
    _0x2b2f60();
    _0x28b740.textContent = "";
  };
}
function O(_0x4393a3, _0x4a800a, _0x57d7d4) {
  let _0x3018e;
  const _0x4e6648 = () => {
    const _0x20ab1e = document.createElement("template");
    _0x20ab1e.innerHTML = _0x4393a3;
    if (_0x57d7d4) {
      return _0x20ab1e.content.firstChild.firstChild;
    } else {
      return _0x20ab1e.content.firstChild;
    }
  };
  const _0x2f725d = _0x4a800a ? () => E(() => document.importNode(_0x3018e ||= _0x4e6648(), true)) : () => (_0x3018e ||= _0x4e6648()).cloneNode(true);
  _0x2f725d.cloneNode = _0x2f725d;
  return _0x2f725d;
}
function dn(_0x326921, _0x4c96aa = window.document) {
  const _0x29af7b = _0x4c96aa[xt] ||= new Set();
  for (let _0x539d52 = 0, _0x2b70a6 = _0x326921.length; _0x539d52 < _0x2b70a6; _0x539d52++) {
    const _0x3375d3 = _0x326921[_0x539d52];
    if (!_0x29af7b.has(_0x3375d3)) {
      _0x29af7b.add(_0x3375d3);
      _0x4c96aa.addEventListener(_0x3375d3, fn);
    }
  }
}
function pe(_0x3bf6d4, _0x7df4fc, _0x238035) {
  if (_0x238035 == null) {
    _0x3bf6d4.removeAttribute(_0x7df4fc);
  } else {
    _0x3bf6d4.setAttribute(_0x7df4fc, _0x238035);
  }
}
function v(_0x5c1767, _0x301879) {
  if (_0x301879 == null) {
    _0x5c1767.removeAttribute("class");
  } else {
    _0x5c1767.className = _0x301879;
  }
}
function k(_0x1956ef, _0xfa88e3, _0x2bcb64 = {}) {
  const _0x32a0a3 = Object.keys(_0xfa88e3 || {});
  const _0x514171 = Object.keys(_0x2bcb64);
  let _0x477347;
  let _0x57173f;
  _0x477347 = 0;
  _0x57173f = _0x514171.length;
  for (; _0x477347 < _0x57173f; _0x477347++) {
    const _0x378769 = _0x514171[_0x477347];
    if (!!_0x378769 && _0x378769 !== "undefined" && !_0xfa88e3[_0x378769]) {
      Ct(_0x1956ef, _0x378769, false);
      delete _0x2bcb64[_0x378769];
    }
  }
  _0x477347 = 0;
  _0x57173f = _0x32a0a3.length;
  for (; _0x477347 < _0x57173f; _0x477347++) {
    const _0x429715 = _0x32a0a3[_0x477347];
    const _0x2aff0c = !!_0xfa88e3[_0x429715];
    if (!!_0x429715 && _0x429715 !== "undefined" && _0x2bcb64[_0x429715] !== _0x2aff0c && !!_0x2aff0c) {
      Ct(_0x1956ef, _0x429715, true);
      _0x2bcb64[_0x429715] = _0x2aff0c;
    }
  }
  return _0x2bcb64;
}
function C(_0x5be61d, _0x2c55a5, _0x196991, _0x5b228) {
  if (_0x196991 !== undefined && !_0x5b228) {
    _0x5b228 = [];
  }
  if (typeof _0x2c55a5 != "function") {
    return de(_0x5be61d, _0x2c55a5, _0x5b228, _0x196991);
  }
  m(_0x4c0f97 => de(_0x5be61d, _0x2c55a5(), _0x4c0f97, _0x196991), _0x5b228);
}
function Ct(_0x559c47, _0x176dde, _0x3cb550) {
  const _0x1548e6 = _0x176dde.trim().split(/\s+/);
  for (let _0x5481d4 = 0, _0x471433 = _0x1548e6.length; _0x5481d4 < _0x471433; _0x5481d4++) {
    _0x559c47.classList.toggle(_0x1548e6[_0x5481d4], _0x3cb550);
  }
}
function fn(_0x8c3118) {
  const _0x2e795b = "$$" + _0x8c3118.type;
  let _0x5d9a08 = _0x8c3118.composedPath && _0x8c3118.composedPath()[0] || _0x8c3118.target;
  if (_0x8c3118.target !== _0x5d9a08) {
    Object.defineProperty(_0x8c3118, "target", {
      configurable: true,
      value: _0x5d9a08
    });
  }
  Object.defineProperty(_0x8c3118, "currentTarget", {
    configurable: true,
    get() {
      return _0x5d9a08 || document;
    }
  });
  while (_0x5d9a08) {
    const _0x17b27c = _0x5d9a08[_0x2e795b];
    if (_0x17b27c && !_0x5d9a08.disabled) {
      const _0x740663 = _0x5d9a08[_0x2e795b + "Data"];
      if (_0x740663 !== undefined) {
        _0x17b27c.call(_0x5d9a08, _0x740663, _0x8c3118);
      } else {
        _0x17b27c.call(_0x5d9a08, _0x8c3118);
      }
      if (_0x8c3118.cancelBubble) {
        return;
      }
    }
    _0x5d9a08 = _0x5d9a08._$host || _0x5d9a08.parentNode || _0x5d9a08.host;
  }
}
function de(_0x3211d6, _0x1c6119, _0x5aa503, _0x76d70a, _0x30be8e) {
  while (typeof _0x5aa503 == "function") {
    _0x5aa503 = _0x5aa503();
  }
  if (_0x1c6119 === _0x5aa503) {
    return _0x5aa503;
  }
  const _0x4fe201 = typeof _0x1c6119;
  const _0x33fa00 = _0x76d70a !== undefined;
  _0x3211d6 = _0x33fa00 && _0x5aa503[0] && _0x5aa503[0].parentNode || _0x3211d6;
  if (_0x4fe201 === "string" || _0x4fe201 === "number") {
    if (_0x4fe201 === "number") {
      _0x1c6119 = _0x1c6119.toString();
    }
    if (_0x33fa00) {
      let _0x1a58d0 = _0x5aa503[0];
      if (_0x1a58d0 && _0x1a58d0.nodeType === 3) {
        _0x1a58d0.data = _0x1c6119;
      } else {
        _0x1a58d0 = document.createTextNode(_0x1c6119);
      }
      _0x5aa503 = K(_0x3211d6, _0x5aa503, _0x76d70a, _0x1a58d0);
    } else if (_0x5aa503 !== "" && typeof _0x5aa503 == "string") {
      _0x5aa503 = _0x3211d6.firstChild.data = _0x1c6119;
    } else {
      _0x5aa503 = _0x3211d6.textContent = _0x1c6119;
    }
  } else if (_0x1c6119 == null || _0x4fe201 === "boolean") {
    _0x5aa503 = K(_0x3211d6, _0x5aa503, _0x76d70a);
  } else {
    if (_0x4fe201 === "function") {
      m(() => {
        let _0x56ec49 = _0x1c6119();
        while (typeof _0x56ec49 == "function") {
          _0x56ec49 = _0x56ec49();
        }
        _0x5aa503 = de(_0x3211d6, _0x56ec49, _0x5aa503, _0x76d70a);
      });
      return () => _0x5aa503;
    }
    if (Array.isArray(_0x1c6119)) {
      const _0x52ac9b = [];
      const _0x704bef = _0x5aa503 && Array.isArray(_0x5aa503);
      if (Te(_0x52ac9b, _0x1c6119, _0x5aa503, _0x30be8e)) {
        m(() => _0x5aa503 = de(_0x3211d6, _0x52ac9b, _0x5aa503, _0x76d70a, true));
        return () => _0x5aa503;
      }
      if (_0x52ac9b.length === 0) {
        _0x5aa503 = K(_0x3211d6, _0x5aa503, _0x76d70a);
        if (_0x33fa00) {
          return _0x5aa503;
        }
      } else if (_0x704bef) {
        if (_0x5aa503.length === 0) {
          bt(_0x3211d6, _0x52ac9b, _0x76d70a);
        } else {
          rn(_0x3211d6, _0x5aa503, _0x52ac9b);
        }
      } else {
        if (_0x5aa503) {
          K(_0x3211d6);
        }
        bt(_0x3211d6, _0x52ac9b);
      }
      _0x5aa503 = _0x52ac9b;
    } else if (_0x1c6119.nodeType) {
      if (Array.isArray(_0x5aa503)) {
        if (_0x33fa00) {
          return _0x5aa503 = K(_0x3211d6, _0x5aa503, _0x76d70a, _0x1c6119);
        }
        K(_0x3211d6, _0x5aa503, null, _0x1c6119);
      } else if (_0x5aa503 == null || _0x5aa503 === "" || !_0x3211d6.firstChild) {
        _0x3211d6.appendChild(_0x1c6119);
      } else {
        _0x3211d6.replaceChild(_0x1c6119, _0x3211d6.firstChild);
      }
      _0x5aa503 = _0x1c6119;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x1c6119);
    }
  }
  return _0x5aa503;
}
function Te(_0x274b87, _0x55c8ac, _0x544280, _0xc4b75e) {
  let _0x2b7fda = false;
  for (let _0x25c2fe = 0, _0x3ea7b8 = _0x55c8ac.length; _0x25c2fe < _0x3ea7b8; _0x25c2fe++) {
    let _0x41a2cb = _0x55c8ac[_0x25c2fe];
    let _0x3257b7 = _0x544280 && _0x544280[_0x25c2fe];
    let _0x1a7376;
    if (_0x41a2cb != null && _0x41a2cb !== true && _0x41a2cb !== false) {
      if ((_0x1a7376 = typeof _0x41a2cb) == "object" && _0x41a2cb.nodeType) {
        _0x274b87.push(_0x41a2cb);
      } else if (Array.isArray(_0x41a2cb)) {
        _0x2b7fda = Te(_0x274b87, _0x41a2cb, _0x3257b7) || _0x2b7fda;
      } else if (_0x1a7376 === "function") {
        if (_0xc4b75e) {
          while (typeof _0x41a2cb == "function") {
            _0x41a2cb = _0x41a2cb();
          }
          _0x2b7fda = Te(_0x274b87, Array.isArray(_0x41a2cb) ? _0x41a2cb : [_0x41a2cb], Array.isArray(_0x3257b7) ? _0x3257b7 : [_0x3257b7]) || _0x2b7fda;
        } else {
          _0x274b87.push(_0x41a2cb);
          _0x2b7fda = true;
        }
      } else {
        const _0x23b61d = String(_0x41a2cb);
        if (_0x3257b7 && _0x3257b7.nodeType === 3 && _0x3257b7.data === _0x23b61d) {
          _0x274b87.push(_0x3257b7);
        } else {
          _0x274b87.push(document.createTextNode(_0x23b61d));
        }
      }
    }
  }
  return _0x2b7fda;
}
function bt(_0x2d42e6, _0x37a296, _0x387bc3 = null) {
  for (let _0x111428 = 0, _0x21f0d5 = _0x37a296.length; _0x111428 < _0x21f0d5; _0x111428++) {
    _0x2d42e6.insertBefore(_0x37a296[_0x111428], _0x387bc3);
  }
}
function K(_0x469e8a, _0x4ada2d, _0x2c61e3, _0x301d27) {
  if (_0x2c61e3 === undefined) {
    return _0x469e8a.textContent = "";
  }
  const _0x5d2cb5 = _0x301d27 || document.createTextNode("");
  if (_0x4ada2d.length) {
    let _0x16681b = false;
    for (let _0x41ea70 = _0x4ada2d.length - 1; _0x41ea70 >= 0; _0x41ea70--) {
      const _0x1e6f44 = _0x4ada2d[_0x41ea70];
      if (_0x5d2cb5 !== _0x1e6f44) {
        const _0x477913 = _0x1e6f44.parentNode === _0x469e8a;
        if (!_0x16681b && !_0x41ea70) {
          if (_0x477913) {
            _0x469e8a.replaceChild(_0x5d2cb5, _0x1e6f44);
          } else {
            _0x469e8a.insertBefore(_0x5d2cb5, _0x2c61e3);
          }
        } else if (_0x477913) {
          _0x1e6f44.remove();
        }
      } else {
        _0x16681b = true;
      }
    }
  } else {
    _0x469e8a.insertBefore(_0x5d2cb5, _0x2c61e3);
  }
  return [_0x5d2cb5];
}
const cn = "_App_1r7e7_1";
const vn = {
  App: cn
};
const ke = Symbol("store-raw");
const W = Symbol("store-node");
function Dt(_0xbf1770) {
  let _0x296136 = _0xbf1770[R];
  if (!_0x296136 && (Object.defineProperty(_0xbf1770, R, {
    value: _0x296136 = new Proxy(_0xbf1770, _n)
  }), !Array.isArray(_0xbf1770))) {
    const _0x43b10e = Object.keys(_0xbf1770);
    const _0x7db645 = Object.getOwnPropertyDescriptors(_0xbf1770);
    for (let _0x3f1d75 = 0, _0x2a0472 = _0x43b10e.length; _0x3f1d75 < _0x2a0472; _0x3f1d75++) {
      const _0x37d6c0 = _0x43b10e[_0x3f1d75];
      if (_0x7db645[_0x37d6c0].get) {
        Object.defineProperty(_0xbf1770, _0x37d6c0, {
          enumerable: _0x7db645[_0x37d6c0].enumerable,
          get: _0x7db645[_0x37d6c0].get.bind(_0x296136)
        });
      }
    }
  }
  return _0x296136;
}
function fe(_0x59579d) {
  let _0x579922;
  return _0x59579d != null && typeof _0x59579d == "object" && (_0x59579d[R] || !(_0x579922 = Object.getPrototypeOf(_0x59579d)) || _0x579922 === Object.prototype || Array.isArray(_0x59579d));
}
function Y(_0xddcf03, _0x1947c4 = new Set()) {
  let _0x93b7d8;
  let _0x57a1b7;
  let _0x1beed2;
  let _0x295477;
  if (_0x93b7d8 = _0xddcf03 != null && _0xddcf03[ke]) {
    return _0x93b7d8;
  }
  if (!fe(_0xddcf03) || _0x1947c4.has(_0xddcf03)) {
    return _0xddcf03;
  }
  if (Array.isArray(_0xddcf03)) {
    if (Object.isFrozen(_0xddcf03)) {
      _0xddcf03 = _0xddcf03.slice(0);
    } else {
      _0x1947c4.add(_0xddcf03);
    }
    for (let _0x116a87 = 0, _0x1743bf = _0xddcf03.length; _0x116a87 < _0x1743bf; _0x116a87++) {
      _0x1beed2 = _0xddcf03[_0x116a87];
      if ((_0x57a1b7 = Y(_0x1beed2, _0x1947c4)) !== _0x1beed2) {
        _0xddcf03[_0x116a87] = _0x57a1b7;
      }
    }
  } else {
    if (Object.isFrozen(_0xddcf03)) {
      _0xddcf03 = Object.assign({}, _0xddcf03);
    } else {
      _0x1947c4.add(_0xddcf03);
    }
    const _0x9b99e0 = Object.keys(_0xddcf03);
    const _0x3a98ee = Object.getOwnPropertyDescriptors(_0xddcf03);
    for (let _0x5454bd = 0, _0x25f1c6 = _0x9b99e0.length; _0x5454bd < _0x25f1c6; _0x5454bd++) {
      _0x295477 = _0x9b99e0[_0x5454bd];
      if (!_0x3a98ee[_0x295477].get) {
        _0x1beed2 = _0xddcf03[_0x295477];
        if ((_0x57a1b7 = Y(_0x1beed2, _0x1947c4)) !== _0x1beed2) {
          _0xddcf03[_0x295477] = _0x57a1b7;
        }
      }
    }
  }
  return _0xddcf03;
}
function Ee(_0x40b3f9) {
  let _0x1c7fa5 = _0x40b3f9[W];
  if (!_0x1c7fa5) {
    Object.defineProperty(_0x40b3f9, W, {
      value: _0x1c7fa5 = Object.create(null)
    });
  }
  return _0x1c7fa5;
}
function Pe(_0x24390f, _0xded6ff, _0x3692d8) {
  return _0x24390f[_0xded6ff] ||= Ft(_0x3692d8);
}
function un(_0x1a5838, _0x1b4a18) {
  const _0x18b8c0 = Reflect.getOwnPropertyDescriptor(_0x1a5838, _0x1b4a18);
  if (!!_0x18b8c0 && !_0x18b8c0.get && !!_0x18b8c0.configurable && _0x1b4a18 !== R && _0x1b4a18 !== W) {
    delete _0x18b8c0.value;
    delete _0x18b8c0.writable;
    _0x18b8c0.get = () => _0x1a5838[R][_0x1b4a18];
  }
  return _0x18b8c0;
}
function Rt(_0x3993f5) {
  if (kt()) {
    const _0x380118 = Ee(_0x3993f5);
    (_0x380118._ ||= Ft())();
  }
}
function an(_0x507784) {
  Rt(_0x507784);
  return Reflect.ownKeys(_0x507784);
}
function Ft(_0x1d787d) {
  const [_0x3c1df6, _0x1771f5] = X(_0x1d787d, {
    equals: false,
    internal: true
  });
  _0x3c1df6.$ = _0x1771f5;
  return _0x3c1df6;
}
const _n = {
  get(_0x386cb6, _0x3d998f, _0x489461) {
    if (_0x3d998f === ke) {
      return _0x386cb6;
    }
    if (_0x3d998f === R) {
      return _0x489461;
    }
    if (_0x3d998f === yt) {
      Rt(_0x386cb6);
      return _0x489461;
    }
    const _0x307225 = Ee(_0x386cb6);
    const _0x2ae896 = _0x307225[_0x3d998f];
    let _0x257ef2 = _0x2ae896 ? _0x2ae896() : _0x386cb6[_0x3d998f];
    if (_0x3d998f === W || _0x3d998f === "__proto__") {
      return _0x257ef2;
    }
    if (!_0x2ae896) {
      const _0x442016 = Object.getOwnPropertyDescriptor(_0x386cb6, _0x3d998f);
      if (kt() && (typeof _0x257ef2 != "function" || _0x386cb6.hasOwnProperty(_0x3d998f)) && (!_0x442016 || !_0x442016.get)) {
        _0x257ef2 = Pe(_0x307225, _0x3d998f, _0x257ef2)();
      }
    }
    if (fe(_0x257ef2)) {
      return Dt(_0x257ef2);
    } else {
      return _0x257ef2;
    }
  },
  has(_0x3aad84, _0x12bde3) {
    if (_0x12bde3 === ke || _0x12bde3 === R || _0x12bde3 === yt || _0x12bde3 === W || _0x12bde3 === "__proto__") {
      return true;
    } else {
      this.get(_0x3aad84, _0x12bde3, _0x3aad84);
      return _0x12bde3 in _0x3aad84;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: an,
  getOwnPropertyDescriptor: un
};
function ce(_0x1f3c14, _0x4b1e4d, _0x22a4c8, _0x53a83a = false) {
  if (!_0x53a83a && _0x1f3c14[_0x4b1e4d] === _0x22a4c8) {
    return;
  }
  const _0x55467f = _0x1f3c14[_0x4b1e4d];
  const _0x260478 = _0x1f3c14.length;
  if (_0x22a4c8 === undefined) {
    delete _0x1f3c14[_0x4b1e4d];
  } else {
    _0x1f3c14[_0x4b1e4d] = _0x22a4c8;
  }
  let _0x18843c = Ee(_0x1f3c14);
  let _0x51dd74;
  if (_0x51dd74 = Pe(_0x18843c, _0x4b1e4d, _0x55467f)) {
    _0x51dd74.$(() => _0x22a4c8);
  }
  if (Array.isArray(_0x1f3c14) && _0x1f3c14.length !== _0x260478) {
    for (let _0x55f75e = _0x1f3c14.length; _0x55f75e < _0x260478; _0x55f75e++) {
      if (_0x51dd74 = _0x18843c[_0x55f75e]) {
        _0x51dd74.$();
      }
    }
    if (_0x51dd74 = Pe(_0x18843c, "length", _0x260478)) {
      _0x51dd74.$(_0x1f3c14.length);
    }
  }
  if (_0x51dd74 = _0x18843c._) {
    _0x51dd74.$();
  }
}
function Bt(_0x1ad491, _0x1f00e0) {
  const _0x276eda = Object.keys(_0x1f00e0);
  for (let _0x2dbc1c = 0; _0x2dbc1c < _0x276eda.length; _0x2dbc1c += 1) {
    const _0x3b6454 = _0x276eda[_0x2dbc1c];
    ce(_0x1ad491, _0x3b6454, _0x1f00e0[_0x3b6454]);
  }
}
function $n(_0x45b917, _0xc5e6a6) {
  if (typeof _0xc5e6a6 == "function") {
    _0xc5e6a6 = _0xc5e6a6(_0x45b917);
  }
  _0xc5e6a6 = Y(_0xc5e6a6);
  if (Array.isArray(_0xc5e6a6)) {
    if (_0x45b917 === _0xc5e6a6) {
      return;
    }
    let _0x75a7cb = 0;
    let _0x5a9d5b = _0xc5e6a6.length;
    for (; _0x75a7cb < _0x5a9d5b; _0x75a7cb++) {
      const _0x15aca7 = _0xc5e6a6[_0x75a7cb];
      if (_0x45b917[_0x75a7cb] !== _0x15aca7) {
        ce(_0x45b917, _0x75a7cb, _0x15aca7);
      }
    }
    ce(_0x45b917, "length", _0x5a9d5b);
  } else {
    Bt(_0x45b917, _0xc5e6a6);
  }
}
function Z(_0x12217c, _0x229f7c, _0x5b4bc2 = []) {
  let _0x452915;
  let _0x9fd994 = _0x12217c;
  if (_0x229f7c.length > 1) {
    _0x452915 = _0x229f7c.shift();
    const _0x30220f = typeof _0x452915;
    const _0x28bd6b = Array.isArray(_0x12217c);
    if (Array.isArray(_0x452915)) {
      for (let _0x331fa7 = 0; _0x331fa7 < _0x452915.length; _0x331fa7++) {
        Z(_0x12217c, [_0x452915[_0x331fa7]].concat(_0x229f7c), _0x5b4bc2);
      }
      return;
    } else if (_0x28bd6b && _0x30220f === "function") {
      for (let _0x22d92b = 0; _0x22d92b < _0x12217c.length; _0x22d92b++) {
        if (_0x452915(_0x12217c[_0x22d92b], _0x22d92b)) {
          Z(_0x12217c, [_0x22d92b].concat(_0x229f7c), _0x5b4bc2);
        }
      }
      return;
    } else if (_0x28bd6b && _0x30220f === "object") {
      const {
        from: _0x318c0f = 0,
        to: _0x8120c = _0x12217c.length - 1,
        by: _0x116529 = 1
      } = _0x452915;
      for (let _0x2f76db = _0x318c0f; _0x2f76db <= _0x8120c; _0x2f76db += _0x116529) {
        Z(_0x12217c, [_0x2f76db].concat(_0x229f7c), _0x5b4bc2);
      }
      return;
    } else if (_0x229f7c.length > 1) {
      Z(_0x12217c[_0x452915], _0x229f7c, [_0x452915].concat(_0x5b4bc2));
      return;
    }
    _0x9fd994 = _0x12217c[_0x452915];
    _0x5b4bc2 = [_0x452915].concat(_0x5b4bc2);
  }
  let _0x220eec = _0x229f7c[0];
  if ((typeof _0x220eec != "function" || !(_0x220eec = _0x220eec(_0x9fd994, _0x5b4bc2), _0x220eec === _0x9fd994)) && (_0x452915 !== undefined || _0x220eec != null)) {
    _0x220eec = Y(_0x220eec);
    if (_0x452915 === undefined || fe(_0x9fd994) && fe(_0x220eec) && !Array.isArray(_0x220eec)) {
      Bt(_0x9fd994, _0x220eec);
    } else {
      ce(_0x12217c, _0x452915, _0x220eec);
    }
  }
}
function hn(...[_0x1002f3, _0x24c7b3]) {
  const _0x394829 = Y(_0x1002f3 || {});
  const _0x55b11e = Array.isArray(_0x394829);
  const _0x386c2a = Dt(_0x394829);
  function _0x348df2(..._0x45fe8a) {
    Wt(() => {
      if (_0x55b11e && _0x45fe8a.length === 1) {
        $n(_0x394829, _0x45fe8a[0]);
      } else {
        Z(_0x394829, _0x45fe8a);
      }
    });
  }
  return [_0x386c2a, _0x348df2];
}
function gn(_0x305a71, _0x5082df) {
  const _0x230f2f = Qt(_0x5082df);
  return [_0x462cbe => w(_0x230f2f.Provider, {
    value: _0x305a71(_0x462cbe),
    get children() {
      return _0x462cbe.children;
    }
  }), () => Jt(_0x230f2f)];
}
const [yn, xn] = gn(() => {
  const [_0x1cdea1, _0x4b8c74] = hn({
    radarEnabled: false,
    frontPlate: "1234567",
    rearPlate: "1234567",
    patrolSpeed: 156
  });
  const [_0x125872, _0x47715b] = X("");
  return {
    data: _0x1cdea1,
    setData: _0x4b8c74,
    transform: _0x125872,
    setTransform: _0x47715b
  };
});
const j = () => xn();
const Cn = "_radar_1eicd_1";
const bn = "_container_1eicd_19";
const wn = "_section_1eicd_42";
const mn = "_text_1eicd_55";
const Sn = "_typeContainer_1eicd_65";
const An = "_typeText_1eicd_77";
const pn = "_red_1eicd_86";
const Tn = "_active_1eicd_89";
const kn = "_speedContainer_1eicd_92";
const Pn = "_speedText_1eicd_103";
const On = "_bottom_1eicd_117";
const g = {
  radar: Cn,
  container: bn,
  section: wn,
  text: mn,
  typeContainer: Sn,
  typeText: An,
  red: pn,
  active: Tn,
  speedContainer: kn,
  speedText: Pn,
  bottom: On
};
const jn = "_text_nolor_1";
const En = "_plate_nolor_12";
const Ln = "_plateText_nolor_24";
const me = {
  text: jn,
  plate: En,
  plateText: Ln
};
const Mn = O("<div class=\"flex flex-col items-center justify-center gap-[1.48vh]\"><div><div></div></div><div class=\"flex items-center justify-center\"><svg width=\"11.85vh\" height=\"0.83vh\" viewBox=\"0 0 128 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 0V5.58033C1 6.91668 2.08332 8 3.41967 8H32.5M127 0V5.58033C127 6.91668 125.917 8 124.58 8H95.5\" stroke=\"white\" stroke-opacity=\"0.14\" stroke-width=\"0.806557\"></svg><div>");
function wt(_0x308e3b) {
  const {
    data: _0x52827a
  } = j();
  return (() => {
    const _0x200085 = Mn();
    const _0x3956eb = _0x200085.firstChild;
    const _0x7c98c8 = _0x3956eb.firstChild;
    const _0x26ccfd = _0x3956eb.nextSibling;
    const _0xb3986c = _0x26ccfd.firstChild;
    const _0x224413 = _0xb3986c.nextSibling;
    C(_0x7c98c8, () => _0x308e3b.type === "fwd" ? _0x52827a.frontPlate : _0x52827a.rearPlate);
    C(_0x224413, () => _0x308e3b.type === "fwd" ? "FRONT" : "REAR");
    m(_0x4f2aed => {
      const _0x256358 = me.plate;
      const _0x26d4c6 = me.plateText;
      const _0x37ae23 = me.text;
      if (_0x256358 !== _0x4f2aed._v$) {
        v(_0x3956eb, _0x4f2aed._v$ = _0x256358);
      }
      if (_0x26d4c6 !== _0x4f2aed._v$2) {
        v(_0x7c98c8, _0x4f2aed._v$2 = _0x26d4c6);
      }
      if (_0x37ae23 !== _0x4f2aed._v$3) {
        v(_0x224413, _0x4f2aed._v$3 = _0x37ae23);
      }
      return _0x4f2aed;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x200085;
  })();
}
const Nn = "_text_1vjru_1";
const Dn = "_speedContainer_1vjru_12";
const Rn = "_speedText_1vjru_24";
const Se = {
  text: Nn,
  speedContainer: Dn,
  speedText: Rn
};
const Fn = O("<div class=\"flex flex-row items-center justify-center pr-[0.74vh]\"><div class=\"flex flex-col items-center justify-center gap-[0.55vh]\"><div class=\"flex flex-col items-center justify-center\"><div><div></div></div></div><div class=\"flex items-center justify-center\"><svg width=\"16.48vh\" height=\"0.83vh\" viewBox=\"0 0 178 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 0V5.58033C1 6.91668 2.08332 8 3.41967 8H45M177 0V5.58033C177 6.91668 175.917 8 174.58 8H133\" stroke=\"white\" stroke-opacity=\"0.14\" stroke-width=\"0.806557\"></svg><div>PATROL SPEED");
function Bn() {
  const {
    data: _0x28f7f2
  } = j();
  return (() => {
    const _0x1a2cc6 = Fn();
    const _0x3caf57 = _0x1a2cc6.firstChild;
    const _0x4d743a = _0x3caf57.firstChild;
    const _0x14723b = _0x4d743a.firstChild;
    const _0x39772e = _0x14723b.firstChild;
    const _0x309da9 = _0x4d743a.nextSibling;
    const _0x33b141 = _0x309da9.firstChild;
    const _0x10a0b2 = _0x33b141.nextSibling;
    C(_0x39772e, () => _0x28f7f2.patrolSpeed);
    m(_0x11a306 => {
      const _0x57fc7b = Se.speedContainer;
      const _0x19daac = Se.speedText;
      const _0x18c82d = Se.text;
      if (_0x57fc7b !== _0x11a306._v$) {
        v(_0x14723b, _0x11a306._v$ = _0x57fc7b);
      }
      if (_0x19daac !== _0x11a306._v$2) {
        v(_0x39772e, _0x11a306._v$2 = _0x19daac);
      }
      if (_0x18c82d !== _0x11a306._v$3) {
        v(_0x10a0b2, _0x11a306._v$3 = _0x18c82d);
      }
      return _0x11a306;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x1a2cc6;
  })();
}
const Vn = O("<div class=\"flex flex-row items-center justify-center gap-[1.11vh] pl-[0.74vh] pr-[0.74vh]\"><div class=\"flex flex-col items-center justify-center gap-[0.37vh]\"><div><div>SAME</div><div>OPP</div><div>XMIT</div></div><div><div></div></div></div><div class=\"flex flex-col items-center justify-center gap-[0.37vh]\"><div><div>LOCK</div><div>FAST</div></div><div><div>");
const Hn = O("<div class=\"flex flex-row items-center justify-center\"><div class=\"flex flex-col items-center justify-center gap-[0.55vh]\"><div class=\"flex items-center justify-center\"><svg width=\"21.94vh\" height=\"0.83vh\" viewBox=\"0 0 237 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 0V5.6459C1 6.98225 2.08332 8.06557 3.41967 8.06557H59.8787H89.318M236.515 0V5.6459C236.515 6.98225 235.431 8.06557 234.095 8.06557H177.636H148.197\" stroke=\"white\" stroke-opacity=\"0.14\" stroke-width=\"0.806557\"></svg><div></div></div></div><svg width=\"1.01vh\" height=\"2.96vh\" viewBox=\"0 0 11 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.75825 0.875427L0.515625 6.11805H11.0009L5.75825 0.875427Z\" fill=\"#F86969\"></path><path d=\"M5.75825 31.1213L0.515625 25.8787H11.0009L5.75825 31.1213Z\" fill=\"#F86969\">");
const Kn = O("<div class=\"flex flex-col items-end justify-end pb-[1.9vh]\"><div><div><div></div><div><div class=\"flex flex-row items-center justify-center gap-[0.74vh]\"></div></div></div></div><div>");
function Xn(_0x4e8ae5) {
  const {
    data: _0x22f2d1
  } = j();
  return (() => {
    const _0x49069c = Vn();
    const _0x4bdf63 = _0x49069c.firstChild;
    const _0xc1c431 = _0x4bdf63.firstChild;
    const _0x2299e5 = _0xc1c431.firstChild;
    const _0x3807a8 = _0x2299e5.nextSibling;
    const _0x1e5a8e = _0x3807a8.nextSibling;
    const _0x40e3e9 = _0xc1c431.nextSibling;
    const _0x60f3b4 = _0x40e3e9.firstChild;
    const _0x13d8ea = _0x4bdf63.nextSibling;
    const _0x5ce8cb = _0x13d8ea.firstChild;
    const _0x2cf6cb = _0x5ce8cb.firstChild;
    const _0x11f75c = _0x2cf6cb.nextSibling;
    const _0x534cd1 = _0x5ce8cb.nextSibling;
    const _0x3e5137 = _0x534cd1.firstChild;
    C(_0x60f3b4, () => _0x22f2d1[_0x4e8ae5.type].Speed);
    C(_0x3e5137, () => _0x22f2d1[_0x4e8ae5.type].FastSpeed);
    m(_0x56de56 => {
      const _0x352bda = g.typeContainer;
      const _0x376dc8 = g.typeText;
      const _0x36a65a = {
        [g.active]: _0x22f2d1[_0x4e8ae5.type].Mode === "same"
      };
      const _0x24a6a4 = g.typeText;
      const _0x591cf6 = {
        [g.active]: _0x22f2d1[_0x4e8ae5.type].Mode === "opp"
      };
      const _0x2c2cb3 = g.typeText;
      const _0x2f5989 = {
        [g.active]: _0x22f2d1[_0x4e8ae5.type].Xmit
      };
      const _0x5c0750 = g.speedContainer;
      const _0x308b12 = g.speedText;
      const _0x5bd6e6 = g.typeContainer;
      const _0x1ada68 = g.typeText;
      const _0x1d419e = {
        [g.active]: _0x22f2d1[_0x4e8ae5.type].FastLocked,
        [g.red]: true
      };
      const _0x1713ee = g.typeText;
      const _0x59a535 = {
        [g.active]: _0x22f2d1[_0x4e8ae5.type].Fast !== "",
        [g.red]: true
      };
      const _0x5127a3 = g.speedContainer;
      const _0x1859ea = g.speedText;
      const _0x2aeb78 = {
        [g.red]: true
      };
      if (_0x352bda !== _0x56de56._v$) {
        v(_0xc1c431, _0x56de56._v$ = _0x352bda);
      }
      if (_0x376dc8 !== _0x56de56._v$2) {
        v(_0x2299e5, _0x56de56._v$2 = _0x376dc8);
      }
      _0x56de56._v$3 = k(_0x2299e5, _0x36a65a, _0x56de56._v$3);
      if (_0x24a6a4 !== _0x56de56._v$4) {
        v(_0x3807a8, _0x56de56._v$4 = _0x24a6a4);
      }
      _0x56de56._v$5 = k(_0x3807a8, _0x591cf6, _0x56de56._v$5);
      if (_0x2c2cb3 !== _0x56de56._v$6) {
        v(_0x1e5a8e, _0x56de56._v$6 = _0x2c2cb3);
      }
      _0x56de56._v$7 = k(_0x1e5a8e, _0x2f5989, _0x56de56._v$7);
      if (_0x5c0750 !== _0x56de56._v$8) {
        v(_0x40e3e9, _0x56de56._v$8 = _0x5c0750);
      }
      if (_0x308b12 !== _0x56de56._v$9) {
        v(_0x60f3b4, _0x56de56._v$9 = _0x308b12);
      }
      if (_0x5bd6e6 !== _0x56de56._v$10) {
        v(_0x5ce8cb, _0x56de56._v$10 = _0x5bd6e6);
      }
      if (_0x1ada68 !== _0x56de56._v$11) {
        v(_0x2cf6cb, _0x56de56._v$11 = _0x1ada68);
      }
      _0x56de56._v$12 = k(_0x2cf6cb, _0x1d419e, _0x56de56._v$12);
      if (_0x1713ee !== _0x56de56._v$13) {
        v(_0x11f75c, _0x56de56._v$13 = _0x1713ee);
      }
      _0x56de56._v$14 = k(_0x11f75c, _0x59a535, _0x56de56._v$14);
      if (_0x5127a3 !== _0x56de56._v$15) {
        v(_0x534cd1, _0x56de56._v$15 = _0x5127a3);
      }
      if (_0x1859ea !== _0x56de56._v$16) {
        v(_0x3e5137, _0x56de56._v$16 = _0x1859ea);
      }
      _0x56de56._v$17 = k(_0x3e5137, _0x2aeb78, _0x56de56._v$17);
      return _0x56de56;
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
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined
    });
    return _0x49069c;
  })();
}
function mt(_0x3346e5) {
  const {
    data: _0x501b02
  } = j();
  return (() => {
    const _0x3ade32 = Hn();
    const _0x1231e8 = _0x3ade32.firstChild;
    const _0xa115d6 = _0x1231e8.firstChild;
    const _0x3cd77c = _0xa115d6.firstChild;
    const _0x4bb1bf = _0x3cd77c.nextSibling;
    const _0x4d617b = _0x1231e8.nextSibling;
    const _0x538d71 = _0x4d617b.firstChild;
    const _0x22192a = _0x538d71.nextSibling;
    C(_0x1231e8, w(Xn, {
      get type() {
        return _0x3346e5.type;
      }
    }), _0xa115d6);
    C(_0x4bb1bf, () => _0x3346e5.type === "fwd" ? "FRONT" : "REAR");
    m(_0x33ae34 => {
      const _0x280837 = g.text;
      const _0x8cbdcd = _0x501b02[_0x3346e5.type].Dir ? "1" : "0.34";
      const _0x5db9ee = _0x501b02[_0x3346e5.type].Dir ? "0.34" : "1";
      if (_0x280837 !== _0x33ae34._v$18) {
        v(_0x4bb1bf, _0x33ae34._v$18 = _0x280837);
      }
      if (_0x8cbdcd !== _0x33ae34._v$19) {
        pe(_0x538d71, "fill-opacity", _0x33ae34._v$19 = _0x8cbdcd);
      }
      if (_0x5db9ee !== _0x33ae34._v$20) {
        pe(_0x22192a, "fill-opacity", _0x33ae34._v$20 = _0x5db9ee);
      }
      return _0x33ae34;
    }, {
      _v$18: undefined,
      _v$19: undefined,
      _v$20: undefined
    });
    return _0x3ade32;
  })();
}
function Un() {
  const {
    transform: _0x4af45d
  } = j();
  return (() => {
    const _0xfd1266 = Kn();
    const _0x282c05 = _0xfd1266.firstChild;
    const _0xafc81e = _0x282c05.firstChild;
    const _0x78dc62 = _0xafc81e.firstChild;
    const _0x3e5246 = _0x78dc62.nextSibling;
    const _0xba458d = _0x3e5246.firstChild;
    const _0x4ced62 = _0x282c05.nextSibling;
    _0xfd1266.style.setProperty("transform-origin", "bottom right");
    _0xfd1266.style.setProperty("transition", "all 0.2s ease-in-out");
    C(_0x78dc62, w(mt, {
      type: "fwd"
    }), null);
    C(_0x78dc62, w(mt, {
      type: "bwd"
    }), null);
    C(_0xba458d, w(wt, {
      type: "fwd"
    }), null);
    C(_0xba458d, w(wt, {
      type: "bwd"
    }), null);
    C(_0x3e5246, w(Bn, {}), null);
    m(_0x1cfe2e => {
      const _0x6c8b0f = _0x4af45d() + " scale(0.8)";
      const _0x3c7cab = g.radar;
      const _0x24f90f = g.container;
      const _0x193d93 = g.section;
      const _0x484e40 = g.section;
      const _0x5c4d2d = g.bottom;
      if (_0x6c8b0f !== _0x1cfe2e._v$21) {
        if ((_0x1cfe2e._v$21 = _0x6c8b0f) != null) {
          _0xfd1266.style.setProperty("transform", _0x6c8b0f);
        } else {
          _0xfd1266.style.removeProperty("transform");
        }
      }
      if (_0x3c7cab !== _0x1cfe2e._v$22) {
        v(_0x282c05, _0x1cfe2e._v$22 = _0x3c7cab);
      }
      if (_0x24f90f !== _0x1cfe2e._v$23) {
        v(_0xafc81e, _0x1cfe2e._v$23 = _0x24f90f);
      }
      if (_0x193d93 !== _0x1cfe2e._v$24) {
        v(_0x78dc62, _0x1cfe2e._v$24 = _0x193d93);
      }
      if (_0x484e40 !== _0x1cfe2e._v$25) {
        v(_0x3e5246, _0x1cfe2e._v$25 = _0x484e40);
      }
      if (_0x5c4d2d !== _0x1cfe2e._v$26) {
        v(_0x4ced62, _0x1cfe2e._v$26 = _0x5c4d2d);
      }
      return _0x1cfe2e;
    }, {
      _v$21: undefined,
      _v$22: undefined,
      _v$23: undefined,
      _v$24: undefined,
      _v$25: undefined,
      _v$26: undefined
    });
    return _0xfd1266;
  })();
}
const In = "_controller_1amkc_1";
const qn = "_column_1amkc_12";
const Zn = "_title_1amkc_19";
const Wn = "_description_1amkc_28";
const Yn = "_keybind_1amkc_36";
const Gn = "_text_1amkc_52";
const Qn = "_button_1amkc_55";
const Jn = "_list_1amkc_65";
const zn = "_item_1amkc_83";
const ei = "_texts_1amkc_96";
const ti = "_active_1amkc_138";
const ni = "_slider_1amkc_156";
const u = {
  controller: In,
  column: qn,
  title: Zn,
  description: Wn,
  keybind: Yn,
  text: Gn,
  button: Qn,
  list: Jn,
  item: zn,
  texts: ei,
  active: ti,
  switch: "_switch_1amkc_145",
  slider: ni
};
const ii = O("<div><div><div>Antenna Scan</div><div>Scan traffic in the opposite/same lane</div></div><div class=\"flex flex-row items-center justify-center gap-[0.5vh]\"><div>SAME</div><div>OPP");
const li = O("<div><div><div>XMIT</div><div>Turns on/off the antenna</div></div><label><input type=\"checkbox\"><span>");
const si = O("<div><div class=\"flex w-full flex-row items-center justify-between\"><div class=\"mb-[1.25vh] flex flex-row items-center justify-start gap-[0.85vh]\"><svg width=\"1.8vh\" height=\"1.98vh\" viewBox=\"0 0 27 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.6005 0.125616C10.6701 0.393673 9.86309 1.15662 9.52028 2.09223C9.45893 2.25953 9.40083 2.73338 9.37145 3.30574C9.31626 4.38023 9.22632 4.66402 8.79142 5.13593C8.41173 5.54792 7.87331 5.77572 7.2795 5.77572C6.83936 5.77572 6.77835 5.75585 5.97385 5.35014C5.0602 4.88936 4.75653 4.79675 4.15929 4.79675C3.65536 4.79675 3.28776 4.88457 2.78273 5.12564C2.11321 5.44521 1.72491 5.89014 0.96416 7.20939C0.0323889 8.82524 -0.119477 9.3468 0.0731541 10.2697C0.278079 11.2515 0.80537 11.9473 1.78515 12.5287C2.77218 13.1144 3.1194 13.6277 3.1194 14.5011C3.1194 15.3745 2.77218 15.8879 1.78515 16.4735C0.808347 17.0532 0.27782 17.7512 0.0751599 18.7236C-0.0321879 19.2384 0.00508303 19.7808 0.183737 20.3028C0.295032 20.628 1.2853 22.3902 1.67554 22.9575C2.18517 23.6983 3.22681 24.2117 4.21099 24.2071C4.75634 24.2045 5.08149 24.1021 5.97385 23.6521C6.77835 23.2464 6.83936 23.2265 7.2795 23.2265C7.87331 23.2265 8.41173 23.4543 8.79142 23.8663C9.22632 24.3382 9.31626 24.622 9.37145 25.6965C9.40083 26.2688 9.45893 26.7427 9.52028 26.91C9.87189 27.8696 10.7173 28.6488 11.6745 28.8953C12.1436 29.0161 14.7693 29.0397 15.2564 28.9275C15.966 28.764 16.7808 28.183 17.1739 27.5603C17.5131 27.0229 17.5991 26.6852 17.6485 25.6965C17.7023 24.6218 17.7917 24.3389 18.2273 23.8663C18.607 23.4543 19.1454 23.2265 19.7392 23.2265C20.1793 23.2265 20.2404 23.2464 21.0449 23.6521C21.5091 23.8862 22.0199 24.1065 22.18 24.1416C23.1735 24.3596 24.2877 24.0345 25.0174 23.3139C25.2908 23.0439 25.5649 22.642 26.0531 21.7953C26.782 20.5312 26.8849 20.2959 26.9738 19.6897C27.1021 18.8146 26.7496 17.7676 26.1132 17.1334C25.9251 16.946 25.5202 16.6414 25.2134 16.4566C24.9066 16.2717 24.5607 16.0255 24.4449 15.9094C23.7126 15.1761 23.7126 13.8261 24.4449 13.0928C24.5607 12.9767 24.9066 12.7305 25.2134 12.5456C25.5202 12.3608 25.9251 12.0562 26.1132 11.8688C26.7496 11.2346 27.1021 10.1877 26.9738 9.31256C26.8849 8.7063 26.782 8.47099 26.0531 7.20687C25.2939 5.89027 24.9052 5.44508 24.236 5.12564C23.7309 4.88457 23.3633 4.79675 22.8594 4.79675C22.2622 4.79675 21.9585 4.88936 21.0449 5.35014C20.2404 5.75585 20.1793 5.77572 19.7392 5.77572C19.1454 5.77572 18.607 5.54792 18.2273 5.13593C17.7924 4.66402 17.7025 4.38023 17.6473 3.30574C17.6179 2.73338 17.5598 2.25953 17.4984 2.09223C17.1495 1.13992 16.2971 0.350119 15.3525 0.104065C14.7791 -0.0453013 12.1412 -0.0301576 11.6005 0.125616ZM14.8301 9.51642C15.1018 9.58599 15.5928 9.78073 15.9212 9.94925C16.4104 10.2003 16.6297 10.3673 17.1361 10.8737C17.6425 11.3802 17.8094 11.5996 18.0605 12.0889C18.4954 12.9364 18.6357 13.5131 18.6399 14.4688C18.6441 15.4473 18.5301 15.9367 18.09 16.8309C17.7951 17.4302 17.6826 17.5831 17.1369 18.1254C16.0783 19.1776 15.0081 19.6262 13.5417 19.6324C12.6451 19.6363 12.1238 19.5308 11.4102 19.201C10.3328 18.7031 9.49045 17.9154 8.96277 16.9123C8.5194 16.0695 8.38112 15.4964 8.38112 14.5011C8.38112 13.5117 8.5148 12.9531 8.95824 12.0889C9.2093 11.5996 9.37617 11.3802 9.88257 10.8737C10.3852 10.371 10.6092 10.2001 11.0829 9.95747C12.0251 9.47494 12.7551 9.31127 13.7448 9.36058C14.07 9.37683 14.5584 9.44692 14.8301 9.51642Z\" fill=\"#00F8B9\"></svg><div><div>Settings menu</div><div>Change your settings</div></div></div><div><div>Exit</div><div>Escape</div></div></div><div><div class=\"flex w-full flex-col items-start justify-start gap-[0.3vh]\"><div>Front Antenna</div></div><div class=\"flex w-full flex-col items-start justify-start gap-[0.3vh]\"><div>Rear Antenna</div></div><div class=\"flex w-full flex-col items-start justify-start gap-[0.3vh]\"><div>Misc</div><div><div><div>Fast Limit</div><div>Detect vehicles over the speed limit</div></div><input type=\"number\"></div><div><div><div>Toggle Radar</div><div>Turns on/off the radar</div></div><label><input type=\"checkbox\"><span></div><div><div><div>Lockfast Reset</div><div>Resets the lockfast</div></div><div>Reset</div></div><div><div><div>Plate locking</div><div>Locks the plate of the vehicle</div></div><label><input type=\"checkbox\"><span>");
function St(_0x45558f) {
  const {
    data: _0x362d37
  } = j();
  return (() => {
    const _0x458198 = ii();
    const _0x2fdc7e = _0x458198.firstChild;
    const _0x51823d = _0x2fdc7e.firstChild;
    const _0x2baae9 = _0x51823d.nextSibling;
    const _0x177aec = _0x2fdc7e.nextSibling;
    const _0x4a7706 = _0x177aec.firstChild;
    const _0x369fea = _0x4a7706.nextSibling;
    _0x4a7706.$$click = () => {
      _0x46529e.execute("radar:selectMode", _0x45558f.type, "same");
    };
    _0x369fea.$$click = () => {
      _0x46529e.execute("radar:selectMode", _0x45558f.type, "opp");
    };
    m(_0x10062c => {
      const _0x5c930a = u.item;
      const _0x5c23a9 = u.texts;
      const _0x397ab8 = u.title;
      const _0x155577 = u.description;
      const _0x1ed2ff = u.button;
      const _0x8f9e1b = {
        [u.active]: _0x362d37[_0x45558f.type].Mode === "same"
      };
      const _0x44e27d = u.button;
      const _0x51e73c = {
        [u.active]: _0x362d37[_0x45558f.type].Mode === "opp"
      };
      if (_0x5c930a !== _0x10062c._v$) {
        v(_0x458198, _0x10062c._v$ = _0x5c930a);
      }
      if (_0x5c23a9 !== _0x10062c._v$2) {
        v(_0x2fdc7e, _0x10062c._v$2 = _0x5c23a9);
      }
      if (_0x397ab8 !== _0x10062c._v$3) {
        v(_0x51823d, _0x10062c._v$3 = _0x397ab8);
      }
      if (_0x155577 !== _0x10062c._v$4) {
        v(_0x2baae9, _0x10062c._v$4 = _0x155577);
      }
      if (_0x1ed2ff !== _0x10062c._v$5) {
        v(_0x4a7706, _0x10062c._v$5 = _0x1ed2ff);
      }
      _0x10062c._v$6 = k(_0x4a7706, _0x8f9e1b, _0x10062c._v$6);
      if (_0x44e27d !== _0x10062c._v$7) {
        v(_0x369fea, _0x10062c._v$7 = _0x44e27d);
      }
      _0x10062c._v$8 = k(_0x369fea, _0x51e73c, _0x10062c._v$8);
      return _0x10062c;
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
    return _0x458198;
  })();
}
function At(_0x40cbda) {
  const {
    data: _0x2d9dae
  } = j();
  return (() => {
    const _0x32ff87 = li();
    const _0x20e04f = _0x32ff87.firstChild;
    const _0xba21d4 = _0x20e04f.firstChild;
    const _0x1730fa = _0xba21d4.nextSibling;
    const _0x1d9b63 = _0x20e04f.nextSibling;
    const _0x48b988 = _0x1d9b63.firstChild;
    const _0x48fa77 = _0x48b988.nextSibling;
    _0x48b988.$$input = () => {
      _0x46529e.execute("radar:toggleXmit", _0x40cbda.type);
    };
    m(_0x420e0b => {
      const _0x657c4c = u.item;
      const _0x1cd664 = u.texts;
      const _0x31fb00 = u.title;
      const _0x26eeb1 = u.description;
      const _0x54b0dc = u.switch;
      const _0x5d5985 = u.slider;
      if (_0x657c4c !== _0x420e0b._v$9) {
        v(_0x32ff87, _0x420e0b._v$9 = _0x657c4c);
      }
      if (_0x1cd664 !== _0x420e0b._v$10) {
        v(_0x20e04f, _0x420e0b._v$10 = _0x1cd664);
      }
      if (_0x31fb00 !== _0x420e0b._v$11) {
        v(_0xba21d4, _0x420e0b._v$11 = _0x31fb00);
      }
      if (_0x26eeb1 !== _0x420e0b._v$12) {
        v(_0x1730fa, _0x420e0b._v$12 = _0x26eeb1);
      }
      if (_0x54b0dc !== _0x420e0b._v$13) {
        v(_0x1d9b63, _0x420e0b._v$13 = _0x54b0dc);
      }
      if (_0x5d5985 !== _0x420e0b._v$14) {
        v(_0x48fa77, _0x420e0b._v$14 = _0x5d5985);
      }
      return _0x420e0b;
    }, {
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined
    });
    m(() => _0x48b988.checked = _0x2d9dae[_0x40cbda.type].Xmit);
    return _0x32ff87;
  })();
}
function ri() {
  const {
    data: _0x543c73
  } = j();
  const [_0x5508ce, _0x3c96d2] = X(false);
  const [_0xe31cce, _0x43ddc8] = X("");
  const [_0x6cdca1, _0x244550] = X(false);
  const _0x21d60e = _0x3236f9 => {
    if (_0x3236f9.key === "Escape") {
      _0x244550(false);
      _0x46529e.execute("radar:closeController");
    }
  };
  Yt(async () => {
    document.addEventListener("keydown", _0x21d60e);
  });
  Gt(() => {
    document.removeEventListener("keydown", _0x21d60e);
  });
  let _0x4c4b26;
  Oe(() => {
    if (_0x4c4b26) {
      clearTimeout(_0x4c4b26);
    }
    if (_0x6cdca1() && _0x543c73.fwd) {
      _0x3c96d2(true);
      setTimeout(() => {
        _0x43ddc8("translateX(0%)");
      }, 100);
    } else {
      _0x43ddc8("translateX(125%)");
      _0x4c4b26 = setTimeout(() => {
        _0x3c96d2(false);
      }, 250);
    }
  }, [_0x6cdca1(), _0x543c73]);
  _0x46529e.register("radar:openController", async () => {
    _0x244550(true);
  });
  return w(Nt, {
    get when() {
      return _0x5508ce();
    },
    get children() {
      const _0x194e16 = si();
      const _0x5dbdbe = _0x194e16.firstChild;
      const _0x171b5c = _0x5dbdbe.firstChild;
      const _0x462769 = _0x171b5c.firstChild;
      const _0xcbdc03 = _0x462769.nextSibling;
      const _0xebbac7 = _0xcbdc03.firstChild;
      const _0x477267 = _0xebbac7.nextSibling;
      const _0x39dd57 = _0x171b5c.nextSibling;
      const _0x15d4e0 = _0x39dd57.firstChild;
      const _0x23e4e9 = _0x15d4e0.nextSibling;
      const _0x3c18ec = _0x5dbdbe.nextSibling;
      const _0x4d47c2 = _0x3c18ec.firstChild;
      const _0x2bc96a = _0x4d47c2.firstChild;
      const _0xc00873 = _0x4d47c2.nextSibling;
      const _0x2e7245 = _0xc00873.firstChild;
      const _0x408f06 = _0xc00873.nextSibling;
      const _0x2cb337 = _0x408f06.firstChild;
      const _0x46ab76 = _0x2cb337.nextSibling;
      const _0x38be27 = _0x46ab76.firstChild;
      const _0x46b34f = _0x38be27.firstChild;
      const _0x4d1899 = _0x46b34f.nextSibling;
      const _0x11080c = _0x38be27.nextSibling;
      const _0x723c4a = _0x46ab76.nextSibling;
      const _0xeced18 = _0x723c4a.firstChild;
      const _0x3848e9 = _0xeced18.firstChild;
      const _0x1e9062 = _0x3848e9.nextSibling;
      const _0x200f44 = _0xeced18.nextSibling;
      const _0x384e0d = _0x200f44.firstChild;
      const _0x144077 = _0x384e0d.nextSibling;
      const _0x92c28d = _0x723c4a.nextSibling;
      const _0x279485 = _0x92c28d.firstChild;
      const _0x562dd5 = _0x279485.firstChild;
      const _0x307deb = _0x562dd5.nextSibling;
      const _0x362797 = _0x279485.nextSibling;
      const _0x313580 = _0x92c28d.nextSibling;
      const _0x161656 = _0x313580.firstChild;
      const _0x576215 = _0x161656.firstChild;
      const _0x57bb75 = _0x576215.nextSibling;
      const _0x403e0f = _0x161656.nextSibling;
      const _0x14864d = _0x403e0f.firstChild;
      const _0x51a1c5 = _0x14864d.nextSibling;
      C(_0x4d47c2, w(At, {
        type: "fwd"
      }), null);
      C(_0x4d47c2, w(St, {
        type: "fwd"
      }), null);
      C(_0xc00873, w(At, {
        type: "bwd"
      }), null);
      C(_0xc00873, w(St, {
        type: "bwd"
      }), null);
      _0x11080c.addEventListener("change", _0x43d3e6 => {
        _0x46529e.execute("radar:setLimit", _0x43d3e6.target.value);
      });
      _0x384e0d.$$input = () => {
        _0x46529e.execute("radar:toggle");
      };
      _0x362797.$$click = () => {
        _0x46529e.execute("radar:lockfastReset");
      };
      _0x14864d.$$input = () => {
        _0x46529e.execute("radar:plateLock");
      };
      m(_0x55664a => {
        const _0x4e156d = u.controller;
        const _0x105a90 = _0xe31cce();
        const _0x225ce2 = u.icon;
        const _0x18d24d = u.column;
        const _0x504b09 = u.title;
        const _0x8d195e = u.description;
        const _0x3b5b96 = u.keybind;
        const _0x5ebc62 = u.text;
        const _0x236d11 = u.button;
        const _0x14c2e5 = u.list;
        const _0x2f107f = u.title;
        const _0x3b07fe = u.title;
        const _0x1d9fde = u.title;
        const _0x38a14f = u.item;
        const _0x38fd05 = u.texts;
        const _0x5d484d = u.title;
        const _0x117d6e = u.description;
        const _0xd71dcb = u.input;
        const _0x2750fc = u.item;
        const _0x50cf3a = u.texts;
        const _0x409f60 = u.title;
        const _0x4cec6e = u.description;
        const _0x3d1395 = u.switch;
        const _0x65c25f = u.slider;
        const _0x164136 = u.item;
        const _0x46cac1 = u.texts;
        const _0x35f83c = u.title;
        const _0x522126 = u.description;
        const _0x5ae365 = u.button;
        const _0x48b2ab = {
          [u.active]: true
        };
        const _0x59eff7 = u.item;
        const _0x99b210 = u.texts;
        const _0x106204 = u.title;
        const _0x2166b9 = u.description;
        const _0x2dd943 = u.switch;
        const _0x4db616 = u.slider;
        if (_0x4e156d !== _0x55664a._v$15) {
          v(_0x194e16, _0x55664a._v$15 = _0x4e156d);
        }
        if (_0x105a90 !== _0x55664a._v$16) {
          if ((_0x55664a._v$16 = _0x105a90) != null) {
            _0x194e16.style.setProperty("transform", _0x105a90);
          } else {
            _0x194e16.style.removeProperty("transform");
          }
        }
        if (_0x225ce2 !== _0x55664a._v$17) {
          pe(_0x462769, "class", _0x55664a._v$17 = _0x225ce2);
        }
        if (_0x18d24d !== _0x55664a._v$18) {
          v(_0xcbdc03, _0x55664a._v$18 = _0x18d24d);
        }
        if (_0x504b09 !== _0x55664a._v$19) {
          v(_0xebbac7, _0x55664a._v$19 = _0x504b09);
        }
        if (_0x8d195e !== _0x55664a._v$20) {
          v(_0x477267, _0x55664a._v$20 = _0x8d195e);
        }
        if (_0x3b5b96 !== _0x55664a._v$21) {
          v(_0x39dd57, _0x55664a._v$21 = _0x3b5b96);
        }
        if (_0x5ebc62 !== _0x55664a._v$22) {
          v(_0x15d4e0, _0x55664a._v$22 = _0x5ebc62);
        }
        if (_0x236d11 !== _0x55664a._v$23) {
          v(_0x23e4e9, _0x55664a._v$23 = _0x236d11);
        }
        if (_0x14c2e5 !== _0x55664a._v$24) {
          v(_0x3c18ec, _0x55664a._v$24 = _0x14c2e5);
        }
        if (_0x2f107f !== _0x55664a._v$25) {
          v(_0x2bc96a, _0x55664a._v$25 = _0x2f107f);
        }
        if (_0x3b07fe !== _0x55664a._v$26) {
          v(_0x2e7245, _0x55664a._v$26 = _0x3b07fe);
        }
        if (_0x1d9fde !== _0x55664a._v$27) {
          v(_0x2cb337, _0x55664a._v$27 = _0x1d9fde);
        }
        if (_0x38a14f !== _0x55664a._v$28) {
          v(_0x46ab76, _0x55664a._v$28 = _0x38a14f);
        }
        if (_0x38fd05 !== _0x55664a._v$29) {
          v(_0x38be27, _0x55664a._v$29 = _0x38fd05);
        }
        if (_0x5d484d !== _0x55664a._v$30) {
          v(_0x46b34f, _0x55664a._v$30 = _0x5d484d);
        }
        if (_0x117d6e !== _0x55664a._v$31) {
          v(_0x4d1899, _0x55664a._v$31 = _0x117d6e);
        }
        if (_0xd71dcb !== _0x55664a._v$32) {
          v(_0x11080c, _0x55664a._v$32 = _0xd71dcb);
        }
        if (_0x2750fc !== _0x55664a._v$33) {
          v(_0x723c4a, _0x55664a._v$33 = _0x2750fc);
        }
        if (_0x50cf3a !== _0x55664a._v$34) {
          v(_0xeced18, _0x55664a._v$34 = _0x50cf3a);
        }
        if (_0x409f60 !== _0x55664a._v$35) {
          v(_0x3848e9, _0x55664a._v$35 = _0x409f60);
        }
        if (_0x4cec6e !== _0x55664a._v$36) {
          v(_0x1e9062, _0x55664a._v$36 = _0x4cec6e);
        }
        if (_0x3d1395 !== _0x55664a._v$37) {
          v(_0x200f44, _0x55664a._v$37 = _0x3d1395);
        }
        if (_0x65c25f !== _0x55664a._v$38) {
          v(_0x144077, _0x55664a._v$38 = _0x65c25f);
        }
        if (_0x164136 !== _0x55664a._v$39) {
          v(_0x92c28d, _0x55664a._v$39 = _0x164136);
        }
        if (_0x46cac1 !== _0x55664a._v$40) {
          v(_0x279485, _0x55664a._v$40 = _0x46cac1);
        }
        if (_0x35f83c !== _0x55664a._v$41) {
          v(_0x562dd5, _0x55664a._v$41 = _0x35f83c);
        }
        if (_0x522126 !== _0x55664a._v$42) {
          v(_0x307deb, _0x55664a._v$42 = _0x522126);
        }
        if (_0x5ae365 !== _0x55664a._v$43) {
          v(_0x362797, _0x55664a._v$43 = _0x5ae365);
        }
        _0x55664a._v$44 = k(_0x362797, _0x48b2ab, _0x55664a._v$44);
        if (_0x59eff7 !== _0x55664a._v$45) {
          v(_0x313580, _0x55664a._v$45 = _0x59eff7);
        }
        if (_0x99b210 !== _0x55664a._v$46) {
          v(_0x161656, _0x55664a._v$46 = _0x99b210);
        }
        if (_0x106204 !== _0x55664a._v$47) {
          v(_0x576215, _0x55664a._v$47 = _0x106204);
        }
        if (_0x2166b9 !== _0x55664a._v$48) {
          v(_0x57bb75, _0x55664a._v$48 = _0x2166b9);
        }
        if (_0x2dd943 !== _0x55664a._v$49) {
          v(_0x403e0f, _0x55664a._v$49 = _0x2dd943);
        }
        if (_0x4db616 !== _0x55664a._v$50) {
          v(_0x51a1c5, _0x55664a._v$50 = _0x4db616);
        }
        return _0x55664a;
      }, {
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
        _v$27: undefined,
        _v$28: undefined,
        _v$29: undefined,
        _v$30: undefined,
        _v$31: undefined,
        _v$32: undefined,
        _v$33: undefined,
        _v$34: undefined,
        _v$35: undefined,
        _v$36: undefined,
        _v$37: undefined,
        _v$38: undefined,
        _v$39: undefined,
        _v$40: undefined,
        _v$41: undefined,
        _v$42: undefined,
        _v$43: undefined,
        _v$44: undefined,
        _v$45: undefined,
        _v$46: undefined,
        _v$47: undefined,
        _v$48: undefined,
        _v$49: undefined,
        _v$50: undefined
      });
      m(() => _0x11080c.value = _0x543c73.fastLimit);
      m(() => _0x384e0d.checked = _0x543c73.radarEnabled);
      m(() => _0x14864d.checked = _0x543c73.lockPlates);
      return _0x194e16;
    }
  });
}
dn(["click", "input"]);
const oi = O("<div>");
function di() {
  const {
    data: _0x3b0f42,
    setData: _0x16cdeb,
    setTransform: _0x457f8f
  } = j();
  _0x46529e.register("radar:setData", async _0x3f4297 => {
    _0x16cdeb(_0x19d2ca => ({
      ..._0x19d2ca,
      ..._0x3f4297
    }));
  });
  const [_0x4c16d7, _0x13f0e3] = X(false);
  let _0x176e38;
  Oe(() => {
    if (_0x176e38) {
      clearTimeout(_0x176e38);
    }
    if (_0x3b0f42.radarEnabled) {
      _0x13f0e3(true);
      setTimeout(() => {
        _0x457f8f("translateY(0%)");
      }, 100);
    } else {
      _0x457f8f("translateY(100%)");
      _0x176e38 = setTimeout(() => {
        _0x13f0e3(false);
      }, 250);
    }
  }, [_0x3b0f42]);
  return (() => {
    const _0x29f946 = oi();
    C(_0x29f946, w(ri, {}), null);
    C(_0x29f946, w(Nt, {
      get when() {
        return _0x4c16d7();
      },
      get children() {
        return w(Un, {});
      }
    }), null);
    m(() => v(_0x29f946, vn.App));
    return _0x29f946;
  })();
}
on(() => w(yn, {
  get children() {
    return w(di, {});
  }
}), document.getElementById("root"));