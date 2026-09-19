import { ay as _0x187cc9, az as _0x40aba6, aA as _0x1d4539, j as _0x19c606, n as _0x171f58, m as _0x4332ad, aB as _0xab8164, aC as _0x1748da, R as _0x3417ee, aD as _0x5d95fe, aE as _0xc71f6a, aF as _0x305efd, aG as _0x2d34a4, aH as _0x35493c, aI as _0x3098f6, aJ as _0x3af2c1, r as _0x58d685, aq as _0x24cab5, A as _0x11f74f } from "./vendor-69ed8822.js";
import { u as _0x1dbcec, C as _0x4098dc, e as _0x45b393 } from "./_config-dc44e3da.js";
import { I as _0x2bd710, A as _0x15ac50, p as _0x91af6d, E as _0x4c17bf, R as _0x3b4d3c, T as _0x38050b, U as _0x44723b, V as _0x167168, W as _0x4398ae, X as _0x501fd6, Y as _0x5ec886, Z as _0x19e9f7, O as _0x30bcac, _ as _0x21201e, q as _0x4fadb6, y as _0x3a1747, $ as _0x477749, t as _0x24db00 } from "./index-dcb6474f.js";
import { c as _0x32bd80 } from "./events-4cb64c8a.js";
import { A as _0x373d93 } from "./index-a5eeee26.js";
import { c as _0x31bf10 } from "./misc-a4c951c6.js";
import { c as _0x1e44af } from "./lib-553efcee.js";
import { a as _0x32d176 } from "./date-31836fe8.js";
import { f as _0x2a0e0b } from "./phone-input-92273ad1.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./ui-app-b5e34f38.js";
import "./store-8a444d41.js";
import "./bundle-4fbe11f0.js";
import "./duration-timer-dc979963.js";
const container$6 = "_container_1wy5m_1";
const styles$6 = {
  container: container$6
};
const container$5 = "_container_1kt1d_1";
const nav_item = "_nav_item_1kt1d_14";
const icon$2 = "_icon_1kt1d_29";
const active_bg = "_active_bg_1kt1d_36";
const active_nav_item = "_active_nav_item_1kt1d_42";
const styles$5 = {
  container: container$5,
  nav_item,
  icon: icon$2,
  active_bg,
  active_nav_item
};
const tabs = [{
  view: "call-history",
  icon: _0x187cc9,
  label: "Recents"
}, {
  view: "contacts",
  icon: _0x40aba6,
  label: "Contacts"
}, {
  view: "keypad",
  icon: _0x1d4539,
  label: "Keypad"
}];
const Navigation = () => {
  const {
    state: _0x3302fa,
    setState: _0x38657d
  } = _0x1dbcec();
  return <div className={styles$5.container}>{tabs.map(param_1 => <button className={_0x171f58(styles$5.nav_item, {
      [styles$5.active_nav_item]: _0x3302fa.view === param_1.view
    })} onClick={() => _0x38657d("view", param_1.view)} key={param_1.view}>{_0x3302fa.view === param_1.view && <_0x4332ad.div className={styles$5.active_bg} layoutId="contacts-nav-active" transition={{
        type: "spring",
        stiffness: 500,
        damping: 35
      }} />}<_0x2bd710 icon={param_1.icon} className={styles$5.icon} /><p>{param_1.label}</p></button>)}</div>;
};
const container$4 = "_container_10y1t_1";
const avatar$1 = "_avatar_10y1t_18";
const information$1 = "_information_10y1t_36";
const name = "_name_10y1t_42";
const description = "_description_10y1t_53";
const icon$1 = "_icon_10y1t_60";
const dropdownCta = "_dropdownCta_10y1t_67";
const styles$4 = {
  container: container$4,
  avatar: avatar$1,
  information: information$1,
  name,
  description,
  icon: icon$1,
  dropdownCta
};
const ContactItem = param_1 => {
  const varData_1 = () => {
    _0x31bf10(param_1.contactInfo.number);
    _0x15ac50({
      timeout: 3000,
      title: "Contacts",
      appName: "contacts",
      text: "Phone number copied to clipboard"
    });
  };
  return <div className={_0x171f58(styles$4.container)}><div className={styles$4.avatar}><_0x4098dc contact={param_1.contactInfo} /></div><div className={styles$4.information}><h1 className={styles$4.name}>{param_1.contactInfo.name}</h1><p className={styles$4.description}>{_0x91af6d(param_1.contactInfo.number)} <_0x2bd710 className={styles$4.icon} icon={_0xab8164} onClick={varData_1} /></p></div><div className={styles$4.dropdownCta} onClick={param_1.onClick}><_0x2bd710 icon={_0x1748da} className={styles$4.icon} /></div></div>;
};
const container$3 = "_container_15lp8_1";
const header = "_header_15lp8_9";
const list$1 = "_list_15lp8_31";
const empty_container$1 = "_empty_container_15lp8_38";
const empty_icon$1 = "_empty_icon_15lp8_53";
const view_filters$1 = "_view_filters_15lp8_56";
const filter_cta$1 = "_filter_cta_15lp8_65";
const active_cta$1 = "_active_cta_15lp8_77";
const list_divider$1 = "_list_divider_15lp8_82";
const line$1 = "_line_15lp8_93";
const styles$3 = {
  container: container$3,
  header,
  list: list$1,
  empty_container: empty_container$1,
  empty_icon: empty_icon$1,
  view_filters: view_filters$1,
  filter_cta: filter_cta$1,
  active_cta: active_cta$1,
  list_divider: list_divider$1,
  line: line$1
};
const ContactsView = () => {
  const {
    state: _0x212d23,
    setState: _0x3c23e6
  } = _0x1dbcec();
  const {
    setState: _0x34203e
  } = _0x4c17bf();
  const {
    setState: _0x17e586
  } = _0x45b393();
  const [_0x1ccbd5, _0x4439aa] = _0x3417ee.useState("all");
  const varData_2 = _0x3417ee.useMemo(() => {
    const varData_3 = _0x212d23.search.toLowerCase();
    return _0x212d23.contacts.filter(param_1 => {
      if (_0x1ccbd5 === "favorites" && !_0x3b4d3c(param_1.number)) {
        return false;
      }
      return param_1.name.toLowerCase().includes(varData_3) || param_1.number.toLowerCase().includes(varData_3);
    }).sort((param_1, param_2) => param_1.name.localeCompare(param_2.name));
  }, [_0x212d23.search, _0x212d23.contacts, _0x1ccbd5]);
  const varData_4 = async param_1 => {
    const [_0x22fe61, _0x55575a] = await _0x38050b(param_1.id);
    _0x15ac50({
      appName: "contacts",
      text: _0x55575a,
      title: "Contacts",
      timeout: 5000
    });
    if (_0x22fe61) {
      _0x3c23e6("contacts", [..._0x212d23.contacts.filter(param_1_1 => param_1_1.id !== param_1.id)]);
    }
    return _0x22fe61;
  };
  const varData_5 = () => {
    _0x44723b().then(param_1 => {
      if (!param_1) {
        return;
      }
      _0x3c23e6("contacts", [..._0x212d23.contacts, {
        ...param_1
      }]);
    });
  };
  const varData_6 = param_1 => {
    _0x167168({
      onConfirm: async () => await varData_4(param_1),
      description: "Are you sure you want to remove " + param_1.name + "?"
    });
  };
  const varData_7 = param_1 => {
    _0x34203e("activeApp", "messages");
    _0x17e586(param_1_1 => {
      param_1_1.activeConversationNumber = param_1.number;
      param_1_1.view = "conversation";
    });
  };
  const varData_8 = param_1 => {
    const varData_9 = _0x3b4d3c(param_1.number);
    _0x4398ae({
      title: param_1.name,
      actions: [{
        label: "Call",
        icon: _0x5d95fe,
        onSelect: () => _0x32bd80({
          number: param_1.number
        })
      }, {
        label: "Message",
        icon: _0xc71f6a,
        onSelect: () => varData_7(param_1)
      }, {
        label: "Edit",
        icon: _0x305efd,
        onSelect: () => {
          _0x501fd6(param_1).then(param_1_1 => {
            if (!param_1_1) {
              return;
            }
            _0x3c23e6("contacts", [..._0x212d23.contacts.filter(param_1_2 => param_1_2.id !== param_1_1.id), {
              ...param_1_1
            }]);
          });
        }
      }, varData_9 ? {
        label: "Unfavorite",
        icon: _0x2d34a4,
        onSelect: () => _0x5ec886(param_1.number)
      } : {
        label: "Favorite",
        icon: _0x35493c,
        onSelect: () => _0x19e9f7(param_1.number)
      }, {
        label: "Remove",
        icon: _0x3098f6,
        onSelect: () => varData_6(param_1)
      }]
    });
  };
  const varData_10 = varData_2.reduce((param_1, param_2) => {
    const varData_11 = param_2.name[0].toUpperCase();
    if (!param_1[varData_11]) {
      param_1[varData_11] = [];
    }
    param_1[varData_11].push(param_2);
    return param_1;
  }, {});
  const varData_12 = Object.keys(varData_10).sort().map(param_1 => ({
    letter: param_1,
    items: varData_10[param_1].sort((param_1_1, param_2) => param_1_1.name.localeCompare(param_2.name))
  }));
  return <_0x4332ad.div className={styles$3.container} initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} exit={{
    opacity: 0,
    x: 20
  }} transition={{
    duration: 0.2,
    ease: "easeInOut"
  }} key="contacts"><div className={styles$3.header}><_0x373d93 value={_0x212d23.search} onChange={param_1 => _0x3c23e6("search", param_1)} /><button onClick={varData_5}><_0x2bd710 icon={_0x3af2c1} /></button></div><div className={styles$3.view_filters}><button onClick={() => _0x4439aa("all")} className={_0x171f58(styles$3.filter_cta, {
        [styles$3.active_cta]: _0x1ccbd5 === "all"
      })}>All</button><button onClick={() => _0x4439aa("favorites")} className={_0x171f58(styles$3.filter_cta, {
        [styles$3.active_cta]: _0x1ccbd5 === "favorites"
      })}>Favorites</button></div><_0x30bcac when={varData_2.length <= 0}><div className={styles$3.empty_container}><_0x2bd710 icon={_0x3098f6} className={styles$3.empty_icon} /><div className={styles$3.empty_text}>No contacts found</div></div></_0x30bcac><_0x30bcac when={varData_2.length > 0}><div className={styles$3.list}><_0x21201e each={varData_12}>{param_1 => <_0x19c606.Fragment><div className={styles$3.list_divider}>{param_1.letter} <div className={styles$3.line} /></div><_0x21201e each={param_1.items}>{param_1_1 => <ContactItem contactInfo={param_1_1} onClick={() => varData_8(param_1_1)} />}</_0x21201e></_0x19c606.Fragment>}</_0x21201e></div></_0x30bcac></_0x4332ad.div>;
};
const container$2 = "_container_287aj_1";
const expanded = "_expanded_287aj_11";
const expand_icon = "_expand_icon_287aj_15";
const main_row = "_main_row_287aj_20";
const main = "_main_287aj_20";
const avatar = "_avatar_287aj_32";
const information = "_information_287aj_43";
const call_type = "_call_type_287aj_71";
const incoming = "_incoming_287aj_84";
const missed = "_missed_287aj_89";
const additional_info = "_additional_info_287aj_94";
const info = "_info_287aj_43";
const actions = "_actions_287aj_115";
const act_btn = "_act_btn_287aj_121";
const styles$2 = {
  container: container$2,
  expanded,
  expand_icon,
  main_row,
  main,
  avatar,
  information,
  call_type,
  incoming,
  missed,
  additional_info,
  info,
  actions,
  act_btn
};
const HistoryItem = ({
  info: _0x2bc68e
}) => {
  const {
    setState: _0x10fae7
  } = _0x1dbcec();
  const {
    setState: _0x3dcf23
  } = _0x4c17bf();
  const {
    setState: _0x1df4b0
  } = _0x45b393();
  const [_0x5eb282, _0x3ae1c3] = _0x58d685.useState(false);
  const varData_13 = _0x58d685.useRef(null);
  const varData_14 = _0x58d685.useMemo(() => {
    const varData_15 = _0x4fadb6();
    if (!varData_15) {
      return false;
    }
    const varData_16 = varData_15.areaCode + varData_15.number;
    return Number(_0x2bc68e.call_from) === Number(varData_16);
  }, [_0x2bc68e.call_from]);
  const varData_17 = _0x58d685.useMemo(() => String(varData_14 ? _0x2bc68e.call_to : _0x2bc68e.call_from), [varData_14, _0x2bc68e.call_to, _0x2bc68e.call_from]);
  const varData_18 = _0x58d685.useMemo(() => {
    const {
      hasName: _0x39a549,
      name: _0x4fca22
    } = _0x1e44af(varData_17);
    if (_0x39a549) {
      return _0x4fca22;
    } else {
      return _0x91af6d(varData_17);
    }
  }, [varData_17]);
  const varData_19 = _0x58d685.useMemo(() => {
    if (varData_14) {
      return "outgoing";
    }
    if (_0x2bc68e.call_established) {
      return "incoming";
    } else {
      return "missed";
    }
  }, [_0x2bc68e.call_established, varData_14]);
  const varData_20 = _0x58d685.useMemo(() => {
    if (!_0x2bc68e.call_established) {
      return null;
    }
    const varData_21 = (_0x2bc68e.call_ended - _0x2bc68e.call_established) / 1000;
    const varData_22 = Math.floor(varData_21 / 3600);
    const varData_23 = Math.floor(varData_21 % 3600 / 60);
    const varData_24 = Math.floor(varData_21 % 60);
    let varData_25 = "";
    if (varData_22 > 0) {
      varData_25 += varData_22 + "h ";
    }
    if (varData_23 > 0) {
      varData_25 += varData_23 + "m ";
    }
    varData_25 += varData_24 + "s";
    return varData_25.trim();
  }, [_0x2bc68e]);
  _0x58d685.useEffect(() => {
    if (_0x5eb282) {
      varData_13.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }, [_0x5eb282]);
  const varData_26 = () => _0x3ae1c3(param_1 => !param_1);
  const varData_27 = () => {
    const varData_28 = _0x3a1747(varData_17);
    if (varData_28) {
      _0x3dcf23("activeApp", "messages");
      _0x1df4b0(param_1 => {
        param_1.activeConversationNumber = varData_28.number;
        param_1.view = "conversation";
      });
    } else {
      _0x477749(varData_17);
    }
  };
  const varData_29 = () => _0x44723b(varData_17).then(param_1 => {
    if (!param_1) {
      return;
    }
    _0x10fae7(param_1_1 => {
      param_1_1.contacts = [...param_1_1.contacts, param_1];
    });
  });
  const varData_30 = () => _0x32bd80({
    number: varData_17
  });
  const varData_31 = _0x58d685.useMemo(() => {
    const varData_32 = _0x3a1747(varData_17);
    return varData_32;
  }, [varData_17]);
  return <div className={_0x171f58(styles$2.container, {
    [styles$2.expanded]: _0x5eb282
  })} ref={varData_13}><div className={styles$2.main_row} onClick={varData_26}><div className={styles$2.main}><div className={styles$2.avatar}><_0x4098dc contact={varData_31} /></div><div className={styles$2.information}><h1>{varData_18}</h1><p>{_0x32d176((_0x2bc68e.call_established ?? _0x2bc68e.call_initiated) / 1000)}</p></div></div><div className={_0x171f58(styles$2.call_type, {
        [styles$2.outgoing]: varData_19 === "outgoing",
        [styles$2.incoming]: varData_19 === "incoming",
        [styles$2.missed]: varData_19 === "missed"
      })}>{varData_19}</div><_0x4332ad.div className={styles$2.expand_icon} animate={{
        rotate: _0x5eb282 ? 90 : 0
      }}><_0x2bd710 icon={_0x24cab5} /></_0x4332ad.div></div><_0x30bcac when={_0x5eb282}><div className={styles$2.additional_info}><_0x30bcac when={varData_20}>{param_1 => <p className={styles$2.info}>Duration <span>{param_1}</span></p>}</_0x30bcac><div className={styles$2.actions}><button className={styles$2.act_btn} onClick={varData_27}>Message</button><_0x30bcac when={!varData_31}><button className={styles$2.act_btn} onClick={varData_29}>Add Contact</button></_0x30bcac><button className={styles$2.act_btn} onClick={varData_30}>Call</button></div></div></_0x30bcac></div>;
};
const container$1 = "_container_pk75k_1";
const list = "_list_pk75k_9";
const empty_container = "_empty_container_pk75k_15";
const empty_icon = "_empty_icon_pk75k_30";
const view_filters = "_view_filters_pk75k_33";
const filter_cta = "_filter_cta_pk75k_42";
const active_cta = "_active_cta_pk75k_54";
const list_divider = "_list_divider_pk75k_59";
const line = "_line_pk75k_70";
const styles$1 = {
  container: container$1,
  list,
  empty_container,
  empty_icon,
  view_filters,
  filter_cta,
  active_cta,
  list_divider,
  line
};
const CallHistoryView = () => {
  const {
    state: _0x400c74,
    setState: _0x587f15,
    fetchCallHistory: _0x24f5ea
  } = _0x1dbcec();
  const [_0x4ef03b, _0x532a49] = _0x3417ee.useState("");
  const [_0x34c345, _0x3bd334] = _0x3417ee.useState("all");
  const varData_33 = _0x3417ee.useMemo(() => {
    const varData_34 = _0x24db00();
    if (!varData_34) {
      return _0x400c74.callHistory;
    }
    return _0x400c74.callHistory.filter(param_1 => {
      if (_0x34c345 === "all") {
        return true;
      }
      const varData_35 = Number(param_1.call_from) === Number(varData_34);
      if (varData_35) {
        return false;
      }
      return !param_1.call_established;
    }).filter(param_1 => {
      const varData_36 = _0x3a1747(String(param_1.call_from));
      if (varData_36) {
        return varData_36.name.toLowerCase().includes(_0x4ef03b.toLowerCase());
      } else {
        return String(param_1.call_from).includes(_0x4ef03b) || String(param_1.call_to).includes(_0x4ef03b);
      }
    });
  }, [_0x34c345, _0x400c74.callHistory, _0x4ef03b, _0x400c74.contacts]);
  _0x3417ee.useEffect(() => {
    _0x24f5ea();
    return () => {
      _0x587f15("callHistory", []);
    };
  }, []);
  return <_0x4332ad.div className={styles$1.container} initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} exit={{
    opacity: 0,
    x: 20
  }} transition={{
    duration: 0.2,
    ease: "easeInOut"
  }} key="call-history"><_0x373d93 value={_0x4ef03b} onChange={param_1 => _0x532a49(param_1)} /><div className={styles$1.view_filters}><button onClick={() => _0x3bd334("all")} className={_0x171f58(styles$1.filter_cta, {
        [styles$1.active_cta]: _0x34c345 === "all"
      })}>All</button><button onClick={() => _0x3bd334("missed")} className={_0x171f58(styles$1.filter_cta, {
        [styles$1.active_cta]: _0x34c345 === "missed"
      })}>Missed</button></div><_0x30bcac when={varData_33.length > 0}><div className={styles$1.list}><_0x21201e each={varData_33}>{param_1 => <HistoryItem info={param_1} />}</_0x21201e></div></_0x30bcac><_0x30bcac when={varData_33.length <= 0}><div className={styles$1.empty_container}><_0x2bd710 icon={_0x5d95fe} className={styles$1.empty_icon} /><div className={styles$1.empty_text}>No recent calls</div></div></_0x30bcac></_0x4332ad.div>;
};
const container = "_container_5tz6o_1";
const content = "_content_5tz6o_11";
const input_container = "_input_container_5tz6o_17";
const text = "_text_5tz6o_23";
const numbers$1 = "_numbers_5tz6o_34";
const number = "_number_5tz6o_34";
const icon = "_icon_5tz6o_72";
const action_btn = "_action_btn_5tz6o_77";
const call = "_call_5tz6o_88";
const back = "_back_5tz6o_98";
const empty = "_empty_5tz6o_102";
const styles = {
  container,
  content,
  input_container,
  text,
  numbers: numbers$1,
  number,
  icon,
  action_btn,
  call,
  back,
  empty
};
const numbers = [{
  number: "1"
}, {
  number: "2",
  letters: "abc"
}, {
  number: "3",
  letters: "def"
}, {
  number: "4",
  letters: "ghi"
}, {
  number: "5",
  letters: "jkl"
}, {
  number: "6",
  letters: "mno"
}, {
  number: "7",
  letters: "pqrs"
}, {
  number: "8",
  letters: "tuv"
}, {
  number: "9",
  letters: "wxyz"
}, {
  number: "*"
}, {
  number: "0"
}, {
  number: "#"
}];
const KeypadView = param_1 => {
  const [_0x2618a7, _0x447096] = _0x58d685.useState("");
  const varData_37 = () => {
    const varData_38 = new Audio(_0x2a0e0b);
    varData_38.volume = 0.05;
    varData_38.controls = false;
    varData_38.play();
    setTimeout(() => {
      varData_38.remove();
    }, 250);
  };
  const varData_39 = param_1_1 => {
    if (_0x2618a7.length >= 10) {
      return;
    }
    varData_37();
    _0x447096(param_1_2 => param_1_2 += param_1_1);
  };
  const varData_40 = () => {
    varData_37();
    _0x447096(param_1_1 => param_1_1.slice(0, -1));
  };
  const varData_41 = _0x58d685.useCallback(param_1_1 => {
    if (param_1_1.keyCode === 8) {
      varData_40();
    } else {
      const varData_42 = /^[0-9\b]+$/.test(param_1_1.key);
      if (!varData_42) {
        return;
      }
      varData_39(param_1_1.key);
    }
  }, [_0x2618a7]);
  const varData_43 = param_1_1 => {
    const varData_44 = param_1_1.clipboardData?.getData("text");
    if (!varData_44) {
      return;
    }
    const varData_45 = /^[0-9\b]+$/.test(varData_44);
    if (!varData_45) {
      return;
    }
    _0x447096(varData_44);
  };
  _0x58d685.useEffect(() => {
    document.addEventListener("keydown", varData_41);
    document.addEventListener("paste", varData_43);
    return () => {
      document.removeEventListener("keydown", varData_41);
      document.removeEventListener("paste", varData_43);
    };
  }, [varData_41]);
  return <_0x4332ad.div className={styles.container} initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} exit={{
    opacity: 0,
    x: 20
  }} transition={{
    duration: 0.2,
    ease: "easeInOut"
  }} key="keypad"><div className={styles.content}><div className={styles.input_container}><h1 className={styles.text}>{_0x91af6d(_0x2618a7)}</h1></div><div className={styles.numbers}>{numbers.map(param_1_1 => <button className={styles.number} onClick={() => varData_39(param_1_1.number)} key={param_1_1.number}>{param_1_1.number} {param_1_1.letters && <span>{param_1_1.letters}</span>}</button>)}<button className={styles.empty} /><button className={_0x171f58(styles.action_btn, styles.call)} onClick={() => _0x32bd80({
          number: _0x2618a7
        })}><_0x2bd710 icon="phone" className={styles.icon} /></button><button className={_0x171f58(styles.action_btn, styles.back)} onClick={() => varData_40()}><_0x2bd710 icon="backspace" className={styles.icon} /></button></div></div></_0x4332ad.div>;
};
const AppContainer = () => {
  const {
    state: _0x175d60,
    fetchContacts: _0xd04f9c
  } = _0x1dbcec();
  _0x3417ee.useEffect(() => {
    _0xd04f9c();
  }, []);
  return <div className={styles$6.container}><_0x11f74f mode="wait">{_0x175d60.view === "contacts" && <ContactsView />}{_0x175d60.view === "keypad" && <KeypadView />}{_0x175d60.view === "call-history" && <CallHistoryView />}</_0x11f74f><Navigation /></div>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/contacts.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Contacts",
    name: "contacts",
    position: 3,
    render: () => <AppContainer />,
    favourite: true
  };
};
export { config as default };