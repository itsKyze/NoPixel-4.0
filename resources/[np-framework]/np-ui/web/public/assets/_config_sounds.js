import { _ as _0x3ef745 } from "./vite.js";
import { r as _0x3a14cf, j as _0x51a37e } from "./vendor.jsx";
import { A as _0x143eef } from "./ui-app.jsx";
import { C as _0xa817ac } from "./ui_core.js";
import "./commonjsHelpers.js";
import "./bundle.js";
const availableSounds = {};
const soundCache = {};
const SoundsApplication = () => {
  const varData_1 = _0x3a14cf.useCallback(() => {
    const varData_2 = Object.assign({
      "../../assets/sounds/cap-tick-tock.ogg": () => _0x3ef745(() => import("./cap-tick-tock.js"), true ? [] : undefined, import.meta.url),
      "../../assets/sounds/qteclick.ogg": () => _0x3ef745(() => import("./qteclick.js"), true ? [] : undefined, import.meta.url),
      "../../assets/sounds/short_beep_success.ogg": () => _0x3ef745(() => import("./short_beep_success.js"), true ? [] : undefined, import.meta.url),
      "../../assets/sounds/short_double_beep.ogg": () => _0x3ef745(() => import("./short_double_beep.js"), true ? [] : undefined, import.meta.url)
    });
    for (const varData_3 in varData_2) {
      varData_2[varData_3]().then(param_1 => {
        const varData_4 = varData_3.split("/");
        const varData_5 = varData_4.pop();
        const varData_6 = varData_5?.split(".ogg")[0];
        if (!varData_6) {
          return;
        }
        availableSounds[varData_6] = param_1.default;
      });
    }
  }, []);
  const varData_7 = param_1 => {
    const {
      action: _0xc5ac47,
      id: _0x40c759,
      name: _0x5f4197
    } = param_1;
    switch (_0xc5ac47) {
      case "play":
        if (soundCache[_0x40c759]) {
          soundCache[_0x40c759].pause();
          delete soundCache[_0x40c759];
        }
        const varData_8 = new Audio(availableSounds[_0x5f4197]);
        varData_8.autoplay = true;
        varData_8.controls = false;
        varData_8.volume = param_1.volume;
        varData_8.loop = param_1.loop;
        varData_8.play();
        console.log("playing - " + _0x5f4197);
        soundCache[_0x40c759] = varData_8;
        break;
      case "stop":
        if (soundCache[_0x40c759]) {
          soundCache[_0x40c759].pause();
          delete soundCache[_0x40c759];
        }
        break;
      case "volume":
        if (soundCache[_0x40c759]) {
          soundCache[_0x40c759].volume = param_1.volume;
        }
        break;
    }
  };
  _0x3a14cf.useEffect(() => {
    varData_1();
  }, [varData_1]);
  return <_0x143eef name="sounds" onEvent={varData_7} />;
};
const config = () => {
  return {
    name: "sounds",
    render: SoundsApplication,
    type: _0xa817ac.Application
  };
};
export { config as default };