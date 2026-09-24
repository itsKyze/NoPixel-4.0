var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { R as _0x2c841c, j as _0x33a0b6, k as _0x341eff } from "./vendor.jsx";
import { T as _0x1f1fbc } from "./text.jsx";
import _0x3968a1, { appName } from "./store_status_hud.js";
import { d as _0x14cf71, C as _0x248247 } from "./ui_core.js";
import { A as _0x119a6e } from "./ui-app.jsx";
import { D as _0x30339f } from "./duration-timer.jsx";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const container = "_container_1h5v8_1";
const status_box = "_status_box_1h5v8_9";
const divider = "_divider_1h5v8_27";
const line = "_line_1h5v8_38";
const content = "_content_1h5v8_45";
const styles = {
  container,
  status_box,
  divider,
  line,
  content
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x14cf71(_0x3968a1);
class Container extends _0x2c841c.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "onEvent", param_1 => {
      this.props.updateState(param_1);
    });
  }
  render() {
    return <_0x119a6e center={true} store={true} name={appName} onEvent={this.onEvent}>{this.props.show && <div className={styles.container}><div className={styles.status_box}><_0x1f1fbc variant="h6">{this.props.title}</_0x1f1fbc><div className={styles.divider}><div className={styles.line} /></div>{this.props.values.length > 0 && <div className={styles.content}>{this.props.values.map((param_1, param_2) => {
              if (typeof param_1 !== "string") {
                if (param_1.type === "countdown") {
                  return <_0x30339f countdown={true} startTime={param_1.seconds} prefix={param_1?.prefix} />;
                }
                return <p className={styles.value} key={param_2}>{param_1.text}</p>;
              }
              return <p className={styles.value} key={param_2}>{param_1}</p>;
            })}</div>}</div></div>}</_0x119a6e>;
  }
}
const Container$1 = _0x341eff(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    store: _0x3968a1,
    name: appName,
    render: Container$1,
    type: _0x248247.Application
  };
};
export { config as default };