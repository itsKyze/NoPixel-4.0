import './style.css';
(function () {
  const _0x3a7ecf = document.createElement("link").relList;
  if (_0x3a7ecf && _0x3a7ecf.supports && _0x3a7ecf.supports("modulepreload")) {
    return;
  }
  for (const _0x2c89b0 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x14d015(_0x2c89b0);
  }
  new MutationObserver(_0xf15f7a => {
    for (const _0xeb73ae of _0xf15f7a) {
      if (_0xeb73ae.type === "childList") {
        for (const _0x258169 of _0xeb73ae.addedNodes) {
          if (_0x258169.tagName === "LINK" && _0x258169.rel === "modulepreload") {
            _0x14d015(_0x258169);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x2ddaab(_0x2cef1d) {
    const _0x5097ec = {};
    if (_0x2cef1d.integrity) {
      _0x5097ec.integrity = _0x2cef1d.integrity;
    }
    if (_0x2cef1d.referrerPolicy) {
      _0x5097ec.referrerPolicy = _0x2cef1d.referrerPolicy;
    }
    if (_0x2cef1d.crossOrigin === "use-credentials") {
      _0x5097ec.credentials = "include";
    } else if (_0x2cef1d.crossOrigin === "anonymous") {
      _0x5097ec.credentials = "omit";
    } else {
      _0x5097ec.credentials = "same-origin";
    }
    return _0x5097ec;
  }
  function _0x14d015(_0x1365ad) {
    if (_0x1365ad.ep) {
      return;
    }
    _0x1365ad.ep = true;
    const _0x3cbe79 = _0x2ddaab(_0x1365ad);
    fetch(_0x1365ad.href, _0x3cbe79);
  }
})();
const wt = (_0x3d6d63, _0x215ed0) => _0x3d6d63 === _0x215ed0;
const he = Symbol("solid-proxy");
const Fe = Symbol("solid-track");
const Ae = {
  equals: wt
};
let rt = ut;
const oe = 1;
const Me = 2;
const st = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var U = null;
let He = null;
let B = null;
let Z = null;
let le = null;
let je = 0;
const [xt, pi] = K(false);
function Le(_0x43f612, _0x18c3a3) {
  const _0xe13c3b = B;
  const _0x56ae16 = U;
  const _0x5e34b5 = _0x43f612.length === 0;
  const _0x111a7b = _0x5e34b5 ? st : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x18c3a3 === undefined ? _0x56ae16 : _0x18c3a3
  };
  const _0x395f6d = _0x5e34b5 ? _0x43f612 : () => _0x43f612(() => ne(() => Re(_0x111a7b)));
  U = _0x111a7b;
  B = null;
  try {
    return _e(_0x395f6d, true);
  } finally {
    B = _0xe13c3b;
    U = _0x56ae16;
  }
}
function K(_0x7396a1, _0x3587fe) {
  _0x3587fe = _0x3587fe ? Object.assign({}, Ae, _0x3587fe) : Ae;
  const _0x49182d = {
    value: _0x7396a1,
    observers: null,
    observerSlots: null,
    comparator: _0x3587fe.equals || undefined
  };
  const _0x2112ff = _0x4d9c80 => {
    if (typeof _0x4d9c80 == "function") {
      _0x4d9c80 = _0x4d9c80(_0x49182d.value);
    }
    return at(_0x49182d, _0x4d9c80);
  };
  return [ct.bind(_0x49182d), _0x2112ff];
}
function Ct(_0x2dec53, _0x43db8b, _0x3dfb3a) {
  const _0x868712 = Ne(_0x2dec53, _0x43db8b, true, oe);
  ge(_0x868712);
}
function Y(_0x1d1f44, _0x352356, _0x5bc168) {
  const _0xf578a2 = Ne(_0x1d1f44, _0x352356, false, oe);
  ge(_0xf578a2);
}
function Ke(_0x2970ab, _0x54599d, _0xc8cdaa) {
  rt = Pt;
  const _0x2bbbd6 = Ne(_0x2970ab, _0x54599d, false, oe);
  if (!_0xc8cdaa || !_0xc8cdaa.render) {
    _0x2bbbd6.user = true;
  }
  if (le) {
    le.push(_0x2bbbd6);
  } else {
    ge(_0x2bbbd6);
  }
}
function Q(_0x2d8c09, _0x46db72, _0x339cb5) {
  _0x339cb5 = _0x339cb5 ? Object.assign({}, Ae, _0x339cb5) : Ae;
  const _0x4da252 = Ne(_0x2d8c09, _0x46db72, true, 0);
  _0x4da252.observers = null;
  _0x4da252.observerSlots = null;
  _0x4da252.comparator = _0x339cb5.equals || undefined;
  ge(_0x4da252);
  return ct.bind(_0x4da252);
}
function Be(_0x42dfc0) {
  return _e(_0x42dfc0, false);
}
function ne(_0x475c17) {
  if (B === null) {
    return _0x475c17();
  }
  const _0x1ba094 = B;
  B = null;
  try {
    return _0x475c17();
  } finally {
    B = _0x1ba094;
  }
}
function lt(_0x144e92) {
  Ke(() => ne(_0x144e92));
}
function Ze(_0x5e0cd6) {
  if (U !== null) {
    if (U.cleanups === null) {
      U.cleanups = [_0x5e0cd6];
    } else {
      U.cleanups.push(_0x5e0cd6);
    }
  }
  return _0x5e0cd6;
}
function ot() {
  return B;
}
function pt(_0x3f64df) {
  const _0x1f9c17 = B;
  const _0x8f459b = U;
  return Promise.resolve().then(() => {
    B = _0x1f9c17;
    U = _0x8f459b;
    let _0x5ba15a;
    _e(_0x3f64df, false);
    B = U = null;
    if (_0x5ba15a) {
      return _0x5ba15a.done;
    } else {
      return undefined;
    }
  });
}
function St() {
  return [xt, pt];
}
function Lt(_0x227760, _0x461c24) {
  const _0xda354b = Symbol("context");
  return {
    id: _0xda354b,
    Provider: kt(_0xda354b),
    defaultValue: _0x227760
  };
}
function At(_0x46f945) {
  let _0x5b1fe3;
  if ((_0x5b1fe3 = vt(U, _0x46f945.id)) !== undefined) {
    return _0x5b1fe3;
  } else {
    return _0x46f945.defaultValue;
  }
}
function Mt(_0x369b2a) {
  const _0x2a4899 = Q(_0x369b2a);
  const _0x30315d = Q(() => Ve(_0x2a4899()));
  _0x30315d.toArray = () => {
    const _0x4fb901 = _0x30315d();
    if (Array.isArray(_0x4fb901)) {
      return _0x4fb901;
    } else if (_0x4fb901 != null) {
      return [_0x4fb901];
    } else {
      return [];
    }
  };
  return _0x30315d;
}
function ct() {
  if (this.sources && this.state) {
    if (this.state === oe) {
      ge(this);
    } else {
      const _0x6b775e = Z;
      Z = null;
      _e(() => De(this), false);
      Z = _0x6b775e;
    }
  }
  if (B) {
    const _0x2939b1 = this.observers ? this.observers.length : 0;
    if (B.sources) {
      B.sources.push(this);
      B.sourceSlots.push(_0x2939b1);
    } else {
      B.sources = [this];
      B.sourceSlots = [_0x2939b1];
    }
    if (this.observers) {
      this.observers.push(B);
      this.observerSlots.push(B.sources.length - 1);
    } else {
      this.observers = [B];
      this.observerSlots = [B.sources.length - 1];
    }
  }
  return this.value;
}
function at(_0x4cea44, _0x37df3d, _0x23231e) {
  let _0x49740d = _0x4cea44.value;
  if (!_0x4cea44.comparator || !_0x4cea44.comparator(_0x49740d, _0x37df3d)) {
    _0x4cea44.value = _0x37df3d;
    if (_0x4cea44.observers && _0x4cea44.observers.length) {
      _e(() => {
        for (let _0x3088a7 = 0; _0x3088a7 < _0x4cea44.observers.length; _0x3088a7 += 1) {
          const _0x288dc1 = _0x4cea44.observers[_0x3088a7];
          const _0x951d91 = He && He.running;
          if (_0x951d91) {
            He.disposed.has(_0x288dc1);
          }
          if (_0x951d91 ? !_0x288dc1.tState : !_0x288dc1.state) {
            if (_0x288dc1.pure) {
              Z.push(_0x288dc1);
            } else {
              le.push(_0x288dc1);
            }
            if (_0x288dc1.observers) {
              ft(_0x288dc1);
            }
          }
          if (!_0x951d91) {
            _0x288dc1.state = oe;
          }
        }
        if (Z.length > 1000000) {
          Z = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x37df3d;
}
function ge(_0x3e35b4) {
  if (!_0x3e35b4.fn) {
    return;
  }
  Re(_0x3e35b4);
  const _0x107de7 = U;
  const _0x55eae2 = B;
  const _0x4f7faa = je;
  B = U = _0x3e35b4;
  Tt(_0x3e35b4, _0x3e35b4.value, _0x4f7faa);
  B = _0x55eae2;
  U = _0x107de7;
}
function Tt(_0xbe38f9, _0x204cd4, _0x6e8b69) {
  let _0x1b4168;
  try {
    _0x1b4168 = _0xbe38f9.fn(_0x204cd4);
  } catch (_0x39a133) {
    if (_0xbe38f9.pure) {
      _0xbe38f9.state = oe;
      if (_0xbe38f9.owned) {
        _0xbe38f9.owned.forEach(Re);
      }
      _0xbe38f9.owned = null;
    }
    _0xbe38f9.updatedAt = _0x6e8b69 + 1;
    return dt(_0x39a133);
  }
  if (!_0xbe38f9.updatedAt || _0xbe38f9.updatedAt <= _0x6e8b69) {
    if (_0xbe38f9.updatedAt != null && "observers" in _0xbe38f9) {
      at(_0xbe38f9, _0x1b4168);
    } else {
      _0xbe38f9.value = _0x1b4168;
    }
    _0xbe38f9.updatedAt = _0x6e8b69;
  }
}
function Ne(_0x50ae15, _0x218224, _0x34baec, _0x3d7588 = oe, _0x5780f4) {
  const _0x133032 = {
    fn: _0x50ae15,
    state: _0x3d7588,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x218224,
    owner: U,
    context: null,
    pure: _0x34baec
  };
  if (U !== null) {
    if (U !== st) {
      if (U.owned) {
        U.owned.push(_0x133032);
      } else {
        U.owned = [_0x133032];
      }
    }
  }
  return _0x133032;
}
function Te(_0x701c22) {
  if (_0x701c22.state === 0) {
    return;
  }
  if (_0x701c22.state === Me) {
    return De(_0x701c22);
  }
  if (_0x701c22.suspense && ne(_0x701c22.suspense.inFallback)) {
    return _0x701c22.suspense.effects.push(_0x701c22);
  }
  const _0x252029 = [_0x701c22];
  while ((_0x701c22 = _0x701c22.owner) && (!_0x701c22.updatedAt || _0x701c22.updatedAt < je)) {
    if (_0x701c22.state) {
      _0x252029.push(_0x701c22);
    }
  }
  for (let _0x1017c7 = _0x252029.length - 1; _0x1017c7 >= 0; _0x1017c7--) {
    _0x701c22 = _0x252029[_0x1017c7];
    if (_0x701c22.state === oe) {
      ge(_0x701c22);
    } else if (_0x701c22.state === Me) {
      const _0x17b1d9 = Z;
      Z = null;
      _e(() => De(_0x701c22, _0x252029[0]), false);
      Z = _0x17b1d9;
    }
  }
}
function _e(_0x46cad1, _0xe9a115) {
  if (Z) {
    return _0x46cad1();
  }
  let _0x551439 = false;
  if (!_0xe9a115) {
    Z = [];
  }
  if (le) {
    _0x551439 = true;
  } else {
    le = [];
  }
  je++;
  try {
    const _0x53f00a = _0x46cad1();
    Dt(_0x551439);
    return _0x53f00a;
  } catch (_0x277536) {
    if (!_0x551439) {
      le = null;
    }
    Z = null;
    dt(_0x277536);
  }
}
function Dt(_0x2c0d08) {
  if (Z) {
    ut(Z);
    Z = null;
  }
  if (_0x2c0d08) {
    return;
  }
  const _0x306a68 = le;
  le = null;
  if (_0x306a68.length) {
    _e(() => rt(_0x306a68), false);
  }
}
function ut(_0x3cf219) {
  for (let _0x371f5b = 0; _0x371f5b < _0x3cf219.length; _0x371f5b++) {
    Te(_0x3cf219[_0x371f5b]);
  }
}
function Pt(_0x5b142c) {
  let _0x3ff575;
  let _0x63a62 = 0;
  for (_0x3ff575 = 0; _0x3ff575 < _0x5b142c.length; _0x3ff575++) {
    const _0x966628 = _0x5b142c[_0x3ff575];
    if (_0x966628.user) {
      _0x5b142c[_0x63a62++] = _0x966628;
    } else {
      Te(_0x966628);
    }
  }
  for (_0x3ff575 = 0; _0x3ff575 < _0x63a62; _0x3ff575++) {
    Te(_0x5b142c[_0x3ff575]);
  }
}
function De(_0x5e4dcd, _0x109789) {
  _0x5e4dcd.state = 0;
  for (let _0x5c44ce = 0; _0x5c44ce < _0x5e4dcd.sources.length; _0x5c44ce += 1) {
    const _0x461b06 = _0x5e4dcd.sources[_0x5c44ce];
    if (_0x461b06.sources) {
      const _0x429070 = _0x461b06.state;
      if (_0x429070 === oe) {
        if (_0x461b06 !== _0x109789 && (!_0x461b06.updatedAt || _0x461b06.updatedAt < je)) {
          Te(_0x461b06);
        }
      } else if (_0x429070 === Me) {
        De(_0x461b06, _0x109789);
      }
    }
  }
}
function ft(_0xcd7874) {
  for (let _0x2ed158 = 0; _0x2ed158 < _0xcd7874.observers.length; _0x2ed158 += 1) {
    const _0x4ad6c0 = _0xcd7874.observers[_0x2ed158];
    if (!_0x4ad6c0.state) {
      _0x4ad6c0.state = Me;
      if (_0x4ad6c0.pure) {
        Z.push(_0x4ad6c0);
      } else {
        le.push(_0x4ad6c0);
      }
      if (_0x4ad6c0.observers) {
        ft(_0x4ad6c0);
      }
    }
  }
}
function Re(_0x4fdfa1) {
  let _0x440b97;
  if (_0x4fdfa1.sources) {
    while (_0x4fdfa1.sources.length) {
      const _0x5e1f0c = _0x4fdfa1.sources.pop();
      const _0x523255 = _0x4fdfa1.sourceSlots.pop();
      const _0x333592 = _0x5e1f0c.observers;
      if (_0x333592 && _0x333592.length) {
        const _0x2afcdf = _0x333592.pop();
        const _0x442781 = _0x5e1f0c.observerSlots.pop();
        if (_0x523255 < _0x333592.length) {
          _0x2afcdf.sourceSlots[_0x442781] = _0x523255;
          _0x333592[_0x523255] = _0x2afcdf;
          _0x5e1f0c.observerSlots[_0x523255] = _0x442781;
        }
      }
    }
  }
  if (_0x4fdfa1.owned) {
    for (_0x440b97 = _0x4fdfa1.owned.length - 1; _0x440b97 >= 0; _0x440b97--) {
      Re(_0x4fdfa1.owned[_0x440b97]);
    }
    _0x4fdfa1.owned = null;
  }
  if (_0x4fdfa1.cleanups) {
    for (_0x440b97 = _0x4fdfa1.cleanups.length - 1; _0x440b97 >= 0; _0x440b97--) {
      _0x4fdfa1.cleanups[_0x440b97]();
    }
    _0x4fdfa1.cleanups = null;
  }
  _0x4fdfa1.state = 0;
  _0x4fdfa1.context = null;
}
function dt(_0x2c75ba) {
  throw _0x2c75ba;
}
function vt(_0x130672, _0xc54889) {
  if (_0x130672) {
    if (_0x130672.context && _0x130672.context[_0xc54889] !== undefined) {
      return _0x130672.context[_0xc54889];
    } else {
      return vt(_0x130672.owner, _0xc54889);
    }
  } else {
    return undefined;
  }
}
function Ve(_0x4bb80e) {
  if (typeof _0x4bb80e == "function" && !_0x4bb80e.length) {
    return Ve(_0x4bb80e());
  }
  if (Array.isArray(_0x4bb80e)) {
    const _0x79b6e9 = [];
    for (let _0x4b248b = 0; _0x4b248b < _0x4bb80e.length; _0x4b248b++) {
      const _0x441436 = Ve(_0x4bb80e[_0x4b248b]);
      if (Array.isArray(_0x441436)) {
        _0x79b6e9.push.apply(_0x79b6e9, _0x441436);
      } else {
        _0x79b6e9.push(_0x441436);
      }
    }
    return _0x79b6e9;
  }
  return _0x4bb80e;
}
function kt(_0x56b08b, _0x54e91f) {
  return function (_0x13115a) {
    let _0x50dc2e;
    Y(() => _0x50dc2e = ne(() => {
      U.context = {
        [_0x56b08b]: _0x13115a.value
      };
      return Mt(() => _0x13115a.children);
    }), undefined);
    return _0x50dc2e;
  };
}
const Ot = Symbol("fallback");
function Je(_0x443d29) {
  for (let _0x1768c4 = 0; _0x1768c4 < _0x443d29.length; _0x1768c4++) {
    _0x443d29[_0x1768c4]();
  }
}
function Et(_0x53904d, _0x59241b, _0x32cb82 = {}) {
  let _0x1a5889 = [];
  let _0x535cb5 = [];
  let _0x20cbb8 = [];
  let _0x5427cf = 0;
  let _0x2f3203 = _0x59241b.length > 1 ? [] : null;
  Ze(() => Je(_0x20cbb8));
  return () => {
    let _0x2296c2 = _0x53904d() || [];
    let _0x54ec2a;
    let _0x4e7129;
    _0x2296c2[Fe];
    return ne(() => {
      let _0x4efe17 = _0x2296c2.length;
      let _0x12ea6b;
      let _0x34266f;
      let _0x1824b1;
      let _0x37bb2d;
      let _0x4fdbff;
      let _0x378ba0;
      let _0x26f585;
      let _0x4b5bdf;
      let _0x30c8fb;
      if (_0x4efe17 === 0) {
        if (_0x5427cf !== 0) {
          Je(_0x20cbb8);
          _0x20cbb8 = [];
          _0x1a5889 = [];
          _0x535cb5 = [];
          _0x5427cf = 0;
          _0x2f3203 &&= [];
        }
        if (_0x32cb82.fallback) {
          _0x1a5889 = [Ot];
          _0x535cb5[0] = Le(_0x43c532 => {
            _0x20cbb8[0] = _0x43c532;
            return _0x32cb82.fallback();
          });
          _0x5427cf = 1;
        }
      } else if (_0x5427cf === 0) {
        _0x535cb5 = new Array(_0x4efe17);
        _0x4e7129 = 0;
        for (; _0x4e7129 < _0x4efe17; _0x4e7129++) {
          _0x1a5889[_0x4e7129] = _0x2296c2[_0x4e7129];
          _0x535cb5[_0x4e7129] = Le(_0x125d43);
        }
        _0x5427cf = _0x4efe17;
      } else {
        _0x1824b1 = new Array(_0x4efe17);
        _0x37bb2d = new Array(_0x4efe17);
        if (_0x2f3203) {
          _0x4fdbff = new Array(_0x4efe17);
        }
        _0x378ba0 = 0;
        _0x26f585 = Math.min(_0x5427cf, _0x4efe17);
        for (; _0x378ba0 < _0x26f585 && _0x1a5889[_0x378ba0] === _0x2296c2[_0x378ba0]; _0x378ba0++);
        _0x26f585 = _0x5427cf - 1;
        _0x4b5bdf = _0x4efe17 - 1;
        for (; _0x26f585 >= _0x378ba0 && _0x4b5bdf >= _0x378ba0 && _0x1a5889[_0x26f585] === _0x2296c2[_0x4b5bdf]; _0x26f585--, _0x4b5bdf--) {
          _0x1824b1[_0x4b5bdf] = _0x535cb5[_0x26f585];
          _0x37bb2d[_0x4b5bdf] = _0x20cbb8[_0x26f585];
          if (_0x2f3203) {
            _0x4fdbff[_0x4b5bdf] = _0x2f3203[_0x26f585];
          }
        }
        _0x12ea6b = new Map();
        _0x34266f = new Array(_0x4b5bdf + 1);
        _0x4e7129 = _0x4b5bdf;
        for (; _0x4e7129 >= _0x378ba0; _0x4e7129--) {
          _0x30c8fb = _0x2296c2[_0x4e7129];
          _0x54ec2a = _0x12ea6b.get(_0x30c8fb);
          _0x34266f[_0x4e7129] = _0x54ec2a === undefined ? -1 : _0x54ec2a;
          _0x12ea6b.set(_0x30c8fb, _0x4e7129);
        }
        for (_0x54ec2a = _0x378ba0; _0x54ec2a <= _0x26f585; _0x54ec2a++) {
          _0x30c8fb = _0x1a5889[_0x54ec2a];
          _0x4e7129 = _0x12ea6b.get(_0x30c8fb);
          if (_0x4e7129 !== undefined && _0x4e7129 !== -1) {
            _0x1824b1[_0x4e7129] = _0x535cb5[_0x54ec2a];
            _0x37bb2d[_0x4e7129] = _0x20cbb8[_0x54ec2a];
            if (_0x2f3203) {
              _0x4fdbff[_0x4e7129] = _0x2f3203[_0x54ec2a];
            }
            _0x4e7129 = _0x34266f[_0x4e7129];
            _0x12ea6b.set(_0x30c8fb, _0x4e7129);
          } else {
            _0x20cbb8[_0x54ec2a]();
          }
        }
        for (_0x4e7129 = _0x378ba0; _0x4e7129 < _0x4efe17; _0x4e7129++) {
          if (_0x4e7129 in _0x1824b1) {
            _0x535cb5[_0x4e7129] = _0x1824b1[_0x4e7129];
            _0x20cbb8[_0x4e7129] = _0x37bb2d[_0x4e7129];
            if (_0x2f3203) {
              _0x2f3203[_0x4e7129] = _0x4fdbff[_0x4e7129];
              _0x2f3203[_0x4e7129](_0x4e7129);
            }
          } else {
            _0x535cb5[_0x4e7129] = Le(_0x125d43);
          }
        }
        _0x535cb5 = _0x535cb5.slice(0, _0x5427cf = _0x4efe17);
        _0x1a5889 = _0x2296c2.slice(0);
      }
      return _0x535cb5;
    });
    function _0x125d43(_0x59acee) {
      _0x20cbb8[_0x4e7129] = _0x59acee;
      if (_0x2f3203) {
        const [_0x584da6, _0x454e2e] = K(_0x4e7129);
        _0x2f3203[_0x4e7129] = _0x454e2e;
        return _0x59241b(_0x2296c2[_0x4e7129], _0x584da6);
      }
      return _0x59241b(_0x2296c2[_0x4e7129]);
    }
  };
}
function R(_0x2b834f, _0x2498c3) {
  return ne(() => _0x2b834f(_0x2498c3 || {}));
}
const jt = _0x36be5b => "Stale read from <" + _0x36be5b + ">.";
function Pe(_0x519bde) {
  const _0x483a3c = "fallback" in _0x519bde && {
    fallback: () => _0x519bde.fallback
  };
  return Q(Et(() => _0x519bde.each, _0x519bde.children, _0x483a3c || undefined));
}
function ve(_0x2b2494) {
  const _0x4f00b9 = _0x2b2494.keyed;
  const _0x134a32 = Q(() => _0x2b2494.when, undefined, {
    equals: (_0x2a901a, _0x44a4ac) => _0x4f00b9 ? _0x2a901a === _0x44a4ac : !_0x2a901a == !_0x44a4ac
  });
  return Q(() => {
    const _0xb4219e = _0x134a32();
    if (_0xb4219e) {
      const _0xfdb1f = _0x2b2494.children;
      if (typeof _0xfdb1f == "function" && _0xfdb1f.length > 0) {
        return ne(() => _0xfdb1f(_0x4f00b9 ? _0xb4219e : () => {
          if (!ne(_0x134a32)) {
            throw jt("Show");
          }
          return _0x2b2494.when;
        }));
      } else {
        return _0xfdb1f;
      }
    }
    return _0x2b2494.fallback;
  }, undefined, undefined);
}
function Nt(_0x6f220a, _0x50a398, _0x20ece4) {
  let _0x26ba02 = _0x20ece4.length;
  let _0x1c8713 = _0x50a398.length;
  let _0xf59716 = _0x26ba02;
  let _0x5deb6e = 0;
  let _0x26cf16 = 0;
  let _0x370bdd = _0x50a398[_0x1c8713 - 1].nextSibling;
  let _0x5ae9fe = null;
  while (_0x5deb6e < _0x1c8713 || _0x26cf16 < _0xf59716) {
    if (_0x50a398[_0x5deb6e] === _0x20ece4[_0x26cf16]) {
      _0x5deb6e++;
      _0x26cf16++;
      continue;
    }
    while (_0x50a398[_0x1c8713 - 1] === _0x20ece4[_0xf59716 - 1]) {
      _0x1c8713--;
      _0xf59716--;
    }
    if (_0x1c8713 === _0x5deb6e) {
      const _0x387295 = _0xf59716 < _0x26ba02 ? _0x26cf16 ? _0x20ece4[_0x26cf16 - 1].nextSibling : _0x20ece4[_0xf59716 - _0x26cf16] : _0x370bdd;
      while (_0x26cf16 < _0xf59716) {
        _0x6f220a.insertBefore(_0x20ece4[_0x26cf16++], _0x387295);
      }
    } else if (_0xf59716 === _0x26cf16) {
      while (_0x5deb6e < _0x1c8713) {
        if (!_0x5ae9fe || !_0x5ae9fe.has(_0x50a398[_0x5deb6e])) {
          _0x50a398[_0x5deb6e].remove();
        }
        _0x5deb6e++;
      }
    } else if (_0x50a398[_0x5deb6e] === _0x20ece4[_0xf59716 - 1] && _0x20ece4[_0x26cf16] === _0x50a398[_0x1c8713 - 1]) {
      const _0x5d605e = _0x50a398[--_0x1c8713].nextSibling;
      _0x6f220a.insertBefore(_0x20ece4[_0x26cf16++], _0x50a398[_0x5deb6e++].nextSibling);
      _0x6f220a.insertBefore(_0x20ece4[--_0xf59716], _0x5d605e);
      _0x50a398[_0x1c8713] = _0x20ece4[_0xf59716];
    } else {
      if (!_0x5ae9fe) {
        _0x5ae9fe = new Map();
        let _0x90ae65 = _0x26cf16;
        while (_0x90ae65 < _0xf59716) {
          _0x5ae9fe.set(_0x20ece4[_0x90ae65], _0x90ae65++);
        }
      }
      const _0x95b78a = _0x5ae9fe.get(_0x50a398[_0x5deb6e]);
      if (_0x95b78a != null) {
        if (_0x26cf16 < _0x95b78a && _0x95b78a < _0xf59716) {
          let _0x4f221d = _0x5deb6e;
          let _0x5e201f = 1;
          let _0x573694;
          while (++_0x4f221d < _0x1c8713 && _0x4f221d < _0xf59716 && (_0x573694 = _0x5ae9fe.get(_0x50a398[_0x4f221d])) != null && _0x573694 === _0x95b78a + _0x5e201f) {
            _0x5e201f++;
          }
          if (_0x5e201f > _0x95b78a - _0x26cf16) {
            const _0x3a85a2 = _0x50a398[_0x5deb6e];
            while (_0x26cf16 < _0x95b78a) {
              _0x6f220a.insertBefore(_0x20ece4[_0x26cf16++], _0x3a85a2);
            }
          } else {
            _0x6f220a.replaceChild(_0x20ece4[_0x26cf16++], _0x50a398[_0x5deb6e++]);
          }
        } else {
          _0x5deb6e++;
        }
      } else {
        _0x50a398[_0x5deb6e++].remove();
      }
    }
  }
}
function Rt(_0x106a5b, _0xc140dc, _0x3981b9, _0x584f4d = {}) {
  let _0x34e921;
  Le(_0x27807e => {
    _0x34e921 = _0x27807e;
    if (_0xc140dc === document) {
      _0x106a5b();
    } else {
      P(_0xc140dc, _0x106a5b(), _0xc140dc.firstChild ? null : undefined, _0x3981b9);
    }
  }, _0x584f4d.owner);
  return () => {
    _0x34e921();
    _0xc140dc.textContent = "";
  };
}
function W(_0x555635, _0x45d280, _0x5021b1) {
  let _0x354cdb;
  const _0x2c722c = () => {
    const _0x42f0c7 = document.createElement("template");
    _0x42f0c7.innerHTML = _0x555635;
    if (_0x5021b1) {
      return _0x42f0c7.content.firstChild.firstChild;
    } else {
      return _0x42f0c7.content.firstChild;
    }
  };
  const _0x4c4a49 = _0x45d280 ? () => ne(() => document.importNode(_0x354cdb ||= _0x2c722c(), true)) : () => (_0x354cdb ||= _0x2c722c()).cloneNode(true);
  _0x4c4a49.cloneNode = _0x4c4a49;
  return _0x4c4a49;
}
function A(_0x539b7a, _0x559bed, _0x21075b) {
  if (_0x21075b == null) {
    _0x539b7a.removeAttribute(_0x559bed);
  } else {
    _0x539b7a.setAttribute(_0x559bed, _0x21075b);
  }
}
function O(_0x2b3419, _0x21db58) {
  if (_0x21db58 == null) {
    _0x2b3419.removeAttribute("class");
  } else {
    _0x2b3419.className = _0x21db58;
  }
}
function $e(_0x442636, _0x18af81, _0x58e587 = {}) {
  const _0xdad071 = Object.keys(_0x18af81 || {});
  const _0x394ca4 = Object.keys(_0x58e587);
  let _0x1c859f;
  let _0x1e5556;
  _0x1c859f = 0;
  _0x1e5556 = _0x394ca4.length;
  for (; _0x1c859f < _0x1e5556; _0x1c859f++) {
    const _0x2c85a1 = _0x394ca4[_0x1c859f];
    if (!!_0x2c85a1 && _0x2c85a1 !== "undefined" && !_0x18af81[_0x2c85a1]) {
      Xe(_0x442636, _0x2c85a1, false);
      delete _0x58e587[_0x2c85a1];
    }
  }
  _0x1c859f = 0;
  _0x1e5556 = _0xdad071.length;
  for (; _0x1c859f < _0x1e5556; _0x1c859f++) {
    const _0x2b7e5f = _0xdad071[_0x1c859f];
    const _0x22d242 = !!_0x18af81[_0x2b7e5f];
    if (!!_0x2b7e5f && _0x2b7e5f !== "undefined" && _0x58e587[_0x2b7e5f] !== _0x22d242 && !!_0x22d242) {
      Xe(_0x442636, _0x2b7e5f, true);
      _0x58e587[_0x2b7e5f] = _0x22d242;
    }
  }
  return _0x58e587;
}
function P(_0x20613a, _0x2fb72f, _0x674206, _0x1512d4) {
  if (_0x674206 !== undefined && !_0x1512d4) {
    _0x1512d4 = [];
  }
  if (typeof _0x2fb72f != "function") {
    return ke(_0x20613a, _0x2fb72f, _0x1512d4, _0x674206);
  }
  Y(_0x503c5d => ke(_0x20613a, _0x2fb72f(), _0x503c5d, _0x674206), _0x1512d4);
}
function Xe(_0x347177, _0x54f52f, _0x21e911) {
  const _0x114463 = _0x54f52f.trim().split(/\s+/);
  for (let _0x20ab80 = 0, _0xac3b1b = _0x114463.length; _0x20ab80 < _0xac3b1b; _0x20ab80++) {
    _0x347177.classList.toggle(_0x114463[_0x20ab80], _0x21e911);
  }
}
function ke(_0x1842c3, _0x38df05, _0x58eb21, _0x20b53b, _0x583ea8) {
  while (typeof _0x58eb21 == "function") {
    _0x58eb21 = _0x58eb21();
  }
  if (_0x38df05 === _0x58eb21) {
    return _0x58eb21;
  }
  const _0x517e73 = typeof _0x38df05;
  const _0x122933 = _0x20b53b !== undefined;
  _0x1842c3 = _0x122933 && _0x58eb21[0] && _0x58eb21[0].parentNode || _0x1842c3;
  if (_0x517e73 === "string" || _0x517e73 === "number") {
    if (_0x517e73 === "number") {
      _0x38df05 = _0x38df05.toString();
    }
    if (_0x122933) {
      let _0x32b17d = _0x58eb21[0];
      if (_0x32b17d && _0x32b17d.nodeType === 3) {
        _0x32b17d.data = _0x38df05;
      } else {
        _0x32b17d = document.createTextNode(_0x38df05);
      }
      _0x58eb21 = me(_0x1842c3, _0x58eb21, _0x20b53b, _0x32b17d);
    } else if (_0x58eb21 !== "" && typeof _0x58eb21 == "string") {
      _0x58eb21 = _0x1842c3.firstChild.data = _0x38df05;
    } else {
      _0x58eb21 = _0x1842c3.textContent = _0x38df05;
    }
  } else if (_0x38df05 == null || _0x517e73 === "boolean") {
    _0x58eb21 = me(_0x1842c3, _0x58eb21, _0x20b53b);
  } else {
    if (_0x517e73 === "function") {
      Y(() => {
        let _0x123a2e = _0x38df05();
        while (typeof _0x123a2e == "function") {
          _0x123a2e = _0x123a2e();
        }
        _0x58eb21 = ke(_0x1842c3, _0x123a2e, _0x58eb21, _0x20b53b);
      });
      return () => _0x58eb21;
    }
    if (Array.isArray(_0x38df05)) {
      const _0x2e7fbb = [];
      const _0x4233b1 = _0x58eb21 && Array.isArray(_0x58eb21);
      if (We(_0x2e7fbb, _0x38df05, _0x58eb21, _0x583ea8)) {
        Y(() => _0x58eb21 = ke(_0x1842c3, _0x2e7fbb, _0x58eb21, _0x20b53b, true));
        return () => _0x58eb21;
      }
      if (_0x2e7fbb.length === 0) {
        _0x58eb21 = me(_0x1842c3, _0x58eb21, _0x20b53b);
        if (_0x122933) {
          return _0x58eb21;
        }
      } else if (_0x4233b1) {
        if (_0x58eb21.length === 0) {
          Qe(_0x1842c3, _0x2e7fbb, _0x20b53b);
        } else {
          Nt(_0x1842c3, _0x58eb21, _0x2e7fbb);
        }
      } else {
        if (_0x58eb21) {
          me(_0x1842c3);
        }
        Qe(_0x1842c3, _0x2e7fbb);
      }
      _0x58eb21 = _0x2e7fbb;
    } else if (_0x38df05.nodeType) {
      if (Array.isArray(_0x58eb21)) {
        if (_0x122933) {
          return _0x58eb21 = me(_0x1842c3, _0x58eb21, _0x20b53b, _0x38df05);
        }
        me(_0x1842c3, _0x58eb21, null, _0x38df05);
      } else if (_0x58eb21 == null || _0x58eb21 === "" || !_0x1842c3.firstChild) {
        _0x1842c3.appendChild(_0x38df05);
      } else {
        _0x1842c3.replaceChild(_0x38df05, _0x1842c3.firstChild);
      }
      _0x58eb21 = _0x38df05;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x38df05);
    }
  }
  return _0x58eb21;
}
function We(_0x40882b, _0x20861c, _0x5b29a0, _0x227427) {
  let _0x4fc976 = false;
  for (let _0x524235 = 0, _0x30557c = _0x20861c.length; _0x524235 < _0x30557c; _0x524235++) {
    let _0x35ca7c = _0x20861c[_0x524235];
    let _0x14001c = _0x5b29a0 && _0x5b29a0[_0x524235];
    let _0xe774e;
    if (_0x35ca7c != null && _0x35ca7c !== true && _0x35ca7c !== false) {
      if ((_0xe774e = typeof _0x35ca7c) == "object" && _0x35ca7c.nodeType) {
        _0x40882b.push(_0x35ca7c);
      } else if (Array.isArray(_0x35ca7c)) {
        _0x4fc976 = We(_0x40882b, _0x35ca7c, _0x14001c) || _0x4fc976;
      } else if (_0xe774e === "function") {
        if (_0x227427) {
          while (typeof _0x35ca7c == "function") {
            _0x35ca7c = _0x35ca7c();
          }
          _0x4fc976 = We(_0x40882b, Array.isArray(_0x35ca7c) ? _0x35ca7c : [_0x35ca7c], Array.isArray(_0x14001c) ? _0x14001c : [_0x14001c]) || _0x4fc976;
        } else {
          _0x40882b.push(_0x35ca7c);
          _0x4fc976 = true;
        }
      } else {
        const _0x329317 = String(_0x35ca7c);
        if (_0x14001c && _0x14001c.nodeType === 3 && _0x14001c.data === _0x329317) {
          _0x40882b.push(_0x14001c);
        } else {
          _0x40882b.push(document.createTextNode(_0x329317));
        }
      }
    }
  }
  return _0x4fc976;
}
function Qe(_0x10483f, _0x5081a8, _0x197028 = null) {
  for (let _0x4ec804 = 0, _0x4f6087 = _0x5081a8.length; _0x4ec804 < _0x4f6087; _0x4ec804++) {
    _0x10483f.insertBefore(_0x5081a8[_0x4ec804], _0x197028);
  }
}
function me(_0x10af15, _0x474d26, _0x2cdaa8, _0x59fe5d) {
  if (_0x2cdaa8 === undefined) {
    return _0x10af15.textContent = "";
  }
  const _0x52a1c8 = _0x59fe5d || document.createTextNode("");
  if (_0x474d26.length) {
    let _0x23c028 = false;
    for (let _0x49cf3c = _0x474d26.length - 1; _0x49cf3c >= 0; _0x49cf3c--) {
      const _0x4c79ea = _0x474d26[_0x49cf3c];
      if (_0x52a1c8 !== _0x4c79ea) {
        const _0x29baa3 = _0x4c79ea.parentNode === _0x10af15;
        if (!_0x23c028 && !_0x49cf3c) {
          if (_0x29baa3) {
            _0x10af15.replaceChild(_0x52a1c8, _0x4c79ea);
          } else {
            _0x10af15.insertBefore(_0x52a1c8, _0x2cdaa8);
          }
        } else if (_0x29baa3) {
          _0x4c79ea.remove();
        }
      } else {
        _0x23c028 = true;
      }
    }
  } else {
    _0x10af15.insertBefore(_0x52a1c8, _0x2cdaa8);
  }
  return [_0x52a1c8];
}
const Ht = "_App_e9jgk_1";
const zt = {
  App: Ht
};
const It = "_top_1clx2_1";
const Ft = "_tabName_1clx2_9";
const Bt = "_tabPlayers_1clx2_12";
const Vt = "_tabTime_1clx2_15";
const Wt = "_line_1clx2_18";
const Ut = "_textBox_1clx2_24";
const Yt = "_box_1clx2_40";
const qt = "_active_1clx2_46";
const Kt = "_position_1clx2_50";
const Zt = "_name_1clx2_72";
const Gt = "_time_1clx2_93";
const Jt = "_negTime_1clx2_113";
const J = {
  top: It,
  tabName: Ft,
  tabPlayers: Bt,
  tabTime: Vt,
  line: Wt,
  textBox: Ut,
  box: Yt,
  active: qt,
  position: Kt,
  name: Zt,
  time: Gt,
  negTime: Jt
};
const Ue = Symbol("store-raw");
const Ce = Symbol("store-node");
function ht(_0x2d3ad4) {
  let _0x59556e = _0x2d3ad4[he];
  if (!_0x59556e && (Object.defineProperty(_0x2d3ad4, he, {
    value: _0x59556e = new Proxy(_0x2d3ad4, en)
  }), !Array.isArray(_0x2d3ad4))) {
    const _0x32b878 = Object.keys(_0x2d3ad4);
    const _0x4f9f14 = Object.getOwnPropertyDescriptors(_0x2d3ad4);
    for (let _0x964c31 = 0, _0x24c62e = _0x32b878.length; _0x964c31 < _0x24c62e; _0x964c31++) {
      const _0x1a7354 = _0x32b878[_0x964c31];
      if (_0x4f9f14[_0x1a7354].get) {
        Object.defineProperty(_0x2d3ad4, _0x1a7354, {
          enumerable: _0x4f9f14[_0x1a7354].enumerable,
          get: _0x4f9f14[_0x1a7354].get.bind(_0x59556e)
        });
      }
    }
  }
  return _0x59556e;
}
function Oe(_0x3a1f72) {
  let _0x22b195;
  return _0x3a1f72 != null && typeof _0x3a1f72 == "object" && (_0x3a1f72[he] || !(_0x22b195 = Object.getPrototypeOf(_0x3a1f72)) || _0x22b195 === Object.prototype || Array.isArray(_0x3a1f72));
}
function pe(_0x2f7066, _0x148e36 = new Set()) {
  let _0x36bc3e;
  let _0x52e4be;
  let _0x52d806;
  let _0x5bfdc7;
  if (_0x36bc3e = _0x2f7066 != null && _0x2f7066[Ue]) {
    return _0x36bc3e;
  }
  if (!Oe(_0x2f7066) || _0x148e36.has(_0x2f7066)) {
    return _0x2f7066;
  }
  if (Array.isArray(_0x2f7066)) {
    if (Object.isFrozen(_0x2f7066)) {
      _0x2f7066 = _0x2f7066.slice(0);
    } else {
      _0x148e36.add(_0x2f7066);
    }
    for (let _0x3d75bb = 0, _0xe38f2a = _0x2f7066.length; _0x3d75bb < _0xe38f2a; _0x3d75bb++) {
      _0x52d806 = _0x2f7066[_0x3d75bb];
      if ((_0x52e4be = pe(_0x52d806, _0x148e36)) !== _0x52d806) {
        _0x2f7066[_0x3d75bb] = _0x52e4be;
      }
    }
  } else {
    if (Object.isFrozen(_0x2f7066)) {
      _0x2f7066 = Object.assign({}, _0x2f7066);
    } else {
      _0x148e36.add(_0x2f7066);
    }
    const _0x42debd = Object.keys(_0x2f7066);
    const _0x3d800a = Object.getOwnPropertyDescriptors(_0x2f7066);
    for (let _0x61bcca = 0, _0x2e8eef = _0x42debd.length; _0x61bcca < _0x2e8eef; _0x61bcca++) {
      _0x5bfdc7 = _0x42debd[_0x61bcca];
      if (!_0x3d800a[_0x5bfdc7].get) {
        _0x52d806 = _0x2f7066[_0x5bfdc7];
        if ((_0x52e4be = pe(_0x52d806, _0x148e36)) !== _0x52d806) {
          _0x2f7066[_0x5bfdc7] = _0x52e4be;
        }
      }
    }
  }
  return _0x2f7066;
}
function Ge(_0x23a6da) {
  let _0x259450 = _0x23a6da[Ce];
  if (!_0x259450) {
    Object.defineProperty(_0x23a6da, Ce, {
      value: _0x259450 = Object.create(null)
    });
  }
  return _0x259450;
}
function Ye(_0x13f695, _0x167d10, _0x4fcc2e) {
  return _0x13f695[_0x167d10] ||= mt(_0x4fcc2e);
}
function Xt(_0x21cbb0, _0x17e8a7) {
  const _0x46d372 = Reflect.getOwnPropertyDescriptor(_0x21cbb0, _0x17e8a7);
  if (!!_0x46d372 && !_0x46d372.get && !!_0x46d372.configurable && _0x17e8a7 !== he && _0x17e8a7 !== Ce) {
    delete _0x46d372.value;
    delete _0x46d372.writable;
    _0x46d372.get = () => _0x21cbb0[he][_0x17e8a7];
  }
  return _0x46d372;
}
function _t(_0x3f615e) {
  if (ot()) {
    const _0x25d7e1 = Ge(_0x3f615e);
    (_0x25d7e1._ ||= mt())();
  }
}
function Qt(_0x4b0b4e) {
  _t(_0x4b0b4e);
  return Reflect.ownKeys(_0x4b0b4e);
}
function mt(_0x443b56) {
  const [_0x33c52c, _0x16473a] = K(_0x443b56, {
    equals: false,
    internal: true
  });
  _0x33c52c.$ = _0x16473a;
  return _0x33c52c;
}
const en = {
  get(_0x491d5c, _0x490ec8, _0xfa01c1) {
    if (_0x490ec8 === Ue) {
      return _0x491d5c;
    }
    if (_0x490ec8 === he) {
      return _0xfa01c1;
    }
    if (_0x490ec8 === Fe) {
      _t(_0x491d5c);
      return _0xfa01c1;
    }
    const _0x4923a1 = Ge(_0x491d5c);
    const _0x100c96 = _0x4923a1[_0x490ec8];
    let _0x3dc9f7 = _0x100c96 ? _0x100c96() : _0x491d5c[_0x490ec8];
    if (_0x490ec8 === Ce || _0x490ec8 === "__proto__") {
      return _0x3dc9f7;
    }
    if (!_0x100c96) {
      const _0x354e91 = Object.getOwnPropertyDescriptor(_0x491d5c, _0x490ec8);
      if (ot() && (typeof _0x3dc9f7 != "function" || _0x491d5c.hasOwnProperty(_0x490ec8)) && (!_0x354e91 || !_0x354e91.get)) {
        _0x3dc9f7 = Ye(_0x4923a1, _0x490ec8, _0x3dc9f7)();
      }
    }
    if (Oe(_0x3dc9f7)) {
      return ht(_0x3dc9f7);
    } else {
      return _0x3dc9f7;
    }
  },
  has(_0x5de225, _0x124940) {
    if (_0x124940 === Ue || _0x124940 === he || _0x124940 === Fe || _0x124940 === Ce || _0x124940 === "__proto__") {
      return true;
    } else {
      this.get(_0x5de225, _0x124940, _0x5de225);
      return _0x124940 in _0x5de225;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Qt,
  getOwnPropertyDescriptor: Xt
};
function Ee(_0x540345, _0x31989c, _0x529403, _0x4bb601 = false) {
  if (!_0x4bb601 && _0x540345[_0x31989c] === _0x529403) {
    return;
  }
  const _0x4a297d = _0x540345[_0x31989c];
  const _0x2147a4 = _0x540345.length;
  if (_0x529403 === undefined) {
    delete _0x540345[_0x31989c];
  } else {
    _0x540345[_0x31989c] = _0x529403;
  }
  let _0x36cb57 = Ge(_0x540345);
  let _0x21cee7;
  if (_0x21cee7 = Ye(_0x36cb57, _0x31989c, _0x4a297d)) {
    _0x21cee7.$(() => _0x529403);
  }
  if (Array.isArray(_0x540345) && _0x540345.length !== _0x2147a4) {
    for (let _0x4847b1 = _0x540345.length; _0x4847b1 < _0x2147a4; _0x4847b1++) {
      if (_0x21cee7 = _0x36cb57[_0x4847b1]) {
        _0x21cee7.$();
      }
    }
    if (_0x21cee7 = Ye(_0x36cb57, "length", _0x2147a4)) {
      _0x21cee7.$(_0x540345.length);
    }
  }
  if (_0x21cee7 = _0x36cb57._) {
    _0x21cee7.$();
  }
}
function $t(_0x237b03, _0x5bcd53) {
  const _0x114fe9 = Object.keys(_0x5bcd53);
  for (let _0x328e3d = 0; _0x328e3d < _0x114fe9.length; _0x328e3d += 1) {
    const _0x46174f = _0x114fe9[_0x328e3d];
    Ee(_0x237b03, _0x46174f, _0x5bcd53[_0x46174f]);
  }
}
function tn(_0x3d9f64, _0x2bcd61) {
  if (typeof _0x2bcd61 == "function") {
    _0x2bcd61 = _0x2bcd61(_0x3d9f64);
  }
  _0x2bcd61 = pe(_0x2bcd61);
  if (Array.isArray(_0x2bcd61)) {
    if (_0x3d9f64 === _0x2bcd61) {
      return;
    }
    let _0x26b8dd = 0;
    let _0x6d1f29 = _0x2bcd61.length;
    for (; _0x26b8dd < _0x6d1f29; _0x26b8dd++) {
      const _0x658eb3 = _0x2bcd61[_0x26b8dd];
      if (_0x3d9f64[_0x26b8dd] !== _0x658eb3) {
        Ee(_0x3d9f64, _0x26b8dd, _0x658eb3);
      }
    }
    Ee(_0x3d9f64, "length", _0x6d1f29);
  } else {
    $t(_0x3d9f64, _0x2bcd61);
  }
}
function xe(_0x58e28e, _0x32aee5, _0x332224 = []) {
  let _0x4fa255;
  let _0xaea737 = _0x58e28e;
  if (_0x32aee5.length > 1) {
    _0x4fa255 = _0x32aee5.shift();
    const _0x1cc23f = typeof _0x4fa255;
    const _0x525434 = Array.isArray(_0x58e28e);
    if (Array.isArray(_0x4fa255)) {
      for (let _0x274434 = 0; _0x274434 < _0x4fa255.length; _0x274434++) {
        xe(_0x58e28e, [_0x4fa255[_0x274434]].concat(_0x32aee5), _0x332224);
      }
      return;
    } else if (_0x525434 && _0x1cc23f === "function") {
      for (let _0x339a7a = 0; _0x339a7a < _0x58e28e.length; _0x339a7a++) {
        if (_0x4fa255(_0x58e28e[_0x339a7a], _0x339a7a)) {
          xe(_0x58e28e, [_0x339a7a].concat(_0x32aee5), _0x332224);
        }
      }
      return;
    } else if (_0x525434 && _0x1cc23f === "object") {
      const {
        from: _0x336391 = 0,
        to: _0x59f8ad = _0x58e28e.length - 1,
        by: _0xa72294 = 1
      } = _0x4fa255;
      for (let _0x5e2cd4 = _0x336391; _0x5e2cd4 <= _0x59f8ad; _0x5e2cd4 += _0xa72294) {
        xe(_0x58e28e, [_0x5e2cd4].concat(_0x32aee5), _0x332224);
      }
      return;
    } else if (_0x32aee5.length > 1) {
      xe(_0x58e28e[_0x4fa255], _0x32aee5, [_0x4fa255].concat(_0x332224));
      return;
    }
    _0xaea737 = _0x58e28e[_0x4fa255];
    _0x332224 = [_0x4fa255].concat(_0x332224);
  }
  let _0x21ed8b = _0x32aee5[0];
  if ((typeof _0x21ed8b != "function" || !(_0x21ed8b = _0x21ed8b(_0xaea737, _0x332224), _0x21ed8b === _0xaea737)) && (_0x4fa255 !== undefined || _0x21ed8b != null)) {
    _0x21ed8b = pe(_0x21ed8b);
    if (_0x4fa255 === undefined || Oe(_0xaea737) && Oe(_0x21ed8b) && !Array.isArray(_0x21ed8b)) {
      $t(_0xaea737, _0x21ed8b);
    } else {
      Ee(_0x58e28e, _0x4fa255, _0x21ed8b);
    }
  }
}
function et(...[_0x10b0b0, _0x5e91b7]) {
  const _0x5eaee9 = pe(_0x10b0b0 || {});
  const _0x2b2c2f = Array.isArray(_0x5eaee9);
  const _0x5bb1f4 = ht(_0x5eaee9);
  function _0x51db6a(..._0x3d2881) {
    Be(() => {
      if (_0x2b2c2f && _0x3d2881.length === 1) {
        tn(_0x5eaee9, _0x3d2881[0]);
      } else {
        xe(_0x5eaee9, _0x3d2881);
      }
    });
  }
  return [_0x5bb1f4, _0x51db6a];
}
function nn(_0x872d4e, _0x49d7f4) {
  const _0x4498e6 = Lt(_0x49d7f4);
  return [_0x10d147 => R(_0x4498e6.Provider, {
    value: _0x872d4e(_0x10d147),
    get children() {
      return _0x10d147.children;
    }
  }), () => At(_0x4498e6)];
}
const [rn, sn] = nn(() => {
  const [_0x3c0793, _0x232f3b] = et({});
  const [_0x30bcc9, _0x18ac4a] = et({
    drift: {
      driftPoints: 0,
      driftMultiplier: 0
    }
  });
  return {
    vehicleData: _0x3c0793,
    setVehicleData: _0x232f3b,
    raceData: _0x30bcc9,
    setRaceData: _0x18ac4a
  };
});
const ye = () => sn();
const ln = W("<div class=\"flex flex-col items-start justify-start gap-[0.5vh]\"><div class=\"flex flex-row items-center justify-start gap-[0.6vh]\"><div>");
const on = W("<div><div></div><div>");
const cn = W("<div class=\"flex flex-row items-center justify-start gap-[0.6vh]\"><div></div><div></div><div></div><div>");
function an() {
  const {
    raceData: _0x2a90b8
  } = ye();
  const _0x4199ad = [{
    label: "POS"
  }, {
    label: "NAME",
    class: J.tabName
  }, {
    label: _0x2a90b8.curRace.numOfPlayers + " PLAYERS",
    class: J.tabPlayers
  }, {
    label: _0x2a90b8.curRace.driftMode ? "SCORE" : "CHECK",
    class: J.tabTime
  }];
  const [_0x3e4834] = K(_0x2a90b8.curRace.playerAliases);
  const _0x6e9284 = _0x2df630 => {
    const _0x315264 = _0x3e4834() ?? {};
    if (_0x2df630.toString() in _0x315264) {
      return _0x315264[_0x2df630.toString()];
    } else {
      return ["Unknown", 0];
    }
  };
  const [_0x31952b, _0x2b0f97] = K(0);
  const [_0x4950a0, _0x527ebb] = K();
  Ke(() => {
    if (!_0x2a90b8.playerDeltas) {
      return;
    }
    const _0x10a712 = [];
    for (let _0x33e162 = 0; _0x33e162 < _0x2a90b8.playerDeltas.length; _0x33e162++) {
      const _0x58f549 = _0x2a90b8.playerDeltas[_0x33e162];
      const _0x51408b = _0x6e9284(_0x58f549);
      const _0x504525 = _0x51408b[1];
      const _0x507aee = _0x51408b[0];
      const _0x5215cd = _0x2a90b8.playerDeltas[_0x33e162 + 1];
      let _0xe57747 = _0x2a90b8.playerDeltas[_0x33e162 + 2];
      const _0x5aa85b = _0xe57747;
      _0x10a712.push({
        id: _0x504525,
        alias: _0x507aee,
        pos: _0x5215cd,
        timestampDisplay: _0x5aa85b,
        timestamp: _0xe57747,
        active: _0x504525 === _0x2a90b8.curRace.localUserId
      });
      if (_0x504525 === _0x2a90b8.curRace.localUserId) {
        _0x2b0f97(_0xe57747);
      }
      _0x33e162++;
      _0x33e162++;
    }
    _0x527ebb(_0x10a712);
  });
  return (() => {
    const _0x14b5a9 = ln();
    const _0x453618 = _0x14b5a9.firstChild;
    const _0x18ec55 = _0x453618.firstChild;
    _0x18ec55.style.setProperty("background", "transparent");
    P(_0x453618, R(Pe, {
      each: _0x4199ad,
      children: _0x2f931c => (() => {
        const _0x2c771a = on();
        const _0xab32f6 = _0x2c771a.firstChild;
        const _0x5d955f = _0xab32f6.nextSibling;
        P(_0x5d955f, () => _0x2f931c.label);
        Y(_0x2134ec => {
          const _0x2ccd5f = J.top;
          const _0x18e506 = {
            [_0x2f931c.class ?? ""]: true
          };
          const _0x5bdc7d = J.line;
          const _0x436418 = J.textBox;
          if (_0x2ccd5f !== _0x2134ec._v$) {
            O(_0x2c771a, _0x2134ec._v$ = _0x2ccd5f);
          }
          _0x2134ec._v$2 = $e(_0x2c771a, _0x18e506, _0x2134ec._v$2);
          if (_0x5bdc7d !== _0x2134ec._v$3) {
            O(_0xab32f6, _0x2134ec._v$3 = _0x5bdc7d);
          }
          if (_0x436418 !== _0x2134ec._v$4) {
            O(_0x5d955f, _0x2134ec._v$4 = _0x436418);
          }
          return _0x2134ec;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined
        });
        return _0x2c771a;
      })()
    }), null);
    P(_0x14b5a9, R(Pe, {
      get each() {
        return _0x4950a0();
      },
      children: (_0x87f171, _0xfd1a30) => (() => {
        const _0x2f4620 = cn();
        const _0x5c90b1 = _0x2f4620.firstChild;
        const _0x5dd5b0 = _0x5c90b1.nextSibling;
        const _0x354da0 = _0x5dd5b0.nextSibling;
        const _0x43e354 = _0x354da0.nextSibling;
        P(_0x5dd5b0, () => _0x87f171.pos);
        P(_0x354da0, () => _0x87f171.alias);
        P(_0x43e354, () => _0x87f171.timestampDisplay);
        Y(_0x5771d4 => {
          const _0x430b6a = J.box;
          const _0x189c78 = {
            [J.active]: _0x87f171.active
          };
          const _0x3e0751 = J.position;
          const _0xa651fa = {
            [J.active]: _0x87f171.active
          };
          const _0x274b0d = J.name;
          const _0x3d3cdc = {
            [J.active]: _0x87f171.active
          };
          const _0x208c17 = J.time;
          const _0x2d304c = {
            [J.active]: _0x87f171.active
          };
          if (_0x430b6a !== _0x5771d4._v$5) {
            O(_0x5c90b1, _0x5771d4._v$5 = _0x430b6a);
          }
          _0x5771d4._v$6 = $e(_0x5c90b1, _0x189c78, _0x5771d4._v$6);
          if (_0x3e0751 !== _0x5771d4._v$7) {
            O(_0x5dd5b0, _0x5771d4._v$7 = _0x3e0751);
          }
          _0x5771d4._v$8 = $e(_0x5dd5b0, _0xa651fa, _0x5771d4._v$8);
          if (_0x274b0d !== _0x5771d4._v$9) {
            O(_0x354da0, _0x5771d4._v$9 = _0x274b0d);
          }
          _0x5771d4._v$10 = $e(_0x354da0, _0x3d3cdc, _0x5771d4._v$10);
          if (_0x208c17 !== _0x5771d4._v$11) {
            O(_0x43e354, _0x5771d4._v$11 = _0x208c17);
          }
          _0x5771d4._v$12 = $e(_0x43e354, _0x2d304c, _0x5771d4._v$12);
          return _0x5771d4;
        }, {
          _v$5: undefined,
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined
        });
        return _0x2f4620;
      })()
    }), null);
    Y(() => O(_0x18ec55, J.box));
    return _0x14b5a9;
  })();
}
const un = "_title_pcce1_1";
const fn = "_text_pcce1_12";
const dn = "_number_pcce1_23";
const ze = {
  title: un,
  text: fn,
  number: dn
};
var vn = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function hn(_0x58e408) {
  if (_0x58e408 && _0x58e408.__esModule && Object.prototype.hasOwnProperty.call(_0x58e408, "default")) {
    return _0x58e408.default;
  } else {
    return _0x58e408;
  }
}
var gt = {
  exports: {}
};
(function (_0xdae149, _0x63e405) {
  (function (_0x4b7cdd, _0x8e2c13) {
    _0xdae149.exports = _0x8e2c13();
  })(vn, function () {
    var _0x109195 = 1000;
    var _0x12ace8 = 60000;
    var _0x40eb5f = 3600000;
    var _0x35f1a7 = "millisecond";
    var _0xbcb592 = "second";
    var _0x3f95b6 = "minute";
    var _0x666ec5 = "hour";
    var _0x189cb5 = "day";
    var _0x283cfc = "week";
    var _0x1616c1 = "month";
    var _0x5a7c14 = "quarter";
    var _0x152af7 = "year";
    var _0x38331e = "date";
    var _0x571263 = "Invalid Date";
    var _0x1a48ad = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
    var _0x5f4027 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
    var _0x55bc76 = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function (_0xce5868) {
        var _0x5662cd = ["th", "st", "nd", "rd"];
        var _0x59619a = _0xce5868 % 100;
        return "[" + _0xce5868 + (_0x5662cd[(_0x59619a - 20) % 10] || _0x5662cd[_0x59619a] || _0x5662cd[0]) + "]";
      }
    };
    function _0x5622ff(_0x959b5b, _0x4b596e, _0x29c094) {
      var _0x3e1dbc = String(_0x959b5b);
      if (!_0x3e1dbc || _0x3e1dbc.length >= _0x4b596e) {
        return _0x959b5b;
      } else {
        return "" + Array(_0x4b596e + 1 - _0x3e1dbc.length).join(_0x29c094) + _0x959b5b;
      }
    }
    var _0x17005d = {
      s: _0x5622ff,
      z: function (_0x27da2e) {
        var _0x44bea1 = -_0x27da2e.utcOffset();
        var _0x566069 = Math.abs(_0x44bea1);
        var _0xfe51fc = Math.floor(_0x566069 / 60);
        var _0x2650a1 = _0x566069 % 60;
        return (_0x44bea1 <= 0 ? "+" : "-") + _0x5622ff(_0xfe51fc, 2, "0") + ":" + _0x5622ff(_0x2650a1, 2, "0");
      },
      m: function _0xf71dfa(_0x31aaa1, _0x4ff366) {
        if (_0x31aaa1.date() < _0x4ff366.date()) {
          return -_0xf71dfa(_0x4ff366, _0x31aaa1);
        }
        var _0x327116 = (_0x4ff366.year() - _0x31aaa1.year()) * 12 + (_0x4ff366.month() - _0x31aaa1.month());
        var _0x4183d2 = _0x31aaa1.clone().add(_0x327116, _0x1616c1);
        var _0x832b77 = _0x4ff366 - _0x4183d2 < 0;
        var _0x282beb = _0x31aaa1.clone().add(_0x327116 + (_0x832b77 ? -1 : 1), _0x1616c1);
        return +(-(_0x327116 + (_0x4ff366 - _0x4183d2) / (_0x832b77 ? _0x4183d2 - _0x282beb : _0x282beb - _0x4183d2)) || 0);
      },
      a: function (_0x312cf0) {
        if (_0x312cf0 < 0) {
          return Math.ceil(_0x312cf0) || 0;
        } else {
          return Math.floor(_0x312cf0);
        }
      },
      p: function (_0x221aaa) {
        return {
          M: _0x1616c1,
          y: _0x152af7,
          w: _0x283cfc,
          d: _0x189cb5,
          D: _0x38331e,
          h: _0x666ec5,
          m: _0x3f95b6,
          s: _0xbcb592,
          ms: _0x35f1a7,
          Q: _0x5a7c14
        }[_0x221aaa] || String(_0x221aaa || "").toLowerCase().replace(/s$/, "");
      },
      u: function (_0x474d5d) {
        return _0x474d5d === undefined;
      }
    };
    var _0x489a89 = "en";
    var _0x1548ac = {
      [_0x489a89]: _0x55bc76
    };
    var _0xf7d591 = "$isDayjsObject";
    function _0x346264(_0x358539) {
      return _0x358539 instanceof _0x345de6 || !!_0x358539 && !!_0x358539[_0xf7d591];
    }
    var _0x89f984 = function _0x591be6(_0x486d28, _0x4ce3da, _0x1ecfc7) {
      var _0x3e2141;
      if (!_0x486d28) {
        return _0x489a89;
      }
      if (typeof _0x486d28 == "string") {
        var _0x3ecd83 = _0x486d28.toLowerCase();
        if (_0x1548ac[_0x3ecd83]) {
          _0x3e2141 = _0x3ecd83;
        }
        if (_0x4ce3da) {
          _0x1548ac[_0x3ecd83] = _0x4ce3da;
          _0x3e2141 = _0x3ecd83;
        }
        var _0x1428e7 = _0x486d28.split("-");
        if (!_0x3e2141 && _0x1428e7.length > 1) {
          return _0x591be6(_0x1428e7[0]);
        }
      } else {
        var _0x2d8ede = _0x486d28.name;
        _0x1548ac[_0x2d8ede] = _0x486d28;
        _0x3e2141 = _0x2d8ede;
      }
      if (!_0x1ecfc7 && _0x3e2141) {
        _0x489a89 = _0x3e2141;
      }
      return _0x3e2141 || !_0x1ecfc7 && _0x489a89;
    };
    function _0x2e2743(_0x58e3ec, _0x20e928) {
      if (_0x346264(_0x58e3ec)) {
        return _0x58e3ec.clone();
      }
      var _0xc529af = typeof _0x20e928 == "object" ? _0x20e928 : {};
      _0xc529af.date = _0x58e3ec;
      _0xc529af.args = arguments;
      return new _0x345de6(_0xc529af);
    }
    var _0x1d752c = _0x17005d;
    _0x1d752c.l = _0x89f984;
    _0x1d752c.i = _0x346264;
    _0x1d752c.w = function (_0x4172c2, _0x1eb630) {
      return _0x2e2743(_0x4172c2, {
        locale: _0x1eb630.$L,
        utc: _0x1eb630.$u,
        x: _0x1eb630.$x,
        $offset: _0x1eb630.$offset
      });
    };
    var _0x345de6 = function () {
      function _0x343b42(_0x315d16) {
        this.$L = _0x89f984(_0x315d16.locale, null, true);
        this.parse(_0x315d16);
        this.$x = this.$x || _0x315d16.x || {};
        this[_0xf7d591] = true;
      }
      var _0x41874d = _0x343b42.prototype;
      _0x41874d.parse = function (_0x4f6c59) {
        this.$d = function (_0x3b297d) {
          var _0x316643 = _0x3b297d.date;
          var _0x4e57dd = _0x3b297d.utc;
          if (_0x316643 === null) {
            return new Date(NaN);
          }
          if (_0x1d752c.u(_0x316643)) {
            return new Date();
          }
          if (_0x316643 instanceof Date) {
            return new Date(_0x316643);
          }
          if (typeof _0x316643 == "string" && !/Z$/i.test(_0x316643)) {
            var _0x464296 = _0x316643.match(_0x1a48ad);
            if (_0x464296) {
              var _0x270e1e = _0x464296[2] - 1 || 0;
              var _0x553fe7 = (_0x464296[7] || "0").substring(0, 3);
              if (_0x4e57dd) {
                return new Date(Date.UTC(_0x464296[1], _0x270e1e, _0x464296[3] || 1, _0x464296[4] || 0, _0x464296[5] || 0, _0x464296[6] || 0, _0x553fe7));
              } else {
                return new Date(_0x464296[1], _0x270e1e, _0x464296[3] || 1, _0x464296[4] || 0, _0x464296[5] || 0, _0x464296[6] || 0, _0x553fe7);
              }
            }
          }
          return new Date(_0x316643);
        }(_0x4f6c59);
        this.init();
      };
      _0x41874d.init = function () {
        var _0x5a55b6 = this.$d;
        this.$y = _0x5a55b6.getFullYear();
        this.$M = _0x5a55b6.getMonth();
        this.$D = _0x5a55b6.getDate();
        this.$W = _0x5a55b6.getDay();
        this.$H = _0x5a55b6.getHours();
        this.$m = _0x5a55b6.getMinutes();
        this.$s = _0x5a55b6.getSeconds();
        this.$ms = _0x5a55b6.getMilliseconds();
      };
      _0x41874d.$utils = function () {
        return _0x1d752c;
      };
      _0x41874d.isValid = function () {
        return this.$d.toString() !== _0x571263;
      };
      _0x41874d.isSame = function (_0xea1ccf, _0x2c70c5) {
        var _0x1432c9 = _0x2e2743(_0xea1ccf);
        return this.startOf(_0x2c70c5) <= _0x1432c9 && _0x1432c9 <= this.endOf(_0x2c70c5);
      };
      _0x41874d.isAfter = function (_0x5acd9e, _0x825624) {
        return _0x2e2743(_0x5acd9e) < this.startOf(_0x825624);
      };
      _0x41874d.isBefore = function (_0x76085d, _0xfdd5ff) {
        return this.endOf(_0xfdd5ff) < _0x2e2743(_0x76085d);
      };
      _0x41874d.$g = function (_0x688e1, _0x525e46, _0x2831db) {
        if (_0x1d752c.u(_0x688e1)) {
          return this[_0x525e46];
        } else {
          return this.set(_0x2831db, _0x688e1);
        }
      };
      _0x41874d.unix = function () {
        return Math.floor(this.valueOf() / 1000);
      };
      _0x41874d.valueOf = function () {
        return this.$d.getTime();
      };
      _0x41874d.startOf = function (_0xf69c7e, _0x3d032b) {
        var _0x7cfa69 = this;
        var _0x38ba90 = !!_0x1d752c.u(_0x3d032b) || _0x3d032b;
        var _0x352232 = _0x1d752c.p(_0xf69c7e);
        function _0x506566(_0x183c84, _0x3464eb) {
          var _0x2c76d0 = _0x1d752c.w(_0x7cfa69.$u ? Date.UTC(_0x7cfa69.$y, _0x3464eb, _0x183c84) : new Date(_0x7cfa69.$y, _0x3464eb, _0x183c84), _0x7cfa69);
          if (_0x38ba90) {
            return _0x2c76d0;
          } else {
            return _0x2c76d0.endOf(_0x189cb5);
          }
        }
        function _0x406a1b(_0x54b15d, _0x5c813d) {
          return _0x1d752c.w(_0x7cfa69.toDate()[_0x54b15d].apply(_0x7cfa69.toDate("s"), (_0x38ba90 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(_0x5c813d)), _0x7cfa69);
        }
        var _0x4c3e97 = this.$W;
        var _0x34a475 = this.$M;
        var _0x283c85 = this.$D;
        var _0x31f07d = "set" + (this.$u ? "UTC" : "");
        switch (_0x352232) {
          case _0x152af7:
            if (_0x38ba90) {
              return _0x506566(1, 0);
            } else {
              return _0x506566(31, 11);
            }
          case _0x1616c1:
            if (_0x38ba90) {
              return _0x506566(1, _0x34a475);
            } else {
              return _0x506566(0, _0x34a475 + 1);
            }
          case _0x283cfc:
            var _0x30b847 = this.$locale().weekStart || 0;
            var _0x4dfd76 = (_0x4c3e97 < _0x30b847 ? _0x4c3e97 + 7 : _0x4c3e97) - _0x30b847;
            return _0x506566(_0x38ba90 ? _0x283c85 - _0x4dfd76 : _0x283c85 + (6 - _0x4dfd76), _0x34a475);
          case _0x189cb5:
          case _0x38331e:
            return _0x406a1b(_0x31f07d + "Hours", 0);
          case _0x666ec5:
            return _0x406a1b(_0x31f07d + "Minutes", 1);
          case _0x3f95b6:
            return _0x406a1b(_0x31f07d + "Seconds", 2);
          case _0xbcb592:
            return _0x406a1b(_0x31f07d + "Milliseconds", 3);
          default:
            return this.clone();
        }
      };
      _0x41874d.endOf = function (_0x7201cd) {
        return this.startOf(_0x7201cd, false);
      };
      _0x41874d.$set = function (_0x281cc7, _0x24e370) {
        var _0x898f6b;
        var _0x1d1ebc = _0x1d752c.p(_0x281cc7);
        var _0x1fbd5a = "set" + (this.$u ? "UTC" : "");
        var _0x5b4fd6 = (_0x898f6b = {}, _0x898f6b[_0x189cb5] = _0x1fbd5a + "Date", _0x898f6b[_0x38331e] = _0x1fbd5a + "Date", _0x898f6b[_0x1616c1] = _0x1fbd5a + "Month", _0x898f6b[_0x152af7] = _0x1fbd5a + "FullYear", _0x898f6b[_0x666ec5] = _0x1fbd5a + "Hours", _0x898f6b[_0x3f95b6] = _0x1fbd5a + "Minutes", _0x898f6b[_0xbcb592] = _0x1fbd5a + "Seconds", _0x898f6b[_0x35f1a7] = _0x1fbd5a + "Milliseconds", _0x898f6b)[_0x1d1ebc];
        var _0x150d24 = _0x1d1ebc === _0x189cb5 ? this.$D + (_0x24e370 - this.$W) : _0x24e370;
        if (_0x1d1ebc === _0x1616c1 || _0x1d1ebc === _0x152af7) {
          var _0x4a9be1 = this.clone().set(_0x38331e, 1);
          _0x4a9be1.$d[_0x5b4fd6](_0x150d24);
          _0x4a9be1.init();
          this.$d = _0x4a9be1.set(_0x38331e, Math.min(this.$D, _0x4a9be1.daysInMonth())).$d;
        } else if (_0x5b4fd6) {
          this.$d[_0x5b4fd6](_0x150d24);
        }
        this.init();
        return this;
      };
      _0x41874d.set = function (_0x134566, _0x376446) {
        return this.clone().$set(_0x134566, _0x376446);
      };
      _0x41874d.get = function (_0x138cca) {
        return this[_0x1d752c.p(_0x138cca)]();
      };
      _0x41874d.add = function (_0x38d663, _0x5df355) {
        var _0x581fa2;
        var _0x3a81ff = this;
        _0x38d663 = Number(_0x38d663);
        var _0x5604e5 = _0x1d752c.p(_0x5df355);
        function _0x4bdf12(_0x2324f9) {
          var _0x2d7e42 = _0x2e2743(_0x3a81ff);
          return _0x1d752c.w(_0x2d7e42.date(_0x2d7e42.date() + Math.round(_0x2324f9 * _0x38d663)), _0x3a81ff);
        }
        if (_0x5604e5 === _0x1616c1) {
          return this.set(_0x1616c1, this.$M + _0x38d663);
        }
        if (_0x5604e5 === _0x152af7) {
          return this.set(_0x152af7, this.$y + _0x38d663);
        }
        if (_0x5604e5 === _0x189cb5) {
          return _0x4bdf12(1);
        }
        if (_0x5604e5 === _0x283cfc) {
          return _0x4bdf12(7);
        }
        var _0x30bfcd = (_0x581fa2 = {}, _0x581fa2[_0x3f95b6] = _0x12ace8, _0x581fa2[_0x666ec5] = _0x40eb5f, _0x581fa2[_0xbcb592] = _0x109195, _0x581fa2)[_0x5604e5] || 1;
        var _0x2735da = this.$d.getTime() + _0x38d663 * _0x30bfcd;
        return _0x1d752c.w(_0x2735da, this);
      };
      _0x41874d.subtract = function (_0x56b15c, _0x44d727) {
        return this.add(_0x56b15c * -1, _0x44d727);
      };
      _0x41874d.format = function (_0x53b302) {
        var _0x15ac63 = this;
        var _0x5132a5 = this.$locale();
        if (!this.isValid()) {
          return _0x5132a5.invalidDate || _0x571263;
        }
        var _0x279d5d = _0x53b302 || "YYYY-MM-DDTHH:mm:ssZ";
        var _0x8f0d99 = _0x1d752c.z(this);
        var _0x5c1803 = this.$H;
        var _0x2408b2 = this.$m;
        var _0x32cc6e = this.$M;
        var _0xe97a2b = _0x5132a5.weekdays;
        var _0x2c93c0 = _0x5132a5.months;
        var _0x20b339 = _0x5132a5.meridiem;
        function _0x153388(_0x58b465, _0x32e072, _0x37528f, _0x1712d0) {
          return _0x58b465 && (_0x58b465[_0x32e072] || _0x58b465(_0x15ac63, _0x279d5d)) || _0x37528f[_0x32e072].slice(0, _0x1712d0);
        }
        function _0x3f0f69(_0x3c1b83) {
          return _0x1d752c.s(_0x5c1803 % 12 || 12, _0x3c1b83, "0");
        }
        var _0x1a9432 = _0x20b339 || function (_0x33f40d, _0x36313a, _0x549baa) {
          var _0x3d2f69 = _0x33f40d < 12 ? "AM" : "PM";
          if (_0x549baa) {
            return _0x3d2f69.toLowerCase();
          } else {
            return _0x3d2f69;
          }
        };
        return _0x279d5d.replace(_0x5f4027, function (_0x3faa28, _0x55b581) {
          return _0x55b581 || function (_0x50dbf1) {
            switch (_0x50dbf1) {
              case "YY":
                return String(_0x15ac63.$y).slice(-2);
              case "YYYY":
                return _0x1d752c.s(_0x15ac63.$y, 4, "0");
              case "M":
                return _0x32cc6e + 1;
              case "MM":
                return _0x1d752c.s(_0x32cc6e + 1, 2, "0");
              case "MMM":
                return _0x153388(_0x5132a5.monthsShort, _0x32cc6e, _0x2c93c0, 3);
              case "MMMM":
                return _0x153388(_0x2c93c0, _0x32cc6e);
              case "D":
                return _0x15ac63.$D;
              case "DD":
                return _0x1d752c.s(_0x15ac63.$D, 2, "0");
              case "d":
                return String(_0x15ac63.$W);
              case "dd":
                return _0x153388(_0x5132a5.weekdaysMin, _0x15ac63.$W, _0xe97a2b, 2);
              case "ddd":
                return _0x153388(_0x5132a5.weekdaysShort, _0x15ac63.$W, _0xe97a2b, 3);
              case "dddd":
                return _0xe97a2b[_0x15ac63.$W];
              case "H":
                return String(_0x5c1803);
              case "HH":
                return _0x1d752c.s(_0x5c1803, 2, "0");
              case "h":
                return _0x3f0f69(1);
              case "hh":
                return _0x3f0f69(2);
              case "a":
                return _0x1a9432(_0x5c1803, _0x2408b2, true);
              case "A":
                return _0x1a9432(_0x5c1803, _0x2408b2, false);
              case "m":
                return String(_0x2408b2);
              case "mm":
                return _0x1d752c.s(_0x2408b2, 2, "0");
              case "s":
                return String(_0x15ac63.$s);
              case "ss":
                return _0x1d752c.s(_0x15ac63.$s, 2, "0");
              case "SSS":
                return _0x1d752c.s(_0x15ac63.$ms, 3, "0");
              case "Z":
                return _0x8f0d99;
            }
            return null;
          }(_0x3faa28) || _0x8f0d99.replace(":", "");
        });
      };
      _0x41874d.utcOffset = function () {
        return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
      };
      _0x41874d.diff = function (_0xc7fb50, _0x10498e, _0x4d55d1) {
        var _0x258c79;
        var _0x4bc800 = this;
        var _0x8e99c7 = _0x1d752c.p(_0x10498e);
        var _0x254f11 = _0x2e2743(_0xc7fb50);
        var _0x28fcff = (_0x254f11.utcOffset() - this.utcOffset()) * _0x12ace8;
        var _0x344093 = this - _0x254f11;
        function _0x192c68() {
          return _0x1d752c.m(_0x4bc800, _0x254f11);
        }
        switch (_0x8e99c7) {
          case _0x152af7:
            _0x258c79 = _0x192c68() / 12;
            break;
          case _0x1616c1:
            _0x258c79 = _0x192c68();
            break;
          case _0x5a7c14:
            _0x258c79 = _0x192c68() / 3;
            break;
          case _0x283cfc:
            _0x258c79 = (_0x344093 - _0x28fcff) / 604800000;
            break;
          case _0x189cb5:
            _0x258c79 = (_0x344093 - _0x28fcff) / 86400000;
            break;
          case _0x666ec5:
            _0x258c79 = _0x344093 / _0x40eb5f;
            break;
          case _0x3f95b6:
            _0x258c79 = _0x344093 / _0x12ace8;
            break;
          case _0xbcb592:
            _0x258c79 = _0x344093 / _0x109195;
            break;
          default:
            _0x258c79 = _0x344093;
        }
        if (_0x4d55d1) {
          return _0x258c79;
        } else {
          return _0x1d752c.a(_0x258c79);
        }
      };
      _0x41874d.daysInMonth = function () {
        return this.endOf(_0x1616c1).$D;
      };
      _0x41874d.$locale = function () {
        return _0x1548ac[this.$L];
      };
      _0x41874d.locale = function (_0x12d633, _0x39b3c6) {
        if (!_0x12d633) {
          return this.$L;
        }
        var _0x5e243e = this.clone();
        var _0x5733ea = _0x89f984(_0x12d633, _0x39b3c6, true);
        if (_0x5733ea) {
          _0x5e243e.$L = _0x5733ea;
        }
        return _0x5e243e;
      };
      _0x41874d.clone = function () {
        return _0x1d752c.w(this.$d, this);
      };
      _0x41874d.toDate = function () {
        return new Date(this.valueOf());
      };
      _0x41874d.toJSON = function () {
        if (this.isValid()) {
          return this.toISOString();
        } else {
          return null;
        }
      };
      _0x41874d.toISOString = function () {
        return this.$d.toISOString();
      };
      _0x41874d.toString = function () {
        return this.$d.toUTCString();
      };
      return _0x343b42;
    }();
    var _0x5a7ce3 = _0x345de6.prototype;
    _0x2e2743.prototype = _0x5a7ce3;
    [["$ms", _0x35f1a7], ["$s", _0xbcb592], ["$m", _0x3f95b6], ["$H", _0x666ec5], ["$W", _0x189cb5], ["$M", _0x1616c1], ["$y", _0x152af7], ["$D", _0x38331e]].forEach(function (_0x1fdce1) {
      _0x5a7ce3[_0x1fdce1[1]] = function (_0x27f6f8) {
        return this.$g(_0x27f6f8, _0x1fdce1[0], _0x1fdce1[1]);
      };
    });
    _0x2e2743.extend = function (_0xd20798, _0x1c9565) {
      if (!_0xd20798.$i) {
        _0xd20798(_0x1c9565, _0x345de6, _0x2e2743);
        _0xd20798.$i = true;
      }
      return _0x2e2743;
    };
    _0x2e2743.locale = _0x89f984;
    _0x2e2743.isDayjs = _0x346264;
    _0x2e2743.unix = function (_0x1bfc21) {
      return _0x2e2743(_0x1bfc21 * 1000);
    };
    _0x2e2743.en = _0x1548ac[_0x489a89];
    _0x2e2743.Ls = _0x1548ac;
    _0x2e2743.p = {};
    return _0x2e2743;
  });
})(gt);
var _n = gt.exports;
const te = hn(_n);
const yt = _0x43dc6a => _0x43dc6a > 59999 ? te(_0x43dc6a).format("mm:ss.SSS") : _0x43dc6a < 0 ? _0x43dc6a < -59999 ? "-" + te(Math.abs(_0x43dc6a)).format("mm:ss.SSS") : "-" + te(Math.abs(_0x43dc6a)).format("ss.SSS") : te(_0x43dc6a).format("ss.SSS");
const mn = W("<svg width=\"3.14vh\" height=\"3.7vh\" viewBox=\"0 0 34 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.0191 0.10725C14.6722 0.858779 8.73587 6.16901 7.15207 13.4062C6.94373 14.3582 6.91779 14.7253 6.92127 16.6725C6.92465 18.5771 6.95485 19.0012 7.15048 19.89C7.64695 22.1464 8.49493 24.127 9.76567 25.9983C10.7864 27.5016 12.7771 29.4465 14.3192 30.4474C16.9053 32.1257 19.6766 33.0587 22.5822 33.2293L23.7578 33.2983V31.6154V29.9325L23.1369 29.9321C22.3154 29.9316 20.9242 29.7036 19.8987 29.4015C17.7363 28.7645 15.8762 27.6634 14.2133 26.0361C12.2766 24.1407 11.0736 21.9655 10.478 19.2824C10.2266 18.1494 10.2223 15.2009 10.4705 14.0732C11.0487 11.4455 12.1762 9.35267 14.0326 7.46137C16.4566 4.99151 19.3144 3.6969 23.0872 3.35946L23.7578 3.29949V1.6497V0L23.2859 0.0129674C23.0263 0.0200849 22.4563 0.0624973 22.0191 0.10725ZM23.2611 6.6961C20.7831 6.85639 18.6062 7.76479 16.8609 9.36701C12.6466 13.2357 12.5286 19.7026 16.5994 23.6973C18.3036 25.3699 20.6224 26.4293 22.928 26.589L23.7578 26.6464V24.9884V23.3304L23.0823 23.2688C20.4483 23.0286 18.1532 21.1914 17.3388 18.6712C15.9537 14.3848 19.1852 10.0425 23.76 10.0425C25.7024 10.0425 27.1516 10.6332 28.5317 11.9877C29.7356 13.1691 30.3634 14.425 30.5 15.9256L30.5636 16.6237L32.2818 16.6504L34 16.6772L33.9331 15.9192C33.5644 11.7401 30.6548 8.22753 26.6083 7.07683C25.8394 6.85814 25.4433 6.79867 24.0559 6.69356C23.8646 6.67903 23.507 6.6802 23.2611 6.6961ZM0.061003 17.6208C0.398607 22.8935 2.06526 27.2451 5.28174 31.2521C5.62451 31.6793 6.44576 32.5556 7.10667 33.1996C11.2571 37.2435 16.628 39.5717 22.6401 39.9329L23.7578 40V38.3377V36.6754L23.0872 36.6193C20.262 36.3828 19.155 36.1778 17.2129 35.5315C12.0749 33.8215 7.84099 30.141 5.47647 25.3292C4.34036 23.0172 3.6279 20.3638 3.50539 17.9887L3.44002 16.7212L1.72001 16.6945L0 16.6678L0.061003 17.6208Z\" fill=\"white\" fill-opacity=\"0.65\">");
const $n = W("<svg width=\"3.14vh\" height=\"3.42vh\" viewBox=\"0 0 34 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.3329 1.69489V3.38978L11.0297 3.41159L12.7266 3.43341L12.7491 4.33692L12.7716 5.24043L12.3898 5.29148C11.711 5.38237 10.0301 5.82483 9.33274 6.09619C4.60581 7.93561 1.21494 12.0292 0.229102 17.0862C0.00879303 18.2164 -0.066666 20.1648 0.0647686 21.3279C0.691678 26.8731 4.19969 31.4844 9.31038 33.4814C10.6603 34.0088 12.6216 34.4102 13.8644 34.4134L14.4434 34.4148V32.7248V31.0347L13.9044 30.9873C12.2095 30.838 10.9486 30.5045 9.61238 29.8519C6.41787 28.2917 4.22292 25.3447 3.53413 21.691C3.33067 20.6118 3.34728 18.8719 3.57222 17.7113C4.45385 13.162 7.88297 9.68673 12.3672 8.79776C13.5475 8.5638 15.2388 8.54878 16.3598 8.76229C19.9137 9.43936 22.8496 11.6861 24.3865 14.905C25.1023 16.4042 25.4204 17.727 25.5127 19.588L25.5669 20.6812H27.2417H28.9165L28.8761 19.2877C28.8099 17.0044 28.3937 15.3424 27.3674 13.2626L26.7961 12.1048L27.6257 11.2626L28.4553 10.4204L26.0616 7.99774L23.668 5.57504L22.8286 6.41918L21.9893 7.26331L20.8923 6.71146C19.4538 5.98786 18.1482 5.57375 16.4171 5.29197L16.115 5.24277L16.1376 4.33813L16.1602 3.43341L17.857 3.41159L19.5538 3.38978V1.69489V0H14.4434H9.3329V1.69489ZM12.7665 16.7631V21.4891H17.4378H22.109V19.7935V18.098L19.1346 18.0768L16.1602 18.0557L16.1392 15.0464L16.1183 12.0371H14.4424H12.7665V16.7631ZM22.3546 25.5432C23.7864 29.056 23.7669 33.2199 22.3028 36.5759C22.2011 36.8091 22.1304 37 22.1459 37C22.1613 37 23.7672 36.2506 25.7148 35.3348C27.6623 34.4189 30.2618 33.1998 31.4915 32.6259C32.7212 32.0519 33.7903 31.5067 33.8671 31.4143C34.0316 31.2165 34.0461 30.7982 33.8954 30.5974C33.8369 30.5194 33.4518 30.2965 33.0395 30.1019C28.3745 27.9008 22.8631 25.3069 22.5343 25.1578L22.1211 24.9703L22.3546 25.5432Z\" fill=\"white\" fill-opacity=\"0.65\">");
const gn = W("<div class=\"flex flex-col items-end justify-start gap-[2.4vh] pr-[4.6vh]\">");
const yn = W("<div class=\"flex flex-row items-center justify-end gap-[1.5vh]\"><div class=\"flex flex-col items-end justify-start\"><div></div><div>");
function ue(_0x2f3faa) {
  return [mn(), $n()][_0x2f3faa];
}
function bn() {
  const {
    raceData: _0x48c75f
  } = ye();
  const [_0x34382e, _0xd97f51] = K(0);
  const [_0x2468e0, _0x5e9ef1] = K(te());
  const [_0x54f4e1, _0x1f0984] = K(0);
  const [_0x23126d, _0x29766d] = K(_0x48c75f?.curRace.startTime);
  const [_0x74e308, _0x1b7a47] = K("");
  lt(() => {
    _0x5e9ef1(te());
    let _0x8545ba = 0;
    const _0x828d44 = setInterval(() => {
      if (_0x48c75f.show) {
        const _0x1e22fd = te();
        if (!_0x48c75f.finished) {
          _0x29766d(_0x1e22fd.diff(_0x48c75f?.curRace.startTime));
          _0xd97f51(_0x1e22fd.diff(_0x2468e0()));
        }
        if (_0x48c75f.dnfTime && !_0x48c75f.finished && !_0x48c75f.dnf) {
          _0x1f0984(te(_0x48c75f.dnfTime).diff(_0x1e22fd));
        }
        if (_0x48c75f.updateLap && _0x8545ba !== _0x48c75f.lap) {
          _0x8545ba = _0x48c75f.lap;
          _0x5e9ef1(_0x1e22fd);
        }
      }
    }, 100);
    Ze(() => {
      clearInterval(_0x828d44);
    });
  });
  const [_0x3582c4] = K(() => {
    if (!_0x23126d()) {
      return "--:--:--";
    }
    const _0x825bd5 = _0x48c75f.finished > 0 ? _0x48c75f.finished : _0x23126d() + _0x48c75f.additionalTotalTime;
    return te(_0x825bd5).format("mm:ss.SSS");
  });
  const [_0xb5c1b1] = K(() => _0x34382e() ? (_0x48c75f.finished || _0x48c75f.dnf) && _0x48c75f.curRace.laps === 1 ? _0x3582c4() : te(_0x34382e() + _0x48c75f.additionalLapTime).format("mm:ss.SSS") : "--:--:--");
  const [_0x5bca38] = K(() => _0x48c75f.curRace ? _0x48c75f.lap + "/" + _0x48c75f.curRace.laps : "0/0");
  const [_0x34de87] = K(() => {
    if (_0x48c75f.bestLapTime === undefined) {
      return "--:--:--";
    }
    let _0x24fb0f = _0x48c75f.bestLapTime;
    if ((_0x48c75f.finished || _0x48c75f.dnf) && _0x48c75f.curRace.laps === 1) {
      _0x24fb0f = _0x48c75f.finished;
    }
    if (_0x24fb0f === Number.MAX_SAFE_INTEGER) {
      return "--:--:--";
    } else {
      return te(_0x24fb0f).format("mm:ss.SSS");
    }
  });
  const [_0x56a442] = K(() => yt(_0x48c75f.overallLapDelta));
  Ke(() => {
    let _0x3408ee = "--:--";
    if (_0x54f4e1() < 0) {
      _0x3408ee = "00:00";
    } else if (_0x54f4e1() > 0) {
      _0x3408ee = te(_0x54f4e1()).format("mm:ss");
    }
    _0x1b7a47(_0x3408ee);
  });
  const [_0x59773d] = K(() => _0x48c75f.checkpoint + "/" + (_0x48c75f.curRace?.numOfCheckpoints ?? 0));
  const _0x501429 = [{
    label: "Laps",
    icon: ue(0),
    show: _0x48c75f.curRace.laps > 1,
    value: _0x5bca38()
  }, {
    label: "Checkpoints",
    icon: ue(0),
    show: _0x48c75f.curRace.numOfCheckpoints > 0,
    value: _0x59773d()
  }, {
    label: "Total Time",
    icon: ue(1),
    show: !_0x48c75f.curRace.driftMode,
    value: _0x3582c4()
  }, {
    label: "PB Lap Time",
    icon: ue(1),
    show: !_0x48c75f.curRace.driftMode,
    value: _0x34de87()
  }, {
    label: "Current Lap",
    icon: ue(1),
    show: !_0x48c75f.curRace.driftMode,
    value: _0xb5c1b1()
  }, {
    label: "Current Lap Delta",
    icon: ue(1),
    show: !_0x48c75f.curRace.driftMode,
    value: _0x56a442()
  }, {
    label: "DNF Time",
    icon: ue(1),
    show: Q(() => _0x54f4e1() > 0),
    value: _0x74e308
  }];
  return (() => {
    const _0x315924 = gn();
    P(_0x315924, R(Pe, {
      each: _0x501429,
      children: (_0x1f7201, _0x4376b3) => R(ve, {
        get when() {
          if (Q(() => typeof _0x1f7201.show == "function")()) {
            return _0x1f7201.show();
          } else {
            return _0x1f7201.show;
          }
        },
        get children() {
          const _0x6b9738 = yn();
          const _0x398b39 = _0x6b9738.firstChild;
          const _0xbd5844 = _0x398b39.firstChild;
          const _0x32ffbe = _0xbd5844.nextSibling;
          P(_0xbd5844, () => _0x1f7201.label);
          P(_0x32ffbe, () => _0x1f7201.value());
          P(_0x6b9738, () => _0x1f7201.icon, null);
          Y(_0x1d3b60 => {
            const _0x3745e9 = ze.title;
            const _0x203f12 = ze.text + " " + ze.number;
            if (_0x3745e9 !== _0x1d3b60._v$) {
              O(_0xbd5844, _0x1d3b60._v$ = _0x3745e9);
            }
            if (_0x203f12 !== _0x1d3b60._v$2) {
              O(_0x32ffbe, _0x1d3b60._v$2 = _0x203f12);
            }
            return _0x1d3b60;
          }, {
            _v$: undefined,
            _v$2: undefined
          });
          return _0x6b9738;
        }
      })
    }));
    return _0x315924;
  })();
}
const wn = "_container_1is76_1";
const xn = "_line_1is76_9";
const Cn = "_box_1is76_15";
const pn = "_title_1is76_25";
const Sn = "_times_1is76_34";
const Ln = "_text_1is76_38";
const An = "_active_1is76_52";
const Mn = "_pos_1is76_55";
const Tn = "_neg_1is76_58";
const se = {
  container: wn,
  line: xn,
  box: Cn,
  title: pn,
  times: Sn,
  text: Ln,
  active: An,
  pos: Mn,
  neg: Tn
};
const Dn = W("<div class=\"absolute top-0 mt-[4.5vh] flex w-full flex-col items-center justify-start\"><div><div></div><div><div>SECTION TIMES</div></div><div>");
const Pn = W("<div>");
function kn() {
  const {
    raceData: _0x27db4e
  } = ye();
  const _0x176f99 = Q(() => _0x27db4e.sectionTimes);
  const _0xaafc9e = Q(() => _0x27db4e.lapSection);
  return (() => {
    const _0x54e0c2 = Dn();
    const _0x810ebc = _0x54e0c2.firstChild;
    const _0x28cfe4 = _0x810ebc.firstChild;
    const _0x3f3df7 = _0x28cfe4.nextSibling;
    const _0x3a201d = _0x3f3df7.firstChild;
    const _0x780911 = _0x3f3df7.nextSibling;
    P(_0x780911, R(Pe, {
      get each() {
        return _0x176f99();
      },
      children: (_0xb80c5, _0x5ea785) => (() => {
        const _0x49fec8 = Pn();
        P(_0x49fec8, () => yt(_0xb80c5));
        Y(_0x25025e => {
          const _0x4884b6 = se.text;
          const _0x39a4e8 = {
            [se.active]: _0xaafc9e() === _0x5ea785() + 1,
            [se.pos]: _0xb80c5 > 0,
            [se.neg]: _0xb80c5 < 0
          };
          if (_0x4884b6 !== _0x25025e._v$6) {
            O(_0x49fec8, _0x25025e._v$6 = _0x4884b6);
          }
          _0x25025e._v$7 = $e(_0x49fec8, _0x39a4e8, _0x25025e._v$7);
          return _0x25025e;
        }, {
          _v$6: undefined,
          _v$7: undefined
        });
        return _0x49fec8;
      })()
    }));
    Y(_0x229c9d => {
      const _0x3702e4 = se.container;
      const _0x1f92ef = se.line;
      const _0xd957f7 = se.box;
      const _0x5c58e9 = se.title;
      const _0x5a08ae = se.times + " gap-[0.6vh]";
      if (_0x3702e4 !== _0x229c9d._v$) {
        O(_0x810ebc, _0x229c9d._v$ = _0x3702e4);
      }
      if (_0x1f92ef !== _0x229c9d._v$2) {
        O(_0x28cfe4, _0x229c9d._v$2 = _0x1f92ef);
      }
      if (_0xd957f7 !== _0x229c9d._v$3) {
        O(_0x3f3df7, _0x229c9d._v$3 = _0xd957f7);
      }
      if (_0x5c58e9 !== _0x229c9d._v$4) {
        O(_0x3a201d, _0x229c9d._v$4 = _0x5c58e9);
      }
      if (_0x5a08ae !== _0x229c9d._v$5) {
        O(_0x780911, _0x229c9d._v$5 = _0x5a08ae);
      }
      return _0x229c9d;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return _0x54e0c2;
  })();
}
const On = "_speed2_1e7nj_1";
const En = "_speed_1e7nj_1";
const jn = "_speedNumber_1e7nj_31";
const Nn = "_mph_1e7nj_40";
const Rn = "_gear2_1e7nj_53";
const Hn = "_gear_1e7nj_53";
const zn = "_assists_1e7nj_81";
const In = "_nitro_1e7nj_97";
const Fn = "_turbo_1e7nj_102";
const fe = {
  speed2: On,
  speed: En,
  speedNumber: jn,
  mph: Nn,
  gear2: Rn,
  gear: Hn,
  assists: zn,
  nitro: In,
  turbo: Fn
};
const Bn = W("<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 206.9 152.9\"><g><g><path fill=\"currentColor\" d=\"M103.48-0.06c-42.19,0-76.51,34.32-76.51,76.51c0,42.19,34.32,76.51,76.51,76.51s76.51-34.32,76.51-76.51\n           C179.99,34.26,145.67-0.06,103.48-0.06z M166.68,76.45c0,34.85-28.35,63.21-63.21,63.21S40.27,111.3,40.27,76.45\n           s28.36-63.21,63.21-63.21S166.68,41.6,166.68,76.45z\"></path><path fill=\"currentColor\" d=\"M13.37,76.45c0-24.05,9.37-46.67,26.39-63.69c1.26-1.26,1.96-2.94,1.96-4.73c0-1.78-0.7-3.46-1.96-4.73\n           c-1.26-1.26-2.94-1.96-4.72-1.96c0,0,0,0,0,0c-1.79,0-3.46,0.7-4.73,1.96C10.76,22.85,0,48.83,0,76.45\n           c0,27.63,10.76,53.6,30.31,73.15c1.26,1.26,2.94,1.96,4.73,1.96s3.46-0.7,4.73-1.96c1.26-1.26,1.96-2.94,1.96-4.73\n           c0-1.79-0.7-3.46-1.96-4.73C22.74,123.13,13.37,100.51,13.37,76.45z\"></path><path fill=\"currentColor\" d=\"M176.61,3.32c-1.26-1.26-2.94-1.96-4.73-1.96c0,0,0,0,0,0c-1.78,0-3.46,0.69-4.72,1.96c-2.61,2.6-2.61,6.85,0,9.45\n           c17.01,17.02,26.37,39.63,26.37,63.68c0,24.05-9.37,46.67-26.37,63.69c-2.6,2.61-2.6,6.85,0,9.45c1.26,1.26,2.94,1.96,4.72,1.96\n           s3.47-0.7,4.73-1.96c19.53-19.54,30.28-45.51,30.28-73.13C206.9,48.83,196.14,22.86,176.61,3.32z\"></g><path fill=\"currentColor\" d=\"M65.01,57.91c-6.2-6.2-2.36-10.72-0.27-12.8c2.09-2.09,8.07-3.18,15.28,1.72c7.21,4.9,15.89,10.37,32.1,13.31\n       s18.81,3.36,22.43,11.3c3.63,7.93,8.44,10.27,11.77,12.58c3.33,2.31,2.77,5.08-2.11,11.43c-4.88,6.35-10.57,13.74-13.81,17.95\n       c-3.24,4.21-8.69,2.27-12.71-1.65s-5.64-5.5-9.28-9.05s-5.05-6.37-3.38-10.22s-3.84-10.9-10.64-10.77\n       c-6.8,0.13-6.96-1.38-12.53-6.96S65.01,57.91,65.01,57.91z\">");
const Vn = W("<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 163.55 153.93\"><g><path fill=\"currentColor\" d=\"M158.23,1.24c0,0-1-0.16-2.22-0.36c0,0,0,0-1.13-0.15c-0.1-0.01-0.21-0.03-0.31-0.04c-7.43-0.95-15.57-0.92-25.27,0.1\n       c-0.19,0.02-0.38,0.04-0.57,0.06c-1.08,0.12-2.17,0.24-3.29,0.39c-0.06,0.01-0.13,0.02-0.19,0.02c-2.07,0.26-2.07,0.26-2.07,0.26\n       c-2.39,0.36-5.27,0.79-6.39,0.97c-1.12,0.18-2.04,0.33-2.04,0.34c0,0.01-2.89,0.54-6.42,1.18c0,0-4.07,0.74-9.26,1.75\n       c-6.04,1.17-11.37,2.12-11.37,2.12c-3.53,0.63-6.75,1.2-7.17,1.26s-3.66,0.49-7.22,0.95c0,0-8.68,1.11-14.85,1.18\n       c-0.17,0-0.35,0.01-0.52,0.01c-0.38,0-0.76,0-1.13,0c-0.66-0.01-1.33-0.01-1.99-0.04c-0.31-0.01-0.63-0.02-0.94-0.03\n       c-0.9-0.04-1.79-0.09-2.68-0.16c-0.2-0.02-0.4-0.03-0.6-0.05c-0.92-0.08-1.83-0.17-2.74-0.28c-0.13-0.02-0.25-0.03-0.38-0.05\n       c-0.67-0.09-1.69-0.22-2.36-0.34c-3.55-0.63-7,1.54-7.98,5L23.27,64.24c-0.98,3.45-1.78,6.27-1.78,6.27c0,0-0.8,2.82-1.78,6.27\n       L0.59,144.09c-1.17,4.11,1.92,8.19,6.19,8.19c2.87,0,5.4-1.91,6.19-4.67l13.96-49.15c0.98-3.45,4.56-6.06,7.95-5.81c0,0,0,0,3.14,0\n       c4.77,0,7.96-0.28,7.96-0.28c3.57-0.31,6.48-0.52,6.46-0.45c-0.02,0.07,2.2-0.23,4.93-0.66c2.73-0.43,5.06-0.79,5.18-0.81\n       c0,0,0,0,0.11-0.02c1.16-0.2,2.33-0.37,3.5-0.57c0.56-0.1,1.12-0.19,1.68-0.29c1.34-0.23,2.67-0.47,4.01-0.72\n       c0.34-0.06,0.67-0.12,1.01-0.19c1.39-0.26,2.78-0.52,4.17-0.79c0.26-0.05,0.51-0.1,0.76-0.15c1.43-0.28,2.87-0.55,4.3-0.83\n       c0.14-0.03,0.29-0.06,0.43-0.08c1.25-0.24,2.51-0.49,3.77-0.73c0.37-0.07,0.74-0.14,1.11-0.21c1.3-0.25,2.61-0.5,3.91-0.74\n       c0.2-0.04,0.39-0.07,0.59-0.11c3.18-0.59,3.18-0.59,3.18-0.59c3.46-0.58,6.43-1.07,6.59-1.09c0.16-0.03,3.21-0.39,6.77-0.8\n       l21.61-0.42c3.58,0.16,6.51,0.29,6.51,0.29c3.25,0.57,6.4-1.4,7.3-4.58L163.3,9.33C164.34,5.66,161.99,1.9,158.23,1.24z\n        M60.41,63.81l-2.36,8.3c-0.98,3.45-4.7,6.58-8.26,6.97l-11,0.5c-3.59,0.02-6.16-1.23-5.73-2.76c0.44-1.53,0.79-2.79,0.79-2.79\n       c0,0,0.8-2.82,1.78-6.27l1.01-3.56c0.98-3.45,4.49-6.06,7.8-5.8c0,0,0,0,3.25,0c4.46,0,8-0.3,8-0.3\n       C59.27,57.79,61.39,60.37,60.41,63.81z M109.06,22.87l-2.26,7.96c-0.98,3.45-4.67,6.8-8.19,7.44c0,0-4.11,0.75-9.26,1.74\n       c-3.07,0.6-3.07,0.6-3.07,0.6c-3.43,0.65-5.44-1.64-4.46-5.09l2.26-7.96c0.98-3.45,4.67-6.8,8.19-7.44c0,0,4.07-0.74,9.26-1.75\n       c3.13-0.61,3.13-0.61,3.13-0.61C108.06,17.13,110.04,19.42,109.06,22.87z M137.37,53.58l-2.59,9.12c-0.98,3.45-4.71,6.18-8.3,6.08\n       l-10.75,0.12c-3.58,0.26-5.7-2.34-4.72-5.79l2.36-8.29c0.98-3.45,4.7-6.56,8.27-6.92l11-0.62\n       C136.21,47.3,138.35,50.13,137.37,53.58z\"></g><g><path fill=\"currentColor\" d=\"M59.2,153.93c-4.56,0-6.77-1.97-6.77-5.75c0-0.71,0.08-1.5,0.24-2.28l7.48-42.66c0.87-5.19,5.04-7.95,9.37-7.95\n       c3.7,0,6.69,2.13,6.69,6.22c0,0.55-0.08,1.1-0.16,1.73l-6.06,34.55h8.58c4.33,0,6.38,2.99,6.38,6.61c0,4.88-3.46,9.52-9.21,9.52\n       H59.2z\"></path><path fill=\"currentColor\" d=\"M115.71,153.93c-18.42,0-27.63-10.23-27.63-25.11c0-10.94,6.14-20.62,15.82-27c5.75-3.78,12.91-6.06,22.51-6.06h2.2\n       c5.27,0,7.56,3.15,7.56,6.85c0,4.8-3.46,9.44-10.39,9.44h-2.28c-5.59,0-8.42,0.79-10.86,2.12c-4.56,2.52-7.95,6.69-7.95,12.51\n       c0,6.06,2.75,11.1,14.09,11.1h2.2c5.51,0,7.79,3.15,7.79,6.77c0,4.88-3.38,9.37-10.62,9.37H115.71z\">");
const Wn = W("<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 195.2 153.93\"><g><g><path fill=\"currentColor\" d=\"M8.43,113.28c-5.69,0-8.43-2.45-8.43-7.16c0-0.88,0.1-1.86,0.29-2.84l9.22-52.46c1.18-6.67,5-10,11.67-10h39.81\n           c5.49,0,8.43,3.73,8.43,8.33c0,6.08-4.9,11.76-11.96,11.76H27.55l-1.18,6.77h30.49c4.61,0,7.35,2.55,7.35,7.35\n           c0,6.96-4.41,11.47-10.69,11.47H23.04l-1.18,6.67h30.1c5.49,0,8.53,3.82,8.53,8.43c0,6.18-5,11.67-12.06,11.67H8.43z\"></path><path fill=\"currentColor\" d=\"M75.69,113.28c-5.49,0-8.14-2.65-8.14-7.45c0-7.84,3.82-12.65,11.77-12.65h26.86c3.24,0,4.71-1.27,4.71-3.63\n           c0-1.67-1.18-2.45-3.63-2.45H90.88c-11.96,0-17.84-6.28-17.84-17.65c0-18.04,9.02-28.63,27.55-28.63h22.06\n           c5.39,0,8.14,2.55,8.14,7.45c0,7.74-3.92,12.65-11.86,12.65H95.59c-3.04,0-4.61,1.18-4.61,3.63c0,1.67,1.27,2.45,3.53,2.45h16.47\n           c11.96,0,17.84,6.37,17.84,17.75c0,17.84-8.73,28.53-27.26,28.53H75.69z\"></path><path fill=\"currentColor\" d=\"M169.71,113.28c-22.94,0-34.41-12.75-34.41-31.28c0-13.63,7.65-25.69,19.71-33.63c7.16-4.71,16.08-7.55,28.04-7.55h2.74\n           c6.57,0,9.41,3.92,9.41,8.53c0,5.98-4.31,11.76-12.94,11.76h-2.84c-6.96,0-10.49,0.98-13.53,2.65c-5.69,3.14-9.9,8.33-9.9,15.59\n           c0,7.55,3.43,13.82,17.55,13.82h2.75c6.86,0,9.71,3.92,9.71,8.43c0,6.08-4.22,11.67-13.24,11.67H169.71z\"></g><path fill=\"currentColor\" d=\"M96.38,0C75.82,0,56.5,8.01,41.96,22.55c-1.16,1.16-1.79,2.69-1.79,4.33c0,1.64,0.64,3.17,1.79,4.33\n       c2.39,2.39,6.27,2.39,8.66,0C62.84,18.98,79.1,12.25,96.38,12.25c17.28,0,33.53,6.73,45.76,18.96c1.19,1.19,2.76,1.79,4.33,1.79\n       c1.57,0,3.14-0.6,4.33-1.79c1.16-1.16,1.79-2.69,1.79-4.33c0-1.64-0.64-3.17-1.79-4.33C136.26,8.01,116.93,0,96.38,0z\"></path><path fill=\"currentColor\" d=\"M142.13,122.73c-12.22,12.22-28.47,18.95-45.75,18.95s-33.53-6.73-45.75-18.95c-2.39-2.39-6.27-2.39-8.66,0\n       c-1.16,1.16-1.79,2.69-1.79,4.33c0,1.64,0.64,3.18,1.8,4.33c14.54,14.53,33.86,22.53,54.41,22.53s39.87-8,54.41-22.53\n       c1.16-1.16,1.8-2.69,1.8-4.33c0-1.64-0.64-3.17-1.79-4.33C148.4,120.35,144.52,120.34,142.13,122.73z\">");
const Un = W("<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 175.99 152.9\"><path fill=\"currentColor\" d=\"m39.3 30.9c12.1-12.1 28.3-18.8 45.5-18.8 17.2 0 33.4 6.7 45.5 18.8 1.2 1.2 2.8 1.8 4.4 1.8 1.5 0 3.1-0.6 4.3-1.8 1.1-1.1 1.7-2.6 1.8-4.3 0-1.6-0.7-3.1-1.8-4.3-14.5-14.4-33.7-22.4-54.2-22.4-20.4 0-39.7 7.9-54.1 22.4-1.2 1.2-1.8 2.7-1.8 4.3 0 1.6 0.6 3.2 1.8 4.3 2.3 2.4 6.2 2.4 8.6 0zm91 91.1c-12.1 12.1-28.3 18.8-45.5 18.8-17.2 0-33.4-6.6-45.5-18.8-1.2-1.2-2.7-1.8-4.3-1.8-1.7 0-3.2 0.7-4.3 1.8-1.2 1.2-1.8 2.7-1.8 4.3 0 1.6 0.6 3.2 1.8 4.3 14.4 14.5 33.7 22.4 54.1 22.4 20.4 0 39.7-7.9 54.1-22.4 1.2-1.1 1.8-2.6 1.8-4.3 0-1.6-0.6-3.1-1.8-4.3-2.3-2.4-6.2-2.4-8.6 0zm-121.8-61.6c-5.6 0-8.5-3.9-8.5-8.4 0-6 5-11.5 12-11.5h33.5c5.5 0 8.5 3.7 8.5 8.4 0 5.9-5 11.5-12 11.5h-6.9l-7.5 42.6c-1.1 6.3-6.4 9.8-11.5 9.8-4.8 0-8.4-2.7-8.4-7.6 0-0.7 0-1.4 7.7-44.8zm113 52.5c-5.4 0-8.1-2.6-8.1-7.4 0-7.7 3.8-12.5 11.7-12.5h26.6c3.2 0 4.7-1.3 4.7-3.6 0-1.7-1.2-2.4-3.6-2.4h-16.2c-11.9 0-17.7-6.3-17.7-17.5 0-17.9 8.9-28.4 27.3-28.4h21.9c5.3 0 8 2.5 8 7.4 0 7.6-3.9 12.5-11.7 12.5h-23.2c-3 0-4.5 1.2-4.5 3.6 0 1.7 1.2 2.4 3.5 2.4h16.3c11.9 0 17.7 6.4 17.7 17.6 0 17.7-8.7 28.3-27 28.3h-25.7zm-35.4 0c-22.7 0-34.1-12.7-34.1-31.1 0-13.5 7.6-25.4 19.6-33.3 7-4.7 15.9-7.5 27.8-7.5h2.7c6.5 0 9.3 3.9 9.3 8.5 0 5.9-4.3 11.6-12.8 11.6h-2.8c-6.9 0-10.4 1-13.5 2.7-5.6 3.1-9.8 8.2-9.8 15.4 0 7.5 3.4 13.7 17.4 13.7h2.8c6.8 0 9.6 3.9 9.6 8.4 0 6-4.2 11.6-13.2 11.6z\">");
const Yn = _0x579a07 => (() => {
  const _0x8c21f8 = Bn();
  Y(() => A(_0x8c21f8, "class", _0x579a07?.class));
  return _0x8c21f8;
})();
const qn = _0x29c287 => (() => {
  const _0x5e8a9e = Vn();
  Y(() => A(_0x5e8a9e, "class", _0x29c287?.class));
  return _0x5e8a9e;
})();
const Kn = _0x19adfa => (() => {
  const _0x2d036f = Wn();
  Y(() => A(_0x2d036f, "class", _0x19adfa?.class));
  return _0x2d036f;
})();
const Zn = _0x590ee6 => (() => {
  const _0x422673 = Un();
  Y(() => A(_0x422673, "class", _0x590ee6?.class));
  return _0x422673;
})();
const Gn = W("<div class=\"relative box-border flex items-center justify-center\"><svg class=\"absolute\"><defs><mask><circle cx=\"50%\" cy=\"50%\" stroke=\"black\" fill=\"black\"></circle><circle cx=\"50%\" cy=\"50%\" stroke=\"white\" fill=\"black\"></mask><mask><circle cx=\"50%\" cy=\"50%\" stroke=\"black\" fill=\"black\"></circle><circle cx=\"50%\" cy=\"50%\" stroke=\"white\" fill=\"black\" stroke-linecap=\"square\"></circle><circle class=\"fill-none\" cx=\"50%\" cy=\"50%\" stroke=\"black\" stroke-linecap=\"square\"></mask><filter><feDropShadow dx=\"0\" dy=\"0\" stddeviation=\"8\" flood-opacity=\"0.5\"></defs><circle class=\"fill-none\" cx=\"50%\" cy=\"50%\"></circle><g><circle class=\"fill-none transition-[stroke-dashoffset] duration-100\" cx=\"50%\" cy=\"50%\">");
const Jn = W("<svg><circle cx=\"50%\" cy=\"50%\" stroke=\"black\" fill=\"black\" transform-origin=\"50% 50%\"></svg>", false, true);
const Xn = W("<svg><circle class=\"fill-none\" cx=\"50%\" cy=\"50%\"></svg>", false, true);
const Ie = _0x27f6af => {
  _0x27f6af.outlineWidth = _0x27f6af.outlineWidth || 2;
  _0x27f6af.outlineColor = _0x27f6af.outlineColor || "black";
  const _0x2a95f2 = (100 - _0x27f6af.range) / 100;
  const _0x5432ab = _0x27f6af.size / 2 - _0x27f6af.width / 2 / 2;
  const _0x32c980 = Math.PI * 2 * _0x5432ab;
  const _0x2f8517 = _0x32c980 - _0x32c980 * _0x2a95f2;
  const _0x203962 = () => _0x32c980 - _0x27f6af.value / 100 * _0x32c980;
  const _0x3011fe = () => _0x203962() - _0x203962() * _0x2a95f2;
  const _0xd28dd = _0x27f6af.outline ? _0x27f6af.width / 2 + _0x27f6af.outlineWidth / 2 : _0x27f6af.width / 2;
  return (() => {
    const _0x256f2d = Gn();
    const _0x516885 = _0x256f2d.firstChild;
    const _0x361bb4 = _0x516885.firstChild;
    const _0x5181d7 = _0x361bb4.firstChild;
    const _0x565d98 = _0x5181d7.firstChild;
    const _0x31a90b = _0x565d98.nextSibling;
    const _0x1ff3e1 = _0x5181d7.nextSibling;
    const _0xa91419 = _0x1ff3e1.firstChild;
    const _0x47dbe2 = _0xa91419.nextSibling;
    const _0x1be1ec = _0x47dbe2.nextSibling;
    const _0x101d01 = _0x1ff3e1.nextSibling;
    const _0x5d2dd8 = _0x101d01.firstChild;
    const _0x490e17 = _0x361bb4.nextSibling;
    const _0x21d3d4 = _0x490e17.nextSibling;
    const _0x3121a5 = _0x21d3d4.firstChild;
    A(_0x565d98, "r", _0x5432ab + "rem");
    A(_0x31a90b, "r", _0x5432ab + "rem");
    A(_0x31a90b, "stroke-dasharray", _0x2f8517 + "rem");
    P(_0x5181d7, _0x2a95f2 > 0.5 && (() => {
      const _0x465de5 = Jn();
      A(_0x465de5, "r", _0x5432ab + "rem");
      A(_0x465de5, "stroke-dasharray", _0x32c980 - _0x32c980 * (1 - _0x2a95f2) + "rem");
      A(_0x465de5, "transform", "rotate(" + (360 - _0x2a95f2 * 360) + ")");
      Y(() => A(_0x465de5, "stroke-width", _0x27f6af.width / 2 + 0.1 + "rem"));
      return _0x465de5;
    })(), null);
    A(_0xa91419, "r", _0x5432ab + "rem");
    A(_0xa91419, "stroke-width", _0xd28dd + "rem");
    A(_0x47dbe2, "r", _0x5432ab + "rem");
    A(_0x47dbe2, "stroke-width", _0xd28dd + "rem");
    A(_0x47dbe2, "stroke-dasharray", _0x2f8517 + "rem");
    A(_0x1be1ec, "r", _0x5432ab + "rem");
    A(_0x1be1ec, "stroke-dasharray", _0x2f8517 + "rem");
    P(_0x516885, (() => {
      const _0x241522 = Q(() => !!_0x27f6af.outline);
      return () => _0x241522() && (() => {
        const _0x2b9055 = Xn();
        A(_0x2b9055, "r", _0x5432ab + "rem");
        Y(_0xad34ba => {
          const _0x214eb5 = _0x27f6af.outlineColor;
          const _0x59eab4 = _0x27f6af.width / 2 + _0x27f6af.outlineWidth / 2 + "rem";
          const _0x12a60e = "url(#cut-circle-outline" + _0x27f6af.id + ")";
          if (_0x214eb5 !== _0xad34ba._v$21) {
            if ((_0xad34ba._v$21 = _0x214eb5) != null) {
              _0x2b9055.style.setProperty("stroke", _0x214eb5);
            } else {
              _0x2b9055.style.removeProperty("stroke");
            }
          }
          if (_0x59eab4 !== _0xad34ba._v$22) {
            A(_0x2b9055, "stroke-width", _0xad34ba._v$22 = _0x59eab4);
          }
          if (_0x12a60e !== _0xad34ba._v$23) {
            A(_0x2b9055, "mask", _0xad34ba._v$23 = _0x12a60e);
          }
          return _0xad34ba;
        }, {
          _v$21: undefined,
          _v$22: undefined,
          _v$23: undefined
        });
        return _0x2b9055;
      })();
    })(), _0x490e17);
    A(_0x490e17, "r", _0x5432ab + "rem");
    A(_0x3121a5, "r", _0x5432ab + "rem");
    A(_0x3121a5, "stroke-dasharray", _0x2f8517 + "rem");
    Y(_0x3e9b82 => {
      const _0x14fa87 = _0x27f6af.size + _0x27f6af.outlineWidth + "rem";
      const _0x5c4d4f = _0x27f6af.size + _0x27f6af.outlineWidth + "rem";
      const _0x2637fa = "rotate(" + _0x27f6af.rotate + "deg)";
      const _0x5093a3 = _0x27f6af.size + _0x27f6af.outlineWidth + "rem";
      const _0x341160 = _0x27f6af.size + _0x27f6af.outlineWidth + "rem";
      const _0x1eef12 = "cut-circle" + _0x27f6af.id;
      const _0x546392 = _0x27f6af.width / 2 + "rem";
      const _0x18b868 = _0x27f6af.width / 2 + "rem";
      const _0x585041 = "cut-circle-outline" + _0x27f6af.id;
      const _0x2eb77b = _0x27f6af.width / 2 + _0x27f6af.outlineWidth / 4 + "rem";
      const _0x2294f8 = "dropShadow" + _0x27f6af.id;
      const _0x3a3a5c = _0x27f6af.color;
      const _0xc67252 = _0x27f6af.bgColor;
      const _0x899fe2 = _0x27f6af.width / 2 - 0.1 + "rem";
      const _0x485e44 = "url(#cut-circle" + _0x27f6af.id + ")";
      const _0x4a1ce8 = "" + (_0x27f6af.glow ? "url(#dropShadow" + _0x27f6af.id + ")" : "");
      const _0x5d1e0b = _0x27f6af.color;
      const _0x176ae4 = _0x27f6af.width / 2 + "rem";
      const _0x4f7363 = _0x3011fe() + "rem";
      const _0x4d25cd = "url(#cut-circle" + _0x27f6af.id + ")";
      if (_0x14fa87 !== _0x3e9b82._v$) {
        if ((_0x3e9b82._v$ = _0x14fa87) != null) {
          _0x256f2d.style.setProperty("width", _0x14fa87);
        } else {
          _0x256f2d.style.removeProperty("width");
        }
      }
      if (_0x5c4d4f !== _0x3e9b82._v$2) {
        if ((_0x3e9b82._v$2 = _0x5c4d4f) != null) {
          _0x256f2d.style.setProperty("height", _0x5c4d4f);
        } else {
          _0x256f2d.style.removeProperty("height");
        }
      }
      if (_0x2637fa !== _0x3e9b82._v$3) {
        if ((_0x3e9b82._v$3 = _0x2637fa) != null) {
          _0x256f2d.style.setProperty("transform", _0x2637fa);
        } else {
          _0x256f2d.style.removeProperty("transform");
        }
      }
      if (_0x5093a3 !== _0x3e9b82._v$4) {
        A(_0x516885, "width", _0x3e9b82._v$4 = _0x5093a3);
      }
      if (_0x341160 !== _0x3e9b82._v$5) {
        A(_0x516885, "height", _0x3e9b82._v$5 = _0x341160);
      }
      if (_0x1eef12 !== _0x3e9b82._v$6) {
        A(_0x5181d7, "id", _0x3e9b82._v$6 = _0x1eef12);
      }
      if (_0x546392 !== _0x3e9b82._v$7) {
        A(_0x565d98, "stroke-width", _0x3e9b82._v$7 = _0x546392);
      }
      if (_0x18b868 !== _0x3e9b82._v$8) {
        A(_0x31a90b, "stroke-width", _0x3e9b82._v$8 = _0x18b868);
      }
      if (_0x585041 !== _0x3e9b82._v$9) {
        A(_0x1ff3e1, "id", _0x3e9b82._v$9 = _0x585041);
      }
      if (_0x2eb77b !== _0x3e9b82._v$10) {
        A(_0x1be1ec, "stroke-width", _0x3e9b82._v$10 = _0x2eb77b);
      }
      if (_0x2294f8 !== _0x3e9b82._v$11) {
        A(_0x101d01, "id", _0x3e9b82._v$11 = _0x2294f8);
      }
      if (_0x3a3a5c !== _0x3e9b82._v$12) {
        A(_0x5d2dd8, "flood-color", _0x3e9b82._v$12 = _0x3a3a5c);
      }
      if (_0xc67252 !== _0x3e9b82._v$13) {
        if ((_0x3e9b82._v$13 = _0xc67252) != null) {
          _0x490e17.style.setProperty("stroke", _0xc67252);
        } else {
          _0x490e17.style.removeProperty("stroke");
        }
      }
      if (_0x899fe2 !== _0x3e9b82._v$14) {
        A(_0x490e17, "stroke-width", _0x3e9b82._v$14 = _0x899fe2);
      }
      if (_0x485e44 !== _0x3e9b82._v$15) {
        A(_0x490e17, "mask", _0x3e9b82._v$15 = _0x485e44);
      }
      if (_0x4a1ce8 !== _0x3e9b82._v$16) {
        A(_0x21d3d4, "filter", _0x3e9b82._v$16 = _0x4a1ce8);
      }
      if (_0x5d1e0b !== _0x3e9b82._v$17) {
        if ((_0x3e9b82._v$17 = _0x5d1e0b) != null) {
          _0x3121a5.style.setProperty("stroke", _0x5d1e0b);
        } else {
          _0x3121a5.style.removeProperty("stroke");
        }
      }
      if (_0x176ae4 !== _0x3e9b82._v$18) {
        A(_0x3121a5, "stroke-width", _0x3e9b82._v$18 = _0x176ae4);
      }
      if (_0x4f7363 !== _0x3e9b82._v$19) {
        A(_0x3121a5, "stroke-dashoffset", _0x3e9b82._v$19 = _0x4f7363);
      }
      if (_0x4d25cd !== _0x3e9b82._v$20) {
        A(_0x3121a5, "mask", _0x3e9b82._v$20 = _0x4d25cd);
      }
      return _0x3e9b82;
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
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined,
      _v$20: undefined
    });
    return _0x256f2d;
  })();
};
const Qn = W("<div class=\"absolute flex items-center justify-center\">");
const ei = W("<div><div></div><div></div><div></div><div>");
const ti = W("<div class=\"relative flex flex-col items-center justify-center\"><div class=\"absolute -bottom-6 right-0 flex items-center justify-center\"><div class=\"absolute flex items-center justify-center\"></div><div class=\"absolute flex flex-col items-center justify-center\"><div class=\"rouned-sm flex items-center justify-start\"><div>MPH</div></div><div class=\" flex flex-col items-center justify-start\"><div><div></div><div></div><div></div></div><div><div class=\"absolute -left-6\"><div class=\"flex w-2 items-end\"><div class=\"transition-height w-full\"></div></div></div><div class=\"absolute -left-10\"><div class=\"flex w-2 items-end\"><div class=\"transition-height w-full\"></div></div></div></div></div></div><div class=\"absolute -bottom-2\">");
function ni() {
  const {
    vehicleData: _0x156100
  } = ye();
  const _0x1c24bd = () => _0x156100.speedometer?.gearbox?.rpm.actual * 100;
  const _0x5baf80 = () => {
    const _0x105d7d = _0x156100.speedometer?.gearbox?.rpm.actual;
    if (_0x105d7d > 0.8 && _0x105d7d < 0.95) {
      return "#faff3c";
    } else if (_0x105d7d > 0.95) {
      return "#c92626";
    } else {
      return "#00F8B9";
    }
  };
  const _0x2f58b5 = () => _0x156100.speedometer?.gearbox?.rpm.actual > 0.95 ? "#c92626d7" : "#05141fd7";
  const _0x4221b0 = Q(() => _0x156100.speedometer?.speed.actual ? _0x156100.speedometer?.speed.actual.toString().padStart(3, "0") : "000");
  const _0x292094 = (_0x2cc654, _0x52dde0) => _0x156100.speedometer?.speed.actual < 100 && _0x52dde0 !== 2 && _0x2cc654[_0x52dde0] === "0" ? "#ffffff79" : "#fff";
  const _0x35aa57 = () => _0x156100.speedometer?.turbo.actual / _0x156100.speedometer?.turbo.max * 100;
  const _0x58886d = () => _0x156100.speedometer?.fuel.actual / _0x156100.speedometer?.fuel.max * 100;
  return (() => {
    const _0xbfb951 = ti();
    const _0x2b4be6 = _0xbfb951.firstChild;
    const _0x4efc62 = _0x2b4be6.firstChild;
    const _0x1713c0 = _0x4efc62.nextSibling;
    const _0x231f8b = _0x1713c0.firstChild;
    const _0x28fa94 = _0x231f8b.firstChild;
    const _0x1a4a34 = _0x231f8b.nextSibling;
    const _0x152127 = _0x1a4a34.firstChild;
    const _0x23dfaf = _0x152127.firstChild;
    const _0x127c35 = _0x23dfaf.nextSibling;
    const _0x4d2eff = _0x127c35.nextSibling;
    const _0x324543 = _0x152127.nextSibling;
    const _0x353616 = _0x324543.firstChild;
    const _0x329c20 = _0x353616.firstChild;
    const _0x20228c = _0x329c20.firstChild;
    const _0x218dcb = _0x353616.nextSibling;
    const _0x17dd4a = _0x218dcb.firstChild;
    const _0x2a4c67 = _0x17dd4a.firstChild;
    const _0x19c95d = _0x1713c0.nextSibling;
    _0x2b4be6.style.setProperty("width", "18rem");
    _0x2b4be6.style.setProperty("height", "18rem");
    P(_0x2b4be6, R(Ie, {
      id: "rpm",
      size: 18,
      width: 1.5,
      get color() {
        return _0x5baf80();
      },
      bgColor: "#00000000",
      get value() {
        return _0x1c24bd();
      },
      range: 72.5,
      rotate: 140,
      outline: false,
      glow: false
    }), _0x4efc62);
    P(_0x4efc62, R(Ie, {
      id: "white-inner",
      size: 16.5,
      width: 0.5,
      color: "#fff",
      bgColor: "#00000000",
      value: 100,
      range: 72.5,
      rotate: 140,
      outline: false
    }));
    P(_0x2b4be6, R(ve, {
      get when() {
        return _0x156100.speedometer?.nitro.actual > 0;
      },
      get children() {
        const _0x43ac29 = Qn();
        P(_0x43ac29, R(Ie, {
          id: "nos",
          size: 20,
          width: 1.5,
          color: "#46a6ff",
          bgColor: "#ffffff79",
          get value() {
            return _0x156100.speedometer?.nitro.actual * 100;
          },
          range: 20,
          rotate: 140,
          outline: false,
          glow: false
        }));
        return _0x43ac29;
      }
    }), _0x1713c0);
    P(_0x23dfaf, () => _0x4221b0()[0]);
    P(_0x127c35, () => _0x4221b0()[1]);
    P(_0x4d2eff, () => _0x4221b0()[2]);
    _0x324543.style.setProperty("position", "relative");
    P(_0x324543, () => _0x156100.speedometer?.gearbox.gear.actual || "R", _0x353616);
    _0x329c20.style.setProperty("height", "3rem");
    _0x329c20.style.setProperty("background-color", "rgba(0,0,0,0.5)");
    _0x20228c.style.setProperty("background-color", "#B3ED90");
    _0x17dd4a.style.setProperty("height", "3rem");
    _0x17dd4a.style.setProperty("background-color", "rgba(0,0,0,0.5)");
    _0x2a4c67.style.setProperty("background-color", "#B990ED");
    P(_0x19c95d, R(ve, {
      get when() {
        return _0x156100.speedometer?.hasAssists;
      },
      get children() {
        const _0x3f1bda = ei();
        const _0x2dbb10 = _0x3f1bda.firstChild;
        const _0xb438e3 = _0x2dbb10.nextSibling;
        const _0x172670 = _0xb438e3.nextSibling;
        const _0x16e7b4 = _0x172670.nextSibling;
        P(_0x2dbb10, R(Kn, {
          class: "w-7 drop-shadow-md"
        }));
        P(_0xb438e3, R(Zn, {
          class: "w-7 drop-shadow-md"
        }));
        P(_0x172670, R(Yn, {
          class: "w-7 drop-shadow-md"
        }));
        P(_0x16e7b4, R(qn, {
          class: "w-7 drop-shadow-md"
        }));
        Y(_0x52fd4c => {
          const _0x5dc245 = fe.assists;
          const _0x245427 = _0x156100.speedometer?.stabilityControl ? "#ffffff79" : "#ef4444";
          const _0x7dc0fd = _0x156100.speedometer?.tractionControl ? "#ffffff79" : "#ef4444";
          const _0x272820 = _0x156100.speedometer?.gearLock && _0x156100.speedometer?.isAuto ? "#16a34a" : "#ffffff79";
          const _0x4e34ad = _0x156100.speedometer?.launchControl && _0x156100.speedometer?.hasLaunchControl ? "#16a34a" : "#ffffff79";
          if (_0x5dc245 !== _0x52fd4c._v$) {
            O(_0x3f1bda, _0x52fd4c._v$ = _0x5dc245);
          }
          if (_0x245427 !== _0x52fd4c._v$2) {
            if ((_0x52fd4c._v$2 = _0x245427) != null) {
              _0x2dbb10.style.setProperty("color", _0x245427);
            } else {
              _0x2dbb10.style.removeProperty("color");
            }
          }
          if (_0x7dc0fd !== _0x52fd4c._v$3) {
            if ((_0x52fd4c._v$3 = _0x7dc0fd) != null) {
              _0xb438e3.style.setProperty("color", _0x7dc0fd);
            } else {
              _0xb438e3.style.removeProperty("color");
            }
          }
          if (_0x272820 !== _0x52fd4c._v$4) {
            if ((_0x52fd4c._v$4 = _0x272820) != null) {
              _0x172670.style.setProperty("color", _0x272820);
            } else {
              _0x172670.style.removeProperty("color");
            }
          }
          if (_0x4e34ad !== _0x52fd4c._v$5) {
            if ((_0x52fd4c._v$5 = _0x4e34ad) != null) {
              _0x16e7b4.style.setProperty("color", _0x4e34ad);
            } else {
              _0x16e7b4.style.removeProperty("color");
            }
          }
          return _0x52fd4c;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined
        });
        return _0x3f1bda;
      }
    }));
    Y(_0x571c54 => {
      const _0x229a3f = fe.mph;
      const _0x7ccab8 = fe.speed;
      const _0xd70438 = fe.speedNumber;
      const _0x268b7c = _0x292094(_0x4221b0(), 0);
      const _0x52bb04 = fe.speedNumber;
      const _0x1afa55 = _0x292094(_0x4221b0(), 1);
      const _0x148987 = fe.speedNumber;
      const _0x1e0166 = _0x292094(_0x4221b0(), 2);
      const _0xa05da5 = fe.gear;
      const _0x2781fa = _0x2f58b5();
      const _0x503c13 = _0x156100.speedometer?.gearbox?.rpm.actual > 0.95 ? "drop-shadow(0px 0px 8px #c92626)" : "";
      const _0x3e554b = _0x58886d() + "%";
      const _0xeab24b = _0x35aa57() + "%";
      if (_0x229a3f !== _0x571c54._v$6) {
        O(_0x28fa94, _0x571c54._v$6 = _0x229a3f);
      }
      if (_0x7ccab8 !== _0x571c54._v$7) {
        O(_0x152127, _0x571c54._v$7 = _0x7ccab8);
      }
      if (_0xd70438 !== _0x571c54._v$8) {
        O(_0x23dfaf, _0x571c54._v$8 = _0xd70438);
      }
      if (_0x268b7c !== _0x571c54._v$9) {
        if ((_0x571c54._v$9 = _0x268b7c) != null) {
          _0x23dfaf.style.setProperty("color", _0x268b7c);
        } else {
          _0x23dfaf.style.removeProperty("color");
        }
      }
      if (_0x52bb04 !== _0x571c54._v$10) {
        O(_0x127c35, _0x571c54._v$10 = _0x52bb04);
      }
      if (_0x1afa55 !== _0x571c54._v$11) {
        if ((_0x571c54._v$11 = _0x1afa55) != null) {
          _0x127c35.style.setProperty("color", _0x1afa55);
        } else {
          _0x127c35.style.removeProperty("color");
        }
      }
      if (_0x148987 !== _0x571c54._v$12) {
        O(_0x4d2eff, _0x571c54._v$12 = _0x148987);
      }
      if (_0x1e0166 !== _0x571c54._v$13) {
        if ((_0x571c54._v$13 = _0x1e0166) != null) {
          _0x4d2eff.style.setProperty("color", _0x1e0166);
        } else {
          _0x4d2eff.style.removeProperty("color");
        }
      }
      if (_0xa05da5 !== _0x571c54._v$14) {
        O(_0x324543, _0x571c54._v$14 = _0xa05da5);
      }
      if (_0x2781fa !== _0x571c54._v$15) {
        if ((_0x571c54._v$15 = _0x2781fa) != null) {
          _0x324543.style.setProperty("background", _0x2781fa);
        } else {
          _0x324543.style.removeProperty("background");
        }
      }
      if (_0x503c13 !== _0x571c54._v$16) {
        if ((_0x571c54._v$16 = _0x503c13) != null) {
          _0x324543.style.setProperty("filter", _0x503c13);
        } else {
          _0x324543.style.removeProperty("filter");
        }
      }
      if (_0x3e554b !== _0x571c54._v$17) {
        if ((_0x571c54._v$17 = _0x3e554b) != null) {
          _0x20228c.style.setProperty("height", _0x3e554b);
        } else {
          _0x20228c.style.removeProperty("height");
        }
      }
      if (_0xeab24b !== _0x571c54._v$18) {
        if ((_0x571c54._v$18 = _0xeab24b) != null) {
          _0x2a4c67.style.setProperty("height", _0xeab24b);
        } else {
          _0x2a4c67.style.removeProperty("height");
        }
      }
      return _0x571c54;
    }, {
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
      _v$18: undefined
    });
    return _0xbfb951;
  })();
}
var ii = () => {};
var tt = (_0xba56c, _0x5a23ed) => _0x5a23ed();
function ri(_0x12604f, _0x56e382) {
  const _0x13ccac = ne(_0x12604f);
  const _0x43cef0 = _0x13ccac ? [_0x13ccac] : [];
  const {
    onEnter: _0x19f6a9 = tt,
    onExit: _0x3d7a63 = tt
  } = _0x56e382;
  const [_0x1307c4, _0x4ebe5f] = K(_0x56e382.appear ? [] : _0x43cef0);
  const [_0x4d9396] = St();
  let _0x1ff21f;
  let _0x42f778 = false;
  function _0x5f3fc5(_0x3464cf, _0x23ef9f) {
    if (!_0x3464cf) {
      return _0x23ef9f && _0x23ef9f();
    }
    _0x42f778 = true;
    _0x3d7a63(_0x3464cf, () => {
      Be(() => {
        _0x42f778 = false;
        _0x4ebe5f(_0x3a1069 => _0x3a1069.filter(_0x168624 => _0x168624 !== _0x3464cf));
        if (_0x23ef9f) {
          _0x23ef9f();
        }
      });
    });
  }
  function _0x791b7c(_0x3ec61e) {
    const _0x1ca6c2 = _0x1ff21f;
    if (!_0x1ca6c2) {
      return _0x3ec61e && _0x3ec61e();
    }
    _0x1ff21f = undefined;
    _0x4ebe5f(_0x9c6c53 => [_0x1ca6c2, ..._0x9c6c53]);
    _0x19f6a9(_0x1ca6c2, _0x3ec61e ?? ii);
  }
  const _0xb81dbb = _0x56e382.mode === "out-in" ? _0x4a39f5 => _0x42f778 || _0x5f3fc5(_0x4a39f5, _0x791b7c) : _0x56e382.mode === "in-out" ? _0x46bfff => _0x791b7c(() => _0x5f3fc5(_0x46bfff)) : _0x390e30 => {
    _0x5f3fc5(_0x390e30);
    _0x791b7c();
  };
  Ct(_0x52e39a => {
    const _0x909033 = _0x12604f();
    if (ne(_0x4d9396)) {
      _0x4d9396();
      return _0x52e39a;
    } else {
      if (_0x909033 !== _0x52e39a) {
        _0x1ff21f = _0x909033;
        Be(() => ne(() => _0xb81dbb(_0x52e39a)));
      }
      return _0x909033;
    }
  }, _0x56e382.appear ? undefined : _0x13ccac);
  return _0x1307c4;
}
var nt = _0x33debd => _0x33debd instanceof Element;
function qe(_0x3efe7a, _0x336dd9) {
  if (_0x336dd9(_0x3efe7a)) {
    return _0x3efe7a;
  }
  if (typeof _0x3efe7a == "function" && !_0x3efe7a.length) {
    return qe(_0x3efe7a(), _0x336dd9);
  }
  if (Array.isArray(_0x3efe7a)) {
    for (const _0x5881d8 of _0x3efe7a) {
      const _0x19e3a4 = qe(_0x5881d8, _0x336dd9);
      if (_0x19e3a4) {
        return _0x19e3a4;
      }
    }
  }
  return null;
}
function si(_0x51c7fa, _0xd33dbb = nt, _0x58e4e5 = nt) {
  const _0x21f2b9 = Q(_0x51c7fa);
  return Q(() => qe(_0x21f2b9(), _0xd33dbb));
}
function li(_0x262716) {
  return Q(() => {
    const _0x244b3c = _0x262716.name || "s";
    return {
      enterActive: (_0x262716.enterActiveClass || _0x244b3c + "-enter-active").split(" "),
      enter: (_0x262716.enterClass || _0x244b3c + "-enter").split(" "),
      enterTo: (_0x262716.enterToClass || _0x244b3c + "-enter-to").split(" "),
      exitActive: (_0x262716.exitActiveClass || _0x244b3c + "-exit-active").split(" "),
      exit: (_0x262716.exitClass || _0x244b3c + "-exit").split(" "),
      exitTo: (_0x262716.exitToClass || _0x244b3c + "-exit-to").split(" "),
      move: (_0x262716.moveClass || _0x244b3c + "-move").split(" ")
    };
  });
}
function bt(_0x387d5d) {
  requestAnimationFrame(() => requestAnimationFrame(_0x387d5d));
}
function oi(_0x1934ff, _0xe4b027, _0xa3ba0b, _0xa82b92) {
  const {
    onBeforeEnter: _0x1f809c,
    onEnter: _0x22b491,
    onAfterEnter: _0xf8e3aa
  } = _0xe4b027;
  _0x1f809c?.(_0xa3ba0b);
  _0xa3ba0b.classList.add(..._0x1934ff.enter);
  _0xa3ba0b.classList.add(..._0x1934ff.enterActive);
  queueMicrotask(() => {
    if (!_0xa3ba0b.parentNode) {
      return _0xa82b92?.();
    }
    _0x22b491?.(_0xa3ba0b, () => _0x1cd13b());
  });
  bt(() => {
    _0xa3ba0b.classList.remove(..._0x1934ff.enter);
    _0xa3ba0b.classList.add(..._0x1934ff.enterTo);
    if (!_0x22b491 || _0x22b491.length < 2) {
      _0xa3ba0b.addEventListener("transitionend", _0x1cd13b);
      _0xa3ba0b.addEventListener("animationend", _0x1cd13b);
    }
  });
  function _0x1cd13b(_0x551d85) {
    if (!_0x551d85 || _0x551d85.target === _0xa3ba0b) {
      _0xa82b92?.();
      _0xa3ba0b.removeEventListener("transitionend", _0x1cd13b);
      _0xa3ba0b.removeEventListener("animationend", _0x1cd13b);
      _0xa3ba0b.classList.remove(..._0x1934ff.enterActive);
      _0xa3ba0b.classList.remove(..._0x1934ff.enterTo);
      _0xf8e3aa?.(_0xa3ba0b);
    }
  }
}
function ci(_0x2b480d, _0x24102c, _0x365abb, _0x2ff11d) {
  const {
    onBeforeExit: _0x2691b3,
    onExit: _0x9b63c4,
    onAfterExit: _0x17b2f7
  } = _0x24102c;
  if (!_0x365abb.parentNode) {
    return _0x2ff11d?.();
  }
  _0x2691b3?.(_0x365abb);
  _0x365abb.classList.add(..._0x2b480d.exit);
  _0x365abb.classList.add(..._0x2b480d.exitActive);
  _0x9b63c4?.(_0x365abb, () => _0xa08d07());
  bt(() => {
    _0x365abb.classList.remove(..._0x2b480d.exit);
    _0x365abb.classList.add(..._0x2b480d.exitTo);
    if (!_0x9b63c4 || _0x9b63c4.length < 2) {
      _0x365abb.addEventListener("transitionend", _0xa08d07);
      _0x365abb.addEventListener("animationend", _0xa08d07);
    }
  });
  function _0xa08d07(_0x4bbb94) {
    if (!_0x4bbb94 || _0x4bbb94.target === _0x365abb) {
      _0x2ff11d?.();
      _0x365abb.removeEventListener("transitionend", _0xa08d07);
      _0x365abb.removeEventListener("animationend", _0xa08d07);
      _0x365abb.classList.remove(..._0x2b480d.exitActive);
      _0x365abb.classList.remove(..._0x2b480d.exitTo);
      _0x17b2f7?.(_0x365abb);
    }
  }
}
var ai = {
  inout: "in-out",
  outin: "out-in"
};
var it = _0xff7b2b => {
  const _0x241c02 = li(_0xff7b2b);
  return ri(si(() => _0xff7b2b.children), {
    mode: ai[_0xff7b2b.mode],
    appear: _0xff7b2b.appear,
    onEnter(_0x2aa94b, _0x4193b6) {
      oi(_0x241c02(), _0xff7b2b, _0x2aa94b, _0x4193b6);
    },
    onExit(_0x43400a, _0x323007) {
      ci(_0x241c02(), _0xff7b2b, _0x43400a, _0x323007);
    }
  });
};
const ui = "_container_ig8tn_1";
const fi = "_line_ig8tn_9";
const di = "_box_ig8tn_15";
const vi = "_title_ig8tn_25";
const hi = "_times_ig8tn_34";
const _i = "_text_ig8tn_38";
const mi = "_active_ig8tn_52";
const $i = "_pos_ig8tn_55";
const gi = "_neg_ig8tn_58";
const de = {
  container: ui,
  line: fi,
  box: di,
  title: vi,
  times: hi,
  text: _i,
  active: mi,
  pos: $i,
  neg: gi
};
const yi = W("<div class=\"absolute top-0 mt-[4.5vh] flex w-full flex-col items-center justify-start\"><div><div></div><div><div>Drift Score</div></div><div><div></div><div>X");
const bi = () => {
  const {
    raceData: _0x38ee95
  } = ye();
  return (() => {
    const _0x51999b = yi();
    const _0x475daf = _0x51999b.firstChild;
    const _0xbcdda5 = _0x475daf.firstChild;
    const _0x526313 = _0xbcdda5.nextSibling;
    const _0x1bf6ef = _0x526313.firstChild;
    const _0x53b0df = _0x526313.nextSibling;
    const _0x555b5a = _0x53b0df.firstChild;
    const _0x1e8d4f = _0x555b5a.nextSibling;
    const _0x526d34 = _0x1e8d4f.firstChild;
    P(_0x555b5a, () => Math.round(_0x38ee95.drift.driftPoints));
    P(_0x1e8d4f, () => parseFloat(_0x38ee95.drift.driftMultiplier.toFixed(1)), _0x526d34);
    Y(_0x49a9c5 => {
      const _0x9669eb = de.container;
      const _0x473b0d = de.line;
      const _0x3bee8f = de.box;
      const _0x470a11 = de.title;
      const _0x2522a4 = de.times + " gap-[0.6vh]";
      const _0x2a9323 = de.text + " w-40 !text-right";
      const _0x230299 = de.text;
      if (_0x9669eb !== _0x49a9c5._v$) {
        O(_0x475daf, _0x49a9c5._v$ = _0x9669eb);
      }
      if (_0x473b0d !== _0x49a9c5._v$2) {
        O(_0xbcdda5, _0x49a9c5._v$2 = _0x473b0d);
      }
      if (_0x3bee8f !== _0x49a9c5._v$3) {
        O(_0x526313, _0x49a9c5._v$3 = _0x3bee8f);
      }
      if (_0x470a11 !== _0x49a9c5._v$4) {
        O(_0x1bf6ef, _0x49a9c5._v$4 = _0x470a11);
      }
      if (_0x2522a4 !== _0x49a9c5._v$5) {
        O(_0x53b0df, _0x49a9c5._v$5 = _0x2522a4);
      }
      if (_0x2a9323 !== _0x49a9c5._v$6) {
        O(_0x555b5a, _0x49a9c5._v$6 = _0x2a9323);
      }
      if (_0x230299 !== _0x49a9c5._v$7) {
        O(_0x1e8d4f, _0x49a9c5._v$7 = _0x230299);
      }
      return _0x49a9c5;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0x51999b;
  })();
};
const wi = W("<div class=\"mt-[4.6vh] flex w-full flex-row items-start justify-between\">");
const xi = W("<div><div class=\"flex w-full flex-col items-end justify-center gap-[2.5vh] p-[4.6vh]\"><div class=\"flex flex-row items-center justify-end\">");
function Ci() {
  const {
    raceData: _0x24afec,
    setRaceData: _0x2a9be0,
    vehicleData: _0xac300d,
    setVehicleData: _0x102684
  } = ye();
  lt(() => {
    const _0x1c0bc5 = _0x200de7 => {
      const _0x52ae53 = _0x200de7.data;
      if (_0x52ae53.type === "initRacingData") {
        _0x2a9be0(_0x508597 => ({
          ..._0x508597,
          curRace: _0x52ae53.data
        }));
      }
      if (_0x52ae53.type === "updateRacingData") {
        if (_0x52ae53.data.show === false) {
          _0x2a9be0({
            show: false,
            started: false,
            curRace: undefined,
            bestLapTime: 0,
            checkpoint: 1,
            additionalLapTime: 0,
            additionalTotalTime: 0,
            finished: 0,
            dnf: false,
            dnfTime: 0,
            lap: 1,
            updateLap: 0,
            sectionTimes: [],
            sectionEndTimeStamp: 0,
            playerDeltas: [],
            drift: {
              driftPoints: 0,
              driftMultiplier: 0
            }
          });
        } else {
          _0x2a9be0(_0x440f21 => ({
            ..._0x440f21,
            ..._0x52ae53.data
          }));
        }
      }
      if (_0x52ae53.type === "updateVehicleData") {
        _0x102684(_0x34163f => ({
          ..._0x34163f,
          ..._0x52ae53.data
        }));
      }
    };
    window.addEventListener("message", _0x1c0bc5);
    Ze(() => {
      window.removeEventListener("message", _0x1c0bc5);
    });
  });
  return R(it, {
    name: "fade",
    get children() {
      return R(ve, {
        get when() {
          return _0x24afec.show;
        },
        get children() {
          const _0x2cdbaf = xi();
          const _0x458d45 = _0x2cdbaf.firstChild;
          const _0x518469 = _0x458d45.firstChild;
          P(_0x2cdbaf, R(it, {
            name: "fade",
            get children() {
              const _0x4897f7 = wi();
              P(_0x4897f7, R(ve, {
                get when() {
                  return _0x24afec.started;
                },
                get children() {
                  return [R(an, {}), R(ve, {
                    get when() {
                      return !_0x24afec.curRace.driftMode;
                    },
                    get children() {
                      return R(kn, {});
                    }
                  }), R(ve, {
                    get when() {
                      return _0x24afec.curRace.driftMode;
                    },
                    get children() {
                      return R(bi, {});
                    }
                  }), R(bn, {})];
                }
              }));
              return _0x4897f7;
            }
          }), _0x458d45);
          P(_0x518469, R(ni, {}));
          Y(() => O(_0x2cdbaf, zt.App));
          return _0x2cdbaf;
        }
      });
    }
  });
}
Rt(() => R(rn, {
  get children() {
    return R(Ci, {});
  }
}), document.getElementById("root"));