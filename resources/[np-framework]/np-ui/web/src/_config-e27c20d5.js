import { r as _0x4a2127, j as _0x52ab73, A as _0x2c6f1d, m as _0x2daa2b } from "./vendor-69ed8822.js";
import { A as _0x589e86 } from "./ui-app-b5e34f38.js";
import { u as _0x20cc84, C as _0x3440dc } from "./index-dcb6474f.js";
import { appName } from "./store-6e4dd9d5.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const index = "";
const InteractionPopup = () => {
  const [_0x705529] = _0x20cc84(appName);
  const varData_1 = _0x4a2127.useMemo(() => {
    const varData_2 = _0x705529.message.match(/\[(\w+)\]/g);
    const varData_3 = [];
    for (const varData_4 of varData_2 || []) {
      const varData_5 = varData_2?.[varData_2.indexOf(varData_4) + 1];
      let varData_6 = varData_5 ? _0x705529.message.slice(_0x705529.message.indexOf(varData_4) + varData_4.length, _0x705529.message.indexOf(varData_5)) : _0x705529.message.slice(_0x705529.message.indexOf(varData_4) + varData_4.length);
      if (varData_2?.indexOf(varData_4) === 0) {
        varData_6 = _0x705529.message.slice(0, _0x705529.message.indexOf(varData_4)) + varData_6;
      }
      varData_3.push({
        keybind: varData_4.replace(/\[|\]/g, ""),
        label: varData_6
      });
    }
    return varData_3;
  }, [_0x705529.message]);
  const varData_7 = _0x4a2127.useMemo(() => {
    const varData_8 = _0x705529.message.match(/\[(\w)\]/);
    if (varData_8) {
      const varData_9 = varData_8.index || 0;
      return _0x705529.message.slice(0, varData_9) + _0x705529.message.slice(varData_9 + varData_8[0].length);
    } else {
      return _0x705529.message;
    }
  }, [_0x705529.message]);
  const varData_10 = {
    transform: ["translateY(50%)", "translateY(0%)"],
    opacity: [0, 1]
  };
  const varData_11 = {
    transform: ["translateX(50%)", "translateX(0%)"],
    opacity: [0, 1]
  };
  const varData_12 = {
    transform: "translateY(50%)",
    opacity: 0
  };
  const varData_13 = {
    transform: "translateX(50%)",
    opacity: 0
  };
  const varData_14 = varData_1.length > 0 ? varData_13 : varData_12;
  const varData_15 = varData_1.length > 0 ? varData_11 : varData_10;
  return <_0x2c6f1d>{_0x705529.show && <div className="interation-wrapper">{varData_1.length > 0 ? <div className="interaction-cols">{varData_1.map((param_1, param_2) => <div className="interaction-alert"><_0x2daa2b.div className="interaction-key-container" initial={varData_12} exit={varData_12} animate={varData_10} transition={{
            ease: "easeInOut",
            duration: 0.3
          }}><h1 className="interaction-key-text">{param_1.keybind}</h1></_0x2daa2b.div><_0x2daa2b.h1 className="interaction-text" initial={varData_14} exit={varData_14} animate={varData_15} transition={{
            ease: "easeInOut",
            duration: 0.4
          }}>{param_1.label}</_0x2daa2b.h1></div>)}</div> : <div className="interaction-cols"><div className="interaction-alert"><_0x2daa2b.h1 className="interaction-text" initial={varData_14} exit={varData_14} animate={varData_15} transition={{
            ease: "easeInOut",
            duration: 0.4
          }}>{varData_7}</_0x2daa2b.h1></div></div>}</div>}</_0x2c6f1d>;
};
const InteractionContainer = () => {
  const [_0x733da1, _0x794510] = _0x20cc84(appName);
  const varData_16 = param_1 => {
    _0x794510({
      message: param_1.message || "",
      opts: param_1.opts || {},
      show: param_1.show
    });
  };
  return <_0x589e86 name={appName} onEvent={varData_16}><InteractionPopup /></_0x589e86>;
};
const config = () => {
  return {
    name: "interactions",
    render: InteractionContainer,
    type: _0x3440dc.Application
  };
};
export { config as default };