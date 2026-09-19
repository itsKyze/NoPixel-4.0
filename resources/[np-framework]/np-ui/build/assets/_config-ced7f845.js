var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as _0x5aa6a4, n as _0x3b8987, r as _0x1bc8d5, R as _0x399059, k as _0x22c296 } from "./vendor-69ed8822.js";
import { K as _0x5e0441, d as _0xd1bdb7, n as _0x41b842, C as _0xb4ad2b } from "./index-dcb6474f.js";
import { A as _0x3857dc } from "./ui-app-b5e34f38.js";
import { F as _0x2d8ced } from "./input-67b043ed.js";
import _0x2dedcc, { appName } from "./store-1dfb7a2a.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./text-2b84715a.js";
import "./styles-c7d7714e.js";
import "./index-6dbd65c5.js";
const index$1 = "";
const Switch = param_1 => {
  return <div className="settings-switch-wrapper" style={{
    justifyContent: param_1?.spaceBetween ? "space-between" : ""
  }}><input className="np-switch" id={"np-switch-" + param_1.id} type="checkbox" onChange={() => param_1.onChange(!param_1.checked)} checked={param_1.checked} /><label className={_0x3b8987("np-switch-toggle", {
      enabled: param_1.checked
    })} htmlFor={"np-switch-" + param_1.id}><span className="np-switch-button" /></label></div>;
};
const index = "";
const Select = param_1 => {
  const [_0x1ebb3a, _0x3ce5f5] = _0x1bc8d5.useState(false);
  const varData_1 = () => {
    if (!_0x1ebb3a) {
      return;
    }
    _0x3ce5f5(false);
  };
  const varData_2 = param_1_1 => {
    const varData_3 = param_1?.options?.find(param_1_2 => param_1_2.value === param_1_1 || param_1_2.id === param_1_1);
    if (!varData_3) {
      return param_1.value;
    }
    return varData_3?.label;
  };
  const varData_4 = _0x5e0441(varData_1);
  return <div className={_0x3b8987("settings-dropdown", {
    "np-dropdow-active": _0x1ebb3a || param_1.value
  })} onClick={() => _0x3ce5f5(!_0x1ebb3a)}><input className={_0x3b8987("np-text-box", {
      "input-focused": _0x1ebb3a || param_1.value
    })} type="text" readOnly={true} value={varData_2(param_1.value)} placeholder="Select item..." /><div className={_0x3b8987("optionsSelect", {
      active: _0x1ebb3a
    })} ref={varData_4}><div onClick={() => param_1.onChange("")}>Select item...</div>{param_1.options && param_1.options.map((param_1_1, param_2) => <div onClick={() => param_1.onChange(param_1_1.value ?? param_1_1.id)} key={param_2}>{param_1_1.label}</div>)}</div></div>;
};
const TextBox = param_1 => {
  const [_0x349d5c, _0x37665c] = _0x399059.useState({});
  const varData_5 = (param_1_1, param_2, _0x22bd50 = 0) => {
    if (_0x22bd50 > 0 && typeof param_2 === "string" && param_2.length > _0x22bd50) {
      param_2 = param_2.substring(0, _0x22bd50);
    }
    _0x37665c({
      ..._0x349d5c,
      [param_1_1]: param_2
    });
  };
  const varData_6 = param_1_1 => {
    if (param_1_1.key === "Enter" && !param_1_1.shiftKey) {
      param_1.submitValues(_0x349d5c);
    }
  };
  _0x1bc8d5.useEffect(() => {
    let varData_7 = {};
    for (let loopIdx = 0; loopIdx < param_1.items.length; loopIdx++) {
      varData_7[param_1.items[loopIdx].name] = param_1.items[loopIdx]._defaultValue ?? null;
    }
    _0x37665c(varData_7);
  }, [param_1.items]);
  return <div className="wrapperTextbox" onKeyDown={varData_6}><div className="inputsTextbox">{param_1.items.map(param_1_1 => {
        if (param_1_1._type === "select") {
          return <div className="rowTextBox">{param_1_1.icon && <div className="iconBox"><i className={"iconTextBox fa fa-" + param_1_1.icon} /></div>}<div className="inputTextbox" key={param_1_1.name}><div className="label">{param_1_1.label}</div><Select label="" options={param_1_1.options.map(param_1_2 => ({
                ...param_1_2,
                value: param_1_2.name
              }))} onChange={param_1_2 => varData_5(param_1_1.name, param_1_2)} value={_0x349d5c[param_1_1.name]} /></div></div>;
        }
        if (param_1_1._type === "checkbox") {
          return <div className="rowTextBox">{param_1_1.icon && <div className="iconBox"><i className={"iconTextBox fa fa-" + param_1_1.icon} /></div>}<div className="inputTextbox" key={param_1_1.name}><div className="label">{param_1_1.label}</div><Switch id={param_1_1.name} label={param_1_1.label} onChange={param_1_2 => varData_5(param_1_1.name, param_1_2)} checked={_0x349d5c[param_1_1.name]} /></div></div>;
        }
        if (param_1_1.type === "password" || param_1_1._type === "password") {
          return <div className="rowTextBox">{param_1_1.icon && <div className="iconBox"><i className={"iconTextBox fa fa-" + param_1_1.icon} /></div>}<div className="inputTextbox" key={param_1_1.name}><div className="label">{param_1_1.label}</div><input className="inputText" type="password" placeholder="Password" onChange={param_1_2 => varData_5(param_1_1.name, param_1_2.currentTarget.value)} value={_0x349d5c[param_1_1.name]} /></div></div>;
        }
        const varData_8 = param_1_1.maxLength ? param_1_1.label + " (" + (param_1_1.maxLength - (_0x349d5c[param_1_1.name]?.length ?? 0)) + " remaining)" : param_1_1.label;
        if (param_1_1._type === "textarea") {
          return <div className="rowTextBox">{param_1_1.icon && <div className="iconBox"><i className={"iconTextBox fa fa-" + param_1_1.icon} /></div>}<div className="inputTextbox inputTextarea" key={param_1_1.name}><div className="label">{varData_8}</div><textarea className="inputText" placeholder="Text" onChange={param_1_2 => varData_5(param_1_1.name, param_1_2.currentTarget.value, param_1_1.maxLength)} value={_0x349d5c[param_1_1.name]} /></div></div>;
        }
        if (param_1_1._type === "color") {
          return <div className="rowTextBox">{param_1_1.icon && <div className="iconBox"><i className={"iconTextBox fa fa-" + param_1_1.icon} /></div>}<div className="inputTextbox" key={param_1_1.name}><div className="label">{varData_8}</div><input className="inputText" type="color" name="inputcolor" onChange={param_1_2 => varData_5(param_1_1.name, param_1_2.currentTarget.value)} value={_0x349d5c[param_1_1.name]} /></div></div>;
        }
        if (param_1_1._type === "imagelist") {
          return <div className="inputTextbox" key={param_1_1.name}><_0x2d8ced.ImageList label={varData_8} icon={param_1_1.icon} minWidth={param_1_1.minWidth} minHeight={param_1_1.minHeight} onChange={param_1_2 => varData_5(param_1_1.name, param_1_2)} value={_0x349d5c[param_1_1.name]} /></div>;
        }
        return <div className="rowTextBox">{param_1_1.icon && <div className="iconBox"><i className={"iconTextBox fa fa-" + param_1_1.icon} /></div>}<div className="inputTextbox" key={param_1_1.name}><div className="label">{varData_8}</div><input className="inputText" type="text" placeholder="Text" onChange={param_1_2 => varData_5(param_1_1.name, param_1_2.currentTarget.value)} value={_0x349d5c[param_1_1.name]} /></div></div>;
      })}</div><div className="buttonTextbox" onClick={() => param_1.submitValues(_0x349d5c)}>Submit</div></div>;
};
const styles = "";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0xd1bdb7(_0x2dedcc);
const defaultState = {
  callbackUrl: "",
  key: null,
  title: "",
  items: [],
  hiddenItems: [],
  show: false
};
let lastState = defaultState;
class Container extends _0x399059.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", defaultState);
    __publicField(this, "onEvent", param_1 => {
      if (!param_1.show) {
        this.setState({
          ...defaultState
        });
        return;
      }
      this.setState({
        ...defaultState,
        ...param_1
      });
    });
    __publicField(this, "onHide", () => {
      lastState = this.state;
      this.setState({
        ...defaultState
      });
    });
    __publicField(this, "submitValues", param_1 => {
      _0x41b842(this.state.callbackUrl, {
        values: param_1,
        key: this.state.key,
        hiddenItems: this.state.hiddenItems
      });
    });
    __publicField(this, "onShow", param_1 => {
      this.setState({
        ...defaultState,
        ...param_1,
        show: true
      });
    });
    __publicField(this, "onEscapeData", () => {
      return {
        callbackUrl: lastState.callbackUrl,
        key: lastState.key
      };
    });
  }
  render() {
    return <_0x3857dc center={true} store={true} name={appName} onEscape={this.onHide} onEscapeData={this.onEscapeData} onEvent={this.onEvent} onHide={this.onHide} onShow={this.onShow}>{this.state.show && <TextBox {...this.state} submitValues={this.submitValues} />}</_0x3857dc>;
  }
}
const Container$1 = _0x22c296(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x2dedcc,
    name: appName,
    render: Container$1,
    type: _0xb4ad2b.Application
  };
};
export { config as default };