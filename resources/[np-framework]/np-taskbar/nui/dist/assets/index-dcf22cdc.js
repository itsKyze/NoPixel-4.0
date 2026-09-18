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
const ce = (param_1, param_2) => param_1 === param_2;
const ue = Symbol("solid-track");
const O = {
  equals: ce
};
let ee = ie;
const v = 1;
const U = 2;
const te = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var p = null;
let k = null;
let h = null;
let d = null;
let A = null;
let H = 0;
function M(param_1, param_2) {
  const varData_7 = h;
  const varData_8 = p;
  const varData_9 = param_1.length === 0;
  const varData_10 = varData_9 ? te : {
    owned: null,
    cleanups: null,
    context: null,
    owner: param_2 === undefined ? varData_8 : param_2
  };
  const varData_11 = varData_9 ? param_1 : () => param_1(() => L(() => K(varData_10)));
  p = varData_10;
  h = null;
  try {
    return N(varData_11, true);
  } finally {
    h = varData_7;
    p = varData_8;
  }
}
function se(param_1, param_2) {
  param_2 = param_2 ? Object.assign({}, O, param_2) : O;
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
    return le(varData_12, param_1_1);
  };
  return [ne.bind(varData_12), varData_13];
}
function _(param_1, param_2, param_3) {
  const varData_14 = Z(param_1, param_2, false, v);
  T(varData_14);
}
function ae(param_1, param_2, param_3) {
  ee = ye;
  const varData_15 = Z(param_1, param_2, false, v);
  if (!param_3 || !param_3.render) {
    varData_15.user = true;
  }
  if (A) {
    A.push(varData_15);
  } else {
    T(varData_15);
  }
}
function he(param_1, param_2, param_3) {
  param_3 = param_3 ? Object.assign({}, O, param_3) : O;
  const varData_16 = Z(param_1, param_2, true, 0);
  varData_16.observers = null;
  varData_16.observerSlots = null;
  varData_16.comparator = param_3.equals || undefined;
  T(varData_16);
  return ne.bind(varData_16);
}
function L(param_1) {
  if (h === null) {
    return param_1();
  }
  const varData_17 = h;
  h = null;
  try {
    return param_1();
  } finally {
    h = varData_17;
  }
}
function pe(param_1) {
  ae(() => L(param_1));
}
function de(param_1) {
  if (p !== null) {
    if (p.cleanups === null) {
      p.cleanups = [param_1];
    } else {
      p.cleanups.push(param_1);
    }
  }
  return param_1;
}
function ne() {
  if (this.sources && this.state) {
    if (this.state === v) {
      T(this);
    } else {
      const varData_18 = d;
      d = null;
      N(() => j(this), false);
      d = varData_18;
    }
  }
  if (h) {
    const varData_19 = this.observers ? this.observers.length : 0;
    if (h.sources) {
      h.sources.push(this);
      h.sourceSlots.push(varData_19);
    } else {
      h.sources = [this];
      h.sourceSlots = [varData_19];
    }
    if (this.observers) {
      this.observers.push(h);
      this.observerSlots.push(h.sources.length - 1);
    } else {
      this.observers = [h];
      this.observerSlots = [h.sources.length - 1];
    }
  }
  return this.value;
}
function le(param_1, param_2, param_3) {
  let varData_20 = param_1.value;
  if (!param_1.comparator || !param_1.comparator(varData_20, param_2)) {
    param_1.value = param_2;
    if (param_1.observers && param_1.observers.length) {
      N(() => {
        for (let loopIdx = 0; loopIdx < param_1.observers.length; loopIdx += 1) {
          const varData_21 = param_1.observers[loopIdx];
          const varData_22 = k && k.running;
          if (varData_22) {
            k.disposed.has(varData_21);
          }
          if (varData_22 ? !varData_21.tState : !varData_21.state) {
            if (varData_21.pure) {
              d.push(varData_21);
            } else {
              A.push(varData_21);
            }
            if (varData_21.observers) {
              re(varData_21);
            }
          }
          if (!varData_22) {
            varData_21.state = v;
          }
        }
        if (d.length > 1000000) {
          d = [];
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
  K(param_1);
  const varData_23 = p;
  const varData_24 = h;
  const varData_25 = H;
  h = p = param_1;
  ge(param_1, param_1.value, varData_25);
  h = varData_24;
  p = varData_23;
}
function ge(param_1, param_2, param_3) {
  let varData_26;
  try {
    varData_26 = param_1.fn(param_2);
  } catch (err) {
    if (param_1.pure) {
      param_1.state = v;
      if (param_1.owned) {
        param_1.owned.forEach(K);
      }
      param_1.owned = null;
    }
    param_1.updatedAt = param_3 + 1;
    return oe(err);
  }
  if (!param_1.updatedAt || param_1.updatedAt <= param_3) {
    if (param_1.updatedAt != null && "observers" in param_1) {
      le(param_1, varData_26);
    } else {
      param_1.value = varData_26;
    }
    param_1.updatedAt = param_3;
  }
}
function Z(param_1, param_2, param_3, _0x362dd1 = v, param_5) {
  const varData_27 = {
    fn: param_1,
    state: _0x362dd1,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: param_2,
    owner: p,
    context: null,
    pure: param_3
  };
  if (p !== null) {
    if (p !== te) {
      if (p.owned) {
        p.owned.push(varData_27);
      } else {
        p.owned = [varData_27];
      }
    }
  }
  return varData_27;
}
function F(param_1) {
  if (param_1.state === 0) {
    return;
  }
  if (param_1.state === U) {
    return j(param_1);
  }
  if (param_1.suspense && L(param_1.suspense.inFallback)) {
    return param_1.suspense.effects.push(param_1);
  }
  const varData_28 = [param_1];
  while ((param_1 = param_1.owner) && (!param_1.updatedAt || param_1.updatedAt < H)) {
    if (param_1.state) {
      varData_28.push(param_1);
    }
  }
  for (let loopIdx = varData_28.length - 1; loopIdx >= 0; loopIdx--) {
    param_1 = varData_28[loopIdx];
    if (param_1.state === v) {
      T(param_1);
    } else if (param_1.state === U) {
      const varData_29 = d;
      d = null;
      N(() => j(param_1, varData_28[0]), false);
      d = varData_29;
    }
  }
}
function N(param_1, param_2) {
  if (d) {
    return param_1();
  }
  let isDisabled = false;
  if (!param_2) {
    d = [];
  }
  if (A) {
    isDisabled = true;
  } else {
    A = [];
  }
  H++;
  try {
    const varData_30 = param_1();
    we(isDisabled);
    return varData_30;
  } catch (err) {
    if (!isDisabled) {
      A = null;
    }
    d = null;
    oe(err);
  }
}
function we(param_1) {
  if (d) {
    ie(d);
    d = null;
  }
  if (param_1) {
    return;
  }
  const varData_31 = A;
  A = null;
  if (varData_31.length) {
    N(() => ee(varData_31), false);
  }
}
function ie(param_1) {
  for (let loopIdx = 0; loopIdx < param_1.length; loopIdx++) {
    F(param_1[loopIdx]);
  }
}
function ye(param_1) {
  let varData_32;
  let varData_33 = 0;
  for (varData_32 = 0; varData_32 < param_1.length; varData_32++) {
    const varData_34 = param_1[varData_32];
    if (varData_34.user) {
      param_1[varData_33++] = varData_34;
    } else {
      F(varData_34);
    }
  }
  for (varData_32 = 0; varData_32 < varData_33; varData_32++) {
    F(param_1[varData_32]);
  }
}
function j(param_1, param_2) {
  param_1.state = 0;
  for (let loopIdx = 0; loopIdx < param_1.sources.length; loopIdx += 1) {
    const varData_35 = param_1.sources[loopIdx];
    if (varData_35.sources) {
      const varData_36 = varData_35.state;
      if (varData_36 === v) {
        if (varData_35 !== param_2 && (!varData_35.updatedAt || varData_35.updatedAt < H)) {
          F(varData_35);
        }
      } else if (varData_36 === U) {
        j(varData_35, param_2);
      }
    }
  }
}
function re(param_1) {
  for (let loopIdx = 0; loopIdx < param_1.observers.length; loopIdx += 1) {
    const varData_37 = param_1.observers[loopIdx];
    if (!varData_37.state) {
      varData_37.state = U;
      if (varData_37.pure) {
        d.push(varData_37);
      } else {
        A.push(varData_37);
      }
      if (varData_37.observers) {
        re(varData_37);
      }
    }
  }
}
function K(param_1) {
  let varData_38;
  if (param_1.sources) {
    while (param_1.sources.length) {
      const varData_39 = param_1.sources.pop();
      const varData_40 = param_1.sourceSlots.pop();
      const varData_41 = varData_39.observers;
      if (varData_41 && varData_41.length) {
        const varData_42 = varData_41.pop();
        const varData_43 = varData_39.observerSlots.pop();
        if (varData_40 < varData_41.length) {
          varData_42.sourceSlots[varData_43] = varData_40;
          varData_41[varData_40] = varData_42;
          varData_39.observerSlots[varData_40] = varData_43;
        }
      }
    }
  }
  if (param_1.owned) {
    for (varData_38 = param_1.owned.length - 1; varData_38 >= 0; varData_38--) {
      K(param_1.owned[varData_38]);
    }
    param_1.owned = null;
  }
  if (param_1.cleanups) {
    for (varData_38 = param_1.cleanups.length - 1; varData_38 >= 0; varData_38--) {
      param_1.cleanups[varData_38]();
    }
    param_1.cleanups = null;
  }
  param_1.state = 0;
  param_1.context = null;
}
function oe(param_1) {
  throw param_1;
}
const me = Symbol("fallback");
function X(param_1) {
  for (let loopIdx = 0; loopIdx < param_1.length; loopIdx++) {
    param_1[loopIdx]();
  }
}
function be(param_1, param_2, _0x4a213c = {}) {
  let varData_44 = [];
  let varData_45 = [];
  let varData_46 = [];
  let varData_47 = 0;
  let varData_48 = param_2.length > 1 ? [] : null;
  de(() => X(varData_46));
  return () => {
    let varData_49 = param_1() || [];
    let varData_50;
    let varData_51;
    varData_49[ue];
    return L(() => {
      let varData_52 = varData_49.length;
      let varData_53;
      let varData_54;
      let varData_55;
      let varData_56;
      let varData_57;
      let varData_58;
      let varData_59;
      let varData_60;
      let varData_61;
      if (varData_52 === 0) {
        if (varData_47 !== 0) {
          X(varData_46);
          varData_46 = [];
          varData_44 = [];
          varData_45 = [];
          varData_47 = 0;
          varData_48 &&= [];
        }
        if (_0x4a213c.fallback) {
          varData_44 = [me];
          varData_45[0] = M(param_1_1 => {
            varData_46[0] = param_1_1;
            return _0x4a213c.fallback();
          });
          varData_47 = 1;
        }
      } else if (varData_47 === 0) {
        varData_45 = new Array(varData_52);
        varData_51 = 0;
        for (; varData_51 < varData_52; varData_51++) {
          varData_44[varData_51] = varData_49[varData_51];
          varData_45[varData_51] = M(handleAction_3);
        }
        varData_47 = varData_52;
      } else {
        varData_55 = new Array(varData_52);
        varData_56 = new Array(varData_52);
        if (varData_48) {
          varData_57 = new Array(varData_52);
        }
        varData_58 = 0;
        varData_59 = Math.min(varData_47, varData_52);
        for (; varData_58 < varData_59 && varData_44[varData_58] === varData_49[varData_58]; varData_58++);
        varData_59 = varData_47 - 1;
        varData_60 = varData_52 - 1;
        for (; varData_59 >= varData_58 && varData_60 >= varData_58 && varData_44[varData_59] === varData_49[varData_60]; varData_59--, varData_60--) {
          varData_55[varData_60] = varData_45[varData_59];
          varData_56[varData_60] = varData_46[varData_59];
          if (varData_48) {
            varData_57[varData_60] = varData_48[varData_59];
          }
        }
        varData_53 = new Map();
        varData_54 = new Array(varData_60 + 1);
        varData_51 = varData_60;
        for (; varData_51 >= varData_58; varData_51--) {
          varData_61 = varData_49[varData_51];
          varData_50 = varData_53.get(varData_61);
          varData_54[varData_51] = varData_50 === undefined ? -1 : varData_50;
          varData_53.set(varData_61, varData_51);
        }
        for (varData_50 = varData_58; varData_50 <= varData_59; varData_50++) {
          varData_61 = varData_44[varData_50];
          varData_51 = varData_53.get(varData_61);
          if (varData_51 !== undefined && varData_51 !== -1) {
            varData_55[varData_51] = varData_45[varData_50];
            varData_56[varData_51] = varData_46[varData_50];
            if (varData_48) {
              varData_57[varData_51] = varData_48[varData_50];
            }
            varData_51 = varData_54[varData_51];
            varData_53.set(varData_61, varData_51);
          } else {
            varData_46[varData_50]();
          }
        }
        for (varData_51 = varData_58; varData_51 < varData_52; varData_51++) {
          if (varData_51 in varData_55) {
            varData_45[varData_51] = varData_55[varData_51];
            varData_46[varData_51] = varData_56[varData_51];
            if (varData_48) {
              varData_48[varData_51] = varData_57[varData_51];
              varData_48[varData_51](varData_51);
            }
          } else {
            varData_45[varData_51] = M(handleAction_3);
          }
        }
        varData_45 = varData_45.slice(0, varData_47 = varData_52);
        varData_44 = varData_49.slice(0);
      }
      return varData_45;
    });
    function handleAction_3(param_1_1) {
      varData_46[varData_51] = param_1_1;
      if (varData_48) {
        const [_0x2ca6c2, _0x3ae103] = se(varData_51);
        varData_48[varData_51] = _0x3ae103;
        return param_2(varData_49[varData_51], _0x2ca6c2);
      }
      return param_2(varData_49[varData_51]);
    }
  };
}
function R(param_1, param_2) {
  return L(() => param_1(param_2 || {}));
}
function Y(param_1) {
  const varData_62 = "fallback" in param_1 && {
    fallback: () => param_1.fallback
  };
  return he(be(() => param_1.each, param_1.children, varData_62 || undefined));
}
function Ae(param_1, param_2, param_3) {
  let varData_63 = param_3.length;
  let varData_64 = param_2.length;
  let varData_65 = varData_63;
  let varData_66 = 0;
  let varData_67 = 0;
  let varData_68 = param_2[varData_64 - 1].nextSibling;
  let varData_69 = null;
  while (varData_66 < varData_64 || varData_67 < varData_65) {
    if (param_2[varData_66] === param_3[varData_67]) {
      varData_66++;
      varData_67++;
      continue;
    }
    while (param_2[varData_64 - 1] === param_3[varData_65 - 1]) {
      varData_64--;
      varData_65--;
    }
    if (varData_64 === varData_66) {
      const varData_70 = varData_65 < varData_63 ? varData_67 ? param_3[varData_67 - 1].nextSibling : param_3[varData_65 - varData_67] : varData_68;
      while (varData_67 < varData_65) {
        param_1.insertBefore(param_3[varData_67++], varData_70);
      }
    } else if (varData_65 === varData_67) {
      while (varData_66 < varData_64) {
        if (!varData_69 || !varData_69.has(param_2[varData_66])) {
          param_2[varData_66].remove();
        }
        varData_66++;
      }
    } else if (param_2[varData_66] === param_3[varData_65 - 1] && param_3[varData_67] === param_2[varData_64 - 1]) {
      const varData_71 = param_2[--varData_64].nextSibling;
      param_1.insertBefore(param_3[varData_67++], param_2[varData_66++].nextSibling);
      param_1.insertBefore(param_3[--varData_65], varData_71);
      param_2[varData_64] = param_3[varData_65];
    } else {
      if (!varData_69) {
        varData_69 = new Map();
        let varData_72 = varData_67;
        while (varData_72 < varData_65) {
          varData_69.set(param_3[varData_72], varData_72++);
        }
      }
      const varData_73 = varData_69.get(param_2[varData_66]);
      if (varData_73 != null) {
        if (varData_67 < varData_73 && varData_73 < varData_65) {
          let varData_74 = varData_66;
          let varData_75 = 1;
          let varData_76;
          while (++varData_74 < varData_64 && varData_74 < varData_65 && (varData_76 = varData_69.get(param_2[varData_74])) != null && varData_76 === varData_73 + varData_75) {
            varData_75++;
          }
          if (varData_75 > varData_73 - varData_67) {
            const varData_77 = param_2[varData_66];
            while (varData_67 < varData_73) {
              param_1.insertBefore(param_3[varData_67++], varData_77);
            }
          } else {
            param_1.replaceChild(param_3[varData_67++], param_2[varData_66++]);
          }
        } else {
          varData_66++;
        }
      } else {
        param_2[varData_66++].remove();
      }
    }
  }
}
function ve(param_1, param_2, param_3, _0x19dab3 = {}) {
  let varData_78;
  M(param_1_1 => {
    varData_78 = param_1_1;
    if (param_2 === document) {
      param_1();
    } else {
      E(param_2, param_1(), param_2.firstChild ? null : undefined, param_3);
    }
  }, _0x19dab3.owner);
  return () => {
    varData_78();
    param_2.textContent = "";
  };
}
function J(param_1, param_2, param_3) {
  let varData_79;
  const varData_80 = () => {
    const varData_81 = document.createElement("template");
    varData_81.innerHTML = param_1;
    if (param_3) {
      return varData_81.content.firstChild.firstChild;
    } else {
      return varData_81.content.firstChild;
    }
  };
  const varData_82 = param_2 ? () => L(() => document.importNode(varData_79 ||= varData_80(), true)) : () => (varData_79 ||= varData_80()).cloneNode(true);
  varData_82.cloneNode = varData_82;
  return varData_82;
}
function E(param_1, param_2, param_3, param_4) {
  if (param_3 !== undefined && !param_4) {
    param_4 = [];
  }
  if (typeof param_2 != "function") {
    return D(param_1, param_2, param_4, param_3);
  }
  _(param_1_1 => D(param_1, param_2(), param_1_1, param_3), param_4);
}
function D(param_1, param_2, param_3, param_4, param_5) {
  while (typeof param_3 == "function") {
    param_3 = param_3();
  }
  if (param_2 === param_3) {
    return param_3;
  }
  const varData_83 = typeof param_2;
  const varData_84 = param_4 !== undefined;
  param_1 = varData_84 && param_3[0] && param_3[0].parentNode || param_1;
  if (varData_83 === "string" || varData_83 === "number") {
    if (varData_83 === "number") {
      param_2 = param_2.toString();
    }
    if (varData_84) {
      let varData_85 = param_3[0];
      if (varData_85 && varData_85.nodeType === 3) {
        varData_85.data = param_2;
      } else {
        varData_85 = document.createTextNode(param_2);
      }
      param_3 = x(param_1, param_3, param_4, varData_85);
    } else if (param_3 !== "" && typeof param_3 == "string") {
      param_3 = param_1.firstChild.data = param_2;
    } else {
      param_3 = param_1.textContent = param_2;
    }
  } else if (param_2 == null || varData_83 === "boolean") {
    param_3 = x(param_1, param_3, param_4);
  } else {
    if (varData_83 === "function") {
      _(() => {
        let varData_86 = param_2();
        while (typeof varData_86 == "function") {
          varData_86 = varData_86();
        }
        param_3 = D(param_1, varData_86, param_3, param_4);
      });
      return () => param_3;
    }
    if (Array.isArray(param_2)) {
      const varData_87 = [];
      const varData_88 = param_3 && Array.isArray(param_3);
      if (V(varData_87, param_2, param_3, param_5)) {
        _(() => param_3 = D(param_1, varData_87, param_3, param_4, true));
        return () => param_3;
      }
      if (varData_87.length === 0) {
        param_3 = x(param_1, param_3, param_4);
        if (varData_84) {
          return param_3;
        }
      } else if (varData_88) {
        if (param_3.length === 0) {
          z(param_1, varData_87, param_4);
        } else {
          Ae(param_1, param_3, varData_87);
        }
      } else {
        if (param_3) {
          x(param_1);
        }
        z(param_1, varData_87);
      }
      param_3 = varData_87;
    } else if (param_2.nodeType) {
      if (Array.isArray(param_3)) {
        if (varData_84) {
          return param_3 = x(param_1, param_3, param_4, param_2);
        }
        x(param_1, param_3, null, param_2);
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
function V(param_1, param_2, param_3, param_4) {
  let isDisabled = false;
  for (let loopIdx = 0, loopIdx_1 = param_2.length; loopIdx < loopIdx_1; loopIdx++) {
    let varData_89 = param_2[loopIdx];
    let varData_90 = param_3 && param_3[loopIdx];
    let varData_91;
    if (varData_89 != null && varData_89 !== true && varData_89 !== false) {
      if ((varData_91 = typeof varData_89) == "object" && varData_89.nodeType) {
        param_1.push(varData_89);
      } else if (Array.isArray(varData_89)) {
        isDisabled = V(param_1, varData_89, varData_90) || isDisabled;
      } else if (varData_91 === "function") {
        if (param_4) {
          while (typeof varData_89 == "function") {
            varData_89 = varData_89();
          }
          isDisabled = V(param_1, Array.isArray(varData_89) ? varData_89 : [varData_89], Array.isArray(varData_90) ? varData_90 : [varData_90]) || isDisabled;
        } else {
          param_1.push(varData_89);
          isDisabled = true;
        }
      } else {
        const varData_92 = String(varData_89);
        if (varData_90 && varData_90.nodeType === 3 && varData_90.data === varData_92) {
          param_1.push(varData_90);
        } else {
          param_1.push(document.createTextNode(varData_92));
        }
      }
    }
  }
  return isDisabled;
}
function z(param_1, param_2, _0x484c76 = null) {
  for (let loopIdx = 0, loopIdx_1 = param_2.length; loopIdx < loopIdx_1; loopIdx++) {
    param_1.insertBefore(param_2[loopIdx], _0x484c76);
  }
}
function x(param_1, param_2, param_3, param_4) {
  if (param_3 === undefined) {
    return param_1.textContent = "";
  }
  const varData_93 = param_4 || document.createTextNode("");
  if (param_2.length) {
    let isDisabled = false;
    for (let loopIdx = param_2.length - 1; loopIdx >= 0; loopIdx--) {
      const varData_94 = param_2[loopIdx];
      if (varData_93 !== varData_94) {
        const varData_95 = varData_94.parentNode === param_1;
        if (!isDisabled && !loopIdx) {
          if (varData_95) {
            param_1.replaceChild(varData_93, varData_94);
          } else {
            param_1.insertBefore(varData_93, param_3);
          }
        } else if (varData_95) {
          varData_94.remove();
        }
      } else {
        isDisabled = true;
      }
    }
  } else {
    param_1.insertBefore(varData_93, param_3);
  }
  return [varData_93];
}
const [Q, W] = se([]);
let P = {};
const q = (param_1, param_2) => {
  let varData_96 = 0;
  const varData_97 = Math.floor(Math.random() * 1000);
  const varData_98 = new Array(25).fill(false);
  W([...Q(), {
    id: varData_97,
    title: param_1,
    percent: 0,
    prog: []
  }]);
  const intervalId = setInterval(() => {
    varData_98[varData_96] = true;
    varData_96++;
    const varData_99 = Math.round(varData_96 / varData_98.length * 100);
    W(param_1_1 => param_1_1.map(param_1_2 => param_1_2.id === varData_97 ? {
      ...param_1_2,
      percent: varData_99,
      prog: varData_98
    } : param_1_2));
  }, param_2 / varData_98.length);
  P[varData_97] = intervalId;
};
const G = () => {
  for (const varData_100 in P) {
    clearInterval(P[varData_100]);
  }
  P = {};
  W([]);
};
const Se = J("<div class=\"center-column center\"><div class=\"progress-cont\">");
const Ce = J("<div class=\"progress\"><div class=\"top-line\"><p class=\"gilroy600 p-white\"></p><p class=\"gilroy400 p-white\">%</div><div class=\"bottom-line\"><ul class=\"center\">");
const xe = J("<li class=\"center\"><svg width=\"11\" height=\"8\" viewBox=\"0 0 11 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0H8L10.5 4L8 8H0L2.5 4L0 0Z\" fill=\"url(#paint0_linear_192_180)\"></path><defs><linearGradient id=\"paint0_linear_192_180\" x1=\"8\" y1=\"3.99996\" x2=\"-4.38265e-10\" y2=\"3.99996\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#129070\">");
const Le = param_1 => (() => {
  const varData_101 = Se();
  const varData_102 = varData_101.firstChild;
  E(varData_102, R(Y, {
    get each() {
      return Q();
    },
    children: param_1_1 => (() => {
      const varData_103 = Ce();
      const varData_104 = varData_103.firstChild;
      const varData_105 = varData_104.firstChild;
      const varData_106 = varData_105.nextSibling;
      const varData_107 = varData_106.firstChild;
      const varData_108 = varData_104.nextSibling;
      const varData_109 = varData_108.firstChild;
      E(varData_105, () => param_1_1.title);
      E(varData_106, () => param_1_1.percent, varData_107);
      E(varData_109, R(Y, {
        get each() {
          return param_1_1.prog;
        },
        children: param_1_2 => (() => {
          const varData_110 = xe();
          varData_110.classList.toggle("active", !!param_1_2);
          return varData_110;
        })()
      }));
      _(() => varData_103.classList.toggle("removeAnim", param_1_1.percent >= 100));
      return varData_103;
    })()
  }));
  _(() => varData_101.classList.toggle("hidden", Q().length <= 0));
  return varData_101;
})();
const Be = () => {
  function handleAction_4(param_1) {
    var varData_111 = param_1.data;
    if (varData_111.TaskBar) {
      if (varData_111.TaskBar.display) {
        q(varData_111.TaskBar.label, varData_111.TaskBar.duration);
      } else {
        G();
      }
    }
    if (varData_111.runProgress === true) {
      q(varData_111.name, 2000);
    }
    if (varData_111.runUpdate === true) {
      q(varData_111.name, varData_111.Length);
    }
    if (varData_111.closeFail === true) {
      G();
    }
    if (varData_111.closeProgress === true) {
      G();
    }
  }
  pe(() => {
    window.addEventListener("message", handleAction_4);
  });
  return R(Le, {});
};
const Ee = document.getElementById("root");
ve(() => R(Be, {}), Ee);