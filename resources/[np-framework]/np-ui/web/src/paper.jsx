import { r as _0x37ade1, j as _0x205383, R as _0x13f9e3 } from "./vendor.jsx";
import { e as _0x20bb35, I as _0xbed066 } from "./ui_core.js";
import { T as _0x2972ec } from "./text.jsx";
const paper = "";
function Paper({
  actions = [],
  children: _0x44f51e,
  className = "",
  drawer = null,
  notifications = false,
  notificationsColor = "#4DD0E1",
  onClick = null,
  expandDrawerOnActionClick = true,
  style = {}
}) {
  const [_0x163786, _0x2d52f] = _0x37ade1.useState(false);
  const [_0x559200, _0x4d8555] = _0x37ade1.useState(false);
  return <div className={"component-paper " + className} onClick={onClick ? () => onClick() : () => {}} style={style}>{notifications && <div className="notification" style={{
      backgroundColor: notificationsColor
    }} />}<div className="main-container" onClick={() => drawer ? _0x4d8555(param_1 => !param_1) : null} onMouseEnter={() => _0x2d52f(true)} onMouseLeave={() => _0x2d52f(false)}>{_0x44f51e}{_0x163786 && actions.length > 0 && <div className={"actions " + (_0x163786 && "actions-show")}>{[...actions].map(param_1 => <_0x20bb35 title={param_1.title} className={param_1.class?.toLowerCase()} key={"" + param_1.icon + param_1.title}><div onClick={param_1.onClick ? param_1_1 => {
            param_1.onClick();
            if (!expandDrawerOnActionClick) {
              param_1_1.stopPropagation();
            }
          } : () => {}}><_0xbed066 icon={param_1.icon} size="lg" /></div></_0x20bb35>)}</div>}</div>{drawer && _0x559200 && <div className="drawer">{drawer}</div>}</div>;
}
Paper.Image = ({
  children: _0x224658
}) => <div className="image">{_0x224658}</div>;
Paper.Details = ({
  className = "",
  description: _0x411f22,
  descriptionClass = "",
  title: _0x4a4264,
  titleClass = ""
}) => <div className={"details " + className}><div className={"title " + titleClass}>{_0x13f9e3.isValidElement(_0x4a4264) ? _0x4a4264 : <_0x2972ec variant="body2">{_0x4a4264}</_0x2972ec>}</div><div className={"description " + descriptionClass}>{_0x13f9e3.isValidElement(_0x411f22) ? _0x411f22 : <_0x2972ec variant="body2">{_0x411f22}</_0x2972ec>}</div></div>;
Paper.DetailsAux = ({
  children = null,
  icon = null,
  text = null,
  auxClass = "",
  onClick = () => {}
}) => <div className={"details-aux " + auxClass}>{!!children && children}{!children && <div className="text" onClick={onClick}>{!!text && <_0x2972ec variant="body2">{text}</_0x2972ec>}{!!icon && <_0xbed066 icon={icon} />}</div>}</div>;
const DrawerItemContents = ({
  item: _0x25ed12,
  showActions: _0x372962
}) => <_0x13f9e3.Fragment><div className="icon label">{_0x25ed12.title != null ? <p>{_0x25ed12.title}:</p> : <_0xbed066 icon={_0x25ed12.icon} />}</div><div className="text"><_0x2972ec variant="body2">{_0x25ed12.text}</_0x2972ec></div>{_0x372962 && _0x25ed12.actions?.length > 0 && <div className="actions">{[..._0x25ed12.actions].map(param_1 => <_0x20bb35 title={param_1.title} key={"" + param_1.icon + param_1.title}><div onClick={param_1.onClick ? param_1_1 => {
        param_1.onClick();
        param_1_1.stopPropagation();
      } : () => {}}><_0xbed066 icon={param_1.icon} size="md" /></div></_0x20bb35>)}</div>}</_0x13f9e3.Fragment>;
const DrawerItem = ({
  item: _0x2162c5,
  key: _0x4559b1
}) => {
  const [_0x1cec00, _0x353f76] = _0x37ade1.useState(false);
  if (_0x2162c5.tooltip) {
    return <_0x20bb35 title={_0x2162c5.tooltip} placement="left" key={_0x4559b1}><div className="item" onMouseEnter={() => _0x353f76(true)} onMouseLeave={() => _0x353f76(false)} key={_0x4559b1}><DrawerItemContents item={_0x2162c5} showActions={_0x1cec00} /></div></_0x20bb35>;
  } else {
    return <div className="item" onMouseEnter={() => _0x353f76(true)} onMouseLeave={() => _0x353f76(false)} key={_0x4559b1}><DrawerItemContents item={_0x2162c5} showActions={_0x1cec00} /></div>;
  }
};
Paper.Drawer = ({
  children = null,
  items: _0x2f4e85
}) => <_0x13f9e3.Fragment>{_0x2f4e85.map((param_1, param_2) => <DrawerItem item={param_1} key={param_2} />)}{children}</_0x13f9e3.Fragment>;
Paper.Icon = ({
  icon: _0x236254
}) => <Paper.Image><_0xbed066 icon={_0x236254} size="2x" /></Paper.Image>;
export { Paper as P };