import { r as _0x2bbb46, j as _0x93ab77 } from "./vendor.jsx";
import { n as _0x366380 } from "./ui_core.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const Selfie = param_1 => {
  _0x2bbb46.useEffect(() => {
    _0x366380("np-ui:activateSelfieMode");
  }, []);
  return <div />;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/camera.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Selfie",
    position: 4,
    name: "selfie",
    render: param_1_1 => <Selfie {...param_1_1} />,
    favourite: true
  };
};
export { config as default };