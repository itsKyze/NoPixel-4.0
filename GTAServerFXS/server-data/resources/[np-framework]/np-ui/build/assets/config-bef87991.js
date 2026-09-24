import { j as _0x92794c } from "./vendor-69ed8822.js";
import { af as _0x56ed49 } from "./index-dcb6474f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
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