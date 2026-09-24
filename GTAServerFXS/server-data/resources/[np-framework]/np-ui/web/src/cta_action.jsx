import { j as _0x5c926d, T as _0x3a11f6 } from "./vendor.jsx";
import { O as _0x506806, I as _0x1e0770 } from "./ui_core.js";
const container = "_container_6prcz_1";
const title = "_title_6prcz_7";
const description = "_description_6prcz_14";
const cta_action = "_cta_action_6prcz_21";
const styles = {
  container,
  title,
  description,
  cta_action
};
const AppHeader = param_1 => {
  return <div className={styles.container}><div className={styles.main_content}><h1 className={styles.title}>{param_1.title}</h1><p className={styles.description}>{param_1.description}</p></div><_0x506806 when={param_1.ctaAction}>{param_1_1 => <_0x3a11f6 title={param_1_1.tooltip ?? ""} placement="left" arrow={true}><div className={styles.cta_action} style={param_1.accentColor ? {
          background: param_1.accentColor
        } : undefined} onClick={() => param_1_1.onClick()}><_0x1e0770 icon={param_1_1.icon} /></div></_0x3a11f6>}</_0x506806></div>;
};
export { AppHeader as A };