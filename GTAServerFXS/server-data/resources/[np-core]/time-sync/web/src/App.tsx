import "./style.css";
import { N as _0x6dc39a } from "./v-packages.js";
(function () {
  const varData_1 = document.createElement("link").relList;
  if (varData_1 && varData_1.supports && varData_1.supports("modulepreload")) {
    return;
  }
  for (const varData_2 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    handleAction_2(varData_2);
  }
  new MutationObserver(param_1 => {
    for (const varData_3 of param_1) {
      if (varData_3.type === "childList") {
        for (const varData_4 of varData_3.addedNodes) {
          if (varData_4.tagName === "LINK" && varData_4.rel === "modulepreload") {
            handleAction_2(varData_4);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function handleAction_1(param_1) {
    const varData_5 = {};
    if (param_1.integrity) {
      varData_5.integrity = param_1.integrity;
    }
    if (param_1.referrerPolicy) {
      varData_5.referrerPolicy = param_1.referrerPolicy;
    }
    if (param_1.crossOrigin === "use-credentials") {
      varData_5.credentials = "include";
    } else if (param_1.crossOrigin === "anonymous") {
      varData_5.credentials = "omit";
    } else {
      varData_5.credentials = "same-origin";
    }
    return varData_5;
  }
  function handleAction_2(param_1) {
    if (param_1.ep) {
      return;
    }
    param_1.ep = true;
    const varData_6 = handleAction_1(param_1);
    fetch(param_1.href, varData_6);
  }
})();
const xe = (param_1, param_2) => param_1 === param_2;
const b = Symbol("solid-proxy");
const te = Symbol("solid-track");
const j = {
  equals: xe
};
let fe = he;
const v = 1;
const M = 2;
const ce = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var a = null;
let Z = null;
let c = null;
let y = null;
let A = null;
let H = 0;
const [Se, ht] = X(false);
function Ee(param_1, param_2) {
  const varData_7 = c;
  const varData_8 = a;
  const varData_9 = param_1.length === 0;
  const varData_10 = varData_9 ? ce : {
    owned: null,
    cleanups: null,
    context: null,
    owner: param_2 === undefined ? varData_8 : param_2
  };
  const varData_11 = varData_9 ? param_1 : () => param_1(() => w(() => k(varData_10)));
  a = varData_10;
  c = null;
  try {
    return S(varData_11, true);
  } finally {
    c = varData_7;
    a = varData_8;
  }
}
function X(param_1, param_2) {
  param_2 = param_2 ? Object.assign({}, j, param_2) : j;
  const varData_12 = {
    value: param_1,
    observers: null,
    observerSlots: null,
    comparator: param_2.equals || undefined
  };
  const varData_13 = param_1_1 => {
    if (typeof param_1_1 == "function") {
      param_1_1 = param_1_1(varData_12.value);
    }
    return de(varData_12, param_1_1);
  };
  return [ae.bind(varData_12), varData_13];
}
function Le(param_1, param_2, param_3) {
  const varData_14 = U(param_1, param_2, true, v);
  T(varData_14);
}
function P(param_1, param_2, param_3) {
  const varData_15 = U(param_1, param_2, false, v);
  T(varData_15);
}
function Te(param_1, param_2, param_3) {
  fe = Ie;
  const varData_16 = U(param_1, param_2, false, v);
  if (!param_3 || !param_3.render) {
    varData_16.user = true;
  }
  if (A) {
    A.push(varData_16);
  } else {
    T(varData_16);
  }
}
function x(param_1, param_2, param_3) {
  param_3 = param_3 ? Object.assign({}, j, param_3) : j;
  const varData_17 = U(param_1, param_2, true, 0);
  varData_17.observers = null;
  varData_17.observerSlots = null;
  varData_17.comparator = param_3.equals || undefined;
  T(varData_17);
  return ae.bind(varData_17);
}
function K(param_1) {
  return S(param_1, false);
}
function w(param_1) {
  if (c === null) {
    return param_1();
  }
  const varData_18 = c;
  c = null;
  try {
    return param_1();
  } finally {
    c = varData_18;
  }
}
function Oe(param_1) {
  Te(() => w(param_1));
}
function Pe(param_1) {
  if (a !== null) {
    if (a.cleanups === null) {
      a.cleanups = [param_1];
    } else {
      a.cleanups.push(param_1);
    }
  }
  return param_1;
}
function ue() {
  return c;
}
function $e(param_1) {
  const varData_19 = c;
  const varData_20 = a;
  return Promise.resolve().then(() => {
    c = varData_19;
    a = varData_20;
    let varData_21;
    S(param_1, false);
    c = a = null;
    if (varData_21) {
      return varData_21.done;
    } else {
      return undefined;
    }
  });
}
function Ne() {
  return [Se, $e];
}
function _e(param_1, param_2) {
  const varData_22 = Symbol("context");
  return {
    id: varData_22,
    Provider: Re(varData_22),
    defaultValue: param_1
  };
}
function je(param_1) {
  let varData_23;
  if ((varData_23 = pe(a, param_1.id)) !== undefined) {
    return varData_23;
  } else {
    return param_1.defaultValue;
  }
}
function Me(param_1) {
  const varData_24 = x(param_1);
  const varData_25 = x(() => W(varData_24()));
  varData_25.toArray = () => {
    const varData_26 = varData_25();
    if (Array.isArray(varData_26)) {
      return varData_26;
    } else if (varData_26 != null) {
      return [varData_26];
    } else {
      return [];
    }
  };
  return varData_25;
}
function ae() {
  if (this.sources && this.state) {
    if (this.state === v) {
      T(this);
    } else {
      const varData_27 = y;
      y = null;
      S(() => B(this), false);
      y = varData_27;
    }
  }
  if (c) {
    const varData_28 = this.observers ? this.observers.length : 0;
    if (c.sources) {
      c.sources.push(this);
      c.sourceSlots.push(varData_28);
    } else {
      c.sources = [this];
      c.sourceSlots = [varData_28];
    }
    if (this.observers) {
      this.observers.push(c);
      this.observerSlots.push(c.sources.length - 1);
    } else {
      this.observers = [c];
      this.observerSlots = [c.sources.length - 1];
    }
  }
  return this.value;
}
function de(param_1, param_2, param_3) {
  let varData_29 = param_1.value;
  if (!param_1.comparator || !param_1.comparator(varData_29, param_2)) {
    param_1.value = param_2;
    if (param_1.observers && param_1.observers.length) {
      S(() => {
        for (let numericVal = 0; numericVal < param_1.observers.length; numericVal += 1) {
          const varData_30 = param_1.observers[numericVal];
          const varData_31 = Z && Z.running;
          if (varData_31) {
            Z.disposed.has(varData_30);
          }
          if (varData_31 ? !varData_30.tState : !varData_30.state) {
            if (varData_30.pure) {
              y.push(varData_30);
            } else {
              A.push(varData_30);
            }
            if (varData_30.observers) {
              ge(varData_30);
            }
          }
          if (!varData_31) {
            varData_30.state = v;
          }
        }
        if (y.length > 1000000) {
          y = [];
          throw new Error();
        }
      }, false);
    }
  }
  return param_2;
}
function T(param_1) {
  if (!param_1.fn) {
    return;
  }
  k(param_1);
  const varData_32 = a;
  const varData_33 = c;
  const varData_34 = H;
  c = a = param_1;
  De(param_1, param_1.value, varData_34);
  c = varData_33;
  a = varData_32;
}
function De(param_1, param_2, param_3) {
  let varData_35;
  try {
    varData_35 = param_1.fn(param_2);
  } catch (err) {
    if (param_1.pure) {
      param_1.state = v;
      if (param_1.owned) {
        param_1.owned.forEach(k);
      }
      param_1.owned = null;
    }
    param_1.updatedAt = param_3 + 1;
    return ye(err);
  }
  if (!param_1.updatedAt || param_1.updatedAt <= param_3) {
    if (param_1.updatedAt != null && "observers" in param_1) {
      de(param_1, varData_35);
    } else {
      param_1.value = varData_35;
    }
    param_1.updatedAt = param_3;
  }
}
function U(param_1, param_2, param_3, _0x6f681e = v, param_5) {
  const varData_36 = {
    fn: param_1,
    state: _0x6f681e,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: param_2,
    owner: a,
    context: null,
    pure: param_3
  };
  if (a !== null) {
    if (a !== ce) {
      if (a.owned) {
        a.owned.push(varData_36);
      } else {
        a.owned = [varData_36];
      }
    }
  }
  return varData_36;
}
function D(param_1) {
  if (param_1.state === 0) {
    return;
  }
  if (param_1.state === M) {
    return B(param_1);
  }
  if (param_1.suspense && w(param_1.suspense.inFallback)) {
    return param_1.suspense.effects.push(param_1);
  }
  const itemList = [param_1];
  while ((param_1 = param_1.owner) && (!param_1.updatedAt || param_1.updatedAt < H)) {
    if (param_1.state) {
      itemList.push(param_1);
    }
  }
  for (let loopIdx = itemList.length - 1; loopIdx >= 0; loopIdx--) {
    param_1 = itemList[loopIdx];
    if (param_1.state === v) {
      T(param_1);
    } else if (param_1.state === M) {
      const varData_37 = y;
      y = null;
      S(() => B(param_1, itemList[0]), false);
      y = varData_37;
    }
  }
}
function S(param_1, param_2) {
  if (y) {
    return param_1();
  }
  let isDisabled = false;
  if (!param_2) {
    y = [];
  }
  if (A) {
    isDisabled = true;
  } else {
    A = [];
  }
  H++;
  try {
    const varData_38 = param_1();
    Be(isDisabled);
    return varData_38;
  } catch (err) {
    if (!isDisabled) {
      A = null;
    }
    y = null;
    ye(err);
  }
}
function Be(param_1) {
  if (y) {
    he(y);
    y = null;
  }
  if (param_1) {
    return;
  }
  const varData_39 = A;
  A = null;
  if (varData_39.length) {
    S(() => fe(varData_39), false);
  }
}
function he(param_1) {
  for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
    D(param_1[numericVal]);
  }
}
function Ie(param_1) {
  let varData_40;
  let numericVal = 0;
  for (varData_40 = 0; varData_40 < param_1.length; varData_40++) {
    const varData_41 = param_1[varData_40];
    if (varData_41.user) {
      param_1[numericVal++] = varData_41;
    } else {
      D(varData_41);
    }
  }
  for (varData_40 = 0; varData_40 < numericVal; varData_40++) {
    D(param_1[varData_40]);
  }
}
function B(param_1, param_2) {
  param_1.state = 0;
  for (let numericVal = 0; numericVal < param_1.sources.length; numericVal += 1) {
    const varData_42 = param_1.sources[numericVal];
    if (varData_42.sources) {
      const varData_43 = varData_42.state;
      if (varData_43 === v) {
        if (varData_42 !== param_2 && (!varData_42.updatedAt || varData_42.updatedAt < H)) {
          D(varData_42);
        }
      } else if (varData_43 === M) {
        B(varData_42, param_2);
      }
    }
  }
}
function ge(param_1) {
  for (let numericVal = 0; numericVal < param_1.observers.length; numericVal += 1) {
    const varData_44 = param_1.observers[numericVal];
    if (!varData_44.state) {
      varData_44.state = M;
      if (varData_44.pure) {
        y.push(varData_44);
      } else {
        A.push(varData_44);
      }
      if (varData_44.observers) {
        ge(varData_44);
      }
    }
  }
}
function k(param_1) {
  let varData_45;
  if (param_1.sources) {
    while (param_1.sources.length) {
      const varData_46 = param_1.sources.pop();
      const varData_47 = param_1.sourceSlots.pop();
      const varData_48 = varData_46.observers;
      if (varData_48 && varData_48.length) {
        const varData_49 = varData_48.pop();
        const varData_50 = varData_46.observerSlots.pop();
        if (varData_47 < varData_48.length) {
          varData_49.sourceSlots[varData_50] = varData_47;
          varData_48[varData_47] = varData_49;
          varData_46.observerSlots[varData_47] = varData_50;
        }
      }
    }
  }
  if (param_1.owned) {
    for (varData_45 = param_1.owned.length - 1; varData_45 >= 0; varData_45--) {
      k(param_1.owned[varData_45]);
    }
    param_1.owned = null;
  }
  if (param_1.cleanups) {
    for (varData_45 = param_1.cleanups.length - 1; varData_45 >= 0; varData_45--) {
      param_1.cleanups[varData_45]();
    }
    param_1.cleanups = null;
  }
  param_1.state = 0;
  param_1.context = null;
}
function ye(param_1) {
  throw param_1;
}
function pe(param_1, param_2) {
  if (param_1) {
    if (param_1.context && param_1.context[param_2] !== undefined) {
      return param_1.context[param_2];
    } else {
      return pe(param_1.owner, param_2);
    }
  } else {
    return undefined;
  }
}
function W(param_1) {
  if (typeof param_1 == "function" && !param_1.length) {
    return W(param_1());
  }
  if (Array.isArray(param_1)) {
    const itemList = [];
    for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
      const varData_51 = W(param_1[numericVal]);
      if (Array.isArray(varData_51)) {
        itemList.push.apply(itemList, varData_51);
      } else {
        itemList.push(varData_51);
      }
    }
    return itemList;
  }
  return param_1;
}
function Re(param_1, param_2) {
  return function (param_1_1) {
    let varData_52;
    P(() => varData_52 = w(() => {
      a.context = {
        [param_1]: param_1_1.value
      };
      return Me(() => param_1_1.children);
    }), undefined);
    return varData_52;
  };
}
function m(param_1, param_2) {
  return w(() => param_1(param_2 || {}));
}
const Fe = param_1 => "Stale read from <" + param_1 + ">.";
function He(param_1) {
  const varData_53 = param_1.keyed;
  const varData_54 = x(() => param_1.when, undefined, {
    equals: (param_1_1, param_2) => varData_53 ? param_1_1 === param_2 : !param_1_1 == !param_2
  });
  return x(() => {
    const varData_55 = varData_54();
    if (varData_55) {
      const varData_56 = param_1.children;
      if (typeof varData_56 == "function" && varData_56.length > 0) {
        return w(() => varData_56(varData_53 ? varData_55 : () => {
          if (!w(varData_54)) {
            throw Fe("Show");
          }
          return param_1.when;
        }));
      } else {
        return varData_56;
      }
    }
    return param_1.fallback;
  }, undefined, undefined);
}
function Ue(param_1, param_2, param_3) {
  let varData_57 = param_3.length;
  let varData_58 = param_2.length;
  let varData_59 = varData_57;
  let numericVal = 0;
  let numericVal_1 = 0;
  let varData_60 = param_2[varData_58 - 1].nextSibling;
  let varData_61 = null;
  while (numericVal < varData_58 || numericVal_1 < varData_59) {
    if (param_2[numericVal] === param_3[numericVal_1]) {
      numericVal++;
      numericVal_1++;
      continue;
    }
    while (param_2[varData_58 - 1] === param_3[varData_59 - 1]) {
      varData_58--;
      varData_59--;
    }
    if (varData_58 === numericVal) {
      const varData_62 = varData_59 < varData_57 ? numericVal_1 ? param_3[numericVal_1 - 1].nextSibling : param_3[varData_59 - numericVal_1] : varData_60;
      while (numericVal_1 < varData_59) {
        param_1.insertBefore(param_3[numericVal_1++], varData_62);
      }
    } else if (varData_59 === numericVal_1) {
      while (numericVal < varData_58) {
        if (!varData_61 || !varData_61.has(param_2[numericVal])) {
          param_2[numericVal].remove();
        }
        numericVal++;
      }
    } else if (param_2[numericVal] === param_3[varData_59 - 1] && param_3[numericVal_1] === param_2[varData_58 - 1]) {
      const varData_63 = param_2[--varData_58].nextSibling;
      param_1.insertBefore(param_3[numericVal_1++], param_2[numericVal++].nextSibling);
      param_1.insertBefore(param_3[--varData_59], varData_63);
      param_2[varData_58] = param_3[varData_59];
    } else {
      if (!varData_61) {
        varData_61 = new Map();
        let varData_64 = numericVal_1;
        while (varData_64 < varData_59) {
          varData_61.set(param_3[varData_64], varData_64++);
        }
      }
      const varData_65 = varData_61.get(param_2[numericVal]);
      if (varData_65 != null) {
        if (numericVal_1 < varData_65 && varData_65 < varData_59) {
          let varData_66 = numericVal;
          let numericVal_2 = 1;
          let varData_67;
          while (++varData_66 < varData_58 && varData_66 < varData_59 && (varData_67 = varData_61.get(param_2[varData_66])) != null && varData_67 === varData_65 + numericVal_2) {
            numericVal_2++;
          }
          if (numericVal_2 > varData_65 - numericVal_1) {
            const varData_68 = param_2[numericVal];
            while (numericVal_1 < varData_65) {
              param_1.insertBefore(param_3[numericVal_1++], varData_68);
            }
          } else {
            param_1.replaceChild(param_3[numericVal_1++], param_2[numericVal++]);
          }
        } else {
          numericVal++;
        }
      } else {
        param_2[numericVal++].remove();
      }
    }
  }
}
function ke(param_1, param_2, param_3, _0x355539 = {}) {
  let varData_69;
  Ee(param_1_1 => {
    varData_69 = param_1_1;
    if (param_2 === document) {
      param_1();
    } else {
      L(param_2, param_1(), param_2.firstChild ? null : undefined, param_3);
    }
  }, _0x355539.owner);
  return () => {
    varData_69();
    param_2.textContent = "";
  };
}
function J(param_1, param_2, param_3) {
  let varData_70;
  const varData_71 = () => {
    const varData_72 = document.createElement("template");
    varData_72.innerHTML = param_1;
    if (param_3) {
      return varData_72.content.firstChild.firstChild;
    } else {
      return varData_72.content.firstChild;
    }
  };
  const varData_73 = param_2 ? () => w(() => document.importNode(varData_70 ||= varData_71(), true)) : () => (varData_70 ||= varData_71()).cloneNode(true);
  varData_73.cloneNode = varData_73;
  return varData_73;
}
function qe(param_1, param_2) {
  if (param_2 == null) {
    param_1.removeAttribute("class");
  } else {
    param_1.className = param_2;
  }
}
function L(param_1, param_2, param_3, param_4) {
  if (param_3 !== undefined && !param_4) {
    param_4 = [];
  }
  if (typeof param_2 != "function") {
    return I(param_1, param_2, param_4, param_3);
  }
  P(param_1_1 => I(param_1, param_2(), param_1_1, param_3), param_4);
}
function I(param_1, param_2, param_3, param_4, param_5) {
  while (typeof param_3 == "function") {
    param_3 = param_3();
  }
  if (param_2 === param_3) {
    return param_3;
  }
  const varData_74 = typeof param_2;
  const varData_75 = param_4 !== undefined;
  param_1 = varData_75 && param_3[0] && param_3[0].parentNode || param_1;
  if (varData_74 === "string" || varData_74 === "number") {
    if (varData_74 === "number") {
      param_2 = param_2.toString();
    }
    if (varData_75) {
      let varData_76 = param_3[0];
      if (varData_76 && varData_76.nodeType === 3) {
        varData_76.data = param_2;
      } else {
        varData_76 = document.createTextNode(param_2);
      }
      param_3 = E(param_1, param_3, param_4, varData_76);
    } else if (param_3 !== "" && typeof param_3 == "string") {
      param_3 = param_1.firstChild.data = param_2;
    } else {
      param_3 = param_1.textContent = param_2;
    }
  } else if (param_2 == null || varData_74 === "boolean") {
    param_3 = E(param_1, param_3, param_4);
  } else {
    if (varData_74 === "function") {
      P(() => {
        let varData_77 = param_2();
        while (typeof varData_77 == "function") {
          varData_77 = varData_77();
        }
        param_3 = I(param_1, varData_77, param_3, param_4);
      });
      return () => param_3;
    }
    if (Array.isArray(param_2)) {
      const itemList = [];
      const varData_78 = param_3 && Array.isArray(param_3);
      if (G(itemList, param_2, param_3, param_5)) {
        P(() => param_3 = I(param_1, itemList, param_3, param_4, true));
        return () => param_3;
      }
      if (itemList.length === 0) {
        param_3 = E(param_1, param_3, param_4);
        if (varData_75) {
          return param_3;
        }
      } else if (varData_78) {
        if (param_3.length === 0) {
          ne(param_1, itemList, param_4);
        } else {
          Ue(param_1, param_3, itemList);
        }
      } else {
        if (param_3) {
          E(param_1);
        }
        ne(param_1, itemList);
      }
      param_3 = itemList;
    } else if (param_2.nodeType) {
      if (Array.isArray(param_3)) {
        if (varData_75) {
          return param_3 = E(param_1, param_3, param_4, param_2);
        }
        E(param_1, param_3, null, param_2);
      } else if (param_3 == null || param_3 === "" || !param_1.firstChild) {
        param_1.appendChild(param_2);
      } else {
        param_1.replaceChild(param_2, param_1.firstChild);
      }
      param_3 = param_2;
    } else {
      console.warn("Unrecognized value. Skipped inserting", param_2);
    }
  }
  return param_3;
}
function G(param_1, param_2, param_3, param_4) {
  let isDisabled = false;
  for (let numericVal = 0, loopIdx = param_2.length; numericVal < loopIdx; numericVal++) {
    let varData_79 = param_2[numericVal];
    let varData_80 = param_3 && param_3[numericVal];
    let varData_81;
    if (varData_79 != null && varData_79 !== true && varData_79 !== false) {
      if ((varData_81 = typeof varData_79) == "object" && varData_79.nodeType) {
        param_1.push(varData_79);
      } else if (Array.isArray(varData_79)) {
        isDisabled = G(param_1, varData_79, varData_80) || isDisabled;
      } else if (varData_81 === "function") {
        if (param_4) {
          while (typeof varData_79 == "function") {
            varData_79 = varData_79();
          }
          isDisabled = G(param_1, Array.isArray(varData_79) ? varData_79 : [varData_79], Array.isArray(varData_80) ? varData_80 : [varData_80]) || isDisabled;
        } else {
          param_1.push(varData_79);
          isDisabled = true;
        }
      } else {
        const varData_82 = String(varData_79);
        if (varData_80 && varData_80.nodeType === 3 && varData_80.data === varData_82) {
          param_1.push(varData_80);
        } else {
          param_1.push(document.createTextNode(varData_82));
        }
      }
    }
  }
  return isDisabled;
}
function ne(param_1, param_2, _0xfa8c2f = null) {
  for (let numericVal = 0, loopIdx = param_2.length; numericVal < loopIdx; numericVal++) {
    param_1.insertBefore(param_2[numericVal], _0xfa8c2f);
  }
}
function E(param_1, param_2, param_3, param_4) {
  if (param_3 === undefined) {
    return param_1.textContent = "";
  }
  const varData_83 = param_4 || document.createTextNode("");
  if (param_2.length) {
    let isDisabled = false;
    for (let loopIdx = param_2.length - 1; loopIdx >= 0; loopIdx--) {
      const varData_84 = param_2[loopIdx];
      if (varData_83 !== varData_84) {
        const varData_85 = varData_84.parentNode === param_1;
        if (!isDisabled && !loopIdx) {
          if (varData_85) {
            param_1.replaceChild(varData_83, varData_84);
          } else {
            param_1.insertBefore(varData_83, param_3);
          }
        } else if (varData_85) {
          varData_84.remove();
        }
      } else {
        isDisabled = true;
      }
    }
  } else {
    param_1.insertBefore(varData_83, param_3);
  }
  return [varData_83];
}
const Ze = "_container_cwmep_1";
const Ke = {
  container: Ze
};
function We(param_1, param_2) {
  const varData_86 = _e(param_2);
  return [param_1_1 => m(varData_86.Provider, {
    value: param_1(param_1_1),
    get children() {
      return param_1_1.children;
    }
  }), () => je(varData_86)];
}
const V = Symbol("store-raw");
const $ = Symbol("store-node");
function we(param_1) {
  let varData_87 = param_1[b];
  if (!varData_87 && (Object.defineProperty(param_1, b, {
    value: varData_87 = new Proxy(param_1, Ye)
  }), !Array.isArray(param_1))) {
    const keysList = Object.keys(param_1);
    const varData_88 = Object.getOwnPropertyDescriptors(param_1);
    for (let numericVal = 0, loopIdx = keysList.length; numericVal < loopIdx; numericVal++) {
      const varData_89 = keysList[numericVal];
      if (varData_88[varData_89].get) {
        Object.defineProperty(param_1, varData_89, {
          enumerable: varData_88[varData_89].enumerable,
          get: varData_88[varData_89].get.bind(varData_87)
        });
      }
    }
  }
  return varData_87;
}
function R(param_1) {
  let varData_90;
  return param_1 != null && typeof param_1 == "object" && (param_1[b] || !(varData_90 = Object.getPrototypeOf(param_1)) || varData_90 === Object.prototype || Array.isArray(param_1));
}
function N(param_1, _0x5e7649 = new Set()) {
  let varData_91;
  let varData_92;
  let varData_93;
  let varData_94;
  if (varData_91 = param_1 != null && param_1[V]) {
    return varData_91;
  }
  if (!R(param_1) || _0x5e7649.has(param_1)) {
    return param_1;
  }
  if (Array.isArray(param_1)) {
    if (Object.isFrozen(param_1)) {
      param_1 = param_1.slice(0);
    } else {
      _0x5e7649.add(param_1);
    }
    for (let numericVal = 0, loopIdx = param_1.length; numericVal < loopIdx; numericVal++) {
      varData_93 = param_1[numericVal];
      if ((varData_92 = N(varData_93, _0x5e7649)) !== varData_93) {
        param_1[numericVal] = varData_92;
      }
    }
  } else {
    if (Object.isFrozen(param_1)) {
      param_1 = Object.assign({}, param_1);
    } else {
      _0x5e7649.add(param_1);
    }
    const keysList = Object.keys(param_1);
    const varData_95 = Object.getOwnPropertyDescriptors(param_1);
    for (let numericVal = 0, loopIdx = keysList.length; numericVal < loopIdx; numericVal++) {
      varData_94 = keysList[numericVal];
      if (!varData_95[varData_94].get) {
        varData_93 = param_1[varData_94];
        if ((varData_92 = N(varData_93, _0x5e7649)) !== varData_93) {
          param_1[varData_94] = varData_92;
        }
      }
    }
  }
  return param_1;
}
function z(param_1) {
  let varData_96 = param_1[$];
  if (!varData_96) {
    Object.defineProperty(param_1, $, {
      value: varData_96 = Object.create(null)
    });
  }
  return varData_96;
}
function Y(param_1, param_2, param_3) {
  return param_1[param_2] ||= Ae(param_3);
}
function Ge(param_1, param_2) {
  const varData_97 = Reflect.getOwnPropertyDescriptor(param_1, param_2);
  if (!!varData_97 && !varData_97.get && !!varData_97.configurable && param_2 !== b && param_2 !== $) {
    delete varData_97.value;
    delete varData_97.writable;
    varData_97.get = () => param_1[b][param_2];
  }
  return varData_97;
}
function me(param_1) {
  if (ue()) {
    const varData_98 = z(param_1);
    (varData_98._ ||= Ae())();
  }
}
function Ve(param_1) {
  me(param_1);
  return Reflect.ownKeys(param_1);
}
function Ae(param_1) {
  const [_0x797b58, _0x5f5c58] = X(param_1, {
    equals: false,
    internal: true
  });
  _0x797b58.$ = _0x5f5c58;
  return _0x797b58;
}
const Ye = {
  get(param_1, param_2, param_3) {
    if (param_2 === V) {
      return param_1;
    }
    if (param_2 === b) {
      return param_3;
    }
    if (param_2 === te) {
      me(param_1);
      return param_3;
    }
    const varData_99 = z(param_1);
    const varData_100 = varData_99[param_2];
    let varData_101 = varData_100 ? varData_100() : param_1[param_2];
    if (param_2 === $ || param_2 === "__proto__") {
      return varData_101;
    }
    if (!varData_100) {
      const varData_102 = Object.getOwnPropertyDescriptor(param_1, param_2);
      if (ue() && (typeof varData_101 != "function" || param_1.hasOwnProperty(param_2)) && (!varData_102 || !varData_102.get)) {
        varData_101 = Y(varData_99, param_2, varData_101)();
      }
    }
    if (R(varData_101)) {
      return we(varData_101);
    } else {
      return varData_101;
    }
  },
  has(param_1, param_2) {
    if (param_2 === V || param_2 === b || param_2 === te || param_2 === $ || param_2 === "__proto__") {
      return true;
    } else {
      this.get(param_1, param_2, param_1);
      return param_2 in param_1;
    }
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  },
  ownKeys: Ve,
  getOwnPropertyDescriptor: Ge
};
function F(param_1, param_2, param_3, _0x379748 = false) {
  if (!_0x379748 && param_1[param_2] === param_3) {
    return;
  }
  const varData_103 = param_1[param_2];
  const varData_104 = param_1.length;
  if (param_3 === undefined) {
    delete param_1[param_2];
  } else {
    param_1[param_2] = param_3;
  }
  let varData_105 = z(param_1);
  let varData_106;
  if (varData_106 = Y(varData_105, param_2, varData_103)) {
    varData_106.$(() => param_3);
  }
  if (Array.isArray(param_1) && param_1.length !== varData_104) {
    for (let loopIdx = param_1.length; loopIdx < varData_104; loopIdx++) {
      if (varData_106 = varData_105[loopIdx]) {
        varData_106.$();
      }
    }
    if (varData_106 = Y(varData_105, "length", varData_104)) {
      varData_106.$(param_1.length);
    }
  }
  if (varData_106 = varData_105._) {
    varData_106.$();
  }
}
function ve(param_1, param_2) {
  const keysList = Object.keys(param_2);
  for (let numericVal = 0; numericVal < keysList.length; numericVal += 1) {
    const varData_107 = keysList[numericVal];
    F(param_1, varData_107, param_2[varData_107]);
  }
}
function Qe(param_1, param_2) {
  if (typeof param_2 == "function") {
    param_2 = param_2(param_1);
  }
  param_2 = N(param_2);
  if (Array.isArray(param_2)) {
    if (param_1 === param_2) {
      return;
    }
    let numericVal = 0;
    let varData_108 = param_2.length;
    for (; numericVal < varData_108; numericVal++) {
      const varData_109 = param_2[numericVal];
      if (param_1[numericVal] !== varData_109) {
        F(param_1, numericVal, varData_109);
      }
    }
    F(param_1, "length", varData_108);
  } else {
    ve(param_1, param_2);
  }
}
function O(param_1, param_2, _0x579769 = []) {
  let varData_110;
  let varData_111 = param_1;
  if (param_2.length > 1) {
    varData_110 = param_2.shift();
    const varData_112 = typeof varData_110;
    const varData_113 = Array.isArray(param_1);
    if (Array.isArray(varData_110)) {
      for (let numericVal = 0; numericVal < varData_110.length; numericVal++) {
        O(param_1, [varData_110[numericVal]].concat(param_2), _0x579769);
      }
      return;
    } else if (varData_113 && varData_112 === "function") {
      for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
        if (varData_110(param_1[numericVal], numericVal)) {
          O(param_1, [numericVal].concat(param_2), _0x579769);
        }
      }
      return;
    } else if (varData_113 && varData_112 === "object") {
      const {
        from: _0x38d0fa = 0,
        to: _0x59c879 = param_1.length - 1,
        by: _0x3b13df = 1
      } = varData_110;
      for (let loopIdx = _0x38d0fa; loopIdx <= _0x59c879; loopIdx += _0x3b13df) {
        O(param_1, [loopIdx].concat(param_2), _0x579769);
      }
      return;
    } else if (param_2.length > 1) {
      O(param_1[varData_110], param_2, [varData_110].concat(_0x579769));
      return;
    }
    varData_111 = param_1[varData_110];
    _0x579769 = [varData_110].concat(_0x579769);
  }
  let varData_114 = param_2[0];
  if ((typeof varData_114 != "function" || !(varData_114 = varData_114(varData_111, _0x579769), varData_114 === varData_111)) && (varData_110 !== undefined || varData_114 != null)) {
    varData_114 = N(varData_114);
    if (varData_110 === undefined || R(varData_111) && R(varData_114) && !Array.isArray(varData_114)) {
      ve(varData_111, varData_114);
    } else {
      F(param_1, varData_110, varData_114);
    }
  }
}
function Xe(...[_0x4feaab, _0x2998a4]) {
  const varData_115 = N(_0x4feaab || {});
  const varData_116 = Array.isArray(varData_115);
  const varData_117 = we(varData_115);
  function handleAction_3(..._0x185c5e) {
    K(() => {
      if (varData_116 && _0x185c5e.length === 1) {
        Qe(varData_115, _0x185c5e[0]);
      } else {
        O(varData_115, _0x185c5e);
      }
    });
  }
  return [varData_117, handleAction_3];
}
const ie = {
  show: false,
  time: 0
};
const [Je, ze] = We(() => {
  const varData_118 = ie;
  const [_0x29abe1, _0x39f296] = Xe(varData_118);
  return {
    state: _0x29abe1,
    setState: _0x39f296
  };
}, {
  state: ie,
  setState: () => {}
});
const et = J("<svg width=\"17.59vh\" height=\"0.37vh\" viewBox=\"0 0 190 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.5 0H45.5L42 4H0L3.5 0Z\" fill=\"white\" fill-opacity=\"0.15\"></path><path d=\"M51.5 0H93.5L90 4H48L51.5 0Z\" fill=\"white\" fill-opacity=\"0.15\"></path><path d=\"M99.5 0H141.5L138 4H96L99.5 0Z\" fill=\"white\" fill-opacity=\"0.15\"></path><path d=\"M147.5 0H189.5L186 4H144L147.5 0Z\" fill=\"white\" fill-opacity=\"0.15\">");
const se = () => et();
const tt = J("<svg width=\"1.759vh\" height=\"1.66vh\" viewBox=\"0 0 19 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.92015 0.0536489C8.20042 0.212488 7.55602 0.661488 7.16581 1.27605C6.8381 1.79207 0.23372 14.0555 0.149509 14.3043C-0.393327 15.9078 0.595872 17.6242 2.24556 17.9414C2.65213 18.0195 16.3445 18.0195 16.7511 17.9414C17.9382 17.7132 18.8227 16.7527 18.9799 15.5213C19.0305 15.1243 18.9854 14.7128 18.8461 14.3013C18.7601 14.0472 12.1604 1.79495 11.8261 1.26869C11.5267 0.797513 11.0123 0.374688 10.5009 0.179443C10.0314 0.00017963 9.39271 -0.0506385 8.92015 0.0536489ZM9.78404 4.60428C10.0145 4.66593 10.2783 4.84788 10.4059 5.03323C10.6198 5.34371 10.6132 5.23516 10.6132 8.47569C10.6132 11.4281 10.6125 11.4588 10.5339 11.6698C10.4377 11.928 10.234 12.1588 9.99322 12.2824C9.73524 12.4149 9.26142 12.4149 9.00343 12.2824C8.76265 12.1588 8.55896 11.928 8.46279 11.6698C8.38419 11.4588 8.38344 11.4281 8.38344 8.47569C8.38344 5.23516 8.3769 5.34371 8.59074 5.03323C8.77072 4.7719 9.15773 4.56396 9.47975 4.55559C9.54107 4.55403 9.67797 4.57591 9.78404 4.60428ZM9.78404 13.5656C10.5875 13.7805 10.8771 14.7827 10.3134 15.3972C10.0843 15.6469 9.87204 15.7348 9.49833 15.7348C9.236 15.7348 9.15208 15.7192 9.00343 15.6429C8.25705 15.2599 8.1753 14.2266 8.85266 13.7378C9.13803 13.5319 9.44552 13.4751 9.78404 13.5656Z\" fill=\"white\" fill-opacity=\"0.4\">");
const re = () => tt();
var nt = () => {};
var oe = (param_1, param_2) => param_2();
function it(param_1, param_2) {
  const varData_119 = w(param_1);
  const varData_120 = varData_119 ? [varData_119] : [];
  const {
    onEnter: _0x18f7b4 = oe,
    onExit: _0x16e524 = oe
  } = param_2;
  const [_0x380e11, _0x263539] = X(param_2.appear ? [] : varData_120);
  const [_0x2a0b3c] = Ne();
  let varData_121;
  let isDisabled = false;
  function handleAction_4(param_1_1, param_2_1) {
    if (!param_1_1) {
      return param_2_1 && param_2_1();
    }
    isDisabled = true;
    _0x16e524(param_1_1, () => {
      K(() => {
        isDisabled = false;
        _0x263539(param_1_2 => param_1_2.filter(param_1_3 => param_1_3 !== param_1_1));
        if (param_2_1) {
          param_2_1();
        }
      });
    });
  }
  function handleAction_5(param_1_1) {
    const varData_122 = varData_121;
    if (!varData_122) {
      return param_1_1 && param_1_1();
    }
    varData_121 = undefined;
    _0x263539(param_1_2 => [varData_122, ...param_1_2]);
    _0x18f7b4(varData_122, param_1_1 ?? nt);
  }
  const varData_123 = param_2.mode === "out-in" ? param_1_1 => isDisabled || handleAction_4(param_1_1, handleAction_5) : param_2.mode === "in-out" ? param_1_1 => handleAction_5(() => handleAction_4(param_1_1)) : param_1_1 => {
    handleAction_4(param_1_1);
    handleAction_5();
  };
  Le(param_1_1 => {
    const varData_124 = param_1();
    if (w(_0x2a0b3c)) {
      _0x2a0b3c();
      return param_1_1;
    } else {
      if (varData_124 !== param_1_1) {
        varData_121 = varData_124;
        K(() => w(() => varData_123(param_1_1)));
      }
      return varData_124;
    }
  }, param_2.appear ? undefined : varData_119);
  return _0x380e11;
}
var le = param_1 => param_1 instanceof Element;
function Q(param_1, param_2) {
  if (param_2(param_1)) {
    return param_1;
  }
  if (typeof param_1 == "function" && !param_1.length) {
    return Q(param_1(), param_2);
  }
  if (Array.isArray(param_1)) {
    for (const varData_125 of param_1) {
      const varData_126 = Q(varData_125, param_2);
      if (varData_126) {
        return varData_126;
      }
    }
  }
  return null;
}
function st(param_1, _0x2e2f5a = le, _0x61cb6 = le) {
  const varData_127 = x(param_1);
  return x(() => Q(varData_127(), _0x2e2f5a));
}
function rt(param_1) {
  return x(() => {
    const varData_128 = param_1.name || "s";
    return {
      enterActive: (param_1.enterActiveClass || varData_128 + "-enter-active").split(" "),
      enter: (param_1.enterClass || varData_128 + "-enter").split(" "),
      enterTo: (param_1.enterToClass || varData_128 + "-enter-to").split(" "),
      exitActive: (param_1.exitActiveClass || varData_128 + "-exit-active").split(" "),
      exit: (param_1.exitClass || varData_128 + "-exit").split(" "),
      exitTo: (param_1.exitToClass || varData_128 + "-exit-to").split(" "),
      move: (param_1.moveClass || varData_128 + "-move").split(" ")
    };
  });
}
function Ce(param_1) {
  requestAnimationFrame(() => requestAnimationFrame(param_1));
}
function ot(param_1, param_2, param_3, param_4) {
  const {
    onBeforeEnter: _0x51f7d6,
    onEnter: _0x1eb288,
    onAfterEnter: _0x183be7
  } = param_2;
  _0x51f7d6?.(param_3);
  param_3.classList.add(...param_1.enter);
  param_3.classList.add(...param_1.enterActive);
  queueMicrotask(() => {
    if (!param_3.parentNode) {
      return param_4?.();
    }
    _0x1eb288?.(param_3, () => handleAction_6());
  });
  Ce(() => {
    param_3.classList.remove(...param_1.enter);
    param_3.classList.add(...param_1.enterTo);
    if (!_0x1eb288 || _0x1eb288.length < 2) {
      param_3.addEventListener("transitionend", handleAction_6);
      param_3.addEventListener("animationend", handleAction_6);
    }
  });
  function handleAction_6(param_1_1) {
    if (!param_1_1 || param_1_1.target === param_3) {
      param_4?.();
      param_3.removeEventListener("transitionend", handleAction_6);
      param_3.removeEventListener("animationend", handleAction_6);
      param_3.classList.remove(...param_1.enterActive);
      param_3.classList.remove(...param_1.enterTo);
      _0x183be7?.(param_3);
    }
  }
}
function lt(param_1, param_2, param_3, param_4) {
  const {
    onBeforeExit: _0xf1c4b0,
    onExit: _0xf3dae5,
    onAfterExit: _0x2e6b7e
  } = param_2;
  if (!param_3.parentNode) {
    return param_4?.();
  }
  _0xf1c4b0?.(param_3);
  param_3.classList.add(...param_1.exit);
  param_3.classList.add(...param_1.exitActive);
  _0xf3dae5?.(param_3, () => handleAction_7());
  Ce(() => {
    param_3.classList.remove(...param_1.exit);
    param_3.classList.add(...param_1.exitTo);
    if (!_0xf3dae5 || _0xf3dae5.length < 2) {
      param_3.addEventListener("transitionend", handleAction_7);
      param_3.addEventListener("animationend", handleAction_7);
    }
  });
  function handleAction_7(param_1_1) {
    if (!param_1_1 || param_1_1.target === param_3) {
      param_4?.();
      param_3.removeEventListener("transitionend", handleAction_7);
      param_3.removeEventListener("animationend", handleAction_7);
      param_3.classList.remove(...param_1.exitActive);
      param_3.classList.remove(...param_1.exitTo);
      _0x2e6b7e?.(param_3);
    }
  }
}
var ft = {
  inout: "in-out",
  outin: "out-in"
};
var ct = param_1 => {
  const varData_129 = rt(param_1);
  return it(st(() => param_1.children), {
    mode: ft[param_1.mode],
    appear: param_1.appear,
    onEnter(param_1_1, param_2) {
      ot(varData_129(), param_1, param_1_1, param_2);
    },
    onExit(param_1_1, param_2) {
      lt(varData_129(), param_1, param_1_1, param_2);
    }
  });
};
const ut = J("<div class=\"absolute flex h-full w-full flex-col items-center justify-end\"><div><div class=\"flex flex-col items-center justify-center\"><div class=\"flex flex-row items-center justify-center gap-[1vh]\"><h1>WARNING</div><p>Your PC clock is out of sync. Please, update it in your Windows settings or be disconnected in <span>");
function at() {
  const {
    state: _0x1ec02b,
    setState: _0x505375
  } = ze();
  const varData_130 = param_1 => {
    if (param_1.key === "Escape" && _0x1ec02b.show) {
      _0x505375({
        show: false
      });
      _0x6dc39a.execute("close");
    }
  };
  Oe(async () => {
    const varData_131 = async param_1 => {
      _0x505375(param_1);
    };
    _0x6dc39a.register("setState", varData_131);
    document.addEventListener("keydown", varData_130);
  });
  Pe(() => {
    document.removeEventListener("keydown", varData_130);
  });
  const varData_132 = param_1 => {
    const roundedVal = Math.floor(param_1 / 60);
    const varData_133 = param_1 % 60;
    return roundedVal + ":" + (varData_133 < 10 ? "0" + varData_133 : varData_133);
  };
  return m(ct, {
    name: "slide-bottom",
    get children() {
      return m(He, {
        get when() {
          return _0x1ec02b.show;
        },
        get children() {
          const varData_134 = ut();
          const varData_135 = varData_134.firstChild;
          const varData_136 = varData_135.firstChild;
          const varData_137 = varData_136.firstChild;
          const varData_138 = varData_137.firstChild;
          const varData_139 = varData_137.nextSibling;
          const varData_140 = varData_139.firstChild;
          const varData_141 = varData_140.nextSibling;
          L(varData_135, m(se, {}), varData_136);
          L(varData_137, m(re, {}), varData_138);
          L(varData_137, m(re, {}), null);
          L(varData_141, () => varData_132(_0x1ec02b.time));
          L(varData_135, m(se, {}), null);
          P(() => qe(varData_135, Ke.container));
          return varData_134;
        }
      });
    }
  });
}
ke(() => m(Je, {
  get children() {
    return m(at, {});
  }
}), document.getElementById("root"));