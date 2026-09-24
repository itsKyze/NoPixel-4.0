import { j as _0x46bda2, aK as _0x10f65c } from "./vendor.jsx";
import { I as _0xbe5f6d } from "./ui_core.js";
const container = "_container_1w6ws_1";
const icon = "_icon_1w6ws_22";
const styles = {
  container,
  icon
};
const AppSearch = param_1 => {
  return <div className={styles.container}><input placeholder="Search" onInput={param_1_1 => param_1.onChange(param_1_1.currentTarget.value)} value={param_1.value} /><_0xbe5f6d className={styles.icon} icon={_0x10f65c} style={param_1.accentColor ? {
      color: param_1.accentColor,
      filter: "drop-shadow(0px 1px 24px " + param_1.accentColor + ")"
    } : undefined} /></div>;
};
export { AppSearch as A };