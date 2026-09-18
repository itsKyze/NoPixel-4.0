import './style.css';
import { c as _0xc4a6f, g as _0x155a92, N as _0x537931 } from "./v-packages-869624de.js";
(function () {
  const _0x5bd3f = document.createElement("link").relList;
  if (_0x5bd3f && _0x5bd3f.supports && _0x5bd3f.supports("modulepreload")) {
    return;
  }
  for (const _0x45f61d of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x431ed5(_0x45f61d);
  }
  new MutationObserver(_0x183cc8 => {
    for (const _0x367e7d of _0x183cc8) {
      if (_0x367e7d.type === "childList") {
        for (const _0xd5fc1e of _0x367e7d.addedNodes) {
          if (_0xd5fc1e.tagName === "LINK" && _0xd5fc1e.rel === "modulepreload") {
            _0x431ed5(_0xd5fc1e);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x310663(_0x28a3e3) {
    const _0x2f7557 = {};
    if (_0x28a3e3.integrity) {
      _0x2f7557.integrity = _0x28a3e3.integrity;
    }
    if (_0x28a3e3.referrerPolicy) {
      _0x2f7557.referrerPolicy = _0x28a3e3.referrerPolicy;
    }
    if (_0x28a3e3.crossOrigin === "use-credentials") {
      _0x2f7557.credentials = "include";
    } else if (_0x28a3e3.crossOrigin === "anonymous") {
      _0x2f7557.credentials = "omit";
    } else {
      _0x2f7557.credentials = "same-origin";
    }
    return _0x2f7557;
  }
  function _0x431ed5(_0x4d0b7a) {
    if (_0x4d0b7a.ep) {
      return;
    }
    _0x4d0b7a.ep = true;
    const _0x135203 = _0x310663(_0x4d0b7a);
    fetch(_0x4d0b7a.href, _0x135203);
  }
})();
const yi = (_0x2ad8b9, _0x4d17c7) => _0x2ad8b9 === _0x4d17c7;
const Se = Symbol("solid-proxy");
const Ut = Symbol("solid-track");
const rt = {
  equals: yi
};
let Dn = $n;
const ge = 1;
const st = 2;
const Nn = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var I = null;
let It = null;
let C = null;
let V = null;
let pe = null;
let dt = 0;
const [vi, Ho] = ce(false);
function ot(_0x1dbfb8, _0x5dc668) {
  const _0x384faf = C;
  const _0x275876 = I;
  const _0x1ce54c = _0x1dbfb8.length === 0;
  const _0x515b4b = _0x1ce54c ? Nn : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x5dc668 === undefined ? _0x275876 : _0x5dc668
  };
  const _0x4d4f92 = _0x1ce54c ? _0x1dbfb8 : () => _0x1dbfb8(() => te(() => pt(_0x515b4b)));
  I = _0x515b4b;
  C = null;
  try {
    return xe(_0x4d4f92, true);
  } finally {
    C = _0x384faf;
    I = _0x275876;
  }
}
function ce(_0xfc474f, _0x34f1ed) {
  _0x34f1ed = _0x34f1ed ? Object.assign({}, rt, _0x34f1ed) : rt;
  const _0x102c09 = {
    value: _0xfc474f,
    observers: null,
    observerSlots: null,
    comparator: _0x34f1ed.equals || undefined
  };
  const _0x47c334 = _0x1a62d3 => {
    if (typeof _0x1a62d3 == "function") {
      _0x1a62d3 = _0x1a62d3(_0x102c09.value);
    }
    return kn(_0x102c09, _0x1a62d3);
  };
  return [Mn.bind(_0x102c09), _0x47c334];
}
function bi(_0x186dda, _0x4d9a06, _0x3201d1) {
  const _0x15503c = mt(_0x186dda, _0x4d9a06, true, ge);
  ke(_0x15503c);
}
function fe(_0x2f1b06, _0x3b9836, _0x41623a) {
  const _0x1c5c1e = mt(_0x2f1b06, _0x3b9836, false, ge);
  ke(_0x1c5c1e);
}
function wi(_0x98feb8, _0x22204e, _0x227b24) {
  Dn = Pi;
  const _0x1aad7f = mt(_0x98feb8, _0x22204e, false, ge);
  if (!_0x227b24 || !_0x227b24.render) {
    _0x1aad7f.user = true;
  }
  if (pe) {
    pe.push(_0x1aad7f);
  } else {
    ke(_0x1aad7f);
  }
}
function he(_0x4dba9e, _0x19ce61, _0x370615) {
  _0x370615 = _0x370615 ? Object.assign({}, rt, _0x370615) : rt;
  const _0x24c2d0 = mt(_0x4dba9e, _0x19ce61, true, 0);
  _0x24c2d0.observers = null;
  _0x24c2d0.observerSlots = null;
  _0x24c2d0.comparator = _0x370615.equals || undefined;
  ke(_0x24c2d0);
  return Mn.bind(_0x24c2d0);
}
function Ft(_0x412d0f) {
  return xe(_0x412d0f, false);
}
function te(_0x49b24f) {
  if (C === null) {
    return _0x49b24f();
  }
  const _0x329279 = C;
  C = null;
  try {
    return _0x49b24f();
  } finally {
    C = _0x329279;
  }
}
function Si(_0x107314) {
  wi(() => te(_0x107314));
}
function Pn(_0x23b119) {
  if (I !== null) {
    if (I.cleanups === null) {
      I.cleanups = [_0x23b119];
    } else {
      I.cleanups.push(_0x23b119);
    }
  }
  return _0x23b119;
}
function In() {
  return C;
}
function xi(_0x3ba85e) {
  const _0x1c3134 = C;
  const _0x34362c = I;
  return Promise.resolve().then(() => {
    C = _0x1c3134;
    I = _0x34362c;
    let _0x9c2340;
    xe(_0x3ba85e, false);
    C = I = null;
    if (_0x9c2340) {
      return _0x9c2340.done;
    } else {
      return undefined;
    }
  });
}
function Li() {
  return [vi, xi];
}
function Ci(_0x424a01, _0x4f8cc4) {
  const _0x3edd1b = Symbol("context");
  return {
    id: _0x3edd1b,
    Provider: Ii(_0x3edd1b),
    defaultValue: _0x424a01
  };
}
function Oi(_0x20046f) {
  let _0x3cefc2;
  if ((_0x3cefc2 = Hn(I, _0x20046f.id)) !== undefined) {
    return _0x3cefc2;
  } else {
    return _0x20046f.defaultValue;
  }
}
function Ri(_0x53ae08) {
  const _0x233acc = he(_0x53ae08);
  const _0x11eb68 = he(() => Ht(_0x233acc()));
  _0x11eb68.toArray = () => {
    const _0x5e0532 = _0x11eb68();
    if (Array.isArray(_0x5e0532)) {
      return _0x5e0532;
    } else if (_0x5e0532 != null) {
      return [_0x5e0532];
    } else {
      return [];
    }
  };
  return _0x11eb68;
}
function Mn() {
  if (this.sources && this.state) {
    if (this.state === ge) {
      ke(this);
    } else {
      const _0x2b7c19 = V;
      V = null;
      xe(() => at(this), false);
      V = _0x2b7c19;
    }
  }
  if (C) {
    const _0x3e0c56 = this.observers ? this.observers.length : 0;
    if (C.sources) {
      C.sources.push(this);
      C.sourceSlots.push(_0x3e0c56);
    } else {
      C.sources = [this];
      C.sourceSlots = [_0x3e0c56];
    }
    if (this.observers) {
      this.observers.push(C);
      this.observerSlots.push(C.sources.length - 1);
    } else {
      this.observers = [C];
      this.observerSlots = [C.sources.length - 1];
    }
  }
  return this.value;
}
function kn(_0x2cdd63, _0x1b4a9d, _0x54041d) {
  let _0x5695f7 = _0x2cdd63.value;
  if (!_0x2cdd63.comparator || !_0x2cdd63.comparator(_0x5695f7, _0x1b4a9d)) {
    _0x2cdd63.value = _0x1b4a9d;
    if (_0x2cdd63.observers && _0x2cdd63.observers.length) {
      xe(() => {
        for (let _0x96692a = 0; _0x96692a < _0x2cdd63.observers.length; _0x96692a += 1) {
          const _0x104582 = _0x2cdd63.observers[_0x96692a];
          const _0xdf49f9 = It && It.running;
          if (_0xdf49f9) {
            It.disposed.has(_0x104582);
          }
          if (_0xdf49f9 ? !_0x104582.tState : !_0x104582.state) {
            if (_0x104582.pure) {
              V.push(_0x104582);
            } else {
              pe.push(_0x104582);
            }
            if (_0x104582.observers) {
              Un(_0x104582);
            }
          }
          if (!_0xdf49f9) {
            _0x104582.state = ge;
          }
        }
        if (V.length > 1000000) {
          V = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x1b4a9d;
}
function ke(_0x2fb6b5) {
  if (!_0x2fb6b5.fn) {
    return;
  }
  pt(_0x2fb6b5);
  const _0x1ade95 = I;
  const _0x5a4151 = C;
  const _0x5ed052 = dt;
  C = I = _0x2fb6b5;
  Di(_0x2fb6b5, _0x2fb6b5.value, _0x5ed052);
  C = _0x5a4151;
  I = _0x1ade95;
}
function Di(_0x3c3382, _0x5c7745, _0x23bc80) {
  let _0x1f89e8;
  try {
    _0x1f89e8 = _0x3c3382.fn(_0x5c7745);
  } catch (_0x13052b) {
    if (_0x3c3382.pure) {
      _0x3c3382.state = ge;
      if (_0x3c3382.owned) {
        _0x3c3382.owned.forEach(pt);
      }
      _0x3c3382.owned = null;
    }
    _0x3c3382.updatedAt = _0x23bc80 + 1;
    return Fn(_0x13052b);
  }
  if (!_0x3c3382.updatedAt || _0x3c3382.updatedAt <= _0x23bc80) {
    if (_0x3c3382.updatedAt != null && "observers" in _0x3c3382) {
      kn(_0x3c3382, _0x1f89e8);
    } else {
      _0x3c3382.value = _0x1f89e8;
    }
    _0x3c3382.updatedAt = _0x23bc80;
  }
}
function mt(_0x4d65f5, _0x46f58f, _0x1b650f, _0x4e9b5a = ge, _0x5518c9) {
  const _0x3c2111 = {
    fn: _0x4d65f5,
    state: _0x4e9b5a,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x46f58f,
    owner: I,
    context: null,
    pure: _0x1b650f
  };
  if (I !== null) {
    if (I !== Nn) {
      if (I.owned) {
        I.owned.push(_0x3c2111);
      } else {
        I.owned = [_0x3c2111];
      }
    }
  }
  return _0x3c2111;
}
function lt(_0x5da7a7) {
  if (_0x5da7a7.state === 0) {
    return;
  }
  if (_0x5da7a7.state === st) {
    return at(_0x5da7a7);
  }
  if (_0x5da7a7.suspense && te(_0x5da7a7.suspense.inFallback)) {
    return _0x5da7a7.suspense.effects.push(_0x5da7a7);
  }
  const _0xc0cd47 = [_0x5da7a7];
  while ((_0x5da7a7 = _0x5da7a7.owner) && (!_0x5da7a7.updatedAt || _0x5da7a7.updatedAt < dt)) {
    if (_0x5da7a7.state) {
      _0xc0cd47.push(_0x5da7a7);
    }
  }
  for (let _0x27f3f8 = _0xc0cd47.length - 1; _0x27f3f8 >= 0; _0x27f3f8--) {
    _0x5da7a7 = _0xc0cd47[_0x27f3f8];
    if (_0x5da7a7.state === ge) {
      ke(_0x5da7a7);
    } else if (_0x5da7a7.state === st) {
      const _0x197eb4 = V;
      V = null;
      xe(() => at(_0x5da7a7, _0xc0cd47[0]), false);
      V = _0x197eb4;
    }
  }
}
function xe(_0x141cc8, _0x548b3c) {
  if (V) {
    return _0x141cc8();
  }
  let _0x5148db = false;
  if (!_0x548b3c) {
    V = [];
  }
  if (pe) {
    _0x5148db = true;
  } else {
    pe = [];
  }
  dt++;
  try {
    const _0x4a0f2b = _0x141cc8();
    Ni(_0x5148db);
    return _0x4a0f2b;
  } catch (_0x1214d9) {
    if (!_0x5148db) {
      pe = null;
    }
    V = null;
    Fn(_0x1214d9);
  }
}
function Ni(_0x199e94) {
  if (V) {
    $n(V);
    V = null;
  }
  if (_0x199e94) {
    return;
  }
  const _0x3fc0b0 = pe;
  pe = null;
  if (_0x3fc0b0.length) {
    xe(() => Dn(_0x3fc0b0), false);
  }
}
function $n(_0x57c3ee) {
  for (let _0x13fbe7 = 0; _0x13fbe7 < _0x57c3ee.length; _0x13fbe7++) {
    lt(_0x57c3ee[_0x13fbe7]);
  }
}
function Pi(_0x1a9ea9) {
  let _0x584815;
  let _0x5ce8b2 = 0;
  for (_0x584815 = 0; _0x584815 < _0x1a9ea9.length; _0x584815++) {
    const _0x31cdc2 = _0x1a9ea9[_0x584815];
    if (_0x31cdc2.user) {
      _0x1a9ea9[_0x5ce8b2++] = _0x31cdc2;
    } else {
      lt(_0x31cdc2);
    }
  }
  for (_0x584815 = 0; _0x584815 < _0x5ce8b2; _0x584815++) {
    lt(_0x1a9ea9[_0x584815]);
  }
}
function at(_0x53333c, _0x3fa3c7) {
  _0x53333c.state = 0;
  for (let _0xc0ade9 = 0; _0xc0ade9 < _0x53333c.sources.length; _0xc0ade9 += 1) {
    const _0x2908f9 = _0x53333c.sources[_0xc0ade9];
    if (_0x2908f9.sources) {
      const _0x315316 = _0x2908f9.state;
      if (_0x315316 === ge) {
        if (_0x2908f9 !== _0x3fa3c7 && (!_0x2908f9.updatedAt || _0x2908f9.updatedAt < dt)) {
          lt(_0x2908f9);
        }
      } else if (_0x315316 === st) {
        at(_0x2908f9, _0x3fa3c7);
      }
    }
  }
}
function Un(_0x59b745) {
  for (let _0x535736 = 0; _0x535736 < _0x59b745.observers.length; _0x535736 += 1) {
    const _0x1ff87b = _0x59b745.observers[_0x535736];
    if (!_0x1ff87b.state) {
      _0x1ff87b.state = st;
      if (_0x1ff87b.pure) {
        V.push(_0x1ff87b);
      } else {
        pe.push(_0x1ff87b);
      }
      if (_0x1ff87b.observers) {
        Un(_0x1ff87b);
      }
    }
  }
}
function pt(_0x48d742) {
  let _0x1a4c1a;
  if (_0x48d742.sources) {
    while (_0x48d742.sources.length) {
      const _0x550ad4 = _0x48d742.sources.pop();
      const _0x362ee2 = _0x48d742.sourceSlots.pop();
      const _0x17e16e = _0x550ad4.observers;
      if (_0x17e16e && _0x17e16e.length) {
        const _0x17c88b = _0x17e16e.pop();
        const _0x9008c7 = _0x550ad4.observerSlots.pop();
        if (_0x362ee2 < _0x17e16e.length) {
          _0x17c88b.sourceSlots[_0x9008c7] = _0x362ee2;
          _0x17e16e[_0x362ee2] = _0x17c88b;
          _0x550ad4.observerSlots[_0x362ee2] = _0x9008c7;
        }
      }
    }
  }
  if (_0x48d742.owned) {
    for (_0x1a4c1a = _0x48d742.owned.length - 1; _0x1a4c1a >= 0; _0x1a4c1a--) {
      pt(_0x48d742.owned[_0x1a4c1a]);
    }
    _0x48d742.owned = null;
  }
  if (_0x48d742.cleanups) {
    for (_0x1a4c1a = _0x48d742.cleanups.length - 1; _0x1a4c1a >= 0; _0x1a4c1a--) {
      _0x48d742.cleanups[_0x1a4c1a]();
    }
    _0x48d742.cleanups = null;
  }
  _0x48d742.state = 0;
  _0x48d742.context = null;
}
function Fn(_0x30225a) {
  throw _0x30225a;
}
function Hn(_0x5f1644, _0x19fa9d) {
  if (_0x5f1644) {
    if (_0x5f1644.context && _0x5f1644.context[_0x19fa9d] !== undefined) {
      return _0x5f1644.context[_0x19fa9d];
    } else {
      return Hn(_0x5f1644.owner, _0x19fa9d);
    }
  } else {
    return undefined;
  }
}
function Ht(_0x1f7d57) {
  if (typeof _0x1f7d57 == "function" && !_0x1f7d57.length) {
    return Ht(_0x1f7d57());
  }
  if (Array.isArray(_0x1f7d57)) {
    const _0x20e570 = [];
    for (let _0xbfe7c9 = 0; _0xbfe7c9 < _0x1f7d57.length; _0xbfe7c9++) {
      const _0x1c3b86 = Ht(_0x1f7d57[_0xbfe7c9]);
      if (Array.isArray(_0x1c3b86)) {
        _0x20e570.push.apply(_0x20e570, _0x1c3b86);
      } else {
        _0x20e570.push(_0x1c3b86);
      }
    }
    return _0x20e570;
  }
  return _0x1f7d57;
}
function Ii(_0x5c7ec1, _0x28e92b) {
  return function (_0x59c067) {
    let _0x365129;
    fe(() => _0x365129 = te(() => {
      I.context = {
        [_0x5c7ec1]: _0x59c067.value
      };
      return Ri(() => _0x59c067.children);
    }), undefined);
    return _0x365129;
  };
}
const Mi = Symbol("fallback");
function vn(_0x22d59e) {
  for (let _0x533be8 = 0; _0x533be8 < _0x22d59e.length; _0x533be8++) {
    _0x22d59e[_0x533be8]();
  }
}
function ki(_0x2ae906, _0x207cca, _0x23652c = {}) {
  let _0x212469 = [];
  let _0x35b0be = [];
  let _0x5f1c6f = [];
  let _0x31c41d = 0;
  let _0x488763 = _0x207cca.length > 1 ? [] : null;
  Pn(() => vn(_0x5f1c6f));
  return () => {
    let _0xf42f27 = _0x2ae906() || [];
    let _0x1c1724;
    let _0x50449e;
    _0xf42f27[Ut];
    return te(() => {
      let _0x21bed5 = _0xf42f27.length;
      let _0x375288;
      let _0x502955;
      let _0x1f7dbe;
      let _0x2ac4bc;
      let _0x6b112;
      let _0x14c1e3;
      let _0x5b452c;
      let _0x7cbaf5;
      let _0x3df918;
      if (_0x21bed5 === 0) {
        if (_0x31c41d !== 0) {
          vn(_0x5f1c6f);
          _0x5f1c6f = [];
          _0x212469 = [];
          _0x35b0be = [];
          _0x31c41d = 0;
          _0x488763 &&= [];
        }
        if (_0x23652c.fallback) {
          _0x212469 = [Mi];
          _0x35b0be[0] = ot(_0x1ad9d0 => {
            _0x5f1c6f[0] = _0x1ad9d0;
            return _0x23652c.fallback();
          });
          _0x31c41d = 1;
        }
      } else if (_0x31c41d === 0) {
        _0x35b0be = new Array(_0x21bed5);
        _0x50449e = 0;
        for (; _0x50449e < _0x21bed5; _0x50449e++) {
          _0x212469[_0x50449e] = _0xf42f27[_0x50449e];
          _0x35b0be[_0x50449e] = ot(_0x55bb3f);
        }
        _0x31c41d = _0x21bed5;
      } else {
        _0x1f7dbe = new Array(_0x21bed5);
        _0x2ac4bc = new Array(_0x21bed5);
        if (_0x488763) {
          _0x6b112 = new Array(_0x21bed5);
        }
        _0x14c1e3 = 0;
        _0x5b452c = Math.min(_0x31c41d, _0x21bed5);
        for (; _0x14c1e3 < _0x5b452c && _0x212469[_0x14c1e3] === _0xf42f27[_0x14c1e3]; _0x14c1e3++);
        _0x5b452c = _0x31c41d - 1;
        _0x7cbaf5 = _0x21bed5 - 1;
        for (; _0x5b452c >= _0x14c1e3 && _0x7cbaf5 >= _0x14c1e3 && _0x212469[_0x5b452c] === _0xf42f27[_0x7cbaf5]; _0x5b452c--, _0x7cbaf5--) {
          _0x1f7dbe[_0x7cbaf5] = _0x35b0be[_0x5b452c];
          _0x2ac4bc[_0x7cbaf5] = _0x5f1c6f[_0x5b452c];
          if (_0x488763) {
            _0x6b112[_0x7cbaf5] = _0x488763[_0x5b452c];
          }
        }
        _0x375288 = new Map();
        _0x502955 = new Array(_0x7cbaf5 + 1);
        _0x50449e = _0x7cbaf5;
        for (; _0x50449e >= _0x14c1e3; _0x50449e--) {
          _0x3df918 = _0xf42f27[_0x50449e];
          _0x1c1724 = _0x375288.get(_0x3df918);
          _0x502955[_0x50449e] = _0x1c1724 === undefined ? -1 : _0x1c1724;
          _0x375288.set(_0x3df918, _0x50449e);
        }
        for (_0x1c1724 = _0x14c1e3; _0x1c1724 <= _0x5b452c; _0x1c1724++) {
          _0x3df918 = _0x212469[_0x1c1724];
          _0x50449e = _0x375288.get(_0x3df918);
          if (_0x50449e !== undefined && _0x50449e !== -1) {
            _0x1f7dbe[_0x50449e] = _0x35b0be[_0x1c1724];
            _0x2ac4bc[_0x50449e] = _0x5f1c6f[_0x1c1724];
            if (_0x488763) {
              _0x6b112[_0x50449e] = _0x488763[_0x1c1724];
            }
            _0x50449e = _0x502955[_0x50449e];
            _0x375288.set(_0x3df918, _0x50449e);
          } else {
            _0x5f1c6f[_0x1c1724]();
          }
        }
        for (_0x50449e = _0x14c1e3; _0x50449e < _0x21bed5; _0x50449e++) {
          if (_0x50449e in _0x1f7dbe) {
            _0x35b0be[_0x50449e] = _0x1f7dbe[_0x50449e];
            _0x5f1c6f[_0x50449e] = _0x2ac4bc[_0x50449e];
            if (_0x488763) {
              _0x488763[_0x50449e] = _0x6b112[_0x50449e];
              _0x488763[_0x50449e](_0x50449e);
            }
          } else {
            _0x35b0be[_0x50449e] = ot(_0x55bb3f);
          }
        }
        _0x35b0be = _0x35b0be.slice(0, _0x31c41d = _0x21bed5);
        _0x212469 = _0xf42f27.slice(0);
      }
      return _0x35b0be;
    });
    function _0x55bb3f(_0x5a0eba) {
      _0x5f1c6f[_0x50449e] = _0x5a0eba;
      if (_0x488763) {
        const [_0x580b60, _0x39f6c6] = ce(_0x50449e);
        _0x488763[_0x50449e] = _0x39f6c6;
        return _0x207cca(_0xf42f27[_0x50449e], _0x580b60);
      }
      return _0x207cca(_0xf42f27[_0x50449e]);
    }
  };
}
function se(_0x3fdebc, _0x3759b9) {
  return te(() => _0x3fdebc(_0x3759b9 || {}));
}
const $i = _0x2540b5 => "Stale read from <" + _0x2540b5 + ">.";
function bn(_0x1d8e33) {
  const _0x3c55a4 = "fallback" in _0x1d8e33 && {
    fallback: () => _0x1d8e33.fallback
  };
  return he(ki(() => _0x1d8e33.each, _0x1d8e33.children, _0x3c55a4 || undefined));
}
function it(_0x2031c4) {
  const _0x11ed5f = _0x2031c4.keyed;
  const _0x4e15e9 = he(() => _0x2031c4.when, undefined, {
    equals: (_0x504a3b, _0x210539) => _0x11ed5f ? _0x504a3b === _0x210539 : !_0x504a3b == !_0x210539
  });
  return he(() => {
    const _0x416d96 = _0x4e15e9();
    if (_0x416d96) {
      const _0x1ea5b4 = _0x2031c4.children;
      if (typeof _0x1ea5b4 == "function" && _0x1ea5b4.length > 0) {
        return te(() => _0x1ea5b4(_0x11ed5f ? _0x416d96 : () => {
          if (!te(_0x4e15e9)) {
            throw $i("Show");
          }
          return _0x2031c4.when;
        }));
      } else {
        return _0x1ea5b4;
      }
    }
    return _0x2031c4.fallback;
  }, undefined, undefined);
}
function Ui(_0x35dfe4, _0x2627d9, _0x40a46a) {
  let _0x971aa0 = _0x40a46a.length;
  let _0x175039 = _0x2627d9.length;
  let _0x57a08e = _0x971aa0;
  let _0x4b1d9e = 0;
  let _0x3785bd = 0;
  let _0x536bde = _0x2627d9[_0x175039 - 1].nextSibling;
  let _0x1368a8 = null;
  while (_0x4b1d9e < _0x175039 || _0x3785bd < _0x57a08e) {
    if (_0x2627d9[_0x4b1d9e] === _0x40a46a[_0x3785bd]) {
      _0x4b1d9e++;
      _0x3785bd++;
      continue;
    }
    while (_0x2627d9[_0x175039 - 1] === _0x40a46a[_0x57a08e - 1]) {
      _0x175039--;
      _0x57a08e--;
    }
    if (_0x175039 === _0x4b1d9e) {
      const _0x511521 = _0x57a08e < _0x971aa0 ? _0x3785bd ? _0x40a46a[_0x3785bd - 1].nextSibling : _0x40a46a[_0x57a08e - _0x3785bd] : _0x536bde;
      while (_0x3785bd < _0x57a08e) {
        _0x35dfe4.insertBefore(_0x40a46a[_0x3785bd++], _0x511521);
      }
    } else if (_0x57a08e === _0x3785bd) {
      while (_0x4b1d9e < _0x175039) {
        if (!_0x1368a8 || !_0x1368a8.has(_0x2627d9[_0x4b1d9e])) {
          _0x2627d9[_0x4b1d9e].remove();
        }
        _0x4b1d9e++;
      }
    } else if (_0x2627d9[_0x4b1d9e] === _0x40a46a[_0x57a08e - 1] && _0x40a46a[_0x3785bd] === _0x2627d9[_0x175039 - 1]) {
      const _0x47d121 = _0x2627d9[--_0x175039].nextSibling;
      _0x35dfe4.insertBefore(_0x40a46a[_0x3785bd++], _0x2627d9[_0x4b1d9e++].nextSibling);
      _0x35dfe4.insertBefore(_0x40a46a[--_0x57a08e], _0x47d121);
      _0x2627d9[_0x175039] = _0x40a46a[_0x57a08e];
    } else {
      if (!_0x1368a8) {
        _0x1368a8 = new Map();
        let _0x3d71c7 = _0x3785bd;
        while (_0x3d71c7 < _0x57a08e) {
          _0x1368a8.set(_0x40a46a[_0x3d71c7], _0x3d71c7++);
        }
      }
      const _0x4f7338 = _0x1368a8.get(_0x2627d9[_0x4b1d9e]);
      if (_0x4f7338 != null) {
        if (_0x3785bd < _0x4f7338 && _0x4f7338 < _0x57a08e) {
          let _0x936d3b = _0x4b1d9e;
          let _0x440450 = 1;
          let _0x371dc9;
          while (++_0x936d3b < _0x175039 && _0x936d3b < _0x57a08e && (_0x371dc9 = _0x1368a8.get(_0x2627d9[_0x936d3b])) != null && _0x371dc9 === _0x4f7338 + _0x440450) {
            _0x440450++;
          }
          if (_0x440450 > _0x4f7338 - _0x3785bd) {
            const _0x4f7f13 = _0x2627d9[_0x4b1d9e];
            while (_0x3785bd < _0x4f7338) {
              _0x35dfe4.insertBefore(_0x40a46a[_0x3785bd++], _0x4f7f13);
            }
          } else {
            _0x35dfe4.replaceChild(_0x40a46a[_0x3785bd++], _0x2627d9[_0x4b1d9e++]);
          }
        } else {
          _0x4b1d9e++;
        }
      } else {
        _0x2627d9[_0x4b1d9e++].remove();
      }
    }
  }
}
const wn = "_$DX_DELEGATE";
function Fi(_0x184dbe, _0x21c459, _0x572c0c, _0x5dc424 = {}) {
  let _0xf304d2;
  ot(_0xa9f2a5 => {
    _0xf304d2 = _0xa9f2a5;
    if (_0x21c459 === document) {
      _0x184dbe();
    } else {
      Z(_0x21c459, _0x184dbe(), _0x21c459.firstChild ? null : undefined, _0x572c0c);
    }
  }, _0x5dc424.owner);
  return () => {
    _0xf304d2();
    _0x21c459.textContent = "";
  };
}
function Le(_0x1c5868, _0x2fbb9a, _0x5d1664) {
  let _0x19c582;
  const _0x9f9955 = () => {
    const _0x32fa97 = document.createElement("template");
    _0x32fa97.innerHTML = _0x1c5868;
    if (_0x5d1664) {
      return _0x32fa97.content.firstChild.firstChild;
    } else {
      return _0x32fa97.content.firstChild;
    }
  };
  const _0x409b40 = _0x2fbb9a ? () => te(() => document.importNode(_0x19c582 ||= _0x9f9955(), true)) : () => (_0x19c582 ||= _0x9f9955()).cloneNode(true);
  _0x409b40.cloneNode = _0x409b40;
  return _0x409b40;
}
function Hi(_0x3513e6, _0x5846d5 = window.document) {
  const _0x398ab4 = _0x5846d5[wn] ||= new Set();
  for (let _0x2eae85 = 0, _0x63a99a = _0x3513e6.length; _0x2eae85 < _0x63a99a; _0x2eae85++) {
    const _0x5c6efb = _0x3513e6[_0x2eae85];
    if (!_0x398ab4.has(_0x5c6efb)) {
      _0x398ab4.add(_0x5c6efb);
      _0x5846d5.addEventListener(_0x5c6efb, Gi);
    }
  }
}
function Bi(_0x2c9d5a, _0x53ab2f, _0x568e80) {
  if (_0x568e80 == null) {
    _0x2c9d5a.removeAttribute(_0x53ab2f);
  } else {
    _0x2c9d5a.setAttribute(_0x53ab2f, _0x568e80);
  }
}
function k(_0x3a649d, _0x4c02d1) {
  if (_0x4c02d1 == null) {
    _0x3a649d.removeAttribute("class");
  } else {
    _0x3a649d.className = _0x4c02d1;
  }
}
function Mt(_0x133f5c, _0x1df10f, _0x28a085 = {}) {
  const _0x154b39 = Object.keys(_0x1df10f || {});
  const _0x4401cb = Object.keys(_0x28a085);
  let _0x46767d;
  let _0x386e5c;
  _0x46767d = 0;
  _0x386e5c = _0x4401cb.length;
  for (; _0x46767d < _0x386e5c; _0x46767d++) {
    const _0x3da8fb = _0x4401cb[_0x46767d];
    if (!!_0x3da8fb && _0x3da8fb !== "undefined" && !_0x1df10f[_0x3da8fb]) {
      Sn(_0x133f5c, _0x3da8fb, false);
      delete _0x28a085[_0x3da8fb];
    }
  }
  _0x46767d = 0;
  _0x386e5c = _0x154b39.length;
  for (; _0x46767d < _0x386e5c; _0x46767d++) {
    const _0x8779d7 = _0x154b39[_0x46767d];
    const _0x477cd0 = !!_0x1df10f[_0x8779d7];
    if (!!_0x8779d7 && _0x8779d7 !== "undefined" && _0x28a085[_0x8779d7] !== _0x477cd0 && !!_0x477cd0) {
      Sn(_0x133f5c, _0x8779d7, true);
      _0x28a085[_0x8779d7] = _0x477cd0;
    }
  }
  return _0x28a085;
}
function Z(_0x34b8ff, _0x43ff0d, _0x1126af, _0x352d27) {
  if (_0x1126af !== undefined && !_0x352d27) {
    _0x352d27 = [];
  }
  if (typeof _0x43ff0d != "function") {
    return ct(_0x34b8ff, _0x43ff0d, _0x352d27, _0x1126af);
  }
  fe(_0x34ef7f => ct(_0x34b8ff, _0x43ff0d(), _0x34ef7f, _0x1126af), _0x352d27);
}
function Sn(_0x3c3fdb, _0x30df01, _0x357f7f) {
  const _0x4392e1 = _0x30df01.trim().split(/\s+/);
  for (let _0x2aada8 = 0, _0x588940 = _0x4392e1.length; _0x2aada8 < _0x588940; _0x2aada8++) {
    _0x3c3fdb.classList.toggle(_0x4392e1[_0x2aada8], _0x357f7f);
  }
}
function Gi(_0x522dda) {
  const _0xcb3fb = "$$" + _0x522dda.type;
  let _0x288329 = _0x522dda.composedPath && _0x522dda.composedPath()[0] || _0x522dda.target;
  if (_0x522dda.target !== _0x288329) {
    Object.defineProperty(_0x522dda, "target", {
      configurable: true,
      value: _0x288329
    });
  }
  Object.defineProperty(_0x522dda, "currentTarget", {
    configurable: true,
    get() {
      return _0x288329 || document;
    }
  });
  while (_0x288329) {
    const _0x2e2128 = _0x288329[_0xcb3fb];
    if (_0x2e2128 && !_0x288329.disabled) {
      const _0x38bda8 = _0x288329[_0xcb3fb + "Data"];
      if (_0x38bda8 !== undefined) {
        _0x2e2128.call(_0x288329, _0x38bda8, _0x522dda);
      } else {
        _0x2e2128.call(_0x288329, _0x522dda);
      }
      if (_0x522dda.cancelBubble) {
        return;
      }
    }
    _0x288329 = _0x288329._$host || _0x288329.parentNode || _0x288329.host;
  }
}
function ct(_0x541e0a, _0x28e80a, _0x364348, _0x21c392, _0x113d02) {
  while (typeof _0x364348 == "function") {
    _0x364348 = _0x364348();
  }
  if (_0x28e80a === _0x364348) {
    return _0x364348;
  }
  const _0x539fac = typeof _0x28e80a;
  const _0xf638e0 = _0x21c392 !== undefined;
  _0x541e0a = _0xf638e0 && _0x364348[0] && _0x364348[0].parentNode || _0x541e0a;
  if (_0x539fac === "string" || _0x539fac === "number") {
    if (_0x539fac === "number") {
      _0x28e80a = _0x28e80a.toString();
    }
    if (_0xf638e0) {
      let _0x13fd7d = _0x364348[0];
      if (_0x13fd7d && _0x13fd7d.nodeType === 3) {
        _0x13fd7d.data = _0x28e80a;
      } else {
        _0x13fd7d = document.createTextNode(_0x28e80a);
      }
      _0x364348 = Me(_0x541e0a, _0x364348, _0x21c392, _0x13fd7d);
    } else if (_0x364348 !== "" && typeof _0x364348 == "string") {
      _0x364348 = _0x541e0a.firstChild.data = _0x28e80a;
    } else {
      _0x364348 = _0x541e0a.textContent = _0x28e80a;
    }
  } else if (_0x28e80a == null || _0x539fac === "boolean") {
    _0x364348 = Me(_0x541e0a, _0x364348, _0x21c392);
  } else {
    if (_0x539fac === "function") {
      fe(() => {
        let _0x275082 = _0x28e80a();
        while (typeof _0x275082 == "function") {
          _0x275082 = _0x275082();
        }
        _0x364348 = ct(_0x541e0a, _0x275082, _0x364348, _0x21c392);
      });
      return () => _0x364348;
    }
    if (Array.isArray(_0x28e80a)) {
      const _0xb4024e = [];
      const _0x290c16 = _0x364348 && Array.isArray(_0x364348);
      if (Bt(_0xb4024e, _0x28e80a, _0x364348, _0x113d02)) {
        fe(() => _0x364348 = ct(_0x541e0a, _0xb4024e, _0x364348, _0x21c392, true));
        return () => _0x364348;
      }
      if (_0xb4024e.length === 0) {
        _0x364348 = Me(_0x541e0a, _0x364348, _0x21c392);
        if (_0xf638e0) {
          return _0x364348;
        }
      } else if (_0x290c16) {
        if (_0x364348.length === 0) {
          xn(_0x541e0a, _0xb4024e, _0x21c392);
        } else {
          Ui(_0x541e0a, _0x364348, _0xb4024e);
        }
      } else {
        if (_0x364348) {
          Me(_0x541e0a);
        }
        xn(_0x541e0a, _0xb4024e);
      }
      _0x364348 = _0xb4024e;
    } else if (_0x28e80a.nodeType) {
      if (Array.isArray(_0x364348)) {
        if (_0xf638e0) {
          return _0x364348 = Me(_0x541e0a, _0x364348, _0x21c392, _0x28e80a);
        }
        Me(_0x541e0a, _0x364348, null, _0x28e80a);
      } else if (_0x364348 == null || _0x364348 === "" || !_0x541e0a.firstChild) {
        _0x541e0a.appendChild(_0x28e80a);
      } else {
        _0x541e0a.replaceChild(_0x28e80a, _0x541e0a.firstChild);
      }
      _0x364348 = _0x28e80a;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x28e80a);
    }
  }
  return _0x364348;
}
function Bt(_0x29575f, _0x55cdd2, _0x4970f8, _0x3dde7d) {
  let _0x3eb947 = false;
  for (let _0x1d4b06 = 0, _0x2185d1 = _0x55cdd2.length; _0x1d4b06 < _0x2185d1; _0x1d4b06++) {
    let _0x3d8e53 = _0x55cdd2[_0x1d4b06];
    let _0x570a37 = _0x4970f8 && _0x4970f8[_0x1d4b06];
    let _0x305e6c;
    if (_0x3d8e53 != null && _0x3d8e53 !== true && _0x3d8e53 !== false) {
      if ((_0x305e6c = typeof _0x3d8e53) == "object" && _0x3d8e53.nodeType) {
        _0x29575f.push(_0x3d8e53);
      } else if (Array.isArray(_0x3d8e53)) {
        _0x3eb947 = Bt(_0x29575f, _0x3d8e53, _0x570a37) || _0x3eb947;
      } else if (_0x305e6c === "function") {
        if (_0x3dde7d) {
          while (typeof _0x3d8e53 == "function") {
            _0x3d8e53 = _0x3d8e53();
          }
          _0x3eb947 = Bt(_0x29575f, Array.isArray(_0x3d8e53) ? _0x3d8e53 : [_0x3d8e53], Array.isArray(_0x570a37) ? _0x570a37 : [_0x570a37]) || _0x3eb947;
        } else {
          _0x29575f.push(_0x3d8e53);
          _0x3eb947 = true;
        }
      } else {
        const _0x65e44c = String(_0x3d8e53);
        if (_0x570a37 && _0x570a37.nodeType === 3 && _0x570a37.data === _0x65e44c) {
          _0x29575f.push(_0x570a37);
        } else {
          _0x29575f.push(document.createTextNode(_0x65e44c));
        }
      }
    }
  }
  return _0x3eb947;
}
function xn(_0x29f48a, _0x44dc26, _0x336a5d = null) {
  for (let _0x10d7cc = 0, _0x288429 = _0x44dc26.length; _0x10d7cc < _0x288429; _0x10d7cc++) {
    _0x29f48a.insertBefore(_0x44dc26[_0x10d7cc], _0x336a5d);
  }
}
function Me(_0x506f95, _0x151e85, _0x431413, _0x57eacd) {
  if (_0x431413 === undefined) {
    return _0x506f95.textContent = "";
  }
  const _0x558f12 = _0x57eacd || document.createTextNode("");
  if (_0x151e85.length) {
    let _0x60e04 = false;
    for (let _0x68bd9 = _0x151e85.length - 1; _0x68bd9 >= 0; _0x68bd9--) {
      const _0x2d4ac0 = _0x151e85[_0x68bd9];
      if (_0x558f12 !== _0x2d4ac0) {
        const _0x1c3afe = _0x2d4ac0.parentNode === _0x506f95;
        if (!_0x60e04 && !_0x68bd9) {
          if (_0x1c3afe) {
            _0x506f95.replaceChild(_0x558f12, _0x2d4ac0);
          } else {
            _0x506f95.insertBefore(_0x558f12, _0x431413);
          }
        } else if (_0x1c3afe) {
          _0x2d4ac0.remove();
        }
      } else {
        _0x60e04 = true;
      }
    }
  } else {
    _0x506f95.insertBefore(_0x558f12, _0x431413);
  }
  return [_0x558f12];
}
const zi = "_App_1w3bl_1";
const Wi = "_container_1w3bl_14";
const ji = "_border_container_1w3bl_29";
const Yi = "_header_1w3bl_43";
const Vi = "_text_1w3bl_50";
const qi = "_big_1w3bl_59";
const Ki = "_tag_1w3bl_62";
const Xi = "_dialogueText_1w3bl_78";
const Zi = "_textBox_1w3bl_90";
const Qi = "_indicator_1w3bl_103";
const Ji = "_options_1w3bl_108";
const eo = "_option_1w3bl_108";
const to = "_index_1w3bl_140";
const no = "_sphere_container_1w3bl_157";
const io = "_sphere_1w3bl_157";
const oo = "_red_1w3bl_185";
const ro = "_orange_1w3bl_188";
const so = "_pink_1w3bl_191";
const P = {
  App: zi,
  container: Wi,
  border_container: ji,
  header: Yi,
  text: Vi,
  big: qi,
  tag: Ki,
  dialogueText: Xi,
  textBox: Zi,
  indicator: Qi,
  options: Ji,
  option: eo,
  index: to,
  sphere_container: no,
  sphere: io,
  red: oo,
  orange: ro,
  pink: so
};
var kt = {
  exports: {}
};
var Ln;
function Cn() {
  if (!Ln) {
    Ln = 1;
    (function (_0x3068ea, _0x458b64) {
      (function (_0x17fe13, _0x5ba0e5) {
        _0x3068ea.exports = _0x5ba0e5();
      })(_0xc4a6f, function () {
        const {
          entries: _0x179beb,
          setPrototypeOf: _0x381784,
          isFrozen: _0x5cf97d,
          getPrototypeOf: _0x334b56,
          getOwnPropertyDescriptor: _0x3f4c12
        } = Object;
        let {
          freeze: _0x4f5b44,
          seal: _0x2a400f,
          create: _0xbd14b3
        } = Object;
        let {
          apply: _0x4e211a,
          construct: _0x190ea0
        } = typeof Reflect !== "undefined" && Reflect;
        _0x4f5b44 ||= function (_0x2761e7) {
          return _0x2761e7;
        };
        _0x2a400f ||= function (_0x161e73) {
          return _0x161e73;
        };
        _0x4e211a ||= function (_0x1b6072, _0x543ea9, _0x377f88) {
          return _0x1b6072.apply(_0x543ea9, _0x377f88);
        };
        _0x190ea0 ||= function (_0x3ffd77, _0x34239d) {
          return new _0x3ffd77(..._0x34239d);
        };
        const _0x368e95 = _0x1776e6(Array.prototype.forEach);
        const _0x3ad675 = _0x1776e6(Array.prototype.pop);
        const _0x112f1e = _0x1776e6(Array.prototype.push);
        const _0x96e1d9 = _0x1776e6(String.prototype.toLowerCase);
        const _0x3a68db = _0x1776e6(String.prototype.toString);
        const _0x45771a = _0x1776e6(String.prototype.match);
        const _0x2de927 = _0x1776e6(String.prototype.replace);
        const _0x56493a = _0x1776e6(String.prototype.indexOf);
        const _0x52e645 = _0x1776e6(String.prototype.trim);
        const _0x5c80d7 = _0x1776e6(RegExp.prototype.test);
        const _0x1956b2 = _0x4e11c5(TypeError);
        function _0x1776e6(_0x9104a1) {
          return function (_0x520cfb) {
            for (var _0x184484 = arguments.length, _0x1444f3 = new Array(_0x184484 > 1 ? _0x184484 - 1 : 0), _0x3d076b = 1; _0x3d076b < _0x184484; _0x3d076b++) {
              _0x1444f3[_0x3d076b - 1] = arguments[_0x3d076b];
            }
            return _0x4e211a(_0x9104a1, _0x520cfb, _0x1444f3);
          };
        }
        function _0x4e11c5(_0x372e3d) {
          return function () {
            for (var _0x396c24 = arguments.length, _0x1e6a48 = new Array(_0x396c24), _0x5317f4 = 0; _0x5317f4 < _0x396c24; _0x5317f4++) {
              _0x1e6a48[_0x5317f4] = arguments[_0x5317f4];
            }
            return _0x190ea0(_0x372e3d, _0x1e6a48);
          };
        }
        function _0x7f7388(_0x1d8271, _0x44234e, _0xce4ea3 = _0x96e1d9) {
          if (_0x381784) {
            _0x381784(_0x1d8271, null);
          }
          let _0x4b34bb = _0x44234e.length;
          while (_0x4b34bb--) {
            let _0x1fd4ba = _0x44234e[_0x4b34bb];
            if (typeof _0x1fd4ba == "string") {
              const _0x447652 = _0xce4ea3(_0x1fd4ba);
              if (_0x447652 !== _0x1fd4ba) {
                if (!_0x5cf97d(_0x44234e)) {
                  _0x44234e[_0x4b34bb] = _0x447652;
                }
                _0x1fd4ba = _0x447652;
              }
            }
            _0x1d8271[_0x1fd4ba] = true;
          }
          return _0x1d8271;
        }
        function _0x49d4fc(_0x5f347d) {
          const _0x4b534a = _0xbd14b3(null);
          for (const [_0x2fa6b1, _0x423350] of _0x179beb(_0x5f347d)) {
            if (_0x3f4c12(_0x5f347d, _0x2fa6b1) !== undefined) {
              _0x4b534a[_0x2fa6b1] = _0x423350;
            }
          }
          return _0x4b534a;
        }
        function _0x24cac6(_0x5a6cca, _0x3e7e85) {
          while (_0x5a6cca !== null) {
            const _0x9bfdf1 = _0x3f4c12(_0x5a6cca, _0x3e7e85);
            if (_0x9bfdf1) {
              if (_0x9bfdf1.get) {
                return _0x1776e6(_0x9bfdf1.get);
              }
              if (typeof _0x9bfdf1.value == "function") {
                return _0x1776e6(_0x9bfdf1.value);
              }
            }
            _0x5a6cca = _0x334b56(_0x5a6cca);
          }
          function _0x129b36(_0x140c19) {
            console.warn("fallback value for", _0x140c19);
            return null;
          }
          return _0x129b36;
        }
        const _0xc48b06 = _0x4f5b44(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
        const _0x320baa = _0x4f5b44(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
        const _0x42094e = _0x4f5b44(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
        const _0x510375 = _0x4f5b44(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
        const _0x5cad5b = _0x4f5b44(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
        const _0x217c77 = _0x4f5b44(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
        const _0x3b3a34 = _0x4f5b44(["#text"]);
        const _0x11334b = _0x4f5b44(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
        const _0x31dbe7 = _0x4f5b44(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
        const _0xcbc60f = _0x4f5b44(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
        const _0x4714cd = _0x4f5b44(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
        const _0x1b6837 = _0x2a400f(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
        const _0x10567c = _0x2a400f(/<%[\w\W]*|[\w\W]*%>/gm);
        const _0xf3825f = _0x2a400f(/\${[\w\W]*}/gm);
        const _0x5f0dd0 = _0x2a400f(/^data-[\-\w.\u00B7-\uFFFF]/);
        const _0x298c04 = _0x2a400f(/^aria-[\-\w]+$/);
        const _0x4fa5af = _0x2a400f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
        const _0x246e37 = _0x2a400f(/^(?:\w+script|data):/i);
        const _0xb1844b = _0x2a400f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
        const _0x34d13c = _0x2a400f(/^html$/i);
        var _0x5b8f54 = Object.freeze({
          "__proto__": null,
          MUSTACHE_EXPR: _0x1b6837,
          ERB_EXPR: _0x10567c,
          TMPLIT_EXPR: _0xf3825f,
          DATA_ATTR: _0x5f0dd0,
          ARIA_ATTR: _0x298c04,
          IS_ALLOWED_URI: _0x4fa5af,
          IS_SCRIPT_OR_DATA: _0x246e37,
          ATTR_WHITESPACE: _0xb1844b,
          DOCTYPE_NAME: _0x34d13c
        });
        const _0x55298d = function () {
          if (typeof window === "undefined") {
            return null;
          } else {
            return window;
          }
        };
        const _0x47ab74 = function (_0x78710b, _0x37ea2e) {
          if (typeof _0x78710b != "object" || typeof _0x78710b.createPolicy != "function") {
            return null;
          }
          let _0x1a8292 = null;
          const _0x691ab6 = "data-tt-policy-suffix";
          if (_0x37ea2e && _0x37ea2e.hasAttribute(_0x691ab6)) {
            _0x1a8292 = _0x37ea2e.getAttribute(_0x691ab6);
          }
          const _0x4b33da = "dompurify" + (_0x1a8292 ? "#" + _0x1a8292 : "");
          try {
            return _0x78710b.createPolicy(_0x4b33da, {
              createHTML(_0xb6c15e) {
                return _0xb6c15e;
              },
              createScriptURL(_0x189113) {
                return _0x189113;
              }
            });
          } catch {
            console.warn("TrustedTypes policy " + _0x4b33da + " could not be created.");
            return null;
          }
        };
        function _0x1e6414(_0x342815 = _0x55298d()) {
          const _0x454faf = _0x70f341 => _0x1e6414(_0x70f341);
          _0x454faf.version = "3.0.6";
          _0x454faf.removed = [];
          if (!_0x342815 || !_0x342815.document || _0x342815.document.nodeType !== 9) {
            _0x454faf.isSupported = false;
            return _0x454faf;
          }
          let {
            document: _0x569415
          } = _0x342815;
          const _0x243c9d = _0x569415;
          const _0x34c0fb = _0x243c9d.currentScript;
          const {
            DocumentFragment: _0x294050,
            HTMLTemplateElement: _0x499d94,
            Node: _0x70f766,
            Element: _0x5b184d,
            NodeFilter: _0x3ca6af,
            NamedNodeMap: _0x407b70 = _0x342815.NamedNodeMap || _0x342815.MozNamedAttrMap,
            HTMLFormElement: _0x26f893,
            DOMParser: _0x31730c,
            trustedTypes: _0x674b68
          } = _0x342815;
          const _0x10cd34 = _0x5b184d.prototype;
          const _0x2bddc4 = _0x24cac6(_0x10cd34, "cloneNode");
          const _0x2492e0 = _0x24cac6(_0x10cd34, "nextSibling");
          const _0x35512a = _0x24cac6(_0x10cd34, "childNodes");
          const _0x1610de = _0x24cac6(_0x10cd34, "parentNode");
          if (typeof _0x499d94 == "function") {
            const _0x2b8115 = _0x569415.createElement("template");
            if (_0x2b8115.content && _0x2b8115.content.ownerDocument) {
              _0x569415 = _0x2b8115.content.ownerDocument;
            }
          }
          let _0x1bce88;
          let _0x108191 = "";
          const {
            implementation: _0x2f7c38,
            createNodeIterator: _0x350c65,
            createDocumentFragment: _0xab9b1d,
            getElementsByTagName: _0x3aba1d
          } = _0x569415;
          const {
            importNode: _0x1d7e0b
          } = _0x243c9d;
          let _0x1c6cb5 = {};
          _0x454faf.isSupported = typeof _0x179beb == "function" && typeof _0x1610de == "function" && _0x2f7c38 && _0x2f7c38.createHTMLDocument !== undefined;
          const {
            MUSTACHE_EXPR: _0x2ff332,
            ERB_EXPR: _0x52e199,
            TMPLIT_EXPR: _0x51856a,
            DATA_ATTR: _0x37ff5a,
            ARIA_ATTR: _0xecf3f3,
            IS_SCRIPT_OR_DATA: _0x360bf6,
            ATTR_WHITESPACE: _0x584177
          } = _0x5b8f54;
          let {
            IS_ALLOWED_URI: _0x4d75f6
          } = _0x5b8f54;
          let _0x166ffc = null;
          const _0x5da0b6 = _0x7f7388({}, [..._0xc48b06, ..._0x320baa, ..._0x42094e, ..._0x5cad5b, ..._0x3b3a34]);
          let _0x47e8d4 = null;
          const _0x4d3a04 = _0x7f7388({}, [..._0x11334b, ..._0x31dbe7, ..._0xcbc60f, ..._0x4714cd]);
          let _0x4725e6 = Object.seal(_0xbd14b3(null, {
            tagNameCheck: {
              writable: true,
              configurable: false,
              enumerable: true,
              value: null
            },
            attributeNameCheck: {
              writable: true,
              configurable: false,
              enumerable: true,
              value: null
            },
            allowCustomizedBuiltInElements: {
              writable: true,
              configurable: false,
              enumerable: true,
              value: false
            }
          }));
          let _0x23cf4a = null;
          let _0x2da942 = null;
          let _0x2e2ff2 = true;
          let _0x101252 = true;
          let _0x468403 = false;
          let _0x5d99b9 = true;
          let _0x256eed = false;
          let _0x5e41a1 = false;
          let _0x367460 = false;
          let _0x20bece = false;
          let _0x360594 = false;
          let _0xa8e8ac = false;
          let _0x1148b5 = false;
          let _0x5c7396 = true;
          let _0x5d9d2e = false;
          const _0x4ca440 = "user-content-";
          let _0x57b092 = true;
          let _0x136c12 = false;
          let _0x5bf064 = {};
          let _0x546bb9 = null;
          const _0x44187f = _0x7f7388({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
          let _0x335c60 = null;
          const _0x40f650 = _0x7f7388({}, ["audio", "video", "img", "source", "image", "track"]);
          let _0x8165ea = null;
          const _0x11f20f = _0x7f7388({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
          const _0x21e6a1 = "http://www.w3.org/1998/Math/MathML";
          const _0x1e77a8 = "http://www.w3.org/2000/svg";
          const _0x2b7c50 = "http://www.w3.org/1999/xhtml";
          let _0x30f3af = _0x2b7c50;
          let _0x2d42c7 = false;
          let _0x23417c = null;
          const _0x194c57 = _0x7f7388({}, [_0x21e6a1, _0x1e77a8, _0x2b7c50], _0x3a68db);
          let _0x5e89bd = null;
          const _0x4750bb = ["application/xhtml+xml", "text/html"];
          const _0x3b5ba9 = "text/html";
          let _0x2afe29 = null;
          let _0x3da418 = null;
          const _0x3e206e = _0x569415.createElement("form");
          const _0x220c6d = function (_0xb80885) {
            return _0xb80885 instanceof RegExp || _0xb80885 instanceof Function;
          };
          const _0x15178b = function (_0x4ad407 = {}) {
            if (!_0x3da418 || _0x3da418 !== _0x4ad407) {
              if (!_0x4ad407 || typeof _0x4ad407 != "object") {
                _0x4ad407 = {};
              }
              _0x4ad407 = _0x49d4fc(_0x4ad407);
              _0x5e89bd = _0x4750bb.indexOf(_0x4ad407.PARSER_MEDIA_TYPE) === -1 ? _0x5e89bd = _0x3b5ba9 : _0x5e89bd = _0x4ad407.PARSER_MEDIA_TYPE;
              _0x2afe29 = _0x5e89bd === "application/xhtml+xml" ? _0x3a68db : _0x96e1d9;
              _0x166ffc = "ALLOWED_TAGS" in _0x4ad407 ? _0x7f7388({}, _0x4ad407.ALLOWED_TAGS, _0x2afe29) : _0x5da0b6;
              _0x47e8d4 = "ALLOWED_ATTR" in _0x4ad407 ? _0x7f7388({}, _0x4ad407.ALLOWED_ATTR, _0x2afe29) : _0x4d3a04;
              _0x23417c = "ALLOWED_NAMESPACES" in _0x4ad407 ? _0x7f7388({}, _0x4ad407.ALLOWED_NAMESPACES, _0x3a68db) : _0x194c57;
              _0x8165ea = "ADD_URI_SAFE_ATTR" in _0x4ad407 ? _0x7f7388(_0x49d4fc(_0x11f20f), _0x4ad407.ADD_URI_SAFE_ATTR, _0x2afe29) : _0x11f20f;
              _0x335c60 = "ADD_DATA_URI_TAGS" in _0x4ad407 ? _0x7f7388(_0x49d4fc(_0x40f650), _0x4ad407.ADD_DATA_URI_TAGS, _0x2afe29) : _0x40f650;
              _0x546bb9 = "FORBID_CONTENTS" in _0x4ad407 ? _0x7f7388({}, _0x4ad407.FORBID_CONTENTS, _0x2afe29) : _0x44187f;
              _0x23cf4a = "FORBID_TAGS" in _0x4ad407 ? _0x7f7388({}, _0x4ad407.FORBID_TAGS, _0x2afe29) : {};
              _0x2da942 = "FORBID_ATTR" in _0x4ad407 ? _0x7f7388({}, _0x4ad407.FORBID_ATTR, _0x2afe29) : {};
              _0x5bf064 = "USE_PROFILES" in _0x4ad407 ? _0x4ad407.USE_PROFILES : false;
              _0x2e2ff2 = _0x4ad407.ALLOW_ARIA_ATTR !== false;
              _0x101252 = _0x4ad407.ALLOW_DATA_ATTR !== false;
              _0x468403 = _0x4ad407.ALLOW_UNKNOWN_PROTOCOLS || false;
              _0x5d99b9 = _0x4ad407.ALLOW_SELF_CLOSE_IN_ATTR !== false;
              _0x256eed = _0x4ad407.SAFE_FOR_TEMPLATES || false;
              _0x5e41a1 = _0x4ad407.WHOLE_DOCUMENT || false;
              _0x360594 = _0x4ad407.RETURN_DOM || false;
              _0xa8e8ac = _0x4ad407.RETURN_DOM_FRAGMENT || false;
              _0x1148b5 = _0x4ad407.RETURN_TRUSTED_TYPE || false;
              _0x20bece = _0x4ad407.FORCE_BODY || false;
              _0x5c7396 = _0x4ad407.SANITIZE_DOM !== false;
              _0x5d9d2e = _0x4ad407.SANITIZE_NAMED_PROPS || false;
              _0x57b092 = _0x4ad407.KEEP_CONTENT !== false;
              _0x136c12 = _0x4ad407.IN_PLACE || false;
              _0x4d75f6 = _0x4ad407.ALLOWED_URI_REGEXP || _0x4fa5af;
              _0x30f3af = _0x4ad407.NAMESPACE || _0x2b7c50;
              _0x4725e6 = _0x4ad407.CUSTOM_ELEMENT_HANDLING || {};
              if (_0x4ad407.CUSTOM_ELEMENT_HANDLING && _0x220c6d(_0x4ad407.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
                _0x4725e6.tagNameCheck = _0x4ad407.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
              }
              if (_0x4ad407.CUSTOM_ELEMENT_HANDLING && _0x220c6d(_0x4ad407.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
                _0x4725e6.attributeNameCheck = _0x4ad407.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
              }
              if (_0x4ad407.CUSTOM_ELEMENT_HANDLING && typeof _0x4ad407.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean") {
                _0x4725e6.allowCustomizedBuiltInElements = _0x4ad407.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
              }
              if (_0x256eed) {
                _0x101252 = false;
              }
              if (_0xa8e8ac) {
                _0x360594 = true;
              }
              if (_0x5bf064) {
                _0x166ffc = _0x7f7388({}, [..._0x3b3a34]);
                _0x47e8d4 = [];
                if (_0x5bf064.html === true) {
                  _0x7f7388(_0x166ffc, _0xc48b06);
                  _0x7f7388(_0x47e8d4, _0x11334b);
                }
                if (_0x5bf064.svg === true) {
                  _0x7f7388(_0x166ffc, _0x320baa);
                  _0x7f7388(_0x47e8d4, _0x31dbe7);
                  _0x7f7388(_0x47e8d4, _0x4714cd);
                }
                if (_0x5bf064.svgFilters === true) {
                  _0x7f7388(_0x166ffc, _0x42094e);
                  _0x7f7388(_0x47e8d4, _0x31dbe7);
                  _0x7f7388(_0x47e8d4, _0x4714cd);
                }
                if (_0x5bf064.mathMl === true) {
                  _0x7f7388(_0x166ffc, _0x5cad5b);
                  _0x7f7388(_0x47e8d4, _0xcbc60f);
                  _0x7f7388(_0x47e8d4, _0x4714cd);
                }
              }
              if (_0x4ad407.ADD_TAGS) {
                if (_0x166ffc === _0x5da0b6) {
                  _0x166ffc = _0x49d4fc(_0x166ffc);
                }
                _0x7f7388(_0x166ffc, _0x4ad407.ADD_TAGS, _0x2afe29);
              }
              if (_0x4ad407.ADD_ATTR) {
                if (_0x47e8d4 === _0x4d3a04) {
                  _0x47e8d4 = _0x49d4fc(_0x47e8d4);
                }
                _0x7f7388(_0x47e8d4, _0x4ad407.ADD_ATTR, _0x2afe29);
              }
              if (_0x4ad407.ADD_URI_SAFE_ATTR) {
                _0x7f7388(_0x8165ea, _0x4ad407.ADD_URI_SAFE_ATTR, _0x2afe29);
              }
              if (_0x4ad407.FORBID_CONTENTS) {
                if (_0x546bb9 === _0x44187f) {
                  _0x546bb9 = _0x49d4fc(_0x546bb9);
                }
                _0x7f7388(_0x546bb9, _0x4ad407.FORBID_CONTENTS, _0x2afe29);
              }
              if (_0x57b092) {
                _0x166ffc["#text"] = true;
              }
              if (_0x5e41a1) {
                _0x7f7388(_0x166ffc, ["html", "head", "body"]);
              }
              if (_0x166ffc.table) {
                _0x7f7388(_0x166ffc, ["tbody"]);
                delete _0x23cf4a.tbody;
              }
              if (_0x4ad407.TRUSTED_TYPES_POLICY) {
                if (typeof _0x4ad407.TRUSTED_TYPES_POLICY.createHTML != "function") {
                  throw _0x1956b2("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
                }
                if (typeof _0x4ad407.TRUSTED_TYPES_POLICY.createScriptURL != "function") {
                  throw _0x1956b2("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
                }
                _0x1bce88 = _0x4ad407.TRUSTED_TYPES_POLICY;
                _0x108191 = _0x1bce88.createHTML("");
              } else {
                if (_0x1bce88 === undefined) {
                  _0x1bce88 = _0x47ab74(_0x674b68, _0x34c0fb);
                }
                if (_0x1bce88 !== null && typeof _0x108191 == "string") {
                  _0x108191 = _0x1bce88.createHTML("");
                }
              }
              if (_0x4f5b44) {
                _0x4f5b44(_0x4ad407);
              }
              _0x3da418 = _0x4ad407;
            }
          };
          const _0x319224 = _0x7f7388({}, ["mi", "mo", "mn", "ms", "mtext"]);
          const _0x591528 = _0x7f7388({}, ["foreignobject", "desc", "title", "annotation-xml"]);
          const _0x1735a2 = _0x7f7388({}, ["title", "style", "font", "a", "script"]);
          const _0x1f15bd = _0x7f7388({}, _0x320baa);
          _0x7f7388(_0x1f15bd, _0x42094e);
          _0x7f7388(_0x1f15bd, _0x510375);
          const _0x5dda49 = _0x7f7388({}, _0x5cad5b);
          _0x7f7388(_0x5dda49, _0x217c77);
          const _0x4d2236 = function (_0x32071c) {
            let _0x1739ef = _0x1610de(_0x32071c);
            if (!_0x1739ef || !_0x1739ef.tagName) {
              _0x1739ef = {
                namespaceURI: _0x30f3af,
                tagName: "template"
              };
            }
            const _0x45f6b5 = _0x96e1d9(_0x32071c.tagName);
            const _0x471083 = _0x96e1d9(_0x1739ef.tagName);
            if (_0x23417c[_0x32071c.namespaceURI]) {
              if (_0x32071c.namespaceURI === _0x1e77a8) {
                if (_0x1739ef.namespaceURI === _0x2b7c50) {
                  return _0x45f6b5 === "svg";
                } else if (_0x1739ef.namespaceURI === _0x21e6a1) {
                  return _0x45f6b5 === "svg" && (_0x471083 === "annotation-xml" || _0x319224[_0x471083]);
                } else {
                  return !!_0x1f15bd[_0x45f6b5];
                }
              } else if (_0x32071c.namespaceURI === _0x21e6a1) {
                if (_0x1739ef.namespaceURI === _0x2b7c50) {
                  return _0x45f6b5 === "math";
                } else if (_0x1739ef.namespaceURI === _0x1e77a8) {
                  return _0x45f6b5 === "math" && _0x591528[_0x471083];
                } else {
                  return !!_0x5dda49[_0x45f6b5];
                }
              } else if (_0x32071c.namespaceURI === _0x2b7c50) {
                if (_0x1739ef.namespaceURI === _0x1e77a8 && !_0x591528[_0x471083] || _0x1739ef.namespaceURI === _0x21e6a1 && !_0x319224[_0x471083]) {
                  return false;
                } else {
                  return !_0x5dda49[_0x45f6b5] && (_0x1735a2[_0x45f6b5] || !_0x1f15bd[_0x45f6b5]);
                }
              } else {
                return _0x5e89bd === "application/xhtml+xml" && !!_0x23417c[_0x32071c.namespaceURI];
              }
            } else {
              return false;
            }
          };
          const _0x46018c = function (_0x26c702) {
            _0x112f1e(_0x454faf.removed, {
              element: _0x26c702
            });
            try {
              _0x26c702.parentNode.removeChild(_0x26c702);
            } catch {
              _0x26c702.remove();
            }
          };
          const _0x392417 = function (_0x1a3e5a, _0x114455) {
            try {
              _0x112f1e(_0x454faf.removed, {
                attribute: _0x114455.getAttributeNode(_0x1a3e5a),
                from: _0x114455
              });
            } catch {
              _0x112f1e(_0x454faf.removed, {
                attribute: null,
                from: _0x114455
              });
            }
            _0x114455.removeAttribute(_0x1a3e5a);
            if (_0x1a3e5a === "is" && !_0x47e8d4[_0x1a3e5a]) {
              if (_0x360594 || _0xa8e8ac) {
                try {
                  _0x46018c(_0x114455);
                } catch {}
              } else {
                try {
                  _0x114455.setAttribute(_0x1a3e5a, "");
                } catch {}
              }
            }
          };
          const _0x560ac8 = function (_0x53fcb0) {
            let _0x3d0377 = null;
            let _0xcd90f5 = null;
            if (_0x20bece) {
              _0x53fcb0 = "<remove></remove>" + _0x53fcb0;
            } else {
              const _0x47ebc4 = _0x45771a(_0x53fcb0, /^[\r\n\t ]+/);
              _0xcd90f5 = _0x47ebc4 && _0x47ebc4[0];
            }
            if (_0x5e89bd === "application/xhtml+xml" && _0x30f3af === _0x2b7c50) {
              _0x53fcb0 = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + _0x53fcb0 + "</body></html>";
            }
            const _0x2a5269 = _0x1bce88 ? _0x1bce88.createHTML(_0x53fcb0) : _0x53fcb0;
            if (_0x30f3af === _0x2b7c50) {
              try {
                _0x3d0377 = new _0x31730c().parseFromString(_0x2a5269, _0x5e89bd);
              } catch {}
            }
            if (!_0x3d0377 || !_0x3d0377.documentElement) {
              _0x3d0377 = _0x2f7c38.createDocument(_0x30f3af, "template", null);
              try {
                _0x3d0377.documentElement.innerHTML = _0x2d42c7 ? _0x108191 : _0x2a5269;
              } catch {}
            }
            const _0x44df11 = _0x3d0377.body || _0x3d0377.documentElement;
            if (_0x53fcb0 && _0xcd90f5) {
              _0x44df11.insertBefore(_0x569415.createTextNode(_0xcd90f5), _0x44df11.childNodes[0] || null);
            }
            if (_0x30f3af === _0x2b7c50) {
              return _0x3aba1d.call(_0x3d0377, _0x5e41a1 ? "html" : "body")[0];
            } else if (_0x5e41a1) {
              return _0x3d0377.documentElement;
            } else {
              return _0x44df11;
            }
          };
          const _0x174a1a = function (_0x43db04) {
            return _0x350c65.call(_0x43db04.ownerDocument || _0x43db04, _0x43db04, _0x3ca6af.SHOW_ELEMENT | _0x3ca6af.SHOW_COMMENT | _0x3ca6af.SHOW_TEXT, null);
          };
          const _0x1c0564 = function (_0x18fcc4) {
            return _0x18fcc4 instanceof _0x26f893 && (typeof _0x18fcc4.nodeName != "string" || typeof _0x18fcc4.textContent != "string" || typeof _0x18fcc4.removeChild != "function" || !(_0x18fcc4.attributes instanceof _0x407b70) || typeof _0x18fcc4.removeAttribute != "function" || typeof _0x18fcc4.setAttribute != "function" || typeof _0x18fcc4.namespaceURI != "string" || typeof _0x18fcc4.insertBefore != "function" || typeof _0x18fcc4.hasChildNodes != "function");
          };
          const _0x2c038f = function (_0x2a78a7) {
            return typeof _0x70f766 == "function" && _0x2a78a7 instanceof _0x70f766;
          };
          const _0x5226bd = function (_0x37b724, _0x2cca85, _0x1e91b8) {
            if (_0x1c6cb5[_0x37b724]) {
              _0x368e95(_0x1c6cb5[_0x37b724], _0x4cbf38 => {
                _0x4cbf38.call(_0x454faf, _0x2cca85, _0x1e91b8, _0x3da418);
              });
            }
          };
          const _0x23640a = function (_0xe8472b) {
            let _0x57e1ff = null;
            _0x5226bd("beforeSanitizeElements", _0xe8472b, null);
            if (_0x1c0564(_0xe8472b)) {
              _0x46018c(_0xe8472b);
              return true;
            }
            const _0x3d26ba = _0x2afe29(_0xe8472b.nodeName);
            _0x5226bd("uponSanitizeElement", _0xe8472b, {
              tagName: _0x3d26ba,
              allowedTags: _0x166ffc
            });
            if (_0xe8472b.hasChildNodes() && !_0x2c038f(_0xe8472b.firstElementChild) && _0x5c80d7(/<[/\w]/g, _0xe8472b.innerHTML) && _0x5c80d7(/<[/\w]/g, _0xe8472b.textContent)) {
              _0x46018c(_0xe8472b);
              return true;
            }
            if (!_0x166ffc[_0x3d26ba] || _0x23cf4a[_0x3d26ba]) {
              if (!_0x23cf4a[_0x3d26ba] && _0xd6a233(_0x3d26ba) && (_0x4725e6.tagNameCheck instanceof RegExp && _0x5c80d7(_0x4725e6.tagNameCheck, _0x3d26ba) || _0x4725e6.tagNameCheck instanceof Function && _0x4725e6.tagNameCheck(_0x3d26ba))) {
                return false;
              }
              if (_0x57b092 && !_0x546bb9[_0x3d26ba]) {
                const _0x1dcb8a = _0x1610de(_0xe8472b) || _0xe8472b.parentNode;
                const _0x29a080 = _0x35512a(_0xe8472b) || _0xe8472b.childNodes;
                if (_0x29a080 && _0x1dcb8a) {
                  const _0xf44887 = _0x29a080.length;
                  for (let _0x49adde = _0xf44887 - 1; _0x49adde >= 0; --_0x49adde) {
                    _0x1dcb8a.insertBefore(_0x2bddc4(_0x29a080[_0x49adde], true), _0x2492e0(_0xe8472b));
                  }
                }
              }
              _0x46018c(_0xe8472b);
              return true;
            }
            if (_0xe8472b instanceof _0x5b184d && !_0x4d2236(_0xe8472b) || (_0x3d26ba === "noscript" || _0x3d26ba === "noembed" || _0x3d26ba === "noframes") && _0x5c80d7(/<\/no(script|embed|frames)/i, _0xe8472b.innerHTML)) {
              _0x46018c(_0xe8472b);
              return true;
            } else {
              if (_0x256eed && _0xe8472b.nodeType === 3) {
                _0x57e1ff = _0xe8472b.textContent;
                _0x368e95([_0x2ff332, _0x52e199, _0x51856a], _0x3d016f => {
                  _0x57e1ff = _0x2de927(_0x57e1ff, _0x3d016f, " ");
                });
                if (_0xe8472b.textContent !== _0x57e1ff) {
                  _0x112f1e(_0x454faf.removed, {
                    element: _0xe8472b.cloneNode()
                  });
                  _0xe8472b.textContent = _0x57e1ff;
                }
              }
              _0x5226bd("afterSanitizeElements", _0xe8472b, null);
              return false;
            }
          };
          const _0x18ea95 = function (_0xad4c57, _0x4d392f, _0xa78409) {
            if (_0x5c7396 && (_0x4d392f === "id" || _0x4d392f === "name") && (_0xa78409 in _0x569415 || _0xa78409 in _0x3e206e)) {
              return false;
            }
            if (!_0x101252 || !!_0x2da942[_0x4d392f] || !_0x5c80d7(_0x37ff5a, _0x4d392f)) {
              if (!_0x2e2ff2 || !_0x5c80d7(_0xecf3f3, _0x4d392f)) {
                if (!_0x47e8d4[_0x4d392f] || _0x2da942[_0x4d392f]) {
                  if ((!_0xd6a233(_0xad4c57) || (!(_0x4725e6.tagNameCheck instanceof RegExp) || !_0x5c80d7(_0x4725e6.tagNameCheck, _0xad4c57)) && (!(_0x4725e6.tagNameCheck instanceof Function) || !_0x4725e6.tagNameCheck(_0xad4c57)) || (!(_0x4725e6.attributeNameCheck instanceof RegExp) || !_0x5c80d7(_0x4725e6.attributeNameCheck, _0x4d392f)) && (!(_0x4725e6.attributeNameCheck instanceof Function) || !_0x4725e6.attributeNameCheck(_0x4d392f))) && (_0x4d392f !== "is" || !_0x4725e6.allowCustomizedBuiltInElements || (!(_0x4725e6.tagNameCheck instanceof RegExp) || !_0x5c80d7(_0x4725e6.tagNameCheck, _0xa78409)) && (!(_0x4725e6.tagNameCheck instanceof Function) || !_0x4725e6.tagNameCheck(_0xa78409)))) {
                    return false;
                  }
                } else if (!_0x8165ea[_0x4d392f]) {
                  if (!_0x5c80d7(_0x4d75f6, _0x2de927(_0xa78409, _0x584177, ""))) {
                    if (_0x4d392f !== "src" && _0x4d392f !== "xlink:href" && _0x4d392f !== "href" || _0xad4c57 === "script" || _0x56493a(_0xa78409, "data:") !== 0 || !_0x335c60[_0xad4c57]) {
                      if (!_0x468403 || !!_0x5c80d7(_0x360bf6, _0x2de927(_0xa78409, _0x584177, ""))) {
                        if (_0xa78409) {
                          return false;
                        }
                      }
                    }
                  }
                }
              }
            }
            return true;
          };
          const _0xd6a233 = function (_0x4f50f4) {
            return _0x4f50f4.indexOf("-") > 0;
          };
          const _0x41ba55 = function (_0x4dfb3c) {
            _0x5226bd("beforeSanitizeAttributes", _0x4dfb3c, null);
            const {
              attributes: _0x1c8455
            } = _0x4dfb3c;
            if (!_0x1c8455) {
              return;
            }
            const _0x3d5c6f = {
              attrName: "",
              attrValue: "",
              keepAttr: true,
              allowedAttributes: _0x47e8d4
            };
            let _0x2b98a1 = _0x1c8455.length;
            while (_0x2b98a1--) {
              const _0x5270d8 = _0x1c8455[_0x2b98a1];
              const {
                name: _0x5d16e2,
                namespaceURI: _0x69596a,
                value: _0x529115
              } = _0x5270d8;
              const _0x12c6d6 = _0x2afe29(_0x5d16e2);
              let _0x445778 = _0x5d16e2 === "value" ? _0x529115 : _0x52e645(_0x529115);
              _0x3d5c6f.attrName = _0x12c6d6;
              _0x3d5c6f.attrValue = _0x445778;
              _0x3d5c6f.keepAttr = true;
              _0x3d5c6f.forceKeepAttr = undefined;
              _0x5226bd("uponSanitizeAttribute", _0x4dfb3c, _0x3d5c6f);
              _0x445778 = _0x3d5c6f.attrValue;
              if (_0x3d5c6f.forceKeepAttr || (_0x392417(_0x5d16e2, _0x4dfb3c), !_0x3d5c6f.keepAttr)) {
                continue;
              }
              if (!_0x5d99b9 && _0x5c80d7(/\/>/i, _0x445778)) {
                _0x392417(_0x5d16e2, _0x4dfb3c);
                continue;
              }
              if (_0x256eed) {
                _0x368e95([_0x2ff332, _0x52e199, _0x51856a], _0x387ef0 => {
                  _0x445778 = _0x2de927(_0x445778, _0x387ef0, " ");
                });
              }
              const _0x1d44c4 = _0x2afe29(_0x4dfb3c.nodeName);
              if (_0x18ea95(_0x1d44c4, _0x12c6d6, _0x445778)) {
                if (_0x5d9d2e && (_0x12c6d6 === "id" || _0x12c6d6 === "name")) {
                  _0x392417(_0x5d16e2, _0x4dfb3c);
                  _0x445778 = _0x4ca440 + _0x445778;
                }
                if (_0x1bce88 && typeof _0x674b68 == "object" && typeof _0x674b68.getAttributeType == "function" && !_0x69596a) {
                  switch (_0x674b68.getAttributeType(_0x1d44c4, _0x12c6d6)) {
                    case "TrustedHTML":
                      {
                        _0x445778 = _0x1bce88.createHTML(_0x445778);
                        break;
                      }
                    case "TrustedScriptURL":
                      {
                        _0x445778 = _0x1bce88.createScriptURL(_0x445778);
                        break;
                      }
                  }
                }
                try {
                  if (_0x69596a) {
                    _0x4dfb3c.setAttributeNS(_0x69596a, _0x5d16e2, _0x445778);
                  } else {
                    _0x4dfb3c.setAttribute(_0x5d16e2, _0x445778);
                  }
                  _0x3ad675(_0x454faf.removed);
                } catch {}
              }
            }
            _0x5226bd("afterSanitizeAttributes", _0x4dfb3c, null);
          };
          const _0x46d29b = function _0x6dae1(_0x50af6a) {
            let _0x2991d2 = null;
            const _0x4589e6 = _0x174a1a(_0x50af6a);
            for (_0x5226bd("beforeSanitizeShadowDOM", _0x50af6a, null); _0x2991d2 = _0x4589e6.nextNode();) {
              _0x5226bd("uponSanitizeShadowNode", _0x2991d2, null);
              if (!_0x23640a(_0x2991d2)) {
                if (_0x2991d2.content instanceof _0x294050) {
                  _0x6dae1(_0x2991d2.content);
                }
                _0x41ba55(_0x2991d2);
              }
            }
            _0x5226bd("afterSanitizeShadowDOM", _0x50af6a, null);
          };
          _0x454faf.sanitize = function (_0x3a8ea0, _0x825292 = {}) {
            let _0x24cffb = null;
            let _0x250224 = null;
            let _0x1f055b = null;
            let _0x53fe5e = null;
            _0x2d42c7 = !_0x3a8ea0;
            if (_0x2d42c7) {
              _0x3a8ea0 = "<!-->";
            }
            if (typeof _0x3a8ea0 != "string" && !_0x2c038f(_0x3a8ea0)) {
              if (typeof _0x3a8ea0.toString == "function") {
                _0x3a8ea0 = _0x3a8ea0.toString();
                if (typeof _0x3a8ea0 != "string") {
                  throw _0x1956b2("dirty is not a string, aborting");
                }
              } else {
                throw _0x1956b2("toString is not a function");
              }
            }
            if (!_0x454faf.isSupported) {
              return _0x3a8ea0;
            }
            if (!_0x367460) {
              _0x15178b(_0x825292);
            }
            _0x454faf.removed = [];
            if (typeof _0x3a8ea0 == "string") {
              _0x136c12 = false;
            }
            if (_0x136c12) {
              if (_0x3a8ea0.nodeName) {
                const _0x3412f3 = _0x2afe29(_0x3a8ea0.nodeName);
                if (!_0x166ffc[_0x3412f3] || _0x23cf4a[_0x3412f3]) {
                  throw _0x1956b2("root node is forbidden and cannot be sanitized in-place");
                }
              }
            } else if (_0x3a8ea0 instanceof _0x70f766) {
              _0x24cffb = _0x560ac8("<!---->");
              _0x250224 = _0x24cffb.ownerDocument.importNode(_0x3a8ea0, true);
              if (_0x250224.nodeType === 1 && _0x250224.nodeName === "BODY" || _0x250224.nodeName === "HTML") {
                _0x24cffb = _0x250224;
              } else {
                _0x24cffb.appendChild(_0x250224);
              }
            } else {
              if (!_0x360594 && !_0x256eed && !_0x5e41a1 && _0x3a8ea0.indexOf("<") === -1) {
                if (_0x1bce88 && _0x1148b5) {
                  return _0x1bce88.createHTML(_0x3a8ea0);
                } else {
                  return _0x3a8ea0;
                }
              }
              _0x24cffb = _0x560ac8(_0x3a8ea0);
              if (!_0x24cffb) {
                if (_0x360594) {
                  return null;
                } else if (_0x1148b5) {
                  return _0x108191;
                } else {
                  return "";
                }
              }
            }
            if (_0x24cffb && _0x20bece) {
              _0x46018c(_0x24cffb.firstChild);
            }
            const _0xbe3e03 = _0x174a1a(_0x136c12 ? _0x3a8ea0 : _0x24cffb);
            while (_0x1f055b = _0xbe3e03.nextNode()) {
              if (!_0x23640a(_0x1f055b)) {
                if (_0x1f055b.content instanceof _0x294050) {
                  _0x46d29b(_0x1f055b.content);
                }
                _0x41ba55(_0x1f055b);
              }
            }
            if (_0x136c12) {
              return _0x3a8ea0;
            }
            if (_0x360594) {
              if (_0xa8e8ac) {
                for (_0x53fe5e = _0xab9b1d.call(_0x24cffb.ownerDocument); _0x24cffb.firstChild;) {
                  _0x53fe5e.appendChild(_0x24cffb.firstChild);
                }
              } else {
                _0x53fe5e = _0x24cffb;
              }
              if (_0x47e8d4.shadowroot || _0x47e8d4.shadowrootmode) {
                _0x53fe5e = _0x1d7e0b.call(_0x243c9d, _0x53fe5e, true);
              }
              return _0x53fe5e;
            }
            let _0x5e39cb = _0x5e41a1 ? _0x24cffb.outerHTML : _0x24cffb.innerHTML;
            if (_0x5e41a1 && _0x166ffc["!doctype"] && _0x24cffb.ownerDocument && _0x24cffb.ownerDocument.doctype && _0x24cffb.ownerDocument.doctype.name && _0x5c80d7(_0x34d13c, _0x24cffb.ownerDocument.doctype.name)) {
              _0x5e39cb = "<!DOCTYPE " + _0x24cffb.ownerDocument.doctype.name + ">\n" + _0x5e39cb;
            }
            if (_0x256eed) {
              _0x368e95([_0x2ff332, _0x52e199, _0x51856a], _0xc31a9e => {
                _0x5e39cb = _0x2de927(_0x5e39cb, _0xc31a9e, " ");
              });
            }
            if (_0x1bce88 && _0x1148b5) {
              return _0x1bce88.createHTML(_0x5e39cb);
            } else {
              return _0x5e39cb;
            }
          };
          _0x454faf.setConfig = function (_0x128373 = {}) {
            _0x15178b(_0x128373);
            _0x367460 = true;
          };
          _0x454faf.clearConfig = function () {
            _0x3da418 = null;
            _0x367460 = false;
          };
          _0x454faf.isValidAttribute = function (_0xd54f48, _0x4aadeb, _0xec5dbe) {
            if (!_0x3da418) {
              _0x15178b({});
            }
            const _0x5edd51 = _0x2afe29(_0xd54f48);
            const _0x328109 = _0x2afe29(_0x4aadeb);
            return _0x18ea95(_0x5edd51, _0x328109, _0xec5dbe);
          };
          _0x454faf.addHook = function (_0x47fce2, _0xecac5d) {
            if (typeof _0xecac5d == "function") {
              _0x1c6cb5[_0x47fce2] = _0x1c6cb5[_0x47fce2] || [];
              _0x112f1e(_0x1c6cb5[_0x47fce2], _0xecac5d);
            }
          };
          _0x454faf.removeHook = function (_0x2c3c9e) {
            if (_0x1c6cb5[_0x2c3c9e]) {
              return _0x3ad675(_0x1c6cb5[_0x2c3c9e]);
            }
          };
          _0x454faf.removeHooks = function (_0x1c1af9) {
            _0x1c6cb5[_0x1c1af9] &&= [];
          };
          _0x454faf.removeAllHooks = function () {
            _0x1c6cb5 = {};
          };
          return _0x454faf;
        }
        var _0x1b9152 = _0x1e6414();
        return _0x1b9152;
      });
    })(kt);
  }
  return kt.exports;
}
var lo = window.DOMPurify ||= Cn().default || Cn();
const ao = _0x155a92(lo);
var co = () => {};
var On = (_0x33d8d1, _0x5c9762) => _0x5c9762();
function fo(_0x46249c, _0x534ca5) {
  const _0x4dc503 = te(_0x46249c);
  const _0x2bea66 = _0x4dc503 ? [_0x4dc503] : [];
  const {
    onEnter: _0x54e194 = On,
    onExit: _0x130c6a = On
  } = _0x534ca5;
  const [_0x44dcc6, _0x157162] = ce(_0x534ca5.appear ? [] : _0x2bea66);
  const [_0x3c3c99] = Li();
  let _0x24477c;
  let _0x3099f1 = false;
  function _0x4c4e05(_0x3e2724, _0x2ff464) {
    if (!_0x3e2724) {
      return _0x2ff464 && _0x2ff464();
    }
    _0x3099f1 = true;
    _0x130c6a(_0x3e2724, () => {
      Ft(() => {
        _0x3099f1 = false;
        _0x157162(_0x11ef34 => _0x11ef34.filter(_0x3e801a => _0x3e801a !== _0x3e2724));
        if (_0x2ff464) {
          _0x2ff464();
        }
      });
    });
  }
  function _0x16a02e(_0x394251) {
    const _0xd303b3 = _0x24477c;
    if (!_0xd303b3) {
      return _0x394251 && _0x394251();
    }
    _0x24477c = undefined;
    _0x157162(_0x41bc32 => [_0xd303b3, ..._0x41bc32]);
    _0x54e194(_0xd303b3, _0x394251 ?? co);
  }
  const _0x3a36d1 = _0x534ca5.mode === "out-in" ? _0x400fef => _0x3099f1 || _0x4c4e05(_0x400fef, _0x16a02e) : _0x534ca5.mode === "in-out" ? _0x5949b2 => _0x16a02e(() => _0x4c4e05(_0x5949b2)) : _0x35ea57 => {
    _0x4c4e05(_0x35ea57);
    _0x16a02e();
  };
  bi(_0x3a167c => {
    const _0x3eece2 = _0x46249c();
    if (te(_0x3c3c99)) {
      _0x3c3c99();
      return _0x3a167c;
    } else {
      if (_0x3eece2 !== _0x3a167c) {
        _0x24477c = _0x3eece2;
        Ft(() => te(() => _0x3a36d1(_0x3a167c)));
      }
      return _0x3eece2;
    }
  }, _0x534ca5.appear ? undefined : _0x4dc503);
  return _0x44dcc6;
}
var Rn = _0x2eaffb => _0x2eaffb instanceof Element;
function Gt(_0x238c3f, _0x1031fb) {
  if (_0x1031fb(_0x238c3f)) {
    return _0x238c3f;
  }
  if (typeof _0x238c3f == "function" && !_0x238c3f.length) {
    return Gt(_0x238c3f(), _0x1031fb);
  }
  if (Array.isArray(_0x238c3f)) {
    for (const _0x1d5a32 of _0x238c3f) {
      const _0x3637c9 = Gt(_0x1d5a32, _0x1031fb);
      if (_0x3637c9) {
        return _0x3637c9;
      }
    }
  }
  return null;
}
function uo(_0x8fa0d7, _0x2f8ebe = Rn, _0x593aad = Rn) {
  const _0x5639cc = he(_0x8fa0d7);
  return he(() => Gt(_0x5639cc(), _0x2f8ebe));
}
function mo(_0x286fac) {
  return he(() => {
    const _0x2074c5 = _0x286fac.name || "s";
    return {
      enterActive: (_0x286fac.enterActiveClass || _0x2074c5 + "-enter-active").split(" "),
      enter: (_0x286fac.enterClass || _0x2074c5 + "-enter").split(" "),
      enterTo: (_0x286fac.enterToClass || _0x2074c5 + "-enter-to").split(" "),
      exitActive: (_0x286fac.exitActiveClass || _0x2074c5 + "-exit-active").split(" "),
      exit: (_0x286fac.exitClass || _0x2074c5 + "-exit").split(" "),
      exitTo: (_0x286fac.exitToClass || _0x2074c5 + "-exit-to").split(" "),
      move: (_0x286fac.moveClass || _0x2074c5 + "-move").split(" ")
    };
  });
}
function Bn(_0x5c3a26) {
  requestAnimationFrame(() => requestAnimationFrame(_0x5c3a26));
}
function po(_0x356682, _0x48a6e7, _0x637ac4, _0x91cd0e) {
  const {
    onBeforeEnter: _0x40eb64,
    onEnter: _0x474666,
    onAfterEnter: _0x19dd45
  } = _0x48a6e7;
  _0x40eb64?.(_0x637ac4);
  _0x637ac4.classList.add(..._0x356682.enter);
  _0x637ac4.classList.add(..._0x356682.enterActive);
  queueMicrotask(() => {
    if (!_0x637ac4.parentNode) {
      return _0x91cd0e?.();
    }
    _0x474666?.(_0x637ac4, () => _0x5e8747());
  });
  Bn(() => {
    _0x637ac4.classList.remove(..._0x356682.enter);
    _0x637ac4.classList.add(..._0x356682.enterTo);
    if (!_0x474666 || _0x474666.length < 2) {
      _0x637ac4.addEventListener("transitionend", _0x5e8747);
      _0x637ac4.addEventListener("animationend", _0x5e8747);
    }
  });
  function _0x5e8747(_0x2dd58e) {
    if (!_0x2dd58e || _0x2dd58e.target === _0x637ac4) {
      _0x91cd0e?.();
      _0x637ac4.removeEventListener("transitionend", _0x5e8747);
      _0x637ac4.removeEventListener("animationend", _0x5e8747);
      _0x637ac4.classList.remove(..._0x356682.enterActive);
      _0x637ac4.classList.remove(..._0x356682.enterTo);
      _0x19dd45?.(_0x637ac4);
    }
  }
}
function ho(_0x558f6c, _0x5aa900, _0x58ac0d, _0x3ebc72) {
  const {
    onBeforeExit: _0x2bd763,
    onExit: _0x2ca453,
    onAfterExit: _0x374df4
  } = _0x5aa900;
  if (!_0x58ac0d.parentNode) {
    return _0x3ebc72?.();
  }
  _0x2bd763?.(_0x58ac0d);
  _0x58ac0d.classList.add(..._0x558f6c.exit);
  _0x58ac0d.classList.add(..._0x558f6c.exitActive);
  _0x2ca453?.(_0x58ac0d, () => _0x35c5c4());
  Bn(() => {
    _0x58ac0d.classList.remove(..._0x558f6c.exit);
    _0x58ac0d.classList.add(..._0x558f6c.exitTo);
    if (!_0x2ca453 || _0x2ca453.length < 2) {
      _0x58ac0d.addEventListener("transitionend", _0x35c5c4);
      _0x58ac0d.addEventListener("animationend", _0x35c5c4);
    }
  });
  function _0x35c5c4(_0x3c7285) {
    if (!_0x3c7285 || _0x3c7285.target === _0x58ac0d) {
      _0x3ebc72?.();
      _0x58ac0d.removeEventListener("transitionend", _0x35c5c4);
      _0x58ac0d.removeEventListener("animationend", _0x35c5c4);
      _0x58ac0d.classList.remove(..._0x558f6c.exitActive);
      _0x58ac0d.classList.remove(..._0x558f6c.exitTo);
      _0x374df4?.(_0x58ac0d);
    }
  }
}
var go = {
  inout: "in-out",
  outin: "out-in"
};
var _o = _0x3972a2 => {
  const _0x46c223 = mo(_0x3972a2);
  return fo(uo(() => _0x3972a2.children), {
    mode: go[_0x3972a2.mode],
    appear: _0x3972a2.appear,
    onEnter(_0x2111c8, _0x2fab6e) {
      po(_0x46c223(), _0x3972a2, _0x2111c8, _0x2fab6e);
    },
    onExit(_0x100f62, _0x4c7d8b) {
      ho(_0x46c223(), _0x3972a2, _0x100f62, _0x4c7d8b);
    }
  });
};
const zt = Symbol("store-raw");
const ze = Symbol("store-node");
function Gn(_0xc85c6f) {
  let _0xc5512f = _0xc85c6f[Se];
  if (!_0xc5512f && (Object.defineProperty(_0xc85c6f, Se, {
    value: _0xc5512f = new Proxy(_0xc85c6f, Eo)
  }), !Array.isArray(_0xc85c6f))) {
    const _0x47da21 = Object.keys(_0xc85c6f);
    const _0x54c3e3 = Object.getOwnPropertyDescriptors(_0xc85c6f);
    for (let _0x1018b8 = 0, _0xaf5fce = _0x47da21.length; _0x1018b8 < _0xaf5fce; _0x1018b8++) {
      const _0x4e6c8b = _0x47da21[_0x1018b8];
      if (_0x54c3e3[_0x4e6c8b].get) {
        Object.defineProperty(_0xc85c6f, _0x4e6c8b, {
          enumerable: _0x54c3e3[_0x4e6c8b].enumerable,
          get: _0x54c3e3[_0x4e6c8b].get.bind(_0xc5512f)
        });
      }
    }
  }
  return _0xc5512f;
}
function ft(_0x110624) {
  let _0x5cd1c2;
  return _0x110624 != null && typeof _0x110624 == "object" && (_0x110624[Se] || !(_0x5cd1c2 = Object.getPrototypeOf(_0x110624)) || _0x5cd1c2 === Object.prototype || Array.isArray(_0x110624));
}
function We(_0x49033c, _0xf73a51 = new Set()) {
  let _0x55e23f;
  let _0x646a7;
  let _0x37abc9;
  let _0x5bb719;
  if (_0x55e23f = _0x49033c != null && _0x49033c[zt]) {
    return _0x55e23f;
  }
  if (!ft(_0x49033c) || _0xf73a51.has(_0x49033c)) {
    return _0x49033c;
  }
  if (Array.isArray(_0x49033c)) {
    if (Object.isFrozen(_0x49033c)) {
      _0x49033c = _0x49033c.slice(0);
    } else {
      _0xf73a51.add(_0x49033c);
    }
    for (let _0x2d1996 = 0, _0x599675 = _0x49033c.length; _0x2d1996 < _0x599675; _0x2d1996++) {
      _0x37abc9 = _0x49033c[_0x2d1996];
      if ((_0x646a7 = We(_0x37abc9, _0xf73a51)) !== _0x37abc9) {
        _0x49033c[_0x2d1996] = _0x646a7;
      }
    }
  } else {
    if (Object.isFrozen(_0x49033c)) {
      _0x49033c = Object.assign({}, _0x49033c);
    } else {
      _0xf73a51.add(_0x49033c);
    }
    const _0x2435f2 = Object.keys(_0x49033c);
    const _0x1558d7 = Object.getOwnPropertyDescriptors(_0x49033c);
    for (let _0x9510dd = 0, _0x4cc668 = _0x2435f2.length; _0x9510dd < _0x4cc668; _0x9510dd++) {
      _0x5bb719 = _0x2435f2[_0x9510dd];
      if (!_0x1558d7[_0x5bb719].get) {
        _0x37abc9 = _0x49033c[_0x5bb719];
        if ((_0x646a7 = We(_0x37abc9, _0xf73a51)) !== _0x37abc9) {
          _0x49033c[_0x5bb719] = _0x646a7;
        }
      }
    }
  }
  return _0x49033c;
}
function jt(_0x425bd8) {
  let _0x5458f4 = _0x425bd8[ze];
  if (!_0x5458f4) {
    Object.defineProperty(_0x425bd8, ze, {
      value: _0x5458f4 = Object.create(null)
    });
  }
  return _0x5458f4;
}
function Wt(_0x271969, _0x1d7978, _0x59f7f3) {
  return _0x271969[_0x1d7978] ||= Wn(_0x59f7f3);
}
function Ao(_0xa650cc, _0x3603f5) {
  const _0x40783f = Reflect.getOwnPropertyDescriptor(_0xa650cc, _0x3603f5);
  if (!!_0x40783f && !_0x40783f.get && !!_0x40783f.configurable && _0x3603f5 !== Se && _0x3603f5 !== ze) {
    delete _0x40783f.value;
    delete _0x40783f.writable;
    _0x40783f.get = () => _0xa650cc[Se][_0x3603f5];
  }
  return _0x40783f;
}
function zn(_0x5443b9) {
  if (In()) {
    const _0x5aa4c6 = jt(_0x5443b9);
    (_0x5aa4c6._ ||= Wn())();
  }
}
function To(_0x4172a9) {
  zn(_0x4172a9);
  return Reflect.ownKeys(_0x4172a9);
}
function Wn(_0x1764cf) {
  const [_0x2f3930, _0x5b5787] = ce(_0x1764cf, {
    equals: false,
    internal: true
  });
  _0x2f3930.$ = _0x5b5787;
  return _0x2f3930;
}
const Eo = {
  get(_0x5b2c0e, _0x56812e, _0x9ecee0) {
    if (_0x56812e === zt) {
      return _0x5b2c0e;
    }
    if (_0x56812e === Se) {
      return _0x9ecee0;
    }
    if (_0x56812e === Ut) {
      zn(_0x5b2c0e);
      return _0x9ecee0;
    }
    const _0x54b2d0 = jt(_0x5b2c0e);
    const _0x4157ba = _0x54b2d0[_0x56812e];
    let _0x23ff71 = _0x4157ba ? _0x4157ba() : _0x5b2c0e[_0x56812e];
    if (_0x56812e === ze || _0x56812e === "__proto__") {
      return _0x23ff71;
    }
    if (!_0x4157ba) {
      const _0x13bedc = Object.getOwnPropertyDescriptor(_0x5b2c0e, _0x56812e);
      if (In() && (typeof _0x23ff71 != "function" || _0x5b2c0e.hasOwnProperty(_0x56812e)) && (!_0x13bedc || !_0x13bedc.get)) {
        _0x23ff71 = Wt(_0x54b2d0, _0x56812e, _0x23ff71)();
      }
    }
    if (ft(_0x23ff71)) {
      return Gn(_0x23ff71);
    } else {
      return _0x23ff71;
    }
  },
  has(_0x3e0ae1, _0x2e7e5b) {
    if (_0x2e7e5b === zt || _0x2e7e5b === Se || _0x2e7e5b === Ut || _0x2e7e5b === ze || _0x2e7e5b === "__proto__") {
      return true;
    } else {
      this.get(_0x3e0ae1, _0x2e7e5b, _0x3e0ae1);
      return _0x2e7e5b in _0x3e0ae1;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: To,
  getOwnPropertyDescriptor: Ao
};
function ut(_0x352129, _0x52781e, _0xe96783, _0x8c4783 = false) {
  if (!_0x8c4783 && _0x352129[_0x52781e] === _0xe96783) {
    return;
  }
  const _0x594022 = _0x352129[_0x52781e];
  const _0x2a0fd9 = _0x352129.length;
  if (_0xe96783 === undefined) {
    delete _0x352129[_0x52781e];
  } else {
    _0x352129[_0x52781e] = _0xe96783;
  }
  let _0x2cfbff = jt(_0x352129);
  let _0x25d91c;
  if (_0x25d91c = Wt(_0x2cfbff, _0x52781e, _0x594022)) {
    _0x25d91c.$(() => _0xe96783);
  }
  if (Array.isArray(_0x352129) && _0x352129.length !== _0x2a0fd9) {
    for (let _0x208999 = _0x352129.length; _0x208999 < _0x2a0fd9; _0x208999++) {
      if (_0x25d91c = _0x2cfbff[_0x208999]) {
        _0x25d91c.$();
      }
    }
    if (_0x25d91c = Wt(_0x2cfbff, "length", _0x2a0fd9)) {
      _0x25d91c.$(_0x352129.length);
    }
  }
  if (_0x25d91c = _0x2cfbff._) {
    _0x25d91c.$();
  }
}
function jn(_0x435b6c, _0x5e65c8) {
  const _0x3a6a16 = Object.keys(_0x5e65c8);
  for (let _0x389fc6 = 0; _0x389fc6 < _0x3a6a16.length; _0x389fc6 += 1) {
    const _0x2a6970 = _0x3a6a16[_0x389fc6];
    ut(_0x435b6c, _0x2a6970, _0x5e65c8[_0x2a6970]);
  }
}
function yo(_0x3990bf, _0x29df94) {
  if (typeof _0x29df94 == "function") {
    _0x29df94 = _0x29df94(_0x3990bf);
  }
  _0x29df94 = We(_0x29df94);
  if (Array.isArray(_0x29df94)) {
    if (_0x3990bf === _0x29df94) {
      return;
    }
    let _0x198e14 = 0;
    let _0x1f5ec3 = _0x29df94.length;
    for (; _0x198e14 < _0x1f5ec3; _0x198e14++) {
      const _0x12c4db = _0x29df94[_0x198e14];
      if (_0x3990bf[_0x198e14] !== _0x12c4db) {
        ut(_0x3990bf, _0x198e14, _0x12c4db);
      }
    }
    ut(_0x3990bf, "length", _0x1f5ec3);
  } else {
    jn(_0x3990bf, _0x29df94);
  }
}
function Ge(_0x5da891, _0x3496bb, _0x1dc3d6 = []) {
  let _0x31b692;
  let _0xed7af7 = _0x5da891;
  if (_0x3496bb.length > 1) {
    _0x31b692 = _0x3496bb.shift();
    const _0x17e164 = typeof _0x31b692;
    const _0x35a87a = Array.isArray(_0x5da891);
    if (Array.isArray(_0x31b692)) {
      for (let _0x4a873c = 0; _0x4a873c < _0x31b692.length; _0x4a873c++) {
        Ge(_0x5da891, [_0x31b692[_0x4a873c]].concat(_0x3496bb), _0x1dc3d6);
      }
      return;
    } else if (_0x35a87a && _0x17e164 === "function") {
      for (let _0x3ef0b1 = 0; _0x3ef0b1 < _0x5da891.length; _0x3ef0b1++) {
        if (_0x31b692(_0x5da891[_0x3ef0b1], _0x3ef0b1)) {
          Ge(_0x5da891, [_0x3ef0b1].concat(_0x3496bb), _0x1dc3d6);
        }
      }
      return;
    } else if (_0x35a87a && _0x17e164 === "object") {
      const {
        from: _0x5c1a62 = 0,
        to: _0xda0a0d = _0x5da891.length - 1,
        by: _0x72383b = 1
      } = _0x31b692;
      for (let _0x5807cd = _0x5c1a62; _0x5807cd <= _0xda0a0d; _0x5807cd += _0x72383b) {
        Ge(_0x5da891, [_0x5807cd].concat(_0x3496bb), _0x1dc3d6);
      }
      return;
    } else if (_0x3496bb.length > 1) {
      Ge(_0x5da891[_0x31b692], _0x3496bb, [_0x31b692].concat(_0x1dc3d6));
      return;
    }
    _0xed7af7 = _0x5da891[_0x31b692];
    _0x1dc3d6 = [_0x31b692].concat(_0x1dc3d6);
  }
  let _0x345385 = _0x3496bb[0];
  if ((typeof _0x345385 != "function" || !(_0x345385 = _0x345385(_0xed7af7, _0x1dc3d6), _0x345385 === _0xed7af7)) && (_0x31b692 !== undefined || _0x345385 != null)) {
    _0x345385 = We(_0x345385);
    if (_0x31b692 === undefined || ft(_0xed7af7) && ft(_0x345385) && !Array.isArray(_0x345385)) {
      jn(_0xed7af7, _0x345385);
    } else {
      ut(_0x5da891, _0x31b692, _0x345385);
    }
  }
}
function vo(...[_0x6a9912, _0x164295]) {
  const _0x117aa5 = We(_0x6a9912 || {});
  const _0x4485bc = Array.isArray(_0x117aa5);
  const _0x133637 = Gn(_0x117aa5);
  function _0x42790e(..._0x5665b1) {
    Ft(() => {
      if (_0x4485bc && _0x5665b1.length === 1) {
        yo(_0x117aa5, _0x5665b1[0]);
      } else {
        Ge(_0x117aa5, _0x5665b1);
      }
    });
  }
  return [_0x133637, _0x42790e];
}
function bo(_0x13b785, _0x276997) {
  const _0x54da0e = Ci(_0x276997);
  return [_0x688739 => se(_0x54da0e.Provider, {
    value: _0x13b785(_0x688739),
    get children() {
      return _0x688739.children;
    }
  }), () => Oi(_0x54da0e)];
}
const [wo, So] = bo(() => {
  const [_0x716a17, _0x22c47a] = ce(false);
  const [_0x2efb19, _0x3ee7d1] = ce(null);
  const [_0x5960ed, _0x432b75] = ce(null);
  const [_0x3910af, _0x83f242] = ce(0);
  const [_0x1ab66b, _0x447475] = ce(false);
  const [_0x1fc609, _0x4eb8ef] = vo([]);
  const [_0x403539, _0x515166] = ce(false);
  return {
    visible: _0x716a17,
    setVisible: _0x22c47a,
    contactData: _0x2efb19,
    setContact: _0x3ee7d1,
    dialogueData: _0x5960ed,
    setDialogue: _0x432b75,
    progression: _0x3910af,
    setProgression: _0x83f242,
    hideProgression: _0x1ab66b,
    setHideProgression: _0x447475,
    dialoguesData: _0x1fc609,
    setDialogues: _0x4eb8ef,
    hide: _0x403539,
    setHide: _0x515166
  };
});
const xo = () => So();
const Lo = "_keybind_1nek5_1";
const Co = "_text_1nek5_17";
const Oo = "_button_1nek5_20";
const $t = {
  keybind: Lo,
  text: Co,
  button: Oo
};
const Ro = Le("<div><div>Exit</div><div>ESC");
function Do() {
  return (() => {
    const _0x10af20 = Ro();
    const _0x362066 = _0x10af20.firstChild;
    const _0x92db48 = _0x362066.nextSibling;
    fe(_0x21aaf1 => {
      const _0x381ad1 = $t.keybind;
      const _0x5dd27f = $t.text;
      const _0xb0f91c = $t.button;
      if (_0x381ad1 !== _0x21aaf1._v$) {
        k(_0x10af20, _0x21aaf1._v$ = _0x381ad1);
      }
      if (_0x5dd27f !== _0x21aaf1._v$2) {
        k(_0x362066, _0x21aaf1._v$2 = _0x5dd27f);
      }
      if (_0xb0f91c !== _0x21aaf1._v$3) {
        k(_0x92db48, _0x21aaf1._v$3 = _0xb0f91c);
      }
      return _0x21aaf1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x10af20;
  })();
}
const No = Le("<div> REP");
const Po = Le("<div class=\"flex h-full w-full flex-col items-center justify-start gap-[1vh]\">");
const Io = Le("<div>");
const Mo = Le("<div><div><div></div><div></div></div><div><div><div><div class=\"flex flex-col items-start justify-start\"><span><span></span> ");
const ko = Le("<div class=\"flex w-full flex-col items-start justify-start gap-[0.5vh]\"><div class=\"flex w-full flex-row items-center justify-start gap-[1vh]\"><span><span></span> </span><div></div></div><div><svg width=\"0.83vh\" height=\"0.83vh\" viewBox=\"0 0 9 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0H9L4.5 4.5L0 9V0Z\" fill=\"url(#paint0_radial_3202_976)\"></path><defs><radialGradient id=\"paint0_radial_3202_976\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(4.5 4.5) rotate(45) scale(8.48528)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00F8B9\" stop-opacity=\"0\"></svg><span class=\"whitespace-pre-line\">");
const $o = Le("<div><div>");
function Uo() {
  const {
    visible: _0x287377,
    setVisible: _0x36a5ff,
    contactData: _0x37c36b,
    setContact: _0x575bf1,
    dialogueData: _0x7893ad,
    setDialogue: _0x5a9f66,
    progression: _0x4d90f6,
    setProgression: _0x1ae48b,
    hideProgression: _0x31bc3a,
    setHideProgression: _0x29eca2,
    dialoguesData: _0x13c15a,
    setDialogues: _0x5b367d,
    hide: _0xdfcd44,
    setHide: _0x52d739
  } = xo();
  const _0x2ba2fb = _0xa8fd => {
    if (_0xa8fd.key === "Escape" && _0x287377()) {
      _0x537931.execute("contacts:close");
    }
    const _0x231795 = _0x7893ad()?.options;
    if (_0x231795) {
      const _0x5a37d8 = parseInt(_0xa8fd.key);
      if (_0x5a37d8 > 0 && _0x5a37d8 <= _0x231795.length) {
        _0x537931.execute("contacts:action", _0x5a37d8 - 1);
      }
    }
  };
  Si(async () => {
    document.addEventListener("keydown", _0x2ba2fb);
  });
  Pn(() => {
    document.removeEventListener("keydown", _0x2ba2fb);
  });
  _0x537931.register("contacts:open", async (_0x18c343, _0x1ddc0a, _0x313275, _0x6dcc6c) => {
    _0x5b367d([]);
    _0x52d739(false);
    _0x36a5ff(true);
    _0x575bf1(_0x18c343);
    _0x5a9f66(_0x1ddc0a);
    _0x1ae48b(_0x313275);
    _0x29eca2(_0x6dcc6c ?? false);
    _0x5b367d(_0x525ad9 => [..._0x525ad9, _0x1ddc0a]);
  });
  _0x537931.register("contacts:hide", async () => {
    _0x52d739(true);
  });
  _0x537931.register("contacts:updateDialogue", async _0x41b9e9 => {
    _0x5a9f66(_0x41b9e9);
    _0x5b367d(_0x5a2f59 => [..._0x5a2f59, _0x41b9e9]);
  });
  _0x537931.register("contacts:updateProgression", async _0x328fa6 => {
    _0x1ae48b(_0x328fa6);
  });
  _0x537931.register("contacts:close", async () => {
    _0x36a5ff(false);
  });
  const _0x2940e6 = () => ({
    big: _0x37c36b()?.name.split(" ")[0].toUpperCase(),
    small: _0x37c36b()?.name.split(" ")[1].toUpperCase()
  });
  return se(_o, {
    name: "slide-right",
    get children() {
      return se(it, {
        get when() {
          return he(() => !!_0x287377())() && _0x37c36b();
        },
        children: _0x59e00f => (() => {
          const _0x5f56ca = Mo();
          const _0x2e09ba = _0x5f56ca.firstChild;
          const _0x1e7bbd = _0x2e09ba.firstChild;
          const _0x2b920a = _0x1e7bbd.nextSibling;
          const _0x1d273a = _0x2e09ba.nextSibling;
          const _0x24d662 = _0x1d273a.firstChild;
          const _0x57f08f = _0x24d662.firstChild;
          const _0xb09299 = _0x57f08f.firstChild;
          const _0xb6ac1 = _0xb09299.firstChild;
          const _0x4a011d = _0xb6ac1.firstChild;
          _0x4a011d.nextSibling;
          Z(_0x4a011d, () => _0x2940e6().big);
          Z(_0xb6ac1, () => _0x2940e6().small, null);
          Z(_0xb09299, se(it, {
            get when() {
              return !_0x31bc3a();
            },
            get children() {
              const _0x57f30d = No();
              const _0x1ac7bd = _0x57f30d.firstChild;
              Z(_0x57f30d, () => _0x4d90f6().toFixed(2).replace(/\.00$/, ""), _0x1ac7bd);
              fe(_0x22d796 => {
                const _0x33ed99 = P.tag;
                const _0x2de4b9 = {
                  [P[_0x59e00f().color ?? ""]]: true
                };
                if (_0x33ed99 !== _0x22d796._v$) {
                  k(_0x57f30d, _0x22d796._v$ = _0x33ed99);
                }
                _0x22d796._v$2 = Mt(_0x57f30d, _0x2de4b9, _0x22d796._v$2);
                return _0x22d796;
              }, {
                _v$: undefined,
                _v$2: undefined
              });
              return _0x57f30d;
            }
          }), null);
          Z(_0x57f08f, se(Do, {}), null);
          Z(_0x24d662, se(it, {
            get when() {
              return !_0xdfcd44();
            },
            get children() {
              const _0xe1aacf = Po();
              Z(_0xe1aacf, se(bn, {
                each: _0x13c15a,
                children: _0x53a24e => (() => {
                  const _0x141aa5 = ko();
                  const _0x421a89 = _0x141aa5.firstChild;
                  const _0x50a871 = _0x421a89.firstChild;
                  const _0x4c952b = _0x50a871.firstChild;
                  _0x4c952b.nextSibling;
                  const _0x3931c7 = _0x50a871.nextSibling;
                  const _0x3434d4 = _0x421a89.nextSibling;
                  const _0x572f30 = _0x3434d4.firstChild;
                  const _0x20011e = _0x572f30.nextSibling;
                  Z(_0x4c952b, () => _0x2940e6().big);
                  Z(_0x50a871, () => _0x2940e6().small, null);
                  Z(_0x3931c7, () => _0x59e00f().group);
                  fe(_0x36d5c0 => {
                    const _0x11afdf = P.dialogueText;
                    const _0x433311 = P.big;
                    const _0x4a9dc0 = P.tag;
                    const _0x40717a = {
                      [P[_0x59e00f().color ?? ""]]: true
                    };
                    const _0x38c239 = P.textBox;
                    const _0x21caad = P.indicator;
                    const _0x41cc93 = ao.sanitize(_0x53a24e.text);
                    if (_0x11afdf !== _0x36d5c0._v$13) {
                      k(_0x50a871, _0x36d5c0._v$13 = _0x11afdf);
                    }
                    if (_0x433311 !== _0x36d5c0._v$14) {
                      k(_0x4c952b, _0x36d5c0._v$14 = _0x433311);
                    }
                    if (_0x4a9dc0 !== _0x36d5c0._v$15) {
                      k(_0x3931c7, _0x36d5c0._v$15 = _0x4a9dc0);
                    }
                    _0x36d5c0._v$16 = Mt(_0x3931c7, _0x40717a, _0x36d5c0._v$16);
                    if (_0x38c239 !== _0x36d5c0._v$17) {
                      k(_0x3434d4, _0x36d5c0._v$17 = _0x38c239);
                    }
                    if (_0x21caad !== _0x36d5c0._v$18) {
                      Bi(_0x572f30, "class", _0x36d5c0._v$18 = _0x21caad);
                    }
                    if (_0x41cc93 !== _0x36d5c0._v$19) {
                      _0x20011e.innerHTML = _0x36d5c0._v$19 = _0x41cc93;
                    }
                    return _0x36d5c0;
                  }, {
                    _v$13: undefined,
                    _v$14: undefined,
                    _v$15: undefined,
                    _v$16: undefined,
                    _v$17: undefined,
                    _v$18: undefined,
                    _v$19: undefined
                  });
                  return _0x141aa5;
                })()
              }));
              return _0xe1aacf;
            }
          }), null);
          Z(_0x5f56ca, se(it, {
            get when() {
              return !_0xdfcd44();
            },
            get children() {
              const _0x3d8b02 = Io();
              Z(_0x3d8b02, se(bn, {
                get each() {
                  return _0x7893ad()?.options;
                },
                children: (_0x304b13, _0x41c791) => (() => {
                  const _0x1349df = $o();
                  const _0x24ce8b = _0x1349df.firstChild;
                  _0x1349df.$$click = () => {
                    _0x537931.execute("contacts:action", _0x41c791());
                  };
                  Z(_0x24ce8b, () => _0x41c791() + 1);
                  Z(_0x1349df, () => _0x304b13.text, null);
                  fe(_0x329fe8 => {
                    const _0xf9f5ee = P.option;
                    const _0x41d62e = P.index;
                    if (_0xf9f5ee !== _0x329fe8._v$20) {
                      k(_0x1349df, _0x329fe8._v$20 = _0xf9f5ee);
                    }
                    if (_0x41d62e !== _0x329fe8._v$21) {
                      k(_0x24ce8b, _0x329fe8._v$21 = _0x41d62e);
                    }
                    return _0x329fe8;
                  }, {
                    _v$20: undefined,
                    _v$21: undefined
                  });
                  return _0x1349df;
                })()
              }));
              fe(() => k(_0x3d8b02, P.options));
              return _0x3d8b02;
            }
          }), null);
          fe(_0x375420 => {
            const _0x30f400 = P.App;
            const _0x2e8b32 = P.sphere_container;
            const _0x1236c7 = P.sphere;
            const _0xc85b3f = P.sphere;
            const _0x393fbe = {
              [P[_0x59e00f().color ?? ""]]: true
            };
            const _0x5849b1 = P.container;
            const _0x480647 = P.border_container;
            const _0x4a9965 = P.header;
            const _0x31cca0 = P.text;
            const _0x3ae957 = P.big;
            if (_0x30f400 !== _0x375420._v$3) {
              k(_0x5f56ca, _0x375420._v$3 = _0x30f400);
            }
            if (_0x2e8b32 !== _0x375420._v$4) {
              k(_0x2e09ba, _0x375420._v$4 = _0x2e8b32);
            }
            if (_0x1236c7 !== _0x375420._v$5) {
              k(_0x1e7bbd, _0x375420._v$5 = _0x1236c7);
            }
            if (_0xc85b3f !== _0x375420._v$6) {
              k(_0x2b920a, _0x375420._v$6 = _0xc85b3f);
            }
            _0x375420._v$7 = Mt(_0x2b920a, _0x393fbe, _0x375420._v$7);
            if (_0x5849b1 !== _0x375420._v$8) {
              k(_0x1d273a, _0x375420._v$8 = _0x5849b1);
            }
            if (_0x480647 !== _0x375420._v$9) {
              k(_0x24d662, _0x375420._v$9 = _0x480647);
            }
            if (_0x4a9965 !== _0x375420._v$10) {
              k(_0x57f08f, _0x375420._v$10 = _0x4a9965);
            }
            if (_0x31cca0 !== _0x375420._v$11) {
              k(_0xb6ac1, _0x375420._v$11 = _0x31cca0);
            }
            if (_0x3ae957 !== _0x375420._v$12) {
              k(_0x4a011d, _0x375420._v$12 = _0x3ae957);
            }
            return _0x375420;
          }, {
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
          return _0x5f56ca;
        })()
      });
    }
  });
}
Hi(["click"]);
Fi(() => se(wo, {
  get children() {
    return se(Uo, {});
  }
}), document.getElementById("root"));