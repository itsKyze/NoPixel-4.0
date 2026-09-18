var o = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function l(e) {
  if (e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")) {
    return e.default;
  } else {
    return e;
  }
}
export { o as c, l as g };
