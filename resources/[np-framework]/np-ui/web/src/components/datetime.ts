import { j as _0x49add0 } from "./vendor-69ed8822.js";
import { j as _0x1522ed, e as _0x2baff0 } from "./index-dcb6474f.js";
import { c as _0x3e8ddb, f as _0x1389a0 } from "./date-31836fe8.js";
import { T as _0xe4e200 } from "./text-2b84715a.js";
const DateTime = ({
  placement = "top",
  timestamp: _0x1bbea3,
  typeface = "body1",
  textStyle = {},
  timezone: _0x24bf6d
} = {}) => {
  const varData_1 = _0x24bf6d || _0x1522ed("date.timezone");
  return <_0x2baff0 title={_0x3e8ddb(_0x1bbea3, varData_1).format(_0x1522ed("date.format"))} placement={placement}><div><_0xe4e200 variant={typeface} style={textStyle}>{_0x1389a0(_0x1bbea3, varData_1)}</_0xe4e200></div></_0x2baff0>;
};
export { DateTime as D };