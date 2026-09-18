import { c as Sa, g as Ta } from "./commonjsHelpers-725317a4.js";
const Ia = (e, n) => e === n;
const Ie = Symbol("solid-proxy");
const rn = Symbol("solid-track");
const Da = Symbol("solid-dev-component");
const an = {
  equals: Ia
};
let wi = ki;
const He = 1;
const on = 2;
const xi = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
const En = {};
var ce = null;
let An = null;
let ae = null;
let ge = null;
let Ze = null;
let pn = 0;
const [Fa, zs] = Te(false);
function ht(e, n) {
  const t = ae;
  const r = ce;
  const a = e.length === 0;
  const i = a ? xi : {
    owned: null,
    cleanups: null,
    context: null,
    owner: n === undefined ? r : n
  };
  const s = a ? e : () => e(() => re(() => wn(i)));
  ce = i;
  ae = null;
  try {
    return Pe(s, true);
  } finally {
    ae = t;
    ce = r;
  }
}
function Te(e, n) {
  n = n ? Object.assign({}, an, n) : an;
  const t = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: n.equals || undefined
  };
  const r = a => {
    if (typeof a == "function") {
      a = a(t.value);
    }
    return Ai(t, a);
  };
  return [Ei.bind(t), r];
}
function jn(e, n, t) {
  const r = gn(e, n, true, He);
  bt(r);
}
function rt(e, n, t) {
  const r = gn(e, n, false, He);
  bt(r);
}
function Xe(e, n, t) {
  wi = Na;
  const r = gn(e, n, false, He);
  if (!t || !t.render) {
    r.user = true;
  }
  if (Ze) {
    Ze.push(r);
  } else {
    bt(r);
  }
}
function we(e, n, t) {
  t = t ? Object.assign({}, an, t) : an;
  const r = gn(e, n, true, 0);
  r.observers = null;
  r.observerSlots = null;
  r.comparator = t.equals || undefined;
  bt(r);
  return Ei.bind(r);
}
function Ms(e, n, t) {
  let r;
  let a;
  let i;
  if (arguments.length === 2 && typeof n == "object" || arguments.length === 1) {
    r = true;
    a = e;
    i = n || {};
  } else {
    r = e;
    a = n;
    i = t || {};
  }
  let s = null;
  let o = En;
  let p = false;
  let c = "initialValue" in i;
  let u = typeof r == "function" && we(r);
  const v = new Set();
  const [y, x] = (i.storage || Te)(i.initialValue);
  const [S, N] = Te(undefined);
  const [$, Z] = Te(undefined, {
    equals: false
  });
  const [X, H] = Te(c ? "ready" : "unresolved");
  function F(G, P, R, Y) {
    if (s === G) {
      s = null;
      if (Y !== undefined) {
        c = true;
      }
      if ((G === o || P === o) && i.onHydrated) {
        queueMicrotask(() => i.onHydrated(Y, {
          value: P
        }));
      }
      o = En;
      z(P, R);
    }
    return P;
  }
  function z(G, P) {
    Pe(() => {
      if (P === undefined) {
        x(() => G);
      }
      H(P !== undefined ? "errored" : c ? "ready" : "unresolved");
      N(P);
      for (const R of v.keys()) {
        R.decrement();
      }
      v.clear();
    }, false);
  }
  function q() {
    const G = Ra;
    const P = y();
    const R = S();
    if (R !== undefined && !s) {
      throw R;
    }
    if (ae && !ae.user && G) {
      jn(() => {
        $();
        if (s) {
          if (!G.resolved && !v.has(G)) {
            G.increment();
            v.add(G);
          }
        }
      });
    }
    return P;
  }
  function B(G = true) {
    if (G !== false && p) {
      return;
    }
    p = false;
    const P = u ? u() : r;
    if (P == null || P === false) {
      F(s, re(y));
      return;
    }
    const R = o !== En ? o : re(() => a(P, {
      value: y(),
      refetching: G
    }));
    if (typeof R != "object" || !R || !("then" in R)) {
      F(s, R, undefined, P);
      return R;
    } else {
      s = R;
      p = true;
      queueMicrotask(() => p = false);
      Pe(() => {
        H(c ? "refreshing" : "pending");
        Z();
      }, false);
      return R.then(Y => F(R, Y, undefined, P), Y => F(R, undefined, Ba(Y), P));
    }
  }
  Object.defineProperties(q, {
    state: {
      get: () => X()
    },
    error: {
      get: () => S()
    },
    loading: {
      get() {
        const G = X();
        return G === "pending" || G === "refreshing";
      }
    },
    latest: {
      get() {
        if (!c) {
          return q();
        }
        const G = S();
        if (G && !s) {
          throw G;
        }
        return y();
      }
    }
  });
  if (u) {
    jn(() => B(false));
  } else {
    B(false);
  }
  return [q, {
    refetch: B,
    mutate: x
  }];
}
function Se(e) {
  return Pe(e, false);
}
function re(e) {
  if (ae === null) {
    return e();
  }
  const n = ae;
  ae = null;
  try {
    return e();
  } finally {
    ae = n;
  }
}
function ur(e) {
  Xe(() => re(e));
}
function pt(e) {
  if (ce !== null) {
    if (ce.cleanups === null) {
      ce.cleanups = [e];
    } else {
      ce.cleanups.push(e);
    }
  }
  return e;
}
function bi() {
  return ae;
}
function Ua(e) {
  const n = ae;
  const t = ce;
  return Promise.resolve().then(() => {
    ae = n;
    ce = t;
    let r;
    Pe(e, false);
    ae = ce = null;
    if (r) {
      return r.done;
    } else {
      return undefined;
    }
  });
}
function Ca() {
  return [Fa, Ua];
}
function yi(e, n) {
  const t = Symbol("context");
  return {
    id: t,
    Provider: za(t),
    defaultValue: e
  };
}
function vi(e) {
  let n;
  if ((n = Ii(ce, e.id)) !== undefined) {
    return n;
  } else {
    return e.defaultValue;
  }
}
function mi(e) {
  const n = we(e);
  const t = we(() => Kn(n()));
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
let Ra;
function Ei() {
  if (this.sources && this.state) {
    if (this.state === He) {
      bt(this);
    } else {
      const e = ge;
      ge = null;
      Pe(() => fn(this), false);
      ge = e;
    }
  }
  if (ae) {
    const e = this.observers ? this.observers.length : 0;
    if (ae.sources) {
      ae.sources.push(this);
      ae.sourceSlots.push(e);
    } else {
      ae.sources = [this];
      ae.sourceSlots = [e];
    }
    if (this.observers) {
      this.observers.push(ae);
      this.observerSlots.push(ae.sources.length - 1);
    } else {
      this.observers = [ae];
      this.observerSlots = [ae.sources.length - 1];
    }
  }
  return this.value;
}
function Ai(e, n, t) {
  let r = e.value;
  if (!e.comparator || !e.comparator(r, n)) {
    e.value = n;
    if (e.observers && e.observers.length) {
      Pe(() => {
        for (let a = 0; a < e.observers.length; a += 1) {
          const i = e.observers[a];
          const s = An && An.running;
          if (s) {
            An.disposed.has(i);
          }
          if (s ? !i.tState : !i.state) {
            if (i.pure) {
              ge.push(i);
            } else {
              Ze.push(i);
            }
            if (i.observers) {
              Si(i);
            }
          }
          if (!s) {
            i.state = He;
          }
        }
        if (ge.length > 1000000) {
          ge = [];
          throw new Error();
        }
      }, false);
    }
  }
  return n;
}
function bt(e) {
  if (!e.fn) {
    return;
  }
  wn(e);
  const n = ce;
  const t = ae;
  const r = pn;
  ae = ce = e;
  Oa(e, e.value, r);
  ae = t;
  ce = n;
}
function Oa(e, n, t) {
  let r;
  try {
    r = e.fn(n);
  } catch (a) {
    if (e.pure) {
      e.state = He;
      if (e.owned) {
        e.owned.forEach(wn);
      }
      e.owned = null;
    }
    e.updatedAt = t + 1;
    return Ti(a);
  }
  if (!e.updatedAt || e.updatedAt <= t) {
    if (e.updatedAt != null && "observers" in e) {
      Ai(e, r);
    } else {
      e.value = r;
    }
    e.updatedAt = t;
  }
}
function gn(e, n, t, r = He, a) {
  const i = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: n,
    owner: ce,
    context: null,
    pure: t
  };
  if (ce !== null) {
    if (ce !== xi) {
      if (ce.owned) {
        ce.owned.push(i);
      } else {
        ce.owned = [i];
      }
    }
  }
  return i;
}
function ln(e) {
  if (e.state === 0) {
    return;
  }
  if (e.state === on) {
    return fn(e);
  }
  if (e.suspense && re(e.suspense.inFallback)) {
    return e.suspense.effects.push(e);
  }
  const n = [e];
  while ((e = e.owner) && (!e.updatedAt || e.updatedAt < pn)) {
    if (e.state) {
      n.push(e);
    }
  }
  for (let t = n.length - 1; t >= 0; t--) {
    e = n[t];
    if (e.state === He) {
      bt(e);
    } else if (e.state === on) {
      const r = ge;
      ge = null;
      Pe(() => fn(e, n[0]), false);
      ge = r;
    }
  }
}
function Pe(e, n) {
  if (ge) {
    return e();
  }
  let t = false;
  if (!n) {
    ge = [];
  }
  if (Ze) {
    t = true;
  } else {
    Ze = [];
  }
  pn++;
  try {
    const r = e();
    La(t);
    return r;
  } catch (r) {
    if (!t) {
      Ze = null;
    }
    ge = null;
    Ti(r);
  }
}
function La(e) {
  if (ge) {
    ki(ge);
    ge = null;
  }
  if (e) {
    return;
  }
  const n = Ze;
  Ze = null;
  if (n.length) {
    Pe(() => wi(n), false);
  }
}
function ki(e) {
  for (let n = 0; n < e.length; n++) {
    ln(e[n]);
  }
}
function Na(e) {
  let n;
  let t = 0;
  for (n = 0; n < e.length; n++) {
    const r = e[n];
    if (r.user) {
      e[t++] = r;
    } else {
      ln(r);
    }
  }
  for (n = 0; n < t; n++) {
    ln(e[n]);
  }
}
function fn(e, n) {
  e.state = 0;
  for (let t = 0; t < e.sources.length; t += 1) {
    const r = e.sources[t];
    if (r.sources) {
      const a = r.state;
      if (a === He) {
        if (r !== n && (!r.updatedAt || r.updatedAt < pn)) {
          ln(r);
        }
      } else if (a === on) {
        fn(r, n);
      }
    }
  }
}
function Si(e) {
  for (let n = 0; n < e.observers.length; n += 1) {
    const t = e.observers[n];
    if (!t.state) {
      t.state = on;
      if (t.pure) {
        ge.push(t);
      } else {
        Ze.push(t);
      }
      if (t.observers) {
        Si(t);
      }
    }
  }
}
function wn(e) {
  let n;
  if (e.sources) {
    while (e.sources.length) {
      const t = e.sources.pop();
      const r = e.sourceSlots.pop();
      const a = t.observers;
      if (a && a.length) {
        const i = a.pop();
        const s = t.observerSlots.pop();
        if (r < a.length) {
          i.sourceSlots[s] = r;
          a[r] = i;
          t.observerSlots[r] = s;
        }
      }
    }
  }
  if (e.owned) {
    for (n = e.owned.length - 1; n >= 0; n--) {
      wn(e.owned[n]);
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
function Ba(e) {
  if (e instanceof Error) {
    return e;
  } else {
    return new Error(typeof e == "string" ? e : "Unknown error", {
      cause: e
    });
  }
}
function Ti(e) {
  throw e;
}
function Ii(e, n) {
  if (e) {
    if (e.context && e.context[n] !== undefined) {
      return e.context[n];
    } else {
      return Ii(e.owner, n);
    }
  } else {
    return undefined;
  }
}
function Kn(e) {
  if (typeof e == "function" && !e.length) {
    return Kn(e());
  }
  if (Array.isArray(e)) {
    const n = [];
    for (let t = 0; t < e.length; t++) {
      const r = Kn(e[t]);
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
function za(e, n) {
  return function (r) {
    let a;
    rt(() => a = re(() => {
      ce.context = {
        [e]: r.value
      };
      return mi(() => r.children);
    }), undefined);
    return a;
  };
}
const Gn = Symbol("fallback");
function sn(e) {
  for (let n = 0; n < e.length; n++) {
    e[n]();
  }
}
function Ma(e, n, t = {}) {
  let r = [];
  let a = [];
  let i = [];
  let s = 0;
  let o = n.length > 1 ? [] : null;
  pt(() => sn(i));
  return () => {
    let p = e() || [];
    let c;
    let u;
    p[rn];
    return re(() => {
      let y = p.length;
      let x;
      let S;
      let N;
      let $;
      let Z;
      let X;
      let H;
      let F;
      let z;
      if (y === 0) {
        if (s !== 0) {
          sn(i);
          i = [];
          r = [];
          a = [];
          s = 0;
          o &&= [];
        }
        if (t.fallback) {
          r = [Gn];
          a[0] = ht(q => {
            i[0] = q;
            return t.fallback();
          });
          s = 1;
        }
      } else if (s === 0) {
        a = new Array(y);
        u = 0;
        for (; u < y; u++) {
          r[u] = p[u];
          a[u] = ht(v);
        }
        s = y;
      } else {
        N = new Array(y);
        $ = new Array(y);
        if (o) {
          Z = new Array(y);
        }
        X = 0;
        H = Math.min(s, y);
        for (; X < H && r[X] === p[X]; X++);
        H = s - 1;
        F = y - 1;
        for (; H >= X && F >= X && r[H] === p[F]; H--, F--) {
          N[F] = a[H];
          $[F] = i[H];
          if (o) {
            Z[F] = o[H];
          }
        }
        x = new Map();
        S = new Array(F + 1);
        u = F;
        for (; u >= X; u--) {
          z = p[u];
          c = x.get(z);
          S[u] = c === undefined ? -1 : c;
          x.set(z, u);
        }
        for (c = X; c <= H; c++) {
          z = r[c];
          u = x.get(z);
          if (u !== undefined && u !== -1) {
            N[u] = a[c];
            $[u] = i[c];
            if (o) {
              Z[u] = o[c];
            }
            u = S[u];
            x.set(z, u);
          } else {
            i[c]();
          }
        }
        for (u = X; u < y; u++) {
          if (u in N) {
            a[u] = N[u];
            i[u] = $[u];
            if (o) {
              o[u] = Z[u];
              o[u](u);
            }
          } else {
            a[u] = ht(v);
          }
        }
        a = a.slice(0, s = y);
        r = p.slice(0);
      }
      return a;
    });
    function v(y) {
      i[u] = y;
      if (o) {
        const [x, S] = Te(u);
        o[u] = S;
        return n(p[u], x);
      }
      return n(p[u]);
    }
  };
}
function $a(e, n, t = {}) {
  let r = [];
  let a = [];
  let i = [];
  let s = [];
  let o = 0;
  let p;
  pt(() => sn(i));
  return () => {
    const c = e() || [];
    c[rn];
    return re(() => {
      if (c.length === 0) {
        if (o !== 0) {
          sn(i);
          i = [];
          r = [];
          a = [];
          o = 0;
          s = [];
        }
        if (t.fallback) {
          r = [Gn];
          a[0] = ht(v => {
            i[0] = v;
            return t.fallback();
          });
          o = 1;
        }
        return a;
      }
      if (r[0] === Gn) {
        i[0]();
        i = [];
        r = [];
        a = [];
        o = 0;
      }
      p = 0;
      for (; p < c.length; p++) {
        if (p < r.length && r[p] !== c[p]) {
          s[p](() => c[p]);
        } else if (p >= r.length) {
          a[p] = ht(u);
        }
      }
      for (; p < r.length; p++) {
        i[p]();
      }
      o = s.length = i.length = c.length;
      r = c.slice(0);
      return a = a.slice(0, o);
    });
    function u(v) {
      i[p] = v;
      const [y, x] = Te(c[p]);
      s[p] = x;
      return n(y, p);
    }
  };
}
function Di(e, n) {
  return re(() => e(n || {}));
}
function Yt() {
  return true;
}
const Xn = {
  get(e, n, t) {
    if (n === Ie) {
      return t;
    } else {
      return e.get(n);
    }
  },
  has(e, n) {
    if (n === Ie) {
      return true;
    } else {
      return e.has(n);
    }
  },
  set: Yt,
  deleteProperty: Yt,
  getOwnPropertyDescriptor(e, n) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return e.get(n);
      },
      set: Yt,
      deleteProperty: Yt
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
function Za() {
  for (let e = 0, n = this.length; e < n; ++e) {
    const t = this[e]();
    if (t !== undefined) {
      return t;
    }
  }
}
function Pa(...e) {
  let n = false;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    n = n || !!s && Ie in s;
    e[i] = typeof s == "function" ? (n = true, we(s)) : s;
  }
  if (n) {
    return new Proxy({
      get(i) {
        for (let s = e.length - 1; s >= 0; s--) {
          const o = kn(e[s])[i];
          if (o !== undefined) {
            return o;
          }
        }
      },
      has(i) {
        for (let s = e.length - 1; s >= 0; s--) {
          if (i in kn(e[s])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const i = [];
        for (let s = 0; s < e.length; s++) {
          i.push(...Object.keys(kn(e[s])));
        }
        return [...new Set(i)];
      }
    }, Xn);
  }
  const t = {};
  const r = {};
  let a = false;
  for (let i = e.length - 1; i >= 0; i--) {
    const s = e[i];
    if (!s) {
      continue;
    }
    const o = Object.getOwnPropertyNames(s);
    a = a || i !== 0 && !!o.length;
    for (let p = 0, c = o.length; p < c; p++) {
      const u = o[p];
      if (u !== "__proto__" && u !== "constructor") {
        if (u in t) {
          const v = r[u];
          const y = Object.getOwnPropertyDescriptor(s, u);
          if (v) {
            if (y.get) {
              v.push(y.get.bind(s));
            } else if (y.value !== undefined) {
              v.push(() => y.value);
            }
          } else if (t[u] === undefined) {
            t[u] = y.value;
          }
        } else {
          const v = Object.getOwnPropertyDescriptor(s, u);
          if (v.get) {
            Object.defineProperty(t, u, {
              enumerable: true,
              configurable: true,
              get: Za.bind(r[u] = [v.get.bind(s)])
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
function Ha(e, ...n) {
  if (Ie in e) {
    const a = new Set(n.length > 1 ? n.flat() : n[0]);
    const i = n.map(s => new Proxy({
      get(o) {
        if (s.includes(o)) {
          return e[o];
        } else {
          return undefined;
        }
      },
      has(o) {
        return s.includes(o) && o in e;
      },
      keys() {
        return s.filter(o => o in e);
      }
    }, Xn));
    i.push(new Proxy({
      get(s) {
        if (a.has(s)) {
          return undefined;
        } else {
          return e[s];
        }
      },
      has(s) {
        if (a.has(s)) {
          return false;
        } else {
          return s in e;
        }
      },
      keys() {
        return Object.keys(e).filter(s => !a.has(s));
      }
    }, Xn));
    return i;
  }
  const t = {};
  const r = n.map(() => ({}));
  for (const a of Object.getOwnPropertyNames(e)) {
    const i = Object.getOwnPropertyDescriptor(e, a);
    const s = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let o = false;
    let p = 0;
    for (const c of n) {
      if (c.includes(a)) {
        o = true;
        if (s) {
          r[p][a] = i.value;
        } else {
          Object.defineProperty(r[p], a, i);
        }
      }
      ++p;
    }
    if (!o) {
      if (s) {
        t[a] = i.value;
      } else {
        Object.defineProperty(t, a, i);
      }
    }
  }
  return [...r, t];
}
const Fi = e => `Stale read from <${e}>.`;
function $s(e) {
  const n = "fallback" in e && {
    fallback: () => e.fallback
  };
  return we(Ma(() => e.each, e.children, n || undefined));
}
function Zs(e) {
  const n = "fallback" in e && {
    fallback: () => e.fallback
  };
  return we($a(() => e.each, e.children, n || undefined));
}
function Ps(e) {
  const n = e.keyed;
  const t = we(() => e.when, undefined, {
    equals: (r, a) => n ? r === a : !r == !a
  });
  return we(() => {
    const r = t();
    if (r) {
      const a = e.children;
      if (typeof a == "function" && a.length > 0) {
        return re(() => a(n ? r : () => {
          if (!re(t)) {
            throw Fi("Show");
          }
          return e.when;
        }));
      } else {
        return a;
      }
    }
    return e.fallback;
  }, undefined, undefined);
}
function Hs(e) {
  let n = false;
  const t = (i, s) => i[0] === s[0] && (n ? i[1] === s[1] : !i[1] == !s[1]) && i[2] === s[2];
  const r = mi(() => e.children);
  const a = we(() => {
    let i = r();
    if (!Array.isArray(i)) {
      i = [i];
    }
    for (let s = 0; s < i.length; s++) {
      const o = i[s].when;
      if (o) {
        n = !!i[s].keyed;
        return [s, o, i[s]];
      }
    }
    return [-1];
  }, undefined, {
    equals: t
  });
  return we(() => {
    const [i, s, o] = a();
    if (i < 0) {
      return e.fallback;
    }
    const p = o.children;
    if (typeof p == "function" && p.length > 0) {
      return re(() => p(n ? s : () => {
        if (re(a)[0] !== i) {
          throw Fi("Match");
        }
        return o.when;
      }));
    } else {
      return p;
    }
  }, undefined, undefined);
}
function js(e) {
  return e;
}
const ja = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const Ka = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...ja]);
const Ga = new Set(["innerHTML", "textContent", "innerText", "children"]);
const Xa = Object.assign(Object.create(null), {
  className: "class",
  htmlFor: "for"
});
const Ya = Object.assign(Object.create(null), {
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
function Va(e, n) {
  const t = Ya[e];
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
const qa = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const Wa = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]);
const Ja = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Qa(e, n, t) {
  let r = t.length;
  let a = n.length;
  let i = r;
  let s = 0;
  let o = 0;
  let p = n[a - 1].nextSibling;
  let c = null;
  while (s < a || o < i) {
    if (n[s] === t[o]) {
      s++;
      o++;
      continue;
    }
    while (n[a - 1] === t[i - 1]) {
      a--;
      i--;
    }
    if (a === s) {
      const u = i < r ? o ? t[o - 1].nextSibling : t[i - o] : p;
      while (o < i) {
        e.insertBefore(t[o++], u);
      }
    } else if (i === o) {
      while (s < a) {
        if (!c || !c.has(n[s])) {
          n[s].remove();
        }
        s++;
      }
    } else if (n[s] === t[i - 1] && t[o] === n[a - 1]) {
      const u = n[--a].nextSibling;
      e.insertBefore(t[o++], n[s++].nextSibling);
      e.insertBefore(t[--i], u);
      n[a] = t[i];
    } else {
      if (!c) {
        c = new Map();
        let v = o;
        while (v < i) {
          c.set(t[v], v++);
        }
      }
      const u = c.get(n[s]);
      if (u != null) {
        if (o < u && u < i) {
          let v = s;
          let y = 1;
          let x;
          while (++v < a && v < i && (x = c.get(n[v])) != null && x === u + y) {
            y++;
          }
          if (y > u - o) {
            const S = n[s];
            while (o < u) {
              e.insertBefore(t[o++], S);
            }
          } else {
            e.replaceChild(t[o++], n[s++]);
          }
        } else {
          s++;
        }
      } else {
        n[s++].remove();
      }
    }
  }
}
const Ar = "_$DX_DELEGATE";
function Ks(e, n, t, r = {}) {
  let a;
  ht(i => {
    a = i;
    if (n === document) {
      e();
    } else {
      lo(n, e(), n.firstChild ? null : undefined, t);
    }
  }, r.owner);
  return () => {
    a();
    n.textContent = "";
  };
}
function Gs(e, n, t) {
  let r;
  const a = () => {
    const s = document.createElement("template");
    s.innerHTML = e;
    if (t) {
      return s.content.firstChild.firstChild;
    } else {
      return s.content.firstChild;
    }
  };
  const i = n ? () => re(() => document.importNode(r ||= a(), true)) : () => (r ||= a()).cloneNode(true);
  i.cloneNode = i;
  return i;
}
function eo(e, n = window.document) {
  const t = n[Ar] ||= new Set();
  for (let r = 0, a = e.length; r < a; r++) {
    const i = e[r];
    if (!t.has(i)) {
      t.add(i);
      n.addEventListener(i, co);
    }
  }
}
function Yn(e, n, t) {
  if (t == null) {
    e.removeAttribute(n);
  } else {
    e.setAttribute(n, t);
  }
}
function to(e, n, t, r) {
  if (r == null) {
    e.removeAttributeNS(n, t);
  } else {
    e.setAttributeNS(n, t, r);
  }
}
function no(e, n) {
  if (n == null) {
    e.removeAttribute("class");
  } else {
    e.className = n;
  }
}
function ro(e, n, t, r) {
  if (r) {
    if (Array.isArray(t)) {
      e[`$$${n}`] = t[0];
      e[`$$${n}Data`] = t[1];
    } else {
      e[`$$${n}`] = t;
    }
  } else if (Array.isArray(t)) {
    const a = t[0];
    e.addEventListener(n, t[0] = i => a.call(e, t[1], i));
  } else {
    e.addEventListener(n, t);
  }
}
function io(e, n, t = {}) {
  const r = Object.keys(n || {});
  const a = Object.keys(t);
  let i;
  let s;
  i = 0;
  s = a.length;
  for (; i < s; i++) {
    const o = a[i];
    if (!!o && o !== "undefined" && !n[o]) {
      kr(e, o, false);
      delete t[o];
    }
  }
  i = 0;
  s = r.length;
  for (; i < s; i++) {
    const o = r[i];
    const p = !!n[o];
    if (!!o && o !== "undefined" && t[o] !== p && !!p) {
      kr(e, o, true);
      t[o] = p;
    }
  }
  return t;
}
function ao(e, n, t) {
  if (!n) {
    if (t) {
      return Yn(e, "style");
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
  let a;
  let i;
  for (i in t) {
    if (n[i] == null) {
      r.removeProperty(i);
    }
    delete t[i];
  }
  for (i in n) {
    a = n[i];
    if (a !== t[i]) {
      r.setProperty(i, a);
      t[i] = a;
    }
  }
  return t;
}
function oo(e, n = {}, t, r) {
  const a = {};
  if (!r) {
    rt(() => a.children = gt(e, n.children, a.children));
  }
  rt(() => n.ref && n.ref(e));
  rt(() => fo(e, n, t, true, a, true));
  return a;
}
function Xs(e, n, t) {
  return re(() => e(n, t));
}
function lo(e, n, t, r) {
  if (t !== undefined && !r) {
    r = [];
  }
  if (typeof n != "function") {
    return gt(e, n, r, t);
  }
  rt(a => gt(e, n(), a, t), r);
}
function fo(e, n, t, r, a = {}, i = false) {
  n ||= {};
  for (const s in a) {
    if (!(s in n)) {
      if (s === "children") {
        continue;
      }
      a[s] = Sr(e, s, null, a[s], t, i);
    }
  }
  for (const s in n) {
    if (s === "children") {
      if (!r) {
        gt(e, n.children);
      }
      continue;
    }
    const o = n[s];
    a[s] = Sr(e, s, o, a[s], t, i);
  }
}
function so(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (n, t) => t.toUpperCase());
}
function kr(e, n, t) {
  const r = n.trim().split(/\s+/);
  for (let a = 0, i = r.length; a < i; a++) {
    e.classList.toggle(r[a], t);
  }
}
function Sr(e, n, t, r, a, i) {
  let s;
  let o;
  let p;
  let c;
  let u;
  if (n === "style") {
    return ao(e, t, r);
  }
  if (n === "classList") {
    return io(e, t, r);
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
    const y = qa.has(v);
    if (!y && r) {
      const x = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(v, x);
    }
    if (y || t) {
      ro(e, v, t, y);
      if (y) {
        eo([v]);
      }
    }
  } else if (n.slice(0, 5) === "attr:") {
    Yn(e, n.slice(5), t);
  } else if ((u = n.slice(0, 5) === "prop:") || (p = Ga.has(n)) || !a && ((c = Va(n, e.tagName)) || (o = Ka.has(n))) || (s = e.nodeName.includes("-"))) {
    if (u) {
      n = n.slice(5);
      o = true;
    }
    if (n === "class" || n === "className") {
      no(e, t);
    } else if (s && !o && !p) {
      e[so(n)] = t;
    } else {
      e[c || n] = t;
    }
  } else {
    const v = a && n.indexOf(":") > -1 && Ja[n.split(":")[0]];
    if (v) {
      to(e, v, n, t);
    } else {
      Yn(e, Xa[n] || n, t);
    }
  }
  return t;
}
function co(e) {
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
      const a = t[`${n}Data`];
      if (a !== undefined) {
        r.call(t, a, e);
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
function gt(e, n, t, r, a) {
  while (typeof t == "function") {
    t = t();
  }
  if (n === t) {
    return t;
  }
  const i = typeof n;
  const s = r !== undefined;
  e = s && t[0] && t[0].parentNode || e;
  if (i === "string" || i === "number") {
    if (i === "number") {
      n = n.toString();
    }
    if (s) {
      let o = t[0];
      if (o && o.nodeType === 3) {
        o.data = n;
      } else {
        o = document.createTextNode(n);
      }
      t = ft(e, t, r, o);
    } else if (t !== "" && typeof t == "string") {
      t = e.firstChild.data = n;
    } else {
      t = e.textContent = n;
    }
  } else if (n == null || i === "boolean") {
    t = ft(e, t, r);
  } else {
    if (i === "function") {
      rt(() => {
        let o = n();
        while (typeof o == "function") {
          o = o();
        }
        t = gt(e, o, t, r);
      });
      return () => t;
    }
    if (Array.isArray(n)) {
      const o = [];
      const p = t && Array.isArray(t);
      if (Vn(o, n, t, a)) {
        rt(() => t = gt(e, o, t, r, true));
        return () => t;
      }
      if (o.length === 0) {
        t = ft(e, t, r);
        if (s) {
          return t;
        }
      } else if (p) {
        if (t.length === 0) {
          Tr(e, o, r);
        } else {
          Qa(e, t, o);
        }
      } else {
        if (t) {
          ft(e);
        }
        Tr(e, o);
      }
      t = o;
    } else if (n.nodeType) {
      if (Array.isArray(t)) {
        if (s) {
          return t = ft(e, t, r, n);
        }
        ft(e, t, null, n);
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
  let a = false;
  for (let i = 0, s = n.length; i < s; i++) {
    let o = n[i];
    let p = t && t[i];
    let c;
    if (o != null && o !== true && o !== false) {
      if ((c = typeof o) == "object" && o.nodeType) {
        e.push(o);
      } else if (Array.isArray(o)) {
        a = Vn(e, o, p) || a;
      } else if (c === "function") {
        if (r) {
          while (typeof o == "function") {
            o = o();
          }
          a = Vn(e, Array.isArray(o) ? o : [o], Array.isArray(p) ? p : [p]) || a;
        } else {
          e.push(o);
          a = true;
        }
      } else {
        const u = String(o);
        if (p && p.nodeType === 3 && p.data === u) {
          e.push(p);
        } else {
          e.push(document.createTextNode(u));
        }
      }
    }
  }
  return a;
}
function Tr(e, n, t = null) {
  for (let r = 0, a = n.length; r < a; r++) {
    e.insertBefore(n[r], t);
  }
}
function ft(e, n, t, r) {
  if (t === undefined) {
    return e.textContent = "";
  }
  const a = r || document.createTextNode("");
  if (n.length) {
    let i = false;
    for (let s = n.length - 1; s >= 0; s--) {
      const o = n[s];
      if (a !== o) {
        const p = o.parentNode === e;
        if (!i && !s) {
          if (p) {
            e.replaceChild(a, o);
          } else {
            e.insertBefore(a, t);
          }
        } else if (p) {
          o.remove();
        }
      } else {
        i = true;
      }
    }
  } else {
    e.insertBefore(a, t);
  }
  return [a];
}
const uo = "http://www.w3.org/2000/svg";
function ho(e, n = false) {
  if (n) {
    return document.createElementNS(uo, e);
  } else {
    return document.createElement(e);
  }
}
function Ys(e) {
  const [n, t] = Ha(e, ["component"]);
  const r = we(() => n.component);
  return we(() => {
    const a = r();
    switch (typeof a) {
      case "function":
        Object.assign(a, {
          [Da]: true
        });
        return re(() => a(t));
      case "string":
        const i = Wa.has(a);
        const s = ho(a, i);
        oo(s, t, i);
        return s;
    }
  });
}
let Vt;
const _o = new Uint8Array(16);
function po() {
  if (!Vt && (Vt = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Vt)) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return Vt(_o);
}
const go = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function wo(e) {
  return typeof e == "string" && go.test(e);
}
const de = [];
for (let e = 0; e < 256; ++e) {
  de.push((e + 256).toString(16).slice(1));
}
function Ui(e, n = 0) {
  return de[e[n + 0]] + de[e[n + 1]] + de[e[n + 2]] + de[e[n + 3]] + "-" + de[e[n + 4]] + de[e[n + 5]] + "-" + de[e[n + 6]] + de[e[n + 7]] + "-" + de[e[n + 8]] + de[e[n + 9]] + "-" + de[e[n + 10]] + de[e[n + 11]] + de[e[n + 12]] + de[e[n + 13]] + de[e[n + 14]] + de[e[n + 15]];
}
function xo(e) {
  if (!wo(e)) {
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
function bo(e) {
  e = unescape(encodeURIComponent(e));
  const n = [];
  for (let t = 0; t < e.length; ++t) {
    n.push(e.charCodeAt(t));
  }
  return n;
}
const yo = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const vo = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function mo(e, n, t) {
  function r(a, i, s, o) {
    if (typeof a == "string") {
      a = bo(a);
    }
    if (typeof i == "string") {
      i = xo(i);
    }
    if (i?.length !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let c = new Uint8Array(16 + a.length);
    c.set(i);
    c.set(a, i.length);
    c = t(c);
    c[6] = c[6] & 15 | n;
    c[8] = c[8] & 63 | 128;
    if (s) {
      o = o || 0;
      for (let u = 0; u < 16; ++u) {
        s[o + u] = c[u];
      }
      return s;
    }
    return Ui(c);
  }
  try {
    r.name = e;
  } catch {}
  r.DNS = yo;
  r.URL = vo;
  return r;
}
const Eo = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ir = {
  randomUUID: Eo
};
function Vs(e, n, t) {
  if (Ir.randomUUID && !n && !e) {
    return Ir.randomUUID();
  }
  e = e || {};
  const r = e.random || (e.rng || po)();
  r[6] = r[6] & 15 | 64;
  r[8] = r[8] & 63 | 128;
  if (n) {
    t = t || 0;
    for (let a = 0; a < 16; ++a) {
      n[t + a] = r[a];
    }
    return n;
  }
  return Ui(r);
}
function Ao(e, n, t, r) {
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
function ko(e) {
  const n = [1518500249, 1859775393, 2400959708, 3395469782];
  const t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof e == "string") {
    const s = unescape(encodeURIComponent(e));
    e = [];
    for (let o = 0; o < s.length; ++o) {
      e.push(s.charCodeAt(o));
    }
  } else if (!Array.isArray(e)) {
    e = Array.prototype.slice.call(e);
  }
  e.push(128);
  const r = e.length / 4 + 2;
  const a = Math.ceil(r / 16);
  const i = new Array(a);
  for (let s = 0; s < a; ++s) {
    const o = new Uint32Array(16);
    for (let p = 0; p < 16; ++p) {
      o[p] = e[s * 64 + p * 4] << 24 | e[s * 64 + p * 4 + 1] << 16 | e[s * 64 + p * 4 + 2] << 8 | e[s * 64 + p * 4 + 3];
    }
    i[s] = o;
  }
  i[a - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32);
  i[a - 1][14] = Math.floor(i[a - 1][14]);
  i[a - 1][15] = (e.length - 1) * 8 & -1;
  for (let s = 0; s < a; ++s) {
    const o = new Uint32Array(80);
    for (let x = 0; x < 16; ++x) {
      o[x] = i[s][x];
    }
    for (let x = 16; x < 80; ++x) {
      o[x] = Sn(o[x - 3] ^ o[x - 8] ^ o[x - 14] ^ o[x - 16], 1);
    }
    let p = t[0];
    let c = t[1];
    let u = t[2];
    let v = t[3];
    let y = t[4];
    for (let x = 0; x < 80; ++x) {
      const S = Math.floor(x / 20);
      const N = Sn(p, 5) + Ao(S, c, u, v) + y + n[S] + o[x] >>> 0;
      y = v;
      v = u;
      u = Sn(c, 30) >>> 0;
      c = p;
      p = N;
    }
    t[0] = t[0] + p >>> 0;
    t[1] = t[1] + c >>> 0;
    t[2] = t[2] + u >>> 0;
    t[3] = t[3] + v >>> 0;
    t[4] = t[4] + y >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
const So = mo("v5", 80, ko);
const qs = So;
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const To = 4;
const Dr = 0;
const Fr = 1;
const Io = 2;
function yt(e) {
  let n = e.length;
  while (--n >= 0) {
    e[n] = 0;
  }
}
const Do = 0;
const Ci = 1;
const Fo = 2;
const Uo = 3;
const Co = 258;
const hr = 29;
const Ht = 256;
const Rt = Ht + 1 + hr;
const dt = 30;
const dr = 19;
const Ri = Rt * 2 + 1;
const Qe = 15;
const Tn = 16;
const Ro = 7;
const _r = 256;
const Oi = 16;
const Li = 17;
const Ni = 18;
const qn = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
const tn = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
const Oo = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
const Bi = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
const Lo = 512;
const ze = new Array((Rt + 2) * 2);
yt(ze);
const Dt = new Array(dt * 2);
yt(Dt);
const Ot = new Array(Lo);
yt(Ot);
const Lt = new Array(Co - Uo + 1);
yt(Lt);
const pr = new Array(hr);
yt(pr);
const cn = new Array(dt);
yt(cn);
function In(e, n, t, r, a) {
  this.static_tree = e;
  this.extra_bits = n;
  this.extra_base = t;
  this.elems = r;
  this.max_length = a;
  this.has_stree = e && e.length;
}
let zi;
let Mi;
let $i;
function Dn(e, n) {
  this.dyn_tree = e;
  this.max_code = 0;
  this.stat_desc = n;
}
const Zi = e => e < 256 ? Ot[e] : Ot[256 + (e >>> 7)];
const Nt = (e, n) => {
  e.pending_buf[e.pending++] = n & 255;
  e.pending_buf[e.pending++] = n >>> 8 & 255;
};
const be = (e, n, t) => {
  if (e.bi_valid > Tn - t) {
    e.bi_buf |= n << e.bi_valid & 65535;
    Nt(e, e.bi_buf);
    e.bi_buf = n >> Tn - e.bi_valid;
    e.bi_valid += t - Tn;
  } else {
    e.bi_buf |= n << e.bi_valid & 65535;
    e.bi_valid += t;
  }
};
const Ce = (e, n, t) => {
  be(e, t[n * 2], t[n * 2 + 1]);
};
const Pi = (e, n) => {
  let t = 0;
  do {
    t |= e & 1;
    e >>>= 1;
    t <<= 1;
  } while (--n > 0);
  return t >>> 1;
};
const No = e => {
  if (e.bi_valid === 16) {
    Nt(e, e.bi_buf);
    e.bi_buf = 0;
    e.bi_valid = 0;
  } else if (e.bi_valid >= 8) {
    e.pending_buf[e.pending++] = e.bi_buf & 255;
    e.bi_buf >>= 8;
    e.bi_valid -= 8;
  }
};
const Bo = (e, n) => {
  const t = n.dyn_tree;
  const r = n.max_code;
  const a = n.stat_desc.static_tree;
  const i = n.stat_desc.has_stree;
  const s = n.stat_desc.extra_bits;
  const o = n.stat_desc.extra_base;
  const p = n.stat_desc.max_length;
  let c;
  let u;
  let v;
  let y;
  let x;
  let S;
  let N = 0;
  for (y = 0; y <= Qe; y++) {
    e.bl_count[y] = 0;
  }
  t[e.heap[e.heap_max] * 2 + 1] = 0;
  c = e.heap_max + 1;
  for (; c < Ri; c++) {
    u = e.heap[c];
    y = t[t[u * 2 + 1] * 2 + 1] + 1;
    if (y > p) {
      y = p;
      N++;
    }
    t[u * 2 + 1] = y;
    if (!(u > r)) {
      e.bl_count[y]++;
      x = 0;
      if (u >= o) {
        x = s[u - o];
      }
      S = t[u * 2];
      e.opt_len += S * (y + x);
      if (i) {
        e.static_len += S * (a[u * 2 + 1] + x);
      }
    }
  }
  if (N !== 0) {
    do {
      for (y = p - 1; e.bl_count[y] === 0;) {
        y--;
      }
      e.bl_count[y]--;
      e.bl_count[y + 1] += 2;
      e.bl_count[p]--;
      N -= 2;
    } while (N > 0);
    for (y = p; y !== 0; y--) {
      for (u = e.bl_count[y]; u !== 0;) {
        v = e.heap[--c];
        if (!(v > r)) {
          if (t[v * 2 + 1] !== y) {
            e.opt_len += (y - t[v * 2 + 1]) * t[v * 2];
            t[v * 2 + 1] = y;
          }
          u--;
        }
      }
    }
  }
};
const Hi = (e, n, t) => {
  const r = new Array(Qe + 1);
  let a = 0;
  let i;
  let s;
  for (i = 1; i <= Qe; i++) {
    a = a + t[i - 1] << 1;
    r[i] = a;
  }
  for (s = 0; s <= n; s++) {
    let o = e[s * 2 + 1];
    if (o !== 0) {
      e[s * 2] = Pi(r[o]++, o);
    }
  }
};
const zo = () => {
  let e;
  let n;
  let t;
  let r;
  let a;
  const i = new Array(Qe + 1);
  t = 0;
  r = 0;
  for (; r < hr - 1; r++) {
    pr[r] = t;
    e = 0;
    for (; e < 1 << qn[r]; e++) {
      Lt[t++] = r;
    }
  }
  Lt[t - 1] = r;
  a = 0;
  r = 0;
  for (; r < 16; r++) {
    cn[r] = a;
    e = 0;
    for (; e < 1 << tn[r]; e++) {
      Ot[a++] = r;
    }
  }
  for (a >>= 7; r < dt; r++) {
    cn[r] = a << 7;
    e = 0;
    for (; e < 1 << tn[r] - 7; e++) {
      Ot[256 + a++] = r;
    }
  }
  for (n = 0; n <= Qe; n++) {
    i[n] = 0;
  }
  for (e = 0; e <= 143;) {
    ze[e * 2 + 1] = 8;
    e++;
    i[8]++;
  }
  while (e <= 255) {
    ze[e * 2 + 1] = 9;
    e++;
    i[9]++;
  }
  while (e <= 279) {
    ze[e * 2 + 1] = 7;
    e++;
    i[7]++;
  }
  while (e <= 287) {
    ze[e * 2 + 1] = 8;
    e++;
    i[8]++;
  }
  Hi(ze, Rt + 1, i);
  e = 0;
  for (; e < dt; e++) {
    Dt[e * 2 + 1] = 5;
    Dt[e * 2] = Pi(e, 5);
  }
  zi = new In(ze, qn, Ht + 1, Rt, Qe);
  Mi = new In(Dt, tn, 0, dt, Qe);
  $i = new In(new Array(0), Oo, 0, dr, Ro);
};
const ji = e => {
  let n;
  for (n = 0; n < Rt; n++) {
    e.dyn_ltree[n * 2] = 0;
  }
  for (n = 0; n < dt; n++) {
    e.dyn_dtree[n * 2] = 0;
  }
  for (n = 0; n < dr; n++) {
    e.bl_tree[n * 2] = 0;
  }
  e.dyn_ltree[_r * 2] = 1;
  e.opt_len = e.static_len = 0;
  e.sym_next = e.matches = 0;
};
const Ki = e => {
  if (e.bi_valid > 8) {
    Nt(e, e.bi_buf);
  } else if (e.bi_valid > 0) {
    e.pending_buf[e.pending++] = e.bi_buf;
  }
  e.bi_buf = 0;
  e.bi_valid = 0;
};
const Ur = (e, n, t, r) => {
  const a = n * 2;
  const i = t * 2;
  return e[a] < e[i] || e[a] === e[i] && r[n] <= r[t];
};
const Fn = (e, n, t) => {
  const r = e.heap[t];
  let a = t << 1;
  while (a <= e.heap_len && (a < e.heap_len && Ur(n, e.heap[a + 1], e.heap[a], e.depth) && a++, !Ur(n, r, e.heap[a], e.depth))) {
    e.heap[t] = e.heap[a];
    t = a;
    a <<= 1;
  }
  e.heap[t] = r;
};
const Cr = (e, n, t) => {
  let r;
  let a;
  let i = 0;
  let s;
  let o;
  if (e.sym_next !== 0) {
    do {
      r = e.pending_buf[e.sym_buf + i++] & 255;
      r += (e.pending_buf[e.sym_buf + i++] & 255) << 8;
      a = e.pending_buf[e.sym_buf + i++];
      if (r === 0) {
        Ce(e, a, n);
      } else {
        s = Lt[a];
        Ce(e, s + Ht + 1, n);
        o = qn[s];
        if (o !== 0) {
          a -= pr[s];
          be(e, a, o);
        }
        r--;
        s = Zi(r);
        Ce(e, s, t);
        o = tn[s];
        if (o !== 0) {
          r -= cn[s];
          be(e, r, o);
        }
      }
    } while (i < e.sym_next);
  }
  Ce(e, _r, n);
};
const Wn = (e, n) => {
  const t = n.dyn_tree;
  const r = n.stat_desc.static_tree;
  const a = n.stat_desc.has_stree;
  const i = n.stat_desc.elems;
  let s;
  let o;
  let p = -1;
  let c;
  e.heap_len = 0;
  e.heap_max = Ri;
  s = 0;
  for (; s < i; s++) {
    if (t[s * 2] !== 0) {
      e.heap[++e.heap_len] = p = s;
      e.depth[s] = 0;
    } else {
      t[s * 2 + 1] = 0;
    }
  }
  while (e.heap_len < 2) {
    c = e.heap[++e.heap_len] = p < 2 ? ++p : 0;
    t[c * 2] = 1;
    e.depth[c] = 0;
    e.opt_len--;
    if (a) {
      e.static_len -= r[c * 2 + 1];
    }
  }
  n.max_code = p;
  s = e.heap_len >> 1;
  for (; s >= 1; s--) {
    Fn(e, t, s);
  }
  c = i;
  do {
    s = e.heap[1];
    e.heap[1] = e.heap[e.heap_len--];
    Fn(e, t, 1);
    o = e.heap[1];
    e.heap[--e.heap_max] = s;
    e.heap[--e.heap_max] = o;
    t[c * 2] = t[s * 2] + t[o * 2];
    e.depth[c] = (e.depth[s] >= e.depth[o] ? e.depth[s] : e.depth[o]) + 1;
    t[s * 2 + 1] = t[o * 2 + 1] = c;
    e.heap[1] = c++;
    Fn(e, t, 1);
  } while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[1];
  Bo(e, n);
  Hi(t, p, e.bl_count);
};
const Rr = (e, n, t) => {
  let r;
  let a = -1;
  let i;
  let s = n[1];
  let o = 0;
  let p = 7;
  let c = 4;
  if (s === 0) {
    p = 138;
    c = 3;
  }
  n[(t + 1) * 2 + 1] = 65535;
  r = 0;
  for (; r <= t; r++) {
    i = s;
    s = n[(r + 1) * 2 + 1];
    if (!(++o < p) || i !== s) {
      if (o < c) {
        e.bl_tree[i * 2] += o;
      } else if (i !== 0) {
        if (i !== a) {
          e.bl_tree[i * 2]++;
        }
        e.bl_tree[Oi * 2]++;
      } else if (o <= 10) {
        e.bl_tree[Li * 2]++;
      } else {
        e.bl_tree[Ni * 2]++;
      }
      o = 0;
      a = i;
      if (s === 0) {
        p = 138;
        c = 3;
      } else if (i === s) {
        p = 6;
        c = 3;
      } else {
        p = 7;
        c = 4;
      }
    }
  }
};
const Or = (e, n, t) => {
  let r;
  let a = -1;
  let i;
  let s = n[1];
  let o = 0;
  let p = 7;
  let c = 4;
  if (s === 0) {
    p = 138;
    c = 3;
  }
  r = 0;
  for (; r <= t; r++) {
    i = s;
    s = n[(r + 1) * 2 + 1];
    if (!(++o < p) || i !== s) {
      if (o < c) {
        do {
          Ce(e, i, e.bl_tree);
        } while (--o !== 0);
      } else if (i !== 0) {
        if (i !== a) {
          Ce(e, i, e.bl_tree);
          o--;
        }
        Ce(e, Oi, e.bl_tree);
        be(e, o - 3, 2);
      } else if (o <= 10) {
        Ce(e, Li, e.bl_tree);
        be(e, o - 3, 3);
      } else {
        Ce(e, Ni, e.bl_tree);
        be(e, o - 11, 7);
      }
      o = 0;
      a = i;
      if (s === 0) {
        p = 138;
        c = 3;
      } else if (i === s) {
        p = 6;
        c = 3;
      } else {
        p = 7;
        c = 4;
      }
    }
  }
};
const Mo = e => {
  let n;
  Rr(e, e.dyn_ltree, e.l_desc.max_code);
  Rr(e, e.dyn_dtree, e.d_desc.max_code);
  Wn(e, e.bl_desc);
  n = dr - 1;
  for (; n >= 3 && e.bl_tree[Bi[n] * 2 + 1] === 0; n--);
  e.opt_len += (n + 1) * 3 + 5 + 5 + 4;
  return n;
};
const $o = (e, n, t, r) => {
  let a;
  be(e, n - 257, 5);
  be(e, t - 1, 5);
  be(e, r - 4, 4);
  a = 0;
  for (; a < r; a++) {
    be(e, e.bl_tree[Bi[a] * 2 + 1], 3);
  }
  Or(e, e.dyn_ltree, n - 1);
  Or(e, e.dyn_dtree, t - 1);
};
const Zo = e => {
  let n = 4093624447;
  let t;
  for (t = 0; t <= 31; t++, n >>>= 1) {
    if (n & 1 && e.dyn_ltree[t * 2] !== 0) {
      return Dr;
    }
  }
  if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
    return Fr;
  }
  for (t = 32; t < Ht; t++) {
    if (e.dyn_ltree[t * 2] !== 0) {
      return Fr;
    }
  }
  return Dr;
};
let Lr = false;
const Po = e => {
  if (!Lr) {
    zo();
    Lr = true;
  }
  e.l_desc = new Dn(e.dyn_ltree, zi);
  e.d_desc = new Dn(e.dyn_dtree, Mi);
  e.bl_desc = new Dn(e.bl_tree, $i);
  e.bi_buf = 0;
  e.bi_valid = 0;
  ji(e);
};
const Gi = (e, n, t, r) => {
  be(e, (Do << 1) + (r ? 1 : 0), 3);
  Ki(e);
  Nt(e, t);
  Nt(e, ~t);
  if (t) {
    e.pending_buf.set(e.window.subarray(n, n + t), e.pending);
  }
  e.pending += t;
};
const Ho = e => {
  be(e, Ci << 1, 3);
  Ce(e, _r, ze);
  No(e);
};
const jo = (e, n, t, r) => {
  let a;
  let i;
  let s = 0;
  if (e.level > 0) {
    if (e.strm.data_type === Io) {
      e.strm.data_type = Zo(e);
    }
    Wn(e, e.l_desc);
    Wn(e, e.d_desc);
    s = Mo(e);
    a = e.opt_len + 3 + 7 >>> 3;
    i = e.static_len + 3 + 7 >>> 3;
    if (i <= a) {
      a = i;
    }
  } else {
    a = i = t + 5;
  }
  if (t + 4 <= a && n !== -1) {
    Gi(e, n, t, r);
  } else if (e.strategy === To || i === a) {
    be(e, (Ci << 1) + (r ? 1 : 0), 3);
    Cr(e, ze, Dt);
  } else {
    be(e, (Fo << 1) + (r ? 1 : 0), 3);
    $o(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1);
    Cr(e, e.dyn_ltree, e.dyn_dtree);
  }
  ji(e);
  if (r) {
    Ki(e);
  }
};
const Ko = (e, n, t) => {
  e.pending_buf[e.sym_buf + e.sym_next++] = n;
  e.pending_buf[e.sym_buf + e.sym_next++] = n >> 8;
  e.pending_buf[e.sym_buf + e.sym_next++] = t;
  if (n === 0) {
    e.dyn_ltree[t * 2]++;
  } else {
    e.matches++;
    n--;
    e.dyn_ltree[(Lt[t] + Ht + 1) * 2]++;
    e.dyn_dtree[Zi(n) * 2]++;
  }
  return e.sym_next === e.sym_end;
};
var Go = Po;
var Xo = Gi;
var Yo = jo;
var Vo = Ko;
var qo = Ho;
var Wo = {
  _tr_init: Go,
  _tr_stored_block: Xo,
  _tr_flush_block: Yo,
  _tr_tally: Vo,
  _tr_align: qo
};
const Jo = (e, n, t, r) => {
  let a = e & 65535 | 0;
  let i = e >>> 16 & 65535 | 0;
  let s = 0;
  while (t !== 0) {
    s = t > 2000 ? 2000 : t;
    t -= s;
    do {
      a = a + n[r++] | 0;
      i = i + a | 0;
    } while (--s);
    a %= 65521;
    i %= 65521;
  }
  return a | i << 16 | 0;
};
var Bt = Jo;
const Qo = () => {
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
const el = new Uint32Array(Qo());
const tl = (e, n, t, r) => {
  const a = el;
  const i = r + t;
  e ^= -1;
  for (let s = r; s < i; s++) {
    e = e >>> 8 ^ a[(e ^ n[s]) & 255];
  }
  return e ^ -1;
};
var he = tl;
var it = {
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
var vt = {
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
  _tr_init: nl,
  _tr_stored_block: Jn,
  _tr_flush_block: rl,
  _tr_tally: qe,
  _tr_align: il
} = Wo;
const {
  Z_NO_FLUSH: We,
  Z_PARTIAL_FLUSH: al,
  Z_FULL_FLUSH: ol,
  Z_FINISH: Ae,
  Z_BLOCK: Nr,
  Z_OK: _e,
  Z_STREAM_END: Br,
  Z_STREAM_ERROR: Oe,
  Z_DATA_ERROR: ll,
  Z_BUF_ERROR: Un,
  Z_DEFAULT_COMPRESSION: fl,
  Z_FILTERED: sl,
  Z_HUFFMAN_ONLY: qt,
  Z_RLE: cl,
  Z_FIXED: ul,
  Z_DEFAULT_STRATEGY: hl,
  Z_UNKNOWN: dl,
  Z_DEFLATED: xn
} = vt;
const _l = 9;
const pl = 15;
const gl = 8;
const wl = 29;
const xl = 256;
const Qn = xl + 1 + wl;
const bl = 30;
const yl = 19;
const vl = Qn * 2 + 1;
const ml = 15;
const te = 3;
const Ye = 258;
const Le = Ye + te + 1;
const El = 32;
const wt = 42;
const gr = 57;
const er = 69;
const tr = 73;
const nr = 91;
const rr = 103;
const et = 113;
const St = 666;
const xe = 1;
const mt = 2;
const at = 3;
const Et = 4;
const Al = 3;
const tt = (e, n) => {
  e.msg = it[n];
  return n;
};
const zr = e => e * 2 - (e > 4 ? 9 : 0);
const Ge = e => {
  let n = e.length;
  while (--n >= 0) {
    e[n] = 0;
  }
};
const kl = e => {
  let n;
  let t;
  let r;
  let a = e.w_size;
  n = e.hash_size;
  r = n;
  do {
    t = e.head[--r];
    e.head[r] = t >= a ? t - a : 0;
  } while (--n);
  n = a;
  r = n;
  do {
    t = e.prev[--r];
    e.prev[r] = t >= a ? t - a : 0;
  } while (--n);
};
let Sl = (e, n, t) => (n << e.hash_shift ^ t) & e.hash_mask;
let Je = Sl;
const ve = e => {
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
const me = (e, n) => {
  rl(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, n);
  e.block_start = e.strstart;
  ve(e.strm);
};
const ne = (e, n) => {
  e.pending_buf[e.pending++] = n;
};
const kt = (e, n) => {
  e.pending_buf[e.pending++] = n >>> 8 & 255;
  e.pending_buf[e.pending++] = n & 255;
};
const ir = (e, n, t, r) => {
  let a = e.avail_in;
  if (a > r) {
    a = r;
  }
  if (a === 0) {
    return 0;
  } else {
    e.avail_in -= a;
    n.set(e.input.subarray(e.next_in, e.next_in + a), t);
    if (e.state.wrap === 1) {
      e.adler = Bt(e.adler, n, a, t);
    } else if (e.state.wrap === 2) {
      e.adler = he(e.adler, n, a, t);
    }
    e.next_in += a;
    e.total_in += a;
    return a;
  }
};
const Xi = (e, n) => {
  let t = e.max_chain_length;
  let r = e.strstart;
  let a;
  let i;
  let s = e.prev_length;
  let o = e.nice_match;
  const p = e.strstart > e.w_size - Le ? e.strstart - (e.w_size - Le) : 0;
  const c = e.window;
  const u = e.w_mask;
  const v = e.prev;
  const y = e.strstart + Ye;
  let x = c[r + s - 1];
  let S = c[r + s];
  if (e.prev_length >= e.good_match) {
    t >>= 2;
  }
  if (o > e.lookahead) {
    o = e.lookahead;
  }
  do {
    a = n;
    if (c[a + s] === S && c[a + s - 1] === x && c[a] === c[r] && c[++a] === c[r + 1]) {
      r += 2;
      a++;
      do ; while (c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && r < y);
      i = Ye - (y - r);
      r = y - Ye;
      if (i > s) {
        e.match_start = n;
        s = i;
        if (i >= o) {
          break;
        }
        x = c[r + s - 1];
        S = c[r + s];
      }
    }
  } while ((n = v[n & u]) > p && --t !== 0);
  if (s <= e.lookahead) {
    return s;
  } else {
    return e.lookahead;
  }
};
const xt = e => {
  const n = e.w_size;
  let t;
  let r;
  let a;
  do {
    r = e.window_size - e.lookahead - e.strstart;
    if (e.strstart >= n + (n - Le)) {
      e.window.set(e.window.subarray(n, n + n - r), 0);
      e.match_start -= n;
      e.strstart -= n;
      e.block_start -= n;
      if (e.insert > e.strstart) {
        e.insert = e.strstart;
      }
      kl(e);
      r += n;
    }
    if (e.strm.avail_in === 0) {
      break;
    }
    t = ir(e.strm, e.window, e.strstart + e.lookahead, r);
    e.lookahead += t;
    if (e.lookahead + e.insert >= te) {
      a = e.strstart - e.insert;
      e.ins_h = e.window[a];
      e.ins_h = Je(e, e.ins_h, e.window[a + 1]);
      while (e.insert && (e.ins_h = Je(e, e.ins_h, e.window[a + te - 1]), e.prev[a & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = a, a++, e.insert--, !(e.lookahead + e.insert < te)));
    }
  } while (e.lookahead < Le && e.strm.avail_in !== 0);
};
const Yi = (e, n) => {
  let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5;
  let r;
  let a;
  let i;
  let s = 0;
  let o = e.strm.avail_in;
  do {
    r = 65535;
    i = e.bi_valid + 42 >> 3;
    if (e.strm.avail_out < i || (i = e.strm.avail_out - i, a = e.strstart - e.block_start, r > a + e.strm.avail_in && (r = a + e.strm.avail_in), r > i && (r = i), r < t && (r === 0 && n !== Ae || n === We || r !== a + e.strm.avail_in))) {
      break;
    }
    s = n === Ae && r === a + e.strm.avail_in ? 1 : 0;
    Jn(e, 0, 0, s);
    e.pending_buf[e.pending - 4] = r;
    e.pending_buf[e.pending - 3] = r >> 8;
    e.pending_buf[e.pending - 2] = ~r;
    e.pending_buf[e.pending - 1] = ~r >> 8;
    ve(e.strm);
    if (a) {
      if (a > r) {
        a = r;
      }
      e.strm.output.set(e.window.subarray(e.block_start, e.block_start + a), e.strm.next_out);
      e.strm.next_out += a;
      e.strm.avail_out -= a;
      e.strm.total_out += a;
      e.block_start += a;
      r -= a;
    }
    if (r) {
      ir(e.strm, e.strm.output, e.strm.next_out, r);
      e.strm.next_out += r;
      e.strm.avail_out -= r;
      e.strm.total_out += r;
    }
  } while (s === 0);
  o -= e.strm.avail_in;
  if (o) {
    if (o >= e.w_size) {
      e.matches = 2;
      e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0);
      e.strstart = e.w_size;
      e.insert = e.strstart;
    } else {
      if (e.window_size - e.strstart <= o) {
        e.strstart -= e.w_size;
        e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0);
        if (e.matches < 2) {
          e.matches++;
        }
        if (e.insert > e.strstart) {
          e.insert = e.strstart;
        }
      }
      e.window.set(e.strm.input.subarray(e.strm.next_in - o, e.strm.next_in), e.strstart);
      e.strstart += o;
      e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o;
    }
    e.block_start = e.strstart;
  }
  if (e.high_water < e.strstart) {
    e.high_water = e.strstart;
  }
  if (s) {
    return Et;
  } else if (n !== We && n !== Ae && e.strm.avail_in === 0 && e.strstart === e.block_start) {
    return mt;
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
      ir(e.strm, e.window, e.strstart, i);
      e.strstart += i;
      e.insert += i > e.w_size - e.insert ? e.w_size - e.insert : i;
    }
    if (e.high_water < e.strstart) {
      e.high_water = e.strstart;
    }
    i = e.bi_valid + 42 >> 3;
    i = e.pending_buf_size - i > 65535 ? 65535 : e.pending_buf_size - i;
    t = i > e.w_size ? e.w_size : i;
    a = e.strstart - e.block_start;
    if (a >= t || (a || n === Ae) && n !== We && e.strm.avail_in === 0 && a <= i) {
      r = a > i ? i : a;
      s = n === Ae && e.strm.avail_in === 0 && r === a ? 1 : 0;
      Jn(e, e.block_start, r, s);
      e.block_start += r;
      ve(e.strm);
    }
    if (s) {
      return at;
    } else {
      return xe;
    }
  }
};
const Cn = (e, n) => {
  let t;
  let r;
  while (true) {
    if (e.lookahead < Le) {
      xt(e);
      if (e.lookahead < Le && n === We) {
        return xe;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    t = 0;
    if (e.lookahead >= te) {
      e.ins_h = Je(e, e.ins_h, e.window[e.strstart + te - 1]);
      t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    if (t !== 0 && e.strstart - t <= e.w_size - Le) {
      e.match_length = Xi(e, t);
    }
    if (e.match_length >= te) {
      r = qe(e, e.strstart - e.match_start, e.match_length - te);
      e.lookahead -= e.match_length;
      if (e.match_length <= e.max_lazy_match && e.lookahead >= te) {
        e.match_length--;
        do {
          e.strstart++;
          e.ins_h = Je(e, e.ins_h, e.window[e.strstart + te - 1]);
          t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        } while (--e.match_length !== 0);
        e.strstart++;
      } else {
        e.strstart += e.match_length;
        e.match_length = 0;
        e.ins_h = e.window[e.strstart];
        e.ins_h = Je(e, e.ins_h, e.window[e.strstart + 1]);
      }
    } else {
      r = qe(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (r && (me(e, false), e.strm.avail_out === 0)) {
      return xe;
    }
  }
  e.insert = e.strstart < te - 1 ? e.strstart : te - 1;
  if (n === Ae) {
    me(e, true);
    if (e.strm.avail_out === 0) {
      return at;
    } else {
      return Et;
    }
  } else if (e.sym_next && (me(e, false), e.strm.avail_out === 0)) {
    return xe;
  } else {
    return mt;
  }
};
const st = (e, n) => {
  let t;
  let r;
  let a;
  while (true) {
    if (e.lookahead < Le) {
      xt(e);
      if (e.lookahead < Le && n === We) {
        return xe;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    t = 0;
    if (e.lookahead >= te) {
      e.ins_h = Je(e, e.ins_h, e.window[e.strstart + te - 1]);
      t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    e.prev_length = e.match_length;
    e.prev_match = e.match_start;
    e.match_length = te - 1;
    if (t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - Le) {
      e.match_length = Xi(e, t);
      if (e.match_length <= 5 && (e.strategy === sl || e.match_length === te && e.strstart - e.match_start > 4096)) {
        e.match_length = te - 1;
      }
    }
    if (e.prev_length >= te && e.match_length <= e.prev_length) {
      a = e.strstart + e.lookahead - te;
      r = qe(e, e.strstart - 1 - e.prev_match, e.prev_length - te);
      e.lookahead -= e.prev_length - 1;
      e.prev_length -= 2;
      do {
        if (++e.strstart <= a) {
          e.ins_h = Je(e, e.ins_h, e.window[e.strstart + te - 1]);
          t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        }
      } while (--e.prev_length !== 0);
      e.match_available = 0;
      e.match_length = te - 1;
      e.strstart++;
      if (r && (me(e, false), e.strm.avail_out === 0)) {
        return xe;
      }
    } else if (e.match_available) {
      r = qe(e, 0, e.window[e.strstart - 1]);
      if (r) {
        me(e, false);
      }
      e.strstart++;
      e.lookahead--;
      if (e.strm.avail_out === 0) {
        return xe;
      }
    } else {
      e.match_available = 1;
      e.strstart++;
      e.lookahead--;
    }
  }
  if (e.match_available) {
    r = qe(e, 0, e.window[e.strstart - 1]);
    e.match_available = 0;
  }
  e.insert = e.strstart < te - 1 ? e.strstart : te - 1;
  if (n === Ae) {
    me(e, true);
    if (e.strm.avail_out === 0) {
      return at;
    } else {
      return Et;
    }
  } else if (e.sym_next && (me(e, false), e.strm.avail_out === 0)) {
    return xe;
  } else {
    return mt;
  }
};
const Tl = (e, n) => {
  let t;
  let r;
  let a;
  let i;
  const s = e.window;
  while (true) {
    if (e.lookahead <= Ye) {
      xt(e);
      if (e.lookahead <= Ye && n === We) {
        return xe;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    e.match_length = 0;
    if (e.lookahead >= te && e.strstart > 0 && (a = e.strstart - 1, r = s[a], r === s[++a] && r === s[++a] && r === s[++a])) {
      i = e.strstart + Ye;
      do ; while (r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && a < i);
      e.match_length = Ye - (i - a);
      if (e.match_length > e.lookahead) {
        e.match_length = e.lookahead;
      }
    }
    if (e.match_length >= te) {
      t = qe(e, 1, e.match_length - te);
      e.lookahead -= e.match_length;
      e.strstart += e.match_length;
      e.match_length = 0;
    } else {
      t = qe(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (t && (me(e, false), e.strm.avail_out === 0)) {
      return xe;
    }
  }
  e.insert = 0;
  if (n === Ae) {
    me(e, true);
    if (e.strm.avail_out === 0) {
      return at;
    } else {
      return Et;
    }
  } else if (e.sym_next && (me(e, false), e.strm.avail_out === 0)) {
    return xe;
  } else {
    return mt;
  }
};
const Il = (e, n) => {
  let t;
  while (true) {
    if (e.lookahead === 0 && (xt(e), e.lookahead === 0)) {
      if (n === We) {
        return xe;
      }
      break;
    }
    e.match_length = 0;
    t = qe(e, 0, e.window[e.strstart]);
    e.lookahead--;
    e.strstart++;
    if (t && (me(e, false), e.strm.avail_out === 0)) {
      return xe;
    }
  }
  e.insert = 0;
  if (n === Ae) {
    me(e, true);
    if (e.strm.avail_out === 0) {
      return at;
    } else {
      return Et;
    }
  } else if (e.sym_next && (me(e, false), e.strm.avail_out === 0)) {
    return xe;
  } else {
    return mt;
  }
};
function De(e, n, t, r, a) {
  this.good_length = e;
  this.max_lazy = n;
  this.nice_length = t;
  this.max_chain = r;
  this.func = a;
}
const Tt = [new De(0, 0, 0, 0, Yi), new De(4, 4, 8, 4, Cn), new De(4, 5, 16, 8, Cn), new De(4, 6, 32, 32, Cn), new De(4, 4, 16, 16, st), new De(8, 16, 32, 32, st), new De(8, 16, 128, 128, st), new De(8, 32, 128, 256, st), new De(32, 128, 258, 1024, st), new De(32, 258, 258, 4096, st)];
const Dl = e => {
  e.window_size = e.w_size * 2;
  Ge(e.head);
  e.max_lazy_match = Tt[e.level].max_lazy;
  e.good_match = Tt[e.level].good_length;
  e.nice_match = Tt[e.level].nice_length;
  e.max_chain_length = Tt[e.level].max_chain;
  e.strstart = 0;
  e.block_start = 0;
  e.lookahead = 0;
  e.insert = 0;
  e.match_length = e.prev_length = te - 1;
  e.match_available = 0;
  e.ins_h = 0;
};
function Fl() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = xn;
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
  this.dyn_ltree = new Uint16Array(vl * 2);
  this.dyn_dtree = new Uint16Array((bl * 2 + 1) * 2);
  this.bl_tree = new Uint16Array((yl * 2 + 1) * 2);
  Ge(this.dyn_ltree);
  Ge(this.dyn_dtree);
  Ge(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(ml + 1);
  this.heap = new Uint16Array(Qn * 2 + 1);
  Ge(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Uint16Array(Qn * 2 + 1);
  Ge(this.depth);
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
const jt = e => {
  if (!e) {
    return 1;
  }
  const n = e.state;
  if (!n || n.strm !== e || n.status !== wt && n.status !== gr && n.status !== er && n.status !== tr && n.status !== nr && n.status !== rr && n.status !== et && n.status !== St) {
    return 1;
  } else {
    return 0;
  }
};
const Vi = e => {
  if (jt(e)) {
    return tt(e, Oe);
  }
  e.total_in = e.total_out = 0;
  e.data_type = dl;
  const n = e.state;
  n.pending = 0;
  n.pending_out = 0;
  if (n.wrap < 0) {
    n.wrap = -n.wrap;
  }
  n.status = n.wrap === 2 ? gr : n.wrap ? wt : et;
  e.adler = n.wrap === 2 ? 0 : 1;
  n.last_flush = -2;
  nl(n);
  return _e;
};
const qi = e => {
  const n = Vi(e);
  if (n === _e) {
    Dl(e.state);
  }
  return n;
};
const Ul = (e, n) => jt(e) || e.state.wrap !== 2 ? Oe : (e.state.gzhead = n, _e);
const Wi = (e, n, t, r, a, i) => {
  if (!e) {
    return Oe;
  }
  let s = 1;
  if (n === fl) {
    n = 6;
  }
  if (r < 0) {
    s = 0;
    r = -r;
  } else if (r > 15) {
    s = 2;
    r -= 16;
  }
  if (a < 1 || a > _l || t !== xn || r < 8 || r > 15 || n < 0 || n > 9 || i < 0 || i > ul || r === 8 && s !== 1) {
    return tt(e, Oe);
  }
  if (r === 8) {
    r = 9;
  }
  const o = new Fl();
  e.state = o;
  o.strm = e;
  o.status = wt;
  o.wrap = s;
  o.gzhead = null;
  o.w_bits = r;
  o.w_size = 1 << o.w_bits;
  o.w_mask = o.w_size - 1;
  o.hash_bits = a + 7;
  o.hash_size = 1 << o.hash_bits;
  o.hash_mask = o.hash_size - 1;
  o.hash_shift = ~~((o.hash_bits + te - 1) / te);
  o.window = new Uint8Array(o.w_size * 2);
  o.head = new Uint16Array(o.hash_size);
  o.prev = new Uint16Array(o.w_size);
  o.lit_bufsize = 1 << a + 6;
  o.pending_buf_size = o.lit_bufsize * 4;
  o.pending_buf = new Uint8Array(o.pending_buf_size);
  o.sym_buf = o.lit_bufsize;
  o.sym_end = (o.lit_bufsize - 1) * 3;
  o.level = n;
  o.strategy = i;
  o.method = t;
  return qi(e);
};
const Cl = (e, n) => Wi(e, n, xn, pl, gl, hl);
const Rl = (e, n) => {
  if (jt(e) || n > Nr || n < 0) {
    if (e) {
      return tt(e, Oe);
    } else {
      return Oe;
    }
  }
  const t = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || t.status === St && n !== Ae) {
    return tt(e, e.avail_out === 0 ? Un : Oe);
  }
  const r = t.last_flush;
  t.last_flush = n;
  if (t.pending !== 0) {
    ve(e);
    if (e.avail_out === 0) {
      t.last_flush = -1;
      return _e;
    }
  } else if (e.avail_in === 0 && zr(n) <= zr(r) && n !== Ae) {
    return tt(e, Un);
  }
  if (t.status === St && e.avail_in !== 0) {
    return tt(e, Un);
  }
  if (t.status === wt && t.wrap === 0) {
    t.status = et;
  }
  if (t.status === wt) {
    let a = xn + (t.w_bits - 8 << 4) << 8;
    let i = -1;
    if (t.strategy >= qt || t.level < 2) {
      i = 0;
    } else if (t.level < 6) {
      i = 1;
    } else if (t.level === 6) {
      i = 2;
    } else {
      i = 3;
    }
    a |= i << 6;
    if (t.strstart !== 0) {
      a |= El;
    }
    a += 31 - a % 31;
    kt(t, a);
    if (t.strstart !== 0) {
      kt(t, e.adler >>> 16);
      kt(t, e.adler & 65535);
    }
    e.adler = 1;
    t.status = et;
    ve(e);
    if (t.pending !== 0) {
      t.last_flush = -1;
      return _e;
    }
  }
  if (t.status === gr) {
    e.adler = 0;
    ne(t, 31);
    ne(t, 139);
    ne(t, 8);
    if (t.gzhead) {
      ne(t, (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0));
      ne(t, t.gzhead.time & 255);
      ne(t, t.gzhead.time >> 8 & 255);
      ne(t, t.gzhead.time >> 16 & 255);
      ne(t, t.gzhead.time >> 24 & 255);
      ne(t, t.level === 9 ? 2 : t.strategy >= qt || t.level < 2 ? 4 : 0);
      ne(t, t.gzhead.os & 255);
      if (t.gzhead.extra && t.gzhead.extra.length) {
        ne(t, t.gzhead.extra.length & 255);
        ne(t, t.gzhead.extra.length >> 8 & 255);
      }
      if (t.gzhead.hcrc) {
        e.adler = he(e.adler, t.pending_buf, t.pending, 0);
      }
      t.gzindex = 0;
      t.status = er;
    } else {
      ne(t, 0);
      ne(t, 0);
      ne(t, 0);
      ne(t, 0);
      ne(t, 0);
      ne(t, t.level === 9 ? 2 : t.strategy >= qt || t.level < 2 ? 4 : 0);
      ne(t, Al);
      t.status = et;
      ve(e);
      if (t.pending !== 0) {
        t.last_flush = -1;
        return _e;
      }
    }
  }
  if (t.status === er) {
    if (t.gzhead.extra) {
      let a = t.pending;
      let i = (t.gzhead.extra.length & 65535) - t.gzindex;
      while (t.pending + i > t.pending_buf_size) {
        let o = t.pending_buf_size - t.pending;
        t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + o), t.pending);
        t.pending = t.pending_buf_size;
        if (t.gzhead.hcrc && t.pending > a) {
          e.adler = he(e.adler, t.pending_buf, t.pending - a, a);
        }
        t.gzindex += o;
        ve(e);
        if (t.pending !== 0) {
          t.last_flush = -1;
          return _e;
        }
        a = 0;
        i -= o;
      }
      let s = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(s.subarray(t.gzindex, t.gzindex + i), t.pending);
      t.pending += i;
      if (t.gzhead.hcrc && t.pending > a) {
        e.adler = he(e.adler, t.pending_buf, t.pending - a, a);
      }
      t.gzindex = 0;
    }
    t.status = tr;
  }
  if (t.status === tr) {
    if (t.gzhead.name) {
      let a = t.pending;
      let i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > a) {
            e.adler = he(e.adler, t.pending_buf, t.pending - a, a);
          }
          ve(e);
          if (t.pending !== 0) {
            t.last_flush = -1;
            return _e;
          }
          a = 0;
        }
        if (t.gzindex < t.gzhead.name.length) {
          i = t.gzhead.name.charCodeAt(t.gzindex++) & 255;
        } else {
          i = 0;
        }
        ne(t, i);
      } while (i !== 0);
      if (t.gzhead.hcrc && t.pending > a) {
        e.adler = he(e.adler, t.pending_buf, t.pending - a, a);
      }
      t.gzindex = 0;
    }
    t.status = nr;
  }
  if (t.status === nr) {
    if (t.gzhead.comment) {
      let a = t.pending;
      let i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > a) {
            e.adler = he(e.adler, t.pending_buf, t.pending - a, a);
          }
          ve(e);
          if (t.pending !== 0) {
            t.last_flush = -1;
            return _e;
          }
          a = 0;
        }
        if (t.gzindex < t.gzhead.comment.length) {
          i = t.gzhead.comment.charCodeAt(t.gzindex++) & 255;
        } else {
          i = 0;
        }
        ne(t, i);
      } while (i !== 0);
      if (t.gzhead.hcrc && t.pending > a) {
        e.adler = he(e.adler, t.pending_buf, t.pending - a, a);
      }
    }
    t.status = rr;
  }
  if (t.status === rr) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (ve(e), t.pending !== 0)) {
        t.last_flush = -1;
        return _e;
      }
      ne(t, e.adler & 255);
      ne(t, e.adler >> 8 & 255);
      e.adler = 0;
    }
    t.status = et;
    ve(e);
    if (t.pending !== 0) {
      t.last_flush = -1;
      return _e;
    }
  }
  if (e.avail_in !== 0 || t.lookahead !== 0 || n !== We && t.status !== St) {
    let a = t.level === 0 ? Yi(t, n) : t.strategy === qt ? Il(t, n) : t.strategy === cl ? Tl(t, n) : Tt[t.level].func(t, n);
    if (a === at || a === Et) {
      t.status = St;
    }
    if (a === xe || a === at) {
      if (e.avail_out === 0) {
        t.last_flush = -1;
      }
      return _e;
    }
    if (a === mt && (n === al ? il(t) : n !== Nr && (Jn(t, 0, 0, false), n === ol && (Ge(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), ve(e), e.avail_out === 0)) {
      t.last_flush = -1;
      return _e;
    }
  }
  if (n !== Ae) {
    return _e;
  } else if (t.wrap <= 0) {
    return Br;
  } else {
    if (t.wrap === 2) {
      ne(t, e.adler & 255);
      ne(t, e.adler >> 8 & 255);
      ne(t, e.adler >> 16 & 255);
      ne(t, e.adler >> 24 & 255);
      ne(t, e.total_in & 255);
      ne(t, e.total_in >> 8 & 255);
      ne(t, e.total_in >> 16 & 255);
      ne(t, e.total_in >> 24 & 255);
    } else {
      kt(t, e.adler >>> 16);
      kt(t, e.adler & 65535);
    }
    ve(e);
    if (t.wrap > 0) {
      t.wrap = -t.wrap;
    }
    if (t.pending !== 0) {
      return _e;
    } else {
      return Br;
    }
  }
};
const Ol = e => {
  if (jt(e)) {
    return Oe;
  }
  const n = e.state.status;
  e.state = null;
  if (n === et) {
    return tt(e, ll);
  } else {
    return _e;
  }
};
const Ll = (e, n) => {
  let t = n.length;
  if (jt(e)) {
    return Oe;
  }
  const r = e.state;
  const a = r.wrap;
  if (a === 2 || a === 1 && r.status !== wt || r.lookahead) {
    return Oe;
  }
  if (a === 1) {
    e.adler = Bt(e.adler, n, t, 0);
  }
  r.wrap = 0;
  if (t >= r.w_size) {
    if (a === 0) {
      Ge(r.head);
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
  const s = e.next_in;
  const o = e.input;
  e.avail_in = t;
  e.next_in = 0;
  e.input = n;
  xt(r);
  while (r.lookahead >= te) {
    let p = r.strstart;
    let c = r.lookahead - (te - 1);
    do {
      r.ins_h = Je(r, r.ins_h, r.window[p + te - 1]);
      r.prev[p & r.w_mask] = r.head[r.ins_h];
      r.head[r.ins_h] = p;
      p++;
    } while (--c);
    r.strstart = p;
    r.lookahead = te - 1;
    xt(r);
  }
  r.strstart += r.lookahead;
  r.block_start = r.strstart;
  r.insert = r.lookahead;
  r.lookahead = 0;
  r.match_length = r.prev_length = te - 1;
  r.match_available = 0;
  e.next_in = s;
  e.input = o;
  e.avail_in = i;
  r.wrap = a;
  return _e;
};
var Nl = Cl;
var Bl = Wi;
var zl = qi;
var Ml = Vi;
var $l = Ul;
var Zl = Rl;
var Pl = Ol;
var Hl = Ll;
var jl = "pako deflate (from Nodeca project)";
var Ft = {
  deflateInit: Nl,
  deflateInit2: Bl,
  deflateReset: zl,
  deflateResetKeep: Ml,
  deflateSetHeader: $l,
  deflate: Zl,
  deflateEnd: Pl,
  deflateSetDictionary: Hl,
  deflateInfo: jl
};
const Kl = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
function Gl(e) {
  const n = Array.prototype.slice.call(arguments, 1);
  while (n.length) {
    const t = n.shift();
    if (t) {
      if (typeof t != "object") {
        throw new TypeError(t + "must be non-object");
      }
      for (const r in t) {
        if (Kl(t, r)) {
          e[r] = t[r];
        }
      }
    }
  }
  return e;
}
var Xl = e => {
  let n = 0;
  for (let r = 0, a = e.length; r < a; r++) {
    n += e[r].length;
  }
  const t = new Uint8Array(n);
  for (let r = 0, a = 0, i = e.length; r < i; r++) {
    let s = e[r];
    t.set(s, a);
    a += s.length;
  }
  return t;
};
var bn = {
  assign: Gl,
  flattenChunks: Xl
};
let Ji = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Ji = false;
}
const zt = new Uint8Array(256);
for (let e = 0; e < 256; e++) {
  zt[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}
zt[254] = zt[254] = 1;
var Yl = e => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(e);
  }
  let n;
  let t;
  let r;
  let a;
  let i;
  let s = e.length;
  let o = 0;
  for (a = 0; a < s; a++) {
    t = e.charCodeAt(a);
    if ((t & 64512) === 55296 && a + 1 < s) {
      r = e.charCodeAt(a + 1);
      if ((r & 64512) === 56320) {
        t = 65536 + (t - 55296 << 10) + (r - 56320);
        a++;
      }
    }
    o += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  }
  n = new Uint8Array(o);
  i = 0;
  a = 0;
  for (; i < o; a++) {
    t = e.charCodeAt(a);
    if ((t & 64512) === 55296 && a + 1 < s) {
      r = e.charCodeAt(a + 1);
      if ((r & 64512) === 56320) {
        t = 65536 + (t - 55296 << 10) + (r - 56320);
        a++;
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
const Vl = (e, n) => {
  if (n < 65534 && e.subarray && Ji) {
    return String.fromCharCode.apply(null, e.length === n ? e : e.subarray(0, n));
  }
  let t = "";
  for (let r = 0; r < n; r++) {
    t += String.fromCharCode(e[r]);
  }
  return t;
};
var ql = (e, n) => {
  const t = n || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(e.subarray(0, n));
  }
  let r;
  let a;
  const i = new Array(t * 2);
  a = 0;
  r = 0;
  while (r < t) {
    let s = e[r++];
    if (s < 128) {
      i[a++] = s;
      continue;
    }
    let o = zt[s];
    if (o > 4) {
      i[a++] = 65533;
      r += o - 1;
      continue;
    }
    for (s &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && r < t;) {
      s = s << 6 | e[r++] & 63;
      o--;
    }
    if (o > 1) {
      i[a++] = 65533;
      continue;
    }
    if (s < 65536) {
      i[a++] = s;
    } else {
      s -= 65536;
      i[a++] = s >> 10 & 1023 | 55296;
      i[a++] = s & 1023 | 56320;
    }
  }
  return Vl(i, a);
};
var Wl = (e, n) => {
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
  } else if (t + zt[e[t]] > n) {
    return t;
  } else {
    return n;
  }
};
var Mt = {
  string2buf: Yl,
  buf2string: ql,
  utf8border: Wl
};
function Jl() {
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
var Qi = Jl;
const ea = Object.prototype.toString;
const {
  Z_NO_FLUSH: Ql,
  Z_SYNC_FLUSH: ef,
  Z_FULL_FLUSH: tf,
  Z_FINISH: nf,
  Z_OK: un,
  Z_STREAM_END: rf,
  Z_DEFAULT_COMPRESSION: af,
  Z_DEFAULT_STRATEGY: of,
  Z_DEFLATED: lf
} = vt;
function Kt(e) {
  this.options = bn.assign({
    level: af,
    method: lf,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: of
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
  this.strm = new Qi();
  this.strm.avail_out = 0;
  let t = Ft.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
  if (t !== un) {
    throw new Error(it[t]);
  }
  if (n.header) {
    Ft.deflateSetHeader(this.strm, n.header);
  }
  if (n.dictionary) {
    let r;
    if (typeof n.dictionary == "string") {
      r = Mt.string2buf(n.dictionary);
    } else if (ea.call(n.dictionary) === "[object ArrayBuffer]") {
      r = new Uint8Array(n.dictionary);
    } else {
      r = n.dictionary;
    }
    t = Ft.deflateSetDictionary(this.strm, r);
    if (t !== un) {
      throw new Error(it[t]);
    }
    this._dict_set = true;
  }
}
Kt.prototype.push = function (e, n) {
  const t = this.strm;
  const r = this.options.chunkSize;
  let a;
  let i;
  if (this.ended) {
    return false;
  }
  if (n === ~~n) {
    i = n;
  } else {
    i = n === true ? nf : Ql;
  }
  if (typeof e == "string") {
    t.input = Mt.string2buf(e);
  } else if (ea.call(e) === "[object ArrayBuffer]") {
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
    if ((i === ef || i === tf) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out));
      t.avail_out = 0;
      continue;
    }
    a = Ft.deflate(t, i);
    if (a === rf) {
      if (t.next_out > 0) {
        this.onData(t.output.subarray(0, t.next_out));
      }
      a = Ft.deflateEnd(this.strm);
      this.onEnd(a);
      this.ended = true;
      return a === un;
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
Kt.prototype.onData = function (e) {
  this.chunks.push(e);
};
Kt.prototype.onEnd = function (e) {
  if (e === un) {
    this.result = bn.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
function wr(e, n) {
  const t = new Kt(n);
  t.push(e, true);
  if (t.err) {
    throw t.msg || it[t.err];
  }
  return t.result;
}
function ff(e, n) {
  n = n || {};
  n.raw = true;
  return wr(e, n);
}
function sf(e, n) {
  n = n || {};
  n.gzip = true;
  return wr(e, n);
}
var cf = Kt;
var uf = wr;
var hf = ff;
var df = sf;
var _f = vt;
var pf = {
  Deflate: cf,
  deflate: uf,
  deflateRaw: hf,
  gzip: df,
  constants: _f
};
const Wt = 16209;
const gf = 16191;
function wf(n, t) {
  let r;
  let a;
  let i;
  let s;
  let o;
  let p;
  let c;
  let u;
  let v;
  let y;
  let x;
  let S;
  let N;
  let $;
  let Z;
  let X;
  let H;
  let F;
  let z;
  let q;
  let B;
  let G;
  let P;
  let R;
  const Y = n.state;
  r = n.next_in;
  P = n.input;
  a = r + (n.avail_in - 5);
  i = n.next_out;
  R = n.output;
  s = i - (t - n.avail_out);
  o = i + (n.avail_out - 257);
  p = Y.dmax;
  c = Y.wsize;
  u = Y.whave;
  v = Y.wnext;
  y = Y.window;
  x = Y.hold;
  S = Y.bits;
  N = Y.lencode;
  $ = Y.distcode;
  Z = (1 << Y.lenbits) - 1;
  X = (1 << Y.distbits) - 1;
  e: do {
    if (S < 15) {
      x += P[r++] << S;
      S += 8;
      x += P[r++] << S;
      S += 8;
    }
    H = N[x & Z];
    t: while (true) {
      F = H >>> 24;
      x >>>= F;
      S -= F;
      F = H >>> 16 & 255;
      if (F === 0) {
        R[i++] = H & 65535;
      } else if (F & 16) {
        z = H & 65535;
        F &= 15;
        if (F) {
          if (S < F) {
            x += P[r++] << S;
            S += 8;
          }
          z += x & (1 << F) - 1;
          x >>>= F;
          S -= F;
        }
        if (S < 15) {
          x += P[r++] << S;
          S += 8;
          x += P[r++] << S;
          S += 8;
        }
        H = $[x & X];
        n: while (true) {
          F = H >>> 24;
          x >>>= F;
          S -= F;
          F = H >>> 16 & 255;
          if (F & 16) {
            q = H & 65535;
            F &= 15;
            if (S < F) {
              x += P[r++] << S;
              S += 8;
              if (S < F) {
                x += P[r++] << S;
                S += 8;
              }
            }
            q += x & (1 << F) - 1;
            if (q > p) {
              n.msg = "invalid distance too far back";
              Y.mode = Wt;
              break e;
            }
            x >>>= F;
            S -= F;
            F = i - s;
            if (q > F) {
              F = q - F;
              if (F > u && Y.sane) {
                n.msg = "invalid distance too far back";
                Y.mode = Wt;
                break e;
              }
              B = 0;
              G = y;
              if (v === 0) {
                B += c - F;
                if (F < z) {
                  z -= F;
                  do {
                    R[i++] = y[B++];
                  } while (--F);
                  B = i - q;
                  G = R;
                }
              } else if (v < F) {
                B += c + v - F;
                F -= v;
                if (F < z) {
                  z -= F;
                  do {
                    R[i++] = y[B++];
                  } while (--F);
                  B = 0;
                  if (v < z) {
                    F = v;
                    z -= F;
                    do {
                      R[i++] = y[B++];
                    } while (--F);
                    B = i - q;
                    G = R;
                  }
                }
              } else {
                B += v - F;
                if (F < z) {
                  z -= F;
                  do {
                    R[i++] = y[B++];
                  } while (--F);
                  B = i - q;
                  G = R;
                }
              }
              while (z > 2) {
                R[i++] = G[B++];
                R[i++] = G[B++];
                R[i++] = G[B++];
                z -= 3;
              }
              if (z) {
                R[i++] = G[B++];
                if (z > 1) {
                  R[i++] = G[B++];
                }
              }
            } else {
              B = i - q;
              do {
                R[i++] = R[B++];
                R[i++] = R[B++];
                R[i++] = R[B++];
                z -= 3;
              } while (z > 2);
              if (z) {
                R[i++] = R[B++];
                if (z > 1) {
                  R[i++] = R[B++];
                }
              }
            }
          } else if (F & 64) {
            n.msg = "invalid distance code";
            Y.mode = Wt;
            break e;
          } else {
            H = $[(H & 65535) + (x & (1 << F) - 1)];
            continue n;
          }
          break;
        }
      } else if (F & 64) {
        if (F & 32) {
          Y.mode = gf;
          break e;
        } else {
          n.msg = "invalid literal/length code";
          Y.mode = Wt;
          break e;
        }
      } else {
        H = N[(H & 65535) + (x & (1 << F) - 1)];
        continue t;
      }
      break;
    }
  } while (r < a && i < o);
  z = S >> 3;
  r -= z;
  S -= z << 3;
  x &= (1 << S) - 1;
  n.next_in = r;
  n.next_out = i;
  n.avail_in = r < a ? 5 + (a - r) : 5 - (r - a);
  n.avail_out = i < o ? 257 + (o - i) : 257 - (i - o);
  Y.hold = x;
  Y.bits = S;
}
const ct = 15;
const Mr = 852;
const $r = 592;
const Zr = 0;
const Rn = 1;
const Pr = 2;
const xf = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
const bf = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
const yf = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
const vf = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
const mf = (e, n, t, r, a, i, s, o) => {
  const p = o.bits;
  let c = 0;
  let u = 0;
  let v = 0;
  let y = 0;
  let x = 0;
  let S = 0;
  let N = 0;
  let $ = 0;
  let Z = 0;
  let X = 0;
  let H;
  let F;
  let z;
  let q;
  let B;
  let G = null;
  let P;
  const R = new Uint16Array(ct + 1);
  const Y = new Uint16Array(ct + 1);
  let ye = null;
  let Ke;
  let U;
  let j;
  for (c = 0; c <= ct; c++) {
    R[c] = 0;
  }
  for (u = 0; u < r; u++) {
    R[n[t + u]]++;
  }
  x = p;
  y = ct;
  for (; y >= 1 && R[y] === 0; y--);
  if (x > y) {
    x = y;
  }
  if (y === 0) {
    a[i++] = 20971520;
    a[i++] = 20971520;
    o.bits = 1;
    return 0;
  }
  for (v = 1; v < y && R[v] === 0; v++);
  if (x < v) {
    x = v;
  }
  $ = 1;
  c = 1;
  for (; c <= ct; c++) {
    $ <<= 1;
    $ -= R[c];
    if ($ < 0) {
      return -1;
    }
  }
  if ($ > 0 && (e === Zr || y !== 1)) {
    return -1;
  }
  Y[1] = 0;
  c = 1;
  for (; c < ct; c++) {
    Y[c + 1] = Y[c] + R[c];
  }
  for (u = 0; u < r; u++) {
    if (n[t + u] !== 0) {
      s[Y[n[t + u]]++] = u;
    }
  }
  if (e === Zr) {
    G = ye = s;
    P = 20;
  } else if (e === Rn) {
    G = xf;
    ye = bf;
    P = 257;
  } else {
    G = yf;
    ye = vf;
    P = 0;
  }
  X = 0;
  u = 0;
  c = v;
  B = i;
  S = x;
  N = 0;
  z = -1;
  Z = 1 << x;
  q = Z - 1;
  if (e === Rn && Z > Mr || e === Pr && Z > $r) {
    return 1;
  }
  while (true) {
    Ke = c - N;
    if (s[u] + 1 < P) {
      U = 0;
      j = s[u];
    } else if (s[u] >= P) {
      U = ye[s[u] - P];
      j = G[s[u] - P];
    } else {
      U = 96;
      j = 0;
    }
    H = 1 << c - N;
    F = 1 << S;
    v = F;
    do {
      F -= H;
      a[B + (X >> N) + F] = Ke << 24 | U << 16 | j | 0;
    } while (F !== 0);
    for (H = 1 << c - 1; X & H;) {
      H >>= 1;
    }
    if (H !== 0) {
      X &= H - 1;
      X += H;
    } else {
      X = 0;
    }
    u++;
    if (--R[c] === 0) {
      if (c === y) {
        break;
      }
      c = n[t + s[u]];
    }
    if (c > x && (X & q) !== z) {
      if (N === 0) {
        N = x;
      }
      B += v;
      S = c - N;
      $ = 1 << S;
      while (S + N < y && ($ -= R[S + N], !($ <= 0))) {
        S++;
        $ <<= 1;
      }
      Z += 1 << S;
      if (e === Rn && Z > Mr || e === Pr && Z > $r) {
        return 1;
      }
      z = X & q;
      a[z] = x << 24 | S << 16 | B - i | 0;
    }
  }
  if (X !== 0) {
    a[B + X] = c - N << 24 | 4194304 | 0;
  }
  o.bits = x;
  return 0;
};
var Ut = mf;
const Ef = 0;
const ta = 1;
const na = 2;
const {
  Z_FINISH: Hr,
  Z_BLOCK: Af,
  Z_TREES: Jt,
  Z_OK: ot,
  Z_STREAM_END: kf,
  Z_NEED_DICT: Sf,
  Z_STREAM_ERROR: ke,
  Z_DATA_ERROR: ra,
  Z_MEM_ERROR: ia,
  Z_BUF_ERROR: Tf,
  Z_DEFLATED: jr
} = vt;
const yn = 16180;
const Kr = 16181;
const Gr = 16182;
const Xr = 16183;
const Yr = 16184;
const Vr = 16185;
const qr = 16186;
const Wr = 16187;
const Jr = 16188;
const Qr = 16189;
const hn = 16190;
const Be = 16191;
const On = 16192;
const ei = 16193;
const Ln = 16194;
const ti = 16195;
const ni = 16196;
const ri = 16197;
const ii = 16198;
const Qt = 16199;
const en = 16200;
const ai = 16201;
const oi = 16202;
const li = 16203;
const fi = 16204;
const si = 16205;
const Nn = 16206;
const ci = 16207;
const ui = 16208;
const le = 16209;
const aa = 16210;
const oa = 16211;
const If = 852;
const Df = 592;
const Ff = 15;
const Uf = Ff;
const hi = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function Cf() {
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
const lt = e => {
  if (!e) {
    return 1;
  }
  const n = e.state;
  if (!n || n.strm !== e || n.mode < yn || n.mode > oa) {
    return 1;
  } else {
    return 0;
  }
};
const la = e => {
  if (lt(e)) {
    return ke;
  }
  const n = e.state;
  e.total_in = e.total_out = n.total = 0;
  e.msg = "";
  if (n.wrap) {
    e.adler = n.wrap & 1;
  }
  n.mode = yn;
  n.last = 0;
  n.havedict = 0;
  n.flags = -1;
  n.dmax = 32768;
  n.head = null;
  n.hold = 0;
  n.bits = 0;
  n.lencode = n.lendyn = new Int32Array(If);
  n.distcode = n.distdyn = new Int32Array(Df);
  n.sane = 1;
  n.back = -1;
  return ot;
};
const fa = e => {
  if (lt(e)) {
    return ke;
  }
  const n = e.state;
  n.wsize = 0;
  n.whave = 0;
  n.wnext = 0;
  return la(e);
};
const sa = (e, n) => {
  let t;
  if (lt(e)) {
    return ke;
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
    return ke;
  } else {
    if (r.window !== null && r.wbits !== n) {
      r.window = null;
    }
    r.wrap = t;
    r.wbits = n;
    return fa(e);
  }
};
const ca = (e, n) => {
  if (!e) {
    return ke;
  }
  const t = new Cf();
  e.state = t;
  t.strm = e;
  t.window = null;
  t.mode = yn;
  const r = sa(e, n);
  if (r !== ot) {
    e.state = null;
  }
  return r;
};
const Rf = e => ca(e, Uf);
let di = true;
let Bn;
let zn;
const Of = e => {
  if (di) {
    Bn = new Int32Array(512);
    zn = new Int32Array(32);
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
    Ut(ta, e.lens, 0, 288, Bn, 0, e.work, {
      bits: 9
    });
    n = 0;
    while (n < 32) {
      e.lens[n++] = 5;
    }
    Ut(na, e.lens, 0, 32, zn, 0, e.work, {
      bits: 5
    });
    di = false;
  }
  e.lencode = Bn;
  e.lenbits = 9;
  e.distcode = zn;
  e.distbits = 5;
};
const ua = (e, n, t, r) => {
  let a;
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
    a = i.wsize - i.wnext;
    if (a > r) {
      a = r;
    }
    i.window.set(n.subarray(t - r, t - r + a), i.wnext);
    r -= a;
    if (r) {
      i.window.set(n.subarray(t - r, t), 0);
      i.wnext = r;
      i.whave = i.wsize;
    } else {
      i.wnext += a;
      if (i.wnext === i.wsize) {
        i.wnext = 0;
      }
      if (i.whave < i.wsize) {
        i.whave += a;
      }
    }
  }
  return 0;
};
const Lf = (e, n) => {
  let t;
  let r;
  let a;
  let i;
  let s;
  let o;
  let p;
  let c;
  let u;
  let v;
  let y;
  let x;
  let S;
  let N;
  let $ = 0;
  let Z;
  let X;
  let H;
  let F;
  let z;
  let q;
  let B;
  let G;
  const P = new Uint8Array(4);
  let R;
  let Y;
  const ye = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  if (lt(e) || !e.output || !e.input && e.avail_in !== 0) {
    return ke;
  }
  t = e.state;
  if (t.mode === Be) {
    t.mode = On;
  }
  s = e.next_out;
  a = e.output;
  p = e.avail_out;
  i = e.next_in;
  r = e.input;
  o = e.avail_in;
  c = t.hold;
  u = t.bits;
  v = o;
  y = p;
  G = ot;
  e: while (true) {
    switch (t.mode) {
      case yn:
        if (t.wrap === 0) {
          t.mode = On;
          break;
        }
        while (u < 16) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        if (t.wrap & 2 && c === 35615) {
          if (t.wbits === 0) {
            t.wbits = 15;
          }
          t.check = 0;
          P[0] = c & 255;
          P[1] = c >>> 8 & 255;
          t.check = he(t.check, P, 2, 0);
          c = 0;
          u = 0;
          t.mode = Kr;
          break;
        }
        if (t.head) {
          t.head.done = false;
        }
        if (!(t.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31) {
          e.msg = "incorrect header check";
          t.mode = le;
          break;
        }
        if ((c & 15) !== jr) {
          e.msg = "unknown compression method";
          t.mode = le;
          break;
        }
        c >>>= 4;
        u -= 4;
        B = (c & 15) + 8;
        if (t.wbits === 0) {
          t.wbits = B;
        }
        if (B > 15 || B > t.wbits) {
          e.msg = "invalid window size";
          t.mode = le;
          break;
        }
        t.dmax = 1 << t.wbits;
        t.flags = 0;
        e.adler = t.check = 1;
        t.mode = c & 512 ? Qr : Be;
        c = 0;
        u = 0;
        break;
      case Kr:
        while (u < 16) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        t.flags = c;
        if ((t.flags & 255) !== jr) {
          e.msg = "unknown compression method";
          t.mode = le;
          break;
        }
        if (t.flags & 57344) {
          e.msg = "unknown header flags set";
          t.mode = le;
          break;
        }
        if (t.head) {
          t.head.text = c >> 8 & 1;
        }
        if (t.flags & 512 && t.wrap & 4) {
          P[0] = c & 255;
          P[1] = c >>> 8 & 255;
          t.check = he(t.check, P, 2, 0);
        }
        c = 0;
        u = 0;
        t.mode = Gr;
      case Gr:
        while (u < 32) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        if (t.head) {
          t.head.time = c;
        }
        if (t.flags & 512 && t.wrap & 4) {
          P[0] = c & 255;
          P[1] = c >>> 8 & 255;
          P[2] = c >>> 16 & 255;
          P[3] = c >>> 24 & 255;
          t.check = he(t.check, P, 4, 0);
        }
        c = 0;
        u = 0;
        t.mode = Xr;
      case Xr:
        while (u < 16) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        if (t.head) {
          t.head.xflags = c & 255;
          t.head.os = c >> 8;
        }
        if (t.flags & 512 && t.wrap & 4) {
          P[0] = c & 255;
          P[1] = c >>> 8 & 255;
          t.check = he(t.check, P, 2, 0);
        }
        c = 0;
        u = 0;
        t.mode = Yr;
      case Yr:
        if (t.flags & 1024) {
          while (u < 16) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          t.length = c;
          if (t.head) {
            t.head.extra_len = c;
          }
          if (t.flags & 512 && t.wrap & 4) {
            P[0] = c & 255;
            P[1] = c >>> 8 & 255;
            t.check = he(t.check, P, 2, 0);
          }
          c = 0;
          u = 0;
        } else if (t.head) {
          t.head.extra = null;
        }
        t.mode = Vr;
      case Vr:
        if (t.flags & 1024 && (x = t.length, x > o && (x = o), x && (t.head && (B = t.head.extra_len - t.length, t.head.extra ||= new Uint8Array(t.head.extra_len), t.head.extra.set(r.subarray(i, i + x), B)), t.flags & 512 && t.wrap & 4 && (t.check = he(t.check, r, x, i)), o -= x, i += x, t.length -= x), t.length)) {
          break e;
        }
        t.length = 0;
        t.mode = qr;
      case qr:
        if (t.flags & 2048) {
          if (o === 0) {
            break e;
          }
          x = 0;
          do {
            B = r[i + x++];
            if (t.head && B && t.length < 65536) {
              t.head.name += String.fromCharCode(B);
            }
          } while (B && x < o);
          if (t.flags & 512 && t.wrap & 4) {
            t.check = he(t.check, r, x, i);
          }
          o -= x;
          i += x;
          if (B) {
            break e;
          }
        } else if (t.head) {
          t.head.name = null;
        }
        t.length = 0;
        t.mode = Wr;
      case Wr:
        if (t.flags & 4096) {
          if (o === 0) {
            break e;
          }
          x = 0;
          do {
            B = r[i + x++];
            if (t.head && B && t.length < 65536) {
              t.head.comment += String.fromCharCode(B);
            }
          } while (B && x < o);
          if (t.flags & 512 && t.wrap & 4) {
            t.check = he(t.check, r, x, i);
          }
          o -= x;
          i += x;
          if (B) {
            break e;
          }
        } else if (t.head) {
          t.head.comment = null;
        }
        t.mode = Jr;
      case Jr:
        if (t.flags & 512) {
          while (u < 16) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          if (t.wrap & 4 && c !== (t.check & 65535)) {
            e.msg = "header crc mismatch";
            t.mode = le;
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
        t.mode = Be;
        break;
      case Qr:
        while (u < 32) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        e.adler = t.check = hi(c);
        c = 0;
        u = 0;
        t.mode = hn;
      case hn:
        if (t.havedict === 0) {
          e.next_out = s;
          e.avail_out = p;
          e.next_in = i;
          e.avail_in = o;
          t.hold = c;
          t.bits = u;
          return Sf;
        }
        e.adler = t.check = 1;
        t.mode = Be;
      case Be:
        if (n === Af || n === Jt) {
          break e;
        }
      case On:
        if (t.last) {
          c >>>= u & 7;
          u -= u & 7;
          t.mode = Nn;
          break;
        }
        while (u < 3) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        t.last = c & 1;
        c >>>= 1;
        u -= 1;
        switch (c & 3) {
          case 0:
            t.mode = ei;
            break;
          case 1:
            Of(t);
            t.mode = Qt;
            if (n === Jt) {
              c >>>= 2;
              u -= 2;
              break e;
            }
            break;
          case 2:
            t.mode = ni;
            break;
          case 3:
            e.msg = "invalid block type";
            t.mode = le;
        }
        c >>>= 2;
        u -= 2;
        break;
      case ei:
        c >>>= u & 7;
        u -= u & 7;
        while (u < 32) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        if ((c & 65535) !== (c >>> 16 ^ 65535)) {
          e.msg = "invalid stored block lengths";
          t.mode = le;
          break;
        }
        t.length = c & 65535;
        c = 0;
        u = 0;
        t.mode = Ln;
        if (n === Jt) {
          break e;
        }
      case Ln:
        t.mode = ti;
      case ti:
        x = t.length;
        if (x) {
          if (x > o) {
            x = o;
          }
          if (x > p) {
            x = p;
          }
          if (x === 0) {
            break e;
          }
          a.set(r.subarray(i, i + x), s);
          o -= x;
          i += x;
          p -= x;
          s += x;
          t.length -= x;
          break;
        }
        t.mode = Be;
        break;
      case ni:
        while (u < 14) {
          if (o === 0) {
            break e;
          }
          o--;
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
          t.mode = le;
          break;
        }
        t.have = 0;
        t.mode = ri;
      case ri:
        while (t.have < t.ncode) {
          while (u < 3) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          t.lens[ye[t.have++]] = c & 7;
          c >>>= 3;
          u -= 3;
        }
        while (t.have < 19) {
          t.lens[ye[t.have++]] = 0;
        }
        t.lencode = t.lendyn;
        t.lenbits = 7;
        R = {
          bits: t.lenbits
        };
        G = Ut(Ef, t.lens, 0, 19, t.lencode, 0, t.work, R);
        t.lenbits = R.bits;
        if (G) {
          e.msg = "invalid code lengths set";
          t.mode = le;
          break;
        }
        t.have = 0;
        t.mode = ii;
      case ii:
        while (t.have < t.nlen + t.ndist) {
          while ($ = t.lencode[c & (1 << t.lenbits) - 1], Z = $ >>> 24, X = $ >>> 16 & 255, H = $ & 65535, !(Z <= u)) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          if (H < 16) {
            c >>>= Z;
            u -= Z;
            t.lens[t.have++] = H;
          } else {
            if (H === 16) {
              for (Y = Z + 2; u < Y;) {
                if (o === 0) {
                  break e;
                }
                o--;
                c += r[i++] << u;
                u += 8;
              }
              c >>>= Z;
              u -= Z;
              if (t.have === 0) {
                e.msg = "invalid bit length repeat";
                t.mode = le;
                break;
              }
              B = t.lens[t.have - 1];
              x = 3 + (c & 3);
              c >>>= 2;
              u -= 2;
            } else if (H === 17) {
              for (Y = Z + 3; u < Y;) {
                if (o === 0) {
                  break e;
                }
                o--;
                c += r[i++] << u;
                u += 8;
              }
              c >>>= Z;
              u -= Z;
              B = 0;
              x = 3 + (c & 7);
              c >>>= 3;
              u -= 3;
            } else {
              for (Y = Z + 7; u < Y;) {
                if (o === 0) {
                  break e;
                }
                o--;
                c += r[i++] << u;
                u += 8;
              }
              c >>>= Z;
              u -= Z;
              B = 0;
              x = 11 + (c & 127);
              c >>>= 7;
              u -= 7;
            }
            if (t.have + x > t.nlen + t.ndist) {
              e.msg = "invalid bit length repeat";
              t.mode = le;
              break;
            }
            while (x--) {
              t.lens[t.have++] = B;
            }
          }
        }
        if (t.mode === le) {
          break;
        }
        if (t.lens[256] === 0) {
          e.msg = "invalid code -- missing end-of-block";
          t.mode = le;
          break;
        }
        t.lenbits = 9;
        R = {
          bits: t.lenbits
        };
        G = Ut(ta, t.lens, 0, t.nlen, t.lencode, 0, t.work, R);
        t.lenbits = R.bits;
        if (G) {
          e.msg = "invalid literal/lengths set";
          t.mode = le;
          break;
        }
        t.distbits = 6;
        t.distcode = t.distdyn;
        R = {
          bits: t.distbits
        };
        G = Ut(na, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, R);
        t.distbits = R.bits;
        if (G) {
          e.msg = "invalid distances set";
          t.mode = le;
          break;
        }
        t.mode = Qt;
        if (n === Jt) {
          break e;
        }
      case Qt:
        t.mode = en;
      case en:
        if (o >= 6 && p >= 258) {
          e.next_out = s;
          e.avail_out = p;
          e.next_in = i;
          e.avail_in = o;
          t.hold = c;
          t.bits = u;
          wf(e, y);
          s = e.next_out;
          a = e.output;
          p = e.avail_out;
          i = e.next_in;
          r = e.input;
          o = e.avail_in;
          c = t.hold;
          u = t.bits;
          if (t.mode === Be) {
            t.back = -1;
          }
          break;
        }
        for (t.back = 0; $ = t.lencode[c & (1 << t.lenbits) - 1], Z = $ >>> 24, X = $ >>> 16 & 255, H = $ & 65535, !(Z <= u);) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        if (X && !(X & 240)) {
          F = Z;
          z = X;
          q = H;
          while ($ = t.lencode[q + ((c & (1 << F + z) - 1) >> F)], Z = $ >>> 24, X = $ >>> 16 & 255, H = $ & 65535, !(F + Z <= u)) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          c >>>= F;
          u -= F;
          t.back += F;
        }
        c >>>= Z;
        u -= Z;
        t.back += Z;
        t.length = H;
        if (X === 0) {
          t.mode = si;
          break;
        }
        if (X & 32) {
          t.back = -1;
          t.mode = Be;
          break;
        }
        if (X & 64) {
          e.msg = "invalid literal/length code";
          t.mode = le;
          break;
        }
        t.extra = X & 15;
        t.mode = ai;
      case ai:
        if (t.extra) {
          for (Y = t.extra; u < Y;) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          t.length += c & (1 << t.extra) - 1;
          c >>>= t.extra;
          u -= t.extra;
          t.back += t.extra;
        }
        t.was = t.length;
        t.mode = oi;
      case oi:
        while ($ = t.distcode[c & (1 << t.distbits) - 1], Z = $ >>> 24, X = $ >>> 16 & 255, H = $ & 65535, !(Z <= u)) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        if (!(X & 240)) {
          F = Z;
          z = X;
          q = H;
          while ($ = t.distcode[q + ((c & (1 << F + z) - 1) >> F)], Z = $ >>> 24, X = $ >>> 16 & 255, H = $ & 65535, !(F + Z <= u)) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          c >>>= F;
          u -= F;
          t.back += F;
        }
        c >>>= Z;
        u -= Z;
        t.back += Z;
        if (X & 64) {
          e.msg = "invalid distance code";
          t.mode = le;
          break;
        }
        t.offset = H;
        t.extra = X & 15;
        t.mode = li;
      case li:
        if (t.extra) {
          for (Y = t.extra; u < Y;) {
            if (o === 0) {
              break e;
            }
            o--;
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
          t.mode = le;
          break;
        }
        t.mode = fi;
      case fi:
        if (p === 0) {
          break e;
        }
        x = y - p;
        if (t.offset > x) {
          x = t.offset - x;
          if (x > t.whave && t.sane) {
            e.msg = "invalid distance too far back";
            t.mode = le;
            break;
          }
          if (x > t.wnext) {
            x -= t.wnext;
            S = t.wsize - x;
          } else {
            S = t.wnext - x;
          }
          if (x > t.length) {
            x = t.length;
          }
          N = t.window;
        } else {
          N = a;
          S = s - t.offset;
          x = t.length;
        }
        if (x > p) {
          x = p;
        }
        p -= x;
        t.length -= x;
        do {
          a[s++] = N[S++];
        } while (--x);
        if (t.length === 0) {
          t.mode = en;
        }
        break;
      case si:
        if (p === 0) {
          break e;
        }
        a[s++] = t.length;
        p--;
        t.mode = en;
        break;
      case Nn:
        if (t.wrap) {
          while (u < 32) {
            if (o === 0) {
              break e;
            }
            o--;
            c |= r[i++] << u;
            u += 8;
          }
          y -= p;
          e.total_out += y;
          t.total += y;
          if (t.wrap & 4 && y) {
            e.adler = t.check = t.flags ? he(t.check, a, y, s - y) : Bt(t.check, a, y, s - y);
          }
          y = p;
          if (t.wrap & 4 && (t.flags ? c : hi(c)) !== t.check) {
            e.msg = "incorrect data check";
            t.mode = le;
            break;
          }
          c = 0;
          u = 0;
        }
        t.mode = ci;
      case ci:
        if (t.wrap && t.flags) {
          while (u < 32) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          if (t.wrap & 4 && c !== (t.total & -1)) {
            e.msg = "incorrect length check";
            t.mode = le;
            break;
          }
          c = 0;
          u = 0;
        }
        t.mode = ui;
      case ui:
        G = kf;
        break e;
      case le:
        G = ra;
        break e;
      case aa:
        return ia;
      case oa:
      default:
        return ke;
    }
  }
  e.next_out = s;
  e.avail_out = p;
  e.next_in = i;
  e.avail_in = o;
  t.hold = c;
  t.bits = u;
  if (t.wsize || y !== e.avail_out && t.mode < le && (t.mode < Nn || n !== Hr)) {
    ua(e, e.output, e.next_out, y - e.avail_out);
  }
  v -= e.avail_in;
  y -= e.avail_out;
  e.total_in += v;
  e.total_out += y;
  t.total += y;
  if (t.wrap & 4 && y) {
    e.adler = t.check = t.flags ? he(t.check, a, y, e.next_out - y) : Bt(t.check, a, y, e.next_out - y);
  }
  e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Be ? 128 : 0) + (t.mode === Qt || t.mode === Ln ? 256 : 0);
  if ((v === 0 && y === 0 || n === Hr) && G === ot) {
    G = Tf;
  }
  return G;
};
const Nf = e => {
  if (lt(e)) {
    return ke;
  }
  let n = e.state;
  n.window &&= null;
  e.state = null;
  return ot;
};
const Bf = (e, n) => {
  if (lt(e)) {
    return ke;
  }
  const t = e.state;
  if (t.wrap & 2) {
    t.head = n;
    n.done = false;
    return ot;
  } else {
    return ke;
  }
};
const zf = (e, n) => {
  const t = n.length;
  let r;
  let a;
  let i;
  if (lt(e) || (r = e.state, r.wrap !== 0 && r.mode !== hn)) {
    return ke;
  } else if (r.mode === hn && (a = 1, a = Bt(a, n, t, 0), a !== r.check)) {
    return ra;
  } else {
    i = ua(e, n, t, t);
    if (i) {
      r.mode = aa;
      return ia;
    } else {
      r.havedict = 1;
      return ot;
    }
  }
};
var Mf = fa;
var $f = sa;
var Zf = la;
var Pf = Rf;
var Hf = ca;
var jf = Lf;
var Kf = Nf;
var Gf = Bf;
var Xf = zf;
var Yf = "pako inflate (from Nodeca project)";
var Me = {
  inflateReset: Mf,
  inflateReset2: $f,
  inflateResetKeep: Zf,
  inflateInit: Pf,
  inflateInit2: Hf,
  inflate: jf,
  inflateEnd: Kf,
  inflateGetHeader: Gf,
  inflateSetDictionary: Xf,
  inflateInfo: Yf
};
function Vf() {
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
var qf = Vf;
const ha = Object.prototype.toString;
const {
  Z_NO_FLUSH: Wf,
  Z_FINISH: Jf,
  Z_OK: $t,
  Z_STREAM_END: Mn,
  Z_NEED_DICT: $n,
  Z_STREAM_ERROR: Qf,
  Z_DATA_ERROR: _i,
  Z_MEM_ERROR: es
} = vt;
function Gt(e) {
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
  this.strm = new Qi();
  this.strm.avail_out = 0;
  let t = Me.inflateInit2(this.strm, n.windowBits);
  if (t !== $t) {
    throw new Error(it[t]);
  }
  this.header = new qf();
  Me.inflateGetHeader(this.strm, this.header);
  if (n.dictionary && (typeof n.dictionary == "string" ? n.dictionary = Mt.string2buf(n.dictionary) : ha.call(n.dictionary) === "[object ArrayBuffer]" && (n.dictionary = new Uint8Array(n.dictionary)), n.raw && (t = Me.inflateSetDictionary(this.strm, n.dictionary), t !== $t))) {
    throw new Error(it[t]);
  }
}
Gt.prototype.push = function (e, n) {
  const t = this.strm;
  const r = this.options.chunkSize;
  const a = this.options.dictionary;
  let i;
  let s;
  let o;
  if (this.ended) {
    return false;
  }
  if (n === ~~n) {
    s = n;
  } else {
    s = n === true ? Jf : Wf;
  }
  if (ha.call(e) === "[object ArrayBuffer]") {
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
    i = Me.inflate(t, s);
    if (i === $n && a) {
      i = Me.inflateSetDictionary(t, a);
      if (i === $t) {
        i = Me.inflate(t, s);
      } else if (i === _i) {
        i = $n;
      }
    }
    while (t.avail_in > 0 && i === Mn && t.state.wrap > 0 && e[t.next_in] !== 0) {
      Me.inflateReset(t);
      i = Me.inflate(t, s);
    }
    switch (i) {
      case Qf:
      case _i:
      case $n:
      case es:
        this.onEnd(i);
        this.ended = true;
        return false;
    }
    o = t.avail_out;
    if (t.next_out && (t.avail_out === 0 || i === Mn)) {
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
    if (i !== $t || o !== 0) {
      if (i === Mn) {
        i = Me.inflateEnd(this.strm);
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
Gt.prototype.onData = function (e) {
  this.chunks.push(e);
};
Gt.prototype.onEnd = function (e) {
  if (e === $t) {
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
  const t = new Gt(n);
  t.push(e);
  if (t.err) {
    throw t.msg || it[t.err];
  }
  return t.result;
}
function ts(e, n) {
  n = n || {};
  n.raw = true;
  return xr(e, n);
}
var ns = Gt;
var rs = xr;
var is = ts;
var as = xr;
var os = vt;
var ls = {
  Inflate: ns,
  inflate: rs,
  inflateRaw: is,
  ungzip: as,
  constants: os
};
const {
  Deflate: Ws,
  deflate: fs,
  deflateRaw: Js,
  gzip: Qs
} = pf;
const {
  Inflate: e0,
  inflate: ss,
  inflateRaw: t0,
  ungzip: n0
} = ls;
var r0 = fs;
var i0 = ss;
var ar = {};
var vn = {
  byteLength: hs,
  toByteArray: _s,
  fromByteArray: ws
};
var Re = [];
var Ee = [];
var cs = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var Zn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ut = 0, us = Zn.length; ut < us; ++ut) {
  Re[ut] = Zn[ut];
  Ee[Zn.charCodeAt(ut)] = ut;
}
Ee["-".charCodeAt(0)] = 62;
Ee["_".charCodeAt(0)] = 63;
function da(e) {
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
function hs(e) {
  var n = da(e);
  var t = n[0];
  var r = n[1];
  return (t + r) * 3 / 4 - r;
}
function ds(e, n, t) {
  return (n + t) * 3 / 4 - t;
}
function _s(e) {
  var n;
  var t = da(e);
  var r = t[0];
  var a = t[1];
  var i = new cs(ds(e, r, a));
  var s = 0;
  var o = a > 0 ? r - 4 : r;
  var p;
  for (p = 0; p < o; p += 4) {
    n = Ee[e.charCodeAt(p)] << 18 | Ee[e.charCodeAt(p + 1)] << 12 | Ee[e.charCodeAt(p + 2)] << 6 | Ee[e.charCodeAt(p + 3)];
    i[s++] = n >> 16 & 255;
    i[s++] = n >> 8 & 255;
    i[s++] = n & 255;
  }
  if (a === 2) {
    n = Ee[e.charCodeAt(p)] << 2 | Ee[e.charCodeAt(p + 1)] >> 4;
    i[s++] = n & 255;
  }
  if (a === 1) {
    n = Ee[e.charCodeAt(p)] << 10 | Ee[e.charCodeAt(p + 1)] << 4 | Ee[e.charCodeAt(p + 2)] >> 2;
    i[s++] = n >> 8 & 255;
    i[s++] = n & 255;
  }
  return i;
}
function ps(e) {
  return Re[e >> 18 & 63] + Re[e >> 12 & 63] + Re[e >> 6 & 63] + Re[e & 63];
}
function gs(e, n, t) {
  var r;
  var a = [];
  for (var i = n; i < t; i += 3) {
    r = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
    a.push(ps(r));
  }
  return a.join("");
}
function ws(e) {
  var n;
  var t = e.length;
  var r = t % 3;
  var a = [];
  for (var i = 16383, s = 0, o = t - r; s < o; s += i) {
    a.push(gs(e, s, s + i > o ? o : s + i));
  }
  if (r === 1) {
    n = e[t - 1];
    a.push(Re[n >> 2] + Re[n << 4 & 63] + "==");
  } else if (r === 2) {
    n = (e[t - 2] << 8) + e[t - 1];
    a.push(Re[n >> 10] + Re[n >> 4 & 63] + Re[n << 2 & 63] + "=");
  }
  return a.join("");
}
var br = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
br.read = function (e, n, t, r, a) {
  var i;
  var s;
  var o = a * 8 - r - 1;
  var p = (1 << o) - 1;
  var c = p >> 1;
  var u = -7;
  var v = t ? a - 1 : 0;
  var y = t ? -1 : 1;
  var x = e[n + v];
  v += y;
  i = x & (1 << -u) - 1;
  x >>= -u;
  u += o;
  for (; u > 0; u -= 8) {
    i = i * 256 + e[n + v];
    v += y;
  }
  s = i & (1 << -u) - 1;
  i >>= -u;
  u += r;
  for (; u > 0; u -= 8) {
    s = s * 256 + e[n + v];
    v += y;
  }
  if (i === 0) {
    i = 1 - c;
  } else {
    if (i === p) {
      if (s) {
        return NaN;
      } else {
        return (x ? -1 : 1) * Infinity;
      }
    }
    s = s + Math.pow(2, r);
    i = i - c;
  }
  return (x ? -1 : 1) * s * Math.pow(2, i - r);
};
br.write = function (e, n, t, r, a, i) {
  var s;
  var o;
  var p;
  var c = i * 8 - a - 1;
  var u = (1 << c) - 1;
  var v = u >> 1;
  var y = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var x = r ? 0 : i - 1;
  var S = r ? 1 : -1;
  var N = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
  n = Math.abs(n);
  if (isNaN(n) || n === Infinity) {
    o = isNaN(n) ? 1 : 0;
    s = u;
  } else {
    s = Math.floor(Math.log(n) / Math.LN2);
    if (n * (p = Math.pow(2, -s)) < 1) {
      s--;
      p *= 2;
    }
    if (s + v >= 1) {
      n += y / p;
    } else {
      n += y * Math.pow(2, 1 - v);
    }
    if (n * p >= 2) {
      s++;
      p /= 2;
    }
    if (s + v >= u) {
      o = 0;
      s = u;
    } else if (s + v >= 1) {
      o = (n * p - 1) * Math.pow(2, a);
      s = s + v;
    } else {
      o = n * Math.pow(2, v - 1) * Math.pow(2, a);
      s = 0;
    }
  }
  for (; a >= 8; a -= 8) {
    e[t + x] = o & 255;
    x += S;
    o /= 256;
  }
  s = s << a | o;
  c += a;
  for (; c > 0; c -= 8) {
    e[t + x] = s & 255;
    x += S;
    s /= 256;
  }
  e[t + x - S] |= N * 128;
}; /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
(function (e) {
  var n = vn;
  var t = br;
  var r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = o;
  e.SlowBuffer = X;
  e.INSPECT_MAX_BYTES = 50;
  var a = 2147483647;
  e.kMaxLength = a;
  o.TYPED_ARRAY_SUPPORT = i();
  if (!o.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error == "function") {
    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  }
  function i() {
    try {
      var h = new Uint8Array(1);
      var l = {
        foo: function () {
          return 42;
        }
      };
      Object.setPrototypeOf(l, Uint8Array.prototype);
      Object.setPrototypeOf(h, l);
      return h.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: true,
    get: function () {
      if (o.isBuffer(this)) {
        return this.buffer;
      }
    }
  });
  Object.defineProperty(o.prototype, "offset", {
    enumerable: true,
    get: function () {
      if (o.isBuffer(this)) {
        return this.byteOffset;
      }
    }
  });
  function s(h) {
    if (h > a) {
      throw new RangeError("The value \"" + h + "\" is invalid for option \"size\"");
    }
    var l = new Uint8Array(h);
    Object.setPrototypeOf(l, o.prototype);
    return l;
  }
  function o(h, l, f) {
    if (typeof h == "number") {
      if (typeof l == "string") {
        throw new TypeError("The \"string\" argument must be of type string. Received type number");
      }
      return v(h);
    }
    return p(h, l, f);
  }
  o.poolSize = 8192;
  function p(h, l, f) {
    if (typeof h == "string") {
      return y(h, l);
    }
    if (ArrayBuffer.isView(h)) {
      return S(h);
    }
    if (h == null) {
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h);
    }
    if (O(h, ArrayBuffer) || h && O(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer !== "undefined" && (O(h, SharedArrayBuffer) || h && O(h.buffer, SharedArrayBuffer))) {
      return N(h, l, f);
    }
    if (typeof h == "number") {
      throw new TypeError("The \"value\" argument must not be of type number. Received type number");
    }
    var d = h.valueOf && h.valueOf();
    if (d != null && d !== h) {
      return o.from(d, l, f);
    }
    var g = $(h);
    if (g) {
      return g;
    }
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function") {
      return o.from(h[Symbol.toPrimitive]("string"), l, f);
    }
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h);
  }
  o.from = function (h, l, f) {
    return p(h, l, f);
  };
  Object.setPrototypeOf(o.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(o, Uint8Array);
  function c(h) {
    if (typeof h != "number") {
      throw new TypeError("\"size\" argument must be of type number");
    }
    if (h < 0) {
      throw new RangeError("The value \"" + h + "\" is invalid for option \"size\"");
    }
  }
  function u(h, l, f) {
    c(h);
    if (h <= 0) {
      return s(h);
    } else if (l !== undefined) {
      if (typeof f == "string") {
        return s(h).fill(l, f);
      } else {
        return s(h).fill(l);
      }
    } else {
      return s(h);
    }
  }
  o.alloc = function (h, l, f) {
    return u(h, l, f);
  };
  function v(h) {
    c(h);
    return s(h < 0 ? 0 : Z(h) | 0);
  }
  o.allocUnsafe = function (h) {
    return v(h);
  };
  o.allocUnsafeSlow = function (h) {
    return v(h);
  };
  function y(h, l) {
    if (typeof l != "string" || l === "") {
      l = "utf8";
    }
    if (!o.isEncoding(l)) {
      throw new TypeError("Unknown encoding: " + l);
    }
    var f = H(h, l) | 0;
    var d = s(f);
    var g = d.write(h, l);
    if (g !== f) {
      d = d.slice(0, g);
    }
    return d;
  }
  function x(h) {
    for (var l = h.length < 0 ? 0 : Z(h.length) | 0, f = s(l), d = 0; d < l; d += 1) {
      f[d] = h[d] & 255;
    }
    return f;
  }
  function S(h) {
    if (O(h, Uint8Array)) {
      var l = new Uint8Array(h);
      return N(l.buffer, l.byteOffset, l.byteLength);
    }
    return x(h);
  }
  function N(h, l, f) {
    if (l < 0 || h.byteLength < l) {
      throw new RangeError("\"offset\" is outside of buffer bounds");
    }
    if (h.byteLength < l + (f || 0)) {
      throw new RangeError("\"length\" is outside of buffer bounds");
    }
    var d;
    if (l === undefined && f === undefined) {
      d = new Uint8Array(h);
    } else if (f === undefined) {
      d = new Uint8Array(h, l);
    } else {
      d = new Uint8Array(h, l, f);
    }
    Object.setPrototypeOf(d, o.prototype);
    return d;
  }
  function $(h) {
    if (o.isBuffer(h)) {
      var l = Z(h.length) | 0;
      var f = s(l);
      if (f.length !== 0) {
        h.copy(f, 0, 0, l);
      }
      return f;
    }
    if (h.length !== undefined) {
      if (typeof h.length != "number" || Ne(h.length)) {
        return s(0);
      } else {
        return x(h);
      }
    }
    if (h.type === "Buffer" && Array.isArray(h.data)) {
      return x(h.data);
    }
  }
  function Z(h) {
    if (h >= a) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    }
    return h | 0;
  }
  function X(h) {
    if (+h != h) {
      h = 0;
    }
    return o.alloc(+h);
  }
  o.isBuffer = function (l) {
    return l != null && l._isBuffer === true && l !== o.prototype;
  };
  o.compare = function (l, f) {
    if (O(l, Uint8Array)) {
      l = o.from(l, l.offset, l.byteLength);
    }
    if (O(f, Uint8Array)) {
      f = o.from(f, f.offset, f.byteLength);
    }
    if (!o.isBuffer(l) || !o.isBuffer(f)) {
      throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    }
    if (l === f) {
      return 0;
    }
    var d = l.length;
    var g = f.length;
    for (var E = 0, D = Math.min(d, g); E < D; ++E) {
      if (l[E] !== f[E]) {
        d = l[E];
        g = f[E];
        break;
      }
    }
    if (d < g) {
      return -1;
    } else if (g < d) {
      return 1;
    } else {
      return 0;
    }
  };
  o.isEncoding = function (l) {
    switch (String(l).toLowerCase()) {
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
  o.concat = function (l, f) {
    if (!Array.isArray(l)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    if (l.length === 0) {
      return o.alloc(0);
    }
    var d;
    if (f === undefined) {
      f = 0;
      d = 0;
      for (; d < l.length; ++d) {
        f += l[d].length;
      }
    }
    var g = o.allocUnsafe(f);
    var E = 0;
    for (d = 0; d < l.length; ++d) {
      var D = l[d];
      if (O(D, Uint8Array)) {
        if (E + D.length > g.length) {
          o.from(D).copy(g, E);
        } else {
          Uint8Array.prototype.set.call(g, D, E);
        }
      } else if (o.isBuffer(D)) {
        D.copy(g, E);
      } else {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      E += D.length;
    }
    return g;
  };
  function H(h, l) {
    if (o.isBuffer(h)) {
      return h.length;
    }
    if (ArrayBuffer.isView(h) || O(h, ArrayBuffer)) {
      return h.byteLength;
    }
    if (typeof h != "string") {
      throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof h);
    }
    var f = h.length;
    var d = arguments.length > 2 && arguments[2] === true;
    if (!d && f === 0) {
      return 0;
    }
    var g = false;
    for (;;) {
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return M(h).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return T(h).length;
        default:
          if (g) {
            if (d) {
              return -1;
            } else {
              return M(h).length;
            }
          }
          l = ("" + l).toLowerCase();
          g = true;
      }
    }
  }
  o.byteLength = H;
  function F(h, l, f) {
    var d = false;
    if (l === undefined || l < 0) {
      l = 0;
    }
    if (l > this.length || ((f === undefined || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, l >>>= 0, f <= l)) {
      return "";
    }
    for (h ||= "utf8";;) {
      switch (h) {
        case "hex":
          return J(this, l, f);
        case "utf8":
        case "utf-8":
          return U(this, l, f);
        case "ascii":
          return se(this, l, f);
        case "latin1":
        case "binary":
          return Q(this, l, f);
        case "base64":
          return Ke(this, l, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ie(this, l, f);
        default:
          if (d) {
            throw new TypeError("Unknown encoding: " + h);
          }
          h = (h + "").toLowerCase();
          d = true;
      }
    }
  }
  o.prototype._isBuffer = true;
  function z(h, l, f) {
    var d = h[l];
    h[l] = h[f];
    h[f] = d;
  }
  o.prototype.swap16 = function () {
    var l = this.length;
    if (l % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (var f = 0; f < l; f += 2) {
      z(this, f, f + 1);
    }
    return this;
  };
  o.prototype.swap32 = function () {
    var l = this.length;
    if (l % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (var f = 0; f < l; f += 4) {
      z(this, f, f + 3);
      z(this, f + 1, f + 2);
    }
    return this;
  };
  o.prototype.swap64 = function () {
    var l = this.length;
    if (l % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (var f = 0; f < l; f += 8) {
      z(this, f, f + 7);
      z(this, f + 1, f + 6);
      z(this, f + 2, f + 5);
      z(this, f + 3, f + 4);
    }
    return this;
  };
  o.prototype.toString = function () {
    var l = this.length;
    if (l === 0) {
      return "";
    } else if (arguments.length === 0) {
      return U(this, 0, l);
    } else {
      return F.apply(this, arguments);
    }
  };
  o.prototype.toLocaleString = o.prototype.toString;
  o.prototype.equals = function (l) {
    if (!o.isBuffer(l)) {
      throw new TypeError("Argument must be a Buffer");
    }
    if (this === l) {
      return true;
    } else {
      return o.compare(this, l) === 0;
    }
  };
  o.prototype.inspect = function () {
    var l = "";
    var f = e.INSPECT_MAX_BYTES;
    l = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > f) {
      l += " ... ";
    }
    return "<Buffer " + l + ">";
  };
  if (r) {
    o.prototype[r] = o.prototype.inspect;
  }
  o.prototype.compare = function (l, f, d, g, E) {
    if (O(l, Uint8Array)) {
      l = o.from(l, l.offset, l.byteLength);
    }
    if (!o.isBuffer(l)) {
      throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof l);
    }
    if (f === undefined) {
      f = 0;
    }
    if (d === undefined) {
      d = l ? l.length : 0;
    }
    if (g === undefined) {
      g = 0;
    }
    if (E === undefined) {
      E = this.length;
    }
    if (f < 0 || d > l.length || g < 0 || E > this.length) {
      throw new RangeError("out of range index");
    }
    if (g >= E && f >= d) {
      return 0;
    }
    if (g >= E) {
      return -1;
    }
    if (f >= d) {
      return 1;
    }
    f >>>= 0;
    d >>>= 0;
    g >>>= 0;
    E >>>= 0;
    if (this === l) {
      return 0;
    }
    var D = E - g;
    var V = d - f;
    for (var ee = Math.min(D, V), oe = this.slice(g, E), pe = l.slice(f, d), fe = 0; fe < ee; ++fe) {
      if (oe[fe] !== pe[fe]) {
        D = oe[fe];
        V = pe[fe];
        break;
      }
    }
    if (D < V) {
      return -1;
    } else if (V < D) {
      return 1;
    } else {
      return 0;
    }
  };
  function q(h, l, f, d, g) {
    if (h.length === 0) {
      return -1;
    }
    if (typeof f == "string") {
      d = f;
      f = 0;
    } else if (f > 2147483647) {
      f = 2147483647;
    } else if (f < -2147483648) {
      f = -2147483648;
    }
    f = +f;
    if (Ne(f)) {
      f = g ? 0 : h.length - 1;
    }
    if (f < 0) {
      f = h.length + f;
    }
    if (f >= h.length) {
      if (g) {
        return -1;
      }
      f = h.length - 1;
    } else if (f < 0) {
      if (g) {
        f = 0;
      } else {
        return -1;
      }
    }
    if (typeof l == "string") {
      l = o.from(l, d);
    }
    if (o.isBuffer(l)) {
      if (l.length === 0) {
        return -1;
      } else {
        return B(h, l, f, d, g);
      }
    }
    if (typeof l == "number") {
      l = l & 255;
      if (typeof Uint8Array.prototype.indexOf == "function") {
        if (g) {
          return Uint8Array.prototype.indexOf.call(h, l, f);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(h, l, f);
        }
      } else {
        return B(h, [l], f, d, g);
      }
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function B(h, l, f, d, g) {
    var E = 1;
    var D = h.length;
    var V = l.length;
    if (d !== undefined && (d = String(d).toLowerCase(), d === "ucs2" || d === "ucs-2" || d === "utf16le" || d === "utf-16le")) {
      if (h.length < 2 || l.length < 2) {
        return -1;
      }
      E = 2;
      D /= 2;
      V /= 2;
      f /= 2;
    }
    function ee(mr, Er) {
      if (E === 1) {
        return mr[Er];
      } else {
        return mr.readUInt16BE(Er * E);
      }
    }
    var oe;
    if (g) {
      var pe = -1;
      for (oe = f; oe < D; oe++) {
        if (ee(h, oe) === ee(l, pe === -1 ? 0 : oe - pe)) {
          if (pe === -1) {
            pe = oe;
          }
          if (oe - pe + 1 === V) {
            return pe * E;
          }
        } else {
          if (pe !== -1) {
            oe -= oe - pe;
          }
          pe = -1;
        }
      }
    } else {
      if (f + V > D) {
        f = D - V;
      }
      oe = f;
      for (; oe >= 0; oe--) {
        var fe = true;
        for (var Xt = 0; Xt < V; Xt++) {
          if (ee(h, oe + Xt) !== ee(l, Xt)) {
            fe = false;
            break;
          }
        }
        if (fe) {
          return oe;
        }
      }
    }
    return -1;
  }
  o.prototype.includes = function (l, f, d) {
    return this.indexOf(l, f, d) !== -1;
  };
  o.prototype.indexOf = function (l, f, d) {
    return q(this, l, f, d, true);
  };
  o.prototype.lastIndexOf = function (l, f, d) {
    return q(this, l, f, d, false);
  };
  function G(h, l, f, d) {
    f = Number(f) || 0;
    var g = h.length - f;
    if (d) {
      d = Number(d);
      if (d > g) {
        d = g;
      }
    } else {
      d = g;
    }
    var E = l.length;
    if (d > E / 2) {
      d = E / 2;
    }
    for (var D = 0; D < d; ++D) {
      var V = parseInt(l.substr(D * 2, 2), 16);
      if (Ne(V)) {
        return D;
      }
      h[f + D] = V;
    }
    return D;
  }
  function P(h, l, f, d) {
    return k(M(l, h.length - f), h, f, d);
  }
  function R(h, l, f, d) {
    return k(A(l), h, f, d);
  }
  function Y(h, l, f, d) {
    return k(T(l), h, f, d);
  }
  function ye(h, l, f, d) {
    return k(I(l, h.length - f), h, f, d);
  }
  o.prototype.write = function (l, f, d, g) {
    if (f === undefined) {
      g = "utf8";
      d = this.length;
      f = 0;
    } else if (d === undefined && typeof f == "string") {
      g = f;
      d = this.length;
      f = 0;
    } else if (isFinite(f)) {
      f = f >>> 0;
      if (isFinite(d)) {
        d = d >>> 0;
        if (g === undefined) {
          g = "utf8";
        }
      } else {
        g = d;
        d = undefined;
      }
    } else {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    var E = this.length - f;
    if (d === undefined || d > E) {
      d = E;
    }
    if (l.length > 0 && (d < 0 || f < 0) || f > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    g ||= "utf8";
    var D = false;
    for (;;) {
      switch (g) {
        case "hex":
          return G(this, l, f, d);
        case "utf8":
        case "utf-8":
          return P(this, l, f, d);
        case "ascii":
        case "latin1":
        case "binary":
          return R(this, l, f, d);
        case "base64":
          return Y(this, l, f, d);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ye(this, l, f, d);
        default:
          if (D) {
            throw new TypeError("Unknown encoding: " + g);
          }
          g = ("" + g).toLowerCase();
          D = true;
      }
    }
  };
  o.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Ke(h, l, f) {
    if (l === 0 && f === h.length) {
      return n.fromByteArray(h);
    } else {
      return n.fromByteArray(h.slice(l, f));
    }
  }
  function U(h, l, f) {
    f = Math.min(h.length, f);
    var d = [];
    for (var g = l; g < f;) {
      var E = h[g];
      var D = null;
      var V = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
      if (g + V <= f) {
        var ee;
        var oe;
        var pe;
        var fe;
        switch (V) {
          case 1:
            if (E < 128) {
              D = E;
            }
            break;
          case 2:
            ee = h[g + 1];
            if ((ee & 192) === 128) {
              fe = (E & 31) << 6 | ee & 63;
              if (fe > 127) {
                D = fe;
              }
            }
            break;
          case 3:
            ee = h[g + 1];
            oe = h[g + 2];
            if ((ee & 192) === 128 && (oe & 192) === 128) {
              fe = (E & 15) << 12 | (ee & 63) << 6 | oe & 63;
              if (fe > 2047 && (fe < 55296 || fe > 57343)) {
                D = fe;
              }
            }
            break;
          case 4:
            ee = h[g + 1];
            oe = h[g + 2];
            pe = h[g + 3];
            if ((ee & 192) === 128 && (oe & 192) === 128 && (pe & 192) === 128) {
              fe = (E & 15) << 18 | (ee & 63) << 12 | (oe & 63) << 6 | pe & 63;
              if (fe > 65535 && fe < 1114112) {
                D = fe;
              }
            }
        }
      }
      if (D === null) {
        D = 65533;
        V = 1;
      } else if (D > 65535) {
        D -= 65536;
        d.push(D >>> 10 & 1023 | 55296);
        D = D & 1023 | 56320;
      }
      d.push(D);
      g += V;
    }
    return W(d);
  }
  var j = 4096;
  function W(h) {
    var l = h.length;
    if (l <= j) {
      return String.fromCharCode.apply(String, h);
    }
    var f = "";
    for (var d = 0; d < l;) {
      f += String.fromCharCode.apply(String, h.slice(d, d += j));
    }
    return f;
  }
  function se(h, l, f) {
    var d = "";
    f = Math.min(h.length, f);
    for (var g = l; g < f; ++g) {
      d += String.fromCharCode(h[g] & 127);
    }
    return d;
  }
  function Q(h, l, f) {
    var d = "";
    f = Math.min(h.length, f);
    for (var g = l; g < f; ++g) {
      d += String.fromCharCode(h[g]);
    }
    return d;
  }
  function J(h, l, f) {
    var d = h.length;
    if (!l || l < 0) {
      l = 0;
    }
    if (!f || f < 0 || f > d) {
      f = d;
    }
    var g = "";
    for (var E = l; E < f; ++E) {
      g += At[h[E]];
    }
    return g;
  }
  function ie(h, l, f) {
    for (var d = h.slice(l, f), g = "", E = 0; E < d.length - 1; E += 2) {
      g += String.fromCharCode(d[E] + d[E + 1] * 256);
    }
    return g;
  }
  o.prototype.slice = function (l, f) {
    var d = this.length;
    l = ~~l;
    f = f === undefined ? d : ~~f;
    if (l < 0) {
      l += d;
      if (l < 0) {
        l = 0;
      }
    } else if (l > d) {
      l = d;
    }
    if (f < 0) {
      f += d;
      if (f < 0) {
        f = 0;
      }
    } else if (f > d) {
      f = d;
    }
    if (f < l) {
      f = l;
    }
    var g = this.subarray(l, f);
    Object.setPrototypeOf(g, o.prototype);
    return g;
  };
  function K(h, l, f) {
    if (h % 1 !== 0 || h < 0) {
      throw new RangeError("offset is not uint");
    }
    if (h + l > f) {
      throw new RangeError("Trying to access beyond buffer length");
    }
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function (l, f, d) {
    l = l >>> 0;
    f = f >>> 0;
    if (!d) {
      K(l, f, this.length);
    }
    var g = this[l];
    for (var E = 1, D = 0; ++D < f && (E *= 256);) {
      g += this[l + D] * E;
    }
    return g;
  };
  o.prototype.readUintBE = o.prototype.readUIntBE = function (l, f, d) {
    l = l >>> 0;
    f = f >>> 0;
    if (!d) {
      K(l, f, this.length);
    }
    var g = this[l + --f];
    for (var E = 1; f > 0 && (E *= 256);) {
      g += this[l + --f] * E;
    }
    return g;
  };
  o.prototype.readUint8 = o.prototype.readUInt8 = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 1, this.length);
    }
    return this[l];
  };
  o.prototype.readUint16LE = o.prototype.readUInt16LE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 2, this.length);
    }
    return this[l] | this[l + 1] << 8;
  };
  o.prototype.readUint16BE = o.prototype.readUInt16BE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 2, this.length);
    }
    return this[l] << 8 | this[l + 1];
  };
  o.prototype.readUint32LE = o.prototype.readUInt32LE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 4, this.length);
    }
    return (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
  };
  o.prototype.readUint32BE = o.prototype.readUInt32BE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 4, this.length);
    }
    return this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
  };
  o.prototype.readIntLE = function (l, f, d) {
    l = l >>> 0;
    f = f >>> 0;
    if (!d) {
      K(l, f, this.length);
    }
    var g = this[l];
    for (var E = 1, D = 0; ++D < f && (E *= 256);) {
      g += this[l + D] * E;
    }
    E *= 128;
    if (g >= E) {
      g -= Math.pow(2, f * 8);
    }
    return g;
  };
  o.prototype.readIntBE = function (l, f, d) {
    l = l >>> 0;
    f = f >>> 0;
    if (!d) {
      K(l, f, this.length);
    }
    for (var g = f, E = 1, D = this[l + --g]; g > 0 && (E *= 256);) {
      D += this[l + --g] * E;
    }
    E *= 128;
    if (D >= E) {
      D -= Math.pow(2, f * 8);
    }
    return D;
  };
  o.prototype.readInt8 = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 1, this.length);
    }
    if (this[l] & 128) {
      return (255 - this[l] + 1) * -1;
    } else {
      return this[l];
    }
  };
  o.prototype.readInt16LE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 2, this.length);
    }
    var d = this[l] | this[l + 1] << 8;
    if (d & 32768) {
      return d | -65536;
    } else {
      return d;
    }
  };
  o.prototype.readInt16BE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 2, this.length);
    }
    var d = this[l + 1] | this[l] << 8;
    if (d & 32768) {
      return d | -65536;
    } else {
      return d;
    }
  };
  o.prototype.readInt32LE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 4, this.length);
    }
    return this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
  };
  o.prototype.readInt32BE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 4, this.length);
    }
    return this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
  };
  o.prototype.readFloatLE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 4, this.length);
    }
    return t.read(this, l, true, 23, 4);
  };
  o.prototype.readFloatBE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 4, this.length);
    }
    return t.read(this, l, false, 23, 4);
  };
  o.prototype.readDoubleLE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 8, this.length);
    }
    return t.read(this, l, true, 52, 8);
  };
  o.prototype.readDoubleBE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      K(l, 8, this.length);
    }
    return t.read(this, l, false, 52, 8);
  };
  function _(h, l, f, d, g, E) {
    if (!o.isBuffer(h)) {
      throw new TypeError("\"buffer\" argument must be a Buffer instance");
    }
    if (l > g || l < E) {
      throw new RangeError("\"value\" argument is out of bounds");
    }
    if (f + d > h.length) {
      throw new RangeError("Index out of range");
    }
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function (l, f, d, g) {
    l = +l;
    f = f >>> 0;
    d = d >>> 0;
    if (!g) {
      var E = Math.pow(2, d * 8) - 1;
      _(this, l, f, d, E, 0);
    }
    var D = 1;
    var V = 0;
    for (this[f] = l & 255; ++V < d && (D *= 256);) {
      this[f + V] = l / D & 255;
    }
    return f + d;
  };
  o.prototype.writeUintBE = o.prototype.writeUIntBE = function (l, f, d, g) {
    l = +l;
    f = f >>> 0;
    d = d >>> 0;
    if (!g) {
      var E = Math.pow(2, d * 8) - 1;
      _(this, l, f, d, E, 0);
    }
    var D = d - 1;
    var V = 1;
    for (this[f + D] = l & 255; --D >= 0 && (V *= 256);) {
      this[f + D] = l / V & 255;
    }
    return f + d;
  };
  o.prototype.writeUint8 = o.prototype.writeUInt8 = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 1, 255, 0);
    }
    this[f] = l & 255;
    return f + 1;
  };
  o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 2, 65535, 0);
    }
    this[f] = l & 255;
    this[f + 1] = l >>> 8;
    return f + 2;
  };
  o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 2, 65535, 0);
    }
    this[f] = l >>> 8;
    this[f + 1] = l & 255;
    return f + 2;
  };
  o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 4, 4294967295, 0);
    }
    this[f + 3] = l >>> 24;
    this[f + 2] = l >>> 16;
    this[f + 1] = l >>> 8;
    this[f] = l & 255;
    return f + 4;
  };
  o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 4, 4294967295, 0);
    }
    this[f] = l >>> 24;
    this[f + 1] = l >>> 16;
    this[f + 2] = l >>> 8;
    this[f + 3] = l & 255;
    return f + 4;
  };
  o.prototype.writeIntLE = function (l, f, d, g) {
    l = +l;
    f = f >>> 0;
    if (!g) {
      var E = Math.pow(2, d * 8 - 1);
      _(this, l, f, d, E - 1, -E);
    }
    var D = 0;
    var V = 1;
    var ee = 0;
    for (this[f] = l & 255; ++D < d && (V *= 256);) {
      if (l < 0 && ee === 0 && this[f + D - 1] !== 0) {
        ee = 1;
      }
      this[f + D] = (l / V >> 0) - ee & 255;
    }
    return f + d;
  };
  o.prototype.writeIntBE = function (l, f, d, g) {
    l = +l;
    f = f >>> 0;
    if (!g) {
      var E = Math.pow(2, d * 8 - 1);
      _(this, l, f, d, E - 1, -E);
    }
    var D = d - 1;
    var V = 1;
    var ee = 0;
    for (this[f + D] = l & 255; --D >= 0 && (V *= 256);) {
      if (l < 0 && ee === 0 && this[f + D + 1] !== 0) {
        ee = 1;
      }
      this[f + D] = (l / V >> 0) - ee & 255;
    }
    return f + d;
  };
  o.prototype.writeInt8 = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 1, 127, -128);
    }
    if (l < 0) {
      l = 255 + l + 1;
    }
    this[f] = l & 255;
    return f + 1;
  };
  o.prototype.writeInt16LE = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 2, 32767, -32768);
    }
    this[f] = l & 255;
    this[f + 1] = l >>> 8;
    return f + 2;
  };
  o.prototype.writeInt16BE = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 2, 32767, -32768);
    }
    this[f] = l >>> 8;
    this[f + 1] = l & 255;
    return f + 2;
  };
  o.prototype.writeInt32LE = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 4, 2147483647, -2147483648);
    }
    this[f] = l & 255;
    this[f + 1] = l >>> 8;
    this[f + 2] = l >>> 16;
    this[f + 3] = l >>> 24;
    return f + 4;
  };
  o.prototype.writeInt32BE = function (l, f, d) {
    l = +l;
    f = f >>> 0;
    if (!d) {
      _(this, l, f, 4, 2147483647, -2147483648);
    }
    if (l < 0) {
      l = 4294967295 + l + 1;
    }
    this[f] = l >>> 24;
    this[f + 1] = l >>> 16;
    this[f + 2] = l >>> 8;
    this[f + 3] = l & 255;
    return f + 4;
  };
  function b(h, l, f, d, g, E) {
    if (f + d > h.length) {
      throw new RangeError("Index out of range");
    }
    if (f < 0) {
      throw new RangeError("Index out of range");
    }
  }
  function w(h, l, f, d, g) {
    l = +l;
    f = f >>> 0;
    if (!g) {
      b(h, l, f, 4);
    }
    t.write(h, l, f, d, 23, 4);
    return f + 4;
  }
  o.prototype.writeFloatLE = function (l, f, d) {
    return w(this, l, f, true, d);
  };
  o.prototype.writeFloatBE = function (l, f, d) {
    return w(this, l, f, false, d);
  };
  function m(h, l, f, d, g) {
    l = +l;
    f = f >>> 0;
    if (!g) {
      b(h, l, f, 8);
    }
    t.write(h, l, f, d, 52, 8);
    return f + 8;
  }
  o.prototype.writeDoubleLE = function (l, f, d) {
    return m(this, l, f, true, d);
  };
  o.prototype.writeDoubleBE = function (l, f, d) {
    return m(this, l, f, false, d);
  };
  o.prototype.copy = function (l, f, d, g) {
    if (!o.isBuffer(l)) {
      throw new TypeError("argument should be a Buffer");
    }
    d ||= 0;
    if (!g && g !== 0) {
      g = this.length;
    }
    if (f >= l.length) {
      f = l.length;
    }
    f ||= 0;
    if (g > 0 && g < d) {
      g = d;
    }
    if (g === d || l.length === 0 || this.length === 0) {
      return 0;
    }
    if (f < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (d < 0 || d >= this.length) {
      throw new RangeError("Index out of range");
    }
    if (g < 0) {
      throw new RangeError("sourceEnd out of bounds");
    }
    if (g > this.length) {
      g = this.length;
    }
    if (l.length - f < g - d) {
      g = l.length - f + d;
    }
    var E = g - d;
    if (this === l && typeof Uint8Array.prototype.copyWithin == "function") {
      this.copyWithin(f, d, g);
    } else {
      Uint8Array.prototype.set.call(l, this.subarray(d, g), f);
    }
    return E;
  };
  o.prototype.fill = function (l, f, d, g) {
    if (typeof l == "string") {
      if (typeof f == "string") {
        g = f;
        f = 0;
        d = this.length;
      } else if (typeof d == "string") {
        g = d;
        d = this.length;
      }
      if (g !== undefined && typeof g != "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof g == "string" && !o.isEncoding(g)) {
        throw new TypeError("Unknown encoding: " + g);
      }
      if (l.length === 1) {
        var E = l.charCodeAt(0);
        if (g === "utf8" && E < 128 || g === "latin1") {
          l = E;
        }
      }
    } else if (typeof l == "number") {
      l = l & 255;
    } else if (typeof l == "boolean") {
      l = Number(l);
    }
    if (f < 0 || this.length < f || this.length < d) {
      throw new RangeError("Out of range index");
    }
    if (d <= f) {
      return this;
    }
    f = f >>> 0;
    d = d === undefined ? this.length : d >>> 0;
    l ||= 0;
    var D;
    if (typeof l == "number") {
      for (D = f; D < d; ++D) {
        this[D] = l;
      }
    } else {
      var V = o.isBuffer(l) ? l : o.from(l, g);
      var ee = V.length;
      if (ee === 0) {
        throw new TypeError("The value \"" + l + "\" is invalid for argument \"value\"");
      }
      for (D = 0; D < d - f; ++D) {
        this[D + f] = V[D % ee];
      }
    }
    return this;
  };
  var L = /[^+/0-9A-Za-z-_]/g;
  function C(h) {
    h = h.split("=")[0];
    h = h.trim().replace(L, "");
    if (h.length < 2) {
      return "";
    }
    while (h.length % 4 !== 0) {
      h = h + "=";
    }
    return h;
  }
  function M(h, l) {
    l = l || Infinity;
    var f;
    for (var d = h.length, g = null, E = [], D = 0; D < d; ++D) {
      f = h.charCodeAt(D);
      if (f > 55295 && f < 57344) {
        if (!g) {
          if (f > 56319) {
            if ((l -= 3) > -1) {
              E.push(239, 191, 189);
            }
            continue;
          } else if (D + 1 === d) {
            if ((l -= 3) > -1) {
              E.push(239, 191, 189);
            }
            continue;
          }
          g = f;
          continue;
        }
        if (f < 56320) {
          if ((l -= 3) > -1) {
            E.push(239, 191, 189);
          }
          g = f;
          continue;
        }
        f = (g - 55296 << 10 | f - 56320) + 65536;
      } else if (g && (l -= 3) > -1) {
        E.push(239, 191, 189);
      }
      g = null;
      if (f < 128) {
        if ((l -= 1) < 0) {
          break;
        }
        E.push(f);
      } else if (f < 2048) {
        if ((l -= 2) < 0) {
          break;
        }
        E.push(f >> 6 | 192, f & 63 | 128);
      } else if (f < 65536) {
        if ((l -= 3) < 0) {
          break;
        }
        E.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128);
      } else if (f < 1114112) {
        if ((l -= 4) < 0) {
          break;
        }
        E.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return E;
  }
  function A(h) {
    var l = [];
    for (var f = 0; f < h.length; ++f) {
      l.push(h.charCodeAt(f) & 255);
    }
    return l;
  }
  function I(h, l) {
    var f;
    var d;
    var g;
    var E = [];
    for (var D = 0; D < h.length && !((l -= 2) < 0); ++D) {
      f = h.charCodeAt(D);
      d = f >> 8;
      g = f % 256;
      E.push(g);
      E.push(d);
    }
    return E;
  }
  function T(h) {
    return n.toByteArray(C(h));
  }
  function k(h, l, f, d) {
    for (var g = 0; g < d && !(g + f >= l.length) && !(g >= h.length); ++g) {
      l[g + f] = h[g];
    }
    return g;
  }
  function O(h, l) {
    return h instanceof l || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === l.name;
  }
  function Ne(h) {
    return h !== h;
  }
  var At = function () {
    var h = "0123456789abcdef";
    var l = new Array(256);
    for (var f = 0; f < 16; ++f) {
      var d = f * 16;
      for (var g = 0; g < 16; ++g) {
        l[d + g] = h[f] + h[g];
      }
    }
    return l;
  }();
})(ar);
var ue = {};
var Fe;
var Ue;
function or() {
  throw new Error("setTimeout has not been defined");
}
function lr() {
  throw new Error("clearTimeout has not been defined");
}
(function () {
  try {
    if (typeof setTimeout == "function") {
      Fe = setTimeout;
    } else {
      Fe = or;
    }
  } catch {
    Fe = or;
  }
  try {
    if (typeof clearTimeout == "function") {
      Ue = clearTimeout;
    } else {
      Ue = lr;
    }
  } catch {
    Ue = lr;
  }
})();
function _a(e) {
  if (Fe === setTimeout) {
    return setTimeout(e, 0);
  }
  if ((Fe === or || !Fe) && setTimeout) {
    Fe = setTimeout;
    return setTimeout(e, 0);
  }
  try {
    return Fe(e, 0);
  } catch {
    try {
      return Fe.call(null, e, 0);
    } catch {
      return Fe.call(this, e, 0);
    }
  }
}
function xs(e) {
  if (Ue === clearTimeout) {
    return clearTimeout(e);
  }
  if ((Ue === lr || !Ue) && clearTimeout) {
    Ue = clearTimeout;
    return clearTimeout(e);
  }
  try {
    return Ue(e);
  } catch {
    try {
      return Ue.call(null, e);
    } catch {
      return Ue.call(this, e);
    }
  }
}
var $e = [];
var _t = false;
var nt;
var nn = -1;
function bs() {
  if (!!_t && !!nt) {
    _t = false;
    if (nt.length) {
      $e = nt.concat($e);
    } else {
      nn = -1;
    }
    if ($e.length) {
      pa();
    }
  }
}
function pa() {
  if (!_t) {
    var e = _a(bs);
    _t = true;
    for (var n = $e.length; n;) {
      nt = $e;
      $e = [];
      while (++nn < n) {
        if (nt) {
          nt[nn].run();
        }
      }
      nn = -1;
      n = $e.length;
    }
    nt = null;
    _t = false;
    xs(e);
  }
}
ue.nextTick = function (e) {
  var n = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var t = 1; t < arguments.length; t++) {
      n[t - 1] = arguments[t];
    }
  }
  $e.push(new ga(e, n));
  if ($e.length === 1 && !_t) {
    _a(pa);
  }
};
function ga(e, n) {
  this.fun = e;
  this.array = n;
}
ga.prototype.run = function () {
  this.fun.apply(null, this.array);
};
ue.title = "browser";
ue.browser = true;
ue.env = {};
ue.argv = [];
ue.version = "";
ue.versions = {};
function je() {}
ue.on = je;
ue.addListener = je;
ue.once = je;
ue.off = je;
ue.removeListener = je;
ue.removeAllListeners = je;
ue.emit = je;
ue.prependListener = je;
ue.prependOnceListener = je;
ue.listeners = function (e) {
  return [];
};
ue.binding = function (e) {
  throw new Error("process.binding is not supported");
};
ue.cwd = function () {
  return "/";
};
ue.chdir = function (e) {
  throw new Error("process.chdir is not supported");
};
ue.umask = function () {
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
var wa = {
  exports: {}
};
(function (e) {
  (function (n, t, r) {
    e.exports = r(n);
    e.exports.default = e.exports;
  })(Sa, "UUID", function () {
    function n(_, b, w, m, L, C) {
      var M = function (I, T) {
        var k = I.toString(16);
        if (k.length < 2) {
          k = "0" + k;
        }
        if (T) {
          k = k.toUpperCase();
        }
        return k;
      };
      for (var A = b; A <= w; A++) {
        L[C++] = M(_[A], m);
      }
      return L;
    }
    function t(_, b, w, m, L) {
      for (var C = b; C <= w; C += 2) {
        m[L++] = parseInt(_.substr(C, 2), 16);
      }
    }
    var r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
    var a = [0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0];
    function i(_, b) {
      if (b % 4 !== 0) {
        throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
      }
      var w = "";
      for (var m = 0, L = 0; m < b;) {
        L = L * 256 + _[m++];
        if (m % 4 === 0) {
          for (var C = 52200625; C >= 1;) {
            var M = Math.floor(L / C) % 85;
            w += r[M];
            C /= 85;
          }
          L = 0;
        }
      }
      return w;
    }
    function s(_, b) {
      var w = _.length;
      if (w % 5 !== 0) {
        throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
      }
      if (typeof b === "undefined") {
        b = new Array(w * 4 / 5);
      }
      for (var m = 0, L = 0, C = 0; m < w;) {
        var M = _.charCodeAt(m++) - 32;
        if (M < 0 || M >= a.length) {
          break;
        }
        C = C * 85 + a[M];
        if (m % 5 === 0) {
          for (var A = 16777216; A >= 1;) {
            b[L++] = Math.trunc(C / A % 256);
            A /= 256;
          }
          C = 0;
        }
      }
      return b;
    }
    function o(_, b) {
      var w = {
        ibits: 8,
        obits: 8,
        obigendian: true
      };
      for (var m in b) {
        if (typeof w[m] !== "undefined") {
          w[m] = b[m];
        }
      }
      for (var L = [], C = 0, M, A, I = 0, T, k = 0, O = _.length; I === 0 && (A = _.charCodeAt(C++)), M = A >> w.ibits - (I + 8) & 255, I = (I + 8) % w.ibits, w.obigendian ? k === 0 ? T = M << w.obits - 8 : T |= M << w.obits - 8 - k : k === 0 ? T = M : T |= M << k, k = (k + 8) % w.obits, k !== 0 || !(L.push(T), C >= O););
      return L;
    }
    function p(_, b) {
      var w = {
        ibits: 32,
        ibigendian: true
      };
      for (var m in b) {
        if (typeof w[m] !== "undefined") {
          w[m] = b[m];
        }
      }
      var L = "";
      var C = 4294967295;
      if (w.ibits < 32) {
        C = (1 << w.ibits) - 1;
      }
      for (var M = _.length, A = 0; A < M; A++) {
        var I = _[A] & C;
        for (var T = 0; T < w.ibits; T += 8) {
          if (w.ibigendian) {
            L += String.fromCharCode(I >> w.ibits - 8 - T & 255);
          } else {
            L += String.fromCharCode(I >> T & 255);
          }
        }
      }
      return L;
    }
    var c = 8;
    var u = 8;
    var v = 256;
    function y(_, b, w, m, L, C, M, A) {
      return [A, M, C, L, m, w, b, _];
    }
    function x() {
      return y(0, 0, 0, 0, 0, 0, 0, 0);
    }
    function S(_) {
      return _.slice(0);
    }
    function N(_) {
      var b = x();
      for (var w = 0; w < c; w++) {
        b[w] = Math.floor(_ % v);
        _ /= v;
      }
      return b;
    }
    function $(_) {
      var b = 0;
      for (var w = c - 1; w >= 0; w--) {
        b *= v;
        b += _[w];
      }
      return Math.floor(b);
    }
    function Z(_, b) {
      var w = 0;
      for (var m = 0; m < c; m++) {
        w += _[m] + b[m];
        _[m] = Math.floor(w % v);
        w = Math.floor(w / v);
      }
      return w;
    }
    function X(_, b) {
      var w = 0;
      for (var m = 0; m < c; m++) {
        w += _[m] * b;
        _[m] = Math.floor(w % v);
        w = Math.floor(w / v);
      }
      return w;
    }
    function H(_, b) {
      var w;
      var m;
      var L = new Array(c + c);
      for (w = 0; w < c + c; w++) {
        L[w] = 0;
      }
      var C;
      for (w = 0; w < c; w++) {
        C = 0;
        m = 0;
        for (; m < c; m++) {
          C += _[w] * b[m] + L[w + m];
          L[w + m] = C % v;
          C /= v;
        }
        for (; m < c + c - w; m++) {
          C += L[w + m];
          L[w + m] = C % v;
          C /= v;
        }
      }
      for (w = 0; w < c; w++) {
        _[w] = L[w];
      }
      return L.slice(c, c);
    }
    function F(_, b) {
      for (var w = 0; w < c; w++) {
        _[w] &= b[w];
      }
      return _;
    }
    function z(_, b) {
      for (var w = 0; w < c; w++) {
        _[w] |= b[w];
      }
      return _;
    }
    function q(_, b) {
      var w = x();
      if (b % u !== 0) {
        throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
      }
      for (var m = Math.floor(b / u), L = 0; L < m; L++) {
        for (var C = c - 1 - 1; C >= 0; C--) {
          w[C + 1] = w[C];
        }
        w[0] = _[0];
        C = 0;
        for (; C < c - 1; C++) {
          _[C] = _[C + 1];
        }
        _[C] = 0;
      }
      return $(w);
    }
    function B(_, b) {
      if (b > c * u) {
        throw new Error("ui64_ror: invalid number of bits to shift");
      }
      var w = new Array(c + c);
      var m;
      for (m = 0; m < c; m++) {
        w[m + c] = _[m];
        w[m] = 0;
      }
      var L = Math.floor(b / u);
      var C = b % u;
      for (m = L; m < c + c - 1; m++) {
        w[m - L] = (w[m] >>> C | w[m + 1] << u - C) & (1 << u) - 1;
      }
      w[c + c - 1 - L] = w[c + c - 1] >>> C & (1 << u) - 1;
      m = c + c - 1 - L + 1;
      for (; m < c + c; m++) {
        w[m] = 0;
      }
      for (m = 0; m < c; m++) {
        _[m] = w[m + c];
      }
      return w.slice(0, c);
    }
    function G(_, b) {
      if (b > c * u) {
        throw new Error("ui64_rol: invalid number of bits to shift");
      }
      var w = new Array(c + c);
      var m;
      for (m = 0; m < c; m++) {
        w[m + c] = 0;
        w[m] = _[m];
      }
      var L = Math.floor(b / u);
      var C = b % u;
      for (m = c - 1 - L; m > 0; m--) {
        w[m + L] = (w[m] << C | w[m - 1] >>> u - C) & (1 << u) - 1;
      }
      w[0 + L] = w[0] << C & (1 << u) - 1;
      m = 0 + L - 1;
      for (; m >= 0; m--) {
        w[m] = 0;
      }
      for (m = 0; m < c; m++) {
        _[m] = w[m];
      }
      return w.slice(c, c);
    }
    function P(_, b) {
      for (var w = 0; w < c; w++) {
        _[w] ^= b[w];
      }
    }
    function R(_, b) {
      var w = (_ & 65535) + (b & 65535);
      var m = (_ >> 16) + (b >> 16) + (w >> 16);
      return m << 16 | w & 65535;
    }
    function Y(_, b) {
      return _ << b & -1 | _ >>> 32 - b & -1;
    }
    function ye(_, b) {
      function w(g, E, D, V) {
        if (g < 20) {
          return E & D | ~E & V;
        } else if (g < 40) {
          return E ^ D ^ V;
        } else if (g < 60) {
          return E & D | E & V | D & V;
        } else {
          return E ^ D ^ V;
        }
      }
      function m(g) {
        if (g < 20) {
          return 1518500249;
        } else if (g < 40) {
          return 1859775393;
        } else if (g < 60) {
          return -1894007588;
        } else {
          return -899497514;
        }
      }
      _[b >> 5] |= 128 << 24 - b % 32;
      _[(b + 64 >> 9 << 4) + 15] = b;
      var L = Array(80);
      var C = 1732584193;
      var M = -271733879;
      var A = -1732584194;
      var I = 271733878;
      var T = -1009589776;
      for (var k = 0; k < _.length; k += 16) {
        var O = C;
        var Ne = M;
        var At = A;
        var h = I;
        var l = T;
        for (var f = 0; f < 80; f++) {
          if (f < 16) {
            L[f] = _[k + f];
          } else {
            L[f] = Y(L[f - 3] ^ L[f - 8] ^ L[f - 14] ^ L[f - 16], 1);
          }
          var d = R(R(Y(C, 5), w(f, M, A, I)), R(R(T, L[f]), m(f)));
          T = I;
          I = A;
          A = Y(M, 30);
          M = C;
          C = d;
        }
        C = R(C, O);
        M = R(M, Ne);
        A = R(A, At);
        I = R(I, h);
        T = R(T, l);
      }
      return [C, M, A, I, T];
    }
    function Ke(_) {
      return p(ye(o(_, {
        ibits: 8,
        obits: 32,
        obigendian: true
      }), _.length * 8), {
        ibits: 32,
        ibigendian: true
      });
    }
    function U(_, b) {
      function w(f, d, g, E, D, V) {
        return R(Y(R(R(d, f), R(E, V)), D), g);
      }
      function m(f, d, g, E, D, V, ee) {
        return w(d & g | ~d & E, f, d, D, V, ee);
      }
      function L(f, d, g, E, D, V, ee) {
        return w(d & E | g & ~E, f, d, D, V, ee);
      }
      function C(f, d, g, E, D, V, ee) {
        return w(d ^ g ^ E, f, d, D, V, ee);
      }
      function M(f, d, g, E, D, V, ee) {
        return w(g ^ (d | ~E), f, d, D, V, ee);
      }
      _[b >> 5] |= 128 << b % 32;
      _[(b + 64 >>> 9 << 4) + 14] = b;
      var A = 1732584193;
      var I = -271733879;
      var T = -1732584194;
      var k = 271733878;
      for (var O = 0; O < _.length; O += 16) {
        var Ne = A;
        var At = I;
        var h = T;
        var l = k;
        A = m(A, I, T, k, _[O + 0], 7, -680876936);
        k = m(k, A, I, T, _[O + 1], 12, -389564586);
        T = m(T, k, A, I, _[O + 2], 17, 606105819);
        I = m(I, T, k, A, _[O + 3], 22, -1044525330);
        A = m(A, I, T, k, _[O + 4], 7, -176418897);
        k = m(k, A, I, T, _[O + 5], 12, 1200080426);
        T = m(T, k, A, I, _[O + 6], 17, -1473231341);
        I = m(I, T, k, A, _[O + 7], 22, -45705983);
        A = m(A, I, T, k, _[O + 8], 7, 1770035416);
        k = m(k, A, I, T, _[O + 9], 12, -1958414417);
        T = m(T, k, A, I, _[O + 10], 17, -42063);
        I = m(I, T, k, A, _[O + 11], 22, -1990404162);
        A = m(A, I, T, k, _[O + 12], 7, 1804603682);
        k = m(k, A, I, T, _[O + 13], 12, -40341101);
        T = m(T, k, A, I, _[O + 14], 17, -1502002290);
        I = m(I, T, k, A, _[O + 15], 22, 1236535329);
        A = L(A, I, T, k, _[O + 1], 5, -165796510);
        k = L(k, A, I, T, _[O + 6], 9, -1069501632);
        T = L(T, k, A, I, _[O + 11], 14, 643717713);
        I = L(I, T, k, A, _[O + 0], 20, -373897302);
        A = L(A, I, T, k, _[O + 5], 5, -701558691);
        k = L(k, A, I, T, _[O + 10], 9, 38016083);
        T = L(T, k, A, I, _[O + 15], 14, -660478335);
        I = L(I, T, k, A, _[O + 4], 20, -405537848);
        A = L(A, I, T, k, _[O + 9], 5, 568446438);
        k = L(k, A, I, T, _[O + 14], 9, -1019803690);
        T = L(T, k, A, I, _[O + 3], 14, -187363961);
        I = L(I, T, k, A, _[O + 8], 20, 1163531501);
        A = L(A, I, T, k, _[O + 13], 5, -1444681467);
        k = L(k, A, I, T, _[O + 2], 9, -51403784);
        T = L(T, k, A, I, _[O + 7], 14, 1735328473);
        I = L(I, T, k, A, _[O + 12], 20, -1926607734);
        A = C(A, I, T, k, _[O + 5], 4, -378558);
        k = C(k, A, I, T, _[O + 8], 11, -2022574463);
        T = C(T, k, A, I, _[O + 11], 16, 1839030562);
        I = C(I, T, k, A, _[O + 14], 23, -35309556);
        A = C(A, I, T, k, _[O + 1], 4, -1530992060);
        k = C(k, A, I, T, _[O + 4], 11, 1272893353);
        T = C(T, k, A, I, _[O + 7], 16, -155497632);
        I = C(I, T, k, A, _[O + 10], 23, -1094730640);
        A = C(A, I, T, k, _[O + 13], 4, 681279174);
        k = C(k, A, I, T, _[O + 0], 11, -358537222);
        T = C(T, k, A, I, _[O + 3], 16, -722521979);
        I = C(I, T, k, A, _[O + 6], 23, 76029189);
        A = C(A, I, T, k, _[O + 9], 4, -640364487);
        k = C(k, A, I, T, _[O + 12], 11, -421815835);
        T = C(T, k, A, I, _[O + 15], 16, 530742520);
        I = C(I, T, k, A, _[O + 2], 23, -995338651);
        A = M(A, I, T, k, _[O + 0], 6, -198630844);
        k = M(k, A, I, T, _[O + 7], 10, 1126891415);
        T = M(T, k, A, I, _[O + 14], 15, -1416354905);
        I = M(I, T, k, A, _[O + 5], 21, -57434055);
        A = M(A, I, T, k, _[O + 12], 6, 1700485571);
        k = M(k, A, I, T, _[O + 3], 10, -1894986606);
        T = M(T, k, A, I, _[O + 10], 15, -1051523);
        I = M(I, T, k, A, _[O + 1], 21, -2054922799);
        A = M(A, I, T, k, _[O + 8], 6, 1873313359);
        k = M(k, A, I, T, _[O + 15], 10, -30611744);
        T = M(T, k, A, I, _[O + 6], 15, -1560198380);
        I = M(I, T, k, A, _[O + 13], 21, 1309151649);
        A = M(A, I, T, k, _[O + 4], 6, -145523070);
        k = M(k, A, I, T, _[O + 11], 10, -1120210379);
        T = M(T, k, A, I, _[O + 2], 15, 718787259);
        I = M(I, T, k, A, _[O + 9], 21, -343485551);
        A = R(A, Ne);
        I = R(I, At);
        T = R(T, h);
        k = R(k, l);
      }
      return [A, I, T, k];
    }
    function j(_) {
      return p(U(o(_, {
        ibits: 8,
        obits: 32,
        obigendian: false
      }), _.length * 8), {
        ibits: 32,
        ibigendian: false
      });
    }
    function W(_) {
      this.mul = y(88, 81, 244, 45, 76, 149, 127, 45);
      this.inc = y(20, 5, 123, 126, 247, 103, 129, 79);
      this.mask = y(0, 0, 0, 0, 255, 255, 255, 255);
      this.state = S(this.inc);
      this.next();
      F(this.state, this.mask);
      var b;
      if (_ !== undefined) {
        _ = N(_ >>> 0);
      } else if (typeof window == "object" && typeof window.crypto == "object" && typeof window.crypto.getRandomValues == "function") {
        b = new Uint32Array(2);
        window.crypto.getRandomValues(b);
        _ = z(N(b[0] >>> 0), B(N(b[1] >>> 0), 32));
      } else if (typeof globalThis == "object" && typeof globalThis.crypto == "object" && typeof globalThis.crypto.getRandomValues == "function") {
        b = new Uint32Array(2);
        globalThis.crypto.getRandomValues(b);
        _ = z(N(b[0] >>> 0), B(N(b[1] >>> 0), 32));
      } else {
        _ = N(Math.random() * 4294967295 >>> 0);
        z(_, B(N(new Date().getTime()), 32));
      }
      z(this.state, _);
      this.next();
    }
    W.prototype.next = function () {
      var _ = S(this.state);
      H(this.state, this.mul);
      Z(this.state, this.inc);
      var b = S(_);
      B(b, 18);
      P(b, _);
      B(b, 27);
      var w = S(_);
      B(w, 59);
      F(b, this.mask);
      var m = $(w);
      var L = S(b);
      G(L, 32 - m);
      B(b, m);
      P(b, L);
      return $(b);
    };
    W.prototype.reseed = function (_) {
      if (typeof _ != "string") {
        throw new Error("UUID: PCG: seed: invalid argument (string expected)");
      }
      for (var b = ye(o(_, {
          ibits: 8,
          obits: 32,
          obigendian: true
        }), _.length * 8), w = 0; w < b.length; w++) {
        P(se.state, N(b[w] >>> 0));
      }
    };
    var se = new W();
    W.reseed = function (_) {
      se.reseed(_);
    };
    function Q(_, b) {
      var w = [];
      for (var m = 0; m < _; m++) {
        w[m] = se.next() % b;
      }
      return w;
    }
    var J = 0;
    var ie = 0;
    function K() {
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
      K.prototype = new Uint8Array(16);
    } else if (ar.Buffer) {
      K.prototype = ar.Buffer.alloc(16);
    } else {
      K.prototype = new Array(16);
    }
    K.prototype.constructor = K;
    K.prototype.make = function (_) {
      var b;
      var w = this;
      if (_ === 1) {
        var m = new Date();
        var L = m.getTime();
        if (L !== J) {
          ie = 0;
        } else {
          ie++;
        }
        J = L;
        var C = N(L);
        X(C, 10000);
        Z(C, y(1, 178, 29, 210, 19, 129, 64, 0));
        if (ie > 0) {
          Z(C, N(ie));
        }
        var M;
        M = q(C, 8);
        w[3] = M & 255;
        M = q(C, 8);
        w[2] = M & 255;
        M = q(C, 8);
        w[1] = M & 255;
        M = q(C, 8);
        w[0] = M & 255;
        M = q(C, 8);
        w[5] = M & 255;
        M = q(C, 8);
        w[4] = M & 255;
        M = q(C, 8);
        w[7] = M & 255;
        M = q(C, 8);
        w[6] = M & 15;
        var A = Q(2, 255);
        w[8] = A[0];
        w[9] = A[1];
        var I = Q(6, 255);
        I[0] |= 1;
        I[0] |= 2;
        b = 0;
        for (; b < 6; b++) {
          w[10 + b] = I[b];
        }
      } else if (_ === 4) {
        var T = Q(16, 255);
        for (b = 0; b < 16; b++) {
          this[b] = T[b];
        }
      } else if (_ === 3 || _ === 5) {
        var k = "";
        var O = typeof arguments[1] == "object" && arguments[1] instanceof K ? arguments[1] : new K().parse(arguments[1]);
        for (b = 0; b < 16; b++) {
          k += String.fromCharCode(O[b]);
        }
        k += arguments[2];
        var Ne = _ === 3 ? j(k) : Ke(k);
        for (b = 0; b < 16; b++) {
          w[b] = Ne.charCodeAt(b);
        }
      } else {
        throw new Error("UUID: make: invalid version");
      }
      w[6] &= 15;
      w[6] |= _ << 4;
      w[8] &= 63;
      w[8] |= 128;
      return w;
    };
    K.prototype.format = function (_) {
      var b;
      var w;
      if (_ === "z85") {
        b = i(this, 16);
      } else if (_ === "b16") {
        w = Array(32);
        n(this, 0, 15, true, w, 0);
        b = w.join("");
      } else if (_ === undefined || _ === "std") {
        w = new Array(36);
        n(this, 0, 3, false, w, 0);
        w[8] = "-";
        n(this, 4, 5, false, w, 9);
        w[13] = "-";
        n(this, 6, 7, false, w, 14);
        w[18] = "-";
        n(this, 8, 9, false, w, 19);
        w[23] = "-";
        n(this, 10, 15, false, w, 24);
        b = w.join("");
      }
      return b;
    };
    K.prototype.toString = function (_) {
      return this.format(_);
    };
    K.prototype.toJSON = function () {
      return this.format("std");
    };
    K.prototype.parse = function (_, b) {
      if (typeof _ != "string") {
        throw new Error("UUID: parse: invalid argument (type string expected)");
      }
      if (b === "z85") {
        s(_, this);
      } else if (b === "b16") {
        t(_, 0, 35, this, 0);
      } else if (b === undefined || b === "std") {
        var w = {
          nil: "00000000-0000-0000-0000-000000000000",
          "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
          "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
          "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
          "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
        };
        if (w[_] !== undefined) {
          _ = w[_];
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
    K.prototype.export = function () {
      var _ = Array(16);
      for (var b = 0; b < 16; b++) {
        _[b] = this[b];
      }
      return _;
    };
    K.prototype.import = function (_) {
      if (typeof _ != "object" || !(_ instanceof Array)) {
        throw new Error("UUID: import: invalid argument (type Array expected)");
      }
      if (_.length !== 16) {
        throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
      }
      for (var b = 0; b < 16; b++) {
        if (typeof _[b] != "number") {
          throw new Error("UUID: import: invalid array element #" + b + " (type Number expected)");
        }
        if (!isFinite(_[b]) || Math.floor(_[b]) !== _[b]) {
          throw new Error("UUID: import: invalid array element #" + b + " (Number with integer value expected)");
        }
        if (!(_[b] >= 0) || !(_[b] <= 255)) {
          throw new Error("UUID: import: invalid array element #" + b + " (Number with integer value in range 0...255 expected)");
        }
        this[b] = _[b];
      }
      return this;
    };
    K.prototype.compare = function (_) {
      if (typeof _ != "object") {
        throw new Error("UUID: compare: invalid argument (type UUID expected)");
      }
      if (!(_ instanceof K)) {
        throw new Error("UUID: compare: invalid argument (type UUID expected)");
      }
      for (var b = 0; b < 16; b++) {
        if (this[b] < _[b]) {
          return -1;
        }
        if (this[b] > _[b]) {
          return 1;
        }
      }
      return 0;
    };
    K.prototype.equal = function (_) {
      return this.compare(_) === 0;
    };
    K.prototype.fold = function (_) {
      if (typeof _ === "undefined") {
        throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
      }
      if (_ < 1 || _ > 4) {
        throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
      }
      for (var b = 16 / Math.pow(2, _), w = new Array(b), m = 0; m < b; m++) {
        var L = 0;
        for (var C = 0; m + C < 16; C += b) {
          L ^= this[m + C];
        }
        w[m] = L;
      }
      return w;
    };
    K.PCG = W;
    return K;
  });
})(wa);
var ys = wa.exports;
const a0 = Ta(ys);
const fr = Symbol("store-raw");
const Zt = Symbol("store-node");
function xa(e) {
  let n = e[Ie];
  if (!n && (Object.defineProperty(e, Ie, {
    value: n = new Proxy(e, Es)
  }), !Array.isArray(e))) {
    const t = Object.keys(e);
    const r = Object.getOwnPropertyDescriptors(e);
    for (let a = 0, i = t.length; a < i; a++) {
      const s = t[a];
      if (r[s].get) {
        Object.defineProperty(e, s, {
          enumerable: r[s].enumerable,
          get: r[s].get.bind(n)
        });
      }
    }
  }
  return n;
}
function dn(e) {
  let n;
  return e != null && typeof e == "object" && (e[Ie] || !(n = Object.getPrototypeOf(e)) || n === Object.prototype || Array.isArray(e));
}
function Pt(e, n = new Set()) {
  let t;
  let r;
  let a;
  let i;
  if (t = e != null && e[fr]) {
    return t;
  }
  if (!dn(e) || n.has(e)) {
    return e;
  }
  if (Array.isArray(e)) {
    if (Object.isFrozen(e)) {
      e = e.slice(0);
    } else {
      n.add(e);
    }
    for (let s = 0, o = e.length; s < o; s++) {
      a = e[s];
      if ((r = Pt(a, n)) !== a) {
        e[s] = r;
      }
    }
  } else {
    if (Object.isFrozen(e)) {
      e = Object.assign({}, e);
    } else {
      n.add(e);
    }
    const s = Object.keys(e);
    const o = Object.getOwnPropertyDescriptors(e);
    for (let p = 0, c = s.length; p < c; p++) {
      i = s[p];
      if (!o[i].get) {
        a = e[i];
        if ((r = Pt(a, n)) !== a) {
          e[i] = r;
        }
      }
    }
  }
  return e;
}
function yr(e) {
  let n = e[Zt];
  if (!n) {
    Object.defineProperty(e, Zt, {
      value: n = Object.create(null)
    });
  }
  return n;
}
function sr(e, n, t) {
  return e[n] ||= ya(t);
}
function vs(e, n) {
  const t = Reflect.getOwnPropertyDescriptor(e, n);
  if (!!t && !t.get && !!t.configurable && n !== Ie && n !== Zt) {
    delete t.value;
    delete t.writable;
    t.get = () => e[Ie][n];
  }
  return t;
}
function ba(e) {
  if (bi()) {
    const n = yr(e);
    (n._ ||= ya())();
  }
}
function ms(e) {
  ba(e);
  return Reflect.ownKeys(e);
}
function ya(e) {
  const [n, t] = Te(e, {
    equals: false,
    internal: true
  });
  n.$ = t;
  return n;
}
const Es = {
  get(e, n, t) {
    if (n === fr) {
      return e;
    }
    if (n === Ie) {
      return t;
    }
    if (n === rn) {
      ba(e);
      return t;
    }
    const r = yr(e);
    const a = r[n];
    let i = a ? a() : e[n];
    if (n === Zt || n === "__proto__") {
      return i;
    }
    if (!a) {
      const s = Object.getOwnPropertyDescriptor(e, n);
      if (bi() && (typeof i != "function" || e.hasOwnProperty(n)) && (!s || !s.get)) {
        i = sr(r, n, i)();
      }
    }
    if (dn(i)) {
      return xa(i);
    } else {
      return i;
    }
  },
  has(e, n) {
    if (n === fr || n === Ie || n === rn || n === Zt || n === "__proto__") {
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
  ownKeys: ms,
  getOwnPropertyDescriptor: vs
};
function _n(e, n, t, r = false) {
  if (!r && e[n] === t) {
    return;
  }
  const a = e[n];
  const i = e.length;
  if (t === undefined) {
    delete e[n];
  } else {
    e[n] = t;
  }
  let s = yr(e);
  let o;
  if (o = sr(s, n, a)) {
    o.$(() => t);
  }
  if (Array.isArray(e) && e.length !== i) {
    for (let p = e.length; p < i; p++) {
      if (o = s[p]) {
        o.$();
      }
    }
    if (o = sr(s, "length", i)) {
      o.$(e.length);
    }
  }
  if (o = s._) {
    o.$();
  }
}
function va(e, n) {
  const t = Object.keys(n);
  for (let r = 0; r < t.length; r += 1) {
    const a = t[r];
    _n(e, a, n[a]);
  }
}
function As(e, n) {
  if (typeof n == "function") {
    n = n(e);
  }
  n = Pt(n);
  if (Array.isArray(n)) {
    if (e === n) {
      return;
    }
    let t = 0;
    let r = n.length;
    for (; t < r; t++) {
      const a = n[t];
      if (e[t] !== a) {
        _n(e, t, a);
      }
    }
    _n(e, "length", r);
  } else {
    va(e, n);
  }
}
function It(e, n, t = []) {
  let r;
  let a = e;
  if (n.length > 1) {
    r = n.shift();
    const s = typeof r;
    const o = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let p = 0; p < r.length; p++) {
        It(e, [r[p]].concat(n), t);
      }
      return;
    } else if (o && s === "function") {
      for (let p = 0; p < e.length; p++) {
        if (r(e[p], p)) {
          It(e, [p].concat(n), t);
        }
      }
      return;
    } else if (o && s === "object") {
      const {
        from: p = 0,
        to: c = e.length - 1,
        by: u = 1
      } = r;
      for (let v = p; v <= c; v += u) {
        It(e, [v].concat(n), t);
      }
      return;
    } else if (n.length > 1) {
      It(e[r], n, [r].concat(t));
      return;
    }
    a = e[r];
    t = [r].concat(t);
  }
  let i = n[0];
  if ((typeof i != "function" || !(i = i(a, t), i === a)) && (r !== undefined || i != null)) {
    i = Pt(i);
    if (r === undefined || dn(a) && dn(i) && !Array.isArray(i)) {
      va(a, i);
    } else {
      _n(e, r, i);
    }
  }
}
function ks(...[e, n]) {
  const t = Pt(e || {});
  const r = Array.isArray(t);
  const a = xa(t);
  function i(...s) {
    Se(() => {
      if (r && s.length === 1) {
        As(t, s[0]);
      } else {
        It(t, s);
      }
    });
  }
  return [a, i];
}
var mn = class {
  x;
  y;
  width;
  height;
  constructor(e) {
    this.x = Math.floor(e.x);
    this.y = Math.floor(e.y);
    this.width = Math.floor(e.width);
    this.height = Math.floor(e.height);
  }
  get rect() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }
  get left() {
    return this.x;
  }
  get top() {
    return this.y;
  }
  get right() {
    return this.x + this.width;
  }
  get bottom() {
    return this.y + this.height;
  }
  get center() {
    return {
      x: this.x + this.width * 0.5,
      y: this.y + this.height * 0.5
    };
  }
  get corners() {
    return {
      topLeft: {
        x: this.left,
        y: this.top
      },
      topRight: {
        x: this.right,
        y: this.top
      },
      bottomRight: {
        x: this.left,
        y: this.bottom
      },
      bottomLeft: {
        x: this.right,
        y: this.bottom
      }
    };
  }
};
var Ct = e => {
  let n = new mn(e.getBoundingClientRect());
  const {
    transform: t
  } = getComputedStyle(e);
  if (t) {
    n = Ss(n, t);
  }
  return n;
};
var Ss = (e, n) => {
  let t;
  let r;
  if (n.startsWith("matrix3d(")) {
    const a = n.slice(9, -1).split(/, /);
    t = +a[12];
    r = +a[13];
  } else if (n.startsWith("matrix(")) {
    const a = n.slice(7, -1).split(/, /);
    t = +a[4];
    r = +a[5];
  } else {
    t = 0;
    r = 0;
  }
  return new mn({
    ...e,
    x: e.x - t,
    y: e.y - r
  });
};
var Ve = () => ({
  x: 0,
  y: 0
});
var ma = (e, n) => e.x === n.x && e.y === n.y;
var Pn = (e, n) => new mn({
  ...e,
  x: e.x + n.x,
  y: e.y + n.y
});
var Ts = (e, n) => {
  const t = Math.max(e.top, n.top);
  const r = Math.max(e.left, n.left);
  const a = Math.min(e.right, n.right);
  const i = Math.min(e.bottom, n.bottom);
  const s = a - r;
  const o = i - t;
  if (r < a && t < i) {
    const p = e.width * e.height;
    const c = n.width * n.height;
    const u = s * o;
    return u / (p + c - u);
  }
  return 0;
};
var Hn = (e, n) => e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
var Is = (e, n, t) => {
  const r = e.transformed;
  const a = {
    ratio: 0,
    droppable: null
  };
  for (const i of n) {
    const s = Ts(r, i.layout);
    if (s > a.ratio) {
      a.ratio = s;
      a.droppable = i;
    } else if (s > 0 && s === a.ratio && i.id === t.activeDroppableId) {
      a.droppable = i;
    }
  }
  return a.droppable;
};
var Ea = yi();
var o0 = e => {
  const n = Pa({
    collisionDetector: Is
  }, e);
  const [t, r] = ks({
    draggables: {},
    droppables: {},
    sensors: {},
    active: {
      draggableId: null,
      get draggable() {
        if (t.active.draggableId !== null) {
          return t.draggables[t.active.draggableId];
        } else {
          return null;
        }
      },
      droppableId: null,
      get droppable() {
        if (t.active.droppableId !== null) {
          return t.droppables[t.active.droppableId];
        } else {
          return null;
        }
      },
      sensorId: null,
      get sensor() {
        if (t.active.sensorId !== null) {
          return t.sensors[t.active.sensorId];
        } else {
          return null;
        }
      },
      overlay: null
    }
  });
  const a = (U, j, W) => {
    U.substring(0, U.length - 1);
    if (re(() => t[U][j])) {
      r(U, j, "transformers", W.id, W);
    }
  };
  const i = (U, j, W) => {
    U.substring(0, U.length - 1);
    if (re(() => t[U][j]) && re(() => t[U][j].transformers[W])) {
      r(U, j, "transformers", W, undefined);
    }
  };
  const s = ({
    id: U,
    node: j,
    layout: W,
    data: se
  }) => {
    const Q = t.draggables[U];
    const J = {
      id: U,
      node: j,
      layout: W,
      data: se,
      _pendingCleanup: false
    };
    let ie;
    if (!Q) {
      Object.defineProperties(J, {
        transformers: {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            if (t.active.overlay) {
              return Ve();
            }
            const K = Object.values(t.draggables[U].transformers);
            K.sort((_, b) => _.order - b.order);
            return K.reduce((_, b) => b.callback(_), Ve());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => Pn(t.draggables[U].layout, t.draggables[U].transform)
        }
      });
    } else if (t.active.draggableId === U && !t.active.overlay) {
      const K = {
        x: Q.layout.x - W.x,
        y: Q.layout.y - W.y
      };
      const _ = "addDraggable-existing-offset";
      const b = Q.transformers[_];
      const w = b ? b.callback(K) : K;
      ie = {
        id: _,
        order: 100,
        callback: m => ({
          x: m.x + w.x,
          y: m.y + w.y
        })
      };
      Y(() => i("draggables", U, _));
    }
    Se(() => {
      r("draggables", U, J);
      if (ie) {
        a("draggables", U, ie);
      }
    });
    if (t.active.draggable) {
      F();
    }
  };
  const o = U => {
    if (re(() => t.draggables[U])) {
      r("draggables", U, "_pendingCleanup", true);
      queueMicrotask(() => p(U));
    }
  };
  const p = U => {
    if (t.draggables[U]?._pendingCleanup) {
      const j = t.active.draggableId === U;
      Se(() => {
        if (j) {
          r("active", "draggableId", null);
        }
        r("draggables", U, undefined);
      });
    }
  };
  const c = ({
    id: U,
    node: j,
    layout: W,
    data: se
  }) => {
    const Q = t.droppables[U];
    const J = {
      id: U,
      node: j,
      layout: W,
      data: se,
      _pendingCleanup: false
    };
    if (!Q) {
      Object.defineProperties(J, {
        transformers: {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            const ie = Object.values(t.droppables[U].transformers);
            ie.sort((K, _) => K.order - _.order);
            return ie.reduce((K, _) => _.callback(K), Ve());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => Pn(t.droppables[U].layout, t.droppables[U].transform)
        }
      });
    }
    r("droppables", U, J);
    if (t.active.draggable) {
      F();
    }
  };
  const u = U => {
    if (re(() => t.droppables[U])) {
      r("droppables", U, "_pendingCleanup", true);
      queueMicrotask(() => v(U));
    }
  };
  const v = U => {
    if (t.droppables[U]?._pendingCleanup) {
      const j = t.active.droppableId === U;
      Se(() => {
        if (j) {
          r("active", "droppableId", null);
        }
        r("droppables", U, undefined);
      });
    }
  };
  const y = ({
    id: U,
    activators: j
  }) => {
    r("sensors", U, {
      id: U,
      activators: j,
      coordinates: {
        origin: {
          x: 0,
          y: 0
        },
        current: {
          x: 0,
          y: 0
        },
        get delta() {
          return {
            x: t.sensors[U].coordinates.current.x - t.sensors[U].coordinates.origin.x,
            y: t.sensors[U].coordinates.current.y - t.sensors[U].coordinates.origin.y
          };
        }
      }
    });
  };
  const x = U => {
    if (!re(() => t.sensors[U])) {
      return;
    }
    const j = t.active.sensorId === U;
    Se(() => {
      if (j) {
        r("active", "sensorId", null);
      }
      r("sensors", U, undefined);
    });
  };
  const S = ({
    node: U,
    layout: j
  }) => {
    const W = t.active.overlay;
    const se = {
      node: U,
      layout: j
    };
    if (!W) {
      Object.defineProperties(se, {
        id: {
          enumerable: true,
          configurable: true,
          get: () => t.active.draggable?.id
        },
        data: {
          enumerable: true,
          configurable: true,
          get: () => t.active.draggable?.data
        },
        transformers: {
          enumerable: true,
          configurable: true,
          get: () => Object.fromEntries(Object.entries(t.active.draggable ? t.active.draggable.transformers : {}).filter(([Q]) => Q !== "addDraggable-existing-offset"))
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            const Q = Object.values(t.active.overlay ? t.active.overlay.transformers : []);
            Q.sort((J, ie) => J.order - ie.order);
            return Q.reduce((J, ie) => ie.callback(J), Ve());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => t.active.overlay ? Pn(t.active.overlay.layout, t.active.overlay.transform) : new mn({
            x: 0,
            y: 0,
            width: 0,
            height: 0
          })
        }
      });
    }
    r("active", "overlay", se);
  };
  const N = () => r("active", "overlay", null);
  const $ = (U, j) => {
    Se(() => {
      r("sensors", U, "coordinates", {
        origin: {
          ...j
        },
        current: {
          ...j
        }
      });
      r("active", "sensorId", U);
    });
  };
  const Z = U => {
    const j = t.active.sensorId;
    if (j) {
      r("sensors", j, "coordinates", "current", {
        ...U
      });
    }
  };
  const X = () => r("active", "sensorId", null);
  const H = (U, j) => {
    const W = {};
    for (const Q of Object.values(t.sensors)) {
      if (Q) {
        for (const [J, ie] of Object.entries(Q.activators)) {
          W[J] ??= [];
          W[J].push({
            sensor: Q,
            activator: ie
          });
        }
      }
    }
    const se = {};
    for (const Q in W) {
      let J = Q;
      if (j) {
        J = `on${Q}`;
      }
      se[J] = ie => {
        for (const {
          activator: K
        } of W[Q]) {
          if (t.active.sensor) {
            break;
          }
          K(ie, U);
        }
      };
    }
    return se;
  };
  const F = () => {
    let U = false;
    const j = Object.values(t.draggables);
    const W = Object.values(t.droppables);
    const se = t.active.overlay;
    Se(() => {
      const Q = new WeakMap();
      for (const J of j) {
        if (J) {
          const ie = J.layout;
          if (!Q.has(J.node)) {
            Q.set(J.node, Ct(J.node));
          }
          const K = Q.get(J.node);
          if (!Hn(ie, K)) {
            r("draggables", J.id, "layout", K);
            U = true;
          }
        }
      }
      for (const J of W) {
        if (J) {
          const ie = J.layout;
          if (!Q.has(J.node)) {
            Q.set(J.node, Ct(J.node));
          }
          const K = Q.get(J.node);
          if (!Hn(ie, K)) {
            r("droppables", J.id, "layout", K);
            U = true;
          }
        }
      }
      if (se) {
        const J = se.layout;
        const ie = Ct(se.node);
        if (!Hn(J, ie)) {
          r("active", "overlay", "layout", ie);
          U = true;
        }
      }
    });
    return U;
  };
  const z = () => {
    const U = t.active.overlay ?? t.active.draggable;
    if (U) {
      const j = n.collisionDetector(U, Object.values(t.droppables), {
        activeDroppableId: t.active.droppableId
      });
      const W = j ? j.id : null;
      if (t.active.droppableId !== W) {
        r("active", "droppableId", W);
      }
    }
  };
  const q = U => {
    const j = {
      id: "sensorMove",
      order: 0,
      callback: W => t.active.sensor ? {
        x: W.x + t.active.sensor.coordinates.delta.x,
        y: W.y + t.active.sensor.coordinates.delta.y
      } : W
    };
    F();
    Se(() => {
      r("active", "draggableId", U);
      a("draggables", U, j);
    });
    z();
  };
  const B = () => {
    const U = re(() => t.active.draggableId);
    Se(() => {
      if (U !== null) {
        i("draggables", U, "sensorMove");
      }
      r("active", ["draggableId", "droppableId"], null);
    });
    F();
  };
  const G = U => {
    Xe(() => {
      const j = t.active.draggable;
      if (j) {
        re(() => U({
          draggable: j
        }));
      }
    });
  };
  const P = U => {
    Xe(() => {
      const j = t.active.draggable;
      if (j) {
        const W = re(() => t.active.overlay);
        Object.values(W ? W.transform : j.transform);
        re(() => U({
          draggable: j,
          overlay: W
        }));
      }
    });
  };
  const R = U => {
    Xe(() => {
      const j = t.active.draggable;
      const W = t.active.droppable;
      if (j) {
        re(() => U({
          draggable: j,
          droppable: W,
          overlay: t.active.overlay
        }));
      }
    });
  };
  const Y = U => {
    Xe(({
      previousDraggable: j,
      previousDroppable: W,
      previousOverlay: se
    }) => {
      const Q = t.active.draggable;
      const J = Q ? t.active.droppable : null;
      const ie = Q ? t.active.overlay : null;
      if (!Q && j) {
        re(() => U({
          draggable: j,
          droppable: W,
          overlay: se
        }));
      }
      return {
        previousDraggable: Q,
        previousDroppable: J,
        previousOverlay: ie
      };
    }, {
      previousDraggable: null,
      previousDroppable: null,
      previousOverlay: null
    });
  };
  P(() => z());
  if (n.onDragStart) {
    G(n.onDragStart);
  }
  if (n.onDragMove) {
    P(n.onDragMove);
  }
  if (n.onDragOver) {
    R(n.onDragOver);
  }
  if (n.onDragEnd) {
    Y(n.onDragEnd);
  }
  const Ke = [t, {
    addTransformer: a,
    removeTransformer: i,
    addDraggable: s,
    removeDraggable: o,
    addDroppable: c,
    removeDroppable: u,
    addSensor: y,
    removeSensor: x,
    setOverlay: S,
    clearOverlay: N,
    recomputeLayouts: F,
    detectCollisions: z,
    draggableActivators: H,
    sensorStart: $,
    sensorMove: Z,
    sensorEnd: X,
    dragStart: q,
    dragEnd: B,
    onDragStart: G,
    onDragMove: P,
    onDragOver: R,
    onDragEnd: Y
  }];
  return Di(Ea.Provider, {
    value: Ke,
    get children() {
      return n.children;
    }
  });
};
var vr = () => vi(Ea) || null;
var Ds = (e = "pointer-sensor") => {
  const [n, {
    addSensor: t,
    removeSensor: r,
    sensorStart: a,
    sensorMove: i,
    sensorEnd: s,
    dragStart: o,
    dragEnd: p
  }] = vr();
  const c = 250;
  const u = 10;
  ur(() => {
    t({
      id: e,
      activators: {
        pointerdown: N
      }
    });
  });
  pt(() => {
    r(e);
  });
  const v = () => n.active.sensorId === e;
  const y = {
    x: 0,
    y: 0
  };
  let x = null;
  let S = null;
  const N = (z, q) => {
    if (z.button === 0) {
      document.addEventListener("pointermove", X);
      document.addEventListener("pointerup", H);
      S = q;
      y.x = z.clientX;
      y.y = z.clientY;
      x = window.setTimeout(Z, c);
    }
  };
  const $ = () => {
    if (x) {
      clearTimeout(x);
      x = null;
    }
    document.removeEventListener("pointermove", X);
    document.removeEventListener("pointerup", H);
    document.removeEventListener("selectionchange", F);
  };
  const Z = () => {
    if (n.active.sensor) {
      if (!v()) {
        $();
      }
    } else {
      a(e, y);
      o(S);
      F();
      document.addEventListener("selectionchange", F);
    }
  };
  const X = z => {
    const q = {
      x: z.clientX,
      y: z.clientY
    };
    if (!n.active.sensor) {
      const B = {
        x: q.x - y.x,
        y: q.y - y.y
      };
      if (Math.sqrt(B.x ** 2 + B.y ** 2) > u) {
        Z();
      }
    }
    if (v()) {
      z.preventDefault();
      i(q);
    }
  };
  const H = z => {
    $();
    if (v()) {
      z.preventDefault();
      p();
      s();
    }
  };
  const F = () => {
    window.getSelection()?.removeAllRanges();
  };
};
var l0 = e => {
  Ds();
  return we(() => e.children);
};
var Aa = e => ({
  transform: `translate3d(${e.x}px, ${e.y}px, 0)`
});
var f0 = (e, n = {}) => {
  const [t, {
    addDraggable: r,
    removeDraggable: a,
    draggableActivators: i
  }] = vr();
  const [s, o] = Te(null);
  ur(() => {
    const v = s();
    if (v) {
      r({
        id: e,
        node: v,
        layout: Ct(v),
        data: n
      });
    }
  });
  pt(() => a(e));
  const p = () => t.active.draggableId === e;
  const c = () => t.draggables[e]?.transform || Ve();
  return Object.defineProperties((v, y) => {
    const x = y ? y() : {};
    Xe(() => {
      const S = s();
      const N = i(e);
      if (S) {
        for (const $ in N) {
          S.addEventListener($, N[$]);
        }
      }
      pt(() => {
        if (S) {
          for (const $ in N) {
            S.removeEventListener($, N[$]);
          }
        }
      });
    });
    o(v);
    if (!x.skipTransform) {
      Xe(() => {
        const S = c();
        if (ma(S, Ve())) {
          v.style.removeProperty("transform");
        } else {
          const N = Aa(c());
          v.style.setProperty("transform", N.transform ?? null);
        }
      });
    }
  }, {
    ref: {
      enumerable: true,
      value: o
    },
    isActiveDraggable: {
      enumerable: true,
      get: p
    },
    dragActivators: {
      enumerable: true,
      get: () => i(e, true)
    },
    transform: {
      enumerable: true,
      get: c
    }
  });
};
var s0 = (e, n = {}) => {
  const [t, {
    addDroppable: r,
    removeDroppable: a
  }] = vr();
  const [i, s] = Te(null);
  ur(() => {
    const u = i();
    if (u) {
      r({
        id: e,
        node: u,
        layout: Ct(u),
        data: n
      });
    }
  });
  pt(() => a(e));
  const o = () => t.active.droppableId === e;
  const p = () => t.droppables[e]?.transform || Ve();
  return Object.defineProperties((u, v) => {
    const y = v ? v() : {};
    s(u);
    if (!y.skipTransform) {
      Xe(() => {
        const x = p();
        if (ma(x, Ve())) {
          u.style.removeProperty("transform");
        } else {
          const S = Aa(p());
          u.style.setProperty("transform", S.transform ?? null);
        }
      });
    }
  }, {
    ref: {
      enumerable: true,
      value: s
    },
    isActiveDroppable: {
      enumerable: true,
      get: o
    },
    transform: {
      enumerable: true,
      get: p
    }
  });
};
var Fs = () => {};
var pi = (e, n) => n();
function Us(e, n) {
  const t = re(e);
  const r = t ? [t] : [];
  const {
    onEnter: a = pi,
    onExit: i = pi
  } = n;
  const [s, o] = Te(n.appear ? [] : r);
  const [p] = Ca();
  let c;
  let u = false;
  function v(S, N) {
    if (!S) {
      return N && N();
    }
    u = true;
    i(S, () => {
      Se(() => {
        u = false;
        o($ => $.filter(Z => Z !== S));
        if (N) {
          N();
        }
      });
    });
  }
  function y(S) {
    const N = c;
    if (!N) {
      return S && S();
    }
    c = undefined;
    o($ => [N, ...$]);
    a(N, S ?? Fs);
  }
  const x = n.mode === "out-in" ? S => u || v(S, y) : n.mode === "in-out" ? S => y(() => v(S)) : S => {
    v(S);
    y();
  };
  jn(S => {
    const N = e();
    if (re(p)) {
      p();
      return S;
    } else {
      if (N !== S) {
        c = N;
        Se(() => re(() => x(S)));
      }
      return N;
    }
  }, n.appear ? undefined : t);
  return s;
}
var gi = e => e instanceof Element;
function cr(e, n) {
  if (n(e)) {
    return e;
  }
  if (typeof e == "function" && !e.length) {
    return cr(e(), n);
  }
  if (Array.isArray(e)) {
    for (const t of e) {
      const r = cr(t, n);
      if (r) {
        return r;
      }
    }
  }
  return null;
}
function Cs(e, n = gi, t = gi) {
  const r = we(e);
  return we(() => cr(r(), n));
}
function Rs(e) {
  return we(() => {
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
function ka(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
function Os(e, n, t, r) {
  const {
    onBeforeEnter: a,
    onEnter: i,
    onAfterEnter: s
  } = n;
  a?.(t);
  t.classList.add(...e.enter);
  t.classList.add(...e.enterActive);
  queueMicrotask(() => {
    if (!t.parentNode) {
      return r?.();
    }
    i?.(t, () => o());
  });
  ka(() => {
    t.classList.remove(...e.enter);
    t.classList.add(...e.enterTo);
    if (!i || i.length < 2) {
      t.addEventListener("transitionend", o);
      t.addEventListener("animationend", o);
    }
  });
  function o(p) {
    if (!p || p.target === t) {
      r?.();
      t.removeEventListener("transitionend", o);
      t.removeEventListener("animationend", o);
      t.classList.remove(...e.enterActive);
      t.classList.remove(...e.enterTo);
      s?.(t);
    }
  }
}
function Ls(e, n, t, r) {
  const {
    onBeforeExit: a,
    onExit: i,
    onAfterExit: s
  } = n;
  if (!t.parentNode) {
    return r?.();
  }
  a?.(t);
  t.classList.add(...e.exit);
  t.classList.add(...e.exitActive);
  i?.(t, () => o());
  ka(() => {
    t.classList.remove(...e.exit);
    t.classList.add(...e.exitTo);
    if (!i || i.length < 2) {
      t.addEventListener("transitionend", o);
      t.addEventListener("animationend", o);
    }
  });
  function o(p) {
    if (!p || p.target === t) {
      r?.();
      t.removeEventListener("transitionend", o);
      t.removeEventListener("animationend", o);
      t.classList.remove(...e.exitActive);
      t.classList.remove(...e.exitTo);
      s?.(t);
    }
  }
}
var Ns = {
  inout: "in-out",
  outin: "out-in"
};
var c0 = e => {
  const n = Rs(e);
  return Us(Cs(() => e.children), {
    mode: Ns[e.mode],
    appear: e.appear,
    onEnter(t, r) {
      Os(n(), e, t, r);
    },
    onExit(t, r) {
      Ls(n(), e, t, r);
    }
  });
};
function u0(e, n) {
  const t = yi(n);
  return [r => Di(t.Provider, {
    value: e(r),
    get children() {
      return r.children;
    }
  }), () => vi(t)];
}
export { f0 as A, oo as B, io as C, Ys as D, Ms as E, Hs as F, $s as G, vr as H, Zs as I, ur as J, s0 as K, o0 as L, js as M, l0 as N, Ks as O, Ps as S, c0 as T, a0 as U, Te as a, ks as b, u0 as c, r0 as d, yi as e, vi as f, we as g, Se as h, i0 as i, jn as j, Xe as k, re as l, eo as m, mi as n, pt as o, Xs as p, lo as q, rt as r, ao as s, Yn as t, qs as u, Vs as v, Gs as w, Di as x, Pa as y, no as z };
