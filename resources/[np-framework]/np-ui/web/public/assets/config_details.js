import { r as _0x4ed55d, aL as _0x1e0f3a, aM as _0x5081ba, j as _0x12db86, n as _0x54d538 } from "./vendor.jsx";
import { u as _0x362135, G as _0x20eee1, n as _0xf71ed5, v as _0x4232fc, q as _0x58826f, p as _0x1beed7, S as _0x5dd275, m as _0x2188e1 } from "./ui_core.js";
import { T as _0x26fe86 } from "./text.jsx";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
const store = {
  key: "phone.apps.details",
  initialState: {
    bank: 0,
    cash: 0,
    jobs: {
      primary: "Unemployed",
      secondary: "None"
    },
    licenses: []
  }
};
const details = "";
const SvgCard = param_1 => _0x4ed55d.createElement("svg", {
  width: "26.57vh",
  height: "11.66vh",
  viewBox: "0 0 287 126",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...param_1
}, _0x4ed55d.createElement("path", {
  d: "M0 19C0 8.50659 8.50659 0 19 0H69.7457C71.0782 0 72.407 0.140181 73.7102 0.418228L105.665 7.23598C106.968 7.51403 108.297 7.65421 109.629 7.65421H143.5H177.371C178.703 7.65421 180.032 7.51402 181.335 7.23598L213.29 0.418228C214.593 0.14018 215.922 0 217.254 0H268C278.493 0 287 8.50659 287 19V107C287 117.493 278.493 126 268 126H19C8.50659 126 0 117.493 0 107V19Z",
  fill: "url(#paint0_linear_1_6250)"
}), _0x4ed55d.createElement("path", {
  d: "M22.9777 17.9443L22.409 43.6428L42.7126 81.5163L43.5854 42.0825L22.9777 17.9443Z",
  fill: "black",
  fillOpacity: 0.05
}), _0x4ed55d.createElement("path", {
  d: "M244.291 25.9999L250.994 35.6894L268.144 43.3394L257.858 28.4712L244.291 25.9999Z",
  fill: "black",
  fillOpacity: 0.05
}), _0x4ed55d.createElement("path", {
  d: "M168.116 53.9998L188.935 84.0935L242.198 107.853L210.251 61.6751L168.116 53.9998Z",
  fill: "black",
  fillOpacity: 0.05
}), _0x4ed55d.createElement("path", {
  d: "M0 106C0 117.046 8.95431 126 20 126H267C278.046 126 287 117.046 287 106V33H0V106Z",
  fill: "url(#paint1_linear_1_6250)"
}), _0x4ed55d.createElement("defs", null, _0x4ed55d.createElement("linearGradient", {
  id: "paint0_linear_1_6250",
  x1: 143.5,
  y1: 0,
  x2: 143.5,
  y2: 126,
  gradientUnits: "userSpaceOnUse"
}, _0x4ed55d.createElement("stop", {
  stopColor: "#5667F8"
}), _0x4ed55d.createElement("stop", {
  offset: 1,
  stopColor: "#5667F8"
})), _0x4ed55d.createElement("linearGradient", {
  id: "paint1_linear_1_6250",
  x1: 143.5,
  y1: 126,
  x2: 143.5,
  y2: 33,
  gradientUnits: "userSpaceOnUse"
}, _0x4ed55d.createElement("stop", {
  stopColor: "#5667F8"
}), _0x4ed55d.createElement("stop", {
  offset: 1,
  stopColor: "#5667F8",
  stopOpacity: 0
}))));
const card = "" + new URL("card.svg", import.meta.url).href;
const DetailsApp = () => {
  const [_0x113a1d, _0x5b8059] = _0x1e0f3a();
  const [_0x2923a8, _0x48d32d] = _0x1e0f3a();
  const [_0x2f0908, _0x331a59] = _0x4ed55d.useState(true);
  const [_0x310a96, _0x2d36a7] = _0x362135(store.key);
  const varData_1 = _0x4ed55d.useCallback(async () => {
    const varData_2 = _0x20eee1();
    const varData_3 = await _0xf71ed5("np-ui:getCharacterDetails", {
      id: varData_2?.id,
      character: varData_2
    }, {
      returnData: _0x4232fc.getDetails()
    });
    _0x2d36a7({
      ...varData_3.data
    });
    _0x331a59(false);
  }, []);
  const varData_4 = async () => {
    await _0x5b8059("li", {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    }, {
      delay: _0x5081ba(0.03)
    });
    await _0x48d32d("li", {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    }, {
      delay: _0x5081ba(0.03)
    });
  };
  _0x4ed55d.useEffect(() => {
    varData_1();
  }, [varData_1]);
  _0x4ed55d.useEffect(() => {
    if (!_0x2f0908) {
      varData_4();
    }
  }, [_0x2f0908]);
  const varData_5 = () => {
    const varData_6 = _0x58826f();
    if (varData_6) {
      return _0x1beed7(varData_6.areaCode + varData_6.number);
    } else {
      return "No SIM Card";
    }
  };
  return <div className="app details-app"><div className="details-header"><div className="details-title">Details Panel</div><div className="details-description">View your important information and licenses</div></div><div className="details-card-container"><SvgCard className="details-card" /><div className="details-title absolute">Your details</div><div className="details-description absolute">Updated in real-time</div></div>{_0x2f0908 ? <div className="loading-container"><_0x5dd275 /></div> : <div className="stats-container"><div className="stats-section"><_0x26fe86 className="stats-heading">Info</_0x26fe86><ul className="list" ref={_0x113a1d}><DetailItem label="Apartment" value={_0x310a96?.apartmentNumber ?? "Unknown"} /><DetailItem label="State ID" value={_0x20eee1()?.id ?? "Unknown"} /><DetailItem label="Bank Account ID" value={_0x20eee1()?.bank_account_id ?? "Unknown"} /><DetailItem label="Phone Number" value={varData_5()} /><DetailItem label="Bank Balance" value={_0x2188e1(_0x310a96?.bank)} /></ul></div><div className="stats-section"><_0x26fe86 className="stats-heading">Licenses</_0x26fe86><ul className="list" ref={_0x2923a8}>{_0x310a96?.licenses && _0x310a96?.licenses.map(param_1 => <DetailItem label={param_1.name} value={param_1.status ? "Valid" : "Expired"} key={param_1.name} />)}</ul></div></div>}</div>;
};
const DetailItem = param_1 => {
  const varData_7 = _0x54d538({
    "license-active": param_1.value === "Valid",
    "license-expired": param_1.value === "Expired"
  });
  return <li className="stats-item">{param_1.label} <span className={varData_7}>{param_1.value}</span></li>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/info.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Details",
    position: 1,
    name: "details",
    render: param_1_1 => <DetailsApp {...param_1_1} />
  };
};
export { config as default };