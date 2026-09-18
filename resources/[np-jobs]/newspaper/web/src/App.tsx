import './style.css';
import { N as _0x31b3c2, g as _0x327a33 } from "./v-packages-32542390.js";
(function () {
  const _0x1a9fed = document.createElement("link").relList;
  if (_0x1a9fed && _0x1a9fed.supports && _0x1a9fed.supports("modulepreload")) {
    return;
  }
  for (const _0x22d182 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x87521c(_0x22d182);
  }
  new MutationObserver(_0x3b5b71 => {
    for (const _0x5c7bfd of _0x3b5b71) {
      if (_0x5c7bfd.type === "childList") {
        for (const _0x2903eb of _0x5c7bfd.addedNodes) {
          if (_0x2903eb.tagName === "LINK" && _0x2903eb.rel === "modulepreload") {
            _0x87521c(_0x2903eb);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x5cd1bc(_0x34621e) {
    const _0x37d5d5 = {};
    if (_0x34621e.integrity) {
      _0x37d5d5.integrity = _0x34621e.integrity;
    }
    if (_0x34621e.referrerPolicy) {
      _0x37d5d5.referrerPolicy = _0x34621e.referrerPolicy;
    }
    if (_0x34621e.crossOrigin === "use-credentials") {
      _0x37d5d5.credentials = "include";
    } else if (_0x34621e.crossOrigin === "anonymous") {
      _0x37d5d5.credentials = "omit";
    } else {
      _0x37d5d5.credentials = "same-origin";
    }
    return _0x37d5d5;
  }
  function _0x87521c(_0x3548af) {
    if (_0x3548af.ep) {
      return;
    }
    _0x3548af.ep = true;
    const _0x755768 = _0x5cd1bc(_0x3548af);
    fetch(_0x3548af.href, _0x755768);
  }
})();
const Fe = (_0x40a3e1, _0x354c77) => _0x40a3e1 === _0x354c77;
const P = Symbol("solid-proxy");
const ne = Symbol("solid-track");
const K = {
  equals: Fe
};
let be = Ee;
const O = 1;
const q = 2;
const we = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var m = null;
let Z = null;
let d = null;
let b = null;
let L = null;
let H = 0;
const [Ue, $t] = X(false);
function M(_0x5d361d, _0x42b1da) {
  const _0xe5c013 = d;
  const _0x51df8e = m;
  const _0xb4849c = _0x5d361d.length === 0;
  const _0x21cff5 = _0xb4849c ? we : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x42b1da === undefined ? _0x51df8e : _0x42b1da
  };
  const _0x101716 = _0xb4849c ? _0x5d361d : () => _0x5d361d(() => S(() => Q(_0x21cff5)));
  m = _0x21cff5;
  d = null;
  try {
    return N(_0x101716, true);
  } finally {
    d = _0xe5c013;
    m = _0x51df8e;
  }
}
function X(_0x24ad12, _0x368c84) {
  _0x368c84 = _0x368c84 ? Object.assign({}, K, _0x368c84) : K;
  const _0x2da4a6 = {
    value: _0x24ad12,
    observers: null,
    observerSlots: null,
    comparator: _0x368c84.equals || undefined
  };
  const _0xb135db = _0x33a6ab => {
    if (typeof _0x33a6ab == "function") {
      _0x33a6ab = _0x33a6ab(_0x2da4a6.value);
    }
    return Se(_0x2da4a6, _0x33a6ab);
  };
  return [Ae.bind(_0x2da4a6), _0xb135db];
}
function Ie(_0x55b688, _0x257756, _0x4bf26d) {
  const _0xa1efe3 = J(_0x55b688, _0x257756, true, O);
  k(_0xa1efe3);
}
function R(_0x18accc, _0x412bcf, _0x1e5f4d) {
  const _0x5cf688 = J(_0x18accc, _0x412bcf, false, O);
  k(_0x5cf688);
}
function Be(_0x1d7f31, _0x175b53, _0x12130a) {
  be = He;
  const _0x204651 = J(_0x1d7f31, _0x175b53, false, O);
  if (!_0x12130a || !_0x12130a.render) {
    _0x204651.user = true;
  }
  if (L) {
    L.push(_0x204651);
  } else {
    k(_0x204651);
  }
}
function T(_0x47f6db, _0x16d4bf, _0xd1f98c) {
  _0xd1f98c = _0xd1f98c ? Object.assign({}, K, _0xd1f98c) : K;
  const _0x459e17 = J(_0x47f6db, _0x16d4bf, true, 0);
  _0x459e17.observers = null;
  _0x459e17.observerSlots = null;
  _0x459e17.comparator = _0xd1f98c.equals || undefined;
  k(_0x459e17);
  return Ae.bind(_0x459e17);
}
function ie(_0x50f07f) {
  return N(_0x50f07f, false);
}
function S(_0x596f8d) {
  if (d === null) {
    return _0x596f8d();
  }
  const _0xc2bcda = d;
  d = null;
  try {
    return _0x596f8d();
  } finally {
    d = _0xc2bcda;
  }
}
function Me(_0x42dbce) {
  Be(() => S(_0x42dbce));
}
function xe(_0x5b34cf) {
  if (m !== null) {
    if (m.cleanups === null) {
      m.cleanups = [_0x5b34cf];
    } else {
      m.cleanups.push(_0x5b34cf);
    }
  }
  return _0x5b34cf;
}
function ve() {
  return d;
}
function Ke(_0xc20e17) {
  const _0x5ee63e = d;
  const _0x252331 = m;
  return Promise.resolve().then(() => {
    d = _0x5ee63e;
    m = _0x252331;
    let _0x2f48de;
    N(_0xc20e17, false);
    d = m = null;
    if (_0x2f48de) {
      return _0x2f48de.done;
    } else {
      return undefined;
    }
  });
}
function qe() {
  return [Ue, Ke];
}
function We(_0x33140d, _0xbfe717) {
  const _0x243b6f = Symbol("context");
  return {
    id: _0x243b6f,
    Provider: Xe(_0x243b6f),
    defaultValue: _0x33140d
  };
}
function ze(_0x6644c7) {
  let _0x377e2b;
  if ((_0x377e2b = $e(m, _0x6644c7.id)) !== undefined) {
    return _0x377e2b;
  } else {
    return _0x6644c7.defaultValue;
  }
}
function Ye(_0x47ce6f) {
  const _0x1ce7b = T(_0x47ce6f);
  const _0x627b7c = T(() => re(_0x1ce7b()));
  _0x627b7c.toArray = () => {
    const _0x5b4817 = _0x627b7c();
    if (Array.isArray(_0x5b4817)) {
      return _0x5b4817;
    } else if (_0x5b4817 != null) {
      return [_0x5b4817];
    } else {
      return [];
    }
  };
  return _0x627b7c;
}
function Ae() {
  if (this.sources && this.state) {
    if (this.state === O) {
      k(this);
    } else {
      const _0x15b398 = b;
      b = null;
      N(() => z(this), false);
      b = _0x15b398;
    }
  }
  if (d) {
    const _0x14d245 = this.observers ? this.observers.length : 0;
    if (d.sources) {
      d.sources.push(this);
      d.sourceSlots.push(_0x14d245);
    } else {
      d.sources = [this];
      d.sourceSlots = [_0x14d245];
    }
    if (this.observers) {
      this.observers.push(d);
      this.observerSlots.push(d.sources.length - 1);
    } else {
      this.observers = [d];
      this.observerSlots = [d.sources.length - 1];
    }
  }
  return this.value;
}
function Se(_0x1a749e, _0x5ba949, _0xe835f5) {
  let _0x5737df = _0x1a749e.value;
  if (!_0x1a749e.comparator || !_0x1a749e.comparator(_0x5737df, _0x5ba949)) {
    _0x1a749e.value = _0x5ba949;
    if (_0x1a749e.observers && _0x1a749e.observers.length) {
      N(() => {
        for (let _0x6add72 = 0; _0x6add72 < _0x1a749e.observers.length; _0x6add72 += 1) {
          const _0x5c7810 = _0x1a749e.observers[_0x6add72];
          const _0x30a621 = Z && Z.running;
          if (_0x30a621) {
            Z.disposed.has(_0x5c7810);
          }
          if (_0x30a621 ? !_0x5c7810.tState : !_0x5c7810.state) {
            if (_0x5c7810.pure) {
              b.push(_0x5c7810);
            } else {
              L.push(_0x5c7810);
            }
            if (_0x5c7810.observers) {
              Ce(_0x5c7810);
            }
          }
          if (!_0x30a621) {
            _0x5c7810.state = O;
          }
        }
        if (b.length > 1000000) {
          b = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x5ba949;
}
function k(_0x56a269) {
  if (!_0x56a269.fn) {
    return;
  }
  Q(_0x56a269);
  const _0x497e4c = m;
  const _0x2d8d6a = d;
  const _0x4ce8ee = H;
  d = m = _0x56a269;
  Ve(_0x56a269, _0x56a269.value, _0x4ce8ee);
  d = _0x2d8d6a;
  m = _0x497e4c;
}
function Ve(_0x1e0de8, _0x1c3c85, _0x3bf7c5) {
  let _0x472f6a;
  try {
    _0x472f6a = _0x1e0de8.fn(_0x1c3c85);
  } catch (_0x12e0fa) {
    if (_0x1e0de8.pure) {
      _0x1e0de8.state = O;
      if (_0x1e0de8.owned) {
        _0x1e0de8.owned.forEach(Q);
      }
      _0x1e0de8.owned = null;
    }
    _0x1e0de8.updatedAt = _0x3bf7c5 + 1;
    return Te(_0x12e0fa);
  }
  if (!_0x1e0de8.updatedAt || _0x1e0de8.updatedAt <= _0x3bf7c5) {
    if (_0x1e0de8.updatedAt != null && "observers" in _0x1e0de8) {
      Se(_0x1e0de8, _0x472f6a);
    } else {
      _0x1e0de8.value = _0x472f6a;
    }
    _0x1e0de8.updatedAt = _0x3bf7c5;
  }
}
function J(_0x3c314f, _0x18ce89, _0x26d74d, _0x449dd0 = O, _0x1dd736) {
  const _0x1e16ee = {
    fn: _0x3c314f,
    state: _0x449dd0,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x18ce89,
    owner: m,
    context: null,
    pure: _0x26d74d
  };
  if (m !== null) {
    if (m !== we) {
      if (m.owned) {
        m.owned.push(_0x1e16ee);
      } else {
        m.owned = [_0x1e16ee];
      }
    }
  }
  return _0x1e16ee;
}
function W(_0x4a5e0f) {
  if (_0x4a5e0f.state === 0) {
    return;
  }
  if (_0x4a5e0f.state === q) {
    return z(_0x4a5e0f);
  }
  if (_0x4a5e0f.suspense && S(_0x4a5e0f.suspense.inFallback)) {
    return _0x4a5e0f.suspense.effects.push(_0x4a5e0f);
  }
  const _0x3bf60a = [_0x4a5e0f];
  while ((_0x4a5e0f = _0x4a5e0f.owner) && (!_0x4a5e0f.updatedAt || _0x4a5e0f.updatedAt < H)) {
    if (_0x4a5e0f.state) {
      _0x3bf60a.push(_0x4a5e0f);
    }
  }
  for (let _0x30ee64 = _0x3bf60a.length - 1; _0x30ee64 >= 0; _0x30ee64--) {
    _0x4a5e0f = _0x3bf60a[_0x30ee64];
    if (_0x4a5e0f.state === O) {
      k(_0x4a5e0f);
    } else if (_0x4a5e0f.state === q) {
      const _0x1300bc = b;
      b = null;
      N(() => z(_0x4a5e0f, _0x3bf60a[0]), false);
      b = _0x1300bc;
    }
  }
}
function N(_0x34ac98, _0xa526b2) {
  if (b) {
    return _0x34ac98();
  }
  let _0x3bc091 = false;
  if (!_0xa526b2) {
    b = [];
  }
  if (L) {
    _0x3bc091 = true;
  } else {
    L = [];
  }
  H++;
  try {
    const _0x1b3c1f = _0x34ac98();
    Ge(_0x3bc091);
    return _0x1b3c1f;
  } catch (_0x3a12ea) {
    if (!_0x3bc091) {
      L = null;
    }
    b = null;
    Te(_0x3a12ea);
  }
}
function Ge(_0x3f3010) {
  if (b) {
    Ee(b);
    b = null;
  }
  if (_0x3f3010) {
    return;
  }
  const _0x21339b = L;
  L = null;
  if (_0x21339b.length) {
    N(() => be(_0x21339b), false);
  }
}
function Ee(_0x354eba) {
  for (let _0x41f93c = 0; _0x41f93c < _0x354eba.length; _0x41f93c++) {
    W(_0x354eba[_0x41f93c]);
  }
}
function He(_0x16112e) {
  let _0xcf575b;
  let _0x3ecccf = 0;
  for (_0xcf575b = 0; _0xcf575b < _0x16112e.length; _0xcf575b++) {
    const _0x5a9fd8 = _0x16112e[_0xcf575b];
    if (_0x5a9fd8.user) {
      _0x16112e[_0x3ecccf++] = _0x5a9fd8;
    } else {
      W(_0x5a9fd8);
    }
  }
  for (_0xcf575b = 0; _0xcf575b < _0x3ecccf; _0xcf575b++) {
    W(_0x16112e[_0xcf575b]);
  }
}
function z(_0xacde16, _0x3b306d) {
  _0xacde16.state = 0;
  for (let _0x1c49d5 = 0; _0x1c49d5 < _0xacde16.sources.length; _0x1c49d5 += 1) {
    const _0x5767f1 = _0xacde16.sources[_0x1c49d5];
    if (_0x5767f1.sources) {
      const _0x55e32a = _0x5767f1.state;
      if (_0x55e32a === O) {
        if (_0x5767f1 !== _0x3b306d && (!_0x5767f1.updatedAt || _0x5767f1.updatedAt < H)) {
          W(_0x5767f1);
        }
      } else if (_0x55e32a === q) {
        z(_0x5767f1, _0x3b306d);
      }
    }
  }
}
function Ce(_0x22f4e5) {
  for (let _0x571207 = 0; _0x571207 < _0x22f4e5.observers.length; _0x571207 += 1) {
    const _0x2566ec = _0x22f4e5.observers[_0x571207];
    if (!_0x2566ec.state) {
      _0x2566ec.state = q;
      if (_0x2566ec.pure) {
        b.push(_0x2566ec);
      } else {
        L.push(_0x2566ec);
      }
      if (_0x2566ec.observers) {
        Ce(_0x2566ec);
      }
    }
  }
}
function Q(_0x42d082) {
  let _0x4a9c67;
  if (_0x42d082.sources) {
    while (_0x42d082.sources.length) {
      const _0x1bc8bd = _0x42d082.sources.pop();
      const _0x55498c = _0x42d082.sourceSlots.pop();
      const _0xfa490b = _0x1bc8bd.observers;
      if (_0xfa490b && _0xfa490b.length) {
        const _0x3504e8 = _0xfa490b.pop();
        const _0x5a5d54 = _0x1bc8bd.observerSlots.pop();
        if (_0x55498c < _0xfa490b.length) {
          _0x3504e8.sourceSlots[_0x5a5d54] = _0x55498c;
          _0xfa490b[_0x55498c] = _0x3504e8;
          _0x1bc8bd.observerSlots[_0x55498c] = _0x5a5d54;
        }
      }
    }
  }
  if (_0x42d082.owned) {
    for (_0x4a9c67 = _0x42d082.owned.length - 1; _0x4a9c67 >= 0; _0x4a9c67--) {
      Q(_0x42d082.owned[_0x4a9c67]);
    }
    _0x42d082.owned = null;
  }
  if (_0x42d082.cleanups) {
    for (_0x4a9c67 = _0x42d082.cleanups.length - 1; _0x4a9c67 >= 0; _0x4a9c67--) {
      _0x42d082.cleanups[_0x4a9c67]();
    }
    _0x42d082.cleanups = null;
  }
  _0x42d082.state = 0;
  _0x42d082.context = null;
}
function Te(_0x3ba8a8) {
  throw _0x3ba8a8;
}
function $e(_0xa9b4d6, _0x1f23b5) {
  if (_0xa9b4d6) {
    if (_0xa9b4d6.context && _0xa9b4d6.context[_0x1f23b5] !== undefined) {
      return _0xa9b4d6.context[_0x1f23b5];
    } else {
      return $e(_0xa9b4d6.owner, _0x1f23b5);
    }
  } else {
    return undefined;
  }
}
function re(_0x4e0576) {
  if (typeof _0x4e0576 == "function" && !_0x4e0576.length) {
    return re(_0x4e0576());
  }
  if (Array.isArray(_0x4e0576)) {
    const _0x1f8fb3 = [];
    for (let _0x523163 = 0; _0x523163 < _0x4e0576.length; _0x523163++) {
      const _0x43c4a6 = re(_0x4e0576[_0x523163]);
      if (Array.isArray(_0x43c4a6)) {
        _0x1f8fb3.push.apply(_0x1f8fb3, _0x43c4a6);
      } else {
        _0x1f8fb3.push(_0x43c4a6);
      }
    }
    return _0x1f8fb3;
  }
  return _0x4e0576;
}
function Xe(_0x1daec9, _0x53eda1) {
  return function (_0x37c101) {
    let _0x24a86a;
    R(() => _0x24a86a = S(() => {
      m.context = {
        [_0x1daec9]: _0x37c101.value
      };
      return Ye(() => _0x37c101.children);
    }), undefined);
    return _0x24a86a;
  };
}
const Je = Symbol("fallback");
function ae(_0x283ba6) {
  for (let _0x557ef9 = 0; _0x557ef9 < _0x283ba6.length; _0x557ef9++) {
    _0x283ba6[_0x557ef9]();
  }
}
function Qe(_0x52e197, _0x2f0dff, _0x3e3bdc = {}) {
  let _0x3497b6 = [];
  let _0x8fea8a = [];
  let _0x29770f = [];
  let _0x51a9d6 = 0;
  let _0x421edf = _0x2f0dff.length > 1 ? [] : null;
  xe(() => ae(_0x29770f));
  return () => {
    let _0x3c369e = _0x52e197() || [];
    let _0x14a3cc;
    let _0x4633aa;
    _0x3c369e[ne];
    return S(() => {
      let _0x4876a8 = _0x3c369e.length;
      let _0x5236a1;
      let _0x59fecc;
      let _0x42e07a;
      let _0xf01938;
      let _0x28fe66;
      let _0x2cb7ee;
      let _0x2f6f0a;
      let _0x277210;
      let _0x4a56af;
      if (_0x4876a8 === 0) {
        if (_0x51a9d6 !== 0) {
          ae(_0x29770f);
          _0x29770f = [];
          _0x3497b6 = [];
          _0x8fea8a = [];
          _0x51a9d6 = 0;
          _0x421edf &&= [];
        }
        if (_0x3e3bdc.fallback) {
          _0x3497b6 = [Je];
          _0x8fea8a[0] = M(_0xcfe93 => {
            _0x29770f[0] = _0xcfe93;
            return _0x3e3bdc.fallback();
          });
          _0x51a9d6 = 1;
        }
      } else if (_0x51a9d6 === 0) {
        _0x8fea8a = new Array(_0x4876a8);
        _0x4633aa = 0;
        for (; _0x4633aa < _0x4876a8; _0x4633aa++) {
          _0x3497b6[_0x4633aa] = _0x3c369e[_0x4633aa];
          _0x8fea8a[_0x4633aa] = M(_0x1b0817);
        }
        _0x51a9d6 = _0x4876a8;
      } else {
        _0x42e07a = new Array(_0x4876a8);
        _0xf01938 = new Array(_0x4876a8);
        if (_0x421edf) {
          _0x28fe66 = new Array(_0x4876a8);
        }
        _0x2cb7ee = 0;
        _0x2f6f0a = Math.min(_0x51a9d6, _0x4876a8);
        for (; _0x2cb7ee < _0x2f6f0a && _0x3497b6[_0x2cb7ee] === _0x3c369e[_0x2cb7ee]; _0x2cb7ee++);
        _0x2f6f0a = _0x51a9d6 - 1;
        _0x277210 = _0x4876a8 - 1;
        for (; _0x2f6f0a >= _0x2cb7ee && _0x277210 >= _0x2cb7ee && _0x3497b6[_0x2f6f0a] === _0x3c369e[_0x277210]; _0x2f6f0a--, _0x277210--) {
          _0x42e07a[_0x277210] = _0x8fea8a[_0x2f6f0a];
          _0xf01938[_0x277210] = _0x29770f[_0x2f6f0a];
          if (_0x421edf) {
            _0x28fe66[_0x277210] = _0x421edf[_0x2f6f0a];
          }
        }
        _0x5236a1 = new Map();
        _0x59fecc = new Array(_0x277210 + 1);
        _0x4633aa = _0x277210;
        for (; _0x4633aa >= _0x2cb7ee; _0x4633aa--) {
          _0x4a56af = _0x3c369e[_0x4633aa];
          _0x14a3cc = _0x5236a1.get(_0x4a56af);
          _0x59fecc[_0x4633aa] = _0x14a3cc === undefined ? -1 : _0x14a3cc;
          _0x5236a1.set(_0x4a56af, _0x4633aa);
        }
        for (_0x14a3cc = _0x2cb7ee; _0x14a3cc <= _0x2f6f0a; _0x14a3cc++) {
          _0x4a56af = _0x3497b6[_0x14a3cc];
          _0x4633aa = _0x5236a1.get(_0x4a56af);
          if (_0x4633aa !== undefined && _0x4633aa !== -1) {
            _0x42e07a[_0x4633aa] = _0x8fea8a[_0x14a3cc];
            _0xf01938[_0x4633aa] = _0x29770f[_0x14a3cc];
            if (_0x421edf) {
              _0x28fe66[_0x4633aa] = _0x421edf[_0x14a3cc];
            }
            _0x4633aa = _0x59fecc[_0x4633aa];
            _0x5236a1.set(_0x4a56af, _0x4633aa);
          } else {
            _0x29770f[_0x14a3cc]();
          }
        }
        for (_0x4633aa = _0x2cb7ee; _0x4633aa < _0x4876a8; _0x4633aa++) {
          if (_0x4633aa in _0x42e07a) {
            _0x8fea8a[_0x4633aa] = _0x42e07a[_0x4633aa];
            _0x29770f[_0x4633aa] = _0xf01938[_0x4633aa];
            if (_0x421edf) {
              _0x421edf[_0x4633aa] = _0x28fe66[_0x4633aa];
              _0x421edf[_0x4633aa](_0x4633aa);
            }
          } else {
            _0x8fea8a[_0x4633aa] = M(_0x1b0817);
          }
        }
        _0x8fea8a = _0x8fea8a.slice(0, _0x51a9d6 = _0x4876a8);
        _0x3497b6 = _0x3c369e.slice(0);
      }
      return _0x8fea8a;
    });
    function _0x1b0817(_0x1a799c) {
      _0x29770f[_0x4633aa] = _0x1a799c;
      if (_0x421edf) {
        const [_0x1cfa73, _0x4c947e] = X(_0x4633aa);
        _0x421edf[_0x4633aa] = _0x4c947e;
        return _0x2f0dff(_0x3c369e[_0x4633aa], _0x1cfa73);
      }
      return _0x2f0dff(_0x3c369e[_0x4633aa]);
    }
  };
}
function A(_0x528658, _0xfbeea7) {
  return S(() => _0x528658(_0xfbeea7 || {}));
}
const Ze = _0xaf4df4 => "Stale read from <" + _0xaf4df4 + ">.";
function de(_0x6f52af) {
  const _0x5e96fe = "fallback" in _0x6f52af && {
    fallback: () => _0x6f52af.fallback
  };
  return T(Qe(() => _0x6f52af.each, _0x6f52af.children, _0x5e96fe || undefined));
}
function Le(_0x220380) {
  const _0x1b9311 = _0x220380.keyed;
  const _0x4a86c1 = T(() => _0x220380.when, undefined, {
    equals: (_0x24333f, _0xc88f94) => _0x1b9311 ? _0x24333f === _0xc88f94 : !_0x24333f == !_0xc88f94
  });
  return T(() => {
    const _0x5c24e8 = _0x4a86c1();
    if (_0x5c24e8) {
      const _0x4579b6 = _0x220380.children;
      if (typeof _0x4579b6 == "function" && _0x4579b6.length > 0) {
        return S(() => _0x4579b6(_0x1b9311 ? _0x5c24e8 : () => {
          if (!S(_0x4a86c1)) {
            throw Ze("Show");
          }
          return _0x220380.when;
        }));
      } else {
        return _0x4579b6;
      }
    }
    return _0x220380.fallback;
  }, undefined, undefined);
}
function et(_0x3eea52, _0x7bc7f0, _0xc08d0a) {
  let _0x3e771a = _0xc08d0a.length;
  let _0x2bab49 = _0x7bc7f0.length;
  let _0x1cae7d = _0x3e771a;
  let _0x4ab10d = 0;
  let _0x5c1bb9 = 0;
  let _0x352621 = _0x7bc7f0[_0x2bab49 - 1].nextSibling;
  let _0x13bae1 = null;
  while (_0x4ab10d < _0x2bab49 || _0x5c1bb9 < _0x1cae7d) {
    if (_0x7bc7f0[_0x4ab10d] === _0xc08d0a[_0x5c1bb9]) {
      _0x4ab10d++;
      _0x5c1bb9++;
      continue;
    }
    while (_0x7bc7f0[_0x2bab49 - 1] === _0xc08d0a[_0x1cae7d - 1]) {
      _0x2bab49--;
      _0x1cae7d--;
    }
    if (_0x2bab49 === _0x4ab10d) {
      const _0x562993 = _0x1cae7d < _0x3e771a ? _0x5c1bb9 ? _0xc08d0a[_0x5c1bb9 - 1].nextSibling : _0xc08d0a[_0x1cae7d - _0x5c1bb9] : _0x352621;
      while (_0x5c1bb9 < _0x1cae7d) {
        _0x3eea52.insertBefore(_0xc08d0a[_0x5c1bb9++], _0x562993);
      }
    } else if (_0x1cae7d === _0x5c1bb9) {
      while (_0x4ab10d < _0x2bab49) {
        if (!_0x13bae1 || !_0x13bae1.has(_0x7bc7f0[_0x4ab10d])) {
          _0x7bc7f0[_0x4ab10d].remove();
        }
        _0x4ab10d++;
      }
    } else if (_0x7bc7f0[_0x4ab10d] === _0xc08d0a[_0x1cae7d - 1] && _0xc08d0a[_0x5c1bb9] === _0x7bc7f0[_0x2bab49 - 1]) {
      const _0x488713 = _0x7bc7f0[--_0x2bab49].nextSibling;
      _0x3eea52.insertBefore(_0xc08d0a[_0x5c1bb9++], _0x7bc7f0[_0x4ab10d++].nextSibling);
      _0x3eea52.insertBefore(_0xc08d0a[--_0x1cae7d], _0x488713);
      _0x7bc7f0[_0x2bab49] = _0xc08d0a[_0x1cae7d];
    } else {
      if (!_0x13bae1) {
        _0x13bae1 = new Map();
        let _0x455e9f = _0x5c1bb9;
        while (_0x455e9f < _0x1cae7d) {
          _0x13bae1.set(_0xc08d0a[_0x455e9f], _0x455e9f++);
        }
      }
      const _0x5b9461 = _0x13bae1.get(_0x7bc7f0[_0x4ab10d]);
      if (_0x5b9461 != null) {
        if (_0x5c1bb9 < _0x5b9461 && _0x5b9461 < _0x1cae7d) {
          let _0x4a3838 = _0x4ab10d;
          let _0x47941 = 1;
          let _0x14d5b0;
          while (++_0x4a3838 < _0x2bab49 && _0x4a3838 < _0x1cae7d && (_0x14d5b0 = _0x13bae1.get(_0x7bc7f0[_0x4a3838])) != null && _0x14d5b0 === _0x5b9461 + _0x47941) {
            _0x47941++;
          }
          if (_0x47941 > _0x5b9461 - _0x5c1bb9) {
            const _0x158a40 = _0x7bc7f0[_0x4ab10d];
            while (_0x5c1bb9 < _0x5b9461) {
              _0x3eea52.insertBefore(_0xc08d0a[_0x5c1bb9++], _0x158a40);
            }
          } else {
            _0x3eea52.replaceChild(_0xc08d0a[_0x5c1bb9++], _0x7bc7f0[_0x4ab10d++]);
          }
        } else {
          _0x4ab10d++;
        }
      } else {
        _0x7bc7f0[_0x4ab10d++].remove();
      }
    }
  }
}
function tt(_0x11eec4, _0x505153, _0x2c8a87, _0x114236 = {}) {
  let _0x4ccd9e;
  M(_0x3622bc => {
    _0x4ccd9e = _0x3622bc;
    if (_0x505153 === document) {
      _0x11eec4();
    } else {
      C(_0x505153, _0x11eec4(), _0x505153.firstChild ? null : undefined, _0x2c8a87);
    }
  }, _0x114236.owner);
  return () => {
    _0x4ccd9e();
    _0x505153.textContent = "";
  };
}
function fe(_0x5dbd44, _0x58d96a, _0x2fe032) {
  let _0x371154;
  const _0x116f00 = () => {
    const _0x47656b = document.createElement("template");
    _0x47656b.innerHTML = _0x5dbd44;
    if (_0x2fe032) {
      return _0x47656b.content.firstChild.firstChild;
    } else {
      return _0x47656b.content.firstChild;
    }
  };
  const _0x4c46d6 = _0x58d96a ? () => S(() => document.importNode(_0x371154 ||= _0x116f00(), true)) : () => (_0x371154 ||= _0x116f00()).cloneNode(true);
  _0x4c46d6.cloneNode = _0x4c46d6;
  return _0x4c46d6;
}
function _(_0x37c9df, _0x106995, _0x2fa6ad) {
  if (_0x2fa6ad == null) {
    _0x37c9df.removeAttribute(_0x106995);
  } else {
    _0x37c9df.setAttribute(_0x106995, _0x2fa6ad);
  }
}
function ee(_0x554057, _0x182fa2) {
  if (_0x182fa2 == null) {
    _0x554057.removeAttribute("class");
  } else {
    _0x554057.className = _0x182fa2;
  }
}
function C(_0x287442, _0x4dc2b5, _0x14681a, _0x6f09b4) {
  if (_0x14681a !== undefined && !_0x6f09b4) {
    _0x6f09b4 = [];
  }
  if (typeof _0x4dc2b5 != "function") {
    return Y(_0x287442, _0x4dc2b5, _0x6f09b4, _0x14681a);
  }
  R(_0x7b28d3 => Y(_0x287442, _0x4dc2b5(), _0x7b28d3, _0x14681a), _0x6f09b4);
}
function Y(_0x1ae479, _0x1edc82, _0x535256, _0x475457, _0x512282) {
  while (typeof _0x535256 == "function") {
    _0x535256 = _0x535256();
  }
  if (_0x1edc82 === _0x535256) {
    return _0x535256;
  }
  const _0x374fb4 = typeof _0x1edc82;
  const _0x31a77d = _0x475457 !== undefined;
  _0x1ae479 = _0x31a77d && _0x535256[0] && _0x535256[0].parentNode || _0x1ae479;
  if (_0x374fb4 === "string" || _0x374fb4 === "number") {
    if (_0x374fb4 === "number") {
      _0x1edc82 = _0x1edc82.toString();
    }
    if (_0x31a77d) {
      let _0x4a66e5 = _0x535256[0];
      if (_0x4a66e5 && _0x4a66e5.nodeType === 3) {
        _0x4a66e5.data = _0x1edc82;
      } else {
        _0x4a66e5 = document.createTextNode(_0x1edc82);
      }
      _0x535256 = j(_0x1ae479, _0x535256, _0x475457, _0x4a66e5);
    } else if (_0x535256 !== "" && typeof _0x535256 == "string") {
      _0x535256 = _0x1ae479.firstChild.data = _0x1edc82;
    } else {
      _0x535256 = _0x1ae479.textContent = _0x1edc82;
    }
  } else if (_0x1edc82 == null || _0x374fb4 === "boolean") {
    _0x535256 = j(_0x1ae479, _0x535256, _0x475457);
  } else {
    if (_0x374fb4 === "function") {
      R(() => {
        let _0x4bbfb8 = _0x1edc82();
        while (typeof _0x4bbfb8 == "function") {
          _0x4bbfb8 = _0x4bbfb8();
        }
        _0x535256 = Y(_0x1ae479, _0x4bbfb8, _0x535256, _0x475457);
      });
      return () => _0x535256;
    }
    if (Array.isArray(_0x1edc82)) {
      const _0x545b46 = [];
      const _0x17cfd7 = _0x535256 && Array.isArray(_0x535256);
      if (se(_0x545b46, _0x1edc82, _0x535256, _0x512282)) {
        R(() => _0x535256 = Y(_0x1ae479, _0x545b46, _0x535256, _0x475457, true));
        return () => _0x535256;
      }
      if (_0x545b46.length === 0) {
        _0x535256 = j(_0x1ae479, _0x535256, _0x475457);
        if (_0x31a77d) {
          return _0x535256;
        }
      } else if (_0x17cfd7) {
        if (_0x535256.length === 0) {
          he(_0x1ae479, _0x545b46, _0x475457);
        } else {
          et(_0x1ae479, _0x535256, _0x545b46);
        }
      } else {
        if (_0x535256) {
          j(_0x1ae479);
        }
        he(_0x1ae479, _0x545b46);
      }
      _0x535256 = _0x545b46;
    } else if (_0x1edc82.nodeType) {
      if (Array.isArray(_0x535256)) {
        if (_0x31a77d) {
          return _0x535256 = j(_0x1ae479, _0x535256, _0x475457, _0x1edc82);
        }
        j(_0x1ae479, _0x535256, null, _0x1edc82);
      } else if (_0x535256 == null || _0x535256 === "" || !_0x1ae479.firstChild) {
        _0x1ae479.appendChild(_0x1edc82);
      } else {
        _0x1ae479.replaceChild(_0x1edc82, _0x1ae479.firstChild);
      }
      _0x535256 = _0x1edc82;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x1edc82);
    }
  }
  return _0x535256;
}
function se(_0x338cb6, _0x57923e, _0x2b7e71, _0x3ab6fa) {
  let _0x1190aa = false;
  for (let _0x5e081f = 0, _0xdfcfde = _0x57923e.length; _0x5e081f < _0xdfcfde; _0x5e081f++) {
    let _0x1f487b = _0x57923e[_0x5e081f];
    let _0x35066b = _0x2b7e71 && _0x2b7e71[_0x5e081f];
    let _0x1ef51a;
    if (_0x1f487b != null && _0x1f487b !== true && _0x1f487b !== false) {
      if ((_0x1ef51a = typeof _0x1f487b) == "object" && _0x1f487b.nodeType) {
        _0x338cb6.push(_0x1f487b);
      } else if (Array.isArray(_0x1f487b)) {
        _0x1190aa = se(_0x338cb6, _0x1f487b, _0x35066b) || _0x1190aa;
      } else if (_0x1ef51a === "function") {
        if (_0x3ab6fa) {
          while (typeof _0x1f487b == "function") {
            _0x1f487b = _0x1f487b();
          }
          _0x1190aa = se(_0x338cb6, Array.isArray(_0x1f487b) ? _0x1f487b : [_0x1f487b], Array.isArray(_0x35066b) ? _0x35066b : [_0x35066b]) || _0x1190aa;
        } else {
          _0x338cb6.push(_0x1f487b);
          _0x1190aa = true;
        }
      } else {
        const _0x5d6da0 = String(_0x1f487b);
        if (_0x35066b && _0x35066b.nodeType === 3 && _0x35066b.data === _0x5d6da0) {
          _0x338cb6.push(_0x35066b);
        } else {
          _0x338cb6.push(document.createTextNode(_0x5d6da0));
        }
      }
    }
  }
  return _0x1190aa;
}
function he(_0x290d64, _0x58b88e, _0x46adbe = null) {
  for (let _0x3adc2c = 0, _0x25cf01 = _0x58b88e.length; _0x3adc2c < _0x25cf01; _0x3adc2c++) {
    _0x290d64.insertBefore(_0x58b88e[_0x3adc2c], _0x46adbe);
  }
}
function j(_0x33dae8, _0x5965fc, _0x7ce828, _0x10c11a) {
  if (_0x7ce828 === undefined) {
    return _0x33dae8.textContent = "";
  }
  const _0x413793 = _0x10c11a || document.createTextNode("");
  if (_0x5965fc.length) {
    let _0x5b864e = false;
    for (let _0x1f2e0f = _0x5965fc.length - 1; _0x1f2e0f >= 0; _0x1f2e0f--) {
      const _0x3ee177 = _0x5965fc[_0x1f2e0f];
      if (_0x413793 !== _0x3ee177) {
        const _0x2c965d = _0x3ee177.parentNode === _0x33dae8;
        if (!_0x5b864e && !_0x1f2e0f) {
          if (_0x2c965d) {
            _0x33dae8.replaceChild(_0x413793, _0x3ee177);
          } else {
            _0x33dae8.insertBefore(_0x413793, _0x7ce828);
          }
        } else if (_0x2c965d) {
          _0x3ee177.remove();
        }
      } else {
        _0x5b864e = true;
      }
    }
  } else {
    _0x33dae8.insertBefore(_0x413793, _0x7ce828);
  }
  return [_0x413793];
}
function nt(_0x2deb25, _0x475b2a) {
  const _0x4411e3 = We(_0x475b2a);
  return [_0x591b00 => A(_0x4411e3.Provider, {
    value: _0x2deb25(_0x591b00),
    get children() {
      return _0x591b00.children;
    }
  }), () => ze(_0x4411e3)];
}
const oe = Symbol("store-raw");
const U = Symbol("store-node");
function Oe(_0x5da9f5) {
  let _0x96f09c = _0x5da9f5[P];
  if (!_0x96f09c && (Object.defineProperty(_0x5da9f5, P, {
    value: _0x96f09c = new Proxy(_0x5da9f5, st)
  }), !Array.isArray(_0x5da9f5))) {
    const _0x5c5a13 = Object.keys(_0x5da9f5);
    const _0x477909 = Object.getOwnPropertyDescriptors(_0x5da9f5);
    for (let _0x12b27e = 0, _0x219bab = _0x5c5a13.length; _0x12b27e < _0x219bab; _0x12b27e++) {
      const _0x5ed583 = _0x5c5a13[_0x12b27e];
      if (_0x477909[_0x5ed583].get) {
        Object.defineProperty(_0x5da9f5, _0x5ed583, {
          enumerable: _0x477909[_0x5ed583].enumerable,
          get: _0x477909[_0x5ed583].get.bind(_0x96f09c)
        });
      }
    }
  }
  return _0x96f09c;
}
function V(_0x1b7333) {
  let _0x34d703;
  return _0x1b7333 != null && typeof _0x1b7333 == "object" && (_0x1b7333[P] || !(_0x34d703 = Object.getPrototypeOf(_0x1b7333)) || _0x34d703 === Object.prototype || Array.isArray(_0x1b7333));
}
function I(_0x331fe8, _0x1d5ac3 = new Set()) {
  let _0x2af100;
  let _0x2e0615;
  let _0x5c80a4;
  let _0x593c8a;
  if (_0x2af100 = _0x331fe8 != null && _0x331fe8[oe]) {
    return _0x2af100;
  }
  if (!V(_0x331fe8) || _0x1d5ac3.has(_0x331fe8)) {
    return _0x331fe8;
  }
  if (Array.isArray(_0x331fe8)) {
    if (Object.isFrozen(_0x331fe8)) {
      _0x331fe8 = _0x331fe8.slice(0);
    } else {
      _0x1d5ac3.add(_0x331fe8);
    }
    for (let _0x2d517c = 0, _0x188b41 = _0x331fe8.length; _0x2d517c < _0x188b41; _0x2d517c++) {
      _0x5c80a4 = _0x331fe8[_0x2d517c];
      if ((_0x2e0615 = I(_0x5c80a4, _0x1d5ac3)) !== _0x5c80a4) {
        _0x331fe8[_0x2d517c] = _0x2e0615;
      }
    }
  } else {
    if (Object.isFrozen(_0x331fe8)) {
      _0x331fe8 = Object.assign({}, _0x331fe8);
    } else {
      _0x1d5ac3.add(_0x331fe8);
    }
    const _0x5e95df = Object.keys(_0x331fe8);
    const _0x7bf47 = Object.getOwnPropertyDescriptors(_0x331fe8);
    for (let _0x1827ac = 0, _0x2363ca = _0x5e95df.length; _0x1827ac < _0x2363ca; _0x1827ac++) {
      _0x593c8a = _0x5e95df[_0x1827ac];
      if (!_0x7bf47[_0x593c8a].get) {
        _0x5c80a4 = _0x331fe8[_0x593c8a];
        if ((_0x2e0615 = I(_0x5c80a4, _0x1d5ac3)) !== _0x5c80a4) {
          _0x331fe8[_0x593c8a] = _0x2e0615;
        }
      }
    }
  }
  return _0x331fe8;
}
function ue(_0x20822a) {
  let _0xa154de = _0x20822a[U];
  if (!_0xa154de) {
    Object.defineProperty(_0x20822a, U, {
      value: _0xa154de = Object.create(null)
    });
  }
  return _0xa154de;
}
function le(_0x7acaeb, _0xecdf7a, _0x59e147) {
  return _0x7acaeb[_0xecdf7a] ||= Pe(_0x59e147);
}
function it(_0x12c6b2, _0x53d106) {
  const _0x386069 = Reflect.getOwnPropertyDescriptor(_0x12c6b2, _0x53d106);
  if (!!_0x386069 && !_0x386069.get && !!_0x386069.configurable && _0x53d106 !== P && _0x53d106 !== U) {
    delete _0x386069.value;
    delete _0x386069.writable;
    _0x386069.get = () => _0x12c6b2[P][_0x53d106];
  }
  return _0x386069;
}
function _e(_0x1ce206) {
  if (ve()) {
    const _0x29e7fe = ue(_0x1ce206);
    (_0x29e7fe._ ||= Pe())();
  }
}
function rt(_0x274b3b) {
  _e(_0x274b3b);
  return Reflect.ownKeys(_0x274b3b);
}
function Pe(_0x1462d2) {
  const [_0x3a571d, _0x46ca46] = X(_0x1462d2, {
    equals: false,
    internal: true
  });
  _0x3a571d.$ = _0x46ca46;
  return _0x3a571d;
}
const st = {
  get(_0xbaf574, _0x5d59b3, _0xeabe1e) {
    if (_0x5d59b3 === oe) {
      return _0xbaf574;
    }
    if (_0x5d59b3 === P) {
      return _0xeabe1e;
    }
    if (_0x5d59b3 === ne) {
      _e(_0xbaf574);
      return _0xeabe1e;
    }
    const _0x9d6ffa = ue(_0xbaf574);
    const _0xe9f2b7 = _0x9d6ffa[_0x5d59b3];
    let _0x56b647 = _0xe9f2b7 ? _0xe9f2b7() : _0xbaf574[_0x5d59b3];
    if (_0x5d59b3 === U || _0x5d59b3 === "__proto__") {
      return _0x56b647;
    }
    if (!_0xe9f2b7) {
      const _0x759531 = Object.getOwnPropertyDescriptor(_0xbaf574, _0x5d59b3);
      if (ve() && (typeof _0x56b647 != "function" || _0xbaf574.hasOwnProperty(_0x5d59b3)) && (!_0x759531 || !_0x759531.get)) {
        _0x56b647 = le(_0x9d6ffa, _0x5d59b3, _0x56b647)();
      }
    }
    if (V(_0x56b647)) {
      return Oe(_0x56b647);
    } else {
      return _0x56b647;
    }
  },
  has(_0x2b4b72, _0x7d9f6) {
    if (_0x7d9f6 === oe || _0x7d9f6 === P || _0x7d9f6 === ne || _0x7d9f6 === U || _0x7d9f6 === "__proto__") {
      return true;
    } else {
      this.get(_0x2b4b72, _0x7d9f6, _0x2b4b72);
      return _0x7d9f6 in _0x2b4b72;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: rt,
  getOwnPropertyDescriptor: it
};
function G(_0x18bb0d, _0x1146c3, _0x1a9c00, _0x3a97af = false) {
  if (!_0x3a97af && _0x18bb0d[_0x1146c3] === _0x1a9c00) {
    return;
  }
  const _0x59ff5c = _0x18bb0d[_0x1146c3];
  const _0x44266d = _0x18bb0d.length;
  if (_0x1a9c00 === undefined) {
    delete _0x18bb0d[_0x1146c3];
  } else {
    _0x18bb0d[_0x1146c3] = _0x1a9c00;
  }
  let _0x58c38f = ue(_0x18bb0d);
  let _0x29bfdd;
  if (_0x29bfdd = le(_0x58c38f, _0x1146c3, _0x59ff5c)) {
    _0x29bfdd.$(() => _0x1a9c00);
  }
  if (Array.isArray(_0x18bb0d) && _0x18bb0d.length !== _0x44266d) {
    for (let _0xcbe5f3 = _0x18bb0d.length; _0xcbe5f3 < _0x44266d; _0xcbe5f3++) {
      if (_0x29bfdd = _0x58c38f[_0xcbe5f3]) {
        _0x29bfdd.$();
      }
    }
    if (_0x29bfdd = le(_0x58c38f, "length", _0x44266d)) {
      _0x29bfdd.$(_0x18bb0d.length);
    }
  }
  if (_0x29bfdd = _0x58c38f._) {
    _0x29bfdd.$();
  }
}
function Ne(_0x185ec1, _0x58ea98) {
  const _0x207ce6 = Object.keys(_0x58ea98);
  for (let _0x55b9e0 = 0; _0x55b9e0 < _0x207ce6.length; _0x55b9e0 += 1) {
    const _0x30ab9f = _0x207ce6[_0x55b9e0];
    G(_0x185ec1, _0x30ab9f, _0x58ea98[_0x30ab9f]);
  }
}
function ot(_0x236a31, _0x1db4f8) {
  if (typeof _0x1db4f8 == "function") {
    _0x1db4f8 = _0x1db4f8(_0x236a31);
  }
  _0x1db4f8 = I(_0x1db4f8);
  if (Array.isArray(_0x1db4f8)) {
    if (_0x236a31 === _0x1db4f8) {
      return;
    }
    let _0x573ce9 = 0;
    let _0x55aa64 = _0x1db4f8.length;
    for (; _0x573ce9 < _0x55aa64; _0x573ce9++) {
      const _0x51fd2e = _0x1db4f8[_0x573ce9];
      if (_0x236a31[_0x573ce9] !== _0x51fd2e) {
        G(_0x236a31, _0x573ce9, _0x51fd2e);
      }
    }
    G(_0x236a31, "length", _0x55aa64);
  } else {
    Ne(_0x236a31, _0x1db4f8);
  }
}
function F(_0xfec06f, _0x5a351c, _0x3292b4 = []) {
  let _0xe4be7a;
  let _0x2606c0 = _0xfec06f;
  if (_0x5a351c.length > 1) {
    _0xe4be7a = _0x5a351c.shift();
    const _0x20d8fb = typeof _0xe4be7a;
    const _0x1373a3 = Array.isArray(_0xfec06f);
    if (Array.isArray(_0xe4be7a)) {
      for (let _0x235679 = 0; _0x235679 < _0xe4be7a.length; _0x235679++) {
        F(_0xfec06f, [_0xe4be7a[_0x235679]].concat(_0x5a351c), _0x3292b4);
      }
      return;
    } else if (_0x1373a3 && _0x20d8fb === "function") {
      for (let _0x2c63bc = 0; _0x2c63bc < _0xfec06f.length; _0x2c63bc++) {
        if (_0xe4be7a(_0xfec06f[_0x2c63bc], _0x2c63bc)) {
          F(_0xfec06f, [_0x2c63bc].concat(_0x5a351c), _0x3292b4);
        }
      }
      return;
    } else if (_0x1373a3 && _0x20d8fb === "object") {
      const {
        from: _0x1d9e67 = 0,
        to: _0x2c7e89 = _0xfec06f.length - 1,
        by: _0x1b0f0b = 1
      } = _0xe4be7a;
      for (let _0x1c5879 = _0x1d9e67; _0x1c5879 <= _0x2c7e89; _0x1c5879 += _0x1b0f0b) {
        F(_0xfec06f, [_0x1c5879].concat(_0x5a351c), _0x3292b4);
      }
      return;
    } else if (_0x5a351c.length > 1) {
      F(_0xfec06f[_0xe4be7a], _0x5a351c, [_0xe4be7a].concat(_0x3292b4));
      return;
    }
    _0x2606c0 = _0xfec06f[_0xe4be7a];
    _0x3292b4 = [_0xe4be7a].concat(_0x3292b4);
  }
  let _0x26fc6e = _0x5a351c[0];
  if ((typeof _0x26fc6e != "function" || !(_0x26fc6e = _0x26fc6e(_0x2606c0, _0x3292b4), _0x26fc6e === _0x2606c0)) && (_0xe4be7a !== undefined || _0x26fc6e != null)) {
    _0x26fc6e = I(_0x26fc6e);
    if (_0xe4be7a === undefined || V(_0x2606c0) && V(_0x26fc6e) && !Array.isArray(_0x26fc6e)) {
      Ne(_0x2606c0, _0x26fc6e);
    } else {
      G(_0xfec06f, _0xe4be7a, _0x26fc6e);
    }
  }
}
function lt(...[_0x557555, _0x435245]) {
  const _0x1e5645 = I(_0x557555 || {});
  const _0x84501e = Array.isArray(_0x1e5645);
  const _0x5bcca1 = Oe(_0x1e5645);
  function _0x7d3a8b(..._0x5bba40) {
    ie(() => {
      if (_0x84501e && _0x5bba40.length === 1) {
        ot(_0x1e5645, _0x5bba40[0]);
      } else {
        F(_0x1e5645, _0x5bba40);
      }
    });
  }
  return [_0x5bcca1, _0x7d3a8b];
}
const [ct, ft] = nt(() => {
  const [_0x48ec28, _0x2c0a8e] = lt({
    show: false,
    taxes: [],
    lockups: [],
    recentElections: [],
    upcomingElections: []
  });
  _0x31b3c2.register("setState", async function (_0x5babfb) {
    _0x2c0a8e(_0x5babfb);
  });
  return {
    state: _0x48ec28,
    setState: _0x2c0a8e
  };
});
const ut = () => ft();
var at = () => {};
var ge = (_0x4e80df, _0x4763b3) => _0x4763b3();
function dt(_0x21f9de, _0x3bbb3a) {
  const _0x208c89 = S(_0x21f9de);
  const _0xbbd254 = _0x208c89 ? [_0x208c89] : [];
  const {
    onEnter: _0x379507 = ge,
    onExit: _0x5a1819 = ge
  } = _0x3bbb3a;
  const [_0xa2dd76, _0x3ea148] = X(_0x3bbb3a.appear ? [] : _0xbbd254);
  const [_0x2005b4] = qe();
  let _0x260c7e;
  let _0x3eee5a = false;
  function _0x4b6999(_0x3b1621, _0xa52f4a) {
    if (!_0x3b1621) {
      return _0xa52f4a && _0xa52f4a();
    }
    _0x3eee5a = true;
    _0x5a1819(_0x3b1621, () => {
      ie(() => {
        _0x3eee5a = false;
        _0x3ea148(_0x2bbfe9 => _0x2bbfe9.filter(_0x5792f8 => _0x5792f8 !== _0x3b1621));
        if (_0xa52f4a) {
          _0xa52f4a();
        }
      });
    });
  }
  function _0x57809b(_0x2b172e) {
    const _0x1d6def = _0x260c7e;
    if (!_0x1d6def) {
      return _0x2b172e && _0x2b172e();
    }
    _0x260c7e = undefined;
    _0x3ea148(_0x2b7a25 => [_0x1d6def, ..._0x2b7a25]);
    _0x379507(_0x1d6def, _0x2b172e ?? at);
  }
  const _0x43fe60 = _0x3bbb3a.mode === "out-in" ? _0x4d8452 => _0x3eee5a || _0x4b6999(_0x4d8452, _0x57809b) : _0x3bbb3a.mode === "in-out" ? _0x276105 => _0x57809b(() => _0x4b6999(_0x276105)) : _0x5c205f => {
    _0x4b6999(_0x5c205f);
    _0x57809b();
  };
  Ie(_0x34fd5d => {
    const _0xeba60d = _0x21f9de();
    if (S(_0x2005b4)) {
      _0x2005b4();
      return _0x34fd5d;
    } else {
      if (_0xeba60d !== _0x34fd5d) {
        _0x260c7e = _0xeba60d;
        ie(() => S(() => _0x43fe60(_0x34fd5d)));
      }
      return _0xeba60d;
    }
  }, _0x3bbb3a.appear ? undefined : _0x208c89);
  return _0xa2dd76;
}
var pe = _0x19178d => _0x19178d instanceof Element;
function ce(_0x4612d1, _0x7cb331) {
  if (_0x7cb331(_0x4612d1)) {
    return _0x4612d1;
  }
  if (typeof _0x4612d1 == "function" && !_0x4612d1.length) {
    return ce(_0x4612d1(), _0x7cb331);
  }
  if (Array.isArray(_0x4612d1)) {
    for (const _0x5c0dbf of _0x4612d1) {
      const _0x5085ec = ce(_0x5c0dbf, _0x7cb331);
      if (_0x5085ec) {
        return _0x5085ec;
      }
    }
  }
  return null;
}
function ht(_0x5c0b17, _0x3161cf = pe, _0x2d1a56 = pe) {
  const _0x134db6 = T(_0x5c0b17);
  return T(() => ce(_0x134db6(), _0x3161cf));
}
function gt(_0x5157d7) {
  return T(() => {
    const _0x24eb2c = _0x5157d7.name || "s";
    return {
      enterActive: (_0x5157d7.enterActiveClass || _0x24eb2c + "-enter-active").split(" "),
      enter: (_0x5157d7.enterClass || _0x24eb2c + "-enter").split(" "),
      enterTo: (_0x5157d7.enterToClass || _0x24eb2c + "-enter-to").split(" "),
      exitActive: (_0x5157d7.exitActiveClass || _0x24eb2c + "-exit-active").split(" "),
      exit: (_0x5157d7.exitClass || _0x24eb2c + "-exit").split(" "),
      exitTo: (_0x5157d7.exitToClass || _0x24eb2c + "-exit-to").split(" "),
      move: (_0x5157d7.moveClass || _0x24eb2c + "-move").split(" ")
    };
  });
}
function De(_0x44e0a6) {
  requestAnimationFrame(() => requestAnimationFrame(_0x44e0a6));
}
function pt(_0x1499e8, _0x5d52ee, _0x104ced, _0x853db8) {
  const {
    onBeforeEnter: _0x6a4112,
    onEnter: _0x2b51f4,
    onAfterEnter: _0x5783d4
  } = _0x5d52ee;
  _0x6a4112?.(_0x104ced);
  _0x104ced.classList.add(..._0x1499e8.enter);
  _0x104ced.classList.add(..._0x1499e8.enterActive);
  queueMicrotask(() => {
    if (!_0x104ced.parentNode) {
      return _0x853db8?.();
    }
    _0x2b51f4?.(_0x104ced, () => _0x504206());
  });
  De(() => {
    _0x104ced.classList.remove(..._0x1499e8.enter);
    _0x104ced.classList.add(..._0x1499e8.enterTo);
    if (!_0x2b51f4 || _0x2b51f4.length < 2) {
      _0x104ced.addEventListener("transitionend", _0x504206);
      _0x104ced.addEventListener("animationend", _0x504206);
    }
  });
  function _0x504206(_0x56bca6) {
    if (!_0x56bca6 || _0x56bca6.target === _0x104ced) {
      _0x853db8?.();
      _0x104ced.removeEventListener("transitionend", _0x504206);
      _0x104ced.removeEventListener("animationend", _0x504206);
      _0x104ced.classList.remove(..._0x1499e8.enterActive);
      _0x104ced.classList.remove(..._0x1499e8.enterTo);
      _0x5783d4?.(_0x104ced);
    }
  }
}
function mt(_0x3caf95, _0x5f5634, _0x47cc69, _0x218d6d) {
  const {
    onBeforeExit: _0x2301ca,
    onExit: _0x2bebcc,
    onAfterExit: _0x3c34bf
  } = _0x5f5634;
  if (!_0x47cc69.parentNode) {
    return _0x218d6d?.();
  }
  _0x2301ca?.(_0x47cc69);
  _0x47cc69.classList.add(..._0x3caf95.exit);
  _0x47cc69.classList.add(..._0x3caf95.exitActive);
  _0x2bebcc?.(_0x47cc69, () => _0x1f1b7e());
  De(() => {
    _0x47cc69.classList.remove(..._0x3caf95.exit);
    _0x47cc69.classList.add(..._0x3caf95.exitTo);
    if (!_0x2bebcc || _0x2bebcc.length < 2) {
      _0x47cc69.addEventListener("transitionend", _0x1f1b7e);
      _0x47cc69.addEventListener("animationend", _0x1f1b7e);
    }
  });
  function _0x1f1b7e(_0x36db14) {
    if (!_0x36db14 || _0x36db14.target === _0x47cc69) {
      _0x218d6d?.();
      _0x47cc69.removeEventListener("transitionend", _0x1f1b7e);
      _0x47cc69.removeEventListener("animationend", _0x1f1b7e);
      _0x47cc69.classList.remove(..._0x3caf95.exitActive);
      _0x47cc69.classList.remove(..._0x3caf95.exitTo);
      _0x3c34bf?.(_0x47cc69);
    }
  }
}
var yt = {
  inout: "in-out",
  outin: "out-in"
};
var bt = _0x51cc2b => {
  const _0x1a2a6e = gt(_0x51cc2b);
  return dt(ht(() => _0x51cc2b.children), {
    mode: yt[_0x51cc2b.mode],
    appear: _0x51cc2b.appear,
    onEnter(_0x3bd314, _0x50d596) {
      pt(_0x1a2a6e(), _0x51cc2b, _0x3bd314, _0x50d596);
    },
    onExit(_0x59027f, _0x3efdde) {
      mt(_0x1a2a6e(), _0x51cc2b, _0x59027f, _0x3efdde);
    }
  });
};
const wt = "" + new URL("logo-123eb4a8.svg", import.meta.url).href;
const xt = "" + new URL("overlay-11c56314.png", import.meta.url).href;
const me = "" + new URL("background-abf55e8b.png", import.meta.url).href;
var je = {
  exports: {}
};
(function (_0x4a3097) {
  (function () {
    var _0x1997d3 = {}.hasOwnProperty;
    function _0xb4e0ef() {
      var _0x38875d = "";
      for (var _0x25313f = 0; _0x25313f < arguments.length; _0x25313f++) {
        var _0x36a459 = arguments[_0x25313f];
        if (_0x36a459) {
          _0x38875d = _0x46a02a(_0x38875d, _0x52ca96(_0x36a459));
        }
      }
      return _0x38875d;
    }
    function _0x52ca96(_0x2fa585) {
      if (typeof _0x2fa585 == "string" || typeof _0x2fa585 == "number") {
        return _0x2fa585;
      }
      if (typeof _0x2fa585 != "object") {
        return "";
      }
      if (Array.isArray(_0x2fa585)) {
        return _0xb4e0ef.apply(null, _0x2fa585);
      }
      if (_0x2fa585.toString !== Object.prototype.toString && !_0x2fa585.toString.toString().includes("[native code]")) {
        return _0x2fa585.toString();
      }
      var _0x3cf823 = "";
      for (var _0x34fd0e in _0x2fa585) {
        if (_0x1997d3.call(_0x2fa585, _0x34fd0e) && _0x2fa585[_0x34fd0e]) {
          _0x3cf823 = _0x46a02a(_0x3cf823, _0x34fd0e);
        }
      }
      return _0x3cf823;
    }
    function _0x46a02a(_0x213990, _0x4cd3e6) {
      if (_0x4cd3e6) {
        if (_0x213990) {
          return _0x213990 + " " + _0x4cd3e6;
        } else {
          return _0x213990 + _0x4cd3e6;
        }
      } else {
        return _0x213990;
      }
    }
    if (_0x4a3097.exports) {
      _0xb4e0ef.default = _0xb4e0ef;
      _0x4a3097.exports = _0xb4e0ef;
    } else {
      window.classNames = _0xb4e0ef;
    }
  })();
})(je);
var vt = je.exports;
const te = _0x327a33(vt);
const At = fe("<p>");
const St = fe("<div class=\"flex w-[85%] flex-col gap-2\"><h1></h1><p>");
const B = _0x1cef0e => (() => {
  const _0x39f683 = St();
  const _0x569d9e = _0x39f683.firstChild;
  const _0x1bd2eb = _0x569d9e.nextSibling;
  C(_0x569d9e, () => _0x1cef0e.title);
  C(_0x39f683, A(Le, {
    get when() {
      return _0x1cef0e.subTitle;
    },
    get children() {
      const _0x4a01c9 = At();
      C(_0x4a01c9, () => _0x1cef0e.subTitle);
      R(() => ee(_0x4a01c9, te("w-content inline-block bg-[#363636] px-2 py-1 text-left text-center text-[0.7rem] font-normal not-italic text-white")));
      return _0x4a01c9;
    }
  }), _0x1bd2eb);
  C(_0x1bd2eb, () => _0x1cef0e.description);
  R(_0x32bbe7 => {
    const _0xf439e1 = te("text-center text-[1.5rem] font-bold italic text-[#363636]");
    const _0xe7703f = te("whitespace-pre-wrap text-center text-[0.70rem] font-normal not-italic text-[#363636]");
    if (_0xf439e1 !== _0x32bbe7._v$) {
      ee(_0x569d9e, _0x32bbe7._v$ = _0xf439e1);
    }
    if (_0xe7703f !== _0x32bbe7._v$2) {
      ee(_0x1bd2eb, _0x32bbe7._v$2 = _0xe7703f);
    }
    return _0x32bbe7;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x39f683;
})();
const Et = fe("<div class=\"flex h-full w-full items-center justify-center\"><div class=\"relative flex h-[90vh] w-[50vw] \"><img class=\"pointer-events-none absolute right-[-7rem] top-[-2rem] z-10 h-[97vh] scale-x-[-1] transform select-none object-cover\"><img class=\"pointer-events-none absolute left-[-7rem] top-[-2rem] z-10 h-[97vh] transform select-none object-cover\"><div class=\"z-20 flex h-full w-full flex-col bg-[#DFD2D1]\"><img class=\"pointer-events-none absolute inset-0 h-full w-full select-none object-cover mix-blend-soft-light\"><section class=\"flex h-[5rem] w-full items-center justify-center bg-[#1D3D70] py-[1rem]\"><img class=\"h-full\"></section><section class=\"flex w-full items-center justify-between bg-[#C44C45] px-4 py-2\"><p class=\"text-center text-[0.75rem] font-normal not-italic text-white\">EDITION: 49.726</p><p class=\"text-center text-[0.75rem] font-normal not-italic text-white\">The second best selling newspaper in the World</p><p class=\"text-center text-[0.75rem] font-normal not-italic text-white\">Current News</section><section class=\"flex h-full w-full gap-2 overflow-hidden p-4\"><div class=\"flex w-full flex-col items-center gap-6 overflow-x-hidden overflow-y-scroll pb-2\"></div><div class=\"flex w-full flex-col items-center gap-6 overflow-x-hidden overflow-y-scroll border-l-2 border-solid border-[#363636] px-2 pb-2\"></div><div class=\"flex w-full flex-col items-center gap-6 overflow-x-hidden overflow-y-scroll border-x-2 border-solid border-[#363636] px-2 pb-2\"></div><div class=\"flex w-full flex-col items-center gap-6 overflow-x-hidden overflow-y-scroll pb-2\"></section><section class=\"border-[#363636]text-center flex h-[2.5rem] items-center justify-center border-t-2 border-solid text-[0.70rem] font-normal not-italic text-[#363636]\">CURRENT TAX RATES: ");
const Ct = () => {
  const {
    state: _0x1aa903,
    setState: _0x515a27
  } = ut();
  const _0xe4ea57 = _0x378a1c => {
    if (_0x378a1c.key === "Escape" && _0x1aa903.show) {
      _0x515a27({
        show: false
      });
      _0x31b3c2.execute("close");
    }
  };
  const _0x592009 = T(() => _0x1aa903.lockups.length <= 0 ? "Police department have made zero arrests today, so much for tax payers funding them right?.." : _0x1aa903.lockups.map(_0x9ecabc => _0x9ecabc.name + " " + _0x9ecabc.duration + " Months").join("\n"));
  const _0x394698 = T(() => _0x1aa903.taxes.map(_0x3d0066 => _0x3d0066.type + " " + _0x3d0066.level + "%").join(" | "));
  Me(async () => {
    document.addEventListener("keydown", _0xe4ea57);
  });
  xe(() => {
    document.removeEventListener("keydown", _0xe4ea57);
  });
  return A(bt, {
    onEnter: (_0xc76ff1, _0x52a463) => {
      _0xc76ff1.animate([{
        transform: "translateY(100%)"
      }, {
        transform: "translateY(0)"
      }], {
        duration: 600,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
      }).finished.then(_0x52a463);
    },
    onExit: (_0x295924, _0x2df26b) => {
      _0x295924.animate([{
        transform: "translateY(0)"
      }, {
        transform: "translateY(100%)"
      }], {
        duration: 400,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
      }).finished.then(_0x2df26b);
    },
    get children() {
      return A(Le, {
        get when() {
          return _0x1aa903.show;
        },
        get children() {
          const _0x199a90 = Et();
          const _0x2872ff = _0x199a90.firstChild;
          const _0x28b663 = _0x2872ff.firstChild;
          const _0x15ad11 = _0x28b663.nextSibling;
          const _0xca375 = _0x15ad11.nextSibling;
          const _0x48f52b = _0xca375.firstChild;
          const _0x1317cc = _0x48f52b.nextSibling;
          const _0x3fc01c = _0x1317cc.firstChild;
          const _0x508a1e = _0x1317cc.nextSibling;
          const _0x4b9f0e = _0x508a1e.nextSibling;
          const _0x5679e4 = _0x4b9f0e.firstChild;
          const _0x4f95ef = _0x5679e4.nextSibling;
          const _0x28ba41 = _0x4f95ef.nextSibling;
          const _0x35e2e0 = _0x28ba41.nextSibling;
          const _0x13dc2b = _0x4b9f0e.nextSibling;
          _0x13dc2b.firstChild;
          _(_0x28b663, "src", me);
          _(_0x28b663, "draggable", false);
          _(_0x15ad11, "src", me);
          _(_0x15ad11, "draggable", false);
          _(_0x48f52b, "src", xt);
          _(_0x48f52b, "draggable", false);
          _(_0x3fc01c, "src", wt);
          C(_0x5679e4, A(de, {
            get each() {
              return _0x1aa903.upcomingElections;
            },
            children: _0x3dc8d7 => A(B, {
              get title() {
                return _0x3dc8d7.name;
              },
              get subTitle() {
                return new Date(_0x3dc8d7.start_date * 1000).toLocaleDateString();
              },
              get description() {
                return _0x3dc8d7.description;
              }
            })
          }));
          C(_0x4f95ef, A(de, {
            get each() {
              return _0x1aa903.recentElections;
            },
            children: _0x3a2844 => A(B, {
              get title() {
                return _0x3a2844.name;
              },
              get subTitle() {
                return new Date(_0x3a2844.end_date * 1000).toLocaleDateString();
              },
              get description() {
                return _0x3a2844.description;
              }
            })
          }));
          C(_0x28ba41, A(B, {
            title: "LOCKUPS",
            subTitle: "PD Gang W's",
            get description() {
              return _0x592009();
            }
          }));
          C(_0x35e2e0, A(B, {
            title: "DRUGS",
            subTitle: "by Chips Ahoy",
            description: "Drug Epidemic spotted around Chamberlain Hills, according to recent statistics Cocaine is the most sought after drug around West Vinewood according to LSPD investigations."
          }));
          C(_0x13dc2b, _0x394698, null);
          return _0x199a90;
        }
      });
    }
  });
};
tt(() => A(ct, {
  get children() {
    return A(Ct, {});
  }
}), document.getElementById("root"));