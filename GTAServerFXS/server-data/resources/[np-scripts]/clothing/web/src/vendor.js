import { c as Fo, g as Io } from "./commonjsHelpers.js";
const Co = (e, n) => e === n;
const Ee = Symbol("solid-proxy");
const nn = Symbol("solid-track");
const Uo = Symbol("solid-dev-component");
const rn = {
  equals: Co
};
let yi = Ti;
const Oe = 1;
const on = 2;
const mi = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var re = null;
let An = null;
let ee = null;
let ue = null;
let Me = null;
let gn = 0;
const [Do, jl] = dt(false);
function ft(e, n) {
  const t = ee;
  const r = re;
  const o = e.length === 0;
  const i = o ? mi : {
    owned: null,
    cleanups: null,
    context: null,
    owner: n === undefined ? r : n
  };
  const l = o ? e : () => e(() => fe(() => yn(i)));
  re = i;
  ee = null;
  try {
    return et(l, true);
  } finally {
    ee = t;
    re = r;
  }
}
function dt(e, n) {
  n = n ? Object.assign({}, rn, n) : rn;
  const t = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: n.equals || undefined
  };
  const r = o => {
    if (typeof o == "function") {
      o = o(t.value);
    }
    return Si(t, o);
  };
  return [ki.bind(t), r];
}
function qe(e, n, t) {
  const r = xn(e, n, true, Oe);
  _t(r);
}
function Ze(e, n, t) {
  const r = xn(e, n, false, Oe);
  _t(r);
}
function bi(e, n, t) {
  yi = Oo;
  const r = xn(e, n, false, Oe);
  if (!t || !t.render) {
    r.user = true;
  }
  if (Me) {
    Me.push(r);
  } else {
    _t(r);
  }
}
function oe(e, n, t) {
  t = t ? Object.assign({}, rn, t) : rn;
  const r = xn(e, n, true, 0);
  r.observers = null;
  r.observerSlots = null;
  r.comparator = t.equals || undefined;
  _t(r);
  return ki.bind(r);
}
function an(e) {
  return et(e, false);
}
function fe(e) {
  if (ee === null) {
    return e();
  }
  const n = ee;
  ee = null;
  try {
    return e();
  } finally {
    ee = n;
  }
}
function Vl(e) {
  bi(() => fe(e));
}
function cr(e) {
  if (re !== null) {
    if (re.cleanups === null) {
      re.cleanups = [e];
    } else {
      re.cleanups.push(e);
    }
  }
  return e;
}
function vi() {
  return ee;
}
function Ro(e) {
  const n = ee;
  const t = re;
  return Promise.resolve().then(() => {
    ee = n;
    re = t;
    let r;
    et(e, false);
    ee = re = null;
    if (r) {
      return r.done;
    } else {
      return undefined;
    }
  });
}
function zo() {
  return [Do, Ro];
}
function Ei(e, n) {
  const t = Symbol("context");
  return {
    id: t,
    Provider: No(t),
    defaultValue: e
  };
}
function Ai(e) {
  let n;
  if ((n = Ci(re, e.id)) !== undefined) {
    return n;
  } else {
    return e.defaultValue;
  }
}
function ur(e) {
  const n = oe(e);
  const t = oe(() => Gn(n()));
  t.toArray = () => {
    const r = t();
    if (Array.isArray(r)) {
      return r;
    } else if (r != null) {
      return [r];
    } else {
      return [];
    }
  };
  return t;
}
function ki() {
  if (this.sources && this.state) {
    if (this.state === Oe) {
      _t(this);
    } else {
      const e = ue;
      ue = null;
      et(() => sn(this), false);
      ue = e;
    }
  }
  if (ee) {
    const e = this.observers ? this.observers.length : 0;
    if (ee.sources) {
      ee.sources.push(this);
      ee.sourceSlots.push(e);
    } else {
      ee.sources = [this];
      ee.sourceSlots = [e];
    }
    if (this.observers) {
      this.observers.push(ee);
      this.observerSlots.push(ee.sources.length - 1);
    } else {
      this.observers = [ee];
      this.observerSlots = [ee.sources.length - 1];
    }
  }
  return this.value;
}
function Si(e, n, t) {
  let r = e.value;
  if (!e.comparator || !e.comparator(r, n)) {
    e.value = n;
    if (e.observers && e.observers.length) {
      et(() => {
        for (let o = 0; o < e.observers.length; o += 1) {
          const i = e.observers[o];
          const l = An && An.running;
          if (l) {
            An.disposed.has(i);
          }
          if (l ? !i.tState : !i.state) {
            if (i.pure) {
              ue.push(i);
            } else {
              Me.push(i);
            }
            if (i.observers) {
              Fi(i);
            }
          }
          if (!l) {
            i.state = Oe;
          }
        }
        if (ue.length > 1000000) {
          ue = [];
          throw new Error();
        }
      }, false);
    }
  }
  return n;
}
function _t(e) {
  if (!e.fn) {
    return;
  }
  yn(e);
  const n = re;
  const t = ee;
  const r = gn;
  ee = re = e;
  Lo(e, e.value, r);
  ee = t;
  re = n;
}
function Lo(e, n, t) {
  let r;
  try {
    r = e.fn(n);
  } catch (o) {
    if (e.pure) {
      e.state = Oe;
      if (e.owned) {
        e.owned.forEach(yn);
      }
      e.owned = null;
    }
    e.updatedAt = t + 1;
    return Ii(o);
  }
  if (!e.updatedAt || e.updatedAt <= t) {
    if (e.updatedAt != null && "observers" in e) {
      Si(e, r);
    } else {
      e.value = r;
    }
    e.updatedAt = t;
  }
}
function xn(e, n, t, r = Oe, o) {
  const i = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: n,
    owner: re,
    context: null,
    pure: t
  };
  if (re !== null) {
    if (re !== mi) {
      if (re.owned) {
        re.owned.push(i);
      } else {
        re.owned = [i];
      }
    }
  }
  return i;
}
function fn(e) {
  if (e.state === 0) {
    return;
  }
  if (e.state === on) {
    return sn(e);
  }
  if (e.suspense && fe(e.suspense.inFallback)) {
    return e.suspense.effects.push(e);
  }
  const n = [e];
  while ((e = e.owner) && (!e.updatedAt || e.updatedAt < gn)) {
    if (e.state) {
      n.push(e);
    }
  }
  for (let t = n.length - 1; t >= 0; t--) {
    e = n[t];
    if (e.state === Oe) {
      _t(e);
    } else if (e.state === on) {
      const r = ue;
      ue = null;
      et(() => sn(e, n[0]), false);
      ue = r;
    }
  }
}
function et(e, n) {
  if (ue) {
    return e();
  }
  let t = false;
  if (!n) {
    ue = [];
  }
  if (Me) {
    t = true;
  } else {
    Me = [];
  }
  gn++;
  try {
    const r = e();
    Mo(t);
    return r;
  } catch (r) {
    if (!t) {
      Me = null;
    }
    ue = null;
    Ii(r);
  }
}
function Mo(e) {
  if (ue) {
    Ti(ue);
    ue = null;
  }
  if (e) {
    return;
  }
  const n = Me;
  Me = null;
  if (n.length) {
    et(() => yi(n), false);
  }
}
function Ti(e) {
  for (let n = 0; n < e.length; n++) {
    fn(e[n]);
  }
}
function Oo(e) {
  let n;
  let t = 0;
  for (n = 0; n < e.length; n++) {
    const r = e[n];
    if (r.user) {
      e[t++] = r;
    } else {
      fn(r);
    }
  }
  for (n = 0; n < t; n++) {
    fn(e[n]);
  }
}
function sn(e, n) {
  e.state = 0;
  for (let t = 0; t < e.sources.length; t += 1) {
    const r = e.sources[t];
    if (r.sources) {
      const o = r.state;
      if (o === Oe) {
        if (r !== n && (!r.updatedAt || r.updatedAt < gn)) {
          fn(r);
        }
      } else if (o === on) {
        sn(r, n);
      }
    }
  }
}
function Fi(e) {
  for (let n = 0; n < e.observers.length; n += 1) {
    const t = e.observers[n];
    if (!t.state) {
      t.state = on;
      if (t.pure) {
        ue.push(t);
      } else {
        Me.push(t);
      }
      if (t.observers) {
        Fi(t);
      }
    }
  }
}
function yn(e) {
  let n;
  if (e.sources) {
    while (e.sources.length) {
      const t = e.sources.pop();
      const r = e.sourceSlots.pop();
      const o = t.observers;
      if (o && o.length) {
        const i = o.pop();
        const l = t.observerSlots.pop();
        if (r < o.length) {
          i.sourceSlots[l] = r;
          o[r] = i;
          t.observerSlots[r] = l;
        }
      }
    }
  }
  if (e.owned) {
    for (n = e.owned.length - 1; n >= 0; n--) {
      yn(e.owned[n]);
    }
    e.owned = null;
  }
  if (e.cleanups) {
    for (n = e.cleanups.length - 1; n >= 0; n--) {
      e.cleanups[n]();
    }
    e.cleanups = null;
  }
  e.state = 0;
  e.context = null;
}
function Ii(e) {
  throw e;
}
function Ci(e, n) {
  if (e) {
    if (e.context && e.context[n] !== undefined) {
      return e.context[n];
    } else {
      return Ci(e.owner, n);
    }
  } else {
    return undefined;
  }
}
function Gn(e) {
  if (typeof e == "function" && !e.length) {
    return Gn(e());
  }
  if (Array.isArray(e)) {
    const n = [];
    for (let t = 0; t < e.length; t++) {
      const r = Gn(e[t]);
      if (Array.isArray(r)) {
        n.push.apply(n, r);
      } else {
        n.push(r);
      }
    }
    return n;
  }
  return e;
}
function No(e, n) {
  return function (r) {
    let o;
    Ze(() => o = fe(() => {
      re.context = {
        [e]: r.value
      };
      return ur(() => r.children);
    }), undefined);
    return o;
  };
}
const Kn = Symbol("fallback");
function ln(e) {
  for (let n = 0; n < e.length; n++) {
    e[n]();
  }
}
function Bo(e, n, t = {}) {
  let r = [];
  let o = [];
  let i = [];
  let l = 0;
  let a = n.length > 1 ? [] : null;
  cr(() => ln(i));
  return () => {
    let p = e() || [];
    let c;
    let u;
    p[nn];
    return fe(() => {
      let m = p.length;
      let g;
      let S;
      let R;
      let Z;
      let P;
      let K;
      let H;
      let U;
      let D;
      if (m === 0) {
        if (l !== 0) {
          ln(i);
          i = [];
          r = [];
          o = [];
          l = 0;
          a &&= [];
        }
        if (t.fallback) {
          r = [Kn];
          o[0] = ft(N => {
            i[0] = N;
            return t.fallback();
          });
          l = 1;
        }
      } else if (l === 0) {
        o = new Array(m);
        u = 0;
        for (; u < m; u++) {
          r[u] = p[u];
          o[u] = ft(v);
        }
        l = m;
      } else {
        R = new Array(m);
        Z = new Array(m);
        if (a) {
          P = new Array(m);
        }
        K = 0;
        H = Math.min(l, m);
        for (; K < H && r[K] === p[K]; K++);
        H = l - 1;
        U = m - 1;
        for (; H >= K && U >= K && r[H] === p[U]; H--, U--) {
          R[U] = o[H];
          Z[U] = i[H];
          if (a) {
            P[U] = a[H];
          }
        }
        g = new Map();
        S = new Array(U + 1);
        u = U;
        for (; u >= K; u--) {
          D = p[u];
          c = g.get(D);
          S[u] = c === undefined ? -1 : c;
          g.set(D, u);
        }
        for (c = K; c <= H; c++) {
          D = r[c];
          u = g.get(D);
          if (u !== undefined && u !== -1) {
            R[u] = o[c];
            Z[u] = i[c];
            if (a) {
              P[u] = a[c];
            }
            u = S[u];
            g.set(D, u);
          } else {
            i[c]();
          }
        }
        for (u = K; u < m; u++) {
          if (u in R) {
            o[u] = R[u];
            i[u] = Z[u];
            if (a) {
              a[u] = P[u];
              a[u](u);
            }
          } else {
            o[u] = ft(v);
          }
        }
        o = o.slice(0, l = m);
        r = p.slice(0);
      }
      return o;
    });
    function v(m) {
      i[u] = m;
      if (a) {
        const [g, S] = dt(u);
        a[u] = S;
        return n(p[u], g);
      }
      return n(p[u]);
    }
  };
}
function Po(e, n, t = {}) {
  let r = [];
  let o = [];
  let i = [];
  let l = [];
  let a = 0;
  let p;
  cr(() => ln(i));
  return () => {
    const c = e() || [];
    c[nn];
    return fe(() => {
      if (c.length === 0) {
        if (a !== 0) {
          ln(i);
          i = [];
          r = [];
          o = [];
          a = 0;
          l = [];
        }
        if (t.fallback) {
          r = [Kn];
          o[0] = ft(v => {
            i[0] = v;
            return t.fallback();
          });
          a = 1;
        }
        return o;
      }
      if (r[0] === Kn) {
        i[0]();
        i = [];
        r = [];
        o = [];
        a = 0;
      }
      p = 0;
      for (; p < c.length; p++) {
        if (p < r.length && r[p] !== c[p]) {
          l[p](() => c[p]);
        } else if (p >= r.length) {
          o[p] = ft(u);
        }
      }
      for (; p < r.length; p++) {
        i[p]();
      }
      a = l.length = i.length = c.length;
      r = c.slice(0);
      return o = o.slice(0, a);
    });
    function u(v) {
      i[p] = v;
      const [m, g] = dt(c[p]);
      l[p] = g;
      return n(m, p);
    }
  };
}
function Be(e, n) {
  return fe(() => e(n || {}));
}
function jt() {
  return true;
}
const jn = {
  get(e, n, t) {
    if (n === Ee) {
      return t;
    } else {
      return e.get(n);
    }
  },
  has(e, n) {
    if (n === Ee) {
      return true;
    } else {
      return e.has(n);
    }
  },
  set: jt,
  deleteProperty: jt,
  getOwnPropertyDescriptor(e, n) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return e.get(n);
      },
      set: jt,
      deleteProperty: jt
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function kn(e) {
  if (e = typeof e == "function" ? e() : e) {
    return e;
  } else {
    return {};
  }
}
function $o() {
  for (let e = 0, n = this.length; e < n; ++e) {
    const t = this[e]();
    if (t !== undefined) {
      return t;
    }
  }
}
function Xl(...e) {
  let n = false;
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    n = n || !!l && Ee in l;
    e[i] = typeof l == "function" ? (n = true, oe(l)) : l;
  }
  if (n) {
    return new Proxy({
      get(i) {
        for (let l = e.length - 1; l >= 0; l--) {
          const a = kn(e[l])[i];
          if (a !== undefined) {
            return a;
          }
        }
      },
      has(i) {
        for (let l = e.length - 1; l >= 0; l--) {
          if (i in kn(e[l])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const i = [];
        for (let l = 0; l < e.length; l++) {
          i.push(...Object.keys(kn(e[l])));
        }
        return [...new Set(i)];
      }
    }, jn);
  }
  const t = {};
  const r = {};
  let o = false;
  for (let i = e.length - 1; i >= 0; i--) {
    const l = e[i];
    if (!l) {
      continue;
    }
    const a = Object.getOwnPropertyNames(l);
    o = o || i !== 0 && !!a.length;
    for (let p = 0, c = a.length; p < c; p++) {
      const u = a[p];
      if (u !== "__proto__" && u !== "constructor") {
        if (u in t) {
          const v = r[u];
          const m = Object.getOwnPropertyDescriptor(l, u);
          if (v) {
            if (m.get) {
              v.push(m.get.bind(l));
            } else if (m.value !== undefined) {
              v.push(() => m.value);
            }
          } else if (t[u] === undefined) {
            t[u] = m.value;
          }
        } else {
          const v = Object.getOwnPropertyDescriptor(l, u);
          if (v.get) {
            Object.defineProperty(t, u, {
              enumerable: true,
              configurable: true,
              get: $o.bind(r[u] = [v.get.bind(l)])
            });
          } else {
            t[u] = v.value;
          }
        }
      }
    }
  }
  return t;
}
function Zo(e, ...n) {
  if (Ee in e) {
    const o = new Set(n.length > 1 ? n.flat() : n[0]);
    const i = n.map(l => new Proxy({
      get(a) {
        if (l.includes(a)) {
          return e[a];
        } else {
          return undefined;
        }
      },
      has(a) {
        return l.includes(a) && a in e;
      },
      keys() {
        return l.filter(a => a in e);
      }
    }, jn));
    i.push(new Proxy({
      get(l) {
        if (o.has(l)) {
          return undefined;
        } else {
          return e[l];
        }
      },
      has(l) {
        if (o.has(l)) {
          return false;
        } else {
          return l in e;
        }
      },
      keys() {
        return Object.keys(e).filter(l => !o.has(l));
      }
    }, jn));
    return i;
  }
  const t = {};
  const r = n.map(() => ({}));
  for (const o of Object.getOwnPropertyNames(e)) {
    const i = Object.getOwnPropertyDescriptor(e, o);
    const l = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let a = false;
    let p = 0;
    for (const c of n) {
      if (c.includes(o)) {
        a = true;
        if (l) {
          r[p][o] = i.value;
        } else {
          Object.defineProperty(r[p], o, i);
        }
      }
      ++p;
    }
    if (!a) {
      if (l) {
        t[o] = i.value;
      } else {
        Object.defineProperty(t, o, i);
      }
    }
  }
  return [...r, t];
}
const Ui = e => `Stale read from <${e}>.`;
function Yl(e) {
  const n = "fallback" in e && {
    fallback: () => e.fallback
  };
  return oe(Bo(() => e.each, e.children, n || undefined));
}
function Ar(e) {
  const n = "fallback" in e && {
    fallback: () => e.fallback
  };
  return oe(Po(() => e.each, e.children, n || undefined));
}
function kr(e) {
  const n = e.keyed;
  const t = oe(() => e.when, undefined, {
    equals: (r, o) => n ? r === o : !r == !o
  });
  return oe(() => {
    const r = t();
    if (r) {
      const o = e.children;
      if (typeof o == "function" && o.length > 0) {
        return fe(() => o(n ? r : () => {
          if (!fe(t)) {
            throw Ui("Show");
          }
          return e.when;
        }));
      } else {
        return o;
      }
    }
    return e.fallback;
  }, undefined, undefined);
}
function ql(e) {
  let n = false;
  const t = (i, l) => i[0] === l[0] && (n ? i[1] === l[1] : !i[1] == !l[1]) && i[2] === l[2];
  const r = ur(() => e.children);
  const o = oe(() => {
    let i = r();
    if (!Array.isArray(i)) {
      i = [i];
    }
    for (let l = 0; l < i.length; l++) {
      const a = i[l].when;
      if (a) {
        n = !!i[l].keyed;
        return [l, a, i[l]];
      }
    }
    return [-1];
  }, undefined, {
    equals: t
  });
  return oe(() => {
    const [i, l, a] = o();
    if (i < 0) {
      return e.fallback;
    }
    const p = a.children;
    if (typeof p == "function" && p.length > 0) {
      return fe(() => p(n ? l : () => {
        if (fe(o)[0] !== i) {
          throw Ui("Match");
        }
        return a.when;
      }));
    } else {
      return p;
    }
  }, undefined, undefined);
}
function Wl(e) {
  return e;
}
const Ho = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Go = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...Ho]);
const Ko = new Set(["innerHTML", "textContent", "innerText", "children"]);
const jo = Object.assign(Object.create(null), {
  className: "class",
  htmlFor: "for"
});
const Vo = Object.assign(Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function Xo(e, n) {
  const t = Vo[e];
  if (typeof t == "object") {
    if (t[n]) {
      return t.$;
    } else {
      return undefined;
    }
  } else {
    return t;
  }
}
const Yo = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const qo = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]);
const Wo = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Jo(e, n, t) {
  let r = t.length;
  let o = n.length;
  let i = r;
  let l = 0;
  let a = 0;
  let p = n[o - 1].nextSibling;
  let c = null;
  while (l < o || a < i) {
    if (n[l] === t[a]) {
      l++;
      a++;
      continue;
    }
    while (n[o - 1] === t[i - 1]) {
      o--;
      i--;
    }
    if (o === l) {
      const u = i < r ? a ? t[a - 1].nextSibling : t[i - a] : p;
      while (a < i) {
        e.insertBefore(t[a++], u);
      }
    } else if (i === a) {
      while (l < o) {
        if (!c || !c.has(n[l])) {
          n[l].remove();
        }
        l++;
      }
    } else if (n[l] === t[i - 1] && t[a] === n[o - 1]) {
      const u = n[--o].nextSibling;
      e.insertBefore(t[a++], n[l++].nextSibling);
      e.insertBefore(t[--i], u);
      n[o] = t[i];
    } else {
      if (!c) {
        c = new Map();
        let v = a;
        while (v < i) {
          c.set(t[v], v++);
        }
      }
      const u = c.get(n[l]);
      if (u != null) {
        if (a < u && u < i) {
          let v = l;
          let m = 1;
          let g;
          while (++v < o && v < i && (g = c.get(n[v])) != null && g === u + m) {
            m++;
          }
          if (m > u - a) {
            const S = n[l];
            while (a < u) {
              e.insertBefore(t[a++], S);
            }
          } else {
            e.replaceChild(t[a++], n[l++]);
          }
        } else {
          l++;
        }
      } else {
        n[l++].remove();
      }
    }
  }
}
const Sr = "_$DX_DELEGATE";
function Jl(e, n, t, r = {}) {
  let o;
  ft(i => {
    o = i;
    if (n === document) {
      e();
    } else {
      zi(n, e(), n.firstChild ? null : undefined, t);
    }
  }, r.owner);
  return () => {
    o();
    n.textContent = "";
  };
}
function Qo(e, n, t) {
  let r;
  const o = () => {
    const l = document.createElement("template");
    l.innerHTML = e;
    if (t) {
      return l.content.firstChild.firstChild;
    } else {
      return l.content.firstChild;
    }
  };
  const i = n ? () => fe(() => document.importNode(r ||= o(), true)) : () => (r ||= o()).cloneNode(true);
  i.cloneNode = i;
  return i;
}
function Di(e, n = window.document) {
  const t = n[Sr] ||= new Set();
  for (let r = 0, o = e.length; r < o; r++) {
    const i = e[r];
    if (!t.has(i)) {
      t.add(i);
      n.addEventListener(i, sa);
    }
  }
}
function cn(e, n, t) {
  if (t == null) {
    e.removeAttribute(n);
  } else {
    e.setAttribute(n, t);
  }
}
function ea(e, n, t, r) {
  if (r == null) {
    e.removeAttributeNS(n, t);
  } else {
    e.setAttributeNS(n, t, r);
  }
}
function ta(e, n) {
  if (n == null) {
    e.removeAttribute("class");
  } else {
    e.className = n;
  }
}
function na(e, n, t, r) {
  if (r) {
    if (Array.isArray(t)) {
      e[`$$${n}`] = t[0];
      e[`$$${n}Data`] = t[1];
    } else {
      e[`$$${n}`] = t;
    }
  } else if (Array.isArray(t)) {
    const o = t[0];
    e.addEventListener(n, t[0] = i => o.call(e, t[1], i));
  } else {
    e.addEventListener(n, t);
  }
}
function ra(e, n, t = {}) {
  const r = Object.keys(n || {});
  const o = Object.keys(t);
  let i;
  let l;
  i = 0;
  l = o.length;
  for (; i < l; i++) {
    const a = o[i];
    if (!!a && a !== "undefined" && !n[a]) {
      Tr(e, a, false);
      delete t[a];
    }
  }
  i = 0;
  l = r.length;
  for (; i < l; i++) {
    const a = r[i];
    const p = !!n[a];
    if (!!a && a !== "undefined" && t[a] !== p && !!p) {
      Tr(e, a, true);
      t[a] = p;
    }
  }
  return t;
}
function Ri(e, n, t) {
  if (!n) {
    if (t) {
      return cn(e, "style");
    } else {
      return n;
    }
  }
  const r = e.style;
  if (typeof n == "string") {
    return r.cssText = n;
  }
  if (typeof t == "string") {
    r.cssText = t = undefined;
  }
  t ||= {};
  n ||= {};
  let o;
  let i;
  for (i in t) {
    if (n[i] == null) {
      r.removeProperty(i);
    }
    delete t[i];
  }
  for (i in n) {
    o = n[i];
    if (o !== t[i]) {
      r.setProperty(i, o);
      t[i] = o;
    }
  }
  return t;
}
function ia(e, n = {}, t, r) {
  const o = {};
  if (!r) {
    Ze(() => o.children = ct(e, n.children, o.children));
  }
  Ze(() => n.ref && n.ref(e));
  Ze(() => aa(e, n, t, true, o, true));
  return o;
}
function oa(e, n, t) {
  return fe(() => e(n, t));
}
function zi(e, n, t, r) {
  if (t !== undefined && !r) {
    r = [];
  }
  if (typeof n != "function") {
    return ct(e, n, r, t);
  }
  Ze(o => ct(e, n(), o, t), r);
}
function aa(e, n, t, r, o = {}, i = false) {
  n ||= {};
  for (const l in o) {
    if (!(l in n)) {
      if (l === "children") {
        continue;
      }
      o[l] = Fr(e, l, null, o[l], t, i);
    }
  }
  for (const l in n) {
    if (l === "children") {
      if (!r) {
        ct(e, n.children);
      }
      continue;
    }
    const a = n[l];
    o[l] = Fr(e, l, a, o[l], t, i);
  }
}
function fa(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (n, t) => t.toUpperCase());
}
function Tr(e, n, t) {
  const r = n.trim().split(/\s+/);
  for (let o = 0, i = r.length; o < i; o++) {
    e.classList.toggle(r[o], t);
  }
}
function Fr(e, n, t, r, o, i) {
  let l;
  let a;
  let p;
  let c;
  let u;
  if (n === "style") {
    return Ri(e, t, r);
  }
  if (n === "classList") {
    return ra(e, t, r);
  }
  if (t === r) {
    return r;
  }
  if (n === "ref") {
    if (!i) {
      t(e);
    }
  } else if (n.slice(0, 3) === "on:") {
    const v = n.slice(3);
    if (r) {
      e.removeEventListener(v, r);
    }
    if (t) {
      e.addEventListener(v, t);
    }
  } else if (n.slice(0, 10) === "oncapture:") {
    const v = n.slice(10);
    if (r) {
      e.removeEventListener(v, r, true);
    }
    if (t) {
      e.addEventListener(v, t, true);
    }
  } else if (n.slice(0, 2) === "on") {
    const v = n.slice(2).toLowerCase();
    const m = Yo.has(v);
    if (!m && r) {
      const g = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(v, g);
    }
    if (m || t) {
      na(e, v, t, m);
      if (m) {
        Di([v]);
      }
    }
  } else if (n.slice(0, 5) === "attr:") {
    cn(e, n.slice(5), t);
  } else if ((u = n.slice(0, 5) === "prop:") || (p = Ko.has(n)) || !o && ((c = Xo(n, e.tagName)) || (a = Go.has(n))) || (l = e.nodeName.includes("-"))) {
    if (u) {
      n = n.slice(5);
      a = true;
    }
    if (n === "class" || n === "className") {
      ta(e, t);
    } else if (l && !a && !p) {
      e[fa(n)] = t;
    } else {
      e[c || n] = t;
    }
  } else {
    const v = o && n.indexOf(":") > -1 && Wo[n.split(":")[0]];
    if (v) {
      ea(e, v, n, t);
    } else {
      cn(e, jo[n] || n, t);
    }
  }
  return t;
}
function sa(e) {
  const n = `$$${e.type}`;
  let t = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== t) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: t
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return t || document;
    }
  });
  while (t) {
    const r = t[n];
    if (r && !t.disabled) {
      const o = t[`${n}Data`];
      if (o !== undefined) {
        r.call(t, o, e);
      } else {
        r.call(t, e);
      }
      if (e.cancelBubble) {
        return;
      }
    }
    t = t._$host || t.parentNode || t.host;
  }
}
function ct(e, n, t, r, o) {
  while (typeof t == "function") {
    t = t();
  }
  if (n === t) {
    return t;
  }
  const i = typeof n;
  const l = r !== undefined;
  e = l && t[0] && t[0].parentNode || e;
  if (i === "string" || i === "number") {
    if (i === "number") {
      n = n.toString();
    }
    if (l) {
      let a = t[0];
      if (a && a.nodeType === 3) {
        a.data = n;
      } else {
        a = document.createTextNode(n);
      }
      t = rt(e, t, r, a);
    } else if (t !== "" && typeof t == "string") {
      t = e.firstChild.data = n;
    } else {
      t = e.textContent = n;
    }
  } else if (n == null || i === "boolean") {
    t = rt(e, t, r);
  } else {
    if (i === "function") {
      Ze(() => {
        let a = n();
        while (typeof a == "function") {
          a = a();
        }
        t = ct(e, a, t, r);
      });
      return () => t;
    }
    if (Array.isArray(n)) {
      const a = [];
      const p = t && Array.isArray(t);
      if (Vn(a, n, t, o)) {
        Ze(() => t = ct(e, a, t, r, true));
        return () => t;
      }
      if (a.length === 0) {
        t = rt(e, t, r);
        if (l) {
          return t;
        }
      } else if (p) {
        if (t.length === 0) {
          Ir(e, a, r);
        } else {
          Jo(e, t, a);
        }
      } else {
        if (t) {
          rt(e);
        }
        Ir(e, a);
      }
      t = a;
    } else if (n.nodeType) {
      if (Array.isArray(t)) {
        if (l) {
          return t = rt(e, t, r, n);
        }
        rt(e, t, null, n);
      } else if (t == null || t === "" || !e.firstChild) {
        e.appendChild(n);
      } else {
        e.replaceChild(n, e.firstChild);
      }
      t = n;
    } else {
      console.warn("Unrecognized value. Skipped inserting", n);
    }
  }
  return t;
}
function Vn(e, n, t, r) {
  let o = false;
  for (let i = 0, l = n.length; i < l; i++) {
    let a = n[i];
    let p = t && t[i];
    let c;
    if (a != null && a !== true && a !== false) {
      if ((c = typeof a) == "object" && a.nodeType) {
        e.push(a);
      } else if (Array.isArray(a)) {
        o = Vn(e, a, p) || o;
      } else if (c === "function") {
        if (r) {
          while (typeof a == "function") {
            a = a();
          }
          o = Vn(e, Array.isArray(a) ? a : [a], Array.isArray(p) ? p : [p]) || o;
        } else {
          e.push(a);
          o = true;
        }
      } else {
        const u = String(a);
        if (p && p.nodeType === 3 && p.data === u) {
          e.push(p);
        } else {
          e.push(document.createTextNode(u));
        }
      }
    }
  }
  return o;
}
function Ir(e, n, t = null) {
  for (let r = 0, o = n.length; r < o; r++) {
    e.insertBefore(n[r], t);
  }
}
function rt(e, n, t, r) {
  if (t === undefined) {
    return e.textContent = "";
  }
  const o = r || document.createTextNode("");
  if (n.length) {
    let i = false;
    for (let l = n.length - 1; l >= 0; l--) {
      const a = n[l];
      if (o !== a) {
        const p = a.parentNode === e;
        if (!i && !l) {
          if (p) {
            e.replaceChild(o, a);
          } else {
            e.insertBefore(o, t);
          }
        } else if (p) {
          a.remove();
        }
      } else {
        i = true;
      }
    }
  } else {
    e.insertBefore(o, t);
  }
  return [o];
}
const la = "http://www.w3.org/2000/svg";
function ca(e, n = false) {
  if (n) {
    return document.createElementNS(la, e);
  } else {
    return document.createElement(e);
  }
}
function ua(e) {
  const [n, t] = Zo(e, ["component"]);
  const r = oe(() => n.component);
  return oe(() => {
    const o = r();
    switch (typeof o) {
      case "function":
        Object.assign(o, {
          [Uo]: true
        });
        return fe(() => o(t));
      case "string":
        const i = qo.has(o);
        const l = ca(o, i);
        ia(l, t, i);
        return l;
    }
  });
}
let Vt;
const ha = new Uint8Array(16);
function da() {
  if (!Vt && (Vt = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Vt)) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return Vt(ha);
}
const _a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function pa(e) {
  return typeof e == "string" && _a.test(e);
}
const se = [];
for (let e = 0; e < 256; ++e) {
  se.push((e + 256).toString(16).slice(1));
}
function Li(e, n = 0) {
  return se[e[n + 0]] + se[e[n + 1]] + se[e[n + 2]] + se[e[n + 3]] + "-" + se[e[n + 4]] + se[e[n + 5]] + "-" + se[e[n + 6]] + se[e[n + 7]] + "-" + se[e[n + 8]] + se[e[n + 9]] + "-" + se[e[n + 10]] + se[e[n + 11]] + se[e[n + 12]] + se[e[n + 13]] + se[e[n + 14]] + se[e[n + 15]];
}
function wa(e) {
  if (!pa(e)) {
    throw TypeError("Invalid UUID");
  }
  let n;
  const t = new Uint8Array(16);
  t[0] = (n = parseInt(e.slice(0, 8), 16)) >>> 24;
  t[1] = n >>> 16 & 255;
  t[2] = n >>> 8 & 255;
  t[3] = n & 255;
  t[4] = (n = parseInt(e.slice(9, 13), 16)) >>> 8;
  t[5] = n & 255;
  t[6] = (n = parseInt(e.slice(14, 18), 16)) >>> 8;
  t[7] = n & 255;
  t[8] = (n = parseInt(e.slice(19, 23), 16)) >>> 8;
  t[9] = n & 255;
  t[10] = (n = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255;
  t[11] = n / 4294967296 & 255;
  t[12] = n >>> 24 & 255;
  t[13] = n >>> 16 & 255;
  t[14] = n >>> 8 & 255;
  t[15] = n & 255;
  return t;
}
function ga(e) {
  e = unescape(encodeURIComponent(e));
  const n = [];
  for (let t = 0; t < e.length; ++t) {
    n.push(e.charCodeAt(t));
  }
  return n;
}
const xa = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const ya = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function ma(e, n, t) {
  function r(o, i, l, a) {
    if (typeof o == "string") {
      o = ga(o);
    }
    if (typeof i == "string") {
      i = wa(i);
    }
    if (i?.length !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let c = new Uint8Array(16 + o.length);
    c.set(i);
    c.set(o, i.length);
    c = t(c);
    c[6] = c[6] & 15 | n;
    c[8] = c[8] & 63 | 128;
    if (l) {
      a = a || 0;
      for (let u = 0; u < 16; ++u) {
        l[a + u] = c[u];
      }
      return l;
    }
    return Li(c);
  }
  try {
    r.name = e;
  } catch {}
  r.DNS = xa;
  r.URL = ya;
  return r;
}
const ba = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Cr = {
  randomUUID: ba
};
function Ql(e, n, t) {
  if (Cr.randomUUID && !n && !e) {
    return Cr.randomUUID();
  }
  e = e || {};
  const r = e.random || (e.rng || da)();
  r[6] = r[6] & 15 | 64;
  r[8] = r[8] & 63 | 128;
  if (n) {
    t = t || 0;
    for (let o = 0; o < 16; ++o) {
      n[t + o] = r[o];
    }
    return n;
  }
  return Li(r);
}
function va(e, n, t, r) {
  switch (e) {
    case 0:
      return n & t ^ ~n & r;
    case 1:
      return n ^ t ^ r;
    case 2:
      return n & t ^ n & r ^ t & r;
    case 3:
      return n ^ t ^ r;
  }
}
function Sn(e, n) {
  return e << n | e >>> 32 - n;
}
function Ea(e) {
  const n = [1518500249, 1859775393, 2400959708, 3395469782];
  const t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof e == "string") {
    const l = unescape(encodeURIComponent(e));
    e = [];
    for (let a = 0; a < l.length; ++a) {
      e.push(l.charCodeAt(a));
    }
  } else if (!Array.isArray(e)) {
    e = Array.prototype.slice.call(e);
  }
  e.push(128);
  const r = e.length / 4 + 2;
  const o = Math.ceil(r / 16);
  const i = new Array(o);
  for (let l = 0; l < o; ++l) {
    const a = new Uint32Array(16);
    for (let p = 0; p < 16; ++p) {
      a[p] = e[l * 64 + p * 4] << 24 | e[l * 64 + p * 4 + 1] << 16 | e[l * 64 + p * 4 + 2] << 8 | e[l * 64 + p * 4 + 3];
    }
    i[l] = a;
  }
  i[o - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32);
  i[o - 1][14] = Math.floor(i[o - 1][14]);
  i[o - 1][15] = (e.length - 1) * 8 & -1;
  for (let l = 0; l < o; ++l) {
    const a = new Uint32Array(80);
    for (let g = 0; g < 16; ++g) {
      a[g] = i[l][g];
    }
    for (let g = 16; g < 80; ++g) {
      a[g] = Sn(a[g - 3] ^ a[g - 8] ^ a[g - 14] ^ a[g - 16], 1);
    }
    let p = t[0];
    let c = t[1];
    let u = t[2];
    let v = t[3];
    let m = t[4];
    for (let g = 0; g < 80; ++g) {
      const S = Math.floor(g / 20);
      const R = Sn(p, 5) + va(S, c, u, v) + m + n[S] + a[g] >>> 0;
      m = v;
      v = u;
      u = Sn(c, 30) >>> 0;
      c = p;
      p = R;
    }
    t[0] = t[0] + p >>> 0;
    t[1] = t[1] + c >>> 0;
    t[2] = t[2] + u >>> 0;
    t[3] = t[3] + v >>> 0;
    t[4] = t[4] + m >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
const Aa = ma("v5", 80, Ea);
const e0 = Aa;
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const ka = 4;
const Ur = 0;
const Dr = 1;
const Sa = 2;
function pt(e) {
  let n = e.length;
  while (--n >= 0) {
    e[n] = 0;
  }
}
const Ta = 0;
const Mi = 1;
const Fa = 2;
const Ia = 3;
const Ca = 258;
const hr = 29;
const Pt = 256;
const Ct = Pt + 1 + hr;
const st = 30;
const dr = 19;
const Oi = Ct * 2 + 1;
const je = 15;
const Tn = 16;
const Ua = 7;
const _r = 256;
const Ni = 16;
const Bi = 17;
const Pi = 18;
const Xn = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
const Qt = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
const Da = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
const $i = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
const Ra = 512;
const Re = new Array((Ct + 2) * 2);
pt(Re);
const Tt = new Array(st * 2);
pt(Tt);
const Ut = new Array(Ra);
pt(Ut);
const Dt = new Array(Ca - Ia + 1);
pt(Dt);
const pr = new Array(hr);
pt(pr);
const un = new Array(st);
pt(un);
function Fn(e, n, t, r, o) {
  this.static_tree = e;
  this.extra_bits = n;
  this.extra_base = t;
  this.elems = r;
  this.max_length = o;
  this.has_stree = e && e.length;
}
let Zi;
let Hi;
let Gi;
function In(e, n) {
  this.dyn_tree = e;
  this.max_code = 0;
  this.stat_desc = n;
}
const Ki = e => e < 256 ? Ut[e] : Ut[256 + (e >>> 7)];
const Rt = (e, n) => {
  e.pending_buf[e.pending++] = n & 255;
  e.pending_buf[e.pending++] = n >>> 8 & 255;
};
const _e = (e, n, t) => {
  if (e.bi_valid > Tn - t) {
    e.bi_buf |= n << e.bi_valid & 65535;
    Rt(e, e.bi_buf);
    e.bi_buf = n >> Tn - e.bi_valid;
    e.bi_valid += t - Tn;
  } else {
    e.bi_buf |= n << e.bi_valid & 65535;
    e.bi_valid += t;
  }
};
const Te = (e, n, t) => {
  _e(e, t[n * 2], t[n * 2 + 1]);
};
const ji = (e, n) => {
  let t = 0;
  do {
    t |= e & 1;
    e >>>= 1;
    t <<= 1;
  } while (--n > 0);
  return t >>> 1;
};
const za = e => {
  if (e.bi_valid === 16) {
    Rt(e, e.bi_buf);
    e.bi_buf = 0;
    e.bi_valid = 0;
  } else if (e.bi_valid >= 8) {
    e.pending_buf[e.pending++] = e.bi_buf & 255;
    e.bi_buf >>= 8;
    e.bi_valid -= 8;
  }
};
const La = (e, n) => {
  const t = n.dyn_tree;
  const r = n.max_code;
  const o = n.stat_desc.static_tree;
  const i = n.stat_desc.has_stree;
  const l = n.stat_desc.extra_bits;
  const a = n.stat_desc.extra_base;
  const p = n.stat_desc.max_length;
  let c;
  let u;
  let v;
  let m;
  let g;
  let S;
  let R = 0;
  for (m = 0; m <= je; m++) {
    e.bl_count[m] = 0;
  }
  t[e.heap[e.heap_max] * 2 + 1] = 0;
  c = e.heap_max + 1;
  for (; c < Oi; c++) {
    u = e.heap[c];
    m = t[t[u * 2 + 1] * 2 + 1] + 1;
    if (m > p) {
      m = p;
      R++;
    }
    t[u * 2 + 1] = m;
    if (!(u > r)) {
      e.bl_count[m]++;
      g = 0;
      if (u >= a) {
        g = l[u - a];
      }
      S = t[u * 2];
      e.opt_len += S * (m + g);
      if (i) {
        e.static_len += S * (o[u * 2 + 1] + g);
      }
    }
  }
  if (R !== 0) {
    do {
      for (m = p - 1; e.bl_count[m] === 0;) {
        m--;
      }
      e.bl_count[m]--;
      e.bl_count[m + 1] += 2;
      e.bl_count[p]--;
      R -= 2;
    } while (R > 0);
    for (m = p; m !== 0; m--) {
      for (u = e.bl_count[m]; u !== 0;) {
        v = e.heap[--c];
        if (!(v > r)) {
          if (t[v * 2 + 1] !== m) {
            e.opt_len += (m - t[v * 2 + 1]) * t[v * 2];
            t[v * 2 + 1] = m;
          }
          u--;
        }
      }
    }
  }
};
const Vi = (e, n, t) => {
  const r = new Array(je + 1);
  let o = 0;
  let i;
  let l;
  for (i = 1; i <= je; i++) {
    o = o + t[i - 1] << 1;
    r[i] = o;
  }
  for (l = 0; l <= n; l++) {
    let a = e[l * 2 + 1];
    if (a !== 0) {
      e[l * 2] = ji(r[a]++, a);
    }
  }
};
const Ma = () => {
  let e;
  let n;
  let t;
  let r;
  let o;
  const i = new Array(je + 1);
  t = 0;
  r = 0;
  for (; r < hr - 1; r++) {
    pr[r] = t;
    e = 0;
    for (; e < 1 << Xn[r]; e++) {
      Dt[t++] = r;
    }
  }
  Dt[t - 1] = r;
  o = 0;
  r = 0;
  for (; r < 16; r++) {
    un[r] = o;
    e = 0;
    for (; e < 1 << Qt[r]; e++) {
      Ut[o++] = r;
    }
  }
  for (o >>= 7; r < st; r++) {
    un[r] = o << 7;
    e = 0;
    for (; e < 1 << Qt[r] - 7; e++) {
      Ut[256 + o++] = r;
    }
  }
  for (n = 0; n <= je; n++) {
    i[n] = 0;
  }
  for (e = 0; e <= 143;) {
    Re[e * 2 + 1] = 8;
    e++;
    i[8]++;
  }
  while (e <= 255) {
    Re[e * 2 + 1] = 9;
    e++;
    i[9]++;
  }
  while (e <= 279) {
    Re[e * 2 + 1] = 7;
    e++;
    i[7]++;
  }
  while (e <= 287) {
    Re[e * 2 + 1] = 8;
    e++;
    i[8]++;
  }
  Vi(Re, Ct + 1, i);
  e = 0;
  for (; e < st; e++) {
    Tt[e * 2 + 1] = 5;
    Tt[e * 2] = ji(e, 5);
  }
  Zi = new Fn(Re, Xn, Pt + 1, Ct, je);
  Hi = new Fn(Tt, Qt, 0, st, je);
  Gi = new Fn(new Array(0), Da, 0, dr, Ua);
};
const Xi = e => {
  let n;
  for (n = 0; n < Ct; n++) {
    e.dyn_ltree[n * 2] = 0;
  }
  for (n = 0; n < st; n++) {
    e.dyn_dtree[n * 2] = 0;
  }
  for (n = 0; n < dr; n++) {
    e.bl_tree[n * 2] = 0;
  }
  e.dyn_ltree[_r * 2] = 1;
  e.opt_len = e.static_len = 0;
  e.sym_next = e.matches = 0;
};
const Yi = e => {
  if (e.bi_valid > 8) {
    Rt(e, e.bi_buf);
  } else if (e.bi_valid > 0) {
    e.pending_buf[e.pending++] = e.bi_buf;
  }
  e.bi_buf = 0;
  e.bi_valid = 0;
};
const Rr = (e, n, t, r) => {
  const o = n * 2;
  const i = t * 2;
  return e[o] < e[i] || e[o] === e[i] && r[n] <= r[t];
};
const Cn = (e, n, t) => {
  const r = e.heap[t];
  let o = t << 1;
  while (o <= e.heap_len && (o < e.heap_len && Rr(n, e.heap[o + 1], e.heap[o], e.depth) && o++, !Rr(n, r, e.heap[o], e.depth))) {
    e.heap[t] = e.heap[o];
    t = o;
    o <<= 1;
  }
  e.heap[t] = r;
};
const zr = (e, n, t) => {
  let r;
  let o;
  let i = 0;
  let l;
  let a;
  if (e.sym_next !== 0) {
    do {
      r = e.pending_buf[e.sym_buf + i++] & 255;
      r += (e.pending_buf[e.sym_buf + i++] & 255) << 8;
      o = e.pending_buf[e.sym_buf + i++];
      if (r === 0) {
        Te(e, o, n);
      } else {
        l = Dt[o];
        Te(e, l + Pt + 1, n);
        a = Xn[l];
        if (a !== 0) {
          o -= pr[l];
          _e(e, o, a);
        }
        r--;
        l = Ki(r);
        Te(e, l, t);
        a = Qt[l];
        if (a !== 0) {
          r -= un[l];
          _e(e, r, a);
        }
      }
    } while (i < e.sym_next);
  }
  Te(e, _r, n);
};
const Yn = (e, n) => {
  const t = n.dyn_tree;
  const r = n.stat_desc.static_tree;
  const o = n.stat_desc.has_stree;
  const i = n.stat_desc.elems;
  let l;
  let a;
  let p = -1;
  let c;
  e.heap_len = 0;
  e.heap_max = Oi;
  l = 0;
  for (; l < i; l++) {
    if (t[l * 2] !== 0) {
      e.heap[++e.heap_len] = p = l;
      e.depth[l] = 0;
    } else {
      t[l * 2 + 1] = 0;
    }
  }
  while (e.heap_len < 2) {
    c = e.heap[++e.heap_len] = p < 2 ? ++p : 0;
    t[c * 2] = 1;
    e.depth[c] = 0;
    e.opt_len--;
    if (o) {
      e.static_len -= r[c * 2 + 1];
    }
  }
  n.max_code = p;
  l = e.heap_len >> 1;
  for (; l >= 1; l--) {
    Cn(e, t, l);
  }
  c = i;
  do {
    l = e.heap[1];
    e.heap[1] = e.heap[e.heap_len--];
    Cn(e, t, 1);
    a = e.heap[1];
    e.heap[--e.heap_max] = l;
    e.heap[--e.heap_max] = a;
    t[c * 2] = t[l * 2] + t[a * 2];
    e.depth[c] = (e.depth[l] >= e.depth[a] ? e.depth[l] : e.depth[a]) + 1;
    t[l * 2 + 1] = t[a * 2 + 1] = c;
    e.heap[1] = c++;
    Cn(e, t, 1);
  } while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[1];
  La(e, n);
  Vi(t, p, e.bl_count);
};
const Lr = (e, n, t) => {
  let r;
  let o = -1;
  let i;
  let l = n[1];
  let a = 0;
  let p = 7;
  let c = 4;
  if (l === 0) {
    p = 138;
    c = 3;
  }
  n[(t + 1) * 2 + 1] = 65535;
  r = 0;
  for (; r <= t; r++) {
    i = l;
    l = n[(r + 1) * 2 + 1];
    if (!(++a < p) || i !== l) {
      if (a < c) {
        e.bl_tree[i * 2] += a;
      } else if (i !== 0) {
        if (i !== o) {
          e.bl_tree[i * 2]++;
        }
        e.bl_tree[Ni * 2]++;
      } else if (a <= 10) {
        e.bl_tree[Bi * 2]++;
      } else {
        e.bl_tree[Pi * 2]++;
      }
      a = 0;
      o = i;
      if (l === 0) {
        p = 138;
        c = 3;
      } else if (i === l) {
        p = 6;
        c = 3;
      } else {
        p = 7;
        c = 4;
      }
    }
  }
};
const Mr = (e, n, t) => {
  let r;
  let o = -1;
  let i;
  let l = n[1];
  let a = 0;
  let p = 7;
  let c = 4;
  if (l === 0) {
    p = 138;
    c = 3;
  }
  r = 0;
  for (; r <= t; r++) {
    i = l;
    l = n[(r + 1) * 2 + 1];
    if (!(++a < p) || i !== l) {
      if (a < c) {
        do {
          Te(e, i, e.bl_tree);
        } while (--a !== 0);
      } else if (i !== 0) {
        if (i !== o) {
          Te(e, i, e.bl_tree);
          a--;
        }
        Te(e, Ni, e.bl_tree);
        _e(e, a - 3, 2);
      } else if (a <= 10) {
        Te(e, Bi, e.bl_tree);
        _e(e, a - 3, 3);
      } else {
        Te(e, Pi, e.bl_tree);
        _e(e, a - 11, 7);
      }
      a = 0;
      o = i;
      if (l === 0) {
        p = 138;
        c = 3;
      } else if (i === l) {
        p = 6;
        c = 3;
      } else {
        p = 7;
        c = 4;
      }
    }
  }
};
const Oa = e => {
  let n;
  Lr(e, e.dyn_ltree, e.l_desc.max_code);
  Lr(e, e.dyn_dtree, e.d_desc.max_code);
  Yn(e, e.bl_desc);
  n = dr - 1;
  for (; n >= 3 && e.bl_tree[$i[n] * 2 + 1] === 0; n--);
  e.opt_len += (n + 1) * 3 + 5 + 5 + 4;
  return n;
};
const Na = (e, n, t, r) => {
  let o;
  _e(e, n - 257, 5);
  _e(e, t - 1, 5);
  _e(e, r - 4, 4);
  o = 0;
  for (; o < r; o++) {
    _e(e, e.bl_tree[$i[o] * 2 + 1], 3);
  }
  Mr(e, e.dyn_ltree, n - 1);
  Mr(e, e.dyn_dtree, t - 1);
};
const Ba = e => {
  let n = 4093624447;
  let t;
  for (t = 0; t <= 31; t++, n >>>= 1) {
    if (n & 1 && e.dyn_ltree[t * 2] !== 0) {
      return Ur;
    }
  }
  if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
    return Dr;
  }
  for (t = 32; t < Pt; t++) {
    if (e.dyn_ltree[t * 2] !== 0) {
      return Dr;
    }
  }
  return Ur;
};
let Or = false;
const Pa = e => {
  if (!Or) {
    Ma();
    Or = true;
  }
  e.l_desc = new In(e.dyn_ltree, Zi);
  e.d_desc = new In(e.dyn_dtree, Hi);
  e.bl_desc = new In(e.bl_tree, Gi);
  e.bi_buf = 0;
  e.bi_valid = 0;
  Xi(e);
};
const qi = (e, n, t, r) => {
  _e(e, (Ta << 1) + (r ? 1 : 0), 3);
  Yi(e);
  Rt(e, t);
  Rt(e, ~t);
  if (t) {
    e.pending_buf.set(e.window.subarray(n, n + t), e.pending);
  }
  e.pending += t;
};
const $a = e => {
  _e(e, Mi << 1, 3);
  Te(e, _r, Re);
  za(e);
};
const Za = (e, n, t, r) => {
  let o;
  let i;
  let l = 0;
  if (e.level > 0) {
    if (e.strm.data_type === Sa) {
      e.strm.data_type = Ba(e);
    }
    Yn(e, e.l_desc);
    Yn(e, e.d_desc);
    l = Oa(e);
    o = e.opt_len + 3 + 7 >>> 3;
    i = e.static_len + 3 + 7 >>> 3;
    if (i <= o) {
      o = i;
    }
  } else {
    o = i = t + 5;
  }
  if (t + 4 <= o && n !== -1) {
    qi(e, n, t, r);
  } else if (e.strategy === ka || i === o) {
    _e(e, (Mi << 1) + (r ? 1 : 0), 3);
    zr(e, Re, Tt);
  } else {
    _e(e, (Fa << 1) + (r ? 1 : 0), 3);
    Na(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, l + 1);
    zr(e, e.dyn_ltree, e.dyn_dtree);
  }
  Xi(e);
  if (r) {
    Yi(e);
  }
};
const Ha = (e, n, t) => {
  e.pending_buf[e.sym_buf + e.sym_next++] = n;
  e.pending_buf[e.sym_buf + e.sym_next++] = n >> 8;
  e.pending_buf[e.sym_buf + e.sym_next++] = t;
  if (n === 0) {
    e.dyn_ltree[t * 2]++;
  } else {
    e.matches++;
    n--;
    e.dyn_ltree[(Dt[t] + Pt + 1) * 2]++;
    e.dyn_dtree[Ki(n) * 2]++;
  }
  return e.sym_next === e.sym_end;
};
var Ga = Pa;
var Ka = qi;
var ja = Za;
var Va = Ha;
var Xa = $a;
var Ya = {
  _tr_init: Ga,
  _tr_stored_block: Ka,
  _tr_flush_block: ja,
  _tr_tally: Va,
  _tr_align: Xa
};
const qa = (e, n, t, r) => {
  let o = e & 65535 | 0;
  let i = e >>> 16 & 65535 | 0;
  let l = 0;
  while (t !== 0) {
    l = t > 2000 ? 2000 : t;
    t -= l;
    do {
      o = o + n[r++] | 0;
      i = i + o | 0;
    } while (--l);
    o %= 65521;
    i %= 65521;
  }
  return o | i << 16 | 0;
};
var zt = qa;
const Wa = () => {
  let e;
  let n = [];
  for (var t = 0; t < 256; t++) {
    e = t;
    for (var r = 0; r < 8; r++) {
      e = e & 1 ? e >>> 1 ^ -306674912 : e >>> 1;
    }
    n[t] = e;
  }
  return n;
};
const Ja = new Uint32Array(Wa());
const Qa = (e, n, t, r) => {
  const o = Ja;
  const i = r + t;
  e ^= -1;
  for (let l = r; l < i; l++) {
    e = e >>> 8 ^ o[(e ^ n[l]) & 255];
  }
  return e ^ -1;
};
var ae = Qa;
var We = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
};
var wt = {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  Z_BINARY: 0,
  Z_TEXT: 1,
  Z_UNKNOWN: 2,
  Z_DEFLATED: 8
};
const {
  _tr_init: ef,
  _tr_stored_block: qn,
  _tr_flush_block: tf,
  _tr_tally: He,
  _tr_align: nf
} = Ya;
const {
  Z_NO_FLUSH: Ge,
  Z_PARTIAL_FLUSH: rf,
  Z_FULL_FLUSH: of,
  Z_FINISH: ye,
  Z_BLOCK: Nr,
  Z_OK: le,
  Z_STREAM_END: Br,
  Z_STREAM_ERROR: Ie,
  Z_DATA_ERROR: af,
  Z_BUF_ERROR: Un,
  Z_DEFAULT_COMPRESSION: ff,
  Z_FILTERED: sf,
  Z_HUFFMAN_ONLY: Xt,
  Z_RLE: lf,
  Z_FIXED: cf,
  Z_DEFAULT_STRATEGY: uf,
  Z_UNKNOWN: hf,
  Z_DEFLATED: mn
} = wt;
const df = 9;
const _f = 15;
const pf = 8;
const wf = 29;
const gf = 256;
const Wn = gf + 1 + wf;
const xf = 30;
const yf = 19;
const mf = Wn * 2 + 1;
const bf = 15;
const q = 3;
const $e = 258;
const Ce = $e + q + 1;
const vf = 32;
const ut = 42;
const wr = 57;
const Jn = 69;
const Qn = 73;
const er = 91;
const tr = 103;
const Ve = 113;
const At = 666;
const de = 1;
const gt = 2;
const Je = 3;
const xt = 4;
const Ef = 3;
const Xe = (e, n) => {
  e.msg = We[n];
  return n;
};
const Pr = e => e * 2 - (e > 4 ? 9 : 0);
const Pe = e => {
  let n = e.length;
  while (--n >= 0) {
    e[n] = 0;
  }
};
const Af = e => {
  let n;
  let t;
  let r;
  let o = e.w_size;
  n = e.hash_size;
  r = n;
  do {
    t = e.head[--r];
    e.head[r] = t >= o ? t - o : 0;
  } while (--n);
  n = o;
  r = n;
  do {
    t = e.prev[--r];
    e.prev[r] = t >= o ? t - o : 0;
  } while (--n);
};
let kf = (e, n, t) => (n << e.hash_shift ^ t) & e.hash_mask;
let Ke = kf;
const pe = e => {
  const n = e.state;
  let t = n.pending;
  if (t > e.avail_out) {
    t = e.avail_out;
  }
  if (t !== 0) {
    e.output.set(n.pending_buf.subarray(n.pending_out, n.pending_out + t), e.next_out);
    e.next_out += t;
    n.pending_out += t;
    e.total_out += t;
    e.avail_out -= t;
    n.pending -= t;
    if (n.pending === 0) {
      n.pending_out = 0;
    }
  }
};
const we = (e, n) => {
  tf(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, n);
  e.block_start = e.strstart;
  pe(e.strm);
};
const W = (e, n) => {
  e.pending_buf[e.pending++] = n;
};
const vt = (e, n) => {
  e.pending_buf[e.pending++] = n >>> 8 & 255;
  e.pending_buf[e.pending++] = n & 255;
};
const nr = (e, n, t, r) => {
  let o = e.avail_in;
  if (o > r) {
    o = r;
  }
  if (o === 0) {
    return 0;
  } else {
    e.avail_in -= o;
    n.set(e.input.subarray(e.next_in, e.next_in + o), t);
    if (e.state.wrap === 1) {
      e.adler = zt(e.adler, n, o, t);
    } else if (e.state.wrap === 2) {
      e.adler = ae(e.adler, n, o, t);
    }
    e.next_in += o;
    e.total_in += o;
    return o;
  }
};
const Wi = (e, n) => {
  let t = e.max_chain_length;
  let r = e.strstart;
  let o;
  let i;
  let l = e.prev_length;
  let a = e.nice_match;
  const p = e.strstart > e.w_size - Ce ? e.strstart - (e.w_size - Ce) : 0;
  const c = e.window;
  const u = e.w_mask;
  const v = e.prev;
  const m = e.strstart + $e;
  let g = c[r + l - 1];
  let S = c[r + l];
  if (e.prev_length >= e.good_match) {
    t >>= 2;
  }
  if (a > e.lookahead) {
    a = e.lookahead;
  }
  do {
    o = n;
    if (c[o + l] === S && c[o + l - 1] === g && c[o] === c[r] && c[++o] === c[r + 1]) {
      r += 2;
      o++;
      do ; while (c[++r] === c[++o] && c[++r] === c[++o] && c[++r] === c[++o] && c[++r] === c[++o] && c[++r] === c[++o] && c[++r] === c[++o] && c[++r] === c[++o] && c[++r] === c[++o] && r < m);
      i = $e - (m - r);
      r = m - $e;
      if (i > l) {
        e.match_start = n;
        l = i;
        if (i >= a) {
          break;
        }
        g = c[r + l - 1];
        S = c[r + l];
      }
    }
  } while ((n = v[n & u]) > p && --t !== 0);
  if (l <= e.lookahead) {
    return l;
  } else {
    return e.lookahead;
  }
};
const ht = e => {
  const n = e.w_size;
  let t;
  let r;
  let o;
  do {
    r = e.window_size - e.lookahead - e.strstart;
    if (e.strstart >= n + (n - Ce)) {
      e.window.set(e.window.subarray(n, n + n - r), 0);
      e.match_start -= n;
      e.strstart -= n;
      e.block_start -= n;
      if (e.insert > e.strstart) {
        e.insert = e.strstart;
      }
      Af(e);
      r += n;
    }
    if (e.strm.avail_in === 0) {
      break;
    }
    t = nr(e.strm, e.window, e.strstart + e.lookahead, r);
    e.lookahead += t;
    if (e.lookahead + e.insert >= q) {
      o = e.strstart - e.insert;
      e.ins_h = e.window[o];
      e.ins_h = Ke(e, e.ins_h, e.window[o + 1]);
      while (e.insert && (e.ins_h = Ke(e, e.ins_h, e.window[o + q - 1]), e.prev[o & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = o, o++, e.insert--, !(e.lookahead + e.insert < q)));
    }
  } while (e.lookahead < Ce && e.strm.avail_in !== 0);
};
const Ji = (e, n) => {
  let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5;
  let r;
  let o;
  let i;
  let l = 0;
  let a = e.strm.avail_in;
  do {
    r = 65535;
    i = e.bi_valid + 42 >> 3;
    if (e.strm.avail_out < i || (i = e.strm.avail_out - i, o = e.strstart - e.block_start, r > o + e.strm.avail_in && (r = o + e.strm.avail_in), r > i && (r = i), r < t && (r === 0 && n !== ye || n === Ge || r !== o + e.strm.avail_in))) {
      break;
    }
    l = n === ye && r === o + e.strm.avail_in ? 1 : 0;
    qn(e, 0, 0, l);
    e.pending_buf[e.pending - 4] = r;
    e.pending_buf[e.pending - 3] = r >> 8;
    e.pending_buf[e.pending - 2] = ~r;
    e.pending_buf[e.pending - 1] = ~r >> 8;
    pe(e.strm);
    if (o) {
      if (o > r) {
        o = r;
      }
      e.strm.output.set(e.window.subarray(e.block_start, e.block_start + o), e.strm.next_out);
      e.strm.next_out += o;
      e.strm.avail_out -= o;
      e.strm.total_out += o;
      e.block_start += o;
      r -= o;
    }
    if (r) {
      nr(e.strm, e.strm.output, e.strm.next_out, r);
      e.strm.next_out += r;
      e.strm.avail_out -= r;
      e.strm.total_out += r;
    }
  } while (l === 0);
  a -= e.strm.avail_in;
  if (a) {
    if (a >= e.w_size) {
      e.matches = 2;
      e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0);
      e.strstart = e.w_size;
      e.insert = e.strstart;
    } else {
      if (e.window_size - e.strstart <= a) {
        e.strstart -= e.w_size;
        e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0);
        if (e.matches < 2) {
          e.matches++;
        }
        if (e.insert > e.strstart) {
          e.insert = e.strstart;
        }
      }
      e.window.set(e.strm.input.subarray(e.strm.next_in - a, e.strm.next_in), e.strstart);
      e.strstart += a;
      e.insert += a > e.w_size - e.insert ? e.w_size - e.insert : a;
    }
    e.block_start = e.strstart;
  }
  if (e.high_water < e.strstart) {
    e.high_water = e.strstart;
  }
  if (l) {
    return xt;
  } else if (n !== Ge && n !== ye && e.strm.avail_in === 0 && e.strstart === e.block_start) {
    return gt;
  } else {
    i = e.window_size - e.strstart;
    if (e.strm.avail_in > i && e.block_start >= e.w_size) {
      e.block_start -= e.w_size;
      e.strstart -= e.w_size;
      e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0);
      if (e.matches < 2) {
        e.matches++;
      }
      i += e.w_size;
      if (e.insert > e.strstart) {
        e.insert = e.strstart;
      }
    }
    if (i > e.strm.avail_in) {
      i = e.strm.avail_in;
    }
    if (i) {
      nr(e.strm, e.window, e.strstart, i);
      e.strstart += i;
      e.insert += i > e.w_size - e.insert ? e.w_size - e.insert : i;
    }
    if (e.high_water < e.strstart) {
      e.high_water = e.strstart;
    }
    i = e.bi_valid + 42 >> 3;
    i = e.pending_buf_size - i > 65535 ? 65535 : e.pending_buf_size - i;
    t = i > e.w_size ? e.w_size : i;
    o = e.strstart - e.block_start;
    if (o >= t || (o || n === ye) && n !== Ge && e.strm.avail_in === 0 && o <= i) {
      r = o > i ? i : o;
      l = n === ye && e.strm.avail_in === 0 && r === o ? 1 : 0;
      qn(e, e.block_start, r, l);
      e.block_start += r;
      pe(e.strm);
    }
    if (l) {
      return Je;
    } else {
      return de;
    }
  }
};
const Dn = (e, n) => {
  let t;
  let r;
  while (true) {
    if (e.lookahead < Ce) {
      ht(e);
      if (e.lookahead < Ce && n === Ge) {
        return de;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    t = 0;
    if (e.lookahead >= q) {
      e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + q - 1]);
      t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    if (t !== 0 && e.strstart - t <= e.w_size - Ce) {
      e.match_length = Wi(e, t);
    }
    if (e.match_length >= q) {
      r = He(e, e.strstart - e.match_start, e.match_length - q);
      e.lookahead -= e.match_length;
      if (e.match_length <= e.max_lazy_match && e.lookahead >= q) {
        e.match_length--;
        do {
          e.strstart++;
          e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + q - 1]);
          t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        } while (--e.match_length !== 0);
        e.strstart++;
      } else {
        e.strstart += e.match_length;
        e.match_length = 0;
        e.ins_h = e.window[e.strstart];
        e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + 1]);
      }
    } else {
      r = He(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (r && (we(e, false), e.strm.avail_out === 0)) {
      return de;
    }
  }
  e.insert = e.strstart < q - 1 ? e.strstart : q - 1;
  if (n === ye) {
    we(e, true);
    if (e.strm.avail_out === 0) {
      return Je;
    } else {
      return xt;
    }
  } else if (e.sym_next && (we(e, false), e.strm.avail_out === 0)) {
    return de;
  } else {
    return gt;
  }
};
const it = (e, n) => {
  let t;
  let r;
  let o;
  while (true) {
    if (e.lookahead < Ce) {
      ht(e);
      if (e.lookahead < Ce && n === Ge) {
        return de;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    t = 0;
    if (e.lookahead >= q) {
      e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + q - 1]);
      t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    e.prev_length = e.match_length;
    e.prev_match = e.match_start;
    e.match_length = q - 1;
    if (t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - Ce) {
      e.match_length = Wi(e, t);
      if (e.match_length <= 5 && (e.strategy === sf || e.match_length === q && e.strstart - e.match_start > 4096)) {
        e.match_length = q - 1;
      }
    }
    if (e.prev_length >= q && e.match_length <= e.prev_length) {
      o = e.strstart + e.lookahead - q;
      r = He(e, e.strstart - 1 - e.prev_match, e.prev_length - q);
      e.lookahead -= e.prev_length - 1;
      e.prev_length -= 2;
      do {
        if (++e.strstart <= o) {
          e.ins_h = Ke(e, e.ins_h, e.window[e.strstart + q - 1]);
          t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        }
      } while (--e.prev_length !== 0);
      e.match_available = 0;
      e.match_length = q - 1;
      e.strstart++;
      if (r && (we(e, false), e.strm.avail_out === 0)) {
        return de;
      }
    } else if (e.match_available) {
      r = He(e, 0, e.window[e.strstart - 1]);
      if (r) {
        we(e, false);
      }
      e.strstart++;
      e.lookahead--;
      if (e.strm.avail_out === 0) {
        return de;
      }
    } else {
      e.match_available = 1;
      e.strstart++;
      e.lookahead--;
    }
  }
  if (e.match_available) {
    r = He(e, 0, e.window[e.strstart - 1]);
    e.match_available = 0;
  }
  e.insert = e.strstart < q - 1 ? e.strstart : q - 1;
  if (n === ye) {
    we(e, true);
    if (e.strm.avail_out === 0) {
      return Je;
    } else {
      return xt;
    }
  } else if (e.sym_next && (we(e, false), e.strm.avail_out === 0)) {
    return de;
  } else {
    return gt;
  }
};
const Sf = (e, n) => {
  let t;
  let r;
  let o;
  let i;
  const l = e.window;
  while (true) {
    if (e.lookahead <= $e) {
      ht(e);
      if (e.lookahead <= $e && n === Ge) {
        return de;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    e.match_length = 0;
    if (e.lookahead >= q && e.strstart > 0 && (o = e.strstart - 1, r = l[o], r === l[++o] && r === l[++o] && r === l[++o])) {
      i = e.strstart + $e;
      do ; while (r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && r === l[++o] && o < i);
      e.match_length = $e - (i - o);
      if (e.match_length > e.lookahead) {
        e.match_length = e.lookahead;
      }
    }
    if (e.match_length >= q) {
      t = He(e, 1, e.match_length - q);
      e.lookahead -= e.match_length;
      e.strstart += e.match_length;
      e.match_length = 0;
    } else {
      t = He(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (t && (we(e, false), e.strm.avail_out === 0)) {
      return de;
    }
  }
  e.insert = 0;
  if (n === ye) {
    we(e, true);
    if (e.strm.avail_out === 0) {
      return Je;
    } else {
      return xt;
    }
  } else if (e.sym_next && (we(e, false), e.strm.avail_out === 0)) {
    return de;
  } else {
    return gt;
  }
};
const Tf = (e, n) => {
  let t;
  while (true) {
    if (e.lookahead === 0 && (ht(e), e.lookahead === 0)) {
      if (n === Ge) {
        return de;
      }
      break;
    }
    e.match_length = 0;
    t = He(e, 0, e.window[e.strstart]);
    e.lookahead--;
    e.strstart++;
    if (t && (we(e, false), e.strm.avail_out === 0)) {
      return de;
    }
  }
  e.insert = 0;
  if (n === ye) {
    we(e, true);
    if (e.strm.avail_out === 0) {
      return Je;
    } else {
      return xt;
    }
  } else if (e.sym_next && (we(e, false), e.strm.avail_out === 0)) {
    return de;
  } else {
    return gt;
  }
};
function Ae(e, n, t, r, o) {
  this.good_length = e;
  this.max_lazy = n;
  this.nice_length = t;
  this.max_chain = r;
  this.func = o;
}
const kt = [new Ae(0, 0, 0, 0, Ji), new Ae(4, 4, 8, 4, Dn), new Ae(4, 5, 16, 8, Dn), new Ae(4, 6, 32, 32, Dn), new Ae(4, 4, 16, 16, it), new Ae(8, 16, 32, 32, it), new Ae(8, 16, 128, 128, it), new Ae(8, 32, 128, 256, it), new Ae(32, 128, 258, 1024, it), new Ae(32, 258, 258, 4096, it)];
const Ff = e => {
  e.window_size = e.w_size * 2;
  Pe(e.head);
  e.max_lazy_match = kt[e.level].max_lazy;
  e.good_match = kt[e.level].good_length;
  e.nice_match = kt[e.level].nice_length;
  e.max_chain_length = kt[e.level].max_chain;
  e.strstart = 0;
  e.block_start = 0;
  e.lookahead = 0;
  e.insert = 0;
  e.match_length = e.prev_length = q - 1;
  e.match_available = 0;
  e.ins_h = 0;
};
function If() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = mn;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = new Uint16Array(mf * 2);
  this.dyn_dtree = new Uint16Array((xf * 2 + 1) * 2);
  this.bl_tree = new Uint16Array((yf * 2 + 1) * 2);
  Pe(this.dyn_ltree);
  Pe(this.dyn_dtree);
  Pe(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(bf + 1);
  this.heap = new Uint16Array(Wn * 2 + 1);
  Pe(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Uint16Array(Wn * 2 + 1);
  Pe(this.depth);
  this.sym_buf = 0;
  this.lit_bufsize = 0;
  this.sym_next = 0;
  this.sym_end = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
const $t = e => {
  if (!e) {
    return 1;
  }
  const n = e.state;
  if (!n || n.strm !== e || n.status !== ut && n.status !== wr && n.status !== Jn && n.status !== Qn && n.status !== er && n.status !== tr && n.status !== Ve && n.status !== At) {
    return 1;
  } else {
    return 0;
  }
};
const Qi = e => {
  if ($t(e)) {
    return Xe(e, Ie);
  }
  e.total_in = e.total_out = 0;
  e.data_type = hf;
  const n = e.state;
  n.pending = 0;
  n.pending_out = 0;
  if (n.wrap < 0) {
    n.wrap = -n.wrap;
  }
  n.status = n.wrap === 2 ? wr : n.wrap ? ut : Ve;
  e.adler = n.wrap === 2 ? 0 : 1;
  n.last_flush = -2;
  ef(n);
  return le;
};
const eo = e => {
  const n = Qi(e);
  if (n === le) {
    Ff(e.state);
  }
  return n;
};
const Cf = (e, n) => $t(e) || e.state.wrap !== 2 ? Ie : (e.state.gzhead = n, le);
const to = (e, n, t, r, o, i) => {
  if (!e) {
    return Ie;
  }
  let l = 1;
  if (n === ff) {
    n = 6;
  }
  if (r < 0) {
    l = 0;
    r = -r;
  } else if (r > 15) {
    l = 2;
    r -= 16;
  }
  if (o < 1 || o > df || t !== mn || r < 8 || r > 15 || n < 0 || n > 9 || i < 0 || i > cf || r === 8 && l !== 1) {
    return Xe(e, Ie);
  }
  if (r === 8) {
    r = 9;
  }
  const a = new If();
  e.state = a;
  a.strm = e;
  a.status = ut;
  a.wrap = l;
  a.gzhead = null;
  a.w_bits = r;
  a.w_size = 1 << a.w_bits;
  a.w_mask = a.w_size - 1;
  a.hash_bits = o + 7;
  a.hash_size = 1 << a.hash_bits;
  a.hash_mask = a.hash_size - 1;
  a.hash_shift = ~~((a.hash_bits + q - 1) / q);
  a.window = new Uint8Array(a.w_size * 2);
  a.head = new Uint16Array(a.hash_size);
  a.prev = new Uint16Array(a.w_size);
  a.lit_bufsize = 1 << o + 6;
  a.pending_buf_size = a.lit_bufsize * 4;
  a.pending_buf = new Uint8Array(a.pending_buf_size);
  a.sym_buf = a.lit_bufsize;
  a.sym_end = (a.lit_bufsize - 1) * 3;
  a.level = n;
  a.strategy = i;
  a.method = t;
  return eo(e);
};
const Uf = (e, n) => to(e, n, mn, _f, pf, uf);
const Df = (e, n) => {
  if ($t(e) || n > Nr || n < 0) {
    if (e) {
      return Xe(e, Ie);
    } else {
      return Ie;
    }
  }
  const t = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || t.status === At && n !== ye) {
    return Xe(e, e.avail_out === 0 ? Un : Ie);
  }
  const r = t.last_flush;
  t.last_flush = n;
  if (t.pending !== 0) {
    pe(e);
    if (e.avail_out === 0) {
      t.last_flush = -1;
      return le;
    }
  } else if (e.avail_in === 0 && Pr(n) <= Pr(r) && n !== ye) {
    return Xe(e, Un);
  }
  if (t.status === At && e.avail_in !== 0) {
    return Xe(e, Un);
  }
  if (t.status === ut && t.wrap === 0) {
    t.status = Ve;
  }
  if (t.status === ut) {
    let o = mn + (t.w_bits - 8 << 4) << 8;
    let i = -1;
    if (t.strategy >= Xt || t.level < 2) {
      i = 0;
    } else if (t.level < 6) {
      i = 1;
    } else if (t.level === 6) {
      i = 2;
    } else {
      i = 3;
    }
    o |= i << 6;
    if (t.strstart !== 0) {
      o |= vf;
    }
    o += 31 - o % 31;
    vt(t, o);
    if (t.strstart !== 0) {
      vt(t, e.adler >>> 16);
      vt(t, e.adler & 65535);
    }
    e.adler = 1;
    t.status = Ve;
    pe(e);
    if (t.pending !== 0) {
      t.last_flush = -1;
      return le;
    }
  }
  if (t.status === wr) {
    e.adler = 0;
    W(t, 31);
    W(t, 139);
    W(t, 8);
    if (t.gzhead) {
      W(t, (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0));
      W(t, t.gzhead.time & 255);
      W(t, t.gzhead.time >> 8 & 255);
      W(t, t.gzhead.time >> 16 & 255);
      W(t, t.gzhead.time >> 24 & 255);
      W(t, t.level === 9 ? 2 : t.strategy >= Xt || t.level < 2 ? 4 : 0);
      W(t, t.gzhead.os & 255);
      if (t.gzhead.extra && t.gzhead.extra.length) {
        W(t, t.gzhead.extra.length & 255);
        W(t, t.gzhead.extra.length >> 8 & 255);
      }
      if (t.gzhead.hcrc) {
        e.adler = ae(e.adler, t.pending_buf, t.pending, 0);
      }
      t.gzindex = 0;
      t.status = Jn;
    } else {
      W(t, 0);
      W(t, 0);
      W(t, 0);
      W(t, 0);
      W(t, 0);
      W(t, t.level === 9 ? 2 : t.strategy >= Xt || t.level < 2 ? 4 : 0);
      W(t, Ef);
      t.status = Ve;
      pe(e);
      if (t.pending !== 0) {
        t.last_flush = -1;
        return le;
      }
    }
  }
  if (t.status === Jn) {
    if (t.gzhead.extra) {
      let o = t.pending;
      let i = (t.gzhead.extra.length & 65535) - t.gzindex;
      while (t.pending + i > t.pending_buf_size) {
        let a = t.pending_buf_size - t.pending;
        t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + a), t.pending);
        t.pending = t.pending_buf_size;
        if (t.gzhead.hcrc && t.pending > o) {
          e.adler = ae(e.adler, t.pending_buf, t.pending - o, o);
        }
        t.gzindex += a;
        pe(e);
        if (t.pending !== 0) {
          t.last_flush = -1;
          return le;
        }
        o = 0;
        i -= a;
      }
      let l = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(l.subarray(t.gzindex, t.gzindex + i), t.pending);
      t.pending += i;
      if (t.gzhead.hcrc && t.pending > o) {
        e.adler = ae(e.adler, t.pending_buf, t.pending - o, o);
      }
      t.gzindex = 0;
    }
    t.status = Qn;
  }
  if (t.status === Qn) {
    if (t.gzhead.name) {
      let o = t.pending;
      let i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > o) {
            e.adler = ae(e.adler, t.pending_buf, t.pending - o, o);
          }
          pe(e);
          if (t.pending !== 0) {
            t.last_flush = -1;
            return le;
          }
          o = 0;
        }
        if (t.gzindex < t.gzhead.name.length) {
          i = t.gzhead.name.charCodeAt(t.gzindex++) & 255;
        } else {
          i = 0;
        }
        W(t, i);
      } while (i !== 0);
      if (t.gzhead.hcrc && t.pending > o) {
        e.adler = ae(e.adler, t.pending_buf, t.pending - o, o);
      }
      t.gzindex = 0;
    }
    t.status = er;
  }
  if (t.status === er) {
    if (t.gzhead.comment) {
      let o = t.pending;
      let i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > o) {
            e.adler = ae(e.adler, t.pending_buf, t.pending - o, o);
          }
          pe(e);
          if (t.pending !== 0) {
            t.last_flush = -1;
            return le;
          }
          o = 0;
        }
        if (t.gzindex < t.gzhead.comment.length) {
          i = t.gzhead.comment.charCodeAt(t.gzindex++) & 255;
        } else {
          i = 0;
        }
        W(t, i);
      } while (i !== 0);
      if (t.gzhead.hcrc && t.pending > o) {
        e.adler = ae(e.adler, t.pending_buf, t.pending - o, o);
      }
    }
    t.status = tr;
  }
  if (t.status === tr) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (pe(e), t.pending !== 0)) {
        t.last_flush = -1;
        return le;
      }
      W(t, e.adler & 255);
      W(t, e.adler >> 8 & 255);
      e.adler = 0;
    }
    t.status = Ve;
    pe(e);
    if (t.pending !== 0) {
      t.last_flush = -1;
      return le;
    }
  }
  if (e.avail_in !== 0 || t.lookahead !== 0 || n !== Ge && t.status !== At) {
    let o = t.level === 0 ? Ji(t, n) : t.strategy === Xt ? Tf(t, n) : t.strategy === lf ? Sf(t, n) : kt[t.level].func(t, n);
    if (o === Je || o === xt) {
      t.status = At;
    }
    if (o === de || o === Je) {
      if (e.avail_out === 0) {
        t.last_flush = -1;
      }
      return le;
    }
    if (o === gt && (n === rf ? nf(t) : n !== Nr && (qn(t, 0, 0, false), n === of && (Pe(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), pe(e), e.avail_out === 0)) {
      t.last_flush = -1;
      return le;
    }
  }
  if (n !== ye) {
    return le;
  } else if (t.wrap <= 0) {
    return Br;
  } else {
    if (t.wrap === 2) {
      W(t, e.adler & 255);
      W(t, e.adler >> 8 & 255);
      W(t, e.adler >> 16 & 255);
      W(t, e.adler >> 24 & 255);
      W(t, e.total_in & 255);
      W(t, e.total_in >> 8 & 255);
      W(t, e.total_in >> 16 & 255);
      W(t, e.total_in >> 24 & 255);
    } else {
      vt(t, e.adler >>> 16);
      vt(t, e.adler & 65535);
    }
    pe(e);
    if (t.wrap > 0) {
      t.wrap = -t.wrap;
    }
    if (t.pending !== 0) {
      return le;
    } else {
      return Br;
    }
  }
};
const Rf = e => {
  if ($t(e)) {
    return Ie;
  }
  const n = e.state.status;
  e.state = null;
  if (n === Ve) {
    return Xe(e, af);
  } else {
    return le;
  }
};
const zf = (e, n) => {
  let t = n.length;
  if ($t(e)) {
    return Ie;
  }
  const r = e.state;
  const o = r.wrap;
  if (o === 2 || o === 1 && r.status !== ut || r.lookahead) {
    return Ie;
  }
  if (o === 1) {
    e.adler = zt(e.adler, n, t, 0);
  }
  r.wrap = 0;
  if (t >= r.w_size) {
    if (o === 0) {
      Pe(r.head);
      r.strstart = 0;
      r.block_start = 0;
      r.insert = 0;
    }
    let p = new Uint8Array(r.w_size);
    p.set(n.subarray(t - r.w_size, t), 0);
    n = p;
    t = r.w_size;
  }
  const i = e.avail_in;
  const l = e.next_in;
  const a = e.input;
  e.avail_in = t;
  e.next_in = 0;
  e.input = n;
  ht(r);
  while (r.lookahead >= q) {
    let p = r.strstart;
    let c = r.lookahead - (q - 1);
    do {
      r.ins_h = Ke(r, r.ins_h, r.window[p + q - 1]);
      r.prev[p & r.w_mask] = r.head[r.ins_h];
      r.head[r.ins_h] = p;
      p++;
    } while (--c);
    r.strstart = p;
    r.lookahead = q - 1;
    ht(r);
  }
  r.strstart += r.lookahead;
  r.block_start = r.strstart;
  r.insert = r.lookahead;
  r.lookahead = 0;
  r.match_length = r.prev_length = q - 1;
  r.match_available = 0;
  e.next_in = l;
  e.input = a;
  e.avail_in = i;
  r.wrap = o;
  return le;
};
var Lf = Uf;
var Mf = to;
var Of = eo;
var Nf = Qi;
var Bf = Cf;
var Pf = Df;
var $f = Rf;
var Zf = zf;
var Hf = "pako deflate (from Nodeca project)";
var Ft = {
  deflateInit: Lf,
  deflateInit2: Mf,
  deflateReset: Of,
  deflateResetKeep: Nf,
  deflateSetHeader: Bf,
  deflate: Pf,
  deflateEnd: $f,
  deflateSetDictionary: Zf,
  deflateInfo: Hf
};
const Gf = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
function Kf(e) {
  const n = Array.prototype.slice.call(arguments, 1);
  while (n.length) {
    const t = n.shift();
    if (t) {
      if (typeof t != "object") {
        throw new TypeError(t + "must be non-object");
      }
      for (const r in t) {
        if (Gf(t, r)) {
          e[r] = t[r];
        }
      }
    }
  }
  return e;
}
var jf = e => {
  let n = 0;
  for (let r = 0, o = e.length; r < o; r++) {
    n += e[r].length;
  }
  const t = new Uint8Array(n);
  for (let r = 0, o = 0, i = e.length; r < i; r++) {
    let l = e[r];
    t.set(l, o);
    o += l.length;
  }
  return t;
};
var bn = {
  assign: Kf,
  flattenChunks: jf
};
let no = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  no = false;
}
const Lt = new Uint8Array(256);
for (let e = 0; e < 256; e++) {
  Lt[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}
Lt[254] = Lt[254] = 1;
var Vf = e => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(e);
  }
  let n;
  let t;
  let r;
  let o;
  let i;
  let l = e.length;
  let a = 0;
  for (o = 0; o < l; o++) {
    t = e.charCodeAt(o);
    if ((t & 64512) === 55296 && o + 1 < l) {
      r = e.charCodeAt(o + 1);
      if ((r & 64512) === 56320) {
        t = 65536 + (t - 55296 << 10) + (r - 56320);
        o++;
      }
    }
    a += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  }
  n = new Uint8Array(a);
  i = 0;
  o = 0;
  for (; i < a; o++) {
    t = e.charCodeAt(o);
    if ((t & 64512) === 55296 && o + 1 < l) {
      r = e.charCodeAt(o + 1);
      if ((r & 64512) === 56320) {
        t = 65536 + (t - 55296 << 10) + (r - 56320);
        o++;
      }
    }
    if (t < 128) {
      n[i++] = t;
    } else if (t < 2048) {
      n[i++] = t >>> 6 | 192;
      n[i++] = t & 63 | 128;
    } else if (t < 65536) {
      n[i++] = t >>> 12 | 224;
      n[i++] = t >>> 6 & 63 | 128;
      n[i++] = t & 63 | 128;
    } else {
      n[i++] = t >>> 18 | 240;
      n[i++] = t >>> 12 & 63 | 128;
      n[i++] = t >>> 6 & 63 | 128;
      n[i++] = t & 63 | 128;
    }
  }
  return n;
};
const Xf = (e, n) => {
  if (n < 65534 && e.subarray && no) {
    return String.fromCharCode.apply(null, e.length === n ? e : e.subarray(0, n));
  }
  let t = "";
  for (let r = 0; r < n; r++) {
    t += String.fromCharCode(e[r]);
  }
  return t;
};
var Yf = (e, n) => {
  const t = n || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(e.subarray(0, n));
  }
  let r;
  let o;
  const i = new Array(t * 2);
  o = 0;
  r = 0;
  while (r < t) {
    let l = e[r++];
    if (l < 128) {
      i[o++] = l;
      continue;
    }
    let a = Lt[l];
    if (a > 4) {
      i[o++] = 65533;
      r += a - 1;
      continue;
    }
    for (l &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && r < t;) {
      l = l << 6 | e[r++] & 63;
      a--;
    }
    if (a > 1) {
      i[o++] = 65533;
      continue;
    }
    if (l < 65536) {
      i[o++] = l;
    } else {
      l -= 65536;
      i[o++] = l >> 10 & 1023 | 55296;
      i[o++] = l & 1023 | 56320;
    }
  }
  return Xf(i, o);
};
var qf = (e, n) => {
  n = n || e.length;
  if (n > e.length) {
    n = e.length;
  }
  let t = n - 1;
  while (t >= 0 && (e[t] & 192) === 128) {
    t--;
  }
  if (t < 0 || t === 0) {
    return n;
  } else if (t + Lt[e[t]] > n) {
    return t;
  } else {
    return n;
  }
};
var Mt = {
  string2buf: Vf,
  buf2string: Yf,
  utf8border: qf
};
function Wf() {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
}
var ro = Wf;
const io = Object.prototype.toString;
const {
  Z_NO_FLUSH: Jf,
  Z_SYNC_FLUSH: Qf,
  Z_FULL_FLUSH: es,
  Z_FINISH: ts,
  Z_OK: hn,
  Z_STREAM_END: ns,
  Z_DEFAULT_COMPRESSION: rs,
  Z_DEFAULT_STRATEGY: is,
  Z_DEFLATED: os
} = wt;
function Zt(e) {
  this.options = bn.assign({
    level: rs,
    method: os,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: is
  }, e || {});
  let n = this.options;
  if (n.raw && n.windowBits > 0) {
    n.windowBits = -n.windowBits;
  } else if (n.gzip && n.windowBits > 0 && n.windowBits < 16) {
    n.windowBits += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new ro();
  this.strm.avail_out = 0;
  let t = Ft.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
  if (t !== hn) {
    throw new Error(We[t]);
  }
  if (n.header) {
    Ft.deflateSetHeader(this.strm, n.header);
  }
  if (n.dictionary) {
    let r;
    if (typeof n.dictionary == "string") {
      r = Mt.string2buf(n.dictionary);
    } else if (io.call(n.dictionary) === "[object ArrayBuffer]") {
      r = new Uint8Array(n.dictionary);
    } else {
      r = n.dictionary;
    }
    t = Ft.deflateSetDictionary(this.strm, r);
    if (t !== hn) {
      throw new Error(We[t]);
    }
    this._dict_set = true;
  }
}
Zt.prototype.push = function (e, n) {
  const t = this.strm;
  const r = this.options.chunkSize;
  let o;
  let i;
  if (this.ended) {
    return false;
  }
  if (n === ~~n) {
    i = n;
  } else {
    i = n === true ? ts : Jf;
  }
  if (typeof e == "string") {
    t.input = Mt.string2buf(e);
  } else if (io.call(e) === "[object ArrayBuffer]") {
    t.input = new Uint8Array(e);
  } else {
    t.input = e;
  }
  t.next_in = 0;
  t.avail_in = t.input.length;
  while (true) {
    if (t.avail_out === 0) {
      t.output = new Uint8Array(r);
      t.next_out = 0;
      t.avail_out = r;
    }
    if ((i === Qf || i === es) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out));
      t.avail_out = 0;
      continue;
    }
    o = Ft.deflate(t, i);
    if (o === ns) {
      if (t.next_out > 0) {
        this.onData(t.output.subarray(0, t.next_out));
      }
      o = Ft.deflateEnd(this.strm);
      this.onEnd(o);
      this.ended = true;
      return o === hn;
    }
    if (t.avail_out === 0) {
      this.onData(t.output);
      continue;
    }
    if (i > 0 && t.next_out > 0) {
      this.onData(t.output.subarray(0, t.next_out));
      t.avail_out = 0;
      continue;
    }
    if (t.avail_in === 0) {
      break;
    }
  }
  return true;
};
Zt.prototype.onData = function (e) {
  this.chunks.push(e);
};
Zt.prototype.onEnd = function (e) {
  if (e === hn) {
    this.result = bn.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
function gr(e, n) {
  const t = new Zt(n);
  t.push(e, true);
  if (t.err) {
    throw t.msg || We[t.err];
  }
  return t.result;
}
function as(e, n) {
  n = n || {};
  n.raw = true;
  return gr(e, n);
}
function fs(e, n) {
  n = n || {};
  n.gzip = true;
  return gr(e, n);
}
var ss = Zt;
var ls = gr;
var cs = as;
var us = fs;
var hs = wt;
var ds = {
  Deflate: ss,
  deflate: ls,
  deflateRaw: cs,
  gzip: us,
  constants: hs
};
const Yt = 16209;
const _s = 16191;
function ps(n, t) {
  let r;
  let o;
  let i;
  let l;
  let a;
  let p;
  let c;
  let u;
  let v;
  let m;
  let g;
  let S;
  let R;
  let Z;
  let P;
  let K;
  let H;
  let U;
  let D;
  let N;
  let z;
  let j;
  let $;
  let O;
  const G = n.state;
  r = n.next_in;
  $ = n.input;
  o = r + (n.avail_in - 5);
  i = n.next_out;
  O = n.output;
  l = i - (t - n.avail_out);
  a = i + (n.avail_out - 257);
  p = G.dmax;
  c = G.wsize;
  u = G.whave;
  v = G.wnext;
  m = G.window;
  g = G.hold;
  S = G.bits;
  R = G.lencode;
  Z = G.distcode;
  P = (1 << G.lenbits) - 1;
  K = (1 << G.distbits) - 1;
  e: do {
    if (S < 15) {
      g += $[r++] << S;
      S += 8;
      g += $[r++] << S;
      S += 8;
    }
    H = R[g & P];
    t: while (true) {
      U = H >>> 24;
      g >>>= U;
      S -= U;
      U = H >>> 16 & 255;
      if (U === 0) {
        O[i++] = H & 65535;
      } else if (U & 16) {
        D = H & 65535;
        U &= 15;
        if (U) {
          if (S < U) {
            g += $[r++] << S;
            S += 8;
          }
          D += g & (1 << U) - 1;
          g >>>= U;
          S -= U;
        }
        if (S < 15) {
          g += $[r++] << S;
          S += 8;
          g += $[r++] << S;
          S += 8;
        }
        H = Z[g & K];
        n: while (true) {
          U = H >>> 24;
          g >>>= U;
          S -= U;
          U = H >>> 16 & 255;
          if (U & 16) {
            N = H & 65535;
            U &= 15;
            if (S < U) {
              g += $[r++] << S;
              S += 8;
              if (S < U) {
                g += $[r++] << S;
                S += 8;
              }
            }
            N += g & (1 << U) - 1;
            if (N > p) {
              n.msg = "invalid distance too far back";
              G.mode = Yt;
              break e;
            }
            g >>>= U;
            S -= U;
            U = i - l;
            if (N > U) {
              U = N - U;
              if (U > u && G.sane) {
                n.msg = "invalid distance too far back";
                G.mode = Yt;
                break e;
              }
              z = 0;
              j = m;
              if (v === 0) {
                z += c - U;
                if (U < D) {
                  D -= U;
                  do {
                    O[i++] = m[z++];
                  } while (--U);
                  z = i - N;
                  j = O;
                }
              } else if (v < U) {
                z += c + v - U;
                U -= v;
                if (U < D) {
                  D -= U;
                  do {
                    O[i++] = m[z++];
                  } while (--U);
                  z = 0;
                  if (v < D) {
                    U = v;
                    D -= U;
                    do {
                      O[i++] = m[z++];
                    } while (--U);
                    z = i - N;
                    j = O;
                  }
                }
              } else {
                z += v - U;
                if (U < D) {
                  D -= U;
                  do {
                    O[i++] = m[z++];
                  } while (--U);
                  z = i - N;
                  j = O;
                }
              }
              while (D > 2) {
                O[i++] = j[z++];
                O[i++] = j[z++];
                O[i++] = j[z++];
                D -= 3;
              }
              if (D) {
                O[i++] = j[z++];
                if (D > 1) {
                  O[i++] = j[z++];
                }
              }
            } else {
              z = i - N;
              do {
                O[i++] = O[z++];
                O[i++] = O[z++];
                O[i++] = O[z++];
                D -= 3;
              } while (D > 2);
              if (D) {
                O[i++] = O[z++];
                if (D > 1) {
                  O[i++] = O[z++];
                }
              }
            }
          } else if (U & 64) {
            n.msg = "invalid distance code";
            G.mode = Yt;
            break e;
          } else {
            H = Z[(H & 65535) + (g & (1 << U) - 1)];
            continue n;
          }
          break;
        }
      } else if (U & 64) {
        if (U & 32) {
          G.mode = _s;
          break e;
        } else {
          n.msg = "invalid literal/length code";
          G.mode = Yt;
          break e;
        }
      } else {
        H = R[(H & 65535) + (g & (1 << U) - 1)];
        continue t;
      }
      break;
    }
  } while (r < o && i < a);
  D = S >> 3;
  r -= D;
  S -= D << 3;
  g &= (1 << S) - 1;
  n.next_in = r;
  n.next_out = i;
  n.avail_in = r < o ? 5 + (o - r) : 5 - (r - o);
  n.avail_out = i < a ? 257 + (a - i) : 257 - (i - a);
  G.hold = g;
  G.bits = S;
}
const ot = 15;
const $r = 852;
const Zr = 592;
const Hr = 0;
const Rn = 1;
const Gr = 2;
const ws = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
const gs = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
const xs = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
const ys = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
const ms = (e, n, t, r, o, i, l, a) => {
  const p = a.bits;
  let c = 0;
  let u = 0;
  let v = 0;
  let m = 0;
  let g = 0;
  let S = 0;
  let R = 0;
  let Z = 0;
  let P = 0;
  let K = 0;
  let H;
  let U;
  let D;
  let N;
  let z;
  let j = null;
  let $;
  const O = new Uint16Array(ot + 1);
  const G = new Uint16Array(ot + 1);
  let te = null;
  let he;
  let ge;
  let be;
  for (c = 0; c <= ot; c++) {
    O[c] = 0;
  }
  for (u = 0; u < r; u++) {
    O[n[t + u]]++;
  }
  g = p;
  m = ot;
  for (; m >= 1 && O[m] === 0; m--);
  if (g > m) {
    g = m;
  }
  if (m === 0) {
    o[i++] = 20971520;
    o[i++] = 20971520;
    a.bits = 1;
    return 0;
  }
  for (v = 1; v < m && O[v] === 0; v++);
  if (g < v) {
    g = v;
  }
  Z = 1;
  c = 1;
  for (; c <= ot; c++) {
    Z <<= 1;
    Z -= O[c];
    if (Z < 0) {
      return -1;
    }
  }
  if (Z > 0 && (e === Hr || m !== 1)) {
    return -1;
  }
  G[1] = 0;
  c = 1;
  for (; c < ot; c++) {
    G[c + 1] = G[c] + O[c];
  }
  for (u = 0; u < r; u++) {
    if (n[t + u] !== 0) {
      l[G[n[t + u]]++] = u;
    }
  }
  if (e === Hr) {
    j = te = l;
    $ = 20;
  } else if (e === Rn) {
    j = ws;
    te = gs;
    $ = 257;
  } else {
    j = xs;
    te = ys;
    $ = 0;
  }
  K = 0;
  u = 0;
  c = v;
  z = i;
  S = g;
  R = 0;
  D = -1;
  P = 1 << g;
  N = P - 1;
  if (e === Rn && P > $r || e === Gr && P > Zr) {
    return 1;
  }
  while (true) {
    he = c - R;
    if (l[u] + 1 < $) {
      ge = 0;
      be = l[u];
    } else if (l[u] >= $) {
      ge = te[l[u] - $];
      be = j[l[u] - $];
    } else {
      ge = 96;
      be = 0;
    }
    H = 1 << c - R;
    U = 1 << S;
    v = U;
    do {
      U -= H;
      o[z + (K >> R) + U] = he << 24 | ge << 16 | be | 0;
    } while (U !== 0);
    for (H = 1 << c - 1; K & H;) {
      H >>= 1;
    }
    if (H !== 0) {
      K &= H - 1;
      K += H;
    } else {
      K = 0;
    }
    u++;
    if (--O[c] === 0) {
      if (c === m) {
        break;
      }
      c = n[t + l[u]];
    }
    if (c > g && (K & N) !== D) {
      if (R === 0) {
        R = g;
      }
      z += v;
      S = c - R;
      Z = 1 << S;
      while (S + R < m && (Z -= O[S + R], !(Z <= 0))) {
        S++;
        Z <<= 1;
      }
      P += 1 << S;
      if (e === Rn && P > $r || e === Gr && P > Zr) {
        return 1;
      }
      D = K & N;
      o[D] = g << 24 | S << 16 | z - i | 0;
    }
  }
  if (K !== 0) {
    o[z + K] = c - R << 24 | 4194304 | 0;
  }
  a.bits = g;
  return 0;
};
var It = ms;
const bs = 0;
const oo = 1;
const ao = 2;
const {
  Z_FINISH: Kr,
  Z_BLOCK: vs,
  Z_TREES: qt,
  Z_OK: Qe,
  Z_STREAM_END: Es,
  Z_NEED_DICT: As,
  Z_STREAM_ERROR: me,
  Z_DATA_ERROR: fo,
  Z_MEM_ERROR: so,
  Z_BUF_ERROR: ks,
  Z_DEFLATED: jr
} = wt;
const vn = 16180;
const Vr = 16181;
const Xr = 16182;
const Yr = 16183;
const qr = 16184;
const Wr = 16185;
const Jr = 16186;
const Qr = 16187;
const ei = 16188;
const ti = 16189;
const dn = 16190;
const De = 16191;
const zn = 16192;
const ni = 16193;
const Ln = 16194;
const ri = 16195;
const ii = 16196;
const oi = 16197;
const ai = 16198;
const Wt = 16199;
const Jt = 16200;
const fi = 16201;
const si = 16202;
const li = 16203;
const ci = 16204;
const ui = 16205;
const Mn = 16206;
const hi = 16207;
const di = 16208;
const Q = 16209;
const lo = 16210;
const co = 16211;
const Ss = 852;
const Ts = 592;
const Fs = 15;
const Is = Fs;
const _i = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function Cs() {
  this.strm = null;
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = new Uint16Array(320);
  this.work = new Uint16Array(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
const tt = e => {
  if (!e) {
    return 1;
  }
  const n = e.state;
  if (!n || n.strm !== e || n.mode < vn || n.mode > co) {
    return 1;
  } else {
    return 0;
  }
};
const uo = e => {
  if (tt(e)) {
    return me;
  }
  const n = e.state;
  e.total_in = e.total_out = n.total = 0;
  e.msg = "";
  if (n.wrap) {
    e.adler = n.wrap & 1;
  }
  n.mode = vn;
  n.last = 0;
  n.havedict = 0;
  n.flags = -1;
  n.dmax = 32768;
  n.head = null;
  n.hold = 0;
  n.bits = 0;
  n.lencode = n.lendyn = new Int32Array(Ss);
  n.distcode = n.distdyn = new Int32Array(Ts);
  n.sane = 1;
  n.back = -1;
  return Qe;
};
const ho = e => {
  if (tt(e)) {
    return me;
  }
  const n = e.state;
  n.wsize = 0;
  n.whave = 0;
  n.wnext = 0;
  return uo(e);
};
const _o = (e, n) => {
  let t;
  if (tt(e)) {
    return me;
  }
  const r = e.state;
  if (n < 0) {
    t = 0;
    n = -n;
  } else {
    t = (n >> 4) + 5;
    if (n < 48) {
      n &= 15;
    }
  }
  if (n && (n < 8 || n > 15)) {
    return me;
  } else {
    if (r.window !== null && r.wbits !== n) {
      r.window = null;
    }
    r.wrap = t;
    r.wbits = n;
    return ho(e);
  }
};
const po = (e, n) => {
  if (!e) {
    return me;
  }
  const t = new Cs();
  e.state = t;
  t.strm = e;
  t.window = null;
  t.mode = vn;
  const r = _o(e, n);
  if (r !== Qe) {
    e.state = null;
  }
  return r;
};
const Us = e => po(e, Is);
let pi = true;
let On;
let Nn;
const Ds = e => {
  if (pi) {
    On = new Int32Array(512);
    Nn = new Int32Array(32);
    let n = 0;
    while (n < 144) {
      e.lens[n++] = 8;
    }
    while (n < 256) {
      e.lens[n++] = 9;
    }
    while (n < 280) {
      e.lens[n++] = 7;
    }
    while (n < 288) {
      e.lens[n++] = 8;
    }
    It(oo, e.lens, 0, 288, On, 0, e.work, {
      bits: 9
    });
    n = 0;
    while (n < 32) {
      e.lens[n++] = 5;
    }
    It(ao, e.lens, 0, 32, Nn, 0, e.work, {
      bits: 5
    });
    pi = false;
  }
  e.lencode = On;
  e.lenbits = 9;
  e.distcode = Nn;
  e.distbits = 5;
};
const wo = (e, n, t, r) => {
  let o;
  const i = e.state;
  if (i.window === null) {
    i.wsize = 1 << i.wbits;
    i.wnext = 0;
    i.whave = 0;
    i.window = new Uint8Array(i.wsize);
  }
  if (r >= i.wsize) {
    i.window.set(n.subarray(t - i.wsize, t), 0);
    i.wnext = 0;
    i.whave = i.wsize;
  } else {
    o = i.wsize - i.wnext;
    if (o > r) {
      o = r;
    }
    i.window.set(n.subarray(t - r, t - r + o), i.wnext);
    r -= o;
    if (r) {
      i.window.set(n.subarray(t - r, t), 0);
      i.wnext = r;
      i.whave = i.wsize;
    } else {
      i.wnext += o;
      if (i.wnext === i.wsize) {
        i.wnext = 0;
      }
      if (i.whave < i.wsize) {
        i.whave += o;
      }
    }
  }
  return 0;
};
const Rs = (e, n) => {
  let t;
  let r;
  let o;
  let i;
  let l;
  let a;
  let p;
  let c;
  let u;
  let v;
  let m;
  let g;
  let S;
  let R;
  let Z = 0;
  let P;
  let K;
  let H;
  let U;
  let D;
  let N;
  let z;
  let j;
  const $ = new Uint8Array(4);
  let O;
  let G;
  const te = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  if (tt(e) || !e.output || !e.input && e.avail_in !== 0) {
    return me;
  }
  t = e.state;
  if (t.mode === De) {
    t.mode = zn;
  }
  l = e.next_out;
  o = e.output;
  p = e.avail_out;
  i = e.next_in;
  r = e.input;
  a = e.avail_in;
  c = t.hold;
  u = t.bits;
  v = a;
  m = p;
  j = Qe;
  e: while (true) {
    switch (t.mode) {
      case vn:
        if (t.wrap === 0) {
          t.mode = zn;
          break;
        }
        while (u < 16) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        if (t.wrap & 2 && c === 35615) {
          if (t.wbits === 0) {
            t.wbits = 15;
          }
          t.check = 0;
          $[0] = c & 255;
          $[1] = c >>> 8 & 255;
          t.check = ae(t.check, $, 2, 0);
          c = 0;
          u = 0;
          t.mode = Vr;
          break;
        }
        if (t.head) {
          t.head.done = false;
        }
        if (!(t.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31) {
          e.msg = "incorrect header check";
          t.mode = Q;
          break;
        }
        if ((c & 15) !== jr) {
          e.msg = "unknown compression method";
          t.mode = Q;
          break;
        }
        c >>>= 4;
        u -= 4;
        z = (c & 15) + 8;
        if (t.wbits === 0) {
          t.wbits = z;
        }
        if (z > 15 || z > t.wbits) {
          e.msg = "invalid window size";
          t.mode = Q;
          break;
        }
        t.dmax = 1 << t.wbits;
        t.flags = 0;
        e.adler = t.check = 1;
        t.mode = c & 512 ? ti : De;
        c = 0;
        u = 0;
        break;
      case Vr:
        while (u < 16) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        t.flags = c;
        if ((t.flags & 255) !== jr) {
          e.msg = "unknown compression method";
          t.mode = Q;
          break;
        }
        if (t.flags & 57344) {
          e.msg = "unknown header flags set";
          t.mode = Q;
          break;
        }
        if (t.head) {
          t.head.text = c >> 8 & 1;
        }
        if (t.flags & 512 && t.wrap & 4) {
          $[0] = c & 255;
          $[1] = c >>> 8 & 255;
          t.check = ae(t.check, $, 2, 0);
        }
        c = 0;
        u = 0;
        t.mode = Xr;
      case Xr:
        while (u < 32) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        if (t.head) {
          t.head.time = c;
        }
        if (t.flags & 512 && t.wrap & 4) {
          $[0] = c & 255;
          $[1] = c >>> 8 & 255;
          $[2] = c >>> 16 & 255;
          $[3] = c >>> 24 & 255;
          t.check = ae(t.check, $, 4, 0);
        }
        c = 0;
        u = 0;
        t.mode = Yr;
      case Yr:
        while (u < 16) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        if (t.head) {
          t.head.xflags = c & 255;
          t.head.os = c >> 8;
        }
        if (t.flags & 512 && t.wrap & 4) {
          $[0] = c & 255;
          $[1] = c >>> 8 & 255;
          t.check = ae(t.check, $, 2, 0);
        }
        c = 0;
        u = 0;
        t.mode = qr;
      case qr:
        if (t.flags & 1024) {
          while (u < 16) {
            if (a === 0) {
              break e;
            }
            a--;
            c += r[i++] << u;
            u += 8;
          }
          t.length = c;
          if (t.head) {
            t.head.extra_len = c;
          }
          if (t.flags & 512 && t.wrap & 4) {
            $[0] = c & 255;
            $[1] = c >>> 8 & 255;
            t.check = ae(t.check, $, 2, 0);
          }
          c = 0;
          u = 0;
        } else if (t.head) {
          t.head.extra = null;
        }
        t.mode = Wr;
      case Wr:
        if (t.flags & 1024 && (g = t.length, g > a && (g = a), g && (t.head && (z = t.head.extra_len - t.length, t.head.extra ||= new Uint8Array(t.head.extra_len), t.head.extra.set(r.subarray(i, i + g), z)), t.flags & 512 && t.wrap & 4 && (t.check = ae(t.check, r, g, i)), a -= g, i += g, t.length -= g), t.length)) {
          break e;
        }
        t.length = 0;
        t.mode = Jr;
      case Jr:
        if (t.flags & 2048) {
          if (a === 0) {
            break e;
          }
          g = 0;
          do {
            z = r[i + g++];
            if (t.head && z && t.length < 65536) {
              t.head.name += String.fromCharCode(z);
            }
          } while (z && g < a);
          if (t.flags & 512 && t.wrap & 4) {
            t.check = ae(t.check, r, g, i);
          }
          a -= g;
          i += g;
          if (z) {
            break e;
          }
        } else if (t.head) {
          t.head.name = null;
        }
        t.length = 0;
        t.mode = Qr;
      case Qr:
        if (t.flags & 4096) {
          if (a === 0) {
            break e;
          }
          g = 0;
          do {
            z = r[i + g++];
            if (t.head && z && t.length < 65536) {
              t.head.comment += String.fromCharCode(z);
            }
          } while (z && g < a);
          if (t.flags & 512 && t.wrap & 4) {
            t.check = ae(t.check, r, g, i);
          }
          a -= g;
          i += g;
          if (z) {
            break e;
          }
        } else if (t.head) {
          t.head.comment = null;
        }
        t.mode = ei;
      case ei:
        if (t.flags & 512) {
          while (u < 16) {
            if (a === 0) {
              break e;
            }
            a--;
            c += r[i++] << u;
            u += 8;
          }
          if (t.wrap & 4 && c !== (t.check & 65535)) {
            e.msg = "header crc mismatch";
            t.mode = Q;
            break;
          }
          c = 0;
          u = 0;
        }
        if (t.head) {
          t.head.hcrc = t.flags >> 9 & 1;
          t.head.done = true;
        }
        e.adler = t.check = 0;
        t.mode = De;
        break;
      case ti:
        while (u < 32) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        e.adler = t.check = _i(c);
        c = 0;
        u = 0;
        t.mode = dn;
      case dn:
        if (t.havedict === 0) {
          e.next_out = l;
          e.avail_out = p;
          e.next_in = i;
          e.avail_in = a;
          t.hold = c;
          t.bits = u;
          return As;
        }
        e.adler = t.check = 1;
        t.mode = De;
      case De:
        if (n === vs || n === qt) {
          break e;
        }
      case zn:
        if (t.last) {
          c >>>= u & 7;
          u -= u & 7;
          t.mode = Mn;
          break;
        }
        while (u < 3) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        t.last = c & 1;
        c >>>= 1;
        u -= 1;
        switch (c & 3) {
          case 0:
            t.mode = ni;
            break;
          case 1:
            Ds(t);
            t.mode = Wt;
            if (n === qt) {
              c >>>= 2;
              u -= 2;
              break e;
            }
            break;
          case 2:
            t.mode = ii;
            break;
          case 3:
            e.msg = "invalid block type";
            t.mode = Q;
        }
        c >>>= 2;
        u -= 2;
        break;
      case ni:
        c >>>= u & 7;
        u -= u & 7;
        while (u < 32) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        if ((c & 65535) !== (c >>> 16 ^ 65535)) {
          e.msg = "invalid stored block lengths";
          t.mode = Q;
          break;
        }
        t.length = c & 65535;
        c = 0;
        u = 0;
        t.mode = Ln;
        if (n === qt) {
          break e;
        }
      case Ln:
        t.mode = ri;
      case ri:
        g = t.length;
        if (g) {
          if (g > a) {
            g = a;
          }
          if (g > p) {
            g = p;
          }
          if (g === 0) {
            break e;
          }
          o.set(r.subarray(i, i + g), l);
          a -= g;
          i += g;
          p -= g;
          l += g;
          t.length -= g;
          break;
        }
        t.mode = De;
        break;
      case ii:
        while (u < 14) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        t.nlen = (c & 31) + 257;
        c >>>= 5;
        u -= 5;
        t.ndist = (c & 31) + 1;
        c >>>= 5;
        u -= 5;
        t.ncode = (c & 15) + 4;
        c >>>= 4;
        u -= 4;
        if (t.nlen > 286 || t.ndist > 30) {
          e.msg = "too many length or distance symbols";
          t.mode = Q;
          break;
        }
        t.have = 0;
        t.mode = oi;
      case oi:
        while (t.have < t.ncode) {
          while (u < 3) {
            if (a === 0) {
              break e;
            }
            a--;
            c += r[i++] << u;
            u += 8;
          }
          t.lens[te[t.have++]] = c & 7;
          c >>>= 3;
          u -= 3;
        }
        while (t.have < 19) {
          t.lens[te[t.have++]] = 0;
        }
        t.lencode = t.lendyn;
        t.lenbits = 7;
        O = {
          bits: t.lenbits
        };
        j = It(bs, t.lens, 0, 19, t.lencode, 0, t.work, O);
        t.lenbits = O.bits;
        if (j) {
          e.msg = "invalid code lengths set";
          t.mode = Q;
          break;
        }
        t.have = 0;
        t.mode = ai;
      case ai:
        while (t.have < t.nlen + t.ndist) {
          while (Z = t.lencode[c & (1 << t.lenbits) - 1], P = Z >>> 24, K = Z >>> 16 & 255, H = Z & 65535, !(P <= u)) {
            if (a === 0) {
              break e;
            }
            a--;
            c += r[i++] << u;
            u += 8;
          }
          if (H < 16) {
            c >>>= P;
            u -= P;
            t.lens[t.have++] = H;
          } else {
            if (H === 16) {
              for (G = P + 2; u < G;) {
                if (a === 0) {
                  break e;
                }
                a--;
                c += r[i++] << u;
                u += 8;
              }
              c >>>= P;
              u -= P;
              if (t.have === 0) {
                e.msg = "invalid bit length repeat";
                t.mode = Q;
                break;
              }
              z = t.lens[t.have - 1];
              g = 3 + (c & 3);
              c >>>= 2;
              u -= 2;
            } else if (H === 17) {
              for (G = P + 3; u < G;) {
                if (a === 0) {
                  break e;
                }
                a--;
                c += r[i++] << u;
                u += 8;
              }
              c >>>= P;
              u -= P;
              z = 0;
              g = 3 + (c & 7);
              c >>>= 3;
              u -= 3;
            } else {
              for (G = P + 7; u < G;) {
                if (a === 0) {
                  break e;
                }
                a--;
                c += r[i++] << u;
                u += 8;
              }
              c >>>= P;
              u -= P;
              z = 0;
              g = 11 + (c & 127);
              c >>>= 7;
              u -= 7;
            }
            if (t.have + g > t.nlen + t.ndist) {
              e.msg = "invalid bit length repeat";
              t.mode = Q;
              break;
            }
            while (g--) {
              t.lens[t.have++] = z;
            }
          }
        }
        if (t.mode === Q) {
          break;
        }
        if (t.lens[256] === 0) {
          e.msg = "invalid code -- missing end-of-block";
          t.mode = Q;
          break;
        }
        t.lenbits = 9;
        O = {
          bits: t.lenbits
        };
        j = It(oo, t.lens, 0, t.nlen, t.lencode, 0, t.work, O);
        t.lenbits = O.bits;
        if (j) {
          e.msg = "invalid literal/lengths set";
          t.mode = Q;
          break;
        }
        t.distbits = 6;
        t.distcode = t.distdyn;
        O = {
          bits: t.distbits
        };
        j = It(ao, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, O);
        t.distbits = O.bits;
        if (j) {
          e.msg = "invalid distances set";
          t.mode = Q;
          break;
        }
        t.mode = Wt;
        if (n === qt) {
          break e;
        }
      case Wt:
        t.mode = Jt;
      case Jt:
        if (a >= 6 && p >= 258) {
          e.next_out = l;
          e.avail_out = p;
          e.next_in = i;
          e.avail_in = a;
          t.hold = c;
          t.bits = u;
          ps(e, m);
          l = e.next_out;
          o = e.output;
          p = e.avail_out;
          i = e.next_in;
          r = e.input;
          a = e.avail_in;
          c = t.hold;
          u = t.bits;
          if (t.mode === De) {
            t.back = -1;
          }
          break;
        }
        for (t.back = 0; Z = t.lencode[c & (1 << t.lenbits) - 1], P = Z >>> 24, K = Z >>> 16 & 255, H = Z & 65535, !(P <= u);) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        if (K && !(K & 240)) {
          U = P;
          D = K;
          N = H;
          while (Z = t.lencode[N + ((c & (1 << U + D) - 1) >> U)], P = Z >>> 24, K = Z >>> 16 & 255, H = Z & 65535, !(U + P <= u)) {
            if (a === 0) {
              break e;
            }
            a--;
            c += r[i++] << u;
            u += 8;
          }
          c >>>= U;
          u -= U;
          t.back += U;
        }
        c >>>= P;
        u -= P;
        t.back += P;
        t.length = H;
        if (K === 0) {
          t.mode = ui;
          break;
        }
        if (K & 32) {
          t.back = -1;
          t.mode = De;
          break;
        }
        if (K & 64) {
          e.msg = "invalid literal/length code";
          t.mode = Q;
          break;
        }
        t.extra = K & 15;
        t.mode = fi;
      case fi:
        if (t.extra) {
          for (G = t.extra; u < G;) {
            if (a === 0) {
              break e;
            }
            a--;
            c += r[i++] << u;
            u += 8;
          }
          t.length += c & (1 << t.extra) - 1;
          c >>>= t.extra;
          u -= t.extra;
          t.back += t.extra;
        }
        t.was = t.length;
        t.mode = si;
      case si:
        while (Z = t.distcode[c & (1 << t.distbits) - 1], P = Z >>> 24, K = Z >>> 16 & 255, H = Z & 65535, !(P <= u)) {
          if (a === 0) {
            break e;
          }
          a--;
          c += r[i++] << u;
          u += 8;
        }
        if (!(K & 240)) {
          U = P;
          D = K;
          N = H;
          while (Z = t.distcode[N + ((c & (1 << U + D) - 1) >> U)], P = Z >>> 24, K = Z >>> 16 & 255, H = Z & 65535, !(U + P <= u)) {
            if (a === 0) {
              break e;
            }
            a--;
            c += r[i++] << u;
            u += 8;
          }
          c >>>= U;
          u -= U;
          t.back += U;
        }
        c >>>= P;
        u -= P;
        t.back += P;
        if (K & 64) {
          e.msg = "invalid distance code";
          t.mode = Q;
          break;
        }
        t.offset = H;
        t.extra = K & 15;
        t.mode = li;
      case li:
        if (t.extra) {
          for (G = t.extra; u < G;) {
            if (a === 0) {
              break e;
            }
            a--;
            c += r[i++] << u;
            u += 8;
          }
          t.offset += c & (1 << t.extra) - 1;
          c >>>= t.extra;
          u -= t.extra;
          t.back += t.extra;
        }
        if (t.offset > t.dmax) {
          e.msg = "invalid distance too far back";
          t.mode = Q;
          break;
        }
        t.mode = ci;
      case ci:
        if (p === 0) {
          break e;
        }
        g = m - p;
        if (t.offset > g) {
          g = t.offset - g;
          if (g > t.whave && t.sane) {
            e.msg = "invalid distance too far back";
            t.mode = Q;
            break;
          }
          if (g > t.wnext) {
            g -= t.wnext;
            S = t.wsize - g;
          } else {
            S = t.wnext - g;
          }
          if (g > t.length) {
            g = t.length;
          }
          R = t.window;
        } else {
          R = o;
          S = l - t.offset;
          g = t.length;
        }
        if (g > p) {
          g = p;
        }
        p -= g;
        t.length -= g;
        do {
          o[l++] = R[S++];
        } while (--g);
        if (t.length === 0) {
          t.mode = Jt;
        }
        break;
      case ui:
        if (p === 0) {
          break e;
        }
        o[l++] = t.length;
        p--;
        t.mode = Jt;
        break;
      case Mn:
        if (t.wrap) {
          while (u < 32) {
            if (a === 0) {
              break e;
            }
            a--;
            c |= r[i++] << u;
            u += 8;
          }
          m -= p;
          e.total_out += m;
          t.total += m;
          if (t.wrap & 4 && m) {
            e.adler = t.check = t.flags ? ae(t.check, o, m, l - m) : zt(t.check, o, m, l - m);
          }
          m = p;
          if (t.wrap & 4 && (t.flags ? c : _i(c)) !== t.check) {
            e.msg = "incorrect data check";
            t.mode = Q;
            break;
          }
          c = 0;
          u = 0;
        }
        t.mode = hi;
      case hi:
        if (t.wrap && t.flags) {
          while (u < 32) {
            if (a === 0) {
              break e;
            }
            a--;
            c += r[i++] << u;
            u += 8;
          }
          if (t.wrap & 4 && c !== (t.total & -1)) {
            e.msg = "incorrect length check";
            t.mode = Q;
            break;
          }
          c = 0;
          u = 0;
        }
        t.mode = di;
      case di:
        j = Es;
        break e;
      case Q:
        j = fo;
        break e;
      case lo:
        return so;
      case co:
      default:
        return me;
    }
  }
  e.next_out = l;
  e.avail_out = p;
  e.next_in = i;
  e.avail_in = a;
  t.hold = c;
  t.bits = u;
  if (t.wsize || m !== e.avail_out && t.mode < Q && (t.mode < Mn || n !== Kr)) {
    wo(e, e.output, e.next_out, m - e.avail_out);
  }
  v -= e.avail_in;
  m -= e.avail_out;
  e.total_in += v;
  e.total_out += m;
  t.total += m;
  if (t.wrap & 4 && m) {
    e.adler = t.check = t.flags ? ae(t.check, o, m, e.next_out - m) : zt(t.check, o, m, e.next_out - m);
  }
  e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === De ? 128 : 0) + (t.mode === Wt || t.mode === Ln ? 256 : 0);
  if ((v === 0 && m === 0 || n === Kr) && j === Qe) {
    j = ks;
  }
  return j;
};
const zs = e => {
  if (tt(e)) {
    return me;
  }
  let n = e.state;
  n.window &&= null;
  e.state = null;
  return Qe;
};
const Ls = (e, n) => {
  if (tt(e)) {
    return me;
  }
  const t = e.state;
  if (t.wrap & 2) {
    t.head = n;
    n.done = false;
    return Qe;
  } else {
    return me;
  }
};
const Ms = (e, n) => {
  const t = n.length;
  let r;
  let o;
  let i;
  if (tt(e) || (r = e.state, r.wrap !== 0 && r.mode !== dn)) {
    return me;
  } else if (r.mode === dn && (o = 1, o = zt(o, n, t, 0), o !== r.check)) {
    return fo;
  } else {
    i = wo(e, n, t, t);
    if (i) {
      r.mode = lo;
      return so;
    } else {
      r.havedict = 1;
      return Qe;
    }
  }
};
var Os = ho;
var Ns = _o;
var Bs = uo;
var Ps = Us;
var $s = po;
var Zs = Rs;
var Hs = zs;
var Gs = Ls;
var Ks = Ms;
var js = "pako inflate (from Nodeca project)";
var ze = {
  inflateReset: Os,
  inflateReset2: Ns,
  inflateResetKeep: Bs,
  inflateInit: Ps,
  inflateInit2: $s,
  inflate: Zs,
  inflateEnd: Hs,
  inflateGetHeader: Gs,
  inflateSetDictionary: Ks,
  inflateInfo: js
};
function Vs() {
  this.text = 0;
  this.time = 0;
  this.xflags = 0;
  this.os = 0;
  this.extra = null;
  this.extra_len = 0;
  this.name = "";
  this.comment = "";
  this.hcrc = 0;
  this.done = false;
}
var Xs = Vs;
const go = Object.prototype.toString;
const {
  Z_NO_FLUSH: Ys,
  Z_FINISH: qs,
  Z_OK: Ot,
  Z_STREAM_END: Bn,
  Z_NEED_DICT: Pn,
  Z_STREAM_ERROR: Ws,
  Z_DATA_ERROR: wi,
  Z_MEM_ERROR: Js
} = wt;
function Ht(e) {
  this.options = bn.assign({
    chunkSize: 65536,
    windowBits: 15,
    to: ""
  }, e || {});
  const n = this.options;
  if (n.raw && n.windowBits >= 0 && n.windowBits < 16) {
    n.windowBits = -n.windowBits;
    if (n.windowBits === 0) {
      n.windowBits = -15;
    }
  }
  if (n.windowBits >= 0 && n.windowBits < 16 && (!e || !e.windowBits)) {
    n.windowBits += 32;
  }
  if (n.windowBits > 15 && n.windowBits < 48) {
    if (!(n.windowBits & 15)) {
      n.windowBits |= 15;
    }
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new ro();
  this.strm.avail_out = 0;
  let t = ze.inflateInit2(this.strm, n.windowBits);
  if (t !== Ot) {
    throw new Error(We[t]);
  }
  this.header = new Xs();
  ze.inflateGetHeader(this.strm, this.header);
  if (n.dictionary && (typeof n.dictionary == "string" ? n.dictionary = Mt.string2buf(n.dictionary) : go.call(n.dictionary) === "[object ArrayBuffer]" && (n.dictionary = new Uint8Array(n.dictionary)), n.raw && (t = ze.inflateSetDictionary(this.strm, n.dictionary), t !== Ot))) {
    throw new Error(We[t]);
  }
}
Ht.prototype.push = function (e, n) {
  const t = this.strm;
  const r = this.options.chunkSize;
  const o = this.options.dictionary;
  let i;
  let l;
  let a;
  if (this.ended) {
    return false;
  }
  if (n === ~~n) {
    l = n;
  } else {
    l = n === true ? qs : Ys;
  }
  if (go.call(e) === "[object ArrayBuffer]") {
    t.input = new Uint8Array(e);
  } else {
    t.input = e;
  }
  t.next_in = 0;
  t.avail_in = t.input.length;
  while (true) {
    if (t.avail_out === 0) {
      t.output = new Uint8Array(r);
      t.next_out = 0;
      t.avail_out = r;
    }
    i = ze.inflate(t, l);
    if (i === Pn && o) {
      i = ze.inflateSetDictionary(t, o);
      if (i === Ot) {
        i = ze.inflate(t, l);
      } else if (i === wi) {
        i = Pn;
      }
    }
    while (t.avail_in > 0 && i === Bn && t.state.wrap > 0 && e[t.next_in] !== 0) {
      ze.inflateReset(t);
      i = ze.inflate(t, l);
    }
    switch (i) {
      case Ws:
      case wi:
      case Pn:
      case Js:
        this.onEnd(i);
        this.ended = true;
        return false;
    }
    a = t.avail_out;
    if (t.next_out && (t.avail_out === 0 || i === Bn)) {
      if (this.options.to === "string") {
        let p = Mt.utf8border(t.output, t.next_out);
        let c = t.next_out - p;
        let u = Mt.buf2string(t.output, p);
        t.next_out = c;
        t.avail_out = r - c;
        if (c) {
          t.output.set(t.output.subarray(p, p + c), 0);
        }
        this.onData(u);
      } else {
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
      }
    }
    if (i !== Ot || a !== 0) {
      if (i === Bn) {
        i = ze.inflateEnd(this.strm);
        this.onEnd(i);
        this.ended = true;
        return true;
      }
      if (t.avail_in === 0) {
        break;
      }
    }
  }
  return true;
};
Ht.prototype.onData = function (e) {
  this.chunks.push(e);
};
Ht.prototype.onEnd = function (e) {
  if (e === Ot) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = bn.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
function xr(e, n) {
  const t = new Ht(n);
  t.push(e);
  if (t.err) {
    throw t.msg || We[t.err];
  }
  return t.result;
}
function Qs(e, n) {
  n = n || {};
  n.raw = true;
  return xr(e, n);
}
var el = Ht;
var tl = xr;
var nl = Qs;
var rl = xr;
var il = wt;
var ol = {
  Inflate: el,
  inflate: tl,
  inflateRaw: nl,
  ungzip: rl,
  constants: il
};
const {
  Deflate: t0,
  deflate: al,
  deflateRaw: n0,
  gzip: r0
} = ds;
const {
  Inflate: i0,
  inflate: fl,
  inflateRaw: o0,
  ungzip: a0
} = ol;
var f0 = al;
var s0 = fl;
var rr = {};
var En = {
  byteLength: cl,
  toByteArray: hl,
  fromByteArray: pl
};
var Fe = [];
var xe = [];
var sl = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var $n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var at = 0, ll = $n.length; at < ll; ++at) {
  Fe[at] = $n[at];
  xe[$n.charCodeAt(at)] = at;
}
xe["-".charCodeAt(0)] = 62;
xe["_".charCodeAt(0)] = 63;
function xo(e) {
  var n = e.length;
  if (n % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var t = e.indexOf("=");
  if (t === -1) {
    t = n;
  }
  var r = t === n ? 0 : 4 - t % 4;
  return [t, r];
}
function cl(e) {
  var n = xo(e);
  var t = n[0];
  var r = n[1];
  return (t + r) * 3 / 4 - r;
}
function ul(e, n, t) {
  return (n + t) * 3 / 4 - t;
}
function hl(e) {
  var n;
  var t = xo(e);
  var r = t[0];
  var o = t[1];
  var i = new sl(ul(e, r, o));
  var l = 0;
  var a = o > 0 ? r - 4 : r;
  var p;
  for (p = 0; p < a; p += 4) {
    n = xe[e.charCodeAt(p)] << 18 | xe[e.charCodeAt(p + 1)] << 12 | xe[e.charCodeAt(p + 2)] << 6 | xe[e.charCodeAt(p + 3)];
    i[l++] = n >> 16 & 255;
    i[l++] = n >> 8 & 255;
    i[l++] = n & 255;
  }
  if (o === 2) {
    n = xe[e.charCodeAt(p)] << 2 | xe[e.charCodeAt(p + 1)] >> 4;
    i[l++] = n & 255;
  }
  if (o === 1) {
    n = xe[e.charCodeAt(p)] << 10 | xe[e.charCodeAt(p + 1)] << 4 | xe[e.charCodeAt(p + 2)] >> 2;
    i[l++] = n >> 8 & 255;
    i[l++] = n & 255;
  }
  return i;
}
function dl(e) {
  return Fe[e >> 18 & 63] + Fe[e >> 12 & 63] + Fe[e >> 6 & 63] + Fe[e & 63];
}
function _l(e, n, t) {
  var r;
  var o = [];
  for (var i = n; i < t; i += 3) {
    r = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
    o.push(dl(r));
  }
  return o.join("");
}
function pl(e) {
  var n;
  var t = e.length;
  var r = t % 3;
  var o = [];
  for (var i = 16383, l = 0, a = t - r; l < a; l += i) {
    o.push(_l(e, l, l + i > a ? a : l + i));
  }
  if (r === 1) {
    n = e[t - 1];
    o.push(Fe[n >> 2] + Fe[n << 4 & 63] + "==");
  } else if (r === 2) {
    n = (e[t - 2] << 8) + e[t - 1];
    o.push(Fe[n >> 10] + Fe[n >> 4 & 63] + Fe[n << 2 & 63] + "=");
  }
  return o.join("");
}
var yr = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
yr.read = function (e, n, t, r, o) {
  var i;
  var l;
  var a = o * 8 - r - 1;
  var p = (1 << a) - 1;
  var c = p >> 1;
  var u = -7;
  var v = t ? o - 1 : 0;
  var m = t ? -1 : 1;
  var g = e[n + v];
  v += m;
  i = g & (1 << -u) - 1;
  g >>= -u;
  u += a;
  for (; u > 0; u -= 8) {
    i = i * 256 + e[n + v];
    v += m;
  }
  l = i & (1 << -u) - 1;
  i >>= -u;
  u += r;
  for (; u > 0; u -= 8) {
    l = l * 256 + e[n + v];
    v += m;
  }
  if (i === 0) {
    i = 1 - c;
  } else {
    if (i === p) {
      if (l) {
        return NaN;
      } else {
        return (g ? -1 : 1) * Infinity;
      }
    }
    l = l + Math.pow(2, r);
    i = i - c;
  }
  return (g ? -1 : 1) * l * Math.pow(2, i - r);
};
yr.write = function (e, n, t, r, o, i) {
  var l;
  var a;
  var p;
  var c = i * 8 - o - 1;
  var u = (1 << c) - 1;
  var v = u >> 1;
  var m = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var g = r ? 0 : i - 1;
  var S = r ? 1 : -1;
  var R = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
  n = Math.abs(n);
  if (isNaN(n) || n === Infinity) {
    a = isNaN(n) ? 1 : 0;
    l = u;
  } else {
    l = Math.floor(Math.log(n) / Math.LN2);
    if (n * (p = Math.pow(2, -l)) < 1) {
      l--;
      p *= 2;
    }
    if (l + v >= 1) {
      n += m / p;
    } else {
      n += m * Math.pow(2, 1 - v);
    }
    if (n * p >= 2) {
      l++;
      p /= 2;
    }
    if (l + v >= u) {
      a = 0;
      l = u;
    } else if (l + v >= 1) {
      a = (n * p - 1) * Math.pow(2, o);
      l = l + v;
    } else {
      a = n * Math.pow(2, v - 1) * Math.pow(2, o);
      l = 0;
    }
  }
  for (; o >= 8; o -= 8) {
    e[t + g] = a & 255;
    g += S;
    a /= 256;
  }
  l = l << o | a;
  c += o;
  for (; c > 0; c -= 8) {
    e[t + g] = l & 255;
    g += S;
    l /= 256;
  }
  e[t + g - S] |= R * 128;
}; /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
(function (e) {
  var n = En;
  var t = yr;
  var r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a;
  e.SlowBuffer = K;
  e.INSPECT_MAX_BYTES = 50;
  var o = 2147483647;
  e.kMaxLength = o;
  a.TYPED_ARRAY_SUPPORT = i();
  if (!a.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error == "function") {
    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  }
  function i() {
    try {
      var h = new Uint8Array(1);
      var f = {
        foo: function () {
          return 42;
        }
      };
      Object.setPrototypeOf(f, Uint8Array.prototype);
      Object.setPrototypeOf(h, f);
      return h.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: true,
    get: function () {
      if (a.isBuffer(this)) {
        return this.buffer;
      }
    }
  });
  Object.defineProperty(a.prototype, "offset", {
    enumerable: true,
    get: function () {
      if (a.isBuffer(this)) {
        return this.byteOffset;
      }
    }
  });
  function l(h) {
    if (h > o) {
      throw new RangeError("The value \"" + h + "\" is invalid for option \"size\"");
    }
    var f = new Uint8Array(h);
    Object.setPrototypeOf(f, a.prototype);
    return f;
  }
  function a(h, f, s) {
    if (typeof h == "number") {
      if (typeof f == "string") {
        throw new TypeError("The \"string\" argument must be of type string. Received type number");
      }
      return v(h);
    }
    return p(h, f, s);
  }
  a.poolSize = 8192;
  function p(h, f, s) {
    if (typeof h == "string") {
      return m(h, f);
    }
    if (ArrayBuffer.isView(h)) {
      return S(h);
    }
    if (h == null) {
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h);
    }
    if (L(h, ArrayBuffer) || h && L(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer !== "undefined" && (L(h, SharedArrayBuffer) || h && L(h.buffer, SharedArrayBuffer))) {
      return R(h, f, s);
    }
    if (typeof h == "number") {
      throw new TypeError("The \"value\" argument must not be of type number. Received type number");
    }
    var d = h.valueOf && h.valueOf();
    if (d != null && d !== h) {
      return a.from(d, f, s);
    }
    var w = Z(h);
    if (w) {
      return w;
    }
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function") {
      return a.from(h[Symbol.toPrimitive]("string"), f, s);
    }
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h);
  }
  a.from = function (h, f, s) {
    return p(h, f, s);
  };
  Object.setPrototypeOf(a.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(a, Uint8Array);
  function c(h) {
    if (typeof h != "number") {
      throw new TypeError("\"size\" argument must be of type number");
    }
    if (h < 0) {
      throw new RangeError("The value \"" + h + "\" is invalid for option \"size\"");
    }
  }
  function u(h, f, s) {
    c(h);
    if (h <= 0) {
      return l(h);
    } else if (f !== undefined) {
      if (typeof s == "string") {
        return l(h).fill(f, s);
      } else {
        return l(h).fill(f);
      }
    } else {
      return l(h);
    }
  }
  a.alloc = function (h, f, s) {
    return u(h, f, s);
  };
  function v(h) {
    c(h);
    return l(h < 0 ? 0 : P(h) | 0);
  }
  a.allocUnsafe = function (h) {
    return v(h);
  };
  a.allocUnsafeSlow = function (h) {
    return v(h);
  };
  function m(h, f) {
    if (typeof f != "string" || f === "") {
      f = "utf8";
    }
    if (!a.isEncoding(f)) {
      throw new TypeError("Unknown encoding: " + f);
    }
    var s = H(h, f) | 0;
    var d = l(s);
    var w = d.write(h, f);
    if (w !== s) {
      d = d.slice(0, w);
    }
    return d;
  }
  function g(h) {
    for (var f = h.length < 0 ? 0 : P(h.length) | 0, s = l(f), d = 0; d < f; d += 1) {
      s[d] = h[d] & 255;
    }
    return s;
  }
  function S(h) {
    if (L(h, Uint8Array)) {
      var f = new Uint8Array(h);
      return R(f.buffer, f.byteOffset, f.byteLength);
    }
    return g(h);
  }
  function R(h, f, s) {
    if (f < 0 || h.byteLength < f) {
      throw new RangeError("\"offset\" is outside of buffer bounds");
    }
    if (h.byteLength < f + (s || 0)) {
      throw new RangeError("\"length\" is outside of buffer bounds");
    }
    var d;
    if (f === undefined && s === undefined) {
      d = new Uint8Array(h);
    } else if (s === undefined) {
      d = new Uint8Array(h, f);
    } else {
      d = new Uint8Array(h, f, s);
    }
    Object.setPrototypeOf(d, a.prototype);
    return d;
  }
  function Z(h) {
    if (a.isBuffer(h)) {
      var f = P(h.length) | 0;
      var s = l(f);
      if (s.length !== 0) {
        h.copy(s, 0, 0, f);
      }
      return s;
    }
    if (h.length !== undefined) {
      if (typeof h.length != "number" || Ue(h.length)) {
        return l(0);
      } else {
        return g(h);
      }
    }
    if (h.type === "Buffer" && Array.isArray(h.data)) {
      return g(h.data);
    }
  }
  function P(h) {
    if (h >= o) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
    }
    return h | 0;
  }
  function K(h) {
    if (+h != h) {
      h = 0;
    }
    return a.alloc(+h);
  }
  a.isBuffer = function (f) {
    return f != null && f._isBuffer === true && f !== a.prototype;
  };
  a.compare = function (f, s) {
    if (L(f, Uint8Array)) {
      f = a.from(f, f.offset, f.byteLength);
    }
    if (L(s, Uint8Array)) {
      s = a.from(s, s.offset, s.byteLength);
    }
    if (!a.isBuffer(f) || !a.isBuffer(s)) {
      throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    }
    if (f === s) {
      return 0;
    }
    var d = f.length;
    var w = s.length;
    for (var E = 0, I = Math.min(d, w); E < I; ++E) {
      if (f[E] !== s[E]) {
        d = f[E];
        w = s[E];
        break;
      }
    }
    if (d < w) {
      return -1;
    } else if (w < d) {
      return 1;
    } else {
      return 0;
    }
  };
  a.isEncoding = function (f) {
    switch (String(f).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  a.concat = function (f, s) {
    if (!Array.isArray(f)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    if (f.length === 0) {
      return a.alloc(0);
    }
    var d;
    if (s === undefined) {
      s = 0;
      d = 0;
      for (; d < f.length; ++d) {
        s += f[d].length;
      }
    }
    var w = a.allocUnsafe(s);
    var E = 0;
    for (d = 0; d < f.length; ++d) {
      var I = f[d];
      if (L(I, Uint8Array)) {
        if (E + I.length > w.length) {
          a.from(I).copy(w, E);
        } else {
          Uint8Array.prototype.set.call(w, I, E);
        }
      } else if (a.isBuffer(I)) {
        I.copy(w, E);
      } else {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      E += I.length;
    }
    return w;
  };
  function H(h, f) {
    if (a.isBuffer(h)) {
      return h.length;
    }
    if (ArrayBuffer.isView(h) || L(h, ArrayBuffer)) {
      return h.byteLength;
    }
    if (typeof h != "string") {
      throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof h);
    }
    var s = h.length;
    var d = arguments.length > 2 && arguments[2] === true;
    if (!d && s === 0) {
      return 0;
    }
    var w = false;
    for (;;) {
      switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return s;
        case "utf8":
        case "utf-8":
          return B(h).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return s * 2;
        case "hex":
          return s >>> 1;
        case "base64":
          return T(h).length;
        default:
          if (w) {
            if (d) {
              return -1;
            } else {
              return B(h).length;
            }
          }
          f = ("" + f).toLowerCase();
          w = true;
      }
    }
  }
  a.byteLength = H;
  function U(h, f, s) {
    var d = false;
    if (f === undefined || f < 0) {
      f = 0;
    }
    if (f > this.length || ((s === undefined || s > this.length) && (s = this.length), s <= 0) || (s >>>= 0, f >>>= 0, s <= f)) {
      return "";
    }
    for (h ||= "utf8";;) {
      switch (h) {
        case "hex":
          return Gt(this, f, s);
        case "utf8":
        case "utf-8":
          return ge(this, f, s);
        case "ascii":
          return yt(this, f, s);
        case "latin1":
        case "binary":
          return mt(this, f, s);
        case "base64":
          return he(this, f, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return nt(this, f, s);
        default:
          if (d) {
            throw new TypeError("Unknown encoding: " + h);
          }
          h = (h + "").toLowerCase();
          d = true;
      }
    }
  }
  a.prototype._isBuffer = true;
  function D(h, f, s) {
    var d = h[f];
    h[f] = h[s];
    h[s] = d;
  }
  a.prototype.swap16 = function () {
    var f = this.length;
    if (f % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (var s = 0; s < f; s += 2) {
      D(this, s, s + 1);
    }
    return this;
  };
  a.prototype.swap32 = function () {
    var f = this.length;
    if (f % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (var s = 0; s < f; s += 4) {
      D(this, s, s + 3);
      D(this, s + 1, s + 2);
    }
    return this;
  };
  a.prototype.swap64 = function () {
    var f = this.length;
    if (f % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (var s = 0; s < f; s += 8) {
      D(this, s, s + 7);
      D(this, s + 1, s + 6);
      D(this, s + 2, s + 5);
      D(this, s + 3, s + 4);
    }
    return this;
  };
  a.prototype.toString = function () {
    var f = this.length;
    if (f === 0) {
      return "";
    } else if (arguments.length === 0) {
      return ge(this, 0, f);
    } else {
      return U.apply(this, arguments);
    }
  };
  a.prototype.toLocaleString = a.prototype.toString;
  a.prototype.equals = function (f) {
    if (!a.isBuffer(f)) {
      throw new TypeError("Argument must be a Buffer");
    }
    if (this === f) {
      return true;
    } else {
      return a.compare(this, f) === 0;
    }
  };
  a.prototype.inspect = function () {
    var f = "";
    var s = e.INSPECT_MAX_BYTES;
    f = this.toString("hex", 0, s).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > s) {
      f += " ... ";
    }
    return "<Buffer " + f + ">";
  };
  if (r) {
    a.prototype[r] = a.prototype.inspect;
  }
  a.prototype.compare = function (f, s, d, w, E) {
    if (L(f, Uint8Array)) {
      f = a.from(f, f.offset, f.byteLength);
    }
    if (!a.isBuffer(f)) {
      throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof f);
    }
    if (s === undefined) {
      s = 0;
    }
    if (d === undefined) {
      d = f ? f.length : 0;
    }
    if (w === undefined) {
      w = 0;
    }
    if (E === undefined) {
      E = this.length;
    }
    if (s < 0 || d > f.length || w < 0 || E > this.length) {
      throw new RangeError("out of range index");
    }
    if (w >= E && s >= d) {
      return 0;
    }
    if (w >= E) {
      return -1;
    }
    if (s >= d) {
      return 1;
    }
    s >>>= 0;
    d >>>= 0;
    w >>>= 0;
    E >>>= 0;
    if (this === f) {
      return 0;
    }
    var I = E - w;
    var V = d - s;
    for (var Y = Math.min(I, V), J = this.slice(w, E), ce = f.slice(s, d), ne = 0; ne < Y; ++ne) {
      if (J[ne] !== ce[ne]) {
        I = J[ne];
        V = ce[ne];
        break;
      }
    }
    if (I < V) {
      return -1;
    } else if (V < I) {
      return 1;
    } else {
      return 0;
    }
  };
  function N(h, f, s, d, w) {
    if (h.length === 0) {
      return -1;
    }
    if (typeof s == "string") {
      d = s;
      s = 0;
    } else if (s > 2147483647) {
      s = 2147483647;
    } else if (s < -2147483648) {
      s = -2147483648;
    }
    s = +s;
    if (Ue(s)) {
      s = w ? 0 : h.length - 1;
    }
    if (s < 0) {
      s = h.length + s;
    }
    if (s >= h.length) {
      if (w) {
        return -1;
      }
      s = h.length - 1;
    } else if (s < 0) {
      if (w) {
        s = 0;
      } else {
        return -1;
      }
    }
    if (typeof f == "string") {
      f = a.from(f, d);
    }
    if (a.isBuffer(f)) {
      if (f.length === 0) {
        return -1;
      } else {
        return z(h, f, s, d, w);
      }
    }
    if (typeof f == "number") {
      f = f & 255;
      if (typeof Uint8Array.prototype.indexOf == "function") {
        if (w) {
          return Uint8Array.prototype.indexOf.call(h, f, s);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(h, f, s);
        }
      } else {
        return z(h, [f], s, d, w);
      }
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function z(h, f, s, d, w) {
    var E = 1;
    var I = h.length;
    var V = f.length;
    if (d !== undefined && (d = String(d).toLowerCase(), d === "ucs2" || d === "ucs-2" || d === "utf16le" || d === "utf-16le")) {
      if (h.length < 2 || f.length < 2) {
        return -1;
      }
      E = 2;
      I /= 2;
      V /= 2;
      s /= 2;
    }
    function Y(vr, Er) {
      if (E === 1) {
        return vr[Er];
      } else {
        return vr.readUInt16BE(Er * E);
      }
    }
    var J;
    if (w) {
      var ce = -1;
      for (J = s; J < I; J++) {
        if (Y(h, J) === Y(f, ce === -1 ? 0 : J - ce)) {
          if (ce === -1) {
            ce = J;
          }
          if (J - ce + 1 === V) {
            return ce * E;
          }
        } else {
          if (ce !== -1) {
            J -= J - ce;
          }
          ce = -1;
        }
      }
    } else {
      if (s + V > I) {
        s = I - V;
      }
      J = s;
      for (; J >= 0; J--) {
        var ne = true;
        for (var Kt = 0; Kt < V; Kt++) {
          if (Y(h, J + Kt) !== Y(f, Kt)) {
            ne = false;
            break;
          }
        }
        if (ne) {
          return J;
        }
      }
    }
    return -1;
  }
  a.prototype.includes = function (f, s, d) {
    return this.indexOf(f, s, d) !== -1;
  };
  a.prototype.indexOf = function (f, s, d) {
    return N(this, f, s, d, true);
  };
  a.prototype.lastIndexOf = function (f, s, d) {
    return N(this, f, s, d, false);
  };
  function j(h, f, s, d) {
    s = Number(s) || 0;
    var w = h.length - s;
    if (d) {
      d = Number(d);
      if (d > w) {
        d = w;
      }
    } else {
      d = w;
    }
    var E = f.length;
    if (d > E / 2) {
      d = E / 2;
    }
    for (var I = 0; I < d; ++I) {
      var V = parseInt(f.substr(I * 2, 2), 16);
      if (Ue(V)) {
        return I;
      }
      h[s + I] = V;
    }
    return I;
  }
  function $(h, f, s, d) {
    return k(B(f, h.length - s), h, s, d);
  }
  function O(h, f, s, d) {
    return k(A(f), h, s, d);
  }
  function G(h, f, s, d) {
    return k(T(f), h, s, d);
  }
  function te(h, f, s, d) {
    return k(F(f, h.length - s), h, s, d);
  }
  a.prototype.write = function (f, s, d, w) {
    if (s === undefined) {
      w = "utf8";
      d = this.length;
      s = 0;
    } else if (d === undefined && typeof s == "string") {
      w = s;
      d = this.length;
      s = 0;
    } else if (isFinite(s)) {
      s = s >>> 0;
      if (isFinite(d)) {
        d = d >>> 0;
        if (w === undefined) {
          w = "utf8";
        }
      } else {
        w = d;
        d = undefined;
      }
    } else {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    var E = this.length - s;
    if (d === undefined || d > E) {
      d = E;
    }
    if (f.length > 0 && (d < 0 || s < 0) || s > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    w ||= "utf8";
    var I = false;
    for (;;) {
      switch (w) {
        case "hex":
          return j(this, f, s, d);
        case "utf8":
        case "utf-8":
          return $(this, f, s, d);
        case "ascii":
        case "latin1":
        case "binary":
          return O(this, f, s, d);
        case "base64":
          return G(this, f, s, d);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return te(this, f, s, d);
        default:
          if (I) {
            throw new TypeError("Unknown encoding: " + w);
          }
          w = ("" + w).toLowerCase();
          I = true;
      }
    }
  };
  a.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function he(h, f, s) {
    if (f === 0 && s === h.length) {
      return n.fromByteArray(h);
    } else {
      return n.fromByteArray(h.slice(f, s));
    }
  }
  function ge(h, f, s) {
    s = Math.min(h.length, s);
    var d = [];
    for (var w = f; w < s;) {
      var E = h[w];
      var I = null;
      var V = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
      if (w + V <= s) {
        var Y;
        var J;
        var ce;
        var ne;
        switch (V) {
          case 1:
            if (E < 128) {
              I = E;
            }
            break;
          case 2:
            Y = h[w + 1];
            if ((Y & 192) === 128) {
              ne = (E & 31) << 6 | Y & 63;
              if (ne > 127) {
                I = ne;
              }
            }
            break;
          case 3:
            Y = h[w + 1];
            J = h[w + 2];
            if ((Y & 192) === 128 && (J & 192) === 128) {
              ne = (E & 15) << 12 | (Y & 63) << 6 | J & 63;
              if (ne > 2047 && (ne < 55296 || ne > 57343)) {
                I = ne;
              }
            }
            break;
          case 4:
            Y = h[w + 1];
            J = h[w + 2];
            ce = h[w + 3];
            if ((Y & 192) === 128 && (J & 192) === 128 && (ce & 192) === 128) {
              ne = (E & 15) << 18 | (Y & 63) << 12 | (J & 63) << 6 | ce & 63;
              if (ne > 65535 && ne < 1114112) {
                I = ne;
              }
            }
        }
      }
      if (I === null) {
        I = 65533;
        V = 1;
      } else if (I > 65535) {
        I -= 65536;
        d.push(I >>> 10 & 1023 | 55296);
        I = I & 1023 | 56320;
      }
      d.push(I);
      w += V;
    }
    return ve(d);
  }
  var be = 4096;
  function ve(h) {
    var f = h.length;
    if (f <= be) {
      return String.fromCharCode.apply(String, h);
    }
    var s = "";
    for (var d = 0; d < f;) {
      s += String.fromCharCode.apply(String, h.slice(d, d += be));
    }
    return s;
  }
  function yt(h, f, s) {
    var d = "";
    s = Math.min(h.length, s);
    for (var w = f; w < s; ++w) {
      d += String.fromCharCode(h[w] & 127);
    }
    return d;
  }
  function mt(h, f, s) {
    var d = "";
    s = Math.min(h.length, s);
    for (var w = f; w < s; ++w) {
      d += String.fromCharCode(h[w]);
    }
    return d;
  }
  function Gt(h, f, s) {
    var d = h.length;
    if (!f || f < 0) {
      f = 0;
    }
    if (!s || s < 0 || s > d) {
      s = d;
    }
    var w = "";
    for (var E = f; E < s; ++E) {
      w += bt[h[E]];
    }
    return w;
  }
  function nt(h, f, s) {
    for (var d = h.slice(f, s), w = "", E = 0; E < d.length - 1; E += 2) {
      w += String.fromCharCode(d[E] + d[E + 1] * 256);
    }
    return w;
  }
  a.prototype.slice = function (f, s) {
    var d = this.length;
    f = ~~f;
    s = s === undefined ? d : ~~s;
    if (f < 0) {
      f += d;
      if (f < 0) {
        f = 0;
      }
    } else if (f > d) {
      f = d;
    }
    if (s < 0) {
      s += d;
      if (s < 0) {
        s = 0;
      }
    } else if (s > d) {
      s = d;
    }
    if (s < f) {
      s = f;
    }
    var w = this.subarray(f, s);
    Object.setPrototypeOf(w, a.prototype);
    return w;
  };
  function X(h, f, s) {
    if (h % 1 !== 0 || h < 0) {
      throw new RangeError("offset is not uint");
    }
    if (h + f > s) {
      throw new RangeError("Trying to access beyond buffer length");
    }
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function (f, s, d) {
    f = f >>> 0;
    s = s >>> 0;
    if (!d) {
      X(f, s, this.length);
    }
    var w = this[f];
    for (var E = 1, I = 0; ++I < s && (E *= 256);) {
      w += this[f + I] * E;
    }
    return w;
  };
  a.prototype.readUintBE = a.prototype.readUIntBE = function (f, s, d) {
    f = f >>> 0;
    s = s >>> 0;
    if (!d) {
      X(f, s, this.length);
    }
    var w = this[f + --s];
    for (var E = 1; s > 0 && (E *= 256);) {
      w += this[f + --s] * E;
    }
    return w;
  };
  a.prototype.readUint8 = a.prototype.readUInt8 = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 1, this.length);
    }
    return this[f];
  };
  a.prototype.readUint16LE = a.prototype.readUInt16LE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 2, this.length);
    }
    return this[f] | this[f + 1] << 8;
  };
  a.prototype.readUint16BE = a.prototype.readUInt16BE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 2, this.length);
    }
    return this[f] << 8 | this[f + 1];
  };
  a.prototype.readUint32LE = a.prototype.readUInt32LE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 4, this.length);
    }
    return (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  };
  a.prototype.readUint32BE = a.prototype.readUInt32BE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 4, this.length);
    }
    return this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  };
  a.prototype.readIntLE = function (f, s, d) {
    f = f >>> 0;
    s = s >>> 0;
    if (!d) {
      X(f, s, this.length);
    }
    var w = this[f];
    for (var E = 1, I = 0; ++I < s && (E *= 256);) {
      w += this[f + I] * E;
    }
    E *= 128;
    if (w >= E) {
      w -= Math.pow(2, s * 8);
    }
    return w;
  };
  a.prototype.readIntBE = function (f, s, d) {
    f = f >>> 0;
    s = s >>> 0;
    if (!d) {
      X(f, s, this.length);
    }
    for (var w = s, E = 1, I = this[f + --w]; w > 0 && (E *= 256);) {
      I += this[f + --w] * E;
    }
    E *= 128;
    if (I >= E) {
      I -= Math.pow(2, s * 8);
    }
    return I;
  };
  a.prototype.readInt8 = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 1, this.length);
    }
    if (this[f] & 128) {
      return (255 - this[f] + 1) * -1;
    } else {
      return this[f];
    }
  };
  a.prototype.readInt16LE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 2, this.length);
    }
    var d = this[f] | this[f + 1] << 8;
    if (d & 32768) {
      return d | -65536;
    } else {
      return d;
    }
  };
  a.prototype.readInt16BE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 2, this.length);
    }
    var d = this[f + 1] | this[f] << 8;
    if (d & 32768) {
      return d | -65536;
    } else {
      return d;
    }
  };
  a.prototype.readInt32LE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 4, this.length);
    }
    return this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  };
  a.prototype.readInt32BE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 4, this.length);
    }
    return this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  };
  a.prototype.readFloatLE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 4, this.length);
    }
    return t.read(this, f, true, 23, 4);
  };
  a.prototype.readFloatBE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 4, this.length);
    }
    return t.read(this, f, false, 23, 4);
  };
  a.prototype.readDoubleLE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 8, this.length);
    }
    return t.read(this, f, true, 52, 8);
  };
  a.prototype.readDoubleBE = function (f, s) {
    f = f >>> 0;
    if (!s) {
      X(f, 8, this.length);
    }
    return t.read(this, f, false, 52, 8);
  };
  function _(h, f, s, d, w, E) {
    if (!a.isBuffer(h)) {
      throw new TypeError("\"buffer\" argument must be a Buffer instance");
    }
    if (f > w || f < E) {
      throw new RangeError("\"value\" argument is out of bounds");
    }
    if (s + d > h.length) {
      throw new RangeError("Index out of range");
    }
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function (f, s, d, w) {
    f = +f;
    s = s >>> 0;
    d = d >>> 0;
    if (!w) {
      var E = Math.pow(2, d * 8) - 1;
      _(this, f, s, d, E, 0);
    }
    var I = 1;
    var V = 0;
    for (this[s] = f & 255; ++V < d && (I *= 256);) {
      this[s + V] = f / I & 255;
    }
    return s + d;
  };
  a.prototype.writeUintBE = a.prototype.writeUIntBE = function (f, s, d, w) {
    f = +f;
    s = s >>> 0;
    d = d >>> 0;
    if (!w) {
      var E = Math.pow(2, d * 8) - 1;
      _(this, f, s, d, E, 0);
    }
    var I = d - 1;
    var V = 1;
    for (this[s + I] = f & 255; --I >= 0 && (V *= 256);) {
      this[s + I] = f / V & 255;
    }
    return s + d;
  };
  a.prototype.writeUint8 = a.prototype.writeUInt8 = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 1, 255, 0);
    }
    this[s] = f & 255;
    return s + 1;
  };
  a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 2, 65535, 0);
    }
    this[s] = f & 255;
    this[s + 1] = f >>> 8;
    return s + 2;
  };
  a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 2, 65535, 0);
    }
    this[s] = f >>> 8;
    this[s + 1] = f & 255;
    return s + 2;
  };
  a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 4, 4294967295, 0);
    }
    this[s + 3] = f >>> 24;
    this[s + 2] = f >>> 16;
    this[s + 1] = f >>> 8;
    this[s] = f & 255;
    return s + 4;
  };
  a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 4, 4294967295, 0);
    }
    this[s] = f >>> 24;
    this[s + 1] = f >>> 16;
    this[s + 2] = f >>> 8;
    this[s + 3] = f & 255;
    return s + 4;
  };
  a.prototype.writeIntLE = function (f, s, d, w) {
    f = +f;
    s = s >>> 0;
    if (!w) {
      var E = Math.pow(2, d * 8 - 1);
      _(this, f, s, d, E - 1, -E);
    }
    var I = 0;
    var V = 1;
    var Y = 0;
    for (this[s] = f & 255; ++I < d && (V *= 256);) {
      if (f < 0 && Y === 0 && this[s + I - 1] !== 0) {
        Y = 1;
      }
      this[s + I] = (f / V >> 0) - Y & 255;
    }
    return s + d;
  };
  a.prototype.writeIntBE = function (f, s, d, w) {
    f = +f;
    s = s >>> 0;
    if (!w) {
      var E = Math.pow(2, d * 8 - 1);
      _(this, f, s, d, E - 1, -E);
    }
    var I = d - 1;
    var V = 1;
    var Y = 0;
    for (this[s + I] = f & 255; --I >= 0 && (V *= 256);) {
      if (f < 0 && Y === 0 && this[s + I + 1] !== 0) {
        Y = 1;
      }
      this[s + I] = (f / V >> 0) - Y & 255;
    }
    return s + d;
  };
  a.prototype.writeInt8 = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 1, 127, -128);
    }
    if (f < 0) {
      f = 255 + f + 1;
    }
    this[s] = f & 255;
    return s + 1;
  };
  a.prototype.writeInt16LE = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 2, 32767, -32768);
    }
    this[s] = f & 255;
    this[s + 1] = f >>> 8;
    return s + 2;
  };
  a.prototype.writeInt16BE = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 2, 32767, -32768);
    }
    this[s] = f >>> 8;
    this[s + 1] = f & 255;
    return s + 2;
  };
  a.prototype.writeInt32LE = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 4, 2147483647, -2147483648);
    }
    this[s] = f & 255;
    this[s + 1] = f >>> 8;
    this[s + 2] = f >>> 16;
    this[s + 3] = f >>> 24;
    return s + 4;
  };
  a.prototype.writeInt32BE = function (f, s, d) {
    f = +f;
    s = s >>> 0;
    if (!d) {
      _(this, f, s, 4, 2147483647, -2147483648);
    }
    if (f < 0) {
      f = 4294967295 + f + 1;
    }
    this[s] = f >>> 24;
    this[s + 1] = f >>> 16;
    this[s + 2] = f >>> 8;
    this[s + 3] = f & 255;
    return s + 4;
  };
  function y(h, f, s, d, w, E) {
    if (s + d > h.length) {
      throw new RangeError("Index out of range");
    }
    if (s < 0) {
      throw new RangeError("Index out of range");
    }
  }
  function x(h, f, s, d, w) {
    f = +f;
    s = s >>> 0;
    if (!w) {
      y(h, f, s, 4);
    }
    t.write(h, f, s, d, 23, 4);
    return s + 4;
  }
  a.prototype.writeFloatLE = function (f, s, d) {
    return x(this, f, s, true, d);
  };
  a.prototype.writeFloatBE = function (f, s, d) {
    return x(this, f, s, false, d);
  };
  function b(h, f, s, d, w) {
    f = +f;
    s = s >>> 0;
    if (!w) {
      y(h, f, s, 8);
    }
    t.write(h, f, s, d, 52, 8);
    return s + 8;
  }
  a.prototype.writeDoubleLE = function (f, s, d) {
    return b(this, f, s, true, d);
  };
  a.prototype.writeDoubleBE = function (f, s, d) {
    return b(this, f, s, false, d);
  };
  a.prototype.copy = function (f, s, d, w) {
    if (!a.isBuffer(f)) {
      throw new TypeError("argument should be a Buffer");
    }
    d ||= 0;
    if (!w && w !== 0) {
      w = this.length;
    }
    if (s >= f.length) {
      s = f.length;
    }
    s ||= 0;
    if (w > 0 && w < d) {
      w = d;
    }
    if (w === d || f.length === 0 || this.length === 0) {
      return 0;
    }
    if (s < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (d < 0 || d >= this.length) {
      throw new RangeError("Index out of range");
    }
    if (w < 0) {
      throw new RangeError("sourceEnd out of bounds");
    }
    if (w > this.length) {
      w = this.length;
    }
    if (f.length - s < w - d) {
      w = f.length - s + d;
    }
    var E = w - d;
    if (this === f && typeof Uint8Array.prototype.copyWithin == "function") {
      this.copyWithin(s, d, w);
    } else {
      Uint8Array.prototype.set.call(f, this.subarray(d, w), s);
    }
    return E;
  };
  a.prototype.fill = function (f, s, d, w) {
    if (typeof f == "string") {
      if (typeof s == "string") {
        w = s;
        s = 0;
        d = this.length;
      } else if (typeof d == "string") {
        w = d;
        d = this.length;
      }
      if (w !== undefined && typeof w != "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof w == "string" && !a.isEncoding(w)) {
        throw new TypeError("Unknown encoding: " + w);
      }
      if (f.length === 1) {
        var E = f.charCodeAt(0);
        if (w === "utf8" && E < 128 || w === "latin1") {
          f = E;
        }
      }
    } else if (typeof f == "number") {
      f = f & 255;
    } else if (typeof f == "boolean") {
      f = Number(f);
    }
    if (s < 0 || this.length < s || this.length < d) {
      throw new RangeError("Out of range index");
    }
    if (d <= s) {
      return this;
    }
    s = s >>> 0;
    d = d === undefined ? this.length : d >>> 0;
    f ||= 0;
    var I;
    if (typeof f == "number") {
      for (I = s; I < d; ++I) {
        this[I] = f;
      }
    } else {
      var V = a.isBuffer(f) ? f : a.from(f, w);
      var Y = V.length;
      if (Y === 0) {
        throw new TypeError("The value \"" + f + "\" is invalid for argument \"value\"");
      }
      for (I = 0; I < d - s; ++I) {
        this[I + s] = V[I % Y];
      }
    }
    return this;
  };
  var M = /[^+/0-9A-Za-z-_]/g;
  function C(h) {
    h = h.split("=")[0];
    h = h.trim().replace(M, "");
    if (h.length < 2) {
      return "";
    }
    while (h.length % 4 !== 0) {
      h = h + "=";
    }
    return h;
  }
  function B(h, f) {
    f = f || Infinity;
    var s;
    for (var d = h.length, w = null, E = [], I = 0; I < d; ++I) {
      s = h.charCodeAt(I);
      if (s > 55295 && s < 57344) {
        if (!w) {
          if (s > 56319) {
            if ((f -= 3) > -1) {
              E.push(239, 191, 189);
            }
            continue;
          } else if (I + 1 === d) {
            if ((f -= 3) > -1) {
              E.push(239, 191, 189);
            }
            continue;
          }
          w = s;
          continue;
        }
        if (s < 56320) {
          if ((f -= 3) > -1) {
            E.push(239, 191, 189);
          }
          w = s;
          continue;
        }
        s = (w - 55296 << 10 | s - 56320) + 65536;
      } else if (w && (f -= 3) > -1) {
        E.push(239, 191, 189);
      }
      w = null;
      if (s < 128) {
        if ((f -= 1) < 0) {
          break;
        }
        E.push(s);
      } else if (s < 2048) {
        if ((f -= 2) < 0) {
          break;
        }
        E.push(s >> 6 | 192, s & 63 | 128);
      } else if (s < 65536) {
        if ((f -= 3) < 0) {
          break;
        }
        E.push(s >> 12 | 224, s >> 6 & 63 | 128, s & 63 | 128);
      } else if (s < 1114112) {
        if ((f -= 4) < 0) {
          break;
        }
        E.push(s >> 18 | 240, s >> 12 & 63 | 128, s >> 6 & 63 | 128, s & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return E;
  }
  function A(h) {
    var f = [];
    for (var s = 0; s < h.length; ++s) {
      f.push(h.charCodeAt(s) & 255);
    }
    return f;
  }
  function F(h, f) {
    var s;
    var d;
    var w;
    var E = [];
    for (var I = 0; I < h.length && !((f -= 2) < 0); ++I) {
      s = h.charCodeAt(I);
      d = s >> 8;
      w = s % 256;
      E.push(w);
      E.push(d);
    }
    return E;
  }
  function T(h) {
    return n.toByteArray(C(h));
  }
  function k(h, f, s, d) {
    for (var w = 0; w < d && !(w + s >= f.length) && !(w >= h.length); ++w) {
      f[w + s] = h[w];
    }
    return w;
  }
  function L(h, f) {
    return h instanceof f || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === f.name;
  }
  function Ue(h) {
    return h !== h;
  }
  var bt = function () {
    var h = "0123456789abcdef";
    var f = new Array(256);
    for (var s = 0; s < 16; ++s) {
      var d = s * 16;
      for (var w = 0; w < 16; ++w) {
        f[d + w] = h[s] + h[w];
      }
    }
    return f;
  }();
})(rr);
var ie = {};
var ke;
var Se;
function ir() {
  throw new Error("setTimeout has not been defined");
}
function or() {
  throw new Error("clearTimeout has not been defined");
}
(function () {
  try {
    if (typeof setTimeout == "function") {
      ke = setTimeout;
    } else {
      ke = ir;
    }
  } catch {
    ke = ir;
  }
  try {
    if (typeof clearTimeout == "function") {
      Se = clearTimeout;
    } else {
      Se = or;
    }
  } catch {
    Se = or;
  }
})();
function yo(e) {
  if (ke === setTimeout) {
    return setTimeout(e, 0);
  }
  if ((ke === ir || !ke) && setTimeout) {
    ke = setTimeout;
    return setTimeout(e, 0);
  }
  try {
    return ke(e, 0);
  } catch {
    try {
      return ke.call(null, e, 0);
    } catch {
      return ke.call(this, e, 0);
    }
  }
}
function wl(e) {
  if (Se === clearTimeout) {
    return clearTimeout(e);
  }
  if ((Se === or || !Se) && clearTimeout) {
    Se = clearTimeout;
    return clearTimeout(e);
  }
  try {
    return Se(e);
  } catch {
    try {
      return Se.call(null, e);
    } catch {
      return Se.call(this, e);
    }
  }
}
var Le = [];
var lt = false;
var Ye;
var en = -1;
function gl() {
  if (!!lt && !!Ye) {
    lt = false;
    if (Ye.length) {
      Le = Ye.concat(Le);
    } else {
      en = -1;
    }
    if (Le.length) {
      mo();
    }
  }
}
function mo() {
  if (!lt) {
    var e = yo(gl);
    lt = true;
    for (var n = Le.length; n;) {
      Ye = Le;
      Le = [];
      while (++en < n) {
        if (Ye) {
          Ye[en].run();
        }
      }
      en = -1;
      n = Le.length;
    }
    Ye = null;
    lt = false;
    wl(e);
  }
}
ie.nextTick = function (e) {
  var n = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var t = 1; t < arguments.length; t++) {
      n[t - 1] = arguments[t];
    }
  }
  Le.push(new bo(e, n));
  if (Le.length === 1 && !lt) {
    yo(mo);
  }
};
function bo(e, n) {
  this.fun = e;
  this.array = n;
}
bo.prototype.run = function () {
  this.fun.apply(null, this.array);
};
ie.title = "browser";
ie.browser = true;
ie.env = {};
ie.argv = [];
ie.version = "";
ie.versions = {};
function Ne() {}
ie.on = Ne;
ie.addListener = Ne;
ie.once = Ne;
ie.off = Ne;
ie.removeListener = Ne;
ie.removeAllListeners = Ne;
ie.emit = Ne;
ie.prependListener = Ne;
ie.prependOnceListener = Ne;
ie.listeners = function (e) {
  return [];
};
ie.binding = function (e) {
  throw new Error("process.binding is not supported");
};
ie.cwd = function () {
  return "/";
};
ie.chdir = function (e) {
  throw new Error("process.chdir is not supported");
};
ie.umask = function () {
  return 0;
};
(function (e) {
  function n() {
    var r = this || self;
    delete e.prototype.__magic__;
    return r;
  }
  if (typeof globalThis == "object") {
    return globalThis;
  }
  if (this) {
    return n();
  }
  e.defineProperty(e.prototype, "__magic__", {
    configurable: true,
    get: n
  });
  var t = __magic__;
  return t;
})(Object);
var vo = {
  exports: {}
};
(function (e) {
  (function (n, t, r) {
    e.exports = r(n);
    e.exports.default = e.exports;
  })(Fo, "UUID", function () {
    function n(_, y, x, b, M, C) {
      var B = function (F, T) {
        var k = F.toString(16);
        if (k.length < 2) {
          k = "0" + k;
        }
        if (T) {
          k = k.toUpperCase();
        }
        return k;
      };
      for (var A = y; A <= x; A++) {
        M[C++] = B(_[A], b);
      }
      return M;
    }
    function t(_, y, x, b, M) {
      for (var C = y; C <= x; C += 2) {
        b[M++] = parseInt(_.substr(C, 2), 16);
      }
    }
    var r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
    var o = [0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0];
    function i(_, y) {
      if (y % 4 !== 0) {
        throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
      }
      var x = "";
      for (var b = 0, M = 0; b < y;) {
        M = M * 256 + _[b++];
        if (b % 4 === 0) {
          for (var C = 52200625; C >= 1;) {
            var B = Math.floor(M / C) % 85;
            x += r[B];
            C /= 85;
          }
          M = 0;
        }
      }
      return x;
    }
    function l(_, y) {
      var x = _.length;
      if (x % 5 !== 0) {
        throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
      }
      if (typeof y === "undefined") {
        y = new Array(x * 4 / 5);
      }
      for (var b = 0, M = 0, C = 0; b < x;) {
        var B = _.charCodeAt(b++) - 32;
        if (B < 0 || B >= o.length) {
          break;
        }
        C = C * 85 + o[B];
        if (b % 5 === 0) {
          for (var A = 16777216; A >= 1;) {
            y[M++] = Math.trunc(C / A % 256);
            A /= 256;
          }
          C = 0;
        }
      }
      return y;
    }
    function a(_, y) {
      var x = {
        ibits: 8,
        obits: 8,
        obigendian: true
      };
      for (var b in y) {
        if (typeof x[b] !== "undefined") {
          x[b] = y[b];
        }
      }
      for (var M = [], C = 0, B, A, F = 0, T, k = 0, L = _.length; F === 0 && (A = _.charCodeAt(C++)), B = A >> x.ibits - (F + 8) & 255, F = (F + 8) % x.ibits, x.obigendian ? k === 0 ? T = B << x.obits - 8 : T |= B << x.obits - 8 - k : k === 0 ? T = B : T |= B << k, k = (k + 8) % x.obits, k !== 0 || !(M.push(T), C >= L););
      return M;
    }
    function p(_, y) {
      var x = {
        ibits: 32,
        ibigendian: true
      };
      for (var b in y) {
        if (typeof x[b] !== "undefined") {
          x[b] = y[b];
        }
      }
      var M = "";
      var C = 4294967295;
      if (x.ibits < 32) {
        C = (1 << x.ibits) - 1;
      }
      for (var B = _.length, A = 0; A < B; A++) {
        var F = _[A] & C;
        for (var T = 0; T < x.ibits; T += 8) {
          if (x.ibigendian) {
            M += String.fromCharCode(F >> x.ibits - 8 - T & 255);
          } else {
            M += String.fromCharCode(F >> T & 255);
          }
        }
      }
      return M;
    }
    var c = 8;
    var u = 8;
    var v = 256;
    function m(_, y, x, b, M, C, B, A) {
      return [A, B, C, M, b, x, y, _];
    }
    function g() {
      return m(0, 0, 0, 0, 0, 0, 0, 0);
    }
    function S(_) {
      return _.slice(0);
    }
    function R(_) {
      var y = g();
      for (var x = 0; x < c; x++) {
        y[x] = Math.floor(_ % v);
        _ /= v;
      }
      return y;
    }
    function Z(_) {
      var y = 0;
      for (var x = c - 1; x >= 0; x--) {
        y *= v;
        y += _[x];
      }
      return Math.floor(y);
    }
    function P(_, y) {
      var x = 0;
      for (var b = 0; b < c; b++) {
        x += _[b] + y[b];
        _[b] = Math.floor(x % v);
        x = Math.floor(x / v);
      }
      return x;
    }
    function K(_, y) {
      var x = 0;
      for (var b = 0; b < c; b++) {
        x += _[b] * y;
        _[b] = Math.floor(x % v);
        x = Math.floor(x / v);
      }
      return x;
    }
    function H(_, y) {
      var x;
      var b;
      var M = new Array(c + c);
      for (x = 0; x < c + c; x++) {
        M[x] = 0;
      }
      var C;
      for (x = 0; x < c; x++) {
        C = 0;
        b = 0;
        for (; b < c; b++) {
          C += _[x] * y[b] + M[x + b];
          M[x + b] = C % v;
          C /= v;
        }
        for (; b < c + c - x; b++) {
          C += M[x + b];
          M[x + b] = C % v;
          C /= v;
        }
      }
      for (x = 0; x < c; x++) {
        _[x] = M[x];
      }
      return M.slice(c, c);
    }
    function U(_, y) {
      for (var x = 0; x < c; x++) {
        _[x] &= y[x];
      }
      return _;
    }
    function D(_, y) {
      for (var x = 0; x < c; x++) {
        _[x] |= y[x];
      }
      return _;
    }
    function N(_, y) {
      var x = g();
      if (y % u !== 0) {
        throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
      }
      for (var b = Math.floor(y / u), M = 0; M < b; M++) {
        for (var C = c - 1 - 1; C >= 0; C--) {
          x[C + 1] = x[C];
        }
        x[0] = _[0];
        C = 0;
        for (; C < c - 1; C++) {
          _[C] = _[C + 1];
        }
        _[C] = 0;
      }
      return Z(x);
    }
    function z(_, y) {
      if (y > c * u) {
        throw new Error("ui64_ror: invalid number of bits to shift");
      }
      var x = new Array(c + c);
      var b;
      for (b = 0; b < c; b++) {
        x[b + c] = _[b];
        x[b] = 0;
      }
      var M = Math.floor(y / u);
      var C = y % u;
      for (b = M; b < c + c - 1; b++) {
        x[b - M] = (x[b] >>> C | x[b + 1] << u - C) & (1 << u) - 1;
      }
      x[c + c - 1 - M] = x[c + c - 1] >>> C & (1 << u) - 1;
      b = c + c - 1 - M + 1;
      for (; b < c + c; b++) {
        x[b] = 0;
      }
      for (b = 0; b < c; b++) {
        _[b] = x[b + c];
      }
      return x.slice(0, c);
    }
    function j(_, y) {
      if (y > c * u) {
        throw new Error("ui64_rol: invalid number of bits to shift");
      }
      var x = new Array(c + c);
      var b;
      for (b = 0; b < c; b++) {
        x[b + c] = 0;
        x[b] = _[b];
      }
      var M = Math.floor(y / u);
      var C = y % u;
      for (b = c - 1 - M; b > 0; b--) {
        x[b + M] = (x[b] << C | x[b - 1] >>> u - C) & (1 << u) - 1;
      }
      x[0 + M] = x[0] << C & (1 << u) - 1;
      b = 0 + M - 1;
      for (; b >= 0; b--) {
        x[b] = 0;
      }
      for (b = 0; b < c; b++) {
        _[b] = x[b];
      }
      return x.slice(c, c);
    }
    function $(_, y) {
      for (var x = 0; x < c; x++) {
        _[x] ^= y[x];
      }
    }
    function O(_, y) {
      var x = (_ & 65535) + (y & 65535);
      var b = (_ >> 16) + (y >> 16) + (x >> 16);
      return b << 16 | x & 65535;
    }
    function G(_, y) {
      return _ << y & -1 | _ >>> 32 - y & -1;
    }
    function te(_, y) {
      function x(w, E, I, V) {
        if (w < 20) {
          return E & I | ~E & V;
        } else if (w < 40) {
          return E ^ I ^ V;
        } else if (w < 60) {
          return E & I | E & V | I & V;
        } else {
          return E ^ I ^ V;
        }
      }
      function b(w) {
        if (w < 20) {
          return 1518500249;
        } else if (w < 40) {
          return 1859775393;
        } else if (w < 60) {
          return -1894007588;
        } else {
          return -899497514;
        }
      }
      _[y >> 5] |= 128 << 24 - y % 32;
      _[(y + 64 >> 9 << 4) + 15] = y;
      var M = Array(80);
      var C = 1732584193;
      var B = -271733879;
      var A = -1732584194;
      var F = 271733878;
      var T = -1009589776;
      for (var k = 0; k < _.length; k += 16) {
        var L = C;
        var Ue = B;
        var bt = A;
        var h = F;
        var f = T;
        for (var s = 0; s < 80; s++) {
          if (s < 16) {
            M[s] = _[k + s];
          } else {
            M[s] = G(M[s - 3] ^ M[s - 8] ^ M[s - 14] ^ M[s - 16], 1);
          }
          var d = O(O(G(C, 5), x(s, B, A, F)), O(O(T, M[s]), b(s)));
          T = F;
          F = A;
          A = G(B, 30);
          B = C;
          C = d;
        }
        C = O(C, L);
        B = O(B, Ue);
        A = O(A, bt);
        F = O(F, h);
        T = O(T, f);
      }
      return [C, B, A, F, T];
    }
    function he(_) {
      return p(te(a(_, {
        ibits: 8,
        obits: 32,
        obigendian: true
      }), _.length * 8), {
        ibits: 32,
        ibigendian: true
      });
    }
    function ge(_, y) {
      function x(s, d, w, E, I, V) {
        return O(G(O(O(d, s), O(E, V)), I), w);
      }
      function b(s, d, w, E, I, V, Y) {
        return x(d & w | ~d & E, s, d, I, V, Y);
      }
      function M(s, d, w, E, I, V, Y) {
        return x(d & E | w & ~E, s, d, I, V, Y);
      }
      function C(s, d, w, E, I, V, Y) {
        return x(d ^ w ^ E, s, d, I, V, Y);
      }
      function B(s, d, w, E, I, V, Y) {
        return x(w ^ (d | ~E), s, d, I, V, Y);
      }
      _[y >> 5] |= 128 << y % 32;
      _[(y + 64 >>> 9 << 4) + 14] = y;
      var A = 1732584193;
      var F = -271733879;
      var T = -1732584194;
      var k = 271733878;
      for (var L = 0; L < _.length; L += 16) {
        var Ue = A;
        var bt = F;
        var h = T;
        var f = k;
        A = b(A, F, T, k, _[L + 0], 7, -680876936);
        k = b(k, A, F, T, _[L + 1], 12, -389564586);
        T = b(T, k, A, F, _[L + 2], 17, 606105819);
        F = b(F, T, k, A, _[L + 3], 22, -1044525330);
        A = b(A, F, T, k, _[L + 4], 7, -176418897);
        k = b(k, A, F, T, _[L + 5], 12, 1200080426);
        T = b(T, k, A, F, _[L + 6], 17, -1473231341);
        F = b(F, T, k, A, _[L + 7], 22, -45705983);
        A = b(A, F, T, k, _[L + 8], 7, 1770035416);
        k = b(k, A, F, T, _[L + 9], 12, -1958414417);
        T = b(T, k, A, F, _[L + 10], 17, -42063);
        F = b(F, T, k, A, _[L + 11], 22, -1990404162);
        A = b(A, F, T, k, _[L + 12], 7, 1804603682);
        k = b(k, A, F, T, _[L + 13], 12, -40341101);
        T = b(T, k, A, F, _[L + 14], 17, -1502002290);
        F = b(F, T, k, A, _[L + 15], 22, 1236535329);
        A = M(A, F, T, k, _[L + 1], 5, -165796510);
        k = M(k, A, F, T, _[L + 6], 9, -1069501632);
        T = M(T, k, A, F, _[L + 11], 14, 643717713);
        F = M(F, T, k, A, _[L + 0], 20, -373897302);
        A = M(A, F, T, k, _[L + 5], 5, -701558691);
        k = M(k, A, F, T, _[L + 10], 9, 38016083);
        T = M(T, k, A, F, _[L + 15], 14, -660478335);
        F = M(F, T, k, A, _[L + 4], 20, -405537848);
        A = M(A, F, T, k, _[L + 9], 5, 568446438);
        k = M(k, A, F, T, _[L + 14], 9, -1019803690);
        T = M(T, k, A, F, _[L + 3], 14, -187363961);
        F = M(F, T, k, A, _[L + 8], 20, 1163531501);
        A = M(A, F, T, k, _[L + 13], 5, -1444681467);
        k = M(k, A, F, T, _[L + 2], 9, -51403784);
        T = M(T, k, A, F, _[L + 7], 14, 1735328473);
        F = M(F, T, k, A, _[L + 12], 20, -1926607734);
        A = C(A, F, T, k, _[L + 5], 4, -378558);
        k = C(k, A, F, T, _[L + 8], 11, -2022574463);
        T = C(T, k, A, F, _[L + 11], 16, 1839030562);
        F = C(F, T, k, A, _[L + 14], 23, -35309556);
        A = C(A, F, T, k, _[L + 1], 4, -1530992060);
        k = C(k, A, F, T, _[L + 4], 11, 1272893353);
        T = C(T, k, A, F, _[L + 7], 16, -155497632);
        F = C(F, T, k, A, _[L + 10], 23, -1094730640);
        A = C(A, F, T, k, _[L + 13], 4, 681279174);
        k = C(k, A, F, T, _[L + 0], 11, -358537222);
        T = C(T, k, A, F, _[L + 3], 16, -722521979);
        F = C(F, T, k, A, _[L + 6], 23, 76029189);
        A = C(A, F, T, k, _[L + 9], 4, -640364487);
        k = C(k, A, F, T, _[L + 12], 11, -421815835);
        T = C(T, k, A, F, _[L + 15], 16, 530742520);
        F = C(F, T, k, A, _[L + 2], 23, -995338651);
        A = B(A, F, T, k, _[L + 0], 6, -198630844);
        k = B(k, A, F, T, _[L + 7], 10, 1126891415);
        T = B(T, k, A, F, _[L + 14], 15, -1416354905);
        F = B(F, T, k, A, _[L + 5], 21, -57434055);
        A = B(A, F, T, k, _[L + 12], 6, 1700485571);
        k = B(k, A, F, T, _[L + 3], 10, -1894986606);
        T = B(T, k, A, F, _[L + 10], 15, -1051523);
        F = B(F, T, k, A, _[L + 1], 21, -2054922799);
        A = B(A, F, T, k, _[L + 8], 6, 1873313359);
        k = B(k, A, F, T, _[L + 15], 10, -30611744);
        T = B(T, k, A, F, _[L + 6], 15, -1560198380);
        F = B(F, T, k, A, _[L + 13], 21, 1309151649);
        A = B(A, F, T, k, _[L + 4], 6, -145523070);
        k = B(k, A, F, T, _[L + 11], 10, -1120210379);
        T = B(T, k, A, F, _[L + 2], 15, 718787259);
        F = B(F, T, k, A, _[L + 9], 21, -343485551);
        A = O(A, Ue);
        F = O(F, bt);
        T = O(T, h);
        k = O(k, f);
      }
      return [A, F, T, k];
    }
    function be(_) {
      return p(ge(a(_, {
        ibits: 8,
        obits: 32,
        obigendian: false
      }), _.length * 8), {
        ibits: 32,
        ibigendian: false
      });
    }
    function ve(_) {
      this.mul = m(88, 81, 244, 45, 76, 149, 127, 45);
      this.inc = m(20, 5, 123, 126, 247, 103, 129, 79);
      this.mask = m(0, 0, 0, 0, 255, 255, 255, 255);
      this.state = S(this.inc);
      this.next();
      U(this.state, this.mask);
      var y;
      if (_ !== undefined) {
        _ = R(_ >>> 0);
      } else if (typeof window == "object" && typeof window.crypto == "object" && typeof window.crypto.getRandomValues == "function") {
        y = new Uint32Array(2);
        window.crypto.getRandomValues(y);
        _ = D(R(y[0] >>> 0), z(R(y[1] >>> 0), 32));
      } else if (typeof globalThis == "object" && typeof globalThis.crypto == "object" && typeof globalThis.crypto.getRandomValues == "function") {
        y = new Uint32Array(2);
        globalThis.crypto.getRandomValues(y);
        _ = D(R(y[0] >>> 0), z(R(y[1] >>> 0), 32));
      } else {
        _ = R(Math.random() * 4294967295 >>> 0);
        D(_, z(R(new Date().getTime()), 32));
      }
      D(this.state, _);
      this.next();
    }
    ve.prototype.next = function () {
      var _ = S(this.state);
      H(this.state, this.mul);
      P(this.state, this.inc);
      var y = S(_);
      z(y, 18);
      $(y, _);
      z(y, 27);
      var x = S(_);
      z(x, 59);
      U(y, this.mask);
      var b = Z(x);
      var M = S(y);
      j(M, 32 - b);
      z(y, b);
      $(y, M);
      return Z(y);
    };
    ve.prototype.reseed = function (_) {
      if (typeof _ != "string") {
        throw new Error("UUID: PCG: seed: invalid argument (string expected)");
      }
      for (var y = te(a(_, {
          ibits: 8,
          obits: 32,
          obigendian: true
        }), _.length * 8), x = 0; x < y.length; x++) {
        $(yt.state, R(y[x] >>> 0));
      }
    };
    var yt = new ve();
    ve.reseed = function (_) {
      yt.reseed(_);
    };
    function mt(_, y) {
      var x = [];
      for (var b = 0; b < _; b++) {
        x[b] = yt.next() % y;
      }
      return x;
    }
    var Gt = 0;
    var nt = 0;
    function X() {
      if (arguments.length === 1 && typeof arguments[0] == "string") {
        this.parse.apply(this, arguments);
      } else if (arguments.length >= 1 && typeof arguments[0] == "number") {
        this.make.apply(this, arguments);
      } else {
        if (arguments.length >= 1) {
          throw new Error("UUID: constructor: invalid arguments");
        }
        for (var _ = 0; _ < 16; _++) {
          this[_] = 0;
        }
      }
    }
    if (typeof Uint8Array !== "undefined") {
      X.prototype = new Uint8Array(16);
    } else if (rr.Buffer) {
      X.prototype = rr.Buffer.alloc(16);
    } else {
      X.prototype = new Array(16);
    }
    X.prototype.constructor = X;
    X.prototype.make = function (_) {
      var y;
      var x = this;
      if (_ === 1) {
        var b = new Date();
        var M = b.getTime();
        if (M !== Gt) {
          nt = 0;
        } else {
          nt++;
        }
        Gt = M;
        var C = R(M);
        K(C, 10000);
        P(C, m(1, 178, 29, 210, 19, 129, 64, 0));
        if (nt > 0) {
          P(C, R(nt));
        }
        var B;
        B = N(C, 8);
        x[3] = B & 255;
        B = N(C, 8);
        x[2] = B & 255;
        B = N(C, 8);
        x[1] = B & 255;
        B = N(C, 8);
        x[0] = B & 255;
        B = N(C, 8);
        x[5] = B & 255;
        B = N(C, 8);
        x[4] = B & 255;
        B = N(C, 8);
        x[7] = B & 255;
        B = N(C, 8);
        x[6] = B & 15;
        var A = mt(2, 255);
        x[8] = A[0];
        x[9] = A[1];
        var F = mt(6, 255);
        F[0] |= 1;
        F[0] |= 2;
        y = 0;
        for (; y < 6; y++) {
          x[10 + y] = F[y];
        }
      } else if (_ === 4) {
        var T = mt(16, 255);
        for (y = 0; y < 16; y++) {
          this[y] = T[y];
        }
      } else if (_ === 3 || _ === 5) {
        var k = "";
        var L = typeof arguments[1] == "object" && arguments[1] instanceof X ? arguments[1] : new X().parse(arguments[1]);
        for (y = 0; y < 16; y++) {
          k += String.fromCharCode(L[y]);
        }
        k += arguments[2];
        var Ue = _ === 3 ? be(k) : he(k);
        for (y = 0; y < 16; y++) {
          x[y] = Ue.charCodeAt(y);
        }
      } else {
        throw new Error("UUID: make: invalid version");
      }
      x[6] &= 15;
      x[6] |= _ << 4;
      x[8] &= 63;
      x[8] |= 128;
      return x;
    };
    X.prototype.format = function (_) {
      var y;
      var x;
      if (_ === "z85") {
        y = i(this, 16);
      } else if (_ === "b16") {
        x = Array(32);
        n(this, 0, 15, true, x, 0);
        y = x.join("");
      } else if (_ === undefined || _ === "std") {
        x = new Array(36);
        n(this, 0, 3, false, x, 0);
        x[8] = "-";
        n(this, 4, 5, false, x, 9);
        x[13] = "-";
        n(this, 6, 7, false, x, 14);
        x[18] = "-";
        n(this, 8, 9, false, x, 19);
        x[23] = "-";
        n(this, 10, 15, false, x, 24);
        y = x.join("");
      }
      return y;
    };
    X.prototype.toString = function (_) {
      return this.format(_);
    };
    X.prototype.toJSON = function () {
      return this.format("std");
    };
    X.prototype.parse = function (_, y) {
      if (typeof _ != "string") {
        throw new Error("UUID: parse: invalid argument (type string expected)");
      }
      if (y === "z85") {
        l(_, this);
      } else if (y === "b16") {
        t(_, 0, 35, this, 0);
      } else if (y === undefined || y === "std") {
        var x = {
          nil: "00000000-0000-0000-0000-000000000000",
          "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
          "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
          "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
          "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
        };
        if (x[_] !== undefined) {
          _ = x[_];
        } else if (!_.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
          throw new Error("UUID: parse: invalid string representation (expected \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\")");
        }
        t(_, 0, 7, this, 0);
        t(_, 9, 12, this, 4);
        t(_, 14, 17, this, 6);
        t(_, 19, 22, this, 8);
        t(_, 24, 35, this, 10);
      }
      return this;
    };
    X.prototype.export = function () {
      var _ = Array(16);
      for (var y = 0; y < 16; y++) {
        _[y] = this[y];
      }
      return _;
    };
    X.prototype.import = function (_) {
      if (typeof _ != "object" || !(_ instanceof Array)) {
        throw new Error("UUID: import: invalid argument (type Array expected)");
      }
      if (_.length !== 16) {
        throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
      }
      for (var y = 0; y < 16; y++) {
        if (typeof _[y] != "number") {
          throw new Error("UUID: import: invalid array element #" + y + " (type Number expected)");
        }
        if (!isFinite(_[y]) || Math.floor(_[y]) !== _[y]) {
          throw new Error("UUID: import: invalid array element #" + y + " (Number with integer value expected)");
        }
        if (!(_[y] >= 0) || !(_[y] <= 255)) {
          throw new Error("UUID: import: invalid array element #" + y + " (Number with integer value in range 0...255 expected)");
        }
        this[y] = _[y];
      }
      return this;
    };
    X.prototype.compare = function (_) {
      if (typeof _ != "object") {
        throw new Error("UUID: compare: invalid argument (type UUID expected)");
      }
      if (!(_ instanceof X)) {
        throw new Error("UUID: compare: invalid argument (type UUID expected)");
      }
      for (var y = 0; y < 16; y++) {
        if (this[y] < _[y]) {
          return -1;
        }
        if (this[y] > _[y]) {
          return 1;
        }
      }
      return 0;
    };
    X.prototype.equal = function (_) {
      return this.compare(_) === 0;
    };
    X.prototype.fold = function (_) {
      if (typeof _ === "undefined") {
        throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
      }
      if (_ < 1 || _ > 4) {
        throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
      }
      for (var y = 16 / Math.pow(2, _), x = new Array(y), b = 0; b < y; b++) {
        var M = 0;
        for (var C = 0; b + C < 16; C += y) {
          M ^= this[b + C];
        }
        x[b] = M;
      }
      return x;
    };
    X.PCG = ve;
    return X;
  });
})(vo);
var xl = vo.exports;
const l0 = Io(xl);
const ar = Symbol("store-raw");
const Nt = Symbol("store-node");
function Eo(e) {
  let n = e[Ee];
  if (!n && (Object.defineProperty(e, Ee, {
    value: n = new Proxy(e, bl)
  }), !Array.isArray(e))) {
    const t = Object.keys(e);
    const r = Object.getOwnPropertyDescriptors(e);
    for (let o = 0, i = t.length; o < i; o++) {
      const l = t[o];
      if (r[l].get) {
        Object.defineProperty(e, l, {
          enumerable: r[l].enumerable,
          get: r[l].get.bind(n)
        });
      }
    }
  }
  return n;
}
function _n(e) {
  let n;
  return e != null && typeof e == "object" && (e[Ee] || !(n = Object.getPrototypeOf(e)) || n === Object.prototype || Array.isArray(e));
}
function Bt(e, n = new Set()) {
  let t;
  let r;
  let o;
  let i;
  if (t = e != null && e[ar]) {
    return t;
  }
  if (!_n(e) || n.has(e)) {
    return e;
  }
  if (Array.isArray(e)) {
    if (Object.isFrozen(e)) {
      e = e.slice(0);
    } else {
      n.add(e);
    }
    for (let l = 0, a = e.length; l < a; l++) {
      o = e[l];
      if ((r = Bt(o, n)) !== o) {
        e[l] = r;
      }
    }
  } else {
    if (Object.isFrozen(e)) {
      e = Object.assign({}, e);
    } else {
      n.add(e);
    }
    const l = Object.keys(e);
    const a = Object.getOwnPropertyDescriptors(e);
    for (let p = 0, c = l.length; p < c; p++) {
      i = l[p];
      if (!a[i].get) {
        o = e[i];
        if ((r = Bt(o, n)) !== o) {
          e[i] = r;
        }
      }
    }
  }
  return e;
}
function mr(e) {
  let n = e[Nt];
  if (!n) {
    Object.defineProperty(e, Nt, {
      value: n = Object.create(null)
    });
  }
  return n;
}
function fr(e, n, t) {
  return e[n] ||= ko(t);
}
function yl(e, n) {
  const t = Reflect.getOwnPropertyDescriptor(e, n);
  if (!!t && !t.get && !!t.configurable && n !== Ee && n !== Nt) {
    delete t.value;
    delete t.writable;
    t.get = () => e[Ee][n];
  }
  return t;
}
function Ao(e) {
  if (vi()) {
    const n = mr(e);
    (n._ ||= ko())();
  }
}
function ml(e) {
  Ao(e);
  return Reflect.ownKeys(e);
}
function ko(e) {
  const [n, t] = dt(e, {
    equals: false,
    internal: true
  });
  n.$ = t;
  return n;
}
const bl = {
  get(e, n, t) {
    if (n === ar) {
      return e;
    }
    if (n === Ee) {
      return t;
    }
    if (n === nn) {
      Ao(e);
      return t;
    }
    const r = mr(e);
    const o = r[n];
    let i = o ? o() : e[n];
    if (n === Nt || n === "__proto__") {
      return i;
    }
    if (!o) {
      const l = Object.getOwnPropertyDescriptor(e, n);
      if (vi() && (typeof i != "function" || e.hasOwnProperty(n)) && (!l || !l.get)) {
        i = fr(r, n, i)();
      }
    }
    if (_n(i)) {
      return Eo(i);
    } else {
      return i;
    }
  },
  has(e, n) {
    if (n === ar || n === Ee || n === nn || n === Nt || n === "__proto__") {
      return true;
    } else {
      this.get(e, n, e);
      return n in e;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: ml,
  getOwnPropertyDescriptor: yl
};
function pn(e, n, t, r = false) {
  if (!r && e[n] === t) {
    return;
  }
  const o = e[n];
  const i = e.length;
  if (t === undefined) {
    delete e[n];
  } else {
    e[n] = t;
  }
  let l = mr(e);
  let a;
  if (a = fr(l, n, o)) {
    a.$(() => t);
  }
  if (Array.isArray(e) && e.length !== i) {
    for (let p = e.length; p < i; p++) {
      if (a = l[p]) {
        a.$();
      }
    }
    if (a = fr(l, "length", i)) {
      a.$(e.length);
    }
  }
  if (a = l._) {
    a.$();
  }
}
function So(e, n) {
  const t = Object.keys(n);
  for (let r = 0; r < t.length; r += 1) {
    const o = t[r];
    pn(e, o, n[o]);
  }
}
function vl(e, n) {
  if (typeof n == "function") {
    n = n(e);
  }
  n = Bt(n);
  if (Array.isArray(n)) {
    if (e === n) {
      return;
    }
    let t = 0;
    let r = n.length;
    for (; t < r; t++) {
      const o = n[t];
      if (e[t] !== o) {
        pn(e, t, o);
      }
    }
    pn(e, "length", r);
  } else {
    So(e, n);
  }
}
function St(e, n, t = []) {
  let r;
  let o = e;
  if (n.length > 1) {
    r = n.shift();
    const l = typeof r;
    const a = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let p = 0; p < r.length; p++) {
        St(e, [r[p]].concat(n), t);
      }
      return;
    } else if (a && l === "function") {
      for (let p = 0; p < e.length; p++) {
        if (r(e[p], p)) {
          St(e, [p].concat(n), t);
        }
      }
      return;
    } else if (a && l === "object") {
      const {
        from: p = 0,
        to: c = e.length - 1,
        by: u = 1
      } = r;
      for (let v = p; v <= c; v += u) {
        St(e, [v].concat(n), t);
      }
      return;
    } else if (n.length > 1) {
      St(e[r], n, [r].concat(t));
      return;
    }
    o = e[r];
    t = [r].concat(t);
  }
  let i = n[0];
  if ((typeof i != "function" || !(i = i(o, t), i === o)) && (r !== undefined || i != null)) {
    i = Bt(i);
    if (r === undefined || _n(o) && _n(i) && !Array.isArray(i)) {
      So(o, i);
    } else {
      pn(e, r, i);
    }
  }
}
function br(...[e, n]) {
  const t = Bt(e || {});
  const r = Array.isArray(t);
  const o = Eo(t);
  function i(...l) {
    an(() => {
      if (r && l.length === 1) {
        vl(t, l[0]);
      } else {
        St(t, l);
      }
    });
  }
  return [o, i];
}
function c0(e, n) {
  const t = Ei(n);
  return [r => Be(t.Provider, {
    value: e(r),
    get children() {
      return r.children;
    }
  }), () => Ai(t)];
}
const wn = (e, n) => {
  const t = [];
  for (let r = 0; r < n; r += 1) {
    t.push(e + r);
  }
  return t;
};
const tn = e => Number.isFinite(e) ? e : 0;
const El = e => e.matches(":focus-within");
const Al = e => e.querySelector(":focus");
const kl = e => {
  const n = Al(e);
  if (n) {
    n.click();
    return true;
  } else {
    return false;
  }
};
const Sl = (e, n) => {
  let t = n;
  let r = 0;
  let o = 0;
  while (t && e !== t) {
    const {
      offsetTop: i,
      offsetLeft: l,
      offsetParent: a
    } = t;
    if (e.contains(a)) {
      r += i;
      o += l;
    } else {
      r += i - e.offsetTop;
      o += l - e.offsetLeft;
      break;
    }
    t = a;
  }
  return {
    offsetTop: r,
    offsetLeft: o
  };
};
const Tl = Ei();
const Fl = e => {
  let n = 0;
  let t = 0;
  if (e.borderBoxSize) {
    const {
      borderBoxSize: r
    } = e;
    const o = Array.isArray(r) ? r[0] : r;
    n = o.inlineSize;
    t = o.blockSize;
  } else {
    const r = e.target.getBoundingClientRect();
    n = r.width;
    t = r.height;
  }
  return {
    width: n,
    height: t
  };
};
const Zn = (e, n, t) => {
  const [r, o] = t ? [e, n] : [n, e];
  return {
    main: r,
    cross: o
  };
};
const Hn = {
  main: 0,
  cross: 0
};
const Il = (e, n) => e.cross === n.cross;
const Cl = e => {
  const n = Ai(Tl);
  const [t, r] = dt(undefined);
  const o = () => e.scrollTarget || n?.scrollTarget;
  const i = oe(() => (e.direction || "vertical") === "horizontal");
  const [l, a] = br({
    isMeasured: false,
    mainAxisScrollValue: 0,
    target: {
      ...Hn
    },
    container: {
      ...Hn,
      offsetMain: 0,
      offsetCross: 0
    },
    itemSize: {
      ...Hn
    }
  });
  const p = m => {
    const g = m.target;
    const S = o();
    const R = t();
    const Z = i();
    const P = Fl(m);
    const K = Zn(P.width, P.height, Z);
    if (g === S) {
      a("target", K);
    } else if (g === R && (!Il(l.container, K) || !l.isMeasured)) {
      const H = Sl(S, R);
      const U = Zn(H.offsetLeft, H.offsetTop, Z);
      a("container", {
        ...K,
        offsetMain: U.main,
        offsetCross: U.cross
      });
    }
  };
  const c = () => {
    const m = o();
    if (m) {
      const g = i() ? m.scrollLeft : m.scrollTop;
      return Math.floor(g);
    }
    return 0;
  };
  const u = new ResizeObserver(m => {
    an(() => {
      m.forEach(g => p(g));
      a({
        isMeasured: true,
        mainAxisScrollValue: c()
      });
    });
  });
  qe(() => {
    if (!l.isMeasured) {
      return;
    }
    const m = i();
    const g = e.itemSize;
    let S;
    if (typeof g == "function") {
      S = g(l.container.cross, m);
    } else {
      S = g;
    }
    const R = Zn(S.width || 0, S.height || 0, m);
    a("itemSize", R);
  });
  const v = () => {
    a("mainAxisScrollValue", c());
  };
  bi(() => {
    const m = o();
    const g = t();
    if (!!m && !!g) {
      m.addEventListener("scroll", v);
      u.observe(m);
      u.observe(g);
      cr(() => {
        a("isMeasured", false);
        m.removeEventListener("scroll", v);
        u.unobserve(m);
        u.unobserve(g);
      });
    }
  });
  return {
    containerEl: t,
    setContainerRefEl: r,
    isDirectionHorizontal: i,
    measurements: l
  };
};
const Ul = 1;
const Dl = e => {
  const {
    total: n,
    focusPosition: t,
    positionCount: r,
    startPosition: o,
    prevPositions: i,
    prevStartPosition: l
  } = e;
  const a = i.length;
  if (n <= r) {
    if (a === r && l === o) {
      return i;
    } else {
      return wn(0, r);
    }
  }
  const c = o + r;
  const u = R => R < o || R >= c;
  const v = () => {
    if (u(t)) {
      return t;
    }
    let R;
    if (c < n) {
      R = c;
    } else {
      R = o - 1;
    }
    return R;
  };
  const m = r + Ul;
  if (a !== m) {
    const R = wn(o, r);
    R.push(v());
    return R;
  }
  const g = [];
  for (let R = 0; R < r; R += 1) {
    const Z = o + R;
    if (!i.includes(Z)) {
      g.push(Z);
    }
  }
  const S = v();
  if (!i.includes(S)) {
    g.push(S);
  }
  return i.map(R => u(R) && R !== S ? g.pop() : R);
};
const Rl = e => Number.isInteger(e) ? e : 0;
const zl = (e, n, t) => {
  const [r, o] = br({
    overscan: 0,
    positionCount: 0,
    maxScrollPosition: 0,
    currentPosition: 0
  });
  qe(() => {
    if (!e.isMeasured) {
      return;
    }
    const a = n.totalItemCount;
    const p = e.itemSize.main;
    const c = e.target.main;
    fe(() => {
      const v = t() ?? Math.max(Math.ceil(180 / p), 2);
      const m = tn(v);
      o("overscan", m);
      const g = Math.ceil(c / p);
      const S = Rl(Math.min(g + m * 2, a));
      o("positionCount", S);
      o("maxScrollPosition", a - S);
    });
  });
  qe(() => {
    if (!e.isMeasured) {
      return;
    }
    const a = e.mainAxisScrollValue - e.container.offsetMain;
    const c = Math.floor(a / e.itemSize.main) - r.overscan;
    const u = Math.min(Math.max(0, c), r.maxScrollPosition);
    o("currentPosition", u);
  });
  let i = 0;
  return oe((a = []) => {
    if (!e.isMeasured) {
      return a;
    }
    const p = r.currentPosition;
    const c = Dl({
      total: n.totalItemCount,
      focusPosition: n.focusPosition,
      positionCount: r.positionCount,
      startPosition: p,
      prevStartPosition: i,
      prevPositions: a
    });
    i = p;
    return c;
  });
};
const Ll = Qo("<div>");
const Ml = Math.random().toString(36).slice(2, Infinity);
const sr = `virtual-container-${Ml}`;
let Et;
const Ol = () => {
  if (!Et) {
    Et = document.createElement("style");
    Et.type = "text/css";
    Et.textContent = `
      .${sr} {
        position: relative !important;
        flex-shrink: 0 !important;
      }
      .${sr} > * {
        will-change: transform !important;
        box-sizing: border-box !important;
        contain: strict !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
      }
    `;
    document.head.appendChild(Et);
  }
};
function u0(e) {
  Ol();
  const [n, t] = br({
    focusPosition: 0,
    mainAxis: {
      totalItemCount: 0,
      focusPosition: 0,
      scrollValue: 0
    },
    crossAxis: {
      totalItemCount: 0
    }
  });
  const {
    containerEl: r,
    setContainerRefEl: o,
    isDirectionHorizontal: i,
    measurements: l
  } = Cl(e);
  const a = () => e.items && e.items.length || 0;
  qe(() => {
    if (!l.isMeasured) {
      return;
    }
    const D = tn(e.crossAxisCount?.(l, a()) || 0);
    t("crossAxis", {
      totalItemCount: Math.max(1, D)
    });
  });
  qe(() => {
    if (!l.isMeasured) {
      return;
    }
    const D = a();
    const N = n.crossAxis.totalItemCount;
    const z = Math.ceil(D / N);
    t("mainAxis", {
      totalItemCount: tn(z)
    });
    t("crossAxis", {
      totalItemCount: N,
      positions: wn(0, n.crossAxis.totalItemCount)
    });
  });
  qe(() => {
    const D = Math.floor(n.focusPosition / n.crossAxis.totalItemCount);
    t("mainAxis", "focusPosition", tn(D));
  });
  const p = zl(l, n.mainAxis, () => e.overscan);
  const c = () => {
    const D = n.mainAxis.totalItemCount * l.itemSize.main;
    const N = i() ? "width" : "height";
    const z = i() ? "height" : "width";
    return {
      [N]: `${D}px`,
      [z]: "100%"
    };
  };
  const u = (D, N = 0) => {
    const z = l.itemSize;
    const j = z.main * D;
    const $ = z.cross * N;
    let O = $;
    let G = j;
    let te = z.cross;
    let he = z.main;
    if (i()) {
      O = j;
      G = $;
      te = z.main;
      he = z.cross;
    }
    return {
      transform: `translate(${O}px, ${G}px)`,
      width: te ? `${te}px` : "",
      height: he ? `${he}px` : ""
    };
  };
  const v = oe(() => wn(0, n.crossAxis.totalItemCount));
  const m = oe(() => e.items || []);
  const g = (D, N) => D * n.crossAxis.totalItemCount + N;
  const S = D => Be(Ar, {
    get each() {
      return p();
    },
    children: N => {
      const z = oe(() => {
        const j = N();
        const $ = D.crossPos;
        if ($ === undefined) {
          return j;
        } else {
          return g(j, $);
        }
      });
      return Be(kr, {
        get when() {
          return z() < m().length;
        },
        get children() {
          return Be(ua, {
            get component() {
              return e.children;
            },
            get items() {
              return m();
            },
            get item() {
              return m()[z()];
            },
            get index() {
              return z();
            },
            get tabIndex() {
              if (z() === n.focusPosition) {
                return 0;
              } else {
                return -1;
              }
            },
            get style() {
              return u(N(), D.crossPos);
            }
          });
        }
      });
    }
  });
  const R = ur(() => Be(kr, {
    get when() {
      return n.crossAxis.totalItemCount > 1;
    },
    get fallback() {
      return Be(S, {});
    },
    get children() {
      return Be(Ar, {
        get each() {
          return v();
        },
        children: D => Be(S, {
          get crossPos() {
            return D();
          }
        })
      });
    }
  }));
  const Z = () => {
    const D = v();
    const N = p();
    const j = R().findIndex($ => $?.matches(":focus-within, :focus"));
    if (j === -1) {
      return -1;
    }
    if (n.crossAxis.totalItemCount > 1) {
      const $ = Math.floor(j / N.length);
      const O = j % N.length;
      const G = D[$];
      const te = N[O];
      return g(te, G);
    }
    return N[j];
  };
  const P = (D, N) => {
    const z = n.focusPosition;
    let j = z % n.crossAxis.totalItemCount;
    let $ = Math.floor(z / n.crossAxis.totalItemCount);
    if (N) {
      $ += D;
    } else {
      j += D;
    }
    const O = g($, j);
    if (O < 0 || O >= a()) {
      return;
    }
    const G = v().indexOf(j);
    if (G === -1) {
      return;
    }
    t("focusPosition", O);
    const te = R();
    const he = p();
    const ge = he.indexOf($);
    if (ge === -1) {
      return;
    }
    const be = G * he.length + ge;
    const ve = te[be];
    if (ve) {
      queueMicrotask(() => {
        ve.focus();
        ve.scrollIntoView({
          block: "nearest"
        });
      });
    }
  };
  const K = D => {
    const {
      code: N
    } = D;
    const z = N === "ArrowUp";
    const j = N === "ArrowDown";
    const $ = N === "ArrowLeft";
    const O = N === "ArrowRight";
    const G = z || j;
    const te = $ || O;
    if (G || te) {
      P(j || O ? 1 : -1, i() ? te : G);
    } else if (N === "Enter") {
      if (!kl(r())) {
        return;
      }
    } else {
      return;
    }
    D.preventDefault();
  };
  const H = () => {
    const D = Z();
    t("focusPosition", D === -1 ? 0 : D);
  };
  const U = async () => {
    queueMicrotask(() => {
      if (!El(r())) {
        t("focusPosition", 0);
      }
    });
  };
  return (() => {
    const D = Ll();
    D.$$focusout = U;
    D.$$focusin = H;
    D.$$keydown = K;
    oa(o, D);
    zi(D, R);
    Ze(N => {
      const z = `${sr} ${e.className || ""}`;
      const j = c();
      const $ = e.role || "list";
      if (z !== N._v$) {
        D.className = N._v$ = z;
      }
      N._v$2 = Ri(D, j, N._v$2);
      if ($ !== N._v$3) {
        cn(D, "role", N._v$3 = $);
      }
      return N;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return D;
  })();
}
Di(["keydown", "focusin", "focusout"]);
var Nl = () => {};
var gi = (e, n) => n();
function Bl(e, n) {
  const t = fe(e);
  const r = t ? [t] : [];
  const {
    onEnter: o = gi,
    onExit: i = gi
  } = n;
  const [l, a] = dt(n.appear ? [] : r);
  const [p] = zo();
  let c;
  let u = false;
  function v(S, R) {
    if (!S) {
      return R && R();
    }
    u = true;
    i(S, () => {
      an(() => {
        u = false;
        a(Z => Z.filter(P => P !== S));
        if (R) {
          R();
        }
      });
    });
  }
  function m(S) {
    const R = c;
    if (!R) {
      return S && S();
    }
    c = undefined;
    a(Z => [R, ...Z]);
    o(R, S ?? Nl);
  }
  const g = n.mode === "out-in" ? S => u || v(S, m) : n.mode === "in-out" ? S => m(() => v(S)) : S => {
    v(S);
    m();
  };
  qe(S => {
    const R = e();
    if (fe(p)) {
      p();
      return S;
    } else {
      if (R !== S) {
        c = R;
        an(() => fe(() => g(S)));
      }
      return R;
    }
  }, n.appear ? undefined : t);
  return l;
}
var xi = e => e instanceof Element;
function lr(e, n) {
  if (n(e)) {
    return e;
  }
  if (typeof e == "function" && !e.length) {
    return lr(e(), n);
  }
  if (Array.isArray(e)) {
    for (const t of e) {
      const r = lr(t, n);
      if (r) {
        return r;
      }
    }
  }
  return null;
}
function Pl(e, n = xi, t = xi) {
  const r = oe(e);
  return oe(() => lr(r(), n));
}
function $l(e) {
  return oe(() => {
    const n = e.name || "s";
    return {
      enterActive: (e.enterActiveClass || n + "-enter-active").split(" "),
      enter: (e.enterClass || n + "-enter").split(" "),
      enterTo: (e.enterToClass || n + "-enter-to").split(" "),
      exitActive: (e.exitActiveClass || n + "-exit-active").split(" "),
      exit: (e.exitClass || n + "-exit").split(" "),
      exitTo: (e.exitToClass || n + "-exit-to").split(" "),
      move: (e.moveClass || n + "-move").split(" ")
    };
  });
}
function To(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
function Zl(e, n, t, r) {
  const {
    onBeforeEnter: o,
    onEnter: i,
    onAfterEnter: l
  } = n;
  o?.(t);
  t.classList.add(...e.enter);
  t.classList.add(...e.enterActive);
  queueMicrotask(() => {
    if (!t.parentNode) {
      return r?.();
    }
    i?.(t, () => a());
  });
  To(() => {
    t.classList.remove(...e.enter);
    t.classList.add(...e.enterTo);
    if (!i || i.length < 2) {
      t.addEventListener("transitionend", a);
      t.addEventListener("animationend", a);
    }
  });
  function a(p) {
    if (!p || p.target === t) {
      r?.();
      t.removeEventListener("transitionend", a);
      t.removeEventListener("animationend", a);
      t.classList.remove(...e.enterActive);
      t.classList.remove(...e.enterTo);
      l?.(t);
    }
  }
}
function Hl(e, n, t, r) {
  const {
    onBeforeExit: o,
    onExit: i,
    onAfterExit: l
  } = n;
  if (!t.parentNode) {
    return r?.();
  }
  o?.(t);
  t.classList.add(...e.exit);
  t.classList.add(...e.exitActive);
  i?.(t, () => a());
  To(() => {
    t.classList.remove(...e.exit);
    t.classList.add(...e.exitTo);
    if (!i || i.length < 2) {
      t.addEventListener("transitionend", a);
      t.addEventListener("animationend", a);
    }
  });
  function a(p) {
    if (!p || p.target === t) {
      r?.();
      t.removeEventListener("transitionend", a);
      t.removeEventListener("animationend", a);
      t.classList.remove(...e.exitActive);
      t.classList.remove(...e.exitTo);
      l?.(t);
    }
  }
}
var Gl = {
  inout: "in-out",
  outin: "out-in"
};
var h0 = e => {
  const n = $l(e);
  return Bl(Pl(() => e.children), {
    mode: Gl[e.mode],
    appear: e.appear,
    onEnter(t, r) {
      Zl(n(), e, t, r);
    },
    onExit(t, r) {
      Hl(n(), e, t, r);
    }
  });
};
export { ua as D, Yl as F, Wl as M, kr as S, h0 as T, l0 as U, u0 as V, ta as a, c0 as b, Ze as c, f0 as d, dt as e, br as f, oe as g, Di as h, s0 as i, zi as j, Be as k, ra as l, Ri as m, oa as n, Xl as o, bi as p, fe as q, Vl as r, cn as s, Qo as t, e0 as u, Ql as v, cr as w, ql as x, Jl as y };
