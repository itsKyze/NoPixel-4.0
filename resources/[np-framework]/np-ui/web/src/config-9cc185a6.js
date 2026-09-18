import { j as _0x2f8a58 } from "./vendor-69ed8822.js";
import { e as _0x10a25d } from "./events-4cb64c8a.js";
import "./commonjsHelpers-c5dac66b.js";
import "./index-dcb6474f.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./duration-timer-dc979963.js";
import "./_config-dc44e3da.js";
import "./ui-app-b5e34f38.js";
import "./store-8a444d41.js";
import "./lib-553efcee.js";
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