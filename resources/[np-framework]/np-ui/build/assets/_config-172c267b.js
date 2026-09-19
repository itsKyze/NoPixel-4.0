import { j as _0x2a7070, n as _0x5ac7ad } from "./vendor-69ed8822.js";
import { A as _0x1ee80b } from "./ui-app-b5e34f38.js";
import { T as _0x547267 } from "./text-2b84715a.js";
import { appName } from "./store-f085383a.js";
import { u as _0x343e53, G as _0x464bb7, C as _0x10f0a2 } from "./index-dcb6474f.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const badge = "";
const LeatherPattern = "'https://gta-assets.nopixel.net/images/dark_leather.png'";
function departmentInfo(param_1) {
  const varData_1 = {
    LSPD: {
      badge: "https://gta-assets.nopixel.net/images/badges/LSPD.png",
      name: "Los Santos PD",
      color: "#171520"
    },
    "Cyber Crime": {
      badge: "https://gta-assets.nopixel.net/images/badges/mdw-cyber1.png",
      name: "Cyber Crimes",
      color: "#162841"
    },
    SASPR: {
      badge: "https://gta-assets.nopixel.net/images/badges/SAPR.png",
      name: "Park Rangers",
      color: "#2F3823"
    },
    BCSO: {
      badge: "https://gta-assets.nopixel.net/images/badges/BCSO.png",
      name: "Blaine County Sheriff",
      color: "#A67924"
    },
    PBSO: {
      badge: "https://gta-assets.nopixel.net/images/badges/PBSO.png",
      name: "Paleto Bay Sheriff",
      color: "#A67924"
    },
    SDSO: {
      badge: "https://gta-assets.nopixel.net/images/badges/SDSO.png",
      name: "Senora Desert Sheriff",
      color: "#A67924"
    },
    SASP: {
      badge: "https://gta-assets.nopixel.net/images/badges/SASP.png",
      name: "State Troopers",
      color: "#181F2B"
    },
    CPD: {
      badge: "https://gta-assets.nopixel.net/images/badges/CPD.png",
      name: "Cerberus Police Department",
      color: "#161614"
    },
    DEFAULT: {
      badge: "https://gta-assets.nopixel.net/images/badges/Default.png",
      name: "State Official",
      color: "#161614"
    }
  };
  return varData_1[param_1] ?? varData_1.DEFAULT;
}
const Badge = () => {
  const [_0x5680e9, _0x44741f] = _0x343e53(appName);
  const varData_2 = param_1 => () => {
    _0x44741f({
      ...param_1,
      mount: true
    });
    setTimeout(() => _0x44741f({
      mount: false
    }), 5000);
  };
  return <_0x1ee80b name={appName} onShow={varData_2}>{_0x5680e9?.mount && <div className="badge-app-wrapper"><div className={_0x5ac7ad("exterior-wrapper", {
        "exterior-wrapper-ff": _0x464bb7()?.id === 1002
      })} style={{
        backgroundImage: "url(" + LeatherPattern + ")"
      }}><div className="interior-wrapper"><div className="row"><div className="column"><div className="left-column"><div className="information-wrapper"><div className="information"><div className="profile-image-holder"><img src={_0x5680e9?.image} alt="profile" /></div><div className="name-info"><div className="banner" style={{
                        backgroundColor: departmentInfo(_0x5680e9?.department).color
                      }}><_0x547267 variant="body2" style={{
                          textAlign: "center"
                        }}>{departmentInfo(_0x5680e9?.department)?.name}</_0x547267></div><div className="name-info-wrap"><div className="rank"><_0x547267 variant="body1">{_0x5680e9?.rank || "Chief of Police"}</_0x547267></div><div className="name"><_0x547267 variant="h6">{_0x5680e9?.name || "Francis J. Francer"}</_0x547267></div></div><div className="callsign"><_0x547267 variant="body1">#{_0x5680e9?.badge || "499"}</_0x547267></div></div></div></div></div></div><div className="column"><div className="right-column"><div className="badge-wrapper"><img alt="badge" className="badge" src={departmentInfo(_0x5680e9?.department)?.badge} /></div></div></div></div></div></div></div>}</_0x1ee80b>;
};
const config = () => {
  return {
    name: "badge",
    render: Badge,
    type: _0x10f0a2.Application
  };
};
export { config as default };