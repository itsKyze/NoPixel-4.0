var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { R as _0x3fa353, j as _0x1ab58d } from "./vendor-69ed8822.js";
import { n as _0xc08d11, C as _0x300cb4 } from "./index-dcb6474f.js";
import { A as _0x44b8d8 } from "./ui-app-b5e34f38.js";
import { D as _0x1023e4 } from "./datetime-adb6ea7b.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./date-31836fe8.js";
import "./text-2b84715a.js";
const newspaper = "";
class NewsPaper extends _0x3fa353.Component {
  constructor(param_1) {
    super(param_1);
    __publicField(this, "onShow", async () => {
      const varData_1 = (await _0xc08d11("np-ui:getNewspaperContent", {}, {
        returnData: "getNewspaperContent"
      })).data;
      this.setState({
        ...varData_1,
        show: true
      });
    });
    __publicField(this, "onHide", () => {
      this.setState({
        show: false
      });
    });
    this.state = {
      lockups: [],
      recentElections: [],
      show: false,
      taxes: [],
      upcomingElections: []
    };
  }
  render() {
    return <_0x44b8d8 center={true} closeOnError={true} name="newspaper" onError={this.onHide} onEscape={this.onHide} onHide={this.onHide} onShow={this.onShow}>{this.state.show && <div className="newspaper-wrapper"><div className="newspaper"><div className="content"><div className="header"><div className="alert-box">City Alert: We have had multiple reports of injuries from spinning newspapers. Be careful!</div><div className="title">Los Santos Post</div></div><div className="subhead"><span>Edition: 49,726</span><span>The Second Best Selling Newspaper in the World</span><span>Current News</span></div><div className="columns"><div className="column"><div className="headline">Upcoming Elections</div><div className="subheadline">GIVE THEM HOPE</div><div className="column-content">{this.state.upcomingElections.map((param_1, param_2) => <div className="election" key={param_2}><span>{param_1.title}</span><span><_0x1023e4 textStyle={{
                        color: "black"
                      }} timestamp={new Date(param_1.date).getTime()} typeface="body2" /></span><span>{param_1.description}</span></div>)}</div></div><div className="column"><div className="headline">Recent Elections</div><div className="subheadline">DESTROY THEIR HOPE</div><div className="column-content">{this.state.recentElections.map((param_1, param_2) => <div className="election" key={param_2}><span>{param_1.title}</span><span><_0x1023e4 textStyle={{
                        color: "black"
                      }} timestamp={new Date(param_1.date).getTime()} typeface="body2" /></span><span>{param_1.description}</span></div>)}</div></div><div className="column"><div className="headline">Lockups</div><div className="subheadline">PD Gang W's</div><div className="column-content">{this.state.lockups.map((param_1, param_2) => <div className="lockup" key={param_2}><span>{param_1.name}</span> was sentenced to <span>{param_1.duration}</span> month(s).</div>)}</div></div><div className="column column-dbl"><div className="dbl"><div className="headline">PECKER</div><div className="subheadline">The reforestation is complete.</div><div className="column-content" /></div></div></div><div className="subhead"><div className="taxes">Current Tax Rates:{this.state.taxes.map((param_1, param_2) => <span key={param_2}>{param_1.type} @ {param_1.level}%</span>)}</div></div></div></div></div>}</_0x44b8d8>;
  }
}
const config = () => {
  return {
    name: "newspaper",
    render: NewsPaper,
    type: _0x300cb4.Application
  };
};
export { config as default };