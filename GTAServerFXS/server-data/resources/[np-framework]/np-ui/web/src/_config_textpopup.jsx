var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as _0x3f3a93, R as _0x238a3b, k as _0x83bed6 } from "./vendor.jsx";
import { d as _0xb9b1a1, C as _0x1ec69f } from "./ui_core.js";
import { A as _0xdd05d2 } from "./ui-app.jsx";
import { m as _0x752a7b, b as _0x45e64a } from "./styles.js";
import { B as _0x5489ac } from "./button.jsx";
import _0x2bb89a, { appName } from "./store_textpopup.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const useStyles = _0x752a7b({
  wrapper: () => ({
    minWidth: _0x45e64a.responsiveWidth(256),
    maxWidth: _0x45e64a.responsiveWidth(720),
    padding: _0x45e64a.responsiveWidth(16),
    backgroundColor: _0x45e64a.bgPrimary(),
    pointerEvents: "all"
  }),
  inputs: () => ({
    minWidth: _0x45e64a.responsiveWidth(256),
    maxWidth: _0x45e64a.responsiveWidth(720),
    display: "block",
    overflow: "auto",
    backgroundColor: _0x45e64a.bgPrimary()
  }),
  text: () => ({
    color: _0x45e64a.textColor(),
    fontFamily: "Arial, Helvetica, sans-serif",
    marginBottom: 16
  }),
  button: () => ({
    padding: _0x45e64a.responsiveWidth(16),
    paddingTop: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  })
});
const TextPopup = param_1 => {
  const varData_1 = useStyles();
  return <div className={varData_1.wrapper}><div className={varData_1.inputs}><pre className={varData_1.text}>{param_1.text}</pre></div><div className={varData_1.button}><_0x5489ac.Primary onClick={() => param_1.copyToClipboard()}>Copy</_0x5489ac.Primary></div></div>;
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0xb9b1a1(_0x2bb89a);
class Container extends _0x238a3b.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "onEvent", param_1 => {
      this.props.updateState(param_1);
    });
    __publicField(this, "onShow", (_0x29745b = {}) => {
      this.props.updateState({
        ..._0x29745b,
        show: true
      });
    });
    __publicField(this, "onHide", () => {
      this.props.updateState({
        show: false
      });
    });
    __publicField(this, "copyToClipboard", () => {
      const varData_2 = document.createElement("textarea");
      varData_2.innerHTML = this.props.text;
      document.body.appendChild(varData_2);
      varData_2.select();
      document.execCommand("copy");
      varData_2.remove();
    });
  }
  render() {
    return <_0xdd05d2 center={true} store={true} name={appName} onEvent={this.onEvent} onHide={this.onHide} onShow={this.onShow} onEscape={this.onHide}>{this.props.show && <TextPopup text={this.props.text} copyToClipboard={this.copyToClipboard} />}</_0xdd05d2>;
  }
}
const Container$1 = _0x83bed6(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0x1ec69f.Application
  };
};
export { config as default };