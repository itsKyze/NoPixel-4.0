import { j as _0x59a298, al as _0x1864f3, r as _0x261f6c, n as _0x20af5d } from "./vendor-69ed8822.js";
import { A as _0x355efe } from "./index-2aafdbb2.js";
import { z as _0x6f630e, a0 as _0x4b99d5, N as _0x521c78, _ as _0x486f40, ad as _0xe39038 } from "./index-dcb6474f.js";
import { S as _0x3b62a4 } from "./index-20af7fa9.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const container$2 = "_container_ct3e4_1";
const sections = "_sections_ct3e4_11";
const section = "_section_ct3e4_11";
const section_title = "_section_title_ct3e4_23";
const styles$2 = {
  container: container$2,
  sections,
  section,
  section_title
};
const container$1 = "_container_o0xsf_1";
const thumb = "_thumb_o0xsf_13";
const track = "_track_o0xsf_23";
const rail = "_rail_o0xsf_28";
const root = "_root_o0xsf_33";
const styles$1 = {
  container: container$1,
  thumb,
  track,
  rail,
  root
};
const Slider = param_1 => {
  return <div className={styles$1.container}><_0x1864f3 min={param_1.minSteps ?? 0} max={param_1.maxSteps ?? 1} step={param_1.steps ?? 0.1} defaultValue={param_1?.defaultValue ?? undefined} value={param_1.value} valueLabelDisplay="auto" onChange={(param_1_1, param_2) => param_1.onChange(Number(param_2))} classes={{
      root: styles$1.root,
      rail: styles$1.rail,
      track: styles$1.track,
      thumb: styles$1.thumb
    }} /></div>;
};
const container = "_container_i39qm_1";
const inline = "_inline_i39qm_10";
const label = "_label_i39qm_15";
const text_input = "_text_input_i39qm_22";
const styles = {
  container,
  inline,
  label,
  text_input
};
const SettingsInput = ({
  info: _0x46621d
}) => {
  const [_0x291686, _0x21f42a] = _0x261f6c.useState(_0x6f630e(_0x46621d.key));
  function handleAction_1(param_1, param_2) {
    _0x4b99d5(param_1, param_2);
    _0x21f42a(param_2);
    _0x521c78({
      ["phone.volume"]: _0x6f630e("phone_volume"),
      ["phone.balance"]: _0x6f630e("phone_balance")
    });
  }
  const varData_1 = typeof _0x46621d.label === "function" ? _0x46621d.label(_0x291686) : _0x46621d.label;
  return <div className={_0x20af5d(styles.container, {
    [styles.inline]: _0x46621d.type === "switch"
  })}><label className={styles.label}>{varData_1}</label>{_0x46621d.type === "text" && <input className={styles.text_input} type="text" placeholder={"Enter your " + (typeof _0x46621d.label === "string" ? _0x46621d.label.toLocaleLowerCase() : "") + ".."} value={_0x291686} onChange={param_1 => {
      handleAction_1(_0x46621d.key, param_1.target.value);
    }} />}{_0x46621d.type === "switch" && <_0x3b62a4 value={_0x291686} onClick={() => handleAction_1(_0x46621d.key, !_0x291686)} />}{_0x46621d.type === "slider" && <Slider minSteps={_0x46621d?.min ?? 0} maxSteps={_0x46621d?.max ?? 2} steps={_0x46621d.step ?? 0.1} defaultValue={_0x46621d?.default ?? 1} value={_0x291686 ?? 1} label={varData_1} onChange={param_1 => handleAction_1(_0x46621d.key, param_1)} />}</div>;
};
const SettingsApp = () => {
  _0x261f6c.useEffect(() => {
    return () => {
      _0x521c78({
        ["phone.volume"]: _0x6f630e("phone_volume"),
        ["phone.balance"]: _0x6f630e("phone_balance")
      });
    };
  }, []);
  return <div className={styles$2.container}><_0x355efe title="Settings" description="Phone settings" /><div className={styles$2.sections}><_0x486f40 each={Object.entries(_0xe39038)}>{([_0x2677c0, _0x4d887b]) => <div className={styles$2.section} key={_0x2677c0}><p className={styles$2.section_title}>{_0x2677c0}</p><_0x486f40 each={_0x4d887b.items}>{param_1 => <SettingsInput info={param_1} key={param_1.key} />}</_0x486f40></div>}</_0x486f40></div></div>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/settings.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Settings",
    position: 250,
    name: "settings",
    render: param_1_1 => <SettingsApp {...param_1_1} />
  };
};
export { config as default };