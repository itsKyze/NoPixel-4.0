import { be as _0x23404b, bf as _0x452c07, bg as _0x25b58c, bh as _0x1a96bc, bi as _0x22523f, bj as _0x5eef97, r as _0x4add41, j as _0x78fd9c, n as _0x201842, bk as _0x112a52, bl as _0x29d485 } from "./vendor-69ed8822.js";
import { n as _0x1310d5, v as _0x45b66f, ae as _0x82a181, A as _0x56ea1e, o as _0x1e9c62, i as _0xf4e3f1, I as _0xb171b5, O as _0x5081b1, a4 as _0x2b3036, a5 as _0x17b263, _ as _0x207125, m as _0x2b8180 } from "./index-dcb6474f.js";
import { A as _0x2d6d20 } from "./index-2aafdbb2.js";
import { A as _0xdb1239 } from "./index-a5eeee26.js";
import { D as _0x248588 } from "./duration-timer-dc979963.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
async function GetVehicles() {
  const varData_1 = await _0x1310d5("np-vehicles:getVehicles", {}, {
    returnData: _0x45b66f.getCars()
  });
  return varData_1.data ?? [];
}
async function SellVehicle(param_1) {
  _0x82a181({
    title: "Sell " + param_1.name,
    inputs: [{
      key: "stateId",
      label: "StateID",
      type: "text",
      placeholder: "Enter state ID"
    }, {
      key: "price",
      label: "Price",
      type: "text",
      placeholder: "Enter price"
    }],
    submitCb: async param_1_1 => {
      const varData_2 = Number(param_1_1.price);
      if (isNaN(varData_2) || varData_2 <= 0) {
        return {
          success: false,
          errorMsg: "Invalid price"
        };
      }
      const varData_3 = Number(param_1_1.stateId);
      if (isNaN(varData_3) || varData_3 <= 0) {
        return {
          success: false,
          errorMsg: "Invalid StateID"
        };
      }
      await _0x1310d5("np-vehicles:sellVehicle", {
        vehicle: param_1,
        stateId: varData_3,
        price: varData_2
      });
      return {
        success: true
      };
    }
  });
}
async function SpawnVehicle(param_1) {
  const varData_4 = await _0x1310d5("np-vehicles:spawnVehicle", param_1);
  const [, _0x4e0434] = varData_4.data ?? [false, "Unknown error."];
  _0x56ea1e({
    appName: "garage",
    text: _0x4e0434,
    title: "Garage",
    timeout: 5000
  });
}
async function TrackVehicle(param_1) {
  const varData_5 = await _0x1310d5("np-vehicles:trackVehicle", param_1);
  const [, _0x339fd8] = varData_5.data ?? [false, "Unknown error."];
  _0x56ea1e({
    appName: "garage",
    text: _0x339fd8,
    title: "Garage",
    timeout: 5000
  });
}
const initialState = {
  search: "",
  vehicles: [],
  selectedVehicleVIN: null
};
const devState = {
  ...initialState
};
const [ContextProvider, useFallible] = _0x1e9c62(() => _0xf4e3f1() ? {
  ...devState
} : {
  ...initialState
}, ({
  state: _0x5354f8,
  setState: _0x3ba5a1
}) => ({
  reset: () => {
    _0x3ba5a1(() => ({
      ...initialState
    }));
  },
  fetchVehicles: async () => {
    const varData_6 = await GetVehicles();
    _0x3ba5a1("vehicles", varData_6);
  }
}));
const useVehiclesApp = () => useFallible();
const container$1 = "_container_dx4pl_1";
const expanded = "_expanded_dx4pl_11";
const main_row = "_main_row_dx4pl_15";
const main = "_main_dx4pl_15";
const category = "_category_dx4pl_26";
const information = "_information_dx4pl_36";
const status = "_status_dx4pl_56";
const impounded = "_impounded_dx4pl_69";
const out = "_out_dx4pl_74";
const additional_info = "_additional_info_dx4pl_79";
const info = "_info_dx4pl_36";
const actions = "_actions_dx4pl_100";
const act_btn = "_act_btn_dx4pl_105";
const styles$1 = {
  container: container$1,
  expanded,
  main_row,
  main,
  category,
  information,
  status,
  impounded,
  out,
  additional_info,
  info,
  actions,
  act_btn
};
const TYPE_TO_ICON = {
  car: _0x23404b,
  boat: _0x452c07,
  bicycle: _0x25b58c,
  motorcycle: _0x1a96bc,
  plane: _0x22523f,
  helicopter: _0x5eef97
};
const VehicleItem = param_1 => {
  const {
    setState: _0x20d583,
    state: _0xee1e2b
  } = useVehiclesApp();
  const varData_7 = _0x4add41.useRef(null);
  const varData_8 = () => {
    const varData_9 = _0xee1e2b.selectedVehicleVIN === param_1.vehicle.vin ? null : param_1.vehicle.vin;
    _0x20d583("selectedVehicleVIN", varData_9);
    if (varData_9) {
      varData_7.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  };
  return <div className={_0x201842(styles$1.container, {
    [styles$1.expanded]: _0xee1e2b.selectedVehicleVIN === param_1.vehicle.vin
  })} ref={varData_7}><div className={styles$1.main_row} onClick={varData_8}><div className={styles$1.main}><div className={styles$1.category}><_0xb171b5 icon={TYPE_TO_ICON[param_1.vehicle.type] ?? _0x112a52} className={styles$1.icon} /></div><div className={styles$1.information}><h1>{param_1.vehicle.plate}</h1><p>{param_1.vehicle.name}</p></div></div><div className={_0x201842(styles$1.status, {
        [styles$1.impounded]: param_1.vehicle.parking_state === "impounded",
        [styles$1.out]: param_1.vehicle.parking_state === "out"
      })}>{param_1.vehicle.parking_state}</div></div><_0x5081b1 when={_0xee1e2b.selectedVehicleVIN === param_1.vehicle.vin}><div className={styles$1.additional_info}><p className={styles$1.info}>Garage <span>{param_1.vehicle.parking_garage}</span></p><p className={styles$1.info}>Engine <span>{param_1.vehicle.stats_engine}%</span></p><p className={styles$1.info}>Body <span>{param_1.vehicle.stats_body}%</span></p><div className={styles$1.actions}><_0x5081b1 when={param_1.vehicle.sellable}><button className={styles$1.act_btn} onClick={() => SellVehicle(param_1.vehicle)}>Sell</button></_0x5081b1><_0x5081b1 when={param_1.vehicle.spawnable}><button className={styles$1.act_btn} onClick={() => SpawnVehicle(param_1.vehicle)}>Spawn</button></_0x5081b1><button className={styles$1.act_btn} onClick={() => TrackVehicle(param_1.vehicle)}>Track</button></div></div></_0x5081b1></div>;
};
const container = "_container_n0un6_1";
const list = "_list_n0un6_10";
const empty_container = "_empty_container_n0un6_17";
const empty_icon = "_empty_icon_n0un6_31";
const styles = {
  container,
  list,
  empty_container,
  empty_icon
};
const AppContainer = () => {
  const {
    state: _0x37fbce,
    setState: _0x355504,
    fetchVehicles: _0x57da01,
    reset: _0x23ff0e
  } = useVehiclesApp();
  const varData_10 = _0x4add41.useMemo(() => {
    return _0x37fbce.vehicles.filter(param_1 => {
      const varData_11 = param_1.name.toLocaleLowerCase();
      const varData_12 = param_1.plate.toLocaleLowerCase();
      return varData_11.includes(_0x37fbce.search.toLocaleLowerCase()) || varData_12.includes(_0x37fbce.search.toLocaleLowerCase());
    });
  }, [_0x37fbce.search, _0x37fbce.vehicles]);
  _0x4add41.useEffect(() => {
    _0x57da01();
    return () => _0x23ff0e();
  }, []);
  return <div className={styles.container}><_0x2d6d20 title="Vehicles" description="Manage your vehicles" /><_0xdb1239 value={_0x37fbce.search} onChange={param_1 => _0x355504("search", param_1)} /><_0x5081b1 when={varData_10.length <= 0}><div className={styles.empty_container}><_0xb171b5 icon={_0x29d485} className={styles.empty_icon} /><_0x2b3036 fallback={<div className={styles.empty_text}>No vehicles available.</div>}><_0x17b263 when={_0x37fbce.search.length > 0}><div className={styles.empty_text}>No vehicles match your search.</div></_0x17b263></_0x2b3036></div></_0x5081b1><_0x5081b1 when={varData_10.length > 0}><div className={styles.list}><_0x207125 each={varData_10}>{param_1 => <VehicleItem vehicle={param_1} />}</_0x207125></div></_0x5081b1></div>;
};
let id = 0;
const getId = (_0x1c755e = false) => {
  if (_0x1c755e) {
    id = id + 1;
  }
  return id;
};
const events = param_1 => {
  param_1("vehicle-purchase", ({
    data: _0x5e12b0,
    state: _0xd8d49e
  }) => {
    _0x56ea1e({
      appName: "vehicles",
      id: getId(true),
      onAccept: async () => {
        setTimeout(async () => {
          const varData_13 = await _0x1310d5(_0x5e12b0._data.nuiCallback ? _0x5e12b0._data.nuiCallback : "np-ui:showroomPurchaseCurrentVehicle", {
            price: _0x5e12b0.price,
            tax: _0x5e12b0.tax,
            character: _0xd8d49e.character,
            _data: _0x5e12b0._data
          });
          _0x56ea1e({
            appName: "vehicles",
            id: getId(),
            state: _0xd8d49e,
            text: varData_13.meta.ok ? "Vehicle " + (_0x5e12b0._data.title === "Sell" ? "Sold" : "Purchased") + "!" : varData_13.meta.message,
            title: (_0x5e12b0._data.title === "Sell" ? "Sell" : "Purchase") + " vehicle",
            timeout: 2500
          });
        });
      },
      onAcceptOptions: {
        onAccept: null,
        onReject: null,
        dismiss: false,
        blockDismissOnClick: true,
        id: getId(),
        text: (_0x5e12b0._data.title === "Sell" ? "Selling" : "Purchasing") + "...",
        timeout: -1
      },
      onReject: () => {},
      state: _0xd8d49e,
      timeout: 30000,
      title: (_0x5e12b0._data.title === "Sell" ? "Sell" : "Purchase") + " vehicle",
      text: <_0x248588 countdown={true} extra={_0x2b8180(_0x5e12b0.price + _0x5e12b0.tax) + " incl. tax"} startTime={30} />
    });
    return {
      ..._0xd8d49e
    };
  });
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/cars.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Vehicles",
    name: "garage",
    position: 30,
    events: () => events,
    render: () => <ContextProvider><AppContainer /></ContextProvider>
  };
};
export { config as default };