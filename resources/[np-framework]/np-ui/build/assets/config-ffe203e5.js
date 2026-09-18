import { r as _0x2bbb46, j as _0x93ab77 } from "./vendor-69ed8822.js";
import { n as _0x366380 } from "./index-dcb6474f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
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