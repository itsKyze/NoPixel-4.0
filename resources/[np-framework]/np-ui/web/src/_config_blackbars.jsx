import { R as _0x457dcc, j as _0x4eb225, k as _0x33413c } from "./vendor.jsx";
import { d as _0x53517b, C as _0x2f30f3 } from "./ui_core.js";
import { A as _0x3cf113 } from "./ui-app.jsx";
import _0xf35aa0, { appName } from "./store_blackbars.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x53517b(_0xf35aa0, {
  mapStateToProps: param_1 => ({
    preferences: param_1.preferences
  })
});
class Container extends _0x457dcc.Component {
  render() {
    return <_0x3cf113 name={appName} style={{
      zIndex: 1000000
    }}>{this.props.preferences["hud.blackbars.enabled"] && <div style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: 0,
        flexDirection: "column"
      }}><div style={{
          backgroundColor: "black",
          height: Math.min(25, Number(this.props.preferences["hud.blackbars.size"])) + "vh",
          width: "100vw"
        }} /><div style={{
          flex: 1,
          width: "100vw",
          height: "100%"
        }} /><div style={{
          backgroundColor: "black",
          height: Math.min(25, Number(this.props.preferences["hud.blackbars.size"])) + "vh",
          width: "100vw"
        }} /></div>}</_0x3cf113>;
  }
}
const Container$1 = _0x33413c(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: "blackbars",
    render: Container$1,
    type: _0x2f30f3.Application
  };
};
export { config as default };