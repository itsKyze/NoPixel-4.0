(() => {
  var varData_1 = {
    179: param_1 => {
      var varData_2 = function () {
        'use strict';

        function handleAction_1(param_1_1, param_2) {
          return param_2 != null && param_1_1 instanceof param_2;
        }
        var varData_3;
        try {
          varData_3 = Map;
        } catch (err) {
          varData_3 = function () {};
        }
        var varData_4;
        try {
          varData_4 = Set;
        } catch (err) {
          varData_4 = function () {};
        }
        var varData_5;
        try {
          varData_5 = Promise;
        } catch (err) {
          varData_5 = function () {};
        }
        function handleAction_2(param_1_1, param_2, param_3, param_4, param_5) {
          if (typeof param_2 === "object") {
            param_3 = param_2.depth;
            param_4 = param_2.prototype;
            param_5 = param_2.includeNonEnumerable;
            param_2 = param_2.circular;
          }
          var varData_6 = [];
          var varData_7 = [];
          var varData_8 = typeof Buffer != "undefined";
          if (typeof param_2 == "undefined") {
            param_2 = true;
          }
          if (typeof param_3 == "undefined") {
            param_3 = Infinity;
          }
          function handleAction_3(param_1_2, param_2_1) {
            if (param_1_2 === null) {
              return null;
            }
            if (param_2_1 === 0) {
              return param_1_2;
            }
            var varData_9;
            var varData_10;
            if (typeof param_1_2 != "object") {
              return param_1_2;
            }
            if (handleAction_1(param_1_2, varData_3)) {
              varData_9 = new varData_3();
            } else if (handleAction_1(param_1_2, varData_4)) {
              varData_9 = new varData_4();
            } else if (handleAction_1(param_1_2, varData_5)) {
              varData_9 = new varData_5(function (param_1_3, param_2_2) {
                param_1_2.then(function (param_1_4) {
                  param_1_3(handleAction_3(param_1_4, param_2_1 - 1));
                }, function (param_1_4) {
                  param_2_2(handleAction_3(param_1_4, param_2_1 - 1));
                });
              });
            } else if (handleAction_2.__isArray(param_1_2)) {
              varData_9 = [];
            } else if (handleAction_2.__isRegExp(param_1_2)) {
              varData_9 = new RegExp(param_1_2.source, handleAction_9(param_1_2));
              if (param_1_2.lastIndex) {
                varData_9.lastIndex = param_1_2.lastIndex;
              }
            } else if (handleAction_2.__isDate(param_1_2)) {
              varData_9 = new Date(param_1_2.getTime());
            } else if (varData_8 && Buffer.isBuffer(param_1_2)) {
              if (Buffer.allocUnsafe) {
                varData_9 = Buffer.allocUnsafe(param_1_2.length);
              } else {
                varData_9 = new Buffer(param_1_2.length);
              }
              param_1_2.copy(varData_9);
              return varData_9;
            } else if (handleAction_1(param_1_2, Error)) {
              varData_9 = Object.create(param_1_2);
            } else if (typeof param_4 == "undefined") {
              varData_10 = Object.getPrototypeOf(param_1_2);
              varData_9 = Object.create(varData_10);
            } else {
              varData_9 = Object.create(param_4);
              varData_10 = param_4;
            }
            if (param_2) {
              var varData_11 = varData_6.indexOf(param_1_2);
              if (varData_11 != -1) {
                return varData_7[varData_11];
              }
              varData_6.push(param_1_2);
              varData_7.push(varData_9);
            }
            if (handleAction_1(param_1_2, varData_3)) {
              param_1_2.forEach(function (param_1_3, param_2_2) {
                var varData_12 = handleAction_3(param_2_2, param_2_1 - 1);
                var varData_13 = handleAction_3(param_1_3, param_2_1 - 1);
                varData_9.set(varData_12, varData_13);
              });
            }
            if (handleAction_1(param_1_2, varData_4)) {
              param_1_2.forEach(function (param_1_3) {
                var varData_14 = handleAction_3(param_1_3, param_2_1 - 1);
                varData_9.add(varData_14);
              });
            }
            for (var varData_15 in param_1_2) {
              var varData_16;
              if (varData_10) {
                varData_16 = Object.getOwnPropertyDescriptor(varData_10, varData_15);
              }
              if (varData_16 && varData_16.set == null) {
                continue;
              }
              varData_9[varData_15] = handleAction_3(param_1_2[varData_15], param_2_1 - 1);
            }
            if (Object.getOwnPropertySymbols) {
              var varData_17 = Object.getOwnPropertySymbols(param_1_2);
              for (var varData_15 = 0; varData_15 < varData_17.length; varData_15++) {
                var varData_18 = varData_17[varData_15];
                var varData_19 = Object.getOwnPropertyDescriptor(param_1_2, varData_18);
                if (varData_19 && !varData_19.enumerable && !param_5) {
                  continue;
                }
                varData_9[varData_18] = handleAction_3(param_1_2[varData_18], param_2_1 - 1);
                if (!varData_19.enumerable) {
                  var varData_20 = {
                    enumerable: false
                  };
                  Object.defineProperty(varData_9, varData_18, varData_20);
                }
              }
            }
            if (param_5) {
              var varData_21 = Object.getOwnPropertyNames(param_1_2);
              for (var varData_15 = 0; varData_15 < varData_21.length; varData_15++) {
                var varData_22 = varData_21[varData_15];
                var varData_19 = Object.getOwnPropertyDescriptor(param_1_2, varData_22);
                if (varData_19 && varData_19.enumerable) {
                  continue;
                }
                varData_9[varData_22] = handleAction_3(param_1_2[varData_22], param_2_1 - 1);
                var varData_23 = {
                  enumerable: false
                };
                Object.defineProperty(varData_9, varData_22, varData_23);
              }
            }
            return varData_9;
          }
          return handleAction_3(param_1_1, param_3);
        }
        handleAction_2.clonePrototype = function _0x4f923e(param_1_1) {
          if (param_1_1 === null) {
            return null;
          }
          function handleAction_4() {}
          handleAction_4.prototype = param_1_1;
          return new handleAction_4();
        };
        function handleAction_5(param_1_1) {
          return Object.prototype.toString.call(param_1_1);
        }
        handleAction_2.__objToStr = handleAction_5;
        function handleAction_6(param_1_1) {
          return typeof param_1_1 === "object" && handleAction_5(param_1_1) === "[object Date]";
        }
        handleAction_2.__isDate = handleAction_6;
        function handleAction_7(param_1_1) {
          return typeof param_1_1 === "object" && handleAction_5(param_1_1) === "[object Array]";
        }
        handleAction_2.__isArray = handleAction_7;
        function handleAction_8(param_1_1) {
          return typeof param_1_1 === "object" && handleAction_5(param_1_1) === "[object RegExp]";
        }
        handleAction_2.__isRegExp = handleAction_8;
        function handleAction_9(param_1_1) {
          var varData_24 = "";
          if (param_1_1.global) {
            varData_24 += "g";
          }
          if (param_1_1.ignoreCase) {
            varData_24 += "i";
          }
          if (param_1_1.multiline) {
            varData_24 += "m";
          }
          return varData_24;
        }
        handleAction_2.__getRegExpFlags = handleAction_9;
        return handleAction_2;
      }();
      if (true && param_1.exports) {
        param_1.exports = varData_2;
      }
    },
    571: param_1 => {
      'use strict';

      var varData_25 = typeof Reflect === "object" ? Reflect : null;
      var varData_26 = varData_25 && typeof varData_25.apply === "function" ? varData_25.apply : function _0x17c8d1(param_1_1, param_2, param_3) {
        return Function.prototype.apply.call(param_1_1, param_2, param_3);
      };
      var varData_27;
      if (varData_25 && typeof varData_25.ownKeys === "function") {
        varData_27 = varData_25.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        varData_27 = function _0x4c37ae(param_1_1) {
          return Object.getOwnPropertyNames(param_1_1).concat(Object.getOwnPropertySymbols(param_1_1));
        };
      } else {
        varData_27 = function _0xa7feb1(param_1_1) {
          return Object.getOwnPropertyNames(param_1_1);
        };
      }
      function handleAction_10(param_1_1) {
        if (console && console.warn) {
          console.warn(param_1_1);
        }
      }
      var varData_28 = Number.isNaN || function _0x50ad82(param_1_1) {
        return param_1_1 !== param_1_1;
      };
      function handleAction_11() {
        handleAction_11.init.call(this);
      }
      param_1.exports = handleAction_11;
      param_1.exports.once = handleAction_22;
      handleAction_11.EventEmitter = handleAction_11;
      handleAction_11.prototype._events = undefined;
      handleAction_11.prototype._eventsCount = 0;
      handleAction_11.prototype._maxListeners = undefined;
      var varData_29 = 10;
      function handleAction_12(param_1_1) {
        if (typeof param_1_1 !== "function") {
          throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof param_1_1);
        }
      }
      Object.defineProperty(handleAction_11, "defaultMaxListeners", {
        enumerable: true,
        get: function () {
          return varData_29;
        },
        set: function (param_1_1) {
          if (typeof param_1_1 !== "number" || param_1_1 < 0 || varData_28(param_1_1)) {
            throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + param_1_1 + ".");
          }
          varData_29 = param_1_1;
        }
      });
      handleAction_11.init = function () {
        if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || undefined;
      };
      handleAction_11.prototype.setMaxListeners = function _0x27e79f(param_1_1) {
        if (typeof param_1_1 !== "number" || param_1_1 < 0 || varData_28(param_1_1)) {
          throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + param_1_1 + ".");
        }
        this._maxListeners = param_1_1;
        return this;
      };
      function handleAction_13(param_1_1) {
        if (param_1_1._maxListeners === undefined) {
          return handleAction_11.defaultMaxListeners;
        }
        return param_1_1._maxListeners;
      }
      handleAction_11.prototype.getMaxListeners = function _0x46c14a() {
        return handleAction_13(this);
      };
      handleAction_11.prototype.emit = function _0x84775f(param_1_1) {
        var varData_30 = [];
        for (var loopIdx = 1; loopIdx < arguments.length; loopIdx++) {
          varData_30.push(arguments[loopIdx]);
        }
        var varData_31 = param_1_1 === "error";
        var varData_32 = this._events;
        if (varData_32 !== undefined) {
          varData_31 = varData_31 && varData_32.error === undefined;
        } else if (!varData_31) {
          return false;
        }
        if (varData_31) {
          var varData_33;
          if (varData_30.length > 0) {
            varData_33 = varData_30[0];
          }
          if (varData_33 instanceof Error) {
            throw varData_33;
          }
          var varData_34 = new Error("Unhandled error." + (varData_33 ? " (" + varData_33.message + ")" : ""));
          varData_34.context = varData_33;
          throw varData_34;
        }
        var varData_35 = varData_32[param_1_1];
        if (varData_35 === undefined) {
          return false;
        }
        if (typeof varData_35 === "function") {
          varData_26(varData_35, this, varData_30);
        } else {
          var varData_36 = varData_35.length;
          var varData_37 = handleAction_19(varData_35, varData_36);
          for (var loopIdx = 0; loopIdx < varData_36; ++loopIdx) {
            varData_26(varData_37[loopIdx], this, varData_30);
          }
        }
        return true;
      };
      function handleAction_14(param_1_1, param_2, param_3, param_4) {
        var varData_38;
        var varData_39;
        var varData_40;
        handleAction_12(param_3);
        varData_39 = param_1_1._events;
        if (varData_39 === undefined) {
          varData_39 = param_1_1._events = Object.create(null);
          param_1_1._eventsCount = 0;
        } else {
          if (varData_39.newListener !== undefined) {
            param_1_1.emit("newListener", param_2, param_3.listener ? param_3.listener : param_3);
            varData_39 = param_1_1._events;
          }
          varData_40 = varData_39[param_2];
        }
        if (varData_40 === undefined) {
          varData_40 = varData_39[param_2] = param_3;
          ++param_1_1._eventsCount;
        } else {
          if (typeof varData_40 === "function") {
            varData_40 = varData_39[param_2] = param_4 ? [param_3, varData_40] : [varData_40, param_3];
          } else if (param_4) {
            varData_40.unshift(param_3);
          } else {
            varData_40.push(param_3);
          }
          varData_38 = handleAction_13(param_1_1);
          if (varData_38 > 0 && varData_40.length > varData_38 && !varData_40.warned) {
            varData_40.warned = true;
            var varData_41 = new Error("Possible EventEmitter memory leak detected. " + varData_40.length + " " + String(param_2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            varData_41.name = "MaxListenersExceededWarning";
            varData_41.emitter = param_1_1;
            varData_41.type = param_2;
            varData_41.count = varData_40.length;
            handleAction_10(varData_41);
          }
        }
        return param_1_1;
      }
      handleAction_11.prototype.addListener = function _0x4a9dad(param_1_1, param_2) {
        return handleAction_14(this, param_1_1, param_2, false);
      };
      handleAction_11.prototype.on = handleAction_11.prototype.addListener;
      handleAction_11.prototype.prependListener = function _0x24e96a(param_1_1, param_2) {
        return handleAction_14(this, param_1_1, param_2, true);
      };
      function handleAction_15() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0) {
            return this.listener.call(this.target);
          }
          return this.listener.apply(this.target, arguments);
        }
      }
      function handleAction_16(param_1_1, param_2, param_3) {
        var varData_42 = {
          fired: false,
          wrapFn: undefined,
          target: param_1_1,
          type: param_2,
          listener: param_3
        };
        var varData_43 = varData_42;
        var varData_44 = handleAction_15.bind(varData_43);
        varData_44.listener = param_3;
        varData_43.wrapFn = varData_44;
        return varData_44;
      }
      handleAction_11.prototype.once = function _0x54334e(param_1_1, param_2) {
        handleAction_12(param_2);
        this.on(param_1_1, handleAction_16(this, param_1_1, param_2));
        return this;
      };
      handleAction_11.prototype.prependOnceListener = function _0x6569c8(param_1_1, param_2) {
        handleAction_12(param_2);
        this.prependListener(param_1_1, handleAction_16(this, param_1_1, param_2));
        return this;
      };
      handleAction_11.prototype.removeListener = function _0x16ce2a(param_1_1, param_2) {
        var varData_45;
        var varData_46;
        var varData_47;
        var varData_48;
        var varData_49;
        handleAction_12(param_2);
        varData_46 = this._events;
        if (varData_46 === undefined) {
          return this;
        }
        varData_45 = varData_46[param_1_1];
        if (varData_45 === undefined) {
          return this;
        }
        if (varData_45 === param_2 || varData_45.listener === param_2) {
          if (--this._eventsCount === 0) {
            this._events = Object.create(null);
          } else {
            delete varData_46[param_1_1];
            if (varData_46.removeListener) {
              this.emit("removeListener", param_1_1, varData_45.listener || param_2);
            }
          }
        } else if (typeof varData_45 !== "function") {
          varData_47 = -1;
          for (varData_48 = varData_45.length - 1; varData_48 >= 0; varData_48--) {
            if (varData_45[varData_48] === param_2 || varData_45[varData_48].listener === param_2) {
              varData_49 = varData_45[varData_48].listener;
              varData_47 = varData_48;
              break;
            }
          }
          if (varData_47 < 0) {
            return this;
          }
          if (varData_47 === 0) {
            varData_45.shift();
          } else {
            handleAction_20(varData_45, varData_47);
          }
          if (varData_45.length === 1) {
            varData_46[param_1_1] = varData_45[0];
          }
          if (varData_46.removeListener !== undefined) {
            this.emit("removeListener", param_1_1, varData_49 || param_2);
          }
        }
        return this;
      };
      handleAction_11.prototype.off = handleAction_11.prototype.removeListener;
      handleAction_11.prototype.removeAllListeners = function _0x2d607b(param_1_1) {
        var varData_50;
        var varData_51;
        var varData_52;
        varData_51 = this._events;
        if (varData_51 === undefined) {
          return this;
        }
        if (varData_51.removeListener === undefined) {
          if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          } else if (varData_51[param_1_1] !== undefined) {
            if (--this._eventsCount === 0) {
              this._events = Object.create(null);
            } else {
              delete varData_51[param_1_1];
            }
          }
          return this;
        }
        if (arguments.length === 0) {
          var keysList = Object.keys(varData_51);
          var varData_53;
          for (varData_52 = 0; varData_52 < keysList.length; ++varData_52) {
            varData_53 = keysList[varData_52];
            if (varData_53 === "removeListener") {
              continue;
            }
            this.removeAllListeners(varData_53);
          }
          this.removeAllListeners("removeListener");
          this._events = Object.create(null);
          this._eventsCount = 0;
          return this;
        }
        varData_50 = varData_51[param_1_1];
        if (typeof varData_50 === "function") {
          this.removeListener(param_1_1, varData_50);
        } else if (varData_50 !== undefined) {
          for (varData_52 = varData_50.length - 1; varData_52 >= 0; varData_52--) {
            this.removeListener(param_1_1, varData_50[varData_52]);
          }
        }
        return this;
      };
      function handleAction_17(param_1_1, param_2, param_3) {
        var varData_54 = param_1_1._events;
        if (varData_54 === undefined) {
          return [];
        }
        var varData_55 = varData_54[param_2];
        if (varData_55 === undefined) {
          return [];
        }
        if (typeof varData_55 === "function") {
          if (param_3) {
            return [varData_55.listener || varData_55];
          } else {
            return [varData_55];
          }
        }
        if (param_3) {
          return handleAction_21(varData_55);
        } else {
          return handleAction_19(varData_55, varData_55.length);
        }
      }
      handleAction_11.prototype.listeners = function _0x32bd8c(param_1_1) {
        return handleAction_17(this, param_1_1, true);
      };
      handleAction_11.prototype.rawListeners = function _0x37efa3(param_1_1) {
        return handleAction_17(this, param_1_1, false);
      };
      handleAction_11.listenerCount = function (param_1_1, param_2) {
        if (typeof param_1_1.listenerCount === "function") {
          return param_1_1.listenerCount(param_2);
        } else {
          return handleAction_18.call(param_1_1, param_2);
        }
      };
      handleAction_11.prototype.listenerCount = handleAction_18;
      function handleAction_18(param_1_1) {
        var varData_56 = this._events;
        if (varData_56 !== undefined) {
          var varData_57 = varData_56[param_1_1];
          if (typeof varData_57 === "function") {
            return 1;
          } else if (varData_57 !== undefined) {
            return varData_57.length;
          }
        }
        return 0;
      }
      handleAction_11.prototype.eventNames = function _0x31f19d() {
        if (this._eventsCount > 0) {
          return varData_27(this._events);
        } else {
          return [];
        }
      };
      function handleAction_19(param_1_1, param_2) {
        var varData_58 = new Array(param_2);
        for (var loopIdx = 0; loopIdx < param_2; ++loopIdx) {
          varData_58[loopIdx] = param_1_1[loopIdx];
        }
        return varData_58;
      }
      function handleAction_20(param_1_1, param_2) {
        for (; param_2 + 1 < param_1_1.length; param_2++) {
          param_1_1[param_2] = param_1_1[param_2 + 1];
        }
        param_1_1.pop();
      }
      function handleAction_21(param_1_1) {
        var varData_59 = new Array(param_1_1.length);
        for (var loopIdx = 0; loopIdx < varData_59.length; ++loopIdx) {
          varData_59[loopIdx] = param_1_1[loopIdx].listener || param_1_1[loopIdx];
        }
        return varData_59;
      }
      function handleAction_22(param_1_1, param_2) {
        return new Promise(function (param_1_2, param_2_1) {
          function handleAction_23(param_1_3) {
            param_1_1.removeListener(param_2, handleAction_24);
            param_2_1(param_1_3);
          }
          function handleAction_24() {
            if (typeof param_1_1.removeListener === "function") {
              param_1_1.removeListener("error", handleAction_23);
            }
            param_1_2([].slice.call(arguments));
          }
          ;
          handleAction_26(param_1_1, param_2, handleAction_24, {
            once: true
          });
          if (param_2 !== "error") {
            handleAction_25(param_1_1, handleAction_23, {
              once: true
            });
          }
        });
      }
      function handleAction_25(param_1_1, param_2, param_3) {
        if (typeof param_1_1.on === "function") {
          handleAction_26(param_1_1, "error", param_2, param_3);
        }
      }
      function handleAction_26(param_1_1, param_2, param_3, param_4) {
        if (typeof param_1_1.on === "function") {
          if (param_4.once) {
            param_1_1.once(param_2, param_3);
          } else {
            param_1_1.on(param_2, param_3);
          }
        } else if (typeof param_1_1.addEventListener === "function") {
          param_1_1.addEventListener(param_2, function _0x5701ba(param_1_2) {
            if (param_4.once) {
              param_1_1.removeEventListener(param_2, _0x5701ba);
            }
            param_3(param_1_2);
          });
        } else {
          throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof param_1_1);
        }
      }
    },
    304: function (param_1, param_2, param_3) {
      (function () {
        var varData_60;
        varData_60 = param_1.exports = param_3(180);
        varData_60.version = "5.1.2";
      }).call(this);
    },
    180: function (param_1, param_2, param_3) {
      (function () {
        var varData_61;
        var varData_62;
        var varData_63;
        var varData_64 = [].splice;
        function handleAction_27(param_1_1, param_2_1) {
          if (!(param_1_1 instanceof param_2_1)) {
            throw new Error("Bound instance method accessed before binding");
          }
        }
        var varData_65 = [].indexOf;
        varData_63 = param_3(179);
        varData_61 = param_3(571).EventEmitter;
        param_1.exports = varData_62 = function () {
          class _0x736aed extends varData_61 {
            constructor(_0x1c48e3 = {}) {
              super();
              this.get = this.get.bind(this);
              this.mget = this.mget.bind(this);
              this.set = this.set.bind(this);
              this.mset = this.mset.bind(this);
              this.del = this.del.bind(this);
              this.take = this.take.bind(this);
              this.ttl = this.ttl.bind(this);
              this.getTtl = this.getTtl.bind(this);
              this.keys = this.keys.bind(this);
              this.has = this.has.bind(this);
              this.getStats = this.getStats.bind(this);
              this.flushAll = this.flushAll.bind(this);
              this.flushStats = this.flushStats.bind(this);
              this.close = this.close.bind(this);
              this._checkData = this._checkData.bind(this);
              this._check = this._check.bind(this);
              this._isInvalidKey = this._isInvalidKey.bind(this);
              this._wrap = this._wrap.bind(this);
              this._getValLength = this._getValLength.bind(this);
              this._error = this._error.bind(this);
              this._initErrors = this._initErrors.bind(this);
              this.options = _0x1c48e3;
              this._initErrors();
              this.data = {};
              var varData_66 = {
                forceString: false,
                objectValueSize: 80,
                promiseValueSize: 80,
                arrayValueSize: 40,
                stdTTL: 0,
                checkperiod: 600,
                useClones: true,
                deleteOnExpire: true,
                enableLegacyCallbacks: false,
                maxKeys: -1
              };
              this.options = Object.assign(varData_66, this.options);
              if (this.options.enableLegacyCallbacks) {
                console.warn("WARNING! node-cache legacy callback support will drop in v6.x");
                ["get", "mget", "set", "del", "ttl", "getTtl", "keys", "has"].forEach(param_1_1 => {
                  var varData_67;
                  varData_67 = this[param_1_1];
                  this[param_1_1] = function (..._0x1f67c9) {
                    var varData_68;
                    var varData_69;
                    var varData_70;
                    var varData_71;
                    varData_70 = _0x1f67c9;
                    [..._0x1f67c9] = varData_70;
                    [varData_68] = varData_64.call(_0x1f67c9, -1);
                    if (typeof varData_68 === "function") {
                      try {
                        varData_71 = varData_67(..._0x1f67c9);
                        varData_68(null, varData_71);
                      } catch (err) {
                        varData_69 = err;
                        varData_68(varData_69);
                      }
                    } else {
                      return varData_67(..._0x1f67c9, varData_68);
                    }
                  };
                });
              }
              this.stats = {
                hits: 0,
                misses: 0,
                keys: 0,
                ksize: 0,
                vsize: 0
              };
              this.validKeyTypes = ["string", "number"];
              this._checkData();
              return;
            }
            get(param_1_1) {
              var varData_72;
              var varData_73;
              handleAction_27(this, _0x736aed);
              if ((varData_73 = this._isInvalidKey(param_1_1)) != null) {
                throw varData_73;
              }
              if (this.data[param_1_1] != null && this._check(param_1_1, this.data[param_1_1])) {
                this.stats.hits++;
                varData_72 = this._unwrap(this.data[param_1_1]);
                return varData_72;
              } else {
                this.stats.misses++;
                return undefined;
              }
            }
            mget(param_1_1) {
              var varData_74;
              var varData_75;
              var varData_76;
              var varData_77;
              var varData_78;
              var varData_79;
              handleAction_27(this, _0x736aed);
              if (!Array.isArray(param_1_1)) {
                varData_74 = this._error("EKEYSTYPE");
                throw varData_74;
              }
              varData_79 = {};
              varData_76 = 0;
              varData_78 = param_1_1.length;
              for (; varData_76 < varData_78; varData_76++) {
                varData_77 = param_1_1[varData_76];
                if ((varData_75 = this._isInvalidKey(varData_77)) != null) {
                  throw varData_75;
                }
                if (this.data[varData_77] != null && this._check(varData_77, this.data[varData_77])) {
                  this.stats.hits++;
                  varData_79[varData_77] = this._unwrap(this.data[varData_77]);
                } else {
                  this.stats.misses++;
                }
              }
              return varData_79;
            }
            set(param_1_1, param_2_1, param_3_1) {
              var varData_80;
              var varData_81;
              var varData_82;
              handleAction_27(this, _0x736aed);
              if (this.options.maxKeys > -1 && this.stats.keys >= this.options.maxKeys) {
                varData_80 = this._error("ECACHEFULL");
                throw varData_80;
              }
              if (this.options.forceString && !typeof param_2_1 === "string") {
                param_2_1 = JSON.stringify(param_2_1);
              }
              if (param_3_1 == null) {
                param_3_1 = this.options.stdTTL;
              }
              if ((varData_81 = this._isInvalidKey(param_1_1)) != null) {
                throw varData_81;
              }
              varData_82 = false;
              if (this.data[param_1_1]) {
                varData_82 = true;
                this.stats.vsize -= this._getValLength(this._unwrap(this.data[param_1_1], false));
              }
              this.data[param_1_1] = this._wrap(param_2_1, param_3_1);
              this.stats.vsize += this._getValLength(param_2_1);
              if (!varData_82) {
                this.stats.ksize += this._getKeyLength(param_1_1);
                this.stats.keys++;
              }
              this.emit("set", param_1_1, param_2_1);
              return true;
            }
            mset(param_1_1) {
              var varData_83;
              var varData_84;
              var varData_85;
              var varData_86;
              var varData_87;
              var varData_88;
              var varData_89;
              var varData_90;
              var varData_91;
              var varData_92;
              handleAction_27(this, _0x736aed);
              if (this.options.maxKeys > -1 && this.stats.keys + param_1_1.length >= this.options.maxKeys) {
                varData_83 = this._error("ECACHEFULL");
                throw varData_83;
              }
              varData_85 = 0;
              varData_89 = param_1_1.length;
              for (; varData_85 < varData_89; varData_85++) {
                varData_88 = param_1_1[varData_85];
                ({
                  key: varData_87,
                  val: varData_92,
                  ttl: varData_91
                } = varData_88);
                if (varData_91 && typeof varData_91 !== "number") {
                  varData_83 = this._error("ETTLTYPE");
                  throw varData_83;
                }
                if ((varData_84 = this._isInvalidKey(varData_87)) != null) {
                  throw varData_84;
                }
              }
              varData_86 = 0;
              varData_90 = param_1_1.length;
              for (; varData_86 < varData_90; varData_86++) {
                varData_88 = param_1_1[varData_86];
                ({
                  key: varData_87,
                  val: varData_92,
                  ttl: varData_91
                } = varData_88);
                this.set(varData_87, varData_92, varData_91);
              }
              return true;
            }
            del(param_1_1) {
              var varData_93;
              var varData_94;
              var varData_95;
              var varData_96;
              var varData_97;
              var varData_98;
              handleAction_27(this, _0x736aed);
              if (!Array.isArray(param_1_1)) {
                param_1_1 = [param_1_1];
              }
              varData_93 = 0;
              varData_95 = 0;
              varData_97 = param_1_1.length;
              for (; varData_95 < varData_97; varData_95++) {
                varData_96 = param_1_1[varData_95];
                if ((varData_94 = this._isInvalidKey(varData_96)) != null) {
                  throw varData_94;
                }
                if (this.data[varData_96] != null) {
                  this.stats.vsize -= this._getValLength(this._unwrap(this.data[varData_96], false));
                  this.stats.ksize -= this._getKeyLength(varData_96);
                  this.stats.keys--;
                  varData_93++;
                  varData_98 = this.data[varData_96];
                  delete this.data[varData_96];
                  this.emit("del", varData_96, varData_98.v);
                }
              }
              return varData_93;
            }
            take(param_1_1) {
              var varData_99;
              handleAction_27(this, _0x736aed);
              varData_99 = this.get(param_1_1);
              if (varData_99 != null) {
                this.del(param_1_1);
              }
              return varData_99;
            }
            ttl(param_1_1, param_2_1) {
              var varData_100;
              handleAction_27(this, _0x736aed);
              param_2_1 ||= this.options.stdTTL;
              if (!param_1_1) {
                return false;
              }
              if ((varData_100 = this._isInvalidKey(param_1_1)) != null) {
                throw varData_100;
              }
              if (this.data[param_1_1] != null && this._check(param_1_1, this.data[param_1_1])) {
                if (param_2_1 >= 0) {
                  this.data[param_1_1] = this._wrap(this.data[param_1_1].v, param_2_1, false);
                } else {
                  this.del(param_1_1);
                }
                return true;
              } else {
                return false;
              }
            }
            getTtl(param_1_1) {
              var varData_101;
              var varData_102;
              handleAction_27(this, _0x736aed);
              if (!param_1_1) {
                return undefined;
              }
              if ((varData_102 = this._isInvalidKey(param_1_1)) != null) {
                throw varData_102;
              }
              if (this.data[param_1_1] != null && this._check(param_1_1, this.data[param_1_1])) {
                varData_101 = this.data[param_1_1].t;
                return varData_101;
              } else {
                return undefined;
              }
            }
            keys() {
              var varData_103;
              handleAction_27(this, _0x736aed);
              varData_103 = Object.keys(this.data);
              return varData_103;
            }
            has(param_1_1) {
              var varData_104;
              handleAction_27(this, _0x736aed);
              varData_104 = this.data[param_1_1] != null && this._check(param_1_1, this.data[param_1_1]);
              return varData_104;
            }
            getStats() {
              handleAction_27(this, _0x736aed);
              return this.stats;
            }
            flushAll(_0x16a53d = true) {
              handleAction_27(this, _0x736aed);
              this.data = {};
              this.stats = {
                hits: 0,
                misses: 0,
                keys: 0,
                ksize: 0,
                vsize: 0
              };
              this._killCheckPeriod();
              this._checkData(_0x16a53d);
              this.emit("flush");
            }
            flushStats() {
              handleAction_27(this, _0x736aed);
              this.stats = {
                hits: 0,
                misses: 0,
                keys: 0,
                ksize: 0,
                vsize: 0
              };
              this.emit("flush_stats");
            }
            close() {
              handleAction_27(this, _0x736aed);
              this._killCheckPeriod();
            }
            _checkData(_0x28bcb0 = true) {
              var varData_105;
              var varData_106;
              var varData_107;
              handleAction_27(this, _0x736aed);
              varData_106 = this.data;
              for (varData_105 in varData_106) {
                varData_107 = varData_106[varData_105];
                this._check(varData_105, varData_107);
              }
              if (_0x28bcb0 && this.options.checkperiod > 0) {
                this.checkTimeout = setTimeout(this._checkData, this.options.checkperiod * 1000, _0x28bcb0);
                if (this.checkTimeout != null && this.checkTimeout.unref != null) {
                  this.checkTimeout.unref();
                }
              }
            }
            _killCheckPeriod() {
              if (this.checkTimeout != null) {
                return clearTimeout(this.checkTimeout);
              }
            }
            _check(param_1_1, param_2_1) {
              var varData_108;
              handleAction_27(this, _0x736aed);
              varData_108 = true;
              if (param_2_1.t !== 0 && param_2_1.t < Date.now()) {
                if (this.options.deleteOnExpire) {
                  varData_108 = false;
                  this.del(param_1_1);
                }
                this.emit("expired", param_1_1, this._unwrap(param_2_1));
              }
              return varData_108;
            }
            _isInvalidKey(param_1_1) {
              var varData_109;
              handleAction_27(this, _0x736aed);
              varData_109 = typeof param_1_1;
              if (varData_65.call(this.validKeyTypes, varData_109) < 0) {
                var varData_110 = {
                  type: typeof param_1_1
                };
                return this._error("EKEYTYPE", varData_110);
              }
            }
            _wrap(param_1_1, param_2_1, _0x10c79d = true) {
              var varData_111;
              var varData_112;
              var varData_113;
              var varData_114;
              handleAction_27(this, _0x736aed);
              if (!this.options.useClones) {
                _0x10c79d = false;
              }
              varData_112 = Date.now();
              varData_111 = 0;
              varData_114 = 1000;
              if (param_2_1 === 0) {
                varData_111 = 0;
              } else if (param_2_1) {
                varData_111 = varData_112 + param_2_1 * varData_114;
              } else if (this.options.stdTTL === 0) {
                varData_111 = this.options.stdTTL;
              } else {
                varData_111 = varData_112 + this.options.stdTTL * varData_114;
              }
              return varData_113 = {
                t: varData_111,
                v: _0x10c79d ? varData_63(param_1_1) : param_1_1
              };
            }
            _unwrap(param_1_1, _0x4d9d3e = true) {
              if (!this.options.useClones) {
                _0x4d9d3e = false;
              }
              if (param_1_1.v != null) {
                if (_0x4d9d3e) {
                  return varData_63(param_1_1.v);
                } else {
                  return param_1_1.v;
                }
              }
              return null;
            }
            _getKeyLength(param_1_1) {
              return param_1_1.toString().length;
            }
            _getValLength(param_1_1) {
              handleAction_27(this, _0x736aed);
              if (typeof param_1_1 === "string") {
                return param_1_1.length;
              } else if (this.options.forceString) {
                return JSON.stringify(param_1_1).length;
              } else if (Array.isArray(param_1_1)) {
                return this.options.arrayValueSize * param_1_1.length;
              } else if (typeof param_1_1 === "number") {
                return 8;
              } else if (typeof (param_1_1 != null ? param_1_1.then : undefined) === "function") {
                return this.options.promiseValueSize;
              } else if (typeof Buffer !== "undefined" && Buffer !== null ? Buffer.isBuffer(param_1_1) : undefined) {
                return param_1_1.length;
              } else if (param_1_1 != null && typeof param_1_1 === "object") {
                return this.options.objectValueSize * Object.keys(param_1_1).length;
              } else if (typeof param_1_1 === "boolean") {
                return 8;
              } else {
                return 0;
              }
            }
            _error(param_1_1, _0xf99cf0 = {}) {
              var varData_115;
              handleAction_27(this, _0x736aed);
              varData_115 = new Error();
              varData_115.name = param_1_1;
              varData_115.errorcode = param_1_1;
              varData_115.message = this.ERRORS[param_1_1] != null ? this.ERRORS[param_1_1](_0xf99cf0) : "-";
              varData_115.data = _0xf99cf0;
              return varData_115;
            }
            _initErrors() {
              var varData_116;
              var varData_117;
              var varData_118;
              handleAction_27(this, _0x736aed);
              this.ERRORS = {};
              varData_118 = this._ERRORS;
              for (varData_117 in varData_118) {
                varData_116 = varData_118[varData_117];
                this.ERRORS[varData_117] = this.createErrorMessage(varData_116);
              }
            }
            createErrorMessage(param_1_1) {
              return function (param_1_2) {
                return param_1_1.replace("__key", param_1_2.type);
              };
            }
          }
          ;
          _0x736aed.prototype._ERRORS = {
            ENOTFOUND: "Key `__key` not found",
            ECACHEFULL: "Cache max keys amount exceeded",
            EKEYTYPE: "The key argument has to be of type `string` or `number`. Found: `__key`",
            EKEYSTYPE: "The keys argument has to be an array.",
            ETTLTYPE: "The ttl argument has to be a number."
          };
          return _0x736aed;
        }.call(this);
      }).call(this);
    }
  };
  var varData_119 = {};
  function handleAction_28(param_1) {
    var varData_120 = varData_119[param_1];
    if (varData_120 !== undefined) {
      return varData_120.exports;
    }
    var varData_121 = varData_119[param_1] = {
      exports: {}
    };
    varData_1[param_1].call(varData_121.exports, varData_121, varData_121.exports, handleAction_28);
    return varData_121.exports;
  }
  (() => {
    handleAction_28.n = param_1 => {
      var varData_122 = param_1 && param_1.__esModule ? () => param_1.default : () => param_1;
      handleAction_28.d(varData_122, {
        a: varData_122
      });
      return varData_122;
    };
  })();
  (() => {
    handleAction_28.d = (param_1, param_2) => {
      for (var varData_123 in param_2) {
        if (handleAction_28.o(param_2, varData_123) && !handleAction_28.o(param_1, varData_123)) {
          Object.defineProperty(param_1, varData_123, {
            enumerable: true,
            get: param_2[varData_123]
          });
        }
      }
    };
  })();
  (() => {
    handleAction_28.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (err) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (() => {
    handleAction_28.o = (param_1, param_2) => Object.prototype.hasOwnProperty.call(param_1, param_2);
  })();
  var varData_124 = {};
  (() => {
    'use strict';

    var varData_125 = handleAction_28(304);
    var varData_126 = handleAction_28.n(varData_125);
    let varData_127 = null;
    let varData_128 = null;
    let varData_129 = null;
    let varData_130 = null;
    const varData_131 = new varData_125({
      stdTTL: 1
    });
    const varData_132 = (param_1, param_2) => {
      if (!varData_131.has(param_1)) {
        varData_131.set(param_1, param_2());
      }
      return varData_131.get(param_1);
    };
    const varData_133 = (param_1, param_2) => {
      const varData_134 = GetGameplayCamCoord();
      const [_0x5517ea,, _0x5faed7] = GetGameplayCamRot(0).map(param_1_1 => Math.PI / 180 * param_1_1);
      const varData_135 = Math.abs(Math.cos(_0x5517ea));
      const varData_136 = [-Math.sin(_0x5faed7) * varData_135, Math.cos(_0x5faed7) * varData_135, Math.sin(_0x5517ea)];
      const varData_137 = varData_136.map((param_1_1, param_2_1) => varData_134[param_2_1] + param_1_1);
      const varData_138 = varData_136.map((param_1_1, param_2_1) => varData_134[param_2_1] + param_1_1 * 200);
      const varData_139 = StartShapeTestSweptSphere(varData_137[0], varData_137[1], varData_137[2], varData_138[0], varData_138[1], varData_138[2], 0.2, param_1, param_2, 7);
      return GetShapeTestResult(varData_139);
    };
    const varData_140 = (param_1, param_2) => {
      varData_129 = param_1;
      varData_130 = param_2;
    };
    const varData_141 = () => varData_128 !== null;
    const varData_142 = (param_1, param_2) => varData_132("entity:" + param_1, () => {
      const varData_143 = GetEntityType(param_1);
      if (varData_143 === 0) {
        return {
          type: 0,
          model: null,
          size: null,
          valid: false
        };
      }
      const model = GetEntityModel(param_1);
      const [[_0x406109, _0xb85255], [_0x430f2b, _0xfbe06]] = GetModelDimensions(model);
      const varData_144 = Math.max(_0x430f2b - _0x406109, _0xfbe06 - _0xb85255);
      const varData_145 = param_2(param_1, varData_143, model);
      var varData_146 = {
        type: varData_143,
        model: model,
        size: varData_144,
        valid: varData_145
      };
      return varData_146;
    });
    const varData_147 = (param_1, param_2, param_3, _0x2e16ef = true) => {
      varData_150(false);
      if (!varData_127) {
        varData_127 = setTick(() => {
          if (varData_129) {
            if (!DoesEntityExist(varData_129)) {
              varData_150();
              return;
            }
            const {
              size: _0x3bb00d,
              valid: _0x10197f
            } = varData_142(varData_129, param_3);
            if (!_0x10197f) {
              varData_150();
              return;
            }
            const [_0x416bcd, _0x526349, _0x95054f] = GetEntityCoords(varData_129, true);
            const [_0x18ac1d, _0x37d899] = GetGroundZFor_3dCoord(_0x416bcd, _0x526349, _0x95054f + 1, false);
            DrawMarker(1, _0x416bcd, _0x526349, _0x18ac1d ? _0x37d899 : _0x95054f, 0, 0, 0, 0, 0, 0, _0x3bb00d, _0x3bb00d, 0.4, 0, 255, 0, 150, false, false, 2, false, null, null, false);
            return;
          }
          if (_0x2e16ef && varData_130) {
            DrawMarker(1, ...varData_130, 0, 0, 0, 0, 0, 0, 0.4, 0.4, 0.3, 0, 0, 255, 150, false, false, 2, false, null, null, false);
          }
        });
      }
      varData_128 = setTick(() => {
        const [, _0x3e7f08, _0x119843,, _0x51e1cd] = varData_133(param_1, param_2);
        const {
          valid: _0x3dd879
        } = varData_142(_0x51e1cd, param_3);
        if (_0x3dd879) {
          varData_140(_0x51e1cd, null);
          return;
        }
        varData_140(null, _0x3e7f08 ? _0x119843 : null);
      });
    };
    const varData_148 = () => {
      if (varData_128) {
        clearTick(varData_128);
        varData_128 = null;
        const varData_149 = varData_151();
        emit("np-selector:selectionChanged", varData_149);
        return varData_149;
      }
    };
    const varData_150 = (_0x16ef72 = true) => {
      varData_148();
      clearTick(varData_127);
      varData_127 = null;
      varData_140(null, null);
      if (_0x16ef72) {
        emit("np-selector:selectionChanged", varData_151());
      }
    };
    const varData_151 = () => ({
      selectedCoords: varData_130,
      selectedEntity: varData_129
    });
    handleAction_28.g.exports("startSelecting", varData_147);
    handleAction_28.g.exports("stopSelecting", varData_148);
    handleAction_28.g.exports("getCurrentSelection", varData_151);
    handleAction_28.g.exports("isSelecting", varData_141);
    handleAction_28.g.exports("deselect", varData_150);
  })();
})();