import { R as _0x414a39, j as _0x468b2c, z as _0x5287ec, C as _0x4b18ff, D as _0x17c390, aO as _0xd7bd1 } from "./vendor.jsx";
import { e as _0x28c514, I as _0x9ee125 } from "./ui_core.js";
import { F as _0x2eff30 } from "./input.jsx";
import { T as _0x3e9ae8 } from "./text.jsx";
import { m as _0x424bfe, b as _0x98b138 } from "./styles.js";
const useStyles = _0x424bfe({
  wrapper: _0x2cae93 => ({
    position: "relative",
    overflow: "hidden",
    background: _0x98b138.bgPrimary(),
    paddingTop: _0x98b138.responsiveHeight(10),
    width: "100%",
    height: "100%",
    boxShadow: "none",
    opacity: 1,
    animation: _0x2cae93.fadeIn === false ? "unset" : "fadeinpls",
    animationIterationCount: 1,
    animationDuration: "800ms"
  }),
  container: _0x2e63c7 => ({
    maxHeight: _0x2e63c7.search ? "calc(100% - " + _0x98b138.responsiveHeight(72) + ")" : "100%",
    minHeight: _0x2e63c7.search ? "calc(100% - " + _0x98b138.responsiveHeight(72) + ")" : "100%",
    height: _0x2e63c7.search ? "calc(100% - " + _0x98b138.responsiveHeight(72) + ")" : "100%",
    width: "100%",
    overflow: "hidden",
    overflowY: "scroll",
    padding: _0x2e63c7.removePadding ? 0 : "0 " + _0x98b138.responsiveWidth(16)
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
  searchContainer: _0x308bb9 => ({
    padding: _0x308bb9.removePadding ? 0 : _0x98b138.responsiveHeight(8) + " " + _0x98b138.responsiveWidth(16),
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
const AppContainer = _0x3f3e8a => {
  const [_0x2a2ef7, _0x56d255] = _0x414a39.useState("");
  const _0x4c2a60 = _0x11f77d => {
    _0x56d255(_0x11f77d);
    if (!_0x11f77d) {
      _0x3f3e8a.search.onChange(_0x3f3e8a.search.list);
      return;
    }
    const _0x3a6e5d = _0x3f3e8a.search.list.filter(_0x2822b2 => {
      for (const _0x365670 of _0x3f3e8a.search.filter) {
        const _0x18b7c2 = typeof _0x365670 === "function" ? _0x365670(_0x2822b2) : _0x2822b2[_0x365670];
        if (_0x18b7c2 && _0x18b7c2.toString().toLowerCase().indexOf(_0x11f77d.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    });
    _0x3f3e8a.search.onChange(_0x3a6e5d, _0x11f77d);
  };
  const [_0x43a217, _0x48a1fd] = _0x414a39.useState(null);
  const _0x391081 = Boolean(_0x43a217);
  const _0x407396 = _0x15a571 => {
    _0x48a1fd(_0x15a571.currentTarget);
  };
  const _0xaa23d = () => {
    _0x48a1fd(null);
  };
  const _0x287c31 = useStyles(_0x3f3e8a);
  const _0x2bebe4 = _0x3f3e8a.style ? _0x3f3e8a.style : {};
  if (_0x3f3e8a.background) {
    _0x2bebe4.background = _0x3f3e8a.background;
  }
  return <div className={"app " + (_0x3f3e8a.hasTabs ? "hasTabs" : "") + " " + (_0x3f3e8a.fadeIn === false ? "" : "app-fadein") + " " + (_0x3f3e8a.onClickBack ? "app-hasClickback" : "")} style={_0x2bebe4}><div className={"app-header " + (_0x3f3e8a.hideSearch ? "search-hidden" : "")}>{(_0x3f3e8a.heading || _0x3f3e8a.subheading && !_0x3f3e8a.titularInput) && <div className={"heading " + (_0x3f3e8a.subheading ? "heading-sub" : "")}>{_0x3f3e8a.onClickBack && <_0x28c514 title="Go Back" placement="right"><div className="back-button" onClick={_0x3f3e8a.onClickBack}><_0x9ee125 icon="chevron-left" size="lg" style={{
              color: "white"
            }} /></div></_0x28c514>}<div>{_0x3f3e8a.heading && <_0x28c514 title={_0x3f3e8a.heading} placement="top"><h1 className={_0x3f3e8a.heading.length > 11 ? "long" : ""}>{_0x3f3e8a.heading}</h1></_0x28c514>}{_0x3f3e8a.subheading && <p>{_0x3f3e8a.subheading}</p>}</div></div>}{_0x3f3e8a.titularInput && <div className={"heading " + _0x287c31.search}>{_0x3f3e8a.onClickBack && <_0x28c514 title="Go Back" placement="right"><div className="back-button" onClick={_0x3f3e8a.onClickBack}><_0x9ee125 icon="chevron-left" size="lg" style={{
              color: "white"
            }} /></div></_0x28c514>}{_0x3f3e8a.titularInput}</div>}{(_0x3f3e8a.primaryActions || _0x3f3e8a.auxActions) && <div className="primary-actions">{_0x3f3e8a.primaryActions && _0x3f3e8a.primaryActions.map(_0x21ceca => <_0x28c514 title={_0x21ceca.title} placement="left" key={"" + _0x21ceca.title + _0x21ceca.icon}><div className={"button button-icon button-" + _0x21ceca.color} onClick={_0x21ceca.onClick ? _0x21ceca.onClick : () => {}}><_0x9ee125 icon={_0x21ceca.icon} size="lg" /></div></_0x28c514>)}{_0x3f3e8a.auxActions && _0x3f3e8a.auxActions.length > 0 && <_0x414a39.Fragment><div className={" " + _0x287c31.action + " "} aria-haspopup="true" onClick={_0x407396} style={{
            marginLeft: 0
          }}><_0x9ee125 icon="ellipsis-v" size="lg" style={{
              color: "white"
            }} /></div><_0x5287ec anchorEl={_0x43a217} anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }} transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }} keepMounted={true} open={_0x391081} onClose={_0xaa23d} TransitionComponent={_0x4b18ff}>{_0x3f3e8a.auxActions.map(_0x46626c => <_0x17c390 onClick={() => {
              _0xaa23d();
              _0x46626c.onClick();
            }} key={_0x46626c.title}><_0xd7bd1 style={{
                minWidth: 32
              }}><_0x9ee125 icon={_0x46626c.icon} /></_0xd7bd1><_0x3e9ae8 variant="body2">{_0x46626c.title}</_0x3e9ae8></_0x17c390>)}</_0x5287ec></_0x414a39.Fragment>}</div>}{(_0x3f3e8a.onClickBack || _0x3f3e8a.search && !_0x3f3e8a.hideSearch) && <div className="search-container">{_0x3f3e8a.search && <_0x2eff30.Search onChange={_0x4c2a60} value={_0x2a2ef7} />}</div>}</div><div className="app-content" style={_0x3f3e8a.containerStyle || {}} onScroll={_0x3f3e8a.onScroll}>{!!_0x3f3e8a.emptyMessage && <div className="flex-centered" style={{
        padding: 32,
        flexDirection: "column",
        textAlign: "center"
      }}><_0x3e9ae8 variant="h6">{_0x3f3e8a.emptyMessageText}</_0x3e9ae8></div>}{_0x3f3e8a.children}</div></div>;
};
export { AppContainer as A };
export default AppContainer;