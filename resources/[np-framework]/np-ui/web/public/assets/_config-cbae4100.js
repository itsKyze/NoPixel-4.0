var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as _0x520eeb, R as _0x4d6a15, k as _0x1ff377 } from "./vendor-69ed8822.js";
import { d as _0x39dc95, C as _0x345841 } from "./index-dcb6474f.js";
import { A as _0x182418 } from "./ui-app-b5e34f38.js";
import { m as _0x2d456d } from "./styles-c7d7714e.js";
import _0x5afab2, { appName } from "./store-90d66427.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const useStyles = _0x2d456d({
  container: param_1 => ({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: param_1.show ? 1 : 0
  }),
  scope: () => ({
    width: "100vw",
    height: "100vh"
  })
});
const scope = "https://gta-assets.nopixel.net/images/sniper-scope1.png";
const SniperScope = param_1 => {
  const varData_1 = useStyles(param_1);
  return <div className={varData_1.container}><img className={varData_1.scope} src={scope} alt="scope" /></div>;
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x39dc95(_0x5afab2);
class Container extends _0x4d6a15.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      show: false
    });
    __publicField(this, "onEvent", async param_1 => {
      this.setState({
        show: param_1.show
      });
    });
  }
  render() {
    return <_0x182418 center={true} closeOnError={true} store={true} name={appName} onEvent={this.onEvent}><SniperScope show={this.state.show} /></_0x182418>;
  }
}
const Container$1 = _0x1ff377(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x5afab2,
    name: appName,
    render: Container$1,
    type: _0x345841.Application
  };
};
export { config as default };