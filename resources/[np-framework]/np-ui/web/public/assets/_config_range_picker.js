var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { R as _0x1b1085, j as _0x5d8ef7, al as _0x51c1a5, k as _0x51a65b } from "./vendor.jsx";
import { d as _0x45f9ce, n as _0x1b7032, C as _0x15533e } from "./ui_core.js";
import { A as _0x2d0631 } from "./ui-app.jsx";
import { B as _0x5b09e7 } from "./button.jsx";
import { m as _0x4b3924, b as _0x3df5bd } from "./styles.js";
import _0x34f84c, { appName } from "./store_range_picker.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const useStyles = _0x4b3924({
  wrapper: () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh"
  }),
  container: () => ({
    backgroundColor: _0x3df5bd.bgPrimary(),
    pointerEvents: "all",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "30vh",
    padding: _0x3df5bd.responsiveWidth(32)
  }),
  sliders: () => ({
    display: "flex",
    height: "40vh"
  }),
  slider: () => ({
    color: _0x3df5bd.textColor(),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }),
  sliderLabel: () => ({
    padding: _0x3df5bd.responsiveWidth(4),
    textAlign: "center",
    minWidth: _0x3df5bd.responsiveWidth(32),
    fontFamily: "Gilroy",
    fontSize: _0x3df5bd.responsiveWidth(15),
    fontStyle: "normal",
    fontWeight: 500
  }),
  button: () => ({
    marginTop: _0x3df5bd.responsiveWidth(32)
  })
});
const RangePicker = param_1 => {
  const varData_1 = useStyles();
  const [_0x18f678, _0x2eade3] = _0x1b1085.useState([1, 1, 1]);
  const varData_2 = (param_1_1, param_2) => {
    const varData_3 = [..._0x18f678];
    varData_3[param_1_1] = param_2;
    _0x2eade3(varData_3);
  };
  return <div className={varData_1.wrapper}><div className={varData_1.container}><div className={varData_1.sliders}>{[...Array(param_1.sliders)].map((param_1_1, param_2) => {
          return <div className={varData_1.slider}><_0x51c1a5 orientation="vertical" defaultValue={1} aria-labelledby="vertical-slider" min={1} step={1} max={100} onChange={(param_1_2, param_2_1) => varData_2(param_2, param_2_1)} /><div className={varData_1.sliderLabel}>{_0x18f678[param_2]}</div></div>;
        })}</div><div className={varData_1.button}><_0x5b09e7.Primary onClick={() => param_1.submitValues(_0x18f678)}>Submit</_0x5b09e7.Primary></div></div></div>;
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x45f9ce(_0x34f84c);
class Container extends _0x1b1085.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      show: false,
      sliders: 3
    });
    __publicField(this, "onEvent", param_1 => {
      this.props.updateState(param_1);
    });
    __publicField(this, "onShow", (_0x8414a0 = {}) => {
      this.setState({
        ..._0x8414a0,
        submitUrl: _0x8414a0.submitUrl ?? "np-ui:submitRangeValues",
        show: true,
        sliders: _0x8414a0.sliders ?? 3
      });
    });
    __publicField(this, "onHide", () => {
      this.setState({
        show: false
      });
    });
    __publicField(this, "submitValues", param_1 => {
      _0x1b7032(this.props.submitUrl ?? "np-ui:submitRangeValues", {
        ranges: param_1
      });
    });
  }
  render() {
    return <_0x2d0631 name={appName} onEvent={this.onEvent} onHide={this.onHide} onShow={this.onShow} onEscape={this.onHide}>{this.state.show && <RangePicker sliders={this.state.sliders} {...this.props} submitValues={this.submitValues} />}</_0x2d0631>;
  }
}
const Container$1 = _0x51a65b(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: "range-picker",
    render: Container$1,
    type: _0x15533e.Application
  };
};
export { config as default };