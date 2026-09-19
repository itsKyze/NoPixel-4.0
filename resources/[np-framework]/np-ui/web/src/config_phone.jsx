import { j as _0x92794c } from "./vendor.jsx";
import { af as _0x56ed49 } from "./ui_core.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const icon = {
  background: "#009688",
  color: "white",
  name: "phone"
};
const config = param_1 => {
  return {
    ...param_1,
    hidden: () => true,
    icon,
    label: "Top Bar",
    name: "top-bar",
    render: () => <_0x56ed49 />
  };
};
export { config as default, icon };