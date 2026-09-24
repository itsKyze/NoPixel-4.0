import './style.css';
import { N as _0x115b3d } from "./v-packages.js";
(function () {
  const _0x31ac10 = document.createElement("link").relList;
  if (_0x31ac10 && _0x31ac10.supports && _0x31ac10.supports("modulepreload")) {
    return;
  }
  for (const _0x5d682c of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x2442d4(_0x5d682c);
  }
  new MutationObserver(_0x46137c => {
    for (const _0x56df98 of _0x46137c) {
      if (_0x56df98.type === "childList") {
        for (const _0x478d0f of _0x56df98.addedNodes) {
          if (_0x478d0f.tagName === "LINK" && _0x478d0f.rel === "modulepreload") {
            _0x2442d4(_0x478d0f);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x3e5cd5(_0x3e0026) {
    const _0x1f80e5 = {};
    if (_0x3e0026.integrity) {
      _0x1f80e5.integrity = _0x3e0026.integrity;
    }
    if (_0x3e0026.referrerPolicy) {
      _0x1f80e5.referrerPolicy = _0x3e0026.referrerPolicy;
    }
    if (_0x3e0026.crossOrigin === "use-credentials") {
      _0x1f80e5.credentials = "include";
    } else if (_0x3e0026.crossOrigin === "anonymous") {
      _0x1f80e5.credentials = "omit";
    } else {
      _0x1f80e5.credentials = "same-origin";
    }
    return _0x1f80e5;
  }
  function _0x2442d4(_0x26181f) {
    if (_0x26181f.ep) {
      return;
    }
    _0x26181f.ep = true;
    const _0x374764 = _0x3e5cd5(_0x26181f);
    fetch(_0x26181f.href, _0x374764);
  }
})();
const Ke = (_0x24f15a, _0xaf86f3) => _0x24f15a === _0xaf86f3;
const P = Symbol("solid-proxy");
const ae = Symbol("solid-track");
const z = {
  equals: Ke
};
let Se = Ne;
const I = 1;
const J = 2;
const Te = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var p = null;
let ce = null;
let m = null;
let x = null;
let O = null;
let oe = 0;
const [Ue, Zt] = V(false);
function Y(_0x485725, _0xb3a027) {
  const _0x5ee7c1 = m;
  const _0x49830a = p;
  const _0x6c0eb3 = _0x485725.length === 0;
  const _0x4434f0 = _0x6c0eb3 ? Te : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0xb3a027 === undefined ? _0x49830a : _0xb3a027
  };
  const _0x48ac79 = _0x6c0eb3 ? _0x485725 : () => _0x485725(() => $(() => le(_0x4434f0)));
  p = _0x4434f0;
  m = null;
  try {
    return k(_0x48ac79, true);
  } finally {
    m = _0x5ee7c1;
    p = _0x49830a;
  }
}
function V(_0x15b2a9, _0x330d7c) {
  _0x330d7c = _0x330d7c ? Object.assign({}, z, _0x330d7c) : z;
  const _0x4fbaf8 = {
    value: _0x15b2a9,
    observers: null,
    observerSlots: null,
    comparator: _0x330d7c.equals || undefined
  };
  const _0x54e78e = _0x5ec2f4 => {
    if (typeof _0x5ec2f4 == "function") {
      _0x5ec2f4 = _0x5ec2f4(_0x4fbaf8.value);
    }
    return Ie(_0x4fbaf8, _0x5ec2f4);
  };
  return [Oe.bind(_0x4fbaf8), _0x54e78e];
}
function qe(_0x52c88c, _0x1e5cae, _0x4ad704) {
  const _0x1a1ceb = re(_0x52c88c, _0x1e5cae, true, I);
  H(_0x1a1ceb);
}
function E(_0x47f74a, _0x3ea380, _0x300ed4) {
  const _0x29500a = re(_0x47f74a, _0x3ea380, false, I);
  H(_0x29500a);
}
function Ve(_0x2aac1f, _0xd5552f, _0x35f7b6) {
  Se = nt;
  const _0x49abe4 = re(_0x2aac1f, _0xd5552f, false, I);
  if (!_0x35f7b6 || !_0x35f7b6.render) {
    _0x49abe4.user = true;
  }
  if (O) {
    O.push(_0x49abe4);
  } else {
    H(_0x49abe4);
  }
}
function L(_0x5e7341, _0x5a63e7, _0x4fc2d8) {
  _0x4fc2d8 = _0x4fc2d8 ? Object.assign({}, z, _0x4fc2d8) : z;
  const _0x2412b4 = re(_0x5e7341, _0x5a63e7, true, 0);
  _0x2412b4.observers = null;
  _0x2412b4.observerSlots = null;
  _0x2412b4.comparator = _0x4fc2d8.equals || undefined;
  H(_0x2412b4);
  return Oe.bind(_0x2412b4);
}
function fe(_0x2bc965) {
  return k(_0x2bc965, false);
}
function $(_0x2670c3) {
  if (m === null) {
    return _0x2670c3();
  }
  const _0x2527db = m;
  m = null;
  try {
    return _0x2670c3();
  } finally {
    m = _0x2527db;
  }
}
function Xe(_0x50fe75) {
  Ve(() => $(_0x50fe75));
}
function Ee(_0xcad4f4) {
  if (p !== null) {
    if (p.cleanups === null) {
      p.cleanups = [_0xcad4f4];
    } else {
      p.cleanups.push(_0xcad4f4);
    }
  }
  return _0xcad4f4;
}
function Ce() {
  return m;
}
function Qe(_0x4e805e) {
  const _0x5162be = m;
  const _0x486779 = p;
  return Promise.resolve().then(() => {
    m = _0x5162be;
    p = _0x486779;
    let _0x211cc6;
    k(_0x4e805e, false);
    m = p = null;
    if (_0x211cc6) {
      return _0x211cc6.done;
    } else {
      return undefined;
    }
  });
}
function Ye() {
  return [Ue, Qe];
}
function ze(_0x1a6946, _0x1f8626) {
  const _0x1f2885 = Symbol("context");
  return {
    id: _0x1f2885,
    Provider: st(_0x1f2885),
    defaultValue: _0x1a6946
  };
}
function Je(_0x83b2ef) {
  let _0x4c1915;
  if ((_0x4c1915 = Pe(p, _0x83b2ef.id)) !== undefined) {
    return _0x4c1915;
  } else {
    return _0x83b2ef.defaultValue;
  }
}
function Ze(_0x58af26) {
  const _0x19dc38 = L(_0x58af26);
  const _0x3f49af = L(() => de(_0x19dc38()));
  _0x3f49af.toArray = () => {
    const _0x32b563 = _0x3f49af();
    if (Array.isArray(_0x32b563)) {
      return _0x32b563;
    } else if (_0x32b563 != null) {
      return [_0x32b563];
    } else {
      return [];
    }
  };
  return _0x3f49af;
}
function Oe() {
  if (this.sources && this.state) {
    if (this.state === I) {
      H(this);
    } else {
      const _0x2abc35 = x;
      x = null;
      k(() => ee(this), false);
      x = _0x2abc35;
    }
  }
  if (m) {
    const _0x4e8119 = this.observers ? this.observers.length : 0;
    if (m.sources) {
      m.sources.push(this);
      m.sourceSlots.push(_0x4e8119);
    } else {
      m.sources = [this];
      m.sourceSlots = [_0x4e8119];
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
function Ie(_0x1022f9, _0x29c78b, _0x2d2a08) {
  let _0x3a08a0 = _0x1022f9.value;
  if (!_0x1022f9.comparator || !_0x1022f9.comparator(_0x3a08a0, _0x29c78b)) {
    _0x1022f9.value = _0x29c78b;
    if (_0x1022f9.observers && _0x1022f9.observers.length) {
      k(() => {
        for (let _0x24e721 = 0; _0x24e721 < _0x1022f9.observers.length; _0x24e721 += 1) {
          const _0x51cf37 = _0x1022f9.observers[_0x24e721];
          const _0x49372c = ce && ce.running;
          if (_0x49372c) {
            ce.disposed.has(_0x51cf37);
          }
          if (_0x49372c ? !_0x51cf37.tState : !_0x51cf37.state) {
            if (_0x51cf37.pure) {
              x.push(_0x51cf37);
            } else {
              O.push(_0x51cf37);
            }
            if (_0x51cf37.observers) {
              Le(_0x51cf37);
            }
          }
          if (!_0x49372c) {
            _0x51cf37.state = I;
          }
        }
        if (x.length > 1000000) {
          x = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x29c78b;
}
function H(_0xd7713c) {
  if (!_0xd7713c.fn) {
    return;
  }
  le(_0xd7713c);
  const _0x531f77 = p;
  const _0x17ac7c = m;
  const _0x3aee76 = oe;
  m = p = _0xd7713c;
  et(_0xd7713c, _0xd7713c.value, _0x3aee76);
  m = _0x17ac7c;
  p = _0x531f77;
}
function et(_0x6e7261, _0x3b8052, _0x20d05e) {
  let _0x34c37a;
  try {
    _0x34c37a = _0x6e7261.fn(_0x3b8052);
  } catch (_0x1eb5f6) {
    if (_0x6e7261.pure) {
      _0x6e7261.state = I;
      if (_0x6e7261.owned) {
        _0x6e7261.owned.forEach(le);
      }
      _0x6e7261.owned = null;
    }
    _0x6e7261.updatedAt = _0x20d05e + 1;
    return Me(_0x1eb5f6);
  }
  if (!_0x6e7261.updatedAt || _0x6e7261.updatedAt <= _0x20d05e) {
    if (_0x6e7261.updatedAt != null && "observers" in _0x6e7261) {
      Ie(_0x6e7261, _0x34c37a);
    } else {
      _0x6e7261.value = _0x34c37a;
    }
    _0x6e7261.updatedAt = _0x20d05e;
  }
}
function re(_0xf616e3, _0x52d412, _0x2deb8e, _0x246198 = I, _0x19317a) {
  const _0x3b2f15 = {
    fn: _0xf616e3,
    state: _0x246198,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x52d412,
    owner: p,
    context: null,
    pure: _0x2deb8e
  };
  if (p !== null) {
    if (p !== Te) {
      if (p.owned) {
        p.owned.push(_0x3b2f15);
      } else {
        p.owned = [_0x3b2f15];
      }
    }
  }
  return _0x3b2f15;
}
function Z(_0x2e0a8c) {
  if (_0x2e0a8c.state === 0) {
    return;
  }
  if (_0x2e0a8c.state === J) {
    return ee(_0x2e0a8c);
  }
  if (_0x2e0a8c.suspense && $(_0x2e0a8c.suspense.inFallback)) {
    return _0x2e0a8c.suspense.effects.push(_0x2e0a8c);
  }
  const _0x127a3e = [_0x2e0a8c];
  while ((_0x2e0a8c = _0x2e0a8c.owner) && (!_0x2e0a8c.updatedAt || _0x2e0a8c.updatedAt < oe)) {
    if (_0x2e0a8c.state) {
      _0x127a3e.push(_0x2e0a8c);
    }
  }
  for (let _0x13ac1e = _0x127a3e.length - 1; _0x13ac1e >= 0; _0x13ac1e--) {
    _0x2e0a8c = _0x127a3e[_0x13ac1e];
    if (_0x2e0a8c.state === I) {
      H(_0x2e0a8c);
    } else if (_0x2e0a8c.state === J) {
      const _0x35df3e = x;
      x = null;
      k(() => ee(_0x2e0a8c, _0x127a3e[0]), false);
      x = _0x35df3e;
    }
  }
}
function k(_0xe8d4fe, _0x11d04e) {
  if (x) {
    return _0xe8d4fe();
  }
  let _0x510608 = false;
  if (!_0x11d04e) {
    x = [];
  }
  if (O) {
    _0x510608 = true;
  } else {
    O = [];
  }
  oe++;
  try {
    const _0x48436b = _0xe8d4fe();
    tt(_0x510608);
    return _0x48436b;
  } catch (_0x5eb983) {
    if (!_0x510608) {
      O = null;
    }
    x = null;
    Me(_0x5eb983);
  }
}
function tt(_0x56880a) {
  if (x) {
    Ne(x);
    x = null;
  }
  if (_0x56880a) {
    return;
  }
  const _0x160f97 = O;
  O = null;
  if (_0x160f97.length) {
    k(() => Se(_0x160f97), false);
  }
}
function Ne(_0xc6a8c4) {
  for (let _0x1aed8a = 0; _0x1aed8a < _0xc6a8c4.length; _0x1aed8a++) {
    Z(_0xc6a8c4[_0x1aed8a]);
  }
}
function nt(_0x321385) {
  let _0x470aae;
  let _0x38d382 = 0;
  for (_0x470aae = 0; _0x470aae < _0x321385.length; _0x470aae++) {
    const _0x3783e0 = _0x321385[_0x470aae];
    if (_0x3783e0.user) {
      _0x321385[_0x38d382++] = _0x3783e0;
    } else {
      Z(_0x3783e0);
    }
  }
  for (_0x470aae = 0; _0x470aae < _0x38d382; _0x470aae++) {
    Z(_0x321385[_0x470aae]);
  }
}
function ee(_0x4c3bc1, _0x315688) {
  _0x4c3bc1.state = 0;
  for (let _0x31b888 = 0; _0x31b888 < _0x4c3bc1.sources.length; _0x31b888 += 1) {
    const _0x4d316e = _0x4c3bc1.sources[_0x31b888];
    if (_0x4d316e.sources) {
      const _0x4cb958 = _0x4d316e.state;
      if (_0x4cb958 === I) {
        if (_0x4d316e !== _0x315688 && (!_0x4d316e.updatedAt || _0x4d316e.updatedAt < oe)) {
          Z(_0x4d316e);
        }
      } else if (_0x4cb958 === J) {
        ee(_0x4d316e, _0x315688);
      }
    }
  }
}
function Le(_0x5814a9) {
  for (let _0x571085 = 0; _0x571085 < _0x5814a9.observers.length; _0x571085 += 1) {
    const _0x312497 = _0x5814a9.observers[_0x571085];
    if (!_0x312497.state) {
      _0x312497.state = J;
      if (_0x312497.pure) {
        x.push(_0x312497);
      } else {
        O.push(_0x312497);
      }
      if (_0x312497.observers) {
        Le(_0x312497);
      }
    }
  }
}
function le(_0x3cac60) {
  let _0x17faf4;
  if (_0x3cac60.sources) {
    while (_0x3cac60.sources.length) {
      const _0xdbae87 = _0x3cac60.sources.pop();
      const _0x36219f = _0x3cac60.sourceSlots.pop();
      const _0x136283 = _0xdbae87.observers;
      if (_0x136283 && _0x136283.length) {
        const _0x2cf285 = _0x136283.pop();
        const _0x35d595 = _0xdbae87.observerSlots.pop();
        if (_0x36219f < _0x136283.length) {
          _0x2cf285.sourceSlots[_0x35d595] = _0x36219f;
          _0x136283[_0x36219f] = _0x2cf285;
          _0xdbae87.observerSlots[_0x36219f] = _0x35d595;
        }
      }
    }
  }
  if (_0x3cac60.owned) {
    for (_0x17faf4 = _0x3cac60.owned.length - 1; _0x17faf4 >= 0; _0x17faf4--) {
      le(_0x3cac60.owned[_0x17faf4]);
    }
    _0x3cac60.owned = null;
  }
  if (_0x3cac60.cleanups) {
    for (_0x17faf4 = _0x3cac60.cleanups.length - 1; _0x17faf4 >= 0; _0x17faf4--) {
      _0x3cac60.cleanups[_0x17faf4]();
    }
    _0x3cac60.cleanups = null;
  }
  _0x3cac60.state = 0;
  _0x3cac60.context = null;
}
function Me(_0x14f495) {
  throw _0x14f495;
}
function Pe(_0x2e897e, _0x35b67c) {
  if (_0x2e897e) {
    if (_0x2e897e.context && _0x2e897e.context[_0x35b67c] !== undefined) {
      return _0x2e897e.context[_0x35b67c];
    } else {
      return Pe(_0x2e897e.owner, _0x35b67c);
    }
  } else {
    return undefined;
  }
}
function de(_0x2680df) {
  if (typeof _0x2680df == "function" && !_0x2680df.length) {
    return de(_0x2680df());
  }
  if (Array.isArray(_0x2680df)) {
    const _0x501796 = [];
    for (let _0x20d4ec = 0; _0x20d4ec < _0x2680df.length; _0x20d4ec++) {
      const _0x3ff8a0 = de(_0x2680df[_0x20d4ec]);
      if (Array.isArray(_0x3ff8a0)) {
        _0x501796.push.apply(_0x501796, _0x3ff8a0);
      } else {
        _0x501796.push(_0x3ff8a0);
      }
    }
    return _0x501796;
  }
  return _0x2680df;
}
function st(_0x1c943c, _0x463390) {
  return function (_0x18c5df) {
    let _0x2f4001;
    E(() => _0x2f4001 = $(() => {
      p.context = {
        [_0x1c943c]: _0x18c5df.value
      };
      return Ze(() => _0x18c5df.children);
    }), undefined);
    return _0x2f4001;
  };
}
const it = Symbol("fallback");
function ve(_0x5f2957) {
  for (let _0x4919ef = 0; _0x4919ef < _0x5f2957.length; _0x4919ef++) {
    _0x5f2957[_0x4919ef]();
  }
}
function ot(_0x23ed15, _0x22856d, _0x3406e4 = {}) {
  let _0x51f143 = [];
  let _0x143aae = [];
  let _0xb9fa8d = [];
  let _0x506cf7 = 0;
  let _0x4daabb = _0x22856d.length > 1 ? [] : null;
  Ee(() => ve(_0xb9fa8d));
  return () => {
    let _0x341144 = _0x23ed15() || [];
    let _0xc4b1b8;
    let _0x443442;
    _0x341144[ae];
    return $(() => {
      let _0x5c22d5 = _0x341144.length;
      let _0x538633;
      let _0x4c45eb;
      let _0x1a5024;
      let _0x2d80a3;
      let _0x5b7534;
      let _0x29aa7f;
      let _0x29b0eb;
      let _0x5ef5d3;
      let _0x5eb06f;
      if (_0x5c22d5 === 0) {
        if (_0x506cf7 !== 0) {
          ve(_0xb9fa8d);
          _0xb9fa8d = [];
          _0x51f143 = [];
          _0x143aae = [];
          _0x506cf7 = 0;
          _0x4daabb &&= [];
        }
        if (_0x3406e4.fallback) {
          _0x51f143 = [it];
          _0x143aae[0] = Y(_0x4df522 => {
            _0xb9fa8d[0] = _0x4df522;
            return _0x3406e4.fallback();
          });
          _0x506cf7 = 1;
        }
      } else if (_0x506cf7 === 0) {
        _0x143aae = new Array(_0x5c22d5);
        _0x443442 = 0;
        for (; _0x443442 < _0x5c22d5; _0x443442++) {
          _0x51f143[_0x443442] = _0x341144[_0x443442];
          _0x143aae[_0x443442] = Y(_0xf3c3ba);
        }
        _0x506cf7 = _0x5c22d5;
      } else {
        _0x1a5024 = new Array(_0x5c22d5);
        _0x2d80a3 = new Array(_0x5c22d5);
        if (_0x4daabb) {
          _0x5b7534 = new Array(_0x5c22d5);
        }
        _0x29aa7f = 0;
        _0x29b0eb = Math.min(_0x506cf7, _0x5c22d5);
        for (; _0x29aa7f < _0x29b0eb && _0x51f143[_0x29aa7f] === _0x341144[_0x29aa7f]; _0x29aa7f++);
        _0x29b0eb = _0x506cf7 - 1;
        _0x5ef5d3 = _0x5c22d5 - 1;
        for (; _0x29b0eb >= _0x29aa7f && _0x5ef5d3 >= _0x29aa7f && _0x51f143[_0x29b0eb] === _0x341144[_0x5ef5d3]; _0x29b0eb--, _0x5ef5d3--) {
          _0x1a5024[_0x5ef5d3] = _0x143aae[_0x29b0eb];
          _0x2d80a3[_0x5ef5d3] = _0xb9fa8d[_0x29b0eb];
          if (_0x4daabb) {
            _0x5b7534[_0x5ef5d3] = _0x4daabb[_0x29b0eb];
          }
        }
        _0x538633 = new Map();
        _0x4c45eb = new Array(_0x5ef5d3 + 1);
        _0x443442 = _0x5ef5d3;
        for (; _0x443442 >= _0x29aa7f; _0x443442--) {
          _0x5eb06f = _0x341144[_0x443442];
          _0xc4b1b8 = _0x538633.get(_0x5eb06f);
          _0x4c45eb[_0x443442] = _0xc4b1b8 === undefined ? -1 : _0xc4b1b8;
          _0x538633.set(_0x5eb06f, _0x443442);
        }
        for (_0xc4b1b8 = _0x29aa7f; _0xc4b1b8 <= _0x29b0eb; _0xc4b1b8++) {
          _0x5eb06f = _0x51f143[_0xc4b1b8];
          _0x443442 = _0x538633.get(_0x5eb06f);
          if (_0x443442 !== undefined && _0x443442 !== -1) {
            _0x1a5024[_0x443442] = _0x143aae[_0xc4b1b8];
            _0x2d80a3[_0x443442] = _0xb9fa8d[_0xc4b1b8];
            if (_0x4daabb) {
              _0x5b7534[_0x443442] = _0x4daabb[_0xc4b1b8];
            }
            _0x443442 = _0x4c45eb[_0x443442];
            _0x538633.set(_0x5eb06f, _0x443442);
          } else {
            _0xb9fa8d[_0xc4b1b8]();
          }
        }
        for (_0x443442 = _0x29aa7f; _0x443442 < _0x5c22d5; _0x443442++) {
          if (_0x443442 in _0x1a5024) {
            _0x143aae[_0x443442] = _0x1a5024[_0x443442];
            _0xb9fa8d[_0x443442] = _0x2d80a3[_0x443442];
            if (_0x4daabb) {
              _0x4daabb[_0x443442] = _0x5b7534[_0x443442];
              _0x4daabb[_0x443442](_0x443442);
            }
          } else {
            _0x143aae[_0x443442] = Y(_0xf3c3ba);
          }
        }
        _0x143aae = _0x143aae.slice(0, _0x506cf7 = _0x5c22d5);
        _0x51f143 = _0x341144.slice(0);
      }
      return _0x143aae;
    });
    function _0xf3c3ba(_0x19e83b) {
      _0xb9fa8d[_0x443442] = _0x19e83b;
      if (_0x4daabb) {
        const [_0x5d4b41, _0x301b31] = V(_0x443442);
        _0x4daabb[_0x443442] = _0x301b31;
        return _0x22856d(_0x341144[_0x443442], _0x5d4b41);
      }
      return _0x22856d(_0x341144[_0x443442]);
    }
  };
}
function y(_0x131ad8, _0x51a229) {
  return $(() => _0x131ad8(_0x51a229 || {}));
}
const rt = _0x33c9b3 => "Stale read from <" + _0x33c9b3 + ">.";
function K(_0xe6fe09) {
  const _0x253aa8 = "fallback" in _0xe6fe09 && {
    fallback: () => _0xe6fe09.fallback
  };
  return L(ot(() => _0xe6fe09.each, _0xe6fe09.children, _0x253aa8 || undefined));
}
function B(_0x521e69) {
  const _0x168640 = _0x521e69.keyed;
  const _0x4996c3 = L(() => _0x521e69.when, undefined, {
    equals: (_0xedd34a, _0x3b9bf3) => _0x168640 ? _0xedd34a === _0x3b9bf3 : !_0xedd34a == !_0x3b9bf3
  });
  return L(() => {
    const _0x491d5c = _0x4996c3();
    if (_0x491d5c) {
      const _0x472479 = _0x521e69.children;
      if (typeof _0x472479 == "function" && _0x472479.length > 0) {
        return $(() => _0x472479(_0x168640 ? _0x491d5c : () => {
          if (!$(_0x4996c3)) {
            throw rt("Show");
          }
          return _0x521e69.when;
        }));
      } else {
        return _0x472479;
      }
    }
    return _0x521e69.fallback;
  }, undefined, undefined);
}
function lt(_0xd7cfab, _0x32a047, _0x7c2f26) {
  let _0x593f17 = _0x7c2f26.length;
  let _0x3ebcdf = _0x32a047.length;
  let _0x20ddd7 = _0x593f17;
  let _0x33ac78 = 0;
  let _0xa1689a = 0;
  let _0x248a11 = _0x32a047[_0x3ebcdf - 1].nextSibling;
  let _0x35776a = null;
  while (_0x33ac78 < _0x3ebcdf || _0xa1689a < _0x20ddd7) {
    if (_0x32a047[_0x33ac78] === _0x7c2f26[_0xa1689a]) {
      _0x33ac78++;
      _0xa1689a++;
      continue;
    }
    while (_0x32a047[_0x3ebcdf - 1] === _0x7c2f26[_0x20ddd7 - 1]) {
      _0x3ebcdf--;
      _0x20ddd7--;
    }
    if (_0x3ebcdf === _0x33ac78) {
      const _0x40350d = _0x20ddd7 < _0x593f17 ? _0xa1689a ? _0x7c2f26[_0xa1689a - 1].nextSibling : _0x7c2f26[_0x20ddd7 - _0xa1689a] : _0x248a11;
      while (_0xa1689a < _0x20ddd7) {
        _0xd7cfab.insertBefore(_0x7c2f26[_0xa1689a++], _0x40350d);
      }
    } else if (_0x20ddd7 === _0xa1689a) {
      while (_0x33ac78 < _0x3ebcdf) {
        if (!_0x35776a || !_0x35776a.has(_0x32a047[_0x33ac78])) {
          _0x32a047[_0x33ac78].remove();
        }
        _0x33ac78++;
      }
    } else if (_0x32a047[_0x33ac78] === _0x7c2f26[_0x20ddd7 - 1] && _0x7c2f26[_0xa1689a] === _0x32a047[_0x3ebcdf - 1]) {
      const _0x3e3de2 = _0x32a047[--_0x3ebcdf].nextSibling;
      _0xd7cfab.insertBefore(_0x7c2f26[_0xa1689a++], _0x32a047[_0x33ac78++].nextSibling);
      _0xd7cfab.insertBefore(_0x7c2f26[--_0x20ddd7], _0x3e3de2);
      _0x32a047[_0x3ebcdf] = _0x7c2f26[_0x20ddd7];
    } else {
      if (!_0x35776a) {
        _0x35776a = new Map();
        let _0x44dcea = _0xa1689a;
        while (_0x44dcea < _0x20ddd7) {
          _0x35776a.set(_0x7c2f26[_0x44dcea], _0x44dcea++);
        }
      }
      const _0x10a7a9 = _0x35776a.get(_0x32a047[_0x33ac78]);
      if (_0x10a7a9 != null) {
        if (_0xa1689a < _0x10a7a9 && _0x10a7a9 < _0x20ddd7) {
          let _0x452e59 = _0x33ac78;
          let _0x3d9ab8 = 1;
          let _0x5ab9cc;
          while (++_0x452e59 < _0x3ebcdf && _0x452e59 < _0x20ddd7 && (_0x5ab9cc = _0x35776a.get(_0x32a047[_0x452e59])) != null && _0x5ab9cc === _0x10a7a9 + _0x3d9ab8) {
            _0x3d9ab8++;
          }
          if (_0x3d9ab8 > _0x10a7a9 - _0xa1689a) {
            const _0x3305f2 = _0x32a047[_0x33ac78];
            while (_0xa1689a < _0x10a7a9) {
              _0xd7cfab.insertBefore(_0x7c2f26[_0xa1689a++], _0x3305f2);
            }
          } else {
            _0xd7cfab.replaceChild(_0x7c2f26[_0xa1689a++], _0x32a047[_0x33ac78++]);
          }
        } else {
          _0x33ac78++;
        }
      } else {
        _0x32a047[_0x33ac78++].remove();
      }
    }
  }
}
const xe = "_$DX_DELEGATE";
function ct(_0x393d70, _0x5b84b9, _0x437dd2, _0x41afd0 = {}) {
  let _0x266d72;
  Y(_0x4fa1ea => {
    _0x266d72 = _0x4fa1ea;
    if (_0x5b84b9 === document) {
      _0x393d70();
    } else {
      v(_0x5b84b9, _0x393d70(), _0x5b84b9.firstChild ? null : undefined, _0x437dd2);
    }
  }, _0x41afd0.owner);
  return () => {
    _0x266d72();
    _0x5b84b9.textContent = "";
  };
}
function b(_0x2a7745, _0x1621a4, _0x16f1f7) {
  let _0x1f423b;
  const _0x156184 = () => {
    const _0x50641c = document.createElement("template");
    _0x50641c.innerHTML = _0x2a7745;
    if (_0x16f1f7) {
      return _0x50641c.content.firstChild.firstChild;
    } else {
      return _0x50641c.content.firstChild;
    }
  };
  const _0x14269e = _0x1621a4 ? () => $(() => document.importNode(_0x1f423b ||= _0x156184(), true)) : () => (_0x1f423b ||= _0x156184()).cloneNode(true);
  _0x14269e.cloneNode = _0x14269e;
  return _0x14269e;
}
function ut(_0x3cffaf, _0x4d299c = window.document) {
  const _0x103e40 = _0x4d299c[xe] ||= new Set();
  for (let _0x3eadb4 = 0, _0x3a7f96 = _0x3cffaf.length; _0x3eadb4 < _0x3a7f96; _0x3eadb4++) {
    const _0x54f42d = _0x3cffaf[_0x3eadb4];
    if (!_0x103e40.has(_0x54f42d)) {
      _0x103e40.add(_0x54f42d);
      _0x4d299c.addEventListener(_0x54f42d, ft);
    }
  }
}
function at(_0x4bf6e2, _0x6ac6db, _0xc14af4) {
  if (_0xc14af4 == null) {
    _0x4bf6e2.removeAttribute(_0x6ac6db);
  } else {
    _0x4bf6e2.setAttribute(_0x6ac6db, _0xc14af4);
  }
}
function M(_0x4e7208, _0x5ad4f6) {
  if (_0x5ad4f6 == null) {
    _0x4e7208.removeAttribute("class");
  } else {
    _0x4e7208.className = _0x5ad4f6;
  }
}
function G(_0x5cd4da, _0x1f7ce3, _0x22bb00 = {}) {
  const _0x13dc96 = Object.keys(_0x1f7ce3 || {});
  const _0x4a1167 = Object.keys(_0x22bb00);
  let _0x16cd9c;
  let _0x5de4bc;
  _0x16cd9c = 0;
  _0x5de4bc = _0x4a1167.length;
  for (; _0x16cd9c < _0x5de4bc; _0x16cd9c++) {
    const _0xca1662 = _0x4a1167[_0x16cd9c];
    if (!!_0xca1662 && _0xca1662 !== "undefined" && !_0x1f7ce3[_0xca1662]) {
      $e(_0x5cd4da, _0xca1662, false);
      delete _0x22bb00[_0xca1662];
    }
  }
  _0x16cd9c = 0;
  _0x5de4bc = _0x13dc96.length;
  for (; _0x16cd9c < _0x5de4bc; _0x16cd9c++) {
    const _0x20134a = _0x13dc96[_0x16cd9c];
    const _0xf9f2d2 = !!_0x1f7ce3[_0x20134a];
    if (!!_0x20134a && _0x20134a !== "undefined" && _0x22bb00[_0x20134a] !== _0xf9f2d2 && !!_0xf9f2d2) {
      $e(_0x5cd4da, _0x20134a, true);
      _0x22bb00[_0x20134a] = _0xf9f2d2;
    }
  }
  return _0x22bb00;
}
function ke(_0x4dd69e, _0x37b860, _0x126dc6) {
  return $(() => _0x4dd69e(_0x37b860, _0x126dc6));
}
function v(_0x3933f9, _0x1d96c4, _0x2d47bd, _0x1b79cf) {
  if (_0x2d47bd !== undefined && !_0x1b79cf) {
    _0x1b79cf = [];
  }
  if (typeof _0x1d96c4 != "function") {
    return te(_0x3933f9, _0x1d96c4, _0x1b79cf, _0x2d47bd);
  }
  E(_0x45a042 => te(_0x3933f9, _0x1d96c4(), _0x45a042, _0x2d47bd), _0x1b79cf);
}
function $e(_0x125635, _0x25345f, _0x380daa) {
  const _0xca3368 = _0x25345f.trim().split(/\s+/);
  for (let _0x23da4d = 0, _0x48c9e = _0xca3368.length; _0x23da4d < _0x48c9e; _0x23da4d++) {
    _0x125635.classList.toggle(_0xca3368[_0x23da4d], _0x380daa);
  }
}
function ft(_0x1b6c4d) {
  const _0x5ac18d = "$$" + _0x1b6c4d.type;
  let _0x478646 = _0x1b6c4d.composedPath && _0x1b6c4d.composedPath()[0] || _0x1b6c4d.target;
  if (_0x1b6c4d.target !== _0x478646) {
    Object.defineProperty(_0x1b6c4d, "target", {
      configurable: true,
      value: _0x478646
    });
  }
  Object.defineProperty(_0x1b6c4d, "currentTarget", {
    configurable: true,
    get() {
      return _0x478646 || document;
    }
  });
  while (_0x478646) {
    const _0x2d1569 = _0x478646[_0x5ac18d];
    if (_0x2d1569 && !_0x478646.disabled) {
      const _0x1cd9c3 = _0x478646[_0x5ac18d + "Data"];
      if (_0x1cd9c3 !== undefined) {
        _0x2d1569.call(_0x478646, _0x1cd9c3, _0x1b6c4d);
      } else {
        _0x2d1569.call(_0x478646, _0x1b6c4d);
      }
      if (_0x1b6c4d.cancelBubble) {
        return;
      }
    }
    _0x478646 = _0x478646._$host || _0x478646.parentNode || _0x478646.host;
  }
}
function te(_0x322ee2, _0x47a9ef, _0x22768d, _0x5707b3, _0x3586bf) {
  while (typeof _0x22768d == "function") {
    _0x22768d = _0x22768d();
  }
  if (_0x47a9ef === _0x22768d) {
    return _0x22768d;
  }
  const _0x290644 = typeof _0x47a9ef;
  const _0x342f3a = _0x5707b3 !== undefined;
  _0x322ee2 = _0x342f3a && _0x22768d[0] && _0x22768d[0].parentNode || _0x322ee2;
  if (_0x290644 === "string" || _0x290644 === "number") {
    if (_0x290644 === "number") {
      _0x47a9ef = _0x47a9ef.toString();
    }
    if (_0x342f3a) {
      let _0x3bc6fd = _0x22768d[0];
      if (_0x3bc6fd && _0x3bc6fd.nodeType === 3) {
        _0x3bc6fd.data = _0x47a9ef;
      } else {
        _0x3bc6fd = document.createTextNode(_0x47a9ef);
      }
      _0x22768d = j(_0x322ee2, _0x22768d, _0x5707b3, _0x3bc6fd);
    } else if (_0x22768d !== "" && typeof _0x22768d == "string") {
      _0x22768d = _0x322ee2.firstChild.data = _0x47a9ef;
    } else {
      _0x22768d = _0x322ee2.textContent = _0x47a9ef;
    }
  } else if (_0x47a9ef == null || _0x290644 === "boolean") {
    _0x22768d = j(_0x322ee2, _0x22768d, _0x5707b3);
  } else {
    if (_0x290644 === "function") {
      E(() => {
        let _0x549ad0 = _0x47a9ef();
        while (typeof _0x549ad0 == "function") {
          _0x549ad0 = _0x549ad0();
        }
        _0x22768d = te(_0x322ee2, _0x549ad0, _0x22768d, _0x5707b3);
      });
      return () => _0x22768d;
    }
    if (Array.isArray(_0x47a9ef)) {
      const _0x10d99e = [];
      const _0x5c9538 = _0x22768d && Array.isArray(_0x22768d);
      if (he(_0x10d99e, _0x47a9ef, _0x22768d, _0x3586bf)) {
        E(() => _0x22768d = te(_0x322ee2, _0x10d99e, _0x22768d, _0x5707b3, true));
        return () => _0x22768d;
      }
      if (_0x10d99e.length === 0) {
        _0x22768d = j(_0x322ee2, _0x22768d, _0x5707b3);
        if (_0x342f3a) {
          return _0x22768d;
        }
      } else if (_0x5c9538) {
        if (_0x22768d.length === 0) {
          Ae(_0x322ee2, _0x10d99e, _0x5707b3);
        } else {
          lt(_0x322ee2, _0x22768d, _0x10d99e);
        }
      } else {
        if (_0x22768d) {
          j(_0x322ee2);
        }
        Ae(_0x322ee2, _0x10d99e);
      }
      _0x22768d = _0x10d99e;
    } else if (_0x47a9ef.nodeType) {
      if (Array.isArray(_0x22768d)) {
        if (_0x342f3a) {
          return _0x22768d = j(_0x322ee2, _0x22768d, _0x5707b3, _0x47a9ef);
        }
        j(_0x322ee2, _0x22768d, null, _0x47a9ef);
      } else if (_0x22768d == null || _0x22768d === "" || !_0x322ee2.firstChild) {
        _0x322ee2.appendChild(_0x47a9ef);
      } else {
        _0x322ee2.replaceChild(_0x47a9ef, _0x322ee2.firstChild);
      }
      _0x22768d = _0x47a9ef;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x47a9ef);
    }
  }
  return _0x22768d;
}
function he(_0x49932c, _0x5ed937, _0x28d577, _0x18c7a7) {
  let _0x3b0039 = false;
  for (let _0x52f871 = 0, _0x462844 = _0x5ed937.length; _0x52f871 < _0x462844; _0x52f871++) {
    let _0x49e17e = _0x5ed937[_0x52f871];
    let _0x1ae466 = _0x28d577 && _0x28d577[_0x52f871];
    let _0x5bbd81;
    if (_0x49e17e != null && _0x49e17e !== true && _0x49e17e !== false) {
      if ((_0x5bbd81 = typeof _0x49e17e) == "object" && _0x49e17e.nodeType) {
        _0x49932c.push(_0x49e17e);
      } else if (Array.isArray(_0x49e17e)) {
        _0x3b0039 = he(_0x49932c, _0x49e17e, _0x1ae466) || _0x3b0039;
      } else if (_0x5bbd81 === "function") {
        if (_0x18c7a7) {
          while (typeof _0x49e17e == "function") {
            _0x49e17e = _0x49e17e();
          }
          _0x3b0039 = he(_0x49932c, Array.isArray(_0x49e17e) ? _0x49e17e : [_0x49e17e], Array.isArray(_0x1ae466) ? _0x1ae466 : [_0x1ae466]) || _0x3b0039;
        } else {
          _0x49932c.push(_0x49e17e);
          _0x3b0039 = true;
        }
      } else {
        const _0x78395e = String(_0x49e17e);
        if (_0x1ae466 && _0x1ae466.nodeType === 3 && _0x1ae466.data === _0x78395e) {
          _0x49932c.push(_0x1ae466);
        } else {
          _0x49932c.push(document.createTextNode(_0x78395e));
        }
      }
    }
  }
  return _0x3b0039;
}
function Ae(_0x1267e9, _0x2884ee, _0x34a2be = null) {
  for (let _0xb4a61a = 0, _0x7fa9b1 = _0x2884ee.length; _0xb4a61a < _0x7fa9b1; _0xb4a61a++) {
    _0x1267e9.insertBefore(_0x2884ee[_0xb4a61a], _0x34a2be);
  }
}
function j(_0xc9cb26, _0x169e31, _0x5470ed, _0x4a847e) {
  if (_0x5470ed === undefined) {
    return _0xc9cb26.textContent = "";
  }
  const _0x227c35 = _0x4a847e || document.createTextNode("");
  if (_0x169e31.length) {
    let _0xc60061 = false;
    for (let _0x220156 = _0x169e31.length - 1; _0x220156 >= 0; _0x220156--) {
      const _0x1ab06b = _0x169e31[_0x220156];
      if (_0x227c35 !== _0x1ab06b) {
        const _0x28fcff = _0x1ab06b.parentNode === _0xc9cb26;
        if (!_0xc60061 && !_0x220156) {
          if (_0x28fcff) {
            _0xc9cb26.replaceChild(_0x227c35, _0x1ab06b);
          } else {
            _0xc9cb26.insertBefore(_0x227c35, _0x5470ed);
          }
        } else if (_0x28fcff) {
          _0x1ab06b.remove();
        }
      } else {
        _0xc60061 = true;
      }
    }
  } else {
    _0xc9cb26.insertBefore(_0x227c35, _0x5470ed);
  }
  return [_0x227c35];
}
const ge = Symbol("store-raw");
const U = Symbol("store-node");
function De(_0x4f4096) {
  let _0x4a222e = _0x4f4096[P];
  if (!_0x4a222e && (Object.defineProperty(_0x4f4096, P, {
    value: _0x4a222e = new Proxy(_0x4f4096, gt)
  }), !Array.isArray(_0x4f4096))) {
    const _0x2493c0 = Object.keys(_0x4f4096);
    const _0x1951d0 = Object.getOwnPropertyDescriptors(_0x4f4096);
    for (let _0x10ae2f = 0, _0x536efc = _0x2493c0.length; _0x10ae2f < _0x536efc; _0x10ae2f++) {
      const _0xb5a3a8 = _0x2493c0[_0x10ae2f];
      if (_0x1951d0[_0xb5a3a8].get) {
        Object.defineProperty(_0x4f4096, _0xb5a3a8, {
          enumerable: _0x1951d0[_0xb5a3a8].enumerable,
          get: _0x1951d0[_0xb5a3a8].get.bind(_0x4a222e)
        });
      }
    }
  }
  return _0x4a222e;
}
function ne(_0x544516) {
  let _0xa3149c;
  return _0x544516 != null && typeof _0x544516 == "object" && (_0x544516[P] || !(_0xa3149c = Object.getPrototypeOf(_0x544516)) || _0xa3149c === Object.prototype || Array.isArray(_0x544516));
}
function q(_0x3379f1, _0x502345 = new Set()) {
  let _0xdffdbe;
  let _0x5790ac;
  let _0x25579d;
  let _0x41a3ed;
  if (_0xdffdbe = _0x3379f1 != null && _0x3379f1[ge]) {
    return _0xdffdbe;
  }
  if (!ne(_0x3379f1) || _0x502345.has(_0x3379f1)) {
    return _0x3379f1;
  }
  if (Array.isArray(_0x3379f1)) {
    if (Object.isFrozen(_0x3379f1)) {
      _0x3379f1 = _0x3379f1.slice(0);
    } else {
      _0x502345.add(_0x3379f1);
    }
    for (let _0x1aeac3 = 0, _0x1dbf56 = _0x3379f1.length; _0x1aeac3 < _0x1dbf56; _0x1aeac3++) {
      _0x25579d = _0x3379f1[_0x1aeac3];
      if ((_0x5790ac = q(_0x25579d, _0x502345)) !== _0x25579d) {
        _0x3379f1[_0x1aeac3] = _0x5790ac;
      }
    }
  } else {
    if (Object.isFrozen(_0x3379f1)) {
      _0x3379f1 = Object.assign({}, _0x3379f1);
    } else {
      _0x502345.add(_0x3379f1);
    }
    const _0x5c80a6 = Object.keys(_0x3379f1);
    const _0x2fef45 = Object.getOwnPropertyDescriptors(_0x3379f1);
    for (let _0x42b895 = 0, _0x4eb659 = _0x5c80a6.length; _0x42b895 < _0x4eb659; _0x42b895++) {
      _0x41a3ed = _0x5c80a6[_0x42b895];
      if (!_0x2fef45[_0x41a3ed].get) {
        _0x25579d = _0x3379f1[_0x41a3ed];
        if ((_0x5790ac = q(_0x25579d, _0x502345)) !== _0x25579d) {
          _0x3379f1[_0x41a3ed] = _0x5790ac;
        }
      }
    }
  }
  return _0x3379f1;
}
function ye(_0x3ae276) {
  let _0x5648eb = _0x3ae276[U];
  if (!_0x5648eb) {
    Object.defineProperty(_0x3ae276, U, {
      value: _0x5648eb = Object.create(null)
    });
  }
  return _0x5648eb;
}
function me(_0x4f8349, _0x4910a5, _0x2167ad) {
  return _0x4f8349[_0x4910a5] ||= je(_0x2167ad);
}
function dt(_0x417c14, _0x253c6e) {
  const _0x587a6a = Reflect.getOwnPropertyDescriptor(_0x417c14, _0x253c6e);
  if (!!_0x587a6a && !_0x587a6a.get && !!_0x587a6a.configurable && _0x253c6e !== P && _0x253c6e !== U) {
    delete _0x587a6a.value;
    delete _0x587a6a.writable;
    _0x587a6a.get = () => _0x417c14[P][_0x253c6e];
  }
  return _0x587a6a;
}
function We(_0x24aa51) {
  if (Ce()) {
    const _0x5c0075 = ye(_0x24aa51);
    (_0x5c0075._ ||= je())();
  }
}
function ht(_0x122cce) {
  We(_0x122cce);
  return Reflect.ownKeys(_0x122cce);
}
function je(_0x3414c2) {
  const [_0x49f99d, _0xaf8137] = V(_0x3414c2, {
    equals: false,
    internal: true
  });
  _0x49f99d.$ = _0xaf8137;
  return _0x49f99d;
}
const gt = {
  get(_0x5abe44, _0x4b9d6e, _0x389571) {
    if (_0x4b9d6e === ge) {
      return _0x5abe44;
    }
    if (_0x4b9d6e === P) {
      return _0x389571;
    }
    if (_0x4b9d6e === ae) {
      We(_0x5abe44);
      return _0x389571;
    }
    const _0xe7a2f1 = ye(_0x5abe44);
    const _0x14c814 = _0xe7a2f1[_0x4b9d6e];
    let _0x545ca3 = _0x14c814 ? _0x14c814() : _0x5abe44[_0x4b9d6e];
    if (_0x4b9d6e === U || _0x4b9d6e === "__proto__") {
      return _0x545ca3;
    }
    if (!_0x14c814) {
      const _0x2e65d6 = Object.getOwnPropertyDescriptor(_0x5abe44, _0x4b9d6e);
      if (Ce() && (typeof _0x545ca3 != "function" || _0x5abe44.hasOwnProperty(_0x4b9d6e)) && (!_0x2e65d6 || !_0x2e65d6.get)) {
        _0x545ca3 = me(_0xe7a2f1, _0x4b9d6e, _0x545ca3)();
      }
    }
    if (ne(_0x545ca3)) {
      return De(_0x545ca3);
    } else {
      return _0x545ca3;
    }
  },
  has(_0x17bb90, _0x412708) {
    if (_0x412708 === ge || _0x412708 === P || _0x412708 === ae || _0x412708 === U || _0x412708 === "__proto__") {
      return true;
    } else {
      this.get(_0x17bb90, _0x412708, _0x17bb90);
      return _0x412708 in _0x17bb90;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: ht,
  getOwnPropertyDescriptor: dt
};
function se(_0x203da8, _0x30b082, _0x2c5fec, _0x4dc50f = false) {
  if (!_0x4dc50f && _0x203da8[_0x30b082] === _0x2c5fec) {
    return;
  }
  const _0x46c3b2 = _0x203da8[_0x30b082];
  const _0x1db21c = _0x203da8.length;
  if (_0x2c5fec === undefined) {
    delete _0x203da8[_0x30b082];
  } else {
    _0x203da8[_0x30b082] = _0x2c5fec;
  }
  let _0x28ff3e = ye(_0x203da8);
  let _0x31a2de;
  if (_0x31a2de = me(_0x28ff3e, _0x30b082, _0x46c3b2)) {
    _0x31a2de.$(() => _0x2c5fec);
  }
  if (Array.isArray(_0x203da8) && _0x203da8.length !== _0x1db21c) {
    for (let _0xcdb9cf = _0x203da8.length; _0xcdb9cf < _0x1db21c; _0xcdb9cf++) {
      if (_0x31a2de = _0x28ff3e[_0xcdb9cf]) {
        _0x31a2de.$();
      }
    }
    if (_0x31a2de = me(_0x28ff3e, "length", _0x1db21c)) {
      _0x31a2de.$(_0x203da8.length);
    }
  }
  if (_0x31a2de = _0x28ff3e._) {
    _0x31a2de.$();
  }
}
function Re(_0x5453f8, _0x1eaeb2) {
  const _0x522adc = Object.keys(_0x1eaeb2);
  for (let _0x24d308 = 0; _0x24d308 < _0x522adc.length; _0x24d308 += 1) {
    const _0x58d482 = _0x522adc[_0x24d308];
    se(_0x5453f8, _0x58d482, _0x1eaeb2[_0x58d482]);
  }
}
function mt(_0xda87be, _0x369308) {
  if (typeof _0x369308 == "function") {
    _0x369308 = _0x369308(_0xda87be);
  }
  _0x369308 = q(_0x369308);
  if (Array.isArray(_0x369308)) {
    if (_0xda87be === _0x369308) {
      return;
    }
    let _0x49c5e9 = 0;
    let _0xd012ec = _0x369308.length;
    for (; _0x49c5e9 < _0xd012ec; _0x49c5e9++) {
      const _0x5e167d = _0x369308[_0x49c5e9];
      if (_0xda87be[_0x49c5e9] !== _0x5e167d) {
        se(_0xda87be, _0x49c5e9, _0x5e167d);
      }
    }
    se(_0xda87be, "length", _0xd012ec);
  } else {
    Re(_0xda87be, _0x369308);
  }
}
function F(_0x59b8fc, _0x5289f3, _0x21096a = []) {
  let _0x4c06c1;
  let _0x3d8884 = _0x59b8fc;
  if (_0x5289f3.length > 1) {
    _0x4c06c1 = _0x5289f3.shift();
    const _0x1cf858 = typeof _0x4c06c1;
    const _0x3c70e4 = Array.isArray(_0x59b8fc);
    if (Array.isArray(_0x4c06c1)) {
      for (let _0x2a895e = 0; _0x2a895e < _0x4c06c1.length; _0x2a895e++) {
        F(_0x59b8fc, [_0x4c06c1[_0x2a895e]].concat(_0x5289f3), _0x21096a);
      }
      return;
    } else if (_0x3c70e4 && _0x1cf858 === "function") {
      for (let _0x1b4703 = 0; _0x1b4703 < _0x59b8fc.length; _0x1b4703++) {
        if (_0x4c06c1(_0x59b8fc[_0x1b4703], _0x1b4703)) {
          F(_0x59b8fc, [_0x1b4703].concat(_0x5289f3), _0x21096a);
        }
      }
      return;
    } else if (_0x3c70e4 && _0x1cf858 === "object") {
      const {
        from: _0xe063e1 = 0,
        to: _0x2ffe79 = _0x59b8fc.length - 1,
        by: _0x254851 = 1
      } = _0x4c06c1;
      for (let _0x276309 = _0xe063e1; _0x276309 <= _0x2ffe79; _0x276309 += _0x254851) {
        F(_0x59b8fc, [_0x276309].concat(_0x5289f3), _0x21096a);
      }
      return;
    } else if (_0x5289f3.length > 1) {
      F(_0x59b8fc[_0x4c06c1], _0x5289f3, [_0x4c06c1].concat(_0x21096a));
      return;
    }
    _0x3d8884 = _0x59b8fc[_0x4c06c1];
    _0x21096a = [_0x4c06c1].concat(_0x21096a);
  }
  let _0x25f10a = _0x5289f3[0];
  if ((typeof _0x25f10a != "function" || !(_0x25f10a = _0x25f10a(_0x3d8884, _0x21096a), _0x25f10a === _0x3d8884)) && (_0x4c06c1 !== undefined || _0x25f10a != null)) {
    _0x25f10a = q(_0x25f10a);
    if (_0x4c06c1 === undefined || ne(_0x3d8884) && ne(_0x25f10a) && !Array.isArray(_0x25f10a)) {
      Re(_0x3d8884, _0x25f10a);
    } else {
      se(_0x59b8fc, _0x4c06c1, _0x25f10a);
    }
  }
}
function wt(...[_0x564851, _0x3dda51]) {
  const _0x5c3d2f = q(_0x564851 || {});
  const _0x232b19 = Array.isArray(_0x5c3d2f);
  const _0x29e588 = De(_0x5c3d2f);
  function _0x36eb03(..._0x3e4ec1) {
    fe(() => {
      if (_0x232b19 && _0x3e4ec1.length === 1) {
        mt(_0x5c3d2f, _0x3e4ec1[0]);
      } else {
        F(_0x5c3d2f, _0x3e4ec1);
      }
    });
  }
  return [_0x29e588, _0x36eb03];
}
function yt(_0x1ee067, _0x2785a5) {
  const _0x8a7690 = ze(_0x2785a5);
  return [_0x598dcd => y(_0x8a7690.Provider, {
    value: _0x1ee067(_0x598dcd),
    get children() {
      return _0x598dcd.children;
    }
  }), () => Je(_0x8a7690)];
}
var A = (_0x22e05c => {
  _0x22e05c[_0x22e05c.ShowWhenActive = 0] = "ShowWhenActive";
  _0x22e05c[_0x22e05c.AlwaysShow = 1] = "AlwaysShow";
  _0x22e05c[_0x22e05c.AlwaysHide = 2] = "AlwaysHide";
  return _0x22e05c;
})(A || {});
const Be = {
  name: "feed",
  displayName: "Feed",
  color: "#e0e0e0",
  hidden: false,
  isGlobal: false,
  isChannel: true
};
const [pt, vt] = yt(() => {
  const [_0x500a7b, _0x16a855] = wt({
    showInput: false,
    showWindow: false,
    showHideState: false,
    hideState: A.ShowWhenActive,
    backingSuggestions: [],
    removedSuggestions: [],
    message: "",
    messages: [],
    oldMessages: [],
    oldMessagesIndex: -1,
    tplBackups: [],
    msgTplBackups: [],
    focusTimer: 0,
    showWindowTimer: 0,
    showHideStateTimer: 0,
    listener: _0x1ccafc => {},
    modes: [Be],
    modeIdx: 0
  });
  const [_0x46403b, _0x341b9f] = V("");
  return {
    data: _0x500a7b,
    setData: _0x16a855,
    transform: _0x46403b,
    setTransform: _0x341b9f
  };
});
const X = () => vt();
const pe = {
  defaultTemplateId: "default",
  defaultAltTemplateId: "defaultAlt",
  templates: {
    default: "<span class=\"greenText\">{0}</span>: {1}",
    defaultAlt: "{0}",
    print: "<pre>{0}</pre>",
    "example:important": "<h1>{0}</h1>"
  },
  fadeTimeout: 4000,
  suggestionLimit: 5,
  style: {
    background: "rgba(52, 73, 94, 0.0)",
    width: "30vw",
    height: "30%"
  }
};
var xt = () => {};
var be = (_0x5f3a3e, _0x114804) => _0x114804();
function $t(_0x4cfc40, _0x177194) {
  const _0x35ff04 = $(_0x4cfc40);
  const _0xc98d8f = _0x35ff04 ? [_0x35ff04] : [];
  const {
    onEnter: _0x4d75fa = be,
    onExit: _0x5e0aa7 = be
  } = _0x177194;
  const [_0x57c276, _0x2c47c0] = V(_0x177194.appear ? [] : _0xc98d8f);
  const [_0x1edf62] = Ye();
  let _0x26cef3;
  let _0x51f0dd = false;
  function _0x3659b5(_0x13cced, _0x3f4cdb) {
    if (!_0x13cced) {
      return _0x3f4cdb && _0x3f4cdb();
    }
    _0x51f0dd = true;
    _0x5e0aa7(_0x13cced, () => {
      fe(() => {
        _0x51f0dd = false;
        _0x2c47c0(_0x550058 => _0x550058.filter(_0x336faf => _0x336faf !== _0x13cced));
        if (_0x3f4cdb) {
          _0x3f4cdb();
        }
      });
    });
  }
  function _0x2c0dc1(_0x8307af) {
    const _0x32a688 = _0x26cef3;
    if (!_0x32a688) {
      return _0x8307af && _0x8307af();
    }
    _0x26cef3 = undefined;
    _0x2c47c0(_0x5811b5 => [_0x32a688, ..._0x5811b5]);
    _0x4d75fa(_0x32a688, _0x8307af ?? xt);
  }
  const _0x266c5b = _0x177194.mode === "out-in" ? _0xb9abf4 => _0x51f0dd || _0x3659b5(_0xb9abf4, _0x2c0dc1) : _0x177194.mode === "in-out" ? _0x51bd97 => _0x2c0dc1(() => _0x3659b5(_0x51bd97)) : _0x459ad0 => {
    _0x3659b5(_0x459ad0);
    _0x2c0dc1();
  };
  qe(_0x4da041 => {
    const _0x5ee747 = _0x4cfc40();
    if ($(_0x1edf62)) {
      _0x1edf62();
      return _0x4da041;
    } else {
      if (_0x5ee747 !== _0x4da041) {
        _0x26cef3 = _0x5ee747;
        fe(() => $(() => _0x266c5b(_0x4da041)));
      }
      return _0x5ee747;
    }
  }, _0x177194.appear ? undefined : _0x35ff04);
  return _0x57c276;
}
var _e = _0x5840b9 => _0x5840b9 instanceof Element;
function we(_0x35f6f7, _0x261002) {
  if (_0x261002(_0x35f6f7)) {
    return _0x35f6f7;
  }
  if (typeof _0x35f6f7 == "function" && !_0x35f6f7.length) {
    return we(_0x35f6f7(), _0x261002);
  }
  if (Array.isArray(_0x35f6f7)) {
    for (const _0x464e1e of _0x35f6f7) {
      const _0x31b8c0 = we(_0x464e1e, _0x261002);
      if (_0x31b8c0) {
        return _0x31b8c0;
      }
    }
  }
  return null;
}
function At(_0x1c5922, _0x3993f7 = _e, _0x4042b0 = _e) {
  const _0x585f78 = L(_0x1c5922);
  return L(() => we(_0x585f78(), _0x3993f7));
}
function bt(_0x2fb96b) {
  return L(() => {
    const _0x21a63a = _0x2fb96b.name || "s";
    return {
      enterActive: (_0x2fb96b.enterActiveClass || _0x21a63a + "-enter-active").split(" "),
      enter: (_0x2fb96b.enterClass || _0x21a63a + "-enter").split(" "),
      enterTo: (_0x2fb96b.enterToClass || _0x21a63a + "-enter-to").split(" "),
      exitActive: (_0x2fb96b.exitActiveClass || _0x21a63a + "-exit-active").split(" "),
      exit: (_0x2fb96b.exitClass || _0x21a63a + "-exit").split(" "),
      exitTo: (_0x2fb96b.exitToClass || _0x21a63a + "-exit-to").split(" "),
      move: (_0x2fb96b.moveClass || _0x21a63a + "-move").split(" ")
    };
  });
}
function He(_0x22ef7b) {
  requestAnimationFrame(() => requestAnimationFrame(_0x22ef7b));
}
function _t(_0x1c72e4, _0x397673, _0x134a4e, _0x2bd5cf) {
  const {
    onBeforeEnter: _0x36c770,
    onEnter: _0x193024,
    onAfterEnter: _0x21e8d4
  } = _0x397673;
  _0x36c770?.(_0x134a4e);
  _0x134a4e.classList.add(..._0x1c72e4.enter);
  _0x134a4e.classList.add(..._0x1c72e4.enterActive);
  queueMicrotask(() => {
    if (!_0x134a4e.parentNode) {
      return _0x2bd5cf?.();
    }
    _0x193024?.(_0x134a4e, () => _0x3f8162());
  });
  He(() => {
    _0x134a4e.classList.remove(..._0x1c72e4.enter);
    _0x134a4e.classList.add(..._0x1c72e4.enterTo);
    if (!_0x193024 || _0x193024.length < 2) {
      _0x134a4e.addEventListener("transitionend", _0x3f8162);
      _0x134a4e.addEventListener("animationend", _0x3f8162);
    }
  });
  function _0x3f8162(_0x5c6188) {
    if (!_0x5c6188 || _0x5c6188.target === _0x134a4e) {
      _0x2bd5cf?.();
      _0x134a4e.removeEventListener("transitionend", _0x3f8162);
      _0x134a4e.removeEventListener("animationend", _0x3f8162);
      _0x134a4e.classList.remove(..._0x1c72e4.enterActive);
      _0x134a4e.classList.remove(..._0x1c72e4.enterTo);
      _0x21e8d4?.(_0x134a4e);
    }
  }
}
function St(_0x229cb5, _0x4d3830, _0x241c3e, _0x91fe46) {
  const {
    onBeforeExit: _0xe685bd,
    onExit: _0x3c33c4,
    onAfterExit: _0x2f930a
  } = _0x4d3830;
  if (!_0x241c3e.parentNode) {
    return _0x91fe46?.();
  }
  _0xe685bd?.(_0x241c3e);
  _0x241c3e.classList.add(..._0x229cb5.exit);
  _0x241c3e.classList.add(..._0x229cb5.exitActive);
  _0x3c33c4?.(_0x241c3e, () => _0x53c538());
  He(() => {
    _0x241c3e.classList.remove(..._0x229cb5.exit);
    _0x241c3e.classList.add(..._0x229cb5.exitTo);
    if (!_0x3c33c4 || _0x3c33c4.length < 2) {
      _0x241c3e.addEventListener("transitionend", _0x53c538);
      _0x241c3e.addEventListener("animationend", _0x53c538);
    }
  });
  function _0x53c538(_0x4346cf) {
    if (!_0x4346cf || _0x4346cf.target === _0x241c3e) {
      _0x91fe46?.();
      _0x241c3e.removeEventListener("transitionend", _0x53c538);
      _0x241c3e.removeEventListener("animationend", _0x53c538);
      _0x241c3e.classList.remove(..._0x229cb5.exitActive);
      _0x241c3e.classList.remove(..._0x229cb5.exitTo);
      _0x2f930a?.(_0x241c3e);
    }
  }
}
var Tt = {
  inout: "in-out",
  outin: "out-in"
};
var Fe = _0x479817 => {
  const _0xcdcd2 = bt(_0x479817);
  return $t(At(() => _0x479817.children), {
    mode: Tt[_0x479817.mode],
    appear: _0x479817.appear,
    onEnter(_0x1ab23a, _0x5aee9e) {
      _t(_0xcdcd2(), _0x479817, _0x1ab23a, _0x5aee9e);
    },
    onExit(_0x26e203, _0x2565c1) {
      St(_0xcdcd2(), _0x479817, _0x26e203, _0x2565c1);
    }
  });
};
const Et = "_message_dmxgu_1";
const Ct = "_tag_dmxgu_9";
const Ot = "_author_dmxgu_26";
const It = "_text_dmxgu_35";
const Q = {
  message: Et,
  tag: Ct,
  author: Ot,
  text: It
};
const Nt = b("<div><div class=\"flex flex-row items-start justify-start gap-[0.5vh]\"><div></div><div><div></div><div>");
function Lt(_0x3b3859) {
  if (_0x3b3859.color) {
    return (() => {
      const _0x538803 = Nt();
      const _0x532b7e = _0x538803.firstChild;
      const _0x48904d = _0x532b7e.firstChild;
      const _0x42521b = _0x48904d.nextSibling;
      const _0x5d92e6 = _0x42521b.firstChild;
      const _0x1edfe2 = _0x5d92e6.nextSibling;
      v(_0x48904d, () => _0x3b3859.channel ?? "Unknown");
      v(_0x5d92e6, () => _0x3b3859.args?.[0]);
      v(_0x1edfe2, () => _0x3b3859.args?.[1]);
      E(_0x296ae3 => {
        const _0x256b78 = Q.message;
        const _0x431ed9 = {
          multiline: _0x3b3859.multiline
        };
        const _0x54626b = "rgba(" + _0x3b3859.color[0] + ", " + _0x3b3859.color[1] + ", " + _0x3b3859.color[2] + ", 1)";
        const _0x53abd4 = _0x3b3859.channel === "dispatch" ? "linear-gradient(45deg, rgba(" + _0x3b3859.color[0] + ", " + _0x3b3859.color[1] + ", " + _0x3b3859.color[2] + ", 1), rgba(34, 37, 48, 0.9) 2rem, rgba(34, 37, 48, 0.9) 100%)" : "";
        const _0x149a9c = Q.tag;
        const _0x3d1d5f = Q.author;
        const _0x1d2fa4 = Q.text;
        const _0x1222be = _0x3b3859.textColor ? "rgba(" + _0x3b3859.textColor[0] + ", " + _0x3b3859.textColor[1] + ", " + _0x3b3859.textColor[2] + ", 1)" : undefined;
        if (_0x256b78 !== _0x296ae3._v$) {
          M(_0x538803, _0x296ae3._v$ = _0x256b78);
        }
        _0x296ae3._v$2 = G(_0x538803, _0x431ed9, _0x296ae3._v$2);
        if (_0x54626b !== _0x296ae3._v$3) {
          if ((_0x296ae3._v$3 = _0x54626b) != null) {
            _0x538803.style.setProperty("border-color", _0x54626b);
          } else {
            _0x538803.style.removeProperty("border-color");
          }
        }
        if (_0x53abd4 !== _0x296ae3._v$4) {
          if ((_0x296ae3._v$4 = _0x53abd4) != null) {
            _0x538803.style.setProperty("background", _0x53abd4);
          } else {
            _0x538803.style.removeProperty("background");
          }
        }
        if (_0x149a9c !== _0x296ae3._v$5) {
          M(_0x48904d, _0x296ae3._v$5 = _0x149a9c);
        }
        if (_0x3d1d5f !== _0x296ae3._v$6) {
          M(_0x5d92e6, _0x296ae3._v$6 = _0x3d1d5f);
        }
        if (_0x1d2fa4 !== _0x296ae3._v$7) {
          M(_0x1edfe2, _0x296ae3._v$7 = _0x1d2fa4);
        }
        if (_0x1222be !== _0x296ae3._v$8) {
          if ((_0x296ae3._v$8 = _0x1222be) != null) {
            _0x1edfe2.style.setProperty("color", _0x1222be);
          } else {
            _0x1edfe2.style.removeProperty("color");
          }
        }
        return _0x296ae3;
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
      return _0x538803;
    })();
  }
}
const Mt = b("<div class=\"chat-window\"><div class=\"chat-messages\">");
let ie;
function Pt() {
  const {
    data: _0x48deb0,
    setData: _0x35b78c
  } = X();
  const _0x185395 = () => _0x48deb0.messages.filter(_0x369245 => _0x369245.modeData?.isChannel || _0x48deb0.modes[_0x48deb0.modeIdx].isChannel ? _0x369245.mode === _0x48deb0.modes[_0x48deb0.modeIdx].name || _0x369245.modeData?.isGlobal : true);
  return y(Fe, {
    name: "slide-fade",
    get children() {
      return y(B, {
        get when() {
          return _0x48deb0.showWindow && _0x48deb0.hideState !== A.AlwaysHide;
        },
        get children() {
          const _0x5e53df = Mt();
          const _0x3f478d = _0x5e53df.firstChild;
          const _0x429120 = ie;
          if (typeof _0x429120 == "function") {
            ke(_0x429120, _0x3f478d);
          } else {
            ie = _0x3f478d;
          }
          v(_0x3f478d, y(K, {
            get each() {
              return _0x185395();
            },
            children: _0x3f570a => y(Lt, _0x3f570a)
          }));
          return _0x5e53df;
        }
      });
    }
  });
}
const kt = "_suggestion_1oqi0_1";
const Dt = "_title_1oqi0_12";
const Wt = "_text_1oqi0_21";
const ue = {
  suggestion: kt,
  title: Dt,
  text: Wt
};
const jt = b("<div><div class=\"flex flex-row items-start justify-start\"><span></div><div>");
const Rt = b("<span class=\"param\">");
const Bt = b("<span>");
function Ht(_0x145d9e) {
  return (() => {
    const _0x116953 = jt();
    const _0x238df2 = _0x116953.firstChild;
    const _0x373997 = _0x238df2.firstChild;
    const _0x3bb9a9 = _0x238df2.nextSibling;
    v(_0x373997, () => _0x145d9e.name);
    v(_0x238df2, y(K, {
      get each() {
        return _0x145d9e.params;
      },
      children: _0x1f26ff => (() => {
        const _0x13f044 = Rt();
        v(_0x13f044, () => _0x1f26ff.name);
        E(_0x2c367b => G(_0x13f044, {
          disabled: _0x1f26ff.disabled
        }, _0x2c367b));
        return _0x13f044;
      })()
    }), null);
    v(_0x3bb9a9, y(B, {
      get when() {
        return _0x145d9e.params;
      },
      get children() {
        return _0x145d9e.help;
      }
    }), null);
    v(_0x3bb9a9, y(B, {
      get when() {
        return !_0x145d9e.disabled;
      },
      get children() {
        return y(K, {
          get each() {
            return _0x145d9e.params;
          },
          children: _0x82c052 => (() => {
            const _0x3cd72c = Bt();
            v(_0x3cd72c, () => _0x82c052.help);
            E(_0xf9515 => G(_0x3cd72c, {
              disabled: _0x82c052.disabled
            }, _0xf9515));
            return _0x3cd72c;
          })()
        });
      }
    }), null);
    E(_0x510af7 => {
      const _0x3ecb44 = ue.suggestion;
      const _0xba1216 = ue.title;
      const _0xf73553 = {
        disabled: _0x145d9e.disabled
      };
      const _0x635887 = ue.text;
      if (_0x3ecb44 !== _0x510af7._v$) {
        M(_0x116953, _0x510af7._v$ = _0x3ecb44);
      }
      if (_0xba1216 !== _0x510af7._v$2) {
        M(_0x373997, _0x510af7._v$2 = _0xba1216);
      }
      _0x510af7._v$3 = G(_0x373997, _0xf73553, _0x510af7._v$3);
      if (_0x635887 !== _0x510af7._v$4) {
        M(_0x3bb9a9, _0x510af7._v$4 = _0x635887);
      }
      return _0x510af7;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x116953;
  })();
}
const Ft = b("<div class=\"suggestions-wrap\">");
function Gt() {
  const {
    data: _0x491ed4,
    setData: _0x37a585
  } = X();
  _0x115b3d.register("ON_SUGGESTION_ADD", async ({
    suggestions: _0x2173ef
  }) => {
    let _0x43bfda = [..._0x491ed4.backingSuggestions];
    let _0x1ccbd2 = [..._0x491ed4.removedSuggestions];
    for (const _0x4299a5 of _0x2173ef) {
      _0x1ccbd2 = [..._0x1ccbd2.filter(_0x40118c => _0x40118c !== _0x4299a5.name)];
      _0x4299a5.params ||= [];
      _0x43bfda = [..._0x43bfda.filter(_0x1b182c => _0x1b182c.name !== _0x4299a5.name), _0x4299a5];
    }
    _0x37a585("backingSuggestions", [..._0x43bfda]);
    _0x37a585("removedSuggestions", _0x1ccbd2);
  });
  _0x115b3d.register("ON_SUGGESTION_REMOVE", async ({
    names: _0x4171ab
  }) => {
    let _0x488be0 = [..._0x491ed4.removedSuggestions];
    for (const _0x11c28c of _0x4171ab) {
      if (_0x488be0.indexOf(_0x11c28c) <= -1) {
        _0x488be0.push(_0x11c28c);
      }
    }
    _0x37a585("removedSuggestions", _0x488be0);
  });
  const _0x36f106 = () => {
    const _0x30c8af = _0x491ed4.backingSuggestions.filter(_0x273caf => _0x491ed4.removedSuggestions.indexOf(_0x273caf.name) <= -1);
    if (_0x491ed4.message === "") {
      return [];
    }
    const _0x4add51 = _0x30c8af.filter(_0x530ec8 => {
      if (!_0x530ec8.name.startsWith(_0x491ed4.message)) {
        const _0x15681f = _0x530ec8.name.split(" ");
        const _0x571b25 = _0x491ed4.message.split(" ");
        for (let _0x1f4fd6 = 0; _0x1f4fd6 < _0x571b25.length; _0x1f4fd6 += 1) {
          if (_0x1f4fd6 >= _0x15681f.length) {
            return _0x1f4fd6 < _0x15681f.length + _0x530ec8.params.length;
          }
          if (_0x15681f[_0x1f4fd6] !== _0x571b25[_0x1f4fd6]) {
            return false;
          }
        }
      }
      return true;
    }).slice(0, pe.suggestionLimit);
    _0x4add51.map(_0x26762b => {
      const _0x4cb7c4 = !_0x26762b.name.startsWith(_0x491ed4.message);
      const _0x247c52 = _0x26762b.params.map((_0x399ded, _0x561adc) => {
        const _0x3b93d0 = _0x561adc === _0x26762b.params.length - 1 ? "." : "\\S";
        const _0x58d154 = new RegExp(_0x26762b.name + " (?:\\w+ ){" + _0x561adc + "}(?:" + _0x3b93d0 + "*)$", "g");
        const _0x3b5bec = !_0x491ed4.message.match(_0x58d154);
        return {
          ..._0x399ded,
          disabled: _0x3b5bec
        };
      });
      return {
        ..._0x26762b,
        disabled: _0x4cb7c4,
        params: _0x247c52
      };
    });
    return _0x4add51;
  };
  const _0x8d0c01 = () => {
    switch (_0x491ed4.hideState) {
      case A.AlwaysShow:
        return "Visible";
      case A.AlwaysHide:
        return "Hidden";
      case A.ShowWhenActive:
        return "When active";
    }
  };
  return y(Fe, {
    name: "fade",
    get children() {
      return [y(B, {
        get when() {
          return _0x36f106().length > 0;
        },
        get children() {
          const _0x22c04 = Ft();
          v(_0x22c04, y(K, {
            get each() {
              return _0x36f106();
            },
            children: _0x4db36c => y(Ht, _0x4db36c)
          }));
          return _0x22c04;
        }
      }), y(B, {
        get when() {
          return _0x491ed4.showHideState;
        },
        get children() {
          return _0x8d0c01();
        }
      })];
    }
  });
}
const Kt = b("<div class=\"flex flex-row items-start justify-start\">");
const Ut = b("<div class=\"mode\">");
function qt() {
  const {
    data: _0xb910c6
  } = X();
  return (() => {
    const _0x2eaaa8 = Kt();
    v(_0x2eaaa8, y(K, {
      get each() {
        return _0xb910c6.modes;
      },
      children: _0x41f12d => {
        if (!_0x41f12d.hidden) {
          return (() => {
            const _0x65334b = Ut();
            v(_0x65334b, () => _0x41f12d.displayName);
            E(_0x2d821b => G(_0x65334b, {
              active: _0xb910c6.modes[_0xb910c6.modeIdx].name === _0x41f12d.name
            }, _0x2d821b));
            return _0x65334b;
          })();
        }
      }
    }));
    return _0x2eaaa8;
  })();
}
const Vt = b("<div class=\"chat-input\"><div class=\"input\"><textarea autofocus rows=\"1\" placeholder=\"Press [TAB] to switch channels\"></textarea><div class=\"sendButton\"><svg width=\"0.46vh\" height=\"0.83vh\" viewBox=\"0 0 5 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L4 4.5L1 8\" stroke=\"#00F8B9\">");
let R;
function Xt() {
  const {
    data: _0xd91165,
    setData: _0x5198b9
  } = X();
  const _0x1870ae = () => {
    clearTimeout(_0xd91165.showWindowTimer);
    _0x5198b9("showWindowTimer", window.setTimeout(() => {
      if (_0xd91165.hideState !== A.AlwaysShow && !_0xd91165.showInput) {
        _0x5198b9("showWindow", false);
      }
    }, pe.fadeTimeout));
  };
  const _0x42f1b4 = (_0xc5fd66 = false) => {
    setTimeout(() => {
      const _0xce7a14 = R;
      delete _0xce7a14.style.height;
    }, 50);
    if (_0xc5fd66) {
      _0x115b3d.execute("chatResult", {
        canceled: _0xc5fd66
      });
    }
    _0x5198b9("message", "");
    _0x5198b9("showInput", false);
    clearInterval(_0xd91165.focusTimer);
    if (_0xd91165.hideState !== A.AlwaysHide) {
      _0x1870ae();
    } else {
      _0x5198b9("showWindow", false);
    }
  };
  const _0x472e92 = () => _0xd91165.modeIdx >= _0xd91165.modes.length ? _0xd91165.modes.length - 1 : _0xd91165.modeIdx;
  const _0x157130 = _0x4e0c4c => {
    if (_0x4e0c4c && _0xd91165.oldMessages.length > _0xd91165.oldMessagesIndex + 1) {
      _0x5198b9("oldMessagesIndex", _0xd91165.oldMessagesIndex + 1);
      _0x5198b9("message", _0xd91165.oldMessages[_0xd91165.oldMessagesIndex]);
    } else if (!_0x4e0c4c && _0xd91165.oldMessagesIndex - 1 >= 0) {
      _0x5198b9("oldMessagesIndex", _0xd91165.oldMessagesIndex - 1);
      _0x5198b9("message", _0xd91165.oldMessages[_0xd91165.oldMessagesIndex]);
    } else if (!_0x4e0c4c && _0xd91165.oldMessagesIndex - 1 === -1) {
      _0x5198b9("oldMessagesIndex", -1);
      _0x5198b9("message", "");
    }
  };
  const _0x46ffb5 = _0x3d44cd => {
    if (_0x3d44cd.key === "Enter") {
      _0x3ea5f7();
      return;
    }
    const _0x582661 = _0x3d44cd.which;
    if (_0x582661 === 38 || _0x582661 === 40) {
      _0x3d44cd.preventDefault();
      _0x157130(_0x582661 === 38);
    } else if (_0x582661 == 33) {
      var _0x121c1e = document.getElementsByClassName("chat-messages")[0];
      _0x121c1e.scrollTop = _0x121c1e.scrollTop - 100;
    } else if (_0x582661 == 34) {
      var _0x121c1e = document.getElementsByClassName("chat-messages")[0];
      _0x121c1e.scrollTop = _0x121c1e.scrollTop + 100;
    } else if (_0x582661 === 9) {
      if (_0x3d44cd.shiftKey || _0x3d44cd.altKey) {
        do {
          _0x5198b9("modeIdx", --_0xd91165.modeIdx);
          if (_0xd91165.modeIdx < 0) {
            _0x5198b9("modeIdx", _0xd91165.modes.length - 1);
          }
        } while (_0xd91165.modes[_0xd91165.modeIdx].hidden);
      } else {
        do {
          _0x5198b9("modeIdx", (_0xd91165.modeIdx + 1) % _0xd91165.modes.length);
        } while (_0xd91165.modes[_0xd91165.modeIdx].hidden);
      }
      const _0x4b329c = document.getElementsByClassName("chat-messages")[0];
      setTimeout(() => _0x4b329c.scrollTop = _0x4b329c.scrollHeight, 0);
    }
    _0x4fac81();
  };
  const _0x4fac81 = () => {
    const _0x2ee2b4 = R;
    if (!_0x2ee2b4) {
      return;
    }
    const _0x3a0ec0 = getComputedStyle(_0x2ee2b4);
    const _0x13c0b1 = parseFloat(_0x3a0ec0.paddingBottom) + parseFloat(_0x3a0ec0.paddingTop);
    _0x2ee2b4.style.height = "5px";
    _0x2ee2b4.style.height = _0x2ee2b4.scrollHeight - _0x13c0b1 + "px";
  };
  const _0x3ea5f7 = () => {
    if (_0xd91165.message !== "") {
      _0x115b3d.execute("chatResult", {
        message: _0xd91165.message,
        mode: _0xd91165.modes[_0x472e92()].name
      });
      const _0x467b06 = [..._0xd91165.oldMessages];
      _0x467b06.unshift(_0xd91165.message);
      _0x5198b9("oldMessages", _0x467b06);
      _0x5198b9("oldMessagesIndex", -1);
      _0x42f1b4();
    } else {
      _0x42f1b4(true);
    }
  };
  const _0x2653e4 = _0x454b71 => {
    if (_0x454b71.key === "Escape") {
      _0x42f1b4(true);
    }
  };
  Xe(async () => {
    document.addEventListener("keydown", _0x2653e4);
  });
  Ee(() => {
    document.removeEventListener("keydown", _0x2653e4);
  });
  return (() => {
    const _0x4fa548 = Vt();
    const _0x5ccf9a = _0x4fa548.firstChild;
    const _0x52bd0b = _0x5ccf9a.firstChild;
    const _0x156971 = _0x52bd0b.nextSibling;
    _0x52bd0b.$$input = _0x363179 => _0x5198b9("message", _0x363179.currentTarget.value);
    _0x52bd0b.$$keyup = _0x4fac81;
    _0x52bd0b.$$keydown = _0x46ffb5;
    const _0x433e01 = R;
    if (typeof _0x433e01 == "function") {
      ke(_0x433e01, _0x52bd0b);
    } else {
      R = _0x52bd0b;
    }
    at(_0x52bd0b, "spellcheck", false);
    _0x156971.$$click = () => {
      _0x3ea5f7();
    };
    E(() => _0x52bd0b.value = _0xd91165.message);
    return _0x4fa548;
  })();
}
ut(["keydown", "keyup", "input", "click"]);
const Qt = b("<div class=\"input-container\">");
const Yt = b("<div class=\"App\">");
function zt() {
  const {
    data: _0x556168,
    setData: _0x2a0d9a
  } = X();
  const _0x4a9123 = () => {
    clearTimeout(_0x556168.showWindowTimer);
    _0x2a0d9a("showWindowTimer", window.setTimeout(() => {
      if (_0x556168.hideState !== A.AlwaysShow && !_0x556168.showInput) {
        _0x2a0d9a("showWindow", false);
      }
    }, pe.fadeTimeout));
  };
  _0x115b3d.register("ON_SCREEN_STATE_CHANGE", async ({
    hideState: _0x3d2476,
    fromUserInteraction: _0x16d9ac
  }) => {
    _0x2a0d9a("hideState", _0x3d2476);
    if (_0x3d2476 === A.AlwaysHide) {
      if (!_0x556168.showInput) {
        _0x2a0d9a("showWindow", false);
      }
    } else if (_0x556168.hideState === A.AlwaysShow) {
      _0x2a0d9a("showWindow", true);
      if (_0x556168.showWindowTimer) {
        clearTimeout(_0x556168.showWindowTimer);
      }
    } else {
      _0x4a9123();
    }
    if (_0x16d9ac) {
      _0x2a0d9a("showHideState", true);
      if (_0x556168.showHideStateTimer) {
        clearTimeout(_0x556168.showHideStateTimer);
      }
      _0x2a0d9a("showHideStateTimer", window.setTimeout(() => {
        _0x2a0d9a("showHideState", false);
      }, 1500));
    }
  });
  _0x115b3d.register("ON_OPEN", async () => {
    _0x2a0d9a("showInput", true);
    _0x2a0d9a("showWindow", true);
    if (_0x556168.showWindowTimer) {
      clearTimeout(_0x556168.showWindowTimer);
    }
    _0x2a0d9a("focusTimer", window.setInterval(() => {
      if (R) {
        R.focus();
      } else {
        clearInterval(_0x556168.focusTimer);
      }
    }, 100));
    const _0x51acb0 = ie;
    if (_0x51acb0) {
      _0x51acb0.scrollTop = _0x51acb0.scrollHeight;
    }
  });
  _0x115b3d.register("ON_MESSAGE", async ({
    message: _0x3e39c8
  }) => {
    _0x3e39c8.id = "" + new Date().getTime() + Math.random();
    _0x3e39c8.modeData = _0x556168.modes.find(_0xd70a45 => _0xd70a45.name === _0x3e39c8.mode);
    _0x2a0d9a("messages", [..._0x556168.messages, _0x3e39c8]);
    if (_0x556168.hideState !== A.AlwaysHide) {
      if (_0x556168.showWindowTimer) {
        clearTimeout(_0x556168.showWindowTimer);
      }
      _0x2a0d9a("showWindow", true);
      _0x4a9123();
      const _0x29d295 = ie;
      if (_0x29d295) {
        _0x29d295.scroll({
          top: _0x29d295.scrollHeight
        });
      }
    }
  });
  _0x115b3d.register("ON_CLEAR", async () => {
    _0x2a0d9a("messages", []);
    _0x2a0d9a("oldMessages", []);
    _0x2a0d9a("oldMessagesIndex", -1);
  });
  _0x115b3d.register("ON_MODE_ADD", async ({
    mode: _0x504473
  }) => {
    const _0x46bc72 = [..._0x556168.modes.filter(_0x408d1e => _0x408d1e.name !== _0x504473.name), _0x504473];
    _0x2a0d9a("modes", _0x46bc72);
  });
  _0x115b3d.register("ON_MODE_REMOVE", async ({
    name: _0x6ebd9
  }) => {
    let _0x1ef4c2 = _0x556168.modes.filter(_0x295789 => _0x295789.name !== _0x6ebd9);
    if (_0x1ef4c2.length === 0) {
      _0x1ef4c2 = [Be];
    }
    _0x2a0d9a("modes", _0x1ef4c2);
  });
  return (() => {
    const _0x48eb73 = Yt();
    v(_0x48eb73, y(Pt, {}), null);
    v(_0x48eb73, y(B, {
      get when() {
        return _0x556168.showInput;
      },
      get children() {
        const _0x5a1115 = Qt();
        v(_0x5a1115, y(Xt, {}), null);
        v(_0x5a1115, y(qt, {}), null);
        return _0x5a1115;
      }
    }), null);
    v(_0x48eb73, y(Gt, {}), null);
    return _0x48eb73;
  })();
}
ct(() => y(pt, {
  get children() {
    return y(zt, {});
  }
}), document.getElementById("root"));