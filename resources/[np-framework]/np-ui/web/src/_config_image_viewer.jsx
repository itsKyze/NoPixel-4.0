import { j as _0x46f99a } from "./vendor.jsx";
import { A as _0x318949 } from "./ui-app.jsx";
import { u as _0x27a3c5, C as _0xf92e1e } from "./ui_core.js";
import { appName } from "./store_image_viewer.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const overlay = "_overlay_webi8_1";
const container = "_container_webi8_14";
const image = "_image_webi8_20";
const closeButton = "_closeButton_webi8_28";
const styles = {
  overlay,
  container,
  image,
  closeButton
};
const ImageViewer = ({
  imageUrl: _0x1356bc,
  onClose: _0x251d77
}) => {
  return <div className={styles.overlay} onClick={_0x251d77}><div className={styles.container}><img src={_0x1356bc} alt="Image" className={styles.image} /></div></div>;
};
const App = () => {
  const [_0x13badf, _0x2cd6a2] = _0x27a3c5(appName);
  const varData_1 = param_1 => {
    _0x2cd6a2({
      show: true,
      imageUrl: param_1.imageUrl
    });
  };
  const varData_2 = () => {
    _0x2cd6a2({
      show: false,
      imageUrl: ""
    });
  };
  return <_0x318949 center={true} name={appName} onError={varData_2} onEscape={varData_2} onHide={varData_2} onShow={varData_1}>{_0x13badf.show && <ImageViewer imageUrl={_0x13badf.imageUrl} onClose={varData_2} />}</_0x318949>;
};
const config = () => {
  return {
    name: appName,
    render: App,
    type: _0xf92e1e.Application
  };
};
export { config as default };