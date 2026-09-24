import { R as _0x2785f2, j as _0x216e1a, B as _0x4cb6a2 } from "./vendor.jsx";
const stopKeyPress = (param_1, param_2) => param_1_1 => {
  if (param_1_1.key === "Enter") {
    param_1_1.preventDefault();
    param_1_1.stopPropagation();
    if (param_2) {
      param_1(param_1_1);
    }
  }
};
class Primary extends _0x2785f2.Component {
  render() {
    return <div><_0x4cb6a2 variant="contained" size={this.props.size ?? "small"} color="primary" {...this.props} onKeyDown={stopKeyPress(this.props.onClick, false)} onKeyUp={stopKeyPress(this.props.onClick, false)} onKeyPress={stopKeyPress(this.props.onClick, true)}>{this.props.children}</_0x4cb6a2></div>;
  }
}
class Secondary extends _0x2785f2.Component {
  render() {
    return <div><_0x4cb6a2 variant="contained" size={this.props.size ?? "small"} color="secondary" {...this.props} onKeyDown={stopKeyPress(this.props.onClick, false)} onKeyUp={stopKeyPress(this.props.onClick, false)} onKeyPress={stopKeyPress(this.props.onClick, true)}>{this.props.children}</_0x4cb6a2></div>;
  }
}
class Tertiary extends _0x2785f2.Component {
  render() {
    return <div><_0x4cb6a2 variant="contained" size={this.props.size ?? "small"} color="default" {...this.props} onKeyDown={stopKeyPress(this.props.onClick, false)} onKeyUp={stopKeyPress(this.props.onClick, false)} onKeyPress={stopKeyPress(this.props.onClick, true)}>{this.props.children}</_0x4cb6a2></div>;
  }
}
const Button = {
  Primary,
  Secondary,
  Tertiary
};
export { Button as B };