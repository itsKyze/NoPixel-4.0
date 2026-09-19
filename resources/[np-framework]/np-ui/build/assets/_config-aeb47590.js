var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as _0x27f424, R as _0x187e03, k as _0x3bcfc8 } from "./vendor-69ed8822.js";
import { n as _0x2d13d1, e as _0xaa3ca2, I as _0xe19512, i as _0xf88ec6, C as _0x1fa564 } from "./index-dcb6474f.js";
import { A as _0x55c20d } from "./ui-app-b5e34f38.js";
import { T as _0x46e578 } from "./text-2b84715a.js";
import _0xb19858 from "./store-9eaaa44b.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const debugLogs = "";
const mapStateToProps = param_1 => ({
  debugLog: param_1[_0xb19858.key]
});
function JsonWrap({
  children: _0x18a218
}) {
  return <div className="debug-log-json-wrapper">{_0x18a218}</div>;
}
function Log({
  log: _0x106e59
}) {
  const varData_1 = JSON.stringify(_0x106e59.data, null, 2);
  const varData_2 = varData_1.split(/\n/g).length;
  const varData_3 = JSON.stringify(_0x106e59.result, null, 2);
  const varData_4 = varData_3.split(/\n/g).length;
  return <div className={"debug-log-wrapper debug-log-wrapper-" + (_0x106e59.arrow ? "red" : "")}><_0x46e578 variant="body1" style={{
      color: "black"
    }}>{_0x106e59.type}: {_0x106e59.action}</_0x46e578><div className="flex flex-row flex-space-between"><_0x46e578 variant="body1" style={{
        color: "black"
      }}>Body:</_0x46e578>{_0x106e59.type === "Action" && <div onClick={() => _0x2d13d1(_0x106e59.action, _0x106e59.data)}><_0xaa3ca2 title="Replay Request"><div><_0xe19512 icon="redo" size="sm" /></div></_0xaa3ca2></div>}</div><JsonWrap><textarea tabIndex={-1} rows={Math.min(varData_2, 8)} defaultValue={varData_1} /></JsonWrap>{_0x106e59.type === "Action" && <_0x187e03.Fragment><_0x46e578 variant="body1" style={{
        color: "black"
      }}>Response: {!_0x106e59.ms ? "" : "(" + _0x106e59.ms + "ms)"}</_0x46e578><JsonWrap><textarea tabIndex={-1} rows={Math.min(varData_4, 8)} defaultValue={varData_3} /></JsonWrap></_0x187e03.Fragment>}</div>;
}
class ActionLog extends _0x187e03.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      show: _0xf88ec6()
    });
    __publicField(this, "onEvent", param_1 => {
      this.setState({
        show: param_1.display
      });
    });
  }
  render() {
    if (!_0xf88ec6()) {
      return null;
    }
    const {
      debugLog: _0x557773
    } = this.props;
    if (!_0x557773.enabled) {
      return null;
    }
    return <_0x55c20d name="debuglogs" onEvent={this.onEvent}>{this.state.show && <div className="debug-logs-wrapper" tabIndex={-1}><div className="inner">{_0x557773.log.map(param_1 => <Log log={param_1} key={Math.random()} />)}</div></div>}</_0x55c20d>;
  }
}
const Container = _0x3bcfc8(mapStateToProps, null)(ActionLog);
const config = () => {
  return {
    name: "debuglogs",
    render: Container,
    type: _0x1fa564.Application
  };
};
export { config as default };