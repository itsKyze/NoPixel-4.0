import { j as _0x723c6, m as _0x16a512, R as _0x178570, n as _0x55e743, aV as _0x1c03e1, aW as _0x1cc5ba, aX as _0x1228c8, r as _0xf0e391, aY as _0x357d66, ar as _0x95b341, T as _0x4a071b, aJ as _0x5847b3, aZ as _0x53d0a1, aD as _0x74f27d, A as _0x153d16, a_ as _0x30f40f, a$ as _0x5b9153, b0 as _0x25851b, b1 as _0x53cd4a, b2 as _0x1f5b4d, b3 as _0x4dc40f, aE as _0x8df620 } from "./vendor-69ed8822.js";
import { a3 as _0x1a073a, O as _0x397763, n as _0x3624b9, A as _0x37c726, I as _0x10b18a, t as _0x8619c8, a4 as _0x30b03c, a5 as _0x359221, y as _0xc6e904, a6 as _0x570751, a7 as _0x547ce3, a8 as _0x13a889, U as _0x2d02ed, X as _0x414c63, V as _0x18f12d, a9 as _0x364b0a, aa as _0x3912c7, q as _0x5d603a, p as _0x5a7922, _ as _0x5d7d33, ab as _0x33e7f2, B as _0x57a0d1, v as _0x4c920b, w as _0x4d8b28, R as _0x1ab6e7, ac as _0x27698a } from "./index-dcb6474f.js";
import { e as _0x457e2b, u as _0x16a3c1, C as _0x7c70e2 } from "./_config-dc44e3da.js";
import { c as _0x41f7b7 } from "./events-4cb64c8a.js";
import { T as _0xaad402, p as _0x129971, P as _0x4d0be2 } from "./index-fe57c2f2.js";
import { a as _0x2b40ad } from "./date-31836fe8.js";
import { u as _0x21d366 } from "./ui-app-b5e34f38.js";
import { A as _0x3046c0 } from "./index-a5eeee26.js";
import { A as _0x21010e } from "./index-2aafdbb2.js";
import { c as _0x586349 } from "./lib-553efcee.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./store-8a444d41.js";
import "./duration-timer-dc979963.js";
import "./misc-a4c951c6.js";
const container$4 = "_container_jjpxx_1";
const empty_container$2 = "_empty_container_jjpxx_11";
const empty_icon$1 = "_empty_icon_jjpxx_26";
const styles$5 = {
  container: container$4,
  empty_container: empty_container$2,
  empty_icon: empty_icon$1
};
const bubbles = "_bubbles_o9bux_1";
const bubbleSmall = "_bubbleSmall_o9bux_8";
const bubbleMedium = "_bubbleMedium_o9bux_9";
const bubbleTiny = "_bubbleTiny_o9bux_10";
const loading_container = "_loading_container_o9bux_28";
const styles$4 = {
  bubbles,
  bubbleSmall,
  bubbleMedium,
  bubbleTiny,
  loading_container
};
const MessagesLoadingContainer = param_1 => {
  const varData_1 = [styles$4.bubbleSmall, styles$4.bubbleMedium, styles$4.bubbleTiny];
  return <div className={styles$4.loading_container}><div className={styles$4.bubbles}>{Array.from({
        length: param_1.bubbles ?? 1
      }).map((param_1_1, param_2) => {
        const varData_2 = varData_1[param_2 % varData_1.length];
        return <_0x16a512.div className={varData_2} animate={{
          opacity: [0.4, 1, 0.4]
        }} transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: param_2 % 3 * 0.2
        }} key={param_2} />;
      })}</div></div>;
};
const container$3 = "_container_122i7_1";
const text_container = "_text_container_122i7_7";
const location_container = "_location_container_122i7_27";
const header$2 = "_header_122i7_47";
const payment_container$1 = "_payment_container_122i7_76";
const amount = "_amount_122i7_100";
const actions = "_actions_122i7_110";
const red_btn = "_red_btn_122i7_132";
const loading_spinner = "_loading_spinner_122i7_139";
const spinning$1 = "_spinning_122i7_1";
const timestamp = "_timestamp_122i7_154";
const self_text_container = "_self_text_container_122i7_164";
const styles$3 = {
  container: container$3,
  text_container,
  location_container,
  header: header$2,
  payment_container: payment_container$1,
  amount,
  actions,
  red_btn,
  loading_spinner,
  spinning: spinning$1,
  timestamp,
  self_text_container
};
const LOCATION_DURATION = 600000;
const MessageItem = param_1 => {
  const [_0x12ca78, _0x37d27e] = _0x178570.useState(_0x1a073a(param_1.text));
  _0x178570.useEffect(() => {
    _0x37d27e(_0x1a073a(param_1.text));
  }, [param_1.text]);
  const varData_3 = _0x178570.useMemo(() => {
    return param_1.text.startsWith("67") && param_1.text.length === 2;
  }, [param_1.text]);
  return <_0x16a512.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4,
    ease: [0.25, 0.25, 0, 1]
  }} className={_0x55e743(styles$3.container, {
    [styles$3.self_text_container]: param_1.self
  })} style={{
    alignSelf: param_1.self ? "flex-end" : "flex-start"
  }}><_0x397763 when={varData_3}><_0xaad402 /></_0x397763><_0x397763 when={!varData_3 && _0x12ca78.type === "text"}><TextMessage text={param_1.text} timestamp={param_1.timestamp} /></_0x397763><_0x397763 when={!varData_3 && _0x12ca78.type === "location"}><LocationMessage data={_0x12ca78.data} timestamp={param_1.timestamp} /></_0x397763><_0x397763 when={!varData_3 && _0x12ca78.type === "payment"}><PaymentMessage data={_0x12ca78.data} timestamp={param_1.timestamp} /></_0x397763></_0x16a512.div>;
};
const TextMessage = param_1 => {
  const {
    images: _0x189a6d,
    message: _0x514d2b
  } = _0x129971(param_1.text);
  return <_0x723c6.Fragment><div className={_0x55e743(styles$3.text_container)}><p>{_0x514d2b}</p>{_0x189a6d.length > 0 && <_0x4d0be2 images={_0x189a6d} />}</div><span className={styles$3.timestamp}>{_0x2b40ad(param_1.timestamp)}</span></_0x723c6.Fragment>;
};
const LocationMessage = param_1 => {
  const [_0x3534a7, _0x5c3de7] = _0x178570.useState("");
  const varData_4 = _0x178570.useMemo(() => {
    const timestamp_1 = Date.now();
    const varData_5 = timestamp_1 - Number(param_1.timestamp) * 1000;
    return varData_5 > LOCATION_DURATION;
  }, [param_1.timestamp]);
  const varData_6 = async () => {
    if (varData_4) {
      return;
    }
    _0x3624b9("np-ui:markLocation", {
      coords: param_1.data
    });
    _0x37c726({
      timeout: 3000,
      title: "Messages",
      appName: "messages",
      text: "The location has been marked on your GPS!"
    });
  };
  _0x178570.useEffect(() => {
    const varData_7 = () => {
      const timestamp_1 = Date.now();
      const varData_8 = timestamp_1 - Number(param_1.timestamp) * 1000;
      const varData_9 = LOCATION_DURATION - varData_8;
      if (varData_9 <= 0) {
        const varData_10 = "";
        _0x5c3de7(varData_10);
        return;
      }
      if (varData_9 > 60000) {
        const varData_11 = "Expires in " + Math.ceil(varData_9 / 60000) + " minutes";
        _0x5c3de7(varData_11);
      } else {
        const varData_12 = "Expires in " + Math.ceil(varData_9 / 1000) + " seconds";
        _0x5c3de7(varData_12);
      }
    };
    varData_7();
    const intervalId = setInterval(varData_7, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [param_1.timestamp]);
  return <_0x723c6.Fragment><div className={_0x55e743(styles$3.location_container)}><div className={styles$3.header}><_0x10b18a icon={_0x1c03e1} className={styles$3.location_icon} /><span className={styles$3.location_text}>Shared Location</span></div><_0x397763 when={!varData_4}><p>{_0x3534a7}</p></_0x397763><button onClick={varData_6} disabled={varData_4}>{varData_4 ? "Location Expired" : "Mark GPS"}</button></div><span className={styles$3.timestamp}>{_0x2b40ad(param_1.timestamp)}</span></_0x723c6.Fragment>;
};
const PaymentMessage = param_1 => {
  const [_0x356db9, _0x36ff37] = _0x178570.useState(false);
  const [_0x2aaed9, _0xf94916] = _0x178570.useState(null);
  const varData_13 = async () => {
    const varData_14 = await _0x3624b9("phone:ui:payments:get", {
      paymentId: param_1.data.paymentId
    });
    if (!varData_14.meta.ok) {
      return;
    }
    _0xf94916(varData_14.data);
  };
  const varData_15 = async () => {
    _0x36ff37(true);
    try {
      const varData_16 = await _0x3624b9("phone:ui:payments:accept", {
        paymentId: param_1.data.paymentId
      });
      _0x37c726({
        timeout: 3000,
        title: "Messages",
        appName: "messages",
        text: varData_16.meta.message
      });
    } finally {
      await varData_13();
      _0x36ff37(false);
    }
  };
  const varData_17 = async () => {
    _0x36ff37(true);
    try {
      const varData_18 = await _0x3624b9("phone:ui:payments:cancel", {
        paymentId: param_1.data.paymentId
      });
      _0x37c726({
        timeout: 3000,
        title: "Messages",
        appName: "messages",
        text: varData_18.meta.message
      });
    } finally {
      await varData_13();
      _0x36ff37(false);
    }
  };
  const varData_19 = async () => {
    const varData_20 = _0x8619c8();
    if (!varData_20) {
      return;
    }
    _0x36ff37(true);
    try {
      const varData_21 = await _0x3624b9("phone:ui:payments:decline", {
        paymentId: param_1.data.paymentId,
        myNumber: varData_20
      });
      _0x37c726({
        timeout: 3000,
        title: "Messages",
        appName: "messages",
        text: varData_21.meta.message
      });
    } finally {
      await varData_13();
      _0x36ff37(false);
    }
  };
  _0x178570.useEffect(() => {
    varData_13();
  }, [param_1.data.paymentId]);
  return <_0x723c6.Fragment><div className={_0x55e743(styles$3.payment_container)}><div className={styles$3.header}><_0x10b18a icon={_0x1cc5ba} className={styles$3.location_icon} /><span className={styles$3.location_text}>GuberPay</span></div><_0x397763 when={_0x2aaed9}>{param_1_1 => <_0x723c6.Fragment><div className={styles$3.amount}>${param_1_1.amount}</div><div className={styles$3.actions}><_0x397763 when={_0x8619c8() !== param_1.data.senderNumber}><button onClick={varData_15} disabled={_0x356db9 || !param_1_1.active}><_0x30b03c><_0x359221 when={!param_1_1.active && param_1_1.paid}>Paid</_0x359221><_0x359221 when={param_1_1.active && !param_1_1.paid}>Accept</_0x359221><_0x359221 when={!param_1_1.active && !param_1_1.paid}>Cancelled</_0x359221></_0x30b03c><_0x397763 when={_0x356db9}><_0x10b18a icon={_0x1228c8} className={styles$3.loading_spinner} /></_0x397763></button><_0x397763 when={param_1_1.active && !param_1_1.paid}><button className={styles$3.red_btn} onClick={varData_19} disabled={_0x356db9 || !param_1_1.active}>Decline<_0x397763 when={_0x356db9}><_0x10b18a icon={_0x1228c8} className={styles$3.loading_spinner} /></_0x397763></button></_0x397763></_0x397763><_0x397763 when={_0x8619c8() === param_1.data.senderNumber}><button className={styles$3.red_btn} onClick={varData_17} disabled={_0x356db9 || !param_1_1.active}><_0x30b03c><_0x359221 when={param_1_1.active && !param_1_1.paid}>Cancel Request</_0x359221><_0x359221 when={!param_1_1.active && param_1_1.paid}>Paid</_0x359221><_0x359221 when={!param_1_1.active && !param_1_1.paid}>Cancelled</_0x359221></_0x30b03c><_0x397763 when={_0x356db9}><_0x10b18a icon={_0x1228c8} className={styles$3.loading_spinner} /></_0x397763></button></_0x397763></div></_0x723c6.Fragment>}</_0x397763></div><span className={styles$3.timestamp}>{_0x2b40ad(param_1.timestamp)}</span></_0x723c6.Fragment>;
};
function useChannel(param_1, param_2) {
  const {
    socket: _0x25addb,
    isConnected: _0x19251f,
    token: _0x1505a4
  } = _0x21d366();
  const varData_22 = _0xf0e391.useRef(null);
  const [_0xe4f1bc, _0x42c98e] = _0xf0e391.useState(false);
  const [_0x26d57a, _0x35158b] = _0xf0e391.useState(/* @__PURE__ */new Set());
  const varData_23 = _0xf0e391.useRef(true);
  const {
    token = _0x1505a4,
    autoJoin = true,
    onSubscriberAdded: _0x36abbb,
    onSubscriberRemoved: _0xa1c470,
    onSubscriberList: _0x39e7e3
  } = param_2 || {};
  const varData_24 = () => {
    if (!_0x25addb || !_0x19251f) {
      console.warn("[useChannel] Cannot join \"" + param_1 + "\": socket not connected");
      return;
    }
    if (varData_22.current) {
      console.warn("[useChannel] Already joined channel \"" + param_1 + "\"");
      return;
    }
    const varData_25 = _0x25addb.join(param_1, token);
    varData_22.current = varData_25;
    if (!varData_23.current) {
      return;
    }
    _0x42c98e(true);
    _0x35158b(new Set(varData_25.subscribers));
  };
  const varData_26 = () => {
    if (!_0x25addb || !varData_22.current) {
      return;
    }
    _0x25addb.leave(param_1);
    varData_22.current = null;
    if (varData_23.current) {
      _0x42c98e(false);
      _0x35158b(/* @__PURE__ */new Set());
    }
  };
  const varData_27 = (param_1_1, param_2_1, param_3) => {
    if (!varData_22.current) {
      console.warn("[useChannel] Cannot broadcast: not joined to channel \"" + param_1 + "\"");
      return;
    }
    varData_22.current.broadcast(param_1_1, param_2_1, param_3);
  };
  const varData_28 = (param_1_1, param_2_1, param_3) => {
    if (!varData_22.current) {
      console.warn("[useChannel] Cannot send: not joined to channel \"" + param_1 + "\"");
      return;
    }
    varData_22.current.to(param_1_1, param_2_1, param_3);
  };
  _0xf0e391.useEffect(() => {
    if (!_0x25addb || !_0x19251f) {
      return;
    }
    if (autoJoin) {
      varData_24();
    }
    return () => {
      if (!varData_22.current) {
        return;
      }
      varData_26();
    };
  }, [_0x25addb, _0x19251f, param_1, token, autoJoin]);
  _0xf0e391.useEffect(() => {
    const varData_29 = varData_22.current;
    if (!varData_29) {
      return;
    }
    const varData_30 = (param_1_1, param_2_1) => {
      if (varData_23.current) {
        _0x35158b(new Set(param_2_1));
      }
      _0x39e7e3?.(param_1_1, param_2_1);
    };
    const varData_31 = (param_1_1, param_2_1) => {
      if (varData_23.current) {
        _0x35158b(param_1_2 => new Set(param_1_2).add(param_1_1));
      }
      _0x36abbb?.(param_1_1, param_2_1);
    };
    const varData_32 = param_1_1 => {
      if (varData_23.current) {
        _0x35158b(param_1_2 => {
          const dataSet = new Set(param_1_2);
          dataSet.delete(param_1_1);
          return dataSet;
        });
      }
      _0xa1c470?.(param_1_1);
    };
    varData_29.on("subscriberList", varData_30);
    varData_29.on("addedSubscriber", varData_31);
    varData_29.on("removedSubscriber", varData_32);
    return () => {
      varData_29.off("subscriberList", varData_30);
      varData_29.off("addedSubscriber", varData_31);
      varData_29.off("removedSubscriber", varData_32);
    };
  }, [varData_22.current, _0x39e7e3, _0x36abbb, _0xa1c470]);
  _0xf0e391.useEffect(() => {
    return () => {
      varData_23.current = false;
    };
  }, []);
  return {
    channel: varData_22.current,
    isJoined: _0xe4f1bc,
    subscribers: _0x26d57a,
    join: varData_24,
    leave: varData_26,
    broadcast: varData_27,
    sendTo: varData_28
  };
}
function useChannelEvent(param_1, param_2, param_3) {
  const varData_33 = _0xf0e391.useRef(param_3);
  _0xf0e391.useEffect(() => {
    varData_33.current = param_3;
  }, [param_3]);
  _0xf0e391.useEffect(() => {
    if (!param_1) {
      return;
    }
    const varData_34 = (param_1_1, param_2_1) => {
      varData_33.current(param_1_1, param_2_1);
    };
    param_1.on(param_2, varData_34);
    return () => {
      param_1.off(param_2, varData_34);
    };
  }, [param_1, param_2]);
}
function useChannelEvents(param_1, param_2) {
  const varData_35 = _0xf0e391.useRef(param_2);
  _0xf0e391.useEffect(() => {
    varData_35.current = param_2;
  }, [param_2]);
  _0xf0e391.useEffect(() => {
    if (!param_1) {
      return;
    }
    const dataMap = /* @__PURE__ */new Map();
    Object.entries(varData_35.current).forEach(([_0x19d90a, _0x7965b4]) => {
      const varData_36 = (param_1_1, param_2_1) => {
        varData_35.current[_0x19d90a]?.(param_1_1, param_2_1);
      };
      dataMap.set(_0x19d90a, varData_36);
      param_1.on(_0x19d90a, varData_36);
    });
    return () => {
      dataMap.forEach((param_1_1, param_2_1) => param_1.off(param_2_1, param_1_1));
    };
  }, [param_1, Object.keys(varData_35.current).join(",")]);
}
const container$2 = "_container_vtshg_1";
const header$1 = "_header_vtshg_10";
const left = "_left_vtshg_19";
const back_cta = "_back_cta_vtshg_23";
const avatar$1 = "_avatar_vtshg_31";
const online_indicator = "_online_indicator_vtshg_43";
const fadeIn = "_fadeIn_vtshg_1";
const title = "_title_vtshg_55";
const main_content = "_main_content_vtshg_62";
const cta_group = "_cta_group_vtshg_68";
const cta_action = "_cta_action_vtshg_73";
const messages_container = "_messages_container_vtshg_107";
const message_input_container = "_message_input_container_vtshg_116";
const send_cta = "_send_cta_vtshg_126";
const send_cta_icon = "_send_cta_icon_vtshg_136";
const sending_icon = "_sending_icon_vtshg_141";
const spinning = "_spinning_vtshg_1";
const input_actions = "_input_actions_vtshg_145";
const input_icon = "_input_icon_vtshg_150";
const end_of_messages = "_end_of_messages_vtshg_177";
const image_preview_container = "_image_preview_container_vtshg_187";
const image_preview = "_image_preview_vtshg_187";
const remove_image_btn = "_remove_image_btn_vtshg_202";
const empty_container$1 = "_empty_container_vtshg_241";
const empty_icon = "_empty_icon_vtshg_256";
const typing_indicator = "_typing_indicator_vtshg_260";
const dot = "_dot_vtshg_273";
const bounce = "_bounce_vtshg_1";
const actions_container = "_actions_container_vtshg_308";
const action_btn = "_action_btn_vtshg_318";
const payment_container = "_payment_container_vtshg_336";
const input = "_input_vtshg_145";
const payment_btns = "_payment_btns_vtshg_352";
const payment_btn = "_payment_btn_vtshg_352";
const request_btn = "_request_btn_vtshg_372";
const styles$2 = {
  container: container$2,
  header: header$1,
  left,
  back_cta,
  avatar: avatar$1,
  online_indicator,
  fadeIn,
  title,
  main_content,
  cta_group,
  cta_action,
  messages_container,
  message_input_container,
  send_cta,
  send_cta_icon,
  "plane-appear": "_plane-appear_vtshg_1",
  sending_icon,
  spinning,
  input_actions,
  input_icon,
  "icon-appear": "_icon-appear_vtshg_1",
  end_of_messages,
  image_preview_container,
  image_preview,
  remove_image_btn,
  empty_container: empty_container$1,
  empty_icon,
  typing_indicator,
  dot,
  bounce,
  actions_container,
  action_btn,
  payment_container,
  input,
  payment_btns,
  payment_btn,
  request_btn
};
const MESSAGES_PER_PAGE = 20;
const MessagesView = param_1 => {
  const {
    state: _0x3b48f9,
    setState: _0x1cd01b
  } = _0x457e2b();
  const {
    state: _0x4305c7,
    setState: _0x1c0bf3
  } = _0x16a3c1();
  const {
    socket: _0xb1bf9b,
    token: _0x1b39b8
  } = _0x21d366();
  const [_0x157ca7, _0x481ff4] = _0x178570.useState(0);
  const [_0x150eb5, _0x162bf3] = _0x178570.useState("");
  const [_0x13d59e, _0x4bc352] = _0x178570.useState(true);
  const [_0xb3e9c2, _0x2dd000] = _0x178570.useState([]);
  const [_0x27860a, _0x3821c6] = _0x178570.useState(false);
  const [_0x304d7b, _0x1538fd] = _0x178570.useState(0);
  const [_0x1931d9, _0x2ee71f] = _0x178570.useState(false);
  const [_0x1a234b, _0x18779a] = _0x178570.useState(0);
  const [_0x3631c5, _0x514162] = _0x178570.useState(false);
  const [_0x46f068, _0x2b3751] = _0x178570.useState(false);
  const [_0x41f2b9, _0x9de938] = _0x178570.useState(false);
  const [_0x14ed9f, _0x4c088d] = _0x178570.useState(false);
  const [_0x19ef4e, _0x4aa155] = _0x178570.useState(null);
  const [_0x92df45, _0x4aac0c] = _0x178570.useState(false);
  const varData_37 = _0x178570.useRef(_0x157ca7);
  const varData_38 = _0x178570.useRef(_0x13d59e);
  const varData_39 = _0x178570.useRef(null);
  const varData_40 = _0x178570.useRef(null);
  const varData_41 = _0x178570.useRef(_0x41f2b9);
  const varData_42 = _0x178570.useRef(/* @__PURE__ */new Set());
  const varData_43 = _0x178570.useMemo(() => {
    const varData_44 = _0xc6e904(param_1.conversationNumber);
    return varData_44;
  }, [param_1.conversationNumber, _0x4305c7.contacts]);
  const varData_45 = async param_1_1 => {
    const {
      message: _0x3a3f3b,
      images: _0x1a2517
    } = _0x129971(param_1_1);
    const varData_46 = _0x1a2517.filter(param_1_2 => !varData_42.current.has(param_1_2));
    if (varData_46.length > 0) {
      _0x2dd000(param_1_2 => [...param_1_2, ...varData_46]);
      varData_46.forEach(param_1_2 => varData_42.current.add(param_1_2));
    }
    if (!_0x14ed9f) {
      handleAction_11();
    }
    _0x4c088d(true);
    _0x18779a(Date.now());
    _0x162bf3(_0x3a3f3b);
  };
  const varData_47 = param_1_1 => {
    const varData_48 = _0xb3e9c2[param_1_1];
    _0x2dd000(param_1_2 => param_1_2.filter((param_1_3, param_2) => param_2 !== param_1_1));
    varData_42.current.delete(varData_48);
  };
  async function handleAction_1() {
    const varData_49 = (_0x150eb5.trim() + " " + _0xb3e9c2.map(param_1_1 => param_1_1).join(" ")).trim();
    if (varData_49.length <= 0) {
      return;
    }
    _0x514162(true);
    try {
      const [_0x2d49f5, _0x3e08aa] = await _0x570751("text", param_1.conversationNumber, varData_49);
      if (!_0x2d49f5) {
        return _0x37c726({
          appName: "messages",
          text: _0x3e08aa,
          title: "Messages",
          timeout: 5000
        });
      }
      await handleAction_3();
      for (const varData_50 of _0xb3e9c2) {
        await _0x547ce3(varData_50, "recent");
      }
      _0x162bf3("");
      _0x2dd000([]);
      varData_42.current.clear();
      setTimeout(() => {
        varData_39.current?.focus();
      }, 0);
    } finally {
      _0x514162(false);
    }
  }
  function handleAction_2(param_1_1) {
    if (!varData_39 || !varData_39.current) {
      return;
    }
    if (param_1_1.key === "Enter" && !param_1_1.shiftKey) {
      param_1_1.preventDefault();
      if (_0x150eb5.trim() === "" && _0xb3e9c2.length === 0) {
        return;
      }
      handleAction_1();
      varData_39.current.style.height = "auto";
    }
  }
  async function handleAction_3(_0x2c3cb0 = 0, _0xf4d7f = false) {
    if (_0x41f2b9) {
      return;
    }
    _0x9de938(true);
    try {
      _0x1cd01b(param_1_1 => {
        param_1_1.unreadConversations = param_1_1.unreadConversations.filter(param_1_2 => param_1_2 !== param_1.conversationNumber);
      });
      const varData_51 = {
        target_number: param_1.conversationNumber,
        offset: _0x2c3cb0,
        limit: MESSAGES_PER_PAGE + 1
      };
      const varData_52 = await _0x13a889(varData_51);
      if (varData_52.length > MESSAGES_PER_PAGE) {
        _0x4bc352(true);
        varData_52.pop();
      } else {
        _0x4bc352(false);
      }
      if (_0xf4d7f) {
        _0x1cd01b(param_1_1 => {
          param_1_1.messages = [...param_1_1.messages, ...varData_52];
        });
      } else {
        _0x1cd01b("messages", varData_52);
      }
    } finally {
      _0x9de938(false);
    }
  }
  function handleAction_4() {
    if (!varData_38.current || varData_41.current) {
      return;
    }
    if (varData_40.current && typeof window !== "undefined") {
      const varData_53 = varData_40.current;
      const varData_54 = Math.abs(varData_53.scrollTop) / (varData_53.scrollHeight - varData_53.clientHeight) * 100;
      if (varData_54 > 70) {
        const varData_55 = varData_37.current + MESSAGES_PER_PAGE;
        _0x481ff4(varData_55);
      }
    }
  }
  function handleAction_5() {
    _0x2d02ed(param_1.conversationNumber).then(param_1_1 => {
      if (!param_1_1) {
        return;
      }
      _0x1c0bf3("contacts", [..._0x4305c7.contacts, param_1_1]);
    });
  }
  function handleAction_6() {
    const varData_56 = varData_43;
    if (!varData_56) {
      return;
    }
    _0x414c63(varData_56).then(param_1_1 => {
      if (!param_1_1) {
        return;
      }
      _0x1c0bf3(param_1_2 => {
        const varData_57 = [...param_1_2.contacts.filter(param_1_3 => param_1_3.id !== param_1_1.id), {
          ...param_1_1
        }];
        param_1_2.contacts = varData_57;
      });
    });
  }
  async function handleAction_7() {
    _0x18f12d({
      description: "Are you sure you want to share your current location?",
      onConfirm: async () => {
        _0x514162(true);
        try {
          const varData_58 = await _0x3624b9("np-ui:getPlayerLocation");
          if (!varData_58.meta.ok) {
            _0x37c726({
              timeout: 3000,
              title: "Messages",
              appName: "messages",
              text: "Failed to get your location, try again!"
            });
            return;
          }
          const [_0x304f36, _0x202c6a] = await _0x570751("location", param_1.conversationNumber, {
            ...varData_58.data
          });
          if (!_0x304f36) {
            return _0x37c726({
              timeout: 3000,
              title: "Messages",
              appName: "messages",
              text: _0x202c6a
            });
          }
          await handleAction_3();
        } finally {
          _0x514162(false);
        }
      }
    });
  }
  async function handleAction_8() {
    if (_0x27860a) {
      return;
    }
    if (_0x304d7b <= 0) {
      return;
    }
    const varData_59 = _0x8619c8();
    if (!varData_59) {
      return;
    }
    _0x3821c6(true);
    try {
      const varData_60 = await _0x3624b9("phone:ui:payments:send", {
        receiverNumber: param_1.conversationNumber,
        senderNumber: varData_59,
        amount: _0x304d7b,
        type: "send"
      });
      if (!varData_60.meta.ok) {
        return _0x37c726({
          timeout: 3000,
          title: "Messages",
          appName: "messages",
          text: varData_60.meta.message
        });
      }
      const [_0x4bdf98, _0x2f0c28] = await _0x570751("payment", param_1.conversationNumber, {
        paymentId: varData_60.data.paymentId,
        amount: _0x304d7b,
        senderNumber: varData_59,
        type: "send"
      });
      if (_0x2f0c28) {
        return _0x37c726({
          timeout: 3000,
          title: "Messages",
          appName: "messages",
          text: _0x2f0c28
        });
      }
      await handleAction_3();
      _0x2b3751(false);
      _0x1538fd(0);
    } finally {
      _0x3821c6(false);
    }
  }
  function handleAction_9() {
    _0x364b0a({
      onSelect: param_1_1 => {
        _0x2dd000(param_1_2 => [...param_1_2, ...param_1_1]);
      }
    });
  }
  function handleAction_10() {
    _0x3912c7({
      onSelect: param_1_1 => {
        _0x2dd000(param_1_2 => [...param_1_2, param_1_1]);
      }
    });
  }
  function handleAction_11() {
    if (!_0x19ef4e) {
      return;
    }
    const varData_61 = _0x5d603a();
    if (!varData_61) {
      return;
    }
    _0x19ef4e.broadcast("typing", {
      from: varData_61.areaCode + varData_61.number,
      to: param_1.conversationNumber,
      typing: true
    });
    _0x4c088d(true);
  }
  function handleAction_12(param_1_1) {
    const varData_62 = _0x8619c8();
    if (!varData_62) {
      return;
    }
    param_1_1.broadcast("typing", {
      typing: false,
      from: varData_62,
      to: param_1.conversationNumber
    });
  }
  function handleAction_13(param_1_1) {
    const varData_63 = _0x8619c8();
    if (!varData_63) {
      return;
    }
    param_1_1.broadcast("joined-chat", varData_63);
    param_1_1.broadcast("request-presence", varData_63);
  }
  function handleAction_14(param_1_1) {
    const varData_64 = _0x8619c8();
    if (!varData_64) {
      return;
    }
    param_1_1.broadcast("left-chat", varData_64);
  }
  _0x178570.useEffect(() => {
    _0x481ff4(0);
    _0x4bc352(true);
    handleAction_3(0, false);
    _0x1cd01b("activeConversationNumber", param_1.conversationNumber);
    if (!_0xb1bf9b || !_0x1b39b8) {
      return;
    }
    const varData_65 = _0x8619c8();
    if (!varData_65) {
      return;
    }
    const varData_66 = param_1.conversationNumber;
    const varData_67 = [varData_65, varData_66].sort().join(":");
    const varData_68 = _0xb1bf9b.join("service:phone:chat-" + varData_67, _0x1b39b8);
    if (!varData_68) {
      return;
    }
    _0x4aa155(varData_68);
    handleAction_13(varData_68);
    varData_68.on("presence-status", (param_1_1, param_2) => {
      if (param_2.number !== param_1.conversationNumber) {
        return;
      }
      _0x4aac0c(param_2.inChat);
    });
    varData_68.on("request-presence", (param_1_1, param_2) => {
      const varData_69 = _0x8619c8();
      if (!varData_69) {
        return;
      }
      if (param_2 === varData_69) {
        return;
      }
      varData_68.broadcast("presence-status", {
        number: varData_69,
        inChat: true
      });
    });
    varData_68.on("typing", (param_1_1, param_2) => {
      const varData_70 = _0x8619c8();
      if (param_2.to !== varData_70) {
        return;
      }
      if (param_2.from !== param_1.conversationNumber) {
        return;
      }
      _0x2ee71f(param_2.typing);
    });
    varData_68.on("joined-chat", (param_1_1, param_2) => {
      if (param_2 !== param_1.conversationNumber) {
        return;
      }
      _0x4aac0c(true);
    });
    varData_68.on("left-chat", (param_1_1, param_2) => {
      if (param_2 !== param_1.conversationNumber) {
        return;
      }
      _0x2ee71f(false);
      _0x4aac0c(false);
    });
    return () => {
      _0x1cd01b("activeConversationNumber", null);
      if (varData_68) {
        handleAction_14(varData_68);
        _0x4aa155(null);
        varData_68.disconnect();
      }
    };
  }, [_0xb1bf9b, _0x1b39b8]);
  _0x178570.useEffect(() => {
    if (_0x157ca7 === 0 || _0x41f2b9) {
      return;
    }
    handleAction_3(_0x157ca7, true);
  }, [_0x157ca7]);
  _0x178570.useEffect(() => {
    varData_38.current = _0x13d59e;
  }, [_0x13d59e]);
  _0x178570.useEffect(() => {
    varData_37.current = _0x157ca7;
  }, [_0x157ca7]);
  _0x178570.useEffect(() => {
    varData_41.current = _0x41f2b9;
  }, [_0x41f2b9]);
  _0x178570.useEffect(() => {
    if (!_0x14ed9f) {
      return;
    }
    const timerId = setTimeout(() => {
      const varData_71 = Date.now() - _0x1a234b;
      if (varData_71 < 2000) {
        return;
      }
      _0x4c088d(false);
      if (_0x19ef4e) {
        handleAction_12(_0x19ef4e);
      }
    }, 2000);
    return () => clearTimeout(timerId);
  }, [_0x1a234b, _0x14ed9f, _0x19ef4e, param_1.conversationNumber]);
  _0x178570.useEffect(() => {
    const varData_72 = _0x357d66(handleAction_4, 200);
    varData_40.current?.addEventListener("scroll", varData_72);
    return () => {
      varData_40.current?.removeEventListener("scroll", varData_72);
    };
  }, []);
  _0x178570.useEffect(() => {
    const varData_73 = varData_39.current;
    if (!varData_73) {
      return;
    }
    varData_73.style.height = "auto";
    varData_73.style.height = varData_73.scrollHeight + "px";
  }, [_0x150eb5, _0xb3e9c2]);
  return <div className={styles$2.container}><div className={styles$2.header}><div className={styles$2.left}><_0x10b18a className={styles$2.back_cta} icon={_0x95b341} onClick={() => _0x1cd01b("view", "overview")} /><div className={styles$2.avatar}><_0x7c70e2 contact={varData_43} /><_0x397763 when={_0x92df45}><span className={styles$2.online_indicator} /></_0x397763></div><div className={styles$2.main_content}><h1 className={styles$2.title}>{varData_43 ? varData_43.name : _0x5a7922(param_1.conversationNumber)}</h1></div></div><div className={styles$2.cta_group}><_0x397763 when={!varData_43}><_0x4a071b title="Add to Contacts" placement="top"><button className={styles$2.cta_action} onClick={handleAction_5}><_0x10b18a icon={_0x5847b3} /></button></_0x4a071b></_0x397763><_0x397763 when={varData_43}><_0x4a071b title="Edit Contact" placement="top"><button className={styles$2.cta_action} onClick={handleAction_6}><_0x10b18a icon={_0x53d0a1} /></button></_0x4a071b></_0x397763><_0x4a071b title="Start Call" placement="top"><button className={styles$2.cta_action} onClick={() => _0x41f7b7({
            number: param_1.conversationNumber
          })}><_0x10b18a icon={_0x74f27d} /></button></_0x4a071b></div></div><ul className={_0x55e743(styles$2.messages_container)} ref={varData_40}><_0x397763 when={!_0x41f2b9 && _0x3b48f9.messages.length === 0}><div className={styles$2.empty_container}><div className={styles$2.empty_text}>No messages yet. Say hello!</div></div></_0x397763><_0x397763 when={_0x41f2b9 && _0x3b48f9.messages.length === 0}><MessagesLoadingContainer bubbles={10} /></_0x397763><_0x397763 when={_0x1931d9}><_0x153d16 mode="popLayout"><_0x16a512.div className={styles$2.typing_indicator} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: 20
          }} transition={{
            duration: 0.3,
            ease: "easeOut"
          }}><span className={styles$2.dot} /><span className={styles$2.dot} /><span className={styles$2.dot} /></_0x16a512.div></_0x153d16></_0x397763><_0x397763 when={_0x3b48f9.messages.length > 0}><_0x5d7d33 each={_0x3b48f9.messages}>{(param_1_1, param_2) => {
            const varData_74 = param_2 >= MESSAGES_PER_PAGE * 2 ? (param_2 - MESSAGES_PER_PAGE * (_0x157ca7 - 1)) / 15 : param_2 / 15;
            return <MessageItem animDelay={varData_74} text={param_1_1.message} timestamp={param_1_1.timestamp} self={String(param_1_1.number_from) !== String(param_1.conversationNumber)} key={param_2} />;
          }}</_0x5d7d33><_0x397763 when={!_0x13d59e}><div className={styles$2.end_of_messages}>End of Conversation</div></_0x397763></_0x397763></ul><div className={styles$2.image_preview_container}><_0x5d7d33 each={_0xb3e9c2}>{(param_1_1, param_2) => <PreviewImage img={param_1_1} onRemove={() => varData_47(param_2)} />}</_0x5d7d33></div><div className={styles$2.input_wrapper}><div className={styles$2.message_input_container}><textarea ref={varData_39} className={styles$2.message_input} placeholder="Type a message..." value={_0x150eb5} onChange={param_1_1 => varData_45(param_1_1.target.value)} onKeyDown={handleAction_2} rows={1} disabled={_0x3631c5} /><div className={styles$2.input_actions}><_0x397763 when={_0x150eb5.length > 0 || _0xb3e9c2.length > 0}><button className={styles$2.send_cta} onClick={handleAction_1} disabled={_0x3631c5}><_0x397763 when={_0x3631c5}><_0x10b18a icon={_0x1228c8} className={styles$2.sending_icon} /></_0x397763><_0x397763 when={!_0x3631c5}><_0x10b18a icon={_0x30f40f} className={styles$2.send_cta_icon} /></_0x397763></button></_0x397763></div></div><_0x397763 when={_0x46f068}><_0x16a512.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.2,
          ease: "easeOut"
        }} className={styles$2.payment_container}><input className={styles$2.input} placeholder="Enter amount.." type="number" value={_0x304d7b} onChange={param_1_1 => _0x1538fd(Number(param_1_1.target.value))} /><div className={styles$2.payment_btns}><button className={styles$2.payment_btn} onClick={handleAction_8} disabled={_0x27860a}>{_0x27860a ? "Sending..." : "Send"}</button></div></_0x16a512.div></_0x397763><div className={styles$2.actions_container}><_0x4a071b title="Attach Image" placement="bottom"><button className={styles$2.action_btn} onClick={handleAction_9}><_0x10b18a icon={_0x5b9153} className={styles$2.input_icon} /></button></_0x4a071b><_0x4a071b title="Send Gif" placement="bottom"><button className={styles$2.action_btn} onClick={handleAction_10}><_0x10b18a icon={_0x25851b} className={styles$2.icon} /></button></_0x4a071b><_0x4a071b title="Insert Emoji" placement="bottom"><button className={styles$2.action_btn} onClick={() => {
            _0x33e7f2({
              onSelect: param_1_1 => {
                _0x162bf3(param_1_2 => param_1_2 + param_1_1);
              }
            });
          }}><_0x10b18a icon={_0x53cd4a} className={styles$2.icon} /></button></_0x4a071b><_0x4a071b title="Send Payment" placement="bottom"><button className={styles$2.action_btn} onClick={() => _0x2b3751(param_1_1 => !param_1_1)}><_0x10b18a icon={_0x1f5b4d} className={styles$2.icon} /></button></_0x4a071b><_0x4a071b title="Send Location" placement="bottom"><button className={styles$2.action_btn} onClick={handleAction_7}><_0x10b18a icon={_0x4dc40f} className={styles$2.icon} /></button></_0x4a071b></div></div></div>;
};
const PreviewImage = param_1 => {
  return <div className={styles$2.image_preview}><img src={param_1.img} className={styles$2.image} /><button className={styles$2.remove_image_btn} onClick={param_1.onRemove}>×</button></div>;
};
const container$1 = "_container_ly16a_1";
const avatar = "_avatar_ly16a_17";
const details = "_details_ly16a_28";
const header = "_header_ly16a_35";
const name = "_name_ly16a_42";
const time = "_time_ly16a_55";
const message_container = "_message_container_ly16a_64";
const message = "_message_ly16a_64";
const unread_dot = "_unread_dot_ly16a_86";
const pulse = "_pulse_ly16a_1";
const unread_message = "_unread_message_ly16a_96";
const styles$1 = {
  container: container$1,
  avatar,
  details,
  header,
  name,
  time,
  message_container,
  message,
  unread_dot,
  pulse,
  unread_message
};
const PreviewItem = param_1 => {
  const {
    setState: _0x38a501
  } = _0x457e2b();
  function handleAction_15(param_1_1) {
    const timestamp_1 = Date.now();
    const varData_75 = Math.max(0, timestamp_1 - param_1_1);
    const varData_76 = Math.floor(varData_75 / 1000);
    const varData_77 = Math.floor(varData_76 / 60);
    const varData_78 = Math.floor(varData_77 / 60);
    const varData_79 = Math.floor(varData_78 / 24);
    const varData_80 = Math.floor(varData_79 / 7);
    const varData_81 = Math.floor(varData_79 / 30);
    const varData_82 = Math.floor(varData_79 / 365);
    if (varData_76 < 60) {
      return varData_76 + "s";
    }
    if (varData_77 < 60) {
      return varData_77 + "m";
    }
    if (varData_78 < 24) {
      return varData_78 + "h";
    }
    if (varData_79 < 7) {
      return varData_79 + "d";
    }
    if (varData_80 < 5) {
      return varData_80 + "w";
    }
    if (varData_81 < 12) {
      return varData_81 + "mo";
    }
    return varData_82 + "y";
  }
  const varData_83 = _0x178570.useCallback(() => {
    _0x38a501(param_1_1 => {
      param_1_1.view = "conversation";
      param_1_1.previewedConversations = [];
      param_1_1.activeConversationNumber = param_1.info.number;
    });
  }, [param_1.info.number]);
  const varData_84 = _0xf0e391.useMemo(() => {
    const varData_85 = _0xc6e904(param_1.info.number);
    return varData_85;
  }, [param_1.info.number]);
  return <div className={_0x55e743(styles$1.container, {
    [styles$1.unread_message]: param_1.unread
  })} onClick={varData_83}><div className={styles$1.avatar}><_0x7c70e2 contact={varData_84} /></div><div className={styles$1.details}><div className={styles$1.header}><h1 className={styles$1.name}>{varData_84?.name ?? _0x5a7922(param_1.info.number)}</h1><span className={styles$1.time}>{handleAction_15(param_1.info.timestamp * 1000)}</span></div><p className={styles$1.message_container}><span className={styles$1.message}>{_0x57a0d1(param_1.info.message)}</span></p></div><_0x397763 when={param_1.unread}><div className={styles$1.unread_dot} /></_0x397763></div>;
};
const container = "_container_jpmws_1";
const message_list = "_message_list_jpmws_8";
const view_filters = "_view_filters_jpmws_17";
const filter_cta = "_filter_cta_jpmws_26";
const active_cta = "_active_cta_jpmws_38";
const empty_container = "_empty_container_jpmws_42";
const styles = {
  container,
  message_list,
  view_filters,
  filter_cta,
  active_cta,
  empty_container
};
const CONVERSATIONS_PER_PAGE = 20;
const PreviewView = () => {
  const {
    state: _0x5d3986,
    setState: _0x534251
  } = _0x457e2b();
  const [_0x2876d8, _0x5bddec] = _0x178570.useState(0);
  const [_0x2f6c3d, _0x3fdce4] = _0x178570.useState("");
  const [_0x27d4cd, _0x5589c5] = _0x178570.useState(false);
  const [_0x4eb8b0, _0x308f6d] = _0x178570.useState(true);
  const varData_86 = _0x178570.useRef(0);
  const varData_87 = _0x178570.useRef(null);
  const [_0xbe489a, _0x402528] = _0x178570.useState("all");
  async function handleAction_16(_0x54fc35 = 0, _0x56aae4 = 20) {
    const varData_88 = _0x8619c8();
    if (!varData_88) {
      return [];
    }
    const varData_89 = await _0x3624b9("phone/getConversations", {
      phoneNumber: varData_88,
      offset: _0x54fc35,
      limit: _0x56aae4
    }, {
      returnData: _0x4c920b.getConversations(),
      extApi: true
    });
    return varData_89.data;
  }
  async function handleAction_17(_0xd440ba = false) {
    if (_0x27d4cd || !_0x4eb8b0) {
      return;
    }
    _0x5589c5(true);
    if (varData_87.current) {
      varData_86.current = varData_87.current.scrollTop;
    }
    const varData_90 = _0x8619c8();
    if (!varData_90) {
      _0x5589c5(false);
      return;
    }
    const varData_91 = _0x2876d8 + (_0xd440ba ? 0 : CONVERSATIONS_PER_PAGE);
    const varData_92 = await handleAction_16(varData_91, CONVERSATIONS_PER_PAGE);
    if (varData_92.length < CONVERSATIONS_PER_PAGE) {
      _0x308f6d(false);
    }
    if (varData_92.length > 0) {
      const varData_93 = _0x4d8b28(varData_90, varData_92);
      _0x534251(param_1 => {
        const dataSet = new Set(param_1.previewedConversations.map(param_1_1 => param_1_1.number));
        for (const varData_94 of varData_93) {
          if (!dataSet.has(varData_94.number)) {
            param_1.previewedConversations.push(varData_94);
            dataSet.add(varData_94.number);
          }
        }
      });
      _0x5bddec(varData_91);
      setTimeout(() => {
        if (varData_87.current) {
          varData_87.current.scrollTop = varData_86.current;
        }
      }, 0);
    }
    _0x5589c5(false);
  }
  function handleAction_18(param_1) {
    const varData_95 = param_1.currentTarget;
    const varData_96 = varData_95.scrollHeight;
    const varData_97 = varData_95.clientHeight;
    const varData_98 = varData_95.scrollTop;
    const varData_99 = varData_96 - varData_98 - varData_97;
    const varData_100 = 100;
    if (varData_99 <= varData_100 && _0x4eb8b0 && !_0x27d4cd) {
      handleAction_17();
    }
  }
  const varData_101 = _0x178570.useMemo(() => {
    const varData_102 = _0x2f6c3d.toLowerCase();
    return _0x5d3986.previewedConversations.filter(param_1 => {
      if (_0xbe489a === "favorites" && !_0x1ab6e7(param_1.number)) {
        return false;
      }
      const {
        hasName: _0x22c1ac,
        name: _0x210d28
      } = _0x586349(param_1.number);
      if (_0x22c1ac) {
        return _0x210d28.toLowerCase().includes(varData_102);
      }
      return String(param_1.number).includes(varData_102);
    });
  }, [_0x5d3986.view, _0x5d3986.previewedConversations, _0x2f6c3d, _0xbe489a]);
  _0x178570.useEffect(() => {
    handleAction_17(true);
  }, []);
  return <div className={styles.container}><_0x21010e title="Conversations" description="View your messages" ctaAction={{
      icon: _0x8df620,
      tooltip: "New Message",
      onClick: () => _0x27698a()
    }} /><_0x3046c0 value={_0x2f6c3d} onChange={param_1 => _0x3fdce4(param_1)} /><div className={styles.view_filters}><button onClick={() => _0x402528("all")} className={_0x55e743(styles.filter_cta, {
        [styles.active_cta]: _0xbe489a === "all"
      })}>All</button><button onClick={() => _0x402528("favorites")} className={_0x55e743(styles.filter_cta, {
        [styles.active_cta]: _0xbe489a === "favorites"
      })}>Favorited</button></div><ul className={styles.message_list} ref={varData_87} onScroll={handleAction_18}>{varData_101.map((param_1, param_2) => <PreviewItem info={param_1} unread={_0x5d3986.unreadConversations.includes(param_1.number)} index={param_2} key={param_2} />)}<_0x397763 when={varData_101.length <= 0}><div className={styles.empty_container}><div className={styles.empty_text}>No conversations found</div></div></_0x397763></ul></div>;
};
const AppContainer = () => {
  const {
    state: _0x2431a8,
    reset: _0x154c4e
  } = _0x457e2b();
  _0xf0e391.useEffect(() => {
    return () => _0x154c4e();
  }, []);
  return <div className={styles$5.container}><_0x397763 when={_0x2431a8.view === "overview"}><PreviewView /></_0x397763><_0x397763 when={_0x2431a8.view === "conversation" && _0x2431a8.activeConversationNumber !== null}><MessagesView conversationNumber={_0x2431a8.activeConversationNumber} /></_0x397763></div>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/messages.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Messages",
    name: "messages",
    position: 2,
    render: () => <AppContainer />,
    favourite: true
  };
};
export { config as default };