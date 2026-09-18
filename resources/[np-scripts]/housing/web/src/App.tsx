import "./style.css";
import { N as _0xdfacf8 } from "./v-packages-6cb79519.js";
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
const W1 = (param_1, param_2) => param_1 === param_2;
const I = Symbol("solid-proxy");
const f1 = Symbol("solid-track");
const e1 = {
  equals: W1
};
let A1 = E1;
const F = 1;
const t1 = 2;
const x1 = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var $ = null;
let a1 = null;
let y = null;
let _ = null;
let V = null;
let o1 = 0;
function z(param_1, param_2) {
  const varData_7 = y;
  const varData_8 = $;
  const varData_9 = param_1.length === 0;
  const varData_10 = varData_9 ? x1 : {
    owned: null,
    cleanups: null,
    context: null,
    owner: param_2 === undefined ? varData_8 : param_2
  };
  const varData_11 = varData_9 ? param_1 : () => param_1(() => T(() => c1(varData_10)));
  $ = varData_10;
  y = null;
  try {
    return W(varData_11, true);
  } finally {
    y = varData_7;
    $ = varData_8;
  }
}
function K(param_1, param_2) {
  param_2 = param_2 ? Object.assign({}, e1, param_2) : e1;
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
    return P1(varData_12, param_1_1);
  };
  return [O1.bind(varData_12), varData_13];
}
function D(param_1, param_2, param_3) {
  const varData_14 = w1(param_1, param_2, false, F);
  Q(varData_14);
}
function q1(param_1, param_2, param_3) {
  A1 = e2;
  const varData_15 = w1(param_1, param_2, false, F);
  if (!param_3 || !param_3.render) {
    varData_15.user = true;
  }
  if (V) {
    V.push(varData_15);
  } else {
    Q(varData_15);
  }
}
function U(param_1, param_2, param_3) {
  param_3 = param_3 ? Object.assign({}, e1, param_3) : e1;
  const varData_16 = w1(param_1, param_2, true, 0);
  varData_16.observers = null;
  varData_16.observerSlots = null;
  varData_16.comparator = param_3.equals || undefined;
  Q(varData_16);
  return O1.bind(varData_16);
}
function X1(param_1) {
  return W(param_1, false);
}
function T(param_1) {
  if (y === null) {
    return param_1();
  }
  const varData_17 = y;
  y = null;
  try {
    return param_1();
  } finally {
    y = varData_17;
  }
}
function Y1(param_1) {
  q1(() => T(param_1));
}
function M1(param_1) {
  if ($ !== null) {
    if ($.cleanups === null) {
      $.cleanups = [param_1];
    } else {
      $.cleanups.push(param_1);
    }
  }
  return param_1;
}
function Z1() {
  return y;
}
function J1(param_1) {
  const varData_18 = U(param_1);
  const varData_19 = U(() => d1(varData_18()));
  varData_19.toArray = () => {
    const varData_20 = varData_19();
    if (Array.isArray(varData_20)) {
      return varData_20;
    } else if (varData_20 != null) {
      return [varData_20];
    } else {
      return [];
    }
  };
  return varData_19;
}
function O1() {
  if (this.sources && this.state) {
    if (this.state === F) {
      Q(this);
    } else {
      const varData_21 = _;
      _ = null;
      W(() => s1(this), false);
      _ = varData_21;
    }
  }
  if (y) {
    const varData_22 = this.observers ? this.observers.length : 0;
    if (y.sources) {
      y.sources.push(this);
      y.sourceSlots.push(varData_22);
    } else {
      y.sources = [this];
      y.sourceSlots = [varData_22];
    }
    if (this.observers) {
      this.observers.push(y);
      this.observerSlots.push(y.sources.length - 1);
    } else {
      this.observers = [y];
      this.observerSlots = [y.sources.length - 1];
    }
  }
  return this.value;
}
function P1(param_1, param_2, param_3) {
  let varData_23 = param_1.value;
  if (!param_1.comparator || !param_1.comparator(varData_23, param_2)) {
    param_1.value = param_2;
    if (param_1.observers && param_1.observers.length) {
      W(() => {
        for (let numericVal = 0; numericVal < param_1.observers.length; numericVal += 1) {
          const varData_24 = param_1.observers[numericVal];
          const varData_25 = a1 && a1.running;
          if (varData_25) {
            a1.disposed.has(varData_24);
          }
          if (varData_25 ? !varData_24.tState : !varData_24.state) {
            if (varData_24.pure) {
              _.push(varData_24);
            } else {
              V.push(varData_24);
            }
            if (varData_24.observers) {
              k1(varData_24);
            }
          }
          if (!varData_25) {
            varData_24.state = F;
          }
        }
        if (_.length > 1000000) {
          _ = [];
          throw new Error();
        }
      }, false);
    }
  }
  return param_2;
}
function Q(param_1) {
  if (!param_1.fn) {
    return;
  }
  c1(param_1);
  const varData_26 = $;
  const varData_27 = y;
  const varData_28 = o1;
  y = $ = param_1;
  Q1(param_1, param_1.value, varData_28);
  y = varData_27;
  $ = varData_26;
}
function Q1(param_1, param_2, param_3) {
  let varData_29;
  try {
    varData_29 = param_1.fn(param_2);
  } catch (err) {
    if (param_1.pure) {
      param_1.state = F;
      if (param_1.owned) {
        param_1.owned.forEach(c1);
      }
      param_1.owned = null;
    }
    param_1.updatedAt = param_3 + 1;
    return H1(err);
  }
  if (!param_1.updatedAt || param_1.updatedAt <= param_3) {
    if (param_1.updatedAt != null && "observers" in param_1) {
      P1(param_1, varData_29);
    } else {
      param_1.value = varData_29;
    }
    param_1.updatedAt = param_3;
  }
}
function w1(param_1, param_2, param_3, _0x1e841a = F, param_5) {
  const varData_30 = {
    fn: param_1,
    state: _0x1e841a,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: param_2,
    owner: $,
    context: null,
    pure: param_3
  };
  if ($ !== null) {
    if ($ !== x1) {
      if ($.owned) {
        $.owned.push(varData_30);
      } else {
        $.owned = [varData_30];
      }
    }
  }
  return varData_30;
}
function n1(param_1) {
  if (param_1.state === 0) {
    return;
  }
  if (param_1.state === t1) {
    return s1(param_1);
  }
  if (param_1.suspense && T(param_1.suspense.inFallback)) {
    return param_1.suspense.effects.push(param_1);
  }
  const itemList = [param_1];
  while ((param_1 = param_1.owner) && (!param_1.updatedAt || param_1.updatedAt < o1)) {
    if (param_1.state) {
      itemList.push(param_1);
    }
  }
  for (let loopIdx = itemList.length - 1; loopIdx >= 0; loopIdx--) {
    param_1 = itemList[loopIdx];
    if (param_1.state === F) {
      Q(param_1);
    } else if (param_1.state === t1) {
      const varData_31 = _;
      _ = null;
      W(() => s1(param_1, itemList[0]), false);
      _ = varData_31;
    }
  }
}
function W(param_1, param_2) {
  if (_) {
    return param_1();
  }
  let isDisabled = false;
  if (!param_2) {
    _ = [];
  }
  if (V) {
    isDisabled = true;
  } else {
    V = [];
  }
  o1++;
  try {
    const varData_32 = param_1();
    z1(isDisabled);
    return varData_32;
  } catch (err) {
    if (!isDisabled) {
      V = null;
    }
    _ = null;
    H1(err);
  }
}
function z1(param_1) {
  if (_) {
    E1(_);
    _ = null;
  }
  if (param_1) {
    return;
  }
  const varData_33 = V;
  V = null;
  if (varData_33.length) {
    W(() => A1(varData_33), false);
  }
}
function E1(param_1) {
  for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
    n1(param_1[numericVal]);
  }
}
function e2(param_1) {
  let varData_34;
  let numericVal = 0;
  for (varData_34 = 0; varData_34 < param_1.length; varData_34++) {
    const varData_35 = param_1[varData_34];
    if (varData_35.user) {
      param_1[numericVal++] = varData_35;
    } else {
      n1(varData_35);
    }
  }
  for (varData_34 = 0; varData_34 < numericVal; varData_34++) {
    n1(param_1[varData_34]);
  }
}
function s1(param_1, param_2) {
  param_1.state = 0;
  for (let numericVal = 0; numericVal < param_1.sources.length; numericVal += 1) {
    const varData_36 = param_1.sources[numericVal];
    if (varData_36.sources) {
      const varData_37 = varData_36.state;
      if (varData_37 === F) {
        if (varData_36 !== param_2 && (!varData_36.updatedAt || varData_36.updatedAt < o1)) {
          n1(varData_36);
        }
      } else if (varData_37 === t1) {
        s1(varData_36, param_2);
      }
    }
  }
}
function k1(param_1) {
  for (let numericVal = 0; numericVal < param_1.observers.length; numericVal += 1) {
    const varData_38 = param_1.observers[numericVal];
    if (!varData_38.state) {
      varData_38.state = t1;
      if (varData_38.pure) {
        _.push(varData_38);
      } else {
        V.push(varData_38);
      }
      if (varData_38.observers) {
        k1(varData_38);
      }
    }
  }
}
function c1(param_1) {
  let varData_39;
  if (param_1.sources) {
    while (param_1.sources.length) {
      const varData_40 = param_1.sources.pop();
      const varData_41 = param_1.sourceSlots.pop();
      const varData_42 = varData_40.observers;
      if (varData_42 && varData_42.length) {
        const varData_43 = varData_42.pop();
        const varData_44 = varData_40.observerSlots.pop();
        if (varData_41 < varData_42.length) {
          varData_43.sourceSlots[varData_44] = varData_41;
          varData_42[varData_41] = varData_43;
          varData_40.observerSlots[varData_41] = varData_44;
        }
      }
    }
  }
  if (param_1.owned) {
    for (varData_39 = param_1.owned.length - 1; varData_39 >= 0; varData_39--) {
      c1(param_1.owned[varData_39]);
    }
    param_1.owned = null;
  }
  if (param_1.cleanups) {
    for (varData_39 = param_1.cleanups.length - 1; varData_39 >= 0; varData_39--) {
      param_1.cleanups[varData_39]();
    }
    param_1.cleanups = null;
  }
  param_1.state = 0;
  param_1.context = null;
}
function H1(param_1) {
  throw param_1;
}
function d1(param_1) {
  if (typeof param_1 == "function" && !param_1.length) {
    return d1(param_1());
  }
  if (Array.isArray(param_1)) {
    const itemList = [];
    for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
      const varData_45 = d1(param_1[numericVal]);
      if (Array.isArray(varData_45)) {
        itemList.push.apply(itemList, varData_45);
      } else {
        itemList.push(varData_45);
      }
    }
    return itemList;
  }
  return param_1;
}
const t2 = Symbol("fallback");
function m1(param_1) {
  for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
    param_1[numericVal]();
  }
}
function n2(param_1, param_2, _0x3abf2a = {}) {
  let itemList = [];
  let itemList_1 = [];
  let itemList_2 = [];
  let numericVal = 0;
  let varData_46 = param_2.length > 1 ? [] : null;
  M1(() => m1(itemList_2));
  return () => {
    let varData_47 = param_1() || [];
    let varData_48;
    let varData_49;
    varData_47[f1];
    return T(() => {
      let varData_50 = varData_47.length;
      let varData_51;
      let varData_52;
      let varData_53;
      let varData_54;
      let varData_55;
      let varData_56;
      let varData_57;
      let varData_58;
      let varData_59;
      if (varData_50 === 0) {
        if (numericVal !== 0) {
          m1(itemList_2);
          itemList_2 = [];
          itemList = [];
          itemList_1 = [];
          numericVal = 0;
          varData_46 &&= [];
        }
        if (_0x3abf2a.fallback) {
          itemList = [t2];
          itemList_1[0] = z(param_1_1 => {
            itemList_2[0] = param_1_1;
            return _0x3abf2a.fallback();
          });
          numericVal = 1;
        }
      } else if (numericVal === 0) {
        itemList_1 = new Array(varData_50);
        varData_49 = 0;
        for (; varData_49 < varData_50; varData_49++) {
          itemList[varData_49] = varData_47[varData_49];
          itemList_1[varData_49] = z(handleAction_3);
        }
        numericVal = varData_50;
      } else {
        varData_53 = new Array(varData_50);
        varData_54 = new Array(varData_50);
        if (varData_46) {
          varData_55 = new Array(varData_50);
        }
        varData_56 = 0;
        varData_57 = Math.min(numericVal, varData_50);
        for (; varData_56 < varData_57 && itemList[varData_56] === varData_47[varData_56]; varData_56++);
        varData_57 = numericVal - 1;
        varData_58 = varData_50 - 1;
        for (; varData_57 >= varData_56 && varData_58 >= varData_56 && itemList[varData_57] === varData_47[varData_58]; varData_57--, varData_58--) {
          varData_53[varData_58] = itemList_1[varData_57];
          varData_54[varData_58] = itemList_2[varData_57];
          if (varData_46) {
            varData_55[varData_58] = varData_46[varData_57];
          }
        }
        varData_51 = new Map();
        varData_52 = new Array(varData_58 + 1);
        varData_49 = varData_58;
        for (; varData_49 >= varData_56; varData_49--) {
          varData_59 = varData_47[varData_49];
          varData_48 = varData_51.get(varData_59);
          varData_52[varData_49] = varData_48 === undefined ? -1 : varData_48;
          varData_51.set(varData_59, varData_49);
        }
        for (varData_48 = varData_56; varData_48 <= varData_57; varData_48++) {
          varData_59 = itemList[varData_48];
          varData_49 = varData_51.get(varData_59);
          if (varData_49 !== undefined && varData_49 !== -1) {
            varData_53[varData_49] = itemList_1[varData_48];
            varData_54[varData_49] = itemList_2[varData_48];
            if (varData_46) {
              varData_55[varData_49] = varData_46[varData_48];
            }
            varData_49 = varData_52[varData_49];
            varData_51.set(varData_59, varData_49);
          } else {
            itemList_2[varData_48]();
          }
        }
        for (varData_49 = varData_56; varData_49 < varData_50; varData_49++) {
          if (varData_49 in varData_53) {
            itemList_1[varData_49] = varData_53[varData_49];
            itemList_2[varData_49] = varData_54[varData_49];
            if (varData_46) {
              varData_46[varData_49] = varData_55[varData_49];
              varData_46[varData_49](varData_49);
            }
          } else {
            itemList_1[varData_49] = z(handleAction_3);
          }
        }
        itemList_1 = itemList_1.slice(0, numericVal = varData_50);
        itemList = varData_47.slice(0);
      }
      return itemList_1;
    });
    function handleAction_3(param_1_1) {
      itemList_2[varData_49] = param_1_1;
      if (varData_46) {
        const [_0x18cfac, _0x18815e] = K(varData_49);
        varData_46[varData_49] = _0x18815e;
        return param_2(varData_47[varData_49], _0x18cfac);
      }
      return param_2(varData_47[varData_49]);
    }
  };
}
function d(param_1, param_2) {
  return T(() => param_1(param_2 || {}));
}
const T1 = param_1 => "Stale read from <" + param_1 + ">.";
function q(param_1) {
  const varData_60 = "fallback" in param_1 && {
    fallback: () => param_1.fallback
  };
  return U(n2(() => param_1.each, param_1.children, varData_60 || undefined));
}
function k(param_1) {
  const varData_61 = param_1.keyed;
  const varData_62 = U(() => param_1.when, undefined, {
    equals: (param_1_1, param_2) => varData_61 ? param_1_1 === param_2 : !param_1_1 == !param_2
  });
  return U(() => {
    const varData_63 = varData_62();
    if (varData_63) {
      const varData_64 = param_1.children;
      if (typeof varData_64 == "function" && varData_64.length > 0) {
        return T(() => varData_64(varData_61 ? varData_63 : () => {
          if (!T(varData_62)) {
            throw T1("Show");
          }
          return param_1.when;
        }));
      } else {
        return varData_64;
      }
    }
    return param_1.fallback;
  }, undefined, undefined);
}
function $1(param_1) {
  let isDisabled = false;
  const varData_65 = (param_1_1, param_2) => param_1_1[0] === param_2[0] && (isDisabled ? param_1_1[1] === param_2[1] : !param_1_1[1] == !param_2[1]) && param_1_1[2] === param_2[2];
  const varData_66 = J1(() => param_1.children);
  const varData_67 = U(() => {
    let varData_68 = varData_66();
    if (!Array.isArray(varData_68)) {
      varData_68 = [varData_68];
    }
    for (let numericVal = 0; numericVal < varData_68.length; numericVal++) {
      const varData_69 = varData_68[numericVal].when;
      if (varData_69) {
        isDisabled = !!varData_68[numericVal].keyed;
        return [numericVal, varData_69, varData_68[numericVal]];
      }
    }
    return [-1];
  }, undefined, {
    equals: varData_65
  });
  return U(() => {
    const [_0x54d9e4, _0x614ef3, _0x338c0a] = varData_67();
    if (_0x54d9e4 < 0) {
      return param_1.fallback;
    }
    const varData_70 = _0x338c0a.children;
    if (typeof varData_70 == "function" && varData_70.length > 0) {
      return T(() => varData_70(isDisabled ? _0x614ef3 : () => {
        if (T(varData_67)[0] !== _0x54d9e4) {
          throw T1("Match");
        }
        return _0x338c0a.when;
      }));
    } else {
      return varData_70;
    }
  }, undefined, undefined);
}
function u1(param_1) {
  return param_1;
}
function s2(param_1, param_2, param_3) {
  let varData_71 = param_3.length;
  let varData_72 = param_2.length;
  let varData_73 = varData_71;
  let numericVal = 0;
  let numericVal_1 = 0;
  let varData_74 = param_2[varData_72 - 1].nextSibling;
  let varData_75 = null;
  while (numericVal < varData_72 || numericVal_1 < varData_73) {
    if (param_2[numericVal] === param_3[numericVal_1]) {
      numericVal++;
      numericVal_1++;
      continue;
    }
    while (param_2[varData_72 - 1] === param_3[varData_73 - 1]) {
      varData_72--;
      varData_73--;
    }
    if (varData_72 === numericVal) {
      const varData_76 = varData_73 < varData_71 ? numericVal_1 ? param_3[numericVal_1 - 1].nextSibling : param_3[varData_73 - numericVal_1] : varData_74;
      while (numericVal_1 < varData_73) {
        param_1.insertBefore(param_3[numericVal_1++], varData_76);
      }
    } else if (varData_73 === numericVal_1) {
      while (numericVal < varData_72) {
        if (!varData_75 || !varData_75.has(param_2[numericVal])) {
          param_2[numericVal].remove();
        }
        numericVal++;
      }
    } else if (param_2[numericVal] === param_3[varData_73 - 1] && param_3[numericVal_1] === param_2[varData_72 - 1]) {
      const varData_77 = param_2[--varData_72].nextSibling;
      param_1.insertBefore(param_3[numericVal_1++], param_2[numericVal++].nextSibling);
      param_1.insertBefore(param_3[--varData_73], varData_77);
      param_2[varData_72] = param_3[varData_73];
    } else {
      if (!varData_75) {
        varData_75 = new Map();
        let varData_78 = numericVal_1;
        while (varData_78 < varData_73) {
          varData_75.set(param_3[varData_78], varData_78++);
        }
      }
      const varData_79 = varData_75.get(param_2[numericVal]);
      if (varData_79 != null) {
        if (numericVal_1 < varData_79 && varData_79 < varData_73) {
          let varData_80 = numericVal;
          let numericVal_2 = 1;
          let varData_81;
          while (++varData_80 < varData_72 && varData_80 < varData_73 && (varData_81 = varData_75.get(param_2[varData_80])) != null && varData_81 === varData_79 + numericVal_2) {
            numericVal_2++;
          }
          if (numericVal_2 > varData_79 - numericVal_1) {
            const varData_82 = param_2[numericVal];
            while (numericVal_1 < varData_79) {
              param_1.insertBefore(param_3[numericVal_1++], varData_82);
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
const _1 = "_$DX_DELEGATE";
function i2(param_1, param_2, param_3, _0x10cbcf = {}) {
  let varData_83;
  z(param_1_1 => {
    varData_83 = param_1_1;
    if (param_2 === document) {
      param_1();
    } else {
      g(param_2, param_1(), param_2.firstChild ? null : undefined, param_3);
    }
  }, _0x10cbcf.owner);
  return () => {
    varData_83();
    param_2.textContent = "";
  };
}
function v(param_1, param_2, param_3) {
  let varData_84;
  const varData_85 = () => {
    const varData_86 = document.createElement("template");
    varData_86.innerHTML = param_1;
    if (param_3) {
      return varData_86.content.firstChild.firstChild;
    } else {
      return varData_86.content.firstChild;
    }
  };
  const varData_87 = param_2 ? () => T(() => document.importNode(varData_84 ||= varData_85(), true)) : () => (varData_84 ||= varData_85()).cloneNode(true);
  varData_87.cloneNode = varData_87;
  return varData_87;
}
function y1(param_1, _0x4f3dce = window.document) {
  const varData_88 = _0x4f3dce[_1] ||= new Set();
  for (let numericVal = 0, loopIdx = param_1.length; numericVal < loopIdx; numericVal++) {
    const varData_89 = param_1[numericVal];
    if (!varData_88.has(varData_89)) {
      varData_88.add(varData_89);
      _0x4f3dce.addEventListener(varData_89, l2);
    }
  }
}
function B1(param_1, param_2, param_3) {
  if (param_3 == null) {
    param_1.removeAttribute(param_2);
  } else {
    param_1.setAttribute(param_2, param_3);
  }
}
function V1(param_1, param_2) {
  if (param_2 == null) {
    param_1.removeAttribute("class");
  } else {
    param_1.className = param_2;
  }
}
function D1(param_1, param_2, param_3) {
  if (!param_2) {
    if (param_3) {
      return B1(param_1, "style");
    } else {
      return param_2;
    }
  }
  const varData_90 = param_1.style;
  if (typeof param_2 == "string") {
    return varData_90.cssText = param_2;
  }
  if (typeof param_3 == "string") {
    varData_90.cssText = param_3 = undefined;
  }
  param_3 ||= {};
  param_2 ||= {};
  let varData_91;
  let varData_92;
  for (varData_92 in param_3) {
    if (param_2[varData_92] == null) {
      varData_90.removeProperty(varData_92);
    }
    delete param_3[varData_92];
  }
  for (varData_92 in param_2) {
    varData_91 = param_2[varData_92];
    if (varData_91 !== param_3[varData_92]) {
      varData_90.setProperty(varData_92, varData_91);
      param_3[varData_92] = varData_91;
    }
  }
  return param_3;
}
function g(param_1, param_2, param_3, param_4) {
  if (param_3 !== undefined && !param_4) {
    param_4 = [];
  }
  if (typeof param_2 != "function") {
    return i1(param_1, param_2, param_4, param_3);
  }
  D(param_1_1 => i1(param_1, param_2(), param_1_1, param_3), param_4);
}
function l2(param_1) {
  const varData_93 = "$$" + param_1.type;
  let varData_94 = param_1.composedPath && param_1.composedPath()[0] || param_1.target;
  if (param_1.target !== varData_94) {
    Object.defineProperty(param_1, "target", {
      configurable: true,
      value: varData_94
    });
  }
  Object.defineProperty(param_1, "currentTarget", {
    configurable: true,
    get() {
      return varData_94 || document;
    }
  });
  while (varData_94) {
    const varData_95 = varData_94[varData_93];
    if (varData_95 && !varData_94.disabled) {
      const varData_96 = varData_94[varData_93 + "Data"];
      if (varData_96 !== undefined) {
        varData_95.call(varData_94, varData_96, param_1);
      } else {
        varData_95.call(varData_94, param_1);
      }
      if (param_1.cancelBubble) {
        return;
      }
    }
    varData_94 = varData_94._$host || varData_94.parentNode || varData_94.host;
  }
}
function i1(param_1, param_2, param_3, param_4, param_5) {
  while (typeof param_3 == "function") {
    param_3 = param_3();
  }
  if (param_2 === param_3) {
    return param_3;
  }
  const varData_97 = typeof param_2;
  const varData_98 = param_4 !== undefined;
  param_1 = varData_98 && param_3[0] && param_3[0].parentNode || param_1;
  if (varData_97 === "string" || varData_97 === "number") {
    if (varData_97 === "number") {
      param_2 = param_2.toString();
    }
    if (varData_98) {
      let varData_99 = param_3[0];
      if (varData_99 && varData_99.nodeType === 3) {
        varData_99.data = param_2;
      } else {
        varData_99 = document.createTextNode(param_2);
      }
      param_3 = R(param_1, param_3, param_4, varData_99);
    } else if (param_3 !== "" && typeof param_3 == "string") {
      param_3 = param_1.firstChild.data = param_2;
    } else {
      param_3 = param_1.textContent = param_2;
    }
  } else if (param_2 == null || varData_97 === "boolean") {
    param_3 = R(param_1, param_3, param_4);
  } else {
    if (varData_97 === "function") {
      D(() => {
        let varData_100 = param_2();
        while (typeof varData_100 == "function") {
          varData_100 = varData_100();
        }
        param_3 = i1(param_1, varData_100, param_3, param_4);
      });
      return () => param_3;
    }
    if (Array.isArray(param_2)) {
      const itemList = [];
      const varData_101 = param_3 && Array.isArray(param_3);
      if (g1(itemList, param_2, param_3, param_5)) {
        D(() => param_3 = i1(param_1, itemList, param_3, param_4, true));
        return () => param_3;
      }
      if (itemList.length === 0) {
        param_3 = R(param_1, param_3, param_4);
        if (varData_98) {
          return param_3;
        }
      } else if (varData_101) {
        if (param_3.length === 0) {
          S1(param_1, itemList, param_4);
        } else {
          s2(param_1, param_3, itemList);
        }
      } else {
        if (param_3) {
          R(param_1);
        }
        S1(param_1, itemList);
      }
      param_3 = itemList;
    } else if (param_2.nodeType) {
      if (Array.isArray(param_3)) {
        if (varData_98) {
          return param_3 = R(param_1, param_3, param_4, param_2);
        }
        R(param_1, param_3, null, param_2);
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
function g1(param_1, param_2, param_3, param_4) {
  let isDisabled = false;
  for (let numericVal = 0, loopIdx = param_2.length; numericVal < loopIdx; numericVal++) {
    let varData_102 = param_2[numericVal];
    let varData_103 = param_3 && param_3[numericVal];
    let varData_104;
    if (varData_102 != null && varData_102 !== true && varData_102 !== false) {
      if ((varData_104 = typeof varData_102) == "object" && varData_102.nodeType) {
        param_1.push(varData_102);
      } else if (Array.isArray(varData_102)) {
        isDisabled = g1(param_1, varData_102, varData_103) || isDisabled;
      } else if (varData_104 === "function") {
        if (param_4) {
          while (typeof varData_102 == "function") {
            varData_102 = varData_102();
          }
          isDisabled = g1(param_1, Array.isArray(varData_102) ? varData_102 : [varData_102], Array.isArray(varData_103) ? varData_103 : [varData_103]) || isDisabled;
        } else {
          param_1.push(varData_102);
          isDisabled = true;
        }
      } else {
        const varData_105 = String(varData_102);
        if (varData_103 && varData_103.nodeType === 3 && varData_103.data === varData_105) {
          param_1.push(varData_103);
        } else {
          param_1.push(document.createTextNode(varData_105));
        }
      }
    }
  }
  return isDisabled;
}
function S1(param_1, param_2, _0x10ce9b = null) {
  for (let numericVal = 0, loopIdx = param_2.length; numericVal < loopIdx; numericVal++) {
    param_1.insertBefore(param_2[numericVal], _0x10ce9b);
  }
}
function R(param_1, param_2, param_3, param_4) {
  if (param_3 === undefined) {
    return param_1.textContent = "";
  }
  const varData_106 = param_4 || document.createTextNode("");
  if (param_2.length) {
    let isDisabled = false;
    for (let loopIdx = param_2.length - 1; loopIdx >= 0; loopIdx--) {
      const varData_107 = param_2[loopIdx];
      if (varData_106 !== varData_107) {
        const varData_108 = varData_107.parentNode === param_1;
        if (!isDisabled && !loopIdx) {
          if (varData_108) {
            param_1.replaceChild(varData_106, varData_107);
          } else {
            param_1.insertBefore(varData_106, param_3);
          }
        } else if (varData_108) {
          varData_107.remove();
        }
      } else {
        isDisabled = true;
      }
    }
  } else {
    param_1.insertBefore(varData_106, param_3);
  }
  return [varData_106];
}
const h1 = Symbol("store-raw");
const Y = Symbol("store-node");
function j1(param_1) {
  let varData_109 = param_1[I];
  if (!varData_109 && (Object.defineProperty(param_1, I, {
    value: varData_109 = new Proxy(param_1, c2)
  }), !Array.isArray(param_1))) {
    const keysList = Object.keys(param_1);
    const varData_110 = Object.getOwnPropertyDescriptors(param_1);
    for (let numericVal = 0, loopIdx = keysList.length; numericVal < loopIdx; numericVal++) {
      const varData_111 = keysList[numericVal];
      if (varData_110[varData_111].get) {
        Object.defineProperty(param_1, varData_111, {
          enumerable: varData_110[varData_111].enumerable,
          get: varData_110[varData_111].get.bind(varData_109)
        });
      }
    }
  }
  return varData_109;
}
function l1(param_1) {
  let varData_112;
  return param_1 != null && typeof param_1 == "object" && (param_1[I] || !(varData_112 = Object.getPrototypeOf(param_1)) || varData_112 === Object.prototype || Array.isArray(param_1));
}
function J(param_1, _0x4ace0b = new Set()) {
  let varData_113;
  let varData_114;
  let varData_115;
  let varData_116;
  if (varData_113 = param_1 != null && param_1[h1]) {
    return varData_113;
  }
  if (!l1(param_1) || _0x4ace0b.has(param_1)) {
    return param_1;
  }
  if (Array.isArray(param_1)) {
    if (Object.isFrozen(param_1)) {
      param_1 = param_1.slice(0);
    } else {
      _0x4ace0b.add(param_1);
    }
    for (let numericVal = 0, loopIdx = param_1.length; numericVal < loopIdx; numericVal++) {
      varData_115 = param_1[numericVal];
      if ((varData_114 = J(varData_115, _0x4ace0b)) !== varData_115) {
        param_1[numericVal] = varData_114;
      }
    }
  } else {
    if (Object.isFrozen(param_1)) {
      param_1 = Object.assign({}, param_1);
    } else {
      _0x4ace0b.add(param_1);
    }
    const keysList = Object.keys(param_1);
    const varData_117 = Object.getOwnPropertyDescriptors(param_1);
    for (let numericVal = 0, loopIdx = keysList.length; numericVal < loopIdx; numericVal++) {
      varData_116 = keysList[numericVal];
      if (!varData_117[varData_116].get) {
        varData_115 = param_1[varData_116];
        if ((varData_114 = J(varData_115, _0x4ace0b)) !== varData_115) {
          param_1[varData_116] = varData_114;
        }
      }
    }
  }
  return param_1;
}
function v1(param_1) {
  let varData_118 = param_1[Y];
  if (!varData_118) {
    Object.defineProperty(param_1, Y, {
      value: varData_118 = Object.create(null)
    });
  }
  return varData_118;
}
function p1(param_1, param_2, param_3) {
  return param_1[param_2] ||= U1(param_3);
}
function r2(param_1, param_2) {
  const varData_119 = Reflect.getOwnPropertyDescriptor(param_1, param_2);
  if (!!varData_119 && !varData_119.get && !!varData_119.configurable && param_2 !== I && param_2 !== Y) {
    delete varData_119.value;
    delete varData_119.writable;
    varData_119.get = () => param_1[I][param_2];
  }
  return varData_119;
}
function N1(param_1) {
  if (Z1()) {
    const varData_120 = v1(param_1);
    (varData_120._ ||= U1())();
  }
}
function o2(param_1) {
  N1(param_1);
  return Reflect.ownKeys(param_1);
}
function U1(param_1) {
  const [_0x426c98, _0x598c2b] = K(param_1, {
    equals: false,
    internal: true
  });
  _0x426c98.$ = _0x598c2b;
  return _0x426c98;
}
const c2 = {
  get(param_1, param_2, param_3) {
    if (param_2 === h1) {
      return param_1;
    }
    if (param_2 === I) {
      return param_3;
    }
    if (param_2 === f1) {
      N1(param_1);
      return param_3;
    }
    const varData_121 = v1(param_1);
    const varData_122 = varData_121[param_2];
    let varData_123 = varData_122 ? varData_122() : param_1[param_2];
    if (param_2 === Y || param_2 === "__proto__") {
      return varData_123;
    }
    if (!varData_122) {
      const varData_124 = Object.getOwnPropertyDescriptor(param_1, param_2);
      if (Z1() && (typeof varData_123 != "function" || param_1.hasOwnProperty(param_2)) && (!varData_124 || !varData_124.get)) {
        varData_123 = p1(varData_121, param_2, varData_123)();
      }
    }
    if (l1(varData_123)) {
      return j1(varData_123);
    } else {
      return varData_123;
    }
  },
  has(param_1, param_2) {
    if (param_2 === h1 || param_2 === I || param_2 === f1 || param_2 === Y || param_2 === "__proto__") {
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
  ownKeys: o2,
  getOwnPropertyDescriptor: r2
};
function r1(param_1, param_2, param_3, _0x550e4e = false) {
  if (!_0x550e4e && param_1[param_2] === param_3) {
    return;
  }
  const varData_125 = param_1[param_2];
  const varData_126 = param_1.length;
  if (param_3 === undefined) {
    delete param_1[param_2];
  } else {
    param_1[param_2] = param_3;
  }
  let varData_127 = v1(param_1);
  let varData_128;
  if (varData_128 = p1(varData_127, param_2, varData_125)) {
    varData_128.$(() => param_3);
  }
  if (Array.isArray(param_1) && param_1.length !== varData_126) {
    for (let loopIdx = param_1.length; loopIdx < varData_126; loopIdx++) {
      if (varData_128 = varData_127[loopIdx]) {
        varData_128.$();
      }
    }
    if (varData_128 = p1(varData_127, "length", varData_126)) {
      varData_128.$(param_1.length);
    }
  }
  if (varData_128 = varData_127._) {
    varData_128.$();
  }
}
function F1(param_1, param_2) {
  const keysList = Object.keys(param_2);
  for (let numericVal = 0; numericVal < keysList.length; numericVal += 1) {
    const varData_129 = keysList[numericVal];
    r1(param_1, varData_129, param_2[varData_129]);
  }
}
function C2(param_1, param_2) {
  if (typeof param_2 == "function") {
    param_2 = param_2(param_1);
  }
  param_2 = J(param_2);
  if (Array.isArray(param_2)) {
    if (param_1 === param_2) {
      return;
    }
    let numericVal = 0;
    let varData_130 = param_2.length;
    for (; numericVal < varData_130; numericVal++) {
      const varData_131 = param_2[numericVal];
      if (param_1[numericVal] !== varData_131) {
        r1(param_1, numericVal, varData_131);
      }
    }
    r1(param_1, "length", varData_130);
  } else {
    F1(param_1, param_2);
  }
}
function X(param_1, param_2, _0x572acf = []) {
  let varData_132;
  let varData_133 = param_1;
  if (param_2.length > 1) {
    varData_132 = param_2.shift();
    const varData_134 = typeof varData_132;
    const varData_135 = Array.isArray(param_1);
    if (Array.isArray(varData_132)) {
      for (let numericVal = 0; numericVal < varData_132.length; numericVal++) {
        X(param_1, [varData_132[numericVal]].concat(param_2), _0x572acf);
      }
      return;
    } else if (varData_135 && varData_134 === "function") {
      for (let numericVal = 0; numericVal < param_1.length; numericVal++) {
        if (varData_132(param_1[numericVal], numericVal)) {
          X(param_1, [numericVal].concat(param_2), _0x572acf);
        }
      }
      return;
    } else if (varData_135 && varData_134 === "object") {
      const {
        from: _0x26b955 = 0,
        to: _0x50f86f = param_1.length - 1,
        by: _0x614f7e = 1
      } = varData_132;
      for (let loopIdx = _0x26b955; loopIdx <= _0x50f86f; loopIdx += _0x614f7e) {
        X(param_1, [loopIdx].concat(param_2), _0x572acf);
      }
      return;
    } else if (param_2.length > 1) {
      X(param_1[varData_132], param_2, [varData_132].concat(_0x572acf));
      return;
    }
    varData_133 = param_1[varData_132];
    _0x572acf = [varData_132].concat(_0x572acf);
  }
  let varData_136 = param_2[0];
  if ((typeof varData_136 != "function" || !(varData_136 = varData_136(varData_133, _0x572acf), varData_136 === varData_133)) && (varData_132 !== undefined || varData_136 != null)) {
    varData_136 = J(varData_136);
    if (varData_132 === undefined || l1(varData_133) && l1(varData_136) && !Array.isArray(varData_136)) {
      F1(varData_133, varData_136);
    } else {
      r1(param_1, varData_132, varData_136);
    }
  }
}
function a2(...[_0x2c1822, _0x335873]) {
  const varData_137 = J(_0x2c1822 || {});
  const varData_138 = Array.isArray(varData_137);
  const varData_139 = j1(varData_137);
  function handleAction_4(..._0x11bef8) {
    X1(() => {
      if (varData_138 && _0x11bef8.length === 1) {
        C2(varData_137, _0x11bef8[0]);
      } else {
        X(varData_137, _0x11bef8);
      }
    });
  }
  return [varData_139, handleAction_4];
}
const u2 = param_1 => {
  if (!u.permissionState || u.permissionState != "owner") {
    return;
  }
  const varData_140 = Object.keys(u.toggle)[param_1];
  O(param_1_1 => {
    const varData_141 = {
      ...param_1_1.toggle,
      [Object.keys(param_1_1.toggle)[param_1]]: {
        ...param_1_1.toggle[Object.keys(param_1_1.toggle)[param_1]],
        state: !param_1_1.toggle[Object.keys(param_1_1.toggle)[param_1]].state
      }
    };
    return {
      ...param_1_1,
      toggle: varData_141
    };
  });
  _0xdfacf8.execute("propertySettings:setEntitySet", u.street, varData_140, u.toggle[varData_140].state);
  if (varData_140.includes("Alert")) {
    _0xdfacf8.execute("propertySettings:updateSecurityAlert", u.street, u.toggle.copsAlert.state, u.toggle.ownerAlert.state);
  }
  if (varData_140 === "security") {
    _0xdfacf8.execute("propertySettings:updateSecurityState", u.street, u.toggle.security.state);
  }
};
const f2 = (param_1, param_2) => {
  if (!!u.permissionState && u.permissionState == "owner") {
    O(param_1_1 => {
      const varData_142 = param_1_1.permissions.users[param_1];
      if (!varData_142) {
        console.error("User with key " + param_1 + " not found");
        return param_1_1;
      }
      const varData_143 = varData_142.permissions;
      const varData_144 = varData_143.indexOf(param_2);
      const varData_145 = varData_144 === -1 ? [...varData_143, param_2] : [...varData_143.slice(0, varData_144), ...varData_143.slice(varData_144 + 1)];
      const varData_146 = {
        ...varData_142,
        permissions: varData_145
      };
      const varData_147 = {
        ...param_1_1.permissions.users,
        [param_1]: varData_146
      };
      const varData_148 = {
        ...param_1_1.permissions,
        users: varData_147
      };
      let isDisabled = false;
      if (varData_145.includes(param_2)) {
        isDisabled = true;
      }
      _0xdfacf8.execute("propertySettings:setPermission", u.street, varData_142.cid, param_2, isDisabled);
      return {
        ...param_1_1,
        permissions: varData_148
      };
    });
  }
};
const d2 = param_1 => {
  if (!!u.permissionState && u.permissionState == "owner") {
    O(param_1_1 => {
      const varData_149 = {
        ...param_1_1.permissions.users
      };
      _0xdfacf8.execute("propertySettings:removePermission", u.street, varData_149[param_1].cid);
      delete varData_149[param_1];
      const varData_150 = {
        ...param_1_1.permissions,
        users: varData_149
      };
      return {
        ...param_1_1,
        permissions: varData_150
      };
    });
  }
};
const g2 = param_1 => {
  if (!!u.permissionState && u.permissionState == "owner") {
    O(param_1_1 => {
      const varData_151 = {
        ...param_1_1.toggle,
        wallcolor: {
          ...param_1_1.toggle.wallcolor,
          icon: param_1
        }
      };
      return {
        ...param_1_1,
        toggle: varData_151
      };
    });
    _0xdfacf8.execute("propertySettings:setColor", u.street, param_1, u.interfaceState);
  }
};
_0xdfacf8.register("propertySettings:interfacestate", async param_1 => {
  O(param_1_1 => ({
    ...param_1_1,
    interfaceState: param_1
  }));
});
_0xdfacf8.register("propertySettings:PermissionState", async param_1 => {
  O(param_1_1 => ({
    ...param_1_1,
    permissionState: param_1
  }));
});
_0xdfacf8.register("propertySettings:knownPermissionHolders", async param_1 => {
  O(param_1_1 => ({
    ...param_1_1,
    permissions: {
      ...param_1_1.permissions,
      users: param_1
    }
  }));
});
_0xdfacf8.register("propertySettings:setWallColor", async param_1 => {
  O(param_1_1 => ({
    ...param_1_1,
    toggle: {
      ...param_1_1.toggle,
      wallcolor: {
        ...param_1_1.toggle.wallcolor,
        icon: param_1
      }
    }
  }));
});
_0xdfacf8.register("propertySettings:setStairs", async (param_1, param_2) => {
  O(param_1_1 => ({
    ...param_1_1,
    toggle: {
      ...param_1_1.toggle,
      stairs: {
        ...param_1_1.toggle.stairs,
        state: param_1,
        show: param_2
      }
    }
  }));
});
_0xdfacf8.register("propertySettings:setStreet", async param_1 => {
  O(param_1_1 => ({
    ...param_1_1,
    street: param_1
  }));
});
_0xdfacf8.register("propertySettings:setConsumptionData", async param_1 => {
  O(param_1_1 => ({
    ...param_1_1,
    consumption: param_1
  }));
});
_0xdfacf8.register("propertySettings:setSecurityAlert", async (param_1, param_2) => {
  O(param_1_1 => ({
    ...param_1_1,
    toggle: {
      ...param_1_1.toggle,
      copsAlert: {
        ...param_1_1.toggle.copsAlert,
        state: param_1
      },
      ownerAlert: {
        ...param_1_1.toggle.ownerAlert,
        state: param_2
      }
    }
  }));
});
_0xdfacf8.register("propertySettings:setSecurityState", async param_1 => {
  O(param_1_1 => ({
    ...param_1_1,
    toggle: {
      ...param_1_1.toggle,
      security: {
        ...param_1_1.toggle.security,
        state: param_1
      }
    }
  }));
});
const [u, O] = a2({
  interfaceState: "none",
  permissionState: "owner",
  street: "LA 843, 4th Street, 10 - 12, Los Santos",
  toggle: {
    wallcolor: {
      icon: 2,
      title: "Wall Color",
      description: "Color your walls"
    },
    stairs: {
      icon: "stairs",
      title: "Stairs",
      description: "Add or remove stairs",
      show: true,
      state: false
    },
    security: {
      icon: "security",
      title: "Security System",
      description: "Toggle security system",
      show: true,
      state: true
    },
    copsAlert: {
      icon: "security",
      title: "Alert Cops",
      description: "Toggle alerts for cops",
      show: true,
      state: true
    },
    ownerAlert: {
      icon: "security",
      title: "Alert Owner",
      description: "Toggle alerts for owner",
      show: true,
      state: true
    }
  },
  permissions: {
    available: ["furniture", "inventory"],
    users: {
      32: {
        name: "John Doe",
        status: "owner",
        permissions: ["furniture", "inventory"],
        cid: 1004
      }
    }
  },
  consumption: {
    property: "",
    power: 0,
    water: 0,
    gas: 0,
    waste: 0,
    heating: 0,
    cooling: 0,
    light: 0,
    happiness: 0,
    ventilation: 0,
    humidity: 0
  }
});
const [h2] = K("https://assets.nopixel.net/dev/images");
const I1 = ["#ffffff", "#ffd640", "#e76f33", "#e63b43", "#aa272d", "#ebebeb", "#d7d7d7", "#c1c1c1", "#acacac", "#959595", "#7d7d7d", "#636363", "#464646", "#262626", "#000000", "#a67c52", "#8d6339", "#744d24", "#603a16", "#412414", "#f9ed25", "#d8e028", "#c0d441", "#8dc643", "#6eb650", "#23b574", "#3db54b", "#00a652", "#009144", "#006837", "#03a99d", "#afdbe6", "#56b9e0", "#00b2d6", "#29aae3", "#1072bb", "#2c3790", "#262161", "#683093", "#932b8e", "#f07893", "#ed008c", "#ed257b", "#d61e5e", "#9d1f5f", "#fbb03b", "#f79321", "#f05d27", "#ed2528", "#cd2051"];
const p2 = v("<div class=\"leftBar-container\"><div class=\"text-content\"><header><p class=\"retroland p-cyan\">NoPixel</p><p class=\"nekst400 p-white\">House Settings</header><div class=\"texts\"><p class=\"nekst400 p-white\">MANAGE<br><span>SECURITY</span><br>OF HOUSE</div></div><img>");
const w2 = param_1 => (() => {
  const varData_152 = p2();
  const varData_153 = varData_152.firstChild;
  const varData_154 = varData_153.nextSibling;
  D(() => B1(varData_154, "src", h2() + "/realtor/leftbar.png"));
  return varData_152;
})();
const y2 = v("<div class=\"icon-svg-container\">");
const G1 = {
  stairs: "<svg width=\"39\" height=\"39\" viewBox=\"0 0 39 39\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M26.5036 2.14942C26.3828 2.23163 26.2215 2.38317 26.1451 2.4863C26.0086 2.67038 26.0059 2.73878 25.9879 6.31965L25.9697 9.9656L22.3238 9.9838C18.7429 10.0017 18.6745 10.0045 18.4904 10.141C18.3873 10.2174 18.2358 10.3787 18.1535 10.4995L18.0041 10.719V14.3616V18.0041H14.3616H10.719L10.4995 18.1535C10.3787 18.2358 10.2174 18.3873 10.141 18.4904C10.0045 18.6745 10.0017 18.7429 9.9838 22.3238L9.9656 25.9697L6.31965 25.9879C2.73878 26.0059 2.67038 26.0086 2.4863 26.1451C2.38317 26.2215 2.23163 26.3828 2.14942 26.5036L2 26.7231L2.00027 31.0132C2.00046 35.1768 2.00438 35.3096 2.13248 35.5196C2.20507 35.6387 2.36179 35.7954 2.48085 35.868C2.69528 35.9987 2.84935 36 19.0002 36C35.1511 36 35.3052 35.9987 35.5196 35.868C35.6387 35.7954 35.7954 35.6387 35.868 35.5196C35.9987 35.3052 36 35.1511 36 19.0002C36 2.84935 35.9987 2.69528 35.868 2.48085C35.7954 2.36179 35.6387 2.20507 35.5196 2.13248C35.3096 2.00438 35.1768 2.00046 31.0132 2.00027L26.7231 2L26.5036 2.14942Z\" fill=\"url(#paint0_radial_3_6)\"/>\n\t<defs>\n\t<radialGradient id=\"paint0_radial_3_6\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(19 19) rotate(90) scale(30.2812)\">\n\t<stop stop-color=\"white\"/>\n\t<stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"/>\n\t</radialGradient>\n\t</defs>\n\t</svg>\n\t",
  windows: "<svg width=\"39\" height=\"39\" viewBox=\"0 0 39 39\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.59459 1.15961C3.46317 1.24736 3.30033 1.42933 3.23276 1.56391C3.11682 1.79468 3.10979 2.6916 3.10972 17.2951L3.10958 32.7817H10.5275H17.9453V16.8908V1H10.8894H3.83351L3.59459 1.15961ZM20.0547 16.8908V32.7817H27.4725H34.8904V17.294C34.8904 2.35522 34.8858 1.79771 34.7602 1.56138C34.6886 1.42666 34.5257 1.24525 34.3983 1.15821L34.1665 1H27.1106H20.0547V16.8908ZM10.6159 11.8162C10.9002 12.0186 11.0768 12.47 11.0172 12.8421C10.9755 13.1028 10.8062 13.2942 9.16741 14.9338C7.72968 16.3721 7.31063 16.7527 7.10321 16.8081C6.35432 17.0082 5.66885 16.3549 5.81376 15.5792C5.85749 15.3451 6.0962 15.0756 7.59166 13.572C8.54171 12.6167 9.41695 11.7851 9.53655 11.7239C9.82448 11.5766 10.3415 11.6207 10.6159 11.8162ZM27.5635 11.818C27.6862 11.9053 27.83 12.1069 27.8994 12.2885C28.1295 12.8913 28.0739 12.9732 26.0781 14.969C24.6698 16.3773 24.2554 16.7527 24.0483 16.8081C23.2994 17.0082 22.6139 16.3549 22.7589 15.5792C22.8025 15.3453 23.0435 15.0727 24.5433 13.5606C25.497 12.599 26.3722 11.7679 26.4882 11.7137C26.7762 11.579 27.2992 11.6297 27.5635 11.818ZM14.6663 13.8237C15.1059 14.0074 15.3437 14.4981 15.2384 15.0045C15.1991 15.1935 14.4441 15.9869 11.3118 19.1305C9.08677 21.3635 7.33727 23.0644 7.20748 23.1208C6.89719 23.2555 6.66868 23.2441 6.34208 23.0775C5.89251 22.8482 5.67996 22.306 5.85496 21.8349C5.94785 21.585 13.5468 13.9577 13.8321 13.8281C14.1048 13.7042 14.3768 13.7027 14.6663 13.8237ZM31.6293 13.8409C32.0562 14.0434 32.2746 14.4882 32.1864 14.9753C32.1444 15.207 31.6716 15.7063 28.2244 19.1585C25.4071 21.9799 24.2436 23.1006 24.0731 23.1568C23.2221 23.4377 22.437 22.5244 22.8392 21.7214C22.9858 21.429 30.1878 14.1961 30.5976 13.9299C30.9548 13.6978 31.2704 13.6706 31.6293 13.8409ZM1.50935 35.0314C0.830215 35.4454 0.830215 36.4461 1.50935 36.8602C1.73639 36.9987 1.89951 37 19 37C36.1005 37 36.2636 36.9987 36.4906 36.8602C37.1698 36.4461 37.1698 35.4454 36.4906 35.0314C36.2636 34.8929 36.1005 34.8916 19 34.8916C1.89951 34.8916 1.73639 34.8929 1.50935 35.0314Z\" fill=\"url(#paint0_radial_3_5)\"/>\n\t<defs>\n\t<radialGradient id=\"paint0_radial_3_5\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(19 19) rotate(90) scale(32.0625)\">\n\t<stop stop-color=\"white\"/>\n\t<stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"/>\n\t</radialGradient>\n\t</defs>\n\t</svg>\n\t",
  backdoor: "<svg width=\"39\" height=\"39\" viewBox=\"0 0 39 39\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.1047 19.5C16.1047 30.2262 16.1303 39.0012 16.1616 39C16.1929 38.9989 19.7693 37.8894 24.1093 36.5348L32 34.0717V19.5V4.92827L24.1093 2.4652C19.7693 1.11056 16.1929 0.00114283 16.1616 1.26966e-07C16.1303 -0.00121876 16.1047 8.77379 16.1047 19.5ZM7 19.5V36.6406H10.4143H13.8285V19.5V2.35939H10.4143H7V19.5ZM22.9332 19.5V22.9281H21.7951H20.6571V19.5V16.0719H21.7951H22.9332V19.5Z\" fill=\"url(#paint0_radial_3_7)\"/>\n\t<defs>\n\t<radialGradient id=\"paint0_radial_3_7\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(19.5 19.5) rotate(90) scale(34.7344 22.2656)\">\n\t<stop stop-color=\"white\"/>\n\t<stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"/>\n\t</radialGradient>\n\t</defs>\n\t</svg>\n\t",
  heating: "<svg width=\"32\" height=\"35\" viewBox=\"0 0 32 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.16869 0.471075C4.25999 1.09798 2.9567 2.42772 2.32079 3.37669C1.32707 4.85971 0.728115 6.27648 0.257485 8.25718C0.0134107 9.28425 -0.000622831 9.45805 1.92283e-05 11.4397C0.000661288 13.2631 0.0271691 13.656 0.204011 14.4606C0.499817 15.8063 0.969346 17.0694 1.74771 18.6137C4.70301 24.4765 5.23813 27.0993 4.26302 30.9423C4.12305 31.4936 3.83403 32.3881 3.62069 32.93C3.17244 34.0685 3.17363 34.3845 3.62811 34.7644C4.04976 35.1169 4.456 35.0785 5.17795 34.6177C5.98264 34.1042 7.59953 32.4748 8.19233 31.5802C10.2612 28.4579 11.0375 24.2917 10.2554 20.5075C9.98276 19.1886 9.55387 18.0721 8.43476 15.7685C7.08258 12.9851 6.5361 11.6464 6.17994 10.2454C5.51036 7.61113 5.68674 5.14906 6.74165 2.40493C6.95096 1.86041 7.1433 1.28071 7.16898 1.11676C7.26758 0.487114 6.82832 0.00237413 6.1592 0.00237413C5.93384 0.00237413 5.66069 0.131602 5.16869 0.471075ZM15.9587 0.467065C14.0169 1.75743 12.33 4.08699 11.4663 6.67109C10.4322 9.76444 10.4292 13.2741 11.458 16.2028C11.6295 16.6907 12.2827 18.1562 12.9097 19.4594C13.5367 20.7626 14.2174 22.2595 14.4224 22.7858C15.8166 26.3651 15.8078 29.1598 14.3906 32.9242C14.0224 33.9022 13.9883 34.0552 14.0783 34.3262C14.2155 34.7391 14.569 34.9977 14.9962 34.9977C15.4466 34.9977 16.4829 34.3196 17.4126 33.4166C20.0155 30.8883 21.456 26.9862 21.2862 22.9225C21.1804 20.3879 20.7784 19.025 19.1359 15.6318C18.5293 14.3787 17.863 12.9284 17.6554 12.409C16.1833 8.72688 16.171 5.89918 17.6104 2.07594C17.9786 1.09789 18.0127 0.944879 17.9227 0.673939C17.7855 0.261012 17.432 0.00237413 17.0048 0.00237413C16.7403 0.00237413 16.492 0.112646 15.9587 0.467065ZM26.8231 0.383313C26.0088 0.904234 24.3898 2.5338 23.8062 3.41989C21.7279 6.57503 20.961 10.6961 21.7457 14.4926C22.0162 15.8017 22.447 16.9224 23.5671 19.2316C24.921 22.0227 25.4663 23.3588 25.8208 24.7537C26.4908 27.3891 26.3145 29.8506 25.2594 32.5952C25.0501 33.1397 24.8577 33.7194 24.832 33.8833C24.7334 34.513 25.1727 34.9977 25.8418 34.9977C26.5474 34.9977 28.6636 33.1362 29.6915 31.6111C30.6683 30.1621 31.36 28.4812 31.7945 26.5016C31.9733 25.6869 32 25.2993 32 23.5149C32 21.7373 31.9729 21.3412 31.7968 20.5395C31.5063 19.2167 31.0342 17.9355 30.3032 16.4855C28.7318 13.3689 27.8393 11.1254 27.4982 9.43472C27.2723 8.31468 27.2732 6.09038 27.4999 5.01473C27.7281 3.93197 27.9739 3.11614 28.4008 2.02454C28.8272 0.934217 28.8222 0.611238 28.3729 0.235676C27.9509 -0.117194 27.5448 -0.0784615 26.8231 0.383313Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  ventilation: "<svg width=\"32\" height=\"35\" viewBox=\"0 0 32 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.16869 0.471075C4.25999 1.09798 2.9567 2.42772 2.32079 3.37669C1.32707 4.85971 0.728115 6.27648 0.257485 8.25718C0.0134107 9.28425 -0.000622831 9.45805 1.92283e-05 11.4397C0.000661288 13.2631 0.0271691 13.656 0.204011 14.4606C0.499817 15.8063 0.969346 17.0694 1.74771 18.6137C4.70301 24.4765 5.23813 27.0993 4.26302 30.9423C4.12305 31.4936 3.83403 32.3881 3.62069 32.93C3.17244 34.0685 3.17363 34.3845 3.62811 34.7644C4.04976 35.1169 4.456 35.0785 5.17795 34.6177C5.98264 34.1042 7.59953 32.4748 8.19233 31.5802C10.2612 28.4579 11.0375 24.2917 10.2554 20.5075C9.98276 19.1886 9.55387 18.0721 8.43476 15.7685C7.08258 12.9851 6.5361 11.6464 6.17994 10.2454C5.51036 7.61113 5.68674 5.14906 6.74165 2.40493C6.95096 1.86041 7.1433 1.28071 7.16898 1.11676C7.26758 0.487114 6.82832 0.00237413 6.1592 0.00237413C5.93384 0.00237413 5.66069 0.131602 5.16869 0.471075ZM15.9587 0.467065C14.0169 1.75743 12.33 4.08699 11.4663 6.67109C10.4322 9.76444 10.4292 13.2741 11.458 16.2028C11.6295 16.6907 12.2827 18.1562 12.9097 19.4594C13.5367 20.7626 14.2174 22.2595 14.4224 22.7858C15.8166 26.3651 15.8078 29.1598 14.3906 32.9242C14.0224 33.9022 13.9883 34.0552 14.0783 34.3262C14.2155 34.7391 14.569 34.9977 14.9962 34.9977C15.4466 34.9977 16.4829 34.3196 17.4126 33.4166C20.0155 30.8883 21.456 26.9862 21.2862 22.9225C21.1804 20.3879 20.7784 19.025 19.1359 15.6318C18.5293 14.3787 17.863 12.9284 17.6554 12.409C16.1833 8.72688 16.171 5.89918 17.6104 2.07594C17.9786 1.09789 18.0127 0.944879 17.9227 0.673939C17.7855 0.261012 17.432 0.00237413 17.0048 0.00237413C16.7403 0.00237413 16.492 0.112646 15.9587 0.467065ZM26.8231 0.383313C26.0088 0.904234 24.3898 2.5338 23.8062 3.41989C21.7279 6.57503 20.961 10.6961 21.7457 14.4926C22.0162 15.8017 22.447 16.9224 23.5671 19.2316C24.921 22.0227 25.4663 23.3588 25.8208 24.7537C26.4908 27.3891 26.3145 29.8506 25.2594 32.5952C25.0501 33.1397 24.8577 33.7194 24.832 33.8833C24.7334 34.513 25.1727 34.9977 25.8418 34.9977C26.5474 34.9977 28.6636 33.1362 29.6915 31.6111C30.6683 30.1621 31.36 28.4812 31.7945 26.5016C31.9733 25.6869 32 25.2993 32 23.5149C32 21.7373 31.9729 21.3412 31.7968 20.5395C31.5063 19.2167 31.0342 17.9355 30.3032 16.4855C28.7318 13.3689 27.8393 11.1254 27.4982 9.43472C27.2723 8.31468 27.2732 6.09038 27.4999 5.01473C27.7281 3.93197 27.9739 3.11614 28.4008 2.02454C28.8272 0.934217 28.8222 0.611238 28.3729 0.235676C27.9509 -0.117194 27.5448 -0.0784615 26.8231 0.383313Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  power: "<svg width=\"31\" height=\"35\" viewBox=\"0 0 31 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.5349 0.145227C16.3284 0.277236 15.7687 1.36585 11.4483 10.0375C8.77819 15.3966 6.56833 19.8937 6.53739 20.0312C6.47371 20.3142 6.57895 20.7008 6.7814 20.9277C7.06958 21.2508 7.12908 21.2556 10.8767 21.2556C14.3245 21.2556 14.4049 21.2586 14.4049 21.3883C14.4049 21.4614 14.0948 24.2686 13.7159 27.6265C13.3369 30.9845 13.0271 33.8808 13.0274 34.0627C13.0279 34.4437 13.1533 34.6717 13.4672 34.8629C13.9526 35.1583 14.5267 34.9637 14.8319 34.4001C15.272 33.5875 24.3939 15.6435 24.4389 15.502C24.5741 15.0769 24.3854 14.5995 24.0223 14.448C23.8308 14.3682 23.1365 14.3509 20.1211 14.3509H16.4527L16.4909 14.1287C16.5951 13.5225 17.9652 1.33249 17.965 1.01344C17.9647 0.579197 17.7988 0.25871 17.4924 0.100517C17.2035 -0.0486514 16.8095 -0.0301933 16.5349 0.145227ZM12.5221 2.28452C7.73392 3.22219 3.67394 6.3535 1.5307 10.7618C0.793648 12.2778 0.362577 13.6726 0.115477 15.3413C-0.0240594 16.2835 -0.0407654 18.564 0.0852148 19.4781C0.790567 24.5963 3.92898 29.0219 8.48775 31.3268C9.32778 31.7516 9.69661 31.9055 10.65 32.2293L11.3111 32.4538L11.348 32.2383C11.4477 31.6571 11.7448 28.7638 11.7133 28.6819C11.6935 28.6303 11.5949 28.5674 11.4942 28.5422C10.8026 28.3689 9.27061 27.5259 8.33486 26.8038C4.53464 23.8713 2.88211 18.9211 4.173 14.3369C4.73518 12.3403 5.67346 10.7608 7.21343 9.21853C8.25626 8.17415 9.29615 7.42892 10.4446 6.90293L11.0958 6.60466L12.2064 4.38573C12.8172 3.16538 13.3075 2.16016 13.296 2.15196C13.2846 2.14369 12.9363 2.20337 12.5221 2.28452ZM19.6462 2.81461C19.5437 3.43295 19.2556 6.22634 19.2861 6.30592C19.3055 6.35637 19.5169 6.46739 19.7559 6.55264C20.6183 6.86034 21.9784 7.63838 22.7922 8.28968C26.7112 11.4261 28.2232 16.5389 26.6341 21.2808C25.6419 24.2416 23.3881 26.7602 20.5098 28.125L19.9541 28.3884L18.8159 30.6396C17.9871 32.279 17.7122 32.8809 17.8043 32.8541C17.874 32.8339 18.1929 32.7695 18.513 32.7112C21.2899 32.2044 24.0662 30.7524 26.2429 28.6684C28.8276 26.1937 30.434 23.033 30.9139 19.4781C31.0288 18.6262 31.0287 16.3376 30.9136 15.5131C30.1415 9.98133 26.5402 5.28402 21.4529 3.1731C20.8926 2.9406 19.8834 2.59243 19.7699 2.59243C19.7222 2.59243 19.6665 2.69237 19.6462 2.81461Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  cooling: "<svg width=\"32\" height=\"35\" viewBox=\"0 0 32 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.474 0.100522C15.2061 0.217467 14.9828 0.426137 14.8258 0.705822C14.7184 0.897199 14.6977 1.18755 14.6672 2.92847L14.6321 4.93096L13.0384 3.76957C11.621 2.73668 11.1634 2.46458 10.8437 2.46458C10.623 2.46458 10.212 2.63498 10.0045 2.81248C9.51999 3.22688 9.42718 3.92404 9.78708 4.44595C9.88628 4.5899 10.8899 5.36573 12.3067 6.3939L14.6615 8.10263L14.6643 11.6795L14.6672 15.2563L14.4392 15.1211C14.3138 15.0468 12.9168 14.2258 11.3348 13.2968C9.75277 12.3677 8.45025 11.6005 8.44036 11.5918C8.43047 11.5832 8.2837 10.2686 8.11434 8.67054C7.78847 5.59668 7.76791 5.49956 7.37525 5.17763C6.74637 4.66207 5.77302 4.83985 5.408 5.53687C5.22398 5.88826 5.22749 6.13965 5.44504 8.18287C5.5434 9.10627 5.61054 9.87465 5.59434 9.89051C5.57806 9.9063 4.87601 9.51582 4.03413 9.02275C3.19219 8.52968 2.38441 8.06709 2.23898 7.99484C1.66629 7.71017 0.914709 7.91652 0.59634 8.44574C0.273552 8.98242 0.302877 9.47515 0.683895 9.91628C0.780781 10.0285 1.631 10.5706 2.57327 11.1209C3.51554 11.6712 4.27807 12.1291 4.26775 12.1384C4.25744 12.1476 3.49133 12.4534 2.56527 12.8179C1.63921 13.1823 0.754893 13.5516 0.600129 13.6385C-0.214314 14.0956 -0.193969 15.3293 0.635487 15.7834C1.18593 16.0848 1.30155 16.0557 4.33447 14.8526L7.08586 13.7612L10.2444 15.6138C11.9816 16.6327 13.4031 17.4818 13.4032 17.5006C13.4033 17.5194 11.9831 18.3689 10.2471 19.3884L7.0907 21.242L4.33693 20.1496C1.28001 18.937 1.17639 18.9114 0.620123 19.229C-0.197617 19.6958 -0.208982 20.9087 0.600129 21.3628C0.754893 21.4496 1.63921 21.8189 2.56527 22.1834C3.49133 22.5479 4.25744 22.8537 4.26775 22.8629C4.27807 22.8722 3.52038 23.3275 2.584 23.8747C1.64763 24.4219 0.812 24.9421 0.727041 25.0307C0.530604 25.2355 0.355354 25.6416 0.355354 25.892C0.355354 26.1919 0.674073 26.7424 0.954979 26.9275C1.308 27.1602 1.85466 27.1975 2.22389 27.0139C2.3776 26.9375 3.19219 26.4716 4.03413 25.9785C4.87601 25.4855 5.57806 25.095 5.59434 25.1108C5.61054 25.1266 5.5434 25.895 5.44504 26.8184C5.34675 27.7418 5.26628 28.654 5.26628 28.8456C5.26628 29.9439 6.51963 30.5251 7.37525 29.8236C7.76791 29.5017 7.78847 29.4046 8.11434 26.3307C8.2837 24.7327 8.43047 23.4182 8.44036 23.4096C8.45348 23.3982 14.2365 19.9973 14.6146 19.7785C14.6435 19.7618 14.6659 21.357 14.6643 23.3234L14.6615 26.8986L12.3067 28.6074C10.8899 29.6355 9.88628 30.4114 9.78708 30.5553C9.42718 31.0772 9.51999 31.7744 10.0045 32.1888C10.212 32.3663 10.623 32.5367 10.8437 32.5367C11.1634 32.5367 11.621 32.2646 13.0384 31.2317L14.6321 30.0703L14.6672 32.0728C14.7011 34.0063 14.7078 34.0847 14.8639 34.3499C15.2714 35.0423 16.2227 35.2152 16.8189 34.7052C17.2509 34.3358 17.263 34.2635 17.263 32.0612C17.263 30.9698 17.2836 30.0769 17.3088 30.0769C17.334 30.0769 18.068 30.5967 18.9399 31.2321C20.6798 32.5 20.916 32.6182 21.4197 32.4733C22.0464 32.2929 22.4006 31.8457 22.4006 31.2352C22.4006 30.6215 22.3069 30.5312 19.6773 28.6113L17.263 26.8486V23.3024C17.263 21.352 17.2765 19.7562 17.2929 19.7562C17.3179 19.7562 23.5217 23.3703 23.5518 23.4024C23.5572 23.4081 23.6924 24.6739 23.8523 26.2151C24.0163 27.7961 24.1884 29.139 24.2471 29.2963C24.5154 30.0149 25.4816 30.3311 26.1347 29.9143C26.4074 29.7402 26.6738 29.3504 26.7125 29.0687C26.7324 28.9249 26.6641 28.0162 26.5609 27.0494C26.4577 26.0826 26.3834 25.2455 26.3958 25.1891C26.4121 25.1152 26.8975 25.3678 28.1372 26.0952L29.856 27.1037H30.3175C30.7155 27.1037 30.8146 27.0772 31.038 26.9111C31.1805 26.8053 31.3492 26.6412 31.4129 26.5464C31.6726 26.1603 31.6369 25.5083 31.3348 25.1224C31.239 25.0001 30.4656 24.5001 29.4421 23.8989C28.4902 23.3397 27.7204 22.8738 27.7313 22.8634C27.7424 22.8532 28.5689 22.5204 29.5681 22.1239C31.3964 21.3984 31.6791 21.2421 31.8968 20.8361C32.0409 20.5674 32.0213 20.0045 31.8571 19.6908C31.6059 19.2111 30.9834 18.9334 30.4644 19.0695C30.3167 19.1083 29.0333 19.6015 27.6124 20.1657C26.1914 20.7299 24.9837 21.1915 24.9286 21.1915C24.8086 21.1915 18.596 17.5706 18.596 17.5006C18.596 17.4312 24.8081 13.8098 24.9272 13.8098C24.9816 13.8098 26.2365 14.2901 27.7159 14.8771C30.5708 16.0099 30.8054 16.0735 31.2645 15.8401C32.1012 15.4146 32.2548 14.3622 31.5661 13.7731C31.4102 13.6397 30.7239 13.3311 29.6088 12.8927C28.6643 12.5214 27.848 12.1956 27.7947 12.1687C27.7312 12.1366 28.2758 11.7829 29.3732 11.1436C30.2947 10.6067 31.1179 10.1066 31.2026 10.0323C31.5668 9.71273 31.7025 8.98577 31.4773 8.56125C31.3207 8.2664 30.9108 7.94481 30.6248 7.89253C30.1056 7.79766 29.8807 7.88972 28.1262 8.9153C27.1869 9.46428 26.4073 9.88128 26.3938 9.84191C26.3803 9.80254 26.4558 8.94661 26.5617 7.93989C26.6676 6.93318 26.7337 6.00349 26.7088 5.87397C26.6539 5.58875 26.3107 5.16711 26.0103 5.01571C25.7286 4.87382 25.1448 4.87327 24.8641 5.01469C24.5867 5.15446 24.3112 5.47249 24.2184 5.75997C24.1787 5.88306 24.0143 7.24485 23.8531 8.78612C23.692 10.3274 23.556 11.5932 23.551 11.5989C23.5253 11.6287 17.3183 15.2451 17.2929 15.2451C17.2765 15.2451 17.263 13.6493 17.263 11.6989V8.15266L19.674 6.39233C21.0706 5.3727 22.1372 4.54595 22.2091 4.42736C22.6537 3.69411 22.3014 2.78227 21.4811 2.54277C20.903 2.37409 20.7598 2.4425 18.9849 3.7354C18.0872 4.38936 17.3324 4.9244 17.3078 4.9244C17.2831 4.9244 17.263 4.03148 17.263 2.94009C17.263 0.782851 17.247 0.67732 16.8682 0.332294C16.5053 0.00168895 15.9223 -0.0952301 15.474 0.100522Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  water: "<svg width=\"25\" height=\"35\" viewBox=\"0 0 25 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.0825 0.13594C11.9892 0.210748 11.8483 0.39811 11.7694 0.552376C11.6905 0.706573 10.8201 1.96087 9.83525 3.33962C5.62879 9.22839 3.5723 12.4615 2.00206 15.6546C0.432972 18.8453 -0.128041 20.9738 0.0239557 23.1593C0.377877 28.2477 3.69879 32.6573 8.42882 34.3192C9.97255 34.8616 11.2449 35.0495 12.9668 34.9892C14.815 34.9245 16.2175 34.5765 17.8612 33.7748C21.6059 31.9482 24.1565 28.499 24.8472 24.3275C25.0335 23.2024 25.0515 21.7575 24.89 20.8902C24.1111 16.7058 20.2066 9.70972 14.1877 1.71327C13.0183 0.159805 12.863 0 12.5229 0C12.3542 0 12.1881 0.0512852 12.0825 0.13594Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  humidity: "<svg width=\"24\" height=\"35\" viewBox=\"0 0 24 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.6084 0.0878274C11.1837 0.333367 8.38622 3.81178 6.80016 6.06638C3.13055 11.2827 0.892519 16.0162 0.181859 20.0642C0.0126484 21.0283 -0.0542494 22.9439 0.0492647 23.8587C0.331327 26.3501 1.25709 28.615 2.76538 30.5041C4.75442 32.9952 7.55124 34.5633 10.6939 34.9494C11.5138 35.0501 13.2797 34.9936 14.0774 34.8412C17.9213 34.1064 21.2329 31.4696 22.8633 27.8452C24.0537 25.199 24.3067 22.3604 23.6337 19.2032C22.8442 15.5002 20.5818 10.8877 17.19 6.06638C15.5483 3.73271 12.7464 0.258885 12.3565 0.0738621C12.138 -0.0298705 11.8011 -0.0235478 11.6084 0.0878274ZM10.2365 9.93929C10.5127 10.0469 10.7359 10.2051 11 10.4801C11.4857 10.9861 11.6834 11.4901 11.6834 12.2227C11.6834 12.9552 11.4857 13.4592 11 13.9652C10.5142 14.4712 10.0304 14.6772 9.32719 14.6772C8.624 14.6772 8.14018 14.4712 7.65442 13.9652C7.16866 13.4592 6.97097 12.9552 6.97097 12.2227C6.97097 10.4313 8.59158 9.29814 10.2365 9.93929ZM16.1824 10.7352C16.3979 10.8823 16.5491 11.2782 16.4946 11.5525C16.4607 11.7229 15.6045 12.656 12.6057 15.7906C10.3349 18.1642 8.67049 19.8507 8.54103 19.9092C7.99391 20.1566 7.37423 19.6185 7.49662 19.0022C7.52916 18.8381 8.43178 17.8553 11.3845 14.769C13.4994 12.5583 15.3199 10.7059 15.43 10.6524C15.6561 10.5426 15.947 10.5746 16.1824 10.7352ZM8.9112 11.4976C8.40203 11.7854 8.41037 12.6739 8.9248 12.951C9.32452 13.1663 9.83749 13.0223 10.0264 12.6418C10.4066 11.876 9.63753 11.0871 8.9112 11.4976ZM16.1059 15.2197C16.382 15.3273 16.6053 15.4855 16.8693 15.7605C17.3551 16.2666 17.5528 16.7706 17.5528 17.5031C17.5528 18.2356 17.3551 18.7396 16.8693 19.2456C16.3836 19.7516 15.8997 19.9576 15.1965 19.9576C14.4934 19.9576 14.0095 19.7516 13.5238 19.2456C13.038 18.7396 12.8403 18.2356 12.8403 17.5031C12.8403 15.7118 14.4609 14.5786 16.1059 15.2197ZM14.7806 16.7781C14.2714 17.0659 14.2797 17.9543 14.7942 18.2314C15.1939 18.4468 15.7068 18.3027 15.8957 17.9223C16.2759 17.1565 15.5069 16.3675 14.7806 16.7781ZM6.12572 21.5318C6.25411 21.5696 6.61428 21.7579 6.92609 21.9502C7.62141 22.3791 8.00898 22.5056 8.6284 22.5056C9.24955 22.5056 9.56623 22.4003 10.3519 21.9328C11.0913 21.4927 11.6309 21.3479 12.237 21.4268C12.7484 21.4934 13.0076 21.5979 13.6175 21.9837C14.2696 22.3962 14.6141 22.5056 15.262 22.5056C15.8751 22.5056 16.2588 22.3811 16.906 21.9721C17.6068 21.5292 17.8737 21.444 18.5648 21.4426C19.2643 21.4412 19.4978 21.5157 20.2666 21.9852L20.8134 22.3191L20.768 22.9856C20.5522 26.1581 18.9717 28.8456 16.4075 30.4006C12.9492 32.4978 8.62453 31.9127 5.79457 28.9647C4.24806 27.3537 3.37112 25.3069 3.21892 22.9533L3.17377 22.2545L3.63258 21.967C4.13741 21.6507 4.35804 21.5515 4.75843 21.461C5.06196 21.3925 5.77869 21.4296 6.12572 21.5318Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  gas: "<svg width=\"23\" height=\"35\" viewBox=\"0 0 23 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.3838 0.940573C10.9813 3.44688 10.3301 5.57079 9.3124 7.69642C8.01988 10.396 6.74292 12.102 4.66803 13.9017C2.20846 16.0351 0.880949 17.856 0.397724 19.7591C0.0204844 21.2449 -0.105804 23.4328 0.0943215 25.0164C0.531863 28.4795 2.01639 31.2732 4.55961 33.4196C4.93563 33.7369 5.26536 33.9968 5.29237 33.997C5.31937 33.9972 5.31139 33.9175 5.2747 33.8199C5.02707 33.1617 4.9196 31.3861 5.07343 30.4972C5.17935 29.8855 5.45222 29.0508 5.72849 28.4934C6.28717 27.3664 6.9469 26.5766 8.3689 25.3325C10.5765 23.401 11.7222 21.6529 11.9478 19.8717L11.9912 19.5297L12.2102 20.1454C12.9188 22.1367 13.8437 23.7431 14.9872 24.9688C15.9533 26.0042 16.2306 26.4159 16.5298 27.2595C16.7901 27.9936 16.8752 28.6792 16.8292 29.673C16.7613 31.1388 16.4358 32.2836 15.6202 33.9257C15.3314 34.507 15.1028 34.9903 15.1121 34.9997C15.1215 35.0092 15.4326 34.7829 15.8035 34.4969C19.1989 31.8795 21.5208 28.9429 22.4726 26.0624C22.847 24.9292 22.9453 24.3095 22.9879 22.8132C23.031 21.2998 22.9646 20.3756 22.7033 18.8548C21.8607 13.9483 19.1235 8.23381 15.4085 3.62548C14.6824 2.72465 13.5014 1.47297 12.8929 0.959316C12.4346 0.572416 11.6371 0 11.5563 0C11.5444 0 11.4668 0.423292 11.3838 0.940573Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  waste: "<svg width=\"34\" height=\"22\" viewBox=\"0 0 34 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.07897 0.169042C0.651469 0.379936 0.292268 0.7576 0.103854 1.19418C-0.085446 1.63291 -0.00669701 2.40501 0.264807 2.77201C0.71135 3.37579 11.0713 13.5408 11.4356 13.7327C11.8788 13.9662 12.6222 13.9922 13.0418 13.7889C13.1977 13.7133 14.4049 12.6072 15.7244 11.331L18.1235 9.01048L22.8277 13.6401L27.532 18.2697L23.8391 18.3127C19.7428 18.3604 19.8734 18.3419 19.3215 18.9522C18.6042 19.7453 18.7847 21.1584 19.6763 21.7314L20.0445 21.968L26.2517 21.9938C30.5631 22.0118 32.5609 21.9909 32.7927 21.9255C32.9762 21.8737 33.2625 21.7151 33.4292 21.5731C34.0341 21.0574 34.0172 21.2701 33.9896 14.5219L33.9649 8.45202L33.7212 8.09449C33.1311 7.22881 31.6757 7.05361 30.8589 7.75002C30.2308 8.28534 30.2493 8.16372 30.2002 12.0959L30.1559 15.6411L24.7117 10.2711C19.0263 4.66308 18.8976 4.55041 18.1809 4.55179C17.4396 4.55316 17.3295 4.63565 14.7848 7.09627C13.4439 8.39285 12.321 9.45377 12.2896 9.45377C12.2582 9.45377 10.1905 7.43153 7.69481 4.95981C5.1991 2.4881 3.02069 0.370733 2.85398 0.254535C2.42099 -0.0472692 1.5977 -0.0869195 1.07897 0.169042Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  light: "<svg width=\"30\" height=\"35\" viewBox=\"0 0 30 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.4028 0.150997C14.2457 0.237424 14.0529 0.424636 13.9639 0.577183C13.8116 0.838241 13.8051 0.915369 13.8039 2.47543C13.8031 3.69628 13.8268 4.1572 13.8989 4.32479C14.022 4.61087 14.3668 4.8919 14.7215 4.99508C15.0668 5.09552 15.4525 4.99938 15.7811 4.73101C16.1706 4.41279 16.1973 4.26756 16.1961 2.47543C16.1949 0.915369 16.1885 0.838241 16.0361 0.577183C15.717 0.03004 14.9749 -0.1636 14.4028 0.150997ZM6.01979 2.75659C5.72106 2.88295 5.36775 3.29717 5.31183 3.58667C5.20577 4.13539 5.28331 4.27187 6.94578 6.46317C7.36465 7.01531 7.63387 7.17408 8.15162 7.17408C8.9181 7.17408 9.4807 6.43808 9.26606 5.71624C9.2243 5.57586 8.76634 4.89347 8.24831 4.19987C7.46859 3.15577 7.2557 2.91488 7.01127 2.80001C6.67408 2.64152 6.32761 2.62634 6.01979 2.75659ZM22.985 2.80063C22.7514 2.9129 22.5225 3.17047 21.8022 4.13211C21.3109 4.7879 20.8631 5.40984 20.807 5.51425C20.6471 5.81189 20.6752 6.35993 20.8644 6.6324C21.1147 6.99315 21.4434 7.17408 21.8484 7.17408C22.3661 7.17408 22.6354 7.01531 23.0542 6.46317C24.2899 4.83446 24.6572 4.29949 24.6949 4.07392C24.7575 3.69977 24.6627 3.36616 24.4166 3.09409C24.018 2.65328 23.5087 2.54887 22.985 2.80063ZM14.2254 6.90987C10.4443 7.20348 7.31782 9.94008 6.50254 13.6698C6.33028 14.4575 6.32754 16.0848 6.49704 16.8534C6.77627 18.1195 7.30704 19.2665 8.09282 20.3022C9.1462 21.6906 9.82606 22.6316 10.3914 23.4835L10.98 24.3706L10.983 25.7894L10.9859 27.2082H14.9648H18.9437V25.8565V24.5047L19.5599 23.5673C20.1406 22.6838 20.7704 21.8066 21.9039 20.3022C22.7169 19.2231 23.2058 18.1718 23.4937 16.8834C23.6705 16.0923 23.6717 14.4824 23.4961 13.6698C22.5716 9.39239 18.6914 6.56314 14.2254 6.90987ZM0.739437 9.80087C0.327746 9.97933 0 10.4769 0 10.9233C0 11.2418 0.275775 11.6779 0.587747 11.8528C1.03218 12.1021 3.50113 12.8595 3.87866 12.8625C4.96916 12.8711 5.47592 11.5839 4.67099 10.85C4.5188 10.7112 4.0738 10.5384 2.95458 10.184C1.40592 9.69345 1.10669 9.64176 0.739437 9.80087ZM27.0085 10.1912C25.9328 10.5367 25.4757 10.7162 25.3273 10.8515C24.524 11.5839 25.032 12.8705 26.1213 12.8627C26.4791 12.8602 29.1134 12.0515 29.4798 11.8317C29.7194 11.688 30 11.1981 30 10.9233C30 10.2625 29.4156 9.69441 28.7523 9.71041C28.6058 9.71389 27.8211 9.9303 27.0085 10.1912ZM2.24746 18.007C0.705 18.4923 0.498451 18.5801 0.287887 18.84C-0.341408 19.6168 0.210352 20.727 1.22352 20.7226C1.57085 20.7211 4.31528 19.8674 4.59669 19.6732C4.85204 19.4971 5.07042 19.0734 5.07042 18.7539C5.07042 18.1351 4.50655 17.5637 3.90225 17.5701C3.7507 17.5717 3.00606 17.7683 2.24746 18.007ZM25.5671 17.7192C25.1966 17.9119 24.9296 18.3407 24.9296 18.743C24.9296 19.0722 25.1449 19.495 25.4033 19.6732C25.6896 19.8707 28.4294 20.7211 28.7842 20.7226C29.4077 20.7253 30 20.1707 30 19.5843C30 19.2815 29.721 18.7893 29.4504 18.6148C29.1606 18.4279 26.6271 17.6269 26.1972 17.5863C25.9563 17.5635 25.8051 17.5954 25.5671 17.7192ZM7.64085 23.3393C7.52465 23.3897 7.34669 23.5192 7.24535 23.6272C6.96458 23.9265 5.55218 25.8331 5.40845 26.1068C5.13451 26.6285 5.34739 27.3014 5.88169 27.6028C6.24282 27.8065 6.83711 27.7892 7.16042 27.5658C7.35451 27.4316 9.01197 25.2827 9.22211 24.8928C9.27 24.804 9.30796 24.5773 9.30641 24.3892C9.3 23.5785 8.39916 23.0107 7.64085 23.3393ZM21.3603 23.3752C20.9523 23.5551 20.6971 23.9432 20.6936 24.3892C20.692 24.5773 20.73 24.804 20.7779 24.8928C20.988 25.2827 22.6455 27.4316 22.8396 27.5658C23.1629 27.7892 23.7572 27.8065 24.1183 27.6028C24.6526 27.3014 24.8655 26.6285 24.5916 26.1068C24.4479 25.8333 23.0356 23.9268 22.7546 23.6271C22.3893 23.2375 21.8811 23.1457 21.3603 23.3752ZM11.417 28.6242C11.1028 28.7745 10.9161 29.0842 10.9158 29.4555C10.9156 29.7114 10.9546 29.7922 11.1889 30.0196L11.4623 30.2851H15H18.5377L18.8111 30.0196C19.0454 29.7922 19.0844 29.7114 19.0842 29.4555C19.0839 29.0789 18.894 28.7701 18.5716 28.6215C18.3508 28.5198 17.9604 28.5075 14.9894 28.5089C12.0234 28.5103 11.6287 28.523 11.417 28.6242ZM11.3781 31.8406C11.4375 32.1688 11.6436 32.6334 11.8336 32.8679C12.0801 33.1722 12.5989 33.4875 12.9947 33.5735C13.3366 33.6478 13.372 33.6734 13.4112 33.8767C13.4677 34.1694 13.9711 34.717 14.3282 34.8746C14.4937 34.9476 14.7746 35 15 35C15.2254 35 15.5063 34.9476 15.6718 34.8746C16.0124 34.7243 16.502 34.2051 16.5928 33.8979C16.65 33.7043 16.7077 33.6626 17.0589 33.5614C17.9146 33.3147 18.4657 32.6953 18.6199 31.8064L18.6585 31.5842H14.9951H11.3316L11.3781 31.8406Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  happiness: "<svg width=\"30\" height=\"35\" viewBox=\"0 0 30 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.08691 0.141326C6.86388 0.249778 6.72865 0.381968 6.6336 0.584481C6.47789 0.916439 6.43006 0.929866 6.12045 0.72854C5.64682 0.420542 4.8505 0.600875 4.51649 1.09188C4.1178 1.67783 4.48173 2.44085 5.47267 3.09639C5.94887 3.41143 7.15763 4.06667 7.26249 4.06667C7.36184 4.06667 8.06455 2.94535 8.40151 2.24924C8.65106 1.73369 8.68876 1.58599 8.68899 1.12415C8.68921 0.659997 8.66527 0.566974 8.50034 0.391314C8.11162 -0.0226877 7.60784 -0.111853 7.08691 0.141326ZM10.9195 2.11594C10.1476 2.50724 10.0647 3.47144 10.6467 5.2885C10.8477 5.9157 10.9115 6.03616 11.0539 6.05634C11.2878 6.08935 12.7499 5.72149 13.2532 5.50295C14.5745 4.92924 14.8589 3.98092 13.9157 3.2946C13.6932 3.13266 13.0966 3.08748 12.7576 3.20692C12.6172 3.25639 12.5878 3.23065 12.5408 3.01635C12.455 2.62556 12.3017 2.38707 12.0307 2.22261C11.6578 1.99636 11.2355 1.95578 10.9195 2.11594ZM2.89975 6.21835C2.50439 6.42346 2.24683 6.75891 2.18775 7.14554C2.13419 7.49619 2.04813 7.54767 1.76444 7.39864C1.54239 7.28195 0.997661 7.30013 0.735949 7.43306C0.418783 7.59403 0.132743 7.95151 0.0346016 8.30943C-0.0805394 8.72922 0.0915676 9.14901 0.552585 9.57236C1.08598 10.0622 2.02849 10.4547 3.46564 10.7856C4.02185 10.9136 4.06544 10.9144 4.15278 10.7971C4.20408 10.7282 4.36017 10.2289 4.49979 9.68741C4.70544 8.88952 4.75417 8.55534 4.75704 7.92406C4.76007 7.23759 4.73808 7.10118 4.57164 6.77426C4.24533 6.13349 3.52495 5.89396 2.89975 6.21835ZM16.0933 6.25032C15.9686 6.30581 12.9853 9.18447 9.46362 12.6474L3.0606 18.9437V19.38V19.8163L3.9429 20.6934C4.88133 21.6263 5.12899 21.7734 5.61539 21.6868C5.85935 21.6434 6.52073 21.0232 10.9558 16.6794C15.0009 12.7175 16.0671 11.7115 16.2633 11.6714C16.8445 11.5528 16.7022 11.4299 22.0241 16.6435C24.7994 19.3621 27.1435 21.6003 27.261 21.6435C27.8189 21.8485 28.2325 21.6336 29.2154 20.6279C29.9391 19.8875 30.09 19.5804 29.9558 19.1213C29.898 18.9231 28.4549 17.4641 23.5161 12.6112C20.0153 9.17126 17.0592 6.30878 16.947 6.25025C16.6943 6.11836 16.39 6.11836 16.0933 6.25032ZM7.66927 10.7408C7.66927 11.9251 7.69639 12.8942 7.72956 12.8942C7.76265 12.8942 8.23961 12.4482 8.78932 11.9031L9.7888 10.9121L9.76787 9.77042L9.74694 8.62878L8.7081 8.60816L7.66927 8.58753V10.7408ZM11.6904 17.3655L6.91027 22.0593L6.9309 28.1402C6.95069 33.9748 6.95734 34.2306 7.09583 34.4552C7.17516 34.5839 7.36683 34.7592 7.52164 34.8447C7.80284 34.9999 7.81266 35 16.5032 35C25.1368 35 25.2056 34.9988 25.5082 34.8473C25.724 34.7392 25.855 34.6038 25.9568 34.3836C26.0943 34.0863 26.1007 33.8102 26.1022 28.0639L26.1039 22.055L21.325 17.3633C18.6967 14.7829 16.5292 12.6716 16.5084 12.6716C16.4876 12.6716 14.3196 14.7838 11.6904 17.3655ZM14.6986 20.8321C15.229 20.9308 15.7905 21.191 16.1962 21.526L16.5258 21.7981L16.8161 21.5405C17.3866 21.0345 18.2228 20.7595 19.1909 20.7595C21.3291 20.7595 23.0015 22.2739 23.0054 24.2134C23.0074 25.2538 22.4443 26.6259 21.5184 27.8362C20.593 29.0458 17.6911 31.832 17.0531 32.1236C16.7071 32.2817 16.3595 32.289 16.01 32.1457C15.6926 32.0154 13.7022 30.2462 12.7282 29.2286C10.2052 26.5922 9.44715 24.3924 10.443 22.596C10.7032 22.1265 11.5176 21.3787 12.0087 21.158C12.8458 20.7819 13.8051 20.6657 14.6986 20.8321ZM13.2742 21.8046C12.3576 21.9543 11.4517 22.6486 11.1904 23.4013C10.6885 24.8476 11.5752 26.6649 13.9018 28.9583C15.2764 30.3132 16.3269 31.2169 16.5262 31.2159C16.7234 31.2148 18.7586 29.4037 19.712 28.3809C20.8598 27.1495 21.6267 25.9717 21.8743 25.0598C22.0234 24.5107 21.9899 23.7351 21.7981 23.2974C21.6005 22.8464 20.9635 22.2223 20.4943 22.02C19.3602 21.531 17.9371 21.7586 17.2414 22.5402C17.1086 22.6894 16.9095 22.9168 16.7989 23.0455C16.5546 23.33 16.4698 23.3362 16.2575 23.085C15.4789 22.1636 15.1237 21.9294 14.3074 21.7993C14.043 21.7573 13.7927 21.7264 13.7512 21.7309C13.7096 21.7354 13.495 21.7685 13.2742 21.8046Z\" fill=\"#CCCED7\"/>\n\t</svg>",
  security: "<svg width=\"33\" height=\"30\" viewBox=\"0 0 33 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.7028 2.89359C7.60522 4.48504 4.96281 5.87096 4.83079 5.97342C4.36855 6.3322 4.34463 6.45524 4.39056 8.23762C4.57737 15.4787 7.29562 21.6197 11.8152 25.0113C13.2717 26.1043 15.7874 27.3418 16.5528 27.3418C16.9453 27.3418 17.7255 27.046 18.9526 26.432C23.6292 24.0921 26.744 19.6662 28.1017 13.4313C28.5093 11.5595 28.7343 9.52018 28.7356 7.68608C28.7364 6.47856 28.6865 6.29286 28.2749 5.97342C27.8325 5.63013 16.7842 0 16.5528 0C16.4137 0 14.2971 1.04689 10.7028 2.89359ZM16.9493 8.08002C17.0252 8.12947 17.3741 8.74823 17.7246 9.45509C18.1101 10.2327 18.4349 10.7926 18.5465 10.8726C18.67 10.9612 19.1692 11.0693 20.0561 11.1996C20.8257 11.3127 21.4538 11.4432 21.5546 11.5112C21.7703 11.6566 21.8921 11.9706 21.8315 12.2249C21.8059 12.332 21.3115 12.9101 20.7197 13.5247C19.9495 14.3248 19.6541 14.6816 19.6541 14.8119C19.6541 14.9111 19.7564 15.6042 19.8815 16.352C20.069 17.4734 20.0937 17.7493 20.0223 17.9265C19.9185 18.1843 19.4992 18.4111 19.2645 18.3365C19.1742 18.3077 18.6019 18.0128 17.9927 17.6812C17.3835 17.3495 16.7793 17.0593 16.6499 17.0363C16.4557 17.0016 16.2047 17.1068 15.2101 17.6389C14.5475 17.9935 13.9315 18.3072 13.8412 18.3362C13.6096 18.4103 13.1875 18.1849 13.086 17.933C13.0181 17.7644 13.0463 17.454 13.2341 16.3024C13.3617 15.52 13.4473 14.8031 13.4244 14.709C13.4015 14.615 12.9178 14.0638 12.3496 13.484C11.6851 12.806 11.3005 12.3552 11.2718 12.2205C11.2209 11.9824 11.3891 11.5874 11.5879 11.4782C11.6586 11.4394 12.2979 11.3183 13.0086 11.209C13.7193 11.0998 14.3945 10.9716 14.509 10.9241C14.6805 10.8532 14.8339 10.598 15.3793 9.47742C15.954 8.29656 16.0728 8.10296 16.2787 8.01137C16.522 7.90321 16.7067 7.92213 16.9493 8.08002ZM2.3873 21.8995L0 24.3558L0.209482 24.4408C0.324671 24.4876 1.1832 24.8211 2.11727 25.182C3.05133 25.5429 3.86733 25.8666 3.93054 25.9013C3.99397 25.936 4.37461 26.8703 4.77851 27.9822C5.1816 29.0919 5.52879 30 5.55006 30C5.57132 30 6.48139 29.0814 7.57237 27.9586L9.55598 25.9173L8.67353 25.0156C7.28077 23.5925 6.15 22.0299 5.21409 20.2353C4.98681 19.7995 4.79498 19.443 4.78781 19.443C4.78058 19.443 3.70031 20.5484 2.3873 21.8995ZM27.8959 20.2271C26.9555 22.0302 25.8271 23.5903 24.4322 25.0156L23.5497 25.9173L25.5333 27.9586C26.6243 29.0814 27.5344 30 27.5556 30C27.5769 30 27.9241 29.0919 28.3272 27.9822C28.7594 26.7923 29.11 25.9369 29.1817 25.8975C29.2485 25.8607 30.1133 25.5188 31.1034 25.1376C32.0935 24.7565 32.9455 24.4205 32.9966 24.3911C33.0581 24.3557 32.2785 23.5037 30.7015 21.8821L28.3134 19.4266L27.8959 20.2271Z\" fill=\"url(#paint0_radial_7028_2)\"/>\n\t<defs>\n\t<radialGradient id=\"paint0_radial_7028_2\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(16.5 15) rotate(90) scale(26.7187 29.3906)\">\n\t<stop stop-color=\"white\"/>\n\t<stop offset=\"1\" stop-color=\"white\" stop-opacity=\"0\"/>\n\t</radialGradient>\n\t</defs>\n\t</svg>"
};
const L1 = param_1 => (() => {
  const varData_155 = y2();
  D(() => varData_155.innerHTML = G1[param_1.icon]);
  return varData_155;
})();
const v2 = v("<div class=\"button button-primary center\"><p class=\"gilroy400\">Stop Alarm");
const b2 = v("<div class=\"button button-primary center\"><p class=\"gilroy400\">Add permission");
const m2 = v("<div class=\"userContent-container\"><header><div class=\"topline\"><div class=\"text-column\"><p class=\"nekst400 p-white\">Manage your home</p><p class=\"gilroy400 p-white55\">Real estate security and settings.</div><div class=\"exit-container\"><p class=\"gilroy400 p-white55\">Exit</p><p class=\"gilroy400 p-white55 center\">Escape</div></div><div class=\"filters\"><div class=\"bg-gray filter\"><svg width=\"10\" height=\"14\" viewBox=\"0 0 10 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.26917 0.0509121C2.46472 0.343889 0.968786 1.61386 0.322664 3.40128C0.104302 4.00536 0.022335 4.4524 0.00420111 5.1382C-0.00585588 5.51786 0.00146539 5.72937 0.0335383 5.9859C0.274724 7.91587 1.33717 10.0139 3.22543 12.289C3.60135 12.7419 4.62179 13.8243 4.7628 13.9197C4.92092 14.0267 5.07613 14.0268 5.23459 13.92C5.38852 13.8163 6.46714 12.6628 6.8663 12.1751C8.6968 9.93827 9.72814 7.88213 9.96109 6.00501C10.0074 5.63211 10.0133 5.00768 9.9738 4.67262C9.68499 2.22409 7.88789 0.326798 5.57257 0.0259733C5.241 -0.0170955 4.61418 -0.0051183 4.26917 0.0509121ZM5.55886 2.40077C6.59942 2.62735 7.39992 3.43103 7.68688 4.5372C7.73904 4.73824 7.74701 4.83259 7.74688 5.24758C7.74673 5.68316 7.74042 5.74988 7.67656 5.99071C7.40231 7.02496 6.65823 7.79605 5.66879 8.07133C5.48828 8.12154 5.383 8.131 4.99869 8.13149C4.60241 8.13201 4.51374 8.12381 4.32128 8.0689C3.32116 7.78349 2.58405 7.00979 2.3103 5.95795C2.25793 5.75675 2.24996 5.66292 2.24996 5.24758C2.24996 4.83223 2.25793 4.73841 2.3103 4.5372C2.39849 4.19831 2.51048 3.93451 2.68345 3.65803C3.09936 2.99326 3.76674 2.52826 4.51669 2.38073C4.75235 2.33435 5.30251 2.34493 5.55886 2.40077Z\" fill=\"#00F8B9\"></svg><p class=\"gilroy400 p-white\"></header><div class=\"content-line\"><div class=\"scroll-container house-settings\"><ul class=\"list\"></div><div class=\"gap29\"><div class=\"titles-container\"><div class=\"text-column\"><p class=\"nekst400 p-white\">Permissions</p><p class=\"gilroy400 p-white55\">Change a users permissions.</div></div><div class=\"scroll-container house-permissions\"><ul class=\"list\"></div></div></div><div class=\"house-info\">");
const $2 = v("<div class=\"color-plate\">");
const _2 = v("<div class=\"list-icon center\">");
const S2 = v("<div><div class=\"toggle-block\">");
const L2 = v("<div class=\"button button-primary center\"><p class=\"gilroy400\">Select");
const A2 = v("<div class=\"right-part\">");
const x2 = v("<div class=\"list-content\"><div class=\"text-column\"><p class=\"gilroy600\"></p><p class=\"gilroy400 p-white55\">");
const M2 = v("<li class=\"list-item\">");
const Z2 = v("<div class=\"s-button button-delete center\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.2151 0.0419465C4.05424 0.102722 3.94229 0.219666 3.78697 0.489088L3.63861 0.746465L1.95174 0.753016C0.296787 0.759422 0.263423 0.760478 0.189034 0.809016C0.00241644 0.930783 0 0.939684 0 1.50334C0 2.06699 0.00241643 2.07592 0.189062 2.19766L0.264906 2.24713H6H11.7351L11.8109 2.19766C11.9976 2.07592 12 2.06699 12 1.50334C12 0.939684 11.9976 0.930783 11.811 0.809016C11.7366 0.760478 11.7032 0.759422 10.0483 0.753016L8.36139 0.746465L8.21303 0.489088C8.05552 0.215851 7.94458 0.10133 7.77891 0.0409628C7.62739 -0.01427 4.36146 -0.0133583 4.2151 0.0419465ZM0.851643 3.15289C0.860265 3.23537 0.990014 5.03037 1.14 7.14179C1.28996 9.25321 1.42492 11.0373 1.43992 11.1065C1.52622 11.5048 1.94617 11.8824 2.40582 11.975C2.57116 12.0083 9.42876 12.0083 9.5941 11.975C9.81177 11.9312 10.0171 11.8265 10.2019 11.665C10.3963 11.4951 10.5057 11.3246 10.5563 11.1127C10.5736 11.0401 10.7105 9.24781 10.8605 7.12979C11.0105 5.01178 11.1404 3.21676 11.1492 3.14089L11.1652 3.00293H6.0006H0.835991L0.851643 3.15289Z\" fill=\"#F86969\">");
const O2 = v("<li class=\"list-item\"><div class=\"list-content\"><div class=\"text-column\"><p class=\"gilroy600\"></p><p class=\"gilroy400 p-white55\"></div><div class=\"right-part\"><div class=\"permissions-line\">");
const P2 = v("<svg width=\"12\" height=\"10\" viewBox=\"0 0 12 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 5.5L4 8.5L11.5 1\" stroke=\"#00F8B9\">");
const E2 = v("<div class=\"permission\"><p class=\"gilroy400 p-white\"></p><div class=\"s-button s-primary center\">");
const k2 = v("<div class=\"setting\"><h1></h1><p></p><div class=\"line\">");
const H2 = param_1 => {
  const varData_156 = () => {
    param_1.changeModal(param_1_1 => ({
      ...param_1_1,
      colorPicker: true
    }));
  };
  const varData_157 = () => {
    param_1.changeModal(param_1_1 => ({
      ...param_1_1,
      permissionAdd: true
    }));
  };
  const varData_158 = {
    heating: "#00F8B9",
    power: "#F83C00",
    gas: "#F3F800",
    waste: "#F800B3",
    water: "#00E9F8",
    cooling: "#0090F8",
    light: "#F80000",
    happiness: "#F89500",
    humidity: "#C600F8"
  };
  return (() => {
    const varData_159 = m2();
    const varData_160 = varData_159.firstChild;
    const varData_161 = varData_160.firstChild;
    const varData_162 = varData_161.nextSibling;
    const varData_163 = varData_162.firstChild;
    const varData_164 = varData_163.firstChild;
    const varData_165 = varData_164.nextSibling;
    const varData_166 = varData_160.nextSibling;
    const varData_167 = varData_166.firstChild;
    const varData_168 = varData_167.firstChild;
    const varData_169 = varData_167.nextSibling;
    const varData_170 = varData_169.firstChild;
    varData_170.firstChild;
    const varData_171 = varData_170.nextSibling;
    const varData_172 = varData_171.firstChild;
    const varData_173 = varData_166.nextSibling;
    g(varData_165, () => u?.street || "Street unavailable");
    g(varData_168, d(q, {
      get each() {
        return Object.keys(u?.toggle);
      },
      children: (param_1_1, param_2) => (() => {
        const varData_174 = M2();
        g(varData_174, d(k, {
          get when() {
            return param_1_1 != "wallcolor" && u.interfaceState == "housing" || param_1_1 === "wallcolor" && u.interfaceState == "housing" || param_1_1 === "wallcolor" && u.interfaceState == "apartments";
          },
          get children() {
            return d(k, {
              get when() {
                return param_1_1 === "wallcolor" || param_1_1 != "wallcolor" && u?.toggle[param_1_1]?.show;
              },
              get children() {
                return [d(k, {
                  get when() {
                    return G1[u?.toggle[param_1_1]?.icon] || param_1_1 === "wallcolor";
                  },
                  get children() {
                    const varData_175 = _2();
                    g(varData_175, d($1, {
                      get fallback() {
                        return d(L1, {
                          get icon() {
                            return u?.toggle[param_1_1]?.icon;
                          }
                        });
                      },
                      get children() {
                        return d(u1, {
                          when: param_1_1 === "wallcolor",
                          get children() {
                            const varData_176 = $2();
                            D(param_1_2 => D1(varData_176, "background: " + I1[u?.toggle[param_1_1].icon] + ";", param_1_2));
                            return varData_176;
                          }
                        });
                      }
                    }));
                    return varData_175;
                  }
                }), (() => {
                  const varData_177 = x2();
                  const varData_178 = varData_177.firstChild;
                  const varData_179 = varData_178.firstChild;
                  const varData_180 = varData_179.nextSibling;
                  g(varData_179, () => u?.toggle[param_1_1].title);
                  g(varData_180, () => u?.toggle[param_1_1].description);
                  g(varData_177, d(k, {
                    get when() {
                      return u?.permissionState == "owner";
                    },
                    get children() {
                      const varData_181 = A2();
                      g(varData_181, d($1, {
                        get children() {
                          return [d(u1, {
                            get when() {
                              return u?.toggle[param_1_1].state !== undefined;
                            },
                            get children() {
                              const varData_182 = S2();
                              varData_182.$$click = () => u2(param_2());
                              D(() => V1(varData_182, "toggle-container " + (u?.toggle[param_1_1].state ? "active" : "")));
                              return varData_182;
                            }
                          }), d(u1, {
                            when: param_1_1 === "wallcolor",
                            get children() {
                              const varData_183 = L2();
                              varData_183.$$click = () => varData_156();
                              return varData_183;
                            }
                          })];
                        }
                      }));
                      return varData_181;
                    }
                  }), null);
                  return varData_177;
                })()];
              }
            });
          }
        }));
        return varData_174;
      })()
    }));
    g(varData_170, d(k, {
      get when() {
        return u.interfaceState == "housing" && u.permissionState == "owner";
      },
      get children() {
        return [(() => {
          const varData_184 = v2();
          varData_184.$$click = () => _0xdfacf8.execute("propertySettings:stopAlarm", u.street);
          return varData_184;
        })(), (() => {
          const varData_185 = b2();
          varData_185.$$click = () => varData_157();
          return varData_185;
        })()];
      }
    }), null);
    g(varData_172, d(q, {
      get each() {
        return Object.entries(u?.permissions?.users) || [];
      },
      children: ([_0x6fd652, _0x105171], param_2) => (() => {
        const varData_186 = O2();
        const varData_187 = varData_186.firstChild;
        const varData_188 = varData_187.firstChild;
        const varData_189 = varData_188.firstChild;
        const varData_190 = varData_189.nextSibling;
        const varData_191 = varData_188.nextSibling;
        const varData_192 = varData_191.firstChild;
        g(varData_189, () => _0x105171.name);
        g(varData_190, () => _0x105171.status);
        g(varData_192, d(k, {
          get when() {
            return u?.permissionState == "owner";
          },
          get children() {
            return d(q, {
              get each() {
                return u?.permissions.available;
              },
              children: param_1_1 => (() => {
                const varData_193 = E2();
                const varData_194 = varData_193.firstChild;
                const varData_195 = varData_194.nextSibling;
                varData_193.$$click = () => {
                  f2(+_0x6fd652, param_1_1);
                };
                g(varData_194, param_1_1);
                g(varData_195, d(k, {
                  get when() {
                    return U(() => !!_0x105171 && !!_0x105171.permissions)() && _0x105171.permissions.includes(param_1_1);
                  },
                  get children() {
                    return P2();
                  }
                }));
                return varData_193;
              })()
            });
          }
        }));
        g(varData_191, d(k, {
          get when() {
            return _0x105171.status != "owner" && u.permissionState == "owner";
          },
          get children() {
            const varData_196 = Z2();
            varData_196.$$click = () => d2(+_0x6fd652);
            return varData_196;
          }
        }), null);
        return varData_186;
      })()
    }));
    g(varData_173, d(q, {
      get each() {
        return Object.entries(u.consumption).filter(([_0x78d9dc, _0x8cd692]) => _0x78d9dc !== "property" && _0x78d9dc !== "size" && _0x78d9dc !== "happiness" && _0x78d9dc !== "type");
      },
      children: ([_0x48e95d, _0x29ea16]) => (() => {
        const varData_197 = k2();
        const varData_198 = varData_197.firstChild;
        const varData_199 = varData_198.nextSibling;
        const varData_200 = varData_199.nextSibling;
        g(varData_197, d(L1, {
          icon: _0x48e95d
        }), varData_198);
        g(varData_198, _0x29ea16);
        g(varData_199, () => _0x48e95d.charAt(0).toUpperCase() + _0x48e95d.slice(1));
        D(param_1_1 => {
          const varData_201 = varData_158[_0x48e95d];
          const varData_202 = "0px -0.185vh 2.17vh 0px " + varData_158[_0x48e95d];
          if (varData_201 !== param_1_1._v$) {
            if ((param_1_1._v$ = varData_201) != null) {
              varData_200.style.setProperty("background", varData_201);
            } else {
              varData_200.style.removeProperty("background");
            }
          }
          if (varData_202 !== param_1_1._v$2) {
            if ((param_1_1._v$2 = varData_202) != null) {
              varData_200.style.setProperty("box-shadow", varData_202);
            } else {
              varData_200.style.removeProperty("box-shadow");
            }
          }
          return param_1_1;
        }, {
          _v$: undefined,
          _v$2: undefined
        });
        return varData_197;
      })()
    }));
    return varData_159;
  })();
};
y1(["click"]);
const T2 = v("<div class=\"modal-bg center\"><div class=\"modal-content\"><div class=\"titles\"><p class=\"gilroy600\">Select Wall Color</p><p class=\"gilroy400 p-white55\">Chose the color of your walls </div><ul class=\"color-items-list\"></ul><div class=\"inline-buttons\"><div class=\"button button-primary center\"><p class=\"gilroy400\">Save</div><div class=\"button button-decline center\"><p class=\"gilroy400\">Cancel");
const B2 = v("<li><div class=\"color-plate\">");
const V2 = param_1 => {
  const [_0x275581, _0x502bd8] = K(u.toggle.wallcolor.icon);
  const varData_203 = param_1_1 => {
    _0x502bd8(param_1_1);
  };
  const varData_204 = () => {
    g2(_0x275581());
    varData_205();
  };
  const varData_205 = () => {
    param_1.changeModal(param_1_1 => ({
      ...param_1_1,
      colorPicker: false
    }));
  };
  return (() => {
    const varData_206 = T2();
    const varData_207 = varData_206.firstChild;
    const varData_208 = varData_207.firstChild;
    const varData_209 = varData_208.nextSibling;
    const varData_210 = varData_209.nextSibling;
    const varData_211 = varData_210.firstChild;
    const varData_212 = varData_211.nextSibling;
    g(varData_209, d(q, {
      each: I1,
      children: (param_1_1, param_2) => (() => {
        const varData_213 = B2();
        const varData_214 = varData_213.firstChild;
        varData_213.$$click = () => varData_203(param_2());
        D(param_1_2 => {
          const varData_215 = "color-item " + (param_2() === _0x275581() ? "active" : "");
          const varData_216 = "background: " + param_1_1 + ";";
          if (varData_215 !== param_1_2._v$) {
            V1(varData_213, param_1_2._v$ = varData_215);
          }
          param_1_2._v$2 = D1(varData_214, varData_216, param_1_2._v$2);
          return param_1_2;
        }, {
          _v$: undefined,
          _v$2: undefined
        });
        return varData_213;
      })()
    }));
    varData_211.$$click = () => varData_204();
    varData_212.$$click = () => varData_205();
    return varData_206;
  })();
};
y1(["click"]);
const D2 = v("<div class=\"modal-bg center\"><div class=\"modal-content\"><div class=\"titles\"><p class=\"gilroy600\">Permission Adding</p><p class=\"gilroy400 p-white55\">Add permissions to a persons state ID </div><div class=\"text-input-container\"><input class=\"gilroy400 p-white\" type=\"text\" placeholder=\"Type your text...\"></div><div class=\"inline-buttons\"><div class=\"button button-primary center\"><p class=\"gilroy400\">Add</div><div class=\"button button-decline center\"><p class=\"gilroy400\">Cancel");
const j2 = param_1 => {
  const [_0x16a837, _0x11a541] = K("");
  const varData_217 = param_1_1 => {
    _0x11a541(param_1_1);
  };
  const varData_218 = () => {
    if (_0x16a837() !== "") {
      _0xdfacf8.execute("propertySettings:addPermission", u.street, _0x16a837());
      varData_219();
    }
  };
  const varData_219 = () => {
    param_1.changeModal(param_1_1 => ({
      ...param_1_1,
      permissionAdd: false
    }));
  };
  return (() => {
    const varData_220 = D2();
    const varData_221 = varData_220.firstChild;
    const varData_222 = varData_221.firstChild;
    const varData_223 = varData_222.nextSibling;
    const varData_224 = varData_223.firstChild;
    const varData_225 = varData_223.nextSibling;
    const varData_226 = varData_225.firstChild;
    const varData_227 = varData_226.nextSibling;
    varData_224.addEventListener("blur", param_1_1 => varData_217(param_1_1.target.value));
    varData_226.$$click = () => varData_218();
    varData_227.$$click = () => varData_219();
    return varData_220;
  })();
};
y1(["click"]);
const N2 = v("<div class=\"interface wrapper center\"><div class=\"content-block\">");
const U2 = param_1 => {
  const [_0x2c9d35, _0x16507e] = K({
    colorPicker: false,
    permissionAdd: false
  });
  return (() => {
    const varData_228 = N2();
    const varData_229 = varData_228.firstChild;
    g(varData_229, d(w2, {}), null);
    g(varData_229, d(H2, {
      changeModal: _0x16507e
    }), null);
    g(varData_229, d(k, {
      get when() {
        return _0x2c9d35().colorPicker;
      },
      get children() {
        return d(V2, {
          changeModal: _0x16507e
        });
      }
    }), null);
    g(varData_229, d(k, {
      get when() {
        return _0x2c9d35().permissionAdd;
      },
      get children() {
        return d(j2, {
          changeModal: _0x16507e
        });
      }
    }), null);
    return varData_228;
  })();
};
const F2 = () => {
  const varData_230 = param_1 => {
    if (param_1.key === "Escape" && u.interfaceState != "none") {
      _0xdfacf8.execute("propertySettings:close");
    }
  };
  Y1(async () => {
    document.addEventListener("keydown", varData_230);
  });
  M1(() => {
    document.removeEventListener("keydown", varData_230);
  });
  return d(k, {
    get when() {
      return u.interfaceState != "none";
    },
    get children() {
      return [d(U2, {}), ";"];
    }
  });
};
const I2 = document.getElementById("root");
i2(() => d(F2, {}), I2);