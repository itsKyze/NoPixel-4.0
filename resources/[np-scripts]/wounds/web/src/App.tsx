import "./style.css";
import { N as _0x4ca1ca } from "./v-packages-6cb79519.js";
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
const Ue = (param_1, param_2) => param_1 === param_2;
const s1 = Symbol("solid-proxy");
const G1 = Symbol("solid-track");
const E1 = {
  equals: Ue
};
let be = ke;
const u1 = 1;
const I1 = 2;
const we = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Z = null;
let V1 = null;
let T = null;
let K = null;
let d1 = null;
let F1 = 0;
const [Ke, an] = c1(false);
function D1(param_1, param_2) {
  const varData_7 = T;
  const varData_8 = Z;
  const varData_9 = param_1.length === 0;
  const varData_10 = varData_9 ? we : {
    owned: null,
    cleanups: null,
    context: null,
    owner: param_2 === undefined ? varData_8 : param_2
  };
  const varData_11 = varData_9 ? param_1 : () => param_1(() => D(() => R1(varData_10)));
  Z = varData_10;
  T = null;
  try {
    return h1(varData_11, true);
  } finally {
    T = varData_7;
    Z = varData_8;
  }
}
function c1(param_1, param_2) {
  param_2 = param_2 ? Object.assign({}, E1, param_2) : E1;
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
    return je(varData_12, param_1_1);
  };
  return [Ae.bind(varData_12), varData_13];
}
function Ve(param_1, param_2, param_3) {
  const varData_14 = H1(param_1, param_2, true, u1);
  x1(varData_14);
}
function P(param_1, param_2, param_3) {
  const varData_15 = H1(param_1, param_2, false, u1);
  x1(varData_15);
}
function v1(param_1, param_2, param_3) {
  be = Ge;
  const varData_16 = H1(param_1, param_2, false, u1);
  if (!param_3 || !param_3.render) {
    varData_16.user = true;
  }
  if (d1) {
    d1.push(varData_16);
  } else {
    x1(varData_16);
  }
}
function F(param_1, param_2, param_3) {
  param_3 = param_3 ? Object.assign({}, E1, param_3) : E1;
  const varData_17 = H1(param_1, param_2, true, 0);
  varData_17.observers = null;
  varData_17.observerSlots = null;
  varData_17.comparator = param_3.equals || undefined;
  x1(varData_17);
  return Ae.bind(varData_17);
}
function n1(param_1) {
  return h1(param_1, false);
}
function D(param_1) {
  if (T === null) {
    return param_1();
  }
  const varData_18 = T;
  T = null;
  try {
    return param_1();
  } finally {
    T = varData_18;
  }
}
function w1(param_1) {
  v1(() => D(param_1));
}
function _1(param_1) {
  if (Z !== null) {
    if (Z.cleanups === null) {
      Z.cleanups = [param_1];
    } else {
      Z.cleanups.push(param_1);
    }
  }
  return param_1;
}
function xe() {
  return T;
}
function Xe(param_1) {
  const varData_19 = T;
  const varData_20 = Z;
  return Promise.resolve().then(() => {
    T = varData_19;
    Z = varData_20;
    let varData_21;
    h1(param_1, false);
    T = Z = null;
    if (varData_21) {
      return varData_21.done;
    } else {
      return undefined;
    }
  });
}
function Ye() {
  return [Ke, Xe];
}
function pe(param_1, param_2) {
  const varData_22 = Symbol("context");
  return {
    id: varData_22,
    Provider: Qe(varData_22),
    defaultValue: param_1
  };
}
function Le(param_1) {
  let varData_23;
  if ((varData_23 = Me(Z, param_1.id)) !== undefined) {
    return varData_23;
  } else {
    return param_1.defaultValue;
  }
}
function Se(param_1) {
  const varData_24 = F(param_1);
  const varData_25 = F(() => Q1(varData_24()));
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
function Ae() {
  if (this.sources && this.state) {
    if (this.state === u1) {
      x1(this);
    } else {
      const varData_27 = K;
      K = null;
      h1(() => B1(this), false);
      K = varData_27;
    }
  }
  if (T) {
    const varData_28 = this.observers ? this.observers.length : 0;
    if (T.sources) {
      T.sources.push(this);
      T.sourceSlots.push(varData_28);
    } else {
      T.sources = [this];
      T.sourceSlots = [varData_28];
    }
    if (this.observers) {
      this.observers.push(T);
      this.observerSlots.push(T.sources.length - 1);
    } else {
      this.observers = [T];
      this.observerSlots = [T.sources.length - 1];
    }
  }
  return this.value;
}
function je(param_1, param_2, param_3) {
  let varData_29 = param_1.value;
  if (!param_1.comparator || !param_1.comparator(varData_29, param_2)) {
    param_1.value = param_2;
    if (param_1.observers && param_1.observers.length) {
      h1(() => {
        for (let numericVal = 0; numericVal < param_1.observers.length; numericVal += 1) {
          const varData_30 = param_1.observers[numericVal];
          const varData_31 = V1 && V1.running;
          if (varData_31) {
            V1.disposed.has(varData_30);
          }
          if (varData_31 ? !varData_30.tState : !varData_30.state) {
            if (varData_30.pure) {
              K.push(varData_30);
            } else {
              d1.push(varData_30);
            }
            if (varData_30.observers) {
              Pe(varData_30);
            }
          }
          if (!varData_31) {
            varData_30.state = u1;
          }
        }
        if (K.length > 1000000) {
          K = [];
          throw new Error();
        }
      }, false);
    }
  }
  return param_2;
}
function x1(param_1) {
  if (!param_1.fn) {
    return;
  }
  R1(param_1);
  const varData_32 = Z;
  const varData_33 = T;
  const varData_34 = F1;
  T = Z = param_1;
  ze(param_1, param_1.value, varData_34);
  T = varData_33;
  Z = varData_32;
}
function ze(param_1, param_2, param_3) {
  let varData_35;
  try {
    varData_35 = param_1.fn(param_2);
  } catch (err) {
    if (param_1.pure) {
      param_1.state = u1;
      if (param_1.owned) {
        param_1.owned.forEach(R1);
      }
      param_1.owned = null;
    }
    param_1.updatedAt = param_3 + 1;
    return Oe(err);
  }
  if (!param_1.updatedAt || param_1.updatedAt <= param_3) {
    if (param_1.updatedAt != null && "observers" in param_1) {
      je(param_1, varData_35);
    } else {
      param_1.value = varData_35;
    }
    param_1.updatedAt = param_3;
  }
}
function H1(param_1, param_2, param_3, _0x591a26 = u1, param_5) {
  const varData_36 = {
    fn: param_1,
    state: _0x591a26,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: param_2,
    owner: Z,
    context: null,
    pure: param_3
  };
  if (Z !== null) {
    if (Z !== we) {
      if (Z.owned) {
        Z.owned.push(varData_36);
      } else {
        Z.owned = [varData_36];
      }
    }
  }
  return varData_36;
}
function T1(param_1) {
  if (param_1.state === 0) {
    return;
  }
  if (param_1.state === I1) {
    return B1(param_1);
  }
  if (param_1.suspense && D(param_1.suspense.inFallback)) {
    return param_1.suspense.effects.push(param_1);
  }
  const itemList = [param_1];
  while ((param_1 = param_1.owner) && (!param_1.updatedAt || param_1.updatedAt < F1)) {
    if (param_1.state) {
      itemList.push(param_1);
    }
  }
  for (let loopIdx = itemList.length - 1; loopIdx >= 0; loopIdx--) {
    param_1 = itemList[loopIdx];
    if (param_1.state === u1) {
      x1(param_1);
    } else if (param_1.state === I1) {
      const varData_37 = K;
      K = null;
      h1(() => B1(param_1, itemList[0]), false);
      K = varData_37;
    }
  }
}
function h1(param_1, param_2) {
  if (K) {
    return param_1();
  }
  let isDisabled = false;
  if (!param_2) {
    K = [];
  }
  if (d1) {
    isDisabled = true;
  } else {
    d1 = [];
  }
  F1++;
  try {
    const varData_38 = param_1();
    We(isDisabled);
    return varData_38;
  } catch (err) {
    if (!isDisabled) {
      d1 = null;
    }
    K = null;
    Oe(err);
  }
}
function We(param_1) {
  if (K) {
    ke(K);
    K = null;
  }
  if (param_1) {
    return;
  }
  const varData_39 = d1;
  d1 = null;
  if (varData_39.length) {
    h1(() => be(varData_39), false);
  }
}
function ke(param_1) {
  for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
    T1(param_1[numericVal]);
  }
}
function Ge(param_1) {
  let varData_40;
  let numericVal = 0;
  for (varData_40 = 0; varData_40 < param_1.length; varData_40++) {
    const varData_41 = param_1[varData_40];
    if (varData_41.user) {
      param_1[numericVal++] = varData_41;
    } else {
      T1(varData_41);
    }
  }
  for (varData_40 = 0; varData_40 < numericVal; varData_40++) {
    T1(param_1[varData_40]);
  }
}
function B1(param_1, param_2) {
  param_1.state = 0;
  for (let numericVal = 0; numericVal < param_1.sources.length; numericVal += 1) {
    const varData_42 = param_1.sources[numericVal];
    if (varData_42.sources) {
      const varData_43 = varData_42.state;
      if (varData_43 === u1) {
        if (varData_42 !== param_2 && (!varData_42.updatedAt || varData_42.updatedAt < F1)) {
          T1(varData_42);
        }
      } else if (varData_43 === I1) {
        B1(varData_42, param_2);
      }
    }
  }
}
function Pe(param_1) {
  for (let numericVal = 0; numericVal < param_1.observers.length; numericVal += 1) {
    const varData_44 = param_1.observers[numericVal];
    if (!varData_44.state) {
      varData_44.state = I1;
      if (varData_44.pure) {
        K.push(varData_44);
      } else {
        d1.push(varData_44);
      }
      if (varData_44.observers) {
        Pe(varData_44);
      }
    }
  }
}
function R1(param_1) {
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
      R1(param_1.owned[varData_45]);
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
function Oe(param_1) {
  throw param_1;
}
function Me(param_1, param_2) {
  if (param_1) {
    if (param_1.context && param_1.context[param_2] !== undefined) {
      return param_1.context[param_2];
    } else {
      return Me(param_1.owner, param_2);
    }
  } else {
    return undefined;
  }
}
function Q1(param_1) {
  if (typeof param_1 == "function" && !param_1.length) {
    return Q1(param_1());
  }
  if (Array.isArray(param_1)) {
    const itemList = [];
    for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
      const varData_51 = Q1(param_1[numericVal]);
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
function Qe(param_1, param_2) {
  return function (param_1_1) {
    let varData_52;
    P(() => varData_52 = D(() => {
      Z.context = {
        [param_1]: param_1_1.value
      };
      return Se(() => param_1_1.children);
    }), undefined);
    return varData_52;
  };
}
const Je = Symbol("fallback");
function de(param_1) {
  for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
    param_1[numericVal]();
  }
}
function et(param_1, param_2, _0x2ef678 = {}) {
  let itemList = [];
  let itemList_1 = [];
  let itemList_2 = [];
  let numericVal = 0;
  let varData_53 = param_2.length > 1 ? [] : null;
  _1(() => de(itemList_2));
  return () => {
    let varData_54 = param_1() || [];
    let varData_55;
    let varData_56;
    varData_54[G1];
    return D(() => {
      let varData_57 = varData_54.length;
      let varData_58;
      let varData_59;
      let varData_60;
      let varData_61;
      let varData_62;
      let varData_63;
      let varData_64;
      let varData_65;
      let varData_66;
      if (varData_57 === 0) {
        if (numericVal !== 0) {
          de(itemList_2);
          itemList_2 = [];
          itemList = [];
          itemList_1 = [];
          numericVal = 0;
          varData_53 &&= [];
        }
        if (_0x2ef678.fallback) {
          itemList = [Je];
          itemList_1[0] = D1(param_1_1 => {
            itemList_2[0] = param_1_1;
            return _0x2ef678.fallback();
          });
          numericVal = 1;
        }
      } else if (numericVal === 0) {
        itemList_1 = new Array(varData_57);
        varData_56 = 0;
        for (; varData_56 < varData_57; varData_56++) {
          itemList[varData_56] = varData_54[varData_56];
          itemList_1[varData_56] = D1(handleAction_3);
        }
        numericVal = varData_57;
      } else {
        varData_60 = new Array(varData_57);
        varData_61 = new Array(varData_57);
        if (varData_53) {
          varData_62 = new Array(varData_57);
        }
        varData_63 = 0;
        varData_64 = Math.min(numericVal, varData_57);
        for (; varData_63 < varData_64 && itemList[varData_63] === varData_54[varData_63]; varData_63++);
        varData_64 = numericVal - 1;
        varData_65 = varData_57 - 1;
        for (; varData_64 >= varData_63 && varData_65 >= varData_63 && itemList[varData_64] === varData_54[varData_65]; varData_64--, varData_65--) {
          varData_60[varData_65] = itemList_1[varData_64];
          varData_61[varData_65] = itemList_2[varData_64];
          if (varData_53) {
            varData_62[varData_65] = varData_53[varData_64];
          }
        }
        varData_58 = new Map();
        varData_59 = new Array(varData_65 + 1);
        varData_56 = varData_65;
        for (; varData_56 >= varData_63; varData_56--) {
          varData_66 = varData_54[varData_56];
          varData_55 = varData_58.get(varData_66);
          varData_59[varData_56] = varData_55 === undefined ? -1 : varData_55;
          varData_58.set(varData_66, varData_56);
        }
        for (varData_55 = varData_63; varData_55 <= varData_64; varData_55++) {
          varData_66 = itemList[varData_55];
          varData_56 = varData_58.get(varData_66);
          if (varData_56 !== undefined && varData_56 !== -1) {
            varData_60[varData_56] = itemList_1[varData_55];
            varData_61[varData_56] = itemList_2[varData_55];
            if (varData_53) {
              varData_62[varData_56] = varData_53[varData_55];
            }
            varData_56 = varData_59[varData_56];
            varData_58.set(varData_66, varData_56);
          } else {
            itemList_2[varData_55]();
          }
        }
        for (varData_56 = varData_63; varData_56 < varData_57; varData_56++) {
          if (varData_56 in varData_60) {
            itemList_1[varData_56] = varData_60[varData_56];
            itemList_2[varData_56] = varData_61[varData_56];
            if (varData_53) {
              varData_53[varData_56] = varData_62[varData_56];
              varData_53[varData_56](varData_56);
            }
          } else {
            itemList_1[varData_56] = D1(handleAction_3);
          }
        }
        itemList_1 = itemList_1.slice(0, numericVal = varData_57);
        itemList = varData_54.slice(0);
      }
      return itemList_1;
    });
    function handleAction_3(param_1_1) {
      itemList_2[varData_56] = param_1_1;
      if (varData_53) {
        const [_0x4e2960, _0x13ee97] = c1(varData_56);
        varData_53[varData_56] = _0x13ee97;
        return param_2(varData_54[varData_56], _0x4e2960);
      }
      return param_2(varData_54[varData_56]);
    }
  };
}
function S(param_1, param_2) {
  return D(() => param_1(param_2 || {}));
}
function O1() {
  return true;
}
const tt = {
  get(param_1, param_2, param_3) {
    if (param_2 === s1) {
      return param_3;
    } else {
      return param_1.get(param_2);
    }
  },
  has(param_1, param_2) {
    if (param_2 === s1) {
      return true;
    } else {
      return param_1.has(param_2);
    }
  },
  set: O1,
  deleteProperty: O1,
  getOwnPropertyDescriptor(param_1, param_2) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return param_1.get(param_2);
      },
      set: O1,
      deleteProperty: O1
    };
  },
  ownKeys(param_1) {
    return param_1.keys();
  }
};
function X1(param_1) {
  if (param_1 = typeof param_1 == "function" ? param_1() : param_1) {
    return param_1;
  } else {
    return {};
  }
}
function nt() {
  for (let numericVal = 0, loopIdx = this.length; numericVal < loopIdx; ++numericVal) {
    const varData_67 = this[numericVal]();
    if (varData_67 !== undefined) {
      return varData_67;
    }
  }
}
function De(..._0x5ecec1) {
  let isDisabled = false;
  for (let numericVal = 0; numericVal < _0x5ecec1.length; numericVal++) {
    const varData_68 = _0x5ecec1[numericVal];
    isDisabled = isDisabled || !!varData_68 && s1 in varData_68;
    _0x5ecec1[numericVal] = typeof varData_68 == "function" ? (isDisabled = true, F(varData_68)) : varData_68;
  }
  if (isDisabled) {
    return new Proxy({
      get(param_1) {
        for (let loopIdx = _0x5ecec1.length - 1; loopIdx >= 0; loopIdx--) {
          const varData_69 = X1(_0x5ecec1[loopIdx])[param_1];
          if (varData_69 !== undefined) {
            return varData_69;
          }
        }
      },
      has(param_1) {
        for (let loopIdx = _0x5ecec1.length - 1; loopIdx >= 0; loopIdx--) {
          if (param_1 in X1(_0x5ecec1[loopIdx])) {
            return true;
          }
        }
        return false;
      },
      keys() {
        const itemList = [];
        for (let numericVal = 0; numericVal < _0x5ecec1.length; numericVal++) {
          itemList.push(...Object.keys(X1(_0x5ecec1[numericVal])));
        }
        return [...new Set(itemList)];
      }
    }, tt);
  }
  const varData_70 = {};
  const varData_71 = {};
  let isDisabled_1 = false;
  for (let loopIdx = _0x5ecec1.length - 1; loopIdx >= 0; loopIdx--) {
    const varData_72 = _0x5ecec1[loopIdx];
    if (!varData_72) {
      continue;
    }
    const varData_73 = Object.getOwnPropertyNames(varData_72);
    isDisabled_1 = isDisabled_1 || loopIdx !== 0 && !!varData_73.length;
    for (let numericVal = 0, loopIdx_1 = varData_73.length; numericVal < loopIdx_1; numericVal++) {
      const varData_74 = varData_73[numericVal];
      if (varData_74 !== "__proto__" && varData_74 !== "constructor") {
        if (varData_74 in varData_70) {
          const varData_75 = varData_71[varData_74];
          const varData_76 = Object.getOwnPropertyDescriptor(varData_72, varData_74);
          if (varData_75) {
            if (varData_76.get) {
              varData_75.push(varData_76.get.bind(varData_72));
            } else if (varData_76.value !== undefined) {
              varData_75.push(() => varData_76.value);
            }
          } else if (varData_70[varData_74] === undefined) {
            varData_70[varData_74] = varData_76.value;
          }
        } else {
          const varData_77 = Object.getOwnPropertyDescriptor(varData_72, varData_74);
          if (varData_77.get) {
            Object.defineProperty(varData_70, varData_74, {
              enumerable: true,
              configurable: true,
              get: nt.bind(varData_71[varData_74] = [varData_77.get.bind(varData_72)])
            });
          } else {
            varData_70[varData_74] = varData_77.value;
          }
        }
      }
    }
  }
  return varData_70;
}
const Ee = param_1 => "Stale read from <" + param_1 + ">.";
function g1(param_1) {
  const varData_78 = "fallback" in param_1 && {
    fallback: () => param_1.fallback
  };
  return F(et(() => param_1.each, param_1.children, varData_78 || undefined));
}
function l1(param_1) {
  const varData_79 = param_1.keyed;
  const varData_80 = F(() => param_1.when, undefined, {
    equals: (param_1_1, param_2) => varData_79 ? param_1_1 === param_2 : !param_1_1 == !param_2
  });
  return F(() => {
    const varData_81 = varData_80();
    if (varData_81) {
      const varData_82 = param_1.children;
      if (typeof varData_82 == "function" && varData_82.length > 0) {
        return D(() => varData_82(varData_79 ? varData_81 : () => {
          if (!D(varData_80)) {
            throw Ee("Show");
          }
          return param_1.when;
        }));
      } else {
        return varData_82;
      }
    }
    return param_1.fallback;
  }, undefined, undefined);
}
function it(param_1) {
  let isDisabled = false;
  const varData_83 = (param_1_1, param_2) => param_1_1[0] === param_2[0] && (isDisabled ? param_1_1[1] === param_2[1] : !param_1_1[1] == !param_2[1]) && param_1_1[2] === param_2[2];
  const varData_84 = Se(() => param_1.children);
  const varData_85 = F(() => {
    let varData_86 = varData_84();
    if (!Array.isArray(varData_86)) {
      varData_86 = [varData_86];
    }
    for (let numericVal = 0; numericVal < varData_86.length; numericVal++) {
      const varData_87 = varData_86[numericVal].when;
      if (varData_87) {
        isDisabled = !!varData_86[numericVal].keyed;
        return [numericVal, varData_87, varData_86[numericVal]];
      }
    }
    return [-1];
  }, undefined, {
    equals: varData_83
  });
  return F(() => {
    const [_0x22558e, _0x5f9acf, _0x1aabf2] = varData_85();
    if (_0x22558e < 0) {
      return param_1.fallback;
    }
    const varData_88 = _0x1aabf2.children;
    if (typeof varData_88 == "function" && varData_88.length > 0) {
      return D(() => varData_88(isDisabled ? _0x5f9acf : () => {
        if (D(varData_85)[0] !== _0x22558e) {
          throw Ee("Match");
        }
        return _0x1aabf2.when;
      }));
    } else {
      return varData_88;
    }
  }, undefined, undefined);
}
function ce(param_1) {
  return param_1;
}
const rt = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
const st = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...rt]);
const ot = new Set(["innerHTML", "textContent", "innerText", "children"]);
const lt = Object.assign(Object.create(null), {
  className: "class",
  htmlFor: "for"
});
const at = Object.assign(Object.create(null), {
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
function dt(param_1, param_2) {
  const varData_89 = at[param_1];
  if (typeof varData_89 == "object") {
    if (varData_89[param_2]) {
      return varData_89.$;
    } else {
      return undefined;
    }
  } else {
    return varData_89;
  }
}
const ct = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
const ut = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function ft(param_1, param_2, param_3) {
  let varData_90 = param_3.length;
  let varData_91 = param_2.length;
  let varData_92 = varData_90;
  let numericVal = 0;
  let numericVal_1 = 0;
  let varData_93 = param_2[varData_91 - 1].nextSibling;
  let varData_94 = null;
  while (numericVal < varData_91 || numericVal_1 < varData_92) {
    if (param_2[numericVal] === param_3[numericVal_1]) {
      numericVal++;
      numericVal_1++;
      continue;
    }
    while (param_2[varData_91 - 1] === param_3[varData_92 - 1]) {
      varData_91--;
      varData_92--;
    }
    if (varData_91 === numericVal) {
      const varData_95 = varData_92 < varData_90 ? numericVal_1 ? param_3[numericVal_1 - 1].nextSibling : param_3[varData_92 - numericVal_1] : varData_93;
      while (numericVal_1 < varData_92) {
        param_1.insertBefore(param_3[numericVal_1++], varData_95);
      }
    } else if (varData_92 === numericVal_1) {
      while (numericVal < varData_91) {
        if (!varData_94 || !varData_94.has(param_2[numericVal])) {
          param_2[numericVal].remove();
        }
        numericVal++;
      }
    } else if (param_2[numericVal] === param_3[varData_92 - 1] && param_3[numericVal_1] === param_2[varData_91 - 1]) {
      const varData_96 = param_2[--varData_91].nextSibling;
      param_1.insertBefore(param_3[numericVal_1++], param_2[numericVal++].nextSibling);
      param_1.insertBefore(param_3[--varData_92], varData_96);
      param_2[varData_91] = param_3[varData_92];
    } else {
      if (!varData_94) {
        varData_94 = new Map();
        let varData_97 = numericVal_1;
        while (varData_97 < varData_92) {
          varData_94.set(param_3[varData_97], varData_97++);
        }
      }
      const varData_98 = varData_94.get(param_2[numericVal]);
      if (varData_98 != null) {
        if (numericVal_1 < varData_98 && varData_98 < varData_92) {
          let varData_99 = numericVal;
          let numericVal_2 = 1;
          let varData_100;
          while (++varData_99 < varData_91 && varData_99 < varData_92 && (varData_100 = varData_94.get(param_2[varData_99])) != null && varData_100 === varData_98 + numericVal_2) {
            numericVal_2++;
          }
          if (numericVal_2 > varData_98 - numericVal_1) {
            const varData_101 = param_2[numericVal];
            while (numericVal_1 < varData_98) {
              param_1.insertBefore(param_3[numericVal_1++], varData_101);
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
const ue = "_$DX_DELEGATE";
function vt(param_1, param_2, param_3, _0x50f31b = {}) {
  let varData_102;
  D1(param_1_1 => {
    varData_102 = param_1_1;
    if (param_2 === document) {
      param_1();
    } else {
      b(param_2, param_1(), param_2.firstChild ? null : undefined, param_3);
    }
  }, _0x50f31b.owner);
  return () => {
    varData_102();
    param_2.textContent = "";
  };
}
function A(param_1, param_2, param_3) {
  let varData_103;
  const varData_104 = () => {
    const varData_105 = document.createElement("template");
    varData_105.innerHTML = param_1;
    if (param_3) {
      return varData_105.content.firstChild.firstChild;
    } else {
      return varData_105.content.firstChild;
    }
  };
  const varData_106 = param_2 ? () => D(() => document.importNode(varData_103 ||= varData_104(), true)) : () => (varData_103 ||= varData_104()).cloneNode(true);
  varData_106.cloneNode = varData_106;
  return varData_106;
}
function Ct(param_1, _0x3772bf = window.document) {
  const varData_107 = _0x3772bf[ue] ||= new Set();
  for (let numericVal = 0, loopIdx = param_1.length; numericVal < loopIdx; numericVal++) {
    const varData_108 = param_1[numericVal];
    if (!varData_107.has(varData_108)) {
      varData_107.add(varData_108);
      _0x3772bf.addEventListener(varData_108, yt);
    }
  }
}
function J1(param_1, param_2, param_3) {
  if (param_3 == null) {
    param_1.removeAttribute(param_2);
  } else {
    param_1.setAttribute(param_2, param_3);
  }
}
function _t(param_1, param_2, param_3, param_4) {
  if (param_4 == null) {
    param_1.removeAttributeNS(param_2, param_3);
  } else {
    param_1.setAttributeNS(param_2, param_3, param_4);
  }
}
function u(param_1, param_2) {
  if (param_2 == null) {
    param_1.removeAttribute("class");
  } else {
    param_1.className = param_2;
  }
}
function gt(param_1, param_2, param_3, param_4) {
  if (param_4) {
    if (Array.isArray(param_3)) {
      param_1["$$" + param_2] = param_3[0];
      param_1["$$" + param_2 + "Data"] = param_3[1];
    } else {
      param_1["$$" + param_2] = param_3;
    }
  } else if (Array.isArray(param_3)) {
    const varData_109 = param_3[0];
    param_1.addEventListener(param_2, param_3[0] = param_1_1 => varData_109.call(param_1, param_3[1], param_1_1));
  } else {
    param_1.addEventListener(param_2, param_3);
  }
}
function se(param_1, param_2, _0x3f9dd3 = {}) {
  const keysList = Object.keys(param_2 || {});
  const keysList_1 = Object.keys(_0x3f9dd3);
  let varData_110;
  let varData_111;
  varData_110 = 0;
  varData_111 = keysList_1.length;
  for (; varData_110 < varData_111; varData_110++) {
    const varData_112 = keysList_1[varData_110];
    if (!!varData_112 && varData_112 !== "undefined" && !param_2[varData_112]) {
      fe(param_1, varData_112, false);
      delete _0x3f9dd3[varData_112];
    }
  }
  varData_110 = 0;
  varData_111 = keysList.length;
  for (; varData_110 < varData_111; varData_110++) {
    const varData_113 = keysList[varData_110];
    const varData_114 = !!param_2[varData_113];
    if (!!varData_113 && varData_113 !== "undefined" && _0x3f9dd3[varData_113] !== varData_114 && !!varData_114) {
      fe(param_1, varData_113, true);
      _0x3f9dd3[varData_113] = varData_114;
    }
  }
  return _0x3f9dd3;
}
function f1(param_1, param_2, param_3) {
  if (!param_2) {
    if (param_3) {
      return J1(param_1, "style");
    } else {
      return param_2;
    }
  }
  const varData_115 = param_1.style;
  if (typeof param_2 == "string") {
    return varData_115.cssText = param_2;
  }
  if (typeof param_3 == "string") {
    varData_115.cssText = param_3 = undefined;
  }
  param_3 ||= {};
  param_2 ||= {};
  let varData_116;
  let varData_117;
  for (varData_117 in param_3) {
    if (param_2[varData_117] == null) {
      varData_115.removeProperty(varData_117);
    }
    delete param_3[varData_117];
  }
  for (varData_117 in param_2) {
    varData_116 = param_2[varData_117];
    if (varData_116 !== param_3[varData_117]) {
      varData_115.setProperty(varData_117, varData_116);
      param_3[varData_117] = varData_116;
    }
  }
  return param_3;
}
function ht(param_1, _0x1dd1c4 = {}, param_3, param_4) {
  const varData_118 = {};
  if (!param_4) {
    P(() => varData_118.children = b1(param_1, _0x1dd1c4.children, varData_118.children));
  }
  P(() => _0x1dd1c4.ref && _0x1dd1c4.ref(param_1));
  P(() => $t(param_1, _0x1dd1c4, param_3, true, varData_118, true));
  return varData_118;
}
function ee(param_1, param_2, param_3) {
  return D(() => param_1(param_2, param_3));
}
function b(param_1, param_2, param_3, param_4) {
  if (param_3 !== undefined && !param_4) {
    param_4 = [];
  }
  if (typeof param_2 != "function") {
    return b1(param_1, param_2, param_4, param_3);
  }
  P(param_1_1 => b1(param_1, param_2(), param_1_1, param_3), param_4);
}
function $t(param_1, param_2, param_3, param_4, _0x10fe1f = {}, _0x18669b = false) {
  param_2 ||= {};
  for (const varData_119 in _0x10fe1f) {
    if (!(varData_119 in param_2)) {
      if (varData_119 === "children") {
        continue;
      }
      _0x10fe1f[varData_119] = ve(param_1, varData_119, null, _0x10fe1f[varData_119], param_3, _0x18669b);
    }
  }
  for (const varData_120 in param_2) {
    if (varData_120 === "children") {
      if (!param_4) {
        b1(param_1, param_2.children);
      }
      continue;
    }
    const varData_121 = param_2[varData_120];
    _0x10fe1f[varData_120] = ve(param_1, varData_120, varData_121, _0x10fe1f[varData_120], param_3, _0x18669b);
  }
}
function mt(param_1) {
  return param_1.toLowerCase().replace(/-([a-z])/g, (param_1_1, param_2) => param_2.toUpperCase());
}
function fe(param_1, param_2, param_3) {
  const varData_122 = param_2.trim().split(/\s+/);
  for (let numericVal = 0, loopIdx = varData_122.length; numericVal < loopIdx; numericVal++) {
    param_1.classList.toggle(varData_122[numericVal], param_3);
  }
}
function ve(param_1, param_2, param_3, param_4, param_5, param_6) {
  let varData_123;
  let varData_124;
  let varData_125;
  let varData_126;
  let varData_127;
  if (param_2 === "style") {
    return f1(param_1, param_3, param_4);
  }
  if (param_2 === "classList") {
    return se(param_1, param_3, param_4);
  }
  if (param_3 === param_4) {
    return param_4;
  }
  if (param_2 === "ref") {
    if (!param_6) {
      param_3(param_1);
    }
  } else if (param_2.slice(0, 3) === "on:") {
    const varData_128 = param_2.slice(3);
    if (param_4) {
      param_1.removeEventListener(varData_128, param_4);
    }
    if (param_3) {
      param_1.addEventListener(varData_128, param_3);
    }
  } else if (param_2.slice(0, 10) === "oncapture:") {
    const varData_129 = param_2.slice(10);
    if (param_4) {
      param_1.removeEventListener(varData_129, param_4, true);
    }
    if (param_3) {
      param_1.addEventListener(varData_129, param_3, true);
    }
  } else if (param_2.slice(0, 2) === "on") {
    const varData_130 = param_2.slice(2).toLowerCase();
    const varData_131 = ct.has(varData_130);
    if (!varData_131 && param_4) {
      const varData_132 = Array.isArray(param_4) ? param_4[0] : param_4;
      param_1.removeEventListener(varData_130, varData_132);
    }
    if (varData_131 || param_3) {
      gt(param_1, varData_130, param_3, varData_131);
      if (varData_131) {
        Ct([varData_130]);
      }
    }
  } else if (param_2.slice(0, 5) === "attr:") {
    J1(param_1, param_2.slice(5), param_3);
  } else if ((varData_127 = param_2.slice(0, 5) === "prop:") || (varData_125 = ot.has(param_2)) || !param_5 && ((varData_126 = dt(param_2, param_1.tagName)) || (varData_124 = st.has(param_2))) || (varData_123 = param_1.nodeName.includes("-"))) {
    if (varData_127) {
      param_2 = param_2.slice(5);
      varData_124 = true;
    }
    if (param_2 === "class" || param_2 === "className") {
      u(param_1, param_3);
    } else if (varData_123 && !varData_124 && !varData_125) {
      param_1[mt(param_2)] = param_3;
    } else {
      param_1[varData_126 || param_2] = param_3;
    }
  } else {
    const varData_133 = param_5 && param_2.indexOf(":") > -1 && ut[param_2.split(":")[0]];
    if (varData_133) {
      _t(param_1, varData_133, param_2, param_3);
    } else {
      J1(param_1, lt[param_2] || param_2, param_3);
    }
  }
  return param_3;
}
function yt(param_1) {
  const varData_134 = "$$" + param_1.type;
  let varData_135 = param_1.composedPath && param_1.composedPath()[0] || param_1.target;
  if (param_1.target !== varData_135) {
    Object.defineProperty(param_1, "target", {
      configurable: true,
      value: varData_135
    });
  }
  Object.defineProperty(param_1, "currentTarget", {
    configurable: true,
    get() {
      return varData_135 || document;
    }
  });
  while (varData_135) {
    const varData_136 = varData_135[varData_134];
    if (varData_136 && !varData_135.disabled) {
      const varData_137 = varData_135[varData_134 + "Data"];
      if (varData_137 !== undefined) {
        varData_136.call(varData_135, varData_137, param_1);
      } else {
        varData_136.call(varData_135, param_1);
      }
      if (param_1.cancelBubble) {
        return;
      }
    }
    varData_135 = varData_135._$host || varData_135.parentNode || varData_135.host;
  }
}
function b1(param_1, param_2, param_3, param_4, param_5) {
  while (typeof param_3 == "function") {
    param_3 = param_3();
  }
  if (param_2 === param_3) {
    return param_3;
  }
  const varData_138 = typeof param_2;
  const varData_139 = param_4 !== undefined;
  param_1 = varData_139 && param_3[0] && param_3[0].parentNode || param_1;
  if (varData_138 === "string" || varData_138 === "number") {
    if (varData_138 === "number") {
      param_2 = param_2.toString();
    }
    if (varData_139) {
      let varData_140 = param_3[0];
      if (varData_140 && varData_140.nodeType === 3) {
        varData_140.data = param_2;
      } else {
        varData_140 = document.createTextNode(param_2);
      }
      param_3 = m1(param_1, param_3, param_4, varData_140);
    } else if (param_3 !== "" && typeof param_3 == "string") {
      param_3 = param_1.firstChild.data = param_2;
    } else {
      param_3 = param_1.textContent = param_2;
    }
  } else if (param_2 == null || varData_138 === "boolean") {
    param_3 = m1(param_1, param_3, param_4);
  } else {
    if (varData_138 === "function") {
      P(() => {
        let varData_141 = param_2();
        while (typeof varData_141 == "function") {
          varData_141 = varData_141();
        }
        param_3 = b1(param_1, varData_141, param_3, param_4);
      });
      return () => param_3;
    }
    if (Array.isArray(param_2)) {
      const itemList = [];
      const varData_142 = param_3 && Array.isArray(param_3);
      if (te(itemList, param_2, param_3, param_5)) {
        P(() => param_3 = b1(param_1, itemList, param_3, param_4, true));
        return () => param_3;
      }
      if (itemList.length === 0) {
        param_3 = m1(param_1, param_3, param_4);
        if (varData_139) {
          return param_3;
        }
      } else if (varData_142) {
        if (param_3.length === 0) {
          Ce(param_1, itemList, param_4);
        } else {
          ft(param_1, param_3, itemList);
        }
      } else {
        if (param_3) {
          m1(param_1);
        }
        Ce(param_1, itemList);
      }
      param_3 = itemList;
    } else if (param_2.nodeType) {
      if (Array.isArray(param_3)) {
        if (varData_139) {
          return param_3 = m1(param_1, param_3, param_4, param_2);
        }
        m1(param_1, param_3, null, param_2);
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
function te(param_1, param_2, param_3, param_4) {
  let isDisabled = false;
  for (let numericVal = 0, loopIdx = param_2.length; numericVal < loopIdx; numericVal++) {
    let varData_143 = param_2[numericVal];
    let varData_144 = param_3 && param_3[numericVal];
    let varData_145;
    if (varData_143 != null && varData_143 !== true && varData_143 !== false) {
      if ((varData_145 = typeof varData_143) == "object" && varData_143.nodeType) {
        param_1.push(varData_143);
      } else if (Array.isArray(varData_143)) {
        isDisabled = te(param_1, varData_143, varData_144) || isDisabled;
      } else if (varData_145 === "function") {
        if (param_4) {
          while (typeof varData_143 == "function") {
            varData_143 = varData_143();
          }
          isDisabled = te(param_1, Array.isArray(varData_143) ? varData_143 : [varData_143], Array.isArray(varData_144) ? varData_144 : [varData_144]) || isDisabled;
        } else {
          param_1.push(varData_143);
          isDisabled = true;
        }
      } else {
        const varData_146 = String(varData_143);
        if (varData_144 && varData_144.nodeType === 3 && varData_144.data === varData_146) {
          param_1.push(varData_144);
        } else {
          param_1.push(document.createTextNode(varData_146));
        }
      }
    }
  }
  return isDisabled;
}
function Ce(param_1, param_2, _0x398159 = null) {
  for (let numericVal = 0, loopIdx = param_2.length; numericVal < loopIdx; numericVal++) {
    param_1.insertBefore(param_2[numericVal], _0x398159);
  }
}
function m1(param_1, param_2, param_3, param_4) {
  if (param_3 === undefined) {
    return param_1.textContent = "";
  }
  const varData_147 = param_4 || document.createTextNode("");
  if (param_2.length) {
    let isDisabled = false;
    for (let loopIdx = param_2.length - 1; loopIdx >= 0; loopIdx--) {
      const varData_148 = param_2[loopIdx];
      if (varData_147 !== varData_148) {
        const varData_149 = varData_148.parentNode === param_1;
        if (!isDisabled && !loopIdx) {
          if (varData_149) {
            param_1.replaceChild(varData_147, varData_148);
          } else {
            param_1.insertBefore(varData_147, param_3);
          }
        } else if (varData_149) {
          varData_148.remove();
        }
      } else {
        isDisabled = true;
      }
    }
  } else {
    param_1.insertBefore(varData_147, param_3);
  }
  return [varData_147];
}
const bt = "_App_mgl4n_1";
const wt = {
  App: bt
};
const ne = Symbol("store-raw");
const k1 = Symbol("store-node");
function Ie(param_1) {
  let varData_150 = param_1[s1];
  if (!varData_150 && (Object.defineProperty(param_1, s1, {
    value: varData_150 = new Proxy(param_1, Lt)
  }), !Array.isArray(param_1))) {
    const keysList = Object.keys(param_1);
    const varData_151 = Object.getOwnPropertyDescriptors(param_1);
    for (let numericVal = 0, loopIdx = keysList.length; numericVal < loopIdx; numericVal++) {
      const varData_152 = keysList[numericVal];
      if (varData_151[varData_152].get) {
        Object.defineProperty(param_1, varData_152, {
          enumerable: varData_151[varData_152].enumerable,
          get: varData_151[varData_152].get.bind(varData_150)
        });
      }
    }
  }
  return varData_150;
}
function N1(param_1) {
  let varData_153;
  return param_1 != null && typeof param_1 == "object" && (param_1[s1] || !(varData_153 = Object.getPrototypeOf(param_1)) || varData_153 === Object.prototype || Array.isArray(param_1));
}
function P1(param_1, _0x2f6547 = new Set()) {
  let varData_154;
  let varData_155;
  let varData_156;
  let varData_157;
  if (varData_154 = param_1 != null && param_1[ne]) {
    return varData_154;
  }
  if (!N1(param_1) || _0x2f6547.has(param_1)) {
    return param_1;
  }
  if (Array.isArray(param_1)) {
    if (Object.isFrozen(param_1)) {
      param_1 = param_1.slice(0);
    } else {
      _0x2f6547.add(param_1);
    }
    for (let numericVal = 0, loopIdx = param_1.length; numericVal < loopIdx; numericVal++) {
      varData_156 = param_1[numericVal];
      if ((varData_155 = P1(varData_156, _0x2f6547)) !== varData_156) {
        param_1[numericVal] = varData_155;
      }
    }
  } else {
    if (Object.isFrozen(param_1)) {
      param_1 = Object.assign({}, param_1);
    } else {
      _0x2f6547.add(param_1);
    }
    const keysList = Object.keys(param_1);
    const varData_158 = Object.getOwnPropertyDescriptors(param_1);
    for (let numericVal = 0, loopIdx = keysList.length; numericVal < loopIdx; numericVal++) {
      varData_157 = keysList[numericVal];
      if (!varData_158[varData_157].get) {
        varData_156 = param_1[varData_157];
        if ((varData_155 = P1(varData_156, _0x2f6547)) !== varData_156) {
          param_1[varData_157] = varData_155;
        }
      }
    }
  }
  return param_1;
}
function oe(param_1) {
  let varData_159 = param_1[k1];
  if (!varData_159) {
    Object.defineProperty(param_1, k1, {
      value: varData_159 = Object.create(null)
    });
  }
  return varData_159;
}
function ie(param_1, param_2, param_3) {
  return param_1[param_2] ||= Be(param_3);
}
function xt(param_1, param_2) {
  const varData_160 = Reflect.getOwnPropertyDescriptor(param_1, param_2);
  if (!!varData_160 && !varData_160.get && !!varData_160.configurable && param_2 !== s1 && param_2 !== k1) {
    delete varData_160.value;
    delete varData_160.writable;
    varData_160.get = () => param_1[s1][param_2];
  }
  return varData_160;
}
function Te(param_1) {
  if (xe()) {
    const varData_161 = oe(param_1);
    (varData_161._ ||= Be())();
  }
}
function pt(param_1) {
  Te(param_1);
  return Reflect.ownKeys(param_1);
}
function Be(param_1) {
  const [_0x4e481d, _0x2c5795] = c1(param_1, {
    equals: false,
    internal: true
  });
  _0x4e481d.$ = _0x2c5795;
  return _0x4e481d;
}
const Lt = {
  get(param_1, param_2, param_3) {
    if (param_2 === ne) {
      return param_1;
    }
    if (param_2 === s1) {
      return param_3;
    }
    if (param_2 === G1) {
      Te(param_1);
      return param_3;
    }
    const varData_162 = oe(param_1);
    const varData_163 = varData_162[param_2];
    let varData_164 = varData_163 ? varData_163() : param_1[param_2];
    if (param_2 === k1 || param_2 === "__proto__") {
      return varData_164;
    }
    if (!varData_163) {
      const varData_165 = Object.getOwnPropertyDescriptor(param_1, param_2);
      if (xe() && (typeof varData_164 != "function" || param_1.hasOwnProperty(param_2)) && (!varData_165 || !varData_165.get)) {
        varData_164 = ie(varData_162, param_2, varData_164)();
      }
    }
    if (N1(varData_164)) {
      return Ie(varData_164);
    } else {
      return varData_164;
    }
  },
  has(param_1, param_2) {
    if (param_2 === ne || param_2 === s1 || param_2 === G1 || param_2 === k1 || param_2 === "__proto__") {
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
  ownKeys: pt,
  getOwnPropertyDescriptor: xt
};
function Z1(param_1, param_2, param_3, _0x1dcbb6 = false) {
  if (!_0x1dcbb6 && param_1[param_2] === param_3) {
    return;
  }
  const varData_166 = param_1[param_2];
  const varData_167 = param_1.length;
  if (param_3 === undefined) {
    delete param_1[param_2];
  } else {
    param_1[param_2] = param_3;
  }
  let varData_168 = oe(param_1);
  let varData_169;
  if (varData_169 = ie(varData_168, param_2, varData_166)) {
    varData_169.$(() => param_3);
  }
  if (Array.isArray(param_1) && param_1.length !== varData_167) {
    for (let loopIdx = param_1.length; loopIdx < varData_167; loopIdx++) {
      if (varData_169 = varData_168[loopIdx]) {
        varData_169.$();
      }
    }
    if (varData_169 = ie(varData_168, "length", varData_167)) {
      varData_169.$(param_1.length);
    }
  }
  if (varData_169 = varData_168._) {
    varData_169.$();
  }
}
function Ne(param_1, param_2) {
  const keysList = Object.keys(param_2);
  for (let numericVal = 0; numericVal < keysList.length; numericVal += 1) {
    const varData_170 = keysList[numericVal];
    Z1(param_1, varData_170, param_2[varData_170]);
  }
}
function St(param_1, param_2) {
  if (typeof param_2 == "function") {
    param_2 = param_2(param_1);
  }
  param_2 = P1(param_2);
  if (Array.isArray(param_2)) {
    if (param_1 === param_2) {
      return;
    }
    let numericVal = 0;
    let varData_171 = param_2.length;
    for (; numericVal < varData_171; numericVal++) {
      const varData_172 = param_2[numericVal];
      if (param_1[numericVal] !== varData_172) {
        Z1(param_1, numericVal, varData_172);
      }
    }
    Z1(param_1, "length", varData_171);
  } else {
    Ne(param_1, param_2);
  }
}
function A1(param_1, param_2, _0x1c5d30 = []) {
  let varData_173;
  let varData_174 = param_1;
  if (param_2.length > 1) {
    varData_173 = param_2.shift();
    const varData_175 = typeof varData_173;
    const varData_176 = Array.isArray(param_1);
    if (Array.isArray(varData_173)) {
      for (let numericVal = 0; numericVal < varData_173.length; numericVal++) {
        A1(param_1, [varData_173[numericVal]].concat(param_2), _0x1c5d30);
      }
      return;
    } else if (varData_176 && varData_175 === "function") {
      for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
        if (varData_173(param_1[numericVal], numericVal)) {
          A1(param_1, [numericVal].concat(param_2), _0x1c5d30);
        }
      }
      return;
    } else if (varData_176 && varData_175 === "object") {
      const {
        from: _0x4645de = 0,
        to: _0x1866f0 = param_1.length - 1,
        by: _0x1abb22 = 1
      } = varData_173;
      for (let loopIdx = _0x4645de; loopIdx <= _0x1866f0; loopIdx += _0x1abb22) {
        A1(param_1, [loopIdx].concat(param_2), _0x1c5d30);
      }
      return;
    } else if (param_2.length > 1) {
      A1(param_1[varData_173], param_2, [varData_173].concat(_0x1c5d30));
      return;
    }
    varData_174 = param_1[varData_173];
    _0x1c5d30 = [varData_173].concat(_0x1c5d30);
  }
  let varData_177 = param_2[0];
  if ((typeof varData_177 != "function" || !(varData_177 = varData_177(varData_174, _0x1c5d30), varData_177 === varData_174)) && (varData_173 !== undefined || varData_177 != null)) {
    varData_177 = P1(varData_177);
    if (varData_173 === undefined || N1(varData_174) && N1(varData_177) && !Array.isArray(varData_177)) {
      Ne(varData_174, varData_177);
    } else {
      Z1(param_1, varData_173, varData_177);
    }
  }
}
function a1(...[_0x1da720, _0x42eef7]) {
  const varData_178 = P1(_0x1da720 || {});
  const varData_179 = Array.isArray(varData_178);
  const varData_180 = Ie(varData_178);
  function handleAction_4(..._0x41fc18) {
    n1(() => {
      if (varData_179 && _0x41fc18.length === 1) {
        St(varData_178, _0x41fc18[0]);
      } else {
        A1(varData_178, _0x41fc18);
      }
    });
  }
  return [varData_180, handleAction_4];
}
function At(param_1, param_2) {
  const varData_181 = pe(param_2);
  return [param_1_1 => S(varData_181.Provider, {
    value: param_1(param_1_1),
    get children() {
      return param_1_1.children;
    }
  }), () => Le(varData_181)];
}
const [jt, kt] = At(() => {
  const [_0x92212c, _0x253f5d] = c1({});
  const [_0x36fac1, _0x75b527] = a1({});
  const [_0x21fa23, _0x489b43] = a1({});
  const [_0x52368c, _0x3279e1] = a1({});
  const [_0x5490a1, _0x26eed4] = a1([]);
  const [_0x4cfc11, _0x47fe98] = c1(false);
  return {
    data: _0x92212c,
    setData: _0x253f5d,
    playerState: _0x21fa23,
    setPlayerState: _0x489b43,
    inspectionState: _0x52368c,
    setInspectionState: _0x3279e1,
    items: _0x5490a1,
    setItems: _0x26eed4,
    quickInspection: _0x4cfc11,
    setQuickInspection: _0x47fe98,
    playerStats: _0x36fac1,
    setPlayerStats: _0x75b527
  };
});
const G = () => kt();
const y1 = (param_1, param_2) => ({
  fill: "rgba(255, 103, 103, " + param_1 / param_2 * 0.52 + ")",
  "box-shadow": "0px 0px 2.29vhvh 0px #FF6767 inset"
});
const _e = "" + new URL("character-a154022f.png", import.meta.url).href;
const Pt = "_container_g94ip_1";
const Ot = "_characterIndicator_g94ip_14";
const Mt = "_character_g94ip_14";
const Dt = "_wound_g94ip_35";
const Ze = {
  container: Pt,
  characterIndicator: Ot,
  character: Mt,
  wound: Dt
};
const Et = A("<div><svg width=\"15.18vh\" height=\"33.24vh\" viewBox=\"0 0 164 359\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path class=\"wound\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M88.7678 0.608831C86.2669 1.41774 84.5493 2.39153 82.8052 3.98953C80.6815 5.93584 79.4565 7.5783 78.2947 10.0378C77.4083 11.9142 75.8111 16.5609 75.8111 17.2628C75.8111 17.4607 75.4267 17.9452 74.9567 18.3395C73.6503 19.436 73.412 20.0767 73.4141 22.4864C73.4164 24.8987 73.7654 26.1946 74.8177 27.6945C75.2097 28.2535 75.6025 29.0537 75.6907 29.4729C75.7786 29.8921 76.1789 31.5498 76.5804 33.1567C77.6469 37.4266 78.0666 40.2037 78.2581 44.2576C78.4098 47.4676 78.4793 47.6378 78.4793 48.2729L78.3522 48.654H85.0847C89.1495 48.654 94.2591 48.6542 96.3901 48.654L99.9468 48.781V46.7486C99.9476 45.5959 99.8582 43.6301 99.9468 42.3026L100.525 39.8891L101.469 39.2187C103.044 38.1011 103.39 37.0323 105.445 26.9324C105.678 25.7899 105.861 22.6104 105.958 18.0405C106.089 11.8965 106.052 10.7032 105.687 9.28427C104.182 3.43671 99.3273 0.117745 92.3246 0.147723C90.9715 0.153567 89.6433 0.325815 88.7678 0.608831Z\"></path><path class=\"wound\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M76.945 50.8135C74.2441 54.8374 71.8639 58.5621 68.6882 61.2297C66.861 63.0583 64.5456 64.462 64.2423 64.6594C63.7075 65.0077 63.3531 65.5486 63.3531 86.508C61.7678 106.15 61.9842 107.558 62.1582 111.024C62.2634 113.12 62.1194 118.614 62.1582 122.457C62.2273 129.261 61.9903 129.777 61.3206 132.746C60.9426 134.423 60.5384 137.643 60.3044 138.97C59.3454 144.415 57.4303 147.899 54.3341 153.324C52.3769 156.754 51.6038 159.882 49.7612 165.9C48.3735 170.432 45.9158 180.588 44.8071 185.208C44.4626 186.643 43.5372 191.664 43.5372 192.322C43.5372 192.786 42.481 192.765 58.8436 192.619C68.1008 192.536 81.2194 192.47 87.9963 192.472C94.7732 192.474 103.476 192.396 107.337 192.297L113.986 192.068V190.569C113.168 187.136 111.864 182.785 111.624 180.254C111.355 177.416 111.255 175.681 112.132 169.711C112.409 167.824 112.748 164.153 112.894 161.708C113.04 159.263 113.35 155.363 113.656 153.197C114.155 149.666 115.064 148.878 114.291 138.97V127.665L115.308 123.6C116.394 119.5 117.537 116.397 118.991 113.184C120.895 108.978 121.892 105.972 122.675 102.895L123.31 99.5918L120.913 80.2382C118.974 69.3645 117.343 60.3532 117.288 60.2135C117.234 60.0737 116.823 59.7831 116.375 59.5676C115.928 59.3525 113.706 58.1884 111.438 56.9814C106.539 54.3733 103.154 52.1145 101.148 50.1148L99.6828 48.654L88.695 48.6621H78.3423L76.945 50.8135Z\"></path><path class=\"wound\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M60.0552 65.1913C52.3777 66.7208 45.7052 74.0294 43.9228 82.4432C43.4416 84.7139 43.8684 90.4433 44.3105 93.1833C44.8587 96.5815 44.5668 98.4267 42.5636 104.23C41.5865 107.06 40.424 110.947 39.9799 112.868C38.5882 118.886 38.3389 119.566 36.7277 121.737C35.9158 122.832 34.5332 124.527 33.6555 125.505C30.4353 129.093 28.8719 131.667 26.4787 137.318C24.8639 141.131 19.3484 150.895 13.8494 159.676C12.2306 162.261 10.141 165.747 9.20606 167.424C7.32479 170.798 3.70122 175.947 1.02628 179.047C0.0695148 180.156 0.351602 181.211 0.225337 181.651C-0.0320196 182.549 0.355834 186.647 0.606077 189.893L0.988133 190.924L3.02057 192.322C3.99867 193.001 5.43865 194.134 5.94219 194.481C7.04402 195.24 7.46651 194.862 7.97462 195.243C8.15424 195.174 8.3557 195.37 8.60975 195.497C8.99084 195.37 8.97385 195.359 9.28532 195.141C9.58765 194.929 10.4296 194.145 10.8958 193.273C11.5522 192.044 12.8012 190.941 12.8012 189.893C12.8012 189.093 12.3131 189.122 12.5471 188.765C12.8761 188.263 13.0705 187.672 12.8012 187.24C12.4506 186.679 12.3581 186.238 14.3255 182.794C15.5869 180.586 16.4075 179.51 16.612 176.189V173.013L17.131 170.748C20.7861 164.922 23.4546 161.507 30.7125 155.611C37.9593 149.724 40.2819 147.341 46.3368 138.97C48.8306 135.522 49.9279 134.171 50.9149 131.222C51.3592 129.894 51.9572 127.116 52.6881 125.505C53.9965 122.622 57.8973 115.266 58.9125 113.819C59.1983 113.411 60.3753 112.201 60.9622 110.792C61.5493 109.383 61.9448 108.199 62.0881 108.23C61.7586 105.506 62.2152 105.943 63.3513 86.635C63.3584 77.108 63.5378 68.4099 63.6125 67.3269L63.9961 64.7864H62.9773C62.4502 64.7996 60.9835 65.0064 60.0552 65.1913Z\"></path><path class=\"wound\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M117.344 59.9594C117.344 60.0524 118.952 67.9557 120.773 78.8864L123.187 99.4648L123.822 100.354L124.203 100.989C124.842 102.317 125.779 104.755 126.236 105.943C126.693 107.131 128.015 110.688 129.411 113.692C132.945 121.293 133.984 123.473 133.984 128.046C134.209 130.217 134.669 131.736 136.144 135.032C136.856 136.624 138.158 139.967 139.192 142.527C140.227 145.087 142.209 150.358 144.019 154.086C145.83 157.814 147.83 161.327 148.338 163.995C149.649 167.827 151.089 173.398 151.133 175.046C151.165 176.226 150.534 175.941 149.51 177.093C147.487 179.37 147.167 182.241 147.703 184.573C147.919 185.512 147.264 185.716 146.099 188.256C145.048 190.547 145.337 191.45 145.241 192.957C145.129 194.694 145.18 194.584 145.798 194.989C146.172 195.234 146.247 195.498 146.733 195.451C147.549 195.373 147.872 195.613 149.609 192.068C150.599 190.049 151.279 187.997 151.408 187.955C151.537 187.912 152.352 187.992 152.784 188.256C153.38 188.619 153.416 189.337 154.046 190.9C154.504 192.036 155.112 193.263 155.399 193.627C156.336 194.818 157.151 197.508 157.294 199.886L157.429 202.115L156.377 203.086C155.697 203.714 155.326 204.276 155.326 204.677C155.326 205.125 154.974 205.559 154.06 206.242C152.823 207.165 152.389 207.941 152.582 208.879C152.654 209.229 152.877 209.328 153.485 209.28C154.073 209.234 154.365 209.354 154.564 209.725C154.938 210.424 155.374 210.365 156.9 209.407C158.909 208.144 160.646 206.281 162.251 203.665C163.997 200.82 164.066 200.167 162.952 197.009C162.293 195.139 162.449 193.612 162.439 191.178C162.433 189.641 162.196 188.956 162.058 188.357C161.697 186.793 160.952 181.236 160.651 176.951C160.396 173.31 159.836 169.312 158.892 164.376C158.15 160.498 157.657 154.465 157.23 149.259C156.485 140.168 155.327 133.381 151.769 126.013C150.464 122.894 149.662 121.196 147.832 118.646C147.056 117.564 146.073 116.253 145.926 115.978C145.779 115.704 145.469 113.287 144.782 110.389C143.094 103.256 142.856 102.51 140.972 98.8297C140.05 97.0292 139.21 94.6512 139.066 93.8756C138.927 93.1229 138.815 90.9126 138.812 88.0324C139.447 85.7459 138.953 81.6422 138.812 80.6648C137.987 74.957 135.168 69.4902 130.428 64.7864C127.526 61.9057 124.511 60.668 121.79 59.9594C120.207 59.5471 117.344 59.683 117.344 59.9594Z\"></path><path class=\"wound\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.4125 192.567L43.2855 195.751C42.2748 206.965 42.5233 209.724 42.1423 217.346C42.5205 231.344 43.0731 235.053 42.2693 238.432C41.1086 243.312 40.5687 243.149 40.8724 247.07C41.3036 252.638 41.2092 254.231 43.1589 257.867C44.3962 259.491 48.1129 263.584 49.1292 268.411C50.8823 272.261 52.8365 276.46 56.1364 280.544C58.1273 283.009 59.5246 284.688 61.8319 288.481C65.599 294.675 67.2071 299.17 69.7075 307.789C70.8424 311.7 71.3728 312.36 71.3589 315.538C71.3457 318.555 70.933 319.446 69.9616 323.159C69.3798 325.384 68.8309 327.533 68.4373 328.367C67.4134 330.537 64.2454 334.338 60.8157 336.878C57.0863 340.411 57.6499 341.06 58.6562 343.992C59.3561 346.031 59.9764 346.569 64.374 345.643C65.6848 345.367 67.2415 345 67.8037 345C69.3224 345 70.3146 344.611 71.4875 343.094C72.4675 341.827 74.1531 339.439 74.1531 338.784C74.1531 338.293 76.4649 332.277 77.5828 330.4C79.3592 328.376 81.948 324.049 86.4747 321.635C90.5447 318.504 91.5111 316.937 92.3179 315.179C93.2039 313.249 92.9527 311.888 92.3179 310.457C91.3803 308.343 91.1978 308.544 88.2551 307.019C86.419 306.067 85.2084 304.979 84.6963 304.359C83.7693 303.238 81.9428 298.547 79.8693 292.165C78.8511 286.965 77.7317 283.743 76.9477 278.573C75.8632 271.422 73.7467 266.585 69.4531 259.773C67.4206 255.835 63.6327 251.943 61.8314 250.5L61.9585 249.103V246.562C61.9585 243.932 62.7749 242.175 64.1179 238.043C65.1149 234.976 65.4056 234.146 68.1828 228.016C70.5426 222.808 72.5172 217.043 74.7882 209.724L75.8049 205.786L76.4318 201.722V194.481V192.567H59.2102H43.4125Z\"></path><path class=\"wound\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M78.2109 193.229C78.2869 193.884 78.2109 194.93 78.3495 196.132C78.4344 197.096 79.1092 198.911 79.3657 199.943C79.6219 200.976 80.1867 204.446 80.89 207.819C82.5638 215.845 83.1772 217.79 85.0819 222.808C86.9309 227.679 87.092 228.162 87.3684 235.511C87.9945 242.272 88.0151 244.151 88.5517 246.128C89.0471 247.954 91.0969 250.622 92.0684 252.151C92.3279 253.167 91.9565 253.825 92.3279 256.014C92.7168 258.306 93.5438 259.523 94.7359 262.313C97.7241 269.309 97.541 271.459 96.5143 276.413C95.8792 284.543 96.0019 287.925 96.7805 293.055C97.1966 295.798 97.3173 296.218 98.7649 299.957C101.329 306.579 102.408 310.672 102.888 315.599C103.304 319.86 102.66 321.672 101.214 324.938C99.5103 328.786 99.7711 329.702 100.377 332.285V334.973L99.3089 338.403C98.4179 341.911 97.4531 343.374 95.6251 346.405C93.7002 349.597 93.864 351.438 93.7988 354.678C93.7558 356.827 93.7675 356.874 94.5596 357.669C95.1514 358.264 95.589 358.477 96.2144 358.477C97.2528 358.477 98.3193 357.816 98.6394 356.973C98.9328 356.2 99.2358 356.365 99.8943 357.658C100.365 358.582 100.472 358.65 101.328 358.579C102.137 358.512 102.289 358.392 102.542 357.626C102.834 356.742 102.855 356.753 103.245 358.002C103.439 358.623 104.881 358.467 105.637 357.742C106.223 357.18 106.336 357.151 106.618 357.491C107.24 358.242 108.876 357.645 108.876 356.668C108.876 356.279 109.026 356.298 109.759 356.779C110.308 357.139 110.437 357.143 110.938 356.811C111.247 356.606 111.582 355.132 112.393 353.773L114.171 351.105L114.643 347.837C114.749 345.826 114.423 343.955 114.584 343.357C114.922 342.101 115.314 340.568 114.584 338.555C114.874 336.478 114.124 336.907 114.249 335.477C114.334 334.507 114.442 332.826 114.526 331.881C114.627 330.732 114.527 329.258 114.225 327.438C113.673 324.108 113.675 318.94 114.231 314.013C114.445 312.118 115.372 305.642 116.291 299.622C117.948 288.764 117.962 288.632 117.98 283.294C118.001 277.194 117.886 276.476 115.604 268.374C114.585 264.758 114.279 263.201 114.009 260.269C113.824 258.273 113.413 254.37 113.095 251.596L112.516 246.553L112.962 237.831C113.207 233.034 113.561 227.589 113.748 225.731C114.733 215.967 115.081 196.902 114.336 193.571L113.999 192.069L95.7532 192.449H78.2133L78.2109 193.229Z\">");
function Fe() {
  const {
    playerState: _0x273c37
  } = G();
  const varData_182 = F(() => _0x273c37.wounds?.leftArm);
  const varData_183 = F(() => _0x273c37.wounds?.rightArm);
  const varData_184 = F(() => _0x273c37.wounds?.leftLeg);
  const varData_185 = F(() => _0x273c37.wounds?.rightLeg);
  const varData_186 = F(() => _0x273c37.wounds?.head);
  const varData_187 = F(() => _0x273c37.wounds?.body);
  return (() => {
    const varData_188 = Et();
    const varData_189 = varData_188.firstChild;
    const varData_190 = varData_189.firstChild;
    const varData_191 = varData_190.nextSibling;
    const varData_192 = varData_191.nextSibling;
    const varData_193 = varData_192.nextSibling;
    const varData_194 = varData_193.nextSibling;
    const varData_195 = varData_194.nextSibling;
    if ("url(" + _e + ")" != null) {
      varData_188.style.setProperty("background-image", "url(" + _e + ")");
    } else {
      varData_188.style.removeProperty("background-image");
    }
    varData_188.style.setProperty("background-size", "cover");
    varData_188.style.setProperty("background-repeat", "no-repeat");
    varData_188.style.setProperty("background-position", "center");
    P(param_1 => {
      const varData_196 = Ze.character;
      const varData_197 = y1(varData_186().damage, varData_186().maxDamage);
      const varData_198 = y1(varData_187().damage, varData_187().maxDamage);
      const varData_199 = y1(varData_183().damage, varData_183().maxDamage);
      const varData_200 = y1(varData_182().damage, varData_182().maxDamage);
      const varData_201 = y1(varData_185().damage, varData_185().maxDamage);
      const varData_202 = y1(varData_184().damage, varData_184().maxDamage);
      if (varData_196 !== param_1._v$) {
        u(varData_188, param_1._v$ = varData_196);
      }
      param_1._v$2 = f1(varData_190, varData_197, param_1._v$2);
      param_1._v$3 = f1(varData_191, varData_198, param_1._v$3);
      param_1._v$4 = f1(varData_192, varData_199, param_1._v$4);
      param_1._v$5 = f1(varData_193, varData_200, param_1._v$5);
      param_1._v$6 = f1(varData_194, varData_201, param_1._v$6);
      param_1._v$7 = f1(varData_195, varData_202, param_1._v$7);
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return varData_188;
  })();
}
const It = A("<div>");
function Tt() {
  const [_0xcc81f, _0x16a3fb] = c1(false);
  const {
    playerState: _0x5dc9d4,
    setPlayerState: _0x9067e8,
    setPlayerStats: _0x67a3a0
  } = G();
  const [_0x322eb5, _0x224881] = a1({
    value: 0
  });
  _0x4ca1ca.register("np-wounds:setPlayerState", async param_1 => {
    _0x9067e8({
      ...param_1
    });
    return "OK";
  });
  _0x4ca1ca.register("np-wounds:setPlayerStats", async param_1 => {
    _0x67a3a0({
      ...param_1
    });
    return "OK";
  });
  _0x4ca1ca.register("np-wounds:setArmor", async param_1 => {
    _0x224881({
      value: param_1
    });
    return "OK";
  });
  _0x4ca1ca.register("np-wounds:show", async param_1 => {
    _0x16a3fb(param_1);
    return "OK";
  });
  return S(l1, {
    get when() {
      return F(() => !!_0xcc81f())() && Object.entries(_0x5dc9d4).length;
    },
    get children() {
      const varData_203 = It();
      b(varData_203, S(Fe, {}));
      P(() => u(varData_203, Ze.container));
      return varData_203;
    }
  });
}
const Bt = "_death_64xds_1";
const Nt = "_poly_64xds_14";
const Zt = "_rotate_64xds_25";
const Ft = "_title_64xds_35";
const Ht = "_text_64xds_51";
const Rt = "_red_64xds_63";
const qt = "_redLarger_64xds_66";
const Ut = "_time_64xds_71";
const Kt = "_rectangle_64xds_89";
const Vt = "_rotateOpposite_64xds_102";
const Xt = "_move_64xds_1";
const q = {
  death: Bt,
  poly: Nt,
  rotate: Zt,
  title: Ft,
  text: Ht,
  red: Rt,
  redLarger: qt,
  time: Ut,
  rectangle: Kt,
  rotateOpposite: Vt,
  move: Xt
};
const Yt = A("<div><div><div><div>You are </div><div></div><div><div><div></div></div><div><div></div></div>:<div><div></div></div><div><div>");
const zt = A("<span>Hold <span>E (<!>)</span> to stand up");
const Wt = A("<span>Hold <span>E (<!>)</span> to respawn or wait for the <span>EMS");
const ge = A("<br>");
const Gt = A("<span>EMS is on duty. Be sure to wait for them first before you respawn.");
const Qt = A("<span>You are <!>. ");
function Jt() {
  const {
    data: _0x28de70,
    setData: _0x50e9ac
  } = G();
  const [_0x5e79a9, _0xfac316] = a1({
    hour: {
      first: 0,
      second: 0
    },
    minutes: {
      first: 0,
      second: 0
    },
    seconds: {
      first: 0,
      second: 0
    }
  });
  _0x4ca1ca.register("np-wounds:death", async param_1 => {
    _0x50e9ac(param_1);
    const roundedVal = Math.floor(param_1.time / 1000);
    const roundedVal_1 = Math.floor(roundedVal / 3600);
    const roundedVal_2 = Math.floor(roundedVal % 3600 / 60);
    const roundedVal_3 = Math.floor(roundedVal % 3600 % 60);
    _0xfac316({
      hour: {
        first: Math.floor(roundedVal_1 / 10),
        second: roundedVal_1 % 10
      },
      minutes: {
        first: Math.floor(roundedVal_2 / 10),
        second: roundedVal_2 % 10
      },
      seconds: {
        first: Math.floor(roundedVal_3 / 10),
        second: roundedVal_3 % 10
      }
    });
  });
  return S(l1, {
    get when() {
      return _0x28de70().show;
    },
    get children() {
      const varData_204 = Yt();
      const varData_205 = varData_204.firstChild;
      const varData_206 = varData_205.firstChild;
      const varData_207 = varData_206.firstChild;
      varData_207.firstChild;
      const varData_208 = varData_207.nextSibling;
      const varData_209 = varData_208.nextSibling;
      const varData_210 = varData_209.firstChild;
      const varData_211 = varData_210.firstChild;
      const varData_212 = varData_210.nextSibling;
      const varData_213 = varData_212.firstChild;
      const varData_214 = varData_212.nextSibling;
      const varData_215 = varData_214.nextSibling;
      const varData_216 = varData_215.firstChild;
      const varData_217 = varData_215.nextSibling;
      const varData_218 = varData_217.firstChild;
      b(varData_207, () => _0x28de70().deathType, null);
      b(varData_208, (() => {
        const varData_219 = F(() => typeof _0x28de70().timeHold == "number");
        return () => varData_219() ? [S(l1, {
          get when() {
            return _0x28de70().deathType === "unconscious";
          },
          get children() {
            const varData_220 = zt();
            const varData_221 = varData_220.firstChild;
            const varData_222 = varData_221.nextSibling;
            const varData_223 = varData_222.firstChild;
            const varData_224 = varData_223.nextSibling;
            varData_224.nextSibling;
            b(varData_222, () => _0x28de70().timeHold, varData_224);
            P(() => u(varData_222, q.red));
            return varData_220;
          }
        }), S(l1, {
          get when() {
            return _0x28de70().deathType === "incapacitated";
          },
          get children() {
            return [(() => {
              const varData_225 = Wt();
              const varData_226 = varData_225.firstChild;
              const varData_227 = varData_226.nextSibling;
              const varData_228 = varData_227.firstChild;
              const varData_229 = varData_228.nextSibling;
              varData_229.nextSibling;
              const varData_230 = varData_227.nextSibling;
              const varData_231 = varData_230.nextSibling;
              b(varData_227, () => _0x28de70().timeHold, varData_229);
              P(param_1 => {
                const varData_232 = q.red;
                const varData_233 = q.red;
                if (varData_232 !== param_1._v$15) {
                  u(varData_227, param_1._v$15 = varData_232);
                }
                if (varData_233 !== param_1._v$16) {
                  u(varData_231, param_1._v$16 = varData_233);
                }
                return param_1;
              }, {
                _v$15: undefined,
                _v$16: undefined
              });
              return varData_225;
            })(), S(l1, {
              get when() {
                return _0x28de70().emsOnDuty;
              },
              get children() {
                return [ge(), ge(), (() => {
                  const varData_234 = Gt();
                  P(() => u(varData_234, q.redLarger));
                  return varData_234;
                })()];
              }
            })];
          }
        })] : (() => {
          const varData_235 = Qt();
          const varData_236 = varData_235.firstChild;
          const varData_237 = varData_236.nextSibling;
          varData_237.nextSibling;
          b(varData_235, () => _0x28de70().deathType, varData_237);
          b(varData_235, () => _0x28de70().deathType === "incapacitated" ? "Please wait for doctors, everything will be fine." : "Stand up once you regain consciousness", null);
          return varData_235;
        })();
      })());
      b(varData_211, () => _0x5e79a9.minutes.first);
      b(varData_213, () => _0x5e79a9.minutes.second);
      b(varData_216, () => _0x5e79a9.seconds.first);
      b(varData_218, () => _0x5e79a9.seconds.second);
      P(param_1 => {
        const varData_238 = q.death;
        const varData_239 = q.poly;
        const varData_240 = q.rotate;
        const varData_241 = q.title;
        const varData_242 = q.text;
        const varData_243 = q.time;
        const varData_244 = q.rectangle;
        const varData_245 = q.rotateOpposite;
        const varData_246 = q.rectangle;
        const varData_247 = q.rotateOpposite;
        const varData_248 = q.rectangle;
        const varData_249 = q.rotateOpposite;
        const varData_250 = q.rectangle;
        const varData_251 = q.rotateOpposite;
        if (varData_238 !== param_1._v$) {
          u(varData_204, param_1._v$ = varData_238);
        }
        if (varData_239 !== param_1._v$2) {
          u(varData_205, param_1._v$2 = varData_239);
        }
        if (varData_240 !== param_1._v$3) {
          u(varData_206, param_1._v$3 = varData_240);
        }
        if (varData_241 !== param_1._v$4) {
          u(varData_207, param_1._v$4 = varData_241);
        }
        if (varData_242 !== param_1._v$5) {
          u(varData_208, param_1._v$5 = varData_242);
        }
        if (varData_243 !== param_1._v$6) {
          u(varData_209, param_1._v$6 = varData_243);
        }
        if (varData_244 !== param_1._v$7) {
          u(varData_210, param_1._v$7 = varData_244);
        }
        if (varData_245 !== param_1._v$8) {
          u(varData_211, param_1._v$8 = varData_245);
        }
        if (varData_246 !== param_1._v$9) {
          u(varData_212, param_1._v$9 = varData_246);
        }
        if (varData_247 !== param_1._v$10) {
          u(varData_213, param_1._v$10 = varData_247);
        }
        if (varData_248 !== param_1._v$11) {
          u(varData_215, param_1._v$11 = varData_248);
        }
        if (varData_249 !== param_1._v$12) {
          u(varData_216, param_1._v$12 = varData_249);
        }
        if (varData_250 !== param_1._v$13) {
          u(varData_217, param_1._v$13 = varData_250);
        }
        if (varData_251 !== param_1._v$14) {
          u(varData_218, param_1._v$14 = varData_251);
        }
        return param_1;
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
        _v$14: undefined
      });
      return varData_204;
    }
  });
}
const e2 = "_generalStatus_91pdv_1";
const t2 = "_text_91pdv_14";
const n2 = "_title_91pdv_22";
const i2 = "_description_91pdv_30";
const r2 = "_itemsList_91pdv_38";
const s2 = "_item_91pdv_38";
const o2 = "_box_91pdv_56";
const l2 = "_image_91pdv_66";
const a2 = "_data_91pdv_73";
const d2 = "_status_91pdv_102";
const z = {
  generalStatus: e2,
  text: t2,
  title: n2,
  description: i2,
  itemsList: r2,
  item: s2,
  box: o2,
  image: l2,
  data: a2,
  status: d2
};
const c2 = "" + new URL("head-1b575668.svg", import.meta.url).href;
const u2 = "" + new URL("body-5fe0b312.svg", import.meta.url).href;
const f2 = "" + new URL("leftArm-9588b5e7.svg", import.meta.url).href;
const v2 = "" + new URL("rightArm-2c5baf2a.svg", import.meta.url).href;
const C2 = "" + new URL("leftLeg-b3f27648.svg", import.meta.url).href;
const _2 = "" + new URL("rightLeg-eaa5f45a.svg", import.meta.url).href;
const g2 = A("<div><div><div>General status of Health</div><div>You can see the status of each body part below.</div></div><div>");
const h2 = A("<div><div><div></div></div><div><div><div></div></div><div>%");
const $2 = [{
  name: "Head",
  id: "head",
  image: c2
}, {
  name: "Body",
  id: "body",
  image: u2
}, {
  name: "Left Arm",
  id: "leftArm",
  image: f2
}, {
  name: "Right Arm",
  id: "rightArm",
  image: v2
}, {
  name: "Left Leg",
  id: "leftLeg",
  image: C2
}, {
  name: "Right Leg",
  id: "rightLeg",
  image: _2
}];
function m2() {
  const {
    inspectionState: _0x2ced57
  } = G();
  return (() => {
    const varData_252 = g2();
    const varData_253 = varData_252.firstChild;
    const varData_254 = varData_253.firstChild;
    const varData_255 = varData_254.nextSibling;
    const varData_256 = varData_253.nextSibling;
    b(varData_256, S(g1, {
      each: $2,
      children: param_1 => (() => {
        const varData_257 = h2();
        const varData_258 = varData_257.firstChild;
        const varData_259 = varData_258.firstChild;
        const varData_260 = varData_258.nextSibling;
        const varData_261 = varData_260.firstChild;
        const varData_262 = varData_261.firstChild;
        const varData_263 = varData_261.nextSibling;
        const varData_264 = varData_263.firstChild;
        b(varData_262, () => param_1.name);
        b(varData_263, () => 100 - Math.round(_0x2ced57.wounds[param_1.id].damage / _0x2ced57.wounds[param_1.id].maxDamage * 100), varData_264);
        P(param_1_1 => {
          const varData_265 = z.item;
          const varData_266 = z.box;
          const varData_267 = z.image;
          const varData_268 = "url(" + param_1.image + ")";
          const varData_269 = z.data;
          const varData_270 = z.text;
          const varData_271 = z.title;
          const varData_272 = z.status;
          if (varData_265 !== param_1_1._v$6) {
            u(varData_257, param_1_1._v$6 = varData_265);
          }
          if (varData_266 !== param_1_1._v$7) {
            u(varData_258, param_1_1._v$7 = varData_266);
          }
          if (varData_267 !== param_1_1._v$8) {
            u(varData_259, param_1_1._v$8 = varData_267);
          }
          if (varData_268 !== param_1_1._v$9) {
            if ((param_1_1._v$9 = varData_268) != null) {
              varData_259.style.setProperty("background-image", varData_268);
            } else {
              varData_259.style.removeProperty("background-image");
            }
          }
          if (varData_269 !== param_1_1._v$10) {
            u(varData_260, param_1_1._v$10 = varData_269);
          }
          if (varData_270 !== param_1_1._v$11) {
            u(varData_261, param_1_1._v$11 = varData_270);
          }
          if (varData_271 !== param_1_1._v$12) {
            u(varData_262, param_1_1._v$12 = varData_271);
          }
          if (varData_272 !== param_1_1._v$13) {
            u(varData_263, param_1_1._v$13 = varData_272);
          }
          return param_1_1;
        }, {
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined,
          _v$13: undefined
        });
        return varData_257;
      })()
    }));
    P(param_1 => {
      const varData_273 = z.generalStatus;
      const varData_274 = z.text;
      const varData_275 = z.title;
      const varData_276 = z.description;
      const varData_277 = z.itemsList;
      if (varData_273 !== param_1._v$) {
        u(varData_252, param_1._v$ = varData_273);
      }
      if (varData_274 !== param_1._v$2) {
        u(varData_253, param_1._v$2 = varData_274);
      }
      if (varData_275 !== param_1._v$3) {
        u(varData_254, param_1._v$3 = varData_275);
      }
      if (varData_276 !== param_1._v$4) {
        u(varData_255, param_1._v$4 = varData_276);
      }
      if (varData_277 !== param_1._v$5) {
        u(varData_256, param_1._v$5 = varData_277);
      }
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return varData_252;
  })();
}
const y2 = "_header_1b7o8_1";
const b2 = "_title_1b7o8_8";
const w2 = "_line_1b7o8_17";
const x2 = "_description_1b7o8_23";
const p1 = {
  header: y2,
  title: b2,
  line: w2,
  description: x2
};
const p2 = A("<div><svg width=\"2.59vh\" height=\"2.22vh\" viewBox=\"0 0 28 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.9153 0.0316983C5.31483 0.184506 3.80578 0.888524 2.57684 2.05579C0.226856 4.28771 -0.612496 7.79388 0.461395 10.8926C1.42204 13.6646 3.91646 16.73 7.72642 19.8208C9.35271 21.14 11.5985 22.7092 13.3955 23.7818C13.9278 24.0996 14.107 24.0828 14.826 23.6484C15.8053 23.0567 17.5408 21.8794 18.6231 21.0727C24.1017 16.9889 27.282 12.9861 27.9029 9.39281C28.0524 8.52769 28.027 7.29153 27.842 6.42447C26.7971 1.52835 22.029 -1.23469 17.6921 0.542825C16.8082 0.905099 16.0793 1.38394 15.348 2.08287C14.9229 2.48913 14.3333 3.19515 14.134 3.53673C14.0775 3.63353 14.0173 3.71278 14.0002 3.71278C13.983 3.71278 13.9228 3.63353 13.8663 3.53673C13.6503 3.16655 13.0651 2.4745 12.5879 2.02491C11.0314 0.558371 8.97341 -0.164768 6.9153 0.0316983Z\" fill=\"#F86969\"></svg><div class=\"flex flex-col items-start justify-start\"><div>Health Inspection</div><div>Inspect the patient to determine their health status.</div></div><div>/////");
function L2() {
  return (() => {
    const varData_278 = p2();
    const varData_279 = varData_278.firstChild;
    const varData_280 = varData_279.nextSibling;
    const varData_281 = varData_280.firstChild;
    const varData_282 = varData_281.nextSibling;
    const varData_283 = varData_280.nextSibling;
    varData_279.style.setProperty("filter", "drop-shadow(0px 0.37vh 1.2vh rgba(248, 105, 105, 0.55))");
    P(param_1 => {
      const varData_284 = p1.header;
      const varData_285 = p1.title;
      const varData_286 = p1.description;
      const varData_287 = p1.title;
      const varData_288 = {
        [p1.line]: true
      };
      if (varData_284 !== param_1._v$) {
        u(varData_278, param_1._v$ = varData_284);
      }
      if (varData_285 !== param_1._v$2) {
        u(varData_281, param_1._v$2 = varData_285);
      }
      if (varData_286 !== param_1._v$3) {
        u(varData_282, param_1._v$3 = varData_286);
      }
      if (varData_287 !== param_1._v$4) {
        u(varData_283, param_1._v$4 = varData_287);
      }
      param_1._v$5 = se(varData_283, varData_288, param_1._v$5);
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return varData_278;
  })();
}
const S2 = "_injuryList_t5y5h_1";
const A2 = "_text_t5y5h_14";
const j2 = "_title_t5y5h_22";
const k2 = "_description_t5y5h_30";
const P2 = "_itemsList_t5y5h_38";
const O2 = "_item_t5y5h_38";
const M2 = "_box_t5y5h_56";
const D2 = "_image_t5y5h_66";
const E2 = "_data_t5y5h_73";
const I2 = "_amount_t5y5h_102";
const W = {
  injuryList: S2,
  text: A2,
  title: j2,
  description: k2,
  itemsList: P2,
  item: O2,
  box: M2,
  image: D2,
  data: E2,
  amount: I2
};
const he = "" + new URL("injury-d5c6c07d.svg", import.meta.url).href;
const T2 = A("<div><div><div>Combined Injury List</div><div>List of all injuries on the patient.</div></div><div>");
const B2 = A("<div><div><div></div></div><div><div><div></div></div><div>");
function N2() {
  const {
    inspectionState: _0x2f32a4
  } = G();
  const varData_289 = () => Object.entries(_0x2f32a4.wounds).reduce((param_1, [_0x44fb7c, _0x21172c]) => _0x21172c.injuryList ? [...param_1, ..._0x21172c.injuryList] : param_1, []).reduce((param_1, param_2) => {
    param_1[param_2] ||= 0;
    param_1[param_2]++;
    return param_1;
  }, {});
  return (() => {
    const varData_290 = T2();
    const varData_291 = varData_290.firstChild;
    const varData_292 = varData_291.firstChild;
    const varData_293 = varData_292.nextSibling;
    const varData_294 = varData_291.nextSibling;
    b(varData_294, S(g1, {
      get each() {
        return Object.entries(varData_289());
      },
      children: ([_0x28de61, _0x5b4044]) => (() => {
        const varData_295 = B2();
        const varData_296 = varData_295.firstChild;
        const varData_297 = varData_296.firstChild;
        const varData_298 = varData_296.nextSibling;
        const varData_299 = varData_298.firstChild;
        const varData_300 = varData_299.firstChild;
        const varData_301 = varData_299.nextSibling;
        if ("url(" + he + ")" != null) {
          varData_297.style.setProperty("background-image", "url(" + he + ")");
        } else {
          varData_297.style.removeProperty("background-image");
        }
        b(varData_300, _0x28de61);
        b(varData_301, _0x5b4044);
        P(param_1 => {
          const varData_302 = W.item;
          const varData_303 = W.box;
          const varData_304 = W.image;
          const varData_305 = W.data;
          const varData_306 = W.text;
          const varData_307 = W.title;
          const varData_308 = W.amount;
          if (varData_302 !== param_1._v$6) {
            u(varData_295, param_1._v$6 = varData_302);
          }
          if (varData_303 !== param_1._v$7) {
            u(varData_296, param_1._v$7 = varData_303);
          }
          if (varData_304 !== param_1._v$8) {
            u(varData_297, param_1._v$8 = varData_304);
          }
          if (varData_305 !== param_1._v$9) {
            u(varData_298, param_1._v$9 = varData_305);
          }
          if (varData_306 !== param_1._v$10) {
            u(varData_299, param_1._v$10 = varData_306);
          }
          if (varData_307 !== param_1._v$11) {
            u(varData_300, param_1._v$11 = varData_307);
          }
          if (varData_308 !== param_1._v$12) {
            u(varData_301, param_1._v$12 = varData_308);
          }
          return param_1;
        }, {
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined,
          _v$12: undefined
        });
        return varData_295;
      })()
    }));
    P(param_1 => {
      const varData_309 = W.injuryList;
      const varData_310 = W.text;
      const varData_311 = W.title;
      const varData_312 = W.description;
      const varData_313 = W.itemsList;
      if (varData_309 !== param_1._v$) {
        u(varData_290, param_1._v$ = varData_309);
      }
      if (varData_310 !== param_1._v$2) {
        u(varData_291, param_1._v$2 = varData_310);
      }
      if (varData_311 !== param_1._v$3) {
        u(varData_292, param_1._v$3 = varData_311);
      }
      if (varData_312 !== param_1._v$4) {
        u(varData_293, param_1._v$4 = varData_312);
      }
      if (varData_313 !== param_1._v$5) {
        u(varData_294, param_1._v$5 = varData_313);
      }
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return varData_290;
  })();
}
const Z2 = "_items_jm1li_1";
const F2 = "_text_jm1li_14";
const H2 = "_title_jm1li_22";
const R2 = "_description_jm1li_30";
const q2 = "_itemsList_jm1li_38";
const U2 = "_item_jm1li_1";
const K2 = "_box_jm1li_59";
const V2 = "_image_jm1li_69";
const X2 = "_data_jm1li_76";
const Y2 = "_amount_jm1li_117";
const X = {
  items: Z2,
  text: F2,
  title: H2,
  description: R2,
  itemsList: q2,
  item: U2,
  box: K2,
  image: V2,
  data: X2,
  amount: Y2
};
var q1 = class {
  x;
  y;
  width;
  height;
  constructor(param_1) {
    this.x = Math.floor(param_1.x);
    this.y = Math.floor(param_1.y);
    this.width = Math.floor(param_1.width);
    this.height = Math.floor(param_1.height);
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
var j1 = param_1 => {
  let varData_314 = new q1(param_1.getBoundingClientRect());
  const {
    transform: _0x7407ee
  } = getComputedStyle(param_1);
  if (_0x7407ee) {
    varData_314 = z2(varData_314, _0x7407ee);
  }
  return varData_314;
};
var z2 = (param_1, param_2) => {
  let varData_315;
  let varData_316;
  if (param_2.startsWith("matrix3d(")) {
    const varData_317 = param_2.slice(9, -1).split(/, /);
    varData_315 = +varData_317[12];
    varData_316 = +varData_317[13];
  } else if (param_2.startsWith("matrix(")) {
    const varData_318 = param_2.slice(7, -1).split(/, /);
    varData_315 = +varData_318[4];
    varData_316 = +varData_318[5];
  } else {
    varData_315 = 0;
    varData_316 = 0;
  }
  return new q1({
    ...param_1,
    x: param_1.x - varData_315,
    y: param_1.y - varData_316
  });
};
var C1 = () => ({
  x: 0,
  y: 0
});
var He = (param_1, param_2) => param_1.x === param_2.x && param_1.y === param_2.y;
var Y1 = (param_1, param_2) => new q1({
  ...param_1,
  x: param_1.x + param_2.x,
  y: param_1.y + param_2.y
});
var W2 = (param_1, param_2) => {
  const varData_319 = Math.max(param_1.top, param_2.top);
  const varData_320 = Math.max(param_1.left, param_2.left);
  const varData_321 = Math.min(param_1.right, param_2.right);
  const varData_322 = Math.min(param_1.bottom, param_2.bottom);
  const varData_323 = varData_321 - varData_320;
  const varData_324 = varData_322 - varData_319;
  if (varData_320 < varData_321 && varData_319 < varData_322) {
    const varData_325 = param_1.width * param_1.height;
    const varData_326 = param_2.width * param_2.height;
    const varData_327 = varData_323 * varData_324;
    return varData_327 / (varData_325 + varData_326 - varData_327);
  }
  return 0;
};
var z1 = (param_1, param_2) => param_1.x === param_2.x && param_1.y === param_2.y && param_1.width === param_2.width && param_1.height === param_2.height;
var G2 = (param_1, param_2, param_3) => {
  const varData_328 = param_1.transformed;
  const varData_329 = {
    ratio: 0,
    droppable: null
  };
  for (const varData_330 of param_2) {
    const varData_331 = W2(varData_328, varData_330.layout);
    if (varData_331 > varData_329.ratio) {
      varData_329.ratio = varData_331;
      varData_329.droppable = varData_330;
    } else if (varData_331 > 0 && varData_331 === varData_329.ratio && varData_330.id === param_3.activeDroppableId) {
      varData_329.droppable = varData_330;
    }
  }
  return varData_329.droppable;
};
var Re = pe();
var Q2 = param_1 => {
  const varData_332 = De({
    collisionDetector: G2
  }, param_1);
  const [_0x12a44a, _0x39a244] = a1({
    draggables: {},
    droppables: {},
    sensors: {},
    active: {
      draggableId: null,
      get draggable() {
        if (_0x12a44a.active.draggableId !== null) {
          return _0x12a44a.draggables[_0x12a44a.active.draggableId];
        } else {
          return null;
        }
      },
      droppableId: null,
      get droppable() {
        if (_0x12a44a.active.droppableId !== null) {
          return _0x12a44a.droppables[_0x12a44a.active.droppableId];
        } else {
          return null;
        }
      },
      sensorId: null,
      get sensor() {
        if (_0x12a44a.active.sensorId !== null) {
          return _0x12a44a.sensors[_0x12a44a.active.sensorId];
        } else {
          return null;
        }
      },
      overlay: null
    }
  });
  const varData_333 = (param_1_1, param_2, param_3) => {
    param_1_1.substring(0, param_1_1.length - 1);
    if (D(() => _0x12a44a[param_1_1][param_2])) {
      _0x39a244(param_1_1, param_2, "transformers", param_3.id, param_3);
    }
  };
  const varData_334 = (param_1_1, param_2, param_3) => {
    param_1_1.substring(0, param_1_1.length - 1);
    if (D(() => _0x12a44a[param_1_1][param_2]) && D(() => _0x12a44a[param_1_1][param_2].transformers[param_3])) {
      _0x39a244(param_1_1, param_2, "transformers", param_3, undefined);
    }
  };
  const varData_335 = ({
    id: _0x2a8f1f,
    node: _0x12b89c,
    layout: _0x507e0c,
    data: _0xdb39ff
  }) => {
    const varData_336 = _0x12a44a.draggables[_0x2a8f1f];
    const varData_337 = {
      id: _0x2a8f1f,
      node: _0x12b89c,
      layout: _0x507e0c,
      data: _0xdb39ff,
      _pendingCleanup: false
    };
    let varData_338;
    if (!varData_336) {
      Object.defineProperties(varData_337, {
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
            if (_0x12a44a.active.overlay) {
              return C1();
            }
            const valuesList = Object.values(_0x12a44a.draggables[_0x2a8f1f].transformers);
            valuesList.sort((param_1_1, param_2) => param_1_1.order - param_2.order);
            return valuesList.reduce((param_1_1, param_2) => param_2.callback(param_1_1), C1());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => Y1(_0x12a44a.draggables[_0x2a8f1f].layout, _0x12a44a.draggables[_0x2a8f1f].transform)
        }
      });
    } else if (_0x12a44a.active.draggableId === _0x2a8f1f && !_0x12a44a.active.overlay) {
      const varData_339 = {
        x: varData_336.layout.x - _0x507e0c.x,
        y: varData_336.layout.y - _0x507e0c.y
      };
      const varData_340 = "addDraggable-existing-offset";
      const varData_341 = varData_336.transformers[varData_340];
      const varData_342 = varData_341 ? varData_341.callback(varData_339) : varData_339;
      varData_338 = {
        id: varData_340,
        order: 100,
        callback: param_1_1 => ({
          x: param_1_1.x + varData_342.x,
          y: param_1_1.y + varData_342.y
        })
      };
      varData_396(() => varData_334("draggables", _0x2a8f1f, varData_340));
    }
    n1(() => {
      _0x39a244("draggables", _0x2a8f1f, varData_337);
      if (varData_338) {
        varData_333("draggables", _0x2a8f1f, varData_338);
      }
    });
    if (_0x12a44a.active.draggable) {
      varData_369();
    }
  };
  const varData_343 = param_1_1 => {
    if (D(() => _0x12a44a.draggables[param_1_1])) {
      _0x39a244("draggables", param_1_1, "_pendingCleanup", true);
      queueMicrotask(() => varData_344(param_1_1));
    }
  };
  const varData_344 = param_1_1 => {
    if (_0x12a44a.draggables[param_1_1]?._pendingCleanup) {
      const varData_345 = _0x12a44a.active.draggableId === param_1_1;
      n1(() => {
        if (varData_345) {
          _0x39a244("active", "draggableId", null);
        }
        _0x39a244("draggables", param_1_1, undefined);
      });
    }
  };
  const varData_346 = ({
    id: _0x3465f2,
    node: _0x4c3f6a,
    layout: _0x19dba0,
    data: _0x2f85a8
  }) => {
    const varData_347 = _0x12a44a.droppables[_0x3465f2];
    const varData_348 = {
      id: _0x3465f2,
      node: _0x4c3f6a,
      layout: _0x19dba0,
      data: _0x2f85a8,
      _pendingCleanup: false
    };
    if (!varData_347) {
      Object.defineProperties(varData_348, {
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
            const valuesList = Object.values(_0x12a44a.droppables[_0x3465f2].transformers);
            valuesList.sort((param_1_1, param_2) => param_1_1.order - param_2.order);
            return valuesList.reduce((param_1_1, param_2) => param_2.callback(param_1_1), C1());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => Y1(_0x12a44a.droppables[_0x3465f2].layout, _0x12a44a.droppables[_0x3465f2].transform)
        }
      });
    }
    _0x39a244("droppables", _0x3465f2, varData_348);
    if (_0x12a44a.active.draggable) {
      varData_369();
    }
  };
  const varData_349 = param_1_1 => {
    if (D(() => _0x12a44a.droppables[param_1_1])) {
      _0x39a244("droppables", param_1_1, "_pendingCleanup", true);
      queueMicrotask(() => varData_350(param_1_1));
    }
  };
  const varData_350 = param_1_1 => {
    if (_0x12a44a.droppables[param_1_1]?._pendingCleanup) {
      const varData_351 = _0x12a44a.active.droppableId === param_1_1;
      n1(() => {
        if (varData_351) {
          _0x39a244("active", "droppableId", null);
        }
        _0x39a244("droppables", param_1_1, undefined);
      });
    }
  };
  const varData_352 = ({
    id: _0x3cd970,
    activators: _0x1f852a
  }) => {
    _0x39a244("sensors", _0x3cd970, {
      id: _0x3cd970,
      activators: _0x1f852a,
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
            x: _0x12a44a.sensors[_0x3cd970].coordinates.current.x - _0x12a44a.sensors[_0x3cd970].coordinates.origin.x,
            y: _0x12a44a.sensors[_0x3cd970].coordinates.current.y - _0x12a44a.sensors[_0x3cd970].coordinates.origin.y
          };
        }
      }
    });
  };
  const varData_353 = param_1_1 => {
    if (!D(() => _0x12a44a.sensors[param_1_1])) {
      return;
    }
    const varData_354 = _0x12a44a.active.sensorId === param_1_1;
    n1(() => {
      if (varData_354) {
        _0x39a244("active", "sensorId", null);
      }
      _0x39a244("sensors", param_1_1, undefined);
    });
  };
  const varData_355 = ({
    node: _0x15d37c,
    layout: _0x54fe0
  }) => {
    const varData_356 = _0x12a44a.active.overlay;
    const varData_357 = {
      node: _0x15d37c,
      layout: _0x54fe0
    };
    if (!varData_356) {
      Object.defineProperties(varData_357, {
        id: {
          enumerable: true,
          configurable: true,
          get: () => _0x12a44a.active.draggable?.id
        },
        data: {
          enumerable: true,
          configurable: true,
          get: () => _0x12a44a.active.draggable?.data
        },
        transformers: {
          enumerable: true,
          configurable: true,
          get: () => Object.fromEntries(Object.entries(_0x12a44a.active.draggable ? _0x12a44a.active.draggable.transformers : {}).filter(([_0x51b4c4]) => _0x51b4c4 !== "addDraggable-existing-offset"))
        },
        transform: {
          enumerable: true,
          configurable: true,
          get: () => {
            const valuesList = Object.values(_0x12a44a.active.overlay ? _0x12a44a.active.overlay.transformers : []);
            valuesList.sort((param_1_1, param_2) => param_1_1.order - param_2.order);
            return valuesList.reduce((param_1_1, param_2) => param_2.callback(param_1_1), C1());
          }
        },
        transformed: {
          enumerable: true,
          configurable: true,
          get: () => _0x12a44a.active.overlay ? Y1(_0x12a44a.active.overlay.layout, _0x12a44a.active.overlay.transform) : new q1({
            x: 0,
            y: 0,
            width: 0,
            height: 0
          })
        }
      });
    }
    _0x39a244("active", "overlay", varData_357);
  };
  const varData_358 = () => _0x39a244("active", "overlay", null);
  const varData_359 = (param_1_1, param_2) => {
    n1(() => {
      _0x39a244("sensors", param_1_1, "coordinates", {
        origin: {
          ...param_2
        },
        current: {
          ...param_2
        }
      });
      _0x39a244("active", "sensorId", param_1_1);
    });
  };
  const varData_360 = param_1_1 => {
    const varData_361 = _0x12a44a.active.sensorId;
    if (varData_361) {
      _0x39a244("sensors", varData_361, "coordinates", "current", {
        ...param_1_1
      });
    }
  };
  const varData_362 = () => _0x39a244("active", "sensorId", null);
  const varData_363 = (param_1_1, param_2) => {
    const varData_364 = {};
    for (const varData_365 of Object.values(_0x12a44a.sensors)) {
      if (varData_365) {
        for (const [_0x2e69d2, _0x197975] of Object.entries(varData_365.activators)) {
          varData_364[_0x2e69d2] ??= [];
          varData_364[_0x2e69d2].push({
            sensor: varData_365,
            activator: _0x197975
          });
        }
      }
    }
    const varData_366 = {};
    for (const varData_367 in varData_364) {
      let varData_368 = varData_367;
      if (param_2) {
        varData_368 = "on" + varData_367;
      }
      varData_366[varData_368] = param_1_2 => {
        for (const {
          activator: _0xc75a52
        } of varData_364[varData_367]) {
          if (_0x12a44a.active.sensor) {
            break;
          }
          _0xc75a52(param_1_2, param_1_1);
        }
      };
    }
    return varData_366;
  };
  const varData_369 = () => {
    let isDisabled = false;
    const valuesList = Object.values(_0x12a44a.draggables);
    const valuesList_1 = Object.values(_0x12a44a.droppables);
    const varData_370 = _0x12a44a.active.overlay;
    n1(() => {
      const varData_371 = new WeakMap();
      for (const varData_372 of valuesList) {
        if (varData_372) {
          const varData_373 = varData_372.layout;
          if (!varData_371.has(varData_372.node)) {
            varData_371.set(varData_372.node, j1(varData_372.node));
          }
          const varData_374 = varData_371.get(varData_372.node);
          if (!z1(varData_373, varData_374)) {
            _0x39a244("draggables", varData_372.id, "layout", varData_374);
            isDisabled = true;
          }
        }
      }
      for (const varData_375 of valuesList_1) {
        if (varData_375) {
          const varData_376 = varData_375.layout;
          if (!varData_371.has(varData_375.node)) {
            varData_371.set(varData_375.node, j1(varData_375.node));
          }
          const varData_377 = varData_371.get(varData_375.node);
          if (!z1(varData_376, varData_377)) {
            _0x39a244("droppables", varData_375.id, "layout", varData_377);
            isDisabled = true;
          }
        }
      }
      if (varData_370) {
        const varData_378 = varData_370.layout;
        const varData_379 = j1(varData_370.node);
        if (!z1(varData_378, varData_379)) {
          _0x39a244("active", "overlay", "layout", varData_379);
          isDisabled = true;
        }
      }
    });
    return isDisabled;
  };
  const varData_380 = () => {
    const varData_381 = _0x12a44a.active.overlay ?? _0x12a44a.active.draggable;
    if (varData_381) {
      const varData_382 = varData_332.collisionDetector(varData_381, Object.values(_0x12a44a.droppables), {
        activeDroppableId: _0x12a44a.active.droppableId
      });
      const varData_383 = varData_382 ? varData_382.id : null;
      if (_0x12a44a.active.droppableId !== varData_383) {
        _0x39a244("active", "droppableId", varData_383);
      }
    }
  };
  const varData_384 = param_1_1 => {
    const varData_385 = {
      id: "sensorMove",
      order: 0,
      callback: param_1_2 => _0x12a44a.active.sensor ? {
        x: param_1_2.x + _0x12a44a.active.sensor.coordinates.delta.x,
        y: param_1_2.y + _0x12a44a.active.sensor.coordinates.delta.y
      } : param_1_2
    };
    varData_369();
    n1(() => {
      _0x39a244("active", "draggableId", param_1_1);
      varData_333("draggables", param_1_1, varData_385);
    });
    varData_380();
  };
  const varData_386 = () => {
    const varData_387 = D(() => _0x12a44a.active.draggableId);
    n1(() => {
      if (varData_387 !== null) {
        varData_334("draggables", varData_387, "sensorMove");
      }
      _0x39a244("active", ["draggableId", "droppableId"], null);
    });
    varData_369();
  };
  const varData_388 = param_1_1 => {
    v1(() => {
      const varData_389 = _0x12a44a.active.draggable;
      if (varData_389) {
        D(() => param_1_1({
          draggable: varData_389
        }));
      }
    });
  };
  const varData_390 = param_1_1 => {
    v1(() => {
      const varData_391 = _0x12a44a.active.draggable;
      if (varData_391) {
        const varData_392 = D(() => _0x12a44a.active.overlay);
        Object.values(varData_392 ? varData_392.transform : varData_391.transform);
        D(() => param_1_1({
          draggable: varData_391,
          overlay: varData_392
        }));
      }
    });
  };
  const varData_393 = param_1_1 => {
    v1(() => {
      const varData_394 = _0x12a44a.active.draggable;
      const varData_395 = _0x12a44a.active.droppable;
      if (varData_394) {
        D(() => param_1_1({
          draggable: varData_394,
          droppable: varData_395,
          overlay: _0x12a44a.active.overlay
        }));
      }
    });
  };
  const varData_396 = param_1_1 => {
    v1(({
      previousDraggable: _0x342830,
      previousDroppable: _0x3dbd12,
      previousOverlay: _0x55c193
    }) => {
      const varData_397 = _0x12a44a.active.draggable;
      const varData_398 = varData_397 ? _0x12a44a.active.droppable : null;
      const varData_399 = varData_397 ? _0x12a44a.active.overlay : null;
      if (!varData_397 && _0x342830) {
        D(() => param_1_1({
          draggable: _0x342830,
          droppable: _0x3dbd12,
          overlay: _0x55c193
        }));
      }
      return {
        previousDraggable: varData_397,
        previousDroppable: varData_398,
        previousOverlay: varData_399
      };
    }, {
      previousDraggable: null,
      previousDroppable: null,
      previousOverlay: null
    });
  };
  varData_390(() => varData_380());
  if (varData_332.onDragStart) {
    varData_388(varData_332.onDragStart);
  }
  if (varData_332.onDragMove) {
    varData_390(varData_332.onDragMove);
  }
  if (varData_332.onDragOver) {
    varData_393(varData_332.onDragOver);
  }
  if (varData_332.onDragEnd) {
    varData_396(varData_332.onDragEnd);
  }
  const itemList = [_0x12a44a, {
    addTransformer: varData_333,
    removeTransformer: varData_334,
    addDraggable: varData_335,
    removeDraggable: varData_343,
    addDroppable: varData_346,
    removeDroppable: varData_349,
    addSensor: varData_352,
    removeSensor: varData_353,
    setOverlay: varData_355,
    clearOverlay: varData_358,
    recomputeLayouts: varData_369,
    detectCollisions: varData_380,
    draggableActivators: varData_363,
    sensorStart: varData_359,
    sensorMove: varData_360,
    sensorEnd: varData_362,
    dragStart: varData_384,
    dragEnd: varData_386,
    onDragStart: varData_388,
    onDragMove: varData_390,
    onDragOver: varData_393,
    onDragEnd: varData_396
  }];
  return S(Re.Provider, {
    value: itemList,
    get children() {
      return varData_332.children;
    }
  });
};
var U1 = () => Le(Re) || null;
var J2 = (_0xded90 = "pointer-sensor") => {
  const [_0x4213fb, {
    addSensor: _0x106711,
    removeSensor: _0x354635,
    sensorStart: _0x4bd2d6,
    sensorMove: _0x2b40cb,
    sensorEnd: _0x4181e1,
    dragStart: _0x4e6819,
    dragEnd: _0x57a8ab
  }] = U1();
  const numericVal = 250;
  const numericVal_1 = 10;
  w1(() => {
    _0x106711({
      id: _0xded90,
      activators: {
        pointerdown: varData_404
      }
    });
  });
  _1(() => {
    _0x354635(_0xded90);
  });
  const varData_400 = () => _0x4213fb.active.sensorId === _0xded90;
  const varData_401 = {
    x: 0,
    y: 0
  };
  let varData_402 = null;
  let varData_403 = null;
  const varData_404 = (param_1, param_2) => {
    if (param_1.button === 0) {
      document.addEventListener("pointermove", varData_407);
      document.addEventListener("pointerup", varData_410);
      varData_403 = param_2;
      varData_401.x = param_1.clientX;
      varData_401.y = param_1.clientY;
      varData_402 = window.setTimeout(varData_406, numericVal);
    }
  };
  const varData_405 = () => {
    if (varData_402) {
      clearTimeout(varData_402);
      varData_402 = null;
    }
    document.removeEventListener("pointermove", varData_407);
    document.removeEventListener("pointerup", varData_410);
    document.removeEventListener("selectionchange", varData_411);
  };
  const varData_406 = () => {
    if (_0x4213fb.active.sensor) {
      if (!varData_400()) {
        varData_405();
      }
    } else {
      _0x4bd2d6(_0xded90, varData_401);
      _0x4e6819(varData_403);
      varData_411();
      document.addEventListener("selectionchange", varData_411);
    }
  };
  const varData_407 = param_1 => {
    const varData_408 = {
      x: param_1.clientX,
      y: param_1.clientY
    };
    if (!_0x4213fb.active.sensor) {
      const varData_409 = {
        x: varData_408.x - varData_401.x,
        y: varData_408.y - varData_401.y
      };
      if (Math.sqrt(varData_409.x ** 2 + varData_409.y ** 2) > numericVal_1) {
        varData_406();
      }
    }
    if (varData_400()) {
      param_1.preventDefault();
      _0x2b40cb(varData_408);
    }
  };
  const varData_410 = param_1 => {
    varData_405();
    if (varData_400()) {
      param_1.preventDefault();
      _0x57a8ab();
      _0x4181e1();
    }
  };
  const varData_411 = () => {
    window.getSelection()?.removeAllRanges();
  };
};
var e5 = param_1 => {
  J2();
  return F(() => param_1.children);
};
var K1 = param_1 => ({
  transform: "translate3d(" + param_1.x + "px, " + param_1.y + "px, 0)"
});
var t5 = (param_1, _0x5d5246 = {}) => {
  const [_0x594c76, {
    addDraggable: _0x37e04c,
    removeDraggable: _0x33b01e,
    draggableActivators: _0x55963d
  }] = U1();
  const [_0x5efb10, _0x19a5b7] = c1(null);
  w1(() => {
    const varData_412 = _0x5efb10();
    if (varData_412) {
      _0x37e04c({
        id: param_1,
        node: varData_412,
        layout: j1(varData_412),
        data: _0x5d5246
      });
    }
  });
  _1(() => _0x33b01e(param_1));
  const varData_413 = () => _0x594c76.active.draggableId === param_1;
  const varData_414 = () => _0x594c76.draggables[param_1]?.transform || C1();
  return Object.defineProperties((param_1_1, param_2) => {
    const varData_415 = param_2 ? param_2() : {};
    v1(() => {
      const varData_416 = _0x5efb10();
      const varData_417 = _0x55963d(param_1);
      if (varData_416) {
        for (const varData_418 in varData_417) {
          varData_416.addEventListener(varData_418, varData_417[varData_418]);
        }
      }
      _1(() => {
        if (varData_416) {
          for (const varData_419 in varData_417) {
            varData_416.removeEventListener(varData_419, varData_417[varData_419]);
          }
        }
      });
    });
    _0x19a5b7(param_1_1);
    if (!varData_415.skipTransform) {
      v1(() => {
        const varData_420 = varData_414();
        if (He(varData_420, C1())) {
          param_1_1.style.removeProperty("transform");
        } else {
          const varData_421 = K1(varData_414());
          param_1_1.style.setProperty("transform", varData_421.transform ?? null);
        }
      });
    }
  }, {
    ref: {
      enumerable: true,
      value: _0x19a5b7
    },
    isActiveDraggable: {
      enumerable: true,
      get: varData_413
    },
    dragActivators: {
      enumerable: true,
      get: () => _0x55963d(param_1, true)
    },
    transform: {
      enumerable: true,
      get: varData_414
    }
  });
};
var n5 = (param_1, _0x265f31 = {}) => {
  const [_0x294b03, {
    addDroppable: _0x5e34b8,
    removeDroppable: _0x3b4afb
  }] = U1();
  const [_0x46ae72, _0xe18b31] = c1(null);
  w1(() => {
    const varData_422 = _0x46ae72();
    if (varData_422) {
      _0x5e34b8({
        id: param_1,
        node: varData_422,
        layout: j1(varData_422),
        data: _0x265f31
      });
    }
  });
  _1(() => _0x3b4afb(param_1));
  const varData_423 = () => _0x294b03.active.droppableId === param_1;
  const varData_424 = () => _0x294b03.droppables[param_1]?.transform || C1();
  return Object.defineProperties((param_1_1, param_2) => {
    const varData_425 = param_2 ? param_2() : {};
    _0xe18b31(param_1_1);
    if (!varData_425.skipTransform) {
      v1(() => {
        const varData_426 = varData_424();
        if (He(varData_426, C1())) {
          param_1_1.style.removeProperty("transform");
        } else {
          const varData_427 = K1(varData_424());
          param_1_1.style.setProperty("transform", varData_427.transform ?? null);
        }
      });
    }
  }, {
    ref: {
      enumerable: true,
      value: _0xe18b31
    },
    isActiveDroppable: {
      enumerable: true,
      get: varData_423
    },
    transform: {
      enumerable: true,
      get: varData_424
    }
  });
};
const i5 = A("<div><div>");
const r5 = A("<div><div><div>Healing items you have</div><div>Drag and drop items onto the patient to use them.</div></div><div>");
const s5 = A("<div><div><div><div></div><div></div></div><div>");
function o5({
  item: _0x81b9fc
}) {
  const varData_428 = t5(_0x81b9fc.id);
  return (() => {
    const varData_429 = i5();
    const varData_430 = varData_429.firstChild;
    const varData_431 = varData_428.ref;
    if (typeof varData_431 == "function") {
      ee(varData_431, varData_429);
    } else {
      varData_428.ref = varData_429;
    }
    ht(varData_429, De({
      get class() {
        return X.box;
      }
    }, () => varData_428.dragActivators, {
      get style() {
        return {
          position: varData_428.isActiveDraggable ? "absolute" : "relative",
          cursor: "grab",
          "margin-left": varData_428.isActiveDraggable ? "-3.25vh" : 0,
          "pointer-events": varData_428.isActiveDraggable ? "none" : "all",
          ...K1(varData_428.transform)
        };
      }
    }), false, true);
    P(param_1 => {
      const varData_432 = X.image;
      const varData_433 = "url(" + _0x81b9fc.item.image + ")";
      if (varData_432 !== param_1._v$) {
        u(varData_430, param_1._v$ = varData_432);
      }
      if (varData_433 !== param_1._v$2) {
        if ((param_1._v$2 = varData_433) != null) {
          varData_430.style.setProperty("background-image", varData_433);
        } else {
          varData_430.style.removeProperty("background-image");
        }
      }
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return varData_429;
  })();
}
function l5() {
  const {
    inspectionState: _0x38c23a,
    items: _0xc49c6b,
    setItems: _0x56ae87
  } = G();
  w1(async () => {
    const varData_434 = await _0x4ca1ca.execute("wounds:inspection:getItems");
    _0x56ae87(varData_434);
  });
  _1(() => {
    _0x56ae87([]);
  });
  return S(l1, {
    get when() {
      return _0x38c23a.edit && _0xc49c6b.length > 0;
    },
    get children() {
      const varData_435 = r5();
      const varData_436 = varData_435.firstChild;
      const varData_437 = varData_436.firstChild;
      const varData_438 = varData_437.nextSibling;
      const varData_439 = varData_436.nextSibling;
      b(varData_439, S(g1, {
        each: _0xc49c6b,
        children: param_1 => (() => {
          const varData_440 = s5();
          const varData_441 = varData_440.firstChild;
          const varData_442 = varData_441.firstChild;
          const varData_443 = varData_442.firstChild;
          const varData_444 = varData_443.nextSibling;
          const varData_445 = varData_442.nextSibling;
          b(varData_440, S(o5, {
            item: param_1
          }), varData_441);
          b(varData_443, () => param_1.item.name);
          b(varData_444, () => param_1.item.description);
          b(varData_445, () => param_1.quantity);
          P(param_1_1 => {
            const varData_446 = X.item;
            const varData_447 = X.data;
            const varData_448 = X.text;
            const varData_449 = X.title;
            const varData_450 = X.description;
            const varData_451 = X.amount;
            if (varData_446 !== param_1_1._v$8) {
              u(varData_440, param_1_1._v$8 = varData_446);
            }
            if (varData_447 !== param_1_1._v$9) {
              u(varData_441, param_1_1._v$9 = varData_447);
            }
            if (varData_448 !== param_1_1._v$10) {
              u(varData_442, param_1_1._v$10 = varData_448);
            }
            if (varData_449 !== param_1_1._v$11) {
              u(varData_443, param_1_1._v$11 = varData_449);
            }
            if (varData_450 !== param_1_1._v$12) {
              u(varData_444, param_1_1._v$12 = varData_450);
            }
            if (varData_451 !== param_1_1._v$13) {
              u(varData_445, param_1_1._v$13 = varData_451);
            }
            return param_1_1;
          }, {
            _v$8: undefined,
            _v$9: undefined,
            _v$10: undefined,
            _v$11: undefined,
            _v$12: undefined,
            _v$13: undefined
          });
          return varData_440;
        })()
      }));
      P(param_1 => {
        const varData_452 = X.items;
        const varData_453 = X.text;
        const varData_454 = X.title;
        const varData_455 = X.description;
        const varData_456 = X.itemsList;
        if (varData_452 !== param_1._v$3) {
          u(varData_435, param_1._v$3 = varData_452);
        }
        if (varData_453 !== param_1._v$4) {
          u(varData_436, param_1._v$4 = varData_453);
        }
        if (varData_454 !== param_1._v$5) {
          u(varData_437, param_1._v$5 = varData_454);
        }
        if (varData_455 !== param_1._v$6) {
          u(varData_438, param_1._v$6 = varData_455);
        }
        if (varData_456 !== param_1._v$7) {
          u(varData_439, param_1._v$7 = varData_456);
        }
        return param_1;
      }, {
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined,
        _v$6: undefined,
        _v$7: undefined
      });
      return varData_435;
    }
  });
}
const a5 = "_inspection_8y2ze_1";
const d5 = "_fade_8y2ze_1";
const c5 = "_main_8y2ze_14";
const u5 = "_slideIn_8y2ze_1";
const f5 = "_list_8y2ze_24";
const v5 = "_lines_8y2ze_33";
const M1 = {
  inspection: a5,
  fade: d5,
  main: c5,
  slideIn: u5,
  list: f5,
  lines: v5
};
const C5 = "_body_rp9my_1";
const _5 = "_status_rp9my_7";
const g5 = "_fade_rp9my_1";
const h5 = "_button_rp9my_11";
const $5 = "_title_rp9my_27";
const m5 = "_state_rp9my_35";
const y5 = "_info_rp9my_44";
const b5 = "_item_rp9my_64";
const w5 = "_result_rp9my_76";
const J = {
  body: C5,
  status: _5,
  fade: g5,
  button: h5,
  title: $5,
  state: m5,
  info: y5,
  item: b5,
  result: w5
};
const x5 = A("<div>Information");
const $e = A("<div>");
const p5 = A("<div class=\"flex flex-row items-start justify-end gap-2\"><div><svg width=\"0.74vh\" height=\"0.9259vh\" viewBox=\"0 0 8 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L6 5L1 9\" stroke=\"black\" stroke-opacity=\"0.44\" stroke-width=\"1.5\"></div><div class=\"flex flex-col items-start justify-end gap-2\"><div class=\"flex flex-col items-start justify-start\"><div></div><div>% Health</div></div><svg width=\"11.75vh\" height=\"6.11vh\" viewBox=\"0 0 127 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 2H62L125 65\" stroke=\"white\" stroke-opacity=\"0.35\"></path><rect width=\"5\" height=\"5\" fill=\"#00F8B9\"></rect><rect x=\"122\" y=\"61\" width=\"5\" height=\"5\" fill=\"#00F8B9\">");
const L5 = A("<div class=\"flex flex-row items-start justify-end gap-2\"><div class=\"flex flex-col items-end justify-end gap-2\"><div class=\"flex flex-col items-end justify-start\"><div></div><div>% Health</div></div><svg width=\"11.75vh\" height=\"6.11vh\" viewBox=\"0 0 127 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M124 2H65L2 65\" stroke=\"white\" stroke-opacity=\"0.35\"></path><rect width=\"5\" height=\"5\" transform=\"matrix(-1 0 0 1 127 0)\" fill=\"#00F8B9\"></rect><rect width=\"5\" height=\"5\" transform=\"matrix(-1 0 0 1 5 61)\" fill=\"#00F8B9\"></div><div><svg width=\"0.74vh\" height=\"0.9259vh\" viewBox=\"0 0 8 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L6 5L1 9\" stroke=\"black\" stroke-opacity=\"0.44\" stroke-width=\"1.5\">");
const S5 = A("<div><div>");
function A5() {
  const {
    inspectionState: _0x30c48a,
    items: _0x11e717,
    setItems: _0x5ea4a5
  } = G();
  const [_0x273a33, _0x50ae67] = a1([]);
  const [_0x241417, _0x1de43a] = a1({
    show: false,
    id: "",
    offset: {
      x: 0,
      y: 0,
      isLeft: false
    }
  });
  _0x4ca1ca.register("wounds:inspection:offsets", async param_1 => {
    _0x50ae67(param_1);
  });
  const varData_457 = (param_1, param_2) => {
    const varData_458 = _0x273a33.find(param_1_1 => param_1_1.id === param_2);
    if (varData_458) {
      _0x1de43a({
        show: true,
        id: param_2,
        offset: {
          x: param_1.clientX,
          y: param_1.clientY,
          isLeft: varData_458.isLeft
        }
      });
    }
  };
  const varData_459 = (param_1, param_2) => {
    _0x1de43a({
      show: false,
      id: param_2,
      offset: {
        x: param_1.clientX,
        y: param_1.clientY,
        isLeft: false
      }
    });
  };
  const varData_460 = param_1 => param_1.charAt(0).toUpperCase() + param_1.slice(1);
  const varData_461 = U1();
  if (!varData_461) {
    return null;
  }
  const [, {
    onDragEnd: _0x49c83c
  }] = varData_461;
  _0x49c83c(async param_1 => {
    const varData_462 = param_1.draggable;
    const varData_463 = param_1.droppable;
    if (!varData_463) {
      return;
    }
    await _0x4ca1ca.execute("wounds:inspection:dragEnd", varData_462.id, varData_463.id);
    const varData_464 = await _0x4ca1ca.execute("wounds:inspection:getItems");
    if (varData_464) {
      _0x5ea4a5(varData_464);
      await _0x4ca1ca.execute("wounds:inspection:refreshData");
    }
  });
  return (() => {
    const varData_465 = $e();
    b(varData_465, S(g1, {
      each: _0x273a33,
      children: param_1 => {
        const varData_466 = n5(param_1.id);
        return (() => {
          const varData_467 = $e();
          varData_467.style.setProperty("position", "fixed");
          varData_467.style.setProperty("margin-top", "-13.5vh");
          b(varData_467, S(it, {
            get children() {
              return [S(ce, {
                get when() {
                  return !param_1.isLeft;
                },
                get children() {
                  const varData_468 = p5();
                  const varData_469 = varData_468.firstChild;
                  const varData_470 = varData_469.firstChild;
                  const varData_471 = varData_469.nextSibling;
                  const varData_472 = varData_471.firstChild;
                  const varData_473 = varData_472.firstChild;
                  const varData_474 = varData_473.nextSibling;
                  const varData_475 = varData_474.firstChild;
                  const varData_476 = varData_466.ref;
                  if (typeof varData_476 == "function") {
                    ee(varData_476, varData_468);
                  } else {
                    varData_466.ref = varData_468;
                  }
                  varData_469.addEventListener("mouseleave", param_1_1 => varData_459(param_1_1, param_1.id));
                  varData_469.addEventListener("mouseenter", param_1_1 => varData_457(param_1_1, param_1.id));
                  varData_470.style.setProperty("transform", "rotate(180deg)");
                  b(varData_473, () => _0x30c48a.wounds[param_1.id].label);
                  b(varData_474, () => 100 - Math.round(_0x30c48a.wounds[param_1.id].damage / _0x30c48a.wounds[param_1.id].maxDamage * 100), varData_475);
                  P(param_1_1 => {
                    const varData_477 = K1(varData_466.transform);
                    const varData_478 = J.button;
                    const varData_479 = J.title;
                    const varData_480 = J.state;
                    param_1_1._v$5 = f1(varData_468, varData_477, param_1_1._v$5);
                    if (varData_478 !== param_1_1._v$6) {
                      u(varData_469, param_1_1._v$6 = varData_478);
                    }
                    if (varData_479 !== param_1_1._v$7) {
                      u(varData_473, param_1_1._v$7 = varData_479);
                    }
                    if (varData_480 !== param_1_1._v$8) {
                      u(varData_474, param_1_1._v$8 = varData_480);
                    }
                    return param_1_1;
                  }, {
                    _v$5: undefined,
                    _v$6: undefined,
                    _v$7: undefined,
                    _v$8: undefined
                  });
                  return varData_468;
                }
              }), S(ce, {
                get when() {
                  return param_1.isLeft;
                },
                get children() {
                  const varData_481 = L5();
                  const varData_482 = varData_481.firstChild;
                  const varData_483 = varData_482.firstChild;
                  const varData_484 = varData_483.firstChild;
                  const varData_485 = varData_484.nextSibling;
                  const varData_486 = varData_485.firstChild;
                  const varData_487 = varData_482.nextSibling;
                  const varData_488 = varData_466.ref;
                  if (typeof varData_488 == "function") {
                    ee(varData_488, varData_481);
                  } else {
                    varData_466.ref = varData_481;
                  }
                  b(varData_484, () => _0x30c48a.wounds[param_1.id].label);
                  b(varData_485, () => 100 - Math.round(_0x30c48a.wounds[param_1.id].damage / _0x30c48a.wounds[param_1.id].maxDamage * 100), varData_486);
                  varData_487.addEventListener("mouseleave", param_1_1 => varData_459(param_1_1, param_1.id));
                  varData_487.addEventListener("mouseenter", param_1_1 => varData_457(param_1_1, param_1.id));
                  P(param_1_1 => {
                    const varData_489 = J.title;
                    const varData_490 = J.state;
                    const varData_491 = J.button;
                    if (varData_489 !== param_1_1._v$9) {
                      u(varData_484, param_1_1._v$9 = varData_489);
                    }
                    if (varData_490 !== param_1_1._v$10) {
                      u(varData_485, param_1_1._v$10 = varData_490);
                    }
                    if (varData_491 !== param_1_1._v$11) {
                      u(varData_487, param_1_1._v$11 = varData_491);
                    }
                    return param_1_1;
                  }, {
                    _v$9: undefined,
                    _v$10: undefined,
                    _v$11: undefined
                  });
                  return varData_481;
                }
              })];
            }
          }));
          P(param_1_1 => {
            const varData_492 = J.status + " rounded-md hover:bg-gray-200/20";
            const varData_493 = param_1.x + "%";
            const varData_494 = param_1.y + "%";
            const varData_495 = param_1.isLeft ? "translateX(0)" : "translateX(-14.75vh)";
            if (varData_492 !== param_1_1._v$12) {
              u(varData_467, param_1_1._v$12 = varData_492);
            }
            if (varData_493 !== param_1_1._v$13) {
              if ((param_1_1._v$13 = varData_493) != null) {
                varData_467.style.setProperty("left", varData_493);
              } else {
                varData_467.style.removeProperty("left");
              }
            }
            if (varData_494 !== param_1_1._v$14) {
              if ((param_1_1._v$14 = varData_494) != null) {
                varData_467.style.setProperty("top", varData_494);
              } else {
                varData_467.style.removeProperty("top");
              }
            }
            if (varData_495 !== param_1_1._v$15) {
              if ((param_1_1._v$15 = varData_495) != null) {
                varData_467.style.setProperty("transform", varData_495);
              } else {
                varData_467.style.removeProperty("transform");
              }
            }
            return param_1_1;
          }, {
            _v$12: undefined,
            _v$13: undefined,
            _v$14: undefined,
            _v$15: undefined
          });
          return varData_467;
        })();
      }
    }), null);
    b(varData_465, S(l1, {
      get when() {
        return _0x241417.show;
      },
      get children() {
        const varData_496 = x5();
        varData_496.firstChild;
        b(varData_496, S(g1, {
          get each() {
            return Object.entries(_0x30c48a.wounds[_0x241417.id]);
          },
          children: ([_0x4fb396, _0xd67d86]) => {
            if (_0x4fb396.includes("maxDamage") || _0x4fb396.includes("damage") || _0x4fb396.includes("label") || _0x4fb396.includes("injuryList")) {
              return;
            }
            const varData_497 = varData_460(_0x4fb396);
            if (_0x4fb396.includes("bleeding") || _0x4fb396.includes("broken")) {
              _0xd67d86 = _0xd67d86 ? "Yes" : "No";
            }
            if (_0x4fb396.includes("severity")) {
              _0xd67d86 = _0xd67d86;
              _0xd67d86 = varData_460(_0xd67d86.name);
            }
            return (() => {
              const varData_498 = S5();
              const varData_499 = varData_498.firstChild;
              b(varData_498, varData_497, varData_499);
              b(varData_499, () => _0xd67d86.toString());
              P(param_1 => {
                const varData_500 = J.item;
                const varData_501 = J.result;
                if (varData_500 !== param_1._v$16) {
                  u(varData_498, param_1._v$16 = varData_500);
                }
                if (varData_501 !== param_1._v$17) {
                  u(varData_499, param_1._v$17 = varData_501);
                }
                return param_1;
              }, {
                _v$16: undefined,
                _v$17: undefined
              });
              return varData_498;
            })();
          }
        }), null);
        P(param_1 => {
          const varData_502 = J.info;
          const varData_503 = _0x241417.offset.x + "px";
          const varData_504 = _0x241417.offset.y + "px";
          const varData_505 = _0x241417.offset.isLeft ? "1.6vh" : "-24.33vh";
          if (varData_502 !== param_1._v$) {
            u(varData_496, param_1._v$ = varData_502);
          }
          if (varData_503 !== param_1._v$2) {
            if ((param_1._v$2 = varData_503) != null) {
              varData_496.style.setProperty("left", varData_503);
            } else {
              varData_496.style.removeProperty("left");
            }
          }
          if (varData_504 !== param_1._v$3) {
            if ((param_1._v$3 = varData_504) != null) {
              varData_496.style.setProperty("top", varData_504);
            } else {
              varData_496.style.removeProperty("top");
            }
          }
          if (varData_505 !== param_1._v$4) {
            if ((param_1._v$4 = varData_505) != null) {
              varData_496.style.setProperty("margin-left", varData_505);
            } else {
              varData_496.style.removeProperty("margin-left");
            }
          }
          return param_1;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined
        });
        return varData_496;
      }
    }), null);
    P(() => u(varData_465, J.body));
    return varData_465;
  })();
}
const j5 = A("<div><div><div><div class=\"flex h-full w-full flex-col items-start justify-start gap-[2.4vh] overflow-auto\"></div></div><div>");
function k5() {
  const {
    inspectionState: _0x3e35b9,
    setInspectionState: _0x5a30f3
  } = G();
  _0x4ca1ca.register("wounds:inspection:data", async param_1 => {
    _0x5a30f3(param_1);
  });
  const varData_506 = param_1 => {
    if (param_1.key === "Escape") {
      _0x5a30f3({
        show: false
      });
      _0x4ca1ca.execute("wounds:inspection:close");
    }
  };
  w1(async () => {
    document.addEventListener("keydown", varData_506);
  });
  _1(() => {
    document.removeEventListener("keydown", varData_506);
  });
  return S(l1, {
    get when() {
      return _0x3e35b9.show;
    },
    get children() {
      const varData_507 = j5();
      const varData_508 = varData_507.firstChild;
      const varData_509 = varData_508.firstChild;
      const varData_510 = varData_509.firstChild;
      const varData_511 = varData_509.nextSibling;
      b(varData_507, S(A5, {}), varData_508);
      b(varData_509, S(L2, {}), varData_510);
      b(varData_510, S(l5, {}), null);
      b(varData_510, S(N2, {}), null);
      b(varData_510, S(m2, {}), null);
      P(param_1 => {
        const varData_512 = M1.inspection;
        const varData_513 = M1.main;
        const varData_514 = M1.list;
        const varData_515 = M1.lines;
        if (varData_512 !== param_1._v$) {
          u(varData_507, param_1._v$ = varData_512);
        }
        if (varData_513 !== param_1._v$2) {
          u(varData_508, param_1._v$2 = varData_513);
        }
        if (varData_514 !== param_1._v$3) {
          u(varData_509, param_1._v$3 = varData_514);
        }
        if (varData_515 !== param_1._v$4) {
          u(varData_511, param_1._v$4 = varData_515);
        }
        return param_1;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined,
        _v$4: undefined
      });
      return varData_507;
    }
  });
}
const P5 = "_generalStatus_1gy4k_1";
const O5 = "_text_1gy4k_14";
const M5 = "_title_1gy4k_22";
const D5 = "_description_1gy4k_30";
const E5 = "_itemsList_1gy4k_38";
const I5 = "_item_1gy4k_38";
const T5 = "_box_1gy4k_56";
const B5 = "_image_1gy4k_66";
const N5 = "_data_1gy4k_73";
const Z5 = "_status_1gy4k_102";
const e1 = {
  generalStatus: P5,
  text: O5,
  title: M5,
  description: D5,
  itemsList: E5,
  item: I5,
  box: T5,
  image: B5,
  data: N5,
  status: Z5
};
const F5 = A("<svg width=\"1.38vh\" height=\"1.75vh\" viewBox=\"0 0 15 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.36961 0.077376C5.19663 0.428999 3.34901 1.86445 2.36482 3.96557C1.86772 5.0269 1.66704 6.01382 1.66676 7.39878L1.66659 8.16856L0.833293 9.95258C0.131834 11.4543 0 11.7619 0 11.8968C0 12.0852 0.100551 12.2663 0.275056 12.392C0.386301 12.4722 0.424146 12.4764 1.02832 12.4764H1.66443L1.67419 14.0635L1.68395 15.6507L1.78703 15.8682C1.96327 16.2401 2.29926 16.4813 2.68439 16.5122C2.83945 16.5247 3.16467 16.482 3.85398 16.3587C4.37913 16.2648 4.85178 16.1785 4.90428 16.167L4.99976 16.146V17.3574C4.99976 18.6977 5 18.6993 5.22412 18.8821C5.29027 18.936 5.40491 18.9888 5.4789 18.9995C5.56588 19.0119 6.81405 18.8048 9.0088 18.4138C12.6286 17.7687 12.518 17.7947 12.6872 17.5507C12.7583 17.4481 12.7602 17.4025 12.7795 15.3046C12.8014 12.9152 12.7969 12.9629 13.0555 12.3836C13.1284 12.2202 13.335 11.8777 13.5145 11.6225C13.9234 11.0412 14.0465 10.8349 14.2835 10.3335C15.5827 7.58564 15.084 4.28374 13.0394 2.0976C11.5442 0.498722 9.42715 -0.255609 7.36961 0.077376Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.36961 0.077376C5.19663 0.428999 3.34901 1.86445 2.36482 3.96557C1.86772 5.0269 1.66704 6.01382 1.66676 7.39878L1.66659 8.16856L0.833293 9.95258C0.131834 11.4543 0 11.7619 0 11.8968C0 12.0852 0.100551 12.2663 0.275056 12.392C0.386301 12.4722 0.424146 12.4764 1.02832 12.4764H1.66443L1.67419 14.0635L1.68395 15.6507L1.78703 15.8682C1.96327 16.2401 2.29926 16.4813 2.68439 16.5122C2.83945 16.5247 3.16467 16.482 3.85398 16.3587C4.37913 16.2648 4.85178 16.1785 4.90428 16.167L4.99976 16.146V17.3574C4.99976 18.6977 5 18.6993 5.22412 18.8821C5.29027 18.936 5.40491 18.9888 5.4789 18.9995C5.56588 19.0119 6.81405 18.8048 9.0088 18.4138C12.6286 17.7687 12.518 17.7947 12.6872 17.5507C12.7583 17.4481 12.7602 17.4025 12.7795 15.3046C12.8014 12.9152 12.7969 12.9629 13.0555 12.3836C13.1284 12.2202 13.335 11.8777 13.5145 11.6225C13.9234 11.0412 14.0465 10.8349 14.2835 10.3335C15.5827 7.58564 15.084 4.28374 13.0394 2.0976C11.5442 0.498722 9.42715 -0.255609 7.36961 0.077376Z\" fill=\"#00F8B9\">");
const H5 = A("<svg width=\"1.57vh\" height=\"1.94vh\" viewBox=\"0 0 17 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.92981 0.0602049C7.31459 0.226235 6.72585 0.695977 6.46722 1.22713C6.00778 2.17064 6.16666 3.19361 6.88433 3.91287C7.79124 4.82179 9.20855 4.822 10.1136 3.91336C10.56 3.46524 10.7874 2.91817 10.7874 2.29236C10.7874 1.23801 10.0795 0.32724 9.05085 0.0582356C8.7509 -0.0202052 8.22424 -0.0192616 7.92981 0.0602049ZM0.696015 5.31685C0.449314 5.4046 0.153535 5.70839 0.0672291 5.96263C-0.0788623 6.39307 0.0159847 6.82601 0.324064 7.13534C0.655354 7.4679 0.600923 7.46154 3.12232 7.46182C4.60089 7.46195 5.38602 7.47696 5.49541 7.50712C5.70779 7.5657 5.97329 7.84221 6.06715 8.1026C6.16372 8.37033 6.19391 9.20336 6.12976 9.82818C6.10254 10.0933 5.70501 12.4504 5.24638 15.0662C4.78776 17.682 4.4125 19.8624 4.4125 19.9114C4.4125 20.113 4.54175 20.4217 4.70333 20.606C4.92576 20.8597 5.14259 20.9664 5.4854 20.9912C5.73394 21.0091 5.78743 20.9982 6.02224 20.8822C6.27752 20.756 6.41806 20.6167 6.55054 20.3584C6.58736 20.2866 6.84252 18.9329 7.12747 17.2976C7.71425 13.9303 7.76198 13.7471 8.16449 13.3198C8.53657 12.9248 8.93104 13.1845 9.23724 14.0261C9.33637 14.2986 9.47499 15.0125 9.8744 17.3077C10.432 20.5118 10.4293 20.5017 10.7511 20.7575C10.9781 20.938 11.1626 21 11.4728 21C12.0487 21 12.5053 20.5938 12.5713 20.0229C12.5878 19.8802 12.3812 18.622 11.7684 15.1333C11.3146 12.5498 10.9159 10.2052 10.8824 9.92311C10.8073 9.28959 10.8285 8.43893 10.9272 8.12689C11.0144 7.85103 11.2756 7.56972 11.5025 7.50712C11.6119 7.47696 12.3971 7.46195 13.8756 7.46182C16.397 7.46154 16.3426 7.4679 16.6739 7.13534C17.1935 6.61366 17.0767 5.75881 16.4339 5.37949L16.2428 5.26671L8.56027 5.25949C1.66046 5.25297 0.859188 5.25884 0.696015 5.31685Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.92981 0.0602049C7.31459 0.226235 6.72585 0.695977 6.46722 1.22713C6.00778 2.17064 6.16666 3.19361 6.88433 3.91287C7.79124 4.82179 9.20855 4.822 10.1136 3.91336C10.56 3.46524 10.7874 2.91817 10.7874 2.29236C10.7874 1.23801 10.0795 0.32724 9.05085 0.0582356C8.7509 -0.0202052 8.22424 -0.0192616 7.92981 0.0602049ZM0.696015 5.31685C0.449314 5.4046 0.153535 5.70839 0.0672291 5.96263C-0.0788623 6.39307 0.0159847 6.82601 0.324064 7.13534C0.655354 7.4679 0.600923 7.46154 3.12232 7.46182C4.60089 7.46195 5.38602 7.47696 5.49541 7.50712C5.70779 7.5657 5.97329 7.84221 6.06715 8.1026C6.16372 8.37033 6.19391 9.20336 6.12976 9.82818C6.10254 10.0933 5.70501 12.4504 5.24638 15.0662C4.78776 17.682 4.4125 19.8624 4.4125 19.9114C4.4125 20.113 4.54175 20.4217 4.70333 20.606C4.92576 20.8597 5.14259 20.9664 5.4854 20.9912C5.73394 21.0091 5.78743 20.9982 6.02224 20.8822C6.27752 20.756 6.41806 20.6167 6.55054 20.3584C6.58736 20.2866 6.84252 18.9329 7.12747 17.2976C7.71425 13.9303 7.76198 13.7471 8.16449 13.3198C8.53657 12.9248 8.93104 13.1845 9.23724 14.0261C9.33637 14.2986 9.47499 15.0125 9.8744 17.3077C10.432 20.5118 10.4293 20.5017 10.7511 20.7575C10.9781 20.938 11.1626 21 11.4728 21C12.0487 21 12.5053 20.5938 12.5713 20.0229C12.5878 19.8802 12.3812 18.622 11.7684 15.1333C11.3146 12.5498 10.9159 10.2052 10.8824 9.92311C10.8073 9.28959 10.8285 8.43893 10.9272 8.12689C11.0144 7.85103 11.2756 7.56972 11.5025 7.50712C11.6119 7.47696 12.3971 7.46195 13.8756 7.46182C16.397 7.46154 16.3426 7.4679 16.6739 7.13534C17.1935 6.61366 17.0767 5.75881 16.4339 5.37949L16.2428 5.26671L8.56027 5.25949C1.66046 5.25297 0.859188 5.25884 0.696015 5.31685Z\" fill=\"#00F8B9\">");
const R5 = A("<svg width=\"1.48vh\" height=\"1.57vh\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.16303 0.0163631C5.8952 0.0815266 5.80494 0.151968 4.62478 1.21676C3.82203 1.94105 3.67673 2.09232 3.51813 2.36919C3.35036 2.66202 1.40768 7.13404 0.859509 8.48928C0.0463659 10.4996 -0.108528 11.5687 0.0619776 13.9946C0.131787 14.9884 0.171132 15.133 0.444774 15.4018C0.80813 15.7587 2.15114 16.2594 3.52962 16.5517C5.1278 16.8907 6.69214 16.9999 9.95018 17C12.1624 17.0001 12.9879 16.9609 13.4849 16.8323C14.3277 16.614 15.0197 16.124 15.4623 15.4319C16.1237 14.3979 16.1798 12.9699 15.6036 11.8422C15.2933 11.2351 14.6458 10.6533 13.9754 10.3794C13.4929 10.1823 13.2201 10.1308 12.6643 10.1323C12.203 10.1335 12.0969 10.148 11.8017 10.2503C11.373 10.3989 11.0028 10.6214 10.5956 10.9755C10.4182 11.1297 10.2535 11.2559 10.2294 11.2559C10.2054 11.2559 10.0314 11.1872 9.84276 11.1034C9.38177 10.8983 8.78311 10.7501 8.29242 10.7195C7.28887 10.6569 6.15222 11.0252 5.51059 11.6208C5.14408 11.961 5.01469 12.048 4.95897 11.9916C4.93553 11.9679 4.89977 11.6921 4.87948 11.3787C4.8592 11.0654 4.81813 10.4546 4.78821 10.0215C4.68605 8.54202 4.74357 7.53843 4.98439 6.60107C5.12565 6.05116 5.48858 5.12925 5.63245 4.95487L5.75402 4.80761L6.33724 4.78599L6.92046 4.76432L7.34126 4.56487C7.75885 4.36691 7.96475 4.30252 8.33151 4.25519C8.59577 4.22109 8.76577 4.10396 8.87139 3.88323C8.99814 3.61849 8.99203 3.32413 8.85612 3.14387C8.72382 2.96843 8.72462 2.91965 8.86428 2.64614C9.02124 2.3388 9.02641 1.97472 8.87716 1.74684C8.75626 1.56228 7.07006 0.257992 6.77319 0.119408C6.54171 0.0112982 6.33047 -0.0243694 6.16303 0.0163631Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.16303 0.0163631C5.8952 0.0815266 5.80494 0.151968 4.62478 1.21676C3.82203 1.94105 3.67673 2.09232 3.51813 2.36919C3.35036 2.66202 1.40768 7.13404 0.859509 8.48928C0.0463659 10.4996 -0.108528 11.5687 0.0619776 13.9946C0.131787 14.9884 0.171132 15.133 0.444774 15.4018C0.80813 15.7587 2.15114 16.2594 3.52962 16.5517C5.1278 16.8907 6.69214 16.9999 9.95018 17C12.1624 17.0001 12.9879 16.9609 13.4849 16.8323C14.3277 16.614 15.0197 16.124 15.4623 15.4319C16.1237 14.3979 16.1798 12.9699 15.6036 11.8422C15.2933 11.2351 14.6458 10.6533 13.9754 10.3794C13.4929 10.1823 13.2201 10.1308 12.6643 10.1323C12.203 10.1335 12.0969 10.148 11.8017 10.2503C11.373 10.3989 11.0028 10.6214 10.5956 10.9755C10.4182 11.1297 10.2535 11.2559 10.2294 11.2559C10.2054 11.2559 10.0314 11.1872 9.84276 11.1034C9.38177 10.8983 8.78311 10.7501 8.29242 10.7195C7.28887 10.6569 6.15222 11.0252 5.51059 11.6208C5.14408 11.961 5.01469 12.048 4.95897 11.9916C4.93553 11.9679 4.89977 11.6921 4.87948 11.3787C4.8592 11.0654 4.81813 10.4546 4.78821 10.0215C4.68605 8.54202 4.74357 7.53843 4.98439 6.60107C5.12565 6.05116 5.48858 5.12925 5.63245 4.95487L5.75402 4.80761L6.33724 4.78599L6.92046 4.76432L7.34126 4.56487C7.75885 4.36691 7.96475 4.30252 8.33151 4.25519C8.59577 4.22109 8.76577 4.10396 8.87139 3.88323C8.99814 3.61849 8.99203 3.32413 8.85612 3.14387C8.72382 2.96843 8.72462 2.91965 8.86428 2.64614C9.02124 2.3388 9.02641 1.97472 8.87716 1.74684C8.75626 1.56228 7.07006 0.257992 6.77319 0.119408C6.54171 0.0112982 6.33047 -0.0243694 6.16303 0.0163631Z\" fill=\"#00F8B9\">");
const q5 = A("<svg width=\"1.48vh\" height=\"1.57vh\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.83697 0.0163631C10.1048 0.0815266 10.1951 0.151968 11.3752 1.21676C12.178 1.94105 12.3233 2.09232 12.4819 2.36919C12.6496 2.66202 14.5923 7.13404 15.1405 8.48928C15.9536 10.4996 16.1085 11.5687 15.938 13.9946C15.8682 14.9884 15.8289 15.133 15.5552 15.4018C15.1919 15.7587 13.8489 16.2594 12.4704 16.5517C10.8722 16.8907 9.30786 16.9999 6.04982 17C3.83757 17.0001 3.0121 16.9609 2.51514 16.8323C1.67229 16.614 0.980293 16.124 0.537702 15.4319C-0.123661 14.3979 -0.179836 12.9699 0.396399 11.8422C0.706651 11.2351 1.35417 10.6533 2.02458 10.3794C2.50706 10.1823 2.77995 10.1308 3.33569 10.1323C3.79697 10.1335 3.90309 10.148 4.19832 10.2503C4.62698 10.3989 4.99716 10.6214 5.40444 10.9755C5.58181 11.1297 5.74655 11.2559 5.77062 11.2559C5.79465 11.2559 5.96865 11.1872 6.15724 11.1034C6.61823 10.8983 7.21689 10.7501 7.70758 10.7195C8.71113 10.6569 9.84778 11.0252 10.4894 11.6208C10.8559 11.961 10.9853 12.048 11.041 11.9916C11.0645 11.9679 11.1002 11.6921 11.1205 11.3787C11.1408 11.0654 11.1819 10.4546 11.2118 10.0215C11.314 8.54202 11.2564 7.53843 11.0156 6.60107C10.8744 6.05116 10.5114 5.12925 10.3675 4.95487L10.246 4.80761L9.66276 4.78599L9.07954 4.76432L8.65874 4.56487C8.24115 4.36691 8.03525 4.30252 7.66849 4.25519C7.40423 4.22109 7.23423 4.10396 7.12861 3.88323C7.00186 3.61849 7.00797 3.32413 7.14388 3.14387C7.27618 2.96843 7.27538 2.91965 7.13572 2.64614C6.97876 2.3388 6.97359 1.97472 7.12284 1.74684C7.24374 1.56228 8.92994 0.257992 9.22681 0.119408C9.45829 0.0112982 9.66953 -0.0243694 9.83697 0.0163631Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.83697 0.0163631C10.1048 0.0815266 10.1951 0.151968 11.3752 1.21676C12.178 1.94105 12.3233 2.09232 12.4819 2.36919C12.6496 2.66202 14.5923 7.13404 15.1405 8.48928C15.9536 10.4996 16.1085 11.5687 15.938 13.9946C15.8682 14.9884 15.8289 15.133 15.5552 15.4018C15.1919 15.7587 13.8489 16.2594 12.4704 16.5517C10.8722 16.8907 9.30786 16.9999 6.04982 17C3.83757 17.0001 3.0121 16.9609 2.51514 16.8323C1.67229 16.614 0.980293 16.124 0.537702 15.4319C-0.123661 14.3979 -0.179836 12.9699 0.396399 11.8422C0.706651 11.2351 1.35417 10.6533 2.02458 10.3794C2.50706 10.1823 2.77995 10.1308 3.33569 10.1323C3.79697 10.1335 3.90309 10.148 4.19832 10.2503C4.62698 10.3989 4.99716 10.6214 5.40444 10.9755C5.58181 11.1297 5.74655 11.2559 5.77062 11.2559C5.79465 11.2559 5.96865 11.1872 6.15724 11.1034C6.61823 10.8983 7.21689 10.7501 7.70758 10.7195C8.71113 10.6569 9.84778 11.0252 10.4894 11.6208C10.8559 11.961 10.9853 12.048 11.041 11.9916C11.0645 11.9679 11.1002 11.6921 11.1205 11.3787C11.1408 11.0654 11.1819 10.4546 11.2118 10.0215C11.314 8.54202 11.2564 7.53843 11.0156 6.60107C10.8744 6.05116 10.5114 5.12925 10.3675 4.95487L10.246 4.80761L9.66276 4.78599L9.07954 4.76432L8.65874 4.56487C8.24115 4.36691 8.03525 4.30252 7.66849 4.25519C7.40423 4.22109 7.23423 4.10396 7.12861 3.88323C7.00186 3.61849 7.00797 3.32413 7.14388 3.14387C7.27618 2.96843 7.27538 2.91965 7.13572 2.64614C6.97876 2.3388 6.97359 1.97472 7.12284 1.74684C7.24374 1.56228 8.92994 0.257992 9.22681 0.119408C9.45829 0.0112982 9.66953 -0.0243694 9.83697 0.0163631Z\" fill=\"#00F8B9\">");
const U5 = A("<svg width=\"1.48vh\" height=\"1.57vh\" viewBox=\"0 0 16 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.56707 0.052099C5.59784 0.222548 4.74046 0.672656 4.04957 1.37379C3.32772 2.10625 2.90963 3.02251 2.84737 4.00858C2.83112 4.26588 2.9211 5.99317 3.12189 9.27686C3.28617 11.9639 3.40936 14.2593 3.39565 14.3777C3.35939 14.6906 3.19603 14.9906 2.93793 15.2183C2.66484 15.4591 2.55281 15.5009 1.56974 15.7291C1.13982 15.829 0.725865 15.9357 0.64985 15.9663C0.29903 16.1078 0.0463959 16.4667 0.00767983 16.8788C-0.0122408 17.0909 0.000386623 17.1472 0.120702 17.383C0.261064 17.6581 0.475273 17.8477 0.760122 17.9491C0.856349 17.9833 1.64467 17.9971 3.62857 17.9993C6.24334 18.0023 6.37612 17.9988 6.63175 17.9227C7.44904 17.6791 7.93226 16.9362 7.86017 16.0341C7.82887 15.6421 7.73885 15.4105 7.46871 15.0265C7.07884 14.4724 7.03508 14.2702 7.08151 13.2375C7.12002 12.3806 7.18553 12.1414 7.50005 11.7095C8.37035 10.5147 8.72213 9.43798 8.77772 7.79915C8.79144 7.39557 8.80848 7.06532 8.81565 7.06532C8.8284 7.06532 11.9045 7.69662 13.2495 7.97531C14.2832 8.18947 14.6852 8.15991 15.1938 7.8322C15.5849 7.58021 15.8557 7.19492 15.9532 6.75173C15.985 6.60697 16 5.73583 16 4.03596C16 1.31376 15.9976 1.28232 15.7625 0.865542C15.6094 0.594006 15.2599 0.289256 14.9272 0.137223L14.6456 0.00851168L10.7698 0.00155538C7.56606 -0.00419461 6.83734 0.00457111 6.56707 0.052099Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.56707 0.052099C5.59784 0.222548 4.74046 0.672656 4.04957 1.37379C3.32772 2.10625 2.90963 3.02251 2.84737 4.00858C2.83112 4.26588 2.9211 5.99317 3.12189 9.27686C3.28617 11.9639 3.40936 14.2593 3.39565 14.3777C3.35939 14.6906 3.19603 14.9906 2.93793 15.2183C2.66484 15.4591 2.55281 15.5009 1.56974 15.7291C1.13982 15.829 0.725865 15.9357 0.64985 15.9663C0.29903 16.1078 0.0463959 16.4667 0.00767983 16.8788C-0.0122408 17.0909 0.000386623 17.1472 0.120702 17.383C0.261064 17.6581 0.475273 17.8477 0.760122 17.9491C0.856349 17.9833 1.64467 17.9971 3.62857 17.9993C6.24334 18.0023 6.37612 17.9988 6.63175 17.9227C7.44904 17.6791 7.93226 16.9362 7.86017 16.0341C7.82887 15.6421 7.73885 15.4105 7.46871 15.0265C7.07884 14.4724 7.03508 14.2702 7.08151 13.2375C7.12002 12.3806 7.18553 12.1414 7.50005 11.7095C8.37035 10.5147 8.72213 9.43798 8.77772 7.79915C8.79144 7.39557 8.80848 7.06532 8.81565 7.06532C8.8284 7.06532 11.9045 7.69662 13.2495 7.97531C14.2832 8.18947 14.6852 8.15991 15.1938 7.8322C15.5849 7.58021 15.8557 7.19492 15.9532 6.75173C15.985 6.60697 16 5.73583 16 4.03596C16 1.31376 15.9976 1.28232 15.7625 0.865542C15.6094 0.594006 15.2599 0.289256 14.9272 0.137223L14.6456 0.00851168L10.7698 0.00155538C7.56606 -0.00419461 6.83734 0.00457111 6.56707 0.052099Z\" fill=\"#00F8B9\">");
const K5 = A("<svg width=\"1.48vh\" height=\"1.66vh\" viewBox=\"0 0 16 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.43293 0.052099C10.4022 0.222548 11.2595 0.672656 11.9504 1.37379C12.6723 2.10625 13.0904 3.02251 13.1526 4.00858C13.1689 4.26588 13.0789 5.99317 12.8781 9.27686C12.7138 11.9639 12.5906 14.2593 12.6044 14.3777C12.6406 14.6906 12.804 14.9906 13.0621 15.2183C13.3352 15.4591 13.4472 15.5009 14.4303 15.7291C14.8602 15.829 15.2741 15.9357 15.3502 15.9663C15.701 16.1078 15.9536 16.4667 15.9923 16.8788C16.0122 17.0909 15.9996 17.1472 15.8793 17.383C15.7389 17.6581 15.5247 17.8477 15.2399 17.9491C15.1437 17.9833 14.3553 17.9971 12.3714 17.9993C9.75666 18.0023 9.62388 17.9988 9.36825 17.9227C8.55096 17.6791 8.06774 16.9362 8.13983 16.0341C8.17113 15.6421 8.26115 15.4105 8.53129 15.0265C8.92116 14.4724 8.96492 14.2702 8.91849 13.2375C8.87998 12.3806 8.81447 12.1414 8.49995 11.7095C7.62965 10.5147 7.27787 9.43798 7.22228 7.79915C7.20856 7.39557 7.19152 7.06532 7.18435 7.06532C7.1716 7.06532 4.09553 7.69662 2.75055 7.97531C1.71676 8.18947 1.31485 8.15991 0.806203 7.8322C0.415083 7.58021 0.14432 7.19492 0.0468416 6.75173C0.0150442 6.60697 0 5.73583 0 4.03596C0 1.31376 0.00237465 1.28232 0.237464 0.865542C0.390619 0.594006 0.740148 0.289256 1.07276 0.137223L1.35444 0.00851168L5.23021 0.00155538C8.43394 -0.00419461 9.16266 0.00457111 9.43293 0.052099Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.43293 0.052099C10.4022 0.222548 11.2595 0.672656 11.9504 1.37379C12.6723 2.10625 13.0904 3.02251 13.1526 4.00858C13.1689 4.26588 13.0789 5.99317 12.8781 9.27686C12.7138 11.9639 12.5906 14.2593 12.6044 14.3777C12.6406 14.6906 12.804 14.9906 13.0621 15.2183C13.3352 15.4591 13.4472 15.5009 14.4303 15.7291C14.8602 15.829 15.2741 15.9357 15.3502 15.9663C15.701 16.1078 15.9536 16.4667 15.9923 16.8788C16.0122 17.0909 15.9996 17.1472 15.8793 17.383C15.7389 17.6581 15.5247 17.8477 15.2399 17.9491C15.1437 17.9833 14.3553 17.9971 12.3714 17.9993C9.75666 18.0023 9.62388 17.9988 9.36825 17.9227C8.55096 17.6791 8.06774 16.9362 8.13983 16.0341C8.17113 15.6421 8.26115 15.4105 8.53129 15.0265C8.92116 14.4724 8.96492 14.2702 8.91849 13.2375C8.87998 12.3806 8.81447 12.1414 8.49995 11.7095C7.62965 10.5147 7.27787 9.43798 7.22228 7.79915C7.20856 7.39557 7.19152 7.06532 7.18435 7.06532C7.1716 7.06532 4.09553 7.69662 2.75055 7.97531C1.71676 8.18947 1.31485 8.15991 0.806203 7.8322C0.415083 7.58021 0.14432 7.19492 0.0468416 6.75173C0.0150442 6.60697 0 5.73583 0 4.03596C0 1.31376 0.00237465 1.28232 0.237464 0.865542C0.390619 0.594006 0.740148 0.289256 1.07276 0.137223L1.35444 0.00851168L5.23021 0.00155538C8.43394 -0.00419461 9.16266 0.00457111 9.43293 0.052099Z\" fill=\"#00F8B9\">");
const V5 = A("<div><div><div>General status of Health</div><div>You can see the status of each body part below.</div></div><div>");
const X5 = A("<div><div></div><div><div><div></div></div><div>%");
const Y5 = [{
  name: "Head",
  id: "head",
  image: F5()
}, {
  name: "Body",
  id: "body",
  image: H5()
}, {
  name: "Left Arm",
  id: "leftArm",
  image: R5()
}, {
  name: "Right Arm",
  id: "rightArm",
  image: q5()
}, {
  name: "Left Leg",
  id: "leftLeg",
  image: U5()
}, {
  name: "Right Leg",
  id: "rightLeg",
  image: K5()
}];
function z5() {
  const {
    playerState: _0x3f970c
  } = G();
  return (() => {
    const varData_516 = V5();
    const varData_517 = varData_516.firstChild;
    const varData_518 = varData_517.firstChild;
    const varData_519 = varData_518.nextSibling;
    const varData_520 = varData_517.nextSibling;
    b(varData_520, S(g1, {
      each: Y5,
      children: param_1 => (() => {
        const varData_521 = X5();
        const varData_522 = varData_521.firstChild;
        const varData_523 = varData_522.nextSibling;
        const varData_524 = varData_523.firstChild;
        const varData_525 = varData_524.firstChild;
        const varData_526 = varData_524.nextSibling;
        const varData_527 = varData_526.firstChild;
        b(varData_522, () => param_1.image);
        b(varData_525, () => param_1.name);
        b(varData_526, () => 100 - Math.round(_0x3f970c.wounds[param_1.id].damage / _0x3f970c.wounds[param_1.id].maxDamage * 100), varData_527);
        P(param_1_1 => {
          const varData_528 = e1.item;
          const varData_529 = e1.box;
          const varData_530 = e1.data;
          const varData_531 = e1.text;
          const varData_532 = e1.title;
          const varData_533 = e1.status;
          if (varData_528 !== param_1_1._v$6) {
            u(varData_521, param_1_1._v$6 = varData_528);
          }
          if (varData_529 !== param_1_1._v$7) {
            u(varData_522, param_1_1._v$7 = varData_529);
          }
          if (varData_530 !== param_1_1._v$8) {
            u(varData_523, param_1_1._v$8 = varData_530);
          }
          if (varData_531 !== param_1_1._v$9) {
            u(varData_524, param_1_1._v$9 = varData_531);
          }
          if (varData_532 !== param_1_1._v$10) {
            u(varData_525, param_1_1._v$10 = varData_532);
          }
          if (varData_533 !== param_1_1._v$11) {
            u(varData_526, param_1_1._v$11 = varData_533);
          }
          return param_1_1;
        }, {
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined
        });
        return varData_521;
      })()
    }));
    P(param_1 => {
      const varData_534 = e1.generalStatus;
      const varData_535 = e1.text;
      const varData_536 = e1.title;
      const varData_537 = e1.description;
      const varData_538 = e1.itemsList;
      if (varData_534 !== param_1._v$) {
        u(varData_516, param_1._v$ = varData_534);
      }
      if (varData_535 !== param_1._v$2) {
        u(varData_517, param_1._v$2 = varData_535);
      }
      if (varData_536 !== param_1._v$3) {
        u(varData_518, param_1._v$3 = varData_536);
      }
      if (varData_537 !== param_1._v$4) {
        u(varData_519, param_1._v$4 = varData_537);
      }
      if (varData_538 !== param_1._v$5) {
        u(varData_520, param_1._v$5 = varData_538);
      }
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return varData_516;
  })();
}
const W5 = "_header_lq1v4_1";
const G5 = "_title_lq1v4_9";
const Q5 = "_line_lq1v4_18";
const J5 = "_description_lq1v4_25";
const L1 = {
  header: W5,
  title: G5,
  line: Q5,
  description: J5
};
const e0 = A("<div><svg width=\"2.68vh\" height=\"2.4vh\" viewBox=\"0 0 29 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.48611 0.0456147C5.56028 0.305147 3.92929 1.11658 2.51933 2.51669C1.22622 3.80067 0.445177 5.23457 0.104231 6.95037C-0.0347342 7.64967 -0.0347342 9.17774 0.104174 9.86842C0.301958 10.8516 0.719591 11.9456 1.19201 12.7178L1.39689 13.0527L4.52655 13.0512L7.65627 13.0498L8.24577 12.0637C8.59165 11.4851 8.90333 11.0294 8.99998 10.9611C9.23781 10.793 9.56951 10.7632 9.84262 10.8854C10.0952 10.9985 10.0809 10.9784 11.5957 13.3483C12.1056 14.146 12.5381 14.7983 12.5569 14.7979C12.5756 14.7975 13.3694 13.1598 14.3209 11.1586C16.2086 7.18845 16.1622 7.26645 16.6696 7.20962C16.9855 7.17431 17.3091 7.34249 17.49 7.63609C17.5601 7.74981 18.2491 9.00872 19.0213 10.4337L20.4252 13.0245H24.0207H27.6162L27.9958 12.2987C29.5384 9.34964 29.2953 6.15561 27.3248 3.48098C26.9023 2.90751 25.9733 2.00855 25.3514 1.57133C24.6919 1.10768 23.5241 0.542545 22.7769 0.32531C21.5786 -0.0229294 20.1517 -0.096655 18.972 0.12869C17.5478 0.400726 16.0555 1.1074 14.86 2.07592C14.673 2.22748 14.5049 2.35144 14.4864 2.35144C14.468 2.35144 14.2893 2.22044 14.0892 2.06037C12.8961 1.10588 11.474 0.429225 10.0727 0.149304C9.43406 0.0217341 8.06931 -0.0329547 7.48611 0.0456147ZM15.5415 12.5594C13.2661 17.3387 13.3387 17.1986 13.0651 17.3372C12.7815 17.4809 12.4049 17.4627 12.1779 17.2945C12.0983 17.2354 11.5134 16.3772 10.8783 15.3874C10.2431 14.3976 9.67648 13.5153 9.61902 13.4269L9.5146 13.2659L9.21358 13.7648C8.82221 14.4134 8.73294 14.5257 8.51672 14.6414C8.35427 14.7283 8.06625 14.7378 5.5309 14.74L2.72494 14.7423L8.33187 20.276C11.4157 23.3195 14.0184 25.8529 14.1157 25.9058C14.3378 26.0267 14.5492 26.031 14.819 25.9201C14.9677 25.8591 16.6744 24.2014 20.6032 20.302L26.1763 14.7705L22.8951 14.7423L19.6137 14.7142L19.4305 14.5733C19.2954 14.4695 18.9342 13.8552 18.0562 12.236C17.4012 11.0279 16.8465 10.0203 16.8235 9.99678C16.8006 9.97335 16.2237 11.1265 15.5415 12.5594Z\" fill=\"#00F8B9\"></svg><div class=\"flex flex-col items-start justify-start\"><div>Health Inspection</div><div>View your wounds and injuries.</div></div><div>/////");
function t0() {
  return (() => {
    const varData_539 = e0();
    const varData_540 = varData_539.firstChild;
    const varData_541 = varData_540.nextSibling;
    const varData_542 = varData_541.firstChild;
    const varData_543 = varData_542.nextSibling;
    const varData_544 = varData_541.nextSibling;
    varData_540.style.setProperty("filter", "drop-shadow(0px 0.37vh 1.09vh rgba(0, 248, 185, 0.55))");
    P(param_1 => {
      const varData_545 = L1.header;
      const varData_546 = L1.title;
      const varData_547 = L1.description;
      const varData_548 = L1.title;
      const varData_549 = {
        [L1.line]: true
      };
      if (varData_545 !== param_1._v$) {
        u(varData_539, param_1._v$ = varData_545);
      }
      if (varData_546 !== param_1._v$2) {
        u(varData_542, param_1._v$2 = varData_546);
      }
      if (varData_547 !== param_1._v$3) {
        u(varData_543, param_1._v$3 = varData_547);
      }
      if (varData_548 !== param_1._v$4) {
        u(varData_544, param_1._v$4 = varData_548);
      }
      param_1._v$5 = se(varData_544, varData_549, param_1._v$5);
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return varData_539;
  })();
}
const n0 = "_injuryList_ljj40_1";
const i0 = "_text_ljj40_14";
const r0 = "_title_ljj40_22";
const s0 = "_description_ljj40_30";
const o0 = "_itemsList_ljj40_38";
const l0 = "_item_ljj40_38";
const a0 = "_box_ljj40_56";
const d0 = "_image_ljj40_66";
const c0 = "_data_ljj40_73";
const u0 = "_amount_ljj40_102";
const t1 = {
  injuryList: n0,
  text: i0,
  title: r0,
  description: s0,
  itemsList: o0,
  item: l0,
  box: a0,
  image: d0,
  data: c0,
  amount: u0
};
const f0 = A("<div><div><div>Combined Injury List</div><div>List of all injuries on the patient.</div></div><div>");
const v0 = A("<div><div><svg width=\"1.75vh\" height=\"1.75vh\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.3386 0.0649681C11.0362 0.152955 10.9193 0.21954 10.6752 0.442778C10.1441 0.928639 10.009 1.72379 10.3411 2.41004C10.4708 2.67809 10.583 2.79617 13.2831 5.50594C14.8271 7.05541 16.1865 8.39606 16.3041 8.4852C17.1001 9.0887 18.2224 8.89433 18.7503 8.06161C19.0861 7.53195 19.0829 6.80048 18.7426 6.25576C18.5937 6.0174 13.0001 0.419703 12.7513 0.260115C12.3588 0.00826694 11.7992 -0.0690562 11.3386 0.0649681ZM8.20105 5.28155C6.43827 7.07889 6.26584 7.28515 5.8488 8.09502C5.45526 8.85929 5.23787 9.56442 5.13864 10.3985C5.07241 10.9554 5.06907 11.3221 5.12535 11.8614L5.16748 12.265L3.61285 13.8214L2.05819 15.3778L2.8469 16.1672L3.63557 16.9566L5.18879 15.4023L6.74201 13.848L7.24135 13.8943C8.85875 14.044 10.5553 13.5513 11.8947 12.543C12.0585 12.4197 12.9068 11.6071 13.78 10.7372L15.3675 9.15569L14.5785 8.36526L13.7894 7.57482L13.0092 8.35508L12.2291 9.13529L11.0507 7.95546L9.87239 6.77562L10.6574 5.9899L11.4424 5.20419L10.6532 4.42951C10.2192 4.00339 9.85309 3.65052 9.83965 3.64528C9.82617 3.64004 9.0888 4.37634 8.20105 5.28155ZM10.8854 10.4746C10.2952 11.0555 9.9636 11.294 9.49121 11.4775C9.02725 11.6577 8.66334 11.7121 8.09198 11.6867C7.81549 11.6743 7.54494 11.6537 7.49078 11.6409C7.36731 11.6117 7.35283 11.5523 7.32402 10.9561C7.29046 10.2626 7.3842 9.79624 7.67127 9.2283C7.87593 8.82333 7.99387 8.67243 8.55097 8.1026L9.07028 7.57141L10.2523 8.75284L11.4344 9.93428L10.8854 10.4746ZM0.734239 16.7055C0.116701 17.3304 0.0310217 17.4655 0.00570391 17.8538C-0.00936795 18.0844 0.00136054 18.1475 0.0878196 18.3369C0.209211 18.6028 0.36535 18.7714 0.610138 18.9011C0.768466 18.985 0.842155 18.9995 1.1113 19C1.54485 19.0007 1.67107 18.9245 2.32989 18.2638L2.85592 17.7364L2.06617 16.9466L1.27642 16.1567L0.734239 16.7055Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.3386 0.0649681C11.0362 0.152955 10.9193 0.21954 10.6752 0.442778C10.1441 0.928639 10.009 1.72379 10.3411 2.41004C10.4708 2.67809 10.583 2.79617 13.2831 5.50594C14.8271 7.05541 16.1865 8.39606 16.3041 8.4852C17.1001 9.0887 18.2224 8.89433 18.7503 8.06161C19.0861 7.53195 19.0829 6.80048 18.7426 6.25576C18.5937 6.0174 13.0001 0.419703 12.7513 0.260115C12.3588 0.00826694 11.7992 -0.0690562 11.3386 0.0649681ZM8.20105 5.28155C6.43827 7.07889 6.26584 7.28515 5.8488 8.09502C5.45526 8.85929 5.23787 9.56442 5.13864 10.3985C5.07241 10.9554 5.06907 11.3221 5.12535 11.8614L5.16748 12.265L3.61285 13.8214L2.05819 15.3778L2.8469 16.1672L3.63557 16.9566L5.18879 15.4023L6.74201 13.848L7.24135 13.8943C8.85875 14.044 10.5553 13.5513 11.8947 12.543C12.0585 12.4197 12.9068 11.6071 13.78 10.7372L15.3675 9.15569L14.5785 8.36526L13.7894 7.57482L13.0092 8.35508L12.2291 9.13529L11.0507 7.95546L9.87239 6.77562L10.6574 5.9899L11.4424 5.20419L10.6532 4.42951C10.2192 4.00339 9.85309 3.65052 9.83965 3.64528C9.82617 3.64004 9.0888 4.37634 8.20105 5.28155ZM10.8854 10.4746C10.2952 11.0555 9.9636 11.294 9.49121 11.4775C9.02725 11.6577 8.66334 11.7121 8.09198 11.6867C7.81549 11.6743 7.54494 11.6537 7.49078 11.6409C7.36731 11.6117 7.35283 11.5523 7.32402 10.9561C7.29046 10.2626 7.3842 9.79624 7.67127 9.2283C7.87593 8.82333 7.99387 8.67243 8.55097 8.1026L9.07028 7.57141L10.2523 8.75284L11.4344 9.93428L10.8854 10.4746ZM0.734239 16.7055C0.116701 17.3304 0.0310217 17.4655 0.00570391 17.8538C-0.00936795 18.0844 0.00136054 18.1475 0.0878196 18.3369C0.209211 18.6028 0.36535 18.7714 0.610138 18.9011C0.768466 18.985 0.842155 18.9995 1.1113 19C1.54485 19.0007 1.67107 18.9245 2.32989 18.2638L2.85592 17.7364L2.06617 16.9466L1.27642 16.1567L0.734239 16.7055Z\" fill=\"#00F8B9\"></div><div><div><div></div></div><div>");
function C0() {
  const {
    playerState: _0x290207
  } = G();
  const varData_550 = () => Object.entries(_0x290207.wounds).reduce((param_1, [_0x34b918, _0x28192a]) => _0x28192a.injuryList ? [...param_1, ..._0x28192a.injuryList] : param_1, []).reduce((param_1, param_2) => {
    param_1[param_2] ||= 0;
    param_1[param_2]++;
    return param_1;
  }, {});
  return (() => {
    const varData_551 = f0();
    const varData_552 = varData_551.firstChild;
    const varData_553 = varData_552.firstChild;
    const varData_554 = varData_553.nextSibling;
    const varData_555 = varData_552.nextSibling;
    b(varData_555, S(g1, {
      get each() {
        return Object.entries(varData_550());
      },
      children: ([_0xf4e1c7, _0x415623]) => (() => {
        const varData_556 = v0();
        const varData_557 = varData_556.firstChild;
        const varData_558 = varData_557.nextSibling;
        const varData_559 = varData_558.firstChild;
        const varData_560 = varData_559.firstChild;
        const varData_561 = varData_559.nextSibling;
        b(varData_560, _0xf4e1c7);
        b(varData_561, _0x415623);
        P(param_1 => {
          const varData_562 = t1.item;
          const varData_563 = t1.box;
          const varData_564 = t1.data;
          const varData_565 = t1.text;
          const varData_566 = t1.title;
          const varData_567 = t1.amount;
          if (varData_562 !== param_1._v$6) {
            u(varData_556, param_1._v$6 = varData_562);
          }
          if (varData_563 !== param_1._v$7) {
            u(varData_557, param_1._v$7 = varData_563);
          }
          if (varData_564 !== param_1._v$8) {
            u(varData_558, param_1._v$8 = varData_564);
          }
          if (varData_565 !== param_1._v$9) {
            u(varData_559, param_1._v$9 = varData_565);
          }
          if (varData_566 !== param_1._v$10) {
            u(varData_560, param_1._v$10 = varData_566);
          }
          if (varData_567 !== param_1._v$11) {
            u(varData_561, param_1._v$11 = varData_567);
          }
          return param_1;
        }, {
          _v$6: undefined,
          _v$7: undefined,
          _v$8: undefined,
          _v$9: undefined,
          _v$10: undefined,
          _v$11: undefined
        });
        return varData_556;
      })()
    }));
    P(param_1 => {
      const varData_568 = t1.injuryList;
      const varData_569 = t1.text;
      const varData_570 = t1.title;
      const varData_571 = t1.description;
      const varData_572 = t1.itemsList;
      if (varData_568 !== param_1._v$) {
        u(varData_551, param_1._v$ = varData_568);
      }
      if (varData_569 !== param_1._v$2) {
        u(varData_552, param_1._v$2 = varData_569);
      }
      if (varData_570 !== param_1._v$3) {
        u(varData_553, param_1._v$3 = varData_570);
      }
      if (varData_571 !== param_1._v$4) {
        u(varData_554, param_1._v$4 = varData_571);
      }
      if (varData_572 !== param_1._v$5) {
        u(varData_555, param_1._v$5 = varData_572);
      }
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return varData_551;
  })();
}
const _0 = "_inspection_1pp7v_1";
const g0 = "_main_1pp7v_13";
const h0 = "_list_1pp7v_22";
const W1 = {
  inspection: _0,
  main: g0,
  list: h0
};
var $0 = () => {};
var me = (param_1, param_2) => param_2();
function m0(param_1, param_2) {
  const varData_573 = D(param_1);
  const varData_574 = varData_573 ? [varData_573] : [];
  const {
    onEnter: _0x1d42ca = me,
    onExit: _0x46d9e7 = me
  } = param_2;
  const [_0x20b7a, _0x17ad15] = c1(param_2.appear ? [] : varData_574);
  const [_0x2296f5] = Ye();
  let varData_575;
  let isDisabled = false;
  function handleAction_5(param_1_1, param_2_1) {
    if (!param_1_1) {
      return param_2_1 && param_2_1();
    }
    isDisabled = true;
    _0x46d9e7(param_1_1, () => {
      n1(() => {
        isDisabled = false;
        _0x17ad15(param_1_2 => param_1_2.filter(param_1_3 => param_1_3 !== param_1_1));
        if (param_2_1) {
          param_2_1();
        }
      });
    });
  }
  function handleAction_6(param_1_1) {
    const varData_576 = varData_575;
    if (!varData_576) {
      return param_1_1 && param_1_1();
    }
    varData_575 = undefined;
    _0x17ad15(param_1_2 => [varData_576, ...param_1_2]);
    _0x1d42ca(varData_576, param_1_1 ?? $0);
  }
  const varData_577 = param_2.mode === "out-in" ? param_1_1 => isDisabled || handleAction_5(param_1_1, handleAction_6) : param_2.mode === "in-out" ? param_1_1 => handleAction_6(() => handleAction_5(param_1_1)) : param_1_1 => {
    handleAction_5(param_1_1);
    handleAction_6();
  };
  Ve(param_1_1 => {
    const varData_578 = param_1();
    if (D(_0x2296f5)) {
      _0x2296f5();
      return param_1_1;
    } else {
      if (varData_578 !== param_1_1) {
        varData_575 = varData_578;
        n1(() => D(() => varData_577(param_1_1)));
      }
      return varData_578;
    }
  }, param_2.appear ? undefined : varData_573);
  return _0x20b7a;
}
var ye = param_1 => param_1 instanceof Element;
function re(param_1, param_2) {
  if (param_2(param_1)) {
    return param_1;
  }
  if (typeof param_1 == "function" && !param_1.length) {
    return re(param_1(), param_2);
  }
  if (Array.isArray(param_1)) {
    for (const varData_579 of param_1) {
      const varData_580 = re(varData_579, param_2);
      if (varData_580) {
        return varData_580;
      }
    }
  }
  return null;
}
function y0(param_1, _0x109e74 = ye, _0x4813c9 = ye) {
  const varData_581 = F(param_1);
  return F(() => re(varData_581(), _0x109e74));
}
function b0(param_1) {
  return F(() => {
    const varData_582 = param_1.name || "s";
    return {
      enterActive: (param_1.enterActiveClass || varData_582 + "-enter-active").split(" "),
      enter: (param_1.enterClass || varData_582 + "-enter").split(" "),
      enterTo: (param_1.enterToClass || varData_582 + "-enter-to").split(" "),
      exitActive: (param_1.exitActiveClass || varData_582 + "-exit-active").split(" "),
      exit: (param_1.exitClass || varData_582 + "-exit").split(" "),
      exitTo: (param_1.exitToClass || varData_582 + "-exit-to").split(" "),
      move: (param_1.moveClass || varData_582 + "-move").split(" ")
    };
  });
}
function qe(param_1) {
  requestAnimationFrame(() => requestAnimationFrame(param_1));
}
function w0(param_1, param_2, param_3, param_4) {
  const {
    onBeforeEnter: _0x47859f,
    onEnter: _0x3eddfe,
    onAfterEnter: _0x1ffb46
  } = param_2;
  _0x47859f?.(param_3);
  param_3.classList.add(...param_1.enter);
  param_3.classList.add(...param_1.enterActive);
  queueMicrotask(() => {
    if (!param_3.parentNode) {
      return param_4?.();
    }
    _0x3eddfe?.(param_3, () => handleAction_7());
  });
  qe(() => {
    param_3.classList.remove(...param_1.enter);
    param_3.classList.add(...param_1.enterTo);
    if (!_0x3eddfe || _0x3eddfe.length < 2) {
      param_3.addEventListener("transitionend", handleAction_7);
      param_3.addEventListener("animationend", handleAction_7);
    }
  });
  function handleAction_7(param_1_1) {
    if (!param_1_1 || param_1_1.target === param_3) {
      param_4?.();
      param_3.removeEventListener("transitionend", handleAction_7);
      param_3.removeEventListener("animationend", handleAction_7);
      param_3.classList.remove(...param_1.enterActive);
      param_3.classList.remove(...param_1.enterTo);
      _0x1ffb46?.(param_3);
    }
  }
}
function x0(param_1, param_2, param_3, param_4) {
  const {
    onBeforeExit: _0x46e5bb,
    onExit: _0x528842,
    onAfterExit: _0x1e6c0a
  } = param_2;
  if (!param_3.parentNode) {
    return param_4?.();
  }
  _0x46e5bb?.(param_3);
  param_3.classList.add(...param_1.exit);
  param_3.classList.add(...param_1.exitActive);
  _0x528842?.(param_3, () => handleAction_8());
  qe(() => {
    param_3.classList.remove(...param_1.exit);
    param_3.classList.add(...param_1.exitTo);
    if (!_0x528842 || _0x528842.length < 2) {
      param_3.addEventListener("transitionend", handleAction_8);
      param_3.addEventListener("animationend", handleAction_8);
    }
  });
  function handleAction_8(param_1_1) {
    if (!param_1_1 || param_1_1.target === param_3) {
      param_4?.();
      param_3.removeEventListener("transitionend", handleAction_8);
      param_3.removeEventListener("animationend", handleAction_8);
      param_3.classList.remove(...param_1.exitActive);
      param_3.classList.remove(...param_1.exitTo);
      _0x1e6c0a?.(param_3);
    }
  }
}
var p0 = {
  inout: "in-out",
  outin: "out-in"
};
var L0 = param_1 => {
  const varData_583 = b0(param_1);
  return m0(y0(() => param_1.children), {
    mode: p0[param_1.mode],
    appear: param_1.appear,
    onEnter(param_1_1, param_2) {
      w0(varData_583(), param_1, param_1_1, param_2);
    },
    onExit(param_1_1, param_2) {
      x0(varData_583(), param_1, param_1_1, param_2);
    }
  });
};
const S0 = "_generalStatus_1gy4k_1";
const A0 = "_text_1gy4k_14";
const j0 = "_title_1gy4k_22";
const k0 = "_description_1gy4k_30";
const P0 = "_itemsList_1gy4k_38";
const O0 = "_item_1gy4k_38";
const M0 = "_box_1gy4k_56";
const D0 = "_image_1gy4k_66";
const E0 = "_data_1gy4k_73";
const I0 = "_status_1gy4k_102";
const S1 = {
  generalStatus: S0,
  text: A0,
  title: j0,
  description: k0,
  itemsList: P0,
  item: O0,
  box: M0,
  image: D0,
  data: E0,
  status: I0
};
const T0 = A("<div><div><div>Body</div><div>View your wounds and injuries.</div></div><div>");
function B0() {
  return (() => {
    const varData_584 = T0();
    const varData_585 = varData_584.firstChild;
    const varData_586 = varData_585.firstChild;
    const varData_587 = varData_586.nextSibling;
    const varData_588 = varData_585.nextSibling;
    b(varData_588, S(Fe, {}));
    P(param_1 => {
      const varData_589 = S1.generalStatus;
      const varData_590 = S1.text;
      const varData_591 = S1.title;
      const varData_592 = S1.description;
      const varData_593 = S1.itemsList;
      if (varData_589 !== param_1._v$) {
        u(varData_584, param_1._v$ = varData_589);
      }
      if (varData_590 !== param_1._v$2) {
        u(varData_585, param_1._v$2 = varData_590);
      }
      if (varData_591 !== param_1._v$3) {
        u(varData_586, param_1._v$3 = varData_591);
      }
      if (varData_592 !== param_1._v$4) {
        u(varData_587, param_1._v$4 = varData_592);
      }
      if (varData_593 !== param_1._v$5) {
        u(varData_588, param_1._v$5 = varData_593);
      }
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined
    });
    return varData_584;
  })();
}
const N0 = "_generalStatus_1gy4k_1";
const Z0 = "_text_1gy4k_14";
const F0 = "_title_1gy4k_22";
const H0 = "_description_1gy4k_30";
const R0 = "_itemsList_1gy4k_38";
const q0 = "_item_1gy4k_38";
const U0 = "_box_1gy4k_56";
const K0 = "_image_1gy4k_66";
const V0 = "_data_1gy4k_73";
const X0 = "_status_1gy4k_102";
const r1 = {
  generalStatus: N0,
  text: Z0,
  title: F0,
  description: H0,
  itemsList: R0,
  item: q0,
  box: U0,
  image: K0,
  data: V0,
  status: X0
};
const Y0 = A("<svg width=\"1.48vh\" height=\"1.66vh\" viewBox=\"0 0 16 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.43293 0.052099C10.4022 0.222548 11.2595 0.672656 11.9504 1.37379C12.6723 2.10625 13.0904 3.02251 13.1526 4.00858C13.1689 4.26588 13.0789 5.99317 12.8781 9.27686C12.7138 11.9639 12.5906 14.2593 12.6044 14.3777C12.6406 14.6906 12.804 14.9906 13.0621 15.2183C13.3352 15.4591 13.4472 15.5009 14.4303 15.7291C14.8602 15.829 15.2741 15.9357 15.3502 15.9663C15.701 16.1078 15.9536 16.4667 15.9923 16.8788C16.0122 17.0909 15.9996 17.1472 15.8793 17.383C15.7389 17.6581 15.5247 17.8477 15.2399 17.9491C15.1437 17.9833 14.3553 17.9971 12.3714 17.9993C9.75666 18.0023 9.62388 17.9988 9.36825 17.9227C8.55096 17.6791 8.06774 16.9362 8.13983 16.0341C8.17113 15.6421 8.26115 15.4105 8.53129 15.0265C8.92116 14.4724 8.96492 14.2702 8.91849 13.2375C8.87998 12.3806 8.81447 12.1414 8.49995 11.7095C7.62965 10.5147 7.27787 9.43798 7.22228 7.79915C7.20856 7.39557 7.19152 7.06532 7.18435 7.06532C7.1716 7.06532 4.09553 7.69662 2.75055 7.97531C1.71676 8.18947 1.31485 8.15991 0.806203 7.8322C0.415083 7.58021 0.14432 7.19492 0.0468416 6.75173C0.0150442 6.60697 0 5.73583 0 4.03596C0 1.31376 0.00237465 1.28232 0.237464 0.865542C0.390619 0.594006 0.740148 0.289256 1.07276 0.137223L1.35444 0.00851168L5.23021 0.00155538C8.43394 -0.00419461 9.16266 0.00457111 9.43293 0.052099Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.43293 0.052099C10.4022 0.222548 11.2595 0.672656 11.9504 1.37379C12.6723 2.10625 13.0904 3.02251 13.1526 4.00858C13.1689 4.26588 13.0789 5.99317 12.8781 9.27686C12.7138 11.9639 12.5906 14.2593 12.6044 14.3777C12.6406 14.6906 12.804 14.9906 13.0621 15.2183C13.3352 15.4591 13.4472 15.5009 14.4303 15.7291C14.8602 15.829 15.2741 15.9357 15.3502 15.9663C15.701 16.1078 15.9536 16.4667 15.9923 16.8788C16.0122 17.0909 15.9996 17.1472 15.8793 17.383C15.7389 17.6581 15.5247 17.8477 15.2399 17.9491C15.1437 17.9833 14.3553 17.9971 12.3714 17.9993C9.75666 18.0023 9.62388 17.9988 9.36825 17.9227C8.55096 17.6791 8.06774 16.9362 8.13983 16.0341C8.17113 15.6421 8.26115 15.4105 8.53129 15.0265C8.92116 14.4724 8.96492 14.2702 8.91849 13.2375C8.87998 12.3806 8.81447 12.1414 8.49995 11.7095C7.62965 10.5147 7.27787 9.43798 7.22228 7.79915C7.20856 7.39557 7.19152 7.06532 7.18435 7.06532C7.1716 7.06532 4.09553 7.69662 2.75055 7.97531C1.71676 8.18947 1.31485 8.15991 0.806203 7.8322C0.415083 7.58021 0.14432 7.19492 0.0468416 6.75173C0.0150442 6.60697 0 5.73583 0 4.03596C0 1.31376 0.00237465 1.28232 0.237464 0.865542C0.390619 0.594006 0.740148 0.289256 1.07276 0.137223L1.35444 0.00851168L5.23021 0.00155538C8.43394 -0.00419461 9.16266 0.00457111 9.43293 0.052099Z\" fill=\"#00F8B9\">");
const z0 = A("<svg width=\"1.48vh\" height=\"1.57vh\" viewBox=\"0 0 16 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.83697 0.0163631C10.1048 0.0815266 10.1951 0.151968 11.3752 1.21676C12.178 1.94105 12.3233 2.09232 12.4819 2.36919C12.6496 2.66202 14.5923 7.13404 15.1405 8.48928C15.9536 10.4996 16.1085 11.5687 15.938 13.9946C15.8682 14.9884 15.8289 15.133 15.5552 15.4018C15.1919 15.7587 13.8489 16.2594 12.4704 16.5517C10.8722 16.8907 9.30786 16.9999 6.04982 17C3.83757 17.0001 3.0121 16.9609 2.51514 16.8323C1.67229 16.614 0.980293 16.124 0.537702 15.4319C-0.123661 14.3979 -0.179836 12.9699 0.396399 11.8422C0.706651 11.2351 1.35417 10.6533 2.02458 10.3794C2.50706 10.1823 2.77995 10.1308 3.33569 10.1323C3.79697 10.1335 3.90309 10.148 4.19832 10.2503C4.62698 10.3989 4.99716 10.6214 5.40444 10.9755C5.58181 11.1297 5.74655 11.2559 5.77062 11.2559C5.79465 11.2559 5.96865 11.1872 6.15724 11.1034C6.61823 10.8983 7.21689 10.7501 7.70758 10.7195C8.71113 10.6569 9.84778 11.0252 10.4894 11.6208C10.8559 11.961 10.9853 12.048 11.041 11.9916C11.0645 11.9679 11.1002 11.6921 11.1205 11.3787C11.1408 11.0654 11.1819 10.4546 11.2118 10.0215C11.314 8.54202 11.2564 7.53843 11.0156 6.60107C10.8744 6.05116 10.5114 5.12925 10.3675 4.95487L10.246 4.80761L9.66276 4.78599L9.07954 4.76432L8.65874 4.56487C8.24115 4.36691 8.03525 4.30252 7.66849 4.25519C7.40423 4.22109 7.23423 4.10396 7.12861 3.88323C7.00186 3.61849 7.00797 3.32413 7.14388 3.14387C7.27618 2.96843 7.27538 2.91965 7.13572 2.64614C6.97876 2.3388 6.97359 1.97472 7.12284 1.74684C7.24374 1.56228 8.92994 0.257992 9.22681 0.119408C9.45829 0.0112982 9.66953 -0.0243694 9.83697 0.0163631Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.83697 0.0163631C10.1048 0.0815266 10.1951 0.151968 11.3752 1.21676C12.178 1.94105 12.3233 2.09232 12.4819 2.36919C12.6496 2.66202 14.5923 7.13404 15.1405 8.48928C15.9536 10.4996 16.1085 11.5687 15.938 13.9946C15.8682 14.9884 15.8289 15.133 15.5552 15.4018C15.1919 15.7587 13.8489 16.2594 12.4704 16.5517C10.8722 16.8907 9.30786 16.9999 6.04982 17C3.83757 17.0001 3.0121 16.9609 2.51514 16.8323C1.67229 16.614 0.980293 16.124 0.537702 15.4319C-0.123661 14.3979 -0.179836 12.9699 0.396399 11.8422C0.706651 11.2351 1.35417 10.6533 2.02458 10.3794C2.50706 10.1823 2.77995 10.1308 3.33569 10.1323C3.79697 10.1335 3.90309 10.148 4.19832 10.2503C4.62698 10.3989 4.99716 10.6214 5.40444 10.9755C5.58181 11.1297 5.74655 11.2559 5.77062 11.2559C5.79465 11.2559 5.96865 11.1872 6.15724 11.1034C6.61823 10.8983 7.21689 10.7501 7.70758 10.7195C8.71113 10.6569 9.84778 11.0252 10.4894 11.6208C10.8559 11.961 10.9853 12.048 11.041 11.9916C11.0645 11.9679 11.1002 11.6921 11.1205 11.3787C11.1408 11.0654 11.1819 10.4546 11.2118 10.0215C11.314 8.54202 11.2564 7.53843 11.0156 6.60107C10.8744 6.05116 10.5114 5.12925 10.3675 4.95487L10.246 4.80761L9.66276 4.78599L9.07954 4.76432L8.65874 4.56487C8.24115 4.36691 8.03525 4.30252 7.66849 4.25519C7.40423 4.22109 7.23423 4.10396 7.12861 3.88323C7.00186 3.61849 7.00797 3.32413 7.14388 3.14387C7.27618 2.96843 7.27538 2.91965 7.13572 2.64614C6.97876 2.3388 6.97359 1.97472 7.12284 1.74684C7.24374 1.56228 8.92994 0.257992 9.22681 0.119408C9.45829 0.0112982 9.66953 -0.0243694 9.83697 0.0163631Z\" fill=\"#00F8B9\">");
const W0 = A("<svg width=\"1.57vh\" height=\"1.94vh\" viewBox=\"0 0 17 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.92981 0.0602049C7.31459 0.226235 6.72585 0.695977 6.46722 1.22713C6.00778 2.17064 6.16666 3.19361 6.88433 3.91287C7.79124 4.82179 9.20855 4.822 10.1136 3.91336C10.56 3.46524 10.7874 2.91817 10.7874 2.29236C10.7874 1.23801 10.0795 0.32724 9.05085 0.0582356C8.7509 -0.0202052 8.22424 -0.0192616 7.92981 0.0602049ZM0.696015 5.31685C0.449314 5.4046 0.153535 5.70839 0.0672291 5.96263C-0.0788623 6.39307 0.0159847 6.82601 0.324064 7.13534C0.655354 7.4679 0.600923 7.46154 3.12232 7.46182C4.60089 7.46195 5.38602 7.47696 5.49541 7.50712C5.70779 7.5657 5.97329 7.84221 6.06715 8.1026C6.16372 8.37033 6.19391 9.20336 6.12976 9.82818C6.10254 10.0933 5.70501 12.4504 5.24638 15.0662C4.78776 17.682 4.4125 19.8624 4.4125 19.9114C4.4125 20.113 4.54175 20.4217 4.70333 20.606C4.92576 20.8597 5.14259 20.9664 5.4854 20.9912C5.73394 21.0091 5.78743 20.9982 6.02224 20.8822C6.27752 20.756 6.41806 20.6167 6.55054 20.3584C6.58736 20.2866 6.84252 18.9329 7.12747 17.2976C7.71425 13.9303 7.76198 13.7471 8.16449 13.3198C8.53657 12.9248 8.93104 13.1845 9.23724 14.0261C9.33637 14.2986 9.47499 15.0125 9.8744 17.3077C10.432 20.5118 10.4293 20.5017 10.7511 20.7575C10.9781 20.938 11.1626 21 11.4728 21C12.0487 21 12.5053 20.5938 12.5713 20.0229C12.5878 19.8802 12.3812 18.622 11.7684 15.1333C11.3146 12.5498 10.9159 10.2052 10.8824 9.92311C10.8073 9.28959 10.8285 8.43893 10.9272 8.12689C11.0144 7.85103 11.2756 7.56972 11.5025 7.50712C11.6119 7.47696 12.3971 7.46195 13.8756 7.46182C16.397 7.46154 16.3426 7.4679 16.6739 7.13534C17.1935 6.61366 17.0767 5.75881 16.4339 5.37949L16.2428 5.26671L8.56027 5.25949C1.66046 5.25297 0.859188 5.25884 0.696015 5.31685Z\" fill=\"black\"></path><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.92981 0.0602049C7.31459 0.226235 6.72585 0.695977 6.46722 1.22713C6.00778 2.17064 6.16666 3.19361 6.88433 3.91287C7.79124 4.82179 9.20855 4.822 10.1136 3.91336C10.56 3.46524 10.7874 2.91817 10.7874 2.29236C10.7874 1.23801 10.0795 0.32724 9.05085 0.0582356C8.7509 -0.0202052 8.22424 -0.0192616 7.92981 0.0602049ZM0.696015 5.31685C0.449314 5.4046 0.153535 5.70839 0.0672291 5.96263C-0.0788623 6.39307 0.0159847 6.82601 0.324064 7.13534C0.655354 7.4679 0.600923 7.46154 3.12232 7.46182C4.60089 7.46195 5.38602 7.47696 5.49541 7.50712C5.70779 7.5657 5.97329 7.84221 6.06715 8.1026C6.16372 8.37033 6.19391 9.20336 6.12976 9.82818C6.10254 10.0933 5.70501 12.4504 5.24638 15.0662C4.78776 17.682 4.4125 19.8624 4.4125 19.9114C4.4125 20.113 4.54175 20.4217 4.70333 20.606C4.92576 20.8597 5.14259 20.9664 5.4854 20.9912C5.73394 21.0091 5.78743 20.9982 6.02224 20.8822C6.27752 20.756 6.41806 20.6167 6.55054 20.3584C6.58736 20.2866 6.84252 18.9329 7.12747 17.2976C7.71425 13.9303 7.76198 13.7471 8.16449 13.3198C8.53657 12.9248 8.93104 13.1845 9.23724 14.0261C9.33637 14.2986 9.47499 15.0125 9.8744 17.3077C10.432 20.5118 10.4293 20.5017 10.7511 20.7575C10.9781 20.938 11.1626 21 11.4728 21C12.0487 21 12.5053 20.5938 12.5713 20.0229C12.5878 19.8802 12.3812 18.622 11.7684 15.1333C11.3146 12.5498 10.9159 10.2052 10.8824 9.92311C10.8073 9.28959 10.8285 8.43893 10.9272 8.12689C11.0144 7.85103 11.2756 7.56972 11.5025 7.50712C11.6119 7.47696 12.3971 7.46195 13.8756 7.46182C16.397 7.46154 16.3426 7.4679 16.6739 7.13534C17.1935 6.61366 17.0767 5.75881 16.4339 5.37949L16.2428 5.26671L8.56027 5.25949C1.66046 5.25297 0.859188 5.25884 0.696015 5.31685Z\" fill=\"#00F8B9\">");
const G0 = A("<div><div><div>General Stats</div></div><div>");
const Q0 = A("<div><div></div><div><div><div></div></div><div>%");
const J0 = [{
  name: "Stamina",
  id: "stamina",
  image: Y0()
}, {
  name: "Strength",
  id: "strength",
  image: z0()
}, {
  name: "Swimming",
  id: "swimming",
  image: W0()
}];
function en() {
  return (() => {
    const varData_594 = G0();
    const varData_595 = varData_594.firstChild;
    const varData_596 = varData_595.firstChild;
    const varData_597 = varData_595.nextSibling;
    b(varData_597, S(g1, {
      each: J0,
      children: param_1 => S(tn, {
        stat: param_1
      })
    }));
    P(param_1 => {
      const varData_598 = r1.generalStatus;
      const varData_599 = r1.text;
      const varData_600 = r1.title;
      const varData_601 = r1.itemsList;
      if (varData_598 !== param_1._v$) {
        u(varData_594, param_1._v$ = varData_598);
      }
      if (varData_599 !== param_1._v$2) {
        u(varData_595, param_1._v$2 = varData_599);
      }
      if (varData_600 !== param_1._v$3) {
        u(varData_596, param_1._v$3 = varData_600);
      }
      if (varData_601 !== param_1._v$4) {
        u(varData_597, param_1._v$4 = varData_601);
      }
      return param_1;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return varData_594;
  })();
}
const tn = ({
  stat: _0x50c17b
}) => {
  const {
    playerStats: _0x3c68ff
  } = G();
  const varData_602 = _0x3c68ff[_0x50c17b.id] ?? 0;
  return (() => {
    const varData_603 = Q0();
    const varData_604 = varData_603.firstChild;
    const varData_605 = varData_604.nextSibling;
    const varData_606 = varData_605.firstChild;
    const varData_607 = varData_606.firstChild;
    const varData_608 = varData_606.nextSibling;
    const varData_609 = varData_608.firstChild;
    b(varData_604, () => _0x50c17b.image);
    b(varData_607, () => _0x50c17b.name);
    b(varData_608, () => Math.round(varData_602 / 100 * 100), varData_609);
    P(param_1 => {
      const varData_610 = r1.item;
      const varData_611 = r1.box;
      const varData_612 = r1.data;
      const varData_613 = r1.text;
      const varData_614 = r1.title;
      const varData_615 = r1.status;
      if (varData_610 !== param_1._v$5) {
        u(varData_603, param_1._v$5 = varData_610);
      }
      if (varData_611 !== param_1._v$6) {
        u(varData_604, param_1._v$6 = varData_611);
      }
      if (varData_612 !== param_1._v$7) {
        u(varData_605, param_1._v$7 = varData_612);
      }
      if (varData_613 !== param_1._v$8) {
        u(varData_606, param_1._v$8 = varData_613);
      }
      if (varData_614 !== param_1._v$9) {
        u(varData_607, param_1._v$9 = varData_614);
      }
      if (varData_615 !== param_1._v$10) {
        u(varData_608, param_1._v$10 = varData_615);
      }
      return param_1;
    }, {
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined
    });
    return varData_603;
  })();
};
const nn = A("<div><div><div><div class=\"flex h-full w-full flex-col items-start justify-start gap-[2.4vh] overflow-auto\">");
function rn() {
  const {
    quickInspection: _0x4c284b,
    setQuickInspection: _0x46c6be
  } = G();
  _0x4ca1ca.register("wounds:quickInspection:show", async param_1 => {
    _0x46c6be(param_1);
  });
  const varData_616 = param_1 => {
    if (param_1.key === "Escape") {
      _0x46c6be(false);
      _0x4ca1ca.execute("wounds:inspection:close");
    }
  };
  w1(async () => {
    document.addEventListener("keydown", varData_616);
  });
  _1(() => {
    document.removeEventListener("keydown", varData_616);
  });
  return S(L0, {
    name: "slide-right",
    get children() {
      return S(l1, {
        get when() {
          return _0x4c284b();
        },
        get children() {
          const varData_617 = nn();
          const varData_618 = varData_617.firstChild;
          const varData_619 = varData_618.firstChild;
          const varData_620 = varData_619.firstChild;
          b(varData_619, S(t0, {}), varData_620);
          b(varData_620, S(B0, {}), null);
          b(varData_620, S(C0, {}), null);
          b(varData_620, S(z5, {}), null);
          b(varData_620, S(en, {}), null);
          P(param_1 => {
            const varData_621 = W1.inspection;
            const varData_622 = W1.main;
            const varData_623 = W1.list;
            if (varData_621 !== param_1._v$) {
              u(varData_617, param_1._v$ = varData_621);
            }
            if (varData_622 !== param_1._v$2) {
              u(varData_618, param_1._v$2 = varData_622);
            }
            if (varData_623 !== param_1._v$3) {
              u(varData_619, param_1._v$3 = varData_623);
            }
            return param_1;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined
          });
          return varData_617;
        }
      });
    }
  });
}
const sn = A("<div>");
function on() {
  return S(jt, {
    get children() {
      return S(Q2, {
        get children() {
          return S(e5, {
            get children() {
              const varData_624 = sn();
              b(varData_624, S(Jt, {}), null);
              b(varData_624, S(Tt, {}), null);
              b(varData_624, S(k5, {}), null);
              b(varData_624, S(rn, {}), null);
              P(() => u(varData_624, wt.App));
              return varData_624;
            }
          });
        }
      });
    }
  });
}
vt(() => S(on, {}), document.getElementById("root"));