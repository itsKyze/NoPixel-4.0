import { R as _0x4fa1c8, j as _0x93b400, n as _0x2b14be, m as _0x2aa141, aQ as _0xbb1d76, r as _0x356c50, aR as _0x4ede3a, aS as _0x542061 } from "./vendor-69ed8822.js";
import _0x4306c0, { appName } from "./store-26508309.js";
import { u as _0x2e71c6, G as _0x2ae7f0, n as _0x3a72bb, e as _0xc8bc80, I as _0x3b2861 } from "./index-dcb6474f.js";
import { B as _0x1e624f, L as _0xdc7a0d } from "./index-6dbd65c5.js";
import { U as _0x5e6794 } from "./bundle-4fbe11f0.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
const TaxiLogo = () => {
  const [_0x47b17b, _0x12fdbd] = _0x4fa1c8.useState(false);
  _0x4fa1c8.useEffect(() => {
    _0x12fdbd(true);
  }, []);
  return <svg width="45" height="62" viewBox="0 0 45 62" fill="none" xmlns="http://www.w3.org/2000/svg" className={_0x2b14be({
    active: _0x47b17b
  })}><path d="M43.7118 28.0361C50.8573 43.4927 26.9227 56.0355 5.28789 61.4655C-15.5151 65.2248 31.7749 48.6329 31.7749 28.0361C31.7749 7.43936 1.33535 -0.592738 10.4885 0.0338216C16.3133 0.273042 34.8765 8.92424 43.7118 28.0361Z" fill="white" stroke="white" strokeWidth="1" className="svg-elem-1" /></svg>;
};
const index$5 = "";
const TaxiIntroOverlay = () => {
  const [_0x365843, _0x2a920d] = _0x2e71c6(appName);
  const varData_1 = param_1 => {
    _0x2a920d({
      viewType: param_1
    });
  };
  const varData_2 = {
    transform: ["translateX(200%)", "translateX(0%)"]
  };
  return <div className="taxi-splash-screen"><section className="splash-header"><_0x2aa141.div animate={{
        opacity: [0, 1]
      }} transition={{
        duration: 1.5
      }}><TaxiLogo /></_0x2aa141.div></section><section className="splash-hero">{_0x2ae7f0() && <_0x2aa141.p className="splash-name" animate={varData_2} transition={{
        duration: 0.5
      }}>{_0x2ae7f0()?.first_name + " " + _0x2ae7f0()?.last_name}</_0x2aa141.p>}<_0x2aa141.h1 className="splash-welcome" animate={varData_2} transition={{
        duration: 0.55
      }}>Welcome to <br /> Guber</_0x2aa141.h1></section><section className="splash-buttons"><_0x2aa141.div animate={varData_2} transition={{
        duration: 0.6
      }}><_0x1e624f type="primary" className="splash-btn" onClick={() => varData_1("driver")}>Driver</_0x1e624f></_0x2aa141.div><_0x2aa141.div animate={varData_2} transition={{
        duration: 0.65
      }}><_0x1e624f type="primary" className="splash-btn splash-btn-customer" onClick={() => varData_1("customer")}>Customer</_0x1e624f></_0x2aa141.div></section></div>;
};
const map = "";
const IncomingRideSound = "" + new URL("incoming-4a1e7a09.ogg", import.meta.url).href;
const genMapCoords = (param_1, param_2) => {
  const varData_3 = param_2.coords.y;
  const varData_4 = param_2.coords.x;
  return {
    type: param_1,
    latLng: [varData_3, varData_4]
  };
};
const events = param_1 => {
  param_1("taxi-update-info", ({
    data: _0xc754fd,
    state: _0x431e37
  }) => {
    let varData_5 = [];
    if (_0xc754fd?.currentJob) {
      varData_5 = [genMapCoords("pickup", _0xc754fd?.currentJob?.pickup), genMapCoords("dropoff", _0xc754fd?.currentJob?.dropoff)];
    }
    return {
      ..._0x431e37,
      [_0x4306c0.key]: {
        ..._0x431e37[_0x4306c0.key],
        markers: varData_5,
        rating: _0xc754fd?.rating ?? 0,
        clockedIn: _0xc754fd?.clockedIn,
        currentJob: _0xc754fd?.currentJob ?? null
      }
    };
  });
  param_1("taxi-update-booking-info", ({
    data: _0x2af0ef,
    state: _0x991267
  }) => {
    return {
      ..._0x991267,
      [_0x4306c0.key]: {
        ..._0x991267[_0x4306c0.key],
        bookingInfo: _0x2af0ef?.bookingInfo ?? null
      }
    };
  });
  param_1("guber-notification", ({
    data: _0x60e76e,
    state: _0x70a550
  }) => {
    const varData_6 = {
      incoming: IncomingRideSound
    };
    if (!varData_6[_0x60e76e?.type]) {
      return;
    }
    const varData_7 = new Audio(varData_6[_0x60e76e?.type]);
    varData_7.volume = 0.05;
    varData_7.controls = false;
    varData_7.play();
    setTimeout(() => {
      varData_7.remove();
    }, 250);
    return {
      ..._0x70a550
    };
  });
};
const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205;
const CUSTOM_CRS = _0xbb1d76.extend({}, _0xbb1d76.CRS.Simple, {
  projection: _0xbb1d76.Projection.LonLat,
  scale: function (param_1) {
    return Math.pow(2, param_1);
  },
  zoom: function (param_1) {
    return Math.log(param_1) / 0.6931471805599453;
  },
  distance: function (param_1, param_2) {
    var varData_8 = param_2.lng - param_1.lng;
    var varData_9 = param_2.lat - param_1.lat;
    return Math.sqrt(varData_8 * varData_8 + varData_9 * varData_9);
  },
  transformation: new _0xbb1d76.Transformation(scale_x, center_x, -scale_y, center_y),
  infinite: true
});
const markerTypes = {
  pickup: {
    className: "map-icon map-icon-ping",
    html: "<div class=\"pulse\"></div>",
    offset: _0xbb1d76.point(0, 0)
  },
  dropoff: {
    className: "map-icon map-icon-ping orange",
    html: "<div class=\"pulse\"></div>",
    offset: _0xbb1d76.point(0, 0)
  }
};
const TaxiMap = () => {
  const [_0xaca0ad, _0x3364e4] = _0x2e71c6(appName);
  const [_0x73c5d4, _0x5d861e] = _0x356c50.useState(false);
  const varData_10 = _0x4ede3a({
    click: _0x356c50.useCallback(async param_1 => {
      if (_0x73c5d4 || _0xaca0ad.viewType !== "customer") {
        return;
      }
      _0x5d861e(true);
      const varData_11 = param_1.latlng.lat;
      const varData_12 = param_1.latlng.lng;
      const varData_13 = await _0x3a72bb("guber:ui:setWaypoint", {
        x: varData_12,
        y: varData_11
      });
      if (varData_13.meta.ok) {
        _0x3364e4({
          preBookingInfo: varData_13.data,
          markers: [genMapCoords("pickup", varData_13.data.pickup), genMapCoords("dropoff", varData_13.data.dropoff)]
        });
      }
      console.log(varData_13, _0xaca0ad);
      _0x5d861e(false);
    }, [])
  });
  const varData_14 = (param_1, param_2) => {
    const varData_15 = markerTypes[param_1];
    if (!varData_15) {
      return;
    }
    const varData_16 = param_2.latLng || [0, 0];
    const varData_17 = _0xbb1d76.divIcon({
      html: varData_15.html,
      className: varData_15.className
    });
    const varData_18 = _0xbb1d76.marker(varData_16, {
      icon: varData_17
    }).addTo(varData_10);
    return varData_18;
  };
  const varData_19 = _0x356c50.useCallback(() => {
    if (varData_10) {
      varData_10.eachLayer(param_1 => {
        if (param_1._url) {
          return;
        }
        varData_10.removeLayer(param_1);
      });
    }
    _0xaca0ad.markers.map(param_1 => {
      varData_14(param_1.type, {
        latLng: param_1.latLng
      });
    });
  }, [_0xaca0ad.markers]);
  _0x356c50.useEffect(() => {
    varData_19();
  }, [_0xaca0ad.markers, varData_19]);
  return <_0x93b400.Fragment />;
};
const TaxiMapContainer = () => {
  const varData_20 = _0xbb1d76.tileLayer("https://assets.nopixel.net/dev/images/guber/atlas/{z}/{x}/{y}.jpg", {
    minZoom: 0,
    maxZoom: 5,
    noWrap: true,
    continuousWorld: false,
    attribution: "atlas map",
    id: "atlas map"
  });
  return <_0x542061 crs={CUSTOM_CRS} zoom={3} center={[0, 0]} preferCanvas={true} maxZoom={5} minZoom={0} layers={[varData_20]} doubleClickZoom={false} style={{
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1
  }}><TaxiMap /></_0x542061>;
};
const container$2 = "_container_15lwm_1";
const handle = "_handle_15lwm_11";
const styles$1 = {
  container: container$2,
  handle
};
const GuberSwitch = param_1 => {
  return <div className={styles$1.container} data-ison={param_1.value} onClick={param_1.onClick}><_0x2aa141.div className={styles$1.handle} layout={true} transition={{
      type: "spring",
      stiffness: 700,
      damping: 30
    }} /></div>;
};
const container$1 = "_container_15i5i_1";
const btn = "_btn_15i5i_14";
const status_bar = "_status_bar_15i5i_24";
const title = "_title_15i5i_33";
const styles = {
  container: container$1,
  btn,
  status_bar,
  title
};
const TaxiStatusBar = () => {
  const [_0x16430a, _0x26b93d] = _0x2e71c6(appName);
  const varData_21 = _0x4fa1c8.useCallback(async param_1 => {
    const varData_22 = await _0x3a72bb("guber:ui:toggleWorkStatus", {
      clockedIn: param_1
    }, {
      returnData: {
        clockedIn: true
      }
    });
    if (varData_22.meta.ok) {
      _0x26b93d({
        clockedIn: varData_22.data.clockedIn
      });
    }
  }, []);
  const varData_23 = () => {
    _0x26b93d({
      viewType: null
    });
    varData_21(false);
  };
  return <div className={styles.container}><_0xc8bc80 title="Go Home" placement="bottom"><div className={styles.btn} onClick={varData_23}><_0x3b2861 icon="home" className="icon" /></div></_0xc8bc80>{_0x16430a.viewType === "driver" && <div className={styles.status_bar}><h1 className={styles.title}>Status: {_0x16430a.clockedIn ? "Online" : "Offline"}</h1><GuberSwitch value={_0x16430a.clockedIn} onClick={() => varData_21(!_0x16430a.clockedIn)} /></div>}</div>;
};
const indes = "";
const PaneContainer = param_1 => {
  const [_0x279a7a, _0x501619] = _0x356c50.useState(false);
  return <div className="pane-container"><div className="pane-toggler" onClick={() => _0x501619(!_0x279a7a)} /><h1 className="pane-title">{param_1.title} </h1>{!_0x279a7a && <div className={_0x2b14be("pane-content", [param_1.className])}>{param_1.children}</div>}</div>;
};
const index$4 = "";
const ActiveRideBar = param_1 => {
  const [_0x32c526, _0x2f39a8] = _0x356c50.useState(false);
  const varData_24 = _0x356c50.useCallback(async () => {
    _0x2f39a8(true);
    await _0x3a72bb("guber:ui:driverCancelRide", {
      rideId: param_1.currentJob.id
    });
    _0x5e6794.wait(500);
    _0x2f39a8(false);
  }, []);
  const varData_25 = _0x356c50.useCallback(async () => {
    await _0x3a72bb("guber:ui:completeTrip", {});
  }, []);
  const varData_26 = param_1.currentJob?.customerInfo?.name ?? crypto.randomUUID();
  return <PaneContainer title="Active Ride" className="guber-active-ride-container"><section className="top-details"><div className="customer-info"><img className="customer-avatar" src={"https://api.dicebear.com/7.x/personas/svg?backgroundType=gradientLinear,solid&mouth=smile&seed=" + varData_26} /><h1 className="customer-name">{param_1.currentJob?.customerInfo?.name}</h1></div><div className="trip-stats"><h1 className="trip-heading">${param_1.currentJob.price}</h1><p className="trip-distance">{param_1.currentJob?.distance.toFixed(2) + "mi"}</p></div></section><section className="trip-locations"><div className="trip-pickup"><p className="trip-description">Pickup</p><h1 className="trip-heading">{param_1.currentJob?.pickup?.street ?? "Unknown"}</h1></div><div className="trip-dropoff"><p className="trip-description">Dropoff</p><h1 className="trip-heading">{param_1.currentJob?.dropoff?.street ?? "Unknown"}</h1></div></section><div className="customer-buttons">{param_1?.currentJob?.customerInfo?.cid && <_0x1e624f type="primary" className="active-ride-btn" onClick={varData_25}>Complete</_0x1e624f>}<_0x1e624f type="primary" className="active-ride-btn" onClick={varData_24} loading={_0x32c526}>Cancel</_0x1e624f></div></PaneContainer>;
};
const index$3 = "";
const IncomingRideBar = ({
  currentJob: _0x56c282
}) => {
  const varData_27 = async () => {
    await _0x3a72bb("guber:ui:rejectJob", {
      jobId: _0x56c282.id
    });
  };
  const varData_28 = async () => {
    await _0x3a72bb("guber:ui:acceptJob", {
      jobId: _0x56c282.id
    });
  };
  const varData_29 = _0x56c282?.customerInfo?.name ?? crypto.randomUUID();
  return <PaneContainer title="Incoming Ride" className="taxi-incoming-bar"><section className="top-details"><div className="customer-info"><img className="customer-avatar" src={"https://api.dicebear.com/7.x/personas/svg?backgroundType=gradientLinear,solid&mouth=smile&seed=" + varData_29} /><h1 className="customer-name">{_0x56c282?.customerInfo?.name}</h1></div><div className="trip-stats"><h1 className="trip-heading">${_0x56c282?.price}</h1><p className="trip-distance">{_0x56c282?.distance.toFixed(2) + "mi"}</p></div></section><section className="trip-locations"><div className="trip-pickup"><p className="trip-description">Pickup</p><h1 className="trip-heading">{_0x56c282?.pickup?.street ?? "Unknown"}</h1></div><div className="trip-dropoff"><p className="trip-description">Dropoff</p><h1 className="trip-heading">{_0x56c282?.dropoff?.street ?? "Unknown"}</h1></div></section><div className="customer-buttons"><_0x1e624f type="secondary" onClick={varData_27} style={{
        width: "100%",
        marginRight: "0.5rem"
      }}>Decline</_0x1e624f><_0x1e624f type="primary" onClick={varData_28} style={{
        width: "100%",
        marginLeft: "0.5rem"
      }}>Accept</_0x1e624f></div></PaneContainer>;
};
const index$2 = "";
const SearchingRideBar = ({
  rating: _0x5cb46e
}) => {
  return <PaneContainer title="Searching for rides..." className="taxi-searching-bar"><div className="rating-section"><h1>Current Rating: <span>{_0x5cb46e.toFixed(1)}/5.0</span></h1></div></PaneContainer>;
};
const ConfirmRideView = ({
  preBookingInfo: _0x3f2dc8,
  onCancel: _0x2a1285,
  onConfirm: _0xfd6b8,
  confirming: _0x37313a
}) => {
  return <div className="customer-container confirm-view"><h1 className="customer-warning">This Guber ride will cost you ${_0x3f2dc8.price?.toFixed(2)} + tax, it will be held until the ride is completed.</h1><div className="confirm-buttons"><_0x1e624f type="primary" onClick={_0xfd6b8} loading={_0x37313a}>Confirm</_0x1e624f><_0x1e624f type="primary" onClick={_0x2a1285}>Cancel</_0x1e624f></div></div>;
};
const index$1 = "";
const TaxiCustomerView = () => {
  const [_0x16e87e, _0x2611e1] = _0x356c50.useState(false);
  const [_0x58a16d, _0x3e6740] = _0x356c50.useState(false);
  const [_0x618a6c, _0x1c6403] = _0x356c50.useState(true);
  const [_0x1643eb, _0x202663] = _0x356c50.useState(false);
  const [_0x5dacf6, _0x622fca] = _0x356c50.useState(null);
  const [_0x34455e, _0x55d180] = _0x2e71c6(appName);
  const varData_30 = _0x356c50.useCallback(async param_1 => {
    if (!param_1.pickup) {
      return _0x622fca("No pickup location found...");
    }
    if (!param_1.dropoff) {
      return _0x622fca("No dropoff location marked...");
    }
    _0x3e6740(true);
    const varData_31 = await _0x3a72bb("guber:ui:bookRide");
    await _0x5e6794.wait(500);
    _0x3e6740(false);
    _0x202663(false);
    _0x622fca(!varData_31.meta.ok ? varData_31.meta.message : null);
  }, []);
  const varData_32 = _0x356c50.useCallback(async () => {
    _0x2611e1(true);
    await _0x3a72bb("guber:ui:customerCancelRide");
    await _0x5e6794.wait(500);
    _0x2611e1(false);
  }, []);
  const varData_33 = () => {
    if (!_0x34455e.preBookingInfo.pickup) {
      return;
    }
    if (!_0x34455e.preBookingInfo.dropoff) {
      return;
    }
    _0x202663(true);
  };
  const varData_34 = _0x356c50.useCallback(async () => {
    const varData_35 = await _0x3a72bb("guber:ui:fetchPrebookInfo");
    if (varData_35.meta.ok) {
      let varData_36 = [];
      if (varData_35.data?.pickup) {
        varData_36.push(genMapCoords("pickup", varData_35.data?.pickup));
      }
      if (varData_35.data?.dropoff) {
        varData_36.push(genMapCoords("dropoff", varData_35.data?.dropoff));
      }
      _0x55d180({
        preBookingInfo: varData_35.data,
        markers: varData_36
      });
    }
  }, []);
  const varData_37 = _0x356c50.useCallback(async () => {
    const varData_38 = await _0x3a72bb("guber:ui:fetchBookingInfo");
    if (varData_38.meta.ok) {
      _0x55d180({
        bookingInfo: varData_38.data
      });
    }
  }, []);
  _0x356c50.useEffect(() => {
    (async () => {
      await varData_34();
      await varData_37();
      await _0x5e6794.wait(500);
      _0x1c6403(false);
    })();
  }, [varData_34, varData_37]);
  return <PaneContainer title="Book Ride" className="taxi-customer-screen">{_0x618a6c && <div className="loading-container"><_0xdc7a0d color="#ffffff" /></div>}{!_0x618a6c && <_0x4fa1c8.Fragment>{_0x5dacf6 && <p className="error">{_0x5dacf6}</p>}{_0x1643eb && _0x34455e.preBookingInfo && <ConfirmRideView preBookingInfo={_0x34455e.preBookingInfo} onConfirm={() => varData_30(_0x34455e.preBookingInfo)} onCancel={() => _0x202663(false)} confirming={_0x58a16d} />}{!_0x1643eb && _0x34455e.bookingInfo && <ActiveRideView bookingInfo={_0x34455e.bookingInfo} />}{!_0x1643eb && _0x34455e.preBookingInfo && !_0x34455e.bookingInfo && <OrderRideView preBookingInfo={_0x34455e.preBookingInfo} />}{!_0x1643eb && <section className="trip-buttons">{_0x34455e.bookingInfo ? <_0x1e624f type="primary" className="active-ride-btn" onClick={() => varData_32()} loading={_0x16e87e}>Cancel Trip</_0x1e624f> : <_0x1e624f type="primary" className="btn" onClick={() => varData_33()}>Book Ride</_0x1e624f>}</section>}</_0x4fa1c8.Fragment>}</PaneContainer>;
};
const ActiveRideView = ({
  bookingInfo: _0x2c82ab
}) => {
  return <div className="customer-container"><section className="trip-status"><div className="trip-stats"><h1 className="trip-heading">Status</h1><p className="trip-subheading">{_0x2c82ab.status ?? "Unknown"}</p></div></section>{_0x2c82ab?.driver && <section className="top-details"><div className="trip-stats"><h1 className="trip-heading">Assigned Driver</h1><p className="trip-subheading">{_0x2c82ab?.driver.name}</p></div><div className="trip-stats"><h1 className="trip-heading">${_0x2c82ab?.price}</h1><p className="trip-subheading">{_0x2c82ab?.distance.toFixed(2) + "mi"}</p></div></section>}</div>;
};
const OrderRideView = ({
  preBookingInfo: _0x13fb88
}) => {
  return <div className="customer-container"><div className="form-option"><label>Pickup</label><input value={_0x13fb88.pickup?.street ?? "No pickup location..."} disabled={true} /></div><div className="form-option" style={{
      marginTop: "1rem"
    }}><label>Dropoff <span>(Mark through GPS)</span></label><input value={_0x13fb88.dropoff?.street ?? "No dropoff location..."} disabled={true} /></div></div>;
};
const index = "";
const TaxiMainScreen = () => {
  const [_0x48bac3] = _0x2e71c6(appName);
  _0x4fa1c8.useEffect(() => {
    _0x3a72bb("guber:ui:fetchTaxiInfo");
  }, []);
  return <div className="taxi-main-screen"><TaxiStatusBar />{_0x48bac3.viewType === "driver" && <TaxiDriverView />}{_0x48bac3.viewType === "customer" && <TaxiCustomerView />}<TaxiMapContainer /></div>;
};
const TaxiDriverView = () => {
  const [_0x35d5c9] = _0x2e71c6(appName);
  return <_0x4fa1c8.Fragment>{!_0x35d5c9.currentJob && _0x35d5c9.clockedIn && <SearchingRideBar rating={_0x35d5c9.rating} />}{_0x35d5c9.currentJob && _0x35d5c9.currentJob.state !== "Pending" && <ActiveRideBar currentJob={_0x35d5c9.currentJob} />}{_0x35d5c9.currentJob && _0x35d5c9.currentJob.state === "Pending" && <IncomingRideBar currentJob={_0x35d5c9.currentJob} />}</_0x4fa1c8.Fragment>;
};
const container = "";
const Container = () => {
  const [_0x44b5f9] = _0x2e71c6(appName);
  return <div className="app taxi-app">{_0x44b5f9.viewType && <TaxiMainScreen />}{!_0x44b5f9?.viewType && <TaxiIntroOverlay />}</div>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/guber.svg";
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Guber",
    name: "taxi",
    position: 100,
    events: () => events,
    render: () => <Container />
  };
};
export { config as default };