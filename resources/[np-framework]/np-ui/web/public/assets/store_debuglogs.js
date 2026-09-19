import { i as _0x245d99 } from "./ui_core.js";
import "./vite.js";
import "./vendor.jsx";
import "./commonjsHelpers.js";
import "./bundle.js";
const DEFAULT_DEBUG_LOG_STATUS = !_0x245d99() ? true : true;
const store = {
  key: "debug-log",
  initialState: {
    enabled: DEFAULT_DEBUG_LOG_STATUS,
    log: []
  }
};
export { store as default };