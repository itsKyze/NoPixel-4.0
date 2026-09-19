import './style.css';
import { N as _0xed2798 } from "./v-packages.js";
(function () {
  const _0x49e39d = document.createElement("link").relList;
  if (_0x49e39d && _0x49e39d.supports && _0x49e39d.supports("modulepreload")) {
    return;
  }
  for (const _0x47e17d of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x2e8b80(_0x47e17d);
  }
  new MutationObserver(_0x2e2c23 => {
    for (const _0xe1c8a1 of _0x2e2c23) {
      if (_0xe1c8a1.type === "childList") {
        for (const _0x17bad9 of _0xe1c8a1.addedNodes) {
          if (_0x17bad9.tagName === "LINK" && _0x17bad9.rel === "modulepreload") {
            _0x2e8b80(_0x17bad9);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x569000(_0x4cf7b1) {
    const _0x5c9252 = {};
    if (_0x4cf7b1.integrity) {
      _0x5c9252.integrity = _0x4cf7b1.integrity;
    }
    if (_0x4cf7b1.referrerPolicy) {
      _0x5c9252.referrerPolicy = _0x4cf7b1.referrerPolicy;
    }
    if (_0x4cf7b1.crossOrigin === "use-credentials") {
      _0x5c9252.credentials = "include";
    } else if (_0x4cf7b1.crossOrigin === "anonymous") {
      _0x5c9252.credentials = "omit";
    } else {
      _0x5c9252.credentials = "same-origin";
    }
    return _0x5c9252;
  }
  function _0x2e8b80(_0x2ae072) {
    if (_0x2ae072.ep) {
      return;
    }
    _0x2ae072.ep = true;
    const _0x324a92 = _0x569000(_0x2ae072);
    fetch(_0x2ae072.href, _0x324a92);
  }
})();
const Fe = (_0xde4918, _0xfaf4b6) => _0xde4918 === _0xfaf4b6;
const D = Symbol("solid-proxy");
const re = Symbol("solid-track");
const Y = {
  equals: Fe
};
let Ce = Te;
const P = 1;
const H = 2;
const xe = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var g = null;
let se = null;
let y = null;
let w = null;
let L = null;
let J = 0;
const [Me, Qt] = F(false);
function z(_0x2b38e5, _0x257302) {
  const _0x49e761 = y;
  const _0x1be1c7 = g;
  const _0x333991 = _0x2b38e5.length === 0;
  const _0x21a360 = _0x333991 ? xe : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x257302 === undefined ? _0x1be1c7 : _0x257302
  };
  const _0x4359e0 = _0x333991 ? _0x2b38e5 : () => _0x2b38e5(() => x(() => te(_0x21a360)));
  g = _0x21a360;
  y = null;
  try {
    return B(_0x4359e0, true);
  } finally {
    y = _0x49e761;
    g = _0x1be1c7;
  }
}
function F(_0x598e58, _0x4a1853) {
  _0x4a1853 = _0x4a1853 ? Object.assign({}, Y, _0x4a1853) : Y;
  const _0x3ed555 = {
    value: _0x598e58,
    observers: null,
    observerSlots: null,
    comparator: _0x4a1853.equals || undefined
  };
  const _0x2ecc5d = _0x3311fa => {
    if (typeof _0x3311fa == "function") {
      _0x3311fa = _0x3311fa(_0x3ed555.value);
    }
    return Pe(_0x3ed555, _0x3311fa);
  };
  return [Le.bind(_0x3ed555), _0x2ecc5d];
}
function Ke(_0x18a5dd, _0x2f42c9, _0x1664e9) {
  const _0x5391c3 = ee(_0x18a5dd, _0x2f42c9, true, P);
  M(_0x5391c3);
}
function N(_0x23a9be, _0xb1f460, _0x19d5e5) {
  const _0x4a469d = ee(_0x23a9be, _0xb1f460, false, P);
  M(_0x4a469d);
}
function Ue(_0x4d05af, _0x132411, _0x9107c) {
  Ce = Ze;
  const _0x9747fa = ee(_0x4d05af, _0x132411, false, P);
  if (!_0x9107c || !_0x9107c.render) {
    _0x9747fa.user = true;
  }
  if (L) {
    L.push(_0x9747fa);
  } else {
    M(_0x9747fa);
  }
}
function k(_0x4fe75b, _0x79af92, _0x2fd87c) {
  _0x2fd87c = _0x2fd87c ? Object.assign({}, Y, _0x2fd87c) : Y;
  const _0x305a7e = ee(_0x4fe75b, _0x79af92, true, 0);
  _0x305a7e.observers = null;
  _0x305a7e.observerSlots = null;
  _0x305a7e.comparator = _0x2fd87c.equals || undefined;
  M(_0x305a7e);
  return Le.bind(_0x305a7e);
}
function oe(_0x442354) {
  return B(_0x442354, false);
}
function x(_0x1dad58) {
  if (y === null) {
    return _0x1dad58();
  }
  const _0x193d21 = y;
  y = null;
  try {
    return _0x1dad58();
  } finally {
    y = _0x193d21;
  }
}
function qe(_0x5b32ee) {
  Ue(() => x(_0x5b32ee));
}
function Se(_0x4b095c) {
  if (g !== null) {
    if (g.cleanups === null) {
      g.cleanups = [_0x4b095c];
    } else {
      g.cleanups.push(_0x4b095c);
    }
  }
  return _0x4b095c;
}
function Ee() {
  return y;
}
function Ve(_0x491cf7) {
  const _0xfbffc8 = y;
  const _0x22e07c = g;
  return Promise.resolve().then(() => {
    y = _0xfbffc8;
    g = _0x22e07c;
    let _0x53c073;
    B(_0x491cf7, false);
    y = g = null;
    if (_0x53c073) {
      return _0x53c073.done;
    } else {
      return undefined;
    }
  });
}
function ze() {
  return [Me, Ve];
}
function Ye(_0x362621, _0x3cdcd9) {
  const _0x175a7 = Symbol("context");
  return {
    id: _0x175a7,
    Provider: Qe(_0x175a7),
    defaultValue: _0x362621
  };
}
function He(_0x2b47e9) {
  let _0xaf43de;
  if ((_0xaf43de = ke(g, _0x2b47e9.id)) !== undefined) {
    return _0xaf43de;
  } else {
    return _0x2b47e9.defaultValue;
  }
}
function We(_0x14ca6e) {
  const _0x3e8ea9 = k(_0x14ca6e);
  const _0x20eee4 = k(() => le(_0x3e8ea9()));
  _0x20eee4.toArray = () => {
    const _0x1a8bea = _0x20eee4();
    if (Array.isArray(_0x1a8bea)) {
      return _0x1a8bea;
    } else if (_0x1a8bea != null) {
      return [_0x1a8bea];
    } else {
      return [];
    }
  };
  return _0x20eee4;
}
function Le() {
  if (this.sources && this.state) {
    if (this.state === P) {
      M(this);
    } else {
      const _0x116fb5 = w;
      w = null;
      B(() => G(this), false);
      w = _0x116fb5;
    }
  }
  if (y) {
    const _0x2d7085 = this.observers ? this.observers.length : 0;
    if (y.sources) {
      y.sources.push(this);
      y.sourceSlots.push(_0x2d7085);
    } else {
      y.sources = [this];
      y.sourceSlots = [_0x2d7085];
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
function Pe(_0x4c9380, _0x5d3240, _0x2e3263) {
  let _0x4be00d = _0x4c9380.value;
  if (!_0x4c9380.comparator || !_0x4c9380.comparator(_0x4be00d, _0x5d3240)) {
    _0x4c9380.value = _0x5d3240;
    if (_0x4c9380.observers && _0x4c9380.observers.length) {
      B(() => {
        for (let _0x5d50e5 = 0; _0x5d50e5 < _0x4c9380.observers.length; _0x5d50e5 += 1) {
          const _0x46d1e9 = _0x4c9380.observers[_0x5d50e5];
          const _0x1d2835 = se && se.running;
          if (_0x1d2835) {
            se.disposed.has(_0x46d1e9);
          }
          if (_0x1d2835 ? !_0x46d1e9.tState : !_0x46d1e9.state) {
            if (_0x46d1e9.pure) {
              w.push(_0x46d1e9);
            } else {
              L.push(_0x46d1e9);
            }
            if (_0x46d1e9.observers) {
              Oe(_0x46d1e9);
            }
          }
          if (!_0x1d2835) {
            _0x46d1e9.state = P;
          }
        }
        if (w.length > 1000000) {
          w = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x5d3240;
}
function M(_0xf1aef) {
  if (!_0xf1aef.fn) {
    return;
  }
  te(_0xf1aef);
  const _0x2fff99 = g;
  const _0x1deb30 = y;
  const _0x355ad7 = J;
  y = g = _0xf1aef;
  Ge(_0xf1aef, _0xf1aef.value, _0x355ad7);
  y = _0x1deb30;
  g = _0x2fff99;
}
function Ge(_0x35dc0a, _0x32db02, _0x36087a) {
  let _0xd15bcc;
  try {
    _0xd15bcc = _0x35dc0a.fn(_0x32db02);
  } catch (_0x3dd263) {
    if (_0x35dc0a.pure) {
      _0x35dc0a.state = P;
      if (_0x35dc0a.owned) {
        _0x35dc0a.owned.forEach(te);
      }
      _0x35dc0a.owned = null;
    }
    _0x35dc0a.updatedAt = _0x36087a + 1;
    return Ne(_0x3dd263);
  }
  if (!_0x35dc0a.updatedAt || _0x35dc0a.updatedAt <= _0x36087a) {
    if (_0x35dc0a.updatedAt != null && "observers" in _0x35dc0a) {
      Pe(_0x35dc0a, _0xd15bcc);
    } else {
      _0x35dc0a.value = _0xd15bcc;
    }
    _0x35dc0a.updatedAt = _0x36087a;
  }
}
function ee(_0x57a84e, _0x551d0a, _0x4ade47, _0x18bdf9 = P, _0x38ebe4) {
  const _0xb54fbb = {
    fn: _0x57a84e,
    state: _0x18bdf9,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x551d0a,
    owner: g,
    context: null,
    pure: _0x4ade47
  };
  if (g !== null) {
    if (g !== xe) {
      if (g.owned) {
        g.owned.push(_0xb54fbb);
      } else {
        g.owned = [_0xb54fbb];
      }
    }
  }
  return _0xb54fbb;
}
function W(_0x4b3c46) {
  if (_0x4b3c46.state === 0) {
    return;
  }
  if (_0x4b3c46.state === H) {
    return G(_0x4b3c46);
  }
  if (_0x4b3c46.suspense && x(_0x4b3c46.suspense.inFallback)) {
    return _0x4b3c46.suspense.effects.push(_0x4b3c46);
  }
  const _0x31bac0 = [_0x4b3c46];
  while ((_0x4b3c46 = _0x4b3c46.owner) && (!_0x4b3c46.updatedAt || _0x4b3c46.updatedAt < J)) {
    if (_0x4b3c46.state) {
      _0x31bac0.push(_0x4b3c46);
    }
  }
  for (let _0x1db788 = _0x31bac0.length - 1; _0x1db788 >= 0; _0x1db788--) {
    _0x4b3c46 = _0x31bac0[_0x1db788];
    if (_0x4b3c46.state === P) {
      M(_0x4b3c46);
    } else if (_0x4b3c46.state === H) {
      const _0x2e166d = w;
      w = null;
      B(() => G(_0x4b3c46, _0x31bac0[0]), false);
      w = _0x2e166d;
    }
  }
}
function B(_0x38f775, _0x13c7dc) {
  if (w) {
    return _0x38f775();
  }
  let _0x155c93 = false;
  if (!_0x13c7dc) {
    w = [];
  }
  if (L) {
    _0x155c93 = true;
  } else {
    L = [];
  }
  J++;
  try {
    const _0x47f4ca = _0x38f775();
    Xe(_0x155c93);
    return _0x47f4ca;
  } catch (_0x3f8cc3) {
    if (!_0x155c93) {
      L = null;
    }
    w = null;
    Ne(_0x3f8cc3);
  }
}
function Xe(_0x37c5a3) {
  if (w) {
    Te(w);
    w = null;
  }
  if (_0x37c5a3) {
    return;
  }
  const _0x3368f9 = L;
  L = null;
  if (_0x3368f9.length) {
    B(() => Ce(_0x3368f9), false);
  }
}
function Te(_0xfa591f) {
  for (let _0x26ae65 = 0; _0x26ae65 < _0xfa591f.length; _0x26ae65++) {
    W(_0xfa591f[_0x26ae65]);
  }
}
function Ze(_0x5a43a4) {
  let _0x4d54fb;
  let _0x13da24 = 0;
  for (_0x4d54fb = 0; _0x4d54fb < _0x5a43a4.length; _0x4d54fb++) {
    const _0x4ccee5 = _0x5a43a4[_0x4d54fb];
    if (_0x4ccee5.user) {
      _0x5a43a4[_0x13da24++] = _0x4ccee5;
    } else {
      W(_0x4ccee5);
    }
  }
  for (_0x4d54fb = 0; _0x4d54fb < _0x13da24; _0x4d54fb++) {
    W(_0x5a43a4[_0x4d54fb]);
  }
}
function G(_0x1afa3e, _0x32eda4) {
  _0x1afa3e.state = 0;
  for (let _0x4591c3 = 0; _0x4591c3 < _0x1afa3e.sources.length; _0x4591c3 += 1) {
    const _0x240890 = _0x1afa3e.sources[_0x4591c3];
    if (_0x240890.sources) {
      const _0x276e7d = _0x240890.state;
      if (_0x276e7d === P) {
        if (_0x240890 !== _0x32eda4 && (!_0x240890.updatedAt || _0x240890.updatedAt < J)) {
          W(_0x240890);
        }
      } else if (_0x276e7d === H) {
        G(_0x240890, _0x32eda4);
      }
    }
  }
}
function Oe(_0x24a7a0) {
  for (let _0x355869 = 0; _0x355869 < _0x24a7a0.observers.length; _0x355869 += 1) {
    const _0x5045f2 = _0x24a7a0.observers[_0x355869];
    if (!_0x5045f2.state) {
      _0x5045f2.state = H;
      if (_0x5045f2.pure) {
        w.push(_0x5045f2);
      } else {
        L.push(_0x5045f2);
      }
      if (_0x5045f2.observers) {
        Oe(_0x5045f2);
      }
    }
  }
}
function te(_0x27ee1c) {
  let _0x53400f;
  if (_0x27ee1c.sources) {
    while (_0x27ee1c.sources.length) {
      const _0x5436a5 = _0x27ee1c.sources.pop();
      const _0x47ff19 = _0x27ee1c.sourceSlots.pop();
      const _0x29871d = _0x5436a5.observers;
      if (_0x29871d && _0x29871d.length) {
        const _0x300f4d = _0x29871d.pop();
        const _0x8ff016 = _0x5436a5.observerSlots.pop();
        if (_0x47ff19 < _0x29871d.length) {
          _0x300f4d.sourceSlots[_0x8ff016] = _0x47ff19;
          _0x29871d[_0x47ff19] = _0x300f4d;
          _0x5436a5.observerSlots[_0x47ff19] = _0x8ff016;
        }
      }
    }
  }
  if (_0x27ee1c.owned) {
    for (_0x53400f = _0x27ee1c.owned.length - 1; _0x53400f >= 0; _0x53400f--) {
      te(_0x27ee1c.owned[_0x53400f]);
    }
    _0x27ee1c.owned = null;
  }
  if (_0x27ee1c.cleanups) {
    for (_0x53400f = _0x27ee1c.cleanups.length - 1; _0x53400f >= 0; _0x53400f--) {
      _0x27ee1c.cleanups[_0x53400f]();
    }
    _0x27ee1c.cleanups = null;
  }
  _0x27ee1c.state = 0;
  _0x27ee1c.context = null;
}
function Ne(_0x14e86c) {
  throw _0x14e86c;
}
function ke(_0x8f81f4, _0x1a2c09) {
  if (_0x8f81f4) {
    if (_0x8f81f4.context && _0x8f81f4.context[_0x1a2c09] !== undefined) {
      return _0x8f81f4.context[_0x1a2c09];
    } else {
      return ke(_0x8f81f4.owner, _0x1a2c09);
    }
  } else {
    return undefined;
  }
}
function le(_0x541448) {
  if (typeof _0x541448 == "function" && !_0x541448.length) {
    return le(_0x541448());
  }
  if (Array.isArray(_0x541448)) {
    const _0x52f447 = [];
    for (let _0x50b53b = 0; _0x50b53b < _0x541448.length; _0x50b53b++) {
      const _0x179004 = le(_0x541448[_0x50b53b]);
      if (Array.isArray(_0x179004)) {
        _0x52f447.push.apply(_0x52f447, _0x179004);
      } else {
        _0x52f447.push(_0x179004);
      }
    }
    return _0x52f447;
  }
  return _0x541448;
}
function Qe(_0x3bfbdd, _0x2ffe50) {
  return function (_0x8bf26a) {
    let _0x15c4f4;
    N(() => _0x15c4f4 = x(() => {
      g.context = {
        [_0x3bfbdd]: _0x8bf26a.value
      };
      return We(() => _0x8bf26a.children);
    }), undefined);
    return _0x15c4f4;
  };
}
const Je = Symbol("fallback");
function pe(_0x507c7e) {
  for (let _0x3a0b13 = 0; _0x3a0b13 < _0x507c7e.length; _0x3a0b13++) {
    _0x507c7e[_0x3a0b13]();
  }
}
function et(_0x1147fa, _0x2ba815, _0x532903 = {}) {
  let _0x5d235f = [];
  let _0x535cff = [];
  let _0x5ce75b = [];
  let _0x235073 = 0;
  let _0x5d0637 = _0x2ba815.length > 1 ? [] : null;
  Se(() => pe(_0x5ce75b));
  return () => {
    let _0x3c3dfd = _0x1147fa() || [];
    let _0x8984a0;
    let _0x1a1b43;
    _0x3c3dfd[re];
    return x(() => {
      let _0xf649f0 = _0x3c3dfd.length;
      let _0x2ccf5d;
      let _0xf6c86f;
      let _0xec875;
      let _0x3641f6;
      let _0x5a3a85;
      let _0x4088b4;
      let _0x2d455f;
      let _0x5ccdd0;
      let _0x125ae4;
      if (_0xf649f0 === 0) {
        if (_0x235073 !== 0) {
          pe(_0x5ce75b);
          _0x5ce75b = [];
          _0x5d235f = [];
          _0x535cff = [];
          _0x235073 = 0;
          _0x5d0637 &&= [];
        }
        if (_0x532903.fallback) {
          _0x5d235f = [Je];
          _0x535cff[0] = z(_0x218f92 => {
            _0x5ce75b[0] = _0x218f92;
            return _0x532903.fallback();
          });
          _0x235073 = 1;
        }
      } else if (_0x235073 === 0) {
        _0x535cff = new Array(_0xf649f0);
        _0x1a1b43 = 0;
        for (; _0x1a1b43 < _0xf649f0; _0x1a1b43++) {
          _0x5d235f[_0x1a1b43] = _0x3c3dfd[_0x1a1b43];
          _0x535cff[_0x1a1b43] = z(_0x57ac1e);
        }
        _0x235073 = _0xf649f0;
      } else {
        _0xec875 = new Array(_0xf649f0);
        _0x3641f6 = new Array(_0xf649f0);
        if (_0x5d0637) {
          _0x5a3a85 = new Array(_0xf649f0);
        }
        _0x4088b4 = 0;
        _0x2d455f = Math.min(_0x235073, _0xf649f0);
        for (; _0x4088b4 < _0x2d455f && _0x5d235f[_0x4088b4] === _0x3c3dfd[_0x4088b4]; _0x4088b4++);
        _0x2d455f = _0x235073 - 1;
        _0x5ccdd0 = _0xf649f0 - 1;
        for (; _0x2d455f >= _0x4088b4 && _0x5ccdd0 >= _0x4088b4 && _0x5d235f[_0x2d455f] === _0x3c3dfd[_0x5ccdd0]; _0x2d455f--, _0x5ccdd0--) {
          _0xec875[_0x5ccdd0] = _0x535cff[_0x2d455f];
          _0x3641f6[_0x5ccdd0] = _0x5ce75b[_0x2d455f];
          if (_0x5d0637) {
            _0x5a3a85[_0x5ccdd0] = _0x5d0637[_0x2d455f];
          }
        }
        _0x2ccf5d = new Map();
        _0xf6c86f = new Array(_0x5ccdd0 + 1);
        _0x1a1b43 = _0x5ccdd0;
        for (; _0x1a1b43 >= _0x4088b4; _0x1a1b43--) {
          _0x125ae4 = _0x3c3dfd[_0x1a1b43];
          _0x8984a0 = _0x2ccf5d.get(_0x125ae4);
          _0xf6c86f[_0x1a1b43] = _0x8984a0 === undefined ? -1 : _0x8984a0;
          _0x2ccf5d.set(_0x125ae4, _0x1a1b43);
        }
        for (_0x8984a0 = _0x4088b4; _0x8984a0 <= _0x2d455f; _0x8984a0++) {
          _0x125ae4 = _0x5d235f[_0x8984a0];
          _0x1a1b43 = _0x2ccf5d.get(_0x125ae4);
          if (_0x1a1b43 !== undefined && _0x1a1b43 !== -1) {
            _0xec875[_0x1a1b43] = _0x535cff[_0x8984a0];
            _0x3641f6[_0x1a1b43] = _0x5ce75b[_0x8984a0];
            if (_0x5d0637) {
              _0x5a3a85[_0x1a1b43] = _0x5d0637[_0x8984a0];
            }
            _0x1a1b43 = _0xf6c86f[_0x1a1b43];
            _0x2ccf5d.set(_0x125ae4, _0x1a1b43);
          } else {
            _0x5ce75b[_0x8984a0]();
          }
        }
        for (_0x1a1b43 = _0x4088b4; _0x1a1b43 < _0xf649f0; _0x1a1b43++) {
          if (_0x1a1b43 in _0xec875) {
            _0x535cff[_0x1a1b43] = _0xec875[_0x1a1b43];
            _0x5ce75b[_0x1a1b43] = _0x3641f6[_0x1a1b43];
            if (_0x5d0637) {
              _0x5d0637[_0x1a1b43] = _0x5a3a85[_0x1a1b43];
              _0x5d0637[_0x1a1b43](_0x1a1b43);
            }
          } else {
            _0x535cff[_0x1a1b43] = z(_0x57ac1e);
          }
        }
        _0x535cff = _0x535cff.slice(0, _0x235073 = _0xf649f0);
        _0x5d235f = _0x3c3dfd.slice(0);
      }
      return _0x535cff;
    });
    function _0x57ac1e(_0x52b259) {
      _0x5ce75b[_0x1a1b43] = _0x52b259;
      if (_0x5d0637) {
        const [_0x13cefa, _0x65f903] = F(_0x1a1b43);
        _0x5d0637[_0x1a1b43] = _0x65f903;
        return _0x2ba815(_0x3c3dfd[_0x1a1b43], _0x13cefa);
      }
      return _0x2ba815(_0x3c3dfd[_0x1a1b43]);
    }
  };
}
function O(_0x4dd4d6, _0x25f2b1) {
  return x(() => _0x4dd4d6(_0x25f2b1 || {}));
}
const tt = _0x5a7b73 => "Stale read from <" + _0x5a7b73 + ">.";
function nt(_0x2599f3) {
  const _0x4c12e6 = "fallback" in _0x2599f3 && {
    fallback: () => _0x2599f3.fallback
  };
  return k(et(() => _0x2599f3.each, _0x2599f3.children, _0x4c12e6 || undefined));
}
function it(_0x387fd1) {
  const _0x544fc3 = _0x387fd1.keyed;
  const _0x4cac56 = k(() => _0x387fd1.when, undefined, {
    equals: (_0x464b82, _0xf97a52) => _0x544fc3 ? _0x464b82 === _0xf97a52 : !_0x464b82 == !_0xf97a52
  });
  return k(() => {
    const _0xb8bed3 = _0x4cac56();
    if (_0xb8bed3) {
      const _0x15572b = _0x387fd1.children;
      if (typeof _0x15572b == "function" && _0x15572b.length > 0) {
        return x(() => _0x15572b(_0x544fc3 ? _0xb8bed3 : () => {
          if (!x(_0x4cac56)) {
            throw tt("Show");
          }
          return _0x387fd1.when;
        }));
      } else {
        return _0x15572b;
      }
    }
    return _0x387fd1.fallback;
  }, undefined, undefined);
}
function st(_0x2eda1b, _0xfd1981, _0x5bd001) {
  let _0x4cc42b = _0x5bd001.length;
  let _0x36534f = _0xfd1981.length;
  let _0x281497 = _0x4cc42b;
  let _0x59b79e = 0;
  let _0x119931 = 0;
  let _0x3687e0 = _0xfd1981[_0x36534f - 1].nextSibling;
  let _0x14dd2d = null;
  while (_0x59b79e < _0x36534f || _0x119931 < _0x281497) {
    if (_0xfd1981[_0x59b79e] === _0x5bd001[_0x119931]) {
      _0x59b79e++;
      _0x119931++;
      continue;
    }
    while (_0xfd1981[_0x36534f - 1] === _0x5bd001[_0x281497 - 1]) {
      _0x36534f--;
      _0x281497--;
    }
    if (_0x36534f === _0x59b79e) {
      const _0x1b219d = _0x281497 < _0x4cc42b ? _0x119931 ? _0x5bd001[_0x119931 - 1].nextSibling : _0x5bd001[_0x281497 - _0x119931] : _0x3687e0;
      while (_0x119931 < _0x281497) {
        _0x2eda1b.insertBefore(_0x5bd001[_0x119931++], _0x1b219d);
      }
    } else if (_0x281497 === _0x119931) {
      while (_0x59b79e < _0x36534f) {
        if (!_0x14dd2d || !_0x14dd2d.has(_0xfd1981[_0x59b79e])) {
          _0xfd1981[_0x59b79e].remove();
        }
        _0x59b79e++;
      }
    } else if (_0xfd1981[_0x59b79e] === _0x5bd001[_0x281497 - 1] && _0x5bd001[_0x119931] === _0xfd1981[_0x36534f - 1]) {
      const _0x6f9765 = _0xfd1981[--_0x36534f].nextSibling;
      _0x2eda1b.insertBefore(_0x5bd001[_0x119931++], _0xfd1981[_0x59b79e++].nextSibling);
      _0x2eda1b.insertBefore(_0x5bd001[--_0x281497], _0x6f9765);
      _0xfd1981[_0x36534f] = _0x5bd001[_0x281497];
    } else {
      if (!_0x14dd2d) {
        _0x14dd2d = new Map();
        let _0x308004 = _0x119931;
        while (_0x308004 < _0x281497) {
          _0x14dd2d.set(_0x5bd001[_0x308004], _0x308004++);
        }
      }
      const _0x5329e3 = _0x14dd2d.get(_0xfd1981[_0x59b79e]);
      if (_0x5329e3 != null) {
        if (_0x119931 < _0x5329e3 && _0x5329e3 < _0x281497) {
          let _0x5de19f = _0x59b79e;
          let _0x3ed989 = 1;
          let _0x238f8d;
          while (++_0x5de19f < _0x36534f && _0x5de19f < _0x281497 && (_0x238f8d = _0x14dd2d.get(_0xfd1981[_0x5de19f])) != null && _0x238f8d === _0x5329e3 + _0x3ed989) {
            _0x3ed989++;
          }
          if (_0x3ed989 > _0x5329e3 - _0x119931) {
            const _0x3028a1 = _0xfd1981[_0x59b79e];
            while (_0x119931 < _0x5329e3) {
              _0x2eda1b.insertBefore(_0x5bd001[_0x119931++], _0x3028a1);
            }
          } else {
            _0x2eda1b.replaceChild(_0x5bd001[_0x119931++], _0xfd1981[_0x59b79e++]);
          }
        } else {
          _0x59b79e++;
        }
      } else {
        _0xfd1981[_0x59b79e++].remove();
      }
    }
  }
}
const be = "_$DX_DELEGATE";
function rt(_0x54a28c, _0x24e0f7, _0x37807c, _0x236445 = {}) {
  let _0x1c073e;
  z(_0x551d95 => {
    _0x1c073e = _0x551d95;
    if (_0x24e0f7 === document) {
      _0x54a28c();
    } else {
      E(_0x24e0f7, _0x54a28c(), _0x24e0f7.firstChild ? null : undefined, _0x37807c);
    }
  }, _0x236445.owner);
  return () => {
    _0x1c073e();
    _0x24e0f7.textContent = "";
  };
}
function ne(_0x57024b, _0x2fa16e, _0x3f934d) {
  let _0x26c014;
  const _0x144096 = () => {
    const _0x232c12 = document.createElement("template");
    _0x232c12.innerHTML = _0x57024b;
    if (_0x3f934d) {
      return _0x232c12.content.firstChild.firstChild;
    } else {
      return _0x232c12.content.firstChild;
    }
  };
  const _0x5a5c36 = _0x2fa16e ? () => x(() => document.importNode(_0x26c014 ||= _0x144096(), true)) : () => (_0x26c014 ||= _0x144096()).cloneNode(true);
  _0x5a5c36.cloneNode = _0x5a5c36;
  return _0x5a5c36;
}
function ot(_0x32ef93, _0x1c485f = window.document) {
  const _0x2480ba = _0x1c485f[be] ||= new Set();
  for (let _0x5a86f9 = 0, _0x3d9033 = _0x32ef93.length; _0x5a86f9 < _0x3d9033; _0x5a86f9++) {
    const _0x2c0012 = _0x32ef93[_0x5a86f9];
    if (!_0x2480ba.has(_0x2c0012)) {
      _0x2480ba.add(_0x2c0012);
      _0x1c485f.addEventListener(_0x2c0012, lt);
    }
  }
}
function p(_0x2fece5, _0x4c1042) {
  if (_0x4c1042 == null) {
    _0x2fece5.removeAttribute("class");
  } else {
    _0x2fece5.className = _0x4c1042;
  }
}
function ce(_0x53b7d9, _0x1475a0, _0x416a81 = {}) {
  const _0x482c13 = Object.keys(_0x1475a0 || {});
  const _0x13a4ce = Object.keys(_0x416a81);
  let _0x369003;
  let _0x39e9be;
  _0x369003 = 0;
  _0x39e9be = _0x13a4ce.length;
  for (; _0x369003 < _0x39e9be; _0x369003++) {
    const _0x31a981 = _0x13a4ce[_0x369003];
    if (!!_0x31a981 && _0x31a981 !== "undefined" && !_0x1475a0[_0x31a981]) {
      $e(_0x53b7d9, _0x31a981, false);
      delete _0x416a81[_0x31a981];
    }
  }
  _0x369003 = 0;
  _0x39e9be = _0x482c13.length;
  for (; _0x369003 < _0x39e9be; _0x369003++) {
    const _0x5496e3 = _0x482c13[_0x369003];
    const _0x1429a5 = !!_0x1475a0[_0x5496e3];
    if (!!_0x5496e3 && _0x5496e3 !== "undefined" && _0x416a81[_0x5496e3] !== _0x1429a5 && !!_0x1429a5) {
      $e(_0x53b7d9, _0x5496e3, true);
      _0x416a81[_0x5496e3] = _0x1429a5;
    }
  }
  return _0x416a81;
}
function E(_0x386a18, _0x18670c, _0x589c79, _0x4a321d) {
  if (_0x589c79 !== undefined && !_0x4a321d) {
    _0x4a321d = [];
  }
  if (typeof _0x18670c != "function") {
    return X(_0x386a18, _0x18670c, _0x4a321d, _0x589c79);
  }
  N(_0x68b967 => X(_0x386a18, _0x18670c(), _0x68b967, _0x589c79), _0x4a321d);
}
function $e(_0x4b0fcf, _0x33db3b, _0x2e9977) {
  const _0x28ab31 = _0x33db3b.trim().split(/\s+/);
  for (let _0x1c83df = 0, _0x2cc495 = _0x28ab31.length; _0x1c83df < _0x2cc495; _0x1c83df++) {
    _0x4b0fcf.classList.toggle(_0x28ab31[_0x1c83df], _0x2e9977);
  }
}
function lt(_0x303c95) {
  const _0x1f29b0 = "$$" + _0x303c95.type;
  let _0x197226 = _0x303c95.composedPath && _0x303c95.composedPath()[0] || _0x303c95.target;
  if (_0x303c95.target !== _0x197226) {
    Object.defineProperty(_0x303c95, "target", {
      configurable: true,
      value: _0x197226
    });
  }
  Object.defineProperty(_0x303c95, "currentTarget", {
    configurable: true,
    get() {
      return _0x197226 || document;
    }
  });
  while (_0x197226) {
    const _0x45b441 = _0x197226[_0x1f29b0];
    if (_0x45b441 && !_0x197226.disabled) {
      const _0x40a790 = _0x197226[_0x1f29b0 + "Data"];
      if (_0x40a790 !== undefined) {
        _0x45b441.call(_0x197226, _0x40a790, _0x303c95);
      } else {
        _0x45b441.call(_0x197226, _0x303c95);
      }
      if (_0x303c95.cancelBubble) {
        return;
      }
    }
    _0x197226 = _0x197226._$host || _0x197226.parentNode || _0x197226.host;
  }
}
function X(_0xf516a7, _0x8d1bab, _0x4f9c13, _0x7ed753, _0x12abff) {
  while (typeof _0x4f9c13 == "function") {
    _0x4f9c13 = _0x4f9c13();
  }
  if (_0x8d1bab === _0x4f9c13) {
    return _0x4f9c13;
  }
  const _0x565fab = typeof _0x8d1bab;
  const _0x4b7d91 = _0x7ed753 !== undefined;
  _0xf516a7 = _0x4b7d91 && _0x4f9c13[0] && _0x4f9c13[0].parentNode || _0xf516a7;
  if (_0x565fab === "string" || _0x565fab === "number") {
    if (_0x565fab === "number") {
      _0x8d1bab = _0x8d1bab.toString();
    }
    if (_0x4b7d91) {
      let _0x476ef5 = _0x4f9c13[0];
      if (_0x476ef5 && _0x476ef5.nodeType === 3) {
        _0x476ef5.data = _0x8d1bab;
      } else {
        _0x476ef5 = document.createTextNode(_0x8d1bab);
      }
      _0x4f9c13 = I(_0xf516a7, _0x4f9c13, _0x7ed753, _0x476ef5);
    } else if (_0x4f9c13 !== "" && typeof _0x4f9c13 == "string") {
      _0x4f9c13 = _0xf516a7.firstChild.data = _0x8d1bab;
    } else {
      _0x4f9c13 = _0xf516a7.textContent = _0x8d1bab;
    }
  } else if (_0x8d1bab == null || _0x565fab === "boolean") {
    _0x4f9c13 = I(_0xf516a7, _0x4f9c13, _0x7ed753);
  } else {
    if (_0x565fab === "function") {
      N(() => {
        let _0xb1ece7 = _0x8d1bab();
        while (typeof _0xb1ece7 == "function") {
          _0xb1ece7 = _0xb1ece7();
        }
        _0x4f9c13 = X(_0xf516a7, _0xb1ece7, _0x4f9c13, _0x7ed753);
      });
      return () => _0x4f9c13;
    }
    if (Array.isArray(_0x8d1bab)) {
      const _0xab603d = [];
      const _0xa3bc12 = _0x4f9c13 && Array.isArray(_0x4f9c13);
      if (fe(_0xab603d, _0x8d1bab, _0x4f9c13, _0x12abff)) {
        N(() => _0x4f9c13 = X(_0xf516a7, _0xab603d, _0x4f9c13, _0x7ed753, true));
        return () => _0x4f9c13;
      }
      if (_0xab603d.length === 0) {
        _0x4f9c13 = I(_0xf516a7, _0x4f9c13, _0x7ed753);
        if (_0x4b7d91) {
          return _0x4f9c13;
        }
      } else if (_0xa3bc12) {
        if (_0x4f9c13.length === 0) {
          Ae(_0xf516a7, _0xab603d, _0x7ed753);
        } else {
          st(_0xf516a7, _0x4f9c13, _0xab603d);
        }
      } else {
        if (_0x4f9c13) {
          I(_0xf516a7);
        }
        Ae(_0xf516a7, _0xab603d);
      }
      _0x4f9c13 = _0xab603d;
    } else if (_0x8d1bab.nodeType) {
      if (Array.isArray(_0x4f9c13)) {
        if (_0x4b7d91) {
          return _0x4f9c13 = I(_0xf516a7, _0x4f9c13, _0x7ed753, _0x8d1bab);
        }
        I(_0xf516a7, _0x4f9c13, null, _0x8d1bab);
      } else if (_0x4f9c13 == null || _0x4f9c13 === "" || !_0xf516a7.firstChild) {
        _0xf516a7.appendChild(_0x8d1bab);
      } else {
        _0xf516a7.replaceChild(_0x8d1bab, _0xf516a7.firstChild);
      }
      _0x4f9c13 = _0x8d1bab;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x8d1bab);
    }
  }
  return _0x4f9c13;
}
function fe(_0x4e6388, _0xe198f7, _0x3bfb08, _0xf765b2) {
  let _0x1bd1fb = false;
  for (let _0x5188fe = 0, _0xbd739d = _0xe198f7.length; _0x5188fe < _0xbd739d; _0x5188fe++) {
    let _0x153c24 = _0xe198f7[_0x5188fe];
    let _0x862b06 = _0x3bfb08 && _0x3bfb08[_0x5188fe];
    let _0x4f1b74;
    if (_0x153c24 != null && _0x153c24 !== true && _0x153c24 !== false) {
      if ((_0x4f1b74 = typeof _0x153c24) == "object" && _0x153c24.nodeType) {
        _0x4e6388.push(_0x153c24);
      } else if (Array.isArray(_0x153c24)) {
        _0x1bd1fb = fe(_0x4e6388, _0x153c24, _0x862b06) || _0x1bd1fb;
      } else if (_0x4f1b74 === "function") {
        if (_0xf765b2) {
          while (typeof _0x153c24 == "function") {
            _0x153c24 = _0x153c24();
          }
          _0x1bd1fb = fe(_0x4e6388, Array.isArray(_0x153c24) ? _0x153c24 : [_0x153c24], Array.isArray(_0x862b06) ? _0x862b06 : [_0x862b06]) || _0x1bd1fb;
        } else {
          _0x4e6388.push(_0x153c24);
          _0x1bd1fb = true;
        }
      } else {
        const _0x1c7f24 = String(_0x153c24);
        if (_0x862b06 && _0x862b06.nodeType === 3 && _0x862b06.data === _0x1c7f24) {
          _0x4e6388.push(_0x862b06);
        } else {
          _0x4e6388.push(document.createTextNode(_0x1c7f24));
        }
      }
    }
  }
  return _0x1bd1fb;
}
function Ae(_0x3b745f, _0x22222d, _0xd1f39f = null) {
  for (let _0x3715ca = 0, _0x2cc932 = _0x22222d.length; _0x3715ca < _0x2cc932; _0x3715ca++) {
    _0x3b745f.insertBefore(_0x22222d[_0x3715ca], _0xd1f39f);
  }
}
function I(_0x484bea, _0xd9b8dd, _0x47e6d0, _0x34fa57) {
  if (_0x47e6d0 === undefined) {
    return _0x484bea.textContent = "";
  }
  const _0x412b3b = _0x34fa57 || document.createTextNode("");
  if (_0xd9b8dd.length) {
    let _0x5ba53f = false;
    for (let _0x11a658 = _0xd9b8dd.length - 1; _0x11a658 >= 0; _0x11a658--) {
      const _0x171772 = _0xd9b8dd[_0x11a658];
      if (_0x412b3b !== _0x171772) {
        const _0x26202c = _0x171772.parentNode === _0x484bea;
        if (!_0x5ba53f && !_0x11a658) {
          if (_0x26202c) {
            _0x484bea.replaceChild(_0x412b3b, _0x171772);
          } else {
            _0x484bea.insertBefore(_0x412b3b, _0x47e6d0);
          }
        } else if (_0x26202c) {
          _0x171772.remove();
        }
      } else {
        _0x5ba53f = true;
      }
    }
  } else {
    _0x484bea.insertBefore(_0x412b3b, _0x47e6d0);
  }
  return [_0x412b3b];
}
function ct(_0x23bd87, _0x494c2f) {
  const _0x53516b = Ye(_0x494c2f);
  return [_0x980722 => O(_0x53516b.Provider, {
    value: _0x23bd87(_0x980722),
    get children() {
      return _0x980722.children;
    }
  }), () => He(_0x53516b)];
}
const ue = Symbol("store-raw");
const U = Symbol("store-node");
function je(_0x5b0a77) {
  let _0x46aa42 = _0x5b0a77[D];
  if (!_0x46aa42 && (Object.defineProperty(_0x5b0a77, D, {
    value: _0x46aa42 = new Proxy(_0x5b0a77, at)
  }), !Array.isArray(_0x5b0a77))) {
    const _0x215280 = Object.keys(_0x5b0a77);
    const _0x38d3aa = Object.getOwnPropertyDescriptors(_0x5b0a77);
    for (let _0x42790a = 0, _0x27afd7 = _0x215280.length; _0x42790a < _0x27afd7; _0x42790a++) {
      const _0x2922d0 = _0x215280[_0x42790a];
      if (_0x38d3aa[_0x2922d0].get) {
        Object.defineProperty(_0x5b0a77, _0x2922d0, {
          enumerable: _0x38d3aa[_0x2922d0].enumerable,
          get: _0x38d3aa[_0x2922d0].get.bind(_0x46aa42)
        });
      }
    }
  }
  return _0x46aa42;
}
function Z(_0x262311) {
  let _0x35eea2;
  return _0x262311 != null && typeof _0x262311 == "object" && (_0x262311[D] || !(_0x35eea2 = Object.getPrototypeOf(_0x262311)) || _0x35eea2 === Object.prototype || Array.isArray(_0x262311));
}
function q(_0x365af6, _0xfd6659 = new Set()) {
  let _0x40d319;
  let _0xe56aee;
  let _0x37c0cf;
  let _0x35872d;
  if (_0x40d319 = _0x365af6 != null && _0x365af6[ue]) {
    return _0x40d319;
  }
  if (!Z(_0x365af6) || _0xfd6659.has(_0x365af6)) {
    return _0x365af6;
  }
  if (Array.isArray(_0x365af6)) {
    if (Object.isFrozen(_0x365af6)) {
      _0x365af6 = _0x365af6.slice(0);
    } else {
      _0xfd6659.add(_0x365af6);
    }
    for (let _0x36bf5a = 0, _0x48b488 = _0x365af6.length; _0x36bf5a < _0x48b488; _0x36bf5a++) {
      _0x37c0cf = _0x365af6[_0x36bf5a];
      if ((_0xe56aee = q(_0x37c0cf, _0xfd6659)) !== _0x37c0cf) {
        _0x365af6[_0x36bf5a] = _0xe56aee;
      }
    }
  } else {
    if (Object.isFrozen(_0x365af6)) {
      _0x365af6 = Object.assign({}, _0x365af6);
    } else {
      _0xfd6659.add(_0x365af6);
    }
    const _0x256de9 = Object.keys(_0x365af6);
    const _0x467fe2 = Object.getOwnPropertyDescriptors(_0x365af6);
    for (let _0x4ec2da = 0, _0x30aba1 = _0x256de9.length; _0x4ec2da < _0x30aba1; _0x4ec2da++) {
      _0x35872d = _0x256de9[_0x4ec2da];
      if (!_0x467fe2[_0x35872d].get) {
        _0x37c0cf = _0x365af6[_0x35872d];
        if ((_0xe56aee = q(_0x37c0cf, _0xfd6659)) !== _0x37c0cf) {
          _0x365af6[_0x35872d] = _0xe56aee;
        }
      }
    }
  }
  return _0x365af6;
}
function ve(_0x24485f) {
  let _0x45a99f = _0x24485f[U];
  if (!_0x45a99f) {
    Object.defineProperty(_0x24485f, U, {
      value: _0x45a99f = Object.create(null)
    });
  }
  return _0x45a99f;
}
function ae(_0x1a25f3, _0x39ad8a, _0x4ee3d7) {
  return _0x1a25f3[_0x39ad8a] ||= Be(_0x4ee3d7);
}
function ft(_0x932066, _0x200eac) {
  const _0x42325c = Reflect.getOwnPropertyDescriptor(_0x932066, _0x200eac);
  if (!!_0x42325c && !_0x42325c.get && !!_0x42325c.configurable && _0x200eac !== D && _0x200eac !== U) {
    delete _0x42325c.value;
    delete _0x42325c.writable;
    _0x42325c.get = () => _0x932066[D][_0x200eac];
  }
  return _0x42325c;
}
function De(_0x1747c2) {
  if (Ee()) {
    const _0x384341 = ve(_0x1747c2);
    (_0x384341._ ||= Be())();
  }
}
function ut(_0x2cea1a) {
  De(_0x2cea1a);
  return Reflect.ownKeys(_0x2cea1a);
}
function Be(_0x2c82ce) {
  const [_0x294002, _0x5a8aed] = F(_0x2c82ce, {
    equals: false,
    internal: true
  });
  _0x294002.$ = _0x5a8aed;
  return _0x294002;
}
const at = {
  get(_0x57117a, _0x22a94f, _0x4f1507) {
    if (_0x22a94f === ue) {
      return _0x57117a;
    }
    if (_0x22a94f === D) {
      return _0x4f1507;
    }
    if (_0x22a94f === re) {
      De(_0x57117a);
      return _0x4f1507;
    }
    const _0x524f4a = ve(_0x57117a);
    const _0x522827 = _0x524f4a[_0x22a94f];
    let _0x2a4e8c = _0x522827 ? _0x522827() : _0x57117a[_0x22a94f];
    if (_0x22a94f === U || _0x22a94f === "__proto__") {
      return _0x2a4e8c;
    }
    if (!_0x522827) {
      const _0x42050e = Object.getOwnPropertyDescriptor(_0x57117a, _0x22a94f);
      if (Ee() && (typeof _0x2a4e8c != "function" || _0x57117a.hasOwnProperty(_0x22a94f)) && (!_0x42050e || !_0x42050e.get)) {
        _0x2a4e8c = ae(_0x524f4a, _0x22a94f, _0x2a4e8c)();
      }
    }
    if (Z(_0x2a4e8c)) {
      return je(_0x2a4e8c);
    } else {
      return _0x2a4e8c;
    }
  },
  has(_0x29137b, _0x340eff) {
    if (_0x340eff === ue || _0x340eff === D || _0x340eff === re || _0x340eff === U || _0x340eff === "__proto__") {
      return true;
    } else {
      this.get(_0x29137b, _0x340eff, _0x29137b);
      return _0x340eff in _0x29137b;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: ut,
  getOwnPropertyDescriptor: ft
};
function Q(_0x2463c3, _0x2c74c1, _0x946887, _0x3b2ea7 = false) {
  if (!_0x3b2ea7 && _0x2463c3[_0x2c74c1] === _0x946887) {
    return;
  }
  const _0x4b7e36 = _0x2463c3[_0x2c74c1];
  const _0x14d3b7 = _0x2463c3.length;
  if (_0x946887 === undefined) {
    delete _0x2463c3[_0x2c74c1];
  } else {
    _0x2463c3[_0x2c74c1] = _0x946887;
  }
  let _0x5bd5c4 = ve(_0x2463c3);
  let _0x574640;
  if (_0x574640 = ae(_0x5bd5c4, _0x2c74c1, _0x4b7e36)) {
    _0x574640.$(() => _0x946887);
  }
  if (Array.isArray(_0x2463c3) && _0x2463c3.length !== _0x14d3b7) {
    for (let _0x1d6faa = _0x2463c3.length; _0x1d6faa < _0x14d3b7; _0x1d6faa++) {
      if (_0x574640 = _0x5bd5c4[_0x1d6faa]) {
        _0x574640.$();
      }
    }
    if (_0x574640 = ae(_0x5bd5c4, "length", _0x14d3b7)) {
      _0x574640.$(_0x2463c3.length);
    }
  }
  if (_0x574640 = _0x5bd5c4._) {
    _0x574640.$();
  }
}
function Ie(_0x4efd78, _0x38dc04) {
  const _0x489c09 = Object.keys(_0x38dc04);
  for (let _0x28055e = 0; _0x28055e < _0x489c09.length; _0x28055e += 1) {
    const _0x206ea2 = _0x489c09[_0x28055e];
    Q(_0x4efd78, _0x206ea2, _0x38dc04[_0x206ea2]);
  }
}
function dt(_0x3fe25d, _0x2264e6) {
  if (typeof _0x2264e6 == "function") {
    _0x2264e6 = _0x2264e6(_0x3fe25d);
  }
  _0x2264e6 = q(_0x2264e6);
  if (Array.isArray(_0x2264e6)) {
    if (_0x3fe25d === _0x2264e6) {
      return;
    }
    let _0x1bf4bf = 0;
    let _0x2e9ea2 = _0x2264e6.length;
    for (; _0x1bf4bf < _0x2e9ea2; _0x1bf4bf++) {
      const _0x584b6d = _0x2264e6[_0x1bf4bf];
      if (_0x3fe25d[_0x1bf4bf] !== _0x584b6d) {
        Q(_0x3fe25d, _0x1bf4bf, _0x584b6d);
      }
    }
    Q(_0x3fe25d, "length", _0x2e9ea2);
  } else {
    Ie(_0x3fe25d, _0x2264e6);
  }
}
function K(_0x50bb45, _0x54a824, _0x5dd3e7 = []) {
  let _0x4d5538;
  let _0x12b059 = _0x50bb45;
  if (_0x54a824.length > 1) {
    _0x4d5538 = _0x54a824.shift();
    const _0x7563d5 = typeof _0x4d5538;
    const _0x676644 = Array.isArray(_0x50bb45);
    if (Array.isArray(_0x4d5538)) {
      for (let _0x5122df = 0; _0x5122df < _0x4d5538.length; _0x5122df++) {
        K(_0x50bb45, [_0x4d5538[_0x5122df]].concat(_0x54a824), _0x5dd3e7);
      }
      return;
    } else if (_0x676644 && _0x7563d5 === "function") {
      for (let _0x3d56c8 = 0; _0x3d56c8 < _0x50bb45.length; _0x3d56c8++) {
        if (_0x4d5538(_0x50bb45[_0x3d56c8], _0x3d56c8)) {
          K(_0x50bb45, [_0x3d56c8].concat(_0x54a824), _0x5dd3e7);
        }
      }
      return;
    } else if (_0x676644 && _0x7563d5 === "object") {
      const {
        from: _0x11d8ab = 0,
        to: _0x184865 = _0x50bb45.length - 1,
        by: _0x452a5d = 1
      } = _0x4d5538;
      for (let _0x402059 = _0x11d8ab; _0x402059 <= _0x184865; _0x402059 += _0x452a5d) {
        K(_0x50bb45, [_0x402059].concat(_0x54a824), _0x5dd3e7);
      }
      return;
    } else if (_0x54a824.length > 1) {
      K(_0x50bb45[_0x4d5538], _0x54a824, [_0x4d5538].concat(_0x5dd3e7));
      return;
    }
    _0x12b059 = _0x50bb45[_0x4d5538];
    _0x5dd3e7 = [_0x4d5538].concat(_0x5dd3e7);
  }
  let _0x30961c = _0x54a824[0];
  if ((typeof _0x30961c != "function" || !(_0x30961c = _0x30961c(_0x12b059, _0x5dd3e7), _0x30961c === _0x12b059)) && (_0x4d5538 !== undefined || _0x30961c != null)) {
    _0x30961c = q(_0x30961c);
    if (_0x4d5538 === undefined || Z(_0x12b059) && Z(_0x30961c) && !Array.isArray(_0x30961c)) {
      Ie(_0x12b059, _0x30961c);
    } else {
      Q(_0x50bb45, _0x4d5538, _0x30961c);
    }
  }
}
function vt(...[_0x59e86d, _0x4a3a8e]) {
  const _0xc28ef9 = q(_0x59e86d || {});
  const _0x5e1c5f = Array.isArray(_0xc28ef9);
  const _0x9842c8 = je(_0xc28ef9);
  function _0x255eaa(..._0x56d43d) {
    oe(() => {
      if (_0x5e1c5f && _0x56d43d.length === 1) {
        dt(_0xc28ef9, _0x56d43d[0]);
      } else {
        K(_0xc28ef9, _0x56d43d);
      }
    });
  }
  return [_0x9842c8, _0x255eaa];
}
const [ht, yt] = ct(() => {
  const [_0x38d482, _0x4cd721] = F(false);
  const [_0x3196c9, _0x32db4d] = F("online");
  const [_0x11f468, _0xaf56be] = vt({
    playerList: [],
    recentPlayers: [],
    playersInScope: 0
  });
  return {
    visible: _0x38d482,
    setVisible: _0x4cd721,
    page: _0x3196c9,
    setPage: _0x32db4d,
    data: _0x11f468,
    setData: _0xaf56be
  };
});
const he = () => yt();
const gt = "_header_10p9n_1";
const _t = "_title_10p9n_9";
const pt = "_description_10p9n_18";
const bt = "_keybind_10p9n_26";
const $t = "_text_10p9n_41";
const At = "_button_10p9n_44";
const wt = "_playerCount_10p9n_54";
const mt = "_count_10p9n_72";
const Ct = "_purple_10p9n_88";
const S = {
  header: gt,
  title: _t,
  description: pt,
  keybind: bt,
  text: $t,
  button: At,
  playerCount: wt,
  count: mt,
  purple: Ct
};
const xt = ne("<div><div class=\"flex flex-col items-start justify-start\"><div>PLAYER LIST</div><div>HERE YOU CAN SEE ALL PLAYERS</div></div><div>TOTAL PLAYERS<div></div></div><div>TOTAL IN SCOPE<div></div></div><div><div>Exit</div><div>ESC");
function St() {
  const {
    data: _0x41ad24
  } = he();
  return (() => {
    const _0x1d4587 = xt();
    const _0x338754 = _0x1d4587.firstChild;
    const _0x10319d = _0x338754.firstChild;
    const _0x3554bf = _0x10319d.nextSibling;
    const _0x55a6a4 = _0x338754.nextSibling;
    const _0x2b0344 = _0x55a6a4.firstChild;
    const _0x29e0ac = _0x2b0344.nextSibling;
    const _0x395aae = _0x55a6a4.nextSibling;
    const _0x303b31 = _0x395aae.firstChild;
    const _0x5caac4 = _0x303b31.nextSibling;
    const _0x52cfdc = _0x395aae.nextSibling;
    const _0x5d5e75 = _0x52cfdc.firstChild;
    const _0xa50ba7 = _0x5d5e75.nextSibling;
    E(_0x29e0ac, () => _0x41ad24.playerList.length);
    E(_0x5caac4, () => _0x41ad24.playersInScope);
    N(_0x490bb2 => {
      const _0x262fe7 = S.header;
      const _0x259b4d = S.title;
      const _0x12c079 = S.description;
      const _0x47c997 = S.playerCount;
      const _0x3487c7 = S.count;
      const _0x14ee33 = S.playerCount;
      const _0x5d741c = {
        [S.purple]: true
      };
      const _0x3642a5 = S.count;
      const _0x2b322e = S.keybind;
      const _0x4646c1 = S.text;
      const _0x43666f = S.button;
      if (_0x262fe7 !== _0x490bb2._v$) {
        p(_0x1d4587, _0x490bb2._v$ = _0x262fe7);
      }
      if (_0x259b4d !== _0x490bb2._v$2) {
        p(_0x10319d, _0x490bb2._v$2 = _0x259b4d);
      }
      if (_0x12c079 !== _0x490bb2._v$3) {
        p(_0x3554bf, _0x490bb2._v$3 = _0x12c079);
      }
      if (_0x47c997 !== _0x490bb2._v$4) {
        p(_0x55a6a4, _0x490bb2._v$4 = _0x47c997);
      }
      if (_0x3487c7 !== _0x490bb2._v$5) {
        p(_0x29e0ac, _0x490bb2._v$5 = _0x3487c7);
      }
      if (_0x14ee33 !== _0x490bb2._v$6) {
        p(_0x395aae, _0x490bb2._v$6 = _0x14ee33);
      }
      _0x490bb2._v$7 = ce(_0x395aae, _0x5d741c, _0x490bb2._v$7);
      if (_0x3642a5 !== _0x490bb2._v$8) {
        p(_0x5caac4, _0x490bb2._v$8 = _0x3642a5);
      }
      if (_0x2b322e !== _0x490bb2._v$9) {
        p(_0x52cfdc, _0x490bb2._v$9 = _0x2b322e);
      }
      if (_0x4646c1 !== _0x490bb2._v$10) {
        p(_0x5d5e75, _0x490bb2._v$10 = _0x4646c1);
      }
      if (_0x43666f !== _0x490bb2._v$11) {
        p(_0xa50ba7, _0x490bb2._v$11 = _0x43666f);
      }
      return _0x490bb2;
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
      _v$11: undefined
    });
    return _0x1d4587;
  })();
}
const Et = "_nav_1nlvo_1";
const Lt = "_button_1nlvo_9";
const Pt = "_green_1nlvo_20";
const Tt = "_active_1nlvo_29";
const Ot = "_red_1nlvo_33";
const j = {
  nav: Et,
  button: Lt,
  green: Pt,
  active: Tt,
  red: Ot
};
const Nt = ne("<div><div>Online Player List</div><div>Disconnected Player List");
function kt() {
  const {
    page: _0x3c811a,
    setPage: _0x48e73f
  } = he();
  return (() => {
    const _0x538348 = Nt();
    const _0x569d57 = _0x538348.firstChild;
    const _0xf312d8 = _0x569d57.nextSibling;
    _0x569d57.$$click = () => _0x48e73f("online");
    _0xf312d8.$$click = () => _0x48e73f("recent");
    N(_0xa8104 => {
      const _0x15b6d1 = j.nav;
      const _0x3dc42f = j.button;
      const _0x4486f3 = {
        [j.green]: true,
        [j.active]: _0x3c811a() === "online"
      };
      const _0x5dc6b6 = j.button;
      const _0x564cf3 = {
        [j.red]: true,
        [j.active]: _0x3c811a() === "recent"
      };
      if (_0x15b6d1 !== _0xa8104._v$) {
        p(_0x538348, _0xa8104._v$ = _0x15b6d1);
      }
      if (_0x3dc42f !== _0xa8104._v$2) {
        p(_0x569d57, _0xa8104._v$2 = _0x3dc42f);
      }
      _0xa8104._v$3 = ce(_0x569d57, _0x4486f3, _0xa8104._v$3);
      if (_0x5dc6b6 !== _0xa8104._v$4) {
        p(_0xf312d8, _0xa8104._v$4 = _0x5dc6b6);
      }
      _0xa8104._v$5 = ce(_0xf312d8, _0x564cf3, _0xa8104._v$5);
      return _0xa8104;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return _0x538348;
  })();
}
ot(["click"]);
const jt = "_App_l24zp_1";
const Dt = "_playerList_l24zp_11";
const Bt = "_list_l24zp_24";
const It = "_playerBox_l24zp_35";
const Rt = "_player_l24zp_11";
const Ft = "_steam_l24zp_65";
const R = {
  App: jt,
  playerList: Dt,
  list: Bt,
  playerBox: It,
  player: Rt,
  steam: Ft
};
var Mt = () => {};
var we = (_0x1eddf7, _0x58b5e9) => _0x58b5e9();
function Kt(_0x3b0c3a, _0x41b424) {
  const _0x459121 = x(_0x3b0c3a);
  const _0x5330ef = _0x459121 ? [_0x459121] : [];
  const {
    onEnter: _0x82f81b = we,
    onExit: _0x4a2caf = we
  } = _0x41b424;
  const [_0x2ab6ba, _0x318cc5] = F(_0x41b424.appear ? [] : _0x5330ef);
  const [_0xcfc98] = ze();
  let _0x2265f9;
  let _0x5f91ee = false;
  function _0x2b6a19(_0x466a64, _0x5189d7) {
    if (!_0x466a64) {
      return _0x5189d7 && _0x5189d7();
    }
    _0x5f91ee = true;
    _0x4a2caf(_0x466a64, () => {
      oe(() => {
        _0x5f91ee = false;
        _0x318cc5(_0x100bcc => _0x100bcc.filter(_0x1fa3c2 => _0x1fa3c2 !== _0x466a64));
        if (_0x5189d7) {
          _0x5189d7();
        }
      });
    });
  }
  function _0x1842a0(_0x58c232) {
    const _0x965cca = _0x2265f9;
    if (!_0x965cca) {
      return _0x58c232 && _0x58c232();
    }
    _0x2265f9 = undefined;
    _0x318cc5(_0x4041d3 => [_0x965cca, ..._0x4041d3]);
    _0x82f81b(_0x965cca, _0x58c232 ?? Mt);
  }
  const _0x273d2e = _0x41b424.mode === "out-in" ? _0x144279 => _0x5f91ee || _0x2b6a19(_0x144279, _0x1842a0) : _0x41b424.mode === "in-out" ? _0x1cadeb => _0x1842a0(() => _0x2b6a19(_0x1cadeb)) : _0x195db5 => {
    _0x2b6a19(_0x195db5);
    _0x1842a0();
  };
  Ke(_0x4f790d => {
    const _0xca38a9 = _0x3b0c3a();
    if (x(_0xcfc98)) {
      _0xcfc98();
      return _0x4f790d;
    } else {
      if (_0xca38a9 !== _0x4f790d) {
        _0x2265f9 = _0xca38a9;
        oe(() => x(() => _0x273d2e(_0x4f790d)));
      }
      return _0xca38a9;
    }
  }, _0x41b424.appear ? undefined : _0x459121);
  return _0x2ab6ba;
}
var me = _0x139794 => _0x139794 instanceof Element;
function de(_0x14e0be, _0x2ee891) {
  if (_0x2ee891(_0x14e0be)) {
    return _0x14e0be;
  }
  if (typeof _0x14e0be == "function" && !_0x14e0be.length) {
    return de(_0x14e0be(), _0x2ee891);
  }
  if (Array.isArray(_0x14e0be)) {
    for (const _0x480352 of _0x14e0be) {
      const _0x2b6003 = de(_0x480352, _0x2ee891);
      if (_0x2b6003) {
        return _0x2b6003;
      }
    }
  }
  return null;
}
function Ut(_0x369472, _0x59b9d8 = me, _0x423d8b = me) {
  const _0x10305f = k(_0x369472);
  return k(() => de(_0x10305f(), _0x59b9d8));
}
function qt(_0x31a0f4) {
  return k(() => {
    const _0x5eb25b = _0x31a0f4.name || "s";
    return {
      enterActive: (_0x31a0f4.enterActiveClass || _0x5eb25b + "-enter-active").split(" "),
      enter: (_0x31a0f4.enterClass || _0x5eb25b + "-enter").split(" "),
      enterTo: (_0x31a0f4.enterToClass || _0x5eb25b + "-enter-to").split(" "),
      exitActive: (_0x31a0f4.exitActiveClass || _0x5eb25b + "-exit-active").split(" "),
      exit: (_0x31a0f4.exitClass || _0x5eb25b + "-exit").split(" "),
      exitTo: (_0x31a0f4.exitToClass || _0x5eb25b + "-exit-to").split(" "),
      move: (_0x31a0f4.moveClass || _0x5eb25b + "-move").split(" ")
    };
  });
}
function Re(_0x360a36) {
  requestAnimationFrame(() => requestAnimationFrame(_0x360a36));
}
function Vt(_0x43e4be, _0x170570, _0x17f90f, _0x2a1a26) {
  const {
    onBeforeEnter: _0x33da67,
    onEnter: _0x3b19fb,
    onAfterEnter: _0x1a0624
  } = _0x170570;
  _0x33da67?.(_0x17f90f);
  _0x17f90f.classList.add(..._0x43e4be.enter);
  _0x17f90f.classList.add(..._0x43e4be.enterActive);
  queueMicrotask(() => {
    if (!_0x17f90f.parentNode) {
      return _0x2a1a26?.();
    }
    _0x3b19fb?.(_0x17f90f, () => _0x2637db());
  });
  Re(() => {
    _0x17f90f.classList.remove(..._0x43e4be.enter);
    _0x17f90f.classList.add(..._0x43e4be.enterTo);
    if (!_0x3b19fb || _0x3b19fb.length < 2) {
      _0x17f90f.addEventListener("transitionend", _0x2637db);
      _0x17f90f.addEventListener("animationend", _0x2637db);
    }
  });
  function _0x2637db(_0x14a64c) {
    if (!_0x14a64c || _0x14a64c.target === _0x17f90f) {
      _0x2a1a26?.();
      _0x17f90f.removeEventListener("transitionend", _0x2637db);
      _0x17f90f.removeEventListener("animationend", _0x2637db);
      _0x17f90f.classList.remove(..._0x43e4be.enterActive);
      _0x17f90f.classList.remove(..._0x43e4be.enterTo);
      _0x1a0624?.(_0x17f90f);
    }
  }
}
function zt(_0xe4c361, _0x5f105b, _0x5d9da2, _0x1f4e05) {
  const {
    onBeforeExit: _0x1ed707,
    onExit: _0x41e57d,
    onAfterExit: _0x777899
  } = _0x5f105b;
  if (!_0x5d9da2.parentNode) {
    return _0x1f4e05?.();
  }
  _0x1ed707?.(_0x5d9da2);
  _0x5d9da2.classList.add(..._0xe4c361.exit);
  _0x5d9da2.classList.add(..._0xe4c361.exitActive);
  _0x41e57d?.(_0x5d9da2, () => _0x3e041a());
  Re(() => {
    _0x5d9da2.classList.remove(..._0xe4c361.exit);
    _0x5d9da2.classList.add(..._0xe4c361.exitTo);
    if (!_0x41e57d || _0x41e57d.length < 2) {
      _0x5d9da2.addEventListener("transitionend", _0x3e041a);
      _0x5d9da2.addEventListener("animationend", _0x3e041a);
    }
  });
  function _0x3e041a(_0x1a07ee) {
    if (!_0x1a07ee || _0x1a07ee.target === _0x5d9da2) {
      _0x1f4e05?.();
      _0x5d9da2.removeEventListener("transitionend", _0x3e041a);
      _0x5d9da2.removeEventListener("animationend", _0x3e041a);
      _0x5d9da2.classList.remove(..._0xe4c361.exitActive);
      _0x5d9da2.classList.remove(..._0xe4c361.exitTo);
      _0x777899?.(_0x5d9da2);
    }
  }
}
var Yt = {
  inout: "in-out",
  outin: "out-in"
};
var Ht = _0xec842c => {
  const _0x25f488 = qt(_0xec842c);
  return Kt(Ut(() => _0xec842c.children), {
    mode: Yt[_0xec842c.mode],
    appear: _0xec842c.appear,
    onEnter(_0x10c40b, _0x3ea997) {
      Vt(_0x25f488(), _0xec842c, _0x10c40b, _0x3ea997);
    },
    onExit(_0x1a5838, _0x5ba443) {
      zt(_0x25f488(), _0xec842c, _0x1a5838, _0x5ba443);
    }
  });
};
const Wt = ne("<div><div><div>");
const Gt = ne("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\"><div><svg width=\"1.66vh\" height=\"2.03vh\" viewBox=\"0 0 18 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.073 0.0549842C6.92116 0.239561 5.89206 0.795829 5.08544 1.66987C4.20059 2.6287 3.74203 3.7359 3.67897 5.06582C3.59091 6.92329 4.48512 8.69893 6.02686 9.7281C6.78518 10.2343 7.51659 10.4913 8.40249 10.5628C10.0445 10.6954 11.4447 10.1694 12.575 8.99504C13.4699 8.06544 13.9274 7.05399 14.0389 5.75946C14.1877 4.0302 13.5494 2.4197 12.2697 1.29607C11.4444 0.571353 10.6829 0.21342 9.63359 0.0569189C9.12948 -0.0182791 8.53485 -0.01901 8.073 0.0549842ZM4.2423 10.6591C2.33493 10.8645 1.01319 12.2596 0.396845 14.7182C-0.0141379 16.3576 -0.119836 18.3275 0.14538 19.4046C0.358463 20.2698 1.06115 21.1479 1.8751 21.5659C2.24483 21.7558 2.77303 21.9133 3.21345 21.9649C3.47441 21.9955 5.46644 22.006 9.27507 21.9968L14.948 21.9831L15.3065 21.8828C16.6375 21.5104 17.5509 20.6014 17.8833 19.3186C18.0565 18.6504 18.0343 17.0603 17.8343 15.8038C17.3897 13.0107 16.2679 11.3338 14.4936 10.8096C14.0878 10.6898 13.362 10.5987 13.1469 10.6406C12.9411 10.6807 12.6533 10.8374 12.0038 11.2631C11.3119 11.7165 11.216 11.7682 10.6979 11.966C10.0978 12.1951 9.60263 12.2918 9.02787 12.2918C8.43383 12.2919 7.97958 12.2089 7.38044 11.9911C6.81466 11.7854 6.79015 11.7722 5.90657 11.2002C5.44062 10.8985 5.0959 10.7053 4.95891 10.6691C4.72478 10.6072 4.72482 10.6072 4.2423 10.6591Z\" fill=\"#00F8B9\"></div><div><span> [<!>]</span><div>");
function Xt() {
  const _0x15777c = _0x38f086 => {
    if (_0x38f086.key === "Escape" && _0xfd71b2()) {
      _0x102a6c(false);
      _0xed2798.execute("close");
    }
  };
  qe(async () => {
    document.addEventListener("keydown", _0x15777c);
  });
  Se(() => {
    document.removeEventListener("keydown", _0x15777c);
  });
  const {
    data: _0x3c16f2,
    visible: _0xfd71b2,
    setVisible: _0x102a6c,
    setData: _0x34f30d,
    page: _0x1317d8
  } = he();
  _0xed2798.register("playerlist:show", async _0x2812be => {
    if (_0x2812be) {
      const _0x2e8240 = await _0xed2798.execute("playerlist:getPlayerData");
      _0x34f30d(_0x2e8240);
    }
    _0x102a6c(_0x2812be);
  });
  return O(Ht, {
    name: "slide-fade",
    get children() {
      return O(it, {
        get when() {
          return _0xfd71b2();
        },
        get children() {
          const _0x251268 = Wt();
          const _0x141859 = _0x251268.firstChild;
          const _0x4054dd = _0x141859.firstChild;
          E(_0x141859, O(St, {}), _0x4054dd);
          E(_0x141859, O(kt, {}), _0x4054dd);
          E(_0x4054dd, O(nt, {
            get each() {
              if (_0x1317d8() === "online") {
                return _0x3c16f2.playerList;
              } else {
                return _0x3c16f2.recentPlayers;
              }
            },
            children: _0x4d9e94 => (() => {
              const _0x741317 = Gt();
              const _0x5a95f2 = _0x741317.firstChild;
              const _0x14b3cb = _0x5a95f2.nextSibling;
              const _0x1ce428 = _0x14b3cb.firstChild;
              const _0x32d723 = _0x1ce428.firstChild;
              const _0x20c1d2 = _0x32d723.nextSibling;
              _0x20c1d2.nextSibling;
              const _0x5c25ab = _0x1ce428.nextSibling;
              E(_0x1ce428, () => _0x4d9e94.name, _0x32d723);
              E(_0x1ce428, () => _0x4d9e94.src, _0x20c1d2);
              E(_0x5c25ab, () => _0x4d9e94.steamid);
              N(_0xaf41bc => {
                const _0x49bfd6 = R.playerBox;
                const _0x36c4b6 = R.player;
                const _0x25b389 = R.steam;
                if (_0x49bfd6 !== _0xaf41bc._v$4) {
                  p(_0x5a95f2, _0xaf41bc._v$4 = _0x49bfd6);
                }
                if (_0x36c4b6 !== _0xaf41bc._v$5) {
                  p(_0x14b3cb, _0xaf41bc._v$5 = _0x36c4b6);
                }
                if (_0x25b389 !== _0xaf41bc._v$6) {
                  p(_0x5c25ab, _0xaf41bc._v$6 = _0x25b389);
                }
                return _0xaf41bc;
              }, {
                _v$4: undefined,
                _v$5: undefined,
                _v$6: undefined
              });
              return _0x741317;
            })()
          }));
          N(_0x1d0868 => {
            const _0x26382b = R.App;
            const _0x1927b6 = R.playerList;
            const _0x1b60bc = R.list;
            if (_0x26382b !== _0x1d0868._v$) {
              p(_0x251268, _0x1d0868._v$ = _0x26382b);
            }
            if (_0x1927b6 !== _0x1d0868._v$2) {
              p(_0x141859, _0x1d0868._v$2 = _0x1927b6);
            }
            if (_0x1b60bc !== _0x1d0868._v$3) {
              p(_0x4054dd, _0x1d0868._v$3 = _0x1b60bc);
            }
            return _0x1d0868;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined
          });
          return _0x251268;
        }
      });
    }
  });
}
rt(() => O(ht, {
  get children() {
    return O(Xt, {});
  }
}), document.getElementById("root"));