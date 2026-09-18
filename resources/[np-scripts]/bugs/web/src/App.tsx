import './style.css';
import { N as _0x5b5528 } from "./v-packages-6cb79519.js";
(function () {
  const _0x37618f = document.createElement("link").relList;
  if (_0x37618f && _0x37618f.supports && _0x37618f.supports("modulepreload")) {
    return;
  }
  for (const _0x1a3439 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x229770(_0x1a3439);
  }
  new MutationObserver(_0x41c7c0 => {
    for (const _0x2b7c42 of _0x41c7c0) {
      if (_0x2b7c42.type === "childList") {
        for (const _0x20e933 of _0x2b7c42.addedNodes) {
          if (_0x20e933.tagName === "LINK" && _0x20e933.rel === "modulepreload") {
            _0x229770(_0x20e933);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x1aab8f(_0x3035be) {
    const _0x1a4798 = {};
    if (_0x3035be.integrity) {
      _0x1a4798.integrity = _0x3035be.integrity;
    }
    if (_0x3035be.referrerPolicy) {
      _0x1a4798.referrerPolicy = _0x3035be.referrerPolicy;
    }
    if (_0x3035be.crossOrigin === "use-credentials") {
      _0x1a4798.credentials = "include";
    } else if (_0x3035be.crossOrigin === "anonymous") {
      _0x1a4798.credentials = "omit";
    } else {
      _0x1a4798.credentials = "same-origin";
    }
    return _0x1a4798;
  }
  function _0x229770(_0x39613c) {
    if (_0x39613c.ep) {
      return;
    }
    _0x39613c.ep = true;
    const _0x5c9aa0 = _0x1aab8f(_0x39613c);
    fetch(_0x39613c.href, _0x5c9aa0);
  }
})();
const Ve = (_0x268c77, _0x3b3355) => _0x268c77 === _0x3b3355;
const I = Symbol("solid-proxy");
const pe = Symbol("solid-track");
const Z = {
  equals: Ve
};
let xe = Te;
const j = 1;
const X = 2;
const Ae = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var p = null;
let ne = null;
let _ = null;
let C = null;
let O = null;
let z = 0;
const [Fe, rn] = de(false);
function Me(_0x1fc51f, _0x58201a) {
  const _0x22376b = _;
  const _0x153a6d = p;
  const _0xc62b30 = _0x1fc51f.length === 0;
  const _0x29a5b2 = _0xc62b30 ? Ae : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x58201a === undefined ? _0x153a6d : _0x58201a
  };
  const _0x4e6a58 = _0xc62b30 ? _0x1fc51f : () => _0x1fc51f(() => L(() => te(_0x29a5b2)));
  p = _0x29a5b2;
  _ = null;
  try {
    return N(_0x4e6a58, true);
  } finally {
    _ = _0x22376b;
    p = _0x153a6d;
  }
}
function de(_0x24966e, _0x39d447) {
  _0x39d447 = _0x39d447 ? Object.assign({}, Z, _0x39d447) : Z;
  const _0x10b2cc = {
    value: _0x24966e,
    observers: null,
    observerSlots: null,
    comparator: _0x39d447.equals || undefined
  };
  const _0x52da2f = _0x150615 => {
    if (typeof _0x150615 == "function") {
      _0x150615 = _0x150615(_0x10b2cc.value);
    }
    return Le(_0x10b2cc, _0x150615);
  };
  return [Ee.bind(_0x10b2cc), _0x52da2f];
}
function Ue(_0x5c16ac, _0xed7c8e, _0x177ec5) {
  const _0x13f490 = ee(_0x5c16ac, _0xed7c8e, true, j);
  U(_0x13f490);
}
function S(_0x1b1128, _0x407f15, _0x3b4fd1) {
  const _0x4c981c = ee(_0x1b1128, _0x407f15, false, j);
  U(_0x4c981c);
}
function He(_0x406b4d, _0x27eb86, _0x2a9edd) {
  xe = Xe;
  const _0x5450eb = ee(_0x406b4d, _0x27eb86, false, j);
  if (!_0x2a9edd || !_0x2a9edd.render) {
    _0x5450eb.user = true;
  }
  if (O) {
    O.push(_0x5450eb);
  } else {
    U(_0x5450eb);
  }
}
function G(_0x433db3, _0xb246c4, _0x45d21d) {
  _0x45d21d = _0x45d21d ? Object.assign({}, Z, _0x45d21d) : Z;
  const _0x4c69ce = ee(_0x433db3, _0xb246c4, true, 0);
  _0x4c69ce.observers = null;
  _0x4c69ce.observerSlots = null;
  _0x4c69ce.comparator = _0x45d21d.equals || undefined;
  U(_0x4c69ce);
  return Ee.bind(_0x4c69ce);
}
function oe(_0x37d637) {
  return N(_0x37d637, false);
}
function L(_0x35fd5c) {
  if (_ === null) {
    return _0x35fd5c();
  }
  const _0x5d0719 = _;
  _ = null;
  try {
    return _0x35fd5c();
  } finally {
    _ = _0x5d0719;
  }
}
function ke(_0x560e78) {
  He(() => L(_0x560e78));
}
function Ke(_0x249f09) {
  if (p !== null) {
    if (p.cleanups === null) {
      p.cleanups = [_0x249f09];
    } else {
      p.cleanups.push(_0x249f09);
    }
  }
  return _0x249f09;
}
function Se() {
  return _;
}
function Ge(_0x51577c) {
  const _0x1c0d56 = _;
  const _0x176af1 = p;
  return Promise.resolve().then(() => {
    _ = _0x1c0d56;
    p = _0x176af1;
    let _0x1f86b6;
    N(_0x51577c, false);
    _ = p = null;
    if (_0x1f86b6) {
      return _0x1f86b6.done;
    } else {
      return undefined;
    }
  });
}
function qe() {
  return [Fe, Ge];
}
function Ee() {
  if (this.sources && this.state) {
    if (this.state === j) {
      U(this);
    } else {
      const _0x247bd2 = C;
      C = null;
      N(() => Q(this), false);
      C = _0x247bd2;
    }
  }
  if (_) {
    const _0x1351e1 = this.observers ? this.observers.length : 0;
    if (_.sources) {
      _.sources.push(this);
      _.sourceSlots.push(_0x1351e1);
    } else {
      _.sources = [this];
      _.sourceSlots = [_0x1351e1];
    }
    if (this.observers) {
      this.observers.push(_);
      this.observerSlots.push(_.sources.length - 1);
    } else {
      this.observers = [_];
      this.observerSlots = [_.sources.length - 1];
    }
  }
  return this.value;
}
function Le(_0x3b2126, _0x52c7d3, _0x29fa17) {
  let _0x8b74b2 = _0x3b2126.value;
  if (!_0x3b2126.comparator || !_0x3b2126.comparator(_0x8b74b2, _0x52c7d3)) {
    _0x3b2126.value = _0x52c7d3;
    if (_0x3b2126.observers && _0x3b2126.observers.length) {
      N(() => {
        for (let _0xf3f499 = 0; _0xf3f499 < _0x3b2126.observers.length; _0xf3f499 += 1) {
          const _0x145fc8 = _0x3b2126.observers[_0xf3f499];
          const _0x2dddfd = ne && ne.running;
          if (_0x2dddfd) {
            ne.disposed.has(_0x145fc8);
          }
          if (_0x2dddfd ? !_0x145fc8.tState : !_0x145fc8.state) {
            if (_0x145fc8.pure) {
              C.push(_0x145fc8);
            } else {
              O.push(_0x145fc8);
            }
            if (_0x145fc8.observers) {
              Oe(_0x145fc8);
            }
          }
          if (!_0x2dddfd) {
            _0x145fc8.state = j;
          }
        }
        if (C.length > 1000000) {
          C = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x52c7d3;
}
function U(_0x3beefd) {
  if (!_0x3beefd.fn) {
    return;
  }
  te(_0x3beefd);
  const _0x540b08 = p;
  const _0x14920a = _;
  const _0xb35bf0 = z;
  _ = p = _0x3beefd;
  We(_0x3beefd, _0x3beefd.value, _0xb35bf0);
  _ = _0x14920a;
  p = _0x540b08;
}
function We(_0xf5b58e, _0x1e087b, _0x49e66f) {
  let _0x46ab4e;
  try {
    _0x46ab4e = _0xf5b58e.fn(_0x1e087b);
  } catch (_0x788cef) {
    if (_0xf5b58e.pure) {
      _0xf5b58e.state = j;
      if (_0xf5b58e.owned) {
        _0xf5b58e.owned.forEach(te);
      }
      _0xf5b58e.owned = null;
    }
    _0xf5b58e.updatedAt = _0x49e66f + 1;
    return je(_0x788cef);
  }
  if (!_0xf5b58e.updatedAt || _0xf5b58e.updatedAt <= _0x49e66f) {
    if (_0xf5b58e.updatedAt != null && "observers" in _0xf5b58e) {
      Le(_0xf5b58e, _0x46ab4e);
    } else {
      _0xf5b58e.value = _0x46ab4e;
    }
    _0xf5b58e.updatedAt = _0x49e66f;
  }
}
function ee(_0x10f014, _0x24915f, _0x234c6a, _0x624af7 = j, _0x20446d) {
  const _0x6d094d = {
    fn: _0x10f014,
    state: _0x624af7,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x24915f,
    owner: p,
    context: null,
    pure: _0x234c6a
  };
  if (p !== null) {
    if (p !== Ae) {
      if (p.owned) {
        p.owned.push(_0x6d094d);
      } else {
        p.owned = [_0x6d094d];
      }
    }
  }
  return _0x6d094d;
}
function J(_0x48b571) {
  if (_0x48b571.state === 0) {
    return;
  }
  if (_0x48b571.state === X) {
    return Q(_0x48b571);
  }
  if (_0x48b571.suspense && L(_0x48b571.suspense.inFallback)) {
    return _0x48b571.suspense.effects.push(_0x48b571);
  }
  const _0x1ee06e = [_0x48b571];
  while ((_0x48b571 = _0x48b571.owner) && (!_0x48b571.updatedAt || _0x48b571.updatedAt < z)) {
    if (_0x48b571.state) {
      _0x1ee06e.push(_0x48b571);
    }
  }
  for (let _0x556615 = _0x1ee06e.length - 1; _0x556615 >= 0; _0x556615--) {
    _0x48b571 = _0x1ee06e[_0x556615];
    if (_0x48b571.state === j) {
      U(_0x48b571);
    } else if (_0x48b571.state === X) {
      const _0x211f2e = C;
      C = null;
      N(() => Q(_0x48b571, _0x1ee06e[0]), false);
      C = _0x211f2e;
    }
  }
}
function N(_0x435c7f, _0x103f8f) {
  if (C) {
    return _0x435c7f();
  }
  let _0x1f6aeb = false;
  if (!_0x103f8f) {
    C = [];
  }
  if (O) {
    _0x1f6aeb = true;
  } else {
    O = [];
  }
  z++;
  try {
    const _0x46a102 = _0x435c7f();
    Ze(_0x1f6aeb);
    return _0x46a102;
  } catch (_0x1d5f57) {
    if (!_0x1f6aeb) {
      O = null;
    }
    C = null;
    je(_0x1d5f57);
  }
}
function Ze(_0x12fd73) {
  if (C) {
    Te(C);
    C = null;
  }
  if (_0x12fd73) {
    return;
  }
  const _0x2ede1d = O;
  O = null;
  if (_0x2ede1d.length) {
    N(() => xe(_0x2ede1d), false);
  }
}
function Te(_0xdcb097) {
  for (let _0x2f0de5 = 0; _0x2f0de5 < _0xdcb097.length; _0x2f0de5++) {
    J(_0xdcb097[_0x2f0de5]);
  }
}
function Xe(_0x253ffb) {
  let _0x3f3be1;
  let _0x29d398 = 0;
  for (_0x3f3be1 = 0; _0x3f3be1 < _0x253ffb.length; _0x3f3be1++) {
    const _0x5ab5d7 = _0x253ffb[_0x3f3be1];
    if (_0x5ab5d7.user) {
      _0x253ffb[_0x29d398++] = _0x5ab5d7;
    } else {
      J(_0x5ab5d7);
    }
  }
  for (_0x3f3be1 = 0; _0x3f3be1 < _0x29d398; _0x3f3be1++) {
    J(_0x253ffb[_0x3f3be1]);
  }
}
function Q(_0x59f8c2, _0x33b249) {
  _0x59f8c2.state = 0;
  for (let _0x391c68 = 0; _0x391c68 < _0x59f8c2.sources.length; _0x391c68 += 1) {
    const _0x167d8b = _0x59f8c2.sources[_0x391c68];
    if (_0x167d8b.sources) {
      const _0x43479c = _0x167d8b.state;
      if (_0x43479c === j) {
        if (_0x167d8b !== _0x33b249 && (!_0x167d8b.updatedAt || _0x167d8b.updatedAt < z)) {
          J(_0x167d8b);
        }
      } else if (_0x43479c === X) {
        Q(_0x167d8b, _0x33b249);
      }
    }
  }
}
function Oe(_0x564033) {
  for (let _0x180d4e = 0; _0x180d4e < _0x564033.observers.length; _0x180d4e += 1) {
    const _0x32d533 = _0x564033.observers[_0x180d4e];
    if (!_0x32d533.state) {
      _0x32d533.state = X;
      if (_0x32d533.pure) {
        C.push(_0x32d533);
      } else {
        O.push(_0x32d533);
      }
      if (_0x32d533.observers) {
        Oe(_0x32d533);
      }
    }
  }
}
function te(_0x3293ee) {
  let _0x3d1f5a;
  if (_0x3293ee.sources) {
    while (_0x3293ee.sources.length) {
      const _0x54bf8f = _0x3293ee.sources.pop();
      const _0x316172 = _0x3293ee.sourceSlots.pop();
      const _0x59aea4 = _0x54bf8f.observers;
      if (_0x59aea4 && _0x59aea4.length) {
        const _0x14da2f = _0x59aea4.pop();
        const _0x525632 = _0x54bf8f.observerSlots.pop();
        if (_0x316172 < _0x59aea4.length) {
          _0x14da2f.sourceSlots[_0x525632] = _0x316172;
          _0x59aea4[_0x316172] = _0x14da2f;
          _0x54bf8f.observerSlots[_0x316172] = _0x525632;
        }
      }
    }
  }
  if (_0x3293ee.owned) {
    for (_0x3d1f5a = _0x3293ee.owned.length - 1; _0x3d1f5a >= 0; _0x3d1f5a--) {
      te(_0x3293ee.owned[_0x3d1f5a]);
    }
    _0x3293ee.owned = null;
  }
  if (_0x3293ee.cleanups) {
    for (_0x3d1f5a = _0x3293ee.cleanups.length - 1; _0x3d1f5a >= 0; _0x3d1f5a--) {
      _0x3293ee.cleanups[_0x3d1f5a]();
    }
    _0x3293ee.cleanups = null;
  }
  _0x3293ee.state = 0;
  _0x3293ee.context = null;
}
function je(_0x34fc00) {
  throw _0x34fc00;
}
function A(_0x40efe3, _0x8c8620) {
  return L(() => _0x40efe3(_0x8c8620 || {}));
}
const Je = _0x4ff219 => "Stale read from <" + _0x4ff219 + ">.";
function Pe(_0x26deb2) {
  const _0x5db658 = _0x26deb2.keyed;
  const _0x10b255 = G(() => _0x26deb2.when, undefined, {
    equals: (_0x42c0e4, _0x5a0a33) => _0x5db658 ? _0x42c0e4 === _0x5a0a33 : !_0x42c0e4 == !_0x5a0a33
  });
  return G(() => {
    const _0x131734 = _0x10b255();
    if (_0x131734) {
      const _0x1ba822 = _0x26deb2.children;
      if (typeof _0x1ba822 == "function" && _0x1ba822.length > 0) {
        return L(() => _0x1ba822(_0x5db658 ? _0x131734 : () => {
          if (!L(_0x10b255)) {
            throw Je("Show");
          }
          return _0x26deb2.when;
        }));
      } else {
        return _0x1ba822;
      }
    }
    return _0x26deb2.fallback;
  }, undefined, undefined);
}
function Qe(_0x18588b, _0x187e85, _0x34fd6e) {
  let _0x36a6f0 = _0x34fd6e.length;
  let _0x25bbb2 = _0x187e85.length;
  let _0x5b964e = _0x36a6f0;
  let _0x4a24de = 0;
  let _0x554dc6 = 0;
  let _0x54eed1 = _0x187e85[_0x25bbb2 - 1].nextSibling;
  let _0x436a10 = null;
  while (_0x4a24de < _0x25bbb2 || _0x554dc6 < _0x5b964e) {
    if (_0x187e85[_0x4a24de] === _0x34fd6e[_0x554dc6]) {
      _0x4a24de++;
      _0x554dc6++;
      continue;
    }
    while (_0x187e85[_0x25bbb2 - 1] === _0x34fd6e[_0x5b964e - 1]) {
      _0x25bbb2--;
      _0x5b964e--;
    }
    if (_0x25bbb2 === _0x4a24de) {
      const _0xcc1248 = _0x5b964e < _0x36a6f0 ? _0x554dc6 ? _0x34fd6e[_0x554dc6 - 1].nextSibling : _0x34fd6e[_0x5b964e - _0x554dc6] : _0x54eed1;
      while (_0x554dc6 < _0x5b964e) {
        _0x18588b.insertBefore(_0x34fd6e[_0x554dc6++], _0xcc1248);
      }
    } else if (_0x5b964e === _0x554dc6) {
      while (_0x4a24de < _0x25bbb2) {
        if (!_0x436a10 || !_0x436a10.has(_0x187e85[_0x4a24de])) {
          _0x187e85[_0x4a24de].remove();
        }
        _0x4a24de++;
      }
    } else if (_0x187e85[_0x4a24de] === _0x34fd6e[_0x5b964e - 1] && _0x34fd6e[_0x554dc6] === _0x187e85[_0x25bbb2 - 1]) {
      const _0x5cb24c = _0x187e85[--_0x25bbb2].nextSibling;
      _0x18588b.insertBefore(_0x34fd6e[_0x554dc6++], _0x187e85[_0x4a24de++].nextSibling);
      _0x18588b.insertBefore(_0x34fd6e[--_0x5b964e], _0x5cb24c);
      _0x187e85[_0x25bbb2] = _0x34fd6e[_0x5b964e];
    } else {
      if (!_0x436a10) {
        _0x436a10 = new Map();
        let _0x3a87f4 = _0x554dc6;
        while (_0x3a87f4 < _0x5b964e) {
          _0x436a10.set(_0x34fd6e[_0x3a87f4], _0x3a87f4++);
        }
      }
      const _0x41cb3e = _0x436a10.get(_0x187e85[_0x4a24de]);
      if (_0x41cb3e != null) {
        if (_0x554dc6 < _0x41cb3e && _0x41cb3e < _0x5b964e) {
          let _0x4adb11 = _0x4a24de;
          let _0x3ddf90 = 1;
          let _0x221807;
          while (++_0x4adb11 < _0x25bbb2 && _0x4adb11 < _0x5b964e && (_0x221807 = _0x436a10.get(_0x187e85[_0x4adb11])) != null && _0x221807 === _0x41cb3e + _0x3ddf90) {
            _0x3ddf90++;
          }
          if (_0x3ddf90 > _0x41cb3e - _0x554dc6) {
            const _0x3a5b0e = _0x187e85[_0x4a24de];
            while (_0x554dc6 < _0x41cb3e) {
              _0x18588b.insertBefore(_0x34fd6e[_0x554dc6++], _0x3a5b0e);
            }
          } else {
            _0x18588b.replaceChild(_0x34fd6e[_0x554dc6++], _0x187e85[_0x4a24de++]);
          }
        } else {
          _0x4a24de++;
        }
      } else {
        _0x187e85[_0x4a24de++].remove();
      }
    }
  }
}
const Ce = "_$DX_DELEGATE";
function Ye(_0x921f32, _0x5f3ea1, _0x47227f, _0x354c08 = {}) {
  let _0x415bcf;
  Me(_0x398a8e => {
    _0x415bcf = _0x398a8e;
    if (_0x5f3ea1 === document) {
      _0x921f32();
    } else {
      b(_0x5f3ea1, _0x921f32(), _0x5f3ea1.firstChild ? null : undefined, _0x47227f);
    }
  }, _0x354c08.owner);
  return () => {
    _0x415bcf();
    _0x5f3ea1.textContent = "";
  };
}
function R(_0x27852b, _0x10a2e1, _0x3e1c17) {
  let _0x5a8f6d;
  const _0x20d9a8 = () => {
    const _0x476ed6 = document.createElement("template");
    _0x476ed6.innerHTML = _0x27852b;
    if (_0x3e1c17) {
      return _0x476ed6.content.firstChild.firstChild;
    } else {
      return _0x476ed6.content.firstChild;
    }
  };
  const _0x35a587 = _0x10a2e1 ? () => L(() => document.importNode(_0x5a8f6d ||= _0x20d9a8(), true)) : () => (_0x5a8f6d ||= _0x20d9a8()).cloneNode(true);
  _0x35a587.cloneNode = _0x35a587;
  return _0x35a587;
}
function ae(_0x21cfa4, _0x5e72c6 = window.document) {
  const _0x1b3cc6 = _0x5e72c6[Ce] ||= new Set();
  for (let _0x29bdd2 = 0, _0x22a7b0 = _0x21cfa4.length; _0x29bdd2 < _0x22a7b0; _0x29bdd2++) {
    const _0x4487e8 = _0x21cfa4[_0x29bdd2];
    if (!_0x1b3cc6.has(_0x4487e8)) {
      _0x1b3cc6.add(_0x4487e8);
      _0x5e72c6.addEventListener(_0x4487e8, tt);
    }
  }
}
function ze(_0x2b4a0a, _0x170884, _0x1e8bd6) {
  if (_0x1e8bd6 == null) {
    _0x2b4a0a.removeAttribute(_0x170884);
  } else {
    _0x2b4a0a.setAttribute(_0x170884, _0x1e8bd6);
  }
}
function v(_0x40d2f4, _0x3a9d3e) {
  if (_0x3a9d3e == null) {
    _0x40d2f4.removeAttribute("class");
  } else {
    _0x40d2f4.className = _0x3a9d3e;
  }
}
function et(_0x1ae0b1, _0x2a2fdf, _0x2eb14e = {}) {
  const _0x5aef0b = Object.keys(_0x2a2fdf || {});
  const _0x2fab1e = Object.keys(_0x2eb14e);
  let _0x205b8b;
  let _0xfbdb3e;
  _0x205b8b = 0;
  _0xfbdb3e = _0x2fab1e.length;
  for (; _0x205b8b < _0xfbdb3e; _0x205b8b++) {
    const _0x32f29d = _0x2fab1e[_0x205b8b];
    if (!!_0x32f29d && _0x32f29d !== "undefined" && !_0x2a2fdf[_0x32f29d]) {
      ye(_0x1ae0b1, _0x32f29d, false);
      delete _0x2eb14e[_0x32f29d];
    }
  }
  _0x205b8b = 0;
  _0xfbdb3e = _0x5aef0b.length;
  for (; _0x205b8b < _0xfbdb3e; _0x205b8b++) {
    const _0x5a4e83 = _0x5aef0b[_0x205b8b];
    const _0x4c5ed5 = !!_0x2a2fdf[_0x5a4e83];
    if (!!_0x5a4e83 && _0x5a4e83 !== "undefined" && _0x2eb14e[_0x5a4e83] !== _0x4c5ed5 && !!_0x4c5ed5) {
      ye(_0x1ae0b1, _0x5a4e83, true);
      _0x2eb14e[_0x5a4e83] = _0x4c5ed5;
    }
  }
  return _0x2eb14e;
}
function b(_0x49cfff, _0x182399, _0x4dd4aa, _0x7c4ade) {
  if (_0x4dd4aa !== undefined && !_0x7c4ade) {
    _0x7c4ade = [];
  }
  if (typeof _0x182399 != "function") {
    return Y(_0x49cfff, _0x182399, _0x7c4ade, _0x4dd4aa);
  }
  S(_0x142b30 => Y(_0x49cfff, _0x182399(), _0x142b30, _0x4dd4aa), _0x7c4ade);
}
function ye(_0x35fee3, _0x329e97, _0x3650b2) {
  const _0x3bfaf2 = _0x329e97.trim().split(/\s+/);
  for (let _0x164942 = 0, _0x28301d = _0x3bfaf2.length; _0x164942 < _0x28301d; _0x164942++) {
    _0x35fee3.classList.toggle(_0x3bfaf2[_0x164942], _0x3650b2);
  }
}
function tt(_0x567578) {
  const _0x3b142e = "$$" + _0x567578.type;
  let _0x2ca05a = _0x567578.composedPath && _0x567578.composedPath()[0] || _0x567578.target;
  if (_0x567578.target !== _0x2ca05a) {
    Object.defineProperty(_0x567578, "target", {
      configurable: true,
      value: _0x2ca05a
    });
  }
  Object.defineProperty(_0x567578, "currentTarget", {
    configurable: true,
    get() {
      return _0x2ca05a || document;
    }
  });
  while (_0x2ca05a) {
    const _0xf4bd16 = _0x2ca05a[_0x3b142e];
    if (_0xf4bd16 && !_0x2ca05a.disabled) {
      const _0x3f94e7 = _0x2ca05a[_0x3b142e + "Data"];
      if (_0x3f94e7 !== undefined) {
        _0xf4bd16.call(_0x2ca05a, _0x3f94e7, _0x567578);
      } else {
        _0xf4bd16.call(_0x2ca05a, _0x567578);
      }
      if (_0x567578.cancelBubble) {
        return;
      }
    }
    _0x2ca05a = _0x2ca05a._$host || _0x2ca05a.parentNode || _0x2ca05a.host;
  }
}
function Y(_0x16e709, _0x2dc766, _0x415cbe, _0x45ac52, _0x5c3781) {
  while (typeof _0x415cbe == "function") {
    _0x415cbe = _0x415cbe();
  }
  if (_0x2dc766 === _0x415cbe) {
    return _0x415cbe;
  }
  const _0x45ca83 = typeof _0x2dc766;
  const _0x23fadd = _0x45ac52 !== undefined;
  _0x16e709 = _0x23fadd && _0x415cbe[0] && _0x415cbe[0].parentNode || _0x16e709;
  if (_0x45ca83 === "string" || _0x45ca83 === "number") {
    if (_0x45ca83 === "number") {
      _0x2dc766 = _0x2dc766.toString();
    }
    if (_0x23fadd) {
      let _0x5a197c = _0x415cbe[0];
      if (_0x5a197c && _0x5a197c.nodeType === 3) {
        _0x5a197c.data = _0x2dc766;
      } else {
        _0x5a197c = document.createTextNode(_0x2dc766);
      }
      _0x415cbe = B(_0x16e709, _0x415cbe, _0x45ac52, _0x5a197c);
    } else if (_0x415cbe !== "" && typeof _0x415cbe == "string") {
      _0x415cbe = _0x16e709.firstChild.data = _0x2dc766;
    } else {
      _0x415cbe = _0x16e709.textContent = _0x2dc766;
    }
  } else if (_0x2dc766 == null || _0x45ca83 === "boolean") {
    _0x415cbe = B(_0x16e709, _0x415cbe, _0x45ac52);
  } else {
    if (_0x45ca83 === "function") {
      S(() => {
        let _0x157d31 = _0x2dc766();
        while (typeof _0x157d31 == "function") {
          _0x157d31 = _0x157d31();
        }
        _0x415cbe = Y(_0x16e709, _0x157d31, _0x415cbe, _0x45ac52);
      });
      return () => _0x415cbe;
    }
    if (Array.isArray(_0x2dc766)) {
      const _0x3125f1 = [];
      const _0x1d3029 = _0x415cbe && Array.isArray(_0x415cbe);
      if (re(_0x3125f1, _0x2dc766, _0x415cbe, _0x5c3781)) {
        S(() => _0x415cbe = Y(_0x16e709, _0x3125f1, _0x415cbe, _0x45ac52, true));
        return () => _0x415cbe;
      }
      if (_0x3125f1.length === 0) {
        _0x415cbe = B(_0x16e709, _0x415cbe, _0x45ac52);
        if (_0x23fadd) {
          return _0x415cbe;
        }
      } else if (_0x1d3029) {
        if (_0x415cbe.length === 0) {
          be(_0x16e709, _0x3125f1, _0x45ac52);
        } else {
          Qe(_0x16e709, _0x415cbe, _0x3125f1);
        }
      } else {
        if (_0x415cbe) {
          B(_0x16e709);
        }
        be(_0x16e709, _0x3125f1);
      }
      _0x415cbe = _0x3125f1;
    } else if (_0x2dc766.nodeType) {
      if (Array.isArray(_0x415cbe)) {
        if (_0x23fadd) {
          return _0x415cbe = B(_0x16e709, _0x415cbe, _0x45ac52, _0x2dc766);
        }
        B(_0x16e709, _0x415cbe, null, _0x2dc766);
      } else if (_0x415cbe == null || _0x415cbe === "" || !_0x16e709.firstChild) {
        _0x16e709.appendChild(_0x2dc766);
      } else {
        _0x16e709.replaceChild(_0x2dc766, _0x16e709.firstChild);
      }
      _0x415cbe = _0x2dc766;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x2dc766);
    }
  }
  return _0x415cbe;
}
function re(_0x1c2f20, _0xe54df3, _0x589346, _0x3c9839) {
  let _0x1c87d8 = false;
  for (let _0x27b8ba = 0, _0x31a801 = _0xe54df3.length; _0x27b8ba < _0x31a801; _0x27b8ba++) {
    let _0x2ef78d = _0xe54df3[_0x27b8ba];
    let _0x4093f9 = _0x589346 && _0x589346[_0x27b8ba];
    let _0x474c7b;
    if (_0x2ef78d != null && _0x2ef78d !== true && _0x2ef78d !== false) {
      if ((_0x474c7b = typeof _0x2ef78d) == "object" && _0x2ef78d.nodeType) {
        _0x1c2f20.push(_0x2ef78d);
      } else if (Array.isArray(_0x2ef78d)) {
        _0x1c87d8 = re(_0x1c2f20, _0x2ef78d, _0x4093f9) || _0x1c87d8;
      } else if (_0x474c7b === "function") {
        if (_0x3c9839) {
          while (typeof _0x2ef78d == "function") {
            _0x2ef78d = _0x2ef78d();
          }
          _0x1c87d8 = re(_0x1c2f20, Array.isArray(_0x2ef78d) ? _0x2ef78d : [_0x2ef78d], Array.isArray(_0x4093f9) ? _0x4093f9 : [_0x4093f9]) || _0x1c87d8;
        } else {
          _0x1c2f20.push(_0x2ef78d);
          _0x1c87d8 = true;
        }
      } else {
        const _0x1d4c4a = String(_0x2ef78d);
        if (_0x4093f9 && _0x4093f9.nodeType === 3 && _0x4093f9.data === _0x1d4c4a) {
          _0x1c2f20.push(_0x4093f9);
        } else {
          _0x1c2f20.push(document.createTextNode(_0x1d4c4a));
        }
      }
    }
  }
  return _0x1c87d8;
}
function be(_0x2b3450, _0x3b2355, _0x52317a = null) {
  for (let _0x339135 = 0, _0x310c06 = _0x3b2355.length; _0x339135 < _0x310c06; _0x339135++) {
    _0x2b3450.insertBefore(_0x3b2355[_0x339135], _0x52317a);
  }
}
function B(_0x1c5f9f, _0x2a6517, _0x128132, _0x4b6b6f) {
  if (_0x128132 === undefined) {
    return _0x1c5f9f.textContent = "";
  }
  const _0x4601b8 = _0x4b6b6f || document.createTextNode("");
  if (_0x2a6517.length) {
    let _0x5d7784 = false;
    for (let _0x4f17b7 = _0x2a6517.length - 1; _0x4f17b7 >= 0; _0x4f17b7--) {
      const _0x10cc1e = _0x2a6517[_0x4f17b7];
      if (_0x4601b8 !== _0x10cc1e) {
        const _0xf5473a = _0x10cc1e.parentNode === _0x1c5f9f;
        if (!_0x5d7784 && !_0x4f17b7) {
          if (_0xf5473a) {
            _0x1c5f9f.replaceChild(_0x4601b8, _0x10cc1e);
          } else {
            _0x1c5f9f.insertBefore(_0x4601b8, _0x128132);
          }
        } else if (_0xf5473a) {
          _0x10cc1e.remove();
        }
      } else {
        _0x5d7784 = true;
      }
    }
  } else {
    _0x1c5f9f.insertBefore(_0x4601b8, _0x128132);
  }
  return [_0x4601b8];
}
const le = Symbol("store-raw");
const q = Symbol("store-node");
function Ie(_0x47fa8e) {
  let _0x5e1d15 = _0x47fa8e[I];
  if (!_0x5e1d15 && (Object.defineProperty(_0x47fa8e, I, {
    value: _0x5e1d15 = new Proxy(_0x47fa8e, st)
  }), !Array.isArray(_0x47fa8e))) {
    const _0x2c1af5 = Object.keys(_0x47fa8e);
    const _0x171e28 = Object.getOwnPropertyDescriptors(_0x47fa8e);
    for (let _0x8c7e37 = 0, _0x39a0e5 = _0x2c1af5.length; _0x8c7e37 < _0x39a0e5; _0x8c7e37++) {
      const _0x110d64 = _0x2c1af5[_0x8c7e37];
      if (_0x171e28[_0x110d64].get) {
        Object.defineProperty(_0x47fa8e, _0x110d64, {
          enumerable: _0x171e28[_0x110d64].enumerable,
          get: _0x171e28[_0x110d64].get.bind(_0x5e1d15)
        });
      }
    }
  }
  return _0x5e1d15;
}
function P(_0x1b1626) {
  let _0x1ddc05;
  return _0x1b1626 != null && typeof _0x1b1626 == "object" && (_0x1b1626[I] || !(_0x1ddc05 = Object.getPrototypeOf(_0x1b1626)) || _0x1ddc05 === Object.prototype || Array.isArray(_0x1b1626));
}
function M(_0xb9f13a, _0xf8d540 = new Set()) {
  let _0xbe9d94;
  let _0x21a2b2;
  let _0x2ee14f;
  let _0x357fc5;
  if (_0xbe9d94 = _0xb9f13a != null && _0xb9f13a[le]) {
    return _0xbe9d94;
  }
  if (!P(_0xb9f13a) || _0xf8d540.has(_0xb9f13a)) {
    return _0xb9f13a;
  }
  if (Array.isArray(_0xb9f13a)) {
    if (Object.isFrozen(_0xb9f13a)) {
      _0xb9f13a = _0xb9f13a.slice(0);
    } else {
      _0xf8d540.add(_0xb9f13a);
    }
    for (let _0x1e10cb = 0, _0x10ba2c = _0xb9f13a.length; _0x1e10cb < _0x10ba2c; _0x1e10cb++) {
      _0x2ee14f = _0xb9f13a[_0x1e10cb];
      if ((_0x21a2b2 = M(_0x2ee14f, _0xf8d540)) !== _0x2ee14f) {
        _0xb9f13a[_0x1e10cb] = _0x21a2b2;
      }
    }
  } else {
    if (Object.isFrozen(_0xb9f13a)) {
      _0xb9f13a = Object.assign({}, _0xb9f13a);
    } else {
      _0xf8d540.add(_0xb9f13a);
    }
    const _0x5acd14 = Object.keys(_0xb9f13a);
    const _0x20397a = Object.getOwnPropertyDescriptors(_0xb9f13a);
    for (let _0x2b7b61 = 0, _0x5693a6 = _0x5acd14.length; _0x2b7b61 < _0x5693a6; _0x2b7b61++) {
      _0x357fc5 = _0x5acd14[_0x2b7b61];
      if (!_0x20397a[_0x357fc5].get) {
        _0x2ee14f = _0xb9f13a[_0x357fc5];
        if ((_0x21a2b2 = M(_0x2ee14f, _0xf8d540)) !== _0x2ee14f) {
          _0xb9f13a[_0x357fc5] = _0x21a2b2;
        }
      }
    }
  }
  return _0xb9f13a;
}
function he(_0x2bfc76) {
  let _0x3130f3 = _0x2bfc76[q];
  if (!_0x3130f3) {
    Object.defineProperty(_0x2bfc76, q, {
      value: _0x3130f3 = Object.create(null)
    });
  }
  return _0x3130f3;
}
function ce(_0x2dab4c, _0x4185ae, _0xe007d2) {
  return _0x2dab4c[_0x4185ae] ||= Re(_0xe007d2);
}
function nt(_0x408481, _0xa24d0b) {
  const _0xf3985a = Reflect.getOwnPropertyDescriptor(_0x408481, _0xa24d0b);
  if (!!_0xf3985a && !_0xf3985a.get && !!_0xf3985a.configurable && _0xa24d0b !== I && _0xa24d0b !== q) {
    delete _0xf3985a.value;
    delete _0xf3985a.writable;
    _0xf3985a.get = () => _0x408481[I][_0xa24d0b];
  }
  return _0xf3985a;
}
function Ne(_0x41725d) {
  if (Se()) {
    const _0x24de60 = he(_0x41725d);
    (_0x24de60._ ||= Re())();
  }
}
function it(_0x144715) {
  Ne(_0x144715);
  return Reflect.ownKeys(_0x144715);
}
function Re(_0x51786c) {
  const [_0x27506e, _0x4bb51d] = de(_0x51786c, {
    equals: false,
    internal: true
  });
  _0x27506e.$ = _0x4bb51d;
  return _0x27506e;
}
const st = {
  get(_0x57d10c, _0x39cc45, _0xd8a15c) {
    if (_0x39cc45 === le) {
      return _0x57d10c;
    }
    if (_0x39cc45 === I) {
      return _0xd8a15c;
    }
    if (_0x39cc45 === pe) {
      Ne(_0x57d10c);
      return _0xd8a15c;
    }
    const _0x157e60 = he(_0x57d10c);
    const _0xefbb5d = _0x157e60[_0x39cc45];
    let _0x16bef0 = _0xefbb5d ? _0xefbb5d() : _0x57d10c[_0x39cc45];
    if (_0x39cc45 === q || _0x39cc45 === "__proto__") {
      return _0x16bef0;
    }
    if (!_0xefbb5d) {
      const _0x29dc61 = Object.getOwnPropertyDescriptor(_0x57d10c, _0x39cc45);
      if (Se() && (typeof _0x16bef0 != "function" || _0x57d10c.hasOwnProperty(_0x39cc45)) && (!_0x29dc61 || !_0x29dc61.get)) {
        _0x16bef0 = ce(_0x157e60, _0x39cc45, _0x16bef0)();
      }
    }
    if (P(_0x16bef0)) {
      return Ie(_0x16bef0);
    } else {
      return _0x16bef0;
    }
  },
  has(_0x1d75b3, _0x50e305) {
    if (_0x50e305 === le || _0x50e305 === I || _0x50e305 === pe || _0x50e305 === q || _0x50e305 === "__proto__") {
      return true;
    } else {
      this.get(_0x1d75b3, _0x50e305, _0x1d75b3);
      return _0x50e305 in _0x1d75b3;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: it,
  getOwnPropertyDescriptor: nt
};
function x(_0x509888, _0x4df954, _0x5ac360, _0xa52ae3 = false) {
  if (!_0xa52ae3 && _0x509888[_0x4df954] === _0x5ac360) {
    return;
  }
  const _0x9339ff = _0x509888[_0x4df954];
  const _0x2c2d7e = _0x509888.length;
  if (_0x5ac360 === undefined) {
    delete _0x509888[_0x4df954];
  } else {
    _0x509888[_0x4df954] = _0x5ac360;
  }
  let _0x4ac965 = he(_0x509888);
  let _0x554b18;
  if (_0x554b18 = ce(_0x4ac965, _0x4df954, _0x9339ff)) {
    _0x554b18.$(() => _0x5ac360);
  }
  if (Array.isArray(_0x509888) && _0x509888.length !== _0x2c2d7e) {
    for (let _0x24613f = _0x509888.length; _0x24613f < _0x2c2d7e; _0x24613f++) {
      if (_0x554b18 = _0x4ac965[_0x24613f]) {
        _0x554b18.$();
      }
    }
    if (_0x554b18 = ce(_0x4ac965, "length", _0x2c2d7e)) {
      _0x554b18.$(_0x509888.length);
    }
  }
  if (_0x554b18 = _0x4ac965._) {
    _0x554b18.$();
  }
}
function Be(_0x3bd774, _0x2df21d) {
  const _0x15f5c6 = Object.keys(_0x2df21d);
  for (let _0x58c256 = 0; _0x58c256 < _0x15f5c6.length; _0x58c256 += 1) {
    const _0x49a708 = _0x15f5c6[_0x58c256];
    x(_0x3bd774, _0x49a708, _0x2df21d[_0x49a708]);
  }
}
function ot(_0x23fea4, _0x2bc41c) {
  if (typeof _0x2bc41c == "function") {
    _0x2bc41c = _0x2bc41c(_0x23fea4);
  }
  _0x2bc41c = M(_0x2bc41c);
  if (Array.isArray(_0x2bc41c)) {
    if (_0x23fea4 === _0x2bc41c) {
      return;
    }
    let _0x5a7995 = 0;
    let _0x242a71 = _0x2bc41c.length;
    for (; _0x5a7995 < _0x242a71; _0x5a7995++) {
      const _0x818c13 = _0x2bc41c[_0x5a7995];
      if (_0x23fea4[_0x5a7995] !== _0x818c13) {
        x(_0x23fea4, _0x5a7995, _0x818c13);
      }
    }
    x(_0x23fea4, "length", _0x242a71);
  } else {
    Be(_0x23fea4, _0x2bc41c);
  }
}
function k(_0x232c9b, _0x33ad07, _0x1abeec = []) {
  let _0x49c2ec;
  let _0x1228c0 = _0x232c9b;
  if (_0x33ad07.length > 1) {
    _0x49c2ec = _0x33ad07.shift();
    const _0x3b607d = typeof _0x49c2ec;
    const _0x1bfb23 = Array.isArray(_0x232c9b);
    if (Array.isArray(_0x49c2ec)) {
      for (let _0x416601 = 0; _0x416601 < _0x49c2ec.length; _0x416601++) {
        k(_0x232c9b, [_0x49c2ec[_0x416601]].concat(_0x33ad07), _0x1abeec);
      }
      return;
    } else if (_0x1bfb23 && _0x3b607d === "function") {
      for (let _0x27eb09 = 0; _0x27eb09 < _0x232c9b.length; _0x27eb09++) {
        if (_0x49c2ec(_0x232c9b[_0x27eb09], _0x27eb09)) {
          k(_0x232c9b, [_0x27eb09].concat(_0x33ad07), _0x1abeec);
        }
      }
      return;
    } else if (_0x1bfb23 && _0x3b607d === "object") {
      const {
        from: _0xbd704a = 0,
        to: _0x5893c0 = _0x232c9b.length - 1,
        by: _0x4f185c = 1
      } = _0x49c2ec;
      for (let _0x1e4527 = _0xbd704a; _0x1e4527 <= _0x5893c0; _0x1e4527 += _0x4f185c) {
        k(_0x232c9b, [_0x1e4527].concat(_0x33ad07), _0x1abeec);
      }
      return;
    } else if (_0x33ad07.length > 1) {
      k(_0x232c9b[_0x49c2ec], _0x33ad07, [_0x49c2ec].concat(_0x1abeec));
      return;
    }
    _0x1228c0 = _0x232c9b[_0x49c2ec];
    _0x1abeec = [_0x49c2ec].concat(_0x1abeec);
  }
  let _0xd1ade2 = _0x33ad07[0];
  if ((typeof _0xd1ade2 != "function" || !(_0xd1ade2 = _0xd1ade2(_0x1228c0, _0x1abeec), _0xd1ade2 === _0x1228c0)) && (_0x49c2ec !== undefined || _0xd1ade2 != null)) {
    _0xd1ade2 = M(_0xd1ade2);
    if (_0x49c2ec === undefined || P(_0x1228c0) && P(_0xd1ade2) && !Array.isArray(_0xd1ade2)) {
      Be(_0x1228c0, _0xd1ade2);
    } else {
      x(_0x232c9b, _0x49c2ec, _0xd1ade2);
    }
  }
}
function rt(...[_0xa728d2, _0x4d19b5]) {
  const _0x29cef7 = M(_0xa728d2 || {});
  const _0xbcf212 = Array.isArray(_0x29cef7);
  const _0x2429f1 = Ie(_0x29cef7);
  function _0x340983(..._0x3bbdc6) {
    oe(() => {
      if (_0xbcf212 && _0x3bbdc6.length === 1) {
        ot(_0x29cef7, _0x3bbdc6[0]);
      } else {
        k(_0x29cef7, _0x3bbdc6);
      }
    });
  }
  return [_0x2429f1, _0x340983];
}
const fe = Symbol("store-root");
function F(_0x332538, _0x46a496, _0x224d2d, _0x122e6a, _0x562119) {
  const _0x2ffa11 = _0x46a496[_0x224d2d];
  if (_0x332538 === _0x2ffa11) {
    return;
  }
  if (_0x224d2d !== fe && (!P(_0x332538) || !P(_0x2ffa11) || _0x562119 && _0x332538[_0x562119] !== _0x2ffa11[_0x562119])) {
    x(_0x46a496, _0x224d2d, _0x332538);
    return;
  }
  if (Array.isArray(_0x332538)) {
    if (_0x332538.length && _0x2ffa11.length && (!_0x122e6a || _0x562119 && _0x332538[0] && _0x332538[0][_0x562119] != null)) {
      let _0x2ee16a;
      let _0x22cd21;
      let _0x5b5baa;
      let _0x17a639;
      let _0x1b9cbb;
      let _0x2ebf69;
      let _0x1e667b;
      let _0x25265a;
      _0x5b5baa = 0;
      _0x17a639 = Math.min(_0x2ffa11.length, _0x332538.length);
      for (; _0x5b5baa < _0x17a639 && (_0x2ffa11[_0x5b5baa] === _0x332538[_0x5b5baa] || _0x562119 && _0x2ffa11[_0x5b5baa] && _0x332538[_0x5b5baa] && _0x2ffa11[_0x5b5baa][_0x562119] === _0x332538[_0x5b5baa][_0x562119]); _0x5b5baa++) {
        F(_0x332538[_0x5b5baa], _0x2ffa11, _0x5b5baa, _0x122e6a, _0x562119);
      }
      const _0x2c6da7 = new Array(_0x332538.length);
      const _0x4aa4b1 = new Map();
      _0x17a639 = _0x2ffa11.length - 1;
      _0x1b9cbb = _0x332538.length - 1;
      for (; _0x17a639 >= _0x5b5baa && _0x1b9cbb >= _0x5b5baa && (_0x2ffa11[_0x17a639] === _0x332538[_0x1b9cbb] || _0x562119 && _0x2ffa11[_0x5b5baa] && _0x332538[_0x5b5baa] && _0x2ffa11[_0x17a639][_0x562119] === _0x332538[_0x1b9cbb][_0x562119]); _0x17a639--, _0x1b9cbb--) {
        _0x2c6da7[_0x1b9cbb] = _0x2ffa11[_0x17a639];
      }
      if (_0x5b5baa > _0x1b9cbb || _0x5b5baa > _0x17a639) {
        for (_0x22cd21 = _0x5b5baa; _0x22cd21 <= _0x1b9cbb; _0x22cd21++) {
          x(_0x2ffa11, _0x22cd21, _0x332538[_0x22cd21]);
        }
        for (; _0x22cd21 < _0x332538.length; _0x22cd21++) {
          x(_0x2ffa11, _0x22cd21, _0x2c6da7[_0x22cd21]);
          F(_0x332538[_0x22cd21], _0x2ffa11, _0x22cd21, _0x122e6a, _0x562119);
        }
        if (_0x2ffa11.length > _0x332538.length) {
          x(_0x2ffa11, "length", _0x332538.length);
        }
        return;
      }
      _0x1e667b = new Array(_0x1b9cbb + 1);
      _0x22cd21 = _0x1b9cbb;
      for (; _0x22cd21 >= _0x5b5baa; _0x22cd21--) {
        _0x2ebf69 = _0x332538[_0x22cd21];
        _0x25265a = _0x562119 && _0x2ebf69 ? _0x2ebf69[_0x562119] : _0x2ebf69;
        _0x2ee16a = _0x4aa4b1.get(_0x25265a);
        _0x1e667b[_0x22cd21] = _0x2ee16a === undefined ? -1 : _0x2ee16a;
        _0x4aa4b1.set(_0x25265a, _0x22cd21);
      }
      for (_0x2ee16a = _0x5b5baa; _0x2ee16a <= _0x17a639; _0x2ee16a++) {
        _0x2ebf69 = _0x2ffa11[_0x2ee16a];
        _0x25265a = _0x562119 && _0x2ebf69 ? _0x2ebf69[_0x562119] : _0x2ebf69;
        _0x22cd21 = _0x4aa4b1.get(_0x25265a);
        if (_0x22cd21 !== undefined && _0x22cd21 !== -1) {
          _0x2c6da7[_0x22cd21] = _0x2ffa11[_0x2ee16a];
          _0x22cd21 = _0x1e667b[_0x22cd21];
          _0x4aa4b1.set(_0x25265a, _0x22cd21);
        }
      }
      for (_0x22cd21 = _0x5b5baa; _0x22cd21 < _0x332538.length; _0x22cd21++) {
        if (_0x22cd21 in _0x2c6da7) {
          x(_0x2ffa11, _0x22cd21, _0x2c6da7[_0x22cd21]);
          F(_0x332538[_0x22cd21], _0x2ffa11, _0x22cd21, _0x122e6a, _0x562119);
        } else {
          x(_0x2ffa11, _0x22cd21, _0x332538[_0x22cd21]);
        }
      }
    } else {
      for (let _0x3d1e43 = 0, _0x34d305 = _0x332538.length; _0x3d1e43 < _0x34d305; _0x3d1e43++) {
        F(_0x332538[_0x3d1e43], _0x2ffa11, _0x3d1e43, _0x122e6a, _0x562119);
      }
    }
    if (_0x2ffa11.length > _0x332538.length) {
      x(_0x2ffa11, "length", _0x332538.length);
    }
    return;
  }
  const _0x2c1f67 = Object.keys(_0x332538);
  for (let _0xf39584 = 0, _0x4c89e0 = _0x2c1f67.length; _0xf39584 < _0x4c89e0; _0xf39584++) {
    F(_0x332538[_0x2c1f67[_0xf39584]], _0x2ffa11, _0x2c1f67[_0xf39584], _0x122e6a, _0x562119);
  }
  const _0x2f59e7 = Object.keys(_0x2ffa11);
  for (let _0x8bfe26 = 0, _0x5842c7 = _0x2f59e7.length; _0x8bfe26 < _0x5842c7; _0x8bfe26++) {
    if (_0x332538[_0x2f59e7[_0x8bfe26]] === undefined) {
      x(_0x2ffa11, _0x2f59e7[_0x8bfe26], undefined);
    }
  }
}
function lt(_0x21050d, _0x641656 = {}) {
  const {
    merge: _0x3a274b,
    key: _0x97b0d9 = "id"
  } = _0x641656;
  const _0x1e1f55 = M(_0x21050d);
  return _0x40ede5 => {
    if (!P(_0x40ede5) || !P(_0x1e1f55)) {
      return _0x1e1f55;
    }
    const _0x4b29cd = F(_0x1e1f55, {
      [fe]: _0x40ede5
    }, fe, _0x3a274b, _0x97b0d9);
    if (_0x4b29cd === undefined) {
      return _0x40ede5;
    } else {
      return _0x4b29cd;
    }
  };
}
const ct = {
  show: false,
  selectedIndex: 0,
  type: "",
  title: "",
  description: "",
  urls: "",
  pendingItemRefunds: 0
};
const ft = "_App_160lk_1";
const ut = "_container_160lk_11";
const dt = "_border_160lk_23";
const ie = {
  App: ft,
  container: ut,
  border: dt
};
const at = "_header_jjrit_1";
const ht = "_main_content_jjrit_8";
const vt = "_title_jjrit_12";
const _t = "_description_jjrit_21";
const gt = "_actions_jjrit_29";
const $t = "_refund_cta_jjrit_34";
const pt = "_notif_circle_jjrit_54";
const Ct = "_keybind_jjrit_68";
const yt = "_text_jjrit_81";
const bt = "_button_jjrit_84";
const E = {
  header: at,
  main_content: ht,
  title: vt,
  description: _t,
  actions: gt,
  refund_cta: $t,
  notif_circle: pt,
  keybind: Ct,
  text: yt,
  button: bt
};
const wt = R("<span>");
const mt = R("<div><div><svg width=\"4.53vh\" height=\"4.53vh\" viewBox=\"0 0 49 49\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.87 14.0385C21.7073 14.1032 21.5435 14.2835 21.4996 14.4463C21.4507 14.6281 21.4943 14.783 21.7625 15.3794C21.8668 15.6114 21.9521 15.818 21.9521 15.8385C21.9521 15.8591 21.8458 15.9065 21.7159 15.944C21.3191 16.0585 21.0073 16.2511 20.6536 16.6003C20.3889 16.8615 20.2854 17.0007 20.1496 17.2781C19.9185 17.75 19.8584 18.0687 19.8576 18.8285L19.8569 19.4548H24.4993H29.1417L29.141 18.8285C29.1401 18.0687 29.0801 17.75 28.8489 17.2781C28.5482 16.6639 27.9184 16.1275 27.2827 15.944C27.1527 15.9065 27.0464 15.8591 27.0464 15.8385C27.0464 15.818 27.1318 15.6114 27.2361 15.3794C27.5062 14.7786 27.548 14.6287 27.4977 14.4418C27.4139 14.1308 27.0456 13.9321 26.7399 14.033C26.5244 14.1041 26.4183 14.2647 26.0742 15.0407C25.9042 15.4242 25.746 15.7611 25.7228 15.7893C25.6908 15.8282 25.3937 15.8406 24.4952 15.8406C23.3104 15.8406 23.3097 15.8406 23.2519 15.7482C23.2201 15.6974 23.0687 15.3693 22.9155 15.0192C22.7623 14.6691 22.5914 14.3206 22.5356 14.2448C22.3756 14.0272 22.1075 13.9441 21.87 14.0385ZM15.2966 18.3302C15.0503 18.4845 15.0307 18.5534 15.0168 19.313C15.0064 19.8808 15.019 20.0865 15.0834 20.4017C15.3803 21.8545 16.4881 23.016 17.9119 23.3674L18.2546 23.4519V24.0818V24.7117L16.3751 24.7126C14.6298 24.7135 14.4835 24.719 14.3268 24.7901C14.003 24.9371 13.8978 25.3651 14.1116 25.6653C14.2675 25.8842 14.2364 25.8808 16.3032 25.9028L18.2341 25.9233V26.5557V27.1882L17.9112 27.2643C17.2759 27.4142 16.6166 27.7895 16.1246 28.2814C15.6457 28.7601 15.3598 29.2514 15.1459 29.963C15.0526 30.2735 15.0368 30.4134 15.0193 31.0828C14.9969 31.9451 15.0227 32.0893 15.2281 32.2451C15.5004 32.4516 15.8965 32.3988 16.088 32.1305C16.1724 32.0123 16.1822 31.9391 16.2068 31.2419C16.2365 30.4026 16.2748 30.2202 16.521 29.7428C16.6923 29.4108 17.1759 28.8981 17.4897 28.7158C17.7279 28.5774 18.194 28.4022 18.2296 28.4377C18.2433 28.4515 18.255 28.6584 18.2553 28.8975C18.2596 31.4469 20.026 33.8494 22.5002 34.6708C25.3831 35.6279 28.4493 34.4466 29.9598 31.7966C30.4506 30.9356 30.7416 29.8587 30.7432 28.8975C30.7436 28.6584 30.7552 28.4515 30.769 28.4377C30.8045 28.4022 31.2706 28.5774 31.5089 28.7158C31.8227 28.8981 32.3063 29.4108 32.4775 29.7428C32.7238 30.2202 32.762 30.4026 32.7917 31.2419C32.8164 31.9391 32.8262 32.0123 32.9105 32.1305C33.102 32.3988 33.4982 32.4516 33.7705 32.2451C33.9758 32.0893 34.0017 31.9451 33.9792 31.0828C33.9617 30.4134 33.9459 30.2735 33.8526 29.963C33.6388 29.2514 33.3529 28.7601 32.874 28.2814C32.3819 27.7895 31.7226 27.4142 31.0874 27.2643L30.7645 27.1882V26.5557V25.9233L32.6954 25.9028C34.7621 25.8808 34.731 25.8842 34.8869 25.6653C35.1014 25.3643 35.0003 24.955 34.6724 24.7963C34.5038 24.7147 34.4319 24.7117 32.6208 24.7117H30.7439V24.0818V23.4519L31.0867 23.3674C32.5105 23.016 33.6183 21.8545 33.9152 20.4017C33.9796 20.0865 33.9921 19.8808 33.9818 19.313C33.9703 18.6885 33.9601 18.601 33.8868 18.5034C33.636 18.1692 33.1225 18.1867 32.8927 18.5372C32.8314 18.6307 32.8138 18.7781 32.7906 19.3913C32.7741 19.8291 32.7385 20.2165 32.7035 20.3378C32.5053 21.0257 32.0936 21.5586 31.4804 21.9211C31.2809 22.0391 30.8693 22.2065 30.7785 22.2065C30.7595 22.2065 30.7437 22.0355 30.7435 21.8266C30.7429 21.2427 30.5649 20.937 30.1165 20.7498C29.9871 20.6957 29.6254 20.6869 27.5414 20.6869H25.1168L25.1059 24.3186C25.0951 27.914 25.0941 27.9514 25.0103 28.0637C24.8585 28.2669 24.7148 28.3464 24.4993 28.3464C24.2838 28.3464 24.1401 28.2669 23.9883 28.0637C23.9044 27.9514 23.9034 27.914 23.8926 24.3186L23.8817 20.6869H21.4571C19.3731 20.6869 19.0114 20.6957 18.8821 20.7498C18.4336 20.937 18.2557 21.2427 18.255 21.8266C18.2548 22.0355 18.239 22.2065 18.22 22.2065C18.2009 22.2065 18.0854 22.1719 17.9632 22.1296C17.3174 21.9061 16.709 21.3507 16.4416 20.7402C16.2737 20.3569 16.2361 20.1403 16.2079 19.3913C16.1771 18.5753 16.1548 18.4991 15.9004 18.3441C15.7407 18.2467 15.4409 18.2399 15.2966 18.3302Z\" fill=\"#00F8B9\"></path><path d=\"M22.75 1.58771C23.8329 0.962498 25.1671 0.962498 26.25 1.58771L43.4676 11.5283C44.5505 12.1535 45.2176 13.309 45.2176 14.5594V34.4406C45.2176 35.691 44.5505 36.8465 43.4676 37.4717L26.25 47.4123C25.1671 48.0375 23.8329 48.0375 22.75 47.4123L5.53238 37.4717C4.44947 36.8465 3.78238 35.691 3.78238 34.4406V14.5594C3.78238 13.309 4.44947 12.1535 5.53238 11.5283L22.75 1.58771Z\" fill=\"url(#paint0_radial_5027_543)\" fill-opacity=\"0.25\" stroke=\"url(#paint1_radial_5027_543)\"></path><defs><radialGradient id=\"paint0_radial_5027_543\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(24.5 24.5) rotate(48.6215) scale(30.4743)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00664C\"></radialGradient><radialGradient id=\"paint1_radial_5027_543\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(24.5 24.5) rotate(73.393) scale(36.4322)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00F8B9\" stop-opacity=\"0.39\"></svg><div class=\"flex flex-col items-start justify-start\"><div>BUG REPORT</div><div>PLEASE FILL OUT THE FORM BELOW TO REPORT A BUG.</div></div></div><div><div>Refunds</div><div><div>Exit</div><div>ESC");
function xt() {
  const _0x175b01 = async () => {
    w("show", false);
    await _0x5b5528.execute("bugs:close");
    await _0x5b5528.execute("bugs:viewRefunds");
  };
  return (() => {
    const _0x3d9132 = mt();
    const _0x277b91 = _0x3d9132.firstChild;
    const _0x1c7cd9 = _0x277b91.firstChild;
    const _0xd1982c = _0x1c7cd9.nextSibling;
    const _0x322a14 = _0xd1982c.firstChild;
    const _0x465bb0 = _0x322a14.nextSibling;
    const _0x22da1c = _0x277b91.nextSibling;
    const _0x209044 = _0x22da1c.firstChild;
    _0x209044.firstChild;
    const _0x16fb46 = _0x209044.nextSibling;
    const _0x7e131d = _0x16fb46.firstChild;
    const _0x15974d = _0x7e131d.nextSibling;
    _0x209044.$$click = _0x175b01;
    b(_0x209044, A(Pe, {
      get when() {
        return y.pendingItemRefunds && y.pendingItemRefunds > 0;
      },
      get children() {
        const _0x3ce9be = wt();
        b(_0x3ce9be, () => y.pendingItemRefunds);
        S(() => v(_0x3ce9be, E.notif_circle));
        return _0x3ce9be;
      }
    }), null);
    S(_0x42bd97 => {
      const _0x5d3eb9 = E.header;
      const _0xa4ed10 = E.main_content;
      const _0x10736a = E.title;
      const _0x45b9be = E.description;
      const _0xe56cb9 = E.actions;
      const _0x3c1fbe = E.refund_cta;
      const _0xb1be33 = E.keybind;
      const _0x3a0f38 = E.text;
      const _0x596f49 = E.button;
      if (_0x5d3eb9 !== _0x42bd97._v$) {
        v(_0x3d9132, _0x42bd97._v$ = _0x5d3eb9);
      }
      if (_0xa4ed10 !== _0x42bd97._v$2) {
        v(_0x277b91, _0x42bd97._v$2 = _0xa4ed10);
      }
      if (_0x10736a !== _0x42bd97._v$3) {
        v(_0x322a14, _0x42bd97._v$3 = _0x10736a);
      }
      if (_0x45b9be !== _0x42bd97._v$4) {
        v(_0x465bb0, _0x42bd97._v$4 = _0x45b9be);
      }
      if (_0xe56cb9 !== _0x42bd97._v$5) {
        v(_0x22da1c, _0x42bd97._v$5 = _0xe56cb9);
      }
      if (_0x3c1fbe !== _0x42bd97._v$6) {
        v(_0x209044, _0x42bd97._v$6 = _0x3c1fbe);
      }
      if (_0xb1be33 !== _0x42bd97._v$7) {
        v(_0x16fb46, _0x42bd97._v$7 = _0xb1be33);
      }
      if (_0x3a0f38 !== _0x42bd97._v$8) {
        v(_0x7e131d, _0x42bd97._v$8 = _0x3a0f38);
      }
      if (_0x596f49 !== _0x42bd97._v$9) {
        v(_0x15974d, _0x42bd97._v$9 = _0x596f49);
      }
      return _0x42bd97;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined
    });
    return _0x3d9132;
  })();
}
ae(["click"]);
const At = "_info_4r8in_1";
const St = "_description_4r8in_13";
const Et = "_bets_4r8in_28";
const Lt = "_divider_4r8in_33";
const W = {
  info: At,
  description: St,
  bets: Et,
  divider: Lt
};
const Tt = R("<div><div><p>Be descriptive, succinct, and provide enough information that someone can reproduce and verify your issue.</p><p>The report will be uploaded to the forums @ <span class=\"text-[#00f8b9]\">nopixel.net</p><p>We reserve the right to close your ticket with no reply if its total dogshit.</p><p>Select a report type before submitting, please pick the category that is the best fit.</p><p><strong class=\"uppercase text-[#00f8b9]\">BET transfers <u>CANNOT</u> be refunded.</strong></div><div>");
const Ot = () => (() => {
  const _0xcbbfe3 = Tt();
  const _0x2a31cb = _0xcbbfe3.firstChild;
  const _0x24d0b6 = _0x2a31cb.firstChild;
  const _0x42cb76 = _0x24d0b6.nextSibling;
  const _0x463096 = _0x42cb76.nextSibling;
  const _0x49e385 = _0x463096.nextSibling;
  const _0x5059f0 = _0x49e385.nextSibling;
  const _0x4e4571 = _0x2a31cb.nextSibling;
  S(_0x319f6f => {
    const _0x3a738f = W.info;
    const _0x4985e2 = W.description;
    const _0x287ad3 = W.bets;
    const _0x452bfd = W.divider;
    if (_0x3a738f !== _0x319f6f._v$) {
      v(_0xcbbfe3, _0x319f6f._v$ = _0x3a738f);
    }
    if (_0x4985e2 !== _0x319f6f._v$2) {
      v(_0x2a31cb, _0x319f6f._v$2 = _0x4985e2);
    }
    if (_0x287ad3 !== _0x319f6f._v$3) {
      v(_0x5059f0, _0x319f6f._v$3 = _0x287ad3);
    }
    if (_0x452bfd !== _0x319f6f._v$4) {
      v(_0x4e4571, _0x319f6f._v$4 = _0x452bfd);
    }
    return _0x319f6f;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return _0xcbbfe3;
})();
const jt = "_type_1r90u_1";
const Pt = "_title_1r90u_13";
const It = "_description_1r90u_22";
const Nt = "_box_1r90u_30";
const Rt = "_arrow_1r90u_47";
const D = {
  type: jt,
  title: Pt,
  description: It,
  box: Nt,
  arrow: Rt
};
const Bt = R("<div><div class=\"flex flex-col items-start justify-center\"><div>Type of Report</div><div>Select type of report there</div></div><div class=\"ml-auto flex flex-row items-center justify-center\"><div><svg width=\"0.648vh\" height=\"1.11vh\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.34315 5.65686V6.19888e-06L0.686292 5.65686L6.34315 11.3137V5.65686Z\" fill=\"white\"></div><div></div><div><svg width=\"0.648vh\" height=\"1.11vh\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.34315 5.65686V6.19888e-06L0.686292 5.65686L6.34315 11.3137V5.65686Z\" fill=\"white\">");
const H = [{
  id: "scuff",
  name: "General Scuff"
}, {
  id: "job",
  name: "Job or Rep Scuff"
}, {
  id: "lost",
  name: "Lost Item or Reward"
}, {
  id: "exploit",
  name: "Exploit"
}, {
  id: "vehicles",
  name: "Vehicles"
}, {
  id: "clothing",
  name: "Clothing or Character Customization"
}, {
  id: "3d",
  name: "3D Misc (Props, Interiors, etc)"
}];
function Dt() {
  return (() => {
    const _0x3b022e = Bt();
    const _0x201f48 = _0x3b022e.firstChild;
    const _0x49fdc0 = _0x201f48.firstChild;
    const _0x458b27 = _0x49fdc0.nextSibling;
    const _0x1d653f = _0x201f48.nextSibling;
    const _0xc79c16 = _0x1d653f.firstChild;
    const _0xee657a = _0xc79c16.nextSibling;
    const _0x4098e5 = _0xee657a.nextSibling;
    _0xc79c16.$$click = () => {
      let _0xa604f = y.selectedIndex - 1;
      if (_0xa604f < 0) {
        _0xa604f = H.length - 1;
      }
      w("selectedIndex", _0xa604f);
      w("type", H[_0xa604f].id);
    };
    b(_0xee657a, () => H[y.selectedIndex].name);
    _0x4098e5.$$click = () => {
      let _0x31b14d = y.selectedIndex + 1;
      if (_0x31b14d > H.length - 1) {
        _0x31b14d = 0;
      }
      w("selectedIndex", _0x31b14d);
      w("type", H[_0x31b14d].id);
    };
    S(_0x164aa1 => {
      const _0x16c19f = D.type;
      const _0x1dc93b = D.title;
      const _0x1ccc39 = D.description;
      const _0x425303 = D.arrow;
      const _0x4255e8 = D.box;
      const _0x39ddbf = D.arrow;
      if (_0x16c19f !== _0x164aa1._v$) {
        v(_0x3b022e, _0x164aa1._v$ = _0x16c19f);
      }
      if (_0x1dc93b !== _0x164aa1._v$2) {
        v(_0x49fdc0, _0x164aa1._v$2 = _0x1dc93b);
      }
      if (_0x1ccc39 !== _0x164aa1._v$3) {
        v(_0x458b27, _0x164aa1._v$3 = _0x1ccc39);
      }
      if (_0x425303 !== _0x164aa1._v$4) {
        v(_0xc79c16, _0x164aa1._v$4 = _0x425303);
      }
      if (_0x4255e8 !== _0x164aa1._v$5) {
        v(_0xee657a, _0x164aa1._v$5 = _0x4255e8);
      }
      if (_0x39ddbf !== _0x164aa1._v$6) {
        v(_0x4098e5, _0x164aa1._v$6 = _0x39ddbf);
      }
      return _0x164aa1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return _0x3b022e;
  })();
}
ae(["click"]);
const Vt = "_textArea_6xu5n_1";
const Ft = "_header_6xu5n_10";
const Mt = "_title_6xu5n_21";
const Ut = "_description_6xu5n_30";
const Ht = "_smallHeight_6xu5n_56";
const V = {
  textArea: Vt,
  header: Ft,
  title: Mt,
  description: Ut,
  smallHeight: Ht
};
const kt = R("<div><div><div></div><div></div></div><textarea>");
function se(_0x409f99) {
  return (() => {
    const _0x33961f = kt();
    const _0x39f84d = _0x33961f.firstChild;
    const _0x34984f = _0x39f84d.firstChild;
    const _0x1f39f8 = _0x34984f.nextSibling;
    const _0x256a6c = _0x39f84d.nextSibling;
    b(_0x34984f, () => _0x409f99.title);
    b(_0x1f39f8, () => _0x409f99.description);
    _0x256a6c.addEventListener("change", _0x184a3a => _0x409f99.onChange(_0x184a3a));
    S(_0x27201d => {
      const _0x58658a = V.textArea;
      const _0x54df30 = V.header;
      const _0x22a851 = V.title;
      const _0x30584e = V.description;
      const _0x5dfb5c = V.text;
      const _0x469289 = _0x409f99.description;
      const _0x49236b = {
        [V.smallHeight]: _0x409f99.smallHeight
      };
      if (_0x58658a !== _0x27201d._v$) {
        v(_0x33961f, _0x27201d._v$ = _0x58658a);
      }
      if (_0x54df30 !== _0x27201d._v$2) {
        v(_0x39f84d, _0x27201d._v$2 = _0x54df30);
      }
      if (_0x22a851 !== _0x27201d._v$3) {
        v(_0x34984f, _0x27201d._v$3 = _0x22a851);
      }
      if (_0x30584e !== _0x27201d._v$4) {
        v(_0x1f39f8, _0x27201d._v$4 = _0x30584e);
      }
      if (_0x5dfb5c !== _0x27201d._v$5) {
        v(_0x256a6c, _0x27201d._v$5 = _0x5dfb5c);
      }
      if (_0x469289 !== _0x27201d._v$6) {
        ze(_0x256a6c, "placeholder", _0x27201d._v$6 = _0x469289);
      }
      _0x27201d._v$7 = et(_0x256a6c, _0x49236b, _0x27201d._v$7);
      return _0x27201d;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    S(() => _0x256a6c.value = _0x409f99.value);
    return _0x33961f;
  })();
}
const Kt = "_button_suv8d_1";
const Gt = {
  button: Kt
};
const qt = R("<div>Submit");
function Wt() {
  return (() => {
    const _0xb3144d = qt();
    _0xb3144d.$$click = () => {
      w("show", false);
      _0x5b5528.execute("bugs:close", {
        title: y.title,
        description: y.description,
        urls: y.urls,
        type: y.type
      });
    };
    S(() => v(_0xb3144d, Gt.button));
    return _0xb3144d;
  })();
}
ae(["click"]);
var Zt = () => {};
var we = (_0x5ac102, _0x2d672f) => _0x2d672f();
function Xt(_0x8ef3ae, _0x398e69) {
  const _0x371dfb = L(_0x8ef3ae);
  const _0x994d78 = _0x371dfb ? [_0x371dfb] : [];
  const {
    onEnter: _0x1c4dc7 = we,
    onExit: _0x150b03 = we
  } = _0x398e69;
  const [_0x2fc6a6, _0x14399b] = de(_0x398e69.appear ? [] : _0x994d78);
  const [_0x39fb64] = qe();
  let _0x5a166e;
  let _0x1ad122 = false;
  function _0x372a28(_0x17e08c, _0xf9eaf2) {
    if (!_0x17e08c) {
      return _0xf9eaf2 && _0xf9eaf2();
    }
    _0x1ad122 = true;
    _0x150b03(_0x17e08c, () => {
      oe(() => {
        _0x1ad122 = false;
        _0x14399b(_0x29b625 => _0x29b625.filter(_0x1c8e08 => _0x1c8e08 !== _0x17e08c));
        if (_0xf9eaf2) {
          _0xf9eaf2();
        }
      });
    });
  }
  function _0xeeedf9(_0x146152) {
    const _0xf0dd6a = _0x5a166e;
    if (!_0xf0dd6a) {
      return _0x146152 && _0x146152();
    }
    _0x5a166e = undefined;
    _0x14399b(_0x101a3b => [_0xf0dd6a, ..._0x101a3b]);
    _0x1c4dc7(_0xf0dd6a, _0x146152 ?? Zt);
  }
  const _0x304474 = _0x398e69.mode === "out-in" ? _0x4c1783 => _0x1ad122 || _0x372a28(_0x4c1783, _0xeeedf9) : _0x398e69.mode === "in-out" ? _0x4ca3d8 => _0xeeedf9(() => _0x372a28(_0x4ca3d8)) : _0x14fcde => {
    _0x372a28(_0x14fcde);
    _0xeeedf9();
  };
  Ue(_0x39fb95 => {
    const _0x2afb41 = _0x8ef3ae();
    if (L(_0x39fb64)) {
      _0x39fb64();
      return _0x39fb95;
    } else {
      if (_0x2afb41 !== _0x39fb95) {
        _0x5a166e = _0x2afb41;
        oe(() => L(() => _0x304474(_0x39fb95)));
      }
      return _0x2afb41;
    }
  }, _0x398e69.appear ? undefined : _0x371dfb);
  return _0x2fc6a6;
}
var me = _0x570121 => _0x570121 instanceof Element;
function ue(_0x31a0c0, _0x338107) {
  if (_0x338107(_0x31a0c0)) {
    return _0x31a0c0;
  }
  if (typeof _0x31a0c0 == "function" && !_0x31a0c0.length) {
    return ue(_0x31a0c0(), _0x338107);
  }
  if (Array.isArray(_0x31a0c0)) {
    for (const _0x4a79a0 of _0x31a0c0) {
      const _0x30b081 = ue(_0x4a79a0, _0x338107);
      if (_0x30b081) {
        return _0x30b081;
      }
    }
  }
  return null;
}
function Jt(_0x2c27dc, _0x84e914 = me, _0x58cb3d = me) {
  const _0x586446 = G(_0x2c27dc);
  return G(() => ue(_0x586446(), _0x84e914));
}
function Qt(_0x167b13) {
  return G(() => {
    const _0xf925db = _0x167b13.name || "s";
    return {
      enterActive: (_0x167b13.enterActiveClass || _0xf925db + "-enter-active").split(" "),
      enter: (_0x167b13.enterClass || _0xf925db + "-enter").split(" "),
      enterTo: (_0x167b13.enterToClass || _0xf925db + "-enter-to").split(" "),
      exitActive: (_0x167b13.exitActiveClass || _0xf925db + "-exit-active").split(" "),
      exit: (_0x167b13.exitClass || _0xf925db + "-exit").split(" "),
      exitTo: (_0x167b13.exitToClass || _0xf925db + "-exit-to").split(" "),
      move: (_0x167b13.moveClass || _0xf925db + "-move").split(" ")
    };
  });
}
function De(_0x9ae131) {
  requestAnimationFrame(() => requestAnimationFrame(_0x9ae131));
}
function Yt(_0x453f54, _0x3b7f8d, _0x1cba0a, _0x1eef42) {
  const {
    onBeforeEnter: _0x196cbb,
    onEnter: _0x41f8a6,
    onAfterEnter: _0x2a2293
  } = _0x3b7f8d;
  _0x196cbb?.(_0x1cba0a);
  _0x1cba0a.classList.add(..._0x453f54.enter);
  _0x1cba0a.classList.add(..._0x453f54.enterActive);
  queueMicrotask(() => {
    if (!_0x1cba0a.parentNode) {
      return _0x1eef42?.();
    }
    _0x41f8a6?.(_0x1cba0a, () => _0x22934d());
  });
  De(() => {
    _0x1cba0a.classList.remove(..._0x453f54.enter);
    _0x1cba0a.classList.add(..._0x453f54.enterTo);
    if (!_0x41f8a6 || _0x41f8a6.length < 2) {
      _0x1cba0a.addEventListener("transitionend", _0x22934d);
      _0x1cba0a.addEventListener("animationend", _0x22934d);
    }
  });
  function _0x22934d(_0x358dfa) {
    if (!_0x358dfa || _0x358dfa.target === _0x1cba0a) {
      _0x1eef42?.();
      _0x1cba0a.removeEventListener("transitionend", _0x22934d);
      _0x1cba0a.removeEventListener("animationend", _0x22934d);
      _0x1cba0a.classList.remove(..._0x453f54.enterActive);
      _0x1cba0a.classList.remove(..._0x453f54.enterTo);
      _0x2a2293?.(_0x1cba0a);
    }
  }
}
function zt(_0x5d2b3e, _0x1231cc, _0x72832e, _0x4caf78) {
  const {
    onBeforeExit: _0x459fe9,
    onExit: _0x3c09c7,
    onAfterExit: _0x296983
  } = _0x1231cc;
  if (!_0x72832e.parentNode) {
    return _0x4caf78?.();
  }
  _0x459fe9?.(_0x72832e);
  _0x72832e.classList.add(..._0x5d2b3e.exit);
  _0x72832e.classList.add(..._0x5d2b3e.exitActive);
  _0x3c09c7?.(_0x72832e, () => _0x24998c());
  De(() => {
    _0x72832e.classList.remove(..._0x5d2b3e.exit);
    _0x72832e.classList.add(..._0x5d2b3e.exitTo);
    if (!_0x3c09c7 || _0x3c09c7.length < 2) {
      _0x72832e.addEventListener("transitionend", _0x24998c);
      _0x72832e.addEventListener("animationend", _0x24998c);
    }
  });
  function _0x24998c(_0x56ac79) {
    if (!_0x56ac79 || _0x56ac79.target === _0x72832e) {
      _0x4caf78?.();
      _0x72832e.removeEventListener("transitionend", _0x24998c);
      _0x72832e.removeEventListener("animationend", _0x24998c);
      _0x72832e.classList.remove(..._0x5d2b3e.exitActive);
      _0x72832e.classList.remove(..._0x5d2b3e.exitTo);
      _0x296983?.(_0x72832e);
    }
  }
}
var en = {
  inout: "in-out",
  outin: "out-in"
};
var tn = _0x457e2b => {
  const _0x227a48 = Qt(_0x457e2b);
  return Xt(Jt(() => _0x457e2b.children), {
    mode: en[_0x457e2b.mode],
    appear: _0x457e2b.appear,
    onEnter(_0x106238, _0x580231) {
      Yt(_0x227a48(), _0x457e2b, _0x106238, _0x580231);
    },
    onExit(_0x548dec, _0x19d918) {
      zt(_0x227a48(), _0x457e2b, _0x548dec, _0x19d918);
    }
  });
};
const nn = R("<div><div><div>");
const [y, w] = rt(ct);
function sn() {
  const _0x5d888b = _0x40e758 => {
    if (_0x40e758.key === "Escape" && y.show) {
      w("show", false);
      _0x5b5528.execute("bugs:close");
    }
  };
  ke(async () => {
    document.addEventListener("keydown", _0x5d888b);
  });
  Ke(() => {
    document.removeEventListener("keydown", _0x5d888b);
  });
  _0x5b5528.register("bugs:open", async _0x49e164 => {
    w(lt({
      show: false,
      title: "",
      description: "",
      urls: "",
      type: "scuff",
      selectedIndex: 0,
      pendingItemRefunds: 0
    }));
    w("show", true);
    w("pendingItemRefunds", _0x49e164);
  });
  return A(tn, {
    name: "slide-bottom",
    get children() {
      return A(Pe, {
        get when() {
          return y.show;
        },
        get children() {
          const _0x136d40 = nn();
          const _0x29bb47 = _0x136d40.firstChild;
          const _0x5bee14 = _0x29bb47.firstChild;
          b(_0x5bee14, A(xt, {}), null);
          b(_0x5bee14, A(Ot, {}), null);
          b(_0x5bee14, A(Dt, {}), null);
          b(_0x5bee14, A(se, {
            title: "Title",
            description: "Title of your report",
            smallHeight: true,
            get value() {
              return y.title;
            },
            onChange: _0x5ed8a6 => {
              w("title", _0x5ed8a6.target.value);
            }
          }), null);
          b(_0x5bee14, A(se, {
            title: "Description",
            description: "Describe your situation or bug or whatever you feel need to be here",
            get value() {
              return y.description;
            },
            onChange: _0x15aaac => {
              w("description", _0x15aaac.target.value);
            }
          }), null);
          b(_0x5bee14, A(se, {
            title: "VOD / Clip / Screenshot URLs",
            description: "Must be separated by new line, include scrolling of F8 window if possible",
            get value() {
              return y.urls;
            },
            onChange: _0x3eea6c => {
              w("urls", _0x3eea6c.target.value);
            }
          }), null);
          b(_0x5bee14, A(Wt, {}), null);
          S(_0x1d102e => {
            const _0x1ca3c6 = ie.App;
            const _0x525ea9 = ie.container;
            const _0x4a89c2 = ie.border;
            if (_0x1ca3c6 !== _0x1d102e._v$) {
              v(_0x136d40, _0x1d102e._v$ = _0x1ca3c6);
            }
            if (_0x525ea9 !== _0x1d102e._v$2) {
              v(_0x29bb47, _0x1d102e._v$2 = _0x525ea9);
            }
            if (_0x4a89c2 !== _0x1d102e._v$3) {
              v(_0x5bee14, _0x1d102e._v$3 = _0x4a89c2);
            }
            return _0x1d102e;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined
          });
          return _0x136d40;
        }
      });
    }
  });
}
Ye(() => A(sn, {}), document.getElementById("root"));