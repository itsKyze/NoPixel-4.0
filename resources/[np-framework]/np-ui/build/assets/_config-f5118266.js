import { j as _0x547a3a, M as _0x23ab81, R as _0x42a06f, S as _0x1809f9, k as _0x112efc } from "./vendor-69ed8822.js";
import { d as _0x4d7b11, C as _0x4c72e9 } from "./index-dcb6474f.js";
import _0x54d5a5 from "./store-77e28808.js";
import { A as _0x5c66ab } from "./ui-app-b5e34f38.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
function Alert(param_1) {
  return <_0x23ab81 elevation={6} variant="filled" {...param_1} />;
}
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x4d7b11(_0x54d5a5);
const snackbarMessage = (param_1, _0x3ad07b = "success", _0x23b48f = 5000) => ({
  [_0x54d5a5.key]: {
    message: param_1,
    timeout: _0x23b48f,
    type: _0x3ad07b,
    open: true
  }
});
class Snackybar extends _0x42a06f.Component {
  render() {
    return <_0x5c66ab name="snackbar"><_0x1809f9 open={this.props.open} autoHideDuration={this.props.timeout} onClose={() => this.props.updateState({
        open: false
      })}><Alert onClose={() => this.props.updateState({
          open: false
        })} severity={this.props.type}>{this.props.message}</Alert></_0x1809f9></_0x5c66ab>;
  }
}
const Container = _0x112efc(mapStateToProps, mapDispatchToProps)(Snackybar);
const config = () => {
  return {
    name: "snackbar",
    render: Container,
    type: _0x4c72e9.Application
  };
};
export { config as default };