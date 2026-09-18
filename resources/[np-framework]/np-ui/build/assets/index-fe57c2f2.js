import { w as _0x151b51, T as _0x3d8dd2, R as _0x35a3de, j as _0x382e3f, E as _0x5cd8da, b4 as _0x2df2c6, b5 as _0x5a85b0, b6 as _0x454863, b7 as _0x2eb5ac, n as _0x3533b0 } from "./vendor-69ed8822.js";
import { A as _0x4a7aea, a7 as _0x5cb5b3, O as _0x3cb261, e as _0x12a710, I as _0xcf4960 } from "./index-dcb6474f.js";
import { c as _0x4c4a1e } from "./misc-a4c951c6.js";
const container = "_container_18o6a_1";
const image_list = "_image_list_18o6a_10";
const image = "_image_18o6a_10";
const actions = "_actions_18o6a_23";
const btn = "_btn_18o6a_32";
const approval = "_approval_18o6a_45";
const tooltipImage = "_tooltipImage_18o6a_62";
const image_thumbnail = "_image_thumbnail_18o6a_70";
const actions_overlay = "_actions_overlay_18o6a_75";
const image_block_overlay = "_image_block_overlay_18o6a_89";
const styles$1 = {
  container,
  image_list,
  image,
  actions,
  btn,
  approval,
  tooltipImage,
  image_thumbnail,
  actions_overlay,
  image_block_overlay
};
const HtmlTooltip = _0x151b51(param_1 => ({
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "none",
    position: "relative"
  }
}))(_0x3d8dd2);
const ImageThumbnail = ({
  src: _0x5c9499,
  isActive: _0x1f7dc5,
  onToggle: _0x5c99b5,
  onClose: _0x24d292,
  onOpen: _0x565619
}) => {
  const [_0x5b1a1e, _0x325253] = _0x35a3de.useState(false);
  const [_0x39e4a2, _0x15d055] = _0x35a3de.useState(false);
  const varData_1 = () => {
    _0x4c4a1e(_0x5c9499);
    _0x4a7aea({
      timeout: 3000,
      title: "System",
      appName: "settings",
      text: "Image URLs copied to clipboard"
    });
  };
  const varData_2 = async param_1 => {
    const varData_3 = await _0x5cb5b3(param_1, "gallery");
    _0x4a7aea({
      timeout: 3000,
      title: "Gallery",
      appName: "gallery",
      text: varData_3 ? "Image saved to gallery" : "Image could not be saved"
    });
  };
  return <_0x5cd8da onClickAway={() => _0x24d292(_0x5c9499)}><HtmlTooltip disableFocusListener={true} disableHoverListener={true} disableTouchListener={true} title={<div onClick={() => _0x24d292(_0x5c9499)}><img src={_0x5c9499} alt={_0x5c9499} className={styles$1.tooltipImage} /></div>} placement="left" open={_0x1f7dc5} onClose={() => _0x24d292(_0x5c9499)}><div className={styles$1.image_thumbnail} onMouseEnter={() => _0x325253(true)} onMouseLeave={() => _0x325253(false)}><_0x3cb261 when={!_0x39e4a2}><div className={styles$1.image_block_overlay} onClick={() => _0x15d055(true)}><p>Click to show</p></div></_0x3cb261><_0x3cb261 when={_0x39e4a2}><_0x3cb261 when={_0x5b1a1e}><div className={styles$1.actions_overlay} style={{
              opacity: _0x5b1a1e ? 1 : 0
            }}><div className={styles$1.actions}><_0x12a710 title="Enlarge Image" placement="left"><div className={styles$1.btn} onClick={_0x565619}><_0xcf4960 icon={_0x2df2c6} /></div></_0x12a710><_0x12a710 title="Copy URL" placement="left"><div className={styles$1.btn} onClick={varData_1}><_0xcf4960 icon={_0x5a85b0} /></div></_0x12a710><_0x12a710 title="Save" placement="left"><div className={styles$1.btn} onClick={() => varData_2(_0x5c9499)}><_0xcf4960 icon={_0x454863} /></div></_0x12a710><_0x12a710 title="Hide" placement="left"><div className={styles$1.btn} onClick={() => _0x15d055(false)}><_0xcf4960 icon={_0x2eb5ac} /></div></_0x12a710></div></div></_0x3cb261></_0x3cb261><img className={styles$1.image} src={_0x5c9499} alt={_0x5c9499} onClick={() => _0x5c99b5(_0x5c9499)} /></div></HtmlTooltip></_0x5cd8da>;
};
const PostImageContainer = ({
  images: _0x272e8d
}) => {
  const [_0x470ab8, _0x5116a4] = _0x35a3de.useState(null);
  const varData_4 = param_1 => {
    _0x5116a4(_0x470ab8 === param_1 ? null : param_1);
  };
  const varData_5 = () => {
    _0x5116a4(null);
  };
  const varData_6 = _0x272e8d.filter(param_1 => !param_1.match(/.mp4/g));
  return <div className={styles$1.container}><div className={styles$1.image_list}>{varData_6.map(param_1 => <ImageThumbnail src={param_1} isActive={_0x470ab8 === param_1} onToggle={varData_4} onClose={varData_5} onOpen={() => varData_4(param_1)} key={param_1} />)}</div></div>;
};
const process = param_1 => {
  let varData_7 = [];
  try {
    const varData_8 = param_1.match(/https:\/\/\S*?(\.png|\.gif|\.jpg|\.jpeg|\.webm|\.mp4|\.bmp)(.*?\s|.*)/g);
    varData_7 = varData_8 ? varData_8.map(param_1_1 => param_1_1.trim()) : [];
    let varData_9 = param_1;
    varData_7.forEach(param_1_1 => varData_9 = varData_9.replace(param_1_1, ""));
    return {
      message: varData_9,
      images: varData_7
    };
  } catch (err) {
    return {
      message: param_1,
      images: []
    };
  }
};
const troll_67 = "_troll_67_k13pl_1";
const number = "_number_k13pl_18";
const number_6 = "_number_6_k13pl_28";
const slideOut = "_slideOut_k13pl_1";
const number_7 = "_number_7_k13pl_32";
const slideIn = "_slideIn_k13pl_1";
const styles = {
  troll_67,
  number,
  number_6,
  slideOut,
  number_7,
  slideIn
};
const Troll67 = () => {
  return <div className={styles.troll_67}><div className={_0x3533b0(styles.number, styles.number_6)}>6</div><div className={_0x3533b0(styles.number, styles.number_7)}>7</div></div>;
};
export { PostImageContainer as P, Troll67 as T, process as p };