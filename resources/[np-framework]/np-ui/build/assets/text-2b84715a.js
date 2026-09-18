import { R as _0x3d5ab4, j as _0x31430a, y as _0x8a1ba7 } from "./vendor-69ed8822.js";
class Text extends _0x3d5ab4.Component {
  render() {
    const {
      noColorProp = false,
      ..._0x3130fe
    } = this.props;
    let varData_1 = {
      wordBreak: "break-word"
    };
    if (this.props.style) {
      varData_1 = {
        ...this.props.style
      };
    }
    if (!noColorProp) {
      return <_0x8a1ba7 color="textPrimary" {..._0x3130fe} style={varData_1}>{_0x3130fe.children}</_0x8a1ba7>;
    }
    return <_0x8a1ba7 {..._0x3130fe} style={varData_1}>{_0x3130fe.children}</_0x8a1ba7>;
  }
}
export { Text as T };