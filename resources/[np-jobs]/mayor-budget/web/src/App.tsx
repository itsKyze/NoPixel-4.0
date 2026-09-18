import './style.css';
import { N as _0x33f2a7 } from "./v-packages-6cb79519.js";
(function () {
  const _0x5b8363 = document.createElement("link").relList;
  if (_0x5b8363 && _0x5b8363.supports && _0x5b8363.supports("modulepreload")) {
    return;
  }
  for (const _0x27bcbe of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    _0x5bf1f1(_0x27bcbe);
  }
  new MutationObserver(_0xd2689f => {
    for (const _0x507c93 of _0xd2689f) {
      if (_0x507c93.type === "childList") {
        for (const _0xfbc18f of _0x507c93.addedNodes) {
          if (_0xfbc18f.tagName === "LINK" && _0xfbc18f.rel === "modulepreload") {
            _0x5bf1f1(_0xfbc18f);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function _0x2745d0(_0x347107) {
    const _0x1c4426 = {};
    if (_0x347107.integrity) {
      _0x1c4426.integrity = _0x347107.integrity;
    }
    if (_0x347107.referrerPolicy) {
      _0x1c4426.referrerPolicy = _0x347107.referrerPolicy;
    }
    if (_0x347107.crossOrigin === "use-credentials") {
      _0x1c4426.credentials = "include";
    } else if (_0x347107.crossOrigin === "anonymous") {
      _0x1c4426.credentials = "omit";
    } else {
      _0x1c4426.credentials = "same-origin";
    }
    return _0x1c4426;
  }
  function _0x5bf1f1(_0x160ad2) {
    if (_0x160ad2.ep) {
      return;
    }
    _0x160ad2.ep = true;
    const _0x4772c0 = _0x2745d0(_0x160ad2);
    fetch(_0x160ad2.href, _0x4772c0);
  }
})();
const pt = (_0x49a8d7, _0x434c28) => _0x49a8d7 === _0x434c28;
const fe = Symbol("solid-proxy");
const Ve = Symbol("solid-track");
const Se = {
  equals: pt
};
let et = lt;
const de = 1;
const we = 2;
const tt = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var X = null;
let De = null;
let W = null;
let Q = null;
let re = null;
let Be = 0;
function me(_0x1b79dd, _0x397dc1) {
  const _0x3018a7 = W;
  const _0xe97903 = X;
  const _0x1e3594 = _0x1b79dd.length === 0;
  const _0x2f824b = _0x1e3594 ? tt : {
    owned: null,
    cleanups: null,
    context: null,
    owner: _0x397dc1 === undefined ? _0xe97903 : _0x397dc1
  };
  const _0x1dbfb0 = _0x1e3594 ? _0x1b79dd : () => _0x1b79dd(() => oe(() => Te(_0x2f824b)));
  X = _0x2f824b;
  W = null;
  try {
    return $e(_0x1dbfb0, true);
  } finally {
    W = _0x3018a7;
    X = _0xe97903;
  }
}
function j(_0x2381e7, _0x4a5c84) {
  _0x4a5c84 = _0x4a5c84 ? Object.assign({}, Se, _0x4a5c84) : Se;
  const _0x3af07b = {
    value: _0x2381e7,
    observers: null,
    observerSlots: null,
    comparator: _0x4a5c84.equals || undefined
  };
  const _0x3f43d0 = _0x3bed45 => {
    if (typeof _0x3bed45 == "function") {
      _0x3bed45 = _0x3bed45(_0x3af07b.value);
    }
    return st(_0x3af07b, _0x3bed45);
  };
  return [rt.bind(_0x3af07b), _0x3f43d0];
}
function U(_0x590088, _0x3424fe, _0x54b4e8) {
  const _0x261f7f = qe(_0x590088, _0x3424fe, false, de);
  Ce(_0x261f7f);
}
function ke(_0x103728, _0xb490be, _0x4da793) {
  et = At;
  const _0x38a9ca = qe(_0x103728, _0xb490be, false, de);
  if (!_0x4da793 || !_0x4da793.render) {
    _0x38a9ca.user = true;
  }
  if (re) {
    re.push(_0x38a9ca);
  } else {
    Ce(_0x38a9ca);
  }
}
function F(_0x54fa01, _0x3e9c1c, _0x104e0b) {
  _0x104e0b = _0x104e0b ? Object.assign({}, Se, _0x104e0b) : Se;
  const _0x49909f = qe(_0x54fa01, _0x3e9c1c, true, 0);
  _0x49909f.observers = null;
  _0x49909f.observerSlots = null;
  _0x49909f.comparator = _0x104e0b.equals || undefined;
  Ce(_0x49909f);
  return rt.bind(_0x49909f);
}
function xt(_0x5ba798) {
  return $e(_0x5ba798, false);
}
function oe(_0x1e1700) {
  if (W === null) {
    return _0x1e1700();
  }
  const _0x3bc41a = W;
  W = null;
  try {
    return _0x1e1700();
  } finally {
    W = _0x3bc41a;
  }
}
function mt(_0x565c8f) {
  ke(() => oe(_0x565c8f));
}
function nt(_0x41a6e4) {
  if (X !== null) {
    if (X.cleanups === null) {
      X.cleanups = [_0x41a6e4];
    } else {
      X.cleanups.push(_0x41a6e4);
    }
  }
  return _0x41a6e4;
}
function ot() {
  return W;
}
function bt(_0x93a066, _0x3a57e6) {
  const _0x34b353 = Symbol("context");
  return {
    id: _0x34b353,
    Provider: Pt(_0x34b353),
    defaultValue: _0x93a066
  };
}
function St(_0x79810a) {
  let _0x2b5c1d;
  if ((_0x2b5c1d = dt(X, _0x79810a.id)) !== undefined) {
    return _0x2b5c1d;
  } else {
    return _0x79810a.defaultValue;
  }
}
function it(_0x3fba4) {
  const _0x5f054 = F(_0x3fba4);
  const _0x3f28e3 = F(() => je(_0x5f054()));
  _0x3f28e3.toArray = () => {
    const _0x3dcb32 = _0x3f28e3();
    if (Array.isArray(_0x3dcb32)) {
      return _0x3dcb32;
    } else if (_0x3dcb32 != null) {
      return [_0x3dcb32];
    } else {
      return [];
    }
  };
  return _0x3f28e3;
}
function rt() {
  if (this.sources && this.state) {
    if (this.state === de) {
      Ce(this);
    } else {
      const _0x359bbf = Q;
      Q = null;
      $e(() => Pe(this), false);
      Q = _0x359bbf;
    }
  }
  if (W) {
    const _0xd48f58 = this.observers ? this.observers.length : 0;
    if (W.sources) {
      W.sources.push(this);
      W.sourceSlots.push(_0xd48f58);
    } else {
      W.sources = [this];
      W.sourceSlots = [_0xd48f58];
    }
    if (this.observers) {
      this.observers.push(W);
      this.observerSlots.push(W.sources.length - 1);
    } else {
      this.observers = [W];
      this.observerSlots = [W.sources.length - 1];
    }
  }
  return this.value;
}
function st(_0x5dfc52, _0x115d84, _0x4b4464) {
  let _0x4eebf9 = _0x5dfc52.value;
  if (!_0x5dfc52.comparator || !_0x5dfc52.comparator(_0x4eebf9, _0x115d84)) {
    _0x5dfc52.value = _0x115d84;
    if (_0x5dfc52.observers && _0x5dfc52.observers.length) {
      $e(() => {
        for (let _0x493285 = 0; _0x493285 < _0x5dfc52.observers.length; _0x493285 += 1) {
          const _0x17a5df = _0x5dfc52.observers[_0x493285];
          const _0x5d738a = De && De.running;
          if (_0x5d738a) {
            De.disposed.has(_0x17a5df);
          }
          if (_0x5d738a ? !_0x17a5df.tState : !_0x17a5df.state) {
            if (_0x17a5df.pure) {
              Q.push(_0x17a5df);
            } else {
              re.push(_0x17a5df);
            }
            if (_0x17a5df.observers) {
              ct(_0x17a5df);
            }
          }
          if (!_0x5d738a) {
            _0x17a5df.state = de;
          }
        }
        if (Q.length > 1000000) {
          Q = [];
          throw new Error();
        }
      }, false);
    }
  }
  return _0x115d84;
}
function Ce(_0x5071d4) {
  if (!_0x5071d4.fn) {
    return;
  }
  Te(_0x5071d4);
  const _0x16c1ca = X;
  const _0x121345 = W;
  const _0x3b0262 = Be;
  W = X = _0x5071d4;
  wt(_0x5071d4, _0x5071d4.value, _0x3b0262);
  W = _0x121345;
  X = _0x16c1ca;
}
function wt(_0x44d5d0, _0x59b088, _0x6e723d) {
  let _0x326bf1;
  try {
    _0x326bf1 = _0x44d5d0.fn(_0x59b088);
  } catch (_0x331d33) {
    if (_0x44d5d0.pure) {
      _0x44d5d0.state = de;
      if (_0x44d5d0.owned) {
        _0x44d5d0.owned.forEach(Te);
      }
      _0x44d5d0.owned = null;
    }
    _0x44d5d0.updatedAt = _0x6e723d + 1;
    return ut(_0x331d33);
  }
  if (!_0x44d5d0.updatedAt || _0x44d5d0.updatedAt <= _0x6e723d) {
    if (_0x44d5d0.updatedAt != null && "observers" in _0x44d5d0) {
      st(_0x44d5d0, _0x326bf1);
    } else {
      _0x44d5d0.value = _0x326bf1;
    }
    _0x44d5d0.updatedAt = _0x6e723d;
  }
}
function qe(_0x57d4a0, _0x4a8c4f, _0xab8362, _0x3763b2 = de, _0xdd9c66) {
  const _0x24bad3 = {
    fn: _0x57d4a0,
    state: _0x3763b2,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: _0x4a8c4f,
    owner: X,
    context: null,
    pure: _0xab8362
  };
  if (X !== null) {
    if (X !== tt) {
      if (X.owned) {
        X.owned.push(_0x24bad3);
      } else {
        X.owned = [_0x24bad3];
      }
    }
  }
  return _0x24bad3;
}
function Ae(_0x3713d2) {
  if (_0x3713d2.state === 0) {
    return;
  }
  if (_0x3713d2.state === we) {
    return Pe(_0x3713d2);
  }
  if (_0x3713d2.suspense && oe(_0x3713d2.suspense.inFallback)) {
    return _0x3713d2.suspense.effects.push(_0x3713d2);
  }
  const _0x518cfb = [_0x3713d2];
  while ((_0x3713d2 = _0x3713d2.owner) && (!_0x3713d2.updatedAt || _0x3713d2.updatedAt < Be)) {
    if (_0x3713d2.state) {
      _0x518cfb.push(_0x3713d2);
    }
  }
  for (let _0xa1d83c = _0x518cfb.length - 1; _0xa1d83c >= 0; _0xa1d83c--) {
    _0x3713d2 = _0x518cfb[_0xa1d83c];
    if (_0x3713d2.state === de) {
      Ce(_0x3713d2);
    } else if (_0x3713d2.state === we) {
      const _0x19c685 = Q;
      Q = null;
      $e(() => Pe(_0x3713d2, _0x518cfb[0]), false);
      Q = _0x19c685;
    }
  }
}
function $e(_0x1c9b09, _0x1f3fe6) {
  if (Q) {
    return _0x1c9b09();
  }
  let _0x3b25e8 = false;
  if (!_0x1f3fe6) {
    Q = [];
  }
  if (re) {
    _0x3b25e8 = true;
  } else {
    re = [];
  }
  Be++;
  try {
    const _0x252531 = _0x1c9b09();
    kt(_0x3b25e8);
    return _0x252531;
  } catch (_0x1c61b4) {
    if (!_0x3b25e8) {
      re = null;
    }
    Q = null;
    ut(_0x1c61b4);
  }
}
function kt(_0x143755) {
  if (Q) {
    lt(Q);
    Q = null;
  }
  if (_0x143755) {
    return;
  }
  const _0x57876f = re;
  re = null;
  if (_0x57876f.length) {
    $e(() => et(_0x57876f), false);
  }
}
function lt(_0x3c0de4) {
  for (let _0x50363e = 0; _0x50363e < _0x3c0de4.length; _0x50363e++) {
    Ae(_0x3c0de4[_0x50363e]);
  }
}
function At(_0x322772) {
  let _0x3a6360;
  let _0x5cd093 = 0;
  for (_0x3a6360 = 0; _0x3a6360 < _0x322772.length; _0x3a6360++) {
    const _0x46e9ed = _0x322772[_0x3a6360];
    if (_0x46e9ed.user) {
      _0x322772[_0x5cd093++] = _0x46e9ed;
    } else {
      Ae(_0x46e9ed);
    }
  }
  for (_0x3a6360 = 0; _0x3a6360 < _0x5cd093; _0x3a6360++) {
    Ae(_0x322772[_0x3a6360]);
  }
}
function Pe(_0x2e60d7, _0x456cf7) {
  _0x2e60d7.state = 0;
  for (let _0x36a0ae = 0; _0x36a0ae < _0x2e60d7.sources.length; _0x36a0ae += 1) {
    const _0x2da01a = _0x2e60d7.sources[_0x36a0ae];
    if (_0x2da01a.sources) {
      const _0x4dc743 = _0x2da01a.state;
      if (_0x4dc743 === de) {
        if (_0x2da01a !== _0x456cf7 && (!_0x2da01a.updatedAt || _0x2da01a.updatedAt < Be)) {
          Ae(_0x2da01a);
        }
      } else if (_0x4dc743 === we) {
        Pe(_0x2da01a, _0x456cf7);
      }
    }
  }
}
function ct(_0x322326) {
  for (let _0x4d2b6f = 0; _0x4d2b6f < _0x322326.observers.length; _0x4d2b6f += 1) {
    const _0x513716 = _0x322326.observers[_0x4d2b6f];
    if (!_0x513716.state) {
      _0x513716.state = we;
      if (_0x513716.pure) {
        Q.push(_0x513716);
      } else {
        re.push(_0x513716);
      }
      if (_0x513716.observers) {
        ct(_0x513716);
      }
    }
  }
}
function Te(_0x3edf3c) {
  let _0x11ad59;
  if (_0x3edf3c.sources) {
    while (_0x3edf3c.sources.length) {
      const _0x4cfbb = _0x3edf3c.sources.pop();
      const _0x1397cd = _0x3edf3c.sourceSlots.pop();
      const _0x359be2 = _0x4cfbb.observers;
      if (_0x359be2 && _0x359be2.length) {
        const _0xc3b3dd = _0x359be2.pop();
        const _0x2a77f9 = _0x4cfbb.observerSlots.pop();
        if (_0x1397cd < _0x359be2.length) {
          _0xc3b3dd.sourceSlots[_0x2a77f9] = _0x1397cd;
          _0x359be2[_0x1397cd] = _0xc3b3dd;
          _0x4cfbb.observerSlots[_0x1397cd] = _0x2a77f9;
        }
      }
    }
  }
  if (_0x3edf3c.owned) {
    for (_0x11ad59 = _0x3edf3c.owned.length - 1; _0x11ad59 >= 0; _0x11ad59--) {
      Te(_0x3edf3c.owned[_0x11ad59]);
    }
    _0x3edf3c.owned = null;
  }
  if (_0x3edf3c.cleanups) {
    for (_0x11ad59 = _0x3edf3c.cleanups.length - 1; _0x11ad59 >= 0; _0x11ad59--) {
      _0x3edf3c.cleanups[_0x11ad59]();
    }
    _0x3edf3c.cleanups = null;
  }
  _0x3edf3c.state = 0;
  _0x3edf3c.context = null;
}
function ut(_0x43ac4a) {
  throw _0x43ac4a;
}
function dt(_0x14012a, _0x4238f3) {
  if (_0x14012a) {
    if (_0x14012a.context && _0x14012a.context[_0x4238f3] !== undefined) {
      return _0x14012a.context[_0x4238f3];
    } else {
      return dt(_0x14012a.owner, _0x4238f3);
    }
  } else {
    return undefined;
  }
}
function je(_0x4b3308) {
  if (typeof _0x4b3308 == "function" && !_0x4b3308.length) {
    return je(_0x4b3308());
  }
  if (Array.isArray(_0x4b3308)) {
    const _0x105a93 = [];
    for (let _0x36d3c9 = 0; _0x36d3c9 < _0x4b3308.length; _0x36d3c9++) {
      const _0xc1f1e2 = je(_0x4b3308[_0x36d3c9]);
      if (Array.isArray(_0xc1f1e2)) {
        _0x105a93.push.apply(_0x105a93, _0xc1f1e2);
      } else {
        _0x105a93.push(_0xc1f1e2);
      }
    }
    return _0x105a93;
  }
  return _0x4b3308;
}
function Pt(_0x3a5298, _0x4df691) {
  return function (_0x30dc85) {
    let _0x56b3fb;
    U(() => _0x56b3fb = oe(() => {
      X.context = {
        [_0x3a5298]: _0x30dc85.value
      };
      return it(() => _0x30dc85.children);
    }), undefined);
    return _0x56b3fb;
  };
}
const Rt = Symbol("fallback");
function Xe(_0x3965d5) {
  for (let _0x3879d4 = 0; _0x3879d4 < _0x3965d5.length; _0x3879d4++) {
    _0x3965d5[_0x3879d4]();
  }
}
function It(_0x207e2e, _0x42ab9f, _0x44d562 = {}) {
  let _0x2b5da3 = [];
  let _0x4e92c9 = [];
  let _0x4bfb4e = [];
  let _0xec402a = 0;
  let _0x54f237 = _0x42ab9f.length > 1 ? [] : null;
  nt(() => Xe(_0x4bfb4e));
  return () => {
    let _0x35c8c3 = _0x207e2e() || [];
    let _0x41ff2c;
    let _0xbabb96;
    _0x35c8c3[Ve];
    return oe(() => {
      let _0x32a8ef = _0x35c8c3.length;
      let _0x1e94cd;
      let _0x21405f;
      let _0xc61eb0;
      let _0x26c98b;
      let _0x23c901;
      let _0x3bbf5b;
      let _0x4f5a1f;
      let _0x4f587e;
      let _0xfa8b44;
      if (_0x32a8ef === 0) {
        if (_0xec402a !== 0) {
          Xe(_0x4bfb4e);
          _0x4bfb4e = [];
          _0x2b5da3 = [];
          _0x4e92c9 = [];
          _0xec402a = 0;
          _0x54f237 &&= [];
        }
        if (_0x44d562.fallback) {
          _0x2b5da3 = [Rt];
          _0x4e92c9[0] = me(_0x56df80 => {
            _0x4bfb4e[0] = _0x56df80;
            return _0x44d562.fallback();
          });
          _0xec402a = 1;
        }
      } else if (_0xec402a === 0) {
        _0x4e92c9 = new Array(_0x32a8ef);
        _0xbabb96 = 0;
        for (; _0xbabb96 < _0x32a8ef; _0xbabb96++) {
          _0x2b5da3[_0xbabb96] = _0x35c8c3[_0xbabb96];
          _0x4e92c9[_0xbabb96] = me(_0x3012d0);
        }
        _0xec402a = _0x32a8ef;
      } else {
        _0xc61eb0 = new Array(_0x32a8ef);
        _0x26c98b = new Array(_0x32a8ef);
        if (_0x54f237) {
          _0x23c901 = new Array(_0x32a8ef);
        }
        _0x3bbf5b = 0;
        _0x4f5a1f = Math.min(_0xec402a, _0x32a8ef);
        for (; _0x3bbf5b < _0x4f5a1f && _0x2b5da3[_0x3bbf5b] === _0x35c8c3[_0x3bbf5b]; _0x3bbf5b++);
        _0x4f5a1f = _0xec402a - 1;
        _0x4f587e = _0x32a8ef - 1;
        for (; _0x4f5a1f >= _0x3bbf5b && _0x4f587e >= _0x3bbf5b && _0x2b5da3[_0x4f5a1f] === _0x35c8c3[_0x4f587e]; _0x4f5a1f--, _0x4f587e--) {
          _0xc61eb0[_0x4f587e] = _0x4e92c9[_0x4f5a1f];
          _0x26c98b[_0x4f587e] = _0x4bfb4e[_0x4f5a1f];
          if (_0x54f237) {
            _0x23c901[_0x4f587e] = _0x54f237[_0x4f5a1f];
          }
        }
        _0x1e94cd = new Map();
        _0x21405f = new Array(_0x4f587e + 1);
        _0xbabb96 = _0x4f587e;
        for (; _0xbabb96 >= _0x3bbf5b; _0xbabb96--) {
          _0xfa8b44 = _0x35c8c3[_0xbabb96];
          _0x41ff2c = _0x1e94cd.get(_0xfa8b44);
          _0x21405f[_0xbabb96] = _0x41ff2c === undefined ? -1 : _0x41ff2c;
          _0x1e94cd.set(_0xfa8b44, _0xbabb96);
        }
        for (_0x41ff2c = _0x3bbf5b; _0x41ff2c <= _0x4f5a1f; _0x41ff2c++) {
          _0xfa8b44 = _0x2b5da3[_0x41ff2c];
          _0xbabb96 = _0x1e94cd.get(_0xfa8b44);
          if (_0xbabb96 !== undefined && _0xbabb96 !== -1) {
            _0xc61eb0[_0xbabb96] = _0x4e92c9[_0x41ff2c];
            _0x26c98b[_0xbabb96] = _0x4bfb4e[_0x41ff2c];
            if (_0x54f237) {
              _0x23c901[_0xbabb96] = _0x54f237[_0x41ff2c];
            }
            _0xbabb96 = _0x21405f[_0xbabb96];
            _0x1e94cd.set(_0xfa8b44, _0xbabb96);
          } else {
            _0x4bfb4e[_0x41ff2c]();
          }
        }
        for (_0xbabb96 = _0x3bbf5b; _0xbabb96 < _0x32a8ef; _0xbabb96++) {
          if (_0xbabb96 in _0xc61eb0) {
            _0x4e92c9[_0xbabb96] = _0xc61eb0[_0xbabb96];
            _0x4bfb4e[_0xbabb96] = _0x26c98b[_0xbabb96];
            if (_0x54f237) {
              _0x54f237[_0xbabb96] = _0x23c901[_0xbabb96];
              _0x54f237[_0xbabb96](_0xbabb96);
            }
          } else {
            _0x4e92c9[_0xbabb96] = me(_0x3012d0);
          }
        }
        _0x4e92c9 = _0x4e92c9.slice(0, _0xec402a = _0x32a8ef);
        _0x2b5da3 = _0x35c8c3.slice(0);
      }
      return _0x4e92c9;
    });
    function _0x3012d0(_0x195fdf) {
      _0x4bfb4e[_0xbabb96] = _0x195fdf;
      if (_0x54f237) {
        const [_0x479472, _0x11f745] = j(_0xbabb96);
        _0x54f237[_0xbabb96] = _0x11f745;
        return _0x42ab9f(_0x35c8c3[_0xbabb96], _0x479472);
      }
      return _0x42ab9f(_0x35c8c3[_0xbabb96]);
    }
  };
}
function N(_0x8357be, _0x2c60aa) {
  return oe(() => _0x8357be(_0x2c60aa || {}));
}
const ft = _0x56c7f9 => "Stale read from <" + _0x56c7f9 + ">.";
function be(_0x33efaf) {
  const _0x1c2d65 = "fallback" in _0x33efaf && {
    fallback: () => _0x33efaf.fallback
  };
  return F(It(() => _0x33efaf.each, _0x33efaf.children, _0x1c2d65 || undefined));
}
function Fe(_0x4e2789) {
  const _0xba8e4c = _0x4e2789.keyed;
  const _0x556335 = F(() => _0x4e2789.when, undefined, {
    equals: (_0xd7fd40, _0xb6fc7c) => _0xba8e4c ? _0xd7fd40 === _0xb6fc7c : !_0xd7fd40 == !_0xb6fc7c
  });
  return F(() => {
    const _0x316e52 = _0x556335();
    if (_0x316e52) {
      const _0x6a6e96 = _0x4e2789.children;
      if (typeof _0x6a6e96 == "function" && _0x6a6e96.length > 0) {
        return oe(() => _0x6a6e96(_0xba8e4c ? _0x316e52 : () => {
          if (!oe(_0x556335)) {
            throw ft("Show");
          }
          return _0x4e2789.when;
        }));
      } else {
        return _0x6a6e96;
      }
    }
    return _0x4e2789.fallback;
  }, undefined, undefined);
}
function Et(_0x13cf0f) {
  let _0x5defb1 = false;
  const _0x396712 = (_0x17a98b, _0xe541f9) => _0x17a98b[0] === _0xe541f9[0] && (_0x5defb1 ? _0x17a98b[1] === _0xe541f9[1] : !_0x17a98b[1] == !_0xe541f9[1]) && _0x17a98b[2] === _0xe541f9[2];
  const _0x412c58 = it(() => _0x13cf0f.children);
  const _0x3aafc6 = F(() => {
    let _0x584281 = _0x412c58();
    if (!Array.isArray(_0x584281)) {
      _0x584281 = [_0x584281];
    }
    for (let _0x53ed2c = 0; _0x53ed2c < _0x584281.length; _0x53ed2c++) {
      const _0x4773c2 = _0x584281[_0x53ed2c].when;
      if (_0x4773c2) {
        _0x5defb1 = !!_0x584281[_0x53ed2c].keyed;
        return [_0x53ed2c, _0x4773c2, _0x584281[_0x53ed2c]];
      }
    }
    return [-1];
  }, undefined, {
    equals: _0x396712
  });
  return F(() => {
    const [_0x2e25a1, _0x4ea458, _0x433b00] = _0x3aafc6();
    if (_0x2e25a1 < 0) {
      return _0x13cf0f.fallback;
    }
    const _0x568ae8 = _0x433b00.children;
    if (typeof _0x568ae8 == "function" && _0x568ae8.length > 0) {
      return oe(() => _0x568ae8(_0x5defb1 ? _0x4ea458 : () => {
        if (oe(_0x3aafc6)[0] !== _0x2e25a1) {
          throw ft("Match");
        }
        return _0x433b00.when;
      }));
    } else {
      return _0x568ae8;
    }
  }, undefined, undefined);
}
function Qe(_0x2c5c11) {
  return _0x2c5c11;
}
function Bt(_0x3ca82f, _0x21afb9, _0x450528) {
  let _0x3ef12a = _0x450528.length;
  let _0x593ee0 = _0x21afb9.length;
  let _0x3fc65c = _0x3ef12a;
  let _0x3b4fa3 = 0;
  let _0x1e43bd = 0;
  let _0x3670c4 = _0x21afb9[_0x593ee0 - 1].nextSibling;
  let _0x58fc38 = null;
  while (_0x3b4fa3 < _0x593ee0 || _0x1e43bd < _0x3fc65c) {
    if (_0x21afb9[_0x3b4fa3] === _0x450528[_0x1e43bd]) {
      _0x3b4fa3++;
      _0x1e43bd++;
      continue;
    }
    while (_0x21afb9[_0x593ee0 - 1] === _0x450528[_0x3fc65c - 1]) {
      _0x593ee0--;
      _0x3fc65c--;
    }
    if (_0x593ee0 === _0x3b4fa3) {
      const _0x2cb488 = _0x3fc65c < _0x3ef12a ? _0x1e43bd ? _0x450528[_0x1e43bd - 1].nextSibling : _0x450528[_0x3fc65c - _0x1e43bd] : _0x3670c4;
      while (_0x1e43bd < _0x3fc65c) {
        _0x3ca82f.insertBefore(_0x450528[_0x1e43bd++], _0x2cb488);
      }
    } else if (_0x3fc65c === _0x1e43bd) {
      while (_0x3b4fa3 < _0x593ee0) {
        if (!_0x58fc38 || !_0x58fc38.has(_0x21afb9[_0x3b4fa3])) {
          _0x21afb9[_0x3b4fa3].remove();
        }
        _0x3b4fa3++;
      }
    } else if (_0x21afb9[_0x3b4fa3] === _0x450528[_0x3fc65c - 1] && _0x450528[_0x1e43bd] === _0x21afb9[_0x593ee0 - 1]) {
      const _0x1db169 = _0x21afb9[--_0x593ee0].nextSibling;
      _0x3ca82f.insertBefore(_0x450528[_0x1e43bd++], _0x21afb9[_0x3b4fa3++].nextSibling);
      _0x3ca82f.insertBefore(_0x450528[--_0x3fc65c], _0x1db169);
      _0x21afb9[_0x593ee0] = _0x450528[_0x3fc65c];
    } else {
      if (!_0x58fc38) {
        _0x58fc38 = new Map();
        let _0x3e3ab7 = _0x1e43bd;
        while (_0x3e3ab7 < _0x3fc65c) {
          _0x58fc38.set(_0x450528[_0x3e3ab7], _0x3e3ab7++);
        }
      }
      const _0x4e7479 = _0x58fc38.get(_0x21afb9[_0x3b4fa3]);
      if (_0x4e7479 != null) {
        if (_0x1e43bd < _0x4e7479 && _0x4e7479 < _0x3fc65c) {
          let _0x2ada40 = _0x3b4fa3;
          let _0x199db1 = 1;
          let _0x21d1d4;
          while (++_0x2ada40 < _0x593ee0 && _0x2ada40 < _0x3fc65c && (_0x21d1d4 = _0x58fc38.get(_0x21afb9[_0x2ada40])) != null && _0x21d1d4 === _0x4e7479 + _0x199db1) {
            _0x199db1++;
          }
          if (_0x199db1 > _0x4e7479 - _0x1e43bd) {
            const _0x1dbb1d = _0x21afb9[_0x3b4fa3];
            while (_0x1e43bd < _0x4e7479) {
              _0x3ca82f.insertBefore(_0x450528[_0x1e43bd++], _0x1dbb1d);
            }
          } else {
            _0x3ca82f.replaceChild(_0x450528[_0x1e43bd++], _0x21afb9[_0x3b4fa3++]);
          }
        } else {
          _0x3b4fa3++;
        }
      } else {
        _0x21afb9[_0x3b4fa3++].remove();
      }
    }
  }
}
const Ye = "_$DX_DELEGATE";
function Tt(_0x1b4ab9, _0x422369, _0x36ea2a, _0x502a52 = {}) {
  let _0x40f61c;
  me(_0x43c622 => {
    _0x40f61c = _0x43c622;
    if (_0x422369 === document) {
      _0x1b4ab9();
    } else {
      g(_0x422369, _0x1b4ab9(), _0x422369.firstChild ? null : undefined, _0x36ea2a);
    }
  }, _0x502a52.owner);
  return () => {
    _0x40f61c();
    _0x422369.textContent = "";
  };
}
function H(_0x4fd2b1, _0x426cbb, _0x556afa) {
  let _0x5a02ba;
  const _0x28c0e6 = () => {
    const _0x52e81d = document.createElement("template");
    _0x52e81d.innerHTML = _0x4fd2b1;
    if (_0x556afa) {
      return _0x52e81d.content.firstChild.firstChild;
    } else {
      return _0x52e81d.content.firstChild;
    }
  };
  const _0x41a69c = _0x426cbb ? () => oe(() => document.importNode(_0x5a02ba ||= _0x28c0e6(), true)) : () => (_0x5a02ba ||= _0x28c0e6()).cloneNode(true);
  _0x41a69c.cloneNode = _0x41a69c;
  return _0x41a69c;
}
function pe(_0x203225, _0x38cf61 = window.document) {
  const _0x5a4b23 = _0x38cf61[Ye] ||= new Set();
  for (let _0x34654c = 0, _0x919bdb = _0x203225.length; _0x34654c < _0x919bdb; _0x34654c++) {
    const _0x171c92 = _0x203225[_0x34654c];
    if (!_0x5a4b23.has(_0x171c92)) {
      _0x5a4b23.add(_0x171c92);
      _0x38cf61.addEventListener(_0x171c92, Dt);
    }
  }
}
function u(_0x3e61a2, _0x533741) {
  if (_0x533741 == null) {
    _0x3e61a2.removeAttribute("class");
  } else {
    _0x3e61a2.className = _0x533741;
  }
}
function vt(_0x4f4b9c, _0x24d876, _0x4de432, _0x3c958e) {
  if (_0x3c958e) {
    if (Array.isArray(_0x4de432)) {
      _0x4f4b9c["$$" + _0x24d876] = _0x4de432[0];
      _0x4f4b9c["$$" + _0x24d876 + "Data"] = _0x4de432[1];
    } else {
      _0x4f4b9c["$$" + _0x24d876] = _0x4de432;
    }
  } else if (Array.isArray(_0x4de432)) {
    const _0xf21fd1 = _0x4de432[0];
    _0x4f4b9c.addEventListener(_0x24d876, _0x4de432[0] = _0x49f012 => _0xf21fd1.call(_0x4f4b9c, _0x4de432[1], _0x49f012));
  } else {
    _0x4f4b9c.addEventListener(_0x24d876, _0x4de432);
  }
}
function ve(_0x505022, _0xdabd5b, _0x7a5cfd) {
  return oe(() => _0x505022(_0xdabd5b, _0x7a5cfd));
}
function g(_0x25eb25, _0x44811f, _0x393047, _0x335080) {
  if (_0x393047 !== undefined && !_0x335080) {
    _0x335080 = [];
  }
  if (typeof _0x44811f != "function") {
    return Re(_0x25eb25, _0x44811f, _0x335080, _0x393047);
  }
  U(_0x2046fd => Re(_0x25eb25, _0x44811f(), _0x2046fd, _0x393047), _0x335080);
}
function Dt(_0x25ff8f) {
  const _0x2b0951 = "$$" + _0x25ff8f.type;
  let _0x5d0c9d = _0x25ff8f.composedPath && _0x25ff8f.composedPath()[0] || _0x25ff8f.target;
  if (_0x25ff8f.target !== _0x5d0c9d) {
    Object.defineProperty(_0x25ff8f, "target", {
      configurable: true,
      value: _0x5d0c9d
    });
  }
  Object.defineProperty(_0x25ff8f, "currentTarget", {
    configurable: true,
    get() {
      return _0x5d0c9d || document;
    }
  });
  while (_0x5d0c9d) {
    const _0x53c486 = _0x5d0c9d[_0x2b0951];
    if (_0x53c486 && !_0x5d0c9d.disabled) {
      const _0x46b7ae = _0x5d0c9d[_0x2b0951 + "Data"];
      if (_0x46b7ae !== undefined) {
        _0x53c486.call(_0x5d0c9d, _0x46b7ae, _0x25ff8f);
      } else {
        _0x53c486.call(_0x5d0c9d, _0x25ff8f);
      }
      if (_0x25ff8f.cancelBubble) {
        return;
      }
    }
    _0x5d0c9d = _0x5d0c9d._$host || _0x5d0c9d.parentNode || _0x5d0c9d.host;
  }
}
function Re(_0x5c34ae, _0xcb6442, _0x4d75db, _0x33ded0, _0x3aebdd) {
  while (typeof _0x4d75db == "function") {
    _0x4d75db = _0x4d75db();
  }
  if (_0xcb6442 === _0x4d75db) {
    return _0x4d75db;
  }
  const _0x1b608f = typeof _0xcb6442;
  const _0x1db2b6 = _0x33ded0 !== undefined;
  _0x5c34ae = _0x1db2b6 && _0x4d75db[0] && _0x4d75db[0].parentNode || _0x5c34ae;
  if (_0x1b608f === "string" || _0x1b608f === "number") {
    if (_0x1b608f === "number") {
      _0xcb6442 = _0xcb6442.toString();
    }
    if (_0x1db2b6) {
      let _0x400ac7 = _0x4d75db[0];
      if (_0x400ac7 && _0x400ac7.nodeType === 3) {
        _0x400ac7.data = _0xcb6442;
      } else {
        _0x400ac7 = document.createTextNode(_0xcb6442);
      }
      _0x4d75db = ae(_0x5c34ae, _0x4d75db, _0x33ded0, _0x400ac7);
    } else if (_0x4d75db !== "" && typeof _0x4d75db == "string") {
      _0x4d75db = _0x5c34ae.firstChild.data = _0xcb6442;
    } else {
      _0x4d75db = _0x5c34ae.textContent = _0xcb6442;
    }
  } else if (_0xcb6442 == null || _0x1b608f === "boolean") {
    _0x4d75db = ae(_0x5c34ae, _0x4d75db, _0x33ded0);
  } else {
    if (_0x1b608f === "function") {
      U(() => {
        let _0x33e16c = _0xcb6442();
        while (typeof _0x33e16c == "function") {
          _0x33e16c = _0x33e16c();
        }
        _0x4d75db = Re(_0x5c34ae, _0x33e16c, _0x4d75db, _0x33ded0);
      });
      return () => _0x4d75db;
    }
    if (Array.isArray(_0xcb6442)) {
      const _0x4bf63b = [];
      const _0x106f9d = _0x4d75db && Array.isArray(_0x4d75db);
      if (Me(_0x4bf63b, _0xcb6442, _0x4d75db, _0x3aebdd)) {
        U(() => _0x4d75db = Re(_0x5c34ae, _0x4bf63b, _0x4d75db, _0x33ded0, true));
        return () => _0x4d75db;
      }
      if (_0x4bf63b.length === 0) {
        _0x4d75db = ae(_0x5c34ae, _0x4d75db, _0x33ded0);
        if (_0x1db2b6) {
          return _0x4d75db;
        }
      } else if (_0x106f9d) {
        if (_0x4d75db.length === 0) {
          Je(_0x5c34ae, _0x4bf63b, _0x33ded0);
        } else {
          Bt(_0x5c34ae, _0x4d75db, _0x4bf63b);
        }
      } else {
        if (_0x4d75db) {
          ae(_0x5c34ae);
        }
        Je(_0x5c34ae, _0x4bf63b);
      }
      _0x4d75db = _0x4bf63b;
    } else if (_0xcb6442.nodeType) {
      if (Array.isArray(_0x4d75db)) {
        if (_0x1db2b6) {
          return _0x4d75db = ae(_0x5c34ae, _0x4d75db, _0x33ded0, _0xcb6442);
        }
        ae(_0x5c34ae, _0x4d75db, null, _0xcb6442);
      } else if (_0x4d75db == null || _0x4d75db === "" || !_0x5c34ae.firstChild) {
        _0x5c34ae.appendChild(_0xcb6442);
      } else {
        _0x5c34ae.replaceChild(_0xcb6442, _0x5c34ae.firstChild);
      }
      _0x4d75db = _0xcb6442;
    } else {
      console.warn("Unrecognized value. Skipped inserting", _0xcb6442);
    }
  }
  return _0x4d75db;
}
function Me(_0x22ed29, _0x5aea5e, _0x52d2ff, _0x420b86) {
  let _0x5748f2 = false;
  for (let _0x142887 = 0, _0x2a8121 = _0x5aea5e.length; _0x142887 < _0x2a8121; _0x142887++) {
    let _0x51d778 = _0x5aea5e[_0x142887];
    let _0x2f5170 = _0x52d2ff && _0x52d2ff[_0x142887];
    let _0x5f3d2a;
    if (_0x51d778 != null && _0x51d778 !== true && _0x51d778 !== false) {
      if ((_0x5f3d2a = typeof _0x51d778) == "object" && _0x51d778.nodeType) {
        _0x22ed29.push(_0x51d778);
      } else if (Array.isArray(_0x51d778)) {
        _0x5748f2 = Me(_0x22ed29, _0x51d778, _0x2f5170) || _0x5748f2;
      } else if (_0x5f3d2a === "function") {
        if (_0x420b86) {
          while (typeof _0x51d778 == "function") {
            _0x51d778 = _0x51d778();
          }
          _0x5748f2 = Me(_0x22ed29, Array.isArray(_0x51d778) ? _0x51d778 : [_0x51d778], Array.isArray(_0x2f5170) ? _0x2f5170 : [_0x2f5170]) || _0x5748f2;
        } else {
          _0x22ed29.push(_0x51d778);
          _0x5748f2 = true;
        }
      } else {
        const _0x265687 = String(_0x51d778);
        if (_0x2f5170 && _0x2f5170.nodeType === 3 && _0x2f5170.data === _0x265687) {
          _0x22ed29.push(_0x2f5170);
        } else {
          _0x22ed29.push(document.createTextNode(_0x265687));
        }
      }
    }
  }
  return _0x5748f2;
}
function Je(_0x2e3a84, _0x444661, _0x23db6c = null) {
  for (let _0x106254 = 0, _0xf00f45 = _0x444661.length; _0x106254 < _0xf00f45; _0x106254++) {
    _0x2e3a84.insertBefore(_0x444661[_0x106254], _0x23db6c);
  }
}
function ae(_0x518e9a, _0x2588e3, _0x311fcb, _0x406f95) {
  if (_0x311fcb === undefined) {
    return _0x518e9a.textContent = "";
  }
  const _0x345a33 = _0x406f95 || document.createTextNode("");
  if (_0x2588e3.length) {
    let _0xf33ebd = false;
    for (let _0x5b2392 = _0x2588e3.length - 1; _0x5b2392 >= 0; _0x5b2392--) {
      const _0x26988b = _0x2588e3[_0x5b2392];
      if (_0x345a33 !== _0x26988b) {
        const _0x4c6d62 = _0x26988b.parentNode === _0x518e9a;
        if (!_0xf33ebd && !_0x5b2392) {
          if (_0x4c6d62) {
            _0x518e9a.replaceChild(_0x345a33, _0x26988b);
          } else {
            _0x518e9a.insertBefore(_0x345a33, _0x311fcb);
          }
        } else if (_0x4c6d62) {
          _0x26988b.remove();
        }
      } else {
        _0xf33ebd = true;
      }
    }
  } else {
    _0x518e9a.insertBefore(_0x345a33, _0x311fcb);
  }
  return [_0x345a33];
}
const Lt = "_App_1ppnk_1";
const Nt = "_container_1ppnk_12";
const Ot = "_backgroundEllipse_1ppnk_21";
const Vt = "_borderContainer_1ppnk_34";
const jt = "_subContainer_1ppnk_42";
const Ft = "_header_1ppnk_54";
const Mt = "_description_1ppnk_67";
const zt = "_divider_1ppnk_82";
const Ut = "_dividerRectangle_1ppnk_93";
const Kt = "_sliderScrollContainer_1ppnk_102";
const qt = "_sliderContainer_1ppnk_107";
const Ht = "_footerSectionContainer_1ppnk_130";
const Wt = "_footerSectionTitle_1ppnk_148";
const Gt = "_timeFrameButton_1ppnk_161";
const J = {
  App: Lt,
  container: Nt,
  backgroundEllipse: Ot,
  borderContainer: Vt,
  subContainer: jt,
  header: Ft,
  description: Mt,
  divider: zt,
  dividerRectangle: Ut,
  sliderScrollContainer: Kt,
  sliderContainer: qt,
  footerSectionContainer: Ht,
  footerSectionTitle: Wt,
  timeFrameButton: Gt
};
function Xt(_0x2783b1, _0x480238) {
  const _0xb82426 = bt(_0x480238);
  return [_0x169feb => N(_0xb82426.Provider, {
    value: _0x2783b1(_0x169feb),
    get children() {
      return _0x169feb.children;
    }
  }), () => St(_0xb82426)];
}
const ze = Symbol("store-raw");
const ge = Symbol("store-node");
function at(_0x12ac9e) {
  let _0x447eae = _0x12ac9e[fe];
  if (!_0x447eae && (Object.defineProperty(_0x12ac9e, fe, {
    value: _0x447eae = new Proxy(_0x12ac9e, Jt)
  }), !Array.isArray(_0x12ac9e))) {
    const _0x492f91 = Object.keys(_0x12ac9e);
    const _0x50b899 = Object.getOwnPropertyDescriptors(_0x12ac9e);
    for (let _0x48325f = 0, _0x9a162d = _0x492f91.length; _0x48325f < _0x9a162d; _0x48325f++) {
      const _0xcae278 = _0x492f91[_0x48325f];
      if (_0x50b899[_0xcae278].get) {
        Object.defineProperty(_0x12ac9e, _0xcae278, {
          enumerable: _0x50b899[_0xcae278].enumerable,
          get: _0x50b899[_0xcae278].get.bind(_0x447eae)
        });
      }
    }
  }
  return _0x447eae;
}
function Ie(_0x4430e4) {
  let _0x17980e;
  return _0x4430e4 != null && typeof _0x4430e4 == "object" && (_0x4430e4[fe] || !(_0x17980e = Object.getPrototypeOf(_0x4430e4)) || _0x17980e === Object.prototype || Array.isArray(_0x4430e4));
}
function he(_0x343fe0, _0x9ee4e9 = new Set()) {
  let _0x1ebd86;
  let _0x523e6e;
  let _0x9172cf;
  let _0x1d0b89;
  if (_0x1ebd86 = _0x343fe0 != null && _0x343fe0[ze]) {
    return _0x1ebd86;
  }
  if (!Ie(_0x343fe0) || _0x9ee4e9.has(_0x343fe0)) {
    return _0x343fe0;
  }
  if (Array.isArray(_0x343fe0)) {
    if (Object.isFrozen(_0x343fe0)) {
      _0x343fe0 = _0x343fe0.slice(0);
    } else {
      _0x9ee4e9.add(_0x343fe0);
    }
    for (let _0x58a9f1 = 0, _0xb9c9a6 = _0x343fe0.length; _0x58a9f1 < _0xb9c9a6; _0x58a9f1++) {
      _0x9172cf = _0x343fe0[_0x58a9f1];
      if ((_0x523e6e = he(_0x9172cf, _0x9ee4e9)) !== _0x9172cf) {
        _0x343fe0[_0x58a9f1] = _0x523e6e;
      }
    }
  } else {
    if (Object.isFrozen(_0x343fe0)) {
      _0x343fe0 = Object.assign({}, _0x343fe0);
    } else {
      _0x9ee4e9.add(_0x343fe0);
    }
    const _0x12689c = Object.keys(_0x343fe0);
    const _0x545910 = Object.getOwnPropertyDescriptors(_0x343fe0);
    for (let _0x399e99 = 0, _0x42da61 = _0x12689c.length; _0x399e99 < _0x42da61; _0x399e99++) {
      _0x1d0b89 = _0x12689c[_0x399e99];
      if (!_0x545910[_0x1d0b89].get) {
        _0x9172cf = _0x343fe0[_0x1d0b89];
        if ((_0x523e6e = he(_0x9172cf, _0x9ee4e9)) !== _0x9172cf) {
          _0x343fe0[_0x1d0b89] = _0x523e6e;
        }
      }
    }
  }
  return _0x343fe0;
}
function He(_0x47be54) {
  let _0x4dc73c = _0x47be54[ge];
  if (!_0x4dc73c) {
    Object.defineProperty(_0x47be54, ge, {
      value: _0x4dc73c = Object.create(null)
    });
  }
  return _0x4dc73c;
}
function Ue(_0x565e08, _0x10b52b, _0x3d2042) {
  return _0x565e08[_0x10b52b] ||= $t(_0x3d2042);
}
function Qt(_0x182762, _0x3eb355) {
  const _0x2906fa = Reflect.getOwnPropertyDescriptor(_0x182762, _0x3eb355);
  if (!!_0x2906fa && !_0x2906fa.get && !!_0x2906fa.configurable && _0x3eb355 !== fe && _0x3eb355 !== ge) {
    delete _0x2906fa.value;
    delete _0x2906fa.writable;
    _0x2906fa.get = () => _0x182762[fe][_0x3eb355];
  }
  return _0x2906fa;
}
function _t(_0x5cc77a) {
  if (ot()) {
    const _0x557a19 = He(_0x5cc77a);
    (_0x557a19._ ||= $t())();
  }
}
function Yt(_0x150ad6) {
  _t(_0x150ad6);
  return Reflect.ownKeys(_0x150ad6);
}
function $t(_0x439f6e) {
  const [_0x117f4f, _0x337c05] = j(_0x439f6e, {
    equals: false,
    internal: true
  });
  _0x117f4f.$ = _0x337c05;
  return _0x117f4f;
}
const Jt = {
  get(_0x29ce8d, _0x11c044, _0x359a20) {
    if (_0x11c044 === ze) {
      return _0x29ce8d;
    }
    if (_0x11c044 === fe) {
      return _0x359a20;
    }
    if (_0x11c044 === Ve) {
      _t(_0x29ce8d);
      return _0x359a20;
    }
    const _0x213aec = He(_0x29ce8d);
    const _0x1009f3 = _0x213aec[_0x11c044];
    let _0x771dfc = _0x1009f3 ? _0x1009f3() : _0x29ce8d[_0x11c044];
    if (_0x11c044 === ge || _0x11c044 === "__proto__") {
      return _0x771dfc;
    }
    if (!_0x1009f3) {
      const _0x494104 = Object.getOwnPropertyDescriptor(_0x29ce8d, _0x11c044);
      if (ot() && (typeof _0x771dfc != "function" || _0x29ce8d.hasOwnProperty(_0x11c044)) && (!_0x494104 || !_0x494104.get)) {
        _0x771dfc = Ue(_0x213aec, _0x11c044, _0x771dfc)();
      }
    }
    if (Ie(_0x771dfc)) {
      return at(_0x771dfc);
    } else {
      return _0x771dfc;
    }
  },
  has(_0x25c140, _0x59917d) {
    if (_0x59917d === ze || _0x59917d === fe || _0x59917d === Ve || _0x59917d === ge || _0x59917d === "__proto__") {
      return true;
    } else {
      this.get(_0x25c140, _0x59917d, _0x25c140);
      return _0x59917d in _0x25c140;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Yt,
  getOwnPropertyDescriptor: Qt
};
function Ee(_0x44b270, _0x30cb7f, _0x1d18ec, _0x421883 = false) {
  if (!_0x421883 && _0x44b270[_0x30cb7f] === _0x1d18ec) {
    return;
  }
  const _0x4da6b4 = _0x44b270[_0x30cb7f];
  const _0x340282 = _0x44b270.length;
  if (_0x1d18ec === undefined) {
    delete _0x44b270[_0x30cb7f];
  } else {
    _0x44b270[_0x30cb7f] = _0x1d18ec;
  }
  let _0x18ee0 = He(_0x44b270);
  let _0x2679dc;
  if (_0x2679dc = Ue(_0x18ee0, _0x30cb7f, _0x4da6b4)) {
    _0x2679dc.$(() => _0x1d18ec);
  }
  if (Array.isArray(_0x44b270) && _0x44b270.length !== _0x340282) {
    for (let _0x57198e = _0x44b270.length; _0x57198e < _0x340282; _0x57198e++) {
      if (_0x2679dc = _0x18ee0[_0x57198e]) {
        _0x2679dc.$();
      }
    }
    if (_0x2679dc = Ue(_0x18ee0, "length", _0x340282)) {
      _0x2679dc.$(_0x44b270.length);
    }
  }
  if (_0x2679dc = _0x18ee0._) {
    _0x2679dc.$();
  }
}
function yt(_0x52e414, _0x65ce5c) {
  const _0xed0aa5 = Object.keys(_0x65ce5c);
  for (let _0x17b49e = 0; _0x17b49e < _0xed0aa5.length; _0x17b49e += 1) {
    const _0x12e8fd = _0xed0aa5[_0x17b49e];
    Ee(_0x52e414, _0x12e8fd, _0x65ce5c[_0x12e8fd]);
  }
}
function Zt(_0x4a707d, _0x5b988c) {
  if (typeof _0x5b988c == "function") {
    _0x5b988c = _0x5b988c(_0x4a707d);
  }
  _0x5b988c = he(_0x5b988c);
  if (Array.isArray(_0x5b988c)) {
    if (_0x4a707d === _0x5b988c) {
      return;
    }
    let _0xac3a3b = 0;
    let _0x217223 = _0x5b988c.length;
    for (; _0xac3a3b < _0x217223; _0xac3a3b++) {
      const _0x60b7d5 = _0x5b988c[_0xac3a3b];
      if (_0x4a707d[_0xac3a3b] !== _0x60b7d5) {
        Ee(_0x4a707d, _0xac3a3b, _0x60b7d5);
      }
    }
    Ee(_0x4a707d, "length", _0x217223);
  } else {
    yt(_0x4a707d, _0x5b988c);
  }
}
function ye(_0x1efc31, _0x357648, _0xa8891b = []) {
  let _0x520526;
  let _0x16d4a6 = _0x1efc31;
  if (_0x357648.length > 1) {
    _0x520526 = _0x357648.shift();
    const _0x5e8365 = typeof _0x520526;
    const _0x1b03f9 = Array.isArray(_0x1efc31);
    if (Array.isArray(_0x520526)) {
      for (let _0x48ecc2 = 0; _0x48ecc2 < _0x520526.length; _0x48ecc2++) {
        ye(_0x1efc31, [_0x520526[_0x48ecc2]].concat(_0x357648), _0xa8891b);
      }
      return;
    } else if (_0x1b03f9 && _0x5e8365 === "function") {
      for (let _0xa16ed8 = 0; _0xa16ed8 < _0x1efc31.length; _0xa16ed8++) {
        if (_0x520526(_0x1efc31[_0xa16ed8], _0xa16ed8)) {
          ye(_0x1efc31, [_0xa16ed8].concat(_0x357648), _0xa8891b);
        }
      }
      return;
    } else if (_0x1b03f9 && _0x5e8365 === "object") {
      const {
        from: _0xc3810 = 0,
        to: _0xbd462a = _0x1efc31.length - 1,
        by: _0x5c3ac3 = 1
      } = _0x520526;
      for (let _0x2bd249 = _0xc3810; _0x2bd249 <= _0xbd462a; _0x2bd249 += _0x5c3ac3) {
        ye(_0x1efc31, [_0x2bd249].concat(_0x357648), _0xa8891b);
      }
      return;
    } else if (_0x357648.length > 1) {
      ye(_0x1efc31[_0x520526], _0x357648, [_0x520526].concat(_0xa8891b));
      return;
    }
    _0x16d4a6 = _0x1efc31[_0x520526];
    _0xa8891b = [_0x520526].concat(_0xa8891b);
  }
  let _0x36e54a = _0x357648[0];
  if ((typeof _0x36e54a != "function" || !(_0x36e54a = _0x36e54a(_0x16d4a6, _0xa8891b), _0x36e54a === _0x16d4a6)) && (_0x520526 !== undefined || _0x36e54a != null)) {
    _0x36e54a = he(_0x36e54a);
    if (_0x520526 === undefined || Ie(_0x16d4a6) && Ie(_0x36e54a) && !Array.isArray(_0x36e54a)) {
      yt(_0x16d4a6, _0x36e54a);
    } else {
      Ee(_0x1efc31, _0x520526, _0x36e54a);
    }
  }
}
function en(...[_0x3c46ae, _0x1edf78]) {
  const _0x2e128d = he(_0x3c46ae || {});
  const _0x1a8642 = Array.isArray(_0x2e128d);
  const _0x4dc36b = at(_0x2e128d);
  function _0x50e246(..._0x30a153) {
    xt(() => {
      if (_0x1a8642 && _0x30a153.length === 1) {
        Zt(_0x2e128d, _0x30a153[0]);
      } else {
        ye(_0x2e128d, _0x30a153);
      }
    });
  }
  return [_0x4dc36b, _0x50e246];
}
const Ze = {
  show: false,
  values: [],
  sections: [],
  importantCosts: [],
  importantRevenue: [],
  budgets: [],
  refreshTotal: false,
  revenue: 0,
  costs: 0,
  netRevenue: 0,
  budgetCosts: [],
  revenueDays: 7,
  revenueDayCycle: [7, 14, 30, 60, 90],
  loaded: false,
  region: "los-santos"
};
const [tn, le] = Xt(() => {
  const _0x12e85f = Ze;
  const [_0x45c0c0, _0x12bb3b] = en(_0x12e85f);
  return {
    state: _0x45c0c0,
    setState: _0x12bb3b
  };
}, {
  state: Ze,
  setState: () => {}
});
const xe = (_0x233b92, _0x429c3f, _0x18f831, _0x114dda, _0x3b96dd, _0x37cfd9 = true) => {
  const _0x20b785 = (_0x233b92 - _0x429c3f) * (_0x3b96dd - _0x114dda) / (_0x18f831 - _0x429c3f) + _0x114dda;
  if (_0x37cfd9) {
    return Math.min(Math.max(_0x20b785, _0x114dda), _0x3b96dd);
  } else {
    return _0x20b785;
  }
};
const se = _0x3c375f => _0x3c375f ? _0x3c375f.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
}) : "$0";
const gt = _0x4257a9 => _0x4257a9 ? _0x4257a9.toLocaleString("en-US", {
  maximumFractionDigits: 0
}) : "0";
const ht = _0x535a07 => {
  const {
    state: _0x589f32
  } = le();
  return _0x589f32.values?.find(_0x300527 => _0x300527.id === _0x535a07 && _0x300527.region === _0x589f32.region)?.value ?? _0x589f32.budgets?.find(_0x45e6c9 => _0x45e6c9.id === _0x535a07)?.default ?? 0;
};
const Ct = _0x5ebd30 => {
  const {
    state: _0x10adfa
  } = le();
  return _0x10adfa.budgetCosts.find(_0x5d054c => _0x5d054c.id === _0x5ebd30 && _0x5d054c.region === _0x10adfa.region)?.total ?? 0;
};
const Ke = (_0x8f1e32, _0xd6b19c) => {
  const {
    state: _0x69ae9b
  } = le();
  const _0x16f191 = Math.round(_0xd6b19c * 100) / 100;
  _0x33f2a7.execute("budgetValueChanged", _0x69ae9b.region, _0x8f1e32, _0x16f191);
};
const nn = "_main_yz60n_1";
const on = "_icon_yz60n_19";
const rn = "_tooltip_yz60n_26";
const Le = {
  main: nn,
  icon: on,
  tooltip: rn
};
const sn = H("<div><span>info");
const ln = H("<div><p>");
const cn = H("<span>");
const un = H("<br>");
const ue = _0x141824 => {
  const {
    tooltip: _0x63a01d
  } = _0x141824;
  const [_0x168844, _0x25776c] = j(null);
  const [_0xb7eef4, _0x254578] = j(false);
  const _0x5ea25f = () => {
    const _0x4765ef = _0x168844();
    if (!_0x4765ef) {
      return {
        x: 0,
        y: 0
      };
    }
    const _0x40ec6b = _0x4765ef.getBoundingClientRect();
    return {
      x: _0x40ec6b.x + _0x40ec6b.width / 2,
      y: _0x40ec6b.y
    };
  };
  return (() => {
    const _0x359b1a = sn();
    const _0x95da2d = _0x359b1a.firstChild;
    ve(_0x25776c, _0x359b1a);
    _0x359b1a.addEventListener("mouseleave", () => _0x254578(false));
    _0x359b1a.addEventListener("mouseenter", () => _0x254578(true));
    g(_0x359b1a, (() => {
      const _0x64ec70 = F(() => !!_0xb7eef4());
      return () => _0x64ec70() && (() => {
        const _0x52cc66 = ln();
        const _0x596215 = _0x52cc66.firstChild;
        g(_0x596215, () => _0x63a01d.split("\n").map((_0xbfc629, _0x1525ea) => (() => {
          const _0x2b8b1b = cn();
          g(_0x2b8b1b, _0xbfc629, null);
          g(_0x2b8b1b, (() => {
            const _0x2c02dc = F(() => _0x1525ea !== _0x63a01d.split("\n").length - 1);
            return () => _0x2c02dc() && un();
          })(), null);
          return _0x2b8b1b;
        })()));
        U(_0x312562 => {
          const _0x2f139b = Le.tooltip;
          const _0x2816ce = _0x5ea25f().y - 10 + "px";
          const _0x36f7d1 = _0x5ea25f().x + "px";
          if (_0x2f139b !== _0x312562._v$3) {
            u(_0x52cc66, _0x312562._v$3 = _0x2f139b);
          }
          if (_0x2816ce !== _0x312562._v$4) {
            if ((_0x312562._v$4 = _0x2816ce) != null) {
              _0x52cc66.style.setProperty("top", _0x2816ce);
            } else {
              _0x52cc66.style.removeProperty("top");
            }
          }
          if (_0x36f7d1 !== _0x312562._v$5) {
            if ((_0x312562._v$5 = _0x36f7d1) != null) {
              _0x52cc66.style.setProperty("left", _0x36f7d1);
            } else {
              _0x52cc66.style.removeProperty("left");
            }
          }
          return _0x312562;
        }, {
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined
        });
        return _0x52cc66;
      })();
    })(), null);
    U(_0x3c83da => {
      const _0xff0e77 = Le.main;
      const _0x37037b = Le.icon + " material-symbols-rounded";
      if (_0xff0e77 !== _0x3c83da._v$) {
        u(_0x359b1a, _0x3c83da._v$ = _0xff0e77);
      }
      if (_0x37037b !== _0x3c83da._v$2) {
        u(_0x95da2d, _0x3c83da._v$2 = _0x37037b);
      }
      return _0x3c83da;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x359b1a;
  })();
};
const dn = "_main_nvdy3_1";
const fn = "_backgroundColor_nvdy3_11";
const vn = "_residential_nvdy3_22";
const an = "_commercial_nvdy3_25";
const _n = "_industrial_nvdy3_28";
const $n = "_office_nvdy3_31";
const yn = "_utility_nvdy3_34";
const gn = "_vacant_nvdy3_37";
const hn = "_textContainer_nvdy3_40";
const Cn = "_infoContainer_nvdy3_49";
const pn = "_costsContainer_nvdy3_56";
const xn = "_header_nvdy3_63";
const mn = "_description_nvdy3_64";
const bn = "_costsTitle_nvdy3_65";
const Sn = "_costsValue_nvdy3_66";
const wn = "_inputContainer_nvdy3_107";
const kn = "_tooltipIcon_nvdy3_117";
const An = "_textInputContainer_nvdy3_121";
const Pn = "_textInput_nvdy3_121";
const Rn = "_tooltip_nvdy3_117";
const In = "_icon_nvdy3_161";
const En = "_popup_nvdy3_167";
const ne = {
  main: dn,
  backgroundColor: fn,
  residential: vn,
  commercial: an,
  industrial: _n,
  office: $n,
  utility: yn,
  vacant: gn,
  textContainer: hn,
  infoContainer: Cn,
  costsContainer: pn,
  header: xn,
  description: mn,
  costsTitle: bn,
  costsValue: Sn,
  inputContainer: wn,
  tooltipIcon: kn,
  textInputContainer: An,
  textInput: Pn,
  tooltip: Rn,
  icon: In,
  popup: En
};
const Bn = H("<div><div></div><div><div><div></div><div></div></div></div><div><div><div></div></div><div><span>percent");
const Tn = H("<div><p>Approx. <strong>%</strong> of the total costs this period.");
const Dn = _0x5727cf => {
  const {
    state: _0x1856b8
  } = le();
  const {
    data: {
      id: _0x2f0cb0,
      name: _0x2d9ee1,
      description: _0x5b9e9f,
      size: _0x5b9501,
      tooltip: _0x1a8a77
    }
  } = _0x5727cf;
  const [_0x4dabfe, _0x1a99b2] = j(null);
  const [_0x16fa3f, _0x180ae6] = j(false);
  const [_0x3d8a74] = j(Ct(_0x2f0cb0));
  const _0x31f07d = () => {
    const _0x54fb91 = _0x4dabfe();
    if (!_0x54fb91) {
      return {
        x: 0,
        y: 0
      };
    }
    const _0x1427de = _0x54fb91.getBoundingClientRect();
    return {
      x: _0x1427de.x + _0x1427de.width / 2,
      y: _0x1427de.y
    };
  };
  return (() => {
    const _0x3701d8 = Bn();
    const _0x22a646 = _0x3701d8.firstChild;
    const _0x43e4fd = _0x22a646.nextSibling;
    const _0x11564e = _0x43e4fd.firstChild;
    const _0x2e8610 = _0x11564e.firstChild;
    const _0x4b8399 = _0x2e8610.nextSibling;
    const _0xbb0039 = _0x43e4fd.nextSibling;
    const _0x5174f6 = _0xbb0039.firstChild;
    const _0x1461fc = _0x5174f6.firstChild;
    const _0x4774ec = _0x5174f6.nextSibling;
    const _0x47403f = _0x4774ec.firstChild;
    if ("calc(" + (_0x5b9501 ?? 50) + "% - 20px)" != null) {
      _0x3701d8.style.setProperty("width", "calc(" + (_0x5b9501 ?? 50) + "% - 20px)");
    } else {
      _0x3701d8.style.removeProperty("width");
    }
    g(_0x2e8610, _0x2d9ee1);
    g(_0x4b8399, _0x5b9e9f);
    g(_0xbb0039, (() => {
      const _0x57f1ec = F(() => !!_0x1a8a77 && !!_0x1a8a77.left);
      return () => _0x57f1ec() && N(ue, {
        get tooltip() {
          if (typeof _0x1a8a77.left == "object") {
            return _0x1a8a77.left[_0x1856b8.region];
          } else {
            return _0x1a8a77.left;
          }
        }
      });
    })(), _0x5174f6);
    g(_0x1461fc, () => se(_0x3d8a74()));
    ve(_0x1a99b2, _0x4774ec);
    _0x4774ec.addEventListener("mouseleave", () => _0x180ae6(false));
    _0x4774ec.addEventListener("mouseenter", () => _0x180ae6(true));
    g(_0x4774ec, (() => {
      const _0x5e9dc2 = F(() => !!_0x16fa3f());
      return () => _0x5e9dc2() && (() => {
        const _0x295ba2 = Tn();
        const _0x2cf94c = _0x295ba2.firstChild;
        const _0x2f3279 = _0x2cf94c.firstChild;
        const _0x1d6f2d = _0x2f3279.nextSibling;
        const _0x86cef5 = _0x1d6f2d.firstChild;
        g(_0x1d6f2d, () => gt(Math.min(100, Math.max(0, _0x3d8a74() / _0x1856b8.costs * 100))), _0x86cef5);
        U(_0x4ca6f0 => {
          const _0x32cbb2 = ne.popup;
          const _0x572ece = _0x31f07d().y - 10 + "px";
          const _0x4c6f26 = _0x31f07d().x + "px";
          if (_0x32cbb2 !== _0x4ca6f0._v$12) {
            u(_0x295ba2, _0x4ca6f0._v$12 = _0x32cbb2);
          }
          if (_0x572ece !== _0x4ca6f0._v$13) {
            if ((_0x4ca6f0._v$13 = _0x572ece) != null) {
              _0x295ba2.style.setProperty("top", _0x572ece);
            } else {
              _0x295ba2.style.removeProperty("top");
            }
          }
          if (_0x4c6f26 !== _0x4ca6f0._v$14) {
            if ((_0x4ca6f0._v$14 = _0x4c6f26) != null) {
              _0x295ba2.style.setProperty("left", _0x4c6f26);
            } else {
              _0x295ba2.style.removeProperty("left");
            }
          }
          return _0x4ca6f0;
        }, {
          _v$12: undefined,
          _v$13: undefined,
          _v$14: undefined
        });
        return _0x295ba2;
      })();
    })(), null);
    g(_0xbb0039, (() => {
      const _0x32c884 = F(() => !!_0x1a8a77 && !!_0x1a8a77.right);
      return () => _0x32c884() && N(ue, {
        get tooltip() {
          if (typeof _0x1a8a77.right == "object") {
            return _0x1a8a77.right[_0x1856b8.region];
          } else {
            return _0x1a8a77.right;
          }
        }
      });
    })(), null);
    U(_0x51d4d7 => {
      const _0x118d95 = ne.main;
      const _0x1ff4a2 = ne.backgroundColor + " " + (_0x3d8a74() / _0x1856b8.costs >= 0.1 ? "bg-red-900" : "");
      const _0x208ba6 = ne.textContainer;
      const _0x1ef478 = ne.infoContainer;
      const _0xa1d1f1 = ne.header;
      const _0x471baf = ne.description;
      const _0x59005c = ne.inputContainer;
      const _0x1f7186 = ne.textInputContainer;
      const _0xf28233 = ne.textInput;
      const _0x51fc9a = ne.tooltip;
      const _0x3fa0d6 = ne.icon + " material-symbols-rounded";
      if (_0x118d95 !== _0x51d4d7._v$) {
        u(_0x3701d8, _0x51d4d7._v$ = _0x118d95);
      }
      if (_0x1ff4a2 !== _0x51d4d7._v$2) {
        u(_0x22a646, _0x51d4d7._v$2 = _0x1ff4a2);
      }
      if (_0x208ba6 !== _0x51d4d7._v$3) {
        u(_0x43e4fd, _0x51d4d7._v$3 = _0x208ba6);
      }
      if (_0x1ef478 !== _0x51d4d7._v$4) {
        u(_0x11564e, _0x51d4d7._v$4 = _0x1ef478);
      }
      if (_0xa1d1f1 !== _0x51d4d7._v$5) {
        u(_0x2e8610, _0x51d4d7._v$5 = _0xa1d1f1);
      }
      if (_0x471baf !== _0x51d4d7._v$6) {
        u(_0x4b8399, _0x51d4d7._v$6 = _0x471baf);
      }
      if (_0x59005c !== _0x51d4d7._v$7) {
        u(_0xbb0039, _0x51d4d7._v$7 = _0x59005c);
      }
      if (_0x1f7186 !== _0x51d4d7._v$8) {
        u(_0x5174f6, _0x51d4d7._v$8 = _0x1f7186);
      }
      if (_0xf28233 !== _0x51d4d7._v$9) {
        u(_0x1461fc, _0x51d4d7._v$9 = _0xf28233);
      }
      if (_0x51fc9a !== _0x51d4d7._v$10) {
        u(_0x4774ec, _0x51d4d7._v$10 = _0x51fc9a);
      }
      if (_0x3fa0d6 !== _0x51d4d7._v$11) {
        u(_0x47403f, _0x51d4d7._v$11 = _0x3fa0d6);
      }
      return _0x51d4d7;
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
    return _0x3701d8;
  })();
};
const Ln = "_main_dyh2x_1";
const Nn = "_backgroundColor_dyh2x_11";
const On = "_residential_dyh2x_22";
const Vn = "_commercial_dyh2x_25";
const jn = "_industrial_dyh2x_28";
const Fn = "_office_dyh2x_31";
const Mn = "_utility_dyh2x_34";
const zn = "_vacant_dyh2x_37";
const Un = "_textContainer_dyh2x_40";
const Kn = "_infoContainer_dyh2x_49";
const qn = "_costsContainer_dyh2x_56";
const Hn = "_header_dyh2x_63";
const Wn = "_description_dyh2x_64";
const Gn = "_costsTitle_dyh2x_65";
const Xn = "_costsValue_dyh2x_66";
const Qn = "_inputContainer_dyh2x_107";
const Yn = "_tooltipIcon_dyh2x_117";
const Jn = "_textInputContainer_dyh2x_121";
const Zn = "_textInput_dyh2x_121";
const eo = "_tooltip_dyh2x_117";
const Z = {
  main: Ln,
  backgroundColor: Nn,
  residential: On,
  commercial: Vn,
  industrial: jn,
  office: Fn,
  utility: Mn,
  vacant: zn,
  textContainer: Un,
  infoContainer: Kn,
  costsContainer: qn,
  header: Hn,
  description: Wn,
  costsTitle: Gn,
  costsValue: Xn,
  inputContainer: Qn,
  tooltipIcon: Yn,
  textInputContainer: Jn,
  textInput: Zn,
  tooltip: eo
};
const to = "_main_ix0d6_1";
const no = "_icon_ix0d6_19";
const oo = "_tooltip_ix0d6_26";
const Ne = {
  main: to,
  icon: no,
  tooltip: oo
};
const io = H("<div><span>save");
const ro = H("<div><p>");
const so = _0x53e816 => {
  const {
    tooltip: _0x394ee9
  } = _0x53e816;
  const [_0x476fb0, _0x1c2f4e] = j(null);
  const [_0x516151, _0x2d0487] = j(false);
  const _0x3aa964 = () => {
    const _0x230052 = _0x476fb0();
    if (!_0x230052) {
      return {
        x: 0,
        y: 0
      };
    }
    const _0x49c61e = _0x230052.getBoundingClientRect();
    return {
      x: _0x49c61e.x + _0x49c61e.width / 2,
      y: _0x49c61e.y
    };
  };
  return (() => {
    const _0x262624 = io();
    const _0x45a103 = _0x262624.firstChild;
    ve(_0x1c2f4e, _0x262624);
    vt(_0x262624, "click", _0x53e816.onClick, true);
    _0x262624.addEventListener("mouseleave", () => _0x2d0487(false));
    _0x262624.addEventListener("mouseenter", () => _0x2d0487(true));
    g(_0x262624, (() => {
      const _0xa4f36e = F(() => !!_0x516151());
      return () => _0xa4f36e() && (() => {
        const _0x573d81 = ro();
        const _0x48476d = _0x573d81.firstChild;
        g(_0x48476d, _0x394ee9);
        U(_0x53842a => {
          const _0x1f9191 = Ne.tooltip;
          const _0x535773 = _0x3aa964().y - 10 + "px";
          const _0x404805 = _0x3aa964().x + "px";
          if (_0x1f9191 !== _0x53842a._v$3) {
            u(_0x573d81, _0x53842a._v$3 = _0x1f9191);
          }
          if (_0x535773 !== _0x53842a._v$4) {
            if ((_0x53842a._v$4 = _0x535773) != null) {
              _0x573d81.style.setProperty("top", _0x535773);
            } else {
              _0x573d81.style.removeProperty("top");
            }
          }
          if (_0x404805 !== _0x53842a._v$5) {
            if ((_0x53842a._v$5 = _0x404805) != null) {
              _0x573d81.style.setProperty("left", _0x404805);
            } else {
              _0x573d81.style.removeProperty("left");
            }
          }
          return _0x53842a;
        }, {
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined
        });
        return _0x573d81;
      })();
    })(), null);
    U(_0x555431 => {
      const _0x5b381b = Ne.main;
      const _0x14ae8c = Ne.icon + " material-symbols-rounded";
      if (_0x5b381b !== _0x555431._v$) {
        u(_0x262624, _0x555431._v$ = _0x5b381b);
      }
      if (_0x14ae8c !== _0x555431._v$2) {
        u(_0x45a103, _0x555431._v$2 = _0x14ae8c);
      }
      return _0x555431;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x262624;
  })();
};
pe(["click"]);
const lo = H("<div><div></div><div><div><div></div><div></div></div></div><div><div><input type=\"number\">");
const co = H("<div><div>Prev. <!>-Day </div><div>");
const uo = H("<div><p> - ");
const fo = _0x3d2db4 => {
  const {
    state: _0x1740bd
  } = le();
  const {
    data: {
      id: _0x3a98be,
      name: _0x3012e1,
      range: _0x2338a1,
      description: _0x1ae6d0,
      tooltip: _0x2f1833,
      size: _0x195f9f,
      visualOffset: _0x2d3902,
      color: _0x1d217b,
      type: _0x2375b0
    }
  } = _0x3d2db4;
  const [_0x3a254a, _0x39c62a] = j(null);
  const [_0x324193, _0x58c643] = j(false);
  const [_0x3250f8, _0x5bbc3f] = j(ht(_0x3a98be));
  const [_0x261db7, _0x393b90] = j(_0x1740bd.budgetCosts.find(_0x1c370d => _0x1c370d.id === _0x3a98be && _0x1c370d.region === _0x1740bd.region));
  const _0x30bca5 = _0x1d217b ? Z[_0x1d217b] : "";
  const _0xbb060a = () => {
    const _0x4841dd = _0x3a254a();
    if (!_0x4841dd) {
      return {
        x: 0,
        y: 0
      };
    }
    const _0x1632b2 = _0x4841dd.getBoundingClientRect();
    return {
      x: _0x1632b2.x + _0x1632b2.width / 2,
      y: _0x1632b2.y
    };
  };
  const _0xc14cba = _0x330613 => {
    _0x5bbc3f(Number(_0x330613.target.value));
  };
  const _0x140955 = () => {
    const _0x3ff5af = _0x3250f8();
    let _0x2f821a = Number(_0x3ff5af);
    if (isNaN(_0x2f821a)) {
      _0x2f821a = _0x2338a1[0];
    }
    _0x2f821a = Math.max(_0x2338a1[0], Math.min(_0x2338a1[1], _0x2f821a));
    _0x5bbc3f(_0x2f821a);
    Ke(_0x3a98be, _0x2f821a);
  };
  ke(() => {
    _0x393b90(_0x1740bd.budgetCosts.find(_0x31360e => _0x31360e.id === _0x3a98be && _0x31360e.region === _0x1740bd.region));
  });
  return (() => {
    const _0x500af1 = lo();
    const _0x23f30a = _0x500af1.firstChild;
    const _0x503a27 = _0x23f30a.nextSibling;
    const _0x38884e = _0x503a27.firstChild;
    const _0x2a540c = _0x38884e.firstChild;
    const _0x29dae6 = _0x2a540c.nextSibling;
    const _0x5b8c66 = _0x503a27.nextSibling;
    const _0x4d6454 = _0x5b8c66.firstChild;
    const _0x1293d9 = _0x4d6454.firstChild;
    if ("calc(" + (_0x195f9f ?? 50) + "% - 20px)" != null) {
      _0x500af1.style.setProperty("width", "calc(" + (_0x195f9f ?? 50) + "% - 20px)");
    } else {
      _0x500af1.style.removeProperty("width");
    }
    g(_0x2a540c, _0x3012e1);
    g(_0x29dae6, () => _0x1ae6d0 && typeof _0x1ae6d0 == "object" ? _0x1ae6d0[_0x1740bd.region] : _0x1ae6d0);
    g(_0x503a27, (() => {
      const _0x563d27 = F(() => !!_0x261db7());
      return () => _0x563d27() && (() => {
        const _0x30bf39 = co();
        const _0x2672a0 = _0x30bf39.firstChild;
        const _0x4cf295 = _0x2672a0.firstChild;
        const _0x45d122 = _0x4cf295.nextSibling;
        _0x45d122.nextSibling;
        const _0x4aab19 = _0x2672a0.nextSibling;
        g(_0x2672a0, () => _0x1740bd.revenueDays, _0x45d122);
        g(_0x2672a0, _0x2375b0 === "cost" ? "Cost" : "Rev.", null);
        g(_0x4aab19, () => se(_0x261db7()?.total) ?? "Unknown");
        U(_0x19ce71 => {
          const _0x4f8f6a = Z.costsContainer;
          const _0x576123 = Z.costsTitle;
          const _0xe609dd = Z.costsValue;
          if (_0x4f8f6a !== _0x19ce71._v$10) {
            u(_0x30bf39, _0x19ce71._v$10 = _0x4f8f6a);
          }
          if (_0x576123 !== _0x19ce71._v$11) {
            u(_0x2672a0, _0x19ce71._v$11 = _0x576123);
          }
          if (_0xe609dd !== _0x19ce71._v$12) {
            u(_0x4aab19, _0x19ce71._v$12 = _0xe609dd);
          }
          return _0x19ce71;
        }, {
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined
        });
        return _0x30bf39;
      })();
    })(), null);
    g(_0x5b8c66, (() => {
      const _0x3bdefe = F(() => !!_0x2f1833 && !!_0x2f1833.left);
      return () => _0x3bdefe() && N(ue, {
        get tooltip() {
          if (typeof _0x2f1833.left == "object") {
            return _0x2f1833.left[_0x1740bd.region];
          } else {
            return _0x2f1833.left;
          }
        }
      });
    })(), _0x4d6454);
    ve(_0x39c62a, _0x1293d9);
    _0x1293d9.$$keyup = _0x58ba14 => _0xc14cba(_0x58ba14);
    _0x1293d9.addEventListener("mouseleave", () => _0x58c643(false));
    _0x1293d9.addEventListener("mouseenter", () => _0x58c643(true));
    g(_0x5b8c66, N(so, {
      tooltip: "Save Salary",
      onClick: () => _0x140955()
    }), null);
    g(_0x5b8c66, (() => {
      const _0x27e4e2 = F(() => !!_0x2f1833 && !!_0x2f1833.right);
      return () => _0x27e4e2() && N(ue, {
        get tooltip() {
          if (typeof _0x2f1833.right == "object") {
            return _0x2f1833.right[_0x1740bd.region];
          } else {
            return _0x2f1833.right;
          }
        }
      });
    })(), null);
    g(_0x500af1, (() => {
      const _0x5a7290 = F(() => !!_0x324193());
      return () => _0x5a7290() && (() => {
        const _0x403bfe = uo();
        const _0x1f41e5 = _0x403bfe.firstChild;
        const _0x4443d1 = _0x1f41e5.firstChild;
        g(_0x1f41e5, () => se(_0x2338a1[0]), _0x4443d1);
        g(_0x1f41e5, () => se(_0x2338a1[1]), null);
        U(_0x525c13 => {
          const _0xb2473a = Z.tooltip;
          const _0x47a914 = _0xbb060a().y - 15 + "px";
          const _0x247c88 = _0xbb060a().x + "px";
          if (_0xb2473a !== _0x525c13._v$13) {
            u(_0x403bfe, _0x525c13._v$13 = _0xb2473a);
          }
          if (_0x47a914 !== _0x525c13._v$14) {
            if ((_0x525c13._v$14 = _0x47a914) != null) {
              _0x403bfe.style.setProperty("top", _0x47a914);
            } else {
              _0x403bfe.style.removeProperty("top");
            }
          }
          if (_0x247c88 !== _0x525c13._v$15) {
            if ((_0x525c13._v$15 = _0x247c88) != null) {
              _0x403bfe.style.setProperty("left", _0x247c88);
            } else {
              _0x403bfe.style.removeProperty("left");
            }
          }
          return _0x525c13;
        }, {
          _v$13: undefined,
          _v$14: undefined,
          _v$15: undefined
        });
        return _0x403bfe;
      })();
    })(), null);
    U(_0x412609 => {
      const _0x508335 = Z.main;
      const _0x2093d8 = Z.backgroundColor + " " + _0x30bca5;
      const _0x3e0d02 = Z.textContainer;
      const _0x16fe3e = Z.infoContainer;
      const _0x5492cb = Z.header;
      const _0x230793 = Z.description;
      const _0x30c983 = Z.inputContainer;
      const _0x1eac54 = Z.textInputContainer;
      const _0x34a147 = Z.textInput;
      if (_0x508335 !== _0x412609._v$) {
        u(_0x500af1, _0x412609._v$ = _0x508335);
      }
      if (_0x2093d8 !== _0x412609._v$2) {
        u(_0x23f30a, _0x412609._v$2 = _0x2093d8);
      }
      if (_0x3e0d02 !== _0x412609._v$3) {
        u(_0x503a27, _0x412609._v$3 = _0x3e0d02);
      }
      if (_0x16fe3e !== _0x412609._v$4) {
        u(_0x38884e, _0x412609._v$4 = _0x16fe3e);
      }
      if (_0x5492cb !== _0x412609._v$5) {
        u(_0x2a540c, _0x412609._v$5 = _0x5492cb);
      }
      if (_0x230793 !== _0x412609._v$6) {
        u(_0x29dae6, _0x412609._v$6 = _0x230793);
      }
      if (_0x30c983 !== _0x412609._v$7) {
        u(_0x5b8c66, _0x412609._v$7 = _0x30c983);
      }
      if (_0x1eac54 !== _0x412609._v$8) {
        u(_0x4d6454, _0x412609._v$8 = _0x1eac54);
      }
      if (_0x34a147 !== _0x412609._v$9) {
        u(_0x1293d9, _0x412609._v$9 = _0x34a147);
      }
      return _0x412609;
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
    U(() => _0x1293d9.value = _0x3250f8());
    return _0x500af1;
  })();
};
pe(["keyup"]);
const vo = "_main_nvdy3_1";
const ao = "_backgroundColor_nvdy3_11";
const _o = "_residential_nvdy3_22";
const $o = "_commercial_nvdy3_25";
const yo = "_industrial_nvdy3_28";
const go = "_office_nvdy3_31";
const ho = "_utility_nvdy3_34";
const Co = "_vacant_nvdy3_37";
const po = "_textContainer_nvdy3_40";
const xo = "_infoContainer_nvdy3_49";
const mo = "_costsContainer_nvdy3_56";
const bo = "_header_nvdy3_63";
const So = "_description_nvdy3_64";
const wo = "_costsTitle_nvdy3_65";
const ko = "_costsValue_nvdy3_66";
const Ao = "_inputContainer_nvdy3_107";
const Po = "_tooltipIcon_nvdy3_117";
const Ro = "_textInputContainer_nvdy3_121";
const Io = "_textInput_nvdy3_121";
const Eo = "_tooltip_nvdy3_117";
const Bo = "_icon_nvdy3_161";
const To = "_popup_nvdy3_167";
const te = {
  main: vo,
  backgroundColor: ao,
  residential: _o,
  commercial: $o,
  industrial: yo,
  office: go,
  utility: ho,
  vacant: Co,
  textContainer: po,
  infoContainer: xo,
  costsContainer: mo,
  header: bo,
  description: So,
  costsTitle: wo,
  costsValue: ko,
  inputContainer: Ao,
  tooltipIcon: Po,
  textInputContainer: Ro,
  textInput: Io,
  tooltip: Eo,
  icon: Bo,
  popup: To
};
const Do = H("<div><div></div><div><div><div></div><div></div></div></div><div><div><div></div></div><div><span>percent");
const Lo = H("<div><p>Approx. <strong>%</strong> of the total revenue this period.");
const No = _0x1e28bd => {
  const {
    state: _0x4a287a
  } = le();
  const {
    data: {
      id: _0x207dbe,
      name: _0x28005b,
      description: _0x4353be,
      size: _0x34e0a7,
      color: _0x5cbf71,
      tooltip: _0x6d4113
    }
  } = _0x1e28bd;
  const [_0x1ce534, _0x44aea3] = j(null);
  const [_0xfca623, _0x5c01d9] = j(false);
  const [_0x10ca0a] = j(Ct(_0x207dbe));
  const _0x2961a9 = _0x5cbf71 ? te[_0x5cbf71] : "";
  const _0x588e27 = () => {
    const _0x3f5bb7 = _0x1ce534();
    if (!_0x3f5bb7) {
      return {
        x: 0,
        y: 0
      };
    }
    const _0x46f987 = _0x3f5bb7.getBoundingClientRect();
    return {
      x: _0x46f987.x + _0x46f987.width / 2,
      y: _0x46f987.y
    };
  };
  return (() => {
    const _0x3fdb5c = Do();
    const _0x4f5254 = _0x3fdb5c.firstChild;
    const _0x26a04f = _0x4f5254.nextSibling;
    const _0x2086c1 = _0x26a04f.firstChild;
    const _0x41ed5b = _0x2086c1.firstChild;
    const _0x42e551 = _0x41ed5b.nextSibling;
    const _0x14b34d = _0x26a04f.nextSibling;
    const _0xf1bb20 = _0x14b34d.firstChild;
    const _0x55e4b6 = _0xf1bb20.firstChild;
    const _0x5bff01 = _0xf1bb20.nextSibling;
    const _0x27fb67 = _0x5bff01.firstChild;
    if ("calc(" + (_0x34e0a7 ?? 50) + "% - 20px)" != null) {
      _0x3fdb5c.style.setProperty("width", "calc(" + (_0x34e0a7 ?? 50) + "% - 20px)");
    } else {
      _0x3fdb5c.style.removeProperty("width");
    }
    g(_0x41ed5b, _0x28005b);
    g(_0x42e551, _0x4353be);
    g(_0x14b34d, (() => {
      const _0x2c16ca = F(() => !!_0x6d4113 && !!_0x6d4113.left);
      return () => _0x2c16ca() && N(ue, {
        get tooltip() {
          if (typeof _0x6d4113.left == "object") {
            return _0x6d4113.left[_0x4a287a.region];
          } else {
            return _0x6d4113.left;
          }
        }
      });
    })(), _0xf1bb20);
    g(_0x55e4b6, () => se(_0x10ca0a()));
    ve(_0x44aea3, _0x5bff01);
    _0x5bff01.addEventListener("mouseleave", () => _0x5c01d9(false));
    _0x5bff01.addEventListener("mouseenter", () => _0x5c01d9(true));
    g(_0x5bff01, (() => {
      const _0x48ecd9 = F(() => !!_0xfca623());
      return () => _0x48ecd9() && (() => {
        const _0x2035e7 = Lo();
        const _0x35c221 = _0x2035e7.firstChild;
        const _0x1143ed = _0x35c221.firstChild;
        const _0x5e66fb = _0x1143ed.nextSibling;
        const _0x5c5672 = _0x5e66fb.firstChild;
        g(_0x5e66fb, () => gt(Math.min(100, Math.max(0, _0x10ca0a() / _0x4a287a.revenue * 100))), _0x5c5672);
        U(_0xcb4dda => {
          const _0x47c31a = te.popup;
          const _0x29bc29 = _0x588e27().y - 10 + "px";
          const _0x24afea = _0x588e27().x + "px";
          if (_0x47c31a !== _0xcb4dda._v$12) {
            u(_0x2035e7, _0xcb4dda._v$12 = _0x47c31a);
          }
          if (_0x29bc29 !== _0xcb4dda._v$13) {
            if ((_0xcb4dda._v$13 = _0x29bc29) != null) {
              _0x2035e7.style.setProperty("top", _0x29bc29);
            } else {
              _0x2035e7.style.removeProperty("top");
            }
          }
          if (_0x24afea !== _0xcb4dda._v$14) {
            if ((_0xcb4dda._v$14 = _0x24afea) != null) {
              _0x2035e7.style.setProperty("left", _0x24afea);
            } else {
              _0x2035e7.style.removeProperty("left");
            }
          }
          return _0xcb4dda;
        }, {
          _v$12: undefined,
          _v$13: undefined,
          _v$14: undefined
        });
        return _0x2035e7;
      })();
    })(), null);
    g(_0x14b34d, (() => {
      const _0x4387e3 = F(() => !!_0x6d4113 && !!_0x6d4113.right);
      return () => _0x4387e3() && N(ue, {
        get tooltip() {
          if (typeof _0x6d4113.right == "object") {
            return _0x6d4113.right[_0x4a287a.region];
          } else {
            return _0x6d4113.right;
          }
        }
      });
    })(), null);
    U(_0x54511d => {
      const _0xd61c66 = te.main;
      const _0x2eccf2 = te.backgroundColor + " " + _0x2961a9;
      const _0x3a37c6 = te.textContainer;
      const _0x7a4439 = te.infoContainer;
      const _0x1ddb95 = te.header;
      const _0x30363f = te.description;
      const _0x36e1a3 = te.inputContainer;
      const _0x4e81b9 = te.textInputContainer;
      const _0x110ee2 = te.textInput;
      const _0x58d730 = te.tooltip;
      const _0x2b6902 = te.icon + " material-symbols-rounded";
      if (_0xd61c66 !== _0x54511d._v$) {
        u(_0x3fdb5c, _0x54511d._v$ = _0xd61c66);
      }
      if (_0x2eccf2 !== _0x54511d._v$2) {
        u(_0x4f5254, _0x54511d._v$2 = _0x2eccf2);
      }
      if (_0x3a37c6 !== _0x54511d._v$3) {
        u(_0x26a04f, _0x54511d._v$3 = _0x3a37c6);
      }
      if (_0x7a4439 !== _0x54511d._v$4) {
        u(_0x2086c1, _0x54511d._v$4 = _0x7a4439);
      }
      if (_0x1ddb95 !== _0x54511d._v$5) {
        u(_0x41ed5b, _0x54511d._v$5 = _0x1ddb95);
      }
      if (_0x30363f !== _0x54511d._v$6) {
        u(_0x42e551, _0x54511d._v$6 = _0x30363f);
      }
      if (_0x36e1a3 !== _0x54511d._v$7) {
        u(_0x14b34d, _0x54511d._v$7 = _0x36e1a3);
      }
      if (_0x4e81b9 !== _0x54511d._v$8) {
        u(_0xf1bb20, _0x54511d._v$8 = _0x4e81b9);
      }
      if (_0x110ee2 !== _0x54511d._v$9) {
        u(_0x55e4b6, _0x54511d._v$9 = _0x110ee2);
      }
      if (_0x58d730 !== _0x54511d._v$10) {
        u(_0x5bff01, _0x54511d._v$10 = _0x58d730);
      }
      if (_0x2b6902 !== _0x54511d._v$11) {
        u(_0x27fb67, _0x54511d._v$11 = _0x2b6902);
      }
      return _0x54511d;
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
    return _0x3fdb5c;
  })();
};
const Oo = "_main_uxy16_1";
const Vo = "_backgroundColor_uxy16_11";
const jo = "_residential_uxy16_22";
const Fo = "_commercial_uxy16_25";
const Mo = "_industrial_uxy16_28";
const zo = "_office_uxy16_31";
const Uo = "_utility_uxy16_34";
const Ko = "_vacant_uxy16_37";
const qo = "_textContainer_uxy16_40";
const Ho = "_infoContainer_uxy16_49";
const Wo = "_costsContainer_uxy16_56";
const Go = "_header_uxy16_63";
const Xo = "_description_uxy16_64";
const Qo = "_costsTitle_uxy16_65";
const Yo = "_costsValue_uxy16_66";
const Jo = "_inputContainer_uxy16_107";
const Zo = "_tooltipIcon_uxy16_117";
const ei = "_rangeContainer_uxy16_121";
const ti = "_range_uxy16_121";
const ni = "_tooltip_uxy16_117";
const ee = {
  main: Oo,
  backgroundColor: Vo,
  residential: jo,
  commercial: Fo,
  industrial: Mo,
  office: zo,
  utility: Uo,
  vacant: Ko,
  textContainer: qo,
  infoContainer: Ho,
  costsContainer: Wo,
  header: Go,
  description: Xo,
  costsTitle: Qo,
  costsValue: Yo,
  inputContainer: Jo,
  tooltipIcon: Zo,
  rangeContainer: ei,
  range: ti,
  tooltip: ni
};
const oi = H("<div><div></div><div><div><div></div><div></div></div></div><div><div><input type=\"range\" min=\"0\" max=\"1\" step=\"0.01\">");
const ii = H("<div><div>Prev. <!>-Day </div><div>");
const ri = H("<p>");
const si = H("<p>%");
const li = H("<div>");
const ci = _0x5942d2 => {
  const {
    state: _0x379fae
  } = le();
  const {
    data: {
      id: _0x252a92,
      name: _0x5c5a2a,
      range: _0x5cb741,
      description: _0x242e5,
      tooltip: _0xea599b,
      size: _0x10dfc7,
      visualOffset: _0x585195,
      color: _0x1afc12,
      type: _0x21a481,
      disabled: _0x4f8ec4
    }
  } = _0x5942d2;
  const [_0x505de9, _0x333d79] = j(null);
  const [_0x55c7e2, _0x117e30] = j(false);
  const [_0x36ed3a, _0x5154a9] = j(xe(ht(_0x252a92), _0x5cb741[0], _0x5cb741[1], 0, 1));
  const [_0x128469, _0x356882] = j(_0x379fae.budgetCosts.find(_0x3170ff => _0x3170ff.id === _0x252a92 && _0x3170ff.region === _0x379fae.region));
  const _0x126e06 = _0x1afc12 ? ee[_0x1afc12] : "";
  const _0x2ee2b0 = () => {
    const _0x3bb15a = _0x505de9();
    if (!_0x3bb15a) {
      return {
        x: 0,
        y: 0,
        percent: 0
      };
    }
    const _0x4c213b = Number(_0x3bb15a.value);
    const _0x47a7fd = _0x3bb15a.min ? Number(_0x3bb15a.min) : 0;
    const _0x5197ac = _0x3bb15a.max ? Number(_0x3bb15a.max) : 100;
    const _0x40cd54 = Number((_0x4c213b - _0x47a7fd) * 100 / (_0x5197ac - _0x47a7fd));
    const _0x3d2f32 = _0x3bb15a.getBoundingClientRect();
    return {
      x: _0x3d2f32.x + _0x3d2f32.width * _0x36ed3a(),
      y: _0x3d2f32.y,
      percent: _0x40cd54
    };
  };
  ke(() => {
    const _0x55a7e7 = _0x505de9();
    if (!_0x55a7e7) {
      return;
    }
    const _0x4864da = _0x36ed3a() * 100;
    _0x55a7e7.style.background = "linear-gradient(to right, #00F8B9 " + _0x4864da + "%, #00000024 " + _0x4864da + "%)";
  });
  ke(() => {
    _0x356882(_0x379fae.budgetCosts.find(_0xa63a2 => _0xa63a2.id === _0x252a92 && _0xa63a2.region === _0x379fae.region));
  });
  return (() => {
    const _0x1d67ff = oi();
    const _0x517075 = _0x1d67ff.firstChild;
    const _0x644a4f = _0x517075.nextSibling;
    const _0x17aa73 = _0x644a4f.firstChild;
    const _0x44e4b4 = _0x17aa73.firstChild;
    const _0x26fa0e = _0x44e4b4.nextSibling;
    const _0x1604db = _0x644a4f.nextSibling;
    const _0x466a65 = _0x1604db.firstChild;
    const _0x50f2d3 = _0x466a65.firstChild;
    if ("calc(" + (_0x10dfc7 ?? 50) + "% - 20px)" != null) {
      _0x1d67ff.style.setProperty("width", "calc(" + (_0x10dfc7 ?? 50) + "% - 20px)");
    } else {
      _0x1d67ff.style.removeProperty("width");
    }
    g(_0x44e4b4, _0x5c5a2a);
    g(_0x26fa0e, () => _0x242e5 && typeof _0x242e5 == "object" ? _0x242e5[_0x379fae.region] : _0x242e5);
    g(_0x644a4f, (() => {
      const _0x9a6a3c = F(() => !!_0x128469());
      return () => _0x9a6a3c() && (() => {
        const _0xae51d2 = ii();
        const _0x598188 = _0xae51d2.firstChild;
        const _0x5f51d2 = _0x598188.firstChild;
        const _0x335961 = _0x5f51d2.nextSibling;
        _0x335961.nextSibling;
        const _0x5641cb = _0x598188.nextSibling;
        g(_0x598188, () => _0x379fae.revenueDays, _0x335961);
        g(_0x598188, _0x21a481 === "cost" ? "Cost" : "Rev.", null);
        g(_0x5641cb, () => se(_0x128469()?.total) ?? "Unknown");
        U(_0x305545 => {
          const _0x5bc1b2 = ee.costsContainer;
          const _0xa135f6 = ee.costsTitle;
          const _0x59086c = ee.costsValue;
          if (_0x5bc1b2 !== _0x305545._v$11) {
            u(_0xae51d2, _0x305545._v$11 = _0x5bc1b2);
          }
          if (_0xa135f6 !== _0x305545._v$12) {
            u(_0x598188, _0x305545._v$12 = _0xa135f6);
          }
          if (_0x59086c !== _0x305545._v$13) {
            u(_0x5641cb, _0x305545._v$13 = _0x59086c);
          }
          return _0x305545;
        }, {
          _v$11: undefined,
          _v$12: undefined,
          _v$13: undefined
        });
        return _0xae51d2;
      })();
    })(), null);
    g(_0x1604db, (() => {
      const _0x25739a = F(() => !!_0xea599b && !!_0xea599b.left);
      return () => _0x25739a() && N(ue, {
        get tooltip() {
          if (typeof _0xea599b.left == "object") {
            return _0xea599b.left[_0x379fae.region];
          } else {
            return _0xea599b.left;
          }
        }
      });
    })(), _0x466a65);
    ve(_0x333d79, _0x50f2d3);
    _0x50f2d3.$$input = _0x471570 => _0x5154a9(Number(_0x471570.target.value));
    _0x50f2d3.$$keyup = () => Ke(_0x252a92, xe(_0x36ed3a(), 0, 1, _0x5cb741[0], _0x5cb741[1]));
    _0x50f2d3.$$mouseup = () => Ke(_0x252a92, xe(_0x36ed3a(), 0, 1, _0x5cb741[0], _0x5cb741[1]));
    _0x50f2d3.addEventListener("mouseleave", () => _0x117e30(false));
    _0x50f2d3.addEventListener("mouseenter", () => _0x117e30(true));
    g(_0x1604db, (() => {
      const _0x4efe05 = F(() => !!_0xea599b && !!_0xea599b.right);
      return () => _0x4efe05() && N(ue, {
        get tooltip() {
          if (typeof _0xea599b.right == "object") {
            return _0xea599b.right[_0x379fae.region];
          } else {
            return _0xea599b.right;
          }
        }
      });
    })(), null);
    g(_0x1d67ff, (() => {
      const _0x418e1b = F(() => !!_0x55c7e2());
      return () => _0x418e1b() && (() => {
        const _0x24b816 = li();
        g(_0x24b816, N(Fe, {
          get when() {
            return !!_0x4f8ec4?.[_0x379fae.region];
          },
          get children() {
            const _0x497eb4 = ri();
            g(_0x497eb4, () => _0x4f8ec4?.[_0x379fae.region]);
            return _0x497eb4;
          }
        }), null);
        g(_0x24b816, N(Fe, {
          get when() {
            return !_0x4f8ec4?.[_0x379fae.region];
          },
          get children() {
            const _0x2f7d8b = si();
            const _0x1a3dce = _0x2f7d8b.firstChild;
            g(_0x2f7d8b, () => Math.round((xe(_0x36ed3a(), 0, 1, _0x5cb741[0], _0x5cb741[1]) + (_0x585195 ?? 0)) * 100), _0x1a3dce);
            return _0x2f7d8b;
          }
        }), null);
        U(_0x1fa00c => {
          const _0x22fbaa = ee.tooltip;
          const _0x10af86 = _0x2ee2b0().y - 15 + "px";
          const _0x59a134 = _0x2ee2b0().x + (8 - _0x2ee2b0().percent * 0.15) + "px";
          if (_0x22fbaa !== _0x1fa00c._v$14) {
            u(_0x24b816, _0x1fa00c._v$14 = _0x22fbaa);
          }
          if (_0x10af86 !== _0x1fa00c._v$15) {
            if ((_0x1fa00c._v$15 = _0x10af86) != null) {
              _0x24b816.style.setProperty("top", _0x10af86);
            } else {
              _0x24b816.style.removeProperty("top");
            }
          }
          if (_0x59a134 !== _0x1fa00c._v$16) {
            if ((_0x1fa00c._v$16 = _0x59a134) != null) {
              _0x24b816.style.setProperty("left", _0x59a134);
            } else {
              _0x24b816.style.removeProperty("left");
            }
          }
          return _0x1fa00c;
        }, {
          _v$14: undefined,
          _v$15: undefined,
          _v$16: undefined
        });
        return _0x24b816;
      })();
    })(), null);
    U(_0x305c38 => {
      const _0x54519b = ee.main;
      const _0x54c178 = ee.backgroundColor + " " + _0x126e06;
      const _0x84ac11 = ee.textContainer;
      const _0x3464a = ee.infoContainer;
      const _0x33c135 = ee.header;
      const _0x476daa = ee.description;
      const _0xaf2bd3 = ee.inputContainer;
      const _0x384792 = ee.rangeContainer;
      const _0x21904e = ee.range;
      const _0x1f7117 = !!_0x4f8ec4?.[_0x379fae.region];
      if (_0x54519b !== _0x305c38._v$) {
        u(_0x1d67ff, _0x305c38._v$ = _0x54519b);
      }
      if (_0x54c178 !== _0x305c38._v$2) {
        u(_0x517075, _0x305c38._v$2 = _0x54c178);
      }
      if (_0x84ac11 !== _0x305c38._v$3) {
        u(_0x644a4f, _0x305c38._v$3 = _0x84ac11);
      }
      if (_0x3464a !== _0x305c38._v$4) {
        u(_0x17aa73, _0x305c38._v$4 = _0x3464a);
      }
      if (_0x33c135 !== _0x305c38._v$5) {
        u(_0x44e4b4, _0x305c38._v$5 = _0x33c135);
      }
      if (_0x476daa !== _0x305c38._v$6) {
        u(_0x26fa0e, _0x305c38._v$6 = _0x476daa);
      }
      if (_0xaf2bd3 !== _0x305c38._v$7) {
        u(_0x1604db, _0x305c38._v$7 = _0xaf2bd3);
      }
      if (_0x384792 !== _0x305c38._v$8) {
        u(_0x466a65, _0x305c38._v$8 = _0x384792);
      }
      if (_0x21904e !== _0x305c38._v$9) {
        u(_0x50f2d3, _0x305c38._v$9 = _0x21904e);
      }
      if (_0x1f7117 !== _0x305c38._v$10) {
        _0x50f2d3.disabled = _0x305c38._v$10 = _0x1f7117;
      }
      return _0x305c38;
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
      _v$10: undefined
    });
    U(() => _0x50f2d3.value = _0x36ed3a());
    return _0x1d67ff;
  })();
};
pe(["mouseup", "keyup", "input"]);
const ui = "_main_1pkbi_1";
const di = "_headerContainer_1pkbi_9";
const fi = "_headerIconLeft_1pkbi_21";
const vi = "_headerIconRight_1pkbi_22";
const ai = "_header_1pkbi_9";
const _i = "_sliderContainer_1pkbi_43";
const _e = {
  main: ui,
  headerContainer: di,
  headerIconLeft: fi,
  headerIconRight: vi,
  header: ai,
  sliderContainer: _i
};
const $i = H("<div><div><span></span><p></p><span></div><div>");
const yi = _0x5b342d => {
  const {
    id: _0x20fd2a,
    name: _0x208bc0
  } = _0x5b342d.data;
  const {
    state: _0x29b2d2
  } = le();
  const [_0x4acd52, _0x130f0a] = j(false);
  const _0x209de3 = _0x29b2d2.importantCosts?.filter(_0x592918 => _0x592918.section === _0x20fd2a);
  const _0x1ec66c = _0x29b2d2.importantRevenue?.filter(_0x151545 => _0x151545.section === _0x20fd2a);
  const _0x5d6ad1 = _0x29b2d2.budgets?.filter(_0x93c8b3 => _0x93c8b3.section === _0x20fd2a);
  if (_0x5d6ad1.length <= 0 && _0x209de3.length <= 0 && _0x1ec66c.length <= 0) {
    return null;
  } else {
    return (() => {
      const _0x3d2596 = $i();
      const _0x34866f = _0x3d2596.firstChild;
      const _0x5c52e3 = _0x34866f.firstChild;
      const _0x5b1761 = _0x5c52e3.nextSibling;
      const _0x354258 = _0x5b1761.nextSibling;
      const _0x262bf9 = _0x34866f.nextSibling;
      _0x34866f.$$click = () => _0x130f0a(!_0x4acd52());
      g(_0x5c52e3, () => _0x4acd52() ? "keyboard_arrow_right" : "keyboard_arrow_down");
      g(_0x5b1761, () => typeof _0x208bc0 == "object" ? _0x208bc0[_0x29b2d2.region] : _0x208bc0);
      g(_0x354258, () => _0x4acd52() ? "keyboard_arrow_left" : "keyboard_arrow_down");
      g(_0x262bf9, N(be, {
        each: _0x209de3,
        children: _0x308e3e => N(Dn, {
          data: _0x308e3e
        })
      }), null);
      g(_0x262bf9, N(be, {
        each: _0x1ec66c,
        children: _0x5833dc => N(No, {
          data: _0x5833dc
        })
      }), null);
      g(_0x262bf9, N(be, {
        each: _0x5d6ad1,
        children: _0x461fd6 => _0x461fd6.input === "number" ? N(fo, {
          data: _0x461fd6
        }) : N(ci, {
          data: _0x461fd6
        })
      }), null);
      U(_0x2dc987 => {
        const _0x16ff14 = _e.main;
        const _0x78fc51 = _e.headerContainer;
        const _0x3bee5d = _e.headerIconLeft + " material-symbols-rounded";
        const _0x4f350e = _e.header;
        const _0x201e53 = _e.headerIconRight + " material-symbols-rounded";
        const _0x5709e9 = _e.sliderContainer;
        const _0x11a84e = _0x4acd52() ? "none" : "flex";
        if (_0x16ff14 !== _0x2dc987._v$) {
          u(_0x3d2596, _0x2dc987._v$ = _0x16ff14);
        }
        if (_0x78fc51 !== _0x2dc987._v$2) {
          u(_0x34866f, _0x2dc987._v$2 = _0x78fc51);
        }
        if (_0x3bee5d !== _0x2dc987._v$3) {
          u(_0x5c52e3, _0x2dc987._v$3 = _0x3bee5d);
        }
        if (_0x4f350e !== _0x2dc987._v$4) {
          u(_0x5b1761, _0x2dc987._v$4 = _0x4f350e);
        }
        if (_0x201e53 !== _0x2dc987._v$5) {
          u(_0x354258, _0x2dc987._v$5 = _0x201e53);
        }
        if (_0x5709e9 !== _0x2dc987._v$6) {
          u(_0x262bf9, _0x2dc987._v$6 = _0x5709e9);
        }
        if (_0x11a84e !== _0x2dc987._v$7) {
          if ((_0x2dc987._v$7 = _0x11a84e) != null) {
            _0x262bf9.style.setProperty("display", _0x11a84e);
          } else {
            _0x262bf9.style.removeProperty("display");
          }
        }
        return _0x2dc987;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined,
        _v$6: undefined,
        _v$7: undefined
      });
      return _0x3d2596;
    })();
  }
};
pe(["click"]);
const gi = "_footer_1n23z_1";
const hi = "_footerSectionContainer_1n23z_10";
const Ci = "_footerSectionTitle_1n23z_26";
const pi = "_footerSectionAmount_1n23z_39";
const xi = "_footerSectionEllipse_1n23z_49";
const mi = "_footerSectionRectangle_1n23z_59";
const bi = "_footerRevenueColor_1n23z_65";
const Si = "_footerCostColor_1n23z_70";
const wi = "_footerRevenueColorBackground_1n23z_75";
const ki = "_footerCostColorBackground_1n23z_80";
const V = {
  footer: gi,
  footerSectionContainer: hi,
  footerSectionTitle: Ci,
  footerSectionAmount: pi,
  footerSectionEllipse: xi,
  footerSectionRectangle: mi,
  footerRevenueColor: bi,
  footerCostColor: Si,
  footerRevenueColorBackground: wi,
  footerCostColorBackground: ki
};
const Ai = H("<div><div><div></div><div></div><p>Revenue:</p><p></div><div><div></div><div></div><p>Costs:</p><p></div><div><div></div><div></div><p>Net Revenue:</p><p>");
const Pi = _0x1c5c67 => (() => {
  const _0x939e76 = Ai();
  const _0x37e492 = _0x939e76.firstChild;
  const _0x30fa1f = _0x37e492.firstChild;
  const _0x39ae35 = _0x30fa1f.nextSibling;
  const _0x278b1a = _0x39ae35.nextSibling;
  const _0x460e26 = _0x278b1a.nextSibling;
  const _0x4e6659 = _0x37e492.nextSibling;
  const _0x48ea1d = _0x4e6659.firstChild;
  const _0x33fc01 = _0x48ea1d.nextSibling;
  const _0x54e284 = _0x33fc01.nextSibling;
  const _0xcb4191 = _0x54e284.nextSibling;
  const _0x2ef7d3 = _0x4e6659.nextSibling;
  const _0x385e58 = _0x2ef7d3.firstChild;
  const _0x682edf = _0x385e58.nextSibling;
  const _0x1a737d = _0x682edf.nextSibling;
  const _0x28b344 = _0x1a737d.nextSibling;
  g(_0x460e26, () => se(_0x1c5c67.revenue()));
  g(_0xcb4191, () => se(_0x1c5c67.costs()));
  g(_0x28b344, () => se(_0x1c5c67.netRevenue()));
  U(_0x24c03b => {
    const _0x2aba74 = V.footer;
    const _0x3d2f6b = V.footerSectionContainer;
    const _0xafca64 = V.footerSectionEllipse + " " + V.footerRevenueColorBackground;
    const _0x99017e = V.footerSectionRectangle + " " + V.footerRevenueColorBackground;
    const _0x502aa9 = V.footerSectionTitle;
    const _0x56d908 = V.footerSectionAmount + " " + V.footerRevenueColor;
    const _0x725603 = V.footerSectionContainer;
    const _0x53d5df = V.footerSectionEllipse + " " + V.footerCostColorBackground;
    const _0x18fdbc = V.footerSectionRectangle + " " + V.footerCostColorBackground;
    const _0x1f2d4a = V.footerSectionTitle;
    const _0x175059 = V.footerSectionAmount + " " + V.footerCostColor;
    const _0x357e30 = V.footerSectionContainer;
    const _0x14c9fc = V.footerSectionEllipse + " " + (_0x1c5c67.netRevenue() >= 0 ? V.footerRevenueColorBackground : V.footerCostColorBackground);
    const _0x8bdd6 = V.footerSectionRectangle + " " + (_0x1c5c67.netRevenue() >= 0 ? V.footerRevenueColorBackground : V.footerCostColorBackground);
    const _0x157492 = V.footerSectionTitle;
    const _0x229562 = V.footerSectionAmount + " " + (_0x1c5c67.netRevenue() >= 0 ? V.footerRevenueColor : V.footerCostColor);
    if (_0x2aba74 !== _0x24c03b._v$) {
      u(_0x939e76, _0x24c03b._v$ = _0x2aba74);
    }
    if (_0x3d2f6b !== _0x24c03b._v$2) {
      u(_0x37e492, _0x24c03b._v$2 = _0x3d2f6b);
    }
    if (_0xafca64 !== _0x24c03b._v$3) {
      u(_0x30fa1f, _0x24c03b._v$3 = _0xafca64);
    }
    if (_0x99017e !== _0x24c03b._v$4) {
      u(_0x39ae35, _0x24c03b._v$4 = _0x99017e);
    }
    if (_0x502aa9 !== _0x24c03b._v$5) {
      u(_0x278b1a, _0x24c03b._v$5 = _0x502aa9);
    }
    if (_0x56d908 !== _0x24c03b._v$6) {
      u(_0x460e26, _0x24c03b._v$6 = _0x56d908);
    }
    if (_0x725603 !== _0x24c03b._v$7) {
      u(_0x4e6659, _0x24c03b._v$7 = _0x725603);
    }
    if (_0x53d5df !== _0x24c03b._v$8) {
      u(_0x48ea1d, _0x24c03b._v$8 = _0x53d5df);
    }
    if (_0x18fdbc !== _0x24c03b._v$9) {
      u(_0x33fc01, _0x24c03b._v$9 = _0x18fdbc);
    }
    if (_0x1f2d4a !== _0x24c03b._v$10) {
      u(_0x54e284, _0x24c03b._v$10 = _0x1f2d4a);
    }
    if (_0x175059 !== _0x24c03b._v$11) {
      u(_0xcb4191, _0x24c03b._v$11 = _0x175059);
    }
    if (_0x357e30 !== _0x24c03b._v$12) {
      u(_0x2ef7d3, _0x24c03b._v$12 = _0x357e30);
    }
    if (_0x14c9fc !== _0x24c03b._v$13) {
      u(_0x385e58, _0x24c03b._v$13 = _0x14c9fc);
    }
    if (_0x8bdd6 !== _0x24c03b._v$14) {
      u(_0x682edf, _0x24c03b._v$14 = _0x8bdd6);
    }
    if (_0x157492 !== _0x24c03b._v$15) {
      u(_0x1a737d, _0x24c03b._v$15 = _0x157492);
    }
    if (_0x229562 !== _0x24c03b._v$16) {
      u(_0x28b344, _0x24c03b._v$16 = _0x229562);
    }
    return _0x24c03b;
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
    _v$16: undefined
  });
  return _0x939e76;
})();
const Ri = "_main_14gi7_1";
const Ii = "_icon_14gi7_19";
const Ei = "_tooltip_14gi7_26";
const Oe = {
  main: Ri,
  icon: Ii,
  tooltip: Ei
};
const Bi = H("<div><span>calendar_month");
const Ti = H("<div><p>");
const Di = _0x128cdf => {
  const {
    tooltip: _0x120a1c
  } = _0x128cdf;
  const [_0x1f6912, _0x2b6521] = j(null);
  const [_0x1dbe9c, _0x15fdec] = j(false);
  const _0x303644 = () => {
    const _0x476ee0 = _0x1f6912();
    if (!_0x476ee0) {
      return {
        x: 0,
        y: 0
      };
    }
    const _0x3b09f0 = _0x476ee0.getBoundingClientRect();
    return {
      x: _0x3b09f0.x + _0x3b09f0.width / 2,
      y: _0x3b09f0.y
    };
  };
  return (() => {
    const _0x395d58 = Bi();
    const _0xb0ee6b = _0x395d58.firstChild;
    ve(_0x2b6521, _0x395d58);
    vt(_0x395d58, "click", _0x128cdf.onClick, true);
    _0x395d58.addEventListener("mouseleave", () => _0x15fdec(false));
    _0x395d58.addEventListener("mouseenter", () => _0x15fdec(true));
    g(_0x395d58, (() => {
      const _0xdec77a = F(() => !!_0x1dbe9c());
      return () => _0xdec77a() && (() => {
        const _0x4061bc = Ti();
        const _0xd2a3e1 = _0x4061bc.firstChild;
        g(_0xd2a3e1, _0x120a1c);
        U(_0x567980 => {
          const _0x4afff7 = Oe.tooltip;
          const _0x5b7daf = _0x303644().y - 10 + "px";
          const _0x3d7aa3 = _0x303644().x + "px";
          if (_0x4afff7 !== _0x567980._v$3) {
            u(_0x4061bc, _0x567980._v$3 = _0x4afff7);
          }
          if (_0x5b7daf !== _0x567980._v$4) {
            if ((_0x567980._v$4 = _0x5b7daf) != null) {
              _0x4061bc.style.setProperty("top", _0x5b7daf);
            } else {
              _0x4061bc.style.removeProperty("top");
            }
          }
          if (_0x3d7aa3 !== _0x567980._v$5) {
            if ((_0x567980._v$5 = _0x3d7aa3) != null) {
              _0x4061bc.style.setProperty("left", _0x3d7aa3);
            } else {
              _0x4061bc.style.removeProperty("left");
            }
          }
          return _0x567980;
        }, {
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined
        });
        return _0x4061bc;
      })();
    })(), null);
    U(_0x254d49 => {
      const _0x3cded1 = _0x128cdf.style + " " + Oe.main;
      const _0x1300a7 = Oe.icon + " material-symbols-rounded";
      if (_0x3cded1 !== _0x254d49._v$) {
        u(_0x395d58, _0x254d49._v$ = _0x3cded1);
      }
      if (_0x1300a7 !== _0x254d49._v$2) {
        u(_0xb0ee6b, _0x254d49._v$2 = _0x1300a7);
      }
      return _0x254d49;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x395d58;
  })();
};
pe(["click"]);
const Li = H("<div><div><div></div><div></div><div><p>&nbsp;Regional&nbsp;Finances</p><p>Adjust the sliders to edit the regions finances. Ensure the region has a positive net revenue to avoid bankruptcy.<br>Previous revenue and cost values are calculated over the last <!> days and are only approximate values.</p><div><div></div></div><div><div></div></div><div><div>Approximate Region Account Statistics for the Last <!> Days:");
function Ni() {
  const {
    state: _0x13dd45,
    setState: _0x4aa65b
  } = le();
  const [_0x1b89ba, _0x72a629] = j(0);
  const [_0xa7f978, _0x599160] = j(0);
  const [_0x4e771d, _0x6eae3a] = j(0);
  const _0x1c1e6f = _0xd529ca => {
    if (_0xd529ca.key === "Escape" && _0x13dd45.show) {
      _0x4aa65b({
        show: false
      });
      _0x33f2a7.execute("close");
    }
  };
  const _0x1d7c4d = () => {
    const _0x57a0c6 = _0x13dd45.revenueDayCycle.indexOf(_0x13dd45.revenueDays) || 0;
    const _0x28ac76 = _0x57a0c6 + 1 >= _0x13dd45.revenueDayCycle.length ? 0 : _0x57a0c6 + 1;
    const _0x1b5131 = _0x13dd45.revenueDayCycle[_0x28ac76];
    _0x4aa65b({
      revenueDays: _0x1b5131
    });
    _0x33f2a7.execute("setRevenueDays", _0x1b5131);
  };
  mt(async () => {
    const _0x1454dd = async _0x29b85e => _0x4aa65b(_0x29b85e);
    const _0x422103 = async _0xeb09e4 => _0x4aa65b({
      budgets: _0xeb09e4
    });
    const _0x5bb461 = async _0xd1d132 => _0x4aa65b({
      sections: _0xd1d132
    });
    const _0x42b804 = async _0x197a45 => _0x4aa65b({
      budgetCosts: _0x197a45
    });
    const _0x3c244a = async _0x924614 => {
      if (!_0x924614[_0x13dd45.region]) {
        return false;
      }
      const {
        revenue: _0x54e237,
        costs: _0x4cc30d,
        netRevenue: _0x86f467
      } = _0x924614[_0x13dd45.region];
      _0x4aa65b({
        revenue: _0x54e237,
        costs: _0x4cc30d,
        netRevenue: _0x86f467
      });
      _0x72a629(_0x54e237);
      _0x599160(_0x4cc30d);
      _0x6eae3a(_0x86f467);
      return true;
    };
    _0x33f2a7.register("setState", _0x1454dd);
    _0x33f2a7.register("setBudgets", _0x422103);
    _0x33f2a7.register("setSections", _0x5bb461);
    _0x33f2a7.register("triggerNetRevenueUpdate", _0x3c244a);
    _0x33f2a7.register("triggerBudgetCostsUpdate", _0x42b804);
    document.addEventListener("keydown", _0x1c1e6f);
  });
  nt(() => {
    document.removeEventListener("keydown", _0x1c1e6f);
  });
  return N(Fe, {
    get when() {
      return _0x13dd45.show;
    },
    get children() {
      const _0x55e019 = Li();
      const _0x16da21 = _0x55e019.firstChild;
      const _0x2871a2 = _0x16da21.firstChild;
      const _0x3c91a8 = _0x2871a2.nextSibling;
      const _0x5bd0d9 = _0x3c91a8.nextSibling;
      const _0x523422 = _0x5bd0d9.firstChild;
      const _0x1bb1fe = _0x523422.firstChild;
      const _0xdedfbd = _0x523422.nextSibling;
      const _0x1f53c7 = _0xdedfbd.firstChild;
      const _0x41f664 = _0x1f53c7.nextSibling;
      const _0x5250c2 = _0x41f664.nextSibling;
      const _0x9b5e80 = _0x5250c2.nextSibling;
      _0x9b5e80.nextSibling;
      const _0x474b94 = _0xdedfbd.nextSibling;
      const _0x2c05bb = _0x474b94.firstChild;
      const _0x5586b5 = _0x474b94.nextSibling;
      const _0x2f18c4 = _0x5586b5.firstChild;
      const _0x224f4b = _0x5586b5.nextSibling;
      const _0x4c886c = _0x224f4b.firstChild;
      const _0x282f2f = _0x4c886c.firstChild;
      const _0x5df86b = _0x282f2f.nextSibling;
      _0x5df86b.nextSibling;
      g(_0x523422, N(Et, {
        get fallback() {
          return _0x13dd45.region;
        },
        get children() {
          return [N(Qe, {
            get when() {
              return _0x13dd45.region === "los-santos";
            },
            children: "Los Santos"
          }), N(Qe, {
            get when() {
              return _0x13dd45.region === "blaine-county";
            },
            children: "Blaine County"
          })];
        }
      }), _0x1bb1fe);
      g(_0xdedfbd, () => _0x13dd45.revenueDays, _0x9b5e80);
      g(_0x2f18c4, (() => {
        const _0x1b44f7 = F(() => _0x13dd45.budgets.length > 0 && _0x13dd45.sections.length > 0 && _0x13dd45.values.length > 0);
        return () => _0x1b44f7() && N(be, {
          get each() {
            return _0x13dd45.sections;
          },
          children: _0x2ea934 => N(yi, {
            data: _0x2ea934
          })
        });
      })());
      g(_0x4c886c, () => _0x13dd45.revenueDays, _0x5df86b);
      g(_0x224f4b, N(Di, {
        get style() {
          return J.timeFrameButton;
        },
        tooltip: "Cycle through statistics time frames.",
        onClick: () => _0x1d7c4d()
      }), null);
      g(_0x5bd0d9, N(Pi, {
        revenue: _0x1b89ba,
        costs: _0xa7f978,
        netRevenue: _0x4e771d
      }), null);
      U(_0x1589b6 => {
        const _0x6b9e29 = J.App + " select-none";
        const _0x29300e = J.container;
        const _0x340a5c = J.backgroundEllipse;
        const _0x10d284 = J.borderContainer;
        const _0x4efb11 = J.subContainer;
        const _0x5d3d3a = J.header;
        const _0xef3fa1 = J.description;
        const _0x23ee27 = J.divider;
        const _0x23981e = J.dividerRectangle;
        const _0x7415ee = J.sliderScrollContainer;
        const _0x5104f7 = J.sliderContainer;
        const _0xc4080 = J.footerSectionContainer;
        const _0x59ed08 = J.footerSectionTitle;
        if (_0x6b9e29 !== _0x1589b6._v$) {
          u(_0x55e019, _0x1589b6._v$ = _0x6b9e29);
        }
        if (_0x29300e !== _0x1589b6._v$2) {
          u(_0x16da21, _0x1589b6._v$2 = _0x29300e);
        }
        if (_0x340a5c !== _0x1589b6._v$3) {
          u(_0x2871a2, _0x1589b6._v$3 = _0x340a5c);
        }
        if (_0x10d284 !== _0x1589b6._v$4) {
          u(_0x3c91a8, _0x1589b6._v$4 = _0x10d284);
        }
        if (_0x4efb11 !== _0x1589b6._v$5) {
          u(_0x5bd0d9, _0x1589b6._v$5 = _0x4efb11);
        }
        if (_0x5d3d3a !== _0x1589b6._v$6) {
          u(_0x523422, _0x1589b6._v$6 = _0x5d3d3a);
        }
        if (_0xef3fa1 !== _0x1589b6._v$7) {
          u(_0xdedfbd, _0x1589b6._v$7 = _0xef3fa1);
        }
        if (_0x23ee27 !== _0x1589b6._v$8) {
          u(_0x474b94, _0x1589b6._v$8 = _0x23ee27);
        }
        if (_0x23981e !== _0x1589b6._v$9) {
          u(_0x2c05bb, _0x1589b6._v$9 = _0x23981e);
        }
        if (_0x7415ee !== _0x1589b6._v$10) {
          u(_0x5586b5, _0x1589b6._v$10 = _0x7415ee);
        }
        if (_0x5104f7 !== _0x1589b6._v$11) {
          u(_0x2f18c4, _0x1589b6._v$11 = _0x5104f7);
        }
        if (_0xc4080 !== _0x1589b6._v$12) {
          u(_0x224f4b, _0x1589b6._v$12 = _0xc4080);
        }
        if (_0x59ed08 !== _0x1589b6._v$13) {
          u(_0x4c886c, _0x1589b6._v$13 = _0x59ed08);
        }
        return _0x1589b6;
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
        _v$13: undefined
      });
      return _0x55e019;
    }
  });
}
Tt(() => N(tn, {
  get children() {
    return N(Ni, {});
  }
}), document.getElementById("root"));