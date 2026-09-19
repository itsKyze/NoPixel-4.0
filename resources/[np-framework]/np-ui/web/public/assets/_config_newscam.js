var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as _0x394d1b, R as _0x1df61a, k as _0x3ad9c8 } from "./vendor.jsx";
import { d as _0x30c522, C as _0x1467ef } from "./ui_core.js";
import { A as _0x2108de } from "./ui-app.jsx";
import _0x1fd508, { appName } from "./store_newscam.js";
import { T as _0x425136 } from "./text.jsx";
import { m as _0x36cee8 } from "./styles.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const useStyles$1 = _0x36cee8({
  container: () => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    pointerEvents: "all",
    position: "relative"
  }),
  bb: () => ({
    height: "5vh",
    width: "100vw",
    backgroundColor: "black"
  }),
  bbMiddle: param_1 => ({
    flex: 1,
    backgroundColor: "unset"
  }),
  video: () => ({
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: "-3vh",
    margin: "0",
    objectFit: "cover"
  }),
  overlayText: () => ({
    position: "absolute",
    bottom: "7.5vw",
    left: "7.5vw",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: "3em",
    textShadow: "2px 0 4px #575657",
    fontStyle: "italic"
  })
});
const videoUrl = "https://gta-assets.nopixel.net/videos/LSBN.webm";
const LSBNOverlay = param_1 => {
  const varData_1 = useStyles$1(param_1);
  return <div className={varData_1.container}><video className={varData_1.video} autoPlay={true} loop={true} src={videoUrl} /><div className={varData_1.bb} /><div className={varData_1.bbMiddle}>{param_1.overlayText && <_0x425136 variant="body1"><div className={varData_1.overlayText}>{param_1.overlayText}</div></_0x425136>}</div><div className={varData_1.bb} /></div>;
};
const useStyles = _0x36cee8({
  "@global": {
    "@keyframes blink": {
      "50%": {
        opacity: "0"
      }
    }
  },
  container: () => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    pointerEvents: "none"
  }),
  recordingOverlay: () => ({
    height: "5vh",
    width: "5vh",
    borderRadius: "5vh",
    top: "10vh",
    right: "10vh",
    zIndex: "10",
    position: "absolute",
    backgroundColor: "red",
    animation: "blink",
    animationDuration: "5s",
    animationIterationCount: "infinite"
  })
});
const Recording = param_1 => {
  const varData_2 = useStyles(param_1);
  return <div className={varData_2.container}><div className={varData_2.recordingOverlay} /></div>;
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x30c522(_0x1fd508);
class Container extends _0x1df61a.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "onEvent", param_1 => {
      this.props.updateState(param_1);
    });
    __publicField(this, "onShow", (_0x54dda2 = {}) => {
      this.props.updateState({
        ..._0x54dda2,
        show: true
      });
    });
    __publicField(this, "onHide", () => {
      this.props.updateState({
        show: false
      });
    });
  }
  render() {
    return <_0x2108de center={true} store={true} name={appName} onEvent={this.onEvent} onHide={this.onHide} onShow={this.onShow}>{this.props.show && <LSBNOverlay overlayText={this.props.text} />}{this.props.recording && <Recording />}</_0x2108de>;
  }
}
const Container$1 = _0x3ad9c8(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0x1467ef.Application
  };
};
export { config as default };