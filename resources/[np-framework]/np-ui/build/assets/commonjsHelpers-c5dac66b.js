var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  if (x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")) {
    return x.default;
  } else {
    return x;
  }
}
function getDefaultExportFromNamespaceIfPresent(n) {
  if (n && Object.prototype.hasOwnProperty.call(n, "default")) {
    return n.default;
  } else {
    return n;
  }
}
function getDefaultExportFromNamespaceIfNotNamed(n) {
  if (n && Object.prototype.hasOwnProperty.call(n, "default") && Object.keys(n).length === 1) {
    return n.default;
  } else {
    return n;
  }
}
function getAugmentedNamespace(n) {
  if (n.__esModule) {
    return n;
  }
  var f = n.default;
  if (typeof f == "function") {
    var a = function a() {
      if (this instanceof a) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f, args);
        return new Ctor();
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else {
    a = {};
  }
  Object.defineProperty(a, "__esModule", {
    value: true
  });
  Object.keys(n).forEach(function (k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function () {
        return n[k];
      }
    });
  });
  return a;
}
export { getAugmentedNamespace as a, commonjsGlobal as c, getDefaultExportFromCjs as g };