var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { s as _0x4f4507, t as _0x677216, x as _0x1c2ab1, r as _0x22b702, j as _0xf95f1, R as _0xb37fa7, n as _0x344a8a, $ as _0x34dcd8, S as _0xf8abe, M as _0x4a2e00 } from "./vendor.jsx";
import { a as _0x31fae1, u as _0x26ff18, s as _0x21373f, l as _0x3f26fc, n as _0x5b51a9, r as _0x54598f, b as _0xe30525, c as _0x272859 } from "./ui_core.js";
class PixelChannel extends _0x4f4507.EventEmitter {
  constructor(param_1, param_2, param_3) {
    super();
    __publicField(this, "id");
    __publicField(this, "socket");
    __publicField(this, "token");
    __publicField(this, "subscribers");
    this.id = param_1;
    this.token = param_3;
    this.socket = param_2;
    this.subscribers = /* @__PURE__ */new Set();
    this.on("subscriberList", (param_1_1, param_2_1) => {
      this.subscribers = new Set(param_2_1);
    });
    this.on("addedSubscriber", (param_1_1, param_2_1) => {
      this.subscribers.add(param_1_1);
    });
    this.on("removedSubscriber", param_1_1 => {
      this.subscribers.delete(param_1_1);
    });
  }
  onMessage(param_1) {
    this.emit(param_1.message.event, param_1.source, param_1.message.payload);
  }
  broadcast(param_1, param_2, param_3) {
    if (param_3) {
      this.emit(param_1, this.socket.id, param_2);
    }
    this.socket.send("channel", {
      channel: this.id,
      message: {
        event: param_1,
        payload: param_2
      }
    });
  }
  to(param_1, param_2, param_3) {
    this.socket.send("channel", {
      channel: this.id,
      target: param_1,
      message: {
        event: param_2,
        payload: param_3
      }
    });
  }
  connect() {
    if (this.socket.isOnline) {
      this.socket.send("subscription", {
        action: "subscribe",
        channel: this.id,
        token: this.token
      });
    }
  }
  disconnect() {
    if (this.socket.isOnline) {
      this.socket.send("subscription", {
        action: "unsubscribe",
        channel: this.id
      });
    }
    this.removeAllListeners();
  }
}
function DecodeMessage(param_1) {
  try {
    return _0x677216(param_1);
  } catch (err) {
    return err.message;
  }
}
function EncodeMessage(param_1) {
  try {
    return _0x1c2ab1(param_1);
  } catch (err) {
    console.error(err.message);
  }
}
class PixelSocket extends _0x4f4507.EventEmitter {
  constructor(param_1) {
    super();
    __publicField(this, "id");
    __publicField(this, "client");
    __publicField(this, "api");
    __publicField(this, "queue");
    __publicField(this, "channels");
    __publicField(this, "handlers");
    __publicField(this, "timeout");
    __publicField(this, "reconnect");
    __publicField(this, "interval");
    __publicField(this, "debug");
    __publicField(this, "debugIncoming");
    __publicField(this, "debugOutgoing");
    this.api = param_1;
    this.queue = new Array();
    this.channels = /* @__PURE__ */new Map();
    this.handlers = /* @__PURE__ */new Map();
    this.init();
  }
  init() {
    this.client = new WebSocket(this.api);
    this.client.binaryType = "arraybuffer";
    this.client.onopen = () => {
      clearInterval(this.interval);
      this.interval = setInterval(() => this.send("heartbeat", "ping"), 15000);
      this.channels.forEach(param_1 => this.join(param_1.id, param_1.token));
      if (this.queue.length > 0) {
        while (this.queue.length > 0) {
          const varData_1 = this.queue.shift();
          if (varData_1?.type && varData_1?.payload) {
            this.send(varData_1.type, varData_1.payload);
          }
        }
      }
      this.emit("connected");
    };
    this.client.onclose = () => {
      this.reconnect = setTimeout(() => this.init(), 3000);
      this.emit("disconnected");
    };
    this.client.onmessage = param_1 => {
      this.onMessage(param_1.data);
    };
  }
  get isOnline() {
    return this.client.readyState === this.client.OPEN;
  }
  heartbeat() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.close(), 30000);
  }
  onMessage(param_1) {
    const varData_2 = DecodeMessage(param_1);
    if (this.debug && this.debugIncoming && varData_2.type !== "heartbeat") {
      this.debugIncoming(varData_2);
    }
    if (varData_2?.type === "init") {
      this.id = varData_2.payload.id;
    } else if (varData_2?.type === "heartbeat" && varData_2?.payload === "ping") {
      this.heartbeat();
    } else if (varData_2?.type === "channel") {
      this.channels.get(varData_2.payload.channel)?.onMessage(varData_2.payload);
    } else if (varData_2?.type === "subscription" && varData_2.payload.action === "access-denied") {
      const varData_3 = this.channels.get(varData_2.payload.channel);
      if (varData_3) {
        setTimeout(() => this.join(varData_3.id, varData_3.token), 3000);
      }
    } else if (varData_2?.type) {
      this.handlers.get(varData_2.type)?.call(this, varData_2.payload);
    }
  }
  use(param_1, param_2) {
    this.handlers.set(param_1, param_2);
  }
  send(param_1, param_2) {
    const varData_4 = {
      type: param_1,
      payload: param_2
    };
    if (this.isOnline) {
      const varData_5 = EncodeMessage(varData_4);
      if (this.debug && this.debugOutgoing && param_1 !== "heartbeat") {
        this.debugOutgoing(varData_4);
      }
      this.client.send(varData_5);
    } else {
      this.queue.push(varData_4);
    }
  }
  in(param_1, param_2, param_3) {
    this.channels.get(param_1)?.broadcast(param_2, param_3);
  }
  of(param_1, param_2, param_3, param_4) {
    this.channels.get(param_1)?.to(param_2, param_3, param_4);
  }
  getChannel(param_1) {
    return this.channels.get(param_1);
  }
  isSubscribed(param_1) {
    return this.channels.has(param_1);
  }
  join(param_1, param_2) {
    if (!this.channels.has(param_1)) {
      this.channels.set(param_1, new PixelChannel(param_1, this, param_2));
    }
    const varData_6 = this.channels.get(param_1);
    varData_6.connect();
    return varData_6;
  }
  leave(param_1) {
    const varData_7 = this.channels.get(param_1);
    if (!varData_7) {
      return;
    }
    varData_7.disconnect();
    return this.channels.delete(param_1);
  }
  close() {
    clearTimeout(this.reconnect);
    clearInterval(this.interval);
    if (this.client.readyState === this.client.OPEN) {
      this.client.onclose = () => {};
      this.client.close();
    }
    this.removeAllListeners();
  }
  setDebug(param_1) {
    this.debug = param_1;
  }
}
const SocketContext = _0x22b702.createContext(undefined);
const SocketProvider = ({
  children: _0x4c2ad3,
  apiUrl: _0x1dbdc6,
  apiToken: _0x4ad7af,
  autoConnect = true,
  debug = false
}) => {
  const varData_8 = _0x22b702.useRef(true);
  const varData_9 = _0x22b702.useRef(null);
  const [_0x3dac21, _0x3096b5] = _0x22b702.useState(_0x4ad7af);
  const [_0x30f782, _0x4524d9] = _0x22b702.useState(false);
  const [_0x1ff72d, _0x5618f3] = _0x22b702.useState(null);
  _0x22b702.useEffect(() => {
    return () => {
      varData_8.current = false;
    };
  }, []);
  _0x22b702.useEffect(() => {
    if (!autoConnect || !_0x1dbdc6) {
      return;
    }
    const varData_10 = new PixelSocket(_0x1dbdc6);
    varData_9.current = varData_10;
    if (debug) {
      varData_10.setDebug(true);
      varData_10.debugIncoming = async param_1 => {
        console.log("[PixelSocket] Incoming:", param_1);
      };
      varData_10.debugOutgoing = async param_1 => {
        console.log("[PixelSocket] Outgoing:", param_1);
      };
    }
    const varData_11 = () => {
      if (varData_8.current) {
        _0x4524d9(true);
        _0x5618f3(varData_10.id);
      }
    };
    const varData_12 = () => {
      if (varData_8.current) {
        _0x4524d9(false);
      }
    };
    varData_10.on("connected", varData_11);
    varData_10.on("disconnected", varData_12);
    return () => {
      varData_10.off("connected", varData_11);
      varData_10.off("disconnected", varData_12);
      if (varData_9.current) {
        varData_9.current.close();
        varData_9.current = null;
      }
      if (!varData_8.current) {
        return;
      }
      _0x4524d9(false);
      _0x5618f3(null);
    };
  }, [_0x1dbdc6, autoConnect, debug]);
  const varData_13 = {
    socket: varData_9.current,
    isConnected: _0x30f782,
    socketId: _0x1ff72d,
    token: _0x3dac21,
    setToken: _0x3096b5
  };
  return <SocketContext.Provider value={varData_13}>{_0x4c2ad3}</SocketContext.Provider>;
};
const useSocket = () => {
  const varData_14 = _0x22b702.useContext(SocketContext);
  if (varData_14 === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return varData_14;
};
const useSocketInstance = () => {
  const {
    socket: _0x53cfec
  } = useSocket();
  return _0x53cfec;
};
const useSocketConnection = () => {
  const {
    isConnected: _0x181ae5,
    socketId: _0x4c537b
  } = useSocket();
  return {
    isConnected: _0x181ae5,
    socketId: _0x4c537b
  };
};
const wrapper = "";
const Wrapper = param_1 => {
  const {
    state: _0x41d74b
  } = _0x31fae1();
  const varData_15 = _0xb37fa7.useRef(null);
  const varData_16 = _0xb37fa7.useRef(null);
  const varData_17 = param_1_1 => param_1_2 => {
    param_1_2.preventDefault();
    param_1_2.stopPropagation();
    param_1_1.current.focus();
  };
  const varData_18 = param_1_1 => {
    if (!param_1.hasFocus) {
      param_1_1.preventDefault();
      param_1_1.stopPropagation();
      return;
    }
  };
  const varData_19 = _0xb37fa7.useRef(false);
  _0xb37fa7.useEffect(() => {
    if (varData_19.current !== param_1.hasFocus) {
      varData_19.current = param_1.hasFocus;
      varData_15.current.focus();
    }
  }, [param_1.hasFocus]);
  return <SocketProvider apiUrl={_0x41d74b.game.wsEndpoint} apiToken={_0x41d74b.game.token ?? undefined}><div id={param_1?.name} className={_0x344a8a("wrapper", {
      "center-wrapper": param_1.center
    })} style={param_1.style || {}}><input onFocus={varData_17(varData_16)} className="input-field" tabIndex={0} /><input onKeyDown={varData_18} ref={varData_15} className="input-field" tabIndex={-1} />{param_1.children}<input onKeyDown={varData_18} ref={varData_16} className="input-field" tabIndex={-1} /><input onFocus={varData_17(varData_15)} className="input-field" tabIndex={0} /></div></SocketProvider>;
};
const lastTenEvents = [];
const escapes = [];
const events = {};
const source = "np-nui";
const hasFocus = {};
let mounted = false;
let timer = Date.now() / 1000;
const AppWrapper = param_1 => {
  const [_0x4d8506, _0x26c1cb] = _0x26ff18("main");
  const varData_20 = (param_1_1, param_2) => {
    console.log("---- NP UI ERROR -----");
    console.log("Error In App: ", param_1.name);
    console.log("Message: ", param_1_1);
    console.log("Stack: ", param_2.componentStack);
    console.log("----- ----- ----- ----- ----- -----");
    if (typeof param_1.onError === "function") {
      param_1.onError(param_1_1, param_2);
    }
    setTimeout(async () => {
      _0x26c1cb({
        restarting: true
      });
      const varData_21 = {
        title: "Catastrophic UI Error: " + param_1_1.message,
        stack: param_2.componentStack,
        json: (" \n          Error occurred in app: " + param_1.name + "\n          --\n          Redux State: " + JSON.stringify(_0x21373f.getState()) + "\n          --\n          Last 10 Events: " + lastTenEvents.join("\n") + "\n          --\n          Last 10 NUI Events: " + _0x3f26fc() + "\n        ").trim()
      };
      _0x5b51a9("np-ui:crashAction", varData_21);
      if (param_1.closeOnError) {
        _0x5b51a9("np-ui:closeApp");
      }
      varData_22();
      _0x54598f();
    }, 1500);
  };
  const varData_22 = () => {
    if (!hasFocus[param_1.name]) {
      return;
    }
    hasFocus[param_1.name] = false;
    let varData_23 = {};
    if (typeof param_1?.onEscapeData === "function") {
      varData_23 = param_1.onEscapeData();
    }
    _0x5b51a9("np-ui:applicationClosed", {
      ...varData_23,
      fromEscape: true,
      name: param_1.name
    });
  };
  const varData_24 = async param_1_1 => {
    if (!param_1_1 || !param_1_1.data || param_1_1.data.source !== source) {
      return;
    }
    if (param_1_1.data.app === "_fsts") {
      timer = Math.floor(Date.now() / 1000);
      return;
    }
    if (Date.now() / 1000 > timer + 960) {
      return _0xe30525();
    }
    if (!events[param_1_1.data.app]) {
      return;
    }
    lastTenEvents.unshift(JSON.stringify(param_1_1.data));
    while (lastTenEvents.length > 10) {
      lastTenEvents.pop();
    }
    try {
      await events[param_1_1.data.app](param_1_1);
    } catch (err) {
      setTimeout(() => {
        _0x5b51a9("np-ui:crashAction", {
          title: "app '" + param_1_1.data.app + "' event handler error: " + err.message,
          json: ("\n            stack\n            " + err.stack + "\n            --\n            state\n            " + JSON.stringify(_0x21373f.getState(), null, 4) + "\n            --\n            events\n            " + lastTenEvents.map(param_1_2 => JSON.stringify(param_1_2, null, 4)).join("\n") + "\n            --\n            last 10 nui calls\n            " + _0x3f26fc() + "\n          ").trim(),
          nonCritical: true
        });
      }, 32);
    }
  };
  const varData_25 = param_1_1 => {
    const varData_26 = param_1_1 || window.event;
    if (varData_26.keyCode !== 27) {
      return;
    }
    escapes.forEach(param_1_2 => param_1_2());
  };
  const varData_27 = async param_1_1 => {
    const varData_28 = param_1_1.data.data || {};
    if (typeof param_1.disableDebugEvent !== "function" || !param_1.disableDebugEvent(varData_28)) {
      _0x272859(param_1_1.data);
    }
    if (param_1_1.data.show && typeof param_1.onShow === "function") {
      hasFocus[param_1.name] = true;
      try {
        await param_1.onShow(varData_28);
      } catch (err) {
        throw err;
      }
    } else if (param_1_1.data.show === false && typeof param_1.onHide === "function") {
      hasFocus[param_1.name] = false;
      try {
        await param_1.onHide(varData_28);
      } catch (err) {
        throw err;
      }
    }
    if (typeof param_1.onEvent === "function") {
      if (param_1_1.data._withFocus) {
        hasFocus[param_1.name] = true;
      } else if (hasFocus && param_1_1.data._withFocus === false) {
        hasFocus[param_1.name] = false;
      }
      param_1.onEvent(varData_28, !!param_1_1.data.show);
    }
  };
  const varData_29 = () => {
    if (typeof param_1.onEscape === "function") {
      param_1.onEscape();
    }
    varData_22();
  };
  _0x22b702.useEffect(() => {
    if (!param_1.name) {
      throw new Error("UI app name required");
    }
    if (!mounted) {
      mounted = true;
      window.addEventListener("message", varData_24);
      document.addEventListener("keyup", varData_25);
    }
    events[param_1.name] = varData_27;
    escapes.push(varData_29);
    if (param_1.onClose) {
      param_1.onClose(varData_22);
    }
    return () => {
      if (!mounted) {
        return;
      }
      mounted = false;
      window.removeEventListener("message", varData_24);
      window.removeEventListener("keyup", varData_25);
    };
  }, []);
  return <_0x34dcd8 fallback={<ErrorUI />} onError={varData_20}><Wrapper hasFocus={hasFocus} {...param_1} /></_0x34dcd8>;
};
const ErrorUI = () => {
  return <div id="main-app-container"><_0xf8abe open={true}><_0x4a2e00 elevation={6} variant="filled" severity="error">Catastrophic UI Error Occurred (F8) - Restarting...</_0x4a2e00></_0xf8abe></div>;
};
export { AppWrapper as A, useSocket as u };