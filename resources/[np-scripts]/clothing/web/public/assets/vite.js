(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return;
  }
  for (const e of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
    i(e);
  }
  new MutationObserver(e => {
    for (const r of e) {
      if (r.type === "childList") {
        for (const o of r.addedNodes) {
          if (o.tagName === "LINK" && o.rel === "modulepreload") {
            i(o);
          }
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function s(e) {
    const r = {};
    if (e.integrity) {
      r.integrity = e.integrity;
    }
    if (e.referrerPolicy) {
      r.referrerPolicy = e.referrerPolicy;
    }
    if (e.crossOrigin === "use-credentials") {
      r.credentials = "include";
    } else if (e.crossOrigin === "anonymous") {
      r.credentials = "omit";
    } else {
      r.credentials = "same-origin";
    }
    return r;
  }
  function i(e) {
    if (e.ep) {
      return;
    }
    e.ep = true;
    const r = s(e);
    fetch(e.href, r);
  }
})();
