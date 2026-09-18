import { c as vc, g as kc } from "./commonjsHelpers-725317a4.js";
const Sc = (t, e) => t === e;
const Jt = Symbol("solid-proxy");
const Cs = Symbol("solid-track");
const An = {
  equals: Sc
};
let za = Va;
const he = 1;
const Mn = 2;
const Ba = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var pt = null;
let es = null;
let at = null;
let St = null;
let ce = null;
let Wn = 0;
const [Ec, l_] = Je(false);
function yn(t, e) {
  const i = at;
  const n = pt;
  const s = t.length === 0;
  const r = s ? Ba : {
    owned: null,
    cleanups: null,
    context: null,
    owner: e === undefined ? n : e
  };
  const o = s ? t : () => t(() => Rt(() => Zn(r)));
  pt = r;
  at = null;
  try {
    return He(o, true);
  } finally {
    at = i;
    pt = n;
  }
}
function Je(t, e) {
  e = e ? Object.assign({}, An, e) : An;
  const i = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || undefined
  };
  const n = s => {
    if (typeof s == "function") {
      s = s(i.value);
    }
    return $a(i, s);
  };
  return [Ha.bind(i), n];
}
function Ac(t, e, i) {
  const n = jn(t, e, true, he);
  ri(n);
}
function Dn(t, e, i) {
  const n = jn(t, e, false, he);
  ri(n);
}
function xi(t, e, i) {
  za = Fc;
  const n = jn(t, e, false, he);
  if (!i || !i.render) {
    n.user = true;
  }
  if (ce) {
    ce.push(n);
  } else {
    ri(n);
  }
}
function Re(t, e, i) {
  i = i ? Object.assign({}, An, i) : An;
  const n = jn(t, e, true, 0);
  n.observers = null;
  n.observerSlots = null;
  n.comparator = i.equals || undefined;
  ri(n);
  return Ha.bind(n);
}
function Fs(t) {
  return He(t, false);
}
function Rt(t) {
  if (at === null) {
    return t();
  }
  const e = at;
  at = null;
  try {
    return t();
  } finally {
    at = e;
  }
}
function Ji(t, e, i) {
  const n = Array.isArray(t);
  let s;
  let r = i && i.defer;
  return o => {
    let a;
    if (n) {
      a = Array(t.length);
      for (let l = 0; l < t.length; l++) {
        a[l] = t[l]();
      }
    } else {
      a = t();
    }
    if (r) {
      r = false;
      return;
    }
    const c = Rt(() => e(a, s, o));
    s = a;
    return c;
  };
}
function Mc(t) {
  xi(() => Rt(t));
}
function Na(t) {
  if (pt !== null) {
    if (pt.cleanups === null) {
      pt.cleanups = [t];
    } else {
      pt.cleanups.push(t);
    }
  }
  return t;
}
function Ua() {
  return at;
}
function Dc(t) {
  const e = at;
  const i = pt;
  return Promise.resolve().then(() => {
    at = e;
    pt = i;
    let n;
    He(t, false);
    at = pt = null;
    if (n) {
      return n.done;
    } else {
      return undefined;
    }
  });
}
function Tc() {
  return [Ec, Dc];
}
function Ha() {
  if (this.sources && this.state) {
    if (this.state === he) {
      ri(this);
    } else {
      const t = St;
      St = null;
      He(() => On(this), false);
      St = t;
    }
  }
  if (at) {
    const t = this.observers ? this.observers.length : 0;
    if (at.sources) {
      at.sources.push(this);
      at.sourceSlots.push(t);
    } else {
      at.sources = [this];
      at.sourceSlots = [t];
    }
    if (this.observers) {
      this.observers.push(at);
      this.observerSlots.push(at.sources.length - 1);
    } else {
      this.observers = [at];
      this.observerSlots = [at.sources.length - 1];
    }
  }
  return this.value;
}
function $a(t, e, i) {
  let n = t.value;
  if (!t.comparator || !t.comparator(n, e)) {
    t.value = e;
    if (t.observers && t.observers.length) {
      He(() => {
        for (let s = 0; s < t.observers.length; s += 1) {
          const r = t.observers[s];
          const o = es && es.running;
          if (o) {
            es.disposed.has(r);
          }
          if (o ? !r.tState : !r.state) {
            if (r.pure) {
              St.push(r);
            } else {
              ce.push(r);
            }
            if (r.observers) {
              Wa(r);
            }
          }
          if (!o) {
            r.state = he;
          }
        }
        if (St.length > 1000000) {
          St = [];
          throw new Error();
        }
      }, false);
    }
  }
  return e;
}
function ri(t) {
  if (!t.fn) {
    return;
  }
  Zn(t);
  const e = pt;
  const i = at;
  const n = Wn;
  at = pt = t;
  Oc(t, t.value, n);
  at = i;
  pt = e;
}
function Oc(t, e, i) {
  let n;
  try {
    n = t.fn(e);
  } catch (s) {
    if (t.pure) {
      t.state = he;
      if (t.owned) {
        t.owned.forEach(Zn);
      }
      t.owned = null;
    }
    t.updatedAt = i + 1;
    return ja(s);
  }
  if (!t.updatedAt || t.updatedAt <= i) {
    if (t.updatedAt != null && "observers" in t) {
      $a(t, n);
    } else {
      t.value = n;
    }
    t.updatedAt = i;
  }
}
function jn(t, e, i, n = he, s) {
  const r = {
    fn: t,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: pt,
    context: null,
    pure: i
  };
  if (pt !== null) {
    if (pt !== Ba) {
      if (pt.owned) {
        pt.owned.push(r);
      } else {
        pt.owned = [r];
      }
    }
  }
  return r;
}
function Tn(t) {
  if (t.state === 0) {
    return;
  }
  if (t.state === Mn) {
    return On(t);
  }
  if (t.suspense && Rt(t.suspense.inFallback)) {
    return t.suspense.effects.push(t);
  }
  const e = [t];
  while ((t = t.owner) && (!t.updatedAt || t.updatedAt < Wn)) {
    if (t.state) {
      e.push(t);
    }
  }
  for (let i = e.length - 1; i >= 0; i--) {
    t = e[i];
    if (t.state === he) {
      ri(t);
    } else if (t.state === Mn) {
      const n = St;
      St = null;
      He(() => On(t, e[0]), false);
      St = n;
    }
  }
}
function He(t, e) {
  if (St) {
    return t();
  }
  let i = false;
  if (!e) {
    St = [];
  }
  if (ce) {
    i = true;
  } else {
    ce = [];
  }
  Wn++;
  try {
    const n = t();
    Cc(i);
    return n;
  } catch (n) {
    if (!i) {
      ce = null;
    }
    St = null;
    ja(n);
  }
}
function Cc(t) {
  if (St) {
    Va(St);
    St = null;
  }
  if (t) {
    return;
  }
  const e = ce;
  ce = null;
  if (e.length) {
    He(() => za(e), false);
  }
}
function Va(t) {
  for (let e = 0; e < t.length; e++) {
    Tn(t[e]);
  }
}
function Fc(t) {
  let e;
  let i = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    if (n.user) {
      t[i++] = n;
    } else {
      Tn(n);
    }
  }
  for (e = 0; e < i; e++) {
    Tn(t[e]);
  }
}
function On(t, e) {
  t.state = 0;
  for (let i = 0; i < t.sources.length; i += 1) {
    const n = t.sources[i];
    if (n.sources) {
      const s = n.state;
      if (s === he) {
        if (n !== e && (!n.updatedAt || n.updatedAt < Wn)) {
          Tn(n);
        }
      } else if (s === Mn) {
        On(n, e);
      }
    }
  }
}
function Wa(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const i = t.observers[e];
    if (!i.state) {
      i.state = Mn;
      if (i.pure) {
        St.push(i);
      } else {
        ce.push(i);
      }
      if (i.observers) {
        Wa(i);
      }
    }
  }
}
function Zn(t) {
  let e;
  if (t.sources) {
    while (t.sources.length) {
      const i = t.sources.pop();
      const n = t.sourceSlots.pop();
      const s = i.observers;
      if (s && s.length) {
        const r = s.pop();
        const o = i.observerSlots.pop();
        if (n < s.length) {
          r.sourceSlots[o] = n;
          s[n] = r;
          i.observerSlots[n] = o;
        }
      }
    }
  }
  if (t.owned) {
    for (e = t.owned.length - 1; e >= 0; e--) {
      Zn(t.owned[e]);
    }
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--) {
      t.cleanups[e]();
    }
    t.cleanups = null;
  }
  t.state = 0;
  t.context = null;
}
function ja(t) {
  throw t;
}
const Lc = Symbol("fallback");
function Cr(t) {
  for (let e = 0; e < t.length; e++) {
    t[e]();
  }
}
function Rc(t, e, i = {}) {
  let n = [];
  let s = [];
  let r = [];
  let o = 0;
  let a = e.length > 1 ? [] : null;
  Na(() => Cr(r));
  return () => {
    let c = t() || [];
    let l;
    let h;
    c[Cs];
    return Rt(() => {
      let g = c.length;
      let p;
      let b;
      let y;
      let k;
      let E;
      let D;
      let z;
      let M;
      let R;
      if (g === 0) {
        if (o !== 0) {
          Cr(r);
          r = [];
          n = [];
          s = [];
          o = 0;
          a &&= [];
        }
        if (i.fallback) {
          n = [Lc];
          s[0] = yn(V => {
            r[0] = V;
            return i.fallback();
          });
          o = 1;
        }
      } else if (o === 0) {
        s = new Array(g);
        h = 0;
        for (; h < g; h++) {
          n[h] = c[h];
          s[h] = yn(d);
        }
        o = g;
      } else {
        y = new Array(g);
        k = new Array(g);
        if (a) {
          E = new Array(g);
        }
        D = 0;
        z = Math.min(o, g);
        for (; D < z && n[D] === c[D]; D++);
        z = o - 1;
        M = g - 1;
        for (; z >= D && M >= D && n[z] === c[M]; z--, M--) {
          y[M] = s[z];
          k[M] = r[z];
          if (a) {
            E[M] = a[z];
          }
        }
        p = new Map();
        b = new Array(M + 1);
        h = M;
        for (; h >= D; h--) {
          R = c[h];
          l = p.get(R);
          b[h] = l === undefined ? -1 : l;
          p.set(R, h);
        }
        for (l = D; l <= z; l++) {
          R = n[l];
          h = p.get(R);
          if (h !== undefined && h !== -1) {
            y[h] = s[l];
            k[h] = r[l];
            if (a) {
              E[h] = a[l];
            }
            h = b[h];
            p.set(R, h);
          } else {
            r[l]();
          }
        }
        for (h = D; h < g; h++) {
          if (h in y) {
            s[h] = y[h];
            r[h] = k[h];
            if (a) {
              a[h] = E[h];
              a[h](h);
            }
          } else {
            s[h] = yn(d);
          }
        }
        s = s.slice(0, o = g);
        n = c.slice(0);
      }
      return s;
    });
    function d(g) {
      r[h] = g;
      if (a) {
        const [p, b] = Je(h);
        a[h] = b;
        return e(c[h], p);
      }
      return e(c[h]);
    }
  };
}
function Ic(t, e) {
  return Rt(() => t(e || {}));
}
function tn() {
  return true;
}
const Pc = {
  get(t, e, i) {
    if (e === Jt) {
      return i;
    } else {
      return t.get(e);
    }
  },
  has(t, e) {
    if (e === Jt) {
      return true;
    } else {
      return t.has(e);
    }
  },
  set: tn,
  deleteProperty: tn,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return t.get(e);
      },
      set: tn,
      deleteProperty: tn
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function is(t) {
  if (t = typeof t == "function" ? t() : t) {
    return t;
  } else {
    return {};
  }
}
function zc() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const i = this[t]();
    if (i !== undefined) {
      return i;
    }
  }
}
function Za(...t) {
  let e = false;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    e = e || !!o && Jt in o;
    t[r] = typeof o == "function" ? (e = true, Re(o)) : o;
  }
  if (e) {
    return new Proxy({
      get(r) {
        for (let o = t.length - 1; o >= 0; o--) {
          const a = is(t[o])[r];
          if (a !== undefined) {
            return a;
          }
        }
      },
      has(r) {
        for (let o = t.length - 1; o >= 0; o--) {
          if (r in is(t[o])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const r = [];
        for (let o = 0; o < t.length; o++) {
          r.push(...Object.keys(is(t[o])));
        }
        return [...new Set(r)];
      }
    }, Pc);
  }
  const i = {};
  const n = {};
  let s = false;
  for (let r = t.length - 1; r >= 0; r--) {
    const o = t[r];
    if (!o) {
      continue;
    }
    const a = Object.getOwnPropertyNames(o);
    s = s || r !== 0 && !!a.length;
    for (let c = 0, l = a.length; c < l; c++) {
      const h = a[c];
      if (h !== "__proto__" && h !== "constructor") {
        if (h in i) {
          const d = n[h];
          const g = Object.getOwnPropertyDescriptor(o, h);
          if (d) {
            if (g.get) {
              d.push(g.get.bind(o));
            } else if (g.value !== undefined) {
              d.push(() => g.value);
            }
          } else if (i[h] === undefined) {
            i[h] = g.value;
          }
        } else {
          const d = Object.getOwnPropertyDescriptor(o, h);
          if (d.get) {
            Object.defineProperty(i, h, {
              enumerable: true,
              configurable: true,
              get: zc.bind(n[h] = [d.get.bind(o)])
            });
          } else {
            i[h] = d.value;
          }
        }
      }
    }
  }
  return i;
}
const Bc = t => `Stale read from <${t}>.`;
function c_(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return Re(Rc(() => t.each, t.children, e || undefined));
}
function h_(t) {
  const e = t.keyed;
  const i = Re(() => t.when, undefined, {
    equals: (n, s) => e ? n === s : !n == !s
  });
  return Re(() => {
    const n = i();
    if (n) {
      const s = t.children;
      if (typeof s == "function" && s.length > 0) {
        return Rt(() => s(e ? n : () => {
          if (!Rt(i)) {
            throw Bc("Show");
          }
          return t.when;
        }));
      } else {
        return s;
      }
    }
    return t.fallback;
  }, undefined, undefined);
}
function Nc(t, e, i) {
  let n = i.length;
  let s = e.length;
  let r = n;
  let o = 0;
  let a = 0;
  let c = e[s - 1].nextSibling;
  let l = null;
  while (o < s || a < r) {
    if (e[o] === i[a]) {
      o++;
      a++;
      continue;
    }
    while (e[s - 1] === i[r - 1]) {
      s--;
      r--;
    }
    if (s === o) {
      const h = r < n ? a ? i[a - 1].nextSibling : i[r - a] : c;
      while (a < r) {
        t.insertBefore(i[a++], h);
      }
    } else if (r === a) {
      while (o < s) {
        if (!l || !l.has(e[o])) {
          e[o].remove();
        }
        o++;
      }
    } else if (e[o] === i[r - 1] && i[a] === e[s - 1]) {
      const h = e[--s].nextSibling;
      t.insertBefore(i[a++], e[o++].nextSibling);
      t.insertBefore(i[--r], h);
      e[s] = i[r];
    } else {
      if (!l) {
        l = new Map();
        let d = a;
        while (d < r) {
          l.set(i[d], d++);
        }
      }
      const h = l.get(e[o]);
      if (h != null) {
        if (a < h && h < r) {
          let d = o;
          let g = 1;
          let p;
          while (++d < s && d < r && (p = l.get(e[d])) != null && p === h + g) {
            g++;
          }
          if (g > h - a) {
            const b = e[o];
            while (a < h) {
              t.insertBefore(i[a++], b);
            }
          } else {
            t.replaceChild(i[a++], e[o++]);
          }
        } else {
          o++;
        }
      } else {
        e[o++].remove();
      }
    }
  }
}
const Fr = "_$DX_DELEGATE";
function f_(t, e, i, n = {}) {
  let s;
  yn(r => {
    s = r;
    if (e === document) {
      t();
    } else {
      Ya(e, t(), e.firstChild ? null : undefined, i);
    }
  }, n.owner);
  return () => {
    s();
    e.textContent = "";
  };
}
function Uc(t, e, i) {
  let n;
  const s = () => {
    const o = document.createElement("template");
    o.innerHTML = t;
    if (i) {
      return o.content.firstChild.firstChild;
    } else {
      return o.content.firstChild;
    }
  };
  const r = e ? () => Rt(() => document.importNode(n ||= s(), true)) : () => (n ||= s()).cloneNode(true);
  r.cloneNode = r;
  return r;
}
function u_(t, e = window.document) {
  const i = e[Fr] ||= new Set();
  for (let n = 0, s = t.length; n < s; n++) {
    const r = t[n];
    if (!i.has(r)) {
      i.add(r);
      e.addEventListener(r, $c);
    }
  }
}
function Lr(t, e, i) {
  if (i == null) {
    t.removeAttribute(e);
  } else {
    t.setAttribute(e, i);
  }
}
function d_(t, e) {
  if (e == null) {
    t.removeAttribute("class");
  } else {
    t.className = e;
  }
}
function g_(t, e, i, n) {
  if (n) {
    if (Array.isArray(i)) {
      t[`$$${e}`] = i[0];
      t[`$$${e}Data`] = i[1];
    } else {
      t[`$$${e}`] = i;
    }
  } else if (Array.isArray(i)) {
    const s = i[0];
    t.addEventListener(e, i[0] = r => s.call(t, i[1], r));
  } else {
    t.addEventListener(e, i);
  }
}
function p_(t, e, i = {}) {
  const n = Object.keys(e || {});
  const s = Object.keys(i);
  let r;
  let o;
  r = 0;
  o = s.length;
  for (; r < o; r++) {
    const a = s[r];
    if (!!a && a !== "undefined" && !e[a]) {
      Rr(t, a, false);
      delete i[a];
    }
  }
  r = 0;
  o = n.length;
  for (; r < o; r++) {
    const a = n[r];
    const c = !!e[a];
    if (!!a && a !== "undefined" && i[a] !== c && !!c) {
      Rr(t, a, true);
      i[a] = c;
    }
  }
  return i;
}
function Hc(t, e, i) {
  return Rt(() => t(e, i));
}
function Ya(t, e, i, n) {
  if (i !== undefined && !n) {
    n = [];
  }
  if (typeof e != "function") {
    return Cn(t, e, n, i);
  }
  Dn(s => Cn(t, e(), s, i), n);
}
function Rr(t, e, i) {
  const n = e.trim().split(/\s+/);
  for (let s = 0, r = n.length; s < r; s++) {
    t.classList.toggle(n[s], i);
  }
}
function $c(t) {
  const e = `$$${t.type}`;
  let i = t.composedPath && t.composedPath()[0] || t.target;
  if (t.target !== i) {
    Object.defineProperty(t, "target", {
      configurable: true,
      value: i
    });
  }
  Object.defineProperty(t, "currentTarget", {
    configurable: true,
    get() {
      return i || document;
    }
  });
  while (i) {
    const n = i[e];
    if (n && !i.disabled) {
      const s = i[`${e}Data`];
      if (s !== undefined) {
        n.call(i, s, t);
      } else {
        n.call(i, t);
      }
      if (t.cancelBubble) {
        return;
      }
    }
    i = i._$host || i.parentNode || i.host;
  }
}
function Cn(t, e, i, n, s) {
  while (typeof i == "function") {
    i = i();
  }
  if (e === i) {
    return i;
  }
  const r = typeof e;
  const o = n !== undefined;
  t = o && i[0] && i[0].parentNode || t;
  if (r === "string" || r === "number") {
    if (r === "number") {
      e = e.toString();
    }
    if (o) {
      let a = i[0];
      if (a && a.nodeType === 3) {
        a.data = e;
      } else {
        a = document.createTextNode(e);
      }
      i = We(t, i, n, a);
    } else if (i !== "" && typeof i == "string") {
      i = t.firstChild.data = e;
    } else {
      i = t.textContent = e;
    }
  } else if (e == null || r === "boolean") {
    i = We(t, i, n);
  } else {
    if (r === "function") {
      Dn(() => {
        let a = e();
        while (typeof a == "function") {
          a = a();
        }
        i = Cn(t, a, i, n);
      });
      return () => i;
    }
    if (Array.isArray(e)) {
      const a = [];
      const c = i && Array.isArray(i);
      if (Ls(a, e, i, s)) {
        Dn(() => i = Cn(t, a, i, n, true));
        return () => i;
      }
      if (a.length === 0) {
        i = We(t, i, n);
        if (o) {
          return i;
        }
      } else if (c) {
        if (i.length === 0) {
          Ir(t, a, n);
        } else {
          Nc(t, i, a);
        }
      } else {
        if (i) {
          We(t);
        }
        Ir(t, a);
      }
      i = a;
    } else if (e.nodeType) {
      if (Array.isArray(i)) {
        if (o) {
          return i = We(t, i, n, e);
        }
        We(t, i, null, e);
      } else if (i == null || i === "" || !t.firstChild) {
        t.appendChild(e);
      } else {
        t.replaceChild(e, t.firstChild);
      }
      i = e;
    } else {
      console.warn("Unrecognized value. Skipped inserting", e);
    }
  }
  return i;
}
function Ls(t, e, i, n) {
  let s = false;
  for (let r = 0, o = e.length; r < o; r++) {
    let a = e[r];
    let c = i && i[r];
    let l;
    if (a != null && a !== true && a !== false) {
      if ((l = typeof a) == "object" && a.nodeType) {
        t.push(a);
      } else if (Array.isArray(a)) {
        s = Ls(t, a, c) || s;
      } else if (l === "function") {
        if (n) {
          while (typeof a == "function") {
            a = a();
          }
          s = Ls(t, Array.isArray(a) ? a : [a], Array.isArray(c) ? c : [c]) || s;
        } else {
          t.push(a);
          s = true;
        }
      } else {
        const h = String(a);
        if (c && c.nodeType === 3 && c.data === h) {
          t.push(c);
        } else {
          t.push(document.createTextNode(h));
        }
      }
    }
  }
  return s;
}
function Ir(t, e, i = null) {
  for (let n = 0, s = e.length; n < s; n++) {
    t.insertBefore(e[n], i);
  }
}
function We(t, e, i, n) {
  if (i === undefined) {
    return t.textContent = "";
  }
  const s = n || document.createTextNode("");
  if (e.length) {
    let r = false;
    for (let o = e.length - 1; o >= 0; o--) {
      const a = e[o];
      if (s !== a) {
        const c = a.parentNode === t;
        if (!r && !o) {
          if (c) {
            t.replaceChild(s, a);
          } else {
            t.insertBefore(s, i);
          }
        } else if (c) {
          a.remove();
        }
      } else {
        r = true;
      }
    }
  } else {
    t.insertBefore(s, i);
  }
  return [s];
}
const Fn = Symbol("store-raw");
const Oi = Symbol("store-node");
function Ka(t) {
  let e = t[Jt];
  if (!e && (Object.defineProperty(t, Jt, {
    value: e = new Proxy(t, jc)
  }), !Array.isArray(t))) {
    const i = Object.keys(t);
    const n = Object.getOwnPropertyDescriptors(t);
    for (let s = 0, r = i.length; s < r; s++) {
      const o = i[s];
      if (n[o].get) {
        Object.defineProperty(t, o, {
          enumerable: n[o].enumerable,
          get: n[o].get.bind(e)
        });
      }
    }
  }
  return e;
}
function ti(t) {
  let e;
  return t != null && typeof t == "object" && (t[Jt] || !(e = Object.getPrototypeOf(t)) || e === Object.prototype || Array.isArray(t));
}
function Ie(t, e = new Set()) {
  let i;
  let n;
  let s;
  let r;
  if (i = t != null && t[Fn]) {
    return i;
  }
  if (!ti(t) || e.has(t)) {
    return t;
  }
  if (Array.isArray(t)) {
    if (Object.isFrozen(t)) {
      t = t.slice(0);
    } else {
      e.add(t);
    }
    for (let o = 0, a = t.length; o < a; o++) {
      s = t[o];
      if ((n = Ie(s, e)) !== s) {
        t[o] = n;
      }
    }
  } else {
    if (Object.isFrozen(t)) {
      t = Object.assign({}, t);
    } else {
      e.add(t);
    }
    const o = Object.keys(t);
    const a = Object.getOwnPropertyDescriptors(t);
    for (let c = 0, l = o.length; c < l; c++) {
      r = o[c];
      if (!a[r].get) {
        s = t[r];
        if ((n = Ie(s, e)) !== s) {
          t[r] = n;
        }
      }
    }
  }
  return t;
}
function ir(t) {
  let e = t[Oi];
  if (!e) {
    Object.defineProperty(t, Oi, {
      value: e = Object.create(null)
    });
  }
  return e;
}
function Rs(t, e, i) {
  return t[e] ||= Ga(i);
}
function Vc(t, e) {
  const i = Reflect.getOwnPropertyDescriptor(t, e);
  if (!!i && !i.get && !!i.configurable && e !== Jt && e !== Oi) {
    delete i.value;
    delete i.writable;
    i.get = () => t[Jt][e];
  }
  return i;
}
function Xa(t) {
  if (Ua()) {
    const e = ir(t);
    (e._ ||= Ga())();
  }
}
function Wc(t) {
  Xa(t);
  return Reflect.ownKeys(t);
}
function Ga(t) {
  const [e, i] = Je(t, {
    equals: false,
    internal: true
  });
  e.$ = i;
  return e;
}
const jc = {
  get(t, e, i) {
    if (e === Fn) {
      return t;
    }
    if (e === Jt) {
      return i;
    }
    if (e === Cs) {
      Xa(t);
      return i;
    }
    const n = ir(t);
    const s = n[e];
    let r = s ? s() : t[e];
    if (e === Oi || e === "__proto__") {
      return r;
    }
    if (!s) {
      const o = Object.getOwnPropertyDescriptor(t, e);
      if (Ua() && (typeof r != "function" || t.hasOwnProperty(e)) && (!o || !o.get)) {
        r = Rs(n, e, r)();
      }
    }
    if (ti(r)) {
      return Ka(r);
    } else {
      return r;
    }
  },
  has(t, e) {
    if (e === Fn || e === Jt || e === Cs || e === Oi || e === "__proto__") {
      return true;
    } else {
      this.get(t, e, t);
      return e in t;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Wc,
  getOwnPropertyDescriptor: Vc
};
function ei(t, e, i, n = false) {
  if (!n && t[e] === i) {
    return;
  }
  const s = t[e];
  const r = t.length;
  if (i === undefined) {
    delete t[e];
  } else {
    t[e] = i;
  }
  let o = ir(t);
  let a;
  if (a = Rs(o, e, s)) {
    a.$(() => i);
  }
  if (Array.isArray(t) && t.length !== r) {
    for (let c = t.length; c < r; c++) {
      if (a = o[c]) {
        a.$();
      }
    }
    if (a = Rs(o, "length", r)) {
      a.$(t.length);
    }
  }
  if (a = o._) {
    a.$();
  }
}
function qa(t, e) {
  const i = Object.keys(e);
  for (let n = 0; n < i.length; n += 1) {
    const s = i[n];
    ei(t, s, e[s]);
  }
}
function Zc(t, e) {
  if (typeof e == "function") {
    e = e(t);
  }
  e = Ie(e);
  if (Array.isArray(e)) {
    if (t === e) {
      return;
    }
    let i = 0;
    let n = e.length;
    for (; i < n; i++) {
      const s = e[i];
      if (t[i] !== s) {
        ei(t, i, s);
      }
    }
    ei(t, "length", n);
  } else {
    qa(t, e);
  }
}
function bi(t, e, i = []) {
  let n;
  let s = t;
  if (e.length > 1) {
    n = e.shift();
    const o = typeof n;
    const a = Array.isArray(t);
    if (Array.isArray(n)) {
      for (let c = 0; c < n.length; c++) {
        bi(t, [n[c]].concat(e), i);
      }
      return;
    } else if (a && o === "function") {
      for (let c = 0; c < t.length; c++) {
        if (n(t[c], c)) {
          bi(t, [c].concat(e), i);
        }
      }
      return;
    } else if (a && o === "object") {
      const {
        from: c = 0,
        to: l = t.length - 1,
        by: h = 1
      } = n;
      for (let d = c; d <= l; d += h) {
        bi(t, [d].concat(e), i);
      }
      return;
    } else if (e.length > 1) {
      bi(t[n], e, [n].concat(i));
      return;
    }
    s = t[n];
    i = [n].concat(i);
  }
  let r = e[0];
  if ((typeof r != "function" || !(r = r(s, i), r === s)) && (n !== undefined || r != null)) {
    r = Ie(r);
    if (n === undefined || ti(s) && ti(r) && !Array.isArray(r)) {
      qa(s, r);
    } else {
      ei(t, n, r);
    }
  }
}
function __(...[t, e]) {
  const i = Ie(t || {});
  const n = Array.isArray(i);
  const s = Ka(i);
  function r(...o) {
    Fs(() => {
      if (n && o.length === 1) {
        Zc(i, o[0]);
      } else {
        bi(i, o);
      }
    });
  }
  return [s, r];
}
const Ln = new WeakMap();
const Qa = {
  get(t, e) {
    if (e === Fn) {
      return t;
    }
    const i = t[e];
    let n;
    if (ti(i)) {
      return Ln.get(i) || (Ln.set(i, n = new Proxy(i, Qa)), n);
    } else {
      return i;
    }
  },
  set(t, e, i) {
    ei(t, e, Ie(i));
    return true;
  },
  deleteProperty(t, e) {
    ei(t, e, undefined, true);
    return true;
  }
};
function m_(t) {
  return e => {
    if (ti(e)) {
      let i;
      if (!(i = Ln.get(e))) {
        Ln.set(e, i = new Proxy(e, Qa));
      }
      t(i);
    }
    return e;
  };
}
let en;
const Yc = new Uint8Array(16);
function Kc() {
  if (!en && (en = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !en)) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return en(Yc);
}
const Xc = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Gc(t) {
  return typeof t == "string" && Xc.test(t);
}
const bt = [];
for (let t = 0; t < 256; ++t) {
  bt.push((t + 256).toString(16).slice(1));
}
function Ja(t, e = 0) {
  return bt[t[e + 0]] + bt[t[e + 1]] + bt[t[e + 2]] + bt[t[e + 3]] + "-" + bt[t[e + 4]] + bt[t[e + 5]] + "-" + bt[t[e + 6]] + bt[t[e + 7]] + "-" + bt[t[e + 8]] + bt[t[e + 9]] + "-" + bt[t[e + 10]] + bt[t[e + 11]] + bt[t[e + 12]] + bt[t[e + 13]] + bt[t[e + 14]] + bt[t[e + 15]];
}
function qc(t) {
  if (!Gc(t)) {
    throw TypeError("Invalid UUID");
  }
  let e;
  const i = new Uint8Array(16);
  i[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24;
  i[1] = e >>> 16 & 255;
  i[2] = e >>> 8 & 255;
  i[3] = e & 255;
  i[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8;
  i[5] = e & 255;
  i[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8;
  i[7] = e & 255;
  i[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8;
  i[9] = e & 255;
  i[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255;
  i[11] = e / 4294967296 & 255;
  i[12] = e >>> 24 & 255;
  i[13] = e >>> 16 & 255;
  i[14] = e >>> 8 & 255;
  i[15] = e & 255;
  return i;
}
function Qc(t) {
  t = unescape(encodeURIComponent(t));
  const e = [];
  for (let i = 0; i < t.length; ++i) {
    e.push(t.charCodeAt(i));
  }
  return e;
}
const Jc = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const th = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function eh(t, e, i) {
  function n(s, r, o, a) {
    if (typeof s == "string") {
      s = Qc(s);
    }
    if (typeof r == "string") {
      r = qc(r);
    }
    if (r?.length !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let l = new Uint8Array(16 + s.length);
    l.set(r);
    l.set(s, r.length);
    l = i(l);
    l[6] = l[6] & 15 | e;
    l[8] = l[8] & 63 | 128;
    if (o) {
      a = a || 0;
      for (let h = 0; h < 16; ++h) {
        o[a + h] = l[h];
      }
      return o;
    }
    return Ja(l);
  }
  try {
    n.name = t;
  } catch {}
  n.DNS = Jc;
  n.URL = th;
  return n;
}
const ih = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Pr = {
  randomUUID: ih
};
function x_(t, e, i) {
  if (Pr.randomUUID && !e && !t) {
    return Pr.randomUUID();
  }
  t = t || {};
  const n = t.random || (t.rng || Kc)();
  n[6] = n[6] & 15 | 64;
  n[8] = n[8] & 63 | 128;
  if (e) {
    i = i || 0;
    for (let s = 0; s < 16; ++s) {
      e[i + s] = n[s];
    }
    return e;
  }
  return Ja(n);
}
function nh(t, e, i, n) {
  switch (t) {
    case 0:
      return e & i ^ ~e & n;
    case 1:
      return e ^ i ^ n;
    case 2:
      return e & i ^ e & n ^ i & n;
    case 3:
      return e ^ i ^ n;
  }
}
function ns(t, e) {
  return t << e | t >>> 32 - e;
}
function sh(t) {
  const e = [1518500249, 1859775393, 2400959708, 3395469782];
  const i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof t == "string") {
    const o = unescape(encodeURIComponent(t));
    t = [];
    for (let a = 0; a < o.length; ++a) {
      t.push(o.charCodeAt(a));
    }
  } else if (!Array.isArray(t)) {
    t = Array.prototype.slice.call(t);
  }
  t.push(128);
  const n = t.length / 4 + 2;
  const s = Math.ceil(n / 16);
  const r = new Array(s);
  for (let o = 0; o < s; ++o) {
    const a = new Uint32Array(16);
    for (let c = 0; c < 16; ++c) {
      a[c] = t[o * 64 + c * 4] << 24 | t[o * 64 + c * 4 + 1] << 16 | t[o * 64 + c * 4 + 2] << 8 | t[o * 64 + c * 4 + 3];
    }
    r[o] = a;
  }
  r[s - 1][14] = (t.length - 1) * 8 / Math.pow(2, 32);
  r[s - 1][14] = Math.floor(r[s - 1][14]);
  r[s - 1][15] = (t.length - 1) * 8 & -1;
  for (let o = 0; o < s; ++o) {
    const a = new Uint32Array(80);
    for (let p = 0; p < 16; ++p) {
      a[p] = r[o][p];
    }
    for (let p = 16; p < 80; ++p) {
      a[p] = ns(a[p - 3] ^ a[p - 8] ^ a[p - 14] ^ a[p - 16], 1);
    }
    let c = i[0];
    let l = i[1];
    let h = i[2];
    let d = i[3];
    let g = i[4];
    for (let p = 0; p < 80; ++p) {
      const b = Math.floor(p / 20);
      const y = ns(c, 5) + nh(b, l, h, d) + g + e[b] + a[p] >>> 0;
      g = d;
      d = h;
      h = ns(l, 30) >>> 0;
      l = c;
      c = y;
    }
    i[0] = i[0] + c >>> 0;
    i[1] = i[1] + l >>> 0;
    i[2] = i[2] + h >>> 0;
    i[3] = i[3] + d >>> 0;
    i[4] = i[4] + g >>> 0;
  }
  return [i[0] >> 24 & 255, i[0] >> 16 & 255, i[0] >> 8 & 255, i[0] & 255, i[1] >> 24 & 255, i[1] >> 16 & 255, i[1] >> 8 & 255, i[1] & 255, i[2] >> 24 & 255, i[2] >> 16 & 255, i[2] >> 8 & 255, i[2] & 255, i[3] >> 24 & 255, i[3] >> 16 & 255, i[3] >> 8 & 255, i[3] & 255, i[4] >> 24 & 255, i[4] >> 16 & 255, i[4] >> 8 & 255, i[4] & 255];
}
const rh = eh("v5", 80, sh);
const b_ = rh;
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const oh = 4;
const zr = 0;
const Br = 1;
const ah = 2;
function oi(t) {
  let e = t.length;
  while (--e >= 0) {
    t[e] = 0;
  }
}
const lh = 0;
const tl = 1;
const ch = 2;
const hh = 3;
const fh = 258;
const nr = 29;
const Wi = 256;
const Ci = Wi + 1 + nr;
const qe = 30;
const sr = 19;
const el = Ci * 2 + 1;
const Te = 15;
const ss = 16;
const uh = 7;
const rr = 256;
const il = 16;
const nl = 17;
const sl = 18;
const Is = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
const wn = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
const dh = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
const rl = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
const gh = 512;
const se = new Array((Ci + 2) * 2);
oi(se);
const Si = new Array(qe * 2);
oi(Si);
const Fi = new Array(gh);
oi(Fi);
const Li = new Array(fh - hh + 1);
oi(Li);
const or = new Array(nr);
oi(or);
const Rn = new Array(qe);
oi(Rn);
function rs(t, e, i, n, s) {
  this.static_tree = t;
  this.extra_bits = e;
  this.extra_base = i;
  this.elems = n;
  this.max_length = s;
  this.has_stree = t && t.length;
}
let ol;
let al;
let ll;
function os(t, e) {
  this.dyn_tree = t;
  this.max_code = 0;
  this.stat_desc = e;
}
const cl = t => t < 256 ? Fi[t] : Fi[256 + (t >>> 7)];
const Ri = (t, e) => {
  t.pending_buf[t.pending++] = e & 255;
  t.pending_buf[t.pending++] = e >>> 8 & 255;
};
const Tt = (t, e, i) => {
  if (t.bi_valid > ss - i) {
    t.bi_buf |= e << t.bi_valid & 65535;
    Ri(t, t.bi_buf);
    t.bi_buf = e >> ss - t.bi_valid;
    t.bi_valid += i - ss;
  } else {
    t.bi_buf |= e << t.bi_valid & 65535;
    t.bi_valid += i;
  }
};
const Xt = (t, e, i) => {
  Tt(t, i[e * 2], i[e * 2 + 1]);
};
const hl = (t, e) => {
  let i = 0;
  do {
    i |= t & 1;
    t >>>= 1;
    i <<= 1;
  } while (--e > 0);
  return i >>> 1;
};
const ph = t => {
  if (t.bi_valid === 16) {
    Ri(t, t.bi_buf);
    t.bi_buf = 0;
    t.bi_valid = 0;
  } else if (t.bi_valid >= 8) {
    t.pending_buf[t.pending++] = t.bi_buf & 255;
    t.bi_buf >>= 8;
    t.bi_valid -= 8;
  }
};
const _h = (t, e) => {
  const i = e.dyn_tree;
  const n = e.max_code;
  const s = e.stat_desc.static_tree;
  const r = e.stat_desc.has_stree;
  const o = e.stat_desc.extra_bits;
  const a = e.stat_desc.extra_base;
  const c = e.stat_desc.max_length;
  let l;
  let h;
  let d;
  let g;
  let p;
  let b;
  let y = 0;
  for (g = 0; g <= Te; g++) {
    t.bl_count[g] = 0;
  }
  i[t.heap[t.heap_max] * 2 + 1] = 0;
  l = t.heap_max + 1;
  for (; l < el; l++) {
    h = t.heap[l];
    g = i[i[h * 2 + 1] * 2 + 1] + 1;
    if (g > c) {
      g = c;
      y++;
    }
    i[h * 2 + 1] = g;
    if (!(h > n)) {
      t.bl_count[g]++;
      p = 0;
      if (h >= a) {
        p = o[h - a];
      }
      b = i[h * 2];
      t.opt_len += b * (g + p);
      if (r) {
        t.static_len += b * (s[h * 2 + 1] + p);
      }
    }
  }
  if (y !== 0) {
    do {
      for (g = c - 1; t.bl_count[g] === 0;) {
        g--;
      }
      t.bl_count[g]--;
      t.bl_count[g + 1] += 2;
      t.bl_count[c]--;
      y -= 2;
    } while (y > 0);
    for (g = c; g !== 0; g--) {
      for (h = t.bl_count[g]; h !== 0;) {
        d = t.heap[--l];
        if (!(d > n)) {
          if (i[d * 2 + 1] !== g) {
            t.opt_len += (g - i[d * 2 + 1]) * i[d * 2];
            i[d * 2 + 1] = g;
          }
          h--;
        }
      }
    }
  }
};
const fl = (t, e, i) => {
  const n = new Array(Te + 1);
  let s = 0;
  let r;
  let o;
  for (r = 1; r <= Te; r++) {
    s = s + i[r - 1] << 1;
    n[r] = s;
  }
  for (o = 0; o <= e; o++) {
    let a = t[o * 2 + 1];
    if (a !== 0) {
      t[o * 2] = hl(n[a]++, a);
    }
  }
};
const mh = () => {
  let t;
  let e;
  let i;
  let n;
  let s;
  const r = new Array(Te + 1);
  i = 0;
  n = 0;
  for (; n < nr - 1; n++) {
    or[n] = i;
    t = 0;
    for (; t < 1 << Is[n]; t++) {
      Li[i++] = n;
    }
  }
  Li[i - 1] = n;
  s = 0;
  n = 0;
  for (; n < 16; n++) {
    Rn[n] = s;
    t = 0;
    for (; t < 1 << wn[n]; t++) {
      Fi[s++] = n;
    }
  }
  for (s >>= 7; n < qe; n++) {
    Rn[n] = s << 7;
    t = 0;
    for (; t < 1 << wn[n] - 7; t++) {
      Fi[256 + s++] = n;
    }
  }
  for (e = 0; e <= Te; e++) {
    r[e] = 0;
  }
  for (t = 0; t <= 143;) {
    se[t * 2 + 1] = 8;
    t++;
    r[8]++;
  }
  while (t <= 255) {
    se[t * 2 + 1] = 9;
    t++;
    r[9]++;
  }
  while (t <= 279) {
    se[t * 2 + 1] = 7;
    t++;
    r[7]++;
  }
  while (t <= 287) {
    se[t * 2 + 1] = 8;
    t++;
    r[8]++;
  }
  fl(se, Ci + 1, r);
  t = 0;
  for (; t < qe; t++) {
    Si[t * 2 + 1] = 5;
    Si[t * 2] = hl(t, 5);
  }
  ol = new rs(se, Is, Wi + 1, Ci, Te);
  al = new rs(Si, wn, 0, qe, Te);
  ll = new rs(new Array(0), dh, 0, sr, uh);
};
const ul = t => {
  let e;
  for (e = 0; e < Ci; e++) {
    t.dyn_ltree[e * 2] = 0;
  }
  for (e = 0; e < qe; e++) {
    t.dyn_dtree[e * 2] = 0;
  }
  for (e = 0; e < sr; e++) {
    t.bl_tree[e * 2] = 0;
  }
  t.dyn_ltree[rr * 2] = 1;
  t.opt_len = t.static_len = 0;
  t.sym_next = t.matches = 0;
};
const dl = t => {
  if (t.bi_valid > 8) {
    Ri(t, t.bi_buf);
  } else if (t.bi_valid > 0) {
    t.pending_buf[t.pending++] = t.bi_buf;
  }
  t.bi_buf = 0;
  t.bi_valid = 0;
};
const Nr = (t, e, i, n) => {
  const s = e * 2;
  const r = i * 2;
  return t[s] < t[r] || t[s] === t[r] && n[e] <= n[i];
};
const as = (t, e, i) => {
  const n = t.heap[i];
  let s = i << 1;
  while (s <= t.heap_len && (s < t.heap_len && Nr(e, t.heap[s + 1], t.heap[s], t.depth) && s++, !Nr(e, n, t.heap[s], t.depth))) {
    t.heap[i] = t.heap[s];
    i = s;
    s <<= 1;
  }
  t.heap[i] = n;
};
const Ur = (t, e, i) => {
  let n;
  let s;
  let r = 0;
  let o;
  let a;
  if (t.sym_next !== 0) {
    do {
      n = t.pending_buf[t.sym_buf + r++] & 255;
      n += (t.pending_buf[t.sym_buf + r++] & 255) << 8;
      s = t.pending_buf[t.sym_buf + r++];
      if (n === 0) {
        Xt(t, s, e);
      } else {
        o = Li[s];
        Xt(t, o + Wi + 1, e);
        a = Is[o];
        if (a !== 0) {
          s -= or[o];
          Tt(t, s, a);
        }
        n--;
        o = cl(n);
        Xt(t, o, i);
        a = wn[o];
        if (a !== 0) {
          n -= Rn[o];
          Tt(t, n, a);
        }
      }
    } while (r < t.sym_next);
  }
  Xt(t, rr, e);
};
const Ps = (t, e) => {
  const i = e.dyn_tree;
  const n = e.stat_desc.static_tree;
  const s = e.stat_desc.has_stree;
  const r = e.stat_desc.elems;
  let o;
  let a;
  let c = -1;
  let l;
  t.heap_len = 0;
  t.heap_max = el;
  o = 0;
  for (; o < r; o++) {
    if (i[o * 2] !== 0) {
      t.heap[++t.heap_len] = c = o;
      t.depth[o] = 0;
    } else {
      i[o * 2 + 1] = 0;
    }
  }
  while (t.heap_len < 2) {
    l = t.heap[++t.heap_len] = c < 2 ? ++c : 0;
    i[l * 2] = 1;
    t.depth[l] = 0;
    t.opt_len--;
    if (s) {
      t.static_len -= n[l * 2 + 1];
    }
  }
  e.max_code = c;
  o = t.heap_len >> 1;
  for (; o >= 1; o--) {
    as(t, i, o);
  }
  l = r;
  do {
    o = t.heap[1];
    t.heap[1] = t.heap[t.heap_len--];
    as(t, i, 1);
    a = t.heap[1];
    t.heap[--t.heap_max] = o;
    t.heap[--t.heap_max] = a;
    i[l * 2] = i[o * 2] + i[a * 2];
    t.depth[l] = (t.depth[o] >= t.depth[a] ? t.depth[o] : t.depth[a]) + 1;
    i[o * 2 + 1] = i[a * 2 + 1] = l;
    t.heap[1] = l++;
    as(t, i, 1);
  } while (t.heap_len >= 2);
  t.heap[--t.heap_max] = t.heap[1];
  _h(t, e);
  fl(i, c, t.bl_count);
};
const Hr = (t, e, i) => {
  let n;
  let s = -1;
  let r;
  let o = e[1];
  let a = 0;
  let c = 7;
  let l = 4;
  if (o === 0) {
    c = 138;
    l = 3;
  }
  e[(i + 1) * 2 + 1] = 65535;
  n = 0;
  for (; n <= i; n++) {
    r = o;
    o = e[(n + 1) * 2 + 1];
    if (!(++a < c) || r !== o) {
      if (a < l) {
        t.bl_tree[r * 2] += a;
      } else if (r !== 0) {
        if (r !== s) {
          t.bl_tree[r * 2]++;
        }
        t.bl_tree[il * 2]++;
      } else if (a <= 10) {
        t.bl_tree[nl * 2]++;
      } else {
        t.bl_tree[sl * 2]++;
      }
      a = 0;
      s = r;
      if (o === 0) {
        c = 138;
        l = 3;
      } else if (r === o) {
        c = 6;
        l = 3;
      } else {
        c = 7;
        l = 4;
      }
    }
  }
};
const $r = (t, e, i) => {
  let n;
  let s = -1;
  let r;
  let o = e[1];
  let a = 0;
  let c = 7;
  let l = 4;
  if (o === 0) {
    c = 138;
    l = 3;
  }
  n = 0;
  for (; n <= i; n++) {
    r = o;
    o = e[(n + 1) * 2 + 1];
    if (!(++a < c) || r !== o) {
      if (a < l) {
        do {
          Xt(t, r, t.bl_tree);
        } while (--a !== 0);
      } else if (r !== 0) {
        if (r !== s) {
          Xt(t, r, t.bl_tree);
          a--;
        }
        Xt(t, il, t.bl_tree);
        Tt(t, a - 3, 2);
      } else if (a <= 10) {
        Xt(t, nl, t.bl_tree);
        Tt(t, a - 3, 3);
      } else {
        Xt(t, sl, t.bl_tree);
        Tt(t, a - 11, 7);
      }
      a = 0;
      s = r;
      if (o === 0) {
        c = 138;
        l = 3;
      } else if (r === o) {
        c = 6;
        l = 3;
      } else {
        c = 7;
        l = 4;
      }
    }
  }
};
const xh = t => {
  let e;
  Hr(t, t.dyn_ltree, t.l_desc.max_code);
  Hr(t, t.dyn_dtree, t.d_desc.max_code);
  Ps(t, t.bl_desc);
  e = sr - 1;
  for (; e >= 3 && t.bl_tree[rl[e] * 2 + 1] === 0; e--);
  t.opt_len += (e + 1) * 3 + 5 + 5 + 4;
  return e;
};
const bh = (t, e, i, n) => {
  let s;
  Tt(t, e - 257, 5);
  Tt(t, i - 1, 5);
  Tt(t, n - 4, 4);
  s = 0;
  for (; s < n; s++) {
    Tt(t, t.bl_tree[rl[s] * 2 + 1], 3);
  }
  $r(t, t.dyn_ltree, e - 1);
  $r(t, t.dyn_dtree, i - 1);
};
const yh = t => {
  let e = 4093624447;
  let i;
  for (i = 0; i <= 31; i++, e >>>= 1) {
    if (e & 1 && t.dyn_ltree[i * 2] !== 0) {
      return zr;
    }
  }
  if (t.dyn_ltree[18] !== 0 || t.dyn_ltree[20] !== 0 || t.dyn_ltree[26] !== 0) {
    return Br;
  }
  for (i = 32; i < Wi; i++) {
    if (t.dyn_ltree[i * 2] !== 0) {
      return Br;
    }
  }
  return zr;
};
let Vr = false;
const wh = t => {
  if (!Vr) {
    mh();
    Vr = true;
  }
  t.l_desc = new os(t.dyn_ltree, ol);
  t.d_desc = new os(t.dyn_dtree, al);
  t.bl_desc = new os(t.bl_tree, ll);
  t.bi_buf = 0;
  t.bi_valid = 0;
  ul(t);
};
const gl = (t, e, i, n) => {
  Tt(t, (lh << 1) + (n ? 1 : 0), 3);
  dl(t);
  Ri(t, i);
  Ri(t, ~i);
  if (i) {
    t.pending_buf.set(t.window.subarray(e, e + i), t.pending);
  }
  t.pending += i;
};
const vh = t => {
  Tt(t, tl << 1, 3);
  Xt(t, rr, se);
  ph(t);
};
const kh = (t, e, i, n) => {
  let s;
  let r;
  let o = 0;
  if (t.level > 0) {
    if (t.strm.data_type === ah) {
      t.strm.data_type = yh(t);
    }
    Ps(t, t.l_desc);
    Ps(t, t.d_desc);
    o = xh(t);
    s = t.opt_len + 3 + 7 >>> 3;
    r = t.static_len + 3 + 7 >>> 3;
    if (r <= s) {
      s = r;
    }
  } else {
    s = r = i + 5;
  }
  if (i + 4 <= s && e !== -1) {
    gl(t, e, i, n);
  } else if (t.strategy === oh || r === s) {
    Tt(t, (tl << 1) + (n ? 1 : 0), 3);
    Ur(t, se, Si);
  } else {
    Tt(t, (ch << 1) + (n ? 1 : 0), 3);
    bh(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1);
    Ur(t, t.dyn_ltree, t.dyn_dtree);
  }
  ul(t);
  if (n) {
    dl(t);
  }
};
const Sh = (t, e, i) => {
  t.pending_buf[t.sym_buf + t.sym_next++] = e;
  t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8;
  t.pending_buf[t.sym_buf + t.sym_next++] = i;
  if (e === 0) {
    t.dyn_ltree[i * 2]++;
  } else {
    t.matches++;
    e--;
    t.dyn_ltree[(Li[i] + Wi + 1) * 2]++;
    t.dyn_dtree[cl(e) * 2]++;
  }
  return t.sym_next === t.sym_end;
};
var Eh = wh;
var Ah = gl;
var Mh = kh;
var Dh = Sh;
var Th = vh;
var Oh = {
  _tr_init: Eh,
  _tr_stored_block: Ah,
  _tr_flush_block: Mh,
  _tr_tally: Dh,
  _tr_align: Th
};
const Ch = (t, e, i, n) => {
  let s = t & 65535 | 0;
  let r = t >>> 16 & 65535 | 0;
  let o = 0;
  while (i !== 0) {
    o = i > 2000 ? 2000 : i;
    i -= o;
    do {
      s = s + e[n++] | 0;
      r = r + s | 0;
    } while (--o);
    s %= 65521;
    r %= 65521;
  }
  return s | r << 16 | 0;
};
var Ii = Ch;
const Fh = () => {
  let t;
  let e = [];
  for (var i = 0; i < 256; i++) {
    t = i;
    for (var n = 0; n < 8; n++) {
      t = t & 1 ? t >>> 1 ^ -306674912 : t >>> 1;
    }
    e[i] = t;
  }
  return e;
};
const Lh = new Uint32Array(Fh());
const Rh = (t, e, i, n) => {
  const s = Lh;
  const r = n + i;
  t ^= -1;
  for (let o = n; o < r; o++) {
    t = t >>> 8 ^ s[(t ^ e[o]) & 255];
  }
  return t ^ -1;
};
var mt = Rh;
var Pe = {
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
var ai = {
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
  _tr_init: Ih,
  _tr_stored_block: zs,
  _tr_flush_block: Ph,
  _tr_tally: me,
  _tr_align: zh
} = Oh;
const {
  Z_NO_FLUSH: xe,
  Z_PARTIAL_FLUSH: Bh,
  Z_FULL_FLUSH: Nh,
  Z_FINISH: Bt,
  Z_BLOCK: Wr,
  Z_OK: yt,
  Z_STREAM_END: jr,
  Z_STREAM_ERROR: qt,
  Z_DATA_ERROR: Uh,
  Z_BUF_ERROR: ls,
  Z_DEFAULT_COMPRESSION: Hh,
  Z_FILTERED: $h,
  Z_HUFFMAN_ONLY: nn,
  Z_RLE: Vh,
  Z_FIXED: Wh,
  Z_DEFAULT_STRATEGY: jh,
  Z_UNKNOWN: Zh,
  Z_DEFLATED: Yn
} = ai;
const Yh = 9;
const Kh = 15;
const Xh = 8;
const Gh = 29;
const qh = 256;
const Bs = qh + 1 + Gh;
const Qh = 30;
const Jh = 19;
const tf = Bs * 2 + 1;
const ef = 15;
const q = 3;
const de = 258;
const Qt = de + q + 1;
const nf = 32;
const ii = 42;
const ar = 57;
const Ns = 69;
const Us = 73;
const Hs = 91;
const $s = 103;
const Oe = 113;
const yi = 666;
const Et = 1;
const li = 2;
const ze = 3;
const ci = 4;
const sf = 3;
const Ce = (t, e) => {
  t.msg = Pe[e];
  return e;
};
const Zr = t => t * 2 - (t > 4 ? 9 : 0);
const ue = t => {
  let e = t.length;
  while (--e >= 0) {
    t[e] = 0;
  }
};
const rf = t => {
  let e;
  let i;
  let n;
  let s = t.w_size;
  e = t.hash_size;
  n = e;
  do {
    i = t.head[--n];
    t.head[n] = i >= s ? i - s : 0;
  } while (--e);
  e = s;
  n = e;
  do {
    i = t.prev[--n];
    t.prev[n] = i >= s ? i - s : 0;
  } while (--e);
};
let of = (t, e, i) => (e << t.hash_shift ^ i) & t.hash_mask;
let be = of;
const Ct = t => {
  const e = t.state;
  let i = e.pending;
  if (i > t.avail_out) {
    i = t.avail_out;
  }
  if (i !== 0) {
    t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + i), t.next_out);
    t.next_out += i;
    e.pending_out += i;
    t.total_out += i;
    t.avail_out -= i;
    e.pending -= i;
    if (e.pending === 0) {
      e.pending_out = 0;
    }
  }
};
const Lt = (t, e) => {
  Ph(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e);
  t.block_start = t.strstart;
  Ct(t.strm);
};
const tt = (t, e) => {
  t.pending_buf[t.pending++] = e;
};
const ui = (t, e) => {
  t.pending_buf[t.pending++] = e >>> 8 & 255;
  t.pending_buf[t.pending++] = e & 255;
};
const Vs = (t, e, i, n) => {
  let s = t.avail_in;
  if (s > n) {
    s = n;
  }
  if (s === 0) {
    return 0;
  } else {
    t.avail_in -= s;
    e.set(t.input.subarray(t.next_in, t.next_in + s), i);
    if (t.state.wrap === 1) {
      t.adler = Ii(t.adler, e, s, i);
    } else if (t.state.wrap === 2) {
      t.adler = mt(t.adler, e, s, i);
    }
    t.next_in += s;
    t.total_in += s;
    return s;
  }
};
const pl = (t, e) => {
  let i = t.max_chain_length;
  let n = t.strstart;
  let s;
  let r;
  let o = t.prev_length;
  let a = t.nice_match;
  const c = t.strstart > t.w_size - Qt ? t.strstart - (t.w_size - Qt) : 0;
  const l = t.window;
  const h = t.w_mask;
  const d = t.prev;
  const g = t.strstart + de;
  let p = l[n + o - 1];
  let b = l[n + o];
  if (t.prev_length >= t.good_match) {
    i >>= 2;
  }
  if (a > t.lookahead) {
    a = t.lookahead;
  }
  do {
    s = e;
    if (l[s + o] === b && l[s + o - 1] === p && l[s] === l[n] && l[++s] === l[n + 1]) {
      n += 2;
      s++;
      do ; while (l[++n] === l[++s] && l[++n] === l[++s] && l[++n] === l[++s] && l[++n] === l[++s] && l[++n] === l[++s] && l[++n] === l[++s] && l[++n] === l[++s] && l[++n] === l[++s] && n < g);
      r = de - (g - n);
      n = g - de;
      if (r > o) {
        t.match_start = e;
        o = r;
        if (r >= a) {
          break;
        }
        p = l[n + o - 1];
        b = l[n + o];
      }
    }
  } while ((e = d[e & h]) > c && --i !== 0);
  if (o <= t.lookahead) {
    return o;
  } else {
    return t.lookahead;
  }
};
const ni = t => {
  const e = t.w_size;
  let i;
  let n;
  let s;
  do {
    n = t.window_size - t.lookahead - t.strstart;
    if (t.strstart >= e + (e - Qt)) {
      t.window.set(t.window.subarray(e, e + e - n), 0);
      t.match_start -= e;
      t.strstart -= e;
      t.block_start -= e;
      if (t.insert > t.strstart) {
        t.insert = t.strstart;
      }
      rf(t);
      n += e;
    }
    if (t.strm.avail_in === 0) {
      break;
    }
    i = Vs(t.strm, t.window, t.strstart + t.lookahead, n);
    t.lookahead += i;
    if (t.lookahead + t.insert >= q) {
      s = t.strstart - t.insert;
      t.ins_h = t.window[s];
      t.ins_h = be(t, t.ins_h, t.window[s + 1]);
      while (t.insert && (t.ins_h = be(t, t.ins_h, t.window[s + q - 1]), t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < q)));
    }
  } while (t.lookahead < Qt && t.strm.avail_in !== 0);
};
const _l = (t, e) => {
  let i = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5;
  let n;
  let s;
  let r;
  let o = 0;
  let a = t.strm.avail_in;
  do {
    n = 65535;
    r = t.bi_valid + 42 >> 3;
    if (t.strm.avail_out < r || (r = t.strm.avail_out - r, s = t.strstart - t.block_start, n > s + t.strm.avail_in && (n = s + t.strm.avail_in), n > r && (n = r), n < i && (n === 0 && e !== Bt || e === xe || n !== s + t.strm.avail_in))) {
      break;
    }
    o = e === Bt && n === s + t.strm.avail_in ? 1 : 0;
    zs(t, 0, 0, o);
    t.pending_buf[t.pending - 4] = n;
    t.pending_buf[t.pending - 3] = n >> 8;
    t.pending_buf[t.pending - 2] = ~n;
    t.pending_buf[t.pending - 1] = ~n >> 8;
    Ct(t.strm);
    if (s) {
      if (s > n) {
        s = n;
      }
      t.strm.output.set(t.window.subarray(t.block_start, t.block_start + s), t.strm.next_out);
      t.strm.next_out += s;
      t.strm.avail_out -= s;
      t.strm.total_out += s;
      t.block_start += s;
      n -= s;
    }
    if (n) {
      Vs(t.strm, t.strm.output, t.strm.next_out, n);
      t.strm.next_out += n;
      t.strm.avail_out -= n;
      t.strm.total_out += n;
    }
  } while (o === 0);
  a -= t.strm.avail_in;
  if (a) {
    if (a >= t.w_size) {
      t.matches = 2;
      t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0);
      t.strstart = t.w_size;
      t.insert = t.strstart;
    } else {
      if (t.window_size - t.strstart <= a) {
        t.strstart -= t.w_size;
        t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0);
        if (t.matches < 2) {
          t.matches++;
        }
        if (t.insert > t.strstart) {
          t.insert = t.strstart;
        }
      }
      t.window.set(t.strm.input.subarray(t.strm.next_in - a, t.strm.next_in), t.strstart);
      t.strstart += a;
      t.insert += a > t.w_size - t.insert ? t.w_size - t.insert : a;
    }
    t.block_start = t.strstart;
  }
  if (t.high_water < t.strstart) {
    t.high_water = t.strstart;
  }
  if (o) {
    return ci;
  } else if (e !== xe && e !== Bt && t.strm.avail_in === 0 && t.strstart === t.block_start) {
    return li;
  } else {
    r = t.window_size - t.strstart;
    if (t.strm.avail_in > r && t.block_start >= t.w_size) {
      t.block_start -= t.w_size;
      t.strstart -= t.w_size;
      t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0);
      if (t.matches < 2) {
        t.matches++;
      }
      r += t.w_size;
      if (t.insert > t.strstart) {
        t.insert = t.strstart;
      }
    }
    if (r > t.strm.avail_in) {
      r = t.strm.avail_in;
    }
    if (r) {
      Vs(t.strm, t.window, t.strstart, r);
      t.strstart += r;
      t.insert += r > t.w_size - t.insert ? t.w_size - t.insert : r;
    }
    if (t.high_water < t.strstart) {
      t.high_water = t.strstart;
    }
    r = t.bi_valid + 42 >> 3;
    r = t.pending_buf_size - r > 65535 ? 65535 : t.pending_buf_size - r;
    i = r > t.w_size ? t.w_size : r;
    s = t.strstart - t.block_start;
    if (s >= i || (s || e === Bt) && e !== xe && t.strm.avail_in === 0 && s <= r) {
      n = s > r ? r : s;
      o = e === Bt && t.strm.avail_in === 0 && n === s ? 1 : 0;
      zs(t, t.block_start, n, o);
      t.block_start += n;
      Ct(t.strm);
    }
    if (o) {
      return ze;
    } else {
      return Et;
    }
  }
};
const cs = (t, e) => {
  let i;
  let n;
  while (true) {
    if (t.lookahead < Qt) {
      ni(t);
      if (t.lookahead < Qt && e === xe) {
        return Et;
      }
      if (t.lookahead === 0) {
        break;
      }
    }
    i = 0;
    if (t.lookahead >= q) {
      t.ins_h = be(t, t.ins_h, t.window[t.strstart + q - 1]);
      i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
      t.head[t.ins_h] = t.strstart;
    }
    if (i !== 0 && t.strstart - i <= t.w_size - Qt) {
      t.match_length = pl(t, i);
    }
    if (t.match_length >= q) {
      n = me(t, t.strstart - t.match_start, t.match_length - q);
      t.lookahead -= t.match_length;
      if (t.match_length <= t.max_lazy_match && t.lookahead >= q) {
        t.match_length--;
        do {
          t.strstart++;
          t.ins_h = be(t, t.ins_h, t.window[t.strstart + q - 1]);
          i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
          t.head[t.ins_h] = t.strstart;
        } while (--t.match_length !== 0);
        t.strstart++;
      } else {
        t.strstart += t.match_length;
        t.match_length = 0;
        t.ins_h = t.window[t.strstart];
        t.ins_h = be(t, t.ins_h, t.window[t.strstart + 1]);
      }
    } else {
      n = me(t, 0, t.window[t.strstart]);
      t.lookahead--;
      t.strstart++;
    }
    if (n && (Lt(t, false), t.strm.avail_out === 0)) {
      return Et;
    }
  }
  t.insert = t.strstart < q - 1 ? t.strstart : q - 1;
  if (e === Bt) {
    Lt(t, true);
    if (t.strm.avail_out === 0) {
      return ze;
    } else {
      return ci;
    }
  } else if (t.sym_next && (Lt(t, false), t.strm.avail_out === 0)) {
    return Et;
  } else {
    return li;
  }
};
const je = (t, e) => {
  let i;
  let n;
  let s;
  while (true) {
    if (t.lookahead < Qt) {
      ni(t);
      if (t.lookahead < Qt && e === xe) {
        return Et;
      }
      if (t.lookahead === 0) {
        break;
      }
    }
    i = 0;
    if (t.lookahead >= q) {
      t.ins_h = be(t, t.ins_h, t.window[t.strstart + q - 1]);
      i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
      t.head[t.ins_h] = t.strstart;
    }
    t.prev_length = t.match_length;
    t.prev_match = t.match_start;
    t.match_length = q - 1;
    if (i !== 0 && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - Qt) {
      t.match_length = pl(t, i);
      if (t.match_length <= 5 && (t.strategy === $h || t.match_length === q && t.strstart - t.match_start > 4096)) {
        t.match_length = q - 1;
      }
    }
    if (t.prev_length >= q && t.match_length <= t.prev_length) {
      s = t.strstart + t.lookahead - q;
      n = me(t, t.strstart - 1 - t.prev_match, t.prev_length - q);
      t.lookahead -= t.prev_length - 1;
      t.prev_length -= 2;
      do {
        if (++t.strstart <= s) {
          t.ins_h = be(t, t.ins_h, t.window[t.strstart + q - 1]);
          i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h];
          t.head[t.ins_h] = t.strstart;
        }
      } while (--t.prev_length !== 0);
      t.match_available = 0;
      t.match_length = q - 1;
      t.strstart++;
      if (n && (Lt(t, false), t.strm.avail_out === 0)) {
        return Et;
      }
    } else if (t.match_available) {
      n = me(t, 0, t.window[t.strstart - 1]);
      if (n) {
        Lt(t, false);
      }
      t.strstart++;
      t.lookahead--;
      if (t.strm.avail_out === 0) {
        return Et;
      }
    } else {
      t.match_available = 1;
      t.strstart++;
      t.lookahead--;
    }
  }
  if (t.match_available) {
    n = me(t, 0, t.window[t.strstart - 1]);
    t.match_available = 0;
  }
  t.insert = t.strstart < q - 1 ? t.strstart : q - 1;
  if (e === Bt) {
    Lt(t, true);
    if (t.strm.avail_out === 0) {
      return ze;
    } else {
      return ci;
    }
  } else if (t.sym_next && (Lt(t, false), t.strm.avail_out === 0)) {
    return Et;
  } else {
    return li;
  }
};
const af = (t, e) => {
  let i;
  let n;
  let s;
  let r;
  const o = t.window;
  while (true) {
    if (t.lookahead <= de) {
      ni(t);
      if (t.lookahead <= de && e === xe) {
        return Et;
      }
      if (t.lookahead === 0) {
        break;
      }
    }
    t.match_length = 0;
    if (t.lookahead >= q && t.strstart > 0 && (s = t.strstart - 1, n = o[s], n === o[++s] && n === o[++s] && n === o[++s])) {
      r = t.strstart + de;
      do ; while (n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && n === o[++s] && s < r);
      t.match_length = de - (r - s);
      if (t.match_length > t.lookahead) {
        t.match_length = t.lookahead;
      }
    }
    if (t.match_length >= q) {
      i = me(t, 1, t.match_length - q);
      t.lookahead -= t.match_length;
      t.strstart += t.match_length;
      t.match_length = 0;
    } else {
      i = me(t, 0, t.window[t.strstart]);
      t.lookahead--;
      t.strstart++;
    }
    if (i && (Lt(t, false), t.strm.avail_out === 0)) {
      return Et;
    }
  }
  t.insert = 0;
  if (e === Bt) {
    Lt(t, true);
    if (t.strm.avail_out === 0) {
      return ze;
    } else {
      return ci;
    }
  } else if (t.sym_next && (Lt(t, false), t.strm.avail_out === 0)) {
    return Et;
  } else {
    return li;
  }
};
const lf = (t, e) => {
  let i;
  while (true) {
    if (t.lookahead === 0 && (ni(t), t.lookahead === 0)) {
      if (e === xe) {
        return Et;
      }
      break;
    }
    t.match_length = 0;
    i = me(t, 0, t.window[t.strstart]);
    t.lookahead--;
    t.strstart++;
    if (i && (Lt(t, false), t.strm.avail_out === 0)) {
      return Et;
    }
  }
  t.insert = 0;
  if (e === Bt) {
    Lt(t, true);
    if (t.strm.avail_out === 0) {
      return ze;
    } else {
      return ci;
    }
  } else if (t.sym_next && (Lt(t, false), t.strm.avail_out === 0)) {
    return Et;
  } else {
    return li;
  }
};
function Wt(t, e, i, n, s) {
  this.good_length = t;
  this.max_lazy = e;
  this.nice_length = i;
  this.max_chain = n;
  this.func = s;
}
const wi = [new Wt(0, 0, 0, 0, _l), new Wt(4, 4, 8, 4, cs), new Wt(4, 5, 16, 8, cs), new Wt(4, 6, 32, 32, cs), new Wt(4, 4, 16, 16, je), new Wt(8, 16, 32, 32, je), new Wt(8, 16, 128, 128, je), new Wt(8, 32, 128, 256, je), new Wt(32, 128, 258, 1024, je), new Wt(32, 258, 258, 4096, je)];
const cf = t => {
  t.window_size = t.w_size * 2;
  ue(t.head);
  t.max_lazy_match = wi[t.level].max_lazy;
  t.good_match = wi[t.level].good_length;
  t.nice_match = wi[t.level].nice_length;
  t.max_chain_length = wi[t.level].max_chain;
  t.strstart = 0;
  t.block_start = 0;
  t.lookahead = 0;
  t.insert = 0;
  t.match_length = t.prev_length = q - 1;
  t.match_available = 0;
  t.ins_h = 0;
};
function hf() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = Yn;
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
  this.dyn_ltree = new Uint16Array(tf * 2);
  this.dyn_dtree = new Uint16Array((Qh * 2 + 1) * 2);
  this.bl_tree = new Uint16Array((Jh * 2 + 1) * 2);
  ue(this.dyn_ltree);
  ue(this.dyn_dtree);
  ue(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(ef + 1);
  this.heap = new Uint16Array(Bs * 2 + 1);
  ue(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Uint16Array(Bs * 2 + 1);
  ue(this.depth);
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
const ji = t => {
  if (!t) {
    return 1;
  }
  const e = t.state;
  if (!e || e.strm !== t || e.status !== ii && e.status !== ar && e.status !== Ns && e.status !== Us && e.status !== Hs && e.status !== $s && e.status !== Oe && e.status !== yi) {
    return 1;
  } else {
    return 0;
  }
};
const ml = t => {
  if (ji(t)) {
    return Ce(t, qt);
  }
  t.total_in = t.total_out = 0;
  t.data_type = Zh;
  const e = t.state;
  e.pending = 0;
  e.pending_out = 0;
  if (e.wrap < 0) {
    e.wrap = -e.wrap;
  }
  e.status = e.wrap === 2 ? ar : e.wrap ? ii : Oe;
  t.adler = e.wrap === 2 ? 0 : 1;
  e.last_flush = -2;
  Ih(e);
  return yt;
};
const xl = t => {
  const e = ml(t);
  if (e === yt) {
    cf(t.state);
  }
  return e;
};
const ff = (t, e) => ji(t) || t.state.wrap !== 2 ? qt : (t.state.gzhead = e, yt);
const bl = (t, e, i, n, s, r) => {
  if (!t) {
    return qt;
  }
  let o = 1;
  if (e === Hh) {
    e = 6;
  }
  if (n < 0) {
    o = 0;
    n = -n;
  } else if (n > 15) {
    o = 2;
    n -= 16;
  }
  if (s < 1 || s > Yh || i !== Yn || n < 8 || n > 15 || e < 0 || e > 9 || r < 0 || r > Wh || n === 8 && o !== 1) {
    return Ce(t, qt);
  }
  if (n === 8) {
    n = 9;
  }
  const a = new hf();
  t.state = a;
  a.strm = t;
  a.status = ii;
  a.wrap = o;
  a.gzhead = null;
  a.w_bits = n;
  a.w_size = 1 << a.w_bits;
  a.w_mask = a.w_size - 1;
  a.hash_bits = s + 7;
  a.hash_size = 1 << a.hash_bits;
  a.hash_mask = a.hash_size - 1;
  a.hash_shift = ~~((a.hash_bits + q - 1) / q);
  a.window = new Uint8Array(a.w_size * 2);
  a.head = new Uint16Array(a.hash_size);
  a.prev = new Uint16Array(a.w_size);
  a.lit_bufsize = 1 << s + 6;
  a.pending_buf_size = a.lit_bufsize * 4;
  a.pending_buf = new Uint8Array(a.pending_buf_size);
  a.sym_buf = a.lit_bufsize;
  a.sym_end = (a.lit_bufsize - 1) * 3;
  a.level = e;
  a.strategy = r;
  a.method = i;
  return xl(t);
};
const uf = (t, e) => bl(t, e, Yn, Kh, Xh, jh);
const df = (t, e) => {
  if (ji(t) || e > Wr || e < 0) {
    if (t) {
      return Ce(t, qt);
    } else {
      return qt;
    }
  }
  const i = t.state;
  if (!t.output || t.avail_in !== 0 && !t.input || i.status === yi && e !== Bt) {
    return Ce(t, t.avail_out === 0 ? ls : qt);
  }
  const n = i.last_flush;
  i.last_flush = e;
  if (i.pending !== 0) {
    Ct(t);
    if (t.avail_out === 0) {
      i.last_flush = -1;
      return yt;
    }
  } else if (t.avail_in === 0 && Zr(e) <= Zr(n) && e !== Bt) {
    return Ce(t, ls);
  }
  if (i.status === yi && t.avail_in !== 0) {
    return Ce(t, ls);
  }
  if (i.status === ii && i.wrap === 0) {
    i.status = Oe;
  }
  if (i.status === ii) {
    let s = Yn + (i.w_bits - 8 << 4) << 8;
    let r = -1;
    if (i.strategy >= nn || i.level < 2) {
      r = 0;
    } else if (i.level < 6) {
      r = 1;
    } else if (i.level === 6) {
      r = 2;
    } else {
      r = 3;
    }
    s |= r << 6;
    if (i.strstart !== 0) {
      s |= nf;
    }
    s += 31 - s % 31;
    ui(i, s);
    if (i.strstart !== 0) {
      ui(i, t.adler >>> 16);
      ui(i, t.adler & 65535);
    }
    t.adler = 1;
    i.status = Oe;
    Ct(t);
    if (i.pending !== 0) {
      i.last_flush = -1;
      return yt;
    }
  }
  if (i.status === ar) {
    t.adler = 0;
    tt(i, 31);
    tt(i, 139);
    tt(i, 8);
    if (i.gzhead) {
      tt(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0));
      tt(i, i.gzhead.time & 255);
      tt(i, i.gzhead.time >> 8 & 255);
      tt(i, i.gzhead.time >> 16 & 255);
      tt(i, i.gzhead.time >> 24 & 255);
      tt(i, i.level === 9 ? 2 : i.strategy >= nn || i.level < 2 ? 4 : 0);
      tt(i, i.gzhead.os & 255);
      if (i.gzhead.extra && i.gzhead.extra.length) {
        tt(i, i.gzhead.extra.length & 255);
        tt(i, i.gzhead.extra.length >> 8 & 255);
      }
      if (i.gzhead.hcrc) {
        t.adler = mt(t.adler, i.pending_buf, i.pending, 0);
      }
      i.gzindex = 0;
      i.status = Ns;
    } else {
      tt(i, 0);
      tt(i, 0);
      tt(i, 0);
      tt(i, 0);
      tt(i, 0);
      tt(i, i.level === 9 ? 2 : i.strategy >= nn || i.level < 2 ? 4 : 0);
      tt(i, sf);
      i.status = Oe;
      Ct(t);
      if (i.pending !== 0) {
        i.last_flush = -1;
        return yt;
      }
    }
  }
  if (i.status === Ns) {
    if (i.gzhead.extra) {
      let s = i.pending;
      let r = (i.gzhead.extra.length & 65535) - i.gzindex;
      while (i.pending + r > i.pending_buf_size) {
        let a = i.pending_buf_size - i.pending;
        i.pending_buf.set(i.gzhead.extra.subarray(i.gzindex, i.gzindex + a), i.pending);
        i.pending = i.pending_buf_size;
        if (i.gzhead.hcrc && i.pending > s) {
          t.adler = mt(t.adler, i.pending_buf, i.pending - s, s);
        }
        i.gzindex += a;
        Ct(t);
        if (i.pending !== 0) {
          i.last_flush = -1;
          return yt;
        }
        s = 0;
        r -= a;
      }
      let o = new Uint8Array(i.gzhead.extra);
      i.pending_buf.set(o.subarray(i.gzindex, i.gzindex + r), i.pending);
      i.pending += r;
      if (i.gzhead.hcrc && i.pending > s) {
        t.adler = mt(t.adler, i.pending_buf, i.pending - s, s);
      }
      i.gzindex = 0;
    }
    i.status = Us;
  }
  if (i.status === Us) {
    if (i.gzhead.name) {
      let s = i.pending;
      let r;
      do {
        if (i.pending === i.pending_buf_size) {
          if (i.gzhead.hcrc && i.pending > s) {
            t.adler = mt(t.adler, i.pending_buf, i.pending - s, s);
          }
          Ct(t);
          if (i.pending !== 0) {
            i.last_flush = -1;
            return yt;
          }
          s = 0;
        }
        if (i.gzindex < i.gzhead.name.length) {
          r = i.gzhead.name.charCodeAt(i.gzindex++) & 255;
        } else {
          r = 0;
        }
        tt(i, r);
      } while (r !== 0);
      if (i.gzhead.hcrc && i.pending > s) {
        t.adler = mt(t.adler, i.pending_buf, i.pending - s, s);
      }
      i.gzindex = 0;
    }
    i.status = Hs;
  }
  if (i.status === Hs) {
    if (i.gzhead.comment) {
      let s = i.pending;
      let r;
      do {
        if (i.pending === i.pending_buf_size) {
          if (i.gzhead.hcrc && i.pending > s) {
            t.adler = mt(t.adler, i.pending_buf, i.pending - s, s);
          }
          Ct(t);
          if (i.pending !== 0) {
            i.last_flush = -1;
            return yt;
          }
          s = 0;
        }
        if (i.gzindex < i.gzhead.comment.length) {
          r = i.gzhead.comment.charCodeAt(i.gzindex++) & 255;
        } else {
          r = 0;
        }
        tt(i, r);
      } while (r !== 0);
      if (i.gzhead.hcrc && i.pending > s) {
        t.adler = mt(t.adler, i.pending_buf, i.pending - s, s);
      }
    }
    i.status = $s;
  }
  if (i.status === $s) {
    if (i.gzhead.hcrc) {
      if (i.pending + 2 > i.pending_buf_size && (Ct(t), i.pending !== 0)) {
        i.last_flush = -1;
        return yt;
      }
      tt(i, t.adler & 255);
      tt(i, t.adler >> 8 & 255);
      t.adler = 0;
    }
    i.status = Oe;
    Ct(t);
    if (i.pending !== 0) {
      i.last_flush = -1;
      return yt;
    }
  }
  if (t.avail_in !== 0 || i.lookahead !== 0 || e !== xe && i.status !== yi) {
    let s = i.level === 0 ? _l(i, e) : i.strategy === nn ? lf(i, e) : i.strategy === Vh ? af(i, e) : wi[i.level].func(i, e);
    if (s === ze || s === ci) {
      i.status = yi;
    }
    if (s === Et || s === ze) {
      if (t.avail_out === 0) {
        i.last_flush = -1;
      }
      return yt;
    }
    if (s === li && (e === Bh ? zh(i) : e !== Wr && (zs(i, 0, 0, false), e === Nh && (ue(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), Ct(t), t.avail_out === 0)) {
      i.last_flush = -1;
      return yt;
    }
  }
  if (e !== Bt) {
    return yt;
  } else if (i.wrap <= 0) {
    return jr;
  } else {
    if (i.wrap === 2) {
      tt(i, t.adler & 255);
      tt(i, t.adler >> 8 & 255);
      tt(i, t.adler >> 16 & 255);
      tt(i, t.adler >> 24 & 255);
      tt(i, t.total_in & 255);
      tt(i, t.total_in >> 8 & 255);
      tt(i, t.total_in >> 16 & 255);
      tt(i, t.total_in >> 24 & 255);
    } else {
      ui(i, t.adler >>> 16);
      ui(i, t.adler & 65535);
    }
    Ct(t);
    if (i.wrap > 0) {
      i.wrap = -i.wrap;
    }
    if (i.pending !== 0) {
      return yt;
    } else {
      return jr;
    }
  }
};
const gf = t => {
  if (ji(t)) {
    return qt;
  }
  const e = t.state.status;
  t.state = null;
  if (e === Oe) {
    return Ce(t, Uh);
  } else {
    return yt;
  }
};
const pf = (t, e) => {
  let i = e.length;
  if (ji(t)) {
    return qt;
  }
  const n = t.state;
  const s = n.wrap;
  if (s === 2 || s === 1 && n.status !== ii || n.lookahead) {
    return qt;
  }
  if (s === 1) {
    t.adler = Ii(t.adler, e, i, 0);
  }
  n.wrap = 0;
  if (i >= n.w_size) {
    if (s === 0) {
      ue(n.head);
      n.strstart = 0;
      n.block_start = 0;
      n.insert = 0;
    }
    let c = new Uint8Array(n.w_size);
    c.set(e.subarray(i - n.w_size, i), 0);
    e = c;
    i = n.w_size;
  }
  const r = t.avail_in;
  const o = t.next_in;
  const a = t.input;
  t.avail_in = i;
  t.next_in = 0;
  t.input = e;
  ni(n);
  while (n.lookahead >= q) {
    let c = n.strstart;
    let l = n.lookahead - (q - 1);
    do {
      n.ins_h = be(n, n.ins_h, n.window[c + q - 1]);
      n.prev[c & n.w_mask] = n.head[n.ins_h];
      n.head[n.ins_h] = c;
      c++;
    } while (--l);
    n.strstart = c;
    n.lookahead = q - 1;
    ni(n);
  }
  n.strstart += n.lookahead;
  n.block_start = n.strstart;
  n.insert = n.lookahead;
  n.lookahead = 0;
  n.match_length = n.prev_length = q - 1;
  n.match_available = 0;
  t.next_in = o;
  t.input = a;
  t.avail_in = r;
  n.wrap = s;
  return yt;
};
var _f = uf;
var mf = bl;
var xf = xl;
var bf = ml;
var yf = ff;
var wf = df;
var vf = gf;
var kf = pf;
var Sf = "pako deflate (from Nodeca project)";
var Ei = {
  deflateInit: _f,
  deflateInit2: mf,
  deflateReset: xf,
  deflateResetKeep: bf,
  deflateSetHeader: yf,
  deflate: wf,
  deflateEnd: vf,
  deflateSetDictionary: kf,
  deflateInfo: Sf
};
const Ef = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
function Af(t) {
  const e = Array.prototype.slice.call(arguments, 1);
  while (e.length) {
    const i = e.shift();
    if (i) {
      if (typeof i != "object") {
        throw new TypeError(i + "must be non-object");
      }
      for (const n in i) {
        if (Ef(i, n)) {
          t[n] = i[n];
        }
      }
    }
  }
  return t;
}
var Mf = t => {
  let e = 0;
  for (let n = 0, s = t.length; n < s; n++) {
    e += t[n].length;
  }
  const i = new Uint8Array(e);
  for (let n = 0, s = 0, r = t.length; n < r; n++) {
    let o = t[n];
    i.set(o, s);
    s += o.length;
  }
  return i;
};
var Kn = {
  assign: Af,
  flattenChunks: Mf
};
let yl = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  yl = false;
}
const Pi = new Uint8Array(256);
for (let t = 0; t < 256; t++) {
  Pi[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
}
Pi[254] = Pi[254] = 1;
var Df = t => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(t);
  }
  let e;
  let i;
  let n;
  let s;
  let r;
  let o = t.length;
  let a = 0;
  for (s = 0; s < o; s++) {
    i = t.charCodeAt(s);
    if ((i & 64512) === 55296 && s + 1 < o) {
      n = t.charCodeAt(s + 1);
      if ((n & 64512) === 56320) {
        i = 65536 + (i - 55296 << 10) + (n - 56320);
        s++;
      }
    }
    a += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
  }
  e = new Uint8Array(a);
  r = 0;
  s = 0;
  for (; r < a; s++) {
    i = t.charCodeAt(s);
    if ((i & 64512) === 55296 && s + 1 < o) {
      n = t.charCodeAt(s + 1);
      if ((n & 64512) === 56320) {
        i = 65536 + (i - 55296 << 10) + (n - 56320);
        s++;
      }
    }
    if (i < 128) {
      e[r++] = i;
    } else if (i < 2048) {
      e[r++] = i >>> 6 | 192;
      e[r++] = i & 63 | 128;
    } else if (i < 65536) {
      e[r++] = i >>> 12 | 224;
      e[r++] = i >>> 6 & 63 | 128;
      e[r++] = i & 63 | 128;
    } else {
      e[r++] = i >>> 18 | 240;
      e[r++] = i >>> 12 & 63 | 128;
      e[r++] = i >>> 6 & 63 | 128;
      e[r++] = i & 63 | 128;
    }
  }
  return e;
};
const Tf = (t, e) => {
  if (e < 65534 && t.subarray && yl) {
    return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
  }
  let i = "";
  for (let n = 0; n < e; n++) {
    i += String.fromCharCode(t[n]);
  }
  return i;
};
var Of = (t, e) => {
  const i = e || t.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(t.subarray(0, e));
  }
  let n;
  let s;
  const r = new Array(i * 2);
  s = 0;
  n = 0;
  while (n < i) {
    let o = t[n++];
    if (o < 128) {
      r[s++] = o;
      continue;
    }
    let a = Pi[o];
    if (a > 4) {
      r[s++] = 65533;
      n += a - 1;
      continue;
    }
    for (o &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && n < i;) {
      o = o << 6 | t[n++] & 63;
      a--;
    }
    if (a > 1) {
      r[s++] = 65533;
      continue;
    }
    if (o < 65536) {
      r[s++] = o;
    } else {
      o -= 65536;
      r[s++] = o >> 10 & 1023 | 55296;
      r[s++] = o & 1023 | 56320;
    }
  }
  return Tf(r, s);
};
var Cf = (t, e) => {
  e = e || t.length;
  if (e > t.length) {
    e = t.length;
  }
  let i = e - 1;
  while (i >= 0 && (t[i] & 192) === 128) {
    i--;
  }
  if (i < 0 || i === 0) {
    return e;
  } else if (i + Pi[t[i]] > e) {
    return i;
  } else {
    return e;
  }
};
var zi = {
  string2buf: Df,
  buf2string: Of,
  utf8border: Cf
};
function Ff() {
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
var wl = Ff;
const vl = Object.prototype.toString;
const {
  Z_NO_FLUSH: Lf,
  Z_SYNC_FLUSH: Rf,
  Z_FULL_FLUSH: If,
  Z_FINISH: Pf,
  Z_OK: In,
  Z_STREAM_END: zf,
  Z_DEFAULT_COMPRESSION: Bf,
  Z_DEFAULT_STRATEGY: Nf,
  Z_DEFLATED: Uf
} = ai;
function Zi(t) {
  this.options = Kn.assign({
    level: Bf,
    method: Uf,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Nf
  }, t || {});
  let e = this.options;
  if (e.raw && e.windowBits > 0) {
    e.windowBits = -e.windowBits;
  } else if (e.gzip && e.windowBits > 0 && e.windowBits < 16) {
    e.windowBits += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new wl();
  this.strm.avail_out = 0;
  let i = Ei.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
  if (i !== In) {
    throw new Error(Pe[i]);
  }
  if (e.header) {
    Ei.deflateSetHeader(this.strm, e.header);
  }
  if (e.dictionary) {
    let n;
    if (typeof e.dictionary == "string") {
      n = zi.string2buf(e.dictionary);
    } else if (vl.call(e.dictionary) === "[object ArrayBuffer]") {
      n = new Uint8Array(e.dictionary);
    } else {
      n = e.dictionary;
    }
    i = Ei.deflateSetDictionary(this.strm, n);
    if (i !== In) {
      throw new Error(Pe[i]);
    }
    this._dict_set = true;
  }
}
Zi.prototype.push = function (t, e) {
  const i = this.strm;
  const n = this.options.chunkSize;
  let s;
  let r;
  if (this.ended) {
    return false;
  }
  if (e === ~~e) {
    r = e;
  } else {
    r = e === true ? Pf : Lf;
  }
  if (typeof t == "string") {
    i.input = zi.string2buf(t);
  } else if (vl.call(t) === "[object ArrayBuffer]") {
    i.input = new Uint8Array(t);
  } else {
    i.input = t;
  }
  i.next_in = 0;
  i.avail_in = i.input.length;
  while (true) {
    if (i.avail_out === 0) {
      i.output = new Uint8Array(n);
      i.next_out = 0;
      i.avail_out = n;
    }
    if ((r === Rf || r === If) && i.avail_out <= 6) {
      this.onData(i.output.subarray(0, i.next_out));
      i.avail_out = 0;
      continue;
    }
    s = Ei.deflate(i, r);
    if (s === zf) {
      if (i.next_out > 0) {
        this.onData(i.output.subarray(0, i.next_out));
      }
      s = Ei.deflateEnd(this.strm);
      this.onEnd(s);
      this.ended = true;
      return s === In;
    }
    if (i.avail_out === 0) {
      this.onData(i.output);
      continue;
    }
    if (r > 0 && i.next_out > 0) {
      this.onData(i.output.subarray(0, i.next_out));
      i.avail_out = 0;
      continue;
    }
    if (i.avail_in === 0) {
      break;
    }
  }
  return true;
};
Zi.prototype.onData = function (t) {
  this.chunks.push(t);
};
Zi.prototype.onEnd = function (t) {
  if (t === In) {
    this.result = Kn.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = t;
  this.msg = this.strm.msg;
};
function lr(t, e) {
  const i = new Zi(e);
  i.push(t, true);
  if (i.err) {
    throw i.msg || Pe[i.err];
  }
  return i.result;
}
function Hf(t, e) {
  e = e || {};
  e.raw = true;
  return lr(t, e);
}
function $f(t, e) {
  e = e || {};
  e.gzip = true;
  return lr(t, e);
}
var Vf = Zi;
var Wf = lr;
var jf = Hf;
var Zf = $f;
var Yf = ai;
var Kf = {
  Deflate: Vf,
  deflate: Wf,
  deflateRaw: jf,
  gzip: Zf,
  constants: Yf
};
const sn = 16209;
const Xf = 16191;
function Gf(e, i) {
  let n;
  let s;
  let r;
  let o;
  let a;
  let c;
  let l;
  let h;
  let d;
  let g;
  let p;
  let b;
  let y;
  let k;
  let E;
  let D;
  let z;
  let M;
  let R;
  let V;
  let I;
  let W;
  let j;
  let B;
  const $ = e.state;
  n = e.next_in;
  j = e.input;
  s = n + (e.avail_in - 5);
  r = e.next_out;
  B = e.output;
  o = r - (i - e.avail_out);
  a = r + (e.avail_out - 257);
  c = $.dmax;
  l = $.wsize;
  h = $.whave;
  d = $.wnext;
  g = $.window;
  p = $.hold;
  b = $.bits;
  y = $.lencode;
  k = $.distcode;
  E = (1 << $.lenbits) - 1;
  D = (1 << $.distbits) - 1;
  t: do {
    if (b < 15) {
      p += j[n++] << b;
      b += 8;
      p += j[n++] << b;
      b += 8;
    }
    z = y[p & E];
    e: while (true) {
      M = z >>> 24;
      p >>>= M;
      b -= M;
      M = z >>> 16 & 255;
      if (M === 0) {
        B[r++] = z & 65535;
      } else if (M & 16) {
        R = z & 65535;
        M &= 15;
        if (M) {
          if (b < M) {
            p += j[n++] << b;
            b += 8;
          }
          R += p & (1 << M) - 1;
          p >>>= M;
          b -= M;
        }
        if (b < 15) {
          p += j[n++] << b;
          b += 8;
          p += j[n++] << b;
          b += 8;
        }
        z = k[p & D];
        i: while (true) {
          M = z >>> 24;
          p >>>= M;
          b -= M;
          M = z >>> 16 & 255;
          if (M & 16) {
            V = z & 65535;
            M &= 15;
            if (b < M) {
              p += j[n++] << b;
              b += 8;
              if (b < M) {
                p += j[n++] << b;
                b += 8;
              }
            }
            V += p & (1 << M) - 1;
            if (V > c) {
              e.msg = "invalid distance too far back";
              $.mode = sn;
              break t;
            }
            p >>>= M;
            b -= M;
            M = r - o;
            if (V > M) {
              M = V - M;
              if (M > h && $.sane) {
                e.msg = "invalid distance too far back";
                $.mode = sn;
                break t;
              }
              I = 0;
              W = g;
              if (d === 0) {
                I += l - M;
                if (M < R) {
                  R -= M;
                  do {
                    B[r++] = g[I++];
                  } while (--M);
                  I = r - V;
                  W = B;
                }
              } else if (d < M) {
                I += l + d - M;
                M -= d;
                if (M < R) {
                  R -= M;
                  do {
                    B[r++] = g[I++];
                  } while (--M);
                  I = 0;
                  if (d < R) {
                    M = d;
                    R -= M;
                    do {
                      B[r++] = g[I++];
                    } while (--M);
                    I = r - V;
                    W = B;
                  }
                }
              } else {
                I += d - M;
                if (M < R) {
                  R -= M;
                  do {
                    B[r++] = g[I++];
                  } while (--M);
                  I = r - V;
                  W = B;
                }
              }
              while (R > 2) {
                B[r++] = W[I++];
                B[r++] = W[I++];
                B[r++] = W[I++];
                R -= 3;
              }
              if (R) {
                B[r++] = W[I++];
                if (R > 1) {
                  B[r++] = W[I++];
                }
              }
            } else {
              I = r - V;
              do {
                B[r++] = B[I++];
                B[r++] = B[I++];
                B[r++] = B[I++];
                R -= 3;
              } while (R > 2);
              if (R) {
                B[r++] = B[I++];
                if (R > 1) {
                  B[r++] = B[I++];
                }
              }
            }
          } else if (M & 64) {
            e.msg = "invalid distance code";
            $.mode = sn;
            break t;
          } else {
            z = k[(z & 65535) + (p & (1 << M) - 1)];
            continue i;
          }
          break;
        }
      } else if (M & 64) {
        if (M & 32) {
          $.mode = Xf;
          break t;
        } else {
          e.msg = "invalid literal/length code";
          $.mode = sn;
          break t;
        }
      } else {
        z = y[(z & 65535) + (p & (1 << M) - 1)];
        continue e;
      }
      break;
    }
  } while (n < s && r < a);
  R = b >> 3;
  n -= R;
  b -= R << 3;
  p &= (1 << b) - 1;
  e.next_in = n;
  e.next_out = r;
  e.avail_in = n < s ? 5 + (s - n) : 5 - (n - s);
  e.avail_out = r < a ? 257 + (a - r) : 257 - (r - a);
  $.hold = p;
  $.bits = b;
}
const Ze = 15;
const Yr = 852;
const Kr = 592;
const Xr = 0;
const hs = 1;
const Gr = 2;
const qf = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
const Qf = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
const Jf = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
const tu = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
const eu = (t, e, i, n, s, r, o, a) => {
  const c = a.bits;
  let l = 0;
  let h = 0;
  let d = 0;
  let g = 0;
  let p = 0;
  let b = 0;
  let y = 0;
  let k = 0;
  let E = 0;
  let D = 0;
  let z;
  let M;
  let R;
  let V;
  let I;
  let W = null;
  let j;
  const B = new Uint16Array(Ze + 1);
  const $ = new Uint16Array(Ze + 1);
  let X = null;
  let ft;
  let gt;
  let J;
  for (l = 0; l <= Ze; l++) {
    B[l] = 0;
  }
  for (h = 0; h < n; h++) {
    B[e[i + h]]++;
  }
  p = c;
  g = Ze;
  for (; g >= 1 && B[g] === 0; g--);
  if (p > g) {
    p = g;
  }
  if (g === 0) {
    s[r++] = 20971520;
    s[r++] = 20971520;
    a.bits = 1;
    return 0;
  }
  for (d = 1; d < g && B[d] === 0; d++);
  if (p < d) {
    p = d;
  }
  k = 1;
  l = 1;
  for (; l <= Ze; l++) {
    k <<= 1;
    k -= B[l];
    if (k < 0) {
      return -1;
    }
  }
  if (k > 0 && (t === Xr || g !== 1)) {
    return -1;
  }
  $[1] = 0;
  l = 1;
  for (; l < Ze; l++) {
    $[l + 1] = $[l] + B[l];
  }
  for (h = 0; h < n; h++) {
    if (e[i + h] !== 0) {
      o[$[e[i + h]]++] = h;
    }
  }
  if (t === Xr) {
    W = X = o;
    j = 20;
  } else if (t === hs) {
    W = qf;
    X = Qf;
    j = 257;
  } else {
    W = Jf;
    X = tu;
    j = 0;
  }
  D = 0;
  h = 0;
  l = d;
  I = r;
  b = p;
  y = 0;
  R = -1;
  E = 1 << p;
  V = E - 1;
  if (t === hs && E > Yr || t === Gr && E > Kr) {
    return 1;
  }
  while (true) {
    ft = l - y;
    if (o[h] + 1 < j) {
      gt = 0;
      J = o[h];
    } else if (o[h] >= j) {
      gt = X[o[h] - j];
      J = W[o[h] - j];
    } else {
      gt = 96;
      J = 0;
    }
    z = 1 << l - y;
    M = 1 << b;
    d = M;
    do {
      M -= z;
      s[I + (D >> y) + M] = ft << 24 | gt << 16 | J | 0;
    } while (M !== 0);
    for (z = 1 << l - 1; D & z;) {
      z >>= 1;
    }
    if (z !== 0) {
      D &= z - 1;
      D += z;
    } else {
      D = 0;
    }
    h++;
    if (--B[l] === 0) {
      if (l === g) {
        break;
      }
      l = e[i + o[h]];
    }
    if (l > p && (D & V) !== R) {
      if (y === 0) {
        y = p;
      }
      I += d;
      b = l - y;
      k = 1 << b;
      while (b + y < g && (k -= B[b + y], !(k <= 0))) {
        b++;
        k <<= 1;
      }
      E += 1 << b;
      if (t === hs && E > Yr || t === Gr && E > Kr) {
        return 1;
      }
      R = D & V;
      s[R] = p << 24 | b << 16 | I - r | 0;
    }
  }
  if (D !== 0) {
    s[I + D] = l - y << 24 | 4194304 | 0;
  }
  a.bits = p;
  return 0;
};
var Ai = eu;
const iu = 0;
const kl = 1;
const Sl = 2;
const {
  Z_FINISH: qr,
  Z_BLOCK: nu,
  Z_TREES: rn,
  Z_OK: Be,
  Z_STREAM_END: su,
  Z_NEED_DICT: ru,
  Z_STREAM_ERROR: Ht,
  Z_DATA_ERROR: El,
  Z_MEM_ERROR: Al,
  Z_BUF_ERROR: ou,
  Z_DEFLATED: Qr
} = ai;
const Xn = 16180;
const Jr = 16181;
const to = 16182;
const eo = 16183;
const io = 16184;
const no = 16185;
const so = 16186;
const ro = 16187;
const oo = 16188;
const ao = 16189;
const Pn = 16190;
const ie = 16191;
const fs = 16192;
const lo = 16193;
const us = 16194;
const co = 16195;
const ho = 16196;
const fo = 16197;
const uo = 16198;
const on = 16199;
const an = 16200;
const go = 16201;
const po = 16202;
const _o = 16203;
const mo = 16204;
const xo = 16205;
const ds = 16206;
const bo = 16207;
const yo = 16208;
const ot = 16209;
const Ml = 16210;
const Dl = 16211;
const au = 852;
const lu = 592;
const cu = 15;
const hu = cu;
const wo = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((t & 65280) << 8) + ((t & 255) << 24);
function fu() {
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
const $e = t => {
  if (!t) {
    return 1;
  }
  const e = t.state;
  if (!e || e.strm !== t || e.mode < Xn || e.mode > Dl) {
    return 1;
  } else {
    return 0;
  }
};
const Tl = t => {
  if ($e(t)) {
    return Ht;
  }
  const e = t.state;
  t.total_in = t.total_out = e.total = 0;
  t.msg = "";
  if (e.wrap) {
    t.adler = e.wrap & 1;
  }
  e.mode = Xn;
  e.last = 0;
  e.havedict = 0;
  e.flags = -1;
  e.dmax = 32768;
  e.head = null;
  e.hold = 0;
  e.bits = 0;
  e.lencode = e.lendyn = new Int32Array(au);
  e.distcode = e.distdyn = new Int32Array(lu);
  e.sane = 1;
  e.back = -1;
  return Be;
};
const Ol = t => {
  if ($e(t)) {
    return Ht;
  }
  const e = t.state;
  e.wsize = 0;
  e.whave = 0;
  e.wnext = 0;
  return Tl(t);
};
const Cl = (t, e) => {
  let i;
  if ($e(t)) {
    return Ht;
  }
  const n = t.state;
  if (e < 0) {
    i = 0;
    e = -e;
  } else {
    i = (e >> 4) + 5;
    if (e < 48) {
      e &= 15;
    }
  }
  if (e && (e < 8 || e > 15)) {
    return Ht;
  } else {
    if (n.window !== null && n.wbits !== e) {
      n.window = null;
    }
    n.wrap = i;
    n.wbits = e;
    return Ol(t);
  }
};
const Fl = (t, e) => {
  if (!t) {
    return Ht;
  }
  const i = new fu();
  t.state = i;
  i.strm = t;
  i.window = null;
  i.mode = Xn;
  const n = Cl(t, e);
  if (n !== Be) {
    t.state = null;
  }
  return n;
};
const uu = t => Fl(t, hu);
let vo = true;
let gs;
let ps;
const du = t => {
  if (vo) {
    gs = new Int32Array(512);
    ps = new Int32Array(32);
    let e = 0;
    while (e < 144) {
      t.lens[e++] = 8;
    }
    while (e < 256) {
      t.lens[e++] = 9;
    }
    while (e < 280) {
      t.lens[e++] = 7;
    }
    while (e < 288) {
      t.lens[e++] = 8;
    }
    Ai(kl, t.lens, 0, 288, gs, 0, t.work, {
      bits: 9
    });
    e = 0;
    while (e < 32) {
      t.lens[e++] = 5;
    }
    Ai(Sl, t.lens, 0, 32, ps, 0, t.work, {
      bits: 5
    });
    vo = false;
  }
  t.lencode = gs;
  t.lenbits = 9;
  t.distcode = ps;
  t.distbits = 5;
};
const Ll = (t, e, i, n) => {
  let s;
  const r = t.state;
  if (r.window === null) {
    r.wsize = 1 << r.wbits;
    r.wnext = 0;
    r.whave = 0;
    r.window = new Uint8Array(r.wsize);
  }
  if (n >= r.wsize) {
    r.window.set(e.subarray(i - r.wsize, i), 0);
    r.wnext = 0;
    r.whave = r.wsize;
  } else {
    s = r.wsize - r.wnext;
    if (s > n) {
      s = n;
    }
    r.window.set(e.subarray(i - n, i - n + s), r.wnext);
    n -= s;
    if (n) {
      r.window.set(e.subarray(i - n, i), 0);
      r.wnext = n;
      r.whave = r.wsize;
    } else {
      r.wnext += s;
      if (r.wnext === r.wsize) {
        r.wnext = 0;
      }
      if (r.whave < r.wsize) {
        r.whave += s;
      }
    }
  }
  return 0;
};
const gu = (t, e) => {
  let i;
  let n;
  let s;
  let r;
  let o;
  let a;
  let c;
  let l;
  let h;
  let d;
  let g;
  let p;
  let b;
  let y;
  let k = 0;
  let E;
  let D;
  let z;
  let M;
  let R;
  let V;
  let I;
  let W;
  const j = new Uint8Array(4);
  let B;
  let $;
  const X = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  if ($e(t) || !t.output || !t.input && t.avail_in !== 0) {
    return Ht;
  }
  i = t.state;
  if (i.mode === ie) {
    i.mode = fs;
  }
  o = t.next_out;
  s = t.output;
  c = t.avail_out;
  r = t.next_in;
  n = t.input;
  a = t.avail_in;
  l = i.hold;
  h = i.bits;
  d = a;
  g = c;
  W = Be;
  t: while (true) {
    switch (i.mode) {
      case Xn:
        if (i.wrap === 0) {
          i.mode = fs;
          break;
        }
        while (h < 16) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        if (i.wrap & 2 && l === 35615) {
          if (i.wbits === 0) {
            i.wbits = 15;
          }
          i.check = 0;
          j[0] = l & 255;
          j[1] = l >>> 8 & 255;
          i.check = mt(i.check, j, 2, 0);
          l = 0;
          h = 0;
          i.mode = Jr;
          break;
        }
        if (i.head) {
          i.head.done = false;
        }
        if (!(i.wrap & 1) || (((l & 255) << 8) + (l >> 8)) % 31) {
          t.msg = "incorrect header check";
          i.mode = ot;
          break;
        }
        if ((l & 15) !== Qr) {
          t.msg = "unknown compression method";
          i.mode = ot;
          break;
        }
        l >>>= 4;
        h -= 4;
        I = (l & 15) + 8;
        if (i.wbits === 0) {
          i.wbits = I;
        }
        if (I > 15 || I > i.wbits) {
          t.msg = "invalid window size";
          i.mode = ot;
          break;
        }
        i.dmax = 1 << i.wbits;
        i.flags = 0;
        t.adler = i.check = 1;
        i.mode = l & 512 ? ao : ie;
        l = 0;
        h = 0;
        break;
      case Jr:
        while (h < 16) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        i.flags = l;
        if ((i.flags & 255) !== Qr) {
          t.msg = "unknown compression method";
          i.mode = ot;
          break;
        }
        if (i.flags & 57344) {
          t.msg = "unknown header flags set";
          i.mode = ot;
          break;
        }
        if (i.head) {
          i.head.text = l >> 8 & 1;
        }
        if (i.flags & 512 && i.wrap & 4) {
          j[0] = l & 255;
          j[1] = l >>> 8 & 255;
          i.check = mt(i.check, j, 2, 0);
        }
        l = 0;
        h = 0;
        i.mode = to;
      case to:
        while (h < 32) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        if (i.head) {
          i.head.time = l;
        }
        if (i.flags & 512 && i.wrap & 4) {
          j[0] = l & 255;
          j[1] = l >>> 8 & 255;
          j[2] = l >>> 16 & 255;
          j[3] = l >>> 24 & 255;
          i.check = mt(i.check, j, 4, 0);
        }
        l = 0;
        h = 0;
        i.mode = eo;
      case eo:
        while (h < 16) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        if (i.head) {
          i.head.xflags = l & 255;
          i.head.os = l >> 8;
        }
        if (i.flags & 512 && i.wrap & 4) {
          j[0] = l & 255;
          j[1] = l >>> 8 & 255;
          i.check = mt(i.check, j, 2, 0);
        }
        l = 0;
        h = 0;
        i.mode = io;
      case io:
        if (i.flags & 1024) {
          while (h < 16) {
            if (a === 0) {
              break t;
            }
            a--;
            l += n[r++] << h;
            h += 8;
          }
          i.length = l;
          if (i.head) {
            i.head.extra_len = l;
          }
          if (i.flags & 512 && i.wrap & 4) {
            j[0] = l & 255;
            j[1] = l >>> 8 & 255;
            i.check = mt(i.check, j, 2, 0);
          }
          l = 0;
          h = 0;
        } else if (i.head) {
          i.head.extra = null;
        }
        i.mode = no;
      case no:
        if (i.flags & 1024 && (p = i.length, p > a && (p = a), p && (i.head && (I = i.head.extra_len - i.length, i.head.extra ||= new Uint8Array(i.head.extra_len), i.head.extra.set(n.subarray(r, r + p), I)), i.flags & 512 && i.wrap & 4 && (i.check = mt(i.check, n, p, r)), a -= p, r += p, i.length -= p), i.length)) {
          break t;
        }
        i.length = 0;
        i.mode = so;
      case so:
        if (i.flags & 2048) {
          if (a === 0) {
            break t;
          }
          p = 0;
          do {
            I = n[r + p++];
            if (i.head && I && i.length < 65536) {
              i.head.name += String.fromCharCode(I);
            }
          } while (I && p < a);
          if (i.flags & 512 && i.wrap & 4) {
            i.check = mt(i.check, n, p, r);
          }
          a -= p;
          r += p;
          if (I) {
            break t;
          }
        } else if (i.head) {
          i.head.name = null;
        }
        i.length = 0;
        i.mode = ro;
      case ro:
        if (i.flags & 4096) {
          if (a === 0) {
            break t;
          }
          p = 0;
          do {
            I = n[r + p++];
            if (i.head && I && i.length < 65536) {
              i.head.comment += String.fromCharCode(I);
            }
          } while (I && p < a);
          if (i.flags & 512 && i.wrap & 4) {
            i.check = mt(i.check, n, p, r);
          }
          a -= p;
          r += p;
          if (I) {
            break t;
          }
        } else if (i.head) {
          i.head.comment = null;
        }
        i.mode = oo;
      case oo:
        if (i.flags & 512) {
          while (h < 16) {
            if (a === 0) {
              break t;
            }
            a--;
            l += n[r++] << h;
            h += 8;
          }
          if (i.wrap & 4 && l !== (i.check & 65535)) {
            t.msg = "header crc mismatch";
            i.mode = ot;
            break;
          }
          l = 0;
          h = 0;
        }
        if (i.head) {
          i.head.hcrc = i.flags >> 9 & 1;
          i.head.done = true;
        }
        t.adler = i.check = 0;
        i.mode = ie;
        break;
      case ao:
        while (h < 32) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        t.adler = i.check = wo(l);
        l = 0;
        h = 0;
        i.mode = Pn;
      case Pn:
        if (i.havedict === 0) {
          t.next_out = o;
          t.avail_out = c;
          t.next_in = r;
          t.avail_in = a;
          i.hold = l;
          i.bits = h;
          return ru;
        }
        t.adler = i.check = 1;
        i.mode = ie;
      case ie:
        if (e === nu || e === rn) {
          break t;
        }
      case fs:
        if (i.last) {
          l >>>= h & 7;
          h -= h & 7;
          i.mode = ds;
          break;
        }
        while (h < 3) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        i.last = l & 1;
        l >>>= 1;
        h -= 1;
        switch (l & 3) {
          case 0:
            i.mode = lo;
            break;
          case 1:
            du(i);
            i.mode = on;
            if (e === rn) {
              l >>>= 2;
              h -= 2;
              break t;
            }
            break;
          case 2:
            i.mode = ho;
            break;
          case 3:
            t.msg = "invalid block type";
            i.mode = ot;
        }
        l >>>= 2;
        h -= 2;
        break;
      case lo:
        l >>>= h & 7;
        h -= h & 7;
        while (h < 32) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        if ((l & 65535) !== (l >>> 16 ^ 65535)) {
          t.msg = "invalid stored block lengths";
          i.mode = ot;
          break;
        }
        i.length = l & 65535;
        l = 0;
        h = 0;
        i.mode = us;
        if (e === rn) {
          break t;
        }
      case us:
        i.mode = co;
      case co:
        p = i.length;
        if (p) {
          if (p > a) {
            p = a;
          }
          if (p > c) {
            p = c;
          }
          if (p === 0) {
            break t;
          }
          s.set(n.subarray(r, r + p), o);
          a -= p;
          r += p;
          c -= p;
          o += p;
          i.length -= p;
          break;
        }
        i.mode = ie;
        break;
      case ho:
        while (h < 14) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        i.nlen = (l & 31) + 257;
        l >>>= 5;
        h -= 5;
        i.ndist = (l & 31) + 1;
        l >>>= 5;
        h -= 5;
        i.ncode = (l & 15) + 4;
        l >>>= 4;
        h -= 4;
        if (i.nlen > 286 || i.ndist > 30) {
          t.msg = "too many length or distance symbols";
          i.mode = ot;
          break;
        }
        i.have = 0;
        i.mode = fo;
      case fo:
        while (i.have < i.ncode) {
          while (h < 3) {
            if (a === 0) {
              break t;
            }
            a--;
            l += n[r++] << h;
            h += 8;
          }
          i.lens[X[i.have++]] = l & 7;
          l >>>= 3;
          h -= 3;
        }
        while (i.have < 19) {
          i.lens[X[i.have++]] = 0;
        }
        i.lencode = i.lendyn;
        i.lenbits = 7;
        B = {
          bits: i.lenbits
        };
        W = Ai(iu, i.lens, 0, 19, i.lencode, 0, i.work, B);
        i.lenbits = B.bits;
        if (W) {
          t.msg = "invalid code lengths set";
          i.mode = ot;
          break;
        }
        i.have = 0;
        i.mode = uo;
      case uo:
        while (i.have < i.nlen + i.ndist) {
          while (k = i.lencode[l & (1 << i.lenbits) - 1], E = k >>> 24, D = k >>> 16 & 255, z = k & 65535, !(E <= h)) {
            if (a === 0) {
              break t;
            }
            a--;
            l += n[r++] << h;
            h += 8;
          }
          if (z < 16) {
            l >>>= E;
            h -= E;
            i.lens[i.have++] = z;
          } else {
            if (z === 16) {
              for ($ = E + 2; h < $;) {
                if (a === 0) {
                  break t;
                }
                a--;
                l += n[r++] << h;
                h += 8;
              }
              l >>>= E;
              h -= E;
              if (i.have === 0) {
                t.msg = "invalid bit length repeat";
                i.mode = ot;
                break;
              }
              I = i.lens[i.have - 1];
              p = 3 + (l & 3);
              l >>>= 2;
              h -= 2;
            } else if (z === 17) {
              for ($ = E + 3; h < $;) {
                if (a === 0) {
                  break t;
                }
                a--;
                l += n[r++] << h;
                h += 8;
              }
              l >>>= E;
              h -= E;
              I = 0;
              p = 3 + (l & 7);
              l >>>= 3;
              h -= 3;
            } else {
              for ($ = E + 7; h < $;) {
                if (a === 0) {
                  break t;
                }
                a--;
                l += n[r++] << h;
                h += 8;
              }
              l >>>= E;
              h -= E;
              I = 0;
              p = 11 + (l & 127);
              l >>>= 7;
              h -= 7;
            }
            if (i.have + p > i.nlen + i.ndist) {
              t.msg = "invalid bit length repeat";
              i.mode = ot;
              break;
            }
            while (p--) {
              i.lens[i.have++] = I;
            }
          }
        }
        if (i.mode === ot) {
          break;
        }
        if (i.lens[256] === 0) {
          t.msg = "invalid code -- missing end-of-block";
          i.mode = ot;
          break;
        }
        i.lenbits = 9;
        B = {
          bits: i.lenbits
        };
        W = Ai(kl, i.lens, 0, i.nlen, i.lencode, 0, i.work, B);
        i.lenbits = B.bits;
        if (W) {
          t.msg = "invalid literal/lengths set";
          i.mode = ot;
          break;
        }
        i.distbits = 6;
        i.distcode = i.distdyn;
        B = {
          bits: i.distbits
        };
        W = Ai(Sl, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, B);
        i.distbits = B.bits;
        if (W) {
          t.msg = "invalid distances set";
          i.mode = ot;
          break;
        }
        i.mode = on;
        if (e === rn) {
          break t;
        }
      case on:
        i.mode = an;
      case an:
        if (a >= 6 && c >= 258) {
          t.next_out = o;
          t.avail_out = c;
          t.next_in = r;
          t.avail_in = a;
          i.hold = l;
          i.bits = h;
          Gf(t, g);
          o = t.next_out;
          s = t.output;
          c = t.avail_out;
          r = t.next_in;
          n = t.input;
          a = t.avail_in;
          l = i.hold;
          h = i.bits;
          if (i.mode === ie) {
            i.back = -1;
          }
          break;
        }
        for (i.back = 0; k = i.lencode[l & (1 << i.lenbits) - 1], E = k >>> 24, D = k >>> 16 & 255, z = k & 65535, !(E <= h);) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        if (D && !(D & 240)) {
          M = E;
          R = D;
          V = z;
          while (k = i.lencode[V + ((l & (1 << M + R) - 1) >> M)], E = k >>> 24, D = k >>> 16 & 255, z = k & 65535, !(M + E <= h)) {
            if (a === 0) {
              break t;
            }
            a--;
            l += n[r++] << h;
            h += 8;
          }
          l >>>= M;
          h -= M;
          i.back += M;
        }
        l >>>= E;
        h -= E;
        i.back += E;
        i.length = z;
        if (D === 0) {
          i.mode = xo;
          break;
        }
        if (D & 32) {
          i.back = -1;
          i.mode = ie;
          break;
        }
        if (D & 64) {
          t.msg = "invalid literal/length code";
          i.mode = ot;
          break;
        }
        i.extra = D & 15;
        i.mode = go;
      case go:
        if (i.extra) {
          for ($ = i.extra; h < $;) {
            if (a === 0) {
              break t;
            }
            a--;
            l += n[r++] << h;
            h += 8;
          }
          i.length += l & (1 << i.extra) - 1;
          l >>>= i.extra;
          h -= i.extra;
          i.back += i.extra;
        }
        i.was = i.length;
        i.mode = po;
      case po:
        while (k = i.distcode[l & (1 << i.distbits) - 1], E = k >>> 24, D = k >>> 16 & 255, z = k & 65535, !(E <= h)) {
          if (a === 0) {
            break t;
          }
          a--;
          l += n[r++] << h;
          h += 8;
        }
        if (!(D & 240)) {
          M = E;
          R = D;
          V = z;
          while (k = i.distcode[V + ((l & (1 << M + R) - 1) >> M)], E = k >>> 24, D = k >>> 16 & 255, z = k & 65535, !(M + E <= h)) {
            if (a === 0) {
              break t;
            }
            a--;
            l += n[r++] << h;
            h += 8;
          }
          l >>>= M;
          h -= M;
          i.back += M;
        }
        l >>>= E;
        h -= E;
        i.back += E;
        if (D & 64) {
          t.msg = "invalid distance code";
          i.mode = ot;
          break;
        }
        i.offset = z;
        i.extra = D & 15;
        i.mode = _o;
      case _o:
        if (i.extra) {
          for ($ = i.extra; h < $;) {
            if (a === 0) {
              break t;
            }
            a--;
            l += n[r++] << h;
            h += 8;
          }
          i.offset += l & (1 << i.extra) - 1;
          l >>>= i.extra;
          h -= i.extra;
          i.back += i.extra;
        }
        if (i.offset > i.dmax) {
          t.msg = "invalid distance too far back";
          i.mode = ot;
          break;
        }
        i.mode = mo;
      case mo:
        if (c === 0) {
          break t;
        }
        p = g - c;
        if (i.offset > p) {
          p = i.offset - p;
          if (p > i.whave && i.sane) {
            t.msg = "invalid distance too far back";
            i.mode = ot;
            break;
          }
          if (p > i.wnext) {
            p -= i.wnext;
            b = i.wsize - p;
          } else {
            b = i.wnext - p;
          }
          if (p > i.length) {
            p = i.length;
          }
          y = i.window;
        } else {
          y = s;
          b = o - i.offset;
          p = i.length;
        }
        if (p > c) {
          p = c;
        }
        c -= p;
        i.length -= p;
        do {
          s[o++] = y[b++];
        } while (--p);
        if (i.length === 0) {
          i.mode = an;
        }
        break;
      case xo:
        if (c === 0) {
          break t;
        }
        s[o++] = i.length;
        c--;
        i.mode = an;
        break;
      case ds:
        if (i.wrap) {
          while (h < 32) {
            if (a === 0) {
              break t;
            }
            a--;
            l |= n[r++] << h;
            h += 8;
          }
          g -= c;
          t.total_out += g;
          i.total += g;
          if (i.wrap & 4 && g) {
            t.adler = i.check = i.flags ? mt(i.check, s, g, o - g) : Ii(i.check, s, g, o - g);
          }
          g = c;
          if (i.wrap & 4 && (i.flags ? l : wo(l)) !== i.check) {
            t.msg = "incorrect data check";
            i.mode = ot;
            break;
          }
          l = 0;
          h = 0;
        }
        i.mode = bo;
      case bo:
        if (i.wrap && i.flags) {
          while (h < 32) {
            if (a === 0) {
              break t;
            }
            a--;
            l += n[r++] << h;
            h += 8;
          }
          if (i.wrap & 4 && l !== (i.total & -1)) {
            t.msg = "incorrect length check";
            i.mode = ot;
            break;
          }
          l = 0;
          h = 0;
        }
        i.mode = yo;
      case yo:
        W = su;
        break t;
      case ot:
        W = El;
        break t;
      case Ml:
        return Al;
      case Dl:
      default:
        return Ht;
    }
  }
  t.next_out = o;
  t.avail_out = c;
  t.next_in = r;
  t.avail_in = a;
  i.hold = l;
  i.bits = h;
  if (i.wsize || g !== t.avail_out && i.mode < ot && (i.mode < ds || e !== qr)) {
    Ll(t, t.output, t.next_out, g - t.avail_out);
  }
  d -= t.avail_in;
  g -= t.avail_out;
  t.total_in += d;
  t.total_out += g;
  i.total += g;
  if (i.wrap & 4 && g) {
    t.adler = i.check = i.flags ? mt(i.check, s, g, t.next_out - g) : Ii(i.check, s, g, t.next_out - g);
  }
  t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === ie ? 128 : 0) + (i.mode === on || i.mode === us ? 256 : 0);
  if ((d === 0 && g === 0 || e === qr) && W === Be) {
    W = ou;
  }
  return W;
};
const pu = t => {
  if ($e(t)) {
    return Ht;
  }
  let e = t.state;
  e.window &&= null;
  t.state = null;
  return Be;
};
const _u = (t, e) => {
  if ($e(t)) {
    return Ht;
  }
  const i = t.state;
  if (i.wrap & 2) {
    i.head = e;
    e.done = false;
    return Be;
  } else {
    return Ht;
  }
};
const mu = (t, e) => {
  const i = e.length;
  let n;
  let s;
  let r;
  if ($e(t) || (n = t.state, n.wrap !== 0 && n.mode !== Pn)) {
    return Ht;
  } else if (n.mode === Pn && (s = 1, s = Ii(s, e, i, 0), s !== n.check)) {
    return El;
  } else {
    r = Ll(t, e, i, i);
    if (r) {
      n.mode = Ml;
      return Al;
    } else {
      n.havedict = 1;
      return Be;
    }
  }
};
var xu = Ol;
var bu = Cl;
var yu = Tl;
var wu = uu;
var vu = Fl;
var ku = gu;
var Su = pu;
var Eu = _u;
var Au = mu;
var Mu = "pako inflate (from Nodeca project)";
var re = {
  inflateReset: xu,
  inflateReset2: bu,
  inflateResetKeep: yu,
  inflateInit: wu,
  inflateInit2: vu,
  inflate: ku,
  inflateEnd: Su,
  inflateGetHeader: Eu,
  inflateSetDictionary: Au,
  inflateInfo: Mu
};
function Du() {
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
var Tu = Du;
const Rl = Object.prototype.toString;
const {
  Z_NO_FLUSH: Ou,
  Z_FINISH: Cu,
  Z_OK: Bi,
  Z_STREAM_END: _s,
  Z_NEED_DICT: ms,
  Z_STREAM_ERROR: Fu,
  Z_DATA_ERROR: ko,
  Z_MEM_ERROR: Lu
} = ai;
function Yi(t) {
  this.options = Kn.assign({
    chunkSize: 65536,
    windowBits: 15,
    to: ""
  }, t || {});
  const e = this.options;
  if (e.raw && e.windowBits >= 0 && e.windowBits < 16) {
    e.windowBits = -e.windowBits;
    if (e.windowBits === 0) {
      e.windowBits = -15;
    }
  }
  if (e.windowBits >= 0 && e.windowBits < 16 && (!t || !t.windowBits)) {
    e.windowBits += 32;
  }
  if (e.windowBits > 15 && e.windowBits < 48) {
    if (!(e.windowBits & 15)) {
      e.windowBits |= 15;
    }
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new wl();
  this.strm.avail_out = 0;
  let i = re.inflateInit2(this.strm, e.windowBits);
  if (i !== Bi) {
    throw new Error(Pe[i]);
  }
  this.header = new Tu();
  re.inflateGetHeader(this.strm, this.header);
  if (e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = zi.string2buf(e.dictionary) : Rl.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (i = re.inflateSetDictionary(this.strm, e.dictionary), i !== Bi))) {
    throw new Error(Pe[i]);
  }
}
Yi.prototype.push = function (t, e) {
  const i = this.strm;
  const n = this.options.chunkSize;
  const s = this.options.dictionary;
  let r;
  let o;
  let a;
  if (this.ended) {
    return false;
  }
  if (e === ~~e) {
    o = e;
  } else {
    o = e === true ? Cu : Ou;
  }
  if (Rl.call(t) === "[object ArrayBuffer]") {
    i.input = new Uint8Array(t);
  } else {
    i.input = t;
  }
  i.next_in = 0;
  i.avail_in = i.input.length;
  while (true) {
    if (i.avail_out === 0) {
      i.output = new Uint8Array(n);
      i.next_out = 0;
      i.avail_out = n;
    }
    r = re.inflate(i, o);
    if (r === ms && s) {
      r = re.inflateSetDictionary(i, s);
      if (r === Bi) {
        r = re.inflate(i, o);
      } else if (r === ko) {
        r = ms;
      }
    }
    while (i.avail_in > 0 && r === _s && i.state.wrap > 0 && t[i.next_in] !== 0) {
      re.inflateReset(i);
      r = re.inflate(i, o);
    }
    switch (r) {
      case Fu:
      case ko:
      case ms:
      case Lu:
        this.onEnd(r);
        this.ended = true;
        return false;
    }
    a = i.avail_out;
    if (i.next_out && (i.avail_out === 0 || r === _s)) {
      if (this.options.to === "string") {
        let c = zi.utf8border(i.output, i.next_out);
        let l = i.next_out - c;
        let h = zi.buf2string(i.output, c);
        i.next_out = l;
        i.avail_out = n - l;
        if (l) {
          i.output.set(i.output.subarray(c, c + l), 0);
        }
        this.onData(h);
      } else {
        this.onData(i.output.length === i.next_out ? i.output : i.output.subarray(0, i.next_out));
      }
    }
    if (r !== Bi || a !== 0) {
      if (r === _s) {
        r = re.inflateEnd(this.strm);
        this.onEnd(r);
        this.ended = true;
        return true;
      }
      if (i.avail_in === 0) {
        break;
      }
    }
  }
  return true;
};
Yi.prototype.onData = function (t) {
  this.chunks.push(t);
};
Yi.prototype.onEnd = function (t) {
  if (t === Bi) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = Kn.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = t;
  this.msg = this.strm.msg;
};
function cr(t, e) {
  const i = new Yi(e);
  i.push(t);
  if (i.err) {
    throw i.msg || Pe[i.err];
  }
  return i.result;
}
function Ru(t, e) {
  e = e || {};
  e.raw = true;
  return cr(t, e);
}
var Iu = Yi;
var Pu = cr;
var zu = Ru;
var Bu = cr;
var Nu = ai;
var Uu = {
  Inflate: Iu,
  inflate: Pu,
  inflateRaw: zu,
  ungzip: Bu,
  constants: Nu
};
const {
  Deflate: y_,
  deflate: Hu,
  deflateRaw: w_,
  gzip: v_
} = Kf;
const {
  Inflate: k_,
  inflate: $u,
  inflateRaw: S_,
  ungzip: E_
} = Uu;
var A_ = Hu;
var M_ = $u;
var Ws = {};
var Gn = {
  byteLength: ju,
  toByteArray: Yu,
  fromByteArray: Gu
};
var Gt = [];
var zt = [];
var Vu = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var xs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ye = 0, Wu = xs.length; Ye < Wu; ++Ye) {
  Gt[Ye] = xs[Ye];
  zt[xs.charCodeAt(Ye)] = Ye;
}
zt["-".charCodeAt(0)] = 62;
zt["_".charCodeAt(0)] = 63;
function Il(t) {
  var e = t.length;
  if (e % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var i = t.indexOf("=");
  if (i === -1) {
    i = e;
  }
  var n = i === e ? 0 : 4 - i % 4;
  return [i, n];
}
function ju(t) {
  var e = Il(t);
  var i = e[0];
  var n = e[1];
  return (i + n) * 3 / 4 - n;
}
function Zu(t, e, i) {
  return (e + i) * 3 / 4 - i;
}
function Yu(t) {
  var e;
  var i = Il(t);
  var n = i[0];
  var s = i[1];
  var r = new Vu(Zu(t, n, s));
  var o = 0;
  var a = s > 0 ? n - 4 : n;
  var c;
  for (c = 0; c < a; c += 4) {
    e = zt[t.charCodeAt(c)] << 18 | zt[t.charCodeAt(c + 1)] << 12 | zt[t.charCodeAt(c + 2)] << 6 | zt[t.charCodeAt(c + 3)];
    r[o++] = e >> 16 & 255;
    r[o++] = e >> 8 & 255;
    r[o++] = e & 255;
  }
  if (s === 2) {
    e = zt[t.charCodeAt(c)] << 2 | zt[t.charCodeAt(c + 1)] >> 4;
    r[o++] = e & 255;
  }
  if (s === 1) {
    e = zt[t.charCodeAt(c)] << 10 | zt[t.charCodeAt(c + 1)] << 4 | zt[t.charCodeAt(c + 2)] >> 2;
    r[o++] = e >> 8 & 255;
    r[o++] = e & 255;
  }
  return r;
}
function Ku(t) {
  return Gt[t >> 18 & 63] + Gt[t >> 12 & 63] + Gt[t >> 6 & 63] + Gt[t & 63];
}
function Xu(t, e, i) {
  var n;
  var s = [];
  for (var r = e; r < i; r += 3) {
    n = (t[r] << 16 & 16711680) + (t[r + 1] << 8 & 65280) + (t[r + 2] & 255);
    s.push(Ku(n));
  }
  return s.join("");
}
function Gu(t) {
  var e;
  var i = t.length;
  var n = i % 3;
  var s = [];
  for (var r = 16383, o = 0, a = i - n; o < a; o += r) {
    s.push(Xu(t, o, o + r > a ? a : o + r));
  }
  if (n === 1) {
    e = t[i - 1];
    s.push(Gt[e >> 2] + Gt[e << 4 & 63] + "==");
  } else if (n === 2) {
    e = (t[i - 2] << 8) + t[i - 1];
    s.push(Gt[e >> 10] + Gt[e >> 4 & 63] + Gt[e << 2 & 63] + "=");
  }
  return s.join("");
}
var hr = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
hr.read = function (t, e, i, n, s) {
  var r;
  var o;
  var a = s * 8 - n - 1;
  var c = (1 << a) - 1;
  var l = c >> 1;
  var h = -7;
  var d = i ? s - 1 : 0;
  var g = i ? -1 : 1;
  var p = t[e + d];
  d += g;
  r = p & (1 << -h) - 1;
  p >>= -h;
  h += a;
  for (; h > 0; h -= 8) {
    r = r * 256 + t[e + d];
    d += g;
  }
  o = r & (1 << -h) - 1;
  r >>= -h;
  h += n;
  for (; h > 0; h -= 8) {
    o = o * 256 + t[e + d];
    d += g;
  }
  if (r === 0) {
    r = 1 - l;
  } else {
    if (r === c) {
      if (o) {
        return NaN;
      } else {
        return (p ? -1 : 1) * Infinity;
      }
    }
    o = o + Math.pow(2, n);
    r = r - l;
  }
  return (p ? -1 : 1) * o * Math.pow(2, r - n);
};
hr.write = function (t, e, i, n, s, r) {
  var o;
  var a;
  var c;
  var l = r * 8 - s - 1;
  var h = (1 << l) - 1;
  var d = h >> 1;
  var g = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var p = n ? 0 : r - 1;
  var b = n ? 1 : -1;
  var y = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  e = Math.abs(e);
  if (isNaN(e) || e === Infinity) {
    a = isNaN(e) ? 1 : 0;
    o = h;
  } else {
    o = Math.floor(Math.log(e) / Math.LN2);
    if (e * (c = Math.pow(2, -o)) < 1) {
      o--;
      c *= 2;
    }
    if (o + d >= 1) {
      e += g / c;
    } else {
      e += g * Math.pow(2, 1 - d);
    }
    if (e * c >= 2) {
      o++;
      c /= 2;
    }
    if (o + d >= h) {
      a = 0;
      o = h;
    } else if (o + d >= 1) {
      a = (e * c - 1) * Math.pow(2, s);
      o = o + d;
    } else {
      a = e * Math.pow(2, d - 1) * Math.pow(2, s);
      o = 0;
    }
  }
  for (; s >= 8; s -= 8) {
    t[i + p] = a & 255;
    p += b;
    a /= 256;
  }
  o = o << s | a;
  l += s;
  for (; l > 0; l -= 8) {
    t[i + p] = o & 255;
    p += b;
    o /= 256;
  }
  t[i + p - b] |= y * 128;
}; /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
(function (t) {
  var e = Gn;
  var i = hr;
  var n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = a;
  t.SlowBuffer = D;
  t.INSPECT_MAX_BYTES = 50;
  var s = 2147483647;
  t.kMaxLength = s;
  a.TYPED_ARRAY_SUPPORT = r();
  if (!a.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error == "function") {
    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  }
  function r() {
    try {
      var _ = new Uint8Array(1);
      var f = {
        foo: function () {
          return 42;
        }
      };
      Object.setPrototypeOf(f, Uint8Array.prototype);
      Object.setPrototypeOf(_, f);
      return _.foo() === 42;
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
  function o(_) {
    if (_ > s) {
      throw new RangeError("The value \"" + _ + "\" is invalid for option \"size\"");
    }
    var f = new Uint8Array(_);
    Object.setPrototypeOf(f, a.prototype);
    return f;
  }
  function a(_, f, u) {
    if (typeof _ == "number") {
      if (typeof f == "string") {
        throw new TypeError("The \"string\" argument must be of type string. Received type number");
      }
      return d(_);
    }
    return c(_, f, u);
  }
  a.poolSize = 8192;
  function c(_, f, u) {
    if (typeof _ == "string") {
      return g(_, f);
    }
    if (ArrayBuffer.isView(_)) {
      return b(_);
    }
    if (_ == null) {
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _);
    }
    if (H(_, ArrayBuffer) || _ && H(_.buffer, ArrayBuffer) || typeof SharedArrayBuffer !== "undefined" && (H(_, SharedArrayBuffer) || _ && H(_.buffer, SharedArrayBuffer))) {
      return y(_, f, u);
    }
    if (typeof _ == "number") {
      throw new TypeError("The \"value\" argument must not be of type number. Received type number");
    }
    var m = _.valueOf && _.valueOf();
    if (m != null && m !== _) {
      return a.from(m, f, u);
    }
    var v = k(_);
    if (v) {
      return v;
    }
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof _[Symbol.toPrimitive] == "function") {
      return a.from(_[Symbol.toPrimitive]("string"), f, u);
    }
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _);
  }
  a.from = function (_, f, u) {
    return c(_, f, u);
  };
  Object.setPrototypeOf(a.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(a, Uint8Array);
  function l(_) {
    if (typeof _ != "number") {
      throw new TypeError("\"size\" argument must be of type number");
    }
    if (_ < 0) {
      throw new RangeError("The value \"" + _ + "\" is invalid for option \"size\"");
    }
  }
  function h(_, f, u) {
    l(_);
    if (_ <= 0) {
      return o(_);
    } else if (f !== undefined) {
      if (typeof u == "string") {
        return o(_).fill(f, u);
      } else {
        return o(_).fill(f);
      }
    } else {
      return o(_);
    }
  }
  a.alloc = function (_, f, u) {
    return h(_, f, u);
  };
  function d(_) {
    l(_);
    return o(_ < 0 ? 0 : E(_) | 0);
  }
  a.allocUnsafe = function (_) {
    return d(_);
  };
  a.allocUnsafeSlow = function (_) {
    return d(_);
  };
  function g(_, f) {
    if (typeof f != "string" || f === "") {
      f = "utf8";
    }
    if (!a.isEncoding(f)) {
      throw new TypeError("Unknown encoding: " + f);
    }
    var u = z(_, f) | 0;
    var m = o(u);
    var v = m.write(_, f);
    if (v !== u) {
      m = m.slice(0, v);
    }
    return m;
  }
  function p(_) {
    for (var f = _.length < 0 ? 0 : E(_.length) | 0, u = o(f), m = 0; m < f; m += 1) {
      u[m] = _[m] & 255;
    }
    return u;
  }
  function b(_) {
    if (H(_, Uint8Array)) {
      var f = new Uint8Array(_);
      return y(f.buffer, f.byteOffset, f.byteLength);
    }
    return p(_);
  }
  function y(_, f, u) {
    if (f < 0 || _.byteLength < f) {
      throw new RangeError("\"offset\" is outside of buffer bounds");
    }
    if (_.byteLength < f + (u || 0)) {
      throw new RangeError("\"length\" is outside of buffer bounds");
    }
    var m;
    if (f === undefined && u === undefined) {
      m = new Uint8Array(_);
    } else if (u === undefined) {
      m = new Uint8Array(_, f);
    } else {
      m = new Uint8Array(_, f, u);
    }
    Object.setPrototypeOf(m, a.prototype);
    return m;
  }
  function k(_) {
    if (a.isBuffer(_)) {
      var f = E(_.length) | 0;
      var u = o(f);
      if (u.length !== 0) {
        _.copy(u, 0, 0, f);
      }
      return u;
    }
    if (_.length !== undefined) {
      if (typeof _.length != "number" || ee(_.length)) {
        return o(0);
      } else {
        return p(_);
      }
    }
    if (_.type === "Buffer" && Array.isArray(_.data)) {
      return p(_.data);
    }
  }
  function E(_) {
    if (_ >= s) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    }
    return _ | 0;
  }
  function D(_) {
    if (+_ != _) {
      _ = 0;
    }
    return a.alloc(+_);
  }
  a.isBuffer = function (f) {
    return f != null && f._isBuffer === true && f !== a.prototype;
  };
  a.compare = function (f, u) {
    if (H(f, Uint8Array)) {
      f = a.from(f, f.offset, f.byteLength);
    }
    if (H(u, Uint8Array)) {
      u = a.from(u, u.offset, u.byteLength);
    }
    if (!a.isBuffer(f) || !a.isBuffer(u)) {
      throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    }
    if (f === u) {
      return 0;
    }
    var m = f.length;
    var v = u.length;
    for (var T = 0, P = Math.min(m, v); T < P; ++T) {
      if (f[T] !== u[T]) {
        m = f[T];
        v = u[T];
        break;
      }
    }
    if (m < v) {
      return -1;
    } else if (v < m) {
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
  a.concat = function (f, u) {
    if (!Array.isArray(f)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    if (f.length === 0) {
      return a.alloc(0);
    }
    var m;
    if (u === undefined) {
      u = 0;
      m = 0;
      for (; m < f.length; ++m) {
        u += f[m].length;
      }
    }
    var v = a.allocUnsafe(u);
    var T = 0;
    for (m = 0; m < f.length; ++m) {
      var P = f[m];
      if (H(P, Uint8Array)) {
        if (T + P.length > v.length) {
          a.from(P).copy(v, T);
        } else {
          Uint8Array.prototype.set.call(v, P, T);
        }
      } else if (a.isBuffer(P)) {
        P.copy(v, T);
      } else {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      T += P.length;
    }
    return v;
  };
  function z(_, f) {
    if (a.isBuffer(_)) {
      return _.length;
    }
    if (ArrayBuffer.isView(_) || H(_, ArrayBuffer)) {
      return _.byteLength;
    }
    if (typeof _ != "string") {
      throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof _);
    }
    var u = _.length;
    var m = arguments.length > 2 && arguments[2] === true;
    if (!m && u === 0) {
      return 0;
    }
    var v = false;
    for (;;) {
      switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return Z(_).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return F(_).length;
        default:
          if (v) {
            if (m) {
              return -1;
            } else {
              return Z(_).length;
            }
          }
          f = ("" + f).toLowerCase();
          v = true;
      }
    }
  }
  a.byteLength = z;
  function M(_, f, u) {
    var m = false;
    if (f === undefined || f < 0) {
      f = 0;
    }
    if (f > this.length || ((u === undefined || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, f >>>= 0, u <= f)) {
      return "";
    }
    for (_ ||= "utf8";;) {
      switch (_) {
        case "hex":
          return te(this, f, u);
        case "utf8":
        case "utf-8":
          return gt(this, f, u);
        case "ascii":
          return _t(this, f, u);
        case "latin1":
        case "binary":
          return Vt(this, f, u);
        case "base64":
          return ft(this, f, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ot(this, f, u);
        default:
          if (m) {
            throw new TypeError("Unknown encoding: " + _);
          }
          _ = (_ + "").toLowerCase();
          m = true;
      }
    }
  }
  a.prototype._isBuffer = true;
  function R(_, f, u) {
    var m = _[f];
    _[f] = _[u];
    _[u] = m;
  }
  a.prototype.swap16 = function () {
    var f = this.length;
    if (f % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (var u = 0; u < f; u += 2) {
      R(this, u, u + 1);
    }
    return this;
  };
  a.prototype.swap32 = function () {
    var f = this.length;
    if (f % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (var u = 0; u < f; u += 4) {
      R(this, u, u + 3);
      R(this, u + 1, u + 2);
    }
    return this;
  };
  a.prototype.swap64 = function () {
    var f = this.length;
    if (f % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (var u = 0; u < f; u += 8) {
      R(this, u, u + 7);
      R(this, u + 1, u + 6);
      R(this, u + 2, u + 5);
      R(this, u + 3, u + 4);
    }
    return this;
  };
  a.prototype.toString = function () {
    var f = this.length;
    if (f === 0) {
      return "";
    } else if (arguments.length === 0) {
      return gt(this, 0, f);
    } else {
      return M.apply(this, arguments);
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
    var u = t.INSPECT_MAX_BYTES;
    f = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > u) {
      f += " ... ";
    }
    return "<Buffer " + f + ">";
  };
  if (n) {
    a.prototype[n] = a.prototype.inspect;
  }
  a.prototype.compare = function (f, u, m, v, T) {
    if (H(f, Uint8Array)) {
      f = a.from(f, f.offset, f.byteLength);
    }
    if (!a.isBuffer(f)) {
      throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof f);
    }
    if (u === undefined) {
      u = 0;
    }
    if (m === undefined) {
      m = f ? f.length : 0;
    }
    if (v === undefined) {
      v = 0;
    }
    if (T === undefined) {
      T = this.length;
    }
    if (u < 0 || m > f.length || v < 0 || T > this.length) {
      throw new RangeError("out of range index");
    }
    if (v >= T && u >= m) {
      return 0;
    }
    if (v >= T) {
      return -1;
    }
    if (u >= m) {
      return 1;
    }
    u >>>= 0;
    m >>>= 0;
    v >>>= 0;
    T >>>= 0;
    if (this === f) {
      return 0;
    }
    var P = T - v;
    var Y = m - u;
    for (var G = Math.min(P, Y), rt = this.slice(v, T), wt = f.slice(u, m), ct = 0; ct < G; ++ct) {
      if (rt[ct] !== wt[ct]) {
        P = rt[ct];
        Y = wt[ct];
        break;
      }
    }
    if (P < Y) {
      return -1;
    } else if (Y < P) {
      return 1;
    } else {
      return 0;
    }
  };
  function V(_, f, u, m, v) {
    if (_.length === 0) {
      return -1;
    }
    if (typeof u == "string") {
      m = u;
      u = 0;
    } else if (u > 2147483647) {
      u = 2147483647;
    } else if (u < -2147483648) {
      u = -2147483648;
    }
    u = +u;
    if (ee(u)) {
      u = v ? 0 : _.length - 1;
    }
    if (u < 0) {
      u = _.length + u;
    }
    if (u >= _.length) {
      if (v) {
        return -1;
      }
      u = _.length - 1;
    } else if (u < 0) {
      if (v) {
        u = 0;
      } else {
        return -1;
      }
    }
    if (typeof f == "string") {
      f = a.from(f, m);
    }
    if (a.isBuffer(f)) {
      if (f.length === 0) {
        return -1;
      } else {
        return I(_, f, u, m, v);
      }
    }
    if (typeof f == "number") {
      f = f & 255;
      if (typeof Uint8Array.prototype.indexOf == "function") {
        if (v) {
          return Uint8Array.prototype.indexOf.call(_, f, u);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(_, f, u);
        }
      } else {
        return I(_, [f], u, m, v);
      }
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function I(_, f, u, m, v) {
    var T = 1;
    var P = _.length;
    var Y = f.length;
    if (m !== undefined && (m = String(m).toLowerCase(), m === "ucs2" || m === "ucs-2" || m === "utf16le" || m === "utf-16le")) {
      if (_.length < 2 || f.length < 2) {
        return -1;
      }
      T = 2;
      P /= 2;
      Y /= 2;
      u /= 2;
    }
    function G(Tr, Or) {
      if (T === 1) {
        return Tr[Or];
      } else {
        return Tr.readUInt16BE(Or * T);
      }
    }
    var rt;
    if (v) {
      var wt = -1;
      for (rt = u; rt < P; rt++) {
        if (G(_, rt) === G(f, wt === -1 ? 0 : rt - wt)) {
          if (wt === -1) {
            wt = rt;
          }
          if (rt - wt + 1 === Y) {
            return wt * T;
          }
        } else {
          if (wt !== -1) {
            rt -= rt - wt;
          }
          wt = -1;
        }
      }
    } else {
      if (u + Y > P) {
        u = P - Y;
      }
      rt = u;
      for (; rt >= 0; rt--) {
        var ct = true;
        for (var Qi = 0; Qi < Y; Qi++) {
          if (G(_, rt + Qi) !== G(f, Qi)) {
            ct = false;
            break;
          }
        }
        if (ct) {
          return rt;
        }
      }
    }
    return -1;
  }
  a.prototype.includes = function (f, u, m) {
    return this.indexOf(f, u, m) !== -1;
  };
  a.prototype.indexOf = function (f, u, m) {
    return V(this, f, u, m, true);
  };
  a.prototype.lastIndexOf = function (f, u, m) {
    return V(this, f, u, m, false);
  };
  function W(_, f, u, m) {
    u = Number(u) || 0;
    var v = _.length - u;
    if (m) {
      m = Number(m);
      if (m > v) {
        m = v;
      }
    } else {
      m = v;
    }
    var T = f.length;
    if (m > T / 2) {
      m = T / 2;
    }
    for (var P = 0; P < m; ++P) {
      var Y = parseInt(f.substr(P * 2, 2), 16);
      if (ee(Y)) {
        return P;
      }
      _[u + P] = Y;
    }
    return P;
  }
  function j(_, f, u, m) {
    return C(Z(f, _.length - u), _, u, m);
  }
  function B(_, f, u, m) {
    return C(O(f), _, u, m);
  }
  function $(_, f, u, m) {
    return C(F(f), _, u, m);
  }
  function X(_, f, u, m) {
    return C(L(f, _.length - u), _, u, m);
  }
  a.prototype.write = function (f, u, m, v) {
    if (u === undefined) {
      v = "utf8";
      m = this.length;
      u = 0;
    } else if (m === undefined && typeof u == "string") {
      v = u;
      m = this.length;
      u = 0;
    } else if (isFinite(u)) {
      u = u >>> 0;
      if (isFinite(m)) {
        m = m >>> 0;
        if (v === undefined) {
          v = "utf8";
        }
      } else {
        v = m;
        m = undefined;
      }
    } else {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    var T = this.length - u;
    if (m === undefined || m > T) {
      m = T;
    }
    if (f.length > 0 && (m < 0 || u < 0) || u > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    v ||= "utf8";
    var P = false;
    for (;;) {
      switch (v) {
        case "hex":
          return W(this, f, u, m);
        case "utf8":
        case "utf-8":
          return j(this, f, u, m);
        case "ascii":
        case "latin1":
        case "binary":
          return B(this, f, u, m);
        case "base64":
          return $(this, f, u, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return X(this, f, u, m);
        default:
          if (P) {
            throw new TypeError("Unknown encoding: " + v);
          }
          v = ("" + v).toLowerCase();
          P = true;
      }
    }
  };
  a.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function ft(_, f, u) {
    if (f === 0 && u === _.length) {
      return e.fromByteArray(_);
    } else {
      return e.fromByteArray(_.slice(f, u));
    }
  }
  function gt(_, f, u) {
    u = Math.min(_.length, u);
    var m = [];
    for (var v = f; v < u;) {
      var T = _[v];
      var P = null;
      var Y = T > 239 ? 4 : T > 223 ? 3 : T > 191 ? 2 : 1;
      if (v + Y <= u) {
        var G;
        var rt;
        var wt;
        var ct;
        switch (Y) {
          case 1:
            if (T < 128) {
              P = T;
            }
            break;
          case 2:
            G = _[v + 1];
            if ((G & 192) === 128) {
              ct = (T & 31) << 6 | G & 63;
              if (ct > 127) {
                P = ct;
              }
            }
            break;
          case 3:
            G = _[v + 1];
            rt = _[v + 2];
            if ((G & 192) === 128 && (rt & 192) === 128) {
              ct = (T & 15) << 12 | (G & 63) << 6 | rt & 63;
              if (ct > 2047 && (ct < 55296 || ct > 57343)) {
                P = ct;
              }
            }
            break;
          case 4:
            G = _[v + 1];
            rt = _[v + 2];
            wt = _[v + 3];
            if ((G & 192) === 128 && (rt & 192) === 128 && (wt & 192) === 128) {
              ct = (T & 15) << 18 | (G & 63) << 12 | (rt & 63) << 6 | wt & 63;
              if (ct > 65535 && ct < 1114112) {
                P = ct;
              }
            }
        }
      }
      if (P === null) {
        P = 65533;
        Y = 1;
      } else if (P > 65535) {
        P -= 65536;
        m.push(P >>> 10 & 1023 | 55296);
        P = P & 1023 | 56320;
      }
      m.push(P);
      v += Y;
    }
    return st(m);
  }
  var J = 4096;
  function st(_) {
    var f = _.length;
    if (f <= J) {
      return String.fromCharCode.apply(String, _);
    }
    var u = "";
    for (var m = 0; m < f;) {
      u += String.fromCharCode.apply(String, _.slice(m, m += J));
    }
    return u;
  }
  function _t(_, f, u) {
    var m = "";
    u = Math.min(_.length, u);
    for (var v = f; v < u; ++v) {
      m += String.fromCharCode(_[v] & 127);
    }
    return m;
  }
  function Vt(_, f, u) {
    var m = "";
    u = Math.min(_.length, u);
    for (var v = f; v < u; ++v) {
      m += String.fromCharCode(_[v]);
    }
    return m;
  }
  function te(_, f, u) {
    var m = _.length;
    if (!f || f < 0) {
      f = 0;
    }
    if (!u || u < 0 || u > m) {
      u = m;
    }
    var v = "";
    for (var T = f; T < u; ++T) {
      v += fi[_[T]];
    }
    return v;
  }
  function Ot(_, f, u) {
    for (var m = _.slice(f, u), v = "", T = 0; T < m.length - 1; T += 2) {
      v += String.fromCharCode(m[T] + m[T + 1] * 256);
    }
    return v;
  }
  a.prototype.slice = function (f, u) {
    var m = this.length;
    f = ~~f;
    u = u === undefined ? m : ~~u;
    if (f < 0) {
      f += m;
      if (f < 0) {
        f = 0;
      }
    } else if (f > m) {
      f = m;
    }
    if (u < 0) {
      u += m;
      if (u < 0) {
        u = 0;
      }
    } else if (u > m) {
      u = m;
    }
    if (u < f) {
      u = f;
    }
    var v = this.subarray(f, u);
    Object.setPrototypeOf(v, a.prototype);
    return v;
  };
  function K(_, f, u) {
    if (_ % 1 !== 0 || _ < 0) {
      throw new RangeError("offset is not uint");
    }
    if (_ + f > u) {
      throw new RangeError("Trying to access beyond buffer length");
    }
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function (f, u, m) {
    f = f >>> 0;
    u = u >>> 0;
    if (!m) {
      K(f, u, this.length);
    }
    var v = this[f];
    for (var T = 1, P = 0; ++P < u && (T *= 256);) {
      v += this[f + P] * T;
    }
    return v;
  };
  a.prototype.readUintBE = a.prototype.readUIntBE = function (f, u, m) {
    f = f >>> 0;
    u = u >>> 0;
    if (!m) {
      K(f, u, this.length);
    }
    var v = this[f + --u];
    for (var T = 1; u > 0 && (T *= 256);) {
      v += this[f + --u] * T;
    }
    return v;
  };
  a.prototype.readUint8 = a.prototype.readUInt8 = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 1, this.length);
    }
    return this[f];
  };
  a.prototype.readUint16LE = a.prototype.readUInt16LE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 2, this.length);
    }
    return this[f] | this[f + 1] << 8;
  };
  a.prototype.readUint16BE = a.prototype.readUInt16BE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 2, this.length);
    }
    return this[f] << 8 | this[f + 1];
  };
  a.prototype.readUint32LE = a.prototype.readUInt32LE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 4, this.length);
    }
    return (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  };
  a.prototype.readUint32BE = a.prototype.readUInt32BE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 4, this.length);
    }
    return this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  };
  a.prototype.readIntLE = function (f, u, m) {
    f = f >>> 0;
    u = u >>> 0;
    if (!m) {
      K(f, u, this.length);
    }
    var v = this[f];
    for (var T = 1, P = 0; ++P < u && (T *= 256);) {
      v += this[f + P] * T;
    }
    T *= 128;
    if (v >= T) {
      v -= Math.pow(2, u * 8);
    }
    return v;
  };
  a.prototype.readIntBE = function (f, u, m) {
    f = f >>> 0;
    u = u >>> 0;
    if (!m) {
      K(f, u, this.length);
    }
    for (var v = u, T = 1, P = this[f + --v]; v > 0 && (T *= 256);) {
      P += this[f + --v] * T;
    }
    T *= 128;
    if (P >= T) {
      P -= Math.pow(2, u * 8);
    }
    return P;
  };
  a.prototype.readInt8 = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 1, this.length);
    }
    if (this[f] & 128) {
      return (255 - this[f] + 1) * -1;
    } else {
      return this[f];
    }
  };
  a.prototype.readInt16LE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 2, this.length);
    }
    var m = this[f] | this[f + 1] << 8;
    if (m & 32768) {
      return m | -65536;
    } else {
      return m;
    }
  };
  a.prototype.readInt16BE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 2, this.length);
    }
    var m = this[f + 1] | this[f] << 8;
    if (m & 32768) {
      return m | -65536;
    } else {
      return m;
    }
  };
  a.prototype.readInt32LE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 4, this.length);
    }
    return this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  };
  a.prototype.readInt32BE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 4, this.length);
    }
    return this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  };
  a.prototype.readFloatLE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 4, this.length);
    }
    return i.read(this, f, true, 23, 4);
  };
  a.prototype.readFloatBE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 4, this.length);
    }
    return i.read(this, f, false, 23, 4);
  };
  a.prototype.readDoubleLE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 8, this.length);
    }
    return i.read(this, f, true, 52, 8);
  };
  a.prototype.readDoubleBE = function (f, u) {
    f = f >>> 0;
    if (!u) {
      K(f, 8, this.length);
    }
    return i.read(this, f, false, 52, 8);
  };
  function x(_, f, u, m, v, T) {
    if (!a.isBuffer(_)) {
      throw new TypeError("\"buffer\" argument must be a Buffer instance");
    }
    if (f > v || f < T) {
      throw new RangeError("\"value\" argument is out of bounds");
    }
    if (u + m > _.length) {
      throw new RangeError("Index out of range");
    }
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function (f, u, m, v) {
    f = +f;
    u = u >>> 0;
    m = m >>> 0;
    if (!v) {
      var T = Math.pow(2, m * 8) - 1;
      x(this, f, u, m, T, 0);
    }
    var P = 1;
    var Y = 0;
    for (this[u] = f & 255; ++Y < m && (P *= 256);) {
      this[u + Y] = f / P & 255;
    }
    return u + m;
  };
  a.prototype.writeUintBE = a.prototype.writeUIntBE = function (f, u, m, v) {
    f = +f;
    u = u >>> 0;
    m = m >>> 0;
    if (!v) {
      var T = Math.pow(2, m * 8) - 1;
      x(this, f, u, m, T, 0);
    }
    var P = m - 1;
    var Y = 1;
    for (this[u + P] = f & 255; --P >= 0 && (Y *= 256);) {
      this[u + P] = f / Y & 255;
    }
    return u + m;
  };
  a.prototype.writeUint8 = a.prototype.writeUInt8 = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 1, 255, 0);
    }
    this[u] = f & 255;
    return u + 1;
  };
  a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 2, 65535, 0);
    }
    this[u] = f & 255;
    this[u + 1] = f >>> 8;
    return u + 2;
  };
  a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 2, 65535, 0);
    }
    this[u] = f >>> 8;
    this[u + 1] = f & 255;
    return u + 2;
  };
  a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 4, 4294967295, 0);
    }
    this[u + 3] = f >>> 24;
    this[u + 2] = f >>> 16;
    this[u + 1] = f >>> 8;
    this[u] = f & 255;
    return u + 4;
  };
  a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 4, 4294967295, 0);
    }
    this[u] = f >>> 24;
    this[u + 1] = f >>> 16;
    this[u + 2] = f >>> 8;
    this[u + 3] = f & 255;
    return u + 4;
  };
  a.prototype.writeIntLE = function (f, u, m, v) {
    f = +f;
    u = u >>> 0;
    if (!v) {
      var T = Math.pow(2, m * 8 - 1);
      x(this, f, u, m, T - 1, -T);
    }
    var P = 0;
    var Y = 1;
    var G = 0;
    for (this[u] = f & 255; ++P < m && (Y *= 256);) {
      if (f < 0 && G === 0 && this[u + P - 1] !== 0) {
        G = 1;
      }
      this[u + P] = (f / Y >> 0) - G & 255;
    }
    return u + m;
  };
  a.prototype.writeIntBE = function (f, u, m, v) {
    f = +f;
    u = u >>> 0;
    if (!v) {
      var T = Math.pow(2, m * 8 - 1);
      x(this, f, u, m, T - 1, -T);
    }
    var P = m - 1;
    var Y = 1;
    var G = 0;
    for (this[u + P] = f & 255; --P >= 0 && (Y *= 256);) {
      if (f < 0 && G === 0 && this[u + P + 1] !== 0) {
        G = 1;
      }
      this[u + P] = (f / Y >> 0) - G & 255;
    }
    return u + m;
  };
  a.prototype.writeInt8 = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 1, 127, -128);
    }
    if (f < 0) {
      f = 255 + f + 1;
    }
    this[u] = f & 255;
    return u + 1;
  };
  a.prototype.writeInt16LE = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 2, 32767, -32768);
    }
    this[u] = f & 255;
    this[u + 1] = f >>> 8;
    return u + 2;
  };
  a.prototype.writeInt16BE = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 2, 32767, -32768);
    }
    this[u] = f >>> 8;
    this[u + 1] = f & 255;
    return u + 2;
  };
  a.prototype.writeInt32LE = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 4, 2147483647, -2147483648);
    }
    this[u] = f & 255;
    this[u + 1] = f >>> 8;
    this[u + 2] = f >>> 16;
    this[u + 3] = f >>> 24;
    return u + 4;
  };
  a.prototype.writeInt32BE = function (f, u, m) {
    f = +f;
    u = u >>> 0;
    if (!m) {
      x(this, f, u, 4, 2147483647, -2147483648);
    }
    if (f < 0) {
      f = 4294967295 + f + 1;
    }
    this[u] = f >>> 24;
    this[u + 1] = f >>> 16;
    this[u + 2] = f >>> 8;
    this[u + 3] = f & 255;
    return u + 4;
  };
  function S(_, f, u, m, v, T) {
    if (u + m > _.length) {
      throw new RangeError("Index out of range");
    }
    if (u < 0) {
      throw new RangeError("Index out of range");
    }
  }
  function w(_, f, u, m, v) {
    f = +f;
    u = u >>> 0;
    if (!v) {
      S(_, f, u, 4);
    }
    i.write(_, f, u, m, 23, 4);
    return u + 4;
  }
  a.prototype.writeFloatLE = function (f, u, m) {
    return w(this, f, u, true, m);
  };
  a.prototype.writeFloatBE = function (f, u, m) {
    return w(this, f, u, false, m);
  };
  function A(_, f, u, m, v) {
    f = +f;
    u = u >>> 0;
    if (!v) {
      S(_, f, u, 8);
    }
    i.write(_, f, u, m, 52, 8);
    return u + 8;
  }
  a.prototype.writeDoubleLE = function (f, u, m) {
    return A(this, f, u, true, m);
  };
  a.prototype.writeDoubleBE = function (f, u, m) {
    return A(this, f, u, false, m);
  };
  a.prototype.copy = function (f, u, m, v) {
    if (!a.isBuffer(f)) {
      throw new TypeError("argument should be a Buffer");
    }
    m ||= 0;
    if (!v && v !== 0) {
      v = this.length;
    }
    if (u >= f.length) {
      u = f.length;
    }
    u ||= 0;
    if (v > 0 && v < m) {
      v = m;
    }
    if (v === m || f.length === 0 || this.length === 0) {
      return 0;
    }
    if (u < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (m < 0 || m >= this.length) {
      throw new RangeError("Index out of range");
    }
    if (v < 0) {
      throw new RangeError("sourceEnd out of bounds");
    }
    if (v > this.length) {
      v = this.length;
    }
    if (f.length - u < v - m) {
      v = f.length - u + m;
    }
    var T = v - m;
    if (this === f && typeof Uint8Array.prototype.copyWithin == "function") {
      this.copyWithin(u, m, v);
    } else {
      Uint8Array.prototype.set.call(f, this.subarray(m, v), u);
    }
    return T;
  };
  a.prototype.fill = function (f, u, m, v) {
    if (typeof f == "string") {
      if (typeof u == "string") {
        v = u;
        u = 0;
        m = this.length;
      } else if (typeof m == "string") {
        v = m;
        m = this.length;
      }
      if (v !== undefined && typeof v != "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof v == "string" && !a.isEncoding(v)) {
        throw new TypeError("Unknown encoding: " + v);
      }
      if (f.length === 1) {
        var T = f.charCodeAt(0);
        if (v === "utf8" && T < 128 || v === "latin1") {
          f = T;
        }
      }
    } else if (typeof f == "number") {
      f = f & 255;
    } else if (typeof f == "boolean") {
      f = Number(f);
    }
    if (u < 0 || this.length < u || this.length < m) {
      throw new RangeError("Out of range index");
    }
    if (m <= u) {
      return this;
    }
    u = u >>> 0;
    m = m === undefined ? this.length : m >>> 0;
    f ||= 0;
    var P;
    if (typeof f == "number") {
      for (P = u; P < m; ++P) {
        this[P] = f;
      }
    } else {
      var Y = a.isBuffer(f) ? f : a.from(f, v);
      var G = Y.length;
      if (G === 0) {
        throw new TypeError("The value \"" + f + "\" is invalid for argument \"value\"");
      }
      for (P = 0; P < m - u; ++P) {
        this[P + u] = Y[P % G];
      }
    }
    return this;
  };
  var U = /[^+/0-9A-Za-z-_]/g;
  function N(_) {
    _ = _.split("=")[0];
    _ = _.trim().replace(U, "");
    if (_.length < 2) {
      return "";
    }
    while (_.length % 4 !== 0) {
      _ = _ + "=";
    }
    return _;
  }
  function Z(_, f) {
    f = f || Infinity;
    var u;
    for (var m = _.length, v = null, T = [], P = 0; P < m; ++P) {
      u = _.charCodeAt(P);
      if (u > 55295 && u < 57344) {
        if (!v) {
          if (u > 56319) {
            if ((f -= 3) > -1) {
              T.push(239, 191, 189);
            }
            continue;
          } else if (P + 1 === m) {
            if ((f -= 3) > -1) {
              T.push(239, 191, 189);
            }
            continue;
          }
          v = u;
          continue;
        }
        if (u < 56320) {
          if ((f -= 3) > -1) {
            T.push(239, 191, 189);
          }
          v = u;
          continue;
        }
        u = (v - 55296 << 10 | u - 56320) + 65536;
      } else if (v && (f -= 3) > -1) {
        T.push(239, 191, 189);
      }
      v = null;
      if (u < 128) {
        if ((f -= 1) < 0) {
          break;
        }
        T.push(u);
      } else if (u < 2048) {
        if ((f -= 2) < 0) {
          break;
        }
        T.push(u >> 6 | 192, u & 63 | 128);
      } else if (u < 65536) {
        if ((f -= 3) < 0) {
          break;
        }
        T.push(u >> 12 | 224, u >> 6 & 63 | 128, u & 63 | 128);
      } else if (u < 1114112) {
        if ((f -= 4) < 0) {
          break;
        }
        T.push(u >> 18 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, u & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return T;
  }
  function O(_) {
    var f = [];
    for (var u = 0; u < _.length; ++u) {
      f.push(_.charCodeAt(u) & 255);
    }
    return f;
  }
  function L(_, f) {
    var u;
    var m;
    var v;
    var T = [];
    for (var P = 0; P < _.length && !((f -= 2) < 0); ++P) {
      u = _.charCodeAt(P);
      m = u >> 8;
      v = u % 256;
      T.push(v);
      T.push(m);
    }
    return T;
  }
  function F(_) {
    return e.toByteArray(N(_));
  }
  function C(_, f, u, m) {
    for (var v = 0; v < m && !(v + u >= f.length) && !(v >= _.length); ++v) {
      f[v + u] = _[v];
    }
    return v;
  }
  function H(_, f) {
    return _ instanceof f || _ != null && _.constructor != null && _.constructor.name != null && _.constructor.name === f.name;
  }
  function ee(_) {
    return _ !== _;
  }
  var fi = function () {
    var _ = "0123456789abcdef";
    var f = new Array(256);
    for (var u = 0; u < 16; ++u) {
      var m = u * 16;
      for (var v = 0; v < 16; ++v) {
        f[m + v] = _[u] + _[v];
      }
    }
    return f;
  }();
})(Ws);
var dt = {};
var Zt;
var Yt;
function js() {
  throw new Error("setTimeout has not been defined");
}
function Zs() {
  throw new Error("clearTimeout has not been defined");
}
(function () {
  try {
    if (typeof setTimeout == "function") {
      Zt = setTimeout;
    } else {
      Zt = js;
    }
  } catch {
    Zt = js;
  }
  try {
    if (typeof clearTimeout == "function") {
      Yt = clearTimeout;
    } else {
      Yt = Zs;
    }
  } catch {
    Yt = Zs;
  }
})();
function Pl(t) {
  if (Zt === setTimeout) {
    return setTimeout(t, 0);
  }
  if ((Zt === js || !Zt) && setTimeout) {
    Zt = setTimeout;
    return setTimeout(t, 0);
  }
  try {
    return Zt(t, 0);
  } catch {
    try {
      return Zt.call(null, t, 0);
    } catch {
      return Zt.call(this, t, 0);
    }
  }
}
function qu(t) {
  if (Yt === clearTimeout) {
    return clearTimeout(t);
  }
  if ((Yt === Zs || !Yt) && clearTimeout) {
    Yt = clearTimeout;
    return clearTimeout(t);
  }
  try {
    return Yt(t);
  } catch {
    try {
      return Yt.call(null, t);
    } catch {
      return Yt.call(this, t);
    }
  }
}
var ae = [];
var Qe = false;
var Fe;
var vn = -1;
function Qu() {
  if (!!Qe && !!Fe) {
    Qe = false;
    if (Fe.length) {
      ae = Fe.concat(ae);
    } else {
      vn = -1;
    }
    if (ae.length) {
      zl();
    }
  }
}
function zl() {
  if (!Qe) {
    var t = Pl(Qu);
    Qe = true;
    for (var e = ae.length; e;) {
      Fe = ae;
      ae = [];
      while (++vn < e) {
        if (Fe) {
          Fe[vn].run();
        }
      }
      vn = -1;
      e = ae.length;
    }
    Fe = null;
    Qe = false;
    qu(t);
  }
}
dt.nextTick = function (t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      e[i - 1] = arguments[i];
    }
  }
  ae.push(new Bl(t, e));
  if (ae.length === 1 && !Qe) {
    Pl(zl);
  }
};
function Bl(t, e) {
  this.fun = t;
  this.array = e;
}
Bl.prototype.run = function () {
  this.fun.apply(null, this.array);
};
dt.title = "browser";
dt.browser = true;
dt.env = {};
dt.argv = [];
dt.version = "";
dt.versions = {};
function fe() {}
dt.on = fe;
dt.addListener = fe;
dt.once = fe;
dt.off = fe;
dt.removeListener = fe;
dt.removeAllListeners = fe;
dt.emit = fe;
dt.prependListener = fe;
dt.prependOnceListener = fe;
dt.listeners = function (t) {
  return [];
};
dt.binding = function (t) {
  throw new Error("process.binding is not supported");
};
dt.cwd = function () {
  return "/";
};
dt.chdir = function (t) {
  throw new Error("process.chdir is not supported");
};
dt.umask = function () {
  return 0;
};
(function (t) {
  function e() {
    var n = this || self;
    delete t.prototype.__magic__;
    return n;
  }
  if (typeof globalThis == "object") {
    return globalThis;
  }
  if (this) {
    return e();
  }
  t.defineProperty(t.prototype, "__magic__", {
    configurable: true,
    get: e
  });
  var i = __magic__;
  return i;
})(Object);
var Nl = {
  exports: {}
};
(function (t) {
  (function (e, i, n) {
    t.exports = n(e);
    t.exports.default = t.exports;
  })(vc, "UUID", function () {
    function e(x, S, w, A, U, N) {
      var Z = function (L, F) {
        var C = L.toString(16);
        if (C.length < 2) {
          C = "0" + C;
        }
        if (F) {
          C = C.toUpperCase();
        }
        return C;
      };
      for (var O = S; O <= w; O++) {
        U[N++] = Z(x[O], A);
      }
      return U;
    }
    function i(x, S, w, A, U) {
      for (var N = S; N <= w; N += 2) {
        A[U++] = parseInt(x.substr(N, 2), 16);
      }
    }
    var n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
    var s = [0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0];
    function r(x, S) {
      if (S % 4 !== 0) {
        throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
      }
      var w = "";
      for (var A = 0, U = 0; A < S;) {
        U = U * 256 + x[A++];
        if (A % 4 === 0) {
          for (var N = 52200625; N >= 1;) {
            var Z = Math.floor(U / N) % 85;
            w += n[Z];
            N /= 85;
          }
          U = 0;
        }
      }
      return w;
    }
    function o(x, S) {
      var w = x.length;
      if (w % 5 !== 0) {
        throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
      }
      if (typeof S === "undefined") {
        S = new Array(w * 4 / 5);
      }
      for (var A = 0, U = 0, N = 0; A < w;) {
        var Z = x.charCodeAt(A++) - 32;
        if (Z < 0 || Z >= s.length) {
          break;
        }
        N = N * 85 + s[Z];
        if (A % 5 === 0) {
          for (var O = 16777216; O >= 1;) {
            S[U++] = Math.trunc(N / O % 256);
            O /= 256;
          }
          N = 0;
        }
      }
      return S;
    }
    function a(x, S) {
      var w = {
        ibits: 8,
        obits: 8,
        obigendian: true
      };
      for (var A in S) {
        if (typeof w[A] !== "undefined") {
          w[A] = S[A];
        }
      }
      for (var U = [], N = 0, Z, O, L = 0, F, C = 0, H = x.length; L === 0 && (O = x.charCodeAt(N++)), Z = O >> w.ibits - (L + 8) & 255, L = (L + 8) % w.ibits, w.obigendian ? C === 0 ? F = Z << w.obits - 8 : F |= Z << w.obits - 8 - C : C === 0 ? F = Z : F |= Z << C, C = (C + 8) % w.obits, C !== 0 || !(U.push(F), N >= H););
      return U;
    }
    function c(x, S) {
      var w = {
        ibits: 32,
        ibigendian: true
      };
      for (var A in S) {
        if (typeof w[A] !== "undefined") {
          w[A] = S[A];
        }
      }
      var U = "";
      var N = 4294967295;
      if (w.ibits < 32) {
        N = (1 << w.ibits) - 1;
      }
      for (var Z = x.length, O = 0; O < Z; O++) {
        var L = x[O] & N;
        for (var F = 0; F < w.ibits; F += 8) {
          if (w.ibigendian) {
            U += String.fromCharCode(L >> w.ibits - 8 - F & 255);
          } else {
            U += String.fromCharCode(L >> F & 255);
          }
        }
      }
      return U;
    }
    var l = 8;
    var h = 8;
    var d = 256;
    function g(x, S, w, A, U, N, Z, O) {
      return [O, Z, N, U, A, w, S, x];
    }
    function p() {
      return g(0, 0, 0, 0, 0, 0, 0, 0);
    }
    function b(x) {
      return x.slice(0);
    }
    function y(x) {
      var S = p();
      for (var w = 0; w < l; w++) {
        S[w] = Math.floor(x % d);
        x /= d;
      }
      return S;
    }
    function k(x) {
      var S = 0;
      for (var w = l - 1; w >= 0; w--) {
        S *= d;
        S += x[w];
      }
      return Math.floor(S);
    }
    function E(x, S) {
      var w = 0;
      for (var A = 0; A < l; A++) {
        w += x[A] + S[A];
        x[A] = Math.floor(w % d);
        w = Math.floor(w / d);
      }
      return w;
    }
    function D(x, S) {
      var w = 0;
      for (var A = 0; A < l; A++) {
        w += x[A] * S;
        x[A] = Math.floor(w % d);
        w = Math.floor(w / d);
      }
      return w;
    }
    function z(x, S) {
      var w;
      var A;
      var U = new Array(l + l);
      for (w = 0; w < l + l; w++) {
        U[w] = 0;
      }
      var N;
      for (w = 0; w < l; w++) {
        N = 0;
        A = 0;
        for (; A < l; A++) {
          N += x[w] * S[A] + U[w + A];
          U[w + A] = N % d;
          N /= d;
        }
        for (; A < l + l - w; A++) {
          N += U[w + A];
          U[w + A] = N % d;
          N /= d;
        }
      }
      for (w = 0; w < l; w++) {
        x[w] = U[w];
      }
      return U.slice(l, l);
    }
    function M(x, S) {
      for (var w = 0; w < l; w++) {
        x[w] &= S[w];
      }
      return x;
    }
    function R(x, S) {
      for (var w = 0; w < l; w++) {
        x[w] |= S[w];
      }
      return x;
    }
    function V(x, S) {
      var w = p();
      if (S % h !== 0) {
        throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
      }
      for (var A = Math.floor(S / h), U = 0; U < A; U++) {
        for (var N = l - 1 - 1; N >= 0; N--) {
          w[N + 1] = w[N];
        }
        w[0] = x[0];
        N = 0;
        for (; N < l - 1; N++) {
          x[N] = x[N + 1];
        }
        x[N] = 0;
      }
      return k(w);
    }
    function I(x, S) {
      if (S > l * h) {
        throw new Error("ui64_ror: invalid number of bits to shift");
      }
      var w = new Array(l + l);
      var A;
      for (A = 0; A < l; A++) {
        w[A + l] = x[A];
        w[A] = 0;
      }
      var U = Math.floor(S / h);
      var N = S % h;
      for (A = U; A < l + l - 1; A++) {
        w[A - U] = (w[A] >>> N | w[A + 1] << h - N) & (1 << h) - 1;
      }
      w[l + l - 1 - U] = w[l + l - 1] >>> N & (1 << h) - 1;
      A = l + l - 1 - U + 1;
      for (; A < l + l; A++) {
        w[A] = 0;
      }
      for (A = 0; A < l; A++) {
        x[A] = w[A + l];
      }
      return w.slice(0, l);
    }
    function W(x, S) {
      if (S > l * h) {
        throw new Error("ui64_rol: invalid number of bits to shift");
      }
      var w = new Array(l + l);
      var A;
      for (A = 0; A < l; A++) {
        w[A + l] = 0;
        w[A] = x[A];
      }
      var U = Math.floor(S / h);
      var N = S % h;
      for (A = l - 1 - U; A > 0; A--) {
        w[A + U] = (w[A] << N | w[A - 1] >>> h - N) & (1 << h) - 1;
      }
      w[0 + U] = w[0] << N & (1 << h) - 1;
      A = 0 + U - 1;
      for (; A >= 0; A--) {
        w[A] = 0;
      }
      for (A = 0; A < l; A++) {
        x[A] = w[A];
      }
      return w.slice(l, l);
    }
    function j(x, S) {
      for (var w = 0; w < l; w++) {
        x[w] ^= S[w];
      }
    }
    function B(x, S) {
      var w = (x & 65535) + (S & 65535);
      var A = (x >> 16) + (S >> 16) + (w >> 16);
      return A << 16 | w & 65535;
    }
    function $(x, S) {
      return x << S & -1 | x >>> 32 - S & -1;
    }
    function X(x, S) {
      function w(v, T, P, Y) {
        if (v < 20) {
          return T & P | ~T & Y;
        } else if (v < 40) {
          return T ^ P ^ Y;
        } else if (v < 60) {
          return T & P | T & Y | P & Y;
        } else {
          return T ^ P ^ Y;
        }
      }
      function A(v) {
        if (v < 20) {
          return 1518500249;
        } else if (v < 40) {
          return 1859775393;
        } else if (v < 60) {
          return -1894007588;
        } else {
          return -899497514;
        }
      }
      x[S >> 5] |= 128 << 24 - S % 32;
      x[(S + 64 >> 9 << 4) + 15] = S;
      var U = Array(80);
      var N = 1732584193;
      var Z = -271733879;
      var O = -1732584194;
      var L = 271733878;
      var F = -1009589776;
      for (var C = 0; C < x.length; C += 16) {
        var H = N;
        var ee = Z;
        var fi = O;
        var _ = L;
        var f = F;
        for (var u = 0; u < 80; u++) {
          if (u < 16) {
            U[u] = x[C + u];
          } else {
            U[u] = $(U[u - 3] ^ U[u - 8] ^ U[u - 14] ^ U[u - 16], 1);
          }
          var m = B(B($(N, 5), w(u, Z, O, L)), B(B(F, U[u]), A(u)));
          F = L;
          L = O;
          O = $(Z, 30);
          Z = N;
          N = m;
        }
        N = B(N, H);
        Z = B(Z, ee);
        O = B(O, fi);
        L = B(L, _);
        F = B(F, f);
      }
      return [N, Z, O, L, F];
    }
    function ft(x) {
      return c(X(a(x, {
        ibits: 8,
        obits: 32,
        obigendian: true
      }), x.length * 8), {
        ibits: 32,
        ibigendian: true
      });
    }
    function gt(x, S) {
      function w(u, m, v, T, P, Y) {
        return B($(B(B(m, u), B(T, Y)), P), v);
      }
      function A(u, m, v, T, P, Y, G) {
        return w(m & v | ~m & T, u, m, P, Y, G);
      }
      function U(u, m, v, T, P, Y, G) {
        return w(m & T | v & ~T, u, m, P, Y, G);
      }
      function N(u, m, v, T, P, Y, G) {
        return w(m ^ v ^ T, u, m, P, Y, G);
      }
      function Z(u, m, v, T, P, Y, G) {
        return w(v ^ (m | ~T), u, m, P, Y, G);
      }
      x[S >> 5] |= 128 << S % 32;
      x[(S + 64 >>> 9 << 4) + 14] = S;
      var O = 1732584193;
      var L = -271733879;
      var F = -1732584194;
      var C = 271733878;
      for (var H = 0; H < x.length; H += 16) {
        var ee = O;
        var fi = L;
        var _ = F;
        var f = C;
        O = A(O, L, F, C, x[H + 0], 7, -680876936);
        C = A(C, O, L, F, x[H + 1], 12, -389564586);
        F = A(F, C, O, L, x[H + 2], 17, 606105819);
        L = A(L, F, C, O, x[H + 3], 22, -1044525330);
        O = A(O, L, F, C, x[H + 4], 7, -176418897);
        C = A(C, O, L, F, x[H + 5], 12, 1200080426);
        F = A(F, C, O, L, x[H + 6], 17, -1473231341);
        L = A(L, F, C, O, x[H + 7], 22, -45705983);
        O = A(O, L, F, C, x[H + 8], 7, 1770035416);
        C = A(C, O, L, F, x[H + 9], 12, -1958414417);
        F = A(F, C, O, L, x[H + 10], 17, -42063);
        L = A(L, F, C, O, x[H + 11], 22, -1990404162);
        O = A(O, L, F, C, x[H + 12], 7, 1804603682);
        C = A(C, O, L, F, x[H + 13], 12, -40341101);
        F = A(F, C, O, L, x[H + 14], 17, -1502002290);
        L = A(L, F, C, O, x[H + 15], 22, 1236535329);
        O = U(O, L, F, C, x[H + 1], 5, -165796510);
        C = U(C, O, L, F, x[H + 6], 9, -1069501632);
        F = U(F, C, O, L, x[H + 11], 14, 643717713);
        L = U(L, F, C, O, x[H + 0], 20, -373897302);
        O = U(O, L, F, C, x[H + 5], 5, -701558691);
        C = U(C, O, L, F, x[H + 10], 9, 38016083);
        F = U(F, C, O, L, x[H + 15], 14, -660478335);
        L = U(L, F, C, O, x[H + 4], 20, -405537848);
        O = U(O, L, F, C, x[H + 9], 5, 568446438);
        C = U(C, O, L, F, x[H + 14], 9, -1019803690);
        F = U(F, C, O, L, x[H + 3], 14, -187363961);
        L = U(L, F, C, O, x[H + 8], 20, 1163531501);
        O = U(O, L, F, C, x[H + 13], 5, -1444681467);
        C = U(C, O, L, F, x[H + 2], 9, -51403784);
        F = U(F, C, O, L, x[H + 7], 14, 1735328473);
        L = U(L, F, C, O, x[H + 12], 20, -1926607734);
        O = N(O, L, F, C, x[H + 5], 4, -378558);
        C = N(C, O, L, F, x[H + 8], 11, -2022574463);
        F = N(F, C, O, L, x[H + 11], 16, 1839030562);
        L = N(L, F, C, O, x[H + 14], 23, -35309556);
        O = N(O, L, F, C, x[H + 1], 4, -1530992060);
        C = N(C, O, L, F, x[H + 4], 11, 1272893353);
        F = N(F, C, O, L, x[H + 7], 16, -155497632);
        L = N(L, F, C, O, x[H + 10], 23, -1094730640);
        O = N(O, L, F, C, x[H + 13], 4, 681279174);
        C = N(C, O, L, F, x[H + 0], 11, -358537222);
        F = N(F, C, O, L, x[H + 3], 16, -722521979);
        L = N(L, F, C, O, x[H + 6], 23, 76029189);
        O = N(O, L, F, C, x[H + 9], 4, -640364487);
        C = N(C, O, L, F, x[H + 12], 11, -421815835);
        F = N(F, C, O, L, x[H + 15], 16, 530742520);
        L = N(L, F, C, O, x[H + 2], 23, -995338651);
        O = Z(O, L, F, C, x[H + 0], 6, -198630844);
        C = Z(C, O, L, F, x[H + 7], 10, 1126891415);
        F = Z(F, C, O, L, x[H + 14], 15, -1416354905);
        L = Z(L, F, C, O, x[H + 5], 21, -57434055);
        O = Z(O, L, F, C, x[H + 12], 6, 1700485571);
        C = Z(C, O, L, F, x[H + 3], 10, -1894986606);
        F = Z(F, C, O, L, x[H + 10], 15, -1051523);
        L = Z(L, F, C, O, x[H + 1], 21, -2054922799);
        O = Z(O, L, F, C, x[H + 8], 6, 1873313359);
        C = Z(C, O, L, F, x[H + 15], 10, -30611744);
        F = Z(F, C, O, L, x[H + 6], 15, -1560198380);
        L = Z(L, F, C, O, x[H + 13], 21, 1309151649);
        O = Z(O, L, F, C, x[H + 4], 6, -145523070);
        C = Z(C, O, L, F, x[H + 11], 10, -1120210379);
        F = Z(F, C, O, L, x[H + 2], 15, 718787259);
        L = Z(L, F, C, O, x[H + 9], 21, -343485551);
        O = B(O, ee);
        L = B(L, fi);
        F = B(F, _);
        C = B(C, f);
      }
      return [O, L, F, C];
    }
    function J(x) {
      return c(gt(a(x, {
        ibits: 8,
        obits: 32,
        obigendian: false
      }), x.length * 8), {
        ibits: 32,
        ibigendian: false
      });
    }
    function st(x) {
      this.mul = g(88, 81, 244, 45, 76, 149, 127, 45);
      this.inc = g(20, 5, 123, 126, 247, 103, 129, 79);
      this.mask = g(0, 0, 0, 0, 255, 255, 255, 255);
      this.state = b(this.inc);
      this.next();
      M(this.state, this.mask);
      var S;
      if (x !== undefined) {
        x = y(x >>> 0);
      } else if (typeof window == "object" && typeof window.crypto == "object" && typeof window.crypto.getRandomValues == "function") {
        S = new Uint32Array(2);
        window.crypto.getRandomValues(S);
        x = R(y(S[0] >>> 0), I(y(S[1] >>> 0), 32));
      } else if (typeof globalThis == "object" && typeof globalThis.crypto == "object" && typeof globalThis.crypto.getRandomValues == "function") {
        S = new Uint32Array(2);
        globalThis.crypto.getRandomValues(S);
        x = R(y(S[0] >>> 0), I(y(S[1] >>> 0), 32));
      } else {
        x = y(Math.random() * 4294967295 >>> 0);
        R(x, I(y(new Date().getTime()), 32));
      }
      R(this.state, x);
      this.next();
    }
    st.prototype.next = function () {
      var x = b(this.state);
      z(this.state, this.mul);
      E(this.state, this.inc);
      var S = b(x);
      I(S, 18);
      j(S, x);
      I(S, 27);
      var w = b(x);
      I(w, 59);
      M(S, this.mask);
      var A = k(w);
      var U = b(S);
      W(U, 32 - A);
      I(S, A);
      j(S, U);
      return k(S);
    };
    st.prototype.reseed = function (x) {
      if (typeof x != "string") {
        throw new Error("UUID: PCG: seed: invalid argument (string expected)");
      }
      for (var S = X(a(x, {
          ibits: 8,
          obits: 32,
          obigendian: true
        }), x.length * 8), w = 0; w < S.length; w++) {
        j(_t.state, y(S[w] >>> 0));
      }
    };
    var _t = new st();
    st.reseed = function (x) {
      _t.reseed(x);
    };
    function Vt(x, S) {
      var w = [];
      for (var A = 0; A < x; A++) {
        w[A] = _t.next() % S;
      }
      return w;
    }
    var te = 0;
    var Ot = 0;
    function K() {
      if (arguments.length === 1 && typeof arguments[0] == "string") {
        this.parse.apply(this, arguments);
      } else if (arguments.length >= 1 && typeof arguments[0] == "number") {
        this.make.apply(this, arguments);
      } else {
        if (arguments.length >= 1) {
          throw new Error("UUID: constructor: invalid arguments");
        }
        for (var x = 0; x < 16; x++) {
          this[x] = 0;
        }
      }
    }
    if (typeof Uint8Array !== "undefined") {
      K.prototype = new Uint8Array(16);
    } else if (Ws.Buffer) {
      K.prototype = Ws.Buffer.alloc(16);
    } else {
      K.prototype = new Array(16);
    }
    K.prototype.constructor = K;
    K.prototype.make = function (x) {
      var S;
      var w = this;
      if (x === 1) {
        var A = new Date();
        var U = A.getTime();
        if (U !== te) {
          Ot = 0;
        } else {
          Ot++;
        }
        te = U;
        var N = y(U);
        D(N, 10000);
        E(N, g(1, 178, 29, 210, 19, 129, 64, 0));
        if (Ot > 0) {
          E(N, y(Ot));
        }
        var Z;
        Z = V(N, 8);
        w[3] = Z & 255;
        Z = V(N, 8);
        w[2] = Z & 255;
        Z = V(N, 8);
        w[1] = Z & 255;
        Z = V(N, 8);
        w[0] = Z & 255;
        Z = V(N, 8);
        w[5] = Z & 255;
        Z = V(N, 8);
        w[4] = Z & 255;
        Z = V(N, 8);
        w[7] = Z & 255;
        Z = V(N, 8);
        w[6] = Z & 15;
        var O = Vt(2, 255);
        w[8] = O[0];
        w[9] = O[1];
        var L = Vt(6, 255);
        L[0] |= 1;
        L[0] |= 2;
        S = 0;
        for (; S < 6; S++) {
          w[10 + S] = L[S];
        }
      } else if (x === 4) {
        var F = Vt(16, 255);
        for (S = 0; S < 16; S++) {
          this[S] = F[S];
        }
      } else if (x === 3 || x === 5) {
        var C = "";
        var H = typeof arguments[1] == "object" && arguments[1] instanceof K ? arguments[1] : new K().parse(arguments[1]);
        for (S = 0; S < 16; S++) {
          C += String.fromCharCode(H[S]);
        }
        C += arguments[2];
        var ee = x === 3 ? J(C) : ft(C);
        for (S = 0; S < 16; S++) {
          w[S] = ee.charCodeAt(S);
        }
      } else {
        throw new Error("UUID: make: invalid version");
      }
      w[6] &= 15;
      w[6] |= x << 4;
      w[8] &= 63;
      w[8] |= 128;
      return w;
    };
    K.prototype.format = function (x) {
      var S;
      var w;
      if (x === "z85") {
        S = r(this, 16);
      } else if (x === "b16") {
        w = Array(32);
        e(this, 0, 15, true, w, 0);
        S = w.join("");
      } else if (x === undefined || x === "std") {
        w = new Array(36);
        e(this, 0, 3, false, w, 0);
        w[8] = "-";
        e(this, 4, 5, false, w, 9);
        w[13] = "-";
        e(this, 6, 7, false, w, 14);
        w[18] = "-";
        e(this, 8, 9, false, w, 19);
        w[23] = "-";
        e(this, 10, 15, false, w, 24);
        S = w.join("");
      }
      return S;
    };
    K.prototype.toString = function (x) {
      return this.format(x);
    };
    K.prototype.toJSON = function () {
      return this.format("std");
    };
    K.prototype.parse = function (x, S) {
      if (typeof x != "string") {
        throw new Error("UUID: parse: invalid argument (type string expected)");
      }
      if (S === "z85") {
        o(x, this);
      } else if (S === "b16") {
        i(x, 0, 35, this, 0);
      } else if (S === undefined || S === "std") {
        var w = {
          nil: "00000000-0000-0000-0000-000000000000",
          "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
          "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
          "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
          "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
        };
        if (w[x] !== undefined) {
          x = w[x];
        } else if (!x.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
          throw new Error("UUID: parse: invalid string representation (expected \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\")");
        }
        i(x, 0, 7, this, 0);
        i(x, 9, 12, this, 4);
        i(x, 14, 17, this, 6);
        i(x, 19, 22, this, 8);
        i(x, 24, 35, this, 10);
      }
      return this;
    };
    K.prototype.export = function () {
      var x = Array(16);
      for (var S = 0; S < 16; S++) {
        x[S] = this[S];
      }
      return x;
    };
    K.prototype.import = function (x) {
      if (typeof x != "object" || !(x instanceof Array)) {
        throw new Error("UUID: import: invalid argument (type Array expected)");
      }
      if (x.length !== 16) {
        throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
      }
      for (var S = 0; S < 16; S++) {
        if (typeof x[S] != "number") {
          throw new Error("UUID: import: invalid array element #" + S + " (type Number expected)");
        }
        if (!isFinite(x[S]) || Math.floor(x[S]) !== x[S]) {
          throw new Error("UUID: import: invalid array element #" + S + " (Number with integer value expected)");
        }
        if (!(x[S] >= 0) || !(x[S] <= 255)) {
          throw new Error("UUID: import: invalid array element #" + S + " (Number with integer value in range 0...255 expected)");
        }
        this[S] = x[S];
      }
      return this;
    };
    K.prototype.compare = function (x) {
      if (typeof x != "object") {
        throw new Error("UUID: compare: invalid argument (type UUID expected)");
      }
      if (!(x instanceof K)) {
        throw new Error("UUID: compare: invalid argument (type UUID expected)");
      }
      for (var S = 0; S < 16; S++) {
        if (this[S] < x[S]) {
          return -1;
        }
        if (this[S] > x[S]) {
          return 1;
        }
      }
      return 0;
    };
    K.prototype.equal = function (x) {
      return this.compare(x) === 0;
    };
    K.prototype.fold = function (x) {
      if (typeof x === "undefined") {
        throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
      }
      if (x < 1 || x > 4) {
        throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
      }
      for (var S = 16 / Math.pow(2, x), w = new Array(S), A = 0; A < S; A++) {
        var U = 0;
        for (var N = 0; A + N < 16; N += S) {
          U ^= this[A + N];
        }
        w[A] = U;
      }
      return w;
    };
    K.PCG = st;
    return K;
  });
})(Nl);
var Ju = Nl.exports;
const D_ = kc(Ju); /*!
                   * @kurkle/color v0.3.2
                   * https://github.com/kurkle/color#readme
                   * (c) 2023 Jukka Kurkela
                   * Released under the MIT License
                   */
function Ki(t) {
  return t + 0.5 | 0;
}
const ge = (t, e, i) => Math.max(Math.min(t, i), e);
function vi(t) {
  return ge(Ki(t * 2.55), 0, 255);
}
function ye(t) {
  return ge(Ki(t * 255), 0, 255);
}
function oe(t) {
  return ge(Ki(t / 2.55) / 100, 0, 1);
}
function So(t) {
  return ge(Ki(t * 100), 0, 100);
}
const Pt = {
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
const Ys = [..."0123456789ABCDEF"];
const td = t => Ys[t & 15];
const ed = t => Ys[(t & 240) >> 4] + Ys[t & 15];
const ln = t => (t & 240) >> 4 === (t & 15);
const id = t => ln(t.r) && ln(t.g) && ln(t.b) && ln(t.a);
function nd(t) {
  var e = t.length;
  var i;
  if (t[0] === "#") {
    if (e === 4 || e === 5) {
      i = {
        r: Pt[t[1]] * 17 & 255,
        g: Pt[t[2]] * 17 & 255,
        b: Pt[t[3]] * 17 & 255,
        a: e === 5 ? Pt[t[4]] * 17 : 255
      };
    } else if (e === 7 || e === 9) {
      i = {
        r: Pt[t[1]] << 4 | Pt[t[2]],
        g: Pt[t[3]] << 4 | Pt[t[4]],
        b: Pt[t[5]] << 4 | Pt[t[6]],
        a: e === 9 ? Pt[t[7]] << 4 | Pt[t[8]] : 255
      };
    }
  }
  return i;
}
const sd = (t, e) => t < 255 ? e(t) : "";
function rd(t) {
  var e = id(t) ? td : ed;
  if (t) {
    return "#" + e(t.r) + e(t.g) + e(t.b) + sd(t.a, e);
  } else {
    return undefined;
  }
}
const od = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ul(t, e, i) {
  const n = e * Math.min(i, 1 - i);
  const s = (r, o = (r + t / 30) % 12) => i - n * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [s(0), s(8), s(4)];
}
function ad(t, e, i) {
  const n = (s, r = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(r, 4 - r, 1), 0);
  return [n(5), n(3), n(1)];
}
function ld(t, e, i) {
  const n = Ul(t, 1, 0.5);
  let s;
  if (e + i > 1) {
    s = 1 / (e + i);
    e *= s;
    i *= s;
  }
  s = 0;
  for (; s < 3; s++) {
    n[s] *= 1 - e - i;
    n[s] += e;
  }
  return n;
}
function cd(t, e, i, n, s) {
  if (t === s) {
    return (e - i) / n + (e < i ? 6 : 0);
  } else if (e === s) {
    return (i - t) / n + 2;
  } else {
    return (t - e) / n + 4;
  }
}
function fr(t) {
  const i = t.r / 255;
  const n = t.g / 255;
  const s = t.b / 255;
  const r = Math.max(i, n, s);
  const o = Math.min(i, n, s);
  const a = (r + o) / 2;
  let c;
  let l;
  let h;
  if (r !== o) {
    h = r - o;
    l = a > 0.5 ? h / (2 - r - o) : h / (r + o);
    c = cd(i, n, s, h, r);
    c = c * 60 + 0.5;
  }
  return [c | 0, l || 0, a];
}
function ur(t, e, i, n) {
  return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(ye);
}
function dr(t, e, i) {
  return ur(Ul, t, e, i);
}
function hd(t, e, i) {
  return ur(ld, t, e, i);
}
function fd(t, e, i) {
  return ur(ad, t, e, i);
}
function Hl(t) {
  return (t % 360 + 360) % 360;
}
function ud(t) {
  const e = od.exec(t);
  let i = 255;
  let n;
  if (!e) {
    return;
  }
  if (e[5] !== n) {
    i = e[6] ? vi(+e[5]) : ye(+e[5]);
  }
  const s = Hl(+e[2]);
  const r = +e[3] / 100;
  const o = +e[4] / 100;
  if (e[1] === "hwb") {
    n = hd(s, r, o);
  } else if (e[1] === "hsv") {
    n = fd(s, r, o);
  } else {
    n = dr(s, r, o);
  }
  return {
    r: n[0],
    g: n[1],
    b: n[2],
    a: i
  };
}
function dd(t, e) {
  var i = fr(t);
  i[0] = Hl(i[0] + e);
  i = dr(i);
  t.r = i[0];
  t.g = i[1];
  t.b = i[2];
}
function gd(t) {
  if (!t) {
    return;
  }
  const e = fr(t);
  const i = e[0];
  const n = So(e[1]);
  const s = So(e[2]);
  if (t.a < 255) {
    return `hsla(${i}, ${n}%, ${s}%, ${oe(t.a)})`;
  } else {
    return `hsl(${i}, ${n}%, ${s}%)`;
  }
}
const Eo = {
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
const Ao = {
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
function pd() {
  const t = {};
  const e = Object.keys(Ao);
  const i = Object.keys(Eo);
  let n;
  let s;
  let r;
  let o;
  let a;
  for (n = 0; n < e.length; n++) {
    o = a = e[n];
    s = 0;
    for (; s < i.length; s++) {
      r = i[s];
      a = a.replace(r, Eo[r]);
    }
    r = parseInt(Ao[o], 16);
    t[a] = [r >> 16 & 255, r >> 8 & 255, r & 255];
  }
  return t;
}
let cn;
function _d(t) {
  if (!cn) {
    cn = pd();
    cn.transparent = [0, 0, 0, 0];
  }
  const e = cn[t.toLowerCase()];
  return e && {
    r: e[0],
    g: e[1],
    b: e[2],
    a: e.length === 4 ? e[3] : 255
  };
}
const md = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function xd(t) {
  const e = md.exec(t);
  let i = 255;
  let n;
  let s;
  let r;
  if (e) {
    if (e[7] !== n) {
      const o = +e[7];
      i = e[8] ? vi(o) : ge(o * 255, 0, 255);
    }
    n = +e[1];
    s = +e[3];
    r = +e[5];
    n = (e[2] ? vi(n) : ge(n, 0, 255)) & 255;
    s = (e[4] ? vi(s) : ge(s, 0, 255)) & 255;
    r = (e[6] ? vi(r) : ge(r, 0, 255)) & 255;
    return {
      r: n,
      g: s,
      b: r,
      a: i
    };
  }
}
function bd(t) {
  return t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${oe(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`);
}
const bs = t => t <= 0.0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - 0.055;
const Ke = t => t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
function yd(t, e, i) {
  const n = Ke(oe(t.r));
  const s = Ke(oe(t.g));
  const r = Ke(oe(t.b));
  return {
    r: ye(bs(n + i * (Ke(oe(e.r)) - n))),
    g: ye(bs(s + i * (Ke(oe(e.g)) - s))),
    b: ye(bs(r + i * (Ke(oe(e.b)) - r))),
    a: t.a + i * (e.a - t.a)
  };
}
function hn(t, e, i) {
  if (t) {
    let n = fr(t);
    n[e] = Math.max(0, Math.min(n[e] + n[e] * i, e === 0 ? 360 : 1));
    n = dr(n);
    t.r = n[0];
    t.g = n[1];
    t.b = n[2];
  }
}
function $l(t, e) {
  return t && Object.assign(e || {}, t);
}
function Mo(t) {
  var e = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  if (Array.isArray(t)) {
    if (t.length >= 3) {
      e = {
        r: t[0],
        g: t[1],
        b: t[2],
        a: 255
      };
      if (t.length > 3) {
        e.a = ye(t[3]);
      }
    }
  } else {
    e = $l(t, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    });
    e.a = ye(e.a);
  }
  return e;
}
function wd(t) {
  if (t.charAt(0) === "r") {
    return xd(t);
  } else {
    return ud(t);
  }
}
class Ni {
  constructor(e) {
    if (e instanceof Ni) {
      return e;
    }
    const i = typeof e;
    let n;
    if (i === "object") {
      n = Mo(e);
    } else if (i === "string") {
      n = nd(e) || _d(e) || wd(e);
    }
    this._rgb = n;
    this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = $l(this._rgb);
    if (e) {
      e.a = oe(e.a);
    }
    return e;
  }
  set rgb(e) {
    this._rgb = Mo(e);
  }
  rgbString() {
    if (this._valid) {
      return bd(this._rgb);
    } else {
      return undefined;
    }
  }
  hexString() {
    if (this._valid) {
      return rd(this._rgb);
    } else {
      return undefined;
    }
  }
  hslString() {
    if (this._valid) {
      return gd(this._rgb);
    } else {
      return undefined;
    }
  }
  mix(e, i) {
    if (e) {
      const n = this.rgb;
      const s = e.rgb;
      let r;
      const o = i === r ? 0.5 : i;
      const a = o * 2 - 1;
      const c = n.a - s.a;
      const l = ((a * c === -1 ? a : (a + c) / (1 + a * c)) + 1) / 2;
      r = 1 - l;
      n.r = l * n.r + r * s.r + 0.5 & 255;
      n.g = l * n.g + r * s.g + 0.5 & 255;
      n.b = l * n.b + r * s.b + 0.5 & 255;
      n.a = o * n.a + (1 - o) * s.a;
      this.rgb = n;
    }
    return this;
  }
  interpolate(e, i) {
    if (e) {
      this._rgb = yd(this._rgb, e._rgb, i);
    }
    return this;
  }
  clone() {
    return new Ni(this.rgb);
  }
  alpha(e) {
    this._rgb.a = ye(e);
    return this;
  }
  clearer(e) {
    const i = this._rgb;
    i.a *= 1 - e;
    return this;
  }
  greyscale() {
    const e = this._rgb;
    const i = Ki(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    e.r = e.g = e.b = i;
    return this;
  }
  opaquer(e) {
    const i = this._rgb;
    i.a *= 1 + e;
    return this;
  }
  negate() {
    const e = this._rgb;
    e.r = 255 - e.r;
    e.g = 255 - e.g;
    e.b = 255 - e.b;
    return this;
  }
  lighten(e) {
    hn(this._rgb, 2, e);
    return this;
  }
  darken(e) {
    hn(this._rgb, 2, -e);
    return this;
  }
  saturate(e) {
    hn(this._rgb, 1, e);
    return this;
  }
  desaturate(e) {
    hn(this._rgb, 1, -e);
    return this;
  }
  rotate(e) {
    dd(this._rgb, e);
    return this;
  }
} /*!
  * Chart.js v4.4.2
  * https://www.chartjs.org
  * (c) 2024 Chart.js Contributors
  * Released under the MIT License
  */
const vd = (() => {
  let t = 0;
  return () => t++;
})();
function it(t) {
  return t === null || typeof t === "undefined";
}
function lt(t) {
  if (Array.isArray && Array.isArray(t)) {
    return true;
  }
  const e = Object.prototype.toString.call(t);
  return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]";
}
function Q(t) {
  return t !== null && Object.prototype.toString.call(t) === "[object Object]";
}
function xt(t) {
  return (typeof t == "number" || t instanceof Number) && isFinite(+t);
}
function Ft(t, e) {
  if (xt(t)) {
    return t;
  } else {
    return e;
  }
}
function et(t, e) {
  if (typeof t === "undefined") {
    return e;
  } else {
    return t;
  }
}
const kd = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 : +t / e;
const Vl = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
function nt(t, e, i) {
  if (t && typeof t.call == "function") {
    return t.apply(i, e);
  }
}
function vt(t, e, i, n) {
  let s;
  let r;
  let o;
  if (lt(t)) {
    r = t.length;
    if (n) {
      for (s = r - 1; s >= 0; s--) {
        e.call(i, t[s], s);
      }
    } else {
      for (s = 0; s < r; s++) {
        e.call(i, t[s], s);
      }
    }
  } else if (Q(t)) {
    o = Object.keys(t);
    r = o.length;
    s = 0;
    for (; s < r; s++) {
      e.call(i, t[o[s]], o[s]);
    }
  }
}
function Do(t, e) {
  let i;
  let n;
  let s;
  let r;
  if (!t || !e || t.length !== e.length) {
    return false;
  }
  i = 0;
  n = t.length;
  for (; i < n; ++i) {
    s = t[i];
    r = e[i];
    if (s.datasetIndex !== r.datasetIndex || s.index !== r.index) {
      return false;
    }
  }
  return true;
}
function zn(t) {
  if (lt(t)) {
    return t.map(zn);
  }
  if (Q(t)) {
    const e = Object.create(null);
    const i = Object.keys(t);
    const n = i.length;
    let s = 0;
    for (; s < n; ++s) {
      e[i[s]] = zn(t[i[s]]);
    }
    return e;
  }
  return t;
}
function Wl(t) {
  return ["__proto__", "prototype", "constructor"].indexOf(t) === -1;
}
function Sd(t, e, i, n) {
  if (!Wl(t)) {
    return;
  }
  const s = e[t];
  const r = i[t];
  if (Q(s) && Q(r)) {
    Ui(s, r, n);
  } else {
    e[t] = zn(r);
  }
}
function Ui(t, e, i) {
  const n = lt(e) ? e : [e];
  const s = n.length;
  if (!Q(t)) {
    return t;
  }
  i = i || {};
  const r = i.merger || Sd;
  let o;
  for (let a = 0; a < s; ++a) {
    o = n[a];
    if (!Q(o)) {
      continue;
    }
    const c = Object.keys(o);
    for (let l = 0, h = c.length; l < h; ++l) {
      r(c[l], t, o, i);
    }
  }
  return t;
}
function Mi(t, e) {
  return Ui(t, e, {
    merger: Ed
  });
}
function Ed(t, e, i) {
  if (!Wl(t)) {
    return;
  }
  const n = e[t];
  const s = i[t];
  if (Q(n) && Q(s)) {
    Mi(n, s);
  } else if (!Object.prototype.hasOwnProperty.call(e, t)) {
    e[t] = zn(s);
  }
}
const To = {
  "": t => t,
  x: t => t.x,
  y: t => t.y
};
function Ad(t) {
  const e = t.split(".");
  const i = [];
  let n = "";
  for (const s of e) {
    n += s;
    if (n.endsWith("\\")) {
      n = n.slice(0, -1) + ".";
    } else {
      i.push(n);
      n = "";
    }
  }
  return i;
}
function Md(t) {
  const e = Ad(t);
  return i => {
    for (const n of e) {
      if (n === "") {
        break;
      }
      i = i && i[n];
    }
    return i;
  };
}
function ve(t, e) {
  return (To[e] ||= Md(e))(t);
}
function gr(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const Hi = t => typeof t !== "undefined";
const ke = t => typeof t == "function";
const Oo = (t, e) => {
  if (t.size !== e.size) {
    return false;
  }
  for (const i of t) {
    if (!e.has(i)) {
      return false;
    }
  }
  return true;
};
function Dd(t) {
  return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu";
}
const ut = Math.PI;
const At = ut * 2;
const Bn = Number.POSITIVE_INFINITY;
const Td = ut / 180;
const Mt = ut / 2;
const Se = ut / 4;
const Co = ut * 2 / 3;
const pe = Math.log10;
const we = Math.sign;
function kn(t, e, i) {
  return Math.abs(t - e) < i;
}
function Fo(t) {
  const e = Math.round(t);
  t = kn(t, e, t / 1000) ? e : t;
  const i = Math.pow(10, Math.floor(pe(t)));
  const n = t / i;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i;
}
function Od(t) {
  const e = [];
  const i = Math.sqrt(t);
  let n;
  for (n = 1; n < i; n++) {
    if (t % n === 0) {
      e.push(n);
      e.push(t / n);
    }
  }
  if (i === (i | 0)) {
    e.push(i);
  }
  e.sort((s, r) => s - r).pop();
  return e;
}
function Nn(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Cd(t, e) {
  const i = Math.round(t);
  return i - e <= t && i + e >= t;
}
function jl(t, e, i) {
  let n;
  let s;
  let r;
  n = 0;
  s = t.length;
  for (; n < s; n++) {
    r = t[n][i];
    if (!isNaN(r)) {
      e.min = Math.min(e.min, r);
      e.max = Math.max(e.max, r);
    }
  }
}
function $t(t) {
  return t * (ut / 180);
}
function pr(t) {
  return t * (180 / ut);
}
function Lo(t) {
  if (!xt(t)) {
    return;
  }
  let e = 1;
  let i = 0;
  while (Math.round(t * e) / e !== t) {
    e *= 10;
    i++;
  }
  return i;
}
function Fd(t, e) {
  const i = e.x - t.x;
  const n = e.y - t.y;
  const s = Math.sqrt(i * i + n * n);
  let r = Math.atan2(n, i);
  if (r < ut * -0.5) {
    r += At;
  }
  return {
    angle: r,
    distance: s
  };
}
function Kt(t) {
  return (t % At + At) % At;
}
function Ks(t, e, i, n) {
  const s = Kt(t);
  const r = Kt(e);
  const o = Kt(i);
  const a = Kt(r - s);
  const c = Kt(o - s);
  const l = Kt(s - r);
  const h = Kt(s - o);
  return s === r || s === o || n && r === o || a > c && l < h;
}
function le(t, e, i) {
  return Math.max(e, Math.min(i, t));
}
function Ld(t) {
  return le(t, -32768, 32767);
}
function Xe(t, e, i, n = 0.000001) {
  return t >= Math.min(e, i) - n && t <= Math.max(e, i) + n;
}
function _r(t, e, i) {
  i = i || (o => t[o] < e);
  let n = t.length - 1;
  let s = 0;
  let r;
  while (n - s > 1) {
    r = s + n >> 1;
    if (i(r)) {
      s = r;
    } else {
      n = r;
    }
  }
  return {
    lo: s,
    hi: n
  };
}
const Xs = (t, e, i, n) => _r(t, i, n ? s => {
  const r = t[s][e];
  return r < i || r === i && t[s + 1][e] === i;
} : s => t[s][e] < i);
const Rd = (t, e, i) => _r(t, i, n => t[n][e] >= i);
function Id(t, e, i) {
  let n = 0;
  let s = t.length;
  while (n < s && t[n] < e) {
    n++;
  }
  while (s > n && t[s - 1] > i) {
    s--;
  }
  if (n > 0 || s < t.length) {
    return t.slice(n, s);
  } else {
    return t;
  }
}
const Zl = ["push", "pop", "shift", "splice", "unshift"];
function Pd(t, e) {
  if (t._chartjs) {
    t._chartjs.listeners.push(e);
    return;
  }
  Object.defineProperty(t, "_chartjs", {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [e]
    }
  });
  Zl.forEach(i => {
    const n = "_onData" + gr(i);
    const s = t[i];
    Object.defineProperty(t, i, {
      configurable: true,
      enumerable: false,
      value(...r) {
        const o = s.apply(this, r);
        t._chartjs.listeners.forEach(a => {
          if (typeof a[n] == "function") {
            a[n](...r);
          }
        });
        return o;
      }
    });
  });
}
function Ro(t, e) {
  const i = t._chartjs;
  if (!i) {
    return;
  }
  const n = i.listeners;
  const s = n.indexOf(e);
  if (s !== -1) {
    n.splice(s, 1);
  }
  if (!(n.length > 0)) {
    Zl.forEach(r => {
      delete t[r];
    });
    delete t._chartjs;
  }
}
function Yl(t) {
  const e = new Set(t);
  if (e.size === t.length) {
    return t;
  } else {
    return Array.from(e);
  }
}
const Kl = function () {
  if (typeof window === "undefined") {
    return function (t) {
      return t();
    };
  } else {
    return window.requestAnimationFrame;
  }
}();
function Xl(t, e) {
  let i = [];
  let n = false;
  return function (...s) {
    i = s;
    if (!n) {
      n = true;
      Kl.call(window, () => {
        n = false;
        t.apply(e, i);
      });
    }
  };
}
function zd(t, e) {
  let i;
  return function (...n) {
    if (e) {
      clearTimeout(i);
      i = setTimeout(t, e, n);
    } else {
      t.apply(this, n);
    }
    return e;
  };
}
const mr = t => t === "start" ? "left" : t === "end" ? "right" : "center";
const kt = (t, e, i) => t === "start" ? e : t === "end" ? i : (e + i) / 2;
const Bd = (t, e, i, n) => t === (n ? "left" : "right") ? i : t === "center" ? (e + i) / 2 : e;
const fn = t => t === 0 || t === 1;
const Io = (t, e, i) => -(Math.pow(2, (t -= 1) * 10) * Math.sin((t - e) * At / i));
const Po = (t, e, i) => Math.pow(2, t * -10) * Math.sin((t - e) * At / i) + 1;
const Di = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => -t * (t - 2),
  easeInOutQuad: t => (t /= 0.5) < 1 ? t * 0.5 * t : (--t * (t - 2) - 1) * -0.5,
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (t -= 1) * t * t + 1,
  easeInOutCubic: t => (t /= 0.5) < 1 ? t * 0.5 * t * t : ((t -= 2) * t * t + 2) * 0.5,
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => -((t -= 1) * t * t * t - 1),
  easeInOutQuart: t => (t /= 0.5) < 1 ? t * 0.5 * t * t * t : ((t -= 2) * t * t * t - 2) * -0.5,
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
  easeInOutQuint: t => (t /= 0.5) < 1 ? t * 0.5 * t * t * t * t : ((t -= 2) * t * t * t * t + 2) * 0.5,
  easeInSine: t => -Math.cos(t * Mt) + 1,
  easeOutSine: t => Math.sin(t * Mt),
  easeInOutSine: t => (Math.cos(ut * t) - 1) * -0.5,
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, (t - 1) * 10),
  easeOutExpo: t => t === 1 ? 1 : -Math.pow(2, t * -10) + 1,
  easeInOutExpo: t => fn(t) ? t : t < 0.5 ? Math.pow(2, (t * 2 - 1) * 10) * 0.5 : (-Math.pow(2, (t * 2 - 1) * -10) + 2) * 0.5,
  easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: t => (t /= 0.5) < 1 ? (Math.sqrt(1 - t * t) - 1) * -0.5 : (Math.sqrt(1 - (t -= 2) * t) + 1) * 0.5,
  easeInElastic: t => fn(t) ? t : Io(t, 0.075, 0.3),
  easeOutElastic: t => fn(t) ? t : Po(t, 0.075, 0.3),
  easeInOutElastic(t) {
    if (fn(t)) {
      return t;
    } else if (t < 0.5) {
      return Io(t * 2, 0.1125, 0.45) * 0.5;
    } else {
      return 0.5 + Po(t * 2 - 1, 0.1125, 0.45) * 0.5;
    }
  },
  easeInBack(t) {
    return t * t * (t * 2.70158 - 1.70158);
  },
  easeOutBack(t) {
    return (t -= 1) * t * (t * 2.70158 + 1.70158) + 1;
  },
  easeInOutBack(t) {
    let e = 1.70158;
    if ((t /= 0.5) < 1) {
      return t * t * (((e *= 1.525) + 1) * t - e) * 0.5;
    } else {
      return ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2) * 0.5;
    }
  },
  easeInBounce: t => 1 - Di.easeOutBounce(1 - t),
  easeOutBounce(t) {
    if (t < 1 / 2.75) {
      return t * 7.5625 * t;
    } else if (t < 2 / 2.75) {
      return (t -= 1.5 / 2.75) * 7.5625 * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return (t -= 2.25 / 2.75) * 7.5625 * t + 0.9375;
    } else {
      return (t -= 2.625 / 2.75) * 7.5625 * t + 0.984375;
    }
  },
  easeInOutBounce: t => t < 0.5 ? Di.easeInBounce(t * 2) * 0.5 : Di.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function Gl(t) {
  if (t && typeof t == "object") {
    const e = t.toString();
    return e === "[object CanvasPattern]" || e === "[object CanvasGradient]";
  }
  return false;
}
function zo(t) {
  if (Gl(t)) {
    return t;
  } else {
    return new Ni(t);
  }
}
function ys(t) {
  if (Gl(t)) {
    return t;
  } else {
    return new Ni(t).saturate(0.5).darken(0.1).hexString();
  }
}
const Nd = ["x", "y", "borderWidth", "radius", "tension"];
const Ud = ["color", "borderColor", "backgroundColor"];
function Hd(t) {
  t.set("animation", {
    delay: undefined,
    duration: 1000,
    easing: "easeOutQuart",
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
  });
  t.describe("animation", {
    _fallback: false,
    _indexable: false,
    _scriptable: e => e !== "onProgress" && e !== "onComplete" && e !== "fn"
  });
  t.set("animations", {
    colors: {
      type: "color",
      properties: Ud
    },
    numbers: {
      type: "number",
      properties: Nd
    }
  });
  t.describe("animations", {
    _fallback: "animation"
  });
  t.set("transitions", {
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
          fn: e => e | 0
        }
      }
    }
  });
}
function $d(t) {
  t.set("layout", {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Bo = new Map();
function Vd(t, e) {
  e = e || {};
  const i = t + JSON.stringify(e);
  let n = Bo.get(i);
  if (!n) {
    n = new Intl.NumberFormat(t, e);
    Bo.set(i, n);
  }
  return n;
}
function Xi(t, e, i) {
  return Vd(e, i).format(t);
}
const ql = {
  values(t) {
    if (lt(t)) {
      return t;
    } else {
      return "" + t;
    }
  },
  numeric(t, e, i) {
    if (t === 0) {
      return "0";
    }
    const n = this.chart.options.locale;
    let s;
    let r = t;
    if (i.length > 1) {
      const l = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
      if (l < 0.0001 || l > 1000000000000000) {
        s = "scientific";
      }
      r = Wd(t, i);
    }
    const o = pe(Math.abs(r));
    const a = isNaN(o) ? 1 : Math.max(Math.min(Math.floor(o) * -1, 20), 0);
    const c = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    Object.assign(c, this.options.ticks.format);
    return Xi(t, n, c);
  },
  logarithmic(t, e, i) {
    if (t === 0) {
      return "0";
    }
    const n = i[e].significand || t / Math.pow(10, Math.floor(pe(t)));
    if ([1, 2, 3, 5, 10, 15].includes(n) || e > i.length * 0.8) {
      return ql.numeric.call(this, t, e, i);
    } else {
      return "";
    }
  }
};
function Wd(t, e) {
  let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  if (Math.abs(i) >= 1 && t !== Math.floor(t)) {
    i = t - Math.floor(t);
  }
  return i;
}
var qn = {
  formatters: ql
};
function jd(t) {
  t.set("scale", {
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
      tickWidth: (e, i) => i.lineWidth,
      tickColor: (e, i) => i.color,
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
      callback: qn.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: false,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  });
  t.route("scale.ticks", "color", "", "color");
  t.route("scale.grid", "color", "", "borderColor");
  t.route("scale.border", "color", "", "borderColor");
  t.route("scale.title", "color", "", "color");
  t.describe("scale", {
    _fallback: false,
    _scriptable: e => !e.startsWith("before") && !e.startsWith("after") && e !== "callback" && e !== "parser",
    _indexable: e => e !== "borderDash" && e !== "tickBorderDash" && e !== "dash"
  });
  t.describe("scales", {
    _fallback: "scale"
  });
  t.describe("scale.ticks", {
    _scriptable: e => e !== "backdropPadding" && e !== "callback",
    _indexable: e => e !== "backdropPadding"
  });
}
const Ne = Object.create(null);
const Gs = Object.create(null);
function Ti(t, e) {
  if (!e) {
    return t;
  }
  const i = e.split(".");
  for (let n = 0, s = i.length; n < s; ++n) {
    const r = i[n];
    t = t[r] ||= Object.create(null);
  }
  return t;
}
function ws(t, e, i) {
  if (typeof e == "string") {
    return Ui(Ti(t, e), i);
  } else {
    return Ui(Ti(t, ""), e);
  }
}
class Zd {
  constructor(e, i) {
    this.animation = undefined;
    this.backgroundColor = "rgba(0,0,0,0.1)";
    this.borderColor = "rgba(0,0,0,0.1)";
    this.color = "#666";
    this.datasets = {};
    this.devicePixelRatio = n => n.chart.platform.getDevicePixelRatio();
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
    this.hoverBackgroundColor = (n, s) => ys(s.backgroundColor);
    this.hoverBorderColor = (n, s) => ys(s.borderColor);
    this.hoverColor = (n, s) => ys(s.color);
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
    this.describe(e);
    this.apply(i);
  }
  set(e, i) {
    return ws(this, e, i);
  }
  get(e) {
    return Ti(this, e);
  }
  describe(e, i) {
    return ws(Gs, e, i);
  }
  override(e, i) {
    return ws(Ne, e, i);
  }
  route(e, i, n, s) {
    const r = Ti(this, e);
    const o = Ti(this, n);
    const a = "_" + i;
    Object.defineProperties(r, {
      [a]: {
        value: r[i],
        writable: true
      },
      [i]: {
        enumerable: true,
        get() {
          const c = this[a];
          const l = o[s];
          if (Q(c)) {
            return Object.assign({}, l, c);
          } else {
            return et(c, l);
          }
        },
        set(c) {
          this[a] = c;
        }
      }
    });
  }
  apply(e) {
    e.forEach(i => i(this));
  }
}
var ht = new Zd({
  _scriptable: t => !t.startsWith("on"),
  _indexable: t => t !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
}, [Hd, $d, jd]);
function Yd(t) {
  if (!t || it(t.size) || it(t.family)) {
    return null;
  } else {
    return (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
  }
}
function Un(t, e, i, n, s) {
  let r = e[s];
  if (!r) {
    r = e[s] = t.measureText(s).width;
    i.push(s);
  }
  if (r > n) {
    n = r;
  }
  return n;
}
function Kd(t, e, i, n) {
  n = n || {};
  let s = n.data = n.data || {};
  let r = n.garbageCollect = n.garbageCollect || [];
  if (n.font !== e) {
    s = n.data = {};
    r = n.garbageCollect = [];
    n.font = e;
  }
  t.save();
  t.font = e;
  let o = 0;
  const a = i.length;
  let c;
  let l;
  let h;
  let d;
  let g;
  for (c = 0; c < a; c++) {
    d = i[c];
    if (d != null && !lt(d)) {
      o = Un(t, s, r, o, d);
    } else if (lt(d)) {
      l = 0;
      h = d.length;
      for (; l < h; l++) {
        g = d[l];
        if (g != null && !lt(g)) {
          o = Un(t, s, r, o, g);
        }
      }
    }
  }
  t.restore();
  const p = r.length / 2;
  if (p > i.length) {
    for (c = 0; c < p; c++) {
      delete s[r[c]];
    }
    r.splice(0, p);
  }
  return o;
}
function Ee(t, e, i) {
  const n = t.currentDevicePixelRatio;
  const s = i !== 0 ? Math.max(i / 2, 0.5) : 0;
  return Math.round((e - s) * n) / n + s;
}
function No(t, e) {
  e = e || t.getContext("2d");
  e.save();
  e.resetTransform();
  e.clearRect(0, 0, t.width, t.height);
  e.restore();
}
function Xd(t, e, i, n, s) {
  let r;
  let o;
  let a;
  let c;
  let l;
  let h;
  let d;
  let g;
  const p = e.pointStyle;
  const b = e.rotation;
  const y = e.radius;
  let k = (b || 0) * Td;
  if (p && typeof p == "object" && (r = p.toString(), r === "[object HTMLImageElement]" || r === "[object HTMLCanvasElement]")) {
    t.save();
    t.translate(i, n);
    t.rotate(k);
    t.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height);
    t.restore();
    return;
  }
  if (!isNaN(y) && !(y <= 0)) {
    t.beginPath();
    switch (p) {
      default:
        if (s) {
          t.ellipse(i, n, s / 2, y, 0, 0, At);
        } else {
          t.arc(i, n, y, 0, At);
        }
        t.closePath();
        break;
      case "triangle":
        h = s ? s / 2 : y;
        t.moveTo(i + Math.sin(k) * h, n - Math.cos(k) * y);
        k += Co;
        t.lineTo(i + Math.sin(k) * h, n - Math.cos(k) * y);
        k += Co;
        t.lineTo(i + Math.sin(k) * h, n - Math.cos(k) * y);
        t.closePath();
        break;
      case "rectRounded":
        l = y * 0.516;
        c = y - l;
        o = Math.cos(k + Se) * c;
        d = Math.cos(k + Se) * (s ? s / 2 - l : c);
        a = Math.sin(k + Se) * c;
        g = Math.sin(k + Se) * (s ? s / 2 - l : c);
        t.arc(i - d, n - a, l, k - ut, k - Mt);
        t.arc(i + g, n - o, l, k - Mt, k);
        t.arc(i + d, n + a, l, k, k + Mt);
        t.arc(i - g, n + o, l, k + Mt, k + ut);
        t.closePath();
        break;
      case "rect":
        if (!b) {
          c = Math.SQRT1_2 * y;
          h = s ? s / 2 : c;
          t.rect(i - h, n - c, h * 2, c * 2);
          break;
        }
        k += Se;
      case "rectRot":
        d = Math.cos(k) * (s ? s / 2 : y);
        o = Math.cos(k) * y;
        a = Math.sin(k) * y;
        g = Math.sin(k) * (s ? s / 2 : y);
        t.moveTo(i - d, n - a);
        t.lineTo(i + g, n - o);
        t.lineTo(i + d, n + a);
        t.lineTo(i - g, n + o);
        t.closePath();
        break;
      case "crossRot":
        k += Se;
      case "cross":
        d = Math.cos(k) * (s ? s / 2 : y);
        o = Math.cos(k) * y;
        a = Math.sin(k) * y;
        g = Math.sin(k) * (s ? s / 2 : y);
        t.moveTo(i - d, n - a);
        t.lineTo(i + d, n + a);
        t.moveTo(i + g, n - o);
        t.lineTo(i - g, n + o);
        break;
      case "star":
        d = Math.cos(k) * (s ? s / 2 : y);
        o = Math.cos(k) * y;
        a = Math.sin(k) * y;
        g = Math.sin(k) * (s ? s / 2 : y);
        t.moveTo(i - d, n - a);
        t.lineTo(i + d, n + a);
        t.moveTo(i + g, n - o);
        t.lineTo(i - g, n + o);
        k += Se;
        d = Math.cos(k) * (s ? s / 2 : y);
        o = Math.cos(k) * y;
        a = Math.sin(k) * y;
        g = Math.sin(k) * (s ? s / 2 : y);
        t.moveTo(i - d, n - a);
        t.lineTo(i + d, n + a);
        t.moveTo(i + g, n - o);
        t.lineTo(i - g, n + o);
        break;
      case "line":
        o = s ? s / 2 : Math.cos(k) * y;
        a = Math.sin(k) * y;
        t.moveTo(i - o, n - a);
        t.lineTo(i + o, n + a);
        break;
      case "dash":
        t.moveTo(i, n);
        t.lineTo(i + Math.cos(k) * (s ? s / 2 : y), n + Math.sin(k) * y);
        break;
      case false:
        t.closePath();
        break;
    }
    t.fill();
    if (e.borderWidth > 0) {
      t.stroke();
    }
  }
}
function Ge(t, e, i) {
  i = i || 0.5;
  return !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i;
}
function xr(t, e) {
  t.save();
  t.beginPath();
  t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top);
  t.clip();
}
function br(t) {
  t.restore();
}
function Gd(t, e) {
  if (e.translation) {
    t.translate(e.translation[0], e.translation[1]);
  }
  if (!it(e.rotation)) {
    t.rotate(e.rotation);
  }
  if (e.color) {
    t.fillStyle = e.color;
  }
  if (e.textAlign) {
    t.textAlign = e.textAlign;
  }
  if (e.textBaseline) {
    t.textBaseline = e.textBaseline;
  }
}
function qd(t, e, i, n, s) {
  if (s.strikethrough || s.underline) {
    const r = t.measureText(n);
    const o = e - r.actualBoundingBoxLeft;
    const a = e + r.actualBoundingBoxRight;
    const c = i - r.actualBoundingBoxAscent;
    const l = i + r.actualBoundingBoxDescent;
    const h = s.strikethrough ? (c + l) / 2 : l;
    t.strokeStyle = t.fillStyle;
    t.beginPath();
    t.lineWidth = s.decorationWidth || 2;
    t.moveTo(o, h);
    t.lineTo(a, h);
    t.stroke();
  }
}
function Qd(t, e) {
  const i = t.fillStyle;
  t.fillStyle = e.color;
  t.fillRect(e.left, e.top, e.width, e.height);
  t.fillStyle = i;
}
function Ue(t, e, i, n, s, r = {}) {
  const o = lt(e) ? e : [e];
  const a = r.strokeWidth > 0 && r.strokeColor !== "";
  let c;
  let l;
  t.save();
  t.font = s.string;
  Gd(t, r);
  c = 0;
  for (; c < o.length; ++c) {
    l = o[c];
    if (r.backdrop) {
      Qd(t, r.backdrop);
    }
    if (a) {
      if (r.strokeColor) {
        t.strokeStyle = r.strokeColor;
      }
      if (!it(r.strokeWidth)) {
        t.lineWidth = r.strokeWidth;
      }
      t.strokeText(l, i, n, r.maxWidth);
    }
    t.fillText(l, i, n, r.maxWidth);
    qd(t, i, n, l, r);
    n += Number(s.lineHeight);
  }
  t.restore();
}
function yr(t, e) {
  const {
    x: i,
    y: n,
    w: s,
    h: r,
    radius: o
  } = e;
  t.arc(i + o.topLeft, n + o.topLeft, o.topLeft, ut * 1.5, ut, true);
  t.lineTo(i, n + r - o.bottomLeft);
  t.arc(i + o.bottomLeft, n + r - o.bottomLeft, o.bottomLeft, ut, Mt, true);
  t.lineTo(i + s - o.bottomRight, n + r);
  t.arc(i + s - o.bottomRight, n + r - o.bottomRight, o.bottomRight, Mt, 0, true);
  t.lineTo(i + s, n + o.topRight);
  t.arc(i + s - o.topRight, n + o.topRight, o.topRight, 0, -Mt, true);
  t.lineTo(i + o.topLeft, n);
}
const Jd = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const t0 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function e0(t, e) {
  const i = ("" + t).match(Jd);
  if (!i || i[1] === "normal") {
    return e * 1.2;
  }
  t = +i[2];
  switch (i[3]) {
    case "px":
      return t;
    case "%":
      t /= 100;
      break;
  }
  return e * t;
}
const i0 = t => +t || 0;
function Ql(t, e) {
  const i = {};
  const n = Q(e);
  const s = n ? Object.keys(e) : e;
  const r = Q(t) ? n ? o => et(t[o], t[e[o]]) : o => t[o] : () => t;
  for (const o of s) {
    i[o] = i0(r(o));
  }
  return i;
}
function Jl(t) {
  return Ql(t, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function wr(t) {
  return Ql(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function It(t) {
  const e = Jl(t);
  e.width = e.left + e.right;
  e.height = e.top + e.bottom;
  return e;
}
function Nt(t, e) {
  t = t || {};
  e = e || ht.font;
  let i = et(t.size, e.size);
  if (typeof i == "string") {
    i = parseInt(i, 10);
  }
  let n = et(t.style, e.style);
  if (n && !("" + n).match(t0)) {
    console.warn("Invalid font style specified: \"" + n + "\"");
    n = undefined;
  }
  const s = {
    family: et(t.family, e.family),
    lineHeight: e0(et(t.lineHeight, e.lineHeight), i),
    size: i,
    style: n,
    weight: et(t.weight, e.weight),
    string: ""
  };
  s.string = Yd(s);
  return s;
}
function un(t, e, i, n) {
  let s = true;
  let r;
  let o;
  let a;
  r = 0;
  o = t.length;
  for (; r < o; ++r) {
    a = t[r];
    if (a !== undefined && (e !== undefined && typeof a == "function" && (a = a(e), s = false), i !== undefined && lt(a) && (a = a[i % a.length], s = false), a !== undefined)) {
      if (n && !s) {
        n.cacheable = false;
      }
      return a;
    }
  }
}
function n0(t, e, i) {
  const {
    min: n,
    max: s
  } = t;
  const r = Vl(e, (s - n) / 2);
  const o = (a, c) => i && a === 0 ? 0 : a + c;
  return {
    min: o(n, -Math.abs(r)),
    max: o(s, r)
  };
}
function hi(t, e) {
  return Object.assign(Object.create(t), e);
}
function vr(t, e = [""], i, n, s = () => t[0]) {
  const r = i || t;
  if (typeof n === "undefined") {
    n = nc("_fallback", t);
  }
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: true,
    _scopes: t,
    _rootScopes: r,
    _fallback: n,
    _getTarget: s,
    override: a => vr([a, ...t], e, r, n)
  };
  return new Proxy(o, {
    deleteProperty(a, c) {
      delete a[c];
      delete a._keys;
      delete t[0][c];
      return true;
    },
    get(a, c) {
      return ec(a, c, () => f0(c, e, t, a));
    },
    getOwnPropertyDescriptor(a, c) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], c);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t[0]);
    },
    has(a, c) {
      return Ho(a).includes(c);
    },
    ownKeys(a) {
      return Ho(a);
    },
    set(a, c, l) {
      const h = a._storage ||= s();
      a[c] = h[c] = l;
      delete a._keys;
      return true;
    }
  });
}
function si(t, e, i, n) {
  const s = {
    _cacheable: false,
    _proxy: t,
    _context: e,
    _subProxy: i,
    _stack: new Set(),
    _descriptors: tc(t, n),
    setContext: r => si(t, r, i, n),
    override: r => si(t.override(r), e, i, n)
  };
  return new Proxy(s, {
    deleteProperty(r, o) {
      delete r[o];
      delete t[o];
      return true;
    },
    get(r, o, a) {
      return ec(r, o, () => r0(r, o, a));
    },
    getOwnPropertyDescriptor(r, o) {
      if (r._descriptors.allKeys) {
        if (Reflect.has(t, o)) {
          return {
            enumerable: true,
            configurable: true
          };
        } else {
          return undefined;
        }
      } else {
        return Reflect.getOwnPropertyDescriptor(t, o);
      }
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(t);
    },
    has(r, o) {
      return Reflect.has(t, o);
    },
    ownKeys() {
      return Reflect.ownKeys(t);
    },
    set(r, o, a) {
      t[o] = a;
      delete r[o];
      return true;
    }
  });
}
function tc(t, e = {
  scriptable: true,
  indexable: true
}) {
  const {
    _scriptable: i = e.scriptable,
    _indexable: n = e.indexable,
    _allKeys: s = e.allKeys
  } = t;
  return {
    allKeys: s,
    scriptable: i,
    indexable: n,
    isScriptable: ke(i) ? i : () => i,
    isIndexable: ke(n) ? n : () => n
  };
}
const s0 = (t, e) => t ? t + gr(e) : e;
const kr = (t, e) => Q(e) && t !== "adapters" && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function ec(t, e, i) {
  if (Object.prototype.hasOwnProperty.call(t, e)) {
    return t[e];
  }
  const n = i();
  t[e] = n;
  return n;
}
function r0(t, e, i) {
  const {
    _proxy: n,
    _context: s,
    _subProxy: r,
    _descriptors: o
  } = t;
  let a = n[e];
  if (ke(a) && o.isScriptable(e)) {
    a = o0(e, a, t, i);
  }
  if (lt(a) && a.length) {
    a = a0(e, a, t, o.isIndexable);
  }
  if (kr(e, a)) {
    a = si(a, s, r && r[e], o);
  }
  return a;
}
function o0(t, e, i, n) {
  const {
    _proxy: s,
    _context: r,
    _subProxy: o,
    _stack: a
  } = i;
  if (a.has(t)) {
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + t);
  }
  a.add(t);
  let c = e(r, o || n);
  a.delete(t);
  if (kr(t, c)) {
    c = Sr(s._scopes, s, t, c);
  }
  return c;
}
function a0(t, e, i, n) {
  const {
    _proxy: s,
    _context: r,
    _subProxy: o,
    _descriptors: a
  } = i;
  if (typeof r.index !== "undefined" && n(t)) {
    return e[r.index % e.length];
  }
  if (Q(e[0])) {
    const c = e;
    const l = s._scopes.filter(h => h !== c);
    e = [];
    for (const h of c) {
      const d = Sr(l, s, t, h);
      e.push(si(d, r, o && o[t], a));
    }
  }
  return e;
}
function ic(t, e, i) {
  if (ke(t)) {
    return t(e, i);
  } else {
    return t;
  }
}
const l0 = (t, e) => t === true ? e : typeof t == "string" ? ve(e, t) : undefined;
function c0(t, e, i, n, s) {
  for (const r of e) {
    const o = l0(i, r);
    if (o) {
      t.add(o);
      const a = ic(o._fallback, i, s);
      if (typeof a !== "undefined" && a !== i && a !== n) {
        return a;
      }
    } else if (o === false && typeof n !== "undefined" && i !== n) {
      return null;
    }
  }
  return false;
}
function Sr(t, e, i, n) {
  const s = e._rootScopes;
  const r = ic(e._fallback, i, n);
  const o = [...t, ...s];
  const a = new Set();
  a.add(n);
  let c = Uo(a, o, i, r || i, n);
  if (c === null || typeof r !== "undefined" && r !== i && (c = Uo(a, o, r, c, n), c === null)) {
    return false;
  } else {
    return vr(Array.from(a), [""], s, r, () => h0(e, i, n));
  }
}
function Uo(t, e, i, n, s) {
  while (i) {
    i = c0(t, e, i, n, s);
  }
  return i;
}
function h0(t, e, i) {
  const n = t._getTarget();
  if (!(e in n)) {
    n[e] = {};
  }
  const s = n[e];
  if (lt(s) && Q(i)) {
    return i;
  } else {
    return s || {};
  }
}
function f0(t, e, i, n) {
  let s;
  for (const r of e) {
    s = nc(s0(r, t), i);
    if (typeof s !== "undefined") {
      if (kr(t, s)) {
        return Sr(i, n, t, s);
      } else {
        return s;
      }
    }
  }
}
function nc(t, e) {
  for (const i of e) {
    if (!i) {
      continue;
    }
    const n = i[t];
    if (typeof n !== "undefined") {
      return n;
    }
  }
}
function Ho(t) {
  let e = t._keys;
  e ||= t._keys = u0(t._scopes);
  return e;
}
function u0(t) {
  const e = new Set();
  for (const i of t) {
    for (const n of Object.keys(i).filter(s => !s.startsWith("_"))) {
      e.add(n);
    }
  }
  return Array.from(e);
}
function d0(t, e, i, n) {
  const {
    iScale: s
  } = t;
  const {
    key: r = "r"
  } = this._parsing;
  const o = new Array(n);
  let a;
  let c;
  let l;
  let h;
  a = 0;
  c = n;
  for (; a < c; ++a) {
    l = a + i;
    h = e[l];
    o[a] = {
      r: s.parse(ve(h, r), l)
    };
  }
  return o;
}
function Er() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function Ar(t) {
  let e = t.parentNode;
  if (e && e.toString() === "[object ShadowRoot]") {
    e = e.host;
  }
  return e;
}
function Hn(t, e, i) {
  let n;
  if (typeof t == "string") {
    n = parseInt(t, 10);
    if (t.indexOf("%") !== -1) {
      n = n / 100 * e.parentNode[i];
    }
  } else {
    n = t;
  }
  return n;
}
const Qn = t => t.ownerDocument.defaultView.getComputedStyle(t, null);
function g0(t, e) {
  return Qn(t).getPropertyValue(e);
}
const p0 = ["top", "right", "bottom", "left"];
function Le(t, e, i) {
  const n = {};
  i = i ? "-" + i : "";
  for (let s = 0; s < 4; s++) {
    const r = p0[s];
    n[r] = parseFloat(t[e + "-" + r + i]) || 0;
  }
  n.width = n.left + n.right;
  n.height = n.top + n.bottom;
  return n;
}
const _0 = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
function m0(t, e) {
  const i = t.touches;
  const n = i && i.length ? i[0] : t;
  const {
    offsetX: s,
    offsetY: r
  } = n;
  let o = false;
  let a;
  let c;
  if (_0(s, r, t.target)) {
    a = s;
    c = r;
  } else {
    const l = e.getBoundingClientRect();
    a = n.clientX - l.left;
    c = n.clientY - l.top;
    o = true;
  }
  return {
    x: a,
    y: c,
    box: o
  };
}
function De(t, e) {
  if ("native" in t) {
    return t;
  }
  const {
    canvas: i,
    currentDevicePixelRatio: n
  } = e;
  const s = Qn(i);
  const r = s.boxSizing === "border-box";
  const o = Le(s, "padding");
  const a = Le(s, "border", "width");
  const {
    x: c,
    y: l,
    box: h
  } = m0(t, i);
  const d = o.left + (h && a.left);
  const g = o.top + (h && a.top);
  let {
    width: p,
    height: b
  } = e;
  if (r) {
    p -= o.width + a.width;
    b -= o.height + a.height;
  }
  return {
    x: Math.round((c - d) / p * i.width / n),
    y: Math.round((l - g) / b * i.height / n)
  };
}
function x0(t, e, i) {
  let n;
  let s;
  if (e === undefined || i === undefined) {
    const r = Ar(t);
    if (!r) {
      e = t.clientWidth;
      i = t.clientHeight;
    } else {
      const o = r.getBoundingClientRect();
      const a = Qn(r);
      const c = Le(a, "border", "width");
      const l = Le(a, "padding");
      e = o.width - l.width - c.width;
      i = o.height - l.height - c.height;
      n = Hn(a.maxWidth, r, "clientWidth");
      s = Hn(a.maxHeight, r, "clientHeight");
    }
  }
  return {
    width: e,
    height: i,
    maxWidth: n || Bn,
    maxHeight: s || Bn
  };
}
const dn = t => Math.round(t * 10) / 10;
function b0(t, e, i, n) {
  const s = Qn(t);
  const r = Le(s, "margin");
  const o = Hn(s.maxWidth, t, "clientWidth") || Bn;
  const a = Hn(s.maxHeight, t, "clientHeight") || Bn;
  const c = x0(t, e, i);
  let {
    width: l,
    height: h
  } = c;
  if (s.boxSizing === "content-box") {
    const g = Le(s, "border", "width");
    const p = Le(s, "padding");
    l -= p.width + g.width;
    h -= p.height + g.height;
  }
  l = Math.max(0, l - r.width);
  h = Math.max(0, n ? l / n : h - r.height);
  l = dn(Math.min(l, o, c.maxWidth));
  h = dn(Math.min(h, a, c.maxHeight));
  if (l && !h) {
    h = dn(l / 2);
  }
  if ((e !== undefined || i !== undefined) && n && c.height && h > c.height) {
    h = c.height;
    l = dn(Math.floor(h * n));
  }
  return {
    width: l,
    height: h
  };
}
function $o(t, e, i) {
  const n = e || 1;
  const s = Math.floor(t.height * n);
  const r = Math.floor(t.width * n);
  t.height = Math.floor(t.height);
  t.width = Math.floor(t.width);
  const o = t.canvas;
  if (o.style && (i || !o.style.height && !o.style.width)) {
    o.style.height = `${t.height}px`;
    o.style.width = `${t.width}px`;
  }
  if (t.currentDevicePixelRatio !== n || o.height !== s || o.width !== r) {
    t.currentDevicePixelRatio = n;
    o.height = s;
    o.width = r;
    t.ctx.setTransform(n, 0, 0, n, 0, 0);
    return true;
  } else {
    return false;
  }
}
const y0 = function () {
  let t = false;
  try {
    const e = {
      get passive() {
        t = true;
        return false;
      }
    };
    if (Er()) {
      window.addEventListener("test", null, e);
      window.removeEventListener("test", null, e);
    }
  } catch {}
  return t;
}();
function Vo(t, e) {
  const i = g0(t, e);
  const n = i && i.match(/^(\d+)(\.\d+)?px$/);
  if (n) {
    return +n[1];
  } else {
    return undefined;
  }
}
const w0 = function (t, e) {
  return {
    x(i) {
      return t + t + e - i;
    },
    setWidth(i) {
      e = i;
    },
    textAlign(i) {
      if (i === "center") {
        return i;
      } else if (i === "right") {
        return "left";
      } else {
        return "right";
      }
    },
    xPlus(i, n) {
      return i - n;
    },
    leftForLtr(i, n) {
      return i - n;
    }
  };
};
const v0 = function () {
  return {
    x(t) {
      return t;
    },
    setWidth(t) {},
    textAlign(t) {
      return t;
    },
    xPlus(t, e) {
      return t + e;
    },
    leftForLtr(t, e) {
      return t;
    }
  };
};
function vs(t, e, i) {
  if (t) {
    return w0(e, i);
  } else {
    return v0();
  }
}
function k0(t, e) {
  let i;
  let n;
  if (e === "ltr" || e === "rtl") {
    i = t.canvas.style;
    n = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")];
    i.setProperty("direction", e, "important");
    t.prevTextDirection = n;
  }
}
function S0(t, e) {
  if (e !== undefined) {
    delete t.prevTextDirection;
    t.canvas.style.setProperty("direction", e[0], e[1]);
  }
} /*!
  * Chart.js v4.4.2
  * https://www.chartjs.org
  * (c) 2024 Chart.js Contributors
  * Released under the MIT License
  */
class E0 {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _notify(e, i, n, s) {
    const r = i.listeners[s];
    const o = i.duration;
    r.forEach(a => a({
      chart: e,
      initial: i.initial,
      numSteps: o,
      currentStep: Math.min(n - i.start, o)
    }));
  }
  _refresh() {
    if (!this._request) {
      this._running = true;
      this._request = Kl.call(window, () => {
        this._update();
        this._request = null;
        if (this._running) {
          this._refresh();
        }
      });
    }
  }
  _update(e = Date.now()) {
    let i = 0;
    this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length) {
        return;
      }
      const r = n.items;
      let o = r.length - 1;
      let a = false;
      let c;
      for (; o >= 0; --o) {
        c = r[o];
        if (c._active) {
          if (c._total > n.duration) {
            n.duration = c._total;
          }
          c.tick(e);
          a = true;
        } else {
          r[o] = r[r.length - 1];
          r.pop();
        }
      }
      if (a) {
        s.draw();
        this._notify(s, n, e, "progress");
      }
      if (!r.length) {
        n.running = false;
        this._notify(s, n, e, "complete");
        n.initial = false;
      }
      i += r.length;
    });
    this._lastDate = e;
    if (i === 0) {
      this._running = false;
    }
  }
  _getAnims(e) {
    const i = this._charts;
    let n = i.get(e);
    if (!n) {
      n = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      i.set(e, n);
    }
    return n;
  }
  listen(e, i, n) {
    this._getAnims(e).listeners[i].push(n);
  }
  add(e, i) {
    if (!!i && !!i.length) {
      this._getAnims(e).items.push(...i);
    }
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const i = this._charts.get(e);
    if (i) {
      i.running = true;
      i.start = Date.now();
      i.duration = i.items.reduce((n, s) => Math.max(n, s._duration), 0);
      this._refresh();
    }
  }
  running(e) {
    if (!this._running) {
      return false;
    }
    const i = this._charts.get(e);
    return !!i && !!i.running && !!i.items.length;
  }
  stop(e) {
    const i = this._charts.get(e);
    if (!i || !i.items.length) {
      return;
    }
    const n = i.items;
    let s = n.length - 1;
    for (; s >= 0; --s) {
      n[s].cancel();
    }
    i.items = [];
    this._notify(e, i, Date.now(), "complete");
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var ne = new E0();
const Wo = "transparent";
const A0 = {
  boolean(t, e, i) {
    if (i > 0.5) {
      return e;
    } else {
      return t;
    }
  },
  color(t, e, i) {
    const n = zo(t || Wo);
    const s = n.valid && zo(e || Wo);
    if (s && s.valid) {
      return s.mix(n, i).hexString();
    } else {
      return e;
    }
  },
  number(t, e, i) {
    return t + (e - t) * i;
  }
};
class M0 {
  constructor(e, i, n, s) {
    const r = i[n];
    s = un([e.to, s, r, e.from]);
    const o = un([e.from, r, s]);
    this._active = true;
    this._fn = e.fn || A0[e.type || typeof o];
    this._easing = Di[e.easing] || Di.linear;
    this._start = Math.floor(Date.now() + (e.delay || 0));
    this._duration = this._total = Math.floor(e.duration);
    this._loop = !!e.loop;
    this._target = i;
    this._prop = n;
    this._from = o;
    this._to = s;
    this._promises = undefined;
  }
  active() {
    return this._active;
  }
  update(e, i, n) {
    if (this._active) {
      this._notify(false);
      const s = this._target[this._prop];
      const r = n - this._start;
      const o = this._duration - r;
      this._start = n;
      this._duration = Math.floor(Math.max(o, e.duration));
      this._total += r;
      this._loop = !!e.loop;
      this._to = un([e.to, i, s, e.from]);
      this._from = un([e.from, s, i]);
    }
  }
  cancel() {
    if (this._active) {
      this.tick(Date.now());
      this._active = false;
      this._notify(false);
    }
  }
  tick(e) {
    const i = e - this._start;
    const n = this._duration;
    const s = this._prop;
    const r = this._from;
    const o = this._loop;
    const a = this._to;
    let c;
    this._active = r !== a && (o || i < n);
    if (!this._active) {
      this._target[s] = a;
      this._notify(true);
      return;
    }
    if (i < 0) {
      this._target[s] = r;
      return;
    }
    c = i / n % 2;
    c = o && c > 1 ? 2 - c : c;
    c = this._easing(Math.min(1, Math.max(0, c)));
    this._target[s] = this._fn(r, a, c);
  }
  wait() {
    const e = this._promises ||= [];
    return new Promise((i, n) => {
      e.push({
        res: i,
        rej: n
      });
    });
  }
  _notify(e) {
    const i = e ? "res" : "rej";
    const n = this._promises || [];
    for (let s = 0; s < n.length; s++) {
      n[s][i]();
    }
  }
}
class D0 {
  constructor(e, i) {
    this._chart = e;
    this._properties = new Map();
    this.configure(i);
  }
  configure(e) {
    if (!Q(e)) {
      return;
    }
    const i = Object.keys(ht.animation);
    const n = this._properties;
    Object.getOwnPropertyNames(e).forEach(s => {
      const r = e[s];
      if (!Q(r)) {
        return;
      }
      const o = {};
      for (const a of i) {
        o[a] = r[a];
      }
      (lt(r.properties) && r.properties || [s]).forEach(a => {
        if (a === s || !n.has(a)) {
          n.set(a, o);
        }
      });
    });
  }
  _animateOptions(e, i) {
    const n = i.options;
    const s = O0(e, n);
    if (!s) {
      return [];
    }
    const r = this._createAnimations(s, n);
    if (n.$shared) {
      T0(e.options.$animations, n).then(() => {
        e.options = n;
      }, () => {});
    }
    return r;
  }
  _createAnimations(e, i) {
    const n = this._properties;
    const s = [];
    const r = e.$animations ||= {};
    const o = Object.keys(i);
    const a = Date.now();
    let c;
    for (c = o.length - 1; c >= 0; --c) {
      const l = o[c];
      if (l.charAt(0) === "$") {
        continue;
      }
      if (l === "options") {
        s.push(...this._animateOptions(e, i));
        continue;
      }
      const h = i[l];
      let d = r[l];
      const g = n.get(l);
      if (d) {
        if (g && d.active()) {
          d.update(g, h, a);
          continue;
        } else {
          d.cancel();
        }
      }
      if (!g || !g.duration) {
        e[l] = h;
        continue;
      }
      r[l] = d = new M0(g, e, l, h);
      s.push(d);
    }
    return s;
  }
  update(e, i) {
    if (this._properties.size === 0) {
      Object.assign(e, i);
      return;
    }
    const n = this._createAnimations(e, i);
    if (n.length) {
      ne.add(this._chart, n);
      return true;
    }
  }
}
function T0(t, e) {
  const i = [];
  const n = Object.keys(e);
  for (let s = 0; s < n.length; s++) {
    const r = t[n[s]];
    if (r && r.active()) {
      i.push(r.wait());
    }
  }
  return Promise.all(i);
}
function O0(t, e) {
  if (!e) {
    return;
  }
  let i = t.options;
  if (!i) {
    t.options = e;
    return;
  }
  if (i.$shared) {
    t.options = i = Object.assign({}, i, {
      $shared: false,
      $animations: {}
    });
  }
  return i;
}
function jo(t, e) {
  const i = t && t.options || {};
  const n = i.reverse;
  const s = i.min === undefined ? e : 0;
  const r = i.max === undefined ? e : 0;
  return {
    start: n ? r : s,
    end: n ? s : r
  };
}
function C0(t, e, i) {
  if (i === false) {
    return false;
  }
  const n = jo(t, i);
  const s = jo(e, i);
  return {
    top: s.end,
    right: n.end,
    bottom: s.start,
    left: n.start
  };
}
function F0(t) {
  let e;
  let i;
  let n;
  let s;
  if (Q(t)) {
    e = t.top;
    i = t.right;
    n = t.bottom;
    s = t.left;
  } else {
    e = i = n = s = t;
  }
  return {
    top: e,
    right: i,
    bottom: n,
    left: s,
    disabled: t === false
  };
}
function sc(t, e) {
  const i = [];
  const n = t._getSortedDatasetMetas(e);
  let s;
  let r;
  s = 0;
  r = n.length;
  for (; s < r; ++s) {
    i.push(n[s].index);
  }
  return i;
}
function Zo(t, e, i, n = {}) {
  const s = t.keys;
  const r = n.mode === "single";
  let o;
  let a;
  let c;
  let l;
  if (e !== null) {
    o = 0;
    a = s.length;
    for (; o < a; ++o) {
      c = +s[o];
      if (c === i) {
        if (n.all) {
          continue;
        }
        break;
      }
      l = t.values[c];
      if (xt(l) && (r || e === 0 || we(e) === we(l))) {
        e += l;
      }
    }
    return e;
  }
}
function L0(t) {
  const e = Object.keys(t);
  const i = new Array(e.length);
  let n;
  let s;
  let r;
  n = 0;
  s = e.length;
  for (; n < s; ++n) {
    r = e[n];
    i[n] = {
      x: r,
      y: t[r]
    };
  }
  return i;
}
function Yo(t, e) {
  const i = t && t.options.stacked;
  return i || i === undefined && e.stack !== undefined;
}
function R0(t, e, i) {
  return `${t.id}.${e.id}.${i.stack || i.type}`;
}
function I0(t) {
  const {
    min: e,
    max: i,
    minDefined: n,
    maxDefined: s
  } = t.getUserBounds();
  return {
    min: n ? e : Number.NEGATIVE_INFINITY,
    max: s ? i : Number.POSITIVE_INFINITY
  };
}
function P0(t, e, i) {
  const n = t[e] ||= {};
  return n[i] ||= {};
}
function Ko(t, e, i, n) {
  for (const s of e.getMatchingVisibleMetas(n).reverse()) {
    const r = t[s.index];
    if (i && r > 0 || !i && r < 0) {
      return s.index;
    }
  }
  return null;
}
function Xo(t, e) {
  const {
    chart: i,
    _cachedMeta: n
  } = t;
  const s = i._stacks ||= {};
  const {
    iScale: r,
    vScale: o,
    index: a
  } = n;
  const c = r.axis;
  const l = o.axis;
  const h = R0(r, o, n);
  const d = e.length;
  let g;
  for (let p = 0; p < d; ++p) {
    const b = e[p];
    const {
      [c]: y,
      [l]: k
    } = b;
    const E = b._stacks ||= {};
    g = E[l] = P0(s, h, y);
    g[a] = k;
    g._top = Ko(g, o, true, n.type);
    g._bottom = Ko(g, o, false, n.type);
    const D = g._visualValues ||= {};
    D[a] = k;
  }
}
function ks(t, e) {
  const i = t.scales;
  return Object.keys(i).filter(n => i[n].axis === e).shift();
}
function z0(t, e) {
  return hi(t, {
    active: false,
    dataset: undefined,
    datasetIndex: e,
    index: e,
    mode: "default",
    type: "dataset"
  });
}
function B0(t, e, i) {
  return hi(t, {
    active: false,
    dataIndex: e,
    parsed: undefined,
    raw: undefined,
    element: i,
    index: e,
    mode: "default",
    type: "data"
  });
}
function di(t, e) {
  const i = t.controller.index;
  const n = t.vScale && t.vScale.axis;
  if (n) {
    e = e || t._parsed;
    for (const s of e) {
      const r = s._stacks;
      if (!r || r[n] === undefined || r[n][i] === undefined) {
        return;
      }
      delete r[n][i];
      if (r[n]._visualValues !== undefined && r[n]._visualValues[i] !== undefined) {
        delete r[n]._visualValues[i];
      }
    }
  }
}
const Ss = t => t === "reset" || t === "none";
const Go = (t, e) => e ? t : Object.assign({}, t);
const N0 = (t, e, i) => t && !e.hidden && e._stacked && {
  keys: sc(i, true),
  values: null
};
class Jn {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(e, i) {
    this.chart = e;
    this._ctx = e.ctx;
    this.index = i;
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
    const e = this._cachedMeta;
    this.configure();
    this.linkScales();
    e._stacked = Yo(e.vScale, e);
    this.addElements();
    if (this.options.fill && !this.chart.isPluginEnabled("filler")) {
      console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
  }
  updateIndex(e) {
    if (this.index !== e) {
      di(this._cachedMeta);
    }
    this.index = e;
  }
  linkScales() {
    const e = this.chart;
    const i = this._cachedMeta;
    const n = this.getDataset();
    const s = (d, g, p, b) => d === "x" ? g : d === "r" ? b : p;
    const r = i.xAxisID = et(n.xAxisID, ks(e, "x"));
    const o = i.yAxisID = et(n.yAxisID, ks(e, "y"));
    const a = i.rAxisID = et(n.rAxisID, ks(e, "r"));
    const c = i.indexAxis;
    const l = i.iAxisID = s(c, r, o, a);
    const h = i.vAxisID = s(c, o, r, a);
    i.xScale = this.getScaleForId(r);
    i.yScale = this.getScaleForId(o);
    i.rScale = this.getScaleForId(a);
    i.iScale = this.getScaleForId(l);
    i.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const i = this._cachedMeta;
    if (e === i.iScale) {
      return i.vScale;
    } else {
      return i.iScale;
    }
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const e = this._cachedMeta;
    if (this._data) {
      Ro(this._data, this);
    }
    if (e._stacked) {
      di(e);
    }
  }
  _dataCheck() {
    const e = this.getDataset();
    const i = e.data ||= [];
    const n = this._data;
    if (Q(i)) {
      this._data = L0(i);
    } else if (n !== i) {
      if (n) {
        Ro(n, this);
        const s = this._cachedMeta;
        di(s);
        s._parsed = [];
      }
      if (i && Object.isExtensible(i)) {
        Pd(i, this);
      }
      this._syncList = [];
      this._data = i;
    }
  }
  addElements() {
    const e = this._cachedMeta;
    this._dataCheck();
    if (this.datasetElementType) {
      e.dataset = new this.datasetElementType();
    }
  }
  buildOrUpdateElements(e) {
    const i = this._cachedMeta;
    const n = this.getDataset();
    let s = false;
    this._dataCheck();
    const r = i._stacked;
    i._stacked = Yo(i.vScale, i);
    if (i.stack !== n.stack) {
      s = true;
      di(i);
      i.stack = n.stack;
    }
    this._resyncElements(e);
    if (s || r !== i._stacked) {
      Xo(this, i._parsed);
    }
  }
  configure() {
    const e = this.chart.config;
    const i = e.datasetScopeKeys(this._type);
    const n = e.getOptionScopes(this.getDataset(), i, true);
    this.options = e.createResolver(n, this.getContext());
    this._parsing = this.options.parsing;
    this._cachedDataOpts = {};
  }
  parse(e, i) {
    const {
      _cachedMeta: n,
      _data: s
    } = this;
    const {
      iScale: r,
      _stacked: o
    } = n;
    const a = r.axis;
    let c = e === 0 && i === s.length ? true : n._sorted;
    let l = e > 0 && n._parsed[e - 1];
    let h;
    let d;
    let g;
    if (this._parsing === false) {
      n._parsed = s;
      n._sorted = true;
      g = s;
    } else {
      if (lt(s[e])) {
        g = this.parseArrayData(n, s, e, i);
      } else if (Q(s[e])) {
        g = this.parseObjectData(n, s, e, i);
      } else {
        g = this.parsePrimitiveData(n, s, e, i);
      }
      const p = () => d[a] === null || l && d[a] < l[a];
      for (h = 0; h < i; ++h) {
        n._parsed[h + e] = d = g[h];
        if (c) {
          if (p()) {
            c = false;
          }
          l = d;
        }
      }
      n._sorted = c;
    }
    if (o) {
      Xo(this, g);
    }
  }
  parsePrimitiveData(e, i, n, s) {
    const {
      iScale: r,
      vScale: o
    } = e;
    const a = r.axis;
    const c = o.axis;
    const l = r.getLabels();
    const h = r === o;
    const d = new Array(s);
    let g;
    let p;
    let b;
    g = 0;
    p = s;
    for (; g < p; ++g) {
      b = g + n;
      d[g] = {
        [a]: h || r.parse(l[b], b),
        [c]: o.parse(i[b], b)
      };
    }
    return d;
  }
  parseArrayData(e, i, n, s) {
    const {
      xScale: r,
      yScale: o
    } = e;
    const a = new Array(s);
    let c;
    let l;
    let h;
    let d;
    c = 0;
    l = s;
    for (; c < l; ++c) {
      h = c + n;
      d = i[h];
      a[c] = {
        x: r.parse(d[0], h),
        y: o.parse(d[1], h)
      };
    }
    return a;
  }
  parseObjectData(e, i, n, s) {
    const {
      xScale: r,
      yScale: o
    } = e;
    const {
      xAxisKey: a = "x",
      yAxisKey: c = "y"
    } = this._parsing;
    const l = new Array(s);
    let h;
    let d;
    let g;
    let p;
    h = 0;
    d = s;
    for (; h < d; ++h) {
      g = h + n;
      p = i[g];
      l[h] = {
        x: r.parse(ve(p, a), g),
        y: o.parse(ve(p, c), g)
      };
    }
    return l;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, i, n) {
    const s = this.chart;
    const r = this._cachedMeta;
    const o = i[e.axis];
    const a = {
      keys: sc(s, true),
      values: i._stacks[e.axis]._visualValues
    };
    return Zo(a, o, r.index, {
      mode: n
    });
  }
  updateRangeFromParsed(e, i, n, s) {
    const r = n[i.axis];
    let o = r === null ? NaN : r;
    const a = s && n._stacks[i.axis];
    if (s && a) {
      s.values = a;
      o = Zo(s, r, this._cachedMeta.index);
    }
    e.min = Math.min(e.min, o);
    e.max = Math.max(e.max, o);
  }
  getMinMax(e, i) {
    const n = this._cachedMeta;
    const s = n._parsed;
    const r = n._sorted && e === n.iScale;
    const o = s.length;
    const a = this._getOtherScale(e);
    const c = N0(i, n, this.chart);
    const l = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    const {
      min: h,
      max: d
    } = I0(a);
    let g;
    let p;
    function b() {
      p = s[g];
      const y = p[a.axis];
      return !xt(p[e.axis]) || h > y || d < y;
    }
    for (g = 0; g < o && (!!b() || !(this.updateRangeFromParsed(l, e, p, c), r)); ++g);
    if (r) {
      for (g = o - 1; g >= 0; --g) {
        if (!b()) {
          this.updateRangeFromParsed(l, e, p, c);
          break;
        }
      }
    }
    return l;
  }
  getAllParsedValues(e) {
    const i = this._cachedMeta._parsed;
    const n = [];
    let s;
    let r;
    let o;
    s = 0;
    r = i.length;
    for (; s < r; ++s) {
      o = i[s][e.axis];
      if (xt(o)) {
        n.push(o);
      }
    }
    return n;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(e) {
    const i = this._cachedMeta;
    const n = i.iScale;
    const s = i.vScale;
    const r = this.getParsed(e);
    return {
      label: n ? "" + n.getLabelForValue(r[n.axis]) : "",
      value: s ? "" + s.getLabelForValue(r[s.axis]) : ""
    };
  }
  _update(e) {
    const i = this._cachedMeta;
    this.update(e || "default");
    i._clip = F0(et(this.options.clip, C0(i.xScale, i.yScale, this.getMaxOverflow())));
  }
  update(e) {}
  draw() {
    const e = this._ctx;
    const i = this.chart;
    const n = this._cachedMeta;
    const s = n.data || [];
    const r = i.chartArea;
    const o = [];
    const a = this._drawStart || 0;
    const c = this._drawCount || s.length - a;
    const l = this.options.drawActiveElementsOnTop;
    let h;
    if (n.dataset) {
      n.dataset.draw(e, r, a, c);
    }
    h = a;
    for (; h < a + c; ++h) {
      const d = s[h];
      if (!d.hidden) {
        if (d.active && l) {
          o.push(d);
        } else {
          d.draw(e, r);
        }
      }
    }
    for (h = 0; h < o.length; ++h) {
      o[h].draw(e, r);
    }
  }
  getStyle(e, i) {
    const n = i ? "active" : "default";
    if (e === undefined && this._cachedMeta.dataset) {
      return this.resolveDatasetElementOptions(n);
    } else {
      return this.resolveDataElementOptions(e || 0, n);
    }
  }
  getContext(e, i, n) {
    const s = this.getDataset();
    let r;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[e];
      r = o.$context ||= B0(this.getContext(), e, o);
      r.parsed = this.getParsed(e);
      r.raw = s.data[e];
      r.index = r.dataIndex = e;
    } else {
      r = this.$context ||= z0(this.chart.getContext(), this.index);
      r.dataset = s;
      r.index = r.datasetIndex = this.index;
    }
    r.active = !!i;
    r.mode = n;
    return r;
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, i) {
    return this._resolveElementOptions(this.dataElementType.id, i, e);
  }
  _resolveElementOptions(e, i = "default", n) {
    const s = i === "active";
    const r = this._cachedDataOpts;
    const o = e + "-" + i;
    const a = r[o];
    const c = this.enableOptionSharing && Hi(n);
    if (a) {
      return Go(a, c);
    }
    const l = this.chart.config;
    const h = l.datasetElementScopeKeys(this._type, e);
    const d = s ? [`${e}Hover`, "hover", e, ""] : [e, ""];
    const g = l.getOptionScopes(this.getDataset(), h);
    const p = Object.keys(ht.elements[e]);
    const b = () => this.getContext(n, s, i);
    const y = l.resolveNamedOptions(g, p, b, d);
    if (y.$shared) {
      y.$shared = c;
      r[o] = Object.freeze(Go(y, c));
    }
    return y;
  }
  _resolveAnimations(e, i, n) {
    const s = this.chart;
    const r = this._cachedDataOpts;
    const o = `animation-${i}`;
    const a = r[o];
    if (a) {
      return a;
    }
    let c;
    if (s.options.animation !== false) {
      const h = this.chart.config;
      const d = h.datasetAnimationScopeKeys(this._type, i);
      const g = h.getOptionScopes(this.getDataset(), d);
      c = h.createResolver(g, this.getContext(e, n, i));
    }
    const l = new D0(s, c && c.animations);
    if (c && c._cacheable) {
      r[o] = Object.freeze(l);
    }
    return l;
  }
  getSharedOptions(e) {
    if (e.$shared) {
      return this._sharedOptions ||= Object.assign({}, e);
    }
  }
  includeOptions(e, i) {
    return !i || Ss(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, i) {
    const n = this.resolveDataElementOptions(e, i);
    const s = this._sharedOptions;
    const r = this.getSharedOptions(n);
    const o = this.includeOptions(i, r) || r !== s;
    this.updateSharedOptions(r, i, n);
    return {
      sharedOptions: r,
      includeOptions: o
    };
  }
  updateElement(e, i, n, s) {
    if (Ss(s)) {
      Object.assign(e, n);
    } else {
      this._resolveAnimations(i, s).update(e, n);
    }
  }
  updateSharedOptions(e, i, n) {
    if (e && !Ss(i)) {
      this._resolveAnimations(undefined, i).update(e, n);
    }
  }
  _setStyle(e, i, n, s) {
    e.active = s;
    const r = this.getStyle(i, s);
    this._resolveAnimations(i, n, s).update(e, {
      options: !s && this.getSharedOptions(r) || r
    });
  }
  removeHoverStyle(e, i, n) {
    this._setStyle(e, n, "active", false);
  }
  setHoverStyle(e, i, n) {
    this._setStyle(e, n, "active", true);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    if (e) {
      this._setStyle(e, undefined, "active", false);
    }
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    if (e) {
      this._setStyle(e, undefined, "active", true);
    }
  }
  _resyncElements(e) {
    const i = this._data;
    const n = this._cachedMeta.data;
    for (const [a, c, l] of this._syncList) {
      this[a](c, l);
    }
    this._syncList = [];
    const s = n.length;
    const r = i.length;
    const o = Math.min(r, s);
    if (o) {
      this.parse(0, o);
    }
    if (r > s) {
      this._insertElements(s, r - s, e);
    } else if (r < s) {
      this._removeElements(r, s - r);
    }
  }
  _insertElements(e, i, n = true) {
    const s = this._cachedMeta;
    const r = s.data;
    const o = e + i;
    let a;
    const c = l => {
      l.length += i;
      a = l.length - 1;
      for (; a >= o; a--) {
        l[a] = l[a - i];
      }
    };
    c(r);
    a = e;
    for (; a < o; ++a) {
      r[a] = new this.dataElementType();
    }
    if (this._parsing) {
      c(s._parsed);
    }
    this.parse(e, i);
    if (n) {
      this.updateElements(r, e, i, "reset");
    }
  }
  updateElements(e, i, n, s) {}
  _removeElements(e, i) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(e, i);
      if (n._stacked) {
        di(n, s);
      }
    }
    n.data.splice(e, i);
  }
  _sync(e) {
    if (this._parsing) {
      this._syncList.push(e);
    } else {
      const [i, n, s] = e;
      this[i](n, s);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(e, i) {
    if (i) {
      this._sync(["_removeElements", e, i]);
    }
    const n = arguments.length - 2;
    if (n) {
      this._sync(["_insertElements", e, n]);
    }
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
function U0(t, e) {
  if (!t._cache.$bar) {
    const i = t.getMatchingVisibleMetas(e);
    let n = [];
    for (let s = 0, r = i.length; s < r; s++) {
      n = n.concat(i[s].controller.getAllParsedValues(t));
    }
    t._cache.$bar = Yl(n.sort((s, r) => s - r));
  }
  return t._cache.$bar;
}
function H0(t) {
  const e = t.iScale;
  const i = U0(e, t.type);
  let n = e._length;
  let s;
  let r;
  let o;
  let a;
  const c = () => {
    if (o !== 32767 && o !== -32768) {
      if (Hi(a)) {
        n = Math.min(n, Math.abs(o - a) || n);
      }
      a = o;
    }
  };
  s = 0;
  r = i.length;
  for (; s < r; ++s) {
    o = e.getPixelForValue(i[s]);
    c();
  }
  a = undefined;
  s = 0;
  r = e.ticks.length;
  for (; s < r; ++s) {
    o = e.getPixelForTick(s);
    c();
  }
  return n;
}
function $0(t, e, i, n) {
  const s = i.barThickness;
  let r;
  let o;
  if (it(s)) {
    r = e.min * i.categoryPercentage;
    o = i.barPercentage;
  } else {
    r = s * n;
    o = 1;
  }
  return {
    chunk: r / n,
    ratio: o,
    start: e.pixels[t] - r / 2
  };
}
function V0(t, e, i, n) {
  const s = e.pixels;
  const r = s[t];
  let o = t > 0 ? s[t - 1] : null;
  let a = t < s.length - 1 ? s[t + 1] : null;
  const c = i.categoryPercentage;
  if (o === null) {
    o = r - (a === null ? e.end - e.start : a - r);
  }
  if (a === null) {
    a = r + r - o;
  }
  const l = r - (r - Math.min(o, a)) / 2 * c;
  return {
    chunk: Math.abs(a - o) / 2 * c / n,
    ratio: i.barPercentage,
    start: l
  };
}
function W0(t, e, i, n) {
  const s = i.parse(t[0], n);
  const r = i.parse(t[1], n);
  const o = Math.min(s, r);
  const a = Math.max(s, r);
  let c = o;
  let l = a;
  if (Math.abs(o) > Math.abs(a)) {
    c = a;
    l = o;
  }
  e[i.axis] = l;
  e._custom = {
    barStart: c,
    barEnd: l,
    start: s,
    end: r,
    min: o,
    max: a
  };
}
function rc(t, e, i, n) {
  if (lt(t)) {
    W0(t, e, i, n);
  } else {
    e[i.axis] = i.parse(t, n);
  }
  return e;
}
function qo(t, e, i, n) {
  const s = t.iScale;
  const r = t.vScale;
  const o = s.getLabels();
  const a = s === r;
  const c = [];
  let l;
  let h;
  let d;
  let g;
  l = i;
  h = i + n;
  for (; l < h; ++l) {
    g = e[l];
    d = {};
    d[s.axis] = a || s.parse(o[l], l);
    c.push(rc(g, d, r, l));
  }
  return c;
}
function Es(t) {
  return t && t.barStart !== undefined && t.barEnd !== undefined;
}
function j0(t, e, i) {
  if (t !== 0) {
    return we(t);
  } else {
    return (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
  }
}
function Z0(t) {
  let e;
  let i;
  let n;
  let s;
  let r;
  if (t.horizontal) {
    e = t.base > t.x;
    i = "left";
    n = "right";
  } else {
    e = t.base < t.y;
    i = "bottom";
    n = "top";
  }
  if (e) {
    s = "end";
    r = "start";
  } else {
    s = "start";
    r = "end";
  }
  return {
    start: i,
    end: n,
    reverse: e,
    top: s,
    bottom: r
  };
}
function Y0(t, e, i, n) {
  let s = e.borderSkipped;
  const r = {};
  if (!s) {
    t.borderSkipped = r;
    return;
  }
  if (s === true) {
    t.borderSkipped = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
    return;
  }
  const {
    start: o,
    end: a,
    reverse: c,
    top: l,
    bottom: h
  } = Z0(t);
  if (s === "middle" && i) {
    t.enableBorderRadius = true;
    if ((i._top || 0) === n) {
      s = l;
    } else if ((i._bottom || 0) === n) {
      s = h;
    } else {
      r[Qo(h, o, a, c)] = true;
      s = l;
    }
  }
  r[Qo(s, o, a, c)] = true;
  t.borderSkipped = r;
}
function Qo(t, e, i, n) {
  if (n) {
    t = K0(t, e, i);
    t = Jo(t, i, e);
  } else {
    t = Jo(t, e, i);
  }
  return t;
}
function K0(t, e, i) {
  if (t === e) {
    return i;
  } else if (t === i) {
    return e;
  } else {
    return t;
  }
}
function Jo(t, e, i) {
  if (t === "start") {
    return e;
  } else if (t === "end") {
    return i;
  } else {
    return t;
  }
}
function X0(t, {
  inflateAmount: e
}, i) {
  t.inflateAmount = e === "auto" ? i === 1 ? 0.33 : 0 : e;
}
class G0 extends Jn {
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
  parsePrimitiveData(e, i, n, s) {
    return qo(e, i, n, s);
  }
  parseArrayData(e, i, n, s) {
    return qo(e, i, n, s);
  }
  parseObjectData(e, i, n, s) {
    const {
      iScale: r,
      vScale: o
    } = e;
    const {
      xAxisKey: a = "x",
      yAxisKey: c = "y"
    } = this._parsing;
    const l = r.axis === "x" ? a : c;
    const h = o.axis === "x" ? a : c;
    const d = [];
    let g;
    let p;
    let b;
    let y;
    g = n;
    p = n + s;
    for (; g < p; ++g) {
      y = i[g];
      b = {};
      b[r.axis] = r.parse(ve(y, l), g);
      d.push(rc(ve(y, h), b, o, g));
    }
    return d;
  }
  updateRangeFromParsed(e, i, n, s) {
    super.updateRangeFromParsed(e, i, n, s);
    const r = n._custom;
    if (r && i === this._cachedMeta.vScale) {
      e.min = Math.min(e.min, r.min);
      e.max = Math.max(e.max, r.max);
    }
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(e) {
    const i = this._cachedMeta;
    const {
      iScale: n,
      vScale: s
    } = i;
    const r = this.getParsed(e);
    const o = r._custom;
    const a = Es(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(r[s.axis]);
    return {
      label: "" + n.getLabelForValue(r[n.axis]),
      value: a
    };
  }
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
    const e = this._cachedMeta;
    e.stack = this.getDataset().stack;
  }
  update(e) {
    const i = this._cachedMeta;
    this.updateElements(i.data, 0, i.data.length, e);
  }
  updateElements(e, i, n, s) {
    const r = s === "reset";
    const {
      index: o,
      _cachedMeta: {
        vScale: a
      }
    } = this;
    const c = a.getBasePixel();
    const l = a.isHorizontal();
    const h = this._getRuler();
    const {
      sharedOptions: d,
      includeOptions: g
    } = this._getSharedOptions(i, s);
    for (let p = i; p < i + n; p++) {
      const b = this.getParsed(p);
      const y = r || it(b[a.axis]) ? {
        base: c,
        head: c
      } : this._calculateBarValuePixels(p);
      const k = this._calculateBarIndexPixels(p, h);
      const E = (b._stacks || {})[a.axis];
      const D = {
        horizontal: l,
        base: y.base,
        enableBorderRadius: !E || Es(b._custom) || o === E._top || o === E._bottom,
        x: l ? y.head : k.center,
        y: l ? k.center : y.head,
        height: l ? k.size : Math.abs(y.size),
        width: l ? Math.abs(y.size) : k.size
      };
      if (g) {
        D.options = d || this.resolveDataElementOptions(p, e[p].active ? "active" : s);
      }
      const z = D.options || e[p].options;
      Y0(D, z, E, o);
      X0(D, z, h.ratio);
      this.updateElement(e[p], p, D, s);
    }
  }
  _getStacks(e, i) {
    const {
      iScale: n
    } = this._cachedMeta;
    const s = n.getMatchingVisibleMetas(this._type).filter(c => c.controller.options.grouped);
    const r = n.options.stacked;
    const o = [];
    const a = c => {
      const l = c.controller.getParsed(i);
      const h = l && l[c.vScale.axis];
      if (it(h) || isNaN(h)) {
        return true;
      }
    };
    for (const c of s) {
      if ((i === undefined || !a(c)) && ((r === false || o.indexOf(c.stack) === -1 || r === undefined && c.stack === undefined) && o.push(c.stack), c.index === e)) {
        break;
      }
    }
    if (!o.length) {
      o.push(undefined);
    }
    return o;
  }
  _getStackCount(e) {
    return this._getStacks(undefined, e).length;
  }
  _getStackIndex(e, i, n) {
    const s = this._getStacks(e, n);
    const r = i !== undefined ? s.indexOf(i) : -1;
    if (r === -1) {
      return s.length - 1;
    } else {
      return r;
    }
  }
  _getRuler() {
    const e = this.options;
    const i = this._cachedMeta;
    const n = i.iScale;
    const s = [];
    let r;
    let o;
    r = 0;
    o = i.data.length;
    for (; r < o; ++r) {
      s.push(n.getPixelForValue(this.getParsed(r)[n.axis], r));
    }
    const a = e.barThickness;
    return {
      min: a || H0(i),
      pixels: s,
      start: n._startPixel,
      end: n._endPixel,
      stackCount: this._getStackCount(),
      scale: n,
      grouped: e.grouped,
      ratio: a ? 1 : e.categoryPercentage * e.barPercentage
    };
  }
  _calculateBarValuePixels(e) {
    const {
      _cachedMeta: {
        vScale: i,
        _stacked: n,
        index: s
      },
      options: {
        base: r,
        minBarLength: o
      }
    } = this;
    const a = r || 0;
    const c = this.getParsed(e);
    const l = c._custom;
    const h = Es(l);
    let d = c[i.axis];
    let g = 0;
    let p = n ? this.applyStack(i, c, n) : d;
    let b;
    let y;
    if (p !== d) {
      g = p - d;
      p = d;
    }
    if (h) {
      d = l.barStart;
      p = l.barEnd - l.barStart;
      if (d !== 0 && we(d) !== we(l.barEnd)) {
        g = 0;
      }
      g += d;
    }
    const k = !it(r) && !h ? r : g;
    let E = i.getPixelForValue(k);
    if (this.chart.getDataVisibility(e)) {
      b = i.getPixelForValue(g + p);
    } else {
      b = E;
    }
    y = b - E;
    if (Math.abs(y) < o) {
      y = j0(y, i, a) * o;
      if (d === a) {
        E -= y / 2;
      }
      const D = i.getPixelForDecimal(0);
      const z = i.getPixelForDecimal(1);
      const M = Math.min(D, z);
      const R = Math.max(D, z);
      E = Math.max(Math.min(E, R), M);
      b = E + y;
      if (n && !h) {
        c._stacks[i.axis]._visualValues[s] = i.getValueForPixel(b) - i.getValueForPixel(E);
      }
    }
    if (E === i.getPixelForValue(a)) {
      const D = we(y) * i.getLineWidthForValue(a) / 2;
      E += D;
      y -= D;
    }
    return {
      size: y,
      base: E,
      head: b,
      center: b + y / 2
    };
  }
  _calculateBarIndexPixels(e, i) {
    const n = i.scale;
    const s = this.options;
    const r = s.skipNull;
    const o = et(s.maxBarThickness, Infinity);
    let a;
    let c;
    if (i.grouped) {
      const l = r ? this._getStackCount(e) : i.stackCount;
      const h = s.barThickness === "flex" ? V0(e, i, s, l) : $0(e, i, s, l);
      const d = this._getStackIndex(this.index, this._cachedMeta.stack, r ? e : undefined);
      a = h.start + h.chunk * d + h.chunk / 2;
      c = Math.min(o, h.chunk * h.ratio);
    } else {
      a = n.getPixelForValue(this.getParsed(e)[n.axis], e);
      c = Math.min(o, i.min * i.ratio);
    }
    return {
      base: a - c / 2,
      head: a + c / 2,
      center: a,
      size: c
    };
  }
  draw() {
    const e = this._cachedMeta;
    const i = e.vScale;
    const n = e.data;
    const s = n.length;
    let r = 0;
    for (; r < s; ++r) {
      if (this.getParsed(r)[i.axis] !== null) {
        n[r].draw(this._ctx);
      }
    }
  }
}
function q0(t, e, i) {
  let n = 1;
  let s = 1;
  let r = 0;
  let o = 0;
  if (e < At) {
    const a = t;
    const c = a + e;
    const l = Math.cos(a);
    const h = Math.sin(a);
    const d = Math.cos(c);
    const g = Math.sin(c);
    const p = (z, M, R) => Ks(z, a, c, true) ? 1 : Math.max(M, M * i, R, R * i);
    const b = (z, M, R) => Ks(z, a, c, true) ? -1 : Math.min(M, M * i, R, R * i);
    const y = p(0, l, d);
    const k = p(Mt, h, g);
    const E = b(ut, l, d);
    const D = b(ut + Mt, h, g);
    n = (y - E) / 2;
    s = (k - D) / 2;
    r = -(y + E) / 2;
    o = -(k + D) / 2;
  }
  return {
    ratioX: n,
    ratioY: s,
    offsetX: r,
    offsetY: o
  };
}
class Q0 extends Jn {
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
    _scriptable: e => e !== "spacing",
    _indexable: e => e !== "spacing" && !e.startsWith("borderDash") && !e.startsWith("hoverBorderDash")
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(e) {
            const i = e.data;
            if (i.labels.length && i.datasets.length) {
              const {
                labels: {
                  pointStyle: n,
                  color: s
                }
              } = e.legend.options;
              return i.labels.map((r, o) => {
                const c = e.getDatasetMeta(0).controller.getStyle(o);
                return {
                  text: r,
                  fillStyle: c.backgroundColor,
                  strokeStyle: c.borderColor,
                  fontColor: s,
                  lineWidth: c.borderWidth,
                  pointStyle: n,
                  hidden: !e.getDataVisibility(o),
                  index: o
                };
              });
            }
            return [];
          }
        },
        onClick(e, i, n) {
          n.chart.toggleDataVisibility(i.index);
          n.chart.update();
        }
      }
    }
  };
  constructor(e, i) {
    super(e, i);
    this.enableOptionSharing = true;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.offsetX = undefined;
    this.offsetY = undefined;
  }
  linkScales() {}
  parse(e, i) {
    const n = this.getDataset().data;
    const s = this._cachedMeta;
    if (this._parsing === false) {
      s._parsed = n;
    } else {
      let r = c => +n[c];
      if (Q(n[e])) {
        const {
          key: c = "value"
        } = this._parsing;
        r = l => +ve(n[l], c);
      }
      let o;
      let a;
      o = e;
      a = e + i;
      for (; o < a; ++o) {
        s._parsed[o] = r(o);
      }
    }
  }
  _getRotation() {
    return $t(this.options.rotation - 90);
  }
  _getCircumference() {
    return $t(this.options.circumference);
  }
  _getRotationExtents() {
    let e = At;
    let i = -At;
    for (let n = 0; n < this.chart.data.datasets.length; ++n) {
      if (this.chart.isDatasetVisible(n) && this.chart.getDatasetMeta(n).type === this._type) {
        const s = this.chart.getDatasetMeta(n).controller;
        const r = s._getRotation();
        const o = s._getCircumference();
        e = Math.min(e, r);
        i = Math.max(i, r + o);
      }
    }
    return {
      rotation: e,
      circumference: i - e
    };
  }
  update(e) {
    const i = this.chart;
    const {
      chartArea: n
    } = i;
    const s = this._cachedMeta;
    const r = s.data;
    const o = this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing;
    const a = Math.max((Math.min(n.width, n.height) - o) / 2, 0);
    const c = Math.min(kd(this.options.cutout, a), 1);
    const l = this._getRingWeight(this.index);
    const {
      circumference: h,
      rotation: d
    } = this._getRotationExtents();
    const {
      ratioX: g,
      ratioY: p,
      offsetX: b,
      offsetY: y
    } = q0(d, h, c);
    const k = (n.width - o) / g;
    const E = (n.height - o) / p;
    const D = Math.max(Math.min(k, E) / 2, 0);
    const z = Vl(this.options.radius, D);
    const M = Math.max(z * c, 0);
    const R = (z - M) / this._getVisibleDatasetWeightTotal();
    this.offsetX = b * z;
    this.offsetY = y * z;
    s.total = this.calculateTotal();
    this.outerRadius = z - R * this._getRingWeightOffset(this.index);
    this.innerRadius = Math.max(this.outerRadius - R * l, 0);
    this.updateElements(r, 0, r.length, e);
  }
  _circumference(e, i) {
    const n = this.options;
    const s = this._cachedMeta;
    const r = this._getCircumference();
    if (i && n.animation.animateRotate || !this.chart.getDataVisibility(e) || s._parsed[e] === null || s.data[e].hidden) {
      return 0;
    } else {
      return this.calculateCircumference(s._parsed[e] * r / At);
    }
  }
  updateElements(e, i, n, s) {
    const r = s === "reset";
    const o = this.chart;
    const a = o.chartArea;
    const l = o.options.animation;
    const h = (a.left + a.right) / 2;
    const d = (a.top + a.bottom) / 2;
    const g = r && l.animateScale;
    const p = g ? 0 : this.innerRadius;
    const b = g ? 0 : this.outerRadius;
    const {
      sharedOptions: y,
      includeOptions: k
    } = this._getSharedOptions(i, s);
    let E = this._getRotation();
    let D;
    for (D = 0; D < i; ++D) {
      E += this._circumference(D, r);
    }
    for (D = i; D < i + n; ++D) {
      const z = this._circumference(D, r);
      const M = e[D];
      const R = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: E,
        endAngle: E + z,
        circumference: z,
        outerRadius: b,
        innerRadius: p
      };
      if (k) {
        R.options = y || this.resolveDataElementOptions(D, M.active ? "active" : s);
      }
      E += z;
      this.updateElement(M, D, R, s);
    }
  }
  calculateTotal() {
    const e = this._cachedMeta;
    const i = e.data;
    let n = 0;
    let s;
    for (s = 0; s < i.length; s++) {
      const r = e._parsed[s];
      if (r !== null && !isNaN(r) && this.chart.getDataVisibility(s) && !i[s].hidden) {
        n += Math.abs(r);
      }
    }
    return n;
  }
  calculateCircumference(e) {
    const i = this._cachedMeta.total;
    if (i > 0 && !isNaN(e)) {
      return At * (Math.abs(e) / i);
    } else {
      return 0;
    }
  }
  getLabelAndValue(e) {
    const i = this._cachedMeta;
    const n = this.chart;
    const s = n.data.labels || [];
    const r = Xi(i._parsed[e], n.options.locale);
    return {
      label: s[e] || "",
      value: r
    };
  }
  getMaxBorderWidth(e) {
    let i = 0;
    const n = this.chart;
    let s;
    let r;
    let o;
    let a;
    let c;
    if (!e) {
      s = 0;
      r = n.data.datasets.length;
      for (; s < r; ++s) {
        if (n.isDatasetVisible(s)) {
          o = n.getDatasetMeta(s);
          e = o.data;
          a = o.controller;
          break;
        }
      }
    }
    if (!e) {
      return 0;
    }
    s = 0;
    r = e.length;
    for (; s < r; ++s) {
      c = a.resolveDataElementOptions(s);
      if (c.borderAlign !== "inner") {
        i = Math.max(i, c.borderWidth || 0, c.hoverBorderWidth || 0);
      }
    }
    return i;
  }
  getMaxOffset(e) {
    let i = 0;
    for (let n = 0, s = e.length; n < s; ++n) {
      const r = this.resolveDataElementOptions(n);
      i = Math.max(i, r.offset || 0, r.hoverOffset || 0);
    }
    return i;
  }
  _getRingWeightOffset(e) {
    let i = 0;
    for (let n = 0; n < e; ++n) {
      if (this.chart.isDatasetVisible(n)) {
        i += this._getRingWeight(n);
      }
    }
    return i;
  }
  _getRingWeight(e) {
    return Math.max(et(this.chart.data.datasets[e].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class J0 extends Jn {
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
          generateLabels(e) {
            const i = e.data;
            if (i.labels.length && i.datasets.length) {
              const {
                labels: {
                  pointStyle: n,
                  color: s
                }
              } = e.legend.options;
              return i.labels.map((r, o) => {
                const c = e.getDatasetMeta(0).controller.getStyle(o);
                return {
                  text: r,
                  fillStyle: c.backgroundColor,
                  strokeStyle: c.borderColor,
                  fontColor: s,
                  lineWidth: c.borderWidth,
                  pointStyle: n,
                  hidden: !e.getDataVisibility(o),
                  index: o
                };
              });
            }
            return [];
          }
        },
        onClick(e, i, n) {
          n.chart.toggleDataVisibility(i.index);
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
  constructor(e, i) {
    super(e, i);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
  }
  getLabelAndValue(e) {
    const i = this._cachedMeta;
    const n = this.chart;
    const s = n.data.labels || [];
    const r = Xi(i._parsed[e].r, n.options.locale);
    return {
      label: s[e] || "",
      value: r
    };
  }
  parseObjectData(e, i, n, s) {
    return d0.bind(this)(e, i, n, s);
  }
  update(e) {
    const i = this._cachedMeta.data;
    this._updateRadius();
    this.updateElements(i, 0, i.length, e);
  }
  getMinMax() {
    const e = this._cachedMeta;
    const i = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    e.data.forEach((n, s) => {
      const r = this.getParsed(s).r;
      if (!isNaN(r) && this.chart.getDataVisibility(s)) {
        if (r < i.min) {
          i.min = r;
        }
        if (r > i.max) {
          i.max = r;
        }
      }
    });
    return i;
  }
  _updateRadius() {
    const e = this.chart;
    const i = e.chartArea;
    const n = e.options;
    const s = Math.min(i.right - i.left, i.bottom - i.top);
    const r = Math.max(s / 2, 0);
    const o = Math.max(n.cutoutPercentage ? r / 100 * n.cutoutPercentage : 1, 0);
    const a = (r - o) / e.getVisibleDatasetCount();
    this.outerRadius = r - a * this.index;
    this.innerRadius = this.outerRadius - a;
  }
  updateElements(e, i, n, s) {
    const r = s === "reset";
    const o = this.chart;
    const c = o.options.animation;
    const l = this._cachedMeta.rScale;
    const h = l.xCenter;
    const d = l.yCenter;
    const g = l.getIndexAngle(0) - ut * 0.5;
    let p = g;
    let b;
    const y = 360 / this.countVisibleElements();
    for (b = 0; b < i; ++b) {
      p += this._computeAngle(b, s, y);
    }
    for (b = i; b < i + n; b++) {
      const k = e[b];
      let E = p;
      let D = p + this._computeAngle(b, s, y);
      let z = o.getDataVisibility(b) ? l.getDistanceFromCenterForValue(this.getParsed(b).r) : 0;
      p = D;
      if (r) {
        if (c.animateScale) {
          z = 0;
        }
        if (c.animateRotate) {
          E = D = g;
        }
      }
      const M = {
        x: h,
        y: d,
        innerRadius: 0,
        outerRadius: z,
        startAngle: E,
        endAngle: D,
        options: this.resolveDataElementOptions(b, k.active ? "active" : s)
      };
      this.updateElement(k, b, M, s);
    }
  }
  countVisibleElements() {
    const e = this._cachedMeta;
    let i = 0;
    e.data.forEach((n, s) => {
      if (!isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s)) {
        i++;
      }
    });
    return i;
  }
  _computeAngle(e, i, n) {
    if (this.chart.getDataVisibility(e)) {
      return $t(this.resolveDataElementOptions(e, i).angle || n);
    } else {
      return 0;
    }
  }
}
function Ae() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Mr {
  static override(e) {
    Object.assign(Mr.prototype, e);
  }
  options;
  constructor(e) {
    this.options = e || {};
  }
  init() {}
  formats() {
    return Ae();
  }
  parse() {
    return Ae();
  }
  format() {
    return Ae();
  }
  add() {
    return Ae();
  }
  diff() {
    return Ae();
  }
  startOf() {
    return Ae();
  }
  endOf() {
    return Ae();
  }
}
var tg = {
  _date: Mr
};
function eg(t, e, i, n) {
  const {
    controller: s,
    data: r,
    _sorted: o
  } = t;
  const a = s._cachedMeta.iScale;
  if (a && e === a.axis && e !== "r" && o && r.length) {
    const c = a._reversePixels ? Rd : Xs;
    if (n) {
      if (s._sharedOptions) {
        const l = r[0];
        const h = typeof l.getRange == "function" && l.getRange(e);
        if (h) {
          const d = c(r, e, i - h);
          const g = c(r, e, i + h);
          return {
            lo: d.lo,
            hi: g.hi
          };
        }
      }
    } else {
      return c(r, e, i);
    }
  }
  return {
    lo: 0,
    hi: r.length - 1
  };
}
function Gi(t, e, i, n, s) {
  const r = t.getSortedVisibleDatasetMetas();
  const o = i[e];
  for (let a = 0, c = r.length; a < c; ++a) {
    const {
      index: l,
      data: h
    } = r[a];
    const {
      lo: d,
      hi: g
    } = eg(r[a], e, o, s);
    for (let p = d; p <= g; ++p) {
      const b = h[p];
      if (!b.skip) {
        n(b, l, p);
      }
    }
  }
}
function ig(t) {
  const e = t.indexOf("x") !== -1;
  const i = t.indexOf("y") !== -1;
  return function (n, s) {
    const r = e ? Math.abs(n.x - s.x) : 0;
    const o = i ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
  };
}
function As(t, e, i, n, s) {
  const r = [];
  if (!!s || !!t.isPointInArea(e)) {
    Gi(t, i, e, function (a, c, l) {
      if (!!s || !!Ge(a, t.chartArea, 0)) {
        if (a.inRange(e.x, e.y, n)) {
          r.push({
            element: a,
            datasetIndex: c,
            index: l
          });
        }
      }
    }, true);
  }
  return r;
}
function ng(t, e, i, n) {
  let s = [];
  function r(o, a, c) {
    const {
      startAngle: l,
      endAngle: h
    } = o.getProps(["startAngle", "endAngle"], n);
    const {
      angle: d
    } = Fd(o, {
      x: e.x,
      y: e.y
    });
    if (Ks(d, l, h)) {
      s.push({
        element: o,
        datasetIndex: a,
        index: c
      });
    }
  }
  Gi(t, i, e, r);
  return s;
}
function sg(t, e, i, n, s, r) {
  let o = [];
  const a = ig(i);
  let c = Number.POSITIVE_INFINITY;
  function l(h, d, g) {
    const p = h.inRange(e.x, e.y, s);
    if (n && !p) {
      return;
    }
    const b = h.getCenterPoint(s);
    if (!r && !t.isPointInArea(b) && !p) {
      return;
    }
    const k = a(e, b);
    if (k < c) {
      o = [{
        element: h,
        datasetIndex: d,
        index: g
      }];
      c = k;
    } else if (k === c) {
      o.push({
        element: h,
        datasetIndex: d,
        index: g
      });
    }
  }
  Gi(t, i, e, l);
  return o;
}
function Ms(t, e, i, n, s, r) {
  if (!r && !t.isPointInArea(e)) {
    return [];
  } else if (i === "r" && !n) {
    return ng(t, e, i, s);
  } else {
    return sg(t, e, i, n, s, r);
  }
}
function ta(t, e, i, n, s) {
  const r = [];
  const o = i === "x" ? "inXRange" : "inYRange";
  let a = false;
  Gi(t, i, e, (c, l, h) => {
    if (c[o](e[i], s)) {
      r.push({
        element: c,
        datasetIndex: l,
        index: h
      });
      a = a || c.inRange(e.x, e.y, s);
    }
  });
  if (n && !a) {
    return [];
  } else {
    return r;
  }
}
var rg = {
  evaluateInteractionItems: Gi,
  modes: {
    index(t, e, i, n) {
      const s = De(e, t);
      const r = i.axis || "x";
      const o = i.includeInvisible || false;
      const a = i.intersect ? As(t, s, r, n, o) : Ms(t, s, r, false, n, o);
      const c = [];
      if (a.length) {
        t.getSortedVisibleDatasetMetas().forEach(l => {
          const h = a[0].index;
          const d = l.data[h];
          if (d && !d.skip) {
            c.push({
              element: d,
              datasetIndex: l.index,
              index: h
            });
          }
        });
        return c;
      } else {
        return [];
      }
    },
    dataset(t, e, i, n) {
      const s = De(e, t);
      const r = i.axis || "xy";
      const o = i.includeInvisible || false;
      let a = i.intersect ? As(t, s, r, n, o) : Ms(t, s, r, false, n, o);
      if (a.length > 0) {
        const c = a[0].datasetIndex;
        const l = t.getDatasetMeta(c).data;
        a = [];
        for (let h = 0; h < l.length; ++h) {
          a.push({
            element: l[h],
            datasetIndex: c,
            index: h
          });
        }
      }
      return a;
    },
    point(t, e, i, n) {
      const s = De(e, t);
      const r = i.axis || "xy";
      const o = i.includeInvisible || false;
      return As(t, s, r, n, o);
    },
    nearest(t, e, i, n) {
      const s = De(e, t);
      const r = i.axis || "xy";
      const o = i.includeInvisible || false;
      return Ms(t, s, r, i.intersect, n, o);
    },
    x(t, e, i, n) {
      const s = De(e, t);
      return ta(t, s, "x", i.intersect, n);
    },
    y(t, e, i, n) {
      const s = De(e, t);
      return ta(t, s, "y", i.intersect, n);
    }
  }
};
const oc = ["left", "top", "right", "bottom"];
function gi(t, e) {
  return t.filter(i => i.pos === e);
}
function ea(t, e) {
  return t.filter(i => oc.indexOf(i.pos) === -1 && i.box.axis === e);
}
function pi(t, e) {
  return t.sort((i, n) => {
    const s = e ? n : i;
    const r = e ? i : n;
    if (s.weight === r.weight) {
      return s.index - r.index;
    } else {
      return s.weight - r.weight;
    }
  });
}
function og(t) {
  const e = [];
  let i;
  let n;
  let s;
  let r;
  let o;
  let a;
  i = 0;
  n = (t || []).length;
  for (; i < n; ++i) {
    s = t[i];
    ({
      position: r,
      options: {
        stack: o,
        stackWeight: a = 1
      }
    } = s);
    e.push({
      index: i,
      box: s,
      pos: r,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: o && r + o,
      stackWeight: a
    });
  }
  return e;
}
function ag(t) {
  const e = {};
  for (const i of t) {
    const {
      stack: n,
      pos: s,
      stackWeight: r
    } = i;
    if (!n || !oc.includes(s)) {
      continue;
    }
    const o = e[n] ||= {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    };
    o.count++;
    o.weight += r;
  }
  return e;
}
function lg(t, e) {
  const i = ag(t);
  const {
    vBoxMaxWidth: n,
    hBoxMaxHeight: s
  } = e;
  let r;
  let o;
  let a;
  r = 0;
  o = t.length;
  for (; r < o; ++r) {
    a = t[r];
    const {
      fullSize: c
    } = a.box;
    const l = i[a.stack];
    const h = l && a.stackWeight / l.weight;
    if (a.horizontal) {
      a.width = h ? h * n : c && e.availableWidth;
      a.height = s;
    } else {
      a.width = n;
      a.height = h ? h * s : c && e.availableHeight;
    }
  }
  return i;
}
function cg(t) {
  const e = og(t);
  const i = pi(e.filter(l => l.box.fullSize), true);
  const n = pi(gi(e, "left"), true);
  const s = pi(gi(e, "right"));
  const r = pi(gi(e, "top"), true);
  const o = pi(gi(e, "bottom"));
  const a = ea(e, "x");
  const c = ea(e, "y");
  return {
    fullSize: i,
    leftAndTop: n.concat(r),
    rightAndBottom: s.concat(c).concat(o).concat(a),
    chartArea: gi(e, "chartArea"),
    vertical: n.concat(s).concat(c),
    horizontal: r.concat(o).concat(a)
  };
}
function ia(t, e, i, n) {
  return Math.max(t[i], e[i]) + Math.max(t[n], e[n]);
}
function ac(t, e) {
  t.top = Math.max(t.top, e.top);
  t.left = Math.max(t.left, e.left);
  t.bottom = Math.max(t.bottom, e.bottom);
  t.right = Math.max(t.right, e.right);
}
function hg(t, e, i, n) {
  const {
    pos: s,
    box: r
  } = i;
  const o = t.maxPadding;
  if (!Q(s)) {
    if (i.size) {
      t[s] -= i.size;
    }
    const d = n[i.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, i.horizontal ? r.height : r.width);
    i.size = d.size / d.count;
    t[s] += i.size;
  }
  if (r.getPadding) {
    ac(o, r.getPadding());
  }
  const a = Math.max(0, e.outerWidth - ia(o, t, "left", "right"));
  const c = Math.max(0, e.outerHeight - ia(o, t, "top", "bottom"));
  const l = a !== t.w;
  const h = c !== t.h;
  t.w = a;
  t.h = c;
  if (i.horizontal) {
    return {
      same: l,
      other: h
    };
  } else {
    return {
      same: h,
      other: l
    };
  }
}
function fg(t) {
  const e = t.maxPadding;
  function i(n) {
    const s = Math.max(e[n] - t[n], 0);
    t[n] += s;
    return s;
  }
  t.y += i("top");
  t.x += i("left");
  i("right");
  i("bottom");
}
function ug(t, e) {
  const i = e.maxPadding;
  function n(s) {
    const r = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    s.forEach(o => {
      r[o] = Math.max(e[o], i[o]);
    });
    return r;
  }
  return n(t ? ["left", "right"] : ["top", "bottom"]);
}
function ki(t, e, i, n) {
  const s = [];
  let r;
  let o;
  let a;
  let c;
  let l;
  let h;
  r = 0;
  o = t.length;
  l = 0;
  for (; r < o; ++r) {
    a = t[r];
    c = a.box;
    c.update(a.width || e.w, a.height || e.h, ug(a.horizontal, e));
    const {
      same: d,
      other: g
    } = hg(e, i, a, n);
    l |= d && s.length;
    h = h || g;
    if (!c.fullSize) {
      s.push(a);
    }
  }
  return l && ki(s, e, i, n) || h;
}
function gn(t, e, i, n, s) {
  t.top = i;
  t.left = e;
  t.right = e + n;
  t.bottom = i + s;
  t.width = n;
  t.height = s;
}
function na(t, e, i, n) {
  const s = i.padding;
  let {
    x: r,
    y: o
  } = e;
  for (const a of t) {
    const c = a.box;
    const l = n[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    };
    const h = a.stackWeight / l.weight || 1;
    if (a.horizontal) {
      const d = e.w * h;
      const g = l.size || c.height;
      if (Hi(l.start)) {
        o = l.start;
      }
      if (c.fullSize) {
        gn(c, s.left, o, i.outerWidth - s.right - s.left, g);
      } else {
        gn(c, e.left + l.placed, o, d, g);
      }
      l.start = o;
      l.placed += d;
      o = c.bottom;
    } else {
      const d = e.h * h;
      const g = l.size || c.width;
      if (Hi(l.start)) {
        r = l.start;
      }
      if (c.fullSize) {
        gn(c, r, s.top, g, i.outerHeight - s.bottom - s.top);
      } else {
        gn(c, r, e.top + l.placed, g, d);
      }
      l.start = r;
      l.placed += d;
      r = c.right;
    }
  }
  e.x = r;
  e.y = o;
}
var Ut = {
  addBox(t, e) {
    t.boxes ||= [];
    e.fullSize = e.fullSize || false;
    e.position = e.position || "top";
    e.weight = e.weight || 0;
    e._layers = e._layers || function () {
      return [{
        z: 0,
        draw(i) {
          e.draw(i);
        }
      }];
    };
    t.boxes.push(e);
  },
  removeBox(t, e) {
    const i = t.boxes ? t.boxes.indexOf(e) : -1;
    if (i !== -1) {
      t.boxes.splice(i, 1);
    }
  },
  configure(t, e, i) {
    e.fullSize = i.fullSize;
    e.position = i.position;
    e.weight = i.weight;
  },
  update(t, e, i, n) {
    if (!t) {
      return;
    }
    const s = It(t.options.layout.padding);
    const r = Math.max(e - s.width, 0);
    const o = Math.max(i - s.height, 0);
    const a = cg(t.boxes);
    const c = a.vertical;
    const l = a.horizontal;
    vt(t.boxes, y => {
      if (typeof y.beforeLayout == "function") {
        y.beforeLayout();
      }
    });
    const h = c.reduce((y, k) => k.box.options && k.box.options.display === false ? y : y + 1, 0) || 1;
    const d = Object.freeze({
      outerWidth: e,
      outerHeight: i,
      padding: s,
      availableWidth: r,
      availableHeight: o,
      vBoxMaxWidth: r / 2 / h,
      hBoxMaxHeight: o / 2
    });
    const g = Object.assign({}, s);
    ac(g, It(n));
    const p = Object.assign({
      maxPadding: g,
      w: r,
      h: o,
      x: s.left,
      y: s.top
    }, s);
    const b = lg(c.concat(l), d);
    ki(a.fullSize, p, d, b);
    ki(c, p, d, b);
    if (ki(l, p, d, b)) {
      ki(c, p, d, b);
    }
    fg(p);
    na(a.leftAndTop, p, d, b);
    p.x += p.w;
    p.y += p.h;
    na(a.rightAndBottom, p, d, b);
    t.chartArea = {
      left: p.left,
      top: p.top,
      right: p.left + p.w,
      bottom: p.top + p.h,
      height: p.h,
      width: p.w
    };
    vt(a.chartArea, y => {
      const k = y.box;
      Object.assign(k, t.chartArea);
      k.update(p.w, p.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class lc {
  acquireContext(e, i) {}
  releaseContext(e) {
    return false;
  }
  addEventListener(e, i, n) {}
  removeEventListener(e, i, n) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, i, n, s) {
    i = Math.max(0, i || e.width);
    n = n || e.height;
    return {
      width: i,
      height: Math.max(0, s ? Math.floor(i / s) : n)
    };
  }
  isAttached(e) {
    return true;
  }
  updateConfig(e) {}
}
class dg extends lc {
  acquireContext(e) {
    return e && e.getContext && e.getContext("2d") || null;
  }
  updateConfig(e) {
    e.options.animation = false;
  }
}
const Sn = "$chartjs";
const gg = {
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
const sa = t => t === null || t === "";
function pg(t, e) {
  const i = t.style;
  const n = t.getAttribute("height");
  const s = t.getAttribute("width");
  t[Sn] = {
    initial: {
      height: n,
      width: s,
      style: {
        display: i.display,
        height: i.height,
        width: i.width
      }
    }
  };
  i.display = i.display || "block";
  i.boxSizing = i.boxSizing || "border-box";
  if (sa(s)) {
    const r = Vo(t, "width");
    if (r !== undefined) {
      t.width = r;
    }
  }
  if (sa(n)) {
    if (t.style.height === "") {
      t.height = t.width / (e || 2);
    } else {
      const r = Vo(t, "height");
      if (r !== undefined) {
        t.height = r;
      }
    }
  }
  return t;
}
const cc = y0 ? {
  passive: true
} : false;
function _g(t, e, i) {
  if (t) {
    t.addEventListener(e, i, cc);
  }
}
function mg(t, e, i) {
  if (t && t.canvas) {
    t.canvas.removeEventListener(e, i, cc);
  }
}
function xg(t, e) {
  const i = gg[t.type] || t.type;
  const {
    x: n,
    y: s
  } = De(t, e);
  return {
    type: i,
    chart: e,
    native: t,
    x: n !== undefined ? n : null,
    y: s !== undefined ? s : null
  };
}
function $n(t, e) {
  for (const i of t) {
    if (i === e || i.contains(e)) {
      return true;
    }
  }
}
function bg(t, e, i) {
  const n = t.canvas;
  const s = new MutationObserver(r => {
    let o = false;
    for (const a of r) {
      o = o || $n(a.addedNodes, n);
      o = o && !$n(a.removedNodes, n);
    }
    if (o) {
      i();
    }
  });
  s.observe(document, {
    childList: true,
    subtree: true
  });
  return s;
}
function yg(t, e, i) {
  const n = t.canvas;
  const s = new MutationObserver(r => {
    let o = false;
    for (const a of r) {
      o = o || $n(a.removedNodes, n);
      o = o && !$n(a.addedNodes, n);
    }
    if (o) {
      i();
    }
  });
  s.observe(document, {
    childList: true,
    subtree: true
  });
  return s;
}
const $i = new Map();
let ra = 0;
function hc() {
  const t = window.devicePixelRatio;
  if (t !== ra) {
    ra = t;
    $i.forEach((e, i) => {
      if (i.currentDevicePixelRatio !== t) {
        e();
      }
    });
  }
}
function wg(t, e) {
  if (!$i.size) {
    window.addEventListener("resize", hc);
  }
  $i.set(t, e);
}
function vg(t) {
  $i.delete(t);
  if (!$i.size) {
    window.removeEventListener("resize", hc);
  }
}
function kg(t, e, i) {
  const n = t.canvas;
  const s = n && Ar(n);
  if (!s) {
    return;
  }
  const r = Xl((a, c) => {
    const l = s.clientWidth;
    i(a, c);
    if (l < s.clientWidth) {
      i();
    }
  }, window);
  const o = new ResizeObserver(a => {
    const c = a[0];
    const l = c.contentRect.width;
    const h = c.contentRect.height;
    if (l !== 0 || h !== 0) {
      r(l, h);
    }
  });
  o.observe(s);
  wg(t, r);
  return o;
}
function Ds(t, e, i) {
  if (i) {
    i.disconnect();
  }
  if (e === "resize") {
    vg(t);
  }
}
function Sg(t, e, i) {
  const n = t.canvas;
  const s = Xl(r => {
    if (t.ctx !== null) {
      i(xg(r, t));
    }
  }, t);
  _g(n, e, s);
  return s;
}
class Eg extends lc {
  acquireContext(e, i) {
    const n = e && e.getContext && e.getContext("2d");
    if (n && n.canvas === e) {
      pg(e, i);
      return n;
    } else {
      return null;
    }
  }
  releaseContext(e) {
    const i = e.canvas;
    if (!i[Sn]) {
      return false;
    }
    const n = i[Sn].initial;
    ["height", "width"].forEach(r => {
      const o = n[r];
      if (it(o)) {
        i.removeAttribute(r);
      } else {
        i.setAttribute(r, o);
      }
    });
    const s = n.style || {};
    Object.keys(s).forEach(r => {
      i.style[r] = s[r];
    });
    i.width = i.width;
    delete i[Sn];
    return true;
  }
  addEventListener(e, i, n) {
    this.removeEventListener(e, i);
    const s = e.$proxies ||= {};
    const o = {
      attach: bg,
      detach: yg,
      resize: kg
    }[i] || Sg;
    s[i] = o(e, i, n);
  }
  removeEventListener(e, i) {
    const n = e.$proxies ||= {};
    const s = n[i];
    if (!s) {
      return;
    }
    ({
      attach: Ds,
      detach: Ds,
      resize: Ds
    }[i] || mg)(e, i, s);
    n[i] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, i, n, s) {
    return b0(e, i, n, s);
  }
  isAttached(e) {
    const i = Ar(e);
    return !!i && !!i.isConnected;
  }
}
function Ag(t) {
  if (!Er() || typeof OffscreenCanvas !== "undefined" && t instanceof OffscreenCanvas) {
    return dg;
  } else {
    return Eg;
  }
}
let qi = class {
  static defaults = {};
  static defaultRoutes = undefined;
  x;
  y;
  active = false;
  options;
  $animations;
  tooltipPosition(e) {
    const {
      x: i,
      y: n
    } = this.getProps(["x", "y"], e);
    return {
      x: i,
      y: n
    };
  }
  hasValue() {
    return Nn(this.x) && Nn(this.y);
  }
  getProps(e, i) {
    const n = this.$animations;
    if (!i || !n) {
      return this;
    }
    const s = {};
    e.forEach(r => {
      s[r] = n[r] && n[r].active() ? n[r]._to : this[r];
    });
    return s;
  }
};
function Mg(t, e) {
  const i = t.options.ticks;
  const n = Dg(t);
  const s = Math.min(i.maxTicksLimit || n, n);
  const r = i.major.enabled ? Og(e) : [];
  const o = r.length;
  const a = r[0];
  const c = r[o - 1];
  const l = [];
  if (o > s) {
    Cg(e, l, r, o / s);
    return l;
  }
  const h = Tg(r, e, s);
  if (o > 0) {
    let d;
    let g;
    const p = o > 1 ? Math.round((c - a) / (o - 1)) : null;
    pn(e, l, h, it(p) ? 0 : a - p, a);
    d = 0;
    g = o - 1;
    for (; d < g; d++) {
      pn(e, l, h, r[d], r[d + 1]);
    }
    pn(e, l, h, c, it(p) ? e.length : c + p);
    return l;
  }
  pn(e, l, h);
  return l;
}
function Dg(t) {
  const e = t.options.offset;
  const i = t._tickSize();
  const n = t._length / i + (e ? 0 : 1);
  const s = t._maxLength / i;
  return Math.floor(Math.min(n, s));
}
function Tg(t, e, i) {
  const n = Fg(t);
  const s = e.length / i;
  if (!n) {
    return Math.max(s, 1);
  }
  const r = Od(n);
  for (let o = 0, a = r.length - 1; o < a; o++) {
    const c = r[o];
    if (c > s) {
      return c;
    }
  }
  return Math.max(s, 1);
}
function Og(t) {
  const e = [];
  let i;
  let n;
  i = 0;
  n = t.length;
  for (; i < n; i++) {
    if (t[i].major) {
      e.push(i);
    }
  }
  return e;
}
function Cg(t, e, i, n) {
  let s = 0;
  let r = i[0];
  let o;
  n = Math.ceil(n);
  o = 0;
  for (; o < t.length; o++) {
    if (o === r) {
      e.push(t[o]);
      s++;
      r = i[s * n];
    }
  }
}
function pn(t, e, i, n, s) {
  const r = et(n, 0);
  const o = Math.min(et(s, t.length), t.length);
  let a = 0;
  let c;
  let l;
  let h;
  i = Math.ceil(i);
  if (s) {
    c = s - n;
    i = c / Math.floor(c / i);
  }
  h = r;
  while (h < 0) {
    a++;
    h = Math.round(r + a * i);
  }
  for (l = Math.max(r, 0); l < o; l++) {
    if (l === h) {
      e.push(t[l]);
      a++;
      h = Math.round(r + a * i);
    }
  }
}
function Fg(t) {
  const e = t.length;
  let i;
  let n;
  if (e < 2) {
    return false;
  }
  n = t[0];
  i = 1;
  for (; i < e; ++i) {
    if (t[i] - t[i - 1] !== n) {
      return false;
    }
  }
  return n;
}
const Lg = t => t === "left" ? "right" : t === "right" ? "left" : t;
const oa = (t, e, i) => e === "top" || e === "left" ? t[e] + i : t[e] - i;
const aa = (t, e) => Math.min(e || t, t);
function la(t, e) {
  const i = [];
  const n = t.length / e;
  const s = t.length;
  let r = 0;
  for (; r < s; r += n) {
    i.push(t[Math.floor(r)]);
  }
  return i;
}
function Rg(t, e, i) {
  const n = t.ticks.length;
  const s = Math.min(e, n - 1);
  const r = t._startPixel;
  const o = t._endPixel;
  const a = 0.000001;
  let c = t.getPixelForTick(s);
  let l;
  if (!i || !(n === 1 ? l = Math.max(c - r, o - c) : e === 0 ? l = (t.getPixelForTick(1) - c) / 2 : l = (c - t.getPixelForTick(s - 1)) / 2, c += s < e ? l : -l, c < r - a || c > o + a)) {
    return c;
  }
}
function Ig(t, e) {
  vt(t, i => {
    const n = i.gc;
    const s = n.length / 2;
    let r;
    if (s > e) {
      for (r = 0; r < s; ++r) {
        delete i.data[n[r]];
      }
      n.splice(0, s);
    }
  });
}
function _i(t) {
  if (t.drawTicks) {
    return t.tickLength;
  } else {
    return 0;
  }
}
function ca(t, e) {
  if (!t.display) {
    return 0;
  }
  const i = Nt(t.font, e);
  const n = It(t.padding);
  return (lt(t.text) ? t.text.length : 1) * i.lineHeight + n.height;
}
function Pg(t, e) {
  return hi(t, {
    scale: e,
    type: "scale"
  });
}
function zg(t, e, i) {
  return hi(t, {
    tick: i,
    index: e,
    type: "tick"
  });
}
function Bg(t, e, i) {
  let n = mr(t);
  if (i && e !== "right" || !i && e === "right") {
    n = Lg(n);
  }
  return n;
}
function Ng(t, e, i, n) {
  const {
    top: s,
    left: r,
    bottom: o,
    right: a,
    chart: c
  } = t;
  const {
    chartArea: l,
    scales: h
  } = c;
  let d = 0;
  let g;
  let p;
  let b;
  const y = o - s;
  const k = a - r;
  if (t.isHorizontal()) {
    p = kt(n, r, a);
    if (Q(i)) {
      const E = Object.keys(i)[0];
      const D = i[E];
      b = h[E].getPixelForValue(D) + y - e;
    } else if (i === "center") {
      b = (l.bottom + l.top) / 2 + y - e;
    } else {
      b = oa(t, i, e);
    }
    g = a - r;
  } else {
    if (Q(i)) {
      const E = Object.keys(i)[0];
      const D = i[E];
      p = h[E].getPixelForValue(D) - k + e;
    } else if (i === "center") {
      p = (l.left + l.right) / 2 - k + e;
    } else {
      p = oa(t, i, e);
    }
    b = kt(n, o, s);
    d = i === "left" ? -Mt : Mt;
  }
  return {
    titleX: p,
    titleY: b,
    maxWidth: g,
    rotation: d
  };
}
class Ve extends qi {
  constructor(e) {
    super();
    this.id = e.id;
    this.type = e.type;
    this.options = undefined;
    this.ctx = e.ctx;
    this.chart = e.chart;
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
  init(e) {
    this.options = e.setContext(this.getContext());
    this.axis = e.axis;
    this._userMin = this.parse(e.min);
    this._userMax = this.parse(e.max);
    this._suggestedMin = this.parse(e.suggestedMin);
    this._suggestedMax = this.parse(e.suggestedMax);
  }
  parse(e, i) {
    return e;
  }
  getUserBounds() {
    let {
      _userMin: e,
      _userMax: i,
      _suggestedMin: n,
      _suggestedMax: s
    } = this;
    e = Ft(e, Number.POSITIVE_INFINITY);
    i = Ft(i, Number.NEGATIVE_INFINITY);
    n = Ft(n, Number.POSITIVE_INFINITY);
    s = Ft(s, Number.NEGATIVE_INFINITY);
    return {
      min: Ft(e, n),
      max: Ft(i, s),
      minDefined: xt(e),
      maxDefined: xt(i)
    };
  }
  getMinMax(e) {
    let {
      min: i,
      max: n,
      minDefined: s,
      maxDefined: r
    } = this.getUserBounds();
    let o;
    if (s && r) {
      return {
        min: i,
        max: n
      };
    }
    const a = this.getMatchingVisibleMetas();
    for (let c = 0, l = a.length; c < l; ++c) {
      o = a[c].controller.getMinMax(this, e);
      if (!s) {
        i = Math.min(i, o.min);
      }
      if (!r) {
        n = Math.max(n, o.max);
      }
    }
    i = r && i > n ? n : i;
    n = s && i > n ? i : n;
    return {
      min: Ft(i, Ft(n, i)),
      max: Ft(n, Ft(i, n))
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
    const e = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || [];
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems ||= this._computeLabelItems(e);
  }
  beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  }
  beforeUpdate() {
    nt(this.options.beforeUpdate, [this]);
  }
  update(e, i, n) {
    const {
      beginAtZero: s,
      grace: r,
      ticks: o
    } = this.options;
    const a = o.sampleSize;
    this.beforeUpdate();
    this.maxWidth = e;
    this.maxHeight = i;
    this._margins = n = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, n);
    this.ticks = null;
    this._labelSizes = null;
    this._gridLineItems = null;
    this._labelItems = null;
    this.beforeSetDimensions();
    this.setDimensions();
    this.afterSetDimensions();
    this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom;
    if (!this._dataLimitsCached) {
      this.beforeDataLimits();
      this.determineDataLimits();
      this.afterDataLimits();
      this._range = n0(this, r, s);
      this._dataLimitsCached = true;
    }
    this.beforeBuildTicks();
    this.ticks = this.buildTicks() || [];
    this.afterBuildTicks();
    const c = a < this.ticks.length;
    this._convertTicksToLabels(c ? la(this.ticks, a) : this.ticks);
    this.configure();
    this.beforeCalculateLabelRotation();
    this.calculateLabelRotation();
    this.afterCalculateLabelRotation();
    if (o.display && (o.autoSkip || o.source === "auto")) {
      this.ticks = Mg(this, this.ticks);
      this._labelSizes = null;
      this.afterAutoSkip();
    }
    if (c) {
      this._convertTicksToLabels(this.ticks);
    }
    this.beforeFit();
    this.fit();
    this.afterFit();
    this.afterUpdate();
  }
  configure() {
    let e = this.options.reverse;
    let i;
    let n;
    if (this.isHorizontal()) {
      i = this.left;
      n = this.right;
    } else {
      i = this.top;
      n = this.bottom;
      e = !e;
    }
    this._startPixel = i;
    this._endPixel = n;
    this._reversePixels = e;
    this._length = n - i;
    this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    nt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    nt(this.options.beforeSetDimensions, [this]);
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
    nt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    this.chart.notifyPlugins(e, this.getContext());
    nt(this.options[e], [this]);
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
    nt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const i = this.options.ticks;
    let n;
    let s;
    let r;
    n = 0;
    s = e.length;
    for (; n < s; n++) {
      r = e[n];
      r.label = nt(i.callback, [r.value, n, e], this);
    }
  }
  afterTickToLabelConversion() {
    nt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    nt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options;
    const i = e.ticks;
    const n = aa(this.ticks.length, e.ticks.maxTicksLimit);
    const s = i.minRotation || 0;
    const r = i.maxRotation;
    let o = s;
    let a;
    let c;
    let l;
    if (!this._isVisible() || !i.display || s >= r || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes();
    const d = h.widest.width;
    const g = h.highest.height;
    const p = le(this.chart.width - d, 0, this.maxWidth);
    a = e.offset ? this.maxWidth / n : p / (n - 1);
    if (d + 6 > a) {
      a = p / (n - (e.offset ? 0.5 : 1));
      c = this.maxHeight - _i(e.grid) - i.padding - ca(e.title, this.chart.options.font);
      l = Math.sqrt(d * d + g * g);
      o = pr(Math.min(Math.asin(le((h.highest.height + 6) / a, -1, 1)), Math.asin(le(c / l, -1, 1)) - Math.asin(le(g / l, -1, 1))));
      o = Math.max(s, Math.min(r, o));
    }
    this.labelRotation = o;
  }
  afterCalculateLabelRotation() {
    nt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    nt(this.options.beforeFit, [this]);
  }
  fit() {
    const e = {
      width: 0,
      height: 0
    };
    const {
      chart: i,
      options: {
        ticks: n,
        title: s,
        grid: r
      }
    } = this;
    const o = this._isVisible();
    const a = this.isHorizontal();
    if (o) {
      const c = ca(s, i.options.font);
      if (a) {
        e.width = this.maxWidth;
        e.height = _i(r) + c;
      } else {
        e.height = this.maxHeight;
        e.width = _i(r) + c;
      }
      if (n.display && this.ticks.length) {
        const {
          first: l,
          last: h,
          widest: d,
          highest: g
        } = this._getLabelSizes();
        const p = n.padding * 2;
        const b = $t(this.labelRotation);
        const y = Math.cos(b);
        const k = Math.sin(b);
        if (a) {
          const E = n.mirror ? 0 : k * d.width + y * g.height;
          e.height = Math.min(this.maxHeight, e.height + E + p);
        } else {
          const E = n.mirror ? 0 : y * d.width + k * g.height;
          e.width = Math.min(this.maxWidth, e.width + E + p);
        }
        this._calculatePadding(l, h, k, y);
      }
    }
    this._handleMargins();
    if (a) {
      this.width = this._length = i.width - this._margins.left - this._margins.right;
      this.height = e.height;
    } else {
      this.width = e.width;
      this.height = this._length = i.height - this._margins.top - this._margins.bottom;
    }
  }
  _calculatePadding(e, i, n, s) {
    const {
      ticks: {
        align: r,
        padding: o
      },
      position: a
    } = this.options;
    const c = this.labelRotation !== 0;
    const l = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left;
      const d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let g = 0;
      let p = 0;
      if (c) {
        if (l) {
          g = s * e.width;
          p = n * i.height;
        } else {
          g = n * e.height;
          p = s * i.width;
        }
      } else if (r === "start") {
        p = i.width;
      } else if (r === "end") {
        g = e.width;
      } else if (r !== "inner") {
        g = e.width / 2;
        p = i.width / 2;
      }
      this.paddingLeft = Math.max((g - h + o) * this.width / (this.width - h), 0);
      this.paddingRight = Math.max((p - d + o) * this.width / (this.width - d), 0);
    } else {
      let h = i.height / 2;
      let d = e.height / 2;
      if (r === "start") {
        h = 0;
        d = e.height;
      } else if (r === "end") {
        h = i.height;
        d = 0;
      }
      this.paddingTop = h + o;
      this.paddingBottom = d + o;
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
    nt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {
      axis: e,
      position: i
    } = this.options;
    return i === "top" || i === "bottom" || e === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    this.beforeTickToLabelConversion();
    this.generateTickLabels(e);
    let i;
    let n;
    i = 0;
    n = e.length;
    for (; i < n; i++) {
      if (it(e[i].label)) {
        e.splice(i, 1);
        n--;
        i--;
      }
    }
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const i = this.options.ticks.sampleSize;
      let n = this.ticks;
      if (i < n.length) {
        n = la(n, i);
      }
      this._labelSizes = e = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
    }
    return e;
  }
  _computeLabelSizes(e, i, n) {
    const {
      ctx: s,
      _longestTextCache: r
    } = this;
    const o = [];
    const a = [];
    const c = Math.floor(i / aa(i, n));
    let l = 0;
    let h = 0;
    let d;
    let g;
    let p;
    let b;
    let y;
    let k;
    let E;
    let D;
    let z;
    let M;
    let R;
    for (d = 0; d < i; d += c) {
      b = e[d].label;
      y = this._resolveTickFontOptions(d);
      s.font = k = y.string;
      E = r[k] = r[k] || {
        data: {},
        gc: []
      };
      D = y.lineHeight;
      z = M = 0;
      if (!it(b) && !lt(b)) {
        z = Un(s, E.data, E.gc, z, b);
        M = D;
      } else if (lt(b)) {
        g = 0;
        p = b.length;
        for (; g < p; ++g) {
          R = b[g];
          if (!it(R) && !lt(R)) {
            z = Un(s, E.data, E.gc, z, R);
            M += D;
          }
        }
      }
      o.push(z);
      a.push(M);
      l = Math.max(z, l);
      h = Math.max(M, h);
    }
    Ig(r, i);
    const V = o.indexOf(l);
    const I = a.indexOf(h);
    const W = j => ({
      width: o[j] || 0,
      height: a[j] || 0
    });
    return {
      first: W(0),
      last: W(i - 1),
      widest: W(V),
      highest: W(I),
      widths: o,
      heights: a
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, i) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const i = this.ticks;
    if (e < 0 || e > i.length - 1) {
      return null;
    } else {
      return this.getPixelForValue(i[e].value);
    }
  }
  getPixelForDecimal(e) {
    if (this._reversePixels) {
      e = 1 - e;
    }
    const i = this._startPixel + e * this._length;
    return Ld(this._alignToPixels ? Ee(this.chart, i, 0) : i);
  }
  getDecimalForPixel(e) {
    const i = (e - this._startPixel) / this._length;
    if (this._reversePixels) {
      return 1 - i;
    } else {
      return i;
    }
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {
      min: e,
      max: i
    } = this;
    if (e < 0 && i < 0) {
      return i;
    } else if (e > 0 && i > 0) {
      return e;
    } else {
      return 0;
    }
  }
  getContext(e) {
    const i = this.ticks || [];
    if (e >= 0 && e < i.length) {
      const n = i[e];
      return n.$context ||= zg(this.getContext(), e, n);
    }
    return this.$context ||= Pg(this.chart.getContext(), this);
  }
  _tickSize() {
    const e = this.options.ticks;
    const i = $t(this.labelRotation);
    const n = Math.abs(Math.cos(i));
    const s = Math.abs(Math.sin(i));
    const r = this._getLabelSizes();
    const o = e.autoSkipPadding || 0;
    const a = r ? r.widest.width + o : 0;
    const c = r ? r.highest.height + o : 0;
    if (this.isHorizontal()) {
      if (c * n > a * s) {
        return a / n;
      } else {
        return c / s;
      }
    } else if (c * s < a * n) {
      return c / n;
    } else {
      return a / s;
    }
  }
  _isVisible() {
    const e = this.options.display;
    if (e !== "auto") {
      return !!e;
    } else {
      return this.getMatchingVisibleMetas().length > 0;
    }
  }
  _computeGridLineItems(e) {
    const i = this.axis;
    const n = this.chart;
    const s = this.options;
    const {
      grid: r,
      position: o,
      border: a
    } = s;
    const c = r.offset;
    const l = this.isHorizontal();
    const d = this.ticks.length + (c ? 1 : 0);
    const g = _i(r);
    const p = [];
    const b = a.setContext(this.getContext());
    const y = b.display ? b.width : 0;
    const k = y / 2;
    const E = function (st) {
      return Ee(n, st, y);
    };
    let D;
    let z;
    let M;
    let R;
    let V;
    let I;
    let W;
    let j;
    let B;
    let $;
    let X;
    let ft;
    if (o === "top") {
      D = E(this.bottom);
      I = this.bottom - g;
      j = D - k;
      $ = E(e.top) + k;
      ft = e.bottom;
    } else if (o === "bottom") {
      D = E(this.top);
      $ = e.top;
      ft = E(e.bottom) - k;
      I = D + k;
      j = this.top + g;
    } else if (o === "left") {
      D = E(this.right);
      V = this.right - g;
      W = D - k;
      B = E(e.left) + k;
      X = e.right;
    } else if (o === "right") {
      D = E(this.left);
      B = e.left;
      X = E(e.right) - k;
      V = D + k;
      W = this.left + g;
    } else if (i === "x") {
      if (o === "center") {
        D = E((e.top + e.bottom) / 2 + 0.5);
      } else if (Q(o)) {
        const st = Object.keys(o)[0];
        const _t = o[st];
        D = E(this.chart.scales[st].getPixelForValue(_t));
      }
      $ = e.top;
      ft = e.bottom;
      I = D + k;
      j = I + g;
    } else if (i === "y") {
      if (o === "center") {
        D = E((e.left + e.right) / 2);
      } else if (Q(o)) {
        const st = Object.keys(o)[0];
        const _t = o[st];
        D = E(this.chart.scales[st].getPixelForValue(_t));
      }
      V = D - k;
      W = V - g;
      B = e.left;
      X = e.right;
    }
    const gt = et(s.ticks.maxTicksLimit, d);
    const J = Math.max(1, Math.ceil(d / gt));
    for (z = 0; z < d; z += J) {
      const st = this.getContext(z);
      const _t = r.setContext(st);
      const Vt = a.setContext(st);
      const te = _t.lineWidth;
      const Ot = _t.color;
      const K = Vt.dash || [];
      const x = Vt.dashOffset;
      const S = _t.tickWidth;
      const w = _t.tickColor;
      const A = _t.tickBorderDash || [];
      const U = _t.tickBorderDashOffset;
      M = Rg(this, z, c);
      if (M !== undefined) {
        R = Ee(n, M, te);
        if (l) {
          V = W = B = X = R;
        } else {
          I = j = $ = ft = R;
        }
        p.push({
          tx1: V,
          ty1: I,
          tx2: W,
          ty2: j,
          x1: B,
          y1: $,
          x2: X,
          y2: ft,
          width: te,
          color: Ot,
          borderDash: K,
          borderDashOffset: x,
          tickWidth: S,
          tickColor: w,
          tickBorderDash: A,
          tickBorderDashOffset: U
        });
      }
    }
    this._ticksLength = d;
    this._borderValue = D;
    return p;
  }
  _computeLabelItems(e) {
    const i = this.axis;
    const n = this.options;
    const {
      position: s,
      ticks: r
    } = n;
    const o = this.isHorizontal();
    const a = this.ticks;
    const {
      align: c,
      crossAlign: l,
      padding: h,
      mirror: d
    } = r;
    const g = _i(n.grid);
    const p = g + h;
    const b = d ? -h : p;
    const y = -$t(this.labelRotation);
    const k = [];
    let E;
    let D;
    let z;
    let M;
    let R;
    let V;
    let I;
    let W;
    let j;
    let B;
    let $;
    let X;
    let ft = "middle";
    if (s === "top") {
      V = this.bottom - b;
      I = this._getXAxisLabelAlignment();
    } else if (s === "bottom") {
      V = this.top + b;
      I = this._getXAxisLabelAlignment();
    } else if (s === "left") {
      const J = this._getYAxisLabelAlignment(g);
      I = J.textAlign;
      R = J.x;
    } else if (s === "right") {
      const J = this._getYAxisLabelAlignment(g);
      I = J.textAlign;
      R = J.x;
    } else if (i === "x") {
      if (s === "center") {
        V = (e.top + e.bottom) / 2 + p;
      } else if (Q(s)) {
        const J = Object.keys(s)[0];
        const st = s[J];
        V = this.chart.scales[J].getPixelForValue(st) + p;
      }
      I = this._getXAxisLabelAlignment();
    } else if (i === "y") {
      if (s === "center") {
        R = (e.left + e.right) / 2 - p;
      } else if (Q(s)) {
        const J = Object.keys(s)[0];
        const st = s[J];
        R = this.chart.scales[J].getPixelForValue(st);
      }
      I = this._getYAxisLabelAlignment(g).textAlign;
    }
    if (i === "y") {
      if (c === "start") {
        ft = "top";
      } else if (c === "end") {
        ft = "bottom";
      }
    }
    const gt = this._getLabelSizes();
    E = 0;
    D = a.length;
    for (; E < D; ++E) {
      z = a[E];
      M = z.label;
      const J = r.setContext(this.getContext(E));
      W = this.getPixelForTick(E) + r.labelOffset;
      j = this._resolveTickFontOptions(E);
      B = j.lineHeight;
      $ = lt(M) ? M.length : 1;
      const st = $ / 2;
      const _t = J.color;
      const Vt = J.textStrokeColor;
      const te = J.textStrokeWidth;
      let Ot = I;
      if (o) {
        R = W;
        if (I === "inner") {
          if (E === D - 1) {
            Ot = this.options.reverse ? "left" : "right";
          } else if (E === 0) {
            Ot = this.options.reverse ? "right" : "left";
          } else {
            Ot = "center";
          }
        }
        if (s === "top") {
          if (l === "near" || y !== 0) {
            X = -$ * B + B / 2;
          } else if (l === "center") {
            X = -gt.highest.height / 2 - st * B + B;
          } else {
            X = -gt.highest.height + B / 2;
          }
        } else if (l === "near" || y !== 0) {
          X = B / 2;
        } else if (l === "center") {
          X = gt.highest.height / 2 - st * B;
        } else {
          X = gt.highest.height - $ * B;
        }
        if (d) {
          X *= -1;
        }
        if (y !== 0 && !J.showLabelBackdrop) {
          R += B / 2 * Math.sin(y);
        }
      } else {
        V = W;
        X = (1 - $) * B / 2;
      }
      let K;
      if (J.showLabelBackdrop) {
        const x = It(J.backdropPadding);
        const S = gt.heights[E];
        const w = gt.widths[E];
        let A = X - x.top;
        let U = 0 - x.left;
        switch (ft) {
          case "middle":
            A -= S / 2;
            break;
          case "bottom":
            A -= S;
            break;
        }
        switch (I) {
          case "center":
            U -= w / 2;
            break;
          case "right":
            U -= w;
            break;
          case "inner":
            if (E === D - 1) {
              U -= w;
            } else if (E > 0) {
              U -= w / 2;
            }
            break;
        }
        K = {
          left: U,
          top: A,
          width: w + x.width,
          height: S + x.height,
          color: J.backdropColor
        };
      }
      k.push({
        label: M,
        font: j,
        textOffset: X,
        options: {
          rotation: y,
          color: _t,
          strokeColor: Vt,
          strokeWidth: te,
          textAlign: Ot,
          textBaseline: ft,
          translation: [R, V],
          backdrop: K
        }
      });
    }
    return k;
  }
  _getXAxisLabelAlignment() {
    const {
      position: e,
      ticks: i
    } = this.options;
    if (-$t(this.labelRotation)) {
      if (e === "top") {
        return "left";
      } else {
        return "right";
      }
    }
    let s = "center";
    if (i.align === "start") {
      s = "left";
    } else if (i.align === "end") {
      s = "right";
    } else if (i.align === "inner") {
      s = "inner";
    }
    return s;
  }
  _getYAxisLabelAlignment(e) {
    const {
      position: i,
      ticks: {
        crossAlign: n,
        mirror: s,
        padding: r
      }
    } = this.options;
    const o = this._getLabelSizes();
    const a = e + r;
    const c = o.widest.width;
    let l;
    let h;
    if (i === "left") {
      if (s) {
        h = this.right + r;
        if (n === "near") {
          l = "left";
        } else if (n === "center") {
          l = "center";
          h += c / 2;
        } else {
          l = "right";
          h += c;
        }
      } else {
        h = this.right - a;
        if (n === "near") {
          l = "right";
        } else if (n === "center") {
          l = "center";
          h -= c / 2;
        } else {
          l = "left";
          h = this.left;
        }
      }
    } else if (i === "right") {
      if (s) {
        h = this.left + r;
        if (n === "near") {
          l = "right";
        } else if (n === "center") {
          l = "center";
          h -= c / 2;
        } else {
          l = "left";
          h -= c;
        }
      } else {
        h = this.left + a;
        if (n === "near") {
          l = "left";
        } else if (n === "center") {
          l = "center";
          h += c / 2;
        } else {
          l = "right";
          h = this.right;
        }
      }
    } else {
      l = "right";
    }
    return {
      textAlign: l,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) {
      return;
    }
    const e = this.chart;
    const i = this.options.position;
    if (i === "left" || i === "right") {
      return {
        top: 0,
        left: this.left,
        bottom: e.height,
        right: this.right
      };
    }
    if (i === "top" || i === "bottom") {
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: e.width
      };
    }
  }
  drawBackground() {
    const {
      ctx: e,
      options: {
        backgroundColor: i
      },
      left: n,
      top: s,
      width: r,
      height: o
    } = this;
    if (i) {
      e.save();
      e.fillStyle = i;
      e.fillRect(n, s, r, o);
      e.restore();
    }
  }
  getLineWidthForValue(e) {
    const i = this.options.grid;
    if (!this._isVisible() || !i.display) {
      return 0;
    }
    const s = this.ticks.findIndex(r => r.value === e);
    if (s >= 0) {
      return i.setContext(this.getContext(s)).lineWidth;
    } else {
      return 0;
    }
  }
  drawGrid(e) {
    const i = this.options.grid;
    const n = this.ctx;
    const s = this._gridLineItems ||= this._computeGridLineItems(e);
    let r;
    let o;
    const a = (c, l, h) => {
      if (!!h.width && !!h.color) {
        n.save();
        n.lineWidth = h.width;
        n.strokeStyle = h.color;
        n.setLineDash(h.borderDash || []);
        n.lineDashOffset = h.borderDashOffset;
        n.beginPath();
        n.moveTo(c.x, c.y);
        n.lineTo(l.x, l.y);
        n.stroke();
        n.restore();
      }
    };
    if (i.display) {
      r = 0;
      o = s.length;
      for (; r < o; ++r) {
        const c = s[r];
        if (i.drawOnChartArea) {
          a({
            x: c.x1,
            y: c.y1
          }, {
            x: c.x2,
            y: c.y2
          }, c);
        }
        if (i.drawTicks) {
          a({
            x: c.tx1,
            y: c.ty1
          }, {
            x: c.tx2,
            y: c.ty2
          }, {
            color: c.tickColor,
            width: c.tickWidth,
            borderDash: c.tickBorderDash,
            borderDashOffset: c.tickBorderDashOffset
          });
        }
      }
    }
  }
  drawBorder() {
    const {
      chart: e,
      ctx: i,
      options: {
        border: n,
        grid: s
      }
    } = this;
    const r = n.setContext(this.getContext());
    const o = n.display ? r.width : 0;
    if (!o) {
      return;
    }
    const a = s.setContext(this.getContext(0)).lineWidth;
    const c = this._borderValue;
    let l;
    let h;
    let d;
    let g;
    if (this.isHorizontal()) {
      l = Ee(e, this.left, o) - o / 2;
      h = Ee(e, this.right, a) + a / 2;
      d = g = c;
    } else {
      d = Ee(e, this.top, o) - o / 2;
      g = Ee(e, this.bottom, a) + a / 2;
      l = h = c;
    }
    i.save();
    i.lineWidth = r.width;
    i.strokeStyle = r.color;
    i.beginPath();
    i.moveTo(l, d);
    i.lineTo(h, g);
    i.stroke();
    i.restore();
  }
  drawLabels(e) {
    if (!this.options.ticks.display) {
      return;
    }
    const n = this.ctx;
    const s = this._computeLabelArea();
    if (s) {
      xr(n, s);
    }
    const r = this.getLabelItems(e);
    for (const o of r) {
      const a = o.options;
      const c = o.font;
      const l = o.label;
      const h = o.textOffset;
      Ue(n, l, 0, h, c, a);
    }
    if (s) {
      br(n);
    }
  }
  drawTitle() {
    const {
      ctx: e,
      options: {
        position: i,
        title: n,
        reverse: s
      }
    } = this;
    if (!n.display) {
      return;
    }
    const r = Nt(n.font);
    const o = It(n.padding);
    const a = n.align;
    let c = r.lineHeight / 2;
    if (i === "bottom" || i === "center" || Q(i)) {
      c += o.bottom;
      if (lt(n.text)) {
        c += r.lineHeight * (n.text.length - 1);
      }
    } else {
      c += o.top;
    }
    const {
      titleX: l,
      titleY: h,
      maxWidth: d,
      rotation: g
    } = Ng(this, c, i, a);
    Ue(e, n.text, 0, 0, r, {
      color: n.color,
      maxWidth: d,
      rotation: g,
      textAlign: Bg(a, i, s),
      textBaseline: "middle",
      translation: [l, h]
    });
  }
  draw(e) {
    if (this._isVisible()) {
      this.drawBackground();
      this.drawGrid(e);
      this.drawBorder();
      this.drawTitle();
      this.drawLabels(e);
    }
  }
  _layers() {
    const e = this.options;
    const i = e.ticks && e.ticks.z || 0;
    const n = et(e.grid && e.grid.z, -1);
    const s = et(e.border && e.border.z, 0);
    if (!this._isVisible() || this.draw !== Ve.prototype.draw) {
      return [{
        z: i,
        draw: r => {
          this.draw(r);
        }
      }];
    } else {
      return [{
        z: n,
        draw: r => {
          this.drawBackground();
          this.drawGrid(r);
          this.drawTitle();
        }
      }, {
        z: s,
        draw: () => {
          this.drawBorder();
        }
      }, {
        z: i,
        draw: r => {
          this.drawLabels(r);
        }
      }];
    }
  }
  getMatchingVisibleMetas(e) {
    const i = this.chart.getSortedVisibleDatasetMetas();
    const n = this.axis + "AxisID";
    const s = [];
    let r;
    let o;
    r = 0;
    o = i.length;
    for (; r < o; ++r) {
      const a = i[r];
      if (a[n] === this.id && (!e || a.type === e)) {
        s.push(a);
      }
    }
    return s;
  }
  _resolveTickFontOptions(e) {
    const i = this.options.ticks.setContext(this.getContext(e));
    return Nt(i.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class _n {
  constructor(e, i, n) {
    this.type = e;
    this.scope = i;
    this.override = n;
    this.items = Object.create(null);
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype);
  }
  register(e) {
    const i = Object.getPrototypeOf(e);
    let n;
    if ($g(i)) {
      n = this.register(i);
    }
    const s = this.items;
    const r = e.id;
    const o = this.scope + "." + r;
    if (!r) {
      throw new Error("class does not have id: " + e);
    }
    if (!(r in s)) {
      s[r] = e;
      Ug(e, o, n);
      if (this.override) {
        ht.override(e.id, e.overrides);
      }
    }
    return o;
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const i = this.items;
    const n = e.id;
    const s = this.scope;
    if (n in i) {
      delete i[n];
    }
    if (s && n in ht[s]) {
      delete ht[s][n];
      if (this.override) {
        delete Ne[n];
      }
    }
  }
}
function Ug(t, e, i) {
  const n = Ui(Object.create(null), [i ? ht.get(i) : {}, ht.get(e), t.defaults]);
  ht.set(e, n);
  if (t.defaultRoutes) {
    Hg(e, t.defaultRoutes);
  }
  if (t.descriptors) {
    ht.describe(e, t.descriptors);
  }
}
function Hg(t, e) {
  Object.keys(e).forEach(i => {
    const n = i.split(".");
    const s = n.pop();
    const r = [t].concat(n).join(".");
    const o = e[i].split(".");
    const a = o.pop();
    const c = o.join(".");
    ht.route(r, s, c, a);
  });
}
function $g(t) {
  return "id" in t && "defaults" in t;
}
class Vg {
  constructor() {
    this.controllers = new _n(Jn, "datasets", true);
    this.elements = new _n(qi, "elements");
    this.plugins = new _n(Object, "plugins");
    this.scales = new _n(Ve, "scales");
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(...e) {
    this._each("register", e);
  }
  remove(...e) {
    this._each("unregister", e);
  }
  addControllers(...e) {
    this._each("register", e, this.controllers);
  }
  addElements(...e) {
    this._each("register", e, this.elements);
  }
  addPlugins(...e) {
    this._each("register", e, this.plugins);
  }
  addScales(...e) {
    this._each("register", e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, "controller");
  }
  getElement(e) {
    return this._get(e, this.elements, "element");
  }
  getPlugin(e) {
    return this._get(e, this.plugins, "plugin");
  }
  getScale(e) {
    return this._get(e, this.scales, "scale");
  }
  removeControllers(...e) {
    this._each("unregister", e, this.controllers);
  }
  removeElements(...e) {
    this._each("unregister", e, this.elements);
  }
  removePlugins(...e) {
    this._each("unregister", e, this.plugins);
  }
  removeScales(...e) {
    this._each("unregister", e, this.scales);
  }
  _each(e, i, n) {
    [...i].forEach(s => {
      const r = n || this._getRegistryForType(s);
      if (n || r.isForType(s) || r === this.plugins && s.id) {
        this._exec(e, r, s);
      } else {
        vt(s, o => {
          const a = n || this._getRegistryForType(o);
          this._exec(e, a, o);
        });
      }
    });
  }
  _exec(e, i, n) {
    const s = gr(e);
    nt(n["before" + s], [], n);
    i[e](n);
    nt(n["after" + s], [], n);
  }
  _getRegistryForType(e) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const n = this._typedRegistries[i];
      if (n.isForType(e)) {
        return n;
      }
    }
    return this.plugins;
  }
  _get(e, i, n) {
    const s = i.get(e);
    if (s === undefined) {
      throw new Error("\"" + e + "\" is not a registered " + n + ".");
    }
    return s;
  }
}
var jt = new Vg();
class Wg {
  constructor() {
    this._init = [];
  }
  notify(e, i, n, s) {
    if (i === "beforeInit") {
      this._init = this._createDescriptors(e, true);
      this._notify(this._init, e, "install");
    }
    const r = s ? this._descriptors(e).filter(s) : this._descriptors(e);
    const o = this._notify(r, e, i, n);
    if (i === "afterDestroy") {
      this._notify(r, e, "stop");
      this._notify(this._init, e, "uninstall");
    }
    return o;
  }
  _notify(e, i, n, s) {
    s = s || {};
    for (const r of e) {
      const o = r.plugin;
      const a = o[n];
      const c = [i, s, r.options];
      if (nt(a, c, o) === false && s.cancelable) {
        return false;
      }
    }
    return true;
  }
  invalidate() {
    if (!it(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  }
  _descriptors(e) {
    if (this._cache) {
      return this._cache;
    }
    const i = this._cache = this._createDescriptors(e);
    this._notifyStateChanges(e);
    return i;
  }
  _createDescriptors(e, i) {
    const n = e && e.config;
    const s = et(n.options && n.options.plugins, {});
    const r = jg(n);
    if (s === false && !i) {
      return [];
    } else {
      return Yg(e, r, s, i);
    }
  }
  _notifyStateChanges(e) {
    const i = this._oldCache || [];
    const n = this._cache;
    const s = (r, o) => r.filter(a => !o.some(c => a.plugin.id === c.plugin.id));
    this._notify(s(i, n), e, "stop");
    this._notify(s(n, i), e, "start");
  }
}
function jg(t) {
  const e = {};
  const i = [];
  const n = Object.keys(jt.plugins.items);
  for (let r = 0; r < n.length; r++) {
    i.push(jt.getPlugin(n[r]));
  }
  const s = t.plugins || [];
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (i.indexOf(o) === -1) {
      i.push(o);
      e[o.id] = true;
    }
  }
  return {
    plugins: i,
    localIds: e
  };
}
function Zg(t, e) {
  if (!e && t === false) {
    return null;
  } else if (t === true) {
    return {};
  } else {
    return t;
  }
}
function Yg(t, {
  plugins: e,
  localIds: i
}, n, s) {
  const r = [];
  const o = t.getContext();
  for (const a of e) {
    const c = a.id;
    const l = Zg(n[c], s);
    if (l !== null) {
      r.push({
        plugin: a,
        options: Kg(t.config, {
          plugin: a,
          local: i[c]
        }, l, o)
      });
    }
  }
  return r;
}
function Kg(t, {
  plugin: e,
  local: i
}, n, s) {
  const r = t.pluginScopeKeys(e);
  const o = t.getOptionScopes(n, r);
  if (i && e.defaults) {
    o.push(e.defaults);
  }
  return t.createResolver(o, s, [""], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}
function qs(t, e) {
  const i = ht.datasets[t] || {};
  return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x";
}
function Xg(t, e) {
  let i = t;
  if (t === "_index_") {
    i = e;
  } else if (t === "_value_") {
    i = e === "x" ? "y" : "x";
  }
  return i;
}
function Gg(t, e) {
  if (t === e) {
    return "_index_";
  } else {
    return "_value_";
  }
}
function ha(t) {
  if (t === "x" || t === "y" || t === "r") {
    return t;
  }
}
function qg(t) {
  if (t === "top" || t === "bottom") {
    return "x";
  }
  if (t === "left" || t === "right") {
    return "y";
  }
}
function Qs(t, ...e) {
  if (ha(t)) {
    return t;
  }
  for (const i of e) {
    const n = i.axis || qg(i.position) || t.length > 1 && ha(t[0].toLowerCase());
    if (n) {
      return n;
    }
  }
  throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
}
function fa(t, e, i) {
  if (i[e + "AxisID"] === t) {
    return {
      axis: e
    };
  }
}
function Qg(t, e) {
  if (e.data && e.data.datasets) {
    const i = e.data.datasets.filter(n => n.xAxisID === t || n.yAxisID === t);
    if (i.length) {
      return fa(t, "x", i[0]) || fa(t, "y", i[0]);
    }
  }
  return {};
}
function Jg(t, e) {
  const i = Ne[t.type] || {
    scales: {}
  };
  const n = e.scales || {};
  const s = qs(t.type, e);
  const r = Object.create(null);
  Object.keys(n).forEach(o => {
    const a = n[o];
    if (!Q(a)) {
      return console.error(`Invalid scale configuration for scale: ${o}`);
    }
    if (a._proxy) {
      return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
    }
    const c = Qs(o, a, Qg(o, t), ht.scales[a.type]);
    const l = Gg(c, s);
    const h = i.scales || {};
    r[o] = Mi(Object.create(null), [{
      axis: c
    }, a, h[c], h[l]]);
  });
  t.data.datasets.forEach(o => {
    const a = o.type || t.type;
    const c = o.indexAxis || qs(a, e);
    const h = (Ne[a] || {}).scales || {};
    Object.keys(h).forEach(d => {
      const g = Xg(d, c);
      const p = o[g + "AxisID"] || g;
      r[p] = r[p] || Object.create(null);
      Mi(r[p], [{
        axis: g
      }, n[p], h[d]]);
    });
  });
  Object.keys(r).forEach(o => {
    const a = r[o];
    Mi(a, [ht.scales[a.type], ht.scale]);
  });
  return r;
}
function fc(t) {
  const e = t.options ||= {};
  e.plugins = et(e.plugins, {});
  e.scales = Jg(t, e);
}
function uc(t) {
  t = t || {};
  t.datasets = t.datasets || [];
  t.labels = t.labels || [];
  return t;
}
function tp(t) {
  t = t || {};
  t.data = uc(t.data);
  fc(t);
  return t;
}
const ua = new Map();
const dc = new Set();
function mn(t, e) {
  let i = ua.get(t);
  if (!i) {
    i = e();
    ua.set(t, i);
    dc.add(i);
  }
  return i;
}
const mi = (t, e, i) => {
  const n = ve(e, i);
  if (n !== undefined) {
    t.add(n);
  }
};
class ep {
  constructor(e) {
    this._config = tp(e);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = uc(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    this.clearCache();
    fc(e);
  }
  clearCache() {
    this._scopeCache.clear();
    this._resolverCache.clear();
  }
  datasetScopeKeys(e) {
    return mn(e, () => [[`datasets.${e}`, ""]]);
  }
  datasetAnimationScopeKeys(e, i) {
    return mn(`${e}.transition.${i}`, () => [[`datasets.${e}.transitions.${i}`, `transitions.${i}`], [`datasets.${e}`, ""]]);
  }
  datasetElementScopeKeys(e, i) {
    return mn(`${e}-${i}`, () => [[`datasets.${e}.elements.${i}`, `datasets.${e}`, `elements.${i}`, ""]]);
  }
  pluginScopeKeys(e) {
    const i = e.id;
    const n = this.type;
    return mn(`${n}-plugin-${i}`, () => [[`plugins.${i}`, ...(e.additionalOptionScopes || [])]]);
  }
  _cachedScopes(e, i) {
    const n = this._scopeCache;
    let s = n.get(e);
    if (!s || i) {
      s = new Map();
      n.set(e, s);
    }
    return s;
  }
  getOptionScopes(e, i, n) {
    const {
      options: s,
      type: r
    } = this;
    const o = this._cachedScopes(e, n);
    const a = o.get(i);
    if (a) {
      return a;
    }
    const c = new Set();
    i.forEach(h => {
      if (e) {
        c.add(e);
        h.forEach(d => mi(c, e, d));
      }
      h.forEach(d => mi(c, s, d));
      h.forEach(d => mi(c, Ne[r] || {}, d));
      h.forEach(d => mi(c, ht, d));
      h.forEach(d => mi(c, Gs, d));
    });
    const l = Array.from(c);
    if (l.length === 0) {
      l.push(Object.create(null));
    }
    if (dc.has(i)) {
      o.set(i, l);
    }
    return l;
  }
  chartOptionScopes() {
    const {
      options: e,
      type: i
    } = this;
    return [e, Ne[i] || {}, ht.datasets[i] || {}, {
      type: i
    }, ht, Gs];
  }
  resolveNamedOptions(e, i, n, s = [""]) {
    const r = {
      $shared: true
    };
    const {
      resolver: o,
      subPrefixes: a
    } = da(this._resolverCache, e, s);
    let c = o;
    if (np(o, i)) {
      r.$shared = false;
      n = ke(n) ? n() : n;
      const l = this.createResolver(e, n, a);
      c = si(o, n, l);
    }
    for (const l of i) {
      r[l] = c[l];
    }
    return r;
  }
  createResolver(e, i, n = [""], s) {
    const {
      resolver: r
    } = da(this._resolverCache, e, n);
    if (Q(i)) {
      return si(r, i, undefined, s);
    } else {
      return r;
    }
  }
}
function da(t, e, i) {
  let n = t.get(e);
  if (!n) {
    n = new Map();
    t.set(e, n);
  }
  const s = i.join();
  let r = n.get(s);
  if (!r) {
    r = {
      resolver: vr(e, i),
      subPrefixes: i.filter(a => !a.toLowerCase().includes("hover"))
    };
    n.set(s, r);
  }
  return r;
}
const ip = t => Q(t) && Object.getOwnPropertyNames(t).some(e => ke(t[e]));
function np(t, e) {
  const {
    isScriptable: i,
    isIndexable: n
  } = tc(t);
  for (const s of e) {
    const r = i(s);
    const o = n(s);
    const a = (o || r) && t[s];
    if (r && (ke(a) || ip(a)) || o && lt(a)) {
      return true;
    }
  }
  return false;
}
var sp = "4.4.2";
const rp = ["top", "bottom", "left", "right", "chartArea"];
function ga(t, e) {
  return t === "top" || t === "bottom" || rp.indexOf(t) === -1 && e === "x";
}
function pa(t, e) {
  return function (i, n) {
    if (i[t] === n[t]) {
      return i[e] - n[e];
    } else {
      return i[t] - n[t];
    }
  };
}
function _a(t) {
  const e = t.chart;
  const i = e.options.animation;
  e.notifyPlugins("afterRender");
  nt(i && i.onComplete, [t], e);
}
function op(t) {
  const e = t.chart;
  const i = e.options.animation;
  nt(i && i.onProgress, [t], e);
}
function gc(t) {
  if (Er() && typeof t == "string") {
    t = document.getElementById(t);
  } else if (t && t.length) {
    t = t[0];
  }
  if (t && t.canvas) {
    t = t.canvas;
  }
  return t;
}
const En = {};
const ma = t => {
  const e = gc(t);
  return Object.values(En).filter(i => i.canvas === e).pop();
};
function ap(t, e, i) {
  const n = Object.keys(t);
  for (const s of n) {
    const r = +s;
    if (r >= e) {
      const o = t[s];
      delete t[s];
      if (i > 0 || r > e) {
        t[r + i] = o;
      }
    }
  }
}
function lp(t, e, i, n) {
  if (!i || t.type === "mouseout") {
    return null;
  } else if (n) {
    return e;
  } else {
    return t;
  }
}
function xn(t, e, i) {
  if (t.options.clip) {
    return t[i];
  } else {
    return e[i];
  }
}
function cp(t, e) {
  const {
    xScale: i,
    yScale: n
  } = t;
  if (i && n) {
    return {
      left: xn(i, e, "left"),
      right: xn(i, e, "right"),
      top: xn(n, e, "top"),
      bottom: xn(n, e, "bottom")
    };
  } else {
    return e;
  }
}
class Dr {
  static defaults = ht;
  static instances = En;
  static overrides = Ne;
  static registry = jt;
  static version = sp;
  static getChart = ma;
  static register(...e) {
    jt.add(...e);
    xa();
  }
  static unregister(...e) {
    jt.remove(...e);
    xa();
  }
  constructor(e, i) {
    const n = this.config = new ep(i);
    const s = gc(e);
    const r = ma(s);
    if (r) {
      throw new Error("Canvas is already in use. Chart with ID '" + r.id + "' must be destroyed before the canvas with ID '" + r.canvas.id + "' can be reused.");
    }
    const o = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || Ag(s))();
    this.platform.updateConfig(n);
    const a = this.platform.acquireContext(s, o.aspectRatio);
    const c = a && a.canvas;
    const l = c && c.height;
    const h = c && c.width;
    this.id = vd();
    this.ctx = a;
    this.canvas = c;
    this.width = h;
    this.height = l;
    this._options = o;
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
    this._plugins = new Wg();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = zd(d => this.update(d), o.resizeDelay || 0);
    this._dataChanges = [];
    En[this.id] = this;
    if (!a || !c) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    ne.listen(this, "complete", _a);
    ne.listen(this, "progress", op);
    this._initialize();
    if (this.attached) {
      this.update();
    }
  }
  get aspectRatio() {
    const {
      options: {
        aspectRatio: e,
        maintainAspectRatio: i
      },
      width: n,
      height: s,
      _aspectRatio: r
    } = this;
    if (it(e)) {
      if (i && r) {
        return r;
      } else if (s) {
        return n / s;
      } else {
        return null;
      }
    } else {
      return e;
    }
  }
  get data() {
    return this.config.data;
  }
  set data(e) {
    this.config.data = e;
  }
  get options() {
    return this._options;
  }
  set options(e) {
    this.config.options = e;
  }
  get registry() {
    return jt;
  }
  _initialize() {
    this.notifyPlugins("beforeInit");
    if (this.options.responsive) {
      this.resize();
    } else {
      $o(this, this.options.devicePixelRatio);
    }
    this.bindEvents();
    this.notifyPlugins("afterInit");
    return this;
  }
  clear() {
    No(this.canvas, this.ctx);
    return this;
  }
  stop() {
    ne.stop(this);
    return this;
  }
  resize(e, i) {
    if (ne.running(this)) {
      this._resizeBeforeDraw = {
        width: e,
        height: i
      };
    } else {
      this._resize(e, i);
    }
  }
  _resize(e, i) {
    const n = this.options;
    const s = this.canvas;
    const r = n.maintainAspectRatio && this.aspectRatio;
    const o = this.platform.getMaximumSize(s, e, i, r);
    const a = n.devicePixelRatio || this.platform.getDevicePixelRatio();
    const c = this.width ? "resize" : "attach";
    this.width = o.width;
    this.height = o.height;
    this._aspectRatio = this.aspectRatio;
    if ($o(this, a, true)) {
      this.notifyPlugins("resize", {
        size: o
      });
      nt(n.onResize, [this, o], this);
      if (this.attached && this._doResize(c)) {
        this.render();
      }
    }
  }
  ensureScalesHaveIDs() {
    const i = this.options.scales || {};
    vt(i, (n, s) => {
      n.id = s;
    });
  }
  buildOrUpdateScales() {
    const e = this.options;
    const i = e.scales;
    const n = this.scales;
    const s = Object.keys(n).reduce((o, a) => {
      o[a] = false;
      return o;
    }, {});
    let r = [];
    if (i) {
      r = r.concat(Object.keys(i).map(o => {
        const a = i[o];
        const c = Qs(o, a);
        const l = c === "r";
        const h = c === "x";
        return {
          options: a,
          dposition: l ? "chartArea" : h ? "bottom" : "left",
          dtype: l ? "radialLinear" : h ? "category" : "linear"
        };
      }));
    }
    vt(r, o => {
      const a = o.options;
      const c = a.id;
      const l = Qs(c, a);
      const h = et(a.type, o.dtype);
      if (a.position === undefined || ga(a.position, l) !== ga(o.dposition)) {
        a.position = o.dposition;
      }
      s[c] = true;
      let d = null;
      if (c in n && n[c].type === h) {
        d = n[c];
      } else {
        const g = jt.getScale(h);
        d = new g({
          id: c,
          type: h,
          ctx: this.ctx,
          chart: this
        });
        n[d.id] = d;
      }
      d.init(a, e);
    });
    vt(s, (o, a) => {
      if (!o) {
        delete n[a];
      }
    });
    vt(n, o => {
      Ut.configure(this, o, o.options);
      Ut.addBox(this, o);
    });
  }
  _updateMetasets() {
    const e = this._metasets;
    const i = this.data.datasets.length;
    const n = e.length;
    e.sort((s, r) => s.index - r.index);
    if (n > i) {
      for (let s = i; s < n; ++s) {
        this._destroyDatasetMeta(s);
      }
      e.splice(i, n - i);
    }
    this._sortedMetasets = e.slice(0).sort(pa("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: e,
      data: {
        datasets: i
      }
    } = this;
    if (e.length > i.length) {
      delete this._stacks;
    }
    e.forEach((n, s) => {
      if (i.filter(r => r === n._dataset).length === 0) {
        this._destroyDatasetMeta(s);
      }
    });
  }
  buildOrUpdateControllers() {
    const e = [];
    const i = this.data.datasets;
    let n;
    let s;
    this._removeUnreferencedMetasets();
    n = 0;
    s = i.length;
    for (; n < s; n++) {
      const r = i[n];
      let o = this.getDatasetMeta(n);
      const a = r.type || this.config.type;
      if (o.type && o.type !== a) {
        this._destroyDatasetMeta(n);
        o = this.getDatasetMeta(n);
      }
      o.type = a;
      o.indexAxis = r.indexAxis || qs(a, this.options);
      o.order = r.order || 0;
      o.index = n;
      o.label = "" + r.label;
      o.visible = this.isDatasetVisible(n);
      if (o.controller) {
        o.controller.updateIndex(n);
        o.controller.linkScales();
      } else {
        const c = jt.getController(a);
        const {
          datasetElementType: l,
          dataElementType: h
        } = ht.datasets[a];
        Object.assign(c, {
          dataElementType: jt.getElement(h),
          datasetElementType: l && jt.getElement(l)
        });
        o.controller = new c(this, n);
        e.push(o.controller);
      }
    }
    this._updateMetasets();
    return e;
  }
  _resetElements() {
    vt(this.data.datasets, (e, i) => {
      this.getDatasetMeta(i).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements();
    this.notifyPlugins("reset");
  }
  update(e) {
    const i = this.config;
    i.update();
    const n = this._options = i.createResolver(i.chartOptionScopes(), this.getContext());
    const s = this._animationsDisabled = !n.animation;
    this._updateScales();
    this._checkEventBindings();
    this._updateHiddenIndices();
    this._plugins.invalidate();
    if (this.notifyPlugins("beforeUpdate", {
      mode: e,
      cancelable: true
    }) === false) {
      return;
    }
    const r = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let o = 0;
    for (let l = 0, h = this.data.datasets.length; l < h; l++) {
      const {
        controller: d
      } = this.getDatasetMeta(l);
      const g = !s && r.indexOf(d) === -1;
      d.buildOrUpdateElements(g);
      o = Math.max(+d.getMaxOverflow(), o);
    }
    o = this._minPadding = n.layout.autoPadding ? o : 0;
    this._updateLayout(o);
    if (!s) {
      vt(r, l => {
        l.reset();
      });
    }
    this._updateDatasets(e);
    this.notifyPlugins("afterUpdate", {
      mode: e
    });
    this._layers.sort(pa("z", "_idx"));
    const {
      _active: a,
      _lastEvent: c
    } = this;
    if (c) {
      this._eventHandler(c, true);
    } else if (a.length) {
      this._updateHoverStyles(a, a, true);
    }
    this.render();
  }
  _updateScales() {
    vt(this.scales, e => {
      Ut.removeBox(this, e);
    });
    this.ensureScalesHaveIDs();
    this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const e = this.options;
    const i = new Set(Object.keys(this._listeners));
    const n = new Set(e.events);
    if (!Oo(i, n) || !!this._responsiveListeners !== e.responsive) {
      this.unbindEvents();
      this.bindEvents();
    }
  }
  _updateHiddenIndices() {
    const {
      _hiddenIndices: e
    } = this;
    const i = this._getUniformDataChanges() || [];
    for (const {
      method: n,
      start: s,
      count: r
    } of i) {
      const o = n === "_removeElements" ? -r : r;
      ap(e, s, o);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length) {
      return;
    }
    this._dataChanges = [];
    const i = this.data.datasets.length;
    const n = r => new Set(e.filter(o => o[0] === r).map((o, a) => a + "," + o.splice(1).join(",")));
    const s = n(0);
    for (let r = 1; r < i; r++) {
      if (!Oo(s, n(r))) {
        return;
      }
    }
    return Array.from(s).map(r => r.split(",")).map(r => ({
      method: r[1],
      start: +r[2],
      count: +r[3]
    }));
  }
  _updateLayout(e) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: true
    }) === false) {
      return;
    }
    Ut.update(this, this.width, this.height, e);
    const i = this.chartArea;
    const n = i.width <= 0 || i.height <= 0;
    this._layers = [];
    vt(this.boxes, s => {
      if (!n || s.position !== "chartArea") {
        if (s.configure) {
          s.configure();
        }
        this._layers.push(...s._layers());
      }
    }, this);
    this._layers.forEach((s, r) => {
      s._idx = r;
    });
    this.notifyPlugins("afterLayout");
  }
  _updateDatasets(e) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: e,
      cancelable: true
    }) !== false) {
      for (let i = 0, n = this.data.datasets.length; i < n; ++i) {
        this.getDatasetMeta(i).controller.configure();
      }
      for (let i = 0, n = this.data.datasets.length; i < n; ++i) {
        this._updateDataset(i, ke(e) ? e({
          datasetIndex: i
        }) : e);
      }
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: e
      });
    }
  }
  _updateDataset(e, i) {
    const n = this.getDatasetMeta(e);
    const s = {
      meta: n,
      index: e,
      mode: i,
      cancelable: true
    };
    if (this.notifyPlugins("beforeDatasetUpdate", s) !== false) {
      n.controller._update(i);
      s.cancelable = false;
      this.notifyPlugins("afterDatasetUpdate", s);
    }
  }
  render() {
    if (this.notifyPlugins("beforeRender", {
      cancelable: true
    }) !== false) {
      if (ne.has(this)) {
        if (this.attached && !ne.running(this)) {
          ne.start(this);
        }
      } else {
        this.draw();
        _a({
          chart: this
        });
      }
    }
  }
  draw() {
    let e;
    if (this._resizeBeforeDraw) {
      const {
        width: n,
        height: s
      } = this._resizeBeforeDraw;
      this._resize(n, s);
      this._resizeBeforeDraw = null;
    }
    this.clear();
    if (this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: true
    }) === false) {
      return;
    }
    const i = this._layers;
    for (e = 0; e < i.length && i[e].z <= 0; ++e) {
      i[e].draw(this.chartArea);
    }
    for (this._drawDatasets(); e < i.length; ++e) {
      i[e].draw(this.chartArea);
    }
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(e) {
    const i = this._sortedMetasets;
    const n = [];
    let s;
    let r;
    s = 0;
    r = i.length;
    for (; s < r; ++s) {
      const o = i[s];
      if (!e || o.visible) {
        n.push(o);
      }
    }
    return n;
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
    const e = this.getSortedVisibleDatasetMetas();
    for (let i = e.length - 1; i >= 0; --i) {
      this._drawDataset(e[i]);
    }
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(e) {
    const i = this.ctx;
    const n = e._clip;
    const s = !n.disabled;
    const r = cp(e, this.chartArea);
    const o = {
      meta: e,
      index: e.index,
      cancelable: true
    };
    if (this.notifyPlugins("beforeDatasetDraw", o) !== false) {
      if (s) {
        xr(i, {
          left: n.left === false ? 0 : r.left - n.left,
          right: n.right === false ? this.width : r.right + n.right,
          top: n.top === false ? 0 : r.top - n.top,
          bottom: n.bottom === false ? this.height : r.bottom + n.bottom
        });
      }
      e.controller.draw();
      if (s) {
        br(i);
      }
      o.cancelable = false;
      this.notifyPlugins("afterDatasetDraw", o);
    }
  }
  isPointInArea(e) {
    return Ge(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, i, n, s) {
    const r = rg.modes[i];
    if (typeof r == "function") {
      return r(this, e, n, s);
    } else {
      return [];
    }
  }
  getDatasetMeta(e) {
    const i = this.data.datasets[e];
    const n = this._metasets;
    let s = n.filter(r => r && r._dataset === i).pop();
    if (!s) {
      s = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: i && i.order || 0,
        index: e,
        _dataset: i,
        _parsed: [],
        _sorted: false
      };
      n.push(s);
    }
    return s;
  }
  getContext() {
    return this.$context ||= hi(null, {
      chart: this,
      type: "chart"
    });
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(e) {
    const i = this.data.datasets[e];
    if (!i) {
      return false;
    }
    const n = this.getDatasetMeta(e);
    if (typeof n.hidden == "boolean") {
      return !n.hidden;
    } else {
      return !i.hidden;
    }
  }
  setDatasetVisibility(e, i) {
    const n = this.getDatasetMeta(e);
    n.hidden = !i;
  }
  toggleDataVisibility(e) {
    this._hiddenIndices[e] = !this._hiddenIndices[e];
  }
  getDataVisibility(e) {
    return !this._hiddenIndices[e];
  }
  _updateVisibility(e, i, n) {
    const s = n ? "show" : "hide";
    const r = this.getDatasetMeta(e);
    const o = r.controller._resolveAnimations(undefined, s);
    if (Hi(i)) {
      r.data[i].hidden = !n;
      this.update();
    } else {
      this.setDatasetVisibility(e, n);
      o.update(r, {
        visible: n
      });
      this.update(a => a.datasetIndex === e ? s : undefined);
    }
  }
  hide(e, i) {
    this._updateVisibility(e, i, false);
  }
  show(e, i) {
    this._updateVisibility(e, i, true);
  }
  _destroyDatasetMeta(e) {
    const i = this._metasets[e];
    if (i && i.controller) {
      i.controller._destroy();
    }
    delete this._metasets[e];
  }
  _stop() {
    let e;
    let i;
    this.stop();
    ne.remove(this);
    e = 0;
    i = this.data.datasets.length;
    for (; e < i; ++e) {
      this._destroyDatasetMeta(e);
    }
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const {
      canvas: e,
      ctx: i
    } = this;
    this._stop();
    this.config.clearCache();
    if (e) {
      this.unbindEvents();
      No(e, i);
      this.platform.releaseContext(i);
      this.canvas = null;
      this.ctx = null;
    }
    delete En[this.id];
    this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...e) {
    return this.canvas.toDataURL(...e);
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
    const e = this._listeners;
    const i = this.platform;
    const n = (r, o) => {
      i.addEventListener(this, r, o);
      e[r] = o;
    };
    const s = (r, o, a) => {
      r.offsetX = o;
      r.offsetY = a;
      this._eventHandler(r);
    };
    vt(this.options.events, r => n(r, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners ||= {};
    const e = this._responsiveListeners;
    const i = this.platform;
    const n = (c, l) => {
      i.addEventListener(this, c, l);
      e[c] = l;
    };
    const s = (c, l) => {
      if (e[c]) {
        i.removeEventListener(this, c, l);
        delete e[c];
      }
    };
    const r = (c, l) => {
      if (this.canvas) {
        this.resize(c, l);
      }
    };
    let o;
    const a = () => {
      s("attach", a);
      this.attached = true;
      this.resize();
      n("resize", r);
      n("detach", o);
    };
    o = () => {
      this.attached = false;
      s("resize", r);
      this._stop();
      this._resize(0, 0);
      n("attach", a);
    };
    if (i.isAttached(this.canvas)) {
      a();
    } else {
      o();
    }
  }
  unbindEvents() {
    vt(this._listeners, (e, i) => {
      this.platform.removeEventListener(this, i, e);
    });
    this._listeners = {};
    vt(this._responsiveListeners, (e, i) => {
      this.platform.removeEventListener(this, i, e);
    });
    this._responsiveListeners = undefined;
  }
  updateHoverStyle(e, i, n) {
    const s = n ? "set" : "remove";
    let r;
    let o;
    let a;
    let c;
    if (i === "dataset") {
      r = this.getDatasetMeta(e[0].datasetIndex);
      r.controller["_" + s + "DatasetHoverStyle"]();
    }
    a = 0;
    c = e.length;
    for (; a < c; ++a) {
      o = e[a];
      const l = o && this.getDatasetMeta(o.datasetIndex).controller;
      if (l) {
        l[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e) {
    const i = this._active || [];
    const n = e.map(({
      datasetIndex: r,
      index: o
    }) => {
      const a = this.getDatasetMeta(r);
      if (!a) {
        throw new Error("No dataset found at index " + r);
      }
      return {
        datasetIndex: r,
        element: a.data[o],
        index: o
      };
    });
    if (!Do(n, i)) {
      this._active = n;
      this._lastEvent = null;
      this._updateHoverStyles(n, i);
    }
  }
  notifyPlugins(e, i, n) {
    return this._plugins.notify(this, e, i, n);
  }
  isPluginEnabled(e) {
    return this._plugins._cache.filter(i => i.plugin.id === e).length === 1;
  }
  _updateHoverStyles(e, i, n) {
    const s = this.options.hover;
    const r = (c, l) => c.filter(h => !l.some(d => h.datasetIndex === d.datasetIndex && h.index === d.index));
    const o = r(i, e);
    const a = n ? e : r(e, i);
    if (o.length) {
      this.updateHoverStyle(o, s.mode, false);
    }
    if (a.length && s.mode) {
      this.updateHoverStyle(a, s.mode, true);
    }
  }
  _eventHandler(e, i) {
    const n = {
      event: e,
      replay: i,
      cancelable: true,
      inChartArea: this.isPointInArea(e)
    };
    const s = o => (o.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins("beforeEvent", n, s) === false) {
      return;
    }
    const r = this._handleEvent(e, i, n.inChartArea);
    n.cancelable = false;
    this.notifyPlugins("afterEvent", n, s);
    if (r || n.changed) {
      this.render();
    }
    return this;
  }
  _handleEvent(e, i, n) {
    const {
      _active: s = [],
      options: r
    } = this;
    const o = i;
    const a = this._getActiveElements(e, s, n, o);
    const c = Dd(e);
    const l = lp(e, this._lastEvent, n, c);
    if (n) {
      this._lastEvent = null;
      nt(r.onHover, [e, a, this], this);
      if (c) {
        nt(r.onClick, [e, a, this], this);
      }
    }
    const h = !Do(a, s);
    if (h || i) {
      this._active = a;
      this._updateHoverStyles(a, s, i);
    }
    this._lastEvent = l;
    return h;
  }
  _getActiveElements(e, i, n, s) {
    if (e.type === "mouseout") {
      return [];
    }
    if (!n) {
      return i;
    }
    const r = this.options.hover;
    return this.getElementsAtEventForMode(e, r.mode, r, s);
  }
}
function xa() {
  return vt(Dr.instances, t => t._plugins.invalidate());
}
function pc(t, e) {
  const {
    x: i,
    y: n,
    base: s,
    width: r,
    height: o
  } = t.getProps(["x", "y", "base", "width", "height"], e);
  let a;
  let c;
  let l;
  let h;
  let d;
  if (t.horizontal) {
    d = o / 2;
    a = Math.min(i, s);
    c = Math.max(i, s);
    l = n - d;
    h = n + d;
  } else {
    d = r / 2;
    a = i - d;
    c = i + d;
    l = Math.min(n, s);
    h = Math.max(n, s);
  }
  return {
    left: a,
    top: l,
    right: c,
    bottom: h
  };
}
function _e(t, e, i, n) {
  if (t) {
    return 0;
  } else {
    return le(e, i, n);
  }
}
function hp(t, e, i) {
  const n = t.options.borderWidth;
  const s = t.borderSkipped;
  const r = Jl(n);
  return {
    t: _e(s.top, r.top, 0, i),
    r: _e(s.right, r.right, 0, e),
    b: _e(s.bottom, r.bottom, 0, i),
    l: _e(s.left, r.left, 0, e)
  };
}
function fp(t, e, i) {
  const {
    enableBorderRadius: n
  } = t.getProps(["enableBorderRadius"]);
  const s = t.options.borderRadius;
  const r = wr(s);
  const o = Math.min(e, i);
  const a = t.borderSkipped;
  const c = n || Q(s);
  return {
    topLeft: _e(!c || a.top || a.left, r.topLeft, 0, o),
    topRight: _e(!c || a.top || a.right, r.topRight, 0, o),
    bottomLeft: _e(!c || a.bottom || a.left, r.bottomLeft, 0, o),
    bottomRight: _e(!c || a.bottom || a.right, r.bottomRight, 0, o)
  };
}
function up(t) {
  const e = pc(t);
  const i = e.right - e.left;
  const n = e.bottom - e.top;
  const s = hp(t, i / 2, n / 2);
  const r = fp(t, i / 2, n / 2);
  return {
    outer: {
      x: e.left,
      y: e.top,
      w: i,
      h: n,
      radius: r
    },
    inner: {
      x: e.left + s.l,
      y: e.top + s.t,
      w: i - s.l - s.r,
      h: n - s.t - s.b,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, r.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(s.b, s.r))
      }
    }
  };
}
function Ts(t, e, i, n) {
  const s = e === null;
  const r = i === null;
  const a = t && (!s || !r) && pc(t, n);
  return a && (s || Xe(e, a.left, a.right)) && (r || Xe(i, a.top, a.bottom));
}
function dp(t) {
  return t.topLeft || t.topRight || t.bottomLeft || t.bottomRight;
}
function gp(t, e) {
  t.rect(e.x, e.y, e.w, e.h);
}
function Os(t, e, i = {}) {
  const n = t.x !== i.x ? -e : 0;
  const s = t.y !== i.y ? -e : 0;
  const r = (t.x + t.w !== i.x + i.w ? e : 0) - n;
  const o = (t.y + t.h !== i.y + i.h ? e : 0) - s;
  return {
    x: t.x + n,
    y: t.y + s,
    w: t.w + r,
    h: t.h + o,
    radius: t.radius
  };
}
class pp extends qi {
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
  constructor(e) {
    super();
    this.options = undefined;
    this.horizontal = undefined;
    this.base = undefined;
    this.width = undefined;
    this.height = undefined;
    this.inflateAmount = undefined;
    if (e) {
      Object.assign(this, e);
    }
  }
  draw(e) {
    const {
      inflateAmount: i,
      options: {
        borderColor: n,
        backgroundColor: s
      }
    } = this;
    const {
      inner: r,
      outer: o
    } = up(this);
    const a = dp(o.radius) ? yr : gp;
    e.save();
    if (o.w !== r.w || o.h !== r.h) {
      e.beginPath();
      a(e, Os(o, i, r));
      e.clip();
      a(e, Os(r, -i, o));
      e.fillStyle = n;
      e.fill("evenodd");
    }
    e.beginPath();
    a(e, Os(r, i));
    e.fillStyle = s;
    e.fill();
    e.restore();
  }
  inRange(e, i, n) {
    return Ts(this, e, i, n);
  }
  inXRange(e, i) {
    return Ts(this, e, null, i);
  }
  inYRange(e, i) {
    return Ts(this, null, e, i);
  }
  getCenterPoint(e) {
    const {
      x: i,
      y: n,
      base: s,
      horizontal: r
    } = this.getProps(["x", "y", "base", "horizontal"], e);
    return {
      x: r ? (i + s) / 2 : i,
      y: r ? n : (n + s) / 2
    };
  }
  getRange(e) {
    if (e === "x") {
      return this.width / 2;
    } else {
      return this.height / 2;
    }
  }
}
const Js = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"];
const ba = Js.map(t => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function _c(t) {
  return Js[t % Js.length];
}
function mc(t) {
  return ba[t % ba.length];
}
function _p(t, e) {
  t.borderColor = _c(e);
  t.backgroundColor = mc(e);
  return ++e;
}
function mp(t, e) {
  t.backgroundColor = t.data.map(() => _c(e++));
  return e;
}
function xp(t, e) {
  t.backgroundColor = t.data.map(() => mc(e++));
  return e;
}
function bp(t) {
  let e = 0;
  return (i, n) => {
    const s = t.getDatasetMeta(n).controller;
    if (s instanceof Q0) {
      e = mp(i, e);
    } else if (s instanceof J0) {
      e = xp(i, e);
    } else if (s) {
      e = _p(i, e);
    }
  };
}
function ya(t) {
  let e;
  for (e in t) {
    if (t[e].borderColor || t[e].backgroundColor) {
      return true;
    }
  }
  return false;
}
function yp(t) {
  return t && (t.borderColor || t.backgroundColor);
}
var O_ = {
  id: "colors",
  defaults: {
    enabled: true,
    forceOverride: false
  },
  beforeLayout(t, e, i) {
    if (!i.enabled) {
      return;
    }
    const {
      data: {
        datasets: n
      },
      options: s
    } = t.config;
    const {
      elements: r
    } = s;
    if (!i.forceOverride && (ya(n) || yp(s) || r && ya(r))) {
      return;
    }
    const o = bp(t);
    n.forEach(o);
  }
};
const wa = (t, e) => {
  let {
    boxHeight: i = e,
    boxWidth: n = e
  } = t;
  if (t.usePointStyle) {
    i = Math.min(i, e);
    n = t.pointStyleWidth || Math.min(n, e);
  }
  return {
    boxWidth: n,
    boxHeight: i,
    itemHeight: Math.max(e, i)
  };
};
const wp = (t, e) => t !== null && e !== null && t.datasetIndex === e.datasetIndex && t.index === e.index;
class va extends qi {
  constructor(e) {
    super();
    this._added = false;
    this.legendHitBoxes = [];
    this._hoveredItem = null;
    this.doughnutMode = false;
    this.chart = e.chart;
    this.options = e.options;
    this.ctx = e.ctx;
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
  update(e, i, n) {
    this.maxWidth = e;
    this.maxHeight = i;
    this._margins = n;
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
    const e = this.options.labels || {};
    let i = nt(e.generateLabels, [this.chart], this) || [];
    if (e.filter) {
      i = i.filter(n => e.filter(n, this.chart.data));
    }
    if (e.sort) {
      i = i.sort((n, s) => e.sort(n, s, this.chart.data));
    }
    if (this.options.reverse) {
      i.reverse();
    }
    this.legendItems = i;
  }
  fit() {
    const {
      options: e,
      ctx: i
    } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const n = e.labels;
    const s = Nt(n.font);
    const r = s.size;
    const o = this._computeTitleHeight();
    const {
      boxWidth: a,
      itemHeight: c
    } = wa(n, r);
    let l;
    let h;
    i.font = s.string;
    if (this.isHorizontal()) {
      l = this.maxWidth;
      h = this._fitRows(o, r, a, c) + 10;
    } else {
      h = this.maxHeight;
      l = this._fitCols(o, s, a, c) + 10;
    }
    this.width = Math.min(l, e.maxWidth || this.maxWidth);
    this.height = Math.min(h, e.maxHeight || this.maxHeight);
  }
  _fitRows(e, i, n, s) {
    const {
      ctx: r,
      maxWidth: o,
      options: {
        labels: {
          padding: a
        }
      }
    } = this;
    const c = this.legendHitBoxes = [];
    const l = this.lineWidths = [0];
    const h = s + a;
    let d = e;
    r.textAlign = "left";
    r.textBaseline = "middle";
    let g = -1;
    let p = -h;
    this.legendItems.forEach((b, y) => {
      const k = n + i / 2 + r.measureText(b.text).width;
      if (y === 0 || l[l.length - 1] + k + a * 2 > o) {
        d += h;
        l[l.length - (y > 0 ? 0 : 1)] = 0;
        p += h;
        g++;
      }
      c[y] = {
        left: 0,
        top: p,
        row: g,
        width: k,
        height: s
      };
      l[l.length - 1] += k + a;
    });
    return d;
  }
  _fitCols(e, i, n, s) {
    const {
      ctx: r,
      maxHeight: o,
      options: {
        labels: {
          padding: a
        }
      }
    } = this;
    const c = this.legendHitBoxes = [];
    const l = this.columnSizes = [];
    const h = o - e;
    let d = a;
    let g = 0;
    let p = 0;
    let b = 0;
    let y = 0;
    this.legendItems.forEach((k, E) => {
      const {
        itemWidth: D,
        itemHeight: z
      } = vp(n, i, r, k, s);
      if (E > 0 && p + z + a * 2 > h) {
        d += g + a;
        l.push({
          width: g,
          height: p
        });
        b += g + a;
        y++;
        g = p = 0;
      }
      c[E] = {
        left: b,
        top: p,
        col: y,
        width: D,
        height: z
      };
      g = Math.max(g, D);
      p += z + a;
    });
    d += g;
    l.push({
      width: g,
      height: p
    });
    return d;
  }
  adjustHitBoxes() {
    if (!this.options.display) {
      return;
    }
    const e = this._computeTitleHeight();
    const {
      legendHitBoxes: i,
      options: {
        align: n,
        labels: {
          padding: s
        },
        rtl: r
      }
    } = this;
    const o = vs(r, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0;
      let c = kt(n, this.left + s, this.right - this.lineWidths[a]);
      for (const l of i) {
        if (a !== l.row) {
          a = l.row;
          c = kt(n, this.left + s, this.right - this.lineWidths[a]);
        }
        l.top += this.top + e + s;
        l.left = o.leftForLtr(o.x(c), l.width);
        c += l.width + s;
      }
    } else {
      let a = 0;
      let c = kt(n, this.top + e + s, this.bottom - this.columnSizes[a].height);
      for (const l of i) {
        if (l.col !== a) {
          a = l.col;
          c = kt(n, this.top + e + s, this.bottom - this.columnSizes[a].height);
        }
        l.top = c;
        l.left += this.left + s;
        l.left = o.leftForLtr(o.x(l.left), l.width);
        c += l.height + s;
      }
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      xr(e, this);
      this._draw();
      br(e);
    }
  }
  _draw() {
    const {
      options: e,
      columnSizes: i,
      lineWidths: n,
      ctx: s
    } = this;
    const {
      align: r,
      labels: o
    } = e;
    const a = ht.color;
    const c = vs(e.rtl, this.left, this.width);
    const l = Nt(o.font);
    const {
      padding: h
    } = o;
    const d = l.size;
    const g = d / 2;
    let p;
    this.drawTitle();
    s.textAlign = c.textAlign("left");
    s.textBaseline = "middle";
    s.lineWidth = 0.5;
    s.font = l.string;
    const {
      boxWidth: b,
      boxHeight: y,
      itemHeight: k
    } = wa(o, d);
    const E = function (V, I, W) {
      if (isNaN(b) || b <= 0 || isNaN(y) || y < 0) {
        return;
      }
      s.save();
      const j = et(W.lineWidth, 1);
      s.fillStyle = et(W.fillStyle, a);
      s.lineCap = et(W.lineCap, "butt");
      s.lineDashOffset = et(W.lineDashOffset, 0);
      s.lineJoin = et(W.lineJoin, "miter");
      s.lineWidth = j;
      s.strokeStyle = et(W.strokeStyle, a);
      s.setLineDash(et(W.lineDash, []));
      if (o.usePointStyle) {
        const B = {
          radius: y * Math.SQRT2 / 2,
          pointStyle: W.pointStyle,
          rotation: W.rotation,
          borderWidth: j
        };
        const $ = c.xPlus(V, b / 2);
        const X = I + g;
        Xd(s, B, $, X, o.pointStyleWidth && b);
      } else {
        const B = I + Math.max((d - y) / 2, 0);
        const $ = c.leftForLtr(V, b);
        const X = wr(W.borderRadius);
        s.beginPath();
        if (Object.values(X).some(ft => ft !== 0)) {
          yr(s, {
            x: $,
            y: B,
            w: b,
            h: y,
            radius: X
          });
        } else {
          s.rect($, B, b, y);
        }
        s.fill();
        if (j !== 0) {
          s.stroke();
        }
      }
      s.restore();
    };
    const D = function (V, I, W) {
      Ue(s, W.text, V, I + k / 2, l, {
        strikethrough: W.hidden,
        textAlign: c.textAlign(W.textAlign)
      });
    };
    const z = this.isHorizontal();
    const M = this._computeTitleHeight();
    if (z) {
      p = {
        x: kt(r, this.left + h, this.right - n[0]),
        y: this.top + h + M,
        line: 0
      };
    } else {
      p = {
        x: this.left + h,
        y: kt(r, this.top + M + h, this.bottom - i[0].height),
        line: 0
      };
    }
    k0(this.ctx, e.textDirection);
    const R = k + h;
    this.legendItems.forEach((V, I) => {
      s.strokeStyle = V.fontColor;
      s.fillStyle = V.fontColor;
      const W = s.measureText(V.text).width;
      const j = c.textAlign(V.textAlign ||= o.textAlign);
      const B = b + g + W;
      let $ = p.x;
      let X = p.y;
      c.setWidth(this.width);
      if (z) {
        if (I > 0 && $ + B + h > this.right) {
          X = p.y += R;
          p.line++;
          $ = p.x = kt(r, this.left + h, this.right - n[p.line]);
        }
      } else if (I > 0 && X + R > this.bottom) {
        $ = p.x = $ + i[p.line].width + h;
        p.line++;
        X = p.y = kt(r, this.top + M + h, this.bottom - i[p.line].height);
      }
      const ft = c.x($);
      E(ft, X, V);
      $ = Bd(j, $ + b + g, z ? $ + B : this.right, e.rtl);
      D(c.x($), X, V);
      if (z) {
        p.x += B + h;
      } else if (typeof V.text != "string") {
        const gt = l.lineHeight;
        p.y += xc(V, gt) + h;
      } else {
        p.y += R;
      }
    });
    S0(this.ctx, e.textDirection);
  }
  drawTitle() {
    const e = this.options;
    const i = e.title;
    const n = Nt(i.font);
    const s = It(i.padding);
    if (!i.display) {
      return;
    }
    const r = vs(e.rtl, this.left, this.width);
    const o = this.ctx;
    const a = i.position;
    const c = n.size / 2;
    const l = s.top + c;
    let h;
    let d = this.left;
    let g = this.width;
    if (this.isHorizontal()) {
      g = Math.max(...this.lineWidths);
      h = this.top + l;
      d = kt(e.align, d, this.right - g);
    } else {
      const b = this.columnSizes.reduce((y, k) => Math.max(y, k.height), 0);
      h = l + kt(e.align, this.top, this.bottom - b - e.labels.padding - this._computeTitleHeight());
    }
    const p = kt(a, d, d + g);
    o.textAlign = r.textAlign(mr(a));
    o.textBaseline = "middle";
    o.strokeStyle = i.color;
    o.fillStyle = i.color;
    o.font = n.string;
    Ue(o, i.text, p, h, n);
  }
  _computeTitleHeight() {
    const e = this.options.title;
    const i = Nt(e.font);
    const n = It(e.padding);
    if (e.display) {
      return i.lineHeight + n.height;
    } else {
      return 0;
    }
  }
  _getLegendItemAt(e, i) {
    let n;
    let s;
    let r;
    if (Xe(e, this.left, this.right) && Xe(i, this.top, this.bottom)) {
      r = this.legendHitBoxes;
      n = 0;
      for (; n < r.length; ++n) {
        s = r[n];
        if (Xe(e, s.left, s.left + s.width) && Xe(i, s.top, s.top + s.height)) {
          return this.legendItems[n];
        }
      }
    }
    return null;
  }
  handleEvent(e) {
    const i = this.options;
    if (!Ep(e.type, i)) {
      return;
    }
    const n = this._getLegendItemAt(e.x, e.y);
    if (e.type === "mousemove" || e.type === "mouseout") {
      const s = this._hoveredItem;
      const r = wp(s, n);
      if (s && !r) {
        nt(i.onLeave, [e, s, this], this);
      }
      this._hoveredItem = n;
      if (n && !r) {
        nt(i.onHover, [e, n, this], this);
      }
    } else if (n) {
      nt(i.onClick, [e, n, this], this);
    }
  }
}
function vp(t, e, i, n, s) {
  const r = kp(n, t, e, i);
  const o = Sp(s, n, e.lineHeight);
  return {
    itemWidth: r,
    itemHeight: o
  };
}
function kp(t, e, i, n) {
  let s = t.text;
  if (s && typeof s != "string") {
    s = s.reduce((r, o) => r.length > o.length ? r : o);
  }
  return e + i.size / 2 + n.measureText(s).width;
}
function Sp(t, e, i) {
  let n = t;
  if (typeof e.text != "string") {
    n = xc(e, i);
  }
  return n;
}
function xc(t, e) {
  const i = t.text ? t.text.length : 0;
  return e * i;
}
function Ep(t, e) {
  return (t === "mousemove" || t === "mouseout") && (!!e.onHover || !!e.onLeave) || !!e.onClick && (t === "click" || t === "mouseup");
}
var C_ = {
  id: "legend",
  _element: va,
  start(t, e, i) {
    const n = t.legend = new va({
      ctx: t.ctx,
      options: i,
      chart: t
    });
    Ut.configure(t, n, i);
    Ut.addBox(t, n);
  },
  stop(t) {
    Ut.removeBox(t, t.legend);
    delete t.legend;
  },
  beforeUpdate(t, e, i) {
    const n = t.legend;
    Ut.configure(t, n, i);
    n.options = i;
  },
  afterUpdate(t) {
    const e = t.legend;
    e.buildLabels();
    e.adjustHitBoxes();
  },
  afterEvent(t, e) {
    if (!e.replay) {
      t.legend.handleEvent(e.event);
    }
  },
  defaults: {
    display: true,
    position: "top",
    align: "center",
    fullSize: true,
    reverse: false,
    weight: 1000,
    onClick(t, e, i) {
      const n = e.datasetIndex;
      const s = i.chart;
      if (s.isDatasetVisible(n)) {
        s.hide(n);
        e.hidden = true;
      } else {
        s.show(n);
        e.hidden = false;
      }
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: t => t.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(t) {
        const e = t.data.datasets;
        const {
          labels: {
            usePointStyle: i,
            pointStyle: n,
            textAlign: s,
            color: r,
            useBorderRadius: o,
            borderRadius: a
          }
        } = t.legend.options;
        return t._getSortedDatasetMetas().map(c => {
          const l = c.controller.getStyle(i ? 0 : undefined);
          const h = It(l.borderWidth);
          return {
            text: e[c.index].label,
            fillStyle: l.backgroundColor,
            fontColor: r,
            hidden: !c.visible,
            lineCap: l.borderCapStyle,
            lineDash: l.borderDash,
            lineDashOffset: l.borderDashOffset,
            lineJoin: l.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: l.borderColor,
            pointStyle: n || l.pointStyle,
            rotation: l.rotation,
            textAlign: s || l.textAlign,
            borderRadius: o && (a || l.borderRadius),
            datasetIndex: c.index
          };
        }, this);
      }
    },
    title: {
      color: t => t.chart.options.color,
      display: false,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: t => !t.startsWith("on"),
    labels: {
      _scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
    }
  }
};
class bc extends qi {
  constructor(e) {
    super();
    this.chart = e.chart;
    this.options = e.options;
    this.ctx = e.ctx;
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
  update(e, i) {
    const n = this.options;
    this.left = 0;
    this.top = 0;
    if (!n.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = e;
    this.height = this.bottom = i;
    const s = lt(n.text) ? n.text.length : 1;
    this._padding = It(n.padding);
    const r = s * Nt(n.font).lineHeight + this._padding.height;
    if (this.isHorizontal()) {
      this.height = r;
    } else {
      this.width = r;
    }
  }
  isHorizontal() {
    const e = this.options.position;
    return e === "top" || e === "bottom";
  }
  _drawArgs(e) {
    const {
      top: i,
      left: n,
      bottom: s,
      right: r,
      options: o
    } = this;
    const a = o.align;
    let c = 0;
    let l;
    let h;
    let d;
    if (this.isHorizontal()) {
      h = kt(a, n, r);
      d = i + e;
      l = r - n;
    } else {
      if (o.position === "left") {
        h = n + e;
        d = kt(a, s, i);
        c = ut * -0.5;
      } else {
        h = r - e;
        d = kt(a, i, s);
        c = ut * 0.5;
      }
      l = s - i;
    }
    return {
      titleX: h,
      titleY: d,
      maxWidth: l,
      rotation: c
    };
  }
  draw() {
    const e = this.ctx;
    const i = this.options;
    if (!i.display) {
      return;
    }
    const n = Nt(i.font);
    const r = n.lineHeight / 2 + this._padding.top;
    const {
      titleX: o,
      titleY: a,
      maxWidth: c,
      rotation: l
    } = this._drawArgs(r);
    Ue(e, i.text, 0, 0, n, {
      color: i.color,
      maxWidth: c,
      rotation: l,
      textAlign: mr(i.align),
      textBaseline: "middle",
      translation: [o, a]
    });
  }
}
function Ap(t, e) {
  const i = new bc({
    ctx: t.ctx,
    options: e,
    chart: t
  });
  Ut.configure(t, i, e);
  Ut.addBox(t, i);
  t.titleBlock = i;
}
var F_ = {
  id: "title",
  _element: bc,
  start(t, e, i) {
    Ap(t, i);
  },
  stop(t) {
    const e = t.titleBlock;
    Ut.removeBox(t, e);
    delete t.titleBlock;
  },
  beforeUpdate(t, e, i) {
    const n = t.titleBlock;
    Ut.configure(t, n, i);
    n.options = i;
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
const Mp = (t, e, i, n) => {
  if (typeof e == "string") {
    i = t.push(e) - 1;
    n.unshift({
      index: i,
      label: e
    });
  } else if (isNaN(e)) {
    i = null;
  }
  return i;
};
function Dp(t, e, i, n) {
  const s = t.indexOf(e);
  if (s === -1) {
    return Mp(t, e, i, n);
  }
  const r = t.lastIndexOf(e);
  if (s !== r) {
    return i;
  } else {
    return s;
  }
}
const Tp = (t, e) => t === null ? null : le(Math.round(t), 0, e);
function ka(t) {
  const e = this.getLabels();
  if (t >= 0 && t < e.length) {
    return e[t];
  } else {
    return t;
  }
}
class Op extends Ve {
  static id = "category";
  static defaults = {
    ticks: {
      callback: ka
    }
  };
  constructor(e) {
    super(e);
    this._startValue = undefined;
    this._valueRange = 0;
    this._addedLabels = [];
  }
  init(e) {
    const i = this._addedLabels;
    if (i.length) {
      const n = this.getLabels();
      for (const {
        index: s,
        label: r
      } of i) {
        if (n[s] === r) {
          n.splice(s, 1);
        }
      }
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, i) {
    if (it(e)) {
      return null;
    }
    const n = this.getLabels();
    i = isFinite(i) && n[i] === e ? i : Dp(n, e, et(i, e), this._addedLabels);
    return Tp(i, n.length - 1);
  }
  determineDataLimits() {
    const {
      minDefined: e,
      maxDefined: i
    } = this.getUserBounds();
    let {
      min: n,
      max: s
    } = this.getMinMax(true);
    if (this.options.bounds === "ticks") {
      if (!e) {
        n = 0;
      }
      if (!i) {
        s = this.getLabels().length - 1;
      }
    }
    this.min = n;
    this.max = s;
  }
  buildTicks() {
    const e = this.min;
    const i = this.max;
    const n = this.options.offset;
    const s = [];
    let r = this.getLabels();
    r = e === 0 && i === r.length - 1 ? r : r.slice(e, i + 1);
    this._valueRange = Math.max(r.length - (n ? 0 : 1), 1);
    this._startValue = this.min - (n ? 0.5 : 0);
    for (let o = e; o <= i; o++) {
      s.push({
        value: o
      });
    }
    return s;
  }
  getLabelForValue(e) {
    return ka.call(this, e);
  }
  configure() {
    super.configure();
    if (!this.isHorizontal()) {
      this._reversePixels = !this._reversePixels;
    }
  }
  getPixelForValue(e) {
    if (typeof e != "number") {
      e = this.parse(e);
    }
    if (e === null) {
      return NaN;
    } else {
      return this.getPixelForDecimal((e - this._startValue) / this._valueRange);
    }
  }
  getPixelForTick(e) {
    const i = this.ticks;
    if (e < 0 || e > i.length - 1) {
      return null;
    } else {
      return this.getPixelForValue(i[e].value);
    }
  }
  getValueForPixel(e) {
    return Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function Cp(t, e) {
  const i = [];
  const {
    bounds: s,
    step: r,
    min: o,
    max: a,
    precision: c,
    count: l,
    maxTicks: h,
    maxDigits: d,
    includeBounds: g
  } = t;
  const p = r || 1;
  const b = h - 1;
  const {
    min: y,
    max: k
  } = e;
  const E = !it(o);
  const D = !it(a);
  const z = !it(l);
  const M = (k - y) / (d + 1);
  let R = Fo((k - y) / b / p) * p;
  let V;
  let I;
  let W;
  let j;
  if (R < 1e-14 && !E && !D) {
    return [{
      value: y
    }, {
      value: k
    }];
  }
  j = Math.ceil(k / R) - Math.floor(y / R);
  if (j > b) {
    R = Fo(j * R / b / p) * p;
  }
  if (!it(c)) {
    V = Math.pow(10, c);
    R = Math.ceil(R * V) / V;
  }
  if (s === "ticks") {
    I = Math.floor(y / R) * R;
    W = Math.ceil(k / R) * R;
  } else {
    I = y;
    W = k;
  }
  if (E && D && r && Cd((a - o) / r, R / 1000)) {
    j = Math.round(Math.min((a - o) / R, h));
    R = (a - o) / j;
    I = o;
    W = a;
  } else if (z) {
    I = E ? o : I;
    W = D ? a : W;
    j = l - 1;
    R = (W - I) / j;
  } else {
    j = (W - I) / R;
    if (kn(j, Math.round(j), R / 1000)) {
      j = Math.round(j);
    } else {
      j = Math.ceil(j);
    }
  }
  const B = Math.max(Lo(R), Lo(I));
  V = Math.pow(10, it(c) ? B : c);
  I = Math.round(I * V) / V;
  W = Math.round(W * V) / V;
  let $ = 0;
  for (E && (g && I !== o ? (i.push({
    value: o
  }), I < o && $++, kn(Math.round((I + $ * R) * V) / V, o, Sa(o, M, t)) && $++) : I < o && $++); $ < j; ++$) {
    const X = Math.round((I + $ * R) * V) / V;
    if (D && X > a) {
      break;
    }
    i.push({
      value: X
    });
  }
  if (D && g && W !== a) {
    if (i.length && kn(i[i.length - 1].value, a, Sa(a, M, t))) {
      i[i.length - 1].value = a;
    } else {
      i.push({
        value: a
      });
    }
  } else if (!D || W === a) {
    i.push({
      value: W
    });
  }
  return i;
}
function Sa(t, e, {
  horizontal: i,
  minRotation: n
}) {
  const s = $t(n);
  const r = (i ? Math.sin(s) : Math.cos(s)) || 0.001;
  const o = e * 0.75 * ("" + t).length;
  return Math.min(e / r, o);
}
class Vn extends Ve {
  constructor(e) {
    super(e);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }
  parse(e, i) {
    if (it(e) || (typeof e == "number" || e instanceof Number) && !isFinite(+e)) {
      return null;
    } else {
      return +e;
    }
  }
  handleTickRangeOptions() {
    const {
      beginAtZero: e
    } = this.options;
    const {
      minDefined: i,
      maxDefined: n
    } = this.getUserBounds();
    let {
      min: s,
      max: r
    } = this;
    const o = c => s = i ? s : c;
    const a = c => r = n ? r : c;
    if (e) {
      const c = we(s);
      const l = we(r);
      if (c < 0 && l < 0) {
        a(0);
      } else if (c > 0 && l > 0) {
        o(0);
      }
    }
    if (s === r) {
      let c = r === 0 ? 1 : Math.abs(r * 0.05);
      a(r + c);
      if (!e) {
        o(s - c);
      }
    }
    this.min = s;
    this.max = r;
  }
  getTickLimit() {
    const e = this.options.ticks;
    let {
      maxTicksLimit: i,
      stepSize: n
    } = e;
    let s;
    if (n) {
      s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1;
      if (s > 1000) {
        console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`);
        s = 1000;
      }
    } else {
      s = this.computeTickLimit();
      i = i || 11;
    }
    if (i) {
      s = Math.min(i, s);
    }
    return s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options;
    const i = e.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
      maxTicks: n,
      bounds: e.bounds,
      min: e.min,
      max: e.max,
      precision: i.precision,
      step: i.stepSize,
      count: i.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: i.minRotation || 0,
      includeBounds: i.includeBounds !== false
    };
    const r = this._range || this;
    const o = Cp(s, r);
    if (e.bounds === "ticks") {
      jl(o, this, "value");
    }
    if (e.reverse) {
      o.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return o;
  }
  configure() {
    const e = this.ticks;
    let i = this.min;
    let n = this.max;
    super.configure();
    if (this.options.offset && e.length) {
      const s = (n - i) / Math.max(e.length - 1, 1) / 2;
      i -= s;
      n += s;
    }
    this._startValue = i;
    this._endValue = n;
    this._valueRange = n - i;
  }
  getLabelForValue(e) {
    return Xi(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class L_ extends Vn {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: qn.formatters.numeric
    }
  };
  determineDataLimits() {
    const {
      min: e,
      max: i
    } = this.getMinMax(true);
    this.min = xt(e) ? e : 0;
    this.max = xt(i) ? i : 1;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const e = this.isHorizontal();
    const i = e ? this.width : this.height;
    const n = $t(this.options.ticks.minRotation);
    const s = (e ? Math.sin(n) : Math.cos(n)) || 0.001;
    const r = this._resolveTickFontOptions(0);
    return Math.ceil(i / Math.min(40, r.lineHeight / s));
  }
  getPixelForValue(e) {
    if (e === null) {
      return NaN;
    } else {
      return this.getPixelForDecimal((e - this._startValue) / this._valueRange);
    }
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
const Vi = t => Math.floor(pe(t));
const Me = (t, e) => Math.pow(10, Vi(t) + e);
function Ea(t) {
  return t / Math.pow(10, Vi(t)) === 1;
}
function Aa(t, e, i) {
  const n = Math.pow(10, i);
  const s = Math.floor(t / n);
  return Math.ceil(e / n) - s;
}
function Fp(t, e) {
  const i = e - t;
  let n = Vi(i);
  while (Aa(t, e, n) > 10) {
    n++;
  }
  while (Aa(t, e, n) < 10) {
    n--;
  }
  return Math.min(n, Vi(t));
}
function Lp(t, {
  min: e,
  max: i
}) {
  e = Ft(t.min, e);
  const n = [];
  const s = Vi(e);
  let r = Fp(e, i);
  let o = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
  const a = Math.pow(10, r);
  const c = s > r ? Math.pow(10, s) : 0;
  const l = Math.round((e - c) * o) / o;
  const h = Math.floor((e - c) / a / 10) * a * 10;
  let d = Math.floor((l - h) / Math.pow(10, r));
  let g = Ft(t.min, Math.round((c + h + d * Math.pow(10, r)) * o) / o);
  while (g < i) {
    n.push({
      value: g,
      major: Ea(g),
      significand: d
    });
    if (d >= 10) {
      d = d < 15 ? 15 : 20;
    } else {
      d++;
    }
    if (d >= 20) {
      r++;
      d = 2;
      o = r >= 0 ? 1 : o;
    }
    g = Math.round((c + h + d * Math.pow(10, r)) * o) / o;
  }
  const p = Ft(t.max, g);
  n.push({
    value: p,
    major: Ea(p),
    significand: d
  });
  return n;
}
class R_ extends Ve {
  static id = "logarithmic";
  static defaults = {
    ticks: {
      callback: qn.formatters.logarithmic,
      major: {
        enabled: true
      }
    }
  };
  constructor(e) {
    super(e);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(e, i) {
    const n = Vn.prototype.parse.apply(this, [e, i]);
    if (n === 0) {
      this._zero = true;
      return;
    }
    if (xt(n) && n > 0) {
      return n;
    } else {
      return null;
    }
  }
  determineDataLimits() {
    const {
      min: e,
      max: i
    } = this.getMinMax(true);
    this.min = xt(e) ? Math.max(0, e) : null;
    this.max = xt(i) ? Math.max(0, i) : null;
    if (this.options.beginAtZero) {
      this._zero = true;
    }
    if (this._zero && this.min !== this._suggestedMin && !xt(this._userMin)) {
      this.min = e === Me(this.min, 0) ? Me(this.min, -1) : Me(this.min, 0);
    }
    this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const {
      minDefined: e,
      maxDefined: i
    } = this.getUserBounds();
    let n = this.min;
    let s = this.max;
    const r = a => n = e ? n : a;
    const o = a => s = i ? s : a;
    if (n === s) {
      if (n <= 0) {
        r(1);
        o(10);
      } else {
        r(Me(n, -1));
        o(Me(s, 1));
      }
    }
    if (n <= 0) {
      r(Me(s, -1));
    }
    if (s <= 0) {
      o(Me(n, 1));
    }
    this.min = n;
    this.max = s;
  }
  buildTicks() {
    const e = this.options;
    const i = {
      min: this._userMin,
      max: this._userMax
    };
    const n = Lp(i, this);
    if (e.bounds === "ticks") {
      jl(n, this, "value");
    }
    if (e.reverse) {
      n.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return n;
  }
  getLabelForValue(e) {
    if (e === undefined) {
      return "0";
    } else {
      return Xi(e, this.chart.options.locale, this.options.ticks.format);
    }
  }
  configure() {
    const e = this.min;
    super.configure();
    this._startValue = pe(e);
    this._valueRange = pe(this.max) - pe(e);
  }
  getPixelForValue(e) {
    if (e === undefined || e === 0) {
      e = this.min;
    }
    if (e === null || isNaN(e)) {
      return NaN;
    } else {
      return this.getPixelForDecimal(e === this.min ? 0 : (pe(e) - this._startValue) / this._valueRange);
    }
  }
  getValueForPixel(e) {
    const i = this.getDecimalForPixel(e);
    return Math.pow(10, this._startValue + i * this._valueRange);
  }
}
function tr(t) {
  const e = t.ticks;
  if (e.display && t.display) {
    const i = It(e.backdropPadding);
    return et(e.font && e.font.size, ht.font.size) + i.height;
  }
  return 0;
}
function Rp(t, e, i) {
  i = lt(i) ? i : [i];
  return {
    w: Kd(t, e.string, i),
    h: i.length * e.lineHeight
  };
}
function Ma(t, e, i, n, s) {
  if (t === n || t === s) {
    return {
      start: e - i / 2,
      end: e + i / 2
    };
  } else if (t < n || t > s) {
    return {
      start: e - i,
      end: e
    };
  } else {
    return {
      start: e,
      end: e + i
    };
  }
}
function Ip(t) {
  const e = {
    l: t.left + t._padding.left,
    r: t.right - t._padding.right,
    t: t.top + t._padding.top,
    b: t.bottom - t._padding.bottom
  };
  const i = Object.assign({}, e);
  const n = [];
  const s = [];
  const r = t._pointLabels.length;
  const o = t.options.pointLabels;
  const a = o.centerPointLabels ? ut / r : 0;
  for (let c = 0; c < r; c++) {
    const l = o.setContext(t.getPointLabelContext(c));
    s[c] = l.padding;
    const h = t.getPointPosition(c, t.drawingArea + s[c], a);
    const d = Nt(l.font);
    const g = Rp(t.ctx, d, t._pointLabels[c]);
    n[c] = g;
    const p = Kt(t.getIndexAngle(c) + a);
    const b = Math.round(pr(p));
    const y = Ma(b, h.x, g.w, 0, 180);
    const k = Ma(b, h.y, g.h, 90, 270);
    Pp(i, e, p, y, k);
  }
  t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b);
  t._pointLabelItems = Np(t, n, s);
}
function Pp(t, e, i, n, s) {
  const r = Math.abs(Math.sin(i));
  const o = Math.abs(Math.cos(i));
  let a = 0;
  let c = 0;
  if (n.start < e.l) {
    a = (e.l - n.start) / r;
    t.l = Math.min(t.l, e.l - a);
  } else if (n.end > e.r) {
    a = (n.end - e.r) / r;
    t.r = Math.max(t.r, e.r + a);
  }
  if (s.start < e.t) {
    c = (e.t - s.start) / o;
    t.t = Math.min(t.t, e.t - c);
  } else if (s.end > e.b) {
    c = (s.end - e.b) / o;
    t.b = Math.max(t.b, e.b + c);
  }
}
function zp(t, e, i) {
  const n = t.drawingArea;
  const {
    extra: s,
    additionalAngle: r,
    padding: o,
    size: a
  } = i;
  const c = t.getPointPosition(e, n + s + o, r);
  const l = Math.round(pr(Kt(c.angle + Mt)));
  const h = $p(c.y, a.h, l);
  const d = Up(l);
  const g = Hp(c.x, a.w, d);
  return {
    visible: true,
    x: c.x,
    y: h,
    textAlign: d,
    left: g,
    top: h,
    right: g + a.w,
    bottom: h + a.h
  };
}
function Bp(t, e) {
  if (!e) {
    return true;
  }
  const {
    left: i,
    top: n,
    right: s,
    bottom: r
  } = t;
  return !Ge({
    x: i,
    y: n
  }, e) && !Ge({
    x: i,
    y: r
  }, e) && !Ge({
    x: s,
    y: n
  }, e) && !Ge({
    x: s,
    y: r
  }, e);
}
function Np(t, e, i) {
  const n = [];
  const s = t._pointLabels.length;
  const r = t.options;
  const {
    centerPointLabels: o,
    display: a
  } = r.pointLabels;
  const c = {
    extra: tr(r) / 2,
    additionalAngle: o ? ut / s : 0
  };
  let l;
  for (let h = 0; h < s; h++) {
    c.padding = i[h];
    c.size = e[h];
    const d = zp(t, h, c);
    n.push(d);
    if (a === "auto") {
      d.visible = Bp(d, l);
      if (d.visible) {
        l = d;
      }
    }
  }
  return n;
}
function Up(t) {
  if (t === 0 || t === 180) {
    return "center";
  } else if (t < 180) {
    return "left";
  } else {
    return "right";
  }
}
function Hp(t, e, i) {
  if (i === "right") {
    t -= e;
  } else if (i === "center") {
    t -= e / 2;
  }
  return t;
}
function $p(t, e, i) {
  if (i === 90 || i === 270) {
    t -= e / 2;
  } else if (i > 270 || i < 90) {
    t -= e;
  }
  return t;
}
function Vp(t, e, i) {
  const {
    left: n,
    top: s,
    right: r,
    bottom: o
  } = i;
  const {
    backdropColor: a
  } = e;
  if (!it(a)) {
    const c = wr(e.borderRadius);
    const l = It(e.backdropPadding);
    t.fillStyle = a;
    const h = n - l.left;
    const d = s - l.top;
    const g = r - n + l.width;
    const p = o - s + l.height;
    if (Object.values(c).some(b => b !== 0)) {
      t.beginPath();
      yr(t, {
        x: h,
        y: d,
        w: g,
        h: p,
        radius: c
      });
      t.fill();
    } else {
      t.fillRect(h, d, g, p);
    }
  }
}
function Wp(t, e) {
  const {
    ctx: i,
    options: {
      pointLabels: n
    }
  } = t;
  for (let s = e - 1; s >= 0; s--) {
    const r = t._pointLabelItems[s];
    if (!r.visible) {
      continue;
    }
    const o = n.setContext(t.getPointLabelContext(s));
    Vp(i, o, r);
    const a = Nt(o.font);
    const {
      x: c,
      y: l,
      textAlign: h
    } = r;
    Ue(i, t._pointLabels[s], c, l + a.lineHeight / 2, a, {
      color: o.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function yc(t, e, i, n) {
  const {
    ctx: s
  } = t;
  if (i) {
    s.arc(t.xCenter, t.yCenter, e, 0, At);
  } else {
    let r = t.getPointPosition(0, e);
    s.moveTo(r.x, r.y);
    for (let o = 1; o < n; o++) {
      r = t.getPointPosition(o, e);
      s.lineTo(r.x, r.y);
    }
  }
}
function jp(t, e, i, n, s) {
  const r = t.ctx;
  const o = e.circular;
  const {
    color: a,
    lineWidth: c
  } = e;
  if ((!!o || !!n) && !!a && !!c && !(i < 0)) {
    r.save();
    r.strokeStyle = a;
    r.lineWidth = c;
    r.setLineDash(s.dash);
    r.lineDashOffset = s.dashOffset;
    r.beginPath();
    yc(t, i, o, n);
    r.closePath();
    r.stroke();
    r.restore();
  }
}
function Zp(t, e, i) {
  return hi(t, {
    label: i,
    index: e,
    type: "pointLabel"
  });
}
class I_ extends Vn {
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
      callback: qn.formatters.numeric
    },
    pointLabels: {
      backdropColor: undefined,
      backdropPadding: 2,
      display: true,
      font: {
        size: 10
      },
      callback(e) {
        return e;
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
  constructor(e) {
    super(e);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this._pointLabels = [];
    this._pointLabelItems = [];
  }
  setDimensions() {
    const e = this._padding = It(tr(this.options) / 2);
    const i = this.width = this.maxWidth - e.width;
    const n = this.height = this.maxHeight - e.height;
    this.xCenter = Math.floor(this.left + i / 2 + e.left);
    this.yCenter = Math.floor(this.top + n / 2 + e.top);
    this.drawingArea = Math.floor(Math.min(i, n) / 2);
  }
  determineDataLimits() {
    const {
      min: e,
      max: i
    } = this.getMinMax(false);
    this.min = xt(e) && !isNaN(e) ? e : 0;
    this.max = xt(i) && !isNaN(i) ? i : 0;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / tr(this.options));
  }
  generateTickLabels(e) {
    Vn.prototype.generateTickLabels.call(this, e);
    this._pointLabels = this.getLabels().map((i, n) => {
      const s = nt(this.options.pointLabels.callback, [i, n], this);
      if (s || s === 0) {
        return s;
      } else {
        return "";
      }
    }).filter((i, n) => this.chart.getDataVisibility(n));
  }
  fit() {
    const e = this.options;
    if (e.display && e.pointLabels.display) {
      Ip(this);
    } else {
      this.setCenterPoint(0, 0, 0, 0);
    }
  }
  setCenterPoint(e, i, n, s) {
    this.xCenter += Math.floor((e - i) / 2);
    this.yCenter += Math.floor((n - s) / 2);
    this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, i, n, s));
  }
  getIndexAngle(e) {
    const i = At / (this._pointLabels.length || 1);
    const n = this.options.startAngle || 0;
    return Kt(e * i + $t(n));
  }
  getDistanceFromCenterForValue(e) {
    if (it(e)) {
      return NaN;
    }
    const i = this.drawingArea / (this.max - this.min);
    if (this.options.reverse) {
      return (this.max - e) * i;
    } else {
      return (e - this.min) * i;
    }
  }
  getValueForDistanceFromCenter(e) {
    if (it(e)) {
      return NaN;
    }
    const i = e / (this.drawingArea / (this.max - this.min));
    if (this.options.reverse) {
      return this.max - i;
    } else {
      return this.min + i;
    }
  }
  getPointLabelContext(e) {
    const i = this._pointLabels || [];
    if (e >= 0 && e < i.length) {
      const n = i[e];
      return Zp(this.getContext(), e, n);
    }
  }
  getPointPosition(e, i, n = 0) {
    const s = this.getIndexAngle(e) - Mt + n;
    return {
      x: Math.cos(s) * i + this.xCenter,
      y: Math.sin(s) * i + this.yCenter,
      angle: s
    };
  }
  getPointPositionForValue(e, i) {
    return this.getPointPosition(e, this.getDistanceFromCenterForValue(i));
  }
  getBasePosition(e) {
    return this.getPointPositionForValue(e || 0, this.getBaseValue());
  }
  getPointLabelPosition(e) {
    const {
      left: i,
      top: n,
      right: s,
      bottom: r
    } = this._pointLabelItems[e];
    return {
      left: i,
      top: n,
      right: s,
      bottom: r
    };
  }
  drawBackground() {
    const {
      backgroundColor: e,
      grid: {
        circular: i
      }
    } = this.options;
    if (e) {
      const n = this.ctx;
      n.save();
      n.beginPath();
      yc(this, this.getDistanceFromCenterForValue(this._endValue), i, this._pointLabels.length);
      n.closePath();
      n.fillStyle = e;
      n.fill();
      n.restore();
    }
  }
  drawGrid() {
    const e = this.ctx;
    const i = this.options;
    const {
      angleLines: n,
      grid: s,
      border: r
    } = i;
    const o = this._pointLabels.length;
    let a;
    let c;
    let l;
    if (i.pointLabels.display) {
      Wp(this, o);
    }
    if (s.display) {
      this.ticks.forEach((h, d) => {
        if (d !== 0 || d === 0 && this.min < 0) {
          c = this.getDistanceFromCenterForValue(h.value);
          const g = this.getContext(d);
          const p = s.setContext(g);
          const b = r.setContext(g);
          jp(this, p, c, o, b);
        }
      });
    }
    if (n.display) {
      e.save();
      a = o - 1;
      for (; a >= 0; a--) {
        const h = n.setContext(this.getPointLabelContext(a));
        const {
          color: d,
          lineWidth: g
        } = h;
        if (!!g && !!d) {
          e.lineWidth = g;
          e.strokeStyle = d;
          e.setLineDash(h.borderDash);
          e.lineDashOffset = h.borderDashOffset;
          c = this.getDistanceFromCenterForValue(i.ticks.reverse ? this.min : this.max);
          l = this.getPointPosition(a, c);
          e.beginPath();
          e.moveTo(this.xCenter, this.yCenter);
          e.lineTo(l.x, l.y);
          e.stroke();
        }
      }
      e.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const e = this.ctx;
    const i = this.options;
    const n = i.ticks;
    if (!n.display) {
      return;
    }
    const s = this.getIndexAngle(0);
    let r;
    let o;
    e.save();
    e.translate(this.xCenter, this.yCenter);
    e.rotate(s);
    e.textAlign = "center";
    e.textBaseline = "middle";
    this.ticks.forEach((a, c) => {
      if (c === 0 && this.min >= 0 && !i.reverse) {
        return;
      }
      const l = n.setContext(this.getContext(c));
      const h = Nt(l.font);
      r = this.getDistanceFromCenterForValue(this.ticks[c].value);
      if (l.showLabelBackdrop) {
        e.font = h.string;
        o = e.measureText(a.label).width;
        e.fillStyle = l.backdropColor;
        const d = It(l.backdropPadding);
        e.fillRect(-o / 2 - d.left, -r - h.size / 2 - d.top, o + d.width, h.size + d.height);
      }
      Ue(e, a.label, 0, -r, h, {
        color: l.color,
        strokeColor: l.textStrokeColor,
        strokeWidth: l.textStrokeWidth
      });
    });
    e.restore();
  }
  drawTitle() {}
}
const ts = {
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
const Dt = Object.keys(ts);
function Da(t, e) {
  return t - e;
}
function Ta(t, e) {
  if (it(e)) {
    return null;
  }
  const i = t._adapter;
  const {
    parser: n,
    round: s,
    isoWeekday: r
  } = t._parseOpts;
  let o = e;
  if (typeof n == "function") {
    o = n(o);
  }
  if (!xt(o)) {
    o = typeof n == "string" ? i.parse(o, n) : i.parse(o);
  }
  if (o === null) {
    return null;
  } else {
    if (s) {
      o = s === "week" && (Nn(r) || r === true) ? i.startOf(o, "isoWeek", r) : i.startOf(o, s);
    }
    return +o;
  }
}
function Oa(t, e, i, n) {
  const s = Dt.length;
  for (let r = Dt.indexOf(t); r < s - 1; ++r) {
    const o = ts[Dt[r]];
    const a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((i - e) / (a * o.size)) <= n) {
      return Dt[r];
    }
  }
  return Dt[s - 1];
}
function Yp(t, e, i, n, s) {
  for (let r = Dt.length - 1; r >= Dt.indexOf(i); r--) {
    const o = Dt[r];
    if (ts[o].common && t._adapter.diff(s, n, o) >= e - 1) {
      return o;
    }
  }
  return Dt[i ? Dt.indexOf(i) : 0];
}
function Kp(t) {
  for (let e = Dt.indexOf(t) + 1, i = Dt.length; e < i; ++e) {
    if (ts[Dt[e]].common) {
      return Dt[e];
    }
  }
}
function Ca(t, e, i) {
  if (!i) {
    t[e] = true;
  } else if (i.length) {
    const {
      lo: n,
      hi: s
    } = _r(i, e);
    const r = i[n] >= e ? i[n] : i[s];
    t[r] = true;
  }
}
function Xp(t, e, i, n) {
  const s = t._adapter;
  const r = +s.startOf(e[0].value, n);
  const o = e[e.length - 1].value;
  let a;
  let c;
  for (a = r; a <= o; a = +s.add(a, 1, n)) {
    c = i[a];
    if (c >= 0) {
      e[c].major = true;
    }
  }
  return e;
}
function Fa(t, e, i) {
  const n = [];
  const s = {};
  const r = e.length;
  let o;
  let a;
  for (o = 0; o < r; ++o) {
    a = e[o];
    s[a] = o;
    n.push({
      value: a,
      major: false
    });
  }
  if (r === 0 || !i) {
    return n;
  } else {
    return Xp(t, n, s, i);
  }
}
class La extends Ve {
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
  constructor(e) {
    super(e);
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
  init(e, i = {}) {
    const n = e.time ||= {};
    const s = this._adapter = new tg._date(e.adapters.date);
    s.init(i);
    Mi(n.displayFormats, s.formats());
    this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    };
    super.init(e);
    this._normalized = i.normalized;
  }
  parse(e, i) {
    if (e === undefined) {
      return null;
    } else {
      return Ta(this, e);
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
    const e = this.options;
    const i = this._adapter;
    const n = e.time.unit || "day";
    let {
      min: s,
      max: r,
      minDefined: o,
      maxDefined: a
    } = this.getUserBounds();
    function c(l) {
      if (!o && !isNaN(l.min)) {
        s = Math.min(s, l.min);
      }
      if (!a && !isNaN(l.max)) {
        r = Math.max(r, l.max);
      }
    }
    if (!o || !a) {
      c(this._getLabelBounds());
      if (e.bounds !== "ticks" || e.ticks.source !== "labels") {
        c(this.getMinMax(false));
      }
    }
    s = xt(s) && !isNaN(s) ? s : +i.startOf(Date.now(), n);
    r = xt(r) && !isNaN(r) ? r : +i.endOf(Date.now(), n) + 1;
    this.min = Math.min(s, r - 1);
    this.max = Math.max(s + 1, r);
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let i = Number.POSITIVE_INFINITY;
    let n = Number.NEGATIVE_INFINITY;
    if (e.length) {
      i = e[0];
      n = e[e.length - 1];
    }
    return {
      min: i,
      max: n
    };
  }
  buildTicks() {
    const e = this.options;
    const i = e.time;
    const n = e.ticks;
    const s = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    if (e.bounds === "ticks" && s.length) {
      this.min = this._userMin || s[0];
      this.max = this._userMax || s[s.length - 1];
    }
    const r = this.min;
    const o = this.max;
    const a = Id(s, r, o);
    this._unit = i.unit || (n.autoSkip ? Oa(i.minUnit, this.min, this.max, this._getLabelCapacity(r)) : Yp(this, a.length, i.minUnit, this.min, this.max));
    this._majorUnit = !n.major.enabled || this._unit === "year" ? undefined : Kp(this._unit);
    this.initOffsets(s);
    if (e.reverse) {
      a.reverse();
    }
    return Fa(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    if (this.options.offsetAfterAutoskip) {
      this.initOffsets(this.ticks.map(e => +e.value));
    }
  }
  initOffsets(e = []) {
    let i = 0;
    let n = 0;
    let s;
    let r;
    if (this.options.offset && e.length) {
      s = this.getDecimalForValue(e[0]);
      if (e.length === 1) {
        i = 1 - s;
      } else {
        i = (this.getDecimalForValue(e[1]) - s) / 2;
      }
      r = this.getDecimalForValue(e[e.length - 1]);
      if (e.length === 1) {
        n = r;
      } else {
        n = (r - this.getDecimalForValue(e[e.length - 2])) / 2;
      }
    }
    const o = e.length < 3 ? 0.5 : 0.25;
    i = le(i, 0, o);
    n = le(n, 0, o);
    this._offsets = {
      start: i,
      end: n,
      factor: 1 / (i + 1 + n)
    };
  }
  _generate() {
    const e = this._adapter;
    const i = this.min;
    const n = this.max;
    const s = this.options;
    const r = s.time;
    const o = r.unit || Oa(r.minUnit, i, n, this._getLabelCapacity(i));
    const a = et(s.ticks.stepSize, 1);
    const c = o === "week" ? r.isoWeekday : false;
    const l = Nn(c) || c === true;
    const h = {};
    let d = i;
    let g;
    let p;
    if (l) {
      d = +e.startOf(d, "isoWeek", c);
    }
    d = +e.startOf(d, l ? "day" : o);
    if (e.diff(n, i, o) > a * 100000) {
      throw new Error(i + " and " + n + " are too far apart with stepSize of " + a + " " + o);
    }
    const b = s.ticks.source === "data" && this.getDataTimestamps();
    g = d;
    p = 0;
    for (; g < n; g = +e.add(g, a, o), p++) {
      Ca(h, g, b);
    }
    if (g === n || s.bounds === "ticks" || p === 1) {
      Ca(h, g, b);
    }
    return Object.keys(h).sort(Da).map(y => +y);
  }
  getLabelForValue(e) {
    const i = this._adapter;
    const n = this.options.time;
    if (n.tooltipFormat) {
      return i.format(e, n.tooltipFormat);
    } else {
      return i.format(e, n.displayFormats.datetime);
    }
  }
  format(e, i) {
    const s = this.options.time.displayFormats;
    const r = this._unit;
    const o = i || s[r];
    return this._adapter.format(e, o);
  }
  _tickFormatFunction(e, i, n, s) {
    const r = this.options;
    const o = r.ticks.callback;
    if (o) {
      return nt(o, [e, i, n], this);
    }
    const a = r.time.displayFormats;
    const c = this._unit;
    const l = this._majorUnit;
    const h = c && a[c];
    const d = l && a[l];
    const g = n[i];
    const p = l && d && g && g.major;
    return this._adapter.format(e, s || (p ? d : h));
  }
  generateTickLabels(e) {
    let i;
    let n;
    let s;
    i = 0;
    n = e.length;
    for (; i < n; ++i) {
      s = e[i];
      s.label = this._tickFormatFunction(s.value, i, e);
    }
  }
  getDecimalForValue(e) {
    if (e === null) {
      return NaN;
    } else {
      return (e - this.min) / (this.max - this.min);
    }
  }
  getPixelForValue(e) {
    const i = this._offsets;
    const n = this.getDecimalForValue(e);
    return this.getPixelForDecimal((i.start + n) * i.factor);
  }
  getValueForPixel(e) {
    const i = this._offsets;
    const n = this.getDecimalForPixel(e) / i.factor - i.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(e) {
    const i = this.options.ticks;
    const n = this.ctx.measureText(e).width;
    const s = $t(this.isHorizontal() ? i.maxRotation : i.minRotation);
    const r = Math.cos(s);
    const o = Math.sin(s);
    const a = this._resolveTickFontOptions(0).size;
    return {
      w: n * r + a * o,
      h: n * o + a * r
    };
  }
  _getLabelCapacity(e) {
    const i = this.options.time;
    const n = i.displayFormats;
    const s = n[i.unit] || n.millisecond;
    const r = this._tickFormatFunction(e, 0, Fa(this, [e], this._majorUnit), s);
    const o = this._getLabelSize(r);
    const a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
    if (a > 0) {
      return a;
    } else {
      return 1;
    }
  }
  getDataTimestamps() {
    let e = this._cache.data || [];
    let i;
    let n;
    if (e.length) {
      return e;
    }
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length) {
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    }
    i = 0;
    n = s.length;
    for (; i < n; ++i) {
      e = e.concat(s[i].controller.getAllParsedValues(this));
    }
    return this._cache.data = this.normalize(e);
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let i;
    let n;
    if (e.length) {
      return e;
    }
    const s = this.getLabels();
    i = 0;
    n = s.length;
    for (; i < n; ++i) {
      e.push(Ta(this, s[i]));
    }
    return this._cache.labels = this._normalized ? e : this.normalize(e);
  }
  normalize(e) {
    return Yl(e.sort(Da));
  }
}
function bn(t, e, i) {
  let n = 0;
  let s = t.length - 1;
  let r;
  let o;
  let a;
  let c;
  if (i) {
    if (e >= t[n].pos && e <= t[s].pos) {
      ({
        lo: n,
        hi: s
      } = Xs(t, "pos", e));
    }
    ({
      pos: r,
      time: a
    } = t[n]);
    ({
      pos: o,
      time: c
    } = t[s]);
  } else {
    if (e >= t[n].time && e <= t[s].time) {
      ({
        lo: n,
        hi: s
      } = Xs(t, "time", e));
    }
    ({
      time: r,
      pos: a
    } = t[n]);
    ({
      time: o,
      pos: c
    } = t[s]);
  }
  const l = o - r;
  if (l) {
    return a + (c - a) * (e - r) / l;
  } else {
    return a;
  }
}
class P_ extends La {
  static id = "timeseries";
  static defaults = La.defaults;
  constructor(e) {
    super(e);
    this._table = [];
    this._minPos = undefined;
    this._tableRange = undefined;
  }
  initOffsets() {
    const e = this._getTimestampsForTable();
    const i = this._table = this.buildLookupTable(e);
    this._minPos = bn(i, this.min);
    this._tableRange = bn(i, this.max) - this._minPos;
    super.initOffsets(e);
  }
  buildLookupTable(e) {
    const {
      min: i,
      max: n
    } = this;
    const s = [];
    const r = [];
    let o;
    let a;
    let c;
    let l;
    let h;
    o = 0;
    a = e.length;
    for (; o < a; ++o) {
      l = e[o];
      if (l >= i && l <= n) {
        s.push(l);
      }
    }
    if (s.length < 2) {
      return [{
        time: i,
        pos: 0
      }, {
        time: n,
        pos: 1
      }];
    }
    o = 0;
    a = s.length;
    for (; o < a; ++o) {
      h = s[o + 1];
      c = s[o - 1];
      l = s[o];
      if (Math.round((h + c) / 2) !== l) {
        r.push({
          time: l,
          pos: o / (a - 1)
        });
      }
    }
    return r;
  }
  _generate() {
    const e = this.min;
    const i = this.max;
    let n = super.getDataTimestamps();
    if (!n.includes(e) || !n.length) {
      n.splice(0, 0, e);
    }
    if (!n.includes(i) || n.length === 1) {
      n.push(i);
    }
    return n.sort((s, r) => s - r);
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) {
      return e;
    }
    const i = this.getDataTimestamps();
    const n = this.getLabelTimestamps();
    if (i.length && n.length) {
      e = this.normalize(i.concat(n));
    } else {
      e = i.length ? i : n;
    }
    e = this._cache.all = e;
    return e;
  }
  getDecimalForValue(e) {
    return (bn(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const i = this._offsets;
    const n = this.getDecimalForPixel(e) / i.factor - i.end;
    return bn(this._table, n * this._tableRange + this._minPos, true);
  }
}
function Gp(t) {
  return (...e) => {
    for (const i of t) {
      if (i) {
        i(...e);
      }
    }
  };
}
function Ra(...t) {
  return Gp(t);
}
var Ia = t => t instanceof Element;
function er(t, e) {
  if (e(t)) {
    return t;
  }
  if (typeof t == "function" && !t.length) {
    return er(t(), e);
  }
  if (Array.isArray(t)) {
    for (const i of t) {
      const n = er(i, e);
      if (n) {
        return n;
      }
    }
  }
  return null;
}
function qp(t, e = Ia, i = Ia) {
  const n = Re(t);
  return Re(() => er(n(), e));
}
const Qp = Uc("<canvas>");
function Jp(t) {
  const [e, i] = Je();
  const [n, s] = Je();
  const r = Za({
    width: 512,
    height: 512,
    type: "line",
    data: {},
    options: {
      responsive: true
    },
    plugins: []
  }, t);
  const o = () => {
    const a = e()?.getContext("2d");
    const c = Ie(r);
    if (c.type !== "radar" && c.options.scales?.r) {
      delete c.options.scales?.r;
    }
    const l = new Dr(a, {
      type: c.type,
      data: c.data,
      options: c.options,
      plugins: c.plugins
    });
    s(l);
  };
  Mc(() => {
    o();
  });
  xi(Ji(() => r.data, () => {
    n().data = r.data;
    n().update();
  }, {
    defer: true
  }));
  xi(Ji(() => r.options, () => {
    n().options = r.options;
    n().update();
  }, {
    defer: true
  }));
  xi(Ji([() => r.width, () => r.height], () => {
    n().resize(r.width, r.height);
  }, {
    defer: true
  }));
  xi(Ji(() => r.type, () => {
    const a = [n().width, n().height];
    n().destroy();
    o();
    n().resize(...a);
  }, {
    defer: true
  }));
  Na(() => {
    n()?.destroy();
    Ra(t.ref, null);
  });
  return (() => {
    const a = Qp();
    const c = Ra(t.ref, l => i(l));
    if (typeof c == "function") {
      Hc(c, a);
    }
    Ya(a, () => r.fallback);
    Dn(l => {
      const h = r.height;
      const d = r.width;
      if (h !== l._v$) {
        Lr(a, "height", l._v$ = h);
      }
      if (d !== l._v$2) {
        Lr(a, "width", l._v$2 = d);
      }
      return l;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return a;
  })();
}
function t_(t, e) {
  Dr.register(e);
  return i => Ic(Jp, Za({
    type: t
  }, i));
}
var z_ = t_("bar", [G0, Op, pp]);
var e_ = () => {};
var Pa = (t, e) => e();
function i_(t, e) {
  const i = Rt(t);
  const n = i ? [i] : [];
  const {
    onEnter: s = Pa,
    onExit: r = Pa
  } = e;
  const [o, a] = Je(e.appear ? [] : n);
  const [c] = Tc();
  let l;
  let h = false;
  function d(b, y) {
    if (!b) {
      return y && y();
    }
    h = true;
    r(b, () => {
      Fs(() => {
        h = false;
        a(k => k.filter(E => E !== b));
        if (y) {
          y();
        }
      });
    });
  }
  function g(b) {
    const y = l;
    if (!y) {
      return b && b();
    }
    l = undefined;
    a(k => [y, ...k]);
    s(y, b ?? e_);
  }
  const p = e.mode === "out-in" ? b => h || d(b, g) : e.mode === "in-out" ? b => g(() => d(b)) : b => {
    d(b);
    g();
  };
  Ac(b => {
    const y = t();
    if (Rt(c)) {
      c();
      return b;
    } else {
      if (y !== b) {
        l = y;
        Fs(() => Rt(() => p(b)));
      }
      return y;
    }
  }, e.appear ? undefined : i);
  return o;
}
function n_(t) {
  return Re(() => {
    const e = t.name || "s";
    return {
      enterActive: (t.enterActiveClass || e + "-enter-active").split(" "),
      enter: (t.enterClass || e + "-enter").split(" "),
      enterTo: (t.enterToClass || e + "-enter-to").split(" "),
      exitActive: (t.exitActiveClass || e + "-exit-active").split(" "),
      exit: (t.exitClass || e + "-exit").split(" "),
      exitTo: (t.exitToClass || e + "-exit-to").split(" "),
      move: (t.moveClass || e + "-move").split(" ")
    };
  });
}
function wc(t) {
  requestAnimationFrame(() => requestAnimationFrame(t));
}
function s_(t, e, i, n) {
  const {
    onBeforeEnter: s,
    onEnter: r,
    onAfterEnter: o
  } = e;
  s?.(i);
  i.classList.add(...t.enter);
  i.classList.add(...t.enterActive);
  queueMicrotask(() => {
    if (!i.parentNode) {
      return n?.();
    }
    r?.(i, () => a());
  });
  wc(() => {
    i.classList.remove(...t.enter);
    i.classList.add(...t.enterTo);
    if (!r || r.length < 2) {
      i.addEventListener("transitionend", a);
      i.addEventListener("animationend", a);
    }
  });
  function a(c) {
    if (!c || c.target === i) {
      n?.();
      i.removeEventListener("transitionend", a);
      i.removeEventListener("animationend", a);
      i.classList.remove(...t.enterActive);
      i.classList.remove(...t.enterTo);
      o?.(i);
    }
  }
}
function r_(t, e, i, n) {
  const {
    onBeforeExit: s,
    onExit: r,
    onAfterExit: o
  } = e;
  if (!i.parentNode) {
    return n?.();
  }
  s?.(i);
  i.classList.add(...t.exit);
  i.classList.add(...t.exitActive);
  r?.(i, () => a());
  wc(() => {
    i.classList.remove(...t.exit);
    i.classList.add(...t.exitTo);
    if (!r || r.length < 2) {
      i.addEventListener("transitionend", a);
      i.addEventListener("animationend", a);
    }
  });
  function a(c) {
    if (!c || c.target === i) {
      n?.();
      i.removeEventListener("transitionend", a);
      i.removeEventListener("animationend", a);
      i.classList.remove(...t.exitActive);
      i.classList.remove(...t.exitTo);
      o?.(i);
    }
  }
}
var o_ = {
  inout: "in-out",
  outin: "out-in"
};
var B_ = t => {
  const e = n_(t);
  return i_(qp(() => t.children), {
    mode: o_[t.mode],
    appear: t.appear,
    onEnter(i, n) {
      s_(e(), t, i, n);
    },
    onExit(i, n) {
      r_(e(), t, i, n);
    }
  });
};
export { z_ as B, Dr as C, c_ as F, L_ as L, h_ as S, B_ as T, D_ as U, d_ as a, Ya as b, Dn as c, A_ as d, p_ as e, Re as f, Ic as g, __ as h, M_ as i, Je as j, Na as k, C_ as l, O_ as m, Op as n, Mc as o, F_ as p, u_ as q, xi as r, Hc as s, Uc as t, b_ as u, x_ as v, Lr as w, g_ as x, m_ as y, f_ as z };
