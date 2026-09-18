import { r as _0x47049d, j as _0x5a48bf, n as _0x14d862, R as _0x3233a0 } from "./vendor-69ed8822.js";
const index$1 = "";
const Loading = param_1 => {
  const varData_1 = 5;
  const varData_2 = _0x47049d.useMemo(() => {
    const varData_3 = [];
    for (let loopIdx = 0; loopIdx < varData_1; loopIdx++) {
      varData_3.push(loopIdx);
    }
    return varData_3.map(param_1_1 => <span style={{
      backgroundColor: param_1.color
    }} key={param_1_1} />);
  }, [varData_1]);
  return <div className="loading">{varData_2}</div>;
};
const index = "";
const Button = param_1 => {
  const varData_4 = _0x14d862("np-button", {
    primary: param_1.type === "primary",
    secondary: param_1.type === "secondary"
  }, param_1?.className);
  const varData_5 = param_1?.style || {};
  const varData_6 = () => {
    if (!param_1.onClick || typeof param_1.onClick !== "function") {
      return;
    }
    param_1.onClick();
  };
  return <button className={varData_4} style={varData_5} onClick={varData_6}>{param_1.loading ? <Loading /> : <_0x3233a0.Fragment>{param_1.children}</_0x3233a0.Fragment>}</button>;
};
export { Button as B, Loading as L };