import './style.css';
(function () {
  const _0x53ab6f = document.createElement("link").relList;
  if (_0x53ab6f && _0x53ab6f.supports && _0x53ab6f.supports("modulepreload")) {
    return;
  }
  for (const _0x414eac of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x56cb31(_0x414eac);
  }
  new MutationObserver(_0xd709d0 => {
    for (const _0xa425e5 of _0xd709d0) {
      if (_0xa425e5.type === "childList") {
        for (const _0x5b0c7b of _0xa425e5.addedNodes) {
          if (_0x5b0c7b.tagName === "LINK" && _0x5b0c7b.rel === "modulepreload") {
            _0x56cb31(_0x5b0c7b);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x287487(_0x48df43) {
    const _0x3c6ac7 = {};
    if (_0x48df43.integrity) {
      _0x3c6ac7.integrity = _0x48df43.integrity;
    }
    if (_0x48df43.referrerPolicy) {
      _0x3c6ac7.referrerPolicy = _0x48df43.referrerPolicy;
    }
    if (_0x48df43.crossOrigin === "use-credentials") {
      _0x3c6ac7.credentials = "include";
    } else if (_0x48df43.crossOrigin === "anonymous") {
      _0x3c6ac7.credentials = "omit";
    } else {
      _0x3c6ac7.credentials = "same-origin";
    }
    return _0x3c6ac7;
  }
  function _0x56cb31(_0x8118a4) {
    if (_0x8118a4.ep) {
      return;
    }
    _0x8118a4.ep = true;
    const _0x831c93 = _0x287487(_0x8118a4);
    fetch(_0x8118a4.href, _0x831c93);
  }
})();
const xe = (_0x1c953b, _0x2d61a4) => _0x1c953b === _0x2d61a4;
const Ae = Symbol("solid-track");
const W = {
  equals: xe
};
let ge = me;
const P = 1;
const X = 2;
const pe = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var _ = null;
let te = null;
let p = null;
let m = null;
let E = null;
let z = 0;
function H(_0x588b04, _0x558c5f) {
  const _0x14b2d1 = p;
  const _0x4530ca = _;
  const _0x4e569c = _0x588b04.length === 0;
  const _0x14d7b0 = _0x4e569c ? pe : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x558c5f === undefined ? _0x4530ca : _0x558c5f
  };
  const _0x2339ed = _0x4e569c ? _0x588b04 : () => _0x588b04(() => N(() => ee(_0x14d7b0)));
  _ = _0x14d7b0;
  p = null;
  try {
    return R(_0x2339ed, true);
  } finally {
    p = _0x14b2d1;
    _ = _0x4530ca;
  }
}
function Q(_0xd545a8, _0x282f6b) {
  _0x282f6b = _0x282f6b ? Object.assign({}, W, _0x282f6b) : W;
  const _0x1d5d84 = {
    value: _0xd545a8,
    observers: null,
    observerSlots: null,
    comparator: _0x282f6b.equals || undefined
  };
  const _0x302ffd = _0x2b2f45 => {
    if (typeof _0x2b2f45 == "function") {
      _0x2b2f45 = _0x2b2f45(_0x1d5d84.value);
    }
    return _e(_0x1d5d84, _0x2b2f45);
  };
  return [ve.bind(_0x1d5d84), _0x302ffd];
}
function I(_0xad2be2, _0x2feaca, _0x457ebc) {
  const _0x1ac8d1 = oe(_0xad2be2, _0x2feaca, false, P);
  D(_0x1ac8d1);
}
function Se(_0x1b9ccf, _0x2445e6, _0x14db50) {
  ge = Te;
  const _0x1d569d = oe(_0x1b9ccf, _0x2445e6, false, P);
  if (!_0x14db50 || !_0x14db50.render) {
    _0x1d569d.user = true;
  }
  if (E) {
    E.push(_0x1d569d);
  } else {
    D(_0x1d569d);
  }
}
function Ce(_0x5118ff, _0x11e91d, _0xa1ffc7) {
  _0xa1ffc7 = _0xa1ffc7 ? Object.assign({}, W, _0xa1ffc7) : W;
  const _0x296137 = oe(_0x5118ff, _0x11e91d, true, 0);
  _0x296137.observers = null;
  _0x296137.observerSlots = null;
  _0x296137.comparator = _0xa1ffc7.equals || undefined;
  D(_0x296137);
  return ve.bind(_0x296137);
}
function N(_0x5e15a6) {
  if (p === null) {
    return _0x5e15a6();
  }
  const _0x5e384e = p;
  p = null;
  try {
    return _0x5e15a6();
  } finally {
    p = _0x5e384e;
  }
}
function ce(_0x19a3ca) {
  Se(() => N(_0x19a3ca));
}
function Ee(_0x1fd60f) {
  if (_ !== null) {
    if (_.cleanups === null) {
      _.cleanups = [_0x1fd60f];
    } else {
      _.cleanups.push(_0x1fd60f);
    }
  }
  return _0x1fd60f;
}
function ve() {
  if (this.sources && this.state) {
    if (this.state === P) {
      D(this);
    } else {
      const _0xa6705b = m;
      m = null;
      R(() => Y(this), false);
      m = _0xa6705b;
    }
  }
  if (p) {
    const _0x3c2ef0 = this.observers ? this.observers.length : 0;
    if (p.sources) {
      p.sources.push(this);
      p.sourceSlots.push(_0x3c2ef0);
    } else {
      p.sources = [this];
      p.sourceSlots = [_0x3c2ef0];
    }
    if (this.observers) {
      this.observers.push(p);
      this.observerSlots.push(p.sources.length - 1);
    } else {
      this.observers = [p];
      this.observerSlots = [p.sources.length - 1];
    }
  }
  return this.value;
}
function _e(_0x993d3b, _0x55089d, _0xf0faa3) {
  let _0x236811 = _0x993d3b.value;
  if (!_0x993d3b.comparator || !_0x993d3b.comparator(_0x236811, _0x55089d)) {
    _0x993d3b.value = _0x55089d;
    if (_0x993d3b.observers && _0x993d3b.observers.length) {
      R(() => {
        for (let _0x3e9bcb = 0; _0x3e9bcb < _0x993d3b.observers.length; _0x3e9bcb += 1) {
          const _0x478629 = _0x993d3b.observers[_0x3e9bcb];
          const _0x5b0121 = te && te.running;
          if (_0x5b0121) {
            te.disposed.has(_0x478629);
          }
          if (_0x5b0121 ? !_0x478629.tState : !_0x478629.state) {
            if (_0x478629.pure) {
              m.push(_0x478629);
            } else {
              E.push(_0x478629);
            }
            if (_0x478629.observers) {
              we(_0x478629);
            }
          }
          if (!_0x5b0121) {
            _0x478629.state = P;
          }
        }
        if (m.length > 1000000) {
          m = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x55089d;
}
function D(_0x326649) {
  if (!_0x326649.fn) {
    return;
  }
  ee(_0x326649);
  const _0x3dee9d = _;
  const _0x3cd219 = p;
  const _0x1e2503 = z;
  p = _ = _0x326649;
  Le(_0x326649, _0x326649.value, _0x1e2503);
  p = _0x3cd219;
  _ = _0x3dee9d;
}
function Le(_0x4b1d81, _0x1659b5, _0x1dc3a3) {
  let _0x320214;
  try {
    _0x320214 = _0x4b1d81.fn(_0x1659b5);
  } catch (_0x349649) {
    if (_0x4b1d81.pure) {
      _0x4b1d81.state = P;
      if (_0x4b1d81.owned) {
        _0x4b1d81.owned.forEach(ee);
      }
      _0x4b1d81.owned = null;
    }
    _0x4b1d81.updatedAt = _0x1dc3a3 + 1;
    return ye(_0x349649);
  }
  if (!_0x4b1d81.updatedAt || _0x4b1d81.updatedAt <= _0x1dc3a3) {
    if (_0x4b1d81.updatedAt != null && "observers" in _0x4b1d81) {
      _e(_0x4b1d81, _0x320214);
    } else {
      _0x4b1d81.value = _0x320214;
    }
    _0x4b1d81.updatedAt = _0x1dc3a3;
  }
}
function oe(_0x55a9e9, _0x2a8355, _0x50000b, _0x3ddb11 = P, _0x53f04c) {
  const _0x25845e = {
    fn: _0x55a9e9,
    state: _0x3ddb11,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x2a8355,
    owner: _,
    context: null,
    pure: _0x50000b
  };
  if (_ !== null) {
    if (_ !== pe) {
      if (_.owned) {
        _.owned.push(_0x25845e);
      } else {
        _.owned = [_0x25845e];
      }
    }
  }
  return _0x25845e;
}
function J(_0x3e9eac) {
  if (_0x3e9eac.state === 0) {
    return;
  }
  if (_0x3e9eac.state === X) {
    return Y(_0x3e9eac);
  }
  if (_0x3e9eac.suspense && N(_0x3e9eac.suspense.inFallback)) {
    return _0x3e9eac.suspense.effects.push(_0x3e9eac);
  }
  const _0x48f4ae = [_0x3e9eac];
  while ((_0x3e9eac = _0x3e9eac.owner) && (!_0x3e9eac.updatedAt || _0x3e9eac.updatedAt < z)) {
    if (_0x3e9eac.state) {
      _0x48f4ae.push(_0x3e9eac);
    }
  }
  for (let _0xe4fd82 = _0x48f4ae.length - 1; _0xe4fd82 >= 0; _0xe4fd82--) {
    _0x3e9eac = _0x48f4ae[_0xe4fd82];
    if (_0x3e9eac.state === P) {
      D(_0x3e9eac);
    } else if (_0x3e9eac.state === X) {
      const _0x141130 = m;
      m = null;
      R(() => Y(_0x3e9eac, _0x48f4ae[0]), false);
      m = _0x141130;
    }
  }
}
function R(_0x2aecd3, _0x5a8a1f) {
  if (m) {
    return _0x2aecd3();
  }
  let _0x3cd69e = false;
  if (!_0x5a8a1f) {
    m = [];
  }
  if (E) {
    _0x3cd69e = true;
  } else {
    E = [];
  }
  z++;
  try {
    const _0x1eb54a = _0x2aecd3();
    Pe(_0x3cd69e);
    return _0x1eb54a;
  } catch (_0x306bff) {
    if (!_0x3cd69e) {
      E = null;
    }
    m = null;
    ye(_0x306bff);
  }
}
function Pe(_0x27af18) {
  if (m) {
    me(m);
    m = null;
  }
  if (_0x27af18) {
    return;
  }
  const _0x34a075 = E;
  E = null;
  if (_0x34a075.length) {
    R(() => ge(_0x34a075), false);
  }
}
function me(_0x1ffb44) {
  for (let _0x31162e = 0; _0x31162e < _0x1ffb44.length; _0x31162e++) {
    J(_0x1ffb44[_0x31162e]);
  }
}
function Te(_0x32adc5) {
  let _0x42dbcf;
  let _0x52decf = 0;
  for (_0x42dbcf = 0; _0x42dbcf < _0x32adc5.length; _0x42dbcf++) {
    const _0x342f08 = _0x32adc5[_0x42dbcf];
    if (_0x342f08.user) {
      _0x32adc5[_0x52decf++] = _0x342f08;
    } else {
      J(_0x342f08);
    }
  }
  for (_0x42dbcf = 0; _0x42dbcf < _0x52decf; _0x42dbcf++) {
    J(_0x32adc5[_0x42dbcf]);
  }
}
function Y(_0x639afd, _0x14d4a5) {
  _0x639afd.state = 0;
  for (let _0x35dd61 = 0; _0x35dd61 < _0x639afd.sources.length; _0x35dd61 += 1) {
    const _0x40c021 = _0x639afd.sources[_0x35dd61];
    if (_0x40c021.sources) {
      const _0x325679 = _0x40c021.state;
      if (_0x325679 === P) {
        if (_0x40c021 !== _0x14d4a5 && (!_0x40c021.updatedAt || _0x40c021.updatedAt < z)) {
          J(_0x40c021);
        }
      } else if (_0x325679 === X) {
        Y(_0x40c021, _0x14d4a5);
      }
    }
  }
}
function we(_0x1f0451) {
  for (let _0x39b57c = 0; _0x39b57c < _0x1f0451.observers.length; _0x39b57c += 1) {
    const _0x4ba5c5 = _0x1f0451.observers[_0x39b57c];
    if (!_0x4ba5c5.state) {
      _0x4ba5c5.state = X;
      if (_0x4ba5c5.pure) {
        m.push(_0x4ba5c5);
      } else {
        E.push(_0x4ba5c5);
      }
      if (_0x4ba5c5.observers) {
        we(_0x4ba5c5);
      }
    }
  }
}
function ee(_0x48dcfe) {
  let _0xacb578;
  if (_0x48dcfe.sources) {
    while (_0x48dcfe.sources.length) {
      const _0x548c23 = _0x48dcfe.sources.pop();
      const _0x11fe32 = _0x48dcfe.sourceSlots.pop();
      const _0x4d8120 = _0x548c23.observers;
      if (_0x4d8120 && _0x4d8120.length) {
        const _0x26fdd7 = _0x4d8120.pop();
        const _0x2baf75 = _0x548c23.observerSlots.pop();
        if (_0x11fe32 < _0x4d8120.length) {
          _0x26fdd7.sourceSlots[_0x2baf75] = _0x11fe32;
          _0x4d8120[_0x11fe32] = _0x26fdd7;
          _0x548c23.observerSlots[_0x11fe32] = _0x2baf75;
        }
      }
    }
  }
  if (_0x48dcfe.owned) {
    for (_0xacb578 = _0x48dcfe.owned.length - 1; _0xacb578 >= 0; _0xacb578--) {
      ee(_0x48dcfe.owned[_0xacb578]);
    }
    _0x48dcfe.owned = null;
  }
  if (_0x48dcfe.cleanups) {
    for (_0xacb578 = _0x48dcfe.cleanups.length - 1; _0xacb578 >= 0; _0xacb578--) {
      _0x48dcfe.cleanups[_0xacb578]();
    }
    _0x48dcfe.cleanups = null;
  }
  _0x48dcfe.state = 0;
  _0x48dcfe.context = null;
}
function ye(_0x18e1d2) {
  throw _0x18e1d2;
}
const Ne = Symbol("fallback");
function fe(_0x6b9419) {
  for (let _0x50ce8c = 0; _0x50ce8c < _0x6b9419.length; _0x50ce8c++) {
    _0x6b9419[_0x50ce8c]();
  }
}
function ke(_0x138e2e, _0x5e50b6, _0x18bccd = {}) {
  let _0x130dce = [];
  let _0x5d7e6 = [];
  let _0x2cf6d5 = [];
  let _0x5709c1 = 0;
  let _0x5756f0 = _0x5e50b6.length > 1 ? [] : null;
  Ee(() => fe(_0x2cf6d5));
  return () => {
    let _0x28480d = _0x138e2e() || [];
    let _0x5a75d4;
    let _0x2e0760;
    _0x28480d[Ae];
    return N(() => {
      let _0x2aba7a = _0x28480d.length;
      let _0x2c1155;
      let _0x18d72d;
      let _0x5bd0a5;
      let _0xd424e8;
      let _0x1c1d8b;
      let _0x446f48;
      let _0xef9bc2;
      let _0x24a44e;
      let _0x41ead9;
      if (_0x2aba7a === 0) {
        if (_0x5709c1 !== 0) {
          fe(_0x2cf6d5);
          _0x2cf6d5 = [];
          _0x130dce = [];
          _0x5d7e6 = [];
          _0x5709c1 = 0;
          _0x5756f0 &&= [];
        }
        if (_0x18bccd.fallback) {
          _0x130dce = [Ne];
          _0x5d7e6[0] = H(_0x16b301 => {
            _0x2cf6d5[0] = _0x16b301;
            return _0x18bccd.fallback();
          });
          _0x5709c1 = 1;
        }
      } else if (_0x5709c1 === 0) {
        _0x5d7e6 = new Array(_0x2aba7a);
        _0x2e0760 = 0;
        for (; _0x2e0760 < _0x2aba7a; _0x2e0760++) {
          _0x130dce[_0x2e0760] = _0x28480d[_0x2e0760];
          _0x5d7e6[_0x2e0760] = H(_0x59d061);
        }
        _0x5709c1 = _0x2aba7a;
      } else {
        _0x5bd0a5 = new Array(_0x2aba7a);
        _0xd424e8 = new Array(_0x2aba7a);
        if (_0x5756f0) {
          _0x1c1d8b = new Array(_0x2aba7a);
        }
        _0x446f48 = 0;
        _0xef9bc2 = Math.min(_0x5709c1, _0x2aba7a);
        for (; _0x446f48 < _0xef9bc2 && _0x130dce[_0x446f48] === _0x28480d[_0x446f48]; _0x446f48++);
        _0xef9bc2 = _0x5709c1 - 1;
        _0x24a44e = _0x2aba7a - 1;
        for (; _0xef9bc2 >= _0x446f48 && _0x24a44e >= _0x446f48 && _0x130dce[_0xef9bc2] === _0x28480d[_0x24a44e]; _0xef9bc2--, _0x24a44e--) {
          _0x5bd0a5[_0x24a44e] = _0x5d7e6[_0xef9bc2];
          _0xd424e8[_0x24a44e] = _0x2cf6d5[_0xef9bc2];
          if (_0x5756f0) {
            _0x1c1d8b[_0x24a44e] = _0x5756f0[_0xef9bc2];
          }
        }
        _0x2c1155 = new Map();
        _0x18d72d = new Array(_0x24a44e + 1);
        _0x2e0760 = _0x24a44e;
        for (; _0x2e0760 >= _0x446f48; _0x2e0760--) {
          _0x41ead9 = _0x28480d[_0x2e0760];
          _0x5a75d4 = _0x2c1155.get(_0x41ead9);
          _0x18d72d[_0x2e0760] = _0x5a75d4 === undefined ? -1 : _0x5a75d4;
          _0x2c1155.set(_0x41ead9, _0x2e0760);
        }
        for (_0x5a75d4 = _0x446f48; _0x5a75d4 <= _0xef9bc2; _0x5a75d4++) {
          _0x41ead9 = _0x130dce[_0x5a75d4];
          _0x2e0760 = _0x2c1155.get(_0x41ead9);
          if (_0x2e0760 !== undefined && _0x2e0760 !== -1) {
            _0x5bd0a5[_0x2e0760] = _0x5d7e6[_0x5a75d4];
            _0xd424e8[_0x2e0760] = _0x2cf6d5[_0x5a75d4];
            if (_0x5756f0) {
              _0x1c1d8b[_0x2e0760] = _0x5756f0[_0x5a75d4];
            }
            _0x2e0760 = _0x18d72d[_0x2e0760];
            _0x2c1155.set(_0x41ead9, _0x2e0760);
          } else {
            _0x2cf6d5[_0x5a75d4]();
          }
        }
        for (_0x2e0760 = _0x446f48; _0x2e0760 < _0x2aba7a; _0x2e0760++) {
          if (_0x2e0760 in _0x5bd0a5) {
            _0x5d7e6[_0x2e0760] = _0x5bd0a5[_0x2e0760];
            _0x2cf6d5[_0x2e0760] = _0xd424e8[_0x2e0760];
            if (_0x5756f0) {
              _0x5756f0[_0x2e0760] = _0x1c1d8b[_0x2e0760];
              _0x5756f0[_0x2e0760](_0x2e0760);
            }
          } else {
            _0x5d7e6[_0x2e0760] = H(_0x59d061);
          }
        }
        _0x5d7e6 = _0x5d7e6.slice(0, _0x5709c1 = _0x2aba7a);
        _0x130dce = _0x28480d.slice(0);
      }
      return _0x5d7e6;
    });
    function _0x59d061(_0xa7ba87) {
      _0x2cf6d5[_0x2e0760] = _0xa7ba87;
      if (_0x5756f0) {
        const [_0x518019, _0x4c53d6] = Q(_0x2e0760);
        _0x5756f0[_0x2e0760] = _0x4c53d6;
        return _0x5e50b6(_0x28480d[_0x2e0760], _0x518019);
      }
      return _0x5e50b6(_0x28480d[_0x2e0760]);
    }
  };
}
function U(_0xebc92f, _0x512229) {
  return N(() => _0xebc92f(_0x512229 || {}));
}
function Oe(_0x23ef67) {
  const _0xcbec1b = "fallback" in _0x23ef67 && {
    fallback: () => _0x23ef67.fallback
  };
  return Ce(ke(() => _0x23ef67.each, _0x23ef67.children, _0xcbec1b || undefined));
}
function Be(_0x5f39cf, _0x24c8ae, _0x2e55f5) {
  let _0x3bf224 = _0x2e55f5.length;
  let _0xf58f86 = _0x24c8ae.length;
  let _0x33649e = _0x3bf224;
  let _0x2ea836 = 0;
  let _0x5f39b9 = 0;
  let _0x492d75 = _0x24c8ae[_0xf58f86 - 1].nextSibling;
  let _0x4238e1 = null;
  while (_0x2ea836 < _0xf58f86 || _0x5f39b9 < _0x33649e) {
    if (_0x24c8ae[_0x2ea836] === _0x2e55f5[_0x5f39b9]) {
      _0x2ea836++;
      _0x5f39b9++;
      continue;
    }
    while (_0x24c8ae[_0xf58f86 - 1] === _0x2e55f5[_0x33649e - 1]) {
      _0xf58f86--;
      _0x33649e--;
    }
    if (_0xf58f86 === _0x2ea836) {
      const _0x577212 = _0x33649e < _0x3bf224 ? _0x5f39b9 ? _0x2e55f5[_0x5f39b9 - 1].nextSibling : _0x2e55f5[_0x33649e - _0x5f39b9] : _0x492d75;
      while (_0x5f39b9 < _0x33649e) {
        _0x5f39cf.insertBefore(_0x2e55f5[_0x5f39b9++], _0x577212);
      }
    } else if (_0x33649e === _0x5f39b9) {
      while (_0x2ea836 < _0xf58f86) {
        if (!_0x4238e1 || !_0x4238e1.has(_0x24c8ae[_0x2ea836])) {
          _0x24c8ae[_0x2ea836].remove();
        }
        _0x2ea836++;
      }
    } else if (_0x24c8ae[_0x2ea836] === _0x2e55f5[_0x33649e - 1] && _0x2e55f5[_0x5f39b9] === _0x24c8ae[_0xf58f86 - 1]) {
      const _0x11cc6c = _0x24c8ae[--_0xf58f86].nextSibling;
      _0x5f39cf.insertBefore(_0x2e55f5[_0x5f39b9++], _0x24c8ae[_0x2ea836++].nextSibling);
      _0x5f39cf.insertBefore(_0x2e55f5[--_0x33649e], _0x11cc6c);
      _0x24c8ae[_0xf58f86] = _0x2e55f5[_0x33649e];
    } else {
      if (!_0x4238e1) {
        _0x4238e1 = new Map();
        let _0x3dcaf4 = _0x5f39b9;
        while (_0x3dcaf4 < _0x33649e) {
          _0x4238e1.set(_0x2e55f5[_0x3dcaf4], _0x3dcaf4++);
        }
      }
      const _0x326354 = _0x4238e1.get(_0x24c8ae[_0x2ea836]);
      if (_0x326354 != null) {
        if (_0x5f39b9 < _0x326354 && _0x326354 < _0x33649e) {
          let _0x285724 = _0x2ea836;
          let _0x171e8f = 1;
          let _0x26c37f;
          while (++_0x285724 < _0xf58f86 && _0x285724 < _0x33649e && (_0x26c37f = _0x4238e1.get(_0x24c8ae[_0x285724])) != null && _0x26c37f === _0x326354 + _0x171e8f) {
            _0x171e8f++;
          }
          if (_0x171e8f > _0x326354 - _0x5f39b9) {
            const _0x2a176d = _0x24c8ae[_0x2ea836];
            while (_0x5f39b9 < _0x326354) {
              _0x5f39cf.insertBefore(_0x2e55f5[_0x5f39b9++], _0x2a176d);
            }
          } else {
            _0x5f39cf.replaceChild(_0x2e55f5[_0x5f39b9++], _0x24c8ae[_0x2ea836++]);
          }
        } else {
          _0x2ea836++;
        }
      } else {
        _0x24c8ae[_0x2ea836++].remove();
      }
    }
  }
}
const ue = "_$DX_DELEGATE";
function Me(_0x8aa0a9, _0xe95fe4, _0x31042c, _0x5eadb5 = {}) {
  let _0x460ae3;
  H(_0x2fcbb1 => {
    _0x460ae3 = _0x2fcbb1;
    if (_0xe95fe4 === document) {
      _0x8aa0a9();
    } else {
      j(_0xe95fe4, _0x8aa0a9(), _0xe95fe4.firstChild ? null : undefined, _0x31042c);
    }
  }, _0x5eadb5.owner);
  return () => {
    _0x460ae3();
    _0xe95fe4.textContent = "";
  };
}
function re(_0x5dc101, _0x5bc537, _0x276610) {
  let _0x50a97b;
  const _0xadbb97 = () => {
    const _0x4e1c64 = document.createElement("template");
    _0x4e1c64.innerHTML = _0x5dc101;
    if (_0x276610) {
      return _0x4e1c64.content.firstChild.firstChild;
    } else {
      return _0x4e1c64.content.firstChild;
    }
  };
  const _0x39ca9e = _0x5bc537 ? () => N(() => document.importNode(_0x50a97b ||= _0xadbb97(), true)) : () => (_0x50a97b ||= _0xadbb97()).cloneNode(true);
  _0x39ca9e.cloneNode = _0x39ca9e;
  return _0x39ca9e;
}
function be(_0x16de60, _0x54e009 = window.document) {
  const _0x5abccd = _0x54e009[ue] ||= new Set();
  for (let _0x55eb59 = 0, _0xf22e95 = _0x16de60.length; _0x55eb59 < _0xf22e95; _0x55eb59++) {
    const _0xce79d7 = _0x16de60[_0x55eb59];
    if (!_0x5abccd.has(_0xce79d7)) {
      _0x5abccd.add(_0xce79d7);
      _0x54e009.addEventListener(_0xce79d7, je);
    }
  }
}
function le(_0x1ad672, _0x118b39, _0x233a06) {
  if (_0x233a06 == null) {
    _0x1ad672.removeAttribute(_0x118b39);
  } else {
    _0x1ad672.setAttribute(_0x118b39, _0x233a06);
  }
}
function C(_0x115847, _0x3c6264) {
  if (_0x3c6264 == null) {
    _0x115847.removeAttribute("class");
  } else {
    _0x115847.className = _0x3c6264;
  }
}
function ne(_0x29a5dd, _0xe91661, _0x548f3c = {}) {
  const _0x336547 = Object.keys(_0xe91661 || {});
  const _0x1ae7c3 = Object.keys(_0x548f3c);
  let _0x48a3be;
  let _0x13090c;
  _0x48a3be = 0;
  _0x13090c = _0x1ae7c3.length;
  for (; _0x48a3be < _0x13090c; _0x48a3be++) {
    const _0x39a655 = _0x1ae7c3[_0x48a3be];
    if (!!_0x39a655 && _0x39a655 !== "undefined" && !_0xe91661[_0x39a655]) {
      ae(_0x29a5dd, _0x39a655, false);
      delete _0x548f3c[_0x39a655];
    }
  }
  _0x48a3be = 0;
  _0x13090c = _0x336547.length;
  for (; _0x48a3be < _0x13090c; _0x48a3be++) {
    const _0x48f6f0 = _0x336547[_0x48a3be];
    const _0x166131 = !!_0xe91661[_0x48f6f0];
    if (!!_0x48f6f0 && _0x48f6f0 !== "undefined" && _0x548f3c[_0x48f6f0] !== _0x166131 && !!_0x166131) {
      ae(_0x29a5dd, _0x48f6f0, true);
      _0x548f3c[_0x48f6f0] = _0x166131;
    }
  }
  return _0x548f3c;
}
function Ue(_0x3d45d6, _0x74abc, _0x56c057) {
  return N(() => _0x3d45d6(_0x74abc, _0x56c057));
}
function j(_0x2e4cd2, _0x378eda, _0x17cc5d, _0x52ec37) {
  if (_0x17cc5d !== undefined && !_0x52ec37) {
    _0x52ec37 = [];
  }
  if (typeof _0x378eda != "function") {
    return Z(_0x2e4cd2, _0x378eda, _0x52ec37, _0x17cc5d);
  }
  I(_0x2910af => Z(_0x2e4cd2, _0x378eda(), _0x2910af, _0x17cc5d), _0x52ec37);
}
function ae(_0x15e622, _0x5d6df3, _0x2654e1) {
  const _0x4e44c7 = _0x5d6df3.trim().split(/\s+/);
  for (let _0x278212 = 0, _0x43552b = _0x4e44c7.length; _0x278212 < _0x43552b; _0x278212++) {
    _0x15e622.classList.toggle(_0x4e44c7[_0x278212], _0x2654e1);
  }
}
function je(_0x100af3) {
  const _0x200380 = "$$" + _0x100af3.type;
  let _0x351559 = _0x100af3.composedPath && _0x100af3.composedPath()[0] || _0x100af3.target;
  if (_0x100af3.target !== _0x351559) {
    Object.defineProperty(_0x100af3, "target", {
      configurable: true,
      value: _0x351559
    });
  }
  Object.defineProperty(_0x100af3, "currentTarget", {
    configurable: true,
    get() {
      return _0x351559 || document;
    }
  });
  while (_0x351559) {
    const _0xe7bd9a = _0x351559[_0x200380];
    if (_0xe7bd9a && !_0x351559.disabled) {
      const _0x510b18 = _0x351559[_0x200380 + "Data"];
      if (_0x510b18 !== undefined) {
        _0xe7bd9a.call(_0x351559, _0x510b18, _0x100af3);
      } else {
        _0xe7bd9a.call(_0x351559, _0x100af3);
      }
      if (_0x100af3.cancelBubble) {
        return;
      }
    }
    _0x351559 = _0x351559._$host || _0x351559.parentNode || _0x351559.host;
  }
}
function Z(_0x1b1314, _0x10b753, _0x112057, _0xb782ca, _0x2b80b1) {
  while (typeof _0x112057 == "function") {
    _0x112057 = _0x112057();
  }
  if (_0x10b753 === _0x112057) {
    return _0x112057;
  }
  const _0x34082a = typeof _0x10b753;
  const _0x5290d0 = _0xb782ca !== undefined;
  _0x1b1314 = _0x5290d0 && _0x112057[0] && _0x112057[0].parentNode || _0x1b1314;
  if (_0x34082a === "string" || _0x34082a === "number") {
    if (_0x34082a === "number") {
      _0x10b753 = _0x10b753.toString();
    }
    if (_0x5290d0) {
      let _0x151b90 = _0x112057[0];
      if (_0x151b90 && _0x151b90.nodeType === 3) {
        _0x151b90.data = _0x10b753;
      } else {
        _0x151b90 = document.createTextNode(_0x10b753);
      }
      _0x112057 = M(_0x1b1314, _0x112057, _0xb782ca, _0x151b90);
    } else if (_0x112057 !== "" && typeof _0x112057 == "string") {
      _0x112057 = _0x1b1314.firstChild.data = _0x10b753;
    } else {
      _0x112057 = _0x1b1314.textContent = _0x10b753;
    }
  } else if (_0x10b753 == null || _0x34082a === "boolean") {
    _0x112057 = M(_0x1b1314, _0x112057, _0xb782ca);
  } else {
    if (_0x34082a === "function") {
      I(() => {
        let _0x1efd15 = _0x10b753();
        while (typeof _0x1efd15 == "function") {
          _0x1efd15 = _0x1efd15();
        }
        _0x112057 = Z(_0x1b1314, _0x1efd15, _0x112057, _0xb782ca);
      });
      return () => _0x112057;
    }
    if (Array.isArray(_0x10b753)) {
      const _0x5ee88c = [];
      const _0x42fd4d = _0x112057 && Array.isArray(_0x112057);
      if (ie(_0x5ee88c, _0x10b753, _0x112057, _0x2b80b1)) {
        I(() => _0x112057 = Z(_0x1b1314, _0x5ee88c, _0x112057, _0xb782ca, true));
        return () => _0x112057;
      }
      if (_0x5ee88c.length === 0) {
        _0x112057 = M(_0x1b1314, _0x112057, _0xb782ca);
        if (_0x5290d0) {
          return _0x112057;
        }
      } else if (_0x42fd4d) {
        if (_0x112057.length === 0) {
          de(_0x1b1314, _0x5ee88c, _0xb782ca);
        } else {
          Be(_0x1b1314, _0x112057, _0x5ee88c);
        }
      } else {
        if (_0x112057) {
          M(_0x1b1314);
        }
        de(_0x1b1314, _0x5ee88c);
      }
      _0x112057 = _0x5ee88c;
    } else if (_0x10b753.nodeType) {
      if (Array.isArray(_0x112057)) {
        if (_0x5290d0) {
          return _0x112057 = M(_0x1b1314, _0x112057, _0xb782ca, _0x10b753);
        }
        M(_0x1b1314, _0x112057, null, _0x10b753);
      } else if (_0x112057 == null || _0x112057 === "" || !_0x1b1314.firstChild) {
        _0x1b1314.appendChild(_0x10b753);
      } else {
        _0x1b1314.replaceChild(_0x10b753, _0x1b1314.firstChild);
      }
      _0x112057 = _0x10b753;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0x10b753);
    }
  }
  return _0x112057;
}
function ie(_0x31bd8a, _0x272fa1, _0x4a5878, _0x17498a) {
  let _0x18c335 = false;
  for (let _0x72aa7e = 0, _0x127394 = _0x272fa1.length; _0x72aa7e < _0x127394; _0x72aa7e++) {
    let _0x4660ce = _0x272fa1[_0x72aa7e];
    let _0x368424 = _0x4a5878 && _0x4a5878[_0x72aa7e];
    let _0x23adb2;
    if (_0x4660ce != null && _0x4660ce !== true && _0x4660ce !== false) {
      if ((_0x23adb2 = typeof _0x4660ce) == "object" && _0x4660ce.nodeType) {
        _0x31bd8a.push(_0x4660ce);
      } else if (Array.isArray(_0x4660ce)) {
        _0x18c335 = ie(_0x31bd8a, _0x4660ce, _0x368424) || _0x18c335;
      } else if (_0x23adb2 === "function") {
        if (_0x17498a) {
          while (typeof _0x4660ce == "function") {
            _0x4660ce = _0x4660ce();
          }
          _0x18c335 = ie(_0x31bd8a, Array.isArray(_0x4660ce) ? _0x4660ce : [_0x4660ce], Array.isArray(_0x368424) ? _0x368424 : [_0x368424]) || _0x18c335;
        } else {
          _0x31bd8a.push(_0x4660ce);
          _0x18c335 = true;
        }
      } else {
        const _0x4d5c9e = String(_0x4660ce);
        if (_0x368424 && _0x368424.nodeType === 3 && _0x368424.data === _0x4d5c9e) {
          _0x31bd8a.push(_0x368424);
        } else {
          _0x31bd8a.push(document.createTextNode(_0x4d5c9e));
        }
      }
    }
  }
  return _0x18c335;
}
function de(_0xab2eeb, _0x483959, _0x146b26 = null) {
  for (let _0x1a15dd = 0, _0x5ea3ae = _0x483959.length; _0x1a15dd < _0x5ea3ae; _0x1a15dd++) {
    _0xab2eeb.insertBefore(_0x483959[_0x1a15dd], _0x146b26);
  }
}
function M(_0x156940, _0x4f9983, _0x5008ac, _0x4521e9) {
  if (_0x5008ac === undefined) {
    return _0x156940.textContent = "";
  }
  const _0xd616b0 = _0x4521e9 || document.createTextNode("");
  if (_0x4f9983.length) {
    let _0x4d2d31 = false;
    for (let _0x24c522 = _0x4f9983.length - 1; _0x24c522 >= 0; _0x24c522--) {
      const _0x3a306d = _0x4f9983[_0x24c522];
      if (_0xd616b0 !== _0x3a306d) {
        const _0x56f371 = _0x3a306d.parentNode === _0x156940;
        if (!_0x4d2d31 && !_0x24c522) {
          if (_0x56f371) {
            _0x156940.replaceChild(_0xd616b0, _0x3a306d);
          } else {
            _0x156940.insertBefore(_0xd616b0, _0x5008ac);
          }
        } else if (_0x56f371) {
          _0x3a306d.remove();
        }
      } else {
        _0x4d2d31 = true;
      }
    }
  } else {
    _0x156940.insertBefore(_0xd616b0, _0x5008ac);
  }
  return [_0xd616b0];
}
const Ie = "_App_1ig1w_1";
const Ve = "_button_1ig1w_15";
const De = "_top_1ig1w_33";
const Re = "_bottom_1ig1w_39";
const Ke = "_active_1ig1w_45";
const qe = "_progressBar_1ig1w_48";
const Fe = "_box_1ig1w_62";
const Ge = "_logo_1ig1w_71";
const He = "_logoProgress_1ig1w_89";
const Qe = "_videoStyle_1ig1w_99";
const We = "_fadeIn_1ig1w_109";
const Xe = "_fadeOut_1ig1w_113";
const b = {
  App: Ie,
  button: Ve,
  top: De,
  bottom: Re,
  active: Ke,
  progressBar: qe,
  box: Fe,
  logo: Ge,
  logoProgress: He,
  videoStyle: Qe,
  fadeIn: We,
  fadeOut: Xe
};
const Je = "_social_txymp_1";
const Ye = "_title_txymp_20";
const Ze = {
  social: Je,
  title: Ye
};
const ze = re("<div><img>");
function G(_0xbf4fc5) {
  return (() => {
    const _0x28f1c9 = ze();
    const _0x32f764 = _0x28f1c9.firstChild;
    _0x32f764.$$mousedown = _0x160697 => _0x160697.preventDefault();
    _0x32f764.$$click = () => {
      window.invokeNative("openUrl", _0xbf4fc5.link);
    };
    I(_0x4697a1 => {
      const _0x106cc1 = Ze.social;
      const _0x3bdc2f = _0xbf4fc5.icon;
      if (_0x106cc1 !== _0x4697a1._v$) {
        C(_0x28f1c9, _0x4697a1._v$ = _0x106cc1);
      }
      if (_0x3bdc2f !== _0x4697a1._v$2) {
        le(_0x32f764, "src", _0x4697a1._v$2 = _0x3bdc2f);
      }
      return _0x4697a1;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x28f1c9;
  })();
}
be(["click", "mousedown"]);
const et = "" + new URL("twitter-d21868bf.svg", import.meta.url).href;
const tt = "" + new URL("youtube-9ba34c37.svg", import.meta.url).href;
const nt = "" + new URL("store-d7be97ee.png", import.meta.url).href;
const he = "" + new URL("logo-187456c5.png", import.meta.url).href;
function st(_0x54dd87) {
  for (var _0x1f9886 = _0x54dd87.length, _0x2a4c40, _0x6ac27f; _0x1f9886 !== 0;) {
    _0x6ac27f = Math.floor(Math.random() * _0x1f9886);
    _0x1f9886 -= 1;
    _0x2a4c40 = _0x54dd87[_0x1f9886];
    _0x54dd87[_0x1f9886] = _0x54dd87[_0x6ac27f];
    _0x54dd87[_0x6ac27f] = _0x2a4c40;
  }
  return _0x54dd87;
}
const lt = re("<div><div class=\"flex h-full flex-col items-center justify-end gap-[2vh]\"><div class=\"flex w-full flex-row items-center justify-start gap-[0.8vh] pl-[0.8vh]\"></div><div class=\"flex flex-row items-center justify-start\"><div><img><div></div></div><div class=\"flex flex-col items-center justify-center gap-[0.6vh]\"><div>nopixel</div><div></div><div>4.0");
const it = re("<div><div>");
const se = st(["loadingscreen_overlay_cow.webm", "loadingscreen_overlay_deer.webm", "loadingscreen_overlay_rabbit.webm", "loadingscreen_overlay_raccoon.webm", "loadingscreen_overlay_rat.webm", "loadingscreen_overlay_bird.webm", "loadingscreen_overlay_cat.webm"]);
const ot = "https://assets.nopixel.net/dev/images/loadingscreen/";
function rt() {
  function _0x55c17b(_0x2c08e0) {
    const _0x4818fa = 100 - _0x3d99e7();
    const _0x547320 = 100 / 14;
    const _0x4ad461 = (13 - _0x2c08e0) * _0x547320;
    const _0x147f8c = (14 - _0x2c08e0) * _0x547320;
    return "inset(0% " + Math.min(Math.max((_0x4818fa - _0x4ad461) / (_0x147f8c - _0x4ad461), 0), 1) * 100 + "% 0% 0%)";
  }
  ce(async () => {
    window.addEventListener("message", _0x471c3a => {
      if (_0x471c3a.data.eventName === "loadProgress") {
        _0x2c7350(Math.round(_0x471c3a.data.loadFraction * 100));
      }
    });
  });
  const [_0x3d99e7, _0x2c7350] = Q(0);
  const [_0x3e316c, _0xb5765a] = Q("faq");
  let _0x4f5dcd;
  const [_0x35b977, _0x201f65] = Q([]);
  const _0x2ffa8f = async () => {
    const _0x2d865a = [];
    for (let _0x102a2b = 0; _0x102a2b < se.length; _0x102a2b++) {
      const _0x988e1c = document.createElement("video");
      _0x988e1c.src = "" + ot + se[_0x102a2b];
      _0x988e1c.muted = true;
      await new Promise(_0x357fcd => {
        _0x988e1c.addEventListener("canplaythrough", () => {
          _0x357fcd(true);
        });
      });
      _0x2d865a.push(_0x988e1c);
    }
    _0x201f65(_0x2d865a);
  };
  const _0x61100 = (_0x227972, _0x25565c) => {
    let _0x5d04f3 = _0x35b977()[_0x227972];
    _0x4f5dcd.appendChild(_0x5d04f3);
    if (!_0x25565c) {
      _0x5d04f3.classList.add(b.fadeIn);
    }
    _0x5d04f3.classList.add(b.videoStyle);
    _0x5d04f3.play();
    let _0x628c61 = false;
    _0x5d04f3.addEventListener("timeupdate", () => {
      if (_0x5d04f3.currentTime >= _0x5d04f3.duration - 5) {
        if (_0x628c61) {
          return;
        }
        _0x628c61 = true;
        setTimeout(() => {
          _0x5d04f3.classList.add(b.fadeOut);
          setTimeout(() => {
            const _0x5c7633 = _0x4f5dcd.querySelector("video");
            if (_0x5c7633) {
              _0x4f5dcd.removeChild(_0x5c7633);
            }
          }, 1000);
        }, 1000);
        _0x227972++;
        if (_0x227972 >= se.length) {
          _0x227972 = 0;
        }
        _0x61100(_0x227972);
      }
    });
  };
  ce(() => {
    _0x2ffa8f().then(() => {
      _0x61100(0, true);
    });
  });
  return (() => {
    const _0x314c67 = lt();
    const _0x44d184 = _0x314c67.firstChild;
    const _0x19c777 = _0x44d184.firstChild;
    const _0x5e4df4 = _0x19c777.nextSibling;
    const _0x25c67b = _0x5e4df4.firstChild;
    const _0xca76b0 = _0x25c67b.firstChild;
    const _0x450604 = _0xca76b0.nextSibling;
    const _0x53f5c5 = _0x25c67b.nextSibling;
    const _0x4f7ad0 = _0x53f5c5.firstChild;
    const _0x4ef3f1 = _0x4f7ad0.nextSibling;
    const _0x2d2db7 = _0x4ef3f1.nextSibling;
    const _0x4e41ba = _0x4f5dcd;
    if (typeof _0x4e41ba == "function") {
      Ue(_0x4e41ba, _0x314c67);
    } else {
      _0x4f5dcd = _0x314c67;
    }
    j(_0x19c777, U(G, {
      icon: et,
      link: "https://twitter.com/nopixeltweets"
    }), null);
    j(_0x19c777, U(G, {
      icon: tt,
      link: "https://www.youtube.com/@nopixelofficial"
    }), null);
    j(_0x19c777, U(G, {
      icon: nt,
      link: "https://store.nopixel.net/"
    }), null);
    j(_0x19c777, U(G, {
      icon: he,
      link: "https://nopixel.net/"
    }), null);
    le(_0xca76b0, "src", he);
    le(_0xca76b0, "draggable", false);
    _0x4f7ad0.$$click = () => {
      _0xb5765a("faq");
    };
    j(_0x4ef3f1, U(Oe, {
      get each() {
        return Array(13);
      },
      children: (_0x4b5790, _0x1f358d) => (() => {
        const _0x1ffa01 = it();
        const _0x3af8da = _0x1ffa01.firstChild;
        I(_0x343960 => {
          const _0x592039 = b.box;
          const _0x47a2cf = b.box;
          const _0x190a63 = {
            [b.active]: true
          };
          const _0x231652 = _0x55c17b(_0x1f358d());
          if (_0x592039 !== _0x343960._v$10) {
            C(_0x1ffa01, _0x343960._v$10 = _0x592039);
          }
          if (_0x47a2cf !== _0x343960._v$11) {
            C(_0x3af8da, _0x343960._v$11 = _0x47a2cf);
          }
          _0x343960._v$12 = ne(_0x3af8da, _0x190a63, _0x343960._v$12);
          if (_0x231652 !== _0x343960._v$13) {
            if ((_0x343960._v$13 = _0x231652) != null) {
              _0x3af8da.style.setProperty("clip-path", _0x231652);
            } else {
              _0x3af8da.style.removeProperty("clip-path");
            }
          }
          return _0x343960;
        }, {
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined,
          _v$13: undefined
        });
        return _0x1ffa01;
      })()
    }));
    _0x2d2db7.$$click = () => {
      _0xb5765a("tutorials");
    };
    I(_0x5e2e58 => {
      const _0x3772ff = b.App;
      const _0x488dc1 = b.logo;
      const _0x5bccbd = b.logoProgress;
      const _0x341acc = "inset(" + (100 - _0x3d99e7()) + "% 0% 0% 0%)";
      const _0x1731c8 = b.button;
      const _0x352e78 = {
        [b.top]: true
      };
      const _0x1cdb93 = b.progressBar;
      const _0x609c = b.button;
      const _0x357dcf = {
        [b.bottom]: true
      };
      if (_0x3772ff !== _0x5e2e58._v$) {
        C(_0x314c67, _0x5e2e58._v$ = _0x3772ff);
      }
      if (_0x488dc1 !== _0x5e2e58._v$2) {
        C(_0x25c67b, _0x5e2e58._v$2 = _0x488dc1);
      }
      if (_0x5bccbd !== _0x5e2e58._v$3) {
        C(_0x450604, _0x5e2e58._v$3 = _0x5bccbd);
      }
      if (_0x341acc !== _0x5e2e58._v$4) {
        if ((_0x5e2e58._v$4 = _0x341acc) != null) {
          _0x450604.style.setProperty("clip-path", _0x341acc);
        } else {
          _0x450604.style.removeProperty("clip-path");
        }
      }
      if (_0x1731c8 !== _0x5e2e58._v$5) {
        C(_0x4f7ad0, _0x5e2e58._v$5 = _0x1731c8);
      }
      _0x5e2e58._v$6 = ne(_0x4f7ad0, _0x352e78, _0x5e2e58._v$6);
      if (_0x1cdb93 !== _0x5e2e58._v$7) {
        C(_0x4ef3f1, _0x5e2e58._v$7 = _0x1cdb93);
      }
      if (_0x609c !== _0x5e2e58._v$8) {
        C(_0x2d2db7, _0x5e2e58._v$8 = _0x609c);
      }
      _0x5e2e58._v$9 = ne(_0x2d2db7, _0x357dcf, _0x5e2e58._v$9);
      return _0x5e2e58;
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
    return _0x314c67;
  })();
}
be(["click"]);
Me(() => U(rt, {}), document.getElementById("root"));