import { j as _0x2f8a58 } from "./vendor.jsx";
import { e as _0x10a25d } from "./events.jsx";
import "./commonjsHelpers.js";
import "./ui_core.js";
import "./vite.js";
import "./bundle.js";
import "./duration-timer.jsx";
import "./_config_phone.jsx";
import "./ui-app.jsx";
import "./store_phone.js";
import "./lib.js";
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/phone-app.svg";
const config = param_1 => {
  return {
    ...param_1,
    events: () => _0x10a25d,
    iconPng: myIcon,
    label: "Calls",
    name: "call-history",
    position: 1,
    render: () => <div />,
    favourite: true
  };
};
export { config as default };