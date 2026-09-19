import { a2 as _0x8c1e4, a3 as _0x1ff0c4 } from "./vendor-69ed8822.js";
const makeStyles = param_1 => _0x8c1e4(param_1_1 => _0x1ff0c4(typeof param_1 === "function" ? param_1(param_1_1) : param_1));
const responsiveHeight = (param_1, _0x539ccd = false) => {
  const varData_1 = Math.max(1080, window.innerHeight);
  const varData_2 = varData_1 / 1080;
  if (_0x539ccd) {
    return Math.floor(param_1 * varData_2);
  }
  return Math.floor(param_1 * varData_2) + "px";
};
const responsiveWidth = (param_1, _0x411533 = false, _0x4141ca = false) => {
  if (_0x411533) {
    return responsiveHeight(param_1);
  }
  const varData_3 = Math.max(1920, window.innerWidth);
  const varData_4 = varData_3 / 1920;
  if (_0x4141ca) {
    return Math.floor(param_1 * varData_4);
  }
  return Math.floor(param_1 * varData_4) + "px";
};
const pStylee = {
  fontFamily: "Arial, Helvetica, sans-serif !important",
  letterSpacing: responsiveWidth(0.7) + " !important",
  fontWeight: "600 !important",
  textDecoration: "none !important",
  fontStyle: "normal !important",
  fontVariant: "small-caps !important",
  textTransform: "none !important",
  width: "100% !important",
  textShadow: "-1px 1px 0 #37474F, 1px 1px 0 #37474F, 1px -1px 0 #37474F, -1px -1px 0 #37474F"
};
const baseStyles = {
  bgPrimary: () => "#222831",
  bgSecondary: () => "#30475e",
  bgTertiary: () => "#1e3a56",
  textColor: () => "white",
  textColorGrey: () => "#E0E0E0",
  colorCurrencyIn: () => "#95ef77",
  colorCurrencyOut: () => "#f2a365",
  colorTwat: () => "#1565C0",
  colorWarning: () => "#FFA726",
  colorYellow: () => "#FFEE58",
  blueText: "#4DD0E1",
  greenText: "#AED581",
  redText: "#FF4081",
  cashGreen: "green",
  cashRed: "red",
  pStylee: pStylee,
  flex: {
    display: "flex",
    width: "100%",
    height: "100%"
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  textStroke: {
    textShadow: "-1px 1px 0 #37474F, 1px 1px 0 #37474F, 1px -1px 0 #37474F, -1px -1px 0 #37474F"
  },
  responsiveHeight: responsiveHeight,
  responsiveWidth: responsiveWidth
};
export { baseStyles as b, makeStyles as m };