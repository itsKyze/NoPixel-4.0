var g = (d, o, i) => new Promise((b, z) => {
  var l = (n) => {
    try {
      f(i.next(n));
    } catch (x) {
      z(x);
    }
  };
  var B = (n) => {
    try {
      f(i.throw(n));
    } catch (x) {
      z(x);
    }
  };
  var f = (n) => n.done ? b(n.value) : Promise.resolve(n.value).then(l, B);
  f((i = i.apply(d, o)).next());
});
(function(d) {
  "use strict";
  const z = /* @__PURE__ */ new Map();
  function l(x, r) {
    const t = IsIplActive(x);
    z.set(x, r);
    if (r && !t) {
      RequestIpl(x);
    } else if (!r && t) {
      RemoveIpl(x);
    }
  }
  d.Events.onNet("np-ipl:setIPLStatus", (x, r) => {
    l(x, r);
  });
  d.Events.onNet("np-ipl:stateLoaded", (x) => {
    for (const [e, t] of Object.entries(x)) {
      l(e, t);
    }
  });
  const B = () => g(this, null, function* () {
    const r = yield d.Procedures.execute("np-ipl:getIPLConfigs");
    for (const e of r) {
      l(e.name, e.enabled);
    }
  });
  on("onClientResourceStart", (x) => {
    if (x === GetCurrentResourceName()) {
      B();
    }
  });
})(NPX);
