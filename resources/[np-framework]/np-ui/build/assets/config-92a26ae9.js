import { r as _0x1e8bbf, j as _0x390eff, av as _0xf9c718, A as _0x26c970, m as _0x967e9b, aw as _0x2da222, Y as _0x50be32, Z as _0x248346, _ as _0x5c94f5, ax as _0x535f76 } from "./vendor-69ed8822.js";
import _0x573f5c from "./store-52c39051.js";
import { G as _0x119e3e } from "./index-95666621.js";
import { I as _0x48e340, n as _0x4dade3, a as _0x1e1745, u as _0x5b9ece, O as _0x2504d2 } from "./index-dcb6474f.js";
import { g as _0x4647a4, l as _0x13274b, s as _0x58c9ee } from "./actions-1e127955.js";
import { m as _0x4be5b4, a as _0x121539, b as _0xc8044e, c as _0x5aafda } from "./_config-dc44e3da.js";
import { T as _0x1135b9 } from "./text-2b84715a.js";
import { P as _0x3e012b } from "./paper-438d2075.js";
import { B as _0xe25f3c } from "./button-b138ef6e.js";
import { D as _0x2607f7 } from "./datetime-adb6ea7b.js";
import { F as _0x5b21eb } from "./input-67b043ed.js";
import { S as _0x570f7b } from "./simple-form-10871a3d.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
import "./ui-app-b5e34f38.js";
import "./store-8a444d41.js";
import "./date-31836fe8.js";
import "./styles-c7d7714e.js";
import "./index-6dbd65c5.js";
const index$5 = "";
const CalendarContainer = param_1 => {
  const [_0x26eecd, _0x2f8e31] = _0x1e8bbf.useState();
  const varData_1 = param_1_1 => {
    _0x2f8e31(param_1_1);
    param_1.changeSelectedDate(param_1_1);
  };
  return <div className="calendar-container"><_0xf9c718 pagedNavigation={true} mode="single" selected={_0x26eecd} onSelect={varData_1} modifiersClassNames={{
      selected: "calendar-selected"
    }} /></div>;
};
const index$4 = "";
const CalendarCheckBox = ({
  checked: _0x4559ef,
  onChange: _0x13e50f
}) => {
  return <div className="checkbox" onClick={() => _0x13e50f(!_0x4559ef)}>{_0x4559ef && <div className="checked" />}</div>;
};
const index$3 = "";
const GenericAppModal = ({
  show: _0x3e9f6b,
  title: _0x36f9b3,
  onSubmit: _0x45e66c,
  onCancel: _0x52abb6,
  children: _0x5265f,
  loading: _0x776040,
  error: _0x53b416,
  ..._0x59916e
}) => {
  const varData_2 = {
    transform: "translateY(0%)"
  };
  const varData_3 = {
    transform: "translateY(200%)"
  };
  return <_0x26c970>{_0x3e9f6b && <_0x967e9b.div className="generic-app-modal" initial={varData_3} animate={varData_2} exit={varData_3}><h1>{_0x36f9b3}</h1>{_0x776040 && <div className="loading-container"><_0x2da222 size={60} style={{
          color: "#4dc3a5"
        }} /></div>}{!_0x776040 && <_0x390eff.Fragment>{_0x53b416 && <p className="error">{_0x53b416}</p>}<div className="content-container" {..._0x59916e}>{_0x5265f}</div><div className="actions-container"><button className="btn add-btn" onClick={_0x45e66c}>Submit <_0x48e340 icon="fas fa-angle-right" /></button><button className="btn cancel-btn" onClick={_0x52abb6}>Cancel <_0x48e340 icon="fas fa-times" /></button></div></_0x390eff.Fragment>}</_0x967e9b.div>}</_0x26c970>;
};
const index$2 = "";
const INPUT_LIMITS = {
  name: 45,
  location: 45,
  description: 100
};
const CreateEventForm = param_1 => {
  const [_0x2c4c98, _0x4db6c8] = _0x1e8bbf.useState("");
  const [_0xf8b930, _0x37425a] = _0x1e8bbf.useState(false);
  const [_0x5104ae, _0x234584] = _0x1e8bbf.useState({
    name: param_1.info?.name ?? "",
    location: param_1.info?.location ?? "",
    date: param_1.info?.timestamp ?? /* @__PURE__ */new Date(),
    shareable: param_1.info?.shareable ?? false,
    description: param_1.info?.description ?? ""
  });
  const varData_4 = param_1_1 => {
    const varData_5 = param_1_1.target.name;
    const varData_6 = param_1_1.target.type;
    const varData_7 = varData_6 === "checkbox" ? param_1_1.target.checked : param_1_1.target.value;
    if (INPUT_LIMITS[varData_5] && varData_7.length >= INPUT_LIMITS[varData_5]) {
      return;
    }
    _0x234584(param_1_2 => ({
      ...param_1_2,
      [varData_5]: varData_7
    }));
  };
  const varData_8 = (param_1_1, param_2) => {
    _0x234584(param_1_2 => ({
      ...param_1_2,
      [param_1_1]: param_2
    }));
  };
  const varData_9 = async () => {
    _0x37425a(true);
    const varData_10 = _0x5104ae.date ? new Date(_0x5104ae.date) : /* @__PURE__ */new Date();
    const varData_11 = param_1.edit ? "np-ui:calendar:editEvent" : "np-ui:calendar:createEvent";
    const varData_12 = await _0x4dade3(varData_11, {
      ..._0x5104ae,
      id: param_1.info?.id,
      date: varData_10.getTime()
    });
    _0x37425a(false);
    if (!varData_12.meta.ok) {
      _0x4db6c8(varData_12.meta.message);
    } else {
      _0x4647a4();
      param_1.onClose();
    }
  };
  return <GenericAppModal loading={_0xf8b930} title={param_1.edit ? "Edit Event" : "Event Creating"} error={_0x2c4c98} className="create-event-modal" show={param_1.show} onCancel={param_1.onClose} onSubmit={varData_9}><div className="input-container"><div className="icon-container"><_0x48e340 className="icon" icon="pencil-alt" /></div><input className="text-input" value={_0x5104ae.name} type="text" placeholder="Event name" name="name" onChange={varData_4} /></div><div className="input-container"><div className="icon-container"><_0x48e340 className="icon" icon="map-marker-alt" /></div><input className="text-input" value={_0x5104ae.location} type="text" placeholder="Location" name="location" onChange={varData_4} /></div><div className="input-container"><div className="icon-container"><_0x48e340 className="icon" icon="clock" /></div><_0x50be32 utils={_0x248346}><_0x5c94f5 autoOk={true} disableToolbar={true} className="date-input" variant="inline" format="MM/dd/yyyy" margin="normal" value={_0x5104ae.date} onChange={param_1_1 => varData_8("date", param_1_1)} /></_0x50be32></div><div className="input-container"><div className="icon-container"><_0x48e340 className="icon" icon="share-square" /></div><div className="checkbox-input">Shareable<CalendarCheckBox checked={_0x5104ae.shareable} onChange={param_1_1 => varData_8("shareable", param_1_1)} /></div></div><textarea className="text-area-input" value={_0x5104ae.description} placeholder="Event Description" name="description" onChange={varData_4} /></GenericAppModal>;
};
const index$1 = "";
const EventItem = param_1 => {
  const varData_13 = [{
    icon: "paragraph",
    text: param_1.info.description,
    tooltip: "Description"
  }, {
    icon: "map-marker",
    text: param_1.info.location,
    tooltip: "Location"
  }, {
    icon: "user-cog",
    text: param_1.info.host,
    tooltip: "Host"
  }, {
    icon: "users",
    text: param_1.info.attendees,
    tooltip: "Attendees"
  }];
  if (param_1.info.code) {
    varData_13.push({
      icon: "file-signature",
      text: param_1.info.code,
      tooltip: "Join Code"
    });
  }
  const varData_14 = param_1_1 => {
    _0x4be5b4(<_0x570f7b elements={[{
      name: "stateId",
      render: ({
        onChange: _0x3ef280,
        value: _0x514355
      }) => <_0x5b21eb.CityID onChange={_0x3ef280} value={_0x514355} />
    }]} onCancel={() => _0x121539(false)} onSubmit={async ({
      stateId: _0x32694b
    }) => {
      _0xc8044e();
      const varData_15 = await _0x4dade3(param_1_1.force ? "np-ui:calendar:forceAddEvent" : "np-ui:calendar:sendInvite", {
        id: param_1_1.id,
        text: _0x32694b
      });
      if (!varData_15.meta.ok) {
        _0x5aafda(varData_15.meta.message);
        return;
      }
      _0x121539();
    }} />);
  };
  const varData_16 = param_1_1 => {
    const varData_17 = "Check out this event! " + param_1_1.name + " " + (param_1_1.shareable ? "{{c:" + param_1_1.code + "}}" : "") + " via Calendar";
    _0x4be5b4(<_0x570f7b defaultValues={{
      twat: varData_17
    }} elements={[{
      name: "twat",
      render: ({
        onChange: _0x4ccdaa,
        value: _0x1c19d2
      }) => <_0x5b21eb.TextArea helperText={(_0x1c19d2 ? _0x1c19d2.length : varData_17 ? varData_17.length : 0) + " / 255"} label="Twat" icon="twitter" onChange={param_1_2 => param_1_2.length < 256 ? _0x4ccdaa(param_1_2) : () => {}} value={_0x1c19d2} />,
      validate: ["text", "Twat"]
    }]} onCancel={() => _0x121539(false)} onSubmit={async ({
      twat: _0x71b54f
    }) => {
      _0xc8044e();
      await _0x4dade3("np-ui:twatSend", {
        text: _0x71b54f
      });
      _0x121539();
    }} />);
  };
  return <_0x3e012b className="event-item" drawer={<_0x3e012b.Drawer items={varData_13}><div className="event-actions"><_0xe25f3c.Secondary className="btn" onClick={_0x13274b}>Leave</_0xe25f3c.Secondary>{param_1.info.host === param_1.characterName && <_0x390eff.Fragment><_0xe25f3c.Secondary className="btn" onClick={() => varData_14({
          ...param_1.info,
          force: false
        })}>Invite</_0xe25f3c.Secondary><_0xe25f3c.Secondary className="btn" onClick={() => _0x58c9ee(param_1.info)}>Edit</_0xe25f3c.Secondary>{param_1.characterJob === "judge" && <_0x390eff.Fragment><hr /><_0xe25f3c.Secondary className="btn" onClick={() => varData_14({
            ...param_1.info,
            force: true
          })}>Force Add</_0xe25f3c.Secondary></_0x390eff.Fragment>}<hr /></_0x390eff.Fragment>}{!!param_1.info.shareable && <_0xe25f3c.Secondary className="btn" onClick={() => varData_16(param_1.info)}>Share</_0xe25f3c.Secondary>}</div></_0x3e012b.Drawer>}><_0x3e012b.Details title={<_0x390eff.Fragment><_0x1135b9 variant="body2" style={{
        color: "#FFF"
      }}>{param_1.info.name}</_0x1135b9><_0x2607f7 timestamp={param_1.info.timestamp / 1000} typeface="body2" timezone={new window.Intl.DateTimeFormat().resolvedOptions().timeZone} textStyle={{
        color: "rgba(255, 255, 255, 0.55)"
      }} /></_0x390eff.Fragment>} /></_0x3e012b>;
};
const index = "";
const CalendarApp = () => {
  const {
    state: _0x2ca9d8
  } = _0x1e1745();
  const [_0x1a1012, _0x375eef] = _0x5b9ece(_0x573f5c.key);
  const [_0x4de4e1, _0x644af6] = _0x1e8bbf.useState(/* @__PURE__ */new Date());
  const varData_18 = param_1 => {
    _0x644af6(param_1);
  };
  const varData_19 = _0x1e8bbf.useMemo(() => {
    const varData_20 = _0x1a1012.list.filter(param_1 => _0x535f76(new Date(param_1.timestamp), _0x4de4e1));
    return varData_20;
  }, [_0x4de4e1]);
  const varData_21 = _0x1e8bbf.useMemo(() => {
    const varData_22 = /* @__PURE__ */new Date();
    const varData_23 = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    };
    return {
      day: varData_22.toLocaleString("en-us", {
        weekday: "long"
      }),
      date: varData_22.toLocaleString("en-US", varData_23)
    };
  }, []);
  _0x1e8bbf.useEffect(() => {
    _0x4647a4();
  }, []);
  return <div className="app calendar-app"><div className="calendar-wrapper"><_0x119e3e title="Calendar" /><div className="hero-container"><div className="hero-wrapper"><h1 className="title">{varData_21.day}</h1><p className="date">{varData_21.date}</p><p className="holiday">Schedule your business/personal events</p></div><div className="create-btn" onClick={() => _0x375eef({
          showCreateEventModal: true
        })}><div className="inner"><_0x48e340 icon="plus" /></div></div></div><CalendarContainer list={varData_19} changeSelectedDate={varData_18} /><_0x2504d2 when={_0x2ca9d8.character}>{param_1 => <_0x390eff.Fragment>{_0x1a1012.list.length > 0 && <div className="events-list-container"><h1 className="header">Upcoming Events</h1><ul className="event-list">{_0x1a1012.list.map(param_1_1 => <EventItem info={param_1_1} characterName={param_1.first_name + " " + param_1.last_name} characterJob={param_1.job} key={param_1_1.id} />)}</ul></div>}</_0x390eff.Fragment>}</_0x2504d2></div><CreateEventForm edit={false} show={_0x1a1012.showCreateEventModal} onClose={() => _0x375eef({
      showCreateEventModal: false
    })} />{_0x1a1012.editEventInfo && <CreateEventForm edit={true} show={_0x1a1012.showEditEventModal} info={_0x1a1012.editEventInfo} onClose={() => _0x375eef({
      showEditEventModal: false,
      editEventInfo: undefined
    })} />}</div>;
};
const myIcon = "https://assets.nopixel.net/dev/images/phone/icons/calendar.svg";
const icon = {
  background: "#171717",
  color: "white",
  name: "calendar-alt"
};
const config = param_1 => {
  return {
    ...param_1,
    iconPng: myIcon,
    label: "Calendar",
    name: "calendar",
    position: 66,
    render: () => <CalendarApp />
  };
};
export { config as default, icon };