var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as _0x1fb86f, j as _0x1634fd, R as _0x564d76, k as _0x1acf53 } from "./vendor-69ed8822.js";
import { u as _0x51194d, d as _0x27fccf, n as _0x2e3952, C as _0x420446 } from "./index-dcb6474f.js";
import { A as _0x5bb77d } from "./ui-app-b5e34f38.js";
import { B as _0x303949 } from "./button-b138ef6e.js";
import _0x19ab65, { appName } from "./store-c0a0ef47.js";
import "./commonjsHelpers-c5dac66b.js";
import "./vite-a4975f27.js";
import "./bundle-4fbe11f0.js";
const CoordinateGrid = ({
  gridSize: _0x127107,
  selectedCoordinates: _0x1e914c,
  focusedDotIndex: _0x8843fc,
  onGridClick: _0x590ca7,
  onDotClick: _0x5d4bfc,
  onDotDoubleClick: _0x5b25da,
  onDotMouseDown: _0x1e84e3
}) => {
  const varData_1 = _0x1fb86f.useMemo(() => {
    const varData_2 = [];
    const varData_3 = Math.max(1, Math.floor(_0x127107 / 10));
    for (let loopIdx = 0; loopIdx < _0x127107; loopIdx += varData_3) {
      const varData_4 = loopIdx / (_0x127107 - 1) * 100;
      varData_2.push(<div className="grid-line vertical" style={{
        left: varData_4 + "%"
      }} key={"v-" + loopIdx} />);
      const varData_5 = (_0x127107 - 1 - loopIdx) / (_0x127107 - 1) * 100;
      varData_2.push(<div className="grid-line horizontal" style={{
        top: varData_5 + "%"
      }} key={"h-" + loopIdx} />);
    }
    if ((_0x127107 - 1) % varData_3 !== 0) {
      varData_2.push(<div className="grid-line vertical" style={{
        left: "100%"
      }} key="v-edge" />);
      varData_2.push(<div className="grid-line horizontal" style={{
        top: "0%"
      }} key="h-edge" />);
    }
    return varData_2;
  }, [_0x127107]);
  const varData_6 = _0x1fb86f.useCallback(param_1 => {
    if (_0x1e914c.length >= 3) {
      return;
    }
    const varData_7 = param_1.currentTarget.getBoundingClientRect();
    const varData_8 = Math.round((param_1.clientX - varData_7.left) / varData_7.width * (_0x127107 - 1));
    const varData_9 = Math.round((varData_7.height - (param_1.clientY - varData_7.top)) / varData_7.height * (_0x127107 - 1));
    const varData_10 = _0x1e914c.some(param_1_1 => param_1_1.x === varData_8 && param_1_1.y === varData_9);
    if (varData_10) {
      return;
    }
    _0x590ca7(varData_8, varData_9);
  }, [_0x1e914c, _0x127107, _0x590ca7]);
  const varData_11 = _0x1fb86f.useCallback((param_1, param_2) => {
    param_2.stopPropagation();
    param_2.preventDefault();
    _0x1e84e3(param_1, param_2);
  }, [_0x1e84e3]);
  const varData_12 = _0x1fb86f.useCallback((param_1, param_2) => {
    param_2.stopPropagation();
    _0x5d4bfc(param_1);
  }, [_0x5d4bfc]);
  const varData_13 = _0x1fb86f.useCallback((param_1, param_2) => {
    param_2.stopPropagation();
    _0x5b25da(param_1);
  }, [_0x5b25da]);
  return <div className="coordinate-grid" onClick={varData_6}>{varData_1}{_0x1e914c.map((param_1, param_2) => <_0x564d76.Fragment key={param_2}><div className={"coordinate-dot " + (_0x8843fc === param_2 ? "focused" : "")} style={{
        left: param_1.x / (_0x127107 - 1) * 100 + "%",
        top: (_0x127107 - 1 - param_1.y) / (_0x127107 - 1) * 100 + "%"
      }} data-index={param_2} onMouseDown={param_1_1 => varData_11(param_2, param_1_1)} onClick={param_1_1 => varData_12(param_2, param_1_1)} onDoubleClick={param_1_1 => varData_13(param_2, param_1_1)}><span className="dot-index">{param_2 + 1}</span></div><div className="coordinate-label" style={{
        left: param_1.x / (_0x127107 - 1) * 100 + "%",
        top: (_0x127107 - 1 - param_1.y) / (_0x127107 - 1) * 100 + "%"
      }} data-index={param_2}>({param_1.x},{param_1.y})</div></_0x564d76.Fragment>)}</div>;
};
const AxisLabels = ({
  gridSize: _0xc2c683,
  type: _0x471a98
}) => {
  const varData_14 = _0x1fb86f.useMemo(() => {
    const varData_15 = Math.max(1, Math.floor(_0xc2c683 / 10));
    const varData_16 = [];
    for (let loopIdx = 0; loopIdx < _0xc2c683; loopIdx += varData_15) {
      varData_16.push(loopIdx);
    }
    if ((_0xc2c683 - 1) % varData_15 !== 0) {
      varData_16.push(_0xc2c683 - 1);
    }
    return varData_16;
  }, [_0xc2c683]);
  if (_0x471a98 === "y") {
    return <div className="y-axis-labels">{varData_14.map((param_1, param_2) => {
        const varData_17 = (_0xc2c683 - 1 - param_1) / (_0xc2c683 - 1) * 100;
        return <div className="y-label" style={{
          top: varData_17 + "%",
          marginTop: "-0.5em"
        }} key={param_1}>{param_1}</div>;
      })}</div>;
  }
  return <div className="x-axis-labels">{varData_14.map(param_1 => {
      const varData_18 = param_1 / (_0xc2c683 - 1) * 100;
      return <div className="x-label" style={{
        left: varData_18 + "%"
      }} key={param_1}>{param_1}</div>;
    })}</div>;
};
const coordInput = "";
const CoordinateInput = ({
  submitCoordinates: _0x547e4b
}) => {
  const [_0x2b7791, _0x1da8be] = _0x51194d(appName);
  const [_0x2c9374, _0x5976c1] = _0x1fb86f.useState(false);
  const [_0x46744b, _0x2383c8] = _0x1fb86f.useState({
    x: 0,
    y: 0
  });
  const {
    selectedCoordinates = [],
    focusedDotIndex = -1,
    gridSize = 50,
    shiftSize = 5,
    maxCoordinates = 3
  } = _0x2b7791 || {};
  if (!_0x2b7791) {
    return null;
  }
  const varData_19 = _0x1fb86f.useCallback((param_1, param_2) => {
    if (selectedCoordinates.length >= maxCoordinates) {
      return;
    }
    const varData_20 = [...selectedCoordinates, {
      x: param_1,
      y: param_2
    }];
    const varData_21 = varData_20.length - 1;
    _0x1da8be({
      selectedCoordinates: varData_20,
      focusedDotIndex: varData_21
    });
  }, [selectedCoordinates, maxCoordinates, _0x1da8be]);
  const varData_22 = _0x1fb86f.useCallback(param_1 => {
    if (focusedDotIndex === param_1 && !_0x2c9374) {
      return;
    }
    _0x1da8be({
      focusedDotIndex: param_1
    });
  }, [focusedDotIndex, _0x2c9374, _0x1da8be]);
  const varData_23 = _0x1fb86f.useCallback(param_1 => {
    const varData_24 = selectedCoordinates.filter((param_1_1, param_2) => param_2 !== param_1);
    _0x1da8be({
      selectedCoordinates: varData_24,
      focusedDotIndex: -1
    });
  }, [selectedCoordinates, _0x1da8be]);
  const varData_25 = _0x1fb86f.useCallback((param_1, param_2) => {
    if (focusedDotIndex === param_1) {
      _0x5976c1(true);
      const varData_26 = param_2.currentTarget.closest(".coordinate-grid");
      if (varData_26) {
        const varData_27 = varData_26.getBoundingClientRect();
        const varData_28 = param_2.currentTarget;
        _0x2383c8({
          x: param_2.clientX - varData_27.left - (varData_28.offsetLeft + varData_28.offsetWidth / 2),
          y: param_2.clientY - varData_27.top - (varData_28.offsetTop + varData_28.offsetHeight / 2)
        });
      }
    } else {
      _0x1da8be({
        focusedDotIndex: param_1
      });
    }
  }, [focusedDotIndex, _0x1da8be]);
  const varData_29 = _0x1fb86f.useCallback(param_1 => {
    if (!_0x2c9374 || focusedDotIndex === -1) {
      return;
    }
    const varData_30 = document.querySelector(".coordinate-grid");
    if (!varData_30) {
      return;
    }
    const varData_31 = varData_30.getBoundingClientRect();
    const varData_32 = param_1.clientX - varData_31.left - _0x46744b.x;
    const varData_33 = param_1.clientY - varData_31.top - _0x46744b.y;
    const varData_34 = Math.max(0, Math.min(gridSize - 1, Math.floor(varData_32 / varData_31.width * gridSize)));
    const varData_35 = Math.max(0, Math.min(gridSize - 1, Math.floor((varData_31.height - varData_33) / varData_31.height * gridSize)));
    const varData_36 = selectedCoordinates.some((param_1_1, param_2) => param_2 !== focusedDotIndex && param_1_1.x === varData_34 && param_1_1.y === varData_35);
    if (varData_36) {
      return;
    }
    const varData_37 = [...selectedCoordinates];
    varData_37[focusedDotIndex] = {
      x: varData_34,
      y: varData_35
    };
    _0x1da8be({
      selectedCoordinates: varData_37
    });
  }, [_0x2c9374, focusedDotIndex, _0x46744b, gridSize, selectedCoordinates, _0x1da8be]);
  const varData_38 = _0x1fb86f.useCallback(() => {
    _0x5976c1(false);
  }, []);
  const varData_39 = _0x1fb86f.useCallback((param_1, param_2) => {
    if (focusedDotIndex === -1) {
      return;
    }
    const varData_40 = selectedCoordinates[focusedDotIndex];
    if (!varData_40) {
      return;
    }
    const varData_41 = Math.max(0, Math.min(gridSize - 1, varData_40.x + param_1));
    const varData_42 = Math.max(0, Math.min(gridSize - 1, varData_40.y + param_2));
    const varData_43 = selectedCoordinates.some((param_1_1, param_2_1) => param_2_1 !== focusedDotIndex && param_1_1.x === varData_41 && param_1_1.y === varData_42);
    if (varData_43) {
      return;
    }
    const varData_44 = [...selectedCoordinates];
    varData_44[focusedDotIndex] = {
      x: varData_41,
      y: varData_42
    };
    _0x1da8be({
      selectedCoordinates: varData_44
    });
  }, [focusedDotIndex, selectedCoordinates, gridSize, _0x1da8be]);
  const varData_45 = _0x1fb86f.useCallback(param_1 => {
    if (focusedDotIndex === -1) {
      return;
    }
    const varData_46 = param_1.shiftKey ? shiftSize : 1;
    switch (param_1.key) {
      case "ArrowUp":
        param_1.preventDefault();
        varData_39(0, varData_46);
        break;
      case "ArrowDown":
        param_1.preventDefault();
        varData_39(0, -varData_46);
        break;
      case "ArrowLeft":
        param_1.preventDefault();
        varData_39(-varData_46, 0);
        break;
      case "ArrowRight":
        param_1.preventDefault();
        varData_39(varData_46, 0);
        break;
      case "Delete":
      case "Backspace":
        param_1.preventDefault();
        const varData_47 = selectedCoordinates.filter((param_1_1, param_2) => param_2 !== focusedDotIndex);
        _0x1da8be({
          selectedCoordinates: varData_47,
          focusedDotIndex: -1
        });
        break;
      case "Escape":
        param_1.preventDefault();
        _0x1da8be({
          focusedDotIndex: -1
        });
        break;
    }
  }, [focusedDotIndex, shiftSize, varData_39, selectedCoordinates, _0x1da8be]);
  _0x1fb86f.useEffect(() => {
    document.addEventListener("mousemove", varData_29);
    document.addEventListener("mouseup", varData_38);
    document.addEventListener("keydown", varData_45);
    return () => {
      document.removeEventListener("mousemove", varData_29);
      document.removeEventListener("mouseup", varData_38);
      document.removeEventListener("keydown", varData_45);
    };
  }, [varData_29, varData_38, varData_45]);
  if (!_0x2b7791) {
    return null;
  }
  return <div className="coord-input-app-wrapper"><div className="coordinate-picker-container"><div className="grid-container"><div className="grid-wrapper"><AxisLabels gridSize={gridSize} type="y" /><CoordinateGrid gridSize={gridSize} selectedCoordinates={selectedCoordinates} focusedDotIndex={focusedDotIndex} onGridClick={varData_19} onDotClick={varData_22} onDotDoubleClick={varData_23} onDotMouseDown={varData_25} /><AxisLabels gridSize={gridSize} type="x" /></div></div><div className="submit-section"><_0x303949.Primary onClick={() => {
          _0x547e4b();
        }}>Submit Coordinates</_0x303949.Primary></div></div></div>;
};
const {
  mapStateToProps,
  mapDispatchToProps
} = _0x27fccf(_0x19ab65);
class Container extends _0x564d76.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      show: false
    });
    __publicField(this, "onEvent", param_1 => {
      if (param_1.show) {
        this.onShow(param_1.data || param_1);
      } else {
        this.props.updateState(param_1);
      }
    });
    __publicField(this, "onShow", (_0x264ae9 = {}) => {
      const varData_48 = Math.floor((_0x264ae9.gridSize || 50) * 0.1);
      this.props.updateState({
        ..._0x264ae9,
        shiftSize: varData_48,
        submitUrl: _0x264ae9.submitUrl ?? "np-ui:submitCoordinates",
        selectedCoordinates: [],
        focusedDotIndex: -1,
        isDragging: false,
        dragOffset: {
          x: 0,
          y: 0
        }
      });
      this.setState({
        show: true
      });
    });
    __publicField(this, "onHide", () => {
      this.setState({
        show: false
      });
    });
    __publicField(this, "submitCoordinates", () => {
      const varData_49 = this.props.selectedCoordinates || [];
      const varData_50 = this.props.submitUrl || "np-ui:submitCoordinates";
      _0x2e3952(varData_50, {
        coordinates: varData_49
      });
    });
  }
  render() {
    return <_0x5bb77d name={appName} onEvent={this.onEvent} onHide={this.onHide} onShow={this.onShow} onEscape={this.onHide}>{this.state.show && <CoordinateInput {...this.props} submitCoordinates={this.submitCoordinates} />}</_0x5bb77d>;
  }
}
const Container$1 = _0x1acf53(mapStateToProps, mapDispatchToProps)(Container);
const config = () => {
  return {
    name: "coordinate-picker",
    render: Container$1,
    type: _0x420446.Application
  };
};
export { config as default };