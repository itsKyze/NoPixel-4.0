import { j as _0x540a40 } from "./vendor-69ed8822.js";
import { A as _0x4daaca } from "./ui-app-b5e34f38.js";
import { P as _0x29d149 } from "./index-56e38050.js";
import { u as _0x1c6f54, C as _0x25a7d8 } from "./index-dcb6474f.js";
import { appName } from "./store-0bcf49be.js";
import "./commonjsHelpers-c5dac66b.js";
import "./text-2b84715a.js";
import "./styles-c7d7714e.js";
import "./input-67b043ed.js";
import "./index-6dbd65c5.js";
import "./button-b138ef6e.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const App = () => {
  const [_0x2fa4ac, _0xdbf0fd] = _0x1c6f54(appName);
  const varData_1 = param_1 => {
    if (_0x2fa4ac.displayTimeout) {
      clearTimeout(_0x2fa4ac.displayTimeout);
      _0x2fa4ac.displayTimeout = undefined;
    }
    _0x2fa4ac.displayTimeout = setTimeout(() => {
      _0xdbf0fd({
        showPhoto: false
      });
    }, 5000);
    _0xdbf0fd({
      showPhoto: true,
      photo: param_1
    });
  };
  const varData_2 = () => {
    _0xdbf0fd({
      showPhoto: false,
      photo: undefined
    });
  };
  return <_0x4daaca center={true} name={appName} onError={varData_2} onEscape={varData_2} onHide={varData_2} onShow={varData_1}><div style={{
      paddingLeft: "2rem",
      width: "100%"
    }}>{_0x2fa4ac.showPhoto && <_0x29d149 uuid={_0x2fa4ac.photo?.uuid} data={{
        ..._0x2fa4ac.photo,
        options: {}
      }} />}</div></_0x4daaca>;
};
const config = () => {
  return {
    name: "npolaroid-photo",
    render: App,
    type: _0x25a7d8.Application
  };
};
export { config as default };