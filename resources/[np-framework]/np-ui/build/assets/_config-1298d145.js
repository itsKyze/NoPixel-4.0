var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { R as _0x110276, j as _0x5a7902, k as _0x5198e0 } from "./vendor-69ed8822.js";
import { A as _0x5d84e3 } from "./ui-app-b5e34f38.js";
import { d as _0x2c1dfc, C as _0xb92a67 } from "./index-dcb6474f.js";
import _0x46b313, { appName } from "./store-37db9883.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x2c1dfc(_0x46b313);
class Container extends _0x110276.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "onEvent", (_0xd9518d = {}) => {
      if (!_0xd9518d.job && (!_0xd9518d.id || _0xd9518d.id === -1)) {
        _0xd9518d.id = null;
      }
      this.props.updateState(_0xd9518d);
    });
  }
  render() {
    return <_0x5d84e3 store={true} name="character" onEvent={this.onEvent} />;
  }
}
const Container$1 = _0x5198e0(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0xb92a67.Application
  };
};
export { config as default };