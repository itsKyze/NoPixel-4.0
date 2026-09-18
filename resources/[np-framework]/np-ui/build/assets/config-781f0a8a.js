import { R as _0x573b33, j as _0x1f0f90, n as _0x325425 } from "./vendor-69ed8822.js";
import { f as _0x3ff490 } from "./phone-input-92273ad1.js";
import "./commonjsHelpers-c5dac66b.js";
const container = "_container_aubr2_1";
const calculator = "_calculator_aubr2_10";
const calculator_display = "_calculator_display_aubr2_21";
const calculator_keypad = "_calculator_keypad_aubr2_44";
const calculator_row = "_calculator_row_aubr2_50";
const key_col_2 = "_key_col_2_aubr2_75";
const key_0 = "_key_0_aubr2_79";
const calculator_key = "_calculator_key_aubr2_44";
const key_equals = "_key_equals_aubr2_82";
const key_add = "_key_add_aubr2_82";
const key_subtract = "_key_subtract_aubr2_82";
const key_multiply = "_key_multiply_aubr2_82";
const key_divide = "_key_divide_aubr2_82";
const key_percent = "_key_percent_aubr2_82";
const key_sign = "_key_sign_aubr2_82";
const key_clear = "_key_clear_aubr2_89";
const auto_scaling_text = "_auto_scaling_text_aubr2_97";
const styles = {
  container,
  calculator,
  calculator_display,
  calculator_keypad,
  calculator_row,
  "key-equals": "_key-equals_aubr2_69",
  key_col_2,
  key_0,
  calculator_key,
  key_equals,
  key_add,
  key_subtract,
  key_multiply,
  key_divide,
  key_percent,
  key_sign,
  key_clear,
  auto_scaling_text
};
const AutoScalingText = param_1 => {
  const [_0x33bff4, _0x210ff7] = _0x573b33.useState(1);
  const varData_1 = _0x573b33.useRef(null);
  _0x573b33.useEffect(() => {
    const varData_2 = varData_1?.current;
    if (!varData_2) {
      return;
    }
    const varData_3 = varData_2.parentNode?.parentNode;
    if (!varData_3) {
      return;
    }
    const varData_4 = varData_3.offsetWidth;
    const varData_5 = varData_2.offsetWidth;
    const varData_6 = varData_4 / varData_5;
    if (Math.abs(_0x33bff4 - varData_6) < 0.01) {
      return;
    }
    if (varData_6 < 1) {
      _0x210ff7(varData_6);
    } else if (_0x33bff4 < 1) {
      _0x210ff7(1);
    }
  }, [param_1.children, _0x33bff4]);
  return <div className={styles.auto_scaling_text_wrapper} style={{
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  }}><div ref={varData_1} style={{
      display: "inline-block",
      whiteSpace: "nowrap",
      transform: "scale(" + _0x33bff4 + ")",
      transformOrigin: "right center"
    }}>{param_1.children}</div></div>;
};
const CalculatorDisplay = ({
  currentOperation: _0x2b74b9,
  result: _0x3fa8f9
}) => {
  return <div className={styles.calculator_display}><AutoScalingText>{_0x3fa8f9 ? _0x3fa8f9 : _0x2b74b9}</AutoScalingText></div>;
};
const CalculatorOperations = {
  "/": (param_1, param_2) => param_1 / param_2,
  "*": (param_1, param_2) => param_1 * param_2,
  "+": (param_1, param_2) => param_1 + param_2,
  "-": (param_1, param_2) => param_1 - param_2
};
const Calculator = () => {
  const [_0x56b250, _0x44571b] = _0x573b33.useState("");
  const [_0x31a953, _0x4d0c03] = _0x573b33.useState("");
  const [_0xcf92ad, _0x4679e3] = _0x573b33.useState(false);
  const varData_7 = () => {
    const varData_8 = new Audio(_0x3ff490);
    varData_8.volume = 0.05;
    varData_8.controls = false;
    varData_8.play();
    setTimeout(() => {
      varData_8.remove();
    }, varData_8.duration * 1000);
  };
  const varData_9 = param_1 => {
    if (_0xcf92ad) {
      _0x4d0c03(param_1);
      _0x44571b("");
      _0x4679e3(false);
    } else {
      _0x4d0c03(param_1_1 => param_1_1 + param_1);
      _0x44571b("");
    }
    varData_7();
  };
  const varData_10 = () => {
    const varData_11 = _0xcf92ad ? parseFloat(_0x56b250) : parseFloat(_0x31a953);
    const varData_12 = varData_11 ? (-varData_11).toString() : "0";
    if (_0xcf92ad) {
      _0x44571b(varData_12);
    } else {
      _0x4d0c03(varData_12);
    }
    varData_7();
  };
  const varData_13 = () => {
    const varData_14 = _0xcf92ad ? parseFloat(_0x56b250) : parseFloat(_0x31a953);
    const varData_15 = varData_14 ? (varData_14 / 100).toString() : "0";
    if (_0xcf92ad) {
      _0x44571b(varData_15);
    } else {
      _0x4d0c03(varData_15);
    }
    varData_7();
  };
  const varData_16 = param_1 => {
    if (_0xcf92ad) {
      _0x4d0c03(_0x56b250 + " " + param_1 + " ");
      _0x44571b("");
      _0x4679e3(false);
    } else {
      _0x4d0c03(param_1_1 => param_1_1 + " " + param_1 + " ");
      _0x44571b("");
    }
    varData_7();
  };
  const varData_17 = () => {
    const varData_18 = _0x31a953.trimEnd();
    const varData_19 = varData_18.lastIndexOf(" ");
    const varData_20 = varData_19 !== -1 ? varData_18.slice(0, varData_19) : "";
    _0x4d0c03(varData_20);
    _0x4679e3(varData_20.length === 0);
    varData_7();
  };
  const varData_21 = () => {
    try {
      const varData_22 = _0x31a953.split(" ");
      let varData_23 = parseFloat(varData_22[0]);
      for (let loopIdx = 1; loopIdx < varData_22.length; loopIdx += 2) {
        const varData_24 = varData_22[loopIdx];
        const varData_25 = parseFloat(varData_22[loopIdx + 1]);
        if (varData_24 in CalculatorOperations) {
          varData_23 = CalculatorOperations[varData_24](varData_23, varData_25);
        }
      }
      const varData_26 = parseFloat(varData_23.toFixed(4));
      _0x4d0c03("");
      _0x44571b(varData_26.toString());
      _0x4679e3(true);
    } catch (err) {
      _0x44571b("Error");
      _0x4679e3(false);
    }
    varData_7();
  };
  const varData_27 = () => {
    _0x4d0c03("");
    _0x44571b("");
    _0x4679e3(false);
    varData_7();
  };
  const varData_28 = _0x31a953 ? "C" : "AC";
  return <div className={styles.calculator}><CalculatorDisplay currentOperation={_0x31a953} result={_0x56b250} /><div className={styles.calculator_keypad}><div className={styles.calculator_row}><button className={_0x325425(styles.calculator_key, styles.key_clear)} onClick={varData_27}>{varData_28}</button><button className={_0x325425(styles.calculator_key, styles.key_sign)} onClick={varData_10}>±</button><button className={_0x325425(styles.calculator_key, styles.key_percent)} onClick={varData_13}>%</button><button className={_0x325425(styles.calculator_key, styles.key_divide)} onClick={() => varData_16("/")}>÷</button></div><div className={styles.calculator_row}><button className={_0x325425(styles.calculator_key, styles.key_7)} onClick={() => varData_9("7")}>7</button><button className={_0x325425(styles.calculator_key, styles.key_8)} onClick={() => varData_9("8")}>8</button><button className={_0x325425(styles.calculator_key, styles.key_9)} onClick={() => varData_9("9")}>9</button><button className={_0x325425(styles.calculator_key, styles.key_multiply)} onClick={() => varData_16("*")}>*</button></div><div className={styles.calculator_row}><button className={_0x325425(styles.calculator_key, styles.key_4)} onClick={() => varData_9("4")}>4</button><button className={_0x325425(styles.calculator_key, styles.key_5)} onClick={() => varData_9("5")}>5</button><button className={_0x325425(styles.calculator_key, styles.key_6)} onClick={() => varData_9("6")}>6</button><button className={_0x325425(styles.calculator_key, styles.key_subtract)} onClick={() => varData_16("-")}>-</button></div><div className={styles.calculator_row}><button className={_0x325425(styles.calculator_key, styles.key_1)} onClick={() => varData_9("1")}>1</button><button className={_0x325425(styles.calculator_key, styles.key_2)} onClick={() => varData_9("2")}>2</button><button className={_0x325425(styles.calculator_key, styles.key_3)} onClick={() => varData_9("3")}>3</button><button className={_0x325425(styles.calculator_key, styles.key_add)} onClick={() => varData_16("+")}>+</button></div><div className={styles.calculator_row}><button className={_0x325425(styles.calculator_key, styles.key_0) + " " + styles.key_col_2} onClick={() => varData_9("0")}>0</button><button className={_0x325425(styles.calculator_key, styles.key_dot)} onClick={() => varData_9(".")}>.</button><button className={_0x325425(styles.calculator_key, styles.key_equals)} onClick={varData_21}>=</button></div></div></div>;
};
const Container = () => {
  return <div className={styles.container}><Calculator /></div>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/calculator.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Calculator",
    position: 151,
    name: "calculator",
    render: param_1_1 => <Container {...param_1_1} />
  };
};
export { config as default };