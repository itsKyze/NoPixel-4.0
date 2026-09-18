var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { R as _0x481701, j as _0x415f5f, k as _0x1c6fc6 } from "./vendor-69ed8822.js";
import { d as _0x484b3d, C as _0x1fc45a } from "./index-dcb6474f.js";
import { A as _0x246581 } from "./ui-app-b5e34f38.js";
import _0x4b1dcf, { appName } from "./store-933fe49f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x484b3d(_0x4b1dcf);
class Container extends _0x481701.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "onEvent", param_1 => {
      this.props.updateState(param_1);
    });
  }
  render() {
    return <_0x246581 store={true} name={appName} onEvent={this.onEvent} />;
  }
}
const Container$1 = _0x1c6fc6(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0x1fc45a.Application
  };
};
export { config as default };