import { j as _0x17821f } from "./vendor-69ed8822.js";
import { I as _0x33382c, e as _0x19412a } from "./index-dcb6474f.js";
const index = "";
const GenericAppHeader = ({
  title: _0xe7b1af,
  action: _0x2225b6,
  onBack: _0x4e7b07
}) => {
  return <div className="generic-app-header"><h1 className="title">{typeof _0x4e7b07 === "function" && <_0x33382c className="icon" icon="angle-left" onClick={_0x4e7b07} />}{_0xe7b1af}</h1>{_0x2225b6 && <_0x19412a title={_0x2225b6.tooltip}><button className="action-button" onClick={_0x2225b6.onClick} style={{
        ...(_0x2225b6?.color ? {
          background: _0x2225b6.color
        } : {})
      }}><_0x33382c className="icon" icon={_0x2225b6.icon} /></button></_0x19412a>}</div>;
};
export { GenericAppHeader as G };