import { R as _0x110803, j as _0x1b763f, a4 as _0x5a55a5 } from "./vendor-69ed8822.js";
const text = "_text_1lpba_1";
const styles = {
  text
};
const DurationTimer = ({
  countdown = false,
  extra = "",
  startTime = 0,
  withHour = false,
  prefix = undefined
}) => {
  const [_0x5786d5, _0x30b2f9] = _0x110803.useState(startTime);
  _0x110803.useEffect(() => {
    const intervalId = setInterval(() => {
      _0x30b2f9(param_1 => countdown ? param_1 - 1 : param_1 + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdown]);
  return <p className={styles.text}>{prefix}{_0x5a55a5.utc(_0x5786d5 * 1000).format((withHour ? "HH:" : "") + "mm:ss")}{!extra ? null : " - " + extra}</p>;
};
export { DurationTimer as D };