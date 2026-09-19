import { j as _0x17b7f4, m as _0x1d5f6c } from "./vendor-69ed8822.js";
const handle = "_handle_q428x_13";
const styles = {
  switch: "_switch_q428x_1",
  handle
};
const SettingsSwitch = param_1 => {
  return <div className={styles.switch} data-ison={param_1.value} onClick={param_1.onClick}><_0x1d5f6c.div className={styles.handle} layout={true} transition={{
      type: "spring",
      stiffness: 700,
      damping: 30
    }} /></div>;
};
export { SettingsSwitch as S };