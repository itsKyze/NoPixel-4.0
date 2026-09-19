import { a4 as _0x3a5de7, a5 as _0x42ef91, a6 as _0x44aa68, a7 as _0x22008f } from "./vendor-69ed8822.js";
_0x3a5de7.extend(_0x42ef91);
_0x3a5de7.extend(_0x44aa68);
_0x3a5de7.extend(_0x22008f);
const formatDate = (param_1, {
  includeTime = true
} = {}) => {
  const varData_1 = _0x3a5de7.utc(param_1);
  if (includeTime) {
    return varData_1.format("DD MMM YYYY HH:mm [UTC]");
  }
  return varData_1.format("DD MMM YYYY");
};
const fromNow = param_1 => {
  const varData_2 = _0x3a5de7.unix(param_1);
  let varData_3 = "";
  if (varData_2.isValid()) {
    varData_3 = varData_2.fromNow();
  } else {
    varData_3 = _0x3a5de7(param_1).utc().fromNow();
  }
  return varData_3;
};
const diff = (param_1, _0x51d5b8 = _0x3a5de7().utc()) => {
  const varData_4 = _0x3a5de7(param_1).utc();
  const varData_5 = _0x51d5b8;
  return varData_4.diff(varData_5);
};
const fromNowUTC = (param_1, _0x3530ca = "UTC") => {
  const varData_6 = _0x3a5de7.unix(param_1).utc();
  return varData_6.tz(_0x3530ca).fromNow();
};
const convertTz = (param_1, param_2, _0x5011de = "UTC") => {
  const varData_7 = _0x3a5de7.unix(param_1).tz(_0x5011de);
  return varData_7.clone().tz(param_2);
};
const formatUTCDateFromMs = (param_1, _0x392a37 = "") => {
  return _0x3a5de7(param_1).utc().format(_0x392a37);
};
export { fromNow as a, convertTz as c, diff as d, fromNowUTC as f };