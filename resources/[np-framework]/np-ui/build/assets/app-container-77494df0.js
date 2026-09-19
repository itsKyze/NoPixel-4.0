import { R as _0x414a39, j as _0x468b2c, z as _0x5287ec, C as _0x4b18ff, D as _0x17c390, aO as _0xd7bd1 } from "./vendor-69ed8822.js";
import { e as _0x28c514, I as _0x9ee125 } from "./index-dcb6474f.js";
import { F as _0x2eff30 } from "./input-67b043ed.js";
import { T as _0x3e9ae8 } from "./text-2b84715a.js";
import { m as _0x424bfe, b as _0x98b138 } from "./styles-c7d7714e.js";
const useStyles = _0x424bfe({
  wrapper: param_1 => ({
    position: "relative",
    overflow: "hidden",
    background: _0x98b138.bgPrimary(),
    paddingTop: _0x98b138.responsiveHeight(10),
    width: "100%",
    height: "100%",
    boxShadow: "none",
    opacity: 1,
    animation: param_1.fadeIn === false ? "unset" : "fadeinpls",
    animationIterationCount: 1,
    animationDuration: "800ms"
  }),
  container: param_1 => ({
    maxHeight: param_1.search ? "calc(100% - " + _0x98b138.responsiveHeight(72) + ")" : "100%",
    minHeight: param_1.search ? "calc(100% - " + _0x98b138.responsiveHeight(72) + ")" : "100%",
    height: param_1.search ? "calc(100% - " + _0x98b138.responsiveHeight(72) + ")" : "100%",
    width: "100%",
    overflow: "hidden",
    overflowY: "scroll",
    padding: param_1.removePadding ? 0 : "0 " + _0x98b138.responsiveWidth(16)
  }),
  actions: () => ({
    position: "absolute",
    top: _0x98b138.responsiveHeight(32),
    right: _0x98b138.responsiveWidth(16),
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 1
  }),
  action: () => ({
    color: "white",
    marginLeft: _0x98b138.responsiveWidth(16)
  }),
  searchContainer: param_1 => ({
    padding: param_1.removePadding ? 0 : _0x98b138.responsiveHeight(8) + " " + _0x98b138.responsiveWidth(16),
    marginBottom: _0x98b138.responsiveHeight(8),
    position: "relative",
    height: _0x98b138.responsiveHeight(64),
    width: "100%",
    display: "flex"
  }),
  search: () => ({
    width: "100%",
    position: "relative"
  }),
  backButton: () => ({
    display: "flex",
    width: _0x98b138.responsiveWidth(40),
    alignItems: "center"
  })
});
const AppContainer = param_1 => {
  const [_0x2a2ef7, _0x56d255] = _0x414a39.useState("");
  const varData_1 = param_1_1 => {
    _0x56d255(param_1_1);
    if (!param_1_1) {
      param_1.search.onChange(param_1.search.list);
      return;
    }
    const varData_2 = param_1.search.list.filter(param_1_2 => {
      for (const varData_3 of param_1.search.filter) {
        const varData_4 = typeof varData_3 === "function" ? varData_3(param_1_2) : param_1_2[varData_3];
        if (varData_4 && varData_4.toString().toLowerCase().indexOf(param_1_1.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    });
    param_1.search.onChange(varData_2, param_1_1);
  };
  const [_0x43a217, _0x48a1fd] = _0x414a39.useState(null);
  const varData_5 = Boolean(_0x43a217);
  const varData_6 = param_1_1 => {
    _0x48a1fd(param_1_1.currentTarget);
  };
  const varData_7 = () => {
    _0x48a1fd(null);
  };
  const varData_8 = useStyles(param_1);
  const varData_9 = param_1.style ? param_1.style : {};
  if (param_1.background) {
    varData_9.background = param_1.background;
  }
  return <div className={"app " + (param_1.hasTabs ? "hasTabs" : "") + " " + (param_1.fadeIn === false ? "" : "app-fadein") + " " + (param_1.onClickBack ? "app-hasClickback" : "")} style={varData_9}><div className={"app-header " + (param_1.hideSearch ? "search-hidden" : "")}>{(param_1.heading || param_1.subheading && !param_1.titularInput) && <div className={"heading " + (param_1.subheading ? "heading-sub" : "")}>{param_1.onClickBack && <_0x28c514 title="Go Back" placement="right"><div className="back-button" onClick={param_1.onClickBack}><_0x9ee125 icon="chevron-left" size="lg" style={{
              color: "white"
            }} /></div></_0x28c514>}<div>{param_1.heading && <_0x28c514 title={param_1.heading} placement="top"><h1 className={param_1.heading.length > 11 ? "long" : ""}>{param_1.heading}</h1></_0x28c514>}{param_1.subheading && <p>{param_1.subheading}</p>}</div></div>}{param_1.titularInput && <div className={"heading " + varData_8.search}>{param_1.onClickBack && <_0x28c514 title="Go Back" placement="right"><div className="back-button" onClick={param_1.onClickBack}><_0x9ee125 icon="chevron-left" size="lg" style={{
              color: "white"
            }} /></div></_0x28c514>}{param_1.titularInput}</div>}{(param_1.primaryActions || param_1.auxActions) && <div className="primary-actions">{param_1.primaryActions && param_1.primaryActions.map(param_1_1 => <_0x28c514 title={param_1_1.title} placement="left" key={"" + param_1_1.title + param_1_1.icon}><div className={"button button-icon button-" + param_1_1.color} onClick={param_1_1.onClick ? param_1_1.onClick : () => {}}><_0x9ee125 icon={param_1_1.icon} size="lg" /></div></_0x28c514>)}{param_1.auxActions && param_1.auxActions.length > 0 && <_0x414a39.Fragment><div className={" " + varData_8.action + " "} aria-haspopup="true" onClick={varData_6} style={{
            marginLeft: 0
          }}><_0x9ee125 icon="ellipsis-v" size="lg" style={{
              color: "white"
            }} /></div><_0x5287ec anchorEl={_0x43a217} anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }} transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }} keepMounted={true} open={varData_5} onClose={varData_7} TransitionComponent={_0x4b18ff}>{param_1.auxActions.map(param_1_1 => <_0x17c390 onClick={() => {
              varData_7();
              param_1_1.onClick();
            }} key={param_1_1.title}><_0xd7bd1 style={{
                minWidth: 32
              }}><_0x9ee125 icon={param_1_1.icon} /></_0xd7bd1><_0x3e9ae8 variant="body2">{param_1_1.title}</_0x3e9ae8></_0x17c390>)}</_0x5287ec></_0x414a39.Fragment>}</div>}{(param_1.onClickBack || param_1.search && !param_1.hideSearch) && <div className="search-container">{param_1.search && <_0x2eff30.Search onChange={varData_1} value={_0x2a2ef7} />}</div>}</div><div className="app-content" style={param_1.containerStyle || {}} onScroll={param_1.onScroll}>{!!param_1.emptyMessage && <div className="flex-centered" style={{
        padding: 32,
        flexDirection: "column",
        textAlign: "center"
      }}><_0x3e9ae8 variant="h6">{param_1.emptyMessageText}</_0x3e9ae8></div>}{param_1.children}</div></div>;
};
export { AppContainer as A };