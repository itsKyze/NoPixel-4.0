var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { R as _0x408555, j as _0x1c67ec, k as _0x5c3e7f } from "./vendor.jsx";
import { i as _0x3ab859, s as _0x46427c, n as _0x514a6a, I as _0x540e89, d as _0x10be3d, v as _0x38945c } from "./ui_core.js";
import { c as _0x37292d } from "./events.jsx";
import { A as _0x201c48 } from "./app-container.jsx";
import { T as _0x4b2fb0 } from "./text.jsx";
import { F as _0x102908 } from "./input.jsx";
import { m as _0x4ead16, b as _0x31fc1a } from "./styles.js";
import _0x46ad5c from "./store_shifts.js";
import "./commonjsHelpers.js";
import "./vite.js";
import "./bundle.js";
import "./duration-timer.jsx";
import "./_config_phone.jsx";
import "./ui-app.jsx";
import "./store_phone.js";
import "./lib.js";
import "./loading.jsx";
const useStyles = _0x4ead16({
  nameWrapper: () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-between",
    flexDirection: "row",
    marginBottom: _0x31fc1a.responsiveHeight(8)
  })
});
const isJob = (param_1, _0x1a96de = false) => _0x1a96de || _0x3ab859() || !!_0x46427c.getState().character.job && param_1.includes(_0x46427c.getState().character.job);
const DOJ = param_1 => {
  const [_0x100a05, _0x9de03d] = _0x408555.useState(param_1.list);
  const [_0xf7ab7d, _0xc559e5] = _0x408555.useState(param_1.status);
  _0x408555.useEffect(() => {
    _0x9de03d(param_1.list);
  }, [param_1.list]);
  const varData_1 = useStyles();
  const varData_2 = [];
  const varData_3 = async param_1_1 => {
    await _0x514a6a("np-ui:setDOJStatus", {
      status: param_1_1
    });
    _0xc559e5(param_1_1);
    param_1.getEntries();
  };
  const varData_4 = {
    Lawyer: _0x100a05.filter(param_1_1 => param_1_1.job === "defender"),
    Judge: _0x100a05.filter(param_1_1 => param_1_1.job === "judge"),
    Clerk: _0x100a05.filter(param_1_1 => param_1_1.job === "county_clerk"),
    Mayor: _0x100a05.filter(param_1_1 => param_1_1.job === "mayor"),
    "Deputy Mayor": _0x100a05.filter(param_1_1 => param_1_1.job === "deputy_mayor"),
    "Legal Aid": _0x100a05.filter(param_1_1 => param_1_1.job === "legal_aid")
  };
  return <_0x201c48 emptyMessage={_0x100a05.length === 0} primaryActions={varData_2} search={{
    filter: ["name"],
    list: param_1.list,
    onChange: _0x9de03d
  }}>{isJob(["defender", "judge", "county_clerk", "mayor", "deputy_mayor"]) && <div><div style={{
        textAlign: "left",
        marginBottom: 16
      }}><_0x102908.Select label="Status" value={_0xf7ab7d} onChange={param_1_1 => varData_3(param_1_1)} items={[{
          id: "Available",
          name: "Available"
        }, {
          id: "In Trial",
          name: "In Trial"
        }, {
          id: "Busy",
          name: "Busy"
        }]} /></div></div>}{Object.keys(varData_4).filter(param_1_1 => !!varData_4[param_1_1].length).map(param_1_1 => <div style={{
      marginBottom: 8,
      paddingBottom: 8,
      borderBottom: "1px solid white"
    }} key={param_1_1}><_0x4b2fb0 variant="body1" style={{
        marginBottom: 8
      }}>{param_1_1}(s)</_0x4b2fb0>{varData_4[param_1_1].map((param_1_2, param_2) => <div className={varData_1.nameWrapper} key={param_2}><_0x4b2fb0 variant="body2">{param_1_2.name}</_0x4b2fb0><_0x4b2fb0 variant="body2">{param_1_2.status}</_0x4b2fb0><div onClick={() => _0x37292d({
          number: param_1_2.phone
        })}><_0x540e89 color="white" size="lg" icon="phone" /></div></div>)}</div>)}</_0x201c48>;
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x10be3d(_0x46ad5c);
class Container extends _0x408555.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "getEntries", async () => {
      const varData_5 = await _0x514a6a("np-ui:getDOJData", {}, {
        returnData: _0x38945c.getDOJData()
      });
      this.props.updateState({
        list: varData_5.data.list,
        status: varData_5.data.status
      });
    });
  }
  componentDidMount() {
    this.getEntries();
  }
  render() {
    return <DOJ {...this.props} getEntries={this.getEntries} />;
  }
}
const Container$1 = _0x5c3e7f(mapStateToProps, mapDispatchToProps)(Container);
const icon = {
  background: "#4154B6",
  color: "#E0DA14",
  name: "gavel"
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/doj.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Department of Justice",
    name: "doj",
    position: 250,
    hidden: () => true,
    render: () => <Container$1 />
  };
};
export { config as default, icon };