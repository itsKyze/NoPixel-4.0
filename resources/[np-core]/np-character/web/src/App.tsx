import "./style.css";
import { N as _0x23c8df } from "./v-packages-6cb79519.js";
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
const be = (param_1, param_2) => param_1 === param_2;
const S = Symbol("solid-proxy");
const te = Symbol("solid-track");
const D = {
  equals: be
};
let ie = fe;
const A = 1;
const U = 2;
const se = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var _ = null;
let q = null;
let a = null;
let h = null;
let v = null;
let K = 0;
function we(param_1, param_2) {
  const varData_7 = a;
  const varData_8 = _;
  const varData_9 = param_1.length === 0;
  const varData_10 = varData_9 ? se : {
    owned: null,
    cleanups: null,
    context: null,
    owner: param_2 === undefined ? varData_8 : param_2
  };
  const varData_11 = varData_9 ? param_1 : () => param_1(() => $(() => M(varData_10)));
  _ = varData_10;
  a = null;
  try {
    return C(varData_11, true);
  } finally {
    a = varData_7;
    _ = varData_8;
  }
}
function ve(param_1, param_2) {
  param_2 = param_2 ? Object.assign({}, D, param_2) : D;
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
    return re(varData_12, param_1_1);
  };
  return [oe.bind(varData_12), varData_13];
}
function x(param_1, param_2, param_3) {
  const varData_14 = V(param_1, param_2, false, A);
  T(varData_14);
}
function pe(param_1, param_2, param_3) {
  ie = Oe;
  const varData_15 = V(param_1, param_2, false, A);
  if (!param_3 || !param_3.render) {
    varData_15.user = true;
  }
  if (v) {
    v.push(varData_15);
  } else {
    T(varData_15);
  }
}
function W(param_1, param_2, param_3) {
  param_3 = param_3 ? Object.assign({}, D, param_3) : D;
  const varData_16 = V(param_1, param_2, true, 0);
  varData_16.observers = null;
  varData_16.observerSlots = null;
  varData_16.comparator = param_3.equals || undefined;
  T(varData_16);
  return oe.bind(varData_16);
}
function Ae(param_1) {
  return C(param_1, false);
}
function $(param_1) {
  if (a === null) {
    return param_1();
  }
  const varData_17 = a;
  a = null;
  try {
    return param_1();
  } finally {
    a = varData_17;
  }
}
function Se(param_1) {
  pe(() => $(param_1));
}
function le() {
  return a;
}
function oe() {
  if (this.sources && this.state) {
    if (this.state === A) {
      T(this);
    } else {
      const varData_18 = h;
      h = null;
      C(() => I(this), false);
      h = varData_18;
    }
  }
  if (a) {
    const varData_19 = this.observers ? this.observers.length : 0;
    if (a.sources) {
      a.sources.push(this);
      a.sourceSlots.push(varData_19);
    } else {
      a.sources = [this];
      a.sourceSlots = [varData_19];
    }
    if (this.observers) {
      this.observers.push(a);
      this.observerSlots.push(a.sources.length - 1);
    } else {
      this.observers = [a];
      this.observerSlots = [a.sources.length - 1];
    }
  }
  return this.value;
}
function re(param_1, param_2, param_3) {
  let varData_20 = param_1.value;
  if (!param_1.comparator || !param_1.comparator(varData_20, param_2)) {
    param_1.value = param_2;
    if (param_1.observers && param_1.observers.length) {
      C(() => {
        for (let numericVal = 0; numericVal < param_1.observers.length; numericVal += 1) {
          const varData_21 = param_1.observers[numericVal];
          const varData_22 = q && q.running;
          if (varData_22) {
            q.disposed.has(varData_21);
          }
          if (varData_22 ? !varData_21.tState : !varData_21.state) {
            if (varData_21.pure) {
              h.push(varData_21);
            } else {
              v.push(varData_21);
            }
            if (varData_21.observers) {
              ue(varData_21);
            }
          }
          if (!varData_22) {
            varData_21.state = A;
          }
        }
        if (h.length > 1000000) {
          h = [];
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
  M(param_1);
  const varData_23 = _;
  const varData_24 = a;
  const varData_25 = K;
  a = _ = param_1;
  $e(param_1, param_1.value, varData_25);
  a = varData_24;
  _ = varData_23;
}
function $e(param_1, param_2, param_3) {
  let varData_26;
  try {
    varData_26 = param_1.fn(param_2);
  } catch (err) {
    if (param_1.pure) {
      param_1.state = A;
      if (param_1.owned) {
        param_1.owned.forEach(M);
      }
      param_1.owned = null;
    }
    param_1.updatedAt = param_3 + 1;
    return ce(err);
  }
  if (!param_1.updatedAt || param_1.updatedAt <= param_3) {
    if (param_1.updatedAt != null && "observers" in param_1) {
      re(param_1, varData_26);
    } else {
      param_1.value = varData_26;
    }
    param_1.updatedAt = param_3;
  }
}
function V(param_1, param_2, param_3, _0x3c5847 = A, param_5) {
  const varData_27 = {
    fn: param_1,
    state: _0x3c5847,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: param_2,
    owner: _,
    context: null,
    pure: param_3
  };
  if (_ !== null) {
    if (_ !== se) {
      if (_.owned) {
        _.owned.push(varData_27);
      } else {
        _.owned = [varData_27];
      }
    }
  }
  return varData_27;
}
function L(param_1) {
  if (param_1.state === 0) {
    return;
  }
  if (param_1.state === U) {
    return I(param_1);
  }
  if (param_1.suspense && $(param_1.suspense.inFallback)) {
    return param_1.suspense.effects.push(param_1);
  }
  const itemList = [param_1];
  while ((param_1 = param_1.owner) && (!param_1.updatedAt || param_1.updatedAt < K)) {
    if (param_1.state) {
      itemList.push(param_1);
    }
  }
  for (let loopIdx = itemList.length - 1; loopIdx >= 0; loopIdx--) {
    param_1 = itemList[loopIdx];
    if (param_1.state === A) {
      T(param_1);
    } else if (param_1.state === U) {
      const varData_28 = h;
      h = null;
      C(() => I(param_1, itemList[0]), false);
      h = varData_28;
    }
  }
}
function C(param_1, param_2) {
  if (h) {
    return param_1();
  }
  let isDisabled = false;
  if (!param_2) {
    h = [];
  }
  if (v) {
    isDisabled = true;
  } else {
    v = [];
  }
  K++;
  try {
    const varData_29 = param_1();
    me(isDisabled);
    return varData_29;
  } catch (err) {
    if (!isDisabled) {
      v = null;
    }
    h = null;
    ce(err);
  }
}
function me(param_1) {
  if (h) {
    fe(h);
    h = null;
  }
  if (param_1) {
    return;
  }
  const varData_30 = v;
  v = null;
  if (varData_30.length) {
    C(() => ie(varData_30), false);
  }
}
function fe(param_1) {
  for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
    L(param_1[numericVal]);
  }
}
function Oe(param_1) {
  let varData_31;
  let numericVal = 0;
  for (varData_31 = 0; varData_31 < param_1.length; varData_31++) {
    const varData_32 = param_1[varData_31];
    if (varData_32.user) {
      param_1[numericVal++] = varData_32;
    } else {
      L(varData_32);
    }
  }
  for (varData_31 = 0; varData_31 < numericVal; varData_31++) {
    L(param_1[varData_31]);
  }
}
function I(param_1, param_2) {
  param_1.state = 0;
  for (let numericVal = 0; numericVal < param_1.sources.length; numericVal += 1) {
    const varData_33 = param_1.sources[numericVal];
    if (varData_33.sources) {
      const varData_34 = varData_33.state;
      if (varData_34 === A) {
        if (varData_33 !== param_2 && (!varData_33.updatedAt || varData_33.updatedAt < K)) {
          L(varData_33);
        }
      } else if (varData_34 === U) {
        I(varData_33, param_2);
      }
    }
  }
}
function ue(param_1) {
  for (let numericVal = 0; numericVal < param_1.observers.length; numericVal += 1) {
    const varData_35 = param_1.observers[numericVal];
    if (!varData_35.state) {
      varData_35.state = U;
      if (varData_35.pure) {
        h.push(varData_35);
      } else {
        v.push(varData_35);
      }
      if (varData_35.observers) {
        ue(varData_35);
      }
    }
  }
}
function M(param_1) {
  let varData_36;
  if (param_1.sources) {
    while (param_1.sources.length) {
      const varData_37 = param_1.sources.pop();
      const varData_38 = param_1.sourceSlots.pop();
      const varData_39 = varData_37.observers;
      if (varData_39 && varData_39.length) {
        const varData_40 = varData_39.pop();
        const varData_41 = varData_37.observerSlots.pop();
        if (varData_38 < varData_39.length) {
          varData_40.sourceSlots[varData_41] = varData_38;
          varData_39[varData_38] = varData_40;
          varData_37.observerSlots[varData_38] = varData_41;
        }
      }
    }
  }
  if (param_1.owned) {
    for (varData_36 = param_1.owned.length - 1; varData_36 >= 0; varData_36--) {
      M(param_1.owned[varData_36]);
    }
    param_1.owned = null;
  }
  if (param_1.cleanups) {
    for (varData_36 = param_1.cleanups.length - 1; varData_36 >= 0; varData_36--) {
      param_1.cleanups[varData_36]();
    }
    param_1.cleanups = null;
  }
  param_1.state = 0;
  param_1.context = null;
}
function ce(param_1) {
  throw param_1;
}
function y(param_1, param_2) {
  return $(() => param_1(param_2 || {}));
}
const Ce = param_1 => "Stale read from <" + param_1 + ">.";
function Ne(param_1) {
  const varData_42 = param_1.keyed;
  const varData_43 = W(() => param_1.when, undefined, {
    equals: (param_1_1, param_2) => varData_42 ? param_1_1 === param_2 : !param_1_1 == !param_2
  });
  return W(() => {
    const varData_44 = varData_43();
    if (varData_44) {
      const varData_45 = param_1.children;
      if (typeof varData_45 == "function" && varData_45.length > 0) {
        return $(() => varData_45(varData_42 ? varData_44 : () => {
          if (!$(varData_43)) {
            throw Ce("Show");
          }
          return param_1.when;
        }));
      } else {
        return varData_45;
      }
    }
    return param_1.fallback;
  }, undefined, undefined);
}
function Ee(param_1, param_2, param_3) {
  let varData_46 = param_3.length;
  let varData_47 = param_2.length;
  let varData_48 = varData_46;
  let numericVal = 0;
  let numericVal_1 = 0;
  let varData_49 = param_2[varData_47 - 1].nextSibling;
  let varData_50 = null;
  while (numericVal < varData_47 || numericVal_1 < varData_48) {
    if (param_2[numericVal] === param_3[numericVal_1]) {
      numericVal++;
      numericVal_1++;
      continue;
    }
    while (param_2[varData_47 - 1] === param_3[varData_48 - 1]) {
      varData_47--;
      varData_48--;
    }
    if (varData_47 === numericVal) {
      const varData_51 = varData_48 < varData_46 ? numericVal_1 ? param_3[numericVal_1 - 1].nextSibling : param_3[varData_48 - numericVal_1] : varData_49;
      while (numericVal_1 < varData_48) {
        param_1.insertBefore(param_3[numericVal_1++], varData_51);
      }
    } else if (varData_48 === numericVal_1) {
      while (numericVal < varData_47) {
        if (!varData_50 || !varData_50.has(param_2[numericVal])) {
          param_2[numericVal].remove();
        }
        numericVal++;
      }
    } else if (param_2[numericVal] === param_3[varData_48 - 1] && param_3[numericVal_1] === param_2[varData_47 - 1]) {
      const varData_52 = param_2[--varData_47].nextSibling;
      param_1.insertBefore(param_3[numericVal_1++], param_2[numericVal++].nextSibling);
      param_1.insertBefore(param_3[--varData_48], varData_52);
      param_2[varData_47] = param_3[varData_48];
    } else {
      if (!varData_50) {
        varData_50 = new Map();
        let varData_53 = numericVal_1;
        while (varData_53 < varData_48) {
          varData_50.set(param_3[varData_53], varData_53++);
        }
      }
      const varData_54 = varData_50.get(param_2[numericVal]);
      if (varData_54 != null) {
        if (numericVal_1 < varData_54 && varData_54 < varData_48) {
          let varData_55 = numericVal;
          let numericVal_2 = 1;
          let varData_56;
          while (++varData_55 < varData_47 && varData_55 < varData_48 && (varData_56 = varData_50.get(param_2[varData_55])) != null && varData_56 === varData_54 + numericVal_2) {
            numericVal_2++;
          }
          if (numericVal_2 > varData_54 - numericVal_1) {
            const varData_57 = param_2[numericVal];
            while (numericVal_1 < varData_54) {
              param_1.insertBefore(param_3[numericVal_1++], varData_57);
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
function xe(param_1, param_2, param_3, _0x1e0eac = {}) {
  let varData_58;
  we(param_1_1 => {
    varData_58 = param_1_1;
    if (param_2 === document) {
      param_1();
    } else {
      g(param_2, param_1(), param_2.firstChild ? null : undefined, param_3);
    }
  }, _0x1e0eac.owner);
  return () => {
    varData_58();
    param_2.textContent = "";
  };
}
function ae(param_1, param_2, param_3) {
  let varData_59;
  const varData_60 = () => {
    const varData_61 = document.createElement("template");
    varData_61.innerHTML = param_1;
    if (param_3) {
      return varData_61.content.firstChild.firstChild;
    } else {
      return varData_61.content.firstChild;
    }
  };
  const varData_62 = param_2 ? () => $(() => document.importNode(varData_59 ||= varData_60(), true)) : () => (varData_59 ||= varData_60()).cloneNode(true);
  varData_62.cloneNode = varData_62;
  return varData_62;
}
function Pe(param_1, param_2, param_3) {
  if (param_3 == null) {
    param_1.removeAttribute(param_2);
  } else {
    param_1.setAttribute(param_2, param_3);
  }
}
function b(param_1, param_2) {
  if (param_2 == null) {
    param_1.removeAttribute("class");
  } else {
    param_1.className = param_2;
  }
}
function g(param_1, param_2, param_3, param_4) {
  if (param_3 !== undefined && !param_4) {
    param_4 = [];
  }
  if (typeof param_2 != "function") {
    return R(param_1, param_2, param_4, param_3);
  }
  x(param_1_1 => R(param_1, param_2(), param_1_1, param_3), param_4);
}
function R(param_1, param_2, param_3, param_4, param_5) {
  while (typeof param_3 == "function") {
    param_3 = param_3();
  }
  if (param_2 === param_3) {
    return param_3;
  }
  const varData_63 = typeof param_2;
  const varData_64 = param_4 !== undefined;
  param_1 = varData_64 && param_3[0] && param_3[0].parentNode || param_1;
  if (varData_63 === "string" || varData_63 === "number") {
    if (varData_63 === "number") {
      param_2 = param_2.toString();
    }
    if (varData_64) {
      let varData_65 = param_3[0];
      if (varData_65 && varData_65.nodeType === 3) {
        varData_65.data = param_2;
      } else {
        varData_65 = document.createTextNode(param_2);
      }
      param_3 = O(param_1, param_3, param_4, varData_65);
    } else if (param_3 !== "" && typeof param_3 == "string") {
      param_3 = param_1.firstChild.data = param_2;
    } else {
      param_3 = param_1.textContent = param_2;
    }
  } else if (param_2 == null || varData_63 === "boolean") {
    param_3 = O(param_1, param_3, param_4);
  } else {
    if (varData_63 === "function") {
      x(() => {
        let varData_66 = param_2();
        while (typeof varData_66 == "function") {
          varData_66 = varData_66();
        }
        param_3 = R(param_1, varData_66, param_3, param_4);
      });
      return () => param_3;
    }
    if (Array.isArray(param_2)) {
      const itemList = [];
      const varData_67 = param_3 && Array.isArray(param_3);
      if (G(itemList, param_2, param_3, param_5)) {
        x(() => param_3 = R(param_1, itemList, param_3, param_4, true));
        return () => param_3;
      }
      if (itemList.length === 0) {
        param_3 = O(param_1, param_3, param_4);
        if (varData_64) {
          return param_3;
        }
      } else if (varData_67) {
        if (param_3.length === 0) {
          ne(param_1, itemList, param_4);
        } else {
          Ee(param_1, param_3, itemList);
        }
      } else {
        if (param_3) {
          O(param_1);
        }
        ne(param_1, itemList);
      }
      param_3 = itemList;
    } else if (param_2.nodeType) {
      if (Array.isArray(param_3)) {
        if (varData_64) {
          return param_3 = O(param_1, param_3, param_4, param_2);
        }
        O(param_1, param_3, null, param_2);
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
    let varData_68 = param_2[numericVal];
    let varData_69 = param_3 && param_3[numericVal];
    let varData_70;
    if (varData_68 != null && varData_68 !== true && varData_68 !== false) {
      if ((varData_70 = typeof varData_68) == "object" && varData_68.nodeType) {
        param_1.push(varData_68);
      } else if (Array.isArray(varData_68)) {
        isDisabled = G(param_1, varData_68, varData_69) || isDisabled;
      } else if (varData_70 === "function") {
        if (param_4) {
          while (typeof varData_68 == "function") {
            varData_68 = varData_68();
          }
          isDisabled = G(param_1, Array.isArray(varData_68) ? varData_68 : [varData_68], Array.isArray(varData_69) ? varData_69 : [varData_69]) || isDisabled;
        } else {
          param_1.push(varData_68);
          isDisabled = true;
        }
      } else {
        const varData_71 = String(varData_68);
        if (varData_69 && varData_69.nodeType === 3 && varData_69.data === varData_71) {
          param_1.push(varData_69);
        } else {
          param_1.push(document.createTextNode(varData_71));
        }
      }
    }
  }
  return isDisabled;
}
function ne(param_1, param_2, _0x52e905 = null) {
  for (let numericVal = 0, loopIdx = param_2.length; numericVal < loopIdx; numericVal++) {
    param_1.insertBefore(param_2[numericVal], _0x52e905);
  }
}
function O(param_1, param_2, param_3, param_4) {
  if (param_3 === undefined) {
    return param_1.textContent = "";
  }
  const varData_72 = param_4 || document.createTextNode("");
  if (param_2.length) {
    let isDisabled = false;
    for (let loopIdx = param_2.length - 1; loopIdx >= 0; loopIdx--) {
      const varData_73 = param_2[loopIdx];
      if (varData_72 !== varData_73) {
        const varData_74 = varData_73.parentNode === param_1;
        if (!isDisabled && !loopIdx) {
          if (varData_74) {
            param_1.replaceChild(varData_72, varData_73);
          } else {
            param_1.insertBefore(varData_72, param_3);
          }
        } else if (varData_74) {
          varData_73.remove();
        }
      } else {
        isDisabled = true;
      }
    }
  } else {
    param_1.insertBefore(varData_72, param_3);
  }
  return [varData_72];
}
const H = Symbol("store-raw");
const P = Symbol("store-node");
function de(param_1) {
  let varData_75 = param_1[S];
  if (!varData_75 && (Object.defineProperty(param_1, S, {
    value: varData_75 = new Proxy(param_1, je)
  }), !Array.isArray(param_1))) {
    const keysList = Object.keys(param_1);
    const varData_76 = Object.getOwnPropertyDescriptors(param_1);
    for (let numericVal = 0, loopIdx = keysList.length; numericVal < loopIdx; numericVal++) {
      const varData_77 = keysList[numericVal];
      if (varData_76[varData_77].get) {
        Object.defineProperty(param_1, varData_77, {
          enumerable: varData_76[varData_77].enumerable,
          get: varData_76[varData_77].get.bind(varData_75)
        });
      }
    }
  }
  return varData_75;
}
function B(param_1) {
  let varData_78;
  return param_1 != null && typeof param_1 == "object" && (param_1[S] || !(varData_78 = Object.getPrototypeOf(param_1)) || varData_78 === Object.prototype || Array.isArray(param_1));
}
function k(param_1, _0x3b50eb = new Set()) {
  let varData_79;
  let varData_80;
  let varData_81;
  let varData_82;
  if (varData_79 = param_1 != null && param_1[H]) {
    return varData_79;
  }
  if (!B(param_1) || _0x3b50eb.has(param_1)) {
    return param_1;
  }
  if (Array.isArray(param_1)) {
    if (Object.isFrozen(param_1)) {
      param_1 = param_1.slice(0);
    } else {
      _0x3b50eb.add(param_1);
    }
    for (let numericVal = 0, loopIdx = param_1.length; numericVal < loopIdx; numericVal++) {
      varData_81 = param_1[numericVal];
      if ((varData_80 = k(varData_81, _0x3b50eb)) !== varData_81) {
        param_1[numericVal] = varData_80;
      }
    }
  } else {
    if (Object.isFrozen(param_1)) {
      param_1 = Object.assign({}, param_1);
    } else {
      _0x3b50eb.add(param_1);
    }
    const keysList = Object.keys(param_1);
    const varData_83 = Object.getOwnPropertyDescriptors(param_1);
    for (let numericVal = 0, loopIdx = keysList.length; numericVal < loopIdx; numericVal++) {
      varData_82 = keysList[numericVal];
      if (!varData_83[varData_82].get) {
        varData_81 = param_1[varData_82];
        if ((varData_80 = k(varData_81, _0x3b50eb)) !== varData_81) {
          param_1[varData_82] = varData_80;
        }
      }
    }
  }
  return param_1;
}
function X(param_1) {
  let varData_84 = param_1[P];
  if (!varData_84) {
    Object.defineProperty(param_1, P, {
      value: varData_84 = Object.create(null)
    });
  }
  return varData_84;
}
function Q(param_1, param_2, param_3) {
  return param_1[param_2] ||= ge(param_3);
}
function ke(param_1, param_2) {
  const varData_85 = Reflect.getOwnPropertyDescriptor(param_1, param_2);
  if (!!varData_85 && !varData_85.get && !!varData_85.configurable && param_2 !== S && param_2 !== P) {
    delete varData_85.value;
    delete varData_85.writable;
    varData_85.get = () => param_1[S][param_2];
  }
  return varData_85;
}
function he(param_1) {
  if (le()) {
    const varData_86 = X(param_1);
    (varData_86._ ||= ge())();
  }
}
function Te(param_1) {
  he(param_1);
  return Reflect.ownKeys(param_1);
}
function ge(param_1) {
  const [_0x230ce6, _0x3c66ba] = ve(param_1, {
    equals: false,
    internal: true
  });
  _0x230ce6.$ = _0x3c66ba;
  return _0x230ce6;
}
const je = {
  get(param_1, param_2, param_3) {
    if (param_2 === H) {
      return param_1;
    }
    if (param_2 === S) {
      return param_3;
    }
    if (param_2 === te) {
      he(param_1);
      return param_3;
    }
    const varData_87 = X(param_1);
    const varData_88 = varData_87[param_2];
    let varData_89 = varData_88 ? varData_88() : param_1[param_2];
    if (param_2 === P || param_2 === "__proto__") {
      return varData_89;
    }
    if (!varData_88) {
      const varData_90 = Object.getOwnPropertyDescriptor(param_1, param_2);
      if (le() && (typeof varData_89 != "function" || param_1.hasOwnProperty(param_2)) && (!varData_90 || !varData_90.get)) {
        varData_89 = Q(varData_87, param_2, varData_89)();
      }
    }
    if (B(varData_89)) {
      return de(varData_89);
    } else {
      return varData_89;
    }
  },
  has(param_1, param_2) {
    if (param_2 === H || param_2 === S || param_2 === te || param_2 === P || param_2 === "__proto__") {
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
  ownKeys: Te,
  getOwnPropertyDescriptor: ke
};
function F(param_1, param_2, param_3, _0x5f333f = false) {
  if (!_0x5f333f && param_1[param_2] === param_3) {
    return;
  }
  const varData_91 = param_1[param_2];
  const varData_92 = param_1.length;
  if (param_3 === undefined) {
    delete param_1[param_2];
  } else {
    param_1[param_2] = param_3;
  }
  let varData_93 = X(param_1);
  let varData_94;
  if (varData_94 = Q(varData_93, param_2, varData_91)) {
    varData_94.$(() => param_3);
  }
  if (Array.isArray(param_1) && param_1.length !== varData_92) {
    for (let loopIdx = param_1.length; loopIdx < varData_92; loopIdx++) {
      if (varData_94 = varData_93[loopIdx]) {
        varData_94.$();
      }
    }
    if (varData_94 = Q(varData_93, "length", varData_92)) {
      varData_94.$(param_1.length);
    }
  }
  if (varData_94 = varData_93._) {
    varData_94.$();
  }
}
function _e(param_1, param_2) {
  const keysList = Object.keys(param_2);
  for (let numericVal = 0; numericVal < keysList.length; numericVal += 1) {
    const varData_95 = keysList[numericVal];
    F(param_1, varData_95, param_2[varData_95]);
  }
}
function De(param_1, param_2) {
  if (typeof param_2 == "function") {
    param_2 = param_2(param_1);
  }
  param_2 = k(param_2);
  if (Array.isArray(param_2)) {
    if (param_1 === param_2) {
      return;
    }
    let numericVal = 0;
    let varData_96 = param_2.length;
    for (; numericVal < varData_96; numericVal++) {
      const varData_97 = param_2[numericVal];
      if (param_1[numericVal] !== varData_97) {
        F(param_1, numericVal, varData_97);
      }
    }
    F(param_1, "length", varData_96);
  } else {
    _e(param_1, param_2);
  }
}
function E(param_1, param_2, _0x116ed6 = []) {
  let varData_98;
  let varData_99 = param_1;
  if (param_2.length > 1) {
    varData_98 = param_2.shift();
    const varData_100 = typeof varData_98;
    const varData_101 = Array.isArray(param_1);
    if (Array.isArray(varData_98)) {
      for (let numericVal = 0; numericVal < varData_98.length; numericVal++) {
        E(param_1, [varData_98[numericVal]].concat(param_2), _0x116ed6);
      }
      return;
    } else if (varData_101 && varData_100 === "function") {
      for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
        if (varData_98(param_1[numericVal], numericVal)) {
          E(param_1, [numericVal].concat(param_2), _0x116ed6);
        }
      }
      return;
    } else if (varData_101 && varData_100 === "object") {
      const {
        from: _0xcddf98 = 0,
        to: _0x3bef39 = param_1.length - 1,
        by: _0x187887 = 1
      } = varData_98;
      for (let loopIdx = _0xcddf98; loopIdx <= _0x3bef39; loopIdx += _0x187887) {
        E(param_1, [loopIdx].concat(param_2), _0x116ed6);
      }
      return;
    } else if (param_2.length > 1) {
      E(param_1[varData_98], param_2, [varData_98].concat(_0x116ed6));
      return;
    }
    varData_99 = param_1[varData_98];
    _0x116ed6 = [varData_98].concat(_0x116ed6);
  }
  let varData_102 = param_2[0];
  if ((typeof varData_102 != "function" || !(varData_102 = varData_102(varData_99, _0x116ed6), varData_102 === varData_99)) && (varData_98 !== undefined || varData_102 != null)) {
    varData_102 = k(varData_102);
    if (varData_98 === undefined || B(varData_99) && B(varData_102) && !Array.isArray(varData_102)) {
      _e(varData_99, varData_102);
    } else {
      F(param_1, varData_98, varData_102);
    }
  }
}
function Ue(...[_0x124064, _0x1aef91]) {
  const varData_103 = k(_0x124064 || {});
  const varData_104 = Array.isArray(varData_103);
  const varData_105 = de(varData_103);
  function handleAction_3(..._0x1548c3) {
    Ae(() => {
      if (varData_104 && _0x1548c3.length === 1) {
        De(varData_103, _0x1548c3[0]);
      } else {
        E(varData_103, _0x1548c3);
      }
    });
  }
  return [varData_105, handleAction_3];
}
const Le = {
  shownId: null
};
const Ie = "" + new URL("logo-1bd73db8.svg", import.meta.url).href;
const Re = "_wrapper_fk586_1";
const Be = "_container_fk586_9";
const Fe = "_content_fk586_30";
const Ke = "_header_fk586_40";
const Me = "_main_content_fk586_63";
const qe = "_picture_fk586_67";
const We = "_signature_fk586_74";
const Ge = "_details_fk586_84";
const He = "_detail_item_fk586_91";
const Qe = "_label_fk586_97";
const Ve = "_value_fk586_117";
const w = {
  wrapper: Re,
  container: Be,
  content: Fe,
  header: Ke,
  main_content: Me,
  picture: qe,
  signature: We,
  details: Ge,
  detail_item: He,
  label: Qe,
  value: Ve
};
const Xe = ae("<div><div><div><div><img></div><div><div><p></div><div>");
const Ye = ae("<div><label></label><p>");
const Je = param_1 => {
  const varData_106 = W(() => param_1.info.Name.charAt(0) + " " + param_1.info.Surname.charAt(0));
  return (() => {
    const varData_107 = Xe();
    const varData_108 = varData_107.firstChild;
    const varData_109 = varData_108.firstChild;
    const varData_110 = varData_109.firstChild;
    const varData_111 = varData_110.firstChild;
    const varData_112 = varData_110.nextSibling;
    const varData_113 = varData_112.firstChild;
    const varData_114 = varData_113.firstChild;
    const varData_115 = varData_113.nextSibling;
    Pe(varData_111, "src", Ie);
    g(varData_114, varData_106);
    g(varData_115, y(p, {
      label: "First name",
      get value() {
        return param_1.info.Name ?? "Unknown";
      }
    }), null);
    g(varData_115, y(p, {
      label: "Last name",
      get value() {
        return param_1.info.Surname ?? "Unknown";
      }
    }), null);
    g(varData_115, y(p, {
      label: "Dob",
      get value() {
        return param_1.info.DOB ?? "Unknown";
      }
    }), null);
    g(varData_115, y(p, {
      label: "Sex",
      get value() {
        return param_1.info.Sex ?? "Unknown";
      }
    }), null);
    g(varData_115, y(p, {
      label: "Exp",
      get value() {
        return param_1.info.Expiry ?? "Unknown";
      }
    }), null);
    g(varData_115, y(p, {
      label: "CREF",
      get value() {
        return param_1.info.Identifier ?? "Unknown";
      }
    }), null);
    g(varData_115, y(p, {
      label: "Class",
      value: "C"
    }), null);
    g(varData_115, y(p, {
      label: "Pref",
      value: "Unknown"
    }), null);
    x(param_1_1 => {
      const varData_116 = w.wrapper;
      const varData_117 = w.container;
      const varData_118 = w.content;
      const varData_119 = w.header;
      const varData_120 = w.main_content;
      const varData_121 = w.picture;
      const varData_122 = w.signature;
      const varData_123 = w.details;
      if (varData_116 !== param_1_1._v$) {
        b(varData_107, param_1_1._v$ = varData_116);
      }
      if (varData_117 !== param_1_1._v$2) {
        b(varData_108, param_1_1._v$2 = varData_117);
      }
      if (varData_118 !== param_1_1._v$3) {
        b(varData_109, param_1_1._v$3 = varData_118);
      }
      if (varData_119 !== param_1_1._v$4) {
        b(varData_110, param_1_1._v$4 = varData_119);
      }
      if (varData_120 !== param_1_1._v$5) {
        b(varData_112, param_1_1._v$5 = varData_120);
      }
      if (varData_121 !== param_1_1._v$6) {
        b(varData_113, param_1_1._v$6 = varData_121);
      }
      if (varData_122 !== param_1_1._v$7) {
        b(varData_114, param_1_1._v$7 = varData_122);
      }
      if (varData_123 !== param_1_1._v$8) {
        b(varData_115, param_1_1._v$8 = varData_123);
      }
      return param_1_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined
    });
    return varData_107;
  })();
};
const p = param_1 => (() => {
  const varData_124 = Ye();
  const varData_125 = varData_124.firstChild;
  const varData_126 = varData_125.nextSibling;
  g(varData_125, () => param_1.label);
  g(varData_126, () => param_1.value);
  x(param_1_1 => {
    const varData_127 = w.detail_item;
    const varData_128 = w.label;
    const varData_129 = w.value;
    if (varData_127 !== param_1_1._v$9) {
      b(varData_124, param_1_1._v$9 = varData_127);
    }
    if (varData_128 !== param_1_1._v$10) {
      b(varData_125, param_1_1._v$10 = varData_128);
    }
    if (varData_129 !== param_1_1._v$11) {
      b(varData_126, param_1_1._v$11 = varData_129);
    }
    return param_1_1;
  }, {
    _v$9: undefined,
    _v$10: undefined,
    _v$11: undefined
  });
  return varData_124;
})();
const [Ze, ze] = Ue(Le);
function et() {
  Se(async () => {
    _0x23c8df.register("setState", async param_1 => {
      ze({
        ...param_1
      });
    });
  });
  return y(Ne, {
    get when() {
      return Ze.shownId;
    },
    children: param_1 => y(Je, {
      get info() {
        return param_1();
      }
    })
  });
}
xe(() => y(et, {}), document.getElementById("root"));