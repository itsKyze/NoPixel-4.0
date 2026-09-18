var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { R as _0x277483, j as _0x1d8109, z as _0x3a40d1, C as _0x2f8d6d, D as _0x4f3f74, w as _0x4482b5, T as _0x350c7e, r as _0x94d489, E as _0x235ad9, k as _0x5adedd } from "./vendor-69ed8822.js";
import { S as _0x52c39f, f as _0x54e056, I as _0x46e47a, n as _0x2652f6, g as _0xaa7983, d as _0x348dbe, C as _0x2ced71 } from "./index-dcb6474f.js";
import { A as _0x2d7c45 } from "./ui-app-b5e34f38.js";
import { B as _0x5a26d1 } from "./button-b138ef6e.js";
import { F as _0xb12b28 } from "./input-67b043ed.js";
import { T as _0x5b4452 } from "./text-2b84715a.js";
import { m as _0x1df016, b as _0x138896 } from "./styles-c7d7714e.js";
import { P as _0xde460e } from "./paper-438d2075.js";
import _0x2599af, { appName } from "./store-15ac9707.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./index-6dbd65c5.js";
const useStyles$1 = _0x1df016({
  wrapper: () => ({
    padding: 8
  }),
  modalWrapper: () => ({
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    ..._0x138896.flexCenter,
    zIndex: 100
  }),
  formWrapper: () => ({
    pointerEvents: "all",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    maxHeight: "90%",
    overflowY: "scroll",
    backgroundColor: _0x138896.bgSecondary()
  }),
  inputWrapper: () => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 16
  }),
  inputFieldWrapper: () => ({
    padding: 8
  }),
  actionsWrapper: () => ({
    display: "flex",
    justifyContent: "space-between",
    padding: 16
  }),
  burgerWrapper: () => ({
    display: "flex",
    justifyContent: "space-between"
  }),
  loading: () => ({
    flex: 1,
    ..._0x138896.flexCenter
  }),
  itemWrapper: () => ({
    padding: 8,
    marginTop: 8,
    width: "100%",
    backgroundColor: _0x138896.bgSecondary()
  }),
  itemHeading: () => ({
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  }),
  itemHeadingInner: () => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }),
  itemHeadingActions: () => ({
    marginLeft: 8,
    ..._0x138896.flexCenter,
    height: 24,
    width: "auto"
  })
});
const SectionForm = param_1 => {
  const [_0x3b3ee3, _0x1744ee] = _0x277483.useState(false);
  const [_0x4e21b6, _0x4871b0] = _0x277483.useState("");
  const [_0x16e5d6, _0x1ee2f9] = _0x277483.useState(false);
  const [_0x1db309, _0x5b502d] = _0x277483.useState((param_1.fields || []).reduce((param_1_1, param_2) => ({
    ...param_1_1,
    [param_2.name]: param_2.default
  }), {}));
  const varData_1 = useStyles$1();
  const varData_2 = async () => {
    if (_0x4e21b6) {
      _0x4871b0("");
      return;
    }
    _0x1744ee(true);
    _0x4871b0("");
    _0x1ee2f9(false);
    let varData_3;
    if (param_1.isConfirm) {
      varData_3 = await param_1.onSubmit();
    } else {
      const varData_4 = {};
      param_1.fields.forEach(param_1_1 => {
        varData_4[param_1_1.name] = _0x1db309[param_1_1.name];
        if (param_1_1.type === "date") {
          varData_4[param_1_1.name] = Math.round(_0x1db309[param_1_1.name].getTime() / 1000);
        }
      });
      varData_3 = await param_1.onSubmit(varData_4);
    }
    if (!varData_3.ok) {
      _0x1744ee(false);
      _0x4871b0(varData_3.message);
      return;
    }
    _0x1744ee(false);
    _0x4871b0("");
    _0x1ee2f9(true);
    setTimeout(() => {
      param_1.onCancel();
    }, 1500);
  };
  const varData_5 = !param_1.isConfirm && !_0x3b3ee3 && !_0x16e5d6 && !_0x4e21b6;
  return <div className={varData_1.formWrapper}><div className={varData_1.inputWrapper}>{_0x3b3ee3 && <div className={varData_1.loading}><_0x52c39f /></div>}{_0x4e21b6 && <div className={varData_1.loading}><_0x5b4452 variant="body1">{_0x4e21b6}</_0x5b4452></div>}{_0x16e5d6 && <div className={varData_1.loading}><_0x54e056 /></div>}{varData_5 && param_1.fields.map(param_1_1 => <div className={varData_1.inputFieldWrapper} key={param_1_1.label}>{(!param_1_1.type || param_1_1.type === "text") && <_0xb12b28.Text icon="pen" label={param_1_1.label} onChange={param_1_2 => _0x5b502d(param_1_3 => ({
          ...param_1_3,
          [param_1_1.name]: param_1_2
        }))} value={_0x1db309[param_1_1.name] || ""} />}{param_1_1.type === "checkbox" && <_0xb12b28.Checkbox label={param_1_1.label} onChange={param_1_2 => _0x5b502d(param_1_3 => ({
          ...param_1_3,
          [param_1_1.name]: param_1_2
        }))} checked={_0x1db309[param_1_1.name] || false} />}{param_1_1.type === "date" && <_0xb12b28.DatePicker label={param_1_1.label} onChange={param_1_2 => _0x5b502d(param_1_3 => ({
          ...param_1_3,
          [param_1_1.name]: param_1_2
        }))} value={_0x1db309[param_1_1.name] || /* @__PURE__ */new Date()} />}{param_1_1.type === "select" && <_0xb12b28.Select items={param_1_1.options} label={param_1_1.label} onChange={param_1_2 => _0x5b502d(param_1_3 => ({
          ...param_1_3,
          [param_1_1.name]: param_1_2
        }))} value={_0x1db309[param_1_1.name] || param_1_1.options[0].id} />}</div>)}{!_0x3b3ee3 && !_0x4e21b6 && !_0x16e5d6 && param_1.isConfirm && <div className={varData_1.loading}><_0x5b4452 variant="body1">Are you sure? This action cannot be undone</_0x5b4452></div>}</div>{!_0x3b3ee3 && !_0x16e5d6 && <div className={varData_1.actionsWrapper}><_0x5a26d1.Secondary onClick={param_1.onCancel} size="small">Cancel</_0x5a26d1.Secondary><_0x5a26d1.Primary onClick={varData_2} size="small">{_0x4e21b6 ? "Ok Pal" : "Submit"}</_0x5a26d1.Primary></div>}</div>;
};
const Section = param_1 => {
  const [_0x112c69, _0x58321c] = _0x277483.useState({
    show: false,
    fields: []
  });
  const [_0x12af8e, _0x212ab4] = _0x277483.useState(null);
  const varData_6 = Boolean(_0x12af8e);
  const varData_7 = param_1_1 => {
    _0x212ab4(param_1_1.currentTarget);
  };
  const varData_8 = () => {
    _0x212ab4(null);
  };
  const varData_9 = useStyles$1();
  const varData_10 = Math.random();
  return <div className={varData_9.wrapper}>{_0x112c69.show && <div className={varData_9.modalWrapper}><SectionForm fields={_0x112c69.fields} onCancel={() => _0x58321c({
        show: false
      })} onSubmit={param_1_1 => _0x112c69.onSubmit(param_1_1)} /></div>}<div className={varData_9.itemHeadingInner}><_0x5b4452 variant="h6">{param_1.heading}</_0x5b4452><div className={varData_9.burgerWrapper}>{param_1.action && <div><_0x5a26d1.Primary onClick={() => _0x58321c({
            show: true,
            fields: param_1.action.fields,
            onSubmit: param_1.action.onSubmit
          })} size="small">{param_1.action.label}</_0x5a26d1.Primary></div>}{param_1.burger && <div className={varData_9.itemHeadingActions}><div aria-controls={"fade-menu-" + varData_10} aria-haspopup="true" onClick={varData_7}><_0x46e47a icon="ellipsis-v" /></div><_0x3a40d1 id={"fade-menu-" + varData_10} anchorEl={_0x12af8e} keepMounted={true} open={varData_6} onClose={varData_8} TransitionComponent={_0x2f8d6d}>{param_1.burger.map(({
              label: _0x262814,
              onClick: _0x4a5e26,
              ..._0x22b9f6
            }) => <_0x4f3f74 onClick={() => {
              varData_8();
              if (_0x4a5e26) {
                _0x4a5e26();
              }
              if (_0x22b9f6.isForm) {
                _0x58321c({
                  show: true,
                  fields: _0x22b9f6.fields,
                  onSubmit: _0x22b9f6.onSubmit
                });
              }
            }} key={_0x262814}>{_0x262814}</_0x4f3f74>)}</_0x3a40d1></div>}</div></div>{param_1.children}</div>;
};
const Item = ({
  includeConfirm = true,
  ..._0x40f952
}) => {
  const [_0x341ed6, _0x14a7a8] = _0x277483.useState(false);
  const [_0xa3faca, _0x2dbf5c] = _0x277483.useState({
    show: false,
    fields: []
  });
  const [_0x219945, _0x526705] = _0x277483.useState(null);
  const varData_11 = Boolean(_0x219945);
  const varData_12 = param_1 => {
    _0x526705(param_1.currentTarget);
  };
  const varData_13 = () => {
    _0x526705(null);
  };
  const varData_14 = useStyles$1();
  const varData_15 = Math.random();
  return <div className={varData_14.itemWrapper}>{_0xa3faca.show && <div className={varData_14.modalWrapper}><SectionForm fields={_0xa3faca.fields} isConfirm={_0xa3faca.isConfirm} onCancel={() => _0x2dbf5c({
        show: false
      })} onSubmit={param_1 => _0xa3faca.onSubmit(param_1)} /></div>}{_0x341ed6 && <div className={varData_14.modalWrapper}><_0x52c39f /></div>}<div className={varData_14.itemHeading}><div className={varData_14.itemHeadingInner}><_0x5b4452 variant="body1">{_0x40f952.heading}</_0x5b4452>{_0x40f952.headingExtra && <_0x5b4452 variant="body1">{_0x40f952.headingExtra}</_0x5b4452>}</div>{_0x40f952.actions && _0x40f952.actions.length > 0 && <div className={varData_14.itemHeadingActions}><div aria-controls={"fade-menu-" + varData_15} aria-haspopup="true" onClick={varData_12}><_0x46e47a icon="ellipsis-v" /></div><_0x3a40d1 id={"fade-menu-" + varData_15} anchorEl={_0x219945} keepMounted={true} open={varData_11} onClose={varData_13} TransitionComponent={_0x2f8d6d}>{_0x40f952.actions.map(({
            label: _0x501a83,
            onClick: _0x1eb6f9,
            ..._0x4731af
          }) => <_0x4f3f74 onClick={() => {
            varData_13();
            if (_0x1eb6f9) {
              _0x1eb6f9({
                loading: _0x14a7a8
              });
            }
            if (_0x4731af.isForm) {
              _0x2dbf5c({
                show: true,
                fields: _0x4731af.fields,
                onSubmit: _0x4731af.onSubmit
              });
            }
            if (_0x4731af.isConfirm) {
              _0x2dbf5c({
                isConfirm: true,
                show: true,
                onSubmit: _0x4731af.onConfirm
              });
            }
          }} key={_0x501a83}>{_0x501a83}</_0x4f3f74>)}</_0x3a40d1></div>}</div>{_0x277483.Children.map(_0x40f952.children, param_1 => {
      const varData_16 = {
        confirm: param_1_1 => _0x2dbf5c({
          isConfirm: true,
          show: true,
          onSubmit: param_1_1
        })
      };
      if (_0x277483.isValidElement(param_1)) {
        return _0x277483.cloneElement(param_1, includeConfirm ? varData_16 : {});
      }
      return param_1;
    })}</div>;
};
const HtmlTooltip = _0x4482b5(param_1 => ({
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "none",
    fontSize: param_1.typography.pxToRem(12),
    position: "relative"
  }
}))(_0x350c7e);
const FootageItem = param_1 => {
  const [_0x12388d, _0x522965] = _0x94d489.useState(false);
  return <_0xde460e style={{
    width: "100%"
  }}><_0xde460e.Details description={<div><_0x5b4452 variant="body2">Submitted By: {param_1.author} - {param_1.information.dateString}</_0x5b4452><_0x5b4452 variant="body2">Location: {param_1.information.location} - Duration: {param_1.information.duration}s</_0x5b4452>{param_1.information.clips?.map(param_1_1 => {
        let varData_17 = "";
        let varData_18;
        switch (param_1_1.type) {
          case "clip":
            varData_17 = "https://clips.twitch.tv/" + param_1_1.url;
            break;
          case "vod":
            varData_17 = "https://player.twitch.tv/?video=" + param_1_1.url + "&volume=0.5&parent=twitch.tv";
            break;
          case "streamable":
            varData_17 = "https://streamable.com/" + param_1_1.url;
            varData_18 = <iframe title="streamable" src={"https://streamable.com/o/" + param_1_1.url} frameBorder="0" scrolling="no" width="560" height="315" allowFullScreen={false} />;
            break;
          case "youtube":
            varData_17 = "https://youtu.be/" + param_1_1.url;
            varData_18 = <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + param_1_1.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false} />;
            break;
          case "imgur":
            varData_17 = "https://i.imgur.com/" + param_1_1.url;
            varData_18 = <_0x235ad9 onClickAway={() => _0x522965(false)} key={Math.random()}><HtmlTooltip disableFocusListener={true} disableHoverListener={true} disableTouchListener={true} title={<_0x277483.Fragment><div onClick={() => _0x522965(false)}><img src={varData_17} alt={varData_17} style={{
                    maxHeight: 600,
                    maxWidth: 800
                  }} /></div></_0x277483.Fragment>} placement="left" open={_0x12388d} onClose={() => _0x522965(false)}><div className="editor-image" onClick={() => _0x522965(param_1_2 => !param_1_2)} style={{
                  backgroundImage: "url(" + varData_17 + ")"
                }} /></HtmlTooltip></_0x235ad9>;
        }
        return <_0x5b4452 variant="body1" style={{
          margin: "8px 0"
        }}>{param_1_1.title}<_0x5b4452 variant="body2" style={{
            color: "orange",
            cursor: "pointer"
          }}>{varData_17}</_0x5b4452>{varData_18}</_0x5b4452>;
      })}<_0x5a26d1.Secondary onClick={() => param_1.performAction("export", param_1.information)}>Copy to Tape</_0x5a26d1.Secondary></div>} title={<_0x5b4452 variant="body1">{param_1.information.title || ""} (Tape #{param_1.information.id})</_0x5b4452>} /></_0xde460e>;
};
const Approvals = param_1 => {
  return <Section heading="Approve / Deny Footage">{param_1.archiveItems.filter(param_1_1 => param_1_1.approved === 0).map(param_1_1 => <div key={param_1_1.id}><FootageItem performAction={(param_1_2, param_2) => param_1.performAction(param_1_2, param_2)} {...param_1_1} /><div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 8
      }}><_0x5a26d1.Secondary onClick={() => param_1.performAction("reject", param_1_1)}>Reject</_0x5a26d1.Secondary><_0x5a26d1.Tertiary onClick={() => param_1.performAction("archive", param_1_1)} style={{
          marginLeft: 16
        }}>Approve & Archive</_0x5a26d1.Tertiary><_0x5a26d1.Primary onClick={() => param_1.performAction("approve", param_1_1)} style={{
          marginLeft: 16
        }}>Approve</_0x5a26d1.Primary></div></div>)}</Section>;
};
let Container$4 = class Container extends _0x277483.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "getNewsArchives", async () => {
      const varData_19 = await _0x2652f6("np-ui:getNewsArchives", {
        approvals: true
      }, {
        returnData: _0xaa7983.getNewsArchives()
      });
      this.props.updateState({
        archiveItems: varData_19.data
      });
    });
    __publicField(this, "performAction", async (param_1, param_2) => {
      await _0x2652f6("np-ui:newsArchiveAction", {
        action: param_1,
        data: param_2
      });
      this.getNewsArchives();
    });
  }
  async componentDidMount() {
    this.getNewsArchives();
  }
  render() {
    return <Approvals {...this.props} performAction={this.performAction} />;
  }
};
let searchValueTimeout = 0;
const Archives = param_1 => {
  const [_0x4cad74, _0x58420c] = _0x277483.useState("");
  const varData_20 = param_1_1 => {
    _0x58420c(param_1_1);
    clearTimeout(searchValueTimeout);
    searchValueTimeout = setTimeout(() => {
      param_1.changeSearchValue(param_1_1);
    }, 1000);
  };
  return <Section heading="Historic Footage"><div style={{
      marginBottom: 8
    }}><_0xb12b28.Search onChange={varData_20} value={_0x4cad74} /></div>{param_1.archiveItems.filter(param_1_1 => param_1_1.approved === 1).map(param_1_1 => <div key={param_1_1.id}><FootageItem performAction={(param_1_2, param_2) => param_1.performAction(param_1_2, param_2)} {...param_1_1} /><div style={{
        marginBottom: 32
      }}><_0xde460e drawer={<_0xde460e.Drawer items={[]}><div className="flex-centered flex-space-between"><_0x5a26d1.Secondary onClick={() => param_1.performAction("reject", param_1_1)}>Delete</_0x5a26d1.Secondary></div></_0xde460e.Drawer>}><_0xde460e.Details title="Delete Footage?" /></_0xde460e></div></div>)}</Section>;
};
let Container$3 = class Container2 extends _0x277483.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "getNewsArchives", async (_0x280613 = "") => {
      const varData_21 = await _0x2652f6("np-ui:getNewsArchives", {
        search: _0x280613
      }, {
        returnData: _0xaa7983.getNewsArchives()
      });
      this.props.updateState({
        archiveItems: varData_21.data
      });
    });
    __publicField(this, "changeSearchValue", param_1 => {
      this.getNewsArchives(param_1);
    });
    __publicField(this, "performAction", async (param_1, param_2) => {
      await _0x2652f6("np-ui:newsArchiveAction", {
        action: param_1,
        data: param_2
      });
      this.getNewsArchives();
    });
  }
  async componentDidMount() {
    this.getNewsArchives();
  }
  render() {
    return <Archives {...this.props} changeSearchValue={this.changeSearchValue} performAction={this.performAction} />;
  }
};
const containerHeight = _0x138896.responsiveHeight(600);
const useStyles = _0x1df016({
  container: () => ({
    pointerEvents: "all",
    userSelect: "unset",
    width: _0x138896.responsiveWidth(800),
    height: containerHeight,
    backgroundColor: _0x138896.bgSecondary(),
    display: "flex",
    color: _0x138896.textColor(),
    position: "relative"
  }),
  left: () => ({
    width: "25%"
  }),
  right: () => ({
    flex: 1,
    backgroundColor: _0x138896.bgPrimary(),
    maxHeight: containerHeight,
    overflowY: "scroll"
  }),
  menuItem: () => ({
    ..._0x138896.flexCenter,
    height: 56,
    width: "100%",
    cursor: "pointer",
    "& p": {
      width: "100%",
      textAlign: "left",
      padding: 16
    }
  }),
  menuItemActive: () => ({
    backgroundColor: _0x138896.bgPrimary()
  })
});
const Container$2 = param_1 => {
  const varData_22 = useStyles(param_1);
  return <div className={varData_22.container}><div className={varData_22.left}>{param_1.items.map(param_1_1 => <div className={varData_22.menuItem + " " + (param_1.activeItem === param_1_1.id ? varData_22.menuItemActive : null)} onClick={() => param_1.onMenuItemClick(param_1_1)} key={param_1_1.id}><_0x5b4452 variant="body1">{param_1_1.label}</_0x5b4452></div>)}</div><div className={varData_22.right}>{param_1.children}</div></div>;
};
class GeneralManager extends _0x277483.Component {
  render() {
    return <Container$2 {...this.props} />;
  }
}
const {
  mapDispatchToProps,
  mapStateToProps
} = _0x348dbe(_0x2599af);
class Container3 extends _0x277483.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      activeId: -1,
      show: false
    });
    __publicField(this, "onHide", () => {
      this.setState({
        show: false
      });
    });
    __publicField(this, "onShow", async () => {
      this.setState({
        show: true
      });
    });
    __publicField(this, "createModules", () => {
      const varData_23 = [["approvals", {
        id: 1,
        label: "Approvals"
      }], ["archives", {
        id: 2,
        label: "Archives"
      }]];
      return varData_23.map(([_0x31a419, _0x9b4ef1]) => _0x9b4ef1);
    });
  }
  render() {
    return <_0x2d7c45 center={true} store={true} name={appName} onEscape={this.onHide} onHide={this.onHide} onShow={this.onShow}>{this.state.show && <GeneralManager activeItem={this.state.activeId} items={this.createModules()} onMenuItemClick={({
        id: _0x115c47
      }) => this.setState({
        activeId: _0x115c47
      })}>{this.state.activeId === -1 && <div />}{this.state.activeId === 1 && <Container$4 {...this.props} />}{this.state.activeId === 2 && <Container$3 {...this.props} />}</GeneralManager>}</_0x2d7c45>;
  }
}
const Container$1 = _0x5adedd(mapStateToProps, mapDispatchToProps)(Container3);
const config = () => {
  return {
    name: appName,
    render: Container$1,
    type: _0x2ced71.Application
  };
};
export { config as default };