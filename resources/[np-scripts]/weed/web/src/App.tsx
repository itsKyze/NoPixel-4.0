import './style.css';
import { N as _0x1b40a8 } from "./v-packages-6cb79519.js";
(function () {
  const _0x3bc6ce = document.createElement("link").relList;
  if (_0x3bc6ce && _0x3bc6ce.supports && _0x3bc6ce.supports("modulepreload")) {
    return;
  }
  for (const _0x5e5582 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x22f59a(_0x5e5582);
  }
  new MutationObserver(_0x1e127b => {
    for (const _0x330b3d of _0x1e127b) {
      if (_0x330b3d.type === "childList") {
        for (const _0x500168 of _0x330b3d.addedNodes) {
          if (_0x500168.tagName === "LINK" && _0x500168.rel === "modulepreload") {
            _0x22f59a(_0x500168);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x5716d3(_0x53df82) {
    const _0x5f57ff = {};
    if (_0x53df82.integrity) {
      _0x5f57ff.integrity = _0x53df82.integrity;
    }
    if (_0x53df82.referrerPolicy) {
      _0x5f57ff.referrerPolicy = _0x53df82.referrerPolicy;
    }
    if (_0x53df82.crossOrigin === "use-credentials") {
      _0x5f57ff.credentials = "include";
    } else if (_0x53df82.crossOrigin === "anonymous") {
      _0x5f57ff.credentials = "omit";
    } else {
      _0x5f57ff.credentials = "same-origin";
    }
    return _0x5f57ff;
  }
  function _0x22f59a(_0x11a0da) {
    if (_0x11a0da.ep) {
      return;
    }
    _0x11a0da.ep = true;
    const _0x494be1 = _0x5716d3(_0x11a0da);
    fetch(_0x11a0da.href, _0x494be1);
  }
})();
const gr = (_0x26f18b, _0x21647c) => _0x26f18b === _0x21647c;
const bt = Symbol("solid-proxy");
const en = Symbol("solid-track");
const li = {
  equals: gr
};
let po = vo;
const Ct = 1;
const ci = 2;
const mo = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var V = null;
let Ai = null;
let z = null;
let G = null;
let Mt = null;
let ki = 0;
const [pr, bu] = lt(false);
function ni(_0x201db5, _0x15a77d) {
  const _0x509d73 = z;
  const _0x5af226 = V;
  const _0x12714a = _0x201db5.length === 0;
  const _0x130e9a = _0x12714a ? mo : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x15a77d === undefined ? _0x5af226 : _0x15a77d
  };
  const _0x18e18a = _0x12714a ? _0x201db5 : () => _0x201db5(() => it(() => Mi(_0x130e9a)));
  V = _0x130e9a;
  z = null;
  try {
    return Yt(_0x18e18a, true);
  } finally {
    z = _0x509d73;
    V = _0x5af226;
  }
}
function lt(_0x4db260, _0x55be67) {
  _0x55be67 = _0x55be67 ? Object.assign({}, li, _0x55be67) : li;
  const _0x930374 = {
    value: _0x4db260,
    observers: null,
    observerSlots: null,
    comparator: _0x55be67.equals || undefined
  };
  const _0x4438c8 = _0x31e83c => {
    if (typeof _0x31e83c == "function") {
      _0x31e83c = _0x31e83c(_0x930374.value);
    }
    return xo(_0x930374, _0x31e83c);
  };
  return [bo.bind(_0x930374), _0x4438c8];
}
function mr(_0x5d717a, _0x4696e5, _0x103996) {
  const _0x5867ae = $i(_0x5d717a, _0x4696e5, true, Ct);
  ne(_0x5867ae);
}
function P(_0x364f0d, _0x1e79c8, _0x19f4c8) {
  const _0x83a74 = $i(_0x364f0d, _0x1e79c8, false, Ct);
  ne(_0x83a74);
}
function pe(_0x4c96a1, _0xcc6d77, _0x46c415) {
  po = yr;
  const _0x20f415 = $i(_0x4c96a1, _0xcc6d77, false, Ct);
  if (!_0x46c415 || !_0x46c415.render) {
    _0x20f415.user = true;
  }
  if (Mt) {
    Mt.push(_0x20f415);
  } else {
    ne(_0x20f415);
  }
}
function j(_0x2f11c9, _0xa3664a, _0x490d90) {
  _0x490d90 = _0x490d90 ? Object.assign({}, li, _0x490d90) : li;
  const _0x5e45d5 = $i(_0x2f11c9, _0xa3664a, true, 0);
  _0x5e45d5.observers = null;
  _0x5e45d5.observerSlots = null;
  _0x5e45d5.comparator = _0x490d90.equals || undefined;
  ne(_0x5e45d5);
  return bo.bind(_0x5e45d5);
}
function nn(_0x611252) {
  return Yt(_0x611252, false);
}
function it(_0x3aaef9) {
  if (z === null) {
    return _0x3aaef9();
  }
  const _0x284908 = z;
  z = null;
  try {
    return _0x3aaef9();
  } finally {
    z = _0x284908;
  }
}
function Be(_0x128c4e, _0x40ffe7, _0x18598e) {
  const _0x229505 = Array.isArray(_0x128c4e);
  let _0x12ffb9;
  let _0x55d109 = _0x18598e && _0x18598e.defer;
  return _0x3ff387 => {
    let _0x5d1331;
    if (_0x229505) {
      _0x5d1331 = Array(_0x128c4e.length);
      for (let _0x48787e = 0; _0x48787e < _0x128c4e.length; _0x48787e++) {
        _0x5d1331[_0x48787e] = _0x128c4e[_0x48787e]();
      }
    } else {
      _0x5d1331 = _0x128c4e();
    }
    if (_0x55d109) {
      _0x55d109 = false;
      return;
    }
    const _0x1f1dd7 = it(() => _0x40ffe7(_0x5d1331, _0x12ffb9, _0x3ff387));
    _0x12ffb9 = _0x5d1331;
    return _0x1f1dd7;
  };
}
function ie(_0x1a7af8) {
  pe(() => it(_0x1a7af8));
}
function Ut(_0x5e2ad2) {
  if (V !== null) {
    if (V.cleanups === null) {
      V.cleanups = [_0x5e2ad2];
    } else {
      V.cleanups.push(_0x5e2ad2);
    }
  }
  return _0x5e2ad2;
}
function _o() {
  return z;
}
function _r(_0x491c78) {
  const _0x5751de = z;
  const _0x5783f2 = V;
  return Promise.resolve().then(() => {
    z = _0x5751de;
    V = _0x5783f2;
    let _0x108c0a;
    Yt(_0x491c78, false);
    z = V = null;
    if (_0x108c0a) {
      return _0x108c0a.done;
    } else {
      return undefined;
    }
  });
}
function br() {
  return [pr, _r];
}
function bo() {
  if (this.sources && this.state) {
    if (this.state === Ct) {
      ne(this);
    } else {
      const _0xe4053e = G;
      G = null;
      Yt(() => di(this), false);
      G = _0xe4053e;
    }
  }
  if (z) {
    const _0x357e3c = this.observers ? this.observers.length : 0;
    if (z.sources) {
      z.sources.push(this);
      z.sourceSlots.push(_0x357e3c);
    } else {
      z.sources = [this];
      z.sourceSlots = [_0x357e3c];
    }
    if (this.observers) {
      this.observers.push(z);
      this.observerSlots.push(z.sources.length - 1);
    } else {
      this.observers = [z];
      this.observerSlots = [z.sources.length - 1];
    }
  }
  return this.value;
}
function xo(_0x3e4c67, _0xa3e951, _0x548ed4) {
  let _0x473a67 = _0x3e4c67.value;
  if (!_0x3e4c67.comparator || !_0x3e4c67.comparator(_0x473a67, _0xa3e951)) {
    _0x3e4c67.value = _0xa3e951;
    if (_0x3e4c67.observers && _0x3e4c67.observers.length) {
      Yt(() => {
        for (let _0x4d49bb = 0; _0x4d49bb < _0x3e4c67.observers.length; _0x4d49bb += 1) {
          const _0x26051b = _0x3e4c67.observers[_0x4d49bb];
          const _0x2a3493 = Ai && Ai.running;
          if (_0x2a3493) {
            Ai.disposed.has(_0x26051b);
          }
          if (_0x2a3493 ? !_0x26051b.tState : !_0x26051b.state) {
            if (_0x26051b.pure) {
              G.push(_0x26051b);
            } else {
              Mt.push(_0x26051b);
            }
            if (_0x26051b.observers) {
              yo(_0x26051b);
            }
          }
          if (!_0x2a3493) {
            _0x26051b.state = Ct;
          }
        }
        if (G.length > 1000000) {
          G = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0xa3e951;
}
function ne(_0x176968) {
  if (!_0x176968.fn) {
    return;
  }
  Mi(_0x176968);
  const _0x57f7ec = V;
  const _0x140a67 = z;
  const _0x23071a = ki;
  z = V = _0x176968;
  xr(_0x176968, _0x176968.value, _0x23071a);
  z = _0x140a67;
  V = _0x57f7ec;
}
function xr(_0xc75f4b, _0x41bef6, _0x498de0) {
  let _0x453a5a;
  try {
    _0x453a5a = _0xc75f4b.fn(_0x41bef6);
  } catch (_0x3d559d) {
    if (_0xc75f4b.pure) {
      _0xc75f4b.state = Ct;
      if (_0xc75f4b.owned) {
        _0xc75f4b.owned.forEach(Mi);
      }
      _0xc75f4b.owned = null;
    }
    _0xc75f4b.updatedAt = _0x498de0 + 1;
    return wo(_0x3d559d);
  }
  if (!_0xc75f4b.updatedAt || _0xc75f4b.updatedAt <= _0x498de0) {
    if (_0xc75f4b.updatedAt != null && "observers" in _0xc75f4b) {
      xo(_0xc75f4b, _0x453a5a);
    } else {
      _0xc75f4b.value = _0x453a5a;
    }
    _0xc75f4b.updatedAt = _0x498de0;
  }
}
function $i(_0x382088, _0x30ebe7, _0x626f24, _0x358bd7 = Ct, _0x10f259) {
  const _0x2618f0 = {
    fn: _0x382088,
    state: _0x358bd7,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x30ebe7,
    owner: V,
    context: null,
    pure: _0x626f24
  };
  if (V !== null) {
    if (V !== mo) {
      if (V.owned) {
        V.owned.push(_0x2618f0);
      } else {
        V.owned = [_0x2618f0];
      }
    }
  }
  return _0x2618f0;
}
function hi(_0x16133c) {
  if (_0x16133c.state === 0) {
    return;
  }
  if (_0x16133c.state === ci) {
    return di(_0x16133c);
  }
  if (_0x16133c.suspense && it(_0x16133c.suspense.inFallback)) {
    return _0x16133c.suspense.effects.push(_0x16133c);
  }
  const _0x192fbc = [_0x16133c];
  while ((_0x16133c = _0x16133c.owner) && (!_0x16133c.updatedAt || _0x16133c.updatedAt < ki)) {
    if (_0x16133c.state) {
      _0x192fbc.push(_0x16133c);
    }
  }
  for (let _0x51feb0 = _0x192fbc.length - 1; _0x51feb0 >= 0; _0x51feb0--) {
    _0x16133c = _0x192fbc[_0x51feb0];
    if (_0x16133c.state === Ct) {
      ne(_0x16133c);
    } else if (_0x16133c.state === ci) {
      const _0x2ea868 = G;
      G = null;
      Yt(() => di(_0x16133c, _0x192fbc[0]), false);
      G = _0x2ea868;
    }
  }
}
function Yt(_0x391673, _0x2d089a) {
  if (G) {
    return _0x391673();
  }
  let _0x480bd6 = false;
  if (!_0x2d089a) {
    G = [];
  }
  if (Mt) {
    _0x480bd6 = true;
  } else {
    Mt = [];
  }
  ki++;
  try {
    const _0x4efff4 = _0x391673();
    vr(_0x480bd6);
    return _0x4efff4;
  } catch (_0x42bc96) {
    if (!_0x480bd6) {
      Mt = null;
    }
    G = null;
    wo(_0x42bc96);
  }
}
function vr(_0x3bfae0) {
  if (G) {
    vo(G);
    G = null;
  }
  if (_0x3bfae0) {
    return;
  }
  const _0x2a5680 = Mt;
  Mt = null;
  if (_0x2a5680.length) {
    Yt(() => po(_0x2a5680), false);
  }
}
function vo(_0x41c598) {
  for (let _0x1f5948 = 0; _0x1f5948 < _0x41c598.length; _0x1f5948++) {
    hi(_0x41c598[_0x1f5948]);
  }
}
function yr(_0x286998) {
  let _0x71ec04;
  let _0x3ab390 = 0;
  for (_0x71ec04 = 0; _0x71ec04 < _0x286998.length; _0x71ec04++) {
    const _0xc4fffd = _0x286998[_0x71ec04];
    if (_0xc4fffd.user) {
      _0x286998[_0x3ab390++] = _0xc4fffd;
    } else {
      hi(_0xc4fffd);
    }
  }
  for (_0x71ec04 = 0; _0x71ec04 < _0x3ab390; _0x71ec04++) {
    hi(_0x286998[_0x71ec04]);
  }
}
function di(_0x353f8b, _0x3d7dde) {
  _0x353f8b.state = 0;
  for (let _0x14628f = 0; _0x14628f < _0x353f8b.sources.length; _0x14628f += 1) {
    const _0x201a73 = _0x353f8b.sources[_0x14628f];
    if (_0x201a73.sources) {
      const _0x587b27 = _0x201a73.state;
      if (_0x587b27 === Ct) {
        if (_0x201a73 !== _0x3d7dde && (!_0x201a73.updatedAt || _0x201a73.updatedAt < ki)) {
          hi(_0x201a73);
        }
      } else if (_0x587b27 === ci) {
        di(_0x201a73, _0x3d7dde);
      }
    }
  }
}
function yo(_0xc7b6ce) {
  for (let _0x3783a4 = 0; _0x3783a4 < _0xc7b6ce.observers.length; _0x3783a4 += 1) {
    const _0x1842b9 = _0xc7b6ce.observers[_0x3783a4];
    if (!_0x1842b9.state) {
      _0x1842b9.state = ci;
      if (_0x1842b9.pure) {
        G.push(_0x1842b9);
      } else {
        Mt.push(_0x1842b9);
      }
      if (_0x1842b9.observers) {
        yo(_0x1842b9);
      }
    }
  }
}
function Mi(_0x4690a9) {
  let _0x4755cb;
  if (_0x4690a9.sources) {
    while (_0x4690a9.sources.length) {
      const _0x13827c = _0x4690a9.sources.pop();
      const _0x214f9d = _0x4690a9.sourceSlots.pop();
      const _0x5a6a28 = _0x13827c.observers;
      if (_0x5a6a28 && _0x5a6a28.length) {
        const _0x299d6a = _0x5a6a28.pop();
        const _0x35e5a3 = _0x13827c.observerSlots.pop();
        if (_0x214f9d < _0x5a6a28.length) {
          _0x299d6a.sourceSlots[_0x35e5a3] = _0x214f9d;
          _0x5a6a28[_0x214f9d] = _0x299d6a;
          _0x13827c.observerSlots[_0x214f9d] = _0x35e5a3;
        }
      }
    }
  }
  if (_0x4690a9.owned) {
    for (_0x4755cb = _0x4690a9.owned.length - 1; _0x4755cb >= 0; _0x4755cb--) {
      Mi(_0x4690a9.owned[_0x4755cb]);
    }
    _0x4690a9.owned = null;
  }
  if (_0x4690a9.cleanups) {
    for (_0x4755cb = _0x4690a9.cleanups.length - 1; _0x4755cb >= 0; _0x4755cb--) {
      _0x4690a9.cleanups[_0x4755cb]();
    }
    _0x4690a9.cleanups = null;
  }
  _0x4690a9.state = 0;
  _0x4690a9.context = null;
}
function wo(_0x5124bc) {
  throw _0x5124bc;
}
const wr = Symbol("fallback");
function zn(_0x162cbb) {
  for (let _0x2e17ae = 0; _0x2e17ae < _0x162cbb.length; _0x2e17ae++) {
    _0x162cbb[_0x2e17ae]();
  }
}
function kr(_0x67ef97, _0x82c603, _0x587813 = {}) {
  let _0x24127b = [];
  let _0x5be5c1 = [];
  let _0x3197a1 = [];
  let _0x283dbb = 0;
  let _0x116a2b = _0x82c603.length > 1 ? [] : null;
  Ut(() => zn(_0x3197a1));
  return () => {
    let _0x8be225 = _0x67ef97() || [];
    let _0x1a3c7f;
    let _0x5c2ef3;
    _0x8be225[en];
    return it(() => {
      let _0x5bcc03 = _0x8be225.length;
      let _0x3cd8f0;
      let _0x2ea579;
      let _0x2505f3;
      let _0x5037c1;
      let _0x2ac431;
      let _0x1df85f;
      let _0x4b1d40;
      let _0x59f7a2;
      let _0x3cf90e;
      if (_0x5bcc03 === 0) {
        if (_0x283dbb !== 0) {
          zn(_0x3197a1);
          _0x3197a1 = [];
          _0x24127b = [];
          _0x5be5c1 = [];
          _0x283dbb = 0;
          _0x116a2b &&= [];
        }
        if (_0x587813.fallback) {
          _0x24127b = [wr];
          _0x5be5c1[0] = ni(_0x530265 => {
            _0x3197a1[0] = _0x530265;
            return _0x587813.fallback();
          });
          _0x283dbb = 1;
        }
      } else if (_0x283dbb === 0) {
        _0x5be5c1 = new Array(_0x5bcc03);
        _0x5c2ef3 = 0;
        for (; _0x5c2ef3 < _0x5bcc03; _0x5c2ef3++) {
          _0x24127b[_0x5c2ef3] = _0x8be225[_0x5c2ef3];
          _0x5be5c1[_0x5c2ef3] = ni(_0x526f2b);
        }
        _0x283dbb = _0x5bcc03;
      } else {
        _0x2505f3 = new Array(_0x5bcc03);
        _0x5037c1 = new Array(_0x5bcc03);
        if (_0x116a2b) {
          _0x2ac431 = new Array(_0x5bcc03);
        }
        _0x1df85f = 0;
        _0x4b1d40 = Math.min(_0x283dbb, _0x5bcc03);
        for (; _0x1df85f < _0x4b1d40 && _0x24127b[_0x1df85f] === _0x8be225[_0x1df85f]; _0x1df85f++);
        _0x4b1d40 = _0x283dbb - 1;
        _0x59f7a2 = _0x5bcc03 - 1;
        for (; _0x4b1d40 >= _0x1df85f && _0x59f7a2 >= _0x1df85f && _0x24127b[_0x4b1d40] === _0x8be225[_0x59f7a2]; _0x4b1d40--, _0x59f7a2--) {
          _0x2505f3[_0x59f7a2] = _0x5be5c1[_0x4b1d40];
          _0x5037c1[_0x59f7a2] = _0x3197a1[_0x4b1d40];
          if (_0x116a2b) {
            _0x2ac431[_0x59f7a2] = _0x116a2b[_0x4b1d40];
          }
        }
        _0x3cd8f0 = new Map();
        _0x2ea579 = new Array(_0x59f7a2 + 1);
        _0x5c2ef3 = _0x59f7a2;
        for (; _0x5c2ef3 >= _0x1df85f; _0x5c2ef3--) {
          _0x3cf90e = _0x8be225[_0x5c2ef3];
          _0x1a3c7f = _0x3cd8f0.get(_0x3cf90e);
          _0x2ea579[_0x5c2ef3] = _0x1a3c7f === undefined ? -1 : _0x1a3c7f;
          _0x3cd8f0.set(_0x3cf90e, _0x5c2ef3);
        }
        for (_0x1a3c7f = _0x1df85f; _0x1a3c7f <= _0x4b1d40; _0x1a3c7f++) {
          _0x3cf90e = _0x24127b[_0x1a3c7f];
          _0x5c2ef3 = _0x3cd8f0.get(_0x3cf90e);
          if (_0x5c2ef3 !== undefined && _0x5c2ef3 !== -1) {
            _0x2505f3[_0x5c2ef3] = _0x5be5c1[_0x1a3c7f];
            _0x5037c1[_0x5c2ef3] = _0x3197a1[_0x1a3c7f];
            if (_0x116a2b) {
              _0x2ac431[_0x5c2ef3] = _0x116a2b[_0x1a3c7f];
            }
            _0x5c2ef3 = _0x2ea579[_0x5c2ef3];
            _0x3cd8f0.set(_0x3cf90e, _0x5c2ef3);
          } else {
            _0x3197a1[_0x1a3c7f]();
          }
        }
        for (_0x5c2ef3 = _0x1df85f; _0x5c2ef3 < _0x5bcc03; _0x5c2ef3++) {
          if (_0x5c2ef3 in _0x2505f3) {
            _0x5be5c1[_0x5c2ef3] = _0x2505f3[_0x5c2ef3];
            _0x3197a1[_0x5c2ef3] = _0x5037c1[_0x5c2ef3];
            if (_0x116a2b) {
              _0x116a2b[_0x5c2ef3] = _0x2ac431[_0x5c2ef3];
              _0x116a2b[_0x5c2ef3](_0x5c2ef3);
            }
          } else {
            _0x5be5c1[_0x5c2ef3] = ni(_0x526f2b);
          }
        }
        _0x5be5c1 = _0x5be5c1.slice(0, _0x283dbb = _0x5bcc03);
        _0x24127b = _0x8be225.slice(0);
      }
      return _0x5be5c1;
    });
    function _0x526f2b(_0x1800a7) {
      _0x3197a1[_0x5c2ef3] = _0x1800a7;
      if (_0x116a2b) {
        const [_0x10e25e, _0x2fe56d] = lt(_0x5c2ef3);
        _0x116a2b[_0x5c2ef3] = _0x2fe56d;
        return _0x82c603(_0x8be225[_0x5c2ef3], _0x10e25e);
      }
      return _0x82c603(_0x8be225[_0x5c2ef3]);
    }
  };
}
function v(_0x52b353, _0x43098d) {
  return it(() => _0x52b353(_0x43098d || {}));
}
function je() {
  return true;
}
const $r = {
  get(_0x46e755, _0x44dc64, _0x572d96) {
    if (_0x44dc64 === bt) {
      return _0x572d96;
    } else {
      return _0x46e755.get(_0x44dc64);
    }
  },
  has(_0x4f8c2a, _0x292c01) {
    if (_0x292c01 === bt) {
      return true;
    } else {
      return _0x4f8c2a.has(_0x292c01);
    }
  },
  set: je,
  deleteProperty: je,
  getOwnPropertyDescriptor(_0x3d460f, _0x4a39d0) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _0x3d460f.get(_0x4a39d0);
      },
      set: je,
      deleteProperty: je
    };
  },
  ownKeys(_0x5d34f5) {
    return _0x5d34f5.keys();
  }
};
function Di(_0x4bbcb1) {
  if (_0x4bbcb1 = typeof _0x4bbcb1 == "function" ? _0x4bbcb1() : _0x4bbcb1) {
    return _0x4bbcb1;
  } else {
    return {};
  }
}
function Mr() {
  for (let _0x710167 = 0, _0x100834 = this.length; _0x710167 < _0x100834; ++_0x710167) {
    const _0x3fe731 = this[_0x710167]();
    if (_0x3fe731 !== undefined) {
      return _0x3fe731;
    }
  }
}
function xn(..._0xf31479) {
  let _0x2f4c22 = false;
  for (let _0x5cb4ca = 0; _0x5cb4ca < _0xf31479.length; _0x5cb4ca++) {
    const _0x289bcd = _0xf31479[_0x5cb4ca];
    _0x2f4c22 = _0x2f4c22 || !!_0x289bcd && bt in _0x289bcd;
    _0xf31479[_0x5cb4ca] = typeof _0x289bcd == "function" ? (_0x2f4c22 = true, j(_0x289bcd)) : _0x289bcd;
  }
  if (_0x2f4c22) {
    return new Proxy({
      get(_0x513261) {
        for (let _0x21037a = _0xf31479.length - 1; _0x21037a >= 0; _0x21037a--) {
          const _0x1f4d8e = Di(_0xf31479[_0x21037a])[_0x513261];
          if (_0x1f4d8e !== undefined) {
            return _0x1f4d8e;
          }
        }
      },
      has(_0x587c40) {
        for (let _0x488379 = _0xf31479.length - 1; _0x488379 >= 0; _0x488379--) {
          if (_0x587c40 in Di(_0xf31479[_0x488379])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const _0xdbcfa9 = [];
        for (let _0x142f06 = 0; _0x142f06 < _0xf31479.length; _0x142f06++) {
          _0xdbcfa9.push(...Object.keys(Di(_0xf31479[_0x142f06])));
        }
        return [...new Set(_0xdbcfa9)];
      }
    }, $r);
  }
  const _0x11f179 = {};
  const _0x35f3df = {};
  let _0x2ff446 = false;
  for (let _0x3351c4 = _0xf31479.length - 1; _0x3351c4 >= 0; _0x3351c4--) {
    const _0x202e1c = _0xf31479[_0x3351c4];
    if (!_0x202e1c) {
      continue;
    }
    const _0x1883a8 = Object.getOwnPropertyNames(_0x202e1c);
    _0x2ff446 = _0x2ff446 || _0x3351c4 !== 0 && !!_0x1883a8.length;
    for (let _0x190a86 = 0, _0x5b7412 = _0x1883a8.length; _0x190a86 < _0x5b7412; _0x190a86++) {
      const _0x2c7825 = _0x1883a8[_0x190a86];
      if (_0x2c7825 !== "__proto__" && _0x2c7825 !== "constructor") {
        if (_0x2c7825 in _0x11f179) {
          const _0x5352e9 = _0x35f3df[_0x2c7825];
          const _0x2fa436 = Object.getOwnPropertyDescriptor(_0x202e1c, _0x2c7825);
          if (_0x5352e9) {
            if (_0x2fa436.get) {
              _0x5352e9.push(_0x2fa436.get.bind(_0x202e1c));
            } else if (_0x2fa436.value !== undefined) {
              _0x5352e9.push(() => _0x2fa436.value);
            }
          } else if (_0x11f179[_0x2c7825] === undefined) {
            _0x11f179[_0x2c7825] = _0x2fa436.value;
          }
        } else {
          const _0x5e66e7 = Object.getOwnPropertyDescriptor(_0x202e1c, _0x2c7825);
          if (_0x5e66e7.get) {
            Object.defineProperty(_0x11f179, _0x2c7825, {
              enumerable: true,
              configurable: true,
              get: Mr.bind(_0x35f3df[_0x2c7825] = [_0x5e66e7.get.bind(_0x202e1c)])
            });
          } else {
            _0x11f179[_0x2c7825] = _0x5e66e7.value;
          }
        }
      }
    }
  }
  return _0x11f179;
}
const Sr = _0x363df0 => "Stale read from <" + _0x363df0 + ">.";
function se(_0x3bc4a2) {
  const _0x50049d = "fallback" in _0x3bc4a2 && {
    fallback: () => _0x3bc4a2.fallback
  };
  return j(kr(() => _0x3bc4a2.each, _0x3bc4a2.children, _0x50049d || undefined));
}
function ht(_0x7729a6) {
  const _0x38feda = _0x7729a6.keyed;
  const _0x32b0ba = j(() => _0x7729a6.when, undefined, {
    equals: (_0x590341, _0x50f40c) => _0x38feda ? _0x590341 === _0x50f40c : !_0x590341 == !_0x50f40c
  });
  return j(() => {
    const _0xf27e06 = _0x32b0ba();
    if (_0xf27e06) {
      const _0x523cee = _0x7729a6.children;
      if (typeof _0x523cee == "function" && _0x523cee.length > 0) {
        return it(() => _0x523cee(_0x38feda ? _0xf27e06 : () => {
          if (!it(_0x32b0ba)) {
            throw Sr("Show");
          }
          return _0x7729a6.when;
        }));
      } else {
        return _0x523cee;
      }
    }
    return _0x7729a6.fallback;
  }, undefined, undefined);
}
function Cr(_0x33e98, _0x4b0ed0, _0x2537fd) {
  let _0x445f8e = _0x2537fd.length;
  let _0x5636cd = _0x4b0ed0.length;
  let _0x1d6f99 = _0x445f8e;
  let _0x5d3a5d = 0;
  let _0x4bf35b = 0;
  let _0x5f503b = _0x4b0ed0[_0x5636cd - 1].nextSibling;
  let _0x4151a4 = null;
  while (_0x5d3a5d < _0x5636cd || _0x4bf35b < _0x1d6f99) {
    if (_0x4b0ed0[_0x5d3a5d] === _0x2537fd[_0x4bf35b]) {
      _0x5d3a5d++;
      _0x4bf35b++;
      continue;
    }
    while (_0x4b0ed0[_0x5636cd - 1] === _0x2537fd[_0x1d6f99 - 1]) {
      _0x5636cd--;
      _0x1d6f99--;
    }
    if (_0x5636cd === _0x5d3a5d) {
      const _0x415f9b = _0x1d6f99 < _0x445f8e ? _0x4bf35b ? _0x2537fd[_0x4bf35b - 1].nextSibling : _0x2537fd[_0x1d6f99 - _0x4bf35b] : _0x5f503b;
      while (_0x4bf35b < _0x1d6f99) {
        _0x33e98.insertBefore(_0x2537fd[_0x4bf35b++], _0x415f9b);
      }
    } else if (_0x1d6f99 === _0x4bf35b) {
      while (_0x5d3a5d < _0x5636cd) {
        if (!_0x4151a4 || !_0x4151a4.has(_0x4b0ed0[_0x5d3a5d])) {
          _0x4b0ed0[_0x5d3a5d].remove();
        }
        _0x5d3a5d++;
      }
    } else if (_0x4b0ed0[_0x5d3a5d] === _0x2537fd[_0x1d6f99 - 1] && _0x2537fd[_0x4bf35b] === _0x4b0ed0[_0x5636cd - 1]) {
      const _0x3e237c = _0x4b0ed0[--_0x5636cd].nextSibling;
      _0x33e98.insertBefore(_0x2537fd[_0x4bf35b++], _0x4b0ed0[_0x5d3a5d++].nextSibling);
      _0x33e98.insertBefore(_0x2537fd[--_0x1d6f99], _0x3e237c);
      _0x4b0ed0[_0x5636cd] = _0x2537fd[_0x1d6f99];
    } else {
      if (!_0x4151a4) {
        _0x4151a4 = new Map();
        let _0x134dd2 = _0x4bf35b;
        while (_0x134dd2 < _0x1d6f99) {
          _0x4151a4.set(_0x2537fd[_0x134dd2], _0x134dd2++);
        }
      }
      const _0x862d00 = _0x4151a4.get(_0x4b0ed0[_0x5d3a5d]);
      if (_0x862d00 != null) {
        if (_0x4bf35b < _0x862d00 && _0x862d00 < _0x1d6f99) {
          let _0x19bef3 = _0x5d3a5d;
          let _0x1226e8 = 1;
          let _0x509ead;
          while (++_0x19bef3 < _0x5636cd && _0x19bef3 < _0x1d6f99 && (_0x509ead = _0x4151a4.get(_0x4b0ed0[_0x19bef3])) != null && _0x509ead === _0x862d00 + _0x1226e8) {
            _0x1226e8++;
          }
          if (_0x1226e8 > _0x862d00 - _0x4bf35b) {
            const _0x8cd265 = _0x4b0ed0[_0x5d3a5d];
            while (_0x4bf35b < _0x862d00) {
              _0x33e98.insertBefore(_0x2537fd[_0x4bf35b++], _0x8cd265);
            }
          } else {
            _0x33e98.replaceChild(_0x2537fd[_0x4bf35b++], _0x4b0ed0[_0x5d3a5d++]);
          }
        } else {
          _0x5d3a5d++;
        }
      } else {
        _0x4b0ed0[_0x5d3a5d++].remove();
      }
    }
  }
}
const Bn = "_$DX_DELEGATE";
function Pr(_0x1a222e, _0x45d782, _0x28e81c, _0x155fe7 = {}) {
  let _0x4a9ab3;
  ni(_0xdd9733 => {
    _0x4a9ab3 = _0xdd9733;
    if (_0x45d782 === document) {
      _0x1a222e();
    } else {
      w(_0x45d782, _0x1a222e(), _0x45d782.firstChild ? null : undefined, _0x28e81c);
    }
  }, _0x155fe7.owner);
  return () => {
    _0x4a9ab3();
    _0x45d782.textContent = "";
  };
}
function D(_0x7fddcc, _0x4eb82c, _0x18f1b0) {
  let _0x533eeb;
  const _0x112ed9 = () => {
    const _0x2613b8 = document.createElement("template");
    _0x2613b8.innerHTML = _0x7fddcc;
    if (_0x18f1b0) {
      return _0x2613b8.content.firstChild.firstChild;
    } else {
      return _0x2613b8.content.firstChild;
    }
  };
  const _0x40b8d2 = _0x4eb82c ? () => it(() => document.importNode(_0x533eeb ||= _0x112ed9(), true)) : () => (_0x533eeb ||= _0x112ed9()).cloneNode(true);
  _0x40b8d2.cloneNode = _0x40b8d2;
  return _0x40b8d2;
}
function ko(_0x5b5900, _0x3dea86 = window.document) {
  const _0x38c001 = _0x3dea86[Bn] ||= new Set();
  for (let _0x1b03f2 = 0, _0x224b24 = _0x5b5900.length; _0x1b03f2 < _0x224b24; _0x1b03f2++) {
    const _0x1896d0 = _0x5b5900[_0x1b03f2];
    if (!_0x38c001.has(_0x1896d0)) {
      _0x38c001.add(_0x1896d0);
      _0x3dea86.addEventListener(_0x1896d0, Ar);
    }
  }
}
function St(_0x30564f, _0x8bd670, _0x4fbcad) {
  if (_0x4fbcad == null) {
    _0x30564f.removeAttribute(_0x8bd670);
  } else {
    _0x30564f.setAttribute(_0x8bd670, _0x4fbcad);
  }
}
function x(_0x11e94d, _0x4ee41f) {
  if (_0x4ee41f == null) {
    _0x11e94d.removeAttribute("class");
  } else {
    _0x11e94d.className = _0x4ee41f;
  }
}
function Ae(_0x10604f, _0x3dd295, _0x9ba3c9 = {}) {
  const _0x433b2a = Object.keys(_0x3dd295 || {});
  const _0x494701 = Object.keys(_0x9ba3c9);
  let _0x39dc9d;
  let _0x2192f7;
  _0x39dc9d = 0;
  _0x2192f7 = _0x494701.length;
  for (; _0x39dc9d < _0x2192f7; _0x39dc9d++) {
    const _0x527181 = _0x494701[_0x39dc9d];
    if (!!_0x527181 && _0x527181 !== "undefined" && !_0x3dd295[_0x527181]) {
      jn(_0x10604f, _0x527181, false);
      delete _0x9ba3c9[_0x527181];
    }
  }
  _0x39dc9d = 0;
  _0x2192f7 = _0x433b2a.length;
  for (; _0x39dc9d < _0x2192f7; _0x39dc9d++) {
    const _0x542fe3 = _0x433b2a[_0x39dc9d];
    const _0x3a50ab = !!_0x3dd295[_0x542fe3];
    if (!!_0x542fe3 && _0x542fe3 !== "undefined" && _0x9ba3c9[_0x542fe3] !== _0x3a50ab && !!_0x3a50ab) {
      jn(_0x10604f, _0x542fe3, true);
      _0x9ba3c9[_0x542fe3] = _0x3a50ab;
    }
  }
  return _0x9ba3c9;
}
function Or(_0x38824b, _0x1f8cc9, _0x5c1835) {
  return it(() => _0x38824b(_0x1f8cc9, _0x5c1835));
}
function w(_0x109d37, _0xc732d6, _0x421952, _0x5a44d7) {
  if (_0x421952 !== undefined && !_0x5a44d7) {
    _0x5a44d7 = [];
  }
  if (typeof _0xc732d6 != "function") {
    return fi(_0x109d37, _0xc732d6, _0x5a44d7, _0x421952);
  }
  P(_0x38f1d5 => fi(_0x109d37, _0xc732d6(), _0x38f1d5, _0x421952), _0x5a44d7);
}
function jn(_0x50a6b4, _0x3e7ac2, _0x55bdde) {
  const _0x51185b = _0x3e7ac2.trim().split(/\s+/);
  for (let _0x319dd8 = 0, _0x474fff = _0x51185b.length; _0x319dd8 < _0x474fff; _0x319dd8++) {
    _0x50a6b4.classList.toggle(_0x51185b[_0x319dd8], _0x55bdde);
  }
}
function Ar(_0x22623d) {
  const _0x229907 = "$$" + _0x22623d.type;
  let _0x1948f0 = _0x22623d.composedPath && _0x22623d.composedPath()[0] || _0x22623d.target;
  if (_0x22623d.target !== _0x1948f0) {
    Object.defineProperty(_0x22623d, "target", {
      configurable: true,
      value: _0x1948f0
    });
  }
  Object.defineProperty(_0x22623d, "currentTarget", {
    configurable: true,
    get() {
      return _0x1948f0 || document;
    }
  });
  while (_0x1948f0) {
    const _0x10678f = _0x1948f0[_0x229907];
    if (_0x10678f && !_0x1948f0.disabled) {
      const _0x4967f5 = _0x1948f0[_0x229907 + "Data"];
      if (_0x4967f5 !== undefined) {
        _0x10678f.call(_0x1948f0, _0x4967f5, _0x22623d);
      } else {
        _0x10678f.call(_0x1948f0, _0x22623d);
      }
      if (_0x22623d.cancelBubble) {
        return;
      }
    }
    _0x1948f0 = _0x1948f0._$host || _0x1948f0.parentNode || _0x1948f0.host;
  }
}
function fi(_0x55bfd5, _0xdffb99, _0x5ea14d, _0x2fbb0a, _0x596046) {
  while (typeof _0x5ea14d == "function") {
    _0x5ea14d = _0x5ea14d();
  }
  if (_0xdffb99 === _0x5ea14d) {
    return _0x5ea14d;
  }
  const _0x3a66b0 = typeof _0xdffb99;
  const _0xe357 = _0x2fbb0a !== undefined;
  _0x55bfd5 = _0xe357 && _0x5ea14d[0] && _0x5ea14d[0].parentNode || _0x55bfd5;
  if (_0x3a66b0 === "string" || _0x3a66b0 === "number") {
    if (_0x3a66b0 === "number") {
      _0xdffb99 = _0xdffb99.toString();
    }
    if (_0xe357) {
      let _0xe2ea5d = _0x5ea14d[0];
      if (_0xe2ea5d && _0xe2ea5d.nodeType === 3) {
        _0xe2ea5d.data = _0xdffb99;
      } else {
        _0xe2ea5d = document.createTextNode(_0xdffb99);
      }
      _0x5ea14d = Gt(_0x55bfd5, _0x5ea14d, _0x2fbb0a, _0xe2ea5d);
    } else if (_0x5ea14d !== "" && typeof _0x5ea14d == "string") {
      _0x5ea14d = _0x55bfd5.firstChild.data = _0xdffb99;
    } else {
      _0x5ea14d = _0x55bfd5.textContent = _0xdffb99;
    }
  } else if (_0xdffb99 == null || _0x3a66b0 === "boolean") {
    _0x5ea14d = Gt(_0x55bfd5, _0x5ea14d, _0x2fbb0a);
  } else {
    if (_0x3a66b0 === "function") {
      P(() => {
        let _0x1490f8 = _0xdffb99();
        while (typeof _0x1490f8 == "function") {
          _0x1490f8 = _0x1490f8();
        }
        _0x5ea14d = fi(_0x55bfd5, _0x1490f8, _0x5ea14d, _0x2fbb0a);
      });
      return () => _0x5ea14d;
    }
    if (Array.isArray(_0xdffb99)) {
      const _0x497f7e = [];
      const _0x2442aa = _0x5ea14d && Array.isArray(_0x5ea14d);
      if (sn(_0x497f7e, _0xdffb99, _0x5ea14d, _0x596046)) {
        P(() => _0x5ea14d = fi(_0x55bfd5, _0x497f7e, _0x5ea14d, _0x2fbb0a, true));
        return () => _0x5ea14d;
      }
      if (_0x497f7e.length === 0) {
        _0x5ea14d = Gt(_0x55bfd5, _0x5ea14d, _0x2fbb0a);
        if (_0xe357) {
          return _0x5ea14d;
        }
      } else if (_0x2442aa) {
        if (_0x5ea14d.length === 0) {
          Nn(_0x55bfd5, _0x497f7e, _0x2fbb0a);
        } else {
          Cr(_0x55bfd5, _0x5ea14d, _0x497f7e);
        }
      } else {
        if (_0x5ea14d) {
          Gt(_0x55bfd5);
        }
        Nn(_0x55bfd5, _0x497f7e);
      }
      _0x5ea14d = _0x497f7e;
    } else if (_0xdffb99.nodeType) {
      if (Array.isArray(_0x5ea14d)) {
        if (_0xe357) {
          return _0x5ea14d = Gt(_0x55bfd5, _0x5ea14d, _0x2fbb0a, _0xdffb99);
        }
        Gt(_0x55bfd5, _0x5ea14d, null, _0xdffb99);
      } else if (_0x5ea14d == null || _0x5ea14d === "" || !_0x55bfd5.firstChild) {
        _0x55bfd5.appendChild(_0xdffb99);
      } else {
        _0x55bfd5.replaceChild(_0xdffb99, _0x55bfd5.firstChild);
      }
      _0x5ea14d = _0xdffb99;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0xdffb99);
    }
  }
  return _0x5ea14d;
}
function sn(_0x530359, _0xc58332, _0x3d5878, _0x123aca) {
  let _0x3a21c4 = false;
  for (let _0x25e358 = 0, _0x34c1c6 = _0xc58332.length; _0x25e358 < _0x34c1c6; _0x25e358++) {
    let _0x4c6700 = _0xc58332[_0x25e358];
    let _0xa187c6 = _0x3d5878 && _0x3d5878[_0x25e358];
    let _0x3eed36;
    if (_0x4c6700 != null && _0x4c6700 !== true && _0x4c6700 !== false) {
      if ((_0x3eed36 = typeof _0x4c6700) == "object" && _0x4c6700.nodeType) {
        _0x530359.push(_0x4c6700);
      } else if (Array.isArray(_0x4c6700)) {
        _0x3a21c4 = sn(_0x530359, _0x4c6700, _0xa187c6) || _0x3a21c4;
      } else if (_0x3eed36 === "function") {
        if (_0x123aca) {
          while (typeof _0x4c6700 == "function") {
            _0x4c6700 = _0x4c6700();
          }
          _0x3a21c4 = sn(_0x530359, Array.isArray(_0x4c6700) ? _0x4c6700 : [_0x4c6700], Array.isArray(_0xa187c6) ? _0xa187c6 : [_0xa187c6]) || _0x3a21c4;
        } else {
          _0x530359.push(_0x4c6700);
          _0x3a21c4 = true;
        }
      } else {
        const _0x4cdf4f = String(_0x4c6700);
        if (_0xa187c6 && _0xa187c6.nodeType === 3 && _0xa187c6.data === _0x4cdf4f) {
          _0x530359.push(_0xa187c6);
        } else {
          _0x530359.push(document.createTextNode(_0x4cdf4f));
        }
      }
    }
  }
  return _0x3a21c4;
}
function Nn(_0x1223a0, _0x4b5e11, _0x467afc = null) {
  for (let _0x538c17 = 0, _0x9b0844 = _0x4b5e11.length; _0x538c17 < _0x9b0844; _0x538c17++) {
    _0x1223a0.insertBefore(_0x4b5e11[_0x538c17], _0x467afc);
  }
}
function Gt(_0xd3b7ea, _0x170468, _0x4d1b22, _0x18701b) {
  if (_0x4d1b22 === undefined) {
    return _0xd3b7ea.textContent = "";
  }
  const _0x89b158 = _0x18701b || document.createTextNode("");
  if (_0x170468.length) {
    let _0x50e7ef = false;
    for (let _0x2fe39e = _0x170468.length - 1; _0x2fe39e >= 0; _0x2fe39e--) {
      const _0x27b7e6 = _0x170468[_0x2fe39e];
      if (_0x89b158 !== _0x27b7e6) {
        const _0x1e8352 = _0x27b7e6.parentNode === _0xd3b7ea;
        if (!_0x50e7ef && !_0x2fe39e) {
          if (_0x1e8352) {
            _0xd3b7ea.replaceChild(_0x89b158, _0x27b7e6);
          } else {
            _0xd3b7ea.insertBefore(_0x89b158, _0x4d1b22);
          }
        } else if (_0x1e8352) {
          _0x27b7e6.remove();
        }
      } else {
        _0x50e7ef = true;
      }
    }
  } else {
    _0xd3b7ea.insertBefore(_0x89b158, _0x4d1b22);
  }
  return [_0x89b158];
}
const Dr = "_App_49s8q_1";
const Lr = "_container_49s8q_10";
const Tr = "_border_container_49s8q_51";
const Li = {
  App: Dr,
  container: Lr,
  border_container: Tr
};
const Er = "_title_1rh44_1";
const Rr = "_description_1rh44_11";
const Ir = "_icon_1rh44_21";
const Fr = "_keybind_1rh44_27";
const zr = "_text_1rh44_43";
const Br = "_button_1rh44_46";
const jr = "_selector_1rh44_57";
const vt = {
  title: Er,
  description: Rr,
  icon: Ir,
  keybind: Fr,
  text: zr,
  button: Br,
  selector: jr
};
const Nr = D("<div><div><svg width=\"0.37vh\" height=\"0.74vh\" viewBox=\"0 0 4 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M-1.52989e-07 4.00001L4 7.5L4 0.5L-1.52989e-07 4.00001Z\" fill=\"white\"></div><p></p><div><svg width=\"0.37vh\" height=\"0.74vh\" viewBox=\"0 0 4 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M-1.52989e-07 4.00001L4 7.5L4 0.5L-1.52989e-07 4.00001Z\" fill=\"white\">");
const Hr = D("<div class=\"flex w-full flex-row items-center justify-between\"><div class=\"flex flex-row items-start justify-start gap-[1vh]\"><i></i><div class=\"flex flex-col items-start justify-center\"><div>CONTROL PANEL</div><div>Manage your planters and keep track of your plants</div></div></div><div class=\"flex flex-col items-end justify-center gap-[1vh]\"><div><div>Exit</div><div>Escape</div></div><div class=\"flex flex-row items-center justify-center gap-[0.5vh]\">");
const Wr = _0x4c16c4 => {
  const [_0x44f210, _0x37be0f] = lt(0);
  const [_0x5dcffa, _0x2899f6] = lt(mt.sequence[_0x4c16c4.index]);
  const _0x403e6a = () => {
    const _0x1ede90 = mt.validInputs;
    _0x1b40a8.execute("weed:controlPanel:combinationChange", _0x4c16c4.index, _0x1ede90[_0x44f210()]);
    cn("sequence", _0x3994d2 => {
      _0x3994d2[_0x4c16c4.index] = _0x1ede90[_0x44f210()];
      return _0x3994d2;
    });
    _0x2899f6(mt.sequence[_0x4c16c4.index]);
  };
  return (() => {
    const _0x348a95 = Nr();
    const _0x2e29b4 = _0x348a95.firstChild;
    const _0x5af066 = _0x2e29b4.nextSibling;
    const _0x199227 = _0x5af066.nextSibling;
    _0x2e29b4.$$click = () => {
      _0x37be0f(_0x2eef01 => Math.max(0, (_0x2eef01 - 1) % mt.validInputs.length));
      _0x403e6a();
    };
    w(_0x5af066, _0x5dcffa);
    _0x199227.$$click = () => {
      _0x37be0f(_0x45b326 => (_0x45b326 + 1) % mt.validInputs.length);
      _0x403e6a();
    };
    P(_0x55668a => {
      const _0x511d97 = vt.selector;
      const _0x39fba5 = vt.button;
      const _0x2cecf2 = vt.button;
      if (_0x511d97 !== _0x55668a._v$) {
        x(_0x348a95, _0x55668a._v$ = _0x511d97);
      }
      if (_0x39fba5 !== _0x55668a._v$2) {
        x(_0x2e29b4, _0x55668a._v$2 = _0x39fba5);
      }
      if (_0x2cecf2 !== _0x55668a._v$3) {
        x(_0x199227, _0x55668a._v$3 = _0x2cecf2);
      }
      return _0x55668a;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x348a95;
  })();
};
const Vr = () => (() => {
  const _0x52f3b4 = Hr();
  const _0xd0330e = _0x52f3b4.firstChild;
  const _0xcc452 = _0xd0330e.firstChild;
  const _0x3bf18c = _0xcc452.nextSibling;
  const _0x12ebf4 = _0x3bf18c.firstChild;
  const _0xae6c59 = _0x12ebf4.nextSibling;
  const _0x2f14c5 = _0xd0330e.nextSibling;
  const _0x4905bf = _0x2f14c5.firstChild;
  const _0x2d70e8 = _0x4905bf.firstChild;
  const _0x3af27d = _0x2d70e8.nextSibling;
  const _0x4e40c9 = _0x4905bf.nextSibling;
  w(_0x4e40c9, v(se, {
    get each() {
      return Array(mt.emojiLength);
    },
    children: (_0x43e27f, _0x53540c) => v(Wr, {
      get index() {
        return _0x53540c();
      }
    })
  }));
  P(_0x8972ee => {
    const _0x21c1af = vt.icon + " fa-solid fa-heat mt-[0.4vh]";
    const _0x3d3f89 = vt.title;
    const _0x422768 = vt.description;
    const _0x5f20d4 = vt.keybind;
    const _0x3fd108 = vt.text;
    const _0x4af0cf = vt.button;
    if (_0x21c1af !== _0x8972ee._v$4) {
      x(_0xcc452, _0x8972ee._v$4 = _0x21c1af);
    }
    if (_0x3d3f89 !== _0x8972ee._v$5) {
      x(_0x12ebf4, _0x8972ee._v$5 = _0x3d3f89);
    }
    if (_0x422768 !== _0x8972ee._v$6) {
      x(_0xae6c59, _0x8972ee._v$6 = _0x422768);
    }
    if (_0x5f20d4 !== _0x8972ee._v$7) {
      x(_0x4905bf, _0x8972ee._v$7 = _0x5f20d4);
    }
    if (_0x3fd108 !== _0x8972ee._v$8) {
      x(_0x2d70e8, _0x8972ee._v$8 = _0x3fd108);
    }
    if (_0x4af0cf !== _0x8972ee._v$9) {
      x(_0x3af27d, _0x8972ee._v$9 = _0x4af0cf);
    }
    return _0x8972ee;
  }, {
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined,
    _v$7: undefined,
    _v$8: undefined,
    _v$9: undefined
  });
  return _0x52f3b4;
})();
ko(["click"]);
const Ur = "_container_1uku7_1";
const Yr = "_line_1uku7_12";
const Hn = {
  container: Ur,
  line: Yr
};
const Kr = D("<div><div>");
const qr = () => (() => {
  const _0x5420de = Kr();
  const _0x39fd0a = _0x5420de.firstChild;
  P(_0x3b050e => {
    const _0x144a6b = Hn.container;
    const _0x2e1807 = Hn.line;
    if (_0x144a6b !== _0x3b050e._v$) {
      x(_0x5420de, _0x3b050e._v$ = _0x144a6b);
    }
    if (_0x2e1807 !== _0x3b050e._v$2) {
      x(_0x39fd0a, _0x3b050e._v$2 = _0x2e1807);
    }
    return _0x3b050e;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x5420de;
})();
const Xr = "_container_1s98u_1";
const Gr = "_imageContainer_1s98u_15";
const Zr = "_text_1s98u_33";
const Qr = "_titleContainer_1s98u_53";
const Jr = "_sliderContainer_1s98u_70";
const ta = "_header_1s98u_83";
const ea = "_textBox_1s98u_108";
const kt = {
  container: Xr,
  imageContainer: Gr,
  text: Zr,
  titleContainer: Qr,
  sliderContainer: Jr,
  header: ta,
  textBox: ea
};
const $o = {
  Seed: {
    lifeLength: 3600,
    model: "np_indoor_weed_small_plant"
  },
  Seedling: {
    lifeLength: 3600,
    model: "np_indoor_weed_small_plant"
  },
  Sapling: {
    lifeLength: 3600,
    model: "np_indoor_weed_medium_plant"
  },
  Crossbreed: {
    lifeLength: 3600,
    model: "np_indoor_weed_medium_plant"
  },
  Mature: {
    lifeLength: 21600,
    model: "np_indoor_weed_big_plant"
  },
  Dying: {
    lifeLength: 3600,
    model: "np_indoor_weed_big_plant"
  }
};
const on = 600000;
const ia = D("<div><div>Plant #</div><div class=\"flex h-full w-full flex-row items-center justify-between gap-[2vh] px-[1vh]\"><p>Age</p><div></div></div><div class=\"flex h-full w-full flex-row items-center justify-between gap-[2vh] px-[1vh]\"><p>Stage</p><div></div></div><div class=\"flex h-full w-full flex-row items-center justify-between gap-[2vh] px-[1vh]\"><p>Water</p><div>%");
const na = D("<div><div><div><span> Plants</div><div class=\"flex flex-col items-center justify-center\"><svg width=\"9.81vh\" height=\"9.81vh\" viewBox=\"0 0 106 106\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M106 53C106 82.2711 82.2711 106 53 106C23.7289 106 0 82.2711 0 53C0 23.7289 23.7289 0 53 0C82.2711 0 106 23.7289 106 53ZM0.999725 53C0.999725 81.719 24.281 105 53 105C81.719 105 105 81.719 105 53C105 24.281 81.719 0.999725 53 0.999725C24.281 0.999725 0.999725 24.281 0.999725 53Z\" fill=\"white\" fill-opacity=\"0.07\"></path><path d=\"M100 53C100 78.9574 78.9574 100 53 100C27.0426 100 6 78.9574 6 53C6 27.0426 27.0426 6 53 6C78.9574 6 100 27.0426 100 53ZM20.6564 53C20.6564 70.8629 35.1371 85.3436 53 85.3436C70.8629 85.3436 85.3436 70.8629 85.3436 53C85.3436 35.1371 70.8629 20.6564 53 20.6564C35.1371 20.6564 20.6564 35.1371 20.6564 53Z\" fill=\"url(#paint0_radial_7723_429)\" fill-opacity=\"0.05\"></path><path d=\"M106 53C106 60.6182 104.358 68.1468 101.185 75.0728C98.0122 81.9989 93.3837 88.1595 87.6147 93.135L86.9618 92.378C92.6219 87.4963 97.1632 81.4519 100.276 74.6565C103.389 67.8611 105 60.4745 105 53H106Z\" fill=\"#00F8B9\"></path><path d=\"M1.72771 39.5779C3.65699 32.2081 7.15237 25.3408 11.9757 19.444C16.799 13.5472 22.8368 8.75955 29.6777 5.40723L30.1176 6.30496C23.4058 9.59404 17.4818 14.2914 12.7495 20.077C8.01718 25.8625 4.58773 32.6003 2.69485 39.8311L1.72771 39.5779Z\" fill=\"#00F8B9\"></path><defs><radialGradient id=\"paint0_radial_7723_429\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(53 53) rotate(-90) scale(47)\"><stop stop-color=\"white\"></stop><stop offset=\"1\" stop-color=\"#999999\"></svg><img class=\"absolute\"></div></div><div>Planter #");
const sa = _0x2011e2 => {
  const _0x537c54 = j(() => {
    const _0x141b33 = _0x2011e2.plantData.public.age;
    const _0x2abb98 = Math.floor(_0x141b33 / 3600);
    const _0x31e81e = Math.floor(_0x141b33 % 3600 / 60);
    const _0x8c7bbc = Math.floor(_0x141b33 % 60);
    return _0x2abb98 + "h " + _0x31e81e + "m " + _0x8c7bbc + "s";
  });
  const _0x42ee20 = j(() => {
    const _0x13a654 = _0x2011e2.plantData.public.currentStage;
    if (!_0x13a654) {
      return "Unknown";
    }
    const _0x507acb = $o[_0x13a654];
    const _0x591b58 = _0x2011e2.plantData.public.stageAge / _0x507acb.lifeLength * 100;
    return _0x13a654 + " (" + _0x591b58.toFixed(0) + "%)";
  });
  return (() => {
    const _0x4bf2fa = ia();
    const _0x58645c = _0x4bf2fa.firstChild;
    _0x58645c.firstChild;
    const _0x276b82 = _0x58645c.nextSibling;
    const _0x5b43be = _0x276b82.firstChild;
    const _0x1823a9 = _0x5b43be.nextSibling;
    const _0x667c6b = _0x276b82.nextSibling;
    const _0x44ba10 = _0x667c6b.firstChild;
    const _0x19cc1a = _0x44ba10.nextSibling;
    const _0x36b763 = _0x667c6b.nextSibling;
    const _0x310e6b = _0x36b763.firstChild;
    const _0x4479c4 = _0x310e6b.nextSibling;
    const _0x59c706 = _0x4479c4.firstChild;
    w(_0x58645c, () => _0x2011e2.index + 1, null);
    w(_0x1823a9, _0x537c54);
    w(_0x19cc1a, _0x42ee20);
    w(_0x4479c4, () => _0x2011e2.plantData.public.water.toFixed(1), _0x59c706);
    P(_0xc75d3e => {
      const _0x2450f4 = kt.sliderContainer;
      const _0x5b5181 = kt.header;
      const _0x3513d8 = kt.textBox;
      const _0x448a90 = kt.textBox;
      const _0x51dca3 = kt.textBox;
      if (_0x2450f4 !== _0xc75d3e._v$) {
        x(_0x4bf2fa, _0xc75d3e._v$ = _0x2450f4);
      }
      if (_0x5b5181 !== _0xc75d3e._v$2) {
        x(_0x58645c, _0xc75d3e._v$2 = _0x5b5181);
      }
      if (_0x3513d8 !== _0xc75d3e._v$3) {
        x(_0x1823a9, _0xc75d3e._v$3 = _0x3513d8);
      }
      if (_0x448a90 !== _0xc75d3e._v$4) {
        x(_0x19cc1a, _0xc75d3e._v$4 = _0x448a90);
      }
      if (_0x51dca3 !== _0xc75d3e._v$5) {
        x(_0x4479c4, _0xc75d3e._v$5 = _0x51dca3);
      }
      return _0xc75d3e;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return _0x4bf2fa;
  })();
};
const oa = _0x4b9040 => {
  const _0x494fb3 = j(() => Object.values(_0x4b9040.public?.plants ?? []).length);
  const _0x19a68f = _0x4e9876 => _0x4e9876 === "np_indoor_weed_dirt_02" ? "planter_box_medium" : "planter_box";
  return (() => {
    const _0x4384fc = na();
    const _0x4dce9e = _0x4384fc.firstChild;
    const _0x29f955 = _0x4dce9e.firstChild;
    const _0x40d396 = _0x29f955.firstChild;
    const _0x224efe = _0x29f955.nextSibling;
    const _0x319068 = _0x224efe.firstChild;
    const _0xd90f54 = _0x319068.nextSibling;
    const _0x363065 = _0x4dce9e.nextSibling;
    _0x363065.firstChild;
    w(_0x29f955, _0x494fb3, _0x40d396);
    St(_0xd90f54, "draggable", false);
    w(_0x363065, () => _0x4b9040.index + 1, null);
    w(_0x4384fc, v(ht, {
      get when() {
        return _0x4b9040?.public?.plants;
      },
      get children() {
        return v(se, {
          get each() {
            return Object.values(_0x4b9040.public?.plants);
          },
          children: (_0xe86303, _0x2f9fd1) => v(sa, {
            get index() {
              return _0x2f9fd1();
            },
            plantData: _0xe86303
          })
        });
      }
    }), null);
    P(_0x174f34 => {
      const _0x5b41bf = kt.container;
      const _0x3984bf = kt.imageContainer;
      const _0x272c22 = kt.text;
      const _0x35608f = "https://assets.nopixel.net/dev/images/inventory/icons/" + _0x19a68f(_0x4b9040.model) + ".png";
      const _0x5a8afd = kt.titleContainer;
      if (_0x5b41bf !== _0x174f34._v$6) {
        x(_0x4384fc, _0x174f34._v$6 = _0x5b41bf);
      }
      if (_0x3984bf !== _0x174f34._v$7) {
        x(_0x4dce9e, _0x174f34._v$7 = _0x3984bf);
      }
      if (_0x272c22 !== _0x174f34._v$8) {
        x(_0x29f955, _0x174f34._v$8 = _0x272c22);
      }
      if (_0x35608f !== _0x174f34._v$9) {
        St(_0xd90f54, "src", _0x174f34._v$9 = _0x35608f);
      }
      if (_0x5a8afd !== _0x174f34._v$10) {
        x(_0x363065, _0x174f34._v$10 = _0x5a8afd);
      }
      return _0x174f34;
    }, {
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined
    });
    return _0x4384fc;
  })();
};
const rn = Symbol("store-raw");
const ke = Symbol("store-node");
function Mo(_0x4ed7dc) {
  let _0x54d2a6 = _0x4ed7dc[bt];
  if (!_0x54d2a6 && (Object.defineProperty(_0x4ed7dc, bt, {
    value: _0x54d2a6 = new Proxy(_0x4ed7dc, la)
  }), !Array.isArray(_0x4ed7dc))) {
    const _0x3c176c = Object.keys(_0x4ed7dc);
    const _0x283b7a = Object.getOwnPropertyDescriptors(_0x4ed7dc);
    for (let _0x5463b6 = 0, _0x1b39cb = _0x3c176c.length; _0x5463b6 < _0x1b39cb; _0x5463b6++) {
      const _0x4aa043 = _0x3c176c[_0x5463b6];
      if (_0x283b7a[_0x4aa043].get) {
        Object.defineProperty(_0x4ed7dc, _0x4aa043, {
          enumerable: _0x283b7a[_0x4aa043].enumerable,
          get: _0x283b7a[_0x4aa043].get.bind(_0x54d2a6)
        });
      }
    }
  }
  return _0x54d2a6;
}
function ui(_0x4f4607) {
  let _0x459b62;
  return _0x4f4607 != null && typeof _0x4f4607 == "object" && (_0x4f4607[bt] || !(_0x459b62 = Object.getPrototypeOf(_0x4f4607)) || _0x459b62 === Object.prototype || Array.isArray(_0x4f4607));
}
function te(_0x4de32e, _0x2e1f15 = new Set()) {
  let _0x583bb7;
  let _0x1a5c4c;
  let _0x43494e;
  let _0x6ec842;
  if (_0x583bb7 = _0x4de32e != null && _0x4de32e[rn]) {
    return _0x583bb7;
  }
  if (!ui(_0x4de32e) || _0x2e1f15.has(_0x4de32e)) {
    return _0x4de32e;
  }
  if (Array.isArray(_0x4de32e)) {
    if (Object.isFrozen(_0x4de32e)) {
      _0x4de32e = _0x4de32e.slice(0);
    } else {
      _0x2e1f15.add(_0x4de32e);
    }
    for (let _0x1b9643 = 0, _0x419de7 = _0x4de32e.length; _0x1b9643 < _0x419de7; _0x1b9643++) {
      _0x43494e = _0x4de32e[_0x1b9643];
      if ((_0x1a5c4c = te(_0x43494e, _0x2e1f15)) !== _0x43494e) {
        _0x4de32e[_0x1b9643] = _0x1a5c4c;
      }
    }
  } else {
    if (Object.isFrozen(_0x4de32e)) {
      _0x4de32e = Object.assign({}, _0x4de32e);
    } else {
      _0x2e1f15.add(_0x4de32e);
    }
    const _0x591086 = Object.keys(_0x4de32e);
    const _0x5a53ec = Object.getOwnPropertyDescriptors(_0x4de32e);
    for (let _0x4ca0bc = 0, _0x3b99d3 = _0x591086.length; _0x4ca0bc < _0x3b99d3; _0x4ca0bc++) {
      _0x6ec842 = _0x591086[_0x4ca0bc];
      if (!_0x5a53ec[_0x6ec842].get) {
        _0x43494e = _0x4de32e[_0x6ec842];
        if ((_0x1a5c4c = te(_0x43494e, _0x2e1f15)) !== _0x43494e) {
          _0x4de32e[_0x6ec842] = _0x1a5c4c;
        }
      }
    }
  }
  return _0x4de32e;
}
function vn(_0x704ebe) {
  let _0x2ae305 = _0x704ebe[ke];
  if (!_0x2ae305) {
    Object.defineProperty(_0x704ebe, ke, {
      value: _0x2ae305 = Object.create(null)
    });
  }
  return _0x2ae305;
}
function an(_0x50eab4, _0x5d7c7a, _0x10c313) {
  return _0x50eab4[_0x5d7c7a] ||= Co(_0x10c313);
}
function ra(_0x4c5f33, _0x5ab2b0) {
  const _0x1ddeb7 = Reflect.getOwnPropertyDescriptor(_0x4c5f33, _0x5ab2b0);
  if (!!_0x1ddeb7 && !_0x1ddeb7.get && !!_0x1ddeb7.configurable && _0x5ab2b0 !== bt && _0x5ab2b0 !== ke) {
    delete _0x1ddeb7.value;
    delete _0x1ddeb7.writable;
    _0x1ddeb7.get = () => _0x4c5f33[bt][_0x5ab2b0];
  }
  return _0x1ddeb7;
}
function So(_0x4de0e2) {
  if (_o()) {
    const _0x43ea25 = vn(_0x4de0e2);
    (_0x43ea25._ ||= Co())();
  }
}
function aa(_0x43b1f5) {
  So(_0x43b1f5);
  return Reflect.ownKeys(_0x43b1f5);
}
function Co(_0x5795b6) {
  const [_0x39ff68, _0x580b29] = lt(_0x5795b6, {
    equals: false,
    internal: true
  });
  _0x39ff68.$ = _0x580b29;
  return _0x39ff68;
}
const la = {
  get(_0x4afb57, _0x404b21, _0x4dec8c) {
    if (_0x404b21 === rn) {
      return _0x4afb57;
    }
    if (_0x404b21 === bt) {
      return _0x4dec8c;
    }
    if (_0x404b21 === en) {
      So(_0x4afb57);
      return _0x4dec8c;
    }
    const _0x32825e = vn(_0x4afb57);
    const _0x12f8e2 = _0x32825e[_0x404b21];
    let _0x1cb28c = _0x12f8e2 ? _0x12f8e2() : _0x4afb57[_0x404b21];
    if (_0x404b21 === ke || _0x404b21 === "__proto__") {
      return _0x1cb28c;
    }
    if (!_0x12f8e2) {
      const _0x45593e = Object.getOwnPropertyDescriptor(_0x4afb57, _0x404b21);
      if (_o() && (typeof _0x1cb28c != "function" || _0x4afb57.hasOwnProperty(_0x404b21)) && (!_0x45593e || !_0x45593e.get)) {
        _0x1cb28c = an(_0x32825e, _0x404b21, _0x1cb28c)();
      }
    }
    if (ui(_0x1cb28c)) {
      return Mo(_0x1cb28c);
    } else {
      return _0x1cb28c;
    }
  },
  has(_0x56e27d, _0x222e1a) {
    if (_0x222e1a === rn || _0x222e1a === bt || _0x222e1a === en || _0x222e1a === ke || _0x222e1a === "__proto__") {
      return true;
    } else {
      this.get(_0x56e27d, _0x222e1a, _0x56e27d);
      return _0x222e1a in _0x56e27d;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: aa,
  getOwnPropertyDescriptor: ra
};
function gi(_0x223c0e, _0x3910aa, _0x2868ad, _0x27d40d = false) {
  if (!_0x27d40d && _0x223c0e[_0x3910aa] === _0x2868ad) {
    return;
  }
  const _0x50aa3d = _0x223c0e[_0x3910aa];
  const _0x3d6ffe = _0x223c0e.length;
  if (_0x2868ad === undefined) {
    delete _0x223c0e[_0x3910aa];
  } else {
    _0x223c0e[_0x3910aa] = _0x2868ad;
  }
  let _0x405027 = vn(_0x223c0e);
  let _0x5c665e;
  if (_0x5c665e = an(_0x405027, _0x3910aa, _0x50aa3d)) {
    _0x5c665e.$(() => _0x2868ad);
  }
  if (Array.isArray(_0x223c0e) && _0x223c0e.length !== _0x3d6ffe) {
    for (let _0x2eaf4a = _0x223c0e.length; _0x2eaf4a < _0x3d6ffe; _0x2eaf4a++) {
      if (_0x5c665e = _0x405027[_0x2eaf4a]) {
        _0x5c665e.$();
      }
    }
    if (_0x5c665e = an(_0x405027, "length", _0x3d6ffe)) {
      _0x5c665e.$(_0x223c0e.length);
    }
  }
  if (_0x5c665e = _0x405027._) {
    _0x5c665e.$();
  }
}
function Po(_0x607ca1, _0x1da469) {
  const _0x65c990 = Object.keys(_0x1da469);
  for (let _0x4ec8ea = 0; _0x4ec8ea < _0x65c990.length; _0x4ec8ea += 1) {
    const _0x2976c9 = _0x65c990[_0x4ec8ea];
    gi(_0x607ca1, _0x2976c9, _0x1da469[_0x2976c9]);
  }
}
function ca(_0x4c5afc, _0x1cf418) {
  if (typeof _0x1cf418 == "function") {
    _0x1cf418 = _0x1cf418(_0x4c5afc);
  }
  _0x1cf418 = te(_0x1cf418);
  if (Array.isArray(_0x1cf418)) {
    if (_0x4c5afc === _0x1cf418) {
      return;
    }
    let _0x1d75f5 = 0;
    let _0x5449c0 = _0x1cf418.length;
    for (; _0x1d75f5 < _0x5449c0; _0x1d75f5++) {
      const _0x4558e9 = _0x1cf418[_0x1d75f5];
      if (_0x4c5afc[_0x1d75f5] !== _0x4558e9) {
        gi(_0x4c5afc, _0x1d75f5, _0x4558e9);
      }
    }
    gi(_0x4c5afc, "length", _0x5449c0);
  } else {
    Po(_0x4c5afc, _0x1cf418);
  }
}
function me(_0x56d29c, _0x51374a, _0x3e26c7 = []) {
  let _0x1e2105;
  let _0x3b1711 = _0x56d29c;
  if (_0x51374a.length > 1) {
    _0x1e2105 = _0x51374a.shift();
    const _0x4641bf = typeof _0x1e2105;
    const _0x3663d7 = Array.isArray(_0x56d29c);
    if (Array.isArray(_0x1e2105)) {
      for (let _0x3c0df4 = 0; _0x3c0df4 < _0x1e2105.length; _0x3c0df4++) {
        me(_0x56d29c, [_0x1e2105[_0x3c0df4]].concat(_0x51374a), _0x3e26c7);
      }
      return;
    } else if (_0x3663d7 && _0x4641bf === "function") {
      for (let _0x17bae1 = 0; _0x17bae1 < _0x56d29c.length; _0x17bae1++) {
        if (_0x1e2105(_0x56d29c[_0x17bae1], _0x17bae1)) {
          me(_0x56d29c, [_0x17bae1].concat(_0x51374a), _0x3e26c7);
        }
      }
      return;
    } else if (_0x3663d7 && _0x4641bf === "object") {
      const {
        from: _0x24314b = 0,
        to: _0x4c1b0a = _0x56d29c.length - 1,
        by: _0x850ce0 = 1
      } = _0x1e2105;
      for (let _0xd6a899 = _0x24314b; _0xd6a899 <= _0x4c1b0a; _0xd6a899 += _0x850ce0) {
        me(_0x56d29c, [_0xd6a899].concat(_0x51374a), _0x3e26c7);
      }
      return;
    } else if (_0x51374a.length > 1) {
      me(_0x56d29c[_0x1e2105], _0x51374a, [_0x1e2105].concat(_0x3e26c7));
      return;
    }
    _0x3b1711 = _0x56d29c[_0x1e2105];
    _0x3e26c7 = [_0x1e2105].concat(_0x3e26c7);
  }
  let _0x4ef7bb = _0x51374a[0];
  if ((typeof _0x4ef7bb != "function" || !(_0x4ef7bb = _0x4ef7bb(_0x3b1711, _0x3e26c7), _0x4ef7bb === _0x3b1711)) && (_0x1e2105 !== undefined || _0x4ef7bb != null)) {
    _0x4ef7bb = te(_0x4ef7bb);
    if (_0x1e2105 === undefined || ui(_0x3b1711) && ui(_0x4ef7bb) && !Array.isArray(_0x4ef7bb)) {
      Po(_0x3b1711, _0x4ef7bb);
    } else {
      gi(_0x56d29c, _0x1e2105, _0x4ef7bb);
    }
  }
}
function De(...[_0x4863c1, _0xb92d84]) {
  const _0x81209a = te(_0x4863c1 || {});
  const _0x482945 = Array.isArray(_0x81209a);
  const _0x5b1229 = Mo(_0x81209a);
  function _0x1403af(..._0x26e386) {
    nn(() => {
      if (_0x482945 && _0x26e386.length === 1) {
        ca(_0x81209a, _0x26e386[0]);
      } else {
        me(_0x81209a, _0x26e386);
      }
    });
  }
  return [_0x5b1229, _0x1403af];
}
var ha = () => {};
var Wn = (_0x3e5146, _0x41d909) => _0x41d909();
function da(_0x2295f1, _0x141d21) {
  const _0x3d03c5 = it(_0x2295f1);
  const _0x3b0740 = _0x3d03c5 ? [_0x3d03c5] : [];
  const {
    onEnter: _0x5a4aab = Wn,
    onExit: _0x25ced8 = Wn
  } = _0x141d21;
  const [_0x5c229d, _0x3ff46e] = lt(_0x141d21.appear ? [] : _0x3b0740);
  const [_0x1f78a5] = br();
  let _0x10efff;
  let _0x3e84be = false;
  function _0x4fdc86(_0x384a75, _0x1c1525) {
    if (!_0x384a75) {
      return _0x1c1525 && _0x1c1525();
    }
    _0x3e84be = true;
    _0x25ced8(_0x384a75, () => {
      nn(() => {
        _0x3e84be = false;
        _0x3ff46e(_0x25bbfa => _0x25bbfa.filter(_0x311015 => _0x311015 !== _0x384a75));
        if (_0x1c1525) {
          _0x1c1525();
        }
      });
    });
  }
  function _0x3e39a9(_0x59e6f6) {
    const _0x40ab7e = _0x10efff;
    if (!_0x40ab7e) {
      return _0x59e6f6 && _0x59e6f6();
    }
    _0x10efff = undefined;
    _0x3ff46e(_0x2a72aa => [_0x40ab7e, ..._0x2a72aa]);
    _0x5a4aab(_0x40ab7e, _0x59e6f6 ?? ha);
  }
  const _0x3f0557 = _0x141d21.mode === "out-in" ? _0x144254 => _0x3e84be || _0x4fdc86(_0x144254, _0x3e39a9) : _0x141d21.mode === "in-out" ? _0x417483 => _0x3e39a9(() => _0x4fdc86(_0x417483)) : _0x6e497 => {
    _0x4fdc86(_0x6e497);
    _0x3e39a9();
  };
  mr(_0x1fc223 => {
    const _0x3072d1 = _0x2295f1();
    if (it(_0x1f78a5)) {
      _0x1f78a5();
      return _0x1fc223;
    } else {
      if (_0x3072d1 !== _0x1fc223) {
        _0x10efff = _0x3072d1;
        nn(() => it(() => _0x3f0557(_0x1fc223)));
      }
      return _0x3072d1;
    }
  }, _0x141d21.appear ? undefined : _0x3d03c5);
  return _0x5c229d;
}
function fa(_0x3df702) {
  return (..._0x2dd563) => {
    for (const _0x5c1df9 of _0x3df702) {
      if (_0x5c1df9) {
        _0x5c1df9(..._0x2dd563);
      }
    }
  };
}
function Vn(..._0x4c5761) {
  return fa(_0x4c5761);
}
var Un = _0x563aa3 => _0x563aa3 instanceof Element;
function ln(_0x3613f3, _0x20bf0f) {
  if (_0x20bf0f(_0x3613f3)) {
    return _0x3613f3;
  }
  if (typeof _0x3613f3 == "function" && !_0x3613f3.length) {
    return ln(_0x3613f3(), _0x20bf0f);
  }
  if (Array.isArray(_0x3613f3)) {
    for (const _0x5f3918 of _0x3613f3) {
      const _0x39e985 = ln(_0x5f3918, _0x20bf0f);
      if (_0x39e985) {
        return _0x39e985;
      }
    }
  }
  return null;
}
function ua(_0x4c50cf, _0x39b01d = Un, _0x14981a = Un) {
  const _0x3bbffb = j(_0x4c50cf);
  return j(() => ln(_0x3bbffb(), _0x39b01d));
}
function ga(_0x533fda) {
  return j(() => {
    const _0x5058d6 = _0x533fda.name || "s";
    return {
      enterActive: (_0x533fda.enterActiveClass || _0x5058d6 + "-enter-active").split(" "),
      enter: (_0x533fda.enterClass || _0x5058d6 + "-enter").split(" "),
      enterTo: (_0x533fda.enterToClass || _0x5058d6 + "-enter-to").split(" "),
      exitActive: (_0x533fda.exitActiveClass || _0x5058d6 + "-exit-active").split(" "),
      exit: (_0x533fda.exitClass || _0x5058d6 + "-exit").split(" "),
      exitTo: (_0x533fda.exitToClass || _0x5058d6 + "-exit-to").split(" "),
      move: (_0x533fda.moveClass || _0x5058d6 + "-move").split(" ")
    };
  });
}
function Oo(_0x24b79e) {
  requestAnimationFrame(() => requestAnimationFrame(_0x24b79e));
}
function pa(_0x3f23b0, _0x552cd1, _0xbc3b1c, _0x566dbb) {
  const {
    onBeforeEnter: _0x41ea42,
    onEnter: _0x581e2b,
    onAfterEnter: _0x14a39b
  } = _0x552cd1;
  _0x41ea42?.(_0xbc3b1c);
  _0xbc3b1c.classList.add(..._0x3f23b0.enter);
  _0xbc3b1c.classList.add(..._0x3f23b0.enterActive);
  queueMicrotask(() => {
    if (!_0xbc3b1c.parentNode) {
      return _0x566dbb?.();
    }
    _0x581e2b?.(_0xbc3b1c, () => _0x3f92d8());
  });
  Oo(() => {
    _0xbc3b1c.classList.remove(..._0x3f23b0.enter);
    _0xbc3b1c.classList.add(..._0x3f23b0.enterTo);
    if (!_0x581e2b || _0x581e2b.length < 2) {
      _0xbc3b1c.addEventListener("transitionend", _0x3f92d8);
      _0xbc3b1c.addEventListener("animationend", _0x3f92d8);
    }
  });
  function _0x3f92d8(_0x17926f) {
    if (!_0x17926f || _0x17926f.target === _0xbc3b1c) {
      _0x566dbb?.();
      _0xbc3b1c.removeEventListener("transitionend", _0x3f92d8);
      _0xbc3b1c.removeEventListener("animationend", _0x3f92d8);
      _0xbc3b1c.classList.remove(..._0x3f23b0.enterActive);
      _0xbc3b1c.classList.remove(..._0x3f23b0.enterTo);
      _0x14a39b?.(_0xbc3b1c);
    }
  }
}
function ma(_0x5ce75c, _0xcfea1f, _0x3e8890, _0x1963ae) {
  const {
    onBeforeExit: _0x3e2584,
    onExit: _0x5f54d6,
    onAfterExit: _0x264b6c
  } = _0xcfea1f;
  if (!_0x3e8890.parentNode) {
    return _0x1963ae?.();
  }
  _0x3e2584?.(_0x3e8890);
  _0x3e8890.classList.add(..._0x5ce75c.exit);
  _0x3e8890.classList.add(..._0x5ce75c.exitActive);
  _0x5f54d6?.(_0x3e8890, () => _0x32916f());
  Oo(() => {
    _0x3e8890.classList.remove(..._0x5ce75c.exit);
    _0x3e8890.classList.add(..._0x5ce75c.exitTo);
    if (!_0x5f54d6 || _0x5f54d6.length < 2) {
      _0x3e8890.addEventListener("transitionend", _0x32916f);
      _0x3e8890.addEventListener("animationend", _0x32916f);
    }
  });
  function _0x32916f(_0x59df3e) {
    if (!_0x59df3e || _0x59df3e.target === _0x3e8890) {
      _0x1963ae?.();
      _0x3e8890.removeEventListener("transitionend", _0x32916f);
      _0x3e8890.removeEventListener("animationend", _0x32916f);
      _0x3e8890.classList.remove(..._0x5ce75c.exitActive);
      _0x3e8890.classList.remove(..._0x5ce75c.exitTo);
      _0x264b6c?.(_0x3e8890);
    }
  }
}
var _a = {
  inout: "in-out",
  outin: "out-in"
};
var xe = _0x45bc99 => {
  const _0x21e1f3 = ga(_0x45bc99);
  return da(ua(() => _0x45bc99.children), {
    mode: _a[_0x45bc99.mode],
    appear: _0x45bc99.appear,
    onEnter(_0x4ad876, _0xc691d2) {
      pa(_0x21e1f3(), _0x45bc99, _0x4ad876, _0xc691d2);
    },
    onExit(_0x3b3f9c, _0x296dbc) {
      ma(_0x21e1f3(), _0x45bc99, _0x3b3f9c, _0x296dbc);
    }
  });
};
const ba = D("<div><div><div><div class=\"grid h-full w-full grid-cols-4 gap-[1vh] overflow-auto px-[3vh]\">");
const [mt, cn] = De({
  show: false,
  data: [],
  sequence: [],
  validInputs: [],
  emojiLength: 0
});
const xa = () => {
  _0x1b40a8.register("weed-planters:data", async _0x1fe35e => {
    cn({
      ..._0x1fe35e
    });
  });
  const _0x1c32bc = _0x4d06de => {
    if (_0x4d06de.key === "Escape" && mt.show) {
      cn({
        show: false
      });
      _0x1b40a8.execute("close");
    }
  };
  ie(async () => {
    document.addEventListener("keydown", _0x1c32bc);
  });
  Ut(() => {
    document.removeEventListener("keydown", _0x1c32bc);
  });
  return v(xe, {
    name: "slide-bottom",
    get children() {
      return v(ht, {
        get when() {
          return mt.show && mt.data;
        },
        get children() {
          const _0xb631a4 = ba();
          const _0x3a6174 = _0xb631a4.firstChild;
          const _0x4bb2a6 = _0x3a6174.firstChild;
          const _0x2b5683 = _0x4bb2a6.firstChild;
          w(_0x4bb2a6, v(Vr, {}), _0x2b5683);
          w(_0x4bb2a6, v(qr, {}), _0x2b5683);
          w(_0x2b5683, v(se, {
            get each() {
              return mt.data;
            },
            children: (_0x399789, _0x4c8db2) => v(oa, xn({
              get index() {
                return _0x4c8db2();
              }
            }, _0x399789))
          }));
          P(_0x52d40c => {
            const _0x473121 = Li.App;
            const _0x125a17 = Li.container;
            const _0x3b32af = Li.border_container;
            if (_0x473121 !== _0x52d40c._v$) {
              x(_0xb631a4, _0x52d40c._v$ = _0x473121);
            }
            if (_0x125a17 !== _0x52d40c._v$2) {
              x(_0x3a6174, _0x52d40c._v$2 = _0x125a17);
            }
            if (_0x3b32af !== _0x52d40c._v$3) {
              x(_0x4bb2a6, _0x52d40c._v$3 = _0x3b32af);
            }
            return _0x52d40c;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined
          });
          return _0xb631a4;
        }
      });
    }
  });
};
const va = "_title_hg5o8_1";
const ya = "_description_hg5o8_12";
const Yn = {
  title: va,
  description: ya
};
const wa = D("<div class=\"flex flex-col items-center justify-start\"><div>PLANTER INSPECTION</div><div>Inspect the planter and its contents");
const ka = () => (() => {
  const _0x15a6c1 = wa();
  const _0x5004db = _0x15a6c1.firstChild;
  const _0x2340fc = _0x5004db.nextSibling;
  P(_0x2ca3d4 => {
    const _0x33adac = Yn.title;
    const _0x1db69b = Yn.description;
    if (_0x33adac !== _0x2ca3d4._v$) {
      x(_0x5004db, _0x2ca3d4._v$ = _0x33adac);
    }
    if (_0x1db69b !== _0x2ca3d4._v$2) {
      x(_0x2340fc, _0x2ca3d4._v$2 = _0x1db69b);
    }
    return _0x2ca3d4;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x15a6c1;
})();
const $a = "_container_i49dn_1";
const Ma = "_bar_i49dn_11";
const Kn = {
  container: $a,
  bar: Ma
};
const Sa = D("<div><div>");
const Ca = () => (() => {
  const _0x454233 = Sa();
  const _0x39f0f1 = _0x454233.firstChild;
  P(_0x2aa59f => {
    const _0x5990e1 = Kn.container;
    const _0xe243c1 = Kn.bar;
    if (_0x5990e1 !== _0x2aa59f._v$) {
      x(_0x454233, _0x2aa59f._v$ = _0x5990e1);
    }
    if (_0xe243c1 !== _0x2aa59f._v$2) {
      x(_0x39f0f1, _0x2aa59f._v$2 = _0xe243c1);
    }
    return _0x2aa59f;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x454233;
})();
const Pa = "_App_1ayef_1";
const Oa = "_container_1ayef_11";
const Aa = "_border_container_1ayef_51";
const Ti = {
  App: Pa,
  container: Oa,
  border_container: Aa
};
const Da = "_container_19qgi_1";
const La = "_divider_19qgi_15";
const Ei = {
  container: Da,
  divider: La
};
const Ta = D("<div><div></div><div>");
const Ea = _0x25916f => (() => {
  const _0x57c586 = Ta();
  const _0x170f58 = _0x57c586.firstChild;
  const _0x5d7032 = _0x170f58.nextSibling;
  w(_0x57c586, () => _0x25916f.text, _0x5d7032);
  P(_0x4c1dc8 => {
    const _0x43b4c7 = Ei.container;
    const _0x5c4037 = Ei.divider;
    const _0x1aded9 = Ei.divider;
    if (_0x43b4c7 !== _0x4c1dc8._v$) {
      x(_0x57c586, _0x4c1dc8._v$ = _0x43b4c7);
    }
    if (_0x5c4037 !== _0x4c1dc8._v$2) {
      x(_0x170f58, _0x4c1dc8._v$2 = _0x5c4037);
    }
    if (_0x1aded9 !== _0x4c1dc8._v$3) {
      x(_0x5d7032, _0x4c1dc8._v$3 = _0x1aded9);
    }
    return _0x4c1dc8;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0x57c586;
})();
const Ra = "_infoBox_1ghty_1";
const Ia = {
  infoBox: Ra
};
const Fa = D("<div class=\"flex w-full flex-col items-center justify-center gap-[1vh]\"><div class=\"relative flex flex-col items-center justify-center\"><svg class=\"absolute\" xmlns=\"http://www.w3.org/2000/svg\" width=\"8.61vh\" height=\"10.46vh\" viewBox=\"0 0 93 113\" fill=\"none\"><rect x=\"32\" width=\"29\" height=\"113\" rx=\"2\" fill=\"url(#paint0_radial_8181_363)\" fill-opacity=\"0.11\"></rect><rect y=\"18\" width=\"20\" height=\"77\" rx=\"2\" fill=\"url(#paint1_radial_8181_363)\" fill-opacity=\"0.11\"></rect><rect x=\"73\" y=\"18\" width=\"20\" height=\"77\" rx=\"2\" fill=\"url(#paint2_radial_8181_363)\" fill-opacity=\"0.11\"></rect><defs><radialGradient id=\"paint0_radial_8181_363\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(46.3474 5.15523e-06) rotate(83.692) scale(109.899 33.0331)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00664C\"></radialGradient><radialGradient id=\"paint1_radial_8181_363\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(9.89474 18) rotate(83.6164) scale(74.8977 22.7781)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00664C\"></radialGradient><radialGradient id=\"paint2_radial_8181_363\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(82.8947 18) rotate(83.6164) scale(74.8977 22.7781)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00664C\"></svg><img></div><div><h1></h1><p>Check the status of your planter");
const za = () => {
  const _0x4a8b8c = _0x437e8b => _0x437e8b === "np_indoor_weed_dirt_02" ? "planter_box_medium" : "planter_box";
  const _0x272af8 = _0x54d234 => _0x54d234 === "np_indoor_weed_dirt_02" ? "Planter (Medium)" : "Planter (Small)";
  return (() => {
    const _0xe36ea8 = Fa();
    const _0x3f7efd = _0xe36ea8.firstChild;
    const _0x3f1b6a = _0x3f7efd.firstChild;
    const _0x3dc525 = _0x3f1b6a.nextSibling;
    const _0xc228fb = _0x3f7efd.nextSibling;
    const _0x51bbca = _0xc228fb.firstChild;
    St(_0x3dc525, "draggable", false);
    w(_0x51bbca, () => _0x272af8(yt.data.model));
    P(_0x1b43f7 => {
      const _0xe4a750 = "https://assets.nopixel.net/dev/images/inventory/icons/" + _0x4a8b8c(yt.data.model) + ".png";
      const _0x46f44b = Ia.infoBox;
      if (_0xe4a750 !== _0x1b43f7._v$) {
        St(_0x3dc525, "src", _0x1b43f7._v$ = _0xe4a750);
      }
      if (_0x46f44b !== _0x1b43f7._v$2) {
        x(_0xc228fb, _0x1b43f7._v$2 = _0x46f44b);
      }
      return _0x1b43f7;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0xe36ea8;
  })();
};
const Ba = "_iconBox_187t9_1";
const qn = {
  iconBox: Ba
};
const ja = D("<div class=\"flex flex-col items-center justify-between gap-[1vh]\"><div><i></i></div><div class=\"flex flex-col items-center justify-center\"><h1></h1><p>");
const Ne = _0x37a90e => (() => {
  const _0xc17139 = ja();
  const _0x126ee7 = _0xc17139.firstChild;
  const _0x1ebe94 = _0x126ee7.firstChild;
  const _0x4ae556 = _0x126ee7.nextSibling;
  const _0x4dc1a6 = _0x4ae556.firstChild;
  const _0x2fdcdd = _0x4dc1a6.nextSibling;
  w(_0x4dc1a6, () => _0x37a90e.label);
  w(_0x2fdcdd, () => _0x37a90e.text ?? _0x37a90e.progress?.toFixed(1) + "%");
  P(_0x52c18e => {
    const _0x294b2d = qn.iconBox;
    const _0x51d5cb = _0x37a90e.icon;
    const _0x546a57 = {
      [qn.required]: _0x37a90e.required
    };
    if (_0x294b2d !== _0x52c18e._v$) {
      x(_0x126ee7, _0x52c18e._v$ = _0x294b2d);
    }
    if (_0x51d5cb !== _0x52c18e._v$2) {
      x(_0x1ebe94, _0x52c18e._v$2 = _0x51d5cb);
    }
    _0x52c18e._v$3 = Ae(_0x2fdcdd, _0x546a57, _0x52c18e._v$3);
    return _0x52c18e;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0xc17139;
})();
const Na = D("<div><div><div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"></div><div class=\"flex w-full flex-row items-center justify-center gap-[3vh]\">");
const [yt, Ha] = De({
  show: false,
  data: {}
});
_0x1b40a8.register("weed-planter:data", async _0x7a4b07 => {
  Ha({
    ..._0x7a4b07
  });
});
const Wa = () => {
  const [_0x2c3190, _0x334b72] = lt(0);
  const _0x2abf72 = j(() => {
    const _0x36cb01 = _0x2c3190();
    if (_0x36cb01 <= 0) {
      return "Calculating...";
    }
    const _0x322a8c = Math.floor(_0x36cb01 / 60);
    const _0x5aef64 = Math.floor(_0x36cb01 % 60);
    return _0x322a8c + "m " + _0x5aef64 + "s";
  });
  const _0x11de3f = j(() => {
    if (Object.entries(yt.data).length === 0) {
      return "Calculating...";
    }
    const _0x357dff = on / 1000;
    return (yt.data.public.waterUsage / _0x357dff).toFixed(1) + "L/m";
  });
  let _0x2b422b;
  ie(() => {
    _0x2b422b = setInterval(() => {
      if (!yt.data) {
        return;
      }
      const _0x5622aa = (yt.data.public.lastUpdate ?? 0) + on / 1000 - Date.now() / 1000;
      _0x334b72(_0x5622aa);
    }, 1000);
  });
  Ut(() => {
    clearInterval(_0x2b422b);
  });
  return (() => {
    const _0x32a446 = Na();
    const _0x1e42d0 = _0x32a446.firstChild;
    const _0x486d40 = _0x1e42d0.firstChild;
    const _0xe52328 = _0x486d40.firstChild;
    const _0x23a918 = _0xe52328.nextSibling;
    w(_0xe52328, v(ka, {}), null);
    w(_0xe52328, v(Ca, {}), null);
    w(_0x486d40, v(za, {}), _0x23a918);
    w(_0x486d40, v(Ea, {
      text: "Conditions"
    }), _0x23a918);
    w(_0x23a918, v(Ne, {
      icon: "fa-sharp fa-solid fa-heart",
      label: "Health",
      get progress() {
        return yt.data.public.health;
      }
    }), null);
    w(_0x23a918, v(Ne, {
      icon: "fa-sharp fa-solid fa-droplet",
      label: "Water Intake",
      get text() {
        return _0x11de3f();
      }
    }), null);
    w(_0x23a918, v(Ne, {
      icon: "fa-sharp fa-solid fa-bag-seedling",
      label: "Fertilizer",
      get progress() {
        return yt.data.public.fertilizer;
      }
    }), null);
    w(_0x23a918, v(Ne, {
      icon: "fa-regular fa-calendar-lines-pen",
      label: "Next Update",
      get text() {
        return _0x2abf72();
      }
    }), null);
    P(_0x67c8 => {
      const _0x391eff = Ti.App;
      const _0x5ed449 = Ti.container;
      const _0x4a1c2c = Ti.border_container;
      if (_0x391eff !== _0x67c8._v$) {
        x(_0x32a446, _0x67c8._v$ = _0x391eff);
      }
      if (_0x5ed449 !== _0x67c8._v$2) {
        x(_0x1e42d0, _0x67c8._v$2 = _0x5ed449);
      }
      if (_0x4a1c2c !== _0x67c8._v$3) {
        x(_0x486d40, _0x67c8._v$3 = _0x4a1c2c);
      }
      return _0x67c8;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x32a446;
  })();
};
const Va = "_title_hg5o8_1";
const Ua = "_description_hg5o8_12";
const Xn = {
  title: Va,
  description: Ua
};
const Ya = D("<div class=\"flex flex-col items-center justify-start\"><div>WEED INSPECTION</div><div>Inspect the weed plant to see its genetics and growth progress.");
const Ka = () => (() => {
  const _0x111275 = Ya();
  const _0x1983fd = _0x111275.firstChild;
  const _0x2cb87b = _0x1983fd.nextSibling;
  P(_0x596439 => {
    const _0x32436e = Xn.title;
    const _0x48dc08 = Xn.description;
    if (_0x32436e !== _0x596439._v$) {
      x(_0x1983fd, _0x596439._v$ = _0x32436e);
    }
    if (_0x48dc08 !== _0x596439._v$2) {
      x(_0x2cb87b, _0x596439._v$2 = _0x48dc08);
    }
    return _0x596439;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x111275;
})();
const qa = "_container_i49dn_1";
const Xa = "_bar_i49dn_11";
const Gn = {
  container: qa,
  bar: Xa
};
const Ga = D("<div><div>");
const Za = () => (() => {
  const _0x52c9aa = Ga();
  const _0x1ae259 = _0x52c9aa.firstChild;
  P(_0x54fb64 => {
    const _0x47017e = Gn.container;
    const _0x402e53 = Gn.bar;
    if (_0x47017e !== _0x54fb64._v$) {
      x(_0x52c9aa, _0x54fb64._v$ = _0x47017e);
    }
    if (_0x402e53 !== _0x54fb64._v$2) {
      x(_0x1ae259, _0x54fb64._v$2 = _0x402e53);
    }
    return _0x54fb64;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x52c9aa;
})();
const Qa = "_itemBox_1uspp_1";
const Ja = "_infoBox_1uspp_20";
const Zn = {
  itemBox: Qa,
  infoBox: Ja
};
const tl = D("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\"><div><img src=\"https://assets.nopixel.net/dev/images/inventory/icons/np_weedbag.png\"></div><div><h1>Weed Plant</h1><p>A weed plant.");
const el = () => (() => {
  const _0x40a55a = tl();
  const _0x56bfb7 = _0x40a55a.firstChild;
  const _0x1df492 = _0x56bfb7.firstChild;
  const _0x2b436b = _0x56bfb7.nextSibling;
  St(_0x1df492, "draggable", false);
  P(_0x26f36d => {
    const _0x5d9bf0 = Zn.itemBox;
    const _0x217ab7 = Zn.infoBox;
    if (_0x5d9bf0 !== _0x26f36d._v$) {
      x(_0x56bfb7, _0x26f36d._v$ = _0x5d9bf0);
    }
    if (_0x217ab7 !== _0x26f36d._v$2) {
      x(_0x2b436b, _0x26f36d._v$2 = _0x217ab7);
    }
    return _0x26f36d;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x40a55a;
})();
const il = "_container_1xvoj_1";
const nl = {
  container: il
};
const sl = D("<div>");
const Ri = _0x1dafcb => (() => {
  const _0x12caa4 = sl();
  w(_0x12caa4, () => _0x1dafcb.text);
  P(() => x(_0x12caa4, nl.container));
  return _0x12caa4;
})();
const ol = "_container_1xjds_1";
const rl = "_genetic_1xjds_14";
const al = "_red_1xjds_31";
const ll = "_bar_1xjds_34";
const si = {
  container: ol,
  genetic: rl,
  red: al,
  bar: ll
};
const cl = D("<div><div>");
const hl = D("<div>");
const dl = _0x2d4307 => (() => {
  const _0x41f336 = cl();
  const _0xcd6f1d = _0x41f336.firstChild;
  w(_0x41f336, () => _0x2d4307.type, _0xcd6f1d);
  P(_0x3f86b6 => {
    const _0x573f50 = si.genetic;
    const _0x5ef31f = {
      [si.red]: _0x2d4307.type === "X"
    };
    const _0x2a2b05 = si.bar;
    if (_0x573f50 !== _0x3f86b6._v$) {
      x(_0x41f336, _0x3f86b6._v$ = _0x573f50);
    }
    _0x3f86b6._v$2 = Ae(_0x41f336, _0x5ef31f, _0x3f86b6._v$2);
    if (_0x2a2b05 !== _0x3f86b6._v$3) {
      x(_0xcd6f1d, _0x3f86b6._v$3 = _0x2a2b05);
    }
    return _0x3f86b6;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0x41f336;
})();
const fl = () => (() => {
  const _0x47153b = hl();
  w(_0x47153b, v(se, {
    get each() {
      return K.data.genes;
    },
    children: _0x23c147 => v(dl, {
      type: _0x23c147
    })
  }));
  P(() => x(_0x47153b, si.container));
  return _0x47153b;
})();
const ul = "_iconBox_1vrjd_1";
const gl = "_infoBox_1vrjd_15";
const pl = "_required_1vrjd_41";
const Ii = {
  iconBox: ul,
  infoBox: gl,
  required: pl
};
const ml = "_container_o1xeq_1";
const _l = "_box_o1xeq_8";
const bl = "_active_o1xeq_15";
const He = {
  container: ml,
  box: _l,
  active: bl
};
const xl = D("<div>");
const vl = D("<div><div>");
const yl = _0x2f76ab => {
  function _0x361048(_0xf0cd21) {
    const _0x183879 = 100 - _0x2f76ab.value;
    const _0x1161ee = 25;
    const _0x53a4da = (3 - _0xf0cd21) * _0x1161ee;
    const _0x434d02 = (4 - _0xf0cd21) * _0x1161ee;
    return "inset(0% " + Math.min(Math.max((_0x183879 - _0x53a4da) / (_0x434d02 - _0x53a4da), 0), 1) * 100 + "% 0% 0%)";
  }
  return (() => {
    const _0x49c767 = xl();
    w(_0x49c767, v(se, {
      get each() {
        return Array(4);
      },
      children: (_0x4f1bf7, _0x4029dd) => (() => {
        const _0x4a26cc = vl();
        const _0x280830 = _0x4a26cc.firstChild;
        P(_0x1d1754 => {
          const _0x4acc50 = He.box;
          const _0xd27a82 = He.box;
          const _0x58f760 = {
            [He.active]: true
          };
          const _0x527902 = _0x361048(_0x4029dd());
          if (_0x4acc50 !== _0x1d1754._v$) {
            x(_0x4a26cc, _0x1d1754._v$ = _0x4acc50);
          }
          if (_0xd27a82 !== _0x1d1754._v$2) {
            x(_0x280830, _0x1d1754._v$2 = _0xd27a82);
          }
          _0x1d1754._v$3 = Ae(_0x280830, _0x58f760, _0x1d1754._v$3);
          if (_0x527902 !== _0x1d1754._v$4) {
            if ((_0x1d1754._v$4 = _0x527902) != null) {
              _0x280830.style.setProperty("clip-path", _0x527902);
            } else {
              _0x280830.style.removeProperty("clip-path");
            }
          }
          return _0x1d1754;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined
        });
        return _0x4a26cc;
      })()
    }));
    P(() => x(_0x49c767, He.container));
    return _0x49c767;
  })();
};
const wl = D("<div class=\"flex w-full flex-row items-center justify-between gap-[0.5vh]\"><div><i></i></div><div><div class=\"flex flex-row items-center justify-end gap-[2vh]\"><p>");
const ft = _0x57ed94 => (() => {
  const _0x2c194c = wl();
  const _0x19b9e3 = _0x2c194c.firstChild;
  const _0x11ea83 = _0x19b9e3.firstChild;
  const _0x55180f = _0x19b9e3.nextSibling;
  const _0x58c5c1 = _0x55180f.firstChild;
  const _0x3ba162 = _0x58c5c1.firstChild;
  w(_0x55180f, () => _0x57ed94.label, _0x58c5c1);
  w(_0x58c5c1, v(ht, {
    get when() {
      return _0x57ed94.progress !== undefined;
    },
    get children() {
      return v(yl, {
        get value() {
          return _0x57ed94.progress;
        }
      });
    }
  }), _0x3ba162);
  w(_0x3ba162, () => _0x57ed94.text ?? _0x57ed94.progress?.toFixed(1) + "%");
  P(_0x20672f => {
    const _0x488fee = Ii.iconBox;
    const _0xbaf2cb = _0x57ed94.icon;
    const _0x350d03 = Ii.infoBox;
    const _0x4e4757 = {
      [Ii.required]: _0x57ed94.required
    };
    if (_0x488fee !== _0x20672f._v$) {
      x(_0x19b9e3, _0x20672f._v$ = _0x488fee);
    }
    if (_0xbaf2cb !== _0x20672f._v$2) {
      x(_0x11ea83, _0x20672f._v$2 = _0xbaf2cb);
    }
    if (_0x350d03 !== _0x20672f._v$3) {
      x(_0x55180f, _0x20672f._v$3 = _0x350d03);
    }
    _0x20672f._v$4 = Ae(_0x3ba162, _0x4e4757, _0x20672f._v$4);
    return _0x20672f;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return _0x2c194c;
})();
const kl = "_App_1ayef_1";
const $l = "_container_1ayef_11";
const Ml = "_border_container_1ayef_51";
const Fi = {
  App: kl,
  container: $l,
  border_container: Ml
};
const Sl = D("<div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\">");
const Cl = D("<div><div><div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"></div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"></div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"></div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\">");
const [K, Pl] = De({
  show: false,
  data: {},
  isEditor: false,
  attributes: {}
});
_0x1b40a8.register("weed:data", async _0x46bb02 => {
  Pl({
    ..._0x46bb02
  });
});
const Ol = () => {
  const _0x39116f = j(() => {
    const _0x3b4fe6 = K.data.currentStage;
    if (!_0x3b4fe6) {
      return "Unknown";
    }
    const _0x1f1048 = $o[_0x3b4fe6];
    const _0x2fe8d4 = K.data.stageAge / _0x1f1048.lifeLength * 100;
    return _0x3b4fe6 + " (" + _0x2fe8d4.toFixed(0) + "%)";
  });
  const _0x1f261d = j(() => {
    const _0xb436a = K.data.age;
    const _0x411d1c = Math.floor(_0xb436a / 3600);
    const _0x4a58e2 = Math.floor(_0xb436a % 3600 / 60);
    const _0x2284c8 = Math.floor(_0xb436a % 60);
    return _0x411d1c + "h " + _0x4a58e2 + "m " + _0x2284c8 + "s";
  });
  const [_0x50cbe4, _0x2a4b70] = lt(0);
  const _0x3703a5 = j(() => {
    const _0x10200a = _0x50cbe4();
    if (_0x10200a <= 0) {
      return "Calculating...";
    }
    const _0xe34f0d = Math.floor(_0x10200a / 60);
    const _0x2f160d = Math.floor(_0x10200a % 60);
    return _0xe34f0d + "m " + _0x2f160d + "s";
  });
  let _0x21cf75;
  ie(() => {
    _0x21cf75 = setInterval(() => {
      if (!K.data) {
        return;
      }
      const _0x4dac90 = (K.data.lastUpdate ?? 0) + on / 1000 - Date.now() / 1000;
      _0x2a4b70(_0x4dac90);
    }, 1000);
  });
  Ut(() => {
    clearInterval(_0x21cf75);
  });
  return (() => {
    const _0x48be41 = Cl();
    const _0x3656fb = _0x48be41.firstChild;
    const _0x3f54fc = _0x3656fb.firstChild;
    const _0x10f58f = _0x3f54fc.firstChild;
    const _0x4458c3 = _0x10f58f.nextSibling;
    const _0x4cd807 = _0x4458c3.nextSibling;
    const _0x3a0595 = _0x4cd807.nextSibling;
    w(_0x10f58f, v(Ka, {}), null);
    w(_0x10f58f, v(Za, {}), null);
    w(_0x3f54fc, v(el, {}), _0x4458c3);
    w(_0x4458c3, v(Ri, {
      text: "Genetics"
    }), null);
    w(_0x4458c3, v(fl, {}), null);
    w(_0x4cd807, v(ft, {
      icon: "fa-sharp fa-solid fa-heart",
      label: "Health",
      get progress() {
        return K.data.health;
      }
    }), null);
    w(_0x4cd807, v(ft, {
      icon: "fa-sharp fa-regular fa-clock",
      label: "Age",
      get text() {
        return _0x1f261d();
      }
    }), null);
    w(_0x4cd807, v(ft, {
      icon: "fa-solid fa-bag-seedling",
      label: "Stage",
      get text() {
        return _0x39116f();
      }
    }), null);
    w(_0x4cd807, v(ft, {
      icon: "fa-regular fa-calendar-lines-pen",
      label: "Next Update",
      get text() {
        return _0x3703a5();
      }
    }), null);
    w(_0x3a0595, v(Ri, {
      text: "Conditions"
    }), null);
    w(_0x3a0595, v(ft, {
      icon: "fa-solid fa-sun-bright",
      label: "Light",
      get progress() {
        return K.data.sunExposure;
      }
    }), null);
    w(_0x3a0595, v(ft, {
      icon: "fa-sharp fa-solid fa-droplet",
      label: "Water",
      get progress() {
        return K.data.water;
      }
    }), null);
    w(_0x3a0595, v(ft, {
      icon: "fa-sharp fa-solid fa-arrow-up-from-ground-water",
      label: "Ground",
      get progress() {
        return K.data.groundQuality;
      }
    }), null);
    w(_0x3a0595, v(ft, {
      icon: "fa-sharp fa-solid fa-cannabis",
      label: "Overall",
      get progress() {
        return +K.data.overallQuality?.toFixed(0);
      }
    }), null);
    w(_0x3f54fc, v(ht, {
      get when() {
        return j(() => !!K.isEditor && !!K.attributes)() && Object.values(K.attributes).some(_0x14ca24 => !_0x14ca24);
      },
      get children() {
        const _0x510c62 = Sl();
        w(_0x510c62, v(Ri, {
          text: "Requirements"
        }), null);
        w(_0x510c62, v(ht, {
          get when() {
            return !K.attributes?.hasHeater;
          },
          get children() {
            return v(ft, {
              icon: "fa-solid fa-thermometer",
              label: "Heater",
              text: "Required",
              required: true
            });
          }
        }), null);
        w(_0x510c62, v(ht, {
          get when() {
            return !K.attributes?.hasWaterFiltration;
          },
          get children() {
            return v(ft, {
              icon: "fa-solid fa-water",
              label: "Water Filtration",
              text: "Required",
              required: true
            });
          }
        }), null);
        return _0x510c62;
      }
    }), null);
    P(_0x39b295 => {
      const _0x35ef57 = Fi.App;
      const _0x59f287 = Fi.container;
      const _0x14b650 = Fi.border_container;
      if (_0x35ef57 !== _0x39b295._v$) {
        x(_0x48be41, _0x39b295._v$ = _0x35ef57);
      }
      if (_0x59f287 !== _0x39b295._v$2) {
        x(_0x3656fb, _0x39b295._v$2 = _0x59f287);
      }
      if (_0x14b650 !== _0x39b295._v$3) {
        x(_0x3f54fc, _0x39b295._v$3 = _0x14b650);
      }
      return _0x39b295;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x48be41;
  })();
};
const Al = "_App_1pia2_1";
const Dl = "_container_1pia2_11";
const Ll = "_border_container_1pia2_51";
const Tl = "_header_1pia2_64";
const El = "_textBox_1pia2_91";
const le = {
  App: Al,
  container: Dl,
  border_container: Ll,
  header: Tl,
  textBox: El
};
const Rl = D("<div><div><div><div>Water Usage</div><div class=\"flex h-full w-full flex-row items-center justify-between gap-[2vh] px-[1vh]\"><input type=\"range\" min=\"0\" max=\"50\" step=\"1\"><div> <span>/50 L");
const [We, Qn] = De({
  show: false
});
const Il = () => {
  const [_0x41e49d, _0x3b10cd] = lt(10);
  const _0x1635d2 = 0;
  const _0x59284f = 50;
  const _0x35e646 = j(() => (_0x41e49d() - _0x1635d2) / (_0x59284f - _0x1635d2) * 100 + "% 100%");
  _0x1b40a8.register("weed-water:data", async _0x40a4a8 => {
    Qn({
      ..._0x40a4a8
    });
    _0x3b10cd(_0x40a4a8.data?.publicData?.waterUsage ?? 0);
  });
  const _0x26d4bb = _0x2e3666 => {
    if (_0x2e3666.key === "Escape" && We.show) {
      Qn({
        show: false
      });
      _0x1b40a8.execute("close");
    }
  };
  ie(async () => {
    document.addEventListener("keydown", _0x26d4bb);
  });
  Ut(() => {
    document.removeEventListener("keydown", _0x26d4bb);
  });
  return v(xe, {
    name: "slide-bottom",
    get children() {
      return v(ht, {
        get when() {
          return We.show && We.data;
        },
        get children() {
          const _0x4dcf51 = Rl();
          const _0x1dc8b6 = _0x4dcf51.firstChild;
          const _0x27c129 = _0x1dc8b6.firstChild;
          const _0x357d70 = _0x27c129.firstChild;
          const _0x2a4eff = _0x357d70.nextSibling;
          const _0x1bfd71 = _0x2a4eff.firstChild;
          const _0x12957e = _0x1bfd71.nextSibling;
          const _0x314539 = _0x12957e.firstChild;
          _0x1bfd71.addEventListener("change", async _0x33ad7f => {
            await _0x1b40a8.execute("controlPanel:sliderChange", {
              id: We.data.databaseID,
              type: "waterUsage",
              value: +_0x33ad7f.currentTarget.value
            });
          });
          _0x1bfd71.$$input = _0x3245f3 => {
            _0x3b10cd(+_0x3245f3.currentTarget.value);
          };
          w(_0x12957e, _0x41e49d, _0x314539);
          P(_0x4c243f => {
            const _0x18bb1e = le.App;
            const _0x103dc2 = le.container;
            const _0x223b05 = le.border_container;
            const _0x52bc0c = le.header;
            const _0xd4a975 = _0x35e646();
            const _0x2e9924 = le.textBox;
            if (_0x18bb1e !== _0x4c243f._v$) {
              x(_0x4dcf51, _0x4c243f._v$ = _0x18bb1e);
            }
            if (_0x103dc2 !== _0x4c243f._v$2) {
              x(_0x1dc8b6, _0x4c243f._v$2 = _0x103dc2);
            }
            if (_0x223b05 !== _0x4c243f._v$3) {
              x(_0x27c129, _0x4c243f._v$3 = _0x223b05);
            }
            if (_0x52bc0c !== _0x4c243f._v$4) {
              x(_0x357d70, _0x4c243f._v$4 = _0x52bc0c);
            }
            if (_0xd4a975 !== _0x4c243f._v$5) {
              if ((_0x4c243f._v$5 = _0xd4a975) != null) {
                _0x1bfd71.style.setProperty("background-size", _0xd4a975);
              } else {
                _0x1bfd71.style.removeProperty("background-size");
              }
            }
            if (_0x2e9924 !== _0x4c243f._v$6) {
              x(_0x12957e, _0x4c243f._v$6 = _0x2e9924);
            }
            return _0x4c243f;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined,
            _v$4: undefined,
            _v$5: undefined,
            _v$6: undefined
          });
          P(() => _0x1bfd71.value = _0x41e49d());
          return _0x4dcf51;
        }
      });
    }
  });
};
ko(["input"]);
const Fl = "_title_38djd_1";
const zl = "_description_38djd_12";
const Bl = "_keybind_38djd_23";
const jl = "_text_38djd_42";
const Nl = "_button_38djd_45";
const ce = {
  title: Fl,
  description: zl,
  keybind: Bl,
  text: jl,
  button: Nl
};
const Hl = D("<div class=\"flex w-full flex-col items-center justify-start\"><div><div>Exit</div><div>Escape</div></div><div class=\"flex flex-col items-center justify-start\"><div>WEED RACK</div><div>Keep track of your weed rack's performance");
const Wl = () => (() => {
  const _0x9cdac4 = Hl();
  const _0x5b0fbd = _0x9cdac4.firstChild;
  const _0x1c09ce = _0x5b0fbd.firstChild;
  const _0x269661 = _0x1c09ce.nextSibling;
  const _0x421b5a = _0x5b0fbd.nextSibling;
  const _0xa27495 = _0x421b5a.firstChild;
  const _0xe8099 = _0xa27495.nextSibling;
  P(_0xcca93d => {
    const _0x2a4180 = ce.keybind;
    const _0x4734e3 = ce.text;
    const _0x2cf465 = ce.button;
    const _0x38771b = ce.title;
    const _0x37da8b = ce.description;
    if (_0x2a4180 !== _0xcca93d._v$) {
      x(_0x5b0fbd, _0xcca93d._v$ = _0x2a4180);
    }
    if (_0x4734e3 !== _0xcca93d._v$2) {
      x(_0x1c09ce, _0xcca93d._v$2 = _0x4734e3);
    }
    if (_0x2cf465 !== _0xcca93d._v$3) {
      x(_0x269661, _0xcca93d._v$3 = _0x2cf465);
    }
    if (_0x38771b !== _0xcca93d._v$4) {
      x(_0xa27495, _0xcca93d._v$4 = _0x38771b);
    }
    if (_0x37da8b !== _0xcca93d._v$5) {
      x(_0xe8099, _0xcca93d._v$5 = _0x37da8b);
    }
    return _0xcca93d;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined
  });
  return _0x9cdac4;
})();
const Vl = "_container_i49dn_1";
const Ul = "_bar_i49dn_11";
const Jn = {
  container: Vl,
  bar: Ul
};
const Yl = D("<div><div>");
const Kl = () => (() => {
  const _0x5a2b85 = Yl();
  const _0xd9895e = _0x5a2b85.firstChild;
  P(_0x352b70 => {
    const _0x1c6f45 = Jn.container;
    const _0x1fae2f = Jn.bar;
    if (_0x1c6f45 !== _0x352b70._v$) {
      x(_0x5a2b85, _0x352b70._v$ = _0x1c6f45);
    }
    if (_0x1fae2f !== _0x352b70._v$2) {
      x(_0xd9895e, _0x352b70._v$2 = _0x1fae2f);
    }
    return _0x352b70;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x5a2b85;
})();
const ql = "_App_xador_1";
const Xl = "_container_xador_11";
const Gl = "_border_container_xador_50";
const zi = {
  App: ql,
  container: Xl,
  border_container: Gl
};
const Zl = "_container_162tw_1";
const Ql = "_divider_162tw_16";
const Bi = {
  container: Zl,
  divider: Ql
};
const Jl = D("<div><div></div><div>");
const Ve = _0x5b13fb => (() => {
  const _0x26f27a = Jl();
  const _0x882c54 = _0x26f27a.firstChild;
  const _0x461a59 = _0x882c54.nextSibling;
  w(_0x26f27a, () => _0x5b13fb.text, _0x461a59);
  P(_0x16679d => {
    const _0x310dcd = Bi.container;
    const _0x23a1a1 = Bi.divider;
    const _0x64cc66 = Bi.divider;
    if (_0x310dcd !== _0x16679d._v$) {
      x(_0x26f27a, _0x16679d._v$ = _0x310dcd);
    }
    if (_0x23a1a1 !== _0x16679d._v$2) {
      x(_0x882c54, _0x16679d._v$2 = _0x23a1a1);
    }
    if (_0x64cc66 !== _0x16679d._v$3) {
      x(_0x461a59, _0x16679d._v$3 = _0x64cc66);
    }
    return _0x16679d;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0x26f27a;
})();
const tc = "_container_uo1f5_1";
const ec = "_iconBox_uo1f5_10";
const ji = {
  container: tc,
  iconBox: ec
};
const ic = D("<div><div class=\"flex flex-row items-center justify-center\"><div><i></i></div><svg class=\"absolute ml-[1.5vh]\" width=\"5.37vh\" height=\"5.37vh\" viewBox=\"0 0 58 58\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"28.9912\" y=\"0.707107\" width=\"40\" height=\"40\" rx=\"1.5\" transform=\"rotate(45 28.9912 0.707107)\" stroke=\"url(#paint0_linear_9449_56)\"></rect><defs><linearGradient id=\"paint0_linear_9449_56\" x1=\"70.0095\" y1=\"-0.00612807\" x2=\"46.675\" y2=\"21.2071\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00926D\" stop-opacity=\"0\"></div><div class=\"flex w-full flex-col items-start justify-center gap-[0.3vh]\"><h1></h1><p>");
const Ni = _0x4b0b57 => (() => {
  const _0x2b5447 = ic();
  const _0x3b92bd = _0x2b5447.firstChild;
  const _0x182626 = _0x3b92bd.firstChild;
  const _0x585f20 = _0x182626.firstChild;
  const _0x414a5d = _0x3b92bd.nextSibling;
  const _0x5d69d4 = _0x414a5d.firstChild;
  const _0x39637c = _0x5d69d4.nextSibling;
  w(_0x5d69d4, () => _0x4b0b57.label);
  w(_0x39637c, () => _0x4b0b57.text ?? _0x4b0b57.progress?.toFixed(1) + "%");
  P(_0x48759f => {
    const _0x1c191e = ji.container;
    const _0xa5b4e3 = ji.iconBox;
    const _0x18c969 = _0x4b0b57.icon;
    const _0x1f6eba = {
      [ji.required]: _0x4b0b57.required
    };
    if (_0x1c191e !== _0x48759f._v$) {
      x(_0x2b5447, _0x48759f._v$ = _0x1c191e);
    }
    if (_0xa5b4e3 !== _0x48759f._v$2) {
      x(_0x182626, _0x48759f._v$2 = _0xa5b4e3);
    }
    if (_0x18c969 !== _0x48759f._v$3) {
      x(_0x585f20, _0x48759f._v$3 = _0x18c969);
    }
    _0x48759f._v$4 = Ae(_0x39637c, _0x1f6eba, _0x48759f._v$4);
    return _0x48759f;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return _0x2b5447;
})();
const nc = "_container_1deu7_1";
const sc = "_progressContainer_1deu7_14";
const oc = "_progressBar_1deu7_25";
const Hi = {
  container: nc,
  progressContainer: sc,
  progressBar: oc
};
const Ao = 1750;
const pi = 500;
function rc(_0x29453b) {
  const {
    heating: _0x4091bf,
    cooling: _0x3d51bb
  } = _0x29453b;
  const _0x2dd1cb = 1 + Math.min(_0x4091bf, Ao) / pi * 2 - _0x3d51bb / pi * 0.5;
  if (_0x2dd1cb < 1) {
    return 1;
  } else {
    return _0x2dd1cb;
  }
}
const Do = () => 1 + Ao / pi * 2 - 0 / pi * 0.5;
const ac = D("<div><i class=\"fa-light fa-chart-line-down\"></i><div><div></div></div><i class=\"fa-light fa-chart-line-up\">");
const lc = () => {
  const _0x562188 = Do();
  const _0x38c8c9 = j(() => pt.data.modifier / _0x562188);
  return (() => {
    const _0x2b077c = ac();
    const _0xb04c4d = _0x2b077c.firstChild;
    const _0x519d19 = _0xb04c4d.nextSibling;
    const _0x5a3f2f = _0x519d19.firstChild;
    P(_0x56b9de => {
      const _0x239e65 = Hi.container;
      const _0x31a45f = Hi.progressContainer;
      const _0x1a9397 = Hi.progressBar;
      const _0x501f3b = _0x38c8c9() * 100 + "%";
      if (_0x239e65 !== _0x56b9de._v$) {
        x(_0x2b077c, _0x56b9de._v$ = _0x239e65);
      }
      if (_0x31a45f !== _0x56b9de._v$2) {
        x(_0x519d19, _0x56b9de._v$2 = _0x31a45f);
      }
      if (_0x1a9397 !== _0x56b9de._v$3) {
        x(_0x5a3f2f, _0x56b9de._v$3 = _0x1a9397);
      }
      if (_0x501f3b !== _0x56b9de._v$4) {
        if ((_0x56b9de._v$4 = _0x501f3b) != null) {
          _0x5a3f2f.style.setProperty("width", _0x501f3b);
        } else {
          _0x5a3f2f.style.removeProperty("width");
        }
      }
      return _0x56b9de;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x2b077c;
  })();
};
function Le(_0x5875b1) {
  return _0x5875b1 + 0.5 | 0;
}
const Pt = (_0x509b99, _0x53da9a, _0x3b8872) => Math.max(Math.min(_0x509b99, _0x3b8872), _0x53da9a);
function _e(_0x59a292) {
  return Pt(Le(_0x59a292 * 2.55), 0, 255);
}
function Dt(_0x238df9) {
  return Pt(Le(_0x238df9 * 255), 0, 255);
}
function wt(_0x2f7e9a) {
  return Pt(Le(_0x2f7e9a / 2.55) / 100, 0, 1);
}
function ts(_0x27569f) {
  return Pt(Le(_0x27569f * 100), 0, 100);
}
const ot = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
const hn = [..."0123456789ABCDEF"];
const cc = _0x372494 => hn[_0x372494 & 15];
const hc = _0x2648e0 => hn[(_0x2648e0 & 240) >> 4] + hn[_0x2648e0 & 15];
const Ue = _0x2d9d6f => (_0x2d9d6f & 240) >> 4 === (_0x2d9d6f & 15);
const dc = _0x5e845b => Ue(_0x5e845b.r) && Ue(_0x5e845b.g) && Ue(_0x5e845b.b) && Ue(_0x5e845b.a);
function fc(_0x42a834) {
  var _0x3827f0 = _0x42a834.length;
  var _0x250a73;
  if (_0x42a834[0] === "#") {
    if (_0x3827f0 === 4 || _0x3827f0 === 5) {
      _0x250a73 = {
        r: ot[_0x42a834[1]] * 17 & 255,
        g: ot[_0x42a834[2]] * 17 & 255,
        b: ot[_0x42a834[3]] * 17 & 255,
        a: _0x3827f0 === 5 ? ot[_0x42a834[4]] * 17 : 255
      };
    } else if (_0x3827f0 === 7 || _0x3827f0 === 9) {
      _0x250a73 = {
        r: ot[_0x42a834[1]] << 4 | ot[_0x42a834[2]],
        g: ot[_0x42a834[3]] << 4 | ot[_0x42a834[4]],
        b: ot[_0x42a834[5]] << 4 | ot[_0x42a834[6]],
        a: _0x3827f0 === 9 ? ot[_0x42a834[7]] << 4 | ot[_0x42a834[8]] : 255
      };
    }
  }
  return _0x250a73;
}
const uc = (_0x337b6a, _0x502d4f) => _0x337b6a < 255 ? _0x502d4f(_0x337b6a) : "";
function gc(_0x47d21e) {
  var _0x2ac49d = dc(_0x47d21e) ? cc : hc;
  if (_0x47d21e) {
    return "#" + _0x2ac49d(_0x47d21e.r) + _0x2ac49d(_0x47d21e.g) + _0x2ac49d(_0x47d21e.b) + uc(_0x47d21e.a, _0x2ac49d);
  } else {
    return undefined;
  }
}
const pc = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Lo(_0x327a60, _0x593dfc, _0xc5d35c) {
  const _0x141fa8 = _0x593dfc * Math.min(_0xc5d35c, 1 - _0xc5d35c);
  const _0x2aee0b = (_0x19380e, _0x4f962a = (_0x19380e + _0x327a60 / 30) % 12) => _0xc5d35c - _0x141fa8 * Math.max(Math.min(_0x4f962a - 3, 9 - _0x4f962a, 1), -1);
  return [_0x2aee0b(0), _0x2aee0b(8), _0x2aee0b(4)];
}
function mc(_0x30bcbe, _0x2ceb1d, _0x2961a0) {
  const _0x3ed36c = (_0x205572, _0x3053dc = (_0x205572 + _0x30bcbe / 60) % 6) => _0x2961a0 - _0x2961a0 * _0x2ceb1d * Math.max(Math.min(_0x3053dc, 4 - _0x3053dc, 1), 0);
  return [_0x3ed36c(5), _0x3ed36c(3), _0x3ed36c(1)];
}
function _c(_0x49105c, _0x39f374, _0x1c63f0) {
  const _0x586cbb = Lo(_0x49105c, 1, 0.5);
  let _0x231e54;
  if (_0x39f374 + _0x1c63f0 > 1) {
    _0x231e54 = 1 / (_0x39f374 + _0x1c63f0);
    _0x39f374 *= _0x231e54;
    _0x1c63f0 *= _0x231e54;
  }
  _0x231e54 = 0;
  for (; _0x231e54 < 3; _0x231e54++) {
    _0x586cbb[_0x231e54] *= 1 - _0x39f374 - _0x1c63f0;
    _0x586cbb[_0x231e54] += _0x39f374;
  }
  return _0x586cbb;
}
function bc(_0x24334a, _0x4efa8d, _0x596918, _0x28f8bf, _0x58a18d) {
  if (_0x24334a === _0x58a18d) {
    return (_0x4efa8d - _0x596918) / _0x28f8bf + (_0x4efa8d < _0x596918 ? 6 : 0);
  } else if (_0x4efa8d === _0x58a18d) {
    return (_0x596918 - _0x24334a) / _0x28f8bf + 2;
  } else {
    return (_0x24334a - _0x4efa8d) / _0x28f8bf + 4;
  }
}
function yn(_0x3707d8) {
  const _0x54d53c = _0x3707d8.r / 255;
  const _0x48989f = _0x3707d8.g / 255;
  const _0x1da5dc = _0x3707d8.b / 255;
  const _0x3cf1fa = Math.max(_0x54d53c, _0x48989f, _0x1da5dc);
  const _0x6ddc51 = Math.min(_0x54d53c, _0x48989f, _0x1da5dc);
  const _0x426af0 = (_0x3cf1fa + _0x6ddc51) / 2;
  let _0x17b62e;
  let _0x563f5f;
  let _0x19c37a;
  if (_0x3cf1fa !== _0x6ddc51) {
    _0x19c37a = _0x3cf1fa - _0x6ddc51;
    _0x563f5f = _0x426af0 > 0.5 ? _0x19c37a / (2 - _0x3cf1fa - _0x6ddc51) : _0x19c37a / (_0x3cf1fa + _0x6ddc51);
    _0x17b62e = bc(_0x54d53c, _0x48989f, _0x1da5dc, _0x19c37a, _0x3cf1fa);
    _0x17b62e = _0x17b62e * 60 + 0.5;
  }
  return [_0x17b62e | 0, _0x563f5f || 0, _0x426af0];
}
function wn(_0x4accc7, _0x5484aa, _0x23ada0, _0x140d08) {
  return (Array.isArray(_0x5484aa) ? _0x4accc7(_0x5484aa[0], _0x5484aa[1], _0x5484aa[2]) : _0x4accc7(_0x5484aa, _0x23ada0, _0x140d08)).map(Dt);
}
function kn(_0x531acc, _0x29d615, _0x45014e) {
  return wn(Lo, _0x531acc, _0x29d615, _0x45014e);
}
function xc(_0x1bf911, _0x304428, _0x3dd8e5) {
  return wn(_c, _0x1bf911, _0x304428, _0x3dd8e5);
}
function vc(_0x205c4f, _0x5f2056, _0x5300c3) {
  return wn(mc, _0x205c4f, _0x5f2056, _0x5300c3);
}
function To(_0x20808e) {
  return (_0x20808e % 360 + 360) % 360;
}
function yc(_0x10ddc0) {
  const _0x3936fd = pc.exec(_0x10ddc0);
  let _0x8c2e97 = 255;
  let _0x1a19c3;
  if (!_0x3936fd) {
    return;
  }
  if (_0x3936fd[5] !== _0x1a19c3) {
    _0x8c2e97 = _0x3936fd[6] ? _e(+_0x3936fd[5]) : Dt(+_0x3936fd[5]);
  }
  const _0x19bf3b = To(+_0x3936fd[2]);
  const _0x5b2106 = +_0x3936fd[3] / 100;
  const _0x395ce3 = +_0x3936fd[4] / 100;
  if (_0x3936fd[1] === "hwb") {
    _0x1a19c3 = xc(_0x19bf3b, _0x5b2106, _0x395ce3);
  } else if (_0x3936fd[1] === "hsv") {
    _0x1a19c3 = vc(_0x19bf3b, _0x5b2106, _0x395ce3);
  } else {
    _0x1a19c3 = kn(_0x19bf3b, _0x5b2106, _0x395ce3);
  }
  return {
    r: _0x1a19c3[0],
    g: _0x1a19c3[1],
    b: _0x1a19c3[2],
    a: _0x8c2e97
  };
}
function wc(_0x528f22, _0x906268) {
  var _0x3cfd66 = yn(_0x528f22);
  _0x3cfd66[0] = To(_0x3cfd66[0] + _0x906268);
  _0x3cfd66 = kn(_0x3cfd66);
  _0x528f22.r = _0x3cfd66[0];
  _0x528f22.g = _0x3cfd66[1];
  _0x528f22.b = _0x3cfd66[2];
}
function kc(_0x3f5280) {
  if (!_0x3f5280) {
    return;
  }
  const _0x5863bc = yn(_0x3f5280);
  const _0x40f849 = _0x5863bc[0];
  const _0x6420ba = ts(_0x5863bc[1]);
  const _0x26297a = ts(_0x5863bc[2]);
  if (_0x3f5280.a < 255) {
    return "hsla(" + _0x40f849 + ", " + _0x6420ba + "%, " + _0x26297a + "%, " + wt(_0x3f5280.a) + ")";
  } else {
    return "hsl(" + _0x40f849 + ", " + _0x6420ba + "%, " + _0x26297a + "%)";
  }
}
const es = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
};
const is = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function $c() {
  const _0x264d05 = {};
  const _0x16839f = Object.keys(is);
  const _0x3a07c1 = Object.keys(es);
  let _0xbb38d3;
  let _0x46bf13;
  let _0x153f94;
  let _0x409065;
  let _0x408dde;
  for (_0xbb38d3 = 0; _0xbb38d3 < _0x16839f.length; _0xbb38d3++) {
    _0x409065 = _0x408dde = _0x16839f[_0xbb38d3];
    _0x46bf13 = 0;
    for (; _0x46bf13 < _0x3a07c1.length; _0x46bf13++) {
      _0x153f94 = _0x3a07c1[_0x46bf13];
      _0x408dde = _0x408dde.replace(_0x153f94, es[_0x153f94]);
    }
    _0x153f94 = parseInt(is[_0x409065], 16);
    _0x264d05[_0x408dde] = [_0x153f94 >> 16 & 255, _0x153f94 >> 8 & 255, _0x153f94 & 255];
  }
  return _0x264d05;
}
let Ye;
function Mc(_0x3f2829) {
  if (!Ye) {
    Ye = $c();
    Ye.transparent = [0, 0, 0, 0];
  }
  const _0x51b67c = Ye[_0x3f2829.toLowerCase()];
  return _0x51b67c && {
    r: _0x51b67c[0],
    g: _0x51b67c[1],
    b: _0x51b67c[2],
    a: _0x51b67c.length === 4 ? _0x51b67c[3] : 255
  };
}
const Sc = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Cc(_0x416b67) {
  const _0x4a881a = Sc.exec(_0x416b67);
  let _0x4ef175 = 255;
  let _0x1da827;
  let _0x30038e;
  let _0x2b6317;
  if (_0x4a881a) {
    if (_0x4a881a[7] !== _0x1da827) {
      const _0x2590a0 = +_0x4a881a[7];
      _0x4ef175 = _0x4a881a[8] ? _e(_0x2590a0) : Pt(_0x2590a0 * 255, 0, 255);
    }
    _0x1da827 = +_0x4a881a[1];
    _0x30038e = +_0x4a881a[3];
    _0x2b6317 = +_0x4a881a[5];
    _0x1da827 = (_0x4a881a[2] ? _e(_0x1da827) : Pt(_0x1da827, 0, 255)) & 255;
    _0x30038e = (_0x4a881a[4] ? _e(_0x30038e) : Pt(_0x30038e, 0, 255)) & 255;
    _0x2b6317 = (_0x4a881a[6] ? _e(_0x2b6317) : Pt(_0x2b6317, 0, 255)) & 255;
    return {
      r: _0x1da827,
      g: _0x30038e,
      b: _0x2b6317,
      a: _0x4ef175
    };
  }
}
function Pc(_0x45ac2e) {
  return _0x45ac2e && (_0x45ac2e.a < 255 ? "rgba(" + _0x45ac2e.r + ", " + _0x45ac2e.g + ", " + _0x45ac2e.b + ", " + wt(_0x45ac2e.a) + ")" : "rgb(" + _0x45ac2e.r + ", " + _0x45ac2e.g + ", " + _0x45ac2e.b + ")");
}
const Wi = _0x190afb => _0x190afb <= 0.0031308 ? _0x190afb * 12.92 : Math.pow(_0x190afb, 1 / 2.4) * 1.055 - 0.055;
const Zt = _0x2908c4 => _0x2908c4 <= 0.04045 ? _0x2908c4 / 12.92 : Math.pow((_0x2908c4 + 0.055) / 1.055, 2.4);
function Oc(_0x1717e0, _0x1bea41, _0x3d20d5) {
  const _0x588d1b = Zt(wt(_0x1717e0.r));
  const _0x404833 = Zt(wt(_0x1717e0.g));
  const _0x236714 = Zt(wt(_0x1717e0.b));
  return {
    r: Dt(Wi(_0x588d1b + _0x3d20d5 * (Zt(wt(_0x1bea41.r)) - _0x588d1b))),
    g: Dt(Wi(_0x404833 + _0x3d20d5 * (Zt(wt(_0x1bea41.g)) - _0x404833))),
    b: Dt(Wi(_0x236714 + _0x3d20d5 * (Zt(wt(_0x1bea41.b)) - _0x236714))),
    a: _0x1717e0.a + _0x3d20d5 * (_0x1bea41.a - _0x1717e0.a)
  };
}
function Ke(_0x53b98c, _0x314bb5, _0x3ec4fc) {
  if (_0x53b98c) {
    let _0x429e1f = yn(_0x53b98c);
    _0x429e1f[_0x314bb5] = Math.max(0, Math.min(_0x429e1f[_0x314bb5] + _0x429e1f[_0x314bb5] * _0x3ec4fc, _0x314bb5 === 0 ? 360 : 1));
    _0x429e1f = kn(_0x429e1f);
    _0x53b98c.r = _0x429e1f[0];
    _0x53b98c.g = _0x429e1f[1];
    _0x53b98c.b = _0x429e1f[2];
  }
}
function Eo(_0x5244b, _0x34faf8) {
  return _0x5244b && Object.assign(_0x34faf8 || {}, _0x5244b);
}
function ns(_0x1f5b1c) {
  var _0x209bf1 = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  if (Array.isArray(_0x1f5b1c)) {
    if (_0x1f5b1c.length >= 3) {
      _0x209bf1 = {
        r: _0x1f5b1c[0],
        g: _0x1f5b1c[1],
        b: _0x1f5b1c[2],
        a: 255
      };
      if (_0x1f5b1c.length > 3) {
        _0x209bf1.a = Dt(_0x1f5b1c[3]);
      }
    }
  } else {
    _0x209bf1 = Eo(_0x1f5b1c, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    });
    _0x209bf1.a = Dt(_0x209bf1.a);
  }
  return _0x209bf1;
}
function Ac(_0x5eec92) {
  if (_0x5eec92.charAt(0) === "r") {
    return Cc(_0x5eec92);
  } else {
    return yc(_0x5eec92);
  }
}
class $e {
  constructor(_0x2cae51) {
    if (_0x2cae51 instanceof $e) {
      return _0x2cae51;
    }
    const _0xc56823 = typeof _0x2cae51;
    let _0x3ee1f2;
    if (_0xc56823 === "object") {
      _0x3ee1f2 = ns(_0x2cae51);
    } else if (_0xc56823 === "string") {
      _0x3ee1f2 = fc(_0x2cae51) || Mc(_0x2cae51) || Ac(_0x2cae51);
    }
    this._rgb = _0x3ee1f2;
    this._valid = !!_0x3ee1f2;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var _0x25a020 = Eo(this._rgb);
    if (_0x25a020) {
      _0x25a020.a = wt(_0x25a020.a);
    }
    return _0x25a020;
  }
  set rgb(_0x4d248e) {
    this._rgb = ns(_0x4d248e);
  }
  rgbString() {
    if (this._valid) {
      return Pc(this._rgb);
    } else {
      return undefined;
    }
  }
  hexString() {
    if (this._valid) {
      return gc(this._rgb);
    } else {
      return undefined;
    }
  }
  hslString() {
    if (this._valid) {
      return kc(this._rgb);
    } else {
      return undefined;
    }
  }
  mix(_0x18b226, _0x2d9b17) {
    if (_0x18b226) {
      const _0x5aa5d1 = this.rgb;
      const _0x28f77a = _0x18b226.rgb;
      let _0x12963b;
      const _0x5bd87c = _0x2d9b17 === _0x12963b ? 0.5 : _0x2d9b17;
      const _0x2da07d = _0x5bd87c * 2 - 1;
      const _0x2d3a72 = _0x5aa5d1.a - _0x28f77a.a;
      const _0x3b4f50 = ((_0x2da07d * _0x2d3a72 === -1 ? _0x2da07d : (_0x2da07d + _0x2d3a72) / (1 + _0x2da07d * _0x2d3a72)) + 1) / 2;
      _0x12963b = 1 - _0x3b4f50;
      _0x5aa5d1.r = _0x3b4f50 * _0x5aa5d1.r + _0x12963b * _0x28f77a.r + 0.5 & 255;
      _0x5aa5d1.g = _0x3b4f50 * _0x5aa5d1.g + _0x12963b * _0x28f77a.g + 0.5 & 255;
      _0x5aa5d1.b = _0x3b4f50 * _0x5aa5d1.b + _0x12963b * _0x28f77a.b + 0.5 & 255;
      _0x5aa5d1.a = _0x5bd87c * _0x5aa5d1.a + (1 - _0x5bd87c) * _0x28f77a.a;
      this.rgb = _0x5aa5d1;
    }
    return this;
  }
  interpolate(_0x310961, _0x582ea6) {
    if (_0x310961) {
      this._rgb = Oc(this._rgb, _0x310961._rgb, _0x582ea6);
    }
    return this;
  }
  clone() {
    return new $e(this.rgb);
  }
  alpha(_0x5f4f2c) {
    this._rgb.a = Dt(_0x5f4f2c);
    return this;
  }
  clearer(_0x3103f0) {
    const _0xdeab33 = this._rgb;
    _0xdeab33.a *= 1 - _0x3103f0;
    return this;
  }
  greyscale() {
    const _0x5d3dd5 = this._rgb;
    const _0x1cf6e1 = Le(_0x5d3dd5.r * 0.3 + _0x5d3dd5.g * 0.59 + _0x5d3dd5.b * 0.11);
    _0x5d3dd5.r = _0x5d3dd5.g = _0x5d3dd5.b = _0x1cf6e1;
    return this;
  }
  opaquer(_0x1c4b0d) {
    const _0x4896bc = this._rgb;
    _0x4896bc.a *= 1 + _0x1c4b0d;
    return this;
  }
  negate() {
    const _0x233b65 = this._rgb;
    _0x233b65.r = 255 - _0x233b65.r;
    _0x233b65.g = 255 - _0x233b65.g;
    _0x233b65.b = 255 - _0x233b65.b;
    return this;
  }
  lighten(_0x25a73c) {
    Ke(this._rgb, 2, _0x25a73c);
    return this;
  }
  darken(_0x3457d1) {
    Ke(this._rgb, 2, -_0x3457d1);
    return this;
  }
  saturate(_0x447b24) {
    Ke(this._rgb, 1, _0x447b24);
    return this;
  }
  desaturate(_0x205fff) {
    Ke(this._rgb, 1, -_0x205fff);
    return this;
  }
  rotate(_0x1b1a46) {
    wc(this._rgb, _0x1b1a46);
    return this;
  }
}
const Dc = (() => {
  let _0x740175 = 0;
  return () => _0x740175++;
})();
function I(_0x148a3d) {
  return _0x148a3d === null || typeof _0x148a3d === "undefined";
}
function B(_0x205f4b) {
  if (Array.isArray && Array.isArray(_0x205f4b)) {
    return true;
  }
  const _0x592d0e = Object.prototype.toString.call(_0x205f4b);
  return _0x592d0e.slice(0, 7) === "[object" && _0x592d0e.slice(-6) === "Array]";
}
function L(_0x43f408) {
  return _0x43f408 !== null && Object.prototype.toString.call(_0x43f408) === "[object Object]";
}
function U(_0x456b0e) {
  return (typeof _0x456b0e == "number" || _0x456b0e instanceof Number) && isFinite(+_0x456b0e);
}
function et(_0x44ef7d, _0x56d348) {
  if (U(_0x44ef7d)) {
    return _0x44ef7d;
  } else {
    return _0x56d348;
  }
}
function T(_0x3ffc9b, _0x23383e) {
  if (typeof _0x3ffc9b === "undefined") {
    return _0x23383e;
  } else {
    return _0x3ffc9b;
  }
}
const Lc = (_0x4ffa7b, _0x4a8e84) => typeof _0x4ffa7b == "string" && _0x4ffa7b.endsWith("%") ? parseFloat(_0x4ffa7b) / 100 : +_0x4ffa7b / _0x4a8e84;
const Ro = (_0x263486, _0x13c8dc) => typeof _0x263486 == "string" && _0x263486.endsWith("%") ? parseFloat(_0x263486) / 100 * _0x13c8dc : +_0x263486;
function F(_0x4a2cfe, _0x240578, _0x170065) {
  if (_0x4a2cfe && typeof _0x4a2cfe.call == "function") {
    return _0x4a2cfe.apply(_0x170065, _0x240578);
  }
}
function q(_0x2fac62, _0x323336, _0x465dbc, _0x5c7d74) {
  let _0x34bc43;
  let _0x7a61e5;
  let _0x2fd7c5;
  if (B(_0x2fac62)) {
    _0x7a61e5 = _0x2fac62.length;
    if (_0x5c7d74) {
      for (_0x34bc43 = _0x7a61e5 - 1; _0x34bc43 >= 0; _0x34bc43--) {
        _0x323336.call(_0x465dbc, _0x2fac62[_0x34bc43], _0x34bc43);
      }
    } else {
      for (_0x34bc43 = 0; _0x34bc43 < _0x7a61e5; _0x34bc43++) {
        _0x323336.call(_0x465dbc, _0x2fac62[_0x34bc43], _0x34bc43);
      }
    }
  } else if (L(_0x2fac62)) {
    _0x2fd7c5 = Object.keys(_0x2fac62);
    _0x7a61e5 = _0x2fd7c5.length;
    _0x34bc43 = 0;
    for (; _0x34bc43 < _0x7a61e5; _0x34bc43++) {
      _0x323336.call(_0x465dbc, _0x2fac62[_0x2fd7c5[_0x34bc43]], _0x2fd7c5[_0x34bc43]);
    }
  }
}
function ss(_0x54df97, _0x17f1c0) {
  let _0x1b185a;
  let _0x27786c;
  let _0x2fbc8c;
  let _0x3fa63f;
  if (!_0x54df97 || !_0x17f1c0 || _0x54df97.length !== _0x17f1c0.length) {
    return false;
  }
  _0x1b185a = 0;
  _0x27786c = _0x54df97.length;
  for (; _0x1b185a < _0x27786c; ++_0x1b185a) {
    _0x2fbc8c = _0x54df97[_0x1b185a];
    _0x3fa63f = _0x17f1c0[_0x1b185a];
    if (_0x2fbc8c.datasetIndex !== _0x3fa63f.datasetIndex || _0x2fbc8c.index !== _0x3fa63f.index) {
      return false;
    }
  }
  return true;
}
function mi(_0x14c753) {
  if (B(_0x14c753)) {
    return _0x14c753.map(mi);
  }
  if (L(_0x14c753)) {
    const _0x1d712d = Object.create(null);
    const _0x7496b3 = Object.keys(_0x14c753);
    const _0x1c304f = _0x7496b3.length;
    let _0x2e31aa = 0;
    for (; _0x2e31aa < _0x1c304f; ++_0x2e31aa) {
      _0x1d712d[_0x7496b3[_0x2e31aa]] = mi(_0x14c753[_0x7496b3[_0x2e31aa]]);
    }
    return _0x1d712d;
  }
  return _0x14c753;
}
function Io(_0x404c49) {
  return ["__proto__", "prototype", "constructor"].indexOf(_0x404c49) === -1;
}
function Tc(_0x32a11f, _0x26138e, _0x482fa4, _0x323d65) {
  if (!Io(_0x32a11f)) {
    return;
  }
  const _0x503673 = _0x26138e[_0x32a11f];
  const _0x1067bb = _0x482fa4[_0x32a11f];
  if (L(_0x503673) && L(_0x1067bb)) {
    Me(_0x503673, _0x1067bb, _0x323d65);
  } else {
    _0x26138e[_0x32a11f] = mi(_0x1067bb);
  }
}
function Me(_0x5769f8, _0x571385, _0x2e4a54) {
  const _0x4cc418 = B(_0x571385) ? _0x571385 : [_0x571385];
  const _0x3c8c48 = _0x4cc418.length;
  if (!L(_0x5769f8)) {
    return _0x5769f8;
  }
  _0x2e4a54 = _0x2e4a54 || {};
  const _0x1bbbb2 = _0x2e4a54.merger || Tc;
  let _0x55164e;
  for (let _0xe4f2cc = 0; _0xe4f2cc < _0x3c8c48; ++_0xe4f2cc) {
    _0x55164e = _0x4cc418[_0xe4f2cc];
    if (!L(_0x55164e)) {
      continue;
    }
    const _0x427ba0 = Object.keys(_0x55164e);
    for (let _0x4f1a3a = 0, _0x2e6cab = _0x427ba0.length; _0x4f1a3a < _0x2e6cab; ++_0x4f1a3a) {
      _0x1bbbb2(_0x427ba0[_0x4f1a3a], _0x5769f8, _0x55164e, _0x2e4a54);
    }
  }
  return _0x5769f8;
}
function ve(_0x235f32, _0x31dd53) {
  return Me(_0x235f32, _0x31dd53, {
    merger: Ec
  });
}
function Ec(_0x262fd2, _0x56276d, _0x234d10) {
  if (!Io(_0x262fd2)) {
    return;
  }
  const _0x5e74e1 = _0x56276d[_0x262fd2];
  const _0xb37611 = _0x234d10[_0x262fd2];
  if (L(_0x5e74e1) && L(_0xb37611)) {
    ve(_0x5e74e1, _0xb37611);
  } else if (!Object.prototype.hasOwnProperty.call(_0x56276d, _0x262fd2)) {
    _0x56276d[_0x262fd2] = mi(_0xb37611);
  }
}
const os = {
  "": _0x96fb71 => _0x96fb71,
  x: _0x3aa8a8 => _0x3aa8a8.x,
  y: _0x358b10 => _0x358b10.y
};
function Rc(_0x1a3465) {
  const _0x3d5f4c = _0x1a3465.split(".");
  const _0x148526 = [];
  let _0xe2c842 = "";
  for (const _0x1d934a of _0x3d5f4c) {
    _0xe2c842 += _0x1d934a;
    if (_0xe2c842.endsWith("\\")) {
      _0xe2c842 = _0xe2c842.slice(0, -1) + ".";
    } else {
      _0x148526.push(_0xe2c842);
      _0xe2c842 = "";
    }
  }
  return _0x148526;
}
function Ic(_0x296edd) {
  const _0x3e7122 = Rc(_0x296edd);
  return _0x20c863 => {
    for (const _0x3b5d3b of _0x3e7122) {
      if (_0x3b5d3b === "") {
        break;
      }
      _0x20c863 = _0x20c863 && _0x20c863[_0x3b5d3b];
    }
    return _0x20c863;
  };
}
function Tt(_0x33df62, _0x4410ed) {
  return (os[_0x4410ed] ||= Ic(_0x4410ed))(_0x33df62);
}
function $n(_0x53ee3d) {
  return _0x53ee3d.charAt(0).toUpperCase() + _0x53ee3d.slice(1);
}
const Se = _0x47c9d3 => typeof _0x47c9d3 !== "undefined";
const Et = _0x5ec683 => typeof _0x5ec683 == "function";
const rs = (_0x4d18e1, _0x126722) => {
  if (_0x4d18e1.size !== _0x126722.size) {
    return false;
  }
  for (const _0x4b93cd of _0x4d18e1) {
    if (!_0x126722.has(_0x4b93cd)) {
      return false;
    }
  }
  return true;
};
function Fc(_0x35a1e3) {
  return _0x35a1e3.type === "mouseup" || _0x35a1e3.type === "click" || _0x35a1e3.type === "contextmenu";
}
const W = Math.PI;
const Z = W * 2;
const _i = Number.POSITIVE_INFINITY;
const zc = W / 180;
const Q = W / 2;
const Ft = W / 4;
const as = W * 2 / 3;
const Ot = Math.log10;
const Lt = Math.sign;
function oi(_0x5eb245, _0x482269, _0x1ccf6f) {
  return Math.abs(_0x5eb245 - _0x482269) < _0x1ccf6f;
}
function ls(_0x4332f9) {
  const _0x36cc47 = Math.round(_0x4332f9);
  _0x4332f9 = oi(_0x4332f9, _0x36cc47, _0x4332f9 / 1000) ? _0x36cc47 : _0x4332f9;
  const _0x3562e4 = Math.pow(10, Math.floor(Ot(_0x4332f9)));
  const _0xb2ce73 = _0x4332f9 / _0x3562e4;
  return (_0xb2ce73 <= 1 ? 1 : _0xb2ce73 <= 2 ? 2 : _0xb2ce73 <= 5 ? 5 : 10) * _0x3562e4;
}
function Bc(_0x43c015) {
  const _0x164810 = [];
  const _0x57294e = Math.sqrt(_0x43c015);
  let _0x2b10ce;
  for (_0x2b10ce = 1; _0x2b10ce < _0x57294e; _0x2b10ce++) {
    if (_0x43c015 % _0x2b10ce === 0) {
      _0x164810.push(_0x2b10ce);
      _0x164810.push(_0x43c015 / _0x2b10ce);
    }
  }
  if (_0x57294e === (_0x57294e | 0)) {
    _0x164810.push(_0x57294e);
  }
  _0x164810.sort((_0x4ffa71, _0x4482a6) => _0x4ffa71 - _0x4482a6).pop();
  return _0x164810;
}
function bi(_0x43b573) {
  return !isNaN(parseFloat(_0x43b573)) && isFinite(_0x43b573);
}
function jc(_0x4db3b9, _0x4e1822) {
  const _0x56786f = Math.round(_0x4db3b9);
  return _0x56786f - _0x4e1822 <= _0x4db3b9 && _0x56786f + _0x4e1822 >= _0x4db3b9;
}
function Fo(_0x302e97, _0x541671, _0xedc2be) {
  let _0xf6bfc8;
  let _0x10405e;
  let _0x11316;
  _0xf6bfc8 = 0;
  _0x10405e = _0x302e97.length;
  for (; _0xf6bfc8 < _0x10405e; _0xf6bfc8++) {
    _0x11316 = _0x302e97[_0xf6bfc8][_0xedc2be];
    if (!isNaN(_0x11316)) {
      _0x541671.min = Math.min(_0x541671.min, _0x11316);
      _0x541671.max = Math.max(_0x541671.max, _0x11316);
    }
  }
}
function ct(_0x287b3c) {
  return _0x287b3c * (W / 180);
}
function Mn(_0x3a1264) {
  return _0x3a1264 * (180 / W);
}
function cs(_0x334c38) {
  if (!U(_0x334c38)) {
    return;
  }
  let _0x3fc94f = 1;
  let _0x5e8254 = 0;
  while (Math.round(_0x334c38 * _0x3fc94f) / _0x3fc94f !== _0x334c38) {
    _0x3fc94f *= 10;
    _0x5e8254++;
  }
  return _0x5e8254;
}
function Nc(_0x42ad0f, _0x5d6c1e) {
  const _0x1edb4b = _0x5d6c1e.x - _0x42ad0f.x;
  const _0x4848b5 = _0x5d6c1e.y - _0x42ad0f.y;
  const _0x4ae037 = Math.sqrt(_0x1edb4b * _0x1edb4b + _0x4848b5 * _0x4848b5);
  let _0x3f7fd4 = Math.atan2(_0x4848b5, _0x1edb4b);
  if (_0x3f7fd4 < W * -0.5) {
    _0x3f7fd4 += Z;
  }
  return {
    angle: _0x3f7fd4,
    distance: _0x4ae037
  };
}
function gt(_0x40f566) {
  return (_0x40f566 % Z + Z) % Z;
}
function dn(_0x487099, _0x5c1175, _0x526910, _0x29170e) {
  const _0x1e0900 = gt(_0x487099);
  const _0x6e2e2b = gt(_0x5c1175);
  const _0x13ea74 = gt(_0x526910);
  const _0x3fc18d = gt(_0x6e2e2b - _0x1e0900);
  const _0x28e27e = gt(_0x13ea74 - _0x1e0900);
  const _0xa9fe9e = gt(_0x1e0900 - _0x6e2e2b);
  const _0x1557cd = gt(_0x1e0900 - _0x13ea74);
  return _0x1e0900 === _0x6e2e2b || _0x1e0900 === _0x13ea74 || _0x29170e && _0x6e2e2b === _0x13ea74 || _0x3fc18d > _0x28e27e && _0xa9fe9e < _0x1557cd;
}
function $t(_0x192f9c, _0x44cbac, _0x3c31ff) {
  return Math.max(_0x44cbac, Math.min(_0x3c31ff, _0x192f9c));
}
function Hc(_0x211997) {
  return $t(_0x211997, -32768, 32767);
}
function Qt(_0x165800, _0x4406f0, _0x597b93, _0x455ec3 = 0.000001) {
  return _0x165800 >= Math.min(_0x4406f0, _0x597b93) - _0x455ec3 && _0x165800 <= Math.max(_0x4406f0, _0x597b93) + _0x455ec3;
}
function Sn(_0x10f4aa, _0x406a64, _0x30d6fb) {
  _0x30d6fb = _0x30d6fb || (_0xd77540 => _0x10f4aa[_0xd77540] < _0x406a64);
  let _0x3b2310 = _0x10f4aa.length - 1;
  let _0x5cb838 = 0;
  let _0xe00f90;
  while (_0x3b2310 - _0x5cb838 > 1) {
    _0xe00f90 = _0x5cb838 + _0x3b2310 >> 1;
    if (_0x30d6fb(_0xe00f90)) {
      _0x5cb838 = _0xe00f90;
    } else {
      _0x3b2310 = _0xe00f90;
    }
  }
  return {
    lo: _0x5cb838,
    hi: _0x3b2310
  };
}
const fn = (_0x2a7350, _0x4135a6, _0x176318, _0x16238e) => Sn(_0x2a7350, _0x176318, _0x16238e ? _0x34659e => {
  const _0x4576fa = _0x2a7350[_0x34659e][_0x4135a6];
  return _0x4576fa < _0x176318 || _0x4576fa === _0x176318 && _0x2a7350[_0x34659e + 1][_0x4135a6] === _0x176318;
} : _0x1b8e0b => _0x2a7350[_0x1b8e0b][_0x4135a6] < _0x176318);
const Wc = (_0x415f6c, _0x52e498, _0x51b0ab) => Sn(_0x415f6c, _0x51b0ab, _0x5bfeb9 => _0x415f6c[_0x5bfeb9][_0x52e498] >= _0x51b0ab);
function Vc(_0x958225, _0x3c19f3, _0xadc2e) {
  let _0x470af7 = 0;
  let _0x1fd6b9 = _0x958225.length;
  while (_0x470af7 < _0x1fd6b9 && _0x958225[_0x470af7] < _0x3c19f3) {
    _0x470af7++;
  }
  while (_0x1fd6b9 > _0x470af7 && _0x958225[_0x1fd6b9 - 1] > _0xadc2e) {
    _0x1fd6b9--;
  }
  if (_0x470af7 > 0 || _0x1fd6b9 < _0x958225.length) {
    return _0x958225.slice(_0x470af7, _0x1fd6b9);
  } else {
    return _0x958225;
  }
}
const zo = ["push", "pop", "shift", "splice", "unshift"];
function Uc(_0x47bf4a, _0x52f15e) {
  if (_0x47bf4a._chartjs) {
    _0x47bf4a._chartjs.listeners.push(_0x52f15e);
    return;
  }
  Object.defineProperty(_0x47bf4a, "_chartjs", {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [_0x52f15e]
    }
  });
  zo.forEach(_0x14d03e => {
    const _0x4f516c = "_onData" + $n(_0x14d03e);
    const _0x1cfff0 = _0x47bf4a[_0x14d03e];
    Object.defineProperty(_0x47bf4a, _0x14d03e, {
      configurable: true,
      enumerable: false,
      value(..._0xbafc5) {
        const _0x6a80d7 = _0x1cfff0.apply(this, _0xbafc5);
        _0x47bf4a._chartjs.listeners.forEach(_0x2292ce => {
          if (typeof _0x2292ce[_0x4f516c] == "function") {
            _0x2292ce[_0x4f516c](..._0xbafc5);
          }
        });
        return _0x6a80d7;
      }
    });
  });
}
function hs(_0x496a6c, _0x4f89e4) {
  const _0xdf1ee1 = _0x496a6c._chartjs;
  if (!_0xdf1ee1) {
    return;
  }
  const _0xf3d0ed = _0xdf1ee1.listeners;
  const _0xddabc3 = _0xf3d0ed.indexOf(_0x4f89e4);
  if (_0xddabc3 !== -1) {
    _0xf3d0ed.splice(_0xddabc3, 1);
  }
  if (!(_0xf3d0ed.length > 0)) {
    zo.forEach(_0x1fad2e => {
      delete _0x496a6c[_0x1fad2e];
    });
    delete _0x496a6c._chartjs;
  }
}
function Bo(_0x564cb4) {
  const _0x5600d1 = new Set(_0x564cb4);
  if (_0x5600d1.size === _0x564cb4.length) {
    return _0x564cb4;
  } else {
    return Array.from(_0x5600d1);
  }
}
const jo = function () {
  if (typeof window === "undefined") {
    return function (_0x5a0077) {
      return _0x5a0077();
    };
  } else {
    return window.requestAnimationFrame;
  }
}();
function No(_0x1dbf3e, _0x250d2) {
  let _0x4feed6 = [];
  let _0x30a6c3 = false;
  return function (..._0x3a238f) {
    _0x4feed6 = _0x3a238f;
    if (!_0x30a6c3) {
      _0x30a6c3 = true;
      jo.call(window, () => {
        _0x30a6c3 = false;
        _0x1dbf3e.apply(_0x250d2, _0x4feed6);
      });
    }
  };
}
function Yc(_0x3307a7, _0x2957be) {
  let _0x521837;
  return function (..._0x56fd4f) {
    if (_0x2957be) {
      clearTimeout(_0x521837);
      _0x521837 = setTimeout(_0x3307a7, _0x2957be, _0x56fd4f);
    } else {
      _0x3307a7.apply(this, _0x56fd4f);
    }
    return _0x2957be;
  };
}
const Cn = _0x378d24 => _0x378d24 === "start" ? "left" : _0x378d24 === "end" ? "right" : "center";
const X = (_0xdcdc7d, _0x579102, _0x379929) => _0xdcdc7d === "start" ? _0x579102 : _0xdcdc7d === "end" ? _0x379929 : (_0x579102 + _0x379929) / 2;
const Kc = (_0x45e797, _0x10fbc0, _0xd31cfe, _0x9f6a51) => _0x45e797 === (_0x9f6a51 ? "left" : "right") ? _0xd31cfe : _0x45e797 === "center" ? (_0x10fbc0 + _0xd31cfe) / 2 : _0x10fbc0;
const qe = _0x2a459e => _0x2a459e === 0 || _0x2a459e === 1;
const ds = (_0xdcc815, _0x3652e7, _0x3b7d5c) => -(Math.pow(2, (_0xdcc815 -= 1) * 10) * Math.sin((_0xdcc815 - _0x3652e7) * Z / _0x3b7d5c));
const fs = (_0x430104, _0x44903f, _0x1e947f) => Math.pow(2, _0x430104 * -10) * Math.sin((_0x430104 - _0x44903f) * Z / _0x1e947f) + 1;
const ye = {
  linear: _0x111c15 => _0x111c15,
  easeInQuad: _0x239a1c => _0x239a1c * _0x239a1c,
  easeOutQuad: _0x33af46 => -_0x33af46 * (_0x33af46 - 2),
  easeInOutQuad: _0x3c7ce0 => (_0x3c7ce0 /= 0.5) < 1 ? _0x3c7ce0 * 0.5 * _0x3c7ce0 : (--_0x3c7ce0 * (_0x3c7ce0 - 2) - 1) * -0.5,
  easeInCubic: _0x5c9848 => _0x5c9848 * _0x5c9848 * _0x5c9848,
  easeOutCubic: _0x131446 => (_0x131446 -= 1) * _0x131446 * _0x131446 + 1,
  easeInOutCubic: _0x7e9a6e => (_0x7e9a6e /= 0.5) < 1 ? _0x7e9a6e * 0.5 * _0x7e9a6e * _0x7e9a6e : ((_0x7e9a6e -= 2) * _0x7e9a6e * _0x7e9a6e + 2) * 0.5,
  easeInQuart: _0x1dc40f => _0x1dc40f * _0x1dc40f * _0x1dc40f * _0x1dc40f,
  easeOutQuart: _0xb1a4cf => -((_0xb1a4cf -= 1) * _0xb1a4cf * _0xb1a4cf * _0xb1a4cf - 1),
  easeInOutQuart: _0x1aff9a => (_0x1aff9a /= 0.5) < 1 ? _0x1aff9a * 0.5 * _0x1aff9a * _0x1aff9a * _0x1aff9a : ((_0x1aff9a -= 2) * _0x1aff9a * _0x1aff9a * _0x1aff9a - 2) * -0.5,
  easeInQuint: _0x4af663 => _0x4af663 * _0x4af663 * _0x4af663 * _0x4af663 * _0x4af663,
  easeOutQuint: _0x4de0fa => (_0x4de0fa -= 1) * _0x4de0fa * _0x4de0fa * _0x4de0fa * _0x4de0fa + 1,
  easeInOutQuint: _0x4f6a69 => (_0x4f6a69 /= 0.5) < 1 ? _0x4f6a69 * 0.5 * _0x4f6a69 * _0x4f6a69 * _0x4f6a69 * _0x4f6a69 : ((_0x4f6a69 -= 2) * _0x4f6a69 * _0x4f6a69 * _0x4f6a69 * _0x4f6a69 + 2) * 0.5,
  easeInSine: _0x452a9d => -Math.cos(_0x452a9d * Q) + 1,
  easeOutSine: _0x3e1667 => Math.sin(_0x3e1667 * Q),
  easeInOutSine: _0x3937eb => (Math.cos(W * _0x3937eb) - 1) * -0.5,
  easeInExpo: _0x5325c6 => _0x5325c6 === 0 ? 0 : Math.pow(2, (_0x5325c6 - 1) * 10),
  easeOutExpo: _0x2eab03 => _0x2eab03 === 1 ? 1 : -Math.pow(2, _0x2eab03 * -10) + 1,
  easeInOutExpo: _0x1cfb2a => qe(_0x1cfb2a) ? _0x1cfb2a : _0x1cfb2a < 0.5 ? Math.pow(2, (_0x1cfb2a * 2 - 1) * 10) * 0.5 : (-Math.pow(2, (_0x1cfb2a * 2 - 1) * -10) + 2) * 0.5,
  easeInCirc: _0x245a2c => _0x245a2c >= 1 ? _0x245a2c : -(Math.sqrt(1 - _0x245a2c * _0x245a2c) - 1),
  easeOutCirc: _0x39ea42 => Math.sqrt(1 - (_0x39ea42 -= 1) * _0x39ea42),
  easeInOutCirc: _0x21607e => (_0x21607e /= 0.5) < 1 ? (Math.sqrt(1 - _0x21607e * _0x21607e) - 1) * -0.5 : (Math.sqrt(1 - (_0x21607e -= 2) * _0x21607e) + 1) * 0.5,
  easeInElastic: _0x2387d3 => qe(_0x2387d3) ? _0x2387d3 : ds(_0x2387d3, 0.075, 0.3),
  easeOutElastic: _0x179283 => qe(_0x179283) ? _0x179283 : fs(_0x179283, 0.075, 0.3),
  easeInOutElastic(_0x319dd0) {
    if (qe(_0x319dd0)) {
      return _0x319dd0;
    } else if (_0x319dd0 < 0.5) {
      return ds(_0x319dd0 * 2, 0.1125, 0.45) * 0.5;
    } else {
      return 0.5 + fs(_0x319dd0 * 2 - 1, 0.1125, 0.45) * 0.5;
    }
  },
  easeInBack(_0x390eb4) {
    return _0x390eb4 * _0x390eb4 * (_0x390eb4 * 2.70158 - 1.70158);
  },
  easeOutBack(_0x566d2d) {
    return (_0x566d2d -= 1) * _0x566d2d * (_0x566d2d * 2.70158 + 1.70158) + 1;
  },
  easeInOutBack(_0x1f3fc0) {
    let _0x8aaf48 = 1.70158;
    if ((_0x1f3fc0 /= 0.5) < 1) {
      return _0x1f3fc0 * _0x1f3fc0 * (((_0x8aaf48 *= 1.525) + 1) * _0x1f3fc0 - _0x8aaf48) * 0.5;
    } else {
      return ((_0x1f3fc0 -= 2) * _0x1f3fc0 * (((_0x8aaf48 *= 1.525) + 1) * _0x1f3fc0 + _0x8aaf48) + 2) * 0.5;
    }
  },
  easeInBounce: _0x41a656 => 1 - ye.easeOutBounce(1 - _0x41a656),
  easeOutBounce(_0xe774a7) {
    if (_0xe774a7 < 1 / 2.75) {
      return _0xe774a7 * 7.5625 * _0xe774a7;
    } else if (_0xe774a7 < 2 / 2.75) {
      return (_0xe774a7 -= 1.5 / 2.75) * 7.5625 * _0xe774a7 + 0.75;
    } else if (_0xe774a7 < 2.5 / 2.75) {
      return (_0xe774a7 -= 2.25 / 2.75) * 7.5625 * _0xe774a7 + 0.9375;
    } else {
      return (_0xe774a7 -= 2.625 / 2.75) * 7.5625 * _0xe774a7 + 0.984375;
    }
  },
  easeInOutBounce: _0x144a5a => _0x144a5a < 0.5 ? ye.easeInBounce(_0x144a5a * 2) * 0.5 : ye.easeOutBounce(_0x144a5a * 2 - 1) * 0.5 + 0.5
};
function Ho(_0x386530) {
  if (_0x386530 && typeof _0x386530 == "object") {
    const _0x3bb3e7 = _0x386530.toString();
    return _0x3bb3e7 === "[object CanvasPattern]" || _0x3bb3e7 === "[object CanvasGradient]";
  }
  return false;
}
function us(_0x3c8164) {
  if (Ho(_0x3c8164)) {
    return _0x3c8164;
  } else {
    return new $e(_0x3c8164);
  }
}
function Vi(_0x4970a4) {
  if (Ho(_0x4970a4)) {
    return _0x4970a4;
  } else {
    return new $e(_0x4970a4).saturate(0.5).darken(0.1).hexString();
  }
}
const qc = ["x", "y", "borderWidth", "radius", "tension"];
const Xc = ["color", "borderColor", "backgroundColor"];
function Gc(_0xb1c0be) {
  _0xb1c0be.set("animation", {
    delay: undefined,
    duration: 1000,
    easing: "easeOutQuart",
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
  });
  _0xb1c0be.describe("animation", {
    _fallback: false,
    _indexable: false,
    _scriptable: _0x35c721 => _0x35c721 !== "onProgress" && _0x35c721 !== "onComplete" && _0x35c721 !== "fn"
  });
  _0xb1c0be.set("animations", {
    colors: {
      type: "color",
      properties: Xc
    },
    numbers: {
      type: "number",
      properties: qc
    }
  });
  _0xb1c0be.describe("animations", {
    _fallback: "animation"
  });
  _0xb1c0be.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: _0xe35a5d => _0xe35a5d | 0
        }
      }
    }
  });
}
function Zc(_0x481518) {
  _0x481518.set("layout", {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const gs = new Map();
function Qc(_0x573add, _0x566b91) {
  _0x566b91 = _0x566b91 || {};
  const _0x156fe9 = _0x573add + JSON.stringify(_0x566b91);
  let _0x2b4033 = gs.get(_0x156fe9);
  if (!_0x2b4033) {
    _0x2b4033 = new Intl.NumberFormat(_0x573add, _0x566b91);
    gs.set(_0x156fe9, _0x2b4033);
  }
  return _0x2b4033;
}
function Te(_0x59efd2, _0x2e905b, _0x451c2d) {
  return Qc(_0x2e905b, _0x451c2d).format(_0x59efd2);
}
const Wo = {
  values(_0x4fd059) {
    if (B(_0x4fd059)) {
      return _0x4fd059;
    } else {
      return "" + _0x4fd059;
    }
  },
  numeric(_0x44f2f6, _0x57d451, _0x3287ce) {
    if (_0x44f2f6 === 0) {
      return "0";
    }
    const _0x5c6b69 = this.chart.options.locale;
    let _0xbab89c;
    let _0x295e65 = _0x44f2f6;
    if (_0x3287ce.length > 1) {
      const _0x20d032 = Math.max(Math.abs(_0x3287ce[0].value), Math.abs(_0x3287ce[_0x3287ce.length - 1].value));
      if (_0x20d032 < 0.0001 || _0x20d032 > 1000000000000000) {
        _0xbab89c = "scientific";
      }
      _0x295e65 = Jc(_0x44f2f6, _0x3287ce);
    }
    const _0x2c3f08 = Ot(Math.abs(_0x295e65));
    const _0x3f5126 = isNaN(_0x2c3f08) ? 1 : Math.max(Math.min(Math.floor(_0x2c3f08) * -1, 20), 0);
    const _0x4ac0a3 = {
      notation: _0xbab89c,
      minimumFractionDigits: _0x3f5126,
      maximumFractionDigits: _0x3f5126
    };
    Object.assign(_0x4ac0a3, this.options.ticks.format);
    return Te(_0x44f2f6, _0x5c6b69, _0x4ac0a3);
  },
  logarithmic(_0x1a81f3, _0x385ed6, _0x141347) {
    if (_0x1a81f3 === 0) {
      return "0";
    }
    const _0x2eb955 = _0x141347[_0x385ed6].significand || _0x1a81f3 / Math.pow(10, Math.floor(Ot(_0x1a81f3)));
    if ([1, 2, 3, 5, 10, 15].includes(_0x2eb955) || _0x385ed6 > _0x141347.length * 0.8) {
      return Wo.numeric.call(this, _0x1a81f3, _0x385ed6, _0x141347);
    } else {
      return "";
    }
  }
};
function Jc(_0x4aa84c, _0x1fae5f) {
  let _0x53f22f = _0x1fae5f.length > 3 ? _0x1fae5f[2].value - _0x1fae5f[1].value : _0x1fae5f[1].value - _0x1fae5f[0].value;
  if (Math.abs(_0x53f22f) >= 1 && _0x4aa84c !== Math.floor(_0x4aa84c)) {
    _0x53f22f = _0x4aa84c - Math.floor(_0x4aa84c);
  }
  return _0x53f22f;
}
var Si = {
  formatters: Wo
};
function th(_0x53ff1d) {
  _0x53ff1d.set("scale", {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: "ticks",
    clip: true,
    grace: 0,
    grid: {
      display: true,
      lineWidth: 1,
      drawOnChartArea: true,
      drawTicks: true,
      tickLength: 8,
      tickWidth: (_0x30ccae, _0x27a60c) => _0x27a60c.lineWidth,
      tickColor: (_0x4f0a29, _0x48b0bf) => _0x48b0bf.color,
      offset: false
    },
    border: {
      display: true,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: false,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: true,
      autoSkip: true,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Si.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: false,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  });
  _0x53ff1d.route("scale.ticks", "color", "", "color");
  _0x53ff1d.route("scale.grid", "color", "", "borderColor");
  _0x53ff1d.route("scale.border", "color", "", "borderColor");
  _0x53ff1d.route("scale.title", "color", "", "color");
  _0x53ff1d.describe("scale", {
    _fallback: false,
    _scriptable: _0x31bf2f => !_0x31bf2f.startsWith("before") && !_0x31bf2f.startsWith("after") && _0x31bf2f !== "callback" && _0x31bf2f !== "parser",
    _indexable: _0x2c247a => _0x2c247a !== "borderDash" && _0x2c247a !== "tickBorderDash" && _0x2c247a !== "dash"
  });
  _0x53ff1d.describe("scales", {
    _fallback: "scale"
  });
  _0x53ff1d.describe("scale.ticks", {
    _scriptable: _0x4290c6 => _0x4290c6 !== "backdropPadding" && _0x4290c6 !== "callback",
    _indexable: _0x4dad86 => _0x4dad86 !== "backdropPadding"
  });
}
const Wt = Object.create(null);
const un = Object.create(null);
function we(_0x440686, _0x36ab85) {
  if (!_0x36ab85) {
    return _0x440686;
  }
  const _0x34a413 = _0x36ab85.split(".");
  for (let _0x97bcb9 = 0, _0x196db7 = _0x34a413.length; _0x97bcb9 < _0x196db7; ++_0x97bcb9) {
    const _0x5e79c2 = _0x34a413[_0x97bcb9];
    _0x440686 = _0x440686[_0x5e79c2] ||= Object.create(null);
  }
  return _0x440686;
}
function Ui(_0x381459, _0x43a4f9, _0x18014b) {
  if (typeof _0x43a4f9 == "string") {
    return Me(we(_0x381459, _0x43a4f9), _0x18014b);
  } else {
    return Me(we(_0x381459, ""), _0x43a4f9);
  }
}
class eh {
  constructor(_0x384f35, _0x535bca) {
    this.animation = undefined;
    this.backgroundColor = "rgba(0,0,0,0.1)";
    this.borderColor = "rgba(0,0,0,0.1)";
    this.color = "#666";
    this.datasets = {};
    this.devicePixelRatio = _0x365ca0 => _0x365ca0.chart.platform.getDevicePixelRatio();
    this.elements = {};
    this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};
    this.hoverBackgroundColor = (_0x5b4bc4, _0x110c2) => Vi(_0x110c2.backgroundColor);
    this.hoverBorderColor = (_0x23acbc, _0x1e247d) => Vi(_0x1e247d.borderColor);
    this.hoverColor = (_0x59b932, _0x4db9c1) => Vi(_0x4db9c1.color);
    this.indexAxis = "x";
    this.interaction = {
      mode: "nearest",
      intersect: true,
      includeInvisible: false
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.drawActiveElementsOnTop = true;
    this.describe(_0x384f35);
    this.apply(_0x535bca);
  }
  set(_0xc29a09, _0x5c2103) {
    return Ui(this, _0xc29a09, _0x5c2103);
  }
  get(_0x515048) {
    return we(this, _0x515048);
  }
  describe(_0x126da2, _0x31fe4d) {
    return Ui(un, _0x126da2, _0x31fe4d);
  }
  override(_0x17e112, _0x199d15) {
    return Ui(Wt, _0x17e112, _0x199d15);
  }
  route(_0x1d7370, _0x2b007a, _0x250871, _0x7c5426) {
    const _0x4fe3de = we(this, _0x1d7370);
    const _0x4f9441 = we(this, _0x250871);
    const _0x39b26c = "_" + _0x2b007a;
    Object.defineProperties(_0x4fe3de, {
      [_0x39b26c]: {
        value: _0x4fe3de[_0x2b007a],
        writable: true
      },
      [_0x2b007a]: {
        enumerable: true,
        get() {
          const _0x5a261f = this[_0x39b26c];
          const _0xf7d0bc = _0x4f9441[_0x7c5426];
          if (L(_0x5a261f)) {
            return Object.assign({}, _0xf7d0bc, _0x5a261f);
          } else {
            return T(_0x5a261f, _0xf7d0bc);
          }
        },
        set(_0x2754cd) {
          this[_0x39b26c] = _0x2754cd;
        }
      }
    });
  }
  apply(_0x262d73) {
    _0x262d73.forEach(_0x44d43d => _0x44d43d(this));
  }
}
var N = new eh({
  _scriptable: _0x140eaa => !_0x140eaa.startsWith("on"),
  _indexable: _0x159971 => _0x159971 !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
}, [Gc, Zc, th]);
function ih(_0xeab37c) {
  if (!_0xeab37c || I(_0xeab37c.size) || I(_0xeab37c.family)) {
    return null;
  } else {
    return (_0xeab37c.style ? _0xeab37c.style + " " : "") + (_0xeab37c.weight ? _0xeab37c.weight + " " : "") + _0xeab37c.size + "px " + _0xeab37c.family;
  }
}
function xi(_0x595c1c, _0x29f846, _0x435561, _0x1c2de3, _0x5982c3) {
  let _0xb8cde9 = _0x29f846[_0x5982c3];
  if (!_0xb8cde9) {
    _0xb8cde9 = _0x29f846[_0x5982c3] = _0x595c1c.measureText(_0x5982c3).width;
    _0x435561.push(_0x5982c3);
  }
  if (_0xb8cde9 > _0x1c2de3) {
    _0x1c2de3 = _0xb8cde9;
  }
  return _0x1c2de3;
}
function nh(_0x5f764f, _0x41e254, _0x39a9f0, _0x589a30) {
  _0x589a30 = _0x589a30 || {};
  let _0x52ed3e = _0x589a30.data = _0x589a30.data || {};
  let _0x5b0d91 = _0x589a30.garbageCollect = _0x589a30.garbageCollect || [];
  if (_0x589a30.font !== _0x41e254) {
    _0x52ed3e = _0x589a30.data = {};
    _0x5b0d91 = _0x589a30.garbageCollect = [];
    _0x589a30.font = _0x41e254;
  }
  _0x5f764f.save();
  _0x5f764f.font = _0x41e254;
  let _0x194226 = 0;
  const _0x4f8472 = _0x39a9f0.length;
  let _0x52a659;
  let _0x351e8f;
  let _0x2fccb9;
  let _0x5e3a04;
  let _0x3e8c4b;
  for (_0x52a659 = 0; _0x52a659 < _0x4f8472; _0x52a659++) {
    _0x5e3a04 = _0x39a9f0[_0x52a659];
    if (_0x5e3a04 != null && !B(_0x5e3a04)) {
      _0x194226 = xi(_0x5f764f, _0x52ed3e, _0x5b0d91, _0x194226, _0x5e3a04);
    } else if (B(_0x5e3a04)) {
      _0x351e8f = 0;
      _0x2fccb9 = _0x5e3a04.length;
      for (; _0x351e8f < _0x2fccb9; _0x351e8f++) {
        _0x3e8c4b = _0x5e3a04[_0x351e8f];
        if (_0x3e8c4b != null && !B(_0x3e8c4b)) {
          _0x194226 = xi(_0x5f764f, _0x52ed3e, _0x5b0d91, _0x194226, _0x3e8c4b);
        }
      }
    }
  }
  _0x5f764f.restore();
  const _0x5acea2 = _0x5b0d91.length / 2;
  if (_0x5acea2 > _0x39a9f0.length) {
    for (_0x52a659 = 0; _0x52a659 < _0x5acea2; _0x52a659++) {
      delete _0x52ed3e[_0x5b0d91[_0x52a659]];
    }
    _0x5b0d91.splice(0, _0x5acea2);
  }
  return _0x194226;
}
function zt(_0x4b19dc, _0x593205, _0x13d595) {
  const _0x386709 = _0x4b19dc.currentDevicePixelRatio;
  const _0x149b7e = _0x13d595 !== 0 ? Math.max(_0x13d595 / 2, 0.5) : 0;
  return Math.round((_0x593205 - _0x149b7e) * _0x386709) / _0x386709 + _0x149b7e;
}
function ps(_0x384e68, _0x3b7ef4) {
  _0x3b7ef4 = _0x3b7ef4 || _0x384e68.getContext("2d");
  _0x3b7ef4.save();
  _0x3b7ef4.resetTransform();
  _0x3b7ef4.clearRect(0, 0, _0x384e68.width, _0x384e68.height);
  _0x3b7ef4.restore();
}
function sh(_0x35d63e, _0x377e1f, _0x4ef8ab, _0x2d7beb, _0x23da7e) {
  let _0x280a47;
  let _0x596df3;
  let _0x2745af;
  let _0x3c4adf;
  let _0x3576c1;
  let _0x264900;
  let _0x4fc982;
  let _0x5a58b4;
  const _0x4b6be1 = _0x377e1f.pointStyle;
  const _0x208950 = _0x377e1f.rotation;
  const _0x57a67f = _0x377e1f.radius;
  let _0x2f27cc = (_0x208950 || 0) * zc;
  if (_0x4b6be1 && typeof _0x4b6be1 == "object" && (_0x280a47 = _0x4b6be1.toString(), _0x280a47 === "[object HTMLImageElement]" || _0x280a47 === "[object HTMLCanvasElement]")) {
    _0x35d63e.save();
    _0x35d63e.translate(_0x4ef8ab, _0x2d7beb);
    _0x35d63e.rotate(_0x2f27cc);
    _0x35d63e.drawImage(_0x4b6be1, -_0x4b6be1.width / 2, -_0x4b6be1.height / 2, _0x4b6be1.width, _0x4b6be1.height);
    _0x35d63e.restore();
    return;
  }
  if (!isNaN(_0x57a67f) && !(_0x57a67f <= 0)) {
    _0x35d63e.beginPath();
    switch (_0x4b6be1) {
      default:
        if (_0x23da7e) {
          _0x35d63e.ellipse(_0x4ef8ab, _0x2d7beb, _0x23da7e / 2, _0x57a67f, 0, 0, Z);
        } else {
          _0x35d63e.arc(_0x4ef8ab, _0x2d7beb, _0x57a67f, 0, Z);
        }
        _0x35d63e.closePath();
        break;
      case "triangle":
        _0x264900 = _0x23da7e ? _0x23da7e / 2 : _0x57a67f;
        _0x35d63e.moveTo(_0x4ef8ab + Math.sin(_0x2f27cc) * _0x264900, _0x2d7beb - Math.cos(_0x2f27cc) * _0x57a67f);
        _0x2f27cc += as;
        _0x35d63e.lineTo(_0x4ef8ab + Math.sin(_0x2f27cc) * _0x264900, _0x2d7beb - Math.cos(_0x2f27cc) * _0x57a67f);
        _0x2f27cc += as;
        _0x35d63e.lineTo(_0x4ef8ab + Math.sin(_0x2f27cc) * _0x264900, _0x2d7beb - Math.cos(_0x2f27cc) * _0x57a67f);
        _0x35d63e.closePath();
        break;
      case "rectRounded":
        _0x3576c1 = _0x57a67f * 0.516;
        _0x3c4adf = _0x57a67f - _0x3576c1;
        _0x596df3 = Math.cos(_0x2f27cc + Ft) * _0x3c4adf;
        _0x4fc982 = Math.cos(_0x2f27cc + Ft) * (_0x23da7e ? _0x23da7e / 2 - _0x3576c1 : _0x3c4adf);
        _0x2745af = Math.sin(_0x2f27cc + Ft) * _0x3c4adf;
        _0x5a58b4 = Math.sin(_0x2f27cc + Ft) * (_0x23da7e ? _0x23da7e / 2 - _0x3576c1 : _0x3c4adf);
        _0x35d63e.arc(_0x4ef8ab - _0x4fc982, _0x2d7beb - _0x2745af, _0x3576c1, _0x2f27cc - W, _0x2f27cc - Q);
        _0x35d63e.arc(_0x4ef8ab + _0x5a58b4, _0x2d7beb - _0x596df3, _0x3576c1, _0x2f27cc - Q, _0x2f27cc);
        _0x35d63e.arc(_0x4ef8ab + _0x4fc982, _0x2d7beb + _0x2745af, _0x3576c1, _0x2f27cc, _0x2f27cc + Q);
        _0x35d63e.arc(_0x4ef8ab - _0x5a58b4, _0x2d7beb + _0x596df3, _0x3576c1, _0x2f27cc + Q, _0x2f27cc + W);
        _0x35d63e.closePath();
        break;
      case "rect":
        if (!_0x208950) {
          _0x3c4adf = Math.SQRT1_2 * _0x57a67f;
          _0x264900 = _0x23da7e ? _0x23da7e / 2 : _0x3c4adf;
          _0x35d63e.rect(_0x4ef8ab - _0x264900, _0x2d7beb - _0x3c4adf, _0x264900 * 2, _0x3c4adf * 2);
          break;
        }
        _0x2f27cc += Ft;
      case "rectRot":
        _0x4fc982 = Math.cos(_0x2f27cc) * (_0x23da7e ? _0x23da7e / 2 : _0x57a67f);
        _0x596df3 = Math.cos(_0x2f27cc) * _0x57a67f;
        _0x2745af = Math.sin(_0x2f27cc) * _0x57a67f;
        _0x5a58b4 = Math.sin(_0x2f27cc) * (_0x23da7e ? _0x23da7e / 2 : _0x57a67f);
        _0x35d63e.moveTo(_0x4ef8ab - _0x4fc982, _0x2d7beb - _0x2745af);
        _0x35d63e.lineTo(_0x4ef8ab + _0x5a58b4, _0x2d7beb - _0x596df3);
        _0x35d63e.lineTo(_0x4ef8ab + _0x4fc982, _0x2d7beb + _0x2745af);
        _0x35d63e.lineTo(_0x4ef8ab - _0x5a58b4, _0x2d7beb + _0x596df3);
        _0x35d63e.closePath();
        break;
      case "crossRot":
        _0x2f27cc += Ft;
      case "cross":
        _0x4fc982 = Math.cos(_0x2f27cc) * (_0x23da7e ? _0x23da7e / 2 : _0x57a67f);
        _0x596df3 = Math.cos(_0x2f27cc) * _0x57a67f;
        _0x2745af = Math.sin(_0x2f27cc) * _0x57a67f;
        _0x5a58b4 = Math.sin(_0x2f27cc) * (_0x23da7e ? _0x23da7e / 2 : _0x57a67f);
        _0x35d63e.moveTo(_0x4ef8ab - _0x4fc982, _0x2d7beb - _0x2745af);
        _0x35d63e.lineTo(_0x4ef8ab + _0x4fc982, _0x2d7beb + _0x2745af);
        _0x35d63e.moveTo(_0x4ef8ab + _0x5a58b4, _0x2d7beb - _0x596df3);
        _0x35d63e.lineTo(_0x4ef8ab - _0x5a58b4, _0x2d7beb + _0x596df3);
        break;
      case "star":
        _0x4fc982 = Math.cos(_0x2f27cc) * (_0x23da7e ? _0x23da7e / 2 : _0x57a67f);
        _0x596df3 = Math.cos(_0x2f27cc) * _0x57a67f;
        _0x2745af = Math.sin(_0x2f27cc) * _0x57a67f;
        _0x5a58b4 = Math.sin(_0x2f27cc) * (_0x23da7e ? _0x23da7e / 2 : _0x57a67f);
        _0x35d63e.moveTo(_0x4ef8ab - _0x4fc982, _0x2d7beb - _0x2745af);
        _0x35d63e.lineTo(_0x4ef8ab + _0x4fc982, _0x2d7beb + _0x2745af);
        _0x35d63e.moveTo(_0x4ef8ab + _0x5a58b4, _0x2d7beb - _0x596df3);
        _0x35d63e.lineTo(_0x4ef8ab - _0x5a58b4, _0x2d7beb + _0x596df3);
        _0x2f27cc += Ft;
        _0x4fc982 = Math.cos(_0x2f27cc) * (_0x23da7e ? _0x23da7e / 2 : _0x57a67f);
        _0x596df3 = Math.cos(_0x2f27cc) * _0x57a67f;
        _0x2745af = Math.sin(_0x2f27cc) * _0x57a67f;
        _0x5a58b4 = Math.sin(_0x2f27cc) * (_0x23da7e ? _0x23da7e / 2 : _0x57a67f);
        _0x35d63e.moveTo(_0x4ef8ab - _0x4fc982, _0x2d7beb - _0x2745af);
        _0x35d63e.lineTo(_0x4ef8ab + _0x4fc982, _0x2d7beb + _0x2745af);
        _0x35d63e.moveTo(_0x4ef8ab + _0x5a58b4, _0x2d7beb - _0x596df3);
        _0x35d63e.lineTo(_0x4ef8ab - _0x5a58b4, _0x2d7beb + _0x596df3);
        break;
      case "line":
        _0x596df3 = _0x23da7e ? _0x23da7e / 2 : Math.cos(_0x2f27cc) * _0x57a67f;
        _0x2745af = Math.sin(_0x2f27cc) * _0x57a67f;
        _0x35d63e.moveTo(_0x4ef8ab - _0x596df3, _0x2d7beb - _0x2745af);
        _0x35d63e.lineTo(_0x4ef8ab + _0x596df3, _0x2d7beb + _0x2745af);
        break;
      case "dash":
        _0x35d63e.moveTo(_0x4ef8ab, _0x2d7beb);
        _0x35d63e.lineTo(_0x4ef8ab + Math.cos(_0x2f27cc) * (_0x23da7e ? _0x23da7e / 2 : _0x57a67f), _0x2d7beb + Math.sin(_0x2f27cc) * _0x57a67f);
        break;
      case false:
        _0x35d63e.closePath();
        break;
    }
    _0x35d63e.fill();
    if (_0x377e1f.borderWidth > 0) {
      _0x35d63e.stroke();
    }
  }
}
function Jt(_0x12d692, _0x1fc8bd, _0x425a39) {
  _0x425a39 = _0x425a39 || 0.5;
  return !_0x1fc8bd || _0x12d692 && _0x12d692.x > _0x1fc8bd.left - _0x425a39 && _0x12d692.x < _0x1fc8bd.right + _0x425a39 && _0x12d692.y > _0x1fc8bd.top - _0x425a39 && _0x12d692.y < _0x1fc8bd.bottom + _0x425a39;
}
function Pn(_0x16ed0f, _0x59b5bd) {
  _0x16ed0f.save();
  _0x16ed0f.beginPath();
  _0x16ed0f.rect(_0x59b5bd.left, _0x59b5bd.top, _0x59b5bd.right - _0x59b5bd.left, _0x59b5bd.bottom - _0x59b5bd.top);
  _0x16ed0f.clip();
}
function On(_0x577bfc) {
  _0x577bfc.restore();
}
function oh(_0x235f87, _0x2c40a5) {
  if (_0x2c40a5.translation) {
    _0x235f87.translate(_0x2c40a5.translation[0], _0x2c40a5.translation[1]);
  }
  if (!I(_0x2c40a5.rotation)) {
    _0x235f87.rotate(_0x2c40a5.rotation);
  }
  if (_0x2c40a5.color) {
    _0x235f87.fillStyle = _0x2c40a5.color;
  }
  if (_0x2c40a5.textAlign) {
    _0x235f87.textAlign = _0x2c40a5.textAlign;
  }
  if (_0x2c40a5.textBaseline) {
    _0x235f87.textBaseline = _0x2c40a5.textBaseline;
  }
}
function rh(_0x351f64, _0x1c3928, _0x4d4c0a, _0x243960, _0x22f588) {
  if (_0x22f588.strikethrough || _0x22f588.underline) {
    const _0x3ecff0 = _0x351f64.measureText(_0x243960);
    const _0x261852 = _0x1c3928 - _0x3ecff0.actualBoundingBoxLeft;
    const _0x1ca041 = _0x1c3928 + _0x3ecff0.actualBoundingBoxRight;
    const _0xfdf2c6 = _0x4d4c0a - _0x3ecff0.actualBoundingBoxAscent;
    const _0x1158a0 = _0x4d4c0a + _0x3ecff0.actualBoundingBoxDescent;
    const _0x55b4b0 = _0x22f588.strikethrough ? (_0xfdf2c6 + _0x1158a0) / 2 : _0x1158a0;
    _0x351f64.strokeStyle = _0x351f64.fillStyle;
    _0x351f64.beginPath();
    _0x351f64.lineWidth = _0x22f588.decorationWidth || 2;
    _0x351f64.moveTo(_0x261852, _0x55b4b0);
    _0x351f64.lineTo(_0x1ca041, _0x55b4b0);
    _0x351f64.stroke();
  }
}
function ah(_0x2c1429, _0x31db35) {
  const _0x505c63 = _0x2c1429.fillStyle;
  _0x2c1429.fillStyle = _0x31db35.color;
  _0x2c1429.fillRect(_0x31db35.left, _0x31db35.top, _0x31db35.width, _0x31db35.height);
  _0x2c1429.fillStyle = _0x505c63;
}
function Vt(_0x16d3d5, _0x5b0d73, _0x2b86df, _0x288344, _0x439bbe, _0x50ab68 = {}) {
  const _0x388e2d = B(_0x5b0d73) ? _0x5b0d73 : [_0x5b0d73];
  const _0x9a345d = _0x50ab68.strokeWidth > 0 && _0x50ab68.strokeColor !== "";
  let _0x803272;
  let _0x180634;
  _0x16d3d5.save();
  _0x16d3d5.font = _0x439bbe.string;
  oh(_0x16d3d5, _0x50ab68);
  _0x803272 = 0;
  for (; _0x803272 < _0x388e2d.length; ++_0x803272) {
    _0x180634 = _0x388e2d[_0x803272];
    if (_0x50ab68.backdrop) {
      ah(_0x16d3d5, _0x50ab68.backdrop);
    }
    if (_0x9a345d) {
      if (_0x50ab68.strokeColor) {
        _0x16d3d5.strokeStyle = _0x50ab68.strokeColor;
      }
      if (!I(_0x50ab68.strokeWidth)) {
        _0x16d3d5.lineWidth = _0x50ab68.strokeWidth;
      }
      _0x16d3d5.strokeText(_0x180634, _0x2b86df, _0x288344, _0x50ab68.maxWidth);
    }
    _0x16d3d5.fillText(_0x180634, _0x2b86df, _0x288344, _0x50ab68.maxWidth);
    rh(_0x16d3d5, _0x2b86df, _0x288344, _0x180634, _0x50ab68);
    _0x288344 += Number(_0x439bbe.lineHeight);
  }
  _0x16d3d5.restore();
}
function An(_0x37c080, _0x11e0fb) {
  const {
    x: _0x500e37,
    y: _0x309ff7,
    w: _0x506bbe,
    h: _0x557fa4,
    radius: _0x591b9c
  } = _0x11e0fb;
  _0x37c080.arc(_0x500e37 + _0x591b9c.topLeft, _0x309ff7 + _0x591b9c.topLeft, _0x591b9c.topLeft, W * 1.5, W, true);
  _0x37c080.lineTo(_0x500e37, _0x309ff7 + _0x557fa4 - _0x591b9c.bottomLeft);
  _0x37c080.arc(_0x500e37 + _0x591b9c.bottomLeft, _0x309ff7 + _0x557fa4 - _0x591b9c.bottomLeft, _0x591b9c.bottomLeft, W, Q, true);
  _0x37c080.lineTo(_0x500e37 + _0x506bbe - _0x591b9c.bottomRight, _0x309ff7 + _0x557fa4);
  _0x37c080.arc(_0x500e37 + _0x506bbe - _0x591b9c.bottomRight, _0x309ff7 + _0x557fa4 - _0x591b9c.bottomRight, _0x591b9c.bottomRight, Q, 0, true);
  _0x37c080.lineTo(_0x500e37 + _0x506bbe, _0x309ff7 + _0x591b9c.topRight);
  _0x37c080.arc(_0x500e37 + _0x506bbe - _0x591b9c.topRight, _0x309ff7 + _0x591b9c.topRight, _0x591b9c.topRight, 0, -Q, true);
  _0x37c080.lineTo(_0x500e37 + _0x591b9c.topLeft, _0x309ff7);
}
const lh = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const ch = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function hh(_0x846988, _0x59a933) {
  const _0x10ee8f = ("" + _0x846988).match(lh);
  if (!_0x10ee8f || _0x10ee8f[1] === "normal") {
    return _0x59a933 * 1.2;
  }
  _0x846988 = +_0x10ee8f[2];
  switch (_0x10ee8f[3]) {
    case "px":
      return _0x846988;
    case "%":
      _0x846988 /= 100;
      break;
  }
  return _0x59a933 * _0x846988;
}
const dh = _0x372d44 => +_0x372d44 || 0;
function Vo(_0x242bc5, _0x27d998) {
  const _0x4cfd0e = {};
  const _0x42e851 = L(_0x27d998);
  const _0x10a7be = _0x42e851 ? Object.keys(_0x27d998) : _0x27d998;
  const _0x18d4be = L(_0x242bc5) ? _0x42e851 ? _0x67a98b => T(_0x242bc5[_0x67a98b], _0x242bc5[_0x27d998[_0x67a98b]]) : _0x240774 => _0x242bc5[_0x240774] : () => _0x242bc5;
  for (const _0xb0918c of _0x10a7be) {
    _0x4cfd0e[_0xb0918c] = dh(_0x18d4be(_0xb0918c));
  }
  return _0x4cfd0e;
}
function Uo(_0x235585) {
  return Vo(_0x235585, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Dn(_0x17d7e0) {
  return Vo(_0x17d7e0, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function nt(_0x58a5e4) {
  const _0x4fadf6 = Uo(_0x58a5e4);
  _0x4fadf6.width = _0x4fadf6.left + _0x4fadf6.right;
  _0x4fadf6.height = _0x4fadf6.top + _0x4fadf6.bottom;
  return _0x4fadf6;
}
function rt(_0xddbe33, _0x3e9d8e) {
  _0xddbe33 = _0xddbe33 || {};
  _0x3e9d8e = _0x3e9d8e || N.font;
  let _0xd19ee3 = T(_0xddbe33.size, _0x3e9d8e.size);
  if (typeof _0xd19ee3 == "string") {
    _0xd19ee3 = parseInt(_0xd19ee3, 10);
  }
  let _0x46a8ca = T(_0xddbe33.style, _0x3e9d8e.style);
  if (_0x46a8ca && !("" + _0x46a8ca).match(ch)) {
    console.warn("Invalid font style specified: \"" + _0x46a8ca + "\"");
    _0x46a8ca = undefined;
  }
  const _0xfe09a4 = {
    family: T(_0xddbe33.family, _0x3e9d8e.family),
    lineHeight: hh(T(_0xddbe33.lineHeight, _0x3e9d8e.lineHeight), _0xd19ee3),
    size: _0xd19ee3,
    style: _0x46a8ca,
    weight: T(_0xddbe33.weight, _0x3e9d8e.weight),
    string: ""
  };
  _0xfe09a4.string = ih(_0xfe09a4);
  return _0xfe09a4;
}
function Xe(_0x43a2bb, _0x3cf8a6, _0x444213, _0x4b750b) {
  let _0x5594ea = true;
  let _0xb15c3e;
  let _0x3affa1;
  let _0x41b613;
  _0xb15c3e = 0;
  _0x3affa1 = _0x43a2bb.length;
  for (; _0xb15c3e < _0x3affa1; ++_0xb15c3e) {
    _0x41b613 = _0x43a2bb[_0xb15c3e];
    if (_0x41b613 !== undefined && (_0x3cf8a6 !== undefined && typeof _0x41b613 == "function" && (_0x41b613 = _0x41b613(_0x3cf8a6), _0x5594ea = false), _0x444213 !== undefined && B(_0x41b613) && (_0x41b613 = _0x41b613[_0x444213 % _0x41b613.length], _0x5594ea = false), _0x41b613 !== undefined)) {
      if (_0x4b750b && !_0x5594ea) {
        _0x4b750b.cacheable = false;
      }
      return _0x41b613;
    }
  }
}
function fh(_0x4a6f12, _0x51c292, _0x43c451) {
  const {
    min: _0x3b5dcb,
    max: _0x3ed01b
  } = _0x4a6f12;
  const _0x236065 = Ro(_0x51c292, (_0x3ed01b - _0x3b5dcb) / 2);
  const _0x24ccde = (_0xbeb4f1, _0x14a561) => _0x43c451 && _0xbeb4f1 === 0 ? 0 : _0xbeb4f1 + _0x14a561;
  return {
    min: _0x24ccde(_0x3b5dcb, -Math.abs(_0x236065)),
    max: _0x24ccde(_0x3ed01b, _0x236065)
  };
}
function oe(_0x2ec784, _0x4d256c) {
  return Object.assign(Object.create(_0x2ec784), _0x4d256c);
}
function Ln(_0x1e0f2f, _0x5cca5d = [""], _0x3f7eb4, _0x57ba50, _0x5f2529 = () => _0x1e0f2f[0]) {
  const _0x11802a = _0x3f7eb4 || _0x1e0f2f;
  if (typeof _0x57ba50 === "undefined") {
    _0x57ba50 = Xo("_fallback", _0x1e0f2f);
  }
  const _0x9e0e49 = {
    [Symbol.toStringTag]: "Object",
    _cacheable: true,
    _scopes: _0x1e0f2f,
    _rootScopes: _0x11802a,
    _fallback: _0x57ba50,
    _getTarget: _0x5f2529,
    override: _0x36e2e6 => Ln([_0x36e2e6, ..._0x1e0f2f], _0x5cca5d, _0x11802a, _0x57ba50)
  };
  return new Proxy(_0x9e0e49, {
    deleteProperty(_0x5e217c, _0x15a1cc) {
      delete _0x5e217c[_0x15a1cc];
      delete _0x5e217c._keys;
      delete _0x1e0f2f[0][_0x15a1cc];
      return true;
    },
    get(_0x3084a5, _0x2cd27a) {
      return Ko(_0x3084a5, _0x2cd27a, () => vh(_0x2cd27a, _0x5cca5d, _0x1e0f2f, _0x3084a5));
    },
    getOwnPropertyDescriptor(_0x517d7d, _0x1733d6) {
      return Reflect.getOwnPropertyDescriptor(_0x517d7d._scopes[0], _0x1733d6);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(_0x1e0f2f[0]);
    },
    has(_0x28a2ef, _0x1bb906) {
      return _s(_0x28a2ef).includes(_0x1bb906);
    },
    ownKeys(_0x84a184) {
      return _s(_0x84a184);
    },
    set(_0xadff5, _0x1537c5, _0x2aa95a) {
      const _0x3b3fde = _0xadff5._storage ||= _0x5f2529();
      _0xadff5[_0x1537c5] = _0x3b3fde[_0x1537c5] = _0x2aa95a;
      delete _0xadff5._keys;
      return true;
    }
  });
}
function ee(_0x2a6b48, _0x5409da, _0x36282f, _0x3f5669) {
  const _0xd12f1e = {
    _cacheable: false,
    _proxy: _0x2a6b48,
    _context: _0x5409da,
    _subProxy: _0x36282f,
    _stack: new Set(),
    _descriptors: Yo(_0x2a6b48, _0x3f5669),
    setContext: _0x3a6e27 => ee(_0x2a6b48, _0x3a6e27, _0x36282f, _0x3f5669),
    override: _0xf731d9 => ee(_0x2a6b48.override(_0xf731d9), _0x5409da, _0x36282f, _0x3f5669)
  };
  return new Proxy(_0xd12f1e, {
    deleteProperty(_0x49ad2e, _0x3783f1) {
      delete _0x49ad2e[_0x3783f1];
      delete _0x2a6b48[_0x3783f1];
      return true;
    },
    get(_0x3058da, _0x2916a4, _0x402078) {
      return Ko(_0x3058da, _0x2916a4, () => gh(_0x3058da, _0x2916a4, _0x402078));
    },
    getOwnPropertyDescriptor(_0xa6adc7, _0x59f81d) {
      if (_0xa6adc7._descriptors.allKeys) {
        if (Reflect.has(_0x2a6b48, _0x59f81d)) {
          return {
            enumerable: true,
            configurable: true
          };
        } else {
          return undefined;
        }
      } else {
        return Reflect.getOwnPropertyDescriptor(_0x2a6b48, _0x59f81d);
      }
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(_0x2a6b48);
    },
    has(_0x5df6d1, _0x20f014) {
      return Reflect.has(_0x2a6b48, _0x20f014);
    },
    ownKeys() {
      return Reflect.ownKeys(_0x2a6b48);
    },
    set(_0x176bc1, _0x1f7cd2, _0x5268c4) {
      _0x2a6b48[_0x1f7cd2] = _0x5268c4;
      delete _0x176bc1[_0x1f7cd2];
      return true;
    }
  });
}
function Yo(_0x198fe7, _0x4943fa = {
  scriptable: true,
  indexable: true
}) {
  const {
    _scriptable: _0x5ace34 = _0x4943fa.scriptable,
    _indexable: _0x475fac = _0x4943fa.indexable,
    _allKeys: _0x5712a6 = _0x4943fa.allKeys
  } = _0x198fe7;
  return {
    allKeys: _0x5712a6,
    scriptable: _0x5ace34,
    indexable: _0x475fac,
    isScriptable: Et(_0x5ace34) ? _0x5ace34 : () => _0x5ace34,
    isIndexable: Et(_0x475fac) ? _0x475fac : () => _0x475fac
  };
}
const uh = (_0x47a147, _0x502c52) => _0x47a147 ? _0x47a147 + $n(_0x502c52) : _0x502c52;
const Tn = (_0x43469d, _0x2164a7) => L(_0x2164a7) && _0x43469d !== "adapters" && (Object.getPrototypeOf(_0x2164a7) === null || _0x2164a7.constructor === Object);
function Ko(_0x4bd33b, _0x142561, _0x5d01bc) {
  if (Object.prototype.hasOwnProperty.call(_0x4bd33b, _0x142561)) {
    return _0x4bd33b[_0x142561];
  }
  const _0x435df3 = _0x5d01bc();
  _0x4bd33b[_0x142561] = _0x435df3;
  return _0x435df3;
}
function gh(_0x12a2c7, _0x42777b, _0x17629b) {
  const {
    _proxy: _0x2f264b,
    _context: _0x559515,
    _subProxy: _0x15c6cd,
    _descriptors: _0xb246b0
  } = _0x12a2c7;
  let _0x90f489 = _0x2f264b[_0x42777b];
  if (Et(_0x90f489) && _0xb246b0.isScriptable(_0x42777b)) {
    _0x90f489 = ph(_0x42777b, _0x90f489, _0x12a2c7, _0x17629b);
  }
  if (B(_0x90f489) && _0x90f489.length) {
    _0x90f489 = mh(_0x42777b, _0x90f489, _0x12a2c7, _0xb246b0.isIndexable);
  }
  if (Tn(_0x42777b, _0x90f489)) {
    _0x90f489 = ee(_0x90f489, _0x559515, _0x15c6cd && _0x15c6cd[_0x42777b], _0xb246b0);
  }
  return _0x90f489;
}
function ph(_0x1abc58, _0x40da32, _0x155733, _0x4d78b8) {
  const {
    _proxy: _0x53a52b,
    _context: _0x14a86d,
    _subProxy: _0x2b6c62,
    _stack: _0x2e0a36
  } = _0x155733;
  if (_0x2e0a36.has(_0x1abc58)) {
    throw new Error("Recursion detected: " + Array.from(_0x2e0a36).join("->") + "->" + _0x1abc58);
  }
  _0x2e0a36.add(_0x1abc58);
  let _0x55f1bd = _0x40da32(_0x14a86d, _0x2b6c62 || _0x4d78b8);
  _0x2e0a36.delete(_0x1abc58);
  if (Tn(_0x1abc58, _0x55f1bd)) {
    _0x55f1bd = En(_0x53a52b._scopes, _0x53a52b, _0x1abc58, _0x55f1bd);
  }
  return _0x55f1bd;
}
function mh(_0x4b65b9, _0x3a4cd3, _0x123940, _0x3929f6) {
  const {
    _proxy: _0x9868f,
    _context: _0x94764c,
    _subProxy: _0x2a68dd,
    _descriptors: _0xd3c410
  } = _0x123940;
  if (typeof _0x94764c.index !== "undefined" && _0x3929f6(_0x4b65b9)) {
    return _0x3a4cd3[_0x94764c.index % _0x3a4cd3.length];
  }
  if (L(_0x3a4cd3[0])) {
    const _0x27791f = _0x3a4cd3;
    const _0x165c09 = _0x9868f._scopes.filter(_0x55f0c4 => _0x55f0c4 !== _0x27791f);
    _0x3a4cd3 = [];
    for (const _0x5dce8c of _0x27791f) {
      const _0x51bc9a = En(_0x165c09, _0x9868f, _0x4b65b9, _0x5dce8c);
      _0x3a4cd3.push(ee(_0x51bc9a, _0x94764c, _0x2a68dd && _0x2a68dd[_0x4b65b9], _0xd3c410));
    }
  }
  return _0x3a4cd3;
}
function qo(_0x21fdf0, _0x190f68, _0x431bd3) {
  if (Et(_0x21fdf0)) {
    return _0x21fdf0(_0x190f68, _0x431bd3);
  } else {
    return _0x21fdf0;
  }
}
const _h = (_0x40bab9, _0x463d65) => _0x40bab9 === true ? _0x463d65 : typeof _0x40bab9 == "string" ? Tt(_0x463d65, _0x40bab9) : undefined;
function bh(_0x34ef58, _0x2b580b, _0xc1b0f6, _0x231a17, _0x150be4) {
  for (const _0x13ea42 of _0x2b580b) {
    const _0x59844d = _h(_0xc1b0f6, _0x13ea42);
    if (_0x59844d) {
      _0x34ef58.add(_0x59844d);
      const _0x1826c6 = qo(_0x59844d._fallback, _0xc1b0f6, _0x150be4);
      if (typeof _0x1826c6 !== "undefined" && _0x1826c6 !== _0xc1b0f6 && _0x1826c6 !== _0x231a17) {
        return _0x1826c6;
      }
    } else if (_0x59844d === false && typeof _0x231a17 !== "undefined" && _0xc1b0f6 !== _0x231a17) {
      return null;
    }
  }
  return false;
}
function En(_0x54b3cc, _0x517010, _0x4a5052, _0x1641d0) {
  const _0x55f5ba = _0x517010._rootScopes;
  const _0x3dbbfb = qo(_0x517010._fallback, _0x4a5052, _0x1641d0);
  const _0x284fbf = [..._0x54b3cc, ..._0x55f5ba];
  const _0x29fa89 = new Set();
  _0x29fa89.add(_0x1641d0);
  let _0x162c21 = ms(_0x29fa89, _0x284fbf, _0x4a5052, _0x3dbbfb || _0x4a5052, _0x1641d0);
  if (_0x162c21 === null || typeof _0x3dbbfb !== "undefined" && _0x3dbbfb !== _0x4a5052 && (_0x162c21 = ms(_0x29fa89, _0x284fbf, _0x3dbbfb, _0x162c21, _0x1641d0), _0x162c21 === null)) {
    return false;
  } else {
    return Ln(Array.from(_0x29fa89), [""], _0x55f5ba, _0x3dbbfb, () => xh(_0x517010, _0x4a5052, _0x1641d0));
  }
}
function ms(_0x3a2959, _0x5eb8d6, _0x5a6f46, _0x15dac4, _0x42d68d) {
  while (_0x5a6f46) {
    _0x5a6f46 = bh(_0x3a2959, _0x5eb8d6, _0x5a6f46, _0x15dac4, _0x42d68d);
  }
  return _0x5a6f46;
}
function xh(_0x4f560f, _0xbb7393, _0x3a1da3) {
  const _0x2d113a = _0x4f560f._getTarget();
  if (!(_0xbb7393 in _0x2d113a)) {
    _0x2d113a[_0xbb7393] = {};
  }
  const _0x2ffd3e = _0x2d113a[_0xbb7393];
  if (B(_0x2ffd3e) && L(_0x3a1da3)) {
    return _0x3a1da3;
  } else {
    return _0x2ffd3e || {};
  }
}
function vh(_0x1d3caf, _0x221306, _0x47bc60, _0x1c95dd) {
  let _0x258b58;
  for (const _0x528aeb of _0x221306) {
    _0x258b58 = Xo(uh(_0x528aeb, _0x1d3caf), _0x47bc60);
    if (typeof _0x258b58 !== "undefined") {
      if (Tn(_0x1d3caf, _0x258b58)) {
        return En(_0x47bc60, _0x1c95dd, _0x1d3caf, _0x258b58);
      } else {
        return _0x258b58;
      }
    }
  }
}
function Xo(_0x380dc2, _0xee7998) {
  for (const _0x4959ba of _0xee7998) {
    if (!_0x4959ba) {
      continue;
    }
    const _0x98c5f = _0x4959ba[_0x380dc2];
    if (typeof _0x98c5f !== "undefined") {
      return _0x98c5f;
    }
  }
}
function _s(_0x4e690c) {
  let _0x29638b = _0x4e690c._keys;
  _0x29638b ||= _0x4e690c._keys = yh(_0x4e690c._scopes);
  return _0x29638b;
}
function yh(_0x28dd1d) {
  const _0x383369 = new Set();
  for (const _0x32ef3c of _0x28dd1d) {
    for (const _0x454e57 of Object.keys(_0x32ef3c).filter(_0x3ec01e => !_0x3ec01e.startsWith("_"))) {
      _0x383369.add(_0x454e57);
    }
  }
  return Array.from(_0x383369);
}
function wh(_0x180d75, _0x23d246, _0x20c3c1, _0x235bf6) {
  const {
    iScale: _0x18968b
  } = _0x180d75;
  const {
    key: _0x4b4c86 = "r"
  } = this._parsing;
  const _0x1b07b9 = new Array(_0x235bf6);
  let _0x50e0fc;
  let _0x26b41b;
  let _0x5ee12d;
  let _0x5125b4;
  _0x50e0fc = 0;
  _0x26b41b = _0x235bf6;
  for (; _0x50e0fc < _0x26b41b; ++_0x50e0fc) {
    _0x5ee12d = _0x50e0fc + _0x20c3c1;
    _0x5125b4 = _0x23d246[_0x5ee12d];
    _0x1b07b9[_0x50e0fc] = {
      r: _0x18968b.parse(Tt(_0x5125b4, _0x4b4c86), _0x5ee12d)
    };
  }
  return _0x1b07b9;
}
function Rn() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function In(_0x5a491d) {
  let _0x4aa270 = _0x5a491d.parentNode;
  if (_0x4aa270 && _0x4aa270.toString() === "[object ShadowRoot]") {
    _0x4aa270 = _0x4aa270.host;
  }
  return _0x4aa270;
}
function vi(_0x40422c, _0x21d175, _0x36f5f5) {
  let _0x186f74;
  if (typeof _0x40422c == "string") {
    _0x186f74 = parseInt(_0x40422c, 10);
    if (_0x40422c.indexOf("%") !== -1) {
      _0x186f74 = _0x186f74 / 100 * _0x21d175.parentNode[_0x36f5f5];
    }
  } else {
    _0x186f74 = _0x40422c;
  }
  return _0x186f74;
}
const Ci = _0x25ad55 => _0x25ad55.ownerDocument.defaultView.getComputedStyle(_0x25ad55, null);
function kh(_0x23af54, _0x176777) {
  return Ci(_0x23af54).getPropertyValue(_0x176777);
}
const $h = ["top", "right", "bottom", "left"];
function Ht(_0x11403d, _0xd8cfb8, _0x966d04) {
  const _0x4fa75d = {};
  _0x966d04 = _0x966d04 ? "-" + _0x966d04 : "";
  for (let _0x2d493a = 0; _0x2d493a < 4; _0x2d493a++) {
    const _0x593c2f = $h[_0x2d493a];
    _0x4fa75d[_0x593c2f] = parseFloat(_0x11403d[_0xd8cfb8 + "-" + _0x593c2f + _0x966d04]) || 0;
  }
  _0x4fa75d.width = _0x4fa75d.left + _0x4fa75d.right;
  _0x4fa75d.height = _0x4fa75d.top + _0x4fa75d.bottom;
  return _0x4fa75d;
}
const Mh = (_0xfed51e, _0x206150, _0xd0b03a) => (_0xfed51e > 0 || _0x206150 > 0) && (!_0xd0b03a || !_0xd0b03a.shadowRoot);
function Sh(_0x51410f, _0x54c28b) {
  const _0x5a655f = _0x51410f.touches;
  const _0x199450 = _0x5a655f && _0x5a655f.length ? _0x5a655f[0] : _0x51410f;
  const {
    offsetX: _0xcec775,
    offsetY: _0x25dda3
  } = _0x199450;
  let _0xa60bbe = false;
  let _0x58a8e1;
  let _0x2d44bb;
  if (Mh(_0xcec775, _0x25dda3, _0x51410f.target)) {
    _0x58a8e1 = _0xcec775;
    _0x2d44bb = _0x25dda3;
  } else {
    const _0x7dff45 = _0x54c28b.getBoundingClientRect();
    _0x58a8e1 = _0x199450.clientX - _0x7dff45.left;
    _0x2d44bb = _0x199450.clientY - _0x7dff45.top;
    _0xa60bbe = true;
  }
  return {
    x: _0x58a8e1,
    y: _0x2d44bb,
    box: _0xa60bbe
  };
}
function Nt(_0x4d36f4, _0xa4b5cb) {
  if ("native" in _0x4d36f4) {
    return _0x4d36f4;
  }
  const {
    canvas: _0x5c1fff,
    currentDevicePixelRatio: _0x303c2e
  } = _0xa4b5cb;
  const _0x395bb5 = Ci(_0x5c1fff);
  const _0x100d4e = _0x395bb5.boxSizing === "border-box";
  const _0x30b8bf = Ht(_0x395bb5, "padding");
  const _0x115ae5 = Ht(_0x395bb5, "border", "width");
  const {
    x: _0x1eea7e,
    y: _0x56a7dc,
    box: _0x44f972
  } = Sh(_0x4d36f4, _0x5c1fff);
  const _0x3403f9 = _0x30b8bf.left + (_0x44f972 && _0x115ae5.left);
  const _0xfd46ff = _0x30b8bf.top + (_0x44f972 && _0x115ae5.top);
  let {
    width: _0x1379de,
    height: _0xf3bc4d
  } = _0xa4b5cb;
  if (_0x100d4e) {
    _0x1379de -= _0x30b8bf.width + _0x115ae5.width;
    _0xf3bc4d -= _0x30b8bf.height + _0x115ae5.height;
  }
  return {
    x: Math.round((_0x1eea7e - _0x3403f9) / _0x1379de * _0x5c1fff.width / _0x303c2e),
    y: Math.round((_0x56a7dc - _0xfd46ff) / _0xf3bc4d * _0x5c1fff.height / _0x303c2e)
  };
}
function Ch(_0x27a0c9, _0x184d58, _0x244782) {
  let _0x5abcac;
  let _0x568450;
  if (_0x184d58 === undefined || _0x244782 === undefined) {
    const _0x16f316 = In(_0x27a0c9);
    if (!_0x16f316) {
      _0x184d58 = _0x27a0c9.clientWidth;
      _0x244782 = _0x27a0c9.clientHeight;
    } else {
      const _0x20cc71 = _0x16f316.getBoundingClientRect();
      const _0x4cd896 = Ci(_0x16f316);
      const _0x532061 = Ht(_0x4cd896, "border", "width");
      const _0x559f35 = Ht(_0x4cd896, "padding");
      _0x184d58 = _0x20cc71.width - _0x559f35.width - _0x532061.width;
      _0x244782 = _0x20cc71.height - _0x559f35.height - _0x532061.height;
      _0x5abcac = vi(_0x4cd896.maxWidth, _0x16f316, "clientWidth");
      _0x568450 = vi(_0x4cd896.maxHeight, _0x16f316, "clientHeight");
    }
  }
  return {
    width: _0x184d58,
    height: _0x244782,
    maxWidth: _0x5abcac || _i,
    maxHeight: _0x568450 || _i
  };
}
const Ge = _0x21a06f => Math.round(_0x21a06f * 10) / 10;
function Ph(_0x163e85, _0x26d7df, _0x32f11c, _0xcf43b9) {
  const _0x333af0 = Ci(_0x163e85);
  const _0x1926f5 = Ht(_0x333af0, "margin");
  const _0x5066dd = vi(_0x333af0.maxWidth, _0x163e85, "clientWidth") || _i;
  const _0x94911d = vi(_0x333af0.maxHeight, _0x163e85, "clientHeight") || _i;
  const _0x2c3d44 = Ch(_0x163e85, _0x26d7df, _0x32f11c);
  let {
    width: _0x291497,
    height: _0x340c67
  } = _0x2c3d44;
  if (_0x333af0.boxSizing === "content-box") {
    const _0x1e72d9 = Ht(_0x333af0, "border", "width");
    const _0x509adb = Ht(_0x333af0, "padding");
    _0x291497 -= _0x509adb.width + _0x1e72d9.width;
    _0x340c67 -= _0x509adb.height + _0x1e72d9.height;
  }
  _0x291497 = Math.max(0, _0x291497 - _0x1926f5.width);
  _0x340c67 = Math.max(0, _0xcf43b9 ? _0x291497 / _0xcf43b9 : _0x340c67 - _0x1926f5.height);
  _0x291497 = Ge(Math.min(_0x291497, _0x5066dd, _0x2c3d44.maxWidth));
  _0x340c67 = Ge(Math.min(_0x340c67, _0x94911d, _0x2c3d44.maxHeight));
  if (_0x291497 && !_0x340c67) {
    _0x340c67 = Ge(_0x291497 / 2);
  }
  if ((_0x26d7df !== undefined || _0x32f11c !== undefined) && _0xcf43b9 && _0x2c3d44.height && _0x340c67 > _0x2c3d44.height) {
    _0x340c67 = _0x2c3d44.height;
    _0x291497 = Ge(Math.floor(_0x340c67 * _0xcf43b9));
  }
  return {
    width: _0x291497,
    height: _0x340c67
  };
}
function bs(_0x5d128f, _0x58eacd, _0x80bc92) {
  const _0x3f73ce = _0x58eacd || 1;
  const _0x4d11b6 = Math.floor(_0x5d128f.height * _0x3f73ce);
  const _0x1f2a40 = Math.floor(_0x5d128f.width * _0x3f73ce);
  _0x5d128f.height = Math.floor(_0x5d128f.height);
  _0x5d128f.width = Math.floor(_0x5d128f.width);
  const _0xfdd4a2 = _0x5d128f.canvas;
  if (_0xfdd4a2.style && (_0x80bc92 || !_0xfdd4a2.style.height && !_0xfdd4a2.style.width)) {
    _0xfdd4a2.style.height = _0x5d128f.height + "px";
    _0xfdd4a2.style.width = _0x5d128f.width + "px";
  }
  if (_0x5d128f.currentDevicePixelRatio !== _0x3f73ce || _0xfdd4a2.height !== _0x4d11b6 || _0xfdd4a2.width !== _0x1f2a40) {
    _0x5d128f.currentDevicePixelRatio = _0x3f73ce;
    _0xfdd4a2.height = _0x4d11b6;
    _0xfdd4a2.width = _0x1f2a40;
    _0x5d128f.ctx.setTransform(_0x3f73ce, 0, 0, _0x3f73ce, 0, 0);
    return true;
  } else {
    return false;
  }
}
const Oh = function () {
  let _0x81a85d = false;
  try {
    const _0x2fc32f = {
      get passive() {
        _0x81a85d = true;
        return false;
      }
    };
    if (Rn()) {
      window.addEventListener("test", null, _0x2fc32f);
      window.removeEventListener("test", null, _0x2fc32f);
    }
  } catch {}
  return _0x81a85d;
}();
function xs(_0x306a52, _0xac0dcf) {
  const _0x3c3502 = kh(_0x306a52, _0xac0dcf);
  const _0x5aa12d = _0x3c3502 && _0x3c3502.match(/^(\d+)(\.\d+)?px$/);
  if (_0x5aa12d) {
    return +_0x5aa12d[1];
  } else {
    return undefined;
  }
}
const Ah = function (_0x5c3106, _0x51f9f2) {
  return {
    x(_0x14a297) {
      return _0x5c3106 + _0x5c3106 + _0x51f9f2 - _0x14a297;
    },
    setWidth(_0xac8618) {
      _0x51f9f2 = _0xac8618;
    },
    textAlign(_0x4c45b3) {
      if (_0x4c45b3 === "center") {
        return _0x4c45b3;
      } else if (_0x4c45b3 === "right") {
        return "left";
      } else {
        return "right";
      }
    },
    xPlus(_0x13d3b2, _0x1ddb8f) {
      return _0x13d3b2 - _0x1ddb8f;
    },
    leftForLtr(_0x29a50c, _0x172e3a) {
      return _0x29a50c - _0x172e3a;
    }
  };
};
const Dh = function () {
  return {
    x(_0x237029) {
      return _0x237029;
    },
    setWidth(_0x1ef636) {},
    textAlign(_0x586361) {
      return _0x586361;
    },
    xPlus(_0x2f2915, _0x1e44b1) {
      return _0x2f2915 + _0x1e44b1;
    },
    leftForLtr(_0x260a05, _0x1806e6) {
      return _0x260a05;
    }
  };
};
function Yi(_0x881c57, _0x5b490c, _0x195bb2) {
  if (_0x881c57) {
    return Ah(_0x5b490c, _0x195bb2);
  } else {
    return Dh();
  }
}
function Lh(_0x1f15ce, _0x89502c) {
  let _0x153da0;
  let _0x1a61e9;
  if (_0x89502c === "ltr" || _0x89502c === "rtl") {
    _0x153da0 = _0x1f15ce.canvas.style;
    _0x1a61e9 = [_0x153da0.getPropertyValue("direction"), _0x153da0.getPropertyPriority("direction")];
    _0x153da0.setProperty("direction", _0x89502c, "important");
    _0x1f15ce.prevTextDirection = _0x1a61e9;
  }
}
function Th(_0x40adef, _0x56a7c3) {
  if (_0x56a7c3 !== undefined) {
    delete _0x40adef.prevTextDirection;
    _0x40adef.canvas.style.setProperty("direction", _0x56a7c3[0], _0x56a7c3[1]);
  }
}
class Eh {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _notify(_0x5012d8, _0x1ac8f1, _0x43cd5b, _0xf7af4d) {
    const _0x522a8e = _0x1ac8f1.listeners[_0xf7af4d];
    const _0x5055eb = _0x1ac8f1.duration;
    _0x522a8e.forEach(_0x4d359f => _0x4d359f({
      chart: _0x5012d8,
      initial: _0x1ac8f1.initial,
      numSteps: _0x5055eb,
      currentStep: Math.min(_0x43cd5b - _0x1ac8f1.start, _0x5055eb)
    }));
  }
  _refresh() {
    if (!this._request) {
      this._running = true;
      this._request = jo.call(window, () => {
        this._update();
        this._request = null;
        if (this._running) {
          this._refresh();
        }
      });
    }
  }
  _update(_0x1a6817 = Date.now()) {
    let _0x26c329 = 0;
    this._charts.forEach((_0x41bcb3, _0x1ee634) => {
      if (!_0x41bcb3.running || !_0x41bcb3.items.length) {
        return;
      }
      const _0x1c931b = _0x41bcb3.items;
      let _0x170013 = _0x1c931b.length - 1;
      let _0x4fc3ce = false;
      let _0x3fec4f;
      for (; _0x170013 >= 0; --_0x170013) {
        _0x3fec4f = _0x1c931b[_0x170013];
        if (_0x3fec4f._active) {
          if (_0x3fec4f._total > _0x41bcb3.duration) {
            _0x41bcb3.duration = _0x3fec4f._total;
          }
          _0x3fec4f.tick(_0x1a6817);
          _0x4fc3ce = true;
        } else {
          _0x1c931b[_0x170013] = _0x1c931b[_0x1c931b.length - 1];
          _0x1c931b.pop();
        }
      }
      if (_0x4fc3ce) {
        _0x1ee634.draw();
        this._notify(_0x1ee634, _0x41bcb3, _0x1a6817, "progress");
      }
      if (!_0x1c931b.length) {
        _0x41bcb3.running = false;
        this._notify(_0x1ee634, _0x41bcb3, _0x1a6817, "complete");
        _0x41bcb3.initial = false;
      }
      _0x26c329 += _0x1c931b.length;
    });
    this._lastDate = _0x1a6817;
    if (_0x26c329 === 0) {
      this._running = false;
    }
  }
  _getAnims(_0x110763) {
    const _0x1563cf = this._charts;
    let _0x35ae71 = _0x1563cf.get(_0x110763);
    if (!_0x35ae71) {
      _0x35ae71 = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      _0x1563cf.set(_0x110763, _0x35ae71);
    }
    return _0x35ae71;
  }
  listen(_0x36463e, _0xf22c57, _0x49ef9d) {
    this._getAnims(_0x36463e).listeners[_0xf22c57].push(_0x49ef9d);
  }
  add(_0x3d1696, _0xfa5d33) {
    if (!!_0xfa5d33 && !!_0xfa5d33.length) {
      this._getAnims(_0x3d1696).items.push(..._0xfa5d33);
    }
  }
  has(_0x28c944) {
    return this._getAnims(_0x28c944).items.length > 0;
  }
  start(_0x11bab7) {
    const _0x10eee1 = this._charts.get(_0x11bab7);
    if (_0x10eee1) {
      _0x10eee1.running = true;
      _0x10eee1.start = Date.now();
      _0x10eee1.duration = _0x10eee1.items.reduce((_0x47af52, _0x1eb222) => Math.max(_0x47af52, _0x1eb222._duration), 0);
      this._refresh();
    }
  }
  running(_0x5a4304) {
    if (!this._running) {
      return false;
    }
    const _0x37705c = this._charts.get(_0x5a4304);
    return !!_0x37705c && !!_0x37705c.running && !!_0x37705c.items.length;
  }
  stop(_0x46ea85) {
    const _0x475e7b = this._charts.get(_0x46ea85);
    if (!_0x475e7b || !_0x475e7b.items.length) {
      return;
    }
    const _0x48c8e8 = _0x475e7b.items;
    let _0x198eb8 = _0x48c8e8.length - 1;
    for (; _0x198eb8 >= 0; --_0x198eb8) {
      _0x48c8e8[_0x198eb8].cancel();
    }
    _0x475e7b.items = [];
    this._notify(_0x46ea85, _0x475e7b, Date.now(), "complete");
  }
  remove(_0x2e1e50) {
    return this._charts.delete(_0x2e1e50);
  }
}
var xt = new Eh();
const vs = "transparent";
const Rh = {
  boolean(_0x1c14ae, _0x49101c, _0x57a0c8) {
    if (_0x57a0c8 > 0.5) {
      return _0x49101c;
    } else {
      return _0x1c14ae;
    }
  },
  color(_0x49e36f, _0x4241e7, _0x182e3e) {
    const _0x4beccb = us(_0x49e36f || vs);
    const _0x57a971 = _0x4beccb.valid && us(_0x4241e7 || vs);
    if (_0x57a971 && _0x57a971.valid) {
      return _0x57a971.mix(_0x4beccb, _0x182e3e).hexString();
    } else {
      return _0x4241e7;
    }
  },
  number(_0x26cc15, _0x525342, _0x5a49b7) {
    return _0x26cc15 + (_0x525342 - _0x26cc15) * _0x5a49b7;
  }
};
class Ih {
  constructor(_0x360113, _0x2a26cd, _0x3936e8, _0x26b15c) {
    const _0x335f7b = _0x2a26cd[_0x3936e8];
    _0x26b15c = Xe([_0x360113.to, _0x26b15c, _0x335f7b, _0x360113.from]);
    const _0x57e6f0 = Xe([_0x360113.from, _0x335f7b, _0x26b15c]);
    this._active = true;
    this._fn = _0x360113.fn || Rh[_0x360113.type || typeof _0x57e6f0];
    this._easing = ye[_0x360113.easing] || ye.linear;
    this._start = Math.floor(Date.now() + (_0x360113.delay || 0));
    this._duration = this._total = Math.floor(_0x360113.duration);
    this._loop = !!_0x360113.loop;
    this._target = _0x2a26cd;
    this._prop = _0x3936e8;
    this._from = _0x57e6f0;
    this._to = _0x26b15c;
    this._promises = undefined;
  }
  active() {
    return this._active;
  }
  update(_0x36746e, _0x3d097b, _0x3e5191) {
    if (this._active) {
      this._notify(false);
      const _0x19a3db = this._target[this._prop];
      const _0x619661 = _0x3e5191 - this._start;
      const _0x533607 = this._duration - _0x619661;
      this._start = _0x3e5191;
      this._duration = Math.floor(Math.max(_0x533607, _0x36746e.duration));
      this._total += _0x619661;
      this._loop = !!_0x36746e.loop;
      this._to = Xe([_0x36746e.to, _0x3d097b, _0x19a3db, _0x36746e.from]);
      this._from = Xe([_0x36746e.from, _0x19a3db, _0x3d097b]);
    }
  }
  cancel() {
    if (this._active) {
      this.tick(Date.now());
      this._active = false;
      this._notify(false);
    }
  }
  tick(_0x1b7f80) {
    const _0xfd0511 = _0x1b7f80 - this._start;
    const _0x4cdd12 = this._duration;
    const _0x3c1aaa = this._prop;
    const _0x4a8636 = this._from;
    const _0x3a52ce = this._loop;
    const _0x58057a = this._to;
    let _0xbc09cd;
    this._active = _0x4a8636 !== _0x58057a && (_0x3a52ce || _0xfd0511 < _0x4cdd12);
    if (!this._active) {
      this._target[_0x3c1aaa] = _0x58057a;
      this._notify(true);
      return;
    }
    if (_0xfd0511 < 0) {
      this._target[_0x3c1aaa] = _0x4a8636;
      return;
    }
    _0xbc09cd = _0xfd0511 / _0x4cdd12 % 2;
    _0xbc09cd = _0x3a52ce && _0xbc09cd > 1 ? 2 - _0xbc09cd : _0xbc09cd;
    _0xbc09cd = this._easing(Math.min(1, Math.max(0, _0xbc09cd)));
    this._target[_0x3c1aaa] = this._fn(_0x4a8636, _0x58057a, _0xbc09cd);
  }
  wait() {
    const _0x2040c1 = this._promises ||= [];
    return new Promise((_0x4699c0, _0xd6d1e8) => {
      _0x2040c1.push({
        res: _0x4699c0,
        rej: _0xd6d1e8
      });
    });
  }
  _notify(_0x1adb8d) {
    const _0x6ff8ed = _0x1adb8d ? "res" : "rej";
    const _0x1ef053 = this._promises || [];
    for (let _0xa79535 = 0; _0xa79535 < _0x1ef053.length; _0xa79535++) {
      _0x1ef053[_0xa79535][_0x6ff8ed]();
    }
  }
}
class Fh {
  constructor(_0x54e646, _0x7b4821) {
    this._chart = _0x54e646;
    this._properties = new Map();
    this.configure(_0x7b4821);
  }
  configure(_0x541957) {
    if (!L(_0x541957)) {
      return;
    }
    const _0x275f84 = Object.keys(N.animation);
    const _0x3f1d37 = this._properties;
    Object.getOwnPropertyNames(_0x541957).forEach(_0x479e93 => {
      const _0x5a3e48 = _0x541957[_0x479e93];
      if (!L(_0x5a3e48)) {
        return;
      }
      const _0x458755 = {};
      for (const _0x1d3162 of _0x275f84) {
        _0x458755[_0x1d3162] = _0x5a3e48[_0x1d3162];
      }
      (B(_0x5a3e48.properties) && _0x5a3e48.properties || [_0x479e93]).forEach(_0x1d2ca4 => {
        if (_0x1d2ca4 === _0x479e93 || !_0x3f1d37.has(_0x1d2ca4)) {
          _0x3f1d37.set(_0x1d2ca4, _0x458755);
        }
      });
    });
  }
  _animateOptions(_0x116ed4, _0x30f8e4) {
    const _0x5d7de3 = _0x30f8e4.options;
    const _0x731ba5 = Bh(_0x116ed4, _0x5d7de3);
    if (!_0x731ba5) {
      return [];
    }
    const _0x12fc48 = this._createAnimations(_0x731ba5, _0x5d7de3);
    if (_0x5d7de3.$shared) {
      zh(_0x116ed4.options.$animations, _0x5d7de3).then(() => {
        _0x116ed4.options = _0x5d7de3;
      }, () => {});
    }
    return _0x12fc48;
  }
  _createAnimations(_0x2bc9fb, _0x9fc73b) {
    const _0x386003 = this._properties;
    const _0x359dba = [];
    const _0x2225f0 = _0x2bc9fb.$animations ||= {};
    const _0xcf7c69 = Object.keys(_0x9fc73b);
    const _0x2ab23c = Date.now();
    let _0x22c6b8;
    for (_0x22c6b8 = _0xcf7c69.length - 1; _0x22c6b8 >= 0; --_0x22c6b8) {
      const _0x31fe18 = _0xcf7c69[_0x22c6b8];
      if (_0x31fe18.charAt(0) === "$") {
        continue;
      }
      if (_0x31fe18 === "options") {
        _0x359dba.push(...this._animateOptions(_0x2bc9fb, _0x9fc73b));
        continue;
      }
      const _0x45d7a3 = _0x9fc73b[_0x31fe18];
      let _0x14a7af = _0x2225f0[_0x31fe18];
      const _0x3cd97c = _0x386003.get(_0x31fe18);
      if (_0x14a7af) {
        if (_0x3cd97c && _0x14a7af.active()) {
          _0x14a7af.update(_0x3cd97c, _0x45d7a3, _0x2ab23c);
          continue;
        } else {
          _0x14a7af.cancel();
        }
      }
      if (!_0x3cd97c || !_0x3cd97c.duration) {
        _0x2bc9fb[_0x31fe18] = _0x45d7a3;
        continue;
      }
      _0x2225f0[_0x31fe18] = _0x14a7af = new Ih(_0x3cd97c, _0x2bc9fb, _0x31fe18, _0x45d7a3);
      _0x359dba.push(_0x14a7af);
    }
    return _0x359dba;
  }
  update(_0x121fe3, _0xcce291) {
    if (this._properties.size === 0) {
      Object.assign(_0x121fe3, _0xcce291);
      return;
    }
    const _0x22fbda = this._createAnimations(_0x121fe3, _0xcce291);
    if (_0x22fbda.length) {
      xt.add(this._chart, _0x22fbda);
      return true;
    }
  }
}
function zh(_0x52347a, _0x49c40d) {
  const _0x4e0f61 = [];
  const _0x2cac8d = Object.keys(_0x49c40d);
  for (let _0x1e11ae = 0; _0x1e11ae < _0x2cac8d.length; _0x1e11ae++) {
    const _0x375e06 = _0x52347a[_0x2cac8d[_0x1e11ae]];
    if (_0x375e06 && _0x375e06.active()) {
      _0x4e0f61.push(_0x375e06.wait());
    }
  }
  return Promise.all(_0x4e0f61);
}
function Bh(_0x119920, _0x436b86) {
  if (!_0x436b86) {
    return;
  }
  let _0x1c0584 = _0x119920.options;
  if (!_0x1c0584) {
    _0x119920.options = _0x436b86;
    return;
  }
  if (_0x1c0584.$shared) {
    _0x119920.options = _0x1c0584 = Object.assign({}, _0x1c0584, {
      $shared: false,
      $animations: {}
    });
  }
  return _0x1c0584;
}
function ys(_0x2987ad, _0x313664) {
  const _0x2b698d = _0x2987ad && _0x2987ad.options || {};
  const _0x15ff1c = _0x2b698d.reverse;
  const _0x82541b = _0x2b698d.min === undefined ? _0x313664 : 0;
  const _0x1f06f3 = _0x2b698d.max === undefined ? _0x313664 : 0;
  return {
    start: _0x15ff1c ? _0x1f06f3 : _0x82541b,
    end: _0x15ff1c ? _0x82541b : _0x1f06f3
  };
}
function jh(_0x3dd5dd, _0x25aa8d, _0x424cac) {
  if (_0x424cac === false) {
    return false;
  }
  const _0x30891e = ys(_0x3dd5dd, _0x424cac);
  const _0x1f8ea8 = ys(_0x25aa8d, _0x424cac);
  return {
    top: _0x1f8ea8.end,
    right: _0x30891e.end,
    bottom: _0x1f8ea8.start,
    left: _0x30891e.start
  };
}
function Nh(_0x221709) {
  let _0x3e1248;
  let _0x6a2426;
  let _0xfd39c7;
  let _0x479266;
  if (L(_0x221709)) {
    _0x3e1248 = _0x221709.top;
    _0x6a2426 = _0x221709.right;
    _0xfd39c7 = _0x221709.bottom;
    _0x479266 = _0x221709.left;
  } else {
    _0x3e1248 = _0x6a2426 = _0xfd39c7 = _0x479266 = _0x221709;
  }
  return {
    top: _0x3e1248,
    right: _0x6a2426,
    bottom: _0xfd39c7,
    left: _0x479266,
    disabled: _0x221709 === false
  };
}
function Go(_0xd4b042, _0x1884eb) {
  const _0x539a89 = [];
  const _0xcaec73 = _0xd4b042._getSortedDatasetMetas(_0x1884eb);
  let _0xef055c;
  let _0x19a229;
  _0xef055c = 0;
  _0x19a229 = _0xcaec73.length;
  for (; _0xef055c < _0x19a229; ++_0xef055c) {
    _0x539a89.push(_0xcaec73[_0xef055c].index);
  }
  return _0x539a89;
}
function ws(_0x54661b, _0x2fb56c, _0x3029c6, _0x5aa1a1 = {}) {
  const _0x2e764f = _0x54661b.keys;
  const _0xfd3bdc = _0x5aa1a1.mode === "single";
  let _0x3204c6;
  let _0x30c58f;
  let _0x96597c;
  let _0xb09d6e;
  if (_0x2fb56c !== null) {
    _0x3204c6 = 0;
    _0x30c58f = _0x2e764f.length;
    for (; _0x3204c6 < _0x30c58f; ++_0x3204c6) {
      _0x96597c = +_0x2e764f[_0x3204c6];
      if (_0x96597c === _0x3029c6) {
        if (_0x5aa1a1.all) {
          continue;
        }
        break;
      }
      _0xb09d6e = _0x54661b.values[_0x96597c];
      if (U(_0xb09d6e) && (_0xfd3bdc || _0x2fb56c === 0 || Lt(_0x2fb56c) === Lt(_0xb09d6e))) {
        _0x2fb56c += _0xb09d6e;
      }
    }
    return _0x2fb56c;
  }
}
function Hh(_0x77248) {
  const _0xf6146e = Object.keys(_0x77248);
  const _0x18783f = new Array(_0xf6146e.length);
  let _0x59fef4;
  let _0x2b1d37;
  let _0x35f23c;
  _0x59fef4 = 0;
  _0x2b1d37 = _0xf6146e.length;
  for (; _0x59fef4 < _0x2b1d37; ++_0x59fef4) {
    _0x35f23c = _0xf6146e[_0x59fef4];
    _0x18783f[_0x59fef4] = {
      x: _0x35f23c,
      y: _0x77248[_0x35f23c]
    };
  }
  return _0x18783f;
}
function ks(_0x337724, _0x1ae7e8) {
  const _0x25652d = _0x337724 && _0x337724.options.stacked;
  return _0x25652d || _0x25652d === undefined && _0x1ae7e8.stack !== undefined;
}
function Wh(_0x3e05b5, _0x51ccf7, _0x713640) {
  return _0x3e05b5.id + "." + _0x51ccf7.id + "." + (_0x713640.stack || _0x713640.type);
}
function Vh(_0x4dd06e) {
  const {
    min: _0x4aecd6,
    max: _0x32a875,
    minDefined: _0xb528f7,
    maxDefined: _0x4a4fd1
  } = _0x4dd06e.getUserBounds();
  return {
    min: _0xb528f7 ? _0x4aecd6 : Number.NEGATIVE_INFINITY,
    max: _0x4a4fd1 ? _0x32a875 : Number.POSITIVE_INFINITY
  };
}
function Uh(_0x73b05, _0x531a6c, _0x3ab176) {
  const _0x35c120 = _0x73b05[_0x531a6c] ||= {};
  return _0x35c120[_0x3ab176] ||= {};
}
function $s(_0x3bcc68, _0x307cc0, _0x74d6a4, _0x1a3f74) {
  for (const _0x149f3f of _0x307cc0.getMatchingVisibleMetas(_0x1a3f74).reverse()) {
    const _0x597fdb = _0x3bcc68[_0x149f3f.index];
    if (_0x74d6a4 && _0x597fdb > 0 || !_0x74d6a4 && _0x597fdb < 0) {
      return _0x149f3f.index;
    }
  }
  return null;
}
function Ms(_0xb1481c, _0x1236db) {
  const {
    chart: _0x2771d2,
    _cachedMeta: _0x3e7791
  } = _0xb1481c;
  const _0xe33ee0 = _0x2771d2._stacks ||= {};
  const {
    iScale: _0x26abc5,
    vScale: _0x16f1f7,
    index: _0x47aeae
  } = _0x3e7791;
  const _0x414f18 = _0x26abc5.axis;
  const _0x35b490 = _0x16f1f7.axis;
  const _0x30956a = Wh(_0x26abc5, _0x16f1f7, _0x3e7791);
  const _0x4a1e2e = _0x1236db.length;
  let _0x1b2526;
  for (let _0x2508fd = 0; _0x2508fd < _0x4a1e2e; ++_0x2508fd) {
    const _0x273692 = _0x1236db[_0x2508fd];
    const {
      [_0x414f18]: _0x545042,
      [_0x35b490]: _0x4f55a0
    } = _0x273692;
    const _0x33a3ff = _0x273692._stacks ||= {};
    _0x1b2526 = _0x33a3ff[_0x35b490] = Uh(_0xe33ee0, _0x30956a, _0x545042);
    _0x1b2526[_0x47aeae] = _0x4f55a0;
    _0x1b2526._top = $s(_0x1b2526, _0x16f1f7, true, _0x3e7791.type);
    _0x1b2526._bottom = $s(_0x1b2526, _0x16f1f7, false, _0x3e7791.type);
    const _0x3a2872 = _0x1b2526._visualValues ||= {};
    _0x3a2872[_0x47aeae] = _0x4f55a0;
  }
}
function Ki(_0x42f56e, _0x101d41) {
  const _0x5afe0e = _0x42f56e.scales;
  return Object.keys(_0x5afe0e).filter(_0x1f386e => _0x5afe0e[_0x1f386e].axis === _0x101d41).shift();
}
function Yh(_0xdb96cb, _0x118e5d) {
  return oe(_0xdb96cb, {
    active: false,
    dataset: undefined,
    datasetIndex: _0x118e5d,
    index: _0x118e5d,
    mode: "default",
    type: "dataset"
  });
}
function Kh(_0x5d274c, _0x2030d6, _0x1aed83) {
  return oe(_0x5d274c, {
    active: false,
    dataIndex: _0x2030d6,
    parsed: undefined,
    raw: undefined,
    element: _0x1aed83,
    index: _0x2030d6,
    mode: "default",
    type: "data"
  });
}
function he(_0x41f0c9, _0x17162e) {
  const _0x358540 = _0x41f0c9.controller.index;
  const _0x23864e = _0x41f0c9.vScale && _0x41f0c9.vScale.axis;
  if (_0x23864e) {
    _0x17162e = _0x17162e || _0x41f0c9._parsed;
    for (const _0x5e40f5 of _0x17162e) {
      const _0x3bdca2 = _0x5e40f5._stacks;
      if (!_0x3bdca2 || _0x3bdca2[_0x23864e] === undefined || _0x3bdca2[_0x23864e][_0x358540] === undefined) {
        return;
      }
      delete _0x3bdca2[_0x23864e][_0x358540];
      if (_0x3bdca2[_0x23864e]._visualValues !== undefined && _0x3bdca2[_0x23864e]._visualValues[_0x358540] !== undefined) {
        delete _0x3bdca2[_0x23864e]._visualValues[_0x358540];
      }
    }
  }
}
const qi = _0x5c1d64 => _0x5c1d64 === "reset" || _0x5c1d64 === "none";
const Ss = (_0x2814a4, _0x5ea9bf) => _0x5ea9bf ? _0x2814a4 : Object.assign({}, _0x2814a4);
const qh = (_0x46f05d, _0x236a81, _0x2bf35b) => _0x46f05d && !_0x236a81.hidden && _0x236a81._stacked && {
  keys: Go(_0x2bf35b, true),
  values: null
};
class Pi {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(_0x10371d, _0x1cd827) {
    this.chart = _0x10371d;
    this._ctx = _0x10371d.ctx;
    this.index = _0x1cd827;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.supportsDecimation = false;
    this.$context = undefined;
    this._syncList = [];
    this.datasetElementType = new.target.datasetElementType;
    this.dataElementType = new.target.dataElementType;
    this.initialize();
  }
  initialize() {
    const _0x103f64 = this._cachedMeta;
    this.configure();
    this.linkScales();
    _0x103f64._stacked = ks(_0x103f64.vScale, _0x103f64);
    this.addElements();
    if (this.options.fill && !this.chart.isPluginEnabled("filler")) {
      console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
  }
  updateIndex(_0x4815eb) {
    if (this.index !== _0x4815eb) {
      he(this._cachedMeta);
    }
    this.index = _0x4815eb;
  }
  linkScales() {
    const _0x10c58d = this.chart;
    const _0x3cfcd4 = this._cachedMeta;
    const _0x61aec4 = this.getDataset();
    const _0x4d7dc7 = (_0x140f85, _0x38b75e, _0x27d688, _0x147eae) => _0x140f85 === "x" ? _0x38b75e : _0x140f85 === "r" ? _0x147eae : _0x27d688;
    const _0x32eafc = _0x3cfcd4.xAxisID = T(_0x61aec4.xAxisID, Ki(_0x10c58d, "x"));
    const _0x3abdc2 = _0x3cfcd4.yAxisID = T(_0x61aec4.yAxisID, Ki(_0x10c58d, "y"));
    const _0x769532 = _0x3cfcd4.rAxisID = T(_0x61aec4.rAxisID, Ki(_0x10c58d, "r"));
    const _0x29d5ca = _0x3cfcd4.indexAxis;
    const _0x1e37d4 = _0x3cfcd4.iAxisID = _0x4d7dc7(_0x29d5ca, _0x32eafc, _0x3abdc2, _0x769532);
    const _0x1fd3ac = _0x3cfcd4.vAxisID = _0x4d7dc7(_0x29d5ca, _0x3abdc2, _0x32eafc, _0x769532);
    _0x3cfcd4.xScale = this.getScaleForId(_0x32eafc);
    _0x3cfcd4.yScale = this.getScaleForId(_0x3abdc2);
    _0x3cfcd4.rScale = this.getScaleForId(_0x769532);
    _0x3cfcd4.iScale = this.getScaleForId(_0x1e37d4);
    _0x3cfcd4.vScale = this.getScaleForId(_0x1fd3ac);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(_0x11f8c5) {
    return this.chart.scales[_0x11f8c5];
  }
  _getOtherScale(_0x401158) {
    const _0x1f2cb = this._cachedMeta;
    if (_0x401158 === _0x1f2cb.iScale) {
      return _0x1f2cb.vScale;
    } else {
      return _0x1f2cb.iScale;
    }
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const _0x396ee3 = this._cachedMeta;
    if (this._data) {
      hs(this._data, this);
    }
    if (_0x396ee3._stacked) {
      he(_0x396ee3);
    }
  }
  _dataCheck() {
    const _0x5d01e3 = this.getDataset();
    const _0x48ae33 = _0x5d01e3.data ||= [];
    const _0x1cdb79 = this._data;
    if (L(_0x48ae33)) {
      this._data = Hh(_0x48ae33);
    } else if (_0x1cdb79 !== _0x48ae33) {
      if (_0x1cdb79) {
        hs(_0x1cdb79, this);
        const _0x2cb9ff = this._cachedMeta;
        he(_0x2cb9ff);
        _0x2cb9ff._parsed = [];
      }
      if (_0x48ae33 && Object.isExtensible(_0x48ae33)) {
        Uc(_0x48ae33, this);
      }
      this._syncList = [];
      this._data = _0x48ae33;
    }
  }
  addElements() {
    const _0x3b32c9 = this._cachedMeta;
    this._dataCheck();
    if (this.datasetElementType) {
      _0x3b32c9.dataset = new this.datasetElementType();
    }
  }
  buildOrUpdateElements(_0x42e333) {
    const _0x4fd179 = this._cachedMeta;
    const _0x4af7ad = this.getDataset();
    let _0x25ff66 = false;
    this._dataCheck();
    const _0x311853 = _0x4fd179._stacked;
    _0x4fd179._stacked = ks(_0x4fd179.vScale, _0x4fd179);
    if (_0x4fd179.stack !== _0x4af7ad.stack) {
      _0x25ff66 = true;
      he(_0x4fd179);
      _0x4fd179.stack = _0x4af7ad.stack;
    }
    this._resyncElements(_0x42e333);
    if (_0x25ff66 || _0x311853 !== _0x4fd179._stacked) {
      Ms(this, _0x4fd179._parsed);
    }
  }
  configure() {
    const _0x2bf618 = this.chart.config;
    const _0x4ee184 = _0x2bf618.datasetScopeKeys(this._type);
    const _0x1889c8 = _0x2bf618.getOptionScopes(this.getDataset(), _0x4ee184, true);
    this.options = _0x2bf618.createResolver(_0x1889c8, this.getContext());
    this._parsing = this.options.parsing;
    this._cachedDataOpts = {};
  }
  parse(_0x1deb57, _0x31e66d) {
    const {
      _cachedMeta: _0x546cb3,
      _data: _0x1e8017
    } = this;
    const {
      iScale: _0x5c3c1a,
      _stacked: _0x5775ab
    } = _0x546cb3;
    const _0x54d953 = _0x5c3c1a.axis;
    let _0x52074d = _0x1deb57 === 0 && _0x31e66d === _0x1e8017.length ? true : _0x546cb3._sorted;
    let _0x567fc2 = _0x1deb57 > 0 && _0x546cb3._parsed[_0x1deb57 - 1];
    let _0x3129c3;
    let _0x2a9b2c;
    let _0x565e03;
    if (this._parsing === false) {
      _0x546cb3._parsed = _0x1e8017;
      _0x546cb3._sorted = true;
      _0x565e03 = _0x1e8017;
    } else {
      if (B(_0x1e8017[_0x1deb57])) {
        _0x565e03 = this.parseArrayData(_0x546cb3, _0x1e8017, _0x1deb57, _0x31e66d);
      } else if (L(_0x1e8017[_0x1deb57])) {
        _0x565e03 = this.parseObjectData(_0x546cb3, _0x1e8017, _0x1deb57, _0x31e66d);
      } else {
        _0x565e03 = this.parsePrimitiveData(_0x546cb3, _0x1e8017, _0x1deb57, _0x31e66d);
      }
      const _0x16fca0 = () => _0x2a9b2c[_0x54d953] === null || _0x567fc2 && _0x2a9b2c[_0x54d953] < _0x567fc2[_0x54d953];
      for (_0x3129c3 = 0; _0x3129c3 < _0x31e66d; ++_0x3129c3) {
        _0x546cb3._parsed[_0x3129c3 + _0x1deb57] = _0x2a9b2c = _0x565e03[_0x3129c3];
        if (_0x52074d) {
          if (_0x16fca0()) {
            _0x52074d = false;
          }
          _0x567fc2 = _0x2a9b2c;
        }
      }
      _0x546cb3._sorted = _0x52074d;
    }
    if (_0x5775ab) {
      Ms(this, _0x565e03);
    }
  }
  parsePrimitiveData(_0xab28a1, _0x2aab8f, _0x58132d, _0x4a96f0) {
    const {
      iScale: _0x35b00e,
      vScale: _0xf80ad9
    } = _0xab28a1;
    const _0xe059e1 = _0x35b00e.axis;
    const _0x1a2a87 = _0xf80ad9.axis;
    const _0x5a30ed = _0x35b00e.getLabels();
    const _0x4bdeb3 = _0x35b00e === _0xf80ad9;
    const _0x5a86d2 = new Array(_0x4a96f0);
    let _0x5258d7;
    let _0x1e854d;
    let _0x23e852;
    _0x5258d7 = 0;
    _0x1e854d = _0x4a96f0;
    for (; _0x5258d7 < _0x1e854d; ++_0x5258d7) {
      _0x23e852 = _0x5258d7 + _0x58132d;
      _0x5a86d2[_0x5258d7] = {
        [_0xe059e1]: _0x4bdeb3 || _0x35b00e.parse(_0x5a30ed[_0x23e852], _0x23e852),
        [_0x1a2a87]: _0xf80ad9.parse(_0x2aab8f[_0x23e852], _0x23e852)
      };
    }
    return _0x5a86d2;
  }
  parseArrayData(_0x4b6b77, _0x88f92a, _0x282be6, _0x5bfbb7) {
    const {
      xScale: _0x26113b,
      yScale: _0x1865da
    } = _0x4b6b77;
    const _0x1bf170 = new Array(_0x5bfbb7);
    let _0x5a5c5f;
    let _0x5b44fb;
    let _0x19385b;
    let _0x389f95;
    _0x5a5c5f = 0;
    _0x5b44fb = _0x5bfbb7;
    for (; _0x5a5c5f < _0x5b44fb; ++_0x5a5c5f) {
      _0x19385b = _0x5a5c5f + _0x282be6;
      _0x389f95 = _0x88f92a[_0x19385b];
      _0x1bf170[_0x5a5c5f] = {
        x: _0x26113b.parse(_0x389f95[0], _0x19385b),
        y: _0x1865da.parse(_0x389f95[1], _0x19385b)
      };
    }
    return _0x1bf170;
  }
  parseObjectData(_0x49784e, _0x3f4c62, _0x22dfcf, _0x5bba78) {
    const {
      xScale: _0xf21f47,
      yScale: _0x58c5c0
    } = _0x49784e;
    const {
      xAxisKey: _0xcc33f0 = "x",
      yAxisKey: _0x31cb4b = "y"
    } = this._parsing;
    const _0x32e5b3 = new Array(_0x5bba78);
    let _0x1c3504;
    let _0x5d4bc7;
    let _0x3bc41a;
    let _0x264e80;
    _0x1c3504 = 0;
    _0x5d4bc7 = _0x5bba78;
    for (; _0x1c3504 < _0x5d4bc7; ++_0x1c3504) {
      _0x3bc41a = _0x1c3504 + _0x22dfcf;
      _0x264e80 = _0x3f4c62[_0x3bc41a];
      _0x32e5b3[_0x1c3504] = {
        x: _0xf21f47.parse(Tt(_0x264e80, _0xcc33f0), _0x3bc41a),
        y: _0x58c5c0.parse(Tt(_0x264e80, _0x31cb4b), _0x3bc41a)
      };
    }
    return _0x32e5b3;
  }
  getParsed(_0x6b3b50) {
    return this._cachedMeta._parsed[_0x6b3b50];
  }
  getDataElement(_0xfeeaa1) {
    return this._cachedMeta.data[_0xfeeaa1];
  }
  applyStack(_0x11b018, _0x5d6d28, _0x519f4f) {
    const _0x77134a = this.chart;
    const _0x179664 = this._cachedMeta;
    const _0x158277 = _0x5d6d28[_0x11b018.axis];
    const _0x56045c = {
      keys: Go(_0x77134a, true),
      values: _0x5d6d28._stacks[_0x11b018.axis]._visualValues
    };
    return ws(_0x56045c, _0x158277, _0x179664.index, {
      mode: _0x519f4f
    });
  }
  updateRangeFromParsed(_0xeb273e, _0x48d048, _0x315ae9, _0x4b70fb) {
    const _0x22dd3a = _0x315ae9[_0x48d048.axis];
    let _0x8dedc = _0x22dd3a === null ? NaN : _0x22dd3a;
    const _0x1e8d1b = _0x4b70fb && _0x315ae9._stacks[_0x48d048.axis];
    if (_0x4b70fb && _0x1e8d1b) {
      _0x4b70fb.values = _0x1e8d1b;
      _0x8dedc = ws(_0x4b70fb, _0x22dd3a, this._cachedMeta.index);
    }
    _0xeb273e.min = Math.min(_0xeb273e.min, _0x8dedc);
    _0xeb273e.max = Math.max(_0xeb273e.max, _0x8dedc);
  }
  getMinMax(_0x27f37b, _0x3ca959) {
    const _0x21e6a0 = this._cachedMeta;
    const _0x24d5a2 = _0x21e6a0._parsed;
    const _0x4a2dc9 = _0x21e6a0._sorted && _0x27f37b === _0x21e6a0.iScale;
    const _0x79ce4d = _0x24d5a2.length;
    const _0x1ac3a5 = this._getOtherScale(_0x27f37b);
    const _0x5083fc = qh(_0x3ca959, _0x21e6a0, this.chart);
    const _0x20b8ff = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    const {
      min: _0x944c9a,
      max: _0x4d306d
    } = Vh(_0x1ac3a5);
    let _0x506c00;
    let _0x3f09e3;
    function _0x2ebce2() {
      _0x3f09e3 = _0x24d5a2[_0x506c00];
      const _0x2fe012 = _0x3f09e3[_0x1ac3a5.axis];
      return !U(_0x3f09e3[_0x27f37b.axis]) || _0x944c9a > _0x2fe012 || _0x4d306d < _0x2fe012;
    }
    for (_0x506c00 = 0; _0x506c00 < _0x79ce4d && (!!_0x2ebce2() || !(this.updateRangeFromParsed(_0x20b8ff, _0x27f37b, _0x3f09e3, _0x5083fc), _0x4a2dc9)); ++_0x506c00);
    if (_0x4a2dc9) {
      for (_0x506c00 = _0x79ce4d - 1; _0x506c00 >= 0; --_0x506c00) {
        if (!_0x2ebce2()) {
          this.updateRangeFromParsed(_0x20b8ff, _0x27f37b, _0x3f09e3, _0x5083fc);
          break;
        }
      }
    }
    return _0x20b8ff;
  }
  getAllParsedValues(_0xb5354c) {
    const _0x58cf79 = this._cachedMeta._parsed;
    const _0x5406dc = [];
    let _0x1b64cb;
    let _0x5261fd;
    let _0x1bb4a6;
    _0x1b64cb = 0;
    _0x5261fd = _0x58cf79.length;
    for (; _0x1b64cb < _0x5261fd; ++_0x1b64cb) {
      _0x1bb4a6 = _0x58cf79[_0x1b64cb][_0xb5354c.axis];
      if (U(_0x1bb4a6)) {
        _0x5406dc.push(_0x1bb4a6);
      }
    }
    return _0x5406dc;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(_0xddb741) {
    const _0xd7d82a = this._cachedMeta;
    const _0x7e8990 = _0xd7d82a.iScale;
    const _0x1fc6cd = _0xd7d82a.vScale;
    const _0x33b54d = this.getParsed(_0xddb741);
    return {
      label: _0x7e8990 ? "" + _0x7e8990.getLabelForValue(_0x33b54d[_0x7e8990.axis]) : "",
      value: _0x1fc6cd ? "" + _0x1fc6cd.getLabelForValue(_0x33b54d[_0x1fc6cd.axis]) : ""
    };
  }
  _update(_0x383e22) {
    const _0x4c7ea4 = this._cachedMeta;
    this.update(_0x383e22 || "default");
    _0x4c7ea4._clip = Nh(T(this.options.clip, jh(_0x4c7ea4.xScale, _0x4c7ea4.yScale, this.getMaxOverflow())));
  }
  update(_0x5a0cf7) {}
  draw() {
    const _0x35bc6e = this._ctx;
    const _0x74e665 = this.chart;
    const _0x43429b = this._cachedMeta;
    const _0x29d978 = _0x43429b.data || [];
    const _0x282361 = _0x74e665.chartArea;
    const _0x26a618 = [];
    const _0x47db89 = this._drawStart || 0;
    const _0x2d59e9 = this._drawCount || _0x29d978.length - _0x47db89;
    const _0x22d9e1 = this.options.drawActiveElementsOnTop;
    let _0x37236c;
    if (_0x43429b.dataset) {
      _0x43429b.dataset.draw(_0x35bc6e, _0x282361, _0x47db89, _0x2d59e9);
    }
    _0x37236c = _0x47db89;
    for (; _0x37236c < _0x47db89 + _0x2d59e9; ++_0x37236c) {
      const _0x1f9cb1 = _0x29d978[_0x37236c];
      if (!_0x1f9cb1.hidden) {
        if (_0x1f9cb1.active && _0x22d9e1) {
          _0x26a618.push(_0x1f9cb1);
        } else {
          _0x1f9cb1.draw(_0x35bc6e, _0x282361);
        }
      }
    }
    for (_0x37236c = 0; _0x37236c < _0x26a618.length; ++_0x37236c) {
      _0x26a618[_0x37236c].draw(_0x35bc6e, _0x282361);
    }
  }
  getStyle(_0x19194b, _0x2f469e) {
    const _0x519f8e = _0x2f469e ? "active" : "default";
    if (_0x19194b === undefined && this._cachedMeta.dataset) {
      return this.resolveDatasetElementOptions(_0x519f8e);
    } else {
      return this.resolveDataElementOptions(_0x19194b || 0, _0x519f8e);
    }
  }
  getContext(_0x17fc24, _0x550af1, _0x210364) {
    const _0x57e563 = this.getDataset();
    let _0x51fcf3;
    if (_0x17fc24 >= 0 && _0x17fc24 < this._cachedMeta.data.length) {
      const _0x30a1bc = this._cachedMeta.data[_0x17fc24];
      _0x51fcf3 = _0x30a1bc.$context ||= Kh(this.getContext(), _0x17fc24, _0x30a1bc);
      _0x51fcf3.parsed = this.getParsed(_0x17fc24);
      _0x51fcf3.raw = _0x57e563.data[_0x17fc24];
      _0x51fcf3.index = _0x51fcf3.dataIndex = _0x17fc24;
    } else {
      _0x51fcf3 = this.$context ||= Yh(this.chart.getContext(), this.index);
      _0x51fcf3.dataset = _0x57e563;
      _0x51fcf3.index = _0x51fcf3.datasetIndex = this.index;
    }
    _0x51fcf3.active = !!_0x550af1;
    _0x51fcf3.mode = _0x210364;
    return _0x51fcf3;
  }
  resolveDatasetElementOptions(_0x96d2e3) {
    return this._resolveElementOptions(this.datasetElementType.id, _0x96d2e3);
  }
  resolveDataElementOptions(_0x56b7d3, _0x30e313) {
    return this._resolveElementOptions(this.dataElementType.id, _0x30e313, _0x56b7d3);
  }
  _resolveElementOptions(_0x55485f, _0x4f7132 = "default", _0x1c2579) {
    const _0x470f53 = _0x4f7132 === "active";
    const _0x9d2aef = this._cachedDataOpts;
    const _0x1ff806 = _0x55485f + "-" + _0x4f7132;
    const _0x501bae = _0x9d2aef[_0x1ff806];
    const _0x5ce419 = this.enableOptionSharing && Se(_0x1c2579);
    if (_0x501bae) {
      return Ss(_0x501bae, _0x5ce419);
    }
    const _0x3b4fe = this.chart.config;
    const _0xc965e7 = _0x3b4fe.datasetElementScopeKeys(this._type, _0x55485f);
    const _0x3a6de8 = _0x470f53 ? [_0x55485f + "Hover", "hover", _0x55485f, ""] : [_0x55485f, ""];
    const _0x4065a2 = _0x3b4fe.getOptionScopes(this.getDataset(), _0xc965e7);
    const _0x3e3624 = Object.keys(N.elements[_0x55485f]);
    const _0x24ac5d = () => this.getContext(_0x1c2579, _0x470f53, _0x4f7132);
    const _0x3b83dd = _0x3b4fe.resolveNamedOptions(_0x4065a2, _0x3e3624, _0x24ac5d, _0x3a6de8);
    if (_0x3b83dd.$shared) {
      _0x3b83dd.$shared = _0x5ce419;
      _0x9d2aef[_0x1ff806] = Object.freeze(Ss(_0x3b83dd, _0x5ce419));
    }
    return _0x3b83dd;
  }
  _resolveAnimations(_0x51ba33, _0x2bd8e, _0x23f679) {
    const _0x3aa153 = this.chart;
    const _0x5b8459 = this._cachedDataOpts;
    const _0x352c24 = "animation-" + _0x2bd8e;
    const _0x1ca461 = _0x5b8459[_0x352c24];
    if (_0x1ca461) {
      return _0x1ca461;
    }
    let _0x126d7b;
    if (_0x3aa153.options.animation !== false) {
      const _0x109b58 = this.chart.config;
      const _0x4216f4 = _0x109b58.datasetAnimationScopeKeys(this._type, _0x2bd8e);
      const _0x5708b5 = _0x109b58.getOptionScopes(this.getDataset(), _0x4216f4);
      _0x126d7b = _0x109b58.createResolver(_0x5708b5, this.getContext(_0x51ba33, _0x23f679, _0x2bd8e));
    }
    const _0x2dbe76 = new Fh(_0x3aa153, _0x126d7b && _0x126d7b.animations);
    if (_0x126d7b && _0x126d7b._cacheable) {
      _0x5b8459[_0x352c24] = Object.freeze(_0x2dbe76);
    }
    return _0x2dbe76;
  }
  getSharedOptions(_0xd6f2a7) {
    if (_0xd6f2a7.$shared) {
      return this._sharedOptions ||= Object.assign({}, _0xd6f2a7);
    }
  }
  includeOptions(_0x207c63, _0x5466b7) {
    return !_0x5466b7 || qi(_0x207c63) || this.chart._animationsDisabled;
  }
  _getSharedOptions(_0x3d8a6b, _0x3e5727) {
    const _0x1c4220 = this.resolveDataElementOptions(_0x3d8a6b, _0x3e5727);
    const _0x110019 = this._sharedOptions;
    const _0x521947 = this.getSharedOptions(_0x1c4220);
    const _0x39ab07 = this.includeOptions(_0x3e5727, _0x521947) || _0x521947 !== _0x110019;
    this.updateSharedOptions(_0x521947, _0x3e5727, _0x1c4220);
    return {
      sharedOptions: _0x521947,
      includeOptions: _0x39ab07
    };
  }
  updateElement(_0xa5b094, _0x3d99e0, _0x49fb2c, _0x5aca79) {
    if (qi(_0x5aca79)) {
      Object.assign(_0xa5b094, _0x49fb2c);
    } else {
      this._resolveAnimations(_0x3d99e0, _0x5aca79).update(_0xa5b094, _0x49fb2c);
    }
  }
  updateSharedOptions(_0x3f3753, _0x522088, _0x2e0b5e) {
    if (_0x3f3753 && !qi(_0x522088)) {
      this._resolveAnimations(undefined, _0x522088).update(_0x3f3753, _0x2e0b5e);
    }
  }
  _setStyle(_0x329ed6, _0x3c072b, _0x1c42cc, _0x40fcba) {
    _0x329ed6.active = _0x40fcba;
    const _0x4f41fc = this.getStyle(_0x3c072b, _0x40fcba);
    this._resolveAnimations(_0x3c072b, _0x1c42cc, _0x40fcba).update(_0x329ed6, {
      options: !_0x40fcba && this.getSharedOptions(_0x4f41fc) || _0x4f41fc
    });
  }
  removeHoverStyle(_0x6d5420, _0x48e61d, _0x3d6c10) {
    this._setStyle(_0x6d5420, _0x3d6c10, "active", false);
  }
  setHoverStyle(_0x505f78, _0x3bb395, _0x2c48f4) {
    this._setStyle(_0x505f78, _0x2c48f4, "active", true);
  }
  _removeDatasetHoverStyle() {
    const _0x51200b = this._cachedMeta.dataset;
    if (_0x51200b) {
      this._setStyle(_0x51200b, undefined, "active", false);
    }
  }
  _setDatasetHoverStyle() {
    const _0x574278 = this._cachedMeta.dataset;
    if (_0x574278) {
      this._setStyle(_0x574278, undefined, "active", true);
    }
  }
  _resyncElements(_0xb88201) {
    const _0x27a8ca = this._data;
    const _0x1ba2c5 = this._cachedMeta.data;
    for (const [_0x561af0, _0x5f59e8, _0x12d51c] of this._syncList) {
      this[_0x561af0](_0x5f59e8, _0x12d51c);
    }
    this._syncList = [];
    const _0x187a39 = _0x1ba2c5.length;
    const _0x59dca4 = _0x27a8ca.length;
    const _0x597c52 = Math.min(_0x59dca4, _0x187a39);
    if (_0x597c52) {
      this.parse(0, _0x597c52);
    }
    if (_0x59dca4 > _0x187a39) {
      this._insertElements(_0x187a39, _0x59dca4 - _0x187a39, _0xb88201);
    } else if (_0x59dca4 < _0x187a39) {
      this._removeElements(_0x59dca4, _0x187a39 - _0x59dca4);
    }
  }
  _insertElements(_0x5bce8f, _0x55fe48, _0x55c21c = true) {
    const _0x19a49a = this._cachedMeta;
    const _0x295065 = _0x19a49a.data;
    const _0x2c1745 = _0x5bce8f + _0x55fe48;
    let _0x284a00;
    const _0xf9013 = _0x42fe0c => {
      _0x42fe0c.length += _0x55fe48;
      _0x284a00 = _0x42fe0c.length - 1;
      for (; _0x284a00 >= _0x2c1745; _0x284a00--) {
        _0x42fe0c[_0x284a00] = _0x42fe0c[_0x284a00 - _0x55fe48];
      }
    };
    _0xf9013(_0x295065);
    _0x284a00 = _0x5bce8f;
    for (; _0x284a00 < _0x2c1745; ++_0x284a00) {
      _0x295065[_0x284a00] = new this.dataElementType();
    }
    if (this._parsing) {
      _0xf9013(_0x19a49a._parsed);
    }
    this.parse(_0x5bce8f, _0x55fe48);
    if (_0x55c21c) {
      this.updateElements(_0x295065, _0x5bce8f, _0x55fe48, "reset");
    }
  }
  updateElements(_0x9d8a02, _0x2e764e, _0x3897c5, _0x3765a9) {}
  _removeElements(_0x237d7c, _0x29f945) {
    const _0xc66d54 = this._cachedMeta;
    if (this._parsing) {
      const _0x250f58 = _0xc66d54._parsed.splice(_0x237d7c, _0x29f945);
      if (_0xc66d54._stacked) {
        he(_0xc66d54, _0x250f58);
      }
    }
    _0xc66d54.data.splice(_0x237d7c, _0x29f945);
  }
  _sync(_0x540f36) {
    if (this._parsing) {
      this._syncList.push(_0x540f36);
    } else {
      const [_0x23af07, _0x5ebeee, _0x2cdd45] = _0x540f36;
      this[_0x23af07](_0x5ebeee, _0x2cdd45);
    }
    this.chart._dataChanges.push([this.index, ..._0x540f36]);
  }
  _onDataPush() {
    const _0x5b71d2 = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - _0x5b71d2, _0x5b71d2]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(_0x37ff50, _0xd9e317) {
    if (_0xd9e317) {
      this._sync(["_removeElements", _0x37ff50, _0xd9e317]);
    }
    const _0x3bdef6 = arguments.length - 2;
    if (_0x3bdef6) {
      this._sync(["_insertElements", _0x37ff50, _0x3bdef6]);
    }
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
function Xh(_0xeed406, _0x1dbcba) {
  if (!_0xeed406._cache.$bar) {
    const _0x1dc1fd = _0xeed406.getMatchingVisibleMetas(_0x1dbcba);
    let _0x29263a = [];
    for (let _0xb5ec24 = 0, _0x207a95 = _0x1dc1fd.length; _0xb5ec24 < _0x207a95; _0xb5ec24++) {
      _0x29263a = _0x29263a.concat(_0x1dc1fd[_0xb5ec24].controller.getAllParsedValues(_0xeed406));
    }
    _0xeed406._cache.$bar = Bo(_0x29263a.sort((_0x3a42d1, _0x32001d) => _0x3a42d1 - _0x32001d));
  }
  return _0xeed406._cache.$bar;
}
function Gh(_0x2bd079) {
  const _0x4112fd = _0x2bd079.iScale;
  const _0x2ffce8 = Xh(_0x4112fd, _0x2bd079.type);
  let _0xd108a1 = _0x4112fd._length;
  let _0x214915;
  let _0x1e3ed2;
  let _0x555928;
  let _0x55ba60;
  const _0x4467be = () => {
    if (_0x555928 !== 32767 && _0x555928 !== -32768) {
      if (Se(_0x55ba60)) {
        _0xd108a1 = Math.min(_0xd108a1, Math.abs(_0x555928 - _0x55ba60) || _0xd108a1);
      }
      _0x55ba60 = _0x555928;
    }
  };
  _0x214915 = 0;
  _0x1e3ed2 = _0x2ffce8.length;
  for (; _0x214915 < _0x1e3ed2; ++_0x214915) {
    _0x555928 = _0x4112fd.getPixelForValue(_0x2ffce8[_0x214915]);
    _0x4467be();
  }
  _0x55ba60 = undefined;
  _0x214915 = 0;
  _0x1e3ed2 = _0x4112fd.ticks.length;
  for (; _0x214915 < _0x1e3ed2; ++_0x214915) {
    _0x555928 = _0x4112fd.getPixelForTick(_0x214915);
    _0x4467be();
  }
  return _0xd108a1;
}
function Zh(_0x13e1ee, _0x46a7db, _0x56b17d, _0x507a42) {
  const _0x29e3aa = _0x56b17d.barThickness;
  let _0x354e45;
  let _0x276c52;
  if (I(_0x29e3aa)) {
    _0x354e45 = _0x46a7db.min * _0x56b17d.categoryPercentage;
    _0x276c52 = _0x56b17d.barPercentage;
  } else {
    _0x354e45 = _0x29e3aa * _0x507a42;
    _0x276c52 = 1;
  }
  return {
    chunk: _0x354e45 / _0x507a42,
    ratio: _0x276c52,
    start: _0x46a7db.pixels[_0x13e1ee] - _0x354e45 / 2
  };
}
function Qh(_0x22bf30, _0x1e72a9, _0x9f4a3b, _0x267dc8) {
  const _0x191785 = _0x1e72a9.pixels;
  const _0x25c7dc = _0x191785[_0x22bf30];
  let _0x21cdee = _0x22bf30 > 0 ? _0x191785[_0x22bf30 - 1] : null;
  let _0x25aeab = _0x22bf30 < _0x191785.length - 1 ? _0x191785[_0x22bf30 + 1] : null;
  const _0x92ec4e = _0x9f4a3b.categoryPercentage;
  if (_0x21cdee === null) {
    _0x21cdee = _0x25c7dc - (_0x25aeab === null ? _0x1e72a9.end - _0x1e72a9.start : _0x25aeab - _0x25c7dc);
  }
  if (_0x25aeab === null) {
    _0x25aeab = _0x25c7dc + _0x25c7dc - _0x21cdee;
  }
  const _0x4c133f = _0x25c7dc - (_0x25c7dc - Math.min(_0x21cdee, _0x25aeab)) / 2 * _0x92ec4e;
  return {
    chunk: Math.abs(_0x25aeab - _0x21cdee) / 2 * _0x92ec4e / _0x267dc8,
    ratio: _0x9f4a3b.barPercentage,
    start: _0x4c133f
  };
}
function Jh(_0x306379, _0x28e2c1, _0x1c3eaf, _0x27be9b) {
  const _0x22851c = _0x1c3eaf.parse(_0x306379[0], _0x27be9b);
  const _0x1c3c73 = _0x1c3eaf.parse(_0x306379[1], _0x27be9b);
  const _0x298a0a = Math.min(_0x22851c, _0x1c3c73);
  const _0x368806 = Math.max(_0x22851c, _0x1c3c73);
  let _0x5bfcf6 = _0x298a0a;
  let _0x1dc897 = _0x368806;
  if (Math.abs(_0x298a0a) > Math.abs(_0x368806)) {
    _0x5bfcf6 = _0x368806;
    _0x1dc897 = _0x298a0a;
  }
  _0x28e2c1[_0x1c3eaf.axis] = _0x1dc897;
  _0x28e2c1._custom = {
    barStart: _0x5bfcf6,
    barEnd: _0x1dc897,
    start: _0x22851c,
    end: _0x1c3c73,
    min: _0x298a0a,
    max: _0x368806
  };
}
function Zo(_0x5ce115, _0x49ac97, _0x17c5ce, _0x45ad5e) {
  if (B(_0x5ce115)) {
    Jh(_0x5ce115, _0x49ac97, _0x17c5ce, _0x45ad5e);
  } else {
    _0x49ac97[_0x17c5ce.axis] = _0x17c5ce.parse(_0x5ce115, _0x45ad5e);
  }
  return _0x49ac97;
}
function Cs(_0x727093, _0x5b174d, _0x2d13fd, _0x377ea7) {
  const _0x1e9563 = _0x727093.iScale;
  const _0x1ff045 = _0x727093.vScale;
  const _0x39addf = _0x1e9563.getLabels();
  const _0x2a90f0 = _0x1e9563 === _0x1ff045;
  const _0x40ff9b = [];
  let _0xdf74a6;
  let _0x4619d8;
  let _0x53cc1a;
  let _0x34cff2;
  _0xdf74a6 = _0x2d13fd;
  _0x4619d8 = _0x2d13fd + _0x377ea7;
  for (; _0xdf74a6 < _0x4619d8; ++_0xdf74a6) {
    _0x34cff2 = _0x5b174d[_0xdf74a6];
    _0x53cc1a = {};
    _0x53cc1a[_0x1e9563.axis] = _0x2a90f0 || _0x1e9563.parse(_0x39addf[_0xdf74a6], _0xdf74a6);
    _0x40ff9b.push(Zo(_0x34cff2, _0x53cc1a, _0x1ff045, _0xdf74a6));
  }
  return _0x40ff9b;
}
function Xi(_0x24fe70) {
  return _0x24fe70 && _0x24fe70.barStart !== undefined && _0x24fe70.barEnd !== undefined;
}
function td(_0x588f25, _0x4ba55d, _0x3f18f9) {
  if (_0x588f25 !== 0) {
    return Lt(_0x588f25);
  } else {
    return (_0x4ba55d.isHorizontal() ? 1 : -1) * (_0x4ba55d.min >= _0x3f18f9 ? 1 : -1);
  }
}
function ed(_0x4d4892) {
  let _0x57eb29;
  let _0x48284d;
  let _0x1fff83;
  let _0x5a189a;
  let _0xee2bb;
  if (_0x4d4892.horizontal) {
    _0x57eb29 = _0x4d4892.base > _0x4d4892.x;
    _0x48284d = "left";
    _0x1fff83 = "right";
  } else {
    _0x57eb29 = _0x4d4892.base < _0x4d4892.y;
    _0x48284d = "bottom";
    _0x1fff83 = "top";
  }
  if (_0x57eb29) {
    _0x5a189a = "end";
    _0xee2bb = "start";
  } else {
    _0x5a189a = "start";
    _0xee2bb = "end";
  }
  return {
    start: _0x48284d,
    end: _0x1fff83,
    reverse: _0x57eb29,
    top: _0x5a189a,
    bottom: _0xee2bb
  };
}
function id(_0xd7244b, _0x58d1b5, _0x58baf0, _0xd71d20) {
  let _0x5d3bae = _0x58d1b5.borderSkipped;
  const _0x524f92 = {};
  if (!_0x5d3bae) {
    _0xd7244b.borderSkipped = _0x524f92;
    return;
  }
  if (_0x5d3bae === true) {
    _0xd7244b.borderSkipped = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
    return;
  }
  const {
    start: _0x4563c6,
    end: _0x5ec61c,
    reverse: _0x35d283,
    top: _0x434d0e,
    bottom: _0xab807e
  } = ed(_0xd7244b);
  if (_0x5d3bae === "middle" && _0x58baf0) {
    _0xd7244b.enableBorderRadius = true;
    if ((_0x58baf0._top || 0) === _0xd71d20) {
      _0x5d3bae = _0x434d0e;
    } else if ((_0x58baf0._bottom || 0) === _0xd71d20) {
      _0x5d3bae = _0xab807e;
    } else {
      _0x524f92[Ps(_0xab807e, _0x4563c6, _0x5ec61c, _0x35d283)] = true;
      _0x5d3bae = _0x434d0e;
    }
  }
  _0x524f92[Ps(_0x5d3bae, _0x4563c6, _0x5ec61c, _0x35d283)] = true;
  _0xd7244b.borderSkipped = _0x524f92;
}
function Ps(_0x574dac, _0x1fcccd, _0xa8302c, _0x54185c) {
  if (_0x54185c) {
    _0x574dac = nd(_0x574dac, _0x1fcccd, _0xa8302c);
    _0x574dac = Os(_0x574dac, _0xa8302c, _0x1fcccd);
  } else {
    _0x574dac = Os(_0x574dac, _0x1fcccd, _0xa8302c);
  }
  return _0x574dac;
}
function nd(_0x1dcf40, _0x529f6e, _0x1ab640) {
  if (_0x1dcf40 === _0x529f6e) {
    return _0x1ab640;
  } else if (_0x1dcf40 === _0x1ab640) {
    return _0x529f6e;
  } else {
    return _0x1dcf40;
  }
}
function Os(_0x42bce7, _0x29b7d0, _0x3a5e3e) {
  if (_0x42bce7 === "start") {
    return _0x29b7d0;
  } else if (_0x42bce7 === "end") {
    return _0x3a5e3e;
  } else {
    return _0x42bce7;
  }
}
function sd(_0x586836, {
  inflateAmount: _0x133301
}, _0x5f434d) {
  _0x586836.inflateAmount = _0x133301 === "auto" ? _0x5f434d === 1 ? 0.33 : 0 : _0x133301;
}
class od extends Pi {
  static id = "bar";
  static defaults = {
    datasetElementType: false,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: true,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"]
      }
    }
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category",
        offset: true,
        grid: {
          offset: true
        }
      },
      _value_: {
        type: "linear",
        beginAtZero: true
      }
    }
  };
  parsePrimitiveData(_0x150014, _0x30d06a, _0x22ce05, _0x29f0c0) {
    return Cs(_0x150014, _0x30d06a, _0x22ce05, _0x29f0c0);
  }
  parseArrayData(_0x5ce017, _0xda4209, _0x5e3b00, _0x1aafa8) {
    return Cs(_0x5ce017, _0xda4209, _0x5e3b00, _0x1aafa8);
  }
  parseObjectData(_0x411e60, _0x51415f, _0x19c822, _0x288800) {
    const {
      iScale: _0x1e7034,
      vScale: _0x54d54c
    } = _0x411e60;
    const {
      xAxisKey: _0x33484c = "x",
      yAxisKey: _0x2cc3df = "y"
    } = this._parsing;
    const _0x23b67e = _0x1e7034.axis === "x" ? _0x33484c : _0x2cc3df;
    const _0x75df2b = _0x54d54c.axis === "x" ? _0x33484c : _0x2cc3df;
    const _0x5e16e4 = [];
    let _0xb120f2;
    let _0x3d13ad;
    let _0x7404;
    let _0x381f74;
    _0xb120f2 = _0x19c822;
    _0x3d13ad = _0x19c822 + _0x288800;
    for (; _0xb120f2 < _0x3d13ad; ++_0xb120f2) {
      _0x381f74 = _0x51415f[_0xb120f2];
      _0x7404 = {};
      _0x7404[_0x1e7034.axis] = _0x1e7034.parse(Tt(_0x381f74, _0x23b67e), _0xb120f2);
      _0x5e16e4.push(Zo(Tt(_0x381f74, _0x75df2b), _0x7404, _0x54d54c, _0xb120f2));
    }
    return _0x5e16e4;
  }
  updateRangeFromParsed(_0x488b28, _0x227cb0, _0x26ecc3, _0x1ac943) {
    super.updateRangeFromParsed(_0x488b28, _0x227cb0, _0x26ecc3, _0x1ac943);
    const _0x50634b = _0x26ecc3._custom;
    if (_0x50634b && _0x227cb0 === this._cachedMeta.vScale) {
      _0x488b28.min = Math.min(_0x488b28.min, _0x50634b.min);
      _0x488b28.max = Math.max(_0x488b28.max, _0x50634b.max);
    }
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(_0x2a20d0) {
    const _0x2c22e5 = this._cachedMeta;
    const {
      iScale: _0x3dc9d9,
      vScale: _0x44efc0
    } = _0x2c22e5;
    const _0x297425 = this.getParsed(_0x2a20d0);
    const _0x5ae7bb = _0x297425._custom;
    const _0x5bca82 = Xi(_0x5ae7bb) ? "[" + _0x5ae7bb.start + ", " + _0x5ae7bb.end + "]" : "" + _0x44efc0.getLabelForValue(_0x297425[_0x44efc0.axis]);
    return {
      label: "" + _0x3dc9d9.getLabelForValue(_0x297425[_0x3dc9d9.axis]),
      value: _0x5bca82
    };
  }
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
    const _0x44dd07 = this._cachedMeta;
    _0x44dd07.stack = this.getDataset().stack;
  }
  update(_0x2ac8f2) {
    const _0x440a4f = this._cachedMeta;
    this.updateElements(_0x440a4f.data, 0, _0x440a4f.data.length, _0x2ac8f2);
  }
  updateElements(_0x1999a6, _0x534a67, _0x16655f, _0x2a4550) {
    const _0x4b55d9 = _0x2a4550 === "reset";
    const {
      index: _0x30cbae,
      _cachedMeta: {
        vScale: _0x516c9b
      }
    } = this;
    const _0x1ee319 = _0x516c9b.getBasePixel();
    const _0x1f0b78 = _0x516c9b.isHorizontal();
    const _0x107d9e = this._getRuler();
    const {
      sharedOptions: _0x4077ca,
      includeOptions: _0x511c42
    } = this._getSharedOptions(_0x534a67, _0x2a4550);
    for (let _0x396f69 = _0x534a67; _0x396f69 < _0x534a67 + _0x16655f; _0x396f69++) {
      const _0x3ce981 = this.getParsed(_0x396f69);
      const _0x46fe36 = _0x4b55d9 || I(_0x3ce981[_0x516c9b.axis]) ? {
        base: _0x1ee319,
        head: _0x1ee319
      } : this._calculateBarValuePixels(_0x396f69);
      const _0x2d6a86 = this._calculateBarIndexPixels(_0x396f69, _0x107d9e);
      const _0x18cd2e = (_0x3ce981._stacks || {})[_0x516c9b.axis];
      const _0x1cb673 = {
        horizontal: _0x1f0b78,
        base: _0x46fe36.base,
        enableBorderRadius: !_0x18cd2e || Xi(_0x3ce981._custom) || _0x30cbae === _0x18cd2e._top || _0x30cbae === _0x18cd2e._bottom,
        x: _0x1f0b78 ? _0x46fe36.head : _0x2d6a86.center,
        y: _0x1f0b78 ? _0x2d6a86.center : _0x46fe36.head,
        height: _0x1f0b78 ? _0x2d6a86.size : Math.abs(_0x46fe36.size),
        width: _0x1f0b78 ? Math.abs(_0x46fe36.size) : _0x2d6a86.size
      };
      if (_0x511c42) {
        _0x1cb673.options = _0x4077ca || this.resolveDataElementOptions(_0x396f69, _0x1999a6[_0x396f69].active ? "active" : _0x2a4550);
      }
      const _0x1efbf1 = _0x1cb673.options || _0x1999a6[_0x396f69].options;
      id(_0x1cb673, _0x1efbf1, _0x18cd2e, _0x30cbae);
      sd(_0x1cb673, _0x1efbf1, _0x107d9e.ratio);
      this.updateElement(_0x1999a6[_0x396f69], _0x396f69, _0x1cb673, _0x2a4550);
    }
  }
  _getStacks(_0x3bd92c, _0x5bc04a) {
    const {
      iScale: _0x420590
    } = this._cachedMeta;
    const _0x3845fb = _0x420590.getMatchingVisibleMetas(this._type).filter(_0x561ed1 => _0x561ed1.controller.options.grouped);
    const _0x3ab4e0 = _0x420590.options.stacked;
    const _0x49d43f = [];
    const _0x183678 = _0x5ae5d6 => {
      const _0x300a0d = _0x5ae5d6.controller.getParsed(_0x5bc04a);
      const _0xcb2aa1 = _0x300a0d && _0x300a0d[_0x5ae5d6.vScale.axis];
      if (I(_0xcb2aa1) || isNaN(_0xcb2aa1)) {
        return true;
      }
    };
    for (const _0x3b6dc6 of _0x3845fb) {
      if ((_0x5bc04a === undefined || !_0x183678(_0x3b6dc6)) && ((_0x3ab4e0 === false || _0x49d43f.indexOf(_0x3b6dc6.stack) === -1 || _0x3ab4e0 === undefined && _0x3b6dc6.stack === undefined) && _0x49d43f.push(_0x3b6dc6.stack), _0x3b6dc6.index === _0x3bd92c)) {
        break;
      }
    }
    if (!_0x49d43f.length) {
      _0x49d43f.push(undefined);
    }
    return _0x49d43f;
  }
  _getStackCount(_0x2f371f) {
    return this._getStacks(undefined, _0x2f371f).length;
  }
  _getStackIndex(_0xa3ccff, _0x598557, _0x26c874) {
    const _0x13ba7f = this._getStacks(_0xa3ccff, _0x26c874);
    const _0x41f75e = _0x598557 !== undefined ? _0x13ba7f.indexOf(_0x598557) : -1;
    if (_0x41f75e === -1) {
      return _0x13ba7f.length - 1;
    } else {
      return _0x41f75e;
    }
  }
  _getRuler() {
    const _0x23c4f6 = this.options;
    const _0x452ec1 = this._cachedMeta;
    const _0x14b7e1 = _0x452ec1.iScale;
    const _0x16f142 = [];
    let _0xf51118;
    let _0xd05918;
    _0xf51118 = 0;
    _0xd05918 = _0x452ec1.data.length;
    for (; _0xf51118 < _0xd05918; ++_0xf51118) {
      _0x16f142.push(_0x14b7e1.getPixelForValue(this.getParsed(_0xf51118)[_0x14b7e1.axis], _0xf51118));
    }
    const _0x1c2277 = _0x23c4f6.barThickness;
    return {
      min: _0x1c2277 || Gh(_0x452ec1),
      pixels: _0x16f142,
      start: _0x14b7e1._startPixel,
      end: _0x14b7e1._endPixel,
      stackCount: this._getStackCount(),
      scale: _0x14b7e1,
      grouped: _0x23c4f6.grouped,
      ratio: _0x1c2277 ? 1 : _0x23c4f6.categoryPercentage * _0x23c4f6.barPercentage
    };
  }
  _calculateBarValuePixels(_0x121691) {
    const {
      _cachedMeta: {
        vScale: _0x48aecd,
        _stacked: _0x2e5dca,
        index: _0x28cfaa
      },
      options: {
        base: _0x24b950,
        minBarLength: _0x279b4c
      }
    } = this;
    const _0x1582ae = _0x24b950 || 0;
    const _0x225fe4 = this.getParsed(_0x121691);
    const _0x540549 = _0x225fe4._custom;
    const _0x340dd5 = Xi(_0x540549);
    let _0xa81e26 = _0x225fe4[_0x48aecd.axis];
    let _0x272eee = 0;
    let _0x1ad6ff = _0x2e5dca ? this.applyStack(_0x48aecd, _0x225fe4, _0x2e5dca) : _0xa81e26;
    let _0x454a3d;
    let _0x2ccd62;
    if (_0x1ad6ff !== _0xa81e26) {
      _0x272eee = _0x1ad6ff - _0xa81e26;
      _0x1ad6ff = _0xa81e26;
    }
    if (_0x340dd5) {
      _0xa81e26 = _0x540549.barStart;
      _0x1ad6ff = _0x540549.barEnd - _0x540549.barStart;
      if (_0xa81e26 !== 0 && Lt(_0xa81e26) !== Lt(_0x540549.barEnd)) {
        _0x272eee = 0;
      }
      _0x272eee += _0xa81e26;
    }
    const _0x4df2f3 = !I(_0x24b950) && !_0x340dd5 ? _0x24b950 : _0x272eee;
    let _0x561ef6 = _0x48aecd.getPixelForValue(_0x4df2f3);
    if (this.chart.getDataVisibility(_0x121691)) {
      _0x454a3d = _0x48aecd.getPixelForValue(_0x272eee + _0x1ad6ff);
    } else {
      _0x454a3d = _0x561ef6;
    }
    _0x2ccd62 = _0x454a3d - _0x561ef6;
    if (Math.abs(_0x2ccd62) < _0x279b4c) {
      _0x2ccd62 = td(_0x2ccd62, _0x48aecd, _0x1582ae) * _0x279b4c;
      if (_0xa81e26 === _0x1582ae) {
        _0x561ef6 -= _0x2ccd62 / 2;
      }
      const _0x532491 = _0x48aecd.getPixelForDecimal(0);
      const _0x4397da = _0x48aecd.getPixelForDecimal(1);
      const _0x221001 = Math.min(_0x532491, _0x4397da);
      const _0xebe3d3 = Math.max(_0x532491, _0x4397da);
      _0x561ef6 = Math.max(Math.min(_0x561ef6, _0xebe3d3), _0x221001);
      _0x454a3d = _0x561ef6 + _0x2ccd62;
      if (_0x2e5dca && !_0x340dd5) {
        _0x225fe4._stacks[_0x48aecd.axis]._visualValues[_0x28cfaa] = _0x48aecd.getValueForPixel(_0x454a3d) - _0x48aecd.getValueForPixel(_0x561ef6);
      }
    }
    if (_0x561ef6 === _0x48aecd.getPixelForValue(_0x1582ae)) {
      const _0x16e224 = Lt(_0x2ccd62) * _0x48aecd.getLineWidthForValue(_0x1582ae) / 2;
      _0x561ef6 += _0x16e224;
      _0x2ccd62 -= _0x16e224;
    }
    return {
      size: _0x2ccd62,
      base: _0x561ef6,
      head: _0x454a3d,
      center: _0x454a3d + _0x2ccd62 / 2
    };
  }
  _calculateBarIndexPixels(_0x847bb1, _0xa7c747) {
    const _0x50f994 = _0xa7c747.scale;
    const _0x51aa6a = this.options;
    const _0x34331c = _0x51aa6a.skipNull;
    const _0x3d5d71 = T(_0x51aa6a.maxBarThickness, Infinity);
    let _0x4a13e2;
    let _0x8b5482;
    if (_0xa7c747.grouped) {
      const _0x226f13 = _0x34331c ? this._getStackCount(_0x847bb1) : _0xa7c747.stackCount;
      const _0x247b3c = _0x51aa6a.barThickness === "flex" ? Qh(_0x847bb1, _0xa7c747, _0x51aa6a, _0x226f13) : Zh(_0x847bb1, _0xa7c747, _0x51aa6a, _0x226f13);
      const _0x3525a4 = this._getStackIndex(this.index, this._cachedMeta.stack, _0x34331c ? _0x847bb1 : undefined);
      _0x4a13e2 = _0x247b3c.start + _0x247b3c.chunk * _0x3525a4 + _0x247b3c.chunk / 2;
      _0x8b5482 = Math.min(_0x3d5d71, _0x247b3c.chunk * _0x247b3c.ratio);
    } else {
      _0x4a13e2 = _0x50f994.getPixelForValue(this.getParsed(_0x847bb1)[_0x50f994.axis], _0x847bb1);
      _0x8b5482 = Math.min(_0x3d5d71, _0xa7c747.min * _0xa7c747.ratio);
    }
    return {
      base: _0x4a13e2 - _0x8b5482 / 2,
      head: _0x4a13e2 + _0x8b5482 / 2,
      center: _0x4a13e2,
      size: _0x8b5482
    };
  }
  draw() {
    const _0x378f87 = this._cachedMeta;
    const _0x114b90 = _0x378f87.vScale;
    const _0x52d94f = _0x378f87.data;
    const _0x5c3dc8 = _0x52d94f.length;
    let _0x2c5769 = 0;
    for (; _0x2c5769 < _0x5c3dc8; ++_0x2c5769) {
      if (this.getParsed(_0x2c5769)[_0x114b90.axis] !== null) {
        _0x52d94f[_0x2c5769].draw(this._ctx);
      }
    }
  }
}
function rd(_0x115d38, _0x2c5f7d, _0x4259f0) {
  let _0xb261c5 = 1;
  let _0xc85175 = 1;
  let _0x562a35 = 0;
  let _0x32dd76 = 0;
  if (_0x2c5f7d < Z) {
    const _0x3d532d = _0x115d38;
    const _0xa05be6 = _0x3d532d + _0x2c5f7d;
    const _0x11c448 = Math.cos(_0x3d532d);
    const _0x28813b = Math.sin(_0x3d532d);
    const _0x5ab382 = Math.cos(_0xa05be6);
    const _0x43085f = Math.sin(_0xa05be6);
    const _0x3ce366 = (_0x2fddab, _0x28c56a, _0x2d22e4) => dn(_0x2fddab, _0x3d532d, _0xa05be6, true) ? 1 : Math.max(_0x28c56a, _0x28c56a * _0x4259f0, _0x2d22e4, _0x2d22e4 * _0x4259f0);
    const _0x47514 = (_0x490839, _0x4de2c3, _0x3319e2) => dn(_0x490839, _0x3d532d, _0xa05be6, true) ? -1 : Math.min(_0x4de2c3, _0x4de2c3 * _0x4259f0, _0x3319e2, _0x3319e2 * _0x4259f0);
    const _0x163435 = _0x3ce366(0, _0x11c448, _0x5ab382);
    const _0x457649 = _0x3ce366(Q, _0x28813b, _0x43085f);
    const _0x34473b = _0x47514(W, _0x11c448, _0x5ab382);
    const _0x4e781b = _0x47514(W + Q, _0x28813b, _0x43085f);
    _0xb261c5 = (_0x163435 - _0x34473b) / 2;
    _0xc85175 = (_0x457649 - _0x4e781b) / 2;
    _0x562a35 = -(_0x163435 + _0x34473b) / 2;
    _0x32dd76 = -(_0x457649 + _0x4e781b) / 2;
  }
  return {
    ratioX: _0xb261c5,
    ratioY: _0xc85175,
    offsetX: _0x562a35,
    offsetY: _0x32dd76
  };
}
class ad extends Pi {
  static id = "doughnut";
  static defaults = {
    datasetElementType: false,
    dataElementType: "arc",
    animation: {
      animateRotate: true,
      animateScale: false
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
      }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
  };
  static descriptors = {
    _scriptable: t => t !== "spacing",
    _indexable: t => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: {
                  pointStyle: n,
                  color: s
                }
              } = t.legend.options;
              return e.labels.map((o, r) => {
                const l = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: n,
                  hidden: !t.getDataVisibility(r),
                  index: r
                };
              });
            }
            return [];
          }
        },
        onClick(t, e, n) {
          n.chart.toggleDataVisibility(e.index);
          n.chart.update();
        }
      }
    }
  };
  constructor(_0x539c10, _0x2f6b1b) {
    super(_0x539c10, _0x2f6b1b);
    this.enableOptionSharing = true;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.offsetX = undefined;
    this.offsetY = undefined;
  }
  linkScales() {}
  parse(_0x230dd0, _0x56782f) {
    const _0x5ae038 = this.getDataset().data;
    const _0x53b2fe = this._cachedMeta;
    if (this._parsing === false) {
      _0x53b2fe._parsed = _0x5ae038;
    } else {
      let _0x3f82fe = _0x26f0a1 => +_0x5ae038[_0x26f0a1];
      if (L(_0x5ae038[_0x230dd0])) {
        const {
          key: _0x35d685 = "value"
        } = this._parsing;
        _0x3f82fe = _0x5b4e3b => +Tt(_0x5ae038[_0x5b4e3b], _0x35d685);
      }
      let _0x559523;
      let _0x454afd;
      _0x559523 = _0x230dd0;
      _0x454afd = _0x230dd0 + _0x56782f;
      for (; _0x559523 < _0x454afd; ++_0x559523) {
        _0x53b2fe._parsed[_0x559523] = _0x3f82fe(_0x559523);
      }
    }
  }
  _getRotation() {
    return ct(this.options.rotation - 90);
  }
  _getCircumference() {
    return ct(this.options.circumference);
  }
  _getRotationExtents() {
    let _0x10ee5e = Z;
    let _0x76a21f = -Z;
    for (let _0xa3011d = 0; _0xa3011d < this.chart.data.datasets.length; ++_0xa3011d) {
      if (this.chart.isDatasetVisible(_0xa3011d) && this.chart.getDatasetMeta(_0xa3011d).type === this._type) {
        const _0x12464b = this.chart.getDatasetMeta(_0xa3011d).controller;
        const _0x57fa87 = _0x12464b._getRotation();
        const _0x396d9c = _0x12464b._getCircumference();
        _0x10ee5e = Math.min(_0x10ee5e, _0x57fa87);
        _0x76a21f = Math.max(_0x76a21f, _0x57fa87 + _0x396d9c);
      }
    }
    return {
      rotation: _0x10ee5e,
      circumference: _0x76a21f - _0x10ee5e
    };
  }
  update(_0x356939) {
    const _0x4b03d2 = this.chart;
    const {
      chartArea: _0x5cfb2f
    } = _0x4b03d2;
    const _0x3306b6 = this._cachedMeta;
    const _0x27bc56 = _0x3306b6.data;
    const _0x310980 = this.getMaxBorderWidth() + this.getMaxOffset(_0x27bc56) + this.options.spacing;
    const _0x178f00 = Math.max((Math.min(_0x5cfb2f.width, _0x5cfb2f.height) - _0x310980) / 2, 0);
    const _0x26d0b3 = Math.min(Lc(this.options.cutout, _0x178f00), 1);
    const _0x18069f = this._getRingWeight(this.index);
    const {
      circumference: _0x29c559,
      rotation: _0x4d8f7a
    } = this._getRotationExtents();
    const {
      ratioX: _0x436861,
      ratioY: _0x9feb7a,
      offsetX: _0x517e47,
      offsetY: _0x34697e
    } = rd(_0x4d8f7a, _0x29c559, _0x26d0b3);
    const _0xefcd81 = (_0x5cfb2f.width - _0x310980) / _0x436861;
    const _0x5cd91e = (_0x5cfb2f.height - _0x310980) / _0x9feb7a;
    const _0x36292e = Math.max(Math.min(_0xefcd81, _0x5cd91e) / 2, 0);
    const _0xf776d0 = Ro(this.options.radius, _0x36292e);
    const _0x350039 = Math.max(_0xf776d0 * _0x26d0b3, 0);
    const _0x31feed = (_0xf776d0 - _0x350039) / this._getVisibleDatasetWeightTotal();
    this.offsetX = _0x517e47 * _0xf776d0;
    this.offsetY = _0x34697e * _0xf776d0;
    _0x3306b6.total = this.calculateTotal();
    this.outerRadius = _0xf776d0 - _0x31feed * this._getRingWeightOffset(this.index);
    this.innerRadius = Math.max(this.outerRadius - _0x31feed * _0x18069f, 0);
    this.updateElements(_0x27bc56, 0, _0x27bc56.length, _0x356939);
  }
  _circumference(_0x513de5, _0x49ebf1) {
    const _0x4e755e = this.options;
    const _0x1eff6a = this._cachedMeta;
    const _0x45805f = this._getCircumference();
    if (_0x49ebf1 && _0x4e755e.animation.animateRotate || !this.chart.getDataVisibility(_0x513de5) || _0x1eff6a._parsed[_0x513de5] === null || _0x1eff6a.data[_0x513de5].hidden) {
      return 0;
    } else {
      return this.calculateCircumference(_0x1eff6a._parsed[_0x513de5] * _0x45805f / Z);
    }
  }
  updateElements(_0x153d0a, _0x16e13e, _0x294a7a, _0x5c9bfc) {
    const _0x2e43b6 = _0x5c9bfc === "reset";
    const _0x3f2010 = this.chart;
    const _0x4666e5 = _0x3f2010.chartArea;
    const _0x2b86b2 = _0x3f2010.options.animation;
    const _0x233320 = (_0x4666e5.left + _0x4666e5.right) / 2;
    const _0x6b7595 = (_0x4666e5.top + _0x4666e5.bottom) / 2;
    const _0x43d002 = _0x2e43b6 && _0x2b86b2.animateScale;
    const _0x113091 = _0x43d002 ? 0 : this.innerRadius;
    const _0x776a1e = _0x43d002 ? 0 : this.outerRadius;
    const {
      sharedOptions: _0x5e01d2,
      includeOptions: _0x53df8d
    } = this._getSharedOptions(_0x16e13e, _0x5c9bfc);
    let _0x5d1dbc = this._getRotation();
    let _0x5207ff;
    for (_0x5207ff = 0; _0x5207ff < _0x16e13e; ++_0x5207ff) {
      _0x5d1dbc += this._circumference(_0x5207ff, _0x2e43b6);
    }
    for (_0x5207ff = _0x16e13e; _0x5207ff < _0x16e13e + _0x294a7a; ++_0x5207ff) {
      const _0x23390d = this._circumference(_0x5207ff, _0x2e43b6);
      const _0x30337d = _0x153d0a[_0x5207ff];
      const _0x37723c = {
        x: _0x233320 + this.offsetX,
        y: _0x6b7595 + this.offsetY,
        startAngle: _0x5d1dbc,
        endAngle: _0x5d1dbc + _0x23390d,
        circumference: _0x23390d,
        outerRadius: _0x776a1e,
        innerRadius: _0x113091
      };
      if (_0x53df8d) {
        _0x37723c.options = _0x5e01d2 || this.resolveDataElementOptions(_0x5207ff, _0x30337d.active ? "active" : _0x5c9bfc);
      }
      _0x5d1dbc += _0x23390d;
      this.updateElement(_0x30337d, _0x5207ff, _0x37723c, _0x5c9bfc);
    }
  }
  calculateTotal() {
    const _0x423184 = this._cachedMeta;
    const _0x5effde = _0x423184.data;
    let _0x11f8ce = 0;
    let _0x34fedc;
    for (_0x34fedc = 0; _0x34fedc < _0x5effde.length; _0x34fedc++) {
      const _0x31325d = _0x423184._parsed[_0x34fedc];
      if (_0x31325d !== null && !isNaN(_0x31325d) && this.chart.getDataVisibility(_0x34fedc) && !_0x5effde[_0x34fedc].hidden) {
        _0x11f8ce += Math.abs(_0x31325d);
      }
    }
    return _0x11f8ce;
  }
  calculateCircumference(_0x3b1143) {
    const _0x176066 = this._cachedMeta.total;
    if (_0x176066 > 0 && !isNaN(_0x3b1143)) {
      return Z * (Math.abs(_0x3b1143) / _0x176066);
    } else {
      return 0;
    }
  }
  getLabelAndValue(_0x206684) {
    const _0x54d8ad = this._cachedMeta;
    const _0x30362f = this.chart;
    const _0x3ff0ff = _0x30362f.data.labels || [];
    const _0x3039be = Te(_0x54d8ad._parsed[_0x206684], _0x30362f.options.locale);
    return {
      label: _0x3ff0ff[_0x206684] || "",
      value: _0x3039be
    };
  }
  getMaxBorderWidth(_0x3123dc) {
    let _0x478473 = 0;
    const _0x5cec4f = this.chart;
    let _0x2fe5de;
    let _0x2702a8;
    let _0x5cb519;
    let _0x571cd2;
    let _0x29e55f;
    if (!_0x3123dc) {
      _0x2fe5de = 0;
      _0x2702a8 = _0x5cec4f.data.datasets.length;
      for (; _0x2fe5de < _0x2702a8; ++_0x2fe5de) {
        if (_0x5cec4f.isDatasetVisible(_0x2fe5de)) {
          _0x5cb519 = _0x5cec4f.getDatasetMeta(_0x2fe5de);
          _0x3123dc = _0x5cb519.data;
          _0x571cd2 = _0x5cb519.controller;
          break;
        }
      }
    }
    if (!_0x3123dc) {
      return 0;
    }
    _0x2fe5de = 0;
    _0x2702a8 = _0x3123dc.length;
    for (; _0x2fe5de < _0x2702a8; ++_0x2fe5de) {
      _0x29e55f = _0x571cd2.resolveDataElementOptions(_0x2fe5de);
      if (_0x29e55f.borderAlign !== "inner") {
        _0x478473 = Math.max(_0x478473, _0x29e55f.borderWidth || 0, _0x29e55f.hoverBorderWidth || 0);
      }
    }
    return _0x478473;
  }
  getMaxOffset(_0x3d9045) {
    let _0x2c0d68 = 0;
    for (let _0x36a903 = 0, _0x68b7f7 = _0x3d9045.length; _0x36a903 < _0x68b7f7; ++_0x36a903) {
      const _0x342afa = this.resolveDataElementOptions(_0x36a903);
      _0x2c0d68 = Math.max(_0x2c0d68, _0x342afa.offset || 0, _0x342afa.hoverOffset || 0);
    }
    return _0x2c0d68;
  }
  _getRingWeightOffset(_0x15c128) {
    let _0x3884b2 = 0;
    for (let _0x5619cf = 0; _0x5619cf < _0x15c128; ++_0x5619cf) {
      if (this.chart.isDatasetVisible(_0x5619cf)) {
        _0x3884b2 += this._getRingWeight(_0x5619cf);
      }
    }
    return _0x3884b2;
  }
  _getRingWeight(_0x6347fd) {
    return Math.max(T(this.chart.data.datasets[_0x6347fd].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class ld extends Pi {
  static id = "polarArea";
  static defaults = {
    dataElementType: "arc",
    animation: {
      animateRotate: true,
      animateScale: true
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
      }
    },
    indexAxis: "r",
    startAngle: 0
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: {
                  pointStyle: n,
                  color: s
                }
              } = t.legend.options;
              return e.labels.map((o, r) => {
                const l = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: n,
                  hidden: !t.getDataVisibility(r),
                  index: r
                };
              });
            }
            return [];
          }
        },
        onClick(t, e, n) {
          n.chart.toggleDataVisibility(e.index);
          n.chart.update();
        }
      }
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: {
          display: false
        },
        beginAtZero: true,
        grid: {
          circular: true
        },
        pointLabels: {
          display: false
        },
        startAngle: 0
      }
    }
  };
  constructor(_0xc021de, _0x152e49) {
    super(_0xc021de, _0x152e49);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
  }
  getLabelAndValue(_0xdff293) {
    const _0x2b652f = this._cachedMeta;
    const _0x2baa80 = this.chart;
    const _0x3325e3 = _0x2baa80.data.labels || [];
    const _0xeb86fa = Te(_0x2b652f._parsed[_0xdff293].r, _0x2baa80.options.locale);
    return {
      label: _0x3325e3[_0xdff293] || "",
      value: _0xeb86fa
    };
  }
  parseObjectData(_0x643345, _0x46a052, _0x64f076, _0x46d2bb) {
    return wh.bind(this)(_0x643345, _0x46a052, _0x64f076, _0x46d2bb);
  }
  update(_0xd4587) {
    const _0x19d1f1 = this._cachedMeta.data;
    this._updateRadius();
    this.updateElements(_0x19d1f1, 0, _0x19d1f1.length, _0xd4587);
  }
  getMinMax() {
    const _0x1a943a = this._cachedMeta;
    const _0x21869e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    _0x1a943a.data.forEach((_0x2e43ea, _0x224060) => {
      const _0x48ced4 = this.getParsed(_0x224060).r;
      if (!isNaN(_0x48ced4) && this.chart.getDataVisibility(_0x224060)) {
        if (_0x48ced4 < _0x21869e.min) {
          _0x21869e.min = _0x48ced4;
        }
        if (_0x48ced4 > _0x21869e.max) {
          _0x21869e.max = _0x48ced4;
        }
      }
    });
    return _0x21869e;
  }
  _updateRadius() {
    const _0x3e5569 = this.chart;
    const _0x5e9c89 = _0x3e5569.chartArea;
    const _0x463db7 = _0x3e5569.options;
    const _0x140ea0 = Math.min(_0x5e9c89.right - _0x5e9c89.left, _0x5e9c89.bottom - _0x5e9c89.top);
    const _0x3d1d1f = Math.max(_0x140ea0 / 2, 0);
    const _0x4d48dd = Math.max(_0x463db7.cutoutPercentage ? _0x3d1d1f / 100 * _0x463db7.cutoutPercentage : 1, 0);
    const _0x42e2f5 = (_0x3d1d1f - _0x4d48dd) / _0x3e5569.getVisibleDatasetCount();
    this.outerRadius = _0x3d1d1f - _0x42e2f5 * this.index;
    this.innerRadius = this.outerRadius - _0x42e2f5;
  }
  updateElements(_0x312974, _0x2d8bfe, _0x34156c, _0xb99dd7) {
    const _0x4954e3 = _0xb99dd7 === "reset";
    const _0x1c60fe = this.chart;
    const _0x2fd8d1 = _0x1c60fe.options.animation;
    const _0xb90670 = this._cachedMeta.rScale;
    const _0x155128 = _0xb90670.xCenter;
    const _0x2c892d = _0xb90670.yCenter;
    const _0x53f5ab = _0xb90670.getIndexAngle(0) - W * 0.5;
    let _0x1d9486 = _0x53f5ab;
    let _0x414041;
    const _0x402beb = 360 / this.countVisibleElements();
    for (_0x414041 = 0; _0x414041 < _0x2d8bfe; ++_0x414041) {
      _0x1d9486 += this._computeAngle(_0x414041, _0xb99dd7, _0x402beb);
    }
    for (_0x414041 = _0x2d8bfe; _0x414041 < _0x2d8bfe + _0x34156c; _0x414041++) {
      const _0x4dca17 = _0x312974[_0x414041];
      let _0x1eec09 = _0x1d9486;
      let _0x1aec1f = _0x1d9486 + this._computeAngle(_0x414041, _0xb99dd7, _0x402beb);
      let _0x11a982 = _0x1c60fe.getDataVisibility(_0x414041) ? _0xb90670.getDistanceFromCenterForValue(this.getParsed(_0x414041).r) : 0;
      _0x1d9486 = _0x1aec1f;
      if (_0x4954e3) {
        if (_0x2fd8d1.animateScale) {
          _0x11a982 = 0;
        }
        if (_0x2fd8d1.animateRotate) {
          _0x1eec09 = _0x1aec1f = _0x53f5ab;
        }
      }
      const _0x3a14df = {
        x: _0x155128,
        y: _0x2c892d,
        innerRadius: 0,
        outerRadius: _0x11a982,
        startAngle: _0x1eec09,
        endAngle: _0x1aec1f,
        options: this.resolveDataElementOptions(_0x414041, _0x4dca17.active ? "active" : _0xb99dd7)
      };
      this.updateElement(_0x4dca17, _0x414041, _0x3a14df, _0xb99dd7);
    }
  }
  countVisibleElements() {
    const _0x1c5442 = this._cachedMeta;
    let _0x5f20e0 = 0;
    _0x1c5442.data.forEach((_0x313065, _0x1d4bfb) => {
      if (!isNaN(this.getParsed(_0x1d4bfb).r) && this.chart.getDataVisibility(_0x1d4bfb)) {
        _0x5f20e0++;
      }
    });
    return _0x5f20e0;
  }
  _computeAngle(_0x5f8ea, _0x221f85, _0xadffeb) {
    if (this.chart.getDataVisibility(_0x5f8ea)) {
      return ct(this.resolveDataElementOptions(_0x5f8ea, _0x221f85).angle || _0xadffeb);
    } else {
      return 0;
    }
  }
}
function Bt() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Fn {
  static override(_0x551c32) {
    Object.assign(Fn.prototype, _0x551c32);
  }
  options;
  constructor(_0x386dea) {
    this.options = _0x386dea || {};
  }
  init() {}
  formats() {
    return Bt();
  }
  parse() {
    return Bt();
  }
  format() {
    return Bt();
  }
  add() {
    return Bt();
  }
  diff() {
    return Bt();
  }
  startOf() {
    return Bt();
  }
  endOf() {
    return Bt();
  }
}
var cd = {
  _date: Fn
};
function hd(_0x310ea2, _0x297798, _0x3c5f22, _0x4db00a) {
  const {
    controller: _0x4a4f50,
    data: _0x222188,
    _sorted: _0x35dc2e
  } = _0x310ea2;
  const _0x159e03 = _0x4a4f50._cachedMeta.iScale;
  if (_0x159e03 && _0x297798 === _0x159e03.axis && _0x297798 !== "r" && _0x35dc2e && _0x222188.length) {
    const _0x44ee04 = _0x159e03._reversePixels ? Wc : fn;
    if (_0x4db00a) {
      if (_0x4a4f50._sharedOptions) {
        const _0x2b5e19 = _0x222188[0];
        const _0x4af05c = typeof _0x2b5e19.getRange == "function" && _0x2b5e19.getRange(_0x297798);
        if (_0x4af05c) {
          const _0x3cf7b7 = _0x44ee04(_0x222188, _0x297798, _0x3c5f22 - _0x4af05c);
          const _0x30748b = _0x44ee04(_0x222188, _0x297798, _0x3c5f22 + _0x4af05c);
          return {
            lo: _0x3cf7b7.lo,
            hi: _0x30748b.hi
          };
        }
      }
    } else {
      return _0x44ee04(_0x222188, _0x297798, _0x3c5f22);
    }
  }
  return {
    lo: 0,
    hi: _0x222188.length - 1
  };
}
function Ee(_0x1ee95c, _0x5c9212, _0x39a15c, _0x2d8594, _0x5a5181) {
  const _0x514490 = _0x1ee95c.getSortedVisibleDatasetMetas();
  const _0x16364b = _0x39a15c[_0x5c9212];
  for (let _0x67009e = 0, _0x15e91a = _0x514490.length; _0x67009e < _0x15e91a; ++_0x67009e) {
    const {
      index: _0x3c19b8,
      data: _0x1a8ad3
    } = _0x514490[_0x67009e];
    const {
      lo: _0x1a3b29,
      hi: _0x4c7487
    } = hd(_0x514490[_0x67009e], _0x5c9212, _0x16364b, _0x5a5181);
    for (let _0x2230df = _0x1a3b29; _0x2230df <= _0x4c7487; ++_0x2230df) {
      const _0x1dea1e = _0x1a8ad3[_0x2230df];
      if (!_0x1dea1e.skip) {
        _0x2d8594(_0x1dea1e, _0x3c19b8, _0x2230df);
      }
    }
  }
}
function dd(_0x42a148) {
  const _0x4be9b3 = _0x42a148.indexOf("x") !== -1;
  const _0x476147 = _0x42a148.indexOf("y") !== -1;
  return function (_0x2a5499, _0x394d80) {
    const _0x506213 = _0x4be9b3 ? Math.abs(_0x2a5499.x - _0x394d80.x) : 0;
    const _0x579e50 = _0x476147 ? Math.abs(_0x2a5499.y - _0x394d80.y) : 0;
    return Math.sqrt(Math.pow(_0x506213, 2) + Math.pow(_0x579e50, 2));
  };
}
function Gi(_0x59475b, _0x4d8f58, _0x35e525, _0x49adcc, _0x82f214) {
  const _0x1c73d0 = [];
  if (!!_0x82f214 || !!_0x59475b.isPointInArea(_0x4d8f58)) {
    Ee(_0x59475b, _0x35e525, _0x4d8f58, function (_0x108993, _0x179385, _0xb6324b) {
      if (!!_0x82f214 || !!Jt(_0x108993, _0x59475b.chartArea, 0)) {
        if (_0x108993.inRange(_0x4d8f58.x, _0x4d8f58.y, _0x49adcc)) {
          _0x1c73d0.push({
            element: _0x108993,
            datasetIndex: _0x179385,
            index: _0xb6324b
          });
        }
      }
    }, true);
  }
  return _0x1c73d0;
}
function fd(_0x1b0d2a, _0x319db5, _0x26b155, _0x769251) {
  let _0x7ec985 = [];
  function _0x59dd9d(_0x366cc3, _0x25bcc6, _0xad106c) {
    const {
      startAngle: _0x2897f6,
      endAngle: _0x592ba1
    } = _0x366cc3.getProps(["startAngle", "endAngle"], _0x769251);
    const {
      angle: _0x595fe7
    } = Nc(_0x366cc3, {
      x: _0x319db5.x,
      y: _0x319db5.y
    });
    if (dn(_0x595fe7, _0x2897f6, _0x592ba1)) {
      _0x7ec985.push({
        element: _0x366cc3,
        datasetIndex: _0x25bcc6,
        index: _0xad106c
      });
    }
  }
  Ee(_0x1b0d2a, _0x26b155, _0x319db5, _0x59dd9d);
  return _0x7ec985;
}
function ud(_0x43f501, _0x572908, _0x110719, _0x554cdd, _0x27887b, _0x5dbc8c) {
  let _0x377516 = [];
  const _0x58ab6a = dd(_0x110719);
  let _0x15dc81 = Number.POSITIVE_INFINITY;
  function _0x13e33a(_0x5980f2, _0x30ead3, _0x1a439b) {
    const _0x5871d8 = _0x5980f2.inRange(_0x572908.x, _0x572908.y, _0x27887b);
    if (_0x554cdd && !_0x5871d8) {
      return;
    }
    const _0x30d12a = _0x5980f2.getCenterPoint(_0x27887b);
    if (!_0x5dbc8c && !_0x43f501.isPointInArea(_0x30d12a) && !_0x5871d8) {
      return;
    }
    const _0xd21fdd = _0x58ab6a(_0x572908, _0x30d12a);
    if (_0xd21fdd < _0x15dc81) {
      _0x377516 = [{
        element: _0x5980f2,
        datasetIndex: _0x30ead3,
        index: _0x1a439b
      }];
      _0x15dc81 = _0xd21fdd;
    } else if (_0xd21fdd === _0x15dc81) {
      _0x377516.push({
        element: _0x5980f2,
        datasetIndex: _0x30ead3,
        index: _0x1a439b
      });
    }
  }
  Ee(_0x43f501, _0x110719, _0x572908, _0x13e33a);
  return _0x377516;
}
function Zi(_0x1ecce8, _0x4744aa, _0xbdb7e6, _0x56b74d, _0x515dec, _0x279c99) {
  if (!_0x279c99 && !_0x1ecce8.isPointInArea(_0x4744aa)) {
    return [];
  } else if (_0xbdb7e6 === "r" && !_0x56b74d) {
    return fd(_0x1ecce8, _0x4744aa, _0xbdb7e6, _0x515dec);
  } else {
    return ud(_0x1ecce8, _0x4744aa, _0xbdb7e6, _0x56b74d, _0x515dec, _0x279c99);
  }
}
function As(_0x2a287a, _0x35ecbc, _0x54777c, _0x35bb1b, _0x191f3e) {
  const _0x3e8c2d = [];
  const _0x529974 = _0x54777c === "x" ? "inXRange" : "inYRange";
  let _0x1e6627 = false;
  Ee(_0x2a287a, _0x54777c, _0x35ecbc, (_0x7962d4, _0x535324, _0x5e2a5d) => {
    if (_0x7962d4[_0x529974](_0x35ecbc[_0x54777c], _0x191f3e)) {
      _0x3e8c2d.push({
        element: _0x7962d4,
        datasetIndex: _0x535324,
        index: _0x5e2a5d
      });
      _0x1e6627 = _0x1e6627 || _0x7962d4.inRange(_0x35ecbc.x, _0x35ecbc.y, _0x191f3e);
    }
  });
  if (_0x35bb1b && !_0x1e6627) {
    return [];
  } else {
    return _0x3e8c2d;
  }
}
var gd = {
  evaluateInteractionItems: Ee,
  modes: {
    index(_0x43d3f4, _0x4bd6c8, _0x23584d, _0x46675a) {
      const _0x131718 = Nt(_0x4bd6c8, _0x43d3f4);
      const _0x1d4fca = _0x23584d.axis || "x";
      const _0x25b462 = _0x23584d.includeInvisible || false;
      const _0x45852b = _0x23584d.intersect ? Gi(_0x43d3f4, _0x131718, _0x1d4fca, _0x46675a, _0x25b462) : Zi(_0x43d3f4, _0x131718, _0x1d4fca, false, _0x46675a, _0x25b462);
      const _0x404ef9 = [];
      if (_0x45852b.length) {
        _0x43d3f4.getSortedVisibleDatasetMetas().forEach(_0x1dbe4a => {
          const _0x16bbdd = _0x45852b[0].index;
          const _0x4545d4 = _0x1dbe4a.data[_0x16bbdd];
          if (_0x4545d4 && !_0x4545d4.skip) {
            _0x404ef9.push({
              element: _0x4545d4,
              datasetIndex: _0x1dbe4a.index,
              index: _0x16bbdd
            });
          }
        });
        return _0x404ef9;
      } else {
        return [];
      }
    },
    dataset(_0x3f390f, _0x3c8f5b, _0x57cee2, _0x82b651) {
      const _0x33b570 = Nt(_0x3c8f5b, _0x3f390f);
      const _0xb812e5 = _0x57cee2.axis || "xy";
      const _0x5a05ff = _0x57cee2.includeInvisible || false;
      let _0x2170dc = _0x57cee2.intersect ? Gi(_0x3f390f, _0x33b570, _0xb812e5, _0x82b651, _0x5a05ff) : Zi(_0x3f390f, _0x33b570, _0xb812e5, false, _0x82b651, _0x5a05ff);
      if (_0x2170dc.length > 0) {
        const _0x5b7cb7 = _0x2170dc[0].datasetIndex;
        const _0x2db7bd = _0x3f390f.getDatasetMeta(_0x5b7cb7).data;
        _0x2170dc = [];
        for (let _0x458125 = 0; _0x458125 < _0x2db7bd.length; ++_0x458125) {
          _0x2170dc.push({
            element: _0x2db7bd[_0x458125],
            datasetIndex: _0x5b7cb7,
            index: _0x458125
          });
        }
      }
      return _0x2170dc;
    },
    point(_0x399cdc, _0x2c1c53, _0x85519c, _0x1791ac) {
      const _0x3d2272 = Nt(_0x2c1c53, _0x399cdc);
      const _0x173ea0 = _0x85519c.axis || "xy";
      const _0x38f094 = _0x85519c.includeInvisible || false;
      return Gi(_0x399cdc, _0x3d2272, _0x173ea0, _0x1791ac, _0x38f094);
    },
    nearest(_0xfe13e7, _0x1c026b, _0x3f83db, _0xc93b1) {
      const _0x234b78 = Nt(_0x1c026b, _0xfe13e7);
      const _0xc00436 = _0x3f83db.axis || "xy";
      const _0x7ac2ab = _0x3f83db.includeInvisible || false;
      return Zi(_0xfe13e7, _0x234b78, _0xc00436, _0x3f83db.intersect, _0xc93b1, _0x7ac2ab);
    },
    x(_0x54b972, _0x2aab48, _0x3f16da, _0x272a4f) {
      const _0x4441b2 = Nt(_0x2aab48, _0x54b972);
      return As(_0x54b972, _0x4441b2, "x", _0x3f16da.intersect, _0x272a4f);
    },
    y(_0x460a9c, _0x1a4061, _0x4c33a1, _0x2b33f4) {
      const _0x178076 = Nt(_0x1a4061, _0x460a9c);
      return As(_0x460a9c, _0x178076, "y", _0x4c33a1.intersect, _0x2b33f4);
    }
  }
};
const Qo = ["left", "top", "right", "bottom"];
function de(_0x207938, _0x31ca16) {
  return _0x207938.filter(_0x4affa5 => _0x4affa5.pos === _0x31ca16);
}
function Ds(_0xd6c975, _0x302632) {
  return _0xd6c975.filter(_0x4f9081 => Qo.indexOf(_0x4f9081.pos) === -1 && _0x4f9081.box.axis === _0x302632);
}
function fe(_0xa46287, _0x5c64bf) {
  return _0xa46287.sort((_0x436cad, _0x3c7883) => {
    const _0xc6a1ce = _0x5c64bf ? _0x3c7883 : _0x436cad;
    const _0x1a5536 = _0x5c64bf ? _0x436cad : _0x3c7883;
    if (_0xc6a1ce.weight === _0x1a5536.weight) {
      return _0xc6a1ce.index - _0x1a5536.index;
    } else {
      return _0xc6a1ce.weight - _0x1a5536.weight;
    }
  });
}
function pd(_0x3963fd) {
  const _0x4152be = [];
  let _0x366aa7;
  let _0x17c998;
  let _0x1f31e2;
  let _0x552b38;
  let _0x2f86eb;
  let _0x31344c;
  _0x366aa7 = 0;
  _0x17c998 = (_0x3963fd || []).length;
  for (; _0x366aa7 < _0x17c998; ++_0x366aa7) {
    _0x1f31e2 = _0x3963fd[_0x366aa7];
    ({
      position: _0x552b38,
      options: {
        stack: _0x2f86eb,
        stackWeight: _0x31344c = 1
      }
    } = _0x1f31e2);
    _0x4152be.push({
      index: _0x366aa7,
      box: _0x1f31e2,
      pos: _0x552b38,
      horizontal: _0x1f31e2.isHorizontal(),
      weight: _0x1f31e2.weight,
      stack: _0x2f86eb && _0x552b38 + _0x2f86eb,
      stackWeight: _0x31344c
    });
  }
  return _0x4152be;
}
function md(_0x2116c3) {
  const _0x27c961 = {};
  for (const _0x2dc628 of _0x2116c3) {
    const {
      stack: _0x397e33,
      pos: _0x3f3dfb,
      stackWeight: _0x49e90d
    } = _0x2dc628;
    if (!_0x397e33 || !Qo.includes(_0x3f3dfb)) {
      continue;
    }
    const _0x4997d0 = _0x27c961[_0x397e33] ||= {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    };
    _0x4997d0.count++;
    _0x4997d0.weight += _0x49e90d;
  }
  return _0x27c961;
}
function _d(_0x479c3f, _0x2ac418) {
  const _0x1d736b = md(_0x479c3f);
  const {
    vBoxMaxWidth: _0x1f9270,
    hBoxMaxHeight: _0x45e16d
  } = _0x2ac418;
  let _0x425405;
  let _0x4ed32b;
  let _0xb3345;
  _0x425405 = 0;
  _0x4ed32b = _0x479c3f.length;
  for (; _0x425405 < _0x4ed32b; ++_0x425405) {
    _0xb3345 = _0x479c3f[_0x425405];
    const {
      fullSize: _0x1958a8
    } = _0xb3345.box;
    const _0x16515a = _0x1d736b[_0xb3345.stack];
    const _0x4cba2c = _0x16515a && _0xb3345.stackWeight / _0x16515a.weight;
    if (_0xb3345.horizontal) {
      _0xb3345.width = _0x4cba2c ? _0x4cba2c * _0x1f9270 : _0x1958a8 && _0x2ac418.availableWidth;
      _0xb3345.height = _0x45e16d;
    } else {
      _0xb3345.width = _0x1f9270;
      _0xb3345.height = _0x4cba2c ? _0x4cba2c * _0x45e16d : _0x1958a8 && _0x2ac418.availableHeight;
    }
  }
  return _0x1d736b;
}
function bd(_0x45365d) {
  const _0x18d57f = pd(_0x45365d);
  const _0x56a99f = fe(_0x18d57f.filter(_0x2df991 => _0x2df991.box.fullSize), true);
  const _0x273200 = fe(de(_0x18d57f, "left"), true);
  const _0x1d16cf = fe(de(_0x18d57f, "right"));
  const _0x25a187 = fe(de(_0x18d57f, "top"), true);
  const _0x28a34a = fe(de(_0x18d57f, "bottom"));
  const _0x28d80e = Ds(_0x18d57f, "x");
  const _0x12c97c = Ds(_0x18d57f, "y");
  return {
    fullSize: _0x56a99f,
    leftAndTop: _0x273200.concat(_0x25a187),
    rightAndBottom: _0x1d16cf.concat(_0x12c97c).concat(_0x28a34a).concat(_0x28d80e),
    chartArea: de(_0x18d57f, "chartArea"),
    vertical: _0x273200.concat(_0x1d16cf).concat(_0x12c97c),
    horizontal: _0x25a187.concat(_0x28a34a).concat(_0x28d80e)
  };
}
function Ls(_0x8a1d37, _0x1f1af9, _0x3c0c8b, _0x5afdf5) {
  return Math.max(_0x8a1d37[_0x3c0c8b], _0x1f1af9[_0x3c0c8b]) + Math.max(_0x8a1d37[_0x5afdf5], _0x1f1af9[_0x5afdf5]);
}
function Jo(_0x398462, _0x74ffb9) {
  _0x398462.top = Math.max(_0x398462.top, _0x74ffb9.top);
  _0x398462.left = Math.max(_0x398462.left, _0x74ffb9.left);
  _0x398462.bottom = Math.max(_0x398462.bottom, _0x74ffb9.bottom);
  _0x398462.right = Math.max(_0x398462.right, _0x74ffb9.right);
}
function xd(_0xdd4035, _0x321253, _0x4785b0, _0x2b65ae) {
  const {
    pos: _0x2bea47,
    box: _0x59ee43
  } = _0x4785b0;
  const _0xa43b56 = _0xdd4035.maxPadding;
  if (!L(_0x2bea47)) {
    if (_0x4785b0.size) {
      _0xdd4035[_0x2bea47] -= _0x4785b0.size;
    }
    const _0x5611ea = _0x2b65ae[_0x4785b0.stack] || {
      size: 0,
      count: 1
    };
    _0x5611ea.size = Math.max(_0x5611ea.size, _0x4785b0.horizontal ? _0x59ee43.height : _0x59ee43.width);
    _0x4785b0.size = _0x5611ea.size / _0x5611ea.count;
    _0xdd4035[_0x2bea47] += _0x4785b0.size;
  }
  if (_0x59ee43.getPadding) {
    Jo(_0xa43b56, _0x59ee43.getPadding());
  }
  const _0x3bc769 = Math.max(0, _0x321253.outerWidth - Ls(_0xa43b56, _0xdd4035, "left", "right"));
  const _0x3a9c15 = Math.max(0, _0x321253.outerHeight - Ls(_0xa43b56, _0xdd4035, "top", "bottom"));
  const _0x34c639 = _0x3bc769 !== _0xdd4035.w;
  const _0x2c1b34 = _0x3a9c15 !== _0xdd4035.h;
  _0xdd4035.w = _0x3bc769;
  _0xdd4035.h = _0x3a9c15;
  if (_0x4785b0.horizontal) {
    return {
      same: _0x34c639,
      other: _0x2c1b34
    };
  } else {
    return {
      same: _0x2c1b34,
      other: _0x34c639
    };
  }
}
function vd(_0x2bf9ba) {
  const _0x3fa229 = _0x2bf9ba.maxPadding;
  function _0x3177b5(_0x26a8ca) {
    const _0x5a8187 = Math.max(_0x3fa229[_0x26a8ca] - _0x2bf9ba[_0x26a8ca], 0);
    _0x2bf9ba[_0x26a8ca] += _0x5a8187;
    return _0x5a8187;
  }
  _0x2bf9ba.y += _0x3177b5("top");
  _0x2bf9ba.x += _0x3177b5("left");
  _0x3177b5("right");
  _0x3177b5("bottom");
}
function yd(_0x25878c, _0x4e9820) {
  const _0x44ec12 = _0x4e9820.maxPadding;
  function _0x1ce5d0(_0x54599a) {
    const _0x33dbeb = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    _0x54599a.forEach(_0x497026 => {
      _0x33dbeb[_0x497026] = Math.max(_0x4e9820[_0x497026], _0x44ec12[_0x497026]);
    });
    return _0x33dbeb;
  }
  return _0x1ce5d0(_0x25878c ? ["left", "right"] : ["top", "bottom"]);
}
function be(_0x2057cb, _0x5c7a3a, _0x33c9a1, _0x1762ba) {
  const _0x279acc = [];
  let _0x14ad6a;
  let _0x3609f1;
  let _0xc6fcb4;
  let _0x401582;
  let _0x2d3f78;
  let _0xadd3ab;
  _0x14ad6a = 0;
  _0x3609f1 = _0x2057cb.length;
  _0x2d3f78 = 0;
  for (; _0x14ad6a < _0x3609f1; ++_0x14ad6a) {
    _0xc6fcb4 = _0x2057cb[_0x14ad6a];
    _0x401582 = _0xc6fcb4.box;
    _0x401582.update(_0xc6fcb4.width || _0x5c7a3a.w, _0xc6fcb4.height || _0x5c7a3a.h, yd(_0xc6fcb4.horizontal, _0x5c7a3a));
    const {
      same: _0x4891ee,
      other: _0x1ace2b
    } = xd(_0x5c7a3a, _0x33c9a1, _0xc6fcb4, _0x1762ba);
    _0x2d3f78 |= _0x4891ee && _0x279acc.length;
    _0xadd3ab = _0xadd3ab || _0x1ace2b;
    if (!_0x401582.fullSize) {
      _0x279acc.push(_0xc6fcb4);
    }
  }
  return _0x2d3f78 && be(_0x279acc, _0x5c7a3a, _0x33c9a1, _0x1762ba) || _0xadd3ab;
}
function Ze(_0x534d8b, _0x29a567, _0x24e60e, _0x14b146, _0x28f293) {
  _0x534d8b.top = _0x24e60e;
  _0x534d8b.left = _0x29a567;
  _0x534d8b.right = _0x29a567 + _0x14b146;
  _0x534d8b.bottom = _0x24e60e + _0x28f293;
  _0x534d8b.width = _0x14b146;
  _0x534d8b.height = _0x28f293;
}
function Ts(_0x1272ff, _0x42ae5a, _0x4726a1, _0x2ed941) {
  const _0x70b65b = _0x4726a1.padding;
  let {
    x: _0x1d17d3,
    y: _0x1afbd5
  } = _0x42ae5a;
  for (const _0x1005be of _0x1272ff) {
    const _0x59439b = _0x1005be.box;
    const _0xa5955e = _0x2ed941[_0x1005be.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    };
    const _0x3ff9d5 = _0x1005be.stackWeight / _0xa5955e.weight || 1;
    if (_0x1005be.horizontal) {
      const _0x1f0c30 = _0x42ae5a.w * _0x3ff9d5;
      const _0x3a4f1f = _0xa5955e.size || _0x59439b.height;
      if (Se(_0xa5955e.start)) {
        _0x1afbd5 = _0xa5955e.start;
      }
      if (_0x59439b.fullSize) {
        Ze(_0x59439b, _0x70b65b.left, _0x1afbd5, _0x4726a1.outerWidth - _0x70b65b.right - _0x70b65b.left, _0x3a4f1f);
      } else {
        Ze(_0x59439b, _0x42ae5a.left + _0xa5955e.placed, _0x1afbd5, _0x1f0c30, _0x3a4f1f);
      }
      _0xa5955e.start = _0x1afbd5;
      _0xa5955e.placed += _0x1f0c30;
      _0x1afbd5 = _0x59439b.bottom;
    } else {
      const _0x485f31 = _0x42ae5a.h * _0x3ff9d5;
      const _0x43b01e = _0xa5955e.size || _0x59439b.width;
      if (Se(_0xa5955e.start)) {
        _0x1d17d3 = _0xa5955e.start;
      }
      if (_0x59439b.fullSize) {
        Ze(_0x59439b, _0x1d17d3, _0x70b65b.top, _0x43b01e, _0x4726a1.outerHeight - _0x70b65b.bottom - _0x70b65b.top);
      } else {
        Ze(_0x59439b, _0x1d17d3, _0x42ae5a.top + _0xa5955e.placed, _0x43b01e, _0x485f31);
      }
      _0xa5955e.start = _0x1d17d3;
      _0xa5955e.placed += _0x485f31;
      _0x1d17d3 = _0x59439b.right;
    }
  }
  _0x42ae5a.x = _0x1d17d3;
  _0x42ae5a.y = _0x1afbd5;
}
var at = {
  addBox(_0x29a67b, _0x18c61c) {
    _0x29a67b.boxes ||= [];
    _0x18c61c.fullSize = _0x18c61c.fullSize || false;
    _0x18c61c.position = _0x18c61c.position || "top";
    _0x18c61c.weight = _0x18c61c.weight || 0;
    _0x18c61c._layers = _0x18c61c._layers || function () {
      return [{
        z: 0,
        draw(_0x10216f) {
          _0x18c61c.draw(_0x10216f);
        }
      }];
    };
    _0x29a67b.boxes.push(_0x18c61c);
  },
  removeBox(_0x41e293, _0x52e7c1) {
    const _0x4b9af8 = _0x41e293.boxes ? _0x41e293.boxes.indexOf(_0x52e7c1) : -1;
    if (_0x4b9af8 !== -1) {
      _0x41e293.boxes.splice(_0x4b9af8, 1);
    }
  },
  configure(_0x3c5c34, _0x1a2c19, _0xa02695) {
    _0x1a2c19.fullSize = _0xa02695.fullSize;
    _0x1a2c19.position = _0xa02695.position;
    _0x1a2c19.weight = _0xa02695.weight;
  },
  update(_0x5cfbcf, _0x2cf4cf, _0x437839, _0x25b08c) {
    if (!_0x5cfbcf) {
      return;
    }
    const _0x14aff1 = nt(_0x5cfbcf.options.layout.padding);
    const _0x321c05 = Math.max(_0x2cf4cf - _0x14aff1.width, 0);
    const _0x4c1a13 = Math.max(_0x437839 - _0x14aff1.height, 0);
    const _0xada9c4 = bd(_0x5cfbcf.boxes);
    const _0x443158 = _0xada9c4.vertical;
    const _0xc06d8f = _0xada9c4.horizontal;
    q(_0x5cfbcf.boxes, _0x1b8642 => {
      if (typeof _0x1b8642.beforeLayout == "function") {
        _0x1b8642.beforeLayout();
      }
    });
    const _0x148874 = _0x443158.reduce((_0x178bec, _0x564530) => _0x564530.box.options && _0x564530.box.options.display === false ? _0x178bec : _0x178bec + 1, 0) || 1;
    const _0x5e6203 = Object.freeze({
      outerWidth: _0x2cf4cf,
      outerHeight: _0x437839,
      padding: _0x14aff1,
      availableWidth: _0x321c05,
      availableHeight: _0x4c1a13,
      vBoxMaxWidth: _0x321c05 / 2 / _0x148874,
      hBoxMaxHeight: _0x4c1a13 / 2
    });
    const _0x2ed9ae = Object.assign({}, _0x14aff1);
    Jo(_0x2ed9ae, nt(_0x25b08c));
    const _0x167fa2 = Object.assign({
      maxPadding: _0x2ed9ae,
      w: _0x321c05,
      h: _0x4c1a13,
      x: _0x14aff1.left,
      y: _0x14aff1.top
    }, _0x14aff1);
    const _0x29f356 = _d(_0x443158.concat(_0xc06d8f), _0x5e6203);
    be(_0xada9c4.fullSize, _0x167fa2, _0x5e6203, _0x29f356);
    be(_0x443158, _0x167fa2, _0x5e6203, _0x29f356);
    if (be(_0xc06d8f, _0x167fa2, _0x5e6203, _0x29f356)) {
      be(_0x443158, _0x167fa2, _0x5e6203, _0x29f356);
    }
    vd(_0x167fa2);
    Ts(_0xada9c4.leftAndTop, _0x167fa2, _0x5e6203, _0x29f356);
    _0x167fa2.x += _0x167fa2.w;
    _0x167fa2.y += _0x167fa2.h;
    Ts(_0xada9c4.rightAndBottom, _0x167fa2, _0x5e6203, _0x29f356);
    _0x5cfbcf.chartArea = {
      left: _0x167fa2.left,
      top: _0x167fa2.top,
      right: _0x167fa2.left + _0x167fa2.w,
      bottom: _0x167fa2.top + _0x167fa2.h,
      height: _0x167fa2.h,
      width: _0x167fa2.w
    };
    q(_0xada9c4.chartArea, _0x5aba53 => {
      const _0x528a18 = _0x5aba53.box;
      Object.assign(_0x528a18, _0x5cfbcf.chartArea);
      _0x528a18.update(_0x167fa2.w, _0x167fa2.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class tr {
  acquireContext(_0x3897d9, _0x56ffe1) {}
  releaseContext(_0x25fa20) {
    return false;
  }
  addEventListener(_0x50eae4, _0xb415bd, _0x13aff5) {}
  removeEventListener(_0x52fa8a, _0x4c17b0, _0x3c71b0) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(_0xe631fb, _0x1f0171, _0x5f47bf, _0x80c51b) {
    _0x1f0171 = Math.max(0, _0x1f0171 || _0xe631fb.width);
    _0x5f47bf = _0x5f47bf || _0xe631fb.height;
    return {
      width: _0x1f0171,
      height: Math.max(0, _0x80c51b ? Math.floor(_0x1f0171 / _0x80c51b) : _0x5f47bf)
    };
  }
  isAttached(_0x33d317) {
    return true;
  }
  updateConfig(_0x3a5d58) {}
}
class wd extends tr {
  acquireContext(_0x4d6ff9) {
    return _0x4d6ff9 && _0x4d6ff9.getContext && _0x4d6ff9.getContext("2d") || null;
  }
  updateConfig(_0x29f2c0) {
    _0x29f2c0.options.animation = false;
  }
}
const ri = "$chartjs";
const kd = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
};
const Es = _0x5a0208 => _0x5a0208 === null || _0x5a0208 === "";
function $d(_0x59c40c, _0x50e326) {
  const _0x5959c0 = _0x59c40c.style;
  const _0x3e0972 = _0x59c40c.getAttribute("height");
  const _0x5b2889 = _0x59c40c.getAttribute("width");
  _0x59c40c[ri] = {
    initial: {
      height: _0x3e0972,
      width: _0x5b2889,
      style: {
        display: _0x5959c0.display,
        height: _0x5959c0.height,
        width: _0x5959c0.width
      }
    }
  };
  _0x5959c0.display = _0x5959c0.display || "block";
  _0x5959c0.boxSizing = _0x5959c0.boxSizing || "border-box";
  if (Es(_0x5b2889)) {
    const _0x426951 = xs(_0x59c40c, "width");
    if (_0x426951 !== undefined) {
      _0x59c40c.width = _0x426951;
    }
  }
  if (Es(_0x3e0972)) {
    if (_0x59c40c.style.height === "") {
      _0x59c40c.height = _0x59c40c.width / (_0x50e326 || 2);
    } else {
      const _0x1869b3 = xs(_0x59c40c, "height");
      if (_0x1869b3 !== undefined) {
        _0x59c40c.height = _0x1869b3;
      }
    }
  }
  return _0x59c40c;
}
const er = Oh ? {
  passive: true
} : false;
function Md(_0x1bc976, _0x8837e1, _0x4f79cb) {
  if (_0x1bc976) {
    _0x1bc976.addEventListener(_0x8837e1, _0x4f79cb, er);
  }
}
function Sd(_0x43236c, _0x45ac53, _0x1fb921) {
  if (_0x43236c && _0x43236c.canvas) {
    _0x43236c.canvas.removeEventListener(_0x45ac53, _0x1fb921, er);
  }
}
function Cd(_0x5921b6, _0x1116fb) {
  const _0x55d77a = kd[_0x5921b6.type] || _0x5921b6.type;
  const {
    x: _0x11d3b7,
    y: _0x1bdf20
  } = Nt(_0x5921b6, _0x1116fb);
  return {
    type: _0x55d77a,
    chart: _0x1116fb,
    native: _0x5921b6,
    x: _0x11d3b7 !== undefined ? _0x11d3b7 : null,
    y: _0x1bdf20 !== undefined ? _0x1bdf20 : null
  };
}
function yi(_0x4177b5, _0x8d9985) {
  for (const _0xb7c25f of _0x4177b5) {
    if (_0xb7c25f === _0x8d9985 || _0xb7c25f.contains(_0x8d9985)) {
      return true;
    }
  }
}
function Pd(_0x2712d2, _0x134606, _0xbea37e) {
  const _0x16fd4a = _0x2712d2.canvas;
  const _0x4b8cef = new MutationObserver(_0x1e3287 => {
    let _0x15bcb5 = false;
    for (const _0x5f176d of _0x1e3287) {
      _0x15bcb5 = _0x15bcb5 || yi(_0x5f176d.addedNodes, _0x16fd4a);
      _0x15bcb5 = _0x15bcb5 && !yi(_0x5f176d.removedNodes, _0x16fd4a);
    }
    if (_0x15bcb5) {
      _0xbea37e();
    }
  });
  _0x4b8cef.observe(document, {
    childList: true,
    subtree: true
  });
  return _0x4b8cef;
}
function Od(_0x493d21, _0x4e1c15, _0x55f15a) {
  const _0x264bd8 = _0x493d21.canvas;
  const _0x531018 = new MutationObserver(_0x10e11f => {
    let _0x226161 = false;
    for (const _0x3ccdab of _0x10e11f) {
      _0x226161 = _0x226161 || yi(_0x3ccdab.removedNodes, _0x264bd8);
      _0x226161 = _0x226161 && !yi(_0x3ccdab.addedNodes, _0x264bd8);
    }
    if (_0x226161) {
      _0x55f15a();
    }
  });
  _0x531018.observe(document, {
    childList: true,
    subtree: true
  });
  return _0x531018;
}
const Ce = new Map();
let Rs = 0;
function ir() {
  const _0x54b740 = window.devicePixelRatio;
  if (_0x54b740 !== Rs) {
    Rs = _0x54b740;
    Ce.forEach((_0x2c15f0, _0x2adf01) => {
      if (_0x2adf01.currentDevicePixelRatio !== _0x54b740) {
        _0x2c15f0();
      }
    });
  }
}
function Ad(_0x534a14, _0x5482ca) {
  if (!Ce.size) {
    window.addEventListener("resize", ir);
  }
  Ce.set(_0x534a14, _0x5482ca);
}
function Dd(_0x17b4ee) {
  Ce.delete(_0x17b4ee);
  if (!Ce.size) {
    window.removeEventListener("resize", ir);
  }
}
function Ld(_0x462214, _0x503e45, _0x3f9eab) {
  const _0x479975 = _0x462214.canvas;
  const _0x4b3298 = _0x479975 && In(_0x479975);
  if (!_0x4b3298) {
    return;
  }
  const _0x2178ee = No((_0x2f6f0e, _0x35eb5e) => {
    const _0x1f3812 = _0x4b3298.clientWidth;
    _0x3f9eab(_0x2f6f0e, _0x35eb5e);
    if (_0x1f3812 < _0x4b3298.clientWidth) {
      _0x3f9eab();
    }
  }, window);
  const _0x5e9721 = new ResizeObserver(_0x5f280e => {
    const _0x53a479 = _0x5f280e[0];
    const _0x3289fc = _0x53a479.contentRect.width;
    const _0x293e81 = _0x53a479.contentRect.height;
    if (_0x3289fc !== 0 || _0x293e81 !== 0) {
      _0x2178ee(_0x3289fc, _0x293e81);
    }
  });
  _0x5e9721.observe(_0x4b3298);
  Ad(_0x462214, _0x2178ee);
  return _0x5e9721;
}
function Qi(_0x2482cb, _0x59cad6, _0x232592) {
  if (_0x232592) {
    _0x232592.disconnect();
  }
  if (_0x59cad6 === "resize") {
    Dd(_0x2482cb);
  }
}
function Td(_0x5d4b6e, _0x3052a6, _0x54e4e7) {
  const _0x21abb4 = _0x5d4b6e.canvas;
  const _0x831a50 = No(_0x161a60 => {
    if (_0x5d4b6e.ctx !== null) {
      _0x54e4e7(Cd(_0x161a60, _0x5d4b6e));
    }
  }, _0x5d4b6e);
  Md(_0x21abb4, _0x3052a6, _0x831a50);
  return _0x831a50;
}
class Ed extends tr {
  acquireContext(_0x3f8dd8, _0x38e536) {
    const _0x50dbe2 = _0x3f8dd8 && _0x3f8dd8.getContext && _0x3f8dd8.getContext("2d");
    if (_0x50dbe2 && _0x50dbe2.canvas === _0x3f8dd8) {
      $d(_0x3f8dd8, _0x38e536);
      return _0x50dbe2;
    } else {
      return null;
    }
  }
  releaseContext(_0x566d10) {
    const _0x5b6f9d = _0x566d10.canvas;
    if (!_0x5b6f9d[ri]) {
      return false;
    }
    const _0x441066 = _0x5b6f9d[ri].initial;
    ["height", "width"].forEach(_0x44cdee => {
      const _0x37671d = _0x441066[_0x44cdee];
      if (I(_0x37671d)) {
        _0x5b6f9d.removeAttribute(_0x44cdee);
      } else {
        _0x5b6f9d.setAttribute(_0x44cdee, _0x37671d);
      }
    });
    const _0x2fb806 = _0x441066.style || {};
    Object.keys(_0x2fb806).forEach(_0x434c55 => {
      _0x5b6f9d.style[_0x434c55] = _0x2fb806[_0x434c55];
    });
    _0x5b6f9d.width = _0x5b6f9d.width;
    delete _0x5b6f9d[ri];
    return true;
  }
  addEventListener(_0x54b203, _0x2573ce, _0x5afede) {
    this.removeEventListener(_0x54b203, _0x2573ce);
    const _0x453f50 = _0x54b203.$proxies ||= {};
    const _0x3661b6 = {
      attach: Pd,
      detach: Od,
      resize: Ld
    }[_0x2573ce] || Td;
    _0x453f50[_0x2573ce] = _0x3661b6(_0x54b203, _0x2573ce, _0x5afede);
  }
  removeEventListener(_0x3842e8, _0x44e878) {
    const _0x2a4a5a = _0x3842e8.$proxies ||= {};
    const _0x45027e = _0x2a4a5a[_0x44e878];
    if (!_0x45027e) {
      return;
    }
    ({
      attach: Qi,
      detach: Qi,
      resize: Qi
    }[_0x44e878] || Sd)(_0x3842e8, _0x44e878, _0x45027e);
    _0x2a4a5a[_0x44e878] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(_0x459c98, _0x28cc96, _0x133b5d, _0x3c117f) {
    return Ph(_0x459c98, _0x28cc96, _0x133b5d, _0x3c117f);
  }
  isAttached(_0x13f405) {
    const _0x283ee9 = In(_0x13f405);
    return !!_0x283ee9 && !!_0x283ee9.isConnected;
  }
}
function Rd(_0x10f737) {
  if (!Rn() || typeof OffscreenCanvas !== "undefined" && _0x10f737 instanceof OffscreenCanvas) {
    return wd;
  } else {
    return Ed;
  }
}
let Re = class {
  static defaults = {};
  static defaultRoutes = undefined;
  x;
  y;
  active = false;
  options;
  $animations;
  tooltipPosition(_0xda7b64) {
    const {
      x: _0x274933,
      y: _0x778bff
    } = this.getProps(["x", "y"], _0xda7b64);
    return {
      x: _0x274933,
      y: _0x778bff
    };
  }
  hasValue() {
    return bi(this.x) && bi(this.y);
  }
  getProps(_0x520126, _0x424862) {
    const _0x3bb548 = this.$animations;
    if (!_0x424862 || !_0x3bb548) {
      return this;
    }
    const _0x4f5b09 = {};
    _0x520126.forEach(_0x35d30f => {
      _0x4f5b09[_0x35d30f] = _0x3bb548[_0x35d30f] && _0x3bb548[_0x35d30f].active() ? _0x3bb548[_0x35d30f]._to : this[_0x35d30f];
    });
    return _0x4f5b09;
  }
};
function Id(_0x24f275, _0x3d6908) {
  const _0x3c23fe = _0x24f275.options.ticks;
  const _0x3d3747 = Fd(_0x24f275);
  const _0x53441d = Math.min(_0x3c23fe.maxTicksLimit || _0x3d3747, _0x3d3747);
  const _0x465377 = _0x3c23fe.major.enabled ? Bd(_0x3d6908) : [];
  const _0x3bc29f = _0x465377.length;
  const _0x5d2f54 = _0x465377[0];
  const _0x50b322 = _0x465377[_0x3bc29f - 1];
  const _0x2d07bd = [];
  if (_0x3bc29f > _0x53441d) {
    jd(_0x3d6908, _0x2d07bd, _0x465377, _0x3bc29f / _0x53441d);
    return _0x2d07bd;
  }
  const _0x46a4d1 = zd(_0x465377, _0x3d6908, _0x53441d);
  if (_0x3bc29f > 0) {
    let _0x5d01af;
    let _0x4ce6c5;
    const _0x4977ae = _0x3bc29f > 1 ? Math.round((_0x50b322 - _0x5d2f54) / (_0x3bc29f - 1)) : null;
    Qe(_0x3d6908, _0x2d07bd, _0x46a4d1, I(_0x4977ae) ? 0 : _0x5d2f54 - _0x4977ae, _0x5d2f54);
    _0x5d01af = 0;
    _0x4ce6c5 = _0x3bc29f - 1;
    for (; _0x5d01af < _0x4ce6c5; _0x5d01af++) {
      Qe(_0x3d6908, _0x2d07bd, _0x46a4d1, _0x465377[_0x5d01af], _0x465377[_0x5d01af + 1]);
    }
    Qe(_0x3d6908, _0x2d07bd, _0x46a4d1, _0x50b322, I(_0x4977ae) ? _0x3d6908.length : _0x50b322 + _0x4977ae);
    return _0x2d07bd;
  }
  Qe(_0x3d6908, _0x2d07bd, _0x46a4d1);
  return _0x2d07bd;
}
function Fd(_0x16a621) {
  const _0x51a5b8 = _0x16a621.options.offset;
  const _0x5adea4 = _0x16a621._tickSize();
  const _0x267708 = _0x16a621._length / _0x5adea4 + (_0x51a5b8 ? 0 : 1);
  const _0x10bc7b = _0x16a621._maxLength / _0x5adea4;
  return Math.floor(Math.min(_0x267708, _0x10bc7b));
}
function zd(_0x5273d7, _0x344471, _0x397c8e) {
  const _0x3056f8 = Nd(_0x5273d7);
  const _0x365ee3 = _0x344471.length / _0x397c8e;
  if (!_0x3056f8) {
    return Math.max(_0x365ee3, 1);
  }
  const _0x1d86bf = Bc(_0x3056f8);
  for (let _0x4b4fbd = 0, _0x5992a5 = _0x1d86bf.length - 1; _0x4b4fbd < _0x5992a5; _0x4b4fbd++) {
    const _0x14f6f0 = _0x1d86bf[_0x4b4fbd];
    if (_0x14f6f0 > _0x365ee3) {
      return _0x14f6f0;
    }
  }
  return Math.max(_0x365ee3, 1);
}
function Bd(_0x77462b) {
  const _0x1fa801 = [];
  let _0x5e5e09;
  let _0x2a0c14;
  _0x5e5e09 = 0;
  _0x2a0c14 = _0x77462b.length;
  for (; _0x5e5e09 < _0x2a0c14; _0x5e5e09++) {
    if (_0x77462b[_0x5e5e09].major) {
      _0x1fa801.push(_0x5e5e09);
    }
  }
  return _0x1fa801;
}
function jd(_0x364a0b, _0x2a3d07, _0x419394, _0xd0a47e) {
  let _0x325aed = 0;
  let _0x376bf1 = _0x419394[0];
  let _0x1384fc;
  _0xd0a47e = Math.ceil(_0xd0a47e);
  _0x1384fc = 0;
  for (; _0x1384fc < _0x364a0b.length; _0x1384fc++) {
    if (_0x1384fc === _0x376bf1) {
      _0x2a3d07.push(_0x364a0b[_0x1384fc]);
      _0x325aed++;
      _0x376bf1 = _0x419394[_0x325aed * _0xd0a47e];
    }
  }
}
function Qe(_0x265c8a, _0x13816e, _0x18ecae, _0x51ea68, _0x45a998) {
  const _0x15cfab = T(_0x51ea68, 0);
  const _0x15c96d = Math.min(T(_0x45a998, _0x265c8a.length), _0x265c8a.length);
  let _0xaca64a = 0;
  let _0x3b6a12;
  let _0x294ae9;
  let _0x39bde0;
  _0x18ecae = Math.ceil(_0x18ecae);
  if (_0x45a998) {
    _0x3b6a12 = _0x45a998 - _0x51ea68;
    _0x18ecae = _0x3b6a12 / Math.floor(_0x3b6a12 / _0x18ecae);
  }
  _0x39bde0 = _0x15cfab;
  while (_0x39bde0 < 0) {
    _0xaca64a++;
    _0x39bde0 = Math.round(_0x15cfab + _0xaca64a * _0x18ecae);
  }
  for (_0x294ae9 = Math.max(_0x15cfab, 0); _0x294ae9 < _0x15c96d; _0x294ae9++) {
    if (_0x294ae9 === _0x39bde0) {
      _0x13816e.push(_0x265c8a[_0x294ae9]);
      _0xaca64a++;
      _0x39bde0 = Math.round(_0x15cfab + _0xaca64a * _0x18ecae);
    }
  }
}
function Nd(_0x73174c) {
  const _0x34b0b5 = _0x73174c.length;
  let _0x11bfac;
  let _0x55986f;
  if (_0x34b0b5 < 2) {
    return false;
  }
  _0x55986f = _0x73174c[0];
  _0x11bfac = 1;
  for (; _0x11bfac < _0x34b0b5; ++_0x11bfac) {
    if (_0x73174c[_0x11bfac] - _0x73174c[_0x11bfac - 1] !== _0x55986f) {
      return false;
    }
  }
  return _0x55986f;
}
const Hd = _0x3482c8 => _0x3482c8 === "left" ? "right" : _0x3482c8 === "right" ? "left" : _0x3482c8;
const Is = (_0x18d9e2, _0x3c441c, _0x4bf970) => _0x3c441c === "top" || _0x3c441c === "left" ? _0x18d9e2[_0x3c441c] + _0x4bf970 : _0x18d9e2[_0x3c441c] - _0x4bf970;
const Fs = (_0x100230, _0x177243) => Math.min(_0x177243 || _0x100230, _0x100230);
function zs(_0x3693be, _0x15ce68) {
  const _0x59d708 = [];
  const _0x58496b = _0x3693be.length / _0x15ce68;
  const _0x529e39 = _0x3693be.length;
  let _0x3ba862 = 0;
  for (; _0x3ba862 < _0x529e39; _0x3ba862 += _0x58496b) {
    _0x59d708.push(_0x3693be[Math.floor(_0x3ba862)]);
  }
  return _0x59d708;
}
function Wd(_0x49a453, _0x512125, _0x43a548) {
  const _0x107e4d = _0x49a453.ticks.length;
  const _0x1353f3 = Math.min(_0x512125, _0x107e4d - 1);
  const _0x402f15 = _0x49a453._startPixel;
  const _0x39362a = _0x49a453._endPixel;
  const _0x6c72a1 = 0.000001;
  let _0x537e7b = _0x49a453.getPixelForTick(_0x1353f3);
  let _0x2326e6;
  if (!_0x43a548 || !(_0x107e4d === 1 ? _0x2326e6 = Math.max(_0x537e7b - _0x402f15, _0x39362a - _0x537e7b) : _0x512125 === 0 ? _0x2326e6 = (_0x49a453.getPixelForTick(1) - _0x537e7b) / 2 : _0x2326e6 = (_0x537e7b - _0x49a453.getPixelForTick(_0x1353f3 - 1)) / 2, _0x537e7b += _0x1353f3 < _0x512125 ? _0x2326e6 : -_0x2326e6, _0x537e7b < _0x402f15 - _0x6c72a1 || _0x537e7b > _0x39362a + _0x6c72a1)) {
    return _0x537e7b;
  }
}
function Vd(_0x59227a, _0x1f1ccf) {
  q(_0x59227a, _0x175af4 => {
    const _0x71d81c = _0x175af4.gc;
    const _0x1ffd4c = _0x71d81c.length / 2;
    let _0x437402;
    if (_0x1ffd4c > _0x1f1ccf) {
      for (_0x437402 = 0; _0x437402 < _0x1ffd4c; ++_0x437402) {
        delete _0x175af4.data[_0x71d81c[_0x437402]];
      }
      _0x71d81c.splice(0, _0x1ffd4c);
    }
  });
}
function ue(_0x452b1c) {
  if (_0x452b1c.drawTicks) {
    return _0x452b1c.tickLength;
  } else {
    return 0;
  }
}
function Bs(_0x2d4f54, _0x15830e) {
  if (!_0x2d4f54.display) {
    return 0;
  }
  const _0x41b5b6 = rt(_0x2d4f54.font, _0x15830e);
  const _0x34dc2c = nt(_0x2d4f54.padding);
  return (B(_0x2d4f54.text) ? _0x2d4f54.text.length : 1) * _0x41b5b6.lineHeight + _0x34dc2c.height;
}
function Ud(_0x1fe70f, _0x3ff4e7) {
  return oe(_0x1fe70f, {
    scale: _0x3ff4e7,
    type: "scale"
  });
}
function Yd(_0x3f018b, _0x1320e8, _0x44a4ed) {
  return oe(_0x3f018b, {
    tick: _0x44a4ed,
    index: _0x1320e8,
    type: "tick"
  });
}
function Kd(_0x3bca9a, _0x14acda, _0x48210a) {
  let _0xacd14b = Cn(_0x3bca9a);
  if (_0x48210a && _0x14acda !== "right" || !_0x48210a && _0x14acda === "right") {
    _0xacd14b = Hd(_0xacd14b);
  }
  return _0xacd14b;
}
function qd(_0x10d512, _0x34a62f, _0x2e268e, _0x588595) {
  const {
    top: _0x5f13c4,
    left: _0x5d194e,
    bottom: _0x3bbb27,
    right: _0x484475,
    chart: _0x12be93
  } = _0x10d512;
  const {
    chartArea: _0xa65ba4,
    scales: _0x3141ae
  } = _0x12be93;
  let _0x250c06 = 0;
  let _0x382455;
  let _0x361de2;
  let _0x4de73c;
  const _0x5142b9 = _0x3bbb27 - _0x5f13c4;
  const _0x1b45c4 = _0x484475 - _0x5d194e;
  if (_0x10d512.isHorizontal()) {
    _0x361de2 = X(_0x588595, _0x5d194e, _0x484475);
    if (L(_0x2e268e)) {
      const _0x904f56 = Object.keys(_0x2e268e)[0];
      const _0xed304b = _0x2e268e[_0x904f56];
      _0x4de73c = _0x3141ae[_0x904f56].getPixelForValue(_0xed304b) + _0x5142b9 - _0x34a62f;
    } else if (_0x2e268e === "center") {
      _0x4de73c = (_0xa65ba4.bottom + _0xa65ba4.top) / 2 + _0x5142b9 - _0x34a62f;
    } else {
      _0x4de73c = Is(_0x10d512, _0x2e268e, _0x34a62f);
    }
    _0x382455 = _0x484475 - _0x5d194e;
  } else {
    if (L(_0x2e268e)) {
      const _0x415df4 = Object.keys(_0x2e268e)[0];
      const _0x47e3f6 = _0x2e268e[_0x415df4];
      _0x361de2 = _0x3141ae[_0x415df4].getPixelForValue(_0x47e3f6) - _0x1b45c4 + _0x34a62f;
    } else if (_0x2e268e === "center") {
      _0x361de2 = (_0xa65ba4.left + _0xa65ba4.right) / 2 - _0x1b45c4 + _0x34a62f;
    } else {
      _0x361de2 = Is(_0x10d512, _0x2e268e, _0x34a62f);
    }
    _0x4de73c = X(_0x588595, _0x3bbb27, _0x5f13c4);
    _0x250c06 = _0x2e268e === "left" ? -Q : Q;
  }
  return {
    titleX: _0x361de2,
    titleY: _0x4de73c,
    maxWidth: _0x382455,
    rotation: _0x250c06
  };
}
class Kt extends Re {
  constructor(_0x4551fb) {
    super();
    this.id = _0x4551fb.id;
    this.type = _0x4551fb.type;
    this.options = undefined;
    this.ctx = _0x4551fb.ctx;
    this.chart = _0x4551fb.chart;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.axis = undefined;
    this.labelRotation = undefined;
    this.min = undefined;
    this.max = undefined;
    this._range = undefined;
    this.ticks = [];
    this._gridLineItems = null;
    this._labelItems = null;
    this._labelSizes = null;
    this._length = 0;
    this._maxLength = 0;
    this._longestTextCache = {};
    this._startPixel = undefined;
    this._endPixel = undefined;
    this._reversePixels = false;
    this._userMax = undefined;
    this._userMin = undefined;
    this._suggestedMax = undefined;
    this._suggestedMin = undefined;
    this._ticksLength = 0;
    this._borderValue = 0;
    this._cache = {};
    this._dataLimitsCached = false;
    this.$context = undefined;
  }
  init(_0x3b4f92) {
    this.options = _0x3b4f92.setContext(this.getContext());
    this.axis = _0x3b4f92.axis;
    this._userMin = this.parse(_0x3b4f92.min);
    this._userMax = this.parse(_0x3b4f92.max);
    this._suggestedMin = this.parse(_0x3b4f92.suggestedMin);
    this._suggestedMax = this.parse(_0x3b4f92.suggestedMax);
  }
  parse(_0x121726, _0x12b873) {
    return _0x121726;
  }
  getUserBounds() {
    let {
      _userMin: _0x4a9ba1,
      _userMax: _0x5895ab,
      _suggestedMin: _0x38a4cf,
      _suggestedMax: _0x113c94
    } = this;
    _0x4a9ba1 = et(_0x4a9ba1, Number.POSITIVE_INFINITY);
    _0x5895ab = et(_0x5895ab, Number.NEGATIVE_INFINITY);
    _0x38a4cf = et(_0x38a4cf, Number.POSITIVE_INFINITY);
    _0x113c94 = et(_0x113c94, Number.NEGATIVE_INFINITY);
    return {
      min: et(_0x4a9ba1, _0x38a4cf),
      max: et(_0x5895ab, _0x113c94),
      minDefined: U(_0x4a9ba1),
      maxDefined: U(_0x5895ab)
    };
  }
  getMinMax(_0x44828c) {
    let {
      min: _0x3fa406,
      max: _0x37ce63,
      minDefined: _0x3228cf,
      maxDefined: _0x256573
    } = this.getUserBounds();
    let _0x276690;
    if (_0x3228cf && _0x256573) {
      return {
        min: _0x3fa406,
        max: _0x37ce63
      };
    }
    const _0x29e842 = this.getMatchingVisibleMetas();
    for (let _0x17480d = 0, _0x8d8d34 = _0x29e842.length; _0x17480d < _0x8d8d34; ++_0x17480d) {
      _0x276690 = _0x29e842[_0x17480d].controller.getMinMax(this, _0x44828c);
      if (!_0x3228cf) {
        _0x3fa406 = Math.min(_0x3fa406, _0x276690.min);
      }
      if (!_0x256573) {
        _0x37ce63 = Math.max(_0x37ce63, _0x276690.max);
      }
    }
    _0x3fa406 = _0x256573 && _0x3fa406 > _0x37ce63 ? _0x37ce63 : _0x3fa406;
    _0x37ce63 = _0x3228cf && _0x3fa406 > _0x37ce63 ? _0x3fa406 : _0x37ce63;
    return {
      min: et(_0x3fa406, et(_0x37ce63, _0x3fa406)),
      max: et(_0x37ce63, et(_0x3fa406, _0x37ce63))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const _0x54b288 = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? _0x54b288.xLabels : _0x54b288.yLabels) || _0x54b288.labels || [];
  }
  getLabelItems(_0xc2220c = this.chart.chartArea) {
    return this._labelItems ||= this._computeLabelItems(_0xc2220c);
  }
  beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  }
  beforeUpdate() {
    F(this.options.beforeUpdate, [this]);
  }
  update(_0x1f981c, _0x4aa878, _0x29050c) {
    const {
      beginAtZero: _0x3a4cac,
      grace: _0x195f28,
      ticks: _0x4ed25b
    } = this.options;
    const _0x3c918e = _0x4ed25b.sampleSize;
    this.beforeUpdate();
    this.maxWidth = _0x1f981c;
    this.maxHeight = _0x4aa878;
    this._margins = _0x29050c = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, _0x29050c);
    this.ticks = null;
    this._labelSizes = null;
    this._gridLineItems = null;
    this._labelItems = null;
    this.beforeSetDimensions();
    this.setDimensions();
    this.afterSetDimensions();
    this._maxLength = this.isHorizontal() ? this.width + _0x29050c.left + _0x29050c.right : this.height + _0x29050c.top + _0x29050c.bottom;
    if (!this._dataLimitsCached) {
      this.beforeDataLimits();
      this.determineDataLimits();
      this.afterDataLimits();
      this._range = fh(this, _0x195f28, _0x3a4cac);
      this._dataLimitsCached = true;
    }
    this.beforeBuildTicks();
    this.ticks = this.buildTicks() || [];
    this.afterBuildTicks();
    const _0xdde1da = _0x3c918e < this.ticks.length;
    this._convertTicksToLabels(_0xdde1da ? zs(this.ticks, _0x3c918e) : this.ticks);
    this.configure();
    this.beforeCalculateLabelRotation();
    this.calculateLabelRotation();
    this.afterCalculateLabelRotation();
    if (_0x4ed25b.display && (_0x4ed25b.autoSkip || _0x4ed25b.source === "auto")) {
      this.ticks = Id(this, this.ticks);
      this._labelSizes = null;
      this.afterAutoSkip();
    }
    if (_0xdde1da) {
      this._convertTicksToLabels(this.ticks);
    }
    this.beforeFit();
    this.fit();
    this.afterFit();
    this.afterUpdate();
  }
  configure() {
    let _0x1bd4a3 = this.options.reverse;
    let _0x5ca25e;
    let _0x487aa4;
    if (this.isHorizontal()) {
      _0x5ca25e = this.left;
      _0x487aa4 = this.right;
    } else {
      _0x5ca25e = this.top;
      _0x487aa4 = this.bottom;
      _0x1bd4a3 = !_0x1bd4a3;
    }
    this._startPixel = _0x5ca25e;
    this._endPixel = _0x487aa4;
    this._reversePixels = _0x1bd4a3;
    this._length = _0x487aa4 - _0x5ca25e;
    this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    F(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    F(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = 0;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = 0;
      this.bottom = this.height;
    }
    this.paddingLeft = 0;
    this.paddingTop = 0;
    this.paddingRight = 0;
    this.paddingBottom = 0;
  }
  afterSetDimensions() {
    F(this.options.afterSetDimensions, [this]);
  }
  _callHooks(_0x5c1ab7) {
    this.chart.notifyPlugins(_0x5c1ab7, this.getContext());
    F(this.options[_0x5c1ab7], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    F(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(_0x4af453) {
    const _0x33191f = this.options.ticks;
    let _0x4ef083;
    let _0x2f5723;
    let _0x2bd2af;
    _0x4ef083 = 0;
    _0x2f5723 = _0x4af453.length;
    for (; _0x4ef083 < _0x2f5723; _0x4ef083++) {
      _0x2bd2af = _0x4af453[_0x4ef083];
      _0x2bd2af.label = F(_0x33191f.callback, [_0x2bd2af.value, _0x4ef083, _0x4af453], this);
    }
  }
  afterTickToLabelConversion() {
    F(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    F(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const _0x3e0aa4 = this.options;
    const _0x4c64a8 = _0x3e0aa4.ticks;
    const _0x3567aa = Fs(this.ticks.length, _0x3e0aa4.ticks.maxTicksLimit);
    const _0x5d4b1d = _0x4c64a8.minRotation || 0;
    const _0x3350b0 = _0x4c64a8.maxRotation;
    let _0x1718c4 = _0x5d4b1d;
    let _0x2f1b90;
    let _0x424f42;
    let _0x948565;
    if (!this._isVisible() || !_0x4c64a8.display || _0x5d4b1d >= _0x3350b0 || _0x3567aa <= 1 || !this.isHorizontal()) {
      this.labelRotation = _0x5d4b1d;
      return;
    }
    const _0x270938 = this._getLabelSizes();
    const _0x4df4e1 = _0x270938.widest.width;
    const _0x10b92e = _0x270938.highest.height;
    const _0x159369 = $t(this.chart.width - _0x4df4e1, 0, this.maxWidth);
    _0x2f1b90 = _0x3e0aa4.offset ? this.maxWidth / _0x3567aa : _0x159369 / (_0x3567aa - 1);
    if (_0x4df4e1 + 6 > _0x2f1b90) {
      _0x2f1b90 = _0x159369 / (_0x3567aa - (_0x3e0aa4.offset ? 0.5 : 1));
      _0x424f42 = this.maxHeight - ue(_0x3e0aa4.grid) - _0x4c64a8.padding - Bs(_0x3e0aa4.title, this.chart.options.font);
      _0x948565 = Math.sqrt(_0x4df4e1 * _0x4df4e1 + _0x10b92e * _0x10b92e);
      _0x1718c4 = Mn(Math.min(Math.asin($t((_0x270938.highest.height + 6) / _0x2f1b90, -1, 1)), Math.asin($t(_0x424f42 / _0x948565, -1, 1)) - Math.asin($t(_0x10b92e / _0x948565, -1, 1))));
      _0x1718c4 = Math.max(_0x5d4b1d, Math.min(_0x3350b0, _0x1718c4));
    }
    this.labelRotation = _0x1718c4;
  }
  afterCalculateLabelRotation() {
    F(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    F(this.options.beforeFit, [this]);
  }
  fit() {
    const _0x2f87e2 = {
      width: 0,
      height: 0
    };
    const {
      chart: _0xb8fb1c,
      options: {
        ticks: _0x1415c6,
        title: _0x4ba9e7,
        grid: _0xbaff78
      }
    } = this;
    const _0x18e588 = this._isVisible();
    const _0x544399 = this.isHorizontal();
    if (_0x18e588) {
      const _0x4ec654 = Bs(_0x4ba9e7, _0xb8fb1c.options.font);
      if (_0x544399) {
        _0x2f87e2.width = this.maxWidth;
        _0x2f87e2.height = ue(_0xbaff78) + _0x4ec654;
      } else {
        _0x2f87e2.height = this.maxHeight;
        _0x2f87e2.width = ue(_0xbaff78) + _0x4ec654;
      }
      if (_0x1415c6.display && this.ticks.length) {
        const {
          first: _0x10f952,
          last: _0x2f37f,
          widest: _0x2b99e5,
          highest: _0xcbb7e5
        } = this._getLabelSizes();
        const _0x162bbb = _0x1415c6.padding * 2;
        const _0x1c1cff = ct(this.labelRotation);
        const _0x4c24c2 = Math.cos(_0x1c1cff);
        const _0x45a9f3 = Math.sin(_0x1c1cff);
        if (_0x544399) {
          const _0x295dc3 = _0x1415c6.mirror ? 0 : _0x45a9f3 * _0x2b99e5.width + _0x4c24c2 * _0xcbb7e5.height;
          _0x2f87e2.height = Math.min(this.maxHeight, _0x2f87e2.height + _0x295dc3 + _0x162bbb);
        } else {
          const _0x17d0df = _0x1415c6.mirror ? 0 : _0x4c24c2 * _0x2b99e5.width + _0x45a9f3 * _0xcbb7e5.height;
          _0x2f87e2.width = Math.min(this.maxWidth, _0x2f87e2.width + _0x17d0df + _0x162bbb);
        }
        this._calculatePadding(_0x10f952, _0x2f37f, _0x45a9f3, _0x4c24c2);
      }
    }
    this._handleMargins();
    if (_0x544399) {
      this.width = this._length = _0xb8fb1c.width - this._margins.left - this._margins.right;
      this.height = _0x2f87e2.height;
    } else {
      this.width = _0x2f87e2.width;
      this.height = this._length = _0xb8fb1c.height - this._margins.top - this._margins.bottom;
    }
  }
  _calculatePadding(_0x3869a6, _0x7a98a1, _0x24f105, _0x425609) {
    const {
      ticks: {
        align: _0x27a93b,
        padding: _0x3ad847
      },
      position: _0x23c1ef
    } = this.options;
    const _0x249510 = this.labelRotation !== 0;
    const _0x14b1a3 = _0x23c1ef !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const _0x3125ae = this.getPixelForTick(0) - this.left;
      const _0x5d4d71 = this.right - this.getPixelForTick(this.ticks.length - 1);
      let _0x46e888 = 0;
      let _0x327b07 = 0;
      if (_0x249510) {
        if (_0x14b1a3) {
          _0x46e888 = _0x425609 * _0x3869a6.width;
          _0x327b07 = _0x24f105 * _0x7a98a1.height;
        } else {
          _0x46e888 = _0x24f105 * _0x3869a6.height;
          _0x327b07 = _0x425609 * _0x7a98a1.width;
        }
      } else if (_0x27a93b === "start") {
        _0x327b07 = _0x7a98a1.width;
      } else if (_0x27a93b === "end") {
        _0x46e888 = _0x3869a6.width;
      } else if (_0x27a93b !== "inner") {
        _0x46e888 = _0x3869a6.width / 2;
        _0x327b07 = _0x7a98a1.width / 2;
      }
      this.paddingLeft = Math.max((_0x46e888 - _0x3125ae + _0x3ad847) * this.width / (this.width - _0x3125ae), 0);
      this.paddingRight = Math.max((_0x327b07 - _0x5d4d71 + _0x3ad847) * this.width / (this.width - _0x5d4d71), 0);
    } else {
      let _0x5ce6a6 = _0x7a98a1.height / 2;
      let _0x82d6c9 = _0x3869a6.height / 2;
      if (_0x27a93b === "start") {
        _0x5ce6a6 = 0;
        _0x82d6c9 = _0x3869a6.height;
      } else if (_0x27a93b === "end") {
        _0x5ce6a6 = _0x7a98a1.height;
        _0x82d6c9 = 0;
      }
      this.paddingTop = _0x5ce6a6 + _0x3ad847;
      this.paddingBottom = _0x82d6c9 + _0x3ad847;
    }
  }
  _handleMargins() {
    if (this._margins) {
      this._margins.left = Math.max(this.paddingLeft, this._margins.left);
      this._margins.top = Math.max(this.paddingTop, this._margins.top);
      this._margins.right = Math.max(this.paddingRight, this._margins.right);
      this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
    }
  }
  afterFit() {
    F(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {
      axis: _0x8436d5,
      position: _0x1fa47c
    } = this.options;
    return _0x1fa47c === "top" || _0x1fa47c === "bottom" || _0x8436d5 === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(_0x254626) {
    this.beforeTickToLabelConversion();
    this.generateTickLabels(_0x254626);
    let _0x239a5a;
    let _0x3a15ea;
    _0x239a5a = 0;
    _0x3a15ea = _0x254626.length;
    for (; _0x239a5a < _0x3a15ea; _0x239a5a++) {
      if (I(_0x254626[_0x239a5a].label)) {
        _0x254626.splice(_0x239a5a, 1);
        _0x3a15ea--;
        _0x239a5a--;
      }
    }
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let _0x4f7b2f = this._labelSizes;
    if (!_0x4f7b2f) {
      const _0x4e9a55 = this.options.ticks.sampleSize;
      let _0x529112 = this.ticks;
      if (_0x4e9a55 < _0x529112.length) {
        _0x529112 = zs(_0x529112, _0x4e9a55);
      }
      this._labelSizes = _0x4f7b2f = this._computeLabelSizes(_0x529112, _0x529112.length, this.options.ticks.maxTicksLimit);
    }
    return _0x4f7b2f;
  }
  _computeLabelSizes(_0xa03643, _0x3080a3, _0x4b3782) {
    const {
      ctx: _0x174ca7,
      _longestTextCache: _0x3933ec
    } = this;
    const _0x31b18f = [];
    const _0x3809a3 = [];
    const _0x2ad17e = Math.floor(_0x3080a3 / Fs(_0x3080a3, _0x4b3782));
    let _0x205dab = 0;
    let _0x21469c = 0;
    let _0x5a475f;
    let _0x2f9f7b;
    let _0x5446c4;
    let _0x3e2cb3;
    let _0x509da1;
    let _0x45898c;
    let _0x542370;
    let _0x4605f0;
    let _0x28004e;
    let _0x30e201;
    let _0x380e70;
    for (_0x5a475f = 0; _0x5a475f < _0x3080a3; _0x5a475f += _0x2ad17e) {
      _0x3e2cb3 = _0xa03643[_0x5a475f].label;
      _0x509da1 = this._resolveTickFontOptions(_0x5a475f);
      _0x174ca7.font = _0x45898c = _0x509da1.string;
      _0x542370 = _0x3933ec[_0x45898c] = _0x3933ec[_0x45898c] || {
        data: {},
        gc: []
      };
      _0x4605f0 = _0x509da1.lineHeight;
      _0x28004e = _0x30e201 = 0;
      if (!I(_0x3e2cb3) && !B(_0x3e2cb3)) {
        _0x28004e = xi(_0x174ca7, _0x542370.data, _0x542370.gc, _0x28004e, _0x3e2cb3);
        _0x30e201 = _0x4605f0;
      } else if (B(_0x3e2cb3)) {
        _0x2f9f7b = 0;
        _0x5446c4 = _0x3e2cb3.length;
        for (; _0x2f9f7b < _0x5446c4; ++_0x2f9f7b) {
          _0x380e70 = _0x3e2cb3[_0x2f9f7b];
          if (!I(_0x380e70) && !B(_0x380e70)) {
            _0x28004e = xi(_0x174ca7, _0x542370.data, _0x542370.gc, _0x28004e, _0x380e70);
            _0x30e201 += _0x4605f0;
          }
        }
      }
      _0x31b18f.push(_0x28004e);
      _0x3809a3.push(_0x30e201);
      _0x205dab = Math.max(_0x28004e, _0x205dab);
      _0x21469c = Math.max(_0x30e201, _0x21469c);
    }
    Vd(_0x3933ec, _0x3080a3);
    const _0x46845d = _0x31b18f.indexOf(_0x205dab);
    const _0x135720 = _0x3809a3.indexOf(_0x21469c);
    const _0x386646 = _0x59d6e4 => ({
      width: _0x31b18f[_0x59d6e4] || 0,
      height: _0x3809a3[_0x59d6e4] || 0
    });
    return {
      first: _0x386646(0),
      last: _0x386646(_0x3080a3 - 1),
      widest: _0x386646(_0x46845d),
      highest: _0x386646(_0x135720),
      widths: _0x31b18f,
      heights: _0x3809a3
    };
  }
  getLabelForValue(_0x4525ac) {
    return _0x4525ac;
  }
  getPixelForValue(_0x31abf6, _0x45bef1) {
    return NaN;
  }
  getValueForPixel(_0x5f3385) {}
  getPixelForTick(_0x3d7300) {
    const _0x23e78b = this.ticks;
    if (_0x3d7300 < 0 || _0x3d7300 > _0x23e78b.length - 1) {
      return null;
    } else {
      return this.getPixelForValue(_0x23e78b[_0x3d7300].value);
    }
  }
  getPixelForDecimal(_0x372b42) {
    if (this._reversePixels) {
      _0x372b42 = 1 - _0x372b42;
    }
    const _0x4d24b1 = this._startPixel + _0x372b42 * this._length;
    return Hc(this._alignToPixels ? zt(this.chart, _0x4d24b1, 0) : _0x4d24b1);
  }
  getDecimalForPixel(_0x2f9095) {
    const _0x34539c = (_0x2f9095 - this._startPixel) / this._length;
    if (this._reversePixels) {
      return 1 - _0x34539c;
    } else {
      return _0x34539c;
    }
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {
      min: _0x5aa834,
      max: _0x20bc20
    } = this;
    if (_0x5aa834 < 0 && _0x20bc20 < 0) {
      return _0x20bc20;
    } else if (_0x5aa834 > 0 && _0x20bc20 > 0) {
      return _0x5aa834;
    } else {
      return 0;
    }
  }
  getContext(_0x5bda8e) {
    const _0x37ab41 = this.ticks || [];
    if (_0x5bda8e >= 0 && _0x5bda8e < _0x37ab41.length) {
      const _0x199230 = _0x37ab41[_0x5bda8e];
      return _0x199230.$context ||= Yd(this.getContext(), _0x5bda8e, _0x199230);
    }
    return this.$context ||= Ud(this.chart.getContext(), this);
  }
  _tickSize() {
    const _0xdd7fce = this.options.ticks;
    const _0x4acbe0 = ct(this.labelRotation);
    const _0x17be05 = Math.abs(Math.cos(_0x4acbe0));
    const _0x2e413c = Math.abs(Math.sin(_0x4acbe0));
    const _0x3698ff = this._getLabelSizes();
    const _0x50bd3e = _0xdd7fce.autoSkipPadding || 0;
    const _0xeebdc6 = _0x3698ff ? _0x3698ff.widest.width + _0x50bd3e : 0;
    const _0x25ee7c = _0x3698ff ? _0x3698ff.highest.height + _0x50bd3e : 0;
    if (this.isHorizontal()) {
      if (_0x25ee7c * _0x17be05 > _0xeebdc6 * _0x2e413c) {
        return _0xeebdc6 / _0x17be05;
      } else {
        return _0x25ee7c / _0x2e413c;
      }
    } else if (_0x25ee7c * _0x2e413c < _0xeebdc6 * _0x17be05) {
      return _0x25ee7c / _0x17be05;
    } else {
      return _0xeebdc6 / _0x2e413c;
    }
  }
  _isVisible() {
    const _0x186ac8 = this.options.display;
    if (_0x186ac8 !== "auto") {
      return !!_0x186ac8;
    } else {
      return this.getMatchingVisibleMetas().length > 0;
    }
  }
  _computeGridLineItems(_0x152e31) {
    const _0x5deee4 = this.axis;
    const _0x1a75f8 = this.chart;
    const _0xdf9654 = this.options;
    const {
      grid: _0x3ebde8,
      position: _0x16b8fa,
      border: _0x3ace96
    } = _0xdf9654;
    const _0x4f62fc = _0x3ebde8.offset;
    const _0x55e7b6 = this.isHorizontal();
    const _0x1f397c = this.ticks.length + (_0x4f62fc ? 1 : 0);
    const _0x18422c = ue(_0x3ebde8);
    const _0x33de2e = [];
    const _0x1cb9c3 = _0x3ace96.setContext(this.getContext());
    const _0x250473 = _0x1cb9c3.display ? _0x1cb9c3.width : 0;
    const _0x2bcf2d = _0x250473 / 2;
    const _0x883ef3 = function (_0x308c04) {
      return zt(_0x1a75f8, _0x308c04, _0x250473);
    };
    let _0x26cc54;
    let _0x443f1e;
    let _0x2a2bce;
    let _0x2bfa81;
    let _0xec0f91;
    let _0x5ca020;
    let _0x2e63bd;
    let _0x193f41;
    let _0x12433c;
    let _0x6e8990;
    let _0x5f0d07;
    let _0x58eb17;
    if (_0x16b8fa === "top") {
      _0x26cc54 = _0x883ef3(this.bottom);
      _0x5ca020 = this.bottom - _0x18422c;
      _0x193f41 = _0x26cc54 - _0x2bcf2d;
      _0x6e8990 = _0x883ef3(_0x152e31.top) + _0x2bcf2d;
      _0x58eb17 = _0x152e31.bottom;
    } else if (_0x16b8fa === "bottom") {
      _0x26cc54 = _0x883ef3(this.top);
      _0x6e8990 = _0x152e31.top;
      _0x58eb17 = _0x883ef3(_0x152e31.bottom) - _0x2bcf2d;
      _0x5ca020 = _0x26cc54 + _0x2bcf2d;
      _0x193f41 = this.top + _0x18422c;
    } else if (_0x16b8fa === "left") {
      _0x26cc54 = _0x883ef3(this.right);
      _0xec0f91 = this.right - _0x18422c;
      _0x2e63bd = _0x26cc54 - _0x2bcf2d;
      _0x12433c = _0x883ef3(_0x152e31.left) + _0x2bcf2d;
      _0x5f0d07 = _0x152e31.right;
    } else if (_0x16b8fa === "right") {
      _0x26cc54 = _0x883ef3(this.left);
      _0x12433c = _0x152e31.left;
      _0x5f0d07 = _0x883ef3(_0x152e31.right) - _0x2bcf2d;
      _0xec0f91 = _0x26cc54 + _0x2bcf2d;
      _0x2e63bd = this.left + _0x18422c;
    } else if (_0x5deee4 === "x") {
      if (_0x16b8fa === "center") {
        _0x26cc54 = _0x883ef3((_0x152e31.top + _0x152e31.bottom) / 2 + 0.5);
      } else if (L(_0x16b8fa)) {
        const _0x9ac3cd = Object.keys(_0x16b8fa)[0];
        const _0x4ee562 = _0x16b8fa[_0x9ac3cd];
        _0x26cc54 = _0x883ef3(this.chart.scales[_0x9ac3cd].getPixelForValue(_0x4ee562));
      }
      _0x6e8990 = _0x152e31.top;
      _0x58eb17 = _0x152e31.bottom;
      _0x5ca020 = _0x26cc54 + _0x2bcf2d;
      _0x193f41 = _0x5ca020 + _0x18422c;
    } else if (_0x5deee4 === "y") {
      if (_0x16b8fa === "center") {
        _0x26cc54 = _0x883ef3((_0x152e31.left + _0x152e31.right) / 2);
      } else if (L(_0x16b8fa)) {
        const _0x3a25de = Object.keys(_0x16b8fa)[0];
        const _0x389a8a = _0x16b8fa[_0x3a25de];
        _0x26cc54 = _0x883ef3(this.chart.scales[_0x3a25de].getPixelForValue(_0x389a8a));
      }
      _0xec0f91 = _0x26cc54 - _0x2bcf2d;
      _0x2e63bd = _0xec0f91 - _0x18422c;
      _0x12433c = _0x152e31.left;
      _0x5f0d07 = _0x152e31.right;
    }
    const _0x19354a = T(_0xdf9654.ticks.maxTicksLimit, _0x1f397c);
    const _0x6f95be = Math.max(1, Math.ceil(_0x1f397c / _0x19354a));
    for (_0x443f1e = 0; _0x443f1e < _0x1f397c; _0x443f1e += _0x6f95be) {
      const _0x8715e3 = this.getContext(_0x443f1e);
      const _0x2871e5 = _0x3ebde8.setContext(_0x8715e3);
      const _0x3b3f5b = _0x3ace96.setContext(_0x8715e3);
      const _0x546f79 = _0x2871e5.lineWidth;
      const _0x2a6065 = _0x2871e5.color;
      const _0x34b247 = _0x3b3f5b.dash || [];
      const _0x350c02 = _0x3b3f5b.dashOffset;
      const _0x4d55eb = _0x2871e5.tickWidth;
      const _0x5e0cfc = _0x2871e5.tickColor;
      const _0x55541d = _0x2871e5.tickBorderDash || [];
      const _0x1a7878 = _0x2871e5.tickBorderDashOffset;
      _0x2a2bce = Wd(this, _0x443f1e, _0x4f62fc);
      if (_0x2a2bce !== undefined) {
        _0x2bfa81 = zt(_0x1a75f8, _0x2a2bce, _0x546f79);
        if (_0x55e7b6) {
          _0xec0f91 = _0x2e63bd = _0x12433c = _0x5f0d07 = _0x2bfa81;
        } else {
          _0x5ca020 = _0x193f41 = _0x6e8990 = _0x58eb17 = _0x2bfa81;
        }
        _0x33de2e.push({
          tx1: _0xec0f91,
          ty1: _0x5ca020,
          tx2: _0x2e63bd,
          ty2: _0x193f41,
          x1: _0x12433c,
          y1: _0x6e8990,
          x2: _0x5f0d07,
          y2: _0x58eb17,
          width: _0x546f79,
          color: _0x2a6065,
          borderDash: _0x34b247,
          borderDashOffset: _0x350c02,
          tickWidth: _0x4d55eb,
          tickColor: _0x5e0cfc,
          tickBorderDash: _0x55541d,
          tickBorderDashOffset: _0x1a7878
        });
      }
    }
    this._ticksLength = _0x1f397c;
    this._borderValue = _0x26cc54;
    return _0x33de2e;
  }
  _computeLabelItems(_0x13d3b6) {
    const _0x2e46c4 = this.axis;
    const _0x1b46b7 = this.options;
    const {
      position: _0x5c5f0b,
      ticks: _0x28934f
    } = _0x1b46b7;
    const _0x3d22d1 = this.isHorizontal();
    const _0x3437c9 = this.ticks;
    const {
      align: _0x3b8077,
      crossAlign: _0x2f4918,
      padding: _0x36f536,
      mirror: _0x1c142f
    } = _0x28934f;
    const _0x19897c = ue(_0x1b46b7.grid);
    const _0x507118 = _0x19897c + _0x36f536;
    const _0x531d61 = _0x1c142f ? -_0x36f536 : _0x507118;
    const _0x2db85d = -ct(this.labelRotation);
    const _0x45b1a2 = [];
    let _0x5ee652;
    let _0x1d93cb;
    let _0x16119a;
    let _0x580d31;
    let _0x47017d;
    let _0x1422c7;
    let _0x23f6f6;
    let _0x3ca1e7;
    let _0x471d2b;
    let _0x2a902a;
    let _0x1706c2;
    let _0x2e478c;
    let _0x3acefe = "middle";
    if (_0x5c5f0b === "top") {
      _0x1422c7 = this.bottom - _0x531d61;
      _0x23f6f6 = this._getXAxisLabelAlignment();
    } else if (_0x5c5f0b === "bottom") {
      _0x1422c7 = this.top + _0x531d61;
      _0x23f6f6 = this._getXAxisLabelAlignment();
    } else if (_0x5c5f0b === "left") {
      const _0x2fafcd = this._getYAxisLabelAlignment(_0x19897c);
      _0x23f6f6 = _0x2fafcd.textAlign;
      _0x47017d = _0x2fafcd.x;
    } else if (_0x5c5f0b === "right") {
      const _0x480454 = this._getYAxisLabelAlignment(_0x19897c);
      _0x23f6f6 = _0x480454.textAlign;
      _0x47017d = _0x480454.x;
    } else if (_0x2e46c4 === "x") {
      if (_0x5c5f0b === "center") {
        _0x1422c7 = (_0x13d3b6.top + _0x13d3b6.bottom) / 2 + _0x507118;
      } else if (L(_0x5c5f0b)) {
        const _0x16607f = Object.keys(_0x5c5f0b)[0];
        const _0x51d6d4 = _0x5c5f0b[_0x16607f];
        _0x1422c7 = this.chart.scales[_0x16607f].getPixelForValue(_0x51d6d4) + _0x507118;
      }
      _0x23f6f6 = this._getXAxisLabelAlignment();
    } else if (_0x2e46c4 === "y") {
      if (_0x5c5f0b === "center") {
        _0x47017d = (_0x13d3b6.left + _0x13d3b6.right) / 2 - _0x507118;
      } else if (L(_0x5c5f0b)) {
        const _0x1159c3 = Object.keys(_0x5c5f0b)[0];
        const _0x11273e = _0x5c5f0b[_0x1159c3];
        _0x47017d = this.chart.scales[_0x1159c3].getPixelForValue(_0x11273e);
      }
      _0x23f6f6 = this._getYAxisLabelAlignment(_0x19897c).textAlign;
    }
    if (_0x2e46c4 === "y") {
      if (_0x3b8077 === "start") {
        _0x3acefe = "top";
      } else if (_0x3b8077 === "end") {
        _0x3acefe = "bottom";
      }
    }
    const _0x490268 = this._getLabelSizes();
    _0x5ee652 = 0;
    _0x1d93cb = _0x3437c9.length;
    for (; _0x5ee652 < _0x1d93cb; ++_0x5ee652) {
      _0x16119a = _0x3437c9[_0x5ee652];
      _0x580d31 = _0x16119a.label;
      const _0x58cd61 = _0x28934f.setContext(this.getContext(_0x5ee652));
      _0x3ca1e7 = this.getPixelForTick(_0x5ee652) + _0x28934f.labelOffset;
      _0x471d2b = this._resolveTickFontOptions(_0x5ee652);
      _0x2a902a = _0x471d2b.lineHeight;
      _0x1706c2 = B(_0x580d31) ? _0x580d31.length : 1;
      const _0x57048a = _0x1706c2 / 2;
      const _0x45f1ba = _0x58cd61.color;
      const _0x4ebd41 = _0x58cd61.textStrokeColor;
      const _0x56e3ce = _0x58cd61.textStrokeWidth;
      let _0x1718ce = _0x23f6f6;
      if (_0x3d22d1) {
        _0x47017d = _0x3ca1e7;
        if (_0x23f6f6 === "inner") {
          if (_0x5ee652 === _0x1d93cb - 1) {
            _0x1718ce = this.options.reverse ? "left" : "right";
          } else if (_0x5ee652 === 0) {
            _0x1718ce = this.options.reverse ? "right" : "left";
          } else {
            _0x1718ce = "center";
          }
        }
        if (_0x5c5f0b === "top") {
          if (_0x2f4918 === "near" || _0x2db85d !== 0) {
            _0x2e478c = -_0x1706c2 * _0x2a902a + _0x2a902a / 2;
          } else if (_0x2f4918 === "center") {
            _0x2e478c = -_0x490268.highest.height / 2 - _0x57048a * _0x2a902a + _0x2a902a;
          } else {
            _0x2e478c = -_0x490268.highest.height + _0x2a902a / 2;
          }
        } else if (_0x2f4918 === "near" || _0x2db85d !== 0) {
          _0x2e478c = _0x2a902a / 2;
        } else if (_0x2f4918 === "center") {
          _0x2e478c = _0x490268.highest.height / 2 - _0x57048a * _0x2a902a;
        } else {
          _0x2e478c = _0x490268.highest.height - _0x1706c2 * _0x2a902a;
        }
        if (_0x1c142f) {
          _0x2e478c *= -1;
        }
        if (_0x2db85d !== 0 && !_0x58cd61.showLabelBackdrop) {
          _0x47017d += _0x2a902a / 2 * Math.sin(_0x2db85d);
        }
      } else {
        _0x1422c7 = _0x3ca1e7;
        _0x2e478c = (1 - _0x1706c2) * _0x2a902a / 2;
      }
      let _0x132b80;
      if (_0x58cd61.showLabelBackdrop) {
        const _0x1809d3 = nt(_0x58cd61.backdropPadding);
        const _0x442572 = _0x490268.heights[_0x5ee652];
        const _0x4bfc59 = _0x490268.widths[_0x5ee652];
        let _0x542ccd = _0x2e478c - _0x1809d3.top;
        let _0x1c8854 = 0 - _0x1809d3.left;
        switch (_0x3acefe) {
          case "middle":
            _0x542ccd -= _0x442572 / 2;
            break;
          case "bottom":
            _0x542ccd -= _0x442572;
            break;
        }
        switch (_0x23f6f6) {
          case "center":
            _0x1c8854 -= _0x4bfc59 / 2;
            break;
          case "right":
            _0x1c8854 -= _0x4bfc59;
            break;
          case "inner":
            if (_0x5ee652 === _0x1d93cb - 1) {
              _0x1c8854 -= _0x4bfc59;
            } else if (_0x5ee652 > 0) {
              _0x1c8854 -= _0x4bfc59 / 2;
            }
            break;
        }
        _0x132b80 = {
          left: _0x1c8854,
          top: _0x542ccd,
          width: _0x4bfc59 + _0x1809d3.width,
          height: _0x442572 + _0x1809d3.height,
          color: _0x58cd61.backdropColor
        };
      }
      _0x45b1a2.push({
        label: _0x580d31,
        font: _0x471d2b,
        textOffset: _0x2e478c,
        options: {
          rotation: _0x2db85d,
          color: _0x45f1ba,
          strokeColor: _0x4ebd41,
          strokeWidth: _0x56e3ce,
          textAlign: _0x1718ce,
          textBaseline: _0x3acefe,
          translation: [_0x47017d, _0x1422c7],
          backdrop: _0x132b80
        }
      });
    }
    return _0x45b1a2;
  }
  _getXAxisLabelAlignment() {
    const {
      position: _0x487dce,
      ticks: _0x4f01ce
    } = this.options;
    if (-ct(this.labelRotation)) {
      if (_0x487dce === "top") {
        return "left";
      } else {
        return "right";
      }
    }
    let _0xe4ed63 = "center";
    if (_0x4f01ce.align === "start") {
      _0xe4ed63 = "left";
    } else if (_0x4f01ce.align === "end") {
      _0xe4ed63 = "right";
    } else if (_0x4f01ce.align === "inner") {
      _0xe4ed63 = "inner";
    }
    return _0xe4ed63;
  }
  _getYAxisLabelAlignment(_0x125d86) {
    const {
      position: _0x54a2fb,
      ticks: {
        crossAlign: _0x22c3c6,
        mirror: _0x3cda36,
        padding: _0xeccafc
      }
    } = this.options;
    const _0x310f6d = this._getLabelSizes();
    const _0x2c43df = _0x125d86 + _0xeccafc;
    const _0x524599 = _0x310f6d.widest.width;
    let _0x2ca737;
    let _0x4a7f2a;
    if (_0x54a2fb === "left") {
      if (_0x3cda36) {
        _0x4a7f2a = this.right + _0xeccafc;
        if (_0x22c3c6 === "near") {
          _0x2ca737 = "left";
        } else if (_0x22c3c6 === "center") {
          _0x2ca737 = "center";
          _0x4a7f2a += _0x524599 / 2;
        } else {
          _0x2ca737 = "right";
          _0x4a7f2a += _0x524599;
        }
      } else {
        _0x4a7f2a = this.right - _0x2c43df;
        if (_0x22c3c6 === "near") {
          _0x2ca737 = "right";
        } else if (_0x22c3c6 === "center") {
          _0x2ca737 = "center";
          _0x4a7f2a -= _0x524599 / 2;
        } else {
          _0x2ca737 = "left";
          _0x4a7f2a = this.left;
        }
      }
    } else if (_0x54a2fb === "right") {
      if (_0x3cda36) {
        _0x4a7f2a = this.left + _0xeccafc;
        if (_0x22c3c6 === "near") {
          _0x2ca737 = "right";
        } else if (_0x22c3c6 === "center") {
          _0x2ca737 = "center";
          _0x4a7f2a -= _0x524599 / 2;
        } else {
          _0x2ca737 = "left";
          _0x4a7f2a -= _0x524599;
        }
      } else {
        _0x4a7f2a = this.left + _0x2c43df;
        if (_0x22c3c6 === "near") {
          _0x2ca737 = "left";
        } else if (_0x22c3c6 === "center") {
          _0x2ca737 = "center";
          _0x4a7f2a += _0x524599 / 2;
        } else {
          _0x2ca737 = "right";
          _0x4a7f2a = this.right;
        }
      }
    } else {
      _0x2ca737 = "right";
    }
    return {
      textAlign: _0x2ca737,
      x: _0x4a7f2a
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) {
      return;
    }
    const _0x52a396 = this.chart;
    const _0x5ecf4e = this.options.position;
    if (_0x5ecf4e === "left" || _0x5ecf4e === "right") {
      return {
        top: 0,
        left: this.left,
        bottom: _0x52a396.height,
        right: this.right
      };
    }
    if (_0x5ecf4e === "top" || _0x5ecf4e === "bottom") {
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: _0x52a396.width
      };
    }
  }
  drawBackground() {
    const {
      ctx: _0x6b9664,
      options: {
        backgroundColor: _0x7f0ddd
      },
      left: _0x303375,
      top: _0x40a65e,
      width: _0x1f08d2,
      height: _0x30ff8f
    } = this;
    if (_0x7f0ddd) {
      _0x6b9664.save();
      _0x6b9664.fillStyle = _0x7f0ddd;
      _0x6b9664.fillRect(_0x303375, _0x40a65e, _0x1f08d2, _0x30ff8f);
      _0x6b9664.restore();
    }
  }
  getLineWidthForValue(_0x5dc006) {
    const _0x38ea1f = this.options.grid;
    if (!this._isVisible() || !_0x38ea1f.display) {
      return 0;
    }
    const _0x5085a6 = this.ticks.findIndex(_0x3ec094 => _0x3ec094.value === _0x5dc006);
    if (_0x5085a6 >= 0) {
      return _0x38ea1f.setContext(this.getContext(_0x5085a6)).lineWidth;
    } else {
      return 0;
    }
  }
  drawGrid(_0xc2dd64) {
    const _0x828426 = this.options.grid;
    const _0x2d379e = this.ctx;
    const _0x57f656 = this._gridLineItems ||= this._computeGridLineItems(_0xc2dd64);
    let _0x2c698b;
    let _0xfd854e;
    const _0x433d89 = (_0x267216, _0x5eb23a, _0x4c1f79) => {
      if (!!_0x4c1f79.width && !!_0x4c1f79.color) {
        _0x2d379e.save();
        _0x2d379e.lineWidth = _0x4c1f79.width;
        _0x2d379e.strokeStyle = _0x4c1f79.color;
        _0x2d379e.setLineDash(_0x4c1f79.borderDash || []);
        _0x2d379e.lineDashOffset = _0x4c1f79.borderDashOffset;
        _0x2d379e.beginPath();
        _0x2d379e.moveTo(_0x267216.x, _0x267216.y);
        _0x2d379e.lineTo(_0x5eb23a.x, _0x5eb23a.y);
        _0x2d379e.stroke();
        _0x2d379e.restore();
      }
    };
    if (_0x828426.display) {
      _0x2c698b = 0;
      _0xfd854e = _0x57f656.length;
      for (; _0x2c698b < _0xfd854e; ++_0x2c698b) {
        const _0x2a2b2c = _0x57f656[_0x2c698b];
        if (_0x828426.drawOnChartArea) {
          _0x433d89({
            x: _0x2a2b2c.x1,
            y: _0x2a2b2c.y1
          }, {
            x: _0x2a2b2c.x2,
            y: _0x2a2b2c.y2
          }, _0x2a2b2c);
        }
        if (_0x828426.drawTicks) {
          _0x433d89({
            x: _0x2a2b2c.tx1,
            y: _0x2a2b2c.ty1
          }, {
            x: _0x2a2b2c.tx2,
            y: _0x2a2b2c.ty2
          }, {
            color: _0x2a2b2c.tickColor,
            width: _0x2a2b2c.tickWidth,
            borderDash: _0x2a2b2c.tickBorderDash,
            borderDashOffset: _0x2a2b2c.tickBorderDashOffset
          });
        }
      }
    }
  }
  drawBorder() {
    const {
      chart: _0x1c6b12,
      ctx: _0x112225,
      options: {
        border: _0x33ae7a,
        grid: _0x941b94
      }
    } = this;
    const _0xc280bf = _0x33ae7a.setContext(this.getContext());
    const _0x30e21c = _0x33ae7a.display ? _0xc280bf.width : 0;
    if (!_0x30e21c) {
      return;
    }
    const _0x12526c = _0x941b94.setContext(this.getContext(0)).lineWidth;
    const _0x227fa6 = this._borderValue;
    let _0x40a769;
    let _0x280771;
    let _0xd92432;
    let _0x26ae3a;
    if (this.isHorizontal()) {
      _0x40a769 = zt(_0x1c6b12, this.left, _0x30e21c) - _0x30e21c / 2;
      _0x280771 = zt(_0x1c6b12, this.right, _0x12526c) + _0x12526c / 2;
      _0xd92432 = _0x26ae3a = _0x227fa6;
    } else {
      _0xd92432 = zt(_0x1c6b12, this.top, _0x30e21c) - _0x30e21c / 2;
      _0x26ae3a = zt(_0x1c6b12, this.bottom, _0x12526c) + _0x12526c / 2;
      _0x40a769 = _0x280771 = _0x227fa6;
    }
    _0x112225.save();
    _0x112225.lineWidth = _0xc280bf.width;
    _0x112225.strokeStyle = _0xc280bf.color;
    _0x112225.beginPath();
    _0x112225.moveTo(_0x40a769, _0xd92432);
    _0x112225.lineTo(_0x280771, _0x26ae3a);
    _0x112225.stroke();
    _0x112225.restore();
  }
  drawLabels(_0xfe0250) {
    if (!this.options.ticks.display) {
      return;
    }
    const _0x22968f = this.ctx;
    const _0x27cd89 = this._computeLabelArea();
    if (_0x27cd89) {
      Pn(_0x22968f, _0x27cd89);
    }
    const _0x393ec5 = this.getLabelItems(_0xfe0250);
    for (const _0x4bd3df of _0x393ec5) {
      const _0x2edd97 = _0x4bd3df.options;
      const _0x1e6c4d = _0x4bd3df.font;
      const _0x5ddffd = _0x4bd3df.label;
      const _0xb0a402 = _0x4bd3df.textOffset;
      Vt(_0x22968f, _0x5ddffd, 0, _0xb0a402, _0x1e6c4d, _0x2edd97);
    }
    if (_0x27cd89) {
      On(_0x22968f);
    }
  }
  drawTitle() {
    const {
      ctx: _0x4dc4c4,
      options: {
        position: _0x5f01c3,
        title: _0xef69e5,
        reverse: _0x2a725b
      }
    } = this;
    if (!_0xef69e5.display) {
      return;
    }
    const _0x363d14 = rt(_0xef69e5.font);
    const _0x29b0db = nt(_0xef69e5.padding);
    const _0x59d52c = _0xef69e5.align;
    let _0x144fe3 = _0x363d14.lineHeight / 2;
    if (_0x5f01c3 === "bottom" || _0x5f01c3 === "center" || L(_0x5f01c3)) {
      _0x144fe3 += _0x29b0db.bottom;
      if (B(_0xef69e5.text)) {
        _0x144fe3 += _0x363d14.lineHeight * (_0xef69e5.text.length - 1);
      }
    } else {
      _0x144fe3 += _0x29b0db.top;
    }
    const {
      titleX: _0xbd886f,
      titleY: _0x1a276d,
      maxWidth: _0x32f4a9,
      rotation: _0x5bb40f
    } = qd(this, _0x144fe3, _0x5f01c3, _0x59d52c);
    Vt(_0x4dc4c4, _0xef69e5.text, 0, 0, _0x363d14, {
      color: _0xef69e5.color,
      maxWidth: _0x32f4a9,
      rotation: _0x5bb40f,
      textAlign: Kd(_0x59d52c, _0x5f01c3, _0x2a725b),
      textBaseline: "middle",
      translation: [_0xbd886f, _0x1a276d]
    });
  }
  draw(_0x5e0f9d) {
    if (this._isVisible()) {
      this.drawBackground();
      this.drawGrid(_0x5e0f9d);
      this.drawBorder();
      this.drawTitle();
      this.drawLabels(_0x5e0f9d);
    }
  }
  _layers() {
    const _0x25cfa3 = this.options;
    const _0x5e644c = _0x25cfa3.ticks && _0x25cfa3.ticks.z || 0;
    const _0x283770 = T(_0x25cfa3.grid && _0x25cfa3.grid.z, -1);
    const _0x1570d4 = T(_0x25cfa3.border && _0x25cfa3.border.z, 0);
    if (!this._isVisible() || this.draw !== Kt.prototype.draw) {
      return [{
        z: _0x5e644c,
        draw: _0x18c8c7 => {
          this.draw(_0x18c8c7);
        }
      }];
    } else {
      return [{
        z: _0x283770,
        draw: _0x3065a8 => {
          this.drawBackground();
          this.drawGrid(_0x3065a8);
          this.drawTitle();
        }
      }, {
        z: _0x1570d4,
        draw: () => {
          this.drawBorder();
        }
      }, {
        z: _0x5e644c,
        draw: _0xf4a1f5 => {
          this.drawLabels(_0xf4a1f5);
        }
      }];
    }
  }
  getMatchingVisibleMetas(_0xdcb117) {
    const _0xdadad = this.chart.getSortedVisibleDatasetMetas();
    const _0x34e39f = this.axis + "AxisID";
    const _0x46aea0 = [];
    let _0x4606c6;
    let _0x4e0acd;
    _0x4606c6 = 0;
    _0x4e0acd = _0xdadad.length;
    for (; _0x4606c6 < _0x4e0acd; ++_0x4606c6) {
      const _0x894762 = _0xdadad[_0x4606c6];
      if (_0x894762[_0x34e39f] === this.id && (!_0xdcb117 || _0x894762.type === _0xdcb117)) {
        _0x46aea0.push(_0x894762);
      }
    }
    return _0x46aea0;
  }
  _resolveTickFontOptions(_0x99f1ed) {
    const _0x173359 = this.options.ticks.setContext(this.getContext(_0x99f1ed));
    return rt(_0x173359.font);
  }
  _maxDigits() {
    const _0x30dd50 = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / _0x30dd50;
  }
}
class Je {
  constructor(_0x5a8e74, _0x16433f, _0x16ee27) {
    this.type = _0x5a8e74;
    this.scope = _0x16433f;
    this.override = _0x16ee27;
    this.items = Object.create(null);
  }
  isForType(_0x2d66d6) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, _0x2d66d6.prototype);
  }
  register(_0x307894) {
    const _0x4882f5 = Object.getPrototypeOf(_0x307894);
    let _0x4b6e62;
    if (Zd(_0x4882f5)) {
      _0x4b6e62 = this.register(_0x4882f5);
    }
    const _0x3cc1ac = this.items;
    const _0x4eb9dd = _0x307894.id;
    const _0x4f61b8 = this.scope + "." + _0x4eb9dd;
    if (!_0x4eb9dd) {
      throw new Error("class does not have id: " + _0x307894);
    }
    if (!(_0x4eb9dd in _0x3cc1ac)) {
      _0x3cc1ac[_0x4eb9dd] = _0x307894;
      Xd(_0x307894, _0x4f61b8, _0x4b6e62);
      if (this.override) {
        N.override(_0x307894.id, _0x307894.overrides);
      }
    }
    return _0x4f61b8;
  }
  get(_0x89eb0e) {
    return this.items[_0x89eb0e];
  }
  unregister(_0x50aa80) {
    const _0x444317 = this.items;
    const _0x3c7bbb = _0x50aa80.id;
    const _0x3679d2 = this.scope;
    if (_0x3c7bbb in _0x444317) {
      delete _0x444317[_0x3c7bbb];
    }
    if (_0x3679d2 && _0x3c7bbb in N[_0x3679d2]) {
      delete N[_0x3679d2][_0x3c7bbb];
      if (this.override) {
        delete Wt[_0x3c7bbb];
      }
    }
  }
}
function Xd(_0x2a3f40, _0x47464c, _0x57f9f1) {
  const _0x4f033a = Me(Object.create(null), [_0x57f9f1 ? N.get(_0x57f9f1) : {}, N.get(_0x47464c), _0x2a3f40.defaults]);
  N.set(_0x47464c, _0x4f033a);
  if (_0x2a3f40.defaultRoutes) {
    Gd(_0x47464c, _0x2a3f40.defaultRoutes);
  }
  if (_0x2a3f40.descriptors) {
    N.describe(_0x47464c, _0x2a3f40.descriptors);
  }
}
function Gd(_0x130c2f, _0x2b61b2) {
  Object.keys(_0x2b61b2).forEach(_0x4c7f67 => {
    const _0x2b84ec = _0x4c7f67.split(".");
    const _0x4869f6 = _0x2b84ec.pop();
    const _0x4d93aa = [_0x130c2f].concat(_0x2b84ec).join(".");
    const _0x245a07 = _0x2b61b2[_0x4c7f67].split(".");
    const _0x4078e6 = _0x245a07.pop();
    const _0x29d6df = _0x245a07.join(".");
    N.route(_0x4d93aa, _0x4869f6, _0x29d6df, _0x4078e6);
  });
}
function Zd(_0xd52948) {
  return "id" in _0xd52948 && "defaults" in _0xd52948;
}
class Qd {
  constructor() {
    this.controllers = new Je(Pi, "datasets", true);
    this.elements = new Je(Re, "elements");
    this.plugins = new Je(Object, "plugins");
    this.scales = new Je(Kt, "scales");
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(..._0x162622) {
    this._each("register", _0x162622);
  }
  remove(..._0x184110) {
    this._each("unregister", _0x184110);
  }
  addControllers(..._0x1aac94) {
    this._each("register", _0x1aac94, this.controllers);
  }
  addElements(..._0x478f81) {
    this._each("register", _0x478f81, this.elements);
  }
  addPlugins(..._0x1c726c) {
    this._each("register", _0x1c726c, this.plugins);
  }
  addScales(..._0x5d9ea2) {
    this._each("register", _0x5d9ea2, this.scales);
  }
  getController(_0x2d3941) {
    return this._get(_0x2d3941, this.controllers, "controller");
  }
  getElement(_0x36d118) {
    return this._get(_0x36d118, this.elements, "element");
  }
  getPlugin(_0x4f3f30) {
    return this._get(_0x4f3f30, this.plugins, "plugin");
  }
  getScale(_0x283000) {
    return this._get(_0x283000, this.scales, "scale");
  }
  removeControllers(..._0x43377f) {
    this._each("unregister", _0x43377f, this.controllers);
  }
  removeElements(..._0x29a8d4) {
    this._each("unregister", _0x29a8d4, this.elements);
  }
  removePlugins(..._0x2dc300) {
    this._each("unregister", _0x2dc300, this.plugins);
  }
  removeScales(..._0x299fa2) {
    this._each("unregister", _0x299fa2, this.scales);
  }
  _each(_0x55b89e, _0x73488c, _0x522286) {
    [..._0x73488c].forEach(_0x3eb157 => {
      const _0x595d1d = _0x522286 || this._getRegistryForType(_0x3eb157);
      if (_0x522286 || _0x595d1d.isForType(_0x3eb157) || _0x595d1d === this.plugins && _0x3eb157.id) {
        this._exec(_0x55b89e, _0x595d1d, _0x3eb157);
      } else {
        q(_0x3eb157, _0x268f54 => {
          const _0x1d6d2b = _0x522286 || this._getRegistryForType(_0x268f54);
          this._exec(_0x55b89e, _0x1d6d2b, _0x268f54);
        });
      }
    });
  }
  _exec(_0x25e2f4, _0x547573, _0xd338df) {
    const _0x520183 = $n(_0x25e2f4);
    F(_0xd338df["before" + _0x520183], [], _0xd338df);
    _0x547573[_0x25e2f4](_0xd338df);
    F(_0xd338df["after" + _0x520183], [], _0xd338df);
  }
  _getRegistryForType(_0x5a4afb) {
    for (let _0xdacbd8 = 0; _0xdacbd8 < this._typedRegistries.length; _0xdacbd8++) {
      const _0x4f0626 = this._typedRegistries[_0xdacbd8];
      if (_0x4f0626.isForType(_0x5a4afb)) {
        return _0x4f0626;
      }
    }
    return this.plugins;
  }
  _get(_0x582a51, _0xcf1a86, _0x3eb293) {
    const _0x4f7191 = _0xcf1a86.get(_0x582a51);
    if (_0x4f7191 === undefined) {
      throw new Error("\"" + _0x582a51 + "\" is not a registered " + _0x3eb293 + ".");
    }
    return _0x4f7191;
  }
}
var ut = new Qd();
class Jd {
  constructor() {
    this._init = [];
  }
  notify(_0x4085f2, _0x4a81ac, _0x3c6d76, _0x393cc6) {
    if (_0x4a81ac === "beforeInit") {
      this._init = this._createDescriptors(_0x4085f2, true);
      this._notify(this._init, _0x4085f2, "install");
    }
    const _0x347690 = _0x393cc6 ? this._descriptors(_0x4085f2).filter(_0x393cc6) : this._descriptors(_0x4085f2);
    const _0xd49d01 = this._notify(_0x347690, _0x4085f2, _0x4a81ac, _0x3c6d76);
    if (_0x4a81ac === "afterDestroy") {
      this._notify(_0x347690, _0x4085f2, "stop");
      this._notify(this._init, _0x4085f2, "uninstall");
    }
    return _0xd49d01;
  }
  _notify(_0x22cd1a, _0x232656, _0x808a18, _0x57ba33) {
    _0x57ba33 = _0x57ba33 || {};
    for (const _0x11d14b of _0x22cd1a) {
      const _0x53a488 = _0x11d14b.plugin;
      const _0x5b912b = _0x53a488[_0x808a18];
      const _0x4242fc = [_0x232656, _0x57ba33, _0x11d14b.options];
      if (F(_0x5b912b, _0x4242fc, _0x53a488) === false && _0x57ba33.cancelable) {
        return false;
      }
    }
    return true;
  }
  invalidate() {
    if (!I(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  }
  _descriptors(_0x475ab7) {
    if (this._cache) {
      return this._cache;
    }
    const _0x20396d = this._cache = this._createDescriptors(_0x475ab7);
    this._notifyStateChanges(_0x475ab7);
    return _0x20396d;
  }
  _createDescriptors(_0x5690dc, _0x58cff8) {
    const _0xa03d83 = _0x5690dc && _0x5690dc.config;
    const _0x1231bb = T(_0xa03d83.options && _0xa03d83.options.plugins, {});
    const _0x245997 = tf(_0xa03d83);
    if (_0x1231bb === false && !_0x58cff8) {
      return [];
    } else {
      return nf(_0x5690dc, _0x245997, _0x1231bb, _0x58cff8);
    }
  }
  _notifyStateChanges(_0x15bc8b) {
    const _0x9ee39d = this._oldCache || [];
    const _0x4da836 = this._cache;
    const _0x236824 = (_0x1c17aa, _0x4b1127) => _0x1c17aa.filter(_0x35431c => !_0x4b1127.some(_0xc082f6 => _0x35431c.plugin.id === _0xc082f6.plugin.id));
    this._notify(_0x236824(_0x9ee39d, _0x4da836), _0x15bc8b, "stop");
    this._notify(_0x236824(_0x4da836, _0x9ee39d), _0x15bc8b, "start");
  }
}
function tf(_0x3904cf) {
  const _0x44da6c = {};
  const _0x4af574 = [];
  const _0x2e12a3 = Object.keys(ut.plugins.items);
  for (let _0x5df1ac = 0; _0x5df1ac < _0x2e12a3.length; _0x5df1ac++) {
    _0x4af574.push(ut.getPlugin(_0x2e12a3[_0x5df1ac]));
  }
  const _0x11ef8f = _0x3904cf.plugins || [];
  for (let _0x1a3758 = 0; _0x1a3758 < _0x11ef8f.length; _0x1a3758++) {
    const _0x37a00d = _0x11ef8f[_0x1a3758];
    if (_0x4af574.indexOf(_0x37a00d) === -1) {
      _0x4af574.push(_0x37a00d);
      _0x44da6c[_0x37a00d.id] = true;
    }
  }
  return {
    plugins: _0x4af574,
    localIds: _0x44da6c
  };
}
function ef(_0x124859, _0x3251ab) {
  if (!_0x3251ab && _0x124859 === false) {
    return null;
  } else if (_0x124859 === true) {
    return {};
  } else {
    return _0x124859;
  }
}
function nf(_0x5d6c96, {
  plugins: _0x697d88,
  localIds: _0x19eee8
}, _0x30fcf0, _0x16f149) {
  const _0x1de747 = [];
  const _0x2d3d78 = _0x5d6c96.getContext();
  for (const _0x1921ce of _0x697d88) {
    const _0x14c598 = _0x1921ce.id;
    const _0x1d0363 = ef(_0x30fcf0[_0x14c598], _0x16f149);
    if (_0x1d0363 !== null) {
      _0x1de747.push({
        plugin: _0x1921ce,
        options: sf(_0x5d6c96.config, {
          plugin: _0x1921ce,
          local: _0x19eee8[_0x14c598]
        }, _0x1d0363, _0x2d3d78)
      });
    }
  }
  return _0x1de747;
}
function sf(_0x4768ca, {
  plugin: _0x3cb4a2,
  local: _0x146e44
}, _0x5df611, _0x28c8c0) {
  const _0x1521d8 = _0x4768ca.pluginScopeKeys(_0x3cb4a2);
  const _0xb3cfbe = _0x4768ca.getOptionScopes(_0x5df611, _0x1521d8);
  if (_0x146e44 && _0x3cb4a2.defaults) {
    _0xb3cfbe.push(_0x3cb4a2.defaults);
  }
  return _0x4768ca.createResolver(_0xb3cfbe, _0x28c8c0, [""], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}
function gn(_0x54b5a3, _0xf0a4b8) {
  const _0x393a63 = N.datasets[_0x54b5a3] || {};
  return ((_0xf0a4b8.datasets || {})[_0x54b5a3] || {}).indexAxis || _0xf0a4b8.indexAxis || _0x393a63.indexAxis || "x";
}
function of(_0x4abb3f, _0x593853) {
  let _0x3c08dc = _0x4abb3f;
  if (_0x4abb3f === "_index_") {
    _0x3c08dc = _0x593853;
  } else if (_0x4abb3f === "_value_") {
    _0x3c08dc = _0x593853 === "x" ? "y" : "x";
  }
  return _0x3c08dc;
}
function rf(_0x5c6df2, _0x14a6a5) {
  if (_0x5c6df2 === _0x14a6a5) {
    return "_index_";
  } else {
    return "_value_";
  }
}
function js(_0x4dec17) {
  if (_0x4dec17 === "x" || _0x4dec17 === "y" || _0x4dec17 === "r") {
    return _0x4dec17;
  }
}
function af(_0x4fb618) {
  if (_0x4fb618 === "top" || _0x4fb618 === "bottom") {
    return "x";
  }
  if (_0x4fb618 === "left" || _0x4fb618 === "right") {
    return "y";
  }
}
function pn(_0x5bded9, ..._0x185c87) {
  if (js(_0x5bded9)) {
    return _0x5bded9;
  }
  for (const _0x1a001c of _0x185c87) {
    const _0x574efa = _0x1a001c.axis || af(_0x1a001c.position) || _0x5bded9.length > 1 && js(_0x5bded9[0].toLowerCase());
    if (_0x574efa) {
      return _0x574efa;
    }
  }
  throw new Error("Cannot determine type of '" + _0x5bded9 + "' axis. Please provide 'axis' or 'position' option.");
}
function Ns(_0x53c49b, _0x321af0, _0x30e2ca) {
  if (_0x30e2ca[_0x321af0 + "AxisID"] === _0x53c49b) {
    return {
      axis: _0x321af0
    };
  }
}
function lf(_0x44dfad, _0x4e1bcc) {
  if (_0x4e1bcc.data && _0x4e1bcc.data.datasets) {
    const _0x18a060 = _0x4e1bcc.data.datasets.filter(_0x223c49 => _0x223c49.xAxisID === _0x44dfad || _0x223c49.yAxisID === _0x44dfad);
    if (_0x18a060.length) {
      return Ns(_0x44dfad, "x", _0x18a060[0]) || Ns(_0x44dfad, "y", _0x18a060[0]);
    }
  }
  return {};
}
function cf(_0x417276, _0x54bfe7) {
  const _0x314844 = Wt[_0x417276.type] || {
    scales: {}
  };
  const _0x31d208 = _0x54bfe7.scales || {};
  const _0x472c9a = gn(_0x417276.type, _0x54bfe7);
  const _0xe8043c = Object.create(null);
  Object.keys(_0x31d208).forEach(_0x36c717 => {
    const _0x825d1a = _0x31d208[_0x36c717];
    if (!L(_0x825d1a)) {
      return console.error("Invalid scale configuration for scale: " + _0x36c717);
    }
    if (_0x825d1a._proxy) {
      return console.warn("Ignoring resolver passed as options for scale: " + _0x36c717);
    }
    const _0x347007 = pn(_0x36c717, _0x825d1a, lf(_0x36c717, _0x417276), N.scales[_0x825d1a.type]);
    const _0x2e3c8e = rf(_0x347007, _0x472c9a);
    const _0x1ebbd7 = _0x314844.scales || {};
    _0xe8043c[_0x36c717] = ve(Object.create(null), [{
      axis: _0x347007
    }, _0x825d1a, _0x1ebbd7[_0x347007], _0x1ebbd7[_0x2e3c8e]]);
  });
  _0x417276.data.datasets.forEach(_0x48f4c8 => {
    const _0x16e217 = _0x48f4c8.type || _0x417276.type;
    const _0x45aad7 = _0x48f4c8.indexAxis || gn(_0x16e217, _0x54bfe7);
    const _0xf43eb1 = (Wt[_0x16e217] || {}).scales || {};
    Object.keys(_0xf43eb1).forEach(_0x20632c => {
      const _0x56ae60 = of(_0x20632c, _0x45aad7);
      const _0x2c6448 = _0x48f4c8[_0x56ae60 + "AxisID"] || _0x56ae60;
      _0xe8043c[_0x2c6448] = _0xe8043c[_0x2c6448] || Object.create(null);
      ve(_0xe8043c[_0x2c6448], [{
        axis: _0x56ae60
      }, _0x31d208[_0x2c6448], _0xf43eb1[_0x20632c]]);
    });
  });
  Object.keys(_0xe8043c).forEach(_0x2eee1f => {
    const _0x4ba04f = _0xe8043c[_0x2eee1f];
    ve(_0x4ba04f, [N.scales[_0x4ba04f.type], N.scale]);
  });
  return _0xe8043c;
}
function nr(_0x842bd2) {
  const _0x460b51 = _0x842bd2.options ||= {};
  _0x460b51.plugins = T(_0x460b51.plugins, {});
  _0x460b51.scales = cf(_0x842bd2, _0x460b51);
}
function sr(_0x1d09d9) {
  _0x1d09d9 = _0x1d09d9 || {};
  _0x1d09d9.datasets = _0x1d09d9.datasets || [];
  _0x1d09d9.labels = _0x1d09d9.labels || [];
  return _0x1d09d9;
}
function hf(_0x33bc83) {
  _0x33bc83 = _0x33bc83 || {};
  _0x33bc83.data = sr(_0x33bc83.data);
  nr(_0x33bc83);
  return _0x33bc83;
}
const Hs = new Map();
const or = new Set();
function ti(_0x1e9bee, _0x4206ad) {
  let _0x5cf2a2 = Hs.get(_0x1e9bee);
  if (!_0x5cf2a2) {
    _0x5cf2a2 = _0x4206ad();
    Hs.set(_0x1e9bee, _0x5cf2a2);
    or.add(_0x5cf2a2);
  }
  return _0x5cf2a2;
}
const ge = (_0x9c58b6, _0xf3873b, _0x2ee72e) => {
  const _0x5e61a5 = Tt(_0xf3873b, _0x2ee72e);
  if (_0x5e61a5 !== undefined) {
    _0x9c58b6.add(_0x5e61a5);
  }
};
class df {
  constructor(_0x384ac3) {
    this._config = hf(_0x384ac3);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(_0x19f260) {
    this._config.type = _0x19f260;
  }
  get data() {
    return this._config.data;
  }
  set data(_0x1d2423) {
    this._config.data = sr(_0x1d2423);
  }
  get options() {
    return this._config.options;
  }
  set options(_0x500d96) {
    this._config.options = _0x500d96;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const _0x10cf6e = this._config;
    this.clearCache();
    nr(_0x10cf6e);
  }
  clearCache() {
    this._scopeCache.clear();
    this._resolverCache.clear();
  }
  datasetScopeKeys(_0x471e72) {
    return ti(_0x471e72, () => [["datasets." + _0x471e72, ""]]);
  }
  datasetAnimationScopeKeys(_0x4f7ddb, _0x58e53a) {
    return ti(_0x4f7ddb + ".transition." + _0x58e53a, () => [["datasets." + _0x4f7ddb + ".transitions." + _0x58e53a, "transitions." + _0x58e53a], ["datasets." + _0x4f7ddb, ""]]);
  }
  datasetElementScopeKeys(_0x5b43b5, _0x4d8008) {
    return ti(_0x5b43b5 + "-" + _0x4d8008, () => [["datasets." + _0x5b43b5 + ".elements." + _0x4d8008, "datasets." + _0x5b43b5, "elements." + _0x4d8008, ""]]);
  }
  pluginScopeKeys(_0x43d554) {
    const _0x57f1a6 = _0x43d554.id;
    const _0x4dd6ad = this.type;
    return ti(_0x4dd6ad + "-plugin-" + _0x57f1a6, () => [["plugins." + _0x57f1a6, ...(_0x43d554.additionalOptionScopes || [])]]);
  }
  _cachedScopes(_0x2d0eae, _0x2ce19a) {
    const _0x3ae71e = this._scopeCache;
    let _0x2b9e17 = _0x3ae71e.get(_0x2d0eae);
    if (!_0x2b9e17 || _0x2ce19a) {
      _0x2b9e17 = new Map();
      _0x3ae71e.set(_0x2d0eae, _0x2b9e17);
    }
    return _0x2b9e17;
  }
  getOptionScopes(_0x5f218a, _0xbd0c5f, _0x44299f) {
    const {
      options: _0x29907f,
      type: _0x2de10e
    } = this;
    const _0x40ff26 = this._cachedScopes(_0x5f218a, _0x44299f);
    const _0x534bcd = _0x40ff26.get(_0xbd0c5f);
    if (_0x534bcd) {
      return _0x534bcd;
    }
    const _0x2d0dec = new Set();
    _0xbd0c5f.forEach(_0x21cb84 => {
      if (_0x5f218a) {
        _0x2d0dec.add(_0x5f218a);
        _0x21cb84.forEach(_0xa646f3 => ge(_0x2d0dec, _0x5f218a, _0xa646f3));
      }
      _0x21cb84.forEach(_0x5d76c4 => ge(_0x2d0dec, _0x29907f, _0x5d76c4));
      _0x21cb84.forEach(_0x3d9ddb => ge(_0x2d0dec, Wt[_0x2de10e] || {}, _0x3d9ddb));
      _0x21cb84.forEach(_0x751d1d => ge(_0x2d0dec, N, _0x751d1d));
      _0x21cb84.forEach(_0x3b74da => ge(_0x2d0dec, un, _0x3b74da));
    });
    const _0x2156a2 = Array.from(_0x2d0dec);
    if (_0x2156a2.length === 0) {
      _0x2156a2.push(Object.create(null));
    }
    if (or.has(_0xbd0c5f)) {
      _0x40ff26.set(_0xbd0c5f, _0x2156a2);
    }
    return _0x2156a2;
  }
  chartOptionScopes() {
    const {
      options: _0x3ed91c,
      type: _0x1db100
    } = this;
    return [_0x3ed91c, Wt[_0x1db100] || {}, N.datasets[_0x1db100] || {}, {
      type: _0x1db100
    }, N, un];
  }
  resolveNamedOptions(_0x2a4f64, _0x144c6f, _0x5cf037, _0x14364b = [""]) {
    const _0x328913 = {
      $shared: true
    };
    const {
      resolver: _0x389b86,
      subPrefixes: _0x281b26
    } = Ws(this._resolverCache, _0x2a4f64, _0x14364b);
    let _0x434fa7 = _0x389b86;
    if (uf(_0x389b86, _0x144c6f)) {
      _0x328913.$shared = false;
      _0x5cf037 = Et(_0x5cf037) ? _0x5cf037() : _0x5cf037;
      const _0x2d2c55 = this.createResolver(_0x2a4f64, _0x5cf037, _0x281b26);
      _0x434fa7 = ee(_0x389b86, _0x5cf037, _0x2d2c55);
    }
    for (const _0x5919f5 of _0x144c6f) {
      _0x328913[_0x5919f5] = _0x434fa7[_0x5919f5];
    }
    return _0x328913;
  }
  createResolver(_0x44da52, _0x3d1450, _0x576da0 = [""], _0x4d9164) {
    const {
      resolver: _0xd40fc1
    } = Ws(this._resolverCache, _0x44da52, _0x576da0);
    if (L(_0x3d1450)) {
      return ee(_0xd40fc1, _0x3d1450, undefined, _0x4d9164);
    } else {
      return _0xd40fc1;
    }
  }
}
function Ws(_0x5c0c8d, _0x243645, _0x3f16e8) {
  let _0xc3e6bb = _0x5c0c8d.get(_0x243645);
  if (!_0xc3e6bb) {
    _0xc3e6bb = new Map();
    _0x5c0c8d.set(_0x243645, _0xc3e6bb);
  }
  const _0x424be3 = _0x3f16e8.join();
  let _0x533fed = _0xc3e6bb.get(_0x424be3);
  if (!_0x533fed) {
    _0x533fed = {
      resolver: Ln(_0x243645, _0x3f16e8),
      subPrefixes: _0x3f16e8.filter(_0xe57f8 => !_0xe57f8.toLowerCase().includes("hover"))
    };
    _0xc3e6bb.set(_0x424be3, _0x533fed);
  }
  return _0x533fed;
}
const ff = _0x3fed8d => L(_0x3fed8d) && Object.getOwnPropertyNames(_0x3fed8d).some(_0x1f2adc => Et(_0x3fed8d[_0x1f2adc]));
function uf(_0x43462b, _0x2db8f6) {
  const {
    isScriptable: _0x278afd,
    isIndexable: _0x5871ed
  } = Yo(_0x43462b);
  for (const _0x2ca511 of _0x2db8f6) {
    const _0x1ba336 = _0x278afd(_0x2ca511);
    const _0x12dc6b = _0x5871ed(_0x2ca511);
    const _0x34db8e = (_0x12dc6b || _0x1ba336) && _0x43462b[_0x2ca511];
    if (_0x1ba336 && (Et(_0x34db8e) || ff(_0x34db8e)) || _0x12dc6b && B(_0x34db8e)) {
      return true;
    }
  }
  return false;
}
var gf = "4.4.2";
const pf = ["top", "bottom", "left", "right", "chartArea"];
function Vs(_0x686386, _0x4ea481) {
  return _0x686386 === "top" || _0x686386 === "bottom" || pf.indexOf(_0x686386) === -1 && _0x4ea481 === "x";
}
function Us(_0x5c03ce, _0x46512e) {
  return function (_0xe5ce0a, _0x187c4e) {
    if (_0xe5ce0a[_0x5c03ce] === _0x187c4e[_0x5c03ce]) {
      return _0xe5ce0a[_0x46512e] - _0x187c4e[_0x46512e];
    } else {
      return _0xe5ce0a[_0x5c03ce] - _0x187c4e[_0x5c03ce];
    }
  };
}
function Ys(_0x18f2cf) {
  const _0x4ed97d = _0x18f2cf.chart;
  const _0x430e1b = _0x4ed97d.options.animation;
  _0x4ed97d.notifyPlugins("afterRender");
  F(_0x430e1b && _0x430e1b.onComplete, [_0x18f2cf], _0x4ed97d);
}
function mf(_0x53ca20) {
  const _0xf1590f = _0x53ca20.chart;
  const _0xba1c17 = _0xf1590f.options.animation;
  F(_0xba1c17 && _0xba1c17.onProgress, [_0x53ca20], _0xf1590f);
}
function rr(_0x3eec2c) {
  if (Rn() && typeof _0x3eec2c == "string") {
    _0x3eec2c = document.getElementById(_0x3eec2c);
  } else if (_0x3eec2c && _0x3eec2c.length) {
    _0x3eec2c = _0x3eec2c[0];
  }
  if (_0x3eec2c && _0x3eec2c.canvas) {
    _0x3eec2c = _0x3eec2c.canvas;
  }
  return _0x3eec2c;
}
const ai = {};
const Ks = _0x389e54 => {
  const _0xfd6653 = rr(_0x389e54);
  return Object.values(ai).filter(_0x1e8cc5 => _0x1e8cc5.canvas === _0xfd6653).pop();
};
function _f(_0x30f744, _0x371b86, _0x120c02) {
  const _0x448f6b = Object.keys(_0x30f744);
  for (const _0x4af872 of _0x448f6b) {
    const _0x362511 = +_0x4af872;
    if (_0x362511 >= _0x371b86) {
      const _0x113a58 = _0x30f744[_0x4af872];
      delete _0x30f744[_0x4af872];
      if (_0x120c02 > 0 || _0x362511 > _0x371b86) {
        _0x30f744[_0x362511 + _0x120c02] = _0x113a58;
      }
    }
  }
}
function bf(_0x1d466f, _0x1e76d7, _0x1f3ba7, _0x5548a1) {
  if (!_0x1f3ba7 || _0x1d466f.type === "mouseout") {
    return null;
  } else if (_0x5548a1) {
    return _0x1e76d7;
  } else {
    return _0x1d466f;
  }
}
function ei(_0x30e0e2, _0xebc093, _0x3fa292) {
  if (_0x30e0e2.options.clip) {
    return _0x30e0e2[_0x3fa292];
  } else {
    return _0xebc093[_0x3fa292];
  }
}
function xf(_0x84d75d, _0x24f0a7) {
  const {
    xScale: _0x7c41c7,
    yScale: _0x49d718
  } = _0x84d75d;
  if (_0x7c41c7 && _0x49d718) {
    return {
      left: ei(_0x7c41c7, _0x24f0a7, "left"),
      right: ei(_0x7c41c7, _0x24f0a7, "right"),
      top: ei(_0x49d718, _0x24f0a7, "top"),
      bottom: ei(_0x49d718, _0x24f0a7, "bottom")
    };
  } else {
    return _0x24f0a7;
  }
}
class Pe {
  static defaults = N;
  static instances = ai;
  static overrides = Wt;
  static registry = ut;
  static version = gf;
  static getChart = Ks;
  static register(..._0x55f9e2) {
    ut.add(..._0x55f9e2);
    qs();
  }
  static unregister(..._0x2f9b8e) {
    ut.remove(..._0x2f9b8e);
    qs();
  }
  constructor(_0xb32546, _0x5aa5b9) {
    const _0x496203 = this.config = new df(_0x5aa5b9);
    const _0x2bed01 = rr(_0xb32546);
    const _0x310e30 = Ks(_0x2bed01);
    if (_0x310e30) {
      throw new Error("Canvas is already in use. Chart with ID '" + _0x310e30.id + "' must be destroyed before the canvas with ID '" + _0x310e30.canvas.id + "' can be reused.");
    }
    const _0x508eb1 = _0x496203.createResolver(_0x496203.chartOptionScopes(), this.getContext());
    this.platform = new (_0x496203.platform || Rd(_0x2bed01))();
    this.platform.updateConfig(_0x496203);
    const _0x5361f5 = this.platform.acquireContext(_0x2bed01, _0x508eb1.aspectRatio);
    const _0x237937 = _0x5361f5 && _0x5361f5.canvas;
    const _0x469605 = _0x237937 && _0x237937.height;
    const _0x4e7c9d = _0x237937 && _0x237937.width;
    this.id = Dc();
    this.ctx = _0x5361f5;
    this.canvas = _0x237937;
    this.width = _0x4e7c9d;
    this.height = _0x469605;
    this._options = _0x508eb1;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this._plugins = new Jd();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = Yc(_0xd8f5b7 => this.update(_0xd8f5b7), _0x508eb1.resizeDelay || 0);
    this._dataChanges = [];
    ai[this.id] = this;
    if (!_0x5361f5 || !_0x237937) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    xt.listen(this, "complete", Ys);
    xt.listen(this, "progress", mf);
    this._initialize();
    if (this.attached) {
      this.update();
    }
  }
  get aspectRatio() {
    const {
      options: {
        aspectRatio: _0xb4e50f,
        maintainAspectRatio: _0xd7afb7
      },
      width: _0x4dab57,
      height: _0x44d23e,
      _aspectRatio: _0x2a6391
    } = this;
    if (I(_0xb4e50f)) {
      if (_0xd7afb7 && _0x2a6391) {
        return _0x2a6391;
      } else if (_0x44d23e) {
        return _0x4dab57 / _0x44d23e;
      } else {
        return null;
      }
    } else {
      return _0xb4e50f;
    }
  }
  get data() {
    return this.config.data;
  }
  set data(_0xc2b6da) {
    this.config.data = _0xc2b6da;
  }
  get options() {
    return this._options;
  }
  set options(_0x4fd71c) {
    this.config.options = _0x4fd71c;
  }
  get registry() {
    return ut;
  }
  _initialize() {
    this.notifyPlugins("beforeInit");
    if (this.options.responsive) {
      this.resize();
    } else {
      bs(this, this.options.devicePixelRatio);
    }
    this.bindEvents();
    this.notifyPlugins("afterInit");
    return this;
  }
  clear() {
    ps(this.canvas, this.ctx);
    return this;
  }
  stop() {
    xt.stop(this);
    return this;
  }
  resize(_0x27c862, _0x72af89) {
    if (xt.running(this)) {
      this._resizeBeforeDraw = {
        width: _0x27c862,
        height: _0x72af89
      };
    } else {
      this._resize(_0x27c862, _0x72af89);
    }
  }
  _resize(_0x11e195, _0x3d5289) {
    const _0x35d2f4 = this.options;
    const _0x50273c = this.canvas;
    const _0x3e1457 = _0x35d2f4.maintainAspectRatio && this.aspectRatio;
    const _0x594f16 = this.platform.getMaximumSize(_0x50273c, _0x11e195, _0x3d5289, _0x3e1457);
    const _0x501322 = _0x35d2f4.devicePixelRatio || this.platform.getDevicePixelRatio();
    const _0x4b1fec = this.width ? "resize" : "attach";
    this.width = _0x594f16.width;
    this.height = _0x594f16.height;
    this._aspectRatio = this.aspectRatio;
    if (bs(this, _0x501322, true)) {
      this.notifyPlugins("resize", {
        size: _0x594f16
      });
      F(_0x35d2f4.onResize, [this, _0x594f16], this);
      if (this.attached && this._doResize(_0x4b1fec)) {
        this.render();
      }
    }
  }
  ensureScalesHaveIDs() {
    const _0x1c2e41 = this.options.scales || {};
    q(_0x1c2e41, (_0x5a5679, _0x28989b) => {
      _0x5a5679.id = _0x28989b;
    });
  }
  buildOrUpdateScales() {
    const _0x239c73 = this.options;
    const _0x19951e = _0x239c73.scales;
    const _0x10d6ea = this.scales;
    const _0x1ed787 = Object.keys(_0x10d6ea).reduce((_0x2c1ee0, _0x58ac56) => {
      _0x2c1ee0[_0x58ac56] = false;
      return _0x2c1ee0;
    }, {});
    let _0x4cd858 = [];
    if (_0x19951e) {
      _0x4cd858 = _0x4cd858.concat(Object.keys(_0x19951e).map(_0x4bcddb => {
        const _0x1b4fec = _0x19951e[_0x4bcddb];
        const _0x5c0108 = pn(_0x4bcddb, _0x1b4fec);
        const _0x3deb8f = _0x5c0108 === "r";
        const _0x5bbc3d = _0x5c0108 === "x";
        return {
          options: _0x1b4fec,
          dposition: _0x3deb8f ? "chartArea" : _0x5bbc3d ? "bottom" : "left",
          dtype: _0x3deb8f ? "radialLinear" : _0x5bbc3d ? "category" : "linear"
        };
      }));
    }
    q(_0x4cd858, _0x428e26 => {
      const _0xc778d7 = _0x428e26.options;
      const _0x12cff1 = _0xc778d7.id;
      const _0x4dda9f = pn(_0x12cff1, _0xc778d7);
      const _0x5655af = T(_0xc778d7.type, _0x428e26.dtype);
      if (_0xc778d7.position === undefined || Vs(_0xc778d7.position, _0x4dda9f) !== Vs(_0x428e26.dposition)) {
        _0xc778d7.position = _0x428e26.dposition;
      }
      _0x1ed787[_0x12cff1] = true;
      let _0x49ac12 = null;
      if (_0x12cff1 in _0x10d6ea && _0x10d6ea[_0x12cff1].type === _0x5655af) {
        _0x49ac12 = _0x10d6ea[_0x12cff1];
      } else {
        const _0x34974e = ut.getScale(_0x5655af);
        _0x49ac12 = new _0x34974e({
          id: _0x12cff1,
          type: _0x5655af,
          ctx: this.ctx,
          chart: this
        });
        _0x10d6ea[_0x49ac12.id] = _0x49ac12;
      }
      _0x49ac12.init(_0xc778d7, _0x239c73);
    });
    q(_0x1ed787, (_0x12ab12, _0x43f78c) => {
      if (!_0x12ab12) {
        delete _0x10d6ea[_0x43f78c];
      }
    });
    q(_0x10d6ea, _0x2820b8 => {
      at.configure(this, _0x2820b8, _0x2820b8.options);
      at.addBox(this, _0x2820b8);
    });
  }
  _updateMetasets() {
    const _0x2a4935 = this._metasets;
    const _0x1b67fe = this.data.datasets.length;
    const _0x53e0c6 = _0x2a4935.length;
    _0x2a4935.sort((_0x220287, _0x8b968a) => _0x220287.index - _0x8b968a.index);
    if (_0x53e0c6 > _0x1b67fe) {
      for (let _0x1440d4 = _0x1b67fe; _0x1440d4 < _0x53e0c6; ++_0x1440d4) {
        this._destroyDatasetMeta(_0x1440d4);
      }
      _0x2a4935.splice(_0x1b67fe, _0x53e0c6 - _0x1b67fe);
    }
    this._sortedMetasets = _0x2a4935.slice(0).sort(Us("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: _0xd00972,
      data: {
        datasets: _0xa06a68
      }
    } = this;
    if (_0xd00972.length > _0xa06a68.length) {
      delete this._stacks;
    }
    _0xd00972.forEach((_0x295921, _0x5ee67c) => {
      if (_0xa06a68.filter(_0x351aa4 => _0x351aa4 === _0x295921._dataset).length === 0) {
        this._destroyDatasetMeta(_0x5ee67c);
      }
    });
  }
  buildOrUpdateControllers() {
    const _0x4054dc = [];
    const _0x58d62b = this.data.datasets;
    let _0x1d9744;
    let _0x58e2df;
    this._removeUnreferencedMetasets();
    _0x1d9744 = 0;
    _0x58e2df = _0x58d62b.length;
    for (; _0x1d9744 < _0x58e2df; _0x1d9744++) {
      const _0x4c7928 = _0x58d62b[_0x1d9744];
      let _0x58b1ed = this.getDatasetMeta(_0x1d9744);
      const _0x38867d = _0x4c7928.type || this.config.type;
      if (_0x58b1ed.type && _0x58b1ed.type !== _0x38867d) {
        this._destroyDatasetMeta(_0x1d9744);
        _0x58b1ed = this.getDatasetMeta(_0x1d9744);
      }
      _0x58b1ed.type = _0x38867d;
      _0x58b1ed.indexAxis = _0x4c7928.indexAxis || gn(_0x38867d, this.options);
      _0x58b1ed.order = _0x4c7928.order || 0;
      _0x58b1ed.index = _0x1d9744;
      _0x58b1ed.label = "" + _0x4c7928.label;
      _0x58b1ed.visible = this.isDatasetVisible(_0x1d9744);
      if (_0x58b1ed.controller) {
        _0x58b1ed.controller.updateIndex(_0x1d9744);
        _0x58b1ed.controller.linkScales();
      } else {
        const _0x2ad7ae = ut.getController(_0x38867d);
        const {
          datasetElementType: _0x358de0,
          dataElementType: _0x1d606a
        } = N.datasets[_0x38867d];
        Object.assign(_0x2ad7ae, {
          dataElementType: ut.getElement(_0x1d606a),
          datasetElementType: _0x358de0 && ut.getElement(_0x358de0)
        });
        _0x58b1ed.controller = new _0x2ad7ae(this, _0x1d9744);
        _0x4054dc.push(_0x58b1ed.controller);
      }
    }
    this._updateMetasets();
    return _0x4054dc;
  }
  _resetElements() {
    q(this.data.datasets, (_0x15c70a, _0x45f6a7) => {
      this.getDatasetMeta(_0x45f6a7).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements();
    this.notifyPlugins("reset");
  }
  update(_0x130471) {
    const _0x5cb255 = this.config;
    _0x5cb255.update();
    const _0x5c2065 = this._options = _0x5cb255.createResolver(_0x5cb255.chartOptionScopes(), this.getContext());
    const _0x3c9005 = this._animationsDisabled = !_0x5c2065.animation;
    this._updateScales();
    this._checkEventBindings();
    this._updateHiddenIndices();
    this._plugins.invalidate();
    if (this.notifyPlugins("beforeUpdate", {
      mode: _0x130471,
      cancelable: true
    }) === false) {
      return;
    }
    const _0x4c629a = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let _0x243d8c = 0;
    for (let _0x4ca22e = 0, _0x3de2fc = this.data.datasets.length; _0x4ca22e < _0x3de2fc; _0x4ca22e++) {
      const {
        controller: _0x3e549e
      } = this.getDatasetMeta(_0x4ca22e);
      const _0x5db9f3 = !_0x3c9005 && _0x4c629a.indexOf(_0x3e549e) === -1;
      _0x3e549e.buildOrUpdateElements(_0x5db9f3);
      _0x243d8c = Math.max(+_0x3e549e.getMaxOverflow(), _0x243d8c);
    }
    _0x243d8c = this._minPadding = _0x5c2065.layout.autoPadding ? _0x243d8c : 0;
    this._updateLayout(_0x243d8c);
    if (!_0x3c9005) {
      q(_0x4c629a, _0x28d4b5 => {
        _0x28d4b5.reset();
      });
    }
    this._updateDatasets(_0x130471);
    this.notifyPlugins("afterUpdate", {
      mode: _0x130471
    });
    this._layers.sort(Us("z", "_idx"));
    const {
      _active: _0x541b27,
      _lastEvent: _0x4b3b41
    } = this;
    if (_0x4b3b41) {
      this._eventHandler(_0x4b3b41, true);
    } else if (_0x541b27.length) {
      this._updateHoverStyles(_0x541b27, _0x541b27, true);
    }
    this.render();
  }
  _updateScales() {
    q(this.scales, _0x204ced => {
      at.removeBox(this, _0x204ced);
    });
    this.ensureScalesHaveIDs();
    this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const _0x13c59e = this.options;
    const _0x31aa85 = new Set(Object.keys(this._listeners));
    const _0x5e4332 = new Set(_0x13c59e.events);
    if (!rs(_0x31aa85, _0x5e4332) || !!this._responsiveListeners !== _0x13c59e.responsive) {
      this.unbindEvents();
      this.bindEvents();
    }
  }
  _updateHiddenIndices() {
    const {
      _hiddenIndices: _0x5e68cb
    } = this;
    const _0x1ed32b = this._getUniformDataChanges() || [];
    for (const {
      method: _0x454b99,
      start: _0x11bde6,
      count: _0x845248
    } of _0x1ed32b) {
      const _0x2be847 = _0x454b99 === "_removeElements" ? -_0x845248 : _0x845248;
      _f(_0x5e68cb, _0x11bde6, _0x2be847);
    }
  }
  _getUniformDataChanges() {
    const _0x339d25 = this._dataChanges;
    if (!_0x339d25 || !_0x339d25.length) {
      return;
    }
    this._dataChanges = [];
    const _0x9f70e9 = this.data.datasets.length;
    const _0x48cbca = _0x21a8ee => new Set(_0x339d25.filter(_0xfdf39c => _0xfdf39c[0] === _0x21a8ee).map((_0x22d840, _0x545183) => _0x545183 + "," + _0x22d840.splice(1).join(",")));
    const _0x98d2b1 = _0x48cbca(0);
    for (let _0x56d65f = 1; _0x56d65f < _0x9f70e9; _0x56d65f++) {
      if (!rs(_0x98d2b1, _0x48cbca(_0x56d65f))) {
        return;
      }
    }
    return Array.from(_0x98d2b1).map(_0x38a8d1 => _0x38a8d1.split(",")).map(_0x2a326c => ({
      method: _0x2a326c[1],
      start: +_0x2a326c[2],
      count: +_0x2a326c[3]
    }));
  }
  _updateLayout(_0x4d5cc5) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: true
    }) === false) {
      return;
    }
    at.update(this, this.width, this.height, _0x4d5cc5);
    const _0x9ece9d = this.chartArea;
    const _0xb25e6e = _0x9ece9d.width <= 0 || _0x9ece9d.height <= 0;
    this._layers = [];
    q(this.boxes, _0x528c74 => {
      if (!_0xb25e6e || _0x528c74.position !== "chartArea") {
        if (_0x528c74.configure) {
          _0x528c74.configure();
        }
        this._layers.push(..._0x528c74._layers());
      }
    }, this);
    this._layers.forEach((_0x40032d, _0x54a84e) => {
      _0x40032d._idx = _0x54a84e;
    });
    this.notifyPlugins("afterLayout");
  }
  _updateDatasets(_0x443e19) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: _0x443e19,
      cancelable: true
    }) !== false) {
      for (let _0x5bbf85 = 0, _0x557bec = this.data.datasets.length; _0x5bbf85 < _0x557bec; ++_0x5bbf85) {
        this.getDatasetMeta(_0x5bbf85).controller.configure();
      }
      for (let _0x50b20a = 0, _0x445d35 = this.data.datasets.length; _0x50b20a < _0x445d35; ++_0x50b20a) {
        this._updateDataset(_0x50b20a, Et(_0x443e19) ? _0x443e19({
          datasetIndex: _0x50b20a
        }) : _0x443e19);
      }
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: _0x443e19
      });
    }
  }
  _updateDataset(_0x101755, _0x9624a7) {
    const _0x53ec34 = this.getDatasetMeta(_0x101755);
    const _0x4a1a6e = {
      meta: _0x53ec34,
      index: _0x101755,
      mode: _0x9624a7,
      cancelable: true
    };
    if (this.notifyPlugins("beforeDatasetUpdate", _0x4a1a6e) !== false) {
      _0x53ec34.controller._update(_0x9624a7);
      _0x4a1a6e.cancelable = false;
      this.notifyPlugins("afterDatasetUpdate", _0x4a1a6e);
    }
  }
  render() {
    if (this.notifyPlugins("beforeRender", {
      cancelable: true
    }) !== false) {
      if (xt.has(this)) {
        if (this.attached && !xt.running(this)) {
          xt.start(this);
        }
      } else {
        this.draw();
        Ys({
          chart: this
        });
      }
    }
  }
  draw() {
    let _0x294a81;
    if (this._resizeBeforeDraw) {
      const {
        width: _0xfe5a13,
        height: _0x4fcac1
      } = this._resizeBeforeDraw;
      this._resize(_0xfe5a13, _0x4fcac1);
      this._resizeBeforeDraw = null;
    }
    this.clear();
    if (this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: true
    }) === false) {
      return;
    }
    const _0x57ac3a = this._layers;
    for (_0x294a81 = 0; _0x294a81 < _0x57ac3a.length && _0x57ac3a[_0x294a81].z <= 0; ++_0x294a81) {
      _0x57ac3a[_0x294a81].draw(this.chartArea);
    }
    for (this._drawDatasets(); _0x294a81 < _0x57ac3a.length; ++_0x294a81) {
      _0x57ac3a[_0x294a81].draw(this.chartArea);
    }
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(_0x36464a) {
    const _0x4383d0 = this._sortedMetasets;
    const _0x399319 = [];
    let _0x1ae7c3;
    let _0x5eb647;
    _0x1ae7c3 = 0;
    _0x5eb647 = _0x4383d0.length;
    for (; _0x1ae7c3 < _0x5eb647; ++_0x1ae7c3) {
      const _0x427208 = _0x4383d0[_0x1ae7c3];
      if (!_0x36464a || _0x427208.visible) {
        _0x399319.push(_0x427208);
      }
    }
    return _0x399319;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: true
    }) === false) {
      return;
    }
    const _0x41c938 = this.getSortedVisibleDatasetMetas();
    for (let _0xb768f7 = _0x41c938.length - 1; _0xb768f7 >= 0; --_0xb768f7) {
      this._drawDataset(_0x41c938[_0xb768f7]);
    }
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(_0x40f9a0) {
    const _0x213de9 = this.ctx;
    const _0x7650a7 = _0x40f9a0._clip;
    const _0x44a32f = !_0x7650a7.disabled;
    const _0x3ec77a = xf(_0x40f9a0, this.chartArea);
    const _0x230ec4 = {
      meta: _0x40f9a0,
      index: _0x40f9a0.index,
      cancelable: true
    };
    if (this.notifyPlugins("beforeDatasetDraw", _0x230ec4) !== false) {
      if (_0x44a32f) {
        Pn(_0x213de9, {
          left: _0x7650a7.left === false ? 0 : _0x3ec77a.left - _0x7650a7.left,
          right: _0x7650a7.right === false ? this.width : _0x3ec77a.right + _0x7650a7.right,
          top: _0x7650a7.top === false ? 0 : _0x3ec77a.top - _0x7650a7.top,
          bottom: _0x7650a7.bottom === false ? this.height : _0x3ec77a.bottom + _0x7650a7.bottom
        });
      }
      _0x40f9a0.controller.draw();
      if (_0x44a32f) {
        On(_0x213de9);
      }
      _0x230ec4.cancelable = false;
      this.notifyPlugins("afterDatasetDraw", _0x230ec4);
    }
  }
  isPointInArea(_0x43971d) {
    return Jt(_0x43971d, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(_0x38b818, _0x4ad1e6, _0x555d96, _0x3893f6) {
    const _0xd9b7ed = gd.modes[_0x4ad1e6];
    if (typeof _0xd9b7ed == "function") {
      return _0xd9b7ed(this, _0x38b818, _0x555d96, _0x3893f6);
    } else {
      return [];
    }
  }
  getDatasetMeta(_0x1d966a) {
    const _0x2493ce = this.data.datasets[_0x1d966a];
    const _0x1a6331 = this._metasets;
    let _0x212ee4 = _0x1a6331.filter(_0x303f86 => _0x303f86 && _0x303f86._dataset === _0x2493ce).pop();
    if (!_0x212ee4) {
      _0x212ee4 = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: _0x2493ce && _0x2493ce.order || 0,
        index: _0x1d966a,
        _dataset: _0x2493ce,
        _parsed: [],
        _sorted: false
      };
      _0x1a6331.push(_0x212ee4);
    }
    return _0x212ee4;
  }
  getContext() {
    return this.$context ||= oe(null, {
      chart: this,
      type: "chart"
    });
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(_0x20df6c) {
    const _0x5e2cad = this.data.datasets[_0x20df6c];
    if (!_0x5e2cad) {
      return false;
    }
    const _0x34acb6 = this.getDatasetMeta(_0x20df6c);
    if (typeof _0x34acb6.hidden == "boolean") {
      return !_0x34acb6.hidden;
    } else {
      return !_0x5e2cad.hidden;
    }
  }
  setDatasetVisibility(_0x21f9a3, _0x1da31f) {
    const _0x839137 = this.getDatasetMeta(_0x21f9a3);
    _0x839137.hidden = !_0x1da31f;
  }
  toggleDataVisibility(_0x55aedd) {
    this._hiddenIndices[_0x55aedd] = !this._hiddenIndices[_0x55aedd];
  }
  getDataVisibility(_0x57de9f) {
    return !this._hiddenIndices[_0x57de9f];
  }
  _updateVisibility(_0x44691b, _0x34adcb, _0x499e26) {
    const _0x3e8053 = _0x499e26 ? "show" : "hide";
    const _0x35e528 = this.getDatasetMeta(_0x44691b);
    const _0x1945a6 = _0x35e528.controller._resolveAnimations(undefined, _0x3e8053);
    if (Se(_0x34adcb)) {
      _0x35e528.data[_0x34adcb].hidden = !_0x499e26;
      this.update();
    } else {
      this.setDatasetVisibility(_0x44691b, _0x499e26);
      _0x1945a6.update(_0x35e528, {
        visible: _0x499e26
      });
      this.update(_0x58a08c => _0x58a08c.datasetIndex === _0x44691b ? _0x3e8053 : undefined);
    }
  }
  hide(_0x2dc99c, _0x3282bc) {
    this._updateVisibility(_0x2dc99c, _0x3282bc, false);
  }
  show(_0x1cb1e7, _0x44823b) {
    this._updateVisibility(_0x1cb1e7, _0x44823b, true);
  }
  _destroyDatasetMeta(_0x542f79) {
    const _0x154224 = this._metasets[_0x542f79];
    if (_0x154224 && _0x154224.controller) {
      _0x154224.controller._destroy();
    }
    delete this._metasets[_0x542f79];
  }
  _stop() {
    let _0x2de977;
    let _0x1ac5b1;
    this.stop();
    xt.remove(this);
    _0x2de977 = 0;
    _0x1ac5b1 = this.data.datasets.length;
    for (; _0x2de977 < _0x1ac5b1; ++_0x2de977) {
      this._destroyDatasetMeta(_0x2de977);
    }
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const {
      canvas: _0x5a8323,
      ctx: _0x3e6210
    } = this;
    this._stop();
    this.config.clearCache();
    if (_0x5a8323) {
      this.unbindEvents();
      ps(_0x5a8323, _0x3e6210);
      this.platform.releaseContext(_0x3e6210);
      this.canvas = null;
      this.ctx = null;
    }
    delete ai[this.id];
    this.notifyPlugins("afterDestroy");
  }
  toBase64Image(..._0x448817) {
    return this.canvas.toDataURL(..._0x448817);
  }
  bindEvents() {
    this.bindUserEvents();
    if (this.options.responsive) {
      this.bindResponsiveEvents();
    } else {
      this.attached = true;
    }
  }
  bindUserEvents() {
    const _0x275ed7 = this._listeners;
    const _0x36eedc = this.platform;
    const _0x1466fd = (_0x3bb65d, _0x7521a4) => {
      _0x36eedc.addEventListener(this, _0x3bb65d, _0x7521a4);
      _0x275ed7[_0x3bb65d] = _0x7521a4;
    };
    const _0x501f90 = (_0xb2a0dd, _0x23952f, _0x4b060e) => {
      _0xb2a0dd.offsetX = _0x23952f;
      _0xb2a0dd.offsetY = _0x4b060e;
      this._eventHandler(_0xb2a0dd);
    };
    q(this.options.events, _0x501b56 => _0x1466fd(_0x501b56, _0x501f90));
  }
  bindResponsiveEvents() {
    this._responsiveListeners ||= {};
    const _0x8394f8 = this._responsiveListeners;
    const _0x3c6c6e = this.platform;
    const _0x300217 = (_0x3d650b, _0x36039d) => {
      _0x3c6c6e.addEventListener(this, _0x3d650b, _0x36039d);
      _0x8394f8[_0x3d650b] = _0x36039d;
    };
    const _0x533053 = (_0x11fe2c, _0x39661d) => {
      if (_0x8394f8[_0x11fe2c]) {
        _0x3c6c6e.removeEventListener(this, _0x11fe2c, _0x39661d);
        delete _0x8394f8[_0x11fe2c];
      }
    };
    const _0x1a055e = (_0x5a8d2e, _0x5cfa4e) => {
      if (this.canvas) {
        this.resize(_0x5a8d2e, _0x5cfa4e);
      }
    };
    let _0x53fba6;
    const _0x368d54 = () => {
      _0x533053("attach", _0x368d54);
      this.attached = true;
      this.resize();
      _0x300217("resize", _0x1a055e);
      _0x300217("detach", _0x53fba6);
    };
    _0x53fba6 = () => {
      this.attached = false;
      _0x533053("resize", _0x1a055e);
      this._stop();
      this._resize(0, 0);
      _0x300217("attach", _0x368d54);
    };
    if (_0x3c6c6e.isAttached(this.canvas)) {
      _0x368d54();
    } else {
      _0x53fba6();
    }
  }
  unbindEvents() {
    q(this._listeners, (_0x382a79, _0x37a45e) => {
      this.platform.removeEventListener(this, _0x37a45e, _0x382a79);
    });
    this._listeners = {};
    q(this._responsiveListeners, (_0x2c4547, _0x2127f5) => {
      this.platform.removeEventListener(this, _0x2127f5, _0x2c4547);
    });
    this._responsiveListeners = undefined;
  }
  updateHoverStyle(_0x34bfe2, _0x227630, _0x14ff45) {
    const _0x3a2bd9 = _0x14ff45 ? "set" : "remove";
    let _0x2f7ef8;
    let _0x149ff1;
    let _0x56fa9f;
    let _0x303ef1;
    if (_0x227630 === "dataset") {
      _0x2f7ef8 = this.getDatasetMeta(_0x34bfe2[0].datasetIndex);
      _0x2f7ef8.controller["_" + _0x3a2bd9 + "DatasetHoverStyle"]();
    }
    _0x56fa9f = 0;
    _0x303ef1 = _0x34bfe2.length;
    for (; _0x56fa9f < _0x303ef1; ++_0x56fa9f) {
      _0x149ff1 = _0x34bfe2[_0x56fa9f];
      const _0x5770c5 = _0x149ff1 && this.getDatasetMeta(_0x149ff1.datasetIndex).controller;
      if (_0x5770c5) {
        _0x5770c5[_0x3a2bd9 + "HoverStyle"](_0x149ff1.element, _0x149ff1.datasetIndex, _0x149ff1.index);
      }
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(_0xe5013c) {
    const _0x447377 = this._active || [];
    const _0x5b62f2 = _0xe5013c.map(({
      datasetIndex: _0x192610,
      index: _0x1ba4b6
    }) => {
      const _0x47b509 = this.getDatasetMeta(_0x192610);
      if (!_0x47b509) {
        throw new Error("No dataset found at index " + _0x192610);
      }
      return {
        datasetIndex: _0x192610,
        element: _0x47b509.data[_0x1ba4b6],
        index: _0x1ba4b6
      };
    });
    if (!ss(_0x5b62f2, _0x447377)) {
      this._active = _0x5b62f2;
      this._lastEvent = null;
      this._updateHoverStyles(_0x5b62f2, _0x447377);
    }
  }
  notifyPlugins(_0xe75e4c, _0xfd29d6, _0x19f8a9) {
    return this._plugins.notify(this, _0xe75e4c, _0xfd29d6, _0x19f8a9);
  }
  isPluginEnabled(_0x38485f) {
    return this._plugins._cache.filter(_0x36c07b => _0x36c07b.plugin.id === _0x38485f).length === 1;
  }
  _updateHoverStyles(_0x5d6468, _0x2b62cb, _0x530868) {
    const _0x568cbf = this.options.hover;
    const _0x4db440 = (_0xddc06b, _0x1af5f1) => _0xddc06b.filter(_0x220a9c => !_0x1af5f1.some(_0x519411 => _0x220a9c.datasetIndex === _0x519411.datasetIndex && _0x220a9c.index === _0x519411.index));
    const _0x11fbfa = _0x4db440(_0x2b62cb, _0x5d6468);
    const _0x510a5e = _0x530868 ? _0x5d6468 : _0x4db440(_0x5d6468, _0x2b62cb);
    if (_0x11fbfa.length) {
      this.updateHoverStyle(_0x11fbfa, _0x568cbf.mode, false);
    }
    if (_0x510a5e.length && _0x568cbf.mode) {
      this.updateHoverStyle(_0x510a5e, _0x568cbf.mode, true);
    }
  }
  _eventHandler(_0x317ae6, _0x363786) {
    const _0x4a029c = {
      event: _0x317ae6,
      replay: _0x363786,
      cancelable: true,
      inChartArea: this.isPointInArea(_0x317ae6)
    };
    const _0x181da0 = _0x141075 => (_0x141075.options.events || this.options.events).includes(_0x317ae6.native.type);
    if (this.notifyPlugins("beforeEvent", _0x4a029c, _0x181da0) === false) {
      return;
    }
    const _0x172b1d = this._handleEvent(_0x317ae6, _0x363786, _0x4a029c.inChartArea);
    _0x4a029c.cancelable = false;
    this.notifyPlugins("afterEvent", _0x4a029c, _0x181da0);
    if (_0x172b1d || _0x4a029c.changed) {
      this.render();
    }
    return this;
  }
  _handleEvent(_0x11d7ba, _0x477444, _0x15a40d) {
    const {
      _active: _0x30d5c0 = [],
      options: _0x29f5c4
    } = this;
    const _0x4c5856 = _0x477444;
    const _0x3ddbf4 = this._getActiveElements(_0x11d7ba, _0x30d5c0, _0x15a40d, _0x4c5856);
    const _0x27d1e2 = Fc(_0x11d7ba);
    const _0x271b35 = bf(_0x11d7ba, this._lastEvent, _0x15a40d, _0x27d1e2);
    if (_0x15a40d) {
      this._lastEvent = null;
      F(_0x29f5c4.onHover, [_0x11d7ba, _0x3ddbf4, this], this);
      if (_0x27d1e2) {
        F(_0x29f5c4.onClick, [_0x11d7ba, _0x3ddbf4, this], this);
      }
    }
    const _0x421bf3 = !ss(_0x3ddbf4, _0x30d5c0);
    if (_0x421bf3 || _0x477444) {
      this._active = _0x3ddbf4;
      this._updateHoverStyles(_0x3ddbf4, _0x30d5c0, _0x477444);
    }
    this._lastEvent = _0x271b35;
    return _0x421bf3;
  }
  _getActiveElements(_0x3dcf19, _0x53452e, _0x4a9e61, _0xfcab89) {
    if (_0x3dcf19.type === "mouseout") {
      return [];
    }
    if (!_0x4a9e61) {
      return _0x53452e;
    }
    const _0x4d32a1 = this.options.hover;
    return this.getElementsAtEventForMode(_0x3dcf19, _0x4d32a1.mode, _0x4d32a1, _0xfcab89);
  }
}
function qs() {
  return q(Pe.instances, _0x1cef22 => _0x1cef22._plugins.invalidate());
}
function ar(_0x2d0c8f, _0x394ca0) {
  const {
    x: _0x4eccd5,
    y: _0x159207,
    base: _0x1ca03e,
    width: _0x3dc6cd,
    height: _0x19bebb
  } = _0x2d0c8f.getProps(["x", "y", "base", "width", "height"], _0x394ca0);
  let _0x290f3d;
  let _0x32e97d;
  let _0x564760;
  let _0x518f52;
  let _0x4a75cf;
  if (_0x2d0c8f.horizontal) {
    _0x4a75cf = _0x19bebb / 2;
    _0x290f3d = Math.min(_0x4eccd5, _0x1ca03e);
    _0x32e97d = Math.max(_0x4eccd5, _0x1ca03e);
    _0x564760 = _0x159207 - _0x4a75cf;
    _0x518f52 = _0x159207 + _0x4a75cf;
  } else {
    _0x4a75cf = _0x3dc6cd / 2;
    _0x290f3d = _0x4eccd5 - _0x4a75cf;
    _0x32e97d = _0x4eccd5 + _0x4a75cf;
    _0x564760 = Math.min(_0x159207, _0x1ca03e);
    _0x518f52 = Math.max(_0x159207, _0x1ca03e);
  }
  return {
    left: _0x290f3d,
    top: _0x564760,
    right: _0x32e97d,
    bottom: _0x518f52
  };
}
function At(_0x546f78, _0x3faae2, _0x1e07d6, _0x143748) {
  if (_0x546f78) {
    return 0;
  } else {
    return $t(_0x3faae2, _0x1e07d6, _0x143748);
  }
}
function vf(_0x1d3dbc, _0x16db8e, _0x5da1b1) {
  const _0x45348e = _0x1d3dbc.options.borderWidth;
  const _0x3faefa = _0x1d3dbc.borderSkipped;
  const _0x637735 = Uo(_0x45348e);
  return {
    t: At(_0x3faefa.top, _0x637735.top, 0, _0x5da1b1),
    r: At(_0x3faefa.right, _0x637735.right, 0, _0x16db8e),
    b: At(_0x3faefa.bottom, _0x637735.bottom, 0, _0x5da1b1),
    l: At(_0x3faefa.left, _0x637735.left, 0, _0x16db8e)
  };
}
function yf(_0x1d4a8e, _0x551b5f, _0x33241f) {
  const {
    enableBorderRadius: _0x182bac
  } = _0x1d4a8e.getProps(["enableBorderRadius"]);
  const _0x5e7b8f = _0x1d4a8e.options.borderRadius;
  const _0x5a6c52 = Dn(_0x5e7b8f);
  const _0x1386cc = Math.min(_0x551b5f, _0x33241f);
  const _0x265329 = _0x1d4a8e.borderSkipped;
  const _0x299459 = _0x182bac || L(_0x5e7b8f);
  return {
    topLeft: At(!_0x299459 || _0x265329.top || _0x265329.left, _0x5a6c52.topLeft, 0, _0x1386cc),
    topRight: At(!_0x299459 || _0x265329.top || _0x265329.right, _0x5a6c52.topRight, 0, _0x1386cc),
    bottomLeft: At(!_0x299459 || _0x265329.bottom || _0x265329.left, _0x5a6c52.bottomLeft, 0, _0x1386cc),
    bottomRight: At(!_0x299459 || _0x265329.bottom || _0x265329.right, _0x5a6c52.bottomRight, 0, _0x1386cc)
  };
}
function wf(_0x13b254) {
  const _0x28a1f8 = ar(_0x13b254);
  const _0x674ab0 = _0x28a1f8.right - _0x28a1f8.left;
  const _0x123890 = _0x28a1f8.bottom - _0x28a1f8.top;
  const _0x7bd3f4 = vf(_0x13b254, _0x674ab0 / 2, _0x123890 / 2);
  const _0x4d6ef1 = yf(_0x13b254, _0x674ab0 / 2, _0x123890 / 2);
  return {
    outer: {
      x: _0x28a1f8.left,
      y: _0x28a1f8.top,
      w: _0x674ab0,
      h: _0x123890,
      radius: _0x4d6ef1
    },
    inner: {
      x: _0x28a1f8.left + _0x7bd3f4.l,
      y: _0x28a1f8.top + _0x7bd3f4.t,
      w: _0x674ab0 - _0x7bd3f4.l - _0x7bd3f4.r,
      h: _0x123890 - _0x7bd3f4.t - _0x7bd3f4.b,
      radius: {
        topLeft: Math.max(0, _0x4d6ef1.topLeft - Math.max(_0x7bd3f4.t, _0x7bd3f4.l)),
        topRight: Math.max(0, _0x4d6ef1.topRight - Math.max(_0x7bd3f4.t, _0x7bd3f4.r)),
        bottomLeft: Math.max(0, _0x4d6ef1.bottomLeft - Math.max(_0x7bd3f4.b, _0x7bd3f4.l)),
        bottomRight: Math.max(0, _0x4d6ef1.bottomRight - Math.max(_0x7bd3f4.b, _0x7bd3f4.r))
      }
    }
  };
}
function Ji(_0x47ec8f, _0x35ae84, _0x221fa2, _0x20c52f) {
  const _0x3aaa91 = _0x35ae84 === null;
  const _0x4bf1d9 = _0x221fa2 === null;
  const _0x14eca0 = _0x47ec8f && (!_0x3aaa91 || !_0x4bf1d9) && ar(_0x47ec8f, _0x20c52f);
  return _0x14eca0 && (_0x3aaa91 || Qt(_0x35ae84, _0x14eca0.left, _0x14eca0.right)) && (_0x4bf1d9 || Qt(_0x221fa2, _0x14eca0.top, _0x14eca0.bottom));
}
function kf(_0x3b94c7) {
  return _0x3b94c7.topLeft || _0x3b94c7.topRight || _0x3b94c7.bottomLeft || _0x3b94c7.bottomRight;
}
function $f(_0x1cf925, _0x353483) {
  _0x1cf925.rect(_0x353483.x, _0x353483.y, _0x353483.w, _0x353483.h);
}
function tn(_0x3d2611, _0x524b05, _0x4bfc66 = {}) {
  const _0x2aa5bb = _0x3d2611.x !== _0x4bfc66.x ? -_0x524b05 : 0;
  const _0x1f2f73 = _0x3d2611.y !== _0x4bfc66.y ? -_0x524b05 : 0;
  const _0x12fc96 = (_0x3d2611.x + _0x3d2611.w !== _0x4bfc66.x + _0x4bfc66.w ? _0x524b05 : 0) - _0x2aa5bb;
  const _0x117a97 = (_0x3d2611.y + _0x3d2611.h !== _0x4bfc66.y + _0x4bfc66.h ? _0x524b05 : 0) - _0x1f2f73;
  return {
    x: _0x3d2611.x + _0x2aa5bb,
    y: _0x3d2611.y + _0x1f2f73,
    w: _0x3d2611.w + _0x12fc96,
    h: _0x3d2611.h + _0x117a97,
    radius: _0x3d2611.radius
  };
}
class Mf extends Re {
  static id = "bar";
  static defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: undefined
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(_0x3bc8b2) {
    super();
    this.options = undefined;
    this.horizontal = undefined;
    this.base = undefined;
    this.width = undefined;
    this.height = undefined;
    this.inflateAmount = undefined;
    if (_0x3bc8b2) {
      Object.assign(this, _0x3bc8b2);
    }
  }
  draw(_0x49681c) {
    const {
      inflateAmount: _0x4aee7a,
      options: {
        borderColor: _0x4fa19a,
        backgroundColor: _0x2eb868
      }
    } = this;
    const {
      inner: _0x264734,
      outer: _0x434bff
    } = wf(this);
    const _0x4f74ed = kf(_0x434bff.radius) ? An : $f;
    _0x49681c.save();
    if (_0x434bff.w !== _0x264734.w || _0x434bff.h !== _0x264734.h) {
      _0x49681c.beginPath();
      _0x4f74ed(_0x49681c, tn(_0x434bff, _0x4aee7a, _0x264734));
      _0x49681c.clip();
      _0x4f74ed(_0x49681c, tn(_0x264734, -_0x4aee7a, _0x434bff));
      _0x49681c.fillStyle = _0x4fa19a;
      _0x49681c.fill("evenodd");
    }
    _0x49681c.beginPath();
    _0x4f74ed(_0x49681c, tn(_0x264734, _0x4aee7a));
    _0x49681c.fillStyle = _0x2eb868;
    _0x49681c.fill();
    _0x49681c.restore();
  }
  inRange(_0x20ab7a, _0x10f94e, _0x241ffa) {
    return Ji(this, _0x20ab7a, _0x10f94e, _0x241ffa);
  }
  inXRange(_0x1b7528, _0x87efc) {
    return Ji(this, _0x1b7528, null, _0x87efc);
  }
  inYRange(_0x5a9ac8, _0x19d269) {
    return Ji(this, null, _0x5a9ac8, _0x19d269);
  }
  getCenterPoint(_0x21736c) {
    const {
      x: _0xafb078,
      y: _0xbd24b2,
      base: _0x227d36,
      horizontal: _0x2c6db2
    } = this.getProps(["x", "y", "base", "horizontal"], _0x21736c);
    return {
      x: _0x2c6db2 ? (_0xafb078 + _0x227d36) / 2 : _0xafb078,
      y: _0x2c6db2 ? _0xbd24b2 : (_0xbd24b2 + _0x227d36) / 2
    };
  }
  getRange(_0x3f35bc) {
    if (_0x3f35bc === "x") {
      return this.width / 2;
    } else {
      return this.height / 2;
    }
  }
}
const mn = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"];
const Xs = mn.map(_0x571e23 => _0x571e23.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function lr(_0x39734f) {
  return mn[_0x39734f % mn.length];
}
function cr(_0x46bf9f) {
  return Xs[_0x46bf9f % Xs.length];
}
function Sf(_0x137222, _0xa27710) {
  _0x137222.borderColor = lr(_0xa27710);
  _0x137222.backgroundColor = cr(_0xa27710);
  return ++_0xa27710;
}
function Cf(_0x19721a, _0x349db1) {
  _0x19721a.backgroundColor = _0x19721a.data.map(() => lr(_0x349db1++));
  return _0x349db1;
}
function Pf(_0x8227a0, _0x396dc8) {
  _0x8227a0.backgroundColor = _0x8227a0.data.map(() => cr(_0x396dc8++));
  return _0x396dc8;
}
function Of(_0x5a91c5) {
  let _0x37fd36 = 0;
  return (_0x43ecd6, _0x3aa1cd) => {
    const _0x4a26e0 = _0x5a91c5.getDatasetMeta(_0x3aa1cd).controller;
    if (_0x4a26e0 instanceof ad) {
      _0x37fd36 = Cf(_0x43ecd6, _0x37fd36);
    } else if (_0x4a26e0 instanceof ld) {
      _0x37fd36 = Pf(_0x43ecd6, _0x37fd36);
    } else if (_0x4a26e0) {
      _0x37fd36 = Sf(_0x43ecd6, _0x37fd36);
    }
  };
}
function Gs(_0x3a9584) {
  let _0x3fe3db;
  for (_0x3fe3db in _0x3a9584) {
    if (_0x3a9584[_0x3fe3db].borderColor || _0x3a9584[_0x3fe3db].backgroundColor) {
      return true;
    }
  }
  return false;
}
function Af(_0x2326d4) {
  return _0x2326d4 && (_0x2326d4.borderColor || _0x2326d4.backgroundColor);
}
var Zs = {
  id: "colors",
  defaults: {
    enabled: true,
    forceOverride: false
  },
  beforeLayout(_0x5e2095, _0x5870d6, _0x2f228d) {
    if (!_0x2f228d.enabled) {
      return;
    }
    const {
      data: {
        datasets: _0x2a148c
      },
      options: _0x44712b
    } = _0x5e2095.config;
    const {
      elements: _0x3a0916
    } = _0x44712b;
    if (!_0x2f228d.forceOverride && (Gs(_0x2a148c) || Af(_0x44712b) || _0x3a0916 && Gs(_0x3a0916))) {
      return;
    }
    const _0x360b2a = Of(_0x5e2095);
    _0x2a148c.forEach(_0x360b2a);
  }
};
const Qs = (_0x512597, _0x16fae7) => {
  let {
    boxHeight: _0xef14b8 = _0x16fae7,
    boxWidth: _0x50fae1 = _0x16fae7
  } = _0x512597;
  if (_0x512597.usePointStyle) {
    _0xef14b8 = Math.min(_0xef14b8, _0x16fae7);
    _0x50fae1 = _0x512597.pointStyleWidth || Math.min(_0x50fae1, _0x16fae7);
  }
  return {
    boxWidth: _0x50fae1,
    boxHeight: _0xef14b8,
    itemHeight: Math.max(_0x16fae7, _0xef14b8)
  };
};
const Df = (_0x33cc31, _0x454010) => _0x33cc31 !== null && _0x454010 !== null && _0x33cc31.datasetIndex === _0x454010.datasetIndex && _0x33cc31.index === _0x454010.index;
class Js extends Re {
  constructor(_0x2d2a87) {
    super();
    this._added = false;
    this.legendHitBoxes = [];
    this._hoveredItem = null;
    this.doughnutMode = false;
    this.chart = _0x2d2a87.chart;
    this.options = _0x2d2a87.options;
    this.ctx = _0x2d2a87.ctx;
    this.legendItems = undefined;
    this.columnSizes = undefined;
    this.lineWidths = undefined;
    this.maxHeight = undefined;
    this.maxWidth = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.height = undefined;
    this.width = undefined;
    this._margins = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(_0x1a493f, _0x2c0fae, _0x46004f) {
    this.maxWidth = _0x1a493f;
    this.maxHeight = _0x2c0fae;
    this._margins = _0x46004f;
    this.setDimensions();
    this.buildLabels();
    this.fit();
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = this._margins.left;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = this._margins.top;
      this.bottom = this.height;
    }
  }
  buildLabels() {
    const _0x14d6c5 = this.options.labels || {};
    let _0xf217a9 = F(_0x14d6c5.generateLabels, [this.chart], this) || [];
    if (_0x14d6c5.filter) {
      _0xf217a9 = _0xf217a9.filter(_0x1fb835 => _0x14d6c5.filter(_0x1fb835, this.chart.data));
    }
    if (_0x14d6c5.sort) {
      _0xf217a9 = _0xf217a9.sort((_0x368047, _0x4f52eb) => _0x14d6c5.sort(_0x368047, _0x4f52eb, this.chart.data));
    }
    if (this.options.reverse) {
      _0xf217a9.reverse();
    }
    this.legendItems = _0xf217a9;
  }
  fit() {
    const {
      options: _0x50d21d,
      ctx: _0x354d8f
    } = this;
    if (!_0x50d21d.display) {
      this.width = this.height = 0;
      return;
    }
    const _0xfa6cd6 = _0x50d21d.labels;
    const _0x2c9970 = rt(_0xfa6cd6.font);
    const _0x1b593f = _0x2c9970.size;
    const _0x1eca7b = this._computeTitleHeight();
    const {
      boxWidth: _0x548c2f,
      itemHeight: _0x44507f
    } = Qs(_0xfa6cd6, _0x1b593f);
    let _0xc4ce53;
    let _0x4644bc;
    _0x354d8f.font = _0x2c9970.string;
    if (this.isHorizontal()) {
      _0xc4ce53 = this.maxWidth;
      _0x4644bc = this._fitRows(_0x1eca7b, _0x1b593f, _0x548c2f, _0x44507f) + 10;
    } else {
      _0x4644bc = this.maxHeight;
      _0xc4ce53 = this._fitCols(_0x1eca7b, _0x2c9970, _0x548c2f, _0x44507f) + 10;
    }
    this.width = Math.min(_0xc4ce53, _0x50d21d.maxWidth || this.maxWidth);
    this.height = Math.min(_0x4644bc, _0x50d21d.maxHeight || this.maxHeight);
  }
  _fitRows(_0x903c62, _0x5d72a2, _0x1f09c8, _0x3cc771) {
    const {
      ctx: _0x16b6b3,
      maxWidth: _0x25a84e,
      options: {
        labels: {
          padding: _0x15710a
        }
      }
    } = this;
    const _0x3e907d = this.legendHitBoxes = [];
    const _0x3e64ae = this.lineWidths = [0];
    const _0x4672af = _0x3cc771 + _0x15710a;
    let _0x1dc0a5 = _0x903c62;
    _0x16b6b3.textAlign = "left";
    _0x16b6b3.textBaseline = "middle";
    let _0x36e7ad = -1;
    let _0x3dd6a3 = -_0x4672af;
    this.legendItems.forEach((_0x1cf7ca, _0x175b03) => {
      const _0x174863 = _0x1f09c8 + _0x5d72a2 / 2 + _0x16b6b3.measureText(_0x1cf7ca.text).width;
      if (_0x175b03 === 0 || _0x3e64ae[_0x3e64ae.length - 1] + _0x174863 + _0x15710a * 2 > _0x25a84e) {
        _0x1dc0a5 += _0x4672af;
        _0x3e64ae[_0x3e64ae.length - (_0x175b03 > 0 ? 0 : 1)] = 0;
        _0x3dd6a3 += _0x4672af;
        _0x36e7ad++;
      }
      _0x3e907d[_0x175b03] = {
        left: 0,
        top: _0x3dd6a3,
        row: _0x36e7ad,
        width: _0x174863,
        height: _0x3cc771
      };
      _0x3e64ae[_0x3e64ae.length - 1] += _0x174863 + _0x15710a;
    });
    return _0x1dc0a5;
  }
  _fitCols(_0x22f65e, _0x1fe509, _0x26f228, _0x2cde18) {
    const {
      ctx: _0x3865d3,
      maxHeight: _0x10f042,
      options: {
        labels: {
          padding: _0x21d8cf
        }
      }
    } = this;
    const _0x2554bc = this.legendHitBoxes = [];
    const _0x23e201 = this.columnSizes = [];
    const _0x36974e = _0x10f042 - _0x22f65e;
    let _0x3da6fc = _0x21d8cf;
    let _0x412bc3 = 0;
    let _0x2a7f4b = 0;
    let _0x6bb8f1 = 0;
    let _0x4c3c2d = 0;
    this.legendItems.forEach((_0x5d04c6, _0x3e6ee0) => {
      const {
        itemWidth: _0x45971b,
        itemHeight: _0x2b0f6d
      } = Lf(_0x26f228, _0x1fe509, _0x3865d3, _0x5d04c6, _0x2cde18);
      if (_0x3e6ee0 > 0 && _0x2a7f4b + _0x2b0f6d + _0x21d8cf * 2 > _0x36974e) {
        _0x3da6fc += _0x412bc3 + _0x21d8cf;
        _0x23e201.push({
          width: _0x412bc3,
          height: _0x2a7f4b
        });
        _0x6bb8f1 += _0x412bc3 + _0x21d8cf;
        _0x4c3c2d++;
        _0x412bc3 = _0x2a7f4b = 0;
      }
      _0x2554bc[_0x3e6ee0] = {
        left: _0x6bb8f1,
        top: _0x2a7f4b,
        col: _0x4c3c2d,
        width: _0x45971b,
        height: _0x2b0f6d
      };
      _0x412bc3 = Math.max(_0x412bc3, _0x45971b);
      _0x2a7f4b += _0x2b0f6d + _0x21d8cf;
    });
    _0x3da6fc += _0x412bc3;
    _0x23e201.push({
      width: _0x412bc3,
      height: _0x2a7f4b
    });
    return _0x3da6fc;
  }
  adjustHitBoxes() {
    if (!this.options.display) {
      return;
    }
    const _0x54b2fc = this._computeTitleHeight();
    const {
      legendHitBoxes: _0x37474a,
      options: {
        align: _0x1ceb3d,
        labels: {
          padding: _0x4e1c05
        },
        rtl: _0x2ef03b
      }
    } = this;
    const _0x171214 = Yi(_0x2ef03b, this.left, this.width);
    if (this.isHorizontal()) {
      let _0x25fbba = 0;
      let _0x71b5a6 = X(_0x1ceb3d, this.left + _0x4e1c05, this.right - this.lineWidths[_0x25fbba]);
      for (const _0x13744c of _0x37474a) {
        if (_0x25fbba !== _0x13744c.row) {
          _0x25fbba = _0x13744c.row;
          _0x71b5a6 = X(_0x1ceb3d, this.left + _0x4e1c05, this.right - this.lineWidths[_0x25fbba]);
        }
        _0x13744c.top += this.top + _0x54b2fc + _0x4e1c05;
        _0x13744c.left = _0x171214.leftForLtr(_0x171214.x(_0x71b5a6), _0x13744c.width);
        _0x71b5a6 += _0x13744c.width + _0x4e1c05;
      }
    } else {
      let _0x1f7e1f = 0;
      let _0x1ceebb = X(_0x1ceb3d, this.top + _0x54b2fc + _0x4e1c05, this.bottom - this.columnSizes[_0x1f7e1f].height);
      for (const _0x39421c of _0x37474a) {
        if (_0x39421c.col !== _0x1f7e1f) {
          _0x1f7e1f = _0x39421c.col;
          _0x1ceebb = X(_0x1ceb3d, this.top + _0x54b2fc + _0x4e1c05, this.bottom - this.columnSizes[_0x1f7e1f].height);
        }
        _0x39421c.top = _0x1ceebb;
        _0x39421c.left += this.left + _0x4e1c05;
        _0x39421c.left = _0x171214.leftForLtr(_0x171214.x(_0x39421c.left), _0x39421c.width);
        _0x1ceebb += _0x39421c.height + _0x4e1c05;
      }
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const _0x80df67 = this.ctx;
      Pn(_0x80df67, this);
      this._draw();
      On(_0x80df67);
    }
  }
  _draw() {
    const {
      options: _0x50f44c,
      columnSizes: _0x5c40c7,
      lineWidths: _0xc6b6a,
      ctx: _0x3f6ebc
    } = this;
    const {
      align: _0x55bdb2,
      labels: _0x3e7402
    } = _0x50f44c;
    const _0x2c6706 = N.color;
    const _0x4cf843 = Yi(_0x50f44c.rtl, this.left, this.width);
    const _0x58e882 = rt(_0x3e7402.font);
    const {
      padding: _0xbff6af
    } = _0x3e7402;
    const _0x169410 = _0x58e882.size;
    const _0x44bd25 = _0x169410 / 2;
    let _0x540701;
    this.drawTitle();
    _0x3f6ebc.textAlign = _0x4cf843.textAlign("left");
    _0x3f6ebc.textBaseline = "middle";
    _0x3f6ebc.lineWidth = 0.5;
    _0x3f6ebc.font = _0x58e882.string;
    const {
      boxWidth: _0x1487dc,
      boxHeight: _0x5ec2fc,
      itemHeight: _0x39c1bd
    } = Qs(_0x3e7402, _0x169410);
    const _0x53a6ee = function (_0x3b70ce, _0x58ec32, _0x3f11ce) {
      if (isNaN(_0x1487dc) || _0x1487dc <= 0 || isNaN(_0x5ec2fc) || _0x5ec2fc < 0) {
        return;
      }
      _0x3f6ebc.save();
      const _0x4c918a = T(_0x3f11ce.lineWidth, 1);
      _0x3f6ebc.fillStyle = T(_0x3f11ce.fillStyle, _0x2c6706);
      _0x3f6ebc.lineCap = T(_0x3f11ce.lineCap, "butt");
      _0x3f6ebc.lineDashOffset = T(_0x3f11ce.lineDashOffset, 0);
      _0x3f6ebc.lineJoin = T(_0x3f11ce.lineJoin, "miter");
      _0x3f6ebc.lineWidth = _0x4c918a;
      _0x3f6ebc.strokeStyle = T(_0x3f11ce.strokeStyle, _0x2c6706);
      _0x3f6ebc.setLineDash(T(_0x3f11ce.lineDash, []));
      if (_0x3e7402.usePointStyle) {
        const _0x28e124 = {
          radius: _0x5ec2fc * Math.SQRT2 / 2,
          pointStyle: _0x3f11ce.pointStyle,
          rotation: _0x3f11ce.rotation,
          borderWidth: _0x4c918a
        };
        const _0x57f7b5 = _0x4cf843.xPlus(_0x3b70ce, _0x1487dc / 2);
        const _0x251c51 = _0x58ec32 + _0x44bd25;
        sh(_0x3f6ebc, _0x28e124, _0x57f7b5, _0x251c51, _0x3e7402.pointStyleWidth && _0x1487dc);
      } else {
        const _0x4dc53c = _0x58ec32 + Math.max((_0x169410 - _0x5ec2fc) / 2, 0);
        const _0x2ff2f7 = _0x4cf843.leftForLtr(_0x3b70ce, _0x1487dc);
        const _0x2eb8c4 = Dn(_0x3f11ce.borderRadius);
        _0x3f6ebc.beginPath();
        if (Object.values(_0x2eb8c4).some(_0xe9330 => _0xe9330 !== 0)) {
          An(_0x3f6ebc, {
            x: _0x2ff2f7,
            y: _0x4dc53c,
            w: _0x1487dc,
            h: _0x5ec2fc,
            radius: _0x2eb8c4
          });
        } else {
          _0x3f6ebc.rect(_0x2ff2f7, _0x4dc53c, _0x1487dc, _0x5ec2fc);
        }
        _0x3f6ebc.fill();
        if (_0x4c918a !== 0) {
          _0x3f6ebc.stroke();
        }
      }
      _0x3f6ebc.restore();
    };
    const _0x557704 = function (_0x2ed5af, _0x69ca94, _0x55aecc) {
      Vt(_0x3f6ebc, _0x55aecc.text, _0x2ed5af, _0x69ca94 + _0x39c1bd / 2, _0x58e882, {
        strikethrough: _0x55aecc.hidden,
        textAlign: _0x4cf843.textAlign(_0x55aecc.textAlign)
      });
    };
    const _0x541b5e = this.isHorizontal();
    const _0xffbb2f = this._computeTitleHeight();
    if (_0x541b5e) {
      _0x540701 = {
        x: X(_0x55bdb2, this.left + _0xbff6af, this.right - _0xc6b6a[0]),
        y: this.top + _0xbff6af + _0xffbb2f,
        line: 0
      };
    } else {
      _0x540701 = {
        x: this.left + _0xbff6af,
        y: X(_0x55bdb2, this.top + _0xffbb2f + _0xbff6af, this.bottom - _0x5c40c7[0].height),
        line: 0
      };
    }
    Lh(this.ctx, _0x50f44c.textDirection);
    const _0x7f0e89 = _0x39c1bd + _0xbff6af;
    this.legendItems.forEach((_0x2d30a0, _0x5c8b52) => {
      _0x3f6ebc.strokeStyle = _0x2d30a0.fontColor;
      _0x3f6ebc.fillStyle = _0x2d30a0.fontColor;
      const _0x1860cd = _0x3f6ebc.measureText(_0x2d30a0.text).width;
      const _0x23a751 = _0x4cf843.textAlign(_0x2d30a0.textAlign ||= _0x3e7402.textAlign);
      const _0x54ba8c = _0x1487dc + _0x44bd25 + _0x1860cd;
      let _0x510664 = _0x540701.x;
      let _0x564424 = _0x540701.y;
      _0x4cf843.setWidth(this.width);
      if (_0x541b5e) {
        if (_0x5c8b52 > 0 && _0x510664 + _0x54ba8c + _0xbff6af > this.right) {
          _0x564424 = _0x540701.y += _0x7f0e89;
          _0x540701.line++;
          _0x510664 = _0x540701.x = X(_0x55bdb2, this.left + _0xbff6af, this.right - _0xc6b6a[_0x540701.line]);
        }
      } else if (_0x5c8b52 > 0 && _0x564424 + _0x7f0e89 > this.bottom) {
        _0x510664 = _0x540701.x = _0x510664 + _0x5c40c7[_0x540701.line].width + _0xbff6af;
        _0x540701.line++;
        _0x564424 = _0x540701.y = X(_0x55bdb2, this.top + _0xffbb2f + _0xbff6af, this.bottom - _0x5c40c7[_0x540701.line].height);
      }
      const _0xbf340b = _0x4cf843.x(_0x510664);
      _0x53a6ee(_0xbf340b, _0x564424, _0x2d30a0);
      _0x510664 = Kc(_0x23a751, _0x510664 + _0x1487dc + _0x44bd25, _0x541b5e ? _0x510664 + _0x54ba8c : this.right, _0x50f44c.rtl);
      _0x557704(_0x4cf843.x(_0x510664), _0x564424, _0x2d30a0);
      if (_0x541b5e) {
        _0x540701.x += _0x54ba8c + _0xbff6af;
      } else if (typeof _0x2d30a0.text != "string") {
        const _0x3b418a = _0x58e882.lineHeight;
        _0x540701.y += hr(_0x2d30a0, _0x3b418a) + _0xbff6af;
      } else {
        _0x540701.y += _0x7f0e89;
      }
    });
    Th(this.ctx, _0x50f44c.textDirection);
  }
  drawTitle() {
    const _0x43eda1 = this.options;
    const _0xffcee6 = _0x43eda1.title;
    const _0x259bad = rt(_0xffcee6.font);
    const _0x3582ba = nt(_0xffcee6.padding);
    if (!_0xffcee6.display) {
      return;
    }
    const _0x271206 = Yi(_0x43eda1.rtl, this.left, this.width);
    const _0x5f349a = this.ctx;
    const _0x4ca78f = _0xffcee6.position;
    const _0x362254 = _0x259bad.size / 2;
    const _0x217415 = _0x3582ba.top + _0x362254;
    let _0x3a2df9;
    let _0x399b45 = this.left;
    let _0x53a16f = this.width;
    if (this.isHorizontal()) {
      _0x53a16f = Math.max(...this.lineWidths);
      _0x3a2df9 = this.top + _0x217415;
      _0x399b45 = X(_0x43eda1.align, _0x399b45, this.right - _0x53a16f);
    } else {
      const _0x486895 = this.columnSizes.reduce((_0x11f6ee, _0x463664) => Math.max(_0x11f6ee, _0x463664.height), 0);
      _0x3a2df9 = _0x217415 + X(_0x43eda1.align, this.top, this.bottom - _0x486895 - _0x43eda1.labels.padding - this._computeTitleHeight());
    }
    const _0x390b38 = X(_0x4ca78f, _0x399b45, _0x399b45 + _0x53a16f);
    _0x5f349a.textAlign = _0x271206.textAlign(Cn(_0x4ca78f));
    _0x5f349a.textBaseline = "middle";
    _0x5f349a.strokeStyle = _0xffcee6.color;
    _0x5f349a.fillStyle = _0xffcee6.color;
    _0x5f349a.font = _0x259bad.string;
    Vt(_0x5f349a, _0xffcee6.text, _0x390b38, _0x3a2df9, _0x259bad);
  }
  _computeTitleHeight() {
    const _0x3c6725 = this.options.title;
    const _0x922686 = rt(_0x3c6725.font);
    const _0x3b05b0 = nt(_0x3c6725.padding);
    if (_0x3c6725.display) {
      return _0x922686.lineHeight + _0x3b05b0.height;
    } else {
      return 0;
    }
  }
  _getLegendItemAt(_0x319849, _0x206d96) {
    let _0x12dbed;
    let _0x5e0908;
    let _0x1598e1;
    if (Qt(_0x319849, this.left, this.right) && Qt(_0x206d96, this.top, this.bottom)) {
      _0x1598e1 = this.legendHitBoxes;
      _0x12dbed = 0;
      for (; _0x12dbed < _0x1598e1.length; ++_0x12dbed) {
        _0x5e0908 = _0x1598e1[_0x12dbed];
        if (Qt(_0x319849, _0x5e0908.left, _0x5e0908.left + _0x5e0908.width) && Qt(_0x206d96, _0x5e0908.top, _0x5e0908.top + _0x5e0908.height)) {
          return this.legendItems[_0x12dbed];
        }
      }
    }
    return null;
  }
  handleEvent(_0x352a7a) {
    const _0x4409df = this.options;
    if (!Rf(_0x352a7a.type, _0x4409df)) {
      return;
    }
    const _0x4d936a = this._getLegendItemAt(_0x352a7a.x, _0x352a7a.y);
    if (_0x352a7a.type === "mousemove" || _0x352a7a.type === "mouseout") {
      const _0x365528 = this._hoveredItem;
      const _0xda36b1 = Df(_0x365528, _0x4d936a);
      if (_0x365528 && !_0xda36b1) {
        F(_0x4409df.onLeave, [_0x352a7a, _0x365528, this], this);
      }
      this._hoveredItem = _0x4d936a;
      if (_0x4d936a && !_0xda36b1) {
        F(_0x4409df.onHover, [_0x352a7a, _0x4d936a, this], this);
      }
    } else if (_0x4d936a) {
      F(_0x4409df.onClick, [_0x352a7a, _0x4d936a, this], this);
    }
  }
}
function Lf(_0x299359, _0x148acb, _0x4cc6d1, _0x339ac5, _0x3e3c51) {
  const _0x300dfc = Tf(_0x339ac5, _0x299359, _0x148acb, _0x4cc6d1);
  const _0x43bb5d = Ef(_0x3e3c51, _0x339ac5, _0x148acb.lineHeight);
  return {
    itemWidth: _0x300dfc,
    itemHeight: _0x43bb5d
  };
}
function Tf(_0x113160, _0x4b99d3, _0x292ab8, _0x152fca) {
  let _0x19a346 = _0x113160.text;
  if (_0x19a346 && typeof _0x19a346 != "string") {
    _0x19a346 = _0x19a346.reduce((_0x1ce1e7, _0x5cc55b) => _0x1ce1e7.length > _0x5cc55b.length ? _0x1ce1e7 : _0x5cc55b);
  }
  return _0x4b99d3 + _0x292ab8.size / 2 + _0x152fca.measureText(_0x19a346).width;
}
function Ef(_0x38512c, _0x42bcaf, _0x159e3b) {
  let _0x43e053 = _0x38512c;
  if (typeof _0x42bcaf.text != "string") {
    _0x43e053 = hr(_0x42bcaf, _0x159e3b);
  }
  return _0x43e053;
}
function hr(_0x29494a, _0x264e3a) {
  const _0x8693a7 = _0x29494a.text ? _0x29494a.text.length : 0;
  return _0x264e3a * _0x8693a7;
}
function Rf(_0x2459fd, _0x5b5254) {
  return (_0x2459fd === "mousemove" || _0x2459fd === "mouseout") && (!!_0x5b5254.onHover || !!_0x5b5254.onLeave) || !!_0x5b5254.onClick && (_0x2459fd === "click" || _0x2459fd === "mouseup");
}
var to = {
  id: "legend",
  _element: Js,
  start(_0x510238, _0x1b0aae, _0x5e4e45) {
    const _0xec0d3b = _0x510238.legend = new Js({
      ctx: _0x510238.ctx,
      options: _0x5e4e45,
      chart: _0x510238
    });
    at.configure(_0x510238, _0xec0d3b, _0x5e4e45);
    at.addBox(_0x510238, _0xec0d3b);
  },
  stop(_0x41e20c) {
    at.removeBox(_0x41e20c, _0x41e20c.legend);
    delete _0x41e20c.legend;
  },
  beforeUpdate(_0x2a165c, _0x29da3d, _0x1b4e5c) {
    const _0x5b28b0 = _0x2a165c.legend;
    at.configure(_0x2a165c, _0x5b28b0, _0x1b4e5c);
    _0x5b28b0.options = _0x1b4e5c;
  },
  afterUpdate(_0x3751f2) {
    const _0x1bbfed = _0x3751f2.legend;
    _0x1bbfed.buildLabels();
    _0x1bbfed.adjustHitBoxes();
  },
  afterEvent(_0x323b11, _0x24a16e) {
    if (!_0x24a16e.replay) {
      _0x323b11.legend.handleEvent(_0x24a16e.event);
    }
  },
  defaults: {
    display: true,
    position: "top",
    align: "center",
    fullSize: true,
    reverse: false,
    weight: 1000,
    onClick(_0x7c9966, _0x541bbe, _0x1be931) {
      const _0x4389a8 = _0x541bbe.datasetIndex;
      const _0x1321ac = _0x1be931.chart;
      if (_0x1321ac.isDatasetVisible(_0x4389a8)) {
        _0x1321ac.hide(_0x4389a8);
        _0x541bbe.hidden = true;
      } else {
        _0x1321ac.show(_0x4389a8);
        _0x541bbe.hidden = false;
      }
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: _0x2edbd7 => _0x2edbd7.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(_0x245d39) {
        const _0x586995 = _0x245d39.data.datasets;
        const {
          labels: {
            usePointStyle: _0x530d62,
            pointStyle: _0x18deb4,
            textAlign: _0x22e8d0,
            color: _0x59cf96,
            useBorderRadius: _0x3ffa55,
            borderRadius: _0x5bfc8e
          }
        } = _0x245d39.legend.options;
        return _0x245d39._getSortedDatasetMetas().map(_0x459af0 => {
          const _0x40775f = _0x459af0.controller.getStyle(_0x530d62 ? 0 : undefined);
          const _0x445e81 = nt(_0x40775f.borderWidth);
          return {
            text: _0x586995[_0x459af0.index].label,
            fillStyle: _0x40775f.backgroundColor,
            fontColor: _0x59cf96,
            hidden: !_0x459af0.visible,
            lineCap: _0x40775f.borderCapStyle,
            lineDash: _0x40775f.borderDash,
            lineDashOffset: _0x40775f.borderDashOffset,
            lineJoin: _0x40775f.borderJoinStyle,
            lineWidth: (_0x445e81.width + _0x445e81.height) / 4,
            strokeStyle: _0x40775f.borderColor,
            pointStyle: _0x18deb4 || _0x40775f.pointStyle,
            rotation: _0x40775f.rotation,
            textAlign: _0x22e8d0 || _0x40775f.textAlign,
            borderRadius: _0x3ffa55 && (_0x5bfc8e || _0x40775f.borderRadius),
            datasetIndex: _0x459af0.index
          };
        }, this);
      }
    },
    title: {
      color: _0x153f3c => _0x153f3c.chart.options.color,
      display: false,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: _0x2ebb38 => !_0x2ebb38.startsWith("on"),
    labels: {
      _scriptable: _0x158d26 => !["generateLabels", "filter", "sort"].includes(_0x158d26)
    }
  }
};
class dr extends Re {
  constructor(_0x2a469e) {
    super();
    this.chart = _0x2a469e.chart;
    this.options = _0x2a469e.options;
    this.ctx = _0x2a469e.ctx;
    this._padding = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(_0x205aa2, _0x369caa) {
    const _0x178340 = this.options;
    this.left = 0;
    this.top = 0;
    if (!_0x178340.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = _0x205aa2;
    this.height = this.bottom = _0x369caa;
    const _0x1e14e6 = B(_0x178340.text) ? _0x178340.text.length : 1;
    this._padding = nt(_0x178340.padding);
    const _0x2a14d6 = _0x1e14e6 * rt(_0x178340.font).lineHeight + this._padding.height;
    if (this.isHorizontal()) {
      this.height = _0x2a14d6;
    } else {
      this.width = _0x2a14d6;
    }
  }
  isHorizontal() {
    const _0x13c075 = this.options.position;
    return _0x13c075 === "top" || _0x13c075 === "bottom";
  }
  _drawArgs(_0x2ee83f) {
    const {
      top: _0x49ea37,
      left: _0x128fda,
      bottom: _0x1ce3d3,
      right: _0x3a0207,
      options: _0x8af148
    } = this;
    const _0x396bc2 = _0x8af148.align;
    let _0xea3c29 = 0;
    let _0x531546;
    let _0x2b46f4;
    let _0x5d26d4;
    if (this.isHorizontal()) {
      _0x2b46f4 = X(_0x396bc2, _0x128fda, _0x3a0207);
      _0x5d26d4 = _0x49ea37 + _0x2ee83f;
      _0x531546 = _0x3a0207 - _0x128fda;
    } else {
      if (_0x8af148.position === "left") {
        _0x2b46f4 = _0x128fda + _0x2ee83f;
        _0x5d26d4 = X(_0x396bc2, _0x1ce3d3, _0x49ea37);
        _0xea3c29 = W * -0.5;
      } else {
        _0x2b46f4 = _0x3a0207 - _0x2ee83f;
        _0x5d26d4 = X(_0x396bc2, _0x49ea37, _0x1ce3d3);
        _0xea3c29 = W * 0.5;
      }
      _0x531546 = _0x1ce3d3 - _0x49ea37;
    }
    return {
      titleX: _0x2b46f4,
      titleY: _0x5d26d4,
      maxWidth: _0x531546,
      rotation: _0xea3c29
    };
  }
  draw() {
    const _0x17645d = this.ctx;
    const _0x77afb = this.options;
    if (!_0x77afb.display) {
      return;
    }
    const _0x7a51fa = rt(_0x77afb.font);
    const _0x5cd8ab = _0x7a51fa.lineHeight / 2 + this._padding.top;
    const {
      titleX: _0x149bf0,
      titleY: _0x4e1b6c,
      maxWidth: _0x36cc4a,
      rotation: _0x9f6ced
    } = this._drawArgs(_0x5cd8ab);
    Vt(_0x17645d, _0x77afb.text, 0, 0, _0x7a51fa, {
      color: _0x77afb.color,
      maxWidth: _0x36cc4a,
      rotation: _0x9f6ced,
      textAlign: Cn(_0x77afb.align),
      textBaseline: "middle",
      translation: [_0x149bf0, _0x4e1b6c]
    });
  }
}
function If(_0x27ba23, _0x37d084) {
  const _0x113457 = new dr({
    ctx: _0x27ba23.ctx,
    options: _0x37d084,
    chart: _0x27ba23
  });
  at.configure(_0x27ba23, _0x113457, _0x37d084);
  at.addBox(_0x27ba23, _0x113457);
  _0x27ba23.titleBlock = _0x113457;
}
var eo = {
  id: "title",
  _element: dr,
  start(_0x1efff9, _0x5eeb28, _0x1e53d5) {
    If(_0x1efff9, _0x1e53d5);
  },
  stop(_0x3d61b7) {
    const _0x539097 = _0x3d61b7.titleBlock;
    at.removeBox(_0x3d61b7, _0x539097);
    delete _0x3d61b7.titleBlock;
  },
  beforeUpdate(_0x5b6bb8, _0x2183be, _0xb64dbb) {
    const _0x3b9c34 = _0x5b6bb8.titleBlock;
    at.configure(_0x5b6bb8, _0x3b9c34, _0xb64dbb);
    _0x3b9c34.options = _0xb64dbb;
  },
  defaults: {
    align: "center",
    display: false,
    font: {
      weight: "bold"
    },
    fullSize: true,
    padding: 10,
    position: "top",
    text: "",
    weight: 2000
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
const Ff = (_0x116a92, _0x59cc60, _0x3884ab, _0x124674) => {
  if (typeof _0x59cc60 == "string") {
    _0x3884ab = _0x116a92.push(_0x59cc60) - 1;
    _0x124674.unshift({
      index: _0x3884ab,
      label: _0x59cc60
    });
  } else if (isNaN(_0x59cc60)) {
    _0x3884ab = null;
  }
  return _0x3884ab;
};
function zf(_0x1440c5, _0x2d0fbe, _0x16db65, _0x4ee85f) {
  const _0x3af702 = _0x1440c5.indexOf(_0x2d0fbe);
  if (_0x3af702 === -1) {
    return Ff(_0x1440c5, _0x2d0fbe, _0x16db65, _0x4ee85f);
  }
  const _0x25b0fb = _0x1440c5.lastIndexOf(_0x2d0fbe);
  if (_0x3af702 !== _0x25b0fb) {
    return _0x16db65;
  } else {
    return _0x3af702;
  }
}
const Bf = (_0x116058, _0x108894) => _0x116058 === null ? null : $t(Math.round(_0x116058), 0, _0x108894);
function io(_0x14290a) {
  const _0x33baf8 = this.getLabels();
  if (_0x14290a >= 0 && _0x14290a < _0x33baf8.length) {
    return _0x33baf8[_0x14290a];
  } else {
    return _0x14290a;
  }
}
class _n extends Kt {
  static id = "category";
  static defaults = {
    ticks: {
      callback: io
    }
  };
  constructor(_0x15a5bc) {
    super(_0x15a5bc);
    this._startValue = undefined;
    this._valueRange = 0;
    this._addedLabels = [];
  }
  init(_0x1f07f0) {
    const _0xfe381 = this._addedLabels;
    if (_0xfe381.length) {
      const _0x463129 = this.getLabels();
      for (const {
        index: _0x3bc5f5,
        label: _0x285f8b
      } of _0xfe381) {
        if (_0x463129[_0x3bc5f5] === _0x285f8b) {
          _0x463129.splice(_0x3bc5f5, 1);
        }
      }
      this._addedLabels = [];
    }
    super.init(_0x1f07f0);
  }
  parse(_0x31e7d9, _0xccb2cf) {
    if (I(_0x31e7d9)) {
      return null;
    }
    const _0xcdf4de = this.getLabels();
    _0xccb2cf = isFinite(_0xccb2cf) && _0xcdf4de[_0xccb2cf] === _0x31e7d9 ? _0xccb2cf : zf(_0xcdf4de, _0x31e7d9, T(_0xccb2cf, _0x31e7d9), this._addedLabels);
    return Bf(_0xccb2cf, _0xcdf4de.length - 1);
  }
  determineDataLimits() {
    const {
      minDefined: _0x4aaed5,
      maxDefined: _0x5db170
    } = this.getUserBounds();
    let {
      min: _0x34bd94,
      max: _0x5a28af
    } = this.getMinMax(true);
    if (this.options.bounds === "ticks") {
      if (!_0x4aaed5) {
        _0x34bd94 = 0;
      }
      if (!_0x5db170) {
        _0x5a28af = this.getLabels().length - 1;
      }
    }
    this.min = _0x34bd94;
    this.max = _0x5a28af;
  }
  buildTicks() {
    const _0x215c93 = this.min;
    const _0xb2a5b4 = this.max;
    const _0x50f870 = this.options.offset;
    const _0xb04eac = [];
    let _0x274585 = this.getLabels();
    _0x274585 = _0x215c93 === 0 && _0xb2a5b4 === _0x274585.length - 1 ? _0x274585 : _0x274585.slice(_0x215c93, _0xb2a5b4 + 1);
    this._valueRange = Math.max(_0x274585.length - (_0x50f870 ? 0 : 1), 1);
    this._startValue = this.min - (_0x50f870 ? 0.5 : 0);
    for (let _0x2ab839 = _0x215c93; _0x2ab839 <= _0xb2a5b4; _0x2ab839++) {
      _0xb04eac.push({
        value: _0x2ab839
      });
    }
    return _0xb04eac;
  }
  getLabelForValue(_0x583080) {
    return io.call(this, _0x583080);
  }
  configure() {
    super.configure();
    if (!this.isHorizontal()) {
      this._reversePixels = !this._reversePixels;
    }
  }
  getPixelForValue(_0x247a8c) {
    if (typeof _0x247a8c != "number") {
      _0x247a8c = this.parse(_0x247a8c);
    }
    if (_0x247a8c === null) {
      return NaN;
    } else {
      return this.getPixelForDecimal((_0x247a8c - this._startValue) / this._valueRange);
    }
  }
  getPixelForTick(_0x141d5b) {
    const _0x1ae6cf = this.ticks;
    if (_0x141d5b < 0 || _0x141d5b > _0x1ae6cf.length - 1) {
      return null;
    } else {
      return this.getPixelForValue(_0x1ae6cf[_0x141d5b].value);
    }
  }
  getValueForPixel(_0x9cee53) {
    return Math.round(this._startValue + this.getDecimalForPixel(_0x9cee53) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function jf(_0xd1d8b6, _0x1a74c6) {
  const _0x598e21 = [];
  const {
    bounds: _0xb9dcf3,
    step: _0x4b8e60,
    min: _0x331b35,
    max: _0x4b4251,
    precision: _0x539668,
    count: _0x5e870e,
    maxTicks: _0x50ddbb,
    maxDigits: _0x420750,
    includeBounds: _0x1e9f6f
  } = _0xd1d8b6;
  const _0x29cfd1 = _0x4b8e60 || 1;
  const _0x54f909 = _0x50ddbb - 1;
  const {
    min: _0x323f9b,
    max: _0x4f56a2
  } = _0x1a74c6;
  const _0x454f13 = !I(_0x331b35);
  const _0x18e17c = !I(_0x4b4251);
  const _0x1c82d1 = !I(_0x5e870e);
  const _0x4c9b14 = (_0x4f56a2 - _0x323f9b) / (_0x420750 + 1);
  let _0x553312 = ls((_0x4f56a2 - _0x323f9b) / _0x54f909 / _0x29cfd1) * _0x29cfd1;
  let _0xf1ac7;
  let _0x4ea0e1;
  let _0x1f3fe9;
  let _0xd23e3d;
  if (_0x553312 < 1e-14 && !_0x454f13 && !_0x18e17c) {
    return [{
      value: _0x323f9b
    }, {
      value: _0x4f56a2
    }];
  }
  _0xd23e3d = Math.ceil(_0x4f56a2 / _0x553312) - Math.floor(_0x323f9b / _0x553312);
  if (_0xd23e3d > _0x54f909) {
    _0x553312 = ls(_0xd23e3d * _0x553312 / _0x54f909 / _0x29cfd1) * _0x29cfd1;
  }
  if (!I(_0x539668)) {
    _0xf1ac7 = Math.pow(10, _0x539668);
    _0x553312 = Math.ceil(_0x553312 * _0xf1ac7) / _0xf1ac7;
  }
  if (_0xb9dcf3 === "ticks") {
    _0x4ea0e1 = Math.floor(_0x323f9b / _0x553312) * _0x553312;
    _0x1f3fe9 = Math.ceil(_0x4f56a2 / _0x553312) * _0x553312;
  } else {
    _0x4ea0e1 = _0x323f9b;
    _0x1f3fe9 = _0x4f56a2;
  }
  if (_0x454f13 && _0x18e17c && _0x4b8e60 && jc((_0x4b4251 - _0x331b35) / _0x4b8e60, _0x553312 / 1000)) {
    _0xd23e3d = Math.round(Math.min((_0x4b4251 - _0x331b35) / _0x553312, _0x50ddbb));
    _0x553312 = (_0x4b4251 - _0x331b35) / _0xd23e3d;
    _0x4ea0e1 = _0x331b35;
    _0x1f3fe9 = _0x4b4251;
  } else if (_0x1c82d1) {
    _0x4ea0e1 = _0x454f13 ? _0x331b35 : _0x4ea0e1;
    _0x1f3fe9 = _0x18e17c ? _0x4b4251 : _0x1f3fe9;
    _0xd23e3d = _0x5e870e - 1;
    _0x553312 = (_0x1f3fe9 - _0x4ea0e1) / _0xd23e3d;
  } else {
    _0xd23e3d = (_0x1f3fe9 - _0x4ea0e1) / _0x553312;
    if (oi(_0xd23e3d, Math.round(_0xd23e3d), _0x553312 / 1000)) {
      _0xd23e3d = Math.round(_0xd23e3d);
    } else {
      _0xd23e3d = Math.ceil(_0xd23e3d);
    }
  }
  const _0x36c34c = Math.max(cs(_0x553312), cs(_0x4ea0e1));
  _0xf1ac7 = Math.pow(10, I(_0x539668) ? _0x36c34c : _0x539668);
  _0x4ea0e1 = Math.round(_0x4ea0e1 * _0xf1ac7) / _0xf1ac7;
  _0x1f3fe9 = Math.round(_0x1f3fe9 * _0xf1ac7) / _0xf1ac7;
  let _0x10da3d = 0;
  for (_0x454f13 && (_0x1e9f6f && _0x4ea0e1 !== _0x331b35 ? (_0x598e21.push({
    value: _0x331b35
  }), _0x4ea0e1 < _0x331b35 && _0x10da3d++, oi(Math.round((_0x4ea0e1 + _0x10da3d * _0x553312) * _0xf1ac7) / _0xf1ac7, _0x331b35, no(_0x331b35, _0x4c9b14, _0xd1d8b6)) && _0x10da3d++) : _0x4ea0e1 < _0x331b35 && _0x10da3d++); _0x10da3d < _0xd23e3d; ++_0x10da3d) {
    const _0x2290da = Math.round((_0x4ea0e1 + _0x10da3d * _0x553312) * _0xf1ac7) / _0xf1ac7;
    if (_0x18e17c && _0x2290da > _0x4b4251) {
      break;
    }
    _0x598e21.push({
      value: _0x2290da
    });
  }
  if (_0x18e17c && _0x1e9f6f && _0x1f3fe9 !== _0x4b4251) {
    if (_0x598e21.length && oi(_0x598e21[_0x598e21.length - 1].value, _0x4b4251, no(_0x4b4251, _0x4c9b14, _0xd1d8b6))) {
      _0x598e21[_0x598e21.length - 1].value = _0x4b4251;
    } else {
      _0x598e21.push({
        value: _0x4b4251
      });
    }
  } else if (!_0x18e17c || _0x1f3fe9 === _0x4b4251) {
    _0x598e21.push({
      value: _0x1f3fe9
    });
  }
  return _0x598e21;
}
function no(_0x28ea86, _0x51efef, {
  horizontal: _0x339e51,
  minRotation: _0x2dc0ab
}) {
  const _0x581d0e = ct(_0x2dc0ab);
  const _0x2f6add = (_0x339e51 ? Math.sin(_0x581d0e) : Math.cos(_0x581d0e)) || 0.001;
  const _0x21d028 = _0x51efef * 0.75 * ("" + _0x28ea86).length;
  return Math.min(_0x51efef / _0x2f6add, _0x21d028);
}
class wi extends Kt {
  constructor(_0x1c6d1b) {
    super(_0x1c6d1b);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }
  parse(_0x543d32, _0x23d18b) {
    if (I(_0x543d32) || (typeof _0x543d32 == "number" || _0x543d32 instanceof Number) && !isFinite(+_0x543d32)) {
      return null;
    } else {
      return +_0x543d32;
    }
  }
  handleTickRangeOptions() {
    const {
      beginAtZero: _0x522de4
    } = this.options;
    const {
      minDefined: _0x243f24,
      maxDefined: _0x35fb05
    } = this.getUserBounds();
    let {
      min: _0x40c6fd,
      max: _0x18cd5f
    } = this;
    const _0x320722 = _0x4d31b6 => _0x40c6fd = _0x243f24 ? _0x40c6fd : _0x4d31b6;
    const _0x572fc1 = _0x93526d => _0x18cd5f = _0x35fb05 ? _0x18cd5f : _0x93526d;
    if (_0x522de4) {
      const _0x5283ee = Lt(_0x40c6fd);
      const _0x2cb555 = Lt(_0x18cd5f);
      if (_0x5283ee < 0 && _0x2cb555 < 0) {
        _0x572fc1(0);
      } else if (_0x5283ee > 0 && _0x2cb555 > 0) {
        _0x320722(0);
      }
    }
    if (_0x40c6fd === _0x18cd5f) {
      let _0x11cb82 = _0x18cd5f === 0 ? 1 : Math.abs(_0x18cd5f * 0.05);
      _0x572fc1(_0x18cd5f + _0x11cb82);
      if (!_0x522de4) {
        _0x320722(_0x40c6fd - _0x11cb82);
      }
    }
    this.min = _0x40c6fd;
    this.max = _0x18cd5f;
  }
  getTickLimit() {
    const _0x318185 = this.options.ticks;
    let {
      maxTicksLimit: _0x43435e,
      stepSize: _0x3bb83e
    } = _0x318185;
    let _0x251c0;
    if (_0x3bb83e) {
      _0x251c0 = Math.ceil(this.max / _0x3bb83e) - Math.floor(this.min / _0x3bb83e) + 1;
      if (_0x251c0 > 1000) {
        console.warn("scales." + this.id + ".ticks.stepSize: " + _0x3bb83e + " would result generating up to " + _0x251c0 + " ticks. Limiting to 1000.");
        _0x251c0 = 1000;
      }
    } else {
      _0x251c0 = this.computeTickLimit();
      _0x43435e = _0x43435e || 11;
    }
    if (_0x43435e) {
      _0x251c0 = Math.min(_0x43435e, _0x251c0);
    }
    return _0x251c0;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const _0x7e5924 = this.options;
    const _0x26be97 = _0x7e5924.ticks;
    let _0x3841ea = this.getTickLimit();
    _0x3841ea = Math.max(2, _0x3841ea);
    const _0x585bfd = {
      maxTicks: _0x3841ea,
      bounds: _0x7e5924.bounds,
      min: _0x7e5924.min,
      max: _0x7e5924.max,
      precision: _0x26be97.precision,
      step: _0x26be97.stepSize,
      count: _0x26be97.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: _0x26be97.minRotation || 0,
      includeBounds: _0x26be97.includeBounds !== false
    };
    const _0xa378d1 = this._range || this;
    const _0x133950 = jf(_0x585bfd, _0xa378d1);
    if (_0x7e5924.bounds === "ticks") {
      Fo(_0x133950, this, "value");
    }
    if (_0x7e5924.reverse) {
      _0x133950.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return _0x133950;
  }
  configure() {
    const _0x479e4e = this.ticks;
    let _0x27da47 = this.min;
    let _0x21cdf5 = this.max;
    super.configure();
    if (this.options.offset && _0x479e4e.length) {
      const _0x5cac26 = (_0x21cdf5 - _0x27da47) / Math.max(_0x479e4e.length - 1, 1) / 2;
      _0x27da47 -= _0x5cac26;
      _0x21cdf5 += _0x5cac26;
    }
    this._startValue = _0x27da47;
    this._endValue = _0x21cdf5;
    this._valueRange = _0x21cdf5 - _0x27da47;
  }
  getLabelForValue(_0x3ba27d) {
    return Te(_0x3ba27d, this.chart.options.locale, this.options.ticks.format);
  }
}
class so extends wi {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Si.formatters.numeric
    }
  };
  determineDataLimits() {
    const {
      min: _0xbf1288,
      max: _0x5d1469
    } = this.getMinMax(true);
    this.min = U(_0xbf1288) ? _0xbf1288 : 0;
    this.max = U(_0x5d1469) ? _0x5d1469 : 1;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const _0x39b4dd = this.isHorizontal();
    const _0x15d71b = _0x39b4dd ? this.width : this.height;
    const _0x1e0452 = ct(this.options.ticks.minRotation);
    const _0x457c98 = (_0x39b4dd ? Math.sin(_0x1e0452) : Math.cos(_0x1e0452)) || 0.001;
    const _0x212345 = this._resolveTickFontOptions(0);
    return Math.ceil(_0x15d71b / Math.min(40, _0x212345.lineHeight / _0x457c98));
  }
  getPixelForValue(_0x2c0715) {
    if (_0x2c0715 === null) {
      return NaN;
    } else {
      return this.getPixelForDecimal((_0x2c0715 - this._startValue) / this._valueRange);
    }
  }
  getValueForPixel(_0x5248a4) {
    return this._startValue + this.getDecimalForPixel(_0x5248a4) * this._valueRange;
  }
}
const Oe = _0x2a2e4a => Math.floor(Ot(_0x2a2e4a));
const jt = (_0xd3b93a, _0x11fb9e) => Math.pow(10, Oe(_0xd3b93a) + _0x11fb9e);
function oo(_0x5e5b43) {
  return _0x5e5b43 / Math.pow(10, Oe(_0x5e5b43)) === 1;
}
function ro(_0x2a4df2, _0x577153, _0x583907) {
  const _0x5f1d0e = Math.pow(10, _0x583907);
  const _0x189618 = Math.floor(_0x2a4df2 / _0x5f1d0e);
  return Math.ceil(_0x577153 / _0x5f1d0e) - _0x189618;
}
function Nf(_0x43376e, _0x240ab8) {
  const _0x24a187 = _0x240ab8 - _0x43376e;
  let _0x5ec5d7 = Oe(_0x24a187);
  while (ro(_0x43376e, _0x240ab8, _0x5ec5d7) > 10) {
    _0x5ec5d7++;
  }
  while (ro(_0x43376e, _0x240ab8, _0x5ec5d7) < 10) {
    _0x5ec5d7--;
  }
  return Math.min(_0x5ec5d7, Oe(_0x43376e));
}
function Hf(_0x2c7baf, {
  min: _0x1ee223,
  max: _0x5bd5fd
}) {
  _0x1ee223 = et(_0x2c7baf.min, _0x1ee223);
  const _0xf52836 = [];
  const _0x209646 = Oe(_0x1ee223);
  let _0x3e0bec = Nf(_0x1ee223, _0x5bd5fd);
  let _0x9ac077 = _0x3e0bec < 0 ? Math.pow(10, Math.abs(_0x3e0bec)) : 1;
  const _0x4276c0 = Math.pow(10, _0x3e0bec);
  const _0x5c0ee6 = _0x209646 > _0x3e0bec ? Math.pow(10, _0x209646) : 0;
  const _0x3227f7 = Math.round((_0x1ee223 - _0x5c0ee6) * _0x9ac077) / _0x9ac077;
  const _0x3b7e01 = Math.floor((_0x1ee223 - _0x5c0ee6) / _0x4276c0 / 10) * _0x4276c0 * 10;
  let _0x277665 = Math.floor((_0x3227f7 - _0x3b7e01) / Math.pow(10, _0x3e0bec));
  let _0x3fb118 = et(_0x2c7baf.min, Math.round((_0x5c0ee6 + _0x3b7e01 + _0x277665 * Math.pow(10, _0x3e0bec)) * _0x9ac077) / _0x9ac077);
  while (_0x3fb118 < _0x5bd5fd) {
    _0xf52836.push({
      value: _0x3fb118,
      major: oo(_0x3fb118),
      significand: _0x277665
    });
    if (_0x277665 >= 10) {
      _0x277665 = _0x277665 < 15 ? 15 : 20;
    } else {
      _0x277665++;
    }
    if (_0x277665 >= 20) {
      _0x3e0bec++;
      _0x277665 = 2;
      _0x9ac077 = _0x3e0bec >= 0 ? 1 : _0x9ac077;
    }
    _0x3fb118 = Math.round((_0x5c0ee6 + _0x3b7e01 + _0x277665 * Math.pow(10, _0x3e0bec)) * _0x9ac077) / _0x9ac077;
  }
  const _0x77311f = et(_0x2c7baf.max, _0x3fb118);
  _0xf52836.push({
    value: _0x77311f,
    major: oo(_0x77311f),
    significand: _0x277665
  });
  return _0xf52836;
}
class vu extends Kt {
  static id = "logarithmic";
  static defaults = {
    ticks: {
      callback: Si.formatters.logarithmic,
      major: {
        enabled: true
      }
    }
  };
  constructor(_0x28fd4e) {
    super(_0x28fd4e);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(_0x37d179, _0x1e39ec) {
    const _0x4abdbb = wi.prototype.parse.apply(this, [_0x37d179, _0x1e39ec]);
    if (_0x4abdbb === 0) {
      this._zero = true;
      return;
    }
    if (U(_0x4abdbb) && _0x4abdbb > 0) {
      return _0x4abdbb;
    } else {
      return null;
    }
  }
  determineDataLimits() {
    const {
      min: _0x1e12cf,
      max: _0x1df78f
    } = this.getMinMax(true);
    this.min = U(_0x1e12cf) ? Math.max(0, _0x1e12cf) : null;
    this.max = U(_0x1df78f) ? Math.max(0, _0x1df78f) : null;
    if (this.options.beginAtZero) {
      this._zero = true;
    }
    if (this._zero && this.min !== this._suggestedMin && !U(this._userMin)) {
      this.min = _0x1e12cf === jt(this.min, 0) ? jt(this.min, -1) : jt(this.min, 0);
    }
    this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const {
      minDefined: _0x173b22,
      maxDefined: _0x401113
    } = this.getUserBounds();
    let _0x177a0a = this.min;
    let _0x4b3296 = this.max;
    const _0x4ee8dd = _0x27141 => _0x177a0a = _0x173b22 ? _0x177a0a : _0x27141;
    const _0x4edee2 = _0x51b763 => _0x4b3296 = _0x401113 ? _0x4b3296 : _0x51b763;
    if (_0x177a0a === _0x4b3296) {
      if (_0x177a0a <= 0) {
        _0x4ee8dd(1);
        _0x4edee2(10);
      } else {
        _0x4ee8dd(jt(_0x177a0a, -1));
        _0x4edee2(jt(_0x4b3296, 1));
      }
    }
    if (_0x177a0a <= 0) {
      _0x4ee8dd(jt(_0x4b3296, -1));
    }
    if (_0x4b3296 <= 0) {
      _0x4edee2(jt(_0x177a0a, 1));
    }
    this.min = _0x177a0a;
    this.max = _0x4b3296;
  }
  buildTicks() {
    const _0x3e1704 = this.options;
    const _0x22199e = {
      min: this._userMin,
      max: this._userMax
    };
    const _0x5d38b7 = Hf(_0x22199e, this);
    if (_0x3e1704.bounds === "ticks") {
      Fo(_0x5d38b7, this, "value");
    }
    if (_0x3e1704.reverse) {
      _0x5d38b7.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return _0x5d38b7;
  }
  getLabelForValue(_0xecc7b9) {
    if (_0xecc7b9 === undefined) {
      return "0";
    } else {
      return Te(_0xecc7b9, this.chart.options.locale, this.options.ticks.format);
    }
  }
  configure() {
    const _0x553d5e = this.min;
    super.configure();
    this._startValue = Ot(_0x553d5e);
    this._valueRange = Ot(this.max) - Ot(_0x553d5e);
  }
  getPixelForValue(_0x1db2a8) {
    if (_0x1db2a8 === undefined || _0x1db2a8 === 0) {
      _0x1db2a8 = this.min;
    }
    if (_0x1db2a8 === null || isNaN(_0x1db2a8)) {
      return NaN;
    } else {
      return this.getPixelForDecimal(_0x1db2a8 === this.min ? 0 : (Ot(_0x1db2a8) - this._startValue) / this._valueRange);
    }
  }
  getValueForPixel(_0x477a81) {
    const _0x565448 = this.getDecimalForPixel(_0x477a81);
    return Math.pow(10, this._startValue + _0x565448 * this._valueRange);
  }
}
function bn(_0x5d5130) {
  const _0x497027 = _0x5d5130.ticks;
  if (_0x497027.display && _0x5d5130.display) {
    const _0x317170 = nt(_0x497027.backdropPadding);
    return T(_0x497027.font && _0x497027.font.size, N.font.size) + _0x317170.height;
  }
  return 0;
}
function Wf(_0x4640c8, _0x411454, _0x38ec3e) {
  _0x38ec3e = B(_0x38ec3e) ? _0x38ec3e : [_0x38ec3e];
  return {
    w: nh(_0x4640c8, _0x411454.string, _0x38ec3e),
    h: _0x38ec3e.length * _0x411454.lineHeight
  };
}
function ao(_0x4f4aa7, _0x20c377, _0x3d6227, _0xa6322c, _0x1ed519) {
  if (_0x4f4aa7 === _0xa6322c || _0x4f4aa7 === _0x1ed519) {
    return {
      start: _0x20c377 - _0x3d6227 / 2,
      end: _0x20c377 + _0x3d6227 / 2
    };
  } else if (_0x4f4aa7 < _0xa6322c || _0x4f4aa7 > _0x1ed519) {
    return {
      start: _0x20c377 - _0x3d6227,
      end: _0x20c377
    };
  } else {
    return {
      start: _0x20c377,
      end: _0x20c377 + _0x3d6227
    };
  }
}
function Vf(_0x5d6ba) {
  const _0x30d998 = {
    l: _0x5d6ba.left + _0x5d6ba._padding.left,
    r: _0x5d6ba.right - _0x5d6ba._padding.right,
    t: _0x5d6ba.top + _0x5d6ba._padding.top,
    b: _0x5d6ba.bottom - _0x5d6ba._padding.bottom
  };
  const _0x486dfe = Object.assign({}, _0x30d998);
  const _0x2168dd = [];
  const _0x4838a9 = [];
  const _0x3c3650 = _0x5d6ba._pointLabels.length;
  const _0x3b9de3 = _0x5d6ba.options.pointLabels;
  const _0x4f1af0 = _0x3b9de3.centerPointLabels ? W / _0x3c3650 : 0;
  for (let _0x55c111 = 0; _0x55c111 < _0x3c3650; _0x55c111++) {
    const _0x3f854c = _0x3b9de3.setContext(_0x5d6ba.getPointLabelContext(_0x55c111));
    _0x4838a9[_0x55c111] = _0x3f854c.padding;
    const _0x4e5aa3 = _0x5d6ba.getPointPosition(_0x55c111, _0x5d6ba.drawingArea + _0x4838a9[_0x55c111], _0x4f1af0);
    const _0x40b6de = rt(_0x3f854c.font);
    const _0xcc5067 = Wf(_0x5d6ba.ctx, _0x40b6de, _0x5d6ba._pointLabels[_0x55c111]);
    _0x2168dd[_0x55c111] = _0xcc5067;
    const _0x4c4a7e = gt(_0x5d6ba.getIndexAngle(_0x55c111) + _0x4f1af0);
    const _0x4c5a9b = Math.round(Mn(_0x4c4a7e));
    const _0x7f3e9 = ao(_0x4c5a9b, _0x4e5aa3.x, _0xcc5067.w, 0, 180);
    const _0x596444 = ao(_0x4c5a9b, _0x4e5aa3.y, _0xcc5067.h, 90, 270);
    Uf(_0x486dfe, _0x30d998, _0x4c4a7e, _0x7f3e9, _0x596444);
  }
  _0x5d6ba.setCenterPoint(_0x30d998.l - _0x486dfe.l, _0x486dfe.r - _0x30d998.r, _0x30d998.t - _0x486dfe.t, _0x486dfe.b - _0x30d998.b);
  _0x5d6ba._pointLabelItems = qf(_0x5d6ba, _0x2168dd, _0x4838a9);
}
function Uf(_0x416bfd, _0x137ac8, _0x58c14a, _0x491bd4, _0x40b493) {
  const _0x504e15 = Math.abs(Math.sin(_0x58c14a));
  const _0x35a64e = Math.abs(Math.cos(_0x58c14a));
  let _0x252082 = 0;
  let _0x23c0eb = 0;
  if (_0x491bd4.start < _0x137ac8.l) {
    _0x252082 = (_0x137ac8.l - _0x491bd4.start) / _0x504e15;
    _0x416bfd.l = Math.min(_0x416bfd.l, _0x137ac8.l - _0x252082);
  } else if (_0x491bd4.end > _0x137ac8.r) {
    _0x252082 = (_0x491bd4.end - _0x137ac8.r) / _0x504e15;
    _0x416bfd.r = Math.max(_0x416bfd.r, _0x137ac8.r + _0x252082);
  }
  if (_0x40b493.start < _0x137ac8.t) {
    _0x23c0eb = (_0x137ac8.t - _0x40b493.start) / _0x35a64e;
    _0x416bfd.t = Math.min(_0x416bfd.t, _0x137ac8.t - _0x23c0eb);
  } else if (_0x40b493.end > _0x137ac8.b) {
    _0x23c0eb = (_0x40b493.end - _0x137ac8.b) / _0x35a64e;
    _0x416bfd.b = Math.max(_0x416bfd.b, _0x137ac8.b + _0x23c0eb);
  }
}
function Yf(_0x4fdc8f, _0x3ae8e1, _0x35fd07) {
  const _0x101bbe = _0x4fdc8f.drawingArea;
  const {
    extra: _0x2cef02,
    additionalAngle: _0x56a3c7,
    padding: _0x4b8d77,
    size: _0x3fb31a
  } = _0x35fd07;
  const _0x5cf860 = _0x4fdc8f.getPointPosition(_0x3ae8e1, _0x101bbe + _0x2cef02 + _0x4b8d77, _0x56a3c7);
  const _0x332eed = Math.round(Mn(gt(_0x5cf860.angle + Q)));
  const _0x38c84e = Zf(_0x5cf860.y, _0x3fb31a.h, _0x332eed);
  const _0x33de81 = Xf(_0x332eed);
  const _0x2fba64 = Gf(_0x5cf860.x, _0x3fb31a.w, _0x33de81);
  return {
    visible: true,
    x: _0x5cf860.x,
    y: _0x38c84e,
    textAlign: _0x33de81,
    left: _0x2fba64,
    top: _0x38c84e,
    right: _0x2fba64 + _0x3fb31a.w,
    bottom: _0x38c84e + _0x3fb31a.h
  };
}
function Kf(_0x4522ad, _0x41ae7a) {
  if (!_0x41ae7a) {
    return true;
  }
  const {
    left: _0x2a7778,
    top: _0x5be633,
    right: _0x16c751,
    bottom: _0x3b3772
  } = _0x4522ad;
  return !Jt({
    x: _0x2a7778,
    y: _0x5be633
  }, _0x41ae7a) && !Jt({
    x: _0x2a7778,
    y: _0x3b3772
  }, _0x41ae7a) && !Jt({
    x: _0x16c751,
    y: _0x5be633
  }, _0x41ae7a) && !Jt({
    x: _0x16c751,
    y: _0x3b3772
  }, _0x41ae7a);
}
function qf(_0x406c47, _0xb7e1ce, _0x4a1d7b) {
  const _0x212d60 = [];
  const _0x2dd1c2 = _0x406c47._pointLabels.length;
  const _0x202835 = _0x406c47.options;
  const {
    centerPointLabels: _0x52590d,
    display: _0x410815
  } = _0x202835.pointLabels;
  const _0x3319f2 = {
    extra: bn(_0x202835) / 2,
    additionalAngle: _0x52590d ? W / _0x2dd1c2 : 0
  };
  let _0x26822a;
  for (let _0x131991 = 0; _0x131991 < _0x2dd1c2; _0x131991++) {
    _0x3319f2.padding = _0x4a1d7b[_0x131991];
    _0x3319f2.size = _0xb7e1ce[_0x131991];
    const _0x25c391 = Yf(_0x406c47, _0x131991, _0x3319f2);
    _0x212d60.push(_0x25c391);
    if (_0x410815 === "auto") {
      _0x25c391.visible = Kf(_0x25c391, _0x26822a);
      if (_0x25c391.visible) {
        _0x26822a = _0x25c391;
      }
    }
  }
  return _0x212d60;
}
function Xf(_0x3fe1ea) {
  if (_0x3fe1ea === 0 || _0x3fe1ea === 180) {
    return "center";
  } else if (_0x3fe1ea < 180) {
    return "left";
  } else {
    return "right";
  }
}
function Gf(_0x611d10, _0x4018ba, _0xb682ec) {
  if (_0xb682ec === "right") {
    _0x611d10 -= _0x4018ba;
  } else if (_0xb682ec === "center") {
    _0x611d10 -= _0x4018ba / 2;
  }
  return _0x611d10;
}
function Zf(_0x17965e, _0x48390b, _0x1792ab) {
  if (_0x1792ab === 90 || _0x1792ab === 270) {
    _0x17965e -= _0x48390b / 2;
  } else if (_0x1792ab > 270 || _0x1792ab < 90) {
    _0x17965e -= _0x48390b;
  }
  return _0x17965e;
}
function Qf(_0x26f119, _0xdfe7e8, _0x4ff843) {
  const {
    left: _0x517657,
    top: _0x4f7dc1,
    right: _0x5950cd,
    bottom: _0x234442
  } = _0x4ff843;
  const {
    backdropColor: _0x27db82
  } = _0xdfe7e8;
  if (!I(_0x27db82)) {
    const _0x1f7232 = Dn(_0xdfe7e8.borderRadius);
    const _0x48aff6 = nt(_0xdfe7e8.backdropPadding);
    _0x26f119.fillStyle = _0x27db82;
    const _0x2b260b = _0x517657 - _0x48aff6.left;
    const _0x3e5a59 = _0x4f7dc1 - _0x48aff6.top;
    const _0x412dc2 = _0x5950cd - _0x517657 + _0x48aff6.width;
    const _0x1b33d1 = _0x234442 - _0x4f7dc1 + _0x48aff6.height;
    if (Object.values(_0x1f7232).some(_0x3d9a95 => _0x3d9a95 !== 0)) {
      _0x26f119.beginPath();
      An(_0x26f119, {
        x: _0x2b260b,
        y: _0x3e5a59,
        w: _0x412dc2,
        h: _0x1b33d1,
        radius: _0x1f7232
      });
      _0x26f119.fill();
    } else {
      _0x26f119.fillRect(_0x2b260b, _0x3e5a59, _0x412dc2, _0x1b33d1);
    }
  }
}
function Jf(_0x49d8e5, _0x4085dc) {
  const {
    ctx: _0x3c1a7c,
    options: {
      pointLabels: _0x40f1f8
    }
  } = _0x49d8e5;
  for (let _0x40af8e = _0x4085dc - 1; _0x40af8e >= 0; _0x40af8e--) {
    const _0x4c38ed = _0x49d8e5._pointLabelItems[_0x40af8e];
    if (!_0x4c38ed.visible) {
      continue;
    }
    const _0x3e641e = _0x40f1f8.setContext(_0x49d8e5.getPointLabelContext(_0x40af8e));
    Qf(_0x3c1a7c, _0x3e641e, _0x4c38ed);
    const _0x40f8db = rt(_0x3e641e.font);
    const {
      x: _0x47d08d,
      y: _0x4dc9ad,
      textAlign: _0x571646
    } = _0x4c38ed;
    Vt(_0x3c1a7c, _0x49d8e5._pointLabels[_0x40af8e], _0x47d08d, _0x4dc9ad + _0x40f8db.lineHeight / 2, _0x40f8db, {
      color: _0x3e641e.color,
      textAlign: _0x571646,
      textBaseline: "middle"
    });
  }
}
function fr(_0xf56d16, _0x4c1bae, _0x5e2ffb, _0x54e154) {
  const {
    ctx: _0x504f15
  } = _0xf56d16;
  if (_0x5e2ffb) {
    _0x504f15.arc(_0xf56d16.xCenter, _0xf56d16.yCenter, _0x4c1bae, 0, Z);
  } else {
    let _0x37e704 = _0xf56d16.getPointPosition(0, _0x4c1bae);
    _0x504f15.moveTo(_0x37e704.x, _0x37e704.y);
    for (let _0x189de8 = 1; _0x189de8 < _0x54e154; _0x189de8++) {
      _0x37e704 = _0xf56d16.getPointPosition(_0x189de8, _0x4c1bae);
      _0x504f15.lineTo(_0x37e704.x, _0x37e704.y);
    }
  }
}
function tu(_0x5c789c, _0x25e63b, _0xf048d6, _0x23778b, _0x57fc77) {
  const _0x52c2a7 = _0x5c789c.ctx;
  const _0x2b807d = _0x25e63b.circular;
  const {
    color: _0xe39a9d,
    lineWidth: _0xcda337
  } = _0x25e63b;
  if ((!!_0x2b807d || !!_0x23778b) && !!_0xe39a9d && !!_0xcda337 && !(_0xf048d6 < 0)) {
    _0x52c2a7.save();
    _0x52c2a7.strokeStyle = _0xe39a9d;
    _0x52c2a7.lineWidth = _0xcda337;
    _0x52c2a7.setLineDash(_0x57fc77.dash);
    _0x52c2a7.lineDashOffset = _0x57fc77.dashOffset;
    _0x52c2a7.beginPath();
    fr(_0x5c789c, _0xf048d6, _0x2b807d, _0x23778b);
    _0x52c2a7.closePath();
    _0x52c2a7.stroke();
    _0x52c2a7.restore();
  }
}
function eu(_0x12f0dd, _0x24b341, _0x5d42b2) {
  return oe(_0x12f0dd, {
    label: _0x5d42b2,
    index: _0x24b341,
    type: "pointLabel"
  });
}
class yu extends wi {
  static id = "radialLinear";
  static defaults = {
    display: true,
    animate: true,
    position: "chartArea",
    angleLines: {
      display: true,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: false
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: true,
      callback: Si.formatters.numeric
    },
    pointLabels: {
      backdropColor: undefined,
      backdropPadding: 2,
      display: true,
      font: {
        size: 10
      },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: false
    }
  };
  static defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  };
  static descriptors = {
    angleLines: {
      _fallback: "grid"
    }
  };
  constructor(_0x98b6de) {
    super(_0x98b6de);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this._pointLabels = [];
    this._pointLabelItems = [];
  }
  setDimensions() {
    const _0x106c30 = this._padding = nt(bn(this.options) / 2);
    const _0x5cee4d = this.width = this.maxWidth - _0x106c30.width;
    const _0x523874 = this.height = this.maxHeight - _0x106c30.height;
    this.xCenter = Math.floor(this.left + _0x5cee4d / 2 + _0x106c30.left);
    this.yCenter = Math.floor(this.top + _0x523874 / 2 + _0x106c30.top);
    this.drawingArea = Math.floor(Math.min(_0x5cee4d, _0x523874) / 2);
  }
  determineDataLimits() {
    const {
      min: _0x322ad3,
      max: _0x21c15f
    } = this.getMinMax(false);
    this.min = U(_0x322ad3) && !isNaN(_0x322ad3) ? _0x322ad3 : 0;
    this.max = U(_0x21c15f) && !isNaN(_0x21c15f) ? _0x21c15f : 0;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / bn(this.options));
  }
  generateTickLabels(_0x20c570) {
    wi.prototype.generateTickLabels.call(this, _0x20c570);
    this._pointLabels = this.getLabels().map((_0x37ba02, _0x5b4407) => {
      const _0x5d2727 = F(this.options.pointLabels.callback, [_0x37ba02, _0x5b4407], this);
      if (_0x5d2727 || _0x5d2727 === 0) {
        return _0x5d2727;
      } else {
        return "";
      }
    }).filter((_0x228ab3, _0x116eb6) => this.chart.getDataVisibility(_0x116eb6));
  }
  fit() {
    const _0x4b3c29 = this.options;
    if (_0x4b3c29.display && _0x4b3c29.pointLabels.display) {
      Vf(this);
    } else {
      this.setCenterPoint(0, 0, 0, 0);
    }
  }
  setCenterPoint(_0x10f128, _0x9485f, _0x501a22, _0x26bd54) {
    this.xCenter += Math.floor((_0x10f128 - _0x9485f) / 2);
    this.yCenter += Math.floor((_0x501a22 - _0x26bd54) / 2);
    this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(_0x10f128, _0x9485f, _0x501a22, _0x26bd54));
  }
  getIndexAngle(_0x46a679) {
    const _0x581c7b = Z / (this._pointLabels.length || 1);
    const _0xe037cd = this.options.startAngle || 0;
    return gt(_0x46a679 * _0x581c7b + ct(_0xe037cd));
  }
  getDistanceFromCenterForValue(_0x5cf96d) {
    if (I(_0x5cf96d)) {
      return NaN;
    }
    const _0x49d074 = this.drawingArea / (this.max - this.min);
    if (this.options.reverse) {
      return (this.max - _0x5cf96d) * _0x49d074;
    } else {
      return (_0x5cf96d - this.min) * _0x49d074;
    }
  }
  getValueForDistanceFromCenter(_0x3b7ee0) {
    if (I(_0x3b7ee0)) {
      return NaN;
    }
    const _0x3297ef = _0x3b7ee0 / (this.drawingArea / (this.max - this.min));
    if (this.options.reverse) {
      return this.max - _0x3297ef;
    } else {
      return this.min + _0x3297ef;
    }
  }
  getPointLabelContext(_0x30fe9c) {
    const _0x1eed91 = this._pointLabels || [];
    if (_0x30fe9c >= 0 && _0x30fe9c < _0x1eed91.length) {
      const _0x2e2143 = _0x1eed91[_0x30fe9c];
      return eu(this.getContext(), _0x30fe9c, _0x2e2143);
    }
  }
  getPointPosition(_0x4b622c, _0x494031, _0xcc8588 = 0) {
    const _0x385ae9 = this.getIndexAngle(_0x4b622c) - Q + _0xcc8588;
    return {
      x: Math.cos(_0x385ae9) * _0x494031 + this.xCenter,
      y: Math.sin(_0x385ae9) * _0x494031 + this.yCenter,
      angle: _0x385ae9
    };
  }
  getPointPositionForValue(_0x9cda68, _0x467c6e) {
    return this.getPointPosition(_0x9cda68, this.getDistanceFromCenterForValue(_0x467c6e));
  }
  getBasePosition(_0x2fb056) {
    return this.getPointPositionForValue(_0x2fb056 || 0, this.getBaseValue());
  }
  getPointLabelPosition(_0x559893) {
    const {
      left: _0x472eb9,
      top: _0x3b7943,
      right: _0x41f37b,
      bottom: _0x1b73a6
    } = this._pointLabelItems[_0x559893];
    return {
      left: _0x472eb9,
      top: _0x3b7943,
      right: _0x41f37b,
      bottom: _0x1b73a6
    };
  }
  drawBackground() {
    const {
      backgroundColor: _0x16d513,
      grid: {
        circular: _0x224b32
      }
    } = this.options;
    if (_0x16d513) {
      const _0x27ff1c = this.ctx;
      _0x27ff1c.save();
      _0x27ff1c.beginPath();
      fr(this, this.getDistanceFromCenterForValue(this._endValue), _0x224b32, this._pointLabels.length);
      _0x27ff1c.closePath();
      _0x27ff1c.fillStyle = _0x16d513;
      _0x27ff1c.fill();
      _0x27ff1c.restore();
    }
  }
  drawGrid() {
    const _0xeeef4d = this.ctx;
    const _0xa2a2ca = this.options;
    const {
      angleLines: _0x146307,
      grid: _0x1ae75d,
      border: _0x55f98e
    } = _0xa2a2ca;
    const _0x3f2923 = this._pointLabels.length;
    let _0x3a8bd0;
    let _0x38342a;
    let _0x36eb32;
    if (_0xa2a2ca.pointLabels.display) {
      Jf(this, _0x3f2923);
    }
    if (_0x1ae75d.display) {
      this.ticks.forEach((_0x3ff630, _0x41451b) => {
        if (_0x41451b !== 0 || _0x41451b === 0 && this.min < 0) {
          _0x38342a = this.getDistanceFromCenterForValue(_0x3ff630.value);
          const _0x5bba32 = this.getContext(_0x41451b);
          const _0x135d05 = _0x1ae75d.setContext(_0x5bba32);
          const _0x58b7c4 = _0x55f98e.setContext(_0x5bba32);
          tu(this, _0x135d05, _0x38342a, _0x3f2923, _0x58b7c4);
        }
      });
    }
    if (_0x146307.display) {
      _0xeeef4d.save();
      _0x3a8bd0 = _0x3f2923 - 1;
      for (; _0x3a8bd0 >= 0; _0x3a8bd0--) {
        const _0x2538fe = _0x146307.setContext(this.getPointLabelContext(_0x3a8bd0));
        const {
          color: _0xfcdfd,
          lineWidth: _0x4b2775
        } = _0x2538fe;
        if (!!_0x4b2775 && !!_0xfcdfd) {
          _0xeeef4d.lineWidth = _0x4b2775;
          _0xeeef4d.strokeStyle = _0xfcdfd;
          _0xeeef4d.setLineDash(_0x2538fe.borderDash);
          _0xeeef4d.lineDashOffset = _0x2538fe.borderDashOffset;
          _0x38342a = this.getDistanceFromCenterForValue(_0xa2a2ca.ticks.reverse ? this.min : this.max);
          _0x36eb32 = this.getPointPosition(_0x3a8bd0, _0x38342a);
          _0xeeef4d.beginPath();
          _0xeeef4d.moveTo(this.xCenter, this.yCenter);
          _0xeeef4d.lineTo(_0x36eb32.x, _0x36eb32.y);
          _0xeeef4d.stroke();
        }
      }
      _0xeeef4d.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const _0x3d3028 = this.ctx;
    const _0x461409 = this.options;
    const _0x5a9f17 = _0x461409.ticks;
    if (!_0x5a9f17.display) {
      return;
    }
    const _0x7c1798 = this.getIndexAngle(0);
    let _0x5e2499;
    let _0x52bc71;
    _0x3d3028.save();
    _0x3d3028.translate(this.xCenter, this.yCenter);
    _0x3d3028.rotate(_0x7c1798);
    _0x3d3028.textAlign = "center";
    _0x3d3028.textBaseline = "middle";
    this.ticks.forEach((_0x2269cd, _0x21960d) => {
      if (_0x21960d === 0 && this.min >= 0 && !_0x461409.reverse) {
        return;
      }
      const _0x51149f = _0x5a9f17.setContext(this.getContext(_0x21960d));
      const _0x4ddf74 = rt(_0x51149f.font);
      _0x5e2499 = this.getDistanceFromCenterForValue(this.ticks[_0x21960d].value);
      if (_0x51149f.showLabelBackdrop) {
        _0x3d3028.font = _0x4ddf74.string;
        _0x52bc71 = _0x3d3028.measureText(_0x2269cd.label).width;
        _0x3d3028.fillStyle = _0x51149f.backdropColor;
        const _0x2d38b6 = nt(_0x51149f.backdropPadding);
        _0x3d3028.fillRect(-_0x52bc71 / 2 - _0x2d38b6.left, -_0x5e2499 - _0x4ddf74.size / 2 - _0x2d38b6.top, _0x52bc71 + _0x2d38b6.width, _0x4ddf74.size + _0x2d38b6.height);
      }
      Vt(_0x3d3028, _0x2269cd.label, 0, -_0x5e2499, _0x4ddf74, {
        color: _0x51149f.color,
        strokeColor: _0x51149f.textStrokeColor,
        strokeWidth: _0x51149f.textStrokeWidth
      });
    });
    _0x3d3028.restore();
  }
  drawTitle() {}
}
const Oi = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1000
  },
  second: {
    common: true,
    size: 1000,
    steps: 60
  },
  minute: {
    common: true,
    size: 60000,
    steps: 60
  },
  hour: {
    common: true,
    size: 3600000,
    steps: 24
  },
  day: {
    common: true,
    size: 86400000,
    steps: 30
  },
  week: {
    common: false,
    size: 604800000,
    steps: 4
  },
  month: {
    common: true,
    size: 2628000000,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7884000000,
    steps: 4
  },
  year: {
    common: true,
    size: 31540000000
  }
};
const tt = Object.keys(Oi);
function lo(_0x585569, _0x5e812a) {
  return _0x585569 - _0x5e812a;
}
function co(_0x2fce27, _0x5eba58) {
  if (I(_0x5eba58)) {
    return null;
  }
  const _0x1daa15 = _0x2fce27._adapter;
  const {
    parser: _0x45a7bd,
    round: _0x5c54cf,
    isoWeekday: _0xe3fcf
  } = _0x2fce27._parseOpts;
  let _0x47492d = _0x5eba58;
  if (typeof _0x45a7bd == "function") {
    _0x47492d = _0x45a7bd(_0x47492d);
  }
  if (!U(_0x47492d)) {
    _0x47492d = typeof _0x45a7bd == "string" ? _0x1daa15.parse(_0x47492d, _0x45a7bd) : _0x1daa15.parse(_0x47492d);
  }
  if (_0x47492d === null) {
    return null;
  } else {
    if (_0x5c54cf) {
      _0x47492d = _0x5c54cf === "week" && (bi(_0xe3fcf) || _0xe3fcf === true) ? _0x1daa15.startOf(_0x47492d, "isoWeek", _0xe3fcf) : _0x1daa15.startOf(_0x47492d, _0x5c54cf);
    }
    return +_0x47492d;
  }
}
function ho(_0x4fb7f4, _0x476786, _0x149292, _0x351a78) {
  const _0x3fc388 = tt.length;
  for (let _0x425111 = tt.indexOf(_0x4fb7f4); _0x425111 < _0x3fc388 - 1; ++_0x425111) {
    const _0x40e285 = Oi[tt[_0x425111]];
    const _0x3698a0 = _0x40e285.steps ? _0x40e285.steps : Number.MAX_SAFE_INTEGER;
    if (_0x40e285.common && Math.ceil((_0x149292 - _0x476786) / (_0x3698a0 * _0x40e285.size)) <= _0x351a78) {
      return tt[_0x425111];
    }
  }
  return tt[_0x3fc388 - 1];
}
function iu(_0x35899f, _0x2d345e, _0x4d66be, _0x2adb33, _0x2a2460) {
  for (let _0x387228 = tt.length - 1; _0x387228 >= tt.indexOf(_0x4d66be); _0x387228--) {
    const _0x440d3d = tt[_0x387228];
    if (Oi[_0x440d3d].common && _0x35899f._adapter.diff(_0x2a2460, _0x2adb33, _0x440d3d) >= _0x2d345e - 1) {
      return _0x440d3d;
    }
  }
  return tt[_0x4d66be ? tt.indexOf(_0x4d66be) : 0];
}
function nu(_0x3dc13c) {
  for (let _0x2a35ba = tt.indexOf(_0x3dc13c) + 1, _0x1ffbac = tt.length; _0x2a35ba < _0x1ffbac; ++_0x2a35ba) {
    if (Oi[tt[_0x2a35ba]].common) {
      return tt[_0x2a35ba];
    }
  }
}
function fo(_0x15f187, _0x19931a, _0x44a8a2) {
  if (!_0x44a8a2) {
    _0x15f187[_0x19931a] = true;
  } else if (_0x44a8a2.length) {
    const {
      lo: _0x577787,
      hi: _0x3beb12
    } = Sn(_0x44a8a2, _0x19931a);
    const _0x62b301 = _0x44a8a2[_0x577787] >= _0x19931a ? _0x44a8a2[_0x577787] : _0x44a8a2[_0x3beb12];
    _0x15f187[_0x62b301] = true;
  }
}
function su(_0x3006b8, _0x1c0441, _0x44355a, _0x4b0e59) {
  const _0x40ba85 = _0x3006b8._adapter;
  const _0x5dc287 = +_0x40ba85.startOf(_0x1c0441[0].value, _0x4b0e59);
  const _0x40bb21 = _0x1c0441[_0x1c0441.length - 1].value;
  let _0x448051;
  let _0x1671fb;
  for (_0x448051 = _0x5dc287; _0x448051 <= _0x40bb21; _0x448051 = +_0x40ba85.add(_0x448051, 1, _0x4b0e59)) {
    _0x1671fb = _0x44355a[_0x448051];
    if (_0x1671fb >= 0) {
      _0x1c0441[_0x1671fb].major = true;
    }
  }
  return _0x1c0441;
}
function uo(_0x129405, _0x32521b, _0x2dfc58) {
  const _0x1ece8c = [];
  const _0xe3a3eb = {};
  const _0x1ea04d = _0x32521b.length;
  let _0x21fe13;
  let _0x1dc78c;
  for (_0x21fe13 = 0; _0x21fe13 < _0x1ea04d; ++_0x21fe13) {
    _0x1dc78c = _0x32521b[_0x21fe13];
    _0xe3a3eb[_0x1dc78c] = _0x21fe13;
    _0x1ece8c.push({
      value: _0x1dc78c,
      major: false
    });
  }
  if (_0x1ea04d === 0 || !_0x2dfc58) {
    return _0x1ece8c;
  } else {
    return su(_0x129405, _0x1ece8c, _0xe3a3eb, _0x2dfc58);
  }
}
class go extends Kt {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: false,
      unit: false,
      round: false,
      isoWeekday: false,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      callback: false,
      major: {
        enabled: false
      }
    }
  };
  constructor(_0x482737) {
    super(_0x482737);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
    this._unit = "day";
    this._majorUnit = undefined;
    this._offsets = {};
    this._normalized = false;
    this._parseOpts = undefined;
  }
  init(_0x142a8d, _0xd1fda1 = {}) {
    const _0x2760a0 = _0x142a8d.time ||= {};
    const _0x3b371c = this._adapter = new cd._date(_0x142a8d.adapters.date);
    _0x3b371c.init(_0xd1fda1);
    ve(_0x2760a0.displayFormats, _0x3b371c.formats());
    this._parseOpts = {
      parser: _0x2760a0.parser,
      round: _0x2760a0.round,
      isoWeekday: _0x2760a0.isoWeekday
    };
    super.init(_0x142a8d);
    this._normalized = _0xd1fda1.normalized;
  }
  parse(_0x3f0e87, _0x110e0f) {
    if (_0x3f0e87 === undefined) {
      return null;
    } else {
      return co(this, _0x3f0e87);
    }
  }
  beforeLayout() {
    super.beforeLayout();
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const _0x31ac65 = this.options;
    const _0x1b53eb = this._adapter;
    const _0x564d0a = _0x31ac65.time.unit || "day";
    let {
      min: _0x9bb89,
      max: _0x263efc,
      minDefined: _0x393048,
      maxDefined: _0x21cd9f
    } = this.getUserBounds();
    function _0x3d12c9(_0x354bbb) {
      if (!_0x393048 && !isNaN(_0x354bbb.min)) {
        _0x9bb89 = Math.min(_0x9bb89, _0x354bbb.min);
      }
      if (!_0x21cd9f && !isNaN(_0x354bbb.max)) {
        _0x263efc = Math.max(_0x263efc, _0x354bbb.max);
      }
    }
    if (!_0x393048 || !_0x21cd9f) {
      _0x3d12c9(this._getLabelBounds());
      if (_0x31ac65.bounds !== "ticks" || _0x31ac65.ticks.source !== "labels") {
        _0x3d12c9(this.getMinMax(false));
      }
    }
    _0x9bb89 = U(_0x9bb89) && !isNaN(_0x9bb89) ? _0x9bb89 : +_0x1b53eb.startOf(Date.now(), _0x564d0a);
    _0x263efc = U(_0x263efc) && !isNaN(_0x263efc) ? _0x263efc : +_0x1b53eb.endOf(Date.now(), _0x564d0a) + 1;
    this.min = Math.min(_0x9bb89, _0x263efc - 1);
    this.max = Math.max(_0x9bb89 + 1, _0x263efc);
  }
  _getLabelBounds() {
    const _0x3fba56 = this.getLabelTimestamps();
    let _0xb49412 = Number.POSITIVE_INFINITY;
    let _0x120b7c = Number.NEGATIVE_INFINITY;
    if (_0x3fba56.length) {
      _0xb49412 = _0x3fba56[0];
      _0x120b7c = _0x3fba56[_0x3fba56.length - 1];
    }
    return {
      min: _0xb49412,
      max: _0x120b7c
    };
  }
  buildTicks() {
    const _0x54ca70 = this.options;
    const _0x23dd13 = _0x54ca70.time;
    const _0x39826 = _0x54ca70.ticks;
    const _0xa0e40c = _0x39826.source === "labels" ? this.getLabelTimestamps() : this._generate();
    if (_0x54ca70.bounds === "ticks" && _0xa0e40c.length) {
      this.min = this._userMin || _0xa0e40c[0];
      this.max = this._userMax || _0xa0e40c[_0xa0e40c.length - 1];
    }
    const _0x374489 = this.min;
    const _0x2b1a06 = this.max;
    const _0xac35ef = Vc(_0xa0e40c, _0x374489, _0x2b1a06);
    this._unit = _0x23dd13.unit || (_0x39826.autoSkip ? ho(_0x23dd13.minUnit, this.min, this.max, this._getLabelCapacity(_0x374489)) : iu(this, _0xac35ef.length, _0x23dd13.minUnit, this.min, this.max));
    this._majorUnit = !_0x39826.major.enabled || this._unit === "year" ? undefined : nu(this._unit);
    this.initOffsets(_0xa0e40c);
    if (_0x54ca70.reverse) {
      _0xac35ef.reverse();
    }
    return uo(this, _0xac35ef, this._majorUnit);
  }
  afterAutoSkip() {
    if (this.options.offsetAfterAutoskip) {
      this.initOffsets(this.ticks.map(_0x2152bd => +_0x2152bd.value));
    }
  }
  initOffsets(_0x46e1f5 = []) {
    let _0x5a0fa4 = 0;
    let _0x5c6dcf = 0;
    let _0x41d0d7;
    let _0x37d486;
    if (this.options.offset && _0x46e1f5.length) {
      _0x41d0d7 = this.getDecimalForValue(_0x46e1f5[0]);
      if (_0x46e1f5.length === 1) {
        _0x5a0fa4 = 1 - _0x41d0d7;
      } else {
        _0x5a0fa4 = (this.getDecimalForValue(_0x46e1f5[1]) - _0x41d0d7) / 2;
      }
      _0x37d486 = this.getDecimalForValue(_0x46e1f5[_0x46e1f5.length - 1]);
      if (_0x46e1f5.length === 1) {
        _0x5c6dcf = _0x37d486;
      } else {
        _0x5c6dcf = (_0x37d486 - this.getDecimalForValue(_0x46e1f5[_0x46e1f5.length - 2])) / 2;
      }
    }
    const _0x20a00f = _0x46e1f5.length < 3 ? 0.5 : 0.25;
    _0x5a0fa4 = $t(_0x5a0fa4, 0, _0x20a00f);
    _0x5c6dcf = $t(_0x5c6dcf, 0, _0x20a00f);
    this._offsets = {
      start: _0x5a0fa4,
      end: _0x5c6dcf,
      factor: 1 / (_0x5a0fa4 + 1 + _0x5c6dcf)
    };
  }
  _generate() {
    const _0x12db8f = this._adapter;
    const _0x46e0a3 = this.min;
    const _0x2f38f0 = this.max;
    const _0x3949ab = this.options;
    const _0x28237a = _0x3949ab.time;
    const _0x435ee0 = _0x28237a.unit || ho(_0x28237a.minUnit, _0x46e0a3, _0x2f38f0, this._getLabelCapacity(_0x46e0a3));
    const _0x3816b5 = T(_0x3949ab.ticks.stepSize, 1);
    const _0x45660a = _0x435ee0 === "week" ? _0x28237a.isoWeekday : false;
    const _0x2a31fa = bi(_0x45660a) || _0x45660a === true;
    const _0x332d5e = {};
    let _0x3c6a7c = _0x46e0a3;
    let _0x2f8386;
    let _0xedaffb;
    if (_0x2a31fa) {
      _0x3c6a7c = +_0x12db8f.startOf(_0x3c6a7c, "isoWeek", _0x45660a);
    }
    _0x3c6a7c = +_0x12db8f.startOf(_0x3c6a7c, _0x2a31fa ? "day" : _0x435ee0);
    if (_0x12db8f.diff(_0x2f38f0, _0x46e0a3, _0x435ee0) > _0x3816b5 * 100000) {
      throw new Error(_0x46e0a3 + " and " + _0x2f38f0 + " are too far apart with stepSize of " + _0x3816b5 + " " + _0x435ee0);
    }
    const _0x23fedc = _0x3949ab.ticks.source === "data" && this.getDataTimestamps();
    _0x2f8386 = _0x3c6a7c;
    _0xedaffb = 0;
    for (; _0x2f8386 < _0x2f38f0; _0x2f8386 = +_0x12db8f.add(_0x2f8386, _0x3816b5, _0x435ee0), _0xedaffb++) {
      fo(_0x332d5e, _0x2f8386, _0x23fedc);
    }
    if (_0x2f8386 === _0x2f38f0 || _0x3949ab.bounds === "ticks" || _0xedaffb === 1) {
      fo(_0x332d5e, _0x2f8386, _0x23fedc);
    }
    return Object.keys(_0x332d5e).sort(lo).map(_0x1cf4a3 => +_0x1cf4a3);
  }
  getLabelForValue(_0x4b3121) {
    const _0x47d261 = this._adapter;
    const _0x234228 = this.options.time;
    if (_0x234228.tooltipFormat) {
      return _0x47d261.format(_0x4b3121, _0x234228.tooltipFormat);
    } else {
      return _0x47d261.format(_0x4b3121, _0x234228.displayFormats.datetime);
    }
  }
  format(_0x4ba726, _0x494392) {
    const _0x557d36 = this.options.time.displayFormats;
    const _0x126c6c = this._unit;
    const _0x28204d = _0x494392 || _0x557d36[_0x126c6c];
    return this._adapter.format(_0x4ba726, _0x28204d);
  }
  _tickFormatFunction(_0x23ed84, _0x1a0efe, _0x1ce489, _0x462426) {
    const _0x2ce9ad = this.options;
    const _0x19ff70 = _0x2ce9ad.ticks.callback;
    if (_0x19ff70) {
      return F(_0x19ff70, [_0x23ed84, _0x1a0efe, _0x1ce489], this);
    }
    const _0x212df2 = _0x2ce9ad.time.displayFormats;
    const _0x17d600 = this._unit;
    const _0x2958b1 = this._majorUnit;
    const _0x501f9c = _0x17d600 && _0x212df2[_0x17d600];
    const _0x1deb05 = _0x2958b1 && _0x212df2[_0x2958b1];
    const _0x5bf516 = _0x1ce489[_0x1a0efe];
    const _0x4b1541 = _0x2958b1 && _0x1deb05 && _0x5bf516 && _0x5bf516.major;
    return this._adapter.format(_0x23ed84, _0x462426 || (_0x4b1541 ? _0x1deb05 : _0x501f9c));
  }
  generateTickLabels(_0x1b1b26) {
    let _0x20266c;
    let _0x10fc72;
    let _0x4584b9;
    _0x20266c = 0;
    _0x10fc72 = _0x1b1b26.length;
    for (; _0x20266c < _0x10fc72; ++_0x20266c) {
      _0x4584b9 = _0x1b1b26[_0x20266c];
      _0x4584b9.label = this._tickFormatFunction(_0x4584b9.value, _0x20266c, _0x1b1b26);
    }
  }
  getDecimalForValue(_0x88c95b) {
    if (_0x88c95b === null) {
      return NaN;
    } else {
      return (_0x88c95b - this.min) / (this.max - this.min);
    }
  }
  getPixelForValue(_0x45d11c) {
    const _0x3cf378 = this._offsets;
    const _0x38e0c4 = this.getDecimalForValue(_0x45d11c);
    return this.getPixelForDecimal((_0x3cf378.start + _0x38e0c4) * _0x3cf378.factor);
  }
  getValueForPixel(_0x296351) {
    const _0xfb5dfe = this._offsets;
    const _0x58d037 = this.getDecimalForPixel(_0x296351) / _0xfb5dfe.factor - _0xfb5dfe.end;
    return this.min + _0x58d037 * (this.max - this.min);
  }
  _getLabelSize(_0x121cf0) {
    const _0x4b2386 = this.options.ticks;
    const _0x37a6bd = this.ctx.measureText(_0x121cf0).width;
    const _0x56f4fa = ct(this.isHorizontal() ? _0x4b2386.maxRotation : _0x4b2386.minRotation);
    const _0x50d372 = Math.cos(_0x56f4fa);
    const _0x1d72a7 = Math.sin(_0x56f4fa);
    const _0x2030e2 = this._resolveTickFontOptions(0).size;
    return {
      w: _0x37a6bd * _0x50d372 + _0x2030e2 * _0x1d72a7,
      h: _0x37a6bd * _0x1d72a7 + _0x2030e2 * _0x50d372
    };
  }
  _getLabelCapacity(_0x3a8bfc) {
    const _0x2f4253 = this.options.time;
    const _0x54c05c = _0x2f4253.displayFormats;
    const _0x2b6980 = _0x54c05c[_0x2f4253.unit] || _0x54c05c.millisecond;
    const _0x1b99df = this._tickFormatFunction(_0x3a8bfc, 0, uo(this, [_0x3a8bfc], this._majorUnit), _0x2b6980);
    const _0x4b1b60 = this._getLabelSize(_0x1b99df);
    const _0x265187 = Math.floor(this.isHorizontal() ? this.width / _0x4b1b60.w : this.height / _0x4b1b60.h) - 1;
    if (_0x265187 > 0) {
      return _0x265187;
    } else {
      return 1;
    }
  }
  getDataTimestamps() {
    let _0x1f38e2 = this._cache.data || [];
    let _0x51e5d2;
    let _0x19bb11;
    if (_0x1f38e2.length) {
      return _0x1f38e2;
    }
    const _0x48cc76 = this.getMatchingVisibleMetas();
    if (this._normalized && _0x48cc76.length) {
      return this._cache.data = _0x48cc76[0].controller.getAllParsedValues(this);
    }
    _0x51e5d2 = 0;
    _0x19bb11 = _0x48cc76.length;
    for (; _0x51e5d2 < _0x19bb11; ++_0x51e5d2) {
      _0x1f38e2 = _0x1f38e2.concat(_0x48cc76[_0x51e5d2].controller.getAllParsedValues(this));
    }
    return this._cache.data = this.normalize(_0x1f38e2);
  }
  getLabelTimestamps() {
    const _0x465710 = this._cache.labels || [];
    let _0xe8fbc2;
    let _0x27dfec;
    if (_0x465710.length) {
      return _0x465710;
    }
    const _0x5dd1c1 = this.getLabels();
    _0xe8fbc2 = 0;
    _0x27dfec = _0x5dd1c1.length;
    for (; _0xe8fbc2 < _0x27dfec; ++_0xe8fbc2) {
      _0x465710.push(co(this, _0x5dd1c1[_0xe8fbc2]));
    }
    return this._cache.labels = this._normalized ? _0x465710 : this.normalize(_0x465710);
  }
  normalize(_0x2de55b) {
    return Bo(_0x2de55b.sort(lo));
  }
}
function ii(_0x818eba, _0x59f9ff, _0xbbc4bf) {
  let _0x3c02c4 = 0;
  let _0x47fbf8 = _0x818eba.length - 1;
  let _0x49a69c;
  let _0x307580;
  let _0x3df2fd;
  let _0x29bed5;
  if (_0xbbc4bf) {
    if (_0x59f9ff >= _0x818eba[_0x3c02c4].pos && _0x59f9ff <= _0x818eba[_0x47fbf8].pos) {
      ({
        lo: _0x3c02c4,
        hi: _0x47fbf8
      } = fn(_0x818eba, "pos", _0x59f9ff));
    }
    ({
      pos: _0x49a69c,
      time: _0x3df2fd
    } = _0x818eba[_0x3c02c4]);
    ({
      pos: _0x307580,
      time: _0x29bed5
    } = _0x818eba[_0x47fbf8]);
  } else {
    if (_0x59f9ff >= _0x818eba[_0x3c02c4].time && _0x59f9ff <= _0x818eba[_0x47fbf8].time) {
      ({
        lo: _0x3c02c4,
        hi: _0x47fbf8
      } = fn(_0x818eba, "time", _0x59f9ff));
    }
    ({
      time: _0x49a69c,
      pos: _0x3df2fd
    } = _0x818eba[_0x3c02c4]);
    ({
      time: _0x307580,
      pos: _0x29bed5
    } = _0x818eba[_0x47fbf8]);
  }
  const _0x4f1943 = _0x307580 - _0x49a69c;
  if (_0x4f1943) {
    return _0x3df2fd + (_0x29bed5 - _0x3df2fd) * (_0x59f9ff - _0x49a69c) / _0x4f1943;
  } else {
    return _0x3df2fd;
  }
}
class wu extends go {
  static id = "timeseries";
  static defaults = go.defaults;
  constructor(_0x2e4a6e) {
    super(_0x2e4a6e);
    this._table = [];
    this._minPos = undefined;
    this._tableRange = undefined;
  }
  initOffsets() {
    const _0x39cf65 = this._getTimestampsForTable();
    const _0x2c9c73 = this._table = this.buildLookupTable(_0x39cf65);
    this._minPos = ii(_0x2c9c73, this.min);
    this._tableRange = ii(_0x2c9c73, this.max) - this._minPos;
    super.initOffsets(_0x39cf65);
  }
  buildLookupTable(_0x440af6) {
    const {
      min: _0x363b90,
      max: _0x51669d
    } = this;
    const _0x3732cd = [];
    const _0xef3d84 = [];
    let _0x5e01c0;
    let _0x1c4f44;
    let _0x495f33;
    let _0x5e3826;
    let _0x30d2df;
    _0x5e01c0 = 0;
    _0x1c4f44 = _0x440af6.length;
    for (; _0x5e01c0 < _0x1c4f44; ++_0x5e01c0) {
      _0x5e3826 = _0x440af6[_0x5e01c0];
      if (_0x5e3826 >= _0x363b90 && _0x5e3826 <= _0x51669d) {
        _0x3732cd.push(_0x5e3826);
      }
    }
    if (_0x3732cd.length < 2) {
      return [{
        time: _0x363b90,
        pos: 0
      }, {
        time: _0x51669d,
        pos: 1
      }];
    }
    _0x5e01c0 = 0;
    _0x1c4f44 = _0x3732cd.length;
    for (; _0x5e01c0 < _0x1c4f44; ++_0x5e01c0) {
      _0x30d2df = _0x3732cd[_0x5e01c0 + 1];
      _0x495f33 = _0x3732cd[_0x5e01c0 - 1];
      _0x5e3826 = _0x3732cd[_0x5e01c0];
      if (Math.round((_0x30d2df + _0x495f33) / 2) !== _0x5e3826) {
        _0xef3d84.push({
          time: _0x5e3826,
          pos: _0x5e01c0 / (_0x1c4f44 - 1)
        });
      }
    }
    return _0xef3d84;
  }
  _generate() {
    const _0x8358d7 = this.min;
    const _0xf276ba = this.max;
    let _0x13d3bd = super.getDataTimestamps();
    if (!_0x13d3bd.includes(_0x8358d7) || !_0x13d3bd.length) {
      _0x13d3bd.splice(0, 0, _0x8358d7);
    }
    if (!_0x13d3bd.includes(_0xf276ba) || _0x13d3bd.length === 1) {
      _0x13d3bd.push(_0xf276ba);
    }
    return _0x13d3bd.sort((_0x29f632, _0x1045a3) => _0x29f632 - _0x1045a3);
  }
  _getTimestampsForTable() {
    let _0x179b62 = this._cache.all || [];
    if (_0x179b62.length) {
      return _0x179b62;
    }
    const _0x51cc11 = this.getDataTimestamps();
    const _0xd3015c = this.getLabelTimestamps();
    if (_0x51cc11.length && _0xd3015c.length) {
      _0x179b62 = this.normalize(_0x51cc11.concat(_0xd3015c));
    } else {
      _0x179b62 = _0x51cc11.length ? _0x51cc11 : _0xd3015c;
    }
    _0x179b62 = this._cache.all = _0x179b62;
    return _0x179b62;
  }
  getDecimalForValue(_0x568d97) {
    return (ii(this._table, _0x568d97) - this._minPos) / this._tableRange;
  }
  getValueForPixel(_0x44259a) {
    const _0x2dad03 = this._offsets;
    const _0x409cd5 = this.getDecimalForPixel(_0x44259a) / _0x2dad03.factor - _0x2dad03.end;
    return ii(this._table, _0x409cd5 * this._tableRange + this._minPos, true);
  }
}
const ou = D("<canvas>");
function ru(_0x3ad586) {
  const [_0x49edf9, _0x4ffb03] = lt();
  const [_0x121d1f, _0x584263] = lt();
  const _0x59322d = xn({
    width: 512,
    height: 512,
    type: "line",
    data: {},
    options: {
      responsive: true
    },
    plugins: []
  }, _0x3ad586);
  const _0x212515 = () => {
    const _0x5b72f8 = _0x49edf9()?.getContext("2d");
    const _0x3b7b1b = te(_0x59322d);
    if (_0x3b7b1b.type !== "radar" && _0x3b7b1b.options.scales?.r) {
      delete _0x3b7b1b.options.scales?.r;
    }
    const _0x4feb62 = new Pe(_0x5b72f8, {
      type: _0x3b7b1b.type,
      data: _0x3b7b1b.data,
      options: _0x3b7b1b.options,
      plugins: _0x3b7b1b.plugins
    });
    _0x584263(_0x4feb62);
  };
  ie(() => {
    _0x212515();
  });
  pe(Be(() => _0x59322d.data, () => {
    _0x121d1f().data = _0x59322d.data;
    _0x121d1f().update();
  }, {
    defer: true
  }));
  pe(Be(() => _0x59322d.options, () => {
    _0x121d1f().options = _0x59322d.options;
    _0x121d1f().update();
  }, {
    defer: true
  }));
  pe(Be([() => _0x59322d.width, () => _0x59322d.height], () => {
    _0x121d1f().resize(_0x59322d.width, _0x59322d.height);
  }, {
    defer: true
  }));
  pe(Be(() => _0x59322d.type, () => {
    const _0x1fc725 = [_0x121d1f().width, _0x121d1f().height];
    _0x121d1f().destroy();
    _0x212515();
    _0x121d1f().resize(..._0x1fc725);
  }, {
    defer: true
  }));
  Ut(() => {
    _0x121d1f()?.destroy();
    Vn(_0x3ad586.ref, null);
  });
  return (() => {
    const _0x38f89a = ou();
    const _0x15216 = Vn(_0x3ad586.ref, _0x143cf9 => _0x4ffb03(_0x143cf9));
    if (typeof _0x15216 == "function") {
      Or(_0x15216, _0x38f89a);
    }
    w(_0x38f89a, () => _0x59322d.fallback);
    P(_0x115b4c => {
      const _0x283d1b = _0x59322d.height;
      const _0x467cb2 = _0x59322d.width;
      if (_0x283d1b !== _0x115b4c._v$) {
        St(_0x38f89a, "height", _0x115b4c._v$ = _0x283d1b);
      }
      if (_0x467cb2 !== _0x115b4c._v$2) {
        St(_0x38f89a, "width", _0x115b4c._v$2 = _0x467cb2);
      }
      return _0x115b4c;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x38f89a;
  })();
}
function au(_0x2d5dfa, _0x124bf2) {
  Pe.register(_0x124bf2);
  return _0x196737 => v(ru, xn({
    type: _0x2d5dfa
  }, _0x196737));
}
var lu = au("bar", [od, _n, Mf]);
const cu = "_infoBox_1ghty_1";
const hu = {
  infoBox: cu
};
const du = D("<div class=\"flex w-full flex-col items-center justify-center gap-[1vh]\"><div class=\"relative flex flex-col items-center justify-center\"><svg class=\"absolute\" xmlns=\"http://www.w3.org/2000/svg\" width=\"8.61vh\" height=\"10.46vh\" viewBox=\"0 0 93 113\" fill=\"none\"><rect x=\"32\" width=\"29\" height=\"113\" rx=\"2\" fill=\"url(#paint0_radial_8181_363)\" fill-opacity=\"0.11\"></rect><rect y=\"18\" width=\"20\" height=\"77\" rx=\"2\" fill=\"url(#paint1_radial_8181_363)\" fill-opacity=\"0.11\"></rect><rect x=\"73\" y=\"18\" width=\"20\" height=\"77\" rx=\"2\" fill=\"url(#paint2_radial_8181_363)\" fill-opacity=\"0.11\"></rect><defs><radialGradient id=\"paint0_radial_8181_363\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(46.3474 5.15523e-06) rotate(83.692) scale(109.899 33.0331)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00664C\"></radialGradient><radialGradient id=\"paint1_radial_8181_363\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(9.89474 18) rotate(83.6164) scale(74.8977 22.7781)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00664C\"></radialGradient><radialGradient id=\"paint2_radial_8181_363\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(82.8947 18) rotate(83.6164) scale(74.8977 22.7781)\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00664C\"></svg><img></div><div><h1></h1><p>Check the status of your rack");
const fu = () => (() => {
  const _0x36bdb4 = du();
  const _0x3faba0 = _0x36bdb4.firstChild;
  const _0x1ca233 = _0x3faba0.firstChild;
  const _0x137c2d = _0x1ca233.nextSibling;
  const _0x4da73f = _0x3faba0.nextSibling;
  const _0x394caa = _0x4da73f.firstChild;
  St(_0x137c2d, "draggable", false);
  w(_0x394caa, () => pt.data.configData.label);
  P(_0x5c1f92 => {
    const _0xc64811 = "https://assets.nopixel.net/dev/images/inventory/icons/" + pt.data.configData.image + ".png";
    const _0x37d0e5 = hu.infoBox;
    if (_0xc64811 !== _0x5c1f92._v$) {
      St(_0x137c2d, "src", _0x5c1f92._v$ = _0xc64811);
    }
    if (_0x37d0e5 !== _0x5c1f92._v$2) {
      x(_0x4da73f, _0x5c1f92._v$2 = _0x37d0e5);
    }
    return _0x5c1f92;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x36bdb4;
})();
const uu = D("<div class=\"grid max-h-[20vh] w-full grid-cols-2 gap-[3vh] overflow-auto p-[2vh]\">");
const gu = D("<div><div><div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"></div><div class=\"flex w-full flex-row items-center justify-between gap-[3vh] px-[2vh]\"></div><div>");
const [pt, ur] = De({
  show: false,
  data: {}
});
_0x1b40a8.register("weed-rack:data", async _0x588a6e => {
  ur({
    ..._0x588a6e
  });
});
const pu = () => {
  const _0x41f8d6 = j(() => {
    const _0x478427 = pt.data.propertyConsumptionRecords;
    const _0x39df64 = [];
    for (const _0x505744 of _0x478427) {
      const _0x42bb5f = rc(_0x505744);
      const _0x392256 = Do();
      const _0x5a3520 = _0x42bb5f / _0x392256;
      _0x39df64.push(Math.round(_0x5a3520 * 100));
    }
    return {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [{
        label: "Cooling",
        data: _0x478427.map(_0x11313b => _0x11313b.cooling),
        backgroundColor: "#00F8B9",
        borderColor: "rgba(0, 248, 185, 0.4)"
      }, {
        label: "Heating",
        data: _0x478427.map(_0x197a0e => _0x197a0e.heating),
        backgroundColor: "#F86969",
        borderColor: "rgba(248, 105, 105, 0.4)"
      }, {
        label: "Performance",
        data: _0x39df64,
        backgroundColor: "#62FF3A",
        borderColor: "#397018"
      }]
    };
  });
  const _0xd8b03c = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: window.devicePixelRatio,
    font: {
      family: "Gilroy",
      size: 12
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)"
        }
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)"
        }
      }
    }
  };
  let _0x59a773;
  const [_0x4d6bbf, _0xd744d9] = lt(0);
  const _0x270ccb = _0x52e949 => {
    if (_0x52e949.key === "Escape" && pt.show) {
      ur({
        show: false
      });
      _0x1b40a8.execute("close");
    }
  };
  ie(() => {
    Pe.register(eo, to, Zs, _n, so);
    _0x59a773 = setInterval(() => {
      const _0x5190a3 = Date.now() / 1000;
      const _0x4ef4a0 = pt.data.nextUpdate - _0x5190a3;
      _0xd744d9(_0x4ef4a0);
    }, 1000);
    document.addEventListener("keydown", _0x270ccb);
  });
  Ut(() => {
    clearInterval(_0x59a773);
    Pe.unregister(eo, to, Zs, _n, so);
    document.removeEventListener("keydown", _0x270ccb);
  });
  const _0x2943c0 = j(() => {
    const _0xfc7f2b = _0x4d6bbf();
    if (_0xfc7f2b <= 0) {
      return "Calculating...";
    }
    const _0x24ef78 = Math.floor(_0xfc7f2b / 60);
    const _0x4bdd35 = Math.floor(_0xfc7f2b % 60);
    return _0x24ef78 + "m " + _0x4bdd35 + "s";
  });
  const _0x146d4d = j(() => {
    const _0x13ace9 = pt.data.estTime;
    if (_0x13ace9 === undefined) {
      return "Calculating...";
    }
    const _0x45b508 = Math.floor(_0x13ace9 / 86400);
    const _0x65d631 = Math.floor(_0x13ace9 % 86400 / 3600);
    const _0x2dbb5f = Math.floor(_0x13ace9 % 3600 / 60);
    const _0x2cc55b = Math.floor(_0x13ace9 % 60);
    return _0x45b508 + "d " + _0x65d631 + "h " + _0x2dbb5f + "m " + _0x2cc55b + "s";
  });
  const _0x82b0bb = _0x132049 => _0x132049 * 0.01 * window.innerHeight;
  return (() => {
    const _0x302387 = gu();
    const _0xce6ae1 = _0x302387.firstChild;
    const _0x30b9b9 = _0xce6ae1.firstChild;
    const _0x4a4f53 = _0x30b9b9.firstChild;
    const _0x3fabf6 = _0x4a4f53.nextSibling;
    const _0x2efc16 = _0x3fabf6.nextSibling;
    w(_0x4a4f53, v(Wl, {}), null);
    w(_0x4a4f53, v(Kl, {}), null);
    w(_0x30b9b9, v(fu, {}), _0x3fabf6);
    w(_0x30b9b9, v(Ve, {
      text: "Info"
    }), _0x3fabf6);
    w(_0x3fabf6, v(Ni, {
      icon: "fa-regular fa-timer",
      label: "Next Update",
      get text() {
        return _0x2943c0();
      }
    }), null);
    w(_0x3fabf6, v(Ni, {
      icon: "fa-regular fa-calendar-clock",
      label: "Estimated Time",
      get text() {
        return _0x146d4d();
      }
    }), null);
    w(_0x30b9b9, v(ht, {
      get when() {
        return pt.data.items.length > 0;
      },
      get children() {
        return [v(Ve, {
          text: "Items"
        }), (() => {
          const _0x49f250 = uu();
          w(_0x49f250, v(se, {
            get each() {
              return pt.data.items;
            },
            children: _0x46bb41 => {
              const _0x46498d = j(() => {
                const _0xf9bfe4 = _0x46bb41.timeLeft;
                if (_0xf9bfe4 <= 0) {
                  return "Ready";
                }
                const _0x4ef427 = Math.floor(_0xf9bfe4 / 86400);
                const _0x19e93f = Math.floor(_0xf9bfe4 % 86400 / 3600);
                const _0x234d6a = Math.floor(_0xf9bfe4 % 3600 / 60);
                const _0x429b45 = Math.floor(_0xf9bfe4 % 60);
                return _0x4ef427 + "d " + _0x19e93f + "h " + _0x234d6a + "m " + _0x429b45 + "s";
              });
              return v(Ni, {
                icon: "fa-solid fa-bag-seedling",
                get label() {
                  return _0x46bb41.name ?? "Weed";
                },
                get text() {
                  return _0x46498d();
                }
              });
            }
          }));
          return _0x49f250;
        })()];
      }
    }), _0x2efc16);
    w(_0x30b9b9, v(Ve, {
      text: "Performance"
    }), _0x2efc16);
    w(_0x30b9b9, v(lc, {}), _0x2efc16);
    w(_0x30b9b9, v(Ve, {
      text: "Summary"
    }), _0x2efc16);
    w(_0x2efc16, v(lu, {
      get data() {
        return _0x41f8d6();
      },
      options: _0xd8b03c,
      get width() {
        return _0x82b0bb(36.29);
      },
      get height() {
        return _0x82b0bb(17.5);
      }
    }));
    P(_0x1f56b3 => {
      const _0x4ec798 = zi.App;
      const _0x60ffbb = zi.container;
      const _0x212218 = zi.border_container;
      if (_0x4ec798 !== _0x1f56b3._v$) {
        x(_0x302387, _0x1f56b3._v$ = _0x4ec798);
      }
      if (_0x60ffbb !== _0x1f56b3._v$2) {
        x(_0xce6ae1, _0x1f56b3._v$2 = _0x60ffbb);
      }
      if (_0x212218 !== _0x1f56b3._v$3) {
        x(_0x30b9b9, _0x1f56b3._v$3 = _0x212218);
      }
      return _0x1f56b3;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x302387;
  })();
};
function mu() {
  return [v(xe, {
    name: "slide-left",
    get children() {
      return v(ht, {
        get when() {
          return K.show;
        },
        get children() {
          return v(Ol, {});
        }
      });
    }
  }), v(xa, {}), v(Il, {}), v(xe, {
    name: "slide-left",
    get children() {
      return v(ht, {
        get when() {
          return yt.show;
        },
        get children() {
          return v(Wa, {});
        }
      });
    }
  }), v(xe, {
    name: "slide-left",
    get children() {
      return v(ht, {
        get when() {
          return pt.show;
        },
        get children() {
          return v(pu, {});
        }
      });
    }
  })];
}
Pr(() => v(mu, {}), document.getElementById("root"));