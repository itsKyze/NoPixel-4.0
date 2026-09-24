import { n as _0x1fc454, v as _0x4f4527, k as _0x4b1edb } from "./ui_core.js";
import _0x386178 from "./store_twatter_feed.js";
import { d as _0x558eb7, b as _0x56032f, a as _0x523de6, c as _0xaaab0a } from "./_config_phone.jsx";
const getCalendarEntries = async () => {
  const varData_1 = await _0x1fc454("np-ui:calendar:getEvents", {}, {
    returnData: _0x4f4527.getCalendarEvents()
  });
  return _0x4b1edb(param_1 => ({
    ...param_1,
    [_0x386178.key]: {
      ...param_1[_0x386178.key],
      list: varData_1.data
    }
  }))();
};
const leaveCalendarEvent = param_1 => {
  _0x558eb7(async () => {
    _0x56032f();
    await _0x1fc454("np-ui:calendar:leaveEvent", {
      id: param_1
    });
    _0x523de6();
    getCalendarEntries();
  });
};
const joinEvent = async param_1 => {
  _0x56032f();
  const varData_2 = await _0x1fc454("np-ui:calendar:joinEvent", {
    text: param_1
  });
  if (!varData_2.meta.ok) {
    _0xaaab0a(varData_2.meta.message, true);
    return;
  }
  _0x523de6();
};
const showEditEventModal = param_1 => {
  return _0x4b1edb(param_1_1 => ({
    ...param_1_1,
    [_0x386178.key]: {
      ...param_1_1[_0x386178.key],
      editEventInfo: param_1,
      showEditEventModal: true
    }
  }))();
};
export { getCalendarEntries as g, joinEvent as j, leaveCalendarEvent as l, showEditEventModal as s };