import { Q as _0x2729b4, p as _0x1c2df1 } from "./ui_core.js";
const contactName = (param_1, _0x2d0ddc = null) => {
  const varData_1 = _0x2729b4.find(param_1_1 => param_1_1.number.toString() === param_1.toString());
  const varData_2 = !!varData_1;
  const varData_3 = varData_2 ? varData_1.name : param_1.toString().length === 10 ? _0x1c2df1(param_1) : param_1;
  return {
    hasName: varData_2,
    name: varData_3
  };
};
export { contactName as c };