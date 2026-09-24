import { r as _0x1074de, j as _0x4f81d2, R as _0xb5a96c } from "./vendor.jsx";
import { A as _0x3d2c99 } from "./app-container.jsx";
import { u as _0x4dcab0 } from "./_config_phone.jsx";
import { a as _0x19f59b, u as _0x3089de, E as _0x2801aa, _ as _0x52ed49, e as _0xd43bb7, i as _0xe4e7a3, A as _0x283cdb, n as _0x30ed69 } from "./ui_core.js";
import { D as _0x1ec05d } from "./duration-timer.jsx";
import "./commonjsHelpers.js";
import "./input.jsx";
import "./text.jsx";
import "./styles.js";
import "./loading.jsx";
import "./vite.js";
import "./ui-app.jsx";
import "./store_phone.js";
import "./bundle.js";
const container = "_container_1h98y_1";
const styles = {
  container
};
const HomeClock = () => {
  const {
    state: _0x450273
  } = _0x19f59b();
  const varData_1 = _0x1074de.useMemo(() => {
    const varData_2 = {
      weekday: "long",
      month: "long",
      day: "numeric"
    };
    return (/* @__PURE__ */new Date()).toLocaleDateString("en-US", varData_2);
  }, []);
  return <div className={styles.container}><h1>{_0x450273.game.time}</h1><p>{varData_1}</p></div>;
};
const HomeScreen = () => {
  const [_0x5d1542] = _0x3089de("phone");
  const {
    state: _0x3c7bda,
    selectApp: _0x35d292
  } = _0x2801aa();
  const {
    setState: _0x4a6405
  } = _0x4dcab0();
  const varData_3 = param_1 => {
    if (param_1.name === "call-history" || param_1.name === "contacts") {
      _0x35d292("contacts");
      _0x4a6405("view", param_1.name);
    } else {
      _0x35d292(param_1.name);
    }
  };
  const varData_4 = _0xb5a96c.useMemo(() => {
    if (!_0x5d1542.phoneConfig) {
      return [];
    }
    return _0x5d1542.phoneConfig.filter(param_1 => !param_1.hidden());
  }, [_0x5d1542.phoneConfig]);
  return <_0x3d2c99 background="rgba(0, 0, 0, 0)" removePadding={true}><HomeClock /><ul className="apps"><_0x52ed49 each={varData_4.filter(param_1 => !param_1.favourite)}>{param_1 => {
          const varData_5 = _0x3c7bda.appsWithNotifications.includes(param_1.name);
          const varData_6 = typeof param_1.label === "function" ? param_1.label() : param_1.label;
          return <_0xd43bb7 title={"" + varData_6 + (!_0xe4e7a3() ? "" : " [name:" + param_1.name + "]")} key={param_1.name}><li onClick={() => varData_3(param_1)} key={param_1.name}>{varData_5 && <div className="app-notification" />}<span className="app-icon" style={{
                background: "url(" + param_1.iconPng + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }} /></li></_0xd43bb7>;
        }}</_0x52ed49></ul><ul className="apps phone-app-footer"><_0x52ed49 each={varData_4.filter(param_1 => param_1.favourite)}>{param_1 => {
          const varData_7 = _0x3c7bda.appsWithNotifications.includes(param_1.name);
          return <li onClick={() => varData_3(param_1)}>{varData_7 && <div className="app-notification" />}<span className="app-icon" style={{
              background: "url(" + param_1.iconPng + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }} /></li>;
        }}</_0x52ed49></ul></_0x3d2c99>;
};
let id = 0;
const getId = (_0x13f296 = false) => {
  if (_0x13f296) {
    id = id + 1;
  }
  return id;
};
const events = (param_1, {
  config: _0x207998
}) => {
  param_1("notification", ({
    data: _0x4de7b0,
    state: _0x4b7f1a
  }) => {
    const varData_8 = _0x4de7b0.target_app;
    const varData_9 = _0x207998.find(param_1_1 => param_1_1.name === varData_8);
    if (!varData_9) {
      return _0x4b7f1a;
    }
    const varData_10 = !!_0x4de7b0.show_even_if_app_active;
    _0x283cdb({
      apps: [varData_10 ? "" : varData_8],
      appName: varData_8,
      state: _0x4b7f1a,
      title: _0x4de7b0.title,
      text: _0x4de7b0.body,
      timeout: _0x4de7b0.timeout || 5000
    });
    return _0x4b7f1a;
  });
  param_1("phone-state-update", ({
    data: _0x385eea,
    state: _0x2834a2
  }) => {
    return {
      ..._0x2834a2,
      phone: {
        ..._0x2834a2.phone,
        ..._0x385eea
      }
    };
  });
  param_1("generic-confirmation", ({
    data: _0x23f52f,
    state: _0x2e3900
  }) => {
    _0x283cdb({
      apps: [],
      appName: _0x23f52f.appName,
      icon: _0x23f52f.icon,
      id: getId(true),
      onAccept: async () => {
        const varData_11 = _0x23f52f.onAccept;
        if (!varData_11?.targetEvent) {
          return;
        }
        const varData_12 = _0x30ed69(varData_11.targetEvent, {
          action: "accept",
          _data: _0x23f52f._data
        });
        if (!varData_11.hasResponse) {
          return varData_12;
        }
        const varData_13 = await varData_12;
        if (!varData_13.data.text || !varData_13.data.title) {
          return;
        }
        setTimeout(() => {
          _0x283cdb({
            apps: [],
            appName: _0x23f52f.appName,
            id: getId(),
            state: _0x2e3900,
            text: varData_13.data.text,
            title: varData_13.data.title,
            timeout: 2500
          });
        });
      },
      onAcceptOptions: !_0x23f52f.onAccept.hasResponse ? undefined : {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: _0x23f52f.waitingText,
        timeout: -1
      },
      onReject: () => {
        const varData_14 = _0x23f52f.onAccept;
        if (!varData_14?.targetEvent) {
          return;
        }
        _0x30ed69(varData_14.targetEvent, {
          action: "reject",
          _data: _0x23f52f._data
        });
        return;
      },
      state: _0x2e3900,
      timeout: _0x23f52f.timeout,
      title: _0x23f52f.title,
      text: _0x23f52f.timeout !== -1 && !_0x23f52f.title.includes("Job Offer") ? <_0x1ec05d countdown={true} extra={_0x23f52f.text} startTime={_0x23f52f.timeout / 1000} /> : _0x23f52f.text
    });
    return _0x2e3900;
  });
};
const icon = {
  background: "#009688",
  color: "white",
  name: "home"
};
const config = param_1 => {
  return {
    ...param_1,
    background: "rgba(0, 0, 0, 0)",
    events: () => events,
    hidden: () => true,
    icon,
    label: "",
    name: "home-screen",
    render: () => <HomeScreen />
  };
};
export { config as default, icon };