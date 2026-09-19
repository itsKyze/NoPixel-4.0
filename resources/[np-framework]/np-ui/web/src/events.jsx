import { j as _0x136d32 } from "./vendor.jsx";
import { n as _0x2768b2, s as _0x4024ee, y as _0x7bc438, A as _0x435130, q as _0xc2290d } from "./ui_core.js";
import { D as _0x23681c } from "./duration-timer.jsx";
import { C as _0x557432 } from "./_config_phone.jsx";
import { c as _0x2a8164 } from "./lib.js";
let callMetaB = {};
let NOTIFICATION_ID = 0;
const getId = (_0x51b45f = false) => {
  if (_0x51b45f) {
    NOTIFICATION_ID += 1;
  }
  return "CALLS_" + NOTIFICATION_ID;
};
const activeCallState = (param_1, param_2, _0x51ea9a = {}) => {
  callMetaB = _0x51ea9a;
  return {
    ...param_1,
    phone: {
      ...param_1.phone,
      callActive: param_2,
      callMeta: _0x51ea9a
    }
  };
};
const inCall = param_1 => {
  return param_1.phone.callActive;
};
const onReject = (param_1, _0x5d7b4a = true) => () => {
  _0x2768b2("np-ui:callEnd", {
    character: param_1.character,
    meta: callMetaB
  });
  if (_0x5d7b4a) {
    const varData_1 = param_1_1 => activeCallState(param_1_1, false);
    _0x4024ee.dispatch({
      cb: varData_1,
      type: "np-ui-action"
    });
  }
};
const callReceiving = ({
  data: _0x1f1fc1,
  state: _0x3808d5
}) => {
  if (inCall(_0x3808d5)) {
    return _0x3808d5;
  }
  const varData_2 = _0x7bc438(_0x1f1fc1.number);
  _0x435130({
    appName: "call-history",
    id: getId(true),
    onAccept: () => {
      _0x2768b2("np-ui:callAccept", {
        character: _0x3808d5.character,
        meta: callMetaB
      });
    },
    onAcceptOptions: {
      onAccept: null,
      onReject: null,
      dismiss: false,
      blockDismissOnClick: true,
      id: getId(),
      title: "Connecting...",
      timeout: -1
    },
    onAcceptText: "Answer",
    onReject: onReject(_0x3808d5),
    onRejectText: "Hang Up",
    state: _0x3808d5,
    text: _0x2a8164(_0x1f1fc1.number, _0x3808d5).name,
    title: "Incoming Call",
    timeout: -1,
    type: "call",
    iconOverride: varData_2 ? <_0x557432 contact={varData_2} /> : undefined
  });
  return activeCallState(_0x3808d5, true, _0x1f1fc1);
};
const callDialing = ({
  data: _0x455d9d,
  state: _0xa49e0
}) => {
  const varData_3 = _0x7bc438(_0x455d9d.number);
  _0x435130({
    appName: "call-history",
    id: getId(!inCall(_0xa49e0)),
    onReject: onReject(_0xa49e0),
    onRejectText: "Hang Up",
    state: _0xa49e0,
    text: _0x2a8164(_0x455d9d.number, _0xa49e0).name,
    title: "Dialing...",
    timeout: -1,
    iconOverride: varData_3 ? <_0x557432 contact={varData_3} /> : undefined
  });
  return activeCallState(_0xa49e0, true, _0x455d9d);
};
const callStart = ({
  number: _0x247933
}) => {
  const varData_4 = param_1 => {
    if (inCall(param_1)) {
      return param_1;
    }
    const varData_5 = "np-ui:callStart";
    const varData_6 = _0xc2290d();
    setTimeout(() => _0x2768b2(varData_5, {
      simcard: varData_6?.id ?? null,
      number: _0x247933.toString()
    }), 0);
    const varData_7 = _0x7bc438(_0x247933);
    _0x435130({
      appName: "call-history",
      id: getId(true),
      onReject: onReject(param_1),
      onRejectText: "Hang Up",
      state: param_1,
      text: _0x2a8164(_0x247933, param_1).name,
      title: "Connecting...",
      timeout: -1,
      iconOverride: varData_7 ? <_0x557432 contact={varData_7} /> : undefined
    });
    return activeCallState(param_1, true);
  };
  _0x4024ee.dispatch({
    cb: varData_4,
    type: "np-ui-action"
  });
};
const callActive = ({
  data: _0x42bf68,
  state: _0x18ac74
}) => {
  const varData_8 = _0x7bc438(_0x42bf68.number);
  _0x435130({
    id: getId(),
    onReject: onReject(_0x18ac74, false),
    onRejectOptions: {
      onReject: null,
      dismiss: false,
      blockDismissOnClick: true,
      id: getId(),
      text: "Disconnecting...",
      timeout: -1
    },
    onRejectText: "Hang Up",
    state: _0x18ac74,
    appName: "call-history",
    text: _0x2a8164(_0x42bf68.number, _0x18ac74).name,
    title: <_0x23681c />,
    timeout: -1,
    type: "call",
    minimize: true,
    iconOverride: varData_8 ? <_0x557432 contact={varData_8} /> : undefined
  });
  return activeCallState(_0x18ac74, true, _0x42bf68);
};
const callInactive = ({
  data: _0x544caf,
  state: _0x11f959
}) => {
  const varData_9 = _0x7bc438(_0x544caf.number);
  _0x435130({
    id: getId(),
    state: _0x11f959,
    appName: "call-history",
    text: _0x2a8164(_0x544caf.number, _0x11f959).name,
    title: "Disconnected! " + (_0x544caf.message || ""),
    timeout: 3000,
    iconOverride: varData_9 ? <_0x557432 contact={varData_9} /> : undefined
  });
  return activeCallState(_0x11f959, false);
};
const events = param_1 => {
  param_1("call-receiving", callReceiving);
  param_1("call-dialing", callDialing);
  param_1("call-in-progress", callActive);
  param_1("call-inactive", callInactive);
};
export { callStart as c, events as e };