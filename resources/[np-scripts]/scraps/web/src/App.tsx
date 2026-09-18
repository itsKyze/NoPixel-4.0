import './style.css';
import { N as _0x1c504f } from "./v-packages-6cb79519.js";
(function () {
  const _0x56425e = document.createElement("link").relList;
  if (_0x56425e && _0x56425e.supports && _0x56425e.supports("modulepreload")) {
    return;
  }
  for (const _0xd321ca of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x26d36d(_0xd321ca);
  }
  new MutationObserver(_0x1d7961 => {
    for (const _0x50023a of _0x1d7961) {
      if (_0x50023a.type === "childList") {
        for (const _0x5128c3 of _0x50023a.addedNodes) {
          if (_0x5128c3.tagName === "LINK" && _0x5128c3.rel === "modulepreload") {
            _0x26d36d(_0x5128c3);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x12e805(_0x1f0be5) {
    const _0xb51c63 = {};
    if (_0x1f0be5.integrity) {
      _0xb51c63.integrity = _0x1f0be5.integrity;
    }
    if (_0x1f0be5.referrerPolicy) {
      _0xb51c63.referrerPolicy = _0x1f0be5.referrerPolicy;
    }
    if (_0x1f0be5.crossOrigin === "use-credentials") {
      _0xb51c63.credentials = "include";
    } else if (_0x1f0be5.crossOrigin === "anonymous") {
      _0xb51c63.credentials = "omit";
    } else {
      _0xb51c63.credentials = "same-origin";
    }
    return _0xb51c63;
  }
  function _0x26d36d(_0x3a687c) {
    if (_0x3a687c.ep) {
      return;
    }
    _0x3a687c.ep = true;
    const _0x42d477 = _0x12e805(_0x3a687c);
    fetch(_0x3a687c.href, _0x42d477);
  }
})();
const ln = (_0x542c46, _0x5b28d9) => _0x542c46 === _0x5b28d9;
const Z = Symbol("solid-proxy");
const et = Symbol("solid-track");
const ze = {
  equals: ln
};
let Nt = qt;
const fe = 1;
const Be = 2;
const Vt = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var D = null;
let Je = null;
let S = null;
let N = null;
let ue = null;
let Ge = 0;
function Me(_0x3f45c3, _0x12111c) {
  const _0x23eb1a = S;
  const _0xe04cb2 = D;
  const _0x28b5d8 = _0x3f45c3.length === 0;
  const _0x42ff38 = _0x28b5d8 ? Vt : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x12111c === undefined ? _0xe04cb2 : _0x12111c
  };
  const _0x1a705a = _0x28b5d8 ? _0x3f45c3 : () => _0x3f45c3(() => K(() => Xe(_0x42ff38)));
  D = _0x42ff38;
  S = null;
  try {
    return xe(_0x1a705a, true);
  } finally {
    S = _0x23eb1a;
    D = _0xe04cb2;
  }
}
function x(_0x17232a, _0x42eb63) {
  _0x42eb63 = _0x42eb63 ? Object.assign({}, ze, _0x42eb63) : ze;
  const _0xc65cc1 = {
    value: _0x17232a,
    observers: null,
    observerSlots: null,
    comparator: _0x42eb63.equals || undefined
  };
  const _0x143a84 = _0x26dc01 => {
    if (typeof _0x26dc01 == "function") {
      _0x26dc01 = _0x26dc01(_0xc65cc1.value);
    }
    return Ht(_0xc65cc1, _0x26dc01);
  };
  return [Ft.bind(_0xc65cc1), _0x143a84];
}
function P(_0x5d37fb, _0x25e5b7, _0x293d93) {
  const _0x5fb8ce = ot(_0x5d37fb, _0x25e5b7, false, fe);
  Le(_0x5fb8ce);
}
function F(_0x1ea261, _0x16985c, _0x4cc74d) {
  Nt = cn;
  const _0x5e106e = ot(_0x1ea261, _0x16985c, false, fe);
  if (!_0x4cc74d || !_0x4cc74d.render) {
    _0x5e106e.user = true;
  }
  if (ue) {
    ue.push(_0x5e106e);
  } else {
    Le(_0x5e106e);
  }
}
function H(_0x18de48, _0x1743d6, _0x38c761) {
  _0x38c761 = _0x38c761 ? Object.assign({}, ze, _0x38c761) : ze;
  const _0x5597b8 = ot(_0x18de48, _0x1743d6, true, 0);
  _0x5597b8.observers = null;
  _0x5597b8.observerSlots = null;
  _0x5597b8.comparator = _0x38c761.equals || undefined;
  Le(_0x5597b8);
  return Ft.bind(_0x5597b8);
}
function on(_0x9dd1b6) {
  return xe(_0x9dd1b6, false);
}
function K(_0x188a47) {
  if (S === null) {
    return _0x188a47();
  }
  const _0x44430e = S;
  S = null;
  try {
    return _0x188a47();
  } finally {
    S = _0x44430e;
  }
}
function ce(_0x1f0471, _0x28bdc5, _0x45c513) {
  const _0x456e36 = Array.isArray(_0x1f0471);
  let _0x57ac17;
  let _0x4b65d7 = _0x45c513 && _0x45c513.defer;
  return _0x199809 => {
    let _0x173560;
    if (_0x456e36) {
      _0x173560 = Array(_0x1f0471.length);
      for (let _0x4a19b5 = 0; _0x4a19b5 < _0x1f0471.length; _0x4a19b5++) {
        _0x173560[_0x4a19b5] = _0x1f0471[_0x4a19b5]();
      }
    } else {
      _0x173560 = _0x1f0471();
    }
    if (_0x4b65d7) {
      _0x4b65d7 = false;
      return;
    }
    const _0x3121c7 = K(() => _0x28bdc5(_0x173560, _0x57ac17, _0x199809));
    _0x57ac17 = _0x173560;
    return _0x3121c7;
  };
}
function sn(_0x34a4a7) {
  F(() => K(_0x34a4a7));
}
function jt(_0x3d5600) {
  if (D !== null) {
    if (D.cleanups === null) {
      D.cleanups = [_0x3d5600];
    } else {
      D.cleanups.push(_0x3d5600);
    }
  }
  return _0x3d5600;
}
function Mt() {
  return S;
}
function Ut(_0x22d63, _0x2ebfdc) {
  const _0x268f3a = Symbol("context");
  return {
    id: _0x268f3a,
    Provider: fn(_0x268f3a),
    defaultValue: _0x22d63
  };
}
function zt(_0x4aec7c) {
  let _0x289a13;
  if ((_0x289a13 = Yt(D, _0x4aec7c.id)) !== undefined) {
    return _0x289a13;
  } else {
    return _0x4aec7c.defaultValue;
  }
}
function Bt(_0x432bc5) {
  const _0x40e92e = H(_0x432bc5);
  const _0x1d7c13 = H(() => tt(_0x40e92e()));
  _0x1d7c13.toArray = () => {
    const _0x187ca8 = _0x1d7c13();
    if (Array.isArray(_0x187ca8)) {
      return _0x187ca8;
    } else if (_0x187ca8 != null) {
      return [_0x187ca8];
    } else {
      return [];
    }
  };
  return _0x1d7c13;
}
function Ft() {
  if (this.sources && this.state) {
    if (this.state === fe) {
      Le(this);
    } else {
      const _0xd3d202 = N;
      N = null;
      xe(() => He(this), false);
      N = _0xd3d202;
    }
  }
  if (S) {
    const _0x4d2f84 = this.observers ? this.observers.length : 0;
    if (S.sources) {
      S.sources.push(this);
      S.sourceSlots.push(_0x4d2f84);
    } else {
      S.sources = [this];
      S.sourceSlots = [_0x4d2f84];
    }
    if (this.observers) {
      this.observers.push(S);
      this.observerSlots.push(S.sources.length - 1);
    } else {
      this.observers = [S];
      this.observerSlots = [S.sources.length - 1];
    }
  }
  return this.value;
}
function Ht(_0x4f6823, _0x100ead, _0x52c3f4) {
  let _0x557721 = _0x4f6823.value;
  if (!_0x4f6823.comparator || !_0x4f6823.comparator(_0x557721, _0x100ead)) {
    _0x4f6823.value = _0x100ead;
    if (_0x4f6823.observers && _0x4f6823.observers.length) {
      xe(() => {
        for (let _0x480571 = 0; _0x480571 < _0x4f6823.observers.length; _0x480571 += 1) {
          const _0x518bcf = _0x4f6823.observers[_0x480571];
          const _0x507ece = Je && Je.running;
          if (_0x507ece) {
            Je.disposed.has(_0x518bcf);
          }
          if (_0x507ece ? !_0x518bcf.tState : !_0x518bcf.state) {
            if (_0x518bcf.pure) {
              N.push(_0x518bcf);
            } else {
              ue.push(_0x518bcf);
            }
            if (_0x518bcf.observers) {
              Kt(_0x518bcf);
            }
          }
          if (!_0x507ece) {
            _0x518bcf.state = fe;
          }
        }
        if (N.length > 1000000) {
          N = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x100ead;
}
function Le(_0x1c02ec) {
  if (!_0x1c02ec.fn) {
    return;
  }
  Xe(_0x1c02ec);
  const _0x624d30 = D;
  const _0xd24bf8 = S;
  const _0x11e51f = Ge;
  S = D = _0x1c02ec;
  un(_0x1c02ec, _0x1c02ec.value, _0x11e51f);
  S = _0xd24bf8;
  D = _0x624d30;
}
function un(_0x10bd51, _0x170f70, _0x1cce86) {
  let _0x52e0b8;
  try {
    _0x52e0b8 = _0x10bd51.fn(_0x170f70);
  } catch (_0x4f7a1e) {
    if (_0x10bd51.pure) {
      _0x10bd51.state = fe;
      if (_0x10bd51.owned) {
        _0x10bd51.owned.forEach(Xe);
      }
      _0x10bd51.owned = null;
    }
    _0x10bd51.updatedAt = _0x1cce86 + 1;
    return Wt(_0x4f7a1e);
  }
  if (!_0x10bd51.updatedAt || _0x10bd51.updatedAt <= _0x1cce86) {
    if (_0x10bd51.updatedAt != null && "observers" in _0x10bd51) {
      Ht(_0x10bd51, _0x52e0b8);
    } else {
      _0x10bd51.value = _0x52e0b8;
    }
    _0x10bd51.updatedAt = _0x1cce86;
  }
}
function ot(_0x178d7f, _0x1a4f56, _0x710c85, _0x44fecd = fe, _0x1da9b1) {
  const _0x43fbea = {
    fn: _0x178d7f,
    state: _0x44fecd,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x1a4f56,
    owner: D,
    context: null,
    pure: _0x710c85
  };
  if (D !== null) {
    if (D !== Vt) {
      if (D.owned) {
        D.owned.push(_0x43fbea);
      } else {
        D.owned = [_0x43fbea];
      }
    }
  }
  return _0x43fbea;
}
function Fe(_0x2ac649) {
  if (_0x2ac649.state === 0) {
    return;
  }
  if (_0x2ac649.state === Be) {
    return He(_0x2ac649);
  }
  if (_0x2ac649.suspense && K(_0x2ac649.suspense.inFallback)) {
    return _0x2ac649.suspense.effects.push(_0x2ac649);
  }
  const _0x3ca6f = [_0x2ac649];
  while ((_0x2ac649 = _0x2ac649.owner) && (!_0x2ac649.updatedAt || _0x2ac649.updatedAt < Ge)) {
    if (_0x2ac649.state) {
      _0x3ca6f.push(_0x2ac649);
    }
  }
  for (let _0x386356 = _0x3ca6f.length - 1; _0x386356 >= 0; _0x386356--) {
    _0x2ac649 = _0x3ca6f[_0x386356];
    if (_0x2ac649.state === fe) {
      Le(_0x2ac649);
    } else if (_0x2ac649.state === Be) {
      const _0x394d42 = N;
      N = null;
      xe(() => He(_0x2ac649, _0x3ca6f[0]), false);
      N = _0x394d42;
    }
  }
}
function xe(_0x2fb85d, _0x386519) {
  if (N) {
    return _0x2fb85d();
  }
  let _0x1aaed9 = false;
  if (!_0x386519) {
    N = [];
  }
  if (ue) {
    _0x1aaed9 = true;
  } else {
    ue = [];
  }
  Ge++;
  try {
    const _0x1c3114 = _0x2fb85d();
    an(_0x1aaed9);
    return _0x1c3114;
  } catch (_0x4f200d) {
    if (!_0x1aaed9) {
      ue = null;
    }
    N = null;
    Wt(_0x4f200d);
  }
}
function an(_0x473ef6) {
  if (N) {
    qt(N);
    N = null;
  }
  if (_0x473ef6) {
    return;
  }
  const _0x2f6b98 = ue;
  ue = null;
  if (_0x2f6b98.length) {
    xe(() => Nt(_0x2f6b98), false);
  }
}
function qt(_0x3e9146) {
  for (let _0x1cd654 = 0; _0x1cd654 < _0x3e9146.length; _0x1cd654++) {
    Fe(_0x3e9146[_0x1cd654]);
  }
}
function cn(_0x255d24) {
  let _0x12aae3;
  let _0xa07e6c = 0;
  for (_0x12aae3 = 0; _0x12aae3 < _0x255d24.length; _0x12aae3++) {
    const _0x171041 = _0x255d24[_0x12aae3];
    if (_0x171041.user) {
      _0x255d24[_0xa07e6c++] = _0x171041;
    } else {
      Fe(_0x171041);
    }
  }
  for (_0x12aae3 = 0; _0x12aae3 < _0xa07e6c; _0x12aae3++) {
    Fe(_0x255d24[_0x12aae3]);
  }
}
function He(_0x4a20d2, _0x19e95c) {
  _0x4a20d2.state = 0;
  for (let _0x19c558 = 0; _0x19c558 < _0x4a20d2.sources.length; _0x19c558 += 1) {
    const _0x45beba = _0x4a20d2.sources[_0x19c558];
    if (_0x45beba.sources) {
      const _0x688e9c = _0x45beba.state;
      if (_0x688e9c === fe) {
        if (_0x45beba !== _0x19e95c && (!_0x45beba.updatedAt || _0x45beba.updatedAt < Ge)) {
          Fe(_0x45beba);
        }
      } else if (_0x688e9c === Be) {
        He(_0x45beba, _0x19e95c);
      }
    }
  }
}
function Kt(_0x1db4fd) {
  for (let _0x53c18f = 0; _0x53c18f < _0x1db4fd.observers.length; _0x53c18f += 1) {
    const _0xa8358 = _0x1db4fd.observers[_0x53c18f];
    if (!_0xa8358.state) {
      _0xa8358.state = Be;
      if (_0xa8358.pure) {
        N.push(_0xa8358);
      } else {
        ue.push(_0xa8358);
      }
      if (_0xa8358.observers) {
        Kt(_0xa8358);
      }
    }
  }
}
function Xe(_0x5735a3) {
  let _0x7c5a90;
  if (_0x5735a3.sources) {
    while (_0x5735a3.sources.length) {
      const _0x4bd548 = _0x5735a3.sources.pop();
      const _0x44236f = _0x5735a3.sourceSlots.pop();
      const _0x41429a = _0x4bd548.observers;
      if (_0x41429a && _0x41429a.length) {
        const _0x746173 = _0x41429a.pop();
        const _0x133266 = _0x4bd548.observerSlots.pop();
        if (_0x44236f < _0x41429a.length) {
          _0x746173.sourceSlots[_0x133266] = _0x44236f;
          _0x41429a[_0x44236f] = _0x746173;
          _0x4bd548.observerSlots[_0x44236f] = _0x133266;
        }
      }
    }
  }
  if (_0x5735a3.owned) {
    for (_0x7c5a90 = _0x5735a3.owned.length - 1; _0x7c5a90 >= 0; _0x7c5a90--) {
      Xe(_0x5735a3.owned[_0x7c5a90]);
    }
    _0x5735a3.owned = null;
  }
  if (_0x5735a3.cleanups) {
    for (_0x7c5a90 = _0x5735a3.cleanups.length - 1; _0x7c5a90 >= 0; _0x7c5a90--) {
      _0x5735a3.cleanups[_0x7c5a90]();
    }
    _0x5735a3.cleanups = null;
  }
  _0x5735a3.state = 0;
  _0x5735a3.context = null;
}
function Wt(_0x2fc468) {
  throw _0x2fc468;
}
function Yt(_0x2a01b1, _0x5a4115) {
  if (_0x2a01b1) {
    if (_0x2a01b1.context && _0x2a01b1.context[_0x5a4115] !== undefined) {
      return _0x2a01b1.context[_0x5a4115];
    } else {
      return Yt(_0x2a01b1.owner, _0x5a4115);
    }
  } else {
    return undefined;
  }
}
function tt(_0x3bd784) {
  if (typeof _0x3bd784 == "function" && !_0x3bd784.length) {
    return tt(_0x3bd784());
  }
  if (Array.isArray(_0x3bd784)) {
    const _0x59fb3a = [];
    for (let _0x54f96a = 0; _0x54f96a < _0x3bd784.length; _0x54f96a++) {
      const _0x58c005 = tt(_0x3bd784[_0x54f96a]);
      if (Array.isArray(_0x58c005)) {
        _0x59fb3a.push.apply(_0x59fb3a, _0x58c005);
      } else {
        _0x59fb3a.push(_0x58c005);
      }
    }
    return _0x59fb3a;
  }
  return _0x3bd784;
}
function fn(_0x535fe6, _0x51cc3c) {
  return function (_0x5d262a) {
    let _0x5ba2ee;
    P(() => _0x5ba2ee = K(() => {
      D.context = {
        [_0x535fe6]: _0x5d262a.value
      };
      return Bt(() => _0x5d262a.children);
    }), undefined);
    return _0x5ba2ee;
  };
}
const dn = Symbol("fallback");
function Pt(_0x3cbf20) {
  for (let _0x15428f = 0; _0x15428f < _0x3cbf20.length; _0x15428f++) {
    _0x3cbf20[_0x15428f]();
  }
}
function vn(_0xf6f3c3, _0x2112f2, _0x38cc8b = {}) {
  let _0x2b4299 = [];
  let _0x42e9d0 = [];
  let _0x220257 = [];
  let _0x24c747 = 0;
  let _0x1c0984 = _0x2112f2.length > 1 ? [] : null;
  jt(() => Pt(_0x220257));
  return () => {
    let _0x4b5b3f = _0xf6f3c3() || [];
    let _0x12d772;
    let _0x5c03f4;
    _0x4b5b3f[et];
    return K(() => {
      let _0x5f459b = _0x4b5b3f.length;
      let _0xc94c49;
      let _0x6e0b37;
      let _0x5e21d9;
      let _0x2fda34;
      let _0x3b5b39;
      let _0x12f3da;
      let _0x43e6e3;
      let _0x3613a3;
      let _0xf982cf;
      if (_0x5f459b === 0) {
        if (_0x24c747 !== 0) {
          Pt(_0x220257);
          _0x220257 = [];
          _0x2b4299 = [];
          _0x42e9d0 = [];
          _0x24c747 = 0;
          _0x1c0984 &&= [];
        }
        if (_0x38cc8b.fallback) {
          _0x2b4299 = [dn];
          _0x42e9d0[0] = Me(_0x4c982e => {
            _0x220257[0] = _0x4c982e;
            return _0x38cc8b.fallback();
          });
          _0x24c747 = 1;
        }
      } else if (_0x24c747 === 0) {
        _0x42e9d0 = new Array(_0x5f459b);
        _0x5c03f4 = 0;
        for (; _0x5c03f4 < _0x5f459b; _0x5c03f4++) {
          _0x2b4299[_0x5c03f4] = _0x4b5b3f[_0x5c03f4];
          _0x42e9d0[_0x5c03f4] = Me(_0x345e8d);
        }
        _0x24c747 = _0x5f459b;
      } else {
        _0x5e21d9 = new Array(_0x5f459b);
        _0x2fda34 = new Array(_0x5f459b);
        if (_0x1c0984) {
          _0x3b5b39 = new Array(_0x5f459b);
        }
        _0x12f3da = 0;
        _0x43e6e3 = Math.min(_0x24c747, _0x5f459b);
        for (; _0x12f3da < _0x43e6e3 && _0x2b4299[_0x12f3da] === _0x4b5b3f[_0x12f3da]; _0x12f3da++);
        _0x43e6e3 = _0x24c747 - 1;
        _0x3613a3 = _0x5f459b - 1;
        for (; _0x43e6e3 >= _0x12f3da && _0x3613a3 >= _0x12f3da && _0x2b4299[_0x43e6e3] === _0x4b5b3f[_0x3613a3]; _0x43e6e3--, _0x3613a3--) {
          _0x5e21d9[_0x3613a3] = _0x42e9d0[_0x43e6e3];
          _0x2fda34[_0x3613a3] = _0x220257[_0x43e6e3];
          if (_0x1c0984) {
            _0x3b5b39[_0x3613a3] = _0x1c0984[_0x43e6e3];
          }
        }
        _0xc94c49 = new Map();
        _0x6e0b37 = new Array(_0x3613a3 + 1);
        _0x5c03f4 = _0x3613a3;
        for (; _0x5c03f4 >= _0x12f3da; _0x5c03f4--) {
          _0xf982cf = _0x4b5b3f[_0x5c03f4];
          _0x12d772 = _0xc94c49.get(_0xf982cf);
          _0x6e0b37[_0x5c03f4] = _0x12d772 === undefined ? -1 : _0x12d772;
          _0xc94c49.set(_0xf982cf, _0x5c03f4);
        }
        for (_0x12d772 = _0x12f3da; _0x12d772 <= _0x43e6e3; _0x12d772++) {
          _0xf982cf = _0x2b4299[_0x12d772];
          _0x5c03f4 = _0xc94c49.get(_0xf982cf);
          if (_0x5c03f4 !== undefined && _0x5c03f4 !== -1) {
            _0x5e21d9[_0x5c03f4] = _0x42e9d0[_0x12d772];
            _0x2fda34[_0x5c03f4] = _0x220257[_0x12d772];
            if (_0x1c0984) {
              _0x3b5b39[_0x5c03f4] = _0x1c0984[_0x12d772];
            }
            _0x5c03f4 = _0x6e0b37[_0x5c03f4];
            _0xc94c49.set(_0xf982cf, _0x5c03f4);
          } else {
            _0x220257[_0x12d772]();
          }
        }
        for (_0x5c03f4 = _0x12f3da; _0x5c03f4 < _0x5f459b; _0x5c03f4++) {
          if (_0x5c03f4 in _0x5e21d9) {
            _0x42e9d0[_0x5c03f4] = _0x5e21d9[_0x5c03f4];
            _0x220257[_0x5c03f4] = _0x2fda34[_0x5c03f4];
            if (_0x1c0984) {
              _0x1c0984[_0x5c03f4] = _0x3b5b39[_0x5c03f4];
              _0x1c0984[_0x5c03f4](_0x5c03f4);
            }
          } else {
            _0x42e9d0[_0x5c03f4] = Me(_0x345e8d);
          }
        }
        _0x42e9d0 = _0x42e9d0.slice(0, _0x24c747 = _0x5f459b);
        _0x2b4299 = _0x4b5b3f.slice(0);
      }
      return _0x42e9d0;
    });
    function _0x345e8d(_0x4d183b) {
      _0x220257[_0x5c03f4] = _0x4d183b;
      if (_0x1c0984) {
        const [_0x22a5cc, _0x2e607d] = x(_0x5c03f4);
        _0x1c0984[_0x5c03f4] = _0x2e607d;
        return _0x2112f2(_0x4b5b3f[_0x5c03f4], _0x22a5cc);
      }
      return _0x2112f2(_0x4b5b3f[_0x5c03f4]);
    }
  };
}
function y(_0x4c34e6, _0x7fbd63) {
  return K(() => _0x4c34e6(_0x7fbd63 || {}));
}
function je() {
  return true;
}
const nt = {
  get(_0x156b81, _0x801e0, _0x4ef528) {
    if (_0x801e0 === Z) {
      return _0x4ef528;
    } else {
      return _0x156b81.get(_0x801e0);
    }
  },
  has(_0x4bc9e3, _0x2e24a6) {
    if (_0x2e24a6 === Z) {
      return true;
    } else {
      return _0x4bc9e3.has(_0x2e24a6);
    }
  },
  set: je,
  deleteProperty: je,
  getOwnPropertyDescriptor(_0x394fd1, _0x19a479) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _0x394fd1.get(_0x19a479);
      },
      set: je,
      deleteProperty: je
    };
  },
  ownKeys(_0x1b4f38) {
    return _0x1b4f38.keys();
  }
};
function Ze(_0x594737) {
  if (_0x594737 = typeof _0x594737 == "function" ? _0x594737() : _0x594737) {
    return _0x594737;
  } else {
    return {};
  }
}
function gn() {
  for (let _0x3756b1 = 0, _0x35fde3 = this.length; _0x3756b1 < _0x35fde3; ++_0x3756b1) {
    const _0x9871f6 = this[_0x3756b1]();
    if (_0x9871f6 !== undefined) {
      return _0x9871f6;
    }
  }
}
function Qe(..._0x21d0f3) {
  let _0x30ec3a = false;
  for (let _0x1c8af3 = 0; _0x1c8af3 < _0x21d0f3.length; _0x1c8af3++) {
    const _0x319489 = _0x21d0f3[_0x1c8af3];
    _0x30ec3a = _0x30ec3a || !!_0x319489 && Z in _0x319489;
    _0x21d0f3[_0x1c8af3] = typeof _0x319489 == "function" ? (_0x30ec3a = true, H(_0x319489)) : _0x319489;
  }
  if (_0x30ec3a) {
    return new Proxy({
      get(_0x559a28) {
        for (let _0x1ef04e = _0x21d0f3.length - 1; _0x1ef04e >= 0; _0x1ef04e--) {
          const _0x5f262b = Ze(_0x21d0f3[_0x1ef04e])[_0x559a28];
          if (_0x5f262b !== undefined) {
            return _0x5f262b;
          }
        }
      },
      has(_0x46dd8c) {
        for (let _0x8389ae = _0x21d0f3.length - 1; _0x8389ae >= 0; _0x8389ae--) {
          if (_0x46dd8c in Ze(_0x21d0f3[_0x8389ae])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const _0x39ffd1 = [];
        for (let _0x48f849 = 0; _0x48f849 < _0x21d0f3.length; _0x48f849++) {
          _0x39ffd1.push(...Object.keys(Ze(_0x21d0f3[_0x48f849])));
        }
        return [...new Set(_0x39ffd1)];
      }
    }, nt);
  }
  const _0x5bf11d = {};
  const _0x4edf13 = {};
  let _0xaf5ae8 = false;
  for (let _0x4dbcfa = _0x21d0f3.length - 1; _0x4dbcfa >= 0; _0x4dbcfa--) {
    const _0x3e617d = _0x21d0f3[_0x4dbcfa];
    if (!_0x3e617d) {
      continue;
    }
    const _0x3207fe = Object.getOwnPropertyNames(_0x3e617d);
    _0xaf5ae8 = _0xaf5ae8 || _0x4dbcfa !== 0 && !!_0x3207fe.length;
    for (let _0xd7a49f = 0, _0xa94ae1 = _0x3207fe.length; _0xd7a49f < _0xa94ae1; _0xd7a49f++) {
      const _0x282007 = _0x3207fe[_0xd7a49f];
      if (_0x282007 !== "__proto__" && _0x282007 !== "constructor") {
        if (_0x282007 in _0x5bf11d) {
          const _0x1dcc4d = _0x4edf13[_0x282007];
          const _0x44b2de = Object.getOwnPropertyDescriptor(_0x3e617d, _0x282007);
          if (_0x1dcc4d) {
            if (_0x44b2de.get) {
              _0x1dcc4d.push(_0x44b2de.get.bind(_0x3e617d));
            } else if (_0x44b2de.value !== undefined) {
              _0x1dcc4d.push(() => _0x44b2de.value);
            }
          } else if (_0x5bf11d[_0x282007] === undefined) {
            _0x5bf11d[_0x282007] = _0x44b2de.value;
          }
        } else {
          const _0x56c81f = Object.getOwnPropertyDescriptor(_0x3e617d, _0x282007);
          if (_0x56c81f.get) {
            Object.defineProperty(_0x5bf11d, _0x282007, {
              enumerable: true,
              configurable: true,
              get: gn.bind(_0x4edf13[_0x282007] = [_0x56c81f.get.bind(_0x3e617d)])
            });
          } else {
            _0x5bf11d[_0x282007] = _0x56c81f.value;
          }
        }
      }
    }
  }
  return _0x5bf11d;
}
function hn(_0x595f51, ..._0x169b65) {
  if (Z in _0x595f51) {
    const _0x346580 = new Set(_0x169b65.length > 1 ? _0x169b65.flat() : _0x169b65[0]);
    const _0x1f6cec = _0x169b65.map(_0x270931 => new Proxy({
      get(_0x31a64e) {
        if (_0x270931.includes(_0x31a64e)) {
          return _0x595f51[_0x31a64e];
        } else {
          return undefined;
        }
      },
      has(_0x2e533b) {
        return _0x270931.includes(_0x2e533b) && _0x2e533b in _0x595f51;
      },
      keys() {
        return _0x270931.filter(_0x3eccc9 => _0x3eccc9 in _0x595f51);
      }
    }, nt));
    _0x1f6cec.push(new Proxy({
      get(_0x45503a) {
        if (_0x346580.has(_0x45503a)) {
          return undefined;
        } else {
          return _0x595f51[_0x45503a];
        }
      },
      has(_0x33f54f) {
        if (_0x346580.has(_0x33f54f)) {
          return false;
        } else {
          return _0x33f54f in _0x595f51;
        }
      },
      keys() {
        return Object.keys(_0x595f51).filter(_0x1e3fbb => !_0x346580.has(_0x1e3fbb));
      }
    }, nt));
    return _0x1f6cec;
  }
  const _0x35e746 = {};
  const _0x2eb134 = _0x169b65.map(() => ({}));
  for (const _0x3f892b of Object.getOwnPropertyNames(_0x595f51)) {
    const _0x524dfe = Object.getOwnPropertyDescriptor(_0x595f51, _0x3f892b);
    const _0x3ab8d4 = !_0x524dfe.get && !_0x524dfe.set && _0x524dfe.enumerable && _0x524dfe.writable && _0x524dfe.configurable;
    let _0x44d8f5 = false;
    let _0x56e7b6 = 0;
    for (const _0x42b5e0 of _0x169b65) {
      if (_0x42b5e0.includes(_0x3f892b)) {
        _0x44d8f5 = true;
        if (_0x3ab8d4) {
          _0x2eb134[_0x56e7b6][_0x3f892b] = _0x524dfe.value;
        } else {
          Object.defineProperty(_0x2eb134[_0x56e7b6], _0x3f892b, _0x524dfe);
        }
      }
      ++_0x56e7b6;
    }
    if (!_0x44d8f5) {
      if (_0x3ab8d4) {
        _0x35e746[_0x3f892b] = _0x524dfe.value;
      } else {
        Object.defineProperty(_0x35e746, _0x3f892b, _0x524dfe);
      }
    }
  }
  return [..._0x2eb134, _0x35e746];
}
const Gt = _0x4eed19 => "Stale read from <" + _0x4eed19 + ">.";
function Xt(_0x33f3ff) {
  const _0x6c76c = "fallback" in _0x33f3ff && {
    fallback: () => _0x33f3ff.fallback
  };
  return H(vn(() => _0x33f3ff.each, _0x33f3ff.children, _0x6c76c || undefined));
}
function me(_0x5071d2) {
  const _0x1e9f71 = _0x5071d2.keyed;
  const _0x560270 = H(() => _0x5071d2.when, undefined, {
    equals: (_0x590687, _0x10ce97) => _0x1e9f71 ? _0x590687 === _0x10ce97 : !_0x590687 == !_0x10ce97
  });
  return H(() => {
    const _0x44bade = _0x560270();
    if (_0x44bade) {
      const _0x196040 = _0x5071d2.children;
      if (typeof _0x196040 == "function" && _0x196040.length > 0) {
        return K(() => _0x196040(_0x1e9f71 ? _0x44bade : () => {
          if (!K(_0x560270)) {
            throw Gt("Show");
          }
          return _0x5071d2.when;
        }));
      } else {
        return _0x196040;
      }
    }
    return _0x5071d2.fallback;
  }, undefined, undefined);
}
function mn(_0x41b97b) {
  let _0x430315 = false;
  const _0x29c21d = (_0x16e2d7, _0x25eac3) => _0x16e2d7[0] === _0x25eac3[0] && (_0x430315 ? _0x16e2d7[1] === _0x25eac3[1] : !_0x16e2d7[1] == !_0x25eac3[1]) && _0x16e2d7[2] === _0x25eac3[2];
  const _0x35041f = Bt(() => _0x41b97b.children);
  const _0x41eda8 = H(() => {
    let _0x15dd9f = _0x35041f();
    if (!Array.isArray(_0x15dd9f)) {
      _0x15dd9f = [_0x15dd9f];
    }
    for (let _0x54e19d = 0; _0x54e19d < _0x15dd9f.length; _0x54e19d++) {
      const _0x173e7b = _0x15dd9f[_0x54e19d].when;
      if (_0x173e7b) {
        _0x430315 = !!_0x15dd9f[_0x54e19d].keyed;
        return [_0x54e19d, _0x173e7b, _0x15dd9f[_0x54e19d]];
      }
    }
    return [-1];
  }, undefined, {
    equals: _0x29c21d
  });
  return H(() => {
    const [_0x1c67f9, _0x208edf, _0x2565ee] = _0x41eda8();
    if (_0x1c67f9 < 0) {
      return _0x41b97b.fallback;
    }
    const _0x43a982 = _0x2565ee.children;
    if (typeof _0x43a982 == "function" && _0x43a982.length > 0) {
      return K(() => _0x43a982(_0x430315 ? _0x208edf : () => {
        if (K(_0x41eda8)[0] !== _0x1c67f9) {
          throw Gt("Match");
        }
        return _0x2565ee.when;
      }));
    } else {
      return _0x43a982;
    }
  }, undefined, undefined);
}
function Tt(_0x59e4ce) {
  return _0x59e4ce;
}
function _n(_0x2a6099, _0x2036de, _0x4cee7b) {
  let _0x57fc36 = _0x4cee7b.length;
  let _0x1c84ba = _0x2036de.length;
  let _0x3c6fab = _0x57fc36;
  let _0x35c1ce = 0;
  let _0x5bd299 = 0;
  let _0x10f222 = _0x2036de[_0x1c84ba - 1].nextSibling;
  let _0xa34413 = null;
  while (_0x35c1ce < _0x1c84ba || _0x5bd299 < _0x3c6fab) {
    if (_0x2036de[_0x35c1ce] === _0x4cee7b[_0x5bd299]) {
      _0x35c1ce++;
      _0x5bd299++;
      continue;
    }
    while (_0x2036de[_0x1c84ba - 1] === _0x4cee7b[_0x3c6fab - 1]) {
      _0x1c84ba--;
      _0x3c6fab--;
    }
    if (_0x1c84ba === _0x35c1ce) {
      const _0xd37d38 = _0x3c6fab < _0x57fc36 ? _0x5bd299 ? _0x4cee7b[_0x5bd299 - 1].nextSibling : _0x4cee7b[_0x3c6fab - _0x5bd299] : _0x10f222;
      while (_0x5bd299 < _0x3c6fab) {
        _0x2a6099.insertBefore(_0x4cee7b[_0x5bd299++], _0xd37d38);
      }
    } else if (_0x3c6fab === _0x5bd299) {
      while (_0x35c1ce < _0x1c84ba) {
        if (!_0xa34413 || !_0xa34413.has(_0x2036de[_0x35c1ce])) {
          _0x2036de[_0x35c1ce].remove();
        }
        _0x35c1ce++;
      }
    } else if (_0x2036de[_0x35c1ce] === _0x4cee7b[_0x3c6fab - 1] && _0x4cee7b[_0x5bd299] === _0x2036de[_0x1c84ba - 1]) {
      const _0x27cdac = _0x2036de[--_0x1c84ba].nextSibling;
      _0x2a6099.insertBefore(_0x4cee7b[_0x5bd299++], _0x2036de[_0x35c1ce++].nextSibling);
      _0x2a6099.insertBefore(_0x4cee7b[--_0x3c6fab], _0x27cdac);
      _0x2036de[_0x1c84ba] = _0x4cee7b[_0x3c6fab];
    } else {
      if (!_0xa34413) {
        _0xa34413 = new Map();
        let _0x356282 = _0x5bd299;
        while (_0x356282 < _0x3c6fab) {
          _0xa34413.set(_0x4cee7b[_0x356282], _0x356282++);
        }
      }
      const _0x378771 = _0xa34413.get(_0x2036de[_0x35c1ce]);
      if (_0x378771 != null) {
        if (_0x5bd299 < _0x378771 && _0x378771 < _0x3c6fab) {
          let _0x168248 = _0x35c1ce;
          let _0x4c9ed0 = 1;
          let _0x48d725;
          while (++_0x168248 < _0x1c84ba && _0x168248 < _0x3c6fab && (_0x48d725 = _0xa34413.get(_0x2036de[_0x168248])) != null && _0x48d725 === _0x378771 + _0x4c9ed0) {
            _0x4c9ed0++;
          }
          if (_0x4c9ed0 > _0x378771 - _0x5bd299) {
            const _0x7e66db = _0x2036de[_0x35c1ce];
            while (_0x5bd299 < _0x378771) {
              _0x2a6099.insertBefore(_0x4cee7b[_0x5bd299++], _0x7e66db);
            }
          } else {
            _0x2a6099.replaceChild(_0x4cee7b[_0x5bd299++], _0x2036de[_0x35c1ce++]);
          }
        } else {
          _0x35c1ce++;
        }
      } else {
        _0x2036de[_0x35c1ce++].remove();
      }
    }
  }
}
const Et = "_$DX_DELEGATE";
function $n(_0x18124f, _0xe26aab, _0x30c3d5, _0x3611d1 = {}) {
  let _0x20b155;
  Me(_0x337afb => {
    _0x20b155 = _0x337afb;
    if (_0xe26aab === document) {
      _0x18124f();
    } else {
      I(_0xe26aab, _0x18124f(), _0xe26aab.firstChild ? null : undefined, _0x30c3d5);
    }
  }, _0x3611d1.owner);
  return () => {
    _0x20b155();
    _0xe26aab.textContent = "";
  };
}
function R(_0x5782bd, _0x2e214c, _0x4a1a59) {
  let _0x276be8;
  const _0xd36a76 = () => {
    const _0x4b1439 = document.createElement("template");
    _0x4b1439.innerHTML = _0x5782bd;
    if (_0x4a1a59) {
      return _0x4b1439.content.firstChild.firstChild;
    } else {
      return _0x4b1439.content.firstChild;
    }
  };
  const _0x1cb6e7 = _0x2e214c ? () => K(() => document.importNode(_0x276be8 ||= _0xd36a76(), true)) : () => (_0x276be8 ||= _0xd36a76()).cloneNode(true);
  _0x1cb6e7.cloneNode = _0x1cb6e7;
  return _0x1cb6e7;
}
function st(_0x5e026d, _0x403b2b = window.document) {
  const _0x43b1b0 = _0x403b2b[Et] ||= new Set();
  for (let _0x218e86 = 0, _0x359650 = _0x5e026d.length; _0x218e86 < _0x359650; _0x218e86++) {
    const _0x33cb3a = _0x5e026d[_0x218e86];
    if (!_0x43b1b0.has(_0x33cb3a)) {
      _0x43b1b0.add(_0x33cb3a);
      _0x403b2b.addEventListener(_0x33cb3a, bn);
    }
  }
}
function te(_0x5b79cb, _0x3ba065, _0x300f86) {
  if (_0x300f86 == null) {
    _0x5b79cb.removeAttribute(_0x3ba065);
  } else {
    _0x5b79cb.setAttribute(_0x3ba065, _0x300f86);
  }
}
function v(_0x3c538e, _0x5b427f) {
  if (_0x5b427f == null) {
    _0x3c538e.removeAttribute("class");
  } else {
    _0x3c538e.className = _0x5b427f;
  }
}
function qe(_0xe0f705, _0x5ee4ca, _0x50bf83, _0x1b0154) {
  if (_0x1b0154) {
    if (Array.isArray(_0x50bf83)) {
      _0xe0f705["$$" + _0x5ee4ca] = _0x50bf83[0];
      _0xe0f705["$$" + _0x5ee4ca + "Data"] = _0x50bf83[1];
    } else {
      _0xe0f705["$$" + _0x5ee4ca] = _0x50bf83;
    }
  } else if (Array.isArray(_0x50bf83)) {
    const _0x5d4c5a = _0x50bf83[0];
    _0xe0f705.addEventListener(_0x5ee4ca, _0x50bf83[0] = _0x1ddff0 => _0x5d4c5a.call(_0xe0f705, _0x50bf83[1], _0x1ddff0));
  } else {
    _0xe0f705.addEventListener(_0x5ee4ca, _0x50bf83);
  }
}
function ut(_0x4197f3, _0xc0c564, _0x3f118d) {
  return K(() => _0x4197f3(_0xc0c564, _0x3f118d));
}
function I(_0xc48b11, _0x41f036, _0x344282, _0x18d12a) {
  if (_0x344282 !== undefined && !_0x18d12a) {
    _0x18d12a = [];
  }
  if (typeof _0x41f036 != "function") {
    return Ke(_0xc48b11, _0x41f036, _0x18d12a, _0x344282);
  }
  P(_0x561f34 => Ke(_0xc48b11, _0x41f036(), _0x561f34, _0x344282), _0x18d12a);
}
function bn(_0x312b3a) {
  const _0x566256 = "$$" + _0x312b3a.type;
  let _0x3d1c2b = _0x312b3a.composedPath && _0x312b3a.composedPath()[0] || _0x312b3a.target;
  if (_0x312b3a.target !== _0x3d1c2b) {
    Object.defineProperty(_0x312b3a, "target", {
      configurable: true,
      value: _0x3d1c2b
    });
  }
  Object.defineProperty(_0x312b3a, "currentTarget", {
    configurable: true,
    get() {
      return _0x3d1c2b || document;
    }
  });
  while (_0x3d1c2b) {
    const _0x3bfa54 = _0x3d1c2b[_0x566256];
    if (_0x3bfa54 && !_0x3d1c2b.disabled) {
      const _0x358ea4 = _0x3d1c2b[_0x566256 + "Data"];
      if (_0x358ea4 !== undefined) {
        _0x3bfa54.call(_0x3d1c2b, _0x358ea4, _0x312b3a);
      } else {
        _0x3bfa54.call(_0x3d1c2b, _0x312b3a);
      }
      if (_0x312b3a.cancelBubble) {
        return;
      }
    }
    _0x3d1c2b = _0x3d1c2b._$host || _0x3d1c2b.parentNode || _0x3d1c2b.host;
  }
}
function Ke(_0x308c93, _0x32e3f9, _0x102bd0, _0x595e2d, _0x1c01cd) {
  while (typeof _0x102bd0 == "function") {
    _0x102bd0 = _0x102bd0();
  }
  if (_0x32e3f9 === _0x102bd0) {
    return _0x102bd0;
  }
  const _0x3ababa = typeof _0x32e3f9;
  const _0x576c9f = _0x595e2d !== undefined;
  _0x308c93 = _0x576c9f && _0x102bd0[0] && _0x102bd0[0].parentNode || _0x308c93;
  if (_0x3ababa === "string" || _0x3ababa === "number") {
    if (_0x3ababa === "number") {
      _0x32e3f9 = _0x32e3f9.toString();
    }
    if (_0x576c9f) {
      let _0x5329dd = _0x102bd0[0];
      if (_0x5329dd && _0x5329dd.nodeType === 3) {
        _0x5329dd.data = _0x32e3f9;
      } else {
        _0x5329dd = document.createTextNode(_0x32e3f9);
      }
      _0x102bd0 = we(_0x308c93, _0x102bd0, _0x595e2d, _0x5329dd);
    } else if (_0x102bd0 !== "" && typeof _0x102bd0 == "string") {
      _0x102bd0 = _0x308c93.firstChild.data = _0x32e3f9;
    } else {
      _0x102bd0 = _0x308c93.textContent = _0x32e3f9;
    }
  } else if (_0x32e3f9 == null || _0x3ababa === "boolean") {
    _0x102bd0 = we(_0x308c93, _0x102bd0, _0x595e2d);
  } else {
    if (_0x3ababa === "function") {
      P(() => {
        let _0x114d30 = _0x32e3f9();
        while (typeof _0x114d30 == "function") {
          _0x114d30 = _0x114d30();
        }
        _0x102bd0 = Ke(_0x308c93, _0x114d30, _0x102bd0, _0x595e2d);
      });
      return () => _0x102bd0;
    }
    if (Array.isArray(_0x32e3f9)) {
      const _0x1e8304 = [];
      const _0x5eb6ab = _0x102bd0 && Array.isArray(_0x102bd0);
      if (it(_0x1e8304, _0x32e3f9, _0x102bd0, _0x1c01cd)) {
        P(() => _0x102bd0 = Ke(_0x308c93, _0x1e8304, _0x102bd0, _0x595e2d, true));
        return () => _0x102bd0;
      }
      if (_0x1e8304.length === 0) {
        _0x102bd0 = we(_0x308c93, _0x102bd0, _0x595e2d);
        if (_0x576c9f) {
          return _0x102bd0;
        }
      } else if (_0x5eb6ab) {
        if (_0x102bd0.length === 0) {
          kt(_0x308c93, _0x1e8304, _0x595e2d);
        } else {
          _n(_0x308c93, _0x102bd0, _0x1e8304);
        }
      } else {
        if (_0x102bd0) {
          we(_0x308c93);
        }
        kt(_0x308c93, _0x1e8304);
      }
      _0x102bd0 = _0x1e8304;
    } else if (_0x32e3f9.nodeType) {
      if (Array.isArray(_0x102bd0)) {
        if (_0x576c9f) {
          return _0x102bd0 = we(_0x308c93, _0x102bd0, _0x595e2d, _0x32e3f9);
        }
        we(_0x308c93, _0x102bd0, null, _0x32e3f9);
      } else if (_0x102bd0 == null || _0x102bd0 === "" || !_0x308c93.firstChild) {
        _0x308c93.appendChild(_0x32e3f9);
      } else {
        _0x308c93.replaceChild(_0x32e3f9, _0x308c93.firstChild);
      }
      _0x102bd0 = _0x32e3f9;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x32e3f9);
    }
  }
  return _0x102bd0;
}
function it(_0x19b0da, _0x4fcc1a, _0x339479, _0xb48671) {
  let _0x3c1965 = false;
  for (let _0x24bf05 = 0, _0x3e740e = _0x4fcc1a.length; _0x24bf05 < _0x3e740e; _0x24bf05++) {
    let _0x288d25 = _0x4fcc1a[_0x24bf05];
    let _0x52f057 = _0x339479 && _0x339479[_0x24bf05];
    let _0x5b4d03;
    if (_0x288d25 != null && _0x288d25 !== true && _0x288d25 !== false) {
      if ((_0x5b4d03 = typeof _0x288d25) == "object" && _0x288d25.nodeType) {
        _0x19b0da.push(_0x288d25);
      } else if (Array.isArray(_0x288d25)) {
        _0x3c1965 = it(_0x19b0da, _0x288d25, _0x52f057) || _0x3c1965;
      } else if (_0x5b4d03 === "function") {
        if (_0xb48671) {
          while (typeof _0x288d25 == "function") {
            _0x288d25 = _0x288d25();
          }
          _0x3c1965 = it(_0x19b0da, Array.isArray(_0x288d25) ? _0x288d25 : [_0x288d25], Array.isArray(_0x52f057) ? _0x52f057 : [_0x52f057]) || _0x3c1965;
        } else {
          _0x19b0da.push(_0x288d25);
          _0x3c1965 = true;
        }
      } else {
        const _0x46097e = String(_0x288d25);
        if (_0x52f057 && _0x52f057.nodeType === 3 && _0x52f057.data === _0x46097e) {
          _0x19b0da.push(_0x52f057);
        } else {
          _0x19b0da.push(document.createTextNode(_0x46097e));
        }
      }
    }
  }
  return _0x3c1965;
}
function kt(_0x530a7a, _0x2e3a9c, _0x53b475 = null) {
  for (let _0x9f793b = 0, _0x5aec37 = _0x2e3a9c.length; _0x9f793b < _0x5aec37; _0x9f793b++) {
    _0x530a7a.insertBefore(_0x2e3a9c[_0x9f793b], _0x53b475);
  }
}
function we(_0x418698, _0x2058c7, _0x23a6ed, _0x266305) {
  if (_0x23a6ed === undefined) {
    return _0x418698.textContent = "";
  }
  const _0x490fcb = _0x266305 || document.createTextNode("");
  if (_0x2058c7.length) {
    let _0xe39779 = false;
    for (let _0x4f33eb = _0x2058c7.length - 1; _0x4f33eb >= 0; _0x4f33eb--) {
      const _0x205020 = _0x2058c7[_0x4f33eb];
      if (_0x490fcb !== _0x205020) {
        const _0x37619e = _0x205020.parentNode === _0x418698;
        if (!_0xe39779 && !_0x4f33eb) {
          if (_0x37619e) {
            _0x418698.replaceChild(_0x490fcb, _0x205020);
          } else {
            _0x418698.insertBefore(_0x490fcb, _0x23a6ed);
          }
        } else if (_0x37619e) {
          _0x205020.remove();
        }
      } else {
        _0xe39779 = true;
      }
    }
  } else {
    _0x418698.insertBefore(_0x490fcb, _0x23a6ed);
  }
  return [_0x490fcb];
}
const yn = "_App_ff2jw_1";
const pn = {
  App: yn
};
const wn = _0x155313 => {
  const _0x4cdb67 = Qe({
    multiple: false,
    disabled: false,
    optionToValue: _0x458654 => _0x458654,
    isOptionDisabled: _0x5e99c2 => false
  }, _0x155313);
  const _0x1ba5ef = _0xd5ae77 => {
    if (_0x4cdb67.multiple && Array.isArray(_0xd5ae77)) {
      return _0xd5ae77;
    }
    if (!_0x4cdb67.multiple && !Array.isArray(_0xd5ae77)) {
      if (_0xd5ae77 !== null) {
        return [_0xd5ae77];
      } else {
        return [];
      }
    }
    throw new Error("Incompatible value type for " + (_0x4cdb67.multiple ? "multple" : "single") + " select.");
  };
  const [_0x31b8cb, _0x8f324f] = x(_0x4cdb67.initialValue !== undefined ? _0x1ba5ef(_0x4cdb67.initialValue) : []);
  const _0x53a525 = () => _0x4cdb67.multiple ? _0x31b8cb() : _0x31b8cb()[0] || null;
  const _0x544638 = _0x32885c => _0x8f324f(_0x1ba5ef(_0x32885c));
  const _0x12f72a = () => _0x8f324f([]);
  const _0x2bfa73 = () => !!(_0x4cdb67.multiple ? _0x53a525().length : _0x53a525());
  F(ce(_0x31b8cb, () => _0x4cdb67.onChange?.(_0x53a525()), {
    defer: true
  }));
  const [_0x56d1d2, _0x1e7a5a] = x("");
  const _0x50c986 = () => _0x1e7a5a("");
  const _0x430ae4 = () => !!_0x56d1d2().length;
  F(ce(_0x56d1d2, _0x5a4b4d => _0x4cdb67.onInput?.(_0x5a4b4d), {
    defer: true
  }));
  F(ce(_0x56d1d2, _0x278465 => {
    if (_0x278465 && !_0x3847c4()) {
      _0x8e18bf(true);
    }
  }, {
    defer: true
  }));
  const _0x30cb7d = typeof _0x4cdb67.options == "function" ? H(() => _0x4cdb67.options(_0x56d1d2()), _0x4cdb67.options(_0x56d1d2())) : () => _0x4cdb67.options;
  const _0x3d9eb5 = () => _0x30cb7d().length;
  const _0x23b985 = _0x592ff7 => {
    if (_0x4cdb67.isOptionDisabled(_0x592ff7)) {
      return;
    }
    const _0x4cb9f2 = _0x4cdb67.optionToValue(_0x592ff7);
    if (_0x4cdb67.multiple) {
      _0x544638([..._0x31b8cb(), _0x4cb9f2]);
    } else {
      _0x544638(_0x4cb9f2);
      _0x31c8b3(false);
    }
    _0x8e18bf(false);
  };
  const [_0x585237, _0x31c8b3] = x(false);
  const [_0x3847c4, _0x8e18bf] = x(false);
  const _0xca47ef = () => _0x8e18bf(!_0x3847c4());
  const [_0xa10971, _0x42a906] = x(-1);
  const _0x53dbcc = () => _0x30cb7d()[_0xa10971()];
  const _0x4b13fb = _0x111a0e => _0x111a0e === _0x53dbcc();
  const _0x46a6e4 = _0x541eb8 => {
    if (!_0x3d9eb5()) {
      _0x42a906(-1);
    }
    const _0x134c42 = _0x3d9eb5() - 1;
    const _0x5ed926 = _0x541eb8 === "next" ? 1 : -1;
    let _0x507c87 = _0xa10971() + _0x5ed926;
    if (_0x507c87 > _0x134c42) {
      _0x507c87 = 0;
    }
    if (_0x507c87 < 0) {
      _0x507c87 = _0x134c42;
    }
    _0x42a906(_0x507c87);
  };
  const _0x50922a = () => _0x46a6e4("previous");
  const _0x1e9788 = () => _0x46a6e4("next");
  F(ce(_0x30cb7d, _0xbc3322 => {
    if (_0x3847c4()) {
      _0x42a906(Math.min(0, _0xbc3322.length - 1));
    }
  }, {
    defer: true
  }));
  F(ce(() => _0x4cdb67.disabled, _0x26124e => {
    if (_0x26124e && _0x3847c4()) {
      _0x8e18bf(false);
    }
  }));
  F(ce(_0x3847c4, _0x5c3c72 => {
    if (_0x5c3c72) {
      if (_0xa10971() === -1) {
        _0x1e9788();
      }
      _0x31c8b3(true);
    } else {
      if (_0xa10971() > -1) {
        _0x42a906(-1);
      }
      _0x1e7a5a("");
    }
  }, {
    defer: true
  }));
  F(ce(_0xa10971, _0x30fb90 => {
    if (_0x30fb90 > -1 && !_0x3847c4()) {
      _0x8e18bf(true);
    }
  }, {
    defer: true
  }));
  const _0xdfaa3c = () => _0x31c8b3(true);
  const _0x16b95e = () => {
    _0x31c8b3(false);
    _0x8e18bf(false);
  };
  const _0x27d97d = _0x5cec76 => _0x5cec76.preventDefault();
  const _0x40f03d = _0x2ffe12 => {
    if (!_0x4cdb67.disabled && !_0x430ae4()) {
      _0xca47ef();
    }
  };
  const _0x284d86 = _0x4ba384 => {
    _0x1e7a5a(_0x4ba384.target.value);
  };
  const _0x3bce55 = _0x4e4990 => {
    switch (_0x4e4990.key) {
      case "ArrowDown":
        _0x1e9788();
        break;
      case "ArrowUp":
        _0x50922a();
        break;
      case "Enter":
        if (_0x3847c4() && _0x53dbcc()) {
          _0x23b985(_0x53dbcc());
          break;
        }
        return;
      case "Escape":
        if (_0x3847c4()) {
          _0x8e18bf(false);
          break;
        }
        return;
      case "Delete":
      case "Backspace":
        if (_0x56d1d2()) {
          return;
        }
        if (_0x4cdb67.multiple) {
          const _0x229f66 = _0x53a525();
          _0x544638([..._0x229f66.slice(0, -1)]);
        } else {
          _0x12f72a();
        }
        break;
      case " ":
        if (_0x56d1d2()) {
          return;
        }
        if (_0x3847c4()) {
          if (_0x53dbcc()) {
            _0x23b985(_0x53dbcc());
          }
        } else {
          _0x8e18bf(true);
        }
        break;
      case "Tab":
        if (_0x53dbcc() && _0x3847c4()) {
          _0x23b985(_0x53dbcc());
          break;
        }
        return;
      default:
        return;
    }
    _0x4e4990.preventDefault();
    _0x4e4990.stopPropagation();
  };
  return {
    options: _0x30cb7d,
    value: _0x53a525,
    setValue: _0x544638,
    hasValue: _0x2bfa73,
    clearValue: _0x12f72a,
    inputValue: _0x56d1d2,
    setInputValue: _0x1e7a5a,
    hasInputValue: _0x430ae4,
    clearInputValue: _0x50c986,
    isOpen: _0x3847c4,
    setIsOpen: _0x8e18bf,
    toggleOpen: _0xca47ef,
    isActive: _0x585237,
    setIsActive: _0x31c8b3,
    get multiple() {
      return _0x4cdb67.multiple;
    },
    get disabled() {
      return _0x4cdb67.disabled;
    },
    pickOption: _0x23b985,
    isOptionFocused: _0x4b13fb,
    isOptionDisabled: _0x4cdb67.isOptionDisabled,
    onFocusIn: _0xdfaa3c,
    onFocusOut: _0x16b95e,
    onMouseDown: _0x27d97d,
    onClick: _0x40f03d,
    onInput: _0x284d86,
    onKeyDown: _0x3bce55
  };
};
const In = R("<mark>");
const Ie = {
  NO_MATCH: 0,
  MATCH: 1,
  WORD_START: 2,
  START: 3
};
const xn = (_0x426169, _0x3da28c) => {
  let _0x528478 = Ie.NO_MATCH;
  let _0x3367f6 = [];
  if (_0x426169.length <= _0x3da28c.length) {
    const _0x35263a = Array.from(_0x426169.toLocaleLowerCase());
    const _0x12f6c5 = Array.from(_0x3da28c.toLocaleLowerCase());
    let _0x1dee2c = Ie.START;
    _0x212e88: for (let _0x1850b2 = 0, _0xc8a283 = 0; _0x1850b2 < _0x35263a.length; _0x1850b2++) {
      while (_0xc8a283 < _0x12f6c5.length) {
        if (_0x12f6c5[_0xc8a283] === _0x35263a[_0x1850b2]) {
          _0x3367f6[_0xc8a283] = true;
          if (_0x1dee2c === Ie.MATCH && _0x12f6c5[_0xc8a283 - 1] === " " && _0x12f6c5[_0xc8a283] !== " ") {
            _0x1dee2c = Ie.WORD_START;
          }
          _0x528478 += _0x1dee2c;
          _0x1dee2c++;
          _0xc8a283++;
          continue _0x212e88;
        } else {
          _0x1dee2c = Ie.MATCH;
          _0xc8a283++;
        }
      }
      _0x528478 = Ie.NO_MATCH;
      _0x3367f6.length = 0;
    }
  }
  return {
    target: _0x3da28c,
    score: _0x528478,
    matches: _0x3367f6
  };
};
const Cn = (_0x5ee11d, _0x1479a2 = _0x327649 => (() => {
  const _0x457064 = In();
  I(_0x457064, _0x327649);
  return _0x457064;
})()) => {
  const _0x5c14f2 = _0x5ee11d.target;
  const _0x188189 = _0x5ee11d.matches;
  const _0x2d09a0 = "\0";
  const _0x4bdca0 = [];
  let _0x3468a0 = false;
  for (let _0x3d9556 = 0; _0x3d9556 < _0x5c14f2.length; _0x3d9556++) {
    const _0x8186de = _0x5c14f2[_0x3d9556];
    const _0x2d2742 = _0x188189[_0x3d9556];
    if (!_0x3468a0 && _0x2d2742) {
      _0x4bdca0.push(_0x2d09a0);
      _0x3468a0 = true;
    } else if (_0x3468a0 && !_0x2d2742) {
      _0x4bdca0.push(_0x2d09a0);
      _0x3468a0 = false;
    }
    _0x4bdca0.push(_0x8186de);
  }
  if (_0x3468a0) {
    _0x4bdca0.push(_0x2d09a0);
    _0x3468a0 = false;
  }
  return H(() => _0x4bdca0.join("").split(_0x2d09a0).map((_0x4c0173, _0x1b11f2) => _0x1b11f2 % 2 ? _0x1479a2(_0x4c0173) : _0x4c0173));
};
const An = (_0x1c02b9, _0x6d1a9d, _0x3db413) => {
  const _0x1a9c17 = [];
  for (let _0x20e05b = 0; _0x20e05b < _0x6d1a9d.length; _0x20e05b++) {
    const _0x45afca = _0x6d1a9d[_0x20e05b];
    const _0x7d7307 = _0x3db413 ? _0x45afca[_0x3db413] : _0x45afca;
    const _0x27b56d = xn(_0x1c02b9, _0x7d7307);
    if (_0x27b56d.score) {
      _0x1a9c17.push({
        ..._0x27b56d,
        item: _0x45afca,
        index: _0x20e05b
      });
    }
  }
  _0x1a9c17.sort((_0x46a534, _0x2849b5) => {
    let _0x4dc9c0 = _0x2849b5.score - _0x46a534.score;
    if (_0x4dc9c0 === 0) {
      _0x4dc9c0 = _0x46a534.index - _0x2849b5.index;
    }
    return _0x4dc9c0;
  });
  return _0x1a9c17;
};
const Sn = R("<mark>");
const Qt = (_0x400bdc, _0xb4b65a) => {
  const _0x3450dc = Object.assign({
    filterable: true,
    disable: () => false
  }, _0xb4b65a || {});
  const _0x3a325e = _0x46d99e => _0x3450dc?.key !== undefined ? _0x46d99e[_0x3450dc.key] : _0x46d99e;
  return {
    options: _0x4e7b0d => {
      let _0x152c03 = (typeof _0x400bdc == "function" ? _0x400bdc(_0x4e7b0d) : _0x400bdc).map(_0x22b694 => ({
        label: _0x3a325e(_0x22b694),
        value: _0x22b694,
        disabled: _0x3450dc.disable(_0x22b694)
      }));
      if (_0x3450dc.filterable && _0x4e7b0d) {
        _0x152c03 = An(_0x4e7b0d, _0x152c03, "label").map(_0x3a7701 => ({
          ..._0x3a7701.item,
          label: Cn(_0x3a7701)
        }));
      }
      if (_0x3450dc.createable !== undefined) {
        const _0x7e477e = _0x4e7b0d.trim();
        const _0x1b2c6a = _0x152c03.some(_0x33679e => On(_0x4e7b0d, _0x3a325e(_0x33679e.value)));
        if (_0x7e477e && !_0x1b2c6a) {
          let _0x342e06;
          if (typeof _0x3450dc.createable == "function") {
            _0x342e06 = _0x3450dc.createable(_0x7e477e);
          } else {
            _0x342e06 = _0x3450dc.key ? {
              [_0x3450dc.key]: _0x7e477e
            } : _0x7e477e;
          }
          const _0x4d80be = {
            label: ["Create ", (() => {
              const _0x563c96 = Sn();
              I(_0x563c96, () => _0x3a325e(_0x342e06));
              return _0x563c96;
            })()],
            value: _0x342e06,
            disabled: false
          };
          _0x152c03 = [..._0x152c03, _0x4d80be];
        }
      }
      return _0x152c03;
    },
    optionToValue: _0x19cd30 => _0x19cd30.value,
    isOptionDisabled: _0x4ea707 => _0x4ea707.disabled,
    format: (_0x12d1f2, _0x51efa9) => _0x51efa9 === "option" ? _0x12d1f2.label : _0x3a325e(_0x12d1f2)
  };
};
const On = (_0x3cf354, _0x327315) => _0x3cf354.localeCompare(_0x327315, undefined, {
  sensitivity: "base"
}) === 0;
const Dn = R("<div>");
const Pn = R("<div class=\"solid-select-control\">");
const Tn = R("<div class=\"solid-select-placeholder\">");
const En = R("<div class=\"solid-select-single-value\">");
const kn = R("<div class=\"solid-select-multi-value\"><button type=\"button\" class=\"solid-select-multi-value-remove\">⨯");
const Rn = R("<input class=\"solid-select-input\" type=\"text\" tabindex=\"0\" autocomplete=\"off\" autocapitalize=\"none\" size=\"1\">");
const Ln = R("<div class=\"solid-select-list\">");
const Rt = R("<div class=\"solid-select-list-placeholder\">");
const Nn = R("<div class=\"solid-select-option\">");
const Jt = Ut();
const Ce = () => {
  const _0xff0276 = zt(Jt);
  if (!_0xff0276) {
    throw new Error("No SelectContext found in ancestry.");
  }
  return _0xff0276;
};
const Zt = _0x23255f => {
  const [_0x3f4b54, _0x7ff2cc] = hn(Qe({
    format: (_0x19f41a, _0x58a998) => _0x19f41a,
    placeholder: "Select...",
    readonly: typeof _0x23255f.options != "function",
    loading: false,
    loadingPlaceholder: "Loading...",
    emptyPlaceholder: "No options"
  }, _0x23255f), ["options", "optionToValue", "isOptionDisabled", "multiple", "disabled", "onInput", "onChange"]);
  const _0x36d4cc = wn(_0x3f4b54);
  F(ce(() => _0x7ff2cc.initialValue, _0x928330 => _0x928330 !== undefined && _0x36d4cc.setValue(_0x928330)));
  return y(Jt.Provider, {
    value: _0x36d4cc,
    get children() {
      return y(Vn, {
        get class() {
          return _0x7ff2cc.class;
        },
        get children() {
          return [y(jn, {
            get id() {
              return _0x7ff2cc.id;
            },
            get name() {
              return _0x7ff2cc.name;
            },
            get format() {
              return _0x7ff2cc.format;
            },
            get placeholder() {
              return _0x7ff2cc.placeholder;
            },
            get autofocus() {
              return _0x7ff2cc.autofocus;
            },
            get readonly() {
              return _0x7ff2cc.readonly;
            }
          }), y(Fn, {
            get loading() {
              return _0x7ff2cc.loading;
            },
            get loadingPlaceholder() {
              return _0x7ff2cc.loadingPlaceholder;
            },
            get emptyPlaceholder() {
              return _0x7ff2cc.emptyPlaceholder;
            },
            get format() {
              return _0x7ff2cc.format;
            }
          })];
        }
      });
    }
  });
};
const Vn = _0x2b4868 => {
  const _0x16a0fa = Ce();
  return (() => {
    const _0x5d1f7d = Dn();
    _0x5d1f7d.$$mousedown = _0x11ac0d => {
      _0x16a0fa.onMouseDown(_0x11ac0d);
      _0x11ac0d.currentTarget.getElementsByTagName("input")[0].focus();
    };
    qe(_0x5d1f7d, "focusout", _0x16a0fa.onFocusOut, true);
    qe(_0x5d1f7d, "focusin", _0x16a0fa.onFocusIn, true);
    I(_0x5d1f7d, () => _0x2b4868.children);
    P(_0x3290d3 => {
      const _0x41737b = "solid-select-container " + (_0x2b4868.class !== undefined ? _0x2b4868.class : "");
      const _0x433d19 = _0x16a0fa.disabled;
      if (_0x41737b !== _0x3290d3._v$) {
        v(_0x5d1f7d, _0x3290d3._v$ = _0x41737b);
      }
      if (_0x433d19 !== _0x3290d3._v$2) {
        te(_0x5d1f7d, "data-disabled", _0x3290d3._v$2 = _0x433d19);
      }
      return _0x3290d3;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x5d1f7d;
  })();
};
const jn = _0x1359c3 => {
  const _0x3d0d25 = Ce();
  const _0x47a582 = _0x42e8fa => {
    const _0x4b714e = _0x3d0d25.value();
    _0x3d0d25.setValue([..._0x4b714e.slice(0, _0x42e8fa), ..._0x4b714e.slice(_0x42e8fa + 1)]);
  };
  return (() => {
    const _0xef105e = Pn();
    qe(_0xef105e, "click", _0x3d0d25.onClick, true);
    I(_0xef105e, y(me, {
      get when() {
        return H(() => !_0x3d0d25.hasValue())() && !_0x3d0d25.hasInputValue();
      },
      get children() {
        return y(Mn, {
          get children() {
            return _0x1359c3.placeholder;
          }
        });
      }
    }), null);
    I(_0xef105e, y(me, {
      get when() {
        return H(() => !!_0x3d0d25.hasValue() && !_0x3d0d25.multiple)() && !_0x3d0d25.hasInputValue();
      },
      get children() {
        return y(Un, {
          get children() {
            return _0x1359c3.format(_0x3d0d25.value(), "value");
          }
        });
      }
    }), null);
    I(_0xef105e, y(me, {
      get when() {
        return _0x3d0d25.hasValue() && _0x3d0d25.multiple;
      },
      get children() {
        return y(Xt, {
          get each() {
            return _0x3d0d25.value();
          },
          children: (_0x56c959, _0x5c4284) => y(zn, {
            onRemove: () => _0x47a582(_0x5c4284()),
            get children() {
              return _0x1359c3.format(_0x56c959, "value");
            }
          })
        });
      }
    }), null);
    I(_0xef105e, y(Bn, {
      get id() {
        return _0x1359c3.id;
      },
      get name() {
        return _0x1359c3.name;
      },
      get autofocus() {
        return _0x1359c3.autofocus;
      },
      get readonly() {
        return _0x1359c3.readonly;
      }
    }), null);
    P(_0x1a53ae => {
      const _0x49a92f = _0x3d0d25.multiple;
      const _0x23e9fc = _0x3d0d25.hasValue();
      const _0x9793f0 = _0x3d0d25.disabled;
      if (_0x49a92f !== _0x1a53ae._v$3) {
        te(_0xef105e, "data-multiple", _0x1a53ae._v$3 = _0x49a92f);
      }
      if (_0x23e9fc !== _0x1a53ae._v$4) {
        te(_0xef105e, "data-has-value", _0x1a53ae._v$4 = _0x23e9fc);
      }
      if (_0x9793f0 !== _0x1a53ae._v$5) {
        te(_0xef105e, "data-disabled", _0x1a53ae._v$5 = _0x9793f0);
      }
      return _0x1a53ae;
    }, {
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return _0xef105e;
  })();
};
const Mn = _0x579eec => (() => {
  const _0x1ad021 = Tn();
  I(_0x1ad021, () => _0x579eec.children);
  return _0x1ad021;
})();
const Un = _0x565af3 => (() => {
  const _0x3d19fd = En();
  I(_0x3d19fd, () => _0x565af3.children);
  return _0x3d19fd;
})();
const zn = _0x1f9576 => {
  Ce();
  return (() => {
    const _0x184038 = kn();
    const _0x4b59b9 = _0x184038.firstChild;
    I(_0x184038, () => _0x1f9576.children, _0x4b59b9);
    _0x4b59b9.$$click = _0x963e1e => {
      _0x963e1e.stopPropagation();
      _0x1f9576.onRemove();
    };
    return _0x184038;
  })();
};
const Bn = _0xec28f8 => {
  const _0x209632 = Ce();
  return (() => {
    const _0x5aa8d9 = Rn();
    _0x5aa8d9.$$mousedown = _0x5361d8 => {
      _0x5361d8.stopPropagation();
    };
    _0x5aa8d9.$$keydown = _0x310d2d => {
      _0x209632.onKeyDown(_0x310d2d);
      if (!_0x310d2d.defaultPrevented) {
        if (_0x310d2d.key === "Escape") {
          _0x310d2d.preventDefault();
          _0x310d2d.stopPropagation();
          _0x310d2d.target.blur();
        }
      }
    };
    qe(_0x5aa8d9, "input", _0x209632.onInput, true);
    P(_0x40fa75 => {
      const _0x53ebeb = _0xec28f8.id;
      const _0x1a94f3 = _0xec28f8.name;
      const _0x50f062 = _0x209632.multiple;
      const _0x25e5db = _0x209632.isActive();
      const _0x408e84 = _0xec28f8.autofocus;
      const _0x5e06d2 = _0xec28f8.readonly;
      const _0x2e9e90 = _0x209632.disabled;
      if (_0x53ebeb !== _0x40fa75._v$6) {
        te(_0x5aa8d9, "id", _0x40fa75._v$6 = _0x53ebeb);
      }
      if (_0x1a94f3 !== _0x40fa75._v$7) {
        te(_0x5aa8d9, "name", _0x40fa75._v$7 = _0x1a94f3);
      }
      if (_0x50f062 !== _0x40fa75._v$8) {
        te(_0x5aa8d9, "data-multiple", _0x40fa75._v$8 = _0x50f062);
      }
      if (_0x25e5db !== _0x40fa75._v$9) {
        te(_0x5aa8d9, "data-is-active", _0x40fa75._v$9 = _0x25e5db);
      }
      if (_0x408e84 !== _0x40fa75._v$10) {
        _0x5aa8d9.autofocus = _0x40fa75._v$10 = _0x408e84;
      }
      if (_0x5e06d2 !== _0x40fa75._v$11) {
        _0x5aa8d9.readOnly = _0x40fa75._v$11 = _0x5e06d2;
      }
      if (_0x2e9e90 !== _0x40fa75._v$12) {
        _0x5aa8d9.disabled = _0x40fa75._v$12 = _0x2e9e90;
      }
      return _0x40fa75;
    }, {
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined
    });
    P(() => _0x5aa8d9.value = _0x209632.inputValue());
    return _0x5aa8d9;
  })();
};
const Fn = _0x1ed1eb => {
  const _0x40eabb = Ce();
  return y(me, {
    get when() {
      return _0x40eabb.isOpen();
    },
    get children() {
      const _0x48a444 = Ln();
      I(_0x48a444, y(me, {
        get when() {
          return !_0x1ed1eb.loading;
        },
        get fallback() {
          return (() => {
            const _0x1ba2cb = Rt();
            I(_0x1ba2cb, () => _0x1ed1eb.loadingPlaceholder);
            return _0x1ba2cb;
          })();
        },
        get children() {
          return y(Xt, {
            get each() {
              return _0x40eabb.options();
            },
            get fallback() {
              return (() => {
                const _0x147637 = Rt();
                I(_0x147637, () => _0x1ed1eb.emptyPlaceholder);
                return _0x147637;
              })();
            },
            children: _0xa7b64b => y(Hn, {
              option: _0xa7b64b,
              get children() {
                return _0x1ed1eb.format(_0xa7b64b, "option");
              }
            })
          });
        }
      }));
      return _0x48a444;
    }
  });
};
const Hn = _0x1075bb => {
  const _0x262705 = Ce();
  const _0x69ca4d = _0x4c8a5d => {
    F(() => {
      if (_0x262705.isOptionFocused(_0x1075bb.option)) {
        _0x4c8a5d.scrollIntoView({
          block: "nearest"
        });
      }
    });
  };
  return (() => {
    const _0x12fda7 = Nn();
    _0x12fda7.$$click = () => _0x262705.pickOption(_0x1075bb.option);
    ut(_0x69ca4d, _0x12fda7);
    I(_0x12fda7, () => _0x1075bb.children);
    P(_0x53927f => {
      const _0x38c36f = _0x262705.isOptionDisabled(_0x1075bb.option);
      const _0x57264c = _0x262705.isOptionFocused(_0x1075bb.option);
      if (_0x38c36f !== _0x53927f._v$13) {
        te(_0x12fda7, "data-disabled", _0x53927f._v$13 = _0x38c36f);
      }
      if (_0x57264c !== _0x53927f._v$14) {
        te(_0x12fda7, "data-focused", _0x53927f._v$14 = _0x57264c);
      }
      return _0x53927f;
    }, {
      _v$13: undefined,
      _v$14: undefined
    });
    return _0x12fda7;
  })();
};
st(["focusin", "focusout", "mousedown", "click", "input", "keydown"]);
function qn(_0x2249fa, _0x297977) {
  const _0x54f2fa = Ut(_0x297977);
  return [_0x18669a => y(_0x54f2fa.Provider, {
    value: _0x2249fa(_0x18669a),
    get children() {
      return _0x18669a.children;
    }
  }), () => zt(_0x54f2fa)];
}
const rt = Symbol("store-raw");
const ke = Symbol("store-node");
function en(_0x5c80ae) {
  let _0x54e963 = _0x5c80ae[Z];
  if (!_0x54e963 && (Object.defineProperty(_0x5c80ae, Z, {
    value: _0x54e963 = new Proxy(_0x5c80ae, Yn)
  }), !Array.isArray(_0x5c80ae))) {
    const _0xa9e394 = Object.keys(_0x5c80ae);
    const _0x2c7614 = Object.getOwnPropertyDescriptors(_0x5c80ae);
    for (let _0x4fda3b = 0, _0x3acbff = _0xa9e394.length; _0x4fda3b < _0x3acbff; _0x4fda3b++) {
      const _0x4df520 = _0xa9e394[_0x4fda3b];
      if (_0x2c7614[_0x4df520].get) {
        Object.defineProperty(_0x5c80ae, _0x4df520, {
          enumerable: _0x2c7614[_0x4df520].enumerable,
          get: _0x2c7614[_0x4df520].get.bind(_0x54e963)
        });
      }
    }
  }
  return _0x54e963;
}
function We(_0x192328) {
  let _0x3b2c5d;
  return _0x192328 != null && typeof _0x192328 == "object" && (_0x192328[Z] || !(_0x3b2c5d = Object.getPrototypeOf(_0x192328)) || _0x3b2c5d === Object.prototype || Array.isArray(_0x192328));
}
function Re(_0x4590ff, _0x5d342d = new Set()) {
  let _0x42a62a;
  let _0x43d266;
  let _0x454522;
  let _0x5f2ad2;
  if (_0x42a62a = _0x4590ff != null && _0x4590ff[rt]) {
    return _0x42a62a;
  }
  if (!We(_0x4590ff) || _0x5d342d.has(_0x4590ff)) {
    return _0x4590ff;
  }
  if (Array.isArray(_0x4590ff)) {
    if (Object.isFrozen(_0x4590ff)) {
      _0x4590ff = _0x4590ff.slice(0);
    } else {
      _0x5d342d.add(_0x4590ff);
    }
    for (let _0x43135e = 0, _0x5d5143 = _0x4590ff.length; _0x43135e < _0x5d5143; _0x43135e++) {
      _0x454522 = _0x4590ff[_0x43135e];
      if ((_0x43d266 = Re(_0x454522, _0x5d342d)) !== _0x454522) {
        _0x4590ff[_0x43135e] = _0x43d266;
      }
    }
  } else {
    if (Object.isFrozen(_0x4590ff)) {
      _0x4590ff = Object.assign({}, _0x4590ff);
    } else {
      _0x5d342d.add(_0x4590ff);
    }
    const _0x252acf = Object.keys(_0x4590ff);
    const _0x54a14a = Object.getOwnPropertyDescriptors(_0x4590ff);
    for (let _0x1d6a21 = 0, _0xa024c5 = _0x252acf.length; _0x1d6a21 < _0xa024c5; _0x1d6a21++) {
      _0x5f2ad2 = _0x252acf[_0x1d6a21];
      if (!_0x54a14a[_0x5f2ad2].get) {
        _0x454522 = _0x4590ff[_0x5f2ad2];
        if ((_0x43d266 = Re(_0x454522, _0x5d342d)) !== _0x454522) {
          _0x4590ff[_0x5f2ad2] = _0x43d266;
        }
      }
    }
  }
  return _0x4590ff;
}
function at(_0x177b2e) {
  let _0x27b98f = _0x177b2e[ke];
  if (!_0x27b98f) {
    Object.defineProperty(_0x177b2e, ke, {
      value: _0x27b98f = Object.create(null)
    });
  }
  return _0x27b98f;
}
function lt(_0xf2eaee, _0x550e1f, _0x292f91) {
  return _0xf2eaee[_0x550e1f] ||= nn(_0x292f91);
}
function Kn(_0x5ef606, _0x115d7d) {
  const _0x15a944 = Reflect.getOwnPropertyDescriptor(_0x5ef606, _0x115d7d);
  if (!!_0x15a944 && !_0x15a944.get && !!_0x15a944.configurable && _0x115d7d !== Z && _0x115d7d !== ke) {
    delete _0x15a944.value;
    delete _0x15a944.writable;
    _0x15a944.get = () => _0x5ef606[Z][_0x115d7d];
  }
  return _0x15a944;
}
function tn(_0x1483ec) {
  if (Mt()) {
    const _0x318008 = at(_0x1483ec);
    (_0x318008._ ||= nn())();
  }
}
function Wn(_0x5de53b) {
  tn(_0x5de53b);
  return Reflect.ownKeys(_0x5de53b);
}
function nn(_0x4a6285) {
  const [_0xec4d33, _0x388641] = x(_0x4a6285, {
    equals: false,
    internal: true
  });
  _0xec4d33.$ = _0x388641;
  return _0xec4d33;
}
const Yn = {
  get(_0x4e473b, _0x5a24ad, _0x18b5fe) {
    if (_0x5a24ad === rt) {
      return _0x4e473b;
    }
    if (_0x5a24ad === Z) {
      return _0x18b5fe;
    }
    if (_0x5a24ad === et) {
      tn(_0x4e473b);
      return _0x18b5fe;
    }
    const _0xff8455 = at(_0x4e473b);
    const _0x5e13bd = _0xff8455[_0x5a24ad];
    let _0x50dd1d = _0x5e13bd ? _0x5e13bd() : _0x4e473b[_0x5a24ad];
    if (_0x5a24ad === ke || _0x5a24ad === "__proto__") {
      return _0x50dd1d;
    }
    if (!_0x5e13bd) {
      const _0x4aabf4 = Object.getOwnPropertyDescriptor(_0x4e473b, _0x5a24ad);
      if (Mt() && (typeof _0x50dd1d != "function" || _0x4e473b.hasOwnProperty(_0x5a24ad)) && (!_0x4aabf4 || !_0x4aabf4.get)) {
        _0x50dd1d = lt(_0xff8455, _0x5a24ad, _0x50dd1d)();
      }
    }
    if (We(_0x50dd1d)) {
      return en(_0x50dd1d);
    } else {
      return _0x50dd1d;
    }
  },
  has(_0x5cbd03, _0x2b7731) {
    if (_0x2b7731 === rt || _0x2b7731 === Z || _0x2b7731 === et || _0x2b7731 === ke || _0x2b7731 === "__proto__") {
      return true;
    } else {
      this.get(_0x5cbd03, _0x2b7731, _0x5cbd03);
      return _0x2b7731 in _0x5cbd03;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Wn,
  getOwnPropertyDescriptor: Kn
};
function Ye(_0x17b659, _0x33fdfa, _0x175644, _0x3242f9 = false) {
  if (!_0x3242f9 && _0x17b659[_0x33fdfa] === _0x175644) {
    return;
  }
  const _0x2776f8 = _0x17b659[_0x33fdfa];
  const _0x249655 = _0x17b659.length;
  if (_0x175644 === undefined) {
    delete _0x17b659[_0x33fdfa];
  } else {
    _0x17b659[_0x33fdfa] = _0x175644;
  }
  let _0x2abec9 = at(_0x17b659);
  let _0x29a962;
  if (_0x29a962 = lt(_0x2abec9, _0x33fdfa, _0x2776f8)) {
    _0x29a962.$(() => _0x175644);
  }
  if (Array.isArray(_0x17b659) && _0x17b659.length !== _0x249655) {
    for (let _0xc92b55 = _0x17b659.length; _0xc92b55 < _0x249655; _0xc92b55++) {
      if (_0x29a962 = _0x2abec9[_0xc92b55]) {
        _0x29a962.$();
      }
    }
    if (_0x29a962 = lt(_0x2abec9, "length", _0x249655)) {
      _0x29a962.$(_0x17b659.length);
    }
  }
  if (_0x29a962 = _0x2abec9._) {
    _0x29a962.$();
  }
}
function rn(_0x30108f, _0x2e90eb) {
  const _0x3ce8cd = Object.keys(_0x2e90eb);
  for (let _0xa2479b = 0; _0xa2479b < _0x3ce8cd.length; _0xa2479b += 1) {
    const _0x1f9814 = _0x3ce8cd[_0xa2479b];
    Ye(_0x30108f, _0x1f9814, _0x2e90eb[_0x1f9814]);
  }
}
function Gn(_0x20b4ce, _0x459553) {
  if (typeof _0x459553 == "function") {
    _0x459553 = _0x459553(_0x20b4ce);
  }
  _0x459553 = Re(_0x459553);
  if (Array.isArray(_0x459553)) {
    if (_0x20b4ce === _0x459553) {
      return;
    }
    let _0x5a21dd = 0;
    let _0x2ae91f = _0x459553.length;
    for (; _0x5a21dd < _0x2ae91f; _0x5a21dd++) {
      const _0xcb9f65 = _0x459553[_0x5a21dd];
      if (_0x20b4ce[_0x5a21dd] !== _0xcb9f65) {
        Ye(_0x20b4ce, _0x5a21dd, _0xcb9f65);
      }
    }
    Ye(_0x20b4ce, "length", _0x2ae91f);
  } else {
    rn(_0x20b4ce, _0x459553);
  }
}
function Ee(_0xfa64ce, _0x5ed83c, _0x5974dd = []) {
  let _0x5ef548;
  let _0x15c376 = _0xfa64ce;
  if (_0x5ed83c.length > 1) {
    _0x5ef548 = _0x5ed83c.shift();
    const _0x541abc = typeof _0x5ef548;
    const _0x2cfb57 = Array.isArray(_0xfa64ce);
    if (Array.isArray(_0x5ef548)) {
      for (let _0x500272 = 0; _0x500272 < _0x5ef548.length; _0x500272++) {
        Ee(_0xfa64ce, [_0x5ef548[_0x500272]].concat(_0x5ed83c), _0x5974dd);
      }
      return;
    } else if (_0x2cfb57 && _0x541abc === "function") {
      for (let _0xb1ca36 = 0; _0xb1ca36 < _0xfa64ce.length; _0xb1ca36++) {
        if (_0x5ef548(_0xfa64ce[_0xb1ca36], _0xb1ca36)) {
          Ee(_0xfa64ce, [_0xb1ca36].concat(_0x5ed83c), _0x5974dd);
        }
      }
      return;
    } else if (_0x2cfb57 && _0x541abc === "object") {
      const {
        from: _0x3a6f62 = 0,
        to: _0x2820f2 = _0xfa64ce.length - 1,
        by: _0x51b1af = 1
      } = _0x5ef548;
      for (let _0x46e3ee = _0x3a6f62; _0x46e3ee <= _0x2820f2; _0x46e3ee += _0x51b1af) {
        Ee(_0xfa64ce, [_0x46e3ee].concat(_0x5ed83c), _0x5974dd);
      }
      return;
    } else if (_0x5ed83c.length > 1) {
      Ee(_0xfa64ce[_0x5ef548], _0x5ed83c, [_0x5ef548].concat(_0x5974dd));
      return;
    }
    _0x15c376 = _0xfa64ce[_0x5ef548];
    _0x5974dd = [_0x5ef548].concat(_0x5974dd);
  }
  let _0x488ec8 = _0x5ed83c[0];
  if ((typeof _0x488ec8 != "function" || !(_0x488ec8 = _0x488ec8(_0x15c376, _0x5974dd), _0x488ec8 === _0x15c376)) && (_0x5ef548 !== undefined || _0x488ec8 != null)) {
    _0x488ec8 = Re(_0x488ec8);
    if (_0x5ef548 === undefined || We(_0x15c376) && We(_0x488ec8) && !Array.isArray(_0x488ec8)) {
      rn(_0x15c376, _0x488ec8);
    } else {
      Ye(_0xfa64ce, _0x5ef548, _0x488ec8);
    }
  }
}
function Xn(...[_0x2ae068, _0x2a3279]) {
  const _0x112ef2 = Re(_0x2ae068 || {});
  const _0x205f32 = Array.isArray(_0x112ef2);
  const _0x3516d5 = en(_0x112ef2);
  function _0x5d4e39(..._0x4cca17) {
    on(() => {
      if (_0x205f32 && _0x4cca17.length === 1) {
        Gn(_0x112ef2, _0x4cca17[0]);
      } else {
        Ee(_0x112ef2, _0x4cca17);
      }
    });
  }
  return [_0x3516d5, _0x5d4e39];
}
const Lt = {
  show: false,
  availableModels: [],
  availableItems: [],
  maxImageWidth: 300,
  maxImageHeight: 300,
  maxAmountToProduce: 15,
  menu: "swap"
};
const [Qn, ct] = qn(() => {
  const _0x3c85b5 = Lt;
  const [_0x2792c2, _0x926ad] = Xn(_0x3c85b5);
  return {
    state: _0x2792c2,
    setState: _0x926ad
  };
}, {
  state: Lt,
  setState: () => {}
});
const Jn = "_main_11mby_1";
const Zn = "_backgroundEllipse_11mby_10";
const ei = "_borderContainer_11mby_23";
const ti = "_container_11mby_31";
const ni = "_title_11mby_42";
const ii = "_description_11mby_51";
const ri = "_horizontalDivider_11mby_58";
const li = "_horizontalDividerRectangle_11mby_67";
const oi = "_verticalDivider_11mby_77";
const si = "_verticalDividerRectangle_11mby_85";
const ui = "_section_11mby_95";
const ai = "_middleContainer_11mby_101";
const ci = "_itemInfoDiv_11mby_129";
const fi = "_itemInfoContainer_11mby_140";
const di = "_itemInfoTitle_11mby_145";
const vi = "_itemInfoSubtitle_11mby_153";
const gi = "_itemInfoInput_11mby_161";
const hi = "_itemInfoTextArea_11mby_178";
const mi = "_itemInfoCreateButton_11mby_198";
const _i = "_containerTitle_11mby_224";
const $i = "_tooltip_11mby_238";
const g = {
  main: Jn,
  backgroundEllipse: Zn,
  borderContainer: ei,
  container: ti,
  title: ni,
  description: ii,
  horizontalDivider: ri,
  horizontalDividerRectangle: li,
  verticalDivider: oi,
  verticalDividerRectangle: si,
  section: ui,
  middleContainer: ai,
  itemInfoDiv: ci,
  itemInfoContainer: fi,
  itemInfoTitle: di,
  itemInfoSubtitle: vi,
  itemInfoInput: gi,
  itemInfoTextArea: hi,
  itemInfoCreateButton: mi,
  containerTitle: _i,
  tooltip: $i
};
const bi = R("<div><p>");
const yi = R("<div><div></div><div></div><div><div>Request Custom Item</div><div>Request the creation of a custom item from Scraps.</div><div><div></div></div><div><div><div><div><div>Item Name:</div></div><input max=\"50\"></div><div><div><div>Item Image:</div><div>Ratio: 1:1 &nbsp; Max Size: <!>x<!>px</div></div><input></div><div><div><div>Item Model:</div></div></div><div><div><div>Item Description:</div></div><textarea maxlength=\"500\"></textarea></div><button>Request Item");
function pi() {
  const {
    state: _0x49993f
  } = ct();
  const [_0x2395f7, _0x2f18ae] = x("");
  const [_0x5ac65c, _0x24d142] = x("");
  const [_0x14b71f, _0x2783d8] = x(false);
  const [_0x26c8f5, _0x28ff80] = x("");
  const [_0x382077, _0x434c2f] = x("");
  const [_0x49c0a7, _0x3ef18b] = x(1);
  const [_0x23931e, _0xa4da31] = x("");
  const [_0x152b25, _0x39f4a6] = x(true);
  const [_0x4dacbd, _0xa31f9c] = x(null);
  const [_0x528414, _0x2ba868] = x(false);
  const _0x1fde19 = () => {
    const _0xc05ee5 = _0x4dacbd();
    if (!_0xc05ee5) {
      return {
        x: 0,
        y: 0
      };
    }
    const _0x323220 = _0xc05ee5.getBoundingClientRect();
    return {
      x: _0x323220.x + _0x323220.width / 2,
      y: _0x323220.y
    };
  };
  const _0x175c26 = () => {
    _0x39f4a6(true);
    const _0x3dd692 = _0x2395f7();
    if (!_0x3dd692) {
      _0xa4da31("Enter a name for the item.");
      return false;
    }
    if (_0x3dd692.length < 3) {
      _0xa4da31("Your item name must be at least 3 characters long.");
      return false;
    }
    if (_0x3dd692.length > 50) {
      _0xa4da31("Your item name must be less than 50 characters long.");
      return false;
    }
    const _0x1787ee = _0x5ac65c();
    if (!_0x1787ee) {
      _0xa4da31("Enter an image URL for the item.");
      return false;
    }
    if (_0x14b71f()) {
      _0xa4da31("The image URL is invalid. Enter a valid image URL.");
      return false;
    }
    if (_0x1787ee.length < 10) {
      _0xa4da31("The image URL is too short. Enter a valid image URL.");
      return false;
    }
    const _0x3ef965 = _0x26c8f5();
    if (!_0x3ef965) {
      _0xa4da31("Enter a description for the item.");
      return false;
    }
    if (_0x3ef965.length < 10) {
      _0xa4da31("Your item description must be at least 10 characters long.");
      return false;
    }
    if (_0x3ef965.length > 500) {
      _0xa4da31("Your item description must be less than 500 characters long.");
      return false;
    }
    const _0x37f9b8 = _0x382077();
    if (_0x37f9b8) {
      if (_0x49993f.availableModels.find(([_0x392037, _0x3d8d36]) => _0x3d8d36 === _0x37f9b8)) {
        _0x39f4a6(false);
        _0xa4da31("");
        return true;
      } else {
        _0xa4da31("The selected model is not available.");
        return false;
      }
    } else {
      _0xa4da31("Select a model for the item.");
      return false;
    }
  };
  const _0x568d9c = () => {
    if (!!_0x175c26() && !_0x152b25()) {
      _0x1c504f.execute("scraps:requestItemCreation", _0x2395f7(), _0x5ac65c(), _0x26c8f5(), _0x382077(), _0x49c0a7());
    }
  };
  F(() => {
    _0x175c26();
  }, [_0x2395f7, _0x5ac65c, _0x26c8f5, _0x49c0a7]);
  F(() => {
    if (!_0x5ac65c()) {
      return;
    }
    const _0x44d56f = new Image();
    _0x44d56f.src = _0x5ac65c();
    _0x44d56f.onload = () => {
      if (_0x44d56f.width > _0x49993f.maxImageWidth || _0x44d56f.height > _0x49993f.maxImageHeight) {
        _0x2783d8(true);
        _0xa4da31("The image is too large. Please use an image with a maximum size of " + _0x49993f.maxImageWidth + "x" + _0x49993f.maxImageHeight + ".");
      } else {
        _0x2783d8(false);
      }
    };
    _0x44d56f.onerror = () => {
      _0x2783d8(true);
      _0xa4da31("The image URL is invalid. Please enter a valid image URL.");
    };
  });
  return (() => {
    const _0x23d2e4 = yi();
    const _0x4b6020 = _0x23d2e4.firstChild;
    const _0x532e4d = _0x4b6020.nextSibling;
    const _0x158b8b = _0x532e4d.nextSibling;
    const _0x34dbed = _0x158b8b.firstChild;
    const _0x4eda53 = _0x34dbed.nextSibling;
    const _0x4a92e9 = _0x4eda53.nextSibling;
    const _0x5055e9 = _0x4a92e9.firstChild;
    const _0x255fc9 = _0x4a92e9.nextSibling;
    const _0x15f5a = _0x255fc9.firstChild;
    const _0x2df0de = _0x15f5a.firstChild;
    const _0x1e1a31 = _0x2df0de.firstChild;
    const _0xa7a2de = _0x1e1a31.firstChild;
    const _0x2454f5 = _0x1e1a31.nextSibling;
    const _0x50c058 = _0x2df0de.nextSibling;
    const _0x52a22c = _0x50c058.firstChild;
    const _0x2a4cb4 = _0x52a22c.firstChild;
    const _0xde9529 = _0x2a4cb4.nextSibling;
    const _0x12e0b3 = _0xde9529.firstChild;
    const _0xc6cf13 = _0x12e0b3.nextSibling;
    const _0x44d6b6 = _0xc6cf13.nextSibling;
    const _0x52d19e = _0x44d6b6.nextSibling;
    _0x52d19e.nextSibling;
    const _0x284104 = _0x52a22c.nextSibling;
    const _0x828e58 = _0x50c058.nextSibling;
    const _0x1fc12b = _0x828e58.firstChild;
    const _0x19f39a = _0x1fc12b.firstChild;
    const _0x59652f = _0x828e58.nextSibling;
    const _0x1a08a1 = _0x59652f.firstChild;
    const _0x277b2a = _0x1a08a1.firstChild;
    const _0x25f2cc = _0x1a08a1.nextSibling;
    const _0x4e8fb2 = _0x59652f.nextSibling;
    _0x2454f5.$$input = _0xf7b400 => _0x2f18ae(_0xf7b400.currentTarget.value);
    I(_0xde9529, () => _0x49993f.maxImageWidth, _0xc6cf13);
    I(_0xde9529, () => _0x49993f.maxImageHeight, _0x52d19e);
    _0x284104.$$input = _0x1ad643 => _0x24d142(_0x1ad643.currentTarget.value);
    I(_0x828e58, y(Zt, Qe({
      class: "custom"
    }, () => Qt(_0x49993f.availableModels.map(([_0x4d2864, _0x1ec53c]) => _0x1ec53c)), {
      format: (_0x1a3e55, _0x2853c9) => {
        const _0x4b5d0f = _0x1a3e55.value;
        const _0x2b6e1e = _0x49993f.availableModels.find(([_0x1ce687, _0x5a378a]) => _0x5a378a === (_0x2853c9 === "value" ? _0x382077() : _0x4b5d0f));
        if (_0x2b6e1e) {
          return _0x2b6e1e[0];
        } else {
          return _0x1a3e55;
        }
      },
      get initialValue() {
        return _0x382077();
      },
      onChange: _0x434c2f
    })), null);
    _0x25f2cc.$$input = _0x34f75a => _0x28ff80(_0x34f75a.currentTarget.value);
    ut(_0xa31f9c, _0x4e8fb2);
    _0x4e8fb2.addEventListener("mouseleave", () => _0x2ba868(false));
    _0x4e8fb2.addEventListener("mouseenter", () => _0x2ba868(true));
    _0x4e8fb2.$$click = _0x568d9c;
    I(_0x15f5a, y(me, {
      get when() {
        return H(() => !!_0x528414())() && _0x23931e();
      },
      get children() {
        const _0xf3605d = bi();
        const _0x1d138f = _0xf3605d.firstChild;
        I(_0x1d138f, _0x23931e);
        P(_0x2f700b => {
          const _0x1e8ac8 = g.tooltip;
          const _0x2517f3 = _0x1fde19().y - 10 + "px";
          const _0x28464d = _0x1fde19().x + "px";
          if (_0x1e8ac8 !== _0x2f700b._v$) {
            v(_0xf3605d, _0x2f700b._v$ = _0x1e8ac8);
          }
          if (_0x2517f3 !== _0x2f700b._v$2) {
            if ((_0x2f700b._v$2 = _0x2517f3) != null) {
              _0xf3605d.style.setProperty("top", _0x2517f3);
            } else {
              _0xf3605d.style.removeProperty("top");
            }
          }
          if (_0x28464d !== _0x2f700b._v$3) {
            if ((_0x2f700b._v$3 = _0x28464d) != null) {
              _0xf3605d.style.setProperty("left", _0x28464d);
            } else {
              _0xf3605d.style.removeProperty("left");
            }
          }
          return _0x2f700b;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return _0xf3605d;
      }
    }), null);
    P(_0x6d5819 => {
      const _0x2937e5 = g.main;
      const _0x5c1c64 = g.backgroundEllipse;
      const _0x34a8d4 = g.borderContainer;
      const _0x25fc0b = g.container;
      const _0x5e125a = g.title;
      const _0x2ebd15 = g.description;
      const _0x481c5b = g.horizontalDivider;
      const _0x26b845 = g.horizontalDividerRectangle;
      const _0x358def = g.section;
      const _0xb99656 = g.middleContainer;
      const _0x10f68d = g.itemInfoDiv;
      const _0x570d21 = g.itemInfoContainer;
      const _0x30bf46 = g.itemInfoTitle;
      const _0x393d6c = g.itemInfoInput;
      const _0x4d59d7 = g.itemInfoDiv;
      const _0x3463f9 = g.itemInfoContainer;
      const _0x5f1a4f = g.itemInfoTitle;
      const _0x59fc2d = g.itemInfoSubtitle;
      const _0xf8b7e3 = g.itemInfoInput;
      const _0x1d6468 = g.itemInfoDiv;
      const _0x11043b = g.itemInfoContainer;
      const _0x20d8a8 = g.itemInfoTitle;
      const _0x2584de = g.itemInfoDiv + " flex-grow";
      const _0x774296 = g.itemInfoContainer;
      const _0x137d0e = g.itemInfoTitle;
      const _0xe41a78 = g.itemInfoTextArea;
      const _0x45217b = g.itemInfoCreateButton;
      const _0x45d326 = _0x152b25();
      if (_0x2937e5 !== _0x6d5819._v$4) {
        v(_0x23d2e4, _0x6d5819._v$4 = _0x2937e5);
      }
      if (_0x5c1c64 !== _0x6d5819._v$5) {
        v(_0x4b6020, _0x6d5819._v$5 = _0x5c1c64);
      }
      if (_0x34a8d4 !== _0x6d5819._v$6) {
        v(_0x532e4d, _0x6d5819._v$6 = _0x34a8d4);
      }
      if (_0x25fc0b !== _0x6d5819._v$7) {
        v(_0x158b8b, _0x6d5819._v$7 = _0x25fc0b);
      }
      if (_0x5e125a !== _0x6d5819._v$8) {
        v(_0x34dbed, _0x6d5819._v$8 = _0x5e125a);
      }
      if (_0x2ebd15 !== _0x6d5819._v$9) {
        v(_0x4eda53, _0x6d5819._v$9 = _0x2ebd15);
      }
      if (_0x481c5b !== _0x6d5819._v$10) {
        v(_0x4a92e9, _0x6d5819._v$10 = _0x481c5b);
      }
      if (_0x26b845 !== _0x6d5819._v$11) {
        v(_0x5055e9, _0x6d5819._v$11 = _0x26b845);
      }
      if (_0x358def !== _0x6d5819._v$12) {
        v(_0x255fc9, _0x6d5819._v$12 = _0x358def);
      }
      if (_0xb99656 !== _0x6d5819._v$13) {
        v(_0x15f5a, _0x6d5819._v$13 = _0xb99656);
      }
      if (_0x10f68d !== _0x6d5819._v$14) {
        v(_0x2df0de, _0x6d5819._v$14 = _0x10f68d);
      }
      if (_0x570d21 !== _0x6d5819._v$15) {
        v(_0x1e1a31, _0x6d5819._v$15 = _0x570d21);
      }
      if (_0x30bf46 !== _0x6d5819._v$16) {
        v(_0xa7a2de, _0x6d5819._v$16 = _0x30bf46);
      }
      if (_0x393d6c !== _0x6d5819._v$17) {
        v(_0x2454f5, _0x6d5819._v$17 = _0x393d6c);
      }
      if (_0x4d59d7 !== _0x6d5819._v$18) {
        v(_0x50c058, _0x6d5819._v$18 = _0x4d59d7);
      }
      if (_0x3463f9 !== _0x6d5819._v$19) {
        v(_0x52a22c, _0x6d5819._v$19 = _0x3463f9);
      }
      if (_0x5f1a4f !== _0x6d5819._v$20) {
        v(_0x2a4cb4, _0x6d5819._v$20 = _0x5f1a4f);
      }
      if (_0x59fc2d !== _0x6d5819._v$21) {
        v(_0xde9529, _0x6d5819._v$21 = _0x59fc2d);
      }
      if (_0xf8b7e3 !== _0x6d5819._v$22) {
        v(_0x284104, _0x6d5819._v$22 = _0xf8b7e3);
      }
      if (_0x1d6468 !== _0x6d5819._v$23) {
        v(_0x828e58, _0x6d5819._v$23 = _0x1d6468);
      }
      if (_0x11043b !== _0x6d5819._v$24) {
        v(_0x1fc12b, _0x6d5819._v$24 = _0x11043b);
      }
      if (_0x20d8a8 !== _0x6d5819._v$25) {
        v(_0x19f39a, _0x6d5819._v$25 = _0x20d8a8);
      }
      if (_0x2584de !== _0x6d5819._v$26) {
        v(_0x59652f, _0x6d5819._v$26 = _0x2584de);
      }
      if (_0x774296 !== _0x6d5819._v$27) {
        v(_0x1a08a1, _0x6d5819._v$27 = _0x774296);
      }
      if (_0x137d0e !== _0x6d5819._v$28) {
        v(_0x277b2a, _0x6d5819._v$28 = _0x137d0e);
      }
      if (_0xe41a78 !== _0x6d5819._v$29) {
        v(_0x25f2cc, _0x6d5819._v$29 = _0xe41a78);
      }
      if (_0x45217b !== _0x6d5819._v$30) {
        v(_0x4e8fb2, _0x6d5819._v$30 = _0x45217b);
      }
      if (_0x45d326 !== _0x6d5819._v$31) {
        _0x4e8fb2.disabled = _0x6d5819._v$31 = _0x45d326;
      }
      return _0x6d5819;
    }, {
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
      _v$31: undefined
    });
    P(() => _0x2454f5.value = _0x2395f7());
    P(() => _0x284104.value = _0x5ac65c());
    P(() => _0x25f2cc.value = _0x26c8f5());
    return _0x23d2e4;
  })();
}
st(["input", "click"]);
const wi = R("<div><p>");
const Ii = R("<div><div></div><div></div><div><div>Request Image Swap</div><div>Request an image swap of a previous custom item.</div><div><div></div></div><div><div><div><div><div>Item:</div></div></div><div><div><div>New Item Image:</div><div>Ratio: 1:1 &nbsp; Max Size: <!>x<!>px</div></div><input></div><button>Request Swap");
const xi = R("<div>");
function Ci() {
  const {
    state: _0x395097
  } = ct();
  const [_0x33e255, _0x18dbdf] = x("");
  const [_0x1c4fa5, _0x3436db] = x("");
  const [_0x2c7ea6, _0x65ed5b] = x("");
  const [_0x391823, _0x5a437f] = x(false);
  const [_0x54dfbe, _0x1d59fb] = x("");
  const [_0x2b08f7, _0x35955a] = x(true);
  const [_0x319da7, _0x565a41] = x(null);
  const [_0x522dc9, _0x463b24] = x(false);
  const _0x5f142c = () => {
    const _0x1eae74 = _0x319da7();
    if (!_0x1eae74) {
      return {
        x: 0,
        y: 0
      };
    }
    const _0x21f871 = _0x1eae74.getBoundingClientRect();
    return {
      x: _0x21f871.x + _0x21f871.width / 2,
      y: _0x21f871.y
    };
  };
  const _0x387fa2 = () => {
    _0x35955a(true);
    const _0x204067 = _0x2c7ea6();
    if (!_0x204067) {
      _0x1d59fb("Enter an image URL for the item.");
      return false;
    }
    if (_0x391823()) {
      _0x1d59fb("The image URL is invalid. Enter a valid image URL.");
      return false;
    }
    if (_0x204067.length < 10) {
      _0x1d59fb("The image URL is too short. Enter a valid image URL.");
      return false;
    }
    if (!_0x33e255()) {
      _0x1d59fb("Select an item for the image swap.");
      return false;
    }
    const _0x50dc38 = _0x395097.availableItems.find(([_0x4159e4, _0x5243d7]) => _0x4159e4 === _0x33e255());
    if (_0x50dc38) {
      _0x3436db(_0x50dc38[1]);
      _0x35955a(false);
      _0x1d59fb("");
      return true;
    } else {
      _0x1d59fb("The selected item is not available.");
      return false;
    }
  };
  const _0x30cbd6 = () => {
    if (!!_0x387fa2() && !_0x2b08f7()) {
      console.log(_0x1c4fa5(), _0x33e255(), _0x2c7ea6());
      _0x1c504f.execute("scraps:requestItemImageSwap", _0x1c4fa5(), _0x33e255(), _0x2c7ea6());
    }
  };
  F(() => {
    _0x387fa2();
  }, [_0x33e255, _0x2c7ea6]);
  F(() => {
    if (!_0x2c7ea6()) {
      return;
    }
    const _0x739e7 = new Image();
    _0x739e7.src = _0x2c7ea6();
    _0x739e7.onload = () => {
      if (_0x739e7.width > _0x395097.maxImageWidth || _0x739e7.height > _0x395097.maxImageHeight) {
        _0x5a437f(true);
        _0x1d59fb("The image is too large. Please use an image with a maximum size of " + _0x395097.maxImageWidth + "x" + _0x395097.maxImageHeight + ".");
      } else {
        _0x5a437f(false);
      }
    };
    _0x739e7.onerror = () => {
      _0x5a437f(true);
      _0x1d59fb("The image URL is invalid. Please enter a valid image URL.");
    };
  });
  const _0x49f428 = _0x395097.availableItems.map(_0x5662f3 => _0x5662f3[0]);
  return (() => {
    const _0x5970f0 = Ii();
    const _0x22894d = _0x5970f0.firstChild;
    const _0x3e191e = _0x22894d.nextSibling;
    const _0x137084 = _0x3e191e.nextSibling;
    const _0x3a62c2 = _0x137084.firstChild;
    const _0x26a6c7 = _0x3a62c2.nextSibling;
    const _0x52ef95 = _0x26a6c7.nextSibling;
    const _0x402658 = _0x52ef95.firstChild;
    const _0x2b6dbe = _0x52ef95.nextSibling;
    const _0x189b6f = _0x2b6dbe.firstChild;
    const _0x549607 = _0x189b6f.firstChild;
    const _0x2bb3c9 = _0x549607.firstChild;
    const _0x2b77ad = _0x2bb3c9.firstChild;
    const _0xddd7c4 = _0x549607.nextSibling;
    const _0x4965c7 = _0xddd7c4.firstChild;
    const _0x1cbaa8 = _0x4965c7.firstChild;
    const _0x35f1d7 = _0x1cbaa8.nextSibling;
    const _0x127a21 = _0x35f1d7.firstChild;
    const _0x475c98 = _0x127a21.nextSibling;
    const _0x59722c = _0x475c98.nextSibling;
    const _0x3e1272 = _0x59722c.nextSibling;
    _0x3e1272.nextSibling;
    const _0x5b674f = _0x4965c7.nextSibling;
    const _0x13fcb2 = _0xddd7c4.nextSibling;
    I(_0x549607, y(Zt, Qe({
      class: "custom"
    }, () => Qt(_0x49f428), {
      format: (_0x29a04b, _0x1e2ddb) => {
        const _0x3c4390 = _0x1e2ddb !== "option" ? _0x29a04b : _0x29a04b.value;
        const _0x27c549 = _0x395097.availableItems.find(([_0x51c259, _0x439798]) => _0x51c259 === _0x3c4390);
        if (_0x27c549) {
          return (() => {
            const _0x5491e3 = xi();
            I(_0x5491e3, () => _0x27c549[1]);
            return _0x5491e3;
          })();
        } else {
          return _0x3c4390;
        }
      },
      get initialValue() {
        return _0x33e255();
      },
      onChange: _0x18dbdf
    })), null);
    I(_0x35f1d7, () => _0x395097.maxImageWidth, _0x475c98);
    I(_0x35f1d7, () => _0x395097.maxImageHeight, _0x3e1272);
    _0x5b674f.$$input = _0x7cb13a => _0x65ed5b(_0x7cb13a.currentTarget.value);
    ut(_0x565a41, _0x13fcb2);
    _0x13fcb2.addEventListener("mouseleave", () => _0x463b24(false));
    _0x13fcb2.addEventListener("mouseenter", () => _0x463b24(true));
    _0x13fcb2.$$click = _0x30cbd6;
    I(_0x189b6f, y(me, {
      get when() {
        return H(() => !!_0x522dc9())() && _0x54dfbe();
      },
      get children() {
        const _0x233a27 = wi();
        const _0x3a0172 = _0x233a27.firstChild;
        I(_0x3a0172, _0x54dfbe);
        P(_0x555a86 => {
          const _0x14ebd6 = g.tooltip;
          const _0x358098 = _0x5f142c().y - 10 + "px";
          const _0x4f619a = _0x5f142c().x + "px";
          if (_0x14ebd6 !== _0x555a86._v$) {
            v(_0x233a27, _0x555a86._v$ = _0x14ebd6);
          }
          if (_0x358098 !== _0x555a86._v$2) {
            if ((_0x555a86._v$2 = _0x358098) != null) {
              _0x233a27.style.setProperty("top", _0x358098);
            } else {
              _0x233a27.style.removeProperty("top");
            }
          }
          if (_0x4f619a !== _0x555a86._v$3) {
            if ((_0x555a86._v$3 = _0x4f619a) != null) {
              _0x233a27.style.setProperty("left", _0x4f619a);
            } else {
              _0x233a27.style.removeProperty("left");
            }
          }
          return _0x555a86;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return _0x233a27;
      }
    }), null);
    P(_0x247ba9 => {
      const _0x16d341 = g.main;
      const _0x2cbd4f = g.backgroundEllipse;
      const _0x340778 = g.borderContainer;
      const _0x591f31 = g.container;
      const _0x58cba3 = g.title;
      const _0x15daf2 = g.description;
      const _0x1f599a = g.horizontalDivider;
      const _0x52db8f = g.horizontalDividerRectangle;
      const _0xecfa6 = g.section;
      const _0x81e89d = g.middleContainer;
      const _0xefbcfa = g.itemInfoDiv;
      const _0x269980 = g.itemInfoContainer;
      const _0x4e61d0 = g.itemInfoTitle;
      const _0x176596 = g.itemInfoDiv;
      const _0x572e45 = g.itemInfoContainer;
      const _0x1431e2 = g.itemInfoTitle;
      const _0x3bc106 = g.itemInfoSubtitle;
      const _0x5b6859 = g.itemInfoInput;
      const _0x28fc5c = g.itemInfoCreateButton;
      const _0x14ac03 = _0x2b08f7();
      if (_0x16d341 !== _0x247ba9._v$4) {
        v(_0x5970f0, _0x247ba9._v$4 = _0x16d341);
      }
      if (_0x2cbd4f !== _0x247ba9._v$5) {
        v(_0x22894d, _0x247ba9._v$5 = _0x2cbd4f);
      }
      if (_0x340778 !== _0x247ba9._v$6) {
        v(_0x3e191e, _0x247ba9._v$6 = _0x340778);
      }
      if (_0x591f31 !== _0x247ba9._v$7) {
        v(_0x137084, _0x247ba9._v$7 = _0x591f31);
      }
      if (_0x58cba3 !== _0x247ba9._v$8) {
        v(_0x3a62c2, _0x247ba9._v$8 = _0x58cba3);
      }
      if (_0x15daf2 !== _0x247ba9._v$9) {
        v(_0x26a6c7, _0x247ba9._v$9 = _0x15daf2);
      }
      if (_0x1f599a !== _0x247ba9._v$10) {
        v(_0x52ef95, _0x247ba9._v$10 = _0x1f599a);
      }
      if (_0x52db8f !== _0x247ba9._v$11) {
        v(_0x402658, _0x247ba9._v$11 = _0x52db8f);
      }
      if (_0xecfa6 !== _0x247ba9._v$12) {
        v(_0x2b6dbe, _0x247ba9._v$12 = _0xecfa6);
      }
      if (_0x81e89d !== _0x247ba9._v$13) {
        v(_0x189b6f, _0x247ba9._v$13 = _0x81e89d);
      }
      if (_0xefbcfa !== _0x247ba9._v$14) {
        v(_0x549607, _0x247ba9._v$14 = _0xefbcfa);
      }
      if (_0x269980 !== _0x247ba9._v$15) {
        v(_0x2bb3c9, _0x247ba9._v$15 = _0x269980);
      }
      if (_0x4e61d0 !== _0x247ba9._v$16) {
        v(_0x2b77ad, _0x247ba9._v$16 = _0x4e61d0);
      }
      if (_0x176596 !== _0x247ba9._v$17) {
        v(_0xddd7c4, _0x247ba9._v$17 = _0x176596);
      }
      if (_0x572e45 !== _0x247ba9._v$18) {
        v(_0x4965c7, _0x247ba9._v$18 = _0x572e45);
      }
      if (_0x1431e2 !== _0x247ba9._v$19) {
        v(_0x1cbaa8, _0x247ba9._v$19 = _0x1431e2);
      }
      if (_0x3bc106 !== _0x247ba9._v$20) {
        v(_0x35f1d7, _0x247ba9._v$20 = _0x3bc106);
      }
      if (_0x5b6859 !== _0x247ba9._v$21) {
        v(_0x5b674f, _0x247ba9._v$21 = _0x5b6859);
      }
      if (_0x28fc5c !== _0x247ba9._v$22) {
        v(_0x13fcb2, _0x247ba9._v$22 = _0x28fc5c);
      }
      if (_0x14ac03 !== _0x247ba9._v$23) {
        _0x13fcb2.disabled = _0x247ba9._v$23 = _0x14ac03;
      }
      return _0x247ba9;
    }, {
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
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined,
      _v$20: undefined,
      _v$21: undefined,
      _v$22: undefined,
      _v$23: undefined
    });
    P(() => _0x5b674f.value = _0x2c7ea6());
    return _0x5970f0;
  })();
}
st(["input", "click"]);
const Ai = R("<div>");
function Si() {
  const {
    state: _0x55354a,
    setState: _0x1e3695
  } = ct();
  const _0x6d9d34 = _0x16bccd => {
    if (_0x16bccd.key === "Escape" && _0x55354a.show) {
      _0x1e3695({
        show: false
      });
      _0x1c504f.execute("close");
    }
  };
  sn(async () => {
    const _0x5bf58c = async _0x64d9c0 => {
      _0x1e3695(_0x64d9c0);
    };
    _0x1c504f.register("setState", _0x5bf58c);
    document.addEventListener("keydown", _0x6d9d34);
  });
  jt(() => {
    document.removeEventListener("keydown", _0x6d9d34);
  });
  return (() => {
    const _0x41ddd4 = Ai();
    I(_0x41ddd4, y(mn, {
      get children() {
        return [y(Tt, {
          get when() {
            return _0x55354a.show && _0x55354a.menu === "creation";
          },
          get children() {
            return y(pi, {});
          }
        }), y(Tt, {
          get when() {
            return _0x55354a.show && _0x55354a.menu === "swap";
          },
          get children() {
            return y(Ci, {});
          }
        })];
      }
    }));
    P(() => v(_0x41ddd4, pn.App + " select-none"));
    return _0x41ddd4;
  })();
}
$n(() => y(Qn, {
  get children() {
    return y(Si, {});
  }
}), document.getElementById("root"));