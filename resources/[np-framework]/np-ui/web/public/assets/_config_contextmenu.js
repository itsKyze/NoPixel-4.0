var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as _0x5e0fa5, w as _0x45d873, T as _0x3a1193, R as _0x44c350, k as _0x3efd41 } from "./vendor.jsx";
import { I as _0x10c2ec, d as _0x4eece0, n as _0x205cdd, C as _0x146d63 } from "./ui_core.js";
import { A as _0xf5aa9a } from "./ui-app.jsx";
import { T as _0x49a2c2 } from "./text.jsx";
import _0x47a118, { appName } from "./store_contextmenu.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const ContextMenu = param_1 => {
  const varData_1 = () => {
    const {
      Component: _0x1f34b5
    } = param_1.menus.find(({
      idx: _0x1ad0bf,
      level: _0x3e0c9b
    }) => _0x1ad0bf === param_1.activeIndex && _0x3e0c9b === param_1.activeLevel);
    return <_0x1f34b5 />;
  };
  const varData_2 = param_1.title && param_1.title.length > 0;
  return <div className="wrapperContextMenu"><div className={"col " + (param_1.position === "left" ? "colLeft" : "colRight")}>{varData_2 && <_0x5e0fa5.Fragment><div className="textCol"><div className="contextTitle">{param_1?.title}</div></div><div className="divider"><div className="line" /></div></_0x5e0fa5.Fragment>}<div className="menuItemsWrapper"><varData_1 /></div></div></div>;
};
const HtmlTooltip = _0x45d873(param_1 => ({
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "none",
    fontSize: param_1.typography.pxToRem(12),
    position: "relative"
  }
}))(_0x3a1193);
const MenuItem = ({
  description: _0x1ff0e0,
  recipe: _0x5eac3b,
  disabled = false,
  hasChildren: _0x3d696b,
  image = false,
  isBackButton = false,
  onClick: _0xb5b18a,
  title: _0x1cb4d2,
  icon: _0x312db8,
  titleRight = "",
  type = "default",
  isChecked = () => false
}) => {
  const [_0x566419, _0x275d22] = _0x44c350.useState(false);
  const varData_3 = ["menuItem"];
  if (_0x3d696b) {
    varData_3.push("menuItemHasChildren");
  }
  if (isBackButton) {
    varData_3.push("menuItemIsGoBack");
  }
  if (disabled) {
    varData_3.push("menuDisabled");
  }
  const varData_4 = _0x1ff0e0 ? _0x1ff0e0.split("\n") : [];
  return <_0x5e0fa5.Fragment><div className={varData_3.join(" ")} onClick={_0xb5b18a}>{!!image && <div style={{
        position: "absolute",
        top: -10000,
        opacity: 0
      }}><img src={image} alt="w" /></div>}{!!_0x312db8 && <div className="iconContainer"><_0x10c2ec className="icon" icon={_0x312db8} /></div>}{type === "checkbox" && <div className="iconContainer"><_0x10c2ec className="icon" icon={isChecked() ? "check-circle" : "times"} /></div>}<HtmlTooltip disableFocusListener={true} disableTouchListener={true} disableHoverListener={!image} title={<_0x44c350.Fragment><div onClick={() => _0x275d22(false)}><img src={!image ? "" : image} alt="w" style={{
            maxHeight: 512,
            maxWidth: 512
          }} /></div></_0x44c350.Fragment>} placement="left" open={_0x566419} onOpen={() => _0x275d22(true)} onClose={() => _0x275d22(false)}><div className="titleContextMenu">{isBackButton && <div className="childrenArrow" style={{
            transform: "scaleX(-1)"
          }}><svg width="5.09vh" height="5.46vh" viewBox="0 0 55 59" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_0_1)"><path d="M25 22L32 29L25 36" stroke="#00F8B9" stroke-width="2" /></g><path d="M5 -18L52 29L5 76" stroke="white" stroke-opacity="0.05" stroke-width="13" /><path d="M9 10L28 29L9 48" stroke="white" stroke-opacity="0.05" stroke-width="13" /><defs><filter id="filter0_d_0_1" x="12.2891" y="9.29291" width="33.125" height="39.4142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="6" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 1 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" /></filter></defs></svg></div>}<div style={{
            width: "100%"
          }}><div style={{
              display: "flex",
              justifyContent: "space-between"
            }}><_0x49a2c2 variant="body1" style={{
                display: "inline"
              }}>{_0x1cb4d2}</_0x49a2c2><_0x49a2c2 style={{
                textAlign: "right",
                display: "inline"
              }}>{titleRight}</_0x49a2c2></div><_0x49a2c2 variant="body2">{varData_4.map((param_1, param_2) => {
                return <span key={param_2}>{param_1}{param_2 === varData_4.length - 1 ? "" : <br />}</span>;
              })}</_0x49a2c2>{_0x5eac3b && <_0x49a2c2 style={{
              fontSize: "1vh"
            }} variant="body2">{_0x5eac3b}</_0x49a2c2>}</div></div></HtmlTooltip>{_0x3d696b && <div className="childrenArrow"><svg width="5.09vh" height="5.46vh" viewBox="0 0 55 59" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_0_1)"><path d="M25 22L32 29L25 36" stroke="#00F8B9" stroke-width="2" /></g><path d="M5 -18L52 29L5 76" stroke="white" stroke-opacity="0.05" stroke-width="13" /><path d="M9 10L28 29L9 48" stroke="white" stroke-opacity="0.05" stroke-width="13" /><defs><filter id="filter0_d_0_1" x="12.2891" y="9.29291" width="33.125" height="39.4142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset /><feGaussianBlur stdDeviation="6" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.972549 0 0 0 0 0.72549 0 0 0 1 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" /></filter></defs></svg></div>}</div></_0x5e0fa5.Fragment>;
};
const styles = "";
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x4eece0(_0x47a118);
class Container extends _0x44c350.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      show: false
    });
    __publicField(this, "onShow", param_1 => {
      const varData_5 = [];
      const varData_6 = {};
      const varData_7 = (param_1_1, _0x1cfc4d = 0, _0xd7f7f2 = 0) => {
        const varData_8 = [];
        const varData_9 = param_1_1.children.filter(param_1_2 => param_1_2.type === "checkbox");
        const varData_10 = varData_9.length > 0;
        if (_0xd7f7f2 > 0) {
          varData_8.push(<MenuItem description="" hasChildren={false} isBackButton={true} onClick={() => {
            _0x205cdd("np-ui:context:update", {
              activeIndex: 0,
              activeLevel: 0
            });
            this.props.updateState({
              activeIndex: 0,
              activeLevel: 0,
              checkedKeys: {}
            });
          }} title="Go Back" key={-1} />);
        }
        const varData_11 = () => {
          return <div className="menuItems">{varData_8}</div>;
        };
        param_1_1.children.forEach(param_1_2 => {
          if (!varData_6[_0xd7f7f2]) {
            varData_6[_0xd7f7f2] = 0;
          }
          const varData_12 = varData_6[_0xd7f7f2];
          varData_6[_0xd7f7f2] += 1;
          const varData_13 = Array.isArray(param_1_2.children) && param_1_2.children.length > 0;
          if (varData_13) {
            varData_7({
              children: param_1_2.children
            }, varData_12, _0xd7f7f2 + 1);
          }
          const varData_14 = param_1_3 => () => {
            const varData_15 = typeof param_1_3.action === "string" && param_1_3.action.length > 0;
            if (varData_15) {
              const varData_16 = {};
              if (varData_10) {
                varData_16.checkboxes = this.props.checkedKeys;
                for (const varData_17 of varData_9) {
                  if (varData_16.checkboxes[varData_17.key] === undefined) {
                    varData_16.checkboxes[varData_17.key] = varData_17.isChecked;
                  }
                }
              }
              _0x205cdd(param_1_3.action, {
                key: param_1_3.key,
                data: varData_16
              });
            }
            if (param_1_3.type === "checkbox") {
              this.props.updateState({
                checkedKeys: {
                  ...this.props.checkedKeys,
                  [param_1_3.key]: !(this.props.checkedKeys[param_1_3.key] ?? param_1_2.isChecked)
                }
              });
              return;
            }
            if (varData_13) {
              _0x205cdd("np-ui:context:update", {
                activeIndex: varData_12,
                activeLevel: _0xd7f7f2 + 1
              });
              this.props.updateState({
                activeIndex: varData_12,
                activeLevel: _0xd7f7f2 + 1,
                checkedKeys: {}
              });
            } else if (varData_15) {
              _0x205cdd("np-ui:closeApp");
              this.setState({
                show: false
              }, this.props.resetState);
            }
          };
          const varData_18 = () => {
            return this.props.checkedKeys[param_1_2.key] ?? param_1_2.isChecked;
          };
          varData_8.push(<MenuItem description={param_1_2.description} recipe={param_1_2.recipe} isBackButton={false} hasChildren={varData_13} image={param_1_2.image || false} onClick={varData_14(param_1_2)} title={param_1_2.title} disabled={param_1_2.disabled} icon={param_1_2.icon} titleRight={param_1_2.titleRight} type={param_1_2.type} isChecked={varData_18} key={varData_12} />);
        });
        varData_5.push({
          Component: varData_11,
          idx: _0x1cfc4d,
          level: _0xd7f7f2
        });
      };
      varData_7({
        children: param_1.options
      });
      this.props.updateState({
        menus: varData_5,
        position: param_1.position,
        title: param_1.title
      });
      this.setState({
        show: true
      });
    });
    __publicField(this, "onHide", () => {
      this.setState({
        show: false
      }, this.props.resetState);
    });
  }
  render() {
    return <_0xf5aa9a closeOnError={true} name={appName} onError={this.onHide} onEscape={this.onHide} onHide={this.onHide} onShow={this.onShow} style={{
      zIndex: 1000
    }}>{this.state.show && <ContextMenu {...this.props} />}</_0xf5aa9a>;
  }
}
const Container$1 = _0x3efd41(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: "contextmenu",
    render: Container$1,
    type: _0x146d63.Application,
    wrapperClassname: "app-wrapper flex-centered"
  };
};
export { config as default };