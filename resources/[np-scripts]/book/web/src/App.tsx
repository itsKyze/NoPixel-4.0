import './style.css';
import { N as _0x31dc3f } from "./v-packages.js";
(function () {
  const _0x3d7351 = document.createElement("link").relList;
  if (_0x3d7351 && _0x3d7351.supports && _0x3d7351.supports("modulepreload")) {
    return;
  }
  for (const _0x198ed0 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x4ebeb5(_0x198ed0);
  }
  new MutationObserver(_0x2d8228 => {
    for (const _0x168722 of _0x2d8228) {
      if (_0x168722.type === "childList") {
        for (const _0x3a3870 of _0x168722.addedNodes) {
          if (_0x3a3870.tagName === "LINK" && _0x3a3870.rel === "modulepreload") {
            _0x4ebeb5(_0x3a3870);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x52e4d8(_0x196a43) {
    const _0x4694ed = {};
    if (_0x196a43.integrity) {
      _0x4694ed.integrity = _0x196a43.integrity;
    }
    if (_0x196a43.referrerPolicy) {
      _0x4694ed.referrerPolicy = _0x196a43.referrerPolicy;
    }
    if (_0x196a43.crossOrigin === "use-credentials") {
      _0x4694ed.credentials = "include";
    } else if (_0x196a43.crossOrigin === "anonymous") {
      _0x4694ed.credentials = "omit";
    } else {
      _0x4694ed.credentials = "same-origin";
    }
    return _0x4694ed;
  }
  function _0x4ebeb5(_0x397fb4) {
    if (_0x397fb4.ep) {
      return;
    }
    _0x397fb4.ep = true;
    const _0x169f9f = _0x52e4d8(_0x397fb4);
    fetch(_0x397fb4.href, _0x169f9f);
  }
})();
const On = (_0x7e6c05, _0x175b74) => _0x7e6c05 === _0x175b74;
const G = Symbol("solid-proxy");
const Ge = Symbol("solid-track");
const ce = {
  equals: On
};
let an = gn;
const H = 1;
const de = 2;
const un = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var y = null;
let Fe = null;
let b = null;
let S = null;
let j = null;
let ye = 0;
function fe(_0x4203b7, _0x3a1418) {
  const _0x46adb4 = b;
  const _0x45f096 = y;
  const _0x2148b3 = _0x4203b7.length === 0;
  const _0x4586cb = _0x2148b3 ? un : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x3a1418 === undefined ? _0x45f096 : _0x3a1418
  };
  const _0x23df27 = _0x2148b3 ? _0x4203b7 : () => _0x4203b7(() => P(() => pe(_0x4586cb)));
  y = _0x4586cb;
  b = null;
  try {
    return Y(_0x23df27, true);
  } finally {
    b = _0x46adb4;
    y = _0x45f096;
  }
}
function x(_0x272d9c, _0x272814) {
  _0x272814 = _0x272814 ? Object.assign({}, ce, _0x272814) : ce;
  const _0x22d8de = {
    value: _0x272d9c,
    observers: null,
    observerSlots: null,
    comparator: _0x272814.equals || undefined
  };
  const _0x382973 = _0x20022b => {
    if (typeof _0x20022b == "function") {
      _0x20022b = _0x20022b(_0x22d8de.value);
    }
    return _n(_0x22d8de, _0x20022b);
  };
  return [vn.bind(_0x22d8de), _0x382973];
}
function w(_0x275153, _0x3a0359, _0x45164a) {
  const _0x112398 = Qe(_0x275153, _0x3a0359, false, H);
  le(_0x112398);
}
function ve(_0x214292, _0x328ce1, _0x50e11c) {
  an = Un;
  const _0x2f615f = Qe(_0x214292, _0x328ce1, false, H);
  if (!_0x50e11c || !_0x50e11c.render) {
    _0x2f615f.user = true;
  }
  if (j) {
    j.push(_0x2f615f);
  } else {
    le(_0x2f615f);
  }
}
function M(_0x3a4a33, _0x2a1665, _0x122b54) {
  _0x122b54 = _0x122b54 ? Object.assign({}, ce, _0x122b54) : ce;
  const _0x39f7ab = Qe(_0x3a4a33, _0x2a1665, true, 0);
  _0x39f7ab.observers = null;
  _0x39f7ab.observerSlots = null;
  _0x39f7ab.comparator = _0x122b54.equals || undefined;
  le(_0x39f7ab);
  return vn.bind(_0x39f7ab);
}
function En(_0x28fcf0) {
  return Y(_0x28fcf0, false);
}
function P(_0x580f2b) {
  if (b === null) {
    return _0x580f2b();
  }
  const _0x571cc1 = b;
  b = null;
  try {
    return _0x580f2b();
  } finally {
    b = _0x571cc1;
  }
}
function Pn(_0x3036cb) {
  ve(() => P(_0x3036cb));
}
function fn(_0x9cfbe1) {
  if (y !== null) {
    if (y.cleanups === null) {
      y.cleanups = [_0x9cfbe1];
    } else {
      y.cleanups.push(_0x9cfbe1);
    }
  }
  return _0x9cfbe1;
}
function cn() {
  return b;
}
function Rn(_0x2de4f0, _0x9a9210) {
  const _0x5bcec1 = Symbol("context");
  return {
    id: _0x5bcec1,
    Provider: jn(_0x5bcec1),
    defaultValue: _0x2de4f0
  };
}
function Ln(_0x1060f7) {
  let _0x39470e;
  if ((_0x39470e = bn(y, _0x1060f7.id)) !== undefined) {
    return _0x39470e;
  } else {
    return _0x1060f7.defaultValue;
  }
}
function dn(_0x48d389) {
  const _0x5748ee = M(_0x48d389);
  const _0x34f538 = M(() => Ke(_0x5748ee()));
  _0x34f538.toArray = () => {
    const _0x540228 = _0x34f538();
    if (Array.isArray(_0x540228)) {
      return _0x540228;
    } else if (_0x540228 != null) {
      return [_0x540228];
    } else {
      return [];
    }
  };
  return _0x34f538;
}
function vn() {
  if (this.sources && this.state) {
    if (this.state === H) {
      le(this);
    } else {
      const _0x441afc = S;
      S = null;
      Y(() => ge(this), false);
      S = _0x441afc;
    }
  }
  if (b) {
    const _0x5b553d = this.observers ? this.observers.length : 0;
    if (b.sources) {
      b.sources.push(this);
      b.sourceSlots.push(_0x5b553d);
    } else {
      b.sources = [this];
      b.sourceSlots = [_0x5b553d];
    }
    if (this.observers) {
      this.observers.push(b);
      this.observerSlots.push(b.sources.length - 1);
    } else {
      this.observers = [b];
      this.observerSlots = [b.sources.length - 1];
    }
  }
  return this.value;
}
function _n(_0x37e47e, _0x347b54, _0x3fa6a8) {
  let _0x3b58dd = _0x37e47e.value;
  if (!_0x37e47e.comparator || !_0x37e47e.comparator(_0x3b58dd, _0x347b54)) {
    _0x37e47e.value = _0x347b54;
    if (_0x37e47e.observers && _0x37e47e.observers.length) {
      Y(() => {
        for (let _0x1bcf27 = 0; _0x1bcf27 < _0x37e47e.observers.length; _0x1bcf27 += 1) {
          const _0x2ed2d2 = _0x37e47e.observers[_0x1bcf27];
          const _0x3a6ad3 = Fe && Fe.running;
          if (_0x3a6ad3) {
            Fe.disposed.has(_0x2ed2d2);
          }
          if (_0x3a6ad3 ? !_0x2ed2d2.tState : !_0x2ed2d2.state) {
            if (_0x2ed2d2.pure) {
              S.push(_0x2ed2d2);
            } else {
              j.push(_0x2ed2d2);
            }
            if (_0x2ed2d2.observers) {
              hn(_0x2ed2d2);
            }
          }
          if (!_0x3a6ad3) {
            _0x2ed2d2.state = H;
          }
        }
        if (S.length > 1000000) {
          S = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x347b54;
}
function le(_0x3a1e1a) {
  if (!_0x3a1e1a.fn) {
    return;
  }
  pe(_0x3a1e1a);
  const _0xd2410a = y;
  const _0x1b4346 = b;
  const _0x28f8f4 = ye;
  b = y = _0x3a1e1a;
  Nn(_0x3a1e1a, _0x3a1e1a.value, _0x28f8f4);
  b = _0x1b4346;
  y = _0xd2410a;
}
function Nn(_0x40c893, _0x4cb208, _0x552027) {
  let _0x182fdb;
  try {
    _0x182fdb = _0x40c893.fn(_0x4cb208);
  } catch (_0x49d2b4) {
    if (_0x40c893.pure) {
      _0x40c893.state = H;
      if (_0x40c893.owned) {
        _0x40c893.owned.forEach(pe);
      }
      _0x40c893.owned = null;
    }
    _0x40c893.updatedAt = _0x552027 + 1;
    return $n(_0x49d2b4);
  }
  if (!_0x40c893.updatedAt || _0x40c893.updatedAt <= _0x552027) {
    if (_0x40c893.updatedAt != null && "observers" in _0x40c893) {
      _n(_0x40c893, _0x182fdb);
    } else {
      _0x40c893.value = _0x182fdb;
    }
    _0x40c893.updatedAt = _0x552027;
  }
}
function Qe(_0x560c8a, _0x3ecf25, _0x1b5fe2, _0x54bf2c = H, _0x8e196a) {
  const _0x46fbca = {
    fn: _0x560c8a,
    state: _0x54bf2c,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x3ecf25,
    owner: y,
    context: null,
    pure: _0x1b5fe2
  };
  if (y !== null) {
    if (y !== un) {
      if (y.owned) {
        y.owned.push(_0x46fbca);
      } else {
        y.owned = [_0x46fbca];
      }
    }
  }
  return _0x46fbca;
}
function _e(_0x545ca6) {
  if (_0x545ca6.state === 0) {
    return;
  }
  if (_0x545ca6.state === de) {
    return ge(_0x545ca6);
  }
  if (_0x545ca6.suspense && P(_0x545ca6.suspense.inFallback)) {
    return _0x545ca6.suspense.effects.push(_0x545ca6);
  }
  const _0xa84cd6 = [_0x545ca6];
  while ((_0x545ca6 = _0x545ca6.owner) && (!_0x545ca6.updatedAt || _0x545ca6.updatedAt < ye)) {
    if (_0x545ca6.state) {
      _0xa84cd6.push(_0x545ca6);
    }
  }
  for (let _0x453b03 = _0xa84cd6.length - 1; _0x453b03 >= 0; _0x453b03--) {
    _0x545ca6 = _0xa84cd6[_0x453b03];
    if (_0x545ca6.state === H) {
      le(_0x545ca6);
    } else if (_0x545ca6.state === de) {
      const _0x6d5b8f = S;
      S = null;
      Y(() => ge(_0x545ca6, _0xa84cd6[0]), false);
      S = _0x6d5b8f;
    }
  }
}
function Y(_0x522208, _0x4de664) {
  if (S) {
    return _0x522208();
  }
  let _0x1e170d = false;
  if (!_0x4de664) {
    S = [];
  }
  if (j) {
    _0x1e170d = true;
  } else {
    j = [];
  }
  ye++;
  try {
    const _0x3bebdf = _0x522208();
    Mn(_0x1e170d);
    return _0x3bebdf;
  } catch (_0x28948a) {
    if (!_0x1e170d) {
      j = null;
    }
    S = null;
    $n(_0x28948a);
  }
}
function Mn(_0x295d5d) {
  if (S) {
    gn(S);
    S = null;
  }
  if (_0x295d5d) {
    return;
  }
  const _0x59b06d = j;
  j = null;
  if (_0x59b06d.length) {
    Y(() => an(_0x59b06d), false);
  }
}
function gn(_0x2bb4aa) {
  for (let _0x338302 = 0; _0x338302 < _0x2bb4aa.length; _0x338302++) {
    _e(_0x2bb4aa[_0x338302]);
  }
}
function Un(_0x15c5b1) {
  let _0x21355f;
  let _0x37531d = 0;
  for (_0x21355f = 0; _0x21355f < _0x15c5b1.length; _0x21355f++) {
    const _0x3d7e8b = _0x15c5b1[_0x21355f];
    if (_0x3d7e8b.user) {
      _0x15c5b1[_0x37531d++] = _0x3d7e8b;
    } else {
      _e(_0x3d7e8b);
    }
  }
  for (_0x21355f = 0; _0x21355f < _0x37531d; _0x21355f++) {
    _e(_0x15c5b1[_0x21355f]);
  }
}
function ge(_0x79b09, _0x3c4ad0) {
  _0x79b09.state = 0;
  for (let _0x41f95a = 0; _0x41f95a < _0x79b09.sources.length; _0x41f95a += 1) {
    const _0x5bbfe0 = _0x79b09.sources[_0x41f95a];
    if (_0x5bbfe0.sources) {
      const _0x246fce = _0x5bbfe0.state;
      if (_0x246fce === H) {
        if (_0x5bbfe0 !== _0x3c4ad0 && (!_0x5bbfe0.updatedAt || _0x5bbfe0.updatedAt < ye)) {
          _e(_0x5bbfe0);
        }
      } else if (_0x246fce === de) {
        ge(_0x5bbfe0, _0x3c4ad0);
      }
    }
  }
}
function hn(_0x40a201) {
  for (let _0x226dfb = 0; _0x226dfb < _0x40a201.observers.length; _0x226dfb += 1) {
    const _0x4680e5 = _0x40a201.observers[_0x226dfb];
    if (!_0x4680e5.state) {
      _0x4680e5.state = de;
      if (_0x4680e5.pure) {
        S.push(_0x4680e5);
      } else {
        j.push(_0x4680e5);
      }
      if (_0x4680e5.observers) {
        hn(_0x4680e5);
      }
    }
  }
}
function pe(_0x14e5a6) {
  let _0x15189b;
  if (_0x14e5a6.sources) {
    while (_0x14e5a6.sources.length) {
      const _0x1bec34 = _0x14e5a6.sources.pop();
      const _0x1b2321 = _0x14e5a6.sourceSlots.pop();
      const _0x8be924 = _0x1bec34.observers;
      if (_0x8be924 && _0x8be924.length) {
        const _0x5e4ba0 = _0x8be924.pop();
        const _0x438019 = _0x1bec34.observerSlots.pop();
        if (_0x1b2321 < _0x8be924.length) {
          _0x5e4ba0.sourceSlots[_0x438019] = _0x1b2321;
          _0x8be924[_0x1b2321] = _0x5e4ba0;
          _0x1bec34.observerSlots[_0x1b2321] = _0x438019;
        }
      }
    }
  }
  if (_0x14e5a6.owned) {
    for (_0x15189b = _0x14e5a6.owned.length - 1; _0x15189b >= 0; _0x15189b--) {
      pe(_0x14e5a6.owned[_0x15189b]);
    }
    _0x14e5a6.owned = null;
  }
  if (_0x14e5a6.cleanups) {
    for (_0x15189b = _0x14e5a6.cleanups.length - 1; _0x15189b >= 0; _0x15189b--) {
      _0x14e5a6.cleanups[_0x15189b]();
    }
    _0x14e5a6.cleanups = null;
  }
  _0x14e5a6.state = 0;
  _0x14e5a6.context = null;
}
function $n(_0x4ce433) {
  throw _0x4ce433;
}
function bn(_0x186b0e, _0xc36695) {
  if (_0x186b0e) {
    if (_0x186b0e.context && _0x186b0e.context[_0xc36695] !== undefined) {
      return _0x186b0e.context[_0xc36695];
    } else {
      return bn(_0x186b0e.owner, _0xc36695);
    }
  } else {
    return undefined;
  }
}
function Ke(_0x897262) {
  if (typeof _0x897262 == "function" && !_0x897262.length) {
    return Ke(_0x897262());
  }
  if (Array.isArray(_0x897262)) {
    const _0x529a0d = [];
    for (let _0x3a13d3 = 0; _0x3a13d3 < _0x897262.length; _0x3a13d3++) {
      const _0x39385e = Ke(_0x897262[_0x3a13d3]);
      if (Array.isArray(_0x39385e)) {
        _0x529a0d.push.apply(_0x529a0d, _0x39385e);
      } else {
        _0x529a0d.push(_0x39385e);
      }
    }
    return _0x529a0d;
  }
  return _0x897262;
}
function jn(_0x51b7ca, _0x231bc9) {
  return function (_0x1f41ce) {
    let _0x30792a;
    w(() => _0x30792a = P(() => {
      y.context = {
        [_0x51b7ca]: _0x1f41ce.value
      };
      return dn(() => _0x1f41ce.children);
    }), undefined);
    return _0x30792a;
  };
}
const zn = Symbol("fallback");
function Jt(_0x430ecf) {
  for (let _0xa8d5a0 = 0; _0xa8d5a0 < _0x430ecf.length; _0xa8d5a0++) {
    _0x430ecf[_0xa8d5a0]();
  }
}
function qn(_0x27fe02, _0x1e4cb2, _0x580ef8 = {}) {
  let _0x2c4199 = [];
  let _0x15d11e = [];
  let _0x33ab63 = [];
  let _0x27d4d4 = 0;
  let _0x3dc74b = _0x1e4cb2.length > 1 ? [] : null;
  fn(() => Jt(_0x33ab63));
  return () => {
    let _0x3990f6 = _0x27fe02() || [];
    let _0x58e129;
    let _0x59d3a8;
    _0x3990f6[Ge];
    return P(() => {
      let _0x1948d5 = _0x3990f6.length;
      let _0x5472f5;
      let _0x223231;
      let _0x551162;
      let _0x5cca2f;
      let _0x5bfc71;
      let _0x642541;
      let _0x135cdf;
      let _0x297fad;
      let _0x29b468;
      if (_0x1948d5 === 0) {
        if (_0x27d4d4 !== 0) {
          Jt(_0x33ab63);
          _0x33ab63 = [];
          _0x2c4199 = [];
          _0x15d11e = [];
          _0x27d4d4 = 0;
          _0x3dc74b &&= [];
        }
        if (_0x580ef8.fallback) {
          _0x2c4199 = [zn];
          _0x15d11e[0] = fe(_0x224dcd => {
            _0x33ab63[0] = _0x224dcd;
            return _0x580ef8.fallback();
          });
          _0x27d4d4 = 1;
        }
      } else if (_0x27d4d4 === 0) {
        _0x15d11e = new Array(_0x1948d5);
        _0x59d3a8 = 0;
        for (; _0x59d3a8 < _0x1948d5; _0x59d3a8++) {
          _0x2c4199[_0x59d3a8] = _0x3990f6[_0x59d3a8];
          _0x15d11e[_0x59d3a8] = fe(_0x1a0edd);
        }
        _0x27d4d4 = _0x1948d5;
      } else {
        _0x551162 = new Array(_0x1948d5);
        _0x5cca2f = new Array(_0x1948d5);
        if (_0x3dc74b) {
          _0x5bfc71 = new Array(_0x1948d5);
        }
        _0x642541 = 0;
        _0x135cdf = Math.min(_0x27d4d4, _0x1948d5);
        for (; _0x642541 < _0x135cdf && _0x2c4199[_0x642541] === _0x3990f6[_0x642541]; _0x642541++);
        _0x135cdf = _0x27d4d4 - 1;
        _0x297fad = _0x1948d5 - 1;
        for (; _0x135cdf >= _0x642541 && _0x297fad >= _0x642541 && _0x2c4199[_0x135cdf] === _0x3990f6[_0x297fad]; _0x135cdf--, _0x297fad--) {
          _0x551162[_0x297fad] = _0x15d11e[_0x135cdf];
          _0x5cca2f[_0x297fad] = _0x33ab63[_0x135cdf];
          if (_0x3dc74b) {
            _0x5bfc71[_0x297fad] = _0x3dc74b[_0x135cdf];
          }
        }
        _0x5472f5 = new Map();
        _0x223231 = new Array(_0x297fad + 1);
        _0x59d3a8 = _0x297fad;
        for (; _0x59d3a8 >= _0x642541; _0x59d3a8--) {
          _0x29b468 = _0x3990f6[_0x59d3a8];
          _0x58e129 = _0x5472f5.get(_0x29b468);
          _0x223231[_0x59d3a8] = _0x58e129 === undefined ? -1 : _0x58e129;
          _0x5472f5.set(_0x29b468, _0x59d3a8);
        }
        for (_0x58e129 = _0x642541; _0x58e129 <= _0x135cdf; _0x58e129++) {
          _0x29b468 = _0x2c4199[_0x58e129];
          _0x59d3a8 = _0x5472f5.get(_0x29b468);
          if (_0x59d3a8 !== undefined && _0x59d3a8 !== -1) {
            _0x551162[_0x59d3a8] = _0x15d11e[_0x58e129];
            _0x5cca2f[_0x59d3a8] = _0x33ab63[_0x58e129];
            if (_0x3dc74b) {
              _0x5bfc71[_0x59d3a8] = _0x3dc74b[_0x58e129];
            }
            _0x59d3a8 = _0x223231[_0x59d3a8];
            _0x5472f5.set(_0x29b468, _0x59d3a8);
          } else {
            _0x33ab63[_0x58e129]();
          }
        }
        for (_0x59d3a8 = _0x642541; _0x59d3a8 < _0x1948d5; _0x59d3a8++) {
          if (_0x59d3a8 in _0x551162) {
            _0x15d11e[_0x59d3a8] = _0x551162[_0x59d3a8];
            _0x33ab63[_0x59d3a8] = _0x5cca2f[_0x59d3a8];
            if (_0x3dc74b) {
              _0x3dc74b[_0x59d3a8] = _0x5bfc71[_0x59d3a8];
              _0x3dc74b[_0x59d3a8](_0x59d3a8);
            }
          } else {
            _0x15d11e[_0x59d3a8] = fe(_0x1a0edd);
          }
        }
        _0x15d11e = _0x15d11e.slice(0, _0x27d4d4 = _0x1948d5);
        _0x2c4199 = _0x3990f6.slice(0);
      }
      return _0x15d11e;
    });
    function _0x1a0edd(_0x569d53) {
      _0x33ab63[_0x59d3a8] = _0x569d53;
      if (_0x3dc74b) {
        const [_0x1c145e, _0x715425] = x(_0x59d3a8);
        _0x3dc74b[_0x59d3a8] = _0x715425;
        return _0x1e4cb2(_0x3990f6[_0x59d3a8], _0x1c145e);
      }
      return _0x1e4cb2(_0x3990f6[_0x59d3a8]);
    }
  };
}
function p(_0x2ce72f, _0x415201) {
  return P(() => _0x2ce72f(_0x415201 || {}));
}
const yn = _0x4970ce => "Stale read from <" + _0x4970ce + ">.";
function Hn(_0x4d7111) {
  const _0x2d33ee = "fallback" in _0x4d7111 && {
    fallback: () => _0x4d7111.fallback
  };
  return M(qn(() => _0x4d7111.each, _0x4d7111.children, _0x2d33ee || undefined));
}
function V(_0x76e528) {
  const _0x49efa5 = _0x76e528.keyed;
  const _0x20f112 = M(() => _0x76e528.when, undefined, {
    equals: (_0xea4e47, _0x5598b1) => _0x49efa5 ? _0xea4e47 === _0x5598b1 : !_0xea4e47 == !_0x5598b1
  });
  return M(() => {
    const _0x3b8bbc = _0x20f112();
    if (_0x3b8bbc) {
      const _0x1a35b8 = _0x76e528.children;
      if (typeof _0x1a35b8 == "function" && _0x1a35b8.length > 0) {
        return P(() => _0x1a35b8(_0x49efa5 ? _0x3b8bbc : () => {
          if (!P(_0x20f112)) {
            throw yn("Show");
          }
          return _0x76e528.when;
        }));
      } else {
        return _0x1a35b8;
      }
    }
    return _0x76e528.fallback;
  }, undefined, undefined);
}
function Fn(_0x8667e2) {
  let _0x248ff8 = false;
  const _0xee0493 = (_0x4ec09a, _0xe76bc1) => _0x4ec09a[0] === _0xe76bc1[0] && (_0x248ff8 ? _0x4ec09a[1] === _0xe76bc1[1] : !_0x4ec09a[1] == !_0xe76bc1[1]) && _0x4ec09a[2] === _0xe76bc1[2];
  const _0x415d08 = dn(() => _0x8667e2.children);
  const _0x5eaf72 = M(() => {
    let _0x3d2ad4 = _0x415d08();
    if (!Array.isArray(_0x3d2ad4)) {
      _0x3d2ad4 = [_0x3d2ad4];
    }
    for (let _0x3c8e04 = 0; _0x3c8e04 < _0x3d2ad4.length; _0x3c8e04++) {
      const _0x1d824d = _0x3d2ad4[_0x3c8e04].when;
      if (_0x1d824d) {
        _0x248ff8 = !!_0x3d2ad4[_0x3c8e04].keyed;
        return [_0x3c8e04, _0x1d824d, _0x3d2ad4[_0x3c8e04]];
      }
    }
    return [-1];
  }, undefined, {
    equals: _0xee0493
  });
  return M(() => {
    const [_0x1b9275, _0x589614, _0x434444] = _0x5eaf72();
    if (_0x1b9275 < 0) {
      return _0x8667e2.fallback;
    }
    const _0x441478 = _0x434444.children;
    if (typeof _0x441478 == "function" && _0x441478.length > 0) {
      return P(() => _0x441478(_0x248ff8 ? _0x589614 : () => {
        if (P(_0x5eaf72)[0] !== _0x1b9275) {
          throw yn("Match");
        }
        return _0x434444.when;
      }));
    } else {
      return _0x441478;
    }
  }, undefined, undefined);
}
function en(_0x64beba) {
  return _0x64beba;
}
function Vn(_0x47a4ff, _0x39f2df, _0x3150ab) {
  let _0x4b26d6 = _0x3150ab.length;
  let _0x46530a = _0x39f2df.length;
  let _0x2a1ffe = _0x4b26d6;
  let _0x45d2da = 0;
  let _0xb272b = 0;
  let _0x2ca259 = _0x39f2df[_0x46530a - 1].nextSibling;
  let _0xf6d2bb = null;
  while (_0x45d2da < _0x46530a || _0xb272b < _0x2a1ffe) {
    if (_0x39f2df[_0x45d2da] === _0x3150ab[_0xb272b]) {
      _0x45d2da++;
      _0xb272b++;
      continue;
    }
    while (_0x39f2df[_0x46530a - 1] === _0x3150ab[_0x2a1ffe - 1]) {
      _0x46530a--;
      _0x2a1ffe--;
    }
    if (_0x46530a === _0x45d2da) {
      const _0x1ffac1 = _0x2a1ffe < _0x4b26d6 ? _0xb272b ? _0x3150ab[_0xb272b - 1].nextSibling : _0x3150ab[_0x2a1ffe - _0xb272b] : _0x2ca259;
      while (_0xb272b < _0x2a1ffe) {
        _0x47a4ff.insertBefore(_0x3150ab[_0xb272b++], _0x1ffac1);
      }
    } else if (_0x2a1ffe === _0xb272b) {
      while (_0x45d2da < _0x46530a) {
        if (!_0xf6d2bb || !_0xf6d2bb.has(_0x39f2df[_0x45d2da])) {
          _0x39f2df[_0x45d2da].remove();
        }
        _0x45d2da++;
      }
    } else if (_0x39f2df[_0x45d2da] === _0x3150ab[_0x2a1ffe - 1] && _0x3150ab[_0xb272b] === _0x39f2df[_0x46530a - 1]) {
      const _0xd9b102 = _0x39f2df[--_0x46530a].nextSibling;
      _0x47a4ff.insertBefore(_0x3150ab[_0xb272b++], _0x39f2df[_0x45d2da++].nextSibling);
      _0x47a4ff.insertBefore(_0x3150ab[--_0x2a1ffe], _0xd9b102);
      _0x39f2df[_0x46530a] = _0x3150ab[_0x2a1ffe];
    } else {
      if (!_0xf6d2bb) {
        _0xf6d2bb = new Map();
        let _0xd5ae6a = _0xb272b;
        while (_0xd5ae6a < _0x2a1ffe) {
          _0xf6d2bb.set(_0x3150ab[_0xd5ae6a], _0xd5ae6a++);
        }
      }
      const _0x1186c8 = _0xf6d2bb.get(_0x39f2df[_0x45d2da]);
      if (_0x1186c8 != null) {
        if (_0xb272b < _0x1186c8 && _0x1186c8 < _0x2a1ffe) {
          let _0x1ce78e = _0x45d2da;
          let _0x429853 = 1;
          let _0x28ccb8;
          while (++_0x1ce78e < _0x46530a && _0x1ce78e < _0x2a1ffe && (_0x28ccb8 = _0xf6d2bb.get(_0x39f2df[_0x1ce78e])) != null && _0x28ccb8 === _0x1186c8 + _0x429853) {
            _0x429853++;
          }
          if (_0x429853 > _0x1186c8 - _0xb272b) {
            const _0x367283 = _0x39f2df[_0x45d2da];
            while (_0xb272b < _0x1186c8) {
              _0x47a4ff.insertBefore(_0x3150ab[_0xb272b++], _0x367283);
            }
          } else {
            _0x47a4ff.replaceChild(_0x3150ab[_0xb272b++], _0x39f2df[_0x45d2da++]);
          }
        } else {
          _0x45d2da++;
        }
      } else {
        _0x39f2df[_0x45d2da++].remove();
      }
    }
  }
}
const tn = "_$DX_DELEGATE";
function Gn(_0x11e52e, _0x4cdab5, _0x2e0b7d, _0x219733 = {}) {
  let _0x14cc17;
  fe(_0x5811b9 => {
    _0x14cc17 = _0x5811b9;
    if (_0x4cdab5 === document) {
      _0x11e52e();
    } else {
      D(_0x4cdab5, _0x11e52e(), _0x4cdab5.firstChild ? null : undefined, _0x2e0b7d);
    }
  }, _0x219733.owner);
  return () => {
    _0x14cc17();
    _0x4cdab5.textContent = "";
  };
}
function z(_0x117e9a, _0x26adf7, _0x50ba32) {
  let _0x554e11;
  const _0x15f83a = () => {
    const _0x591821 = document.createElement("template");
    _0x591821.innerHTML = _0x117e9a;
    if (_0x50ba32) {
      return _0x591821.content.firstChild.firstChild;
    } else {
      return _0x591821.content.firstChild;
    }
  };
  const _0x3620e0 = _0x26adf7 ? () => P(() => document.importNode(_0x554e11 ||= _0x15f83a(), true)) : () => (_0x554e11 ||= _0x15f83a()).cloneNode(true);
  _0x3620e0.cloneNode = _0x3620e0;
  return _0x3620e0;
}
function pn(_0x191e37, _0x4a221a = window.document) {
  const _0x53411f = _0x4a221a[tn] ||= new Set();
  for (let _0x48ec75 = 0, _0x4048dc = _0x191e37.length; _0x48ec75 < _0x4048dc; _0x48ec75++) {
    const _0x2c0164 = _0x191e37[_0x48ec75];
    if (!_0x53411f.has(_0x2c0164)) {
      _0x53411f.add(_0x2c0164);
      _0x4a221a.addEventListener(_0x2c0164, Wn);
    }
  }
}
function ie(_0xbfedd2, _0x28ac16, _0x5c5493) {
  if (_0x5c5493 == null) {
    _0xbfedd2.removeAttribute(_0x28ac16);
  } else {
    _0xbfedd2.setAttribute(_0x28ac16, _0x5c5493);
  }
}
function c(_0x134415, _0x31dd2a) {
  if (_0x31dd2a == null) {
    _0x134415.removeAttribute("class");
  } else {
    _0x134415.className = _0x31dd2a;
  }
}
function Kn(_0x1ffd9b, _0xf0d2f1, _0x54ac5b) {
  return P(() => _0x1ffd9b(_0xf0d2f1, _0x54ac5b));
}
function D(_0xd34c4e, _0x41e024, _0x35be8e, _0x59bc68) {
  if (_0x35be8e !== undefined && !_0x59bc68) {
    _0x59bc68 = [];
  }
  if (typeof _0x41e024 != "function") {
    return he(_0xd34c4e, _0x41e024, _0x59bc68, _0x35be8e);
  }
  w(_0x8e9de8 => he(_0xd34c4e, _0x41e024(), _0x8e9de8, _0x35be8e), _0x59bc68);
}
function Wn(_0x37c444) {
  const _0x2bbeaa = "$$" + _0x37c444.type;
  let _0x6a5bcd = _0x37c444.composedPath && _0x37c444.composedPath()[0] || _0x37c444.target;
  if (_0x37c444.target !== _0x6a5bcd) {
    Object.defineProperty(_0x37c444, "target", {
      configurable: true,
      value: _0x6a5bcd
    });
  }
  Object.defineProperty(_0x37c444, "currentTarget", {
    configurable: true,
    get() {
      return _0x6a5bcd || document;
    }
  });
  while (_0x6a5bcd) {
    const _0xd25020 = _0x6a5bcd[_0x2bbeaa];
    if (_0xd25020 && !_0x6a5bcd.disabled) {
      const _0x3a4e98 = _0x6a5bcd[_0x2bbeaa + "Data"];
      if (_0x3a4e98 !== undefined) {
        _0xd25020.call(_0x6a5bcd, _0x3a4e98, _0x37c444);
      } else {
        _0xd25020.call(_0x6a5bcd, _0x37c444);
      }
      if (_0x37c444.cancelBubble) {
        return;
      }
    }
    _0x6a5bcd = _0x6a5bcd._$host || _0x6a5bcd.parentNode || _0x6a5bcd.host;
  }
}
function he(_0x833a83, _0x41c8c7, _0x2b33d7, _0x136ad1, _0x483244) {
  while (typeof _0x2b33d7 == "function") {
    _0x2b33d7 = _0x2b33d7();
  }
  if (_0x41c8c7 === _0x2b33d7) {
    return _0x2b33d7;
  }
  const _0x4be4a0 = typeof _0x41c8c7;
  const _0x189c26 = _0x136ad1 !== undefined;
  _0x833a83 = _0x189c26 && _0x2b33d7[0] && _0x2b33d7[0].parentNode || _0x833a83;
  if (_0x4be4a0 === "string" || _0x4be4a0 === "number") {
    if (_0x4be4a0 === "number") {
      _0x41c8c7 = _0x41c8c7.toString();
    }
    if (_0x189c26) {
      let _0x24f197 = _0x2b33d7[0];
      if (_0x24f197 && _0x24f197.nodeType === 3) {
        _0x24f197.data = _0x41c8c7;
      } else {
        _0x24f197 = document.createTextNode(_0x41c8c7);
      }
      _0x2b33d7 = Z(_0x833a83, _0x2b33d7, _0x136ad1, _0x24f197);
    } else if (_0x2b33d7 !== "" && typeof _0x2b33d7 == "string") {
      _0x2b33d7 = _0x833a83.firstChild.data = _0x41c8c7;
    } else {
      _0x2b33d7 = _0x833a83.textContent = _0x41c8c7;
    }
  } else if (_0x41c8c7 == null || _0x4be4a0 === "boolean") {
    _0x2b33d7 = Z(_0x833a83, _0x2b33d7, _0x136ad1);
  } else {
    if (_0x4be4a0 === "function") {
      w(() => {
        let _0x205775 = _0x41c8c7();
        while (typeof _0x205775 == "function") {
          _0x205775 = _0x205775();
        }
        _0x2b33d7 = he(_0x833a83, _0x205775, _0x2b33d7, _0x136ad1);
      });
      return () => _0x2b33d7;
    }
    if (Array.isArray(_0x41c8c7)) {
      const _0x20eb40 = [];
      const _0x106d29 = _0x2b33d7 && Array.isArray(_0x2b33d7);
      if (We(_0x20eb40, _0x41c8c7, _0x2b33d7, _0x483244)) {
        w(() => _0x2b33d7 = he(_0x833a83, _0x20eb40, _0x2b33d7, _0x136ad1, true));
        return () => _0x2b33d7;
      }
      if (_0x20eb40.length === 0) {
        _0x2b33d7 = Z(_0x833a83, _0x2b33d7, _0x136ad1);
        if (_0x189c26) {
          return _0x2b33d7;
        }
      } else if (_0x106d29) {
        if (_0x2b33d7.length === 0) {
          nn(_0x833a83, _0x20eb40, _0x136ad1);
        } else {
          Vn(_0x833a83, _0x2b33d7, _0x20eb40);
        }
      } else {
        if (_0x2b33d7) {
          Z(_0x833a83);
        }
        nn(_0x833a83, _0x20eb40);
      }
      _0x2b33d7 = _0x20eb40;
    } else if (_0x41c8c7.nodeType) {
      if (Array.isArray(_0x2b33d7)) {
        if (_0x189c26) {
          return _0x2b33d7 = Z(_0x833a83, _0x2b33d7, _0x136ad1, _0x41c8c7);
        }
        Z(_0x833a83, _0x2b33d7, null, _0x41c8c7);
      } else if (_0x2b33d7 == null || _0x2b33d7 === "" || !_0x833a83.firstChild) {
        _0x833a83.appendChild(_0x41c8c7);
      } else {
        _0x833a83.replaceChild(_0x41c8c7, _0x833a83.firstChild);
      }
      _0x2b33d7 = _0x41c8c7;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x41c8c7);
    }
  }
  return _0x2b33d7;
}
function We(_0x6f4232, _0x101c8e, _0x4f7ff0, _0x35956a) {
  let _0xfd4d7 = false;
  for (let _0x50b5da = 0, _0x5e0182 = _0x101c8e.length; _0x50b5da < _0x5e0182; _0x50b5da++) {
    let _0x2a51bf = _0x101c8e[_0x50b5da];
    let _0x1365c6 = _0x4f7ff0 && _0x4f7ff0[_0x50b5da];
    let _0x584b5d;
    if (_0x2a51bf != null && _0x2a51bf !== true && _0x2a51bf !== false) {
      if ((_0x584b5d = typeof _0x2a51bf) == "object" && _0x2a51bf.nodeType) {
        _0x6f4232.push(_0x2a51bf);
      } else if (Array.isArray(_0x2a51bf)) {
        _0xfd4d7 = We(_0x6f4232, _0x2a51bf, _0x1365c6) || _0xfd4d7;
      } else if (_0x584b5d === "function") {
        if (_0x35956a) {
          while (typeof _0x2a51bf == "function") {
            _0x2a51bf = _0x2a51bf();
          }
          _0xfd4d7 = We(_0x6f4232, Array.isArray(_0x2a51bf) ? _0x2a51bf : [_0x2a51bf], Array.isArray(_0x1365c6) ? _0x1365c6 : [_0x1365c6]) || _0xfd4d7;
        } else {
          _0x6f4232.push(_0x2a51bf);
          _0xfd4d7 = true;
        }
      } else {
        const _0x5258f3 = String(_0x2a51bf);
        if (_0x1365c6 && _0x1365c6.nodeType === 3 && _0x1365c6.data === _0x5258f3) {
          _0x6f4232.push(_0x1365c6);
        } else {
          _0x6f4232.push(document.createTextNode(_0x5258f3));
        }
      }
    }
  }
  return _0xfd4d7;
}
function nn(_0x381f41, _0x368367, _0x3dc3f5 = null) {
  for (let _0xaa7191 = 0, _0x80c030 = _0x368367.length; _0xaa7191 < _0x80c030; _0xaa7191++) {
    _0x381f41.insertBefore(_0x368367[_0xaa7191], _0x3dc3f5);
  }
}
function Z(_0xdc19aa, _0x23a27b, _0x3966f4, _0x205c5f) {
  if (_0x3966f4 === undefined) {
    return _0xdc19aa.textContent = "";
  }
  const _0x528d30 = _0x205c5f || document.createTextNode("");
  if (_0x23a27b.length) {
    let _0x5d3ec2 = false;
    for (let _0x3fd4d3 = _0x23a27b.length - 1; _0x3fd4d3 >= 0; _0x3fd4d3--) {
      const _0x166eb5 = _0x23a27b[_0x3fd4d3];
      if (_0x528d30 !== _0x166eb5) {
        const _0x449102 = _0x166eb5.parentNode === _0xdc19aa;
        if (!_0x5d3ec2 && !_0x3fd4d3) {
          if (_0x449102) {
            _0xdc19aa.replaceChild(_0x528d30, _0x166eb5);
          } else {
            _0xdc19aa.insertBefore(_0x528d30, _0x3966f4);
          }
        } else if (_0x449102) {
          _0x166eb5.remove();
        }
      } else {
        _0x5d3ec2 = true;
      }
    }
  } else {
    _0xdc19aa.insertBefore(_0x528d30, _0x3966f4);
  }
  return [_0x528d30];
}
const Xn = "_App_ff2jw_1";
const Zn = {
  App: Xn
};
function Qn(_0x3cb142, _0x5cf53c) {
  const _0x48e898 = Rn(_0x5cf53c);
  return [_0x46ef02 => p(_0x48e898.Provider, {
    value: _0x3cb142(_0x46ef02),
    get children() {
      return _0x46ef02.children;
    }
  }), () => Ln(_0x48e898)];
}
const Xe = Symbol("store-raw");
const oe = Symbol("store-node");
function mn(_0x364d9e) {
  let _0x5d9bef = _0x364d9e[G];
  if (!_0x5d9bef && (Object.defineProperty(_0x364d9e, G, {
    value: _0x5d9bef = new Proxy(_0x364d9e, ei)
  }), !Array.isArray(_0x364d9e))) {
    const _0x41619d = Object.keys(_0x364d9e);
    const _0x5e3bbb = Object.getOwnPropertyDescriptors(_0x364d9e);
    for (let _0x480c20 = 0, _0x406675 = _0x41619d.length; _0x480c20 < _0x406675; _0x480c20++) {
      const _0x4074d0 = _0x41619d[_0x480c20];
      if (_0x5e3bbb[_0x4074d0].get) {
        Object.defineProperty(_0x364d9e, _0x4074d0, {
          enumerable: _0x5e3bbb[_0x4074d0].enumerable,
          get: _0x5e3bbb[_0x4074d0].get.bind(_0x5d9bef)
        });
      }
    }
  }
  return _0x5d9bef;
}
function $e(_0x8b0d06) {
  let _0x450e3b;
  return _0x8b0d06 != null && typeof _0x8b0d06 == "object" && (_0x8b0d06[G] || !(_0x450e3b = Object.getPrototypeOf(_0x8b0d06)) || _0x450e3b === Object.prototype || Array.isArray(_0x8b0d06));
}
function re(_0x525b30, _0x2f1851 = new Set()) {
  let _0x320151;
  let _0x5eb209;
  let _0x583249;
  let _0x4036d6;
  if (_0x320151 = _0x525b30 != null && _0x525b30[Xe]) {
    return _0x320151;
  }
  if (!$e(_0x525b30) || _0x2f1851.has(_0x525b30)) {
    return _0x525b30;
  }
  if (Array.isArray(_0x525b30)) {
    if (Object.isFrozen(_0x525b30)) {
      _0x525b30 = _0x525b30.slice(0);
    } else {
      _0x2f1851.add(_0x525b30);
    }
    for (let _0x2bc7c0 = 0, _0x5c8c6a = _0x525b30.length; _0x2bc7c0 < _0x5c8c6a; _0x2bc7c0++) {
      _0x583249 = _0x525b30[_0x2bc7c0];
      if ((_0x5eb209 = re(_0x583249, _0x2f1851)) !== _0x583249) {
        _0x525b30[_0x2bc7c0] = _0x5eb209;
      }
    }
  } else {
    if (Object.isFrozen(_0x525b30)) {
      _0x525b30 = Object.assign({}, _0x525b30);
    } else {
      _0x2f1851.add(_0x525b30);
    }
    const _0x477dd0 = Object.keys(_0x525b30);
    const _0x1ae48d = Object.getOwnPropertyDescriptors(_0x525b30);
    for (let _0x1ee525 = 0, _0x4581be = _0x477dd0.length; _0x1ee525 < _0x4581be; _0x1ee525++) {
      _0x4036d6 = _0x477dd0[_0x1ee525];
      if (!_0x1ae48d[_0x4036d6].get) {
        _0x583249 = _0x525b30[_0x4036d6];
        if ((_0x5eb209 = re(_0x583249, _0x2f1851)) !== _0x583249) {
          _0x525b30[_0x4036d6] = _0x5eb209;
        }
      }
    }
  }
  return _0x525b30;
}
function Ye(_0x19ed3d) {
  let _0x76c614 = _0x19ed3d[oe];
  if (!_0x76c614) {
    Object.defineProperty(_0x19ed3d, oe, {
      value: _0x76c614 = Object.create(null)
    });
  }
  return _0x76c614;
}
function Ze(_0x50dcc8, _0x4a3cf7, _0x5c07eb) {
  return _0x50dcc8[_0x4a3cf7] ||= kn(_0x5c07eb);
}
function Yn(_0x1f8b56, _0x4d1b2d) {
  const _0x16deff = Reflect.getOwnPropertyDescriptor(_0x1f8b56, _0x4d1b2d);
  if (!!_0x16deff && !_0x16deff.get && !!_0x16deff.configurable && _0x4d1b2d !== G && _0x4d1b2d !== oe) {
    delete _0x16deff.value;
    delete _0x16deff.writable;
    _0x16deff.get = () => _0x1f8b56[G][_0x4d1b2d];
  }
  return _0x16deff;
}
function wn(_0x306de9) {
  if (cn()) {
    const _0x3c0d5f = Ye(_0x306de9);
    (_0x3c0d5f._ ||= kn())();
  }
}
function Jn(_0x2e3113) {
  wn(_0x2e3113);
  return Reflect.ownKeys(_0x2e3113);
}
function kn(_0x5a3c61) {
  const [_0x596587, _0x1df965] = x(_0x5a3c61, {
    equals: false,
    internal: true
  });
  _0x596587.$ = _0x1df965;
  return _0x596587;
}
const ei = {
  get(_0x303055, _0x1cb79f, _0x4b1fab) {
    if (_0x1cb79f === Xe) {
      return _0x303055;
    }
    if (_0x1cb79f === G) {
      return _0x4b1fab;
    }
    if (_0x1cb79f === Ge) {
      wn(_0x303055);
      return _0x4b1fab;
    }
    const _0x2f4c44 = Ye(_0x303055);
    const _0x3835b0 = _0x2f4c44[_0x1cb79f];
    let _0x51a588 = _0x3835b0 ? _0x3835b0() : _0x303055[_0x1cb79f];
    if (_0x1cb79f === oe || _0x1cb79f === "__proto__") {
      return _0x51a588;
    }
    if (!_0x3835b0) {
      const _0x304f19 = Object.getOwnPropertyDescriptor(_0x303055, _0x1cb79f);
      if (cn() && (typeof _0x51a588 != "function" || _0x303055.hasOwnProperty(_0x1cb79f)) && (!_0x304f19 || !_0x304f19.get)) {
        _0x51a588 = Ze(_0x2f4c44, _0x1cb79f, _0x51a588)();
      }
    }
    if ($e(_0x51a588)) {
      return mn(_0x51a588);
    } else {
      return _0x51a588;
    }
  },
  has(_0x8527a5, _0x2571db) {
    if (_0x2571db === Xe || _0x2571db === G || _0x2571db === Ge || _0x2571db === oe || _0x2571db === "__proto__") {
      return true;
    } else {
      this.get(_0x8527a5, _0x2571db, _0x8527a5);
      return _0x2571db in _0x8527a5;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Jn,
  getOwnPropertyDescriptor: Yn
};
function be(_0xd3225, _0x2c4d1e, _0x7444d6, _0x492f01 = false) {
  if (!_0x492f01 && _0xd3225[_0x2c4d1e] === _0x7444d6) {
    return;
  }
  const _0x2c2203 = _0xd3225[_0x2c4d1e];
  const _0x521498 = _0xd3225.length;
  if (_0x7444d6 === undefined) {
    delete _0xd3225[_0x2c4d1e];
  } else {
    _0xd3225[_0x2c4d1e] = _0x7444d6;
  }
  let _0x4cec26 = Ye(_0xd3225);
  let _0x272da4;
  if (_0x272da4 = Ze(_0x4cec26, _0x2c4d1e, _0x2c2203)) {
    _0x272da4.$(() => _0x7444d6);
  }
  if (Array.isArray(_0xd3225) && _0xd3225.length !== _0x521498) {
    for (let _0x48bacd = _0xd3225.length; _0x48bacd < _0x521498; _0x48bacd++) {
      if (_0x272da4 = _0x4cec26[_0x48bacd]) {
        _0x272da4.$();
      }
    }
    if (_0x272da4 = Ze(_0x4cec26, "length", _0x521498)) {
      _0x272da4.$(_0xd3225.length);
    }
  }
  if (_0x272da4 = _0x4cec26._) {
    _0x272da4.$();
  }
}
function Cn(_0x46e5e5, _0x145423) {
  const _0x57c21e = Object.keys(_0x145423);
  for (let _0x458bf3 = 0; _0x458bf3 < _0x57c21e.length; _0x458bf3 += 1) {
    const _0x238dcc = _0x57c21e[_0x458bf3];
    be(_0x46e5e5, _0x238dcc, _0x145423[_0x238dcc]);
  }
}
function ti(_0x595880, _0x671b5a) {
  if (typeof _0x671b5a == "function") {
    _0x671b5a = _0x671b5a(_0x595880);
  }
  _0x671b5a = re(_0x671b5a);
  if (Array.isArray(_0x671b5a)) {
    if (_0x595880 === _0x671b5a) {
      return;
    }
    let _0x3d702f = 0;
    let _0x40056e = _0x671b5a.length;
    for (; _0x3d702f < _0x40056e; _0x3d702f++) {
      const _0x5ceef6 = _0x671b5a[_0x3d702f];
      if (_0x595880[_0x3d702f] !== _0x5ceef6) {
        be(_0x595880, _0x3d702f, _0x5ceef6);
      }
    }
    be(_0x595880, "length", _0x40056e);
  } else {
    Cn(_0x595880, _0x671b5a);
  }
}
function ne(_0x3e2f9f, _0x2d29d5, _0x3d0c52 = []) {
  let _0x158ee8;
  let _0x4c03e2 = _0x3e2f9f;
  if (_0x2d29d5.length > 1) {
    _0x158ee8 = _0x2d29d5.shift();
    const _0x306102 = typeof _0x158ee8;
    const _0x1cb1ad = Array.isArray(_0x3e2f9f);
    if (Array.isArray(_0x158ee8)) {
      for (let _0x49920e = 0; _0x49920e < _0x158ee8.length; _0x49920e++) {
        ne(_0x3e2f9f, [_0x158ee8[_0x49920e]].concat(_0x2d29d5), _0x3d0c52);
      }
      return;
    } else if (_0x1cb1ad && _0x306102 === "function") {
      for (let _0x552890 = 0; _0x552890 < _0x3e2f9f.length; _0x552890++) {
        if (_0x158ee8(_0x3e2f9f[_0x552890], _0x552890)) {
          ne(_0x3e2f9f, [_0x552890].concat(_0x2d29d5), _0x3d0c52);
        }
      }
      return;
    } else if (_0x1cb1ad && _0x306102 === "object") {
      const {
        from: _0x1a4559 = 0,
        to: _0x4a5f07 = _0x3e2f9f.length - 1,
        by: _0x21abde = 1
      } = _0x158ee8;
      for (let _0x469588 = _0x1a4559; _0x469588 <= _0x4a5f07; _0x469588 += _0x21abde) {
        ne(_0x3e2f9f, [_0x469588].concat(_0x2d29d5), _0x3d0c52);
      }
      return;
    } else if (_0x2d29d5.length > 1) {
      ne(_0x3e2f9f[_0x158ee8], _0x2d29d5, [_0x158ee8].concat(_0x3d0c52));
      return;
    }
    _0x4c03e2 = _0x3e2f9f[_0x158ee8];
    _0x3d0c52 = [_0x158ee8].concat(_0x3d0c52);
  }
  let _0x1dfbe7 = _0x2d29d5[0];
  if ((typeof _0x1dfbe7 != "function" || !(_0x1dfbe7 = _0x1dfbe7(_0x4c03e2, _0x3d0c52), _0x1dfbe7 === _0x4c03e2)) && (_0x158ee8 !== undefined || _0x1dfbe7 != null)) {
    _0x1dfbe7 = re(_0x1dfbe7);
    if (_0x158ee8 === undefined || $e(_0x4c03e2) && $e(_0x1dfbe7) && !Array.isArray(_0x1dfbe7)) {
      Cn(_0x4c03e2, _0x1dfbe7);
    } else {
      be(_0x3e2f9f, _0x158ee8, _0x1dfbe7);
    }
  }
}
function ni(...[_0x3520fe, _0x435e27]) {
  const _0x118f40 = re(_0x3520fe || {});
  const _0x3b87c7 = Array.isArray(_0x118f40);
  const _0x13096f = mn(_0x118f40);
  function _0x5d40cf(..._0x13982) {
    En(() => {
      if (_0x3b87c7 && _0x13982.length === 1) {
        ti(_0x118f40, _0x13982[0]);
      } else {
        ne(_0x118f40, _0x13982);
      }
    });
  }
  return [_0x13096f, _0x5d40cf];
}
const on = {
  showCreator: false,
  showBook: false,
  bookData: [],
  bookTitle: "",
  bookAuthor: "",
  bookBlurb: "",
  visibleBookData: [],
  visibleBookSpread: 0
};
const [ii, me] = Qn(() => {
  const _0x39c27d = on;
  const [_0x3f9ee0, _0x28dbfb] = ni(_0x39c27d);
  return {
    state: _0x3f9ee0,
    setState: _0x28dbfb
  };
}, {
  state: on,
  setState: () => {}
});
const oi = "_main_1ltqo_1";
const ri = "_page_1ltqo_4";
const li = "_pageBackground_1ltqo_10";
const si = "_pageImage_1ltqo_18";
const ai = "_pageOverlay_1ltqo_28";
const ui = "_middleShadow_1ltqo_40";
const Q = {
  main: oi,
  page: ri,
  pageBackground: li,
  pageImage: si,
  pageOverlay: ai,
  middleShadow: ui
};
const fi = z("<svg class=\"absolute bottom-10 right-0 z-0 translate-x-[75%] cursor-pointer drop-shadow-md transition-transform hover:translate-x-[100%]\" width=\"6.48vh\" height=\"6.11vh\" viewBox=\"0 0 70 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0L69.5 0L47 33L69.5 66H0V0Z\" fill=\"url(#paint0_linear_5569_11)\"></path><defs><linearGradient id=\"paint0_linear_5569_11\" x1=\"69.5\" y1=\"33\" x2=\"-33.5\" y2=\"33\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#034A38\">");
const ci = z("<svg class=\"absolute bottom-10 left-0 z-0 -translate-x-[85%] rotate-180 cursor-pointer drop-shadow-md transition-transform hover:-translate-x-[100%]\" width=\"6.48vh\" height=\"6.11vh\" viewBox=\"0 0 70 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0L69.5 0L47 33L69.5 66H0V0Z\" fill=\"url(#paint0_linear_5569_11)\"></path><defs><linearGradient id=\"paint0_linear_5569_11\" x1=\"69.5\" y1=\"33\" x2=\"-33.5\" y2=\"33\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#034A38\">");
const di = z("<img>");
const Sn = z("<div>");
const vi = z("<div><div><div>");
const _i = z("<div class=\"absolute left-0 top-0 h-[1px] w-[1px] overflow-hidden\"><img class=\"absolute\"><img class=\"absolute\">");
const rn = ["rotate-0", "rotate-180", "rotate-180", "rotate-0"];
function ln({
  side: _0x3f05ad
}) {
  const {
    state: _0x949149,
    setState: _0x34cffb
  } = me();
  const [_0x11d46e, _0x395fe4] = x("");
  const [_0x3da452, _0x50e125] = x("");
  const [_0x49b8d5, _0x3e29f1] = x(false);
  const _0x5a5542 = _0x55fc28 => {
    const _0x35b091 = _0x949149.visibleBookData;
    if (!_0x35b091 || !_0x35b091[0]) {
      return "";
    } else if (_0x55fc28 >= _0x35b091.length) {
      return _0x35b091[0][1];
    } else {
      return _0x35b091[_0x55fc28]?.[_0x3f05ad === "left" ? 0 : 1] || "";
    }
  };
  ve(() => {
    _0x3e29f1(false);
    _0x395fe4(_0x5a5542(_0x949149.visibleBookSpread));
    const _0x22b9a3 = _0x949149.visibleBookSpread;
    if (_0x3f05ad === "left") {
      _0x50e125(_0x22b9a3 === 0 ? "rounded-r-[0.75rem] rounded-l-[.25rem]" : "rounded-l-[0.75rem] rounded-r-[.25rem]");
    } else if (_0x22b9a3 >= _0x949149.visibleBookData.length) {
      _0x50e125("rounded-l-[0.75rem] rounded-r-[.25rem]");
    } else {
      _0x50e125("rounded-r-[0.75rem] rounded-l-[.25rem]");
    }
  });
  const _0x4a4ef9 = _0x318b73 => {
    if (_0x318b73 === "left") {
      _0x34cffb("visibleBookSpread", Math.max(0, _0x949149.visibleBookSpread - 2));
    } else {
      _0x34cffb("visibleBookSpread", Math.min(_0x949149.visibleBookData.length + _0x949149.visibleBookData.length % 2, _0x949149.visibleBookSpread + 2));
    }
  };
  return (() => {
    const _0xd489cd = vi();
    const _0xaba6f9 = _0xd489cd.firstChild;
    const _0x25bfc9 = _0xaba6f9.firstChild;
    D(_0xd489cd, p(V, {
      get when() {
        return (_0x3f05ad === "right" || _0x949149.visibleBookSpread === 0) && _0x949149.visibleBookSpread < _0x949149.visibleBookData.length;
      },
      get children() {
        const _0xdececb = fi();
        _0xdececb.$$click = () => _0x4a4ef9("right");
        return _0xdececb;
      }
    }), _0xaba6f9);
    D(_0xd489cd, p(V, {
      get when() {
        return (_0x3f05ad === "left" || _0x949149.visibleBookSpread >= _0x949149.visibleBookData.length) && _0x949149.visibleBookSpread !== 0;
      },
      get children() {
        const _0x19bc42 = ci();
        _0x19bc42.$$click = () => _0x4a4ef9("left");
        return _0x19bc42;
      }
    }), _0xaba6f9);
    D(_0xaba6f9, p(V, {
      get when() {
        return _0x11d46e() !== "";
      },
      get children() {
        const _0x2b6376 = di();
        _0x2b6376.addEventListener("error", () => _0x3e29f1(true));
        w(_0x493da4 => {
          const _0x138485 = Q.pageImage + " " + (_0x49b8d5() ? "hidden" : "block");
          const _0x59d9bf = _0x11d46e();
          if (_0x138485 !== _0x493da4._v$) {
            c(_0x2b6376, _0x493da4._v$ = _0x138485);
          }
          if (_0x59d9bf !== _0x493da4._v$2) {
            ie(_0x2b6376, "src", _0x493da4._v$2 = _0x59d9bf);
          }
          return _0x493da4;
        }, {
          _v$: undefined,
          _v$2: undefined
        });
        return _0x2b6376;
      }
    }), _0x25bfc9);
    D(_0xd489cd, p(V, {
      get when() {
        return _0x3f05ad === "left" && _0x949149.visibleBookSpread !== 0;
      },
      get children() {
        const _0x2df0fc = Sn();
        w(() => c(_0x2df0fc, Q.middleShadow));
        return _0x2df0fc;
      }
    }), null);
    w(_0x1b2edd => {
      const _0x5601e1 = Q.page + " " + _0x3da452();
      const _0x386688 = Q.pageBackground + " " + _0x3da452();
      const _0x21ee31 = Q.pageOverlay + " " + rn[_0x949149.visibleBookSpread % rn.length] + " rounded-[1rem]";
      if (_0x5601e1 !== _0x1b2edd._v$3) {
        c(_0xd489cd, _0x1b2edd._v$3 = _0x5601e1);
      }
      if (_0x386688 !== _0x1b2edd._v$4) {
        c(_0xaba6f9, _0x1b2edd._v$4 = _0x386688);
      }
      if (_0x21ee31 !== _0x1b2edd._v$5) {
        c(_0x25bfc9, _0x1b2edd._v$5 = _0x21ee31);
      }
      return _0x1b2edd;
    }, {
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return _0xd489cd;
  })();
}
function gi() {
  const {
    state: _0x5eaeff
  } = me();
  return (() => {
    const _0x2a714e = Sn();
    D(_0x2a714e, p(V, {
      get when() {
        return _0x5eaeff.visibleBookSpread < _0x5eaeff.visibleBookData.length;
      },
      get children() {
        return p(ln, {
          side: "left"
        });
      }
    }), null);
    D(_0x2a714e, p(V, {
      get when() {
        return _0x5eaeff.visibleBookSpread !== 0;
      },
      get children() {
        return p(ln, {
          side: "right"
        });
      }
    }), null);
    D(_0x2a714e, p(Hn, {
      get each() {
        return _0x5eaeff.visibleBookData;
      },
      children: _0x2dd48b => _0x2dd48b ? (() => {
        const _0xa17900 = _i();
        const _0x516206 = _0xa17900.firstChild;
        const _0x199efc = _0x516206.nextSibling;
        w(_0x35ab9f => {
          const _0x139265 = _0x2dd48b[0];
          const _0x2a8e8f = _0x2dd48b[1];
          if (_0x139265 !== _0x35ab9f._v$6) {
            ie(_0x516206, "src", _0x35ab9f._v$6 = _0x139265);
          }
          if (_0x2a8e8f !== _0x35ab9f._v$7) {
            ie(_0x199efc, "src", _0x35ab9f._v$7 = _0x2a8e8f);
          }
          return _0x35ab9f;
        }, {
          _v$6: undefined,
          _v$7: undefined
        });
        return _0xa17900;
      })() : null
    }), null);
    w(() => c(_0x2a714e, Q.main));
    return _0x2a714e;
  })();
}
pn(["click"]);
const hi = "_main_9ay4u_1";
const $i = "_backgroundEllipse_9ay4u_10";
const bi = "_borderContainer_9ay4u_23";
const yi = "_container_9ay4u_31";
const pi = "_title_9ay4u_42";
const mi = "_description_9ay4u_51";
const wi = "_horizontalDivider_9ay4u_58";
const ki = "_horizontalDividerRectangle_9ay4u_67";
const Ci = "_verticalDivider_9ay4u_77";
const Si = "_verticalDividerRectangle_9ay4u_85";
const Ai = "_section_9ay4u_95";
const xi = "_leftContainer_9ay4u_101";
const Ii = "_bookInfoDiv_9ay4u_129";
const Di = "_bookInfoContainer_9ay4u_140";
const Bi = "_bookInfoTitle_9ay4u_145";
const Ti = "_bookInfoInput_9ay4u_153";
const Oi = "_bookInfoTextArea_9ay4u_170";
const Ei = "_containerTitle_9ay4u_190";
const Pi = "_rightContainer_9ay4u_203";
const Ri = "_spreadContainer_9ay4u_232";
const Li = "_pageContainer_9ay4u_239";
const Ni = "_pageUrlInput_9ay4u_246";
const Mi = "_pageTitle_9ay4u_266";
const Ui = "_pageImageContainer_9ay4u_274";
const ji = "_pageImage_9ay4u_274";
const zi = "_pageImageOverlay_9ay4u_284";
const qi = "_buttonRowContainer_9ay4u_308";
const Hi = "_buttonContainer_9ay4u_314";
const Fi = "_button_9ay4u_308";
const Vi = "_tooltip_9ay4u_350";
const d = {
  main: hi,
  backgroundEllipse: $i,
  borderContainer: bi,
  container: yi,
  title: pi,
  description: mi,
  horizontalDivider: wi,
  horizontalDividerRectangle: ki,
  verticalDivider: Ci,
  verticalDividerRectangle: Si,
  section: Ai,
  leftContainer: xi,
  bookInfoDiv: Ii,
  bookInfoContainer: Di,
  bookInfoTitle: Bi,
  bookInfoInput: Ti,
  bookInfoTextArea: Oi,
  containerTitle: Ei,
  rightContainer: Pi,
  spreadContainer: Ri,
  pageContainer: Li,
  pageUrlInput: Ni,
  pageTitle: Mi,
  pageImageContainer: Ui,
  pageImage: ji,
  pageImageOverlay: zi,
  buttonRowContainer: qi,
  buttonContainer: Hi,
  button: Fi,
  tooltip: Vi
};
const Gi = z("<div><p>");
const Ki = z("<div><div></div><div></div><div><div>Create Book Reference</div><div>Create the reference copy for your next Los Santos Times bestseller.</div><div><div></div></div><div><div><div><div><div>Book Title:</div></div><input></div><div><div><div>Book Author:</div></div><input></div><div><div><div>Book Blurb:</div></div><textarea></textarea></div></div><div><div>Book Spread</div><div></div><div><div><div></div><div><img><div>Page Size<br>W: 600px<br>H: 700px<br>Ratio: 6:7</div></div><input placeholder=\"Image URL...\"></div><div><div></div><div><img><div>Page Size<br>W: 600px<br>H: 700px<br>Ratio: 6:7</div></div><input placeholder=\"Image URL...\"></div></div><div></div><div><div><button><span class=\"material-symbols-rounded\">arrow_back</button><button><span class=\"material-symbols-rounded\">arrow_forward</button></div><div><button>Create Reference");
const Wi = 0;
const Xi = 100;
const Zi = 1200;
const Qi = 1400;
const sn = "https://placehold.co/600x700";
function Yi() {
  const {
    state: _0x5aeaf2,
    setState: _0x41ee85
  } = me();
  const [_0x2b3386, _0x5ade83] = x(_0x5aeaf2.bookTitle);
  const [_0x4d7ff0, _0x599864] = x(_0x5aeaf2.bookAuthor);
  const [_0x3bc182, _0x5dbea5] = x(_0x5aeaf2.bookBlurb);
  const [_0x2dd730, _0x324313] = x(0);
  const [_0x5a4c66, _0x3a7708] = x("");
  const [_0x1f745a, _0x4d4922] = x("");
  const [_0x2f372d, _0x404a5e] = x(false);
  const [_0x42e582, _0x44dfc7] = x("");
  const [_0x34b350, _0xb65dba] = x(null);
  const [_0x55a6f5, _0xd4eb9e] = x(false);
  const _0x23355f = () => {
    const _0x15bb3f = _0x34b350();
    if (!_0x15bb3f) {
      return {
        x: 0,
        y: 0
      };
    }
    const _0x5ad235 = _0x15bb3f.getBoundingClientRect();
    return {
      x: _0x5ad235.x + _0x5ad235.width / 2,
      y: _0x5ad235.y
    };
  };
  const _0x44bd28 = (_0x1efe11, _0x555f75, _0x42fea) => {
    const _0x99f3e4 = [..._0x5aeaf2.bookData];
    let _0x4211a8 = _0x99f3e4[_0x555f75] || ["", ""];
    if (_0x42fea === 0) {
      _0x4211a8 = [_0x1efe11, _0x4211a8[1]];
    } else {
      _0x4211a8 = [_0x4211a8[0], _0x1efe11];
    }
    _0x99f3e4[_0x555f75] = _0x4211a8;
    _0x41ee85({
      bookData: _0x99f3e4
    });
  };
  const _0x366d51 = async () => {
    if (_0x2b3386()) {
      if (_0x2b3386().length > 50) {
        _0x44dfc7("The book title is too long.");
        return false;
      }
      if (_0x2b3386().length < 5) {
        _0x44dfc7("The book title is too short.");
        return false;
      }
    } else {
      _0x44dfc7("The book must have a title.");
      return false;
    }
    if (_0x4d7ff0()) {
      if (_0x4d7ff0().length > 50) {
        _0x44dfc7("The book author is too long.");
        return false;
      }
      if (_0x4d7ff0().length < 2) {
        _0x44dfc7("The book author is too short.");
        return false;
      }
    } else {
      _0x44dfc7("The book must have an author.");
      return false;
    }
    if (!_0x5aeaf2.bookData[0] || !_0x5aeaf2.bookData[0][0] || !_0x5aeaf2.bookData[0][1]) {
      _0x44dfc7("The book must have a front and back cover image.");
      return false;
    }
    const _0xc0b779 = [];
    for (let _0x47bb48 = 0; _0x47bb48 < _0x5aeaf2.bookData.length; _0x47bb48++) {
      const _0x54abbd = _0x5aeaf2.bookData[_0x47bb48];
      if (!_0x54abbd || !_0x54abbd[0] && !_0x54abbd[1]) {
        continue;
      }
      const _0x42ea13 = _0x47bb48 === 0 ? ["the front cover", "the back cover"] : ["page " + (_0x47bb48 - 1), "page " + _0x47bb48];
      for (let _0x30a9bd = 0; _0x47bb48 < 2; _0x47bb48++) {
        if (!_0x54abbd[_0x30a9bd]) {
          continue;
        }
        const _0x581cd2 = new Promise(_0x3c666d => {
          const _0x18756f = new Image();
          _0x18756f.onload = () => {
            if (_0x18756f.width > Zi || _0x18756f.height > Qi) {
              _0x44dfc7("The image on " + _0x42ea13[_0x30a9bd] + " is too large.");
              _0x3c666d(false);
              return;
            }
            _0x3c666d(true);
          };
          _0x18756f.onerror = () => {
            _0x44dfc7("An image on " + _0x42ea13[_0x30a9bd] + " failed to load.");
            _0x3c666d(false);
          };
          _0x18756f.src = _0x54abbd[_0x30a9bd];
        });
        _0xc0b779.push(_0x581cd2);
      }
    }
    if (_0xc0b779.length === 0) {
      _0x44dfc7("The book must have a front and back cover image.");
      return false;
    } else {
      _0x44dfc7("");
      return (await Promise.all(_0xc0b779)).every(_0x1b7fa1 => _0x1b7fa1);
    }
  };
  const _0x25a552 = async () => {
    if (await _0x366d51()) {
      _0x31dc3f.execute("book:createBookReference", _0x2b3386(), _0x4d7ff0(), _0x3bc182(), _0x5aeaf2.bookData);
    }
  };
  ve(async () => {
    const _0x579721 = _0x5aeaf2.bookData[_0x2dd730()] || ["", ""];
    _0x3a7708(_0x579721[0]);
    _0x4d4922(_0x579721[1]);
    const _0x558f20 = await _0x366d51();
    _0x404a5e(_0x558f20);
  });
  ve(() => {
    _0x41ee85({
      bookTitle: _0x2b3386(),
      bookAuthor: _0x4d7ff0(),
      bookBlurb: _0x3bc182()
    });
  });
  return (() => {
    const _0x2f92d2 = Ki();
    const _0x2c3e8f = _0x2f92d2.firstChild;
    const _0x111c20 = _0x2c3e8f.nextSibling;
    const _0x614815 = _0x111c20.nextSibling;
    const _0x4b9374 = _0x614815.firstChild;
    const _0x572724 = _0x4b9374.nextSibling;
    const _0x2806cd = _0x572724.nextSibling;
    const _0x3e50a1 = _0x2806cd.firstChild;
    const _0x33018f = _0x2806cd.nextSibling;
    const _0x2dd132 = _0x33018f.firstChild;
    const _0x186ae6 = _0x2dd132.firstChild;
    const _0x33c3fd = _0x186ae6.firstChild;
    const _0x4b9035 = _0x33c3fd.firstChild;
    const _0x216f5d = _0x33c3fd.nextSibling;
    const _0x3e5a2c = _0x186ae6.nextSibling;
    const _0x5093f1 = _0x3e5a2c.firstChild;
    const _0x3cffb8 = _0x5093f1.firstChild;
    const _0x5969a0 = _0x5093f1.nextSibling;
    const _0x408ba5 = _0x3e5a2c.nextSibling;
    const _0x482880 = _0x408ba5.firstChild;
    const _0x2d4c72 = _0x482880.firstChild;
    const _0x14e625 = _0x482880.nextSibling;
    const _0x3187fe = _0x2dd132.nextSibling;
    const _0x13e2b7 = _0x3187fe.firstChild;
    const _0xfb7f7e = _0x13e2b7.nextSibling;
    const _0x4c3803 = _0xfb7f7e.nextSibling;
    const _0x32c1f6 = _0x4c3803.firstChild;
    const _0xf597d = _0x32c1f6.firstChild;
    const _0x521284 = _0xf597d.nextSibling;
    const _0x10e4fe = _0x521284.firstChild;
    const _0x5d88e8 = _0x10e4fe.nextSibling;
    const _0x252651 = _0x521284.nextSibling;
    const _0x451789 = _0x32c1f6.nextSibling;
    const _0x4bb567 = _0x451789.firstChild;
    const _0x4116cb = _0x4bb567.nextSibling;
    const _0x18e8b3 = _0x4116cb.firstChild;
    const _0xebe10b = _0x18e8b3.nextSibling;
    const _0x599e01 = _0x4116cb.nextSibling;
    const _0x30b0fb = _0x4c3803.nextSibling;
    const _0xec4d64 = _0x30b0fb.nextSibling;
    const _0xb22171 = _0xec4d64.firstChild;
    const _0x175fad = _0xb22171.firstChild;
    const _0x49b369 = _0x175fad.nextSibling;
    const _0x26406b = _0xb22171.nextSibling;
    const _0x57c0cd = _0x26406b.firstChild;
    _0x216f5d.$$input = _0x1142c9 => _0x5ade83(_0x1142c9.currentTarget.value);
    _0x5969a0.$$input = _0x503842 => _0x599864(_0x503842.currentTarget.value);
    _0x14e625.$$input = _0x208dcc => _0x5dbea5(_0x208dcc.currentTarget.value);
    D(_0xf597d, (() => {
      const _0x2c7c35 = M(() => _0x2dd730() === 0);
      return () => _0x2c7c35() ? "Front Cover" : "Page #" + (_0x2dd730() - 1);
    })());
    _0x252651.$$input = _0xb71a3c => {
      _0x44bd28(_0xb71a3c.currentTarget.value, _0x2dd730(), 0);
    };
    D(_0x4bb567, (() => {
      const _0x1f1418 = M(() => _0x2dd730() === 0);
      return () => _0x1f1418() ? "Back Cover" : "Page #" + _0x2dd730();
    })());
    _0x599e01.$$input = _0x2a569a => {
      _0x44bd28(_0x2a569a.currentTarget.value, _0x2dd730(), 1);
    };
    _0x175fad.$$click = () => _0x324313(_0x2dd730() - 2);
    _0x49b369.$$click = () => _0x324313(_0x2dd730() + 2);
    Kn(_0xb65dba, _0x57c0cd);
    _0x57c0cd.$$click = _0x25a552;
    _0x57c0cd.addEventListener("mouseleave", () => _0xd4eb9e(false));
    _0x57c0cd.addEventListener("mouseenter", () => _0xd4eb9e(true));
    D(_0x26406b, p(V, {
      get when() {
        return M(() => !!_0x55a6f5())() && _0x42e582();
      },
      get children() {
        const _0x4214c7 = Gi();
        const _0x49354a = _0x4214c7.firstChild;
        D(_0x49354a, _0x42e582);
        w(_0x1ea0a1 => {
          const _0x4759b3 = d.tooltip;
          const _0x12399a = _0x23355f().y - 10 + "px";
          const _0x81a44 = _0x23355f().x + "px";
          if (_0x4759b3 !== _0x1ea0a1._v$) {
            c(_0x4214c7, _0x1ea0a1._v$ = _0x4759b3);
          }
          if (_0x12399a !== _0x1ea0a1._v$2) {
            if ((_0x1ea0a1._v$2 = _0x12399a) != null) {
              _0x4214c7.style.setProperty("top", _0x12399a);
            } else {
              _0x4214c7.style.removeProperty("top");
            }
          }
          if (_0x81a44 !== _0x1ea0a1._v$3) {
            if ((_0x1ea0a1._v$3 = _0x81a44) != null) {
              _0x4214c7.style.setProperty("left", _0x81a44);
            } else {
              _0x4214c7.style.removeProperty("left");
            }
          }
          return _0x1ea0a1;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined
        });
        return _0x4214c7;
      }
    }), null);
    w(_0x4a3153 => {
      const _0x1412a1 = d.main;
      const _0x41d7b4 = d.backgroundEllipse;
      const _0x15009e = d.borderContainer;
      const _0x3239ed = d.container;
      const _0x5d7014 = d.title;
      const _0x4f5e75 = d.description;
      const _0x1848f5 = d.horizontalDivider;
      const _0x583e84 = d.horizontalDividerRectangle;
      const _0xe1a6a3 = d.section;
      const _0x22ca00 = d.leftContainer;
      const _0x4f10c6 = d.bookInfoDiv;
      const _0x49de17 = d.bookInfoContainer;
      const _0x10f385 = d.bookInfoTitle;
      const _0x3f47a1 = d.bookInfoInput;
      const _0x2de8f5 = d.bookInfoDiv;
      const _0x2101b2 = d.bookInfoContainer;
      const _0x255709 = d.bookInfoTitle;
      const _0x4e2a1e = d.bookInfoInput;
      const _0x5904e9 = d.bookInfoDiv + " flex-grow";
      const _0x1d5bea = d.bookInfoContainer;
      const _0xaebd25 = d.bookInfoTitle;
      const _0x1cfd31 = d.bookInfoTextArea;
      const _0x4384aa = d.rightContainer;
      const _0x2b8f3d = d.containerTitle;
      const _0x315a99 = d.horizontalDivider;
      const _0x3ad9b1 = d.spreadContainer;
      const _0x397fdb = d.pageContainer;
      const _0x4af08b = d.pageTitle;
      const _0x1dc08c = d.pageImageContainer;
      const _0x583b79 = d.pageImage;
      const _0x3efd4a = _0x5a4c66() || sn;
      const _0x4f01bc = d.pageImageOverlay;
      const _0x562e68 = d.pageUrlInput;
      const _0x1ed563 = d.pageContainer;
      const _0x49f8f2 = d.pageTitle;
      const _0x4158bb = d.pageImageContainer;
      const _0x50a59f = d.pageImage;
      const _0x42c26c = _0x1f745a() || sn;
      const _0x6607fb = d.pageImageOverlay;
      const _0x52d7a6 = d.pageUrlInput;
      const _0x4da3f8 = d.horizontalDivider;
      const _0x38dc9d = d.buttonRowContainer;
      const _0x273711 = d.buttonContainer;
      const _0x151618 = d.button;
      const _0x575bbe = _0x2dd730() <= Wi;
      const _0x363c3a = d.button;
      const _0x4f97bc = _0x2dd730() >= Xi;
      const _0x1fa78c = d.buttonContainer + " absolute right-4";
      const _0x2a887e = d.button;
      const _0x1b57ec = !_0x2f372d();
      if (_0x1412a1 !== _0x4a3153._v$4) {
        c(_0x2f92d2, _0x4a3153._v$4 = _0x1412a1);
      }
      if (_0x41d7b4 !== _0x4a3153._v$5) {
        c(_0x2c3e8f, _0x4a3153._v$5 = _0x41d7b4);
      }
      if (_0x15009e !== _0x4a3153._v$6) {
        c(_0x111c20, _0x4a3153._v$6 = _0x15009e);
      }
      if (_0x3239ed !== _0x4a3153._v$7) {
        c(_0x614815, _0x4a3153._v$7 = _0x3239ed);
      }
      if (_0x5d7014 !== _0x4a3153._v$8) {
        c(_0x4b9374, _0x4a3153._v$8 = _0x5d7014);
      }
      if (_0x4f5e75 !== _0x4a3153._v$9) {
        c(_0x572724, _0x4a3153._v$9 = _0x4f5e75);
      }
      if (_0x1848f5 !== _0x4a3153._v$10) {
        c(_0x2806cd, _0x4a3153._v$10 = _0x1848f5);
      }
      if (_0x583e84 !== _0x4a3153._v$11) {
        c(_0x3e50a1, _0x4a3153._v$11 = _0x583e84);
      }
      if (_0xe1a6a3 !== _0x4a3153._v$12) {
        c(_0x33018f, _0x4a3153._v$12 = _0xe1a6a3);
      }
      if (_0x22ca00 !== _0x4a3153._v$13) {
        c(_0x2dd132, _0x4a3153._v$13 = _0x22ca00);
      }
      if (_0x4f10c6 !== _0x4a3153._v$14) {
        c(_0x186ae6, _0x4a3153._v$14 = _0x4f10c6);
      }
      if (_0x49de17 !== _0x4a3153._v$15) {
        c(_0x33c3fd, _0x4a3153._v$15 = _0x49de17);
      }
      if (_0x10f385 !== _0x4a3153._v$16) {
        c(_0x4b9035, _0x4a3153._v$16 = _0x10f385);
      }
      if (_0x3f47a1 !== _0x4a3153._v$17) {
        c(_0x216f5d, _0x4a3153._v$17 = _0x3f47a1);
      }
      if (_0x2de8f5 !== _0x4a3153._v$18) {
        c(_0x3e5a2c, _0x4a3153._v$18 = _0x2de8f5);
      }
      if (_0x2101b2 !== _0x4a3153._v$19) {
        c(_0x5093f1, _0x4a3153._v$19 = _0x2101b2);
      }
      if (_0x255709 !== _0x4a3153._v$20) {
        c(_0x3cffb8, _0x4a3153._v$20 = _0x255709);
      }
      if (_0x4e2a1e !== _0x4a3153._v$21) {
        c(_0x5969a0, _0x4a3153._v$21 = _0x4e2a1e);
      }
      if (_0x5904e9 !== _0x4a3153._v$22) {
        c(_0x408ba5, _0x4a3153._v$22 = _0x5904e9);
      }
      if (_0x1d5bea !== _0x4a3153._v$23) {
        c(_0x482880, _0x4a3153._v$23 = _0x1d5bea);
      }
      if (_0xaebd25 !== _0x4a3153._v$24) {
        c(_0x2d4c72, _0x4a3153._v$24 = _0xaebd25);
      }
      if (_0x1cfd31 !== _0x4a3153._v$25) {
        c(_0x14e625, _0x4a3153._v$25 = _0x1cfd31);
      }
      if (_0x4384aa !== _0x4a3153._v$26) {
        c(_0x3187fe, _0x4a3153._v$26 = _0x4384aa);
      }
      if (_0x2b8f3d !== _0x4a3153._v$27) {
        c(_0x13e2b7, _0x4a3153._v$27 = _0x2b8f3d);
      }
      if (_0x315a99 !== _0x4a3153._v$28) {
        c(_0xfb7f7e, _0x4a3153._v$28 = _0x315a99);
      }
      if (_0x3ad9b1 !== _0x4a3153._v$29) {
        c(_0x4c3803, _0x4a3153._v$29 = _0x3ad9b1);
      }
      if (_0x397fdb !== _0x4a3153._v$30) {
        c(_0x32c1f6, _0x4a3153._v$30 = _0x397fdb);
      }
      if (_0x4af08b !== _0x4a3153._v$31) {
        c(_0xf597d, _0x4a3153._v$31 = _0x4af08b);
      }
      if (_0x1dc08c !== _0x4a3153._v$32) {
        c(_0x521284, _0x4a3153._v$32 = _0x1dc08c);
      }
      if (_0x583b79 !== _0x4a3153._v$33) {
        c(_0x10e4fe, _0x4a3153._v$33 = _0x583b79);
      }
      if (_0x3efd4a !== _0x4a3153._v$34) {
        ie(_0x10e4fe, "src", _0x4a3153._v$34 = _0x3efd4a);
      }
      if (_0x4f01bc !== _0x4a3153._v$35) {
        c(_0x5d88e8, _0x4a3153._v$35 = _0x4f01bc);
      }
      if (_0x562e68 !== _0x4a3153._v$36) {
        c(_0x252651, _0x4a3153._v$36 = _0x562e68);
      }
      if (_0x1ed563 !== _0x4a3153._v$37) {
        c(_0x451789, _0x4a3153._v$37 = _0x1ed563);
      }
      if (_0x49f8f2 !== _0x4a3153._v$38) {
        c(_0x4bb567, _0x4a3153._v$38 = _0x49f8f2);
      }
      if (_0x4158bb !== _0x4a3153._v$39) {
        c(_0x4116cb, _0x4a3153._v$39 = _0x4158bb);
      }
      if (_0x50a59f !== _0x4a3153._v$40) {
        c(_0x18e8b3, _0x4a3153._v$40 = _0x50a59f);
      }
      if (_0x42c26c !== _0x4a3153._v$41) {
        ie(_0x18e8b3, "src", _0x4a3153._v$41 = _0x42c26c);
      }
      if (_0x6607fb !== _0x4a3153._v$42) {
        c(_0xebe10b, _0x4a3153._v$42 = _0x6607fb);
      }
      if (_0x52d7a6 !== _0x4a3153._v$43) {
        c(_0x599e01, _0x4a3153._v$43 = _0x52d7a6);
      }
      if (_0x4da3f8 !== _0x4a3153._v$44) {
        c(_0x30b0fb, _0x4a3153._v$44 = _0x4da3f8);
      }
      if (_0x38dc9d !== _0x4a3153._v$45) {
        c(_0xec4d64, _0x4a3153._v$45 = _0x38dc9d);
      }
      if (_0x273711 !== _0x4a3153._v$46) {
        c(_0xb22171, _0x4a3153._v$46 = _0x273711);
      }
      if (_0x151618 !== _0x4a3153._v$47) {
        c(_0x175fad, _0x4a3153._v$47 = _0x151618);
      }
      if (_0x575bbe !== _0x4a3153._v$48) {
        _0x175fad.disabled = _0x4a3153._v$48 = _0x575bbe;
      }
      if (_0x363c3a !== _0x4a3153._v$49) {
        c(_0x49b369, _0x4a3153._v$49 = _0x363c3a);
      }
      if (_0x4f97bc !== _0x4a3153._v$50) {
        _0x49b369.disabled = _0x4a3153._v$50 = _0x4f97bc;
      }
      if (_0x1fa78c !== _0x4a3153._v$51) {
        c(_0x26406b, _0x4a3153._v$51 = _0x1fa78c);
      }
      if (_0x2a887e !== _0x4a3153._v$52) {
        c(_0x57c0cd, _0x4a3153._v$52 = _0x2a887e);
      }
      if (_0x1b57ec !== _0x4a3153._v$53) {
        _0x57c0cd.disabled = _0x4a3153._v$53 = _0x1b57ec;
      }
      return _0x4a3153;
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
      _v$50: undefined,
      _v$51: undefined,
      _v$52: undefined,
      _v$53: undefined
    });
    w(() => _0x216f5d.value = _0x2b3386());
    w(() => _0x5969a0.value = _0x4d7ff0());
    w(() => _0x14e625.value = _0x3bc182());
    w(() => _0x252651.value = _0x5a4c66());
    w(() => _0x599e01.value = _0x1f745a());
    return _0x2f92d2;
  })();
}
pn(["input", "click"]);
const Ji = z("<div>");
function eo() {
  const {
    state: _0x168ea7,
    setState: _0x14aaa6
  } = me();
  const _0x22aedc = _0x4f6206 => {
    if (_0x4f6206.key === "Escape" && (_0x168ea7.showBook || _0x168ea7.showCreator)) {
      _0x14aaa6({
        showBook: false,
        showCreator: false
      });
      _0x31dc3f.execute("close");
    }
  };
  Pn(async () => {
    const _0x5843b6 = async _0x211626 => {
      _0x14aaa6(_0x211626);
    };
    _0x31dc3f.register("setState", _0x5843b6);
    document.addEventListener("keydown", _0x22aedc);
  });
  fn(() => {
    document.removeEventListener("keydown", _0x22aedc);
  });
  return (() => {
    const _0x577e78 = Ji();
    D(_0x577e78, p(Fn, {
      get children() {
        return [p(en, {
          get when() {
            return _0x168ea7.showCreator;
          },
          get children() {
            return p(Yi, {});
          }
        }), p(en, {
          get when() {
            return _0x168ea7.showBook;
          },
          get children() {
            return p(gi, {});
          }
        })];
      }
    }));
    w(() => c(_0x577e78, Zn.App + " select-none"));
    return _0x577e78;
  })();
}
Gn(() => p(ii, {
  get children() {
    return p(eo, {});
  }
}), document.getElementById("root"));