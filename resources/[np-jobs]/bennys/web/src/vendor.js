import { c as Da, g as Ca } from "./commonjsHelpers.js";
const Ra = (e, n) => e === n;
const ve = Symbol("solid-proxy");
const Hn = Symbol("solid-track");
const sn = {
  equals: Ra
};
let yi = Ti;
const Ge = 1;
const cn = 2;
const vi = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var ie = null;
let En = null;
let te = null;
let fe = null;
let Be = null;
let gn = 0;
function an(e, n) {
  const t = te;
  const r = ie;
  const a = e.length === 0;
  const i = a ? vi : {
    owned: null,
    cleanups: null,
    context: null,
    owner: n === undefined ? r : n
  };
  const s = a ? e : () => e(() => xe(() => xn(i)));
  ie = i;
  te = null;
  try {
    return gt(s, true);
  } finally {
    te = t;
    ie = r;
  }
}
function cr(e, n) {
  n = n ? Object.assign({}, sn, n) : sn;
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
    return Si(t, a);
  };
  return [ki.bind(t), r];
}
function ye(e, n, t) {
  const r = ur(e, n, false, Ge);
  Kt(r);
}
function ht(e, n, t) {
  yi = La;
  const r = ur(e, n, false, Ge);
  if (!t || !t.render) {
    r.user = true;
  }
  if (Be) {
    Be.push(r);
  } else {
    Kt(r);
  }
}
function Oe(e, n, t) {
  t = t ? Object.assign({}, sn, t) : sn;
  const r = ur(e, n, true, 0);
  r.observers = null;
  r.observerSlots = null;
  r.comparator = t.equals || undefined;
  Kt(r);
  return ki.bind(r);
}
function Na(e) {
  return gt(e, false);
}
function xe(e) {
  if (te === null) {
    return e();
  }
  const n = te;
  te = null;
  try {
    return e();
  } finally {
    te = n;
  }
}
function Z0(e) {
  ht(() => xe(e));
}
function mi(e) {
  if (ie !== null) {
    if (ie.cleanups === null) {
      ie.cleanups = [e];
    } else {
      ie.cleanups.push(e);
    }
  }
  return e;
}
function Ei() {
  return te;
}
function za(e, n) {
  const t = Symbol("context");
  return {
    id: t,
    Provider: $a(t),
    defaultValue: e
  };
}
function Ba(e) {
  let n;
  if ((n = Ui(ie, e.id)) !== undefined) {
    return n;
  } else {
    return e.defaultValue;
  }
}
function Ai(e) {
  const n = Oe(e);
  const t = Oe(() => Pn(n()));
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
    if (this.state === Ge) {
      Kt(this);
    } else {
      const e = fe;
      fe = null;
      gt(() => hn(this), false);
      fe = e;
    }
  }
  if (te) {
    const e = this.observers ? this.observers.length : 0;
    if (te.sources) {
      te.sources.push(this);
      te.sourceSlots.push(e);
    } else {
      te.sources = [this];
      te.sourceSlots = [e];
    }
    if (this.observers) {
      this.observers.push(te);
      this.observerSlots.push(te.sources.length - 1);
    } else {
      this.observers = [te];
      this.observerSlots = [te.sources.length - 1];
    }
  }
  return this.value;
}
function Si(e, n, t) {
  let r = e.value;
  if (!e.comparator || !e.comparator(r, n)) {
    e.value = n;
    if (e.observers && e.observers.length) {
      gt(() => {
        for (let a = 0; a < e.observers.length; a += 1) {
          const i = e.observers[a];
          const s = En && En.running;
          if (s) {
            En.disposed.has(i);
          }
          if (s ? !i.tState : !i.state) {
            if (i.pure) {
              fe.push(i);
            } else {
              Be.push(i);
            }
            if (i.observers) {
              Fi(i);
            }
          }
          if (!s) {
            i.state = Ge;
          }
        }
        if (fe.length > 1000000) {
          fe = [];
          throw new Error();
        }
      }, false);
    }
  }
  return n;
}
function Kt(e) {
  if (!e.fn) {
    return;
  }
  xn(e);
  const n = ie;
  const t = te;
  const r = gn;
  te = ie = e;
  Oa(e, e.value, r);
  te = t;
  ie = n;
}
function Oa(e, n, t) {
  let r;
  try {
    r = e.fn(n);
  } catch (a) {
    if (e.pure) {
      e.state = Ge;
      if (e.owned) {
        e.owned.forEach(xn);
      }
      e.owned = null;
    }
    e.updatedAt = t + 1;
    return Ii(a);
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
function ur(e, n, t, r = Ge, a) {
  const i = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: n,
    owner: ie,
    context: null,
    pure: t
  };
  if (ie !== null) {
    if (ie !== vi) {
      if (ie.owned) {
        ie.owned.push(i);
      } else {
        ie.owned = [i];
      }
    }
  }
  return i;
}
function un(e) {
  if (e.state === 0) {
    return;
  }
  if (e.state === cn) {
    return hn(e);
  }
  if (e.suspense && xe(e.suspense.inFallback)) {
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
    if (e.state === Ge) {
      Kt(e);
    } else if (e.state === cn) {
      const r = fe;
      fe = null;
      gt(() => hn(e, n[0]), false);
      fe = r;
    }
  }
}
function gt(e, n) {
  if (fe) {
    return e();
  }
  let t = false;
  if (!n) {
    fe = [];
  }
  if (Be) {
    t = true;
  } else {
    Be = [];
  }
  gn++;
  try {
    const r = e();
    Ma(t);
    return r;
  } catch (r) {
    if (!t) {
      Be = null;
    }
    fe = null;
    Ii(r);
  }
}
function Ma(e) {
  if (fe) {
    Ti(fe);
    fe = null;
  }
  if (e) {
    return;
  }
  const n = Be;
  Be = null;
  if (n.length) {
    gt(() => yi(n), false);
  }
}
function Ti(e) {
  for (let n = 0; n < e.length; n++) {
    un(e[n]);
  }
}
function La(e) {
  let n;
  let t = 0;
  for (n = 0; n < e.length; n++) {
    const r = e[n];
    if (r.user) {
      e[t++] = r;
    } else {
      un(r);
    }
  }
  for (n = 0; n < t; n++) {
    un(e[n]);
  }
}
function hn(e, n) {
  e.state = 0;
  for (let t = 0; t < e.sources.length; t += 1) {
    const r = e.sources[t];
    if (r.sources) {
      const a = r.state;
      if (a === Ge) {
        if (r !== n && (!r.updatedAt || r.updatedAt < gn)) {
          un(r);
        }
      } else if (a === cn) {
        hn(r, n);
      }
    }
  }
}
function Fi(e) {
  for (let n = 0; n < e.observers.length; n += 1) {
    const t = e.observers[n];
    if (!t.state) {
      t.state = cn;
      if (t.pure) {
        fe.push(t);
      } else {
        Be.push(t);
      }
      if (t.observers) {
        Fi(t);
      }
    }
  }
}
function xn(e) {
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
      xn(e.owned[n]);
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
function Ui(e, n) {
  if (e) {
    if (e.context && e.context[n] !== undefined) {
      return e.context[n];
    } else {
      return Ui(e.owner, n);
    }
  } else {
    return undefined;
  }
}
function Pn(e) {
  if (typeof e == "function" && !e.length) {
    return Pn(e());
  }
  if (Array.isArray(e)) {
    const n = [];
    for (let t = 0; t < e.length; t++) {
      const r = Pn(e[t]);
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
function $a(e, n) {
  return function (r) {
    let a;
    ye(() => a = xe(() => {
      ie.context = {
        [e]: r.value
      };
      return Ai(() => r.children);
    }), undefined);
    return a;
  };
}
const Za = Symbol("fallback");
function kr(e) {
  for (let n = 0; n < e.length; n++) {
    e[n]();
  }
}
function Ha(e, n, t = {}) {
  let r = [];
  let a = [];
  let i = [];
  let s = 0;
  let o = n.length > 1 ? [] : null;
  mi(() => kr(i));
  return () => {
    let p = e() || [];
    let c;
    let u;
    p[Hn];
    return xe(() => {
      let y = p.length;
      let x;
      let D;
      let O;
      let $;
      let M;
      let P;
      let L;
      let U;
      let Z;
      if (y === 0) {
        if (s !== 0) {
          kr(i);
          i = [];
          r = [];
          a = [];
          s = 0;
          o &&= [];
        }
        if (t.fallback) {
          r = [Za];
          a[0] = an(V => {
            i[0] = V;
            return t.fallback();
          });
          s = 1;
        }
      } else if (s === 0) {
        a = new Array(y);
        u = 0;
        for (; u < y; u++) {
          r[u] = p[u];
          a[u] = an(m);
        }
        s = y;
      } else {
        O = new Array(y);
        $ = new Array(y);
        if (o) {
          M = new Array(y);
        }
        P = 0;
        L = Math.min(s, y);
        for (; P < L && r[P] === p[P]; P++);
        L = s - 1;
        U = y - 1;
        for (; L >= P && U >= P && r[L] === p[U]; L--, U--) {
          O[U] = a[L];
          $[U] = i[L];
          if (o) {
            M[U] = o[L];
          }
        }
        x = new Map();
        D = new Array(U + 1);
        u = U;
        for (; u >= P; u--) {
          Z = p[u];
          c = x.get(Z);
          D[u] = c === undefined ? -1 : c;
          x.set(Z, u);
        }
        for (c = P; c <= L; c++) {
          Z = r[c];
          u = x.get(Z);
          if (u !== undefined && u !== -1) {
            O[u] = a[c];
            $[u] = i[c];
            if (o) {
              M[u] = o[c];
            }
            u = D[u];
            x.set(Z, u);
          } else {
            i[c]();
          }
        }
        for (u = P; u < y; u++) {
          if (u in O) {
            a[u] = O[u];
            i[u] = $[u];
            if (o) {
              o[u] = M[u];
              o[u](u);
            }
          } else {
            a[u] = an(m);
          }
        }
        a = a.slice(0, s = y);
        r = p.slice(0);
      }
      return a;
    });
    function m(y) {
      i[u] = y;
      if (o) {
        const [x, D] = cr(u);
        o[u] = D;
        return n(p[u], x);
      }
      return n(p[u]);
    }
  };
}
function Ke(e, n) {
  return xe(() => e(n || {}));
}
function qt() {
  return true;
}
const Kn = {
  get(e, n, t) {
    if (n === ve) {
      return t;
    } else {
      return e.get(n);
    }
  },
  has(e, n) {
    if (n === ve) {
      return true;
    } else {
      return e.has(n);
    }
  },
  set: qt,
  deleteProperty: qt,
  getOwnPropertyDescriptor(e, n) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return e.get(n);
      },
      set: qt,
      deleteProperty: qt
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function An(e) {
  if (e = typeof e == "function" ? e() : e) {
    return e;
  } else {
    return {};
  }
}
function Pa() {
  for (let e = 0, n = this.length; e < n; ++e) {
    const t = this[e]();
    if (t !== undefined) {
      return t;
    }
  }
}
function Di(...e) {
  let n = false;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    n = n || !!s && ve in s;
    e[i] = typeof s == "function" ? (n = true, Oe(s)) : s;
  }
  if (n) {
    return new Proxy({
      get(i) {
        for (let s = e.length - 1; s >= 0; s--) {
          const o = An(e[s])[i];
          if (o !== undefined) {
            return o;
          }
        }
      },
      has(i) {
        for (let s = e.length - 1; s >= 0; s--) {
          if (i in An(e[s])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const i = [];
        for (let s = 0; s < e.length; s++) {
          i.push(...Object.keys(An(e[s])));
        }
        return [...new Set(i)];
      }
    }, Kn);
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
          const m = r[u];
          const y = Object.getOwnPropertyDescriptor(s, u);
          if (m) {
            if (y.get) {
              m.push(y.get.bind(s));
            } else if (y.value !== undefined) {
              m.push(() => y.value);
            }
          } else if (t[u] === undefined) {
            t[u] = y.value;
          }
        } else {
          const m = Object.getOwnPropertyDescriptor(s, u);
          if (m.get) {
            Object.defineProperty(t, u, {
              enumerable: true,
              configurable: true,
              get: Pa.bind(r[u] = [m.get.bind(s)])
            });
          } else {
            t[u] = m.value;
          }
        }
      }
    }
  }
  return t;
}
function Ci(e, ...n) {
  if (ve in e) {
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
    }, Kn));
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
    }, Kn));
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
const Ri = e => `Stale read from <${e}>.`;
function H0(e) {
  const n = "fallback" in e && {
    fallback: () => e.fallback
  };
  return Oe(Ha(() => e.each, e.children, n || undefined));
}
function P0(e) {
  const n = e.keyed;
  const t = Oe(() => e.when, undefined, {
    equals: (r, a) => n ? r === a : !r == !a
  });
  return Oe(() => {
    const r = t();
    if (r) {
      const a = e.children;
      if (typeof a == "function" && a.length > 0) {
        return xe(() => a(n ? r : () => {
          if (!xe(t)) {
            throw Ri("Show");
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
function K0(e) {
  let n = false;
  const t = (i, s) => i[0] === s[0] && (n ? i[1] === s[1] : !i[1] == !s[1]) && i[2] === s[2];
  const r = Ai(() => e.children);
  const a = Oe(() => {
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
  return Oe(() => {
    const [i, s, o] = a();
    if (i < 0) {
      return e.fallback;
    }
    const p = o.children;
    if (typeof p == "function" && p.length > 0) {
      return xe(() => p(n ? s : () => {
        if (xe(a)[0] !== i) {
          throw Ri("Match");
        }
        return o.when;
      }));
    } else {
      return p;
    }
  }, undefined, undefined);
}
function j0(e) {
  return e;
}
const Ka = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const ja = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...Ka]);
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
const Wa = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const qa = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Ja(e, n, t) {
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
        let m = o;
        while (m < i) {
          c.set(t[m], m++);
        }
      }
      const u = c.get(n[s]);
      if (u != null) {
        if (o < u && u < i) {
          let m = s;
          let y = 1;
          let x;
          while (++m < a && m < i && (x = c.get(n[m])) != null && x === u + y) {
            y++;
          }
          if (y > u - o) {
            const D = n[s];
            while (o < u) {
              e.insertBefore(t[o++], D);
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
const Sr = "_$DX_DELEGATE";
function G0(e, n, t, r = {}) {
  let a;
  an(i => {
    a = i;
    if (n === document) {
      e();
    } else {
      Ct(n, e(), n.firstChild ? null : undefined, t);
    }
  }, r.owner);
  return () => {
    a();
    n.textContent = "";
  };
}
function Xe(e, n, t) {
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
  const i = n ? () => xe(() => document.importNode(r ||= a(), true)) : () => (r ||= a()).cloneNode(true);
  i.cloneNode = i;
  return i;
}
function hr(e, n = window.document) {
  const t = n[Sr] ||= new Set();
  for (let r = 0, a = e.length; r < a; r++) {
    const i = e[r];
    if (!t.has(i)) {
      t.add(i);
      n.addEventListener(i, ao);
    }
  }
}
function jn(e, n, t) {
  if (t == null) {
    e.removeAttribute(n);
  } else {
    e.setAttribute(n, t);
  }
}
function Qa(e, n, t, r) {
  if (r == null) {
    e.removeAttributeNS(n, t);
  } else {
    e.setAttributeNS(n, t, r);
  }
}
function eo(e, n) {
  if (n == null) {
    e.removeAttribute("class");
  } else {
    e.className = n;
  }
}
function on(e, n, t, r) {
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
function to(e, n, t = {}) {
  const r = Object.keys(n || {});
  const a = Object.keys(t);
  let i;
  let s;
  i = 0;
  s = a.length;
  for (; i < s; i++) {
    const o = a[i];
    if (!!o && o !== "undefined" && !n[o]) {
      Tr(e, o, false);
      delete t[o];
    }
  }
  i = 0;
  s = r.length;
  for (; i < s; i++) {
    const o = r[i];
    const p = !!n[o];
    if (!!o && o !== "undefined" && t[o] !== p && !!p) {
      Tr(e, o, true);
      t[o] = p;
    }
  }
  return t;
}
function no(e, n, t) {
  if (!n) {
    if (t) {
      return jn(e, "style");
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
function Ni(e, n = {}, t, r) {
  const a = {};
  if (!r) {
    ye(() => a.children = dt(e, n.children, a.children));
  }
  ye(() => n.ref && n.ref(e));
  ye(() => ro(e, n, t, true, a, true));
  return a;
}
function X0(e, n, t) {
  return xe(() => e(n, t));
}
function Ct(e, n, t, r) {
  if (t !== undefined && !r) {
    r = [];
  }
  if (typeof n != "function") {
    return dt(e, n, r, t);
  }
  ye(a => dt(e, n(), a, t), r);
}
function ro(e, n, t, r, a = {}, i = false) {
  n ||= {};
  for (const s in a) {
    if (!(s in n)) {
      if (s === "children") {
        continue;
      }
      a[s] = Fr(e, s, null, a[s], t, i);
    }
  }
  for (const s in n) {
    if (s === "children") {
      if (!r) {
        dt(e, n.children);
      }
      continue;
    }
    const o = n[s];
    a[s] = Fr(e, s, o, a[s], t, i);
  }
}
function io(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (n, t) => t.toUpperCase());
}
function Tr(e, n, t) {
  const r = n.trim().split(/\s+/);
  for (let a = 0, i = r.length; a < i; a++) {
    e.classList.toggle(r[a], t);
  }
}
function Fr(e, n, t, r, a, i) {
  let s;
  let o;
  let p;
  let c;
  let u;
  if (n === "style") {
    return no(e, t, r);
  }
  if (n === "classList") {
    return to(e, t, r);
  }
  if (t === r) {
    return r;
  }
  if (n === "ref") {
    if (!i) {
      t(e);
    }
  } else if (n.slice(0, 3) === "on:") {
    const m = n.slice(3);
    if (r) {
      e.removeEventListener(m, r);
    }
    if (t) {
      e.addEventListener(m, t);
    }
  } else if (n.slice(0, 10) === "oncapture:") {
    const m = n.slice(10);
    if (r) {
      e.removeEventListener(m, r, true);
    }
    if (t) {
      e.addEventListener(m, t, true);
    }
  } else if (n.slice(0, 2) === "on") {
    const m = n.slice(2).toLowerCase();
    const y = Wa.has(m);
    if (!y && r) {
      const x = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(m, x);
    }
    if (y || t) {
      on(e, m, t, y);
      if (y) {
        hr([m]);
      }
    }
  } else if (n.slice(0, 5) === "attr:") {
    jn(e, n.slice(5), t);
  } else if ((u = n.slice(0, 5) === "prop:") || (p = Ga.has(n)) || !a && ((c = Va(n, e.tagName)) || (o = ja.has(n))) || (s = e.nodeName.includes("-"))) {
    if (u) {
      n = n.slice(5);
      o = true;
    }
    if (n === "class" || n === "className") {
      eo(e, t);
    } else if (s && !o && !p) {
      e[io(n)] = t;
    } else {
      e[c || n] = t;
    }
  } else {
    const m = a && n.indexOf(":") > -1 && qa[n.split(":")[0]];
    if (m) {
      Qa(e, m, n, t);
    } else {
      jn(e, Xa[n] || n, t);
    }
  }
  return t;
}
function ao(e) {
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
function dt(e, n, t, r, a) {
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
      t = at(e, t, r, o);
    } else if (t !== "" && typeof t == "string") {
      t = e.firstChild.data = n;
    } else {
      t = e.textContent = n;
    }
  } else if (n == null || i === "boolean") {
    t = at(e, t, r);
  } else {
    if (i === "function") {
      ye(() => {
        let o = n();
        while (typeof o == "function") {
          o = o();
        }
        t = dt(e, o, t, r);
      });
      return () => t;
    }
    if (Array.isArray(n)) {
      const o = [];
      const p = t && Array.isArray(t);
      if (Gn(o, n, t, a)) {
        ye(() => t = dt(e, o, t, r, true));
        return () => t;
      }
      if (o.length === 0) {
        t = at(e, t, r);
        if (s) {
          return t;
        }
      } else if (p) {
        if (t.length === 0) {
          Ir(e, o, r);
        } else {
          Ja(e, t, o);
        }
      } else {
        if (t) {
          at(e);
        }
        Ir(e, o);
      }
      t = o;
    } else if (n.nodeType) {
      if (Array.isArray(t)) {
        if (s) {
          return t = at(e, t, r, n);
        }
        at(e, t, null, n);
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
function Gn(e, n, t, r) {
  let a = false;
  for (let i = 0, s = n.length; i < s; i++) {
    let o = n[i];
    let p = t && t[i];
    let c;
    if (o != null && o !== true && o !== false) {
      if ((c = typeof o) == "object" && o.nodeType) {
        e.push(o);
      } else if (Array.isArray(o)) {
        a = Gn(e, o, p) || a;
      } else if (c === "function") {
        if (r) {
          while (typeof o == "function") {
            o = o();
          }
          a = Gn(e, Array.isArray(o) ? o : [o], Array.isArray(p) ? p : [p]) || a;
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
function Ir(e, n, t = null) {
  for (let r = 0, a = n.length; r < a; r++) {
    e.insertBefore(n[r], t);
  }
}
function at(e, n, t, r) {
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
let Jt;
const oo = new Uint8Array(16);
function lo() {
  if (!Jt && (Jt = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Jt)) {
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  }
  return Jt(oo);
}
const fo = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function so(e) {
  return typeof e == "string" && fo.test(e);
}
const ae = [];
for (let e = 0; e < 256; ++e) {
  ae.push((e + 256).toString(16).slice(1));
}
function zi(e, n = 0) {
  return ae[e[n + 0]] + ae[e[n + 1]] + ae[e[n + 2]] + ae[e[n + 3]] + "-" + ae[e[n + 4]] + ae[e[n + 5]] + "-" + ae[e[n + 6]] + ae[e[n + 7]] + "-" + ae[e[n + 8]] + ae[e[n + 9]] + "-" + ae[e[n + 10]] + ae[e[n + 11]] + ae[e[n + 12]] + ae[e[n + 13]] + ae[e[n + 14]] + ae[e[n + 15]];
}
function co(e) {
  if (!so(e)) {
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
function uo(e) {
  e = unescape(encodeURIComponent(e));
  const n = [];
  for (let t = 0; t < e.length; ++t) {
    n.push(e.charCodeAt(t));
  }
  return n;
}
const ho = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
const _o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function po(e, n, t) {
  function r(a, i, s, o) {
    if (typeof a == "string") {
      a = uo(a);
    }
    if (typeof i == "string") {
      i = co(i);
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
    return zi(c);
  }
  try {
    r.name = e;
  } catch {}
  r.DNS = ho;
  r.URL = _o;
  return r;
}
const wo = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ur = {
  randomUUID: wo
};
function Y0(e, n, t) {
  if (Ur.randomUUID && !n && !e) {
    return Ur.randomUUID();
  }
  e = e || {};
  const r = e.random || (e.rng || lo)();
  r[6] = r[6] & 15 | 64;
  r[8] = r[8] & 63 | 128;
  if (n) {
    t = t || 0;
    for (let a = 0; a < 16; ++a) {
      n[t + a] = r[a];
    }
    return n;
  }
  return zi(r);
}
function go(e, n, t, r) {
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
function kn(e, n) {
  return e << n | e >>> 32 - n;
}
function xo(e) {
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
      o[x] = kn(o[x - 3] ^ o[x - 8] ^ o[x - 14] ^ o[x - 16], 1);
    }
    let p = t[0];
    let c = t[1];
    let u = t[2];
    let m = t[3];
    let y = t[4];
    for (let x = 0; x < 80; ++x) {
      const D = Math.floor(x / 20);
      const O = kn(p, 5) + go(D, c, u, m) + y + n[D] + o[x] >>> 0;
      y = m;
      m = u;
      u = kn(c, 30) >>> 0;
      c = p;
      p = O;
    }
    t[0] = t[0] + p >>> 0;
    t[1] = t[1] + c >>> 0;
    t[2] = t[2] + u >>> 0;
    t[3] = t[3] + m >>> 0;
    t[4] = t[4] + y >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
const bo = po("v5", 80, xo);
const V0 = bo;
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const yo = 4;
const Dr = 0;
const Cr = 1;
const vo = 2;
function xt(e) {
  let n = e.length;
  while (--n >= 0) {
    e[n] = 0;
  }
}
const mo = 0;
const Bi = 1;
const Eo = 2;
const Ao = 3;
const ko = 258;
const dr = 29;
const jt = 256;
const Rt = jt + 1 + dr;
const ct = 30;
const _r = 19;
const Oi = Rt * 2 + 1;
const Ve = 15;
const Sn = 16;
const So = 7;
const pr = 256;
const Mi = 16;
const Li = 17;
const $i = 18;
const Xn = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
const ln = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
const To = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
const Zi = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
const Fo = 512;
const Re = new Array((Rt + 2) * 2);
xt(Re);
const It = new Array(ct * 2);
xt(It);
const Nt = new Array(Fo);
xt(Nt);
const zt = new Array(ko - Ao + 1);
xt(zt);
const wr = new Array(dr);
xt(wr);
const dn = new Array(ct);
xt(dn);
function Tn(e, n, t, r, a) {
  this.static_tree = e;
  this.extra_bits = n;
  this.extra_base = t;
  this.elems = r;
  this.max_length = a;
  this.has_stree = e && e.length;
}
let Hi;
let Pi;
let Ki;
function Fn(e, n) {
  this.dyn_tree = e;
  this.max_code = 0;
  this.stat_desc = n;
}
const ji = e => e < 256 ? Nt[e] : Nt[256 + (e >>> 7)];
const Bt = (e, n) => {
  e.pending_buf[e.pending++] = n & 255;
  e.pending_buf[e.pending++] = n >>> 8 & 255;
};
const ce = (e, n, t) => {
  if (e.bi_valid > Sn - t) {
    e.bi_buf |= n << e.bi_valid & 65535;
    Bt(e, e.bi_buf);
    e.bi_buf = n >> Sn - e.bi_valid;
    e.bi_valid += t - Sn;
  } else {
    e.bi_buf |= n << e.bi_valid & 65535;
    e.bi_valid += t;
  }
};
const ke = (e, n, t) => {
  ce(e, t[n * 2], t[n * 2 + 1]);
};
const Gi = (e, n) => {
  let t = 0;
  do {
    t |= e & 1;
    e >>>= 1;
    t <<= 1;
  } while (--n > 0);
  return t >>> 1;
};
const Io = e => {
  if (e.bi_valid === 16) {
    Bt(e, e.bi_buf);
    e.bi_buf = 0;
    e.bi_valid = 0;
  } else if (e.bi_valid >= 8) {
    e.pending_buf[e.pending++] = e.bi_buf & 255;
    e.bi_buf >>= 8;
    e.bi_valid -= 8;
  }
};
const Uo = (e, n) => {
  const t = n.dyn_tree;
  const r = n.max_code;
  const a = n.stat_desc.static_tree;
  const i = n.stat_desc.has_stree;
  const s = n.stat_desc.extra_bits;
  const o = n.stat_desc.extra_base;
  const p = n.stat_desc.max_length;
  let c;
  let u;
  let m;
  let y;
  let x;
  let D;
  let O = 0;
  for (y = 0; y <= Ve; y++) {
    e.bl_count[y] = 0;
  }
  t[e.heap[e.heap_max] * 2 + 1] = 0;
  c = e.heap_max + 1;
  for (; c < Oi; c++) {
    u = e.heap[c];
    y = t[t[u * 2 + 1] * 2 + 1] + 1;
    if (y > p) {
      y = p;
      O++;
    }
    t[u * 2 + 1] = y;
    if (!(u > r)) {
      e.bl_count[y]++;
      x = 0;
      if (u >= o) {
        x = s[u - o];
      }
      D = t[u * 2];
      e.opt_len += D * (y + x);
      if (i) {
        e.static_len += D * (a[u * 2 + 1] + x);
      }
    }
  }
  if (O !== 0) {
    do {
      for (y = p - 1; e.bl_count[y] === 0;) {
        y--;
      }
      e.bl_count[y]--;
      e.bl_count[y + 1] += 2;
      e.bl_count[p]--;
      O -= 2;
    } while (O > 0);
    for (y = p; y !== 0; y--) {
      for (u = e.bl_count[y]; u !== 0;) {
        m = e.heap[--c];
        if (!(m > r)) {
          if (t[m * 2 + 1] !== y) {
            e.opt_len += (y - t[m * 2 + 1]) * t[m * 2];
            t[m * 2 + 1] = y;
          }
          u--;
        }
      }
    }
  }
};
const Xi = (e, n, t) => {
  const r = new Array(Ve + 1);
  let a = 0;
  let i;
  let s;
  for (i = 1; i <= Ve; i++) {
    a = a + t[i - 1] << 1;
    r[i] = a;
  }
  for (s = 0; s <= n; s++) {
    let o = e[s * 2 + 1];
    if (o !== 0) {
      e[s * 2] = Gi(r[o]++, o);
    }
  }
};
const Do = () => {
  let e;
  let n;
  let t;
  let r;
  let a;
  const i = new Array(Ve + 1);
  t = 0;
  r = 0;
  for (; r < dr - 1; r++) {
    wr[r] = t;
    e = 0;
    for (; e < 1 << Xn[r]; e++) {
      zt[t++] = r;
    }
  }
  zt[t - 1] = r;
  a = 0;
  r = 0;
  for (; r < 16; r++) {
    dn[r] = a;
    e = 0;
    for (; e < 1 << ln[r]; e++) {
      Nt[a++] = r;
    }
  }
  for (a >>= 7; r < ct; r++) {
    dn[r] = a << 7;
    e = 0;
    for (; e < 1 << ln[r] - 7; e++) {
      Nt[256 + a++] = r;
    }
  }
  for (n = 0; n <= Ve; n++) {
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
  Xi(Re, Rt + 1, i);
  e = 0;
  for (; e < ct; e++) {
    It[e * 2 + 1] = 5;
    It[e * 2] = Gi(e, 5);
  }
  Hi = new Tn(Re, Xn, jt + 1, Rt, Ve);
  Pi = new Tn(It, ln, 0, ct, Ve);
  Ki = new Tn(new Array(0), To, 0, _r, So);
};
const Yi = e => {
  let n;
  for (n = 0; n < Rt; n++) {
    e.dyn_ltree[n * 2] = 0;
  }
  for (n = 0; n < ct; n++) {
    e.dyn_dtree[n * 2] = 0;
  }
  for (n = 0; n < _r; n++) {
    e.bl_tree[n * 2] = 0;
  }
  e.dyn_ltree[pr * 2] = 1;
  e.opt_len = e.static_len = 0;
  e.sym_next = e.matches = 0;
};
const Vi = e => {
  if (e.bi_valid > 8) {
    Bt(e, e.bi_buf);
  } else if (e.bi_valid > 0) {
    e.pending_buf[e.pending++] = e.bi_buf;
  }
  e.bi_buf = 0;
  e.bi_valid = 0;
};
const Rr = (e, n, t, r) => {
  const a = n * 2;
  const i = t * 2;
  return e[a] < e[i] || e[a] === e[i] && r[n] <= r[t];
};
const In = (e, n, t) => {
  const r = e.heap[t];
  let a = t << 1;
  while (a <= e.heap_len && (a < e.heap_len && Rr(n, e.heap[a + 1], e.heap[a], e.depth) && a++, !Rr(n, r, e.heap[a], e.depth))) {
    e.heap[t] = e.heap[a];
    t = a;
    a <<= 1;
  }
  e.heap[t] = r;
};
const Nr = (e, n, t) => {
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
        ke(e, a, n);
      } else {
        s = zt[a];
        ke(e, s + jt + 1, n);
        o = Xn[s];
        if (o !== 0) {
          a -= wr[s];
          ce(e, a, o);
        }
        r--;
        s = ji(r);
        ke(e, s, t);
        o = ln[s];
        if (o !== 0) {
          r -= dn[s];
          ce(e, r, o);
        }
      }
    } while (i < e.sym_next);
  }
  ke(e, pr, n);
};
const Yn = (e, n) => {
  const t = n.dyn_tree;
  const r = n.stat_desc.static_tree;
  const a = n.stat_desc.has_stree;
  const i = n.stat_desc.elems;
  let s;
  let o;
  let p = -1;
  let c;
  e.heap_len = 0;
  e.heap_max = Oi;
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
    In(e, t, s);
  }
  c = i;
  do {
    s = e.heap[1];
    e.heap[1] = e.heap[e.heap_len--];
    In(e, t, 1);
    o = e.heap[1];
    e.heap[--e.heap_max] = s;
    e.heap[--e.heap_max] = o;
    t[c * 2] = t[s * 2] + t[o * 2];
    e.depth[c] = (e.depth[s] >= e.depth[o] ? e.depth[s] : e.depth[o]) + 1;
    t[s * 2 + 1] = t[o * 2 + 1] = c;
    e.heap[1] = c++;
    In(e, t, 1);
  } while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[1];
  Uo(e, n);
  Xi(t, p, e.bl_count);
};
const zr = (e, n, t) => {
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
        e.bl_tree[Mi * 2]++;
      } else if (o <= 10) {
        e.bl_tree[Li * 2]++;
      } else {
        e.bl_tree[$i * 2]++;
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
const Br = (e, n, t) => {
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
          ke(e, i, e.bl_tree);
        } while (--o !== 0);
      } else if (i !== 0) {
        if (i !== a) {
          ke(e, i, e.bl_tree);
          o--;
        }
        ke(e, Mi, e.bl_tree);
        ce(e, o - 3, 2);
      } else if (o <= 10) {
        ke(e, Li, e.bl_tree);
        ce(e, o - 3, 3);
      } else {
        ke(e, $i, e.bl_tree);
        ce(e, o - 11, 7);
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
const Co = e => {
  let n;
  zr(e, e.dyn_ltree, e.l_desc.max_code);
  zr(e, e.dyn_dtree, e.d_desc.max_code);
  Yn(e, e.bl_desc);
  n = _r - 1;
  for (; n >= 3 && e.bl_tree[Zi[n] * 2 + 1] === 0; n--);
  e.opt_len += (n + 1) * 3 + 5 + 5 + 4;
  return n;
};
const Ro = (e, n, t, r) => {
  let a;
  ce(e, n - 257, 5);
  ce(e, t - 1, 5);
  ce(e, r - 4, 4);
  a = 0;
  for (; a < r; a++) {
    ce(e, e.bl_tree[Zi[a] * 2 + 1], 3);
  }
  Br(e, e.dyn_ltree, n - 1);
  Br(e, e.dyn_dtree, t - 1);
};
const No = e => {
  let n = 4093624447;
  let t;
  for (t = 0; t <= 31; t++, n >>>= 1) {
    if (n & 1 && e.dyn_ltree[t * 2] !== 0) {
      return Dr;
    }
  }
  if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
    return Cr;
  }
  for (t = 32; t < jt; t++) {
    if (e.dyn_ltree[t * 2] !== 0) {
      return Cr;
    }
  }
  return Dr;
};
let Or = false;
const zo = e => {
  if (!Or) {
    Do();
    Or = true;
  }
  e.l_desc = new Fn(e.dyn_ltree, Hi);
  e.d_desc = new Fn(e.dyn_dtree, Pi);
  e.bl_desc = new Fn(e.bl_tree, Ki);
  e.bi_buf = 0;
  e.bi_valid = 0;
  Yi(e);
};
const Wi = (e, n, t, r) => {
  ce(e, (mo << 1) + (r ? 1 : 0), 3);
  Vi(e);
  Bt(e, t);
  Bt(e, ~t);
  if (t) {
    e.pending_buf.set(e.window.subarray(n, n + t), e.pending);
  }
  e.pending += t;
};
const Bo = e => {
  ce(e, Bi << 1, 3);
  ke(e, pr, Re);
  Io(e);
};
const Oo = (e, n, t, r) => {
  let a;
  let i;
  let s = 0;
  if (e.level > 0) {
    if (e.strm.data_type === vo) {
      e.strm.data_type = No(e);
    }
    Yn(e, e.l_desc);
    Yn(e, e.d_desc);
    s = Co(e);
    a = e.opt_len + 3 + 7 >>> 3;
    i = e.static_len + 3 + 7 >>> 3;
    if (i <= a) {
      a = i;
    }
  } else {
    a = i = t + 5;
  }
  if (t + 4 <= a && n !== -1) {
    Wi(e, n, t, r);
  } else if (e.strategy === yo || i === a) {
    ce(e, (Bi << 1) + (r ? 1 : 0), 3);
    Nr(e, Re, It);
  } else {
    ce(e, (Eo << 1) + (r ? 1 : 0), 3);
    Ro(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1);
    Nr(e, e.dyn_ltree, e.dyn_dtree);
  }
  Yi(e);
  if (r) {
    Vi(e);
  }
};
const Mo = (e, n, t) => {
  e.pending_buf[e.sym_buf + e.sym_next++] = n;
  e.pending_buf[e.sym_buf + e.sym_next++] = n >> 8;
  e.pending_buf[e.sym_buf + e.sym_next++] = t;
  if (n === 0) {
    e.dyn_ltree[t * 2]++;
  } else {
    e.matches++;
    n--;
    e.dyn_ltree[(zt[t] + jt + 1) * 2]++;
    e.dyn_dtree[ji(n) * 2]++;
  }
  return e.sym_next === e.sym_end;
};
var Lo = zo;
var $o = Wi;
var Zo = Oo;
var Ho = Mo;
var Po = Bo;
var Ko = {
  _tr_init: Lo,
  _tr_stored_block: $o,
  _tr_flush_block: Zo,
  _tr_tally: Ho,
  _tr_align: Po
};
const jo = (e, n, t, r) => {
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
var Ot = jo;
const Go = () => {
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
const Xo = new Uint32Array(Go());
const Yo = (e, n, t, r) => {
  const a = Xo;
  const i = r + t;
  e ^= -1;
  for (let s = r; s < i; s++) {
    e = e >>> 8 ^ a[(e ^ n[s]) & 255];
  }
  return e ^ -1;
};
var re = Yo;
var Qe = {
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
var bt = {
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
  _tr_init: Vo,
  _tr_stored_block: Vn,
  _tr_flush_block: Wo,
  _tr_tally: Ze,
  _tr_align: qo
} = Ko;
const {
  Z_NO_FLUSH: He,
  Z_PARTIAL_FLUSH: Jo,
  Z_FULL_FLUSH: Qo,
  Z_FINISH: ge,
  Z_BLOCK: Mr,
  Z_OK: oe,
  Z_STREAM_END: Lr,
  Z_STREAM_ERROR: Te,
  Z_DATA_ERROR: el,
  Z_BUF_ERROR: Un,
  Z_DEFAULT_COMPRESSION: tl,
  Z_FILTERED: nl,
  Z_HUFFMAN_ONLY: Qt,
  Z_RLE: rl,
  Z_FIXED: il,
  Z_DEFAULT_STRATEGY: al,
  Z_UNKNOWN: ol,
  Z_DEFLATED: bn
} = bt;
const ll = 9;
const fl = 15;
const sl = 8;
const cl = 29;
const ul = 256;
const Wn = ul + 1 + cl;
const hl = 30;
const dl = 19;
const _l = Wn * 2 + 1;
const pl = 15;
const Y = 3;
const $e = 258;
const Fe = $e + Y + 1;
const wl = 32;
const _t = 42;
const gr = 57;
const qn = 69;
const Jn = 73;
const Qn = 91;
const er = 103;
const We = 113;
const St = 666;
const se = 1;
const yt = 2;
const et = 3;
const vt = 4;
const gl = 3;
const qe = (e, n) => {
  e.msg = Qe[n];
  return n;
};
const $r = e => e * 2 - (e > 4 ? 9 : 0);
const Le = e => {
  let n = e.length;
  while (--n >= 0) {
    e[n] = 0;
  }
};
const xl = e => {
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
let bl = (e, n, t) => (n << e.hash_shift ^ t) & e.hash_mask;
let Pe = bl;
const he = e => {
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
const de = (e, n) => {
  Wo(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, n);
  e.block_start = e.strstart;
  he(e.strm);
};
const q = (e, n) => {
  e.pending_buf[e.pending++] = n;
};
const kt = (e, n) => {
  e.pending_buf[e.pending++] = n >>> 8 & 255;
  e.pending_buf[e.pending++] = n & 255;
};
const tr = (e, n, t, r) => {
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
      e.adler = Ot(e.adler, n, a, t);
    } else if (e.state.wrap === 2) {
      e.adler = re(e.adler, n, a, t);
    }
    e.next_in += a;
    e.total_in += a;
    return a;
  }
};
const qi = (e, n) => {
  let t = e.max_chain_length;
  let r = e.strstart;
  let a;
  let i;
  let s = e.prev_length;
  let o = e.nice_match;
  const p = e.strstart > e.w_size - Fe ? e.strstart - (e.w_size - Fe) : 0;
  const c = e.window;
  const u = e.w_mask;
  const m = e.prev;
  const y = e.strstart + $e;
  let x = c[r + s - 1];
  let D = c[r + s];
  if (e.prev_length >= e.good_match) {
    t >>= 2;
  }
  if (o > e.lookahead) {
    o = e.lookahead;
  }
  do {
    a = n;
    if (c[a + s] === D && c[a + s - 1] === x && c[a] === c[r] && c[++a] === c[r + 1]) {
      r += 2;
      a++;
      do ; while (c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && r < y);
      i = $e - (y - r);
      r = y - $e;
      if (i > s) {
        e.match_start = n;
        s = i;
        if (i >= o) {
          break;
        }
        x = c[r + s - 1];
        D = c[r + s];
      }
    }
  } while ((n = m[n & u]) > p && --t !== 0);
  if (s <= e.lookahead) {
    return s;
  } else {
    return e.lookahead;
  }
};
const pt = e => {
  const n = e.w_size;
  let t;
  let r;
  let a;
  do {
    r = e.window_size - e.lookahead - e.strstart;
    if (e.strstart >= n + (n - Fe)) {
      e.window.set(e.window.subarray(n, n + n - r), 0);
      e.match_start -= n;
      e.strstart -= n;
      e.block_start -= n;
      if (e.insert > e.strstart) {
        e.insert = e.strstart;
      }
      xl(e);
      r += n;
    }
    if (e.strm.avail_in === 0) {
      break;
    }
    t = tr(e.strm, e.window, e.strstart + e.lookahead, r);
    e.lookahead += t;
    if (e.lookahead + e.insert >= Y) {
      a = e.strstart - e.insert;
      e.ins_h = e.window[a];
      e.ins_h = Pe(e, e.ins_h, e.window[a + 1]);
      while (e.insert && (e.ins_h = Pe(e, e.ins_h, e.window[a + Y - 1]), e.prev[a & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = a, a++, e.insert--, !(e.lookahead + e.insert < Y)));
    }
  } while (e.lookahead < Fe && e.strm.avail_in !== 0);
};
const Ji = (e, n) => {
  let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5;
  let r;
  let a;
  let i;
  let s = 0;
  let o = e.strm.avail_in;
  do {
    r = 65535;
    i = e.bi_valid + 42 >> 3;
    if (e.strm.avail_out < i || (i = e.strm.avail_out - i, a = e.strstart - e.block_start, r > a + e.strm.avail_in && (r = a + e.strm.avail_in), r > i && (r = i), r < t && (r === 0 && n !== ge || n === He || r !== a + e.strm.avail_in))) {
      break;
    }
    s = n === ge && r === a + e.strm.avail_in ? 1 : 0;
    Vn(e, 0, 0, s);
    e.pending_buf[e.pending - 4] = r;
    e.pending_buf[e.pending - 3] = r >> 8;
    e.pending_buf[e.pending - 2] = ~r;
    e.pending_buf[e.pending - 1] = ~r >> 8;
    he(e.strm);
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
      tr(e.strm, e.strm.output, e.strm.next_out, r);
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
    return vt;
  } else if (n !== He && n !== ge && e.strm.avail_in === 0 && e.strstart === e.block_start) {
    return yt;
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
      tr(e.strm, e.window, e.strstart, i);
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
    if (a >= t || (a || n === ge) && n !== He && e.strm.avail_in === 0 && a <= i) {
      r = a > i ? i : a;
      s = n === ge && e.strm.avail_in === 0 && r === a ? 1 : 0;
      Vn(e, e.block_start, r, s);
      e.block_start += r;
      he(e.strm);
    }
    if (s) {
      return et;
    } else {
      return se;
    }
  }
};
const Dn = (e, n) => {
  let t;
  let r;
  while (true) {
    if (e.lookahead < Fe) {
      pt(e);
      if (e.lookahead < Fe && n === He) {
        return se;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    t = 0;
    if (e.lookahead >= Y) {
      e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + Y - 1]);
      t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    if (t !== 0 && e.strstart - t <= e.w_size - Fe) {
      e.match_length = qi(e, t);
    }
    if (e.match_length >= Y) {
      r = Ze(e, e.strstart - e.match_start, e.match_length - Y);
      e.lookahead -= e.match_length;
      if (e.match_length <= e.max_lazy_match && e.lookahead >= Y) {
        e.match_length--;
        do {
          e.strstart++;
          e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + Y - 1]);
          t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        } while (--e.match_length !== 0);
        e.strstart++;
      } else {
        e.strstart += e.match_length;
        e.match_length = 0;
        e.ins_h = e.window[e.strstart];
        e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + 1]);
      }
    } else {
      r = Ze(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (r && (de(e, false), e.strm.avail_out === 0)) {
      return se;
    }
  }
  e.insert = e.strstart < Y - 1 ? e.strstart : Y - 1;
  if (n === ge) {
    de(e, true);
    if (e.strm.avail_out === 0) {
      return et;
    } else {
      return vt;
    }
  } else if (e.sym_next && (de(e, false), e.strm.avail_out === 0)) {
    return se;
  } else {
    return yt;
  }
};
const ot = (e, n) => {
  let t;
  let r;
  let a;
  while (true) {
    if (e.lookahead < Fe) {
      pt(e);
      if (e.lookahead < Fe && n === He) {
        return se;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    t = 0;
    if (e.lookahead >= Y) {
      e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + Y - 1]);
      t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
      e.head[e.ins_h] = e.strstart;
    }
    e.prev_length = e.match_length;
    e.prev_match = e.match_start;
    e.match_length = Y - 1;
    if (t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - Fe) {
      e.match_length = qi(e, t);
      if (e.match_length <= 5 && (e.strategy === nl || e.match_length === Y && e.strstart - e.match_start > 4096)) {
        e.match_length = Y - 1;
      }
    }
    if (e.prev_length >= Y && e.match_length <= e.prev_length) {
      a = e.strstart + e.lookahead - Y;
      r = Ze(e, e.strstart - 1 - e.prev_match, e.prev_length - Y);
      e.lookahead -= e.prev_length - 1;
      e.prev_length -= 2;
      do {
        if (++e.strstart <= a) {
          e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + Y - 1]);
          t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
          e.head[e.ins_h] = e.strstart;
        }
      } while (--e.prev_length !== 0);
      e.match_available = 0;
      e.match_length = Y - 1;
      e.strstart++;
      if (r && (de(e, false), e.strm.avail_out === 0)) {
        return se;
      }
    } else if (e.match_available) {
      r = Ze(e, 0, e.window[e.strstart - 1]);
      if (r) {
        de(e, false);
      }
      e.strstart++;
      e.lookahead--;
      if (e.strm.avail_out === 0) {
        return se;
      }
    } else {
      e.match_available = 1;
      e.strstart++;
      e.lookahead--;
    }
  }
  if (e.match_available) {
    r = Ze(e, 0, e.window[e.strstart - 1]);
    e.match_available = 0;
  }
  e.insert = e.strstart < Y - 1 ? e.strstart : Y - 1;
  if (n === ge) {
    de(e, true);
    if (e.strm.avail_out === 0) {
      return et;
    } else {
      return vt;
    }
  } else if (e.sym_next && (de(e, false), e.strm.avail_out === 0)) {
    return se;
  } else {
    return yt;
  }
};
const yl = (e, n) => {
  let t;
  let r;
  let a;
  let i;
  const s = e.window;
  while (true) {
    if (e.lookahead <= $e) {
      pt(e);
      if (e.lookahead <= $e && n === He) {
        return se;
      }
      if (e.lookahead === 0) {
        break;
      }
    }
    e.match_length = 0;
    if (e.lookahead >= Y && e.strstart > 0 && (a = e.strstart - 1, r = s[a], r === s[++a] && r === s[++a] && r === s[++a])) {
      i = e.strstart + $e;
      do ; while (r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && a < i);
      e.match_length = $e - (i - a);
      if (e.match_length > e.lookahead) {
        e.match_length = e.lookahead;
      }
    }
    if (e.match_length >= Y) {
      t = Ze(e, 1, e.match_length - Y);
      e.lookahead -= e.match_length;
      e.strstart += e.match_length;
      e.match_length = 0;
    } else {
      t = Ze(e, 0, e.window[e.strstart]);
      e.lookahead--;
      e.strstart++;
    }
    if (t && (de(e, false), e.strm.avail_out === 0)) {
      return se;
    }
  }
  e.insert = 0;
  if (n === ge) {
    de(e, true);
    if (e.strm.avail_out === 0) {
      return et;
    } else {
      return vt;
    }
  } else if (e.sym_next && (de(e, false), e.strm.avail_out === 0)) {
    return se;
  } else {
    return yt;
  }
};
const vl = (e, n) => {
  let t;
  while (true) {
    if (e.lookahead === 0 && (pt(e), e.lookahead === 0)) {
      if (n === He) {
        return se;
      }
      break;
    }
    e.match_length = 0;
    t = Ze(e, 0, e.window[e.strstart]);
    e.lookahead--;
    e.strstart++;
    if (t && (de(e, false), e.strm.avail_out === 0)) {
      return se;
    }
  }
  e.insert = 0;
  if (n === ge) {
    de(e, true);
    if (e.strm.avail_out === 0) {
      return et;
    } else {
      return vt;
    }
  } else if (e.sym_next && (de(e, false), e.strm.avail_out === 0)) {
    return se;
  } else {
    return yt;
  }
};
function me(e, n, t, r, a) {
  this.good_length = e;
  this.max_lazy = n;
  this.nice_length = t;
  this.max_chain = r;
  this.func = a;
}
const Tt = [new me(0, 0, 0, 0, Ji), new me(4, 4, 8, 4, Dn), new me(4, 5, 16, 8, Dn), new me(4, 6, 32, 32, Dn), new me(4, 4, 16, 16, ot), new me(8, 16, 32, 32, ot), new me(8, 16, 128, 128, ot), new me(8, 32, 128, 256, ot), new me(32, 128, 258, 1024, ot), new me(32, 258, 258, 4096, ot)];
const ml = e => {
  e.window_size = e.w_size * 2;
  Le(e.head);
  e.max_lazy_match = Tt[e.level].max_lazy;
  e.good_match = Tt[e.level].good_length;
  e.nice_match = Tt[e.level].nice_length;
  e.max_chain_length = Tt[e.level].max_chain;
  e.strstart = 0;
  e.block_start = 0;
  e.lookahead = 0;
  e.insert = 0;
  e.match_length = e.prev_length = Y - 1;
  e.match_available = 0;
  e.ins_h = 0;
};
function El() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = bn;
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
  this.dyn_ltree = new Uint16Array(_l * 2);
  this.dyn_dtree = new Uint16Array((hl * 2 + 1) * 2);
  this.bl_tree = new Uint16Array((dl * 2 + 1) * 2);
  Le(this.dyn_ltree);
  Le(this.dyn_dtree);
  Le(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = new Uint16Array(pl + 1);
  this.heap = new Uint16Array(Wn * 2 + 1);
  Le(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = new Uint16Array(Wn * 2 + 1);
  Le(this.depth);
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
const Gt = e => {
  if (!e) {
    return 1;
  }
  const n = e.state;
  if (!n || n.strm !== e || n.status !== _t && n.status !== gr && n.status !== qn && n.status !== Jn && n.status !== Qn && n.status !== er && n.status !== We && n.status !== St) {
    return 1;
  } else {
    return 0;
  }
};
const Qi = e => {
  if (Gt(e)) {
    return qe(e, Te);
  }
  e.total_in = e.total_out = 0;
  e.data_type = ol;
  const n = e.state;
  n.pending = 0;
  n.pending_out = 0;
  if (n.wrap < 0) {
    n.wrap = -n.wrap;
  }
  n.status = n.wrap === 2 ? gr : n.wrap ? _t : We;
  e.adler = n.wrap === 2 ? 0 : 1;
  n.last_flush = -2;
  Vo(n);
  return oe;
};
const ea = e => {
  const n = Qi(e);
  if (n === oe) {
    ml(e.state);
  }
  return n;
};
const Al = (e, n) => Gt(e) || e.state.wrap !== 2 ? Te : (e.state.gzhead = n, oe);
const ta = (e, n, t, r, a, i) => {
  if (!e) {
    return Te;
  }
  let s = 1;
  if (n === tl) {
    n = 6;
  }
  if (r < 0) {
    s = 0;
    r = -r;
  } else if (r > 15) {
    s = 2;
    r -= 16;
  }
  if (a < 1 || a > ll || t !== bn || r < 8 || r > 15 || n < 0 || n > 9 || i < 0 || i > il || r === 8 && s !== 1) {
    return qe(e, Te);
  }
  if (r === 8) {
    r = 9;
  }
  const o = new El();
  e.state = o;
  o.strm = e;
  o.status = _t;
  o.wrap = s;
  o.gzhead = null;
  o.w_bits = r;
  o.w_size = 1 << o.w_bits;
  o.w_mask = o.w_size - 1;
  o.hash_bits = a + 7;
  o.hash_size = 1 << o.hash_bits;
  o.hash_mask = o.hash_size - 1;
  o.hash_shift = ~~((o.hash_bits + Y - 1) / Y);
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
  return ea(e);
};
const kl = (e, n) => ta(e, n, bn, fl, sl, al);
const Sl = (e, n) => {
  if (Gt(e) || n > Mr || n < 0) {
    if (e) {
      return qe(e, Te);
    } else {
      return Te;
    }
  }
  const t = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || t.status === St && n !== ge) {
    return qe(e, e.avail_out === 0 ? Un : Te);
  }
  const r = t.last_flush;
  t.last_flush = n;
  if (t.pending !== 0) {
    he(e);
    if (e.avail_out === 0) {
      t.last_flush = -1;
      return oe;
    }
  } else if (e.avail_in === 0 && $r(n) <= $r(r) && n !== ge) {
    return qe(e, Un);
  }
  if (t.status === St && e.avail_in !== 0) {
    return qe(e, Un);
  }
  if (t.status === _t && t.wrap === 0) {
    t.status = We;
  }
  if (t.status === _t) {
    let a = bn + (t.w_bits - 8 << 4) << 8;
    let i = -1;
    if (t.strategy >= Qt || t.level < 2) {
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
      a |= wl;
    }
    a += 31 - a % 31;
    kt(t, a);
    if (t.strstart !== 0) {
      kt(t, e.adler >>> 16);
      kt(t, e.adler & 65535);
    }
    e.adler = 1;
    t.status = We;
    he(e);
    if (t.pending !== 0) {
      t.last_flush = -1;
      return oe;
    }
  }
  if (t.status === gr) {
    e.adler = 0;
    q(t, 31);
    q(t, 139);
    q(t, 8);
    if (t.gzhead) {
      q(t, (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0));
      q(t, t.gzhead.time & 255);
      q(t, t.gzhead.time >> 8 & 255);
      q(t, t.gzhead.time >> 16 & 255);
      q(t, t.gzhead.time >> 24 & 255);
      q(t, t.level === 9 ? 2 : t.strategy >= Qt || t.level < 2 ? 4 : 0);
      q(t, t.gzhead.os & 255);
      if (t.gzhead.extra && t.gzhead.extra.length) {
        q(t, t.gzhead.extra.length & 255);
        q(t, t.gzhead.extra.length >> 8 & 255);
      }
      if (t.gzhead.hcrc) {
        e.adler = re(e.adler, t.pending_buf, t.pending, 0);
      }
      t.gzindex = 0;
      t.status = qn;
    } else {
      q(t, 0);
      q(t, 0);
      q(t, 0);
      q(t, 0);
      q(t, 0);
      q(t, t.level === 9 ? 2 : t.strategy >= Qt || t.level < 2 ? 4 : 0);
      q(t, gl);
      t.status = We;
      he(e);
      if (t.pending !== 0) {
        t.last_flush = -1;
        return oe;
      }
    }
  }
  if (t.status === qn) {
    if (t.gzhead.extra) {
      let a = t.pending;
      let i = (t.gzhead.extra.length & 65535) - t.gzindex;
      while (t.pending + i > t.pending_buf_size) {
        let o = t.pending_buf_size - t.pending;
        t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + o), t.pending);
        t.pending = t.pending_buf_size;
        if (t.gzhead.hcrc && t.pending > a) {
          e.adler = re(e.adler, t.pending_buf, t.pending - a, a);
        }
        t.gzindex += o;
        he(e);
        if (t.pending !== 0) {
          t.last_flush = -1;
          return oe;
        }
        a = 0;
        i -= o;
      }
      let s = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(s.subarray(t.gzindex, t.gzindex + i), t.pending);
      t.pending += i;
      if (t.gzhead.hcrc && t.pending > a) {
        e.adler = re(e.adler, t.pending_buf, t.pending - a, a);
      }
      t.gzindex = 0;
    }
    t.status = Jn;
  }
  if (t.status === Jn) {
    if (t.gzhead.name) {
      let a = t.pending;
      let i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > a) {
            e.adler = re(e.adler, t.pending_buf, t.pending - a, a);
          }
          he(e);
          if (t.pending !== 0) {
            t.last_flush = -1;
            return oe;
          }
          a = 0;
        }
        if (t.gzindex < t.gzhead.name.length) {
          i = t.gzhead.name.charCodeAt(t.gzindex++) & 255;
        } else {
          i = 0;
        }
        q(t, i);
      } while (i !== 0);
      if (t.gzhead.hcrc && t.pending > a) {
        e.adler = re(e.adler, t.pending_buf, t.pending - a, a);
      }
      t.gzindex = 0;
    }
    t.status = Qn;
  }
  if (t.status === Qn) {
    if (t.gzhead.comment) {
      let a = t.pending;
      let i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > a) {
            e.adler = re(e.adler, t.pending_buf, t.pending - a, a);
          }
          he(e);
          if (t.pending !== 0) {
            t.last_flush = -1;
            return oe;
          }
          a = 0;
        }
        if (t.gzindex < t.gzhead.comment.length) {
          i = t.gzhead.comment.charCodeAt(t.gzindex++) & 255;
        } else {
          i = 0;
        }
        q(t, i);
      } while (i !== 0);
      if (t.gzhead.hcrc && t.pending > a) {
        e.adler = re(e.adler, t.pending_buf, t.pending - a, a);
      }
    }
    t.status = er;
  }
  if (t.status === er) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (he(e), t.pending !== 0)) {
        t.last_flush = -1;
        return oe;
      }
      q(t, e.adler & 255);
      q(t, e.adler >> 8 & 255);
      e.adler = 0;
    }
    t.status = We;
    he(e);
    if (t.pending !== 0) {
      t.last_flush = -1;
      return oe;
    }
  }
  if (e.avail_in !== 0 || t.lookahead !== 0 || n !== He && t.status !== St) {
    let a = t.level === 0 ? Ji(t, n) : t.strategy === Qt ? vl(t, n) : t.strategy === rl ? yl(t, n) : Tt[t.level].func(t, n);
    if (a === et || a === vt) {
      t.status = St;
    }
    if (a === se || a === et) {
      if (e.avail_out === 0) {
        t.last_flush = -1;
      }
      return oe;
    }
    if (a === yt && (n === Jo ? qo(t) : n !== Mr && (Vn(t, 0, 0, false), n === Qo && (Le(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), he(e), e.avail_out === 0)) {
      t.last_flush = -1;
      return oe;
    }
  }
  if (n !== ge) {
    return oe;
  } else if (t.wrap <= 0) {
    return Lr;
  } else {
    if (t.wrap === 2) {
      q(t, e.adler & 255);
      q(t, e.adler >> 8 & 255);
      q(t, e.adler >> 16 & 255);
      q(t, e.adler >> 24 & 255);
      q(t, e.total_in & 255);
      q(t, e.total_in >> 8 & 255);
      q(t, e.total_in >> 16 & 255);
      q(t, e.total_in >> 24 & 255);
    } else {
      kt(t, e.adler >>> 16);
      kt(t, e.adler & 65535);
    }
    he(e);
    if (t.wrap > 0) {
      t.wrap = -t.wrap;
    }
    if (t.pending !== 0) {
      return oe;
    } else {
      return Lr;
    }
  }
};
const Tl = e => {
  if (Gt(e)) {
    return Te;
  }
  const n = e.state.status;
  e.state = null;
  if (n === We) {
    return qe(e, el);
  } else {
    return oe;
  }
};
const Fl = (e, n) => {
  let t = n.length;
  if (Gt(e)) {
    return Te;
  }
  const r = e.state;
  const a = r.wrap;
  if (a === 2 || a === 1 && r.status !== _t || r.lookahead) {
    return Te;
  }
  if (a === 1) {
    e.adler = Ot(e.adler, n, t, 0);
  }
  r.wrap = 0;
  if (t >= r.w_size) {
    if (a === 0) {
      Le(r.head);
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
  pt(r);
  while (r.lookahead >= Y) {
    let p = r.strstart;
    let c = r.lookahead - (Y - 1);
    do {
      r.ins_h = Pe(r, r.ins_h, r.window[p + Y - 1]);
      r.prev[p & r.w_mask] = r.head[r.ins_h];
      r.head[r.ins_h] = p;
      p++;
    } while (--c);
    r.strstart = p;
    r.lookahead = Y - 1;
    pt(r);
  }
  r.strstart += r.lookahead;
  r.block_start = r.strstart;
  r.insert = r.lookahead;
  r.lookahead = 0;
  r.match_length = r.prev_length = Y - 1;
  r.match_available = 0;
  e.next_in = s;
  e.input = o;
  e.avail_in = i;
  r.wrap = a;
  return oe;
};
var Il = kl;
var Ul = ta;
var Dl = ea;
var Cl = Qi;
var Rl = Al;
var Nl = Sl;
var zl = Tl;
var Bl = Fl;
var Ol = "pako deflate (from Nodeca project)";
var Ut = {
  deflateInit: Il,
  deflateInit2: Ul,
  deflateReset: Dl,
  deflateResetKeep: Cl,
  deflateSetHeader: Rl,
  deflate: Nl,
  deflateEnd: zl,
  deflateSetDictionary: Bl,
  deflateInfo: Ol
};
const Ml = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
function Ll(e) {
  const n = Array.prototype.slice.call(arguments, 1);
  while (n.length) {
    const t = n.shift();
    if (t) {
      if (typeof t != "object") {
        throw new TypeError(t + "must be non-object");
      }
      for (const r in t) {
        if (Ml(t, r)) {
          e[r] = t[r];
        }
      }
    }
  }
  return e;
}
var $l = e => {
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
var yn = {
  assign: Ll,
  flattenChunks: $l
};
let na = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  na = false;
}
const Mt = new Uint8Array(256);
for (let e = 0; e < 256; e++) {
  Mt[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}
Mt[254] = Mt[254] = 1;
var Zl = e => {
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
const Hl = (e, n) => {
  if (n < 65534 && e.subarray && na) {
    return String.fromCharCode.apply(null, e.length === n ? e : e.subarray(0, n));
  }
  let t = "";
  for (let r = 0; r < n; r++) {
    t += String.fromCharCode(e[r]);
  }
  return t;
};
var Pl = (e, n) => {
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
    let o = Mt[s];
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
  return Hl(i, a);
};
var Kl = (e, n) => {
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
  } else if (t + Mt[e[t]] > n) {
    return t;
  } else {
    return n;
  }
};
var Lt = {
  string2buf: Zl,
  buf2string: Pl,
  utf8border: Kl
};
function jl() {
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
var ra = jl;
const ia = Object.prototype.toString;
const {
  Z_NO_FLUSH: Gl,
  Z_SYNC_FLUSH: Xl,
  Z_FULL_FLUSH: Yl,
  Z_FINISH: Vl,
  Z_OK: _n,
  Z_STREAM_END: Wl,
  Z_DEFAULT_COMPRESSION: ql,
  Z_DEFAULT_STRATEGY: Jl,
  Z_DEFLATED: Ql
} = bt;
function Xt(e) {
  this.options = yn.assign({
    level: ql,
    method: Ql,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Jl
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
  this.strm = new ra();
  this.strm.avail_out = 0;
  let t = Ut.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
  if (t !== _n) {
    throw new Error(Qe[t]);
  }
  if (n.header) {
    Ut.deflateSetHeader(this.strm, n.header);
  }
  if (n.dictionary) {
    let r;
    if (typeof n.dictionary == "string") {
      r = Lt.string2buf(n.dictionary);
    } else if (ia.call(n.dictionary) === "[object ArrayBuffer]") {
      r = new Uint8Array(n.dictionary);
    } else {
      r = n.dictionary;
    }
    t = Ut.deflateSetDictionary(this.strm, r);
    if (t !== _n) {
      throw new Error(Qe[t]);
    }
    this._dict_set = true;
  }
}
Xt.prototype.push = function (e, n) {
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
    i = n === true ? Vl : Gl;
  }
  if (typeof e == "string") {
    t.input = Lt.string2buf(e);
  } else if (ia.call(e) === "[object ArrayBuffer]") {
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
    if ((i === Xl || i === Yl) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out));
      t.avail_out = 0;
      continue;
    }
    a = Ut.deflate(t, i);
    if (a === Wl) {
      if (t.next_out > 0) {
        this.onData(t.output.subarray(0, t.next_out));
      }
      a = Ut.deflateEnd(this.strm);
      this.onEnd(a);
      this.ended = true;
      return a === _n;
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
Xt.prototype.onData = function (e) {
  this.chunks.push(e);
};
Xt.prototype.onEnd = function (e) {
  if (e === _n) {
    this.result = yn.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
function xr(e, n) {
  const t = new Xt(n);
  t.push(e, true);
  if (t.err) {
    throw t.msg || Qe[t.err];
  }
  return t.result;
}
function ef(e, n) {
  n = n || {};
  n.raw = true;
  return xr(e, n);
}
function tf(e, n) {
  n = n || {};
  n.gzip = true;
  return xr(e, n);
}
var nf = Xt;
var rf = xr;
var af = ef;
var of = tf;
var lf = bt;
var ff = {
  Deflate: nf,
  deflate: rf,
  deflateRaw: af,
  gzip: of,
  constants: lf
};
const en = 16209;
const sf = 16191;
function cf(n, t) {
  let r;
  let a;
  let i;
  let s;
  let o;
  let p;
  let c;
  let u;
  let m;
  let y;
  let x;
  let D;
  let O;
  let $;
  let M;
  let P;
  let L;
  let U;
  let Z;
  let V;
  let B;
  let W;
  let j;
  let N;
  const K = n.state;
  r = n.next_in;
  j = n.input;
  a = r + (n.avail_in - 5);
  i = n.next_out;
  N = n.output;
  s = i - (t - n.avail_out);
  o = i + (n.avail_out - 257);
  p = K.dmax;
  c = K.wsize;
  u = K.whave;
  m = K.wnext;
  y = K.window;
  x = K.hold;
  D = K.bits;
  O = K.lencode;
  $ = K.distcode;
  M = (1 << K.lenbits) - 1;
  P = (1 << K.distbits) - 1;
  e: do {
    if (D < 15) {
      x += j[r++] << D;
      D += 8;
      x += j[r++] << D;
      D += 8;
    }
    L = O[x & M];
    t: while (true) {
      U = L >>> 24;
      x >>>= U;
      D -= U;
      U = L >>> 16 & 255;
      if (U === 0) {
        N[i++] = L & 65535;
      } else if (U & 16) {
        Z = L & 65535;
        U &= 15;
        if (U) {
          if (D < U) {
            x += j[r++] << D;
            D += 8;
          }
          Z += x & (1 << U) - 1;
          x >>>= U;
          D -= U;
        }
        if (D < 15) {
          x += j[r++] << D;
          D += 8;
          x += j[r++] << D;
          D += 8;
        }
        L = $[x & P];
        n: while (true) {
          U = L >>> 24;
          x >>>= U;
          D -= U;
          U = L >>> 16 & 255;
          if (U & 16) {
            V = L & 65535;
            U &= 15;
            if (D < U) {
              x += j[r++] << D;
              D += 8;
              if (D < U) {
                x += j[r++] << D;
                D += 8;
              }
            }
            V += x & (1 << U) - 1;
            if (V > p) {
              n.msg = "invalid distance too far back";
              K.mode = en;
              break e;
            }
            x >>>= U;
            D -= U;
            U = i - s;
            if (V > U) {
              U = V - U;
              if (U > u && K.sane) {
                n.msg = "invalid distance too far back";
                K.mode = en;
                break e;
              }
              B = 0;
              W = y;
              if (m === 0) {
                B += c - U;
                if (U < Z) {
                  Z -= U;
                  do {
                    N[i++] = y[B++];
                  } while (--U);
                  B = i - V;
                  W = N;
                }
              } else if (m < U) {
                B += c + m - U;
                U -= m;
                if (U < Z) {
                  Z -= U;
                  do {
                    N[i++] = y[B++];
                  } while (--U);
                  B = 0;
                  if (m < Z) {
                    U = m;
                    Z -= U;
                    do {
                      N[i++] = y[B++];
                    } while (--U);
                    B = i - V;
                    W = N;
                  }
                }
              } else {
                B += m - U;
                if (U < Z) {
                  Z -= U;
                  do {
                    N[i++] = y[B++];
                  } while (--U);
                  B = i - V;
                  W = N;
                }
              }
              while (Z > 2) {
                N[i++] = W[B++];
                N[i++] = W[B++];
                N[i++] = W[B++];
                Z -= 3;
              }
              if (Z) {
                N[i++] = W[B++];
                if (Z > 1) {
                  N[i++] = W[B++];
                }
              }
            } else {
              B = i - V;
              do {
                N[i++] = N[B++];
                N[i++] = N[B++];
                N[i++] = N[B++];
                Z -= 3;
              } while (Z > 2);
              if (Z) {
                N[i++] = N[B++];
                if (Z > 1) {
                  N[i++] = N[B++];
                }
              }
            }
          } else if (U & 64) {
            n.msg = "invalid distance code";
            K.mode = en;
            break e;
          } else {
            L = $[(L & 65535) + (x & (1 << U) - 1)];
            continue n;
          }
          break;
        }
      } else if (U & 64) {
        if (U & 32) {
          K.mode = sf;
          break e;
        } else {
          n.msg = "invalid literal/length code";
          K.mode = en;
          break e;
        }
      } else {
        L = O[(L & 65535) + (x & (1 << U) - 1)];
        continue t;
      }
      break;
    }
  } while (r < a && i < o);
  Z = D >> 3;
  r -= Z;
  D -= Z << 3;
  x &= (1 << D) - 1;
  n.next_in = r;
  n.next_out = i;
  n.avail_in = r < a ? 5 + (a - r) : 5 - (r - a);
  n.avail_out = i < o ? 257 + (o - i) : 257 - (i - o);
  K.hold = x;
  K.bits = D;
}
const lt = 15;
const Zr = 852;
const Hr = 592;
const Pr = 0;
const Cn = 1;
const Kr = 2;
const uf = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
const hf = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
const df = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
const _f = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
const pf = (e, n, t, r, a, i, s, o) => {
  const p = o.bits;
  let c = 0;
  let u = 0;
  let m = 0;
  let y = 0;
  let x = 0;
  let D = 0;
  let O = 0;
  let $ = 0;
  let M = 0;
  let P = 0;
  let L;
  let U;
  let Z;
  let V;
  let B;
  let W = null;
  let j;
  const N = new Uint16Array(lt + 1);
  const K = new Uint16Array(lt + 1);
  let _e = null;
  let rt;
  let Ie;
  let Ue;
  for (c = 0; c <= lt; c++) {
    N[c] = 0;
  }
  for (u = 0; u < r; u++) {
    N[n[t + u]]++;
  }
  x = p;
  y = lt;
  for (; y >= 1 && N[y] === 0; y--);
  if (x > y) {
    x = y;
  }
  if (y === 0) {
    a[i++] = 20971520;
    a[i++] = 20971520;
    o.bits = 1;
    return 0;
  }
  for (m = 1; m < y && N[m] === 0; m++);
  if (x < m) {
    x = m;
  }
  $ = 1;
  c = 1;
  for (; c <= lt; c++) {
    $ <<= 1;
    $ -= N[c];
    if ($ < 0) {
      return -1;
    }
  }
  if ($ > 0 && (e === Pr || y !== 1)) {
    return -1;
  }
  K[1] = 0;
  c = 1;
  for (; c < lt; c++) {
    K[c + 1] = K[c] + N[c];
  }
  for (u = 0; u < r; u++) {
    if (n[t + u] !== 0) {
      s[K[n[t + u]]++] = u;
    }
  }
  if (e === Pr) {
    W = _e = s;
    j = 20;
  } else if (e === Cn) {
    W = uf;
    _e = hf;
    j = 257;
  } else {
    W = df;
    _e = _f;
    j = 0;
  }
  P = 0;
  u = 0;
  c = m;
  B = i;
  D = x;
  O = 0;
  Z = -1;
  M = 1 << x;
  V = M - 1;
  if (e === Cn && M > Zr || e === Kr && M > Hr) {
    return 1;
  }
  while (true) {
    rt = c - O;
    if (s[u] + 1 < j) {
      Ie = 0;
      Ue = s[u];
    } else if (s[u] >= j) {
      Ie = _e[s[u] - j];
      Ue = W[s[u] - j];
    } else {
      Ie = 96;
      Ue = 0;
    }
    L = 1 << c - O;
    U = 1 << D;
    m = U;
    do {
      U -= L;
      a[B + (P >> O) + U] = rt << 24 | Ie << 16 | Ue | 0;
    } while (U !== 0);
    for (L = 1 << c - 1; P & L;) {
      L >>= 1;
    }
    if (L !== 0) {
      P &= L - 1;
      P += L;
    } else {
      P = 0;
    }
    u++;
    if (--N[c] === 0) {
      if (c === y) {
        break;
      }
      c = n[t + s[u]];
    }
    if (c > x && (P & V) !== Z) {
      if (O === 0) {
        O = x;
      }
      B += m;
      D = c - O;
      $ = 1 << D;
      while (D + O < y && ($ -= N[D + O], !($ <= 0))) {
        D++;
        $ <<= 1;
      }
      M += 1 << D;
      if (e === Cn && M > Zr || e === Kr && M > Hr) {
        return 1;
      }
      Z = P & V;
      a[Z] = x << 24 | D << 16 | B - i | 0;
    }
  }
  if (P !== 0) {
    a[B + P] = c - O << 24 | 4194304 | 0;
  }
  o.bits = x;
  return 0;
};
var Dt = pf;
const wf = 0;
const aa = 1;
const oa = 2;
const {
  Z_FINISH: jr,
  Z_BLOCK: gf,
  Z_TREES: tn,
  Z_OK: tt,
  Z_STREAM_END: xf,
  Z_NEED_DICT: bf,
  Z_STREAM_ERROR: be,
  Z_DATA_ERROR: la,
  Z_MEM_ERROR: fa,
  Z_BUF_ERROR: yf,
  Z_DEFLATED: Gr
} = bt;
const vn = 16180;
const Xr = 16181;
const Yr = 16182;
const Vr = 16183;
const Wr = 16184;
const qr = 16185;
const Jr = 16186;
const Qr = 16187;
const ei = 16188;
const ti = 16189;
const pn = 16190;
const Ce = 16191;
const Rn = 16192;
const ni = 16193;
const Nn = 16194;
const ri = 16195;
const ii = 16196;
const ai = 16197;
const oi = 16198;
const nn = 16199;
const rn = 16200;
const li = 16201;
const fi = 16202;
const si = 16203;
const ci = 16204;
const ui = 16205;
const zn = 16206;
const hi = 16207;
const di = 16208;
const Q = 16209;
const sa = 16210;
const ca = 16211;
const vf = 852;
const mf = 592;
const Ef = 15;
const Af = Ef;
const _i = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function kf() {
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
const nt = e => {
  if (!e) {
    return 1;
  }
  const n = e.state;
  if (!n || n.strm !== e || n.mode < vn || n.mode > ca) {
    return 1;
  } else {
    return 0;
  }
};
const ua = e => {
  if (nt(e)) {
    return be;
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
  n.lencode = n.lendyn = new Int32Array(vf);
  n.distcode = n.distdyn = new Int32Array(mf);
  n.sane = 1;
  n.back = -1;
  return tt;
};
const ha = e => {
  if (nt(e)) {
    return be;
  }
  const n = e.state;
  n.wsize = 0;
  n.whave = 0;
  n.wnext = 0;
  return ua(e);
};
const da = (e, n) => {
  let t;
  if (nt(e)) {
    return be;
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
    return be;
  } else {
    if (r.window !== null && r.wbits !== n) {
      r.window = null;
    }
    r.wrap = t;
    r.wbits = n;
    return ha(e);
  }
};
const _a = (e, n) => {
  if (!e) {
    return be;
  }
  const t = new kf();
  e.state = t;
  t.strm = e;
  t.window = null;
  t.mode = vn;
  const r = da(e, n);
  if (r !== tt) {
    e.state = null;
  }
  return r;
};
const Sf = e => _a(e, Af);
let pi = true;
let Bn;
let On;
const Tf = e => {
  if (pi) {
    Bn = new Int32Array(512);
    On = new Int32Array(32);
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
    Dt(aa, e.lens, 0, 288, Bn, 0, e.work, {
      bits: 9
    });
    n = 0;
    while (n < 32) {
      e.lens[n++] = 5;
    }
    Dt(oa, e.lens, 0, 32, On, 0, e.work, {
      bits: 5
    });
    pi = false;
  }
  e.lencode = Bn;
  e.lenbits = 9;
  e.distcode = On;
  e.distbits = 5;
};
const pa = (e, n, t, r) => {
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
const Ff = (e, n) => {
  let t;
  let r;
  let a;
  let i;
  let s;
  let o;
  let p;
  let c;
  let u;
  let m;
  let y;
  let x;
  let D;
  let O;
  let $ = 0;
  let M;
  let P;
  let L;
  let U;
  let Z;
  let V;
  let B;
  let W;
  const j = new Uint8Array(4);
  let N;
  let K;
  const _e = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  if (nt(e) || !e.output || !e.input && e.avail_in !== 0) {
    return be;
  }
  t = e.state;
  if (t.mode === Ce) {
    t.mode = Rn;
  }
  s = e.next_out;
  a = e.output;
  p = e.avail_out;
  i = e.next_in;
  r = e.input;
  o = e.avail_in;
  c = t.hold;
  u = t.bits;
  m = o;
  y = p;
  W = tt;
  e: while (true) {
    switch (t.mode) {
      case vn:
        if (t.wrap === 0) {
          t.mode = Rn;
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
          j[0] = c & 255;
          j[1] = c >>> 8 & 255;
          t.check = re(t.check, j, 2, 0);
          c = 0;
          u = 0;
          t.mode = Xr;
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
        if ((c & 15) !== Gr) {
          e.msg = "unknown compression method";
          t.mode = Q;
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
          t.mode = Q;
          break;
        }
        t.dmax = 1 << t.wbits;
        t.flags = 0;
        e.adler = t.check = 1;
        t.mode = c & 512 ? ti : Ce;
        c = 0;
        u = 0;
        break;
      case Xr:
        while (u < 16) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        t.flags = c;
        if ((t.flags & 255) !== Gr) {
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
          j[0] = c & 255;
          j[1] = c >>> 8 & 255;
          t.check = re(t.check, j, 2, 0);
        }
        c = 0;
        u = 0;
        t.mode = Yr;
      case Yr:
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
          j[0] = c & 255;
          j[1] = c >>> 8 & 255;
          j[2] = c >>> 16 & 255;
          j[3] = c >>> 24 & 255;
          t.check = re(t.check, j, 4, 0);
        }
        c = 0;
        u = 0;
        t.mode = Vr;
      case Vr:
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
          j[0] = c & 255;
          j[1] = c >>> 8 & 255;
          t.check = re(t.check, j, 2, 0);
        }
        c = 0;
        u = 0;
        t.mode = Wr;
      case Wr:
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
            j[0] = c & 255;
            j[1] = c >>> 8 & 255;
            t.check = re(t.check, j, 2, 0);
          }
          c = 0;
          u = 0;
        } else if (t.head) {
          t.head.extra = null;
        }
        t.mode = qr;
      case qr:
        if (t.flags & 1024 && (x = t.length, x > o && (x = o), x && (t.head && (B = t.head.extra_len - t.length, t.head.extra ||= new Uint8Array(t.head.extra_len), t.head.extra.set(r.subarray(i, i + x), B)), t.flags & 512 && t.wrap & 4 && (t.check = re(t.check, r, x, i)), o -= x, i += x, t.length -= x), t.length)) {
          break e;
        }
        t.length = 0;
        t.mode = Jr;
      case Jr:
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
            t.check = re(t.check, r, x, i);
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
        t.mode = Qr;
      case Qr:
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
            t.check = re(t.check, r, x, i);
          }
          o -= x;
          i += x;
          if (B) {
            break e;
          }
        } else if (t.head) {
          t.head.comment = null;
        }
        t.mode = ei;
      case ei:
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
        t.mode = Ce;
        break;
      case ti:
        while (u < 32) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        e.adler = t.check = _i(c);
        c = 0;
        u = 0;
        t.mode = pn;
      case pn:
        if (t.havedict === 0) {
          e.next_out = s;
          e.avail_out = p;
          e.next_in = i;
          e.avail_in = o;
          t.hold = c;
          t.bits = u;
          return bf;
        }
        e.adler = t.check = 1;
        t.mode = Ce;
      case Ce:
        if (n === gf || n === tn) {
          break e;
        }
      case Rn:
        if (t.last) {
          c >>>= u & 7;
          u -= u & 7;
          t.mode = zn;
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
            t.mode = ni;
            break;
          case 1:
            Tf(t);
            t.mode = nn;
            if (n === tn) {
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
          if (o === 0) {
            break e;
          }
          o--;
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
        t.mode = Nn;
        if (n === tn) {
          break e;
        }
      case Nn:
        t.mode = ri;
      case ri:
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
        t.mode = Ce;
        break;
      case ii:
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
          t.mode = Q;
          break;
        }
        t.have = 0;
        t.mode = ai;
      case ai:
        while (t.have < t.ncode) {
          while (u < 3) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          t.lens[_e[t.have++]] = c & 7;
          c >>>= 3;
          u -= 3;
        }
        while (t.have < 19) {
          t.lens[_e[t.have++]] = 0;
        }
        t.lencode = t.lendyn;
        t.lenbits = 7;
        N = {
          bits: t.lenbits
        };
        W = Dt(wf, t.lens, 0, 19, t.lencode, 0, t.work, N);
        t.lenbits = N.bits;
        if (W) {
          e.msg = "invalid code lengths set";
          t.mode = Q;
          break;
        }
        t.have = 0;
        t.mode = oi;
      case oi:
        while (t.have < t.nlen + t.ndist) {
          while ($ = t.lencode[c & (1 << t.lenbits) - 1], M = $ >>> 24, P = $ >>> 16 & 255, L = $ & 65535, !(M <= u)) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          if (L < 16) {
            c >>>= M;
            u -= M;
            t.lens[t.have++] = L;
          } else {
            if (L === 16) {
              for (K = M + 2; u < K;) {
                if (o === 0) {
                  break e;
                }
                o--;
                c += r[i++] << u;
                u += 8;
              }
              c >>>= M;
              u -= M;
              if (t.have === 0) {
                e.msg = "invalid bit length repeat";
                t.mode = Q;
                break;
              }
              B = t.lens[t.have - 1];
              x = 3 + (c & 3);
              c >>>= 2;
              u -= 2;
            } else if (L === 17) {
              for (K = M + 3; u < K;) {
                if (o === 0) {
                  break e;
                }
                o--;
                c += r[i++] << u;
                u += 8;
              }
              c >>>= M;
              u -= M;
              B = 0;
              x = 3 + (c & 7);
              c >>>= 3;
              u -= 3;
            } else {
              for (K = M + 7; u < K;) {
                if (o === 0) {
                  break e;
                }
                o--;
                c += r[i++] << u;
                u += 8;
              }
              c >>>= M;
              u -= M;
              B = 0;
              x = 11 + (c & 127);
              c >>>= 7;
              u -= 7;
            }
            if (t.have + x > t.nlen + t.ndist) {
              e.msg = "invalid bit length repeat";
              t.mode = Q;
              break;
            }
            while (x--) {
              t.lens[t.have++] = B;
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
        N = {
          bits: t.lenbits
        };
        W = Dt(aa, t.lens, 0, t.nlen, t.lencode, 0, t.work, N);
        t.lenbits = N.bits;
        if (W) {
          e.msg = "invalid literal/lengths set";
          t.mode = Q;
          break;
        }
        t.distbits = 6;
        t.distcode = t.distdyn;
        N = {
          bits: t.distbits
        };
        W = Dt(oa, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, N);
        t.distbits = N.bits;
        if (W) {
          e.msg = "invalid distances set";
          t.mode = Q;
          break;
        }
        t.mode = nn;
        if (n === tn) {
          break e;
        }
      case nn:
        t.mode = rn;
      case rn:
        if (o >= 6 && p >= 258) {
          e.next_out = s;
          e.avail_out = p;
          e.next_in = i;
          e.avail_in = o;
          t.hold = c;
          t.bits = u;
          cf(e, y);
          s = e.next_out;
          a = e.output;
          p = e.avail_out;
          i = e.next_in;
          r = e.input;
          o = e.avail_in;
          c = t.hold;
          u = t.bits;
          if (t.mode === Ce) {
            t.back = -1;
          }
          break;
        }
        for (t.back = 0; $ = t.lencode[c & (1 << t.lenbits) - 1], M = $ >>> 24, P = $ >>> 16 & 255, L = $ & 65535, !(M <= u);) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        if (P && !(P & 240)) {
          U = M;
          Z = P;
          V = L;
          while ($ = t.lencode[V + ((c & (1 << U + Z) - 1) >> U)], M = $ >>> 24, P = $ >>> 16 & 255, L = $ & 65535, !(U + M <= u)) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          c >>>= U;
          u -= U;
          t.back += U;
        }
        c >>>= M;
        u -= M;
        t.back += M;
        t.length = L;
        if (P === 0) {
          t.mode = ui;
          break;
        }
        if (P & 32) {
          t.back = -1;
          t.mode = Ce;
          break;
        }
        if (P & 64) {
          e.msg = "invalid literal/length code";
          t.mode = Q;
          break;
        }
        t.extra = P & 15;
        t.mode = li;
      case li:
        if (t.extra) {
          for (K = t.extra; u < K;) {
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
        t.mode = fi;
      case fi:
        while ($ = t.distcode[c & (1 << t.distbits) - 1], M = $ >>> 24, P = $ >>> 16 & 255, L = $ & 65535, !(M <= u)) {
          if (o === 0) {
            break e;
          }
          o--;
          c += r[i++] << u;
          u += 8;
        }
        if (!(P & 240)) {
          U = M;
          Z = P;
          V = L;
          while ($ = t.distcode[V + ((c & (1 << U + Z) - 1) >> U)], M = $ >>> 24, P = $ >>> 16 & 255, L = $ & 65535, !(U + M <= u)) {
            if (o === 0) {
              break e;
            }
            o--;
            c += r[i++] << u;
            u += 8;
          }
          c >>>= U;
          u -= U;
          t.back += U;
        }
        c >>>= M;
        u -= M;
        t.back += M;
        if (P & 64) {
          e.msg = "invalid distance code";
          t.mode = Q;
          break;
        }
        t.offset = L;
        t.extra = P & 15;
        t.mode = si;
      case si:
        if (t.extra) {
          for (K = t.extra; u < K;) {
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
          t.mode = Q;
          break;
        }
        t.mode = ci;
      case ci:
        if (p === 0) {
          break e;
        }
        x = y - p;
        if (t.offset > x) {
          x = t.offset - x;
          if (x > t.whave && t.sane) {
            e.msg = "invalid distance too far back";
            t.mode = Q;
            break;
          }
          if (x > t.wnext) {
            x -= t.wnext;
            D = t.wsize - x;
          } else {
            D = t.wnext - x;
          }
          if (x > t.length) {
            x = t.length;
          }
          O = t.window;
        } else {
          O = a;
          D = s - t.offset;
          x = t.length;
        }
        if (x > p) {
          x = p;
        }
        p -= x;
        t.length -= x;
        do {
          a[s++] = O[D++];
        } while (--x);
        if (t.length === 0) {
          t.mode = rn;
        }
        break;
      case ui:
        if (p === 0) {
          break e;
        }
        a[s++] = t.length;
        p--;
        t.mode = rn;
        break;
      case zn:
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
            e.adler = t.check = t.flags ? re(t.check, a, y, s - y) : Ot(t.check, a, y, s - y);
          }
          y = p;
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
            if (o === 0) {
              break e;
            }
            o--;
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
        W = xf;
        break e;
      case Q:
        W = la;
        break e;
      case sa:
        return fa;
      case ca:
      default:
        return be;
    }
  }
  e.next_out = s;
  e.avail_out = p;
  e.next_in = i;
  e.avail_in = o;
  t.hold = c;
  t.bits = u;
  if (t.wsize || y !== e.avail_out && t.mode < Q && (t.mode < zn || n !== jr)) {
    pa(e, e.output, e.next_out, y - e.avail_out);
  }
  m -= e.avail_in;
  y -= e.avail_out;
  e.total_in += m;
  e.total_out += y;
  t.total += y;
  if (t.wrap & 4 && y) {
    e.adler = t.check = t.flags ? re(t.check, a, y, e.next_out - y) : Ot(t.check, a, y, e.next_out - y);
  }
  e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Ce ? 128 : 0) + (t.mode === nn || t.mode === Nn ? 256 : 0);
  if ((m === 0 && y === 0 || n === jr) && W === tt) {
    W = yf;
  }
  return W;
};
const If = e => {
  if (nt(e)) {
    return be;
  }
  let n = e.state;
  n.window &&= null;
  e.state = null;
  return tt;
};
const Uf = (e, n) => {
  if (nt(e)) {
    return be;
  }
  const t = e.state;
  if (t.wrap & 2) {
    t.head = n;
    n.done = false;
    return tt;
  } else {
    return be;
  }
};
const Df = (e, n) => {
  const t = n.length;
  let r;
  let a;
  let i;
  if (nt(e) || (r = e.state, r.wrap !== 0 && r.mode !== pn)) {
    return be;
  } else if (r.mode === pn && (a = 1, a = Ot(a, n, t, 0), a !== r.check)) {
    return la;
  } else {
    i = pa(e, n, t, t);
    if (i) {
      r.mode = sa;
      return fa;
    } else {
      r.havedict = 1;
      return tt;
    }
  }
};
var Cf = ha;
var Rf = da;
var Nf = ua;
var zf = Sf;
var Bf = _a;
var Of = Ff;
var Mf = If;
var Lf = Uf;
var $f = Df;
var Zf = "pako inflate (from Nodeca project)";
var Ne = {
  inflateReset: Cf,
  inflateReset2: Rf,
  inflateResetKeep: Nf,
  inflateInit: zf,
  inflateInit2: Bf,
  inflate: Of,
  inflateEnd: Mf,
  inflateGetHeader: Lf,
  inflateSetDictionary: $f,
  inflateInfo: Zf
};
function Hf() {
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
var Pf = Hf;
const wa = Object.prototype.toString;
const {
  Z_NO_FLUSH: Kf,
  Z_FINISH: jf,
  Z_OK: $t,
  Z_STREAM_END: Mn,
  Z_NEED_DICT: Ln,
  Z_STREAM_ERROR: Gf,
  Z_DATA_ERROR: wi,
  Z_MEM_ERROR: Xf
} = bt;
function Yt(e) {
  this.options = yn.assign({
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
  this.strm = new ra();
  this.strm.avail_out = 0;
  let t = Ne.inflateInit2(this.strm, n.windowBits);
  if (t !== $t) {
    throw new Error(Qe[t]);
  }
  this.header = new Pf();
  Ne.inflateGetHeader(this.strm, this.header);
  if (n.dictionary && (typeof n.dictionary == "string" ? n.dictionary = Lt.string2buf(n.dictionary) : wa.call(n.dictionary) === "[object ArrayBuffer]" && (n.dictionary = new Uint8Array(n.dictionary)), n.raw && (t = Ne.inflateSetDictionary(this.strm, n.dictionary), t !== $t))) {
    throw new Error(Qe[t]);
  }
}
Yt.prototype.push = function (e, n) {
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
    s = n === true ? jf : Kf;
  }
  if (wa.call(e) === "[object ArrayBuffer]") {
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
    i = Ne.inflate(t, s);
    if (i === Ln && a) {
      i = Ne.inflateSetDictionary(t, a);
      if (i === $t) {
        i = Ne.inflate(t, s);
      } else if (i === wi) {
        i = Ln;
      }
    }
    while (t.avail_in > 0 && i === Mn && t.state.wrap > 0 && e[t.next_in] !== 0) {
      Ne.inflateReset(t);
      i = Ne.inflate(t, s);
    }
    switch (i) {
      case Gf:
      case wi:
      case Ln:
      case Xf:
        this.onEnd(i);
        this.ended = true;
        return false;
    }
    o = t.avail_out;
    if (t.next_out && (t.avail_out === 0 || i === Mn)) {
      if (this.options.to === "string") {
        let p = Lt.utf8border(t.output, t.next_out);
        let c = t.next_out - p;
        let u = Lt.buf2string(t.output, p);
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
        i = Ne.inflateEnd(this.strm);
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
Yt.prototype.onData = function (e) {
  this.chunks.push(e);
};
Yt.prototype.onEnd = function (e) {
  if (e === $t) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = yn.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = e;
  this.msg = this.strm.msg;
};
function br(e, n) {
  const t = new Yt(n);
  t.push(e);
  if (t.err) {
    throw t.msg || Qe[t.err];
  }
  return t.result;
}
function Yf(e, n) {
  n = n || {};
  n.raw = true;
  return br(e, n);
}
var Vf = Yt;
var Wf = br;
var qf = Yf;
var Jf = br;
var Qf = bt;
var e0 = {
  Inflate: Vf,
  inflate: Wf,
  inflateRaw: qf,
  ungzip: Jf,
  constants: Qf
};
const {
  Deflate: W0,
  deflate: t0,
  deflateRaw: q0,
  gzip: J0
} = ff;
const {
  Inflate: Q0,
  inflate: n0,
  inflateRaw: es,
  ungzip: ts
} = e0;
var ns = t0;
var rs = n0;
var nr = {};
var mn = {
  byteLength: a0,
  toByteArray: l0,
  fromByteArray: c0
};
var Se = [];
var pe = [];
var r0 = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var $n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ft = 0, i0 = $n.length; ft < i0; ++ft) {
  Se[ft] = $n[ft];
  pe[$n.charCodeAt(ft)] = ft;
}
pe["-".charCodeAt(0)] = 62;
pe["_".charCodeAt(0)] = 63;
function ga(e) {
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
function a0(e) {
  var n = ga(e);
  var t = n[0];
  var r = n[1];
  return (t + r) * 3 / 4 - r;
}
function o0(e, n, t) {
  return (n + t) * 3 / 4 - t;
}
function l0(e) {
  var n;
  var t = ga(e);
  var r = t[0];
  var a = t[1];
  var i = new r0(o0(e, r, a));
  var s = 0;
  var o = a > 0 ? r - 4 : r;
  var p;
  for (p = 0; p < o; p += 4) {
    n = pe[e.charCodeAt(p)] << 18 | pe[e.charCodeAt(p + 1)] << 12 | pe[e.charCodeAt(p + 2)] << 6 | pe[e.charCodeAt(p + 3)];
    i[s++] = n >> 16 & 255;
    i[s++] = n >> 8 & 255;
    i[s++] = n & 255;
  }
  if (a === 2) {
    n = pe[e.charCodeAt(p)] << 2 | pe[e.charCodeAt(p + 1)] >> 4;
    i[s++] = n & 255;
  }
  if (a === 1) {
    n = pe[e.charCodeAt(p)] << 10 | pe[e.charCodeAt(p + 1)] << 4 | pe[e.charCodeAt(p + 2)] >> 2;
    i[s++] = n >> 8 & 255;
    i[s++] = n & 255;
  }
  return i;
}
function f0(e) {
  return Se[e >> 18 & 63] + Se[e >> 12 & 63] + Se[e >> 6 & 63] + Se[e & 63];
}
function s0(e, n, t) {
  var r;
  var a = [];
  for (var i = n; i < t; i += 3) {
    r = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
    a.push(f0(r));
  }
  return a.join("");
}
function c0(e) {
  var n;
  var t = e.length;
  var r = t % 3;
  var a = [];
  for (var i = 16383, s = 0, o = t - r; s < o; s += i) {
    a.push(s0(e, s, s + i > o ? o : s + i));
  }
  if (r === 1) {
    n = e[t - 1];
    a.push(Se[n >> 2] + Se[n << 4 & 63] + "==");
  } else if (r === 2) {
    n = (e[t - 2] << 8) + e[t - 1];
    a.push(Se[n >> 10] + Se[n >> 4 & 63] + Se[n << 2 & 63] + "=");
  }
  return a.join("");
}
var yr = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
yr.read = function (e, n, t, r, a) {
  var i;
  var s;
  var o = a * 8 - r - 1;
  var p = (1 << o) - 1;
  var c = p >> 1;
  var u = -7;
  var m = t ? a - 1 : 0;
  var y = t ? -1 : 1;
  var x = e[n + m];
  m += y;
  i = x & (1 << -u) - 1;
  x >>= -u;
  u += o;
  for (; u > 0; u -= 8) {
    i = i * 256 + e[n + m];
    m += y;
  }
  s = i & (1 << -u) - 1;
  i >>= -u;
  u += r;
  for (; u > 0; u -= 8) {
    s = s * 256 + e[n + m];
    m += y;
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
yr.write = function (e, n, t, r, a, i) {
  var s;
  var o;
  var p;
  var c = i * 8 - a - 1;
  var u = (1 << c) - 1;
  var m = u >> 1;
  var y = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var x = r ? 0 : i - 1;
  var D = r ? 1 : -1;
  var O = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
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
    if (s + m >= 1) {
      n += y / p;
    } else {
      n += y * Math.pow(2, 1 - m);
    }
    if (n * p >= 2) {
      s++;
      p /= 2;
    }
    if (s + m >= u) {
      o = 0;
      s = u;
    } else if (s + m >= 1) {
      o = (n * p - 1) * Math.pow(2, a);
      s = s + m;
    } else {
      o = n * Math.pow(2, m - 1) * Math.pow(2, a);
      s = 0;
    }
  }
  for (; a >= 8; a -= 8) {
    e[t + x] = o & 255;
    x += D;
    o /= 256;
  }
  s = s << a | o;
  c += a;
  for (; c > 0; c -= 8) {
    e[t + x] = s & 255;
    x += D;
    s /= 256;
  }
  e[t + x - D] |= O * 128;
}; /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
(function (e) {
  var n = mn;
  var t = yr;
  var r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = o;
  e.SlowBuffer = P;
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
      return m(h);
    }
    return p(h, l, f);
  }
  o.poolSize = 8192;
  function p(h, l, f) {
    if (typeof h == "string") {
      return y(h, l);
    }
    if (ArrayBuffer.isView(h)) {
      return D(h);
    }
    if (h == null) {
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h);
    }
    if (C(h, ArrayBuffer) || h && C(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer !== "undefined" && (C(h, SharedArrayBuffer) || h && C(h.buffer, SharedArrayBuffer))) {
      return O(h, l, f);
    }
    if (typeof h == "number") {
      throw new TypeError("The \"value\" argument must not be of type number. Received type number");
    }
    var d = h.valueOf && h.valueOf();
    if (d != null && d !== h) {
      return o.from(d, l, f);
    }
    var w = $(h);
    if (w) {
      return w;
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
  function m(h) {
    c(h);
    return s(h < 0 ? 0 : M(h) | 0);
  }
  o.allocUnsafe = function (h) {
    return m(h);
  };
  o.allocUnsafeSlow = function (h) {
    return m(h);
  };
  function y(h, l) {
    if (typeof l != "string" || l === "") {
      l = "utf8";
    }
    if (!o.isEncoding(l)) {
      throw new TypeError("Unknown encoding: " + l);
    }
    var f = L(h, l) | 0;
    var d = s(f);
    var w = d.write(h, l);
    if (w !== f) {
      d = d.slice(0, w);
    }
    return d;
  }
  function x(h) {
    for (var l = h.length < 0 ? 0 : M(h.length) | 0, f = s(l), d = 0; d < l; d += 1) {
      f[d] = h[d] & 255;
    }
    return f;
  }
  function D(h) {
    if (C(h, Uint8Array)) {
      var l = new Uint8Array(h);
      return O(l.buffer, l.byteOffset, l.byteLength);
    }
    return x(h);
  }
  function O(h, l, f) {
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
      var l = M(h.length) | 0;
      var f = s(l);
      if (f.length !== 0) {
        h.copy(f, 0, 0, l);
      }
      return f;
    }
    if (h.length !== undefined) {
      if (typeof h.length != "number" || De(h.length)) {
        return s(0);
      } else {
        return x(h);
      }
    }
    if (h.type === "Buffer" && Array.isArray(h.data)) {
      return x(h.data);
    }
  }
  function M(h) {
    if (h >= a) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    }
    return h | 0;
  }
  function P(h) {
    if (+h != h) {
      h = 0;
    }
    return o.alloc(+h);
  }
  o.isBuffer = function (l) {
    return l != null && l._isBuffer === true && l !== o.prototype;
  };
  o.compare = function (l, f) {
    if (C(l, Uint8Array)) {
      l = o.from(l, l.offset, l.byteLength);
    }
    if (C(f, Uint8Array)) {
      f = o.from(f, f.offset, f.byteLength);
    }
    if (!o.isBuffer(l) || !o.isBuffer(f)) {
      throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
    }
    if (l === f) {
      return 0;
    }
    var d = l.length;
    var w = f.length;
    for (var E = 0, F = Math.min(d, w); E < F; ++E) {
      if (l[E] !== f[E]) {
        d = l[E];
        w = f[E];
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
    var w = o.allocUnsafe(f);
    var E = 0;
    for (d = 0; d < l.length; ++d) {
      var F = l[d];
      if (C(F, Uint8Array)) {
        if (E + F.length > w.length) {
          o.from(F).copy(w, E);
        } else {
          Uint8Array.prototype.set.call(w, F, E);
        }
      } else if (o.isBuffer(F)) {
        F.copy(w, E);
      } else {
        throw new TypeError("\"list\" argument must be an Array of Buffers");
      }
      E += F.length;
    }
    return w;
  };
  function L(h, l) {
    if (o.isBuffer(h)) {
      return h.length;
    }
    if (ArrayBuffer.isView(h) || C(h, ArrayBuffer)) {
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
    var w = false;
    for (;;) {
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return z(h).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return S(h).length;
        default:
          if (w) {
            if (d) {
              return -1;
            } else {
              return z(h).length;
            }
          }
          l = ("" + l).toLowerCase();
          w = true;
      }
    }
  }
  o.byteLength = L;
  function U(h, l, f) {
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
          return Vt(this, l, f);
        case "utf8":
        case "utf-8":
          return Ie(this, l, f);
        case "ascii":
          return mt(this, l, f);
        case "latin1":
        case "binary":
          return Et(this, l, f);
        case "base64":
          return rt(this, l, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return it(this, l, f);
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
  function Z(h, l, f) {
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
      Z(this, f, f + 1);
    }
    return this;
  };
  o.prototype.swap32 = function () {
    var l = this.length;
    if (l % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (var f = 0; f < l; f += 4) {
      Z(this, f, f + 3);
      Z(this, f + 1, f + 2);
    }
    return this;
  };
  o.prototype.swap64 = function () {
    var l = this.length;
    if (l % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (var f = 0; f < l; f += 8) {
      Z(this, f, f + 7);
      Z(this, f + 1, f + 6);
      Z(this, f + 2, f + 5);
      Z(this, f + 3, f + 4);
    }
    return this;
  };
  o.prototype.toString = function () {
    var l = this.length;
    if (l === 0) {
      return "";
    } else if (arguments.length === 0) {
      return Ie(this, 0, l);
    } else {
      return U.apply(this, arguments);
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
  o.prototype.compare = function (l, f, d, w, E) {
    if (C(l, Uint8Array)) {
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
    if (w === undefined) {
      w = 0;
    }
    if (E === undefined) {
      E = this.length;
    }
    if (f < 0 || d > l.length || w < 0 || E > this.length) {
      throw new RangeError("out of range index");
    }
    if (w >= E && f >= d) {
      return 0;
    }
    if (w >= E) {
      return -1;
    }
    if (f >= d) {
      return 1;
    }
    f >>>= 0;
    d >>>= 0;
    w >>>= 0;
    E >>>= 0;
    if (this === l) {
      return 0;
    }
    var F = E - w;
    var H = d - f;
    for (var X = Math.min(F, H), J = this.slice(w, E), le = l.slice(f, d), ee = 0; ee < X; ++ee) {
      if (J[ee] !== le[ee]) {
        F = J[ee];
        H = le[ee];
        break;
      }
    }
    if (F < H) {
      return -1;
    } else if (H < F) {
      return 1;
    } else {
      return 0;
    }
  };
  function V(h, l, f, d, w) {
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
    if (De(f)) {
      f = w ? 0 : h.length - 1;
    }
    if (f < 0) {
      f = h.length + f;
    }
    if (f >= h.length) {
      if (w) {
        return -1;
      }
      f = h.length - 1;
    } else if (f < 0) {
      if (w) {
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
        return B(h, l, f, d, w);
      }
    }
    if (typeof l == "number") {
      l = l & 255;
      if (typeof Uint8Array.prototype.indexOf == "function") {
        if (w) {
          return Uint8Array.prototype.indexOf.call(h, l, f);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(h, l, f);
        }
      } else {
        return B(h, [l], f, d, w);
      }
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function B(h, l, f, d, w) {
    var E = 1;
    var F = h.length;
    var H = l.length;
    if (d !== undefined && (d = String(d).toLowerCase(), d === "ucs2" || d === "ucs-2" || d === "utf16le" || d === "utf-16le")) {
      if (h.length < 2 || l.length < 2) {
        return -1;
      }
      E = 2;
      F /= 2;
      H /= 2;
      f /= 2;
    }
    function X(Er, Ar) {
      if (E === 1) {
        return Er[Ar];
      } else {
        return Er.readUInt16BE(Ar * E);
      }
    }
    var J;
    if (w) {
      var le = -1;
      for (J = f; J < F; J++) {
        if (X(h, J) === X(l, le === -1 ? 0 : J - le)) {
          if (le === -1) {
            le = J;
          }
          if (J - le + 1 === H) {
            return le * E;
          }
        } else {
          if (le !== -1) {
            J -= J - le;
          }
          le = -1;
        }
      }
    } else {
      if (f + H > F) {
        f = F - H;
      }
      J = f;
      for (; J >= 0; J--) {
        var ee = true;
        for (var Wt = 0; Wt < H; Wt++) {
          if (X(h, J + Wt) !== X(l, Wt)) {
            ee = false;
            break;
          }
        }
        if (ee) {
          return J;
        }
      }
    }
    return -1;
  }
  o.prototype.includes = function (l, f, d) {
    return this.indexOf(l, f, d) !== -1;
  };
  o.prototype.indexOf = function (l, f, d) {
    return V(this, l, f, d, true);
  };
  o.prototype.lastIndexOf = function (l, f, d) {
    return V(this, l, f, d, false);
  };
  function W(h, l, f, d) {
    f = Number(f) || 0;
    var w = h.length - f;
    if (d) {
      d = Number(d);
      if (d > w) {
        d = w;
      }
    } else {
      d = w;
    }
    var E = l.length;
    if (d > E / 2) {
      d = E / 2;
    }
    for (var F = 0; F < d; ++F) {
      var H = parseInt(l.substr(F * 2, 2), 16);
      if (De(H)) {
        return F;
      }
      h[f + F] = H;
    }
    return F;
  }
  function j(h, l, f, d) {
    return k(z(l, h.length - f), h, f, d);
  }
  function N(h, l, f, d) {
    return k(A(l), h, f, d);
  }
  function K(h, l, f, d) {
    return k(S(l), h, f, d);
  }
  function _e(h, l, f, d) {
    return k(T(l, h.length - f), h, f, d);
  }
  o.prototype.write = function (l, f, d, w) {
    if (f === undefined) {
      w = "utf8";
      d = this.length;
      f = 0;
    } else if (d === undefined && typeof f == "string") {
      w = f;
      d = this.length;
      f = 0;
    } else if (isFinite(f)) {
      f = f >>> 0;
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
    var E = this.length - f;
    if (d === undefined || d > E) {
      d = E;
    }
    if (l.length > 0 && (d < 0 || f < 0) || f > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    w ||= "utf8";
    var F = false;
    for (;;) {
      switch (w) {
        case "hex":
          return W(this, l, f, d);
        case "utf8":
        case "utf-8":
          return j(this, l, f, d);
        case "ascii":
        case "latin1":
        case "binary":
          return N(this, l, f, d);
        case "base64":
          return K(this, l, f, d);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return _e(this, l, f, d);
        default:
          if (F) {
            throw new TypeError("Unknown encoding: " + w);
          }
          w = ("" + w).toLowerCase();
          F = true;
      }
    }
  };
  o.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function rt(h, l, f) {
    if (l === 0 && f === h.length) {
      return n.fromByteArray(h);
    } else {
      return n.fromByteArray(h.slice(l, f));
    }
  }
  function Ie(h, l, f) {
    f = Math.min(h.length, f);
    var d = [];
    for (var w = l; w < f;) {
      var E = h[w];
      var F = null;
      var H = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
      if (w + H <= f) {
        var X;
        var J;
        var le;
        var ee;
        switch (H) {
          case 1:
            if (E < 128) {
              F = E;
            }
            break;
          case 2:
            X = h[w + 1];
            if ((X & 192) === 128) {
              ee = (E & 31) << 6 | X & 63;
              if (ee > 127) {
                F = ee;
              }
            }
            break;
          case 3:
            X = h[w + 1];
            J = h[w + 2];
            if ((X & 192) === 128 && (J & 192) === 128) {
              ee = (E & 15) << 12 | (X & 63) << 6 | J & 63;
              if (ee > 2047 && (ee < 55296 || ee > 57343)) {
                F = ee;
              }
            }
            break;
          case 4:
            X = h[w + 1];
            J = h[w + 2];
            le = h[w + 3];
            if ((X & 192) === 128 && (J & 192) === 128 && (le & 192) === 128) {
              ee = (E & 15) << 18 | (X & 63) << 12 | (J & 63) << 6 | le & 63;
              if (ee > 65535 && ee < 1114112) {
                F = ee;
              }
            }
        }
      }
      if (F === null) {
        F = 65533;
        H = 1;
      } else if (F > 65535) {
        F -= 65536;
        d.push(F >>> 10 & 1023 | 55296);
        F = F & 1023 | 56320;
      }
      d.push(F);
      w += H;
    }
    return Ye(d);
  }
  var Ue = 4096;
  function Ye(h) {
    var l = h.length;
    if (l <= Ue) {
      return String.fromCharCode.apply(String, h);
    }
    var f = "";
    for (var d = 0; d < l;) {
      f += String.fromCharCode.apply(String, h.slice(d, d += Ue));
    }
    return f;
  }
  function mt(h, l, f) {
    var d = "";
    f = Math.min(h.length, f);
    for (var w = l; w < f; ++w) {
      d += String.fromCharCode(h[w] & 127);
    }
    return d;
  }
  function Et(h, l, f) {
    var d = "";
    f = Math.min(h.length, f);
    for (var w = l; w < f; ++w) {
      d += String.fromCharCode(h[w]);
    }
    return d;
  }
  function Vt(h, l, f) {
    var d = h.length;
    if (!l || l < 0) {
      l = 0;
    }
    if (!f || f < 0 || f > d) {
      f = d;
    }
    var w = "";
    for (var E = l; E < f; ++E) {
      w += At[h[E]];
    }
    return w;
  }
  function it(h, l, f) {
    for (var d = h.slice(l, f), w = "", E = 0; E < d.length - 1; E += 2) {
      w += String.fromCharCode(d[E] + d[E + 1] * 256);
    }
    return w;
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
    var w = this.subarray(l, f);
    Object.setPrototypeOf(w, o.prototype);
    return w;
  };
  function G(h, l, f) {
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
      G(l, f, this.length);
    }
    var w = this[l];
    for (var E = 1, F = 0; ++F < f && (E *= 256);) {
      w += this[l + F] * E;
    }
    return w;
  };
  o.prototype.readUintBE = o.prototype.readUIntBE = function (l, f, d) {
    l = l >>> 0;
    f = f >>> 0;
    if (!d) {
      G(l, f, this.length);
    }
    var w = this[l + --f];
    for (var E = 1; f > 0 && (E *= 256);) {
      w += this[l + --f] * E;
    }
    return w;
  };
  o.prototype.readUint8 = o.prototype.readUInt8 = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 1, this.length);
    }
    return this[l];
  };
  o.prototype.readUint16LE = o.prototype.readUInt16LE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 2, this.length);
    }
    return this[l] | this[l + 1] << 8;
  };
  o.prototype.readUint16BE = o.prototype.readUInt16BE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 2, this.length);
    }
    return this[l] << 8 | this[l + 1];
  };
  o.prototype.readUint32LE = o.prototype.readUInt32LE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 4, this.length);
    }
    return (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
  };
  o.prototype.readUint32BE = o.prototype.readUInt32BE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 4, this.length);
    }
    return this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
  };
  o.prototype.readIntLE = function (l, f, d) {
    l = l >>> 0;
    f = f >>> 0;
    if (!d) {
      G(l, f, this.length);
    }
    var w = this[l];
    for (var E = 1, F = 0; ++F < f && (E *= 256);) {
      w += this[l + F] * E;
    }
    E *= 128;
    if (w >= E) {
      w -= Math.pow(2, f * 8);
    }
    return w;
  };
  o.prototype.readIntBE = function (l, f, d) {
    l = l >>> 0;
    f = f >>> 0;
    if (!d) {
      G(l, f, this.length);
    }
    for (var w = f, E = 1, F = this[l + --w]; w > 0 && (E *= 256);) {
      F += this[l + --w] * E;
    }
    E *= 128;
    if (F >= E) {
      F -= Math.pow(2, f * 8);
    }
    return F;
  };
  o.prototype.readInt8 = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 1, this.length);
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
      G(l, 2, this.length);
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
      G(l, 2, this.length);
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
      G(l, 4, this.length);
    }
    return this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
  };
  o.prototype.readInt32BE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 4, this.length);
    }
    return this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
  };
  o.prototype.readFloatLE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 4, this.length);
    }
    return t.read(this, l, true, 23, 4);
  };
  o.prototype.readFloatBE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 4, this.length);
    }
    return t.read(this, l, false, 23, 4);
  };
  o.prototype.readDoubleLE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 8, this.length);
    }
    return t.read(this, l, true, 52, 8);
  };
  o.prototype.readDoubleBE = function (l, f) {
    l = l >>> 0;
    if (!f) {
      G(l, 8, this.length);
    }
    return t.read(this, l, false, 52, 8);
  };
  function _(h, l, f, d, w, E) {
    if (!o.isBuffer(h)) {
      throw new TypeError("\"buffer\" argument must be a Buffer instance");
    }
    if (l > w || l < E) {
      throw new RangeError("\"value\" argument is out of bounds");
    }
    if (f + d > h.length) {
      throw new RangeError("Index out of range");
    }
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function (l, f, d, w) {
    l = +l;
    f = f >>> 0;
    d = d >>> 0;
    if (!w) {
      var E = Math.pow(2, d * 8) - 1;
      _(this, l, f, d, E, 0);
    }
    var F = 1;
    var H = 0;
    for (this[f] = l & 255; ++H < d && (F *= 256);) {
      this[f + H] = l / F & 255;
    }
    return f + d;
  };
  o.prototype.writeUintBE = o.prototype.writeUIntBE = function (l, f, d, w) {
    l = +l;
    f = f >>> 0;
    d = d >>> 0;
    if (!w) {
      var E = Math.pow(2, d * 8) - 1;
      _(this, l, f, d, E, 0);
    }
    var F = d - 1;
    var H = 1;
    for (this[f + F] = l & 255; --F >= 0 && (H *= 256);) {
      this[f + F] = l / H & 255;
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
  o.prototype.writeIntLE = function (l, f, d, w) {
    l = +l;
    f = f >>> 0;
    if (!w) {
      var E = Math.pow(2, d * 8 - 1);
      _(this, l, f, d, E - 1, -E);
    }
    var F = 0;
    var H = 1;
    var X = 0;
    for (this[f] = l & 255; ++F < d && (H *= 256);) {
      if (l < 0 && X === 0 && this[f + F - 1] !== 0) {
        X = 1;
      }
      this[f + F] = (l / H >> 0) - X & 255;
    }
    return f + d;
  };
  o.prototype.writeIntBE = function (l, f, d, w) {
    l = +l;
    f = f >>> 0;
    if (!w) {
      var E = Math.pow(2, d * 8 - 1);
      _(this, l, f, d, E - 1, -E);
    }
    var F = d - 1;
    var H = 1;
    var X = 0;
    for (this[f + F] = l & 255; --F >= 0 && (H *= 256);) {
      if (l < 0 && X === 0 && this[f + F + 1] !== 0) {
        X = 1;
      }
      this[f + F] = (l / H >> 0) - X & 255;
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
  function b(h, l, f, d, w, E) {
    if (f + d > h.length) {
      throw new RangeError("Index out of range");
    }
    if (f < 0) {
      throw new RangeError("Index out of range");
    }
  }
  function g(h, l, f, d, w) {
    l = +l;
    f = f >>> 0;
    if (!w) {
      b(h, l, f, 4);
    }
    t.write(h, l, f, d, 23, 4);
    return f + 4;
  }
  o.prototype.writeFloatLE = function (l, f, d) {
    return g(this, l, f, true, d);
  };
  o.prototype.writeFloatBE = function (l, f, d) {
    return g(this, l, f, false, d);
  };
  function v(h, l, f, d, w) {
    l = +l;
    f = f >>> 0;
    if (!w) {
      b(h, l, f, 8);
    }
    t.write(h, l, f, d, 52, 8);
    return f + 8;
  }
  o.prototype.writeDoubleLE = function (l, f, d) {
    return v(this, l, f, true, d);
  };
  o.prototype.writeDoubleBE = function (l, f, d) {
    return v(this, l, f, false, d);
  };
  o.prototype.copy = function (l, f, d, w) {
    if (!o.isBuffer(l)) {
      throw new TypeError("argument should be a Buffer");
    }
    d ||= 0;
    if (!w && w !== 0) {
      w = this.length;
    }
    if (f >= l.length) {
      f = l.length;
    }
    f ||= 0;
    if (w > 0 && w < d) {
      w = d;
    }
    if (w === d || l.length === 0 || this.length === 0) {
      return 0;
    }
    if (f < 0) {
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
    if (l.length - f < w - d) {
      w = l.length - f + d;
    }
    var E = w - d;
    if (this === l && typeof Uint8Array.prototype.copyWithin == "function") {
      this.copyWithin(f, d, w);
    } else {
      Uint8Array.prototype.set.call(l, this.subarray(d, w), f);
    }
    return E;
  };
  o.prototype.fill = function (l, f, d, w) {
    if (typeof l == "string") {
      if (typeof f == "string") {
        w = f;
        f = 0;
        d = this.length;
      } else if (typeof d == "string") {
        w = d;
        d = this.length;
      }
      if (w !== undefined && typeof w != "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof w == "string" && !o.isEncoding(w)) {
        throw new TypeError("Unknown encoding: " + w);
      }
      if (l.length === 1) {
        var E = l.charCodeAt(0);
        if (w === "utf8" && E < 128 || w === "latin1") {
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
    var F;
    if (typeof l == "number") {
      for (F = f; F < d; ++F) {
        this[F] = l;
      }
    } else {
      var H = o.isBuffer(l) ? l : o.from(l, w);
      var X = H.length;
      if (X === 0) {
        throw new TypeError("The value \"" + l + "\" is invalid for argument \"value\"");
      }
      for (F = 0; F < d - f; ++F) {
        this[F + f] = H[F % X];
      }
    }
    return this;
  };
  var R = /[^+/0-9A-Za-z-_]/g;
  function I(h) {
    h = h.split("=")[0];
    h = h.trim().replace(R, "");
    if (h.length < 2) {
      return "";
    }
    while (h.length % 4 !== 0) {
      h = h + "=";
    }
    return h;
  }
  function z(h, l) {
    l = l || Infinity;
    var f;
    for (var d = h.length, w = null, E = [], F = 0; F < d; ++F) {
      f = h.charCodeAt(F);
      if (f > 55295 && f < 57344) {
        if (!w) {
          if (f > 56319) {
            if ((l -= 3) > -1) {
              E.push(239, 191, 189);
            }
            continue;
          } else if (F + 1 === d) {
            if ((l -= 3) > -1) {
              E.push(239, 191, 189);
            }
            continue;
          }
          w = f;
          continue;
        }
        if (f < 56320) {
          if ((l -= 3) > -1) {
            E.push(239, 191, 189);
          }
          w = f;
          continue;
        }
        f = (w - 55296 << 10 | f - 56320) + 65536;
      } else if (w && (l -= 3) > -1) {
        E.push(239, 191, 189);
      }
      w = null;
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
  function T(h, l) {
    var f;
    var d;
    var w;
    var E = [];
    for (var F = 0; F < h.length && !((l -= 2) < 0); ++F) {
      f = h.charCodeAt(F);
      d = f >> 8;
      w = f % 256;
      E.push(w);
      E.push(d);
    }
    return E;
  }
  function S(h) {
    return n.toByteArray(I(h));
  }
  function k(h, l, f, d) {
    for (var w = 0; w < d && !(w + f >= l.length) && !(w >= h.length); ++w) {
      l[w + f] = h[w];
    }
    return w;
  }
  function C(h, l) {
    return h instanceof l || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === l.name;
  }
  function De(h) {
    return h !== h;
  }
  var At = function () {
    var h = "0123456789abcdef";
    var l = new Array(256);
    for (var f = 0; f < 16; ++f) {
      var d = f * 16;
      for (var w = 0; w < 16; ++w) {
        l[d + w] = h[f] + h[w];
      }
    }
    return l;
  }();
})(nr);
var ne = {};
var Ee;
var Ae;
function rr() {
  throw new Error("setTimeout has not been defined");
}
function ir() {
  throw new Error("clearTimeout has not been defined");
}
(function () {
  try {
    if (typeof setTimeout == "function") {
      Ee = setTimeout;
    } else {
      Ee = rr;
    }
  } catch {
    Ee = rr;
  }
  try {
    if (typeof clearTimeout == "function") {
      Ae = clearTimeout;
    } else {
      Ae = ir;
    }
  } catch {
    Ae = ir;
  }
})();
function xa(e) {
  if (Ee === setTimeout) {
    return setTimeout(e, 0);
  }
  if ((Ee === rr || !Ee) && setTimeout) {
    Ee = setTimeout;
    return setTimeout(e, 0);
  }
  try {
    return Ee(e, 0);
  } catch {
    try {
      return Ee.call(null, e, 0);
    } catch {
      return Ee.call(this, e, 0);
    }
  }
}
function u0(e) {
  if (Ae === clearTimeout) {
    return clearTimeout(e);
  }
  if ((Ae === ir || !Ae) && clearTimeout) {
    Ae = clearTimeout;
    return clearTimeout(e);
  }
  try {
    return Ae(e);
  } catch {
    try {
      return Ae.call(null, e);
    } catch {
      return Ae.call(this, e);
    }
  }
}
var ze = [];
var ut = false;
var Je;
var fn = -1;
function h0() {
  if (!!ut && !!Je) {
    ut = false;
    if (Je.length) {
      ze = Je.concat(ze);
    } else {
      fn = -1;
    }
    if (ze.length) {
      ba();
    }
  }
}
function ba() {
  if (!ut) {
    var e = xa(h0);
    ut = true;
    for (var n = ze.length; n;) {
      Je = ze;
      ze = [];
      while (++fn < n) {
        if (Je) {
          Je[fn].run();
        }
      }
      fn = -1;
      n = ze.length;
    }
    Je = null;
    ut = false;
    u0(e);
  }
}
ne.nextTick = function (e) {
  var n = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var t = 1; t < arguments.length; t++) {
      n[t - 1] = arguments[t];
    }
  }
  ze.push(new ya(e, n));
  if (ze.length === 1 && !ut) {
    xa(ba);
  }
};
function ya(e, n) {
  this.fun = e;
  this.array = n;
}
ya.prototype.run = function () {
  this.fun.apply(null, this.array);
};
ne.title = "browser";
ne.browser = true;
ne.env = {};
ne.argv = [];
ne.version = "";
ne.versions = {};
function Me() {}
ne.on = Me;
ne.addListener = Me;
ne.once = Me;
ne.off = Me;
ne.removeListener = Me;
ne.removeAllListeners = Me;
ne.emit = Me;
ne.prependListener = Me;
ne.prependOnceListener = Me;
ne.listeners = function (e) {
  return [];
};
ne.binding = function (e) {
  throw new Error("process.binding is not supported");
};
ne.cwd = function () {
  return "/";
};
ne.chdir = function (e) {
  throw new Error("process.chdir is not supported");
};
ne.umask = function () {
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
var va = {
  exports: {}
};
(function (e) {
  (function (n, t, r) {
    e.exports = r(n);
    e.exports.default = e.exports;
  })(Da, "UUID", function () {
    function n(_, b, g, v, R, I) {
      var z = function (T, S) {
        var k = T.toString(16);
        if (k.length < 2) {
          k = "0" + k;
        }
        if (S) {
          k = k.toUpperCase();
        }
        return k;
      };
      for (var A = b; A <= g; A++) {
        R[I++] = z(_[A], v);
      }
      return R;
    }
    function t(_, b, g, v, R) {
      for (var I = b; I <= g; I += 2) {
        v[R++] = parseInt(_.substr(I, 2), 16);
      }
    }
    var r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
    var a = [0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0];
    function i(_, b) {
      if (b % 4 !== 0) {
        throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
      }
      var g = "";
      for (var v = 0, R = 0; v < b;) {
        R = R * 256 + _[v++];
        if (v % 4 === 0) {
          for (var I = 52200625; I >= 1;) {
            var z = Math.floor(R / I) % 85;
            g += r[z];
            I /= 85;
          }
          R = 0;
        }
      }
      return g;
    }
    function s(_, b) {
      var g = _.length;
      if (g % 5 !== 0) {
        throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
      }
      if (typeof b === "undefined") {
        b = new Array(g * 4 / 5);
      }
      for (var v = 0, R = 0, I = 0; v < g;) {
        var z = _.charCodeAt(v++) - 32;
        if (z < 0 || z >= a.length) {
          break;
        }
        I = I * 85 + a[z];
        if (v % 5 === 0) {
          for (var A = 16777216; A >= 1;) {
            b[R++] = Math.trunc(I / A % 256);
            A /= 256;
          }
          I = 0;
        }
      }
      return b;
    }
    function o(_, b) {
      var g = {
        ibits: 8,
        obits: 8,
        obigendian: true
      };
      for (var v in b) {
        if (typeof g[v] !== "undefined") {
          g[v] = b[v];
        }
      }
      for (var R = [], I = 0, z, A, T = 0, S, k = 0, C = _.length; T === 0 && (A = _.charCodeAt(I++)), z = A >> g.ibits - (T + 8) & 255, T = (T + 8) % g.ibits, g.obigendian ? k === 0 ? S = z << g.obits - 8 : S |= z << g.obits - 8 - k : k === 0 ? S = z : S |= z << k, k = (k + 8) % g.obits, k !== 0 || !(R.push(S), I >= C););
      return R;
    }
    function p(_, b) {
      var g = {
        ibits: 32,
        ibigendian: true
      };
      for (var v in b) {
        if (typeof g[v] !== "undefined") {
          g[v] = b[v];
        }
      }
      var R = "";
      var I = 4294967295;
      if (g.ibits < 32) {
        I = (1 << g.ibits) - 1;
      }
      for (var z = _.length, A = 0; A < z; A++) {
        var T = _[A] & I;
        for (var S = 0; S < g.ibits; S += 8) {
          if (g.ibigendian) {
            R += String.fromCharCode(T >> g.ibits - 8 - S & 255);
          } else {
            R += String.fromCharCode(T >> S & 255);
          }
        }
      }
      return R;
    }
    var c = 8;
    var u = 8;
    var m = 256;
    function y(_, b, g, v, R, I, z, A) {
      return [A, z, I, R, v, g, b, _];
    }
    function x() {
      return y(0, 0, 0, 0, 0, 0, 0, 0);
    }
    function D(_) {
      return _.slice(0);
    }
    function O(_) {
      var b = x();
      for (var g = 0; g < c; g++) {
        b[g] = Math.floor(_ % m);
        _ /= m;
      }
      return b;
    }
    function $(_) {
      var b = 0;
      for (var g = c - 1; g >= 0; g--) {
        b *= m;
        b += _[g];
      }
      return Math.floor(b);
    }
    function M(_, b) {
      var g = 0;
      for (var v = 0; v < c; v++) {
        g += _[v] + b[v];
        _[v] = Math.floor(g % m);
        g = Math.floor(g / m);
      }
      return g;
    }
    function P(_, b) {
      var g = 0;
      for (var v = 0; v < c; v++) {
        g += _[v] * b;
        _[v] = Math.floor(g % m);
        g = Math.floor(g / m);
      }
      return g;
    }
    function L(_, b) {
      var g;
      var v;
      var R = new Array(c + c);
      for (g = 0; g < c + c; g++) {
        R[g] = 0;
      }
      var I;
      for (g = 0; g < c; g++) {
        I = 0;
        v = 0;
        for (; v < c; v++) {
          I += _[g] * b[v] + R[g + v];
          R[g + v] = I % m;
          I /= m;
        }
        for (; v < c + c - g; v++) {
          I += R[g + v];
          R[g + v] = I % m;
          I /= m;
        }
      }
      for (g = 0; g < c; g++) {
        _[g] = R[g];
      }
      return R.slice(c, c);
    }
    function U(_, b) {
      for (var g = 0; g < c; g++) {
        _[g] &= b[g];
      }
      return _;
    }
    function Z(_, b) {
      for (var g = 0; g < c; g++) {
        _[g] |= b[g];
      }
      return _;
    }
    function V(_, b) {
      var g = x();
      if (b % u !== 0) {
        throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
      }
      for (var v = Math.floor(b / u), R = 0; R < v; R++) {
        for (var I = c - 1 - 1; I >= 0; I--) {
          g[I + 1] = g[I];
        }
        g[0] = _[0];
        I = 0;
        for (; I < c - 1; I++) {
          _[I] = _[I + 1];
        }
        _[I] = 0;
      }
      return $(g);
    }
    function B(_, b) {
      if (b > c * u) {
        throw new Error("ui64_ror: invalid number of bits to shift");
      }
      var g = new Array(c + c);
      var v;
      for (v = 0; v < c; v++) {
        g[v + c] = _[v];
        g[v] = 0;
      }
      var R = Math.floor(b / u);
      var I = b % u;
      for (v = R; v < c + c - 1; v++) {
        g[v - R] = (g[v] >>> I | g[v + 1] << u - I) & (1 << u) - 1;
      }
      g[c + c - 1 - R] = g[c + c - 1] >>> I & (1 << u) - 1;
      v = c + c - 1 - R + 1;
      for (; v < c + c; v++) {
        g[v] = 0;
      }
      for (v = 0; v < c; v++) {
        _[v] = g[v + c];
      }
      return g.slice(0, c);
    }
    function W(_, b) {
      if (b > c * u) {
        throw new Error("ui64_rol: invalid number of bits to shift");
      }
      var g = new Array(c + c);
      var v;
      for (v = 0; v < c; v++) {
        g[v + c] = 0;
        g[v] = _[v];
      }
      var R = Math.floor(b / u);
      var I = b % u;
      for (v = c - 1 - R; v > 0; v--) {
        g[v + R] = (g[v] << I | g[v - 1] >>> u - I) & (1 << u) - 1;
      }
      g[0 + R] = g[0] << I & (1 << u) - 1;
      v = 0 + R - 1;
      for (; v >= 0; v--) {
        g[v] = 0;
      }
      for (v = 0; v < c; v++) {
        _[v] = g[v];
      }
      return g.slice(c, c);
    }
    function j(_, b) {
      for (var g = 0; g < c; g++) {
        _[g] ^= b[g];
      }
    }
    function N(_, b) {
      var g = (_ & 65535) + (b & 65535);
      var v = (_ >> 16) + (b >> 16) + (g >> 16);
      return v << 16 | g & 65535;
    }
    function K(_, b) {
      return _ << b & -1 | _ >>> 32 - b & -1;
    }
    function _e(_, b) {
      function g(w, E, F, H) {
        if (w < 20) {
          return E & F | ~E & H;
        } else if (w < 40) {
          return E ^ F ^ H;
        } else if (w < 60) {
          return E & F | E & H | F & H;
        } else {
          return E ^ F ^ H;
        }
      }
      function v(w) {
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
      _[b >> 5] |= 128 << 24 - b % 32;
      _[(b + 64 >> 9 << 4) + 15] = b;
      var R = Array(80);
      var I = 1732584193;
      var z = -271733879;
      var A = -1732584194;
      var T = 271733878;
      var S = -1009589776;
      for (var k = 0; k < _.length; k += 16) {
        var C = I;
        var De = z;
        var At = A;
        var h = T;
        var l = S;
        for (var f = 0; f < 80; f++) {
          if (f < 16) {
            R[f] = _[k + f];
          } else {
            R[f] = K(R[f - 3] ^ R[f - 8] ^ R[f - 14] ^ R[f - 16], 1);
          }
          var d = N(N(K(I, 5), g(f, z, A, T)), N(N(S, R[f]), v(f)));
          S = T;
          T = A;
          A = K(z, 30);
          z = I;
          I = d;
        }
        I = N(I, C);
        z = N(z, De);
        A = N(A, At);
        T = N(T, h);
        S = N(S, l);
      }
      return [I, z, A, T, S];
    }
    function rt(_) {
      return p(_e(o(_, {
        ibits: 8,
        obits: 32,
        obigendian: true
      }), _.length * 8), {
        ibits: 32,
        ibigendian: true
      });
    }
    function Ie(_, b) {
      function g(f, d, w, E, F, H) {
        return N(K(N(N(d, f), N(E, H)), F), w);
      }
      function v(f, d, w, E, F, H, X) {
        return g(d & w | ~d & E, f, d, F, H, X);
      }
      function R(f, d, w, E, F, H, X) {
        return g(d & E | w & ~E, f, d, F, H, X);
      }
      function I(f, d, w, E, F, H, X) {
        return g(d ^ w ^ E, f, d, F, H, X);
      }
      function z(f, d, w, E, F, H, X) {
        return g(w ^ (d | ~E), f, d, F, H, X);
      }
      _[b >> 5] |= 128 << b % 32;
      _[(b + 64 >>> 9 << 4) + 14] = b;
      var A = 1732584193;
      var T = -271733879;
      var S = -1732584194;
      var k = 271733878;
      for (var C = 0; C < _.length; C += 16) {
        var De = A;
        var At = T;
        var h = S;
        var l = k;
        A = v(A, T, S, k, _[C + 0], 7, -680876936);
        k = v(k, A, T, S, _[C + 1], 12, -389564586);
        S = v(S, k, A, T, _[C + 2], 17, 606105819);
        T = v(T, S, k, A, _[C + 3], 22, -1044525330);
        A = v(A, T, S, k, _[C + 4], 7, -176418897);
        k = v(k, A, T, S, _[C + 5], 12, 1200080426);
        S = v(S, k, A, T, _[C + 6], 17, -1473231341);
        T = v(T, S, k, A, _[C + 7], 22, -45705983);
        A = v(A, T, S, k, _[C + 8], 7, 1770035416);
        k = v(k, A, T, S, _[C + 9], 12, -1958414417);
        S = v(S, k, A, T, _[C + 10], 17, -42063);
        T = v(T, S, k, A, _[C + 11], 22, -1990404162);
        A = v(A, T, S, k, _[C + 12], 7, 1804603682);
        k = v(k, A, T, S, _[C + 13], 12, -40341101);
        S = v(S, k, A, T, _[C + 14], 17, -1502002290);
        T = v(T, S, k, A, _[C + 15], 22, 1236535329);
        A = R(A, T, S, k, _[C + 1], 5, -165796510);
        k = R(k, A, T, S, _[C + 6], 9, -1069501632);
        S = R(S, k, A, T, _[C + 11], 14, 643717713);
        T = R(T, S, k, A, _[C + 0], 20, -373897302);
        A = R(A, T, S, k, _[C + 5], 5, -701558691);
        k = R(k, A, T, S, _[C + 10], 9, 38016083);
        S = R(S, k, A, T, _[C + 15], 14, -660478335);
        T = R(T, S, k, A, _[C + 4], 20, -405537848);
        A = R(A, T, S, k, _[C + 9], 5, 568446438);
        k = R(k, A, T, S, _[C + 14], 9, -1019803690);
        S = R(S, k, A, T, _[C + 3], 14, -187363961);
        T = R(T, S, k, A, _[C + 8], 20, 1163531501);
        A = R(A, T, S, k, _[C + 13], 5, -1444681467);
        k = R(k, A, T, S, _[C + 2], 9, -51403784);
        S = R(S, k, A, T, _[C + 7], 14, 1735328473);
        T = R(T, S, k, A, _[C + 12], 20, -1926607734);
        A = I(A, T, S, k, _[C + 5], 4, -378558);
        k = I(k, A, T, S, _[C + 8], 11, -2022574463);
        S = I(S, k, A, T, _[C + 11], 16, 1839030562);
        T = I(T, S, k, A, _[C + 14], 23, -35309556);
        A = I(A, T, S, k, _[C + 1], 4, -1530992060);
        k = I(k, A, T, S, _[C + 4], 11, 1272893353);
        S = I(S, k, A, T, _[C + 7], 16, -155497632);
        T = I(T, S, k, A, _[C + 10], 23, -1094730640);
        A = I(A, T, S, k, _[C + 13], 4, 681279174);
        k = I(k, A, T, S, _[C + 0], 11, -358537222);
        S = I(S, k, A, T, _[C + 3], 16, -722521979);
        T = I(T, S, k, A, _[C + 6], 23, 76029189);
        A = I(A, T, S, k, _[C + 9], 4, -640364487);
        k = I(k, A, T, S, _[C + 12], 11, -421815835);
        S = I(S, k, A, T, _[C + 15], 16, 530742520);
        T = I(T, S, k, A, _[C + 2], 23, -995338651);
        A = z(A, T, S, k, _[C + 0], 6, -198630844);
        k = z(k, A, T, S, _[C + 7], 10, 1126891415);
        S = z(S, k, A, T, _[C + 14], 15, -1416354905);
        T = z(T, S, k, A, _[C + 5], 21, -57434055);
        A = z(A, T, S, k, _[C + 12], 6, 1700485571);
        k = z(k, A, T, S, _[C + 3], 10, -1894986606);
        S = z(S, k, A, T, _[C + 10], 15, -1051523);
        T = z(T, S, k, A, _[C + 1], 21, -2054922799);
        A = z(A, T, S, k, _[C + 8], 6, 1873313359);
        k = z(k, A, T, S, _[C + 15], 10, -30611744);
        S = z(S, k, A, T, _[C + 6], 15, -1560198380);
        T = z(T, S, k, A, _[C + 13], 21, 1309151649);
        A = z(A, T, S, k, _[C + 4], 6, -145523070);
        k = z(k, A, T, S, _[C + 11], 10, -1120210379);
        S = z(S, k, A, T, _[C + 2], 15, 718787259);
        T = z(T, S, k, A, _[C + 9], 21, -343485551);
        A = N(A, De);
        T = N(T, At);
        S = N(S, h);
        k = N(k, l);
      }
      return [A, T, S, k];
    }
    function Ue(_) {
      return p(Ie(o(_, {
        ibits: 8,
        obits: 32,
        obigendian: false
      }), _.length * 8), {
        ibits: 32,
        ibigendian: false
      });
    }
    function Ye(_) {
      this.mul = y(88, 81, 244, 45, 76, 149, 127, 45);
      this.inc = y(20, 5, 123, 126, 247, 103, 129, 79);
      this.mask = y(0, 0, 0, 0, 255, 255, 255, 255);
      this.state = D(this.inc);
      this.next();
      U(this.state, this.mask);
      var b;
      if (_ !== undefined) {
        _ = O(_ >>> 0);
      } else if (typeof window == "object" && typeof window.crypto == "object" && typeof window.crypto.getRandomValues == "function") {
        b = new Uint32Array(2);
        window.crypto.getRandomValues(b);
        _ = Z(O(b[0] >>> 0), B(O(b[1] >>> 0), 32));
      } else if (typeof globalThis == "object" && typeof globalThis.crypto == "object" && typeof globalThis.crypto.getRandomValues == "function") {
        b = new Uint32Array(2);
        globalThis.crypto.getRandomValues(b);
        _ = Z(O(b[0] >>> 0), B(O(b[1] >>> 0), 32));
      } else {
        _ = O(Math.random() * 4294967295 >>> 0);
        Z(_, B(O(new Date().getTime()), 32));
      }
      Z(this.state, _);
      this.next();
    }
    Ye.prototype.next = function () {
      var _ = D(this.state);
      L(this.state, this.mul);
      M(this.state, this.inc);
      var b = D(_);
      B(b, 18);
      j(b, _);
      B(b, 27);
      var g = D(_);
      B(g, 59);
      U(b, this.mask);
      var v = $(g);
      var R = D(b);
      W(R, 32 - v);
      B(b, v);
      j(b, R);
      return $(b);
    };
    Ye.prototype.reseed = function (_) {
      if (typeof _ != "string") {
        throw new Error("UUID: PCG: seed: invalid argument (string expected)");
      }
      for (var b = _e(o(_, {
          ibits: 8,
          obits: 32,
          obigendian: true
        }), _.length * 8), g = 0; g < b.length; g++) {
        j(mt.state, O(b[g] >>> 0));
      }
    };
    var mt = new Ye();
    Ye.reseed = function (_) {
      mt.reseed(_);
    };
    function Et(_, b) {
      var g = [];
      for (var v = 0; v < _; v++) {
        g[v] = mt.next() % b;
      }
      return g;
    }
    var Vt = 0;
    var it = 0;
    function G() {
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
      G.prototype = new Uint8Array(16);
    } else if (nr.Buffer) {
      G.prototype = nr.Buffer.alloc(16);
    } else {
      G.prototype = new Array(16);
    }
    G.prototype.constructor = G;
    G.prototype.make = function (_) {
      var b;
      var g = this;
      if (_ === 1) {
        var v = new Date();
        var R = v.getTime();
        if (R !== Vt) {
          it = 0;
        } else {
          it++;
        }
        Vt = R;
        var I = O(R);
        P(I, 10000);
        M(I, y(1, 178, 29, 210, 19, 129, 64, 0));
        if (it > 0) {
          M(I, O(it));
        }
        var z;
        z = V(I, 8);
        g[3] = z & 255;
        z = V(I, 8);
        g[2] = z & 255;
        z = V(I, 8);
        g[1] = z & 255;
        z = V(I, 8);
        g[0] = z & 255;
        z = V(I, 8);
        g[5] = z & 255;
        z = V(I, 8);
        g[4] = z & 255;
        z = V(I, 8);
        g[7] = z & 255;
        z = V(I, 8);
        g[6] = z & 15;
        var A = Et(2, 255);
        g[8] = A[0];
        g[9] = A[1];
        var T = Et(6, 255);
        T[0] |= 1;
        T[0] |= 2;
        b = 0;
        for (; b < 6; b++) {
          g[10 + b] = T[b];
        }
      } else if (_ === 4) {
        var S = Et(16, 255);
        for (b = 0; b < 16; b++) {
          this[b] = S[b];
        }
      } else if (_ === 3 || _ === 5) {
        var k = "";
        var C = typeof arguments[1] == "object" && arguments[1] instanceof G ? arguments[1] : new G().parse(arguments[1]);
        for (b = 0; b < 16; b++) {
          k += String.fromCharCode(C[b]);
        }
        k += arguments[2];
        var De = _ === 3 ? Ue(k) : rt(k);
        for (b = 0; b < 16; b++) {
          g[b] = De.charCodeAt(b);
        }
      } else {
        throw new Error("UUID: make: invalid version");
      }
      g[6] &= 15;
      g[6] |= _ << 4;
      g[8] &= 63;
      g[8] |= 128;
      return g;
    };
    G.prototype.format = function (_) {
      var b;
      var g;
      if (_ === "z85") {
        b = i(this, 16);
      } else if (_ === "b16") {
        g = Array(32);
        n(this, 0, 15, true, g, 0);
        b = g.join("");
      } else if (_ === undefined || _ === "std") {
        g = new Array(36);
        n(this, 0, 3, false, g, 0);
        g[8] = "-";
        n(this, 4, 5, false, g, 9);
        g[13] = "-";
        n(this, 6, 7, false, g, 14);
        g[18] = "-";
        n(this, 8, 9, false, g, 19);
        g[23] = "-";
        n(this, 10, 15, false, g, 24);
        b = g.join("");
      }
      return b;
    };
    G.prototype.toString = function (_) {
      return this.format(_);
    };
    G.prototype.toJSON = function () {
      return this.format("std");
    };
    G.prototype.parse = function (_, b) {
      if (typeof _ != "string") {
        throw new Error("UUID: parse: invalid argument (type string expected)");
      }
      if (b === "z85") {
        s(_, this);
      } else if (b === "b16") {
        t(_, 0, 35, this, 0);
      } else if (b === undefined || b === "std") {
        var g = {
          nil: "00000000-0000-0000-0000-000000000000",
          "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
          "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
          "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
          "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
        };
        if (g[_] !== undefined) {
          _ = g[_];
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
    G.prototype.export = function () {
      var _ = Array(16);
      for (var b = 0; b < 16; b++) {
        _[b] = this[b];
      }
      return _;
    };
    G.prototype.import = function (_) {
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
    G.prototype.compare = function (_) {
      if (typeof _ != "object") {
        throw new Error("UUID: compare: invalid argument (type UUID expected)");
      }
      if (!(_ instanceof G)) {
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
    G.prototype.equal = function (_) {
      return this.compare(_) === 0;
    };
    G.prototype.fold = function (_) {
      if (typeof _ === "undefined") {
        throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
      }
      if (_ < 1 || _ > 4) {
        throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
      }
      for (var b = 16 / Math.pow(2, _), g = new Array(b), v = 0; v < b; v++) {
        var R = 0;
        for (var I = 0; v + I < 16; I += b) {
          R ^= this[v + I];
        }
        g[v] = R;
      }
      return g;
    };
    G.PCG = Ye;
    return G;
  });
})(va);
var d0 = va.exports;
const is = Ca(d0);
const ar = Symbol("store-raw");
const Zt = Symbol("store-node");
function ma(e) {
  let n = e[ve];
  if (!n && (Object.defineProperty(e, ve, {
    value: n = new Proxy(e, w0)
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
function je(e) {
  let n;
  return e != null && typeof e == "object" && (e[ve] || !(n = Object.getPrototypeOf(e)) || n === Object.prototype || Array.isArray(e));
}
function wt(e, n = new Set()) {
  let t;
  let r;
  let a;
  let i;
  if (t = e != null && e[ar]) {
    return t;
  }
  if (!je(e) || n.has(e)) {
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
      if ((r = wt(a, n)) !== a) {
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
        if ((r = wt(a, n)) !== a) {
          e[i] = r;
        }
      }
    }
  }
  return e;
}
function vr(e) {
  let n = e[Zt];
  if (!n) {
    Object.defineProperty(e, Zt, {
      value: n = Object.create(null)
    });
  }
  return n;
}
function or(e, n, t) {
  return e[n] ||= Aa(t);
}
function _0(e, n) {
  const t = Reflect.getOwnPropertyDescriptor(e, n);
  if (!!t && !t.get && !!t.configurable && n !== ve && n !== Zt) {
    delete t.value;
    delete t.writable;
    t.get = () => e[ve][n];
  }
  return t;
}
function Ea(e) {
  if (Ei()) {
    const n = vr(e);
    (n._ ||= Aa())();
  }
}
function p0(e) {
  Ea(e);
  return Reflect.ownKeys(e);
}
function Aa(e) {
  const [n, t] = cr(e, {
    equals: false,
    internal: true
  });
  n.$ = t;
  return n;
}
const w0 = {
  get(e, n, t) {
    if (n === ar) {
      return e;
    }
    if (n === ve) {
      return t;
    }
    if (n === Hn) {
      Ea(e);
      return t;
    }
    const r = vr(e);
    const a = r[n];
    let i = a ? a() : e[n];
    if (n === Zt || n === "__proto__") {
      return i;
    }
    if (!a) {
      const s = Object.getOwnPropertyDescriptor(e, n);
      if (Ei() && (typeof i != "function" || e.hasOwnProperty(n)) && (!s || !s.get)) {
        i = or(r, n, i)();
      }
    }
    if (je(i)) {
      return ma(i);
    } else {
      return i;
    }
  },
  has(e, n) {
    if (n === ar || n === ve || n === Hn || n === Zt || n === "__proto__") {
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
  ownKeys: p0,
  getOwnPropertyDescriptor: _0
};
function we(e, n, t, r = false) {
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
  let s = vr(e);
  let o;
  if (o = or(s, n, a)) {
    o.$(() => t);
  }
  if (Array.isArray(e) && e.length !== i) {
    for (let p = e.length; p < i; p++) {
      if (o = s[p]) {
        o.$();
      }
    }
    if (o = or(s, "length", i)) {
      o.$(e.length);
    }
  }
  if (o = s._) {
    o.$();
  }
}
function ka(e, n) {
  const t = Object.keys(n);
  for (let r = 0; r < t.length; r += 1) {
    const a = t[r];
    we(e, a, n[a]);
  }
}
function g0(e, n) {
  if (typeof n == "function") {
    n = n(e);
  }
  n = wt(n);
  if (Array.isArray(n)) {
    if (e === n) {
      return;
    }
    let t = 0;
    let r = n.length;
    for (; t < r; t++) {
      const a = n[t];
      if (e[t] !== a) {
        we(e, t, a);
      }
    }
    we(e, "length", r);
  } else {
    ka(e, n);
  }
}
function Ft(e, n, t = []) {
  let r;
  let a = e;
  if (n.length > 1) {
    r = n.shift();
    const s = typeof r;
    const o = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let p = 0; p < r.length; p++) {
        Ft(e, [r[p]].concat(n), t);
      }
      return;
    } else if (o && s === "function") {
      for (let p = 0; p < e.length; p++) {
        if (r(e[p], p)) {
          Ft(e, [p].concat(n), t);
        }
      }
      return;
    } else if (o && s === "object") {
      const {
        from: p = 0,
        to: c = e.length - 1,
        by: u = 1
      } = r;
      for (let m = p; m <= c; m += u) {
        Ft(e, [m].concat(n), t);
      }
      return;
    } else if (n.length > 1) {
      Ft(e[r], n, [r].concat(t));
      return;
    }
    a = e[r];
    t = [r].concat(t);
  }
  let i = n[0];
  if ((typeof i != "function" || !(i = i(a, t), i === a)) && (r !== undefined || i != null)) {
    i = wt(i);
    if (r === undefined || je(a) && je(i) && !Array.isArray(i)) {
      ka(a, i);
    } else {
      we(e, r, i);
    }
  }
}
function as(...[e, n]) {
  const t = wt(e || {});
  const r = Array.isArray(t);
  const a = ma(t);
  function i(...s) {
    Na(() => {
      if (r && s.length === 1) {
        g0(t, s[0]);
      } else {
        Ft(t, s);
      }
    });
  }
  return [a, i];
}
const lr = Symbol("store-root");
function st(e, n, t, r, a) {
  const i = n[t];
  if (e === i) {
    return;
  }
  if (t !== lr && (!je(e) || !je(i) || a && e[a] !== i[a])) {
    we(n, t, e);
    return;
  }
  if (Array.isArray(e)) {
    if (e.length && i.length && (!r || a && e[0] && e[0][a] != null)) {
      let p;
      let c;
      let u;
      let m;
      let y;
      let x;
      let D;
      let O;
      u = 0;
      m = Math.min(i.length, e.length);
      for (; u < m && (i[u] === e[u] || a && i[u] && e[u] && i[u][a] === e[u][a]); u++) {
        st(e[u], i, u, r, a);
      }
      const $ = new Array(e.length);
      const M = new Map();
      m = i.length - 1;
      y = e.length - 1;
      for (; m >= u && y >= u && (i[m] === e[y] || a && i[u] && e[u] && i[m][a] === e[y][a]); m--, y--) {
        $[y] = i[m];
      }
      if (u > y || u > m) {
        for (c = u; c <= y; c++) {
          we(i, c, e[c]);
        }
        for (; c < e.length; c++) {
          we(i, c, $[c]);
          st(e[c], i, c, r, a);
        }
        if (i.length > e.length) {
          we(i, "length", e.length);
        }
        return;
      }
      D = new Array(y + 1);
      c = y;
      for (; c >= u; c--) {
        x = e[c];
        O = a && x ? x[a] : x;
        p = M.get(O);
        D[c] = p === undefined ? -1 : p;
        M.set(O, c);
      }
      for (p = u; p <= m; p++) {
        x = i[p];
        O = a && x ? x[a] : x;
        c = M.get(O);
        if (c !== undefined && c !== -1) {
          $[c] = i[p];
          c = D[c];
          M.set(O, c);
        }
      }
      for (c = u; c < e.length; c++) {
        if (c in $) {
          we(i, c, $[c]);
          st(e[c], i, c, r, a);
        } else {
          we(i, c, e[c]);
        }
      }
    } else {
      for (let p = 0, c = e.length; p < c; p++) {
        st(e[p], i, p, r, a);
      }
    }
    if (i.length > e.length) {
      we(i, "length", e.length);
    }
    return;
  }
  const s = Object.keys(e);
  for (let p = 0, c = s.length; p < c; p++) {
    st(e[s[p]], i, s[p], r, a);
  }
  const o = Object.keys(i);
  for (let p = 0, c = o.length; p < c; p++) {
    if (e[o[p]] === undefined) {
      we(i, o[p], undefined);
    }
  }
}
function os(e, n = {}) {
  const {
    merge: t,
    key: r = "id"
  } = n;
  const a = wt(e);
  return i => {
    if (!je(i) || !je(a)) {
      return a;
    }
    const s = st(a, {
      [lr]: i
    }, lr, t, r);
    if (s === undefined) {
      return i;
    } else {
      return s;
    }
  };
}
function ls(e, n) {
  const t = za(n);
  return [r => Ke(t.Provider, {
    value: e(r),
    get children() {
      return r.children;
    }
  }), () => Ba(t)];
}
function wn(e = null) {
  return {
    current: e
  };
}
const Ht = (e, n = 0, t = 1) => e > t ? t : e < n ? n : e;
const x0 = Xe("<div class=\"react-colorful__interactive\" tabindex=\"0\" role=\"slider\"></div>", 2);
const Pt = e => "touches" in e;
const b0 = (e, n) => {
  for (let t = 0; t < e.length; t++) {
    if (e[t].identifier === n) {
      return e[t];
    }
  }
  return e[0];
};
const fr = e => e && e.ownerDocument.defaultView || self;
const gi = (e, n, t) => {
  const r = e.getBoundingClientRect();
  const a = Pt(n) ? b0(n.touches, t) : n;
  return {
    left: Ht((a.pageX - (r.left + fr(e).pageXOffset)) / r.width),
    top: Ht((a.pageY - (r.top + fr(e).pageYOffset)) / r.height)
  };
};
const xi = e => {
  if (!Pt(e)) {
    e.preventDefault();
  }
};
const y0 = (e, n) => n && !Pt(e);
const Sa = e => {
  const n = wn(null);
  const t = wn(null);
  let r = false;
  const a = Oe(() => {
    const o = y => {
      const x = n.current;
      if (x && (xi(y), !y0(y, r) && !!x)) {
        if (Pt(y)) {
          r = true;
          const D = y.changedTouches || [];
          if (D.length) {
            t.current = D[0].identifier;
          }
        }
        x.focus();
        e.onMove(gi(x, y, t.current));
        m(true);
      }
    };
    const p = y => {
      xi(y);
      if ((Pt(y) ? y.touches.length > 0 : y.buttons > 0) && n.current) {
        e.onMove(gi(n.current, y, t.current));
      } else {
        m(false);
      }
    };
    const c = () => m(false);
    const u = y => {
      const x = y.which || y.keyCode;
      if (!(x < 37) && !(x > 40)) {
        y.preventDefault();
        e.onKey({
          left: x === 39 ? 0.05 : x === 37 ? -0.05 : 0,
          top: x === 40 ? 0.05 : x === 38 ? -0.05 : 0
        });
      }
    };
    function m(y) {
      const x = n.current;
      const D = fr(x);
      const O = y ? D.addEventListener : D.removeEventListener;
      O(r ? "touchmove" : "mousemove", p);
      O(r ? "touchend" : "mouseup", c);
    }
    return {
      handleMoveStart: o,
      handleKeyDown: u,
      toggleDocumentEvents: m
    };
  });
  mi(() => {
    a().toggleDocumentEvents;
  });
  const [i, s] = Ci(e, ["onMove", "onKey"]);
  return (() => {
    const o = x0.cloneNode(true);
    on(o, "keydown", a().handleKeyDown, true);
    (p => n.current = p)(o);
    on(o, "mousedown", a().handleMoveStart, true);
    on(o, "touchstart", a().handleMoveStart, true);
    Ni(o, s, false, false);
    return o;
  })();
};
hr(["touchstart", "mousedown", "keydown"]);
const mr = e => e.filter(Boolean).join(" ");
const v0 = Xe("<div><div class=\"react-colorful__pointer-fill\"></div></div>", 4);
const Ta = e => {
  ht(() => {
    console.log(e.color);
  });
  return (() => {
    const n = v0.cloneNode(true);
    const t = n.firstChild;
    ye(r => {
      const a = mr(["react-colorful__pointer", e.className]);
      const i = `${e.top * 100}%`;
      const s = `${e.left * 100}%`;
      const o = e.color;
      if (a !== r._v$) {
        n.className = r._v$ = a;
      }
      if (i !== r._v$2) {
        n.style.setProperty("top", r._v$2 = i);
      }
      if (s !== r._v$3) {
        n.style.setProperty("left", r._v$3 = s);
      }
      if (o !== r._v$4) {
        t.style.setProperty("background-color", r._v$4 = o);
      }
      return r;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return n;
  })();
};
const ue = (e, n = 0, t = Math.pow(10, n)) => Math.round(t * e) / t;
const m0 = e => T0(sr(e));
const sr = e => {
  if (e[0] === "#") {
    e = e.substr(1);
  }
  if (e.length < 6) {
    return {
      r: parseInt(e[0] + e[0], 16),
      g: parseInt(e[1] + e[1], 16),
      b: parseInt(e[2] + e[2], 16),
      a: 1
    };
  } else {
    return {
      r: parseInt(e.substr(0, 2), 16),
      g: parseInt(e.substr(2, 2), 16),
      b: parseInt(e.substr(4, 2), 16),
      a: 1
    };
  }
};
const E0 = e => S0(Ia(e));
const A0 = ({
  h: e,
  s: n,
  v: t,
  a: r
}) => {
  const a = (200 - n) * t / 100;
  return {
    h: ue(e),
    s: ue(a > 0 && a < 200 ? n * t / 100 / (a <= 100 ? a : 200 - a) * 100 : 0),
    l: ue(a / 2),
    a: ue(r, 2)
  };
};
const Fa = e => {
  const {
    h: n,
    s: t,
    l: r
  } = A0(e);
  return `hsl(${n}, ${t}%, ${r}%)`;
};
const Ia = ({
  h: e,
  s: n,
  v: t,
  a: r
}) => {
  e = e / 360 * 6;
  n = n / 100;
  t = t / 100;
  const a = Math.floor(e);
  const i = t * (1 - n);
  const s = t * (1 - (e - a) * n);
  const o = t * (1 - (1 - e + a) * n);
  const p = a % 6;
  return {
    r: ue([t, s, i, i, o, t][p] * 255),
    g: ue([o, t, t, s, i, i][p] * 255),
    b: ue([i, i, o, t, t, s][p] * 255),
    a: ue(r, 2)
  };
};
const k0 = e => {
  const {
    r: n,
    g: t,
    b: r
  } = Ia(e);
  return `rgb(${n}, ${t}, ${r})`;
};
const Zn = e => {
  const n = e.toString(16);
  if (n.length < 2) {
    return "0" + n;
  } else {
    return n;
  }
};
const S0 = ({
  r: e,
  g: n,
  b: t
}) => "#" + Zn(e) + Zn(n) + Zn(t);
const T0 = ({
  r: e,
  g: n,
  b: t,
  a: r
}) => {
  const a = Math.max(e, n, t);
  const i = a - Math.min(e, n, t);
  const s = i ? a === e ? (n - t) / i : a === n ? 2 + (t - e) / i : 4 + (e - n) / i : 0;
  return {
    h: ue((s < 0 ? s + 6 : s) * 60),
    s: ue(a ? i / a * 100 : 0),
    v: ue(a / 255 * 100),
    a: r
  };
};
const F0 = Xe("<div></div>", 2);
const I0 = e => {
  const n = r => {
    e.onChange({
      h: r.left * 360
    });
  };
  const t = r => {
    e.onChange({
      h: Ht(e.hue + r.left * 360, 0, 360)
    });
  };
  return (() => {
    const r = F0.cloneNode(true);
    Ct(r, Ke(Sa, {
      onMove: n,
      onKey: t,
      "aria-label": "Hue",
      get "aria-valuetext"() {
        return ue(e.hue);
      },
      get children() {
        return Ke(Ta, {
          className: "react-colorful__hue-pointer",
          get left() {
            return e.hue / 360;
          },
          top: 0,
          get color() {
            return Fa({
              h: e.hue,
              s: 100,
              v: 100,
              a: 1
            });
          }
        });
      }
    }));
    ye(() => r.className = mr(["react-colorful__hue", e.className]));
    return r;
  })();
};
const U0 = Xe("<div class=\"react-colorful__saturation\"></div>", 2);
const D0 = e => {
  const n = r => {
    e.onChange({
      s: r.left * 100,
      v: 100 - r.top * 100
    });
  };
  const t = r => {
    e.onChange({
      s: Ht(e.hsva.s + r.left * 100, 0, 100),
      v: Ht(e.hsva.v - r.top * 100, 0, 100)
    });
  };
  return (() => {
    const r = U0.cloneNode(true);
    Ct(r, Ke(Sa, {
      onMove: n,
      onKey: t,
      "aria-label": "Color",
      get "aria-valuetext"() {
        return `Saturation ${ue(e.hsva.s)}%, Brightness ${ue(e.hsva.v)}%`;
      },
      get children() {
        return Ke(Ta, {
          className: "react-colorful__saturation-pointer",
          get top() {
            return 1 - e.hsva.v / 100;
          },
          get left() {
            return e.hsva.s / 100;
          },
          get color() {
            return Fa(e.hsva);
          }
        });
      }
    }));
    ye(() => r.style.setProperty("background-color", k0({
      h: e.hsva.h,
      s: 100,
      v: 100,
      a: 1
    })));
    return r;
  })();
};
const Ua = (e, n) => {
  if (e === n) {
    return true;
  }
  for (const t in e) {
    if (e[t] !== n[t]) {
      return false;
    }
  }
  return true;
};
const C0 = (e, n) => e.toLowerCase() === n.toLowerCase() ? true : Ua(sr(e), sr(n));
function R0(e) {
  const [n, t] = cr(e.colorModel.toHsva(e.color));
  const r = wn({
    color: e.color,
    hsva: n()
  });
  ht(() => {
    if (!e.colorModel.equal(e.color, r.current.color)) {
      const i = e.colorModel.toHsva(e.color);
      r.current = {
        hsva: i,
        color: e.color
      };
      t(i);
    }
  });
  ht(() => {
    var i;
    let s;
    if (!Ua(n(), r.current.hsva) && !e.colorModel.equal(s = e.colorModel.fromHsva(n()), r.current.color)) {
      r.current = {
        hsva: n(),
        color: s
      };
      if ((i = e.onChange) != null) {
        i.call(e, s);
      }
    }
  });
  return [n, i => {
    t(s => Object.assign({}, s, i));
  }];
}
const N0 = () => {
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
};
var z0 = `.react-colorful {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  user-select: none;
  cursor: default;
}

.react-colorful__saturation {
  position: relative;
  flex-grow: 1;
  border-color: transparent; /* Fixes https://github.com/omgovich/react-colorful/issues/139 */
  border-bottom: 12px solid #000;
  border-radius: 8px 8px 0 0;
  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0)),
    linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
}

.react-colorful__pointer-fill,
.react-colorful__alpha-gradient {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  border-radius: inherit;
}

/* Improve elements rendering on light backgrounds */
.react-colorful__alpha-gradient,
.react-colorful__saturation {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
}

.react-colorful__hue,
.react-colorful__alpha {
  position: relative;
  height: 24px;
}

.react-colorful__hue {
  background: linear-gradient(
    to right,
    #f00 0%,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00 100%
  );
}

/* Round bottom corners of the last element: \`Hue\` for \`ColorPicker\` or \`Alpha\` for \`AlphaColorPicker\` */
.react-colorful__last-control {
  border-radius: 0 0 8px 8px;
}

.react-colorful__interactive {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  outline: none;
  /* Don't trigger the default scrolling behavior when the event is originating from this element */
  touch-action: none;
}

.react-colorful__pointer {
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.react-colorful__interactive:focus .react-colorful__pointer {
  transform: translate(-50%, -50%) scale(1.1);
}

/* Chessboard-like pattern for alpha related elements */
.react-colorful__alpha,
.react-colorful__alpha-pointer {
  background-color: #fff;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>');
}

/* Display the saturation pointer over the hue one */
.react-colorful__saturation-pointer {
  z-index: 3;
}

/* Display the hue pointer over the alpha one */
.react-colorful__hue-pointer {
  z-index: 2;
}
`;
const bi = new Map();
const B0 = e => {
  ht(() => {
    const n = e.current ? e.current.ownerDocument : document;
    if (typeof n !== "undefined" && !bi.has(n)) {
      const t = n.createElement("style");
      t.innerHTML = z0;
      bi.set(n, t);
      const r = N0();
      if (r) {
        t.setAttribute("nonce", r);
      }
      n.head.appendChild(t);
    }
  });
};
const O0 = Xe("<div></div>", 2);
const M0 = e => {
  const n = Di({
    color: e.colorModel.defaultColor
  }, e);
  let t = wn();
  B0({
    current: t.current
  });
  const [r, a] = R0(n);
  const [i, s] = Ci(n, ["color", "colorModel", "onChange", "className"]);
  ht(() => {
    console.log(r());
  });
  return (() => {
    const o = O0.cloneNode(true);
    (p => t.current = p)(o);
    Ni(o, s, false, true);
    Ct(o, Ke(D0, {
      get hsva() {
        return r();
      },
      onChange: a
    }), null);
    Ct(o, Ke(I0, {
      get hue() {
        return r().h;
      },
      onChange: a,
      className: "react-colorful__last-control"
    }), null);
    ye(() => o.className = mr(["react-colorful", n.className]));
    return o;
  })();
};
const L0 = {
  defaultColor: "000",
  toHsva: m0,
  fromHsva: E0,
  equal: C0
};
const fs = e => Ke(M0, Di(e, {
  colorModel: L0
}));
Xe("<div><div class=\"react-colorful__alpha-gradient\"></div></div>", 4);
Xe("<div></div>", 2);
Xe("<input>", 1);
hr(["input"]);
export { H0 as F, fs as H, j0 as M, P0 as S, is as U, cr as a, as as b, ls as c, ns as d, hr as e, Ct as f, Ke as g, ye as h, rs as i, eo as j, X0 as k, Oe as l, on as m, to as n, K0 as o, Z0 as p, G0 as q, os as r, jn as s, Xe as t, V0 as u, Y0 as v };
